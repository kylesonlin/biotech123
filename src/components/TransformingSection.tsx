import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import molecularBg from '@/assets/molecular-structure.png';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const TransformingSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={molecularBg} 
          alt="Molecular structure background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-8">
            Transforming GI Cancer Treatment
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            Our revolutionary approach combines the precision of oncolytic virotherapy 
            with the power of immune activation—targeting the most challenging 
            gastrointestinal cancers with unprecedented selectivity.
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg hover:scale-105 transition-transform"
          >
            Explore Our Science
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
