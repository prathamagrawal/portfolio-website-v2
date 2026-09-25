"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * CursorGlow – renders a fixed radial-gradient spotlight that tracks the
 * mouse cursor, giving the dark background a subtle reactive glow.
 * Uses a requestAnimationFrame loop for smooth 60 fps movement without
 * triggering React re-renders.
 *
 * No-ops on touch / mobile devices — no cursor exists there.
 */
export default function CursorGlow() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip on touch-primary devices — no cursor, no point running the loop
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (prefersReducedMotion) return;

    const el = divRef.current;
    if (!el) return;

    let rafId: number;
    let mouseX = -9999;
    let mouseY = -9999;
    let curX   = -9999;
    let curY   = -9999;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onMouseLeave = () => {
      mouseX = -9999;
      mouseY = -9999;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);

    const animate = () => {
      // Smooth lerp toward target (0.10 = soft follow, feels natural)
      curX += (mouseX - curX) * 0.10;
      curY += (mouseY - curY) * 0.10;

      el.style.background = `radial-gradient(
        520px circle at ${curX}px ${curY}px,
        rgba(0, 180, 216, 0.055) 0%,
        rgba(0, 180, 216, 0.015) 35%,
        transparent 70%
      )`;

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <div
      ref={divRef}
      className="cursor-glow"
      aria-hidden="true"
    />
  );
}
