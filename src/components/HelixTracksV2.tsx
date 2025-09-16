import React, { useEffect, useRef } from "react";

type Props = {
  gapVh?: number;
  y0?: number; y1?: number; c1?: number; c2?: number;
  cycles?: number;
  phase?: number;
  ampMin?: number; ampMax?: number;
  durationSec?: number;
  countPerTrack?: number;
  sizePx?: number;
  colorFront?: string;
  colorBack?: string;
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

const seed = (i: number) => (((i * 9301 + 49297) % 233280) / 233280);

const HelixTracksV2: React.FC<Props> = ({
  gapVh = 10,
  y0 = 82, y1 = 41, c1 = -10, c2 = 8,
  cycles = 2.5,
  phase = 4.5945616035,     // anchors middle crossing ~54.5%
  ampMin = 9, ampMax = 9,   // constant amplitude => stable crossings
  durationSec = 14,
  countPerTrack = 80,
  sizePx = 5,
  colorFront = "hsl(var(--accent))",
  colorBack  = "hsl(var(--accent) / 0.35)",
  className = "",
}) => {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // hard-kill any legacy overlays still in DOM
    document.querySelectorAll(
      ".helix-guides, .helix-track, .guide-center, .guide-lane, svg[data-helix-guide]"
    ).forEach((el) => el.remove());

    const layer = layerRef.current!;
    layer.innerHTML = "";
    layer.setAttribute("data-helix-version", "2.0.0");
    console.log("[HelixTracksV2 2.0.0] props", { gapVh, y0, y1, c1, c2, cycles, phase, ampMin, ampMax });

    const total = countPerTrack * 2;
    const dots: HTMLDivElement[] = [];
    for (let i = 0; i < total; i++) {
      const d = document.createElement("div");
      d.style.position = "absolute";
      d.style.left = "0";
      d.style.top = "0";
      d.style.width = `${sizePx}px`;
      d.style.height = `${sizePx}px`;
      d.style.borderRadius = "9999px";
      d.style.willChange = "transform,opacity";
      d.style.pointerEvents = "none";
      d.dataset.seed = String(seed(i));
      d.dataset.track = i < countPerTrack ? "A" : "B";
      layer.appendChild(d);
      dots.push(d);
    }

    const A = ampMin === ampMax ? ampMin : (ampMin + ampMax) / 2;
    const T = durationSec * 1000;
    const t0 = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const base = ((now - t0) % T) / T; // 0..1
      for (const d of dots) {
        const p = (base + Number(d.dataset.seed)) % 1;
        const xvw = p * 100;

        const yC = cubicY(p, y0, y1, c1, c2);
        const theta = TAU * cycles * p + phase;

        const yA = yC - gapVh / 2 + A * Math.sin(theta);
        const yB = yC + gapVh / 2 - A * Math.sin(theta);
        const yvh = d.dataset.track === "A" ? yA : yB;

        const depth = (Math.cos(theta) + 1) / 2;
        const scale = 0.85 + 0.55 * depth;
        const alpha = 0.35 + 0.65 * depth;

        d.style.transform = `translate(${xvw}vw, ${yvh}vh) scale(${scale})`;
        d.style.opacity = String(alpha);
        d.style.background = depth >= 0.5 ? colorFront : colorBack;
        d.style.zIndex = depth >= 0.5 ? "2" : "1";
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [
    gapVh, y0, y1, c1, c2,
    cycles, phase, ampMin, ampMax,
    durationSec, countPerTrack, sizePx,
    colorFront, colorBack
  ]);

  return <div ref={layerRef} className={`pointer-events-none absolute inset-0 ${className}`} />;
};

export default HelixTracksV2;