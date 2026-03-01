interface GeometricPatternProps {
  variant?: "hero" | "light" | "footer";
}

const GeometricPattern = ({ variant = "hero" }: GeometricPatternProps) => {
  const isLight = variant === "light";
  const color = isLight ? "hsl(216 60% 11%)" : "hsl(39 60% 55%)";
  const opacity = isLight ? 0.05 : 0.07;

  return (
    <div className="pattern-overlay" style={{ opacity }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMaxYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Concentric circles */}
        <circle cx="650" cy="300" r="120" fill="none" stroke={color} strokeWidth="1" />
        <circle cx="650" cy="300" r="180" fill="none" stroke={color} strokeWidth="0.5" />
        <circle cx="650" cy="300" r="240" fill="none" stroke={color} strokeWidth="0.5" />

        {/* Compass lines */}
        <line x1="650" y1="60" x2="650" y2="540" stroke={color} strokeWidth="0.5" strokeDasharray="4,8" />
        <line x1="410" y1="300" x2="890" y2="300" stroke={color} strokeWidth="0.5" strokeDasharray="4,8" />

        {/* Triangle construction */}
        <polygon
          points="650,140 530,420 770,420"
          fill="none"
          stroke={color}
          strokeWidth="0.7"
        />

        {/* Euler line hint */}
        <line x1="650" y1="140" x2="650" y2="420" stroke={color} strokeWidth="0.3" strokeDasharray="2,6" />

        {/* Small circles at vertices */}
        <circle cx="650" cy="140" r="3" fill="none" stroke={color} strokeWidth="0.5" />
        <circle cx="530" cy="420" r="3" fill="none" stroke={color} strokeWidth="0.5" />
        <circle cx="770" cy="420" r="3" fill="none" stroke={color} strokeWidth="0.5" />

        {/* Circumscribed circle */}
        <circle cx="650" cy="310" r="175" fill="none" stroke={color} strokeWidth="0.4" strokeDasharray="3,6" />
      </svg>
    </div>
  );
};

export default GeometricPattern;
