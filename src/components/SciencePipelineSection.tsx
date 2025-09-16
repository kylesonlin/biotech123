import { Button } from '@/components/ui/button';
import { Target, Copy, Zap, Shield, TrendingUp, BarChart3, Activity } from 'lucide-react';

export const SciencePipelineSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-background/95 to-background">
      <div className="container mx-auto px-6">
        
        {/* Science Section - How Pelareorep Works */}
        <div className="max-w-6xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            How Pelareorep Works
          </h2>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
            First-in-class double-stranded RNA immunotherapy that selectively targets and destroys cancer cells while activating the immune system
          </p>

          {/* Mechanism Steps */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="group">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Target</h3>
              <p className="text-sm text-muted-foreground">Selectively infects cancer cells</p>
            </div>

            <div className="group">
              <div className="w-20 h-20 bg-gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                <Copy className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Replicate</h3>
              <p className="text-sm text-muted-foreground">Replicates within tumor cells</p>
            </div>

            <div className="group">
              <div className="w-20 h-20 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                <Zap className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Destroy</h3>
              <p className="text-sm text-muted-foreground">Causes cancer cell death</p>
            </div>

            <div className="group">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Activate</h3>
              <p className="text-sm text-muted-foreground">Stimulates immune response</p>
            </div>
          </div>

          {/* Science Stats */}
          <div className="grid grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">1,200+</div>
              <div className="text-sm text-muted-foreground">Patients Treated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent">No MTD</div>
              <div className="text-sm text-muted-foreground">Excellent Tolerability</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary">15 Years</div>
              <div className="text-sm text-muted-foreground">Clinical Experience</div>
            </div>
          </div>
        </div>

        {/* Pipeline Section - 3 High-Value GI Indications */}
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            3 High-Value GI Indications
          </h2>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
            Targeting the largest oncology markets with our differentiated immunotherapy approach
          </p>

          {/* Pipeline Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-background/60 backdrop-blur-sm rounded-2xl p-8 border border-border/20 hover:bg-background/80 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6 shadow-glow">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm text-primary font-semibold mb-2">Phase 3 Ready</div>
              <h3 className="text-xl font-bold mb-4">Pancreatic Cancer</h3>
              <p className="text-muted-foreground mb-6">Metastatic pancreatic adenocarcinoma in combination with immune checkpoint inhibitors</p>
              <div className="text-2xl font-bold text-primary">$8.2B Market</div>
            </div>

            <div className="bg-background/60 backdrop-blur-sm rounded-2xl p-8 border border-border/20 hover:bg-background/80 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-secondary rounded-2xl mb-6 shadow-glow">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm text-secondary font-semibold mb-2">Phase 2</div>
              <h3 className="text-xl font-bold mb-4">Colorectal Cancer</h3>
              <p className="text-muted-foreground mb-6">Metastatic colorectal cancer with immune checkpoint blockade therapy</p>
              <div className="text-2xl font-bold text-secondary">$6.1B Market</div>
            </div>

            <div className="bg-background/60 backdrop-blur-sm rounded-2xl p-8 border border-border/20 hover:bg-background/80 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-2xl mb-6 shadow-glow">
                <Activity className="w-8 h-8 text-primary" />
              </div>
              <div className="text-sm text-accent font-semibold mb-2">Phase 1/2</div>
              <h3 className="text-xl font-bold mb-4">Anal Cancer</h3>
              <p className="text-muted-foreground mb-6">Squamous cell carcinoma of the anus with pembrolizumab</p>
              <div className="text-2xl font-bold text-accent">$1.9B Market</div>
            </div>
          </div>

          {/* Market TAM */}
          <div className="bg-gradient-primary/10 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 mb-12">
            <div className="text-5xl font-bold text-primary mb-2">$16B+</div>
            <div className="text-xl text-muted-foreground">Total Addressable Market</div>
          </div>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 text-white px-8 py-4 text-lg shadow-glow"
              asChild
            >
              <a href="/science">Explore the Science</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 py-4 text-lg border-primary/20 hover:bg-primary/10"
              asChild
            >
              <a href="/pipeline">View Pipeline Details</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};