import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, Bot, Megaphone, BarChart2, Users, Languages } from 'lucide-react';

const features = [
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: 'Brand DNA Extraction',
    description: 'AI analyzes your brand from multiple sources to create a consistent identity.',
  },
  {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: 'Multi-Format Content',
    description: 'Text, images, videos, audio—all optimized for your target platforms.',
  },
  {
    icon: <Megaphone className="h-8 w-8 text-primary" />,
    title: 'Campaign Orchestration',
    description: 'Plan, schedule, and publish across all your channels with ease.',
  },
  {
    icon: <BarChart2 className="h-8 w-8 text-primary" />,
    title: 'Real-Time Analytics',
    description: 'Track performance, gain insights, and optimize automatically.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Team Collaboration',
    description: 'Approve, comment, and publish campaigns together seamlessly.',
  },
  {
    icon: <Languages className="h-8 w-8 text-primary" />,
    title: 'Multilingual Support',
    description: 'Reach global audiences by generating content in 24+ languages.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 sm:py-28 bg-background/70">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-display font-bold">
            Everything You Need to Amplify Your Marketing
          </h2>
          <p className="mt-4 text-body-lg text-foreground/70">
            From brand analysis to performance tracking, AmplifyAI provides a complete suite of tools to scale your marketing efforts.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-card/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">{feature.icon}</div>
                   <CardTitle className="text-heading-sm font-semibold">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-body text-foreground/80">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
