import { getSupabaseClient } from '../auth/supabaseClient'

export type OnboardingRow = {
  id?: string
  user_id?: string
  payload: any
  created_at?: string
}

export const upsertOnboarding = async (row: OnboardingRow) => {
  const client = getSupabaseClient()
  return client.from('onboarding').upsert(row, { onConflict: 'user_id' })
}

export const listOnboarding = async () => {
  const client = getSupabaseClient()
  return client.from('onboarding').select('*').order('created_at', { ascending: false })
}

export const subscribeOnboarding = (handler: (payload: any) => void) => {
  const client = getSupabaseClient()
  return client.channel('realtime:onboarding')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'onboarding' }, handler)
    .subscribe()
}

