'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';

export default function FloatingParticles() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const particles = useMemo(() => {
    if (!isClient) return [];
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));
  }, [isClient]);

  const sparkles = useMemo(() => {
    if (!isClient) return [];
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: `${(i * 12.5) + 5}%`,
      top: `${Math.random() * 80 + 10}%`,
      delay: i * 0.4,
    }));
  }, [isClient]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {isClient && particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Sparkles */}
      {isClient && sparkles.map((sparkle) => (
        <motion.div
          key={`sparkle-${sparkle.id}`}
          className="absolute"
          style={{
            left: sparkle.left,
            top: sparkle.top,
          }}
          initial={{ scale: 0, rotate: 0 }}
          animate={{
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            delay: sparkle.delay,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M 8 0 L 9 7 L 16 8 L 9 9 L 8 16 L 7 9 L 0 8 L 7 7 Z"
              fill="#FDE047"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
