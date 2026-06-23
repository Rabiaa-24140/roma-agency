"use client";
import { useInView } from "@/hooks/useInView";

interface FadeProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function Fade({ children, delay = 0, className = "" }: FadeProps) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
