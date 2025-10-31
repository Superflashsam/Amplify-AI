export interface Feature {
  name: string;
  tooltip?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  popular: boolean;
  color: string;
  gradient: string;
  icon: React.ReactNode;
  features: Feature[];
  cta: {
    text: string;
    link: string;
  };
  limits: {
    content: string;
    brands: string;
    users: string;
  };
}
