interface RomaLogoProps {
  color?: string;
  size?: number;
}

export default function RomaLogo({ color = "#2D1F6B", size = 140 }: RomaLogoProps) {
  // 4-pointed sparkle star centered on the O (cx=97, cy=52)
  const sparkle = "M 97,46 L 98.2,50.8 L 103,52 L 98.2,53.2 L 97,58 L 95.8,53.2 L 91,52 L 95.8,50.8 Z";

  return (
    <svg
      width={size}
      height={size * 0.42}
      viewBox="0 0 300 116"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="6"
        y="92"
        fontFamily="'Bodoni Moda', 'Cormorant Garamond', 'Playfair Display', serif"
        fontSize="98"
        fontWeight="300"
        fill={color}
        letterSpacing="2"
      >
        ROMA
      </text>

      {/* Thin orbital ring centered on the O */}
      <circle cx="97" cy="52" r="36" stroke={color} strokeWidth="0.75" fill="none" />

      {/* 4-pointed sparkle inside the ring */}
      <path d={sparkle} fill={color} />
    </svg>
  );
}
