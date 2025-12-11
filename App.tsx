
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProofSection } from './components/SocialProofSection';
import { ProductShowcase } from './components/ProductShowcase';
import { HowItWorksSection } from './components/HowItWorksSection';
import { WhyChooseSection } from './components/WhyChooseSection';

import BentoGrid from './components/BentoVisuals';
import { IntegrationsSection } from './components/IntegrationsSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { SocialIconRow } from './components/SocialIconRow';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-artisan-gray-900 selection:bg-artisan-primary-300/30 selection:text-artisan-primary-600 font-inter">
      <Navbar />
      <main>
        <Hero />
        <SocialProofSection />
        <WhyChooseSection />
        <ProductShowcase />
        <HowItWorksSection />

        <BentoGrid />
        <IntegrationsSection />
        <PricingSection />
        <TestimonialsSection />
        <CtaSection />

        {/* Example Social Icons Usage */}
        <section className="py-12 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-6 flex flex-col items-center">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">Socials Demo</h3>
            <SocialIconRow
              className="justify-center"
              links={[
                { platform: 'x', href: 'https://twitter.com' },
                { platform: 'facebook', href: 'https://facebook.com' },
                { platform: 'instagram', href: 'https://instagram.com' },
                { platform: 'tiktok', href: 'https://tiktok.com' },
                { platform: 'youtube', href: 'https://youtube.com' },
                { platform: 'pinterest', href: 'https://pinterest.com' },
                { platform: 'threads', href: 'https://threads.net' },
                { platform: 'telegram', href: 'https://t.me' },
                { platform: 'linkedin', href: 'https://linkedin.com' },
                { platform: 'bluesky', href: 'https://bsky.app' },
              ]}
            />
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default App;
