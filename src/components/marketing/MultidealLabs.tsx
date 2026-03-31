import React from 'react';
import { Cpu, Database, Box, ArrowUpRight, Github, ExternalLink, Code2, Globe, TrendingUp, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import ScoutAIStudio from './ScoutAIStudio';

// Configuration for easy visual updates
const LABS_CONFIG = {
  heroBg: "/src/assets/cards/card-multilab.png",
  featuredImage: "/src/assets/cards/card-carrossel-mutideal.png",
  scoutBadge: "/src/assets/cards/card-scout-2026.png"
};

const MultidealLabs: React.FC = () => {
  const services = [
    { icon: <Globe size={18} />, name: "Landing Pages de Elite", detail: "Sites de alta conversão para produtos e serviços." },
    { icon: <TrendingUp size={18} />, name: "Marketing & SEO", detail: "Posicionamento orgânico e estratégias de tráfego." },
    { icon: <Cpu size={18} />, name: "Business Transformation", detail: "Profissionalize seu negócio do zero ao digital." },
    { icon: <Box size={18} />, name: "Design & Branding", detail: "Identidade visual que transmite autoridade." },
  ];

  const projects = [
    { 
      name: "Primeflix Hub", 
      desc: "Sistema de curadoria e organização de entretenimento.", 
      tag: "Entertainment Tech",
      url: "#", 
      icon: <Globe size={20} className="text-ml-blue" />
    },
    { 
      name: "Elevate Platform", 
      desc: "Plataforma de cursos e mentorias com foco em ROI.", 
      tag: "EdTech Solution",
      url: "https://projeto-elevate.vercel.app/", 
      icon: <Zap size={20} className="text-ml-yellow fill-ml-yellow" />
    },
    { 
      name: "Multideal E-commerce", 
      desc: "Estrutura modular para venda de produtos digitais.", 
      tag: "E-commerce Engine",
      url: "#", 
      icon: <Code2 size={20} className="text-ml-green" />
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-white border-y border-gray-100">
      {/* Structural Engineering Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#3483FA 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px' }} />
      
      {/* Subtle brand glow - Top Left */}
      <div className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] bg-ml-blue/5 rounded-full blur-[120px] pointer-events-none" />
      {/* Subtle brand glow - Bottom Right */}
      <div className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-ml-yellow/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative p-8 md:p-12 rounded-[32px] overflow-hidden group shadow-2xl border border-gray-100 min-h-[600px] flex flex-col justify-center">
            {/* Background Image Layer */}
            <div 
              className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
              style={{ backgroundImage: `url(${LABS_CONFIG.heroBg})` }}
            />
            <div className="absolute inset-0 z-[1] bg-white/90 backdrop-blur-sm group-hover:bg-white/85 transition-colors" />
            
            <div className="relative z-10 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ml-blue/5 border border-ml-blue/10 text-ml-blue">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ml-blue opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-ml-blue"></span>
                </span>
                <span className="text-[11px] font-black uppercase tracking-widest">Multideal Labs • Innovation & Services</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[0.9] text-gray-800 uppercase">
                Negócios <br /> 
                <span className="text-ml-blue">Transmutados</span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed max-w-xl font-bold italic">
                "Não vendemos apenas código. Construímos a vitrine que coloca seu pequeno negócio no radar do mercado de elite."
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {services.map((service, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white/50 border border-gray-100 hover:border-ml-blue/20 transition-all hover:bg-white shadow-sm">
                    <div className="mt-1 p-2 rounded-lg bg-ml-blue/10 text-ml-blue">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-[14px] text-gray-800">{service.name}</h4>
                      <p className="text-[11px] text-gray-500 font-medium leading-tight mt-1">{service.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-6">
                <Button 
                  onClick={() => window.open('https://wa.me/5581993414545', '_blank')}
                  className="h-12 bg-ml-blue hover:bg-ml-blue-dark text-white font-bold rounded-xl px-8 shadow-lg shadow-ml-blue/20 uppercase tracking-widest text-[12px]"
                >
                  Orçamento Grátis <ArrowUpRight size={18} className="ml-2" />
                </Button>
                <div className="hidden sm:flex items-center gap-2 px-4 rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm">
                   <div className="w-8 h-8 rounded-full overflow-hidden border border-white">
                      <img src={LABS_CONFIG.scoutBadge} alt="Scout" className="w-full h-full object-cover" />
                   </div>
                   <span className="text-[11px] font-black text-gray-400 uppercase tracking-tighter italic">Validado via Scout Engine</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative" id="portfolio">
            <div className="bg-white border border-gray-100 rounded-[32px] p-8 md:p-10 shadow-2xl relative overflow-hidden group/card">
              <div className="absolute top-0 right-0 w-32 h-32 bg-ml-blue/5 rounded-full blur-3xl" />
              
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold tracking-tight flex items-center gap-2 text-gray-800">
                  <Box size={24} className="text-ml-blue" />
                  Portfolio & Soluções
                </h3>
                <div className="text-[10px] font-black uppercase tracking-widest text-ml-blue bg-ml-blue/5 px-2 py-1 rounded">
                  Projetos Reais
                </div>
              </div>
              
              <div className="space-y-4">
                {projects.map((project, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ x: 10, backgroundColor: "#F9FAFB" }}
                    onClick={() => project.url !== "#" && window.open(project.url, '_blank')}
                    className="p-6 rounded-2xl bg-white border border-gray-50 hover:border-ml-blue/30 transition-all cursor-pointer group shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-gray-50 group-hover:bg-ml-blue/10 transition-all border border-gray-100">
                          {project.icon}
                        </div>
                        <div>
                          <h4 className="font-black text-[15px] text-gray-800 group-hover:text-ml-blue transition-colors">{project.name}</h4>
                          <p className="text-xs text-gray-500 font-medium">{project.desc}</p>
                        </div>
                      </div>
                      <ArrowUpRight size={20} className="text-gray-300 group-hover:text-ml-blue transition-all" />
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest group-hover:text-ml-blue transition-colors">{project.tag}</span>
                      <span className="text-[10px] items-center flex gap-1 text-ml-blue font-black opacity-0 group-hover:opacity-100 transition-all uppercase tracking-tighter">
                        CONHECER PROJETO <ExternalLink size={10} />
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 p-6 rounded-2xl bg-gray-50 border border-gray-100 relative group/quote overflow-hidden">
                <div className="absolute -top-4 -right-4 text-ml-blue/[0.03]">
                  <Code2 size={120} />
                </div>
                <p className="text-[14px] font-bold text-gray-600 italic leading-relaxed relative z-10">
                  "O digital não é mais um luxo, é a linha de frente do seu negócio. Meus projetos provam que a tecnologia profissional é o maior acelerador de ROI que existe."
                </p>
                <div className="mt-6 flex items-center gap-3 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-ml-blue flex items-center justify-center font-black text-white shadow-lg shadow-ml-blue/20">RF</div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-gray-800">Renato Filho</p>
                    <p className="text-[10px] text-ml-blue font-bold uppercase tracking-tighter">Fullstack Developer & Business Strategist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Evolution Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <div className="text-center mb-16 space-y-4">
            <h3 className="text-3xl font-bold text-gray-800 tracking-tight">O Próximo Salto: <span className="text-ml-blue">Agentic Intelligence</span></h3>
            <p className="text-gray-500 font-medium max-w-2xl mx-auto">
              Nossa stack não é apenas rápida, ela é cognitiva. Integramos padrões de "Reasoning" e "Tool Use" para automatizar a curadoria de mercado.
            </p>
          </div>
          
          <ScoutAIStudio />
        </motion.div>
      </div>
    </section>
  );
};



export default MultidealLabs;
