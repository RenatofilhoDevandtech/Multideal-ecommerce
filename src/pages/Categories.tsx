
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/product/ProductCard';
import {
  Shirt, Headphones, ShoppingCart, ShoppingBag, Laptop, Footprints,
  Leaf, Zap, Sparkles, ChevronRight, Home, TrendingUp,
  type LucideIcon
} from 'lucide-react';
import { categoriesData } from '@/data/categories';
import AIAssistant from '@/components/feedback/AIAssistant';
import { useEcoProducts } from '@/hooks/useEcoProducts';

const iconMap: Record<string, LucideIcon> = {
  Shirt,
  Headphones,
  ShoppingCart,
  ShoppingBag,
  Laptop,
  Footprints,
  Home,
  TrendingUp,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 12 },
  },
};

const Categories: React.FC = () => {
  const { allProducts, getProductsByCategory } = useEcoProducts();
  const [selectedCategory, setSelectedCategory] = useState(categoriesData[0].name);

  const filteredProducts = getProductsByCategory(selectedCategory);

  return (
    <div className="flex flex-col min-h-screen bg-ml-background selection:bg-ml-blue/30">
      <Header />

      <main className="flex-grow pb-16">
        {/* Breadcrumb Area */}
        <div className="bg-white border-b border-gray-100 shadow-sm">
          <div className="container mx-auto px-4 md:px-8 py-6">
            <div className="flex items-center gap-2 text-[13px] text-gray-400 mb-2">
              <span className="hover:text-ml-blue cursor-pointer">Início</span>
              <ChevronRight size={14} />
              <span className="font-bold text-gray-800">Categorias Multideal</span>
            </div>
            <h1 className="text-3xl font-black text-gray-800 tracking-tighter flex items-center gap-3">
              Nossas Coleções
              <div className="w-2 h-2 bg-ml-green rounded-full animate-pulse" />
            </h1>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-8 pt-10">
          {/* Category Selector Grid */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {categoriesData.map((category) => {
              const Icon = iconMap[category.iconName] ?? ShoppingBag;
              const isActive = selectedCategory === category.name;

              return (
                <motion.div
                  key={category.id}
                  variants={itemVariants}
                  className={`
                    cursor-pointer relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300
                    ${isActive ? 'ring-2 ring-ml-blue bg-white' : 'bg-white/50 hover:bg-white'}
                  `}
                  onClick={() => setSelectedCategory(category.name)}
                >
                  <div className="p-5 flex flex-col items-center text-center">
                    <div className={`
                      w-20 h-20 rounded-full mb-4 flex items-center justify-center transition-transform duration-500 group-hover:scale-110
                      ${isActive ? 'bg-ml-blue text-white shadow-lg' : 'bg-gray-100 text-gray-400 group-hover:bg-ml-blue/10 group-hover:text-ml-blue'}
                    `}>
                      <Icon className="w-10 h-10" />
                    </div>
                    <h3 className={`font-bold text-[15px] mb-1 ${isActive ? 'text-ml-blue' : 'text-gray-700'}`}>
                      {category.name}
                    </h3>
                    <p className="text-[12px] text-gray-400 font-medium">
                      {category.count} Itens Eco
                    </p>
                  </div>
                  {isActive && (
                    <div className="absolute top-2 right-2">
                      <Sparkles size={16} className="text-ml-yellow fill-ml-yellow" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Products from Selected Category Section */}
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-200 pb-6 gap-4">
              <div>
                <h2 className="text-[28px] font-black text-gray-800 tracking-tight flex items-center gap-3">
                  {selectedCategory}
                  <span className="text-[14px] bg-ml-green/10 text-ml-green px-3 py-1 rounded-full font-bold">
                    -{Math.floor(Math.random() * 20) + 10}% CO₂
                  </span>
                </h2>
                <p className="text-gray-500 text-[15px] mt-1">Exibindo os melhores produtos sustentáveis nesta categoria.</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[13px] text-gray-400">Entrega grátis disponível para itens desta coleção</span>
              </div>
            </div>

            <motion.ul
              className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-x-8 md:gap-y-10"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={selectedCategory}
            >
              {(filteredProducts.length > 0 ? filteredProducts : allProducts.slice(0, 4)).map(product => (
                <ProductCard
                  key={product.id}
                  id={String(product.id)}
                  name={product.name}
                  price={product.salePrice}
                  image={product.image}
                  category={product.category}
                />
              ))}
            </motion.ul>

            {/* Empty State / Bottom Info */}
            <div className="mt-16 bg-white rounded-2xl p-8 border border-gray-100 flex flex-col items-center text-center max-w-2xl mx-auto shadow-sm">
              <div className="w-16 h-16 bg-ml-green/10 rounded-full flex items-center justify-center mb-4 text-ml-green">
                <Leaf size={32} />
              </div>
              <h3 className="text-20 font-bold text-gray-800">Compromisso Multideal 2026</h3>
              <p className="text-gray-500 text-[14px] mt-2 leading-relaxed">
                Todos os produtos exibidos nesta categoria passam por um rigoroso processo de auditoria ambiental. Priorizamos produtores locais e materiais biodegradáveis para garantir o menor impacto possível.
              </p>
              <button className="text-ml-blue font-bold text-[14px] mt-4 hover:underline">Saiba como auditamos</button>
            </div>
          </div>
        </div>
      </main>

      <AIAssistant />
      <Footer />
    </div>
  );
};

export default Categories;
