import { Navigation } from '@/components/Navigation';
import { FooterSection } from '@/components/FooterSection';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, Target, Award, Brain, Shield, Mail, Lightbulb, Microscope, Globe } from 'lucide-react';

const About = () => {
  // Executive leadership data
  const executiveTeam = [
    {
      name: "Dr. Matt Coffey",
      title: "President & CEO",
      affiliation: "Oncolytics Biotech Inc.",
      expertise: "Oncolytic virotherapy, strategic leadership",
      background: "20+ years in biotechnology leadership, former roles at Pfizer and Roche",
      achievements: "Led multiple successful drug development programs",
      education: "PhD Molecular Biology, MBA"
    },
    {
      name: "Kirk Look",
      title: "Chief Financial Officer",
      affiliation: "Oncolytics Biotech Inc.",
      expertise: "Corporate finance, strategic planning",
      background: "15+ years in biotech finance, former CFO at multiple public companies",
      achievements: "Managed over $200M in financing transactions",
      education: "CPA, MBA Finance"
    }
  ];

  // Scientific Advisory Board data
  const scientificAdvisoryBoard = [
    {
      name: "Dr. John Bell",
      title: "Senior Scientist",
      affiliation: "Ottawa Hospital Research Institute",
      expertise: "Oncolytic viruses, immunotherapy, translational research",
      credentials: "200+ publications, pioneer in oncolytic virus field"
    },
    {
      name: "Dr. Dirk Schadendorf",
      title: "Professor of Dermatology",
      affiliation: "University Hospital Essen, Germany",
      expertise: "Melanoma, immunotherapy, clinical trials",
      credentials: "Leading EU oncologist, 300+ publications"
    },
    {
      name: "Dr. Yuman Fong",
      title: "Chair of Surgery",
      affiliation: "City of Hope Medical Center",
      expertise: "Surgical oncology, hepatobiliary surgery, oncolytic viruses",
      credentials: "World-renowned surgeon, 400+ publications"
    }
  ];

  // FAQ data integrated contextually
  const companyFAQs = [
    {
      question: "What makes Oncolytics unique in the oncology space?",
      answer: "We are the only company with a systemically delivered oncolytic virus (pelareorep) in late-stage clinical development, with over 15 years of safety data and a registration-enabled program in GI cancers."
    },
    {
      question: "What is our competitive advantage?",
      answer: "Our differentiated MOA combines selective tumor replication, immune system activation, and proven safety profile. We have the longest safety track record in the oncolytic virus field."
    },
    {
      question: "What are our key value creation milestones?",
      answer: "Phase 3 GOBLET study readout, potential partnership agreements, regulatory submissions, and expansion into additional indications."
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
              Pioneering Cancer Innovation
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-slide-up">
              Building the leading GI tumor immunotherapy platform through breakthrough science, 
              visionary leadership, and unwavering commitment to patient outcomes.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card className="glass-effect p-6 hover-lift">
                <div className="text-3xl font-bold gradient-text mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Years of Clinical Experience</div>
              </Card>
              <Card className="glass-effect p-6 hover-lift">
                <div className="text-3xl font-bold gradient-text mb-2">1,200+</div>
                <div className="text-sm text-muted-foreground">Patients Treated Safely</div>
              </Card>
              <Card className="glass-effect p-6 hover-lift">
                <div className="text-3xl font-bold gradient-text mb-2">40+</div>
                <div className="text-sm text-muted-foreground">Clinical Studies Completed</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section id="story" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4">Our Story</Badge>
                <h2 className="text-4xl font-bold mb-6">Transforming Cancer Treatment Through Innovation</h2>
                <p className="text-muted-foreground mb-6">
                  Founded on the principle that breakthrough science can change patient lives, Oncolytics Biotech 
                  has spent over two decades perfecting pelareorep—a first-in-class oncolytic virus that selectively 
                  targets cancer cells while activating the immune system.
                </p>
                <p className="text-muted-foreground mb-8">
                  Our unique mechanism of action combines direct tumor lysis with immune activation, creating a 
                  synergistic effect that has shown promise across multiple cancer types, with particular strength 
                  in gastrointestinal tumors.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="outline"><Lightbulb className="h-3 w-3 mr-1" />Innovation</Badge>
                  <Badge variant="outline"><Shield className="h-3 w-3 mr-1" />Safety First</Badge>
                  <Badge variant="outline"><Globe className="h-3 w-3 mr-1" />Global Impact</Badge>
                </div>
              </div>
              <div className="relative">
                <Card className="glass-effect p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <Microscope className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Scientific Excellence</h4>
                        <p className="text-sm text-muted-foreground">World-class research and development</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
                        <Target className="h-6 w-6 text-secondary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Patient Focus</h4>
                        <p className="text-sm text-muted-foreground">Every decision driven by patient outcomes</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                        <Award className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Proven Track Record</h4>
                        <p className="text-sm text-muted-foreground">15+ years of clinical success</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section with Tabs */}
      <section id="leadership" className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Leadership</Badge>
              <h2 className="text-4xl font-bold mb-6">Exceptional Leadership Driving Innovation</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Our team combines decades of industry experience with cutting-edge scientific expertise 
                to advance breakthrough cancer treatments.
              </p>
            </div>

            <Tabs defaultValue="executive" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="executive">Executive Team</TabsTrigger>
                <TabsTrigger value="advisory">Scientific Advisory Board</TabsTrigger>
              </TabsList>
              
              <TabsContent value="executive" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {executiveTeam.map((member, index) => (
                    <Card key={index} className="glass-effect p-6 hover-lift">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                          <Users className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                          <p className="text-primary font-medium mb-2">{member.title}</p>
                          <p className="text-sm text-muted-foreground mb-4">{member.background}</p>
                          <div className="space-y-2 text-sm">
                            <div><strong>Expertise:</strong> {member.expertise}</div>
                            <div><strong>Key Achievements:</strong> {member.achievements}</div>
                            <div><strong>Education:</strong> {member.education}</div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="advisory" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {scientificAdvisoryBoard.map((member, index) => (
                    <Card key={index} className="glass-effect p-6 hover-lift">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                          <Brain className="h-8 w-8 text-secondary-foreground" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">{member.name}</h3>
                        <p className="text-primary font-medium mb-1">{member.title}</p>
                        <p className="text-sm text-muted-foreground mb-4">{member.affiliation}</p>
                        <div className="space-y-2 text-sm text-left">
                          <div><strong>Expertise:</strong> {member.expertise}</div>
                          <div><strong>Credentials:</strong> {member.credentials}</div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section id="mission" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Mission & Values</Badge>
              <h2 className="text-4xl font-bold mb-6">Driven by Purpose, Guided by Values</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="glass-effect p-8 text-center hover-lift">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To develop and commercialize breakthrough oncolytic virus therapies that transform 
                  cancer treatment and improve patient lives globally.
                </p>
              </Card>
              
              <Card className="glass-effect p-8 text-center hover-lift">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4">Innovation</h3>
                <p className="text-muted-foreground">
                  Pioneering novel therapeutic approaches through rigorous science and 
                  breakthrough research methodologies.
                </p>
              </Card>
              
              <Card className="glass-effect p-8 text-center hover-lift">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4">Integrity</h3>
                <p className="text-muted-foreground">
                  Maintaining the highest standards of scientific rigor, regulatory compliance, 
                  and ethical conduct in all our endeavors.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Frequently Asked Questions</Badge>
              <h2 className="text-4xl font-bold mb-6">Key Questions About Oncolytics</h2>
            </div>
            
            <div className="space-y-6">
              {companyFAQs.map((faq, index) => (
                <Card key={index} className="glass-effect p-6">
                  <h3 className="text-lg font-semibold mb-4 text-primary">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Learn More?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Connect with our team to discuss partnership opportunities and learn more about our innovative approach to cancer treatment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                <Mail className="h-5 w-5 mr-2" />
                Contact Leadership
              </Button>
              <Button size="lg" variant="outline">
                <Brain className="h-5 w-5 mr-2" />
                Scientific Inquiries
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default About;