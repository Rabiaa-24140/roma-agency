interface RomaLogoProps {
  color?: string;
  size?: number;
  showTagline?: boolean;
}

export default function RomaLogo({ color = "#2D1F6B", size = 140, showTagline = true }: RomaLogoProps) {
  const sparkle = "M 97,46 L 98.2,50.8 L 103,52 L 98.2,53.2 L 97,58 L 95.8,53.2 L 91,52 L 95.8,50.8 Z";
  const h = showTagline ? size * 0.52 : size * 0.40;

  return (
    <svg
      width={size}
      height={h}
      viewBox={showTagline ? "0 0 300 140" : "0 0 300 110"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="6" y="92"
        fontFamily="'Bodoni Moda', 'Cormorant Garamond', 'Playfair Display', serif"
        fontSize="98" fontWeight="300"
        fill={color} letterSpacing="2"
      >
        ROMA
      </text>
      <circle cx="97" cy="52" r="36" stroke={color} strokeWidth="0.75" fill="none" />
      <path d={sparkle} fill={color} />
      {showTagline && (
        <text
          x="153" y="128"
          fontFamily="'Inter', sans-serif"
          fontSize="12" fontWeight="400"
          fill={color} letterSpacing="6"
          textAnchor="middle" opacity="0.65"
        >
          BY RFA
        </text>
      )}
    </svg>
  );
}
