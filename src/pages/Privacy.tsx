
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Shield, Eye, Lock } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-ml-background flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 md:py-20 md:px-8">
        <article className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 space-y-12">
          <header className="space-y-4">
             <div className="w-12 h-12 bg-ml-blue/10 rounded-full flex items-center justify-center">
                <Shield className="text-ml-blue" />
             </div>
             <h1 className="text-3xl font-black text-gray-800 tracking-tighter">Políticas de <span className="text-ml-blue">Privacidade</span></h1>
             <p className="text-gray-500">Sua segurança de dados é o pilar da nossa confiança comercial. Protegemos sua estratégia e suas escolhas como se fossem nossas.</p>
          </header>
          
          <div className="grid sm:grid-cols-2 gap-8 pb-8 border-b border-gray-50">
             <div className="space-y-3">
                <div className="flex items-center gap-2 font-bold text-gray-800">
                   <Eye size={18} className="text-ml-blue" />
                   <h3>Transparência</h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">Seus dados de navegação são utilizados exclusivamente para o refinamento do nosso algoritmo de curadoria. Nunca vendemos informações estratégicas para terceiros.</p>
             </div>

             <div className="space-y-3">
                <div className="flex items-center gap-2 font-bold text-gray-800">
                   <Lock size={18} className="text-ml-blue" />
                   <h3>Segurança</h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">Criptografia de ponta a ponta e conformidade total com a LGPD em todas as transações.</p>
             </div>
          </div>

          <div className="prose prose-sm max-w-none text-gray-600 space-y-6">
            <h2 className="text-xl font-bold text-gray-800">Coleta de Informações</h2>
            <p>Coletamos apenas as informações necessárias para processar seus pedidos e fornecer relatórios detalhados de impacto ambiental baseados em suas compras.</p>
            
            <h2 className="text-xl font-bold text-gray-800">Seus Direitos</h2>
            <p>Você tem total controle sobre seus dados, podendo solicitar acesso, correção ou exclusão a qualquer momento através da nossa Central de Ajuda.</p>
            
            <p className="pt-8 text-[12px] text-gray-400 italic text-center">Última atualização: 12 de Março de 2024</p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
