import React, { useEffect, useRef } from "react";

type HelixTracksProps = {
  /** Track A vertical start→end in vh (default 75→35) */
  startA?: number;
  endA?: number;
  /** Track B vertical start→end in vh (default 85→45) */
  startB?: number;
  endB?: number;

  /** Helix amplitude in vh (≥5vh to ensure crossings). Default 9 */
  ampVh?: number;

  /** Helix cycles across 0→1 (2.5 ⇒ exactly 5 intersections). Default 2.5 */
  cycles?: number;

  /** Phase offset in radians (nudge to line up with background art). Default 0 */
  phase?: number;

  /** Seconds per sweep across width. Default 12 */
  durationSec?: number;

  /** Particles per track. Default 64 (128 total) */
  countPerTrack?: number;

  /** Base dot size in px. Default 5 */
  sizePx?: number;

  /** Front/back colors (depth cue). Defaults tuned for Oncolytics palette */
  colorFront?: string;   // when cos(theta) >= 0
  colorBack?: string;    // when cos(theta) < 0 (fainter)

  /** Optional: render small markers at the 5 intersection points (for alignment) */
  showIntersections?: boolean;

  /** Optional className for the overlay layer */
  className?: string;
};

/**
 * Parametric dual-helix particle overlay.
 * Uses math, not keyframes. Guaranteed 5 intersections when cycles=2.5 and ampVh≥5.
 * Positions in vw/vh so it's easy to align to a full-viewport hero image.
 */
export const HelixTracks: React.FC<HelixTracksProps> = ({
  startA = 75, endA = 35,
  startB = 85, endB = 45,
  ampVh = 9,
  cycles = 2.5,
  phase = 0,
  durationSec = 12,
  countPerTrack = 64,
  sizePx = 5,
  colorFront = "hsl(var(--accent))",
  colorBack = "hsl(var(--accent) / 0.35)",
  showIntersections = false,
  className = "",
}) => {
  const layerRef = useRef<HTMLDivElement>(null);
  const marksRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    // Fresh mount
    layer.innerHTML = "";

    const total = countPerTrack * 2;
    const dots: HTMLDivElement[] = [];
    // Build particles
    for (let i = 0; i < total; i++) {
      const d = document.createElement("div");
      d.className = "helix-dot";
      d.style.width = `${sizePx}px`;
      d.style.height = `${sizePx}px`;
      // deterministic seed based on index so hydration is stable
      const seed = ((i * 9301 + 49297) % 233280) / 233280; // 0..1
      d.dataset.seed = seed.toString();
      d.dataset.track = i < countPerTrack ? "A" : "B";
      layer.appendChild(d);
      dots.push(d);
    }

    const TAU = Math.PI * 2;
    let startTime = performance.now();
    let rafId = 0;

    const loop = (now: number) => {
      const T = durationSec * 1000;
      const basePhase = ((now - startTime) % T) / T; // 0..1

      // precompute constants used per-frame
      const gapHalf = 5; // half the baseline gap (A & B are 10vh apart at any x) — from (75-40t) vs (85-40t)
      const amp = ampVh;

      for (const d of dots) {
        const track = d.dataset.track as "A" | "B";
        const seed = Number(d.dataset.seed); // 0..1 per particle
        const p = (basePhase + seed) % 1;    // 0..1 progress across width
        const xvw = p * 100;

        // Baselines
        const yA_base = startA + (endA - startA) * p;
        const yB_base = startB + (endB - startB) * p;

        // Helix angle
        const theta = TAU * cycles * p + phase;

        // Parametric y with opposite phase
        const yA = yA_base + amp * Math.sin(theta);
        const yB = yB_base - amp * Math.sin(theta);

        const yvh = track === "A" ? yA : yB;

        // Depth cues from cos(theta)
        const depth = (Math.cos(theta) + 1) / 2; // 0..1
        const scale = 0.8 + depth * 0.6;         // 0.8..1.4
        const alpha = 0.35 + depth * 0.65;       // 0.35..1
        const color = depth >= 0.5 ? colorFront : colorBack;

        d.style.transform = `translate(${xvw}vw, ${yvh}vh) scale(${scale})`;
        d.style.opacity = `${alpha}`;
        d.style.background = color;
        d.style.zIndex = depth > 0.5 ? "2" : "1";
      }

      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, [
    startA, endA, startB, endB,
    ampVh, cycles, phase,
    durationSec, countPerTrack, sizePx,
    colorFront, colorBack
  ]);

  // Optional: intersection markers (for alignment/debug)
  useEffect(() => {
    if (!showIntersections) {
      if (marksRef.current) {
        marksRef.current.remove();
        marksRef.current = null;
      }
      return;
    }

    const host = layerRef.current;
    if (!host) return;
    if (marksRef.current) marksRef.current.remove();
    const marksLayer = document.createElement("div");
    marksLayer.className = "helix-marks";
    host.appendChild(marksLayer);
    marksRef.current = marksLayer;

    const TAU = Math.PI * 2;
    const c = 5 / ampVh; // baseline gap (10vh) / (2A)
    if (Math.abs(c) <= 1) {
      const sols: number[] = [];
      // There are ~2K solutions for sin(TAU*K*t + phase) = c in [0,1]
      const K = cycles;
      const base = Math.asin(c) - phase;
      const nMax = Math.ceil(2 * K) + 2;
      for (let n = 0; n < nMax; n++) {
        const t1 = (base + 2 * Math.PI * n) / (TAU * K);
        const t2 = (Math.PI - base + 2 * Math.PI * n) / (TAU * K);
        if (t1 >= 0 && t1 <= 1) sols.push(t1);
        if (t2 >= 0 && t2 <= 1) sols.push(t2);
      }
      sols.sort((a, b) => a - b);
      // De-duplicate numerically close solutions
      const ts = sols.filter((t, i, arr) => i === 0 || Math.abs(t - arr[i - 1]) > 1e-4);

      ts.forEach((t) => {
        const xvw = t * 100;
        // Midpoint of A/B at intersection
        const yMid = ( (startA + (endA - startA) * t) + (startB + (endB - startB) * t) ) / 2;
        const dot = document.createElement("div");
        dot.className = "helix-mark";
        dot.style.transform = `translate(${xvw}vw, ${yMid}vh) translate(-50%,-50%)`;
        marksLayer.appendChild(dot);
      });
    }

    return () => {
      marksLayer.remove();
      marksRef.current = null;
    };
  }, [showIntersections, ampVh, cycles, phase, startA, endA, startB, endB]);

  return <div className={`helix-layer ${className}`} ref={layerRef} aria-hidden />;
};

export default HelixTracks;