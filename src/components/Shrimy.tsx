import type { CSSProperties } from "react";

/**
 * SHRIMY — maskot resmi Shrimp Loop.
 * Prinsip identik (Design System §1.4): digambar SATU kali sebagai master
 * <symbol id="shrimy-core">. Seluruh kemunculan memakai <use href="#shrimy-core">
 * agar identik piksel demi piksel di navigasi, hero, chat, FAB, dan footer.
 * Pseudo-3D SVG mengikuti SHRIMY_MASCOT_SPEC.md §5 (gradient berlapis, highlight
 * specular, AO antar-segmen, SSS tepi, catchlight mata).
 */

export function ShrimyDefs() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="0"
      height="0"
      style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
    >
      <defs>
        {/* Cangkang "cooked shell" — cahaya kiri-atas */}
        <radialGradient id="sl-shell" cx="34%" cy="28%" r="82%">
          <stop offset="0%" stopColor="#F9A66C" />
          <stop offset="42%" stopColor="#F4874A" />
          <stop offset="78%" stopColor="#E8631A" />
          <stop offset="100%" stopColor="#C93B1B" />
        </radialGradient>
        <radialGradient id="sl-head" cx="32%" cy="26%" r="78%">
          <stop offset="0%" stopColor="#F9A66C" />
          <stop offset="45%" stopColor="#F4874A" />
          <stop offset="100%" stopColor="#E8631A" />
        </radialGradient>
        <linearGradient id="sl-tail" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F4874A" />
          <stop offset="100%" stopColor="#C93B1B" />
        </linearGradient>
        <linearGradient id="sl-leaf" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#1E7B4A" />
          <stop offset="100%" stopColor="#7BE3A3" />
        </linearGradient>
        <filter id="sl-soft" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>

      <symbol id="shrimy-core" viewBox="0 0 240 240">
        {/* bayangan kontak (dibake terpisah) */}
        <ellipse cx="120" cy="212" rx="72" ry="14" fill="rgba(122,62,40,0.22)" filter="url(#sl-soft)" />

        {/* ekor kipas 5 lobus — di belakang badan, menyala hangat */}
        <g className="s-tail">
          <g stroke="#FFB27D" strokeOpacity="0.35" strokeWidth="2">
            <path d="M108 58 L86 20" fill="url(#sl-tail)" />
          </g>
          <path d="M108 60 C104 34 96 20 90 16 C96 30 96 46 101 60 Z" fill="url(#sl-tail)" />
          <path d="M110 58 C112 30 110 16 108 10 C113 28 118 44 119 58 Z" fill="url(#sl-tail)" />
          <path d="M112 60 C120 36 128 24 134 20 C127 34 124 48 122 61 Z" fill="url(#sl-tail)" />
          <path d="M114 62 C126 44 138 38 146 36 C136 46 130 56 125 64 Z" fill="url(#sl-tail)" />
          <path d="M106 62 C94 46 82 42 74 42 C86 50 94 58 100 66 Z" fill="url(#sl-tail)" />
        </g>

        {/* badan abdomen — cincin melengkung ±300° (loop) */}
        <path
          d="M93.9 47.8 A78 78 0 1 1 43.8 97.9 L75.2 108.1 A45 45 0 1 0 104.1 79.2 Z"
          fill="url(#sl-shell)"
        />
        {/* AO tepi dalam */}
        <path
          d="M75.2 108.1 A45 45 0 1 0 104.1 79.2"
          fill="none"
          stroke="#A83016"
          strokeOpacity="0.45"
          strokeWidth="4"
        />
        {/* garis pertumbuhan antar segmen (sabit) */}
        <g stroke="#A83016" strokeOpacity="0.5" strokeWidth="4" strokeLinecap="round" fill="none">
          <path d="M188 96 A70 70 0 0 1 196 128" />
          <path d="M176 170 A70 70 0 0 1 150 188" />
          <path d="M96 188 A70 70 0 0 1 62 172" />
        </g>
        {/* highlight specular punggung */}
        <ellipse cx="180" cy="96" rx="16" ry="9" fill="#FFFFFF" opacity="0.32" transform="rotate(28 180 96)" filter="url(#sl-soft)" />

        {/* kaki renang (pleopod) */}
        <g className="s-legs" stroke="#C93B1B" strokeWidth="4.5" strokeLinecap="round" fill="none">
          <path d="M104 150 q-6 12 -2 20" />
          <path d="M124 160 q-4 12 2 20" />
          <path d="M146 162 q0 13 8 19" />
        </g>

        {/* KEPALA / karapas */}
        <circle cx="74.5" cy="78.5" r="46" fill="url(#sl-head)" />
        {/* rostrum (moncong pendek membulat) */}
        <path d="M34 66 C20 60 12 62 8 66 C16 66 24 70 32 76 Z" fill="url(#sl-head)" />
        {/* highlight kepala */}
        <ellipse cx="58" cy="58" rx="18" ry="12" fill="#F9A66C" opacity="0.55" transform="rotate(-24 58 58)" filter="url(#sl-soft)" />

        {/* daun aksen (Eco Green) di punggung karapas */}
        <g transform="rotate(-18 96 44)">
          <path d="M96 46 C96 30 108 22 120 24 C118 40 108 50 96 46 Z" fill="url(#sl-leaf)" />
          <path d="M99 42 C105 36 112 32 117 30" stroke="#FDF8F5" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        </g>

        {/* antena panjang */}
        <g fill="none" strokeLinecap="round">
          <path className="s-antenna-l" d="M52 44 C34 18 18 8 6 6" stroke="#C93B1B" strokeWidth="5" />
          <path className="s-antenna-r" d="M66 40 C58 14 52 4 48 -4" stroke="#C93B1B" strokeWidth="5" />
          <circle className="s-antenna-l" cx="6" cy="6" r="4" fill="#F4874A" stroke="none" />
          <circle className="s-antenna-r" cx="48" cy="-4" r="4" fill="#F4874A" stroke="none" />
        </g>
        {/* antenula (2 kurva kecil dekat rostrum) */}
        <g fill="none" stroke="#C93B1B" strokeWidth="3" strokeLinecap="round" opacity="0.85">
          <path d="M38 62 C28 54 22 52 16 52" />
          <path d="M40 70 C30 66 24 66 18 68" />
        </g>

        {/* pipi */}
        <ellipse cx="54" cy="92" rx="9" ry="6" fill="#FDEEE7" opacity="0.8" />
        <ellipse cx="92" cy="98" rx="9" ry="6" fill="#FDEEE7" opacity="0.8" />

        {/* mata (pada tangkai pendek) + catchlight */}
        <g className="s-eyes">
          <path d="M60 62 l-4 -10" stroke="#E8631A" strokeWidth="5" strokeLinecap="round" />
          <path d="M84 66 l2 -10" stroke="#E8631A" strokeWidth="5" strokeLinecap="round" />
          <circle cx="59" cy="70" r="13" fill="#FFFFFF" />
          <circle cx="86" cy="74" r="13" fill="#FFFFFF" />
          <circle cx="61" cy="72" r="6.5" fill="#2D1409" />
          <circle cx="88" cy="76" r="6.5" fill="#2D1409" />
          <circle cx="57.5" cy="68.5" r="2.4" fill="#FFFFFF" />
          <circle cx="84.5" cy="72.5" r="2.4" fill="#FFFFFF" />
          <circle cx="63.5" cy="75.5" r="1.4" fill="#FFFFFF" opacity="0.7" />
        </g>

        {/* senyum */}
        <path d="M60 94 C68 104 82 104 90 96" stroke="#2D1409" strokeWidth="4.5" fill="none" strokeLinecap="round" />
      </symbol>
    </svg>
  );
}

type ShrimyProps = {
  size?: number;
  float?: boolean;
  halo?: boolean;
  className?: string;
  title?: string;
  style?: CSSProperties;
};

export default function Shrimy({
  size = 120,
  float = false,
  halo = false,
  className = "",
  title = "SHRIMY, maskot Shrimp Loop",
  style,
}: ShrimyProps) {
  const svgClass = `shrimy ${float ? "shrimy--float" : ""} ${className}`;

  if (!halo) {
    return (
      <svg
        className={svgClass}
        width={size}
        height={size}
        viewBox="0 0 240 240"
        role="img"
        aria-label={title}
        style={{ maxWidth: "100%", height: "auto", ...style }}
      >
        <title>{title}</title>
        <use href="#shrimy-core" />
      </svg>
    );
  }

  // Halo mode: wrapper = halo box, mascot centered at 74% — fully responsive,
  // caps to parent width so it never overflows the viewport on mobile.
  const haloSize = Math.round(size * 1.35);
  return (
    <span
      className="shrimy-wrap"
      style={{ width: haloSize, maxWidth: "100%", aspectRatio: "1 / 1", ...style }}
    >
      <span className="shrimy-halo" style={{ width: "100%", height: "100%" }} aria-hidden="true" />
      <svg
        className={svgClass}
        viewBox="0 0 240 240"
        role="img"
        aria-label={title}
        style={{ width: "74%", height: "74%" }}
      >
        <title>{title}</title>
        <use href="#shrimy-core" />
      </svg>
    </span>
  );
}
