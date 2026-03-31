
import React from 'react';
import { motion } from 'framer-motion';
import { collectionsData } from '@/data/collections';
import { ArrowRight, Leaf } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const FeaturedCollections: React.FC = () => {
  return (
    <section className="container mx-auto px-4 md:px-8 py-12">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-800 leading-tight">
              Coleções Multideal Profissionais
            </h2>
            <p className="text-gray-500 text-[14px] md:text-[16px] mt-1">
              Curadoria especializada em alta performance e geração de renda para 2026.
            </p>
          </div>
          <button className="text-ml-blue font-bold text-[14px] hover:underline flex items-center gap-1.1 group">
            Ver todas as coleções
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <motion.ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {collectionsData.map((collection) => (
            <motion.li
              key={collection.id}
              variants={itemVariants}
              className="relative rounded-2xl overflow-hidden bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 group aspect-[4/3] sm:aspect-[3/4] lg:aspect-[4/3]"
            >
              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-20">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-ml-green text-white rounded-md text-[12px] font-bold shadow-lg shadow-ml-green/20">
                    <Leaf size={12} />
                    {collection.discount}
                  </div>
                  <h3 className="text-[24px] md:text-[28px] font-black text-gray-800 leading-tight">
                    {collection.title}
                  </h3>
                  <p className="text-gray-500 text-[14px] md:text-[15px] max-w-[180px]">
                    {collection.description}
                  </p>
                </div>

                <a
                  href={collection.href}
                  className="inline-flex items-center gap-2 text-ml-blue font-bold text-[15px] group-hover:gap-3 transition-all"
                >
                  Explorar Agora
                  <ArrowRight size={18} />
                </a>
              </div>

               {/* Product Image Element */}
              <div className="absolute bottom-0 right-0 w-[60%] h-[60%] md:w-[70%] md:h-[70%] z-10 pointer-events-none p-2">
                 <motion.img
                   src={collection.image}
                   alt={collection.title}
                   className="w-full h-full object-contain object-bottom transition-transform duration-700 group-hover:scale-110 drop-shadow-xl"
                   initial={{ rotate: -5, y: 20, opacity: 0 }}
                   whileInView={{ rotate: 0, y: 0, opacity: 1 }}
                   transition={{ duration: 0.8, ease: "easeOut" }}
                 />
              </div>

              {/* Decorative Mesh Circle */}
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-ml-yellow/10 rounded-full blur-2xl group-hover:bg-ml-blue/10 transition-colors duration-500" />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default FeaturedCollections;
