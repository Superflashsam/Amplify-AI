
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Instagram, Linkedin, Youtube, Twitter, Facebook, 
  Figma, Slack, ShoppingBag, HardDrive, Globe, 
  Sparkles, Zap, Layout
} from 'lucide-react';

const INTEGRATIONS = [
  // Social (Inner Ring usually, or mixed)
  { id: 'ig', name: 'Instagram', icon: Instagram, color: 'text-pink-500', bg: 'bg-pink-50', desc: 'Auto-publish Stories & Reels' },
  { id: 'li', name: 'LinkedIn', icon: Linkedin, color: 'text-blue-700', bg: 'bg-blue-50', desc: 'Schedule Articles & Posts' },
  { id: 'yt', name: 'YouTube', icon: Youtube, color: 'text-red-600', bg: 'bg-red-50', desc: 'Upload Shorts & metadata' },
  { id: 'x', name: 'X / Twitter', icon: Twitter, color: 'text-black', bg: 'bg-gray-100', desc: 'Thread automation & analytics' },
  { id: 'fb', name: 'Facebook', icon: Facebook, color: 'text-blue-600', bg: 'bg-blue-50', desc: 'Page & Group management' },
  
  // Productivity & Tools
  { id: 'fig', name: 'Figma', icon: Figma, color: 'text-purple-500', bg: 'bg-purple-50', desc: 'Sync creatives directly' },
  { id: 'slk', name: 'Slack', icon: Slack, color: 'text-amber-500', bg: 'bg-amber-50', desc: 'Team notifications & approval' },
  { id: 'shop', name: 'Shopify', icon: ShoppingBag, color: 'text-green-600', bg: 'bg-green-50', desc: 'Product catalog sync' },
  { id: 'drive', name: 'Drive', icon: HardDrive, color: 'text-blue-500', bg: 'bg-blue-50', desc: 'Asset library backup' },
  { id: 'wp', name: 'WordPress', icon: Globe, color: 'text-slate-700', bg: 'bg-slate-100', desc: 'Blog post publishing' },
  
  // Extra for balance
  { id: 'notion', name: 'Notion', icon: Layout, color: 'text-gray-700', bg: 'bg-gray-50', desc: 'Content calendar sync' },
  { id: 'canva', name: 'Canva', icon: Layout, color: 'text-cyan-500', bg: 'bg-cyan-50', desc: 'Import designs instantly' },
];

export const IntegrationsSection: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [radius, setRadius] = useState(280);

  useEffect(() => {
    const handleResize = () => {
        setRadius(window.innerWidth < 768 ? 140 : 280);
    };
    handleResize(); // Init
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02]" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6"
          >
            <Zap size={12} /> Ecosystem
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-3xl md:text-5xl text-dark mb-6 tracking-tight"
          >
            Connect Amplify with the<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">tools you already use</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500 leading-relaxed"
          >
            Seamlessly integrate with your favorite social platforms, cloud storage, and productivity apps.
          </motion.p>
        </div>

        {/* Radial Layout Container */}
        <div className="relative w-full aspect-square md:aspect-[16/9] max-h-[700px] flex items-center justify-center">
           
           {/* Center Node: Amplify */}
           <motion.div 
             initial={{ scale: 0.8, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             viewport={{ once: true }}
             className="relative z-20 w-24 h-24 md:w-32 md:h-32 rounded-full bg-white shadow-2xl border border-gray-100 flex items-center justify-center group cursor-default"
           >
              {/* Pulse Effect */}
              <div className="absolute inset-0 rounded-full bg-primary/10 animate-ping opacity-20" />
              <div className="absolute -inset-4 rounded-full border border-primary/20 opacity-40 scale-110" />
              
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-inner text-white">
                 <Sparkles size={40} fill="currentColor" />
              </div>
           </motion.div>

           {/* Satellites Container - Rotating */}
           <motion.div 
             className="absolute inset-0 flex items-center justify-center pointer-events-none"
             animate={{ rotate: 360 }}
             transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
           >
              {/* Shared Gradient Definition */}
              <svg className="absolute w-0 h-0">
                  <defs>
                      <linearGradient id="connection-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.1" />
                      </linearGradient>
                  </defs>
              </svg>

              {INTEGRATIONS.map((item, index) => {
                 const total = INTEGRATIONS.length;
                 const angle = (index * (360 / total)) * (Math.PI / 180); // Convert to radians
                 const x = Math.cos(angle) * radius;
                 const y = Math.sin(angle) * radius;
                 
                 return (
                    <motion.div
                      key={item.id}
                      className="absolute top-1/2 left-1/2 pointer-events-auto"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, type: 'spring' }}
                      style={{
                        x, 
                        y,
                        marginLeft: -28, // Half of width (56px)
                        marginTop: -28,  // Half of height
                      }}
                    >
                       {/* Connection Lines - Enhanced Data Flow */}
                       <svg className="absolute overflow-visible -z-10" style={{ left: 28, top: 28, width: 0, height: 0 }}>
                          {/* Static Connection Line (Faint) */}
                          <line 
                            x1={0} y1={0} 
                            x2={-x} y2={-y}
                            stroke="url(#connection-gradient)"
                            strokeWidth="1"
                            strokeOpacity="0.2"
                          />
                          {/* Animated Data Packet (Pulsing) */}
                          <motion.line 
                            x1={0} y1={0} 
                            x2={-x} y2={-y}
                            stroke="url(#connection-gradient)"
                            strokeWidth="2"
                            strokeDasharray="4 12" // Short dash for packet effect
                            initial={{ strokeDashoffset: 0 }}
                            animate={{ strokeDashoffset: -16 }} // Move towards center (satellite to hub)
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            strokeLinecap="round"
                          />
                       </svg>

                       {/* Counter-Rotating Container to keep icons upright */}
                       <motion.div
                          animate={{ rotate: -360 }}
                          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                       >
                           <motion.div
                             onMouseEnter={() => setHoveredId(item.id)}
                             onMouseLeave={() => setHoveredId(null)}
                             whileHover={{ scale: 1.2, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.2)" }}
                             className={`relative z-10 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white border border-gray-100 shadow-lg flex items-center justify-center cursor-pointer transition-colors duration-300 ${hoveredId === item.id ? 'border-primary/30' : ''}`}
                           >
                              <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg ${item.bg} flex items-center justify-center ${item.color}`}>
                                 <item.icon size={20} />
                              </div>

                              {/* Tooltip Modal */}
                              <AnimatePresence>
                                 {hoveredId === item.id && (
                                    <motion.div 
                                       initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                       animate={{ opacity: 1, y: 0, scale: 1 }}
                                       exit={{ opacity: 0, y: 5, scale: 0.95 }}
                                       className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-48 bg-white/90 backdrop-blur-xl border border-gray-200/50 p-3 rounded-xl shadow-xl z-50 text-center pointer-events-none"
                                    >
                                       <div className="text-xs font-bold text-gray-900 mb-1">{item.name}</div>
                                       <div className="text-[10px] text-gray-500 leading-tight">{item.desc}</div>
                                       {/* Arrow */}
                                       <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-t border-l border-gray-200 rotate-45" />
                                    </motion.div>
                                 )}
                              </AnimatePresence>
                           </motion.div>
                       </motion.div>
                    </motion.div>
                 );
              })}
           </motion.div>
        </div>
        
      </div>
    </section>
  );
};
