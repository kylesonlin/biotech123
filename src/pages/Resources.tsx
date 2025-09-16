import { Navigation } from '@/components/Navigation';
import { FooterSection } from '@/components/FooterSection';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, BookOpen, Users, Mail, Download, ExternalLink, Calendar, Award, Rss } from 'lucide-react';

const Resources = () => {
  // Press releases data
  const pressReleases = [
    {
      date: "March 15, 2024",
      title: "Oncolytics Announces Positive Interim Analysis from GOBLET Study",
      summary: "Interim analysis shows promising efficacy signals in gastrointestinal cancers",
      category: "Clinical Update",
      link: "#"
    },
    {
      date: "February 8, 2024", 
      title: "FDA Grants Fast Track Designation for Pelareorep in GI Cancers",
      summary: "Regulatory milestone accelerates development pathway",
      category: "Regulatory",
      link: "#"
    },
    {
      date: "January 22, 2024",
      title: "Strategic Partnership Agreement with Leading Medical Center",
      summary: "Collaboration expands clinical research capabilities",
      category: "Partnership",
      link: "#"
    }
  ];

  // Publications data
  const publications = [
    {
      title: "Pelareorep with Pembrolizumab and Chemotherapy in Pancreatic Adenocarcinoma",
      journal: "Nature Cancer",
      date: "March 2024",
      authors: "Mahalingam D, et al.",
      impact: "High Impact Factor",
      link: "#"
    },
    {
      title: "Oncolytic Virus Therapy: Mechanisms and Clinical Applications",
      journal: "Journal of Clinical Oncology",
      date: "February 2024", 
      authors: "Bell JC, Coffey MC, et al.",
      impact: "High Impact Factor",
      link: "#"
    },
    {
      title: "Safety Profile of Systemically Delivered Oncolytic Viruses",
      journal: "Cancer Research",
      date: "January 2024",
      authors: "Fong Y, Look K, et al.",
      impact: "High Impact Factor", 
      link: "#"
    }
  ];

  // Conference presentations data
  const presentations = [
    {
      title: "Phase 3 GOBLET Study: Pelareorep in Advanced GI Cancers",
      conference: "ASCO Annual Meeting 2024",
      date: "June 2024",
      location: "Chicago, IL",
      type: "Oral Presentation",
      link: "#"
    },
    {
      title: "Mechanism of Action: Selective Replication and Immune Activation",
      conference: "AACR Annual Meeting 2024",
      date: "April 2024",
      location: "San Diego, CA", 
      type: "Poster Presentation",
      link: "#"
    },
    {
      title: "Long-term Safety Data from 15+ Years of Clinical Experience",
      conference: "Society for Immunotherapy of Cancer",
      date: "November 2023",
      location: "Boston, MA",
      type: "Featured Poster",
      link: "#"
    }
  ];

  // Contact information by department
  const contactDepartments = [
    {
      title: "Business Development",
      description: "Partnership opportunities and licensing inquiries",
      email: "business@oncolytics.ca",
      phone: "+1 (403) 670-7377",
      icon: Users
    },
    {
      title: "Investor Relations", 
      description: "Financial information and investor inquiries",
      email: "investors@oncolytics.ca",
      phone: "+1 (403) 670-7377",
      icon: Award
    },
    {
      title: "Media Inquiries",
      description: "Press releases and media requests",
      email: "media@oncolytics.ca", 
      phone: "+1 (403) 670-7377",
      icon: FileText
    },
    {
      title: "Scientific Affairs",
      description: "Research collaborations and scientific inquiries",
      email: "science@oncolytics.ca",
      phone: "+1 (403) 670-7377", 
      icon: BookOpen
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
              Resources & Media Center
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-slide-up">
              Access the latest news, research publications, conference presentations, and 
              connect with our team for partnership opportunities.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card className="glass-effect p-6 hover-lift">
                <div className="text-3xl font-bold gradient-text mb-2">150+</div>
                <div className="text-sm text-muted-foreground">Publications & Presentations</div>
              </Card>
              <Card className="glass-effect p-6 hover-lift">
                <div className="text-3xl font-bold gradient-text mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Press Releases This Year</div>
              </Card>
              <Card className="glass-effect p-6 hover-lift">
                <div className="text-3xl font-bold gradient-text mb-2">Global</div>
                <div className="text-sm text-muted-foreground">Media Coverage</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Media Content Tabs */}
      <section id="media" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Latest Updates</Badge>
              <h2 className="text-4xl font-bold mb-6">Press & Publications</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Stay informed with our latest clinical updates, research findings, and company announcements.
              </p>
            </div>

            <Tabs defaultValue="press" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="press">Press Releases</TabsTrigger>
                <TabsTrigger value="publications">Publications</TabsTrigger>
                <TabsTrigger value="presentations">Presentations</TabsTrigger>
              </TabsList>
              
              <TabsContent value="press" className="mt-8">
                <div className="grid grid-cols-1 gap-6">
                  {pressReleases.map((release, index) => (
                    <Card key={index} className="glass-effect p-6 hover-lift">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <Badge variant="outline">{release.category}</Badge>
                            <span className="text-sm text-muted-foreground">{release.date}</span>
                          </div>
                          <h3 className="text-xl font-bold mb-3">{release.title}</h3>
                          <p className="text-muted-foreground mb-4">{release.summary}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Button size="sm" className="bg-gradient-primary">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Read More
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            PDF
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="publications" className="mt-8">
                <div className="grid grid-cols-1 gap-6">
                  {publications.map((pub, index) => (
                    <Card key={index} className="glass-effect p-6 hover-lift">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <Badge variant="outline" className="bg-accent/10">{pub.impact}</Badge>
                            <span className="text-sm text-muted-foreground">{pub.date}</span>
                          </div>
                          <h3 className="text-xl font-bold mb-2">{pub.title}</h3>
                          <p className="text-primary font-medium mb-2">{pub.journal}</p>
                          <p className="text-sm text-muted-foreground">{pub.authors}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Button size="sm" className="bg-gradient-secondary">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Article
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="presentations" className="mt-8">
                <div className="grid grid-cols-1 gap-6">
                  {presentations.map((pres, index) => (
                    <Card key={index} className="glass-effect p-6 hover-lift">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <Badge variant="outline" className="bg-warning/10">{pres.type}</Badge>
                            <span className="text-sm text-muted-foreground">{pres.date}</span>
                          </div>
                          <h3 className="text-xl font-bold mb-2">{pres.title}</h3>
                          <p className="text-primary font-medium mb-1">{pres.conference}</p>
                          <p className="text-sm text-muted-foreground">{pres.location}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Button size="sm" className="bg-gradient-accent">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Slides
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            PDF
                          </Button>
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

      {/* Contact Section with Tabs */}
      <section id="contact" className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Get In Touch</Badge>
              <h2 className="text-4xl font-bold mb-6">Connect With Our Team</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Whether you're interested in partnerships, investment opportunities, or scientific collaboration, 
                we're here to help.
              </p>
            </div>

            <Tabs defaultValue="business" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="business">Business Dev</TabsTrigger>
                <TabsTrigger value="investors">Investors</TabsTrigger>
                <TabsTrigger value="media">Media</TabsTrigger>
                <TabsTrigger value="science">Scientific</TabsTrigger>
              </TabsList>
              
              {contactDepartments.map((dept, index) => (
                <TabsContent 
                  key={dept.title.toLowerCase().replace(' ', '')} 
                  value={dept.title.toLowerCase().replace(' ', '')} 
                  className="mt-8"
                >
                  <Card className="glass-effect p-8 max-w-2xl mx-auto">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                        <dept.icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{dept.title}</h3>
                      <p className="text-muted-foreground mb-8">{dept.description}</p>
                      
                      <div className="space-y-4 text-center">
                        <div>
                          <p className="font-medium mb-2">Email</p>
                          <p className="text-primary">{dept.email}</p>
                        </div>
                        <div>
                          <p className="font-medium mb-2">Phone</p>
                          <p className="text-primary">{dept.phone}</p>
                        </div>
                      </div>
                      
                      <div className="mt-8">
                        <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                          <Mail className="h-5 w-5 mr-2" />
                          Contact {dept.title}
                        </Button>
                      </div>
                    </div>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Newsletter & Updates */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Subscribe to receive the latest news, clinical updates, and research findings directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                <Mail className="h-5 w-5 mr-2" />
                Subscribe to Updates
              </Button>
              <Button size="lg" variant="outline">
                <Rss className="h-5 w-5 mr-2" />
                RSS Feed
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Resources;