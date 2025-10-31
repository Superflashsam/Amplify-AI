'use client';

import { motion } from 'framer-motion';

export default function AIExtractIllustration() {
  // Pre-calculate coordinates to avoid hydration mismatch
  const nodePositions = [
    { x: 70, y: 0 },
    { x: 35, y: 60.62 },
    { x: -35, y: 60.62 },
    { x: -70, y: 0 },
    { x: -35, y: -60.62 },
    { x: 35, y: -60.62 },
  ];

  const particlePositions = [
    { x: 100, y: 0 },
    { x: 86.6, y: 50 },
    { x: 50, y: 86.6 },
    { x: 0, y: 100 },
    { x: -50, y: 86.6 },
    { x: -86.6, y: 50 },
    { x: -100, y: 0 },
    { x: -86.6, y: -50 },
    { x: -50, y: -86.6 },
    { x: 0, y: -100 },
    { x: 50, y: -86.6 },
    { x: 86.6, y: -50 },
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
      {/* AI Brain Center */}
      <g transform="translate(250, 150)">
        {/* Outer Pulse Ring */}
        <motion.circle
          r="60"
          fill="none"
          stroke="#8B5CF6"
          strokeWidth="2"
          opacity="0.3"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Brain Shape */}
        <motion.circle
          r="50"
          fill="url(#gradient-purple-magenta)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        
        {/* AI Symbol */}
        <text
          textAnchor="middle"
          y="8"
          fill="white"
          fontSize="24"
          fontWeight="800"
        >
          AI
        </text>

        {/* Processing Lines - Fixed coordinates */}
        {nodePositions.map((node, i) => (
          <motion.line
            key={i}
            x1="0"
            y1="0"
            x2={node.x}
            y2={node.y}
            stroke="#8B5CF6"
            strokeWidth="2"
            opacity="0.5"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.2,
              repeat: Infinity,
            }}
          />
        ))}
      </g>

      {/* Color Swatches */}
      <motion.g
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
      >
        <rect x="40" y="50" width="80" height="60" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="2" />
        <text x="80" y="75" textAnchor="middle" fill="#64748B" fontSize="10" fontWeight="600">
          COLORS
        </text>
        {['#FF6B5B', '#8B5CF6', '#EC4899', '#38BDF8'].map((color, i) => (
          <motion.circle
            key={i}
            cx={55 + i * 18}
            cy="95"
            r="6"
            fill={color}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2 + i * 0.1 }}
          />
        ))}
      </motion.g>

      {/* Typography Sample */}
      <motion.g
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <rect x="380" y="50" width="80" height="60" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="2" />
        <text x="420" y="75" textAnchor="middle" fill="#64748B" fontSize="10" fontWeight="600">
          FONTS
        </text>
        <text x="420" y="95" textAnchor="middle" fill="#1E293B" fontSize="14" fontWeight="700" fontFamily="Playfair Display">
          Aa
        </text>
      </motion.g>

      {/* Tone Analysis */}
      <motion.g
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <rect x="40" y="200" width="120" height="70" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="2" />
        <text x="100" y="220" textAnchor="middle" fill="#64748B" fontSize="10" fontWeight="600">
          TONE & VOICE
        </text>
        {['Professional', 'Friendly', 'Bold'].map((tone, i) => (
          <motion.text
            key={i}
            x="100"
            y={238 + i * 16}
            textAnchor="middle"
            fill="#1E293B"
            fontSize="11"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 + i * 0.2 }}
          >
            {tone}
          </motion.text>
        ))}
      </motion.g>

      {/* Visual Style */}
      <motion.g
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
      >
        <rect x="340" y="200" width="120" height="70" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="2" />
        <text x="400" y="220" textAnchor="middle" fill="#64748B" fontSize="10" fontWeight="600">
          VISUAL STYLE
        </text>
        <rect x="360" y="230" width="80" height="30" rx="4" fill="#F1F5F9" />
        <motion.rect
          x="365"
          y="235"
          width="70"
          height="20"
          rx="3"
          fill="url(#gradient-style)"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.g>

      {/* Data Particles - Fixed coordinates */}
      {particlePositions.map((particle, i) => (
        <motion.circle
          key={i}
          r="3"
          fill="#FDE047"
          initial={{
            cx: 250,
            cy: 150,
            opacity: 0,
          }}
          animate={{
            cx: 250 + particle.x,
            cy: 150 + particle.y,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: 0.5 + i * 0.1,
            repeat: Infinity,
          }}
        />
      ))}

      <defs>
        <linearGradient id="gradient-purple-magenta" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
        <linearGradient id="gradient-style" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF6B5B" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>
      </defs>
    </svg>
  );
}
