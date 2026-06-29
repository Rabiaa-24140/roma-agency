"use client";
import { useState, useEffect } from "react";
import { translations, Lang } from "@/lib/translations";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import {
  FeatureBento,
  MarqueeBar,
  TechEcosystem,
  WhyRoma,
  CTABlock,
  About,
  Portfolio,
  Process,
  Testimonials,
  Pricing,
  Contact,
  Footer,
} from "./Sections";

const SECTIONS = ["home", "about", "services", "portfolio", "process", "pricing", "contact"];

export default function RomaApp() {
  const [lang, setLang] = useState<Lang>("en");
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const t = translations[lang];
  const isRTL = t.dir === "rtl";

  /* ── Color tokens ── */
  const bg         = dark ? "#0C0818" : "#FAF8F5";
  const surface    = dark ? "#130E24" : "#FFFFFF";
  const surfaceAlt = dark ? "#0F0A1E" : "#F5F0FF";
  const text       = dark ? "#F5F0FF" : "#1A0A2E";
  const textMuted  = dark ? "#9985BB" : "#6B5F82";
  const burg       = "#7851A9";
  const border     = dark ? "rgba(255,255,255,0.07)" : "rgba(120,81,169,0.12)";

  /* ── Active section tracking ── */
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

  const navItems = [
    { key: "home",      label: t.nav.home },
    { key: "about",     label: t.nav.about },
    { key: "services",  label: t.nav.services },
    { key: "portfolio", label: t.nav.portfolio },
    { key: "pricing",   label: t.nav.pricing },
    { key: "contact",   label: t.nav.contact },
  ];

  return (
    <div
      style={{
        direction: t.dir,
        fontFamily: "'Inter', sans-serif",
        background: bg,
        color: text,
        minHeight: "100vh",
        overflowX: "hidden",
        transition: "background 0.4s, color 0.4s",
      }}
    >
      {/* ── Floating Navbar ── */}
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

      {/* ── Full-screen mobile menu ── */}
      <div
        className="mobile-menu"
        style={{
          position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 99,
          background: dark ? "#0C0818" : "#FAFAFA",
          display: menuOpen ? "flex" : "none",
          flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 36,
        }}
      >
        {navItems.map((n, i) => (
          <button
            key={n.key}
            onClick={() => scrollTo(n.key)}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 40, fontWeight: 300, color: text,
              background: "none", border: "none",
              letterSpacing: "0.04em", cursor: "pointer",
              opacity: 0.9,
              animation: menuOpen ? `fadeSlideUp 0.4s ease ${i * 0.07}s both` : "none",
            }}
          >
            {n.label}
          </button>
        ))}
        <button className="btn-primary" onClick={() => scrollTo("contact")}>
          Start Project →
        </button>
      </div>

      {/* ── Sections ── */}
      <Hero
        t={t.hero}
        isRTL={isRTL}
        textMuted={textMuted}
        burg={burg}
        dark={dark}
        onScrollToContact={() => scrollTo("contact")}
        onScrollToServices={() => scrollTo("services")}
      />

      <FeatureBento
        dark={dark} burg={burg} text={text}
        textMuted={textMuted} border={border} surface={surface}
      />

      <MarqueeBar dark={dark} burg={burg} />

      <Services
        t={t.services}
        surface={surface}
        surfaceAlt={surfaceAlt}
        textMuted={textMuted}
        border={border}
        burg={burg}
        text={text}
        dark={dark}
      />

      <About
        t={t.about}
        text={text} textMuted={textMuted}
        border={border} burg={burg}
        dark={dark} surface={surface}
      />

      <TechEcosystem
        dark={dark} burg={burg} text={text}
        textMuted={textMuted} border={border} surface={surface}
      />

      <Portfolio
        t={t.portfolio}
        textMuted={textMuted}
        burg={burg}
        dark={dark}
        border={border}
      />

      <Process
        t={t.process}
        textMuted={textMuted}
        border={border}
        burg={burg}
        dark={dark}
      />

      <WhyRoma
        dark={dark} burg={burg} text={text}
        textMuted={textMuted} border={border} surface={surface}
      />

      <Testimonials t={t.testimonials} burg={burg} />

      <Pricing
        t={t.pricing}
        surface={surface}
        text={text}
        textMuted={textMuted}
        border={border}
        burg={burg}
        isRTL={isRTL}
        dark={dark}
        onScrollToContact={() => scrollTo("contact")}
      />

      <CTABlock
        dark={dark} burg={burg}
        onScrollToContact={() => scrollTo("contact")}
      />

      <Contact
        t={t.contact}
        text={text} textMuted={textMuted}
        border={border} burg={burg}
        dark={dark}
      />

      <Footer
        t={t.footer}
        lang={lang}
        onLangChange={setLang}
        navLabels={t.nav}
        burg={burg}
        dark={dark}
      />
    </div>
  );
}
