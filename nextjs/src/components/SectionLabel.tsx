import { ReactNode } from "react";

interface SectionLabelProps {
  label: string;
  id?: string;
  children?: ReactNode;
}

export default function SectionLabel({ label, id, children }: SectionLabelProps) {
  return (
    <section id={id} className="scroll-mt-24 py-6 mb-20 md:mb-28">
      {/* ## label — purely visual, monospace, lowercase */}
      <p className="section-label">## {label}</p>
      <hr className="rule mb-10 md:mb-14" />
      {children}
    </section>
  );
}
