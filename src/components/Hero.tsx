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
  const surface  = dark ? "#1E0B3A" : "#FFFFFF";
  const card     = dark ? "#160830" : "#F0EBE3";
  const textMain = dark ? "#E8D8FF" : "#1A0A2E";
  const border   = dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.07)";

  return (
    <section
      id="home"
      style={{
        padding: "128px 24px 40px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto", width: "100%" }}>

        {/* Eyebrow */}
        <div
          style={{
            opacity: 0, animation: "heroIn 0.8s ease 0.1s both",
            marginBottom: 20,
            display: "flex", alignItems: "center", gap: 12,
          }}
        >
          <div style={{ width: 28, height: 1, background: burg, opacity: 0.6 }} />
          <span style={{
            fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
            color: burg, fontWeight: 500, fontFamily: "'Inter', sans-serif",
          }}>
            {t.eyebrow}
          </span>
        </div>

        {/* Main bento grid */}
        <div
          className="hero-bento"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 400px",
            gap: 14,
            opacity: 0,
            animation: "heroIn 0.9s ease 0.25s both",
          }}
        >
          {/* ── LEFT COLUMN ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

            {/* Headline card */}
            <div
              className="bento-card bento-card-light"
              style={{
                background: surface,
                border: `1px solid ${border}`,
                padding: "52px 52px 48px",
                flex: 1,
              }}
            >
              <h1
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(42px, 5.2vw, 78px)",
                  fontWeight: 300,
                  lineHeight: 1.06,
                  letterSpacing: "-0.025em",
                  color: textMain,
                  marginBottom: 28,
                  maxWidth: 660,
                }}
              >
                {t.headline}
              </h1>
              <p style={{
                fontSize: 16, fontWeight: 300, color: textMuted,
                marginBottom: 44, maxWidth: 500, lineHeight: 1.82,
              }}>
                {t.sub}
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
                <button className="btn-primary" onClick={onScrollToContact}>
                  {t.cta1} →
                </button>
                <button
                  className="btn-ghost"
                  onClick={onScrollToServices}
                  style={{ color: textMain }}
                >
                  {t.cta2}
                </button>
              </div>
            </div>

            {/* Stats row */}
            <div
              className="hero-stats-row"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}
            >
              {/* Stat 1 – light */}
              <div
                className="bento-card bento-card-light"
                style={{
                  background: card,
                  border: `1px solid ${border}`,
                  padding: "28px 32px",
                }}
              >
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 48, fontWeight: 400, color: burg,
                  lineHeight: 1, marginBottom: 8,
                }}>100+</p>
                <p style={{ fontSize: 12, color: textMuted, letterSpacing: "0.05em" }}>
                  Projects Delivered
                </p>
              </div>

              {/* Stat 2 – dark */}
              <div
                className="bento-card bento-card-dark"
                style={{ background: burg, padding: "28px 32px" }}
              >
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 48, fontWeight: 400, color: "#F4F1EE",
                  lineHeight: 1, marginBottom: 8,
                }}>$10M+</p>
                <p style={{ fontSize: 12, color: "rgba(244,241,238,0.58)", letterSpacing: "0.05em" }}>
                  Revenue Generated
                </p>
              </div>
            </div>
          </div>

          {/* ── RIGHT — visual card ── */}
          <div
            className="hero-visual-col bento-card bento-card-dark"
            style={{
              background: "linear-gradient(155deg, #2E1060 0%, #1E0B3A 52%, #0D0620 100%)",
              minHeight: 500,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <OrbitalVisual burg={burg} />
          </div>
        </div>

        {/* Scroll hint */}
        <div
          style={{
            marginTop: 36, opacity: 0, animation: "heroIn 0.8s ease 1.1s both",
            display: "flex", alignItems: "center", gap: 12,
            direction: isRTL ? "rtl" : "ltr",
          }}
        >
          <div style={{ width: 32, height: 1, background: burg, opacity: 0.45 }} />
          <span style={{
            fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase",
            color: textMuted, fontFamily: "'Inter', sans-serif",
          }}>
            {t.scroll}
          </span>
        </div>
      </div>
    </section>
  );
}

/* ── Orbital visual ────────────────────────────────────────────────────────── */
function OrbitalVisual({ burg }: { burg: string }) {
  const particles = [
    { top: "14%", left: "18%", size: 4, dur: 4.2, delay: "0s",   anim: "particle1" },
    { top: "22%", left: "75%", size: 3, dur: 5.5, delay: "1.1s", anim: "particle2" },
    { top: "68%", left: "28%", size: 5, dur: 4.8, delay: "0.7s", anim: "particle3" },
    { top: "58%", left: "72%", size: 3, dur: 6.0, delay: "1.9s", anim: "particle1" },
    { top: "80%", left: "55%", size: 4, dur: 5.2, delay: "0.3s", anim: "particle2" },
    { top: "38%", left: "82%", size: 2, dur: 4.5, delay: "1.5s", anim: "particle3" },
    { top: "12%", left: "55%", size: 3, dur: 5.8, delay: "2.2s", anim: "particle1" },
  ];

  return (
    <div style={{ position: "absolute", inset: 0 }}>
      {/* Floating particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute", top: p.top, left: p.left,
            width: p.size, height: p.size, borderRadius: "50%",
            background: "rgba(244,241,238,0.55)",
            animation: `${p.anim} ${p.dur}s ease-in-out ${p.delay} infinite`,
          }}
        />
      ))}

      {/* Center pivot (for rings & glow) */}
      <div style={{ position: "absolute", top: "42%", left: "50%", width: 0, height: 0 }}>

        {/* Outer glow */}
        <div style={{
          position: "absolute",
          top: -110, left: -110,
          width: 220, height: 220, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(93,50,180,0.42) 0%, rgba(45,16,96,0.12) 55%, transparent 100%)",
          animation: "pulseGlow 5.5s ease-in-out infinite",
        }} />

        {/* Ring 1 — slow CW */}
        <div style={{
          position: "absolute",
          top: -130, left: -130,
          width: 260, height: 260, borderRadius: "50%",
          border: "1px solid rgba(244,241,238,0.2)",
          animation: "orbitCW 24s linear infinite",
        }}>
          {/* Orbiting dot */}
          <div style={{
            position: "absolute", top: "50%", right: -4,
            width: 8, height: 8, borderRadius: "50%",
            background: "#F4F1EE",
            transform: "translateY(-50%)",
            boxShadow: "0 0 10px rgba(244,241,238,0.9)",
          }} />
        </div>

        {/* Ring 2 — tilted CCW (wrapper handles tilt) */}
        <div style={{
          position: "absolute",
          top: -170, left: -170,
          width: 340, height: 340,
          transform: "rotate(52deg)",
        }}>
          <div style={{
            width: "100%", height: "100%", borderRadius: "50%",
            border: "1px solid rgba(244,241,238,0.09)",
            animation: "orbitCCW 38s linear infinite",
          }}>
            <div style={{
              position: "absolute", top: -3, left: "50%",
              width: 6, height: 6, borderRadius: "50%",
              background: "#9B6DFF",
              transform: "translateX(-50%)",
              boxShadow: "0 0 8px rgba(155,109,255,0.9)",
            }} />
          </div>
        </div>

        {/* Ring 3 — large very slow CW */}
        <div style={{
          position: "absolute",
          top: -210, left: -210,
          width: 420, height: 420,
          transform: "rotate(-18deg)",
        }}>
          <div style={{
            width: "100%", height: "100%", borderRadius: "50%",
            border: "1px solid rgba(244,241,238,0.04)",
            animation: "orbitCW 58s linear infinite",
          }}>
            <div style={{
              position: "absolute", bottom: -2, left: "50%",
              width: 4, height: 4, borderRadius: "50%",
              background: "rgba(244,241,238,0.5)",
              transform: "translateX(-50%)",
            }} />
          </div>
        </div>

        {/* Center sparkle */}
        <div style={{
          position: "absolute",
          top: -12, left: -12,
          width: 24, height: 24,
          animation: "sparkle 3.8s ease-in-out infinite",
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 1.5L13.62 9.38L21.5 12L13.62 14.62L12 22.5L10.38 14.62L2.5 12L10.38 9.38L12 1.5Z"
              fill="rgba(244,241,238,0.95)"
            />
          </svg>
        </div>
      </div>

      {/* Subtle ROMA watermark */}
      <div style={{
        position: "absolute", bottom: "30%", left: "50%",
        transform: "translateX(-50%)",
        opacity: 0.06, pointerEvents: "none",
        whiteSpace: "nowrap",
      }}>
        <svg width="180" height="56" viewBox="0 0 300 110" fill="none">
          <text
            x="6" y="92"
            fontFamily="'Cormorant Garamond', serif"
            fontSize="98" fontWeight="300"
            fill="#F4F1EE" letterSpacing="2"
          >ROMA</text>
        </svg>
      </div>

      {/* Bottom glass info card */}
      <div
        className="glass"
        style={{
          position: "absolute", bottom: 22, left: 22, right: 22,
          borderRadius: 16,
          padding: "16px 22px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}
      >
        <div>
          <p style={{
            fontSize: 10, color: "rgba(244,241,238,0.48)",
            letterSpacing: "0.14em", textTransform: "uppercase",
            fontFamily: "'Inter', sans-serif", marginBottom: 4,
          }}>Innovation First</p>
          <p style={{
            fontSize: 14, color: "#F4F1EE",
            fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
          }}>
            Elevate Your Digital Presence
          </p>
        </div>
        <div style={{
          width: 36, height: 36, borderRadius: "50%",
          border: "1px solid rgba(244,241,238,0.22)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "#F4F1EE", fontSize: 16, cursor: "pointer",
          transition: "all 0.3s ease",
          flexShrink: 0,
        }}>→</div>
      </div>
    </div>
  );
}
