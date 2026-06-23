import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ROMA Agency — Digital Solutions Without Limits",
  description: "ROMA is a premium digital agency building websites, mobile apps, branding, AI solutions, and custom software for ambitious clients worldwide.",
  keywords: ["digital agency", "web development", "mobile apps", "UI/UX design", "branding", "AI solutions"],
  authors: [{ name: "ROMA Agency" }],
  openGraph: {
    title: "ROMA Agency — Digital Solutions Without Limits",
    description: "We transform ideas into exceptional digital experiences.",
    type: "website",
    url: "https://roma.agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "ROMA Agency",
    description: "Digital Solutions Without Limits",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
