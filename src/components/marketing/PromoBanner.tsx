
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AdBanner } from '@/data/ads';

interface PromoBannerProps {
  ad: AdBanner;
}

const PromoBanner: React.FC<PromoBannerProps> = ({ ad }) => {
  const isExternal = ad.link.startsWith('http');
  const Wrapper = isExternal ? 'a' : Link;
  const wrapperProps = isExternal 
    ? { href: ad.link, target: "_blank", rel: "noopener noreferrer" } 
    : { to: ad.link };

  return (
    <section className="container mx-auto px-4 md:px-8 overflow-hidden my-12">
      {/* @ts-expect-error: Wrapper is a dynamic component that can be 'a' or 'link' */}
      <Wrapper {...wrapperProps} className="block group">
        <motion.div 
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.4 }}
          className="relative w-full rounded-[32px] overflow-hidden bg-black aspect-[21/9] md:aspect-[32/9] shadow-2xl border border-white/10"
        >
          {/* Background Image */}
          <img 
            src={ad.image} 
            alt={ad.title} 
            className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
          />
          
          {/* Subtle Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent z-10" />
          <div className="absolute inset-0 bg-mesh opacity-10 z-10" />

          {/* Content Overlay */}
          <div className="absolute inset-0 z-20 flex flex-col justify-center p-8 md:p-16 lg:p-24 max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-ml-blue border border-white/20 text-white font-black text-[10px] md:text-[12px] uppercase tracking-[0.3em] shadow-lg">
                Exclusive Launch
              </div>
              
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-white leading-none tracking-tighter uppercase italic">
                {ad.title}
              </h2>
              
              <p className="text-white/70 text-[14px] md:text-lg font-bold max-w-lg leading-tight uppercase tracking-tight">
                {ad.subtitle}
              </p>
              
              <div className="pt-6">
                <div className="inline-flex items-center gap-3 text-white font-black text-[13px] md:text-[15px] uppercase tracking-widest border-b-2 border-ml-blue pb-2 group-hover:gap-5 transition-all">
                  {ad.buttonText || 'Discover Now'}
                  <ArrowRight size={20} className="text-ml-blue" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Badge corner */}
          <div className="absolute top-8 right-8 z-20 flex items-center gap-2">
            <div className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white font-bold text-[10px] uppercase tracking-widest">
              2026 EDITION
            </div>
          </div>
        </motion.div>
      </Wrapper>
    </section>
  );
};

export default PromoBanner;
