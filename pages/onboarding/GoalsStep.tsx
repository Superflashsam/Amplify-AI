import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useOnboarding } from './state'

const GOALS = [
  'Grow social media presence','Launch a new product','Drive more leads','Improve conversions','Build personal brand','Consistent weekly content','Grow community / audience','Improve sales pipeline nurturing'
]

export const GoalsStep: React.FC = () => {
  const nav = useNavigate()
  const { state, setState } = useOnboarding()
  const [goals, setGoals] = useState(state.goals)

  const toggle = (g: string) => setGoals({ ...goals, selectedGoals: goals.selectedGoals.includes(g) ? goals.selectedGoals.filter(x=>x!==g) : [...goals.selectedGoals, g] })
  const setHorizon = (h: '30' | '90' | '180') => setGoals({ ...goals, horizon: h })
  const generate = () => { setState(s=>({ ...s, goals })); nav('/onboarding/dna') }

  return (
    <>
      <div className="hidden lg:block">
        <div className="rounded-[24px] overflow-hidden border border-gray-100 bg-white/80 backdrop-blur-xl h-[520px] flex items-center justify-center">
          <img loading="lazy" alt="Goals illustration" className="w-full h-full object-cover" src="/assets/onboarding/goals-16x9.png" onError={(e:any)=>{e.currentTarget.style.display='none'}} />
          <div className="w-[420px] h-[420px] rounded-full blur-3xl bg-gradient-to-br from-indigo-200 to-purple-200" />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="font-display font-bold text-3xl text-dark">What do you want Amplify to help you achieve?</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {GOALS.map(g=> (
            <button key={g} type="button" onClick={()=>toggle(g)} className={`text-left px-4 py-3 rounded-2xl border transition ${goals.selectedGoals.includes(g)?'bg-primary text-white border-primary':'bg-white text-gray-700 border-gray-200'}`}>{g}</button>
          ))}
        </div>
        <div className="mt-4">
          <div className="text-sm font-semibold text-gray-700 mb-2">Time Horizon</div>
          <div className="flex items-center gap-3">
            {(['30','90','180'] as const).map(h=> (
              <label key={h} className={`px-3 py-1.5 rounded-full border text-xs font-bold ${goals.horizon===h?'bg-primary text-white border-primary':'bg-white text-gray-700 border-gray-200'}`}>
                <input type="radio" name="horizon" className="hidden" checked={goals.horizon===h} onChange={()=>setHorizon(h)} />
                {h==='180'?'6 months':h+' days'}
              </label>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={generate} className="btn-gradient text-white px-6 py-3 rounded-2xl font-bold">Generate My Brand DNA →</button>
        </div>
      </div>
    </>
  )
}
