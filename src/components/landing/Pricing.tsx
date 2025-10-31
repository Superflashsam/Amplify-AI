import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const pricingTiers = [
  {
    name: 'Starter',
    price: '$49',
    description: 'For individuals and small teams getting started.',
    features: [
      '1 Brand DNA Profile',
      '50 Content Generations/mo',
      'Basic Analytics',
      '2 Social integrations',
    ],
    cta: 'Start Free Trial',
    isPopular: false,
  },
  {
    name: 'Growth',
    price: '$99',
    description: 'For growing businesses that need to scale content.',
    features: [
      '5 Brand DNA Profiles',
      'Unlimited Content Generations',
      'Advanced Analytics & AI Loop',
      'All Platform Integrations',
      'Team Collaboration (3 users)',
    ],
    cta: 'Start Free Trial',
    isPopular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large agencies and brands with custom needs.',
    features: [
      'Unlimited Brand Profiles',
      'Dedicated AI models',
      'Custom Integrations',
      'White-label options',
      'Dedicated Support',
    ],
    cta: 'Contact Sales',
    isPopular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-display font-bold">
            Plans That Scale With You
          </h2>
          <p className="mt-4 text-body-lg text-foreground/70">
            Choose the perfect plan for your brand's growth journey. All plans start with a 14-day free trial.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <Card key={tier.name} className={`flex flex-col ${tier.isPopular ? 'border-primary shadow-2xl shadow-primary/20' : ''}`}>
              <CardHeader>
                {tier.isPopular && <div className="text-sm font-semibold text-primary text-center -mt-2 mb-2">Most Popular</div>}
                <CardTitle className="text-heading-lg">{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.price.startsWith('$') && <span className="text-sm text-foreground/60"> / month</span>}
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" />
                      <span className="text-body text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={tier.isPopular ? 'default' : 'outline'}>
                  {tier.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
