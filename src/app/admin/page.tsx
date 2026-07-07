import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { Chart, Truck, Factory, Boxes, Users, Coins } from "@/components/Icons";
import { ADMIN_STATS, ADMIN_PICKUPS, ADMIN_PRODUCTION, ADMIN_INVENTORY } from "@/lib/data";

export const metadata: Metadata = {
  title: "Admin & Operations Dashboard — EcoShrimp",
  description: "Panel kendali internal: manajemen penjemputan limbah, produksi, inventori, dan analitik bisnis.",
};

const STAT_ICONS = [Coins, Users, Truck, Chart];
const PINS = [
  { top: "30%", left: "28%" }, { top: "55%", left: "48%" }, { top: "42%", left: "68%" },
  { top: "68%", left: "34%" }, { top: "38%", left: "82%" },
];

export default function AdminPage() {
  return (
    <section className="section" style={{ paddingTop: 24 }}>
      <div className="container">
        <div className="page-hero">
          <span className="eyebrow"><Chart size={14} /> Admin & Operations Dashboard</span>
          <h1>Kendali penuh operasional EcoShrimp.</h1>
          <p>Dari koordinasi penjemputan, pelacakan produksi, hingga analitik dampak lingkungan — dalam satu panel real-time.</p>
        </div>

        {/* Analytics */}
        <div className="admin-stat-grid mt-8">
          {ADMIN_STATS.map((s, i) => {
            const Icon = STAT_ICONS[i];
            return (
              <Reveal key={s.label} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="card stat-card">
                  <div className="flex items-center justify-between">
                    <span className="stat-icon"><Icon size={22} /></span>
                    <span className={`pill pill-${s.tone}`}>{s.trend}</span>
                  </div>
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Waste management: peta + daftar */}
        <div className="admin-grid mt-8">
          <div className="card panel">
            <div className="flex items-center gap-3"><span className="stat-icon"><Truck size={20} /></span><h3>Manajemen Penjemputan</h3></div>
            <div className="table-wrap mt-4">
              <table className="data-table">
                <thead><tr><th>ID</th><th>Mitra</th><th>Berat</th><th>Jadwal</th><th>Status</th></tr></thead>
                <tbody>
                  {ADMIN_PICKUPS.map((p) => (
                    <tr key={p.id}>
                      <td className="mono">{p.id}</td>
                      <td style={{ color: "var(--color-text-primary)" }}>{p.partner}</td>
                      <td>{p.kg}</td>
                      <td>{p.when}</td>
                      <td><span className={`pill pill-${p.tone}`}>{p.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex gap-2 mt-4">
              <button className="btn btn-secondary btn-sm">Ekspor CSV</button>
              <button className="btn btn-ghost btn-sm">Tugaskan Driver</button>
            </div>
          </div>

          <div className="card panel">
            <div className="flex items-center gap-3"><span className="stat-icon"><Boxes size={20} /></span><h3>Peta Titik Pengumpulan</h3></div>
            <div className="map-holder mt-4">
              {PINS.map((p, i) => <span key={i} className="map-pin" style={{ top: p.top, left: p.left }} />)}
              <span className="text-muted" style={{ fontSize: "var(--text-caption)", position: "absolute", bottom: 10 }}>Banda Aceh & sekitarnya · Leaflet + OpenStreetMap</span>
            </div>
          </div>
        </div>

        {/* Production tracking + inventory */}
        <div className="admin-grid mt-8">
          <div className="card panel">
            <div className="flex items-center gap-3"><span className="stat-icon"><Factory size={20} /></span><h3>Pelacakan Produksi</h3></div>
            <div className="table-wrap mt-4">
              <table className="data-table">
                <thead><tr><th>Batch</th><th>Bahan Baku</th><th>Output</th><th>Rate</th><th>QC</th></tr></thead>
                <tbody>
                  {ADMIN_PRODUCTION.map((p) => (
                    <tr key={p.batch}>
                      <td className="mono">{p.batch}</td>
                      <td>{p.input}</td>
                      <td style={{ color: "var(--color-text-primary)" }}>{p.output}</td>
                      <td className="price">{p.rate}</td>
                      <td><span className={`pill ${p.qc === "Lulus" ? "pill-success" : "pill-info"}`}>{p.qc}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="card panel">
            <div className="flex items-center gap-3"><span className="stat-icon"><Boxes size={20} /></span><h3>Inventori Stok</h3></div>
            <div className="grid mt-4" style={{ gap: 14, gridTemplateColumns: "1fr" }}>
              {ADMIN_INVENTORY.map((it) => {
                const pctFill = Math.min(Math.round((it.stock / (it.threshold * 2)) * 100), 100);
                return (
                  <div key={it.item}>
                    <div className="flex items-center justify-between" style={{ fontSize: "var(--text-body-sm)" }}>
                      <span style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>{it.item}</span>
                      <span className={`pill pill-${it.tone}`}>{it.stock} {it.unit}</span>
                    </div>
                    <div className="bar-track mt-2"><div className={`bar-fill ${it.tone === "success" ? "green" : ""}`} style={{ width: `${pctFill}%` }} /></div>
                  </div>
                );
              })}
            </div>
            <p className="text-muted mt-4" style={{ fontSize: "var(--text-caption)" }}>Peringatan stok rendah dengan threshold yang dapat dikonfigurasi.</p>
          </div>
        </div>

        {/* User management + impact */}
        <div className="admin-grid mt-8">
          <div className="card panel">
            <div className="flex items-center gap-3"><span className="stat-icon"><Users size={20} /></span><h3>Manajemen Pengguna</h3></div>
            <div className="grid grid-3 mt-4">
              <div className="glass" style={{ padding: 16, textAlign: "center" }}><div className="stat-value">7</div><div className="stat-label">Verifikasi tertunda</div></div>
              <div className="glass" style={{ padding: 16, textAlign: "center" }}><div className="stat-value">3</div><div className="stat-label">Tiket CS terbuka</div></div>
              <div className="glass" style={{ padding: 16, textAlign: "center" }}><div className="stat-value">312</div><div className="stat-label">Mitra aktif</div></div>
            </div>
          </div>
          <div className="card panel">
            <div className="flex items-center gap-3"><span className="stat-icon"><Chart size={20} /></span><h3>Dampak Lingkungan</h3></div>
            <p className="text-secondary mt-4" style={{ fontSize: "var(--text-body-sm)" }}>Estimasi <strong className="price">2,1 ton</strong> CO₂e terhindarkan, dihitung manual per batch produksi. Limbah terkumpul divisualisasikan pada peta wilayah.</p>
            <div className="bar-track mt-4"><div className="bar-fill green" style={{ width: "68%" }} /></div>
            <div className="text-muted mt-2" style={{ fontSize: "var(--text-caption)" }}>68% menuju target 6 bulan (2 ton CO₂e)</div>
          </div>
        </div>
      </div>
    </section>
  );
}
