import React from 'react';
import { Home, Cpu, Hammer, TrendingUp, ShoppingCart, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '@/contexts/CartContext';

const MobileCockpit: React.FC = () => {
  const location = useLocation();
  const { totalItems } = useCart();

  const navItems = [
    { icon: <Home size={20} />, label: 'Início', path: '/' },
    { icon: <Cpu size={20} />, label: 'Tech', path: '/produtos?category=Tecnologia' },
    { icon: <Hammer size={20} />, label: 'Reforma', path: '/produtos?category=Casa %26 Reforma' },
    { icon: <TrendingUp size={20} />, label: 'Lucro', path: '/produtos?category=Kits de Lucro' },
    { icon: <Sparkles size={20} />, label: 'Estilo', path: '/produtos?category=Lifestyle %26 Performance' },
    { icon: <ShoppingCart size={20} />, label: 'Carrinho', path: '#', isCart: true },
  ];

  return (
    <div className="sm:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[92%] max-w-[400px]">
      <nav className="bg-white/80 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.12)] rounded-[24px] px-2 py-2 flex items-center justify-between">
        {navItems.map((item, idx) => {
          const isActive = location.pathname === item.path;
          
          return (
            <Link 
              key={idx}
              to={item.isCart ? '#' : item.path}
              className="relative flex flex-col items-center justify-center w-12 h-12 rounded-2xl transition-all active:scale-90"
            >
              <motion.div 
                className={`flex items-center justify-center ${isActive ? 'text-ml-blue' : 'text-gray-400'}`}
                animate={isActive ? { scale: 1.1 } : { scale: 1 }}
              >
                {item.icon}
                {item.isCart && totalItems > 0 && (
                  <span className="absolute top-2 right-2 bg-ml-blue text-white text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
                    {totalItems}
                  </span>
                )}
              </motion.div>
              
              {isActive && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute -bottom-1 w-1 h-1 bg-ml-blue rounded-full"
                />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default MobileCockpit;
