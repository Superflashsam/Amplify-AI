
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Settings, Sparkles, Send, BarChart, CheckCircle2, Layers, Zap } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Tell Amplify your goals",
      description: "Enter business niche, tone of voice, and campaign objectives. Amplify instantly builds your content strategy.",
      icon: Settings,
      color: "bg-blue-500",
      visual: (
        <div className="relative w-full h-full p-6 flex flex-col justify-center">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 space-y-3 relative z-10">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2 mb-2">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Campaign Setup</span>
                <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                </div>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-500">Objective</label>
              <div className="h-7 bg-gray-50 rounded border border-gray-200 flex items-center px-2 text-xs text-gray-700">
                Drive Q4 Sales
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-500">Brand Tone</label>
              <div className="flex gap-2">
                <span className="px-2 py-1 rounded bg-primary/10 text-primary text-[10px] font-bold border border-primary/20">Professional</span>
                <span className="px-2 py-1 rounded bg-gray-50 text-gray-500 text-[10px] font-bold border border-gray-200">Witty</span>
              </div>
            </div>
            <div className="pt-2">
                <div className="w-full py-1.5 bg-gradient-to-r from-primary to-secondary rounded text-white text-center text-[10px] font-bold shadow-md shadow-primary/20">
                    Generate Strategy
                </div>
            </div>
          </div>
          {/* Floating Elements behind */}
          <div className="absolute top-4 right-8 w-20 h-20 bg-blue-100 rounded-full blur-xl opacity-60" />
          <div className="absolute bottom-4 left-8 w-24 h-24 bg-purple-100 rounded-full blur-xl opacity-60" />
        </div>
      )
    },
    {
      id: 2,
      title: "Generate & customize content",
      description: "Amplify auto-creates a 30-day calendar, ad copy, creatives, and post variations with one click.",
      icon: Sparkles,
      color: "bg-purple-500",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center p-4">
           <div className="grid grid-cols-2 gap-3 w-full max-w-[240px]">
              {/* Card 1 */}
              <motion.div 
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white rounded-lg p-2 shadow-sm border border-gray-200 col-span-2 flex gap-2 items-center"
              >
                 <div className="w-8 h-8 rounded bg-gradient-to-br from-pink-500 to-orange-400 shrink-0" />
                 <div className="flex-1 space-y-1">
                    <div className="h-1.5 w-3/4 bg-gray-200 rounded-full" />
                    <div className="h-1.5 w-1/2 bg-gray-100 rounded-full" />
                 </div>
              </motion.div>
              
              {/* Card 2 */}
              <motion.div 
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="bg-white rounded-lg p-2 shadow-sm border border-gray-200 flex flex-col gap-2"
              >
                 <div className="aspect-video rounded bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-400">
                    <Layers size={12} />
                 </div>
                 <div className="h-1.5 w-full bg-gray-200 rounded-full" />
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="bg-white rounded-lg p-2 shadow-sm border border-gray-200 flex flex-col gap-2"
              >
                 <div className="flex items-center gap-1 mb-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    <span className="text-[8px] font-bold text-gray-400">Ready</span>
                 </div>
                 <div className="h-1.5 w-full bg-gray-200 rounded-full" />
                 <div className="h-1.5 w-2/3 bg-gray-100 rounded-full" />
              </motion.div>
           </div>
           
           {/* Cursor Interaction */}
           <motion.div 
                className="absolute bottom-8 right-8 bg-dark text-white px-2 py-1 rounded text-[10px] font-bold shadow-lg flex items-center gap-1 z-20"
                animate={{ scale: [0.9, 1, 0.9], x: [0, -10, 0], y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
           >
                <Zap size={10} fill="currentColor" className="text-yellow-400" />
                Auto-Fix
           </motion.div>
        </div>
      )
    },
    {
      id: 3,
      title: "Publish & optimize automatically",
      description: "Schedule and publish across platforms and monitor analytics & recommendations in real time.",
      icon: Send,
      color: "bg-green-500",
      visual: (
        <div className="relative w-full h-full flex items-end justify-center px-6 pb-6 pt-10">
           <div className="w-full bg-white rounded-xl shadow-sm border border-gray-200 p-4 relative z-10 overflow-hidden">
              <div className="flex justify-between items-end mb-4">
                  <div>
                      <div className="text-[10px] text-gray-400 font-bold uppercase">Engagement</div>
                      <div className="text-xl font-bold text-gray-900">24.8K</div>
                  </div>
                  <div className="text-[10px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                      <ArrowRight size={8} className="-rotate-45" /> 12%
                  </div>
              </div>
              {/* Chart Area */}
              <div className="flex items-end justify-between h-16 gap-1">
                  {[40, 65, 50, 80, 60, 90, 100].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className="w-full bg-gradient-to-t from-green-100 to-green-200 rounded-t-sm relative group"
                      >
                          <div className="absolute top-0 w-full h-full bg-green-500 opacity-0 group-hover:opacity-20 transition-opacity" />
                      </motion.div>
                  ))}
              </div>
              
              {/* Success Toast Simulation */}
              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: 1, duration: 0.5 }}
                 className="absolute top-2 right-2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded flex items-center gap-1 shadow-md"
              >
                 <CheckCircle2 size={10} className="text-green-400" /> Published
              </motion.div>
           </div>
           {/* Glow */}
           <div className="absolute inset-0 bg-gradient-to-t from-green-50/50 to-transparent rounded-b-2xl" />
        </div>
      )
    }
  ];

  return (
    <section className="py-24 bg-slate-50/50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.03),transparent_50%)]" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-dark mb-6">
            How Amplify Works
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Work smarter, grow faster, and publish with confidence—powered by AI intelligence.
          </p>
        </div>

        {/* Workflow Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="flex flex-col h-full"
            >
                {/* Visual Container */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm aspect-[4/3] lg:aspect-[16/10] overflow-hidden mb-6 group hover:shadow-md hover:border-primary/20 transition-all duration-300">
                    {step.visual}
                </div>

                {/* Content */}
                <div className="px-2">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white border border-gray-100 shadow-sm text-gray-900 font-display font-bold text-sm">
                            {step.id}
                        </div>
                        <h3 className="font-display font-bold text-xl text-gray-900">
                            {step.title}
                        </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed pl-11">
                        {step.description}
                    </p>
                </div>
                
                {/* Mobile Connector Line (Hidden on Desktop, typically visualized differently) */}
                {index !== steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 right-0 w-12 h-[2px] bg-gray-200 -translate-y-1/2 translate-x-1/2 z-[-1]" />
                )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-3">
            <button className="group relative px-8 py-4 bg-dark text-white rounded-full text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 overflow-hidden">
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative">Try Amplify Free</span>
                <ArrowRight className="relative w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">No credit card required</span>
        </div>

      </div>
    </section>
  );
};
