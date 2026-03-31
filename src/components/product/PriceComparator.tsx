import React from 'react';
import { ShoppingCart, ArrowRight, ExternalLink, ShieldCheck, Zap } from 'lucide-react';

interface PriceOption {
  store: string;
  price: number;
  url: string;
  isBest?: boolean;
}

interface PriceComparatorProps {
  options: PriceOption[];
}

const PriceComparator: React.FC<PriceComparatorProps> = ({ options }) => {
  const sortedOptions = [...options].sort((a, b) => a.price - b.price);
  const bestPrice = sortedOptions[0];

  return (
    <div className="bg-gray-50/80 rounded-xl p-4 border border-gray-100 space-y-3">
      <div className="flex items-center justify-between mb-1">
        <h5 className="text-[11px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
          <Zap size={12} className="text-ml-yellow fill-ml-yellow" />
          Comparativo Real
        </h5>
        <div className="flex items-center gap-1 bg-ml-green/10 px-1.5 py-0.5 rounded text-[9px] font-bold text-ml-green">
          <ShieldCheck size={10} />
          Preço Validado
        </div>
      </div>

      <div className="space-y-2">
        {sortedOptions.map((option, idx) => (
          <a
            key={idx}
            href={option.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-between p-2.5 rounded-lg border transition-all group ${
              option.price === bestPrice.price
                ? 'bg-white border-ml-green shadow-sm ring-1 ring-ml-green/10'
                : 'bg-white/50 border-gray-100 hover:border-ml-blue/30'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-black group-hover:bg-ml-blue/10 group-hover:text-ml-blue transition-colors">
                {option.store.charAt(0)}
              </div>
              <div>
                <p className="text-[12px] font-bold text-gray-800">{option.store}</p>
                {option.price === bestPrice.price && (
                  <span className="text-[9px] font-black text-ml-green uppercase tracking-tighter">Melhor Escolha</span>
                )}
              </div>
            </div>
            <div className="text-right">
              <p className={`text-[14px] font-black ${option.price === bestPrice.price ? 'text-ml-green' : 'text-gray-900'}`}>
                R$ {option.price.toFixed(2)}
              </p>
              <ArrowRight size={12} className={`ml-auto mt-1 transition-transform group-hover:translate-x-1 ${option.price === bestPrice.price ? 'text-ml-green' : 'text-gray-300'}`} />
            </div>
          </a>
        ))}
      </div>
      
      <p className="text-[10px] text-center text-gray-400 font-medium">
        Preços atualizados há 4 minutos via Multideal API.
      </p>
    </div>
  );
};

export default PriceComparator;
