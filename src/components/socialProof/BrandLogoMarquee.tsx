'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const logos = PlaceHolderImages.filter(p => p.id.startsWith('socialProofLogo'));

const Marquee = ({ children, duration = 30 }: { children: React.ReactNode, duration?: number }) => (
  <div className="overflow-hidden">
    <motion.div
      className="flex gap-16"
      animate={{ x: ['0%', '-50%'] }}
      transition={{ ease: 'linear', duration, repeat: Infinity }}
    >
      {children}
    </motion.div>
  </div>
);

export default function BrandLogoMarquee() {
  return (
    <div>
      <h3 className="text-center text-lg text-slate-gray font-semibold mb-8">
        World-class marketing teams trust Amplify
      </h3>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <Marquee>
          {logos.concat(logos).map((logo, i) => (
            <Image
              key={i}
              src={logo.imageUrl}
              alt={logo.description}
              width={128}
              height={48}
              className="h-12 w-auto object-contain"
              data-ai-hint={logo.imageHint}
            />
          ))}
        </Marquee>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </div>
  );
}
