"use client";
import Fade from "./Fade";

interface ServicesProps {
  t: {
    label: string;
    title: string;
    sub: string;
    items: { icon: string; name: string; desc: string }[];
  };
  surface: string;
  surfaceAlt: string;
  textMuted: string;
  border: string;
  burg: string;
  text: string;
  dark: boolean;
}

/* Color pattern for cards: light / dark / light / dark-accent / light / dark / light / dark-accent / light */
const CARD_THEMES = [
  "light", "dark", "light",
  "accent", "light", "dark",
  "light", "accent", "light",
] as const;

export default function Services({
  t, surface, surfaceAlt, textMuted, border, burg, text, dark,
}: ServicesProps) {
  return (
    <section id="services" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>

        {/* Header */}
        <Fade>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 56 }}>
            <div>
              <p style={{
                fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
                color: burg, marginBottom: 16, fontWeight: 500,
                fontFamily: "'Inter', sans-serif",
              }}>
                {t.label}
              </p>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(38px, 4.5vw, 68px)",
                fontWeight: 300, lineHeight: 1.08,
                letterSpacing: "-0.022em",
                color: dark ? "#F5F0FF" : "#1A0A2E",
                maxWidth: 520,
              }}>
                {t.title}
              </h2>
            </div>
            <p style={{
              color: textMuted, fontSize: 15, maxWidth: 280,
              lineHeight: 1.78, fontWeight: 300,
            }}>
              {t.sub}
            </p>
          </div>
        </Fade>

        {/* Bento grid */}
        <div
          className="services-bento"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 12,
          }}
        >
          {t.items.map((s, i) => {
            const theme = CARD_THEMES[i % CARD_THEMES.length];
            const isDark   = theme === "dark";
            const isAccent = theme === "accent";
            const bg = isDark
              ? burg
              : isAccent
              ? (dark ? "#0F0A1E" : "#1A0A2E")
              : surface;
            const cardText = isDark || isAccent ? "#F4F1EE" : text;
            const cardMuted = isDark
              ? "rgba(244,241,238,0.56)"
              : isAccent
              ? "rgba(244,241,238,0.52)"
              : textMuted;
            const iconColor = isDark || isAccent ? "rgba(244,241,238,0.7)" : burg;
            const cardBorder = isDark || isAccent ? "none" : `1px solid ${border}`;

            return (
              <Fade key={i} delay={i * 0.045}>
                <div
                  className={`service-card bento-card ${isDark || isAccent ? "bento-card-dark" : "bento-card-light"}`}
                  style={{
                    background: bg,
                    padding: "36px 34px 40px",
                    border: cardBorder,
                    height: "100%",
                    minHeight: 200,
                  }}
                >
                  {/* Icon container */}
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: isDark || isAccent
                      ? "rgba(255,255,255,0.08)"
                      : (dark ? "rgba(255,255,255,0.06)" : surfaceAlt),
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 18, color: iconColor,
                    marginBottom: 24,
                    flexShrink: 0,
                  }}>
                    {s.icon}
                  </div>

                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 21, fontWeight: 400,
                    color: cardText, marginBottom: 12,
                    letterSpacing: "-0.01em",
                  }}>
                    {s.name}
                  </h3>
                  <p style={{
                    fontSize: 13.5, color: cardMuted,
                    lineHeight: 1.78, fontWeight: 300,
                  }}>
                    {s.desc}
                  </p>

                  {/* Subtle arrow on hover */}
                  <div style={{
                    position: "absolute", bottom: 24, right: 24,
                    fontSize: 18, color: iconColor,
                    opacity: 0.3, transition: "opacity 0.3s, transform 0.3s",
                  }}>
                    →
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
