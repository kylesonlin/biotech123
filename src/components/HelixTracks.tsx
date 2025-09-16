import React, { useEffect, useRef } from "react";

type Props = {
  // rails (vh gap between A/B baselines)
  gapVh?: number;

  // centerline cubic (vh): y0 -> y1 with control offsets c1,c2
  y0?: number; y1?: number; c1?: number; c2?: number;

  // helix
  cycles?: number;          // e.g. 2.5 → 5 crossings
  phase?: number;           // radians – used exactly as passed
  ampMin?: number;          // vh
  ampMax?: number;          // vh

  // particles
  durationSec?: number;
  countPerTrack?: number;
  sizePx?: number;
  colorFront?: string;
  colorBack?: string;

  // hard off (no guides/paths)
  showGuides?: false;
  showIntersections?: false;
  showTracks?: false;
  debugMode?: false;

  className?: string;
};

const TAU = Math.PI * 2;

function cubicY(p: number, y0: number, y1: number, c1: number, c2: number) {
  const u = 1 - p;
  return (
    u*u*u * y0 +
    3*u*u*p * (y0 + c1) +
    3*u*p*p * (y1 + c2) +
    p*p*p * y1
  );
}

const makeSeed = (i: number) => (((i * 9301 + 49297) % 233280) / 233280);

const HelixTracks: React.FC<Props> = ({
  gapVh = 10,
  y0 = 82, y1 = 41, c1 = -10, c2 = 8,
  cycles = 2.5,
  phase = 4.5945616035,
  ampMin = 9, ampMax = 9,          // constant amplitude by default
  durationSec = 14,
  countPerTrack = 80,
  sizePx = 5,
  colorFront = "hsl(var(--accent))",
  colorBack  = "hsl(var(--accent) / 0.35)",
  className = "",
}) => {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // visible signature so you know this file is active
    console.log("[HelixTracks v1.0.0] props:", { gapVh, y0, y1, c1, c2, cycles, phase, ampMin, ampMax });

    const host = layerRef.current!;
    host.innerHTML = ""; // purge any old guide DOM from prior versions

    // build particle elements
    const total = countPerTrack * 2;
    const dots: HTMLDivElement[] = [];
    for (let i = 0; i < total; i++) {
      const d = document.createElement("div");
      d.className = "helix-dot";
      d.style.position = "absolute";
      d.style.left = "0";
      d.style.top = "0";
      d.style.width = `${sizePx}px`;
      d.style.height = `${sizePx}px`;
      d.style.borderRadius = "50%";
      d.style.willChange = "transform, opacity";
      d.dataset.seed = String(makeSeed(i));
      d.dataset.track = i < countPerTrack ? "A" : "B";
      host.appendChild(d);
      dots.push(d);
    }

    const A = ampMin === ampMax ? ampMin : (ampMin + ampMax) / 2; // deterministic
    const T = durationSec * 1000;
    let raf = 0;
    const t0 = performance.now();

    const loop = (now: number) => {
      const base = ((now - t0) % T) / T; // 0..1
      for (const d of dots) {
        const p = (base + Number(d.dataset.seed)) % 1;
        const xvw = p * 100;

        // centerline
        const yC = cubicY(p, y0, y1, c1, c2);

        // helix
        const theta = TAU * cycles * p + phase;

        // two rails hugging centerline
        const yA = yC - gapVh / 2 + A * Math.sin(theta);
        const yB = yC + gapVh / 2 - A * Math.sin(theta);
        const yvh = d.dataset.track === "A" ? yA : yB;

        // simple depth cue
        const depth = (Math.cos(theta) + 1) / 2; // 0..1
        const scale = 0.85 + 0.55 * depth;
        const alpha = 0.35 + 0.65 * depth;
        const color = depth >= 0.5 ? colorFront : colorBack;

        d.style.transform = `translate(${xvw}vw, ${yvh}vh) scale(${scale})`;
        d.style.opacity = String(alpha);
        d.style.background = color;
        d.style.zIndex = depth > 0.5 ? "2" : "1";
        d.style.pointerEvents = "none";
      }
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [
    gapVh, y0, y1, c1, c2,
    cycles, phase, ampMin, ampMax,
    durationSec, countPerTrack, sizePx,
    colorFront, colorBack
  ]);

  return <div ref={layerRef} className={`helix-layer pointer-events-none absolute inset-0 ${className}`} data-helix-version="1.0.0" />;
};

export default HelixTracks;