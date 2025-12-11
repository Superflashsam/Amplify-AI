import React from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { OnboardingProvider } from './state'

const steps = [
  { id: 'brand', label: 'Brand Identity', path: '/onboarding/brand' },
  { id: 'tone', label: 'Tone & Audience', path: '/onboarding/tone' },
  { id: 'goals', label: 'Goals', path: '/onboarding/goals' }
]

export const OnboardingLayout: React.FC = () => {
  const loc = useLocation()
  const navigate = useNavigate()
  const activeIndex = Math.max(0, steps.findIndex(s => loc.pathname.includes(s.path)))
  return (
    <OnboardingProvider>
      <section className="min-h-screen bg-white">
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="text-xs font-bold text-gray-500 mb-2">Onboarding</div>
            <div className="flex items-center gap-3">
              {steps.map((s, i) => (
                <button key={s.id} onClick={() => navigate(s.path)} className={`px-3 py-1.5 rounded-full border text-xs font-bold transition-colors ${i <= activeIndex ? 'bg-primary text-white border-primary' : 'bg-white text-gray-600 border-gray-200'}`}>{i+1} {s.label}</button>
              ))}
            </div>
          </div>
        </header>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 px-6 py-12">
          <Outlet />
        </div>
      </section>
    </OnboardingProvider>
  )
}

export default OnboardingLayout

