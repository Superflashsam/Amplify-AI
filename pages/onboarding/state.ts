import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

export type OnboardingBrand = {
  brandName: string
  website: string
  industry: string
  description: string
  usp: string
}

export type OnboardingTone = {
  professional: number
  serious: number
  bold: number
  energetic: number
  audienceText: string
  keywords: string[]
  audienceType: string[]
  voiceGuideFile?: string
}

export type OnboardingGoals = {
  selectedGoals: string[]
  horizon: '30' | '90' | '180' | null
}

export type OnboardingState = {
  brand: OnboardingBrand
  tone: OnboardingTone
  goals: OnboardingGoals
}

const DEFAULT_STATE: OnboardingState = {
  brand: { brandName: '', website: '', industry: '', description: '', usp: '' },
  tone: { professional: 50, serious: 50, bold: 50, energetic: 50, audienceText: '', keywords: [], audienceType: [] },
  goals: { selectedGoals: [], horizon: null }
}

const KEY = 'onboarding_state_v1'

const Ctx = createContext<{ state: OnboardingState; setState: React.Dispatch<React.SetStateAction<OnboardingState>> }>({ state: DEFAULT_STATE, setState: () => {} })

export const OnboardingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<OnboardingState>(() => {
    try { const s = localStorage.getItem(KEY); return s ? JSON.parse(s) : DEFAULT_STATE } catch { return DEFAULT_STATE }
  })
  useEffect(() => { try { localStorage.setItem(KEY, JSON.stringify(state)) } catch {} }, [state])
  const value = useMemo(() => ({ state, setState }), [state])
  return React.createElement(Ctx.Provider, { value }, children)
}

export const useOnboarding = () => useContext(Ctx)

export const computeBrandDNA = (s: OnboardingState) => {
  const voiceSummary = `Tone balance — Professional:${s.tone.professional}% • Serious:${s.tone.serious}% • Bold:${s.tone.bold}% • Energetic:${s.tone.energetic}%.`;
  const personaSnapshot = `Audience: ${s.tone.audienceText || '—'}. Keywords: ${s.tone.keywords.join(', ') || '—'}. Types: ${s.tone.audienceType.join(', ') || '—'}.`;
  const marketingFoundation = `USP: ${s.brand.usp || '—'}. Industry: ${s.brand.industry || '—'}. Goals: ${s.goals.selectedGoals.join(', ') || '—'} within ${s.goals.horizon ? s.goals.horizon + ' days' : '—'}.`;
  return { voiceSummary, personaSnapshot, marketingFoundation }
}

export const saveToSupabaseIfEnabled = async (s: OnboardingState) => {
  try {
    const enabled = localStorage.getItem('onboarding_supabase_enabled') === 'true'
    if (!enabled) return
    const { getSupabaseClient } = await import('../../auth/supabaseClient')
    const client = getSupabaseClient()
    await client.from('onboarding').insert({ payload: s, created_at: new Date().toISOString() })
  } catch {}
}
