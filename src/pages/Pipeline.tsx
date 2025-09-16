import { Navigation } from '@/components/Navigation';
import { FooterSection } from '@/components/FooterSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Target, TrendingUp, Award, Users, Calendar, MapPin, Zap, Shield } from 'lucide-react';
import { DataVisualization } from '@/components/DataVisualization';
import { SectionLayout, Grid, Col } from '@/components/EnhancedGridLayout';
import giTractAnatomy from '@/assets/gi-tract-anatomy.jpg';
import clinicalTimeline from '@/assets/clinical-timeline-viz.jpg';

const Pipeline = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <SectionLayout>
          <Col span={12}>
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 animate-fade-in">
                GI-Focused Development
              </Badge>
              <h1 className="text-4xl md:text-5xl font-condensed font-bold mb-6 animate-fade-in" style={{animationDelay: '200ms'}}>
                Registration-Enabled 
                <span className="gradient-text"> Clinical Pipeline</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '400ms'}}>
                Strategic focus on gastrointestinal cancers with high unmet need, 
                leveraging biomarkers and pursuing near-term approval pathways.
              </p>
            </div>
          </Col>

          {/* Pipeline Strategy */}
          <Col span={12}>
            <Grid cols={3} gap="lg" className="mb-16">
              <Col span={1}>
                <Card className="text-center glass-effect hover:shadow-glow transition-all duration-500 animate-scale-in" style={{animationDelay: '600ms'}}>
                  <CardContent className="pt-6">
                    <Target className="h-12 w-12 mx-auto mb-4 text-primary animate-float" />
                    <h3 className="font-semibold mb-2">Registration Focus</h3>
                    <p className="text-sm text-muted-foreground">
                      Prioritize studies designed for regulatory approval
                    </p>
                  </CardContent>
                </Card>
              </Col>
              <Col span={1}>
                <Card className="text-center glass-effect hover:shadow-glow transition-all duration-500 animate-scale-in" style={{animationDelay: '700ms'}}>
                  <CardContent className="pt-6">
                    <Shield className="h-12 w-12 mx-auto mb-4 text-accent animate-float" style={{animationDelay: '1s'}} />
                    <h3 className="font-semibold mb-2">Biomarker Driven</h3>
                    <p className="text-sm text-muted-foreground">
                      Leverage RAS mutation and other predictive markers
                    </p>
                  </CardContent>
                </Card>
              </Col>
              <Col span={1}>
                <Card className="text-center glass-effect hover:shadow-glow transition-all duration-500 animate-scale-in" style={{animationDelay: '800ms'}}>
                  <CardContent className="pt-6">
                    <Award className="h-12 w-12 mx-auto mb-4 text-secondary animate-float" style={{animationDelay: '2s'}} />
                    <h3 className="font-semibold mb-2">Partnership Ready</h3>
                    <p className="text-sm text-muted-foreground">
                      Phase 3-ready programs attractive to partners
                    </p>
                  </CardContent>
                </Card>
              </Col>
            </Grid>
          </Col>
        </SectionLayout>

        {/* Main Pipeline */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-condensed font-bold text-center mb-12">
              Active Clinical Programs
            </h2>

            <div className="space-y-8">
              {/* Pancreatic Cancer */}
              <Card className="glass-effect border-primary/20">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl font-condensed">
                        Pancreatic Cancer (mPDAC)
                      </CardTitle>
                      <p className="text-muted-foreground mt-2">First-line metastatic pancreatic ductal adenocarcinoma</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-primary text-primary-foreground">1L Treatment</Badge>
                      <Badge variant="outline">FDA Fast Track</Badge>
                      <Badge variant="outline">Orphan Drug</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>GOBLET Cohort 5 Progress</span>
                      <span>65% Complete</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Target className="h-4 w-4 text-primary" />
                          Program Highlights
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Only registration-enabled immunotherapy study in 1L mPDAC</li>
                          <li>• Partnership expected to fund Phase 3 completion</li>
                          <li>• Consistent survival benefits across multiple studies</li>
                          <li>• Strong objective response rates in combinations</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Zap className="h-4 w-4 text-accent" />
                          Treatment Regimen
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Pelareorep + modified FOLFIRINOX ± atezolizumab
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-secondary" />
                          Market Context
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• ~500,000 global patients annually</li>
                          <li>• ~$3B total addressable market</li>
                          <li>• 3% five-year survival rate</li>
                          <li>• No approved immunotherapy in 1L setting</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          Timeline
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Data readout expected H2 2025
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <p className="text-sm">
                      <strong className="text-primary">Key Differentiator:</strong> 
                      Pelareorep's dual mechanism makes it uniquely suited for pancreatic cancer's 
                      immunosuppressive tumor microenvironment.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Colorectal Cancer */}
              <Card className="glass-effect border-accent/20">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl font-condensed">
                        Colorectal Cancer (mCRC)
                      </CardTitle>
                      <p className="text-muted-foreground mt-2">Second-line KRAS-mutant metastatic colorectal cancer</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-accent text-accent-foreground">2L Treatment</Badge>
                      <Badge variant="outline">KRAS-mutant</Badge>
                      <Badge variant="outline">IST Program</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Biomarker Validation Progress</span>
                      <span>80% Complete</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Target className="h-4 w-4 text-accent" />
                          Program Focus
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Biomarker-driven investigator-sponsored trial</li>
                          <li>• Cost-effective platform validation</li>
                          <li>• KRAS mutation enrichment strategy</li>
                          <li>• Viral replication & immune activation demonstrated</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Zap className="h-4 w-4 text-primary" />
                          Treatment Regimen  
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Pelareorep + FOLFIRI + bevacizumab
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-secondary" />
                          Clinical Results
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• OS ~27 months vs historical controls</li>
                          <li>• PFS ~16.6 months improved response</li>
                          <li>• Demonstrated viral replication in tumors</li>
                          <li>• Immune activation biomarkers positive</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Users className="h-4 w-4 text-accent" />
                          Market Size
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• ~1.9M global patients</li>
                          <li>• ~$12B total addressable market</li>
                          <li>• 15% five-year survival rate</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Anal Cancer */}
              <Card className="glass-effect border-secondary/20">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl font-condensed">
                        Squamous Cell Anal Carcinoma (SCAC)
                      </CardTitle>
                      <p className="text-muted-foreground mt-2">Second-line and beyond advanced anal cancer</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-secondary text-secondary-foreground">≥2L Treatment</Badge>
                      <Badge variant="outline">Rare Disease</Badge>
                      <Badge variant="outline">Fast Track Path</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>GOBLET Cohort 4 Progress</span>
                      <span>45% Complete</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Award className="h-4 w-4 text-secondary" />
                          Registration Strategy
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Fastest potential registration pathway</li>
                          <li>• Single-arm study possible in rare disease</li>
                          <li>• Breakthrough therapy designation potential</li>
                          <li>• High unmet medical need</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Zap className="h-4 w-4 text-primary" />
                          Early Results
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          33% ORR in 12 evaluable patients (nearly triples historical ORR)
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-accent" />
                          Study Details
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• GOBLET Cohort 4: Pelareorep + atezolizumab</li>
                          <li>• U.S. sites actively enrolling</li>
                          <li>• European sites planned</li>
                          <li>• Data presented at ASCO GI 2025</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-secondary" />
                          Market Opportunity
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• ~30,000 global patients</li>
                          <li>• ~$1B total addressable market</li>
                          <li>• Limited treatment options beyond 1L</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-secondary/5 border border-secondary/20">
                    <p className="text-sm">
                      <strong className="text-secondary">Accelerated Path:</strong> 
                      SCAC's rare disease status and high unmet need provide the fastest route to 
                      pelareorep's first potential approval.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Data Visualization Section */}
        <SectionLayout background="muted">
          <Col span={12}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-condensed font-bold mb-6">
                Clinical Development Dashboard
              </h2>
              <p className="text-xl text-muted-foreground">
                Real-time insights into our pipeline progress and milestones
              </p>
            </div>
          </Col>
          
          <Col span={12}>
            <DataVisualization />
          </Col>
        </SectionLayout>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-condensed font-bold mb-6">
              Partner with Our Pipeline
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Registration-ready programs with strong clinical signals and clear regulatory pathways
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                Business Development
              </Button>
              <Button size="lg" variant="outline">
                Scientific Publications
              </Button>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default Pipeline;