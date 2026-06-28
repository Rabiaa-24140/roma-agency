import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ROMA — Building The Future Of Premium Innovation",
  description: "ROMA is a premium digital agency building websites, mobile apps, branding, AI solutions, and custom software for ambitious clients worldwide.",
  keywords: ["digital agency", "web development", "mobile apps", "UI/UX design", "branding", "AI solutions", "luxury tech"],
  authors: [{ name: "ROMA Agency" }],
  openGraph: {
    title: "ROMA — Building The Future Of Premium Innovation",
    description: "We transform visions into extraordinary digital experiences.",
    type: "website",
    url: "https://roma.agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "ROMA",
    description: "Building The Future Of Premium Innovation",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
