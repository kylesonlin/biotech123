import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { ProofPointsSection } from '@/components/ProofPointsSection';
import { MissionSection } from '@/components/MissionSection';
import { SimplifiedScienceSection } from '@/components/SimplifiedScienceSection';
import { SimplifiedPipelineSection } from '@/components/SimplifiedPipelineSection';
import { ManagementSection } from '@/components/ManagementSection';
import { FooterSection } from '@/components/FooterSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ProofPointsSection />
        <MissionSection />
        <SimplifiedScienceSection />
        <SimplifiedPipelineSection />
        <ManagementSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
