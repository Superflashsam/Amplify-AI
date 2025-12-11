import React, { useEffect, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion';
import { cn } from '../utils/cn';

export const HeroBackground: React.FC<{ className?: string }> = ({ className }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Handle mouse movement for the spotlight effect
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const targetX = clientX;
            const targetY = clientY;

            // Smoothly animate to new position
            animate(mouseX, targetX, { duration: 0, type: "tween", ease: "linear" });
            animate(mouseY, targetY, { duration: 0, type: "tween", ease: "linear" });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
            {/* 1. Base Grid Pattern (Faded) */}
            <div
                className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"
            />

            <div
                className="absolute inset-0 z-0 opacity-[0.4]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(99, 102, 241, 0.05) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(99, 102, 241, 0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                    maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
                }}
            />

            {/* 2. Interactive Spotlight Grid (Reveals on Hover) */}
            <motion.div
                className="absolute inset-0 z-10 opacity-100"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(99, 102, 241, 0.15) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(99, 102, 241, 0.15) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                    maskImage: useMotionTemplate`
                        radial-gradient(
                            300px circle at ${mouseX}px ${mouseY}px,
                            black 0%,
                            transparent 100%
                        )
                    `,
                    WebkitMaskImage: useMotionTemplate`
                        radial-gradient(
                            300px circle at ${mouseX}px ${mouseY}px,
                            black 0%,
                            transparent 100%
                        )
                    `,
                }}
            />

            {/* 3. Enhanced Glowing Gradient (Behind Dashboard) */}
            <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] max-w-[1400px] h-[800px] z-0 pointer-events-none">
                {/* Rotating Conic Gradient - The colorful aura */}
                <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 opacity-40 mix-blend-color-dodge"
                    style={{
                        background: 'conic-gradient(from 0deg at 50% 50%, #FF5A57, #E02F75, #6700A3, #4338ca, #6700A3, #E02F75, #FF5A57)',
                        filter: 'blur(120px)',
                    }}
                />

                {/* Pulsing Core - The intense center */}
                <motion.div
                    animate={{
                        scale: [0.8, 1.0, 0.8],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-violet-600/30 to-fuchsia-600/30 rounded-full blur-[100px] mix-blend-overlay"
                />

                {/* Secondary Floating Orbs for "Satisfying" Movement */}
                <motion.div
                    animate={{
                        x: [-50, 50, -50],
                        y: [-20, 30, -20],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] mix-blend-multiply"
                />
                <motion.div
                    animate={{
                        x: [50, -50, 50],
                        y: [30, -20, 30],
                        scale: [1.2, 0.9, 1.2],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-1/3 right-1/3 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] mix-blend-multiply"
                />
            </div>

            {/* 4. Bottom Fade Out */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#EEF2FF] to-transparent z-20" />
        </div>
    );
};
