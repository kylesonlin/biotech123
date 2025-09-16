import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import anatomy1 from '@/assets/anatomy-diagram-1.png';
import anatomy2 from '@/assets/anatomy-diagram-2.png';  
import anatomy3 from '@/assets/anatomy-diagram-3.png';

export const SimplifiedPipelineSection = () => {
  const pipelineData = [
    {
      indication: "Pancreatic Cancer",
      shortName: "1L mPDAC",
      description: "First-line metastatic pancreatic cancer",
      status: "Phase 3 Planned",
      statusColor: "bg-accent text-accent-foreground",
      image: anatomy1,
      highlight: "FDA Fast Track"
    },
    {
      indication: "Colorectal Cancer", 
      shortName: "2L mCRC",
      description: "Second-line metastatic colorectal cancer",
      status: "Registration Studies",
      statusColor: "bg-secondary text-secondary-foreground", 
      image: anatomy2,
      highlight: "Largest Market"
    },
    {
      indication: "Anal Cancer",
      shortName: "SCAC",
      description: "Squamous cell anal carcinoma",
      status: "GOBLET Study (Roche)",
      statusColor: "bg-primary text-primary-foreground",
      image: anatomy3,
      highlight: "High Unmet Need"
    }
  ];

  return (
    <section id="pipeline" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Clinical Pipeline
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            GI Cancer Platform
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Three high-value gastrointestinal indications with clear regulatory pathways
          </p>
        </div>

        {/* Market Overview */}
        <div className="text-center mb-16">
          <Card className="inline-block border-border/50 shadow-elegant bg-gradient-subtle">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">$16B+</div>
                  <div className="text-sm text-muted-foreground">Total Market</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">1.9M+</div>
                  <div className="text-sm text-muted-foreground">Global Patients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">3</div>
                  <div className="text-sm text-muted-foreground">Indications</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pipeline Cards with Anatomy Graphics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pipelineData.map((item, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-border/50 overflow-hidden">
              <CardHeader className="text-center bg-gradient-subtle">
                <div className="mb-4">
                  <img 
                    src={item.image} 
                    alt={`${item.indication} anatomy diagram`}
                    className="w-24 h-24 mx-auto object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-xl">{item.indication}</CardTitle>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                <Badge variant="secondary" className="mt-2">
                  {item.highlight}
                </Badge>
              </CardHeader>
              
              <CardContent className="p-6 text-center">
                <Badge className={`mb-4 ${item.statusColor}`}>
                  {item.status}
                </Badge>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-muted-foreground">
                    Clinical code: <span className="font-semibold text-foreground">{item.shortName}</span>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full hover:bg-accent/10 hover:border-accent transition-colors"
                >
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Simple Timeline */}
        <Card className="border-border/50 shadow-elegant">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Clinical Milestones</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-lg font-bold text-accent mb-2">Q4 2025</div>
                <div className="text-sm text-muted-foreground">GOBLET interim data</div>
              </div>
              <div>
                <div className="text-lg font-bold text-secondary mb-2">Q4 2025</div>
                <div className="text-sm text-muted-foreground">Phase 3 PDAC initiation</div>
              </div>
              <div>
                <div className="text-lg font-bold text-primary mb-2">1H 2026</div>
                <div className="text-sm text-muted-foreground">mCRC study initiation</div>
              </div>
            </div>
            <div className="text-center pt-6 border-t border-border mt-6">
              <Button 
                className="bg-gradient-primary hover:opacity-90"
                onClick={() => window.location.href = '/pipeline'}
              >
                See Clinical Development
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};