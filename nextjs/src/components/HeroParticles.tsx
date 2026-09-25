"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  alphaDir: number;
}

// Fewer particles on mobile — less O(n²) connecting-line work
const PARTICLE_COUNT_DESKTOP = 38;
const PARTICLE_COUNT_MOBILE  = 16;
const MAX_CONNECT_DISTANCE    = 120; // only used on desktop
const MOBILE_BREAKPOINT       = 768;

/**
 * HeroParticles – floating particle field on a canvas behind the Hero.
 * Particles drift slowly; on desktop they also connect with faint lines
 * when nearby. On mobile the count is halved and lines are skipped to
 * keep GPU load low.
 */
export default function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId: number;
    let particles: Particle[] = [];

    const isMobile = () => window.innerWidth < MOBILE_BREAKPOINT;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      // Re-seed particles on resize so they fill the new dimensions
      const count = isMobile() ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP;
      particles = [];
      for (let i = 0; i < count; i++) particles.push(makeParticle());
    };

    const makeParticle = (): Particle => ({
      x:        Math.random() * canvas.width,
      y:        Math.random() * canvas.height,
      vx:       (Math.random() - 0.5) * 0.35,
      vy:       (Math.random() - 0.5) * 0.35,
      radius:   Math.random() * 1.5 + 0.5,
      alpha:    Math.random(),
      alphaDir: Math.random() > 0.5 ? 1 : -1,
    });

    resize();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mobile = isMobile();

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges
        if (p.x < 0)              p.x = canvas.width;
        if (p.x > canvas.width)   p.x = 0;
        if (p.y < 0)              p.y = canvas.height;
        if (p.y > canvas.height)  p.y = 0;

        // Pulse alpha
        p.alpha += p.alphaDir * 0.004;
        if (p.alpha >= 1)   { p.alpha = 1;   p.alphaDir = -1; }
        if (p.alpha <= 0.1) { p.alpha = 0.1; p.alphaDir =  1; }

        // Dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 180, 216, ${p.alpha * 0.7})`;
        ctx.fill();

        // Connecting lines — desktop only (O(n²), skip on mobile)
        if (!mobile) {
          for (let j = i + 1; j < particles.length; j++) {
            const q = particles[j];
            const dx = p.x - q.x;
            const dy = p.y - q.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < MAX_CONNECT_DISTANCE) {
              const lineAlpha = (1 - dist / MAX_CONNECT_DISTANCE) * 0.18;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(q.x, q.y);
              ctx.strokeStyle = `rgba(0, 180, 216, ${lineAlpha})`;
              ctx.lineWidth = 0.6;
              ctx.stroke();
            }
          }
        }
      }

      rafId = requestAnimationFrame(draw);
    };

    rafId = requestAnimationFrame(draw);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        opacity: 0.65,
        zIndex: 0,
      }}
    />
  );
}
