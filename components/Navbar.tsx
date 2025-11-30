import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Sparkles, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {
      name: 'Product',
      href: '#product',
      hasDropdown: true,
      items: [
        { title: 'Content Studio', desc: 'Generate posts, scripts, and assets' },
        { title: 'Calendar', desc: 'Plan and schedule across platforms' },
        { title: 'Analytics', desc: 'Measure and optimize campaigns' }
      ]
    },
    {
      name: 'Solutions',
      href: '#solutions',
      hasDropdown: true,
      items: [
        { title: 'Startups', desc: 'Grow faster with AI workflows' },
        { title: 'Agencies', desc: 'Scale client content production' },
        { title: 'Enterprise', desc: 'Security, SSO, guardrails' }
      ]
    },
    {
      name: 'Resources',
      href: '#resources',
      hasDropdown: true,
      items: [
        { title: 'Blog', desc: 'Marketing tips & tricks' },
        { title: 'Community', desc: 'Join 10,000+ marketers' },
        { title: 'Help Center', desc: 'Guides and documentation' }
      ]
    },
    { name: 'Pricing', href: '#pricing', hasDropdown: false },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileOpen
          ? 'bg-white/80 backdrop-blur-md border-b border-gray-100/50 shadow-sm'
          : 'bg-transparent border-b border-transparent'
          }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-[72px] flex items-center justify-between bg-white/80 backdrop-blur-md rounded-full border border-gray-100 shadow-md">
          {/* Left: Logo */}
          <a href="/" className="flex items-center gap-2 group z-50">
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#977DFF] to-[#0600AB] shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all duration-300 group-hover:scale-105">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-dark group-hover:text-primary transition-colors">Amplify</span>
          </a>

          {/* Center: Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group h-[72px] flex items-center"
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <button className="flex items-center gap-1.5 text-sm font-semibold text-gray-600 hover:text-dark transition-colors relative">
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-gray-400 group-hover:text-primary" />
                  )}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#977DFF] to-[#0600AB] transition-all duration-300 group-hover:w-full rounded-full" />
                </button>

                {/* Dropdown Menu */}
                {link.hasDropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 translate-y-4 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out">
                    <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl shadow-primary/5 border border-gray-100 p-2 w-72 overflow-hidden ring-1 ring-black/5">
                      <div className="grid grid-cols-1 gap-1">
                        {link.items?.map((item, i) => (
                          <a key={i} href="#" className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group/item">
                            <div className="mt-1 w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                              <Sparkles size={14} />
                            </div>
                            <div>
                              <div className="font-bold text-sm text-gray-900">{item.title}</div>
                              <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right: CTA Buttons */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => navigate('/signin')} className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors hover:bg-primary/5 px-4 py-2 rounded-lg">Login</button>
            <a href="mailto:sales@amplify.ai" aria-label="Talk to Sales" className="group relative px-6 py-2.5 btn-gradient rounded-full text-white text-base font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 active:translate-y-0 overflow-hidden focus-ring">
              <span className="relative z-10 flex items-center gap-2 btn-text-glow whitespace-nowrap">Talk to Sales<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-primary transition-colors z-50 relative"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-white md:hidden flex flex-col h-screen overflow-hidden"
          >
            <div className="flex flex-col h-full pt-24 px-6 pb-8">
              <div className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    className="flex items-center justify-between text-2xl font-display font-bold text-gray-800 py-4 border-b border-gray-50 active:bg-gray-50 active:scale-[0.98] transition-all"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {link.name}
                    <ArrowRight className="w-5 h-5 text-gray-300" />
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-auto flex flex-col gap-4"
              >
                <button className="w-full py-4 rounded-xl border border-gray-200 font-bold text-gray-700 hover:bg-gray-50 transition-colors">
                  Sign In
                </button>
                <button aria-label="Get started free" className="w-full py-4 rounded-xl btn-gradient text-white font-bold shadow-xl shadow-primary/30 active:scale-[0.98] transition-transform focus-ring">
                  <span className="btn-text-glow whitespace-nowrap">Get started free</span>
                </button>
                <div className="text-center text-xs text-gray-400 mt-2 font-medium">
                  No credit card required
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
