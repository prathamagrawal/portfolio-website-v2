"use client";

const PHYSICAL_METRICS = [
  { value: "4x / wk",   label: "lifting split consistency", pct: 88 },
  { value: "120+ km",   label: "longest single ride",       pct: 95 },
  { value: "5+",        label: "sports actively played",    pct: 75 },
  { value: "3,200m",    label: "peak trail trek altitude",  pct: 85 },
  { value: "daily",     label: "mobility & active recovery",pct: 100 },
];

export default function PersonalHero() {
  return (
    <section style={{ minHeight: "88vh", display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "84px", paddingBottom: "72px" }}>
      <div className="hero-grid">

        {/* ── Left Column: Headline & Bio ── */}
        <div className="hero-left" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>

          {/* Status badge */}
          <div className="hero-status-pill">
            <div className="hero-status-name-group">
              <span className="hero-pulse-dot" style={{ backgroundColor: "#9B5226", boxShadow: "0 0 10px #9B5226" }} aria-hidden="true" />
              <span className="hero-status-name">Pratham Agrawal</span>
            </div>
            <span className="hero-status-sep" aria-hidden="true">/</span>
            <span className="hero-status-role" style={{ color: "var(--accent)", background: "var(--accent-dim)", borderColor: "var(--border)" }}>
              offline &amp; in motion
            </span>
          </div>

          {/* Headline */}
          <h1 className="hero-headline">
            Outside the terminal.<br />
            <span className="hero-headline-highlight" style={{ background: "linear-gradient(120deg, #9B5226 0%, #D97736 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              In motion
            </span> &amp; on the trail.
          </h1>

          {/* Lead description */}
          <p className="hero-lead-text">
            Strength training, endurance cycling, competitive sports, and high-altitude treks.
            The physical disciplines and recovery systems that keep the mental ones sharp.
          </p>

          {/* Action links */}
          <div className="hero-cta-wrap">
            <a href="#training" className="hero-btn-primary" style={{ borderColor: "var(--accent)" }}>
              <span>Explore field logs</span>
              <span aria-hidden="true" style={{ fontSize: "14px", transform: "translateY(1px)" }}>↓</span>
            </a>
            <a
              href="#biking"
              className="hero-btn-secondary"
            >
              <span>Route logs ↗</span>
            </a>
          </div>

        </div>

        {/* ── Right Column: Physical Telemetry ── */}
        <div className="hero-right" style={{ width: "100%" }}>
          <div className="hero-console-box">

            {/* Console Header */}
            <div className="hero-console-header">
              <div className="hero-console-title">
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#9B5226", boxShadow: "0 0 6px #9B5226" }} aria-hidden="true" />
                <span>telemetry / physical-stats</span>
              </div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.05em" }}>
                active season
              </span>
            </div>

            {/* Metrics List */}
            <div style={{ padding: "4px 0" }}>
              {PHYSICAL_METRICS.map((m) => (
                <div key={m.label} className="hero-metric-row">
                  <div className="hero-metric-content">
                    <span className="hero-metric-value" style={{ color: "var(--metric)" }}>
                      {m.value}
                    </span>
                    <span className="hero-metric-label">
                      {m.label}
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="hero-metric-bar-bg" aria-hidden="true">
                    <div
                      className="hero-metric-bar-fill"
                      style={{
                        width: `${m.pct}%`,
                        background: "linear-gradient(90deg, #9B5226 0%, #D97736 100%)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Console Footer */}
            <div className="hero-console-footer">
              <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "var(--accent)" }} aria-hidden="true" />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-secondary)" }}>
                  state: active &amp; recovering · Bangalore, India
                </span>
              </div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-muted)" }}>
                weekly sync
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
