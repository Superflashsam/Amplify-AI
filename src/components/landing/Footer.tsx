'use client';

import { motion } from 'framer-motion';
import SocialIcons from '../footer/SocialIcons';
import NewsletterForm from '../footer/NewsletterForm';
import { Button } from '../ui/button';
import Logo from './Logo';

const footerLinks = {
  platform: ['App Library', 'AI Studio', 'Integrations', 'API', 'Brand Voice', 'Security'],
  solutions: ['Content Marketing', 'Performance Marketing', 'Brand Marketing', 'Social Media', 'Copywriting'],
  resources: ['Blog', 'Customer Stories', 'Guides & Reports', 'Community', 'Help Center'],
  company: ['About Us', 'Careers', 'Newsroom', 'Partners', 'Contact Us'],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-950 text-slate-gray overflow-hidden">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pt-24 pb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Top Section: Links */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
            {/* Brand & Social Column */}
            <div className="col-span-2 md:col-span-1">
              <div className='mb-6'>
                <Logo />
              </div>
              <p className="text-sm leading-relaxed mb-6 max-w-xs">
                The AI platform built exclusively for high-performance marketing teams.
              </p>
              <SocialIcons />
            </div>

            {/* Link Columns */}
            {(Object.keys(footerLinks) as (keyof typeof footerLinks)[]).map((key, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <h4 className="font-display font-bold text-white mb-4 capitalize">{key}</h4>
                <ul className="space-y-3">
                  {footerLinks[key].map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-slate-400 hover:text-white hover:underline transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom Section: CTAs and Newsletter */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
             <div>
                <h4 className="font-display font-bold text-white mb-4">Get Started</h4>
                <div className="flex items-center gap-4">
                  <Button className="bg-amplify-coral hover:bg-amplify-coral/90">Get a Demo</Button>
                  <Button variant="outline" className="border-gray-700 hover:bg-gray-800 hover:text-white">Start Free Trial</Button>
                </div>
              </div>
              <div>
                <NewsletterForm />
              </div>
          </div>


          {/* Bottom Bar */}
          <motion.div
            className="mt-24 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-sm text-slate-400 text-center sm:text-left mb-4 sm:mb-0">
              &copy; {currentYear} Amplify, Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Legal</a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
