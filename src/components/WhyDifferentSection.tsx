import { Card } from '@/components/ui/card';
import { Zap, Shield, Target } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const WhyDifferentSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  
  const pillars = [
    {
      icon: Zap,
      title: 'DUAL ACTION',
      description: 'Pelareorep delivers a one-two punch: direct tumor cell lysis combined with robust immune system activation for sustained anti-tumor response.',
    },
    {
      icon: Shield,
      title: 'PROVEN SAFETY',
      description: 'Over 15 years of clinical experience with 1,200+ patients treated. No maximum tolerated dose (MTD) identified—demonstrating exceptional safety profile.',
    },
    {
      icon: Target,
      title: 'STRATEGIC FOCUS',
      description: 'Concentrated expertise in gastrointestinal cancers—where the unmet medical need is highest and our platform shows the greatest potential impact.',
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className={`font-serif text-5xl md:text-6xl font-bold text-center text-foreground mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Why We're Different
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <Card key={pillar.title} className={`p-8 hover:shadow-lg hover:-translate-y-2 transition-all duration-500 border-2 hover:border-primary/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: `${index * 150}ms` }}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <pillar.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
