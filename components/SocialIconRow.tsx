import React from 'react';
import { SocialIcon, SocialPlatform } from './SocialIcon';

export interface SocialLink {
    platform: SocialPlatform;
    href?: string;
}

interface SocialIconRowProps {
    links: SocialLink[];
    className?: string;
}

export const SocialIconRow: React.FC<SocialIconRowProps> = ({ links, className = "" }) => {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            {links.map((link, index) => {
                const iconElement = (
                    <SocialIcon
                        platform={link.platform}
                        className="transition-transform hover:scale-110" // added bonus hover effect
                    />
                );

                if (link.href) {
                    return (
                        <a
                            key={`${link.platform}-${index}`}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-[#6A4CFF] transition-colors p-2 rounded-lg hover:bg-gray-50"
                        >
                            {iconElement}
                        </a>
                    );
                }

                return (
                    <div key={`${link.platform}-${index}`} className="text-gray-400 p-2">
                        {iconElement}
                    </div>
                );
            })}
        </div>
    );
};
