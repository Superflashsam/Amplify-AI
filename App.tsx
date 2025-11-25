
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProofSection } from './components/SocialProofSection';
import { ProductShowcase } from './components/ProductShowcase';
import { HowItWorksSection } from './components/HowItWorksSection';
import { FeatureDeepDiveSection } from './components/FeatureDeepDiveSection';
import { IntegrationsSection } from './components/IntegrationsSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-dark selection:bg-primary/20 selection:text-primary font-sans">
      <Navbar />
      <main>
        <Hero />
        <SocialProofSection />
        <ProductShowcase />
        <HowItWorksSection />
        <FeatureDeepDiveSection />
        <IntegrationsSection />
        <PricingSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
