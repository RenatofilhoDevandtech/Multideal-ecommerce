
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { categoryHighlights } from '@/data/categories';
import { ChevronRight } from 'lucide-react';

const CategoriesGrid: React.FC = React.memo(() => {
  return (
    <section className="container mx-auto px-4 md:px-8 mb-16 sm:mb-20">
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <h2 className="text-[20px] md:text-2xl font-bold text-gray-800 tracking-tight">Inspirado em Você</h2>
        <Link to="/categorias" className="text-ml-blue text-[13px] sm:text-[14px] font-bold hover:underline flex items-center gap-1">
          Ver todas <ChevronRight size={16} />
        </Link>
      </div>

      {/* Horizontal Scroll on Mobile, Grid on Desktop */}
      <div className="flex sm:grid overflow-x-auto sm:overflow-x-visible pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6 no-scrollbar">
        {categoryHighlights.map((cat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-all h-[200px] sm:h-[240px] min-w-[160px] sm:min-w-0 cursor-pointer flex-shrink-0 sm:flex-shrink"
          >
            <Link to={cat.link} className="block w-full h-full">
               {/* Background Image */}
               <img 
                 src={cat.image} 
                 alt={cat.name} 
                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                 loading="lazy"
                 decoding="async"
               />
               
               {/* Overlay Gradient */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />
               
               {/* Content */}
               <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <span className="inline-block px-1.5 py-0.5 bg-white/20 backdrop-blur-md rounded text-[9px] text-white font-bold uppercase tracking-wider mb-2 border border-white/10">
                     Explorar
                  </span>
                  <h3 className="text-white font-bold text-[16px] sm:text-[18px] leading-tight group-hover:translate-x-1 transition-transform tracking-tight">
                    {cat.name}
                  </h3>
               </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
});

CategoriesGrid.displayName = 'CategoriesGrid';

export default CategoriesGrid;
