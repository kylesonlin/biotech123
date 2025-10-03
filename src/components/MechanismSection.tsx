import { Card } from '@/components/ui/card';
import { Target, Copy, Skull, Activity } from 'lucide-react';

export const MechanismSection = () => {
  const steps = [
    {
      number: '01',
      icon: Target,
      title: 'TARGET',
      subtitle: '90% Selectivity',
      description: 'Pelareorep selectively targets RAS-mutant tumor cells while sparing healthy tissue.',
    },
    {
      number: '02',
      icon: Copy,
      title: 'REPLICATE',
      subtitle: 'Tumor-Specific',
      description: 'The virus replicates exclusively within cancer cells, amplifying its therapeutic effect.',
    },
    {
      number: '03',
      icon: Skull,
      title: 'DESTROY',
      subtitle: 'Direct Lysis',
      description: 'Viral replication causes tumor cell death through direct oncolytic action.',
    },
    {
      number: '04',
      icon: Activity,
      title: 'ACTIVATE',
      subtitle: 'Long-Term Immune Effects',
      description: 'Tumor antigens released trigger a systemic immune response against cancer cells.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
              Pelareorep: Targeting and Immunity
            </h2>
            <div className="grid md:grid-cols-2 gap-12 text-lg text-muted-foreground">
              <div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">SELECTIVE TARGETING</h3>
                <p className="leading-relaxed">
                  Pelareorep exploits the RAS signaling pathway—active in 90% of pancreatic cancers and many colorectal tumors—to achieve unparalleled tumor selectivity.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">IMMUNE CASCADE</h3>
                <p className="leading-relaxed">
                  Beyond direct tumor destruction, pelareorep transforms "cold" tumors into "hot" targets by releasing tumor antigens and danger signals that activate the immune system.
                </p>
              </div>
            </div>
          </div>

          {/* Mechanism Steps */}
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <Card 
                key={step.number} 
                className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 relative overflow-hidden group"
              >
                {/* Step Number Background */}
                <div className="absolute top-4 right-4 text-6xl font-serif font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="relative z-10 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h4 className="font-serif text-xl font-bold text-foreground mb-1">
                    {step.title}
                  </h4>
                  <p className="text-sm font-semibold text-primary mb-3">
                    {step.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line (except last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30 transform -translate-y-1/2 z-20"></div>
                )}
              </Card>
            ))}
          </div>

          {/* Central Visual Element (Placeholder for glowing sphere) */}
          <div className="mt-16 flex justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 bg-gradient-radial from-accent/20 via-primary/10 to-transparent rounded-full animate-pulse-glow"></div>
              <div className="absolute inset-8 bg-gradient-radial from-accent/30 via-primary/20 to-transparent rounded-full"></div>
              <div className="absolute inset-16 bg-gradient-radial from-accent/40 via-primary/30 to-transparent rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
