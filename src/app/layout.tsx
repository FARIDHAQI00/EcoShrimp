import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ShrimyDefs } from "@/components/Shrimy";
import AmbientBackground from "@/components/AmbientBackground";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { AuthProvider } from "@/components/AuthProvider";
import { CartProvider } from "@/components/CartProvider";

export const metadata: Metadata = {
  title: "EcoShrimp: Dari Limbah Menjadi Nilai",
  description:
    "Marketplace digital berbasis circular economy yang mengubah limbah udang menjadi Chito Grow (pupuk hayati kitosan) dan Aqua Feed (pakan budidaya). UTU Awards 2026 · Universitas Teuku Umar.",
  keywords: ["Chito Grow", "Aqua Feed", "kitosan", "limbah udang", "circular economy", "Aceh", "EcoShrimp"],
  authors: [{ name: "Tim EcoShrimp · Universitas Teuku Umar" }],
  openGraph: {
    title: "EcoShrimp: Dari Limbah Menjadi Nilai. Dari Laut Kembali ke Laut.",
    description: "Ekosistem agro-marina sirkular digital di Aceh.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#F75E28",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a href="#main" className="skip-link">Lewati ke konten</a>
        <ShrimyDefs />
        <AmbientBackground />
        <AuthProvider>
          <CartProvider>
            <Navbar />
            <main id="main" className="has-bottom-nav">{children}</main>
            <Footer />
            <BottomNav />
            <ChatWidget />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
