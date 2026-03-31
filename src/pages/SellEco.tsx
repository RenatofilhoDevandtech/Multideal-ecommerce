
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { ShoppingBag, Zap, ShieldCheck, DollarSign, ArrowRight, UserCheck, Bot, BarChart3, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SellEco: React.FC = () => {
  const steps = [
    { title: "Cadastre-se", desc: "Crie sua conta de vendedor em segundos.", icon: <UserCheck size={24} /> },
    { title: "Sincronize Itens", desc: "Integre com Shopee ou Mercado Livre via nossa IA.", icon: <Bot size={24} /> },
    { title: "Venda e Lucre", desc: "Nós processamos e entregamos de forma sustentável.", icon: <DollarSign size={24} /> },
  ];

  return (
    <div className="min-h-screen bg-ml-background">
      <Header />

      <main className="container mx-auto px-4 md:px-8 py-12">
        <div className="max-w-6xl mx-auto space-y-20">

          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center gap-12 py-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-1 space-y-6 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-ml-blue/10 text-ml-blue rounded-full text-[12px] font-black uppercase tracking-widest">
                <Rocket size={14} />
                Venda no Multideal 2026
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-gray-800 tracking-tighter leading-none">
                Não precisa de <span className="text-ml-green italic">Estoque</span> para ser <span className="text-ml-blue">Grande</span>.
              </h1>
              <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-xl">
                Nossa IA cuida da logística, curadoria e sustentabilidade. Você foca em crescer seu negócio com impacto positivo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="h-14 px-10 bg-ml-blue text-white font-black rounded-2xl text-lg shadow-xl shadow-ml-blue/20">
                  Começar a Vender Agora
                </Button>
                <Button variant="outline" className="h-14 px-10 border-gray-200 text-gray-600 font-black rounded-2xl text-lg hover:bg-gray-50">
                  Ver Taxas e Prazos
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-1 relative"
            >
              <div className="absolute inset-0 bg-ml-blue/10 rounded-full blur-[100px]" />
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                alt="Eco-Business Dashboard"
                className="w-full h-auto rounded-3xl shadow-4xl relative z-10 border border-white/50"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-gray-50 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-ml-green/10 rounded-xl flex items-center justify-center text-ml-green">
                    <BarChart3 size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Crescimento 2026</p>
                    <p className="text-xl font-black text-gray-800">+ 124% Eco-Revenue</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Logística Zero Carbono", desc: "Entregamos suas vendas através da nossa malha de transporte sustentável ativa.", icon: <Zap className="text-ml-yellow" /> },
              { title: "Pagamentos MP & MP", desc: "Receba na hora via Pix ou em até 10x sem juros com segurança total.", icon: <DollarSign className="text-ml-blue" /> },
              { title: "Curadoria de IA", desc: "Nossa IA ajuda a selecionar os melhores fornecedores de impacto positivo.", icon: <Bot className="text-ml-green" /> },
            ].map((benefit, i) => (
              <div key={i} className="space-y-4">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-6">
                  {React.cloneElement(benefit.icon as React.ReactElement, { size: 28 })}
                </div>
                <h3 className="text-2xl font-black text-gray-800">{benefit.title}</h3>
                <p className="text-gray-500 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>

          {/* How it works */}
          <div className="bg-white rounded-[40px] p-8 md:p-20 border border-gray-100 shadow-sm text-center">
            <h2 className="text-3xl md:text-5xl font-black text-gray-800 mb-16 tracking-tighter">Como Funciona em 3 Minutos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              <div className="hidden md:block absolute top-1/4 left-1/3 right-1/4 h-px border-t-2 border-dotted border-gray-100" />
              {steps.map((step, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center gap-6">
                  <div className="w-20 h-20 bg-ml-blue text-white rounded-full flex items-center justify-center text-3xl font-black shadow-xl shadow-ml-blue/20">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-gray-800 mb-2">{step.title}</h4>
                    <p className="text-gray-500 max-w-[200px]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button className="mt-20 h-16 px-12 bg-ml-blue text-white font-black rounded-2xl text-xl shadow-2xl shadow-ml-blue/20 hover:scale-105 transition-transform">
              Abrir Minha Loja Eco Grátis
            </Button>
          </div>

          {/* Social Proof */}
          <div className="text-center py-10 space-y-12">
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale contrast-125">
              <span className="font-black text-3xl">SHOPEE</span>
              <span className="font-black text-3xl">MERCADO PAGO</span>
              <span className="font-black text-3xl">ENVIRONMENT PLUS</span>
              <span className="font-black text-3xl">GREEN LOGISTICS</span>
            </div>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-[12px]">Integrado com os maiores players do mercado 2026</p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SellEco;
