import { getSupabaseClient, supabaseLocal, supabaseSession } from '../auth/supabaseClient'

export const signUp = async (email: string, password: string) => {
  const client = getSupabaseClient()
  return client.auth.signUp({ email, password })
}

export const signInWithPassword = async (email: string, password: string, remember = true) => {
  localStorage.setItem('auth_storage_pref', remember ? 'local' : 'session')
  const client = remember ? supabaseLocal : supabaseSession
  return client.auth.signInWithPassword({ email, password })
}

export const signInWithMagicLink = async (email: string, redirectTo?: string) => {
  const client = getSupabaseClient()
  return client.auth.signInWithOtp({ email, options: { emailRedirectTo: redirectTo || location.origin } })
}

export const signInWithOAuth = async (provider: 'google' | 'azure' | 'github', redirectTo?: string) => {
  const client = getSupabaseClient()
  return client.auth.signInWithOAuth({ provider: provider as any, options: { redirectTo: redirectTo || location.origin } })
}

export const resetPassword = async (email: string, redirectTo?: string) => {
  const client = getSupabaseClient()
  return client.auth.resetPasswordForEmail(email, { redirectTo: redirectTo || (location.origin + '/reset') })
}

export const signOut = async () => {
  const client = getSupabaseClient()
  return client.auth.signOut()
}

export const getSession = async () => {
  const client = getSupabaseClient()
  return client.auth.getSession()
}

export const onAuthState = (cb: (event: string, session: any) => void) => {
  const client = getSupabaseClient()
  return client.auth.onAuthStateChange(cb)
}

