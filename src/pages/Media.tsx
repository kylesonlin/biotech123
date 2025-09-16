import { Navigation } from '@/components/Navigation';
import { FooterSection } from '@/components/FooterSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Calendar, ExternalLink, Download, Users, Award } from 'lucide-react';

const Media = () => {
  const pressReleases = [
    {
      date: "September 15, 2025",
      title: "Oncolytics Reports Interim Data from GOBLET Study in Partnership with Roche",
      summary: "Positive interim results demonstrate pelareorep's efficacy in GI cancers",
      category: "Clinical Data"
    },
    {
      date: "August 8, 2025",
      title: "FDA Grants Fast Track Designation for Pelareorep in 1L mPDAC",
      summary: "Regulatory milestone supports accelerated development pathway",
      category: "Regulatory"
    },
    {
      date: "July 12, 2025", 
      title: "Oncolytics Announces Strategic Partnership Expansion with Roche",
      summary: "Extended collaboration includes additional GI indications",
      category: "Partnership"
    },
    {
      date: "June 20, 2025",
      title: "Q2 2025 Financial Results and Corporate Update",
      summary: "Strong financial position supports clinical advancement",
      category: "Financial"
    }
  ];

  const publications = [
    {
      title: "Pelareorep in Combination with Standard of Care in Squamous Cell Anal Carcinoma",
      journal: "Journal of Clinical Oncology",
      date: "2025",
      authors: "Jonker D, et al.",
      impact: "High Impact"
    },
    {
      title: "Double-Stranded RNA Oncolytic Viruses in Gastrointestinal Cancers",
      journal: "Nature Reviews Cancer",
      date: "2024", 
      authors: "Lenz H-J, et al.",
      impact: "High Impact"
    },
    {
      title: "RAS Pathway Targeting with Pelareorep: A Phase 2 Study in mCRC",
      journal: "Clinical Cancer Research",
      date: "2024",
      authors: "Laheru D, et al.",
      impact: "High Impact"
    },
    {
      title: "Safety and Efficacy of IV Oncolytic Therapy in Pancreatic Cancer",
      journal: "Molecular Therapy - Oncolytics",
      date: "2023",
      authors: "Nemunaitis J, et al.",
      impact: "Medium Impact"
    }
  ];

  const presentations = [
    {
      title: "GOBLET Study: Pelareorep + SOC in Advanced GI Cancers",
      conference: "ASCO Annual Meeting 2025",
      date: "June 2025",
      location: "Chicago, IL",
      type: "Oral Presentation"
    },
    {
      title: "ds-RNA Oncolytic Virus Mechanism in RAS-Mutated Tumors",
      conference: "ESMO Congress 2024",
      date: "September 2024", 
      location: "Barcelona, Spain",
      type: "Poster"
    },
    {
      title: "Clinical Experience with Pelareorep in 1,100+ Patients",
      conference: "AACR Annual Meeting 2024",
      date: "April 2024",
      location: "San Diego, CA",
      type: "Oral Presentation"
    },
    {
      title: "Biomarker Analysis from Phase 2 Studies in GI Cancers",
      conference: "SITC Annual Meeting 2023",
      date: "November 2023",
      location: "San Antonio, TX", 
      type: "Poster"
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
                Media Center
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Latest News & Publications
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Stay informed about our latest clinical developments, regulatory milestones, 
                scientific publications, and conference presentations.
              </p>
            </div>

            {/* Media Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <Card className="text-center border-border/50 shadow-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-accent mb-2">12</div>
                  <div className="text-sm text-muted-foreground">Press Releases (2025)</div>
                </CardContent>
              </Card>
              
              <Card className="text-center border-border/50 shadow-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-accent mb-2">25</div>
                  <div className="text-sm text-muted-foreground">Scientific Publications</div>
                </CardContent>
              </Card>
              
              <Card className="text-center border-border/50 shadow-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-accent mb-2">18</div>
                  <div className="text-sm text-muted-foreground">Conference Presentations</div>
                </CardContent>
              </Card>
              
              <Card className="text-center border-border/50 shadow-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-accent mb-2">7-8</div>
                  <div className="text-sm text-muted-foreground">Years Coverage</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Media Content Tabs */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <Tabs defaultValue="press-releases" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-12">
                <TabsTrigger value="press-releases">Press Releases</TabsTrigger>
                <TabsTrigger value="publications">Publications</TabsTrigger>
                <TabsTrigger value="presentations">Posters & Presentations</TabsTrigger>
              </TabsList>

              <TabsContent value="press-releases">
                <div className="space-y-6">
                  {pressReleases.map((release, index) => (
                    <Card key={index} className="border-border/50 shadow-card hover:shadow-elegant transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="secondary" className="text-xs">
                                {release.category}
                              </Badge>
                              <span className="text-sm text-muted-foreground">{release.date}</span>
                            </div>
                            <CardTitle className="text-lg mb-2">{release.title}</CardTitle>
                            <p className="text-muted-foreground text-sm">{release.summary}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Read More
                            </Button>
                            <Button variant="outline" size="sm">
                              <Download className="w-4 h-4 mr-2" />
                              PDF
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="publications">
                <div className="space-y-6">
                  {publications.map((pub, index) => (
                    <Card key={index} className="border-border/50 shadow-card hover:shadow-elegant transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant={pub.impact === 'High Impact' ? 'default' : 'secondary'} className="text-xs">
                                {pub.impact}
                              </Badge>
                              <span className="text-sm text-muted-foreground">{pub.date}</span>
                            </div>
                            <CardTitle className="text-lg mb-2">{pub.title}</CardTitle>
                            <p className="text-sm text-secondary font-medium mb-1">{pub.journal}</p>
                            <p className="text-sm text-muted-foreground">{pub.authors}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              View Article
                            </Button>
                            <Button variant="outline" size="sm">
                              <Download className="w-4 h-4 mr-2" />
                              PDF
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="presentations">
                <div className="space-y-6">
                  {presentations.map((pres, index) => (
                    <Card key={index} className="border-border/50 shadow-card hover:shadow-elegant transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant={pres.type === 'Oral Presentation' ? 'default' : 'secondary'} className="text-xs">
                                {pres.type}
                              </Badge>
                              <span className="text-sm text-muted-foreground">{pres.date}</span>
                            </div>
                            <CardTitle className="text-lg mb-2">{pres.title}</CardTitle>
                            <p className="text-sm text-secondary font-medium mb-1">{pres.conference}</p>
                            <p className="text-sm text-muted-foreground">{pres.location}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              View Slides
                            </Button>
                            <Button variant="outline" size="sm">
                              <Download className="w-4 h-4 mr-2" />
                              Download
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-6 text-center">
            <Card className="max-w-2xl mx-auto border-border/50 shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
                <p className="text-muted-foreground mb-6">
                  Subscribe to receive the latest news, clinical updates, and publication announcements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gradient-primary hover:opacity-90">
                    Subscribe to Updates
                    <FileText className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">
                    RSS Feed
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

export default Media;