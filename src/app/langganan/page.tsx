import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { Boxes, Check } from "@/components/Icons";
import { PACKAGES, formatRupiah } from "@/lib/data";

export const metadata: Metadata = {
  title: "Langganan — Shrimp Loop",
  description: "Layanan berlangganan produk olahan limbah udang dengan harga 15–20% lebih hemat, dikirim rutin.",
};

const MANAGE = [
  "Pilihan frekuensi: mingguan, dua mingguan, atau bulanan",
  "Tanggal pengiriman dapat diatur sesuai kebutuhan",
  "Langganan dapat dijeda hingga 2 bulan per tahun",
  "Dapat dibatalkan kapan saja, notifikasi 7 hari sebelum periode berikutnya",
  "Perpanjangan otomatis dengan notifikasi H-3",
  "Invoice digital otomatis per periode",
];

export default function LanggananPage() {
  return (
    <section className="section" style={{ paddingTop: 24 }}>
      <div className="container">
        <div className="page-hero">
          <span className="eyebrow"><Boxes size={14} /> Langganan Produk</span>
          <h1>Pasokan rutin, harga lebih hemat.</h1>
          <p>Produk olahan limbah udang dikirim otomatis ke alamat Anda — 15–20% lebih murah dari harga eceran. Tanpa perlu memesan ulang tiap bulan.</p>
        </div>

        <div className="pkg-grid mt-8">
          {PACKAGES.map((p, i) => (
            <Reveal key={p.name} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className="card pkg-card">
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h2)", fontWeight: 600, color: "var(--color-text-primary)" }}>{p.name}</h3>
                <p className="text-secondary" style={{ fontSize: "var(--text-body-sm)" }}>{p.contents}</p>
                <div className="mt-2">
                  <span className="pkg-old">{formatRupiah(p.normal)}</span>
                  <div className="price" style={{ fontSize: "1.5rem" }}>{formatRupiah(p.sub)}<span style={{ fontSize: "var(--text-body-sm)", fontWeight: 500 }}> /bln</span></div>
                </div>
                <span className="badge-point" style={{ alignSelf: "flex-start" }}>Hemat {p.save}</span>
                <button className="btn btn-gradient btn-block mt-4">Pilih Paket</button>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid mt-8" style={{ gridTemplateColumns: "1fr" }}>
          <Reveal>
            <div className="glass-strong" style={{ padding: 28 }}>
              <h2 className="section-title" style={{ fontSize: "var(--text-display-s)" }}>Manajemen Langganan yang Fleksibel</h2>
              <div className="grid grid-2 mt-6">
                {MANAGE.map((m) => (
                  <div className="flex items-center gap-3" key={m}>
                    <span className="how-num" style={{ width: 28, height: 28, flex: "none" }}><Check size={16} /></span>
                    <span className="text-secondary" style={{ fontSize: "var(--text-body-sm)" }}>{m}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted mt-6" style={{ fontSize: "var(--text-caption)" }}>
                Tombol jeda/batal mudah ditemukan, tanpa dipersulit · Notifikasi H-3 dan H-1 sebelum setiap pengiriman.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
