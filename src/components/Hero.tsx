"use client";

interface HeroProps {
  t: {
    eyebrow: string; headline: string; sub: string;
    cta1: string; cta2: string; scroll: string;
  };
  isRTL: boolean;
  textMuted: string;
  burg: string;
  onScrollToContact: () => void;
  onScrollToServices: () => void;
}

export default function Hero({ t, isRTL, textMuted, burg, onScrollToContact, onScrollToServices }: HeroProps) {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        justifyContent: "center", padding: "120px 40px 80px",
        position: "relative", overflow: "hidden",
      }}
    >
      {/* Decorative circles */}
      <div style={{
        position: "absolute", top: "10%",
        right: isRTL ? "auto" : "5%", left: isRTL ? "5%" : "auto",
        width: "45vw", maxWidth: 600, height: "70vh",
        border: `1px solid ${burg}`, opacity: 0.06,
        borderRadius: "50%", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: "20%",
        right: isRTL ? "auto" : "15%", left: isRTL ? "15%" : "auto",
        width: "20vw", maxWidth: 300, height: "35vh",
        border: `1px solid ${burg}`, opacity: 0.04,
        borderRadius: "50%", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%" }}>
        <div style={{ opacity: 0, animation: "heroIn 1s ease 0.2s both" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: burg, fontWeight: 500, marginBottom: 32 }}>
            {t.eyebrow}
          </p>
        </div>
        <div style={{ opacity: 0, animation: "heroIn 1.1s ease 0.4s both" }}>
          <h1
            className="hero-headline"
            style={{
              fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
              fontSize: "clamp(52px, 7vw, 100px)", fontWeight: 300,
              lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 36, maxWidth: 900,
            }}
          >
            {t.headline}
          </h1>
        </div>
        <div style={{ opacity: 0, animation: "heroIn 1.1s ease 0.6s both" }}>
          <p style={{ fontSize: 18, fontWeight: 300, color: textMuted, marginBottom: 56, maxWidth: 520, lineHeight: 1.7 }}>
            {t.sub}
          </p>
        </div>
        <div className="hero-ctas" style={{ opacity: 0, animation: "heroIn 1.1s ease 0.8s both", display: "flex", gap: 16, flexWrap: "wrap" }}>
          <button className="roma-btn-primary" onClick={onScrollToContact}>{t.cta1}</button>
          <button className="roma-btn-ghost" onClick={onScrollToServices}>{t.cta2}</button>
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: "absolute", bottom: 40,
        left: isRTL ? "auto" : 40, right: isRTL ? 40 : "auto",
        opacity: 0, animation: "heroIn 1s ease 1.2s both",
        display: "flex", alignItems: "center", gap: 12,
      }}>
        <div style={{ width: 40, height: 1, background: burg, opacity: 0.4 }} />
        <span style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: textMuted }}>
          {t.scroll}
        </span>
      </div>
    </section>
  );
}
