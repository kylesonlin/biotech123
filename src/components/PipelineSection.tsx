import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, Calendar, Users, Target } from 'lucide-react';

export const PipelineSection = () => {
  const pipelineData = [
    {
      indication: "1L Metastatic Pancreatic Ductal (mPDAC)",
      description: "First-line treatment for metastatic pancreatic cancer",
      market: "$3B TAM",
      patients: "~500,000 globally",
      cagr: "15% CAGR to 2032",
      survival: "3% 5-year survival rate",
      clinicalBenefit: "2-year survival: ~22% vs ~9% SOC",
      status: "Phase 3 Planned | FDA Fast Track & Orphan Drug",
      progress: 75,
      studies: "4 studies completed in 1L PDAC",
      highlight: "FDA Fast Track & Orphan Drug Designation",
      timeline: "Phase 3 initiation planned Q4 2025"
    },
    {
      indication: "2L Metastatic Colorectal Cancer (mCRC)",
      description: "Second-line treatment for metastatic colorectal cancer",
      market: "$12B TAM",
      patients: "~1,400,000 globally",
      cagr: "4% CAGR to 2032",
      survival: "15% 5-year survival rate",
      clinicalBenefit: "2-3x survival improvement vs SOC",
      status: "Registration Studies in Development",
      progress: 45,
      studies: "4 total studies in CRC",
      highlight: "Largest addressable market",
      timeline: "Registration study initiation 1H 2026"
    },
    {
      indication: "Squamous Cell Anal Carcinoma (SCAC)",
      description: "Treatment for rare but aggressive anal cancer",
      market: "$1B TAM", 
      patients: "~50,000 globally",
      cagr: "6% CAGR to 2032",
      survival: "65% 5-year survival rate",
      clinicalBenefit: "ORR: 33% vs 11-24% SOC",
      status: "GOBLET Study Ongoing (Roche Partnership)",
      progress: 65,
      studies: "1 study in SCAC (GOBLET with Roche)",
      highlight: "High unmet medical need & strong partnership",
      timeline: "GOBLET interim data Q4 2025"
    }
  ];

  const getStatusColor = (status: string) => {
    if (status.includes('Phase 3')) return 'bg-accent text-accent-foreground';
    if (status.includes('GOBLET')) return 'bg-secondary text-secondary-foreground';
    return 'bg-muted text-muted-foreground';
  };

  return (
    <section id="pipeline" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Clinical Pipeline
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            GI Cancer Focused Platform
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Three high-value gastrointestinal indications with <strong>registration-enabled studies</strong> 
            targeting significant market opportunities and unmet medical needs.
          </p>
        </div>

        {/* Market Opportunity Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="text-center border-border/50 shadow-card">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-accent mb-2">$16B+</div>
              <div className="text-sm text-muted-foreground">Total Addressable Market</div>
            </CardContent>
          </Card>
          
          <Card className="text-center border-border/50 shadow-card">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-accent mb-2">1.9M+</div>
              <div className="text-sm text-muted-foreground">Global Patient Population</div>
            </CardContent>
          </Card>
          
          <Card className="text-center border-border/50 shadow-card">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-accent mb-2">3</div>
              <div className="text-sm text-muted-foreground">High-Value GI Indications</div>
            </CardContent>
          </Card>
        </div>

        {/* Pipeline Details */}
        <div className="space-y-8 mb-16">
          {pipelineData.map((item, index) => (
            <Card key={index} className="border-border/50 shadow-card hover:shadow-elegant transition-shadow duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2">
                      {item.indication}
                    </CardTitle>
                    <p className="text-muted-foreground">{item.description}</p>
                    <Badge variant="secondary" className="mt-2 text-xs">
                      {item.highlight}
                    </Badge>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Badge className={getStatusColor(item.status)}>
                      {item.status}
                    </Badge>
                    <div className="text-sm text-muted-foreground">
                      Progress: {item.progress}%
                    </div>
                    <Progress value={item.progress} className="w-32" />
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6">
                  <div>
                    <div className="text-lg font-bold text-accent">{item.market}</div>
                    <div className="text-sm text-muted-foreground">Market Size</div>
                    <div className="text-xs text-muted-foreground mt-1">{item.cagr}</div>
                  </div>
                  
                  <div>
                    <div className="text-lg font-bold text-secondary">{item.patients}</div>
                    <div className="text-sm text-muted-foreground">Patient Population</div>
                    <div className="text-xs text-muted-foreground mt-1">{item.survival}</div>
                  </div>
                  
                  <div>
                    <div className="text-lg font-bold text-primary">{item.studies}</div>
                    <div className="text-sm text-muted-foreground">Clinical Experience</div>
                    <div className="text-xs text-primary font-semibold mt-1">{item.clinicalBenefit}</div>
                  </div>
                  
                  <div className="flex flex-col justify-center space-y-2">
                    <div className="text-xs text-muted-foreground font-medium">{item.timeline}</div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="hover:bg-accent/10 hover:border-accent transition-colors"
                    >
                      View Data
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Clinical Strategy */}
        <Card className="border-border/50 shadow-elegant">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Clinical & Regulatory Strategy</CardTitle>
            <p className="text-muted-foreground">
              Building the GI immunotherapy platform with a clear path to market
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-secondary">
                  <Calendar className="w-5 h-5 inline mr-2" />
                  Upcoming Milestones
                </h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Q4 2025:</strong> GOBLET interim data & Phase 3 1L PDAC initiation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>1H 2026:</strong> mCRC registration study initiation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Ongoing:</strong> GOBLET study with Roche partnership in SCAC/PDAC</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4 text-secondary">
                  <Target className="w-5 h-5 inline mr-2" />
                  Strategic Focus
                </h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Registration-enabled studies with FDA Fast Track designation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Strategic partnership with Roche on GOBLET study</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>De-risked platform: 1,100+ patients dosed with established safety</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Our focused approach prioritizes high-value opportunities with clear regulatory pathways
              </p>
              <Button className="bg-gradient-primary hover:opacity-90">
                View Clinical Data Summary
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};