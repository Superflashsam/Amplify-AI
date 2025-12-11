import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Sparkles, ChevronRight, ArrowLeft, Building2, Users, Target } from 'lucide-react'
import { getSupabaseClient } from '../auth/supabaseClient'

export const Onboarding: React.FC = () => {
  const nav = useNavigate()
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  
  // Step 1 State
  const [wsName, setWsName] = useState('')
  const [size, setSize] = useState('Just me')
  const [focus, setFocus] = useState<string[]>([])
  const [error, setError] = useState('')

  // Step 2 State
  const [plan, setPlan] = useState('starter')

  const handleStep1 = (e: React.FormEvent) => {
    e.preventDefault()
    if (!wsName.trim()) { setError('Please enter a workspace name'); return }
    setError('')
    setStep(2)
  }

  const handleFinish = async () => {
    setLoading(true)
    // Simulate API call / DB insert
    await new Promise(resolve => setTimeout(resolve, 1500))
    nav('/dashboard')
  }

  const toggleFocus = (tag: string) => {
    setFocus(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag])
  }

  const focusTags = ['B2B SaaS', 'D2C Ecommerce', 'Content Marketing', 'Paid Ads', 'Agencies']
  const sizes = ['Just me', '2–5 people', '6–15 people', '16–50 people', '50+ people']

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col relative overflow-hidden font-sans">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-[600px] h-[600px] rounded-full bg-purple-100/40 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-[600px] h-[600px] rounded-full bg-pink-100/40 blur-[120px] pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 px-6 py-6 flex justify-between items-center max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-indigo-600 flex items-center justify-center shadow-lg shadow-primary/25">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="font-display font-bold text-xl text-gray-900">Amplify.ai</span>
        </div>
        <div className="text-sm font-medium text-gray-500">Step {step} of 2</div>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 py-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="w-full max-w-[640px] bg-white/80 backdrop-blur-xl rounded-[32px] shadow-2xl shadow-purple-900/5 border border-white/60 p-8 md:p-10 overflow-hidden"
        >
          <AnimatePresence mode='wait'>
            {step === 1 ? (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-8 text-center md:text-left">
                  <h1 className="font-display font-bold text-3xl text-gray-900 mb-2">Create your workspace</h1>
                  <p className="text-gray-500 text-lg">Workspaces keep your brands, campaigns, and teammates organized.</p>
                </div>

                <form onSubmit={handleStep1} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-primary" /> Workspace Name
                    </label>
                    <input 
                      value={wsName}
                      onChange={e => setWsName(e.target.value)}
                      placeholder="e.g. LexiBee Marketing, Growth Team"
                      className={`w-full rounded-xl border ${error ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white'} px-4 py-3.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm`}
                    />
                    {error && <p className="text-sm text-red-500 font-medium">{error}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" /> Company Size <span className="text-gray-400 font-normal">(Optional)</span>
                    </label>
                    <div className="relative">
                      <select 
                        value={size} 
                        onChange={e => setSize(e.target.value)}
                        className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm cursor-pointer"
                      >
                        {sizes.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">▼</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                      <Target className="w-4 h-4 text-primary" /> Primary Focus <span className="text-gray-400 font-normal">(Optional)</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {focusTags.map(tag => (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => toggleFocus(tag)}
                          className={`px-4 py-2 rounded-full text-sm font-bold border transition-all ${focus.includes(tag) ? 'bg-purple-50 border-primary text-primary' : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'}`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button type="button" onClick={() => setStep(2)} className="text-sm font-semibold text-gray-500 hover:text-gray-700 transition-colors">Skip for now</button>
                    <button type="submit" className="btn-gradient text-white px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all flex items-center gap-2">
                      Continue <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-8 text-center md:text-left">
                  <button onClick={() => setStep(1)} className="text-sm font-bold text-gray-400 hover:text-gray-600 mb-4 flex items-center gap-1 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                  <h1 className="font-display font-bold text-3xl text-gray-900 mb-2">Pick a starting plan</h1>
                  <p className="text-gray-500 text-lg">You can upgrade anytime. We’ll help you choose based on your team size.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {/* Starter Plan */}
                  <button 
                    onClick={() => setPlan('starter')}
                    className={`relative text-left p-6 rounded-2xl border-2 transition-all duration-200 ${plan === 'starter' ? 'border-primary bg-purple-50/50 shadow-sm' : 'border-gray-100 bg-white hover:border-gray-200'}`}
                  >
                    {plan === 'starter' && (
                      <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center shadow-sm">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                    )}
                    <div className="inline-block px-2.5 py-1 rounded-md bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wider mb-3">Recommended</div>
                    <h3 className="font-display font-bold text-xl text-gray-900 mb-1">Starter</h3>
                    <div className="text-sm text-gray-500 font-medium mb-4">Free forever</div>
                    <ul className="space-y-2">
                      {['Up to 1 workspace', 'Limited AI generations', 'Basic scheduling'].map((feat, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-300" /> {feat}
                        </li>
                      ))}
                    </ul>
                  </button>

                  {/* Pro Plan (Locked) */}
                  <div className="relative text-left p-6 rounded-2xl border border-gray-100 bg-gray-50/50 opacity-70 cursor-not-allowed">
                    <div className="inline-block px-2.5 py-1 rounded-md bg-gray-200 text-gray-600 text-[10px] font-bold uppercase tracking-wider mb-3">Coming Soon</div>
                    <h3 className="font-display font-bold text-xl text-gray-900 mb-1">Pro</h3>
                    <div className="text-sm text-gray-500 font-medium mb-4">For growing teams</div>
                    <ul className="space-y-2">
                      {['Multiple workspaces', 'Advanced analytics', 'Team collaboration'].map((feat, i) => (
                        <li key={i} className="text-sm text-gray-500 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-300" /> {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-100">
                  <button 
                    onClick={handleFinish} 
                    disabled={loading}
                    className="w-full btn-gradient text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Sparkles className="w-5 h-5 animate-spin" /> Creating workspace...
                      </>
                    ) : (
                      <>Finish Setup <Sparkles className="w-5 h-5" /></>
                    )}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </main>
    </div>
  )
}
