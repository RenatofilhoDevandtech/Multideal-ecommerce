import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MultidealLabs from '@/components/marketing/MultidealLabs';
import HeroSection from '@/components/marketing/HeroSection';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, TrendingUp, Cpu, Database, Code2 } from 'lucide-react';
import ScoutEngineVisual from '@/components/marketing/ScoutEngineVisual';
import SEO from '@/components/layout/SEO';
import { Button } from '@/components/ui/button';

const Labs = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-ml-background selection:bg-ml-blue/30 flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Dynamic Hero Section */}
        <section className="relative overflow-hidden border-b border-gray-100">
          {/* Background Image Layer */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: `url(/src/assets/cards/card-multilab.png)` }}
          />
          <div className="container mx-auto px-4 md:px-8 py-16 md:py-24 relative z-10">
            <div className="max-w-3xl space-y-6 text-left drop-shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-ml-blue/10 px-3 py-1 rounded-full text-ml-blue text-[11px] font-black uppercase tracking-widest border border-ml-blue/20 backdrop-blur-sm">
                  Aceleração de Negócios Digitais
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 tracking-tighter uppercase leading-[0.9] [text-shadow:_0_1px_2px_rgb(255_255_255_/_80%)]">
                Sua Operação em <br /> <span className="text-ml-blue">Alta Performance</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl font-medium leading-relaxed [text-shadow:_0_1px_2px_rgb(255_255_255_/_80%)]">
                Engenharia aplicada para profissionalizar pequenos empreendimentos e escalar faturamento no digital.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-6">
                <Button 
                  onClick={() => window.open('https://wa.me/5581993414545', '_blank')}
                  className="bg-ml-blue hover:bg-ml-blue-dark text-white font-black rounded-xl h-14 px-10 w-full sm:w-auto uppercase tracking-wider text-[13px] shadow-xl shadow-ml-blue/20 active:scale-95 transition-all"
                >
                  Solicitar Orçamento Grátis
                </Button>
                <Button 
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  variant="outline" 
                  className="bg-white/50 border-gray-200 font-bold rounded-xl h-14 px-10 w-full sm:w-auto text-gray-700 hover:bg-white transition-all backdrop-blur-sm"
                >
                  Ver Meus Projetos
                </Button>
              </div>
            </div>
          </div>
        </section>

        <div className="pb-20">
          <MultidealLabs />
          <ScoutEngineVisual />
        </div>

        {/* Business Transformation Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" 
               style={{ backgroundImage: `radial-gradient(#3483FA 0.5px, transparent 0.5px)`, backgroundSize: '32px 32px' }} />
          
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-5xl mx-auto space-y-16">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-ml-blue/10 rounded-full text-ml-blue text-[11px] font-black uppercase tracking-widest border border-ml-blue/20">
                  <Code2 size={14} />
                  Engenharia de Resultados
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight leading-tight uppercase">Sua Idéia, Nosso <br /><span className="text-ml-blue">DNA de Engenharia</span></h2>
                <p className="text-gray-500 font-medium text-lg max-w-2xl mx-auto">Do rascunho à primeira venda: profissionalizamos seu negócio para o mercado de elite.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold flex items-center gap-2 text-gray-800 tracking-tight uppercase">
                    <Code2 className="text-ml-blue" /> Engenharia de Resultados
                  </h3>
                  <ul className="space-y-4">
                    {[
                      { title: "Landing Pages Profissionais", desc: "Criamos a vitrine do seu negócio com design que transmite confiança e tecnologia de ponta." },
                      { title: "Estratégia de SEO Multi-Canal", desc: "Seja encontrado por quem importa através de otimização técnica e autoridade digital." },
                      { title: "Branding & Impacto Visual", desc: "Transformamos a percepção da sua marca para atrair clientes de maior valor." },
                      { title: "Consultoria de Escala", desc: "Planejamos os próximos passos do seu negócio para que ele cresça de forma sustentável e lucrativa." }
                    ].map((item, i) => (
                      <li key={i} className="border-l-4 border-ml-blue pl-6 py-4 bg-ml-blue/5 rounded-r-2xl hover:bg-ml-blue/10 transition-all group">
                        <h4 className="font-bold text-gray-800 text-lg group-hover:text-ml-blue transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-500 font-medium leading-relaxed mt-1">{item.desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-[32px] p-10 border border-gray-100 shadow-xl shadow-ml-blue/5 space-y-8 flex flex-col justify-center">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold flex items-center gap-2 text-ml-green tracking-tight uppercase">
                      <ShieldCheck size={28} /> Compromisso
                    </h3>
                    <p className="text-sm text-gray-500 font-medium leading-relaxed">Medimos nosso sucesso pelo seu faturamento e impacto digital.</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600 font-bold">Nível de Profissionalismo</span>
                        <span className="text-ml-green font-black text-lg">+400%</span>
                      </div>
                      <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          className="bg-ml-green h-full" 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600 font-bold">Velocidade de Conversão</span>
                        <span className="text-ml-green font-black text-lg">Fast-Track</span>
                      </div>
                      <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: "85%" }}
                          className="bg-ml-green h-full" 
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <Button 
                      onClick={() => window.open('https://wa.me/5581993414545', '_blank')}
                      className="w-full h-14 bg-ml-blue hover:bg-ml-blue-dark text-white font-black rounded-xl text-lg shadow-xl shadow-ml-blue/20 uppercase tracking-widest active:scale-95 transition-all"
                    >
                      Solicitar Orçamento Grátis
                    </Button>
                    <p className="text-center mt-4 text-[11px] text-gray-400 uppercase tracking-[0.2em] font-black">
                      Vagas Limitadas para Consultoria Mensal
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Labs;
