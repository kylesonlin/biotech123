import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutHeroSection } from '@/components/AboutHeroSection';
import { SciencePipelineSection } from '@/components/SciencePipelineSection';
import { FooterSection } from '@/components/FooterSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutHeroSection />
        <SciencePipelineSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
