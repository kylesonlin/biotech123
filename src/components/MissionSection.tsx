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

        {/* Key Differentiators */}
        <div className="bg-card border border-border/50 rounded-2xl p-8 shadow-card">
          <h3 className="text-2xl font-bold mb-6 text-center">What Makes Us Different</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-secondary">Unique Delivery Advantage</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Only IV ds-RNA oncolytic virus not neutralized by immune system in blood</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Reaches both primary tumors and metastatic sites effectively</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>No special handling required, easy to scale commercially</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-secondary">Market Leadership</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Only platform immunotherapy in GI tumors with proven efficacy</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Strong IP protection extending to 2044</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Made in America with experienced dealmaking leadership</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};