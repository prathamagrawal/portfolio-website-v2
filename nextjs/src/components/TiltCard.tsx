"use client";

import { useRef, ReactNode, MouseEvent } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number; // degrees, default 6
}

/**
 * TiltCard – wraps children in a div that applies a subtle 3D perspective
 * tilt based on mouse position within the element. Smoothly resets on
 * mouse-leave. No-ops when prefers-reduced-motion is set.
 */
export default function TiltCard({
  children,
  className = "",
  maxTilt = 6,
}: TiltCardProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const rafRef  = useRef<number | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    // Skip on touch-primary devices — mousemove never fires reliably there
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width  / 2;
    const cy = rect.top  + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width  / 2); // -1 to 1
    const dy = (e.clientY - cy) / (rect.height / 2); // -1 to 1

    const rotateX = -dy * maxTilt; // tilt up/down
    const rotateY =  dx * maxTilt; // tilt left/right

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      if (!cardRef.current) return;
      cardRef.current.style.transform = `
        perspective(900px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateZ(4px)
      `;
    });
  };

  const handleMouseLeave = () => {
    if (prefersReducedMotion) return;
    const card = cardRef.current;
    if (!card) return;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    card.style.transition = "transform 500ms cubic-bezier(0.16, 1, 0.3, 1)";
    card.style.transform  = "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)";

    // Remove the inline transition after reset so hover re-entry feels instant
    const onEnd = () => {
      if (cardRef.current) cardRef.current.style.transition = "";
      card.removeEventListener("transitionend", onEnd);
    };
    card.addEventListener("transitionend", onEnd);
  };

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ willChange: "transform", transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}
