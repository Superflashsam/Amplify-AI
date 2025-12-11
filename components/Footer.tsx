
import React from 'react';
import { Twitter, Linkedin, Youtube, Instagram, Disc, Shield, Globe } from 'lucide-react';
import { AmplifyLogo3D } from './UiElements';

export const Footer: React.FC = () => {
   return (
      <footer className="bg-[#06080F] text-gray-400 border-t border-white/10 pt-20 pb-12 relative overflow-hidden">
         {/* Background Glow */}
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />

         <div className="max-w-[1280px] mx-auto px-6 relative z-10">

            {/* Top Section: Newsletter & Brand */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 border-b border-white/5 pb-12">
               <div>
                  <div className="flex items-center gap-2 mb-6 text-white">
                     <div className="w-8 h-8"><AmplifyLogo3D /></div>
                     <span className="font-serif font-bold text-2xl">Amplify.ai</span>
                  </div>
                  <p className="text-lg text-gray-400 max-w-md leading-relaxed">
                     The AI marketing operating system for modern teams.
                     Scale content, automate workflows, and grow faster.
                  </p>

                  {/* Social Icons */}
                  <div className="flex gap-4 mt-8">
                     {[Linkedin, Twitter, Youtube, Instagram, Disc].map((Icon, i) => (
                        <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-all duration-300">
                           <Icon size={18} />
                        </a>
                     ))}
                  </div>
               </div>

               <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                  <h3 className="text-white font-bold text-xl mb-2">Join 45,000+ marketers</h3>
                  <p className="text-gray-400 text-sm mb-6">Get weekly AI growth strategies and product updates.</p>
                  <div className="flex gap-2">
                     <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-indigo-500 transition-colors"
                     />
                     <button className="btn-gradient text-white px-6 py-3 rounded-lg font-bold transition-all focus-ring">
                        <span className="text-shadow-sm whitespace-nowrap">Subscribe</span>
                     </button>
                  </div>
               </div>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
               <div>
                  <h4 className="text-white font-bold mb-6">Product</h4>
                  <ul className="space-y-4 text-sm">
                     {['Features', 'Pricing', 'Integrations', 'Changelog', 'Roadmap', 'Enterprise'].map(item => (
                        <li key={item}><a href="#" className="hover:text-indigo-400 transition-colors">{item}</a></li>
                     ))}
                  </ul>
               </div>
               <div>
                  <h4 className="text-white font-bold mb-6">Company</h4>
                  <ul className="space-y-4 text-sm">
                     {['About', 'Careers', 'Blog', 'Contact', 'Partners', 'Press'].map(item => (
                        <li key={item}><a href="#" className="hover:text-indigo-400 transition-colors">{item}</a></li>
                     ))}
                  </ul>
               </div>
               <div>
                  <h4 className="text-white font-bold mb-6">Resources</h4>
                  <ul className="space-y-4 text-sm">
                     {['Community', 'Help Center', 'API Docs', 'System Status', 'Security', 'Media Kit'].map(item => (
                        <li key={item}><a href="#" className="hover:text-indigo-400 transition-colors">{item}</a></li>
                     ))}
                  </ul>
               </div>
               <div>
                  <h4 className="text-white font-bold mb-6">Legal</h4>
                  <ul className="space-y-4 text-sm">
                     {['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'DPA', 'Subprocessors'].map(item => (
                        <li key={item}><a href="#" className="hover:text-indigo-400 transition-colors">{item}</a></li>
                     ))}
                  </ul>
               </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-xs text-gray-500">
               <div className="mb-4 md:mb-0">
                  © 2025 Amplify.ai Inc. All rights reserved.
               </div>
               <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/5">
                     <Shield size={12} className="text-green-500" />
                     <span>SOC2 Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                     <span>All Systems Operational</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <Globe size={12} />
                     <span>English (US)</span>
                  </div>
               </div>
            </div>

         </div>
      </footer>
   );
};
