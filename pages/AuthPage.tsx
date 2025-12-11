import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, Sparkles, Wand2, ArrowRight, Layout, Zap, Users, MessageSquare } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

// --- Types & Data ---

const FEATURES = [
    {
        id: 'content-engine',
        title: "An always-on content engine powered by AI",
        description: "Generate months of social content, blog posts, and ad copy in minutes. Your brand never sleeps.",
        icon: Zap
    },
    {
        id: 'velocity',
        title: "Supercharge campaign velocity and impact",
        description: "Launch campaigns 10x faster. Go from idea to published assets across all channels instantly.",
        icon: ArrowRight
    },
    {
        id: 'brand-memory',
        title: "Create a brand to remember",
        description: "Our AI learns your unique voice, tone, and style guidelines to ensure perfect consistency.",
        icon: Sparkles
    },
    {
        id: 'empower',
        title: "Empower every marketer with AI",
        description: "Give your team the superpowers they need to focus on strategy while AI handles the production.",
        icon: Users
    }
];

const BRAND_VOICES = [
    { id: 'professional', label: 'Professional & Authoritative', color: 'bg-blue-500' },
    { id: 'playful', label: 'Playful & Witty', color: 'bg-pink-500' },
    { id: 'empathetic', label: 'Empathetic & Warm', color: 'bg-green-500' }
];

export const AuthPage: React.FC = () => {
    const [activeFeature, setActiveFeature] = useState(FEATURES[0].id);
    const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signup');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleAuth = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock auth - navigate to onboarding
        if (authMode === 'signup') {
            navigate('/onboarding');
        } else {
            // Sign in logic would go here
            console.log('Sign in', { email, password });
        }
    };

    return (
        <div className="min-h-screen bg-[#F9FAFB] font-sans text-[#020617] flex flex-col">
            {/* Sticky Top Nav */}
            <nav className="sticky top-0 z-50 bg-[#F9FAFB]/80 backdrop-blur-md border-b border-slate-200/60">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#8B5CF6] to-[#FF6B5B] flex items-center justify-center text-white">
                            <Sparkles size={16} fill="currentColor" />
                        </div>
                        <span className="font-display font-bold text-xl tracking-tight">Amplify.ai</span>
                    </div>
                    <div className="flex items-center gap-6 text-sm font-medium text-slate-600">
                        <a href="#" className="hover:text-[#8B5CF6] transition-colors">Pricing</a>
                        <a href="#" className="hover:text-[#8B5CF6] transition-colors">Docs</a>
                        <button
                            onClick={() => setAuthMode('signin')}
                            className="text-[#020617] hover:text-[#8B5CF6] transition-colors"
                        >
                            Sign in
                        </button>
                    </div>
                </div>
            </nav>

            {/* Main Content - 2 Columns */}
            <div className="flex-1 flex flex-col lg:flex-row max-w-7xl mx-auto w-full">

                {/* Left Column: Content & Auth */}
                <div className="flex-1 p-6 lg:p-12 lg:pr-16 flex flex-col justify-center">
                    <div className="max-w-xl mx-auto lg:mx-0 w-full">

                        <h1 className="font-display font-bold text-4xl md:text-5xl leading-[1.1] mb-4 text-[#020617]">
                            Why modern marketing teams choose Amplify
                        </h1>
                        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                            Give your team the freedom to create on-brand campaigns faster,
                            scale content production, and drive real impact with AI that knows your brand.
                        </p>

                        {/* Auth Area (Compact) */}
                        <div className="mb-12 bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                            <div className="flex gap-6 border-b border-slate-100 mb-6">
                                <button
                                    onClick={() => setAuthMode('signin')}
                                    className={`pb-2 text-sm font-semibold transition-colors relative ${authMode === 'signin' ? 'text-[#8B5CF6]' : 'text-slate-500 hover:text-slate-800'}`}
                                >
                                    Sign in
                                    {authMode === 'signin' && <motion.div layoutId="auth-tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8B5CF6]" />}
                                </button>
                                <button
                                    onClick={() => setAuthMode('signup')}
                                    className={`pb-2 text-sm font-semibold transition-colors relative ${authMode === 'signup' ? 'text-[#8B5CF6]' : 'text-slate-500 hover:text-slate-800'}`}
                                >
                                    Create account
                                    {authMode === 'signup' && <motion.div layoutId="auth-tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8B5CF6]" />}
                                </button>
                            </div>

                            <form onSubmit={handleAuth} className="space-y-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Work Email</label>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 outline-none transition-all bg-slate-50 focus:bg-white"
                                        placeholder="name@company.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Password</label>
                                    <input
                                        type="password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 outline-none transition-all bg-slate-50 focus:bg-white"
                                        placeholder="••••••••"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-3 rounded-lg bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-bold shadow-lg shadow-[#8B5CF6]/25 transition-all hover:-translate-y-0.5"
                                >
                                    {authMode === 'signin' ? 'Sign in to Amplify' : 'Create your account'}
                                </button>
                            </form>

                            <div className="mt-4 text-center">
                                <p className="text-xs text-slate-500">
                                    {authMode === 'signup' ? 'First time here? You’ll create your workspace after sign up.' : 'Welcome back!'}
                                </p>
                            </div>
                        </div>

                        {/* Feature Accordion */}
                        <div className="space-y-4">
                            {FEATURES.map((feature) => (
                                <div
                                    key={feature.id}
                                    className="group"
                                    onMouseEnter={() => setActiveFeature(feature.id)}
                                >
                                    <div className={`flex items-center justify-between py-3 cursor-pointer transition-all ${activeFeature === feature.id ? 'text-[#8B5CF6]' : 'text-slate-800 hover:text-[#8B5CF6]'}`}>
                                        <h3 className="font-display font-bold text-lg">{feature.title}</h3>
                                        {activeFeature === feature.id && <ChevronRight size={18} />}
                                    </div>

                                    <AnimatePresence>
                                        {activeFeature === feature.id && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="bg-[#FFE4F0] rounded-xl p-5 mb-4 border border-[#FF6B5B]/10">
                                                    <p className="text-slate-800 mb-3 leading-relaxed">
                                                        {feature.description}
                                                    </p>
                                                    <a href="#" className="inline-flex items-center gap-1 text-sm font-bold text-[#FF6B5B] hover:gap-2 transition-all">
                                                        Learn more <ArrowRight size={14} />
                                                    </a>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Divider */}
                                    <div className={`h-px w-full transition-colors ${activeFeature === feature.id ? 'bg-[#8B5CF6]/30' : 'bg-slate-200 group-hover:bg-[#8B5CF6]/20'}`} />
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                {/* Right Column: Brand Voice UI Illustration */}
                <div className="hidden lg:flex flex-1 bg-[#FDF2F8] relative overflow-hidden items-center justify-center p-12">
                    {/* Subtle Grid Background */}
                    <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#E2E8F0 1px, transparent 1px), linear-gradient(90deg, #E2E8F0 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.4 }} />

                    {/* Floating Elements */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative z-10 w-full max-w-md"
                    >
                        {/* Main UI Card */}
                        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200/60 overflow-hidden">
                            {/* Card Header */}
                            <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                </div>
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Brand Voice Engine</div>
                            </div>

                            {/* Card Body */}
                            <div className="p-8">
                                <div className="mb-6">
                                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Select Voice Tone</label>
                                    <div className="relative">
                                        <div className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 flex items-center justify-between shadow-sm cursor-pointer hover:border-[#8B5CF6] transition-colors">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
                                                <span className="font-medium text-slate-900">Professional & Authoritative</span>
                                            </div>
                                            <ChevronRight size={16} className="rotate-90 text-slate-400" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <label className="block text-xs font-bold text-slate-500 uppercase">Generated Output</label>
                                        <div className="flex items-center gap-1 text-[#8B5CF6] text-xs font-bold">
                                            <Sparkles size={12} />
                                            <span>AI Optimized</span>
                                        </div>
                                    </div>

                                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 text-slate-600 leading-relaxed text-sm">
                                        <p>
                                            <span className="bg-[#8B5CF6]/10 text-[#8B5CF6] px-1 rounded">Amplify.ai</span> empowers marketing teams to break free from production bottlenecks. By leveraging our <span className="font-semibold text-slate-900">adaptive AI engine</span>, you can maintain a consistent brand voice across every channel while scaling output by 10x.
                                        </p>
                                    </div>

                                    <div className="flex gap-2">
                                        <div className="h-2 w-1/3 bg-slate-100 rounded-full" />
                                        <div className="h-2 w-1/4 bg-slate-100 rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Side Card */}
                        <motion.div
                            animate={{ y: [10, -5, 10], x: [0, 5, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -right-12 top-20 bg-white rounded-xl shadow-xl border border-slate-100 p-4 w-48 hidden md:block"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-8 h-8 rounded-full bg-[#FF6B5B]/10 flex items-center justify-center text-[#FF6B5B]">
                                    <Wand2 size={16} />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-slate-900">Style Match</div>
                                    <div className="text-[10px] text-slate-500">98% Accuracy</div>
                                </div>
                            </div>
                            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-[#FF6B5B] w-[98%]" />
                            </div>
                        </motion.div>

                    </motion.div>
                </div>

            </div>
        </div>
    );
};
