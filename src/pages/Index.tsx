import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { TransformingSection } from '@/components/TransformingSection';
import { WhyDifferentSection } from '@/components/WhyDifferentSection';
import { MechanismSection } from '@/components/MechanismSection';
import { TreatmentsSection } from '@/components/TreatmentsSection';
import { TeamSection } from '@/components/TeamSection';
import { FooterSection } from '@/components/FooterSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <TransformingSection />
        <WhyDifferentSection />
        <MechanismSection />
        <TreatmentsSection />
        <TeamSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
