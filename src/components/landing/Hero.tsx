import { Button } from '@/components/ui/button';
import { Check, CheckCircle, TrendingUp, TrendingDown, Play, Calendar, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-12 pb-20 bg-gradient-to-br from-white via-light-slate/30 to-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30" style={{backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255, 107, 91, 0.08) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.06) 0%, transparent 50%)'}}></div>
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-10 relative">
        
        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amplify-coral/10 to-electric-purple/10 border border-amplify-coral/20 text-deep-charcoal text-sm font-medium mb-8 animate-fadeIn" style={{animationDelay: '0.2s'}}>
            <div className="h-2 w-2 rounded-full bg-amplify-coral animate-pulse"></div>
            New: Multi-channel campaign orchestration
          </div>

          <h1 className="text-5xl md:text-7xl animate-slideUp text-deep-charcoal tracking-tight font-display mb-6 font-bold" style={{animationDelay: '0.4s'}}>
            Amplify Your Brand<br/>
            <span className="text-gradient font-bold">With AI-Powered Marketing</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-gray mb-8 leading-relaxed animate-slideUp max-w-3xl mx-auto" style={{animationDelay: '0.6s'}}>
            Generate on-brand content, orchestrate campaigns across all channels, and track performance—all powered by intelligent AI that learns and optimizes for your success.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slideUp" style={{animationDelay: '0.8s'}}>
            <Button size="lg" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amplify-coral to-electric-purple hover:shadow-xl text-white font-semibold rounded-2xl shadow-lg shadow-amplify-coral/30 transition-all duration-200 text-lg">
              Get Started Free
              <ChevronRight className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="inline-flex items-center gap-3 px-8 py-4 bg-white hover:bg-light-slate text-deep-charcoal font-semibold rounded-2xl transition-all duration-200 border-2 border-slate-gray/20 hover:border-slate-gray/40 text-lg shadow-sm">
              <Play className="h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-8 mt-12 text-sm text-slate-gray animate-fadeIn flex-wrap" style={{animationDelay: '1s'}}>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-lime-green" />
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-lime-green" />
              14-day free trial
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-lime-green" />
              Setup in 5 minutes
            </div>
          </div>
        </div>

        {/* Hero Dashboard Preview */}
        <div className="relative max-w-6xl mx-auto animate-slideUp" style={{animationDelay: '1.2s'}}>
          <div className="absolute -inset-4 bg-gradient-to-r from-amplify-coral/20 via-electric-purple/20 to-vibrant-magenta/20 rounded-3xl blur-3xl"></div>
          <div className="relative shadow-2xl shadow-slate-gray/20 border-2 border-slate-gray/10 overflow-hidden bg-white rounded-3xl">
            
            {/* Dashboard Header */}
            <div className="px-6 pt-6 pb-4 border-b border-slate-gray/10 bg-gradient-to-r from-light-slate/50 to-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-amplify-coral to-electric-purple flex items-center justify-center shadow-lg shadow-amplify-coral/20">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold tracking-tight text-deep-charcoal font-display">Campaign Performance</div>
                    <div className="text-sm text-slate-gray">Multi-channel analytics overview</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-lime-green/10 to-lime-green/5 border border-lime-green/20">
                    <div className="h-2 w-2 rounded-full bg-lime-green animate-pulse"></div>
                    <span className="text-sm text-lime-green font-medium">Live</span>
                  </div>
                  <Button variant="outline" className="h-9 px-4 rounded-xl bg-light-slate hover:bg-slate-gray/10 transition-all duration-200 border-slate-gray/10 text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    Last 30 Days
                  </Button>
                </div>
              </div>
            </div>

            {/* Dashboard Content Area */}
            <div className="p-8 bg-gradient-to-br from-white to-light-slate/30">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                {/* Stat Card 1 */}
                <div className="p-6 rounded-2xl bg-white border-2 border-amplify-coral/20 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl font-bold text-amplify-coral mb-2 font-display">+127%</div>
                  <div className="text-sm text-slate-gray">Campaign Engagement</div>
                  <div className="flex items-center gap-1 mt-2">
                    <TrendingUp className="h-3.5 w-3.5 text-lime-green" />
                    <span className="text-xs text-lime-green">+24% vs last month</span>
                  </div>
                </div>

                {/* Stat Card 2 */}
                <div className="p-6 rounded-2xl bg-white border-2 border-electric-purple/20 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl font-bold text-electric-purple mb-2 font-display">3.8M</div>
                  <div className="text-sm text-slate-gray">Total Reach</div>
                  <div className="flex items-center gap-1 mt-2">
                    <TrendingUp className="h-3.5 w-3.5 text-lime-green" />
                    <span className="text-xs text-lime-green">Across 5 platforms</span>
                  </div>
                </div>

                {/* Stat Card 3 */}
                <div className="p-6 rounded-2xl bg-white border-2 border-sky-blue/20 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl font-bold text-sky-blue mb-2 font-display">$2.18</div>
                  <div className="text-sm text-slate-gray">Avg. Cost Per Click</div>
                  <div className="flex items-center gap-1 mt-2">
                    <TrendingDown className="h-3.5 w-3.5 text-vibrant-magenta" />
                    <span className="text-xs text-vibrant-magenta">-12% cost reduction</span>
                  </div>
                </div>
              </div>

              {/* Platform Performance Pills */}
              <div className="flex flex-wrap gap-3 justify-center">
                <div className="px-4 py-2 rounded-full bg-gradient-to-r from-amplify-coral/10 to-amplify-coral/5 border border-amplify-coral/20 text-sm font-medium text-deep-charcoal">
                  <span className="text-amplify-coral">●</span> Instagram • 24.7%
                </div>
                <div className="px-4 py-2 rounded-full bg-gradient-to-r from-sky-blue/10 to-sky-blue/5 border border-sky-blue/20 text-sm font-medium text-deep-charcoal">
                  <span className="text-sky-blue">●</span> LinkedIn • 18.3%
                </div>
                <div className="px-4 py-2 rounded-full bg-gradient-to-r from-electric-purple/10 to-electric-purple/5 border border-electric-purple/20 text-sm font-medium text-deep-charcoal">
                  <span className="text-electric-purple">●</span> Google Ads • 22.1%
                </div>
                <div className="px-4 py-2 rounded-full bg-gradient-to-r from-vibrant-magenta/10 to-vibrant-magenta/5 border border-vibrant-magenta/20 text-sm font-medium text-deep-charcoal">
                  <span className="text-vibrant-magenta">●</span> Meta • 19.6%
                </div>
                <div className="px-4 py-2 rounded-full bg-gradient-to-r from-lime-green/10 to-lime-green/5 border border-lime-green/20 text-sm font-medium text-deep-charcoal">
                  <span className="text-lime-green">●</span> TikTok • 15.3%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
