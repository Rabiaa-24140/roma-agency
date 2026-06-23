interface RomaLogoProps {
  color?: string;
  size?: number;
}

export default function RomaLogo({ color = "#7A1E2C", size = 120 }: RomaLogoProps) {
  return (
    <svg
      width={size}
      height={size * 0.45}
      viewBox="0 0 280 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="10" y="90"
        fontFamily="'Cormorant Garamond', 'Playfair Display', serif"
        fontSize="96"
        fontWeight="300"
        fill={color}
        letterSpacing="6"
      >
        ROMA
      </text>
      <circle cx="85" cy="50" r="32" stroke={color} strokeWidth="1" fill="none" opacity="0.4" />
      <circle cx="85" cy="50" r="2" fill={color} opacity="0.6" />
    </svg>
  );
}
