'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Check, CheckCircle, TrendingUp, TrendingDown, Play, Calendar, ChevronRight, Sparkles, MessageSquare, Link2, Users } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { MovingBorderButton } from '@/components/ui/moving-border';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
} from 'recharts';

const useCountUp = (end: number, duration: number, isFloat = false) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const startTime = Date.now();
          let animationFrameId: number;

          const animateCount = () => {
            const now = Date.now();
            const progress = Math.min(1, (now - startTime) / duration);
            const current = start + progress * (end - start);

            if (isFloat) {
              setCount(parseFloat(current.toFixed(1)));
            } else {
              setCount(Math.floor(current));
            }

            if (progress < 1) {
              animationFrameId = requestAnimationFrame(animateCount);
            }
          };
          animationFrameId = requestAnimationFrame(animateCount);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [end, duration, isFloat]);

  return <span ref={ref}>{count}</span>;
};


const chartData = [
  { name: 'Jan', audience: 2400 },
  { name: 'Feb', audience: 2210 },
  { name: 'Mar', audience: 2290 },
  { name: 'Apr', audience: 2000 },
  { name: 'May', audience: 2181 },
  { name: 'Jun', audience: 2500 },
  { name: 'Jul', audience: 2100 },
];

const Hero = () => {
  const engagement = useCountUp(127, 2000);
  const reach = useCountUp(3.8, 2000, true);
  const cpc = useCountUp(2.18, 2000, true);
  const [isMounted, setIsMounted] = useState(false);
  const dashboardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setIsMounted(true);
    const ref = dashboardRef.current;
    if (!ref || window.innerWidth <= 768) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = ref.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;

      const rotateX = (y - 0.5) * -12; // Inverted for natural feel
      const rotateY = (x - 0.5) * 12;

      ref.style.setProperty('--x', `${x * 100}%`);
      ref.style.setProperty('--y', `${y * 100}%`);
      
      const dashboard3d = ref.querySelector('.dashboard-3d') as HTMLElement;
      if (dashboard3d) {
        dashboard3d.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
      }
    };
    
    const handleMouseLeave = () => {
      const dashboard3d = ref.querySelector('.dashboard-3d') as HTMLElement;
      if (dashboard3d) {
        dashboard3d.style.transform = 'rotateX(2deg) rotateY(-2deg) translateZ(0)';
      }
    };
    
    ref.addEventListener('mousemove', handleMouseMove);
    ref.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      ref.removeEventListener('mousemove', handleMouseMove);
      ref.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="relative pt-12 pb-20 overflow-hidden bg-background">
      {/* Enhanced Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-20"></div>
        <div className="absolute top-[-5%] left-[-10%] h-96 w-96 rounded-full bg-amplify-coral/10 blur-3xl animate-blob"></div>
        <div className="absolute top-[20%] right-[-5%] h-80 w-80 rounded-full bg-electric-purple/10 blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] h-72 w-72 rounded-full bg-vibrant-magenta/5 blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-[5%] right-[15%] h-64 w-64 rounded-full bg-sky-blue/10 blur-3xl animate-blob animation-delay-6000"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Link href="#" className='mb-8 inline-block'>
            <MovingBorderButton
              borderRadius="1.75rem"
              containerClassName="h-auto"
              className="bg-white/80 dark:bg-slate-900/80 text-deep-charcoal dark:text-white border-neutral-200/20 dark:border-slate-800/80 px-4 py-2"
            >
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-amplify-coral animate-pulse"></div>
                 New: Multi-channel campaign orchestration
                <ChevronRight className="h-3.5 w-3.5 text-slate-gray" />
              </div>
            </MovingBorderButton>
          </Link>
          

          <h1 className="text-5xl md:text-7xl animate-slideUp text-deep-charcoal tracking-tight font-display mb-6 font-bold" style={{animationDelay: '0.4s'}}>
            Amplify Your Brand<br/>
            <span className="text-gradient font-bold">With AI-Powered Marketing</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-gray mb-8 leading-relaxed animate-slideUp max-w-3xl mx-auto" style={{animationDelay: '0.6s'}}>
            Generate on-brand content, orchestrate campaigns across all channels, and track performance—all powered by intelligent AI that learns and optimizes for your success.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slideUp hero-cta-stack" style={{animationDelay: '0.8s'}}>
            <Button size="lg" className="btn-primary group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amplify-coral to-electric-purple hover:shadow-xl text-white font-semibold rounded-2xl shadow-lg shadow-amplify-coral/30 transition-all duration-300 text-lg w-full sm:w-auto">
              Get Started Free
              <ChevronRight className="h-5 w-5 btn-arrow" />
            </Button>
            <Button size="lg" className="btn-secondary group inline-flex items-center gap-3 px-8 py-4 bg-white hover:bg-light-slate text-deep-charcoal font-semibold rounded-2xl transition-all duration-300 border-2 border-slate-gray/20 hover:border-slate-gray/40 text-lg shadow-sm w-full sm:w-auto">
              <Play className="h-5 w-5 btn-arrow" />
              Watch Demo
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 sm:gap-8 mt-12 text-sm text-slate-gray animate-fadeIn flex-wrap" style={{animationDelay: '1s'}}>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                   <Badge variant="outline" className="bg-background/60 backdrop-blur-sm">
                      <Check className="h-4 w-4 mr-2 text-lime-green animate-pulse" />
                      No credit card required
                   </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Start your trial instantly, no payment details needed.</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Badge variant="outline" className="bg-background/60 backdrop-blur-sm">
                    <CheckCircle className="h-4 w-4 mr-2 text-lime-green animate-pulse" />
                    14-day free trial
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Explore all features for two weeks, completely free.</p>
                </TooltipContent>
              </Tooltip>
               <Tooltip>
                <TooltipTrigger>
                   <Badge variant="outline" className="bg-background/60 backdrop-blur-sm">
                      <TrendingUp className="h-4 w-4 mr-2 text-lime-green animate-pulse" />
                      Setup in 5 minutes
                   </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Connect your brand and start generating content fast.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        {/* Hero Dashboard Preview */}
        <div ref={dashboardRef} className={cn("relative max-w-6xl mx-auto transition-transform duration-300 ease-out perspective-container", isMounted && "animate-slideUp [animation-duration:1s] [animation-delay:1.2s]")}>
          <div className="absolute -inset-4 bg-gradient-to-r from-amplify-coral/20 via-electric-purple/20 to-vibrant-magenta/20 rounded-3xl blur-3xl opacity-60 animate-dashboard-float"></div>
          <div className="dashboard-3d relative shadow-2xl shadow-slate-gray/20 border-2 border-white/20 overflow-hidden bg-white/60 backdrop-blur-xl rounded-3xl transition-all duration-300 group">
             {/* Glow effect */}
            <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(400px_at_var(--x)_var(--y),rgba(255,255,255,0.3),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

            <div className="flex flex-col md:flex-row">
              {/* Left Sidebar */}
              <div className="w-full md:w-64 p-6 border-b md:border-r border-slate-gray/10 bg-white/60 flex-shrink-0">
                <div className="flex items-center gap-2 mb-8">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-amplify-coral to-electric-purple flex items-center justify-center shadow-lg shadow-amplify-coral/20">
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>
                  <div className="text-lg font-semibold tracking-tight text-deep-charcoal font-display">Amplify</div>
                </div>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start bg-slate-gray/10 text-deep-charcoal">Dashboard</Button>
                  <Button variant="ghost" className="w-full justify-start">Campaigns</Button>
                  <Button variant="ghost" className="w-full justify-start">Content</Button>
                  <Button variant="ghost" className="w-full justify-start">Analytics</Button>
                  <Button variant="ghost" className="w-full justify-start">Settings</Button>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-bold font-display text-deep-charcoal">Dashboard</h2>
                    <p className="text-sm text-slate-gray">Welcome back, marketer!</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="bg-white/80">Export</Button>
                    <Button size="sm" className="bg-gradient-to-r from-amplify-coral to-electric-purple text-white">New Campaign</Button>
                  </div>
                </div>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-white/80 border border-slate-gray/10">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="h-4 w-4 text-lime-green" />
                      <p className="text-sm font-semibold text-deep-charcoal">Engagement</p>
                    </div>
                    <p className="text-2xl font-bold font-display text-deep-charcoal">+{engagement}%</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/80 border border-slate-gray/10">
                    <div className="flex items-center gap-2 mb-1">
                      <Users className="h-4 w-4 text-sky-blue" />
                      <p className="text-sm font-semibold text-deep-charcoal">Reach</p>
                    </div>
                    <p className="text-2xl font-bold font-display text-deep-charcoal">{reach}M</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/80 border border-slate-gray/10">
                     <div className="flex items-center gap-2 mb-1">
                      <TrendingDown className="h-4 w-4 text-vibrant-magenta" />
                      <p className="text-sm font-semibold text-deep-charcoal">CPC</p>
                    </div>
                    <p className="text-2xl font-bold font-display text-deep-charcoal">${cpc}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/80 border border-slate-gray/10">
                     <div className="flex items-center gap-2 mb-1">
                      <MessageSquare className="h-4 w-4 text-amplify-orange" />
                      <p className="text-sm font-semibold text-deep-charcoal">Mentions</p>
                    </div>
                    <p className="text-2xl font-bold font-display text-deep-charcoal">1.2k</p>
                  </div>
                </div>
                
                {/* Chart and Recent Activity */}
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 p-4 rounded-xl bg-white/80 border border-slate-gray/10">
                    <h3 className="text-md font-semibold text-deep-charcoal mb-2">Audience Growth</h3>
                    <div className="h-[200px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={chartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border) / 0.5)" />
                          <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                          <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                          <RechartsTooltip 
                            contentStyle={{
                              background: "hsl(var(--background))",
                              border: "1px solid hsl(var(--border))",
                              borderRadius: "var(--radius)",
                            }}
                          />
                          <Line type="monotone" dataKey="audience" stroke="hsl(var(--electric-purple))" strokeWidth={2} dot={{ r: 4, fill: "hsl(var(--electric-purple))" }} activeDot={{ r: 6 }} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/80 border border-slate-gray/10">
                    <h3 className="text-md font-semibold text-deep-charcoal mb-4">Campaigns</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                           <div className="w-2 h-2 rounded-full bg-lime-green"></div>
                           <span>Summer Sale</span>
                        </div>
                        <span className="font-semibold">Live</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                         <div className="flex items-center gap-2">
                           <div className="w-2 h-2 rounded-full bg-sunshine-yellow"></div>
                           <span>Q3 Product Launch</span>
                        </div>
                        <span className="text-slate-gray">Draft</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                         <div className="flex items-center gap-2">
                           <div className="w-2 h-2 rounded-full bg-vibrant-magenta"></div>
                           <span>Holiday Giveaway</span>
                        </div>
                        <span className="text-slate-gray">Ended</span>
                      </div>
                       <div className="flex items-center justify-between text-sm">
                         <div className="flex items-center gap-2">
                           <div className="w-2 h-2 rounded-full bg-lime-green"></div>
                           <span>New Year Promo</span>
                        </div>
                        <span className="font-semibold">Live</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
