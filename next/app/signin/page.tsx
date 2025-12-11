"use client"
import React, { useMemo, useState } from 'react'
import { LoginHero } from '../../components/login-hero'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Card } from '../../components/ui/card'
import { getSupabaseClient, supabaseLocal, supabaseSession } from '../../auth/supabaseClient'
import { ensureCsrfToken, validateCsrf } from '../../auth/csrf'
import { canAttempt, resetBucket } from '../../auth/rateLimit'

export default function Page() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [notice, setNotice] = useState('')
  const [error, setError] = useState('')
  const csrf = useMemo(() => ensureCsrfToken(), [])
  const onOAuth = async (provider: string) => {
    setError('')
    try {
      const client = getSupabaseClient()
      const { error: err } = await client.auth.signInWithOAuth({ provider: provider as any, options: { redirectTo: location.origin } })
      if (err) setError('OAuth error. Try another method')
    } catch {
      setError('OAuth error. Try another method')
    }
  }
  const onContinue = async () => {
    setError('')
    setNotice('')
    const parsed = { email, csrf }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError('Enter a valid email'); return }
    if (!validateCsrf(csrf)) { setError('Security validation failed'); return }
    const rl = canAttempt()
    if (!rl.allowed) { setError('Too many attempts. Please wait and try again'); return }
    setLoading(true)
    try {
      localStorage.setItem('auth_storage_pref', 'local')
      const client = supabaseLocal
      const { error: err } = await client.auth.signInWithOtp({ email, options: { emailRedirectTo: location.origin } })
      if (err) { setError('Unable to send magic link. Try another method'); return }
      resetBucket()
      setNotice('Check your inbox for the magic link')
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="min-h-screen grid lg:grid-cols-2 gap-8 items-stretch px-6 py-12 bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="hidden lg:block relative rounded-[24px] overflow-hidden">
        <LoginHero />
      </div>
      <div className="w-full flex items-center justify-center">
        <Card className="w-full max-w-md p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#977DFF] to-[#0600AB] shadow-lg">
                <span className="w-4 h-4 rounded-full bg-white" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Fraunces, serif' }}>Amplify</span>
            </div>
            <div className="font-display font-bold text-3xl text-gray-900 mb-1" style={{ fontFamily: 'Fraunces, serif' }}>Welcome Back!</div>
            <div className="text-gray-500">Sign up or log in by entering your email below</div>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-6">
            <Button variant="outline" onClick={() => onOAuth('google')}>Google</Button>
            <Button variant="outline" onClick={() => onOAuth('azure')}>Microsoft</Button>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400 font-medium mb-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span>or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="space-y-2 mb-6">
            <label className="block text-sm font-semibold text-gray-700">Email</label>
            <Input aria-label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@company.com" />
          </div>
          <input type="hidden" value={csrf} />
          <Button variant="gradient" className="w-full py-3" onClick={onContinue} disabled={loading}>{loading ? 'Sending…' : 'Continue'}</Button>
          {error && <div className="text-center text-sm text-red-500 mt-4">{error}</div>}
          {notice && <div className="text-center text-sm text-green-600 mt-2">{notice}</div>}
          <div className="text-center text-sm text-gray-600 mt-6">Don’t have an account? <a href="#" className="text-indigo-600 font-semibold">Sign Up</a></div>
        </Card>
      </div>
    </div>
  )
}
