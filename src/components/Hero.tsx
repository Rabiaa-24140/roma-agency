"use client";

interface HeroProps {
  t: {
    eyebrow: string;
    headline: string;
    sub: string;
    cta1: string;
    cta2: string;
    scroll: string;
  };
  isRTL: boolean;
  textMuted: string;
  burg: string;
  dark: boolean;
  onScrollToContact: () => void;
  onScrollToServices: () => void;
}

export default function Hero({
  t, isRTL, textMuted, burg, dark,
  onScrollToContact, onScrollToServices,
}: HeroProps) {
  const textMain = dark ? "#F5F0FF" : "#1A0A2E";
  const borderC  = dark ? "rgba(255,255,255,0.08)" : "rgba(120,81,169,0.15)";

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle radial purple glow at top */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: dark
          ? "radial-gradient(ellipse 90% 55% at 50% -5%, rgba(120,81,169,0.18) 0%, transparent 68%)"
          : "radial-gradient(ellipse 90% 55% at 50% -5%, rgba(120,81,169,0.10) 0%, transparent 68%)",
      }} />

      {/* Center content */}
      <div style={{
        flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
        padding: "140px 40px 60px",
      }}>
        <div style={{ maxWidth: 900, width: "100%", textAlign: "center" }}>

          {/* Eyebrow */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            gap: 20, marginBottom: 52,
            opacity: 0, animation: "heroIn 0.8s ease 0.1s both",
          }}>
            <div style={{ width: 52, height: 1, background: burg, opacity: 0.45 }} />
            <span style={{
              fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase",
              color: burg, fontFamily: "'Inter', sans-serif", fontWeight: 500,
            }}>
              {t.eyebrow}
            </span>
            <div style={{ width: 52, height: 1, background: burg, opacity: 0.45 }} />
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(52px, 8.5vw, 130px)",
            fontWeight: 300, lineHeight: 0.96,
            letterSpacing: "-0.03em",
            color: textMain, marginBottom: 44,
            opacity: 0, animation: "heroIn 1s ease 0.2s both",
          }}>
            {t.headline}
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: 17, fontWeight: 300, color: textMuted,
            maxWidth: 460, margin: "0 auto 52px",
            lineHeight: 1.9,
            opacity: 0, animation: "heroIn 0.9s ease 0.38s both",
          }}>
            {t.sub}
          </p>

          {/* CTAs */}
          <div style={{
            display: "flex", gap: 14, justifyContent: "center",
            flexWrap: "wrap",
            opacity: 0, animation: "heroIn 0.8s ease 0.52s both",
          }}>
            <button className="btn-primary" onClick={onScrollToContact}>
              {t.cta1} →
            </button>
            <button className="btn-ghost" onClick={onScrollToServices} style={{ color: textMain }}>
              {t.cta2}
            </button>
          </div>

          {/* Stats strip */}
          <div style={{
            display: "flex", marginTop: 92,
            borderTop: `1px solid ${borderC}`,
            opacity: 0, animation: "heroIn 0.8s ease 0.7s both",
          }}>
            {[
              { n: "100+",  label: "Projects Delivered" },
              { n: "$10M+", label: "Revenue Generated"  },
              { n: "50+",   label: "Global Clients"     },
              { n: "5★",    label: "Average Rating"     },
            ].map((s, i) => (
              <div key={i} style={{
                flex: 1, padding: "32px 12px", textAlign: "center",
                borderRight: i < 3 ? `1px solid ${borderC}` : "none",
              }}>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 38, fontWeight: 400,
                  color: burg, lineHeight: 1, marginBottom: 8,
                }}>
                  {s.n}
                </p>
                <p style={{
                  fontSize: 10, color: textMuted,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        gap: 12, padding: "24px 40px",
        opacity: 0, animation: "heroIn 0.8s ease 1s both",
        direction: isRTL ? "rtl" : "ltr",
      }}>
        <div style={{ width: 20, height: 1, background: burg, opacity: 0.35 }} />
        <span style={{
          fontSize: 9, letterSpacing: "0.28em", textTransform: "uppercase",
          color: textMuted, fontFamily: "'Inter', sans-serif",
        }}>
          {t.scroll}
        </span>
        <div style={{ width: 20, height: 1, background: burg, opacity: 0.35 }} />
      </div>
    </section>
  );
}
