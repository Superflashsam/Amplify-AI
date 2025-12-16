
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
   Zap, Rocket, Mic, Users, BarChart,
   ArrowRight, Sparkles, Check
} from 'lucide-react';

// --- VISUAL COMPONENTS (3D Cards) ---

const VisualCard = ({ children, className = "", delay = 0, z = 0, tiltX = 0, tiltY = 0 }: any) => {
   return (
      <motion.div
         animate={{
            y: [-10, 10, -10],
            rotateX: [tiltX, tiltX + 2, tiltX],
            rotateY: [tiltY, tiltY + 2, tiltY],
         }}
         transition={{
            duration: 6,
            delay: delay,
            repeat: Infinity,
            ease: "easeInOut"
         }}
         className={`absolute rounded-2xl shadow-2xl border border-white/20 backdrop-blur-md overflow-hidden ${className}`}
         style={{ zIndex: z, transformStyle: 'preserve-3d' }}
      >
         {children}
      </motion.div>
   );
};

// 1. Content Engine
const VisualContentEngine = () => (
   <div className="relative w-full h-full flex items-center justify-center perspective-[1000px]">
      {/* Background Shape */}
      <motion.div
         animate={{ rotate: 360 }}
         transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
         className="absolute w-[300px] h-[300px] rounded-full border border-dashed border-indigo-200 opacity-50"
      />

      {/* Back Card */}
      <VisualCard className="w-56 h-64 bg-slate-50 border-slate-100 top-10 right-10 opacity-60" z={10} delay={0.5} tiltX={5} tiltY={5}>
         <div className="p-4 opacity-50">
            <div className="w-12 h-12 rounded-full bg-slate-200 mb-4" />
            <div className="w-full h-2 bg-slate-200 rounded mb-2" />
            <div className="w-2/3 h-2 bg-slate-200 rounded" />
         </div>
      </VisualCard>

      {/* Main Card */}
      <VisualCard className="w-64 h-80 bg-white top-16 left-12 border-slate-100/50" z={20} delay={0} tiltX={-5} tiltY={-5}>
         <div className="h-full w-full p-5 flex flex-col relative bg-gradient-to-b from-white to-indigo-50/50">
            <div className="flex items-center justify-between mb-6">
               <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                     <Zap size={16} />
                  </div>
                  <div>
                     <div className="text-[10px] text-slate-400 font-bold uppercase">Topic</div>
                     <div className="text-xs font-bold text-slate-800">AI Trends</div>
                  </div>
               </div>
               <div className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">Ready</div>
            </div>
            <div className="space-y-3 mb-6">
               <div className="p-3 rounded-lg bg-indigo-50 border border-indigo-100">
                  <div className="h-2 w-3/4 bg-indigo-200 rounded mb-1.5" />
                  <div className="h-2 w-1/2 bg-indigo-100 rounded" />
               </div>
               <div className="p-3 rounded-lg bg-white border border-slate-100 shadow-sm">
                  <div className="h-2 w-5/6 bg-slate-200 rounded mb-1.5" />
                  <div className="h-2 w-2/3 bg-slate-100 rounded" />
               </div>
            </div>
            <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
               <span className="text-[10px] text-slate-400">Autopilot: ON</span>
               <div className="w-4 h-4 rounded-full bg-indigo-500 flex items-center justify-center">
                  <Check size={10} className="text-white" />
               </div>
            </div>
         </div>
      </VisualCard>
   </div>
);

// 2. Velocity
const VisualVelocity = () => (
   <div className="relative w-full h-full flex items-center justify-center perspective-[1000px]">
      {/* Speed Lines */}
      <div className="absolute inset-0 overflow-hidden">
         {[...Array(5)].map((_, i) => (
            <motion.div
               key={i}
               className="absolute h-px bg-pink-400 w-24 rounded-full"
               style={{ top: `${20 + i * 15}%`, left: '10%' }}
               animate={{ x: [0, 300], opacity: [0, 1, 0] }}
               transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
            />
         ))}
      </div>

      <VisualCard className="w-72 h-44 bg-white top-[25%] left-[10%]" z={20} delay={0} tiltX={10}>
         <div className="p-5 flex items-center gap-4 h-full">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white shadow-lg shadow-pink-500/30">
               <Rocket size={32} />
            </div>
            <div>
               <div className="text-sm font-bold text-slate-800 mb-1">Campaign Launch</div>
               <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                     className="h-full bg-pink-500"
                     animate={{ width: ["0%", "100%"] }}
                     transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                  />
               </div>
               <div className="text-[10px] text-slate-400 mt-1 font-medium">Processing...</div>
            </div>
         </div>
      </VisualCard>

      <VisualCard className="w-64 h-32 bg-white/80 backdrop-blur-sm top-[55%] right-[10%] border-slate-100" z={10} delay={0.3} tiltX={-5}>
         <div className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
               <div className="w-5 h-5 border-2 border-slate-300 rounded-full border-t-slate-500 animate-spin" />
            </div>
            <div>
               <div className="w-24 h-2 bg-slate-200 rounded mb-1" />
               <div className="w-16 h-2 bg-slate-100 rounded" />
            </div>
         </div>
      </VisualCard>
   </div>
);

// 3. Brand Brain
const VisualBrandBrain = () => (
   <div className="relative w-full h-full flex items-center justify-center perspective-[1000px]">
      <motion.div
         className="absolute w-[400px] h-[400px] bg-gradient-radial from-violet-500/10 to-transparent blur-3xl opacity-50"
         animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
         transition={{ duration: 4, repeat: Infinity }}
      />

      <VisualCard className="w-60 h-72 bg-slate-800 border-slate-700 top-12 left-[15%]" z={10} delay={0} tiltY={-10}>
         <div className="p-4 h-full flex flex-col">
            <div className="text-xs font-bold text-slate-500 uppercase mb-3">Brand Context</div>
            <div className="space-y-2 flex-1">
               {[1, 2, 3, 4].map(i => (
                  <div key={i} className="flex items-center gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                     <div className="h-1.5 bg-slate-700 rounded w-full" style={{ width: `${Math.random() * 50 + 40}%` }} />
                  </div>
               ))}
            </div>
         </div>
      </VisualCard>

      <VisualCard className="w-60 h-72 bg-white top-20 right-[15%]" z={20} delay={0.2} tiltY={10}>
         <div className="p-6 h-full flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-violet-500 to-fuchsia-500 flex items-center justify-center mb-4 shadow-xl shadow-violet-500/20">
               <Mic className="text-white" size={32} />
            </div>
            <h4 className="font-bold text-slate-900">Voice Match</h4>
            <div className="flex gap-1 mt-2">
               <div className="w-2 h-2 rounded-full bg-violet-500 animate-bounce" style={{ animationDelay: '0s' }} />
               <div className="w-2 h-2 rounded-full bg-fuchsia-500 animate-bounce" style={{ animationDelay: '0.1s' }} />
               <div className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce" style={{ animationDelay: '0.2s' }} />
            </div>
         </div>
      </VisualCard>
   </div>
);

// 4. Empowerment
const VisualEmpowerment = () => (
   <div className="relative w-full h-full flex items-center justify-center perspective-[1000px]">
      {/* Avatars Orbiting */}
      {[0, 120, 240].map((deg, i) => (
         <motion.div
            key={i}
            className="absolute w-16 h-16 rounded-full bg-white border-4 border-white shadow-xl flex items-center justify-center overflow-hidden z-10"
            animate={{
               rotate: 360,
               x: [Math.cos(deg * Math.PI / 180) * 120, Math.cos((deg + 360) * Math.PI / 180) * 120],
               y: [Math.sin(deg * Math.PI / 180) * 120, Math.sin((deg + 360) * Math.PI / 180) * 120],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
         >
            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 50}`} className="w-full h-full transform scale-110" alt="User" />
         </motion.div>
      ))}

      <VisualCard className="w-48 h-48 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full flex items-center justify-center" z={20} delay={0}>
         <Users size={64} className="text-white" />
      </VisualCard>
   </div>
);

// 5. Scale
const VisualScale = () => (
   <div className="relative w-full h-full flex items-center justify-center perspective-[1000px]">
      <VisualCard className="w-80 h-48 bg-white top-[25%] left-[8%]" z={10} delay={0} tiltX={5}>
         <div className="p-4 h-full relative">
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-orange-50/50 to-transparent" />
            <div className="flex items-end gap-2 h-full pb-2 px-2">
               {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                  <motion.div
                     key={i}
                     className="flex-1 bg-orange-500 rounded-t-sm opacity-80"
                     initial={{ height: 0 }}
                     animate={{ height: `${h}%` }}
                     transition={{ duration: 1, delay: i * 0.1 }}
                  />
               ))}
            </div>
         </div>
      </VisualCard>

      <VisualCard className="w-48 h-24 bg-white top-[60%] right-[10%] flex items-center gap-3 px-4 shadow-lg border border-slate-50" z={20} delay={0.5} tiltY={-10}>
         <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
            <BarChart size={20} />
         </div>
         <div>
            <div className="text-xs text-slate-400">Growth</div>
            <div className="text-lg font-bold text-slate-900">+127%</div>
         </div>
      </VisualCard>
   </div>
);


export const WhyChooseSection: React.FC = () => {
   const [activeIndex, setActiveIndex] = useState<number>(0);
   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

   useEffect(() => {
      if (!isAutoPlaying) return;
      const interval = setInterval(() => {
         setActiveIndex((prev) => (prev + 1) % 5);
      }, 4000);
      return () => clearInterval(interval);
   }, [isAutoPlaying]);

   const benefits = [
      {
         id: 'engine',
         title: "Always-on Content Engine",
         description: "Never stare at a blank page again. Amplify auto-generates on-brand ideas, drafts, and creatives 24/7.",
         visual: VisualContentEngine,
         icon: Zap
      },
      {
         id: 'velocity',
         title: "Supercharge Velocity",
         description: "Go from concept to launch in minutes. Automate specific tasks to ship campaigns 10x faster.",
         visual: VisualVelocity,
         icon: Rocket
      },
      {
         id: 'brand',
         title: "Brand Consistency",
         description: "Ensure every asset stays 100% on-brand with AI that learns your specific voice, tone, and guidelines.",
         visual: VisualBrandBrain,
         icon: Mic
      },
      {
         id: 'team',
         title: "Empower Teams",
         description: "Give everyone from interns to CMOs the power to produce agency-quality work with built-in guardrails.",
         visual: VisualEmpowerment,
         icon: Users
      },
      {
         id: 'scale',
         title: "Build for Scale",
         description: "Whether managing one brand or fifty, Amplify scales effortlessly with enterprise-grade workflows.",
         visual: VisualScale,
         icon: BarChart
      }
   ];

   return (
      <section className="py-24 bg-white text-slate-900 relative overflow-hidden">
         {/* Background Ambience */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-50 via-white to-white opacity-60" />

         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

               {/* LEFT: Accordion List */}
               <div className="space-y-8">
                  <div className="space-y-4">
                     <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight leading-tight text-slate-900">
                        Powering the next generation of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">marketing</span>
                     </h2>
                     <p className="text-lg text-slate-600 max-w-md">
                        Everything you need to scale your content operations without scaling your headcount.
                     </p>
                  </div>

                  <div className="space-y-4">
                     {benefits.map((item, index) => (
                        <div
                           key={item.id}
                           className="group cursor-pointer"
                           onClick={() => {
                              setActiveIndex(index);
                              setIsAutoPlaying(false);
                           }}
                        >
                           <div className={`p-6 rounded-2xl border transition-all duration-300 ${activeIndex === index ? 'bg-white border-indigo-100 shadow-xl shadow-indigo-100/50' : 'border-transparent hover:bg-slate-50'}`}>
                              <div className="flex items-center justify-between">
                                 <h3 className={`font-display text-xl ${activeIndex === index ? 'text-indigo-600 font-bold' : 'text-slate-600 group-hover:text-slate-900'}`}>
                                    {item.title}
                                 </h3>
                                 {activeIndex === index && (
                                    <motion.div layoutId="active-indicator" className="text-purple-600">
                                       <Sparkles size={20} />
                                    </motion.div>
                                 )}
                              </div>
                              <AnimatePresence>
                                 {activeIndex === index && (
                                    <motion.div
                                       initial={{ height: 0, opacity: 0 }}
                                       animate={{ height: 'auto', opacity: 1 }}
                                       exit={{ height: 0, opacity: 0 }}
                                       className="overflow-hidden"
                                    >
                                       <p className="pt-4 text-slate-500 leading-relaxed">
                                          {item.description}
                                       </p>
                                    </motion.div>
                                 )}
                              </AnimatePresence>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               {/* RIGHT: Visual Deck */}
               <div className="h-[600px] relative perspective-[2000px] flex items-center justify-center">
                  {/* Abstract Background Glow */}
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-[500px] h-[500px] bg-gradient-to-br from-purple-100 to-blue-100 rounded-full blur-[100px] animate-pulse" />
                  </div>

                  <AnimatePresence mode="wait">
                     <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, rotateY: -20, x: 50 }}
                        animate={{ opacity: 1, rotateY: 0, x: 0 }}
                        exit={{ opacity: 0, rotateY: 20, x: -50 }}
                        transition={{ duration: 0.5, ease: "circOut" }}
                        className="relative w-full h-full"
                     >
                        {React.createElement(benefits[activeIndex].visual)}
                     </motion.div>
                  </AnimatePresence>
               </div>

            </div>
         </div>
      </section>
   );
};
