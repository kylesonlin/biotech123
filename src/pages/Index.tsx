import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutHeroSection } from '@/components/AboutHeroSection';
import { ScienceHeroSection } from '@/components/ScienceHeroSection';
import { PipelineHeroSection } from '@/components/PipelineHeroSection';
import { LeadershipHeroSection } from '@/components/LeadershipHeroSection';
import { FooterSection } from '@/components/FooterSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutHeroSection />
        <ScienceHeroSection />
        <PipelineHeroSection />
        <LeadershipHeroSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
