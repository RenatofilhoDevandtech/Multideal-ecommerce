import { Product } from '@/types';

// Interface baseada na resposta da Shopee Open Platform
export interface ShopeeProduct {
  item_id: number;
  item_name: string;
  item_sku: string;
  price: number;
  stock: number;
  image_url: string;
  category_name: string;
  rating_star: number;
}

/**
 * Serviço Mock para simular a integração com a Shopee API.
 * Em produção, este serviço faria chamadas para um backend Node.js
 * que possui as credenciais de API (Partner ID, Shop ID, etc).
 */
export const shopeeService = {
  /**
   * Busca produtos da Shopee (Modelo Híbrido)
   */
  async fetchEcoProducts(keyword: string = "sustentável"): Promise<Product[]> {
    console.log(`[ShopeeAPI] Buscando produtos com keyword: ${keyword}`);
    
    // Simulando delay de rede para realismo
    await new Promise(resolve => setTimeout(resolve, 800));

    const mockResults = [
      {
        id: 101,
        name: "Eco-Bag Shopee Original",
        category: "Acessórios",
        originalPrice: 45.00,
        salePrice: 29.90,
        discount: 33,
        image: "https://images.unsplash.com/photo-1597484662317-9bd76add240b?auto=format&fit=crop&q=80&w=400",
        isTrending: true,
      },
      {
        id: 102,
        name: "Lâmpada Solar Inteligente",
        category: "Casa",
        originalPrice: 159.00,
        salePrice: 129.00,
        discount: 18,
        image: "https://images.unsplash.com/photo-1513506485095-7e69fffaba92?auto=format&fit=crop&q=80&w=400",
        isTrending: true,
      }
    ];

    return mockResults.filter(p => 
      p.name.toLowerCase().includes(keyword.toLowerCase()) || 
      p.category.toLowerCase().includes(keyword.toLowerCase())
    );
  },

  /**
   * Gera um link de afiliado para ganhos passivos
   */
  generateAffiliateLink(itemId: number): string {
    return `https://shope.ee/m/afiliados-eco-shop-${itemId}`;
  }
};
