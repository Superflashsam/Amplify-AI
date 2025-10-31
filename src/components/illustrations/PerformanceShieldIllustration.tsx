// src/components/illustrations/PerformanceShieldIllustration.tsx
'use client';

import { motion } from 'framer-motion';

export default function PerformanceShieldIllustration() {
  return (
    <svg
      width="100%"
      height="200"
      viewBox="0 0 400 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {/* Shield Shape */}
      <motion.path
        d="M 200 30 L 250 50 L 250 110 C 250 140 225 160 200 170 C 175 160 150 140 150 110 L 150 50 Z"
        fill="white"
        stroke="#FDE047"
        strokeWidth="3"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      {/* Shield Inner Glow */}
      <motion.path
        d="M 200 30 L 250 50 L 250 110 C 250 140 225 160 200 170 C 175 160 150 140 150 110 L 150 50 Z"
        fill="#FDE047"
        opacity="0.1"
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Checkmark Animation */}
      <motion.path
        d="M 180 100 L 195 115 L 225 75"
        stroke="#84CC16"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
      />

      {/* Circular Progress Ring 1 */}
      <motion.g transform="translate(320, 80)">
        <circle r="30" fill="none" stroke="#E2E8F0" strokeWidth="4" />
        <motion.circle
          r="30"
          fill="none"
          stroke="#38BDF8"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="188.4"
          initial={{ strokeDashoffset: 188.4 }}
          animate={{ strokeDashoffset: 47.1 }}
          transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
          style={{ transformOrigin: "center", transform: "rotate(-90deg)" }}
        />
        <motion.text
          x="0"
          y="5"
          textAnchor="middle"
          fill="#1E293B"
          fontSize="14"
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          75%
        </motion.text>
      </motion.g>

      {/* Circular Progress Ring 2 */}
      <motion.g transform="translate(320, 150)">
        <circle r="25" fill="none" stroke="#E2E8F0" strokeWidth="3" />
        <motion.circle
          r="25"
          fill="none"
          stroke="#84CC16"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="157"
          initial={{ strokeDashoffset: 157 }}
          animate={{ strokeDashoffset: 39.25 }}
          transition={{ duration: 2, delay: 1.7, ease: "easeOut" }}
          style={{ transformOrigin: "center", transform: "rotate(-90deg)" }}
        />
        <motion.text
          x="0"
          y="5"
          textAnchor="middle"
          fill="#1E293B"
          fontSize="12"
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
        >
          92%
        </motion.text>
      </motion.g>

      {/* Toggle Switch */}
      <motion.g transform="translate(70, 100)">
        <rect
          x="0"
          y="0"
          width="50"
          height="26"
          rx="13"
          fill="#84CC16"
        />
        <motion.circle
          cx="13"
          cy="13"
          r="10"
          fill="white"
          animate={{ cx: [13, 37, 13] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.g>

      {/* Data Bars */}
      {[0, 1, 2].map((i) => (
        <motion.g key={i} transform={`translate(60, ${50 + i * 20})`}>
          <rect x="0" y="0" width="60" height="8" rx="4" fill="#E2E8F0" />
          <motion.rect
            x="0"
            y="0"
            height="8"
            rx="4"
            fill={['#FF6B5B', '#8B5CF6', '#38BDF8'][i]}
            initial={{ width: 0 }}
            animate={{ width: [30, 45, 50][i] }}
            transition={{ duration: 1, delay: 1.8 + i * 0.2, ease: "easeOut" }}
          />
        </motion.g>
      ))}

      {/* Floating Security Icons */}
      {[
        { x: 100, y: 160, delay: 0 },
        { x: 280, y: 40, delay: 0.5 },
      ].map((pos, i) => (
        <motion.g
          key={i}
          transform={`translate(${pos.x}, ${pos.y})`}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            delay: pos.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <circle r="8" fill="#FDE047" opacity="0.3" />
          <motion.path
            d="M -3 0 L 0 3 L 3 -3"
            stroke="#84CC16"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </motion.g>
      ))}
    </svg>
  );
}
