import SectionLabel from "./SectionLabel";

export default function Contact() {
  return (
    <SectionLabel label="contact" id="contact">
      <div className="contact-layout">

        {/* ── Left: heading + paragraph + email ── */}
        <div className="contact-left">
          <h2 className="contact-heading">Let&apos;s talk systems.</h2>

          <p className="contact-body">
            Open to infra, data engineering, and distributed systems roles.
            Prefer async — email first, calls by arrangement.
          </p>

          <div style={{ marginTop: "24px" }}>
            <a
              href="mailto:prathamagrawal1205@gmail.com"
              className="contact-email"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              prathamagrawal1205@gmail.com
            </a>
          </div>
        </div>

        {/* ── Right: Communication telemetry specs ── */}
        <div className="contact-right">
          <div className="contact-spec-panel">
            <div className="contact-spec-header">
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.1em" }}>
                system / comms
              </span>
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "var(--accent)",
                  display: "inline-block",
                  boxShadow: "0 0 8px var(--accent)",
                }}
                aria-hidden="true"
              />
            </div>
            <div className="contact-spec-body">
              <div className="contact-spec-row">
                <span className="contact-spec-key">channel</span>
                <span className="contact-spec-val" style={{ color: "var(--text-primary)" }}>direct email</span>
              </div>
              <div className="contact-spec-row">
                <span className="contact-spec-key">response</span>
                <span className="contact-spec-val" style={{ color: "var(--metric)" }}>&lt; 24h</span>
              </div>
              <div className="contact-spec-row">
                <span className="contact-spec-key">timezone</span>
                <span className="contact-spec-val">IST (UTC+5:30)</span>
              </div>
              <div className="contact-spec-row">
                <span className="contact-spec-key">preferred</span>
                <span className="contact-spec-val">async / email</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </SectionLabel>
  );
}
