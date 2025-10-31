'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Check, CheckCircle, TrendingUp, TrendingDown, Play, Calendar, ChevronRight } from 'lucide-react';
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

const useCountUp = (end: number, duration: number, isFloat = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const startTime = Date.now();
    let animationFrameId: number;

    const animateCount = () => {
      const now = Date.now();
      const progress = Math.min(1, (now - startTime) / duration);
      const current = start + progress * (end - start);

      if (isFloat) {
        setCount(parseFloat(current.toFixed(2)));
      } else {
        setCount(Math.floor(current));
      }

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animateCount);
      }
    };

    const timeout = setTimeout(() => {
      animationFrameId = requestAnimationFrame(animateCount);
    }, 1500);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration, isFloat]);

  return count;
};

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
            <Button size="lg" variant="outline" className="btn-secondary group inline-flex items-center gap-3 px-8 py-4 bg-white hover:bg-light-slate text-deep-charcoal font-semibold rounded-2xl transition-all duration-300 border-2 border-slate-gray/20 hover:border-slate-gray/40 text-lg shadow-sm w-full sm:w-auto">
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

            <div className="px-6 pt-6 pb-4 border-b border-slate-gray/10 bg-gradient-to-r from-white/80 to-white/60">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-amplify-coral to-electric-purple flex items-center justify-center shadow-lg shadow-amplify-coral/20">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold tracking-tight text-deep-charcoal font-display">Campaign Performance</div>
                    <div className="text-sm text-slate-gray">Multi-channel analytics overview</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-lime-green/10 to-lime-green/5 border border-lime-green/20">
                    <div className="h-2 w-2 rounded-full bg-lime-green animate-pulse-glow"></div>
                    <span className="text-sm text-lime-green font-medium">Live</span>
                  </div>
                  <Button variant="outline" className="h-9 px-4 rounded-xl bg-white/80 text-slate-gray hover:bg-white/90 hover:text-deep-charcoal transition-all duration-200 border-slate-gray/10 text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    Last 30 Days
                  </Button>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-8 bg-gradient-to-br from-white/60 to-white/40">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 dashboard-grid">
                <div className="p-4 sm:p-6 rounded-2xl bg-white/80 border border-amplify-coral/20 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden shimmer-effect">
                  <div className="text-3xl sm:text-4xl font-bold text-amplify-coral mb-2 font-display">+{engagement}%</div>
                  <div className="text-sm text-slate-gray">Campaign Engagement</div>
                  <div className="flex items-center gap-1 mt-2">
                    <TrendingUp className="h-3.5 w-3.5 text-lime-green" />
                    <span className="text-xs text-lime-green">+24% vs last month</span>
                  </div>
                </div>
                <div className="p-4 sm:p-6 rounded-2xl bg-white/80 border border-electric-purple/20 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden shimmer-effect">
                  <div className="text-3xl sm:text-4xl font-bold text-electric-purple mb-2 font-display">{reach}M</div>
                  <div className="text-sm text-slate-gray">Total Reach</div>
                  <div className="flex items-center gap-1 mt-2">
                    <TrendingUp className="h-3.5 w-3.5 text-lime-green" />
                    <span className="text-xs text-lime-green">Across 5 platforms</span>
                  </div>
                </div>
                <div className="p-4 sm:p-6 rounded-2xl bg-white/80 border border-sky-blue/20 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden shimmer-effect hidden md:block">
                  <div className="text-3xl sm:text-4xl font-bold text-sky-blue mb-2 font-display">${cpc}</div>
                  <div className="text-sm text-slate-gray">Avg. Cost Per Click</div>
                  <div className="flex items-center gap-1 mt-2">
                    <TrendingDown className="h-3.5 w-3.5 text-vibrant-magenta" />
                    <span className="text-xs text-vibrant-magenta">-12% cost reduction</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  { color: 'amplify-coral', platform: 'Instagram', value: '24.7%', delay: 1.7 },
                  { color: 'sky-blue', platform: 'LinkedIn', value: '18.3%', delay: 1.8 },
                  { color: 'electric-purple', platform: 'Google Ads', value: '22.1%', delay: 1.9 },
                  { color: 'vibrant-magenta', platform: 'Meta', value: '19.6%', delay: 2.0 },
                  { color: 'lime-green', platform: 'TikTok', value: '15.3%', delay: 2.1 },
                ].map(item => (
                  <div key={item.platform}
                    className={cn("px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-transparent to-transparent border text-xs sm:text-sm font-medium text-deep-charcoal opacity-0", isMounted && "animate-fadeIn")}
                    style={
                      {
                        '--tw-gradient-from': `hsl(var(--${item.color})) / 10%`,
                        '--tw-gradient-to': `hsl(var(--${item.color})) / 5%`,
                        'borderColor': `hsl(var(--${item.color})) / 20%`,
                        'animationDelay': `${item.delay}s`,
                        'animationFillMode': 'forwards',
                      } as React.CSSProperties
                    }
                  >
                    <span style={{ color: `hsl(var(--${item.color}))` }}>●</span> {item.platform} • {item.value}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
