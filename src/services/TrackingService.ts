
import { supabase, isSupabaseConfigured } from '../lib/supabase';

export interface ClickEvent {
  productId: string | number;
  productName: string;
  platform: string;
  url: string;
}

/**
 * TrackingService: O coração da inteligência comercial da plataforma.
 * Responsável por medir a conversão e o interesse real (H1: Visibilidade).
 */
export const TrackingService = {
  /**
   * Rastreia um clique de afiliado e redireciona
   */
  async trackAndRedirect(event: ClickEvent) {
    console.log(`[Tracking] Redirecionando para ${event.platform}: ${event.productName}`);
    
    // Log local para feedback imediato no dev
    const clickData = {
      product_id: typeof event.productId === 'string' ? event.productId : null,
      platform: event.platform,
      metadata: {
        product_name: event.productName,
        timestamp: new Date().toISOString(),
        user_agent: navigator.userAgent
      }
    };

    if (isSupabaseConfigured) {
      try {
        await supabase!
          .from('affiliate_clicks')
          .insert([clickData]);
      } catch (err) {
        console.warn('[Tracking] Falha ao enviar clique para Supabase:', err);
      }
    }

    // Abre em nova aba
    window.open(event.url, '_blank', 'noopener,noreferrer');
  }
};
