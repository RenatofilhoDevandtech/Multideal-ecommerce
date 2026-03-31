
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { heroBanners } from '@/data/heroBanners';

const PromoCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setIndex((prevIndex) => (prevIndex + newDirection + heroBanners.length) % heroBanners.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(timer);
  }, [paginate]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  return (
    <div className="relative w-full h-[210px] sm:h-[300px] md:h-[480px] overflow-hidden bg-ml-background">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute inset-0 w-full h-full"
          style={{ backgroundColor: heroBanners[index].color }}
        >
          <Link to={heroBanners[index].href} className="absolute inset-0 w-full h-full">
            {/* Edge-to-edge content wrapper */}
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
               {/* Full Background Image */}
               <img 
                 src={heroBanners[index].image} 
                 alt={heroBanners[index].title || 'Banner'} 
                 className="w-full h-full object-cover opacity-90"
               />
               
               {/* Text Content Overlay */}
               <div className="absolute inset-0 flex items-center">
                  <div className="container mx-auto px-4 md:px-12 lg:px-20">
                     <div className="max-w-xl space-y-2 md:space-y-4" style={{ color: heroBanners[index].textColor }}>
                        {heroBanners[index].label && (
                          <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block px-4 py-1 rounded-full bg-black/10 backdrop-blur-sm text-[12px] md:text-[14px] font-black uppercase tracking-widest border border-white/20 mb-2"
                          >
                             {heroBanners[index].label}
                          </motion.div>
                        )}
                        {heroBanners[index].title && heroBanners[index].title.trim() !== "" && (
                          <motion.h2 
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-[32px] md:text-[64px] font-black leading-none tracking-tighter"
                          >
                            {heroBanners[index].title}
                          </motion.h2>
                        )}
                        {heroBanners[index].subtitle && heroBanners[index].subtitle.trim() !== "" && (
                          <motion.p 
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-[16px] md:text-[24px] font-bold opacity-90"
                          >
                            {heroBanners[index].subtitle}
                          </motion.p>
                        )}

                     </div>
                  </div>
               </div>
               
               {/* Background Mesh */}
               <div className="absolute inset-0 bg-mesh opacity-10 pointer-events-none" />
            </div>
          </Link>
        </motion.div>
      </AnimatePresence>

      {/* Navigation dots */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex items-center justify-center gap-2">
        {heroBanners.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            className={`h-2 transition-all duration-300 rounded-full ${index === i ? 'w-10 bg-white' : 'w-2 bg-white/40'}`}
          />
        ))}
      </div>

      {/* Side Arrows */}
      <button 
        onClick={() => paginate(-1)}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full items-center justify-center text-white z-30 transition-all active:scale-90 hidden md:flex"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={() => paginate(1)}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full items-center justify-center text-white z-30 transition-all active:scale-90 hidden md:flex"
      >
        <ChevronRight size={32} />
      </button>

      {/* Misty Gradient Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ml-background to-transparent z-20 pointer-events-none" />
    </div>
  );
};

export default PromoCarousel;
