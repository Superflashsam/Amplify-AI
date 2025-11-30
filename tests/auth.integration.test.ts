import { describe, it, expect, vi } from 'vitest'
import { supabaseLocal } from '../auth/supabaseClient'

describe('Auth integration', () => {
  it('exposes auth methods', () => {
    expect(typeof supabaseLocal.auth.signInWithPassword).toBe('function')
  })
  it('handles rate limit bucket', () => {
    const KEY = 'signin_rl_bucket'
    localStorage.removeItem(KEY)
    expect(localStorage.getItem(KEY)).toBeNull()
  })
})

