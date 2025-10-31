import Link from 'next/link';
import { Twitter, Linkedin, Facebook } from 'lucide-react';
import Logo from './Logo';

const footerLinks = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Integrations', href: '#' },
    { label: 'Updates', href: '#' },
  ],
  Resources: [
    { label: 'Blog', href: '#' },
    { label: 'Case Studies', href: '#' },
    { label: 'Help Center', href: '#' },
    { label: 'API Docs', href: '#' },
  ],
  Company: [
    { label: 'About Us', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact Us', href: '#' },
    { label: 'Press', href: '#' },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="mb-4 inline-block">
              <Logo />
            </Link>
            <p className="text-sm text-foreground/60 max-w-xs">
              AI-Powered Marketing That Scales Your Brand.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:col-span-3">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="font-semibold text-foreground tracking-wide">{title}</h3>
                <ul className="mt-4 space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 border-t pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-foreground/50">
            &copy; {new Date().getFullYear()} AmplifyAI, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-5 mt-4 sm:mt-0">
            <Link href="#" className="text-foreground/50 hover:text-foreground"><Twitter className="h-5 w-5" /></Link>
            <Link href="#" className="text-foreground/50 hover:text-foreground"><Linkedin className="h-5 w-5" /></Link>
            <Link href="#" className="text-foreground/50 hover:text-foreground"><Facebook className="h-5 w-5" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
