
export interface Product {
  id: number;
  name: string;
  category: string;
  originalPrice: number;
  salePrice: number;
  discount: number;
  image: string;
  isTrending?: boolean;
  isStable?: boolean; 
  affiliateUrl?: string; 
  priceOptions?: {
    store: string;
    price: number;
    url: string;
  }[];
}

export type ProductCategory = "Tecnologia" | "Casa & Reforma" | "Kits de Lucro" | "Lifestyle & Performance";
