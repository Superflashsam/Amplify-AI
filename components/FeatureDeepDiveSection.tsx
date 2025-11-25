
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, CheckCircle2, Sparkles, BarChart3, 
  Send, PenTool, Image as ImageIcon, Zap, 
  Settings, ArrowRight, LayoutTemplate, 
  Instagram, Linkedin, Youtube, Twitter,
  Check, TrendingUp, Shield, Globe, Layers, X
} from 'lucide-react';

// --- VISUAL COMPONENTS ---

const CalendarVisual: React.FC = () => (
  <div className="w-full h-full bg-gray-50 p-6 md:p-8 flex flex-col relative overflow-hidden font-sans">
     {/* Grid Background */}
     <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.4 }} />
     
     {/* Header UI */}
     <div className="flex justify-between items-center mb-6 relative z-10">
        <div className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 shadow-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-bold text-gray-700">Active Campaign</span>
        </div>
        <div className="flex -space-x-2">
           <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" />
           <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-300" />
        </div>
     </div>

     {/* Main Calendar Card */}
     <motion.div 
        className="bg-white rounded-xl shadow-xl border border-gray-200/60 flex-1 p-4 relative z-10 overflow-hidden"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
     >
        <div className="grid grid-cols-7 gap-px bg-gray-100 border border-gray-100 rounded-lg overflow-hidden mb-4">
           {['S','M','T','W','T','F','S'].map(d => (
             <div key={d} className="bg-gray-50 py-2 text-center text-[10px] font-bold text-gray-400">{d}</div>
           ))}
           {Array.from({length: 28}).map((_, i) => (
             <div key={i} className="bg-white h-16 md:h-20 p-1 relative group transition-colors hover:bg-purple-50/30">
                <span className="text-[10px] text-gray-300 font-medium">{i+1}</span>
                {[3, 8, 12, 15, 22].includes(i) && (
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.2 + (i*0.02) }}
                    className="absolute bottom-1 right-1 left-1 h-1.5 rounded-full bg-purple-100"
                  >
                     <div className="h-full w-2/3 bg-purple-500 rounded-full" />
                  </motion.div>
                )}
             </div>
           ))}
        </div>
     </motion.div>

     {/* Floating Cards Parallax */}
     <motion.div 
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-8 z-20 bg-white p-3 rounded-xl shadow-2xl border border-gray-100 w-40 rotate-3 hidden sm:block"
     >
        <div className="flex items-center gap-2 mb-2">
           <div className="bg-pink-500 text-white p-1 rounded"><Instagram size={12} /></div>
           <span className="text-[10px] font-bold text-gray-600">Stories</span>
        </div>
        <div className="h-20 bg-gray-100 rounded-lg mb-2 overflow-hidden relative">
           <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-pink-100 opacity-50" />
        </div>
        <div className="flex justify-between text-[10px] text-gray-400">
           <span>10:00 AM</span>
           <span className="text-green-500 font-bold">Ready</span>
        </div>
     </motion.div>

     <motion.div 
        animate={{ y: [15, -5, 15] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-8 z-20 bg-white p-3 rounded-xl shadow-2xl border border-gray-100 w-48 -rotate-2 hidden sm:block"
     >
        <div className="flex items-center gap-2 mb-2">
           <div className="bg-blue-700 text-white p-1 rounded"><Linkedin size={12} /></div>
           <span className="text-[10px] font-bold text-gray-600">Article</span>
        </div>
        <div className="space-y-1.5">
           <div className="h-2 w-full bg-gray-100 rounded-full" />
           <div className="h-2 w-3/4 bg-gray-100 rounded-full" />
        </div>
        <div className="mt-3 flex gap-2">
           <div className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[9px] font-bold rounded">Tech</div>
           <div className="px-2 py-0.5 bg-purple-50 text-purple-600 text-[9px] font-bold rounded">AI</div>
        </div>
     </motion.div>
  </div>
);

const CopywriterVisual: React.FC = () => (
  <div className="w-full h-full bg-white flex overflow-hidden font-sans">
     {/* Left: Text Editor */}
     <div className="w-1/2 md:w-3/5 p-6 md:p-8 flex flex-col border-r border-gray-100">
        <div className="flex gap-2 mb-6">
           <div className="w-3 h-3 rounded-full bg-red-400" />
           <div className="w-3 h-3 rounded-full bg-amber-400" />
           <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="space-y-3 relative">
           <div className="h-4 w-3/4 bg-gray-100 rounded" />
           <div className="h-4 w-full bg-gray-100 rounded" />
           <div className="flex items-center gap-1">
              <div className="h-4 w-1/2 bg-gray-100 rounded" />
              <motion.div 
                 animate={{ opacity: [0, 1, 0] }}
                 transition={{ duration: 0.8, repeat: Infinity }}
                 className="w-0.5 h-5 bg-primary" 
              />
           </div>
           
           {/* AI Bubble */}
           <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute top-10 left-4 right-0 bg-white border border-purple-100 shadow-xl rounded-xl p-3 z-10"
           >
              <div className="flex items-center gap-2 text-primary text-xs font-bold mb-1">
                 <Sparkles size={12} /> AI Suggestion
              </div>
              <p className="text-xs text-gray-600 leading-snug">
                  Try adding an emotional hook here to increase engagement by ~15%.
              </p>
           </motion.div>
        </div>
        
        {/* Tone Selector */}
        <div className="mt-auto bg-gray-50 rounded-lg p-3 border border-gray-100">
           <div className="text-[10px] text-gray-400 font-bold uppercase mb-2">Tone of Voice</div>
           <div className="flex gap-2">
              <span className="px-2 py-1 bg-white border border-gray-200 text-xs font-medium rounded shadow-sm text-gray-800">Friendly</span>
              <span className="px-2 py-1 bg-white border border-gray-200 text-xs font-medium rounded shadow-sm text-gray-800">Expert</span>
           </div>
        </div>
     </div>

     {/* Right: Image Sidebar */}
     <div className="flex-1 bg-gray-50/50 p-4 flex flex-col gap-3 overflow-hidden">
        <div className="text-[10px] text-gray-400 font-bold uppercase text-center">Generated Assets</div>
        {[1, 2, 3].map((i) => (
           <motion.div 
              key={i}
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              className="aspect-square rounded-xl bg-white border border-gray-200 shadow-sm p-2 relative group cursor-pointer"
           >
               <div className="w-full h-full rounded-lg bg-gray-100 overflow-hidden relative">
                  <div className={`absolute inset-0 bg-gradient-to-tr ${i === 1 ? 'from-blue-100 to-purple-100' : i === 2 ? 'from-pink-100 to-orange-100' : 'from-green-100 to-teal-100'}`} />
                  {/* Sparkle Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Sparkles className="text-white drop-shadow-md" />
                  </div>
               </div>
           </motion.div>
        ))}
     </div>
  </div>
);

const AnalyticsVisual: React.FC = () => (
  <div className="w-full h-full bg-slate-50 p-6 md:p-8 relative overflow-hidden flex flex-col justify-center font-sans">
     {/* Background Decor */}
     <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl" />

     {/* Main Dashboard Card */}
     <div className="bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-200/60 p-5 relative z-10">
        <div className="flex justify-between items-center mb-6">
            <div>
                <h4 className="text-lg font-bold text-gray-900">Campaign ROI</h4>
                <p className="text-xs text-gray-400">Last 30 Days</p>
            </div>
            <div className="text-right">
                <div className="text-2xl font-display font-bold text-gray-900">$14,205</div>
                <div className="text-xs font-bold text-green-500 flex items-center justify-end gap-1">
                   <TrendingUp size={12} /> +24.5%
                </div>
            </div>
        </div>
        
        {/* Chart */}
        <div className="h-32 flex items-end gap-2 mb-6">
            {[40, 65, 45, 70, 55, 85, 60, 95, 75, 90].map((h, i) => (
               <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  className="flex-1 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t-sm opacity-80 hover:opacity-100 transition-opacity relative group"
               >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-dark text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                     ${h * 142}
                  </div>
               </motion.div>
            ))}
        </div>

        {/* AI Insight Floater */}
        <motion.div 
           initial={{ x: -20, opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }}
           transition={{ delay: 1 }}
           className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-3 rounded-lg shadow-lg flex items-center gap-3"
        >
           <div className="p-1.5 bg-white/10 rounded-md">
              <Zap size={14} className="text-yellow-400" />
           </div>
           <div>
              <div className="text-[10px] font-bold text-gray-400 uppercase">Optimization</div>
              <div className="text-xs font-medium">Increase ad spend on Weekends for <span className="text-green-400">+12% ROI</span>.</div>
           </div>
           <button className="ml-auto px-2 py-1 bg-white/10 rounded text-[10px] font-bold hover:bg-white/20 transition-colors">Apply</button>
        </motion.div>
     </div>
  </div>
);

const PublishingVisual: React.FC = () => (
  <div className="w-full h-full bg-gray-900 p-6 md:p-8 flex items-center justify-center relative overflow-hidden font-sans">
     {/* Dark Mode Grid */}
     <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#1f2937 1px, transparent 1px), linear-gradient(90deg, #1f2937 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.3 }} />
     
     {/* Control Center Card */}
     <div className="w-full max-w-sm bg-gray-800/90 backdrop-blur-xl rounded-2xl border border-gray-700 shadow-2xl p-6 relative z-10">
        <div className="flex justify-between items-center mb-6 border-b border-gray-700 pb-4">
           <h4 className="text-white font-bold flex items-center gap-2">
              <Globe size={16} className="text-gray-400" /> Distribution
           </h4>
           <div className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-[10px] font-bold border border-green-500/30 flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Online
           </div>
        </div>

        <div className="space-y-4">
           {[
              { name: "Instagram", icon: Instagram, color: "text-pink-500", status: "Published" },
              { name: "LinkedIn", icon: Linkedin, color: "text-blue-500", status: "Published" },
              { name: "Twitter / X", icon: Twitter, color: "text-sky-400", status: "Sending..." },
              { name: "YouTube", icon: Youtube, color: "text-red-500", status: "Scheduled" }
           ].map((platform, i) => (
              <div key={i} className="flex items-center justify-between group">
                 <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gray-700 ${platform.color} bg-opacity-10`}>
                       <platform.icon size={16} className={platform.color} />
                    </div>
                    <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">{platform.name}</span>
                 </div>
                 <div className="flex items-center gap-3">
                    {platform.status === "Sending..." ? (
                       <div className="text-gray-500 animate-spin">⟳</div>
                    ) : platform.status === "Published" ? (
                       <motion.div 
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: 0.5 + (i * 0.2) }}
                          className="text-green-400"
                       >
                          <Check size={16} />
                       </motion.div>
                    ) : (
                       <span className="text-[10px] text-gray-500 font-mono">10:00 AM</span>
                    )}
                    
                    {/* Toggle Switch */}
                    <div className={`w-8 h-4 rounded-full relative transition-colors ${platform.status === 'Scheduled' ? 'bg-gray-600' : 'bg-green-600'}`}>
                       <div className={`absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full transition-transform ${platform.status === 'Scheduled' ? '' : 'translate-x-4'}`} />
                    </div>
                 </div>
              </div>
           ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-6 pt-4 border-t border-gray-700">
           <div className="flex justify-between text-[10px] text-gray-400 mb-2">
              <span>Campaign Progress</span>
              <span>75%</span>
           </div>
           <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
              <motion.div 
                 initial={{ width: 0 }}
                 whileInView={{ width: "75%" }}
                 transition={{ duration: 1.5, delay: 0.5 }}
                 className="h-full bg-gradient-to-r from-green-500 to-emerald-400" 
              />
           </div>
        </div>
     </div>
  </div>
);

// --- FEATURE DATA ---

const FEATURES = [
  {
    id: 'calendar',
    title: "AI-Powered Content Calendar",
    subtitle: "Planning",
    description: "Plan an entire 30-day content calendar in minutes — complete with campaign themes, posting slots, and platform-optimized variations.",
    points: [
      "Auto-generated content plan powered by Google Gemini",
      "Drag-and-drop scheduling interface",
      "Smart recommendations & AI insights",
      "Instant cross-platform optimization"
    ],
    align: 'left',
    icon: Calendar,
    colorClass: 'bg-purple-500',
    VisualComponent: CalendarVisual
  },
  {
    id: 'copywriter',
    title: "AI Copywriter & Creative Generator",
    subtitle: "Creation",
    description: "Create scroll-stopping copy, scripts, captions, and creative concepts in seconds with tone-matched brand voice.",
    points: [
      "50+ content formats (ads, reels, blogs, scripts)",
      "Automatic brand voice learning engine",
      "Rephrase, expand, shorten, and translate",
      "One-click creative image suggestions"
    ],
    align: 'right',
    icon: PenTool,
    colorClass: 'bg-pink-500',
    VisualComponent: CopywriterVisual
  },
  {
    id: 'analytics',
    title: "Campaign Intelligence & Optimization",
    subtitle: "Analytics",
    description: "Measure what matters. Amplify shows real performance predictions and automated improvement suggestions — like having a growth strategist on your team.",
    points: [
      "Live performance dashboard (CTR, Reach, Engagement)",
      "Predictive analytics recommendations",
      "A/B testing automation",
      "AI-based ROI forecasting"
    ],
    align: 'left',
    icon: BarChart3,
    colorClass: 'bg-blue-500',
    VisualComponent: AnalyticsVisual
  },
  {
    id: 'publishing',
    title: "Auto-Publish & Scheduling Automation",
    subtitle: "Distribution",
    description: "Publish everywhere with one click. Amplify handles scheduling, optimization, and versioning — so you stay consistent without effort.",
    points: [
      "Auto-publish to Instagram, LinkedIn, YouTube, X, TikTok",
      "Best-time-to-post engine",
      "UTM tracking & analytics tagging",
      "Live status tracking"
    ],
    align: 'right',
    icon: Send,
    colorClass: 'bg-green-500',
    VisualComponent: PublishingVisual
  }
];

// --- MAIN COMPONENT ---

export const FeatureDeepDiveSection: React.FC = () => {
  const [selectedFeatureId, setSelectedFeatureId] = useState<string | null>(null);

  const selectedFeature = FEATURES.find(f => f.id === selectedFeatureId);

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden relative">
        {/* Global Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
           <div className="absolute top-[10%] right-[-5%] w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-[100px]" />
           <div className="absolute bottom-[10%] left-[-5%] w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px]" />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
        </div>
        
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
           {/* Section Header */}
           <div className="text-center max-w-3xl mx-auto mb-24">
             <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-6 tracking-tight">
               Everything You Need to Plan, Create & Scale <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">High-Performance Campaigns</span>
             </h2>
             <p className="text-xl text-gray-500 leading-relaxed">
               Powerful AI tools built for modern marketers who want results — not complexity.
             </p>
           </div>

           {/* Feature Blocks */}
           {FEATURES.map((feature, i) => (
              <div key={feature.id} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-24 lg:mb-32 ${feature.align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                 
                 {/* Text Side */}
                 <motion.div 
                    initial={{ opacity: 0, x: feature.align === 'left' ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="flex-1"
                 >
                    <div className={`w-12 h-12 rounded-2xl ${feature.colorClass} bg-opacity-10 flex items-center justify-center mb-6`}>
                       <feature.icon size={24} className={feature.colorClass.replace('bg-', 'text-')} />
                    </div>
                    <h3 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4 leading-tight">
                       {feature.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                       {feature.description}
                    </p>
                    <ul className="space-y-4 mb-8">
                       {feature.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                             <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full ${feature.colorClass} bg-opacity-10 flex items-center justify-center`}>
                                <Check size={12} className={feature.colorClass.replace('bg-', 'text-')} strokeWidth={3} />
                             </div>
                             <span className="text-gray-700 font-medium">{point}</span>
                          </li>
                       ))}
                    </ul>
                    <button className="group flex items-center gap-2 text-gray-900 font-bold text-sm hover:gap-3 transition-all">
                       Learn more <ArrowRight size={16} className="group-hover:text-primary transition-colors" />
                    </button>
                 </motion.div>

                 {/* Visual Side (Interactive Card) */}
                 <div className="flex-1 w-full perspective-1000">
                    <motion.div 
                       layoutId={`card-container-${feature.id}`}
                       onClick={() => setSelectedFeatureId(feature.id)}
                       initial={{ opacity: 0, y: 40, scale: 0.95 }}
                       whileInView={{ opacity: 1, y: 0, scale: 1 }}
                       whileHover={{ 
                          scale: 1.02,
                          boxShadow: `0 25px 50px -12px ${feature.colorClass.replace('bg-', 'rgba(').replace('500', '255, 0.3)')}` // Dynamic colored shadow bloom
                       }}
                       viewport={{ once: true, margin: "-100px" }}
                       transition={{ duration: 0.5, ease: "easeOut" }}
                       className="relative rounded-[2rem] bg-gray-50/50 p-2 border border-white/50 shadow-2xl shadow-gray-200/50 cursor-pointer group"
                    >
                       <div className="relative bg-white rounded-[1.8rem] border border-gray-100 overflow-hidden aspect-[4/3] lg:aspect-square xl:aspect-[4/3]">
                          {/* Render the Visual Component */}
                          <feature.VisualComponent />
                          
                          {/* Hover Overlay Hint */}
                          <motion.div 
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            className="absolute inset-0 bg-black/5 backdrop-blur-[1px] flex items-center justify-center z-30"
                          >
                             <div className="bg-white px-4 py-2 rounded-full shadow-lg font-bold text-sm text-gray-800 flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                <Zap size={14} className="text-primary" /> Click to Expand
                             </div>
                          </motion.div>
                       </div>
                    </motion.div>
                 </div>
              </div>
           ))}

           {/* Micro-Features Grid */}
           <div className="border-t border-gray-100 pt-16 mt-16">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12">
                 {[
                    { icon: Shield, label: "Enterprise Security", desc: "SSO & Role-based Access" },
                    { icon: Globe, label: "Multi-Language", desc: "Translate to 30+ languages" },
                    { icon: Layers, label: "Asset Management", desc: "Unlimited cloud storage" },
                    { icon: LayoutTemplate, label: "Custom Templates", desc: "Save your best formats" }
                 ].map((item, i) => (
                    <motion.div 
                       key={i}
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ delay: i * 0.1 }}
                       className="flex flex-col items-center text-center group hover:bg-gray-50 p-4 rounded-xl transition-colors"
                    >
                       <div className="w-12 h-12 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110 shadow-sm">
                          <item.icon size={20} />
                       </div>
                       <h5 className="font-bold text-gray-900 mb-1">{item.label}</h5>
                       <p className="text-xs text-gray-500">{item.desc}</p>
                    </motion.div>
                 ))}
              </div>
           </div>
        </div>

        {/* EXPANSION MODAL */}
        <AnimatePresence>
           {selectedFeatureId && selectedFeature && (
              <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-md"
                 onClick={() => setSelectedFeatureId(null)}
              >
                 <motion.div 
                    layoutId={`card-container-${selectedFeatureId}`}
                    className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
                    onClick={(e) => e.stopPropagation()}
                 >
                    {/* Close Button */}
                    <button 
                       onClick={() => setSelectedFeatureId(null)}
                       className="absolute top-4 right-4 z-50 p-2 bg-black/10 hover:bg-black/20 rounded-full transition-colors"
                    >
                       <X size={24} className="text-gray-800" />
                    </button>

                    {/* Modal Content: Visual + Info */}
                    <div className="flex flex-col h-full">
                       <div className="flex-1 bg-gray-50 relative overflow-hidden min-h-[400px]">
                          <selectedFeature.VisualComponent />
                       </div>
                       <div className="p-8 bg-white border-t border-gray-100 shrink-0">
                          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${selectedFeature.colorClass} bg-opacity-10 text-xs font-bold uppercase tracking-wide mb-4`}>
                             <span className={selectedFeature.colorClass.replace('bg-', 'text-')}>Live Demo</span>
                          </div>
                          <h3 className="font-display font-bold text-2xl md:text-3xl text-gray-900 mb-2">
                             {selectedFeature.title}
                          </h3>
                          <p className="text-gray-600 max-w-2xl">
                             {selectedFeature.description} Experience the full power of this feature in our dashboard.
                          </p>
                       </div>
                    </div>
                 </motion.div>
              </motion.div>
           )}
        </AnimatePresence>

    </section>
  );
};
