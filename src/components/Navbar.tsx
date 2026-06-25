"use client";
import { Lang } from "@/lib/translations";
import RomaLogo from "./RomaLogo";

interface NavbarProps {
  lang: Lang;
  dark: boolean;
  menuOpen: boolean;
  activeSection: string;
  navItems: { key: string; label: string }[];
  onScrollTo: (id: string) => void;
  onLangChange: (l: Lang) => void;
  onDarkToggle: () => void;
  onMenuToggle: () => void;
  colors: { bg: string; text: string; textMuted: string; border: string; burg: string };
}

export default function Navbar({
  lang, dark, menuOpen, activeSection, navItems,
  onScrollTo, onLangChange, onDarkToggle, onMenuToggle, colors,
}: NavbarProps) {
  const { text, textMuted, burg } = colors;
  const pillBg = dark
    ? "rgba(13,5,5,0.88)"
    : "rgba(244,241,238,0.90)";
  const pillBorder = dark
    ? "rgba(255,255,255,0.08)"
    : "rgba(0,0,0,0.08)";
  const pillShadow = dark
    ? "0 8px 40px rgba(0,0,0,0.45), 0 2px 8px rgba(0,0,0,0.25)"
    : "0 8px 40px rgba(0,0,0,0.07), 0 2px 8px rgba(0,0,0,0.04)";
  const langBg = dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)";

  return (
    <nav
      style={{
        position: "fixed", top: 18, left: "50%",
        transform: "translateX(-50%)",
        zIndex: 100,
        width: "calc(100% - 48px)",
        maxWidth: 1160,
      }}
    >
      {/* Floating pill */}
      <div
        style={{
          background: pillBg,
          backdropFilter: "blur(28px)",
          WebkitBackdropFilter: "blur(28px)",
          borderRadius: 100,
          border: `1px solid ${pillBorder}`,
          padding: "10px 20px 10px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: pillShadow,
        }}
      >
        {/* Logo */}
        <div
          style={{ cursor: "pointer", display: "flex", alignItems: "center", flexShrink: 0 }}
          onClick={() => onScrollTo("home")}
        >
          <RomaLogo color={burg} size={72} showTagline={false} />
        </div>

        {/* Desktop nav links */}
        <div
          className="nav-desktop"
          style={{ display: "flex", gap: 28, alignItems: "center" }}
        >
          {navItems.map((n) => (
            <span
              key={n.key}
              className={`nav-link${activeSection === n.key ? " active" : ""}`}
              style={{ color: activeSection === n.key ? burg : text }}
              onClick={() => onScrollTo(n.key)}
            >
              {n.label}
            </span>
          ))}
        </div>

        {/* Right controls */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
          {/* Language switcher */}
          <div
            style={{
              display: "flex", gap: 2,
              background: langBg,
              borderRadius: 100, padding: 3,
            }}
          >
            {(["en", "fr", "ar"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => onLangChange(l)}
                style={{
                  fontSize: 10, fontWeight: 600, letterSpacing: "0.08em",
                  padding: "5px 10px", textTransform: "uppercase", borderRadius: 100,
                  background: lang === l ? burg : "transparent",
                  color: lang === l ? "#F4F1EE" : textMuted,
                  transition: "all 0.2s",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Dark mode toggle */}
          <button
            onClick={onDarkToggle}
            style={{
              width: 36, height: 36, borderRadius: "50%",
              border: `1px solid ${dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
              background: "transparent", color: text, fontSize: 14,
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.2s",
            }}
          >
            {dark ? "☀" : "◐"}
          </button>

          {/* CTA button */}
          <button
            className="btn-primary"
            style={{ padding: "10px 20px", fontSize: 12 }}
            onClick={() => onScrollTo("contact")}
          >
            Start Project →
          </button>

          {/* Hamburger */}
          <button
            className="mobile-menu-btn"
            onClick={onMenuToggle}
            style={{
              display: "none", flexDirection: "column",
              gap: 5, padding: 4, background: "none", border: "none",
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block", width: 22, height: 1.5,
                  background: text, borderRadius: 2,
                  transition: "all 0.3s",
                  transform: menuOpen
                    ? i === 0 ? "rotate(45deg) translate(4.5px, 4.5px)"
                    : i === 2 ? "rotate(-45deg) translate(4.5px, -4.5px)"
                    : "scaleX(0)"
                    : "none",
                }}
              />
            ))}
          </button>
        </div>
      </div>
    </nav>
  );
}
