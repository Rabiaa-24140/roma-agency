"use client";
import Fade from "./Fade";

// ─── ABOUT ─────────────────────────────────────────────────────────────────────
export function About({ t, text, textMuted, border, burg }: any) {
  return (
    <section id="about" style={{ padding: "100px 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Fade><p style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: burg, marginBottom: 20, fontWeight: 500 }}>{t.label}</p></Fade>
        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          <Fade delay={0.1}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 4vw, 64px)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.02em" }}>{t.headline}</h2>
          </Fade>
          <div>
            <Fade delay={0.2}><p style={{ fontSize: 16, lineHeight: 1.85, fontWeight: 300, color: textMuted, marginBottom: 48 }}>{t.body}</p></Fade>
            <Fade delay={0.3}>
              <div style={{ marginBottom: 40 }}>
                <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: burg, marginBottom: 12, fontWeight: 500 }}>Mission</p>
                <p style={{ fontSize: 15, lineHeight: 1.7, fontWeight: 300 }}>{t.mission}</p>
              </div>
            </Fade>
            <Fade delay={0.35}>
              <div style={{ marginBottom: 48 }}>
                <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: burg, marginBottom: 12, fontWeight: 500 }}>Vision</p>
                <p style={{ fontSize: 15, lineHeight: 1.7, fontWeight: 300 }}>{t.vision}</p>
              </div>
            </Fade>
            <Fade delay={0.4}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                {t.values.map((v: string, i: number) => (
                  <span key={i} style={{ border: `1px solid ${border}`, padding: "8px 20px", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500, color: burg }}>{v}</span>
                ))}
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PORTFOLIO ─────────────────────────────────────────────────────────────────
export function Portfolio({ t, surfaceAlt, textMuted, burg, dark }: any) {
  return (
    <section id="portfolio" style={{ padding: "100px 40px", background: surfaceAlt }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Fade><p style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: burg, marginBottom: 20, fontWeight: 500 }}>{t.label}</p></Fade>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 64 }}>
          <Fade delay={0.1}><h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(40px, 5vw, 72px)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.02em" }}>{t.title}</h2></Fade>
          <Fade delay={0.2}><p style={{ color: textMuted, fontSize: 15, maxWidth: 280, lineHeight: 1.7 }}>{t.sub}</p></Fade>
        </div>
        <div className="portfolio-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
          {t.items.map((p: any, i: number) => (
            <Fade key={i} delay={i * 0.1}>
              <div className="portfolio-card" style={{ position: "relative", background: dark ? "#1C1C1C" : "#EDE8E0", overflow: "hidden", cursor: "pointer" }}>
                <div style={{ height: i % 2 === 0 ? 320 : 260, background: dark ? `linear-gradient(135deg, #1a0d0f ${i * 10}%, #0d0d0d)` : `linear-gradient(135deg, #e8ddd4, #d4c8bc)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 72, color: burg, opacity: 0.12, fontWeight: 300 }}>{p.name[0]}</span>
                </div>
                <div className="portfolio-overlay" style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${burg}ee 0%, ${burg}44 60%, transparent 100%)`, opacity: 0, transition: "opacity 0.4s ease", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 32 }}>
                  <p style={{ fontSize: 11, color: "rgba(247,243,238,0.7)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>{p.result}</p>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 400, color: "#F7F3EE" }}>{p.name}</h3>
                </div>
                <div style={{ padding: "24px 28px" }}>
                  <p style={{ fontSize: 11, color: burg, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8, fontWeight: 500 }}>{p.cat}</p>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 400, marginBottom: 8 }}>{p.name}</h3>
                  <p style={{ fontSize: 13, color: textMuted, lineHeight: 1.6 }}>{p.desc}</p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PROCESS ───────────────────────────────────────────────────────────────────
export function Process({ t, textMuted, border, burg }: any) {
  return (
    <section id="process" style={{ padding: "100px 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Fade><p style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: burg, marginBottom: 20, fontWeight: 500 }}>{t.label}</p></Fade>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 80 }}>
          <Fade delay={0.1}><h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(40px, 5vw, 72px)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.02em" }}>{t.title}</h2></Fade>
          <Fade delay={0.2}><p style={{ color: textMuted, fontSize: 15, maxWidth: 300, lineHeight: 1.7 }}>{t.sub}</p></Fade>
        </div>
        <div className="process-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0 }}>
          {t.steps.map((step: any, i: number) => (
            <Fade key={i} delay={i * 0.07}>
              <div style={{ padding: "36px 32px", borderTop: `1px solid ${border}`, borderRight: (i % 4 < 3) ? `1px solid ${border}` : "none" }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 48, fontWeight: 300, color: burg, opacity: 0.15, marginBottom: 20, lineHeight: 1 }}>{step.n}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 400, marginBottom: 12 }}>{step.name}</h3>
                <p style={{ fontSize: 13, color: textMuted, lineHeight: 1.75, fontWeight: 300 }}>{step.desc}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ──────────────────────────────────────────────────────────────
export function Testimonials({ t, burg }: any) {
  return (
    <section style={{ padding: "80px 40px", background: burg }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Fade><p style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(247,243,238,0.5)", marginBottom: 20, fontWeight: 500 }}>{t.label}</p></Fade>
        <Fade delay={0.1}><h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 4vw, 60px)", fontWeight: 300, color: "#F7F3EE", lineHeight: 1.1, marginBottom: 64, letterSpacing: "-0.02em" }}>{t.title}</h2></Fade>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 2 }}>
          {t.items.map((item: any, i: number) => (
            <Fade key={i} delay={i * 0.1}>
              <div style={{ background: "rgba(0,0,0,0.15)", padding: "48px 40px" }}>
                <p style={{ fontSize: 16, lineHeight: 1.85, color: "rgba(247,243,238,0.85)", fontWeight: 300, fontStyle: "italic", fontFamily: "'Cormorant Garamond', serif", marginBottom: 36 }}>"{item.quote}"</p>
                <div style={{ borderTop: "1px solid rgba(247,243,238,0.15)", paddingTop: 24 }}>
                  <p style={{ fontWeight: 500, color: "#F7F3EE", fontSize: 14 }}>{item.name}</p>
                  <p style={{ fontSize: 12, color: "rgba(247,243,238,0.5)", marginTop: 4, letterSpacing: "0.05em" }}>{item.role}</p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PRICING ───────────────────────────────────────────────────────────────────
export function Pricing({ t, surfaceAlt, surface, text, textMuted, border, burg, isRTL, onScrollToContact }: any) {
  return (
    <section id="pricing" style={{ padding: "100px 40px", background: surfaceAlt }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Fade><p style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: burg, marginBottom: 20, fontWeight: 500 }}>{t.label}</p></Fade>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 64 }}>
          <Fade delay={0.1}><h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(40px, 5vw, 72px)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.02em" }}>{t.title}</h2></Fade>
          <Fade delay={0.2}><p style={{ color: textMuted, fontSize: 15, maxWidth: 300, lineHeight: 1.7 }}>{t.sub}</p></Fade>
        </div>
        <div className="pricing-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {t.plans.map((plan: any, i: number) => (
            <Fade key={i} delay={i * 0.1}>
              <div className="pricing-card" style={{ background: plan.highlight ? burg : surface, padding: "48px 40px", border: plan.highlight ? "none" : `1px solid ${border}`, transition: "transform 0.3s ease", position: "relative", overflow: "hidden" }}>
                {plan.highlight && (
                  <div style={{ position: "absolute", top: 24, right: isRTL ? "auto" : 24, left: isRTL ? 24 : "auto", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(247,243,238,0.6)", background: "rgba(0,0,0,0.2)", padding: "4px 12px" }}>Most Popular</div>
                )}
                <p style={{ fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", color: plan.highlight ? "rgba(247,243,238,0.6)" : textMuted, marginBottom: 16, fontWeight: 500 }}>{plan.name}</p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 36, fontWeight: 400, color: plan.highlight ? "#F7F3EE" : text, marginBottom: 16 }}>{plan.price}</p>
                <p style={{ fontSize: 14, color: plan.highlight ? "rgba(247,243,238,0.7)" : textMuted, lineHeight: 1.7, marginBottom: 36, fontWeight: 300 }}>{plan.desc}</p>
                <div style={{ borderTop: `1px solid ${plan.highlight ? "rgba(247,243,238,0.15)" : border}`, paddingTop: 32, marginBottom: 40 }}>
                  {plan.features.map((f: string, fi: number) => (
                    <div key={fi} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 14 }}>
                      <span style={{ color: plan.highlight ? "rgba(247,243,238,0.5)" : burg, fontSize: 12, marginTop: 2, flexShrink: 0 }}>—</span>
                      <span style={{ fontSize: 13, color: plan.highlight ? "rgba(247,243,238,0.8)" : text, lineHeight: 1.5, fontWeight: 300 }}>{f}</span>
                    </div>
                  ))}
                </div>
                <button onClick={onScrollToContact} style={{ width: "100%", padding: "14px", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 500, cursor: "pointer", border: `1px solid ${plan.highlight ? "rgba(247,243,238,0.4)" : burg}`, background: plan.highlight ? "rgba(255,255,255,0.08)" : "transparent", color: plan.highlight ? "#F7F3EE" : burg, transition: "all 0.3s", fontFamily: "'Inter', sans-serif" }}>
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

// ─── CONTACT ───────────────────────────────────────────────────────────────────
export function Contact({ t, text, textMuted, border, burg }: any) {
  const [formData, setFormData] = (require("react") as any).useState({ name: "", email: "", company: "", type: "", budget: "", message: "" });
  const [sent, setSent] = (require("react") as any).useState(false);

  const handleSubmit = () => {
    if (formData.name && formData.email) {
      setSent(true);
      setFormData({ name: "", email: "", company: "", type: "", budget: "", message: "" });
    }
  };

  return (
    <section id="contact" style={{ padding: "100px 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Fade><p style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: burg, marginBottom: 20, fontWeight: 500 }}>{t.label}</p></Fade>
        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
          <div>
            <Fade delay={0.1}><h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(40px, 5vw, 72px)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 24 }}>{t.title}</h2></Fade>
            <Fade delay={0.2}><p style={{ fontSize: 16, fontWeight: 300, color: textMuted, lineHeight: 1.85, marginBottom: 56 }}>{t.sub}</p></Fade>
            <Fade delay={0.3}>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[{ icon: "✉", label: "Email", val: "hello@roma.agency" }, { icon: "⊞", label: "WhatsApp", val: "+1 (555) 000-0000" }, { icon: "◈", label: "LinkedIn", val: "linkedin.com/company/roma" }].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <div style={{ width: 44, height: 44, border: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center", color: burg, fontSize: 16, flexShrink: 0 }}>{item.icon}</div>
                    <div>
                      <p style={{ fontSize: 11, color: textMuted, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 2 }}>{item.label}</p>
                      <p style={{ fontSize: 14, fontWeight: 400 }}>{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Fade>
          </div>

          <Fade delay={0.2}>
            {sent ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: 400, textAlign: "center" }}>
                <div style={{ fontSize: 40, color: burg, marginBottom: 24 }}>✓</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 32, fontWeight: 400, marginBottom: 16 }}>Message Sent</h3>
                <p style={{ color: textMuted, fontSize: 15 }}>We'll be in touch within 24 hours.</p>
                <button onClick={() => setSent(false)} style={{ marginTop: 32, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: burg, background: "none", border: "none", cursor: "pointer", fontFamily: "'Inter', sans-serif", textDecoration: "underline", textUnderlineOffset: 4 }}>
                  Send another message
                </button>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {[{ key: "name", label: t.form.name, type: "text" }, { key: "email", label: t.form.email, type: "email" }, { key: "company", label: t.form.company, type: "text" }].map((field) => (
                  <input key={field.key} type={field.type} placeholder={field.label} value={formData[field.key as keyof typeof formData]} onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })} style={{ width: "100%", padding: "14px 0", background: "transparent", border: "none", borderBottom: `1px solid ${border}`, fontSize: 15, color: text, fontFamily: "'Inter', sans-serif", fontWeight: 300 }} onFocus={(e) => (e.target.style.borderBottomColor = burg)} onBlur={(e) => (e.target.style.borderBottomColor = border)} />
                ))}
                <select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })} style={{ width: "100%", padding: "14px 0", background: "transparent", border: "none", borderBottom: `1px solid ${border}`, fontSize: 15, color: formData.type ? text : textMuted, fontFamily: "'Inter', sans-serif", fontWeight: 300, appearance: "none", cursor: "pointer" }}>
                  <option value="" disabled>{t.form.type}</option>
                  {t.form.types.map((tp: string, i: number) => <option key={i} value={tp} style={{ color: "#1B1B1B" }}>{tp}</option>)}
                </select>
                <select value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} style={{ width: "100%", padding: "14px 0", background: "transparent", border: "none", borderBottom: `1px solid ${border}`, fontSize: 15, color: formData.budget ? text : textMuted, fontFamily: "'Inter', sans-serif", fontWeight: 300, appearance: "none", cursor: "pointer" }}>
                  <option value="" disabled>{t.form.budget}</option>
                  {t.form.budgets.map((b: string, i: number) => <option key={i} value={b} style={{ color: "#1B1B1B" }}>{b}</option>)}
                </select>
                <textarea placeholder={t.form.message} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={4} style={{ width: "100%", padding: "14px 0", background: "transparent", border: "none", borderBottom: `1px solid ${border}`, fontSize: 15, color: text, fontFamily: "'Inter', sans-serif", fontWeight: 300, resize: "none" }} onFocus={(e) => (e.target.style.borderBottomColor = burg)} onBlur={(e) => (e.target.style.borderBottomColor = border)} />
                <button className="roma-btn-primary" onClick={handleSubmit} style={{ marginTop: 8, width: "fit-content" }}>{t.form.send}</button>
              </div>
            )}
          </Fade>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ────────────────────────────────────────────────────────────────────
export function Footer({ t, lang, onLangChange, navLabels }: any) {
  return (
    <footer style={{ background: "#111111", color: "#F5F5F5", padding: "64px 40px 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 60, marginBottom: 60 }}>
          <div>
            <svg width={100} height={45} viewBox="0 0 280 110" fill="none">
              <text x="10" y="90" fontFamily="'Cormorant Garamond', serif" fontSize="96" fontWeight="300" fill="#F7F3EE" letterSpacing="6">ROMA</text>
              <circle cx="85" cy="50" r="32" stroke="#F7F3EE" strokeWidth="1" fill="none" opacity="0.3" />
            </svg>
            <p style={{ fontSize: 14, color: "rgba(245,245,245,0.4)", lineHeight: 1.8, marginTop: 24, fontWeight: 300, maxWidth: 280 }}>{t.tagline}</p>
          </div>
          {[
            { title: "Services", links: ["Website Development", "Mobile Apps", "UI/UX Design", "Branding", "AI Solutions"] },
            { title: "Company", links: [navLabels.about, navLabels.portfolio, navLabels.process, navLabels.pricing, navLabels.contact] },
            { title: "Contact", links: ["hello@roma.agency", "WhatsApp", "LinkedIn", "Instagram", "Behance"] },
          ].map((col, i) => (
            <div key={i}>
              <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(245,245,245,0.3)", marginBottom: 24, fontWeight: 500 }}>{col.title}</p>
              {col.links.map((link, li) => (
                <p key={li} style={{ fontSize: 13, color: "rgba(245,245,245,0.5)", marginBottom: 12, fontWeight: 300, cursor: "pointer", transition: "color 0.2s" }} onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#F5F5F5")} onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(245,245,245,0.5)")}>{link}</p>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 32, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <p style={{ fontSize: 12, color: "rgba(245,245,245,0.25)" }}>© {new Date().getFullYear()} ROMA Agency. {t.rights}</p>
          <div style={{ display: "flex", gap: 20 }}>
            {["en", "fr", "ar"].map((l) => (
              <button key={l} onClick={() => onLangChange(l)} style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", background: "none", border: "none", color: lang === l ? "#F7F3EE" : "rgba(245,245,245,0.3)", cursor: "pointer", fontWeight: lang === l ? 500 : 300, fontFamily: "'Inter', sans-serif" }}>{l.toUpperCase()}</button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
