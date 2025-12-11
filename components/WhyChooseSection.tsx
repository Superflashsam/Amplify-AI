import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
   ArrowRight, ChevronDown, Sparkles, Mic,
   Zap, Globe, BarChart, CheckCircle2,
   Rocket, Users, FileText, Image as ImageIcon, Video,
   Search, Star, Layers, Box, Trophy, Target,
   MessageSquare, Lightbulb, Heart, Check, Palette
} from 'lucide-react';

// --- 3D ILLUSTRATION COMPONENTS ---

const ContentEngineIllustration = () => {
   return (
      <div className="relative h-full w-full bg-gradient-to-br from-indigo-50/50 to-white overflow-hidden flex items-center justify-center perspective-[1200px]">
         <div className="relative w-full h-full flex items-center justify-center transform-style-3d">

            {/* Central Energy/Engine Ring */}
            <motion.div
               animate={{ rotate: 360, scale: [1, 1.05, 1] }}
               transition={{ rotate: { duration: 30, repeat: Infinity, ease: "linear" }, scale: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
               className="absolute w-[340px] h-[340px] rounded-full border border-indigo-100/60 border-dashed opacity-60"
               style={{ translateZ: -50 }}
            />
            <motion.div
               animate={{ rotate: -360 }}
               transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
               className="absolute w-[260px] h-[260px] rounded-full border border-purple-100/60 border-dotted opacity-60"
               style={{ translateZ: -50 }}
            />

            {/* Orbiting Content Icons */}
            {[
               { icon: Video, bg: 'bg-pink-500', angle: 0, delay: 0 },
               { icon: ImageIcon, bg: 'bg-purple-500', angle: 72, delay: 1 },
               { icon: FileText, bg: 'bg-blue-500', angle: 144, delay: 2 },
               { icon: MessageSquare, bg: 'bg-indigo-500', angle: 216, delay: 3 },
               { icon: Lightbulb, bg: 'bg-amber-500', angle: 288, delay: 4 },
            ].map((item, i) => (
               <motion.div
                  key={i}
                  className={`absolute w-10 h-10 ${item.bg} rounded-xl shadow-lg flex items-center justify-center text-white z-20 border-2 border-white/80`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                     opacity: [0.4, 1, 1, 0.4],
                     scale: [0.8, 1.1, 1, 0.8],
                     x: [
                        Math.cos(item.angle * Math.PI / 180) * 120,
                        Math.cos((item.angle + 45) * Math.PI / 180) * 140,
                        Math.cos((item.angle + 90) * Math.PI / 180) * 120
                     ],
                     y: [
                        Math.sin(item.angle * Math.PI / 180) * 120,
                        Math.sin((item.angle + 45) * Math.PI / 180) * 140,
                        Math.sin((item.angle + 90) * Math.PI / 180) * 120
                     ],
                  }}
                  transition={{
                     duration: 8,
                     repeat: Infinity,
                     ease: "linear",
                     repeatType: "loop"
                  }}
                  style={{ translateZ: 20 }}
               >
                  <item.icon size={18} />
               </motion.div>
            ))}

            {/* Main Character */}
            <motion.div
               animate={{
                  y: [-4, 4, -4],
                  rotateX: [1, -1, 1],
                  scale: [1, 1.02, 1]
               }}
               transition={{
                  duration: 4, repeat: Infinity, ease: "easeInOut"
               }}
               className="relative z-10 w-44 h-44 filter drop-shadow-2xl"
               style={{ translateZ: 80 }}
            >
               <div className="w-full h-full bg-white rounded-full border-[6px] border-white shadow-xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-indigo-50/50"></div>
                  <img
                     src="https://api.dicebear.com/9.x/avataaars/svg?seed=Felix&backgroundColor=transparent&clothing=blazerAndShirt&eyes=happy&mouth=smile"
                     alt="Creator"
                     className="w-full h-full transform scale-110 translate-y-2"
                  />
               </div>

               {/* Floating Badge */}
               <motion.div
                  className="absolute -bottom-2 -right-2 bg-white px-3 py-1.5 rounded-full shadow-lg border border-indigo-50 flex items-center gap-1.5"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
               >
                  <Sparkles size={12} className="text-indigo-500 fill-indigo-500" />
                  <span className="text-[10px] font-bold text-gray-600">Creating...</span>
               </motion.div>
            </motion.div>

         </div>
      </div>
   );
};

const VelocityIllustration = () => {
   return (
      <div className="relative h-full w-full bg-gradient-to-br from-sky-50/50 to-white overflow-hidden flex items-center justify-center perspective-[1200px]">
         <div className="relative w-full h-full flex items-center justify-center transform-style-3d">

            {/* Subtle Wind Tunnel Effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
               {[...Array(6)].map((_, i) => (
                  <motion.div
                     key={i}
                     className="absolute h-px bg-sky-300/30 rounded-full"
                     initial={{ x: "100%", opacity: 0 }}
                     animate={{ x: "-100%", opacity: [0, 0.5, 0] }}
                     transition={{
                        duration: 0.8 + Math.random(),
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        ease: "linear"
                     }}
                     style={{
                        top: `${20 + Math.random() * 60}%`,
                        width: `${50 + Math.random() * 150}px`
                     }}
                  />
               ))}
            </div>

            {/* Rocket Ship Group */}
            <motion.div
               animate={{
                  x: [-1, 1, -1], // Very subtle rumble
                  y: [-8, 8, -8], // Float
                  rotate: [8, 10, 8] // Slight angle change
               }}
               transition={{
                  x: { duration: 0.2, repeat: Infinity },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" }
               }}
               className="relative z-20 transform"
            >
               {/* The Rocket Body */}
               <div className="relative bg-white w-64 h-28 rounded-[3rem] border-4 border-white shadow-2xl flex items-center pl-3 pr-6 z-20 overflow-hidden">
                  <div className="absolute top-0 bottom-0 left-0 w-full bg-gradient-to-r from-sky-50 to-white -z-10" />

                  {/* Character in Cockpit */}
                  <div className="w-20 h-20 rounded-full bg-sky-100 border-4 border-white overflow-hidden relative mr-4 shrink-0 shadow-inner">
                     {/* Inertia Effect: Character moves slightly opposite to rocket movement */}
                     <motion.img
                        animate={{ x: [0, -1, 0], y: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        src="https://api.dicebear.com/9.x/avataaars/svg?seed=Speedy&clothing=hoodie&eyes=surprised&mouth=smile"
                        alt="Pilot"
                        className="w-full h-full transform scale-110"
                     />
                  </div>

                  {/* UI Panel on Rocket */}
                  <div className="flex-1 space-y-1.5 opacity-80">
                     <div className="h-2 w-full bg-sky-200 rounded-full" />
                     <div className="h-2 w-2/3 bg-sky-100 rounded-full" />
                  </div>
               </div>

               {/* Fins */}
               <div className="absolute -top-3 right-8 w-10 h-10 bg-sky-500 rounded-tr-3xl rounded-bl-md transform -skew-x-12 z-10 border-2 border-white shadow-sm" />
               <div className="absolute -bottom-3 right-8 w-10 h-10 bg-sky-600 rounded-br-3xl rounded-tl-md transform -skew-x-12 z-10 border-2 border-white shadow-sm" />

               {/* Engine Flame */}
               <div className="absolute top-1/2 -left-4 -translate-y-1/2 flex items-center z-0">
                  <motion.div
                     animate={{ width: [30, 50, 30], opacity: [0.8, 1, 0.8] }}
                     transition={{ duration: 0.2, repeat: Infinity }}
                     className="h-12 bg-gradient-to-l from-orange-400 to-yellow-200 rounded-l-full blur-[2px]"
                  />
               </div>
            </motion.div>

         </div>
      </div>
   );
};

const BrandBrainIllustration = () => {
   return (
      <div className="relative h-full w-full bg-gradient-to-br from-violet-50/50 to-white overflow-hidden flex items-center justify-center perspective-[1000px]">
         {/* Background Grid */}
         <div className="absolute inset-0 opacity-[0.05]" style={{
            backgroundImage: 'linear-gradient(#8b5cf6 1px, transparent 1px), linear-gradient(90deg, #8b5cf6 1px, transparent 1px)',
            backgroundSize: '32px 32px'
         }} />

         <div className="relative z-10 w-full h-full flex items-center justify-center">

            {/* Main Character - Large and Central */}
            <motion.div
               className="relative z-20 flex flex-col items-center justify-center"
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1, y: [-5, 5, -5] }}
               transition={{
                  opacity: { duration: 0.5 },
                  scale: { duration: 0.5 },
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
               }}
            >
               {/* Character Image - No Circle Mask */}
               <div className="w-56 h-56 filter drop-shadow-2xl relative">
                  <img
                     src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&clothing=blazerAndShirt&accessories=sunglasses&top=shortHairTheCaesar&hairColor=2c1b18&skinColor=f8d25c"
                     alt="Cool Creative Director"
                     className="w-full h-full object-contain transform scale-110"
                  />
               </div>

               {/* Floating 'Make it Pop' Speech Bubble */}
               <motion.div
                  className="absolute -top-6 -right-16 bg-white px-4 py-2.5 rounded-2xl rounded-bl-none shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-violet-100 z-30 flex items-center gap-2 max-w-[140px]"
                  animate={{
                     scale: [1, 1.05, 1],
                     rotate: [2, 5, 2],
                     y: [0, -5, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               >
                  <span className="text-lg">✨</span>
                  <span className="font-display font-bold text-gray-800 text-sm">Make it pop!</span>
               </motion.div>

               {/* Floating Palette */}
               <motion.div
                  className="absolute top-24 -left-12 bg-white p-2.5 rounded-xl shadow-lg border border-gray-100 transform -rotate-12"
                  animate={{ x: [5, -5, 5], rotate: [-12, -15, -12] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
               >
                  <div className="grid grid-cols-2 gap-1.5">
                     <div className="w-5 h-5 rounded-full bg-[#6366f1] ring-2 ring-indigo-50" />
                     <div className="w-5 h-5 rounded-full bg-[#ec4899] ring-2 ring-pink-50" />
                     <div className="w-5 h-5 rounded-full bg-[#8b5cf6] ring-2 ring-violet-50" />
                     <div className="w-5 h-5 rounded-full bg-[#f59e0b] ring-2 ring-amber-50" />
                  </div>
               </motion.div>

               {/* Status Badge */}
               <motion.div
                  className="absolute bottom-4 right-[-20px] bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg border border-green-100 flex items-center gap-2"
                  animate={{ y: [2, -2, 2] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               >
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                  <div className="flex flex-col">
                     <span className="text-[8px] font-bold text-gray-400 uppercase leading-none">Status</span>
                     <span className="text-xs font-bold text-gray-800 leading-tight">Consistent</span>
                  </div>
               </motion.div>

            </motion.div>

         </div>
      </div>
   );
};

const EmpowermentIllustration = () => {
   return (
      <div className="relative h-full w-full bg-gradient-to-b from-teal-50/50 to-white overflow-hidden flex items-center justify-center">
         {/* Background Animated Rings - Slower pulse */}
         <div className="absolute inset-0 flex items-center justify-center">
            {[1, 2].map((i) => (
               <motion.div
                  key={i}
                  className="absolute rounded-full border border-teal-500/10"
                  style={{ width: i * 220, height: i * 220 }}
                  animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.2, 0.4] }}
                  transition={{ duration: 5, delay: i * 0.8, repeat: Infinity, ease: "easeInOut" }}
               />
            ))}
         </div>

         <div className="relative z-10 w-72 h-72 flex items-center justify-center">

            {/* Character */}
            <motion.div
               className="w-52 h-52 bg-white rounded-full border-4 border-white shadow-2xl relative z-10 overflow-hidden"
               animate={{ y: [-5, 5, -5] }}
               transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            >
               <div className="absolute inset-0 bg-teal-50/50" />
               <img
                  src="https://api.dicebear.com/9.x/avataaars/svg?seed=Liliana&clothing=blazerAndShirt&eyes=happy&mouth=smile&skinColor=f8d25c"
                  alt="Empowered Marketer"
                  className="w-full h-full transform scale-110 translate-y-3"
               />
            </motion.div>

            {/* Badge 1: Top Left - Efficiency */}
            <motion.div
               className="absolute -top-2 -left-12 bg-white p-2.5 rounded-xl shadow-lg border border-teal-50 flex items-center gap-2.5 z-20 min-w-[140px]"
               animate={{ y: [-3, 3, -3] }}
               transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            >
               <div className="w-7 h-7 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 shrink-0">
                  <Zap size={14} />
               </div>
               <div>
                  <div className="text-[9px] text-gray-400 font-bold uppercase">Efficiency</div>
                  <div className="text-xs font-bold text-gray-800">10x Speed</div>
               </div>
            </motion.div>

            {/* Badge 2: Bottom Right - Team */}
            <motion.div
               className="absolute -bottom-4 -right-12 bg-white p-2.5 rounded-xl shadow-lg border border-teal-50 flex items-center gap-2.5 z-20 min-w-[150px]"
               animate={{ y: [3, -3, 3] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
               <div className="w-7 h-7 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                  <Users size={14} />
               </div>
               <div>
                  <div className="text-[9px] text-gray-400 font-bold uppercase">Team</div>
                  <div className="text-xs font-bold text-gray-800">Supercharged</div>
               </div>
            </motion.div>

         </div>
      </div>
   );
};

const ScaleIllustration = () => {
   return (
      <div className="relative h-full w-full bg-gradient-to-br from-orange-50/50 to-white overflow-hidden flex items-center justify-center perspective-[1200px]">
         <div className="relative w-full h-full flex items-center justify-center transform-style-3d pt-6">

            {/* 3D Globe/Base - Rotating Grid */}
            <motion.div
               className="absolute bottom-[-110px] w-[500px] h-[500px] bg-orange-50 rounded-full border-[16px] border-white shadow-[0_-20px_60px_rgba(0,0,0,0.05)] overflow-hidden"
               animate={{ rotate: 360 }}
               transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            >
               <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: 'radial-gradient(#F97316 2px, transparent 2px)',
                  backgroundSize: '40px 40px'
               }} />
            </motion.div>

            {/* Main Leader Character */}
            <motion.div
               className="relative z-20 w-56 h-56"
               animate={{
                  y: [-4, 4, -4],
                  scale: [1, 1.01, 1]
               }}
               transition={{
                  duration: 5, repeat: Infinity, ease: "easeInOut"
               }}
            >
               <div className="w-full h-full bg-white rounded-full border-[6px] border-white shadow-2xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-orange-50/50"></div>
                  <img
                     src="https://api.dicebear.com/9.x/avataaars/svg?seed=Scale&clothing=blazerAndSweater&eyebrows=raisedExcited&mouth=smile"
                     alt="Global Leader"
                     className="w-full h-full transform scale-110 translate-y-3"
                  />
               </div>
            </motion.div>

            {/* Orbiting Nodes */}
            {[
               { x: -130, y: 40, delay: 0 },
               { x: 130, y: 10, delay: 1.5 },
               { x: -90, y: -90, delay: 3 },
               { x: 110, y: -70, delay: 2 },
            ].map((pos, i) => (
               <motion.div
                  key={i}
                  className="absolute z-10 w-14 h-14 bg-white rounded-full border-4 border-white shadow-md overflow-hidden"
                  style={{ x: pos.x, y: pos.y }}
                  animate={{
                     y: [pos.y, pos.y - 6, pos.y],
                     scale: [1, 1.05, 1]
                  }}
                  transition={{
                     duration: 3 + i,
                     repeat: Infinity,
                     ease: "easeInOut",
                     delay: pos.delay
                  }}
               >
                  <img
                     src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${i + 40}&backgroundColor=transparent`}
                     alt="Team Member"
                     className="w-full h-full"
                  />
                  <motion.div
                     className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"
                     animate={{ scale: [1, 1.3, 1] }}
                     transition={{ duration: 2, repeat: Infinity, delay: i }}
                  />
               </motion.div>
            ))}

         </div>
      </div>
   );
};

// --- MAIN COMPONENT ---

export const WhyChooseSection: React.FC = () => {
   const [activeIndex, setActiveIndex] = useState<number>(0); // Default open: first item

   const benefits = [
      {
         id: 'engine',
         title: "An always-on content engine",
         description: "Never stare at a blank page again. Amplify auto-generates on-brand ideas, drafts, and creatives 24/7 based on your strategic goals.",
         visual: ContentEngineIllustration,
         icon: Zap
      },
      {
         id: 'velocity',
         title: "Supercharge campaign velocity",
         description: "Go from concept to launch in minutes, not weeks. Automate the tedious parts of creation, approval, and formatting to ship 10x faster.",
         visual: VelocityIllustration,
         icon: Rocket
      },
      {
         id: 'brand',
         title: "Create a brand your customers remember",
         description: "Amplify.ai’s Brand Brain learns your voice, tone, and guidelines in minutes. It ensures every asset stays consistently 'you', no matter who creates it.",
         visual: BrandBrainIllustration,
         icon: Mic
      },
      {
         id: 'empower',
         title: "Empower every marketer with AI",
         description: "Give your team superpowers. From junior copywriters to CMOs, everyone can produce agency-quality work with built-in AI guardrails.",
         visual: EmpowermentIllustration,
         icon: Users
      },
      {
         id: 'scale',
         title: "Built for scale, backed by people",
         description: "Whether you manage one brand or fifty, Amplify scales with you. Enterprise-grade security, roles, and workflows included.",
         visual: ScaleIllustration,
         icon: BarChart
      },
   ];

   return (
      <section aria-labelledby="why-amplify-heading" className="py-24 bg-[#F8FAFC] relative overflow-hidden">
         {/* Subtle Background Pattern */}
         <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
            backgroundSize: '40px 40px'
         }} />

         <div className="max-w-[1200px] mx-auto px-6 relative z-10">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

               {/* Left Column: Heading & Accordion */}
               <div className="lg:col-span-6">
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className="mb-12"
                  >
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-indigo-100 shadow-sm text-indigo-600 text-xs font-bold uppercase tracking-wider mb-6">
                        <Sparkles size={12} className="text-[#0600AB] icon-accent" /> Why Amplify
                     </div>
                     <h2 id="why-amplify-heading" className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-gray-900 mb-6">
                        Why modern marketing teams choose <span className="gradient-text">Amplify.ai</span>
                     </h2>
                     <p className="font-sans text-lg text-gray-600 leading-relaxed">
                        Give your team the freedom to create, the confidence to move fast, and the clarity to scale campaigns across every channel.
                     </p>
                  </motion.div>

                  {/* Accordion List */}
                  <div className="flex flex-col gap-4">
                     {benefits.map((item, index) => {
                        const isActive = index === activeIndex;

                        return (
                           <motion.div
                              key={item.id}
                              initial={false}
                              className={`group relative rounded-2xl border transition-all duration-300 overflow-hidden ${isActive ? 'bg-white border-indigo-100 shadow-lg shadow-indigo-500/5' : 'bg-transparent border-transparent hover:bg-white hover:border-gray-200'}`}
                           >
                              {/* Accordion Header */}
                              <button
                                 onClick={() => setActiveIndex(index)}
                                 className={`w-full flex items-center justify-between py-4 px-6 text-left focus:outline-none ${isActive ? 'pb-2' : ''}`}
                              >
                                 <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${isActive ? 'bg-gradient-premium text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-indigo-50 group-hover:text-indigo-600'}`}>
                                       {React.createElement(item.icon, { size: 18 })}
                                    </div>
                                    <h3 className={`font-display text-lg transition-colors duration-300 ${isActive ? 'text-gray-900 font-bold' : 'text-gray-600 font-medium group-hover:text-gray-900'}`}>
                                       {item.title}
                                    </h3>
                                 </div>
                                 <motion.div
                                    animate={{ rotate: isActive ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    className={isActive ? 'text-indigo-600' : 'text-gray-400'}
                                 >
                                    <ChevronDown size={20} />
                                 </motion.div>
                              </button>

                              {/* Accordion Content */}
                              <AnimatePresence initial={false}>
                                 {isActive && (
                                    <motion.div
                                       initial={{ height: 0, opacity: 0 }}
                                       animate={{ height: 'auto', opacity: 1 }}
                                       exit={{ height: 0, opacity: 0 }}
                                       transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                       <div className="px-6 pb-6 pl-[4.5rem] pr-8">
                                          <p className="text-base text-gray-500 leading-relaxed mb-4">
                                             {item.description}
                                          </p>
                                          <button className="flex items-center gap-2 text-secondary font-bold text-sm group/btn hover:gap-3 transition-all">
                                             Learn more <ArrowRight size={14} />
                                          </button>

                                          {/* Mobile Visual (Visible only on small screens) */}
                                          <div className="lg:hidden mt-6 rounded-xl overflow-hidden shadow-sm border border-gray-100 bg-gray-50 h-72 relative">
                                             {React.createElement(item.visual)}
                                          </div>
                                       </div>
                                    </motion.div>
                                 )}
                              </AnimatePresence>
                           </motion.div>
                        );
                     })}
                  </div>
               </div>

               {/* Right Column: Sticky Visual (Desktop Only) */}
               <div className="hidden lg:block lg:col-span-6 sticky top-32">
                  <AnimatePresence mode="wait">
                     <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, y: 20, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.98 }}
                        transition={{ duration: 0.4, ease: "circOut" }}
                        className="relative"
                     >
                        {/* Decorative Backdrop */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/5 via-purple-500/5 to-blue-500/5 rounded-[2rem] transform rotate-3 scale-105 blur-2xl" />

                        {/* Main Card */}
                        <div className="relative bg-white rounded-[2rem] p-3 shadow-2xl shadow-indigo-500/10 border border-white/60 ring-1 ring-gray-100">

                           {/* Header of Card */}
                           <div className="px-6 py-4 border-b border-gray-50 flex justify-between items-center">
                              <div className="flex items-center gap-3">
                                 <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                                 </div>
                                 <div className="h-4 w-px bg-gray-200 mx-1" />
                                 <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Amplify Studio</span>
                              </div>
                              <div className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Live Preview</div>
                           </div>

                           {/* Visual Container */}
                           <div className="bg-[#FAFAFA] rounded-b-[1.5rem] rounded-t-xl overflow-hidden h-[540px] relative">
                              {/* Render the Component */}
                              {React.createElement(benefits[activeIndex].visual)}
                           </div>
                        </div>
                     </motion.div>
                  </AnimatePresence>
               </div>

            </div>
         </div>
      </section>
   );
};
