import { Button } from '@/components/ui/button';
import { Building, TrendingUp, Award, Users } from 'lucide-react';

export const LeadershipHeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/src/assets/clinical-timeline-viz.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/95"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24 min-h-screen flex items-center">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 gradient-text">
            Proven Dealmakers
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            Leadership team with <span className="text-primary font-semibold">$2B transaction experience</span> and deep scientific expertise
          </p>

          {/* Key transaction highlight */}
          <div className="bg-background/20 backdrop-blur-sm rounded-2xl p-12 border border-border/20 mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-primary rounded-2xl mb-8 shadow-glow">
              <Building className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-6 text-white">CEO & CBO Led Ambrx Sale</h3>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">$2B</div>
                <div className="text-sm text-muted-foreground">Johnson & Johnson</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent">$100M+</div>
                <div className="text-sm text-muted-foreground">Capital Raised</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Team credibility without individual cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="group">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-white">CEO</h3>
              <p className="text-sm text-muted-foreground">Proven dealmaker</p>
            </div>

            <div className="group">
              <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-white">CBO</h3>
              <p className="text-sm text-muted-foreground">Strategic partnerships</p>
            </div>

            <div className="group">
              <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-white">CMO</h3>
              <p className="text-sm text-muted-foreground">Experienced virologist</p>
            </div>

            <div className="group">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-white">CFO</h3>
              <p className="text-sm text-muted-foreground">Capital markets expert</p>
            </div>
          </div>

          <Button 
            size="lg" 
            className="bg-gradient-primary hover:opacity-90 text-white px-8 py-4 text-lg shadow-glow"
            asChild
          >
            <a href="/team">Meet the Team</a>
          </Button>
        </div>
      </div>
    </section>
  );
};