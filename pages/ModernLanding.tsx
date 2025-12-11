import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Sparkles, Lock, Mail, Eye, EyeOff } from 'lucide-react'
import { LandingAccordion } from '../components/LandingAccordion'
import { BrandVoiceVisual } from '../components/BrandVoiceVisual'
import { signInWithPassword, signUp as supaSignUp } from '../services/supabaseAuth'

export const ModernLanding: React.FC = () => {
  const nav = useNavigate()
  const [mode, setMode] = useState<'signin' | 'signup'>('signin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      if (mode === 'signin') {
        const { error } = await signInWithPassword(email, password)
        if (error) throw error
        nav('/')
      } else {
        if (password.length < 8) throw new Error('Password must be at least 8 characters')
        const { error } = await supaSignUp(email, password)
        if (error) throw error
        await signInWithPassword(email, password)
        nav('/workspace-setup')
      }
    } catch (e: any) {
      setError(e.message || 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB] font-sans">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100 h-16 flex items-center justify-between px-6 lg:px-12">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-indigo-600 flex items-center justify-center shadow-lg shadow-primary/25">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="font-display font-bold text-xl text-gray-900">Amplify.ai</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 hidden sm:block">Pricing</a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 hidden sm:block">Docs</a>
          <button onClick={() => setMode('signin')} className="text-sm font-bold text-gray-900 hover:text-primary">Sign in</button>
        </div>
      </nav>

      <main className="pt-24 pb-20 px-6 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="flex flex-col gap-12">
            <div className="space-y-6">
              <h1 className="font-display font-bold text-4xl lg:text-5xl text-gray-900 leading-[1.1]">
                Why modern marketing teams choose Amplify
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Give your team the freedom to create on-brand campaigns faster. Automate the busywork and focus on what matters: strategy and creativity.
              </p>
            </div>
            
            <div className="bg-white rounded-[24px] p-6 shadow-xl shadow-gray-200/50 border border-gray-100">
              <div className="flex gap-1 bg-gray-100 p-1 rounded-xl mb-6">
                <button onClick={() => setMode('signin')} className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${mode === 'signin' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>Sign in</button>
                <button onClick={() => setMode('signup')} className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${mode === 'signup' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>Create account</button>
              </div>
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wider">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input required type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-10 py-3 text-sm font-medium focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="you@company.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wider">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input required type={visible ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-10 py-3 text-sm font-medium focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="••••••••" />
                    <button type="button" onClick={() => setVisible(!visible)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                      {visible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                <button disabled={loading} className="w-full btn-gradient text-white font-bold py-3.5 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all flex items-center justify-center">
                  {loading ? (mode === 'signin' ? 'Signing in...' : 'Creating account...') : (mode === 'signin' ? 'Sign in to Amplify' : 'Create your account')}
                </button>
                {error && <div className="text-sm text-red-500 text-center font-medium">{error}</div>}
                <div className="text-center text-xs font-medium text-gray-400 pt-2">
                  {mode === 'signup' && "First time here? You’ll create your workspace next."}
                </div>
              </form>
            </div>

            <LandingAccordion />
          </div>

          <div className="sticky top-32">
            <BrandVoiceVisual />
          </div>
        </div>
      </main>
    </div>
  )
}
