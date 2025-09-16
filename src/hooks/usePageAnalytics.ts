import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Analytics tracking hook
export const usePageAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views
    if (typeof window !== 'undefined') {
      // Google Analytics 4 (replace with your tracking ID)
      if (window.gtag) {
        window.gtag('config', 'GA_MEASUREMENT_ID', {
          page_path: location.pathname + location.search,
        });
      }

      // Custom analytics tracking
      trackPageView(location.pathname);
    }
  }, [location]);

  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if (window.gtag) {
        window.gtag('event', eventName, parameters);
      }

      // Custom tracking
      console.log('Analytics Event:', eventName, parameters);
    }
  };

  const trackPageView = (path: string) => {
    // Custom page view tracking logic
    console.log('Page View:', path);
  };

  return { trackEvent };
};

// Specific biotech industry tracking
export const useBiotechAnalytics = () => {
  const { trackEvent } = usePageAnalytics();

  const trackScienceEngagement = (section: string, timeSpent?: number) => {
    trackEvent('science_section_engagement', {
      section,
      time_spent: timeSpent,
      category: 'science_content'
    });
  };

  const trackPipelineInteraction = (indication: string, action: string) => {
    trackEvent('pipeline_interaction', {
      indication,
      action,
      category: 'clinical_development'
    });
  };

  const trackInvestorAction = (action: 'contact' | 'download' | 'view_financials') => {
    trackEvent('investor_action', {
      action,
      category: 'investor_relations'
    });
  };

  const trackPartnershipInquiry = (type: 'business_development' | 'scientific_collaboration') => {
    trackEvent('partnership_inquiry', {
      inquiry_type: type,
      category: 'business_development'
    });
  };

  return {
    trackScienceEngagement,
    trackPipelineInteraction, 
    trackInvestorAction,
    trackPartnershipInquiry
  };
};

// Declare global gtag function
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}