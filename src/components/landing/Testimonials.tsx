// src/components/landing/Testimonials.tsx
'use client';

import { StaggerTestimonials } from '@/components/ui/stagger-testimonials';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-gradient-to-b from-light-slate/20 via-white to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl md:text-6xl font-bold font-display text-deep-charcoal tracking-tight">
            <span className="text-gradient">Trusted by Brands</span> That Move Fast
          </h2>
          <p className="mt-4 text-xl text-slate-gray">
            Hear from marketing leaders who are scaling their brands with AmplifyAI.
          </p>
        </div>

        <StaggerTestimonials />

      </div>
    </section>
  );
};
