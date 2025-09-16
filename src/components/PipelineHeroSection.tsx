import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const PipelineHeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/src/assets/gi-tract-anatomy.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/85 to-background/90"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24 min-h-screen flex items-center">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 gradient-text">
            3 High-Value GI Indications
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            Targeting the most challenging <span className="text-primary font-semibold">gastrointestinal cancers</span> with established clinical programs
          </p>

          {/* Pipeline indications in simple 3-column layout */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="group">
              <div className="bg-background/20 backdrop-blur-sm rounded-2xl p-8 border border-border/20 group-hover:bg-background/30 transition-all duration-300">
                <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Phase 3 Ready</Badge>
                <h3 className="text-2xl font-bold mb-4 text-white">Pancreatic Cancer</h3>
                <p className="text-muted-foreground mb-4">PDAC combination therapy</p>
                <div className="text-sm text-muted-foreground">
                  90% RAS-mutant prevalence
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-background/20 backdrop-blur-sm rounded-2xl p-8 border border-border/20 group-hover:bg-background/30 transition-all duration-300">
                <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">Phase 2</Badge>
                <h3 className="text-2xl font-bold mb-4 text-white">Colorectal Cancer</h3>
                <p className="text-muted-foreground mb-4">MSS-CRC indication</p>
                <div className="text-sm text-muted-foreground">
                  High unmet medical need
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-background/20 backdrop-blur-sm rounded-2xl p-8 border border-border/20 group-hover:bg-background/30 transition-all duration-300">
                <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">Phase 1/2</Badge>
                <h3 className="text-2xl font-bold mb-4 text-white">Anal Cancer</h3>
                <p className="text-muted-foreground mb-4">Rare indication focus</p>
                <div className="text-sm text-muted-foreground">
                  Significant market potential
                </div>
              </div>
            </div>
          </div>

          {/* Market size callout */}
          <div className="bg-background/20 backdrop-blur-sm rounded-2xl p-8 border border-border/20 mb-12">
            <div className="text-5xl font-bold gradient-text mb-4">$16B+</div>
            <div className="text-xl text-muted-foreground">Total Addressable Market</div>
          </div>

          <Button 
            size="lg" 
            className="bg-gradient-primary hover:opacity-90 text-white px-8 py-4 text-lg shadow-glow"
            asChild
          >
            <a href="/pipeline">View Pipeline Details</a>
          </Button>
        </div>
      </div>
    </section>
  );
};