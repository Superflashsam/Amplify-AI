'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import FloatingAvatar from './finalCTA/FloatingAvatar';
import GeometricShapes from './finalCTA/GeometricShapes';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export default function FinalCTA() {
  const avatars = [
    {
      name: 'Sarah',
      role: 'Content Marketer',
      color: '#FF6B5B',
      position: { x: '8%', y: '20%' },
      delay: 0.3,
      imgSrc: PlaceHolderImages.find(p => p.id === 'avatarSarah')?.imageUrl || '',
      imgHint: PlaceHolderImages.find(p => p.id === 'avatarSarah')?.imageHint || '',
    },
    {
      name: 'Mike',
      role: 'Digital Marketer',
      color: '#8B5CF6',
      position: { x: '15%', y: '55%' },
      delay: 0.5,
      imgSrc: PlaceHolderImages.find(p => p.id === 'avatarMike')?.imageUrl || '',
      imgHint: PlaceHolderImages.find(p => p.id === 'avatarMike')?.imageHint || '',
    },
    {
      name: 'Emily',
      role: 'Product Marketer',
      color: '#EC4899',
      position: { x: '85%', y: '25%' },
      delay: 0.7,
      imgSrc: PlaceHolderImages.find(p => p.id === 'avatarEmily')?.imageUrl || '',
      imgHint: PlaceHolderImages.find(p => p.id === 'avatarEmily')?.imageHint || '',
    },
    {
      name: 'Alex',
      role: 'Social Media Manager',
      color: '#38BDF8',
      position: { x: '88%', y: '60%' },
      delay: 0.9,
      imgSrc: PlaceHolderImages.find(p => p.id === 'avatarAlex')?.imageUrl || '',
      imgHint: PlaceHolderImages.find(p => p.id === 'avatarAlex')?.imageHint || '',
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Grid Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-blue/20 via-electric-purple/20 to-vibrant-magenta/20">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(148, 163, 184, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(148, 163, 184, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-blue/5 via-transparent to-electric-purple/5" />
      </div>

      {/* Geometric Shapes */}
      <GeometricShapes />

      {/* Floating Avatars */}
      {avatars.map((avatar, i) => (
        <FloatingAvatar key={i} {...avatar} />
      ))}

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        {/* Central White Card */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Card */}
          <div className="relative bg-white rounded-[32px] p-12 md:p-16 shadow-2xl border border-slate-gray/10">
            {/* Subtle Inner Glow */}
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-sky-blue/5 via-transparent to-electric-purple/5" />

            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Small Badge (Optional) */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-lime-green/10 to-sky-blue/10 border border-lime-green/20 text-deep-charcoal text-sm font-semibold mb-8"
              >
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ⚡
                </motion.span>
                Join 10,000+ Brands
              </motion.div>

              {/* Main Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-deep-charcoal mb-6 font-display leading-tight"
              >
                Ready to Amplify
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amplify-coral via-electric-purple to-vibrant-magenta">
                  Your Marketing?
                </span>
              </motion.h2>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-xl text-slate-gray leading-relaxed mb-10 max-w-2xl mx-auto"
              >
                Start your 14-day free trial. No credit card required.
                <br />
                Cancel anytime.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                {/* Primary CTA */}
                <motion.button
                  className="group relative px-8 py-5 bg-gradient-to-r from-amplify-coral via-electric-purple to-vibrant-magenta text-white rounded-2xl font-bold text-lg shadow-xl shadow-electric-purple/30 overflow-hidden"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ['-200%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                  <span className="relative flex items-center gap-2">
                    Start Free Trial
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight size={20} />
                    </motion.div>
                  </span>
                </motion.button>

                {/* Secondary CTA */}
                <a href="#contact-demo">
                  <motion.button
                    className="px-8 py-5 bg-white text-deep-charcoal border-2 border-slate-gray/20 rounded-2xl font-bold text-lg hover:border-electric-purple hover:bg-light-slate transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center gap-2">
                      <Calendar size={20} />
                      Get a Demo
                    </span>
                  </motion.button>
                </a>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="mt-10 flex items-center justify-center gap-6 text-sm text-slate-gray flex-wrap"
              >
                {['✓ 14-day free trial', '✓ No credit card required', '✓ Cancel anytime'].map(
                  (item, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      className="font-medium"
                    >
                      {item}
                    </motion.span>
                  )
                )}
              </motion.div>
            </div>

            {/* Decorative Corner Elements */}
            <motion.div
              className="absolute -top-3 -right-3 w-20 h-20 bg-gradient-to-br from-sunshine-yellow to-amplify-orange rounded-full blur-2xl opacity-40"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-3 -left-3 w-24 h-24 bg-gradient-to-br from-sky-blue to-electric-purple rounded-full blur-2xl opacity-40"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,64 C240,96 480,32 720,64 C960,96 1200,32 1440,64 L1440,120 L0,120 Z"
            fill="white"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </div>
    </section>
  );
}
