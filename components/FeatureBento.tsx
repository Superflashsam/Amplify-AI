import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import {
    Dna, Video, Calendar, PenTool,
    Target, Send, Layers, PieChart,
    ArrowRight, Shield, Globe, LayoutTemplate, X, Zap, Check,
    Instagram, Linkedin, Youtube, Facebook, Twitter, BarChart3, CheckCircle2, Sparkles, Image as ImageIcon, TrendingUp
} from 'lucide-react';

import {
    DNAVisual, VideoScriptVisual, CalendarVisual as BentoCalendarVisual,
    CopywriterVisual as BentoCopywriterVisual, IntelVisual, PublishVisual as BentoPublishVisual,
    MultiModalVisual, AnalyticsVisual as BentoAnalyticsVisual
} from './BentoVisuals';

// --- VISUAL COMPONENTS FROM FEATURE DEEP DIVE ---

const CalendarVisual: React.FC = () => (
    <div className="w-full h-full bg-gray-50 p-6 md:p-8 flex flex-col relative overflow-hidden font-sans">
        {/* Grid Background */}
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.4 }} />

        {/* Header UI */}
        <div className="flex justify-between items-center mb-6 relative z-10">
            <div className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 shadow-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-bold text-gray-700">Active Campaign</span>
            </div>
            <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" />
                <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-300" />
            </div>
        </div>

        {/* Main Calendar Card */}
        <motion.div
            className="bg-white rounded-xl shadow-xl border border-gray-200/60 flex-1 p-4 relative z-10 overflow-hidden"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="grid grid-cols-7 gap-px bg-gray-100 border border-gray-100 rounded-lg overflow-hidden mb-4">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, idx) => (
                    <div key={`day-${idx}`} className="bg-gray-50 py-2 text-center text-[10px] font-bold text-gray-400">{d}</div>
                ))}
                {Array.from({ length: 28 }).map((_, i) => (
                    <div key={i} className="bg-white h-16 md:h-20 p-1 relative group transition-colors hover:bg-purple-50/30">
                        <span className="text-[10px] text-gray-300 font-medium">{i + 1}</span>
                        {[3, 8, 12, 15, 22].includes(i) && (
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ delay: 0.2 + (i * 0.02) }}
                                className="absolute bottom-1 right-1 left-1 h-1.5 rounded-full bg-purple-100"
                            >
                                <div className="h-full w-2/3 bg-purple-500 rounded-full" />
                            </motion.div>
                        )}
                    </div>
                ))}
            </div>
        </motion.div>

        {/* Floating Cards Parallax */}
        <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-8 z-20 bg-white p-3 rounded-xl shadow-2xl border border-gray-100 w-40 rotate-3 hidden sm:block"
        >
            <div className="flex items-center gap-2 mb-2">
                <div className="bg-pink-500 text-white p-1 rounded"><Instagram size={12} /></div>
                <span className="text-[10px] font-bold text-gray-600">Stories</span>
            </div>
            <div className="h-20 bg-gray-100 rounded-lg mb-2 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-pink-100 opacity-50" />
            </div>
            <div className="flex justify-between text-[10px] text-gray-400">
                <span>10:00 AM</span>
                <span className="text-green-500 font-bold">Ready</span>
            </div>
        </motion.div>

        <motion.div
            animate={{ y: [15, -5, 15] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-12 left-8 z-20 bg-white p-3 rounded-xl shadow-2xl border border-gray-100 w-48 -rotate-2 hidden sm:block"
        >
            <div className="flex items-center gap-2 mb-2">
                <div className="bg-blue-700 text-white p-1 rounded"><Linkedin size={12} /></div>
                <span className="text-[10px] font-bold text-gray-600">Article</span>
            </div>
            <div className="space-y-1.5">
                <div className="h-2 w-full bg-gray-100 rounded-full" />
                <div className="h-2 w-3/4 bg-gray-100 rounded-full" />
            </div>
            <div className="mt-3 flex gap-2">
                <div className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[9px] font-bold rounded">Tech</div>
                <div className="px-2 py-0.5 bg-purple-50 text-purple-600 text-[9px] font-bold rounded">AI</div>
            </div>
        </motion.div>
    </div>
);

const CopywriterVisual: React.FC = () => (
    <div className="w-full h-full bg-gray-50 p-6 md:p-8 flex items-center justify-center relative overflow-hidden font-sans">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-50" />

        <motion.div
            className="relative z-10 bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 w-full max-w-md"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                    <Sparkles size={20} className="text-purple-600" />
                </div>
                <div>
                    <div className="text-xs text-gray-400 font-bold">AI COPYWRITER</div>
                    <div className="text-sm font-bold text-gray-900">Generating...</div>
                </div>
            </div>

            <div className="space-y-3 mb-4">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="h-2 bg-gray-100 rounded-full"
                />
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="h-2 bg-gray-100 rounded-full"
                />
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "95%" }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="h-2 bg-gray-100 rounded-full"
                />
            </div>

            <div className="flex items-center gap-2 text-xs text-green-600 font-bold">
                <CheckCircle2 size={16} />
                <span>Content optimized for engagement</span>
            </div>
        </motion.div>
    </div>
);

const AnalyticsVisual: React.FC = () => (
    <div className="w-full h-full bg-slate-50 p-6 md:p-8 relative overflow-hidden flex flex-col justify-center font-sans">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl" />

        <div className="bg-white rounded-xl shadow-xl border border-gray-200/60 p-5 relative z-10">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h4 className="text-lg font-bold text-gray-900">Campaign ROI</h4>
                    <p className="text-xs text-gray-400">Last 30 Days</p>
                </div>
                <div className="text-right">
                    <div className="text-2xl font-display font-bold text-gray-900">$14,205</div>
                    <div className="text-xs font-bold text-green-500 flex items-center justify-end gap-1">
                        <TrendingUp size={12} /> +24.5%
                    </div>
                </div>
            </div>

            <div className="h-32 flex items-end gap-2 mb-6">
                {[40, 65, 45, 70, 55, 85, 60, 95, 75, 90].map((h, i) => (
                    <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        transition={{ delay: i * 0.05, duration: 0.5 }}
                        className="flex-1 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t-sm opacity-80 hover:opacity-100 transition-opacity"
                    />
                ))}
            </div>

            <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-3 rounded-lg shadow-lg flex items-center gap-3"
            >
                <div className="p-1.5 bg-white/10 rounded-md">
                    <Zap size={14} className="text-yellow-400" />
                </div>
                <div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase">Optimization</div>
                    <div className="text-xs font-medium">Increase ad spend on Weekends for <span className="text-green-400">+12% ROI</span>.</div>
                </div>
                <button className="ml-auto px-2 py-1 bg-white/10 rounded text-[10px] font-bold hover:bg-white/20 transition-colors">Apply</button>
            </motion.div>
        </div>
    </div>
);

const PublishingVisual: React.FC = () => (
    <div className="w-full h-full bg-gray-900 p-6 md:p-8 flex items-center justify-center relative overflow-hidden font-sans">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#1f2937 1px, transparent 1px), linear-gradient(90deg, #1f2937 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.3 }} />

        <div className="w-full max-w-sm bg-gray-800/90 backdrop-blur-xl rounded-2xl border border-gray-700 shadow-2xl p-6 relative z-10">
            <div className="flex justify-between items-center mb-6 border-b border-gray-700 pb-4">
                <h4 className="text-white font-bold flex items-center gap-2">
                    <Send size={16} className="text-gray-400" /> Distribution
                </h4>
                <div className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-[10px] font-bold border border-green-500/30 flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Online
                </div>
            </div>

            <div className="space-y-4">
                {[
                    { name: "Instagram", icon: Instagram, color: "text-pink-500", status: "Published" },
                    { name: "LinkedIn", icon: Linkedin, color: "text-blue-500", status: "Published" },
                    { name: "Twitter / X", icon: Twitter, color: "text-sky-400", status: "Sending..." },
                    { name: "YouTube", icon: Youtube, color: "text-red-500", status: "Scheduled" }
                ].map((platform, i) => (
                    <div key={i} className="flex items-center justify-between group">
                        <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg bg-gray-700 ${platform.color} bg-opacity-10`}>
                                <platform.icon size={16} className={platform.color} />
                            </div>
                            <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">{platform.name}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            {platform.status === "Sending..." ? (
                                <div className="text-gray-500 animate-spin">⟳</div>
                            ) : platform.status === "Published" ? (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: 0.5 + (i * 0.2) }}
                                    className="text-green-400"
                                >
                                    <Check size={16} />
                                </motion.div>
                            ) : (
                                <span className="text-[10px] text-gray-500 font-mono">10:00 AM</span>
                            )}

                            <div className={`w-8 h-4 rounded-full relative transition-colors ${platform.status === 'Scheduled' ? 'bg-gray-600' : 'bg-green-600'}`}>
                                <div className={`absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full transition-transform ${platform.status === 'Scheduled' ? '' : 'translate-x-4'}`} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-700">
                <div className="flex justify-between text-[10px] text-gray-400 mb-2">
                    <span>Campaign Progress</span>
                    <span>75%</span>
                </div>
                <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "75%" }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-green-500 to-emerald-400"
                    />
                </div>
            </div>
        </div>
    </div>
);

// --- FEATURE DATA ---

const DEEP_DIVE_FEATURES = [
    {
        id: 'calendar',
        title: "AI-Powered Content Calendar",
        subtitle: "Planning",
        description: "Plan an entire 30-day content calendar in minutes — complete with campaign themes, posting slots, and platform-optimized variations.",
        points: [
            "Auto-generated content plan powered by Google Gemini",
            "Drag-and-drop scheduling interface",
            "Smart recommendations & AI insights",
            "Instant cross-platform optimization"
        ],
        align: 'left',
        icon: Calendar,
        colorClass: 'bg-purple-500',
        VisualComponent: CalendarVisual
    },
    {
        id: 'copywriter',
        title: "AI Copywriter & Creative Generator",
        subtitle: "Creation",
        description: "Create scroll-stopping copy, scripts, captions, and creative concepts in seconds with tone-matched brand voice.",
        points: [
            "50+ content formats (ads, reels, blogs, scripts)",
            "Automatic brand voice learning engine",
            "Rephrase, expand, shorten, and translate",
            "One-click creative image suggestions"
        ],
        align: 'right',
        icon: PenTool,
        colorClass: 'bg-pink-500',
        VisualComponent: CopywriterVisual
    },
    {
        id: 'analytics',
        title: "Campaign Intelligence & Optimization",
        subtitle: "Analytics",
        description: "Measure what matters. Amplify shows real performance predictions and automated improvement suggestions — like having a growth strategist on your team.",
        points: [
            "Live performance dashboard (CTR, Reach, Engagement)",
            "Predictive analytics recommendations",
            "A/B testing automation",
            "AI-based ROI forecasting"
        ],
        align: 'left',
        icon: BarChart3,
        colorClass: 'bg-blue-500',
        VisualComponent: AnalyticsVisual
    },
    {
        id: 'publishing',
        title: "Auto-Publish & Scheduling Automation",
        subtitle: "Distribution",
        description: "Publish everywhere with one click. Amplify handles scheduling, optimization, and versioning — so you stay consistent without effort.",
        points: [
            "Auto-publish to Instagram, LinkedIn, YouTube, X, TikTok",
            "Best-time-to-post engine",
            "UTM tracking & analytics tagging",
            "Live status tracking"
        ],
        align: 'right',
        icon: Send,
        colorClass: 'bg-green-500',
        VisualComponent: PublishingVisual
    }
];

// --- TYPE DEFINITIONS ---
type TileSize = 'large' | 'medium';

interface FeatureTileProps {
    title: string;
    benefit: string;
    bullets: string[];
    icon: React.ElementType;
    size: TileSize;
    visual: React.ReactNode;
    colSpan?: string;
    rowSpan?: string;
    hasCTA?: boolean;
}

// --- BENTO GRID DATA ---
const bentoFeatures: FeatureTileProps[] = [
    {
        title: "Brand DNA Memory Engine",
        benefit: "Automatically learns your tone, rules, offers, and audience.",
        bullets: ["Tone-style imprint", "Competitor divergence", "Voice consistency"],
        icon: Dna,
        size: 'large',
        visual: <DNAVisual />,
        colSpan: 'md:col-span-2',
        rowSpan: 'md:row-span-2',
        hasCTA: true
    },
    {
        title: "AI Content Calendar",
        benefit: "Drag-&-drop planning with auto-sync.",
        bullets: ["Drag-&-drop planning", "Smart Variations", "Cross-platform sync"],
        icon: Calendar,
        size: 'medium',
        visual: <BentoCalendarVisual />,
    },
    {
        title: "AI Copywriter",
        benefit: "Long-form + short-form generation.",
        bullets: ["Long & short-form", "Auto-translations", "Visual suggestions"],
        icon: PenTool,
        size: 'medium',
        visual: <BentoCopywriterVisual />,
    },
    {
        title: "Campaign Intelligence",
        benefit: "Predictive insights & mapping.",
        bullets: ["Predictive insights", "Audience mapping", "AI recommendations"],
        icon: Target,
        size: 'medium',
        visual: <IntelVisual />,
    },
    {
        title: "Auto-Publish",
        benefit: "Cross-channel delivery automation.",
        bullets: ["Cross-channel delivery", "Best-time targeting", "Link tracking"],
        icon: Send,
        size: 'medium',
        visual: <BentoPublishVisual />,
    },
    {
        title: "Video Scripts + 30-Day Campaigns",
        benefit: "Generate full scripts and monthly campaign calendars in seconds.",
        bullets: ["Hooks & Intros", "Visual Storyboards", "Platform-optimized sequences"],
        icon: Video,
        size: 'large',
        visual: <VideoScriptVisual />,
        colSpan: 'md:col-span-2',
        rowSpan: 'md:row-span-2',
        hasCTA: true
    },
    {
        title: "Multi-Modal Generator",
        benefit: "Carousels, stills, and thumbnails.",
        bullets: ["Carousels", "Product stills", "Thumbnail packaging"],
        icon: Layers,
        size: 'medium',
        visual: <MultiModalVisual />,
    },
    {
        title: "Brand Analytics",
        benefit: "ROI breakdown & sales mapping.",
        bullets: ["ROI breakdown", "Channel comparison", "Sales attribution"],
        icon: PieChart,
        size: 'medium',
        visual: <BentoAnalyticsVisual />,
    },
];

const SocialIcon = ({ Icon }: { Icon: React.ElementType }) => (
    <div className="text-slate-400 hover:text-[#5C3BFF] hover:scale-110 transition-all duration-300 cursor-pointer">
        <Icon size={24} />
    </div>
);

// --- 3D TILT CARD COMPONENT ---
const TiltCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseXFromCenter = e.clientX - rect.left - width / 2;
        const mouseYFromCenter = e.clientY - rect.top - height / 2;

        const xPct = mouseXFromCenter / width;
        const yPct = mouseYFromCenter / height;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={`relative w-full h-full rounded-3xl transition-all duration-200 ease-out ${className}`}
        >
            <div
                style={{ transform: "translateZ(0px)" }}
                className="relative w-full h-full rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
            >
                {children}
            </div>

            {/* GLOSS OVERLAY */}
            <motion.div
                style={{ opacity: useTransform(mouseY, [-0.5, 0.5], [0, 0.4]) }}
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 pointer-events-none rounded-3xl z-50 mix-blend-overlay"
            />
        </motion.div>
    );
};


// --- MAIN COMPONENT ---
const FeatureBento: React.FC = () => {
    const [selectedFeatureId, setSelectedFeatureId] = useState<string | null>(null);
    const selectedFeature = DEEP_DIVE_FEATURES.find(f => f.id === selectedFeatureId);

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans bg-[#FDFCFD]">

            {/* UNIFIED SECTION HEADER */}
            <div className="mb-12 text-center max-w-3xl mx-auto">
                <motion.span
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="inline-block py-1.5 px-4 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 text-[#5C3BFF] text-xs font-bold tracking-widest uppercase mb-6 shadow-sm"
                >
                    Features Deep Dive
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-display text-slate-900 mb-6 leading-[1.1] tracking-tight"
                >
                    Everything You Need to Build <br />
                    <span className="gradient-text">High-Performance</span> Brand Content
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto"
                >
                    A unified platform that writes, plans, optimizes, and publishes AI-powered campaigns with your authentic brand DNA.
                </motion.p>
            </div>

            {/* LEFT/RIGHT FEATURES SECTION */}
            <div className="mb-12">
                {DEEP_DIVE_FEATURES.map((feature, i) => (
                    <div key={feature.id} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-24 lg:mb-32 ${feature.align === 'right' ? 'lg:flex-row-reverse' : ''}`}>

                        {/* Text Side */}
                        <motion.div
                            initial={{ opacity: 0, x: feature.align === 'left' ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="flex-1"
                        >
                            <div className={`w-12 h-12 rounded-2xl ${feature.colorClass} bg-opacity-10 flex items-center justify-center mb-6`}>
                                <feature.icon size={24} className={feature.colorClass.replace('bg-', 'text-')} />
                            </div>
                            <h3 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4 leading-tight">
                                {feature.title}
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                {feature.description}
                            </p>
                            <ul className="space-y-4 mb-8">
                                {feature.points.map((point, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full ${feature.colorClass} bg-opacity-10 flex items-center justify-center`}>
                                            <Check size={12} className={feature.colorClass.replace('bg-', 'text-')} strokeWidth={3} />
                                        </div>
                                        <span className="text-gray-700 font-medium">{point}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="group flex items-center gap-2 text-gray-900 font-bold text-sm hover:gap-3 transition-all">
                                <span className="heading-gradient">Learn more</span> <ArrowRight size={16} className="group-hover:text-primary transition-colors" />
                            </button>
                        </motion.div>

                        {/* Visual Side (Interactive Card) */}
                        <div className="flex-1 w-full perspective-1000">
                            <motion.div
                                layoutId={`card-container-${feature.id}`}
                                onClick={() => setSelectedFeatureId(feature.id)}
                                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                whileHover={{
                                    scale: 1.02,
                                    boxShadow: `0 25px 50px -12px ${feature.colorClass.replace('bg-', 'rgba(').replace('500', '255, 0.3)')}`
                                }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="relative rounded-[2rem] bg-gray-50/50 p-2 border border-white/50 shadow-2xl shadow-gray-200/50 cursor-pointer group"
                                ref={(el) => {
                                    if (!el) return;
                                    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                                    if (prefersReduced) return;
                                    el.onmouseenter = () => {
                                        el.animate([
                                            { transform: 'translateZ(0) scale(1)', boxShadow: '0 10px 20px rgba(0,0,0,0.06)' },
                                            { transform: 'translateZ(0) scale(1.02)', boxShadow: '0 25px 50px rgba(0,0,0,0.12)' }
                                        ], { duration: 250, easing: 'cubic-bezier(0.22,1,0.36,1)', fill: 'forwards' });
                                    };
                                    el.onmouseleave = () => {
                                        el.animate([
                                            { transform: 'translateZ(0) scale(1.02)', boxShadow: '0 25px 50px rgba(0,0,0,0.12)' },
                                            { transform: 'translateZ(0) scale(1)', boxShadow: '0 10px 20px rgba(0,0,0,0.06)' }
                                        ], { duration: 250, easing: 'cubic-bezier(0.22,1,0.36,1)', fill: 'forwards' });
                                    };
                                }}
                            >
                                <div className="relative bg-white rounded-[1.8rem] border border-gray-100 overflow-hidden aspect-[4/3] lg:aspect-square xl:aspect-[4/3]">
                                    <feature.VisualComponent />

                                    {/* Hover Overlay Hint */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                        className="absolute inset-0 bg-black/5 backdrop-blur-[1px] flex items-center justify-center z-30"
                                    >
                                        <div className="bg-white px-4 py-2 rounded-full shadow-lg font-bold text-sm text-gray-800 flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                            <Zap size={14} className="text-primary" /> Click to Expand
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                ))}
            </div>

            {/* BENTO GRID */}
            <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[340px] gap-6 mb-24 perspective-[2000px] mt-12">
                {bentoFeatures.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-50px" }}
                        className={`
              ${feature.colSpan || 'col-span-1'} 
              ${feature.rowSpan || 'row-span-1'}
            `}
                    >
                        <TiltCard className="group hover:shadow-[0_20px_50px_-12px_rgba(92,59,255,0.15)]">

                            <div className={`flex flex-col h-full relative z-10 ${feature.size === 'large' ? 'justify-between' : ''}`}>

                                {/* VISUAL AREA */}
                                <div className={`
                  relative w-full overflow-hidden
                  ${feature.size === 'large' ? 'h-[62%] order-first' : 'h-[160px] order-first'}
                `}>
                                    {feature.visual}
                                </div>

                                {/* TEXT AREA */}
                                <div className={`
                  p-5 md:p-6 flex flex-col bg-white flex-1 relative
                  ${feature.size === 'large' ? 'border-t border-slate-50' : 'border-t border-slate-50'}
                `}>

                                    {/* ICON & HEADER */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="p-2.5 rounded-xl bg-slate-50 text-slate-600 group-hover:bg-[#5C3BFF] group-hover:text-white transition-colors duration-300 shadow-sm ring-1 ring-slate-100">
                                            <feature.icon size={20} strokeWidth={2} />
                                        </div>
                                        {feature.hasCTA && (
                                            <button className="hidden md:flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 bg-indigo-50 px-2 py-1 rounded-md">
                                                <span className="heading-gradient">Try Demo</span> <ArrowRight size={10} />
                                            </button>
                                        )}
                                    </div>

                                    <h3 className={`font-display font-bold text-slate-900 mb-2 leading-tight ${feature.size === 'large' ? 'text-2xl' : 'text-lg'}`}>
                                        {feature.title}
                                    </h3>

                                    <p className="text-sm text-slate-500 mb-4 leading-relaxed font-medium">
                                        {feature.benefit}
                                    </p>

                                    {/* BULLETS - Pushed to bottom */}
                                    <ul className="space-y-2 mt-auto">
                                        {feature.bullets.map((bullet, i) => (
                                            <li key={i} className="flex items-center gap-2 text-[11px] font-semibold text-slate-400 group-hover:text-slate-600 transition-colors">
                                                <div className="w-1 h-1 rounded-full bg-[#A57CFF]" />
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                        </TiltCard>
                    </motion.div>
                ))}
            </div>

            {/* FOOTER TRUST MARKERS */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col items-center justify-center gap-8 pt-12 border-t border-slate-100"
            >
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Trusted by 10,000+ brand teams</p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    <SocialIcon Icon={Instagram} />
                    <SocialIcon Icon={Linkedin} />
                    <SocialIcon Icon={Youtube} />
                    <SocialIcon Icon={Facebook} />
                    <SocialIcon Icon={Twitter} />
                </div>
            </motion.div>

            {/* BADGES SECTION */}
            <div className="border-t border-slate-100 pt-16 mt-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12">
                    {[
                        { icon: Shield, label: "Enterprise Security", desc: "SSO & Role-based Access" },
                        { icon: Globe, label: "Multi-Language", desc: "Translate to 30+ languages" },
                        { icon: Layers, label: "Asset Management", desc: "Unlimited cloud storage" },
                        { icon: LayoutTemplate, label: "Custom Templates", desc: "Save your best formats" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center text-center group hover:bg-gray-50 p-4 rounded-xl transition-colors"
                        >
                            <div className="w-12 h-12 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110 shadow-sm">
                                <item.icon size={20} />
                            </div>
                            <h5 className="font-bold text-gray-900 mb-1">{item.label}</h5>
                            <p className="text-xs text-gray-500">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* EXPANSION MODAL */}
            <AnimatePresence>
                {selectedFeatureId && selectedFeature && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-md"
                        onClick={() => setSelectedFeatureId(null)}
                    >
                        <motion.div
                            layoutId={`card-container-${selectedFeatureId}`}
                            className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedFeatureId(null)}
                                className="absolute top-4 right-4 z-50 p-2 bg-black/10 hover:bg-black/20 rounded-full transition-colors"
                            >
                                <X size={24} className="text-gray-800" />
                            </button>

                            {/* Modal Content: Visual + Info */}
                            <div className="flex flex-col h-full">
                                <div className="flex-1 bg-gray-50 relative overflow-hidden min-h-[400px]">
                                    <selectedFeature.VisualComponent />
                                </div>
                                <div className="p-8 bg-white border-t border-gray-100 shrink-0">
                                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${selectedFeature.colorClass} bg-opacity-10 text-xs font-bold uppercase tracking-wide mb-4`}>
                                        <span className={selectedFeature.colorClass.replace('bg-', 'text-')}>Live Demo</span>
                                    </div>
                                    <h3 className="font-display font-bold text-2xl md:text-3xl text-gray-900 mb-2">
                                        {selectedFeature.title}
                                    </h3>
                                    <p className="text-gray-600 max-w-2xl">
                                        {selectedFeature.description} Experience the full power of this feature in our dashboard.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
};

export default FeatureBento;
