
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Tag, Zap, Clock } from 'lucide-react';
import TrendingProducts from '@/components/product/TrendingProducts';

const Offers = () => {
  return (
    <div className="min-h-screen bg-ml-background flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Banner Hero Offers */}
        <section className="bg-gradient-to-r from-ml-blue to-indigo-700 py-12 md:py-20 text-white overflow-hidden relative">
           <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center gap-10">
              <div className="space-y-6 md:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-[12px] font-black uppercase tracking-widest">
                   <Clock size={16} /> Ofertas por Tempo Limitado
                </div>
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
                  OFERTAS <span className="text-ml-yellow">VERDES</span>
                </h1>
                <p className="text-lg text-white/80">
                  Descontos de até 70% em produtos selecionados com alto índice de sustentabilidade. Aproveite antes que acabe!
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                 <Tag className="w-48 h-48 md:w-64 md:h-64 text-white/10 rotate-12" />
                 <Zap className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 text-ml-yellow animate-pulse blur-3xl opacity-30" />
              </div>
           </div>
        </section>

        {/* Dynamic Product Sections */}
        <div className="container mx-auto px-4 md:px-8 py-16 space-y-16">
          <TrendingProducts />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Offers;
