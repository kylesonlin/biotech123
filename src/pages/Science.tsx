import { Navigation } from '@/components/Navigation';
import { FooterSection } from '@/components/FooterSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Target, Zap, Shield, Microscope, FileText, Users, Database, Award } from 'lucide-react';
import molecularStructure from '@/assets/molecular-structure.png';

const Science = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                First-in-Class dsRNA Oncolytic Virus
              </Badge>
              <h1 className="text-4xl md:text-5xl font-condensed font-bold mb-6">
                Pelareorep: Engineered for 
                <span className="gradient-text"> Dual Action</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                The only dsRNA IV oncolytic virus designed to selectively replicate in RAS-mutant tumors,
                delivering both direct tumor cell lysis and immune activation to convert "cold" tumors to "hot".
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <Card className="text-center glass-effect">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold gradient-text">1,200+</div>
                  <div className="text-sm text-muted-foreground">Patients Treated</div>
                </CardContent>
              </Card>
              <Card className="text-center glass-effect">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold gradient-text">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="text-center glass-effect">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold gradient-text">20+</div>
                  <div className="text-sm text-muted-foreground">Clinical Studies</div>
                </CardContent>
              </Card>
              <Card className="text-center glass-effect">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold gradient-text">No MTD</div>
                  <div className="text-sm text-muted-foreground">Maximum Tolerated Dose</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Mechanism of Action */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-condensed font-bold mb-6">
                Mechanism of Action
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Pelareorep's unique dual-action approach combines selective viral replication with immune system activation
              </p>
            </div>

            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="targeting">Targeting</TabsTrigger>
                <TabsTrigger value="replication">Replication</TabsTrigger>
                <TabsTrigger value="immune">Immune Response</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <img 
                      src={molecularStructure} 
                      alt="Pelareorep molecular structure showing dsRNA oncolytic virus mechanism"
                      className="w-full h-auto rounded-lg shadow-card"
                    />
                  </div>
                  <div className="space-y-6">
                    <Card className="glass-effect">
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Target className="h-6 w-6 text-primary" />
                          <h3 className="font-semibold">IV Administration</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Systemic delivery reaches primary and metastatic sites; not neutralized in blood
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="glass-effect">
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Zap className="h-6 w-6 text-accent" />
                          <h3 className="font-semibold">Selective Infection</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Preferentially infects RAS-mutated tumor cells while sparing normal tissue
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="glass-effect">
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Shield className="h-6 w-6 text-secondary" />
                          <h3 className="font-semibold">Dual Action</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Triggers cell lysis and immune cascade that "heats up" cold tumors
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="targeting" className="space-y-6">
                <Card className="glass-effect">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Target className="h-6 w-6 text-primary" />
                      RAS-Mutant Selectivity
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Pelareorep exploits defective interferon responses in RAS-mutated cancer cells, 
                      allowing selective viral replication while sparing normal cells with intact antiviral defenses.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                        <h4 className="font-semibold text-primary mb-2">Normal Cells</h4>
                        <p className="text-sm text-muted-foreground">
                          Intact interferon pathway blocks viral replication
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                        <h4 className="font-semibold text-destructive mb-2">RAS-Mutant Cells</h4>
                        <p className="text-sm text-muted-foreground">
                          Defective interferon response allows viral entry
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="replication" className="space-y-6">
                <Card className="glass-effect">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Microscope className="h-6 w-6 text-accent" />
                      Viral Replication & Cell Lysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Once inside RAS-mutant cells, pelareorep hijacks cellular machinery to replicate, 
                      ultimately causing direct oncolysis and release of tumor-associated antigens.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">1</div>
                        <div>
                          <div className="font-semibold">Viral Entry</div>
                          <div className="text-sm text-muted-foreground">Pelareorep enters via specific cell surface receptors</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm">2</div>
                        <div>
                          <div className="font-semibold">Replication</div>
                          <div className="text-sm text-muted-foreground">dsRNA genome replicates using host cell resources</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center text-destructive font-bold text-sm">3</div>
                        <div>
                          <div className="font-semibold">Cell Lysis</div>
                          <div className="text-sm text-muted-foreground">Tumor cell death releases viral progeny and antigens</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="immune" className="space-y-6">
                <Card className="glass-effect">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Shield className="h-6 w-6 text-secondary" />
                      Immune System Activation
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Pelareorep's dsRNA structure and oncolytic action triggers multiple immune pathways, 
                      converting immunologically "cold" tumors into "hot" environments.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-secondary">Innate Immunity</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-secondary"></div>
                            <span>Toll-like receptor activation</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-secondary"></div>
                            <span>Type I interferon response</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-secondary"></div>
                            <span>NK cell recruitment</span>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-semibold text-primary">Adaptive Immunity</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                            <span>Dendritic cell maturation</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                            <span>T-cell priming & activation</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                            <span>Memory T-cell formation</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Safety & Manufacturing */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Shield className="h-6 w-6 text-primary" />
                    Safety Profile
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <p className="text-sm font-medium text-primary mb-2">Established Safety</p>
                    <p className="text-sm text-muted-foreground">
                      1,200+ patients treated across &gt;20 studies with no maximum tolerated dose identified
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold">Typical Adverse Events:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Transient flu-like symptoms</li>
                      <li>• Fatigue (manageable)</li>
                      <li>• Low-grade fever</li>
                      <li>• No increase in grade ≥3 treatment-related AEs</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Database className="h-6 w-6 text-secondary" />
                    Manufacturing & IP
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 rounded-lg bg-secondary/5 border border-secondary/20">
                    <p className="text-sm font-medium text-secondary mb-2">Made in USA</p>
                    <p className="text-sm text-muted-foreground">
                      Manufactured in Carlsbad, CA with scalable, high-yield production
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold">Key Advantages:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Non-genetically modified</li>
                      <li>• No special handling required</li>
                      <li>• High yield, low cost of goods</li>
                      <li>• Strong method-of-use IP protection</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Publications & Recognition */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-condensed font-bold mb-6">
                Scientific Recognition
              </h2>
              <p className="text-xl text-muted-foreground">
                Published research and regulatory recognition validating our approach
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <FileText className="h-6 w-6 text-primary" />
                    Publications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Peer-reviewed publications demonstrating pelareorep's mechanism and clinical benefits
                  </p>
                  <Button variant="outline" className="w-full">
                    View Publications
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Award className="h-6 w-6 text-accent" />
                    FDA Designations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <Badge variant="outline" className="text-xs">Fast Track</Badge>
                    <Badge variant="outline" className="text-xs">Orphan Drug</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    FDA recognition for unmet medical need in pancreatic cancer
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Users className="h-6 w-6 text-secondary" />
                    Presentations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Conference presentations at major oncology meetings worldwide
                  </p>
                  <Button variant="outline" className="w-full">
                    View Presentations
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-condensed font-bold mb-6">
              Ready to Learn More?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Discover how pelareorep is advancing through clinical trials
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                View Our Pipeline
              </Button>
              <Button size="lg" variant="outline">
                Contact Our Team
              </Button>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default Science;