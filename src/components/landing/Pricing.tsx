'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const pricingTiers = [
  {
    name: 'Starter',
    monthlyPrice: 29,
    annualPrice: 24,
    description: 'For solo marketers and freelancers getting started.',
    features: [
      '1 Brand DNA Profile',
      '50 Content Generations/mo',
      'Basic Analytics',
      '2 Social integrations',
      'Email Support',
    ],
    cta: 'Start Free Trial',
    isPopular: false,
    color: 'sky-blue',
  },
  {
    name: 'Professional',
    monthlyPrice: 79,
    annualPrice: 63,
    description: 'For growing businesses that need to scale content.',
    features: [
      '5 Brand DNA Profiles',
      'Unlimited Content Generations',
      'Advanced Analytics & AI Loop',
      'All Platform Integrations',
      'Team Collaboration (3 users)',
      'Priority Support',
    ],
    cta: 'Start Free Trial',
    isPopular: true,
    color: 'electric-purple',
  },
  {
    name: 'Enterprise',
    monthlyPrice: null,
    annualPrice: null,
    description: 'For large agencies and brands with custom needs.',
    features: [
      'Unlimited Brand Profiles',
      'Dedicated AI models',
      'Custom Integrations & API Access',
      'White-label options',
      'Dedicated Success Manager',
      'SOC 2 & GDPR',
    ],
cta: 'Contact Sales',
    isPopular: false,
    color: 'vibrant-magenta',
  },
];

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-gradient-to-b from-white via-light-slate/30 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-electric-purple/10 to-sky-blue/10 border border-electric-purple/20 text-deep-charcoal text-sm font-medium mb-6">
            <Zap size={16} className="text-electric-purple" />
            Flexible Plans for Teams of All Sizes
          </div>
          <h2 className="text-5xl md:text-6xl font-bold font-display text-deep-charcoal tracking-tight mb-6">
            Plans That Scale With You
          </h2>
          <p className="mt-4 text-xl text-slate-gray">
            Choose the perfect plan for your brand's growth journey. All plans start with a 14-day free trial, no credit card required.
          </p>
        </div>

        <div className="flex justify-center items-center gap-4 mb-12">
          <Label htmlFor="billing-toggle" className={cn("font-medium", !isAnnual && "text-primary")}>
            Monthly
          </Label>
          <Switch
            id="billing-toggle"
            checked={isAnnual}
            onCheckedChange={setIsAnnual}
            aria-label="Toggle between monthly and annual billing"
          />
          <Label htmlFor="billing-toggle" className={cn("font-medium", isAnnual && "text-primary")}>
            Annually
          </Label>
          <div className="relative">
            <span className={cn("ml-2 inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold transition-all duration-300",
              isAnnual
                ? 'bg-lime-green/20 text-lime-green-700 scale-100 opacity-100'
                : 'scale-90 opacity-0'
            )}>
              Save 20%
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 items-stretch">
          {pricingTiers.map((tier) => (
            <Card key={tier.name} className={cn(
              "flex flex-col rounded-2xl border-2 transition-all duration-300",
              tier.isPopular 
                ? 'border-electric-purple shadow-2xl shadow-electric-purple/20 scale-105' 
                : 'border-slate-200 hover:border-slate-300 hover:shadow-lg'
            )}>
              <CardHeader className="p-8 border-b">
                {tier.isPopular && (
                   <div className="absolute top-0 right-8 -translate-y-1/2">
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r from-amplify-coral to-electric-purple text-white shadow-lg">
                      Most Popular
                    </div>
                   </div>
                )}
                <CardTitle className={cn("text-3xl font-display", `text-${tier.color}`)}>{tier.name}</CardTitle>
                <CardDescription className="text-base">{tier.description}</CardDescription>
                <div className="pt-6">
                  {tier.monthlyPrice !== null ? (
                    <>
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-bold font-display tracking-tight text-deep-charcoal">
                          ${isAnnual ? tier.annualPrice : tier.monthlyPrice}
                        </span>
                        <span className="text-lg text-slate-gray">/ month</span>
                      </div>
                      <p className="text-sm text-slate-gray mt-1">
                        Billed {isAnnual ? 'annually' : 'monthly'}
                      </p>
                    </>
                  ) : (
                    <span className="text-4xl font-bold font-display text-deep-charcoal">Custom</span>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-1 p-8">
                <p className="font-semibold text-deep-charcoal mb-4">What's included:</p>
                <ul className="space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-lime-green mr-3 mt-0.5 shrink-0" />
                      <span className="text-base text-slate-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-8">
                <Button size="lg" className={cn(
                  "w-full text-lg",
                  tier.isPopular ? 'bg-gradient-to-r from-amplify-coral to-electric-purple text-white hover:shadow-xl' : 'bg-white border-2 border-slate-300 text-deep-charcoal hover:bg-slate-50'
                )}>
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
