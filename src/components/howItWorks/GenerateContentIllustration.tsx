'use client';

import { motion } from 'framer-motion';

export default function GenerateContentIllustration() {
  // Pre-calculate coordinates to avoid hydration mismatch
  const sparklePositions = [
    { cx: 25, cy: 0 },
    { cx: 7.72, cy: 23.78 },
    { cx: -20.22, cy: 14.69 },
    { cx: -20.22, cy: -14.69 },
    { cx: 7.72, cy: -23.78 },
  ];

  return (
    <svg
      width="100%"
      height="300"
      viewBox="0 0 500 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {/* Content Cards Being Created */}
      {[
        { x: 60, y: 60, color: '#FF6B5B', delay: 0.2, type: 'Blog Post' },
        { x: 180, y: 60, color: '#8B5CF6', delay: 0.4, type: 'Social' },
        { x: 300, y: 60, color: '#EC4899', delay: 0.6, type: 'Email' },
        { x: 120, y: 160, color: '#38BDF8', delay: 0.8, type: 'Video' },
        { x: 240, y: 160, color: '#84CC16', delay: 1, type: 'Ad Copy' },
      ].map((card, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, scale: 0, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: card.delay, type: "spring" }}
        >
          {/* Card Container */}
          <rect
            x={card.x}
            y={card.y}
            width="100"
            height="80"
            rx="8"
            fill="white"
            stroke={card.color}
            strokeWidth="2"
          />
          
          {/* Card Type Badge */}
          <rect
            x={card.x + 8}
            y={card.y + 8}
            width="84"
            height="18"
            rx="4"
            fill={card.color}
            opacity="0.2"
          />
          <text
            x={card.x + 50}
            y={card.y + 20}
            textAnchor="middle"
            fill={card.color}
            fontSize="9"
            fontWeight="600"
          >
            {card.type}
          </text>

          {/* Content Lines */}
          {[0, 1, 2].map((line) => (
            <motion.line
              key={line}
              x1={card.x + 12}
              y1={card.y + 38 + line * 12}
              x2={card.x + 88}
              y2={card.y + 38 + line * 12}
              stroke={card.color}
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: card.delay + 0.3 + line * 0.1 }}
            />
          ))}

          {/* Sparkle Effect */}
          <motion.circle
            cx={card.x + 90}
            cy={card.y + 10}
            r="4"
            fill="#FDE047"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 0] }}
            transition={{
              duration: 1.5,
              delay: card.delay + 0.5,
              repeat: Infinity,
            }}
          />
        </motion.g>
      ))}

      {/* AI Magic Wand */}
      <motion.g
        initial={{ opacity: 0, rotate: -45 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.8 }}
        transform="translate(420, 120)"
      >
        <motion.line
          x1="0"
          y1="40"
          x2="0"
          y2="0"
          stroke="#8B5CF6"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <motion.path
          d="M -8 0 L 0 -12 L 8 0 L 0 8 Z"
          fill="#FDE047"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Magic Sparkles */}
        {sparklePositions.map((pos, i) => (
          <motion.circle
            key={i}
            cx={pos.cx}
            cy={pos.cy}
            r="2"
            fill="#FDE047"
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.2,
              repeat: Infinity,
            }}
          />
        ))}
      </motion.g>

      {/* Progress Indicator */}
      <motion.g transform="translate(50, 260)">
        <rect x="0" y="0" width="400" height="8" rx="4" fill="#F1F5F9" />
        <motion.rect
          x="0"
          y="0"
          height="8"
          rx="4"
          fill="url(#gradient-progress)"
          initial={{ width: 0 }}
          animate={{ width: 400 }}
          transition={{ duration: 3, delay: 0.5 }}
        />
        <motion.text
          x="200"
          y="25"
          textAnchor="middle"
          fill="#64748B"
          fontSize="11"
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          Generating 5 content pieces...
        </motion.text>
      </motion.g>

      <defs>
        <linearGradient id="gradient-progress" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF6B5B" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#84CC16" />
        </linearGradient>
      </defs>
    </svg>
  );
}
