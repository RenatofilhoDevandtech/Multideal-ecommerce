
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';
import { adCards } from '@/data/adCards';
import { Button } from '@/components/ui/button';
import { useRecentlyViewed } from '@/hooks/useRecentlyViewed';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const FeatureQuickLinks: React.FC = () => {
  const { recentlyViewed } = useRecentlyViewed();

  return (
    <section className="bg-transparent pb-6 sm:pb-12 border-none relative z-20">
      <div className="container mx-auto px-4 md:px-8">
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full relative group"
        >
          <CarouselContent className="-ml-3 md:-ml-4">
            {/* Recently Viewed Card (Dynamic) */}
            {recentlyViewed && (
              <CarouselItem className="pl-3 md:pl-4 basis-[200px] sm:basis-1/2 md:basis-1/4 lg:basis-1/5 xl:basis-1/6">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full bg-white rounded-lg p-5 flex flex-col items-start shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer group/card"
                >
                  <span className="text-[14px] font-bold text-gray-800 mb-4 group-hover/card:text-ml-blue transition-colors">Visto recentemente</span>
                  
                  <div className="w-full aspect-square mb-6 flex items-center justify-center bg-white overflow-hidden">
                    <img 
                      src={recentlyViewed.image} 
                      alt={recentlyViewed.name}
                      className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover/card:scale-110"
                    />
                  </div>

                  <div className="flex flex-col gap-0.5 mb-2 w-full">
                    <p className="text-[14px] text-gray-600 line-clamp-2 leading-tight min-h-[35px] mb-1">
                      {recentlyViewed.name}
                    </p>
                    <p className="text-[12px] text-gray-400 line-through">
                      R$ {recentlyViewed.originalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-[18px] font-medium text-gray-900 leading-none">
                        R$ {recentlyViewed.salePrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </span>
                      <span className="text-[13px] text-ml-green font-bold">{recentlyViewed.discount}% OFF</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-ml-green font-bold text-[13px]">Frete grátis</span>
                      <div className="flex items-center bg-ml-blue/5 px-1 rounded">
                        <Zap size={10} className="text-ml-blue fill-ml-blue mr-0.5" />
                        <span className="text-ml-blue text-[9px] font-black italic tracking-tighter">FULL</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            )}

            {/* Static Ad Cards */}
            {adCards.map((card, idx) => (
              <CarouselItem key={idx} className="pl-3 md:pl-4 basis-[200px] sm:basis-1/2 md:basis-1/4 lg:basis-1/5 xl:basis-1/6">
                <motion.div 
                  className="h-full bg-white rounded-lg p-5 flex flex-col items-start shadow-sm border border-gray-100 hover:shadow-md transition-all group/card"
                >
                  <h3 className="text-[14px] font-bold text-gray-800 mb-6 h-10 w-full text-left line-clamp-2 leading-tight group-hover/card:text-ml-blue transition-colors">
                    {card.title}
                  </h3>

                  <div className="w-full aspect-square mb-6 flex items-center justify-center overflow-hidden">
                    <img 
                      src={card.image} 
                      alt={card.title}
                      className="max-w-[100px] sm:max-w-[120px] max-h-full object-contain transition-transform duration-500 group-hover/card:scale-110"
                    />
                  </div>

                  <p className="text-[13px] text-gray-500 mb-6 text-left line-clamp-2 leading-snug w-full min-h-[38px]">
                    {card.description}
                  </p>

                  <div className="mt-auto w-full">
                    <Link to={card.link}>
                      <Button 
                        variant="ghost" 
                        className="w-full h-9 bg-ml-blue/10 hover:bg-ml-blue/20 text-ml-blue font-bold text-[13px] rounded-sm transition-colors"
                      >
                        {card.buttonText}
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity">
            <CarouselPrevious className="-left-4 bg-white shadow-lg hover:bg-gray-50 h-12 w-12 border-gray-100" />
            <CarouselNext className="-right-4 bg-white shadow-lg hover:bg-gray-50 h-12 w-12 border-gray-100" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default FeatureQuickLinks;
