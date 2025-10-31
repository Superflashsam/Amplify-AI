'use client';

import { motion } from 'framer-motion';

export default function ConnectBrandIllustration() {
  return (
    <svg
      width="100%"
      height="300"
      viewBox="0 0 500 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {/* Browser Window */}
      <motion.g
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Window Frame */}
        <rect x="50" y="40" width="400" height="240" rx="12" fill="white" stroke="#E2E8F0" strokeWidth="2" />
        
        {/* Browser Header */}
        <rect x="50" y="40" width="400" height="40" rx="12" fill="#F1F5F9" />
        <circle cx="70" cy="60" r="5" fill="#FF6B5B" />
        <circle cx="90" cy="60" r="5" fill="#FDE047" />
        <circle cx="110" cy="60" r="5" fill="#84CC16" />
        
        {/* URL Bar */}
        <rect x="140" y="50" width="280" height="20" rx="10" fill="white" stroke="#CBD5E1" strokeWidth="1" />
        <motion.text
          x="155"
          y="64"
          fill="#94A3B8"
          fontSize="12"
          fontFamily="monospace"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          https://yourbrand.com
        </motion.text>
      </motion.g>

      {/* Form Inputs */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        {/* Website URL Input */}
        <rect x="80" y="110" width="340" height="40" rx="8" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
        <text x="95" y="125" fill="#64748B" fontSize="11" fontWeight="600">
          Website URL
        </text>
        <motion.text
          x="95"
          y="142"
          fill="#1E293B"
          fontSize="14"
          initial={{ width: 0 }}
          animate={{ width: 200 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          www.yourbrand.com
        </motion.text>

        {/* Social Links */}
        <rect x="80" y="165" width="340" height="40" rx="8" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
        <text x="95" y="180" fill="#64748B" fontSize="11" fontWeight="600">
          Social Media Handles
        </text>
        <motion.text
          x="95"
          y="197"
          fill="#1E293B"
          fontSize="14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          @yourbrand
        </motion.text>

        {/* Submit Button */}
        <motion.rect
          x="80"
          y="225"
          width="340"
          height="45"
          rx="12"
          fill="url(#gradient-coral-purple)"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2, duration: 0.3 }}
          whileHover={{ scale: 1.02 }}
        />
        <text x="250" y="252" textAnchor="middle" fill="white" fontSize="16" fontWeight="700">
          Connect Brand
        </text>
      </motion.g>

      {/* Data Flow Animation */}
      <motion.g>
        {[0, 1, 2, 3].map((i) => (
          <motion.circle
            key={i}
            r="4"
            fill="#8B5CF6"
            initial={{ x: 450, y: 140 + i * 30, opacity: 0 }}
            animate={{
              x: [450, 500, 520],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              delay: 2.5 + i * 0.3,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}
      </motion.g>

      {/* Gradients */}
      <defs>
        <linearGradient id="gradient-coral-purple" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF6B5B" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
    </svg>
  );
}
