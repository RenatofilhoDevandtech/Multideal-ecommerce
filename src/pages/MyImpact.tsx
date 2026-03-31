
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { TrendingUp as ROI, Package, Zap, ShieldCheck, Award, TrendingUp, ArrowRight, MousePointer2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

const MyImpact: React.FC = () => {
  const { user } = useAuth();

  const stats = [
    { label: "ROI Médio Projetado", value: "320%", icon: <ROI className="text-ml-blue" />, detail: "Baseado nos seus kits ativos" },
    { label: "Kits Validados", value: "14 itens", icon: <Package className="text-ml-blue" />, detail: "Prontos para escala imediata" },
    { label: "ScoutScore", value: "94", icon: <TrendingUp className="text-ml-yellow fill-ml-yellow" />, detail: "Top 1% dos curadores Pro" },
  ];

  const badges = [
    { name: "Pioneiro ROI", desc: "Primeira projeção validada", date: "Março 2026", icon: <Award className="text-ml-yellow" /> },
    { name: "Zero Headache", desc: "10 fornecedores com nota 5.0", date: "Fevereiro 2026", icon: <ShieldCheck className="text-ml-blue" /> },
    { name: "Elite Club Member", desc: "Acesso antecipado a brechas", date: "Janeiro 2026", icon: <Award className="text-ml-blue" /> },
  ];


  return (
    <div className="min-h-screen bg-ml-background">
      <Header />
      
      <main className="container mx-auto px-4 md:px-8 py-12">
        <div className="max-w-5xl mx-auto space-y-10">
          
          {/* Hero Header */}
          <div className="text-center space-y-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-ml-blue/10 text-ml-blue rounded-full text-[12px] font-black uppercase tracking-widest"
            >
               <ROI size={14} />
               Seu Desempenho Multideal 2026
            </motion.div>
            <h1 className="text-3xl md:text-5xl font-black text-gray-800 tracking-tighter">
              Olá, <span className="text-ml-blue">{user?.name.split(' ')[0] || "Pro Scout"}</span>!
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Sua inteligência de mercado está gerando resultados. Acompanhe sua lucratividade e o desempenho dos seus kits validados.
            </p>

          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {React.cloneElement(stat.icon as React.ReactElement, { size: 24 })}
                </div>
                <p className="text-[12px] font-black text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
                <p className="text-3xl font-black text-gray-800 mb-2">{stat.value}</p>
                <p className="text-[13px] text-gray-500 leading-tight">{stat.detail}</p>
              </motion.div>
            ))}
          </div>

          {/* Main Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Col: Badges */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-black text-gray-800 mb-8 flex items-center gap-3">
                  <Award size={24} className="text-ml-yellow" /> Suas Conquistas
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {badges.map((badge, idx) => (
                    <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-gray-50 border border-transparent hover:border-ml-blue/10 transition-colors">
                      <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                        {React.cloneElement(badge.icon as React.ReactElement, { size: 20 })}
                      </div>
                      <div>
                        <p className="font-bold text-gray-800 text-[14px]">{badge.name}</p>
                        <p className="text-[12px] text-gray-500">{badge.desc}</p>
                        <p className="text-[10px] text-ml-blue font-black mt-1">{badge.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact Graph Placeholder */}
              <div className="bg-ml-blue/5 p-8 rounded-3xl border border-ml-blue/10">
                 <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xl font-black text-ml-blue flex items-center gap-3">
                      <TrendingUp size={24} /> Histórico de Projeção de Faturamento
                    </h3>
                    <select className="bg-white border-none text-[12px] font-bold rounded-lg px-3 py-1 shadow-sm outline-none">
                       <option>Últimos 6 meses</option>
                       <option>Este ano</option>
                    </select>
                 </div>
                 <div className="h-48 w-full flex items-end gap-3 px-4">
                    {[40, 60, 45, 80, 55, 90, 70].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        className="flex-1 bg-ml-blue/40 rounded-t-lg relative group cursor-help"
                      >
                         <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            R$ {(h * 100).toLocaleString('pt-BR')}
                         </div>
                      </motion.div>
                    ))}
                 </div>
                 <div className="flex justify-between mt-4 px-4 text-[11px] text-gray-400 font-bold uppercase tracking-widest">
                    <span>JAN</span>
                    <span>JUL</span>
                 </div>
              </div>
            </div>

            {/* Right Col: Call to Actions */}
            <div className="space-y-6">
              <div className="bg-ml-blue p-8 rounded-3xl text-white shadow-xl shadow-ml-blue/20 relative overflow-hidden group">
                <ROI size={120} className="absolute -bottom-10 -right-10 text-white/10 rotate-12 group-hover:rotate-45 transition-transform duration-1000" />
                <h4 className="text-2xl font-black mb-4 relative z-10 leading-tight">Escala Business Elite</h4>
                <p className="text-white/80 text-[14px] mb-8 relative z-10 leading-relaxed">
                  Consolide seus produtos em kits validados e junte-se ao programa de elite de empreendedores Multideal.
                </p>
                <Button className="w-full bg-white text-ml-blue hover:bg-white/90 font-black h-12 rounded-xl relative z-10">
                  Saber Mais <ArrowRight size={18} className="ml-2" />
                </Button>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <h4 className="font-black text-gray-800 mb-6">Próximos Passos Pro</h4>
                <ul className="space-y-4">
                  {[
                    "Validar novo fornecedor",
                    "Ajustar Calculadora ROI",
                    "Assinar Elite Club",
                    "Acompanhar radar Scout"
                  ].map((step, i) => (
                    <li key={i} className="flex items-center gap-3 text-[14px] text-gray-600 font-medium group cursor-pointer hover:text-ml-blue transition-colors">
                      <div className="w-6 h-6 rounded-full border border-gray-100 flex items-center justify-center text-[10px] group-hover:border-ml-blue group-hover:bg-ml-blue group-hover:text-white transition-all">
                        {i + 1}
                      </div>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MyImpact;
