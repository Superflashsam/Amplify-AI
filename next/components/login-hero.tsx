import React from 'react'

export const LoginHero: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-[#FAFCFF]">
      <div className="absolute -top-24 -left-24 w-[600px] h-[600px] rounded-full bg-[#5C3BFF]/20 blur-[120px]" />
      <div className="absolute -bottom-24 -right-24 w-[700px] h-[700px] rounded-full bg-[#A57CFF]/20 blur-[120px]" />
      <div className="relative z-10 h-full p-8 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-6 w-full max-w-2xl">
          <div className="rounded-[24px] bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl p-6 transition-transform will-change-transform hover:-translate-y-1">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-gray-400">New Leads</span>
              <span className="text-green-500 text-xs font-bold">+</span>
            </div>
            <div className="font-display text-3xl font-bold text-slate-900">25K+</div>
            <div className="text-xs text-gray-500">Last 30 days</div>
          </div>
          <div className="rounded-[24px] bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl p-6 transition-transform will-change-transform hover:-translate-y-1">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-gray-400">Revenue</span>
              <span className="text-indigo-500 text-xs font-bold">$</span>
            </div>
            <div className="font-display text-3xl font-bold text-slate-900">$1.2M</div>
            <div className="text-xs text-gray-500">QTD</div>
          </div>
          <div className="rounded-[24px] bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl p-6 transition-transform will-change-transform hover:-translate-y-1">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-gray-400">Engagement</span>
              <span className="text-purple-500 text-xs font-bold">%</span>
            </div>
            <div className="font-display text-3xl font-bold text-slate-900">+38%</div>
            <div className="text-xs text-gray-500">Lift</div>
          </div>
          <div className="rounded-[24px] bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-4 h-4 rounded-full bg-blue-500" />
              <span className="text-xs font-bold text-gray-400">Personas</span>
            </div>
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-tr from-primary to-secondary" />
              <div className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-tr from-primary to-secondary" />
              <div className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-tr from-primary to-secondary" />
              <div className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-tr from-primary to-secondary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
