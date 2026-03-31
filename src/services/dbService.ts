
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { Product } from '@/types';

/**
 * dbService centraliza as chamadas de dados.
 * Ele decide dinamicamente se usa o Supabase REAL ou os dados MOCK.
 * Isso economiza requisições no plano FREE do Supabase durante o desenvolvimento.
 */
export const dbService = {
  /**
   * Busca produtos de forma híbrida
   */
  async getProducts(): Promise<Product[]> {
    if (!isSupabaseConfigured) {
      console.log('[DBService] Usando dados MOCK v13 (Affiliate Engine Active)');
      // Simular delay de banco
      await new Promise(r => setTimeout(r, 400));
      return (await import('../data/products')).products;
    }

    try {
      console.log('[DBService] Consultando Supabase (Affiliate Mode)...');
      const { data, error } = await supabase!
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      // Mapeamento semântico se necessário
      return (data as (Record<string, unknown>)[]).map((p) => ({
        ...p,
        affiliateUrl: p.affiliate_url || p.affiliateUrl,
      })) as Product[];
    } catch (err) {
      console.error('[DBService] Erro ao consultar Supabase, usando MOCK fallback:', err);
      return (await import('../data/products')).products;
    }
  },

  /**
   * Salva um lead/newsletter com segurança
   */
  async subscribeNewsletter(email: string) {
    if (!isSupabaseConfigured) {
      console.log('[DBService] Mock Subscribe:', email);
      return { success: true };
    }

    const { error } = await supabase!
      .from('newsletter')
      .insert({ email });

    if (error) throw error;
    return { success: true };
  }
};
