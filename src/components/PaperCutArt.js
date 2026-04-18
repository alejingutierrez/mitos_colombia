const PALETTES = {
  jungle: ["#071c16", "#0c4637", "#1e785e", "#2f9a77", "#d8aa62", "#f6e9cf"],
  river: ["#081523", "#122a48", "#184e84", "#23629e", "#d8aa62", "#f0e6d2"],
  ember: ["#1a0d05", "#3a1f0d", "#7e5424", "#bd8642", "#d8aa62", "#f6e2b8"],
  night: ["#05080c", "#0b1620", "#122a48", "#1e785e", "#d8aa62", "#f6e9cf"],
};

export default function PaperCutArt({
  seed = 0,
  tint = "jungle",
  variant = "landscape",
  style,
  className = "",
}) {
  const c = PALETTES[tint] || PALETTES.jungle;
  const s = (seed % 5) + 1;
  const uid = `pc-${tint}-${seed}`;

  if (variant === "portrait") {
    const w = 400;
    const h = 560;
    const sunX = 280 + s * 8;
    const sunY = 130 - s * 4;
    return (
      <svg
        viewBox={`0 0 ${w} ${h}`}
        preserveAspectRatio="xMidYMid slice"
        style={style}
        className={className}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`sky-${uid}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={c[0]} />
            <stop offset="0.4" stopColor={c[1]} />
            <stop offset="1" stopColor={c[2]} />
          </linearGradient>
          <radialGradient
            id={`glow-${uid}`}
            cx={sunX / w}
            cy={sunY / h}
            r="0.38"
          >
            <stop offset="0" stopColor={c[4]} stopOpacity="0.9" />
            <stop offset="0.6" stopColor={c[4]} stopOpacity="0.15" />
            <stop offset="1" stopColor={c[4]} stopOpacity="0" />
          </radialGradient>
          <filter id={`noise-${uid}`}>
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.85"
              numOctaves="2"
              seed={seed}
            />
            <feColorMatrix values="0 0 0 0 0.2  0 0 0 0 0.15  0 0 0 0 0.1  0 0 0 0.6 0" />
            <feComposite in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
        <rect width={w} height={h} fill={`url(#sky-${uid})`} />
        <rect width={w} height={h} fill={`url(#glow-${uid})`} />
        <circle cx={sunX} cy={sunY} r={44 - s * 2} fill={c[4]} opacity="0.97" />
        <circle
          cx={sunX}
          cy={sunY}
          r={52 - s * 2}
          fill="none"
          stroke={c[4]}
          strokeOpacity="0.25"
          strokeWidth="1"
        />
        <g fill="none" stroke={c[0]} strokeWidth="1.2" opacity="0.6">
          <path
            d={`M${90 + s * 4} ${200} q 6 -6 12 0 q 6 -6 12 0`}
          />
          <path
            d={`M${140 + s * 3} ${240} q 5 -5 10 0 q 5 -5 10 0`}
          />
        </g>
        <path
          d={`M0 ${320 + s * 4} L60 ${260 + s * 2} L140 ${310} L220 ${
            240 + s * 5
          } L300 ${290} L400 ${260} L400 ${h} L0 ${h} Z`}
          fill={c[1]}
          opacity="0.85"
        />
        <path
          d={`M0 ${400} L80 ${360} L160 ${385} L260 ${340 + s * 3} L340 ${380} L400 ${360} L400 ${h} L0 ${h} Z`}
          fill={c[2]}
          opacity="0.9"
        />
        <path
          d={`M0 ${450} L50 ${420} L120 ${445} L220 ${
            410 + s * 2
          } L320 ${435} L400 ${420} L400 ${h} L0 ${h} Z`}
          fill={c[1]}
        />
        <g>
          {Array.from({ length: 9 }).map((_, i) => {
            const x = 20 + i * 48 + s * 3;
            const hgt = 52 + ((i + s) % 5) * 14;
            const top = h - hgt;
            return (
              <g key={i} fill={c[0]}>
                <rect x={x - 2} y={top + 18} width={4} height={hgt - 18} />
                <path
                  d={`M${x - 14} ${top + 40} L${x} ${top - 4} L${x + 14} ${top + 40} Z`}
                />
                <path
                  d={`M${x - 12} ${top + 56} L${x} ${top + 14} L${x + 12} ${top + 56} Z`}
                />
              </g>
            );
          })}
        </g>
        <rect
          width={w}
          height={h}
          filter={`url(#noise-${uid})`}
          opacity="0.18"
        />
      </svg>
    );
  }

  const w = 400;
  const h = 225;
  const sunX = 300 + s * 4;
  const sunY = 60 + s * 2;
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="xMidYMid slice"
      style={style}
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`sky-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={c[0]} />
          <stop offset="0.6" stopColor={c[1]} />
          <stop offset="1" stopColor={c[2]} />
        </linearGradient>
        <radialGradient
          id={`glow-${uid}`}
          cx={sunX / w}
          cy={sunY / h}
          r="0.35"
        >
          <stop offset="0" stopColor={c[4]} stopOpacity="0.7" />
          <stop offset="1" stopColor={c[4]} stopOpacity="0" />
        </radialGradient>
        <filter id={`noise-${uid}`}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            seed={seed}
          />
          <feColorMatrix values="0 0 0 0 0.2  0 0 0 0 0.15  0 0 0 0 0.1  0 0 0 0.55 0" />
          <feComposite in2="SourceGraphic" operator="in" />
        </filter>
      </defs>
      <rect width={w} height={h} fill={`url(#sky-${uid})`} />
      <rect width={w} height={h} fill={`url(#glow-${uid})`} />
      <circle cx={sunX} cy={sunY} r={22 - s} fill={c[4]} />
      <path
        d={`M0 ${120 + s * 4} L60 ${80 + s * 2} L110 ${110} L180 ${
          60 + s * 3
        } L240 ${100} L320 ${70} L400 ${110} L400 ${h} L0 ${h} Z`}
        fill={c[1]}
        opacity="0.85"
      />
      <path
        d={`M0 ${160} L80 ${130} L160 ${160} L260 ${120} L360 ${150} L400 ${140} L400 ${h} L0 ${h} Z`}
        fill={c[2]}
        opacity="0.9"
      />
      <g>
        {Array.from({ length: 8 }).map((_, i) => {
          const x = 20 + i * 50 + s * 2;
          const hgt = 22 + ((i + s) % 4) * 8;
          const top = h - hgt;
          return (
            <path
              key={i}
              d={`M${x - 5} ${h} L${x} ${top} L${x + 5} ${h} Z`}
              fill={c[0]}
              opacity="0.95"
            />
          );
        })}
      </g>
      <rect
        width={w}
        height={h}
        filter={`url(#noise-${uid})`}
        opacity="0.15"
      />
    </svg>
  );
}
