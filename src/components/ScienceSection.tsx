import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Dna, Activity, Target, Zap, FileText } from 'lucide-react';

export const ScienceSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const mechanismSteps = [
    {
      title: "IV Administration",
      subtitle: "Pelareorep Treatment",
      description: "Intravenous pelareorep evades neutralization by associating with mononuclear cells in blood and is delivered to the tumor.",
      icon: <Activity className="w-6 h-6" />,
      color: "bg-gradient-primary"
    },
    {
      title: "Cold Tumor",
      subtitle: "Selective ds-RNA Infection",
      description: "Pelareorep selectively infects tumor cells via RAS pathway mutations and introduces its double-stranded RNA genome, which is recognized as foreign by the cell.",
      icon: <Target className="w-6 h-6" />,
      color: "bg-gradient-secondary"
    },
    {
      title: "Hot Tumor",
      subtitle: "ds-RNA Immune Response",
      description: "The ds-RNA genome triggers both direct cell lysis and powerful immune cascade, increasing type I interferons and activating chemokines to create a 'hot' tumor environment.",
      icon: <Zap className="w-6 h-6" />,
      color: "bg-gradient-accent"
    },
    {
      title: "Tumor Under Attack",
      subtitle: "Immune Cascade",
      description: "The pelareorep-initiated inflammatory response results in activation and expansion of TIL clones that attack and kill the tumor.",
      icon: <Dna className="w-6 h-6" />,
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
            Mechanism of Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Pelareorep is a first-in-class <strong>ds-RNA oncolytic virus</strong> that 
            selectively replicates in RAS-mutated cells through its <strong>double-stranded RNA genome</strong>, 
            creating both direct cell lysis and a powerful immune cascade response that works exactly as designed.
          </p>
        </div>

        {/* Interactive Mechanism Visualization */}
        <div className="mb-16">
          <Card className="border-border/50 shadow-card overflow-hidden">
            <CardHeader className="bg-gradient-subtle">
              <CardTitle className="text-2xl text-center">How Pelareorep Works</CardTitle>
              <p className="text-center text-muted-foreground">
                Click on each step to explore the mechanism
              </p>
            </CardHeader>
            <CardContent className="p-8">
              {/* Step Navigation */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {mechanismSteps.map((step, index) => (
                  <Button
                    key={index}
                    variant={activeStep === index ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveStep(index)}
                    className={activeStep === index ? step.color : ""}
                  >
                    {index + 1}. {step.title}
                  </Button>
                ))}
              </div>

              {/* Active Step Display */}
              <div className="text-center">
                <div className={`w-20 h-20 ${mechanismSteps[activeStep].color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow`}>
                  <div className="text-white">
                    {mechanismSteps[activeStep].icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{mechanismSteps[activeStep].title}</h3>
                <h4 className="text-lg text-secondary mb-4">{mechanismSteps[activeStep].subtitle}</h4>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  {mechanismSteps[activeStep].description}
                </p>
              </div>

              {/* Step Progress Indicator */}
              <div className="flex justify-center mt-8">
                <div className="flex space-x-2">
                  {mechanismSteps.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeStep ? 'bg-accent scale-125' : 
                        index < activeStep ? 'bg-secondary' : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Scientific Features */}
        <Tabs defaultValue="targeting" className="mb-16">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
            <TabsTrigger value="targeting">RAS Pathway Targeting</TabsTrigger>
            <TabsTrigger value="delivery">IV Delivery Advantage</TabsTrigger>
            <TabsTrigger value="safety">Safety Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="targeting" className="space-y-6">
            <Card className="border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-6 h-6 mr-2 text-secondary" />
                  Selective RAS Targeting
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Pelareorep's ds-RNA exploits the RAS pathway mutations found in:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-muted/50 rounded-lg text-center">
                    <div className="text-3xl font-bold text-accent mb-2">95%</div>
                    <div className="text-sm">Pancreatic Cancers</div>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg text-center">
                    <div className="text-3xl font-bold text-accent mb-2">43%</div>
                    <div className="text-sm">Colorectal Cancers</div>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg text-center">
                    <div className="text-3xl font-bold text-accent mb-2">20%</div>
                    <div className="text-sm">Anal Carcinomas</div>
                  </div>
                </div>
                <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg mt-4">
                  <p className="text-sm">
                    <strong>Clinical Proof of Concept:</strong> Pelareorep found in almost all tumor biopsies, 
                    demonstrating successful viral delivery and replication in target cancer cells.
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  This selective ds-RNA targeting ensures healthy cells remain unaffected while cancer cells are specifically attacked.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="delivery" className="space-y-6">
            <Card className="border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="w-6 h-6 mr-2 text-secondary" />
                  Unique IV Delivery System
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-accent">IV ds-RNA Advantages</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <ArrowRight className="w-4 h-4 mt-0.5 mr-2 text-accent flex-shrink-0" />
                        ds-RNA virus not neutralized in blood
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="w-4 h-4 mt-0.5 mr-2 text-accent flex-shrink-0" />
                        Systemically reaches all tumor sites
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="w-4 h-4 mt-0.5 mr-2 text-accent flex-shrink-0" />
                        Associates with mononuclear cells for delivery
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="w-4 h-4 mt-0.5 mr-2 text-accent flex-shrink-0" />
                        Dual mechanism: lysis + immune response
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-accent">Manufacturing Benefits</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <ArrowRight className="w-4 h-4 mt-0.5 mr-2 text-accent flex-shrink-0" />
                        Made in America (non-GMO ds-RNA)
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="w-4 h-4 mt-0.5 mr-2 text-accent flex-shrink-0" />
                        Easy to scale commercially
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="w-4 h-4 mt-0.5 mr-2 text-accent flex-shrink-0" />
                        High yield, low cost of goods
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="w-4 h-4 mt-0.5 mr-2 text-accent flex-shrink-0" />
                        Strong IP protection to 2044
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="p-4 bg-secondary/5 border border-secondary/20 rounded-lg mt-4">
                  <p className="text-sm">
                    <strong>GOBLET Study with Roche:</strong> Ongoing clinical trial evaluating pelareorep 
                    in combination with standard of care in SCAC and PDAC patients, demonstrating strong 
                    partnership validation of our ds-RNA platform.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="safety" className="space-y-6">
            <Card className="border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-6 h-6 mr-2 text-secondary" />
                  Established Safety Profile
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">1,100+</div>
                    <div className="text-lg font-semibold mb-1">Patients Dosed</div>
                    <div className="text-sm text-muted-foreground">Across multiple clinical trials</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">15</div>
                    <div className="text-lg font-semibold mb-1">Years</div>
                    <div className="text-sm text-muted-foreground">Of safety data collection</div>
                  </div>
                </div>
                <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg">
                  <p className="text-sm text-center">
                    <strong>De-risked ds-RNA Platform:</strong> Extensive clinical experience has established 
                    pelareorep's safety profile, with the ds-RNA mechanism working exactly as designed across 
                    multiple studies, making it an attractive candidate for partnerships and regulatory approval.
                  </p>
                </div>
                <div className="flex justify-center">
                  <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
                    View Published Safety Data
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="inline-block border-border/50 shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Learn More About Our Science</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl">
                Dive deeper into our mechanism of action studies, clinical data, and upcoming research milestones.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-primary hover:opacity-90">
                  View Publications
                  <FileText className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline">
                  Watch Mechanism Video
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};