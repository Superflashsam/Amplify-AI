
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Minus, Sparkles, ChevronDown, Zap, RefreshCw, ShieldCheck, Users } from 'lucide-react';

const PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    desc: 'For creators & solo marketers just getting started.',
    priceMonthly: 29,
    priceYearly: 19,
    features: [
      '20 AI-generated posts/month',
      '1 brand workspace',
      'Multi-platform publishing',
      'Stock assets access',
      'AI caption + hashtag generator',
      'Basic analytics'
    ],
    cta: 'Start Free',
    popular: false,
    gradient: 'from-gray-100 to-gray-200'
  },
  {
    id: 'growth',
    name: 'Growth',
    desc: 'Most popular for startups and agencies.',
    priceMonthly: 69,
    priceYearly: 49,
    features: [
      'Unlimited AI posts & scheduling',
      'Full Creative Studio access',
      'AI Strategy Calendar 30+ days',
      'Collaboration for 5 users',
      'AI Optimization Engine',
      'Performance analytics & reporting',
      'Automation workflows',
      'Priority support'
    ],
    cta: 'Try 14-Day Pro Trial',
    popular: true,
    gradient: 'from-primary to-secondary'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    desc: 'For large teams managing multiple brands.',
    priceMonthly: null, // Custom
    priceYearly: null,
    features: [
      'Unlimited brands & users',
      'SSO & advanced permissions',
      'Dedicated AI training',
      'Custom voice model',
      'Dedicated success manager',
      'API access & integrations',
      'SOC2-ready compliance'
    ],
    cta: 'Book Demo',
    popular: false,
    gradient: 'from-blue-600 to-indigo-600'
  }
];

const FEATURES_TABLE = [
  { feature: 'AI Content Library', starter: 'Basic', growth: 'Pro', enterprise: 'Custom' },
  { feature: 'Image & Video Creative Studio', starter: false, growth: true, enterprise: true },
  { feature: 'Team Collaboration', starter: false, growth: '5 seats', enterprise: 'Unlimited' },
  { feature: 'Automation Workflows', starter: false, growth: true, enterprise: 'Advanced' },
  { feature: 'Real-time Analytics', starter: 'Basic', growth: 'Pro', enterprise: 'Full Control' },
  { feature: 'Custom Brand Voice', starter: false, growth: true, enterprise: 'Custom training' },
  { feature: 'API & Integrations', starter: false, growth: false, enterprise: true },
  { feature: '24/7 Support', starter: 'Community', growth: 'Priority', enterprise: 'White-glove' },
];

const FAQS = [
  {
    icon: Zap,
    q: "What happens when I exceed the limits on my plan?",
    a: "If you reach your limit, we'll notify you. You can either upgrade to the next tier or pay a small overage fee for additional posts. We never pause your campaigns without warning."
  },
  {
    icon: RefreshCw,
    q: "Can I switch plans anytime?",
    a: "Yes, absolutely. You can upgrade or downgrade your plan at any time. Prorated charges or credits will be applied automatically to your next billing cycle."
  },
  {
    icon: ShieldCheck,
    q: "Is Amplify secure for enterprise deployments?",
    a: "Yes. We are SOC2 Type II compliant and use enterprise-grade encryption for all data. We also offer SSO and custom SLAs for Enterprise plans."
  },
  {
    icon: Users,
    q: "Do you offer onboarding?",
    a: "Growth plans include a self-guided onboarding tour. Enterprise plans come with a dedicated success manager who will help you set up workspaces, train the AI on your voice, and onboard your team."
  }
];

export const PricingSection: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="pricing" className="pt-12 pb-24 md:pt-20 md:pb-32 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b from-purple-50/50 to-transparent" />
        <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[100px]" />
        <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] bg-pink-100/30 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-dark mb-6 tracking-tight">
            Choose the plan that <span className="gradient-text">grows</span> with you
          </h2>
          <p className="text-xl text-gray-500 leading-relaxed mb-10">
            Scalable AI power for creators, teams, and enterprises — pay only for the features you need.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-bold ${!isAnnual ? 'text-dark' : 'text-gray-400'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-8 bg-gray-200 rounded-full p-1 cursor-pointer transition-colors duration-300 hover:bg-gray-300 focus:outline-none"
            >
              <motion.div
                className="w-6 h-6 bg-white rounded-full shadow-md"
                animate={{ x: isAnnual ? 32 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`text-sm font-bold ${isAnnual ? 'text-dark' : 'text-gray-400'}`}>
              Yearly <span className="text-xs text-green-600 font-extrabold bg-green-50 px-2 py-0.5 rounded-full ml-1">-30%</span>
            </span>
          </div>
        </div>

        {/* PRICING CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-32">
          {PLANS.map((plan) => (
            <motion.div
              key={plan.id}
              whileHover={{ y: -8 }}
              className={`relative bg-white/60 backdrop-blur-xl rounded-3xl p-8 border ${plan.popular ? 'border-purple-200 shadow-xl shadow-purple-500/10' : 'border-gray-200 shadow-lg'} flex flex-col h-full`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-primary/30 flex items-center gap-1 whitespace-nowrap z-20">
                  <Sparkles size={12} fill="currentColor" /> MOST POPULAR
                </div>
              )}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-transparent rounded-3xl -z-10" />
              )}

              <div className="mb-6">
                <h3 className="font-display font-bold text-2xl text-dark mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-500 min-h-[40px]">{plan.desc}</p>
              </div>

              <div className="mb-8">
                {plan.priceMonthly !== null ? (
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-display font-bold text-dark tracking-tight">
                      ${isAnnual ? plan.priceYearly : plan.priceMonthly}
                    </span>
                    <span className="text-gray-400 font-medium mb-1">/month</span>
                  </div>
                ) : (
                  <div className="text-4xl font-display font-bold text-dark tracking-tight">Custom</div>
                )}
                {plan.priceMonthly !== null && isAnnual && (
                  <div className="text-xs text-green-600 font-bold mt-1">
                    Billed ${plan.priceYearly! * 12} yearly
                  </div>
                )}
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {plan.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${plan.popular ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-500'}`}>
                      <Check size={10} strokeWidth={3} />
                    </div>
                    <span className="leading-tight">{feat}</span>
                  </div>
                ))}
              </div>

              <button className={`group relative w-full py-4 rounded-xl font-bold text-sm transition-all duration-300 transform active:scale-[0.98] overflow-hidden ${plan.popular
                ? 'btn-gradient text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 focus-ring'
                : plan.id === 'enterprise'
                  ? 'bg-dark text-white hover:bg-gray-800 focus-ring'
                  : 'bg-white border border-gray-200 text-dark hover:border-primary/50 hover:text-primary focus-ring'
                }`}>
                {plan.popular && (
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                )}
                <span className={plan.popular ? 'relative z-10 btn-text-glow playfair-cta whitespace-nowrap' : 'playfair-cta'}>{plan.cta} {plan.popular && '→'}</span>
              </button>
            </motion.div>
          ))}
        </div>

        {/* COMPARISON TABLE */}
        <div className="mb-32 overflow-hidden">
          <h3 className="font-display font-bold text-2xl text-center mb-12">Compare Features</h3>

          <div className="overflow-x-auto pb-4">
            <div className="min-w-[800px]">
              {/* Table Header */}
              <div className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-gray-200 bg-gray-50/50 rounded-t-2xl">
                <div className="font-bold text-gray-500 uppercase text-xs tracking-wider">Feature</div>
                <div className="font-bold text-gray-900 text-center">Starter</div>
                <div className="font-bold text-primary text-center">Growth</div>
                <div className="font-bold text-gray-900 text-center">Enterprise</div>
              </div>

              {/* Rows */}
              <div className="bg-white border border-gray-200 border-t-0 rounded-b-2xl shadow-sm divide-y divide-gray-100">
                {FEATURES_TABLE.map((row, i) => (
                  <div key={i} className="grid grid-cols-4 gap-4 px-6 py-4 hover:bg-gray-50 transition-colors group">
                    <div className="font-medium text-sm text-gray-700 flex items-center">{row.feature}</div>

                    {/* Starter */}
                    <div className="text-center text-sm text-gray-600 flex justify-center items-center">
                      {row.starter === true ? <Check size={18} className="text-green-500" /> :
                        row.starter === false ? <Minus size={18} className="text-gray-300" /> :
                          row.starter}
                    </div>

                    {/* Growth */}
                    <div className="text-center text-sm font-bold text-dark flex justify-center items-center bg-purple-50/50 -my-4 py-4 group-hover:bg-purple-50 transition-colors">
                      {row.growth === true ? <Check size={18} className="text-primary" /> :
                        row.growth === false ? <Minus size={18} className="text-gray-300" /> :
                          row.growth}
                    </div>

                    {/* Enterprise */}
                    <div className="text-center text-sm text-gray-600 flex justify-center items-center">
                      {row.enterprise === true ? <Check size={18} className="text-blue-600" /> :
                        row.enterprise === false ? <Minus size={18} className="text-gray-300" /> :
                          row.enterprise}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ ACCORDION */}
        <div className="max-w-2xl mx-auto mb-32">
          <h3 className="font-display font-bold text-3xl text-center mb-12">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === i ? 'border-primary/20 bg-purple-50/10 shadow-lg shadow-primary/5' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left group"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2.5 rounded-xl transition-all duration-300 ${openFaq === i ? 'bg-gradient-to-br from-primary to-secondary text-white shadow-md' : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'}`}>
                      <faq.icon size={20} />
                    </div>
                    <span className={`font-bold text-lg transition-colors duration-300 ${openFaq === i ? 'text-dark' : 'text-gray-700'}`}>{faq.q}</span>
                  </div>
                  <div className={`p-2 rounded-full transition-colors duration-300 ${openFaq === i ? 'bg-primary/10 text-primary' : 'text-gray-400'}`}>
                    <ChevronDown size={20} className={`transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-5 pb-6 pl-[4.5rem] pr-8 text-gray-600 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
