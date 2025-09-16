import { Navigation } from '@/components/Navigation';
import { FooterSection } from '@/components/FooterSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Building, 
  TrendingUp, 
  FileText, 
  Users,
  Clock,
  Globe,
  Send
} from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      title: "Business Development",
      description: "Strategic partnerships and licensing opportunities",
      icon: <Building className="w-6 h-6" />,
      email: "bd@oncolyticsbiotech.com",
      phone: "+1 (403) 828-7670",
      contact: "Kirk Look, Chief Business Officer"
    },
    {
      title: "Investor Relations", 
      description: "Financial information and investor inquiries",
      icon: <TrendingUp className="w-6 h-6" />,
      email: "ir@oncolyticsbiotech.com", 
      phone: "+1 (403) 828-7670",
      contact: "Andrew de Guttadauro, Chief Financial Officer"
    },
    {
      title: "Media & Communications",
      description: "Press inquiries and media relations",
      icon: <FileText className="w-6 h-6" />,
      email: "media@oncolyticsbiotech.com",
      phone: "+1 (403) 828-7670", 
      contact: "Communications Team"
    },
    {
      title: "General Inquiries",
      description: "All other questions and information requests",
      icon: <Users className="w-6 h-6" />,
      email: "info@oncolyticsbiotech.com",
      phone: "+1 (403) 828-7670",
      contact: "Corporate Office"
    }
  ];

  const officeInfo = {
    address: "210 - 1167 Kensington Crescent NW",
    city: "Calgary, Alberta T2N 1X7",
    country: "Canada",
    timezone: "Mountain Time (MT)",
    hours: "Monday - Friday, 8:00 AM - 5:00 PM MT"
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 text-primary border-primary">
                Contact Us
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Let's Connect
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Ready to explore partnership opportunities or learn more about our 
                <strong> ds-RNA oncolytic virus platform</strong>? Our team is here to help.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <Card className="text-center border-border/50 shadow-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-accent mb-2">24h</div>
                  <div className="text-sm text-muted-foreground">Response Time</div>
                </CardContent>
              </Card>
              
              <Card className="text-center border-border/50 shadow-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-accent mb-2">Global</div>
                  <div className="text-sm text-muted-foreground">Partnerships</div>
                </CardContent>
              </Card>
              
              <Card className="text-center border-border/50 shadow-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Building className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-accent mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
              
              <Card className="text-center border-border/50 shadow-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-accent mb-2">Expert</div>
                  <div className="text-sm text-muted-foreground">Leadership</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Choose the best way to reach our team based on your specific needs and interests.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {contactMethods.map((method, index) => (
                <Card key={index} className="border-border/50 shadow-card group hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <div className="text-white">
                          {method.icon}
                        </div>
                      </div>
                      <div>
                        <CardTitle className="text-lg">{method.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-muted-foreground" />
                        <a href={`mailto:${method.email}`} className="text-primary hover:underline">
                          {method.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{method.phone}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-medium">{method.contact}</span>
                      </div>
                    </div>
                    <Button className="w-full mt-4 bg-gradient-primary hover:opacity-90">
                      <Send className="w-4 h-4 mr-2" />
                      Contact {method.title.split(' ')[0]}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <Card className="border-border/50 shadow-elegant">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Tell us about your interests and we'll connect you with the right team member.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">First Name</label>
                      <Input placeholder="Enter your first name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Last Name</label>
                      <Input placeholder="Enter your last name" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input type="email" placeholder="your.email@company.com" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Company</label>
                      <Input placeholder="Your company name" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Interest Area</label>
                    <select className="w-full p-3 border border-border rounded-lg bg-background">
                      <option>Business Development & Partnerships</option>
                      <option>Investment Opportunities</option>
                      <option>Media & Press Inquiries</option>
                      <option>Scientific Collaboration</option>
                      <option>General Information</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea 
                      placeholder="Tell us about your interest in Oncolytics Biotech and how we can help..."
                      rows={5}
                    />
                  </div>
                  
                  <Button className="w-full bg-gradient-primary hover:opacity-90">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Office Information */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Corporate Headquarters</h2>
                <p className="text-lg text-muted-foreground">
                  Visit us at our Calgary office or connect with us remotely.
                </p>
              </div>
              
              <Card className="border-border/50 shadow-card">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold mb-6">Office Details</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-primary mt-1" />
                          <div>
                            <p className="font-medium">Address</p>
                            <p className="text-sm text-muted-foreground">
                              {officeInfo.address}<br />
                              {officeInfo.city}<br />
                              {officeInfo.country}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <Clock className="w-5 h-5 text-primary mt-1" />
                          <div>
                            <p className="font-medium">Business Hours</p>
                            <p className="text-sm text-muted-foreground">{officeInfo.hours}</p>
                            <p className="text-sm text-muted-foreground">Timezone: {officeInfo.timezone}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-6">Quick Links</h3>
                      <div className="space-y-3">
                        <Button variant="outline" className="w-full justify-start">
                          <TrendingUp className="w-4 h-4 mr-2" />
                          Investor Relations Portal
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <FileText className="w-4 h-4 mr-2" />
                          Media & Press Resources
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Building className="w-4 h-4 mr-2" />
                          Partnership Opportunities
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Users className="w-4 h-4 mr-2" />
                          Leadership Team
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default Contact;