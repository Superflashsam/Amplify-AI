// src/components/illustrations/BrandIntelligenceIllustration.tsx
'use client';

import { motion } from 'framer-motion';

export default function BrandIntelligenceIllustration() {
  return (
    <svg
      width="100%"
      height="200"
      viewBox="0 0 400 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {/* Background Grid */}
      <motion.g opacity="0.3">
        {[...Array(8)].map((_, i) => (
          <motion.line
            key={`h-${i}`}
            x1="0"
            y1={i * 25}
            x2="400"
            y2={i * 25}
            stroke="#84CC16"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: i * 0.1 }}
          />
        ))}
        {[...Array(16)].map((_, i) => (
          <motion.line
            key={`v-${i}`}
            x1={i * 25}
            y1="0"
            x2={i * 25}
            y2="200"
            stroke="#84CC16"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: i * 0.1 }}
          />
        ))}
      </motion.g>

      {/* Animated Graph Line */}
      <motion.path
        d="M 50 150 L 100 120 L 150 90 L 200 100 L 250 60 L 300 80 L 350 40"
        stroke="#EC4899"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
      />

      {/* Data Points */}
      {[
        { x: 50, y: 150 },
        { x: 100, y: 120 },
        { x: 150, y: 90 },
        { x: 200, y: 100 },
        { x: 250, y: 60 },
        { x: 300, y: 80 },
        { x: 350, y: 40 },
      ].map((point, i) => (
        <motion.g key={i}>
          <motion.circle
            cx={point.x}
            cy={point.y}
            r="8"
            fill="#FFFFFF"
            stroke="#EC4899"
            strokeWidth="3"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
          />
          <motion.circle
            cx={point.x}
            cy={point.y}
            r="8"
            fill="#EC4899"
            opacity="0.3"
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.5, 1] }}
            transition={{
              duration: 2,
              delay: 0.5 + i * 0.1,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </motion.g>
      ))}

      {/* Animated Color Wheel */}
      <motion.g transform="translate(80, 140)">
        <motion.circle
          r="20"
          fill="none"
          stroke="#84CC16"
          strokeWidth="2"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <motion.circle
            key={i}
            cx={Math.cos((angle * Math.PI) / 180) * 20}
            cy={Math.sin((angle * Math.PI) / 180) * 20}
            r="4"
            fill={['#FF6B5B', '#8B5CF6', '#EC4899', '#38BDF8', '#84CC16', '#FDE047'][i]}
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 1.5,
              delay: i * 0.2,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        ))}
      </motion.g>

      {/* Sparkles */}
      {[
        { x: 30, y: 50 },
        { x: 370, y: 30 },
        { x: 320, y: 160 },
      ].map((pos, i) => (
        <motion.g key={i} transform={`translate(${pos.x}, ${pos.y})`}>
          <motion.path
            d="M 0 -6 L 1 -1 L 6 0 L 1 1 L 0 6 L -1 1 L -6 0 L -1 -1 Z"
            fill="#FDE047"
            initial={{ scale: 0, rotate: 0 }}
            animate={{
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </motion.g>
      ))}
    </svg>
  );
}
