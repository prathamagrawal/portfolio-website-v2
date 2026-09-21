import SectionLabel from "./SectionLabel";

const SOCIALS = [
  { name: "GitHub",    href: "https://github.com/prathamagrawal" },
  { name: "LinkedIn",  href: "https://www.linkedin.com/in/pratham-manish-agrawal" },
  { name: "Twitter",   href: "https://twitter.com/fearsomejockey" },
  { name: "Kaggle",    href: "https://www.kaggle.com/fearsomejockey" },
  { name: "Instagram", href: "https://www.instagram.com/prathammanishagrawal" },
];

export default function Contact() {
  return (
    <SectionLabel label="contact" id="contact">
      <div className="max-w-[560px]">

        <h2 className="font-sans text-[28px] md:text-[32px] font-bold text-primary tracking-tight leading-tight">
          Let&apos;s talk systems.
        </h2>

        <p className="font-sans text-[15px] text-secondary leading-[1.8] mt-4 max-w-[440px]">
          Open to infra, data engineering, and ML platform roles.
          Prefer async — email first, calls by arrangement.
        </p>

        {/* Email */}
        <div className="mt-8">
          <a
            href="mailto:prathamagrawal1205@gmail.com"
            className="
              font-mono text-[14px] text-accent
              hover:text-accent-hover
              underline underline-offset-4 decoration-accent/30
              hover:decoration-accent
              transition-colors duration-150
            "
          >
            prathamagrawal1205@gmail.com
          </a>
        </div>

        {/* Divider */}
        <hr className="rule mt-10 mb-7" />

        {/* Social links */}
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {SOCIALS.map((s, i) => (
            <span key={s.name} className="flex items-center gap-6">
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[12px] text-secondary hover:text-accent transition-colors duration-120"
              >
                {s.name}
              </a>
              {/* Dot separator between links — except last */}
              {i < SOCIALS.length - 1 && (
                <span className="text-border select-none font-mono text-[10px]" aria-hidden="true">
                  ·
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </SectionLabel>
  );
}
