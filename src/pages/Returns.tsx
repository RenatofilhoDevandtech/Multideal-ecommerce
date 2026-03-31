
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { RefreshCcw, ShieldCheck, Leaf, Truck } from 'lucide-react';

const Returns = () => {
  return (
    <div className="min-h-screen bg-ml-background flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 md:py-20 md:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <header className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-black text-gray-800 tracking-tighter">Logística <span className="text-ml-blue">Reversa & Trocas</span></h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Processos simplificados para que sua operação nunca pare. Segurança técnica em cada devolução.
            </p>
          </header>


          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-4">
               <RefreshCcw className="text-ml-blue w-12 h-12" />
               <h2 className="text-2xl font-bold text-gray-800">7 Dias Gratuitos</h2>
               <p className="text-gray-500">
                 Você tem 7 dias após o recebimento para solicitar a devolução sem custos.
               </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-4">
               <Leaf className="text-ml-green w-12 h-12" />
               <h2 className="text-2xl font-bold text-gray-800">Impacto Compensado</h2>
               <p className="text-gray-500">
                 A logística reversa é compensada ambientalmente através de reflorestamento em áreas degradadas.
               </p>
            </div>
          </div>

          <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-8">
            <h2 className="text-2xl font-bold text-gray-800">Passo a Passo</h2>
            <div className="space-y-6">
              {[
                { step: "1. Solicite online", desc: "Acesse seus pedidos e clique em 'Devolver Este Item'." },
                { step: "2. Embalagem Eco", desc: "Use a mesma embalagem biodegradável em que recebeu o produto." },
                { step: "3. Coleta Carbono Zero", desc: "Um entregador parceiro retirará o item em sua casa em um veículo elétrico." },
                { step: "4. Reembolso Instantâneo", desc: "Assim que o item for coletado, o estorno será processado." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                   <div className="w-8 h-8 rounded-full bg-ml-blue text-white flex items-center justify-center font-black shrink-0">{i+1}</div>
                   <div>
                     <h3 className="font-bold text-gray-800">{item.step}</h3>
                     <p className="text-gray-500 text-sm">{item.desc}</p>
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

export default Returns;
