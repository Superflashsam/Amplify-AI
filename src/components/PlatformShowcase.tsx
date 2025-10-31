// src/components/PlatformShowcase.tsx
'use client';

import { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import BrandIntelligenceIllustration from './illustrations/BrandIntelligenceIllustration';
import ContentStudioIllustration from './illustrations/ContentStudioIllustration';
import CampaignBrainIllustration from './illustrations/CampaignBrainIllustration';
import PerformanceShieldIllustration from './illustrations/PerformanceShieldIllustration';

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  illustration: React.ReactNode;
  color: string;
  bgGradient: string;
  accentColor: string;
}

const features: FeatureCard[] = [
  {
    id: 'brand-intelligence',
    title: 'Brand Intelligence',
    description: 'Our AI learns your brand DNA to ensure all content is consistently on-brand.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    illustration: <BrandIntelligenceIllustration />,
    color: '#84CC16',
    bgGradient: 'from-lime-green-50 to-lime-green-100/50',
    accentColor: 'text-lime-green-600',
  },
  {
    id: 'content-studio',
    title: 'Content Studio',
    description: 'Create on-brand content in minutes. Scale your output effortlessly.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/>
        <rect x="2" y="6" width="14" height="12" rx="2"/>
      </svg>
    ),
    illustration: <ContentStudioIllustration />,
    color: '#FF6B5B',
    bgGradient: 'from-amplify-coral-50 to-amplify-coral-100/50',
    accentColor: 'text-amplify-coral-600',
  },
  {
    id: 'campaign-brain',
    title: 'Campaign Brain',
    description: 'Our AI strategist plans and optimizes multi-channel campaigns for max impact.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83"/>
        <path d="M22 12A10 10 0 0 0 12 2v10z"/>
      </svg>
    ),
    illustration: <CampaignBrainIllustration />,
    color: '#38BDF8',
    bgGradient: 'from-sky-blue-50 to-sky-blue-100/50',
    accentColor: 'text-sky-blue-600',
  },
  {
    id: 'performance-shield',
    title: 'Performance Shield',
    description: 'Get real-time analytics and insights to ensure your marketing hits the mark.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    ),
    illustration: <PerformanceShieldIllustration />,
    color: '#FDE047',
    bgGradient: 'from-sunshine-yellow-50 to-sunshine-yellow-100/50',
    accentColor: 'text-sunshine-yellow-700',
  },
];

function FeatureCardComponent({ feature, index }: { feature: FeatureCard; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg']);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="relative group"
    >
      {/* Glow Effect */}
      <motion.div
        className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
        style={{
          background: `linear-gradient(135deg, ${feature.color}40, ${feature.color}20)`,
        }}
        animate={isHovered ? { scale: [1, 1.05, 1] } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Card Container */}
      <div
        className={`relative bg-gradient-to-br ${feature.bgGradient} rounded-3xl p-10 border-2 border-white/20 shadow-lg group-hover:shadow-2xl transition-all duration-500 overflow-hidden`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 15px, ${feature.color}15 15px, ${feature.color}15 17px), repeating-linear-gradient(90deg, transparent, transparent 15px, ${feature.color}15 15px, ${feature.color}15 17px)`,
          }}
        />

        {/* Noise Texture */}
        <div
          className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          }}
        />

        {/* Content */}
        <div className="relative z-10" style={{ transform: 'translateZ(50px)' }}>
          {/* Icon */}
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl shadow-lg mb-6"
            style={{ backgroundColor: feature.color }}
            whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-white">{feature.icon}</div>
          </motion.div>

          {/* Title */}
          <h3 className="text-3xl font-bold text-deep-charcoal mb-4 font-display">
            {feature.title}
          </h3>

          {/* Description */}
          <p className="text-slate-gray text-base leading-relaxed mb-8">
            {feature.description}
          </p>

          {/* Illustration */}
          <div className="mb-8 bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
            {feature.illustration}
          </div>

          {/* Learn More Link */}
          <motion.button
            className={`inline-flex items-center gap-2 ${feature.accentColor} font-semibold text-base group/link`}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            Learn more
            <motion.div
              animate={isHovered ? { x: [0, 5, 0] } : {}}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <ArrowRight size={18} />
            </motion.div>
          </motion.button>
        </div>

        {/* Corner Sparkle */}
        <motion.div
          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={isHovered ? { rotate: [0, 180, 360], scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Sparkles size={20} style={{ color: feature.color }} />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function PlatformShowcase() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-light-slate/30 to-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-amplify-coral/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-electric-purple/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amplify-orange/10 to-sunshine-yellow/10 border border-amplify-orange/20 text-deep-charcoal text-sm font-medium mb-6"
          >
            <Sparkles size={16} className="text-amplify-orange" />
            The Amplify Platform
          </motion.div>

          {/* Headline */}
          <h2 className="text-5xl md:text-6xl font-bold text-deep-charcoal tracking-tight mb-6 font-display">
            The intelligent platform that{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amplify-coral via-electric-purple to-vibrant-magenta">
              amplifies marketing
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl text-slate-gray leading-relaxed">
            Go beyond generation. AmplifyAI understands your brand, crafts content, orchestrates campaigns, and analyzes performance—all in one place.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCardComponent key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
