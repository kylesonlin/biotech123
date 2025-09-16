import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Award, Users, TrendingUp, Zap, Target } from 'lucide-react';
import { SectionLayout, Grid, Col } from '@/components/EnhancedGridLayout';

export const ProofPointsSection = () => {
  const proofPoints = [
    {
      icon: Users,
      value: "1,200+",
      label: "Patients Treated",
      description: "Established safety profile across multiple studies",
      color: "text-primary"
    },
    {
      icon: Award,
      value: "FDA",
      label: "Fast Track & Orphan Drug",
      description: "Regulatory recognition for unmet medical need",
      color: "text-accent"
    },
    {
      icon: Shield,
      value: "No MTD",
      label: "Maximum Tolerated Dose",
      description: "Well-tolerated with manageable side effects",
      color: "text-secondary"
    },
    {
      icon: Zap,
      value: "Dual Action",
      label: "Mechanism",
      description: "Cell lysis + immune activation in one therapy",
      color: "text-primary"
    },
    {
      icon: Target,
      value: "RAS-Mutant",
      label: "Selective Targeting",
      description: "Precision approach for 40%+ of GI cancers",
      color: "text-accent"
    },
    {
      icon: TrendingUp,
      value: "15+ Years",
      label: "Clinical Experience",
      description: "Extensive research and development history",
      color: "text-secondary"
    }
  ];

  return (
    <SectionLayout background="muted">
      <Col span={12}>
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 animate-fade-in">
            Proven Platform
          </Badge>
          <h2 className="text-3xl md:text-4xl font-condensed font-bold mb-6 animate-fade-in" style={{animationDelay: '200ms'}}>
            De-Risked Clinical Development
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '400ms'}}>
            Pelareorep represents a clinically validated, registration-ready platform 
            with established safety and demonstrated efficacy signals
          </p>
        </div>
      </Col>

      <Col span={12}>
        <Grid cols={3} gap="lg" className="mb-12">
          {proofPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <Col key={index} span={1}>
                <Card 
                  className="glass-effect hover:shadow-glow hover-lift transition-all duration-500 group animate-scale-in" 
                  style={{animationDelay: `${600 + index * 100}ms`}}
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-muted/50 group-hover:scale-110 transition-transform duration-300 animate-float`} style={{animationDelay: `${index * 0.5}s`}}>
                        <IconComponent className={`h-6 w-6 ${point.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className={`text-2xl font-bold ${point.color} mb-1`}>
                          {point.value}
                        </div>
                        <div className="font-semibold text-sm mb-2">
                          {point.label}
                        </div>
                        <div className="text-xs text-muted-foreground leading-relaxed">
                          {point.description}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Col>
            );
          })}
        </Grid>
      </Col>

      {/* Additional credibility metrics */}
      <Col span={12}>
        <div className="p-8 rounded-2xl bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 border border-primary/10 glass-effect animate-fade-in" style={{animationDelay: '1.2s'}}>
          <Grid cols={4} gap="lg">
            <Col span={1} className="text-center">
              <div className="text-2xl font-bold gradient-text">20+</div>
              <div className="text-sm text-muted-foreground">Clinical Studies</div>
            </Col>
            <Col span={1} className="text-center">
              <div className="text-2xl font-bold gradient-text">3</div>
              <div className="text-sm text-muted-foreground">Active Indications</div>
            </Col>
            <Col span={1} className="text-center">
              <div className="text-2xl font-bold gradient-text">Made in USA</div>
              <div className="text-sm text-muted-foreground">Manufacturing</div>
            </Col>
            <Col span={1} className="text-center">
              <div className="text-2xl font-bold gradient-text">Scalable</div>
              <div className="text-sm text-muted-foreground">Production Ready</div>
            </Col>
          </Grid>
        </div>
      </Col>
    </SectionLayout>
  );
};