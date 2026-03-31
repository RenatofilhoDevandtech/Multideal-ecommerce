
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Play, Youtube, Terminal, Rocket, Brain, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import elevateBanner from '@/assets/adcards/elevate-banner.svg';

const MembershipBanner: React.FC = React.memo(() => {
  return (
    <section className="container mx-auto px-0 sm:px-4 md:px-8 mb-12 sm:mb-16">
      <div className="bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-800 sm:rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden group shadow-lg sm:shadow-2xl sm:shadow-indigo-500/20">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/3" />
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
           <Code className="absolute top-10 right-20 rotate-12" size={80} />
           <Terminal className="absolute bottom-10 right-40 -rotate-12" size={60} />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-14">
          <div className="space-y-4 sm:space-y-6 text-center lg:text-left w-full lg:flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] text-ml-yellow">
              Plataforma Elevate
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-[1] sm:leading-[1.1]">
              DESBLOQUEIE O SEU POTENCIAL <br className="hidden sm:block" /> <span className="text-ml-yellow italic">ELEVATE TECH & CARREIRA</span>
            </h2>

            <p className="text-white/80 text-[14px] sm:text-lg max-w-xl mx-auto lg:mx-0">
              Curadoria de cursos tech e carreira com simulados de entrevista, cursos gratuitos via YouTube e benefícios exclusivos para o seu crescimento.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Button 
                onClick={() => window.open('https://projeto-elevate.vercel.app/', '_blank')}
                className="w-full sm:w-auto h-12 sm:h-14 px-10 bg-ml-yellow hover:bg-white text-ml-blue font-black rounded-xl sm:rounded-2xl text-[15px] sm:text-lg shadow-xl transition-all border-b-4 border-black/20 active:border-b-0 active:translate-y-1"
              >
                COMECE GRÁTIS
              </Button>
              <div className="flex flex-col">
                <span className="text-white/90 text-[12px] sm:text-[14px] font-bold">Inovação & ROI</span>
                <span className="text-ml-yellow text-[10px] sm:text-[11px] font-black uppercase tracking-widest">Seja um Patrocinado</span>
              </div>
            </div>
          </div>

          <div className="relative w-full lg:w-1/3 aspect-video sm:aspect-square lg:aspect-auto h-auto lg:h-[300px] shrink-0">
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="w-full h-full"
             >
               <img 
                 src={elevateBanner} 
                 alt="Elevate Platform" 
                 className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(255,255,255,0.2)]"
               />
             </motion.div>
             
             {/* Feature Badges */}
             <div className="absolute -top-4 -left-4 bg-white/10 backdrop-blur-xl p-2 rounded-lg border border-white/20 hidden sm:block">
                <div className="flex items-center gap-2 text-[10px] font-bold">
                   <Brain size={14} className="text-ml-yellow" />
                   <span>IA & Carreira</span>
                </div>
             </div>
             <div className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-xl p-2 rounded-lg border border-white/20 hidden sm:block">
                <div className="flex items-center gap-2 text-[10px] font-bold">
                   <Youtube size={14} className="text-red-400" />
                   <span>Cursos Grátis</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
});

MembershipBanner.displayName = 'MembershipBanner';

export default MembershipBanner;
