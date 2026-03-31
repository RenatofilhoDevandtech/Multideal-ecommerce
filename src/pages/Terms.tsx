
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-ml-background flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 md:py-20 md:px-8">
        <article className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 space-y-8">
          <h1 className="text-3xl font-black text-gray-800 tracking-tighter">Termos de <span className="text-ml-blue">Uso</span></h1>

          <div className="prose prose-sm max-w-none text-gray-600 space-y-6">
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800">1. Natureza do Serviço</h2>
              <p>O Multideal é uma plataforma de curadoria técnica e inteligência competitiva. Atuamos como afiliados de grandes marketplaces, validando a viabilidade de produtos e kits para nossos usuários.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800">2. Transparência de Afiliados</h2>
              <p>Ao utilizar nossos links de 'Adicionar Kit' ou 'Ver Oferta', você reconhece que podemos receber uma comissão pela venda, sem custo adicional para você. Essa comissão sustenta nossa engenharia de análise.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800">3. Curadoria Prospera</h2>
              <p>Reservamo-nos o direito de remover qualquer recomendação que não atinja nossos critérios de estabilidade de preço, tempo de entrega ou reputação do vendedor.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800">4. Isenção de Responsabilidade</h2>
              <p>A transação final, pagamento e entrega são de total responsabilidade do marketplace de destino (Shopee, Amazon, etc). Atuamos exclusivamente na camada de inteligência e recomendação.</p>
            </section>


            <p className="pt-8 text-[12px] text-gray-400 italic">Última atualização: 12 de Março de 2024</p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
