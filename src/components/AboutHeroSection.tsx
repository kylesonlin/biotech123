import { Button } from '@/components/ui/button';
import { Target, Zap, Shield, Users } from 'lucide-react';

export const AboutHeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/src/assets/molecular-structure.png')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/95"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 gradient-text">
            Our Mission
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            To build a revolutionary <span className="text-primary font-semibold">GI tumor immunotherapy platform</span> around our 
            first-in-class double-stranded RNA immunotherapy treatment, transforming outcomes 
            for patients with gastrointestinal cancers.
          </p>

          {/* Core Values as floating elements */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="group">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Precision Targeting</h3>
              <p className="text-sm text-muted-foreground">90% of pancreatic cancers</p>
            </div>

            <div className="group">
              <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Dual Mechanism</h3>
              <p className="text-sm text-muted-foreground">Lysis + immune cascade</p>
            </div>

            <div className="group">
              <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Proven Safety</h3>
              <p className="text-sm text-muted-foreground">1,200+ patients</p>
            </div>

            <div className="group">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Patient Focus</h3>
              <p className="text-sm text-muted-foreground">Urgent GI need</p>
            </div>
          </div>

          <Button 
            size="lg" 
            className="bg-gradient-primary hover:opacity-90 text-white px-8 py-4 text-lg shadow-glow"
            asChild
          >
            <a href="/about">Learn More About Us</a>
          </Button>
        </div>
      </div>
    </section>
  );
};