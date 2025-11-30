import React, { useEffect, useMemo, useState } from 'react'
import { Lock, Mail, Eye, EyeOff } from 'lucide-react'
import { z } from 'zod'
import { getSupabaseClient, supabaseLocal, supabaseSession } from '../auth/supabaseClient'
import { ensureCsrfToken, validateCsrf } from '../auth/csrf'
import { canAttempt, resetBucket } from '../auth/rateLimit'

const schema = z.object({
  email: z.string().email('Enter a valid email'),
  password: z.string().min(8, 'Minimum 8 characters').regex(/[A-Z]/, 'At least one uppercase').regex(/[a-z]/, 'At least one lowercase').regex(/[0-9]/, 'At least one digit'),
  remember: z.boolean(),
  csrf: z.string()
})

const providers = [{ key: 'google', label: 'Google' }, { key: 'azure', label: 'Microsoft' }, { key: 'github', label: 'GitHub' }]

export const SignIn: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [visible, setVisible] = useState(false)
  const [remember, setRemember] = useState(true)
  const [loading, setLoading] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<{ email?: string; password?: string }>({})
  const [formError, setFormError] = useState('')
  const csrf = useMemo(() => ensureCsrfToken(), [])

  useEffect(() => {
    const client = getSupabaseClient()
    client.auth.onAuthStateChange((_event, session) => {
      if (session) resetBucket()
    })
  }, [])

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormError('')
    setFieldErrors({})
    const parsed = schema.safeParse({ email, password, remember, csrf })
    if (!parsed.success) {
      const fe: Record<string, string> = {}
      parsed.error.issues.forEach(i => { fe[i.path[0] as string] = i.message })
      setFieldErrors(fe)
      return
    }
    if (!validateCsrf(csrf)) {
      setFormError('Security validation failed')
      return
    }
    const rl = canAttempt()
    if (!rl.allowed) {
      setFormError('Too many attempts. Please wait and try again')
      return
    }
    setLoading(true)
    try {
      localStorage.setItem('auth_storage_pref', remember ? 'local' : 'session')
      const client = remember ? supabaseLocal : supabaseSession
      const { data, error } = await client.auth.signInWithPassword({ email, password })
      if (error) {
        if (/Invalid login credentials/i.test(error.message)) setFormError('Invalid email or password')
        else if (/Over quota|rate/i.test(error.message)) setFormError('Login temporarily blocked')
        else setFormError('Unable to sign in. Check your network and try again')
        return
      }
      if (data?.session) resetBucket()
    } finally {
      setLoading(false)
    }
  }

  const onResetPassword = async () => {
    setFormError('')
    if (!email) { setFieldErrors({ email: 'Enter your email to reset password' }); return }
    try {
      const { error } = await supabaseLocal.auth.resetPasswordForEmail(email, { redirectTo: location.origin + '/reset' })
      if (error) setFormError('Unable to start reset. Try again later')
    } catch {
      setFormError('Unable to start reset. Try again later')
    }
  }

  const onOAuth = async (provider: string) => {
    setFormError('')
    try {
      const client = getSupabaseClient()
      const { error } = await client.auth.signInWithOAuth({ provider: provider as any, options: { redirectTo: location.origin } })
      if (error) setFormError('OAuth error. Try another method')
    } catch {
      setFormError('OAuth error. Try another method')
    }
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2 gap-8 items-center px-6 py-12">
      <div className="hidden lg:block">
        <div className="rounded-3xl p-8 bg-gradient-to-br from-indigo-50 to-pink-50 h-[520px] flex items-center justify-center">
          <div className="w-[420px] h-[420px] rounded-full blur-3xl bg-gradient-premium/40" />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="mb-6 text-xl font-display font-bold text-dark">ARTISAN</div>
        <div className="w-full max-w-sm bg-white/80 backdrop-blur rounded-2xl border border-gray-100 shadow-xl p-6">
          <div className="text-center mb-6">
            <div className="text-2xl font-display font-bold text-dark">Welcome Back!</div>
            <div className="text-sm text-gray-500">Sign in below</div>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-4">
            {providers.slice(0,2).map(p => (
              <button key={p.key} onClick={() => onOAuth(p.key)} className="border border-gray-200 rounded-lg h-10 text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 focus-ring">{p.label}</button>
            ))}
          </div>
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px flex-1 bg-gray-100" />
            <div className="text-xs text-gray-400">or</div>
            <div className="h-px flex-1 bg-gray-100" />
          </div>
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-500 mb-1">Email</label>
              <div className="relative">
                <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full h-11 rounded-lg border border-gray-200 px-3 pr-10 text-sm focus-ring" placeholder="Enter email address" aria-invalid={Boolean(fieldErrors.email)} />
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
              {fieldErrors.email && <div className="mt-1 text-xs text-red-500">{fieldErrors.email}</div>}
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 mb-1">Password</label>
              <div className="relative">
                <input type={visible?'text':'password'} value={password} onChange={e=>setPassword(e.target.value)} className="w-full h-11 rounded-lg border border-gray-200 px-3 pr-10 text-sm focus-ring" placeholder="Enter password" aria-invalid={Boolean(fieldErrors.password)} />
                <button type="button" onClick={()=>setVisible(v=>!v)} aria-label="Toggle password visibility" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1 text-gray-500 hover:bg-gray-100">
                  {visible? <EyeOff className="w-4 h-4"/> : <Eye className="w-4 h-4"/>}
                </button>
              </div>
              {fieldErrors.password && <div className="mt-1 text-xs text-red-500">{fieldErrors.password}</div>}
            </div>
            <input type="hidden" value={csrf} />
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" checked={remember} onChange={e=>setRemember(e.target.checked)} className="rounded" />
                Remember me
              </label>
              <button type="button" onClick={onResetPassword} className="text-sm text-indigo-600 hover:text-indigo-700">Forgot password</button>
            </div>
            <button type="submit" disabled={loading} className="w-full h-11 rounded-lg btn-gradient text-white font-bold flex items-center justify-center gap-2">
              {loading ? <Lock className="w-4 h-4 animate-spin-slow"/> : null}
              {loading? 'Signing in...' : 'Continue'}
            </button>
            {formError && <div className="text-center text-sm text-red-500">{formError}</div>}
          </form>
          <div className="grid grid-cols-1 gap-3 mt-4">
            <button onClick={()=>onOAuth('github')} className="border border-gray-200 rounded-lg h-10 text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 focus-ring">GitHub</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn

