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

      {/* DNA Dual Helix Track Particles - Enhanced with 16 particles for smoother motion */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {/* DNA Helix Track A - Clockwise Spiral (8 particles) */}
        <div 
          className="absolute left-0 w-3 h-3 bg-accent rounded-full will-change-transform shadow-lg" 
          style={{ 
            animation: 'helical-diagonal-a 42s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
            animationDelay: '0s',
            filter: 'drop-shadow(0 0 8px hsl(var(--accent)))',
            opacity: '1'
          }}
        ></div>
        <div 
          className="absolute left-0 w-2 h-2 bg-primary-glow rounded-full will-change-transform" 
          style={{ 
            animation: 'helical-diagonal-a 42s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
            animationDelay: '1.25s',
            filter: 'drop-shadow(0 0 6px hsl(var(--primary-glow)))',
            opacity: '0.9'
          }}
        ></div>
        <div 
          className="absolute left-0 w-5 h-5 bg-accent-bright rounded-full will-change-transform" 
          style={{ 
            animation: 'helical-diagonal-a 42s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
            animationDelay: '2.5s',
            filter: 'drop-shadow(0 0 12px hsl(var(--accent-bright)))',
            opacity: '1'
          }}
        ></div>
        <div 
          className="absolute left-0 w-2 h-2 bg-secondary-glow rounded-full will-change-transform" 
          style={{ 
            animation: 'helical-diagonal-a 42s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
            animationDelay: '3.75s',
            filter: 'drop-shadow(0 0 6px hsl(var(--secondary-glow)))',
            opacity: '0.8'
          }}
        ></div>
        <div 
          className="absolute left-0 w-4 h-4 bg-primary rounded-full will-change-transform" 
          style={{ 
            animation: 'helical-diagonal-a 42s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
            animationDelay: '5s',
            filter: 'drop-shadow(0 0 10px hsl(var(--primary)))',
            opacity: '1'
          }}
        ></div>
        <div 
          className="absolute left-0 w-1 h-1 bg-accent rounded-full will-change-transform" 
          style={{ 
            animation: 'helical-diagonal-a 42s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
            animationDelay: '6.25s',
            filter: 'drop-shadow(0 0 4px hsl(var(--accent)))',
            opacity: '0.9'
          }}
        ></div>
        <div 
          className="absolute left-0 w-3 h-3 bg-primary-glow rounded-full will-change-transform" 
          style={{ 
            animation: 'helical-diagonal-a 42s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
            animationDelay: '7.5s',
            filter: 'drop-shadow(0 0 8px hsl(var(--primary-glow)))',
            opacity: '1'
          }}
        ></div>
        <div 
          className="absolute left-0 w-2 h-2 bg-accent-bright rounded-full will-change-transform" 
          style={{ 
            animation: 'helical-diagonal-a 42s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
            animationDelay: '8.75s',
            filter: 'drop-shadow(0 0 6px hsl(var(--accent-bright)))',
            opacity: '0.8'
          }}
        ></div>
        
        {/* DNA Helix Track B - Counter-clockwise Spiral (8 particles) */}
        <div 
          className="absolute left-0 w-3 h-3 bg-secondary-glow rounded-full will-change-transform shadow-lg" 
          style={{ 
            animation: 'helical-diagonal-b 42s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
            animationDelay: '0s',
            filter: 'drop-shadow(0 0 8px hsl(var(--secondary-glow)))',
            opacity: '1'
          }}
        ></div>
        <div 
          className="absolute left-0 w-4 h-4 bg-primary rounded-full will-change-transform" 
          style={{ 
            animation: 'helical-diagonal-b 42s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
            animationDelay: '1.25s',
            filter: 'drop-shadow(0 0 10px hsl(var(--primary)))',
            opacity: '0.9'
          }}
        ></div>
        <div 
          className="absolute left-0 w-2 h-2 bg-accent rounded-full will-change-transform" 
          style={{ 
            animation: 'helical-diagonal-b 42s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
            animationDelay: '2.5s',
            filter: 'drop-shadow(0 0 6px hsl(var(--accent)))',
            opacity: '0.8'
          }}
        ></div>
        <div 
          className="absolute left-0 w-1 h-1 bg-primary-glow rounded-full will-change-transform" 
          style={{ 
            animation: 'helical-diagonal-b 42s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
            animationDelay: '3.75s',
            filter: 'drop-shadow(0 0 4px hsl(var(--primary-glow)))',
            opacity: '0.9'
          }}
        ></div>
        <div 
          className="absolute left-0 w-5 h-5 bg-accent-bright rounded-full will-change-transform" 
          style={{ 
            animation: 'helical-diagonal-b 42s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
            animationDelay: '5s',
            filter: 'drop-shadow(0 0 12px hsl(var(--accent-bright)))',
            opacity: '1'
          }}
        ></div>
        <div 
          className="absolute left-0 w-3 h-3 bg-secondary rounded-full will-change-transform" 
          style={{ 
            animation: 'helical-diagonal-b 42s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
            animationDelay: '6.25s',
            filter: 'drop-shadow(0 0 8px hsl(var(--secondary)))',
            opacity: '0.8'
          }}
        ></div>
        <div 
          className="absolute left-0 w-2 h-2 bg-accent rounded-full will-change-transform" 
          style={{ 
            animation: 'helical-diagonal-b 42s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
            animationDelay: '7.5s',
            filter: 'drop-shadow(0 0 6px hsl(var(--accent)))',
            opacity: '1'
          }}
        ></div>
        <div 
          className="absolute left-0 w-4 h-4 bg-primary-glow rounded-full will-change-transform" 
          style={{ 
            animation: 'helical-diagonal-b 42s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
            animationDelay: '8.75s',
            filter: 'drop-shadow(0 0 10px hsl(var(--primary-glow)))',
            opacity: '0.9'
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