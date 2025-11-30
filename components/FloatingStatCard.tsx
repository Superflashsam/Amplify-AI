import React from 'react';
import { motion, MotionValue, useSpring, useTransform } from 'framer-motion';

interface FloatingStatCardProps {
    children: React.ReactNode;
    mouseX: MotionValue<number>;
    mouseY: MotionValue<number>;
    depth: number;
    initialX: number;
    initialY: number;
    delay: number;
    className?: string;
}

export const FloatingStatCard: React.FC<FloatingStatCardProps> = ({
    children,
    mouseX,
    mouseY,
    depth,
    initialX,
    initialY,
    delay,
    className = ''
}) => {
    // Parallax effect based on mouse position
    const springConfig = { stiffness: 150, damping: 15 };
    const x = useSpring(useTransform(mouseX, [-0.5, 0.5], [-depth, depth]), springConfig);
    const y = useSpring(useTransform(mouseY, [-0.5, 0.5], [-depth, depth]), springConfig);

    // Rotation based on mouse for 3D effect
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig);

    return (
        <motion.div
            initial={{ opacity: 0, x: initialX, y: initialY, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
                delay,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
            }}
            style={{
                x,
                y,
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d'
            }}
            whileHover={{ scale: 1.05, z: 50 }}
            className={`bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-shadow duration-500 ${className}`}
        >
            {children}
        </motion.div>
    );
};
