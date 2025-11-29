import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Missing Supabase credentials!')
  throw new Error('Missing Supabase environment variables')
}

// Simplified client - disable problematic features for local dev
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storageKey: 'supa-dsa-app-auth-v1', // unique key to avoid conflicts
    persistSession: true,
    autoRefreshToken: false, // disabled temporarily to prevent infinite hang/wipe loop
    detectSessionInUrl: true
  }
})

console.log('🔧 Supabase Client Initialized')