
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Briefcase, Heart, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Careers = () => {
  return (
    <div className="min-h-screen bg-ml-background flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 md:py-20 md:px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          <section className="text-center space-y-6">
            <span className="inline-block px-4 py-1.5 bg-ml-blue/10 text-ml-blue rounded-full text-xs font-black uppercase tracking-widest">
              Venha fazer história
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-gray-800 tracking-tighter">Trabalhe no <span className="text-ml-blue">Multideal</span></h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Buscamos talentos apaixonados por tecnologia e sustentabilidade para escalar o maior e-commerce verde do Brasil.
            </p>
          </section>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Briefcase className="text-ml-blue" />, title: "Vagas Abertas", desc: "Oportunidades em Tech, Logística e Marketing." },
              { icon: <Heart className="text-red-500" />, title: "Nossa Cultura", desc: "Ambiente inclusivo, remoto e focado em impacto." },
              { icon: <Globe className="text-ml-green" />, title: "Benefícios", desc: "Saúde, bem-estar e incentivos eco-sustentáveis." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center space-y-4">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-2">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-ml-blue rounded-3xl p-8 md:p-12 text-white text-center space-y-6">
            <h2 className="text-3xl font-bold">Nenhuma vaga combina com você?</h2>
            <p className="text-white/80 max-w-xl mx-auto">
              Envie seu currículo para nosso banco de talentos e entraremos em contato assim que surgir uma oportunidade!
            </p>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-ml-blue h-12 px-8 font-black">
              Enviar Currículo
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
