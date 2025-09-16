import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { MissionSection } from '@/components/MissionSection';
import { ScienceSection } from '@/components/ScienceSection';
import { PipelineSection } from '@/components/PipelineSection';
import { ManagementSection } from '@/components/ManagementSection';
import { FooterSection } from '@/components/FooterSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <MissionSection />
        <ScienceSection />
        <PipelineSection />
        <ManagementSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
