
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Check, Sparkles } from 'lucide-react';
import { DashboardVisual, LogoMarquee } from './UiElements';

export const Hero: React.FC = () => {
  // Premium Easing Curves
  // "Soft Settling" for large elements
  const softEase = [0.25, 0.1, 0.25, 1.0] as const;
  // "Bouncy" for buttons/interactive elements
  const bounceEase = [0.34, 1.56, 0.64, 1] as const;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, // Slightly faster stagger for cohesion
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20, filter: 'blur(8px)' }, // More blur for cinematic effect
    show: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { 
        duration: 1.1, 
        ease: softEase 
      } 
    },
  };

  const buttonVariant = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    show: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: bounceEase 
      } 
    }
  };

  return (
    <section 
      aria-labelledby="hero-heading"
      className="relative pt-32 lg:pt-40 pb-20 overflow-hidden bg-gradient-to-b from-[#FAFCFF] to-[#EEF2FF]"
    >
      {/* Cinematic Noise Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none mix-blend-overlay" />
      
      {/* Ambient Light Sweep */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-primary/5 via-secondary/5 to-transparent blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center text-center max-w-5xl mx-auto"
        >
          
          {/* 1. Badge */}
          <motion.div variants={item} className="mb-8 relative group cursor-pointer z-20">
             <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary/20 shadow-sm hover:shadow-md hover:border-primary/40 transition-all">
              <div className="flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-sm">
                  <Sparkles size={10} fill="currentColor" />
              </div>
              <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
                New: AI Video Scripts + 30-Day Campaigns
              </span>
            </div>
          </motion.div>

          {/* 2. Main Headline */}
          <motion.h1 
            id="hero-heading"
            variants={item} 
            className="font-display font-extrabold text-5xl md:text-7xl leading-[1.05] tracking-tight text-dark mb-6 drop-shadow-sm"
          >
            Amplify Your Marketing With{' '}
            <span className="relative inline-block whitespace-nowrap">
               <span className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 blur-2xl rounded-full opacity-40 animate-pulse-glow" />
               <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                AI-Superpowers
               </span>
            </span>
          </motion.h1>

          {/* 3. Subheadline */}
          <motion.p variants={item} className="font-sans text-lg md:text-xl text-gray-600 mb-10 max-w-3xl leading-relaxed">
            Generate scroll-stopping content, campaign ideas, ad copy, and 30-day social calendars in minutes — not weeks. Built on Google Gemini for unmatched quality and accuracy.
          </motion.p>

          {/* 4. Value Points Grid */}
          <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-3 mb-12 w-full max-w-5xl">
            {[
              "30‑day content calendar in under 5 mins",
              "Publish to Instagram, LinkedIn, X, YouTube",
              "95% cheaper than agencies",
              "Trusted by 1,000+ teams"
            ].map((text, i) => (
              <div key={i} className="flex items-center justify-center sm:justify-start gap-2 text-sm font-semibold text-gray-700 bg-white/60 backdrop-blur-sm py-2.5 px-4 rounded-xl border border-transparent hover:border-primary/10 hover:bg-white hover:shadow-sm transition-all duration-300">
                <div className="flex-shrink-0 w-4 h-4 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <Check size={10} strokeWidth={4} />
                </div>
                <span className="text-left leading-tight">{text}</span>
              </div>
            ))}
          </motion.div>

          {/* 5. CTA Group */}
          <motion.div variants={buttonVariant} className="flex flex-col sm:flex-row items-center gap-5 mb-16 z-20">
             <div className="flex flex-col items-center gap-2">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full text-white text-lg font-bold shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1 active:scale-[0.98] flex items-center gap-2 min-w-[200px] justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <span className="relative">Start Free Trial</span>
                    <ArrowRight className="relative w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
                <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide">No credit card required</span>
             </div>

             <div className="flex flex-col items-center gap-2">
                <button className="group px-8 py-4 bg-white text-gray-800 border border-gray-200 rounded-full text-lg font-bold hover:border-primary/30 hover:bg-purple-50/50 hover:text-primary transition-all duration-300 hover:-translate-y-1 active:scale-[0.98] flex items-center gap-2 min-w-[200px] justify-center shadow-sm hover:shadow-md">
                    <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-white flex items-center justify-center transition-colors border border-gray-200 group-hover:border-primary/20">
                        <Play size={14} fill="currentColor" className="ml-0.5" />
                    </div>
                    <span>Watch Demo</span>
                </button>
                 {/* Spacer for visual alignment with credit card text */}
                 <span className="text-[11px] opacity-0 select-none">Spacer</span>
             </div>
          </motion.div>

          {/* 6. Trust Line */}
          <motion.div variants={item} className="text-center w-full max-w-4xl mx-auto z-10">
              <p className="text-sm font-semibold text-gray-400 mb-6 uppercase tracking-wider">
                Trusted by 1,000+ marketing teams at startups and enterprises
              </p>
              {/* Integrated Marquee */}
              <LogoMarquee />
          </motion.div>

        </motion.div>

        {/* 7. Hero Visual - Floating Dashboard */}
        {/* Entrance animation for the dashboard itself */}
        <motion.div 
           initial={{ opacity: 0, y: 80, scale: 0.96 }}
           animate={{ opacity: 1, y: 0, scale: 1 }}
           transition={{ 
             duration: 1.4, 
             delay: 0.6, 
             ease: [0.22, 1, 0.36, 1] 
           }}
           className="mt-16 md:-mt-6 relative z-20"
        >
             <DashboardVisual />
        </motion.div>
        
      </div>
    </section>
  );
};
