import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/layout/Header';
import ProductCard from '@/components/product/ProductCard';
import Footer from '@/components/layout/Footer';
import { Search, Filter, ChevronDown, LayoutGrid, List, X, Leaf, Sparkles } from 'lucide-react';
import AIAssistant from '@/components/feedback/AIAssistant';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { useEcoProducts } from '@/hooks/useEcoProducts';

const CATEGORIES = ['Todos', 'Tecnologia', 'Casa & Reforma', 'Kits de Lucro'];

const Products = () => {
   const { getProductsByCategory, isLoading } = useEcoProducts();
   const [searchParams] = useSearchParams();
   const categoryParam = searchParams.get('category');
   
   const [activeCategory, setActiveCategory] = useState('Todos');
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

   useEffect(() => {
     if (categoryParam) {
       // Handle both cases (encoded and decoded)
       const decodedCategory = decodeURIComponent(categoryParam);
       if (CATEGORIES.includes(decodedCategory)) {
         setActiveCategory(decodedCategory);
       }
     }
   }, [categoryParam]);

   const filteredProducts = getProductsByCategory(activeCategory);

   return (
      <div className="min-h-screen bg-ml-background flex flex-col">
         <Header />

         <main className="flex-grow container mx-auto px-4 md:px-8 py-4 md:py-8">
            {/* Top Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
               <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-[13px] text-gray-400">
                     <span className="hover:text-ml-blue cursor-pointer transition-colors">Início</span>
                     <span>/</span>
                     <span className="font-bold text-gray-800 tracking-tight">Loja Multideal</span>
                  </div>
                  <h1 className="text-[24px] md:text-[28px] font-bold text-gray-800 tracking-tight">Explorar Ofertas</h1>
               </div>

               <div className="flex items-center gap-2">
                  <span className="text-[13px] text-gray-500 font-medium tracking-tight">Ordenar por:</span>
                  <button className="flex items-center gap-1.5 px-4 py-2 bg-white rounded-xl border border-gray-200 text-[14px] font-bold text-gray-700 hover:border-ml-blue transition-colors shadow-sm">
                     Mais relevantes
                     <ChevronDown size={14} className="text-ml-blue" />
                  </button>
               </div>
            </div>

            <div className="flex gap-10 relative">
               {/* Mobile Filter Toggle */}
               <Button
                  variant="outline"
                  className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-white shadow-2xl rounded-full border-ml-blue text-ml-blue gap-2 font-bold px-6 h-12"
                  onClick={() => setIsSidebarOpen(true)}
               >
                  <Filter size={18} />
                  Filtrar Escolhas
               </Button>

               {/* Sidebar Component */}
               <AnimatePresence>
                  {(isSidebarOpen || (typeof window !== 'undefined' && window.innerWidth >= 768)) && (
                     <>
                        {/* Mobile Overlay */}
                        {isSidebarOpen && (
                           <motion.div
                              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                              onClick={() => setIsSidebarOpen(false)}
                              className="fixed inset-0 bg-black/40 z-50 md:hidden backdrop-blur-sm"
                           />
                        )}

                        <motion.aside
                           initial={isSidebarOpen ? { x: -300 } : false}
                           animate={{ x: 0 }}
                           exit={{ x: -300 }}
                           className={`
                     ${isSidebarOpen ? 'fixed top-0 left-0 bottom-0 z-[60] w-[280px] bg-white p-6 shadow-2xl' : 'hidden md:block w-64 flex-shrink-0'}
                     transition-all duration-300
                   `}
                        >
                           <div className="flex items-center justify-between mb-8 md:mb-6">
                              <h2 className="text-[20px] font-bold text-gray-800">Filtros</h2>
                              {isSidebarOpen && (
                                 <button onClick={() => setIsSidebarOpen(false)} className="md:hidden"><X size={24} /></button>
                              )}
                           </div>

                           {/* Delivery Section */}
                           <div className="space-y-6">
                              <div className="space-y-4">
                                 <h3 className="text-[15px] font-bold text-gray-800">Entrega</h3>
                                 <div className="space-y-3">
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                       <div className="w-4 h-4 border border-gray-300 rounded-sm group-hover:border-ml-blue transition-colors flex items-center justify-center">
                                          <div className="w-2 h-2 bg-ml-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                       </div>
                                       <span className="text-[14px] text-gray-600 font-bold italic text-ml-green flex items-center gap-1">
                                          Full
                                          <Sparkles size={12} className="fill-ml-yellow text-ml-yellow" />
                                       </span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                       <div className="w-4 h-4 border border-gray-300 rounded-sm group-hover:border-ml-blue transition-colors" />
                                       <span className="text-[14px] text-gray-600">Frete Grátis</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                       <div className="w-4 h-4 border border-gray-300 rounded-sm group-hover:border-ml-blue transition-colors" />
                                       <span className="flex flex-col">
                                          <span className="text-[14px] text-gray-600 font-bold">Entrega Verde</span>
                                          <span className="text-[11px] text-ml-green">-60% CO2 via Locker</span>
                                       </span>
                                    </label>
                                 </div>
                              </div>

                              {/* Categories Section */}
                              <div className="space-y-4 pt-6 border-t border-gray-100">
                                 <h3 className="text-[15px] font-bold text-gray-800">Categorias</h3>
                                 <ul className="space-y-3">
                                    {CATEGORIES.map(cat => (
                                       <li
                                          key={cat}
                                          onClick={() => {
                                             setActiveCategory(cat);
                                             if (isSidebarOpen) setIsSidebarOpen(false);
                                          }}
                                          className={`
                                   text-[14px] cursor-pointer hover:text-ml-blue transition-all flex items-center justify-between
                                   ${activeCategory === cat ? 'font-black text-ml-blue translate-x-1' : 'text-gray-500'}
                                 `}
                                       >
                                          {cat}
                                          {activeCategory === cat && <div className="w-1.5 h-1.5 bg-ml-blue rounded-full" />}
                                       </li>
                                    ))}
                                 </ul>
                              </div>

                              {/* Eco-Impact Section */}
                              <div className="space-y-4 pt-6 border-t border-gray-100">
                                 <h3 className="text-[15px] font-bold text-gray-800">Impacto Ambiental</h3>
                                 <div className="space-y-3">
                                    <label className="flex items-center gap-2 text-[13px] text-gray-500 hover:text-ml-green cursor-pointer">
                                       <Leaf size={14} />
                                       Altamente Sustentável (A)
                                    </label>
                                    <label className="flex items-center gap-2 text-[13px] text-gray-500 hover:text-ml-green cursor-pointer">
                                       <Leaf size={14} className="opacity-50" />
                                       Produção Local
                                    </label>
                                 </div>
                              </div>
                           </div>
                        </motion.aside>
                     </>
                  )}
               </AnimatePresence>

               {/* Results Area */}
               <div className="flex-1 space-y-6">
                  <div className="flex items-center justify-between text-[13px] text-gray-500">
                     <p>{filteredProducts.length} resultados encontrados</p>
                     <div className="flex items-center gap-2">
                        <button className="p-1.5 rounded bg-white text-ml-blue shadow-sm border border-gray-100"><LayoutGrid size={18} /></button>
                        <button className="p-1.5 rounded text-gray-400 hover:bg-white hover:text-ml-blue transition-all"><List size={18} /></button>
                     </div>
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-x-6 gap-y-8 pb-20">
                     {filteredProducts.map(product => (
                        <ProductCard
                           key={product.id}
                           id={String(product.id)}
                           name={product.name}
                           price={product.salePrice}
                           image={product.image}
                           category={product.category}
                        />
                     ))}
                  </div>

                  {/* Empty State */}
                  {!isLoading && filteredProducts.length === 0 && (
                     <div className="flex flex-col items-center justify-center py-20 text-center">
                        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                           <Search className="text-gray-300" size={32} />
                        </div>
                        <h3 className="text-[18px] font-bold text-gray-800">Nenhum produto encontrado</h3>
                        <p className="text-gray-500 max-w-xs px-4">Tente ajustar seus filtros para encontrar o que procura.</p>
                        <Button variant="link" onClick={() => setActiveCategory('Todos')} className="text-ml-blue font-bold mt-4">Limpar todos os filtros</Button>
                     </div>
                  )}
               </div>
            </div>
         </main>

         <AIAssistant />
         <Footer />
      </div>
   );
};

export default Products;
