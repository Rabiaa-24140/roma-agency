"use client";
import RomaLogo from "./RomaLogo";

interface HeroProps {
  t: {
    eyebrow: string; headline: string; sub: string;
    cta1: string; cta2: string; scroll: string;
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
  const textMain = dark ? "#F5F0FF" : "#0F0820";
  const divider  = dark ? "rgba(255,255,255,0.08)" : "rgba(120,81,169,0.13)";

  return (
    <section
      id="home"
      style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr" }}
      className="hero-split"
    >
      {/* ── LEFT: editorial content ── */}
      <div style={{
        display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "140px 64px 80px",
        background: dark ? "#0C0818" : "#FAF8F5",
        position: "relative",
      }}>

        {/* Eyebrow */}
        <div style={{
          display: "flex", alignItems: "center", gap: 14, marginBottom: 48,
          opacity: 0, animation: "heroIn 0.8s ease 0.1s both",
        }}>
          <div style={{ width: 32, height: 1, background: burg }} />
          <span style={{
            fontSize: 10, letterSpacing: "0.32em", textTransform: "uppercase",
            color: burg, fontFamily: "'Inter', sans-serif", fontWeight: 500,
          }}>
            {t.eyebrow}
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(46px, 5.5vw, 92px)",
          fontWeight: 300, lineHeight: 1.0,
          letterSpacing: "-0.03em",
          color: textMain, marginBottom: 32,
          opacity: 0, animation: "heroIn 1s ease 0.2s both",
        }}>
          {t.headline}
        </h1>

        {/* Thin rule */}
        <div style={{
          width: 44, height: 1, background: burg, opacity: 0.55,
          marginBottom: 28, animationFillMode: "both",
          opacity: 0, animation: "heroIn 0.8s ease 0.35s both",
        }} />

        {/* Subtitle */}
        <p style={{
          fontSize: 16, fontWeight: 300, color: textMuted,
          maxWidth: 400, lineHeight: 1.88, marginBottom: 52,
          opacity: 0, animation: "heroIn 0.8s ease 0.42s both",
        }}>
          {t.sub}
        </p>

        {/* CTAs */}
        <div style={{
          display: "flex", gap: 14, flexWrap: "wrap",
          opacity: 0, animation: "heroIn 0.8s ease 0.55s both",
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
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
          marginTop: 80, paddingTop: 36,
          borderTop: `1px solid ${divider}`,
          opacity: 0, animation: "heroIn 0.8s ease 0.72s both",
        }}>
          {[
            { n: "100+",  label: "Projects" },
            { n: "$10M+", label: "Revenue"  },
            { n: "50+",   label: "Clients"  },
          ].map((s, i) => (
            <div key={i} style={{
              paddingRight: 20,
              borderRight: i < 2 ? `1px solid ${divider}` : "none",
              paddingLeft: i > 0 ? 20 : 0,
            }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 36, fontWeight: 400, color: burg, lineHeight: 1, marginBottom: 6,
              }}>{s.n}</p>
              <p style={{ fontSize: 10, color: textMuted, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT: royal purple panel ── */}
      <div
        className="hero-visual-col"
        style={{
          background: `linear-gradient(155deg, #9B6EDB 0%, ${burg} 35%, #4A2080 75%, #1A0838 100%)`,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          position: "relative", overflow: "hidden",
          padding: "140px 48px 80px",
        }}
      >
        {/* Decorative concentric rings */}
        {[480, 340, 200, 100].map((d, i) => (
          <div key={i} style={{
            position: "absolute", top: "50%", left: "50%",
            width: d, height: d, borderRadius: "50%",
            border: `1px solid rgba(255,255,255,${0.03 + i * 0.025})`,
            transform: "translate(-50%,-50%)",
            pointerEvents: "none",
          }} />
        ))}

        {/* Floating light dots */}
        {[
          { top: "18%", left: "22%", s: 5 },
          { top: "30%", left: "78%", s: 3 },
          { top: "68%", left: "18%", s: 4 },
          { top: "76%", left: "70%", s: 3 },
          { top: "14%", left: "60%", s: 2 },
        ].map((p, i) => (
          <div key={i} style={{
            position: "absolute", top: p.top, left: p.left,
            width: p.s, height: p.s, borderRadius: "50%",
            background: "rgba(255,255,255,0.5)",
            animation: `particle${(i % 3) + 1} ${4 + i * 0.6}s ease-in-out ${i * 0.4}s infinite`,
          }} />
        ))}

        {/* ROMA Logo in white */}
        <div style={{
          opacity: 0, animation: "heroIn 1.2s ease 0.5s both",
          zIndex: 1, position: "relative",
        }}>
          <RomaLogo color="#FFFFFF" size={180} showTagline={true} />
        </div>

        {/* Scroll label */}
        <p style={{
          position: "absolute", bottom: 36,
          fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase",
          color: "rgba(255,255,255,0.35)", fontFamily: "'Inter', sans-serif",
          opacity: 0, animation: "heroIn 0.8s ease 1s both",
        }}>
          {t.scroll}
        </p>
      </div>
    </section>
  );
}
