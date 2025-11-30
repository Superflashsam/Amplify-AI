
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, DollarSign, Star, ArrowUpRight } from 'lucide-react';

const BRANDS = [
  { name: 'HubSpot', url: 'https://upload.wikimedia.org/wikipedia/commons/1/11/HubSpot_Logo.svg' },
  { name: 'Canva', url: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg' }, // Using icon for better fit or full logo
  { name: 'Shopify', url: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg' },
  { name: 'Monday', url: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Monday_logo.svg' },
  { name: 'Airtable', url: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Airtable_Logo.svg' },
  { name: 'Figma', url: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' }
];

const STATS = [
  { 
    value: "+84%", 
    label: "Campaign Performance", 
    icon: TrendingUp, 
    desc: "Average increase in engagement" 
  },
  { 
    value: "10x", 
    label: "Faster Production", 
    icon: Clock, 
    desc: "From concept to publish" 
  },
  { 
    value: "62%", 
    label: "Lower Cost", 
    icon: DollarSign, 
    desc: "Compared to traditional agencies" 
  },
  { 
    value: "4.9/5", 
    label: "User Rating", 
    icon: Star, 
    desc: "From 12,000+ happy teams" 
  },
];

export const SocialProofSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden border-b border-gray-100">
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Trust & Logos */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-dark mb-4 tracking-tight">
                Trusted by Modern Marketing Teams
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed max-w-md font-medium">
                From startups to global brands, Amplify powers high-performing content operations at scale.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-8 md:gap-y-10 items-center opacity-80">
               {/* Simplified Logo Representation for this demo to ensure they look good without external assets failing. 
                   In a real app, we'd use SVG components or reliable CDNs. 
                   Using text/generic shapes mixed with simulated SVGs styles for reliability. */}
               {BRANDS.map((brand, i) => (
                 <div key={i} className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer group">
                    {/* Simulate Logo with Text for stability if image fails, or use the image if valid. 
                        Here using stylized text to mimic the 'Stripe/Notion' logo wall look. */}
                    <span className="text-xl md:text-2xl font-display font-bold text-gray-400 group-hover:text-gray-900 flex items-center gap-2">
                      {brand.name === 'Figma' && <span className="w-4 h-4 rounded-full bg-gray-300 group-hover:bg-purple-500 transition-colors" />}
                      {brand.name === 'HubSpot' && <span className="w-4 h-4 rounded-full bg-gray-300 group-hover:bg-orange-500 transition-colors" />}
                      {brand.name}
                    </span>
                 </div>
               ))}
            </div>

            <div className="flex items-center gap-3 mt-4">
                <div className="flex -space-x-2">
                    {[1,2,3,4].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center overflow-hidden">
                           <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i*123}`} alt="User" className="w-full h-full" />
                        </div>
                    ))}
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-50 flex items-center justify-center text-[10px] font-bold text-gray-500">
                        +12k
                    </div>
                </div>
                <div className="text-sm font-semibold text-gray-600">
                    Join 12,000+ marketers
                </div>
            </div>
          </motion.div>

          {/* Right Side: Metrics Grid */}
          <div className="relative">
             {/* Ambient Glow Behind Stats */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent blur-3xl rounded-full -z-10" />

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {STATS.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 group"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center group-hover:bg-white group-hover:shadow-md transition-all">
                                <stat.icon size={20} className="text-gray-400 group-hover:text-primary transition-colors" />
                            </div>
                            {index === 0 && <span className="bg-green-50 text-green-600 text-[10px] font-bold px-2 py-1 rounded-full">+12% mo/mo</span>}
                        </div>
                        <div className="mb-1">
                            <h3 className="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-gray-900 to-gray-600 group-hover:from-primary group-hover:to-secondary transition-all duration-500">
                                {stat.value}
                            </h3>
                        </div>
                        <div className="font-bold text-gray-900 mb-1">{stat.label}</div>
                        <p className="text-xs text-gray-500 font-medium">{stat.desc}</p>
                    </motion.div>
                ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
