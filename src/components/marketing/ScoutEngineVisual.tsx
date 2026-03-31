import React from 'react';
import { motion } from 'framer-motion';
import { Database, Cpu, Target, Zap, Search, ShieldCheck, TrendingUp } from 'lucide-react';

const ScoutEngineVisual: React.FC = () => {
  const steps = [
    { icon: <Search size={24} />, label: "Diagnóstico Digital", color: "bg-ml-blue", detail: "Análise de Gap e Mercado" },
    { icon: <Zap size={24} />, label: "Upgrade Profissional", color: "bg-ml-yellow", detail: "UX, UI e Autoridade", delay: 1 },
    { icon: <TrendingUp size={24} />, label: "Escala & ROI", color: "bg-ml-green", detail: "Faturamento Exponencial", delay: 2 },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto py-24 px-4">
      <div className="text-center mb-16 space-y-4">
        <h3 className="text-2xl md:text-5xl font-bold text-gray-800 tracking-tighter uppercase">Jornada de Inovação Scout</h3>
        <p className="text-gray-500 font-bold text-lg">O roteiro exato para tirar seu negócio do anonimato e colocá-lo no topo do digital.</p>
      </div>

      <div className="relative flex flex-col md:flex-row items-center justify-between gap-16 md:gap-8">
        {/* Connection Line (Desktop) */}
        <div className="absolute top-1/2 left-0 w-full h-[3px] bg-gray-100 -translate-y-1/2 z-0 hidden md:block" />
        
        {steps.map((step, idx) => (
          <div key={idx} className="relative z-10 flex flex-col items-center group flex-1">
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: step.delay || 0, type: "spring", stiffness: 100 }}
              className={`w-24 h-24 ${step.color} rounded-[32px] flex items-center justify-center text-white shadow-2xl relative overflow-hidden group-hover:rotate-6 transition-all duration-300 cursor-help`}
            >
              {/* Subtle inner highlight */}
              <div className="absolute inset-x-0 top-0 h-1/2 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">{step.icon}</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (step.delay || 0) + 0.3 }}
              className="mt-8 text-center"
            >
              <h4 className="font-bold text-xl text-gray-800 uppercase tracking-tighter mb-1">{step.label}</h4>
              <p className="text-[11px] text-ml-blue font-black uppercase tracking-[0.2em]">{step.detail}</p>
            </motion.div>

            {/* Connecting Icon (Mobile) */}
            {idx < steps.length - 1 && (
              <div className="md:hidden mt-8 opacity-20">
                <Target size={32} className="text-ml-blue animate-bounce" />
              </div>
            )}
          </div>
        ))}

        {/* Dynamic Data Pulse on Line */}
        <motion.div 
          animate={{ x: ["0%", "100%"] }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          className="absolute top-1/2 left-0 w-48 h-[6px] bg-gradient-to-r from-transparent via-ml-yellow to-transparent -translate-y-1/2 z-[5] hidden md:block blur-sm"
        />
      </div>

      <div className="mt-24 p-10 rounded-[48px] bg-white border border-ml-blue/10 relative overflow-hidden group shadow-xl shadow-ml-blue/5">
          <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-ml-blue/5 rounded-full blur-[100px]" />
          
          <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
            <div className="shrink-0">
              <div className="w-20 h-20 rounded-3xl bg-ml-blue/10 flex items-center justify-center text-ml-blue shadow-lg shadow-ml-blue/5 transform -rotate-3 group-hover:rotate-3 transition-transform">
                <ShieldCheck size={40} />
              </div>
            </div>
            <div className="space-y-4 text-center md:text-left">
              <h4 className="text-2xl font-bold text-gray-800 tracking-tight">O "Relatório Scout" é o seu Seguro de Sucesso</h4>
              <p className="text-base text-gray-500 font-medium leading-relaxed max-w-2xl">
                Não trabalhamos com achismos. Cada etapa da nossa jornada é validada por nossa <span className="text-ml-blue font-bold">Scout Engine</span>: uma auditoria de mercado que garante que cada real investido em seu novo site ou campanha de marketing tenha o maior potencial de retorno projetado para 2026.
              </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default ScoutEngineVisual;
