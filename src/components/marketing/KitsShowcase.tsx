
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp as ROI } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/product/ProductCard';
import { Kit } from '@/types';

interface KitsShowcaseProps {
  kits: Kit[];
}

const KitsShowcase: React.FC<KitsShowcaseProps> = ({ kits }) => {
  return (
    <section className="container mx-auto px-4 md:px-8 space-y-6 sm:space-y-8 mt-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-100 pb-4 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <div className="bg-ml-blue/10 p-1.5 rounded-lg text-ml-blue">
              <ROI size={16} />
            </div>
            <span className="text-[11px] sm:text-[12px] font-black text-ml-blue uppercase tracking-[0.2em]">Oportunidade de Negócio</span>
          </div>
          <h2 className="text-[20px] sm:text-[22px] md:text-2xl font-bold text-gray-800 tracking-tight">Viabilidade em um Clique</h2>
          <p className="text-gray-500 text-[13px] sm:text-[14px]">Kits validados com calculadora de payback integrada. Comece a lucrar sem dor de cabeça.</p>
        </div>
        <Link to="/produtos?category=Kits de Lucro" className="text-ml-blue text-[13px] sm:text-[14px] font-bold hover:underline mb-1 flex items-center gap-1 group w-fit">
          Ver todos os kits empreendedores <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {kits.map((kit) => (
          <ProductCard
            key={kit.id}
            id={kit.id.toString()}
            name={kit.name}
            price={kit.totalPrice}
            image={kit.image}
            category={kit.category}
            roiData={kit.roiData}
            bundleItems={kit.bundleItems}
            isTrending={true}
          />
        ))}

        {/* Promotional Banner - Now spans full width on next row if 4 kits are present */}
        <div className="flex col-span-2 lg:col-span-4 bg-gradient-to-br from-ml-blue to-blue-700 rounded-xl p-6 md:p-8 text-white relative overflow-hidden items-center group/banner hover:shadow-2xl transition-all duration-500">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between w-full gap-6">
            <div className="max-w-xl space-y-3">
              <h3 className="text-xl md:text-3xl font-black leading-tight">Engenharia que Gera Valor</h3>
              <p className="text-white/80 text-[14px] md:text-[16px]">Nossa curadoria utiliza algoritmos de ROI para filtrar as melhores oportunidades do mercado global.</p>
            </div>
            <Link to="/labs" className="shrink-0">
              <Button className="bg-white text-ml-blue font-black hover:bg-gray-100 border-none shadow-xl rounded-xl h-14 px-8 uppercase tracking-widest text-[13px] active:scale-95 transition-all">
                Explorar Multideal Labs
              </Button>
            </Link>
          </div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl group-hover/banner:scale-110 transition-transform duration-700" />
        </div>
      </div>
    </section>
  );
};

export default KitsShowcase;
