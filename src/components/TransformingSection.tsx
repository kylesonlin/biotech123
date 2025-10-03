import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import molecularBg from '@/assets/molecular-structure.png';

export const TransformingSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
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
        <div className="max-w-4xl mx-auto text-center">
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
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg"
          >
            Explore Our Science
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
