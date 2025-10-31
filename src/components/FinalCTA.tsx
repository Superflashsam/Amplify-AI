// src/components/FinalCTA.tsx
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Cursors = () => {
    const cursors = [
      { 
        id: 1, 
        name: 'Digital Marketer', 
        color: 'bg-red-500', 
        imgSrc: 'https://picsum.photos/seed/101/48/48',
        animation: {
          keyframes: [
            { x: '20vw', y: '20vh', scale: 1, transition: { duration: 5, ease: 'easeInOut' } }, // start
            { x: '48vw', y: '65vh', scale: 1, transition: { duration: 3, ease: 'easeOut' } }, // move to "start free trial"
            { scale: 0.9, transition: { duration: 0.2 } }, // click down
            { scale: 1, transition: { duration: 0.2 } }, // click up
            { x: '60vw', y: '30vh', scale: 1, transition: { duration: 4, ease: 'easeInOut' } }, // move away
            { x: '20vw', y: '20vh', scale: 1, transition: { duration: 5, ease: 'easeInOut' } } // back to start
          ],
          repeat: Infinity,
          repeatType: 'loop',
        }
      },
      { 
        id: 2, 
        name: 'Product Marketer', 
        color: 'bg-lime-500', 
        imgSrc: 'https://picsum.photos/seed/102/48/48',
        animation: {
            keyframes: [
                { x: '80vw', y: '30vh', scale: 1, transition: { duration: 4, ease: 'easeInOut' } }, // start
                { x: '60vw', y: '65vh', scale: 1, transition: { duration: 4, ease: 'easeOut' } }, // move to "get a demo"
                { scale: 0.9, transition: { duration: 0.2 } }, // click down
                { scale: 1, transition: { duration: 0.2 } },   // click up
                { x: '70vw', y: '40vh', scale: 1, transition: { duration: 3, ease: 'easeInOut' } }, // move away
                { x: '80vw', y: '30vh', scale: 1, transition: { duration: 4, ease: 'easeInOut' } }  // back to start
            ],
            repeat: Infinity,
            repeatType: 'loop',
          }
      },
      { 
        id: 3, 
        name: 'Content Marketer', 
        color: 'bg-pink-500', 
        imgSrc: 'https://picsum.photos/seed/103/48/48',
        animation: {
            keyframes: [
                { x: '10vw', y: '70vh', scale: 1, transition: { duration: 6, ease: 'easeInOut' } },
                { x: '30vw', y: '50vh', scale: 1.1, transition: { duration: 4, ease: 'easeInOut' } },
                { x: '20vw', y: '80vh', scale: 1, transition: { duration: 5, ease: 'easeInOut' } },
                { x: '10vw', y: '70vh', scale: 1, transition: { duration: 6, ease: 'easeInOut' } },
            ],
            repeat: Infinity,
            repeatType: 'loop',
          }
      },
    ];
  
    return (
      <>
        {cursors.map((cursor) => (
          <motion.div
            key={cursor.id}
            className="absolute z-30"
            animate={cursor.animation}
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
        style={{ top: '20%', left: '15%', opacity: 0.3 }}
        animate={{ rotate: [0, 5, -5, 0]}}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-80 h-80 bg-red-500" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 20%, 0 80%)' }} />
      </motion.div>
      <motion.div
        className="absolute z-10"
        style={{ top: '25%', right: '15%', opacity: 0.3 }}
        animate={{ scale: [1, 1.05, 1]}}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-72 h-72 rounded-full bg-lime-500" />
      </motion.div>

      {/* Main Card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
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
