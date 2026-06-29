"use client";

interface HeroProps {
  t: { eyebrow: string; headline: string; sub: string; cta1: string; cta2: string; scroll: string; };
  isRTL: boolean;
  textMuted: string;
  burg: string;
  dark: boolean;
  onScrollToContact: () => void;
  onScrollToServices: () => void;
}

const HERO_IMG = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80";

export default function Hero({ t, burg, onScrollToContact, onScrollToServices }: HeroProps) {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex", flexDirection: "column",
        position: "relative", overflow: "hidden",
        backgroundImage: `url('${HERO_IMG}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Purple gradient overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(120deg, rgba(45,10,90,0.93) 0%, rgba(78,33,140,0.82) 50%, rgba(25,5,60,0.88) 100%)",
      }} />

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 1,
        flex: 1, display: "flex", alignItems: "center",
        maxWidth: 1160, margin: "0 auto", width: "100%",
        padding: "140px 24px 80px",
      }}>
        <div style={{ maxWidth: 680 }}>

          {/* Eyebrow */}
          <div style={{
            display: "flex", alignItems: "center", gap: 14, marginBottom: 40,
            opacity: 0, animation: "heroIn 0.8s ease 0.1s both",
          }}>
            <div style={{ width: 32, height: 2, background: burg }} />
            <span style={{
              fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.75)", fontFamily: "'Inter', sans-serif", fontWeight: 500,
            }}>
              {t.eyebrow}
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(48px, 6.5vw, 104px)",
            fontWeight: 300, lineHeight: 1.02,
            letterSpacing: "-0.025em",
            color: "#FFFFFF",
            marginBottom: 28,
            opacity: 0, animation: "heroIn 1s ease 0.2s both",
          }}>
            {t.headline}
          </h1>

          {/* Accent line */}
          <div style={{
            width: 60, height: 3, background: burg, marginBottom: 28,
            opacity: 0, animation: "heroIn 0.8s ease 0.35s both",
          }} />

          {/* Sub */}
          <p style={{
            fontSize: 17, fontWeight: 300,
            color: "rgba(255,255,255,0.68)",
            maxWidth: 480, lineHeight: 1.85, marginBottom: 52,
            opacity: 0, animation: "heroIn 0.8s ease 0.42s both",
          }}>
            {t.sub}
          </p>

          {/* CTAs */}
          <div style={{
            display: "flex", gap: 16, flexWrap: "wrap",
            opacity: 0, animation: "heroIn 0.8s ease 0.56s both",
          }}>
            <button className="btn-primary" onClick={onScrollToContact}>
              {t.cta1} →
            </button>
            <button
              className="btn-ghost-inv"
              onClick={onScrollToServices}
            >
              {t.cta2}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div style={{
        position: "relative", zIndex: 1,
        borderTop: "1px solid rgba(255,255,255,0.1)",
        background: "rgba(0,0,0,0.3)",
        backdropFilter: "blur(12px)",
      }}>
        <div style={{
          maxWidth: 1160, margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(4,1fr)",
          padding: "0 24px",
        }}>
          {[
            { n: "100+",  label: "Projects Delivered" },
            { n: "$10M+", label: "Revenue Generated"  },
            { n: "97%",   label: "Client Satisfaction" },
            { n: "50+",   label: "Global Clients"     },
          ].map((s, i) => (
            <div key={i} style={{
              padding: "28px 20px", textAlign: "center",
              borderRight: i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none",
              opacity: 0, animation: `heroIn 0.7s ease ${0.7 + i * 0.08}s both`,
            }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 36, fontWeight: 400,
                color: "#FFFFFF", lineHeight: 1, marginBottom: 6,
              }}>{s.n}</p>
              <p style={{
                fontSize: 10, color: "rgba(255,255,255,0.48)",
                letterSpacing: "0.12em", textTransform: "uppercase",
                fontFamily: "'Inter', sans-serif",
              }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
