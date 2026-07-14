// Latar ambient "Deep Ocean" — tema bawah laut dengan udang keren & interaktif.
"use client";

import { useState, useCallback, useEffect, useRef } from "react";

/* ---- Sapaan random saat udang disentuh ---- */
const GREETINGS = [
  "Halo! 🦐 Aku udang EcoShrimp!",
  "Hai! Jangan buang limbahku ya!",
  "Yuk olah limbah udang!",
  "Selamat datang di lautan!",
  "Aku bisa jadi kitosan lho!",
  "Kulit udang = emas hijau!",
  "Bantu jaga lautku ya!",
  "Limbah udang bernilai tinggi!",
  "Hi! Ayo daur ulang!",
  "Salam dari dasar laut!",
];

/* ---- Komponen Udang SVG yang keren & interaktif ---- */
function CuteShrimp({
  id,
  style,
  className,
}: {
  id: number;
  style?: React.CSSProperties;
  className?: string;
}) {
  const [greeting, setGreeting] = useState<string | null>(null);
  const [isExcited, setIsExcited] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleInteract = useCallback(() => {
    const msg = GREETINGS[Math.floor(Math.random() * GREETINGS.length)];
    setGreeting(msg);
    setIsExcited(true);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setGreeting(null);
      setIsExcited(false);
    }, 3000);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      className={`shrimp-wrapper ${className || ""} ${isExcited ? "excited" : ""}`}
      style={style}
      onClick={handleInteract}
      onMouseEnter={handleInteract}
      onTouchStart={handleInteract}
      role="button"
      tabIndex={-1}
      aria-label={`Udang dekoratif ${id}`}
    >
      {/* Speech bubble sapaan */}
      {greeting && (
        <div className="shrimp-speech" key={greeting}>
          {greeting}
        </div>
      )}

      {/* SVG Udang Detail */}
      <svg
        viewBox="0 0 120 60"
        className="shrimp-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradient badan udang */}
          <linearGradient id={`body-grad-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF9B6A" />
            <stop offset="40%" stopColor="#FF7043" />
            <stop offset="100%" stopColor="#E64A19" />
          </linearGradient>
          <linearGradient id={`head-grad-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFAB91" />
            <stop offset="50%" stopColor="#FF7043" />
            <stop offset="100%" stopColor="#D84315" />
          </linearGradient>
          <linearGradient id={`tail-grad-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF7043" />
            <stop offset="100%" stopColor="#FF8A65" stopOpacity="0.6" />
          </linearGradient>
          {/* Glow effect */}
          <filter id={`glow-${id}`}>
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Shadow */}
          <filter id={`shadow-${id}`}>
            <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#000" floodOpacity="0.3" />
          </filter>
        </defs>

        <g filter={`url(#shadow-${id})`}>
          {/* Antena panjang 1 */}
          <path
            d="M 22 18 Q 10 6 4 2"
            fill="none"
            stroke="#FF8A65"
            strokeWidth="1.2"
            strokeLinecap="round"
            className="antenna a-1"
          />
          {/* Antena panjang 2 */}
          <path
            d="M 22 22 Q 12 14 2 14"
            fill="none"
            stroke="#FF8A65"
            strokeWidth="1.2"
            strokeLinecap="round"
            className="antenna a-2"
          />
          {/* Antena pendek 1 */}
          <path
            d="M 24 20 Q 18 16 14 10"
            fill="none"
            stroke="#FFAB91"
            strokeWidth="1"
            strokeLinecap="round"
            className="antenna a-3"
          />
          {/* Antena pendek 2 */}
          <path
            d="M 24 24 Q 18 28 14 34"
            fill="none"
            stroke="#FFAB91"
            strokeWidth="1"
            strokeLinecap="round"
            className="antenna a-4"
          />

          {/* Rostrum (moncong tajam) */}
          <polygon
            points="18,22 8,21 18,24"
            fill="#E64A19"
          />

          {/* Kepala */}
          <ellipse
            cx="30" cy="22"
            rx="12" ry="10"
            fill={`url(#head-grad-${id})`}
          />
          {/* Highlight kepala */}
          <ellipse
            cx="27" cy="18"
            rx="5" ry="3.5"
            fill="rgba(255,255,255,0.25)"
          />

          {/* Mata - bagian putih */}
          <circle cx="25" cy="19" r="4" fill="white" />
          {/* Mata - iris */}
          <circle cx="24.5" cy="19" r="2.5" fill="#1a1a2e" />
          {/* Mata - pupil */}
          <circle cx="24" cy="18.5" r="1.2" fill="black" />
          {/* Mata - kilau */}
          <circle cx="23.2" cy="17.8" r="0.8" fill="white" className="eye-sparkle" />
          <circle cx="25.5" cy="19.5" r="0.4" fill="rgba(255,255,255,0.6)" />

          {/* Pipi (blush) */}
          <ellipse cx="28" cy="25" rx="3" ry="1.5" fill="rgba(255,100,80,0.35)" />

          {/* Mulut tersenyum */}
          <path
            d="M 27 26 Q 29 28.5 32 26"
            fill="none"
            stroke="#BF360C"
            strokeWidth="0.8"
            strokeLinecap="round"
          />

          {/* Segmen badan 1 */}
          <ellipse cx="44" cy="24" rx="8" ry="9" fill={`url(#body-grad-${id})`} />
          <path d="M 42 15.5 L 42 32.5" stroke="rgba(180,80,40,0.25)" strokeWidth="0.5" />

          {/* Segmen badan 2 */}
          <ellipse cx="55" cy="25" rx="7" ry="8.5" fill={`url(#body-grad-${id})`} />
          <path d="M 53 17 L 53 33" stroke="rgba(180,80,40,0.25)" strokeWidth="0.5" />

          {/* Segmen badan 3 */}
          <ellipse cx="65" cy="26" rx="6.5" ry="8" fill={`url(#body-grad-${id})`} />
          <path d="M 63 18.5 L 63 33.5" stroke="rgba(180,80,40,0.25)" strokeWidth="0.5" />

          {/* Segmen badan 4 (makin kecil) */}
          <ellipse cx="74" cy="27" rx="5.5" ry="7" fill={`url(#body-grad-${id})`} />
          <path d="M 72 20.5 L 72 33.5" stroke="rgba(180,80,40,0.25)" strokeWidth="0.5" />

          {/* Segmen badan 5 */}
          <ellipse cx="82" cy="28" rx="4.5" ry="6" fill={`url(#body-grad-${id})`} />

          {/* Segmen ekor */}
          <ellipse cx="89" cy="29" rx="4" ry="5" fill="#E64A19" />

          {/* Ekor kipas */}
          <path
            d="M 92 28 Q 102 20 110 18"
            fill="none"
            stroke={`url(#tail-grad-${id})`}
            strokeWidth="3.5"
            strokeLinecap="round"
            className="tail-fan tf-1"
          />
          <path
            d="M 93 29 Q 104 28 114 26"
            fill="none"
            stroke={`url(#tail-grad-${id})`}
            strokeWidth="4"
            strokeLinecap="round"
            className="tail-fan tf-2"
          />
          <path
            d="M 92 30 Q 102 36 110 40"
            fill="none"
            stroke={`url(#tail-grad-${id})`}
            strokeWidth="3.5"
            strokeLinecap="round"
            className="tail-fan tf-3"
          />

          {/* Highlight badan (kilauan) */}
          <ellipse cx="46" cy="19" rx="4" ry="2" fill="rgba(255,255,255,0.18)" />
          <ellipse cx="58" cy="20" rx="3.5" ry="1.5" fill="rgba(255,255,255,0.14)" />
          <ellipse cx="68" cy="21" rx="3" ry="1.2" fill="rgba(255,255,255,0.12)" />

          {/* Kaki-kaki (swimmerets) */}
          <g className="shrimp-swimmerets">
            <line x1="38" y1="32" x2="36" y2="40" stroke="#E64A19" strokeWidth="0.8" strokeLinecap="round" className="swimmeret sw-1" />
            <line x1="42" y1="33" x2="40" y2="41" stroke="#E64A19" strokeWidth="0.8" strokeLinecap="round" className="swimmeret sw-2" />
            <line x1="48" y1="33" x2="46" y2="41" stroke="#E64A19" strokeWidth="0.8" strokeLinecap="round" className="swimmeret sw-3" />
            <line x1="54" y1="33.5" x2="52" y2="41" stroke="#E64A19" strokeWidth="0.8" strokeLinecap="round" className="swimmeret sw-4" />
            <line x1="60" y1="34" x2="58" y2="41.5" stroke="#E64A19" strokeWidth="0.8" strokeLinecap="round" className="swimmeret sw-5" />
            <line x1="66" y1="34" x2="64" y2="41" stroke="#E64A19" strokeWidth="0.8" strokeLinecap="round" className="swimmeret sw-6" />
            <line x1="72" y1="34" x2="70" y2="40" stroke="#E64A19" strokeWidth="0.7" strokeLinecap="round" className="swimmeret sw-7" />
            <line x1="78" y1="34" x2="76" y2="39" stroke="#E64A19" strokeWidth="0.6" strokeLinecap="round" className="swimmeret sw-8" />
          </g>

          {/* Walking legs (kaki jalan di depan) */}
          <g className="walking-legs">
            <line x1="32" y1="30" x2="28" y2="38" stroke="#FFAB91" strokeWidth="0.8" strokeLinecap="round" className="walk-leg wl-1" />
            <line x1="35" y1="31" x2="31" y2="39" stroke="#FFAB91" strokeWidth="0.8" strokeLinecap="round" className="walk-leg wl-2" />
            <line x1="38" y1="31" x2="35" y2="39" stroke="#FFAB91" strokeWidth="0.8" strokeLinecap="round" className="walk-leg wl-3" />
          </g>
        </g>
      </svg>

      {/* Efek sparkle saat excited */}
      {isExcited && (
        <div className="shrimp-sparkles">
          <span className="sparkle sp1" />
          <span className="sparkle sp2" />
          <span className="sparkle sp3" />
          <span className="sparkle sp4" />
        </div>
      )}
    </div>
  );
}

/* ---- Komponen Utama Background ---- */
export default function AmbientBackground({ style }: { style?: React.CSSProperties }) {
  return (
    <div className="bg-ambient ocean" aria-hidden="false" style={style}>
      {/* Ocean gradient base */}
      <div className="ocean-gradient" />

      {/* Caustic light pattern overlay */}
      <div className="ocean-caustics" />

      {/* Light rays from the surface */}
      <div className="ocean-rays">
        <span className="ray r1" />
        <span className="ray r2" />
        <span className="ray r3" />
        <span className="ray r4" />
        <span className="ray r5" />
        <span className="ray r6" />
      </div>

      {/* Floating particles / plankton */}
      <span className="particle p1" />
      <span className="particle p2" />
      <span className="particle p3" />
      <span className="particle p4" />
      <span className="particle p5" />
      <span className="particle p6" />
      <span className="particle p7" />
      <span className="particle p8" />
      <span className="particle p9" />
      <span className="particle p10" />

      {/* Bubbles */}
      <span className="bubble bub1" />
      <span className="bubble bub2" />
      <span className="bubble bub3" />
      <span className="bubble bub4" />
      <span className="bubble bub5" />
      <span className="bubble bub6" />
      <span className="bubble bub7" />
      <span className="bubble bub8" />
      <span className="bubble bub9" />
      <span className="bubble bub10" />

      {/* Seaweed / kelp */}
      <div className="seaweed sw1">
        <div className="seaweed-blade" />
        <div className="seaweed-blade b2" />
        <div className="seaweed-blade b3" />
      </div>
      <div className="seaweed sw2">
        <div className="seaweed-blade" />
        <div className="seaweed-blade b2" />
      </div>
      <div className="seaweed sw3">
        <div className="seaweed-blade" />
        <div className="seaweed-blade b2" />
        <div className="seaweed-blade b3" />
      </div>
      <div className="seaweed sw4">
        <div className="seaweed-blade" />
        <div className="seaweed-blade b2" />
      </div>

      {/* Swimming shrimp 🦐 — interaktif! */}
      <CuteShrimp id={1} className="shrimp-1" />
      <CuteShrimp id={2} className="shrimp-2" />
      <CuteShrimp id={3} className="shrimp-3" />
      <CuteShrimp id={4} className="shrimp-4" />
      <CuteShrimp id={5} className="shrimp-5" />
      <CuteShrimp id={6} className="shrimp-6" />

      {/* Jellyfish */}
      <div className="jellyfish j1">
        <div className="jelly-head" />
        <div className="jelly-tentacles">
          <div className="tentacle t1" />
          <div className="tentacle t2" />
          <div className="tentacle t3" />
          <div className="tentacle t4" />
        </div>
      </div>
      
      <div className="jellyfish j2">
        <div className="jelly-head" />
        <div className="jelly-tentacles">
          <div className="tentacle t1" />
          <div className="tentacle t2" />
          <div className="tentacle t3" />
          <div className="tentacle t4" />
        </div>
      </div>

      {/* Sandy ocean floor with corals and decorations */}
      <div className="ocean-floor">
        <div className="rock r1" />
        <div className="rock r2" />
        <div className="coral coral-1" />
        <div className="coral coral-2" />
        <div className="coral coral-3" />
        <div className="coral coral-4" />
        <div className="coral coral-5" />
        <div className="starfish" />
      </div>
    </div>
  );
}
