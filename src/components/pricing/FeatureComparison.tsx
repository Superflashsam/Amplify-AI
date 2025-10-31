'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check, X } from 'lucide-react';

interface ComparisonFeature {
  category: string;
  features: {
    name: string;
    starter: boolean | string;
    professional: boolean | string;
    enterprise: boolean | string;
  }[];
}

const comparisonData: ComparisonFeature[] = [
  {
    category: 'Content Generation',
    features: [
      { name: 'AI Content Creation', starter: true, professional: true, enterprise: true },
      { name: 'Blog Posts', starter: '50/mo', professional: '500/mo', enterprise: 'Unlimited' },
      { name: 'Social Media Posts', starter: true, professional: true, enterprise: true },
      { name: 'Email Campaigns', starter: '10/mo', professional: '100/mo', enterprise: 'Unlimited' },
      { name: 'Video Scripts', starter: false, professional: true, enterprise: true },
      { name: 'Ad Copy', starter: false, professional: true, enterprise: true },
    ],
  },
  {
    category: 'Brand Management',
    features: [
      { name: 'Brand DNA Extraction', starter: true, professional: true, enterprise: true },
      { name: 'Number of Brands', starter: '1', professional: '5', enterprise: 'Unlimited' },
      { name: 'Brand Voice Library', starter: false, professional: true, enterprise: true },
      { name: 'Multi-Language Support', starter: false, professional: '10 languages', enterprise: 'All languages' },
    ],
  },
  {
    category: 'Analytics & Insights',
    features: [
      { name: 'Performance Dashboard', starter: true, professional: true, enterprise: true },
      { name: 'Advanced Analytics', starter: false, professional: true, enterprise: true },
      { name: 'Custom Reports', starter: false, professional: false, enterprise: true },
      { name: 'API Access', starter: false, professional: false, enterprise: true },
    ],
  },
  {
    category: 'Support',
    features: [
      { name: 'Email Support', starter: true, professional: true, enterprise: true },
      { name: 'Priority Support', starter: false, professional: true, enterprise: true },
      { name: 'Dedicated Account Manager', starter: false, professional: false, enterprise: true },
      { name: 'Custom Onboarding', starter: false, professional: false, enterprise: true },
    ],
  },
];

export default function FeatureComparison() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mt-20">
      {/* Toggle Button */}
      <div className="text-center mb-8">
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-slate-gray/20 rounded-2xl text-deep-charcoal font-semibold hover:border-electric-purple hover:bg-light-slate transition-all duration-300 shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          {isExpanded ? 'Hide' : 'Compare'} All Features
          <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown size={20} />
          </motion.div>
        </motion.button>
      </div>

      {/* Comparison Table */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden"
          >
            <div className="bg-white rounded-3xl border-2 border-slate-gray/10 shadow-xl overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-4 gap-4 p-6 bg-gradient-to-r from-light-slate to-white border-b border-slate-gray/10">
                <div className="font-bold text-deep-charcoal font-display">Features</div>
                <div className="text-center font-bold text-sky-blue-600 font-display">Starter</div>
                <div className="text-center font-bold text-electric-purple font-display">Professional</div>
                <div className="text-center font-bold text-vibrant-magenta font-display">Enterprise</div>
              </div>

              {/* Categories */}
              {comparisonData.map((category, catIndex) => (
                <div key={catIndex}>
                  {/* Category Header */}
                  <div className="px-6 py-4 bg-light-slate border-b border-slate-gray/10">
                    <h4 className="font-bold text-deep-charcoal font-display">{category.category}</h4>
                  </div>

                  {/* Features */}
                  {category.features.map((feature, featIndex) => (
                    <motion.div
                      key={featIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: (catIndex * category.features.length + featIndex) * 0.03 }}
                      className="grid grid-cols-4 gap-4 p-6 border-b border-slate-gray/5 hover:bg-light-slate/50 transition-colors"
                    >
                      <div className="text-slate-gray text-sm">{feature.name}</div>
                      
                      {/* Starter */}
                      <div className="flex justify-center">
                        {typeof feature.starter === 'boolean' ? (
                          feature.starter ? (
                            <Check size={20} className="text-lime-green" strokeWidth={3} />
                          ) : (
                            <X size={20} className="text-slate-gray/30" />
                          )
                        ) : (
                          <span className="text-sm font-semibold text-deep-charcoal">{feature.starter}</span>
                        )}
                      </div>

                      {/* Professional */}
                      <div className="flex justify-center">
                        {typeof feature.professional === 'boolean' ? (
                          feature.professional ? (
                            <Check size={20} className="text-lime-green" strokeWidth={3} />
                          ) : (
                            <X size={20} className="text-slate-gray/30" />
                          )
                        ) : (
                          <span className="text-sm font-semibold text-deep-charcoal">{feature.professional}</span>
                        )}
                      </div>

                      {/* Enterprise */}
                      <div className="flex justify-center">
                        {typeof feature.enterprise === 'boolean' ? (
                          feature.enterprise ? (
                            <Check size={20} className="text-lime-green" strokeWidth={3} />
                          ) : (
                            <X size={20} className="text-slate-gray/30" />
                          )
                        ) : (
                          <span className="text-sm font-semibold text-deep-charcoal">{feature.enterprise}</span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
