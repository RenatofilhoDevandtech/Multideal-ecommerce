
import React, { useMemo, useCallback } from 'react';
import { ShoppingCart, Leaf, Globe, Zap, Heart, ShieldCheck, ExternalLink, TrendingUp, Calculator, Package, BarChart2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import ROICalculator from './ROICalculator';
import BundleInteligente from './BundleInteligente';
import PriceComparator from './PriceComparator';
import { useRecentlyViewed } from '@/hooks/useRecentlyViewed';

import { TrackingService } from '@/services/TrackingService';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  affiliateUrl?: string;
  ecoImpact?: {
    co2Saved: number; // in grams
    origin: string; // "Local", "Regional", "Global"
    efficiency: "A" | "B" | "C";
  };
  roiData?: {
    investmentValue: number;
    unitSalePrice: number;
    unitCost: number;
    salesToBreakeven: number;
  };
  bundleItems?: {
    name: string;
    price: number;
    affiliateUrl: string;
  }[];
  priceOptions?: {
    store: string;
    price: number;
    url: string;
  }[];
  isTrending?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = React.memo(({ id, name, price, image, category, affiliateUrl, ecoImpact, roiData, bundleItems, priceOptions, isTrending }) => {
  const { addToCart } = useCart();
  const { trackView } = useRecentlyViewed();
  const [isLiked, setIsLiked] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState<'none' | 'roi' | 'bundle' | 'compare'>('none');

  // Track view only once on mount per product id
  React.useEffect(() => {
    trackView({ id: Number(id), name, category, originalPrice: price * 1.2, salePrice: price, discount: 20, image });
  }, [id, name, category, price, image, trackView]);

  const handleAction = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Se tiver link de afiliado, rastreia e redireciona (Affiliate-First)
    if (affiliateUrl) {
      TrackingService.trackAndRedirect({
        productId: id,
        productName: name,
        platform: affiliateUrl.includes('shopee') ? 'Shopee' : affiliateUrl.includes('amazon') ? 'Amazon' : 'Marketplace',
        url: affiliateUrl
      });
      return;
    }

    // Fallback para o carrinho local
    addToCart({ id: Number(id), name, price, image });
    toast.success(`${name}`, {
      description: "Adicionado ao seu cockpit de negócios.",
      className: "bg-ml-blue text-white border-none",
    });
  }, [id, name, price, image, affiliateUrl, addToCart]);

  const handleToggleLike = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(prev => !prev);
  }, []);

  const toggleTab = useCallback((tab: 'roi' | 'bundle' | 'compare') => (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveTab(prev => prev === tab ? 'none' : tab);
  }, []);

  const formattedPrice = useMemo(() => price.toLocaleString('pt-BR', { minimumFractionDigits: 2 }), [price]);
  const originalPrice = useMemo(() => (price * 1.2).toLocaleString('pt-BR', { minimumFractionDigits: 2 }), [price]);
  const installmentPrice = useMemo(() => (price / 10).toFixed(2).replace('.', ','), [price]);

  return (
    <motion.article 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileTap={{ scale: 0.98 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group bg-white rounded-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full relative cursor-pointer sm:rounded-md"
      itemScope itemType="https://schema.org/Product"
    >
      {/* Schema Meta */}
      <meta itemProp="name" content={name} />
      <meta itemProp="image" content={image} />
      <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
        <meta itemProp="price" content={price.toString()} />
        <meta itemProp="priceCurrency" content="BRL" />
      </div>

      {/* Favorite Button */}
      <button 
        onClick={handleToggleLike}
        className="absolute top-2 right-2 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-50 text-gray-300 hover:text-red-500 transition-colors shadow-sm"
        aria-label="Curtir produto"
      >
        <Heart size={18} fill={isLiked ? "currentColor" : "none"} className={isLiked ? "text-red-500" : ""} />
      </button>

      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-white flex items-center justify-center p-4">
        <img 
          src={image} 
          alt={name} 
          itemProp="image"
          className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Divider */}
      <div className="mx-4 border-t border-gray-100" />

      {/* Content */}
      <div className="p-3 sm:p-4 flex flex-col flex-1 relative">
        {/* Quality Seal floating over content - Refined */}
        <div className="absolute -top-3 left-4 bg-white border border-ml-blue/10 rounded-full px-2.5 py-1 flex items-center gap-1 shadow-sm z-10 sm:py-0.5">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ml-blue opacity-75"></span>
            <ShieldCheck size={10} className="relative text-ml-blue" />
          </div>
          <span className="text-[9px] font-black text-gray-800 uppercase tracking-tight">Auditado Scout</span>
        </div>

        <div className="flex-1 mt-1">
          {/* Scarcity Badge */}
          {isTrending && (
            <div className="mb-1.5 flex items-center gap-2">
              <span className="bg-red-50 text-red-600 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-tight border border-red-100">
                Alta Viabilidade
              </span>
              <div className="flex items-center gap-1 bg-ml-blue/5 px-1.5 py-0.5 rounded text-[9px] font-bold text-ml-blue">
                <BarChart2 size={10} />
                Auditado pela API
              </div>
            </div>
          )}

          {/* Business Tools Navigation */}
          {(roiData || bundleItems || priceOptions) && (
            <div className="mb-3 space-y-2">
              <div className="grid grid-cols-3 gap-1.5">
                {roiData && (
                  <button 
                    onClick={toggleTab('roi')}
                    className={`flex items-center justify-center gap-1 py-1.5 px-1 rounded-lg border transition-all text-[9px] font-black uppercase tracking-tighter ${
                      activeTab === 'roi' 
                        ? 'bg-ml-blue text-white border-ml-blue shadow-md' 
                        : 'bg-ml-blue/5 text-ml-blue border-ml-blue/10 hover:bg-ml-blue/10'
                    }`}
                  >
                    <Calculator size={10} />
                    ROI
                  </button>
                )}
                {bundleItems && (
                  <button 
                    onClick={toggleTab('bundle')}
                    className={`flex items-center justify-center gap-1 py-1.5 px-1 rounded-lg border transition-all text-[9px] font-black uppercase tracking-tighter ${
                      activeTab === 'bundle' 
                        ? 'bg-ml-green text-white border-ml-green shadow-md' 
                        : 'bg-ml-green/5 text-ml-green border-ml-green/10 hover:bg-ml-green/10'
                    }`}
                  >
                    <Package size={10} />
                    Kits
                  </button>
                )}
                {priceOptions && (
                  <button 
                    onClick={toggleTab('compare')}
                    className={`flex items-center justify-center gap-1 py-1.5 px-1 rounded-lg border transition-all text-[9px] font-black uppercase tracking-tighter ${
                      activeTab === 'compare' 
                        ? 'bg-ml-yellow text-gray-800 border-ml-yellow shadow-md' 
                        : 'bg-ml-yellow/10 text-gray-800 border-ml-yellow/20 hover:bg-ml-yellow/20'
                    }`}
                  >
                    <Zap size={10} />
                    Preços
                  </button>
                )}
              </div>

              <AnimatePresence mode="wait">
                {activeTab !== 'none' && (
                  <motion.div
                    key={activeTab}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="mt-2 pt-2 border-t border-gray-100">
                      {activeTab === 'roi' && roiData && (
                        <ROICalculator 
                          investmentValue={roiData.investmentValue}
                          initialUnitSalePrice={roiData.unitSalePrice}
                          initialUnitCost={roiData.unitCost}
                        />
                      )}
                      {activeTab === 'bundle' && bundleItems && (
                        <BundleInteligente 
                          items={bundleItems}
                          bundleName={name}
                        />
                      )}
                      {activeTab === 'compare' && priceOptions && (
                        <PriceComparator options={priceOptions} />
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* Prices */}
          <div className="mb-2">
            <p className="text-[11px] text-gray-400 line-through">
              R$ {originalPrice}
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-[20px] sm:text-[22px] font-medium text-gray-900 leading-none">
                R$ {formattedPrice}
              </span>
              <span className="text-[12px] sm:text-[13px] text-ml-green font-bold text-nowrap">20% OFF</span>
            </div>
            <p className="text-[12px] sm:text-[13px] text-gray-800 mt-1">10x R$ {installmentPrice} <span className="text-gray-500 font-normal">sem juros</span></p>
            
            {/* Market Speed/Heatmap (Memorable Innovation) */}
            <div className="mt-3 flex items-center gap-2">
              <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`flex-1 h-full rounded-full ${i < 4 ? 'bg-ml-blue/30' : 'bg-ml-blue'}`} />
                ))}
              </div>
              <span className="text-[9px] font-black text-ml-blue uppercase tracking-tighter">Oportunidade Quente</span>
            </div>
          </div>

          {/* Shipping & FULL Badge */}
          <div className="flex flex-col gap-0.5 mb-2">
            <div className="flex items-center gap-1.5">
               <span className="text-ml-green text-[12px] sm:text-[13px] font-bold">Frete grátis</span>
               <div className="flex items-center h-3.5 px-1 bg-ml-blue/5 rounded">
                  <span className="text-ml-blue text-[8px] font-black italic tracking-tighter">FULL</span>
                  <Zap size={8} className="text-ml-blue fill-ml-blue ml-0.5" />
               </div>
            </div>
            <p className="text-ml-green text-[11px] sm:text-[12px] font-bold">
               Chegará <span className="font-black italic">amanhã</span>
            </p>
          </div>

          {/* Title - Bottom of info */}
          <h3 className="text-[13px] sm:text-[14px] text-gray-600 leading-tight mb-3 font-normal line-clamp-2 min-h-[32px] sm:min-h-[36px]" itemProp="name">
            {name}
          </h3>
        </div>

        {/* Action Button */}
        <Button 
          onClick={handleAction}
          className="w-full bg-ml-blue hover:bg-ml-blue-dark text-white rounded-md py-1 h-9 sm:h-10 text-[13px] sm:text-[14px] font-bold tracking-tight transition-all active:scale-95"
        >
          {affiliateUrl ? 'Ver Oportunidade' : 'Comprar agora'}
        </Button>
      </div>
    </motion.article>
  );
});


ProductCard.displayName = 'ProductCard';


export default ProductCard;


