"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Scroll reveal (Design System §10.4) — muncul sekali saat masuk viewport.
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: 1 | 2 | 3 | 0;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`sr ${delay ? `d${delay}` : ""} ${className}`}>
      {children}
    </div>
  );
}
