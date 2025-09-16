import { Card, CardContent } from '@/components/ui/card';
import { Target, Zap, Shield, Users } from 'lucide-react';

export const MissionSection = () => {
  return (
    <section id="mission" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Mission Statement */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Our Mission</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            To build a revolutionary <strong>GI tumor immunotherapy platform</strong> around our 
            first-in-class double-stranded RNA immunotherapy treatment, transforming outcomes 
            for patients with gastrointestinal cancers.
          </p>
        </div>

        {/* Core Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="group hover:shadow-card transition-all duration-300 border-border/50">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Precision Targeting</h3>
              <p className="text-sm text-muted-foreground">
                Pelareorep selectively targets RAS-mutated cancer cells, present in 90% of pancreatic cancers
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-card transition-all duration-300 border-border/50">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Dual Mechanism</h3>
              <p className="text-sm text-muted-foreground">
                Creates direct cell lysis plus immune cascade response for comprehensive tumor attack
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-card transition-all duration-300 border-border/50">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Proven Safety</h3>
              <p className="text-sm text-muted-foreground">
                Extensively de-risked with safety established in 1,100+ patients over 15 years
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-card transition-all duration-300 border-border/50">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Patient Focus</h3>
              <p className="text-sm text-muted-foreground">
                Addressing the urgent need in GI cancers where few immunotherapy options exist
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Visual Impact Statement */}
        <div className="text-center">
          <Card className="inline-block border-border/50 shadow-elegant bg-gradient-subtle">
            <CardContent className="p-8">
              <div className="mb-6">
                <img 
                  src="/src/assets/molecular-structure.png" 
                  alt="Molecular structure visualization" 
                  className="w-32 h-32 mx-auto object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">Leading GI Immunotherapy Platform</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                First-in-class ds-RNA oncolytic virus with proven safety in 1,100+ patients
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};