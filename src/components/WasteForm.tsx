"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Bag } from "./Icons";
import { formatRupiah } from "@/lib/data";
import { useAuth, useCan } from "./AuthProvider";
import { ROLE_META } from "@/lib/auth/roles";

const TYPES = [
  { label: "Kulit Udang", rate: 3500 },
  { label: "Kepala Udang", rate: 3000 },
  { label: "Cangkang", rate: 4000 },
  { label: "Campuran", rate: 5000 },
];

// Form Daftarkan Limbah (PRD §5.1 / §7.2) — estimasi harga otomatis sebelum submit.
export default function WasteForm() {
  const { user } = useAuth();
  const canCreate = useCan("waste:create"); // §5.1 — sumber limbah: pengolah seafood/restoran
  const [typeIdx, setTypeIdx] = useState(0);
  const [kg, setKg] = useState(15);
  const [submitted, setSubmitted] = useState(false);

  const rate = TYPES[typeIdx].rate;
  const low = Math.round(kg * (rate - 500));
  const high = Math.round(kg * (rate + 500));
  const points = kg * 10;
  const valid = kg >= 2;

  // Peran konsumen (petambak/petani) tidak memproduksi limbah udang → tidak boleh membuat listing.
  if (user && !canCreate) {
    return (
      <div className="card listing-card" style={{ textAlign: "center", padding: 28 }}>
        <h3 style={{ fontSize: "var(--text-h3)", fontWeight: 700 }}>Fitur untuk pengolah seafood 🦐</h3>
        <p className="text-secondary mt-2">
          Pendaftaran limbah ditujukan bagi <strong>pengolah seafood & restoran</strong> yang memiliki
          kulit/kepala udang (PRD §5.1). Peran Anda saat ini <strong>{ROLE_META[user.role].short}</strong>.
        </p>
        <p className="text-secondary mt-2">
          Sebagai gantinya, Anda bisa berbelanja produk olahan limbah — pakan, kitosan, dan pupuk.
        </p>
        <Link href="/marketplace" className="btn btn-secondary mt-4"><Bag size={16} /> Ke Marketplace</Link>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="card listing-card" style={{ textAlign: "center", padding: 28 }}>
        <div className="how-num" style={{ margin: "0 auto" }}><Check size={22} /></div>
        <h3 style={{ marginTop: 14, fontSize: "var(--text-h3)", fontWeight: 700 }}>Listing terkirim! 🦐</h3>
        <p className="text-secondary mt-2">
          Nomor tiket <strong className="mono">WX-1043</strong>. Operator akan mengonfirmasi jadwal
          penjemputan. Notifikasi WhatsApp H-1 dan H-0 akan kami kirim.
        </p>
        <button className="btn btn-secondary mt-4" onClick={() => setSubmitted(false)}>Daftarkan lagi</button>
      </div>
    );
  }

  return (
    <form
      className="card listing-card"
      onSubmit={(e) => { e.preventDefault(); if (valid) setSubmitted(true); }}
    >
      <h3 style={{ fontSize: "var(--text-h3)", fontWeight: 700 }}>Daftarkan Limbah Baru</h3>

      <div className="mt-4">
        <label className="label required">Jenis limbah</label>
        <div className="grid grid-2" style={{ gap: 8 }}>
          {TYPES.map((t, i) => (
            <button
              type="button"
              key={t.label}
              className={`filter-opt ${typeIdx === i ? "active" : ""}`}
              style={{ borderRadius: "var(--radius-md)", border: "1.5px solid var(--color-border)" }}
              onClick={() => setTypeIdx(i)}
            >
              <span className="filter-dot" /> {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <label className="label required">Estimasi berat: <span className="price">{kg} kg</span></label>
        <input
          type="range" min={0} max={60} step={1} value={kg}
          onChange={(e) => setKg(Number(e.target.value))}
          style={{ width: "100%", accentColor: "var(--color-primary)" }}
          aria-label="Estimasi berat kilogram"
        />
        {!valid && <span className="pill pill-warning mt-2">Minimum setoran 2 kg</span>}
      </div>

      <div className="glass mt-4" style={{ padding: 16 }}>
        <div className="text-muted" style={{ fontSize: "var(--text-caption)" }}>Estimasi penerimaan</div>
        <div className="price" style={{ fontSize: "1.3rem" }}>
          {formatRupiah(low)} – {formatRupiah(high)}
        </div>
        <span className="badge-point mt-2">+{points} Green Point</span>
      </div>

      <button className="btn btn-gradient btn-block mt-4" type="submit" disabled={!valid}>
        Kirim Listing
      </button>
      <p className="text-muted mt-2" style={{ fontSize: "var(--text-caption)", textAlign: "center" }}>
        Foto opsional · Dapat dibatalkan hingga 6 jam sebelum penjemputan
      </p>
    </form>
  );
}
