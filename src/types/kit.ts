
import { Product } from './product';

export interface KitProduct extends Product {
  shopeeUrl?: string;
  amazonUrl?: string;
}

export interface Kit {
  id: number;
  name: string;
  description: string;
  image: string;
  bundleItems: {
    name: string;
    price: number;
    affiliateUrl: string;
    platform?: "Amazon" | "Shopee" | "MercadoLivre";
  }[];
  totalPrice: number;
  savings: number;
  category: "Empreendedorismo" | "Tech" | "Reforma" | "Design" | "Logística";
  roiData?: {
    investmentValue: number;
    unitSalePrice: number;
    unitCost: number;
    salesToBreakeven: number;
  };
}
