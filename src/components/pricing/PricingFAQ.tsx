'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'What happens after my 14-day free trial?',
    answer: 'After your trial ends, you can choose to upgrade to a paid plan. Your data and content will be saved, and you can continue right where you left off. No credit card required during trial.',
  },
  {
    question: 'Can I change plans later?',
    answer: 'Absolutely! You can upgrade, downgrade, or cancel your plan at any time. When you upgrade, you\'ll be prorated for the remaining billing period. Downgrades take effect at the next billing cycle.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, American Express, Discover) and PayPal. Enterprise customers can also pay via wire transfer or purchase order.',
  },
  {
    question: 'Is there a money-back guarantee?',
    answer: 'Yes! We offer a 30-day money-back guarantee on all annual plans. If you\'re not satisfied within the first 30 days, contact us for a full refund—no questions asked.',
  },
  {
    question: 'Do you offer discounts for nonprofits or education?',
    answer: 'Yes, we provide 40% discounts for registered nonprofits and educational institutions. Contact our sales team with your documentation to qualify.',
  },
  {
    question: 'What happens to my content if I cancel?',
    answer: 'You can export all your content and brand data before canceling. After cancellation, your account will be in read-only mode for 30 days, giving you time to download everything. After 30 days, data is permanently deleted.',
  },
];

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky-blue/10 to-electric-purple/10 border border-sky-blue/20 text-deep-charcoal text-sm font-medium mb-4">
          <HelpCircle size={16} className="text-sky-blue" />
          Frequently Asked Questions
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-deep-charcoal font-display">
          Got Questions? We've Got Answers
        </h2>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl border-2 border-slate-gray/10 overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-light-slate/50 transition-colors"
            >
              <span className="text-lg font-semibold text-deep-charcoal pr-8">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 text-electric-purple"
              >
                <ChevronDown size={24} />
              </motion.div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6 text-slate-gray leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
