import { Button } from '@/components/ui/button';
import { ArrowRight, Play, TrendingUp } from 'lucide-react';
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
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent"></div>
      </div>

      {/* DNA Helix Particle Animation */}
      <HelixTracks />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 py-24">
        <div className="max-w-4xl text-center">
          {/* Stock Ticker */}
          <div className="inline-flex items-center space-x-2 bg-black/40 backdrop-blur-md border border-accent/30 rounded-full px-6 py-3 mb-12">
            <TrendingUp className="w-5 h-5 text-accent" />
            <span className="text-base font-mono text-accent-bright font-semibold">NASDAQ: ONCY</span>
            <span className="text-sm text-accent/90">• Live</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight">
            Revolutionizing
            <span className="block gradient-text bg-gradient-accent bg-clip-text text-transparent mt-2">
              GI Cancer Treatment
            </span>
          </h1>

          {/* Subheadline */}
          <div className="bg-black/50 backdrop-blur-md rounded-2xl p-8 mb-12 border border-white/10">
            <p className="text-2xl md:text-3xl text-white leading-relaxed max-w-4xl mx-auto">
              <strong className="text-accent-bright">Pelareorep</strong> — the first-in-class double-stranded RNA oncolytic virus 
              immunotherapy targeting gastrointestinal cancers through the RAS pathway.
            </p>
          </div>

          {/* Call to Action */}
          <div className="flex justify-center">
            <Button size="lg" className="bg-gradient-accent hover:opacity-90 text-primary font-bold px-10 py-8 text-xl rounded-xl">
              Learn About Our Science
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
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