import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Check } from 'lucide-react'

export const BrandVoiceVisual: React.FC = () => {
  return (
    <div className="relative w-full h-[600px] bg-[#FFE4F0] rounded-[32px] p-8 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }} className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-2xl shadow-pink-900/10 p-6 border border-white/60">
        <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
          <div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Active Voice</div>
            <div className="flex items-center gap-2 text-gray-900 font-bold text-lg">
              <span className="w-3 h-3 rounded-full bg-purple-500" />
              Professional & Friendly
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-600">AI</div>
        </div>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex-shrink-0 flex items-center justify-center text-indigo-600 font-bold text-xs">AM</div>
            <div className="space-y-2">
              <div className="bg-gray-50 rounded-2xl rounded-tl-none p-4 text-sm text-gray-700 leading-relaxed">
                Can you rewrite this to sound more confident but approachable?
              </div>
            </div>
          </div>
          <div className="flex gap-4 flex-row-reverse">
            <div className="w-10 h-10 rounded-full bg-purple-600 flex-shrink-0 flex items-center justify-center text-white font-bold text-xs">AI</div>
            <div className="space-y-2">
              <div className="bg-purple-50 rounded-2xl rounded-tr-none p-4 text-sm text-gray-800 leading-relaxed shadow-sm border border-purple-100">
                <p className="font-semibold text-purple-900 mb-2 flex items-center gap-2"><Check className="w-3 h-3" /> Voice Matched</p>
                "Amplify gives your marketing team the freedom to create high-impact campaigns faster. By automating routine tasks, we help you focus on strategy while keeping every piece of content perfectly on-brand."
              </div>
              <div className="flex gap-2">
                <button className="text-xs font-bold text-purple-600 bg-white border border-purple-100 px-3 py-1.5 rounded-full hover:bg-purple-50">Use this</button>
                <button className="text-xs font-bold text-gray-500 bg-white border border-gray-200 px-3 py-1.5 rounded-full hover:bg-gray-50">Try again</button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut', delay: 1 }} className="absolute bottom-12 right-8 w-64 bg-white/90 backdrop-blur rounded-xl shadow-xl border border-white/60 p-4 hidden md:block">
        <div className="text-xs font-bold text-gray-400 mb-3">Tone Analysis</div>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-xs font-semibold mb-1 text-gray-700"><span>Confidence</span><span>94%</span></div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-green-500 w-[94%]" /></div>
          </div>
          <div>
            <div className="flex justify-between text-xs font-semibold mb-1 text-gray-700"><span>Empathy</span><span>88%</span></div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-purple-500 w-[88%]" /></div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
