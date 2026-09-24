import SectionLabel from "./SectionLabel";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <SectionLabel label="contact" id="contact">
      <ScrollReveal direction="up" distance={20} duration={550}>
        <div style={{ maxWidth: "560px" }}>
          <h2 style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
            fontWeight: 700,
            color: "var(--text-primary)",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: "1.25rem",
          }}>
            Let&apos;s talk systems.
          </h2>

          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "16px",
            lineHeight: 1.8,
            color: "var(--text-secondary)",
            marginBottom: "2rem",
            maxWidth: "440px",
          }}>
            Open to infra, data engineering, and distributed systems roles.
            Prefer async — email first, calls by arrangement.
          </p>

          <a
            href="mailto:prathamagrawal1205@gmail.com"
            className="contact-email"
            style={{ fontSize: "16px", marginBottom: "2.5rem", display: "inline-flex" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            prathamagrawal1205@gmail.com
          </a>

          <div style={{
            display: "flex",
            gap: "2rem",
            flexWrap: "wrap",
            marginTop: "2rem",
            paddingTop: "2rem",
            borderTop: "1px solid var(--border-muted)",
          }}>
            {[
              { label: "GitHub",   href: "https://github.com/prathamagrawal" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/pratham-manish-agrawal" },
              { label: "Twitter",  href: "https://twitter.com/fearsomejockey" },
              { label: "Kaggle",   href: "https://www.kaggle.com/fearsomejockey" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </SectionLabel>
  );
}
