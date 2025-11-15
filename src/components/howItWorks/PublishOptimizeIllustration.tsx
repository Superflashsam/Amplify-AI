'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

function ClientOnlyChart() {
    const [chartData, setChartData] = useState<number[]>([]);
  
    useEffect(() => {
      // Generate random data only on the client side
      setChartData(
        Array.from({ length: 7 }, () => 20 + Math.random() * 30)
      );
    }, []);
  
    if (chartData.length === 0) {
      // Return a static placeholder or null on the server and initial client render
      const staticBars = [30, 45, 25, 50, 35, 40, 28];
      return (
        <g>
          {staticBars.map((height, i) => (
            <rect
              key={i}
              x={240 + i * 30}
              y={220 - height}
              width="20"
              height={height}
              rx="4"
              fill="url(#gradient-chart)"
            />
          ))}
        </g>
      );
    }
  
    return (
        <motion.g>
        {chartData.map((height, i) => (
          <motion.rect
            key={i}
            x={240 + i * 30}
            y={220}
            width="20"
            height="0"
            rx="4"
            fill="url(#gradient-chart)"
            initial={{ height: 0, y: 220 }}
            animate={{ 
              height: height,
              y: 220 - height
            }}
            transition={{ delay: 2.5 + i * 0.1, duration: 0.5 }}
          />
        ))}
      </motion.g>
    );
  }

export default function PublishOptimizeIllustration() {
  return (
    <svg
      width="100%"
      height="300"
      viewBox="0 0 500 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {/* Rocket Launch */}
      <motion.g
        transform="translate(100, 200)"
        initial={{ y: 0 }}
        animate={{ y: -120 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
      >
        {/* Rocket Body */}
        <motion.path
          d="M 0 -40 L 15 0 L -15 0 Z"
          fill="url(#gradient-rocket)"
          stroke="#1E293B"
          strokeWidth="2"
        />
        <circle cx="0" cy="-20" r="8" fill="white" opacity="0.8" />
        
        {/* Flames */}
        <motion.path
          d="M -10 0 Q -5 10 0 8 Q 5 10 10 0"
          fill="#FF6B5B"
          animate={{ 
            d: [
              "M -10 0 Q -5 10 0 8 Q 5 10 10 0",
              "M -10 0 Q -5 15 0 12 Q 5 15 10 0",
              "M -10 0 Q -5 10 0 8 Q 5 10 10 0",
            ]
          }}
          transition={{ duration: 0.3, repeat: Infinity }}
        />
        <motion.path
          d="M -7 0 Q -3 8 0 6 Q 3 8 7 0"
          fill="#FDE047"
          animate={{ 
            d: [
              "M -7 0 Q -3 8 0 6 Q 3 8 7 0",
              "M -7 0 Q -3 12 0 10 Q 3 12 7 0",
              "M -7 0 Q -3 8 0 6 Q 3 8 7 0",
            ]
          }}
          transition={{ duration: 0.3, repeat: Infinity, delay: 0.1 }}
        />
      </motion.g>

      {/* Launch Cloud */}
      <motion.g
        transform="translate(100, 220)"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 2, opacity: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <circle cx="0" cy="0" r="20" fill="#E2E8F0" />
        <circle cx="15" cy="5" r="15" fill="#E2E8F0" />
        <circle cx="-15" cy="5" r="15" fill="#E2E8F0" />
      </motion.g>

      {/* Analytics Dashboard */}
      <motion.g
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        {/* Dashboard Container */}
        <rect x="220" y="40" width="250" height="220" rx="12" fill="white" stroke="#E2E8F0" strokeWidth="2" />
        
        {/* Dashboard Header */}
        <rect x="220" y="40" width="250" height="40" rx="12" fill="#F8FAFC" />
        <text x="345" y="65" textAnchor="middle" fill="#1E293B" fontSize="14" fontWeight="700">
          Campaign Analytics
        </text>

        {/* Metric Cards */}
        {[
          { x: 235, y: 95, value: '2.4K', label: 'Reach', color: '#38BDF8' },
          { x: 345, y: 95, value: '+47%', label: 'Engagement', color: '#84CC16' },
          { x: 290, y: 150, value: '$1.2K', label: 'Revenue', color: '#EC4899' },
        ].map((metric, i) => (
          <motion.g
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2 + i * 0.2, type: "spring" }}
          >
            <rect
              x={metric.x}
              y={metric.y}
              width="90"
              height="45"
              rx="8"
              fill={`${metric.color}15`}
              stroke={metric.color}
              strokeWidth="1.5"
            />
            <text
              x={metric.x + 45}
              y={metric.y + 22}
              textAnchor="middle"
              fill={metric.color}
              fontSize="18"
              fontWeight="800"
            >
              {metric.value}
            </text>
            <text
              x={metric.x + 45}
              y={metric.y + 36}
              textAnchor="middle"
              fill="#64748B"
              fontSize="10"
              fontWeight="600"
            >
              {metric.label}
            </text>
          </motion.g>
        ))}

        {/* Chart */}
        <ClientOnlyChart />

        {/* Success Checkmark */}
        <motion.g
          transform="translate(445, 75)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 3, type: "spring" }}
        >
          <circle r="12" fill="#84CC16" />
          <path
            d="M -4 0 L -1 4 L 5 -4"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </motion.g>
      </motion.g>

      {/* Platform Icons */}
      {[
        { x: 200, y: 100, color: '#FF6B5B', delay: 1.8 },
        { x: 190, y: 160, color: '#8B5CF6', delay: 2 },
        { x: 200, y: 220, color: '#38BDF8', delay: 2.2 },
      ].map((platform, i) => (
        <motion.circle
          key={i}
          cx={platform.x}
          cy={platform.y}
          r="10"
          fill={platform.color}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: platform.delay, type: "spring" }}
        />
      ))}

      <defs>
        <linearGradient id="gradient-rocket" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
        <linearGradient id="gradient-chart" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#84CC16" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>
      </defs>
    </svg>
  );
}
