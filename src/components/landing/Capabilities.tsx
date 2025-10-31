import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ArrowRight, BookOpen, BrainCircuit, ShieldCheck, SquarePen } from 'lucide-react';
import BrandIntelligenceIllustration from '../icons/brand-intelligence-illustration';
import ContentStudioIllustration from '../icons/content-studio-illustration';
import CampaignBrainIllustration from '../icons/campaign-brain-illustration';
import PerformanceShieldIllustration from '../icons/performance-shield-illustration';

const capabilities = [
  {
    title: 'Brand Intelligence',
    description: 'Our AI learns your brand DNA to ensure all content is consistently on-brand.',
    icon: BookOpen,
    illustration: BrandIntelligenceIllustration,
    theme: 'mint',
  },
  {
    title: 'Content Studio',
    description: 'Create on-brand content in minutes. Scale your output effortlessly.',
    icon: SquarePen,
    illustration: ContentStudioIllustration,
    theme: 'coral',
  },
  {
    title: 'Campaign Brain',
    description: 'Our AI strategist plans and optimizes multi-channel campaigns for max impact.',
    icon: BrainCircuit,
    illustration: CampaignBrainIllustration,
    theme: 'blue',
  },
  {
    title: 'Performance Shield',
    description: 'Get real-time analytics and insights to ensure your marketing hits the mark.',
    icon: ShieldCheck,
    illustration: PerformanceShieldIllustration,
    theme: 'yellow',
  },
];

const themeClasses = {
  mint: {
    bg: 'from-lime-green/20 to-lime-green/10',
    grid: 'bg-[radial-gradient(rgba(132,204,22,0.08)_1px,transparent_1px)]',
    border: 'border-lime-green/20',
    shadow: 'shadow-lime-green/20',
    icon: 'bg-gradient-to-br from-lime-green to-green-400',
    text: 'text-lime-green-300',
  },
  coral: {
    bg: 'from-amplify-coral/20 to-amplify-coral/10',
    grid: 'bg-[radial-gradient(rgba(255,107,91,0.08)_1px,transparent_1px)]',
    border: 'border-amplify-coral/20',
    shadow: 'shadow-amplify-coral/20',
    icon: 'bg-gradient-to-br from-amplify-coral to-orange-400',
    text: 'text-amplify-coral-300',
  },
  blue: {
    bg: 'from-sky-blue/20 to-sky-blue/10',
    grid: 'bg-[radial-gradient(rgba(56,189,248,0.08)_1px,transparent_1px)]',
    border: 'border-sky-blue/20',
    shadow: 'shadow-sky-blue/20',
    icon: 'bg-gradient-to-br from-sky-blue to-blue-400',
    text: 'text-sky-blue-300',
  },
  yellow: {
    bg: 'from-sunshine-yellow/20 to-sunshine-yellow/10',
    grid: 'bg-[radial-gradient(rgba(253,224,71,0.08)_1px,transparent_1px)]',
    border: 'border-sunshine-yellow/30',
    shadow: 'shadow-sunshine-yellow/20',
    icon: 'bg-gradient-to-br from-sunshine-yellow to-amber-400',
    text: 'text-sunshine-yellow-300',
  },
};

const Capabilities = () => {
  return (
    <section className="py-24 sm:py-32">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <Badge variant="outline" className="text-sm font-semibold border-primary/50 text-primary">
            The Amplify Platform
          </Badge>
          <h2 className="mt-4 text-4xl font-bold">
            The intelligent platform that <span className="text-gradient">amplifies marketing</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Go beyond generation. AmplifyAI understands your brand, crafts content, orchestrates campaigns, and analyzes performance—all in one place.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((card) => {
            const theme = themeClasses[card.theme as keyof typeof themeClasses];
            const Illustration = card.illustration;
            const Icon = card.icon;

            return (
              <Card
                key={card.title}
                className={`group relative flex flex-col justify-between min-h-[450px] overflow-hidden rounded-3xl p-8 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl ${theme.border} hover:shadow-${theme.shadow}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${theme.bg} -z-20`} />
                <div className={`absolute inset-0 ${theme.grid} [background-size:20px_20px] -z-10`} />
                
                <div>
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${theme.icon} mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{card.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-sm">{card.description}</p>
                </div>

                <div className="mt-8 flex-grow flex items-end justify-center">
                    <Illustration className="w-full h-auto max-w-[250px] transition-transform duration-300 group-hover:scale-110"/>
                </div>
                
                <a href="#" className="mt-8 inline-flex items-center font-semibold text-foreground group-hover:text-primary transition-colors">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
