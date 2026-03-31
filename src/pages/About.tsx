
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Leaf, Target, Users, ShieldCheck } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-ml-background flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 md:py-20 md:px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          <section className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tighter">A Engenharia da <span className="text-ml-blue">Multideal</span></h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
              Não somos uma vitrine de links. Somos um laboratório de viabilidade comercial. Através de algoritmos de curadoria e análise de mercado, filtramos o 1% mais lucrativo das grandes plataformas globais.
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-4 hover:border-ml-blue/10 transition-colors">
              <Target className="text-ml-blue w-12 h-12" />
              <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Nossa Missão</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                Eliminar a "dor de cabeça" do pequeno e médio empreendedor ao selecionar fornecedores. Entregamos curadoria física e digital validadas por métricas de ROI real.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-4 hover:border-ml-green/10 transition-colors">
              <Users className="text-ml-green w-12 h-12" />
              <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Crescimento Compartilhado</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                Apoiamos a escala de quem vende através de inteligência competitiva e ferramentas de automação que tornam a compra profissional acessível a todos.
              </p>
            </div>
          </div>

          <section className="space-y-8">
            <h2 className="text-3xl font-black text-gray-800 text-center">Nossos Pilares de Engenharia</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Curadoria Prospera", desc: "Monitoramento 24/7 contra inflação artificial e golpes de estoque." },
                { title: "Viabilidade ROI", desc: "Calculadora de payback integrada em cada oportunidade sugerida." },
                { title: "Headache Zero", desc: "Filtramos apenas fornecedores com taxa de satisfação acima de 4.8." }
              ].map((v, i) => (
                <div key={i} className="flex gap-4 items-start bg-white p-6 rounded-2xl border border-gray-50 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-ml-blue/10 flex items-center justify-center shrink-0">
                    <ShieldCheck size={18} className="text-ml-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 leading-tight">{v.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};


export default About;
