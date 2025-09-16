import { useState, useEffect } from 'react';
import { FloatingActionButton } from './InteractiveElements';
import { ChevronUp } from 'lucide-react';

export const FloatingScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <FloatingActionButton
      onClick={scrollToTop}
      className="animate-fade-in"
      position="bottom-right"
    >
      <ChevronUp className="w-6 h-6" />
    </FloatingActionButton>
  );
};