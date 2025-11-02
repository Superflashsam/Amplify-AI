import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import PlatformShowcase from '@/components/PlatformShowcase';
import HowItWorks from '@/components/landing/HowItWorks';
import Testimonials from '@/components/landing/Testimonials';
import Pricing from '@/components/landing/Pricing';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/landing/Footer';
import ContactDemo from '@/components/ContactDemo';
import CoreFeatures from '@/components/landing/CoreFeatures';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <PlatformShowcase />
        <HowItWorks />
        <CoreFeatures />
        <Testimonials />
        <Pricing />
        <FinalCTA />
        <ContactDemo />
      </main>
      <Footer />
    </div>
  );
}
