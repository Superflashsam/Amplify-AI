'use client';

import { motion } from 'framer-motion';
import { Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, href: '#', color: '#1DA1F2' },
  { icon: Linkedin, href: '#', color: '#0A66C2' },
  { icon: Youtube, href: '#', color: '#FF0000' },
  { icon: Instagram, href: '#', color: '#E4405F' },
];

export default function SocialIcons() {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((link, i) => (
        <motion.a
          key={i}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-gray/60 hover:text-white"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 + i * 0.1 }}
          whileHover={{ scale: 1.2, color: link.color }}
        >
          <link.icon size={20} />
        </motion.a>
      ))}
    </div>
  );
}
