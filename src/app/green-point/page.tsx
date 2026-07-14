import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { Coins, Leaf, Check } from "@/components/Icons";
import { POINT_EARN, LEVELS, REWARDS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Green Point: EcoShrimp",
  description: "Sistem insentif Green Point: kumpulkan poin dari setiap aktivitas, naik level, dan tukar dengan reward.",
};

export default function GreenPointPage() {
  const pts = 1240;
  const cur = 500;
  const next = 2000;
  const pct = Math.round(((pts - cur) / (next - cur)) * 100);

  return (
    <section className="section" style={{ paddingTop: 24 }}>
      <div className="container">
        <div className="page-hero">
          <span className="eyebrow"><Coins size={14} /> Green Point System</span>
          <h1>Setiap aksi hijau, dihargai.</h1>
          <p>Kumpulkan poin dari setoran limbah, belanja, dan edukasi. Naik level, buka diskon, dan tukar reward nyata.</p>
        </div>

        {/* Dashboard poin + level (§9.6) */}
        <Reveal>
          <div className="gp-hero mt-8">
            <div className="flex items-center justify-between" style={{ flexWrap: "wrap", gap: 12 }}>
              <div>
                <div className="gp-pts">1.240 <span style={{ fontSize: "1rem", fontWeight: 500 }}>pts</span></div>
                <div style={{ opacity: .95, marginTop: 4 }}>Level: <strong>Green Member</strong> · Diskon 5%</div>
              </div>
              <span className="badge-point" style={{ background: "rgba(255,255,255,.18)", border: "1px solid rgba(255,255,255,.4)", color: "#fff" }}>
                <Leaf size={13} /> Diskon aktif
              </span>
            </div>

            <div className="level-track">
              <div className="level-fill" style={{ width: `${pct}%` }} />
              <span className="level-node" style={{ left: "0%" }} />
              <span className="level-node you" style={{ left: `${pct}%` }} />
              <span className="level-node" style={{ left: "100%" }} />
            </div>
            <div className="flex items-center justify-between" style={{ fontSize: "var(--text-caption)", opacity: .95 }}>
              <span>Green Member (500)</span>
              <span>Ocean Keeper (2.000)</span>
            </div>
            <p style={{ marginTop: 14, fontWeight: 600 }}>760 poin lagi menuju Ocean Keeper, gratis ongkir menanti!</p>
          </div>
        </Reveal>

        {/* Cara mendapat poin */}
        <div className="two-col mt-8">
            <div>
              <Reveal><h2 className="section-title" style={{ fontSize: "var(--text-display-s)" }}>Cara Mendapat Poin</h2></Reveal>
              <div className="table-wrap card mt-4" style={{ padding: 0 }}>
                <table className="data-table">
                  <thead><tr><th>Aktivitas</th><th>Poin</th></tr></thead>
                  <tbody>
                    {POINT_EARN.map((e) => (
                      <tr key={e.act}><td style={{ color: "var(--color-text-primary)" }}>{e.act}</td><td><span className="badge-point">{e.pts}</span></td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <Reveal><h2 className="section-title" style={{ fontSize: "var(--text-display-s)" }}>Level Pengguna</h2></Reveal>
              <div className="grid mt-4" style={{ gap: 12, gridTemplateColumns: "1fr" }}>
                {LEVELS.map((l) => (
                  <div key={l.lvl} className={`card level-card ${l.name === "Green Member" ? "current" : ""}`}>
                    <div className="flex items-center justify-between">
                      <strong style={{ color: "var(--color-text-primary)" }}>Lv {l.lvl} · {l.name}</strong>
                      {l.name === "Green Member" && <span className="pill pill-success"><Check size={12} /> Anda</span>}
                    </div>
                    <div className="text-muted mono" style={{ fontSize: "var(--text-caption)", marginTop: 4 }}>{l.threshold}</div>
                    <div className="text-secondary" style={{ fontSize: "var(--text-body-sm)", marginTop: 6 }}>{l.benefit}</div>
                  </div>
                ))}
              </div>
            </div>
        </div>

        {/* Katalog reward */}
        <div className="mt-8">
          <Reveal>
            <div className="section-head"><span className="overline">Katalog Reward</span><h2 className="section-title mt-2">Tukar poin Anda.</h2></div>
          </Reveal>
          <div className="reward-grid mt-6">
            {REWARDS.map((r) => (
              <div className="card reward-card" key={r.reward}>
                <div className="app-icon"><Coins size={24} /></div>
                <strong style={{ color: "var(--color-text-primary)" }}>{r.reward}</strong>
                <div className="flex items-center justify-between mt-2">
                  <span className="price mono">{r.cost.toLocaleString("id-ID")} pts</span>
                  <button className="btn btn-primary btn-sm" disabled={r.cost > pts}>
                    {r.cost > pts ? "Kurang poin" : "Tukar"}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <p className="text-muted mt-3" style={{ fontSize: "var(--text-caption)" }}>
            Penukaran menggunakan QR code di titik fisik · Stok real-time · Leaderboard komunitas bulanan (opt-in).
          </p>
        </div>
      </div>
    </section>
  );
}
