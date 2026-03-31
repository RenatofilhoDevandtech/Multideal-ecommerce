
import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'product' | 'article';
}

/**
 * SEO Component: Controla as meta-tags para indexação profissional (H8: Minimalismo/Clareza).
 * Importante para portfólio de afiliado/recrutadores verem a preocupação com Growth.
 */
const SEO: React.FC<SEOProps> = ({ 
  title = "Multideal | Renda, Oportunidades & Vendas", 
  description = "A plataforma completa para quem busca renda extra, oportunidades de negócio e um portfólio de vendas de elite com produtos Shopee.",
  image = "/og-image.png",
  url = window.location.href,
  type = "website"
}) => {
  useEffect(() => {
    // Basic Title
    document.title = title.includes("Multideal") ? title : `${title} | Multideal`;

    // Metas
    const updateMeta = (name: string, content: string, property: boolean = false) => {
      let el = document.querySelector(property ? `meta[property="${name}"]` : `meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        if (property) el.setAttribute('property', name);
        else el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    updateMeta('description', description);
    
    // Open Graph
    updateMeta('og:title', title, true);
    updateMeta('og:description', description, true);
    updateMeta('og:image', image, true);
    updateMeta('og:url', url, true);
    updateMeta('og:type', type, true);

    // Twitter
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', image);

  }, [title, description, image, url, type]);

  return null; // Componente puramente funcional/side-effect
};

export default SEO;
