import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useOnboarding } from './state'

const TYPES = ['B2B','B2C','Freelancers','Startups','Agencies','Enterprise','Local Business']

export const ToneStep: React.FC = () => {
  const nav = useNavigate()
  const { state, setState } = useOnboarding()
  const [tone, setTone] = useState(state.tone)
  const [kw, setKw] = useState('')

  const setNum = (k: keyof typeof tone, v: number) => setTone({ ...tone, [k]: v })
  const setTxt = (k: keyof typeof tone, v: string) => setTone({ ...tone, [k]: v })
  const toggleType = (t: string) => setTone({ ...tone, audienceType: tone.audienceType.includes(t) ? tone.audienceType.filter(x=>x!==t) : [...tone.audienceType, t] })
  const addKw = () => { if (kw.trim()) { setTone({ ...tone, keywords: [...tone.keywords, kw.trim()] }); setKw('') } }
  const removeKw = (i: number) => setTone({ ...tone, keywords: tone.keywords.filter((_,idx)=>idx!==i) })
  const next = () => { setState(s=>({ ...s, tone })); nav('/onboarding/goals') }

  return (
    <>
      <div className="hidden lg:block">
        <div className="rounded-[24px] overflow-hidden border border-gray-100 bg-white/80 backdrop-blur-xl h-[520px] flex items-center justify-center">
          <img loading="lazy" alt="Tone and audience illustration" className="w-full h-full object-cover" src="/assets/onboarding/tone-16x9.png" onError={(e:any)=>{e.currentTarget.style.display='none'}} />
          <div className="w-[420px] h-[420px] rounded-full blur-3xl bg-gradient-to-br from-indigo-200 to-purple-200" />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="font-display font-bold text-3xl text-dark">What’s your brand voice?</h2>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <Slider label="Professional ↔ Casual" value={tone.professional} onChange={v=>setNum('professional', v)} />
          <Slider label="Serious ↔ Playful" value={tone.serious} onChange={v=>setNum('serious', v)} />
          <Slider label="Bold ↔ Friendly" value={tone.bold} onChange={v=>setNum('bold', v)} />
          <Slider label="Energetic ↔ Calm" value={tone.energetic} onChange={v=>setNum('energetic', v)} />
        </div>
        <div>
          <label className="text-sm font-semibold text-gray-700">Target audience</label>
          <textarea value={tone.audienceText} onChange={e=>setTxt('audienceText', e.target.value)} className="w-full rounded-2xl border border-gray-200 px-3 py-3 h-24" />
        </div>
        <div>
          <label className="text-sm font-semibold text-gray-700">Keywords about pain points + desires</label>
          <div className="flex items-center gap-2">
            <input value={kw} onChange={e=>setKw(e.target.value)} className="flex-1 rounded-2xl border border-gray-200 px-3 py-3" placeholder="e.g., onboarding friction" />
            <button type="button" onClick={addKw} className="px-3 py-2 rounded-2xl border border-gray-200">Add</button>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {tone.keywords.map((k,i)=> (
              <span key={i} className="text-xs px-2 py-1 rounded-full bg-gray-100 border border-gray-200">{k} <button onClick={()=>removeKw(i)} className="ml-1 text-gray-400">×</button></span>
            ))}
          </div>
        </div>
        <div>
          <label className="text-sm font-semibold text-gray-700">Audience type</label>
          <div className="flex flex-wrap gap-2 mt-2">
            {TYPES.map(t=> (
              <button key={t} type="button" onClick={()=>toggleType(t)} className={`px-3 py-1.5 rounded-full text-xs font-bold border ${tone.audienceType.includes(t)?'bg-primary text-white border-primary':'bg-white text-gray-700 border-gray-200'}`}>{t}</button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={next} className="btn-gradient text-white px-6 py-3 rounded-2xl font-bold">Next</button>
        </div>
      </div>
    </>
  )
}

const Slider: React.FC<{ label: string; value: number; onChange: (v:number)=>void }> = ({ label, value, onChange }) => (
  <div>
    <div className="text-sm font-semibold text-gray-700 mb-1">{label}</div>
    <input type="range" min={0} max={100} value={value} onChange={e=>onChange(Number(e.target.value))} className="w-full" />
  </div>
)
