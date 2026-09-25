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
      <div
        ref={ref}
        className="section-header-wrap"
        data-in-view={prefersReducedMotion || inView ? "true" : "false"}
      >
        <h2
          className="section-title"
          style={{
            opacity: prefersReducedMotion || inView ? 1 : 0,
            transform: prefersReducedMotion || inView ? "translateY(0)" : "translateY(12px)",
            transition: prefersReducedMotion ? "none" : "opacity 500ms cubic-bezier(0.16, 1, 0.3, 1), transform 500ms cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {label}
        </h2>

        <div
          className="section-header-line"
          aria-hidden="true"
          style={{
            transform: prefersReducedMotion || inView ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "left",
          }}
        />
      </div>
      {children}
    </section>
  );
}
