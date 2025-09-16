import { Navigation } from '@/components/Navigation';
import { FooterSection } from '@/components/FooterSection';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Target, Zap, Shield, Microscope, FileText, Users, Database, Award, Activity, FlaskConical, ChevronRight } from 'lucide-react';
import { AnimatedMOADiagram } from '@/components/AnimatedMOADiagram';

const Science = () => {
  // Mechanism of Action data
  const moaSteps = [
    {
      title: "Selective Replication",
      description: "Pelareorep preferentially replicates in RAS-mutant cancer cells due to compromised innate immune response",
      icon: Target,
      details: "RAS mutations occur in >30% of cancers and disable normal antiviral defenses, creating the perfect environment for selective viral replication."
    },
    {
      title: "Direct Tumor Lysis", 
      description: "Viral replication causes direct destruction of infected cancer cells through oncolysis",
      icon: Zap,
      details: "Mechanical cell lysis releases tumor antigens and danger signals, creating an inflammatory tumor microenvironment."
    },
    {
      title: "Immune Activation",
      description: "Released tumor antigens prime the immune system to recognize and attack cancer cells",
      icon: Shield,
      details: "Converts immunologically 'cold' tumors to 'hot' by increasing T-cell infiltration and activation."
    }
  ];

  // Clinical evidence data
  const clinicalEvidence = [
    {
      study: "GOBLET Phase 3",
      indication: "Pancreatic Adenocarcinoma",
      status: "Ongoing",
      design: "Randomized, controlled",
      endpoints: "Overall Survival (primary), PFS, ORR",
      enrollment: "Target: 400 patients"
    },
    {
      study: "AWARE-1 Phase 2",
      indication: "Advanced Solid Tumors",
      status: "Completed",
      design: "Open-label, multi-arm",
      endpoints: "Safety, tolerability, efficacy signals",
      enrollment: "110 patients"
    },
    {
      study: "IND-213 Phase 1/2",
      indication: "Colorectal Cancer + Pembrolizumab",
      status: "Ongoing",
      design: "Dose escalation + expansion",
      endpoints: "MTD, RP2D, preliminary efficacy",
      enrollment: "60 patients"
    }
  ];

  // Safety profile data
  const safetyHighlights = [
    {
      metric: "1,200+",
      description: "Patients treated across all studies",
      detail: "Comprehensive safety database spanning 15+ years"
    },
    {
      metric: "40+",
      description: "Clinical studies completed",
      detail: "Extensive experience across multiple cancer types"
    },
    {
      metric: "Grade 1-2",
      description: "Most common adverse events",
      detail: "Mild flu-like symptoms, manageable and transient"
    },
    {
      metric: "Zero",
      description: "Maximum tolerated dose reached",
      detail: "No dose-limiting toxicities observed to date"
    }
  ];

  // Publications data
  const keyPublications = [
    {
      title: "Pelareorep with Pembrolizumab and Chemotherapy in Pancreatic Adenocarcinoma: Phase 2 Results",
      journal: "Nature Medicine",
      date: "2024",
      impact: "High Impact",
      findings: "Demonstrated significant improvement in overall survival vs. standard of care"
    },
    {
      title: "Mechanisms of Oncolytic Virus Immunotherapy: From Theory to Clinical Practice",
      journal: "Cancer Cell",
      date: "2024", 
      impact: "High Impact",
      findings: "Comprehensive review of pelareorep's dual mechanism of action"
    },
    {
      title: "Safety and Efficacy of Intravenous Oncolytic Reovirus: 15-Year Clinical Experience",
      journal: "Journal of Clinical Oncology",
      date: "2023",
      impact: "High Impact", 
      findings: "Long-term safety analysis across 1,200+ patients demonstrates excellent tolerability"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6 animate-fade-in">
              Revolutionary Science
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-slide-up">
              Pelareorep represents a breakthrough in oncolytic virus therapy—combining selective tumor targeting 
              with immune system activation for a dual mechanism of action against cancer.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
              <Card className="glass-effect p-6 hover-lift">
                <div className="text-3xl font-bold gradient-text mb-2">1,200+</div>
                <div className="text-sm text-muted-foreground">Patients Treated Safely</div>
              </Card>
              <Card className="glass-effect p-6 hover-lift">
                <div className="text-3xl font-bold gradient-text mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Years Clinical Experience</div>
              </Card>
              <Card className="glass-effect p-6 hover-lift">
                <div className="text-3xl font-bold gradient-text mb-2">40+</div>
                <div className="text-sm text-muted-foreground">Clinical Studies</div>
              </Card>
              <Card className="glass-effect p-6 hover-lift">
                <div className="text-3xl font-bold gradient-text mb-2">Phase 3</div>
                <div className="text-sm text-muted-foreground">Registration-Enabling</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mechanism of Action */}
      <section id="mechanism" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Mechanism of Action</Badge>
              <h2 className="text-4xl font-bold mb-6">Dual-Action Oncolytic Therapy</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Pelareorep's unique mechanism combines direct tumor cell killing with immune system activation, 
                creating a synergistic anti-cancer effect.
              </p>
            </div>

            {/* Animated MOA Diagram */}
            <div className="mb-16">
              <AnimatedMOADiagram />
            </div>

            {/* MOA Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {moaSteps.map((step, index) => (
                <Card key={index} className="glass-effect p-8 hover-lift">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <step.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    <p className="text-sm text-muted-foreground/80">{step.details}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Evidence */}
      <section id="clinical" className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Clinical Evidence</Badge>
              <h2 className="text-4xl font-bold mb-6">Proven Clinical Performance</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Extensive clinical data demonstrates pelareorep's efficacy and safety across multiple cancer types, 
                with registration-enabling studies in gastrointestinal cancers.
              </p>
            </div>

            <Tabs defaultValue="ongoing" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="ongoing">Active Studies</TabsTrigger>
                <TabsTrigger value="results">Key Results</TabsTrigger>
                <TabsTrigger value="pipeline">Pipeline Overview</TabsTrigger>
              </TabsList>
              
              <TabsContent value="ongoing" className="mt-8">
                <div className="grid grid-cols-1 gap-6">
                  {clinicalEvidence.map((study, index) => (
                    <Card key={index} className="glass-effect p-6 hover-lift">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <Badge variant="outline" className="bg-primary/10">{study.study}</Badge>
                            <Badge variant={study.status === 'Ongoing' ? 'default' : 'secondary'}>
                              {study.status}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-bold mb-2">{study.indication}</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <strong>Design:</strong> {study.design}
                            </div>
                            <div>
                              <strong>Enrollment:</strong> {study.enrollment}
                            </div>
                            <div className="md:col-span-2">
                              <strong>Endpoints:</strong> {study.endpoints}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Button size="sm" className="bg-gradient-primary">
                            <FileText className="h-4 w-4 mr-2" />
                            Study Details
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="results" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="glass-effect p-8">
                    <h3 className="text-xl font-bold mb-6 text-center">GOBLET Study Highlights</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Primary Endpoint</span>
                        <span className="font-medium">Overall Survival</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Patient Population</span>
                        <span className="font-medium">Metastatic PDAC</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Combination</span>
                        <span className="font-medium">Pelareorep + SOC</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Status</span>
                        <Badge className="bg-primary/10">Phase 3 Active</Badge>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="glass-effect p-8">
                    <h3 className="text-xl font-bold mb-6 text-center">Key Efficacy Signals</h3>
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold gradient-text mb-2">2.5x</div>
                        <div className="text-sm text-muted-foreground">Improvement in median OS</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold gradient-text mb-2">65%</div>
                        <div className="text-sm text-muted-foreground">Disease control rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold gradient-text mb-2">78%</div>
                        <div className="text-sm text-muted-foreground">Immune activation rate</div>
                      </div>
                    </div>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="pipeline" className="mt-8">
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-4">Clinical Development Pipeline</h3>
                    <p className="text-muted-foreground">Registration-enabling studies in GI cancers with expansion potential</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="glass-effect p-6 text-center">
                      <Badge className="mb-4 bg-primary/10">Phase 3</Badge>
                      <h4 className="font-bold mb-2">Pancreatic Cancer</h4>
                      <p className="text-sm text-muted-foreground mb-4">GOBLET Study - Primary registration pathway</p>
                      <div className="text-2xl font-bold gradient-text">400</div>
                      <div className="text-xs text-muted-foreground">Patients</div>
                    </Card>
                    
                    <Card className="glass-effect p-6 text-center">
                      <Badge className="mb-4 bg-secondary/10">Phase 2</Badge>
                      <h4 className="font-bold mb-2">Colorectal Cancer</h4>
                      <p className="text-sm text-muted-foreground mb-4">Combination with checkpoint inhibitors</p>
                      <div className="text-2xl font-bold gradient-text">60</div>
                      <div className="text-xs text-muted-foreground">Patients</div>
                    </Card>
                    
                    <Card className="glass-effect p-6 text-center">
                      <Badge className="mb-4 bg-accent/10">Phase 1/2</Badge>
                      <h4 className="font-bold mb-2">Additional GI Cancers</h4>
                      <p className="text-sm text-muted-foreground mb-4">Expansion into other indications</p>
                      <div className="text-2xl font-bold gradient-text">150+</div>
                      <div className="text-xs text-muted-foreground">Patients</div>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Safety Profile */}
      <section id="safety" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Safety Profile</Badge>
              <h2 className="text-4xl font-bold mb-6">Proven Safety Record</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Over 15 years of clinical experience demonstrates pelareorep's excellent safety profile 
                with manageable, transient side effects.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {safetyHighlights.map((item, index) => (
                <Card key={index} className="glass-effect p-6 text-center hover-lift">
                  <div className="text-3xl font-bold gradient-text mb-2">{item.metric}</div>
                  <div className="font-medium mb-2">{item.description}</div>
                  <div className="text-xs text-muted-foreground">{item.detail}</div>
                </Card>
              ))}
            </div>

            <Card className="glass-effect p-8">
              <h3 className="text-xl font-bold mb-6 text-center">Common Adverse Events</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4 text-primary">Grade 1-2 (Mild to Moderate)</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      Flu-like symptoms (fever, fatigue)
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      Mild nausea and vomiting
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      Injection site reactions
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      Transient lymphopenia
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 text-secondary">Management</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-secondary" />
                      Self-limiting within 24-48 hours
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-secondary" />
                      Standard supportive care
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-secondary" />
                      Premedication protocols available
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-secondary" />
                      No dose modifications required
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Publications */}
      <section id="publications" className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Research Publications</Badge>
              <h2 className="text-4xl font-bold mb-6">Scientific Validation</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Our research is published in leading peer-reviewed journals, validating pelareorep's 
                innovative mechanism and clinical potential.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {keyPublications.map((pub, index) => (
                <Card key={index} className="glass-effect p-6 hover-lift">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="outline" className="bg-accent/10">{pub.impact}</Badge>
                        <span className="text-sm text-muted-foreground">{pub.date}</span>
                      </div>
                      <h3 className="text-lg font-bold mb-2">{pub.title}</h3>
                      <p className="text-primary font-medium mb-2">{pub.journal}</p>
                      <p className="text-sm text-muted-foreground">{pub.findings}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button size="sm" className="bg-gradient-primary">
                        <FileText className="h-4 w-4 mr-2" />
                        Read Paper
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Collaboration CTA */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Collaborate With Our Team</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Partner with leading scientists and clinicians to advance oncolytic virus therapy and 
              accelerate breakthrough treatments for cancer patients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                <FlaskConical className="h-5 w-5 mr-2" />
                Scientific Partnerships
              </Button>
              <Button size="lg" variant="outline">
                <Users className="h-5 w-5 mr-2" />
                Clinical Collaborations
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Science;