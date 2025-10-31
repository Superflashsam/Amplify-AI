'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { 
  Globe, 
  Brain, 
  Sparkles, 
  Rocket, 
  ArrowRight,
  Check,
  Zap
} from 'lucide-react';
import ConnectBrandIllustration from '../howItWorks/ConnectBrandIllustration';
import AIExtractIllustration from '../howItWorks/AIExtractIllustration';
import GenerateContentIllustration from '../howItWorks/GenerateContentIllustration';
import PublishOptimizeIllustration from '../howItWorks/PublishOptimizeIllustration';

interface Step {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  illustration: React.ReactNode;
  features: string[];
  color: string;
  gradient: string;
}

const steps: Step[] = [
  {
    id: 'connect',
    number: '01',
    title: 'Connect Your Brand',
    description: 'Simply input your website URL and social media handles. Our AI instantly begins analyzing your digital presence across all touchpoints.',
    icon: <Globe size={24} />,
    illustration: <ConnectBrandIllustration />,
    features: ['Website URL', 'Social Profiles', 'Content Samples'],
    color: '#FF6B5B',
    gradient: 'from-amplify-coral to-vibrant-magenta',
  },
  {
    id: 'extract',
    number: '02',
    title: 'AI Extracts Brand DNA',
    description: 'Advanced AI analyzes your brand identity, extracting color palettes, typography, tone of voice, and visual style to ensure perfect consistency.',
    icon: <Brain size={24} />,
    illustration: <AIExtractIllustration />,
    features: ['Color Analysis', 'Tone Detection', 'Visual Style'],
    color: '#8B5CF6',
    gradient: 'from-electric-purple to-vibrant-magenta',
  },
  {
    id: 'generate',
    number: '03',
    title: 'Generate On-Brand Content',
    description: 'Create blog posts, social media content, emails, video scripts, and ad copy—all perfectly aligned with your brand DNA in minutes.',
    icon: <Sparkles size={24} />,
    illustration: <GenerateContentIllustration />,
    features: ['Multi-Format', 'AI-Powered', 'Instant Creation'],
    color: '#EC4899',
    gradient: 'from-vibrant-magenta to-sky-blue',
  },
  {
    id: 'publish',
    number: '04',
    title: 'Publish & Optimize',
    description: 'Launch campaigns across all platforms with one click. Real-time analytics and AI-powered insights help you continuously improve performance.',
    icon: <Rocket size={24} />,
    illustration: <PublishOptimizeIllustration />,
    features: ['Auto-Publish', 'Real-Time Analytics', 'Smart Optimization'],
    color: '#38BDF8',
    gradient: 'from-sky-blue to-lime-green',
  },
];

function StepCard({ step, index, isActive }: { step: Step; index: number; isActive: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`flex items-center gap-12 mb-32 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
    >
      {/* Content Side */}
      <div className={`flex-1 ${isLeft ? 'text-right' : 'text-left'}`}>
        {/* Number Badge */}
        <motion.div
          className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 relative ${isLeft ? 'ml-auto' : 'mr-auto'}`}
          style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}CC)` }}
          animate={isActive ? { scale: [1, 1.05, 1] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          {/* Glow Effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl blur-xl"
            style={{ background: step.color, opacity: 0.4 }}
            animate={isActive ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          <span className="relative text-white text-3xl font-black font-display">
            {step.number}
          </span>
        </motion.div>

        {/* Title */}
        <h3 className="text-4xl font-bold text-deep-charcoal mb-4 font-display">
          {step.title}
        </h3>

        {/* Description */}
        <p className="text-lg text-slate-gray leading-relaxed mb-6 max-w-md" style={{ marginLeft: isLeft ? 'auto' : '0' }}>
          {step.description}
        </p>

        {/* Features */}
        <div className={`flex flex-wrap gap-3 mb-6 ${isLeft ? 'justify-end' : 'justify-start'}`}>
          {step.features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 shadow-sm"
              style={{ borderColor: `${step.color}40` }}
            >
              <Check size={14} style={{ color: step.color }} />
              <span className="text-sm font-medium text-deep-charcoal">{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* Icon */}
        <motion.div
          className="inline-flex items-center gap-2 text-slate-gray"
          whileHover={{ x: isLeft ? -5 : 5 }}
        >
          <div style={{ color: step.color }}>
            {step.icon}
          </div>
          <span className="text-sm font-medium">Step {step.number}</span>
        </motion.div>
      </div>

      {/* Illustration Side */}
      <motion.div
        className="flex-1"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className={`relative bg-gradient-to-br ${step.gradient} p-8 rounded-3xl border-2 border-white/20 shadow-2xl overflow-hidden`}>
          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 20px, ${step.color}40 20px, ${step.color}40 22px), repeating-linear-gradient(90deg, transparent, transparent 20px, ${step.color}40 20px, ${step.color}40 22px)`,
            }}
          />

          {/* Noise Texture */}
          <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
            }}
          />

          {/* Illustration */}
          <div className="relative z-10 bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40">
            {step.illustration}
          </div>

          {/* Corner Sparkle */}
          <motion.div
            className="absolute top-4 right-4"
            animate={{ rotate: [0, 180, 360], scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Sparkles size={24} style={{ color: step.color, opacity: 0.6 }} />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function HowItWorks() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section ref={containerRef} id="how-it-works" className="relative py-32 bg-gradient-to-b from-white via-light-slate/20 to-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-40 left-20 w-96 h-96 bg-electric-purple/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-96 h-96 bg-amplify-coral/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-electric-purple/10 to-sky-blue/10 border border-electric-purple/20 text-deep-charcoal text-sm font-medium mb-6"
          >
            <Zap size={16} className="text-electric-purple" />
            Simple 4-Step Process
          </motion.div>

          {/* Headline */}
          <h2 className="text-5xl md:text-6xl font-bold text-deep-charcoal tracking-tight mb-6 font-display">
            From Brand DNA to{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amplify-coral via-electric-purple to-vibrant-magenta">
              Campaign Launch
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl text-slate-gray leading-relaxed">
            Get started in minutes with our intelligent AI workflow. No complex setup, no technical expertise required.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-light-slate via-slate-gray/20 to-light-slate hidden lg:block">
            <motion.div
              className="w-full bg-gradient-to-b from-amplify-coral via-electric-purple to-lime-green"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Steps */}
          <div className="relative">
            {steps.map((step, index) => (
              <StepCard
                key={step.id}
                step={step}
                index={index}
                isActive={activeStep === index}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-amplify-coral to-electric-purple text-white text-lg font-semibold rounded-2xl shadow-lg shadow-amplify-coral/30 hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Start Your Free Trial
            <ArrowRight size={20} />
          </motion.button>
          <p className="mt-4 text-sm text-slate-gray">
            No credit card required • 14-day free trial • Setup in 5 minutes
          </p>
        </motion.div>
      </div>
    </section>
  );
}
