
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Drawer, 
  DrawerClose, 
  DrawerContent, 
  DrawerHeader, 
  DrawerTitle, 
  DrawerFooter
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingCart as CartIcon, Trash2, X, Leaf, ShieldCheck } from "lucide-react";
import { useCart } from '@/contexts/CartContext';
import { useNavigate } from 'react-router-dom';

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    onClose();
    navigate('/checkout');
  };

  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent className="max-h-[90vh] h-auto border-t-0 shadow-3xl"> 
        <div className="mx-auto w-full max-w-xl">
          <DrawerHeader className="border-b border-gray-100 pb-4">
            <div className="flex items-center justify-between">
              <DrawerTitle className="text-xl font-black text-gray-800 tracking-tight flex items-center gap-3">
                <div className="p-2 bg-ml-blue/5 rounded-lg text-ml-blue">
                   <CartIcon size={22} /> 
                </div>
                Meu Carrinho Eco
                <span className="text-[12px] bg-ml-green/10 text-ml-green px-2 py-0.5 rounded-full font-bold">
                  {totalItems} itens
                </span>
              </DrawerTitle>
              <DrawerClose className="rounded-full hover:bg-gray-100 p-2 transition-colors">
                <X size={20} className="text-gray-400" />
              </DrawerClose>
            </div>
          </DrawerHeader>
          
          <div className="p-6 overflow-y-auto max-h-[55vh] custom-scrollbar">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                   <CartIcon className="w-10 h-10 text-gray-200" />
                </div>
                <h3 className="text-[20px] font-black text-gray-800">Seu carrinho está vazio</h3>
                <p className="text-gray-500 text-[14px] mt-2 max-w-xs">
                  Ainda não encontramos produtos sustentáveis no seu carrinho. Vamos explorar?
                </p>
                <Button 
                  className="mt-8 bg-ml-blue hover:bg-ml-blue-dark text-white font-bold px-8 h-12 rounded-xl shadow-lg shadow-ml-blue/20" 
                  onClick={onClose}
                >
                  Continuar Escolhas
                </Button>
              </div>
            ) : (
              <AnimatePresence>
                <div className="space-y-6">
                  {cart.map((item) => (
                    <motion.div 
                      key={item.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="flex items-center gap-4 group"
                    >
                      <div className="relative w-24 h-24 flex-shrink-0 bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            e.currentTarget.src = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=100";
                          }} 
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between h-24 py-1">
                        <div>
                           <div className="flex items-start justify-between gap-2">
                             <h4 className="font-bold text-gray-800 text-[16px] leading-tight line-clamp-2">{item.name}</h4>
                             <button 
                               onClick={() => removeFromCart(item.id)}
                               className="text-gray-300 hover:text-red-500 transition-colors p-1"
                             >
                               <Trash2 size={18} />
                             </button>
                           </div>
                           <p className="text-ml-blue font-black text-[18px] mt-1">
                             R$ {item.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                           </p>
                        </div>
                        
                        <div className="flex items-center justify-between">
                           <div className="flex items-center gap-1.5 text-[11px] text-ml-green font-bold">
                              <Leaf size={12} />
                              Entrega Carbono Zero
                           </div>
                           <div className="flex items-center bg-gray-50 rounded-lg p-1 border border-gray-100">
                             <button 
                               onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                               className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-ml-blue hover:bg-white rounded-md transition-all"
                             >
                               <Minus size={14} />
                             </button>
                             <span className="w-8 text-center text-[14px] font-black text-gray-800">{item.quantity}</span>
                             <button 
                               onClick={() => updateQuantity(item.id, item.quantity + 1)}
                               className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-ml-blue hover:bg-white rounded-md transition-all"
                             >
                               <Plus size={14} />
                             </button>
                           </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </AnimatePresence>
            )}
          </div>
          
          {cart.length > 0 && (
            <DrawerFooter className="border-t border-gray-100 bg-gray-50/50 p-6 md:p-8">
              <div className="space-y-6">
                <div className="space-y-2">
                   <div className="flex items-center justify-between text-gray-500 text-[14px]">
                     <span>Produtos</span>
                     <span className="font-bold">R$ {totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                   </div>
                   <div className="flex items-center justify-between text-ml-green text-[14px] font-bold">
                     <span className="flex items-center gap-1.5">
                        <Leaf size={14} /> Eco-Entrega (Locker)
                     </span>
                     <span>Grátis</span>
                   </div>
                   <div className="flex items-center justify-between pt-2">
                     <span className="text-lg font-black text-gray-800">Total</span>
                     <span className="text-2xl font-black text-ml-blue">R$ {totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                   </div>
                </div>
                
                <div className="flex flex-col gap-3">
                   <Button 
                     onClick={handleCheckout}
                     className="w-full bg-ml-blue hover:bg-ml-blue-dark text-white h-14 rounded-2xl text-[16px] font-black shadow-xl shadow-ml-blue/20 active:scale-95 transition-all"
                   >
                     Finalizar Compra 2026
                   </Button>
                   <div className="flex items-center justify-center gap-4">
                      <div className="flex items-center gap-1 text-[11px] text-gray-400">
                         <ShieldCheck size={14} className="text-ml-green" />
                         Check-out Seguro
                      </div>
                      <Button variant="ghost" size="sm" onClick={clearCart} className="text-gray-400 hover:text-red-500 text-[11px] font-bold">
                        Limpar Escolhas
                      </Button>
                   </div>
                </div>
              </div>
            </DrawerFooter>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ShoppingCart;
