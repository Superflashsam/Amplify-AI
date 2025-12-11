import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export const WorkspaceSetup: React.FC = () => {
  const nav = useNavigate()
  const [name, setName] = useState('')
  const [size, setSize] = useState('1-10')

  const onContinue = (e: React.FormEvent) => {
    e.preventDefault()
    nav('/onboarding/brand')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB] px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md bg-white rounded-[24px] shadow-xl border border-gray-100 p-8">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-indigo-600 flex items-center justify-center shadow-lg shadow-primary/25">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="font-display font-bold text-xl text-gray-900">Amplify</span>
        </div>
        <h1 className="font-display font-bold text-2xl text-gray-900 mb-2">Create your workspace</h1>
        <p className="text-gray-500 mb-8">Workspaces help you keep brands and teams organized. You can add more later.</p>
        <form onSubmit={onContinue} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Workspace Name</label>
            <input required value={name} onChange={e => setName(e.target.value)} className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="e.g. Acme Marketing" />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Company Size</label>
            <div className="relative">
              <select value={size} onChange={e => setSize(e.target.value)} className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none appearance-none bg-white">
                <option value="1-10">1-10 employees</option>
                <option value="11-50">11-50 employees</option>
                <option value="51-200">51-200 employees</option>
                <option value="201+">201+ employees</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">▼</div>
            </div>
          </div>
          <button type="submit" className="w-full btn-gradient text-white font-bold py-3 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">Continue to Amplify</button>
        </form>
      </motion.div>
    </div>
  )
}
