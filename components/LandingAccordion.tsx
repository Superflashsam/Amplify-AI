import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

const features = [
  { id: 'engine', title: 'An always‑on content engine powered by AI', desc: 'Generate blog posts, social captions, and emails in seconds. Amplify learns your voice and maintains consistency across every channel.', color: '#FFE4F0', text: '#9D174D' },
  { id: 'velocity', title: 'Supercharge campaign velocity and impact', desc: 'Launch campaigns 10x faster. From idea to execution, Amplify streamlines your workflow and automates the tedious parts.', color: '#E0E7FF', text: '#3730A3' },
  { id: 'brand', title: 'Create a brand to remember', desc: 'Stand out with unique visuals and copy. Our tools help you define and stick to a brand identity that resonates with your audience.', color: '#F0FDF4', text: '#166534' },
  { id: 'empower', title: 'Empower every marketer with AI', desc: 'Give your team superpowers. No prompt engineering required—just intuitive tools that amplify creativity and results.', color: '#FEF3C7', text: '#92400E' }
]

export const LandingAccordion: React.FC = () => {
  const [active, setActive] = useState('engine')

  return (
    <div className="space-y-4">
      {features.map((f) => (
        <div key={f.id} className="border-b border-gray-100 pb-4 last:border-0">
          <button onClick={() => setActive(f.id)} className="w-full text-left flex items-center justify-between group py-2">
            <h3 className={`font-display font-semibold text-xl transition-colors ${active === f.id ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-600'}`}>{f.title}</h3>
            {active === f.id && <Sparkles className="w-5 h-5 text-primary animate-pulse" />}
          </button>
          <AnimatePresence>
            {active === f.id && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                <div className={`mt-3 p-6 rounded-2xl`} style={{ backgroundColor: f.color }}>
                  <p className="text-base font-medium leading-relaxed mb-4" style={{ color: f.text }}>{f.desc}</p>
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-bold hover:underline" style={{ color: f.text }}>
                    Learn more <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
