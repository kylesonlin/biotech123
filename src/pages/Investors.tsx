import { Navigation } from '@/components/Navigation';
import { FooterSection } from '@/components/FooterSection';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, FileText, ExternalLink, Download, Building, Users, Calendar, DollarSign, BarChart3, Target } from 'lucide-react';

const Investors = () => {
  // Current stock information
  const stockInfo = {
    symbol: "ONCY",
    exchange: "NASDAQ",
    price: "$2.45",
    change: "+$0.12 (+5.15%)",
    volume: "1,235,678",
    marketCap: "$189.2M",
    shares: "77.2M",
    dayRange: "$2.31 - $2.52",
    yearRange: "$1.89 - $3.78",
    lastUpdated: "Market Close"
  };

  // SEC filings data
  const secFilings = [
    {
      type: "10-K",
      description: "Annual Report",
      date: "March 15, 2025",
      period: "Year Ended December 31, 2024",
      size: "2.3 MB"
    },
    {
      type: "10-Q", 
      description: "Quarterly Report",
      date: "August 10, 2025",
      period: "Quarter Ended June 30, 2025",
      size: "1.8 MB"
    },
    {
      type: "8-K",
      description: "Current Report - GOBLET Study Update",
      date: "September 15, 2025",
      period: "Current Event",
      size: "0.9 MB"
    },
    {
      type: "DEF 14A",
      description: "Proxy Statement",
      date: "April 20, 2025",
      period: "2025 Annual Meeting",
      size: "1.2 MB"
    }
  ];

  // Board of Directors data
  const boardMembers = [
    {
      name: "Dr. Matt Coffey",
      title: "President, CEO & Director",
      background: "20+ years biotechnology leadership",
      committees: ["Management"]
    },
    {
      name: "Angela Verdecchia",
      title: "Independent Director & Board Chair",
      background: "Former CFO, biotech executive",
      committees: ["Audit", "Compensation"]
    },
    {
      name: "Dr. Shawn Anderson",
      title: "Independent Director",
      background: "Venture capital, biotech investments",
      committees: ["Compensation", "Nominating"]
    },
    {
      name: "Wayne Pisano",
      title: "Independent Director",
      background: "Former pharma executive, commercialization",
      committees: ["Audit", "Nominating"]
    }
  ];

  // Financial highlights
  const financialHighlights = [
    {
      metric: "$15.2M",
      description: "Cash and Cash Equivalents",
      detail: "As of Q2 2025",
      trend: "stable"
    },
    {
      metric: "18 months",
      description: "Estimated Cash Runway",
      detail: "Based on current burn rate",
      trend: "positive"
    },
    {
      metric: "$8.1M",
      description: "Quarterly Operating Expenses",
      detail: "Q2 2025",
      trend: "controlled"
    },
    {
      metric: "77.2M",
      description: "Shares Outstanding",
      detail: "Fully diluted basis",
      trend: "stable"
    }
  ];

  // Investment highlights
  const investmentThesis = [
    {
      title: "First-in-Class Asset", 
      description: "Only systemically delivered oncolytic virus in Phase 3 development",
      icon: Target
    },
    {
      title: "Registration-Enabling Study",
      description: "GOBLET Phase 3 study designed for regulatory approval",
      icon: FileText
    },
    {
      title: "Strong Safety Profile",
      description: "15+ years of clinical data across 1,200+ patients",
      icon: TrendingUp
    },
    {
      title: "Partnership Potential",
      description: "Multiple strategic partnership opportunities",
      icon: Building
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
              Investor Relations
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-slide-up">
              Transforming cancer treatment through innovative oncolytic virus therapy with 
              strong fundamentals and clear value creation catalysts.
            </p>
            
            {/* Current Stock Info */}
            <Card className="glass-effect p-6 max-w-2xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold gradient-text">{stockInfo.symbol}</div>
                  <div className="text-xs text-muted-foreground">{stockInfo.exchange}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">{stockInfo.price}</div>
                  <div className="text-xs text-green-600">{stockInfo.change}</div>
                </div>
                <div>
                  <div className="text-lg font-bold">{stockInfo.marketCap}</div>
                  <div className="text-xs text-muted-foreground">Market Cap</div>
                </div>
                <div>
                  <div className="text-lg font-bold">{stockInfo.volume}</div>
                  <div className="text-xs text-muted-foreground">Volume</div>
                </div>
              </div>
              <div className="text-center mt-4 text-xs text-muted-foreground">
                Last updated: {stockInfo.lastUpdated}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section id="highlights" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Investment Thesis</Badge>
              <h2 className="text-4xl font-bold mb-6">Compelling Value Proposition</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Unique positioning in the growing oncolytic virus market with differentiated technology, 
                proven safety, and clear regulatory pathway.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {investmentThesis.map((point, index) => (
                <Card key={index} className="glass-effect p-6 hover-lift text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <point.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold mb-2">{point.title}</h3>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
                </Card>
              ))}
            </div>

            {/* Financial Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {financialHighlights.map((item, index) => (
                <Card key={index} className="glass-effect p-6 text-center hover-lift">
                  <div className="text-2xl font-bold gradient-text mb-2">{item.metric}</div>
                  <div className="font-medium mb-2">{item.description}</div>
                  <div className="text-xs text-muted-foreground">{item.detail}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Financial Information Tabs */}
      <section id="financials" className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Financial Information</Badge>
              <h2 className="text-4xl font-bold mb-6">SEC Filings & Reports</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Access our complete financial disclosure including quarterly reports, 
                annual filings, and regulatory updates.
              </p>
            </div>

            <Tabs defaultValue="filings" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="filings">SEC Filings</TabsTrigger>
                <TabsTrigger value="presentations">Investor Presentations</TabsTrigger>
                <TabsTrigger value="events">Upcoming Events</TabsTrigger>
              </TabsList>
              
              <TabsContent value="filings" className="mt-8">
                <div className="grid grid-cols-1 gap-6">
                  {secFilings.map((filing, index) => (
                    <Card key={index} className="glass-effect p-6 hover-lift">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <Badge variant="outline" className="bg-primary/10">{filing.type}</Badge>
                            <span className="text-sm text-muted-foreground">{filing.date}</span>
                            <span className="text-xs text-muted-foreground">({filing.size})</span>
                          </div>
                          <h3 className="text-xl font-bold mb-2">{filing.description}</h3>
                          <p className="text-muted-foreground">{filing.period}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Button size="sm" className="bg-gradient-primary">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Filing
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Download PDF
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="presentations" className="mt-8">
                <div className="grid grid-cols-1 gap-6">
                  <Card className="glass-effect p-6 hover-lift">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge variant="outline" className="bg-secondary/10">Q2 2025</Badge>
                          <span className="text-sm text-muted-foreground">August 15, 2025</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Q2 2025 Earnings Call Presentation</h3>
                        <p className="text-muted-foreground">Financial results and operational updates</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button size="sm" className="bg-gradient-secondary">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Slides
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="glass-effect p-6 hover-lift">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge variant="outline" className="bg-accent/10">ASCO 2025</Badge>
                          <span className="text-sm text-muted-foreground">June 10, 2025</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Corporate Presentation - ASCO Annual Meeting</h3>
                        <p className="text-muted-foreground">Clinical update and business overview</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button size="sm" className="bg-gradient-accent">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Slides
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="events" className="mt-8">
                <div className="space-y-6">
                  <Card className="glass-effect p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <Calendar className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold mb-2">Q3 2025 Earnings Call</h3>
                        <p className="text-muted-foreground mb-2">November 15, 2025 at 4:30 PM ET</p>
                        <p className="text-sm text-muted-foreground">Quarterly financial results and business update</p>
                      </div>
                      <Button size="sm" variant="outline">Add to Calendar</Button>
                    </div>
                  </Card>
                  
                  <Card className="glass-effect p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
                        <Users className="h-6 w-6 text-secondary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold mb-2">Annual Shareholders Meeting</h3>
                        <p className="text-muted-foreground mb-2">May 15, 2026 at 2:00 PM MT</p>
                        <p className="text-sm text-muted-foreground">Virtual and in-person attendance available</p>
                      </div>
                      <Button size="sm" variant="outline">Register</Button>
                    </div>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Corporate Governance */}
      <section id="governance" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Corporate Governance</Badge>
              <h2 className="text-4xl font-bold mb-6">Board of Directors</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Our experienced board provides strategic oversight and governance leadership, 
                combining deep biotechnology expertise with public company experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {boardMembers.map((member, index) => (
                <Card key={index} className="glass-effect p-6 hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Users className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                      <p className="text-primary font-medium mb-2">{member.title}</p>
                      <p className="text-sm text-muted-foreground mb-4">{member.background}</p>
                      <div className="flex flex-wrap gap-2">
                        {member.committees.map((committee, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {committee}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investor Contact CTA */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Connect With Investor Relations</h2>
            <p className="text-xl text-muted-foreground mb-8">
              For questions about financial performance, corporate strategy, or investment opportunities, 
              our investor relations team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                <DollarSign className="h-5 w-5 mr-2" />
                Investor Inquiries
              </Button>
              <Button size="lg" variant="outline">
                <BarChart3 className="h-5 w-5 mr-2" />
                Request Information
              </Button>
            </div>
            
            <div className="mt-8 text-sm text-muted-foreground">
              <p>Kirk Look, Chief Financial Officer</p>
              <p>investors@oncolytics.ca | +1 (403) 670-7377</p>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Investors;