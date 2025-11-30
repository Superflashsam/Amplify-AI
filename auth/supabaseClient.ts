import { createClient } from '@supabase/supabase-js'

type StorageLike = { getItem: (k: string) => string | null; setItem: (k: string, v: string) => void; removeItem: (k: string) => void }

const memory: Record<string, string> = {}
const memoryStorage: StorageLike = {
  getItem: k => (k in memory ? memory[k] : null),
  setItem: (k, v) => { memory[k] = v },
  removeItem: k => { delete memory[k] }
}

const url = import.meta.env.VITE_SUPABASE_URL as string
const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string

export const supabaseLocal = createClient(url, key, { auth: { storage: localStorage, autoRefreshToken: true, persistSession: true, detectSessionInUrl: true } })
export const supabaseSession = createClient(url, key, { auth: { storage: sessionStorage, autoRefreshToken: true, persistSession: true, detectSessionInUrl: true } })
export const supabaseMemory = createClient(url, key, { auth: { storage: memoryStorage, autoRefreshToken: true, persistSession: false, detectSessionInUrl: true } })

export const getSupabaseClient = () => {
  const pref = localStorage.getItem('auth_storage_pref')
  if (pref === 'local') return supabaseLocal
  if (pref === 'session') return supabaseSession
  return supabaseMemory
}

