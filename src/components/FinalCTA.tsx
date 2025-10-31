// src/components/FinalCTA.tsx
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Cursors = () => {
    const cursors = [
      { id: 1, x: '20%', y: '30%', name: 'Digital Marketer', color: 'bg-red-500', imgSrc: 'https://picsum.photos/seed/101/48/48' },
      { id: 2, x: '80%', y: '40%', name: 'Product Marketer', color: 'bg-lime-500', imgSrc: 'https://picsum.photos/seed/102/48/48' },
      { id: 3, x: '75%', y: '85%', name: 'Content Marketer', color: 'bg-pink-500', imgSrc: 'https://picsum.photos/seed/103/48/48' },
    ];
  
    return (
      <>
        {cursors.map((cursor) => (
          <motion.div
            key={cursor.id}
            className="absolute z-20"
            initial={{ x: cursor.x, y: cursor.y }}
            animate={{
              x: [cursor.x, `calc(${cursor.x} + ${Math.random() * 100 - 50}px)`],
              y: [cursor.y, `calc(${cursor.y} + ${Math.random() * 100 - 50}px)`],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
            }}
          >
            <div className="relative">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="black"
                className="transform -rotate-12"
              >
                <path d="M0 0l24 12-5.63 2.37-3.37 8.63z" />
              </svg>
              <div className={`absolute top-4 left-4 flex items-center gap-2 p-1.5 rounded-full ${cursor.color} text-white text-xs whitespace-nowrap`}>
                <Image
                    src={cursor.imgSrc}
                    alt={cursor.name}
                    width={24}
                    height={24}
                    className="rounded-full"
                />
                {cursor.name}
              </div>
            </div>
          </motion.div>
        ))}
      </>
    );
  };
  

export default function FinalCTA() {
  return (
    <section className="relative h-[800px] w-full bg-[#D8EFFF] overflow-hidden">
      {/* Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      
      <Cursors />

      {/* Abstract Shapes */}
      <motion.div
        className="absolute z-10"
        style={{ top: '50%', left: '50%', x: '-60%', y: '-50%' }}
        animate={{ rotate: [0, 5, -5, 0]}}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-64 h-64 bg-red-500" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 20%, 0 80%)' }} />
      </motion.div>
      <motion.div
        className="absolute z-10"
        style={{ top: '50%', left: '50%', x: '10%', y: '-50%' }}
        animate={{ scale: [1, 1.05, 1]}}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-56 h-56 rounded-full bg-lime-500" />
      </motion.div>

      {/* Main Card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-[80vw] max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="p-8 sm:p-16 text-center">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold font-display text-deep-charcoal leading-tight">
              Ready to Amplify <br /> Your Marketing?
            </h2>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="outline" className="text-lg font-semibold border-2 border-slate-gray/30 hover:border-primary">
                Start Free Trial
              </Button>
              <Button size="lg" className="text-lg font-semibold bg-amplify-coral hover:bg-amplify-coral/90">
                Get a Demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
