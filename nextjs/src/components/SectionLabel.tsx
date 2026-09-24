"use client";

import { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface SectionLabelProps {
  label: string;
  id?: string;
  children?: ReactNode;
}

export default function SectionLabel({ label, id, children }: SectionLabelProps) {
  const { ref, inView } = useInView({ threshold: 0.1, rootMargin: "0px 0px -20px 0px" });
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id={id} className="section-block">
      {/*
       * Section Header with orchestrated drawing animation:
       * 1. ## marker and title slide up softly
       * 2. The architectural hairline draws across from left to right
       */}
      <div ref={ref} className="section-header-wrap">
        <div
          className="section-heading-group"
          style={{
            opacity: prefersReducedMotion || inView ? 1 : 0,
            transform: prefersReducedMotion || inView ? "translateY(0)" : "translateY(12px)",
            transition: prefersReducedMotion ? "none" : "opacity 500ms cubic-bezier(0.16, 1, 0.3, 1), transform 500ms cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <span className="section-hash" aria-hidden="true">##</span>
          <h2 className="section-title">{label}</h2>
        </div>

        <div
          className="section-header-line"
          aria-hidden="true"
          style={{
            transform: prefersReducedMotion || inView ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "left",
            transition: prefersReducedMotion ? "none" : "transform 750ms cubic-bezier(0.16, 1, 0.3, 1) 120ms",
          }}
        />
      </div>
      {children}
    </section>
  );
}
