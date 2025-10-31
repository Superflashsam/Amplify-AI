import { Zap, Target, PenTool, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const steps = [
  {
    icon: <Zap className="h-8 w-8" />,
    title: 'Connect Your Brand',
    description: 'Link your website and social profiles to give our AI context.',
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: 'AI Extracts DNA',
    description: 'AmplifyAI analyzes your assets to understand your unique brand identity.',
  },
  {
    icon: <PenTool className="h-8 w-8" />,
    title: 'Generate Content',
    description: 'Create on-brand text, images, and video for any platform in seconds.',
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: 'Publish & Optimize',
    description: 'Schedule content and let our AI learn from performance to improve results.',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-display font-bold">
            From Brand DNA to Campaign Launch in Minutes
          </h2>
          <p className="mt-4 text-body-lg text-foreground/70">
            Our intelligent workflow simplifies marketing so you can focus on growth.
          </p>
        </div>
        <div className="relative mt-16">
          <div className="absolute left-1/2 top-1/2 hidden h-1 w-2/3 -translate-x-1/2 -translate-y-1/2 border-t-2 border-dashed border-primary/30 lg:block"></div>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="relative text-center">
                <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary/20 bg-background text-primary shadow-lg">
                  {step.icon}
                </div>
                <h3 className="mt-6 text-heading-sm font-semibold">{step.title}</h3>
                <p className="mt-2 text-body text-foreground/80">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
