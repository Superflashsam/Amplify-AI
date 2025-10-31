'use client';

import { motion } from 'framer-motion';

interface FloatingAvatarProps {
  name: string;
  role: string;
  color: string;
  position: { x: string; y: string };
  delay: number;
}

export default function FloatingAvatar({ name, role, color, position, delay }: FloatingAvatarProps) {
  return (
    <motion.div
      className="absolute hidden lg:flex flex-col items-center gap-2"
      style={{ left: position.x, top: position.y }}
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay, type: "spring" }}
    >
      {/* Avatar with Gradient Border */}
      <motion.div
        className="relative"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          delay: delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Gradient Border Ring */}
        <motion.div
          className="absolute -inset-[3px] rounded-full"
          style={{
            background: `linear-gradient(135deg, ${color}, ${color}80)`,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Avatar Circle */}
        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-white to-light-slate border-4 border-white flex items-center justify-center text-2xl shadow-lg">
          {name.charAt(0)}
        </div>
        
        {/* Pulse Ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2"
          style={{ borderColor: color }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* Role Label */}
      <motion.div
        className="px-4 py-2 rounded-full bg-white shadow-md border border-slate-gray/10"
        whileHover={{ scale: 1.05 }}
      >
        <p className="text-sm font-semibold text-deep-charcoal whitespace-nowrap">
          {role}
        </p>
      </motion.div>
    </motion.div>
  );
}
