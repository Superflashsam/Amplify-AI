
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
   ArrowRight, Settings, Sparkles, Send, BarChart,
   CheckCircle2, Layers, Zap, ChevronDown, RefreshCw,
   Edit3, MoreHorizontal, Calendar, TrendingUp
} from 'lucide-react';
import { AICalendarCard } from './AICalendarCard';

// --- Step 1: Goal Configuration Visualization ---
const Step1Visual = () => {
   const [stage, setStage] = useState<'idle' | 'selecting' | 'generating' | 'success'>('idle');

   useEffect(() => {
      const sequence = async () => {
         // Start loop
         while (true) {
            setStage('idle');
            await new Promise(r => setTimeout(r, 1000));

            setStage('selecting');
            await new Promise(r => setTimeout(r, 2000));

            setStage('generating');
            await new Promise(r => setTimeout(r, 1500));

            setStage('success');
            await new Promise(r => setTimeout(r, 3000));
         }
      };
      sequence();
   }, []);

   return (
      <div className="relative w-full h-full p-6 flex items-center justify-center bg-slate-50/50">
         <motion.div
            layout
            className="bg-white w-full max-w-[280px] rounded-xl shadow-xl border border-gray-100 p-5 relative z-10 overflow-hidden"
         >
            {/* Header */}
            <div className="flex items-center justify-between mb-4 border-b border-gray-50 pb-3">
               <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-blue-50 text-blue-500 flex items-center justify-center">
                     <Settings size={14} />
                  </div>
                  <span className="text-xs font-bold text-gray-700">Campaign Setup</span>
               </div>
               <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-gray-200" />
                  <div className="w-2 h-2 rounded-full bg-gray-200" />
               </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-4 mb-6">
               {/* Field 1 */}
               <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Goal</label>
                  <div className="relative">
                     <div className="h-9 w-full bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-between px-3 text-xs text-gray-700">
                        <span className={stage === 'idle' ? 'text-gray-400' : 'text-gray-900'}>
                           {stage === 'idle' ? 'Select objective...' : 'Drive Q4 Sales'}
                        </span>
                        <ChevronDown size={14} className="text-gray-400" />
                     </div>
                     {stage === 'selecting' && (
                        <motion.div
                           initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                           className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-100 shadow-lg rounded-lg z-20 py-1"
                        >
                           <div className="px-3 py-1.5 hover:bg-gray-50 text-xs text-gray-600">Brand Awareness</div>
                           <div className="px-3 py-1.5 bg-blue-50 text-blue-600 text-xs font-bold flex justify-between items-center">
                              Drive Q4 Sales <CheckCircle2 size={10} />
                           </div>
                           <div className="px-3 py-1.5 hover:bg-gray-50 text-xs text-gray-600">Lead Generation</div>
                        </motion.div>
                     )}
                  </div>
               </div>

               {/* Field 2 */}
               <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Tone</label>
                  <div className="flex gap-2">
                     <motion.button
                        animate={stage !== 'idle' ? { backgroundColor: '#eff6ff', borderColor: '#bfdbfe', color: '#3b82f6' } : {}}
                        className="px-3 py-1.5 rounded-md border border-gray-200 text-[10px] font-bold text-gray-500 flex-1 transition-colors"
                     >
                        Professional
                     </motion.button>
                     <button className="px-3 py-1.5 rounded-md border border-gray-200 bg-gray-50 text-[10px] font-bold text-gray-400 flex-1">
                        Casual
                     </button>
                  </div>
               </div>
            </div>

            {/* Action Button */}
            <motion.button
               animate={stage === 'generating' ? { scale: 0.98 } : { scale: 1 }}
               className={`w-full py-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-all duration-300 ${stage === 'success' ? 'bg-green-500 text-white shadow-green-200' : 'bg-gray-900 text-white shadow-[0_0_0_2px_rgba(151,125,255,0.3)] hover:shadow-[0_0_0_2px_rgba(151,125,255,0.6)]'
                  } shadow-lg`}
            >
               {stage === 'generating' ? (
                  <>
                     <RefreshCw size={12} className="animate-spin" /> Generating...
                  </>
               ) : stage === 'success' ? (
                  <>
                     <CheckCircle2 size={12} /> Strategy Ready
                  </>
               ) : (
                  <>
                     <Sparkles size={12} /> Generate Strategy
                  </>
               )}
            </motion.button>

            {/* Success Particles */}
            <AnimatePresence>
               {stage === 'success' && (
                  <>
                     {[...Array(6)].map((_, i) => (
                        <motion.div
                           key={i}
                           initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
                           animate={{ opacity: 0, scale: 1, x: (Math.random() - 0.5) * 100, y: (Math.random() - 0.5) * 100 }}
                           transition={{ duration: 0.8, ease: "easeOut" }}
                           className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-green-400 z-0"
                        />
                     ))}
                  </>
               )}
            </AnimatePresence>
         </motion.div>

         {/* Decorative Blur Orbs */}
         <div className="absolute top-10 right-10 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl" />
         <div className="absolute bottom-10 left-10 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl" />
      </div>
   );
};

// --- Step 2: Content Generation Visualization ---
const Step2Visual = () => {
   return (
      <div className="relative w-full h-full bg-slate-50/50 p-6 flex items-center justify-center overflow-hidden">
         {/* Cursor Simulation */}
         <motion.div
            animate={{
               x: [0, 80, 80, 0, 0],
               y: [0, 40, 40, 0, 0],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute z-30 pointer-events-none"
            style={{ top: '30%', left: '30%' }}
         >
            <div className="w-4 h-4 bg-gray-900 rounded-full rounded-tl-none -rotate-12 shadow-xl border-2 border-white relative">
               <div className="absolute top-full left-2 bg-gray-900 text-white text-[9px] font-bold px-1.5 py-0.5 rounded rounded-tl-none whitespace-nowrap">
                  AI Editor
               </div>
            </div>
         </motion.div>

         <div className="grid grid-cols-2 gap-3 w-full max-w-[280px] relative z-10">
            {/* Card 1: Text Post */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
               className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 col-span-2 relative group overflow-hidden"
            >
               <div className="flex justify-between items-start mb-2">
                  <div className="flex gap-1.5">
                     <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />
                     <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />
                  </div>
                  <div className="px-1.5 py-0.5 bg-gradient-premium text-white text-[8px] font-bold rounded flex items-center gap-1 shadow-md shadow-primary/20">
                     <Sparkles size={8} fill="currentColor" /> Auto-Fix
                  </div>
               </div>
               <div className="space-y-1.5">
                  <div className="h-2 w-3/4 bg-gray-100 rounded-full" />
                  <div className="h-2 w-full bg-gray-100 rounded-full" />
                  <motion.div
                     animate={{ width: ["40%", "90%", "40%"], backgroundColor: ["#f3f4f6", "#dbeafe", "#f3f4f6"] }}
                     transition={{ duration: 4, repeat: Infinity }}
                     className="h-2 rounded-full"
                  />
               </div>
               {/* Edit Hover Effect */}
               <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-blue-600 text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1 transform scale-90 group-hover:scale-100 transition-transform">
                     <Edit3 size={10} /> Edit
                  </button>
               </div>
            </motion.div>

            {/* Card 2: Image Post */}
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.2 }}
               className="bg-white p-2 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-2 relative group"
            >
               <div className="aspect-square rounded-lg bg-gradient-to-br from-indigo-50 to-pink-50 flex items-center justify-center relative overflow-hidden">
                  <Layers size={16} className="text-indigo-200" />
                  <motion.div
                     animate={{ opacity: [0, 0.5, 0] }}
                     transition={{ duration: 3, repeat: Infinity }}
                     className="absolute inset-0 bg-white"
                  />
               </div>
               <div className="h-1.5 w-2/3 bg-gray-100 rounded-full" />
               <button className="absolute top-2 right-2 p-1 bg-white/80 backdrop-blur rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                  <RefreshCw size={10} className="text-gray-500" />
               </button>
            </motion.div>

            {/* Card 3: Status */}
            <motion.div
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.3 }}
               className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between"
            >
               <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center text-green-500">
                     <CheckCircle2 size={12} />
                  </div>
                  <div className="text-[9px] font-bold text-gray-500">Ready</div>
               </div>
               <div className="text-[10px] font-bold text-gray-900 leading-tight">
                  30 Posts Generated
               </div>
               <div className="mt-2 w-full bg-gray-100 h-1 rounded-full overflow-hidden">
                  <motion.div
                     initial={{ width: 0 }}
                     whileInView={{ width: "100%" }}
                     transition={{ duration: 1.5, delay: 0.5 }}
                     className="h-full bg-green-500"
                  />
               </div>
            </motion.div>
         </div>
         <div className="absolute right-6 top-6 z-20">
            <AICalendarCard />
         </div>
      </div>
   );
};

// --- Step 3: Publishing Dashboard Visualization ---
const Step3Visual = () => {
   return (
      <div className="relative w-full h-full bg-slate-50/50 p-6 flex flex-col justify-end overflow-hidden">
         {/* Main Dashboard Card */}
         <div className="bg-white w-full rounded-xl shadow-xl border border-gray-100 p-4 relative z-10">

            {/* Header Stats */}
            <div className="flex justify-between items-end mb-6">
               <div>
                  <div className="flex items-center gap-1.5 mb-1">
                     <BarChart size={12} className="text-gray-400" />
                     <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Engagement</span>
                  </div>
                  <div className="text-2xl font-sans font-bold text-gray-900">
                     24.8K
                  </div>
               </div>
               <div className="flex flex-col items-end">
                  <span className="text-[10px] font-bold text-green-500 bg-green-50 px-1.5 py-0.5 rounded-full mb-1 flex items-center gap-0.5">
                     <TrendingUp size={8} /> +12.5%
                  </span>
                  <span className="text-[9px] text-gray-400">vs last month</span>
               </div>
            </div>

            {/* Animated Graph */}
            <div className="h-24 w-full flex items-end justify-between gap-1 relative">
               {/* Grid Lines */}
               <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                  <div className="w-full h-px bg-gray-50" />
                  <div className="w-full h-px bg-gray-50" />
                  <div className="w-full h-px bg-gray-50" />
               </div>

               {/* Bars */}
               {[35, 55, 45, 70, 60, 85, 100].map((h, i) => (
                  <motion.div
                     key={i}
                     initial={{ height: "10%" }}
                     whileInView={{ height: `${h}%` }}
                     transition={{ duration: 0.8, delay: i * 0.1, ease: "backOut" }}
                     className="w-full bg-gradient-to-t from-indigo-500 to-purple-500 rounded-t-sm relative group"
                  >
                     <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[9px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {h * 120}
                     </div>
                  </motion.div>
               ))}
            </div>

            {/* Timeline / Calendar Strip */}
            <div className="mt-4 pt-4 border-t border-gray-50 flex justify-between">
               {['M', 'T', 'W', 'T', 'F'].map((day, i) => (
                  <div key={i} className="flex flex-col items-center gap-1">
                     <span className="text-[9px] font-bold text-gray-400">{day}</span>
                     <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold ${i === 3 ? 'bg-green-500 text-white shadow-md shadow-green-200' : 'bg-gray-50 text-gray-400'}`}>
                        {i === 3 ? <CheckCircle2 size={10} /> : i + 12}
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* Floating Notification */}
         <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute top-8 right-8 bg-gray-900 text-white px-3 py-2 rounded-lg shadow-[0_0_15px_rgba(151,125,255,0.3)] border border-primary/30 flex items-center gap-2 z-20"
         >
            <div className="w-2 h-2 rounded-full bg-gradient-premium animate-pulse shadow-[0_0_8px_#E02F75]" />
            <span className="text-[10px] font-bold">Published Just Now</span>
         </motion.div>

         {/* Background Glow */}
         <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-indigo-50/50 to-transparent" />
      </div>
   );
};


export const HowItWorksSection: React.FC = () => {
   const steps = [
      {
         id: 1,
         title: "Tell Amplify your goals",
         description: "Enter business niche, tone of voice, and campaign objectives. Amplify instantly builds your content strategy.",
         visual: <Step1Visual />
      },
      {
         id: 2,
         title: "Generate & customize content",
         description: "Amplify auto-creates a 30-day calendar, ad copy, creatives, and post variations with one click.",
         visual: <Step2Visual />
      },
      {
         id: 3,
         title: "Publish & optimize automatically",
         description: "Schedule and publish across platforms and monitor analytics & recommendations in real time.",
         visual: <Step3Visual />
      }
   ];

   return (
      <section className="py-24 bg-white relative overflow-hidden">
         {/* Background Decor */}
         <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
         <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(120,119,198,0.03),transparent_50%)]" />

         <div className="max-w-[1280px] mx-auto px-6 relative z-10">

            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-20">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-100 text-xs font-bold text-gray-500 mb-6"
               >
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Simple 3-Step Process
               </motion.div>
               <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="font-serif font-semibold text-[42px] lg:text-[56px] text-dark mb-6 leading-[1.15] tracking-[-0.015em]"
               >
                  How <span className="heading-gradient">Amplify</span> Works
               </motion.h2>
               <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-gray-600 leading-relaxed"
               >
                  Work smarter, grow faster, and publish with confidence—powered by AI intelligence.
               </motion.p>
            </div>

            {/* Workflow Steps Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mb-16">
               {steps.map((step, index) => (
                  <motion.div
                     key={step.id}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: index * 0.2, duration: 0.6 }}
                     className="flex flex-col h-full group"
                  >
                     {/* Visual Container */}
                     <div className="bg-slate-50 rounded-2xl border border-gray-100 shadow-sm aspect-[4/3] lg:aspect-[16/10] overflow-hidden mb-8 relative transition-all duration-500 group-hover:shadow-xl group-hover:border-primary/10 group-hover:-translate-y-1">
                        {step.visual}

                        {/* Hover Glow */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                     </div>

                     {/* Content */}
                     <div className="px-2">
                        <div className="flex items-center gap-4 mb-4">
                           <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-gray-100 shadow-sm text-gray-900 font-display font-bold text-lg group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors duration-300">
                              {step.id}
                           </div>
                           <h3 className="font-sans font-bold text-xl text-gray-900">
                              {step.title.split(' ').slice(0, -1).join(' ')} <span className="gradient-text">{step.title.split(' ').slice(-1)[0]}</span>
                           </h3>
                        </div>
                        <p className="text-gray-500 leading-relaxed pl-14 text-base">
                           {step.description}
                        </p>
                     </div>

                     {/* Connector Line (Desktop) */}
                     {index !== steps.length - 1 && (
                        <div className="hidden lg:block absolute top-[20%] right-[-20px] w-10 h-[2px] bg-gradient-to-r from-gray-200 to-transparent z-0" />
                     )}
                  </motion.div>
               ))}
            </div>

            {/* CTA */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.6 }}
               className="flex flex-col items-center gap-4"
            >
               <button aria-label="Try Amplify Free" className="group relative px-8 py-4 btn-gradient rounded-full text-lg font-bold shadow-xl shadow-gray-200 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 overflow-hidden focus-ring">
                  <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative flex items-center gap-2 playfair-cta text-white text-shadow-sm whitespace-nowrap z-10">
                     Try Amplify Free <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
               </button>
               <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide flex items-center gap-2">
                  <CheckCircle2 size={12} className="text-green-500" /> No credit card required
               </span>
            </motion.div>

         </div>
      </section>
   );
};
