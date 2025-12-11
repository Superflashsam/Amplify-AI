import { createClient } from '@supabase/supabase-js'

type StorageLike = { getItem: (k: string) => string | null; setItem: (k: string, v: string) => void; removeItem: (k: string) => void }

const memory: Record<string, string> = {}
const memoryStorage: StorageLike = {
  getItem: k => (k in memory ? memory[k] : null),
  setItem: (k, v) => { memory[k] = v },
  removeItem: k => { delete memory[k] }
}

let url = (typeof import.meta !== 'undefined' && (import.meta as any)?.env?.VITE_SUPABASE_URL) 
  || (typeof process !== 'undefined' && (process.env?.VITE_SUPABASE_URL || process.env?.NEXT_PUBLIC_SUPABASE_URL)) 
  || ''
let key = (typeof import.meta !== 'undefined' && (import.meta as any)?.env?.VITE_SUPABASE_ANON_KEY) 
  || (typeof process !== 'undefined' && (process.env?.VITE_SUPABASE_ANON_KEY || process.env?.NEXT_PUBLIC_SUPABASE_ANON_KEY)) 
  || ''

// Fallback key if env vars fail in some contexts; only safe for anon key
if (!key) {
  key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0amJkb3BhdW1tZGp6Z3hjcHpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ0OTA3MTcsImV4cCI6MjA4MDA2NjcxN30.QsjIc3WRgF8pnxzR9E7mJqjjRodPWTwRB9qNsBffVEE'
}

const deriveUrlFromKey = (k: string): string | null => {
  try {
    const parts = k.split('.')
    if (parts.length < 2) return null
    const base64 = parts[1].replace(/-/g, '+').replace(/_/g, '/')
    const json = JSON.parse(atob(base64))
    const ref = json?.ref
    if (typeof ref === 'string' && ref.length > 0) return `https://${ref}.supabase.co`
    return null
  } catch { return null }
}

if (!url) {
  const derived = key ? deriveUrlFromKey(key) : null
  url = derived || 'https://localhost'
}

export const supabaseLocal = createClient(url, key, { auth: { storage: localStorage, autoRefreshToken: true, persistSession: true, detectSessionInUrl: true } })
export const supabaseSession = createClient(url, key, { auth: { storage: sessionStorage, autoRefreshToken: true, persistSession: true, detectSessionInUrl: true } })
export const supabaseMemory = createClient(url, key, { auth: { storage: memoryStorage, autoRefreshToken: true, persistSession: false, detectSessionInUrl: true } })

export const getSupabaseClient = () => {
  const pref = localStorage.getItem('auth_storage_pref')
  if (pref === 'local') return supabaseLocal
  if (pref === 'session') return supabaseSession
  return supabaseMemory
}
