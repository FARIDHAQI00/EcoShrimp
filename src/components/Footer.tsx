import Link from "next/link";
import Shrimy from "./Shrimy";
import { Whatsapp } from "./Icons";
import { WA_CS } from "@/lib/chatKnowledge";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="flex items-center gap-3" style={{ marginBottom: 12 }}>
            <Shrimy size={40} />
            <span className="nav-wordmark" style={{ color: "#fff" }}>Shrimp Loop</span>
          </div>
          <p className="footer-tag">Dari Limbah Menjadi Nilai.<br />Dari Laut Kembali ke Laut.</p>
          <a
            href={`https://wa.me/${WA_CS}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-glass btn-glass--dark btn-sm mt-4"
          >
            <Whatsapp size={16} /> Layanan Pelanggan
          </a>
        </div>

        <div>
          <h4 className="footer-head">Produk</h4>
          <ul className="footer-links">
            <li><Link href="/marketplace">Pakan Akuakultur</Link></li>
            <li><Link href="/marketplace">Kitosan & Pupuk</Link></li>
            <li><Link href="/marketplace">Bundle & Starter Kit</Link></li>
            <li><Link href="/langganan">Langganan Produk</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-head">Ekosistem</h4>
          <ul className="footer-links">
            <li><Link href="/waste-exchange">Waste Exchange</Link></li>
            <li><Link href="/green-point">Green Point</Link></li>
            <li><Link href="/edukasi">Edukasi & SHRIMY</Link></li>
            <li><Link href="/admin">Admin Dashboard</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-head">Tentang</h4>
          <ul className="footer-links">
            <li>UTU Awards 2026</li>
            <li>Inovasi Digital Mahasiswa</li>
            <li>Universitas Teuku Umar</li>
            <li>Aceh, Indonesia</li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Shrimp Loop · Marketplace Digital Berbasis Circular Economy</span>
        <span>Versi 1.1 · UTU Awards 2026</span>
      </div>
    </footer>
  );
}
