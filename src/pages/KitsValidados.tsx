
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { kitsData } from '@/data/kits';
import { booksData } from '@/data/books';
import ProductCard from '@/components/product/ProductCard';
import { BookOpen, Star, TrendingUp, Zap, ShoppingCart, ExternalLink, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/layout/SEO';
import cardScout from '@/assets/cards/card-scout-2026.png';

const KitsValidados = () => {
  return (
    <div className="min-h-screen bg-ml-background flex flex-col">
      <SEO 
        title="Kits Validados | Estruturas Lucrativas (ROI 2026)" 
        description="Filtre e escolha setups completos validados pelo Multideal Labs para Amazon, Shopee e Mercado Livre. Comece a lucrar hoje."
      />
      <Header />

      
      <main className="flex-grow">
        {/* Hero Section - Matched to HeroBanners Size & Style */}
        <section className="relative w-full h-[350px] md:h-[480px] overflow-hidden bg-ml-blue mt-0">
          {/* Background Image Asset - Full Size */}
          <img 
            src={cardScout} 
            alt="Scout Kits 2026 Banner" 
            className="absolute inset-0 w-full h-full object-cover opacity-100"
          />
          
          {/* Overlay for Contrast/Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-ml-blue/80 via-ml-blue/40 to-transparent flex items-center">
            <div className="container mx-auto px-4 md:px-12 lg:px-20">
              <div className="max-w-2xl space-y-4 md:space-y-6 text-white text-left">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-block px-4 py-1.5 rounded-xl bg-black/20 backdrop-blur-md text-[12px] md:text-[14px] font-black uppercase tracking-widest border border-white/20 mb-2"
                >
                   <Zap size={14} className="inline mr-2 text-ml-yellow fill-ml-yellow" />
                   Scout Kits 2026
                </motion.div>
                
                <div className="space-y-2 md:space-y-4">
                  <motion.h1 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-[32px] md:text-[64px] font-black leading-[1.1] tracking-tighter uppercase"
                  >
                    Kits Validados com <br />
                    <span className="text-ml-yellow italic">ROI Real Projetado</span>
                  </motion.h1>
                  
                  <motion.p 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-[16px] md:text-[20px] font-bold text-white/90 max-w-xl leading-relaxed"
                  >
                    Aceleramos sua jornada empreendedora. Filtramos, combinamos e validamos os melhores equipamentos para você começar a lucrar hoje.
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-6 flex flex-wrap gap-4"
                >
                  <Button className="bg-ml-yellow hover:bg-ml-yellow/90 text-black font-black px-10 h-14 rounded-2xl text-lg shadow-xl shadow-ml-yellow/20">
                    Começar Agora
                  </Button>
                  <Button variant="outline" className="border-white/40 hover:bg-white/10 text-white font-black px-10 h-14 rounded-2xl text-lg backdrop-blur-sm">
                    Ver Guia do ROI
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Floating badge for authority */}
          <div className="absolute top-10 right-10 z-20 hidden md:block">
            <div className="bg-ml-green text-white font-black px-6 py-3 rounded-2xl text-[14px] shadow-2xl border border-white/20 transform rotate-3 flex items-center gap-2">
              <ShieldCheck size={20} />
              AUDITORIA 2026 ATIVA
            </div>
          </div>
        </section>

        {/* Kits Grid */}
        <section className="container mx-auto px-4 md:px-8 py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-gray-100 pb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-gray-800 tracking-tighter">
                Engenharia de <span className="text-ml-blue">Oportunidades</span>
              </h2>
              <p className="text-gray-500">Escolha seu nicho e receba o setup completo validado pelo nosso Lab.</p>
            </div>
            <div className="flex items-center gap-4 text-sm font-bold text-gray-400">
               <span className="flex items-center gap-1"><ShieldCheck size={16} className="text-ml-blue" /> Preços Auditados</span>
               <span className="flex items-center gap-1"><TrendingUp size={16} className="text-ml-green" /> ROI Validado</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {kitsData.map((kit, idx) => (
              <motion.div
                key={kit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <ProductCard 
                  id={kit.id.toString()}
                  name={kit.name}
                  price={kit.totalPrice}
                  image={kit.image}
                  category={kit.category}
                  roiData={kit.roiData}
                  bundleItems={kit.bundleItems}
                  isTrending={true}
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Books Section - Biblioteca Scout */}
        <section className="bg-white py-24 border-t border-gray-100 relative overflow-hidden">
          {/* Decorative Background for Section */}
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gray-50 to-transparent" />
          
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-16 gap-8">
              <div className="text-center md:text-left space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-ml-blue/5 text-ml-blue rounded-lg text-[11px] font-black uppercase tracking-[0.2em] border border-ml-blue/10">
                  <BookOpen size={14} />
                  Biblioteca Scout
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter leading-none">
                  O Mindset por trás do <span className="text-ml-blue">Lucro</span>
                </h2>
                <p className="text-gray-500 max-w-xl text-lg font-medium leading-relaxed">
                  Ferramentas físicas sem inteligência emocional e técnica não escalam. <br className="hidden md:block" />
                  Curadoria de literatura focada em <span className="text-ml-blue font-bold">alta performance</span>.
                </p>
              </div>
              
              <div className="hidden lg:flex items-center gap-6 p-6 bg-gray-50 rounded-[24px] border border-gray-100">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-ml-blue/20 flex items-center justify-center text-[10px] font-bold text-ml-blue">
                      {i === 3 ? "+8" : ""}
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <p className="font-black text-gray-900">11 Obras Curadas</p>
                  <p className="text-gray-500 text-xs">Atualizado para 2026</p>
                </div>
              </div>
            </div>
 
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
              {booksData.map((book, idx) => (
                <motion.div
                  key={book.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: idx * 0.05, duration: 0.5 }}
                  className="flex flex-col h-full group"
                >
                  {/* Book Mockup Container */}
                  <div className="relative aspect-[3/4.2] mb-8 group-hover:-translate-y-2 transition-transform duration-500 ease-out">
                    {/* Shadow Layer */}
                    <div className="absolute inset-x-8 bottom-0 h-4 bg-black/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="w-full h-full bg-gray-50 rounded-[20px] overflow-hidden border border-gray-100 shadow-sm group-hover:shadow-2xl group-hover:shadow-ml-blue/10 transition-all duration-500 relative flex items-center justify-center p-8">
                       {/* Subtle Shine Effect */}
                       <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                       
                       <img 
                         src={book.image} 
                         alt={book.title} 
                         className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] group-hover:drop-shadow-[0_25px_50px_rgba(0,0,0,0.25)] transition-all duration-500 transform group-hover:scale-105"
                       />
                       
                       {/* Category Ribbon */}
                       <div className="absolute top-4 right-4 translate-x-12 -translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500">
                          <span className="px-2 py-1 bg-ml-blue text-white text-[9px] font-black uppercase tracking-tighter rounded shadow-lg">
                             {book.category}
                          </span>
                       </div>
                    </div>
                  </div>
 
                  {/* Info Content */}
                  <div className="flex flex-col flex-grow px-2">
                    <div className="flex items-center gap-1.5 mb-3">
                       <div className="flex text-ml-yellow">
                         {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
                       </div>
                       <span className="text-[10px] font-bold text-gray-400">SCOUT RATING</span>
                    </div>
 
                    <h3 className="text-xl font-black text-gray-900 leading-tight mb-1 group-hover:text-ml-blue transition-colors line-clamp-2 min-h-[48px]">
                      {book.title}
                    </h3>
                    <p className="text-sm font-bold text-gray-400 mb-4 px-0.5 uppercase tracking-tighter">por {book.author}</p>
                    
                    <p className="text-[14px] text-gray-500 font-medium leading-relaxed mb-6 line-clamp-3 min-h-[63px]">
                      {book.description}
                    </p>
 
                    {/* Value Badge or Highlight */}
                    <div className="mt-auto pt-6 border-t border-gray-100">
                       {book.highlight ? (
                          <div className="mb-4 inline-flex items-center gap-2 px-2.5 py-1 bg-ml-green/5 text-ml-green rounded text-[11px] font-black italic border border-ml-green/10">
                            <Zap size={10} />
                            "{book.highlight}"
                          </div>
                       ) : (
                          <div className="mb-4 h-[28px]" />
                       )}
 
                       <div className="flex items-center justify-between gap-4">
                          <div className="flex flex-col">
                            <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Investimento</span>
                            <div className="flex items-baseline gap-1">
                               <span className="text-xs font-bold text-gray-400">R$</span>
                               <span className="text-[22px] font-black text-gray-900 leading-none">{book.price.toFixed(2)}</span>
                            </div>
                          </div>
                          
                          <Button 
                            onClick={() => window.open(book.affiliateUrl, '_blank')}
                            className="bg-ml-blue hover:bg-ml-blue-dark text-white rounded-xl h-12 px-6 flex items-center gap-2 group/btn font-bold text-sm shadow-lg shadow-ml-blue/20"
                          >
                            <span className="hidden sm:inline">Comprar na </span> Amazon
                            <ExternalLink size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                       </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
 
            <div className="mt-24 pt-12 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8 opacity-60">
               <div className="flex items-center gap-6">
                  <div className="h-px w-12 bg-gray-300" />
                  <p className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-400">Curadoria Scout Intelligence v2.0</p>
               </div>
               <div className="italic text-sm text-center text-gray-500 font-medium max-w-md">
                 "O conhecimento é o único ativo que não pode ser taxado nem roubado por algoritmos."
               </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default KitsValidados;
