import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Instagram, Linkedin, Youtube, Twitter,
  Figma, Slack, HardDrive, Layout,
  Layers, Database, Share2, Sparkles
} from 'lucide-react';

interface Integration {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
  bg: string;
  desc: string;
}

// Left Column Data
const INPUTS: Integration[] = [
  { id: 'fig', name: 'Figma', icon: Figma, color: 'text-purple-600', bg: 'bg-purple-50', desc: 'Import designs directly' },
  { id: 'notion', name: 'Notion', icon: Layout, color: 'text-gray-800', bg: 'bg-gray-50', desc: 'Sync content calendar' },
  { id: 'drive', name: 'Google Drive', icon: HardDrive, color: 'text-blue-600', bg: 'bg-blue-50', desc: 'Backup media library' },
  { id: 'slk', name: 'Slack', icon: Slack, color: 'text-amber-600', bg: 'bg-amber-50', desc: 'Team approval flow' },
];

// Right Column Data
const OUTPUTS: Integration[] = [
  { id: 'ig', name: 'Instagram', icon: Instagram, color: 'text-pink-600', bg: 'bg-pink-50', desc: 'Reels & Stories' },
  { id: 'li', name: 'LinkedIn', icon: Linkedin, color: 'text-blue-700', bg: 'bg-blue-50', desc: 'Company updates' },
  { id: 'x', name: 'Twitter / X', icon: Twitter, color: 'text-black', bg: 'bg-gray-100', desc: 'Engagement tracking' },
  { id: 'yt', name: 'YouTube', icon: Youtube, color: 'text-red-600', bg: 'bg-red-50', desc: 'Shorts upload' },
];

export const IntegrationsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Geometry for SVG paths
  const CARD_HEIGHT = 80;
  const GAP = 24;
  const PADDING_Y = 40;

  const getCardY = (index: number) => PADDING_Y + (index * (CARD_HEIGHT + GAP)) + (CARD_HEIGHT / 2);
  const CENTER_Y = (PADDING_Y * 2 + (4 * CARD_HEIGHT) + (3 * GAP)) / 2;

  // Animation Constants
  const CYCLE_DURATION = 3; // Time for one packet to travel (seconds)
  const STAGGER = 0.8; // Delay between each card firing

  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative" id="integrations">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-purple/5 to-brand-coral/5 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">

        {/* Header - SEO Optimized */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-100 text-pink-600 text-xs font-bold uppercase tracking-wider mb-6"
          >
            <Sparkles size={12} className="fill-current" />
            Seamless Integrations
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-3xl md:text-5xl text-dark mb-6 tracking-tight"
          >
            Connect Your <span className="heading-gradient">Entire Marketing Stack</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Amplify Core syncs seamlessly with your favorite design tools, content platforms, and social channels—import from anywhere, publish everywhere.
          </motion.p>
        </div>

        {/* Diagram Headers */}
        <div className="flex justify-between items-end mb-10 max-w-[1100px] mx-auto px-2">
          <div className="hidden md:flex items-center gap-2 text-gray-400 text-xs font-bold tracking-widest uppercase">
            <Database size={14} /> Input Sources
          </div>
          <div className="hidden md:flex items-center gap-2 text-gray-400 text-xs font-bold tracking-widest uppercase text-right">
            Distribution Channels <Share2 size={14} />
          </div>
        </div>

        {/* Diagram Area */}
        <div className="relative max-w-[1100px] mx-auto h-[480px]">

          {/* 
              SVG Layer 
              ViewBox 0 0 1100 480 matches container dimensions
            */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block"
            viewBox="0 0 1100 480"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF5A57" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#E02F75" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#6700A3" stopOpacity="0.4" />
              </linearGradient>
              <filter id="glow-drop" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="glow-drop-hover" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" result="goo" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Left Inputs -> Center */}
            {INPUTS.map((item, index) => {
              const startY = getCardY(index);
              const endY = CENTER_Y;
              const startX = 280;
              const endX = 550 - 90;

              const pathId = `path-input-${index}`;
              const pathD = `M ${startX} ${startY} C ${startX + 120} ${startY}, ${endX - 120} ${endY}, ${endX} ${endY}`;

              // Stagger delay based on index for organic flow
              const beginTime = index * STAGGER;
              const isHovered = hoveredId === item.id;

              return (
                <g key={item.id}>
                  {/* Base Wire - static but with gradient */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke="url(#gradient-line)"
                    strokeWidth="1"
                    style={{
                      strokeOpacity: isHovered ? 0.8 : 0.2,
                      transition: 'stroke-opacity 0.5s ease'
                    }}
                  />

                  {/* Active "Energy" Pulse on wire - Normal Speed (Default) */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke="#FF5A57"
                    strokeWidth="2"
                    strokeDasharray="4 12"
                    style={{
                      strokeOpacity: isHovered ? 0 : 0.1,
                      transition: 'stroke-opacity 0.5s ease'
                    }}
                  >
                    <animate attributeName="stroke-dashoffset" from="16" to="0" dur="1s" repeatCount="indefinite" />
                  </path>

                  {/* High Speed Pulse (Hover State) - Fade in on hover for acceleration effect */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke="#FF5A57"
                    strokeWidth="2"
                    strokeDasharray="4 12"
                    style={{
                      strokeOpacity: isHovered ? 0.6 : 0,
                      transition: 'stroke-opacity 0.5s ease'
                    }}
                  >
                    <animate attributeName="stroke-dashoffset" from="16" to="0" dur="0.2s" repeatCount="indefinite" />
                  </path>

                  {/* The Path Definition for Animation (invisible) */}
                  <path id={pathId} d={pathD} fill="none" stroke="none" />

                  {/* Comet Head */}
                  <circle r="4" fill="#FF5A57" filter={isHovered ? "url(#glow-drop-hover)" : "url(#glow-drop)"} style={{ transition: 'filter 0.5s ease' }}>
                    <animateMotion
                      dur={`${CYCLE_DURATION}s`}
                      begin={`${beginTime}s`}
                      repeatCount="indefinite"
                      keyPoints="0;1"
                      keyTimes="0;1"
                      calcMode="spline"
                      keySplines="0.4 0 0.2 1"
                    >
                      <mpath href={`#${pathId}`} />
                    </animateMotion>
                  </circle>

                  {/* Comet Tail 1 */}
                  <circle r="3" fill="#FF5A57" opacity={isHovered ? 0.8 : 0.6} style={{ transition: 'opacity 0.5s ease' }}>
                    <animateMotion
                      dur={`${CYCLE_DURATION}s`}
                      begin={`${beginTime + 0.05}s`}
                      repeatCount="indefinite"
                      keyPoints="0;1"
                      keyTimes="0;1"
                      calcMode="spline"
                      keySplines="0.4 0 0.2 1"
                    >
                      <mpath href={`#${pathId}`} />
                    </animateMotion>
                  </circle>

                  {/* Comet Tail 2 */}
                  <circle r="1.5" fill="#FF5A57" opacity={isHovered ? 0.5 : 0.3} style={{ transition: 'opacity 0.5s ease' }}>
                    <animateMotion
                      dur={`${CYCLE_DURATION}s`}
                      begin={`${beginTime + 0.1}s`}
                      repeatCount="indefinite"
                      keyPoints="0;1"
                      keyTimes="0;1"
                      calcMode="spline"
                      keySplines="0.4 0 0.2 1"
                    >
                      <mpath href={`#${pathId}`} />
                    </animateMotion>
                  </circle>
                </g>
              );
            })}

            {/* Center -> Right Outputs */}
            {OUTPUTS.map((item, index) => {
              const startY = CENTER_Y;
              const endY = getCardY(index);
              const startX = 550 + 90;
              const endX = 820;

              const pathId = `path-output-${index}`;
              const pathD = `M ${startX} ${startY} C ${startX + 120} ${startY}, ${endX - 120} ${endY}, ${endX} ${endY}`;

              const beginTime = (index * STAGGER) + CYCLE_DURATION;
              const isHovered = hoveredId === item.id;

              return (
                <g key={item.id}>
                  <path
                    d={pathD}
                    fill="none"
                    stroke="url(#gradient-line)"
                    strokeWidth="1"
                    style={{
                      strokeOpacity: isHovered ? 0.8 : 0.2,
                      transition: 'stroke-opacity 0.5s ease'
                    }}
                  />
                  {/* Active "Energy" Pulse on wire - Normal */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke="#6700A3"
                    strokeWidth="2"
                    strokeDasharray="4 12"
                    style={{
                      strokeOpacity: isHovered ? 0 : 0.1,
                      transition: 'stroke-opacity 0.5s ease'
                    }}
                  >
                    <animate attributeName="stroke-dashoffset" from="0" to="16" dur="1s" repeatCount="indefinite" />
                  </path>

                  {/* High Speed Pulse (Hover) */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke="#6700A3"
                    strokeWidth="2"
                    strokeDasharray="4 12"
                    style={{
                      strokeOpacity: isHovered ? 0.6 : 0,
                      transition: 'stroke-opacity 0.5s ease'
                    }}
                  >
                    <animate attributeName="stroke-dashoffset" from="0" to="16" dur="0.2s" repeatCount="indefinite" />
                  </path>

                  <path id={pathId} d={pathD} fill="none" stroke="none" />

                  {/* Comet Head */}
                  <circle r="4" fill="#6700A3" filter={isHovered ? "url(#glow-drop-hover)" : "url(#glow-drop)"} style={{ transition: 'filter 0.5s ease' }}>
                    <animateMotion
                      dur={`${CYCLE_DURATION}s`}
                      begin={`${beginTime}s`}
                      repeatCount="indefinite"
                      keyPoints="0;1"
                      keyTimes="0;1"
                      calcMode="spline"
                      keySplines="0.4 0 0.2 1"
                    >
                      <mpath href={`#${pathId}`} />
                    </animateMotion>
                  </circle>
                  {/* Comet Tail 1 */}
                  <circle r="3" fill="#6700A3" opacity={isHovered ? 0.8 : 0.6} style={{ transition: 'opacity 0.5s ease' }}>
                    <animateMotion
                      dur={`${CYCLE_DURATION}s`}
                      begin={`${beginTime + 0.05}s`}
                      repeatCount="indefinite"
                      keyPoints="0;1"
                      keyTimes="0;1"
                      calcMode="spline"
                      keySplines="0.4 0 0.2 1"
                    >
                      <mpath href={`#${pathId}`} />
                    </animateMotion>
                  </circle>
                  {/* Comet Tail 2 */}
                  <circle r="1.5" fill="#6700A3" opacity={isHovered ? 0.5 : 0.3} style={{ transition: 'opacity 0.5s ease' }}>
                    <animateMotion
                      dur={`${CYCLE_DURATION}s`}
                      begin={`${beginTime + 0.1}s`}
                      repeatCount="indefinite"
                      keyPoints="0;1"
                      keyTimes="0;1"
                      calcMode="spline"
                      keySplines="0.4 0 0.2 1"
                    >
                      <mpath href={`#${pathId}`} />
                    </animateMotion>
                  </circle>
                </g>
              );
            })}
          </svg>

          {/* DOM Content Layer */}
          <div className="absolute inset-0 flex flex-col md:flex-row justify-between items-center z-10">

            {/* Inputs */}
            <div className="w-full md:w-[280px] flex flex-col gap-6">
              <div className="md:hidden text-xs font-bold uppercase text-gray-400 mb-2">Input Sources</div>
              {INPUTS.map((item, index) => (
                <div
                  key={item.id}
                  className="animate-float"
                  style={{ animationDelay: `${index * 0.5}s` }}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative h-[80px] bg-white rounded-2xl border p-4 flex items-center gap-4 group cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${hoveredId === item.id
                      ? 'border-brand-pink shadow-brand-pink/20 scale-[1.02]'
                      : 'border-brand-pink/20 shadow-[0_4px_20px_-5px_rgba(224,47,117,0.1)] hover:shadow-brand-pink/10 hover:border-brand-pink/40'
                      }`}
                  >
                    <div className={`absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full border-2 border-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] z-20 hidden md:block transition-transform duration-300 ${hoveredId === item.id ? 'scale-125 shadow-[0_0_12px_rgba(34,197,94,0.8)]' : ''}`} />
                    <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center ${item.color} shrink-0 transition-transform duration-300 ${hoveredId === item.id ? 'scale-110' : ''}`}>
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className={`font-bold text-sm transition-colors ${hoveredId === item.id ? 'text-brand-pink' : 'text-gray-900'}`}>{item.name}</h3>
                      <p className="text-[11px] text-gray-500 leading-tight mt-0.5">{item.desc}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Core */}
            <div className="relative z-20 my-12 md:my-0">
              {/* Deep Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-brand-coral/20 via-brand-pink/10 to-brand-purple/20 rounded-full blur-[80px] pulse-glow" />

              {/* Rotating Rings with different speeds for gyroscopic feel */}
              <div className="absolute inset-[-45px] rounded-full border border-dashed border-brand-purple/10 animate-spin-slower" />
              <div className="absolute inset-[-30px] rounded-full border border-dashed border-brand-coral/20 animate-spin-reverse-slow" />

              {/* Main Circle */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                className="relative w-48 h-48 bg-white/90 backdrop-blur-md rounded-full shadow-[0_20px_60px_-15px_rgba(224,47,117,0.3)] flex flex-col items-center justify-center border-[6px] border-white z-30 ring-1 ring-gray-100 animate-breathing-halo"
              >
                {/* Breathing inner glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-coral/5 to-brand-purple/5 animate-pulse" />

                <div className="relative w-16 h-16 rounded-2xl bg-gradient-premium flex items-center justify-center text-white mb-3 shadow-lg shadow-brand-pink/30 transform transition-transform group-hover:scale-110 z-10">
                  <Layers size={32} />
                </div>
                <h3 className="relative text-lg font-bold text-brand-dark z-10">Amplify Core</h3>
                <div className="relative flex items-center gap-1.5 mt-1 bg-green-50 px-2 py-0.5 rounded-full border border-green-100 z-10">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-[10px] font-bold text-green-700 tracking-wider uppercase">Sync Active</span>
                </div>
              </motion.div>
            </div>

            {/* Outputs */}
            <div className="w-full md:w-[280px] flex flex-col gap-6">
              <div className="md:hidden text-xs font-bold uppercase text-gray-400 mb-2 text-right">Distribution</div>
              {OUTPUTS.map((item, index) => (
                <div
                  key={item.id}
                  className="animate-float"
                  style={{ animationDelay: `${(index * 0.5) + 0.25}s` }}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative h-[80px] bg-white rounded-2xl border p-4 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group ${hoveredId === item.id
                      ? 'border-brand-purple shadow-brand-purple/20 scale-[1.02]'
                      : 'border-brand-purple/20 shadow-[0_4px_20px_-5px_rgba(103,0,163,0.1)] hover:shadow-brand-purple/10 hover:border-brand-purple/40'
                      }`}
                  >
                    <div className={`absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full border-2 border-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] z-20 hidden md:block transition-transform duration-300 ${hoveredId === item.id ? 'scale-125 shadow-[0_0_12px_rgba(34,197,94,0.8)]' : ''}`} />
                    <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center ${item.color} shrink-0 transition-transform duration-300 ${hoveredId === item.id ? 'scale-110' : ''}`}>
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className={`font-bold text-sm transition-colors ${hoveredId === item.id ? 'text-brand-purple' : 'text-gray-900'}`}>{item.name}</h3>
                      <p className="text-[11px] text-gray-500 leading-tight mt-0.5">{item.desc}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};