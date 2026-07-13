"use client";

import React, { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface OceanScrollProps {
  children?: ReactNode;
}

const OceanScroll: React.FC<OceanScrollProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Melacak pergerakan scroll di dalam container ini
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // --- Transisi Lapisan Permukaan (Tambak) ---
  // Menghilang saat scroll mencapai 40%
  const surfaceOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  // Bergerak ke atas seolah-olah kamera tenggelam
  const surfaceY = useTransform(scrollYProgress, [0, 0.4], ["0%", "-50%"]);

  // --- Transisi Lapisan Bawah Laut ---
  // Mulai muncul di scroll 20%, penuh di 50%
  const underwaterOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

  return (
    <div ref={containerRef} style={{ height: "300vh", position: "relative" }}>
      
      {/* KONTEN FIXED (Akan selalu di layar selama scroll) */}
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
        
        {/* LAPISAN 1: Permukaan Tambak Udang (Hero Section) */}
        <motion.div
          style={{
            opacity: surfaceOpacity,
            y: surfaceY,
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, #87CEEB 0%, #D2B48C 70%, #48cae4 100%)", // Langit, tanah, air dangkal (dari request user)
            display: "flex",
            flexDirection: "column",
            zIndex: 10,
          }}
        >
          {/* Konten Hero (Children) ditempatkan di atas permukaan */}
          <div style={{ flex: 1, position: "relative", zIndex: 10 }}>
            {children}
          </div>
          
          {/* Ilustrasi Permukaan Air (SVG Gelombang Pantai) */}
          <div style={{ width: "100%", height: "15vh", position: "relative", zIndex: 5 }}>
            <svg viewBox="0 0 1440 320" style={{ position: "absolute", bottom: 0, left: 0, width: "100%" }}>
              <path fill="#0096c7" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,144C672,128,768,128,864,149.3C960,171,1056,213,1152,213.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              <path fill="#48cae4" fillOpacity="0.8" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,186.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </motion.div>

        {/* LAPISAN 2: Bawah Laut & Udang Hidup */}
        <motion.div
          style={{
            opacity: underwaterOpacity,
            position: "absolute",
            inset: 0,
            zIndex: 5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", color: "white" }}>
            <h2 style={{ 
              fontSize: "clamp(2rem, 5vw, 3rem)", 
              textShadow: "0 4px 20px rgba(0,0,0,0.6)", 
              fontWeight: "bold",
              textAlign: "center",
              fontFamily: "var(--font-display)"
            }}>
              Menyelam ke Ekosistem Kami
            </h2>
            <p style={{ 
              marginTop: "1rem", 
              maxWidth: "600px", 
              textAlign: "center", 
              lineHeight: 1.6,
              fontSize: "1.1rem",
              textShadow: "0 2px 10px rgba(0,0,0,0.5)",
              color: "rgba(255,255,255,0.8)"
            }}>
              Di bawah permukaan, EcoShrimp mengubah limbah menjadi kehidupan baru. Terus scroll ke bawah untuk melihat dampaknya.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OceanScroll;
