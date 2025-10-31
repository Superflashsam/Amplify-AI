import { Button } from '@/components/ui/button';
import { ShieldCheck, Lock } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="rounded-2xl bg-gradient-to-br from-primary/80 to-electric-purple/80 p-10 text-center text-primary-foreground shadow-xl">
          <h2 className="text-5xl font-bold font-display">
            Ready to Amplify Your Marketing?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Join 10,000+ brands creating smarter campaigns with AI. Start your free 14-day trial today.
          </p>
          <Button size="lg" variant="secondary" className="mt-8 text-lg font-semibold bg-white text-primary hover:bg-gray-100">
            Start Free Trial - No Credit Card Required
          </Button>
          <div className="mt-6 flex items-center justify-center gap-6 text-sm text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" />
              <span>SOC 2 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4" />
              <span>GDPR Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
