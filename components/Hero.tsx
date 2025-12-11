
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Play, Check, Sparkles } from 'lucide-react';
import { LogoMarquee } from './UiElements';
import { HeroAnimation } from './HeroAnimation';

import { HeroBackground } from './HeroBackground';

export const Hero: React.FC = () => {
    const navigate = useNavigate();
    // Premium Easing Curves
    // "Soft Settling" for large elements
    const softEase = [0.25, 0.1, 0.25, 1.0] as const;
    // "Bouncy" for buttons/interactive elements
    const bounceEase = [0.34, 1.56, 0.64, 1] as const;

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12, // Slightly faster stagger for cohesion
                delayChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20, filter: 'blur(8px)' }, // More blur for cinematic effect
        show: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                duration: 1.1,
                ease: softEase
            }
        },
    };

    const buttonVariant = {
        hidden: { opacity: 0, scale: 0.95, y: 10 },
        show: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: bounceEase
            }
        }
    };

    return (

        <section
            aria-labelledby="hero-heading"
            className="relative pt-32 lg:pt-40 pb-20 overflow-hidden bg-gradient-to-b from-[#FAFCFF] to-[#EEF2FF]"
        >
            <HeroBackground />

            <div className="max-w-[1280px] mx-auto px-6 relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col items-center text-center max-w-5xl mx-auto"
                >

                    {/* 1. Badge */}
                    <motion.div variants={item} className="mb-8 relative group cursor-pointer z-20">
                        <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary/20 shadow-sm hover:shadow-md hover:border-primary/40 transition-all">
                            <div className="flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-sm">
                                <Sparkles size={10} fill="currentColor" />
                            </div>
                            <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
                                New: AI Video Scripts + 30-Day Campaigns
                            </span>
                        </div>
                    </motion.div>

                    {/* 2. Main Headline */}
                    <motion.h1
                        id="hero-heading"
                        variants={item}
                        className="mb-8 drop-shadow-sm max-w-[90rem] mx-auto"
                    >
                        {/* Line 1: Playfair Display - Editorial Serif (Thicker Weight) */}
                        <span className="block font-serif font-semibold text-[30px] md:text-[42px] lg:text-[56px] xl:text-[64px] leading-[1.1] tracking-[-0.01em] text-dark mb-1 md:mb-2">
                            Amplify Your Marketing With
                        </span>

                        {/* Line 2: AI-Superpowers (Mixed Case + Dash) */}
                        <span className="relative inline-block whitespace-nowrap mt-2">
                            {/* Gradient Text matching btn-gradient exactly */}
                            <span
                                className="relative font-display font-bold text-[32px] md:text-[48px] lg:text-[64px] xl:text-[72px] tracking-[0.1em] text-transparent bg-clip-text animate-gradient-flow bg-[length:200%_auto]"
                                style={{
                                    backgroundImage: 'linear-gradient(90deg, #FF5A57 0%, #E02F75 33%, #6700A3 66%, #050C38 100%)',
                                    filter: 'drop-shadow(0 0 20px rgba(106, 76, 255, 0.3))'
                                }}
                            >
                                AI-Superpowers
                            </span>
                        </span>
                    </motion.h1>

                    {/* 3. Subheadline */}
                    <motion.p variants={item} className="font-sans text-lg md:text-xl text-gray-600 mb-10 max-w-3xl leading-relaxed">
                        Generate scroll-stopping content, campaign ideas, ad copy, and 30-day social calendars in minutes — not weeks. Built on Google Gemini for unmatched quality and accuracy.
                    </motion.p>

                    {/* 4. Value Points Grid */}
                    <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-3 mb-12 w-full max-w-5xl">
                        {[
                            "30‑day content calendar in under 5 mins",
                            "Publish to Instagram, LinkedIn, X, YouTube",
                            "95% cheaper than agencies",
                            "Trusted by 1,000+ teams"
                        ].map((text, i) => (
                            <div key={i} className="flex items-center justify-center sm:justify-start gap-2 text-sm font-semibold text-gray-700 bg-white/60 backdrop-blur-sm py-2.5 px-4 rounded-xl border border-transparent hover:border-primary/10 hover:bg-white hover:shadow-sm transition-all duration-300">
                                <div className="flex-shrink-0 w-4 h-4 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <Check size={10} strokeWidth={4} />
                                </div>
                                <span className="text-left leading-tight">{text}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* 5. CTA Group */}
                    <motion.div variants={buttonVariant} className="flex flex-col sm:flex-row items-center gap-5 mb-16 z-20">
                        <div className="flex flex-col items-center gap-2">
                            <button onClick={() => navigate('/signin')} aria-label="Start Free Trial" className="group relative px-8 py-4 btn-gradient rounded-full text-white text-lg font-semibold shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1 active:scale-[0.98] flex items-center gap-2 min-w-[200px] justify-center overflow-hidden focus-ring tracking-[0.01em]">
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                <span className="relative z-10 btn-text-glow cta-text whitespace-nowrap">Start Free Trial</span>
                                <div className="relative">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white/30 rounded-full blur-[6px] glow-pulse" />
                                    <ArrowRight className="relative w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </div>
                            </button>
                            <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide">No credit card required</span>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <button onClick={() => navigate('/signin')} aria-label="Watch Demo" className="group px-8 py-4 btn-demo-distinct rounded-full text-white text-lg font-semibold transition-all duration-300 hover:-translate-y-1 active:scale-[0.98] flex items-center gap-2 min-w-[200px] justify-center focus-ring tracking-[0.01em]">
                                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-colors border border-white/30">
                                    <Play size={14} fill="currentColor" className="ml-0.5" />
                                </div>
                                <span className="cta-text text-white text-shadow-sm whitespace-nowrap">Watch Demo</span>
                            </button>
                            {/* Spacer for visual alignment with credit card text */}
                            <span className="text-[11px] opacity-0 select-none">Spacer</span>
                        </div>
                    </motion.div>



                </motion.div>

                {/* 7. Hero Visual - Floating Dashboard */}
                {/* Entrance animation for the dashboard itself */}
                <motion.div
                    initial={{ opacity: 0, y: 80, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                        duration: 1.4,
                        delay: 0.6,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                    className="mt-16 md:-mt-6 relative z-20"
                >
                    <HeroAnimation />
                </motion.div>

                {/* 8. Social Connections Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8, duration: 1 }}
                    className="mt-12 md:mt-16 w-full max-w-5xl mx-auto"
                >
                    <div className="bg-white rounded-3xl p-4 md:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col md:flex-row items-center gap-6 md:gap-8 mx-4 md:mx-0">

                        {/* Left: Label */}
                        <div className="flex items-center gap-4 pr-0 md:pr-8 md:border-r border-gray-100 min-w-max">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#6A4CFF] to-[#FF67D1] flex items-center justify-center text-white shadow-lg shadow-primary/20">
                                <Sparkles size={20} fill="currentColor" />
                            </div>
                            <div className="text-left">
                                <p className="text-sm font-semibold text-gray-900 leading-tight">Connect all your</p>
                                <p className="text-sm font-semibold text-gray-500 leading-tight">favorite accounts</p>
                            </div>
                        </div>

                        {/* Right: Icons Grid with Mask */}
                        <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0 w-full no-scrollbar mask-gradient-right pl-2">
                            {/* X (Twitter) */}
                            <div className="social-icon-btn group">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5">
                                    <path d="M18.902 3H21.5l-5.61 6.412L22 21h-5.09l-3.57-5.34L8.99 21H6.39l5.98-6.834L2 3h5.23l3.23 4.74L18.902 3Zm-1.79 16h1.41L7.94 4h-1.5L17.11 19Z" />
                                </svg>
                            </div>

                            {/* Facebook */}
                            <div className="social-icon-btn text-[#1877F2] group">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-6 h-6">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </div>

                            {/* Instagram */}
                            <div className="social-icon-btn text-[#E4405F] group">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-6 h-6">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                            </div>

                            {/* TikTok */}
                            <div className="social-icon-btn group">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true" className="w-5 h-5">
                                    <path d="M412.19 118.66a109.27 109.27 0 0 1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43H350.13 267.69V334.78c0 4.28 0 8.51-.15 12.69-1.38 29.27-16.63 55.72-41.25 70.47a73.88 73.88 0 0 1-36.31 10.08A74.41 74.41 0 0 1 148 404.86a71.38 71.38 0 0 1-9.73-36.3c1.38-29.38 16.63-55.88 41.4-70.63a73.25 73.25 0 0 1 36.16-10h.15a70.52 70.52 0 0 1 15.43 1.73V204.41a142.37 142.37 0 0 0-16.13-.9h-.3a148.6 148.6 0 0 0-73.19 19.77c-35.59 20.57-59.78 56.67-66.47 97.46a140.1 140.1 0 0 0-1.93 23.19c0 38.41 14.86 74.47 41.78 101.27C134.46 472.65 170.86 487 209.27 487a152 152 0 0 0 23.34-1.78c51.76-8.21 94.35-45.73 109-96.54a145.23 145.23 0 0 0 4.4-36.21V176.44a178.49 178.49 0 0 0 24.42 14.31c19.71 9.89 40.81 15.85 62.72 17.7V131.27a120.16 120.16 0 0 1-21.96-3.09 111.9 111.9 0 0 1-22-9.52z" />
                                </svg>
                            </div>

                            {/* YouTube */}
                            <div className="social-icon-btn text-[#FF0000] group">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-6 h-6">
                                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2A29.94 29.94 0 0 0 1 11.75a29.94 29.94 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2C5.12 19 12 19 12 19s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2A29.94 29.94 0 0 0 23 11.75a29.94 29.94 0 0 0-.46-5.33z" />
                                    <polygon points="10 9 16 12 10 15 10 9" />
                                </svg>
                            </div>

                            {/* Pinterest */}
                            <div className="social-icon-btn text-[#E60023] group">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6">
                                    <path d="M12.04 2C7.52 2 5 5.06 5 8.35c0 1.54.86 3.46 2.23 4.07.21.09.33.05.38-.14l.27-1.09a.34.34 0 0 0-.08-.33 3.05 3.05 0 0 1-.68-2.02c0-2.46 1.84-4.67 5.01-4.67 2.73 0 4.63 1.79 4.63 4.54 0 3-1.64 5.08-3.77 5.08a1.68 1.68 0 0 1-1.7-2.05c.18-.74.52-1.55.8-2.3a2.91 2.91 0 0 0-.6-2.68 2.11 2.11 0 0 0-1.6-.7 2.44 2.44 0 0 0-2.44 2.5 3.92 3.92 0 0 0 .3 1.44l-1.15 4.87a10.29 10.29 0 0 0-.09 3.03l.25.01a6.46 6.46 0 0 0 1.94-2.2l.12-.32c.18-.47.71-2.23.71-2.23a3.1 3.1 0 0 0 2.62 1.32c3.44 0 5.82-3 5.82-7 0-3.77-2.87-6.73-7.16-6.73z" />
                                </svg>
                            </div>

                            {/* Threads */}
                            <div className="social-icon-btn group">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true" className="w-5 h-5">
                                    <path d="M256 64C150.4 64 64 150.4 64 256s86.4 192 192 192 192-86.4 192-192S361.6 64 256 64zm72.5 213.5c-4.2 25.4-19.8 44.2-44.4 52.9-10 3.6-21.9 5.6-35.5 5.6-21.6 0-38.1-5.6-49.1-16.7-10.1-10.3-15.4-25.5-15.4-45.1h40c0 11.1 2.3 18.7 6.9 23.2 4.8 4.7 12.8 7.1 24 7.1 9.7 0 17.6-1.2 23.5-3.3 13.4-4.9 20.3-13.7 22.1-27.9-4.9-3.1-11.2-5.7-18.8-7.8-9.4-2.5-20.9-4.5-34.2-5.8-23.3-2.4-40.9-8.8-52.2-19-11.7-10.7-17.6-25.8-17.6-45 0-19 6.8-34.4 20.1-45.7 12.8-10.9 30.7-16.4 53-16.4 22.9 0 40.5 5.3 52.4 15.7 11.4 9.9 18.3 24.3 20.4 42.9l-39.7 4.6c-1.4-10.6-5-18.4-10.7-23.3-5.9-5-14.9-7.5-27.2-7.5-10.5 0-18.6 2-24.1 6-5.2 3.8-7.8 9.1-7.8 16.5 0 7.1 2.4 12.7 7.4 16.7 5.5 4.5 15.9 7.7 30.7 9.3 25.9 2.8 45.1 8 57.2 15.4 12.9 7.9 20.6 19.4 22.6 34.6z" />
                                </svg>
                            </div>

                            {/* Telegram */}
                            <div className="social-icon-btn group">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" fill="none" aria-hidden="true" className="w-6 h-6">
                                    <circle cx="120" cy="120" r="120" fill="#229ED9" />
                                    <path fill="white" d="M175 76.5 159 167c-1.1 6.1-4.9 7.6-10 4.8l-28-20.6-13.5 13.1c-1.5 1.5-2.7 2.7-5.4 2.7l1.9-27.3 49.7-44.9c2.2-1.9-.5-3-3.4-1.1l-61.4 38.7-26.4-8.2c-5.7-1.8-5.8-5.7 1.2-8.5l103.4-39.9c4.8-1.8 9 1.2 7.5 8.3Z" />
                                </svg>
                            </div>

                            {/* LinkedIn */}
                            <div className="social-icon-btn text-[#0077B5] group">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-6 h-6">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect x="2" y="9" width="4" height="12" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </div>

                            {/* BlueSky / Butterfly */}
                            <div className="social-icon-btn text-[#1185FE] group">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true" className="w-6 h-6">
                                    <path d="M206.4 36.3c-14.9 2.5-32.2 18.7-48.4 39.4-5.1 6.5-10.2 13.6-15 20.8-2.9-4.3-5.9-8.6-8.9-12.6C118 63.5 97.1 43 79.6 37.1 67.7 33.1 57 35.6 50 42.8c-7.1 7.4-9.8 19.9-6.6 35.5 3.9 19.4 16.2 40.3 30.9 53.9-14.8 12.9-25.7 31.5-28.7 49.2-2.4 14.1.7 26.3 8.6 33.7 7.5 7 18.7 8.7 30.9 4.4 13.6-4.8 28.5-17.3 41.2-33.7 12.8 17 28.1 29.8 42.1 34.8 12.7 4.5 24.2 3 32.1-4.4 7.8-7.3 10.9-19.4 8.5-33.3-3.1-18-14.3-36.9-29.4-50 14.7-13.1 26.9-34 30.7-53.7 3.1-16.2.3-28.8-7.1-36.3-6.9-7.1-17.3-9.9-29.8-7.3z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
