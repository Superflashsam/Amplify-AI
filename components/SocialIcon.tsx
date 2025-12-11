
import React from 'react';
import { ReactComponent as XIcon } from "../icons/x-twitter.svg";
import { ReactComponent as FacebookIcon } from "../icons/facebook-lucide.svg";
import { ReactComponent as InstagramIcon } from "../icons/instagram-lucide.svg";
import { ReactComponent as TikTokIcon } from "../icons/tiktok.svg";
import { ReactComponent as YouTubeIcon } from "../icons/youtube-lucide.svg";
import { ReactComponent as PinterestIcon } from "../icons/pinterest.svg";
import { ReactComponent as ThreadsIcon } from "../icons/threads.svg";
import { ReactComponent as TelegramIcon } from "../icons/telegram.svg";
import { ReactComponent as LinkedInIcon } from "../icons/linkedin-lucide.svg";
import { ReactComponent as BlueskyIcon } from "../icons/bluesky.svg";

export type SocialPlatform =
    | "x"
    | "facebook"
    | "instagram"
    | "tiktok"
    | "youtube"
    | "pinterest"
    | "threads"
    | "telegram"
    | "linkedin"
    | "bluesky";

interface SocialIconProps {
    platform: SocialPlatform;
    size?: number;
    className?: string;
    ariaLabel?: string;
}

const icons: Record<SocialPlatform, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    x: XIcon,
    facebook: FacebookIcon,
    instagram: InstagramIcon,
    tiktok: TikTokIcon,
    youtube: YouTubeIcon,
    pinterest: PinterestIcon,
    threads: ThreadsIcon,
    telegram: TelegramIcon,
    linkedin: LinkedInIcon,
    bluesky: BlueskyIcon,
};

export const SocialIcon: React.FC<SocialIconProps> = ({
    platform,
    size = 24,
    className,
    ariaLabel,
}) => {
    const IconComponent = icons[platform];

    return (
        <IconComponent
            width={size}
            height={size}
            className={className}
            aria-label={ariaLabel ?? `${platform} icon`}
            role="img"
        />
    );
};
