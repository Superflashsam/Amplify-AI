'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import DemoForm from './demo/DemoForm';
import BrandLogoMarquee from './socialProof/BrandLogoMarquee';

export default function ContactDemo() {
  const benefits = [
    'Deliver context-rich, on-brand content, consistently and at scale',
    'Increase campaign velocity and impact across your team',
    'Scale an AI program in marketing that delivers real ROI',
  ];

  return (
    <section id="contact-demo" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Value Proposition */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-deep-charcoal mb-6 font-display leading-tight">
              Get a demo of the AI platform built{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amplify-coral to-electric-purple">
                exclusively for marketing teams
              </span>
            </h2>
            <p className="text-lg text-slate-gray mb-8">
              Get a demo to better understand how to:
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle size={24} className="text-lime-green mt-1 flex-shrink-0" />
                  <span className="text-slate-gray">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column: Demo Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <DemoForm />
          </motion.div>
        </div>

        {/* Brand Logo Marquee */}
        <div className="mt-24">
          <BrandLogoMarquee />
        </div>
      </div>
    </section>
  );
}
