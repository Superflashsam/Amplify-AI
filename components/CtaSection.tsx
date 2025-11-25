
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Shield, Star, Zap, Check, Calendar, BarChart3, Image as ImageIcon, Search, Bell, Menu, MoreHorizontal } from 'lucide-react';

export const CtaSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const TABS = [
    { id: 'calendar', label: 'Content Calendar', icon: Calendar },
    { id: 'optimizer', label: 'Campaign Optimizer', icon: Zap },
    { id: 'assets', label: 'Asset Studio', icon: ImageIcon },
    { id: 'analytics', label: 'Analytics Dashboard', icon: BarChart3 },
  ];

  // Auto-switch tabs every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % TABS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-[#06080F] to-[#111827] text-white">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-500/10 rounded-full blur-[120px]" />
        
        {/* Moving Grid Lines */}
        <div className="absolute inset-0" 
             style={{ 
               backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', 
               backgroundSize: '50px 50px',
               maskImage: 'linear-gradient(to bottom, transparent, black 40%, black 80%, transparent)'
             }} 
        />
        
        {/* Lighting Streaks */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* --- HERO CONTENT --- */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(99,102,241,0.3)]"
          >
            <Sparkles size={12} className="text-indigo-400" /> Enterprise-Grade AI
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-5xl md:text-7xl mb-6 tracking-tight leading-[1.1]"
          >
            Ready to scale your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient-x">
              content engine?
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed"
          >
            Start building with Amplify and unlock AI-powered growth today. Join 12,000+ modern marketing teams using our OS.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-5 mb-12"
          >
            <button className="group relative px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-lg font-bold shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:shadow-[0_0_50px_rgba(99,102,241,0.5)] transition-all hover:-translate-y-1 active:scale-[0.98] overflow-hidden min-w-[200px]">
               <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               <span className="relative flex items-center justify-center gap-2">
                 Start Free Trial <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
               </span>
            </button>
            
            <button className="px-8 py-4 bg-transparent border border-white/10 text-white rounded-full text-lg font-bold hover:bg-white/5 hover:border-white/30 transition-all hover:-translate-y-1 min-w-[200px] flex items-center justify-center gap-2">
               Book Enterprise Demo
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 text-xs md:text-sm font-medium text-gray-500"
          >
             <div className="flex items-center gap-2">
                <div className="flex text-yellow-500"><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /></div>
                <span>Rated 4.9/5 by marketing teams</span>
             </div>
             <div className="flex items-center gap-1.5">
                <Shield size={14} className="text-green-500" />
                <span>SOC2 & GDPR Compliant</span>
             </div>
             <div className="flex items-center gap-1.5">
                <Zap size={14} className="text-blue-500" />
                <span>Powered by Google Gemini</span>
             </div>
          </motion.div>
        </div>

        {/* --- ANIMATED DASHBOARD SHOWCASE --- */}
        <motion.div 
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-5xl mx-auto"
        >
           {/* Glow Behind */}
           <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-1000" />
           
           {/* Browser Window Frame */}
           <div className="relative bg-[#0F111A] border border-white/10 rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/5">
               
               {/* Browser Toolbar */}
               <div className="h-12 border-b border-white/5 bg-[#161922] flex items-center px-4 justify-between">
                  <div className="flex items-center gap-2">
                     <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                     </div>
                  </div>
                  <div className="flex bg-black/40 px-3 py-1.5 rounded-md border border-white/5 w-[400px] items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-indigo-500" />
                      <span className="text-xs text-gray-500 font-mono">amplify.ai/workspace/campaigns</span>
                  </div>
                  <div className="w-8" /> {/* Spacer */}
               </div>

               {/* App UI */}
               <div className="flex h-[500px] md:h-[600px]">
                  {/* Sidebar (Icons only on mobile, expanded on desktop) */}
                  <div className="hidden md:flex w-64 border-r border-white/5 bg-[#13161F] flex-col p-4">
                      <div className="flex items-center gap-2 mb-8 px-2">
                          <div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white">A</div>
                          <span className="font-bold text-gray-200">Amplify</span>
                      </div>
                      
                      <div className="space-y-1">
                          {['Overview', 'Campaigns', 'Content', 'Analytics', 'Settings'].map((item, i) => (
                             <div key={i} className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${i === 1 ? 'bg-indigo-500/10 text-indigo-400' : 'text-gray-500 hover:bg-white/5 hover:text-gray-300'}`}>
                                <div className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-indigo-500' : 'bg-transparent'}`} />
                                {item}
                             </div>
                          ))}
                      </div>

                      <div className="mt-auto p-4 rounded-xl bg-gradient-to-b from-indigo-900/20 to-transparent border border-indigo-500/20">
                          <div className="flex items-center gap-2 text-indigo-400 mb-2">
                             <Sparkles size={14} /> <span className="text-xs font-bold uppercase">AI Status</span>
                          </div>
                          <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                             <div className="h-full w-3/4 bg-indigo-500 rounded-full animate-pulse" />
                          </div>
                          <div className="text-[10px] text-gray-500 mt-2">Processing 24k data points...</div>
                      </div>
                  </div>

                  {/* Main Content */}
                  <div className="flex-1 bg-[#0B0D13] flex flex-col relative overflow-hidden">
                      
                      {/* Top Nav */}
                      <div className="h-16 border-b border-white/5 flex items-center justify-between px-6 bg-[#0B0D13]/95 backdrop-blur z-20">
                         <h3 className="font-display font-bold text-xl text-white">Q4 Growth Campaign</h3>
                         <div className="flex items-center gap-4">
                            <div className="flex -space-x-2">
                               {[1,2,3].map(i => (
                                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0B0D13] bg-gray-700" />
                               ))}
                            </div>
                            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-1.5 rounded-lg text-sm font-bold transition-colors">
                               Share
                            </button>
                         </div>
                      </div>

                      {/* Animated Tabs */}
                      <div className="flex border-b border-white/5 px-6">
                         {TABS.map((tab, i) => {
                           const isActive = i === activeTab;
                           return (
                             <button 
                                key={tab.id}
                                onClick={() => setActiveTab(i)}
                                className={`relative px-4 py-3 text-sm font-medium transition-colors flex items-center gap-2 ${isActive ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
                             >
                                <tab.icon size={16} />
                                {tab.label}
                                {isActive && (
                                   <motion.div 
                                      layoutId="activeTab"
                                      className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500"
                                   />
                                )}
                             </button>
                           )
                         })}
                      </div>

                      {/* Content Area */}
                      <div className="flex-1 p-6 relative">
                         <AnimatePresence mode="wait">
                            <motion.div
                               key={activeTab}
                               initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                               animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                               exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                               transition={{ duration: 0.4 }}
                               className="h-full"
                            >
                               {/* Render Content Based on Tab */}
                               {activeTab === 0 && ( // Calendar
                                  <div className="grid grid-cols-7 gap-px bg-gray-800/50 border border-white/5 rounded-lg overflow-hidden h-full">
                                     {Array.from({length: 28}).map((_, i) => (
                                        <div key={i} className="bg-[#11131A] p-2 relative group hover:bg-white/5 transition-colors">
                                           <span className="text-xs text-gray-600">{i+1}</span>
                                           {[2, 5, 8, 12, 15, 19, 22].includes(i) && (
                                              <motion.div 
                                                 initial={{ scale: 0 }} animate={{ scale: 1 }} 
                                                 className="mt-2 p-1.5 bg-indigo-500/20 border border-indigo-500/30 rounded text-[10px] text-indigo-200 truncate"
                                              >
                                                 Scheduled Post
                                              </motion.div>
                                           )}
                                        </div>
                                     ))}
                                  </div>
                               )}
                               
                               {activeTab === 1 && ( // Optimizer
                                  <div className="flex gap-6 h-full">
                                     <div className="flex-1 bg-[#11131A] rounded-xl border border-white/5 p-6 space-y-4">
                                         <div className="flex justify-between items-center">
                                            <span className="text-gray-400 text-sm font-bold">Optimization Score</span>
                                            <span className="text-green-400 font-mono">94/100</span>
                                         </div>
                                         <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                            <motion.div initial={{ width: 0 }} animate={{ width: "94%" }} className="h-full bg-green-500" />
                                         </div>
                                         <div className="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-lg">
                                            <h4 className="text-indigo-300 font-bold text-sm mb-1 flex items-center gap-2">
                                               <Sparkles size={12} /> AI Suggestion
                                            </h4>
                                            <p className="text-xs text-gray-400">Change posting time to 10:00 AM EST to reach 15% more of your target audience.</p>
                                         </div>
                                     </div>
                                     <div className="w-1/3 space-y-4">
                                         {[1,2,3].map(i => (
                                            <div key={i} className="bg-[#11131A] border border-white/5 p-3 rounded-lg flex items-center justify-between">
                                               <div className="w-8 h-8 rounded bg-gray-800" />
                                               <div className="w-16 h-2 bg-gray-800 rounded" />
                                            </div>
                                         ))}
                                     </div>
                                  </div>
                               )}

                               {activeTab === 2 && ( // Assets
                                  <div className="grid grid-cols-4 gap-4">
                                     {Array.from({length: 8}).map((_, i) => (
                                        <motion.div 
                                           key={i}
                                           initial={{ opacity: 0, scale: 0.8 }}
                                           animate={{ opacity: 1, scale: 1 }}
                                           transition={{ delay: i * 0.05 }}
                                           className="aspect-square bg-[#11131A] rounded-xl border border-white/5 relative group overflow-hidden"
                                        >
                                           <div className={`absolute inset-0 bg-gradient-to-br ${i % 2 === 0 ? 'from-purple-500/20' : 'from-blue-500/20'} to-transparent opacity-50`} />
                                           <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                              <button className="bg-white text-black px-3 py-1 rounded-full text-xs font-bold">Edit</button>
                                           </div>
                                        </motion.div>
                                     ))}
                                  </div>
                               )}

                               {activeTab === 3 && ( // Analytics
                                  <div className="space-y-4 h-full">
                                     <div className="grid grid-cols-3 gap-4">
                                        {['Total Reach', 'Engagement', 'Conversions'].map((metric, i) => (
                                           <div key={i} className="bg-[#11131A] p-4 rounded-xl border border-white/5">
                                              <div className="text-xs text-gray-500 mb-1">{metric}</div>
                                              <div className="text-2xl font-bold text-white">{[ '1.2M', '4.8%', '3.2%' ][i]}</div>
                                           </div>
                                        ))}
                                     </div>
                                     <div className="flex-1 bg-[#11131A] rounded-xl border border-white/5 p-4 flex items-end justify-between gap-2 h-48">
                                         {[40, 60, 45, 80, 50, 70, 90, 65, 85, 95].map((h, i) => (
                                            <motion.div 
                                               key={i}
                                               initial={{ height: 0 }}
                                               animate={{ height: `${h}%` }}
                                               transition={{ delay: i * 0.05 }}
                                               className="flex-1 bg-indigo-500/40 rounded-t-sm hover:bg-indigo-500 transition-colors"
                                            />
                                         ))}
                                     </div>
                                  </div>
                               )}
                            </motion.div>
                         </AnimatePresence>
                      </div>

                  </div>
               </div>
           </div>
        </motion.div>

      </div>
    </section>
  );
};
