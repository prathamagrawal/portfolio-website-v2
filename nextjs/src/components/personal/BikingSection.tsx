import SectionLabel from "../SectionLabel";
import ScrollReveal from "../ScrollReveal";

const RIDE_CARDS = [
  {
    title: "The Open Road",
    subtitle: "HIGHWAY / RAIN / NIGHT",
    metrics: [{ val: "150+ km", label: "single ride" }, { val: "highway", label: "preferred terrain" }],
    tags: ["Highway", "Night Rides", "Rain Rides", "Long Distance"],
    img: "/bike/IMG_7512.jpg",
  },
  {
    title: "Yamaha FZ v3",
    subtitle: "THE MACHINE",
    metrics: [{ val: "149cc", label: "fuel injected" }, { val: "stock", label: "no mods needed" }],
    tags: ["FZ v3", "Fuel Injected", "Stock Setup", "Handling"],
    img: "/bike/IMG_8553.jpg",
  },
  {
    title: "Solo & In Group",
    subtitle: "THERAPY & FUN",
    metrics: [{ val: "100 km/h", label: "first ton" }, { val: "solo", label: "preferred mode" }],
    tags: ["Solo Rides", "Group Rides", "First Ton", "Therapy"],
    img: "/bike/IMG_6863.jpeg",
  },
];

export default function BikingSection() {
  return (
    <SectionLabel label="riding & the road" id="biking">

      {/* ── Banner: video with image poster fallback ── */}
      <ScrollReveal duration={650}>
        <div className="bike-banner">
          <video
            className="bike-banner-video"
            src="/bike/IMG_8539.mp4"
            poster="/bike/IMG_7338.png"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="bike-banner-overlay">
            <span className="bike-banner-label">field log / two wheels</span>
            <span className="bike-banner-text">150km stretches. Rain. Night roads. The FZ handles all of it.</span>
          </div>
        </div>
      </ScrollReveal>

      {/* ── 3 photo cards ── */}
      <div className="card-grid-3">
        {RIDE_CARDS.map((card, i) => (
          <ScrollReveal key={card.title} delay={i * 80} style={{ height: "100%" }}>
            <div className="expedition-card" style={{ height: "100%" }}>

              {/* Photo */}
              <div className="expedition-media">
                <img
                  src={card.img}
                  alt={card.title}
                  className="training-photo-img"
                />
                <div className="expedition-badge-bar">
                  {card.metrics.map((m) => (
                    <span key={m.label} className="tag" style={{ background: "var(--accent-dim)", color: "var(--accent)", fontWeight: 600, backdropFilter: "blur(6px)" }}>
                      {m.val} <span style={{ opacity: 0.7, fontWeight: 400 }}>· {m.label}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Body — title, subtitle, tags only */}
              <div className="expedition-body">
                <span className="project-category-tag" style={{ fontSize: "10px" }}>
                  {card.subtitle}
                </span>
                <h3 className="expedition-title">
                  {card.title}
                </h3>
                <div className="item-card-tags">
                  {card.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>

            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionLabel>
  );
}
