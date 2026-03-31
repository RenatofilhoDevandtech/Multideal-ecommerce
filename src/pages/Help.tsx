
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, Search, Package, ShieldCheck, TrendingUp, Sparkles, Zap, MessageSquare, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Help: React.FC = () => {
   const [openFaq, setOpenFaq] = React.useState<number | null>(0);

   const categories = [
      { name: "Sua Compra", icon: <Package size={20} />, active: true },
      { name: "ROI e Lucro", icon: <TrendingUp size={20} /> },
      { name: "Segurança MP", icon: <ShieldCheck size={20} /> },
      { name: "Multideal Labs", icon: <Sparkles size={20} /> },
   ];

   const faqs = [
      { q: "Como abro todos os links do kit de uma vez?", a: "Ao clicar em 'Adicionar Kit Completo', nossa ferramenta de automação abre abas individuais para cada item do kit com nossos links de afiliados validados. Certifique-se de permitir pop-ups em seu navegador." },
      { q: "A calculadora de ROI é precisa?", a: "Sim, utilizamos médias de mercado para projeção, mas você pode ajustar o preço de venda e o volume diário com nossos sliders interativos para obter um cenário real para sua região." },
      { q: "Como funciona a Curadoria Prospera?", a: "É o nosso algoritmo 'Anti-Lixo'. Monitoramos oscilações bruscas de preço e reputação de vendedores em tempo real. Se um produto perde a estabilidade de preço, ele é removido da nossa lista instantaneamente." },
      { q: "O Multideal vende os produtos diretamente?", a: "Não, somos uma plataforma de inteligência e curadoria. Nós analisamos e recomendamos as melhores ofertas. A transação final ocorre em marketplaces de confiança como Shopee e Amazon através de nossos links oficiais." },
      { q: "Como acessar a Plataforma Elevate?", a: "A Elevate é nossa plataforma de curadoria tech e carreira. Você pode começar gratuitamente através do banner na Home e ter acesso a cursos, simulados de entrevista e muito mais." }
   ];

   return (
      <div className="min-h-screen bg-ml-background">
         <Header />

         {/* Hero Section */}
         <section className="bg-ml-yellow pt-16 pb-24 md:pt-24 md:pb-32 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="container mx-auto px-4 md:px-8 relative z-10 text-center space-y-8">
               <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 backdrop-blur-md text-gray-800 rounded-full text-[12px] font-black uppercase tracking-widest"
               >
                  <Sparkles size={14} className="text-ml-blue" />
                  Central de Ajuda Multideal
               </motion.div>
               <h1 className="text-4xl md:text-6xl font-black text-gray-800 tracking-tighter leading-none mb-8">
                  Como podemos <span className="text-ml-blue">Escalar</span> seu negócio?
               </h1>

               <div className="max-w-2xl mx-auto relative group">
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-ml-blue transition-colors" size={24} />
                  <input
                     type="text"
                     placeholder="Busque por ROI, kits, links de afiliados..."
                     className="w-full h-16 pl-16 pr-8 bg-white rounded-2xl shadow-2xl border-none outline-none text-lg font-medium text-gray-800 focus:ring-4 focus:ring-ml-blue/10 transition-all"
                  />
               </div>
            </div>
         </section>


         <main className="container mx-auto px-4 md:px-8 py-16 -mt-12 relative z-20">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">

               {/* Sidebar Navigation */}
               <aside className="space-y-4">
                  <h3 className="text-gray-400 font-bold uppercase tracking-widest text-[11px] px-4 mb-4">Tópicos</h3>
                  {categories.map((cat, i) => (
                     <button
                        key={i}
                        className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all font-bold text-[15px] ${cat.active ? 'bg-white shadow-xl text-ml-blue scale-[1.02]' : 'text-gray-500 hover:bg-white/50'}`}
                     >
                        {React.cloneElement(cat.icon as React.ReactElement, { className: cat.active ? 'text-ml-blue' : 'text-gray-300' })}
                        {cat.name}
                     </button>
                  ))}

                  <div className="mt-12 p-6 bg-ml-blue rounded-3xl text-white shadow-xl shadow-ml-blue/20 relative overflow-hidden">
                     <MessageSquare size={80} className="absolute -bottom-6 -right-6 text-white/10" />
                     <p className="font-black text-lg mb-2 relative z-10">Suporte 24h</p>
                     <p className="text-white/70 text-[13px] mb-6 relative z-10">Nossa IA e time especialista estão prontos para ajudar.</p>
                     <Button className="w-full bg-white text-ml-blue hover:bg-white/90 font-black h-10 rounded-xl relative z-10">
                        Abrir Chat
                     </Button>
                  </div>
               </aside>

               {/* FAQ Content */}
               <div className="lg:col-span-3 space-y-8">
                  <div className="bg-white rounded-[40px] p-6 md:p-12 shadow-sm border border-gray-50">
                     <h2 className="text-2xl md:text-3xl font-black text-gray-800 mb-10 flex items-center gap-4">
                        <Zap size={32} className="text-ml-yellow fill-ml-yellow" />
                        Principais Dúvidas
                     </h2>

                     <div className="space-y-4">
                        {faqs.map((faq, i) => (
                           <div key={i} className="border-b border-gray-50 last:border-none">
                              <button
                                 onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                 className="w-full flex items-center justify-between py-6 text-left group"
                              >
                                 <span className={`text-[17px] font-bold transition-colors ${openFaq === i ? 'text-ml-blue' : 'text-gray-700 group-hover:text-ml-blue'}`}>
                                    {faq.q}
                                 </span>
                                 <ChevronDown size={20} className={`text-gray-300 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-ml-blue' : ''}`} />
                              </button>
                              <AnimatePresence>
                                 {openFaq === i && (
                                    <motion.div
                                       initial={{ height: 0, opacity: 0 }}
                                       animate={{ height: "auto", opacity: 1 }}
                                       exit={{ height: 0, opacity: 0 }}
                                       className="overflow-hidden"
                                    >
                                       <p className="pb-8 text-[15px] text-gray-500 leading-relaxed">
                                          {faq.a}
                                       </p>
                                    </motion.div>
                                 )}
                              </AnimatePresence>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     <div className="p-8 bg-ml-green/5 border border-ml-green/10 rounded-3xl flex items-center gap-6 group cursor-pointer hover:bg-ml-green/10 transition-all">
                        <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-ml-green group-hover:scale-110 transition-transform">
                           <ShieldCheck size={32} />
                        </div>
                        <div>
                           <p className="font-black text-gray-800">Garantia Multideal</p>
                           <p className="text-[13px] text-gray-500">Transparência em Cada Link</p>
                        </div>
                     </div>
                     <div className="p-8 bg-ml-blue/5 border border-ml-blue/10 rounded-3xl flex items-center gap-6 group cursor-pointer hover:bg-ml-blue/10 transition-all">
                        <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-ml-blue group-hover:scale-110 transition-transform">
                           <TrendingUp size={32} />
                        </div>
                        <div>
                           <p className="font-black text-gray-800">Métricas ROI</p>
                           <p className="text-[13px] text-gray-500">Aprofunde seus ganhos</p>
                        </div>
                     </div>

                  </div>
               </div>

            </div>
         </main>

         <Footer />
      </div>
   );
};

export default Help;
