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
        <div className="max-w-4xl">
          <div className="mb-8">
            <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
              <TrendingUp className="w-4 h-4" />
              <span>STOCK: $127.45 (+12.3%)</span>
              <span className="mx-2">•</span>
              <span>PHASE III RESULTS PENDING</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Revolutionizing
            <span className="block text-accent">RNA Therapeutics</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Pioneering breakthrough treatments through advanced RNA interference technology, 
            targeting previously undruggable diseases with precision molecular medicine.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="group bg-white text-primary hover:bg-white/90">
              View Our Pipeline
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">4</div>
              <div className="text-sm uppercase tracking-wide text-white/70">Programs in Pipeline</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">$2.1B</div>
              <div className="text-sm uppercase tracking-wide text-white/70">Market Opportunity</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">15+</div>
              <div className="text-sm uppercase tracking-wide text-white/70">Patents Pending</div>
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