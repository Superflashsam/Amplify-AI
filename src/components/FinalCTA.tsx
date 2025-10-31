// src/components/FinalCTA.tsx
'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import RocketIllustration from './finalCTA/RocketIllustration';
import FloatingParticles from './finalCTA/FloatingParticles';
import TrustBadgesMini from './finalCTA/TrustBadgesMini';
import SocialProofNumbers from './finalCTA/SocialProofNumbers';

export default function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amplify-coral via-electric-purple to-vibrant-magenta">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(255, 107, 91, 0.4) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.4) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, rgba(236, 72, 153, 0.4) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(255, 107, 91, 0.4) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 30px, white 30px, white 32px), repeating-linear-gradient(90deg, transparent, transparent 30px, white 30px, white 32px)',
        }}
      />

      {/* Floating Particles */}
      <FloatingParticles />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium mb-6"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                ⚡
              </motion.div>
              Limited Time Offer
            </motion.div>

            {/* Headline */}
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-display leading-tight">
              Ready to Amplify Your Marketing?
            </h2>

            {/* Subheadline */}
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Join 10,000+ brands creating on-brand content that converts. Start your free 14-day trial today—no credit card required.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              {/* Primary CTA */}
              <motion.button
                className="group relative px-8 py-5 bg-white text-deep-charcoal rounded-2xl font-bold text-lg shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Button Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-sunshine-yellow to-lime-green opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="relative flex items-center justify-center gap-2">
                  Start Your Free Trial
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </span>
              </motion.button>

              {/* Secondary CTA */}
              <motion.button
                className="px-8 py-5 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-2xl font-bold text-lg hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center gap-2">
                  <Calendar size={20} />
                  Schedule a Demo
                </span>
              </motion.button>
            </div>

            {/* Trust Badges */}
            <TrustBadgesMini />

            {/* Social Proof Numbers */}
            <div className="mt-12 pt-12 border-t border-white/20">
              <SocialProofNumbers />
            </div>
          </motion.div>

          {/* Right: Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Glassmorphism Container */}
            <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              <RocketIllustration />

              {/* Corner Decorations */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-sunshine-yellow to-amplify-orange rounded-full blur-2xl opacity-50"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-sky-blue to-electric-purple rounded-full blur-2xl opacity-50"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>

            {/* Floating Success Badge */}
            <motion.div
              className="absolute -top-6 -left-6 bg-gradient-to-r from-lime-green to-sky-blue text-white px-6 py-3 rounded-full shadow-xl font-bold"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, type: "spring" }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🚀 Launch Ready!
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Mini Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 px-8 py-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-amplify-coral to-electric-purple border-4 border-white/20"
                />
              ))}
            </div>
            <p className="text-white/90 text-sm">
              <span className="font-bold">Sarah, Michael, Emily</span> and{' '}
              <span className="font-bold">9,997 others</span> started their free trial this month
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <motion.path
            d="M0,64 C240,96 480,32 720,64 C960,96 1200,32 1440,64 L1440,120 L0,120 Z"
            fill="white"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          />
        </svg>
      </div>
    </section>
  );
}
