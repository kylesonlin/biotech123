import { Navigation } from '@/components/Navigation';
import { FooterSection } from '@/components/FooterSection';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Building, TrendingUp, Award, Users, Mail, Linkedin, ExternalLink } from 'lucide-react';

const Team = () => {
  const leadership = [
    {
      name: "Dr. Thomas Heineman",
      role: "Chief Executive Officer & President",
      image: "/placeholder.svg",
      background: "M.D. from Harvard Medical School, former Chief Medical Officer at Ambrx",
      highlights: [
        "Led Ambrx through $2B acquisition by Johnson & Johnson",
        "20+ years experience in biotech leadership",
        "Former CMO positions at multiple public biotech companies",
        "Extensive clinical development and regulatory expertise"
      ],
      expertise: "Strategic leadership, M&A execution, clinical development",
      education: "M.D. Harvard Medical School, MBA Stanford Graduate School of Business"
    },
    {
      name: "Kirk Look",
      role: "Chief Business Officer",
      image: "/placeholder.svg", 
      background: "Former Senior VP Business Development at Ambrx",
      highlights: [
        "Key architect of Ambrx $2B transaction with J&J",
        "15+ years pharmaceutical business development",
        "Led partnerships worth $5B+ in cumulative value",
        "Deep relationships across big pharma and biotech"
      ],
      expertise: "Business development, strategic partnerships, deal execution",
      education: "MBA Wharton School, BS Chemical Engineering"
    },
    {
      name: "Dr. Brad Thompson",
      role: "Chief Medical Officer",
      image: "/placeholder.svg",
      background: "Leading virologist with extensive oncology drug development experience",
      highlights: [
        "25+ years in oncology drug development",
        "Former leadership roles at major pharmaceutical companies", 
        "Expert in oncolytic virus mechanisms and clinical development",
        "Published researcher in cancer immunotherapy"
      ],
      expertise: "Oncology development, regulatory strategy, clinical operations",
      education: "M.D. University of Toronto, Ph.D. Virology"
    },
    {
      name: "Andrew de Guttadauro",
      role: "Chief Financial Officer",
      image: "/placeholder.svg",
      background: "Seasoned biotech CFO with extensive capital markets experience",
      highlights: [
        "Raised hundreds of millions in biotech financing",
        "Former CFO of multiple public biotech companies",
        "Expert in dilution-limiting capital strategies",
        "Strong relationships with institutional investors"
      ],
      expertise: "Capital markets, financial strategy, corporate development",
      education: "MBA Finance, CPA designation"
    }
  ];

  const advisors = [
    {
      name: "Dr. Heinz-Josef Lenz",
      role: "Co-Director, GI Oncology Program",
      institution: "USC Norris Comprehensive Cancer Center",
      expertise: "Gastrointestinal oncology, clinical trials"
    },
    {
      name: "Dr. Smitha Krishnamurthi", 
      role: "Professor of Medicine",
      institution: "Case Western Reserve University",
      expertise: "Colorectal cancer, investigational therapeutics"
    },
    {
      name: "Dr. Anitra Fielding",
      role: "Medical Oncologist",
      institution: "Cross Cancer Institute",
      expertise: "Anal cancer, radiation oncology"
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
                Leadership Team
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Proven Dealmakers & Scientists
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Our leadership combines <strong>demonstrated transaction success</strong> with deep 
                scientific expertise, positioned to maximize value creation through strategic partnerships.
              </p>
            </div>

            {/* Key Achievement Highlight */}
            <Card className="max-w-4xl mx-auto border-border/50 shadow-elegant bg-gradient-primary/5">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-2xl mb-6 shadow-glow">
                  <Building className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Track Record of Value Creation</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  CEO and CBO executed the <strong className="text-accent">$2 billion acquisition of Ambrx by Johnson & Johnson</strong>, 
                  demonstrating proven ability to deliver exceptional shareholder value.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent">$2.0B</div>
                    <div className="text-sm text-muted-foreground">Transaction Value</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent">$500M+</div>
                    <div className="text-sm text-muted-foreground">Capital Raised Combined</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent">15+</div>
                    <div className="text-sm text-muted-foreground">Years Oncolytic Experience</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Executive Team */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Executive Leadership</h2>
            <div className="space-y-12">
              {leadership.map((exec, index) => (
                <Card key={index} className="border-border/50 shadow-card">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-4 gap-8 items-start">
                      <div className="lg:col-span-1 text-center lg:text-left">
                        <div className="w-32 h-32 bg-gradient-primary rounded-2xl mx-auto lg:mx-0 mb-4 flex items-center justify-center shadow-glow">
                          <Users className="w-16 h-16 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{exec.name}</h3>
                        <p className="text-secondary font-medium mb-4">{exec.role}</p>
                        <div className="flex justify-center lg:justify-start gap-2">
                          <Button size="sm" variant="outline" className="p-2">
                            <Mail className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="p-2">
                            <Linkedin className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="lg:col-span-3">
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold mb-3">Background</h4>
                          <p className="text-muted-foreground leading-relaxed">{exec.background}</p>
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold mb-3">Key Achievements</h4>
                          <ul className="space-y-2">
                            {exec.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-muted-foreground text-sm">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-sm font-semibold mb-2 text-secondary">Expertise</h4>
                            <p className="text-sm text-muted-foreground">{exec.expertise}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold mb-2 text-secondary">Education</h4>
                            <p className="text-sm text-muted-foreground">{exec.education}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Scientific Advisory Board */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Scientific Advisory Board</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                World-class experts in gastrointestinal oncology and immunotherapy provide strategic 
                guidance on our clinical development programs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {advisors.map((advisor, index) => (
                <Card key={index} className="border-border/50 shadow-card text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{advisor.name}</h3>
                    <p className="text-sm text-secondary mb-1">{advisor.role}</p>
                    <p className="text-sm text-muted-foreground mb-3">{advisor.institution}</p>
                    <Badge variant="secondary" className="text-xs">
                      {advisor.expertise}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button variant="outline" className="inline-flex items-center gap-2">
                View Full Scientific Advisory Board
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6 text-center">
            <Card className="max-w-2xl mx-auto border-border/50 shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Partner</h3>
                <p className="text-muted-foreground mb-6">
                  Our proven leadership team is positioned to execute strategic partnerships 
                  and maximize value for all stakeholders.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gradient-primary hover:opacity-90">
                    Contact Leadership
                  </Button>
                  <Button variant="outline">
                    Investor Relations
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

export default Team;