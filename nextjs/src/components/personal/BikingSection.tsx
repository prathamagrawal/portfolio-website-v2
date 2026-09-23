import SectionLabel from "../SectionLabel";

const RIDES = [
  {
    title: "Weekend Century Rides",
    subtitle: "ENDURANCE & TEMPO",
    metrics: [{ val: "100–120 km", label: "distance" }, { val: "26 km/h", label: "avg speed" }],
    desc: "Long morning highway loops and rural state roads. Cycling serves as an active meditation — hours of rhythmic cadence and zone-2 cardiovascular aerobic conditioning.",
    tags: ["Zone 2", "Aerobic Base", "Bangalore Outback", "Century"],
  },
  {
    title: "Hill Climbs & Elevation",
    subtitle: "GRADIENT & GRIT",
    metrics: [{ val: "1,200m+", label: "elev gain" }, { val: "8–12%", label: "peak gradient" }],
    desc: "Pushing through steep hairpin ascents. Hill intervals test mental fortitude, power-to-weight output, and steady pedal cadence when the legs want to quit.",
    tags: ["Climbs", "Elevation Gain", "Power Cadence", "Descent"],
  },
  {
    title: "The Machine & Gear",
    subtitle: "SETUP & MAINTENANCE",
    metrics: [{ val: "1x11", label: "drivetrain" }, { val: "Tubeless", label: "tire setup" }],
    desc: "Treating the bike with the same mechanical precision as production servers: regular chain waxing, hydraulic brake bleeds, dialled saddle fit, and clean gear ratios.",
    tags: ["Road Bike", "Drivetrain", "Bike Fit", "Hydration"],
  },
];

export default function BikingSection() {
  return (
    <SectionLabel label="biking & endurance" id="biking">
      <div className="card-grid-3">
        {RIDES.map((ride) => (
          <div key={ride.title} className="item-card">
            <div>
              <span className="project-category-tag" style={{ fontSize: "10px", marginBottom: "4px" }}>
                {ride.subtitle}
              </span>
              <h3 className="item-card-title" style={{ fontSize: "16px", marginBottom: "10px" }}>
                {ride.title}
              </h3>

              <div style={{ display: "flex", gap: "6px", marginBottom: "12px" }}>
                {ride.metrics.map((m) => (
                  <span key={m.label} className="tag" style={{ background: "var(--accent-dim)", color: "var(--accent)", fontWeight: 600 }}>
                    {m.val} <span style={{ opacity: 0.7, fontWeight: 400 }}>· {m.label}</span>
                  </span>
                ))}
              </div>

              <p className="item-card-desc">
                {ride.desc}
              </p>
            </div>

            <div className="item-card-tags" style={{ marginTop: "12px" }}>
              {ride.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionLabel>
  );
}
