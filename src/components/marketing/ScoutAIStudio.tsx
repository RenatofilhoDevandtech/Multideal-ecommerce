import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Brain, TrendingUp, BarChart3, ChevronRight, Loader2, Target, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import ScoutAIService, { AnalysisResult, AIStrategy } from '@/services/scoutAIService';

const ScoutAIStudio: React.FC = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [strategy, setStrategy] = useState<AIStrategy | null>(null);
  const [inputValue, setInputValue] = useState('');

  const handleAnalyze = async () => {
    if (!inputValue) return;
    setIsAnalyzing(true);
    try {
      const productData = await ScoutAIService.extractProductData(inputValue);
      const businessStrategy = await ScoutAIService.getBusinessStrategy(2500);
      setAnalysis(productData);
      setStrategy(businessStrategy);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto py-12 px-4">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-ml-blue/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 -right-4 w-72 h-72 bg-ml-yellow/10 rounded-full blur-[100px] pointer-events-none" />

      <Card className="relative overflow-hidden border-white/20 bg-white/40 backdrop-blur-xl shadow-2xl rounded-[32px] p-8 md:p-12 border">
        {/* Header section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ml-blue/10 text-ml-blue border border-ml-blue/20">
              <Sparkles size={14} className="animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest">Scout AI Studio Engine</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-gray-900 leading-[0.9]">
              Visão <span className="text-ml-blue">Aumentada</span> <br /> de Negócio
            </h2>
            <p className="text-gray-500 font-medium text-sm max-w-md">
              Processamento de dados estruturados e modelos de decisão baseados em padrões Anthropic.
            </p>
          </div>
          
          <div className="w-full md:w-auto">
            <div className="flex bg-gray-50/50 p-1 rounded-2xl border border-gray-100 backdrop-blur-sm">
              <input 
                type="text" 
                placeholder="Ex: Kit Energia Solar Portátil Premium..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="bg-transparent border-none focus:ring-0 text-sm font-medium px-4 py-2 w-full md:w-64 text-gray-600 outline-none"
              />
              <Button 
                onClick={handleAnalyze}
                disabled={isAnalyzing || !inputValue}
                className="bg-ml-blue hover:bg-ml-blue-dark text-white rounded-xl px-6 font-bold shadow-lg shadow-ml-blue/20"
              >
                {isAnalyzing ? <Loader2 className="animate-spin" size={18} /> : "Simular"}
              </Button>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <AnimatePresence mode="wait">
          {analysis && !isAnalyzing ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {/* Product Extraction Card */}
              <div className="space-y-6">
                <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm space-y-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 text-ml-blue">
                    <div className="p-2 bg-ml-blue/10 rounded-lg"><Brain size={20} /></div>
                    <h3 className="font-black tracking-tight uppercase text-xs">Extração Estruturada</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between border-b border-gray-50 pb-2">
                       <span className="text-xs text-gray-400 font-bold uppercase">Produto</span>
                       <span className="text-xs text-gray-700 font-black">{analysis.productName}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-50 pb-2">
                       <span className="text-xs text-gray-400 font-bold uppercase">Categoria</span>
                       <span className="text-xs text-gray-700 font-black">{analysis.category}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-50 pb-2">
                       <span className="text-xs text-gray-400 font-bold uppercase">Target Price</span>
                       <span className="text-xs text-ml-green font-black">R${analysis.suggestedPrice},00</span>
                    </div>
                  </div>

                  <p className="text-[13px] text-gray-500 font-medium italic leading-relaxed">
                    "{analysis.scoutInsight}"
                  </p>
                </div>

                {/* ROI Badge */}
                <div className="p-6 rounded-3xl bg-ml-blue text-white shadow-xl shadow-ml-blue/30 flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-80">ROI Projetado</p>
                    <p className="text-3xl font-black font-mono">+{strategy?.roi}x</p>
                  </div>
                  <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-md">
                    <Target size={28} />
                  </div>
                </div>
              </div>

              {/* Strategy Section */}
              <div className="space-y-6">
                <div className="p-6 rounded-3xl bg-gray-50/50 border border-gray-100 space-y-4">
                  <div className="flex items-center gap-3 text-ml-yellow">
                    <div className="p-2 bg-ml-yellow/10 rounded-lg"><TrendingUp size={20} /></div>
                    <h3 className="font-black tracking-tight uppercase text-xs text-gray-800">Diretrizes de Escala</h3>
                  </div>

                  <ul className="space-y-3">
                    {strategy?.suggestions.map((s, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3 text-[13px] font-medium text-gray-600"
                      >
                        <ChevronRight size={16} className="text-ml-blue mt-0.5" />
                        {s}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="pt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${strategy?.viability === 'High' ? 'bg-ml-green' : 'bg-ml-yellow'}`} />
                      <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Viabilidade: {strategy?.viability}</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <Zap size={14} className="text-ml-yellow fill-ml-yellow" />
                       <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Eco-Score: {strategy?.ecoScore}</span>
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full h-14 border-gray-200 text-gray-400 font-bold rounded-2xl hover:bg-white hover:text-ml-blue transition-all border-dashed">
                  Exportar Relatório Analítico <BarChart3 size={18} className="ml-2" />
                </Button>
              </div>
            </motion.div>
          ) : isAnalyzing ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center space-y-6"
            >
               <div className="relative inline-block">
                 <div className="absolute inset-0 bg-ml-blue/20 rounded-full blur-2xl animate-pulse" />
                 <Brain size={64} className="text-ml-blue relative animate-bounce" />
               </div>
               <div className="space-y-2">
                 <h4 className="text-xl font-black text-gray-900 tracking-tighter">Modelando Estratégia...</h4>
                 <p className="text-sm text-gray-500 font-medium italic">"Extraindo vetores de lucro e sustentabilidade via Scout v2"</p>
               </div>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-16 text-center border-2 border-dashed border-gray-100 rounded-[32px] bg-gray-50/30"
            >
               <BarChart3 size={48} className="text-gray-200 mx-auto mb-4" />
               <p className="text-gray-400 font-medium text-sm">Insira o nome de um produto ou ideia para <br /> iniciar a análise de inteligência Scout.</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer Technical Note */}
        <div className="mt-12 pt-8 border-t border-gray-100/50 flex flex-col sm:flex-row justify-between items-center gap-4">
           <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-gray-400">
              <span className="flex items-center gap-1"><Zap size={12} className="text-ml-yellow" /> Tool Use Pattern</span>
              <span className="flex items-center gap-1"><Box size={12} className="text-ml-blue" /> Pydantic Schema</span>
           </div>
           <p className="text-[10px] text-gray-400 font-medium italic">
             Arquitetura inspirada nos padrões oficiais da Anthropic Claude Cookbook.
           </p>
        </div>
      </Card>
    </div>
  );
};

export default ScoutAIStudio;

// Minimal Box icon for the footer tag
const Box = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
    <path d="m3.3 7 8.7 5 8.7-5" />
    <path d="M12 22V12" />
  </svg>
);
