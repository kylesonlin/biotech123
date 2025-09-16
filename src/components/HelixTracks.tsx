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

  // Amplitude envelope (vh): min/max and swell positioning
  ampMin?: number;       // base amplitude (vh)
  ampMax?: number;       // peak amplitude (vh)
  swellCenter?: number;  // 0..1, where the bulge peaks
  swellWidth?: number;   // 0..1, how wide the bulge spans
  
  // Optional notch to remove specific crossings
  notchAt?: number;      // 0..1, center of the notch that removes a crossing
  notchWidth?: number;   // 0..1, notch width
  notchDepth?: number;   // 0..1, how deep the notch cuts (1 = full cut)

  // Legacy amplitude (deprecated but kept for compatibility)
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

// Smooth tent-shaped bulge centered at pCenter with width w (0..1).
function tent(p: number, pCenter: number, w: number) {
  const left = pCenter - w/2, right = pCenter + w/2;
  if (p <= left || p >= right) return 0;
  const t = (p - left) / (right - left); // 0..1
  return 4 * t * (1 - t);                // 0..1 (peak=1 at center)
}

type AmpParams = {
  ampMin: number;       // base amplitude (vh)
  ampMax: number;       // peak amplitude (vh)
  swellCenter: number;  // 0..1, where the bulge peaks
  swellWidth: number;   // 0..1, how wide the bulge spans
  notchAt?: number;     // 0..1, center of the notch that removes a crossing
  notchWidth?: number;  // 0..1, notch width
  notchDepth?: number;  // 0..1, how deep the notch cuts (1 = full cut)
};

function amplitudeAt(p: number, cfg: AmpParams) {
  const { ampMin, ampMax, swellCenter, swellWidth, notchAt, notchWidth = 0.05, notchDepth = 0 } = cfg;
  const bulge = tent(p, swellCenter, swellWidth);                // 0..1
  let A = ampMin + (ampMax - ampMin) * bulge;                    // vh

  if (typeof notchAt === "number" && notchWidth > 0 && notchDepth > 0) {
    // Gaussian-ish notch centered at notchAt
    const d = (p - notchAt) / (notchWidth / 2);                  // ±2 → edge
    const cut = Math.exp(-0.5 * d * d) * notchDepth;            // 0..notchDepth
    A *= (1 - cut);                                             // reduce locally
  }
  return Math.max(0, A);
}

// Legacy bezier function for backward compatibility
function bezier01(p: number, a: number, b: number) {
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
  y0 = 80, y1 = 40,
  c1 = -6, c2 = 4,          // slight S-curve by default
  ampMin = 5.2, ampMax = 15,  // new defaults for better control
  swellCenter = 0.45, swellWidth = 0.60,  // swell positioning
  notchAt, notchWidth = 0.04, notchDepth = 0,  // notch (off by default)
  ampEase1 = 0.35, ampEase2 = 0.35, // legacy compatibility
  cycles = 2.5,
  phase = 0,
  durationSec = 14,
  countPerTrack = 72,
  sizePx = 5,
  colorFront = "hsl(var(--accent))",
  colorBack  = "hsl(var(--accent) / 0.35)",
  showGuides = false,
  showIntersections = false,
  className = "",
}) => {
  const layerRef = useRef<HTMLDivElement>(null);
  const guidesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const layer = layerRef.current!;
    layer.innerHTML = "";

    // Particles
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
      const base = ((now - t0) % T) / T;      // 0..1 sweep
      for (const d of dots) {
        const track = d.dataset.track as "A" | "B";
        const p = (base + Number(d.dataset.seed)) % 1;
        const xvw = p * 100;

        // centerline y at x=p
        const yC = cubicY(p, y0, y1, c1, c2);

        // amplitude envelope at x=p
        const A = amplitudeAt(p, {
          ampMin, ampMax,
          swellCenter, swellWidth,
          notchAt, notchWidth, notchDepth
        });

        // helix angle
        const theta = TAU * cycles * p + phase;

        // tracks hugging the centerline with constant gap +/- A*sin
        const yA = yC - gapVh/2 + A * Math.sin(theta);
        const yB = yC + gapVh/2 - A * Math.sin(theta);

        const yvh = track === "A" ? yA : yB;

        // depth cues
        const depth = (Math.cos(theta) + 1) / 2; // 0..1
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
  }, [
    gapVh, y0, y1, c1, c2,
    ampMin, ampMax, swellCenter, swellWidth,
    notchAt, notchWidth, notchDepth,
    cycles, phase,
    durationSec, countPerTrack, sizePx,
    colorFront, colorBack
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
        const A = amplitudeAt(p, {
          ampMin, ampMax,
          swellCenter, swellWidth,
          notchAt, notchWidth, notchDepth
        });
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
        const A = amplitudeAt(p, {
          ampMin, ampMax,
          swellCenter, swellWidth,
          notchAt, notchWidth, notchDepth
        });
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
      
      // Optional: log intersection positions
      if (uniq.length > 0) {
        console.table(
          uniq.map((t, i) => ({
            index: i + 1,
            p: +t.toFixed(6),
            x_pct: +(t*100).toFixed(3),
            time_s: +(t*durationSec).toFixed(3),
          }))
        );
      }
      
      uniq.forEach(t => {
        const xvw = t * 100;
        const yC = cubicY(t, y0, y1, c1, c2);
        addDot(xvw, yC, "guide-xing");
      });
    }

    return () => { g.remove(); guidesRef.current = null; };
  }, [showGuides, showIntersections, gapVh, y0, y1, c1, c2, ampMin, ampMax, swellCenter, swellWidth, notchAt, notchWidth, notchDepth, cycles, phase]);

  return <div className={`helix-layer ${className}`} ref={layerRef} aria-hidden />;
};

export default HelixTracks;