'use client';

import { motion } from 'framer-motion';

export default function GeometricShapes() {
  const shapes = [
    // Rectangles
    {
      type: 'rect',
      x: '10%',
      y: '15%',
      width: 120,
      height: 80,
      color: 'from-amplify-coral to-vibrant-magenta',
      rotation: -15,
      duration: 8,
    },
    {
      type: 'rect',
      x: '85%',
      y: '25%',
      width: 100,
      height: 60,
      color: 'from-electric-purple to-sky-blue',
      rotation: 12,
      duration: 10,
    },
    {
      type: 'rect',
      x: '5%',
      y: '70%',
      width: 90,
      height: 90,
      color: 'from-lime-green to-sunshine-yellow',
      rotation: 45,
      duration: 12,
    },
    // Circles
    {
      type: 'circle',
      x: '90%',
      y: '70%',
      size: 150,
      color: 'from-sky-blue to-electric-purple',
      duration: 15,
    },
    {
      type: 'circle',
      x: '15%',
      y: '30%',
      size: 100,
      color: 'from-vibrant-magenta to-amplify-coral',
      duration: 13,
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: shape.x,
            top: shape.y,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: i * 0.2 }}
        >
          {shape.type === 'rect' ? (
            <motion.div
              className={`bg-gradient-to-br ${shape.color} rounded-2xl blur-xl opacity-20`}
              style={{
                width: shape.width,
                height: shape.height,
                rotate: shape.rotation,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [shape.rotation, shape.rotation + 10, shape.rotation],
              }}
              transition={{
                duration: shape.duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ) : (
            <motion.div
              className={`bg-gradient-to-br ${shape.color} rounded-full blur-2xl opacity-15`}
              style={{
                width: shape.size,
                height: shape.size,
              }}
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 20, 0],
              }}
              transition={{
                duration: shape.duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}
        </motion.div>
      ))}

      {/* Diagonal Stripes */}
      <motion.div
        className="absolute top-0 right-1/4 w-64 h-full bg-gradient-to-br from-electric-purple/10 to-transparent"
        style={{ transform: 'skewX(-15deg)' }}
        animate={{ x: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-0 left-1/3 w-48 h-full bg-gradient-to-br from-sky-blue/10 to-transparent"
        style={{ transform: 'skewX(15deg)' }}
        animate={{ x: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
