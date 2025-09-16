import { Button } from '@/components/ui/button';
import { ArrowRight, Play, TrendingUp } from 'lucide-react';
import heroImage from '@/assets/hero-molecular.jpg';
import HelixTracks from '@/components/HelixTracks';

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

      {/* DNA Dual Helix Track Particles - Precise Crossing Alignment */}
      <HelixTracks
        gapVh={10}
        y0={82} y1={41}
        c1={-10} c2={8}
        ampMin={9} ampMax={9}
        ampEase1={0.33} ampEase2={0.33}
        cycles={2.5}
        phase={4.5945616035}
        durationSec={14}
        countPerTrack={80}
        sizePx={5}
        colorFront="hsl(var(--accent))"
        colorBack="hsl(var(--accent) / 0.35)"
        showGuides={false}
        showIntersections={false}
        debugMode={false}
        showTracks={false}
        className="z-10"
      />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 py-24">
        {/* All content hidden for debug view */}
      </div>
    </section>
  );
};