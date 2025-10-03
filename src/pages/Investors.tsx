import { Navigation } from '@/components/Navigation';
import { FooterSection } from '@/components/FooterSection';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, FileText, Download, Building, DollarSign, BarChart3, Users } from 'lucide-react';

const Investors = () => {
  const stockInfo = {
    symbol: "ONCY",
    exchange: "NASDAQ",
    price: "$2.45",
    change: "+$0.12 (+5.15%)",
    volume: "1.24M",
    marketCap: "$189.2M",
    lastUpdated: "Market Close"
  };

  const secFilings = [
    { type: "10-K", description: "Annual Report", date: "March 15, 2025", period: "Year Ended Dec 31, 2024" },
    { type: "10-Q", description: "Quarterly Report", date: "August 10, 2025", period: "Quarter Ended Jun 30, 2025" },
    { type: "8-K", description: "Current Report - GOBLET Update", date: "September 15, 2025", period: "Current Event" },
    { type: "DEF 14A", description: "Proxy Statement", date: "April 20, 2025", period: "2025 Annual Meeting" }
  ];

  const financialHighlights = [
    { metric: "$15.2M", label: "Cash Position", detail: "As of Q2 2025" },
    { metric: "18 mo", label: "Cash Runway", detail: "Estimated" },
    { metric: "$8.1M", label: "Quarterly Opex", detail: "Q2 2025" },
    { metric: "77.2M", label: "Shares Outstanding", detail: "Diluted" },
  ];

  const boardMembers = [
    { name: "Dr. Matt Coffey", title: "President, CEO & Director", committees: ["Management"] },
    { name: "Angela Verdecchia", title: "Board Chair", committees: ["Audit", "Compensation"] },
    { name: "Dr. Shawn Anderson", title: "Independent Director", committees: ["Compensation", "Nominating"] },
    { name: "Wayne Pisano", title: "Independent Director", committees: ["Audit", "Nominating"] }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Investor Relations</Badge>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
              Investment Opportunity
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Leading the next generation of GI cancer immunotherapy with a proven safety profile 
              and registration-enabling clinical program.
            </p>
          </div>
        </div>
      </section>

      {/* Stock Information */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12 text-center">
            Stock Information
          </h2>

          <Card className="p-8 mb-8 bg-gradient-to-br from-primary/5 to-background">
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-serif text-3xl font-bold text-foreground">{stockInfo.exchange}: {stockInfo.symbol}</h3>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Live</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{stockInfo.lastUpdated}</p>
              </div>
              <Button>
                <TrendingUp className="w-4 h-4 mr-2" />
                View Live Quote
              </Button>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Current Price</p>
                <p className="font-serif text-3xl font-bold text-foreground">{stockInfo.price}</p>
                <p className="text-sm text-green-600 font-semibold">{stockInfo.change}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Market Cap</p>
                <p className="font-serif text-2xl font-bold text-foreground">{stockInfo.marketCap}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Volume</p>
                <p className="font-serif text-2xl font-bold text-foreground">{stockInfo.volume}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Exchange</p>
                <p className="font-serif text-2xl font-bold text-foreground">{stockInfo.exchange}</p>
              </div>
            </div>
          </Card>

          {/* Financial Highlights */}
          <div className="grid md:grid-cols-4 gap-6">
            {financialHighlights.map((item) => (
              <Card key={item.label} className="p-6 hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-serif font-bold text-primary mb-2">{item.metric}</div>
                <div className="text-sm font-semibold text-foreground mb-1">{item.label}</div>
                <div className="text-xs text-muted-foreground">{item.detail}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEC Filings */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-4 text-center">
            SEC Filings
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Access our financial reports and regulatory documents
          </p>

          <div className="space-y-4">
            {secFilings.map((filing) => (
              <Card key={filing.type + filing.date} className="p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <Badge>{filing.type}</Badge>
                        <h3 className="font-serif text-lg font-bold text-foreground">{filing.description}</h3>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>Filed: {filing.date}</span>
                        <span>•</span>
                        <span>{filing.period}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg" className="border-2">
              View All SEC Filings
            </Button>
          </div>
        </div>
      </section>

      {/* Corporate Governance */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12 text-center">
            Corporate Governance
          </h2>

          <Tabs defaultValue="board" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="board">Board of Directors</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
            </TabsList>

            <TabsContent value="board">
              <div className="grid md:grid-cols-2 gap-6">
                {boardMembers.map((member) => (
                  <Card key={member.name} className="p-6 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-bold text-foreground mb-1">{member.name}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{member.title}</p>
                        <div className="flex flex-wrap gap-2">
                          {member.committees.map((committee) => (
                            <Badge key={committee} variant="secondary" className="text-xs">
                              {committee}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="documents">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <FileText className="w-6 h-6 text-primary" />
                    <h3 className="font-serif text-lg font-bold text-foreground">Articles of Incorporation</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">Governing corporate structure and bylaws</p>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </Card>

                <Card className="p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <FileText className="w-6 h-6 text-primary" />
                    <h3 className="font-serif text-lg font-bold text-foreground">Code of Conduct</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">Ethical standards and business practices</p>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </Card>

                <Card className="p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <FileText className="w-6 h-6 text-primary" />
                    <h3 className="font-serif text-lg font-bold text-foreground">Committee Charters</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">Audit, compensation, and nominating</p>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </Card>

                <Card className="p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <FileText className="w-6 h-6 text-primary" />
                    <h3 className="font-serif text-lg font-bold text-foreground">Insider Trading Policy</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">Securities compliance guidelines</p>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12 text-center">
            Investment Highlights
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all duration-300">
              <DollarSign className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">Market Opportunity</h3>
              <p className="text-muted-foreground leading-relaxed">
                $6B+ GI cancer market with high unmet medical need and limited competition
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300">
              <BarChart3 className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">Clinical Validation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Phase 3 GOBLET study with registration-enabling design in pancreatic cancer
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300">
              <Building className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">Strategic Value</h3>
              <p className="text-muted-foreground leading-relaxed">
                Proven MOA, exceptional safety, and potential for partnership or acquisition
              </p>
            </Card>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Investors;
