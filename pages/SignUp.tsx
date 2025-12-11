import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Mail, Sparkles, TrendingUp, Users, DollarSign, ArrowRight, Lock, Eye, EyeOff } from 'lucide-react'
import { motion } from 'framer-motion'
import { getSupabaseClient, supabaseLocal } from '../auth/supabaseClient'
import { signUp as supaSignUp, signInWithPassword } from '../services/supabaseAuth'

const providers = [{ key: 'google', label: 'Google' }, { key: 'azure', label: 'Microsoft' }]

export const SignUp: React.FC = () => {
  const nav = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const onSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!email || !password) { setError('Email and password required'); return }
    if (password.length < 8) { setError('Password must be at least 8 characters'); return }
    setLoading(true)
    try {
      const { error: err } = await supaSignUp(email, password)
      if (err) { setError(err.message); return }
      await signInWithPassword(email, password)
      nav('/workspace-setup')
    } catch { setError('Unable to sign up. Try again') } finally { setLoading(false) }
  }

  const onOAuth = async (provider: string) => {
    setError('')
    try {
      const client = getSupabaseClient()
      const { error } = await client.auth.signInWithOAuth({ provider: provider as any, options: { redirectTo: location.origin } })
      if (error) setError('OAuth error. Try another method')
    } catch { setError('OAuth error. Try another method') }
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2 gap-8 items-stretch px-6 py-12 bg-white">
      <div className="hidden lg:block relative rounded-[24px] overflow-hidden">
        <div className="absolute -top-24 -left-24 w-[600px] h-[600px] rounded-full bg-[#5C3BFF]/20 blur-[120px]" />
        <div className="absolute -bottom-24 -right-24 w-[700px] h-[700px] rounded-full bg-[#A57CFF]/20 blur-[120px]" />
        <div className="relative z-10 h-full p-8 flex items-center justify-center">
          <div className="grid grid-cols-2 gap-6 w-full max-w-2xl">
            <motion.div initial={{ y: 12 }} whileHover={{ y: -6 }} className="rounded-[24px] bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-gray-400">New Leads</span>
                <TrendingUp className="w-4 h-4 text-green-500" />
              </div>
              <div className="font-display text-3xl font-bold text-slate-900">25K+</div>
              <div className="text-xs text-gray-500">Last 30 days</div>
            </motion.div>
            <motion.div initial={{ y: 12 }} whileHover={{ y: -6 }} className="rounded-[24px] bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-gray-400">Revenue</span>
                <DollarSign className="w-4 h-4 text-indigo-500" />
              </div>
              <div className="font-display text-3xl font-bold text-slate-900">$1.2M</div>
              <div className="text-xs text-gray-500">QTD</div>
            </motion.div>
            <motion.div initial={{ y: 12 }} whileHover={{ y: -6 }} className="rounded-[24px] bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-gray-400">Engagement</span>
                <ArrowRight className="w-4 h-4 text-purple-500" />
              </div>
              <div className="font-display text-3xl font-bold text-slate-900">+38%</div>
              <div className="text-xs text-gray-500">Lift</div>
            </motion.div>
            <motion.div initial={{ y: 12 }} whileHover={{ y: -6 }} className="rounded-[24px] bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-4 h-4 text-blue-500" />
                <span className="text-xs font-bold text-gray-400">Personas</span>
              </div>
              <div className="flex -space-x-2">
                {["Ava","Liam","Noah","Mia"].map((n,i)=> (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-tr from-primary to-secondary" />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <form onSubmit={onSignUp} className="w-full max-w-md rounded-[24px] border border-gray-100 bg-white/80 backdrop-blur-xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#977DFF] to-[#0600AB] shadow-lg shadow-primary/25">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-dark">Amplify</span>
            </div>
            <h1 className="font-display font-bold text-3xl text-dark mb-1">Create Account</h1>
            <p className="text-gray-500">Join Amplify and start growing your brand</p>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-6">
            {providers.map((p) => (
              <button key={p.key} type="button" onClick={() => onOAuth(p.key)} aria-label={`Sign up with ${p.label}`} className="flex items-center justify-center gap-2 rounded-[16px] border border-gray-200 py-3 hover:-translate-y-[1px] transition-all focus-ring">
                <span className="text-sm font-semibold text-gray-700">{p.label}</span>
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400 font-medium mb-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span>or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input aria-label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full rounded-[16px] border border-gray-200 bg-white pl-10 pr-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 hover:-translate-y-[1px] transition-all" placeholder="you@company.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input aria-label="Password" type={visible ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} className="w-full rounded-[16px] border border-gray-200 bg-white pl-10 pr-10 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 hover:-translate-y-[1px] transition-all" placeholder="Create password" />
                <button type="button" onClick={() => setVisible(!visible)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {visible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
          <button type="submit" disabled={loading} className="w-full btn-gradient rounded-[16px] py-3 font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
            <span className="btn-text-glow">{loading ? 'Creating Account…' : 'Sign Up'}</span>
          </button>
          {error && <div className="text-sm text-red-500 text-center mt-4">{error}</div>}
          <div className="text-center text-sm text-gray-600 mt-6">
            Already have an account? <Link to="/signin" className="text-primary font-semibold">Sign In</Link>
          </div>
        </form>
      </div>
    </div>
  )
}
