
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import ProductCard from './ProductCard';
import { useEcoProducts } from '@/hooks/useEcoProducts';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TrendingProducts: React.FC = () => {
  const { trendingProducts, isLoading } = useEcoProducts();

  if (isLoading) {
    return (
      <section className="container mx-auto px-4 md:px-8 py-10">
        <div className="flex gap-4 overflow-hidden">
           {[1, 2, 3, 4, 5].map(i => (
             <div key={i} className="min-w-[280px] aspect-[3/4] bg-gray-50 animate-pulse rounded-md" />
           ))}
        </div>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 md:px-8 py-10" id="ofertas">
      <div className="flex flex-col sm:flex-row justify-between items-end mb-8 gap-4 border-b border-gray-100 pb-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-1">
             <span className="text-ml-blue font-black text-[12px] uppercase tracking-widest">Destaques</span>
             <Sparkles size={14} className="text-ml-yellow fill-ml-yellow" />
          </div>
          <h3 className="text-gray-800 font-bold text-2xl md:text-3xl tracking-tight">
            Tendências <span className="text-ml-blue">Lucrativas</span>
          </h3>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a href="/produtos" className="group flex items-center gap-1.5 text-ml-blue text-[15px] font-bold hover:underline">
            <span>Explorar Tendências</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
      
      {/* Mobile: 2-column grid */}
      <div className="sm:hidden grid grid-cols-2 gap-2">
        {trendingProducts.slice(0, 6).map((product) => (
          <ProductCard 
            key={product.id} 
            id={String(product.id)}
            name={product.name}
            price={product.salePrice}
            image={product.image}
            category={product.category}
            isTrending={true}
          />
        ))}
      </div>

      {/* Desktop/Tablet: Carousel */}
      <div className="hidden sm:block bg-white rounded-md border border-gray-100 shadow-sm p-4 md:p-6 relative">
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-3 md:-ml-4">
            {trendingProducts.map((product) => (
              <CarouselItem 
                key={product.id} 
                className="pl-3 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <ProductCard 
                  id={String(product.id)}
                  name={product.name}
                  price={product.salePrice}
                  image={product.image}
                  category={product.category}
                  isTrending={true}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden lg:block">
            <CarouselPrevious className="-left-6 bg-white shadow-xl hover:bg-gray-50 h-12 w-12 border-gray-100" />
            <CarouselNext className="-right-6 bg-white shadow-xl hover:bg-gray-50 h-12 w-12 border-gray-100" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TrendingProducts;
