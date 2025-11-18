import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import PlatformShowcase from '@/components/PlatformShowcase';
import HowItWorks from '@/components/landing/HowItWorks';
import Features from '@/components/landing/Features';
import Testimonials from '@/components/landing/Testimonials';
import Pricing from '@/components/landing/Pricing';
import FinalCTA from '@/components/FinalCTA';
import ContactDemo from '@/components/ContactDemo';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <PlatformShowcase />
        <HowItWorks />
        <Features />
        <Testimonials />
        <Pricing />
        <FinalCTA />
        <ContactDemo />
      </main>
      <Footer />
    </div>
  );
}
