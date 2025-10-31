// src/components/illustrations/ContentStudioIllustration.tsx
'use client';

import { motion } from 'framer-motion';

export default function ContentStudioIllustration() {
  return (
    <svg
      width="100%"
      height="200"
      viewBox="0 0 400 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {/* Document 1 - Left */}
      <motion.g
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <rect x="60" y="40" width="80" height="100" rx="8" fill="white" stroke="#FF6B5B" strokeWidth="2" />
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.line
            key={i}
            x1="75"
            y1={60 + i * 15}
            x2="125"
            y2={60 + i * 15}
            stroke="#FF6B5B"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
          />
        ))}
      </motion.g>

      {/* Flow Arrow 1 */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <motion.path
          d="M 145 90 L 175 90"
          stroke="#EC4899"
          strokeWidth="3"
          strokeLinecap="round"
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M 170 85 L 175 90 L 170 95"
          stroke="#EC4899"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </motion.g>

      {/* Funnel/Processor */}
      <motion.g
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <motion.circle
          cx="200"
          cy="90"
          r="30"
          fill="#8B5CF6"
          opacity="0.2"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <circle cx="200" cy="90" r="25" fill="#8B5CF6" />
        <motion.path
          d="M 190 85 L 195 90 L 190 95"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          animate={{ x: [0, 5, 10, 15] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M 200 85 L 205 90 L 200 95"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          animate={{ x: [0, 5, 10, 15] }}
          transition={{ duration: 1.5, delay: 0.3, repeat: Infinity, ease: "linear" }}
        />
      </motion.g>

      {/* Flow Arrow 2 */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <motion.path
          d="M 230 90 L 260 90"
          stroke="#EC4899"
          strokeWidth="3"
          strokeLinecap="round"
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M 255 85 L 260 90 L 255 95"
          stroke="#EC4899"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </motion.g>

      {/* Document 2 - Right */}
      <motion.g
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.7 }}
      >
        <rect x="260" y="40" width="80" height="100" rx="8" fill="white" stroke="#38BDF8" strokeWidth="2" />
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.line
            key={i}
            x1="275"
            y1={60 + i * 15}
            x2="325"
            y2={60 + i * 15}
            stroke="#38BDF8"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 2 + i * 0.1 }}
          />
        ))}
      </motion.g>

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.circle
          key={i}
          cx={100 + i * 40}
          cy={30 + (i % 2) * 20}
          r="3"
          fill="#FDE047"
          opacity="0.6"
          animate={{
            y: [0, -10, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}
