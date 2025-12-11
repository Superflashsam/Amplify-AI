import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring, useInView, animate, AnimatePresence, Variants } from 'framer-motion';
import {
  Sparkles,
  Zap,
  GitBranch,
  Tag,
  FileText,
  Image as ImageIcon,
  PenTool,
  ToggleRight,
  ToggleLeft,
  Check,
  Cpu,
  Share2,
  TrendingUp,
  Clapperboard,
  CalendarRange,
  Send,
  PenLine,
  BarChart2,
  Layers,
  BrainCircuit,
  Fingerprint,
  Linkedin,
  Twitter,
  Instagram,
  MessageSquare,
  Users,
  Palette,
  Target,
  ListTodo,
  Download,
  Bot,
  PieChart,
  ArrowUpRight,
  Search
} from 'lucide-react';

// --- UTILITY COMPONENTS ---

const TiltCard = ({ children, className = "", spotlight = true }: { children?: React.ReactNode, className?: string, spotlight?: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["3deg", "-3deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-3deg", "3deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXFromCenter = e.clientX - rect.left - width / 2;
    const mouseYFromCenter = e.clientY - rect.top - height / 2;
    x.set(mouseXFromCenter / width);
    y.set(mouseYFromCenter / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative transform-gpu transition-all duration-200 ease-out ${className}`}
    >
      {spotlight && (
        <motion.div
          style={{
            background: useTransform(
              [mouseX, mouseY],
              ([newX, newY]) => `radial-gradient(circle at ${50 + (newX as number) * 100}% ${50 + (newY as number) * 100}%, rgba(139, 92, 246, 0.08) 0%, transparent 50%)`
            )
          }}
          className="absolute inset-0 z-0 pointer-events-none rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
      )}
      {children}
    </motion.div>
  );
};

// --- EXISTING WIDGETS (Enhanced) ---

const ScriptTimelineWidget = () => {
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null);
  const [activeScriptIndex, setActiveScriptIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const scripts = [
    {
      id: 1,
      name: "Viral Product Launch",
      segments: [
        { id: 101, type: "Hook", duration: "0-3s", text: "Stop scrolling! You need to see this. 🛑", color: "bg-amplify-coral" },
        { id: 102, type: "Value", duration: "3-15s", text: "This AI tool writes your entire campaign in seconds...", color: "bg-amplify-purple" },
        { id: 103, type: "CTA", duration: "15-30s", text: "Click the link in bio to try it free! 🚀", color: "bg-amplify-dark" },
      ]
    },
    {
      id: 2,
      name: "Industry Secret",
      segments: [
        { id: 201, type: "Hook", duration: "0-3s", text: "Marketing is dead. Here's why. 💀", color: "bg-amplify-coral" },
        { id: 202, type: "Value", duration: "3-15s", text: "Unless you're using this specific new strategy...", color: "bg-amplify-purple" },
        { id: 203, type: "CTA", duration: "15-30s", text: "Follow me for more daily tips! 📈", color: "bg-amplify-dark" },
      ]
    }
  ];

  const currentScript = scripts[activeScriptIndex];

  const handleNextScript = () => {
    setIsAnimating(true);
    setActiveScriptIndex((prev) => (prev + 1) % scripts.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div className="relative mt-2 w-full select-none z-20">
      <div className="flex justify-between items-center mb-3 px-1">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Timeline</span>
        <button
          onClick={(e) => { e.stopPropagation(); handleNextScript(); }}
          className="text-[10px] bg-amplify-purple/10 text-amplify-purple px-2 py-0.5 rounded-full font-bold hover:bg-amplify-purple/20 transition-colors flex items-center gap-1"
        >
          <Sparkles size={10} />
          Regenerate
        </button>
      </div>

      <div className="flex flex-col gap-2 relative pl-2">
        <div className="absolute left-[19px] top-3 bottom-3 w-0.5 bg-gray-100 -z-10"></div>

        <AnimatePresence mode='wait'>
          {currentScript.segments.map((seg, index) => (
            <motion.div
              key={activeScriptIndex + "-" + seg.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ delay: index * 0.1, duration: 0.2 }}
              className="flex items-center gap-3 group cursor-pointer"
              onMouseEnter={() => setHoveredSegment(seg.id)}
              onMouseLeave={() => setHoveredSegment(null)}
              onClick={handleNextScript}
            >
              <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 border-white shadow-sm transition-all duration-300 z-10 ${hoveredSegment === seg.id ? seg.color + ' scale-110' : 'bg-gray-50'}`}>
                <div className={`w-1.5 h-1.5 rounded-full ${hoveredSegment === seg.id ? 'bg-white' : seg.color}`}></div>
              </div>
              <div className="flex-1 relative">
                <div className={`p-2.5 rounded-xl border transition-all duration-200 ${hoveredSegment === seg.id ? 'bg-white border-amplify-purple/30 shadow-md scale-[1.02]' : 'bg-white/40 border-gray-100'}`}>
                  <div className="flex justify-between items-center mb-1">
                    <span className={`text-[9px] font-bold uppercase tracking-wider transition-colors ${hoveredSegment === seg.id ? 'text-amplify-purple' : 'text-gray-400'}`}>{seg.type}</span>
                    <span className="text-[8px] text-gray-400 font-mono bg-gray-50 px-1.5 py-0.5 rounded">{seg.duration}</span>
                  </div>
                  <div className="relative overflow-hidden">
                    <p className={`text-[11px] font-medium text-amplify-dark leading-snug transition-all duration-300 ${hoveredSegment === seg.id ? 'opacity-100 blur-0' : 'opacity-60 blur-[0.5px]'}`}>
                      {seg.text}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

const CalendarWidget = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const days = [
    { id: 1, name: 'Mon', events: [{ title: 'Launch', time: '10 AM', color: 'bg-[#0A66C2]' }] },
    { id: 2, name: 'Tue', events: [] },
    { id: 3, name: 'Wed', events: [{ title: 'Thread', time: '2 PM', color: 'bg-black' }] },
    { id: 4, name: 'Thu', events: [{ title: 'Reel', time: '9 AM', color: 'bg-gradient-to-tr from-yellow-400 to-fuchsia-600' }] },
    { id: 5, name: 'Fri', events: [] },
  ];

  return (
    <div className="w-full mt-4 select-none relative z-20">
      <div className="flex justify-between items-end px-2 h-20 relative">
        <div className="absolute top-1/2 left-0 w-full border-t border-dashed border-gray-200 -z-0"></div>
        {days.map((day) => (
          <div key={day.id} className="flex flex-col items-center gap-2 relative z-10 group cursor-pointer" onClick={() => setSelectedId(selectedId === day.id ? null : day.id)}>
            <div className="w-8 h-12 flex items-end justify-center">
              {day.events.length > 0 ? (
                day.events.map((evt, i) => (
                  <motion.div
                    key={i}
                    layoutId={`c-event-${day.id}`}
                    className={`w-6 h-full rounded-md ${evt.color} shadow-sm relative`}
                    whileHover={{ y: -4, scale: 1.1 }}
                    onMouseEnter={() => setHoveredId(day.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <AnimatePresence>
                      {(hoveredId === day.id || selectedId === day.id) && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.8 }}
                          animate={{ opacity: 1, y: -30, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 bg-gray-900 text-white text-[10px] py-1.5 px-2.5 rounded-lg shadow-xl whitespace-nowrap z-50 flex flex-col items-center min-w-[80px]"
                        >
                          <span className="font-bold">{evt.title}</span>
                          <span className="text-[9px] text-gray-400 font-medium">{evt.time}</span>
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))
              ) : (
                <div className="w-6 h-full rounded-md border-2 border-dashed border-gray-100 group-hover:border-amplify-purple/30 transition-colors"></div>
              )}
            </div>
            <span className={`text-[10px] font-bold transition-colors ${selectedId === day.id ? 'text-amplify-purple' : 'text-gray-400 group-hover:text-gray-600'}`}>{day.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- NEW WIDGETS ---

// 1. Campaign Planner Widget
const CampaignPlannerWidget = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Q4 Launch', status: 'Active', progress: 75, color: 'bg-green-500' },
    { id: 2, title: 'Holiday Promo', status: 'Planning', progress: 30, color: 'bg-yellow-500' },
    { id: 3, title: 'Webinar Series', status: 'Draft', progress: 0, color: 'bg-gray-300' },
  ]);

  return (
    <div className="mt-4 space-y-2 relative z-20">
      {tasks.map((task) => (
        <motion.div
          key={task.id}
          whileHover={{ scale: 1.02 }}
          className="p-3 bg-gray-50 rounded-xl border border-gray-100 cursor-pointer group hover:bg-white hover:shadow-sm"
        >
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${task.color} animate-pulse`}></div>
              <span className="text-xs font-bold text-gray-700">{task.title}</span>
            </div>
            <span className="text-[9px] font-medium text-gray-400 bg-white px-1.5 py-0.5 rounded border border-gray-100">{task.status}</span>
          </div>
          <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${task.progress}%` }}
              transition={{ duration: 1 }}
              className={`h-full ${task.color}`}
            />
          </div>
        </motion.div>
      ))}
      <div className="flex justify-center mt-2">
        <button className="flex items-center gap-1 text-[10px] font-bold text-amplify-purple bg-amplify-purple/5 px-3 py-1.5 rounded-full hover:bg-amplify-purple/10 transition-colors">
          <Target size={12} /> New Campaign
        </button>
      </div>
    </div>
  );
};

// 2. Creative Generator Widget
const CreativeGeneratorWidget = () => {
  const [generating, setGenerating] = useState(false);

  return (
    <div className="flex flex-col h-full z-20 relative">
      <div className="flex gap-2 mb-3">
        <input
          type="text"
          placeholder="Describe your visual..."
          className="flex-1 text-[10px] bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-amplify-purple/50 transition-colors"
          disabled={generating}
        />
        <button
          onClick={() => { setGenerating(true); setTimeout(() => setGenerating(false), 2000); }}
          className="bg-amplify-dark text-white p-2 rounded-lg hover:bg-amplify-purple transition-colors"
        >
          {generating ? <Cpu size={14} className="animate-spin" /> : <Sparkles size={14} />}
        </button>
      </div>

      <div className="flex-1 grid grid-cols-2 gap-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-gray-100 rounded-xl relative group overflow-hidden cursor-pointer">
            <div className={`absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 ${generating ? 'animate-pulse' : ''}`}></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-[2px]">
              <Download className="text-white drop-shadow-md" size={16} />
            </div>
            {!generating && (
              <div className="absolute bottom-1 right-1">
                <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <ImageIcon size={8} className="text-gray-500" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// 3. Chat Assistant Widget
const ChatAssistantWidget = () => {
  return (
    <div className="flex flex-col h-full justify-between relative z-20">
      <div className="space-y-2 mb-2">
        <div className="flex items-start gap-2">
          <div className="w-6 h-6 rounded-full bg-amplify-purple/10 flex items-center justify-center flex-shrink-0">
            <Bot size={14} className="text-amplify-purple" />
          </div>
          <div className="bg-gray-50 p-2 rounded-2xl rounded-tl-none text-[10px] text-gray-600 border border-gray-100">
            Ready to optimize your campaigns? 🚀
          </div>
        </div>
        <div className="flex items-start gap-2 flex-row-reverse">
          <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
            <Users size={14} className="text-gray-500" />
          </div>
          <div className="bg-amplify-purple text-white p-2 rounded-2xl rounded-tr-none text-[10px]">
            Analyzing Q3 performance...
          </div>
        </div>
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Ask AI Copilot..."
          className="w-full text-[10px] bg-white border border-gray-200 rounded-full pl-3 pr-8 py-1.5 focus:border-amplify-purple/50 outline-none"
        />
        <button className="absolute right-1 top-1/2 -translate-y-1/2 w-5 h-5 bg-amplify-purple rounded-full flex items-center justify-center hover:bg-amplify-dark transition-colors">
          <Send size={10} className="text-white" />
        </button>
      </div>
    </div>
  );
};

// 4. Audience Builder Widget
const AudienceBuilderWidget = () => {
  const [selectedSeg, setSelectedSeg] = useState(0);
  const segments = [
    { label: "Tech Leaders", size: "45%", color: "bg-blue-500" },
    { label: "Marketers", size: "30%", color: "bg-purple-500" },
    { label: "Founders", size: "25%", color: "bg-coral-500" }
  ];

  return (
    <div className="relative z-20 h-full flex flex-col justify-center">
      <div className="flex justify-center items-end gap-2 h-20 mb-3">
        {segments.map((seg, i) => (
          <motion.div
            key={i}
            className={`w-12 rounded-t-lg relative cursor-pointer group ${seg.color}`}
            initial={{ height: 0 }}
            whileInView={{ height: seg.size }}
            transition={{ duration: 1, delay: i * 0.2 }}
            onClick={() => setSelectedSeg(i)}
          >
            <div className={`absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] font-bold text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap`}>
              {seg.size}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="bg-gray-50 rounded-lg p-2 flex items-center justify-between border border-gray-100">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${segments[selectedSeg].color}`}></div>
          <span className="text-[10px] font-bold text-gray-700">{segments[selectedSeg].label}</span>
        </div>
        <button className="text-[9px] text-amplify-purple font-bold hover:underline">View Persona</button>
      </div>
    </div>
  );
};

// --- REST OF EXISTING WIDGETS ---
const IntelligenceWidget = () => {
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const nodes = [{ id: 1, label: "Gen Z", x: 80, y: 20, color: "bg-amplify-purple" }, { id: 2, label: "Tech", x: 20, y: 50, color: "bg-amplify-blue" }, { id: 3, label: "B2B", x: 70, y: 60, color: "bg-amplify-coral" }];
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <motion.div animate={{ scale: [1, 1.5], opacity: [0.3, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-32 h-32 rounded-full border border-amplify-purple/20" />
      </div>
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {nodes.map((node, i) => (
          <motion.line key={i} x1="50%" y1="50%" x2={`${node.x}%`} y2={`${node.y}%`} stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4 4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }} />
        ))}
      </svg>
      {nodes.map((node) => (
        <motion.div key={node.id} className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-10" style={{ left: `${node.x}%`, top: `${node.y}%` }} initial={{ scale: 0 }} animate={{ scale: 1 }} onMouseEnter={() => setActiveNode(node.id)} onMouseLeave={() => setActiveNode(null)}>
          <div className={`w-3 h-3 rounded-full ${node.color} ring-4 ring-white shadow-sm transition-transform group-hover:scale-150`}></div>
          <AnimatePresence>
            {activeNode === node.id && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: -25 }} exit={{ opacity: 0 }} className="absolute bottom-0 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-[10px] rounded shadow-lg whitespace-nowrap pointer-events-none">
                <span className="font-bold">{node.label}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white border-2 border-amplify-purple rounded-full flex items-center justify-center z-10 shadow-sm pointer-events-none"><div className="w-1.5 h-1.5 bg-amplify-purple rounded-full"></div></div>
    </div>
  );
};

const AutoPublishWidget = () => {
  const [status, setStatus] = useState<'idle' | 'publishing' | 'completed'>('idle');
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const platforms = [{ id: 1, name: 'LinkedIn', icon: Linkedin, color: 'text-[#0A66C2]', bg: 'bg-[#0A66C2]/10' }, { id: 2, name: 'Twitter', icon: Twitter, color: 'text-[#1DA1F2]', bg: 'bg-[#1DA1F2]/10' }, { id: 3, name: 'Instagram', icon: Instagram, color: 'text-[#E4405F]', bg: 'bg-[#E4405F]/10' }];
  const handlePublish = () => {
    if (status === 'publishing') return;
    setStatus('publishing'); setCompletedSteps([]);
    platforms.forEach((_, index) => { setTimeout(() => { setCompletedSteps(prev => [...prev, index]); if (index === platforms.length - 1) { setTimeout(() => setStatus('completed'), 500); setTimeout(() => { setStatus('idle'); setCompletedSteps([]); }, 3000); } }, (index + 1) * 800); });
  };
  return (
    <div className="w-full mt-3 relative z-20 cursor-pointer" onClick={(e) => { e.stopPropagation(); handlePublish(); }}>
      <div className="space-y-2">
        {platforms.map((platform, index) => (
          <div key={platform.id} className="flex items-center gap-3 p-2 rounded-xl bg-gray-50 border border-gray-100 transition-all hover:border-amplify-purple/20 hover:shadow-sm group">
            <div className={`p-1.5 rounded-lg ${platform.bg} ${platform.color}`}><platform.icon size={14} /></div>
            <div className="flex-1"><div className="flex justify-between items-center mb-1"><span className="text-[10px] font-bold text-gray-700">{platform.name}</span><span className="text-[9px] font-medium text-gray-400">{completedSteps.includes(index) ? 'Published' : status === 'publishing' ? 'Sending...' : 'Scheduled'}</span></div><div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} animate={{ width: completedSteps.includes(index) ? "100%" : "0%" }} className="h-full bg-green-500" /></div></div>
            <div className="w-4 flex justify-center">{completedSteps.includes(index) && <Check size={14} className="text-green-500" />}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CopywriterWidget = () => {
  const [isLong, setIsLong] = useState(false);
  return (
    <div className="w-full h-full flex flex-col justify-between cursor-pointer" onClick={(e) => { e.stopPropagation(); setIsLong(!isLong); }}>
      <div className="flex justify-between items-start mb-2 relative z-20">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-600"><PenLine size={20} /></div>
        <div className="flex bg-gray-100 rounded-full p-0.5">
          <button className={`px-2 py-0.5 text-[9px] rounded-full transition-all ${!isLong ? 'bg-white shadow-sm text-amplify-purple font-bold' : 'text-gray-400'}`}>Short</button>
          <button className={`px-2 py-0.5 text-[9px] rounded-full transition-all ${isLong ? 'bg-white shadow-sm text-amplify-purple font-bold' : 'text-gray-400'}`}>Long</button>
        </div>
      </div>
      <div className="mb-1 relative z-10"><h4 className="font-bold text-sm text-amplify-dark">AI Copywriter</h4></div>
      <div className="flex-1 bg-gray-50 rounded-xl p-3 border border-gray-100 relative overflow-hidden group z-10">
        <AnimatePresence mode='wait'><motion.p key={isLong ? 'long' : 'short'} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[10px] text-gray-600 leading-relaxed font-medium">{isLong ? "Discover how our AI platform revolutionizes marketing workflows. Boost ROI today! 🚀📈" : "Boost your marketing ROI with our new AI platform! 🚀"}</motion.p></AnimatePresence>
        <motion.div layoutId="cursor" className="absolute bottom-3 right-3 w-1.5 h-3 bg-amplify-purple" animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} />
      </div>
    </div>
  )
}

const AnalyticsWidget = () => {
  const [metric, setMetric] = useState(0);
  const data = [{ label: "ROI", value: "+450%", sub: "Return on Ad Spend" }, { label: "CTR", value: "12.5%", sub: "Click Through Rate" }];
  const current = data[metric];
  return (
    <div className="w-full h-full relative z-10 flex flex-col items-center justify-center cursor-pointer" onClick={() => setMetric(m => m === 0 ? 1 : 0)}>
      <div className="absolute top-0 right-0 flex gap-1 z-20">
        <div className={`w-1.5 h-1.5 rounded-full ${metric === 0 ? 'bg-amplify-purple' : 'bg-gray-200'}`} />
        <div className={`w-1.5 h-1.5 rounded-full ${metric === 1 ? 'bg-amplify-purple' : 'bg-gray-200'}`} />
      </div>
      <div className="text-center mb-6 relative z-10 mt-4">
        <AnimatePresence mode='wait'>
          <motion.div key={metric} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="flex items-center justify-center gap-2 mb-1"><BarChart2 size={14} className="text-gray-400" /><span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{current.label}</span></div>
            <div className="text-4xl font-display font-bold text-[#6366F1] tracking-tight">{current.value}</div>
            <div className="text-[10px] text-gray-500 font-medium">{current.sub}</div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

const MultiModalWidget = () => {
  const [activeTab, setActiveTab] = useState<'carousel' | 'still' | 'thumbnail'>('carousel');
  const tabs = [{ id: 'carousel', label: 'Carousel', icon: Layers }, { id: 'still', label: 'Still', icon: Zap }, { id: 'thumbnail', label: 'Thumbnail', icon: ImageIcon }];
  return (
    <div className="w-full h-full flex flex-col relative z-20">
      <div className="flex justify-between items-start mb-4">
        <div><div className="flex items-center gap-2 mb-1"><Layers size={20} className="text-amplify-purple" /><h4 className="font-bold text-lg text-amplify-dark leading-tight">Multi-Modal Gen</h4></div><p className="text-xs text-gray-500 font-medium">One prompt, infinite formats.</p></div>
      </div>
      <div className="flex gap-1 bg-gray-50 p-1 rounded-xl mb-4 border border-gray-100 relative z-30">
        {tabs.map((tab) => (<button key={tab.id} onClick={() => setActiveTab(tab.id as any)} className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-[10px] font-bold transition-all ${activeTab === tab.id ? 'bg-white shadow-sm text-amplify-purple' : 'text-gray-400'}`}><tab.icon size={12} />{tab.label}</button>))}
      </div>
      <div className="flex-1 relative bg-gray-100/50 rounded-2xl border border-gray-200 overflow-hidden flex items-center justify-center group cursor-pointer shadow-inner">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#94A3B8_1px,transparent_1px)] [background-size:12px_12px]"></div>
        <AnimatePresence mode="wait">
          {activeTab === 'carousel' && <motion.div key="carousel" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3 px-4 relative z-10">
            {[1, 2, 3].map(i => (<div key={i} className="w-20 h-28 bg-white rounded-xl shadow-sm border border-gray-200 p-2.5 flex flex-col gap-2"><div className="w-full h-12 bg-gray-50 rounded-lg border border-gray-100"></div><div className="space-y-1.5"><div className="w-full h-1.5 bg-gray-200 rounded-full"></div><div className="w-2/3 h-1.5 bg-gray-200 rounded-full"></div></div></div>))}
          </motion.div>}
          {/* Other tabs simplified for space */}
          {activeTab !== 'carousel' && <div className="text-xs text-gray-400">Preview</div>}
        </AnimatePresence>
      </div>
    </div>
  );
};


// --- MAIN COMPONENT ---

const BentoGrid: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <section className="w-full py-24 px-6 bg-[#F8FAFC] text-amplify-dark overflow-hidden relative selection:bg-amplify-purple/20 perspective-[2000px]">
      <div className="absolute inset-0 pointer-events-none"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amplify-purple/5 rounded-full blur-[120px]" /></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>

          {/* --- COL 1: Planning & Scripts --- */}
          <div className="flex flex-col gap-4 md:gap-6">
            {/* Video Scripts */}
            <TiltCard className="flex-1 min-h-[300px] bg-white rounded-[32px] p-6 flex flex-col border border-white shadow-sm hover:shadow-md">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-amplify-coral/10 rounded-lg text-amplify-coral"><Clapperboard size={20} /></div>
                <h3 className="font-bold text-lg">Video Scripts</h3>
              </div>
              <ScriptTimelineWidget />
            </TiltCard>

            {/* Campaign Planner (NEW) */}
            <TiltCard className="h-[280px] bg-white rounded-[32px] p-6 flex flex-col border border-white shadow-sm hover:shadow-md">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-green-100 rounded-lg text-green-600"><ListTodo size={20} /></div>
                <div>
                  <h3 className="font-bold text-lg leading-tight">Campaign Planner</h3>
                  <p className="text-[10px] text-gray-500">Plan and track progress.</p>
                </div>
              </div>
              <CampaignPlannerWidget />
            </TiltCard>

            {/* Calendar */}
            <TiltCard className="h-48 bg-white rounded-[32px] p-6 flex flex-col border border-white shadow-sm hover:shadow-md">
              <div className="flex items-center gap-3 mb-1"><div className="p-2 bg-amplify-coral/10 rounded-lg text-amplify-coral"><CalendarRange size={20} /></div><h4 className="font-bold text-lg">Calendar</h4></div>
              <CalendarWidget />
            </TiltCard>
          </div>

          {/* --- COL 2 & 3: Core Engine & Visuals --- */}
          <div className="md:col-span-2 flex flex-col gap-4 md:gap-6">
            {/* Brand DNA */}
            <TiltCard className="h-[400px] bg-white rounded-[32px] border border-white shadow-lg relative overflow-hidden flex flex-col items-center pt-10">
              <div className="text-center z-10 px-4">
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-gray-50 border border-gray-100"><Fingerprint size={12} className="text-amplify-purple" /><span className="text-[10px] font-bold uppercase tracking-widest">Core Engine</span></div>
                <h2 className="text-4xl font-display font-bold mb-2">Brand DNA Engine</h2>
                <p className="text-gray-500 text-sm">Automated brand consistency.</p>
              </div>
              <div className="relative w-[300px] h-[300px] mt-auto -mb-16 flex items-center justify-center">
                <div className="w-44 h-44 rounded-full bg-[#0F172A] shadow-2xl flex items-center justify-center relative z-20">
                  <div className="absolute inset-0 bg-gradient-to-tr from-amplify-purple to-amplify-coral opacity-50 blur-xl"></div>
                </div>
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border border-dashed border-amplify-purple/30"></motion.div>
              </div>
            </TiltCard>

            {/* Split: Audience & Chat (NEW + Reorganized) */}
            <div className="h-[220px] grid grid-cols-2 gap-4 md:gap-6">
              {/* Audience Builder (NEW) */}
              <TiltCard className="bg-white rounded-[32px] p-5 flex flex-col border border-white shadow-sm hover:shadow-md relative overflow-hidden">
                <div className="flex justify-between items-start mb-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600"><Users size={16} /></div>
                </div>
                <h4 className="font-bold text-sm mb-1">Audience Builder</h4>
                <p className="text-[9px] text-gray-500 mb-2">Segment & Target.</p>
                <AudienceBuilderWidget />
              </TiltCard>

              {/* Chat Assistant (NEW) */}
              <TiltCard className="bg-white rounded-[32px] p-5 flex flex-col border border-white shadow-sm hover:shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amplify-purple/10 flex items-center justify-center text-amplify-purple"><MessageSquare size={16} /></div>
                  <h4 className="font-bold text-sm">AI Copilot</h4>
                </div>
                <ChatAssistantWidget />
              </TiltCard>
            </div>

            {/* Creative Generator (NEW) */}
            <TiltCard className="h-[250px] bg-white rounded-[32px] p-6 flex flex-col border border-white shadow-sm hover:shadow-md">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600"><Palette size={20} /></div>
                  <div>
                    <h3 className="font-bold text-lg">Creative Generator</h3>
                    <p className="text-[10px] text-gray-500">Post & Ad Visuals.</p>
                  </div>
                </div>
              </div>
              <CreativeGeneratorWidget />
            </TiltCard>
          </div>

          {/* --- COL 4: Output & Analytics --- */}
          <div className="flex flex-col gap-4 md:gap-6">
            {/* Copywriter */}
            <TiltCard className="h-32 bg-white rounded-[32px] p-5 border border-white shadow-sm hover:shadow-md"><CopywriterWidget /></TiltCard>

            {/* Analytics */}
            <TiltCard className="h-48 bg-white rounded-[32px] p-6 border border-white shadow-sm hover:shadow-md text-center"><AnalyticsWidget /></TiltCard>

            {/* Multi-Modal */}
            <TiltCard className="h-[300px] bg-white rounded-[32px] p-5 border border-white shadow-sm hover:shadow-md"><MultiModalWidget /></TiltCard>

            {/* Auto Publish & Intel (Stacked Mini) */}
            <TiltCard className="h-40 bg-white rounded-[32px] p-5 border border-white shadow-sm hover:shadow-md">
              <div className="flex items-center gap-2 mb-2"><div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center"><Send size={16} /></div><span className="font-bold text-sm">Auto-Publish</span></div>
              <AutoPublishWidget />
            </TiltCard>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default BentoGrid;

// --- Stub Exports for Backward Compatibility ---
export const CalendarVisual = () => <></>;
export const CopywriterVisual = () => <></>;
export const AnalyticsVisual = () => <></>;
export const PublishVisual = () => <></>;
export const IntelVisual = () => <></>;
export const VideoScriptVisual = () => <></>;
export const MultiModalVisual = () => <></>;
export const DNAVisual = () => <></>;