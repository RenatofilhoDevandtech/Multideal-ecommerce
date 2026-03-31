
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Package, Search, Truck, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TrackOrder = () => {
  return (
    <div className="min-h-screen bg-ml-background flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 md:py-20 md:px-8">
        <div className="max-w-2xl mx-auto space-y-12">
          <header className="text-center space-y-4">
            <h1 className="text-4xl font-black text-gray-800 tracking-tighter">Rastrear <span className="text-ml-blue">Pedido</span></h1>
            <p className="text-lg text-gray-600">
              Acompanhe a jornada do seu produto sustenável até sua casa.
            </p>
          </header>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
            <div className="space-y-2">
               <label className="text-sm font-bold text-gray-700">Número do Pedido ou CPF</label>
               <div className="flex gap-2">
                 <input type="text" placeholder="Ex: ECO-123456" className="flex-1 h-12 px-4 bg-gray-50 border border-gray-100 rounded-lg outline-none focus:border-ml-blue transition-colors" />
                 <Button className="h-12 px-6 bg-ml-blue text-white font-bold rounded-lg"><Search size={20} /></Button>
               </div>
            </div>

            <div className="pt-6 border-t border-gray-50">
               <h3 className="font-bold text-gray-800 mb-6">Status dos Últimos Pedidos</h3>
               <div className="space-y-6">
                 {[
                   { status: "Entregue", date: "Ontem, 16:45", icon: <CheckCircle className="text-ml-green" /> },
                   { status: "Em Transporte", date: "Previsto para amanhã", icon: <Truck className="text-ml-blue" /> },
                   { status: "Preparando", date: "Hoje, 09:20", icon: <Package className="text-amber-500" /> }
                 ].map((step, i) => (
                   <div key={i} className="flex gap-4 items-center">
                     <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center shrink-0">
                        {step.icon}
                     </div>
                     <div>
                       <p className="font-bold text-gray-800">{step.status}</p>
                       <p className="text-[12px] text-gray-400">{step.date}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TrackOrder;
