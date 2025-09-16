import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Building, TrendingUp, Award, Users } from 'lucide-react';

export const ManagementSection = () => {
  const executives = [
    {
      name: "CEO & President",
      role: "Chief Executive Officer",
      highlight: "Led Ambrx sale to J&J for $2B",
      experience: "Proven dealmaker with extensive biotech M&A experience",
      icon: <Building className="w-6 h-6" />
    },
    {
      name: "CBO",
      role: "Chief Business Officer", 
      highlight: "Key architect of Ambrx transaction",
      experience: "Strategic partnerships and business development expertise",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      name: "CMO",
      role: "Chief Medical Officer",
      highlight: "Experienced virologist",
      experience: "Extensive drug development and regulatory background",
      icon: <Award className="w-6 h-6" />
    },
    {
      name: "CFO",
      role: "Chief Financial Officer",
      highlight: "Hundreds of millions raised",
      experience: "Capital markets expertise with dilution-limiting strategy",
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <section id="management" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Leadership Team
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Proven Dealmakers & Scientists
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our leadership team combines <strong>proven transaction experience</strong> with deep scientific 
            expertise, positioned to maximize value creation and partnership opportunities.
          </p>
        </div>

        {/* Key Leadership Highlight */}
        <div className="mb-16">
          <Card className="border-border/50 shadow-elegant bg-gradient-subtle">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-2xl mb-6 shadow-glow">
                <Building className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Leadership That Delivers Results</h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
                CEO and CBO were instrumental in the <strong className="text-accent">$2 billion sale of Ambrx to Johnson & Johnson</strong>, 
                demonstrating their ability to execute high-value strategic transactions.
              </p>
              <div className="flex flex-wrap justify-center gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">$2B</div>
                  <div className="text-sm text-muted-foreground">Ambrx Transaction Value</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">$100M+</div>
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

        {/* Executive Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {executives.map((exec, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 border-border/50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {exec.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-1">{exec.name}</h3>
                <p className="text-sm text-secondary mb-3">{exec.role}</p>
                <Badge variant="secondary" className="mb-3 text-xs">
                  {exec.highlight}
                </Badge>
                <p className="text-xs text-muted-foreground">
                  {exec.experience}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Strategic Positioning */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-border/50 shadow-card">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4 text-secondary">Deal Execution Experience</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Proven track record in biotech M&A and partnerships</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Deep relationships with large pharma and strategic investors</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Experience maximizing value in complex transactions</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Strategic positioning for optimal partnership opportunities</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border/50 shadow-card">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4 text-secondary">Capital Strategy</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Commitment to limiting shareholder dilution</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Opportunistic capital raising strategy</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Focus on value-creating milestones</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Partnership-driven development model</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Simple Team Summary */}
        <div className="text-center">
          <Card className="inline-block border-border/50 shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Execute</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                Proven leadership team with track record of value creation and strategic partnerships
              </p>
              <Button className="bg-gradient-primary hover:opacity-90">
                Meet the Team
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};