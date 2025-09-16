import { Button } from '@/components/ui/button';
import { Dna, Zap, Target, Shield } from 'lucide-react';

export const ScienceHeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/src/assets/hero-molecular.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/90"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24 min-h-screen flex items-center">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 gradient-text">
            How Pelareorep Works
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            First-in-class <span className="text-primary font-semibold">double-stranded RNA immunotherapy</span> that selectively targets RAS-mutated cancer cells
          </p>

          {/* Mechanism steps as floating elements */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="group">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-white">1. Target</h3>
              <p className="text-sm text-muted-foreground">RAS-mutated cells</p>
            </div>

            <div className="group">
              <div className="w-20 h-20 bg-gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                <Dna className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-white">2. Replicate</h3>
              <p className="text-sm text-muted-foreground">Selective viral replication</p>
            </div>

            <div className="group">
              <div className="w-20 h-20 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                <Zap className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-white">3. Destroy</h3>
              <p className="text-sm text-muted-foreground">Direct cell lysis</p>
            </div>

            <div className="group">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-white">4. Activate</h3>
              <p className="text-sm text-muted-foreground">Immune cascade</p>
            </div>
          </div>

          {/* Key stats overlay */}
          <div className="grid grid-cols-3 gap-8 mb-12 bg-background/20 backdrop-blur-sm rounded-2xl p-8 border border-border/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">1,200+</div>
              <div className="text-sm text-muted-foreground">Patients Treated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">No MTD</div>
              <div className="text-sm text-muted-foreground">Well Tolerated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">15 Years</div>
              <div className="text-sm text-muted-foreground">Clinical Experience</div>
            </div>
          </div>

          <Button 
            size="lg" 
            className="bg-gradient-primary hover:opacity-90 text-white px-8 py-4 text-lg shadow-glow"
            asChild
          >
            <a href="/science">Explore the Science</a>
          </Button>
        </div>
      </div>
    </section>
  );
};