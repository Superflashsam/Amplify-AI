'use client';

import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

interface BillingToggleProps {
  isAnnual: boolean;
  onToggle: () => void;
}

export default function BillingToggle({ isAnnual, onToggle }: BillingToggleProps) {
  return (
    <div className="flex items-center justify-center gap-4 mb-12">
      {/* Monthly Label */}
      <motion.span
        className={`text-lg font-semibold transition-colors duration-300 ${
          !isAnnual ? 'text-deep-charcoal' : 'text-slate-gray'
        }`}
        animate={{ scale: !isAnnual ? 1.05 : 1 }}
      >
        Monthly
      </motion.span>

      {/* Toggle Switch */}
      <button
        onClick={onToggle}
        className="relative w-20 h-10 rounded-full bg-gradient-to-r from-slate-gray/20 to-slate-gray/10 border-2 border-slate-gray/20 transition-all duration-300 hover:border-electric-purple focus:outline-none focus:ring-4 focus:ring-electric-purple/20"
        aria-label="Toggle billing period"
        role="switch"
        aria-checked={isAnnual}
      >
        {/* Toggle Indicator */}
        <motion.div
          className="absolute top-1 left-1 w-6 h-6 rounded-full bg-gradient-to-r from-electric-purple to-vibrant-magenta shadow-lg"
          animate={{
            x: isAnnual ? 36 : 0,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </button>

      {/* Annual Label with Badge */}
      <div className="flex items-center gap-2">
        <motion.span
          className={`text-lg font-semibold transition-colors duration-300 ${
            isAnnual ? 'text-deep-charcoal' : 'text-slate-gray'
          }`}
          animate={{ scale: isAnnual ? 1.05 : 1 }}
        >
          Annual
        </motion.span>

        {/* Savings Badge */}
        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          animate={{
            scale: isAnnual ? [1, 1.1, 1] : 1,
            rotate: isAnnual ? [0, 5, 0] : 0,
          }}
          transition={{
            duration: 0.5,
            repeat: isAnnual ? Infinity : 0,
            repeatDelay: 2,
          }}
          className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-lime-green to-sky-blue text-white text-xs font-bold shadow-md"
        >
          <Zap size={12} />
          Save 20%
        </motion.div>
      </div>
    </div>
  );
}
