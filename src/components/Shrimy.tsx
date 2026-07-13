"use client";

import { useEffect, useRef, type CSSProperties } from "react";

/**
 * SHRIMY — maskot resmi Shrimp Loop.
 * Prinsip identik (Design System §1.4): digambar SATU kali sebagai master
 * <symbol id="shrimy-core">. Seluruh kemunculan memakai <use href="#shrimy-core">
 * agar identik piksel demi piksel di navigasi, hero, chat, FAB, dan footer.
 *
 * Pseudo-3D "premium" mengikuti SHRIMY_MASCOT_SPEC.md §3–5: gradient berlapis
 * banyak-stop, clearcoat specular, ambient occlusion antar-segmen, subsurface
 * scattering hangat di tepi ekor/antena, catchlight ganda pada mata, plus
 * drop-shadow lembut untuk kedalaman.
 *
 * Interaktif: mata + wajah mengikuti kursor. Tiap instance menghitung arah
 * pandang relatif terhadap posisinya sendiri di layar (parallax per-instance),
 * lewat satu listener pointer global + rAF, ditulis ke CSS variable --sx/--sy.
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
        {/* Cangkang "cooked shell" — key light kiri-atas, inti hangat pekat */}
        <radialGradient id="sl-shell" cx="36%" cy="26%" r="86%">
          <stop offset="0%" stopColor="#FFE4C6" />
          <stop offset="20%" stopColor="#FBB380" />
          <stop offset="46%" stopColor="#F4874A" />
          <stop offset="72%" stopColor="#E2611C" />
          <stop offset="90%" stopColor="#C93B1B" />
          <stop offset="100%" stopColor="#99290E" />
        </radialGradient>
        <radialGradient id="sl-head" cx="34%" cy="24%" r="84%">
          <stop offset="0%" stopColor="#FFE6CB" />
          <stop offset="22%" stopColor="#FBB17D" />
          <stop offset="52%" stopColor="#F4874A" />
          <stop offset="82%" stopColor="#E2611C" />
          <stop offset="100%" stopColor="#BC350E" />
        </radialGradient>
        <linearGradient id="sl-tail" x1="0.1" y1="0.05" x2="0.85" y2="0.95">
          <stop offset="0%" stopColor="#FFCEA2" />
          <stop offset="45%" stopColor="#F4874A" />
          <stop offset="100%" stopColor="#C4390F" />
        </linearGradient>
        <linearGradient id="sl-leaf" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#12633A" />
          <stop offset="55%" stopColor="#1E7B4A" />
          <stop offset="100%" stopColor="#8DF0B4" />
        </linearGradient>
        {/* Mata — sklera glossy + iris dalam */}
        <radialGradient id="sl-eye" cx="40%" cy="34%" r="76%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="62%" stopColor="#FCF1EC" />
          <stop offset="100%" stopColor="#E7CDBF" />
        </radialGradient>
        <radialGradient id="sl-iris" cx="38%" cy="32%" r="78%">
          <stop offset="0%" stopColor="#5C3018" />
          <stop offset="42%" stopColor="#2D1409" />
          <stop offset="100%" stopColor="#140903" />
        </radialGradient>

        {/* Blur lembut (bayangan kontak & bloom highlight) */}
        <filter id="sl-soft" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
        <filter id="sl-soft2" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="2" />
        </filter>
        {/* Drop-shadow premium untuk kedalaman "melayang" */}
        <filter id="sl-drop" x="-35%" y="-30%" width="170%" height="165%">
          <feDropShadow dx="0" dy="6" stdDeviation="7" floodColor="#7A2A12" floodOpacity="0.30" />
        </filter>
      </defs>

      <symbol id="shrimy-core" viewBox="0 0 240 240">
        {/* bayangan kontak berlapis (ground) — dibake terpisah dari body */}
        <ellipse cx="122" cy="214" rx="74" ry="13" fill="rgba(110,52,32,0.28)" filter="url(#sl-soft)" />
        <ellipse cx="122" cy="215" rx="44" ry="8" fill="rgba(88,36,20,0.30)" filter="url(#sl-soft)" />

        <g filter="url(#sl-drop)">
          {/* ekor kipas 5 lobus — di belakang badan, SSS hangat tembus cahaya */}
          <g className="s-tail">
            <g stroke="#FFC496" strokeOpacity="0.5" strokeWidth="2.4" strokeLinejoin="round">
              <path d="M108 60 C104 34 96 20 90 16 C96 30 96 46 101 60 Z" fill="url(#sl-tail)" />
              <path d="M110 58 C112 30 110 16 108 10 C113 28 118 44 119 58 Z" fill="url(#sl-tail)" />
              <path d="M112 60 C120 36 128 24 134 20 C127 34 124 48 122 61 Z" fill="url(#sl-tail)" />
              <path d="M114 62 C126 44 138 38 146 36 C136 46 130 56 125 64 Z" fill="url(#sl-tail)" />
              <path d="M106 62 C94 46 82 42 74 42 C86 50 94 58 100 66 Z" fill="url(#sl-tail)" />
            </g>
            {/* rim glow tepi ekor */}
            <path d="M110 58 C112 30 110 16 108 10" stroke="#FFDBB8" strokeOpacity="0.55" strokeWidth="1.6" fill="none" strokeLinecap="round" />
          </g>

          {/* badan abdomen — cincin melengkung ±300° (loop) */}
          <path
            d="M93.9 47.8 A78 78 0 1 1 43.8 97.9 L75.2 108.1 A45 45 0 1 0 104.1 79.2 Z"
            fill="url(#sl-shell)"
          />
          {/* AO tepi dalam (kedalaman lubang loop) */}
          <path
            d="M75.2 108.1 A45 45 0 1 0 104.1 79.2"
            fill="none"
            stroke="#93280F"
            strokeOpacity="0.55"
            strokeWidth="5"
          />
          {/* garis pertumbuhan antar segmen (sabit AO) */}
          <g stroke="#9E2E11" strokeOpacity="0.55" strokeWidth="4.2" strokeLinecap="round" fill="none">
            <path d="M188 96 A70 70 0 0 1 196 128" />
            <path d="M176 170 A70 70 0 0 1 150 188" />
            <path d="M96 188 A70 70 0 0 1 62 172" />
          </g>
          {/* rim light hangat di punggung luar (subsurface) */}
          <g stroke="#FFC79A" strokeLinecap="round" fill="none">
            <path d="M150 44 A78 78 0 0 1 194 92" strokeOpacity="0.5" strokeWidth="3" />
          </g>
          {/* highlight volumetrik punggung + clearcoat glint tajam */}
          <ellipse cx="160" cy="66" rx="30" ry="15" fill="#FFFFFF" opacity="0.20" transform="rotate(24 160 66)" filter="url(#sl-soft)" />
          <ellipse cx="182" cy="98" rx="15" ry="8" fill="#FFFFFF" opacity="0.42" transform="rotate(30 182 98)" filter="url(#sl-soft2)" />
          <circle cx="176" cy="86" r="4" fill="#FFFFFF" opacity="0.9" />

          {/* kaki renang (pleopod) semi-translusen */}
          <g className="s-legs" stroke="#D24A1E" strokeWidth="4.5" strokeLinecap="round" fill="none" opacity="0.92">
            <path d="M104 150 q-6 12 -2 20" />
            <path d="M124 160 q-4 12 2 20" />
            <path d="M146 162 q0 13 8 19" />
          </g>

          {/* KEPALA / karapas */}
          <circle cx="74.5" cy="78.5" r="46" fill="url(#sl-head)" />
          {/* AO bawah kepala */}
          <ellipse cx="80" cy="112" rx="34" ry="14" fill="#93280F" opacity="0.22" filter="url(#sl-soft)" />
          {/* rostrum (moncong pendek membulat) */}
          <path d="M34 66 C20 60 12 62 8 66 C16 66 24 70 32 76 Z" fill="url(#sl-head)" />
          {/* highlight kepala + glint clearcoat */}
          <ellipse cx="56" cy="56" rx="19" ry="13" fill="#FFDDBC" opacity="0.6" transform="rotate(-24 56 56)" filter="url(#sl-soft)" />
          <circle cx="48" cy="50" r="4.5" fill="#FFFFFF" opacity="0.85" />

          {/* daun aksen (Eco Green) di punggung karapas */}
          <g transform="rotate(-18 96 44)">
            <path d="M96 46 C96 30 108 22 120 24 C118 40 108 50 96 46 Z" fill="url(#sl-leaf)" />
            <path d="M99 42 C105 36 112 32 117 30" stroke="#EAFBF0" strokeWidth="1.6" fill="none" strokeLinecap="round" />
            <path d="M100 46 C104 44 109 41 114 37" stroke="#0F5030" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.6" />
          </g>

          {/* antena panjang — SSS translusen, meruncing */}
          <g fill="none" strokeLinecap="round">
            <path className="s-antenna-l" d="M52 44 C34 18 18 8 6 6" stroke="#C93B1B" strokeWidth="5" />
            <path className="s-antenna-l" d="M52 44 C34 18 18 8 6 6" stroke="#FFC79A" strokeOpacity="0.4" strokeWidth="2" />
            <path className="s-antenna-r" d="M66 40 C58 14 52 4 48 -4" stroke="#C93B1B" strokeWidth="5" />
            <path className="s-antenna-r" d="M66 40 C58 14 52 4 48 -4" stroke="#FFC79A" strokeOpacity="0.4" strokeWidth="2" />
            <circle className="s-antenna-l" cx="6" cy="6" r="4" fill="#F4874A" stroke="none" />
            <circle className="s-antenna-r" cx="48" cy="-4" r="4" fill="#F4874A" stroke="none" />
          </g>
          {/* antenula (2 kurva kecil dekat rostrum) */}
          <g fill="none" stroke="#C93B1B" strokeWidth="3" strokeLinecap="round" opacity="0.85">
            <path d="M38 62 C28 54 22 52 16 52" />
            <path d="M40 70 C30 66 24 66 18 68" />
          </g>

          {/* pipi */}
          <ellipse cx="54" cy="92" rx="9" ry="6" fill="#FFF0E9" opacity="0.85" />
          <ellipse cx="92" cy="98" rx="9" ry="6" fill="#FFF0E9" opacity="0.85" />

          {/* mata default (tangkai + sklera glossy + iris + catchlight ganda) */}
          <g className="s-eyes">
            <path d="M60 62 l-4 -10" stroke="#E2611C" strokeWidth="5.5" strokeLinecap="round" />
            <path d="M84 66 l2 -10" stroke="#E2611C" strokeWidth="5.5" strokeLinecap="round" />
            <circle cx="59" cy="70" r="13" fill="url(#sl-eye)" />
            <circle cx="86" cy="74" r="13" fill="url(#sl-eye)" />
            <circle cx="59" cy="70" r="13" fill="none" stroke="#C79E8A" strokeOpacity="0.35" strokeWidth="1" />
            <circle cx="86" cy="74" r="13" fill="none" stroke="#C79E8A" strokeOpacity="0.35" strokeWidth="1" />
            <circle cx="61" cy="72" r="6.8" fill="url(#sl-iris)" />
            <circle cx="88" cy="76" r="6.8" fill="url(#sl-iris)" />
            <circle cx="61" cy="72" r="6.8" fill="none" stroke="#7A3E28" strokeOpacity="0.6" strokeWidth="1.1" />
            <circle cx="88" cy="76" r="6.8" fill="none" stroke="#7A3E28" strokeOpacity="0.6" strokeWidth="1.1" />
            <circle cx="57.6" cy="68.4" r="2.7" fill="#FFFFFF" />
            <circle cx="84.6" cy="72.4" r="2.7" fill="#FFFFFF" />
            <circle cx="63.4" cy="75.4" r="1.5" fill="#FFFFFF" opacity="0.75" />
            <circle cx="90.4" cy="79.4" r="1.5" fill="#FFFFFF" opacity="0.7" />
          </g>

          {/* senyum */}
          <path d="M60 94 C68 104 82 104 90 96" stroke="#2D1409" strokeWidth="4.5" fill="none" strokeLinecap="round" />
        </g>
      </symbol>
    </svg>
  );
}

/* ---------------------------------------------------------------------------
 * Pointer tracking singleton — satu listener global, banyak subscriber (rAF).
 * ------------------------------------------------------------------------- */

type PointerState = { x: number; y: number; active: boolean };
const pointer: PointerState = { x: 0, y: 0, active: false };
const subscribers = new Set<() => void>();
let rafId = 0;

function flush() {
  rafId = 0;
  subscribers.forEach((fn) => fn());
}

function onPointerMove(e: PointerEvent) {
  pointer.x = e.clientX;
  pointer.y = e.clientY;
  pointer.active = true;
  if (!rafId) rafId = requestAnimationFrame(flush);
}

function subscribe(fn: () => void) {
  subscribers.add(fn);
  if (subscribers.size === 1) {
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerMove, { passive: true });
  }
  return () => {
    subscribers.delete(fn);
    if (subscribers.size === 0) {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerMove);
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
    }
  };
}

function useEyeTracking(enabled: boolean) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!enabled || typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const update = () => {
      const el = ref.current;
      if (!el || !pointer.active) return;
      const r = el.getBoundingClientRect();
      if (r.width === 0) return;
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height * 0.42; // mata berada di sepertiga atas
      const dx = pointer.x - cx;
      const dy = pointer.y - cy;
      const dist = Math.hypot(dx, dy) || 1;
      // jarak jenuh: makin dekat kursor makin penuh arah pandang
      const falloff = Math.max(150, r.width * 1.4);
      const gain = Math.min(1, dist / falloff);
      const nx = (dx / dist) * gain;
      const ny = (dy / dist) * gain;
      el.style.setProperty("--sx", nx.toFixed(3));
      el.style.setProperty("--sy", ny.toFixed(3));
    };

    const unsubscribe = subscribe(update);
    update();
    return unsubscribe;
  }, [enabled]);

  return ref;
}

/* Lapisan mata interaktif — menutup mata simbol, pupil & wajah mengikuti kursor. */
function LiveEyes() {
  return (
    <g className="s-eyes-live" aria-hidden="true">
      {/* sklera statis menutupi mata simbol */}
      <circle cx="59" cy="70" r="13" fill="url(#sl-eye)" />
      <circle cx="86" cy="74" r="13" fill="url(#sl-eye)" />
      <circle cx="59" cy="70" r="13" fill="none" stroke="#C79E8A" strokeOpacity="0.35" strokeWidth="1" />
      <circle cx="86" cy="74" r="13" fill="none" stroke="#C79E8A" strokeOpacity="0.35" strokeWidth="1" />
      {/* pupil — mengikuti kursor (translate via --sx/--sy) */}
      <g className="s-pupil">
        <circle cx="59" cy="70" r="6.8" fill="url(#sl-iris)" />
        <circle cx="86" cy="74" r="6.8" fill="url(#sl-iris)" />
        <circle cx="59" cy="70" r="6.8" fill="none" stroke="#7A3E28" strokeOpacity="0.55" strokeWidth="1.1" />
        <circle cx="86" cy="74" r="6.8" fill="none" stroke="#7A3E28" strokeOpacity="0.55" strokeWidth="1.1" />
      </g>
      {/* catchlight — bergerak lebih pelan (sumber cahaya tetap) */}
      <g className="s-glint">
        <circle cx="56.6" cy="67.2" r="2.7" fill="#FFFFFF" />
        <circle cx="83.6" cy="71.2" r="2.7" fill="#FFFFFF" />
        <circle cx="61.4" cy="73.6" r="1.5" fill="#FFFFFF" opacity="0.75" />
        <circle cx="88.4" cy="77.6" r="1.5" fill="#FFFFFF" opacity="0.7" />
      </g>
      {/* kelopak — kedip (menutup dari atas) */}
      <g className="s-lid">
        <ellipse className="s-lid-e" cx="59" cy="70" rx="14" ry="14" fill="#EE8A4E" />
        <ellipse className="s-lid-e" cx="86" cy="74" rx="14" ry="14" fill="#EE8A4E" />
      </g>
    </g>
  );
}

type ShrimyProps = {
  size?: number;
  float?: boolean;
  halo?: boolean;
  /** Aktifkan eye/face tracking. Default: otomatis untuk ukuran ≥ 44px. */
  interactive?: boolean;
  className?: string;
  title?: string;
  style?: CSSProperties;
};

export default function Shrimy({
  size = 120,
  float = false,
  halo = false,
  interactive,
  className = "",
  title = "SHRIMY, maskot Shrimp Loop",
  style,
}: ShrimyProps) {
  const track = interactive ?? size >= 44;
  const svgRef = useEyeTracking(track);
  const svgClass = `shrimy ${track ? "shrimy--live" : ""} ${float ? "shrimy--float" : ""} ${className}`;

  const inner = track ? (
    <g className="shrimy-tilt">
      <use href="#shrimy-core" />
      <LiveEyes />
    </g>
  ) : (
    <use href="#shrimy-core" />
  );

  if (!halo) {
    return (
      <svg
        ref={svgRef}
        className={svgClass}
        width={size}
        height={size}
        viewBox="0 0 240 240"
        role="img"
        aria-label={title}
        style={{ maxWidth: "100%", height: "auto", ...style }}
      >
        <title>{title}</title>
        {inner}
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
        ref={svgRef}
        className={svgClass}
        viewBox="0 0 240 240"
        role="img"
        aria-label={title}
        style={{ width: "74%", height: "74%" }}
      >
        <title>{title}</title>
        {inner}
      </svg>
    </span>
  );
}
