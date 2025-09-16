import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { ProofPointsSection } from '@/components/ProofPointsSection';
import { MissionSection } from '@/components/MissionSection';
import { SimplifiedScienceSection } from '@/components/SimplifiedScienceSection';
import { SimplifiedPipelineSection } from '@/components/SimplifiedPipelineSection';
import { ManagementSection } from '@/components/ManagementSection';
import { FooterSection } from '@/components/FooterSection';
import { SEOHead } from '@/components/SEOHead';
import { ScrollAnimation } from '@/components/ScrollAnimations';
import { FloatingScrollToTop } from '@/components/FloatingScrollToTop';
import { usePageAnalytics, useBiotechAnalytics } from '@/hooks/usePageAnalytics';

const Index = () => {
  usePageAnalytics();
  const { trackScienceEngagement, trackInvestorAction } = useBiotechAnalytics();

  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "Oncolytics Biotech Inc.",
    "url": "https://www.oncolyticsbiotech.com",
    "logo": "https://lovable.dev/opengraph-image-p98pqg.png",
    "description": "Clinical-stage biotechnology company developing pelareorep, a first-in-class ds-RNA oncolytic virus for treating gastrointestinal cancers.",
    "foundingDate": "1998",
    "industry": "Biotechnology",
    "tickerSymbol": "NASDAQ:ONCY",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "210 - 1167 Kensington Crescent NW",
      "addressLocality": "Calgary",
      "addressRegion": "Alberta",
      "postalCode": "T2N 1X7",
      "addressCountry": "Canada"
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Oncolytics Biotech - Revolutionary ds-RNA Immunotherapy Platform | NASDAQ: ONCY"
        description="Oncolytics Biotech develops pelareorep, a breakthrough double-stranded RNA oncolytic virus immunotherapy for gastrointestinal cancers. Proven safety in 1,200+ patients with registration-enabling studies planned for 2025-2026."
        structuredData={organizationStructuredData}
      />
      <Navigation />
      <main>
        <HeroSection />
        <ScrollAnimation animation="fade-in">
          <ProofPointsSection />
        </ScrollAnimation>
        <ScrollAnimation animation="slide-up" delay={200}>
          <MissionSection />
        </ScrollAnimation>
        <ScrollAnimation animation="fade-in" delay={300}>
          <SimplifiedScienceSection />
        </ScrollAnimation>
        <ScrollAnimation animation="slide-up" delay={400}>
          <SimplifiedPipelineSection />
        </ScrollAnimation>
        <ScrollAnimation animation="scale-in" delay={500}>
          <ManagementSection />
        </ScrollAnimation>
      </main>
      <FooterSection />
      <FloatingScrollToTop />
    </div>
  );
};

export default Index;
