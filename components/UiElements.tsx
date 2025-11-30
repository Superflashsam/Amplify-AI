
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, Calendar, Zap, MessageSquare, MoreHorizontal, Share2, 
  Heart, CheckCircle2, Sparkles, User, TrendingUp, Mic, ArrowUpRight, 
  Globe, Search, Bell, Check, Grid, PieChart, Layers, PenTool, Image as ImageIcon, Send,
  Instagram, Linkedin, Twitter, Clock, Users, ShieldCheck, Activity, Copy, RefreshCw, ThumbsUp, Eye, FileText, AlignLeft, Bold, Italic, Link as LinkIcon, Youtube
} from 'lucide-react';
import Spline from '@splinetool/react-spline';

// --- 3D Logo Component ---
export const AmplifyLogo3D: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`relative ${className}`}>
        <div className="absolute inset-0 pointer-events-none"></div> 
         <Spline
        scene="https://prod.spline.design/DIJJCbomtTdoIowC/scene.splinecode" 
      />
    </div>
  );
};

// --- Logo Marquee ---
const LOGOS = [
  "Acme Corp", "GlobalTech", "Nebula", "SaaS Flow", "FoxRun", "Circle", "Vertex", "Oasis", "Fusion", "Dynamo"
];

export const LogoMarquee: React.FC = () => {
  return (
    <div className="w-full overflow-hidden opacity-90 hover:opacity-100 transition-opacity duration-300">
      <div className="flex animate-marquee whitespace-nowrap hover:[animation-play-state:paused] items-center py-2">
        {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
          <div key={i} className="group mx-8 md:mx-10 flex items-center gap-3" tabIndex={0}>
             <div className="w-7 h-7 rounded-md bg-gray-200 border border-gray-300 shadow-sm filter grayscale transition-[filter] duration-300 ease-in-out group-hover:grayscale-0 group-focus:grayscale-0 group-active:grayscale-0" />
             <span className="text-base md:text-lg font-display font-bold text-gray-800">{logo}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Hero Dashboard Visual ---
export const DashboardVisual: React.FC = () => {
  const [activeView, setActiveView] = useState(0);
  const VIEW_DURATION = 4500; // 4.5s per view
  
  // Define the loop cycle steps
  const views = [
    { id: 'calendar', label: 'Calendar', icon: Calendar },
    { id: 'writer', label: 'AI Writer', icon: PenTool },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'publish', label: 'Publishing', icon: Send },
    { id: 'creative', label: 'Creative', icon: ImageIcon }
  ];
  
  // Auto-cycle through dashboard views
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveView((prev) => (prev + 1) % views.length);
    }, VIEW_DURATION); 
    return () => clearInterval(interval);
  }, [views.length]);

  // Content transition variants
  const contentVariants = {
    initial: { opacity: 0, x: 20, filter: 'blur(4px)' },
    animate: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] as const } },
    exit: { opacity: 0, x: -20, filter: 'blur(4px)', transition: { duration: 0.3, ease: 'easeIn' as const } }
  };

  return (
    <div className="relative w-full max-w-[1000px] mx-auto mt-10 mb-20 z-20 perspective-1000">
      
      {/* --- Background Glow --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-ai-superpowers blur-[140px] rounded-full opacity-[0.22] animate-pulse-glow-soft -z-10" />
      
      {/* --- Wrapper for entrance animation --- */}
      <div className="relative">

        {/* ==========================================
            FLOATING WIDGETS (Outside Dashboard)
           ========================================== */}

        {/* 1. Campaign Optimized (Top Right) */}
        <motion.div 
            className="absolute -top-16 -right-4 md:-right-20 lg:-right-32 z-30 hidden md:block"
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] p-4 w-64 border border-white/60 ring-1 ring-white/60">
                <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shrink-0 shadow-lg shadow-primary/30">
                        <Sparkles size={18} className="text-white" />
                    </div>
                    <div>
                        <div className="text-sm font-bold text-gray-900">Campaign Optimized</div>
                        <div className="text-xs text-gray-500 mt-1 leading-snug">
                            AI adjusted copy for <span className="text-green-600 font-bold">+15% CTR</span>.
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>

        {/* 2. Brand Voice (Top Left) */}
        <motion.div 
            className="absolute top-4 -left-6 md:-left-20 lg:-left-36 z-30 hidden md:flex items-center gap-3"
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_15px_35px_-10px_rgba(0,0,0,0.12)] p-3 border border-white/50 ring-1 ring-gray-100 flex items-center gap-3 pr-6">
                <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 border border-purple-100">
                    <Mic size={18} />
                </div>
                <div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Brand Voice</div>
                    <div className="text-sm font-bold text-gray-900">Friendly & Pro</div>
                </div>
                <div className="ml-2 px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded-full">98% Match</div>
            </div>
        </motion.div>

        {/* 3. ROI Indicator (Bottom Right) */}
        <motion.div 
             className="absolute bottom-20 -right-8 md:-right-16 lg:-right-24 z-30 hidden md:block"
             animate={{ y: [5, -15, 5] }}
             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
             <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_20px_40px_-10px_rgba(20,83,45,0.15)] p-4 border border-white/50 ring-1 ring-gray-100 transform rotate-2">
                 <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-bold text-gray-500">ROI Forecast</span>
                 </div>
                 <div className="text-3xl font-display font-bold text-gray-900 flex items-center gap-1">
                    +324% <ArrowUpRight size={22} className="text-green-500" />
                 </div>
             </div>
        </motion.div>
        
        {/* 4. Content Score (Middle Right) */}
        <motion.div 
             className="absolute top-32 -right-12 md:-right-24 lg:-right-36 z-20 hidden md:block"
             animate={{ x: [-5, 5, -5] }}
             transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
             <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-3 border border-white/50 w-40">
                 <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-bold text-gray-400 uppercase">Content Score</span>
                    <Activity size={12} className="text-primary" />
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10">
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                            <path className="text-gray-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                            <path className="text-primary" strokeDasharray="92, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold">92</div>
                    </div>
                    <div className="text-xs font-medium text-gray-600">Excellent</div>
                 </div>
             </div>
        </motion.div>

        {/* 5. Team Pulse (Top Center-Left) */}
        <motion.div 
             className="absolute -top-10 left-32 z-10 hidden lg:flex items-center gap-2"
             animate={{ y: [3, -3, 3] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        >
             <div className="bg-white/80 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-md border border-gray-100 flex items-center gap-2">
                 <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                        <div key={i} className="w-6 h-6 rounded-full border border-white bg-gray-200 overflow-hidden">
                           <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 34}`} alt="avatar" />
                        </div>
                    ))}
                 </div>
                 <span className="text-[10px] font-bold text-gray-500">3 editors active</span>
             </div>
        </motion.div>

        {/* 6. Active Platforms (Bottom Left) */}
        <motion.div 
             className="absolute bottom-16 -left-8 md:-left-24 lg:-left-32 z-20 hidden md:block"
             animate={{ y: [-6, 6, -6] }}
             transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        >
             <div className="bg-white/95 backdrop-blur-xl rounded-xl shadow-lg p-3 border border-white/50 flex flex-col gap-2 w-32">
                 <span className="text-[10px] font-bold text-gray-400 uppercase text-center">Connected</span>
                 <div className="flex justify-center gap-2">
                    <div className="p-1.5 bg-pink-50 rounded-lg text-pink-500"><Instagram size={14} /></div>
                    <div className="p-1.5 bg-blue-50 rounded-lg text-blue-600"><Linkedin size={14} /></div>
                    <div className="p-1.5 bg-black/5 rounded-lg text-black"><Twitter size={14} /></div>
                 </div>
                 <div className="flex items-center justify-center gap-1 mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[9px] text-green-600 font-bold">Sync Active</span>
                 </div>
             </div>
        </motion.div>
        
        {/* 7. Smart Schedule (Middle Left) */}
         <motion.div 
             className="absolute top-1/2 -translate-y-1/2 -left-10 md:-left-28 lg:-left-40 z-20 hidden md:block"
             animate={{ x: [0, 8, 0] }}
             transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        >
             <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-3 border border-purple-100 flex items-center gap-3">
                 <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-secondary flex flex-col items-center justify-center text-white shadow-md">
                     <span className="text-[8px] font-bold uppercase">Nov</span>
                     <span className="text-sm font-bold leading-none">14</span>
                 </div>
                 <div>
                     <div className="flex items-center gap-1 text-[10px] font-bold text-primary mb-0.5">
                        <Clock size={10} /> Smart Post
                     </div>
                     <div className="text-xs font-bold text-gray-900">Best Time: 2:00 PM</div>
                 </div>
             </div>
        </motion.div>


        {/* ==========================================
            MAIN DASHBOARD CONTAINER (Dynamic Content)
           ========================================== */}
        <div className="relative bg-white rounded-2xl shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] border border-gray-200 overflow-hidden aspect-[16/10] z-10 flex flex-col transition-all duration-300">
             
             {/* Internal Header */}
             <div className="h-14 border-b border-gray-100 bg-white flex items-center justify-between px-4 shrink-0 relative z-20">
                 <div className="flex items-center gap-4">
                     <div className="flex gap-1.5">
                         <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                         <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                         <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                     </div>
                     <span className="text-xs font-bold text-gray-400 hidden sm:block">Amplify Workspace</span>
                 </div>
                 <div className="flex items-center gap-3 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100 w-64 shadow-inner">
                     <Search size={14} className="text-gray-400" />
                     <span className="text-xs text-gray-400">Search campaigns...</span>
                 </div>
                 <div className="flex items-center gap-3">
                      <div className="relative">
                        <Bell size={16} className="text-gray-400" />
                        <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-red-500 rounded-full border border-white" />
                      </div>
                      <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-primary to-secondary p-[1px]">
                         <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
                         </div>
                      </div>
                 </div>
             </div>

             {/* Internal Layout */}
             <div className="flex flex-1 overflow-hidden">
                 {/* Sidebar */}
                 <div className="w-16 md:w-48 border-r border-gray-100 bg-gray-50/80 flex flex-col py-4 shrink-0 transition-all duration-300 z-10">
                     <div className="px-4 mb-6 hidden md:block">
                         <div className="bg-white border border-gray-200 rounded-lg p-2 shadow-sm flex items-center gap-2">
                             <div className="w-6 h-6 rounded bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-[10px] font-bold">A</div>
                             <div>
                                 <div className="text-[10px] font-bold text-gray-900 leading-none">Acme Corp</div>
                                 <div className="text-[8px] text-gray-400">Pro Plan</div>
                             </div>
                             <MoreHorizontal size={12} className="ml-auto text-gray-400" />
                         </div>
                     </div>
                     <div className="flex flex-col gap-1 px-2">
                         {views.map((item, i) => {
                           const isActive = i === activeView;
                           const Icon = item.icon;
                           
                           return (
                             <div key={i} className={`relative flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-300 group ${isActive ? 'text-primary' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'}`}>
                                 {isActive && (
                                     <>
                                         <motion.div 
                                            layoutId="sidebar-bg"
                                            className="absolute inset-0 bg-white shadow-sm ring-1 ring-black/5 rounded-lg z-0"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                         />
                                         {/* Progress Bar for Active Tab */}
                                         <motion.div 
                                            initial={{ width: "0%" }}
                                            animate={{ width: "100%" }}
                                            transition={{ duration: VIEW_DURATION / 1000, ease: "linear" }}
                                            className="absolute bottom-0 left-2 h-0.5 bg-primary/20 rounded-full z-10"
                                            style={{ maxWidth: 'calc(100% - 16px)' }}
                                         />
                                     </>
                                 )}
                                 <div className="relative z-10 flex items-center gap-3">
                                     <Icon size={18} className={`${isActive ? 'text-primary scale-110' : 'text-gray-400 group-hover:text-gray-600'} transition-transform duration-300`} />
                                     <span className="text-sm font-medium hidden md:block">{item.label}</span>
                                 </div>
                             </div>
                           );
                         })}
                     </div>
                 </div>

                 {/* Content Area with Transition */}
                 <div className="flex-1 bg-white relative overflow-hidden p-6">
                     <AnimatePresence mode="wait">
                        
                        {/* VIEW 1: CALENDAR (Enhanced) */}
                        {activeView === 0 && (
                          <motion.div 
                            key="view-calendar"
                            variants={contentVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="h-full flex flex-col"
                          >
                             <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-bold text-gray-900">November 2024</h2>
                                <div className="flex gap-2">
                                   <div className="px-3 py-1 rounded-md bg-gray-100 text-xs font-bold text-gray-500">Month</div>
                                   <div className="px-3 py-1 rounded-md bg-primary text-xs font-bold text-white flex items-center gap-1 shadow-sm"><Sparkles size={10} /> Auto-Fill</div>
                                </div>
                             </div>
                             <div className="flex-1 bg-white border border-gray-100 rounded-xl overflow-hidden flex flex-col shadow-sm">
                                <div className="grid grid-cols-7 border-b border-gray-100 bg-gray-50">
                                   {['S','M','T','W','T','F','S'].map((d, idx) => (
                                      <div key={`weekday-${idx}`} className="py-2 text-center text-[10px] font-bold text-gray-400">{d}</div>
                                   ))}
                                </div>
                                <div className="flex-1 grid grid-cols-7 grid-rows-4">
                                   {Array.from({ length: 28 }).map((_, i) => (
                                      <div key={i} className="border-r border-b border-gray-50 p-1 relative hover:bg-gray-50 transition-colors">
                                         <span className="text-[9px] text-gray-400 ml-1">{i + 1}</span>
                                         {[3, 8, 12, 15, 18, 22, 25].includes(i) && (
                                            <motion.div 
                                               initial={{ scale: 0, opacity: 0 }} 
                                               animate={{ scale: 1, opacity: 1 }} 
                                               transition={{ delay: i * 0.02 }}
                                               className={`mt-1 w-full p-1.5 rounded-md border shadow-sm cursor-pointer hover:shadow-md transition-all flex flex-col gap-1 ${
                                                   i % 3 === 0 ? 'bg-purple-50 border-purple-100' : 
                                                   i % 2 === 0 ? 'bg-blue-50 border-blue-100' : 'bg-green-50 border-green-100'
                                               }`}
                                            >
                                               <div className="flex items-center gap-1">
                                                  {i % 3 === 0 ? <Instagram size={8} className="text-pink-500" /> : 
                                                   i % 2 === 0 ? <Linkedin size={8} className="text-blue-600" /> : <Twitter size={8} className="text-black" />}
                                                  <span className="text-[7px] font-bold text-gray-700 truncate">
                                                    {i % 3 === 0 ? "Product Teaser" : i % 2 === 0 ? "Founder Story" : "Market Update"}
                                                  </span>
                                               </div>
                                               <div className="h-1 w-2/3 bg-gray-200 rounded-full opacity-60" />
                                            </motion.div>
                                         )}
                                      </div>
                                   ))}
                                </div>
                             </div>
                          </motion.div>
                        )}

                        {/* VIEW 2: AI WRITER (Enhanced) */}
                        {activeView === 1 && (
                            <motion.div 
                                key="view-writer"
                                variants={contentVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="h-full flex flex-col"
                            >
                                <div className="flex justify-between items-center mb-3 border-b border-gray-100 pb-2">
                                    <div className="flex items-center gap-2">
                                        <div className="p-1.5 bg-primary/10 rounded-md text-primary"><PenTool size={14} /></div>
                                        <span className="text-sm font-bold text-gray-900">Post Generator</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded text-[10px] font-bold text-gray-500 border border-gray-100">
                                            <AlignLeft size={10} /> <Bold size={10} /> <Italic size={10} /> <LinkIcon size={10} />
                                        </div>
                                        <div className="flex items-center gap-1 bg-purple-50 px-2 py-1 rounded text-[10px] font-bold text-purple-600 border border-purple-100">
                                            Tone: Professional
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 bg-gray-50/50 rounded-xl p-6 border border-gray-100 relative overflow-hidden">
                                    <div className="space-y-4 max-w-lg">
                                        <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm mb-4">
                                            <span className="text-[10px] font-bold text-gray-400 uppercase">Prompt</span>
                                            <div className="text-xs text-gray-700 font-medium">Write a LinkedIn post about our Q4 product launch focusing on efficiency.</div>
                                        </div>

                                        <div className="space-y-2">
                                            <motion.div 
                                                initial={{ opacity: 0 }} 
                                                animate={{ opacity: 1 }} 
                                                transition={{ delay: 0.2 }}
                                                className="text-sm font-bold text-gray-800"
                                            >
                                                🚀 Ready to scale your marketing in Q4?
                                            </motion.div>
                                            <motion.div 
                                                initial={{ opacity: 0 }} 
                                                animate={{ opacity: 1 }} 
                                                transition={{ delay: 0.5 }}
                                                className="text-xs text-gray-600 leading-relaxed"
                                            >
                                                We're thrilled to announce the new Amplify engine. It's not just about AI; it's about giving your team superpowers.
                                            </motion.div>
                                            <motion.div 
                                                initial={{ width: 0 }}
                                                animate={{ width: "90%" }}
                                                transition={{ duration: 1, delay: 0.8 }}
                                                className="h-2 bg-gray-200 rounded-full mt-2" 
                                            />
                                            <motion.div 
                                                initial={{ width: 0 }}
                                                animate={{ width: "70%" }}
                                                transition={{ duration: 0.8, delay: 1 }}
                                                className="h-2 bg-gray-200 rounded-full" 
                                            />
                                        </div>

                                        {/* AI Suggestion Bubble */}
                                        <motion.div
                                            initial={{ scale: 0.8, opacity: 0, y: 10 }}
                                            animate={{ scale: 1, opacity: 1, y: 0 }}
                                            transition={{ delay: 1.5, type: "spring" }}
                                            className="absolute top-32 right-8 bg-white shadow-lg border border-purple-100 p-3 rounded-xl rounded-tl-none max-w-[180px]"
                                        >
                                            <div className="flex items-center gap-1.5 text-primary text-[10px] font-bold mb-1">
                                                <Sparkles size={10} /> Optimization
                                            </div>
                                            <p className="text-[10px] text-gray-600 leading-relaxed">
                                                Add a statistic here to increase authority. e.g. "Teams see 40% faster output."
                                            </p>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* VIEW 3: ANALYTICS (Enhanced) */}
                        {activeView === 2 && (
                          <motion.div 
                            key="view-analytics"
                            variants={contentVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="h-full flex flex-col gap-4"
                          >
                             <div className="flex justify-between items-center">
                                <h2 className="text-lg font-bold text-gray-900">Campaign Performance</h2>
                                <div className="px-2 py-1 bg-green-50 rounded text-[10px] font-bold text-green-600 flex items-center gap-1">
                                   <Activity size={10} /> Live Data
                                </div>
                             </div>
                             
                             <div className="flex gap-4 h-full">
                                 {/* Main Chart */}
                                 <div className="flex-1 bg-white border border-gray-100 rounded-xl p-4 flex flex-col shadow-sm">
                                    <div className="flex items-end justify-between gap-2 flex-1 relative">
                                        {[40, 60, 45, 80, 55, 90, 70, 85, 60, 95].map((h, i) => (
                                        <motion.div 
                                            key={i}
                                            initial={{ height: 0 }}
                                            animate={{ height: `${h}%` }}
                                            transition={{ duration: 0.6, delay: i * 0.05, ease: "easeOut" }}
                                            className="flex-1 bg-gradient-to-t from-primary to-primary/30 rounded-t-sm relative group cursor-pointer hover:from-primary hover:to-primary"
                                        >
                                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] font-bold text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                                {h * 12}
                                            </div>
                                        </motion.div>
                                        ))}
                                    </div>
                                    <div className="border-t border-gray-100 mt-2 pt-2 flex justify-between text-[9px] text-gray-400">
                                        <span>Nov 1</span>
                                        <span>Nov 30</span>
                                    </div>
                                 </div>

                                 {/* Side Stats */}
                                 <div className="w-1/3 flex flex-col gap-2">
                                     <div className="flex-1 bg-purple-50 rounded-xl p-3 border border-purple-100 flex flex-col justify-center">
                                        <div className="text-[10px] text-purple-400 font-bold uppercase mb-1">Engagement</div>
                                        <div className="text-xl font-bold text-gray-900">8.4%</div>
                                        <div className="text-[9px] text-green-600 font-bold flex items-center gap-1"><ArrowUpRight size={8} /> +2.1%</div>
                                     </div>
                                     <div className="flex-1 bg-blue-50 rounded-xl p-3 border border-blue-100 flex flex-col justify-center">
                                        <div className="text-[10px] text-blue-400 font-bold uppercase mb-1">Audience</div>
                                        <div className="flex items-center gap-1 mb-1">
                                            <div className="w-2 h-2 rounded-full bg-blue-500" /> <span className="text-[9px] font-bold text-gray-600">US</span>
                                            <div className="w-2 h-2 rounded-full bg-blue-300" /> <span className="text-[9px] font-bold text-gray-600">EU</span>
                                        </div>
                                        <div className="w-full h-1.5 bg-white rounded-full overflow-hidden flex">
                                            <div className="w-[65%] bg-blue-500" />
                                            <div className="w-[35%] bg-blue-300" />
                                        </div>
                                     </div>
                                 </div>
                             </div>
                          </motion.div>
                        )}

                        {/* VIEW 4: PUBLISHING (Enhanced) */}
                        {activeView === 3 && (
                            <motion.div 
                                key="view-publish"
                                variants={contentVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="h-full flex flex-col"
                            >
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-lg font-bold text-gray-900">Publish Queue</h2>
                                    <div className="flex gap-2">
                                        <div className="p-1.5 bg-gray-100 rounded-md text-gray-500"><Grid size={12} /></div>
                                        <div className="p-1.5 bg-primary text-white rounded-md shadow-sm"><AlignLeft size={12} /></div>
                                    </div>
                                </div>
                                <div className="space-y-2.5">
                                    {[
                                        { name: 'Instagram Story', time: '10:00 AM', status: 'Published', icon: Instagram, color: 'text-pink-500' },
                                        { name: 'LinkedIn Article', time: '1:00 PM', status: 'Scheduled', icon: Linkedin, color: 'text-blue-700' },
                                        { name: 'X (Twitter) Thread', time: '3:30 PM', status: 'Scheduled', icon: Twitter, color: 'text-black' },
                                        { name: 'YouTube Short', time: '5:00 PM', status: 'Drafting', icon: Youtube, color: 'text-red-600' },
                                    ].map((item, i) => (
                                        <motion.div 
                                            key={i}
                                            initial={{ x: -10, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="flex items-center justify-between p-2.5 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow group"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className={`w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                                                    <item.icon size={16} />
                                                </div>
                                                <div>
                                                    <div className="text-xs font-bold text-gray-900">{item.name}</div>
                                                    <div className="text-[10px] text-gray-400 font-medium">{item.time}</div>
                                                </div>
                                            </div>
                                            <div className={`text-[9px] font-bold px-2 py-1 rounded-full border ${
                                                item.status === 'Published' ? 'bg-green-50 text-green-600 border-green-100' : 
                                                item.status === 'Scheduled' ? 'bg-blue-50 text-blue-600 border-blue-100' : 
                                                'bg-gray-50 text-gray-500 border-gray-200'
                                            }`}>
                                                {item.status}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* VIEW 5: CREATIVE (Updated) */}
                        {activeView === 4 && (
                            <motion.div 
                                key="view-creative"
                                variants={contentVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="h-full flex flex-col"
                            >
                                <div className="flex justify-between items-center mb-4">
                                    <div>
                                        <h2 className="text-lg font-bold text-gray-900">Ad Creative Variants</h2>
                                        <p className="text-xs text-gray-400">Campaign: Q4 Growth</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="px-2 py-1 bg-purple-50 text-purple-600 rounded-md text-xs font-bold flex items-center gap-1">
                                            <Sparkles size={10} /> 3 Variants
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex gap-4 overflow-x-auto pb-2">
                                    {/* Variant A - Instagram */}
                                    <div className="min-w-[200px] w-1/3 bg-white border border-gray-200 rounded-xl p-3 shadow-sm relative group cursor-pointer hover:shadow-md transition-shadow">
                                        <div className="absolute -top-2 -right-2 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm z-10">
                                            Winner (94)
                                        </div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                                                <Instagram size={12} className="text-pink-500" />
                                            </div>
                                            <span className="text-[10px] font-bold text-gray-500">Instagram Feed</span>
                                        </div>
                                        <div className="aspect-square bg-gray-100 rounded-lg mb-2 relative overflow-hidden group/image">
                                            <img 
                                                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600" 
                                                alt="Ad Creative" 
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                                            <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur px-2 py-1 rounded text-[8px] font-bold shadow-sm">
                                                Amplify.ai
                                            </div>
                                        </div>
                                        <div className="space-y-1 mb-2">
                                            <div className="text-[10px] font-bold text-gray-800 leading-tight">Scale your marketing without the burnout. 🚀</div>
                                            <div className="text-[9px] text-gray-500 leading-snug">Meet the AI OS that plans, writes, and schedules for you.</div>
                                        </div>
                                        <div className="bg-blue-50 text-blue-600 text-[9px] font-bold py-1.5 text-center rounded hover:bg-blue-100 transition-colors">
                                            Start Free Trial
                                        </div>
                                    </div>

                                    {/* Variant B - LinkedIn */}
                                    <div className="min-w-[200px] w-1/3 bg-white border border-gray-200 rounded-xl p-3 shadow-sm opacity-90 hover:opacity-100 transition-opacity relative group cursor-pointer hover:shadow-md">
                                         <div className="absolute -top-2 -right-2 bg-gray-200 text-gray-500 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm z-10">
                                            Score: 82
                                        </div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                                                <Linkedin size={12} className="text-blue-700" />
                                            </div>
                                            <span className="text-[10px] font-bold text-gray-500">LinkedIn Ad</span>
                                        </div>
                                        <div className="aspect-video bg-gray-100 rounded-lg mb-2 relative overflow-hidden group/image">
                                             <img 
                                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600" 
                                                alt="Ad Creative" 
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110"
                                             />
                                             <div className="absolute inset-0 bg-blue-900/30 mix-blend-multiply" />
                                             <div className="absolute inset-0 flex items-center justify-center">
                                                 <span className="text-[10px] font-bold text-white uppercase tracking-widest border border-white/50 px-2 py-1 backdrop-blur-sm rounded">Efficiency</span>
                                             </div>
                                        </div>
                                        <div className="space-y-1 mb-2">
                                            <div className="text-[10px] font-bold text-gray-800 leading-tight">Stop guessing. Start growing.</div>
                                            <div className="text-[9px] text-gray-500 leading-snug">Data-driven campaigns powered by Google Gemini.</div>
                                        </div>
                                        <div className="bg-gray-50 text-gray-600 text-[9px] font-bold py-1.5 text-center rounded border border-gray-100">
                                            Learn More
                                        </div>
                                    </div>

                                    {/* Variant C - X (Twitter) */}
                                    <div className="min-w-[200px] w-1/3 bg-white border border-gray-200 rounded-xl p-3 shadow-sm opacity-90 hover:opacity-100 transition-opacity relative group cursor-pointer hover:shadow-md">
                                        <div className="absolute -top-2 -right-2 bg-gray-200 text-gray-500 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm z-10">
                                            Score: 76
                                        </div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                                                <Twitter size={12} className="text-black" />
                                            </div>
                                            <span className="text-[10px] font-bold text-gray-500">X (Twitter)</span>
                                        </div>
                                        <div className="aspect-video bg-gray-100 rounded-lg mb-2 relative overflow-hidden group/image">
                                            <img 
                                                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600" 
                                                alt="Ad Creative" 
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/40" />
                                            <div className="absolute bottom-2 left-2 text-white text-[12px] font-bold leading-none">
                                                10x <br/>Faster.
                                            </div>
                                        </div>
                                        <div className="space-y-1 mb-2">
                                            <div className="text-[10px] font-bold text-gray-800 leading-tight">The secret weapon for modern marketers.</div>
                                            <div className="text-[9px] text-gray-500 leading-snug">Join 12,000+ teams using Amplify today.</div>
                                        </div>
                                        <div className="bg-gray-50 text-gray-600 text-[9px] font-bold py-1.5 text-center rounded border border-gray-100">
                                            Get Started
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                     </AnimatePresence>
                 </div>
             </div>

        </div>
      </div>
    </div>
  );
};
