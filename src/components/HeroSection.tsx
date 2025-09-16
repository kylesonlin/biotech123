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

      {/* Content - HIDDEN FOR HELIX MAPPING */}
      {/* <div className="relative z-20 container mx-auto px-6 py-24">
        <div className="max-w-4xl">
          Stock Ticker, Headlines, Stats, Buttons, etc. - temporarily hidden
        </div>
      </div> */}

      {/* Scroll Indicator - HIDDEN FOR HELIX MAPPING */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div> */}
    </section>
  );
};