"use client";
import { useState } from "react";
import Fade from "./Fade";

/* ─────────────────────────────────────────────────────────────────────────────
   FEATURE BENTO  — 3 cards below hero
───────────────────────────────────────────────────────────────────────────── */
export function FeatureBento({ dark, burg, text, textMuted, border, surface }: any) {
  const card = dark ? "#130E24" : "#FFFFFF";
  const cardAlt = dark ? "#0F0A1E" : "#F5F0FF";

  const features = [
    {
      icon: "◈",
      title: "Innovation First",
      desc: "We don't follow trends — we architect them. Every solution pushes the boundary of what's digitally possible.",
      dark: false,
    },
    {
      icon: "◉",
      title: "Technology-Driven",
      desc: "Cutting-edge frameworks, AI-augmented workflows, and obsessive engineering discipline in every line of code.",
      dark: true,
    },
    {
      icon: "◇",
      title: "Performance-Obsessed",
      desc: "We measure success in outcomes: conversions, revenue, retention. Beauty and speed are non-negotiable.",
      dark: false,
    },
  ];

  return (
    <section style={{ padding: "0 24px 80px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div
          className="features-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}
        >
          {features.map((f, i) => (
            <Fade key={i} delay={i * 0.1}>
              <div
                className={`bento-card ${f.dark ? "bento-card-dark" : "bento-card-light"}`}
                style={{
                  background: f.dark ? burg : (i === 2 ? cardAlt : card),
                  border: f.dark ? "none" : `1px solid ${border}`,
                  padding: "40px 36px",
                  minHeight: 200,
                }}
              >
                {/* Icon */}
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: f.dark ? "rgba(255,255,255,0.09)" : (dark ? "rgba(255,255,255,0.06)" : "rgba(120,81,169,0.08)"),
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 20,
                  color: f.dark ? "rgba(244,241,238,0.85)" : burg,
                  marginBottom: 28,
                }}>
                  {f.icon}
                </div>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 24, fontWeight: 400,
                  color: f.dark ? "#F4F1EE" : text,
                  marginBottom: 14, letterSpacing: "-0.01em",
                }}>
                  {f.title}
                </h3>
                <p style={{
                  fontSize: 14, lineHeight: 1.8, fontWeight: 300,
                  color: f.dark ? "rgba(244,241,238,0.62)" : textMuted,
                }}>
                  {f.desc}
                </p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   MARQUEE BAR  — scrolling trust strip
───────────────────────────────────────────────────────────────────────────── */
export function MarqueeBar({ dark, burg }: any) {
  const bg = dark ? "#0F0A1E" : "#1A0A2E";
  const items = [
    "Website Development", "Mobile Applications", "UI/UX Design",
    "Brand Identity", "AI Solutions", "Automation", "Custom Software",
    "E-commerce", "Digital Strategy", "Website Development", "Mobile Applications",
    "UI/UX Design", "Brand Identity", "AI Solutions", "Automation",
    "Custom Software", "E-commerce", "Digital Strategy",
  ];

  return (
    <div style={{ background: bg, padding: "20px 0", overflow: "hidden" }}>
      <div className="marquee-track">
        <div className="marquee-inner">
          {items.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex", alignItems: "center", gap: 0,
                paddingRight: 56, flexShrink: 0,
              }}
            >
              <span style={{
                fontSize: 13, fontWeight: 400, letterSpacing: "0.05em",
                textTransform: "uppercase", color: "rgba(244,241,238,0.55)",
                fontFamily: "'Inter', sans-serif",
                whiteSpace: "nowrap",
              }}>
                {item}
              </span>
              <span style={{
                marginLeft: 56, width: 4, height: 4, borderRadius: "50%",
                background: burg, flexShrink: 0, opacity: 0.8,
              }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   TECH ECOSYSTEM  — dashboard-style visual section
───────────────────────────────────────────────────────────────────────────── */
export function TechEcosystem({ dark, burg, text, textMuted, border, surface }: any) {
  const card = dark ? "#130E24" : "#FFFFFF";
  const cardAlt = dark ? "#0F0A1E" : "#F5F0FF";
  const barData = [
    { label: "Web", pct: 94 }, { label: "Mobile", pct: 87 },
    { label: "AI", pct: 82 }, { label: "Brand", pct: 91 },
    { label: "Auto", pct: 78 },
  ];

  return (
    <section style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>

        <Fade>
          <p style={{
            fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
            color: burg, marginBottom: 16, fontWeight: 500,
            fontFamily: "'Inter', sans-serif",
          }}>
            Technology Ecosystem
          </p>
          <div style={{
            display: "flex", justifyContent: "space-between",
            alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 56,
          }}>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(36px, 4.2vw, 64px)",
              fontWeight: 300, lineHeight: 1.08,
              letterSpacing: "-0.022em",
              color: dark ? "#F5F0FF" : "#1A0A2E",
            }}>
              Our Digital Intelligence<br />in Real Numbers
            </h2>
            <p style={{
              color: textMuted, fontSize: 15, maxWidth: 300,
              lineHeight: 1.78, fontWeight: 300,
            }}>
              Data-driven performance across every discipline we operate in.
            </p>
          </div>
        </Fade>

        <div
          className="tech-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}
        >
          {/* Bar chart card */}
          <Fade delay={0.1}>
            <div
              className="bento-card bento-card-dark"
              style={{
                background: burg,
                padding: "40px 40px 36px",
              }}
            >
              <p style={{
                fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase",
                color: "rgba(244,241,238,0.5)", marginBottom: 28,
                fontFamily: "'Inter', sans-serif",
              }}>
                Client Satisfaction Index
              </p>
              <div style={{ display: "flex", gap: 16, alignItems: "flex-end", height: 140 }}>
                {barData.map((b, i) => (
                  <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, height: "100%" }}>
                    <div style={{
                      flex: 1, width: "100%", display: "flex",
                      flexDirection: "column", justifyContent: "flex-end",
                    }}>
                      <div style={{
                        background: "rgba(244,241,238,0.22)",
                        borderRadius: 6,
                        height: `${b.pct}%`,
                        transition: "height 1s ease",
                        position: "relative",
                        overflow: "hidden",
                      }}>
                        <div style={{
                          position: "absolute", top: 0, left: 0, right: 0,
                          height: "30%",
                          background: "rgba(244,241,238,0.12)",
                          borderRadius: "6px 6px 0 0",
                        }} />
                      </div>
                    </div>
                    <span style={{ fontSize: 10, color: "rgba(244,241,238,0.45)", letterSpacing: "0.06em" }}>
                      {b.label}
                    </span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 28, borderTop: "1px solid rgba(244,241,238,0.1)", paddingTop: 24 }}>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 40, fontWeight: 400, color: "#F4F1EE", lineHeight: 1,
                }}>98%</p>
                <p style={{ fontSize: 12, color: "rgba(244,241,238,0.5)", marginTop: 6 }}>
                  Average client retention rate
                </p>
              </div>
            </div>
          </Fade>

          {/* Right column: two stacked cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

            {/* Metrics row */}
            <Fade delay={0.15}>
              <div
                className="bento-card bento-card-light"
                style={{
                  background: card,
                  border: `1px solid ${border}`,
                  padding: "36px 36px",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 24,
                }}
              >
                {[
                  { val: "72h", label: "Average turnaround for MVPs" },
                  { val: "3×", label: "Average conversion uplift" },
                  { val: "50+", label: "Technologies mastered" },
                  { val: "24/7", label: "Support & monitoring" },
                ].map((m, i) => (
                  <div key={i}>
                    <p style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 36, fontWeight: 400, color: burg, lineHeight: 1, marginBottom: 6,
                    }}>
                      {m.val}
                    </p>
                    <p style={{ fontSize: 12, color: textMuted, lineHeight: 1.5 }}>
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            </Fade>

            {/* Ecosystem tags card */}
            <Fade delay={0.2}>
              <div
                className="bento-card bento-card-light"
                style={{
                  background: cardAlt,
                  border: `1px solid ${border}`,
                  padding: "32px 34px",
                  flex: 1,
                }}
              >
                <p style={{
                  fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase",
                  color: burg, marginBottom: 20, fontFamily: "'Inter', sans-serif", fontWeight: 500,
                }}>
                  Technology Stack
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {[
                    "Next.js", "React Native", "TypeScript", "Python",
                    "Supabase", "OpenAI", "Framer", "Figma",
                    "AWS", "Vercel", "Stripe", "n8n",
                  ].map((tag, i) => (
                    <span key={i} style={{
                      padding: "6px 14px", borderRadius: 100,
                      border: `1px solid ${border}`,
                      fontSize: 12, fontWeight: 400, color: text,
                      letterSpacing: "0.02em",
                      transition: "all 0.2s ease",
                      cursor: "default",
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   WHY ROMA  — 3-column vision section
───────────────────────────────────────────────────────────────────────────── */
export function WhyRoma({ dark, burg, text, textMuted, border, surface }: any) {
  const pillars = [
    {
      num: "01",
      title: "Relentless Craft",
      body: "We treat every pixel and every line of code as an opportunity to be exceptional. Mediocrity is not an option we consider.",
    },
    {
      num: "02",
      title: "Partnership Model",
      body: "We don't deliver and disappear. We embed ourselves in your mission, your metrics, and your long-term success story.",
    },
    {
      num: "03",
      title: "Future-Proof Thinking",
      body: "Every decision is made with the next 5 years in mind. Technology changes fast — your foundation should be built to evolve.",
    },
  ];

  return (
    <section style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <Fade>
          <p style={{
            fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
            color: burg, marginBottom: 16, fontWeight: 500,
            fontFamily: "'Inter', sans-serif",
          }}>
            Why ROMA
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(38px, 4.5vw, 68px)",
            fontWeight: 300, lineHeight: 1.08,
            letterSpacing: "-0.022em",
            color: dark ? "#F5F0FF" : "#1A0A2E",
            marginBottom: 72, maxWidth: 580,
          }}>
            Built Different, By Design
          </h2>
        </Fade>

        <div
          className="why-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0 }}
        >
          {pillars.map((p, i) => (
            <Fade key={i} delay={i * 0.1}>
              <div style={{
                padding: "40px 36px",
                borderTop: `1px solid ${border}`,
                borderRight: i < 2 ? `1px solid ${border}` : "none",
              }}>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 52, fontWeight: 300, color: burg,
                  opacity: 0.18, lineHeight: 1, marginBottom: 24,
                }}>
                  {p.num}
                </p>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 24, fontWeight: 400,
                  color: dark ? "#F5F0FF" : "#1A0A2E",
                  marginBottom: 16, letterSpacing: "-0.01em",
                }}>
                  {p.title}
                </h3>
                <p style={{
                  fontSize: 14.5, color: textMuted,
                  lineHeight: 1.82, fontWeight: 300,
                }}>
                  {p.body}
                </p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   CTA BLOCK  — full-width gradient call to action
───────────────────────────────────────────────────────────────────────────── */
export function CTABlock({ dark, burg, onScrollToContact }: any) {
  return (
    <section style={{ padding: "0 24px 100px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <Fade>
          <div
            className="bento-card bento-card-dark"
            style={{
              background: "linear-gradient(135deg, #7851A9 0%, #5A3A8C 55%, #2D1A5E 100%)",
              backgroundSize: "200% 200%",
              animation: "gradientFlow 8s ease infinite",
              padding: "80px 72px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Decorative rings */}
            <div style={{
              position: "absolute", top: "50%", left: "50%",
              width: 500, height: 500, borderRadius: "50%",
              border: "1px solid rgba(244,241,238,0.05)",
              transform: "translate(-50%,-50%)",
              pointerEvents: "none",
            }} />
            <div style={{
              position: "absolute", top: "50%", left: "50%",
              width: 700, height: 700, borderRadius: "50%",
              border: "1px solid rgba(244,241,238,0.03)",
              transform: "translate(-50%,-50%)",
              pointerEvents: "none",
            }} />

            <p style={{
              fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
              color: "rgba(244,241,238,0.5)", marginBottom: 24,
              fontFamily: "'Inter', sans-serif", fontWeight: 500,
            }}>
              Ready to Begin
            </p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(38px, 5vw, 76px)",
              fontWeight: 300, lineHeight: 1.06,
              letterSpacing: "-0.025em",
              color: "#F4F1EE",
              marginBottom: 28, maxWidth: 680, margin: "0 auto 28px",
            }}>
              Let's Build Something Extraordinary Together
            </h2>
            <p style={{
              fontSize: 16, color: "rgba(244,241,238,0.62)",
              maxWidth: 480, margin: "0 auto 48px",
              lineHeight: 1.8, fontWeight: 300,
            }}>
              Your vision deserves exceptional execution. Tell us where you want to go.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <button className="btn-ghost-inv" onClick={onScrollToContact}
                style={{
                  background: "#F5F0FF", color: "#1A0A2E",
                  border: "none", fontWeight: 500,
                }}
              >
                Start Your Project →
              </button>
              <button className="btn-ghost-inv" onClick={onScrollToContact}>
                Schedule a Call
              </button>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   ABOUT
───────────────────────────────────────────────────────────────────────────── */
export function About({ t, text, textMuted, border, burg, dark, surface }: any) {
  return (
    <section id="about" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <Fade>
          <p style={{
            fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
            color: burg, marginBottom: 20, fontWeight: 500,
            fontFamily: "'Inter', sans-serif",
          }}>
            {t.label}
          </p>
        </Fade>

        <div
          className="about-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}
        >
          <Fade delay={0.1}>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(36px, 4.2vw, 64px)",
              fontWeight: 300, lineHeight: 1.1,
              letterSpacing: "-0.022em",
              color: dark ? "#F5F0FF" : "#1A0A2E",
            }}>
              {t.headline}
            </h2>
          </Fade>

          <div>
            <Fade delay={0.2}>
              <p style={{
                fontSize: 16, lineHeight: 1.88, fontWeight: 300,
                color: textMuted, marginBottom: 48,
              }}>
                {t.body}
              </p>
            </Fade>

            <Fade delay={0.28}>
              <div style={{ marginBottom: 36 }}>
                <p style={{
                  fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase",
                  color: burg, marginBottom: 12, fontWeight: 500,
                  fontFamily: "'Inter', sans-serif",
                }}>
                  Mission
                </p>
                <p style={{ fontSize: 15, lineHeight: 1.75, fontWeight: 300, color: text }}>
                  {t.mission}
                </p>
              </div>
            </Fade>

            <Fade delay={0.34}>
              <div style={{ marginBottom: 44 }}>
                <p style={{
                  fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase",
                  color: burg, marginBottom: 12, fontWeight: 500,
                  fontFamily: "'Inter', sans-serif",
                }}>
                  Vision
                </p>
                <p style={{ fontSize: 15, lineHeight: 1.75, fontWeight: 300, color: text }}>
                  {t.vision}
                </p>
              </div>
            </Fade>

            <Fade delay={0.4}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {t.values.map((v: string, i: number) => (
                  <span key={i} style={{
                    border: `1px solid ${border}`,
                    padding: "8px 18px", fontSize: 12,
                    letterSpacing: "0.08em", textTransform: "uppercase",
                    fontWeight: 500, color: burg,
                    borderRadius: 100,
                    fontFamily: "'Inter', sans-serif",
                  }}>
                    {v}
                  </span>
                ))}
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   PORTFOLIO
───────────────────────────────────────────────────────────────────────────── */
export function Portfolio({ t, textMuted, burg, dark, border }: any) {
  const card = dark ? "#130E24" : "#FFFFFF";

  return (
    <section id="portfolio" style={{ padding: "100px 24px", background: dark ? "#0A071A" : "#F5F0FF" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <Fade>
          <p style={{
            fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
            color: burg, marginBottom: 20, fontWeight: 500,
            fontFamily: "'Inter', sans-serif",
          }}>
            {t.label}
          </p>
        </Fade>
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 56,
        }}>
          <Fade delay={0.1}>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(38px, 4.5vw, 68px)",
              fontWeight: 300, lineHeight: 1.08, letterSpacing: "-0.022em",
              color: dark ? "#F5F0FF" : "#1A0A2E",
            }}>
              {t.title}
            </h2>
          </Fade>
          <Fade delay={0.2}>
            <p style={{ color: textMuted, fontSize: 15, maxWidth: 280, lineHeight: 1.78 }}>
              {t.sub}
            </p>
          </Fade>
        </div>

        <div
          className="portfolio-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}
        >
          {t.items.map((p: any, i: number) => (
            <Fade key={i} delay={i * 0.1}>
              <div
                className="portfolio-card bento-card"
                style={{
                  background: card,
                  border: `1px solid ${border}`,
                  overflow: "hidden", cursor: "pointer",
                }}
              >
                {/* Visual block */}
                <div style={{
                  height: i % 2 === 0 ? 280 : 220,
                  background: dark
                    ? `linear-gradient(140deg, #3A1A7A ${i * 8}%, #0A071A)`
                    : `linear-gradient(140deg, #e8ddd4, #d4c4b8)`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  position: "relative", overflow: "hidden",
                }}>
                  <span style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 96, color: burg, opacity: 0.1, fontWeight: 300,
                  }}>
                    {p.name[0]}
                  </span>

                  {/* Hover overlay */}
                  <div
                    className="portfolio-overlay"
                    style={{
                      position: "absolute", inset: 0,
                      background: `linear-gradient(to top, ${burg}ee 0%, ${burg}55 55%, transparent 100%)`,
                      opacity: 0, transition: "opacity 0.4s ease",
                      display: "flex", flexDirection: "column",
                      justifyContent: "flex-end", padding: 32,
                    }}
                  >
                    <p style={{
                      fontSize: 11, color: "rgba(244,241,238,0.68)",
                      letterSpacing: "0.14em", textTransform: "uppercase",
                      marginBottom: 8, fontFamily: "'Inter', sans-serif",
                    }}>
                      {p.result}
                    </p>
                    <h3 style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 26, fontWeight: 400, color: "#F4F1EE",
                    }}>
                      {p.name}
                    </h3>
                  </div>
                </div>

                {/* Card body */}
                <div style={{ padding: "24px 28px 28px" }}>
                  <p style={{
                    fontSize: 11, color: burg, letterSpacing: "0.14em",
                    textTransform: "uppercase", marginBottom: 8,
                    fontWeight: 500, fontFamily: "'Inter', sans-serif",
                  }}>
                    {p.cat}
                  </p>
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 22, fontWeight: 400,
                    color: dark ? "#F5F0FF" : "#1A0A2E",
                    marginBottom: 8,
                  }}>
                    {p.name}
                  </h3>
                  <p style={{ fontSize: 13.5, color: textMuted, lineHeight: 1.72, fontWeight: 300 }}>
                    {p.desc}
                  </p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   PROCESS
───────────────────────────────────────────────────────────────────────────── */
export function Process({ t, textMuted, border, burg, dark }: any) {
  return (
    <section id="process" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <Fade>
          <p style={{
            fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
            color: burg, marginBottom: 20, fontWeight: 500,
            fontFamily: "'Inter', sans-serif",
          }}>
            {t.label}
          </p>
        </Fade>
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 72,
        }}>
          <Fade delay={0.1}>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(38px, 4.5vw, 68px)",
              fontWeight: 300, lineHeight: 1.08, letterSpacing: "-0.022em",
              color: dark ? "#F5F0FF" : "#1A0A2E",
            }}>
              {t.title}
            </h2>
          </Fade>
          <Fade delay={0.2}>
            <p style={{ color: textMuted, fontSize: 15, maxWidth: 300, lineHeight: 1.78 }}>
              {t.sub}
            </p>
          </Fade>
        </div>

        <div
          className="process-steps"
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0 }}
        >
          {t.steps.map((step: any, i: number) => (
            <Fade key={i} delay={i * 0.07}>
              <div style={{
                padding: "36px 28px 40px",
                borderTop: `1px solid ${border}`,
                borderRight: (i % 4 < 3) ? `1px solid ${border}` : "none",
              }}>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 52, fontWeight: 300, color: burg,
                  opacity: 0.16, lineHeight: 1, marginBottom: 20,
                }}>
                  {step.n}
                </p>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 19, fontWeight: 400,
                  color: dark ? "#F5F0FF" : "#1A0A2E",
                  marginBottom: 12,
                }}>
                  {step.name}
                </h3>
                <p style={{
                  fontSize: 13.5, color: textMuted,
                  lineHeight: 1.78, fontWeight: 300,
                }}>
                  {step.desc}
                </p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   TESTIMONIALS
───────────────────────────────────────────────────────────────────────────── */
export function Testimonials({ t, burg }: any) {
  return (
    <section style={{ padding: "100px 24px", background: burg }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <Fade>
          <p style={{
            fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
            color: "rgba(244,241,238,0.48)", marginBottom: 20, fontWeight: 500,
            fontFamily: "'Inter', sans-serif",
          }}>
            {t.label}
          </p>
        </Fade>
        <Fade delay={0.1}>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(36px, 4.2vw, 60px)",
            fontWeight: 300, color: "#F4F1EE",
            lineHeight: 1.1, marginBottom: 64, letterSpacing: "-0.022em",
          }}>
            {t.title}
          </h2>
        </Fade>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 2,
        }}>
          {t.items.map((item: any, i: number) => (
            <Fade key={i} delay={i * 0.1}>
              <div
                className="glass"
                style={{ padding: "44px 40px", borderRadius: 0 }}
              >
                <p style={{
                  fontSize: 16, lineHeight: 1.88, color: "rgba(244,241,238,0.82)",
                  fontWeight: 300, fontStyle: "italic",
                  fontFamily: "'Cormorant Garamond', serif",
                  marginBottom: 36,
                }}>
                  "{item.quote}"
                </p>
                <div style={{ borderTop: "1px solid rgba(244,241,238,0.14)", paddingTop: 24 }}>
                  <p style={{ fontWeight: 500, color: "#F4F1EE", fontSize: 14 }}>
                    {item.name}
                  </p>
                  <p style={{
                    fontSize: 12, color: "rgba(244,241,238,0.48)", marginTop: 4,
                    letterSpacing: "0.04em", fontFamily: "'Inter', sans-serif",
                  }}>
                    {item.role}
                  </p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   PRICING
───────────────────────────────────────────────────────────────────────────── */
export function Pricing({
  t, surface, text, textMuted, border, burg, isRTL, onScrollToContact, dark,
}: any) {
  return (
    <section id="pricing" style={{ padding: "100px 24px", background: dark ? "#0F0A1E" : "#F5F0FF" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <Fade>
          <p style={{
            fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
            color: burg, marginBottom: 20, fontWeight: 500,
            fontFamily: "'Inter', sans-serif",
          }}>
            {t.label}
          </p>
        </Fade>
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 56,
        }}>
          <Fade delay={0.1}>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(38px, 4.5vw, 68px)",
              fontWeight: 300, lineHeight: 1.08, letterSpacing: "-0.022em",
              color: dark ? "#F5F0FF" : "#1A0A2E",
            }}>
              {t.title}
            </h2>
          </Fade>
          <Fade delay={0.2}>
            <p style={{ color: textMuted, fontSize: 15, maxWidth: 300, lineHeight: 1.78 }}>
              {t.sub}
            </p>
          </Fade>
        </div>

        <div
          className="pricing-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}
        >
          {t.plans.map((plan: any, i: number) => (
            <Fade key={i} delay={i * 0.1}>
              <div
                className={`pricing-card bento-card ${plan.highlight ? "bento-card-dark" : "bento-card-light"}`}
                style={{
                  background: plan.highlight ? burg : surface,
                  padding: "44px 38px 40px",
                  border: plan.highlight ? "none" : `1px solid ${border}`,
                  position: "relative", overflow: "hidden",
                }}
              >
                {plan.highlight && (
                  <div style={{
                    position: "absolute", top: 22, right: 22,
                    fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase",
                    color: "rgba(244,241,238,0.55)",
                    background: "rgba(0,0,0,0.18)", padding: "4px 12px",
                    borderRadius: 100, fontFamily: "'Inter', sans-serif",
                  }}>
                    Most Popular
                  </div>
                )}

                <p style={{
                  fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase",
                  color: plan.highlight ? "rgba(244,241,238,0.58)" : textMuted,
                  marginBottom: 14, fontWeight: 500, fontFamily: "'Inter', sans-serif",
                }}>
                  {plan.name}
                </p>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 38, fontWeight: 400,
                  color: plan.highlight ? "#F4F1EE" : text,
                  marginBottom: 14,
                }}>
                  {plan.price}
                </p>
                <p style={{
                  fontSize: 14, lineHeight: 1.72, fontWeight: 300,
                  color: plan.highlight ? "rgba(244,241,238,0.65)" : textMuted,
                  marginBottom: 32,
                }}>
                  {plan.desc}
                </p>

                <div style={{
                  borderTop: `1px solid ${plan.highlight ? "rgba(244,241,238,0.14)" : border}`,
                  paddingTop: 28, marginBottom: 36,
                }}>
                  {plan.features.map((f: string, fi: number) => (
                    <div key={fi} style={{
                      display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 12,
                    }}>
                      <span style={{
                        color: plan.highlight ? "rgba(244,241,238,0.45)" : burg,
                        fontSize: 12, marginTop: 2, flexShrink: 0,
                      }}>
                        —
                      </span>
                      <span style={{
                        fontSize: 13.5, lineHeight: 1.55, fontWeight: 300,
                        color: plan.highlight ? "rgba(244,241,238,0.82)" : text,
                      }}>
                        {f}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={onScrollToContact}
                  style={{
                    width: "100%", padding: "14px",
                    fontSize: 12, letterSpacing: "0.1em",
                    textTransform: "uppercase", fontWeight: 500,
                    cursor: "pointer",
                    borderRadius: 100,
                    border: `1px solid ${plan.highlight ? "rgba(244,241,238,0.35)" : burg}`,
                    background: plan.highlight ? "rgba(244,241,238,0.08)" : "transparent",
                    color: plan.highlight ? "#F4F1EE" : burg,
                    transition: "all 0.3s", fontFamily: "'Inter', sans-serif",
                  }}
                >
                  Start Project
                </button>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   CONTACT
───────────────────────────────────────────────────────────────────────────── */
export function Contact({ t, text, textMuted, border, burg, dark }: any) {
  const [formData, setFormData] = useState({
    name: "", email: "", company: "", type: "", budget: "", message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (formData.name && formData.email) {
      setSent(true);
      setFormData({ name: "", email: "", company: "", type: "", budget: "", message: "" });
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "14px 0",
    background: "transparent", border: "none",
    borderBottom: `1px solid ${border}`,
    fontSize: 15, color: text,
    fontFamily: "'Inter', sans-serif", fontWeight: 300,
    transition: "border-color 0.2s",
  };

  return (
    <section id="contact" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <Fade>
          <p style={{
            fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
            color: burg, marginBottom: 20, fontWeight: 500,
            fontFamily: "'Inter', sans-serif",
          }}>
            {t.label}
          </p>
        </Fade>

        <div
          className="contact-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}
        >
          {/* Left — info */}
          <div>
            <Fade delay={0.1}>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(38px, 4.5vw, 68px)",
                fontWeight: 300, lineHeight: 1.08, letterSpacing: "-0.022em",
                color: dark ? "#F5F0FF" : "#1A0A2E", marginBottom: 24,
              }}>
                {t.title}
              </h2>
            </Fade>
            <Fade delay={0.2}>
              <p style={{
                fontSize: 16, fontWeight: 300, color: textMuted,
                lineHeight: 1.88, marginBottom: 56,
              }}>
                {t.sub}
              </p>
            </Fade>
            <Fade delay={0.3}>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { icon: "✉", label: "Email", val: "hello@roma.agency" },
                  { icon: "⊞", label: "WhatsApp", val: "+1 (555) 000-0000" },
                  { icon: "◈", label: "LinkedIn", val: "linkedin.com/company/roma" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: 12,
                      border: `1px solid ${border}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: burg, fontSize: 16, flexShrink: 0,
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <p style={{
                        fontSize: 11, color: textMuted, letterSpacing: "0.1em",
                        textTransform: "uppercase", marginBottom: 2,
                        fontFamily: "'Inter', sans-serif",
                      }}>
                        {item.label}
                      </p>
                      <p style={{ fontSize: 14, fontWeight: 400, color: text }}>
                        {item.val}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Fade>
          </div>

          {/* Right — form */}
          <Fade delay={0.2}>
            {sent ? (
              <div style={{
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                height: 400, textAlign: "center",
              }}>
                <div style={{ fontSize: 36, color: burg, marginBottom: 24 }}>✓</div>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 32, fontWeight: 400,
                  color: dark ? "#F5F0FF" : "#1A0A2E",
                  marginBottom: 16,
                }}>
                  Message Sent
                </h3>
                <p style={{ color: textMuted, fontSize: 15 }}>
                  We'll be in touch within 24 hours.
                </p>
                <button
                  onClick={() => setSent(false)}
                  style={{
                    marginTop: 32, fontSize: 12, letterSpacing: "0.1em",
                    textTransform: "uppercase", color: burg,
                    background: "none", border: "none", cursor: "pointer",
                    fontFamily: "'Inter', sans-serif",
                    textDecoration: "underline", textUnderlineOffset: 4,
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  { key: "name",    label: t.form.name,    type: "text" },
                  { key: "email",   label: t.form.email,   type: "email" },
                  { key: "company", label: t.form.company, type: "text" },
                ].map((field) => (
                  <input
                    key={field.key}
                    type={field.type}
                    placeholder={field.label}
                    value={formData[field.key as keyof typeof formData]}
                    onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderBottomColor = burg)}
                    onBlur={(e)  => (e.target.style.borderBottomColor = border)}
                  />
                ))}

                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  style={{
                    ...inputStyle,
                    color: formData.type ? text : textMuted,
                    appearance: "none", cursor: "pointer",
                  }}
                >
                  <option value="" disabled>{t.form.type}</option>
                  {t.form.types.map((tp: string, i: number) => (
                    <option key={i} value={tp} style={{ color: "#1A0A2E" }}>{tp}</option>
                  ))}
                </select>

                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  style={{
                    ...inputStyle,
                    color: formData.budget ? text : textMuted,
                    appearance: "none", cursor: "pointer",
                  }}
                >
                  <option value="" disabled>{t.form.budget}</option>
                  {t.form.budgets.map((b: string, i: number) => (
                    <option key={i} value={b} style={{ color: "#1A0A2E" }}>{b}</option>
                  ))}
                </select>

                <textarea
                  placeholder={t.form.message}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  style={{
                    ...inputStyle,
                    resize: "none",
                  }}
                  onFocus={(e) => (e.target.style.borderBottomColor = burg)}
                  onBlur={(e)  => (e.target.style.borderBottomColor = border)}
                />

                <button
                  className="btn-primary"
                  onClick={handleSubmit}
                  style={{ marginTop: 8, alignSelf: "flex-start" }}
                >
                  {t.form.send} →
                </button>
              </div>
            )}
          </Fade>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────────────────────────────────────── */
export function Footer({ t, lang, onLangChange, navLabels, burg }: any) {
  const sparkle = "M 97,46 L 98.2,50.8 L 103,52 L 98.2,53.2 L 97,58 L 95.8,53.2 L 91,52 L 95.8,50.8 Z";

  return (
    <footer style={{ background: "#0C0818", color: "#F5F5F5", padding: "72px 24px 40px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div
          className="footer-grid"
          style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 60, marginBottom: 64 }}
        >
          {/* Brand column */}
          <div>
            <svg width={108} height={52} viewBox="0 0 300 140" fill="none">
              <text x="6" y="92" fontFamily="'Bodoni Moda','Cormorant Garamond',serif"
                fontSize="98" fontWeight="300" fill="#F4F1EE" letterSpacing="2">ROMA</text>
              <circle cx="97" cy="52" r="36" stroke="#F4F1EE" strokeWidth="0.75" fill="none" opacity="0.25" />
              <path d={sparkle} fill="#F4F1EE" opacity="0.25" />
              <text x="153" y="128" fontFamily="'Inter',sans-serif" fontSize="12" fontWeight="400"
                fill="#F4F1EE" letterSpacing="6" textAnchor="middle" opacity="0.35">BY RFA</text>
            </svg>
            <p style={{
              fontSize: 14, color: "rgba(245,245,245,0.36)", lineHeight: 1.88,
              marginTop: 28, fontWeight: 300, maxWidth: 280,
            }}>
              {t.tagline}
            </p>
          </div>

          {[
            {
              title: "Services",
              links: ["Website Development", "Mobile Apps", "UI/UX Design", "Branding", "AI Solutions"],
            },
            {
              title: "Company",
              links: [navLabels.about, navLabels.portfolio, navLabels.process, navLabels.pricing, navLabels.contact],
            },
            {
              title: "Connect",
              links: ["hello@roma.agency", "WhatsApp", "LinkedIn", "Instagram", "Behance"],
            },
          ].map((col, i) => (
            <div key={i}>
              <p style={{
                fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase",
                color: "rgba(245,245,245,0.28)", marginBottom: 24, fontWeight: 500,
                fontFamily: "'Inter', sans-serif",
              }}>
                {col.title}
              </p>
              {col.links.map((link, li) => (
                <p
                  key={li}
                  style={{
                    fontSize: 13.5, color: "rgba(245,245,245,0.45)", marginBottom: 12,
                    fontWeight: 300, cursor: "pointer", transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#F5F5F5")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(245,245,245,0.45)")}
                >
                  {link}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Footer bottom */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          paddingTop: 32,
          display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: 16,
        }}>
          <p style={{ fontSize: 12, color: "rgba(245,245,245,0.22)" }}>
            © {new Date().getFullYear()} ROMA. {t.rights}
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            {(["en", "fr", "ar"] as const).map((l) => (
              <button
                key={l}
                onClick={() => onLangChange(l)}
                style={{
                  fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase",
                  background: "none", border: "none",
                  color: lang === l ? "#F5F5F5" : "rgba(245,245,245,0.28)",
                  cursor: "pointer", fontWeight: lang === l ? 500 : 300,
                  fontFamily: "'Inter', sans-serif",
                  transition: "color 0.2s",
                }}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
