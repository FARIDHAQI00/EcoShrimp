import type { Metadata } from "next";
import Link from "next/link";
import WasteForm from "@/components/WasteForm";
import Reveal from "@/components/Reveal";
import { WasteBox, ArrowRight } from "@/components/Icons";
import { WASTE_PRICES, WASTE_HISTORY, WASTE_STEPS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Waste Exchange: EcoShrimp",
  description: "Bursa limbah dua arah: daftarkan limbah udang, kami jemput terjadwal, dan dapatkan uang tunai atau Green Point.",
};

export default function WastePage() {
  return (
    <section className="section" style={{ paddingTop: 24 }}>
      <div className="container">
        <div className="page-hero">
          <span className="eyebrow"><WasteBox size={14} /> Waste Exchange · Bursa Limbah</span>
          <h1>Jadikan limbah dapur Anda bernilai.</h1>
          <p>
            Daftarkan kulit dan kepala udang, kami jemput terjadwal, dan Anda menerima pembayaran
            dalam 1×24 jam plus Green Point. Tidak ada lagi limbah yang berakhir sebagai sampah.
          </p>
        </div>

        {/* CTA banner */}
        <Reveal>
          <div className="cta-banner mt-8">
            <h2>Total bulan ini: Rp 87.500 · 240 Green Point</h2>
            <p>Restoran & pengolah seafood: mulai hasilkan pemasukan dari limbah yang selama ini dibuang.</p>
          </div>
        </Reveal>

        {/* Form + Listing aktif */}
        <div className="two-col mt-8">
                <WasteForm />
                <div className="card listing-card">
                  <h3 style={{ fontSize: "var(--text-h3)", fontWeight: 700 }}>Listing Aktif Saya</h3>
                  <div className="glass mt-4" style={{ padding: 18 }}>
                    <div className="flex items-center justify-between">
                      <strong>Kulit & Kepala Udang</strong>
                      <span className="listing-status"><span className="dot" /> Terjadwal</span>
                    </div>
                    <div className="text-secondary mt-2" style={{ fontSize: "var(--text-body-sm)" }}>
                      Est. 15 kg · Rp 3.500 / kg · Selasa, 08.00 WIB
                    </div>
                    <div className="flex gap-2 mt-4">
                      <button className="btn btn-secondary btn-sm">Detail</button>
                      <button className="btn btn-ghost btn-sm">Batalkan</button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h4 className="label">Riwayat Setoran</h4>
                    <div className="table-wrap">
                      <table className="data-table">
                        <thead>
                          <tr><th>Tanggal</th><th>Berat</th><th>Nilai</th><th>Status</th></tr>
                        </thead>
                        <tbody>
                          {WASTE_HISTORY.map((r) => (
                            <tr key={r.date}>
                              <td>{r.date}</td>
                              <td>{r.kg} kg</td>
                              <td className="price">{r.total}</td>
                              <td><span className="pill pill-success">{r.status}</span></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
        </div>

        {/* Cara kerja 4 langkah */}
        <div className="mt-8">
          <Reveal>
            <div className="section-head"><span className="overline">Cara Kerja</span><h2 className="section-title mt-2">Empat langkah, di bawah 2 menit.</h2></div>
          </Reveal>
          <div className="grid grid-4 mt-6">
            {WASTE_STEPS.map((s) => (
              <div className="card how-card" key={s.n}>
                <div className="how-num">{s.n}</div>
                <h3 style={{ fontSize: "var(--text-h4)" }}>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Harga referensi */}
        <div className="mt-8">
          <Reveal>
            <div className="section-head"><span className="overline">Transparan</span><h2 className="section-title mt-2">Harga referensi limbah.</h2></div>
          </Reveal>
          <div className="table-wrap card mt-6" style={{ padding: 0 }}>
            <table className="data-table">
              <thead><tr><th>Jenis Limbah</th><th>Harga / kg</th><th>Pembaruan Terakhir</th></tr></thead>
              <tbody>
                {WASTE_PRICES.map((w) => (
                  <tr key={w.type}>
                    <td style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>{w.type}</td>
                    <td className="price">{w.price}</td>
                    <td>{w.updated}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-muted mt-3" style={{ fontSize: "var(--text-caption)" }}>
            Setoran minimum 2 kg · Harga akhir dihitung dari berat aktual saat penjemputan · Pembayaran 1×24 jam.
          </p>
        </div>

        <div className="mt-8" style={{ textAlign: "center" }}>
          <Link href="/green-point" className="btn btn-secondary btn-lg">
            Lihat reward Green Point <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
