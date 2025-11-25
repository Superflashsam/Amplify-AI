
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles, Mic } from 'lucide-react';

export const WhyChooseSection: React.FC = () => {
  const benefits = [
    { title: "An always-on content engine powered by AI" },
    { title: "Supercharge campaign velocity and impact" },
    { 
      title: "Create a brand your customers remember",
      isExpanded: true,
      description: "Amplify.ai’s Brand Brain learns your voice, tone, and audience in minutes, then uses that knowledge to keep every campaign unmistakably 'you'. Every post, ad, script, and email stays consistent—even when your team moves fast. Because speed should never come at the cost of authenticity."
    },
    { title: "Empower every marketer with AI" },
    { title: "Built for scale, backed by people" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  };

  return (
    <section aria-labelledby="why-amplify-heading" className="py-24 bg-[#F9FAFB] relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* --- TOP ROW: Heading + Context --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
          
          {/* Left Text Block */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h2 id="why-amplify-heading" className="font-display font-bold text-3xl md:text-4xl lg:text-[2.5rem] leading-[1.15] text-dark mb-6">
              Why modern marketing teams choose Amplify.ai
            </h2>
            <p className="font-sans text-lg text-gray-600 leading-relaxed">
              Give your team the freedom to create, the confidence to move fast, and the clarity to scale campaigns across every channel—without burning out.
            </p>
          </motion.div>

          {/* Right Callout Card: Brand Brain */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-md ml-auto"
          >
            <div className="bg-purple-50/50 backdrop-blur-sm rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-purple-100/50 relative overflow-hidden group hover:shadow-[0_8px_40px_rgb(139,92,246,0.1)] transition-shadow duration-300">
              {/* Decorative Gradient Blob */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 blur-2xl rounded-full -translate-y-1/2 translate-x-1/3" />
              
              <div className="flex items-start justify-between mb-6 relative z-10">
                <div>
                  <h3 className="font-display font-bold text-lg text-gray-900 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-secondary" />
                    Brand Brain
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                    Amplify.ai learns your brand once and keeps every asset on‑brand forever.
                  </p>
                </div>
              </div>

              {/* Mini Visual: Voice Selector */}
              <div className="bg-white/80 rounded-xl p-4 border border-purple-100 relative">
                <div className="flex items-center justify-between bg-white p-2.5 rounded-lg border border-gray-200 shadow-sm mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center text-primary">
                      <Mic size={14} />
                    </div>
                    <span className="text-xs font-bold text-gray-700">Voice: Friendly & Professional</span>
                  </div>
                  <ChevronDown size={14} className="text-gray-400" />
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-gray-200 rounded-full opacity-60" />
                  <div className="h-2 w-[90%] bg-gray-200 rounded-full opacity-60" />
                  <div className="h-2 w-[75%] bg-gray-200 rounded-full opacity-60" />
                </div>
                
                {/* Success Indicator */}
                 <div className="absolute -bottom-2 -right-2 bg-white px-2 py-1 rounded-lg shadow-sm border border-gray-100 flex items-center gap-1.5 animate-bounce delay-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    <span className="text-[10px] font-bold text-gray-600">On Brand</span>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- BOTTOM ROW: Benefits List --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col"
        >
          {benefits.map((item, index) => (
            <motion.div key={index} variants={itemVariants} className="w-full">
              {item.isExpanded ? (
                /* EXPANDED ROW */
                <div className="relative w-full my-4 md:my-6">
                  {/* Tinted Background */}
                  <div className="absolute inset-0 bg-[#FDF2FF] rounded-2xl transform -skew-y-1 md:-skew-y-0" />
                  
                  <div className="relative rounded-2xl p-8 md:p-10 border border-purple-100 shadow-sm ring-1 ring-primary/5 overflow-hidden">
                    {/* Decor */}
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-secondary" />
                    <div className="absolute top-6 right-8 opacity-10 text-primary hidden md:block">
                        <Sparkles size={60} strokeWidth={1} />
                    </div>

                    <div className="flex flex-col max-w-3xl">
                        <div className="flex items-center gap-2 mb-3">
                             <span className="px-2 py-0.5 rounded-md bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">Brand Brain</span>
                        </div>
                      <h3 className="font-display font-bold text-2xl text-gray-900 mb-4">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {item.description}
                      </p>
                      <button className="flex items-center gap-2 text-primary font-bold text-sm group hover:gap-3 transition-all">
                        See how Brand Brain works <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                /* STANDARD ROW */
                <div className="group relative border-b border-gray-200 hover:border-gray-300 transition-colors py-5 md:py-6 cursor-pointer overflow-hidden">
                  <div className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 transform origin-left scale-x-0 group-hover:scale-x-100 ease-out" />
                  <div className="flex items-center justify-between px-2 md:px-4">
                    <h3 className="font-display font-semibold text-lg md:text-xl text-gray-600 group-hover:text-gray-900 transition-colors group-hover:translate-x-2 duration-300">
                      {item.title}
                    </h3>
                    <div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
