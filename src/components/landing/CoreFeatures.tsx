'use client';

import { motion } from 'framer-motion';
import {
  Zap,
  CheckCircle,
  LayoutGrid,
  Bot,
  Plug,
  BarChart2,
  Shield,
  Lock,
  Terminal,
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '../ui/card';

const featuresData = [
  {
    value: 'core',
    title: 'Core Pillars',
    icon: <LayoutGrid size={20} />,
    color: 'text-amplify-coral',
    items: [
      {
        title: 'Brand DNA Intake',
        description:
          'URL import, tone sliders, audience profiles, and banned words to ground generation.',
      },
      {
        title: 'Content Studio',
        description:
          'Brief-to-draft generator for posts, ads, and emails with 1-click style variants.',
      },
      {
        title: 'Repurpose Engine',
        description: 'Paste a long-form text and auto-slice it into captions, threads, and teasers.',
      },
      {
        title: 'Templates Library',
        description: 'High-performing templates for Instagram, LinkedIn, Twitter, and more.',
      },
      {
        title: 'Approval Workflow',
        description:
          'Draft, comment, approve, and schedule with version history and change comparison.',
      },
      {
        title: 'Scheduler & Queue',
        description:
          'Calendar view with best-time suggestions and time-zone-aware posting.',
      },
      {
        title: 'Asset Hub',
        description: 'Upload logos, brand colors, and product shots with auto-resizing and cropping.',
      },
      {
        title: 'Performance Snippets',
        description:
          'UTM generator, shareable links, and tracking for clicks and post KPIs.',
      },
    ],
  },
  {
    value: 'ai',
    title: 'AI Assistance',
    icon: <Bot size={20} />,
    color: 'text-electric-purple',
    items: [
      {
        title: 'Brief Assist',
        description:
          'Turn a goal and audience into a smart brief with hooks and outlines.',
      },
      {
        title: 'Hook/Headline Generator',
        description:
          'Get 10 alternatives scored for curiosity and clarity with rationale.',
      },
      {
        title: 'Rewrite Modes',
        description:
          'Simplify, energize, or adopt a witty tone with localization hints.',
      },
      {
        title: 'Consistency Check',
        description: 'Scan drafts for off-brand words, tone drift, and weak CTAs.',
      },
      {
        title: 'Hashtag/Keyword Helper',
        description: 'Receive channel-specific suggestions with relevance scores.',
      },
    ],
  },
  {
    value: 'integrations',
    title: 'Integrations',
    icon: <Plug size={20} />,
    color: 'text-sky-blue',
    items: [
      {
        title: 'Social Connect',
        description: 'Publish and schedule posts to LinkedIn, X, Instagram, and Facebook.',
      },
      {
        title: 'Data Connect',
        description: 'Ingest Google Analytics 4 UTM data for click and session quality snapshots.',
      },
      {
        title: 'Storage & Import',
        description:
          'Connect a cloud bucket for assets and import content via URL or file upload.',
      },
    ],
  },
  {
    value: 'analytics',
    title: 'Analytics',
    icon: <BarChart2 size={20} />,
    color: 'text-lime-green',
    items: [
      {
        title: 'Post Outcomes',
        description:
          'Track impressions, clicks, CTR, and identify best-performing hooks and tones.',
      },
      {
        title: 'Content Leaderboard',
        description: 'Rank drafts by predicted impact and actual performance deltas.',
      },
      {
        title: 'Simple ROI Lens',
        description:
          'Monitor traffic, click-through rates, and content velocity week-over-week.',
      },
    ],
  },
  {
    value: 'governance',
    title: 'Governance & Safety',
    icon: <Shield size={20} />,
    color: 'text-sunshine-yellow',
    items: [
      {
        title: 'Review Gates',
        description:
          'Require approval for external publishing, with legal notes and compliance checklists.',
      },
      {
        title: 'Audit Trail',
        description:
          'Track who generated, edited, approved, and scheduled content, with version history.',
      },
      {
        title: 'Brand Guardrails',
        description:
          'Enforce blocked phrases, regulated-industry disclaimers, and link policies.',
      },
    ],
  },
  {
    value: 'monetization',
    title: 'Monetization & Access',
    icon: <Lock size={20} />,
    color: 'text-vibrant-magenta',
    items: [
        { title: 'Auth & Orgs', description: 'Email/Google sign-in, org workspaces, and email invites.' },
        { title: 'Plan Gating', description: 'Free trial with limits; Pro unlocks scheduler; Team adds roles.' },
        { title: 'Billing Hooks', description: 'Plan status checks on login and before publishing.' },
    ],
  },
  {
    value: 'dx',
    title: 'DX & Reliability',
    icon: <Terminal size={20} />,
    color: 'text-slate-gray',
    items: [
        { title: 'Autosave & Optimistic UI', description: 'Drafts are saved automatically with a responsive interface.' },
        { title: 'Background Jobs', description: 'Image processing and scheduled publishing with retries.' },
        { title: 'Export Options', description: 'Export calendars and assets for manual fallback.' },
    ],
  },
];

export default function CoreFeatures() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amplify-orange/10 to-vibrant-magenta/10 border border-amplify-orange/20 text-deep-charcoal text-sm font-medium mb-6"
          >
            <Zap size={16} className="text-amplify-orange" />
            Powerful Features
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-deep-charcoal tracking-tight mb-6 font-display">
            The AI Marketing Platform <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amplify-coral via-electric-purple to-vibrant-magenta">
              You've Been Waiting For
            </span>
          </h2>

          <p className="text-xl text-slate-gray leading-relaxed">
            Explore the features that make AmplifyAI the most powerful and intuitive
            AI marketing solution on the market.
          </p>
        </motion.div>

        <Tabs defaultValue="core" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 h-auto p-2">
            {featuresData.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value} className="flex-col sm:flex-row gap-2 py-2.5">
                <span className={tab.color}>{tab.icon}</span>
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {featuresData.map((tab) => (
            <TabsContent key={tab.value} value={tab.value} className="pt-12">
              <motion.div
                key={tab.value}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
              >
                {tab.items.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <Card className="h-full bg-white/50 hover:bg-white transition-all duration-300 hover:shadow-2xl hover:shadow-slate-gray/10 border-slate-gray/10 group">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                            <div className={`mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-light-slate/50 to-slate-gray/10 flex items-center justify-center ${tab.color}`}>
                                <CheckCircle size={18} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-deep-charcoal mb-2 font-display">
                                {item.title}
                                </h4>
                                <p className="text-sm text-slate-gray leading-relaxed">
                                {item.description}
                                </p>
                            </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
