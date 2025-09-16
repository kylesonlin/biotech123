import React, { useEffect, useRef } from "react";

type HelixTracksProps = {
  // Baseline "rails" gap (track A vs B). 10vh matches 75→35 vs 85→45.
  gapVh?: number;

  // Centerline endpoints (midpoint between the two rails).
  // Defaults: (0 → 80vh) to (1 → 40vh)
  y0?: number; // vh at x=0
  y1?: number; // vh at x=1

  // Curvature of centerline: cubic Bézier offsets in vh.
  // y(p) = cubic(y0, y0+c1, y1+c2, y1)
  c1?: number; // control-1 vertical offset (vh) near start
  c2?: number; // control-2 vertical offset (vh) near end

  // Amplitude envelope (vh): min/max and ease shape.
  ampMin?: number;   // must be >= gap/2 to guarantee crossings
  ampMax?: number;   // larger in the middle to "pop forward"
  ampEase1?: number; // cubic-bezier (0..1)
  ampEase2?: number; // cubic-bezier (0..1)

  // Helix
  cycles?: number;   // 2.5 => 5 intersections
  phase?: number;    // radians
  durationSec?: number;

  // Particles
  countPerTrack?: number;
  sizePx?: number;
  colorFront?: string;
  colorBack?: string;

  // Debug helpers
  showGuides?: boolean;         // draw centerline + envelope lanes
  showIntersections?: boolean;  // draw 5 markers
  debugMode?: boolean;          // enable debug view
  showTracks?: boolean;         // show continuous track lines instead of particles
  className?: string;
};

const TAU = Math.PI * 2;

// cubic Bézier (y only) with parameter p in [0,1]
function cubicY(p: number, y0: number, y1: number, c1: number, c2: number) {
  const u = 1 - p;
  return (
    u*u*u * y0 +
    3*u*u*p * (y0 + c1) +
    3*u*p*p * (y1 + c2) +
    p*p*p * y1
  );
}

// simple cubic-bezier easing (0,0)->(1,1) returning y for given x=p
// control points (ax,ay)=(ampEase1,0), (bx,by)=(1-ampEase2,1)
function bezier01(p: number, a: number, b: number) {
  // invert x via 3 iterations of Newton-Raphson (good enough)
  const ax = a, ay = 0;
  const bx = 1 - b, by = 1;
  const cx1 = 3 * ax;
  const cx2 = 3 * (bx - ax) - cx1;
  const cx3 = 1 - cx1 - cx2;
  const cy1 = 3 * ay;
  const cy2 = 3 * (by - ay) - cy1;
  const cy3 = 1 - cy1 - cy2;

  let t = p;
  for (let i = 0; i < 3; i++) {
    const x = ((cx3 * t + cx2) * t + cx1) * t;
    const dx = (3 * cx3 * t + 2 * cx2) * t + cx1;
    if (dx !== 0) t -= (x - p) / dx;
    t = Math.min(1, Math.max(0, t));
  }
  const y = ((cy3 * t + cy2) * t + cy1) * t;
  return y;
}

const makeSeed = (i: number) => (((i * 9301 + 49297) % 233280) / 233280);

export const HelixTracks: React.FC<HelixTracksProps> = ({
  gapVh = 10,
  y0 = 82, y1 = 41,
  c1 = -10, c2 = 8,         // precise S-curve for DNA alignment
  ampMin = 9, ampMax = 9,   // constant amplitude for uniform helix
  ampEase1 = 0.35, ampEase2 = 0.35, // bulge near the middle
  cycles = 2.5,
  phase = 4.5945616035,     // precise phase for crossing alignment
  durationSec = 14,
  countPerTrack = 72,
  sizePx = 5,
  colorFront = "hsl(var(--accent))",
  colorBack  = "hsl(var(--accent) / 0.35)",
  showGuides = false,
  showIntersections = false,
  debugMode = false,
  showTracks = false,
  className = "",
}) => {
  const layerRef = useRef<HTMLDivElement>(null);
  const guidesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const layer = layerRef.current!;
    layer.innerHTML = "";

    if (debugMode && showTracks) {
      // Create continuous track lines for debug view
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.style.position = "absolute";
      svg.style.top = "0";
      svg.style.left = "0";
      svg.style.width = "100vw";
      svg.style.height = "100vh";
      svg.style.pointerEvents = "none";
      svg.style.zIndex = "10";
      
      // Set viewBox to match viewport
      svg.setAttribute("viewBox", "0 0 100 100");
      svg.setAttribute("preserveAspectRatio", "none");

      // Track A path (red)
      const trackAPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
      const trackBPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
      
      let pathAData = "";
      let pathBData = "";
      
      // Generate continuous paths
      for (let i = 0; i <= 200; i++) {
        const p = i / 200;
        const x = p * 100; // 0-100 viewBox units
        
        // centerline y at x=p
        const yC = cubicY(p, y0, y1, c1, c2);
        
        // amplitude envelope at x=p
        const env = bezier01(p, ampEase1, ampEase2);
        const A = ampMin + (ampMax - ampMin) * env;
        
        // helix angle
        const theta = TAU * cycles * p + phase;
        
        // tracks hugging the centerline with constant gap +/- A*sin
        const yA = yC - gapVh/2 + A * Math.sin(theta);
        const yB = yC + gapVh/2 - A * Math.sin(theta);
        
        const cmd = i === 0 ? "M" : "L";
        pathAData += `${cmd} ${x} ${yA} `;
        pathBData += `${cmd} ${x} ${yB} `;
      }
      
      trackAPath.setAttribute("d", pathAData);
      trackAPath.setAttribute("stroke", "#ff4444");
      trackAPath.setAttribute("stroke-width", "0.5");
      trackAPath.setAttribute("fill", "none");
      trackAPath.setAttribute("opacity", "0.9");
      trackAPath.setAttribute("vector-effect", "non-scaling-stroke");
      
      trackBPath.setAttribute("d", pathBData);
      trackBPath.setAttribute("stroke", "#4444ff");
      trackBPath.setAttribute("stroke-width", "0.5");
      trackBPath.setAttribute("fill", "none");
      trackBPath.setAttribute("opacity", "0.9");
      trackBPath.setAttribute("vector-effect", "non-scaling-stroke");
      
      svg.appendChild(trackAPath);
      svg.appendChild(trackBPath);
      layer.appendChild(svg);
      
      return () => {};
    } else {
      // Regular particle animation
      const total = countPerTrack * 2;
      const dots: HTMLDivElement[] = [];
      for (let i = 0; i < total; i++) {
        const d = document.createElement("div");
        d.className = "helix-dot";
        d.style.width = `${sizePx}px`;
        d.style.height = `${sizePx}px`;
        d.dataset.seed = String(makeSeed(i));
        d.dataset.track = i < countPerTrack ? "A" : "B";
        layer.appendChild(d);
        dots.push(d);
      }

      const T = durationSec * 1000;
      let t0 = performance.now();
      let raf = 0;

      const loop = (now: number) => {
        const base = ((now - t0) % T) / T;
        for (const d of dots) {
          const track = d.dataset.track as "A" | "B";
          const p = (base + Number(d.dataset.seed)) % 1;
          const xvw = p * 100;

          const yC = cubicY(p, y0, y1, c1, c2);
          const env = bezier01(p, ampEase1, ampEase2);
          const A = ampMin + (ampMax - ampMin) * env;
          const theta = TAU * cycles * p + phase;
          const yA = yC - gapVh/2 + A * Math.sin(theta);
          const yB = yC + gapVh/2 - A * Math.sin(theta);
          const yvh = track === "A" ? yA : yB;

          const depth = (Math.cos(theta) + 1) / 2;
          const scale = 0.8 + 0.6 * depth;
          const alpha = 0.35 + 0.65 * depth;
          const color = depth >= 0.5 ? colorFront : colorBack;

          d.style.transform = `translate(${xvw}vw, ${yvh}vh) scale(${scale})`;
          d.style.opacity = String(alpha);
          d.style.background = color;
          d.style.zIndex = depth > 0.5 ? "2" : "1";
        }
        raf = requestAnimationFrame(loop);
      };

      raf = requestAnimationFrame(loop);
      return () => cancelAnimationFrame(raf);
    }
  }, [
    gapVh, y0, y1, c1, c2,
    ampMin, ampMax, ampEase1, ampEase2,
    cycles, phase,
    durationSec, countPerTrack, sizePx,
    colorFront, colorBack, debugMode, showTracks
  ]);

  // Optional guides: centerline + envelope lanes + intersection markers
  useEffect(() => {
    const host = layerRef.current!;
    if (!showGuides && !showIntersections) {
      if (guidesRef.current) { guidesRef.current.remove(); guidesRef.current = null; }
      return;
    }
    if (guidesRef.current) guidesRef.current.remove();
    const g = document.createElement("div");
    g.className = "helix-guides";
    host.appendChild(g);
    guidesRef.current = g;

    const addDot = (xvw: number, yvh: number, cls: string) => {
      const d = document.createElement("div");
      d.className = cls;
      d.style.transform = `translate(${xvw}vw, ${yvh}vh) translate(-50%,-50%)`;
      g.appendChild(d);
    };

    // centerline + envelope lanes
    if (showGuides) {
      for (let i = 0; i <= 100; i++) {
        const p = i/100;
        const xvw = p * 100;
        const yC = cubicY(p, y0, y1, c1, c2);
        const env = bezier01(p, ampEase1, ampEase2);
        const A = ampMin + (ampMax - ampMin)*env;
        addDot(xvw, yC, "guide-center");
        addDot(xvw, yC - gapVh/2 + A, "guide-lane");
        addDot(xvw, yC + gapVh/2 - A, "guide-lane");
      }
    }

    // exact intersections when sin(...) = gap/(2A(p))
    if (showIntersections) {
      const c = gapVh / 2;
      const ts: number[] = [];
      for (let i = 0; i <= 500; i++) { // numeric search, fine for setup
        const p = i/500;
        const env = bezier01(p, ampEase1, ampEase2);
        const A = ampMin + (ampMax - ampMin)*env;
        const s = c / A; if (s > 1) continue;
        // solve theta = asin(s) - phase + 2πn  OR  π - asin(s) - phase + 2πn
        const asinS = Math.asin(s);
        const K = cycles;
        const roots = [
          (asinS - phase) / (TAU*K),
          (Math.PI - asinS - phase) / (TAU*K),
        ];
        roots.forEach(t => { if (t >= 0 && t <= 1) ts.push(t); });
      }
      ts.sort((a,b)=>a-b);
      // de-dupe
      const uniq = ts.filter((t,i,a)=> i===0 || Math.abs(t-a[i-1])>1e-3).slice(0,5);
      uniq.forEach(t => {
        const xvw = t * 100;
        const yC = cubicY(t, y0, y1, c1, c2);
        addDot(xvw, yC, "guide-xing");
      });
    }

    return () => { g.remove(); guidesRef.current = null; };
  }, [showGuides, showIntersections, gapVh, y0, y1, c1, c2, ampMin, ampMax, ampEase1, ampEase2, cycles, phase]);

  return <div className={`helix-layer ${className}`} ref={layerRef} aria-hidden />;
};

export default HelixTracks;