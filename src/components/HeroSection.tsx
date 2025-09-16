import { Button } from '@/components/ui/button';
import { ArrowRight, Play, TrendingUp } from 'lucide-react';
import heroImage from '@/assets/hero-molecular.jpg';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Static DNA Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Double-stranded RNA molecular structures" 
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"></div>
      </div>

      {/* DNA Dual Helix Track Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {/* DNA Helix Track A - Clockwise Spiral */}
        <div 
          className="absolute left-0 w-3 h-3 bg-accent rounded-full will-change-transform shadow-lg" 
          style={{ 
            animation: 'helical-motion-a 30s cubic-bezier(0.4, 0, 0.2, 1) infinite, sine-oscillation-a 30s ease-in-out infinite',
            animationDelay: '0s',
            filter: 'drop-shadow(0 0 8px hsl(var(--accent)))'
          }}
        ></div>
        <div 
          className="absolute left-0 w-2 h-2 bg-primary-glow rounded-full will-change-transform" 
          style={{ 
            animation: 'helical-motion-a 32s cubic-bezier(0.4, 0, 0.2, 1) infinite, sine-oscillation-a 32s ease-in-out infinite',
            animationDelay: '8s',
            filter: 'drop-shadow(0 0 6px hsl(var(--primary-glow)))'
          }}
        ></div>
        <div 
          className="absolute left-0 w-4 h-4 bg-accent-bright rounded-full will-change-transform" 
          style={{ 
            animation: 'helical-motion-a 28s cubic-bezier(0.4, 0, 0.2, 1) infinite, sine-oscillation-a 28s ease-in-out infinite',
            animationDelay: '16s',
            filter: 'drop-shadow(0 0 10px hsl(var(--accent-bright)))'
          }}
        ></div>
        <div 
          className="absolute left-0 w-2 h-2 bg-secondary-glow rounded-full will-change-transform" 
          style={{ 
            animation: 'helical-motion-a 35s cubic-bezier(0.4, 0, 0.2, 1) infinite, sine-oscillation-a 35s ease-in-out infinite',
            animationDelay: '24s',
            filter: 'drop-shadow(0 0 6px hsl(var(--secondary-glow)))'
          }}
        ></div>
        
        {/* DNA Helix Track B - Counter-clockwise Spiral (Phase Offset) */}
        <div 
          className="absolute left-0 w-3 h-3 bg-primary rounded-full will-change-transform shadow-lg" 
          style={{ 
            animation: 'helical-motion-b 31s cubic-bezier(0.4, 0, 0.2, 1) infinite, sine-oscillation-b 31s ease-in-out infinite',
            animationDelay: '4s',
            filter: 'drop-shadow(0 0 8px hsl(var(--primary)))'
          }}
        ></div>
        <div 
          className="absolute left-0 w-2 h-2 bg-accent rounded-full will-change-transform" 
          style={{ 
            animation: 'helical-motion-b 33s cubic-bezier(0.4, 0, 0.2, 1) infinite, sine-oscillation-b 33s ease-in-out infinite',
            animationDelay: '12s',
            filter: 'drop-shadow(0 0 6px hsl(var(--accent)))'
          }}
        ></div>
        <div 
          className="absolute left-0 w-3 h-3 bg-secondary-glow rounded-full will-change-transform" 
          style={{ 
            animation: 'helical-motion-b 29s cubic-bezier(0.4, 0, 0.2, 1) infinite, sine-oscillation-b 29s ease-in-out infinite',
            animationDelay: '20s',
            filter: 'drop-shadow(0 0 8px hsl(var(--secondary-glow)))'
          }}
        ></div>
        <div 
          className="absolute left-0 w-1 h-1 bg-accent-bright rounded-full will-change-transform" 
          style={{ 
            animation: 'helical-motion-b 34s cubic-bezier(0.4, 0, 0.2, 1) infinite, sine-oscillation-b 34s ease-in-out infinite',
            animationDelay: '28s',
            filter: 'drop-shadow(0 0 4px hsl(var(--accent-bright)))'
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 py-24">
        <div className="max-w-4xl">
          {/* Stock Ticker */}
          <div className="inline-flex items-center space-x-2 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-full px-4 py-2 mb-8">
            <TrendingUp className="w-4 h-4 text-accent" />
            <span className="text-sm font-mono text-accent-bright">NASDAQ: ONCY</span>
            <span className="text-xs text-accent/80">• Live</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Revolutionizing
            <span className="block gradient-text bg-gradient-accent bg-clip-text text-transparent">
              GI Cancer Treatment
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl leading-relaxed">
            <strong>Pelareorep</strong> — the first-in-class double-stranded RNA oncolytic virus 
            immunotherapy targeting gastrointestinal cancers through the RAS pathway.
          </p>

          {/* Key Stats */}
          <div className="flex flex-wrap gap-6 mb-10">
            <div className="glass-effect rounded-lg px-4 py-3 border border-white/10">
              <div className="text-2xl font-bold text-accent-bright">1,100+</div>
              <div className="text-sm text-white/80">Patients Dosed</div>
            </div>
            <div className="glass-effect rounded-lg px-4 py-3 border border-white/10">
              <div className="text-2xl font-bold text-accent-bright">15</div>
              <div className="text-sm text-white/80">Years Safety Data</div>
            </div>
            <div className="glass-effect rounded-lg px-4 py-3 border border-white/10">
              <div className="text-2xl font-bold text-accent-bright">3</div>
              <div className="text-sm text-white/80">GI Indications</div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-gradient-accent hover:opacity-90 text-primary font-semibold px-8 py-6 text-lg">
              Learn About Our Science
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Mechanism Video
            </Button>

            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg"
            >
              Investor Relations
            </Button>
          </div>

          {/* Key Differentiator */}
          <div className="mt-12 p-6 glass-effect rounded-xl border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">Why Pelareorep is Different</h3>
            <ul className="text-white/90 space-y-1 text-sm">
              <li>• Only IV oncolytic virus not neutralized in blood</li>
              <li>• Dual mechanism: Cell lysis + immune cascade response</li>
              <li>• Targets RAS mutations in 90% of pancreatic cancers</li>
              <li>• Made in America with established safety profile</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};