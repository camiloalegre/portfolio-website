import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let client = null;

if (supabaseUrl && supabaseAnonKey && supabaseUrl.startsWith('http') && !supabaseUrl.includes('your_supabase')) {
  try {
    client = createClient(supabaseUrl, supabaseAnonKey);
  } catch (error) {
    console.warn('Supabase initialization failed:', error);
  }
}

export async function submitContactForm(payload) {
  if (!client) return { stored: false };

  const { error } = await client.from('contacts').insert([payload]);
  if (error) throw error;

  return { stored: true };
}

export default client;
