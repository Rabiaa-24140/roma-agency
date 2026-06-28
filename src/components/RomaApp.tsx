"use client";
import { useState, useEffect } from "react";
import { translations, Lang } from "@/lib/translations";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import { About, Portfolio, Process, Testimonials, Pricing, Contact, Footer } from "./Sections";

export default function RomaApp() {
  const [lang, setLang] = useState<Lang>("en");
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const t = translations[lang];
  const isRTL = t.dir === "rtl";

  // Color tokens
  const bg = dark ? "#111111" : "#F7F3EE";
  const surface = dark ? "#1A1A1A" : "#FFFFFF";
  const surfaceAlt = dark ? "#161616" : "#F0EBE4";
  const text = dark ? "#F5F5F5" : "#1B1B1B";
  const textMuted = dark ? "#888888" : "#888888";
  const burg = "#2D1F6B";
  const border = dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.08)";

  const SECTIONS = ["home", "about", "services", "portfolio", "process", "pricing", "contact"];

  const navItems = [
    { key: "home", label: t.nav.home },
    { key: "about", label: t.nav.about },
    { key: "services", label: t.nav.services },
    { key: "portfolio", label: t.nav.portfolio },
    { key: "process", label: t.nav.process },
    { key: "pricing", label: t.nav.pricing },
    { key: "contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY + 120;
      SECTIONS.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY && el.offsetTop + el.offsetHeight > scrollY) {
          setActiveSection(id);
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const colors = { bg, surface, surfaceAlt, text, textMuted, burg, border };

  return (
    <div
      style={{
        direction: t.dir,
        fontFamily: "'Inter', 'Manrope', sans-serif",
        background: bg,
        color: text,
        minHeight: "100vh",
        overflowX: "hidden",
        transition: "background 0.4s, color 0.4s",
      }}
    >
      {/* Navbar */}
      <Navbar
        lang={lang}
        dark={dark}
        menuOpen={menuOpen}
        activeSection={activeSection}
        navItems={navItems}
        onScrollTo={scrollTo}
        onLangChange={setLang}
        onDarkToggle={() => setDark(!dark)}
        onMenuToggle={() => setMenuOpen(!menuOpen)}
        colors={{ bg, text, textMuted, border, burg }}
      />

      {/* Mobile Menu */}
      <div
        className="mobile-menu"
        style={{
          position: "fixed", top: 70, left: 0, right: 0, bottom: 0, zIndex: 99,
          background: dark ? "#111111" : "#F7F3EE",
          display: menuOpen ? "flex" : "none",
          flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 40,
        }}
      >
        {navItems.map((n, i) => (
          <button
            key={n.key}
            onClick={() => scrollTo(n.key)}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 36, fontWeight: 300, color: text,
              background: "none", border: "none", letterSpacing: "0.05em",
              opacity: 0.85, cursor: "pointer",
              animation: menuOpen ? `fadeSlideUp 0.4s ease ${i * 0.06}s both` : "none",
            }}
          >
            {n.label}
          </button>
        ))}
      </div>

      {/* Sections */}
      <Hero t={t.hero} isRTL={isRTL} textMuted={textMuted} burg={burg} onScrollToContact={() => scrollTo("contact")} onScrollToServices={() => scrollTo("services")} />
      <Services t={t.services} surface={surface} surfaceAlt={surfaceAlt} textMuted={textMuted} border={border} burg={burg} text={text} />
      <About t={t.about} text={text} textMuted={textMuted} border={border} burg={burg} />
      <Portfolio t={t.portfolio} surfaceAlt={surfaceAlt} textMuted={textMuted} burg={burg} dark={dark} />
      <Process t={t.process} textMuted={textMuted} border={border} burg={burg} />
      <Testimonials t={t.testimonials} burg={burg} />
      <Pricing t={t.pricing} surfaceAlt={surfaceAlt} surface={surface} text={text} textMuted={textMuted} border={border} burg={burg} isRTL={isRTL} onScrollToContact={() => scrollTo("contact")} />
      <Contact t={t.contact} text={text} textMuted={textMuted} border={border} burg={burg} />
      <Footer t={t.footer} lang={lang} onLangChange={setLang} navLabels={t.nav} />
    </div>
  );
}
