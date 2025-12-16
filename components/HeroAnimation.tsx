import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Calendar as CalendarIcon, TrendingUp, Zap, MessageCircle, Target, Sparkles,
    BarChart3, Instagram, Linkedin, Twitter, Youtube, Hash,
    PenTool, Clock, ArrowUpRight, MousePointer2, CheckCircle2,
    Users, Activity, Globe, ShieldCheck, Bell, Play, Heart, Share2,
    Search, Mic, Video, Command, Layers, PieChart, MoreHorizontal,
    FileText, UserPlus, Mail, AlertCircle, Settings, ChevronDown, Filter, Download,
    Plus, Zap as ZapIcon, Loader2, BarChart, Facebook, Music2, Image as ImageIcon,
    MessageSquare, Fingerprint, Palette, Megaphone, UploadCloud, Smartphone, LayoutGrid
} from 'lucide-react';

// --- Configuration ---

const MENU_ITEMS = [
    { id: 'brand-dna', label: 'Brand DNA', icon: Fingerprint, color: 'text-rose-600', bg: 'bg-rose-50' },
    { id: 'ai-calendar', label: 'AI Calendar', icon: CalendarIcon, color: 'text-orange-600', bg: 'bg-orange-50' },
    { id: 'content-studio', label: 'Content Studio', icon: PenTool, color: 'text-purple-600', bg: 'bg-purple-50' },
    { id: 'campaigns', label: 'Campaigns', icon: Megaphone, color: 'text-blue-600', bg: 'bg-blue-50' },
    { id: 'connect', label: 'Connect', icon: ZapIcon, color: 'text-amber-600', bg: 'bg-amber-50' },
    { id: 'image-gen', label: 'Image Gen', icon: ImageIcon, color: 'text-pink-600', bg: 'bg-pink-50' },
    { id: 'audience', label: 'Audience', icon: Users, color: 'text-cyan-600', bg: 'bg-cyan-50' },
];

const SOCIAL_IMAGES = [
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1614850523060-8da1d56ae167?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=400&auto=format&fit=crop"
];

// --- Components ---

const CollabCursor: React.FC<{ x: number, y: number, color: string, name: string, avatar: string, delay?: number }> = ({ x, y, color, name, avatar, delay = 0 }) => (
    <motion.div
        className="absolute z-[100] pointer-events-none top-0 left-0"
        initial={{ x, y, opacity: 0 }}
        animate={{
            x: [x, x + 120, x - 60, x + 80, x],
            y: [y, y + 80, y + 40, y - 50, y],
            opacity: 1
        }}
        transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay
        }}
    >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="drop-shadow-lg transform -rotate-12 translate-y-1 translate-x-1">
            <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" fill={color} />
        </svg>
        <div className="absolute top-8 left-6 flex items-center gap-2 bg-white pl-1.5 pr-3 py-1.5 rounded-full shadow-xl border border-gray-100 whitespace-nowrap">
            <img src={avatar} className="w-6 h-6 rounded-full border border-gray-200" alt={name} />
            <span className="text-xs font-bold text-gray-800">{name}</span>
        </div>
    </motion.div>
);

const FloatingWidget: React.FC<{ children: React.ReactNode, className?: string, delay?: number, x?: number[], y?: number[], zIndex?: number }> = ({ children, className, delay = 0, x = [0, 0, 0], y = [-10, 10, -10], zIndex = 20 }) => (
    <motion.div
        className={`absolute hidden xl:block ${className}`}
        style={{ zIndex }}
        animate={{ y, x }}
        transition={{ duration: 6 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    >
        {children}
    </motion.div>
);

// --- VIEW COMPONENTS ---

const BrandDNAView = () => (
    <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} className="h-full flex gap-6">
        <div className="flex-1 bg-white rounded-[32px] border border-gray-100 shadow-sm p-8 relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-white" />
            <div className="relative z-10 flex flex-col items-center">
                {/* Radial Chart Decoration */}
                <div className="relative w-48 h-48 mb-6">
                    <svg viewBox="0 0 100 100" className="w-full h-full rotate-[-90deg]">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#fecdd3" strokeWidth="10" />
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#e11d48" strokeWidth="10" strokeDasharray="200 280" strokeLinecap="round" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                        <Fingerprint size={32} className="text-rose-500 mb-1" />
                        <span className="text-2xl font-bold text-gray-900">85%</span>
                        <span className="text-[10px] text-gray-500 uppercase">Brand Match</span>
                    </div>
                </div>
                <h2 className="text-xl font-bold text-gray-900">Voice Profile: Friendly</h2>
                <p className="text-xs text-center text-gray-500 mt-2 max-w-[200px]">Your brand resonates as approachable, modern, and tech-forward.</p>
            </div>
        </div>
        <div className="w-80 flex flex-col gap-4">
            <div className="bg-white p-5 rounded-[24px] border border-gray-100 shadow-sm flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600"><Palette size={18} /></div>
                <div><div className="text-sm font-bold text-gray-900">Primary Palette</div><div className="flex gap-1 mt-1"><div className="w-4 h-4 rounded-full bg-[#6366f1]" /><div className="w-4 h-4 rounded-full bg-[#ec4899]" /><div className="w-4 h-4 rounded-full bg-[#10b981]" /></div></div>
            </div>
            <div className="bg-white p-5 rounded-[24px] border border-gray-100 shadow-sm flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600"><FileText size={18} /></div>
                <div><div className="text-sm font-bold text-gray-900">Key Messaging</div><div className="text-xs text-gray-500">"Empower everyone"</div></div>
            </div>
            <div className="bg-gradient-to-r from-rose-500 to-pink-600 p-5 rounded-[24px] text-white shadow-lg shadow-rose-200 mt-auto">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold opacity-80 uppercase">Insight</span>
                    <Sparkles size={14} />
                </div>
                <div className="text-sm font-medium leading-tight">"Try adding more emojis to match your Instagram persona."</div>
            </div>
        </div>
    </motion.div>
);

const CalendarView = () => (
    <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} className="h-full flex gap-6">
        <div className="flex-1 bg-white rounded-[32px] border border-gray-100 shadow-sm p-6 overflow-hidden flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-4">
                    <h3 className="text-xl font-bold text-gray-900">October 2024</h3>
                    <div className="flex gap-1">
                        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 text-gray-600"><ChevronDown className="rotate-90" size={16} /></div>
                        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 text-gray-600"><ChevronDown className="-rotate-90" size={16} /></div>
                    </div>
                </div>
                <button className="px-4 py-2 bg-orange-600 text-white text-xs font-bold rounded-lg shadow-md shadow-orange-100">+ Add Event</button>
            </div>
            <div className="grid grid-cols-7 gap-1 flex-1">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => <div key={d} className="text-center text-xs font-bold text-gray-400 py-2 border-b border-gray-50">{d}</div>)}
                {Array.from({ length: 35 }).map((_, i) => (
                    <div key={i} className="border-b border-gray-50 border-r relative p-1 h-full min-h-[60px] hover:bg-gray-50 transition-colors group">
                        <span className="text-[10px] font-bold text-gray-300 group-hover:text-gray-500">{i + 1}</span>
                        {[2, 15, 22].includes(i) && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="mt-4 mx-1 p-1 bg-purple-100 text-purple-700 rounded text-[9px] font-bold truncate border border-purple-200 shadow-sm">🚀 Product Launch</motion.div>}
                        {[5, 12, 19].includes(i) && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="mt-4 mx-1 p-1 bg-blue-100 text-blue-700 rounded text-[9px] font-bold truncate border border-blue-200 shadow-sm">🎥 Webinar</motion.div>}
                    </div>
                ))}
            </div>
        </div>
        <div className="w-80 bg-white rounded-[32px] border border-gray-100 shadow-sm p-6 flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Upcoming AI Tasks</div>
                <div className="p-1 bg-gray-100 rounded text-gray-500"><Filter size={12} /></div>
            </div>
            {[
                { title: 'Auto-Post Content', time: '10:00 AM', user: 'Alex', color: 'bg-green-500' },
                { title: 'Generate Reports', time: '2:00 PM', user: 'Sophie', color: 'bg-orange-500' },
                { title: 'Sync Contacts', time: '4:30 PM', user: 'System', color: 'bg-gray-400' }
            ].map((task, i) => (
                <div key={i} className="flex gap-3 items-start p-3 bg-gray-50 rounded-xl border border-gray-100 hover:border-gray-300 transition-colors cursor-pointer group">
                    <div className={`w-2 h-2 rounded-full mt-1.5 ${task.color}`} />
                    <div className="flex-1">
                        <div className="text-sm font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{task.title}</div>
                        <div className="text-xs text-gray-500 mt-0.5">Scheduled for {task.time}</div>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-600">{task.user[0]}</div>
                </div>
            ))}
            <div className="mt-auto p-4 bg-orange-50 rounded-2xl border border-orange-100 text-center">
                <Sparkles className="mx-auto text-orange-500 mb-2" size={20} />
                <div className="text-xs font-bold text-orange-900">AI Scheduler Optimizing...</div>
            </div>
        </div>
    </motion.div>
);

const ContentStudioView = () => (
    <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} className="h-full flex gap-6">
        <div className="w-20 bg-gray-50 rounded-2xl border border-gray-200 flex flex-col items-center py-4 gap-4">
            <div className="p-2 bg-white shadow-sm rounded-lg"><PenTool size={20} className="text-purple-600" /></div>
            <div className="p-2 text-gray-400 hover:bg-white hover:text-gray-600 rounded-lg cursor-pointer"><ImageIcon size={20} /></div>
            <div className="p-2 text-gray-400 hover:bg-white hover:text-gray-600 rounded-lg cursor-pointer"><Mic size={20} /></div>
        </div>
        <div className="flex-1 bg-white rounded-[24px] border border-gray-100 shadow-sm p-8 relative">
            <div className="absolute top-8 right-8 flex gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-100 text-purple-700 rounded-full text-xs font-bold">
                    <Sparkles size={12} /> AI Improving
                </div>
            </div>
            <h1 className="text-3xl font-serif font-bold text-gray-900 mb-6">The Future of AI Marketing</h1>
            <div className="space-y-4 max-w-2xl">
                <div className="h-4 bg-gray-100 rounded w-full" />
                <div className="h-4 bg-gray-100 rounded w-[92%]" />
                <div className="h-4 bg-gray-100 rounded w-[96%]" />
                <div className="h-4 bg-gray-100 rounded w-[85%]" />
            </div>
            <div className="mt-8 p-4 bg-purple-50 rounded-xl border border-purple-100 flex gap-4 items-center">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center text-purple-300">
                    <ImageIcon size={24} />
                </div>
                <div className="flex-1 space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-[60%]" />
                    <div className="h-3 bg-gray-200 rounded w-[40%]" />
                </div>
            </div>
        </div>
        <div className="w-64 bg-white rounded-[24px] border border-gray-100 shadow-sm p-6 flex flex-col gap-4">
            <div className="text-xs font-bold text-gray-400 uppercase">SEO Score</div>
            <div className="flex items-end gap-2">
                <span className="text-4xl font-bold text-green-500">92</span>
                <span className="text-sm font-bold text-gray-400 mb-1">/ 100</span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="w-[92%] h-full bg-green-500 rounded-full" />
            </div>
            <hr className="border-gray-100" />
            <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-600"><CheckCircle2 size={14} className="text-green-500" /> Keyphrase in title</div>
                <div className="flex items-center gap-2 text-xs font-bold text-gray-600"><CheckCircle2 size={14} className="text-green-500" /> Image alt attributes</div>
                <div className="flex items-center gap-2 text-xs font-bold text-gray-600"><CheckCircle2 size={14} className="text-green-500" /> Sentiment analysis</div>
            </div>
        </div>
    </motion.div>
);

const ConnectView = () => (
    <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} className="h-full flex flex-col pt-4">
        <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Integrations</h2>
            <p className="text-sm text-gray-500">Manage your connected social platforms</p>
        </div>
        <div className="grid grid-cols-3 gap-6 px-12">
            {[
                { name: 'YouTube', icon: <Youtube size={40} className="text-red-600" />, connected: true },
                { name: 'LinkedIn', icon: <Linkedin size={40} className="text-blue-700" />, connected: true },
                { name: 'X / Twitter', icon: <Twitter size={40} className="text-black" />, connected: true },
                { name: 'TikTok', icon: <Music2 size={40} className="text-pink-500" />, connected: false },
                { name: 'Facebook', icon: <Facebook size={40} className="text-blue-600" />, connected: false },
                { name: 'Instagram', icon: <Instagram size={40} className="text-pink-600" />, connected: true },
            ].map((app, i) => (
                <div key={i} className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm flex flex-col items-center justify-center gap-4 hover:shadow-md hover:border-indigo-100 transition-all group cursor-pointer relative overflow-hidden">
                    {app.connected && <div className="absolute top-4 right-4 text-green-500"><CheckCircle2 size={16} /></div>}
                    <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm group-hover:bg-white">
                        {app.icon}
                    </div>
                    <div className="text-center">
                        <div className="font-bold text-gray-900 text-lg">{app.name}</div>
                        <div className={`mt-2 text-[10px] px-3 py-1 rounded-full font-bold inline-block uppercase tracking-wider ${app.connected ? 'bg-green-50 text-green-600 border border-green-100' : 'bg-gray-100 text-gray-500 border border-gray-200'}`}>
                            {app.connected ? 'Active' : 'Connect'}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </motion.div>
);

const CampaignPlannerView = () => (
    <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} className="h-full gap-6 flex">
        <div className="flex-1 bg-white rounded-[32px] border border-gray-100 shadow-sm p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2"><LayoutGrid size={18} /> Campaign Timeline</h3>
            <div className="space-y-6 relative">
                <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-gray-100" />
                {[
                    { title: 'Strategy Definition', date: 'Oct 1 - Oct 5', status: 'Completed', color: 'bg-green-500' },
                    { title: 'Content Creation', date: 'Oct 6 - Oct 15', status: 'In Progress', color: 'bg-blue-500' },
                    { title: 'Review & Approval', date: 'Oct 16 - Oct 18', status: 'Pending', color: 'bg-yellow-400' },
                    { title: 'Distribution', date: 'Oct 20', status: 'Locked', color: 'bg-gray-300' }
                ].map((step, i) => (
                    <div key={i} className="flex gap-4 relative">
                        <div className={`w-8 h-8 rounded-full border-4 border-white shadow-sm flex-shrink-0 z-10 ${step.color}`} />
                        <div className="bg-gray-50 rounded-xl p-4 flex-1 border border-gray-100">
                            <div className="flex justify-between items-start">
                                <span className="font-bold text-gray-900 text-sm">{step.title}</span>
                                <span className="text-[10px] bg-white px-2 py-0.5 rounded text-gray-500 shadow-sm">{step.status}</span>
                            </div>
                            <div className="text-xs text-gray-400 mt-1">{step.date}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="w-72 bg-gradient-to-b from-blue-600 to-indigo-700 rounded-[32px] shadow-lg text-white p-8 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl -mr-10 -mt-10" />
            <Sparkles size={32} className="mb-4 text-blue-200" />
            <h3 className="text-2xl font-bold mb-2">AI Ideas</h3>
            <p className="text-blue-100 text-sm mb-6">Generating campaign angles based on trending topics...</p>
            <div className="space-y-3">
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl text-xs font-medium border border-white/10">"Sustainable Tech" Angle</div>
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl text-xs font-medium border border-white/10">"Future of Work" Angle</div>
            </div>
            <button className="mt-auto w-full py-3 bg-white text-blue-600 rounded-xl font-bold text-sm shadow-lg">Generate More</button>
        </div>
    </motion.div>
);

const ImageGeneratorView = () => (
    <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} className="h-full bg-white rounded-[32px] border border-gray-100 shadow-sm p-6 flex flex-col gap-5">
        <div className="flex gap-3">
            <div className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 flex items-center gap-2">
                <Sparkles size={16} className="text-pink-500" />
                <span className="text-sm font-medium text-gray-500">Generate a high-fashion campaign for summer 2025...</span>
            </div>
            <button className="px-6 py-2 bg-pink-600 text-white rounded-xl text-sm font-bold shadow-md shadow-pink-200 hover:bg-pink-700 transition-colors">Generate</button>
        </div>

        {/* 5x2 Grid Layout with Guaranteed Valid Images */}
        <div className="grid grid-cols-5 grid-rows-2 gap-3 flex-1 min-h-0">
            {[
                { url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&auto=format&fit=crop", label: "Nike Air Max", brand: "Nike" },
                { url: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=400&auto=format&fit=crop", label: "iPhone 15 Pro", brand: "Apple" },
                { url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop", label: "Financial Flow", brand: "Stripe" },
                { url: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=400&auto=format&fit=crop", label: "Chanel No. 5", brand: "Chanel" },
                { url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=400&auto=format&fit=crop", label: "Workspace Setup", brand: "Notion" },
                { url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop", label: "WH-1000XM5", brand: "Sony" },
                { url: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=400&auto=format&fit=crop", label: "Model S", brand: "Tesla" },
                { url: "https://images.unsplash.com/photo-1554866585-cd22519ebf38?q=80&w=400&auto=format&fit=crop", label: "Refreshing Taste", brand: "Coca-Cola" },
                { url: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=400&auto=format&fit=crop", label: "Submariner", brand: "Rolex" },
                { url: "https://images.unsplash.com/photo-1518002171953-a080ee322801?q=80&w=400&auto=format&fit=crop", label: "Urban Runner", brand: "Adidas" }
            ].map((img, i) => (
                <div key={i} className="relative rounded-xl overflow-hidden group border border-gray-200 cursor-pointer shadow-sm">
                    <div className="absolute inset-0 bg-gray-100 animate-pulse -z-10" />
                    <img src={img.url} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                        <span className="text-white text-[11px] font-bold leading-tight">{img.label}</span>
                        <span className="text-white/70 text-[9px] uppercase tracking-wider font-semibold mb-2">{img.brand}</span>
                        <div className="flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity delay-100 transform translate-y-2 group-hover:translate-y-0 duration-300">
                            <button className="flex-1 py-1.5 bg-white text-gray-900 text-[10px] font-bold rounded hover:bg-pink-50 transition-colors shadow-sm">Edit</button>
                            <button className="p-1.5 bg-white/20 backdrop-blur rounded text-white hover:bg-white hover:text-pink-600 transition-colors"><Download size={12} /></button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </motion.div>
);

const AudienceView = () => (
    <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} className="h-full bg-white rounded-[32px] border border-gray-100 shadow-sm p-8 flex gap-10 items-center justify-center">
        <div className="w-48 h-48 relative">
            {/* CSS Donut Chart */}
            <svg viewBox="0 0 36 36" className="w-full h-full rotate-[-90deg]">
                <path className="text-gray-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                <path className="text-cyan-500" strokeDasharray="45, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                <path className="text-blue-500" strokeDasharray="30, 100" strokeDashoffset="-45" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                <path className="text-indigo-500" strokeDasharray="25, 100" strokeDashoffset="-75" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-3xl font-bold text-gray-900">42k</span>
                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Total Reach</span>
            </div>
        </div>
        <div className="flex-1 space-y-6 max-w-sm">
            <h3 className="font-bold text-gray-900 text-lg">Audience Segments</h3>
            {[
                { label: 'Technology Leaders', val: '45%', color: 'bg-cyan-500' },
                { label: 'Marketing Pros', val: '30%', color: 'bg-blue-500' },
                { label: 'Startup Founders', val: '25%', color: 'bg-indigo-500' },
            ].map((s, i) => (
                <div key={i}>
                    <div className="flex justify-between text-xs font-bold text-gray-600 mb-2">
                        <span>{s.label}</span>
                        <span>{s.val}</span>
                    </div>
                    <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                        <div className={`h-full ${s.color} rounded-full`} style={{ width: s.val }} />
                    </div>
                </div>
            ))}
            <div className="flex gap-4 mt-4">
                <div className="px-4 py-2 bg-gray-50 rounded-xl text-center flex-1 border border-gray-100">
                    <div className="text-lg font-bold text-gray-900">12%</div>
                    <div className="text-[10px] text-gray-500 uppercase">Growth</div>
                </div>
                <div className="px-4 py-2 bg-gray-50 rounded-xl text-center flex-1 border border-gray-100">
                    <div className="text-lg font-bold text-gray-900">8.5</div>
                    <div className="text-[10px] text-gray-500 uppercase">Engagement</div>
                </div>
            </div>
        </div>
    </motion.div>
);


// --- MAIN COMPONENT ---

export const HeroAnimation: React.FC = () => {
    const [activeMenu, setActiveMenu] = useState(0);
    const [currentSocialImage, setCurrentSocialImage] = useState(0);
    const [headerText, setHeaderText] = useState("Brand DNA");

    // Auto-cycle tabs
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveMenu((prev) => (prev + 1) % MENU_ITEMS.length);
        }, 6000); // Cycle every 6s
        return () => clearInterval(interval);
    }, []);

    // Sync header text
    useEffect(() => {
        setHeaderText(MENU_ITEMS[activeMenu].label);
    }, [activeMenu]);

    // Social Carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSocialImage((prev) => (prev + 1) % SOCIAL_IMAGES.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full max-w-[1250px] mx-auto perspective-1000 py-20 md:py-32">

            {/* FLOATING WIDGETS (Rich Ecosystem) */}

            {/* Top Right: Revenue */}
            <FloatingWidget className="top-8 -right-16" y={[-15, 15, -15]} zIndex={30}>
                <div className="bg-white/90 backdrop-blur-xl border border-white/60 p-5 rounded-[24px] shadow-[0_30px_60px_-10px_rgba(0,0,0,0.12)] w-60">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex gap-3 items-center">
                            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600"><TrendingUp size={20} /></div>
                            <div><div className="text-[10px] text-gray-500 font-bold uppercase">Revenue</div><div className="text-sm font-bold text-gray-900">$24.5k</div></div>
                        </div>
                        <span className="text-xs font-bold text-white bg-green-500 px-2 py-0.5 rounded-full">+18%</span>
                    </div>
                    <div className="h-16 flex items-end gap-1">{[40, 65, 45, 80, 60, 95, 75].map((h, i) => <motion.div key={i} animate={{ height: [`${h}%`, `${h + 10}%`, `${h}%`] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }} className="w-full bg-green-500 rounded-t-sm opacity-80" />)}</div>
                </div>
            </FloatingWidget>

            {/* Top Left: Integrations (RESTORED) */}
            <FloatingWidget className="top-12 -left-24" delay={0.5} y={[-10, 10, -10]} zIndex={20}>
                <div className="bg-white p-5 rounded-[24px] shadow-xl border border-gray-100 w-64">
                    <div className="flex justify-between items-center mb-4">
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Integrations</div>
                        <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                    </div>
                    <div className="flex justify-between px-2">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100/50"><Linkedin size={18} /></div>
                        <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-500 flex items-center justify-center border border-sky-100/50"><Twitter size={18} /></div>
                        <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center border border-pink-100/50"><Instagram size={18} /></div>
                        <div className="w-10 h-10 rounded-xl bg-gray-50 text-gray-500 flex items-center justify-center border border-gray-100/50"><Mail size={18} /></div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-50 text-center">
                        <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full inline-block">Sync Active</span>
                    </div>
                </div>
            </FloatingWidget>

            {/* Top Far Right: Competitor Alert */}
            <FloatingWidget className="top-48 -right-32" delay={1.5} y={[10, -10, 10]}>
                <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 w-48 flex flex-col gap-2">
                    <div className="flex items-center gap-2 mb-1"><div className="p-1.5 bg-indigo-50 rounded-lg text-indigo-600"><AlertCircle size={14} /></div><span className="text-[10px] font-bold text-gray-500 uppercase">Competitor Alert</span></div>
                    <div className="flex items-center justify-between text-xs font-bold"><span>Competitor A</span><span className="text-red-500 bg-red-50 px-2 py-0.5 rounded">Ad Active</span></div>
                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden"><div className="h-full w-[70%] bg-indigo-500 rounded-full" /></div>
                </div>
            </FloatingWidget>

            {/* Bottom Right: Viral Alert (Behind) */}
            <FloatingWidget className="bottom-52 -right-24" delay={2.5} x={[-5, 5, -5]} y={[0, 10, 0]} zIndex={10}>
                <div className="bg-gradient-to-br from-pink-500 to-rose-600 text-white p-5 rounded-[24px] shadow-xl border-2 border-white/20 flex flex-col items-center w-36 transform rotate-12 origin-bottom-left">
                    <div className="bg-white/20 p-2 rounded-full mb-2"><Hash size={20} className="text-white" /></div>
                    <div className="text-[10px] font-bold opacity-90 uppercase tracking-widest mb-0.5">Viral Alert</div>
                    <div className="text-2xl font-bold">#Growth</div>
                    <div className="mt-2 text-[10px] bg-white/20 px-2 py-0.5 rounded-full">+405% Trend</div>
                </div>
            </FloatingWidget>

            {/* Bottom Right: Social Card (Front) */}
            <FloatingWidget className="bottom-20 -right-8" delay={2} y={[15, -15, 15]} zIndex={30}>
                <div className="bg-white p-3 rounded-[24px] shadow-2xl w-56 border border-gray-100 relative">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600 p-[2px]"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Brand" className="rounded-full bg-white p-[1px]" /></div>
                        <div><div className="text-xs font-bold">Amplify.ai</div><div className="text-[8px] text-gray-400">Sponsored</div></div>
                    </div>
                    <div className="aspect-[4/3] bg-gray-100 rounded-xl relative overflow-hidden">
                        <AnimatePresence mode="popLayout">
                            <motion.img key={currentSocialImage} src={SOCIAL_IMAGES[currentSocialImage]} initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="absolute inset-0 w-full h-full object-cover" />
                        </AnimatePresence>
                        <div className="absolute inset-0 flex items-center justify-center"><div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur flex items-center justify-center border border-white/40"><Play size={14} fill="white" className="text-white ml-0.5" /></div></div>
                    </div>
                    <div className="mt-3 flex justify-between items-center px-1"><div className="flex gap-2"><Heart size={16} className="text-red-500 fill-red-500" /><span className="text-xs font-bold text-gray-700">42.5k Likes</span></div><Share2 size={16} className="text-gray-400" /></div>
                </div>
            </FloatingWidget>

            {/* Bottom Left: Generating Assets Pill */}
            <FloatingWidget className="-bottom-12 left-24" delay={0.2} y={[5, -5, 5]} zIndex={40}>
                <div className="bg-[#1A1A1A] text-white pl-3 pr-8 py-3 rounded-full shadow-2xl flex items-center gap-4 border border-gray-700/50">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center animate-pulse"><Sparkles size={18} className="text-white" /></div>
                    <div><div className="text-xs font-bold text-gray-200">Generating Assets...</div><div className="flex gap-1 mt-1"><span className="w-1.5 h-1.5 bg-green-500 rounded-full" /><span className="text-[9px] text-gray-400">AI Processing Active</span></div></div>
                </div>
            </FloatingWidget>

            {/* New: Middle Left - Upload Progress */}
            <FloatingWidget className="bottom-40 -left-12" delay={1.8} x={[-8, 8, -8]}>
                <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 w-44">
                    <div className="flex justify-between items-center mb-2">
                        <div className="flex gap-2 items-center"><div className="p-1 bg-blue-50 rounded text-blue-500"><UploadCloud size={14} /></div><span className="text-[10px] font-bold text-gray-600">Uploading</span></div>
                        <span className="text-[10px] font-bold text-blue-600">82%</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden"><div className="w-[82%] h-full bg-blue-500 rounded-full" /></div>
                    <div className="text-[9px] text-gray-400 mt-1.5 text-right">video_ad_final.mp4</div>
                </div>
            </FloatingWidget>

            {/* Top Left: Live Activity Bubble (New) */}
            <FloatingWidget className="top-8 -left-20" delay={0.8} y={[8, -8, 8]}>
                <div className="bg-white p-3 rounded-full shadow-xl border border-gray-100 flex items-center gap-3 pr-6">
                    <div className="relative">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie" className="w-10 h-10 rounded-full border border-gray-200" />
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                    </div>
                    <div><div className="text-xs font-bold text-gray-900">Sophie joined</div><div className="text-[10px] text-gray-500">Just now • Content Team</div></div>
                </div>
            </FloatingWidget>


            {/* DASHBOARD CONTAINER */}
            <div className="relative bg-[#F8F9FC] rounded-[48px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[6px] border-white overflow-hidden z-0 ring-1 ring-gray-100 aspect-[16/10] flex">
                <CollabCursor x={900} y={200} color="#ec4899" name="Alex" avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" delay={2} />
                <CollabCursor x={500} y={600} color="#10b981" name="Marcus" avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus" delay={1.5} />

                {/* SIDEBAR */}
                <div className="w-64 bg-white border-r border-gray-100 flex flex-col py-8 z-20">
                    <div className="px-6 mb-8 flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center shadow-indigo-200 shadow-lg"><Sparkles size={18} className="text-white" /></div>
                        <span className="font-bold text-xl tracking-tight text-gray-900">Amplify</span>
                    </div>
                    <div className="flex-1 px-4 space-y-1.5 overflow-y-auto custom-scrollbar">
                        <div className="px-3 mb-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Main Menu</div>
                        {MENU_ITEMS.map((item, idx) => {
                            const isActive = idx === activeMenu;
                            return (
                                <div key={item.id} className="relative group">
                                    <div className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-300 ${isActive ? 'bg-gray-900 text-white shadow-lg shadow-gray-200' : 'text-gray-500 hover:bg-gray-50 group-hover:text-gray-900'}`}>
                                        <item.icon size={18} className={isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-600'} />
                                        <span className="text-xs font-semibold">{item.label}</span>
                                        {isActive && <motion.div layoutId="activeDot" className="ml-auto w-1.5 h-1.5 rounded-full bg-white" />}
                                    </div>
                                    {isActive && <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1.5, opacity: 0 }} className="absolute inset-0 bg-gray-900/10 rounded-xl" />}
                                </div>
                            );
                        })}
                    </div>
                    <div className="px-6 border-t border-gray-100 pt-6">
                        <div className="bg-gray-50 p-2.5 rounded-xl flex items-center gap-3 border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" className="w-8 h-8 rounded-full bg-white shadow-sm" />
                            <div><div className="text-xs font-bold text-gray-900 leading-tight">Felix Brown</div><div className="text-[9px] text-gray-500 mt-0.5">Pro Workspace</div></div>
                        </div>
                    </div>
                </div>

                {/* CONTENT AREA */}
                <div className="flex-1 flex flex-col overflow-hidden relative bg-[#F8F9FC]">
                    <header className="h-20 border-b border-gray-100 bg-white/80 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-10">
                        <div>
                            <motion.h1 key={headerText} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="text-xl font-bold text-gray-900">{headerText}</motion.h1>
                            <p className="text-xs text-gray-400 mt-0.5">Real-time overview & analytics</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="relative cursor-pointer hover:bg-gray-100 p-2 rounded-full transition-colors"><Bell size={18} className="text-gray-500" /><div className="absolute top-1.5 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" /></div>
                            <div className="w-px h-6 bg-gray-200 mx-1" />
                            <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg text-xs font-semibold shadow-lg shadow-gray-200 hover:bg-black transition-colors"><Plus size={14} /> New Project</button>
                        </div>
                    </header>
                    <AnimatePresence mode="wait">
                        <div className="flex-1 overflow-visible p-8 z-0">
                            {activeMenu === 0 && <BrandDNAView key="brand" />}
                            {activeMenu === 1 && <CalendarView key="calendar" />}
                            {activeMenu === 2 && <ContentStudioView key="content" />}
                            {activeMenu === 3 && <CampaignPlannerView key="campaign" />}
                            {activeMenu === 4 && <ConnectView key="connect" />}
                            {activeMenu === 5 && <ImageGeneratorView key="image" />}
                            {activeMenu === 6 && <AudienceView key="audience" />}
                        </div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};
