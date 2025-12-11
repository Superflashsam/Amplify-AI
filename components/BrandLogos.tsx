
import React from 'react';

export const BrandItem = ({ name, icon: Icon }: { name: string; icon: React.FC<React.SVGProps<SVGSVGElement>> }) => {
    return (
        <div className="flex items-center justify-center p-4 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
            <Icon className="h-8 w-auto max-w-[120px]" />
            <span className="sr-only">{name}</span>
        </div>
    );
};

// Placeholder Logos - In a real project these would be actual SVGs
export const HubSpotLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 100 30" fill="currentColor" {...props}>
        <path d="M72.2 14.8c-1.3 0-2.4 1.1-2.4 2.4s1.1 2.4 2.4 2.4 2.4-1.1 2.4-2.4-1.1-2.4-2.4-2.4m-12.8 0c-1.3 0-2.4 1.1-2.4 2.4s1.1 2.4 2.4 2.4 2.4-1.1 2.4-2.4-1.1-2.4-2.4-2.4m25.6 0c-1.3 0-2.4 1.1-2.4 2.4s1.1 2.4 2.4 2.4 2.4-1.1 2.4-2.4-1.1-2.4-2.4-2.4M59.4 6c-1.3 0-2.4 1.1-2.4 2.4s1.1 2.4 2.4 2.4 2.4-1.1 2.4-2.4S60.7 6 59.4 6m-12.8 8.8c-1.3 0-2.4 1.1-2.4 2.4s1.1 2.4 2.4 2.4 2.4-1.1 2.4-2.4-1.1-2.4-2.4-2.4" />
        <text x="50" y="20" fontSize="18" fontWeight="bold" textAnchor="middle">HubSpot</text>
    </svg>
);

export const CanvaLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 100 30" fill="currentColor" {...props}>
        <text x="50" y="20" fontSize="18" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Canva</text>
    </svg>
);

export const ShopifyLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 100 30" fill="currentColor" {...props}>
        <text x="50" y="20" fontSize="18" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">shopify</text>
    </svg>
);

export const MondayLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 100 30" fill="currentColor" {...props}>
        <text x="50" y="20" fontSize="18" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">monday.com</text>
    </svg>
);

export const AirtableLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 100 30" fill="currentColor" {...props}>
        <text x="50" y="20" fontSize="18" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Airtable</text>
    </svg>
);

export const FigmaLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 100 30" fill="currentColor" {...props}>
        <text x="50" y="20" fontSize="18" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Figma</text>
    </svg>
);
