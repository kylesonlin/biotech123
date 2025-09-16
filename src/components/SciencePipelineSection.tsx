import { Button } from '@/components/ui/button';
import { Target, Copy, Zap, Shield, TrendingUp, BarChart3, Activity } from 'lucide-react';

export const SciencePipelineSection = () => {
  return (
    <>
      {/* Science Mechanism Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Asymmetrical Science Layout */}
            <div className="grid lg:grid-cols-12 gap-16 items-center mb-20">
              {/* Left Column - Content */}
              <div className="lg:col-span-5">
                <div className="mb-6">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/20">
                    Breakthrough Mechanism
                  </span>
                </div>
                
                <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                  <span className="gradient-text">Pelareorep</span>
                  <br />Mechanism of Action
                </h2>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Our proprietary double-stranded RNA immunotherapy leverages a revolutionary 
                  dual-action approach: <span className="text-primary font-semibold">direct tumor cell destruction</span> 
                  combined with <span className="text-secondary font-semibold">systemic immune activation</span>.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow flex-shrink-0">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Selective Targeting</h4>
                      <p className="text-muted-foreground">Pelareorep preferentially replicates in cancer cells with defective interferon pathways — targeting 90% of pancreatic cancers.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center shadow-glow flex-shrink-0">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Immune Cascade</h4>
                      <p className="text-muted-foreground">Viral replication triggers inflammatory cell death, releasing tumor antigens and activating dendritic cells for sustained immune response.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Interactive Steps */}
              <div className="lg:col-span-7">
                <div className="grid grid-cols-2 gap-6">
                  <div className="glass-effect rounded-2xl p-8 hover-lift group">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">1. Target</h3>
                    <p className="text-muted-foreground mb-4">Selectively infects cancer cells with defective antiviral responses</p>
                    <div className="text-sm text-primary font-semibold">90% Selectivity</div>
                  </div>

                  <div className="glass-effect rounded-2xl p-8 hover-lift group mt-8">
                    <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300">
                      <Copy className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">2. Replicate</h3>
                    <p className="text-muted-foreground mb-4">Viral replication occurs exclusively within tumor microenvironment</p>
                    <div className="text-sm text-secondary font-semibold">Tumor-Specific</div>
                  </div>

                  <div className="glass-effect rounded-2xl p-8 hover-lift group">
                    <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">3. Destroy</h3>
                    <p className="text-muted-foreground mb-4">Induces immunogenic cell death, releasing tumor antigens</p>
                    <div className="text-sm text-accent font-semibold">Direct Lysis</div>
                  </div>

                  <div className="glass-effect rounded-2xl p-8 hover-lift group mt-8">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">4. Activate</h3>
                    <p className="text-muted-foreground mb-4">Stimulates systemic immune response and memory formation</p>
                    <div className="text-sm text-primary font-semibold">Long-term Immunity</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Clinical Evidence Bar */}
            <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-8 border border-primary/10">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">1,200+</div>
                  <div className="text-muted-foreground">Patients Safely Treated</div>
                  <div className="text-sm text-primary font-medium mt-1">Across 15+ Clinical Trials</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">No MTD</div>
                  <div className="text-muted-foreground">Maximum Tolerated Dose</div>
                  <div className="text-sm text-accent font-medium mt-1">Outstanding Safety Profile</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-secondary mb-2">15+ Years</div>
                  <div className="text-muted-foreground">Clinical Development</div>
                  <div className="text-sm text-secondary font-medium mt-1">Proven Track Record</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Pipeline Section */}
      <section className="py-32 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Pipeline Strategy */}
            <div className="text-center mb-20">
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-warning/10 text-warning border border-warning/20">
                  Strategic Focus Areas
                </span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                Targeting the Largest
                <br /><span className="gradient-text">GI Cancer Markets</span>
              </h2>
              
              <p className="text-xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
                We've strategically selected three high-value gastrointestinal indications where 
                Pelareorep's unique mechanism of action addresses the greatest unmet medical need 
                and represents the largest commercial opportunities.
              </p>
            </div>

            {/* Enhanced Pipeline Cards */}
            <div className="grid lg:grid-cols-3 gap-8 mb-20">
              {/* Pancreatic Cancer - Flagship */}
              <div className="glass-effect rounded-3xl p-8 hover-lift border-2 border-primary/20 relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                    Lead Indication
                  </span>
                </div>
                
                <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 shadow-glow">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                
                <div className="text-lg text-primary font-bold mb-2">Phase 3 Ready • IND Approved</div>
                <h3 className="text-2xl font-bold mb-4">Pancreatic Cancer</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Metastatic pancreatic adenocarcinoma in combination with pembrolizumab. 
                  FDA Fast Track designation with breakthrough potential.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Market Size</span>
                    <span className="font-semibold text-primary">$8.2B</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Target Population</span>
                    <span className="font-semibold">48K patients/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">5-Year Survival</span>
                    <span className="font-semibold text-warning">5%</span>
                  </div>
                </div>
              </div>

              {/* Colorectal Cancer */}
              <div className="glass-effect rounded-3xl p-8 hover-lift">
                <div className="w-20 h-20 bg-gradient-secondary rounded-2xl flex items-center justify-center mb-6 shadow-glow">
                  <BarChart3 className="w-10 h-10 text-white" />
                </div>
                
                <div className="text-lg text-secondary font-bold mb-2">Phase 2 Active</div>
                <h3 className="text-2xl font-bold mb-4">Colorectal Cancer</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Metastatic colorectal cancer with immune checkpoint blockade. 
                  Addressing microsatellite stable (MSS) tumors.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Market Size</span>
                    <span className="font-semibold text-secondary">$6.1B</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Target Population</span>
                    <span className="font-semibold">85K patients/year</span>
                  </div>
                </div>
              </div>

              {/* Anal Cancer */}
              <div className="glass-effect rounded-3xl p-8 hover-lift">
                <div className="w-20 h-20 bg-gradient-accent rounded-2xl flex items-center justify-center mb-6 shadow-glow">
                  <Activity className="w-10 h-10 text-primary" />
                </div>
                
                <div className="text-lg text-accent font-bold mb-2">Phase 1/2 Enrolling</div>
                <h3 className="text-2xl font-bold mb-4">Anal Cancer</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Squamous cell carcinoma of the anus with pembrolizumab. 
                  Orphan indication with significant unmet need.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Market Size</span>
                    <span className="font-semibold text-accent">$1.9B</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Target Population</span>
                    <span className="font-semibold">9K patients/year</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Market Summary & CTA */}
            <div className="text-center">
              <div className="bg-gradient-primary/10 backdrop-blur-sm rounded-3xl p-12 border border-primary/20 mb-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="text-6xl font-bold text-primary mb-4">$16B+</div>
                    <div className="text-2xl text-muted-foreground mb-2">Total Addressable Market</div>
                    <div className="text-lg text-primary font-medium">Combined Peak Revenue Potential</div>
                  </div>
                  <div className="space-y-4 text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <span>Strategic focus on highest unmet need indications</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-secondary rounded-full"></div>
                      <span>Differentiated mechanism with competitive advantages</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-accent rounded-full"></div>
                      <span>Clear regulatory pathway with FDA guidance</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 text-white px-12 py-4 text-lg shadow-glow"
                  asChild
                >
                  <a href="/science">Explore the Science</a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="px-12 py-4 text-lg border-primary/20 hover:bg-primary/10"
                  asChild
                >
                  <a href="/pipeline">View Full Pipeline</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};