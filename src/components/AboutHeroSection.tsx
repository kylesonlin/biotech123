import { Button } from '@/components/ui/button';
import { Target, Zap, Shield } from 'lucide-react';

export const AboutHeroSection = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-subtle">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('/src/assets/molecular-structure.png')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background via-transparent to-background/90"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Main Positioning Statement */}
        <div className="max-w-5xl mx-auto">
          {/* Asymmetrical Layout */}
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
            {/* Left Column - Main Message */}
            <div className="lg:col-span-7">
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                  First-in-Class Immunotherapy
                </span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                Transforming 
                <span className="gradient-text"> GI Cancer</span>
                <br />Treatment
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                We're pioneering a revolutionary approach to gastrointestinal cancers with <span className="text-primary font-semibold">Pelareorep</span> — 
                the world's most advanced double-stranded RNA immunotherapy. Where others have failed, 
                we're delivering breakthrough results in the most challenging oncology indications.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 text-white px-8 py-4 text-lg shadow-glow"
                  asChild
                >
                  <a href="/science">Explore Our Science</a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="px-8 py-4 text-lg border-primary/20 hover:bg-primary/10"
                  asChild
                >
                  <a href="/pipeline">View Pipeline</a>
                </Button>
              </div>
            </div>

            {/* Right Column - Key Stats */}
            <div className="lg:col-span-5">
              <div className="grid gap-6">
                <div className="glass-effect rounded-2xl p-6 hover-lift">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">90%</div>
                      <div className="text-sm text-muted-foreground">Pancreatic Cancer Target</div>
                    </div>
                  </div>
                </div>

                <div className="glass-effect rounded-2xl p-6 hover-lift">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center shadow-glow">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-secondary">1,200+</div>
                      <div className="text-sm text-muted-foreground">Patients Safely Treated</div>
                    </div>
                  </div>
                </div>

                <div className="glass-effect rounded-2xl p-6 hover-lift">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center shadow-glow">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">$16B+</div>
                      <div className="text-sm text-muted-foreground">Market Opportunity</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Competitive Differentiation */}
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-8">Why We're Different</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-glow">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2 text-lg">Dual-Action Mechanism</h4>
                <p className="text-muted-foreground">Direct oncolysis combined with immune activation — a unique approach that addresses cancer from multiple angles simultaneously.</p>
              </div>

              <div className="group">
                <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-glow">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2 text-lg">Proven Safety Profile</h4>
                <p className="text-muted-foreground">15+ years of clinical experience with no maximum tolerated dose identified — exceptional safety in the most vulnerable patient populations.</p>
              </div>

              <div className="group">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-glow">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2 text-lg">Strategic Focus</h4>
                <p className="text-muted-foreground">Concentrated expertise in GI cancers with the highest unmet medical need and largest commercial opportunities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};