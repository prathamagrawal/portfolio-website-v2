import { ReactNode } from "react";

interface SectionLabelProps {
  label: string;
  id?: string;
  children?: ReactNode;
}

export default function SectionLabel({ label, id, children }: SectionLabelProps) {
  return (
    <section id={id} className="section-block">
      {/*
       * Integrated systems heading:
       * Bold title anchored with terminal "##" in accent color,
       * followed by an inline architectural hairline spanning across to the right margin.
       */}
      <div className="section-header-wrap">
        <div className="section-heading-group">
          <span className="section-hash" aria-hidden="true">##</span>
          <h2 className="section-title">{label}</h2>
        </div>
        <div className="section-header-line" aria-hidden="true" />
      </div>
      {children}
    </section>
  );
}
