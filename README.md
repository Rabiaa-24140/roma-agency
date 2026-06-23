# ROMA Agency — Premium Digital Solutions Website

A complete multilingual (EN / FR / AR) Next.js 15 website for ROMA Digital Agency.

---

## ✨ Features

- **Multilingual** — English, French, Arabic (RTL auto-applied)
- **Dark Mode** — True luxury dark theme with burgundy identity preserved
- **Fully Responsive** — Mobile-first, no horizontal scroll, elegant mobile menu
- **Animated** — Fade-in on scroll, smooth transitions, hover effects
- **SEO Ready** — Meta tags, Open Graph, Twitter Card
- **Production Ready** — Clean TypeScript, reusable components, scalable structure

---

## 🎨 Brand

| Token | Value |
|---|---|
| Primary Burgundy | `#7A1E2C` |
| Secondary Burgundy | `#8F2333` |
| Off White | `#F7F3EE` |
| Dark Background | `#111111` |
| Light Text | `#F5F5F5` |
| Dark Text | `#1B1B1B` |

**Fonts:** Cormorant Garamond (headings) · Inter (body)

---

## 📁 Project Structure

```
roma-agency/
├── src/
│   ├── app/
│   │   ├── globals.css       # Global styles, animations, responsive
│   │   ├── layout.tsx        # Root layout + SEO metadata
│   │   └── page.tsx          # Entry point
│   ├── components/
│   │   ├── RomaApp.tsx       # Main orchestrator (state, theme, lang)
│   │   ├── Navbar.tsx        # Sticky nav + mobile hamburger
│   │   ├── Hero.tsx          # Hero section
│   │   ├── Services.tsx      # 9 service cards
│   │   ├── Sections.tsx      # About, Portfolio, Process, Testimonials,
│   │   │                     # Pricing, Contact, Footer
│   │   ├── Fade.tsx          # Scroll-triggered fade animation
│   │   └── RomaLogo.tsx      # SVG logo component
│   ├── hooks/
│   │   └── useInView.ts      # IntersectionObserver hook
│   └── lib/
│       └── translations.ts   # All EN / FR / AR content
├── package.json
├── next.config.js
└── tsconfig.json
```

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

---

## 🏗️ Build for Production

```bash
npm run build
npm start
```

---

## 🌍 Adding a New Language

1. Open `src/lib/translations.ts`
2. Add a new key (e.g., `"es"`) following the same structure as `"en"`
3. Add the language button in `Navbar.tsx` and `Footer` (in `Sections.tsx`)

---

## 📄 Pages / Sections

| Section | Description |
|---|---|
| Hero | Full-viewport editorial intro with CTA |
| Services | 9-card service grid |
| About | Mission, Vision, Values |
| Portfolio | 4 featured case studies with hover overlay |
| Process | 7-step agency methodology |
| Testimonials | 3 client quotes on burgundy background |
| Pricing | 3 plans (Starter / Professional / Enterprise) |
| Contact | Form + contact info |
| Footer | Links, language switcher, copyright |

---

## 🛠️ Tech Stack

- **Next.js 15** (App Router)
- **React 18**
- **TypeScript**
- **CSS-in-JS** (inline styles) + global CSS
- **Google Fonts** (Cormorant Garamond, Inter, Manrope)

---

Built with ❤️ for ROMA Agency.
