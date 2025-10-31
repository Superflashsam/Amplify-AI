import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const Hero = () => {
  const dashboardImage = PlaceHolderImages.find(img => img.id === 'heroDashboard');

  return (
    <section className="relative w-full overflow-hidden bg-background">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,hsl(var(--primary))_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#0f172a_40%,hsl(var(--primary))_100%)]"></div>

      <div className="container mx-auto px-4 md:px-6 pt-24 pb-16 md:pt-32 md:pb-24 text-center">
        <h1 className="text-display-xl font-extrabold text-gradient bg-clip-text text-transparent animate-gradient-bg bg-[length:200%_auto]">
          Amplify Your Brand With AI-Powered Marketing
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-body-lg text-foreground/80">
          Generate on-brand content, orchestrate campaigns, and track performance—all in one intelligent platform.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="w-full sm:w-auto animate-pulse-glow">
            Start Free Trial
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto">
            Watch Demo
          </Button>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <Card className="relative aspect-[1200/780] w-full max-w-5xl mx-auto animate-float overflow-hidden rounded-xl border-2 border-primary/20 bg-white/50 shadow-2xl shadow-primary/20 backdrop-blur-sm">
          {dashboardImage && (
            <Image
              src={dashboardImage.imageUrl}
              alt={dashboardImage.description}
              data-ai-hint={dashboardImage.imageHint}
              fill
              className="object-cover"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
        </Card>
      </div>
    </section>
  );
};

export default Hero;
