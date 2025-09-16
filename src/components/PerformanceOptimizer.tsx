import { Suspense, lazy } from 'react';
import { LoadingSpinner, PageLoading } from './LoadingStates';

// Code splitting for heavy components - using proper default exports
export const LazyAnimatedMOADiagram = lazy(() => 
  import('./AnimatedMOADiagram').then(module => ({ default: module.AnimatedMOADiagram }))
);
export const LazyDataVisualization = lazy(() => 
  import('./DataVisualization').then(module => ({ default: module.DataVisualization }))
);

// Performance optimized wrappers
export const OptimizedAnimatedMOA = () => (
  <Suspense fallback={<LoadingSpinner size="lg" />}>
    <LazyAnimatedMOADiagram />
  </Suspense>
);

export const OptimizedDataVisualization = () => (
  <Suspense fallback={<LoadingSpinner size="lg" />}>
    <LazyDataVisualization />
  </Suspense>
);

// Preload critical resources
export const preloadCriticalResources = () => {
  // Preload hero image
  const heroImg = new Image();
  heroImg.src = '/src/assets/hero-molecular.jpg';
  
  // Preload critical fonts (already in index.html but ensure loaded)
  if ('fonts' in document) {
    document.fonts.load('400 16px Roboto');
    document.fonts.load('700 24px "Roboto Condensed"');
  }
};

// Intersection observer for lazy loading
export const createLazyLoadObserver = (callback: (entries: IntersectionObserverEntry[]) => void) => {
  return new IntersectionObserver(callback, {
    root: null,
    rootMargin: '50px',
    threshold: 0.1
  });
};

// Performance monitoring
export const measurePerformance = (name: string, fn: () => void) => {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${name} took ${end - start} milliseconds`);
};