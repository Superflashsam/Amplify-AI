import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useOnboarding } from './state'
import { z } from 'zod'

const schema = z.object({
  brandName: z.string().min(2, 'Enter brand name'),
  website: z.string().min(2).optional().or(z.literal('')).transform(v=>v||''),
  industry: z.string().min(2, 'Select industry'),
  description: z.string().min(10, 'Add a short description'),
  usp: z.string().min(10, 'Add a 1–2 sentence USP')
})

const INDUSTRIES = ['SaaS','E‑commerce','Consumer','B2B','Fintech','Health','Education','Agency','Creator']

export const BrandStep: React.FC = () => {
  const nav = useNavigate()
  const { state, setState } = useOnboarding()
  const [form, setForm] = useState(state.brand)
  const [error, setError] = useState<Record<string,string>>({})

  const set = (k: keyof typeof form, v: string) => setForm({ ...form, [k]: v })
  const onContinue = () => {
    setError({})
    const parsed = schema.safeParse(form)
    if (!parsed.success) { const e: Record<string,string> = {}; parsed.error.issues.forEach(i=>{ e[String(i.path[0])] = i.message }); setError(e); return }
    setState(s => ({ ...s, brand: form }))
    nav('/onboarding/tone')
  }

  return (
    <>
      <div className="hidden lg:block">
        <div className="rounded-[24px] overflow-hidden border border-gray-100 bg-white/80 backdrop-blur-xl h-[520px] flex items-center justify-center">
          <img loading="lazy" alt="Brand onboarding illustration" className="w-full h-full object-cover" src="/assets/onboarding/brand-16x9.png" onError={(e:any)=>{e.currentTarget.style.display='none'}} />
          <div className="w-[420px] h-[420px] rounded-full blur-3xl bg-gradient-to-br from-indigo-200 to-purple-200" />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="font-display font-bold text-3xl text-dark">Let’s Build Your Brand Identity</h2>
          <p className="text-gray-500">This helps Amplify understand your business and create content tailored to your offer.</p>
        </div>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-semibold text-gray-700">Brand name</label>
            <input value={form.brandName} onChange={e=>set('brandName', e.target.value)} className="w-full rounded-2xl border border-gray-200 px-3 py-3" />
            {error.brandName && <div className="text-xs text-red-500">{error.brandName}</div>}
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-700">Website / Social handle</label>
            <input value={form.website} onChange={e=>set('website', e.target.value)} className="w-full rounded-2xl border border-gray-200 px-3 py-3" />
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-700">Industry / Category</label>
            <input list="industries" value={form.industry} onChange={e=>set('industry', e.target.value)} className="w-full rounded-2xl border border-gray-200 px-3 py-3" />
            <datalist id="industries">
              {INDUSTRIES.map(i=> <option key={i} value={i} />)}
            </datalist>
            {error.industry && <div className="text-xs text-red-500">{error.industry}</div>}
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-700">Product / Service description</label>
            <textarea value={form.description} onChange={e=>set('description', e.target.value)} className="w-full rounded-2xl border border-gray-200 px-3 py-3 h-24" />
            {error.description && <div className="text-xs text-red-500">{error.description}</div>}
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-700">Unique selling proposition (1–2 sentences)</label>
            <textarea value={form.usp} onChange={e=>set('usp', e.target.value)} className="w-full rounded-2xl border border-gray-200 px-3 py-3 h-24" />
            {error.usp && <div className="text-xs text-red-500">{error.usp}</div>}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={onContinue} className="btn-gradient text-white px-6 py-3 rounded-2xl font-bold">Continue</button>
          <button onClick={()=>nav('/onboarding/tone')} className="text-sm text-gray-600">Skip for now</button>
        </div>
      </div>
    </>
  )
}
