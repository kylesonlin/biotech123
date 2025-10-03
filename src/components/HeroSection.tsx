import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp } from 'lucide-react';
import heroImage from '@/assets/hero-molecular.jpg';
import { HelixTracks } from '@/components/HelixTracks';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Double-stranded RNA molecular structures" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20"></div>
      </div>

      {/* DNA Helix Particle Animation */}
      <HelixTracks />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Main Content */}
            <div>
              {/* Stock Ticker */}
              <div className="inline-flex items-center space-x-2 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-full px-4 py-2 mb-8">
                <TrendingUp className="w-4 h-4 text-accent" />
                <span className="text-sm font-mono text-accent-bright">NASDAQ: ONCY</span>
                <span className="text-xs text-accent/80">• Live</span>
              </div>

              {/* Main Headline - Playfair Display Serif */}
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                First-In-Class
                <span className="block text-accent-bright mt-2">
                  GI Immunotherapy Platform
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                <strong>Pelareorep</strong> is a double-stranded RNA oncolytic virus designed to 
                selectively replicate in RAS-mutant tumors—delivering dual action: 
                direct tumor cell lysis and immune activation.
              </p>

              {/* Call to Action Button */}
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-6 text-lg"
              >
                Explore Our Science
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Right Column: Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              {/* Large Stat - 1,200+ Patients */}
              <div className="col-span-2 glass-effect bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="text-6xl font-serif font-bold text-accent-bright mb-2">1,200+</div>
                <div className="text-xl text-white/90">Patients Treated</div>
              </div>

              {/* 20+ Clinical Studies */}
              <div className="glass-effect bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-serif font-bold text-accent-bright mb-2">20+</div>
                <div className="text-base text-white/90">Clinical Studies</div>
              </div>

              {/* NO MTD */}
              <div className="glass-effect bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-serif font-bold text-accent-bright mb-2">NO</div>
                <div className="text-base text-white/90">MTD</div>
              </div>

              {/* 3 GI Indications */}
              <div className="glass-effect bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-serif font-bold text-accent-bright mb-2">3</div>
                <div className="text-base text-white/90">GI Indications</div>
              </div>

              {/* 15 Years */}
              <div className="glass-effect bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-serif font-bold text-accent-bright mb-2">15</div>
                <div className="text-base text-white/90">Years Clinical Development</div>
              </div>
            </div>
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
