import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TrendingUp, Clock, DollarSign, Star, ArrowUpRight, CheckCircle } from 'lucide-react';
import { BrandItem, HubSpotLogo, CanvaLogo, ShopifyLogo, MondayLogo, AirtableLogo, FigmaLogo } from '@/components/BrandLogos';
import { cn } from '@/utils/cn';

const STATS = [
    {
        value: "+84%",
        label: "Campaign Efficiency",
        icon: TrendingUp,
        desc: "Average increase in engagement across all channels",
        trend: "+12% vs last month",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "group-hover:border-emerald-200"
    },
    {
        value: "10x",
        label: "Faster Production",
        icon: Clock,
        desc: "From initial concept to final published asset",
        trend: "-40hrs work week",
        color: "text-blue-600",
        bg: "bg-blue-50",
        border: "group-hover:border-blue-200"
    },
    {
        value: "62%",
        label: "Lower Cost",
        icon: DollarSign,
        desc: "Reduction in operational spend compared to agencies",
        trend: "High ROI",
        color: "text-violet-600",
        bg: "bg-violet-50",
        border: "group-hover:border-violet-200"
    },
    {
        value: "4.9/5",
        label: "User Rating",
        icon: Star,
        desc: "Trusted by over 12,000 marketing teams worldwide",
        trend: "Top Rated 2024",
        color: "text-amber-500",
        bg: "bg-amber-50",
        border: "group-hover:border-amber-200"
    },
];

const BRANDS = [
    { name: 'HubSpot', icon: HubSpotLogo },
    { name: 'Canva', icon: CanvaLogo },
    { name: 'Shopify', icon: ShopifyLogo },
    { name: 'Monday', icon: MondayLogo },
    { name: 'Airtable', icon: AirtableLogo },
    { name: 'Figma', icon: FigmaLogo },
];

export const SocialProofSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const yBg1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const yBg2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const yBg3 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    return (
        <section ref={sectionRef} className="py-24 md:py-32 bg-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <motion.div
                    style={{ y: yBg1 }}
                    className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50"
                />
                <motion.div
                    style={{ y: yBg2 }}
                    className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-secondary/5 via-transparent to-transparent opacity-50"
                />
                {/* Center blob using margins for centering to allow pure transform animations */}
                <motion.div
                    style={{ y: yBg3 }}
                    className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -ml-[400px] -mt-[400px] bg-slate-50 rounded-full blur-3xl opacity-60 -z-10"
                />

                {/* Subtle Dot Pattern */}
                <svg className="absolute inset-0 w-full h-full text-slate-900 opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="dot-pattern" width="24" height="24" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dot-pattern)" />
                </svg>
            </div>

            <div className="max-w-[1280px] mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

                    {/* Left Column: Narrative & Brands (Span 5 cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="lg:col-span-5 flex flex-col gap-10"
                    >
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 w-fit">
                                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                                <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Market Leader</span>
                            </div>

                            <h2 className="font-serif font-bold text-4xl md:text-5xl text-slate-900 leading-[1.1] tracking-tight">
                                Trusted by the world's most <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">modern teams</span>.
                            </h2>

                            <p className="text-lg text-slate-600 leading-relaxed font-medium max-w-lg">
                                Join thousands of fast-growing companies using Amplify to streamline their content operations and drive measurable growth.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-all hover:gap-3 group">
                                    Read Case Studies
                                    <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                                </button>
                                <div className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-slate-700">
                                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                                    No credit card required
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-slate-100 pt-8">
                            <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">Powering teams at</p>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4">
                                {BRANDS.map((brand, i) => (
                                    <BrandItem key={i} name={brand.name} icon={brand.icon} />
                                ))}
                            </div>
                        </div>

                        {/* Avatars Social Proof */}
                        <div className="flex items-center gap-4 bg-white/50 backdrop-blur-sm border border-slate-100 p-4 rounded-xl w-fit shadow-sm">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full ring-2 ring-white bg-slate-100 flex items-center justify-center overflow-hidden shadow-sm relative z-10 hover:z-20 hover:scale-110 transition-transform cursor-pointer">
                                        <img
                                            src={`https://api.dicebear.com/7.x/notionists/svg?seed=${i * 582}&backgroundColor=e0e7ff,f3e8ff`}
                                            alt="User"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                                <div className="w-10 h-10 rounded-full ring-2 ring-white bg-slate-900 flex items-center justify-center text-[10px] font-bold text-white relative z-10">
                                    +12k
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex text-amber-400 mb-0.5">
                                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={12} fill="currentColor" />)}
                                </div>
                                <span className="text-xs font-bold text-slate-700">
                                    "Best tool we've used"
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Stats Grid (Span 7 cols) */}
                    <div className="lg:col-span-7 relative">
                        {/* Decorative background blob for the grid */}
                        <motion.div
                            style={{ y: yBg2 }}
                            className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-3xl blur-2xl -z-10 transform rotate-3 scale-95"
                        />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 relative">
                            {STATS.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15, duration: 0.6, type: "spring", bounce: 0.3 }}
                                    className={cn(
                                        "group relative bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden",
                                        stat.border
                                    )}
                                >
                                    {/* Hover Gradient Overlay */}
                                    <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br from-transparent to-current", stat.color.replace('text-', 'text-'))} />

                                    <div className="relative z-10">
                                        <div className="flex justify-between items-start mb-6">
                                            <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm", stat.bg)}>
                                                <stat.icon size={24} className={stat.color} />
                                            </div>
                                            <span className={cn("text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-50 border border-slate-100 text-slate-500 uppercase tracking-wider")}>
                                                {stat.trend}
                                            </span>
                                        </div>

                                        <div className="space-y-2">
                                            <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-600 transition-all">
                                                {stat.value}
                                            </h3>
                                            <h4 className="font-bold text-slate-800 text-lg">
                                                {stat.label}
                                            </h4>
                                            <p className="text-sm text-slate-500 font-medium leading-relaxed">
                                                {stat.desc}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Decorative Corner Icon */}
                                    <stat.icon className={cn("absolute -bottom-4 -right-4 w-24 h-24 opacity-[0.03] transform -rotate-12 transition-transform group-hover:scale-125 group-hover:rotate-0", stat.color)} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};