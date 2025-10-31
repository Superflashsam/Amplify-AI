'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import ConnectBrandIllustration from '../illustrations/ConnectBrandIllustration';
import ExtractDNAIllustration from '../illustrations/ExtractDNAIllustration';
import GenerateContentIllustration from '../illustrations/GenerateContentIllustration';
import PublishOptimizeIllustration from '../illustrations/PublishOptimizeIllustration';

const steps = [
  {
    step: 1,
    title: 'Connect Your Brand',
    description: 'Start by providing your website URL, social media profiles, and any existing brand guidelines. This gives our AI the raw material to learn your identity.',
    illustration: <ConnectBrandIllustration />,
    theme: 'coral',
    badge: 'Simple Input',
  },
  {
    step: 2,
    title: 'AI Extracts Your DNA',
    description: 'Our intelligent engine analyzes your inputs to define your unique color palette, typography, tone of voice, and visual style, creating a comprehensive Brand DNA.',
    illustration: <ExtractDNAIllustration />,
    theme: 'purple',
    badge: 'AI-Powered',
  },
  {
    step: 3,
    title: 'Generate On-Brand Content',
    description: "With your Brand DNA as its guide, the Content Studio generates stunning, consistent marketing assets—from ad copy and social posts to video scripts.",
    illustration: <GenerateContentIllustration />,
    theme: 'blue',
    badge: 'Multi-Format',
  },
  {
    step: 4,
    title: 'Publish & Optimize',
    description: 'Deploy your content and let our AI track performance. The system learns from your results, continuously refining its strategy to maximize impact and ROI.',
    illustration: <PublishOptimizeIllustration />,
    theme: 'lime',
    badge: 'Data-Driven',
  },
];

const themeClasses = {
  coral: {
    glow: 'from-amplify-coral/50 to-transparent',
    text: 'text-amplify-coral',
    gradient: 'from-amplify-coral to-vibrant-magenta',
  },
  purple: {
    glow: 'from-electric-purple/50 to-transparent',
    text: 'text-electric-purple',
    gradient: 'from-electric-purple to-vibrant-magenta',
  },
  blue: {
    glow: 'from-sky-blue/50 to-transparent',
    text: 'text-sky-blue',
    gradient: 'from-sky-blue to-electric-purple',
  },
  lime: {
    glow: 'from-lime-green/50 to-transparent',
    text: 'text-lime-green',
    gradient: 'from-lime-green to-sky-blue',
  },
};

function StepCard({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const theme = themeClasses[step.theme as keyof typeof themeClasses];
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={cn(
        'relative flex flex-col md:flex-row items-center gap-8 md:gap-16',
        isEven ? 'md:flex-row-reverse' : ''
      )}
    >
      {/* Content */}
      <div className="md:w-1/2 relative">
        <div
          className={cn(
            'absolute -inset-16 -z-10 rounded-full bg-gradient-to-br blur-3xl opacity-20',
            theme.glow
          )}
        />
        <Badge variant="outline" className={`mb-4 border-none bg-gradient-to-r ${theme.gradient} text-transparent bg-clip-text font-semibold`}>
          {step.badge}
        </Badge>
        <h3 className="text-4xl font-bold font-display text-deep-charcoal mb-4">
          {step.title}
        </h3>
        <p className="text-lg text-slate-gray leading-relaxed">
          {step.description}
        </p>
      </div>

      {/* Illustration */}
      <div className="md:w-1/2 w-full mt-8 md:mt-0">
        <div className="relative aspect-square bg-white/50 rounded-3xl p-8 border border-slate-200/50 shadow-lg backdrop-blur-sm">
          {step.illustration}
        </div>
      </div>
    </motion.div>
  );
}

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  // Smoothen the scroll progress value
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="how-it-works" className="py-24 sm:py-32 relative overflow-hidden bg-light-slate/20">
       <div className="absolute inset-0 z-0 opacity-50 bg-[radial-gradient(circle_at_50%_120%,_hsl(var(--amplify-orange)/0.1),_transparent_50%),_radial-gradient(circle_at_0%_40%,_hsl(var(--electric-purple)/0.1),_transparent_60%),_radial-gradient(circle_at_100%_60%,_hsl(var(--vibrant-magenta)/0.1),_transparent_70%)]"></div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Badge className="bg-white border-primary/20 text-primary font-semibold shadow-sm">
            How It Works
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold font-display text-deep-charcoal mt-4">
            Four Steps to Marketing Genius
          </h2>
          <p className="text-xl text-slate-gray mt-6">
            From brand discovery to optimized campaigns, see how AmplifyAI transforms your workflow.
          </p>
        </div>

        <div ref={containerRef} className="relative">
          {/* Timeline */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 hidden md:block">
            <div className="sticky top-1/2 h-[calc(100%-16rem)] -translate-y-1/2">
                <div className="absolute inset-0 bg-slate-200/50 rounded-full" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-amplify-coral via-electric-purple to-lime-green rounded-full"
                  style={{ scaleY: smoothProgress, transformOrigin: 'top' }}
                />
            </div>
          </div>

          <div className="space-y-24 md:space-y-32">
            {steps.map((step, index) => (
              <div key={step.step} className="relative flex items-center">
                 {/* Number Badge */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 z-10">
                    <motion.div 
                        className={`w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl font-bold font-display shadow-2xl bg-gradient-to-br ${themeClasses[step.theme as keyof typeof themeClasses].gradient}`}
                        whileInView={{ scale: [0.8, 1.1, 1] }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 15}}
                    >
                        0{step.step}
                    </motion.div>
                </div>
                <div className="w-full">
                  <StepCard step={step} index={index} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
