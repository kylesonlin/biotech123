import { Navigation } from '@/components/Navigation';
import { FooterSection } from '@/components/FooterSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, BookOpen, Target, Award } from 'lucide-react';

const ScientificAdvisoryBoard = () => {
  const fullSABMembers = [
    {
      name: "Dr. John Nemunaitis, MD",
      title: "Executive Medical Director",
      affiliation: "Mary Crowley Cancer Research",
      expertise: "Clinical oncology, immunotherapy",
      credentials: "MD, FACP, leading cancer immunotherapy researcher"
    },
    {
      name: "Dr. Eduardo Díaz-Rubio, MD, PhD",
      title: "Professor of Medical Oncology",
      affiliation: "Complutense University Madrid",
      expertise: "GI oncology, clinical trials",  
      credentials: "Former President, European Society for Medical Oncology"
    },
    {
      name: "Dr. Steven Libutti, MD, FACS",
      title: "Director, Rutgers Cancer Institute",
      affiliation: "Rutgers Robert Wood Johnson Medical School",
      expertise: "Surgical oncology, GI cancers",
      credentials: "Former Senior Investigator, National Cancer Institute"
    },
    {
      name: "Dr. Derek Jonker, MD",
      title: "Senior Scientist",
      affiliation: "Ottawa Hospital Research Institute",
      expertise: "GI medical oncology, clinical research",
      credentials: "Professor of Medicine, University of Ottawa"
    }
  ];

  const giFocusedSAB = [
    {
      name: "Dr. Heinz-Josef Lenz, MD",
      title: "Professor of Medicine & Preventive Medicine",
      affiliation: "USC Norris Comprehensive Cancer Center",
      expertise: "Colorectal cancer, precision medicine",
      credentials: "Co-Director, GI Oncology Program"
    },
    {
      name: "Dr. Daniel Laheru, MD",
      title: "Professor of Oncology",
      affiliation: "Johns Hopkins Sidney Kimmel Cancer Center",
      expertise: "Pancreatic cancer, immunotherapy",
      credentials: "Co-Director, Pancreatic Cancer Research Program"
    },
    {
      name: "Dr. Tanios Bekaii-Saab, MD",
      title: "Medical Director",
      affiliation: "Mayo Clinic Cancer Center",
      expertise: "GI oncology, clinical trials",
      credentials: "Professor of Medicine, Mayo Clinic"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 text-primary border-primary">
                Scientific Advisory Board
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                World-Class Scientific Expertise
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Our Scientific Advisory Board comprises leading oncologists and researchers 
                who guide our clinical strategy and ensure scientific excellence in our 
                GI cancer immunotherapy platform.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <Card className="text-center border-border/50 shadow-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-accent mb-2">7</div>
                  <div className="text-sm text-muted-foreground">SAB Members</div>
                </CardContent>
              </Card>
              
              <Card className="text-center border-border/50 shadow-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-accent mb-2">3</div>
                  <div className="text-sm text-muted-foreground">GI Specialists</div>
                </CardContent>
              </Card>
              
              <Card className="text-center border-border/50 shadow-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-accent mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Combined Publications</div>
                </CardContent>
              </Card>
              
              <Card className="text-center border-border/50 shadow-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-accent mb-2">25+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* SAB Members Tabs */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <Tabs defaultValue="full-sab" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-12">
                <TabsTrigger value="full-sab">Full Scientific Advisory Board</TabsTrigger>
                <TabsTrigger value="gi-focused">GI-Focused SAB</TabsTrigger>
              </TabsList>

              <TabsContent value="full-sab">
                <div className="grid md:grid-cols-2 gap-8">
                  {fullSABMembers.map((member, index) => (
                    <Card key={index} className="border-border/50 shadow-card hover:shadow-elegant transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle className="text-xl">{member.name}</CardTitle>
                        <div className="text-secondary font-medium">{member.title}</div>
                        <div className="text-muted-foreground">{member.affiliation}</div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div>
                            <Badge variant="secondary" className="text-xs mb-2">
                              Expertise
                            </Badge>
                            <p className="text-sm text-muted-foreground">{member.expertise}</p>
                          </div>
                          <div>
                            <Badge variant="outline" className="text-xs mb-2">
                              Credentials  
                            </Badge>
                            <p className="text-sm text-muted-foreground">{member.credentials}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="gi-focused">
                <div className="grid md:grid-cols-2 gap-8">
                  {giFocusedSAB.map((member, index) => (
                    <Card key={index} className="border-border/50 shadow-card hover:shadow-elegant transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle className="text-xl">{member.name}</CardTitle>
                        <div className="text-secondary font-medium">{member.title}</div>
                        <div className="text-muted-foreground">{member.affiliation}</div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div>
                            <Badge variant="secondary" className="text-xs mb-2">
                              GI Expertise
                            </Badge>
                            <p className="text-sm text-muted-foreground">{member.expertise}</p>
                          </div>
                          <div>
                            <Badge variant="outline" className="text-xs mb-2">
                              Credentials
                            </Badge>
                            <p className="text-sm text-muted-foreground">{member.credentials}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            {/* Strategic Focus */}
            <Card className="mt-16 border-border/50 shadow-elegant">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Strategic Advisory Focus</CardTitle>
                <p className="text-muted-foreground">
                  Our SAB provides critical guidance across key areas of our GI immunotherapy platform
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Clinical Strategy</h4>
                    <p className="text-sm text-muted-foreground">
                      Guidance on trial design, regulatory pathways, and clinical development priorities
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Scientific Innovation</h4>
                    <p className="text-sm text-muted-foreground">
                      Input on mechanism optimization, biomarker development, and combination strategies
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Partnership Strategy</h4>
                    <p className="text-sm text-muted-foreground">
                      Expertise in forming strategic partnerships and navigating pharmaceutical collaborations
                    </p>
                  </div>
                </div>

                <div className="text-center pt-8 border-t border-border/50 mt-8">
                  <p className="text-sm text-muted-foreground mb-4">
                    Interested in learning more about our scientific advisory approach?
                  </p>
                  <Button className="bg-gradient-primary hover:opacity-90">
                    Contact Scientific Affairs
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default ScientificAdvisoryBoard;