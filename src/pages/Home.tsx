
import React from 'react';
import { Header, Footer, SEO } from '@/components/layout';
import { Sparkles } from 'lucide-react';
import { kitsData } from '@/data/kits';
import { productsData } from '@/data/products';

// Modular Components from Barrel Exports
import { 
  PromoCarousel, 
  DailyOffersGrid, 
  TrendingProducts, 
  FeaturedCollections, 
  CategoriesGrid,
  ProductSection 
} from '@/components/product';

import { 
  FeatureQuickLinks, 
  MembershipBanner, 
  EcoImpactDashboard,
  MultidealLabs,
  KitsShowcase,
  PromoBanner
} from '@/components/marketing';
import { homeAds } from '@/data/ads';

import AIAssistant from '@/components/feedback/AIAssistant';

const Index = () => {
  return (
    <div className="min-h-screen bg-ml-background selection:bg-ml-blue/30 overflow-x-hidden flex flex-col font-sans antialiased">
      <SEO
        title="Início | Multideal - Sua Máquina de ROI"
        description="Encontre kits validados, ferramentas de engenharia de produto e as melhores oportunidades de lucro na Amazon, Shopee e Mercado Livre."
      />
      <Header />

      <main id="main-content" className="flex-grow pb-20">
        <PromoCarousel />
        
        <div className="relative z-30 -mt-12 md:-mt-24 mb-6 lg:mb-12 px-2 md:px-0">
          <div className="shadow-[0_-5px_40px_-15px_rgba(0,0,0,0.1)] rounded-[20px]">
            <FeatureQuickLinks />
          </div>
        </div>

        <div className="space-y-12 sm:space-y-16 md:space-y-20">
          <KitsShowcase kits={kitsData} />
          
          <PromoBanner ad={homeAds[0]} />
          <DailyOffersGrid />
          <MultidealLabs />

          <ProductSection
            title="Estilo que Valoriza"
            subtitle="Seleção premium de itens que elevam o padrão do seu ambiente instantaneamente."
            tag="Upgrade Patrimonial"
            icon={<Sparkles size={16} />}
            iconBgColor="bg-ml-yellow/20"
            category="Casa & Reforma"
            products={productsData.slice(20, 24)}
          />

          <ProductSection
            title="Biohacking & Estilo"
            subtitle="Otimize sua rotina com o melhor do Skincare, Fitness e Moda Masculina de Elite."
            tag="Alta Performance"
            icon={<Sparkles size={16} />}
            iconBgColor="bg-ml-blue/10"
            category="Lifestyle & Performance"
            products={productsData.slice(60, 64)}
          />

          <MembershipBanner />

          <div className="container mx-auto px-4 md:px-8">
            <EcoImpactDashboard />
          </div>

          <section className="bg-gray-50/50 py-16">
            <div className="container mx-auto px-4 md:px-8">
              <TrendingProducts />
            </div>
          </section>

          <FeaturedCollections />

          <section className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-100 pb-4 gap-4 mb-8">
              <div>
                <h2 className="text-[22px] md:text-2xl font-bold text-gray-800 tracking-tight">Explorar por Radar</h2>
                <p className="text-gray-500 text-[14px]">Navegue nas categorias validadas pela nossa engenharia.</p>
              </div>
            </div>
            <CategoriesGrid />
          </section>

          <section className="container mx-auto px-4 md:px-8 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Auditoria Prospera",
                  desc: "Monitoramento de preços 24/7. Excluindo automaticamente qualquer tentativa de inflação artificial.",
                },
                {
                  title: "Acuracidade Total",
                  desc: "Garantimos que o produto validado é o produto entregue. Sem surpresas negativas.",
                },
                {
                  title: "Foco no Retorno",
                  desc: "Não buscamos apenas o 'melhor preço', mas sim a 'melhor oportunidade de negócio'.",
                }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center p-8 space-y-4 bg-white rounded-2xl border border-gray-50 hover:border-ml-blue/10 transition-colors shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <AIAssistant />
      <Footer />
    </div>
  );
};

export default Index;
