import React, { useState, useMemo } from 'react';
import { TrendingUp, DollarSign, Target, Calendar, BarChart3, Info, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Slider } from '@/components/ui/slider';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface ROICalculatorProps {
  investmentValue: number;
  initialUnitSalePrice: number;
  initialUnitCost: number;
}

const ROICalculator: React.FC<ROICalculatorProps> = ({ 
  investmentValue, 
  initialUnitSalePrice, 
  initialUnitCost 
}) => {
  const [salePrice, setSalePrice] = useState(initialUnitSalePrice);
  const [unitsPerDay, setUnitsPerDay] = useState(5);
  
  const profitPerUnit = salePrice - initialUnitCost;
  const isNegativeProfit = profitPerUnit <= 0;
  
  const dailyProfit = profitPerUnit * unitsPerDay;
  const monthlyProfit = dailyProfit * 30;
  const daysToPayback = isNegativeProfit ? Infinity : Math.ceil(investmentValue / dailyProfit);
  const monthlyROIPercent = isNegativeProfit ? 0 : (monthlyProfit / investmentValue) * 100;

  return (
    <TooltipProvider>
      <div className="bg-white rounded-2xl p-6 border border-ml-blue/10 shadow-sm space-y-6 relative overflow-hidden group/calc">
        <div className="absolute top-0 right-0 w-32 h-32 bg-ml-blue/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover/calc:bg-ml-blue/10 transition-colors" />
        
        <div className="flex items-center justify-between mb-2 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-ml-blue text-white rounded-xl flex items-center justify-center shadow-lg shadow-ml-blue/20">
              <TrendingUp size={20} />
            </div>
            <div>
              <h4 className="font-black text-gray-900 text-[16px] tracking-tight">Viabilidade Scout</h4>
              <p className="text-[11px] text-gray-500 font-bold uppercase tracking-widest italic flex items-center gap-1">
                <Zap size={10} className="text-ml-yellow fill-ml-yellow" /> ROI Automático
              </p>
            </div>
          </div>
          <Tooltip>
            <TooltipTrigger>
              <Info size={16} className="text-gray-400 hover:text-ml-blue transition-colors" />
            </TooltipTrigger>
            <TooltipContent className="max-w-[200px] text-[11px] bg-gray-900 text-white border-none p-3 shadow-xl">
              Cálculo baseado em curadoria técnica Multideal e métricas de conversão reais.
            </TooltipContent>
          </Tooltip>
        </div>

        <div className="space-y-6 relative z-10">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-[12px] font-black text-gray-700 flex items-center gap-2 uppercase tracking-tight">
                  <DollarSign size={14} className="text-ml-blue" />
                  Preço de Venda Sugerido
                </label>
                <span className="text-ml-blue font-black text-[15px] bg-ml-blue/5 px-2 py-0.5 rounded">R$ {salePrice}</span>
              </div>
              <Slider 
                value={[salePrice]} 
                min={initialUnitCost + 1} 
                max={initialUnitSalePrice * 3} 
                step={1}
                onValueChange={(val) => setSalePrice(val[0])}
                className="py-2"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-[12px] font-black text-gray-700 flex items-center gap-2 uppercase tracking-tight">
                  <BarChart3 size={14} className="text-ml-blue" />
                  Fluxo de Vendas Diário
                </label>
                <span className="text-ml-blue font-black text-[14px] bg-ml-blue/5 px-2 py-0.5 rounded">{unitsPerDay} uni/dia</span>
              </div>
              <Slider 
                value={[unitsPerDay]} 
                min={1} 
                max={50} 
                step={1}
                onValueChange={(val) => setUnitsPerDay(val[0])}
                className="py-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:border-ml-blue/30 transition-all group">
              <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest mb-1 group-hover:text-ml-blue transition-colors">Lucro Mensal Est.</p>
              <div className="flex items-baseline gap-1">
                <span className="text-xs font-bold text-ml-green">R$</span>
                <p className="text-[22px] font-black text-gray-900 tracking-tighter">
                  {monthlyProfit.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}
                </p>
              </div>
            </div>
            <div className="bg-ml-blue text-white p-4 rounded-xl shadow-lg shadow-ml-blue/20 flex flex-col justify-between">
              <p className="text-[10px] text-white/70 uppercase font-black tracking-widest mb-1">Payback Líquido</p>
              <div className="flex items-baseline gap-1">
                <p className="text-[22px] font-black tracking-tighter">
                  {daysToPayback === Infinity ? 'N/A' : daysToPayback}
                </p>
                <span className="text-xs font-bold opacity-80">{daysToPayback === 1 ? 'dia' : 'dias'}</span>
              </div>
            </div>
          </div>

          <motion.div 
            key={daysToPayback}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start gap-3 p-4 bg-gray-50 border border-gray-100 rounded-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-1 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
              <Calendar size={64} className="text-ml-blue" />
            </div>
            <Target className="text-ml-blue shrink-0 mt-0.5" size={18} />
            <div className="relative z-10">
              {isNegativeProfit ? (
                <p className="text-[13px] text-red-500 leading-snug font-bold">
                  Preço de venda insuficiente para cobrir o custo operacional. Reajuste o valor.
                </p>
              ) : (
                <>
                  <p className="text-[13px] text-gray-800 leading-snug font-medium">
                    Vendendo <span className="font-black text-ml-blue">{unitsPerDay} unidades</span> por dia, você recupera seu investimento de <span className="font-bold text-gray-900">R$ {investmentValue}</span> em aproximadamente <span className="text-ml-blue font-black">{daysToPayback} dias</span>.
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <p className="text-[11px] text-gray-500 font-bold uppercase tracking-tight flex items-center gap-1">
                      <TrendingUp size={10} className="text-ml-green" /> ROI: {monthlyROIPercent.toFixed(1)}% /mês
                    </p>
                    <p className="text-[11px] text-gray-500 font-bold uppercase tracking-tight flex items-center gap-1">
                      <DollarSign size={10} className="text-ml-blue" /> Margem: {((profitPerUnit / salePrice) * 100).toFixed(0)}%
                    </p>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </TooltipProvider>
  );
};


export default ROICalculator;

