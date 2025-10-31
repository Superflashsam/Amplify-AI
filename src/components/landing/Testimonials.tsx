// src/components/landing/Testimonials.tsx
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  {
    id: 'testimonialAuthor1',
    quote: "AmplifyAI has been a game-changer for our content strategy. We're creating higher quality content in a fraction of the time. Our engagement has skyrocketed!",
    name: 'Sarah Johnson',
    title: 'Marketing Director, Nova Solutions',
    companyLogoId: 'socialProofLogo1',
    rating: 5,
  },
  {
    id: 'testimonialAuthor2',
    quote: "As an agency, managing multiple brand voices was our biggest challenge. Amplify's Brand DNA feature is pure magic. It's like having a dedicated strategist for each client.",
    name: 'Michael Chen',
    title: 'Founder, Digital Growth Co.',
    companyLogoId: 'socialProofLogo2',
    rating: 5,
  },
  {
    id: 'testimonialAuthor3',
    quote: "The analytics and AI feedback loop are incredibly powerful. We're no longer guessing what works. We're making data-driven decisions that deliver real ROI.",
    name: 'Emily Rodriguez',
    title: 'CEO, Bloom Ventures',
    companyLogoId: 'socialProofLogo3',
    rating: 5,
  },
  {
    id: 'testimonialAuthor4',
    quote: 'The platform is intuitive and the results speak for themselves. Our cost per acquisition has dropped by 30% since we started using AmplifyAI.',
    name: 'David Lee',
    title: 'Head of Growth, Apex Industries',
    companyLogoId: 'socialProofLogo4',
    rating: 4,
  },
  {
    id: 'testimonialAuthor5',
    quote: 'A must-have tool for any modern marketing team. The ability to generate multi-format content so quickly has been a huge advantage for us.',
    name: 'Jessica Williams',
    title: 'Social Media Manager, Fusion Corp',
    companyLogoId: 'socialProofLogo5',
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial, active, direction }: { testimonial: typeof testimonials[0], active: boolean, direction: number }) => {
  const authorImage = PlaceHolderImages.find(img => img.id === testimonial.id);
  const companyLogo = PlaceHolderImages.find(img => img.id === testimonial.companyLogoId);
  const cardVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <AnimatePresence initial={false} custom={direction}>
      {active && (
        <motion.div
          custom={direction}
          variants={cardVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute w-full h-full"
        >
          <div className="bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-lg rounded-3xl p-8 shadow-lg border border-white/30 h-full flex flex-col justify-between">
            <div>
              <Quote className="text-amplify-coral opacity-20 w-16 h-16 absolute -top-4 -left-4" />
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-sunshine-yellow fill-current' : 'text-slate-gray/30'}`}
                  />
                ))}
              </div>
              <blockquote className="text-lg text-deep-charcoal font-medium leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
            </div>
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-gray/10">
              {authorImage && (
                <div className="relative h-14 w-14 shrink-0">
                  <Image
                    src={authorImage.imageUrl}
                    alt={testimonial.name}
                    className="rounded-full object-cover"
                    fill
                    data-ai-hint={authorImage.imageHint}
                  />
                </div>
              )}
              <div className="flex-grow">
                <p className="font-semibold text-deep-charcoal font-display">{testimonial.name}</p>
                <p className="text-sm text-slate-gray">{testimonial.title}</p>
              </div>
              {companyLogo && (
                <div className="relative h-8 w-20 shrink-0">
                  <Image
                    src={companyLogo.imageUrl}
                    alt={`${testimonial.name}'s company logo`}
                    className="object-contain"
                    fill
                    data-ai-hint={companyLogo.imageHint}
                  />
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function Testimonials() {
  const [[page, direction], setPage] = useState([0, 0]);
  const testimonialIndex = page % testimonials.length;

  const paginate = useCallback((newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  }, [page]);

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [paginate]);

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-gradient-to-b from-light-slate/20 via-white to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl md:text-6xl font-bold font-display text-deep-charcoal tracking-tight">
            Trusted by Brands That Move Fast
          </h2>
          <p className="mt-4 text-xl text-slate-gray">
            Hear from marketing leaders who are scaling their brands with AmplifyAI.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto h-[380px] sm:h-[320px]">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              active={testimonialIndex === index}
              direction={direction}
            />
          ))}
        </div>

        <div className="flex justify-center items-center mt-8 gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const newDirection = index > testimonialIndex ? 1 : -1;
                setPage([index, newDirection]);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                testimonialIndex === index ? 'bg-amplify-coral scale-125' : 'bg-slate-gray/30 hover:bg-slate-gray/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
