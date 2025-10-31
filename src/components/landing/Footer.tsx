'use client';

import { motion } from 'framer-motion';
import SocialIcons from '../footer/SocialIcons';
import NewsletterForm from '../footer/NewsletterForm';
import { Button } from '../ui/button';

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
      {/* Top Wave Decoration is implicitly handled by the section above it, creating a seamless transition */}
      
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
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pt-32 pb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Footer Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {/* Brand & Social Column */}
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-amplify-coral to-electric-purple flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-white">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <div className="text-xl font-semibold tracking-tight text-white font-display">
                  Amplify
                </div>
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
                <h4 className="font-semibold text-white mb-4 capitalize">{key}</h4>
                <ul className="space-y-3">
                  {footerLinks[key].map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm hover:text-white hover:underline transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Newsletter & CTAs Column */}
            <motion.div
              className="col-span-2 lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="space-y-6">
                <div>
                  <p className="font-semibold text-white mb-4">Get Started</p>
                  <div className="space-y-3">
                    <Button className="w-full bg-amplify-coral hover:bg-amplify-coral/90">Get a Demo</Button>
                    <Button variant="outline" className="w-full border-gray-700 hover:bg-gray-800 hover:text-white">Start Free Trial</Button>
                  </div>
                </div>
                <NewsletterForm />
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-sm text-center sm:text-left mb-4 sm:mb-0">
              &copy; {currentYear} Amplify, Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Legal</a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
