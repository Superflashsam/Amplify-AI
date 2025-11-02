'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Wand2, Recycle, Calendar, BarChart3, Library, Zap } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const features = [
  {
    title: 'Brand DNA Extraction',
    benefit: 'Learn Your Brand Voice in 60 Seconds',
    description: 'Automatically extract tone, style, and messaging from your existing content. Save 15+ hours of brand guide creation.',
    Icon: Brain,
    color: 'electric-purple',
    imgId: 'featureBrandDNA',
  },
  {
    title: 'AI Content Studio',
    benefit: 'Generate 10x Faster Than Writing Manually',
    description: 'Turn simple briefs into complete campaigns. Get 50+ variations, hooks, and CTAs in under 2 minutes.',
    Icon: Wand2,
    color: 'amplify-coral',
    imgId: 'featureContentStudio',
  },
  {
    title: 'Content Repurpose Engine',
    benefit: 'Turn 1 Blog Into 20+ Social Posts',
    description: 'Paste any long-form content and instantly slice it into social captions, email sequences, and ad hooks.',
    Icon: Recycle,
    color: 'sky-blue',
    imgId: 'featureRepurposeEngine',
  },
  {
    title: 'Smart Scheduler',
    benefit: 'Publish at Peak Engagement Times',
    description: 'AI-suggested optimal posting times across all channels. 40% higher engagement rates on average.',
    Icon: Calendar,
    color: 'lime-green',
    imgId: 'featureSmartScheduler',
  },
  {
    title: 'Performance Analytics',
    benefit: 'Track ROI Down to Every Post',
    description: 'Monitor engagement, clicks, and conversions. Identify your top-performing content patterns.',
    Icon: BarChart3,
    color: 'sunshine-yellow',
    imgId: 'featurePerformanceAnalytics',
  },
  {
    title: 'Template Library',
    benefit: 'Professional Designs in 1-Click',
    description: '50+ proven templates for every industry. Auto-branded visuals without design skills required.',
    Icon: Library,
    color: 'vibrant-magenta',
    imgId: 'featureTemplateLibrary',
  },
];

const FeatureCard = ({ feature, isActive, onClick }: { feature: any; isActive: boolean; onClick: () => void }) => {
  const { Icon, benefit, description, color } = feature;
  return (
    <motion.div
      layout
      onClick={onClick}
      className={cn(
        "relative p-6 rounded-2xl cursor-pointer transition-all duration-300",
        isActive ? "bg-white shadow-lg" : "bg-light-slate/50 hover:bg-white/70"
      )}
    >
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
        style={{ backgroundColor: `hsl(var(--${color}))` }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isActive ? 1 : 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />
      <div className="flex items-start gap-4">
        <motion.div
          className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
          style={{
            backgroundColor: isActive ? `hsla(var(--${color}-hsl), 0.1)` : 'hsl(var(--light-slate))',
            color: `hsl(var(--${color}))`
          }}
          animate={{ scale: isActive ? 1.1 : 1 }}
        >
          <Icon size={24} />
        </motion.div>
        <div>
          <h3 className={cn("text-lg font-bold font-display transition-colors", isActive ? "text-deep-charcoal" : "text-slate-gray")}>
            {benefit}
          </h3>
          <AnimatePresence>
            {isActive && (
              <motion.p
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: '0.5rem' }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                className="text-sm text-slate-gray leading-relaxed"
              >
                {description}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default function InteractiveFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);
  const hoverRef = useRef(false);
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!hoverRef.current) {
        setActiveIndex((prev) => (prev + 1) % features.length);
      }
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleFeatureClick = (index: number) => {
    setActiveIndex(index);
    clearInterval(intervalRef.current);
  };

  const activeFeature = features[activeIndex];
  const featureImage = PlaceHolderImages.find(p => p.id === activeFeature.imgId);

  return (
    <section id="features" className="py-24 sm:py-32 bg-gradient-to-b from-white to-sky-blue/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-semibold text-white bg-amplify-coral rounded-full mb-4 uppercase tracking-wider">
            Powerful Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-deep-charcoal mb-4 font-display">
            The AI Marketing Platform You've Been Waiting For
          </h2>
          <p className="text-lg text-slate-gray">
            Explore the features that make AmplifyAI the most powerful and intuitive AI marketing solution on the market.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 lg:gap-16 items-start">
          <div
            className="space-y-4"
            onMouseEnter={() => (hoverRef.current = true)}
            onMouseLeave={() => (hoverRef.current = false)}
          >
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                feature={feature}
                isActive={activeIndex === index}
                onClick={() => handleFeatureClick(index)}
              />
            ))}
          </div>
          <div className="sticky top-24 mt-12 lg:mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl shadow-slate-gray/20 border-4 border-white"
              >
                {featureImage && (
                    <Image
                        src={featureImage.imageUrl}
                        alt={activeFeature.title}
                        fill
                        className="object-cover"
                        data-ai-hint={featureImage.imageHint}
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-bold text-white font-display drop-shadow-md">
                    {activeFeature.benefit}
                  </h3>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
