import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Activity, Target, Zap, Shield } from 'lucide-react';
import molecularImg from '@/assets/molecular-structure.png';

export const SimplifiedScienceSection = () => {
  const mechanismSteps = [
    {
      title: "IV Delivery",
      description: "Pelareorep reaches tumors via blood circulation",
      icon: <Activity className="w-6 h-6" />,
      color: "bg-gradient-primary"
    },
    {
      title: "Selective Targeting", 
      description: "Infects RAS-mutated cancer cells only",
      icon: <Target className="w-6 h-6" />,
      color: "bg-gradient-secondary"
    },
    {
      title: "Immune Activation",
      description: "Creates 'hot' tumor environment",
      icon: <Zap className="w-6 h-6" />,
      color: "bg-gradient-accent"
    },
    {
      title: "Tumor Destruction",
      description: "Activated immune system attacks cancer",
      icon: <Shield className="w-6 h-6" />,
      color: "bg-gradient-primary"
    }
  ];

  return (
    <section id="science" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-secondary border-secondary">
            Breakthrough Science
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            How Pelareorep Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Double-stranded RNA virus that selectively targets cancer cells and activates immune response
          </p>
        </div>

        {/* Visual Mechanism Overview */}
        <div className="mb-16">
          <Card className="border-border/50 shadow-elegant overflow-hidden">
            <CardHeader className="bg-gradient-subtle text-center">
              <div className="mb-4">
                <img 
                  src={molecularImg} 
                  alt="Molecular mechanism visualization" 
                  className="w-24 h-24 mx-auto object-contain opacity-80"
                />
              </div>
              <CardTitle className="text-2xl">ds-RNA Mechanism of Action</CardTitle>
              <p className="text-muted-foreground">
                Proven selective targeting with dual anti-cancer effects
              </p>
            </CardHeader>
            <CardContent className="p-8">
              {/* Simple Mechanism Flow */}
              <div className="grid md:grid-cols-4 gap-6">
                {mechanismSteps.map((step, index) => (
                  <div key={index} className="text-center group">
                    <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-glow`}>
                      <div className="text-white">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                    {index < mechanismSteps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-full w-6 text-center">
                        <ArrowRight className="w-4 h-4 text-muted-foreground mx-auto" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="text-center border-border/50 shadow-card">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-accent mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Pancreatic Cancers with RAS mutations</div>
            </CardContent>
          </Card>
          
          <Card className="text-center border-border/50 shadow-card">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-secondary mb-2">1,100+</div>
              <div className="text-sm text-muted-foreground">Patients treated safely</div>
            </CardContent>
          </Card>
          
          <Card className="text-center border-border/50 shadow-card">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">15</div>
              <div className="text-sm text-muted-foreground">Years of clinical experience</div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="inline-block border-border/50 shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Explore Our Science</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl">
                Learn more about our mechanism studies and clinical data
              </p>
              <Button className="bg-gradient-primary hover:opacity-90">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};