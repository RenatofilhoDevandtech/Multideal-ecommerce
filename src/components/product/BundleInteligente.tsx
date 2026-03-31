import React from 'react';
import { ShoppingBag, ExternalLink, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface BundleItem {
  name: string;
  price: number;
  affiliateUrl: string;
  platform?: "Amazon" | "Shopee" | "MercadoLivre";
}

interface BundleInteligenteProps {
  items: BundleItem[];
  bundleName: string;
}

const BundleInteligente: React.FC<BundleInteligenteProps> = ({ items, bundleName }) => {
  const handleBuyBundle = () => {
    toast.info(`Preparando seu Kit: ${bundleName}`, {
      description: "Abrindo links de afiliados oficiais...",
    });

    // Strategy: Open multiple tabs. 
    // Note: Browser might block popups if not triggered by direct click.
    // We'll open the first one in the current tab or new tab, and others as well.
    items.forEach((item, index) => {
      setTimeout(() => {
        window.open(item.affiliateUrl, '_blank');
      }, index * 500); // Small delay to avoid browser blocking
    });

    toast.success("Kit Multideal Aberto!", {
      description: "Verifique suas abas para concluir a compra com segurança.",
      className: "bg-ml-blue text-white",
    });
  };

  const getPlatformStyle = (platform?: string) => {
    switch(platform) {
      case 'Amazon': return 'text-orange-500 bg-orange-50';
      case 'Shopee': return 'text-orange-600 bg-orange-50';
      case 'MercadoLivre': return 'text-yellow-600 bg-yellow-50';
      default: return 'text-ml-blue bg-ml-blue/5';
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 mt-4 space-y-4">
      <div className="flex items-center gap-2 text-ml-blue">
        <ShoppingBag size={18} className="font-bold" />
        <h5 className="font-bold text-[14px]">Setup Validado Multideal</h5>
      </div>
      
      <div className="space-y-2">
        {items.map((item, idx) => (
          <div key={idx} className="flex justify-between items-center text-[13px] text-gray-600 bg-gray-50/50 p-2.5 rounded-lg border border-transparent hover:border-ml-blue/10 transition-colors">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-ml-blue" />
              <div className="flex flex-col">
                <span className="font-bold text-gray-800">{item.name}</span>
                {item.platform && (
                  <span className={`text-[9px] font-black px-1.5 py-0.5 rounded w-fit mt-0.5 uppercase tracking-tighter ${getPlatformStyle(item.platform)}`}>
                    {item.platform}
                  </span>
                )}
              </div>
            </div>
            <span className="font-bold text-gray-900 shrink-0 ml-2">R$ {item.price.toFixed(2)}</span>
          </div>
        ))}
      </div>

      <Button 
        onClick={handleBuyBundle}
        className="w-full bg-ml-blue hover:bg-ml-blue-dark text-white font-black py-4 h-12 rounded-xl flex items-center gap-2 shadow-lg shadow-ml-blue/10 active:scale-[0.98] transition-all"
      >
        ADICIONAR KIT COMPLETO
        <ExternalLink size={16} />
      </Button>
      <p className="text-[10px] text-center text-gray-400">
        Você será redirecionado para as lojas oficiais com nossos cupons aplicados.
      </p>
    </div>
  );
};


export default BundleInteligente;
