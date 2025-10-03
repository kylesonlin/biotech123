import { Navigation } from '@/components/Navigation';
import { FooterSection } from '@/components/FooterSection';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Target, Lightbulb, Users, Globe, Shield, Award } from 'lucide-react';

const About = () => {
  const executiveTeam = [
    { name: "Thomas Heineman, M.D.", title: "Chief Executive Officer", initials: "TH" },
    { name: "Kirk Look", title: "Chief Financial Officer", initials: "KL" },
    { name: "George Gill, M.D.", title: "Chief Medical Officer", initials: "GG" },
    { name: "Andrew de Guttadauro", title: "Chief Business Officer", initials: "AG" },
    { name: "Mary Ann Nawrocki", title: "VP Clinical Operations", initials: "MN" },
    { name: "Stephanie Richardson", title: "VP Product Development", initials: "SR" },
  ];

  const scientificAdvisors = [
    { name: "Dr. John Bell", affiliation: "Ottawa Hospital Research Institute", expertise: "Oncolytic Viruses" },
    { name: "Dr. Dirk Schadendorf", affiliation: "University Hospital Essen", expertise: "Melanoma & Immunotherapy" },
    { name: "Dr. Yuman Fong", affiliation: "City of Hope Medical Center", expertise: "Surgical Oncology" },
    { name: "Dr. Howard Kaufman", affiliation: "Mass General Hospital", expertise: "Cancer Immunotherapy" },
  ];

  const values = [
    {
      icon: Target,
      title: "Strategic Focus",
      description: "Concentrated on GI cancers where our platform can deliver maximum patient impact and value creation."
    },
    {
      icon: Lightbulb,
      title: "Scientific Innovation",
      description: "Pioneering the dual-action approach combining direct tumor lysis with immune system activation."
    },
    {
      icon: Shield,
      title: "Patient Safety First",
      description: "15 years of clinical experience with exceptional safety profile across 1,200+ patients."
    },
    {
      icon: Globe,
      title: "Global Collaboration",
      description: "Partnering with leading institutions and researchers worldwide to advance cancer treatment."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">About Oncolytics</Badge>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
              Pioneering Cancer Innovation
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Building the leading GI tumor immunotherapy platform through breakthrough science, 
              visionary leadership, and unwavering commitment to patient outcomes.
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-serif font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Years Clinical Experience</div>
            </Card>
            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-serif font-bold text-primary mb-2">1,200+</div>
              <div className="text-sm text-muted-foreground">Patients Treated</div>
            </Card>
            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-serif font-bold text-primary mb-2">40+</div>
              <div className="text-sm text-muted-foreground">Clinical Studies</div>
            </Card>
            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-serif font-bold text-primary mb-2">3</div>
              <div className="text-sm text-muted-foreground">GI Indications</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To revolutionize cancer treatment by harnessing the power of oncolytic virotherapy, 
                delivering therapies that combine direct tumor destruction with immune system activation 
                to provide meaningful, lasting benefits to patients with gastrointestinal cancers.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are committed to advancing pelareorep as a cornerstone therapy in GI oncology, 
                backed by rigorous science, exceptional safety data, and strategic clinical development.
              </p>
            </div>
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-2">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Why GI Cancers?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <p className="text-muted-foreground">Pancreatic cancer has a 5-year survival rate of only 10%</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <p className="text-muted-foreground">High RAS mutation rates (&gt;90% in pancreatic cancer)</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <p className="text-muted-foreground">Limited treatment options and urgent unmet medical need</p>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our mission to transform cancer treatment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/30">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Executive Leadership
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Seasoned leaders with proven track records in biotechnology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {executiveTeam.map((member) => (
              <Card key={member.name} className="p-8 hover:shadow-xl transition-all duration-300 text-center group">
                <div className="flex justify-center mb-6">
                  <Avatar className="w-24 h-24 border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                    <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground text-xl font-serif font-bold">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {member.title}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Scientific Advisory Board */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Scientific Advisory Board
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              World-renowned experts guiding our scientific strategy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {scientificAdvisors.map((advisor) => (
              <Card key={advisor.name} className="p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-foreground mb-1">
                      {advisor.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">{advisor.affiliation}</p>
                    <Badge variant="secondary" className="text-xs">{advisor.expertise}</Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default About;
