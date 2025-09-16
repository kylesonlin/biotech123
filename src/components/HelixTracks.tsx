import { useEffect, useRef } from 'react';

interface HelixTracksProps {
  y0?: number;           // start y position (vh)
  y1?: number;           // end y position (vh)
  gapVh?: number;        // distance between tracks (vh)
  amplitude?: number;    // sine wave amplitude (vh)
  cycles?: number;       // number of sine cycles (2.5 for 5 crossings)
  phase?: number;        // phase shift for alignment
  durationSec?: number;  // animation duration (seconds)
  countPerTrack?: number; // dots per track
  sizePx?: number;       // dot size (pixels)
  colorFront?: string;   // front color
  colorBack?: string;    // back color
  frequencyVariation?: number; // frequency modulation strength (0.1-0.3)
  stretchFactor?: number;      // horizontal stretching at crossings (1.2-2.0)
}

export const HelixTracks = ({
  y0 = 82,
  y1 = 41,
  gapVh = 10,
  amplitude = 9,
  cycles = 2.5,
  phase = 2.59,
  durationSec = 14,
  countPerTrack = 150,
  sizePx = 25,
  colorFront = '#00ffff',
  colorBack = '#ff00ff',
  frequencyVariation = 0.2,
  stretchFactor = 1.5
}: HelixTracksProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const dotsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create dots for both tracks
    const dots: HTMLDivElement[] = [];
    
    // Track A dots
    for (let i = 0; i < countPerTrack; i++) {
      const dot = document.createElement('div');
      dot.style.position = 'absolute';
      dot.style.width = `${sizePx}px`;
      dot.style.height = `${sizePx}px`;
      dot.style.borderRadius = '50%';
      dot.style.willChange = 'transform, opacity, background-color';
      dot.dataset.track = 'A';
      dot.dataset.seed = Math.random().toString();
      container.appendChild(dot);
      dots.push(dot);
    }

    // Track B dots
    for (let i = 0; i < countPerTrack; i++) {
      const dot = document.createElement('div');
      dot.style.position = 'absolute';
      dot.style.width = `${sizePx}px`;
      dot.style.height = `${sizePx}px`;
      dot.style.borderRadius = '50%';
      dot.style.willChange = 'transform, opacity, background-color';
      dot.dataset.track = 'B';
      dot.dataset.seed = Math.random().toString();
      container.appendChild(dot);
      dots.push(dot);
    }

    dotsRef.current = dots;

    // Linear centerline function
    const yCenter = (p: number): number => y0 * (1 - p) + y1 * p;

    // Animation loop
    const animate = (now: number) => {
      const t = ((now % (durationSec * 1000)) / (durationSec * 1000)); // 0..1

      dots.forEach(dot => {
        const track = dot.dataset.track!;
        const seed = parseFloat(dot.dataset.seed!);
        const p = (t + seed) % 1;
        
        // Position calculations with variable frequency modulation
        const x = p * window.innerWidth;
        
        // Variable frequency: stretch curves at crossings (when sin approaches 0)
        const baseCyclePos = cycles * p;
        const frequencyMod = 1 + frequencyVariation * Math.sin(2 * Math.PI * baseCyclePos * stretchFactor);
        const theta = 2 * Math.PI * baseCyclePos * frequencyMod + phase;
        
        const yC = yCenter(p);
        const sinValue = Math.sin(theta);
        
        const y = track === 'A' 
          ? yC - gapVh / 2 + amplitude * sinValue
          : yC + gapVh / 2 - amplitude * sinValue;

        // Depth effect - ENHANCED FOR VISIBILITY
        const depth = (Math.cos(theta) + 1) / 2;
        const scale = 1; // Removed scaling for consistent visibility
        const alpha = 0.8 + 0.2 * depth; // Much more opaque
        const color = depth >= 0.5 ? colorFront : colorBack;

        // Apply styles
        dot.style.transform = `translate(${x}px, ${y}vh) scale(${scale})`;
        dot.style.opacity = alpha.toString();
        dot.style.backgroundColor = color;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      dots.forEach(dot => dot.remove());
    };
  }, [y0, y1, gapVh, amplitude, cycles, phase, durationSec, countPerTrack, sizePx, colorFront, colorBack, frequencyVariation, stretchFactor]);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 10 }}
    />
  );
};