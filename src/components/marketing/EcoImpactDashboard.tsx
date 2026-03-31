
import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Globe, Zap, ArrowRight, Info, ShieldCheck, Sparkles, TrendingUp as ROI } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const EcoImpactDashboard: React.FC = () => {
  const stats = [
    { label: "Auditado (24h)", value: "1,2k itens", icon: <ShieldCheck className="text-ml-blue" />, detail: "Produtos verificados com nota 4.8+" },
    { label: "Kits Ativos", value: "12 combos", icon: <Zap className="text-ml-yellow fill-ml-yellow" />, detail: "Combos 'Monte seu Negócio' validados" },
    { label: "Selo Curadoria", value: "Top 1%", icon: <Sparkles className="text-ml-green" />, detail: "Apenas o melhor da Shopee & Amazon" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden mb-8 group"
    >
      <div className="p-5 md:p-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* Left Side: Score & Welcome */}
          <div className="flex items-center gap-5 md:gap-8">
            <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center flex-shrink-0">
              <svg className="w-full h-full -rotate-90">
                <circle cx="50%" cy="50%" r="40%" fill="none" stroke="#F5F5F5" strokeWidth="8" />
                <motion.circle 
                  cx="50%" cy="50%" r="40%" 
                  fill="none" stroke="#3483FA" strokeWidth="8" 
                  strokeDasharray="251.2" 
                  initial={{ strokeDashoffset: 251.2 }}
                  animate={{ strokeDashoffset: 40 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-[24px] md:text-[32px] font-black text-ml-blue leading-none">94</span>
                <span className="text-[10px] md:text-[12px] text-gray-400 font-bold uppercase tracking-tighter">ScoutScore</span>
              </div>
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-0 right-0"
              >
                <Sparkles size={16} className="text-ml-yellow fill-ml-yellow" />
              </motion.div>
            </div>
            
            <div className="space-y-2">
              <h2 className="text-[20px] md:text-[24px] font-bold text-gray-800 flex items-center gap-2 leading-tight">
                Relatório Pro Scout
                <div className="flex items-center bg-ml-blue/10 px-2 py-0.5 rounded text-ml-blue">
                   <span className="text-[10px] font-black italic tracking-widest">MULTI DEAL</span>
                </div>
              </h2>
              <p className="text-[14px] md:text-[15px] text-gray-500 max-w-md leading-relaxed">
                Bem-vindo ao HUB, **Renato**! Nosso algoritmo de curadoria acaba de filtrar as melhores brechas de preço em Tech e Empreendedorismo.
              </p>
            </div>
          </div>

          {/* Right Side: Quick Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full lg:w-auto overflow-hidden">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + (idx * 0.1) }}
                className="p-4 bg-gray-50/50 rounded-xl border border-gray-100/50 hover:bg-white hover:border-ml-blue/20 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 bg-white rounded-lg shadow-sm">
                    {React.cloneElement(stat.icon as React.ReactElement, { size: 16 })}
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{stat.label}</span>
                </div>
                <div className="text-[18px] md:text-[20px] font-black text-gray-800 line-clamp-1">{stat.value}</div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="text-[11px] text-ml-blue flex items-center gap-1 mt-1 hover:underline cursor-help">
                      <Info size={10} />
                      Inteligência
                    </TooltipTrigger>
                    <TooltipContent className="bg-ml-blue text-white border-none text-[12px] font-medium p-2">
                      {stat.detail}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-6 border-t border-dotted border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
             <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-900 text-white rounded-lg text-[13px] font-bold shadow-lg">
               <ROI size={16} />
               Assinante Pro Scout
             </div>
             <span className="text-[13px] text-gray-400 hover:text-ml-blue underline cursor-pointer transition-colors">
               Ver histórico de ROI dos Kits
             </span>
          </div>
          
          <Button variant="ghost" className="text-ml-blue hover:bg-ml-blue/5 hover:text-ml-blue-dark gap-2 text-[14px] font-bold group/btn">
            Ver Alertas de Brecha (24h)
            <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default EcoImpactDashboard;
