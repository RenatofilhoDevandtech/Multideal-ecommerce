
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check for keys to avoid crashes in mock mode
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

/**
 * Cliente Supabase. 
 * Se as chaves não estiverem configuradas, o sistema funcionará em modo MOCK.
 */
export const supabase = isSupabaseConfigured 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

if (!isSupabaseConfigured) {
  console.warn('[Supabase] Chaves de API não encontradas. O projeto está rodando em MODO MOCK (Gratuito e Offline).');
}
