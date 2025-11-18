'use client';

import { motion } from 'framer-motion';
import {
  BrainCircuit,
  Sparkles,
  Layers,
  Send,
  BarChart3,
  GitCommitVertical,
} from 'lucide-react';
import React from 'react';

const features = [
  {
    icon: BrainCircuit,
    title: 'Brand DNA Extraction',
    description:
      'Automatically analyze and extract brand identity from websites, documents, and social media.',
    gradient: 'from-electric-purple/20 to-vibrant-magenta/20',
  },
  {
    icon: Sparkles,
    title: 'Multi-Channel Content',
    description:
      'Create text, images, videos, and audio content powered by AI.',
    gradient: 'from-vibrant-magenta/20 to-amplify-coral/20',
  },
  {
    icon: Layers,
    title: 'Campaign Orchestration',
    description:
      'Plan, schedule, and manage marketing campaigns across platforms.',
    gradient: 'from-amplify-coral/20 to-sunshine-yellow/20',
  },
  {
    icon: Send,
    title: 'Direct Publishing',
    description:
      'Publish content directly to social media, websites, and marketing channels.',
    gradient: 'from-sky-blue/20 to-lime-green/20',
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description:
      'Real-time analytics and performance monitoring with AI insights.',
    gradient: 'from-lime-green/20 to-sunshine-yellow/20',
  },
  {
    icon: GitCommitVertical,
    title: 'AI Optimization',
    description:
      'Continuous optimization based on performance data and feedback loops.',
    gradient: 'from-electric-purple/20 to-sky-blue/20',
  },
];

const FeatureCard = ({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) => {
  const Icon = feature.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative p-px rounded-2xl overflow-hidden"
    >
      <div
        className="relative p-8 rounded-[15px] h-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm
                   border border-slate-gray/10"
      >
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px at center, ${feature.gradient.split(' ')[0].replace('from-', '')} 0%, transparent 80%)`,
          }}
        />

        <div className="relative z-10">
          <div
            className={`mb-4 inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-br ${feature.gradient} text-white shadow-lg`}
          >
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold font-display text-deep-charcoal mb-2">
            {feature.title}
          </h3>
          <p className="text-slate-gray">{feature.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold font-display text-deep-charcoal tracking-tight"
          >
            A Smarter Way to Market
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl text-slate-gray"
          >
            AmplifyAI combines all your marketing tools into one intelligent
            platform.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <FeatureCard feature={feature} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
