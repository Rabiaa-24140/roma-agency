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
  const { bg, text, textMuted, border, burg } = colors;

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: dark ? "rgba(17,17,17,0.95)" : "rgba(247,243,238,0.95)",
      backdropFilter: "blur(20px)", borderBottom: `1px solid ${border}`,
      padding: "0 40px", height: 70, display: "flex", alignItems: "center",
      justifyContent: "space-between", transition: "background 0.4s",
    }}>
      <div style={{ cursor: "pointer" }} onClick={() => onScrollTo("home")}>
        <RomaLogo color={burg} size={90} />
      </div>

      {/* Desktop Nav */}
      <div className="nav-desktop" style={{ display: "flex", gap: 36, alignItems: "center" }}>
        {navItems.map((n) => (
          <span
            key={n.key}
            className={`nav-link${activeSection === n.key ? " active" : ""}`}
            style={{ color: text }}
            onClick={() => onScrollTo(n.key)}
          >
            {n.label}
          </span>
        ))}
      </div>

      {/* Controls */}
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div style={{ display: "flex", gap: 4 }}>
          {(["en", "fr", "ar"] as Lang[]).map((l) => (
            <button
              key={l}
              onClick={() => onLangChange(l)}
              style={{
                fontSize: 11, fontWeight: 600, letterSpacing: "0.1em",
                padding: "4px 8px", textTransform: "uppercase",
                background: lang === l ? burg : "transparent",
                color: lang === l ? "#F7F3EE" : textMuted,
                border: `1px solid ${lang === l ? burg : border}`,
                transition: "all 0.2s", cursor: "pointer",
              }}
            >
              {l}
            </button>
          ))}
        </div>

        <button
          onClick={onDarkToggle}
          style={{
            width: 36, height: 36, border: `1px solid ${border}`,
            background: "transparent", color: text, fontSize: 14,
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.2s", cursor: "pointer",
          }}
        >
          {dark ? "☀" : "◐"}
        </button>

        {/* Hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={onMenuToggle}
          style={{ display: "none", flexDirection: "column", gap: 5, padding: 4, background: "none", border: "none", cursor: "pointer" }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block", width: 22, height: 1, background: text, transition: "all 0.3s",
                transform: menuOpen
                  ? i === 0 ? "rotate(45deg) translate(4px, 4px)"
                  : i === 2 ? "rotate(-45deg) translate(4px, -4px)"
                  : "scaleX(0)"
                  : "none",
              }}
            />
          ))}
        </button>
      </div>
    </nav>
  );
}
