import SectionLabel from "../SectionLabel";
import ScrollReveal from "../ScrollReveal";

export default function PersonalContact() {
  return (
    <SectionLabel label="coffee & routes" id="contact">
      <div className="contact-layout">

        {/* ── Left: greeting ── */}
        <ScrollReveal direction="up" distance={20} duration={550} style={{ flex: 1, minWidth: 0 }}>
          <div className="contact-left">
            <h2 className="contact-heading">Always down to connect.</h2>

            <p className="contact-body">
              Whether you want to discuss cycling routes around South India, training programming,
              sports analytics, or engineering ideas over specialty coffee — my inbox is open.
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
        </ScrollReveal>

        {/* ── Right: Availability & Offline Spec ── */}
        <ScrollReveal direction="up" distance={20} duration={550} delay={120} style={{ flexShrink: 0 }}>
          <div className="contact-right">
            <div className="contact-spec-panel">
              <div className="contact-spec-header">
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.1em" }}>
                  off-duty / meetup
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
                  <span className="contact-spec-key">location</span>
                  <span className="contact-spec-val" style={{ color: "var(--text-primary)" }}>Bangalore, India</span>
                </div>
                <div className="contact-spec-row">
                  <span className="contact-spec-key">rides</span>
                  <span className="contact-spec-val" style={{ color: "var(--metric)" }}>weekend mornings</span>
                </div>
                <div className="contact-spec-row">
                  <span className="contact-spec-key">training</span>
                  <span className="contact-spec-val">weekday evenings</span>
                </div>
                <div className="contact-spec-row">
                  <span className="contact-spec-key">topics</span>
                  <span className="contact-spec-val">cycling · lifting · tech</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </SectionLabel>
  );
}
