'use client';

import { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Check, Info, ArrowRight } from 'lucide-react';
import { PricingPlan } from './types';
import React from 'react';

interface PricingCardProps {
  plan: PricingPlan;
  isAnnual: boolean;
  index: number;
}

export default function PricingCard({ plan, isAnnual, index }: PricingCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [tooltipIndex, setTooltipIndex] = useState<number | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['5deg', '-5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-5deg', '5deg']);

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

  const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
  const displayPrice = plan.id === 'enterprise' ? 'Custom' : `$${price}`;
  
  const planIcon = React.isValidElement(plan.icon)
    ? React.cloneElement(plan.icon as React.ReactElement<any>, { isHovered })
    : plan.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={`relative group ${plan.popular ? 'lg:-mt-6' : ''}`}
    >
      {/* Popular Badge Ribbon */}
      {plan.popular && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="relative px-6 py-2 bg-gradient-to-r from-lime-green to-sky-blue text-white text-sm font-bold rounded-full shadow-lg">
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-lime-green to-sky-blue blur"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="relative flex items-center gap-1">
              ⭐ Most Popular
            </span>
          </div>
        </motion.div>
      )}

      {/* Glow Effect */}
      <motion.div
        className={`absolute -inset-[2px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl ${
          plan.popular ? 'opacity-50' : ''
        }`}
        style={{ background: plan.color }}
        animate={isHovered || plan.popular ? { scale: [1, 1.03, 1] } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Card Container */}
      <div
        className={`relative h-full bg-white/80 backdrop-blur-sm rounded-3xl p-8 border-2 ${
          plan.popular ? 'border-electric-purple/30' : 'border-slate-gray/10'
        } shadow-xl overflow-hidden`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 20px, ${plan.color}40 20px, ${plan.color}40 22px), repeating-linear-gradient(90deg, transparent, transparent 20px, ${plan.color}40 20px, ${plan.color}40 22px)`,
          }}
        />

        {/* Noise Texture */}
        <div
          className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          }}
        />

        {/* Content */}
        <div className="relative z-10" style={{ transform: 'translateZ(50px)' }}>
          {/* Icon Illustration */}
          <motion.div
            className="mb-6"
            style={{ color: plan.color }}
            animate={isHovered ? { rotate: [0, 5, -5, 0] } : {}}
            transition={{ duration: 0.6 }}
          >
            {planIcon}
          </motion.div>

          {/* Plan Name */}
          <h3 className="text-3xl font-bold text-deep-charcoal mb-2 font-display">
            {plan.name}
          </h3>

          {/* Description */}
          <p className="text-slate-gray text-sm mb-6">{plan.description}</p>

          {/* Price */}
          <div className="mb-8">
            <div className="flex items-baseline gap-2">
              <motion.span
                key={`${plan.id}-${isAnnual}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-6xl font-black text-deep-charcoal font-display"
              >
                {displayPrice}
              </motion.span>
              {plan.id !== 'enterprise' && (
                <span className="text-slate-gray text-lg">/month</span>
              )}
            </div>
            {isAnnual && plan.id !== 'enterprise' && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-lime-green font-semibold mt-2"
              >
                Billed ${price * 12} annually
              </motion.p>
            )}
          </div>

          {/* CTA Button */}
          <motion.button
            className={`w-full py-4 px-6 rounded-xl font-bold text-lg mb-8 transition-all duration-300 ${
              plan.popular
                ? 'bg-gradient-to-r from-electric-purple to-vibrant-magenta text-white shadow-lg hover:shadow-xl'
                : 'bg-light-slate text-deep-charcoal hover:bg-slate-gray/20'
            }`}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center justify-center gap-2">
              {plan.cta.text}
              <ArrowRight size={20} />
            </span>
          </motion.button>

          {/* Features List */}
          <div className="space-y-4">
            <p className="text-sm font-semibold text-deep-charcoal mb-3">
              What's included:
            </p>
            {plan.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.05 }}
                className="flex items-start gap-3 group/feature"
              >
                <motion.div
                  className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                  style={{ background: `${plan.color}20` }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <Check size={14} style={{ color: plan.color }} strokeWidth={3} />
                </motion.div>
                <div className="flex-1 flex items-center gap-2">
                  <span className="text-slate-gray text-sm">{feature.name}</span>
                  {feature.tooltip && (
                    <div className="relative">
                      <button
                        onMouseEnter={() => setTooltipIndex(i)}
                        onMouseLeave={() => setTooltipIndex(null)}
                        className="text-slate-gray/50 hover:text-slate-gray transition-colors"
                      >
                        <Info size={14} />
                      </button>
                      {tooltipIndex === i && (
                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute left-0 top-6 w-48 p-3 bg-deep-charcoal text-white text-xs rounded-lg shadow-xl z-50"
                        >
                          {feature.tooltip}
                          <div className="absolute -top-1 left-4 w-2 h-2 bg-deep-charcoal rotate-45" />
                        </motion.div>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Limits */}
          <div className="mt-8 pt-6 border-t border-slate-gray/10">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold font-display" style={{ color: plan.color }}>
                  {plan.limits.content}
                </p>
                <p className="text-xs text-slate-gray mt-1">Content/mo</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-display" style={{ color: plan.color }}>
                  {plan.limits.brands}
                </p>
                <p className="text-xs text-slate-gray mt-1">Brands</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-display" style={{ color: plan.color }}>
                  {plan.limits.users}
                </p>
                <p className="text-xs text-slate-gray mt-1">Users</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
