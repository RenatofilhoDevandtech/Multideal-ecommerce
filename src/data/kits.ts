import { Kit, KitProduct } from '@/types';

export const kitsData: Kit[] = [
  {
    id: 101,
    name: "Kit Estamparia 5.0 Pro",
    description: "Prensa Térmica 8 em 1 + Tintas Premium + Papel Sublimático. O setup validado para faturar R$ 3k+/mês.",
    image: "https://images.unsplash.com/photo-1621339016462-895740441d6e?auto=format&fit=crop&q=80&w=600",
    category: "Empreendedorismo",
    bundleItems: [
      {
        name: "Prensa Térmica 8 em 1 Pro",
        price: 1290,
        platform: "Shopee",
        affiliateUrl: "https://shopee.com.br/search?keyword=prensa+termica+8+em+1"
      },
      {
        name: "Papel Sublimático Premium (100fls)",
        price: 45,
        platform: "MercadoLivre",
        affiliateUrl: "https://www.mercadolivre.com.br/busca?keyword=papel+sublimatico+premium"
      },
      {
        name: "Kit Tintas Sublimáticas 4 Cores",
        price: 54,
        platform: "Shopee",
        affiliateUrl: "https://shopee.com.br/search?keyword=tintas+sublimaticas+kit"
      }
    ],
    totalPrice: 1389,
    savings: 231,
    roiData: {
      investmentValue: 1389,
      unitSalePrice: 45,
      unitCost: 12,
      salesToBreakeven: 42
    }
  },
  {
    id: 102,
    name: "Smart Office: Automação & Performance",
    description: "Hub Zigbee + Luzes RGB + Tomada Inteligente. O setup que economiza seu tempo e energia.",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=600",
    category: "Tech",
    bundleItems: [
      {
        name: "Hub Zigbee 3.0 Wireless",
        price: 249,
        platform: "Amazon",
        affiliateUrl: "https://amazon.com.br/s?k=hub+zigbee"
      },
      {
        name: "Fita LED RGB Wi-Fi (5m)",
        price: 129,
        platform: "Amazon",
        affiliateUrl: "https://amazon.com.br/s?k=fita+led+wifi+inteligente"
      }
    ],
    totalPrice: 378,
    savings: 45,
    roiData: {
      investmentValue: 378,
      unitSalePrice: 15,
      unitCost: 2,
      salesToBreakeven: 29
    }
  },
  {
    id: 103,
    name: "Kit Creator: Áudio & Vídeo Impecável",
    description: "Microfone Condensador + Ring Light + Tripé. Tudo o que você precisa para vídeos de alta conversão.",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9302bbc?auto=format&fit=crop&q=80&w=600",
    category: "Design",
    bundleItems: [
      {
        name: "Microfone Fifine K669B",
        price: 280,
        platform: "Shopee",
        affiliateUrl: "https://shopee.com.br/search?keyword=fifine+k669b"
      },
      {
        name: "Ring Light 10 Polegadas",
        price: 85,
        platform: "Amazon",
        affiliateUrl: "https://amazon.com.br/s?k=ring+light+10+polegadas"
      }
    ],
    totalPrice: 365,
    savings: 60,
    roiData: {
      investmentValue: 365,
      unitSalePrice: 50, // Ganho médio por job
      unitCost: 5,
      salesToBreakeven: 9
    }
  },
  {
    id: 104,
    name: "Kit Logística Express: Embalagem & Sell",
    description: "Balança Digital + Mini Seladora + Pack de Envelopes de Segurança. O essencial para quem vende no Mercado Livre e Shopee.",
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?auto=format&fit=crop&q=80&w=600",
    category: "Logística",
    bundleItems: [
      {
        name: "Balança Digital Ate 40kg",
        price: 89,
        platform: "Shopee",
        affiliateUrl: "https://shopee.com.br/search?keyword=balança+digital+40kg"
      },
      {
        name: "Mini Seladora de Saco Plástico",
        price: 35,
        platform: "MercadoLivre",
        affiliateUrl: "https://www.mercadolivre.com.br/busca?keyword=mini+seladora+plastico"
      }
    ],
    totalPrice: 124,
    savings: 30,
    roiData: {
      investmentValue: 124,
      unitSalePrice: 12, // Economia média por frete otimizado
      unitCost: 1,
      salesToBreakeven: 12
    }
  }
];


