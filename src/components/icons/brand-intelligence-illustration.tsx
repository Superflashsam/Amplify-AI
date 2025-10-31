const BrandIntelligenceIllustration = ({ className }: { className?: string }) => (
    <svg 
      viewBox="0 0 280 180" 
      className={className} 
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="brandIntelligenceTitle brandIntelligenceDesc"
      role="img"
    >
      <title id="brandIntelligenceTitle">Brand Intelligence Illustration</title>
      <desc id="brandIntelligenceDesc">An abstract illustration showing a human head with a neural network inside, a pie chart, a checklist, a lightbulb with a brain, and an upward-trending arrow, symbolizing data analysis and growth.</desc>
      
      {/* Background Elements */}
      <circle cx="255" cy="145" r="3" fill="#60A5FA" className="animate-float-subtle" style={{ animationDelay: '0.5s' }} />
      <circle cx="265" cy="155" r="2" fill="#A78BFA" className="animate-float-subtle" />
      <circle cx="50" cy="20" r="4" fill="#60A5FA" className="animate-float-subtle" />
      <circle cx="65" cy="10" r="2.5" fill="#F472B6" className="animate-float-subtle" style={{ animationDelay: '1s' }}/>

      {/* Main container with slide-in animation */}
      <g className="animate-illustration-slide-in">
        {/* Checklist */}
        <g transform="translate(10, 55)">
          <rect width="80" height="65" rx="5" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5" />
          <path d="M 20 22 L 60 22" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 52 18 L 58 26 M 52 26 L 58 18" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
          
          <rect x="12" y="32" width="20" height="10" rx="3" fill="#A78BFA" fillOpacity="0.8" />
          <path d="M 15 37 l 3 3 l 6 -6" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 40 37 L 70 37" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />

          <circle cx="17" cy="52" r="3" stroke="#CBD5E1" strokeWidth="1.5" fill="none" />
          <path d="M 30 52 L 60 52" stroke="#E5E7EB" strokeWidth="1.5" strokeLinecap="round" />
        </g>

        {/* Pie Chart */}
        <g className="animate-pie-chart-draw" style={{ transformOrigin: '58px 80px' }}>
          <circle cx="58" cy="80" r="20" fill="#F472B6"/>
          <path d="M58 80 L58 60 A20 20 0 0 1 78 80 Z" fill="#93C5FD" />
          <path d="M58 80 L78 80 A20 20 0 0 1 47.3 97.3 Z" fill="#A78BFA" />
          <circle cx="58" cy="80" r="6" fill="#FFFFFF" />
        </g>

        {/* Central Element: Document + Head */}
        <rect x="80" y="30" width="100" height="120" rx="8" fill="#A78BFA" fillOpacity="0.8"/>
        <path d="M100 135 C 95 120, 100 100, 120 90 S 160 90, 170 105 S 175 130, 160 145 S 130 160, 110 150 S 105 145, 100 135 Z" fill="#FFFFFF" />

        {/* Neural net inside head */}
        <g transform="translate(118, 98)" stroke="#60A5FA" strokeWidth="0.7">
          <path d="M10 10 L 20 2, M10 10 L 2 18, M10 10 L 15 25, M20 2 L 30 5, M20 2 L 25 15, M2 18 L 15 25, M30 5 L 40 12, M30 5 L 25 15, M25 15 L 40 12, M25 15 L 35 28, M15 25 L 35 28" className="animate-neural-path" />
          <circle cx="10" cy="10" r="2" fill="#60A5FA" className="animate-neural-node" />
          <circle cx="20" cy="2" r="1.5" fill="#60A5FA" className="animate-neural-node" style={{animationDelay: '0.1s'}} />
          <circle cx="2" cy="18" r="2" fill="#60A5FA" className="animate-neural-node" style={{animationDelay: '0.2s'}} />
          <circle cx="15" cy="25" r="2.5" fill="#60A5FA" className="animate-neural-node" style={{animationDelay: '0.3s'}} />
          <circle cx="30" cy="5" r="2" fill="#60A5FA" className="animate-neural-node" style={{animationDelay: '0.4s'}} />
          <circle cx="25" cy="15" r="3" fill="#60A5FA" className="animate-neural-node" style={{animationDelay: '0.5s'}} />
          <circle cx="40" cy="12" r="1.5" fill="#60A5FA" className="animate-neural-node" style={{animationDelay: '0.6s'}} />
          <circle cx="35" cy="28" r="2" fill="#60A5FA" className="animate-neural-node" style={{animationDelay: '0.7s'}}/>
        </g>
        
        {/* Lightbulb */}
        <g transform="translate(175, 45)">
            <path d="M15 33 C 12 30, 10 25, 10 20 A 15 15 0 1 1 40 20 C 40 25, 38 30, 35 33 L 15 33 Z" fill="#E0E7FF" />
            <rect x="18" y="33" width="14" height="4" rx="1" fill="#E0E7FF" />
            <path d="M15 37 h20, M16 40 h18, M17 43 h16" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" />
            
            {/* Brain inside lightbulb */}
            <g transform="translate(25, 12) scale(0.4)" className="animate-lightbulb-brain-pulse">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10a9.99 9.99 0 004-1M22 12c0 5.523-4.477 10-10 10a9.99 9.99 0 01-4-1" stroke="#F472B6" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <path d="M12 2c0 3 2 5 2 5s2-2 2-5M12 22c0-3-2-5-2-5s-2 2-2 5M6 9c-2 0-2 4 0 4s2-4 0-4zm12 0c2 0 2 4 0 4s-2-4 0-4z" fill="#F472B6" stroke="#F472B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 12v-2m0 4v-2" stroke="#F472B6" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </g>

            {/* Text bubble */}
            <rect x="45" y="45" width="40" height="20" rx="3" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5" className="animate-text-bubble-appear"/>
            <path d="M 50 50 h 30, M 50 56 h 20, M 50 62 h 25" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" className="animate-text-bubble-appear" style={{animationDelay: '1.2s'}}/>
        </g>
        
        {/* Growth Arrow */}
        <path d="M40 160 L 100 100 L 120 120 L 180 60 L 220 100" stroke="#EC4899" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" className="animate-arrow-draw" />
      </g>
    </svg>
  );

export default BrandIntelligenceIllustration;