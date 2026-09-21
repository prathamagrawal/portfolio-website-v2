export default function SectionLabel({
  label,
  id,
  children,
}: {
  label: string;
  id?: string;
  children?: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 pt-4 mb-24">
      {/* Visual section label — mono, lowercase, no all-caps */}
      <p className="font-mono text-[13px] text-secondary tracking-[0.06em] mb-3">
        ## {label}
      </p>
      <hr className="border-t border-border mb-10 md:mb-12" />
      {children}
    </section>
  );
}
