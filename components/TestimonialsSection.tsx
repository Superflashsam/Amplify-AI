
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, Star, Quote, ArrowRight, TrendingUp, Zap, DollarSign, ChevronRight, CheckCircle2 } from 'lucide-react';

const VIDEOS = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "Head of Growth",
    company: "Loom",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
    duration: "1:24"
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "CMO",
    company: "Figma",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    duration: "2:15"
  },
  {
    id: 3,
    name: "David Park",
    role: "Creative Director",
    company: "Linear",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
    duration: "1:45"
  },
  {
    id: 4,
    name: "Emily Weiss",
    role: "Founder",
    company: "Glossier",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
    duration: "1:10"
  },
  {
    id: 5,
    name: "Marcus Johnson",
    role: "VP Marketing",
    company: "Spotify",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
    duration: "1:55"
  }
];

const REVIEWS = [
  {
    text: "The ROI was immediate. We cut our content production costs by 60% in the first month alone.",
    author: "Jessica Lee",
    role: "Director of Brand",
    company: "Notion",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica"
  },
  {
    text: "Finally, an AI tool that understands brand voice. It doesn't sound like a robot, it sounds like us.",
    author: "Tom Baker",
    role: "Content Lead",
    company: "Intercom",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tom"
  },
  {
    text: "Amplify is the secret weapon of our marketing team. It's like having 10 extra copywriters.",
    author: "Sofia Rodriguez",
    role: "Growth Manager",
    company: "Wise",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia"
  },
  {
    text: "The analytics features are game-changing. We know exactly what will perform before we post.",
    author: "Mike Chen",
    role: "Social Media Mgr",
    company: "Airbnb",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike"
  },
  {
    text: "Intuitive, powerful, and scalable. The enterprise security features sealed the deal for us.",
    author: "Rachel Green",
    role: "CTO",
    company: "Dropbox",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rachel"
  },
  {
    text: "We scaled from 2 to 20 channels without hiring more staff. Incredible efficiency unlock.",
    author: "James Wilson",
    role: "CEO",
    company: "TechStar",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James"
  }
];

export const TestimonialsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={scrollRef} className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Cinematic Background Blur */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-purple-200/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-blue-200/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm mb-6"
          >
            <Star size={12} className="text-orange-400 fill-orange-400" />
            <span className="text-xs font-bold text-gray-600 uppercase tracking-wide">Customer Stories</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-6xl text-gray-900 mb-6 tracking-tight leading-[1.1]"
          >
            Real Teams. Real Growth.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Real Results.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto"
          >
            See how top brands scale content production and improve performance using Amplify.
          </motion.p>
        </div>

        {/* HERO CASE STUDY CARD MOVED TO PRICING SECTION */}

        {/* HORIZONTAL VIDEO SCROLL */}
        <div className="mb-24">
           <div className="flex items-center justify-between mb-8 px-2">
              <h3 className="font-bold text-xl text-gray-900">Founder Stories</h3>
              <div className="flex gap-2">
                 <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"><ChevronRight className="rotate-180" size={20} /></button>
                 <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"><ChevronRight size={20} /></button>
              </div>
           </div>
           
           <motion.div 
              className="flex gap-6 overflow-x-auto pb-8 pt-2 px-2 scrollbar-hide cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ right: 0, left: -1000 }}
           >
              {VIDEOS.map((video) => (
                 <motion.div 
                    key={video.id}
                    className="relative min-w-[300px] md:min-w-[400px] aspect-video rounded-2xl overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -5 }}
                 >
                    <img src={video.image} alt={video.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                          <Play fill="currentColor" size={24} className="ml-1" />
                       </div>
                    </div>

                    {/* Info */}
                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                       <div className="flex justify-between items-end">
                          <div>
                             <div className="text-white font-bold text-lg">{video.name}</div>
                             <div className="text-white/80 text-sm">{video.role}, {video.company}</div>
                          </div>
                          <div className="px-2 py-1 rounded bg-black/50 backdrop-blur text-white text-xs font-medium">
                             {video.duration}
                          </div>
                       </div>
                    </div>
                 </motion.div>
              ))}
           </motion.div>
        </div>

        {/* MASONRY REVIEW GRID */}
        <div className="mb-24">
           <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {REVIEWS.map((review, i) => (
                 <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -5, rotate: i % 2 === 0 ? 1 : -1 }}
                    className="bg-white p-6 md:p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 break-inside-avoid hover:shadow-xl transition-all duration-300"
                 >
                    <div className="flex gap-1 text-yellow-400 mb-4">
                       {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                    </div>
                    <blockquote className="text-gray-800 text-lg font-medium leading-relaxed mb-6">
                       "{review.text}"
                    </blockquote>
                    <div className="flex items-center gap-3">
                       <img src={review.avatar} alt={review.author} className="w-10 h-10 rounded-full bg-gray-100" />
                       <div>
                          <div className="font-bold text-gray-900 text-sm">{review.author}</div>
                          <div className="text-xs text-gray-500">{review.role}, {review.company}</div>
                       </div>
                       <div className="ml-auto opacity-20">
                          <Quote size={24} />
                       </div>
                    </div>
                 </motion.div>
              ))}
           </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="text-center max-w-3xl mx-auto pb-12">
           <h2 className="font-display font-bold text-4xl md:text-5xl text-dark mb-8">
              Ready to Amplify Your Growth?
           </h2>
           <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary to-secondary rounded-full text-white text-xl font-bold shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all overflow-hidden"
           >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative">Start Free Trial</span>
              <ArrowRight className="relative w-6 h-6 transition-transform group-hover:translate-x-1" />
           </motion.button>
        </div>

      </div>
    </section>
  );
};
    