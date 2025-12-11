import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { computeBrandDNA, useOnboarding, saveToSupabaseIfEnabled } from './state'

export const DnaStep: React.FC = () => {
  const nav = useNavigate()
  const { state } = useOnboarding()
  const dna = computeBrandDNA(state)
  useEffect(() => { saveToSupabaseIfEnabled(state) }, [])
  return (
    <div className="lg:col-span-2 grid gap-8">
      <div>
        <h2 className="font-display font-bold text-3xl text-dark">Your Brand DNA Is Ready!</h2>
        <p className="text-gray-500">We’ve learned your brand voice, audience, and goals. You’re all set to create content, campaigns, and marketing workflows.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <Card title="Brand Voice Summary" body={dna.voiceSummary} />
        <Card title="Audience Persona Snapshot" body={dna.personaSnapshot} />
        <Card title="Marketing Foundation" body={dna.marketingFoundation} />
      </div>
      <div>
        <button onClick={()=>nav('/')} className="btn-gradient text-white px-6 py-3 rounded-2xl font-bold">Go to Dashboard</button>
      </div>
    </div>
  )
}

const Card: React.FC<{ title: string; body: string }> = ({ title, body }) => (
  <div className="rounded-2xl border border-gray-100 bg-white/80 backdrop-blur-xl shadow-xl p-6">
    <div className="font-bold text-gray-900 mb-2">{title}</div>
    <div className="text-sm text-gray-600">{body}</div>
  </div>
)
