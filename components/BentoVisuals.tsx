import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
    Activity, Video, Layers, Wand2,
    Calendar, Zap, Send, PieChart,
    Play, CheckCircle2,
    Instagram, Linkedin, Youtube, Twitter,
    Film, Image as ImageIcon
} from 'lucide-react';

// --- UTILS ---
const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

/* --- SHARED: NOISE OVERLAY --- */
const NoiseOverlay = () => (
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-50 mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
    />
);

/* --- TILE 1: BRAND DNA ENGINE (Refined Scientific Helix) --- */
export const DNAVisual: React.FC = () => {
    return (
        <div className="w-full h-full relative overflow-hidden bg-slate-900 flex flex-col items-center justify-center group">
            <NoiseOverlay />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e1b4b_0%,#0f172a_100%)]" />

            {/* Container to fix scaling issues */}
            <div className="relative w-48 h-48 flex items-center justify-center transform scale-75 md:scale-100 transition-transform duration-500">

                {/* Deep Core Glow */}
                <div className="absolute w-24 h-24 bg-indigo-500/20 rounded-full blur-2xl animate-pulse" />

                {/* 3D Helix Simulation */}
                <div className="relative w-full h-full flex items-center justify-center z-10 perspective-[600px] preserve-3d">
                    {Array.from({ length: 12 }).map((_, i) => {
                        const delay = i * 0.15;
                        // Tighter amplitude for better containment
                        const xAmplitude = 40;

                        return (
                            <React.Fragment key={i}>
                                {/* Strand A */}
                                <motion.div
                                    className="absolute w-2.5 h-2.5 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.8)] bg-indigo-500"
                                    animate={{
                                        y: [-30, 30, -30], // Reduced vertical range
                                        scale: [0.7, 1.1, 0.7],
                                        opacity: [0.4, 1, 0.4],
                                        x: [Math.sin((i / 12) * Math.PI * 2) * xAmplitude, Math.sin(((i / 12) * Math.PI * 2) + Math.PI) * xAmplitude, Math.sin((i / 12) * Math.PI * 2) * xAmplitude],
                                        zIndex: [10, 30, 10]
                                    }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}
                                />
                                {/* Strand B */}
                                <motion.div
                                    className="absolute w-2.5 h-2.5 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.8)] bg-purple-500"
                                    animate={{
                                        y: [30, -30, 30],
                                        scale: [1.1, 0.7, 1.1],
                                        opacity: [1, 0.4, 1],
                                        x: [Math.sin(((i / 12) * Math.PI * 2) + Math.PI) * xAmplitude, Math.sin((i / 12) * Math.PI * 2) * xAmplitude, Math.sin(((i / 12) * Math.PI * 2) + Math.PI) * xAmplitude],
                                        zIndex: [30, 10, 30]
                                    }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}
                                />
                                {/* Connecting Rung (Subtler) */}
                                <motion.div
                                    className="absolute h-[1px] bg-white/20 origin-center"
                                    style={{ width: xAmplitude * 2, top: '50%', left: `calc(50% - ${xAmplitude}px)` }}
                                    animate={{
                                        rotate: [0, 360],
                                        scaleX: [0.1, 1, 0.1],
                                        opacity: [0.1, 0.4, 0.1]
                                    }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}
                                />
                            </React.Fragment>
                        )
                    })}
                </div>
            </div>

            {/* Scanning Overlay (Subtler) */}
            <motion.div
                className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-teal-400/50 to-transparent z-20"
                animate={{ top: ['10%', '90%', '10%'] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* HUD Data Overlay */}
            <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center z-20 border-t border-white/10 pt-2">
                <span className="text-[10px] font-mono text-indigo-300 tracking-wider flex items-center gap-1">
                    <Activity size={10} /> ANALYZING
                </span>
                <div className="text-white text-[10px] font-bold font-mono bg-white/10 px-1.5 py-0.5 rounded">99.8%</div>
            </div>
        </div>
    );
};

/* --- TILE 2: VIDEO SCRIPTS (Pro Video Editor) --- */
export const VideoScriptVisual: React.FC = () => {
    return (
        <div className="w-full h-full bg-[#111] flex flex-col relative overflow-hidden text-white font-sans selection:bg-indigo-500/30 group">
            <NoiseOverlay />

            {/* Editor UI */}
            <div className="relative z-10 flex-1 p-5 flex flex-col gap-3">

                {/* Script Blocks appearing */}
                {[
                    { label: "HOOK", text: "Stop guessing your ads.", color: "bg-red-500", width: "w-24" },
                    { label: "BODY", text: "AI predicts viral patterns.", color: "bg-indigo-500", width: "w-32" },
                    { label: "CTA", text: "Get 30 days free.", color: "bg-emerald-500", width: "w-20" },
                ].map((block, i) => (
                    <motion.div
                        key={i}
                        initial={{ x: -40, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.3, type: "spring", stiffness: 100 }}
                        className="flex items-center gap-3 p-2 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group/block"
                    >
                        <div className={`w-1 h-8 rounded-full ${block.color} shadow-[0_0_10px_${block.color}] group-hover/block:scale-y-110 transition-transform`} />
                        <div className="flex-1">
                            <div className="flex justify-between mb-1">
                                <span className="text-[9px] font-bold text-white/50 uppercase tracking-wider">{block.label}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="h-2 w-full bg-white/10 rounded-sm relative overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        transition={{ duration: 1, delay: i * 0.3 + 0.2 }}
                                        className="absolute inset-0 bg-white/40"
                                    />
                                </div>
                                <span className="text-[8px] font-mono text-white/30">0:0{i * 5}s</span>
                            </div>
                        </div>
                    </motion.div>
                ))}

                {/* Floating "Generating" Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute right-4 bottom-4 flex items-center gap-2 bg-indigo-600/90 backdrop-blur px-3 py-1.5 rounded-full shadow-lg border border-white/10"
                >
                    <Zap size={10} className="text-yellow-300" />
                    <span className="text-[9px] font-bold uppercase tracking-wide">Script Generated</span>
                </motion.div>
            </div>

            {/* Bottom Timeline with Audio Viz */}
            <div className="h-16 border-t border-white/10 bg-[#0A0A0A] relative flex flex-col justify-end pb-0 overflow-hidden">
                {/* Audio Spectrum */}
                <div className="flex items-end justify-between px-2 h-8 gap-[1px] opacity-40">
                    {Array.from({ length: 40 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-full bg-indigo-400 rounded-t-sm"
                            animate={{ height: ["10%", `${Math.random() * 90 + 10}%`, "10%"] }}
                            transition={{ duration: 0.4, repeat: Infinity, repeatType: "mirror", delay: i * 0.02 }}
                        />
                    ))}
                </div>

                {/* Time Ruler */}
                <div className="h-4 border-t border-white/10 flex justify-between px-2 items-center">
                    <span className="text-[8px] font-mono text-white/30">00:00</span>
                    <span className="text-[8px] font-mono text-white/30">00:15</span>
                    <span className="text-[8px] font-mono text-white/30">00:30</span>
                </div>

                {/* Moving Playhead */}
                <motion.div
                    className="absolute top-0 bottom-0 w-[1px] bg-red-500 shadow-[0_0_8px_red] z-20"
                    animate={{ left: ["0%", "100%"] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                    <div className="absolute -top-1 -left-[3px] w-2 h-2 bg-red-500 rotate-45" />
                </motion.div>
            </div>
        </div>
    );
};

/* --- TILE 3: CALENDAR (Refined 3D Grid) --- */
export const CalendarVisual: React.FC = () => {
    return (
        <div className="w-full h-full bg-slate-50 relative overflow-hidden flex items-center justify-center perspective-[800px] group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f1f5f9_0%,transparent_70%)] z-0" />

            {/* 3D Container - Centered better */}
            <div className="w-full h-full flex items-center justify-center transform scale-90">
                <motion.div
                    className="grid grid-cols-3 gap-2.5 p-4 transform-style-3d"
                    // Less extreme rotation for better readability and depth
                    animate={{ rotateX: 25, rotateY: -15, rotateZ: 5 }}
                    transition={{ duration: 20, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                >
                    {Array.from({ length: 9 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-12 h-12 bg-white rounded-lg border border-slate-200 flex flex-col p-1.5 gap-1 relative group/card shadow-[0_2px_4px_rgba(0,0,0,0.05)]"
                            initial={{ z: 0 }}
                            animate={{ z: [0, 5, 0] }}
                            transition={{ duration: 4, delay: i * 0.15, repeat: Infinity, ease: "easeInOut" }}
                            // Enhanced Depth on Hover
                            whileHover={{
                                z: 25,
                                scale: 1.15,
                                boxShadow: "0 15px 30px rgba(92,59,255,0.15)",
                                borderColor: "#A57CFF"
                            }}
                        >
                            <div className="flex justify-between items-center opacity-50">
                                <div className="text-[6px] font-bold text-slate-400">0{i + 1}</div>
                            </div>

                            {/* Event Bar */}
                            {(i !== 2 && i !== 6) && (
                                <div className={`h-1.5 w-full rounded-sm ${i % 2 === 0 ? 'bg-indigo-100' : 'bg-purple-100'}`} />
                            )}
                            {(i === 1 || i === 4 || i === 8) && (
                                <div className={`h-1.5 w-2/3 rounded-sm ${i % 2 === 0 ? 'bg-indigo-50' : 'bg-purple-50'}`} />
                            )}

                            {/* Active Indicator */}
                            {i === 4 && (
                                <motion.div
                                    className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-indigo-500 rounded-full border-2 border-white shadow-sm flex items-center justify-center z-10"
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <CheckCircle2 size={8} className="text-white" />
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Floating Tooltip (Aligned Center Bottom) */}
            <motion.div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur border border-slate-200 px-3 py-1.5 rounded-full shadow-lg flex items-center gap-2 z-20"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-bold text-slate-600">Syncing...</span>
            </motion.div>
        </div>
    );
};

/* --- TILE 4: COPYWRITER (Centered & Floating Stack) --- */
export const CopywriterVisual: React.FC = () => {
    const [stage, setStage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setStage(prev => (prev + 1) % 3);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-full bg-[#FAFAFA] relative overflow-hidden flex items-center justify-center">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:16px_16px] opacity-30" />

            <div className="relative w-full max-w-[200px] flex flex-col items-center gap-4 perspective-[800px]">

                {/* Floating Wand with Shadow */}
                <div className="relative z-20">
                    <motion.div
                        animate={{
                            rotate: [0, 15, 0, -15, 0],
                            y: [0, -5, 0],
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg shadow-indigo-500/30 flex items-center justify-center text-white relative"
                    >
                        <Wand2 size={20} />
                    </motion.div>
                    {/* Wand Shadow */}
                    <motion.div
                        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-1 bg-black/10 blur-sm rounded-full"
                        animate={{ scale: [1, 0.8, 1], opacity: [0.3, 0.1, 0.3] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>

                {/* Morphing Document Stack */}
                <div className="relative w-full h-24 preserve-3d">
                    {/* Back Sheet */}
                    <div className="absolute top-2 left-2 w-full h-full bg-white rounded-lg border border-slate-200 shadow-sm opacity-60 transform -rotate-2" />
                    {/* Middle Sheet */}
                    <div className="absolute top-1 left-1 w-full h-full bg-white rounded-lg border border-slate-200 shadow-md opacity-80 transform rotate-1" />

                    {/* Front Active Sheet */}
                    <motion.div
                        className="absolute inset-0 bg-white rounded-lg border border-indigo-100 shadow-xl p-3 flex flex-col items-center justify-center text-center"
                        initial={{ z: 0 }}
                        whileHover={{ z: 10, scale: 1.02 }}
                    >
                        {/* Text Animation Container */}
                        <div className="relative h-full w-full flex items-center justify-center overflow-hidden">
                            <motion.div
                                key={stage}
                                initial={{ opacity: 0, scale: 0.9, filter: 'blur(4px)' }}
                                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, scale: 1.1, filter: 'blur(4px)' }}
                                transition={{ duration: 0.6 }}
                                className="text-xs font-medium leading-snug"
                            >
                                {stage === 0 && (
                                    <div className="space-y-2 w-full">
                                        <div className="h-2 bg-slate-100 rounded w-3/4 mx-auto" />
                                        <div className="h-2 bg-slate-100 rounded w-full" />
                                        <div className="h-2 bg-slate-100 rounded w-1/2 mx-auto" />
                                    </div>
                                )}
                                {stage === 1 && (
                                    <div className="flex flex-col items-center gap-1 text-indigo-500">
                                        <Wand2 size={16} />
                                        <span className="text-[10px] font-bold uppercase tracking-wider">Enhancing</span>
                                    </div>
                                )}
                                {stage === 2 && (
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 font-serif text-sm italic">
                                        "Unstoppable Growth."
                                    </span>
                                )}
                            </motion.div>
                        </div>

                        {/* Progress Bar */}
                        <div className="absolute bottom-0 left-0 h-1 bg-indigo-50 w-full rounded-b-lg overflow-hidden">
                            <motion.div
                                className="h-full bg-indigo-500"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 3.5, ease: "linear", repeat: Infinity }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

/* --- TILE 5: CAMPAIGN INTEL (Holographic Radar) --- */
export const IntelVisual: React.FC = () => {
    return (
        <div className="w-full h-full bg-slate-900 flex items-center justify-center relative overflow-hidden group">
            <NoiseOverlay />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e293b_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />

            {/* Radar Mesh */}
            <div className="absolute inset-0 flex items-center justify-center">
                {[1, 2, 3].map((i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full border border-indigo-500/20"
                        style={{ width: i * 80, height: i * 80 }}
                    />
                ))}
                {/* Crosshairs */}
                <div className="absolute w-full h-[1px] bg-indigo-500/20" />
                <div className="absolute h-full w-[1px] bg-indigo-500/20" />
            </div>

            {/* Scanning Radar Arm */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute w-[240px] h-[240px] rounded-full bg-[conic-gradient(transparent_270deg,rgba(99,102,241,0.2)_360deg)] z-10"
            />

            {/* Central Pulse */}
            <motion.div
                className="w-2 h-2 bg-indigo-400 rounded-full z-20 shadow-[0_0_15px_rgba(99,102,241,1)]"
                animate={{ boxShadow: ["0 0 0 0px rgba(99,102,241,0.4)", "0 0 0 20px rgba(99,102,241,0)"] }}
                transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Identified Targets */}
            {[0, 1, 2].map((i) => (
                <motion.div
                    key={i}
                    className="absolute z-20"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                        scale: [0, 1, 1, 0],
                        opacity: [0, 1, 1, 0],
                    }}
                    style={{
                        left: `${50 + (Math.random() * 60 - 30)}%`,
                        top: `${50 + (Math.random() * 60 - 30)}%`
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 1.3,
                        repeatDelay: 1
                    }}
                >
                    <div className="relative">
                        <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_white]" />
                        <div className="absolute -top-3 -left-3 w-8 h-8 border border-white/30 rounded-full animate-ping" />
                        <div className="absolute left-3 top-0 bg-slate-800/80 text-[8px] text-indigo-300 px-1 rounded border border-indigo-500/30 whitespace-nowrap">
                            Opportunity +{80 + i * 5}%
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}

// Sub-component for complex orbit logic
const OrbitItem: React.FC<{ item: any, index: number }> = ({ item, index }) => {
    return (
        <motion.div
            className="absolute w-full h-full flex items-center justify-center pointer-events-none"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: index * -2 }} // Offset start times based on position
        >
            {/* The container rotates, but we counter-rotate the icon to keep it upright, 
                 and scale it to simulate depth (Z-axis). 
                 When it's "behind" (top part of circle in 2D projection usually, but here we simulate scaling),
                 it gets smaller.
             */}
            <motion.div
                className={`absolute w-8 h-8 rounded-full ${item.color} flex items-center justify-center text-white shadow-lg`}
                style={{ top: 0 }} // Position at top of the rotation circle
                animate={{
                    scale: [0.8, 1.2, 0.8], // Simulate coming forward and going back
                    zIndex: [0, 30, 0],    // Layering
                    rotate: [0, -360]      // Counter rotation to keep icon upright
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: index * -2 }}
            >
                <item.icon size={14} />
            </motion.div>
        </motion.div>
    )
}

/* --- TILE 6: AUTO PUBLISH (True 3D Orbital Hub) --- */
export const PublishVisual: React.FC = () => {
    return (
        <div className="w-full h-full bg-[#FDFCFD] relative overflow-hidden flex flex-col items-center justify-center perspective-[800px]">

            {/* Background Decor */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0%,transparent_60%)]" />

            <div className="relative w-40 h-40 flex items-center justify-center preserve-3d transform-style-3d">

                {/* Central Hub */}
                <motion.div
                    className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center z-20 relative shadow-2xl border border-white/20"
                    animate={{
                        y: [-4, 4, -4],
                        boxShadow: ["0 10px 30px -5px rgba(0,0,0,0.3)", "0 20px 40px -5px rgba(0,0,0,0.2)", "0 10px 30px -5px rgba(0,0,0,0.3)"]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Send size={20} className="text-white relative z-10" />

                    {/* Ping Waves */}
                    {[1, 2].map(i => (
                        <motion.div
                            key={i}
                            className="absolute inset-0 rounded-xl border border-indigo-500/30"
                            animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                        />
                    ))}
                </motion.div>

                {/* Orbiting Platforms */}
                {[
                    { icon: Instagram, color: "bg-pink-500", angle: 0 },
                    { icon: Linkedin, color: "bg-blue-600", angle: 90 },
                    { icon: Youtube, color: "bg-red-500", angle: 180 },
                    { icon: Twitter, color: "bg-sky-500", angle: 270 }
                ].map((item, i) => (
                    <OrbitItem key={i} item={item} index={i} />
                ))}
            </div>

            {/* Status Text */}
            <motion.div
                className="absolute bottom-4 flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-100 rounded-full shadow-sm"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
            >
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wide">Live Sync</span>
            </motion.div>
        </div>
    )
}

/* --- TILE 7: MULTI MODAL (Interactive Fan Stack) --- */
export const MultiModalVisual: React.FC = () => {
    return (
        <div className="w-full h-full bg-[#050505] relative overflow-hidden flex items-center justify-center group/modal perspective-[1200px]">
            {/* Dynamic Ambient Lights */}
            <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-indigo-900/30 via-transparent to-purple-900/30 blur-3xl"
            />

            {/* Rotating Light Cone */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-[100%] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(255,255,255,0.03)_45deg,transparent_90deg)] pointer-events-none"
            />

            {/* Stacked Cards Container */}
            <div className="relative w-32 h-44 perspective-[1000px] preserve-3d">
                {[
                    { icon: Film, color: "bg-red-500", label: "Video" },
                    { icon: ImageIcon, color: "bg-blue-500", label: "Post" },
                    { icon: Layers, color: "bg-purple-500", label: "Carousel" }
                ].map((item, i) => {
                    // Inverse index for stacking order
                    const index = 2 - i;

                    return (
                        <motion.div
                            key={i}
                            className="absolute inset-0 rounded-2xl border border-white/10 bg-slate-800/90 backdrop-blur-md shadow-2xl overflow-hidden origin-bottom-center transition-all duration-500 ease-out"
                            style={{
                                zIndex: i,
                                transformStyle: 'preserve-3d',
                            }}
                            initial={{
                                y: index * -8,
                                scale: 1 - (index * 0.05),
                                rotateZ: 0,
                                x: 0
                            }}
                            // Continuous Sway
                            animate={{
                                rotateZ: [0, index % 2 === 0 ? 2 : -2, 0],
                                y: [index * -8, (index * -8) - 4, index * -8]
                            }}
                            transition={{
                                rotateZ: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 },
                                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }
                            }}
                        >
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 group-hover/modal:opacity-100 transition-opacity">
                                <div className={`p-3 rounded-full ${item.color} bg-opacity-20 text-white`}>
                                    <item.icon size={20} />
                                </div>
                                <div className="space-y-1.5 w-16">
                                    <div className="h-1 bg-white/20 rounded-full w-full" />
                                    <div className="h-1 bg-white/10 rounded-full w-2/3 mx-auto" />
                                </div>
                            </div>

                            {/* Glass Sheen */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                        </motion.div>
                    );
                })}

                {/* Invisible hover trigger area that forces the fan out via CSS/Transforms */}
                <style>{`
             .group\\/modal:hover div:nth-child(3) > div:nth-child(1) { transform: translateX(-40px) rotateZ(-10deg) translateY(-10px) !important; }
             .group\\/modal:hover div:nth-child(3) > div:nth-child(2) { transform: translateY(-20px) !important; }
             .group\\/modal:hover div:nth-child(3) > div:nth-child(3) { transform: translateX(40px) rotateZ(10deg) translateY(-10px) !important; }
           `}</style>
            </div>
        </div>
    )
}

/* --- TILE 8: ANALYTICS (Scanning Chart) --- */
export const AnalyticsVisual: React.FC = () => {
    return (
        <div className="w-full h-full bg-white relative overflow-hidden flex flex-col justify-end group">

            {/* Header */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                <div className="flex flex-col">
                    <span className="text-[9px] text-slate-400 font-bold uppercase">Revenue</span>
                    <span className="text-lg font-bold text-slate-800">$24,500</span>
                </div>
                <div className="px-2 py-1 bg-green-50 text-green-600 rounded text-[9px] font-bold">+12%</div>
            </div>

            {/* Chart Area */}
            <div className="h-[70%] w-full relative">
                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#5C3BFF" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#5C3BFF" stopOpacity="0" />
                        </linearGradient>
                    </defs>

                    <motion.path
                        d="M0,80 C30,75 50,40 80,30 S140,50 180,20 S250,5 300,15"
                        fill="none"
                        stroke="#5C3BFF"
                        strokeWidth="3"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        vectorEffect="non-scaling-stroke"
                    />
                    <motion.path
                        d="M0,80 C30,75 50,40 80,30 S140,50 180,20 S250,5 300,15 V100 H0 Z"
                        fill="url(#chartGrad)"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        vectorEffect="non-scaling-stroke"
                    />
                </svg>

                {/* Scanning Line Cursor */}
                <motion.div
                    className="absolute top-0 bottom-0 w-[1px] bg-indigo-500 border-r border-indigo-200 shadow-[0_0_10px_rgba(99,102,241,0.5)] z-20 pointer-events-none"
                    animate={{ left: ['10%', '90%', '10%'] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                    {/* Intersection Dot */}
                    <motion.div
                        className="absolute w-3 h-3 bg-white border-2 border-indigo-600 rounded-full -left-[5px]"
                        animate={{ top: ['70%', '10%', '70%'] }} // Roughly matching the curve
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    />
                    {/* Tooltip */}
                    <motion.div
                        className="absolute top-10 left-3 bg-slate-900 text-white text-[9px] font-bold px-2 py-1 rounded whitespace-nowrap"
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 6, repeat: Infinity, times: [0, 0.5, 1] }}
                    >
                        Sales: $1,240
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}
