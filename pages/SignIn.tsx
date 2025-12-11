import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Sparkles, TrendingUp, Users, DollarSign, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { z } from 'zod'
import { getSupabaseClient, supabaseLocal, supabaseSession } from '../auth/supabaseClient'
import { signInWithMagicLink, signUp as supaSignUp, signInWithPassword, resetPassword as supaReset } from '../services/supabaseAuth'
import { ensureCsrfToken, validateCsrf } from '../auth/csrf'
import { canAttempt, resetBucket } from '../auth/rateLimit'

const schema = z.object({
  email: z.string().email('Enter a valid email'),
  remember: z.boolean(),
  csrf: z.string()
})

const providers = [{ key: 'google', label: 'Google' }, { key: 'azure', label: 'Microsoft' }]

export const SignIn: React.FC = () => {
  const [email, setEmail] = useState('')
  const [remember, setRemember] = useState(true)
  const [loading, setLoading] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<{ email?: string }>({})
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
    const parsed = schema.safeParse({ email, remember, csrf })
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
      const redirectTo = (import.meta as any)?.env?.VITE_SITE_URL || location.origin
      const { error } = await signInWithMagicLink(email, redirectTo)
      if (error) { setFormError(`Magic link failed: ${error.message || 'Try another method'}`); return }
      resetBucket()
    } finally { setLoading(false) }
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

  const onResetPassword = async () => {
    setFormError('')
    if (!email) { setFieldErrors({ email: 'Enter your email to reset password' }); return }
    try {
      const { error } = await supaReset(email, location.origin + '/reset')
      if (error) setFormError('Unable to start reset. Try again later')
    } catch { setFormError('Unable to start reset. Try again later') }
  }

  const onSignUpPassword = async (password: string) => {
    setFormError('')
    try {
      const { error } = await supaSignUp(email, password)
      if (error) { setFormError('Unable to sign up'); return }
      await signInWithPassword(email, password, remember)
      resetBucket()
    } catch { setFormError('Unable to sign up') }
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
        <form onSubmit={onSubmit} className="w-full max-w-md rounded-[24px] border border-gray-100 bg-white/80 backdrop-blur-xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#977DFF] to-[#0600AB] shadow-lg shadow-primary/25">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-dark">Amplify</span>
            </div>
            <h1 className="font-display font-bold text-3xl text-dark mb-1">Welcome Back!</h1>
            <p className="text-gray-500">Sign up or log in by entering your email below</p>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-6">
            {providers.map((p) => (
              <button key={p.key} type="button" onClick={() => onOAuth(p.key)} aria-label={`Sign in with ${p.label}`} className="flex items-center justify-center gap-2 rounded-[16px] border border-gray-200 py-3 hover:-translate-y-[1px] transition-all focus-ring">
                <span className="text-sm font-semibold text-gray-700">{p.label}</span>
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400 font-medium mb-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span>or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="space-y-2 mb-6">
            <label className="block text-sm font-semibold text-gray-700">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input aria-label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full rounded-[16px] border border-gray-200 bg-white pl-10 pr-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 hover:-translate-y-[1px] transition-all" placeholder="you@company.com" />
            </div>
            {fieldErrors.email && <div className="text-xs text-red-500">{fieldErrors.email}</div>}
          </div>
          <input type="hidden" value={csrf} />
          <button type="submit" disabled={loading} className="w-full btn-gradient rounded-[16px] py-3 font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
            <span className="btn-text-glow">Continue</span>
          </button>
          {formError && <div className="text-sm text-red-500 text-center mt-4">{formError}</div>}
          <div className="text-center text-sm text-gray-600 mt-6">
            Don’t have an account? <Link to="/signup" className="text-primary font-semibold">Sign Up</Link>
          </div>
          <div className="mt-6 text-center">
            <HeroPNGExporter />
          </div>
        </form>
      </div>
    </div>
  )
}

const HeroPNGExporter: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  useEffect(() => {
    const c = canvasRef.current
    if (!c) return
    const ctx = c.getContext('2d')
    if (!ctx) return
    ctx.clearRect(0,0,c.width,c.height)
    const g1 = ctx.createRadialGradient(400,400,50,400,400,500)
    g1.addColorStop(0,'rgba(92,59,255,0.35)')
    g1.addColorStop(1,'rgba(92,59,255,0)')
    ctx.fillStyle = g1
    ctx.beginPath()
    ctx.arc(400,400,500,0,Math.PI*2)
    ctx.fill()
    const g2 = ctx.createRadialGradient(1600,1600,50,1600,1600,600)
    g2.addColorStop(0,'rgba(165,124,255,0.3)')
    g2.addColorStop(1,'rgba(165,124,255,0)')
    ctx.fillStyle = g2
    ctx.beginPath()
    ctx.arc(1600,1600,600,0,Math.PI*2)
    ctx.fill()
    const drawCard = (x:number,y:number,w:number,h:number,title:string,value:string) => {
      ctx.save()
      ctx.shadowColor = 'rgba(0,0,0,0.08)'
      ctx.shadowBlur = 24
      ctx.shadowOffsetY = 8
      ctx.fillStyle = 'rgba(255,255,255,0.85)'
      roundRect(ctx,x,y,w,h,24,true,false)
      ctx.fillStyle = '#9AA0B0'
      ctx.font = '700 28px Inter'
      ctx.fillText(title,x+24,y+48)
      ctx.fillStyle = '#0B0E1A'
      ctx.font = '900 64px Fraunces'
      ctx.fillText(value,x+24,y+120)
      ctx.restore()
    }
    drawCard(260,260,540,220,'New Leads','25K+')
    drawCard(1160,260,540,220,'Revenue','$1.2M')
    drawCard(710,540,540,220,'Engagement','+38%')
    const drawAvatar = (x:number,y:number,r:number,color:string) => {
      ctx.save()
      ctx.shadowColor = 'rgba(0,0,0,0.08)'
      ctx.shadowBlur = 18
      ctx.fillStyle = color
      ctx.beginPath()
      ctx.arc(x,y,r,0,Math.PI*2)
      ctx.fill()
      ctx.strokeStyle = 'rgba(255,255,255,0.9)'
      ctx.lineWidth = 6
      ctx.stroke()
      ctx.restore()
    }
    drawAvatar(900,1100,56,'#977DFF')
    drawAvatar(980,1100,56,'#5C3BFF')
    drawAvatar(1060,1100,56,'#A57CFF')
    const particles = 60
    for (let i=0;i<particles;i++){
      const px = Math.random()*2000
      const py = Math.random()*2000
      const pr = Math.random()*3+1
      ctx.fillStyle = 'rgba(165,124,255,0.25)'
      ctx.beginPath()
      ctx.arc(px,py,pr,0,Math.PI*2)
      ctx.fill()
    }
  },[])
  const download = () => {
    const c = canvasRef.current
    if (!c) return
    const link = document.createElement('a')
    link.download = 'amplify-login-hero.png'
    link.href = c.toDataURL('image/png')
    link.click()
  }
  return (
    <div className="space-y-3">
      <canvas ref={canvasRef} width={2000} height={2000} className="hidden" />
      <button type="button" onClick={download} className="inline-flex items-center gap-2 text-xs px-3 py-2 rounded-[12px] border border-gray-200 hover:-translate-y-[1px] transition-all">
        <Sparkles className="w-4 h-4 text-primary" />
        <span>Download hero PNG (2000×2000)</span>
      </button>
    </div>
  )
}

/**
 * Draws a rounded rectangle path on the given canvas context and optionally fills and/or strokes it.
 *
 * The function reduces the corner radius if it exceeds half the rectangle's width or height so corners remain valid.
 *
 * @param ctx - Canvas 2D rendering context to draw on
 * @param x - X-coordinate of the rectangle's top-left corner
 * @param y - Y-coordinate of the rectangle's top-left corner
 * @param w - Width of the rectangle
 * @param h - Height of the rectangle
 * @param r - Desired corner radius; may be reduced to fit the rectangle
 * @param fill - If true, fills the rectangle using the context's current fillStyle
 * @param stroke - If true, strokes the rectangle using the context's current strokeStyle
 */
function roundRect(ctx:CanvasRenderingContext2D, x:number, y:number, w:number, h:number, r:number, fill:boolean, stroke:boolean){
  if (w<2*r) r=w/2
  if (h<2*r) r=h/2
  ctx.beginPath()
  ctx.moveTo(x+r,y)
  ctx.arcTo(x+w,y,x+w,y+h,r)
  ctx.arcTo(x+w,y+h,x,y+h,r)
  ctx.arcTo(x,y+h,x,y,r)
  ctx.arcTo(x,y,x+w,y,r)
  ctx.closePath()
  if (fill) ctx.fill()
  if (stroke) ctx.stroke()
}

export default SignIn