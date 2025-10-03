import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import anatomyDiagram1 from '@/assets/anatomy-diagram-1.png';
import anatomyDiagram2 from '@/assets/anatomy-diagram-2.png';
import anatomyDiagram3 from '@/assets/anatomy-diagram-3.png';

export const TreatmentsSection = () => {
  const treatments = [
    {
      title: 'PANCREATIC CANCER',
      phase: 'Phase 3 Ready',
      status: 'IND Approved',
      description: 'GOBLET trial evaluating pelareorep + chemotherapy in metastatic pancreatic adenocarcinoma.',
      image: anatomyDiagram1,
      color: 'text-pink-500',
    },
    {
      title: 'COLORECTAL CANCER',
      phase: 'Phase 2 Active',
      status: 'Enrolling',
      description: 'Investigating pelareorep in combination with standard therapies for advanced colorectal cancer.',
      image: anatomyDiagram2,
      color: 'text-blue-500',
    },
    {
      title: 'ANAL CANCER',
      phase: 'Phase 1/2',
      status: 'Enrolling',
      description: 'Early-stage trial exploring pelareorep in combination therapy for advanced anal cancer.',
      image: anatomyDiagram3,
      color: 'text-purple-500',
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our Treatments
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We've strategically selected three high-impact GI indications where pelareorep's 
              dual-action mechanism offers the greatest potential to transform patient outcomes.
            </p>
          </div>

          {/* Treatment Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {treatments.map((treatment) => (
              <Card 
                key={treatment.title} 
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/30 group"
              >
                {/* Anatomy Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center overflow-hidden">
                  <img 
                    src={treatment.image} 
                    alt={`${treatment.title} anatomy diagram`} 
                    className="h-40 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {treatment.phase}
                    </Badge>
                    <Badge variant="outline">
                      {treatment.status}
                    </Badge>
                  </div>

                  <h3 className={`font-serif text-2xl font-bold mb-3 ${treatment.color}`}>
                    {treatment.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {treatment.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 hover:bg-primary/5 font-semibold px-8 py-6 text-lg"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
