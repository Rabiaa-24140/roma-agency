"use client";
import Fade from "./Fade";

interface ServicesProps {
  t: {
    label: string; title: string; sub: string;
    items: { icon: string; name: string; desc: string }[];
  };
  surface: string;
  surfaceAlt: string;
  textMuted: string;
  border: string;
  burg: string;
  text: string;
}

export default function Services({ t, surface, surfaceAlt, textMuted, border, burg, text }: ServicesProps) {
  return (
    <section id="services" style={{ padding: "100px 40px", background: surfaceAlt }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Fade>
          <p style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: burg, marginBottom: 20, fontWeight: 500 }}>
            {t.label}
          </p>
        </Fade>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 64 }}>
          <Fade delay={0.1}>
            <h2 className="section-title" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(40px, 5vw, 72px)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.02em", maxWidth: 600 }}>
              {t.title}
            </h2>
          </Fade>
          <Fade delay={0.2}>
            <p style={{ color: textMuted, fontSize: 15, maxWidth: 300, lineHeight: 1.7 }}>{t.sub}</p>
          </Fade>
        </div>

        <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: border }}>
          {t.items.map((s, i) => (
            <Fade key={i} delay={i * 0.05}>
              <div
                className="service-card"
                style={{ background: surface, padding: "40px 36px", border: "1px solid transparent", transition: "all 0.3s ease", cursor: "default" }}
              >
                <div style={{ fontSize: 20, color: burg, marginBottom: 20, opacity: 0.7 }}>{s.icon}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 400, marginBottom: 12 }}>{s.name}</h3>
                <p style={{ fontSize: 14, color: textMuted, lineHeight: 1.75, fontWeight: 300 }}>{s.desc}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
