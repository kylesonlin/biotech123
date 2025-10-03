import { Navigation } from '@/components/Navigation';
import { FooterSection } from '@/components/FooterSection';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, BookOpen, Download, Calendar, Award, Mail, Phone, MapPin } from 'lucide-react';

const Resources = () => {
  const pressReleases = [
    {
      date: "March 15, 2024",
      title: "Positive Interim Analysis from GOBLET Phase 3 Study",
      category: "Clinical Update"
    },
    {
      date: "February 8, 2024",
      title: "FDA Grants Fast Track Designation for Pelareorep in GI Cancers",
      category: "Regulatory"
    },
    {
      date: "January 22, 2024",
      title: "Strategic Partnership with Leading Medical Center",
      category: "Partnership"
    }
  ];

  const publications = [
    {
      title: "Pelareorep with Pembrolizumab and Chemotherapy in Pancreatic Adenocarcinoma",
      journal: "Nature Cancer",
      date: "March 2024",
      type: "Phase 2 Results"
    },
    {
      title: "Oncolytic Virus Therapy: Mechanisms and Clinical Applications",
      journal: "Journal of Clinical Oncology",
      date: "February 2024",
      type: "Review"
    },
    {
      title: "Safety Profile of Systemically Delivered Oncolytic Viruses",
      journal: "Cancer Research",
      date: "January 2024",
      type: "Safety Analysis"
    }
  ];

  const presentations = [
    {
      title: "Phase 3 GOBLET Study: Pelareorep in Advanced GI Cancers",
      conference: "ASCO Annual Meeting 2024",
      date: "June 2024",
      type: "Oral Presentation"
    },
    {
      title: "Mechanism of Action: Selective Replication and Immune Activation",
      conference: "AACR Annual Meeting 2024",
      date: "April 2024",
      type: "Poster"
    },
    {
      title: "Long-term Safety Data from 15+ Years of Clinical Experience",
      conference: "Society for Immunotherapy of Cancer",
      date: "November 2023",
      type: "Featured Poster"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Resources</Badge>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
              Media & Publications
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Stay informed with the latest news, research publications, and conference presentations
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="press" className="w-full">
            <TabsList className="grid w-full max-w-xl mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="press">Press Releases</TabsTrigger>
              <TabsTrigger value="publications">Publications</TabsTrigger>
              <TabsTrigger value="presentations">Presentations</TabsTrigger>
            </TabsList>

            {/* Press Releases */}
            <TabsContent value="press" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Press Releases</h2>
                <p className="text-muted-foreground">Latest company announcements and updates</p>
              </div>

              {pressReleases.map((release) => (
                <Card key={release.date} className="p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="secondary">{release.category}</Badge>
                        <span className="text-sm text-muted-foreground">{release.date}</span>
                      </div>
                      <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                        {release.title}
                      </h3>
                      <Button variant="outline" size="sm">
                        Read Full Release
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}

              <div className="text-center mt-8">
                <Button size="lg" variant="outline" className="border-2">
                  View All Press Releases
                </Button>
              </div>
            </TabsContent>

            {/* Publications */}
            <TabsContent value="publications" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Scientific Publications</h2>
                <p className="text-muted-foreground">Peer-reviewed research and clinical data</p>
              </div>

              {publications.map((pub) => (
                <Card key={pub.title} className="p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <Badge variant="secondary" className="mb-2">{pub.type}</Badge>
                      <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                        {pub.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="font-semibold text-primary">{pub.journal}</span>
                        <span>•</span>
                        <span>{pub.date}</span>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}

              <div className="text-center mt-8">
                <Button size="lg" variant="outline" className="border-2">
                  View All Publications
                </Button>
              </div>
            </TabsContent>

            {/* Presentations */}
            <TabsContent value="presentations" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Conference Presentations</h2>
                <p className="text-muted-foreground">Posters and presentations from major conferences</p>
              </div>

              {presentations.map((pres) => (
                <Card key={pres.title} className="p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="secondary">{pres.type}</Badge>
                        <span className="text-sm text-muted-foreground">{pres.date}</span>
                      </div>
                      <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                        {pres.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        <Calendar className="w-4 h-4 inline mr-1" />
                        {pres.conference}
                      </p>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download Poster
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}

              <div className="text-center mt-8">
                <Button size="lg" variant="outline" className="border-2">
                  View All Presentations
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              Media Inquiries
            </h2>
            <p className="text-lg text-muted-foreground">
              Contact our communications team for media requests and interviews
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-bold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground">media@oncolytics.ca</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-bold text-foreground mb-2">Phone</h3>
              <p className="text-muted-foreground">+1 (403) 670-7377</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-bold text-foreground mb-2">Location</h3>
              <p className="text-muted-foreground">Calgary, Alberta</p>
            </Card>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Resources;
