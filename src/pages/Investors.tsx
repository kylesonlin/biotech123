import { Navigation } from '@/components/Navigation';
import { FooterSection } from '@/components/FooterSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, FileText, ExternalLink, Download, Building, Users, Calendar } from 'lucide-react';

const Investors = () => {
  const stockInfo = {
    symbol: "ONCY",
    exchange: "NASDAQ",
    price: "$2.45",
    change: "+$0.12 (+5.15%)",
    volume: "1,235,678",
    marketCap: "$189.2M",
    shares: "77.2M",
    dayRange: "$2.31 - $2.52",
    yearRange: "$1.89 - $3.78"
  };

  const secFilings = [
    {
      type: "10-K",
      description: "Annual Report",
      date: "March 15, 2025",
      period: "Year Ended December 31, 2024"
    },
    {
      type: "10-Q", 
      description: "Quarterly Report",
      date: "August 10, 2025",
      period: "Quarter Ended June 30, 2025"
    },
    {
      type: "8-K",
      description: "Current Report - GOBLET Study Results",
      date: "September 15, 2025",
      period: "Current"
    },
    {
      type: "DEF 14A",
      description: "Proxy Statement",
      date: "April 20, 2025",
      period: "2025 Annual Meeting"
    }
  ];

  const boardMembers = [
    {
      name: "Dr. Wayne Pisano",
      title: "Chairman & CEO",
      tenure: "2018 - Present",
      background: "Former President & CEO, Sorrento Therapeutics"
    },
    {
      name: "Dr. Angela Holtom",
      title: "President & COO", 
      tenure: "2020 - Present",
      background: "Former VP Clinical Development, Merck"
    },
    {
      name: "John Bell",
      title: "Independent Director",
      tenure: "2016 - Present", 
      background: "Former CFO, Oncology Venture"
    },
    {
      name: "Dr. Sarah Mitchell",
      title: "Independent Director",
      tenure: "2019 - Present",
      background: "Former CMO, Bristol Myers Squibb"
    }
  ];

  const governance = [
    {
      title: "Articles of Incorporation",
      description: "Corporate charter and fundamental governance structure",
      updated: "Last amended: March 2024"
    },
    {
      title: "Bylaws",
      description: "Corporate operating procedures and governance rules",
      updated: "Last amended: January 2025"
    },
    {
      title: "Code of Ethics",
      description: "Ethical standards and business conduct policies",
      updated: "Reviewed annually"
    },
    {
      title: "Audit Committee Charter",
      description: "Audit committee responsibilities and procedures",
      updated: "Last reviewed: December 2024"
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
                Investor Relations
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Investment Information
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Comprehensive investor resources including stock information, SEC filings, 
                corporate governance, and financial reports for Oncolytics Biotech Inc. (NASDAQ: ONCY).
              </p>
            </div>

            {/* Quick Stock Info */}
            <Card className="max-w-4xl mx-auto border-border/50 shadow-elegant mb-12">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">ONCY Stock Information</CardTitle>
                <p className="text-muted-foreground">Real-time market data</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-accent mb-1">{stockInfo.price}</div>
                    <div className="text-sm text-green-600 font-medium">{stockInfo.change}</div>
                    <div className="text-xs text-muted-foreground">Current Price</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent mb-1">{stockInfo.marketCap}</div>
                    <div className="text-xs text-muted-foreground">Market Cap</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent mb-1">{stockInfo.volume}</div>
                    <div className="text-xs text-muted-foreground">Daily Volume</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent mb-1">{stockInfo.shares}</div>
                    <div className="text-xs text-muted-foreground">Shares Outstanding</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Investor Content Tabs */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <Tabs defaultValue="stock-info" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-12">
                <TabsTrigger value="stock-info">Stock Information</TabsTrigger>
                <TabsTrigger value="sec-filings">SEC Filings</TabsTrigger>
                <TabsTrigger value="governance">Corporate Governance</TabsTrigger>
              </TabsList>

              <TabsContent value="stock-info">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="border-border/50 shadow-card">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <TrendingUp className="w-6 h-6 mr-2 text-secondary" />
                        Trading Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 bg-muted/50 rounded-lg">
                          <div className="text-sm text-muted-foreground">Symbol</div>
                          <div className="font-bold">{stockInfo.symbol}</div>
                        </div>
                        <div className="p-3 bg-muted/50 rounded-lg">
                          <div className="text-sm text-muted-foreground">Exchange</div>
                          <div className="font-bold">{stockInfo.exchange}</div>
                        </div>
                        <div className="p-3 bg-muted/50 rounded-lg">
                          <div className="text-sm text-muted-foreground">Day Range</div>
                          <div className="font-bold text-sm">{stockInfo.dayRange}</div>
                        </div>
                        <div className="p-3 bg-muted/50 rounded-lg">
                          <div className="text-sm text-muted-foreground">52-Week Range</div>
                          <div className="font-bold text-sm">{stockInfo.yearRange}</div>
                        </div>
                      </div>
                      <div className="pt-4">
                        <Button className="w-full bg-gradient-primary hover:opacity-90">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View on NASDAQ
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border/50 shadow-card">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Calendar className="w-6 h-6 mr-2 text-secondary" />
                        Upcoming Events
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="p-3 border border-border/50 rounded-lg">
                          <div className="font-medium text-sm">Q3 2025 Earnings Call</div>
                          <div className="text-xs text-muted-foreground">November 8, 2025 at 4:30 PM ET</div>
                        </div>
                        <div className="p-3 border border-border/50 rounded-lg">
                          <div className="font-medium text-sm">ASCO GI Symposium</div>
                          <div className="text-xs text-muted-foreground">January 2026 - San Francisco</div>
                        </div>
                        <div className="p-3 border border-border/50 rounded-lg">
                          <div className="font-medium text-sm">Annual Shareholder Meeting</div>
                          <div className="text-xs text-muted-foreground">May 2026 - Date TBD</div>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full">
                        <Calendar className="w-4 h-4 mr-2" />
                        View Full Calendar
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="sec-filings">
                <div className="space-y-6">
                  {secFilings.map((filing, index) => (
                    <Card key={index} className="border-border/50 shadow-card hover:shadow-elegant transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="secondary" className="text-xs font-mono">
                                {filing.type}
                              </Badge>
                              <span className="text-sm text-muted-foreground">{filing.date}</span>
                            </div>
                            <CardTitle className="text-lg mb-2">{filing.description}</CardTitle>
                            <p className="text-sm text-muted-foreground">{filing.period}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              View on SEC
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

              <TabsContent value="governance">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <Card className="border-border/50 shadow-card">
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Users className="w-6 h-6 mr-2 text-secondary" />
                          Board of Directors
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {boardMembers.map((member, index) => (
                          <div key={index} className="p-3 border border-border/50 rounded-lg">
                            <div className="font-medium text-sm mb-1">{member.name}</div>
                            <div className="text-xs text-secondary mb-1">{member.title}</div>
                            <div className="text-xs text-muted-foreground mb-1">{member.tenure}</div>
                            <div className="text-xs text-muted-foreground">{member.background}</div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </div>

                  <div className="space-y-6">
                    <Card className="border-border/50 shadow-card">
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Building className="w-6 h-6 mr-2 text-secondary" />
                          Governance Documents
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {governance.map((doc, index) => (
                          <div key={index} className="p-3 border border-border/50 rounded-lg">
                            <div className="flex justify-between items-start mb-2">
                              <div className="font-medium text-sm">{doc.title}</div>
                              <Button variant="outline" size="sm" className="h-6 px-2 text-xs">
                                <Download className="w-3 h-3 mr-1" />
                                PDF
                              </Button>
                            </div>
                            <div className="text-xs text-muted-foreground mb-1">{doc.description}</div>
                            <div className="text-xs text-secondary">{doc.updated}</div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>

                    <Card className="border-border/50 shadow-card">
                      <CardHeader>
                        <CardTitle>Committees</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="text-sm">
                          <div className="font-medium mb-1">Audit Committee</div>
                          <div className="text-xs text-muted-foreground">Financial oversight and compliance</div>
                        </div>
                        <div className="text-sm">
                          <div className="font-medium mb-1">Compensation Committee</div>
                          <div className="text-xs text-muted-foreground">Executive compensation and benefits</div>
                        </div>
                        <div className="text-sm">
                          <div className="font-medium mb-1">Nominating & Governance Committee</div>
                          <div className="text-xs text-muted-foreground">Board composition and governance</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Contact IR */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-6 text-center">
            <Card className="max-w-2xl mx-auto border-border/50 shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Investor Relations Contact</h3>
                <p className="text-muted-foreground mb-6">
                  For questions about our business, financial performance, or investment opportunities.
                </p>
                <div className="space-y-2 mb-6 text-sm">
                  <p><strong>Email:</strong> ir@oncolyticsbiotech.com</p>
                  <p><strong>Phone:</strong> +1 (403) 828-7670</p>
                </div>
                <Button className="bg-gradient-primary hover:opacity-90">
                  Contact Investor Relations
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default Investors;