
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  PenTool,
  BarChart3,
  Image as ImageIcon,
  Sparkles,
  ArrowRight,
  Search,
  Bell,
  ChevronDown,
  MoreHorizontal,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  Plus,
  CheckCircle2,
  TrendingUp,
  Users,
  MousePointer2
} from 'lucide-react';

type TabId = 'calendar' | 'copywriter' | 'analytics' | 'assets';

export const ProductShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('calendar');

  const tabs = [
    { id: 'calendar', label: 'Calendar', icon: Calendar },
    { id: 'copywriter', label: 'AI Copywriter', icon: PenTool },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'assets', label: 'Asset Library', icon: ImageIcon },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Ambient Background Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-dark mb-6 tracking-tight">
            Your Entire Marketing Workflow,<br />
            <span className="heading-gradient">Powered by AI.</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Plan campaigns, create content, analyze performance, and optimize ROI — all inside one <span className="subhead-highlight">intelligent workspace</span>.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-gray-100/80 backdrop-blur-sm rounded-2xl border border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabId)}
                className={`relative px-4 py-2.5 rounded-xl flex items-center gap-2 text-sm font-bold transition-all duration-300 ${activeTab === tab.id
                    ? 'text-white bg-gradient-premium shadow-md'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'
                  }`}
              >
                <tab.icon size={16} className={activeTab === tab.id ? 'text-white' : 'text-gray-400'} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="relative group perspective-1000">
          {/* Glowing Halo */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 rounded-[2rem] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />

          <motion.div
            initial={{ y: 40, opacity: 0, rotateX: 5 }}
            whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative bg-white rounded-[1.5rem] shadow-2xl border border-gray-200/60 overflow-hidden backdrop-blur-xl"
            style={{ minHeight: '600px' }}
          >
            {/* Dashboard UI: Sidebar + Main */}
            <div className="flex h-[600px]">

              {/* Sidebar */}
              <div className="hidden md:flex w-64 flex-col border-r border-gray-100 bg-gray-50/50 p-4">
                {/* Fake Logo Area */}
                <div className="flex items-center gap-2 px-2 mb-8">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary" />
                  <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
                </div>

                {/* Nav Items */}
                <div className="space-y-1">
                  {['Overview', 'Campaigns', 'Calendar', 'Inbox', 'Analytics'].map((item, i) => (
                    <div key={i} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ${i === 2 ? 'bg-primary/5 text-primary' : 'text-gray-500 hover:bg-gray-100'}`}>
                      <div className={`w-4 h-4 rounded ${i === 2 ? 'bg-primary/20' : 'bg-gray-200'}`} />
                      {item}
                    </div>
                  ))}
                </div>

                {/* AI Recommendations Sidebar Box */}
                <div className="mt-auto bg-gradient-to-b from-white to-purple-50 p-4 rounded-xl border border-purple-100 shadow-sm">
                  <div className="flex items-center gap-2 mb-2 text-primary">
                    <Sparkles size={14} />
                    <span className="text-xs font-bold uppercase tracking-wider">AI Insight</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-3">
                    Your recent LinkedIn posts are trending. Posting at <span className="font-bold text-gray-900">10:00 AM</span> could boost reach by 24%.
                  </p>
                  <button className="w-full py-1.5 bg-gradient-premium text-white rounded-lg text-xs font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow">
                    Apply Optimization
                  </button>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 flex flex-col bg-white relative">
                {/* Top Bar */}
                <div className="h-16 border-b border-gray-100 flex items-center justify-between px-6">
                  <div className="flex items-center gap-3 text-gray-400 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200/50 w-64">
                    <Search size={16} />
                    <span className="text-sm">Search campaigns...</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Bell size={20} className="text-gray-400" />
                      <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-200 border border-gray-100" />
                  </div>
                </div>

                {/* Dynamic View Content */}
                <div className="flex-1 p-6 overflow-hidden bg-gray-50/30 relative">
                  <AnimatePresence mode="wait">

                    {/* VIEW: CALENDAR */}
                    {activeTab === 'calendar' && (
                      <motion.div
                        key="calendar"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="h-full flex flex-col"
                      >
                        <div className="flex justify-between items-center mb-6">
                          <h3 className="text-xl font-display font-bold text-gray-900">Content Calendar</h3>
                          <div className="flex gap-2">
                            <button className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-600 shadow-sm">Filter</button>
                            <button className="px-3 py-1.5 bg-dark text-white rounded-lg text-sm font-semibold shadow-lg flex items-center gap-1.5">
                              <Plus size={16} /> Create
                            </button>
                          </div>
                        </div>
                        {/* Calendar Grid Mockup */}
                        <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
                          <div className="grid grid-cols-7 border-b border-gray-200 bg-gray-50">
                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                              <div key={day} className="py-2 text-center text-xs font-medium text-gray-500 uppercase">{day}</div>
                            ))}
                          </div>
                          <div className="flex-1 grid grid-cols-7 grid-rows-4">
                            {Array.from({ length: 28 }).map((_, i) => {
                              const hasPost = [2, 5, 9, 12, 15, 18, 22, 25].includes(i);
                              const platform = i % 3 === 0 ? 'instagram' : (i % 2 === 0 ? 'linkedin' : 'twitter');
                              return (
                                <div key={i} className="border-r border-b border-gray-100 p-2 relative group/day hover:bg-gray-50 transition-colors">
                                  <span className="text-xs text-gray-400 font-medium">{i + 1}</span>
                                  {hasPost && (
                                    <motion.div
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      transition={{ delay: i * 0.02 }}
                                      className="mt-2 p-2 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md cursor-pointer group/card"
                                    >
                                      <div className="flex justify-between items-center mb-1.5">
                                        {platform === 'instagram' && <Instagram size={12} className="text-pink-500" />}
                                        {platform === 'linkedin' && <Linkedin size={12} className="text-blue-700" />}
                                        {platform === 'twitter' && <Twitter size={12} className="text-blue-400" />}
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                      </div>
                                      <div className="h-1.5 w-full bg-gray-100 rounded-full mb-1 group-hover/card:bg-gray-200" />
                                      <div className="h-1.5 w-2/3 bg-gray-100 rounded-full group-hover/card:bg-gray-200" />
                                    </motion.div>
                                  )}
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* VIEW: AI COPYWRITER */}
                    {activeTab === 'copywriter' && (
                      <motion.div
                        key="copywriter"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="h-full grid grid-cols-3 gap-6"
                      >
                        {/* Editor */}
                        <div className="col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                          <div className="mb-4 pb-4 border-b border-gray-100 flex justify-between items-center">
                            <div className="space-y-1">
                              <div className="h-2 w-32 bg-gray-200 rounded-full" />
                              <div className="h-6 w-64 bg-gray-100 rounded-md" />
                            </div>
                            <span className="text-xs font-bold text-gray-400 uppercase">Draft</span>
                          </div>
                          <div className="space-y-3">
                            <div className="h-4 w-full bg-gray-100 rounded" />
                            <div className="h-4 w-full bg-gray-100 rounded" />
                            <div className="h-4 w-[90%] bg-gray-100 rounded" />
                            <div className="h-4 w-full bg-gray-100 rounded" />
                            <div className="h-4 w-[60%] bg-gray-100 rounded" />
                          </div>
                          <div className="mt-8 p-4 rounded-lg bg-purple-50 border border-purple-100 flex gap-3 items-start">
                            <div className="mt-1 bg-white p-1.5 rounded-md shadow-sm text-primary">
                              <Sparkles size={14} />
                            </div>
                            <div>
                              <p className="text-sm text-gray-800 font-medium mb-1">AI Suggestion</p>
                              <p className="text-xs text-gray-600">Make the second paragraph punchier to increase retention. Try focusing on the "benefit" rather than the "feature".</p>
                              <div className="flex gap-2 mt-2">
                                <button className="text-xs font-bold text-primary hover:underline">Accept</button>
                                <button className="text-xs font-bold text-gray-400 hover:text-gray-600">Dismiss</button>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* AI Chat / Context */}
                        <div className="col-span-1 bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex flex-col">
                          <h4 className="font-bold text-sm text-gray-800 mb-4">Amplify Assistant</h4>
                          <div className="flex-1 space-y-3">
                            <div className="bg-gray-50 p-3 rounded-lg rounded-tl-none text-xs text-gray-600">
                              Generate 3 variations of this post for LinkedIn.
                            </div>
                            <div className="bg-primary/5 border border-primary/10 p-3 rounded-lg rounded-tr-none text-xs text-gray-700">
                              Sure! Here are 3 variations optimized for professional engagement...
                            </div>
                          </div>
                          <div className="mt-4 pt-3 border-t border-gray-100 relative">
                            <div className="h-8 w-full bg-gray-50 rounded border border-gray-200" />
                            <div className="absolute right-2 bottom-2 p-1 bg-primary rounded-md text-white">
                              <ArrowRight size={12} />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* VIEW: ANALYTICS */}
                    {activeTab === 'analytics' && (
                      <motion.div
                        key="analytics"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="h-full flex flex-col gap-6"
                      >
                        <div className="grid grid-cols-4 gap-4">
                          {[
                            { label: 'Total Reach', val: '124.5K', change: '+12%', icon: Users },
                            { label: 'Engagement', val: '8.2%', change: '+5.4%', icon: MousePointer2 },
                            { label: 'Clicks', val: '3,402', change: '+21%', icon: MousePointer2 },
                            { label: 'Conversion', val: '2.1%', change: '-0.5%', icon: TrendingUp },
                          ].map((stat, i) => (
                            <div key={i} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                              <div className="flex justify-between mb-2">
                                <stat.icon size={16} className="text-gray-400" />
                                <span className={`text-xs font-bold ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-500'}`}>{stat.change}</span>
                              </div>
                              <div className="text-2xl font-display font-bold text-dark">{stat.val}</div>
                              <div className="text-xs text-gray-400">{stat.label}</div>
                            </div>
                          ))}
                        </div>

                        <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col">
                          <div className="flex justify-between items-center mb-6">
                            <h4 className="font-bold text-gray-800">Performance Overview</h4>
                            <div className="flex gap-2">
                              <div className="h-8 w-24 bg-gray-50 rounded border border-gray-200" />
                              <div className="h-8 w-8 bg-gray-50 rounded border border-gray-200" />
                            </div>
                          </div>
                          <div className="flex-1 flex items-end gap-3 pb-2">
                            {[30, 45, 35, 60, 50, 75, 65, 85, 70, 60, 80, 95].map((h, i) => (
                              <div key={i} className="flex-1 bg-gray-100 rounded-t-md relative group cursor-pointer overflow-hidden">
                                <motion.div
                                  initial={{ height: 0 }}
                                  animate={{ height: `${h}%` }}
                                  transition={{ duration: 1, delay: i * 0.05 }}
                                  className="absolute bottom-0 w-full bg-gradient-to-t from-primary to-secondary opacity-80 group-hover:opacity-100 transition-opacity"
                                />
                                {/* Tooltip */}
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-dark text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                                  {h * 124} Impressions
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="flex justify-between text-xs text-gray-400 pt-2 border-t border-gray-100">
                            <span>Nov 1</span>
                            <span>Nov 30</span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* VIEW: ASSETS */}
                    {activeTab === 'assets' && (
                      <motion.div
                        key="assets"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="h-full flex flex-col"
                      >
                        <div className="flex justify-between items-center mb-6">
                          <h3 className="text-xl font-display font-bold text-gray-900">Asset Library</h3>
                          <button className="px-3 py-1.5 bg-primary text-white rounded-lg text-sm font-semibold shadow-lg flex items-center gap-1.5">
                            <Plus size={16} /> Upload
                          </button>
                        </div>
                        <div className="grid grid-cols-4 gap-4 overflow-y-auto pr-2 pb-20">
                          {Array.from({ length: 12 }).map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.05 }}
                              className="aspect-square rounded-xl bg-gray-100 border border-gray-200 relative overflow-hidden group cursor-pointer"
                            >
                              {/* Placeholder Image Gradient */}
                              <div className={`absolute inset-0 opacity-50 bg-gradient-to-br ${i % 3 === 0 ? 'from-blue-100 to-purple-200' :
                                  i % 3 === 1 ? 'from-pink-100 to-orange-100' : 'from-green-100 to-emerald-200'
                                }`} />

                              {/* Hover Overlay */}
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <div className="bg-white/90 p-2 rounded-lg shadow-sm">
                                  <MoreHorizontal size={16} className="text-gray-600" />
                                </div>
                              </div>

                              <div className="absolute bottom-2 left-2 right-2 flex justify-between items-end">
                                <span className="text-[10px] font-bold text-gray-500 bg-white/80 px-1.5 py-0.5 rounded backdrop-blur-sm">IMG_{i + 102}.png</span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                  </AnimatePresence>
                </div>

              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center mt-16">
          <button aria-label="Explore Live Demo" className="group flex items-center gap-2 text-lg font-bold text-dark hover:text-primary transition-colors focus-ring">
            <span className="gradient-text playfair-cta whitespace-nowrap z-10">Explore Live Demo</span>
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};
