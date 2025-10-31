// src/components/illustrations/CampaignBrainIllustration.tsx
'use client';

import { motion } from 'framer-motion';

export default function CampaignBrainIllustration() {
  const nodes = [
    { id: 1, x: 200, y: 100, size: 16 },
    { id: 2, x: 150, y: 60, size: 12 },
    { id: 3, x: 250, y: 60, size: 12 },
    { id: 4, x: 100, y: 100, size: 10 },
    { id: 5, x: 300, y: 100, size: 10 },
    { id: 6, x: 150, y: 140, size: 10 },
    { id: 7, x: 250, y: 140, size: 10 },
  ];

  const connections = [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 1, to: 4 },
    { from: 1, to: 5 },
    { from: 1, to: 6 },
    { from: 1, to: 7 },
    { from: 2, to: 4 },
    { from: 3, to: 5 },
    { from: 6, to: 4 },
    { from: 7, to: 5 },
  ];

  return (
    <svg
      width="100%"
      height="200"
      viewBox="0 0 400 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {/* Connection Lines */}
      {connections.map((conn, i) => {
        const fromNode = nodes.find((n) => n.id === conn.from)!;
        const toNode = nodes.find((n) => n.id === conn.to)!;
        
        return (
          <motion.line
            key={i}
            x1={fromNode.x}
            y1={fromNode.y}
            x2={toNode.x}
            y2={toNode.y}
            stroke="#38BDF8"
            strokeWidth="2"
            opacity="0.4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: i * 0.1 }}
          />
        );
      })}

      {/* Animated Beams */}
      {connections.slice(0, 3).map((conn, i) => {
        const fromNode = nodes.find((n) => n.id === conn.from)!;
        const toNode = nodes.find((n) => n.id === conn.to)!;
        
        return (
          <motion.line
            key={`beam-${i}`}
            x1={fromNode.x}
            y1={fromNode.y}
            x2={toNode.x}
            y2={toNode.y}
            stroke="#38BDF8"
            strokeWidth="3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              delay: 1 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}

      {/* Nodes */}
      {nodes.map((node, i) => (
        <motion.g key={node.id}>
          {/* Outer Pulse Ring */}
          <motion.circle
            cx={node.x}
            cy={node.y}
            r={node.size + 4}
            fill="none"
            stroke="#38BDF8"
            strokeWidth="2"
            opacity="0.3"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              repeat: Infinity,
            }}
          />
          
          {/* Main Node */}
          <motion.circle
            cx={node.x}
            cy={node.y}
            r={node.size}
            fill={node.id === 1 ? "#8B5CF6" : "#38BDF8"}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
          />
          
          {/* Inner Glow */}
          <motion.circle
            cx={node.x}
            cy={node.y}
            r={node.size * 0.6}
            fill="white"
            opacity="0.8"
            animate={{ opacity: [0.8, 0.4, 0.8] }}
            transition={{
              duration: 1.5,
              delay: i * 0.2,
              repeat: Infinity,
            }}
          />
        </motion.g>
      ))}

      {/* Data Packets */}
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={`packet-${i}`}
          r="4"
          fill="#FDE047"
          initial={{ offsetDistance: "0%", opacity: 0 }}
          animate={{
            offsetDistance: ["0%", "100%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: 1.5 + i * 0.7,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <animateMotion
            dur="2s"
            repeatCount="indefinite"
            begin={`${1.5 + i * 0.7}s`}
          >
            <mpath xlinkHref={`#path${i}`} />
          </animateMotion>
        </motion.circle>
      ))}

      {/* Hidden paths for motion */}
      <defs>
        <path id="path0" d="M 200 100 L 150 60" />
        <path id="path1" d="M 200 100 L 250 60" />
        <path id="path2" d="M 200 100 L 100 100" />
      </defs>
    </svg>
  );
}
