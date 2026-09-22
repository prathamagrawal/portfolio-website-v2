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
      {/*
       * Two-column on desktop: prose+email on left, social links on right.
       * Previously constrained to narrow-container (560px) — now full width
       * of the layout-container so the right column has space to breathe.
       */}
      <div className="contact-layout">

        {/* ── Left: heading + paragraph + email ── */}
        <div className="contact-left">
          <h2 className="contact-heading">Let&apos;s talk systems.</h2>

          <p className="contact-body">
            Open to infra, data engineering, and ML platform roles.
            Prefer async — email first, calls by arrangement.
          </p>

          <a
            href="mailto:prathamagrawal1205@gmail.com"
            className="contact-email"
          >
            prathamagrawal1205@gmail.com
          </a>
        </div>

        {/* ── Right: social links ── */}
        <div className="contact-right">
          <p className="contact-social-label">find me on</p>
          <nav aria-label="Social links">
            <ul className="contact-social-list" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {SOCIALS.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

      </div>
    </SectionLabel>
  );
}
