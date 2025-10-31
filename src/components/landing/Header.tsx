'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import Logo from './Logo';

const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#case-studies', label: 'Case Studies' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full transition-all duration-300 animate-fadeIn" style={{ animationDelay: '0s' }}
    >
      <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-6">
        <Link href="/" aria-label="AmplifyAI Home">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-slate-gray hover:text-deep-charcoal transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="hidden sm:inline-flex">Sign In</Button>
          <Button className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-amplify-coral to-electric-purple hover:shadow-lg text-white text-sm font-semibold rounded-xl shadow-md shadow-amplify-coral/25 transition-all duration-200">
            Start Free Trial
            <ChevronRight className="h-4 w-4" />
          </Button>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="h-9 w-9 rounded-xl bg-light-slate hover:bg-slate-gray/10 transition-all duration-200 border-slate-gray/10">
                <Menu className="h-4 w-4 text-deep-charcoal" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-white">
              <div className="flex h-full flex-col p-6">
                <div className="mb-8 flex items-center justify-between">
                  <Link href="/" onClick={() => setIsMenuOpen(false)}>
                    <Logo />
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-lg font-medium text-slate-gray transition-colors hover:text-deep-charcoal"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto flex flex-col gap-4">
                   <Button variant="ghost" size="lg">Sign In</Button>
                   <Button size="lg" className="bg-gradient-to-r from-amplify-coral to-electric-purple">Start Free Trial</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
