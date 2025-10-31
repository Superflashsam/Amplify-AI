'use client';

import { motion } from 'framer-motion';

export function StarterPlanIllustration() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
      {/* Rocket Body */}
      <motion.g
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <path
          d="M 60 20 L 70 50 L 70 80 L 60 90 L 50 80 L 50 50 Z"
          fill="currentColor"
          opacity="0.9"
        />
        <circle cx="60" cy="50" r="8" fill="white" opacity="0.8" />
        
        {/* Fins */}
        <path d="M 50 60 L 40 75 L 50 75 Z" fill="currentColor" opacity="0.7" />
        <path d="M 70 60 L 80 75 L 70 75 Z" fill="currentColor" opacity="0.7" />
      </motion.g>

      {/* Flames */}
      <motion.g
        animate={{
          y: [0, 3, 0],
          opacity: [1, 0.8, 1],
        }}
        transition={{ duration: 0.6, repeat: Infinity }}
      >
        <path d="M 55 90 Q 60 100 65 90" fill="#FF6B5B" />
        <path d="M 57 90 Q 60 95 63 90" fill="#FDE047" />
      </motion.g>

      {/* Stars */}
      {[
        { x: 30, y: 30 },
        { x: 90, y: 40 },
        { x: 20, y: 70 },
        { x: 95, y: 75 },
      ].map((pos, i) => (
        <motion.g
          key={i}
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
        >
          <path
            d={`M ${pos.x} ${pos.y - 3} L ${pos.x + 0.5} ${pos.y - 0.5} L ${pos.x + 3} ${pos.y} L ${pos.x + 0.5} ${pos.y + 0.5} L ${pos.x} ${pos.y + 3} L ${pos.x - 0.5} ${pos.y + 0.5} L ${pos.x - 3} ${pos.y} L ${pos.x - 0.5} ${pos.y - 0.5} Z`}
            fill="#FDE047"
          />
        </motion.g>
      ))}
    </svg>
  );
}

export function ProfessionalPlanIllustration() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
      {/* Brain Shape */}
      <motion.g
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <circle cx="60" cy="60" r="35" fill="currentColor" opacity="0.9" />
        
        {/* Brain Patterns */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <motion.path
            key={i}
            d={`M ${40 + i * 7} 50 Q ${43 + i * 7} 40 ${46 + i * 7} 50 Q ${43 + i * 7} 60 ${40 + i * 7} 50`}
            stroke="white"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
          />
        ))}
      </motion.g>

      {/* Gears */}
      {[
        { x: 40, y: 40, size: 12, speed: 4 },
        { x: 80, y: 45, size: 10, speed: 5 },
        { x: 75, y: 75, size: 14, speed: 6 },
      ].map((gear, i) => (
        <motion.g
          key={i}
          animate={{ rotate: 360 }}
          transition={{ duration: gear.speed, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: `${gear.x}px ${gear.y}px` }}
        >
          <circle cx={gear.x} cy={gear.y} r={gear.size} fill="white" opacity="0.3" />
          <circle cx={gear.x} cy={gear.y} r={gear.size / 2} fill="currentColor" />
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <rect
              key={angle}
              x={gear.x - 2}
              y={gear.y - gear.size - 2}
              width="4"
              height="4"
              fill="white"
              opacity="0.8"
              transform={`rotate(${angle} ${gear.x} ${gear.y})`}
            />
          ))}
        </motion.g>
      ))}

      {/* Neural Connections */}
      {[
        { x1: 40, y1: 40, x2: 80, y2: 45 },
        { x1: 80, y1: 45, x2: 75, y2: 75 },
        { x1: 75, y1: 75, x2: 40, y2: 40 },
      ].map((line, i) => (
        <motion.line
          key={i}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1 + i * 0.2 }}
        />
      ))}

      {/* Energy Pulse */}
      <motion.circle
        cx="60"
        cy="60"
        r="35"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.4"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </svg>
  );
}

export function EnterprisePlanIllustration() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
      {/* Building Base */}
      <motion.g
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Main Tower */}
        <rect x="45" y="30" width="30" height="60" fill="currentColor" opacity="0.9" rx="4" />
        
        {/* Windows */}
        {[0, 1, 2, 3, 4].map((row) =>
          [0, 1].map((col) => (
            <motion.rect
              key={`${row}-${col}`}
              x={50 + col * 10}
              y={35 + row * 12}
              width="5"
              height="8"
              fill="#FDE047"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 2,
                delay: (row * 2 + col) * 0.2,
                repeat: Infinity,
              }}
            />
          ))
        )}

        {/* Side Buildings */}
        <rect x="30" y="50" width="12" height="40" fill="currentColor" opacity="0.7" rx="2" />
        <rect x="78" y="55" width="12" height="35" fill="currentColor" opacity="0.7" rx="2" />
        
        {/* Antenna */}
        <motion.g
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <line x1="60" y1="30" x2="60" y2="15" stroke="currentColor" strokeWidth="2" />
          <circle cx="60" cy="15" r="3" fill="#FF6B5B" />
          <motion.circle
            cx="60"
            cy="15"
            r="3"
            stroke="#FF6B5B"
            strokeWidth="2"
            fill="none"
            animate={{ r: [3, 8, 3], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.g>
      </motion.g>

      {/* Cloud/Network Layer */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        {[
          { x: 25, y: 25 },
          { x: 85, y: 30 },
          { x: 95, y: 70 },
        ].map((pos, i) => (
          <motion.circle
            key={i}
            cx={pos.x}
            cy={pos.y}
            r="6"
            fill="white"
            opacity="0.6"
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity,
            }}
          />
        ))}
      </motion.g>

      {/* Success Checkmarks */}
      {[
        { x: 20, y: 80 },
        { x: 100, y: 85 },
      ].map((pos, i) => (
        <motion.g
          key={i}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1 + i * 0.3, type: "spring" }}
        >
          <circle cx={pos.x} cy={pos.y} r="8" fill="#84CC16" />
          <path
            d={`M ${pos.x - 3} ${pos.y} L ${pos.x - 1} ${pos.y + 3} L ${pos.x + 3} ${pos.y - 3}`}
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </motion.g>
      ))}
    </svg>
  );
}
