'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Shield, CreditCard, Award } from 'lucide-react';
import BillingToggle from '../pricing/BillingToggle';
import PricingCard from '../pricing/PricingCard';
import FeatureComparison from '../pricing/FeatureComparison';
import PricingFAQ from '../pricing/PricingFAQ';
import {
  StarterPlanIllustration,
  ProfessionalPlanIllustration,
  EnterprisePlanIllustration,
} from '../pricing/PlanIllustrations';
import { PricingPlan } from '../pricing/types';

const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for solo marketers and freelancers getting started',
    monthlyPrice: 29,
    annualPrice: 24,
    popular: false,
    color: '#38BDF8',
    gradient: 'from-sky-blue to-electric-purple',
    icon: <StarterPlanIllustration />,
    features: [
      { name: 'AI Content Generation', tooltip: 'Create blog posts, social media, and more' },
      { name: 'Brand DNA Extraction' },
      { name: 'Basic Analytics Dashboard' },
      { name: 'Email Support' },
      { name: '10+ Content Templates' },
      { name: 'Export to All Formats' },
    ],
    cta: {
      text: 'Start Free Trial',
      link: '/signup',
    },
    limits: {
      content: '50',
      brands: '1',
      users: '1',
    },
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'For growing teams that need advanced features and scale',
    monthlyPrice: 79,
    annualPrice: 63,
    popular: true,
    color: '#8B5CF6',
    gradient: 'from-electric-purple to-vibrant-magenta',
    icon: <ProfessionalPlanIllustration />,
    features: [
      { name: 'Everything in Starter' },
      { name: 'Advanced AI Models', tooltip: 'Access to GPT-4 and specialized models' },
      { name: 'Multi-Brand Management' },
      { name: 'Priority Support' },
      { name: 'Advanced Analytics & Reports' },
      { name: 'Campaign Orchestration' },
      { name: 'A/B Testing', tooltip: 'Test multiple content variations' },
      { name: 'API Access' },
    ],
    cta: {
      text: 'Start Free Trial',
      link: '/signup?plan=professional',
    },
    limits: {
      content: '500',
      brands: '5',
      users: '5',
    },
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For large organizations with custom needs and compliance',
    monthlyPrice: 0, // Custom pricing
    annualPrice: 0,
    popular: false,
    color: '#EC4899',
    gradient: 'from-vibrant-magenta to-amplify-coral',
    icon: <EnterprisePlanIllustration />,
    features: [
      { name: 'Everything in Professional' },
      { name: 'Unlimited Everything' },
      { name: 'White-Label Solution', tooltip: 'Rebrand the platform as your own' },
      { name: 'Dedicated Account Manager' },
      { name: 'Custom Integrations' },
      { name: 'SSO & Advanced Security' },
      { name: 'SLA Guarantee' },
      { name: 'Custom Onboarding' },
    ],
    cta: {
      text: 'Contact Sales',
      link: '/contact',
    },
    limits: {
      content: '∞',
      brands: '∞',
      users: '∞',
    },
  },
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="relative py-20 bg-gradient-to-b from-white via-light-slate/20 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-electric-purple/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-amplify-coral/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sunshine-yellow/10 to-amplify-orange/10 border border-sunshine-yellow/20 text-deep-charcoal text-sm font-medium mb-6"
          >
            <DollarSign size={16} className="text-sunshine-yellow" />
            Simple, Transparent Pricing
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-deep-charcoal tracking-tight mb-6 font-display">
            Choose Your{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amplify-coral via-electric-purple to-vibrant-magenta">
              Perfect Plan
            </span>
          </h2>

          <p className="text-xl text-slate-gray leading-relaxed mb-8">
            Start with a 14-day free trial. No credit card required. Cancel anytime.
          </p>

          {/* Trust Badges */}
          <div className="flex items-center justify-center gap-6 text-sm text-slate-gray flex-wrap">
            {[
              { icon: Shield, text: '14-day free trial' },
              { icon: CreditCard, text: 'No credit card required' },
              { icon: Award, text: '30-day money-back' },
            ].map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-2"
              >
                <badge.icon size={16} className="text-lime-green" />
                {badge.text}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Billing Toggle */}
        <BillingToggle isAnnual={isAnnual} onToggle={() => setIsAnnual(!isAnnual)} />

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              isAnnual={isAnnual}
              index={index}
            />
          ))}
        </div>

        {/* Feature Comparison */}
        <FeatureComparison />

        {/* FAQ */}
        <PricingFAQ />
      </div>
    </section>
  );
}
