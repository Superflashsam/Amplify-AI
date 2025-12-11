import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Calendar, TrendingUp, Zap, MessageCircle, Target, Sparkles,
    BarChart3, Instagram, Linkedin, Twitter, Youtube, Hash,
    PenTool, Clock, ArrowUpRight, MousePointer2, CheckCircle2,
    Users, Activity, Globe, ShieldCheck, Bell, Play, Heart, Share2,
    Search, Mic, Video, Command, Layers, PieChart, MoreHorizontal,
    FileText, UserPlus, Mail, AlertCircle
} from 'lucide-react';

// --- Configuration ---

const MENU_ITEMS = [
    { id: 'brand-dna', label: 'Brand DNA', icon: Sparkles, color: 'text-purple-600', bg: 'bg-purple-50', accent: 'border-purple-200' },
    { id: 'content-studio', label: 'AI Content', icon: PenTool, color: 'text-blue-600', bg: 'bg-blue-50', accent: 'border-blue-200' },
    { id: 'scheduler', label: 'Scheduler', icon: Calendar, color: 'text-pink-600', bg: 'bg-pink-50', accent: 'border-pink-200' },
    { id: 'whatsapp', label: 'WhatsApp', icon: MessageCircle, color: 'text-green-600', bg: 'bg-green-50', accent: 'border-green-200' },
    { id: 'ad-gen', label: 'Ad Generator', icon: Target, color: 'text-orange-600', bg: 'bg-orange-50', accent: 'border-orange-200' },
    { id: 'competitor', label: 'Competitor AI', icon: TrendingUp, color: 'text-indigo-600', bg: 'bg-indigo-50', accent: 'border-indigo-200' },
    { id: 'hashtags', label: 'Hashtags', icon: Hash, color: 'text-cyan-600', bg: 'bg-cyan-50', accent: 'border-cyan-200' },
];

const SOCIAL_IMAGES = [
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1614850523060-8da1d56ae167?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=400&auto=format&fit=crop"
];

export const HeroAnimation: React.FC = () => {
    const [activeMenu, setActiveMenu] = useState(0);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [isClicking, setIsClicking] = useState(false);
    const [currentSocialImage, setCurrentSocialImage] = useState(0);

    // Auto-cycle through menu items
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveMenu((prev) => (prev + 1) % MENU_ITEMS.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // Social Carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSocialImage((prev) => (prev + 1) % SOCIAL_IMAGES.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Cursor Follow Logic
    useEffect(() => {
        const targetY = 140 + (activeMenu * 60);
        const targetX = 160;

        const timeout = setTimeout(() => {
            setCursorPos({ x: targetX, y: targetY });
            setIsClicking(true);
            setTimeout(() => setIsClicking(false), 300);
        }, 600);

        return () => clearTimeout(timeout);
    }, [activeMenu]);

    return (
        <div className="relative w-full max-w-[1050px] mx-auto perspective-1000 py-16 md:py-24">

            {/* =========================================================================
                ANTI-GRAVITY FLOATING WIDGET ECOSYSTEM (Surrounding the Dashboard)
               ========================================================================= */}

            {/* --- TOP RIGHT CLUSTER --- */}

            {/* 1.1 Revenue Growth Card - LOWERED POS */}
            <motion.div
                className="absolute top-0 -right-12 md:-right-24 z-20 hidden lg:block"
                animate={{ y: [-12, 12, -12], rotateX: [0, 5, 0], rotateY: [0, 5, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="bg-white/80 backdrop-blur-xl border border-white/60 p-4 rounded-3xl shadow-[0_30px_60px_-10px_rgba(0,0,0,0.12)] w-60 ring-1 ring-white/40">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex gap-2 items-center">
                            <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600 shadow-sm border border-green-100">
                                <TrendingUp size={16} />
                            </div>
                            <div>
                                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Revenue</div>
                                <div className="text-sm font-bold text-gray-900">$24,500</div>
                            </div>
                        </div>
                        <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full border border-green-100">+18%</span>
                    </div>
                    {/* Live Chart Animation */}
                    <div className="h-16 flex items-end justify-between gap-1">
                        {[40, 65, 45, 80, 60, 95, 75, 85, 65, 90].map((h, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: '20%' }}
                                animate={{ height: `${h}%` }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: "mirror",
                                    delay: i * 0.1,
                                    ease: "easeInOut"
                                }}
                                className="w-full bg-gradient-to-t from-green-500 via-green-400 to-green-300 rounded-t-sm opacity-90 shadow-[0_0_10px_rgba(34,197,94,0.3)]"
                            />
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* 1.2 "New Lead" Toast - LOWERED & RIGHT */}
            <motion.div
                className="absolute top-48 -right-16 md:-right-32 z-10 hidden lg:block"
                animate={{ x: [0, -10, 0], y: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
                <div className="bg-white p-3 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 w-52 transform rotate-2">
                    <div className="relative">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="User" />
                        <div className="absolute -bottom-1 -right-1 bg-blue-500 w-4 h-4 rounded-full border-2 border-white flex items-center justify-center">
                            <UserPlus size={8} className="text-white" />
                        </div>
                    </div>
                    <div>
                        <div className="text-xs font-bold text-gray-900">New Lead Acquired</div>
                        <div className="text-[10px] text-gray-500">Just now • LinkedIn Ads</div>
                    </div>
                </div>
            </motion.div>


            {/* --- TOP LEFT CLUSTER --- */}

            {/* 2.1 Team Active Pill - LOWERED POS */}
            <motion.div
                className="absolute top-0 -left-8 md:-left-20 z-20 hidden lg:block"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="bg-white/90 backdrop-blur-md border border-white/50 p-2 pr-5 rounded-full shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] flex items-center gap-3 w-auto min-w-[180px]">
                    <div className="flex -space-x-3">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="w-10 h-10 rounded-full border-[3px] border-white bg-gray-100 overflow-hidden shadow-sm relative z-0 hover:z-10 transition-all hover:scale-110">
                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Designer${i}`} alt="user" />
                            </div>
                        ))}
                        <div className="w-10 h-10 rounded-full border-[3px] border-white bg-gray-900 text-white flex items-center justify-center text-[10px] font-bold shadow-sm relative z-0">
                            +5
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[11px] font-bold text-gray-900">Team Active</span>
                        <span className="text-[9px] font-bold text-green-500 flex items-center gap-1">
                            <span className="block w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                            Collaboration Mode
                        </span>
                    </div>
                </div>
            </motion.div>

            {/* 2.2 Metric Cube - LOWERED & CLOSER */}
            <motion.div
                className="absolute top-56 -left-16 md:-left-32 z-10 hidden lg:block opacity-90"
                animate={{ rotate: [-5, 5, -5], y: [-5, 5, -5] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            >
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-4 rounded-3xl shadow-2xl border-4 border-white/10 w-40 relative overflow-hidden">
                    {/* Decorative circles */}
                    <div className="absolute -right-4 -top-4 w-20 h-20 bg-white/10 rounded-full blur-xl" />
                    <div className="absolute -left-4 -bottom-4 w-16 h-16 bg-black/10 rounded-full blur-lg" />

                    <div className="relative z-10">
                        <Activity size={24} className="mb-3 text-indigo-100" />
                        <div className="text-2xl font-bold mb-1">98.2%</div>
                        <div className="text-[10px] font-medium text-indigo-100 opacity-80">System Efficiency</div>
                        <div className="mt-3 h-1 bg-black/20 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-white/80"
                                animate={{ width: ['40%', '80%', '60%', '90%'] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            />
                        </div>
                    </div>
                </div>
            </motion.div>


            {/* --- BOTTOM LEFT CLUSTER --- */}

            {/* 3.1 AI Processing Node - LOWERED & OUT */}
            <motion.div
                className="absolute bottom-20 -left-12 md:-left-36 z-20 hidden lg:block"
                animate={{ y: [0, 15, 0], x: [-5, 5, -5] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
                <div className="bg-white/90 backdrop-blur-xl border border-purple-100/60 p-5 rounded-3xl shadow-[0_20px_50px_-10px_rgba(168,85,247,0.15)] w-60 relative overflow-hidden">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
                            <Sparkles size={16} className="text-white" />
                        </div>
                        <div>
                            <div className="text-[11px] font-bold text-gray-900">AI Brand Analysis</div>
                            <div className="text-[9px] text-purple-500 font-semibold uppercase tracking-wide">Processing Data</div>
                        </div>
                    </div>
                    {/* Living lines animation */}
                    <div className="space-y-2">
                        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-purple-400 to-pink-400"
                                animate={{ width: ["0%", "100%", "0%"], x: ["-100%", "0%", "100%"] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </div>
                        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden w-2/3">
                            <motion.div
                                className="h-full bg-gradient-to-r from-purple-400 to-pink-400"
                                animate={{ width: ["0%", "100%", "0%"], x: ["-100%", "0%", "100%"] }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                            />
                        </div>
                    </div>
                    <div className="mt-3 flex justify-between text-[9px] text-gray-400 font-medium">
                        <span>Analyzing Tone...</span>
                        <span>45ms</span>
                    </div>
                </div>
            </motion.div>

            {/* 3.2 Dynamic Island Pill - PUSHED FARTHER DOWN */}
            <motion.div
                className="absolute -bottom-16 left-4 md:left-12 z-30 hidden lg:flex items-center gap-3"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="bg-[#1A1A1A] text-white pl-1.5 pr-5 py-2 rounded-full shadow-2xl flex items-center gap-3 border border-gray-700/50">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                        <div className="w-4 h-4 border-2 border-white/50 border-t-white rounded-full animate-spin" />
                    </div>
                    <div>
                        <div className="text-[10px] font-bold text-gray-200">Generating Assets</div>
                        <div className="text-[8px] text-gray-500">2 variants remaining</div>
                    </div>
                </div>
            </motion.div>


            {/* --- BOTTOM RIGHT CLUSTER --- */}

            {/* 4.1 Social Media "Post" Card - ADJUSTED POS */}
            <motion.div
                className="absolute bottom-12 -right-10 md:-right-36 z-20 hidden lg:block"
                animate={{ y: [12, -12, 12], rotate: [-3, 3, -3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
                <div className="bg-white p-3 rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] w-52 border border-gray-100/80">
                    {/* Header */}
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-yellow-400 via-orange-500 to-purple-600 p-[1.5px]">
                            <div className="w-full h-full rounded-full bg-white p-[1px] flex items-center justify-center overflow-hidden">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Brand" alt="brand" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-gray-900 leading-none">Amplify.ai</span>
                            <span className="text-[8px] text-gray-400 leading-none mt-0.5">Sponsored</span>
                        </div>
                        <MoreHorizontal size={12} className="ml-auto text-gray-300" />
                    </div>

                    {/* Image Carousel */}
                    <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-3 relative overflow-hidden group">
                        <AnimatePresence mode="popLayout">
                            <motion.img
                                key={currentSocialImage}
                                src={SOCIAL_IMAGES[currentSocialImage]}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8 }}
                                className="absolute inset-0 w-full h-full object-cover"
                                alt="Viral Content"
                            />
                        </AnimatePresence>

                        {/* Play Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                                <Play size={10} className="text-white fill-white ml-0.5" />
                            </div>
                        </div>
                        {/* Likes bubble */}
                        <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded-full text-[8px] font-bold shadow-sm flex items-center gap-1">
                            <Heart size={8} className="text-red-500 fill-red-500" /> 12.4k
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="flex items-center justify-between px-1">
                        <div className="flex gap-2">
                            <Heart size={14} className="text-gray-400 hover:text-red-500 transition-colors" />
                            <MessageCircle size={14} className="text-gray-400" />
                            <Share2 size={14} className="text-gray-400" />
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 4.2 Hashtag Badge - PUSHED UP & OUT to avoid overlap */}
            <motion.div
                className="absolute bottom-64 -right-16 md:-right-44 z-10 hidden lg:block"
                animate={{ x: [-8, 8, -8], scale: [1, 1.05, 1] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
                <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-4 rounded-[20px] shadow-lg border-2 border-white/20 flex flex-col items-center w-28 transform -rotate-6">
                    <div className="bg-white/20 p-1.5 rounded-full mb-1">
                        <Hash size={16} className="text-white" />
                    </div>
                    <div className="text-[9px] font-bold opacity-90 uppercase tracking-widest mb-0.5">Viral Alert</div>
                    <div className="text-xl font-bold">#Growth</div>
                </div>
            </motion.div>


            {/* --- MAIN DASHBOARD CONTAINER --- */}
            <div className="relative bg-white rounded-[32px] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.15)] border border-gray-200/60 overflow-hidden z-0 ring-4 ring-white/50">

                {/* Simulated Cursor */}
                <motion.div
                    className="absolute z-[100] pointer-events-none"
                    animate={{ x: cursorPos.x, y: cursorPos.y }}
                    transition={{ type: "spring", stiffness: 100, damping: 22, mass: 1 }}
                >
                    <MousePointer2
                        size={32}
                        className={`text-black drop-shadow-2xl transition-transform duration-100 ${isClicking ? 'scale-90' : 'scale-100'}`}
                        fill="black"
                        strokeWidth={1}
                    />
                    {isClicking && (
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0.6 }}
                            animate={{ scale: 2, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute -top-4 -left-4 w-16 h-16 rounded-full border border-gray-800/30"
                        />
                    )}
                </motion.div>

                {/* Dashboard Header */}
                <div className="h-16 border-b border-gray-100 bg-white/80 backdrop-blur-sm flex items-center justify-between px-6 sticky top-0 z-20">
                    <div className="flex items-center gap-4">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#FF5F57] hover:bg-[#FF5F57]/80 transition-colors shadow-sm" />
                            <div className="w-3 h-3 rounded-full bg-[#FEBC2E] hover:bg-[#FEBC2E]/80 transition-colors shadow-sm" />
                            <div className="w-3 h-3 rounded-full bg-[#28C840] hover:bg-[#28C840]/80 transition-colors shadow-sm" />
                        </div>
                        <div className="w-px h-6 bg-gray-200" />

                        {/* Breadcrumb / Search */}
                        <div className="flex items-center gap-3 bg-gray-50 px-3 py-1.5 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors cursor-text group">
                            <Search size={14} className="text-gray-400 group-hover:text-gray-600" />
                            <span className="text-xs font-medium text-gray-500 group-hover:text-gray-700">Amplifier / <span className="text-gray-900 font-bold">Dashboard</span></span>
                            <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded border border-gray-200 text-[9px] font-bold text-gray-400 ml-4 bg-white">⌘ K</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors cursor-pointer">
                                <Bell size={14} />
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 p-[2px] cursor-pointer shadow-md hover:shadow-lg transition-shadow">
                                <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" alt="admin" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dashboard Body */}
                <div className="flex min-h-[580px] bg-[#F9FAFB]">

                    {/* Sidebar */}
                    <div className="w-64 py-6 px-4 flex flex-col gap-2 border-r border-gray-100 bg-white z-10">
                        {/* Section Header */}
                        <div className="px-3 mb-2 flex items-center justify-between">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Workspace</span>
                            <MoreHorizontal size={14} className="text-gray-400 cursor-pointer hover:text-gray-600" />
                        </div>

                        {MENU_ITEMS.map((item, index) => {
                            const Icon = item.icon;
                            const isActive = index === activeMenu;

                            return (
                                <div key={item.id} className="relative group">
                                    <motion.div
                                        className={`relative flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-default transition-all duration-300 z-10 ${isActive ? 'text-gray-900 font-semibold' : 'text-gray-500 font-medium group-hover:text-gray-700'
                                            }`}
                                    >
                                        <div className={`p-1.5 rounded-lg transition-colors duration-300 ${isActive ? item.bg + ' ' + item.color : 'bg-gray-50 text-gray-400 group-hover:bg-gray-100'}`}>
                                            <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                                        </div>
                                        <span className="text-sm">{item.label}</span>
                                        {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-current opacity-80" />}
                                    </motion.div>

                                    {/* Active Background Pill */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="sidebarActiveBG"
                                            className={`absolute inset-0 bg-white shadow-[0_2px_8px_-2px_rgba(0,0,0,0.08)] border ${item.accent} rounded-xl z-0`}
                                            transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                        />
                                    )}
                                </div>
                            );
                        })}

                        {/* Bottom Upgrade Card */}
                        <div className="mt-auto pt-6">
                            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl p-4 text-white relative overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-shadow">
                                <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Zap size={60} />
                                </div>
                                <div className="relative z-10">
                                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                        <Sparkles size={16} className="text-yellow-400 fill-yellow-400" />
                                    </div>
                                    <div className="text-xs font-bold mb-1">Upgrade Plan</div>
                                    <div className="text-[10px] text-gray-400 mb-2">Unlock unlimited AI generations</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Viewport */}
                    <div className="flex-1 p-8 overflow-hidden relative">
                        {/* Subtle Background Grid Pattern */}
                        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-60" />

                        <AnimatePresence mode="wait">
                            <ContentPanel key={activeMenu} item={MENU_ITEMS[activeMenu]} />
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Internal Dashboard Content Panel ---
const ContentPanel: React.FC<{ item: typeof MENU_ITEMS[0] }> = ({ item }) => {

    // Staggered animation for content elements
    const containerVars = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVars = {
        hidden: { opacity: 0, y: 15, scale: 0.98 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 220, damping: 20 } }
    };

    const renderFeatureContent = () => {
        switch (item.id) {
            case 'brand-dna':
                return (
                    <motion.div variants={containerVars} initial="hidden" animate="visible" className="h-full flex flex-col gap-6 max-w-2xl mx-auto">
                        {/* Header */}
                        <motion.div variants={itemVars} className="flex justify-between items-end border-b border-gray-200 pb-4">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">{item.label} Analysis</h2>
                                <p className="text-sm text-gray-500 mt-1">Decoding your brand's unique voice & identity.</p>
                            </div>
                            <div className="flex gap-2">
                                <button className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-bold text-gray-600 hover:bg-gray-50 transition-colors">Export PDF</button>
                                <button className="px-3 py-1.5 bg-purple-600 text-white rounded-lg text-xs font-bold hover:bg-purple-700 transition-colors shadow-sm">Run Scan</button>
                            </div>
                        </motion.div>

                        {/* Main Cards Row */}
                        <div className="grid grid-cols-2 gap-5">
                            {/* Card 1: Tone Analysis Radar */}
                            <motion.div variants={itemVars} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex items-center gap-2">
                                        <div className="p-1.5 bg-purple-50 rounded text-purple-600"><Mic size={14} /></div>
                                        <span className="text-xs font-bold text-gray-700 uppercase">Voice Profile</span>
                                    </div>
                                    <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Consistent</span>
                                </div>
                                <div className="h-32 flex items-center justify-center relative">
                                    {/* Concentric Circles Animation */}
                                    {[0, 1, 2].map((i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute border border-purple-100 rounded-full"
                                            initial={{ width: 40, height: 40, opacity: 1 }}
                                            animate={{ width: 140, height: 140, opacity: 0 }}
                                            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.8, ease: "easeOut" }}
                                        />
                                    ))}
                                    <div className="relative z-10 text-center">
                                        <div className="text-2xl font-bold text-gray-900">Friendly</div>
                                        <div className="text-xs text-gray-400">Primary Tone</div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Card 2: Match Score */}
                            <motion.div variants={itemVars} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                                <div>
                                    <div className="text-xs font-bold text-gray-400 uppercase mb-2">Audience Resonance</div>
                                    <div className="text-4xl font-bold text-gray-900 mb-1">98<span className="text-xl text-gray-400">%</span></div>
                                    <div className="text-xs text-green-600 font-bold flex items-center gap-1">
                                        <TrendingUp size={12} /> +4.2% vs last month
                                    </div>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-2 mt-4 overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "98%" }}
                                        transition={{ duration: 1.5, ease: "circOut" }}
                                        className="h-full bg-gradient-to-r from-purple-600 to-indigo-500"
                                    />
                                </div>
                            </motion.div>
                        </div>

                        {/* Bottom Keywords Row */}
                        <motion.div variants={itemVars} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                            <div className="text-xs font-bold text-gray-400 uppercase mb-3 px-1">Detected Attributes</div>
                            <div className="flex gap-2flex flex-wrap gap-2">
                                {['Innovative', 'Trustworthy', 'Human-Centric', 'Modern', 'Eco-Friendly'].map((tag, i) => (
                                    <motion.span
                                        key={tag}
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.2 + (i * 0.05) }}
                                        className="px-3 py-1.5 bg-gray-50 text-gray-600 font-medium rounded-lg text-xs border border-gray-200 hover:bg-purple-50 hover:text-purple-700 hover:border-purple-200 transition-colors cursor-default"
                                    >
                                        {tag}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                );

            case 'content-studio':
                return (
                    <motion.div variants={containerVars} initial="hidden" animate="visible" className="h-full flex flex-col gap-5 max-w-2xl mx-auto">
                        {/* Toolbar */}
                        <motion.div variants={itemVars} className="flex justify-between items-center bg-white p-2 rounded-xl border border-gray-200 shadow-sm">
                            <div className="flex gap-1">
                                {['B', 'I', 'U'].map((t, i) => (
                                    <div key={i} className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-50 text-gray-500 font-serif font-bold cursor-pointer text-sm border border-transparent hover:border-gray-200">{t}</div>
                                ))}
                                <div className="w-px h-6 bg-gray-200 mx-1 my-auto" />
                                <div className="flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs font-bold cursor-pointer">
                                    <Sparkles size={12} /> Rewrite
                                </div>
                            </div>
                            <div className="flex items-center gap-2 pr-2">
                                <span className="text-[10px] text-gray-400 font-mono">142 words</span>
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                            </div>
                        </motion.div>

                        {/* Editor Window */}
                        <motion.div variants={itemVars} className="bg-white rounded-2xl border border-blue-100 shadow-sm overflow-hidden flex-1 flex flex-col relative">
                            <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
                            <div className="p-8 font-serif text-lg text-gray-800 leading-relaxed max-w-prose">
                                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                                    "Your marketing shouldn't feel like a chore. With
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0, backgroundColor: "transparent" }}
                                    animate={{ opacity: 1, backgroundColor: "#dbeafe" }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                    className="px-1 rounded mx-1 text-blue-800 font-semibold cursor-pointer border-b-2 border-blue-200"
                                >
                                    Amplify AI
                                </motion.span>
                                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 2 }}>
                                    , you can generate weeks of on-brand content in minutes. Stop guessing about hashtags and start focusing on growth."
                                </motion.span>
                                <motion.span
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ duration: 0.8, repeat: Infinity }}
                                    className="inline-block w-0.5 h-5 bg-blue-600 align-middle ml-0.5"
                                />
                            </div>

                            {/* AI Suggestion Bubble */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 2.5 }}
                                className="absolute bottom-6 right-6 max-w-xs bg-gray-900 text-white p-3 rounded-xl rounded-br-none shadow-lg text-xs"
                            >
                                <div className="flex gap-2 items-start">
                                    <Sparkles size={12} className="text-yellow-400 shrink-0 mt-0.5" />
                                    <p>Suggestion: Improve engagement by adding a question here.</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Platform Selector */}
                        <motion.div variants={itemVars} className="flex gap-4 items-center justify-center">
                            <div className="text-xs font-bold text-gray-400 uppercase">Preview:</div>
                            <div className="flex gap-2">
                                {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                                    <div key={i} className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all cursor-pointer ${i === 1 ? 'bg-blue-600 border-blue-600 text-white shadow-md scale-110' : 'bg-white border-gray-200 text-gray-400 hover:border-gray-300'}`}>
                                        <Icon size={14} />
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                );

            case 'scheduler':
                return (
                    <motion.div variants={containerVars} initial="hidden" animate="visible" className="h-full flex flex-col gap-5 max-w-2xl mx-auto">
                        <motion.div variants={itemVars} className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-gray-900">Calendar</h2>
                            <div className="flex bg-gray-100 p-1 rounded-lg">
                                <button className="px-3 py-1 bg-white shadow-sm rounded-md text-xs font-bold text-gray-800">Month</button>
                                <button className="px-3 py-1 text-xs font-bold text-gray-500 hover:text-gray-700">Week</button>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVars} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 flex-1 relative">
                            {/* Calendar Grid Simulator */}
                            <div className="grid grid-cols-7 gap-3 mb-2 text-center border-b border-gray-100 pb-2">
                                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => (
                                    <div key={d} className="text-[10px] font-bold text-gray-400 uppercase">{d}</div>
                                ))}
                            </div>
                            <div className="grid grid-cols-7 grid-rows-4 gap-2 h-full min-h-[250px]">
                                {Array.from({ length: 28 }).map((_, i) => (
                                    <div key={i} className="relative group border border-transparent hover:border-gray-100 rounded-lg transition-colors p-1">
                                        <span className="text-[9px] text-gray-300">{i + 1}</span>
                                        {[2, 5, 9, 12, 16, 20, 24].includes(i) && (
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ delay: i * 0.03 }}
                                                className={`mt-1 p-1.5 rounded-md text-[8px] font-bold shadow-sm cursor-pointer hover:scale-105 transition-transform truncate ${[2, 9, 16].includes(i) ? 'bg-pink-100 text-pink-700 border border-pink-200' :
                                                        [5, 12].includes(i) ? 'bg-blue-100 text-blue-700 border border-blue-200' :
                                                            'bg-purple-100 text-purple-700 border border-purple-200'
                                                    }`}
                                            >
                                                {i % 2 === 0 ? "Product Launch" : "Blog Post"}
                                            </motion.div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Drag n Drop Floating Card */}
                            <motion.div
                                className="absolute bottom-10 right-10 bg-white p-3 rounded-lg shadow-xl border border-gray-200 w-40 cursor-grab active:cursor-grabbing z-10"
                                drag
                                dragConstraints={{ left: -200, right: 0, top: -200, bottom: 0 }}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="w-2 h-2 rounded-full bg-orange-400" />
                                    <span className="text-[10px] font-bold text-gray-500 uppercase">Draft</span>
                                </div>
                                <div className="text-xs font-bold text-gray-900">Q4 Promo Video</div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                );

            // Default Fallback
            default:
                return (
                    <motion.div variants={containerVars} initial="hidden" animate="visible" className="h-full flex flex-col justify-center items-center text-center gap-6">
                        <motion.div
                            variants={itemVars}
                            className={`w-20 h-20 rounded-3xl ${item.bg} flex items-center justify-center transform rotate-6 border-4 border-white shadow-xl`}
                        >
                            <item.icon size={40} className={item.color} />
                        </motion.div>
                        <div className="space-y-2 max-w-sm">
                            <motion.h2 variants={itemVars} className="text-3xl font-bold text-gray-900">{item.label}</motion.h2>
                            <motion.p variants={itemVars} className="text-gray-500">
                                This AI module is currently active and processing data for your campaign optimization.
                            </motion.p>
                        </div>
                        <motion.div variants={itemVars} className="flex gap-3">
                            <div className="h-2 w-2 rounded-full bg-gray-300 animate-bounce" />
                            <div className="h-2 w-2 rounded-full bg-gray-300 animate-bounce delay-75" />
                            <div className="h-2 w-2 rounded-full bg-gray-300 animate-bounce delay-150" />
                        </motion.div>
                    </motion.div>
                );
        }
    };

    return <div className="h-full">{renderFeatureContent()}</div>;
};
