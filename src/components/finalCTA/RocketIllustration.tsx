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
      {/* Background Planet */}
      <motion.circle
        cx="320"
        cy="100"
        r="40"
        fill="url(#planet-gradient)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
      <motion.circle
        cx="320"
        cy="100"
        r="40"
        fill="none"
        stroke="white"
        strokeWidth="2"
        opacity="0.3"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Stars */}
      {[
        { x: 50, y: 50, delay: 0 },
        { x: 350, y: 80, delay: 0.2 },
        { x: 80, y: 150, delay: 0.4 },
        { x: 340, y: 200, delay: 0.6 },
        { x: 100, y: 280, delay: 0.8 },
        { x: 320, y: 320, delay: 1 },
      ].map((star, i) => (
        <motion.g
          key={i}
          initial={{ scale: 0, rotate: 0 }}
          animate={{
            scale: [0, 1, 1, 0],
            rotate: [0, 180, 360, 360],
          }}
          transition={{
            duration: 3,
            delay: star.delay,
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          <path
            d={`M ${star.x} ${star.y - 6} L ${star.x + 1} ${star.y - 1} L ${star.x + 6} ${star.y} L ${star.x + 1} ${star.y + 1} L ${star.x} ${star.y + 6} L ${star.x - 1} ${star.y + 1} L ${star.x - 6} ${star.y} L ${star.x - 1} ${star.y - 1} Z`}
            fill="#FDE047"
          />
        </motion.g>
      ))}

      {/* Main Rocket */}
      <motion.g
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* Rocket Body */}
        <motion.path
          d="M 200 80 L 220 140 L 220 200 L 200 220 L 180 200 L 180 140 Z"
          fill="url(#rocket-gradient)"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Window */}
        <motion.circle
          cx="200"
          cy="130"
          r="15"
          fill="white"
          opacity="0.9"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="200"
          cy="130"
          r="12"
          fill="#38BDF8"
          opacity="0.6"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Rocket Nose */}
        <motion.path
          d="M 200 60 L 215 80 L 185 80 Z"
          fill="#FF6B5B"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Side Fins */}
        <motion.path
          d="M 180 170 L 165 200 L 180 200 Z"
          fill="#8B5CF6"
          opacity="0.8"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M 220 170 L 235 200 L 220 200 Z"
          fill="#8B5CF6"
          opacity="0.8"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Decorative Lines */}
        <motion.line
          x1="190"
          y1="100"
          x2="210"
          y2="100"
          stroke="white"
          strokeWidth="2"
          opacity="0.6"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.line
          x1="190"
          y1="110"
          x2="210"
          y2="110"
          stroke="white"
          strokeWidth="2"
          opacity="0.6"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.g>

      {/* Flames */}
      <motion.g
        animate={{
          y: [0, -10, 0],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.path
          d="M 185 220 Q 200 245 215 220"
          fill="#FF6B5B"
          animate={{
            d: [
              "M 185 220 Q 200 245 215 220",
              "M 185 220 Q 200 255 215 220",
              "M 185 220 Q 200 245 215 220",
            ],
          }}
          transition={{ duration: 0.4, repeat: Infinity }}
        />
        <motion.path
          d="M 188 220 Q 200 240 212 220"
          fill="#FDE047"
          animate={{
            d: [
              "M 188 220 Q 200 240 212 220",
              "M 188 220 Q 200 248 212 220",
              "M 188 220 Q 200 240 212 220",
            ],
          }}
          transition={{ duration: 0.4, repeat: Infinity, delay: 0.1 }}
        />
        <motion.path
          d="M 192 220 Q 200 235 208 220"
          fill="white"
          opacity="0.8"
          animate={{
            d: [
              "M 192 220 Q 200 235 208 220",
              "M 192 220 Q 200 242 208 220",
              "M 192 220 Q 200 235 208 220",
            ],
          }}
          transition={{ duration: 0.4, repeat: Infinity, delay: 0.2 }}
        />
      </motion.g>

      {/* Smoke Trail */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.circle
          key={i}
          r="8"
          fill="white"
          opacity="0.3"
          initial={{ cx: 200, cy: 260 }}
          animate={{
            cy: [260 + i * 20, 320 + i * 20],
            cx: [200, 195 + Math.sin(i) * 10, 205 - Math.sin(i) * 10],
            opacity: [0.3, 0],
            scale: [1, 1.5],
          }}
          transition={{
            duration: 2,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Success Confetti */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30);
        const radius = 80;
        const x = 200 + Math.cos((angle * Math.PI) / 180) * radius;
        const y = 200 + Math.sin((angle * Math.PI) / 180) * radius;
        const colors = ['#FF6B5B', '#8B5CF6', '#EC4899', '#38BDF8', '#84CC16', '#FDE047'];

        return (
          <motion.rect
            key={i}
            width="6"
            height="6"
            rx="1"
            fill={colors[i % colors.length]}
            initial={{ x: 200, y: 200, opacity: 0, rotate: 0 }}
            animate={{
              x,
              y,
              opacity: [0, 1, 0],
              rotate: 360,
            }}
            transition={{
              duration: 2,
              delay: 1.5 + i * 0.05,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
        );
      })}

      {/* Growth Arrow */}
      <motion.g
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.path
          d="M 60 320 L 120 280 L 120 300 L 160 260 L 160 280 L 200 240"
          stroke="#84CC16"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        />
        <motion.path
          d="M 200 240 L 185 245 L 195 255 Z"
          fill="#84CC16"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2.5, type: "spring" }}
        />
      </motion.g>

      {/* Gradients */}
      <defs>
        <linearGradient id="rocket-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="50%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#FF6B5B" />
        </linearGradient>
        <radialGradient id="planet-gradient">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </radialGradient>
      </defs>
    </svg>
  );
}
