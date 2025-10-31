// src/components/finalCTA/RocketIllustration.tsx
'use client';

import { motion } from 'framer-motion';

export default function RocketIllustration() {
  return (
    <svg
      width="100%"
      height="400"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {/* Background Stars */}
      {[...Array(15)].map((_, i) => (
        <motion.circle
          key={`star-${i}`}
          cx={Math.random() * 400}
          cy={Math.random() * 400}
          r={Math.random() * 1.5 + 0.5}
          fill="white"
          opacity="0.7"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{
            duration: Math.random() * 2 + 2,
            delay: Math.random() * 3,
            repeat: Infinity,
          }}
        />
      ))}
      
      {/* Rocket Group */}
      <motion.g
        initial={{ y: 50, rotate: -5 }}
        animate={{ y: [0, -15, 0], rotate: [-5, 5, -5] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* Flames */}
        <g transform="translate(185, 270)">
          <motion.path
            d="M 15 0 Q 30 30 15 60 Q 0 30 15 0"
            fill="url(#flameGradient)"
            animate={{
              scaleY: [1, 1.2, 1],
              y: [0, 10, 0],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </g>
        
        {/* Engine Glow */}
        <motion.ellipse
          cx="200"
          cy="270"
          rx="25"
          ry="10"
          fill="#FF6B5B"
          opacity="0.5"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          style={{ filter: 'blur(10px)' }}
        />

        {/* Rocket Body */}
        <path
          d="M200 80 C 170 120, 170 240, 200 280 C 230 240, 230 120, 200 80 Z"
          fill="url(#rocketBodyGradient)"
        />
        
        {/* Highlight */}
        <path
          d="M200 80 C 180 120, 180 240, 200 280"
          stroke="white"
          strokeWidth="2"
          strokeOpacity="0.3"
          fill="none"
        />

        {/* Window */}
        <circle cx="200" cy="140" r="18" fill="#38BDF8" />
        <circle cx="200" cy="140" r="14" fill="#FFFFFF" opacity="0.2" />
        <motion.circle
          cx="195"
          cy="135"
          r="4"
          fill="white"
          opacity="0.7"
          animate={{ x: [0, 5], y: [0, 2] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Fins */}
        <path
          d="M 170 260 L 140 280 C 150 250, 160 250, 170 260 Z"
          fill="#EC4899"
        />
        <path
          d="M 230 260 L 260 280 C 250 250, 240 250, 230 260 Z"
          fill="#EC4899"
        />
        
        {/* Center Fin */}
         <path
          d="M 200 280 L 195 290 L 205 290 Z"
          fill="#8B5CF6"
        />

      </motion.g>

      {/* Gradients */}
      <defs>
        <linearGradient
          id="rocketBodyGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#E2E8F0" />
          <stop offset="50%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>
        <radialGradient id="flameGradient">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="50%" stopColor="#FF6B5B" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
         <radialGradient id="planet-gradient">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </radialGradient>
      </defs>
    </svg>
  );
}
