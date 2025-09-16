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
}

export const HelixTracks = ({
  y0 = 85,
  y1 = 35,
  gapVh = 8,
  amplitude = 10,
  cycles = 2,
  phase = 4.8,
  durationSec = 14,
  countPerTrack = 80,
  sizePx = 5,
  colorFront = 'hsl(var(--accent))',
  colorBack = 'hsl(var(--accent) / 0.35)'
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
      dot.dataset.seed = (i / countPerTrack).toString();
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
      dot.dataset.seed = ((i + countPerTrack * 0.5) / countPerTrack).toString();
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
        
        // Position calculations
        const x = p * window.innerWidth;
        const theta = 2 * Math.PI * cycles * p + phase;
        const yC = yCenter(p);
        const sinValue = Math.sin(theta);
        
        const y = track === 'A' 
          ? yC - gapVh / 2 + amplitude * sinValue
          : yC + gapVh / 2 - amplitude * sinValue;

        // Depth effect
        const depth = (Math.cos(theta) + 1) / 2;
        const scale = 0.85 + 0.55 * depth;
        const depthAlpha = 0.35 + 0.65 * depth;
        const color = depth >= 0.5 ? colorFront : colorBack;

        // Edge fade effect for seamless looping
        const fadeDistance = 0.1; // 10% of screen width for fade
        let edgeFade = 1;
        if (p < fadeDistance) {
          edgeFade = p / fadeDistance; // Fade in from left
        } else if (p > 1 - fadeDistance) {
          edgeFade = (1 - p) / fadeDistance; // Fade out to right
        }

        const finalAlpha = depthAlpha * edgeFade;

        // Apply styles
        dot.style.transform = `translate(${x}px, ${y}vh) scale(${scale})`;
        dot.style.opacity = finalAlpha.toString();
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
  }, [y0, y1, gapVh, amplitude, cycles, phase, durationSec, countPerTrack, sizePx, colorFront, colorBack]);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 10 }}
    />
  );
};