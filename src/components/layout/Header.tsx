
import React, { useState } from 'react';
import { Menu, Search, ShoppingCart as ShoppingCartIcon, MapPin, ChevronDown, User, LogOut, Heart, Package, X, Leaf, ShieldCheck, Sparkles, TrendingUp, HelpCircle, DollarSign, Zap, Bell, Cpu, Hammer } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { useLocation } from '@/contexts/LocationContext';
import ShoppingCart from '@/components/checkout/ShoppingCart';
import MobileCockpit from './MobileCockpit';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { siteConfig } from '@/data/site';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { totalItems } = useCart();
  const { user, logout, isAuthenticated } = useAuth();
  const { cep, city, updateCep, isLoading: isLocLoading } = useLocation();
  const [isCepModalOpen, setIsCepModalOpen] = useState(false);
  const [newCep, setNewCep] = useState('');
  const navigate = useNavigate();

  const handleUpdateCep = async () => {
    if (newCep.replace(/\D/g, '').length !== 8) {
      toast.error('Informe um CEP válido');
      return;
    }
    const success = await updateCep(newCep);
    if (success) {
      toast.success('Localização atualizada!');
      setIsCepModalOpen(false);
    } else {
      toast.error('Erro ao buscar CEP');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="w-full bg-ml-yellow shadow-sm sticky top-0 z-50 selection:bg-ml-blue/20">
      <div className="container mx-auto px-4 py-1.5 md:py-2 md:px-8">
        <div className="flex items-center gap-2 md:gap-8 min-h-[44px] md:min-h-[56px]">
          <Link to="/" className="flex-shrink-0 transition-transform active:scale-95">
            <img
              src={siteConfig.logo}
              alt={`${siteConfig.name} Logo`}
              className="h-10 md:h-16 w-auto object-contain"
            />
          </Link>

          <div className="flex-1 relative group max-w-2xl mx-auto hidden sm:block">
            <form className="relative flex items-center shadow-inner rounded-xl overflow-hidden bg-white/80 backdrop-blur-md h-10 border border-black/5 focus-within:border-ml-blue/50 focus-within:bg-white transition-all duration-300">
              <span className="pl-4 text-gray-400"><Search size={18} /></span>
              <input
                type="text"
                placeholder="Busque por produtos, marcas ou ROI..."
                className="w-full h-full px-3 text-[14px] placeholder:text-gray-400 outline-none text-gray-800 bg-transparent font-medium"
              />
              <button type="submit" className="h-full px-5 bg-ml-blue text-white font-bold hover:bg-ml-blue-dark transition-all transform active:scale-95">
                Buscar
              </button>
            </form>
          </div>

          <div className="flex items-center gap-0.5 md:gap-4">
            <div className="hidden md:block">
              {isAuthenticated ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-1.5 text-[13px] text-gray-800 font-bold hover:text-ml-blue transition-colors outline-none cursor-pointer p-2 rounded-md hover:bg-black/5">
                      <User size={18} />
                      <span>Olá, {user?.name.split(' ')[0]}</span>
                      <ChevronDown size={14} />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 mt-2" align="end">
                    <DropdownMenuLabel className="font-bold flex flex-col">
                      <span>Minha Conta</span>
                      <span className="text-[10px] text-ml-green font-black uppercase tracking-widest mt-0.5">Eco-Membro</span>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/meus-pedidos" className="cursor-pointer py-2 flex items-center gap-2">
                        <Package size={16} /> Compras Sustentáveis
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/favoritos" className="cursor-pointer py-2 flex items-center gap-2">
                        <Heart size={16} /> Favoritos Eco
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout} className="text-red-500 cursor-pointer py-2 flex items-center gap-2">
                      <LogOut size={16} />
                      Sair da Conta
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <div className="flex items-center gap-5 text-[13px] text-gray-800 font-medium">
                  <Link to="/login" className="hover:text-ml-blue transition-colors">Crie sua conta</Link>
                  <Link to="/login" className="hover:text-ml-blue transition-colors">Entrar</Link>
                  <Link to="/meus-pedidos" className="hover:text-ml-blue transition-colors">Compras</Link>
                </div>
              )}
            </div>

            <button
              className="relative p-2 rounded-full hover:bg-black/5 transition-colors group h-10 w-10 flex items-center justify-center transform active:scale-90"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCartIcon className="w-6 h-6 text-gray-800" />
              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                    className="absolute top-0.5 right-0.5 bg-ml-blue text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center font-black shadow-sm"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            <button
              className="p-2 sm:hidden transition-transform active:scale-90"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={24} className="text-gray-800" />
            </button>
          </div>
        </div>

        <div className="flex sm:hidden items-center py-1.5 text-[12px] text-gray-800 border-t border-black/5">
          <button
            onClick={() => setIsCepModalOpen(true)}
            className="flex items-center gap-1.5 opacity-80"
          >
            <MapPin size={14} className="text-gray-600" />
            <span className="truncate">Enviar para {user?.name.split(' ')[0] || "Visitante"} - CEP {cep}</span>
            <ChevronDown size={12} className="text-gray-400" />
          </button>
        </div>

        <div className="hidden sm:flex items-center justify-between py-1.5 text-[13px] text-gray-700">
          <div className="flex items-center gap-10">
            <button
              onClick={() => setIsCepModalOpen(true)}
              className="flex items-center gap-2 hover:text-ml-blue transition-colors group"
            >
              <MapPin size={18} className="text-gray-400 group-hover:text-ml-blue transition-colors" />
              <div className="flex flex-col text-left leading-none">
                <span className="text-[11px] text-gray-500 font-medium tracking-tight">Enviar para {user?.name.split(' ')[0] || "Visitante"}</span>
                <span className="font-bold text-gray-800">{isLocLoading ? "Carregando..." : `CEP ${cep}`}</span>
              </div>
            </button>

            <nav>
              <ul className="flex items-center gap-6">
                <li><Link to="/categorias" className="text-gray-600 hover:text-ml-blue transition-colors font-bold">Radar de Nichos</Link></li>
                <li><Link to="/kits" className="text-gray-600 hover:text-ml-blue transition-colors font-bold">Kits Validados</Link></li>
                  <li><Link to="/labs" className="text-gray-600 hover:text-ml-blue transition-colors font-bold flex items-center gap-1">
                    <Sparkles size={14} className="text-ml-blue" />
                    Multideal Labs
                  </Link></li>
                <li><Link to="/sobre" className="text-gray-600 hover:text-ml-blue transition-colors">Sobre a Engenharia</Link></li>
                <li><Link to="/ajuda" className="text-gray-600 hover:text-ml-blue transition-colors">Suporte</Link></li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-ml-green font-black flex items-center gap-1.5 bg-ml-green/5 px-2 py-0.5 rounded tracking-tight text-[12px]">
              <ShieldCheck size={14} className="fill-ml-green text-white" />
              CURADORIA PROSPERA ATIVA
            </span>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[85%] max-w-[320px] bg-white z-[70] shadow-2xl flex flex-col"
            >
              <div className="p-5 bg-ml-yellow flex items-center justify-between sticky top-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <User size={20} className="text-gray-400" />
                  </div>
                  <div>
                    <p className="text-[14px] font-black text-gray-800">Olá, {user?.name.split(' ')[0] || "Seja bem-vindo"}</p>
                    <p className="text-[11px] text-gray-600">Acesse sua conta para ver benefícios</p>
                  </div>
                </div>
                <button onClick={() => setIsMenuOpen(false)} className="p-1"><X size={24} /></button>
              </div>

              <div
                onClick={() => { setIsMenuOpen(false); setIsCepModalOpen(true); }}
                className="p-4 bg-gray-50 border-b border-gray-100 flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-ml-blue" />
                  <span className="text-[13px] font-bold text-gray-700">Enviar para CEP {cep}</span>
                </div>
                <ChevronDown size={14} className="text-gray-400" />
              </div>

              <nav className="flex-1 overflow-y-auto p-4">
                <ul className="space-y-1">
                  {[
                    { label: 'Oportunidades do Dia', icon: Zap, href: '/' },
                    { label: 'Tecnologia & Gadgets', icon: Cpu, href: '/produtos?category=Tecnologia' },
                    { label: 'Reforma & Construção', icon: Hammer, href: '/produtos?category=Casa %26 Reforma' },
                    { label: 'Empreendedor (Kits)', icon: TrendingUp, href: '/produtos?category=Kits de Lucro' },
                    { label: 'Estilo & Performance', icon: Sparkles, href: '/produtos?category=Lifestyle %26 Performance' },
                    { label: 'Multideal Labs', icon: Sparkles, href: '/labs' },
                  ].map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-4 py-4 px-3 rounded-xl hover:bg-gray-100 transition-all text-gray-800 font-bold border border-transparent active:scale-[0.98]"
                      >
                        <div className="p-2 rounded-lg bg-gray-50 text-gray-400 group-hover:bg-ml-blue/10 group-hover:text-ml-blue transition-colors">
                          <item.icon size={22} />
                        </div>
                        <span className="text-[15px]">{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col gap-3">
                  {isAuthenticated ? (
                    <Button onClick={handleLogout} variant="ghost" className="w-full justify-start text-red-500 font-bold hover:bg-red-50 border border-transparent hover:border-red-100">
                      <LogOut size={18} className="mr-3" /> Sair da conta
                    </Button>
                  ) : (
                    <>
                      <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                        <Button className="w-full bg-ml-blue hover:bg-ml-blue-dark font-bold py-6 text-[15px]">Entrar</Button>
                      </Link>
                      <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                        <Button variant="ghost" className="w-full font-bold text-ml-blue hover:bg-ml-blue/5">Criar conta</Button>
                      </Link>
                    </>
                  )}
                </div>
              </nav>

              <div className="p-6 bg-ml-green/5 border-t border-gray-50">
                <div className="flex items-center gap-2 text-ml-green font-bold text-[12px]">
                  <ShieldCheck size={16} />
                  COMPRA SUSTENTÁVEL GARANTIDA
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <ShoppingCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      <Dialog open={isCepModalOpen} onOpenChange={setIsCepModalOpen}>
        <DialogContent className="sm:max-w-[400px] rounded-2xl">
          <DialogHeader className="space-y-3">
            <div className="w-12 h-12 bg-ml-blue/10 rounded-xl flex items-center justify-center text-ml-blue mx-auto mb-2">
              <MapPin size={24} />
            </div>
            <DialogTitle className="text-xl font-black text-center text-gray-800">Escolha onde receber</DialogTitle>
            <p className="text-gray-500 text-center text-[14px]">Informe seu CEP para ver custos e prazos de entrega mais precisos.</p>
          </DialogHeader>
          <div className="py-6">
            <label className="text-[12px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">CEP do Brasil</label>
            <Input
              placeholder="00000-000"
              value={newCep}
              onChange={e => setNewCep(e.target.value)}
              className="h-12 rounded-xl text-lg font-bold"
              autoFocus
            />
          </div>
          <DialogFooter>
            <Button
              onClick={handleUpdateCep}
              disabled={isLocLoading}
              className="w-full bg-ml-blue hover:bg-ml-blue-dark text-white font-black h-12 rounded-xl text-[16px]"
            >
              {isLocLoading ? 'Buscando...' : 'Atualizar Localização'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <MobileCockpit />
    </header>
  );
};

export default Header;
