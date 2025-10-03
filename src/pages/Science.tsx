import { Navigation } from '@/components/Navigation';
import { FooterSection } from '@/components/FooterSection';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Target, Zap, Shield, Activity, Database, FileText, Award } from 'lucide-react';
import moaDiagram from '@/assets/moa-diagram-custom.jpg';

const Science = () => {
  const mechanismSteps = [
    {
      number: '01',
      icon: Target,
      title: 'SELECTIVE TARGETING',
      subtitle: '90% Selectivity',
      description: 'Pelareorep exploits RAS pathway mutations present in 90% of pancreatic cancers, achieving unprecedented tumor selectivity while sparing healthy tissue.',
    },
    {
      number: '02',
      icon: Zap,
      title: 'VIRAL REPLICATION',
      subtitle: 'Tumor-Specific',
      description: 'Double-stranded RNA replicates exclusively within cancer cells, amplifying therapeutic effect at the tumor site.',
    },
    {
      number: '03',
      icon: Shield,
      title: 'DIRECT ONCOLYSIS',
      subtitle: 'Cell Lysis',
      description: 'Viral replication causes direct destruction of infected tumor cells, releasing tumor antigens.',
    },
    {
      number: '04',
      icon: Activity,
      title: 'IMMUNE ACTIVATION',
      subtitle: 'Sustained Response',
      description: 'Released antigens prime immune system for long-term anti-tumor surveillance and memory.',
    },
  ];

  const clinicalStudies = [
    {
      name: 'GOBLET',
      phase: 'Phase 3',
      indication: 'Pancreatic Adenocarcinoma',
      status: 'Ongoing',
      design: 'Randomized, controlled trial',
      endpoints: 'Overall Survival (primary)',
      enrollment: '400 patients'
    },
    {
      name: 'AWARE-1',
      phase: 'Phase 2',
      indication: 'Advanced Solid Tumors',
      status: 'Completed',
      design: 'Multi-arm, open-label',
      endpoints: 'Safety, efficacy signals',
      enrollment: '110 patients'
    },
    {
      name: 'IND-213',
      phase: 'Phase 1/2',
      indication: 'Colorectal + Pembrolizumab',
      status: 'Ongoing',
      design: 'Dose escalation + expansion',
      endpoints: 'MTD, RP2D, efficacy',
      enrollment: '60 patients'
    }
  ];

  const safetyMetrics = [
    { metric: '1,200+', label: 'Patients Treated', detail: '15+ years safety data' },
    { metric: 'NO MTD', label: 'Identified', detail: 'Exceptional tolerability' },
    { metric: 'Grade 1-2', label: 'Most AEs', detail: 'Mild, manageable symptoms' },
    { metric: '40+', label: 'Clinical Studies', detail: 'Comprehensive experience' },
  ];

  const publications = [
    {
      title: 'Pelareorep with Pembrolizumab and Chemotherapy in Pancreatic Adenocarcinoma',
      journal: 'Nature Medicine',
      year: '2024',
      type: 'Phase 2 Results'
    },
    {
      title: 'Mechanisms of Oncolytic Virus Immunotherapy: Clinical Translation',
      journal: 'Cancer Cell',
      year: '2024',
      type: 'Review'
    },
    {
      title: 'Safety and Efficacy of Pelareorep in GI Malignancies: Meta-Analysis',
      journal: 'Lancet Oncology',
      year: '2023',
      type: 'Meta-Analysis'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">The Science</Badge>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
              Revolutionary Mechanism of Action
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Pelareorep represents a paradigm shift in cancer treatment—combining the precision 
              of targeted therapy with the power of immune system activation.
            </p>
          </div>
        </div>
      </section>

      {/* Mechanism of Action */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
            How Pelareorep Works
          </h2>

          {/* MOA Visual */}
          <Card className="mb-12 overflow-hidden">
            <img 
              src={moaDiagram} 
              alt="Pelareorep mechanism of action diagram" 
              className="w-full h-auto"
            />
          </Card>

          {/* Mechanism Steps */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {mechanismSteps.map((step, index) => (
              <Card 
                key={step.number} 
                className="p-6 hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/30 relative group"
              >
                <div className="absolute top-4 right-4 text-5xl font-serif font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                  {step.number}
                </div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-foreground mb-1">
                    {step.title}
                  </h4>
                  <p className="text-sm font-semibold text-primary mb-3">
                    {step.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {index < mechanismSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30 transform -translate-y-1/2 z-20"></div>
                )}
              </Card>
            ))}
          </div>

          {/* Key Scientific Insights */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-2">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">RAS-Selective Targeting</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Pelareorep exploits a fundamental vulnerability in RAS-mutant tumors: their compromised 
                antiviral defenses. This enables selective viral replication in cancer cells while 
                sparing normal tissue.
              </p>
              <div className="flex items-center gap-2">
                <Badge>90% Pancreatic Cancers</Badge>
                <Badge>40% Colorectal Cancers</Badge>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-secondary/5 to-accent/5 border-2">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Immune System Priming</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Beyond direct tumor destruction, pelareorep transforms immunologically "cold" tumors 
                into "hot" targets—increasing T-cell infiltration and creating long-term anti-tumor immunity.
              </p>
              <div className="flex items-center gap-2">
                <Badge>T-Cell Activation</Badge>
                <Badge>Durable Response</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Clinical Evidence */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
            Clinical Evidence
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Robust data from 40+ clinical studies across multiple tumor types
          </p>

          <Tabs defaultValue="ongoing" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="planned">Planned</TabsTrigger>
            </TabsList>

            <TabsContent value="ongoing" className="space-y-6">
              {clinicalStudies.filter(s => s.status === 'Ongoing').map((study) => (
                <Card key={study.name} className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-foreground mb-2">{study.name}</h3>
                      <Badge>{study.phase}</Badge>
                    </div>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      {study.status}
                    </Badge>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground mb-1">Indication</p>
                      <p className="font-semibold">{study.indication}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Design</p>
                      <p className="font-semibold">{study.design}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Primary Endpoints</p>
                      <p className="font-semibold">{study.endpoints}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Enrollment</p>
                      <p className="font-semibold">{study.enrollment}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="completed" className="space-y-6">
              {clinicalStudies.filter(s => s.status === 'Completed').map((study) => (
                <Card key={study.name} className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-foreground mb-2">{study.name}</h3>
                      <Badge>{study.phase}</Badge>
                    </div>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      {study.status}
                    </Badge>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground mb-1">Indication</p>
                      <p className="font-semibold">{study.indication}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Enrollment</p>
                      <p className="font-semibold">{study.enrollment}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="planned">
              <Card className="p-12 text-center">
                <Database className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Future Studies</h3>
                <p className="text-muted-foreground">Additional trials in development based on Phase 3 outcomes</p>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Safety Profile */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
            Exceptional Safety Profile
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            15+ years of clinical experience demonstrating remarkable tolerability
          </p>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {safetyMetrics.map((item) => (
              <Card key={item.label} className="p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="text-4xl font-serif font-bold text-primary mb-2">{item.metric}</div>
                <div className="text-sm font-semibold text-foreground mb-1">{item.label}</div>
                <div className="text-xs text-muted-foreground">{item.detail}</div>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-gradient-to-br from-primary/5 to-background">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Most Common Adverse Events</h3>
            <p className="text-muted-foreground mb-6">
              Pelareorep is generally well-tolerated. Most adverse events are Grade 1-2 and include:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm">Mild flu-like symptoms</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm">Transient fatigue</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm">Low-grade fever</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Publications */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
            Key Publications
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Peer-reviewed research supporting our scientific approach
          </p>

          <div className="space-y-4">
            {publications.map((pub) => (
              <Card key={pub.title} className="p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg font-bold text-foreground mb-2">{pub.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="font-semibold text-primary">{pub.journal}</span>
                      <span>•</span>
                      <span>{pub.year}</span>
                      <Badge variant="secondary" className="text-xs">{pub.type}</Badge>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-2">
              View All Publications
            </Button>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Science;
