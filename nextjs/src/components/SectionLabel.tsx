import { ReactNode } from "react";

interface SectionLabelProps {
  label: string;
  id?: string;
  children?: ReactNode;
}

export default function SectionLabel({ label, id, children }: SectionLabelProps) {
  return (
    <section
      id={id}
      className="section-block"
    >
      {/* ## label — purely visual, monospace, lowercase, no all-caps */}
      <p className="section-label">## {label}</p>
      <hr className="rule section-rule" />
      {children}
    </section>
  );
}
