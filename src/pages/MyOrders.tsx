
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package, CheckCircle2, Clock, AlertTriangle, ChevronDown, ChevronRight, Leaf, ShieldCheck, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ordersData } from '@/data/orders';
import { Order, OrderStatus } from '@/types';

const statusConfig: Record<OrderStatus, { icon: React.ReactNode; badge: string; color: string }> = {
  Entregue: { icon: <CheckCircle2 size={18} />, badge: "bg-ml-green/10 text-ml-green", color: "text-ml-green" },
  "Em trânsito": { icon: <Package size={18} />, badge: "bg-ml-blue/10 text-ml-blue", color: "text-ml-blue" },
  Processando: { icon: <Clock size={18} />, badge: "bg-ml-yellow/20 text-gray-700", color: "text-ml-yellow" },
  Cancelado: { icon: <AlertTriangle size={18} />, badge: "bg-red-100 text-red-700", color: "text-red-500" },
};

interface OrderDetailsProps {
  order: Order;
  isOpen: boolean;
  onToggle: () => void;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ order, isOpen, onToggle }) => {
  const { icon, badge, color } = statusConfig[order.status];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-4 overflow-hidden group hover:shadow-md transition-shadow">
      <div
        className="flex flex-col md:flex-row md:items-center justify-between p-5 cursor-pointer gap-4"
        onClick={onToggle}
      >
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${badge} transition-transform group-hover:scale-105`}>
            {icon}
          </div>
          <div>
            <h4 className="font-black text-gray-800 tracking-tight text-[16px]">Pedido {order.id}</h4>
            <p className="text-[12px] text-gray-400 font-bold uppercase tracking-widest">{order.date}</p>
          </div>
        </div>

        <div className="flex items-center justify-between md:justify-end gap-6 border-t md:border-t-0 pt-4 md:pt-0">
          <div className="text-left md:text-right">
            <p className="text-[12px] text-gray-400 font-medium">{order.items} {order.items > 1 ? 'itens' : 'item'}</p>
            <p className="text-ml-blue font-black text-[18px]">{order.total}</p>
          </div>

          <div className="flex items-center gap-3">
            <span className={`px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest shadow-sm ${badge}`}>
              {order.status}
            </span>
            <div className={`p-1.5 rounded-full bg-gray-50 text-gray-300 transition-transform duration-300 ${isOpen ? 'rotate-180 text-ml-blue' : ''}`}>
              <ChevronDown size={20} />
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-gray-50 bg-ml-background/20"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h5 className="font-black text-gray-800 text-[14px] uppercase tracking-widest flex items-center gap-2">
                  <ShieldCheck size={16} className="text-ml-green" />
                  Produtos com Rastreio Eco
                </h5>
                <div className="flex items-center gap-1.5 text-[11px] text-ml-green font-bold bg-ml-green/10 px-3 py-1 rounded-full">
                  <Leaf size={14} /> Eco-Entrega Ativa
                </div>
              </div>

              <div className="space-y-4">
                {order.products.map(product => (
                  <div key={product.id} className="flex items-center gap-4 bg-white p-3 rounded-xl border border-gray-50">
                    <div className="bg-gray-50 rounded-lg w-20 h-20 p-2 flex items-center justify-center overflow-hidden border border-gray-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-h-full max-w-full object-contain"
                        onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=100"; }}
                      />
                    </div>
                    <div className="flex-1">
                      <h6 className="font-bold text-gray-800 text-[15px] leading-tight">{product.name}</h6>
                      <div className="flex items-center gap-3 mt-1.5">
                        <p className="text-[12px] text-gray-400 font-medium">Quantidade: {product.quantity}</p>
                        <div className="w-1 h-1 bg-gray-200 rounded-full" />
                        <p className="text-[12px] text-ml-green font-bold">Frete Grátis via Locker</p>
                      </div>
                    </div>
                    <p className="font-black text-gray-800 text-[16px]">{product.price}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between gap-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gray-100 rounded-lg text-gray-400">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">Endereço de Entrega</p>
                    <p className="text-[14px] font-bold text-gray-700">Locker Multideal - Rua Oscar Freire, 1234</p>
                    <p className="text-[12px] text-gray-500">São Paulo, SP - Brasil</p>
                  </div>
                </div>
                <div className="bg-ml-blue/5 p-4 rounded-xl flex items-center justify-between min-w-[240px]">
                  <span className="font-bold text-gray-600">Investimento Total</span>
                  <span className="font-black text-2xl text-ml-blue">{order.total}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const OrdersList: React.FC<{ orders: Order[] }> = ({ orders }) => {
  const [openOrderId, setOpenOrderId] = useState<string | null>(null);

  const toggleOrderDetails = (orderId: string) => {
    setOpenOrderId(openOrderId === orderId ? null : orderId);
  };

  if (orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
          <Package size={32} className="text-gray-200" />
        </div>
        <h3 className="text-xl font-black text-gray-800">Nenhum pedido encontrado</h3>
        <p className="text-gray-400 mt-2 max-w-xs">Não há compras neste status. Que tal encontrar algo novo?</p>
        <a href="/produtos" className="mt-6 text-ml-blue font-bold hover:underline">Ver todas as ofertas</a>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {orders.map(order => (
        <OrderDetails
          key={order.id}
          order={order}
          isOpen={openOrderId === order.id}
          onToggle={() => toggleOrderDetails(order.id)}
        />
      ))}
    </div>
  );
};

const MyOrders: React.FC = () => {
  const trackingLinks = [
    { name: "Amazon", url: "https://www.amazon.com.br/gp/css/order-history", color: "bg-[#FF9900]", icon: <ExternalLink size={18} /> },
    { name: "Shopee", url: "https://shopee.com.br/user/purchase", color: "bg-[#EE4D2D]", icon: <ExternalLink size={18} /> },
    { name: "Mercado Livre", url: "https://www.mercadolivre.com.br/compras", color: "bg-[#FFE600] text-gray-800", icon: <ExternalLink size={18} /> },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-ml-background selection:bg-ml-blue/10">
      <Header />

      <main className="flex-grow pb-24">
        <div className="bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-ml-blue font-black text-[11px] uppercase tracking-[0.2em] bg-ml-blue/5 px-3 py-1 rounded-full w-fit border border-ml-blue/10">
                  <ShieldCheck size={14} /> Central de Acompanhamento
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tighter">
                  Suas <span className="text-ml-blue">Compras</span>
                </h1>
                <p className="text-gray-500 text-lg font-medium">Gerencie seus pedidos realizados em nossas lojas parceiras.</p>
              </div>
              <div className="flex items-center gap-4 bg-ml-blue/5 p-5 rounded-xl border border-ml-blue/10">
                <div className="text-right">
                  <p className="text-[11px] text-ml-blue font-black uppercase tracking-widest leading-none">Modelo de Negócio</p>
                  <p className="text-[16px] font-bold text-gray-700">Curadoria Afiliada</p>
                </div>
                <div className="w-10 h-10 bg-ml-blue rounded-lg flex items-center justify-center text-white">
                  <ExternalLink size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-8 -mt-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-ml-yellow/10 border border-ml-yellow/20 p-6 rounded-2xl flex items-start gap-4">
                <div className="p-3 bg-ml-yellow/20 rounded-xl text-ml-yellow shrink-0">
                  <AlertTriangle size={24} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-gray-800 text-lg tracking-tight">Informação Importante</h3>
                  <p className="text-sm text-gray-600 font-medium leading-relaxed">
                    A **Multideal** é uma plataforma de curadoria. Suas compras são processadas de forma segura diretamente nos sites oficiais da **Amazon, Shopee e Mercado Livre**. Para rastrear seu pacote, utilize o painel da loja onde o pagamento foi realizado.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2 tracking-tight">
                  <Package className="text-ml-blue" /> Rastreio Rápido por Loja
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {trackingLinks.map((link, idx) => (
                    <a 
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${link.color} p-5 rounded-xl flex flex-col items-center justify-center gap-3 transition-transform hover:scale-105 shadow-md group`}
                    >
                      <span className="text-white">{link.icon}</span>
                      <span className="text-white font-black text-[12px] uppercase tracking-widest">{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-white p-2 rounded-xl shadow-sm border border-gray-50 inline-flex w-full md:w-auto overflow-x-auto no-scrollbar">
                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="bg-transparent h-auto p-0 flex-nowrap w-full">
                    <TabsTrigger value="all" className="rounded-lg px-6 py-3 font-bold text-[14px] data-[state=active]:bg-ml-blue data-[state=active]:text-white transition-all">
                      Histórico Geral
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              <div className="flex flex-col items-center justify-center py-16 text-center bg-white rounded-2xl border border-gray-100 border-dashed">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                  <Package size={32} className="text-gray-200" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 tracking-tight">Seu Painel de Atividade</h3>
                <p className="text-gray-400 mt-2 max-w-sm font-medium text-sm">
                  Como os pedidos são externos, eles não aparecem automaticamente aqui por questões de privacidade. Use os botões acima para ver seus status reais.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button variant="outline" onClick={() => window.location.href='/produtos'} className="rounded-xl border-gray-200 font-bold px-8 h-12">
                    Ver Ofertas Atuais
                  </Button>
                  <Button className="bg-ml-blue hover:bg-ml-blue-dark text-white rounded-xl font-bold px-8 h-12 shadow-lg shadow-ml-blue/20">
                    Sugestões Scout
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-ml-blue to-blue-700 text-white p-8 rounded-2xl relative overflow-hidden group shadow-xl shadow-ml-blue/20">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />
                <h4 className="text-xl font-bold mb-4 tracking-tight uppercase">Precisa de Ajuda?</h4>
                <p className="text-sm text-white/80 font-medium mb-6 leading-relaxed">
                  Não encontrou seu pedido na loja parceira ou tem alguma dúvida sobre a oferta que clicou?
                </p>
                <Button 
                  onClick={() => window.open('https://wa.me/5581993414545', '_blank')}
                  className="w-full bg-white text-ml-blue hover:bg-gray-100 font-black rounded-xl h-12 uppercase tracking-widest text-[12px] shadow-lg shadow-black/5 active:scale-95 transition-all"
                >
                  Suporte Via WhatsApp
                </Button>
              </div>

              <div className="bg-ml-green/5 border border-ml-green/10 p-8 rounded-2xl space-y-4">
                <div className="w-12 h-12 bg-ml-green rounded-xl flex items-center justify-center text-white">
                  <Leaf size={24} />
                </div>
                <h4 className="font-bold text-gray-800 tracking-tight uppercase text-sm">Compromisso Eco</h4>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">
                  Mesmo em lojas externas, priorizamos curadoria de produtos com selos de sustentabilidade e logística otimizada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MyOrders;
