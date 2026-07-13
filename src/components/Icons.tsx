import type { SVGProps } from "react";

// Pustaka ikon utama: Lucide-style (open-source, stroke 2, konsisten) — Design System §7.
type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function base(size: number) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
}

export function Home({ size = 24, ...p }: IconProps) {
  return (<svg {...base(size)} {...p}><path d="M3 9.5 12 3l9 6.5" /><path d="M5 10v10h14V10" /><path d="M9 20v-6h6v6" /></svg>);
}
export function WasteBox({ size = 24, ...p }: IconProps) {
  return (<svg {...base(size)} {...p}><path d="m3 8 9-5 9 5-9 5-9-5Z" /><path d="M3 8v8l9 5 9-5V8" /><path d="M12 13v8" /></svg>);
}
export function Bag({ size = 24, ...p }: IconProps) {
  return (<svg {...base(size)} {...p}><path d="M6 8h12l-1 12H7L6 8Z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></svg>);
}
export function Coins({ size = 24, ...p }: IconProps) {
  return (<svg {...base(size)} {...p}><circle cx="9" cy="9" r="6" /><path d="M18.09 10.37A6 6 0 1 1 15 21.4" /><path d="M7 6h1v4" /><path d="m16.71 13.88.7.71-2.82 2.82" /></svg>);
}
export function User({ size = 24, ...p }: IconProps) {
  return (<svg {...base(size)} {...p}><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 4-6 8-6s8 2 8 6" /></svg>);
}
export function Book({ size = 24, ...p }: IconProps) {
  return (<svg {...base(size)} {...p}><path d="M4 4h12a2 2 0 0 1 2 2v14H6a2 2 0 0 1-2-2V4Z" /><path d="M18 6h2v14H6" /></svg>);
}
export function Leaf({ size = 24, ...p }: IconProps) {
  return (<svg {...base(size)} {...p}><path d="M4 20C4 10 12 4 20 4c0 8-6 16-16 16Z" /><path d="M4 20 14 10" /></svg>);
}
export function Fish({ size = 24, ...p }: IconProps) {
  return (<svg {...base(size)} {...p}><path d="M3 12c3-5 9-6 13-4 2 1 4 3 5 4-1 1-3 3-5 4-4 2-10 1-13-4Z" /><path d="M18 11.5h.01" /><path d="M3 12c-1-1-1-3 0-4M3 12c-1 1-1 3 0 4" /></svg>);
}
export function Drop({ size = 24, ...p }: IconProps) {
  return (<svg {...base(size)} {...p}><path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z" /></svg>);
}
export function Water({ size = 24, ...p }: IconProps) {
  return (<svg {...base(size)} {...p}><path d="M3 8c2 2 4 2 6 0s4-2 6 0 4 2 6 0" /><path d="M3 14c2 2 4 2 6 0s4-2 6 0 4 2 6 0" /></svg>);
}
export function Send({ size = 24, ...p }: IconProps) {
  return (<svg {...base(size)} {...p}><path d="M22 2 11 13" /><path d="M22 2 15 22l-4-9-9-4 20-7Z" /></svg>);
}
export function X({ size = 24, ...p }: IconProps) {
  return (<svg {...base(size)} {...p}><path d="M18 6 6 18M6 6l12 12" /></svg>);
}
export function ArrowRight({ size = 24, ...p }: IconProps) {
  return (<svg {...base(size)} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>);
}
export function Check({ size = 24, ...p }: IconProps) {
  return (<svg {...base(size)} {...p}><path d="M20 6 9 17l-5-5" /></svg>);
}
export function Sparkles({ size = 24, ...p }: IconProps) {
  return (<svg {...base(size)} {...p}><path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z" /><path d="M19 14l.9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14Z" /></svg>);
}
export function Truck({ size = 24, ...p }: IconProps) {
  return (<svg {...base(size)} {...p}><path d="M2 6h11v10H2zM13 9h5l3 3v4h-8" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></svg>);
}
export function Factory({ size = 24, ...p }: IconProps) {
  return (<svg {...base(size)} {...p}><path d="M3 21V9l6 4V9l6 4V6l6 15H3Z" /><path d="M7 21v-4M12 21v-4M17 21v-4" /></svg>);
}
export function Chart({ size = 24, ...p }: IconProps) {
  return (<svg {...base(size)} {...p}><path d="M3 3v18h18" /><path d="M7 15l4-5 3 3 5-7" /></svg>);
}
export function Boxes({ size = 24, ...p }: IconProps) {
  return (<svg {...base(size)} {...p}><path d="M3 8v8l9 5 9-5V8l-9-5-9 5Z" /><path d="m3 8 9 5 9-5M12 13v8" /></svg>);
}
export function Users({ size = 24, ...p }: IconProps) {
  return (<svg {...base(size)} {...p}><circle cx="9" cy="8" r="3.2" /><path d="M3 20c0-3.3 2.7-5 6-5s6 1.7 6 5" /><path d="M16 5.5a3 3 0 0 1 0 5.8M21 20c0-2.6-1.6-4.3-4-4.8" /></svg>);
}
export function Star({ size = 16, ...p }: IconProps) {
  return (<svg {...base(size)} {...p} fill="currentColor" stroke="none"><path d="M12 3.5l2.6 5.3 5.9.8-4.3 4.1 1 5.8L12 16.9 6.8 19.5l1-5.8L3.5 9.6l5.9-.8L12 3.5Z" /></svg>);
}
export function Whatsapp({ size = 20, ...p }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.24h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04A9.9 9.9 0 0 0 12.04 2Zm5.83 14.06c-.25.7-1.44 1.34-1.98 1.4-.53.06-1.02.24-3.42-.72-2.9-1.14-4.74-4.1-4.88-4.3-.14-.2-1.16-1.54-1.16-2.94 0-1.4.72-2.08.98-2.36.25-.28.55-.35.73-.35.18 0 .37 0 .53.01.17.01.4-.06.62.48.25.6.85 2.08.92 2.23.07.14.12.31.02.51-.1.2-.14.31-.28.48-.14.17-.3.38-.42.5-.14.14-.29.3-.13.58.17.28.74 1.22 1.6 1.98 1.1.98 2.02 1.28 2.3 1.42.28.14.44.12.6-.07.17-.2.7-.82.89-1.1.18-.28.37-.23.62-.14.25.09 1.6.76 1.87.9.28.14.46.2.53.32.07.12.07.68-.18 1.38Z" /></svg>);
}
export function Menu({ size = 24, ...p }: IconProps) {
  return (<svg {...base(size)} {...p}><path d="M4 6h16M4 12h16M4 18h16" /></svg>);
}
export function Recycle({ size = 24, ...p }: IconProps) {
  return (<svg {...base(size)} {...p}><path d="M7 19H5a2 2 0 0 1-1.7-3l1.5-2.6" /><path d="M12 4l1.7 3M17 19h2a2 2 0 0 0 1.7-3l-3.4-6a2 2 0 0 0-3.5 0l-.6 1" /><path d="M9.5 8 7 4 4.5 8M7 19l-2.5-1.5M17 19l2 1" /></svg>);
}
