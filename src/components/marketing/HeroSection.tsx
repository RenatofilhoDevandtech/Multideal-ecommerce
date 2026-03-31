
import React from 'react';
import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';
import { heroData } from '@/data/hero';
import { Button } from '@/components/ui/button';
import { TrendingUp, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const endTime = Date.now() + heroData.countdownHours * 60 * 60 * 1000;

  return (
    <section className="relative overflow-hidden bg-white/40 backdrop-blur-sm border border-white/20">
      {/* Dynamic Background Mesh */}
      <div className="absolute inset-0 bg-mesh opacity-50" />
      
      <div className="container mx-auto px-6 md:px-12 py-12 md:py-20 flex flex-col md:flex-row items-center gap-10 relative z-10">
        {/* Left Content */}
        <motion.div 
          className="flex flex-col gap-6 flex-1 text-center md:text-left items-center md:items-start"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <span className="px-3 py-1 bg-ml-blue/10 text-ml-blue font-bold text-[11px] uppercase tracking-wider rounded-full flex items-center gap-1.5 border border-ml-blue/20 shadow-sm">
               <Zap size={12} className="text-ml-yellow fill-ml-yellow" />
               Multideal 2026 • Performance Engineering
             </span>

            <div className="scale-75 sm:scale-90 origin-center md:origin-left">
              <CountdownTimer endTime={endTime} />
            </div>
          </div>
          
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-gray-800 leading-[1.1] max-w-2xl">
            {heroData.title}
          </h1>
          
          <p className="text-gray-600 text-[16px] md:text-lg leading-relaxed max-w-lg">
            {heroData.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
            <Link to="/produtos" className="w-full sm:w-auto">
              <Button size="lg" className="w-full bg-ml-blue hover:bg-ml-blue-dark text-white h-12 px-10 rounded-md text-[16px] font-bold shadow-md shadow-ml-blue/20 transition-all active:scale-95 flex items-center gap-2">
                {heroData.ctaPrimary.label}
                <ArrowRight size={18} />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-10 rounded-md text-[16px] font-bold border-ml-blue text-ml-blue hover:bg-ml-blue/5 transition-all active:scale-95">
              {heroData.ctaSecondary.label}
            </Button>
          </div>

          <div className="flex items-center gap-4 mt-2">
             <div className="flex items-center gap-1 text-[12px] text-gray-500 font-bold uppercase tracking-tight">
                <ShieldCheck size={16} className="text-ml-blue" />
                Curadoria Auditada
             </div>
             <div className="w-px h-4 bg-gray-200" />
             <div className="flex items-center gap-1 text-[12px] text-gray-500 font-bold uppercase tracking-tight">
                <Zap size={16} className="text-ml-yellow fill-ml-yellow" />
                ROI Projetado em Tempo Real
             </div>
          </div>

          {/* ROI Social Proof Ticker */}
          <div className="mt-8 px-4 py-2 bg-ml-blue/5 rounded-2xl border border-ml-blue/10 inline-flex items-center gap-3 overflow-hidden max-w-sm sm:max-w-md w-full">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-ml-blue text-white shrink-0">
               <TrendingUp size={14} />
            </div>
            <div className="text-left overflow-hidden">
               <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ repeat: Infinity, repeatType: "reverse", duration: 4 }}
                className="text-[11px] sm:text-[12px] font-bold text-gray-700 whitespace-nowrap"
               >
                 João (SP) acabou de lucrar +210% com o Kit Solar.
               </motion.p>
               <p className="text-[10px] text-ml-blue font-black uppercase tracking-tighter">Validação Real-Time</p>
            </div>
          </div>

        </motion.div>

        {/* Right Media */}
        <motion.div
          className="relative flex-1 flex justify-center items-center w-full max-w-[450px] md:max-w-none"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Main Floating Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-ml-green/10 rounded-full blur-3xl group-hover:bg-ml-blue/10 transition-colors duration-1000" />
            <motion.img 
              src={heroData.image.src}
              alt={heroData.image.alt}
              className="w-full max-w-[400px] h-auto drop-shadow-2xl z-10 relative"
              loading="eager"
              fetchPriority="high"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 1, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 6,
                ease: "easeInOut"
              }}
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600";
              }}
            />
            
            {/* Discount Badge */}
            <motion.div 
              className="absolute -top-4 -right-4 bg-ml-yellow text-gray-800 font-black rounded-lg px-4 py-2 shadow-lg z-20 flex flex-col items-center border border-white/50"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [5, 0, 5]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 4,
                ease: "easeInOut"
              }}
            >
              <span className="text-[18px] leading-none">{heroData.badgeDiscount}</span>
              <span className="text-[10px] uppercase tracking-tighter text-ml-blue">Verificado</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Ornaments */}
      <img src={heroData.ornament} alt="" className="absolute top-10 right-10 w-24 opacity-5 pointer-events-none rotate-12" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-ml-green/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
};

export default HeroSection;
