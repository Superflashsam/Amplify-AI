// src/components/finalCTA/SocialProofNumbers.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

interface StatProps {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

function AnimatedStat({ value, suffix, label, delay }: StatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 100, damping: 30 });
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (suffix === 'M+') {
        setDisplayValue(latest.toFixed(1));
      } else if (suffix === '+' && latest >= 1000) {
        const kValue = Math.floor(latest / 1000);
        if (kValue > 0) {
            setDisplayValue(kValue.toString() + 'K');
        } else {
            setDisplayValue(Math.floor(latest).toString());
        }
      }
      else {
        setDisplayValue(Math.floor(latest).toString());
      }
    });
    return unsubscribe;
  }, [springValue, suffix]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="text-center"
    >
      <div className="text-5xl font-black text-white mb-2 font-display">
        {displayValue}
        {suffix === 'M+' ? suffix : (value >= 1000 && suffix === '+') ? '+' : suffix}
      </div>
      <div className="text-white/80 text-sm font-medium">{label}</div>
    </motion.div>
  );
}

export default function SocialProofNumbers() {
  const stats = [
    { value: 10000, suffix: '+', label: 'Active Brands', delay: 0.2 },
    { value: 5.0, suffix: 'M+', label: 'Content Pieces', delay: 0.3 },
    { value: 120, suffix: '+', label: 'Countries', delay: 0.4 },
  ];

  return (
    <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
      {stats.map((stat, i) => (
        <AnimatedStat key={i} {...stat} />
      ))}
    </div>
  );
}
