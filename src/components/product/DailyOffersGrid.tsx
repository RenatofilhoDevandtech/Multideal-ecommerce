
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Clock, ChevronRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { productsData } from '@/data/products';

const DailyOffersGrid: React.FC = React.memo(() => {
  // Memoize data selection to avoid re-calculation on render
  const dailyMain = useMemo(() => productsData.find(p => p.id === 119) || productsData[0], []);
  const sideOffers = useMemo(() => productsData.filter(p => [101, 201, 301, 102, 202].includes(p.id)), []);

  return (
    <section className="container mx-auto px-4 md:px-8 mb-12 sm:mb-16">
      <div className="flex flex-col lg:flex-row gap-4 items-stretch">
        
        {/* Mobile: 2-column grid - Refined */}
        <div className="lg:hidden w-full space-y-4">
           <div className="flex items-center justify-between px-1">
              <h2 className="text-[18px] font-bold text-gray-800 flex items-center gap-2 tracking-tight">
                <Zap size={18} className="text-ml-yellow fill-ml-yellow" />
                Ofertas do dia
              </h2>
              <Link to="/produtos" className="text-ml-blue text-[13px] font-bold flex items-center gap-0.5">
                Ver tudo <ChevronRight size={14} />
              </Link>
           </div>
           <div className="grid grid-cols-2 gap-3">
              <ProductCard 
                id={dailyMain.id.toString()}
                name={dailyMain.name}
                price={dailyMain.salePrice}
                image={dailyMain.image}
                category={dailyMain.category}
                priceOptions={dailyMain.priceOptions}
                isTrending={true}
              />
              {sideOffers.slice(0, 5).map((offer) => (
                <ProductCard 
                  key={offer.id} 
                  id={offer.id.toString()}
                  name={offer.name}
                  price={offer.salePrice}
                  image={offer.image}
                  category={offer.category}
                  priceOptions={offer.priceOptions}
                />
              ))}
           </div>
        </div>

        {/* Desktop/Tablet Left Section: Featured Offer (Fixed) */}
        <div className="hidden lg:block lg:w-[350px] shrink-0">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[20px] md:text-[22px] font-bold text-gray-800 tracking-tight">Oferta do dia</h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group bg-white rounded-md p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer h-full flex flex-col"
          >
            <div className="relative aspect-square mb-6 overflow-hidden flex items-center justify-center">
              <img 
                src={dailyMain.image} 
                alt={dailyMain.name} 
                className="max-w-[80%] max-h-[80%] object-contain transition-transform duration-700 group-hover:scale-110" 
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="space-y-3 flex-1 flex flex-col">
              <h3 className="text-gray-700 text-[15px] leading-snug line-clamp-2 h-10 font-normal">
                {dailyMain.name}
              </h3>
              <div className="space-y-1">
                <p className="text-[12px] text-gray-400 line-through">
                  R$ {dailyMain.originalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-[26px] font-medium text-gray-900 leading-none tracking-tight">
                    R$ {dailyMain.salePrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                  <span className="text-[14px] text-ml-green font-bold bg-ml-green/5 px-1.5 py-0.5 rounded">{dailyMain.discount}% OFF</span>
                </div>
                <p className="text-[13px] text-gray-600">em <span className="text-ml-green font-bold">10x R$ {(dailyMain.salePrice / 10).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span> sem juros</p>
              </div>
              <div className="pt-2 mt-auto">
                <p className="text-ml-green text-[12px] font-bold flex items-center gap-1">
                  <span className="italic">Frete grátis</span> 
                  <span className="text-ml-blue text-[9px] font-black italic bg-ml-blue/5 px-1 rounded">FULL</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Desktop/Tablet Right Section: Offers Carousel */}
        <div className="hidden lg:flex flex-1 min-w-0 flex-col">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[20px] md:text-[22px] font-bold text-gray-800 tracking-tight">Oportunidades em Tempo Real</h2>
            <Link to="/produtos" className="text-ml-blue text-[14px] font-bold hover:underline flex items-center gap-1">
              Ver todas <ChevronRight size={14} />
            </Link>
          </div>


          <div className="bg-white rounded-md border border-gray-100 shadow-sm p-4 relative h-full">
            <Carousel
              opts={{
                align: "start",
                loop: false,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-3 md:-ml-4">
                {sideOffers.map((offer) => (
                  <CarouselItem key={offer.id} className="pl-3 md:pl-4 basis-[85%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <ProductCard 
                      id={offer.id.toString()}
                      name={offer.name}
                      price={offer.salePrice}
                      image={offer.image}
                      category={offer.category}
                      isTrending={true} 
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden xl:block">
                <CarouselPrevious className="-left-6 bg-white shadow-xl hover:bg-gray-50 h-10 w-10 border-gray-100 text-ml-blue" />
                <CarouselNext className="-right-6 bg-white shadow-xl hover:bg-gray-50 h-10 w-10 border-gray-100 text-ml-blue" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
});

DailyOffersGrid.displayName = 'DailyOffersGrid';

export default DailyOffersGrid;

