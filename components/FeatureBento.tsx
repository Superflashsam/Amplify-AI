import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import {
    Dna, Video, Calendar, PenTool,
    Target, Send, Layers, PieChart,
    ArrowRight, Shield, Globe, LayoutTemplate, X, Zap, Check,
    Instagram, Linkedin, Youtube, Facebook, Twitter, BarChart3, CheckCircle2, Sparkles, Image as ImageIcon, TrendingUp
} from 'lucide-react';

import {
    CalendarVisual as BentoCalendarVisual,
    CopywriterVisual as BentoCopywriterVisual,
    IntelVisual, PublishVisual as BentoPublishVisual,
    MultiModalVisual, AnalyticsVisual as BentoAnalyticsVisual,
    VideoScriptVisual, DNAVisual
} from './BentoVisuals';



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
        VisualComponent: BentoCalendarVisual
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
        VisualComponent: BentoCopywriterVisual
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
        VisualComponent: BentoAnalyticsVisual
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
        VisualComponent: BentoPublishVisual
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
        visual: <div className="w-full h-full bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center"><Dna size={64} className="text-indigo-400 opacity-30" /></div>,
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
                    className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 mb-6 leading-[1.1] tracking-tight"
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
                            <h3 className="font-sans font-bold text-3xl md:text-4xl text-gray-900 mb-4 leading-tight">
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

                                    <h3 className={`font-sans font-bold text-slate-900 mb-2 leading-tight ${feature.size === 'large' ? 'text-2xl' : 'text-lg'}`}>
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
                                    <h3 className="font-sans font-bold text-2xl md:text-3xl text-gray-900 mb-2">
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
