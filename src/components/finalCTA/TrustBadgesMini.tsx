// src/components/finalCTA/TrustBadgesMini.tsx
'use client';

import { motion } from 'framer-motion';
import { Shield, CreditCard, RotateCcw, Check } from 'lucide-react';

const badges = [
  { icon: Shield, text: '14-day free trial' },
  { icon: CreditCard, text: 'No credit card required' },
  { icon: RotateCcw, text: 'Cancel anytime' },
  { icon: Check, text: '30-day money-back' },
];

export default function TrustBadgesMini() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
      {badges.map((badge, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 + i * 0.1 }}
          className="flex items-center gap-2"
        >
          <motion.div
            whileHover={{ rotate: 360, scale: 1.2 }}
            transition={{ duration: 0.5 }}
          >
            <badge.icon size={18} />
          </motion.div>
          <span className="text-sm font-medium">{badge.text}</span>
        </motion.div>
      ))}
    </div>
  );
}
