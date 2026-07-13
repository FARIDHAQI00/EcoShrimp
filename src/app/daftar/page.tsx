"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Shrimy from "@/components/Shrimy";
import { WasteBox, Fish, Leaf, User, Check } from "@/components/Icons";
import { useAuth } from "@/components/AuthProvider";
import { PUBLIC_ROLES, ROLE_META, permissionsOf, roleHomePath, type PublicRole } from "@/lib/auth/roles";

const ROLE_ICON = { pengolah: WasteBox, petambak: Fish, petani: Leaf, lainnya: User } as const;

// Kabupaten/kota Aceh (PRD §7.1 "pilih kecamatan"); prototipe memakai tingkat kab/kota.
const LOCATIONS = [
  "Banda Aceh", "Aceh Besar", "Sabang", "Pidie", "Pidie Jaya", "Bireuen",
  "Aceh Utara", "Lhokseumawe", "Aceh Timur", "Langsa", "Aceh Tamiang",
  "Aceh Tengah", "Bener Meriah", "Aceh Barat", "Nagan Raya", "Aceh Jaya",
  "Aceh Selatan", "Aceh Barat Daya", "Simeulue", "Gayo Lues", "Aceh Tenggara", "Subulussalam",
];

function DaftarContent() {
  const router = useRouter();
  const params = useSearchParams();
  const { setSession } = useAuth();

  const [role, setRole] = useState<PublicRole>("pengolah");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setBusy(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, phone, email, location, role, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Pendaftaran gagal. Coba lagi.");
        return;
      }
      setSession(data.user, permissionsOf(data.user.role));
      const next = params.get("next");
      router.push(next || roleHomePath(data.user.role));
      router.refresh();
    } catch {
      setError("Tidak dapat terhubung. Periksa koneksi Anda.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="section auth-wrap">
      <div className="container auth-container">
        <div className="auth-head">
          <div style={{ marginBottom: "1rem" }}>
            <Shrimy size={52} />
          </div>
          <span className="eyebrow mt-4">Bergabung dengan EcoShrimp</span>
          <h1>Daftar akun</h1>
          <p>Satu ekosistem untuk limbah bernilai, produk terjangkau, dan Green Point.</p>
        </div>

        <form className="card auth-card" onSubmit={onSubmit}>
          {/* Pilih peran — PRD §7.1 (urutan: Pengolah Seafood, Petambak/Pembudidaya, Petani, Lainnya) */}
          <label className="label required">Saya seorang…</label>
          <div className="role-grid mt-2">
            {PUBLIC_ROLES.map((r) => {
              const Icon = ROLE_ICON[r as keyof typeof ROLE_ICON];
              const active = role === r;
              return (
                <button
                  type="button"
                  key={r}
                  className={`role-opt ${active ? "active" : ""}`}
                  onClick={() => setRole(r)}
                  aria-pressed={active}
                >
                  <span className="role-opt-icon"><Icon size={20} /></span>
                  <span className="role-opt-body">
                    <span className="role-opt-title">{ROLE_META[r].short}</span>
                    <span className="role-opt-desc">{ROLE_META[r].desc}</span>
                  </span>
                  {active && <span className="role-opt-check"><Check size={14} /></span>}
                </button>
              );
            })}
          </div>

          <div className="mt-4">
            <label className="label required" htmlFor="name">Nama lengkap</label>
            <input id="name" className="input" value={name} onChange={(e) => setName(e.target.value)}
              placeholder="mis. Sarah" autoComplete="name" required />
          </div>

          <div className="grid grid-2 mt-4" style={{ gap: 14 }}>
            <div>
              <label className="label required" htmlFor="phone">Nomor HP (WhatsApp)</label>
              <input id="phone" className="input" value={phone} onChange={(e) => setPhone(e.target.value)}
                placeholder="0812xxxxxxxx" inputMode="tel" autoComplete="tel" required />
            </div>
            <div>
              <label className="label required" htmlFor="loc">Lokasi</label>
              <select id="loc" className="select" value={location} onChange={(e) => setLocation(e.target.value)} required>
                <option value="" disabled>Pilih kabupaten/kota</option>
                {LOCATIONS.map((l) => <option key={l} value={l}>{l}</option>)}
              </select>
            </div>
          </div>

          <div className="mt-4">
            <label className="label" htmlFor="email">Email <span className="text-muted">(opsional — untuk invoice)</span></label>
            <input id="email" className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="nama@email.com" autoComplete="email" />
          </div>

          <div className="mt-4">
            <label className="label required" htmlFor="pw">Kata sandi</label>
            <input id="pw" className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)}
              placeholder="Minimal 8 karakter" autoComplete="new-password" minLength={8} required />
          </div>

          {error && <div className="auth-alert mt-4" role="alert">{error}</div>}

          <button className="btn btn-gradient btn-block mt-6" type="submit" disabled={busy}>
            {busy ? "Memproses…" : "Buat Akun"}
          </button>

          <p className="text-muted mt-4" style={{ fontSize: "var(--text-caption)", textAlign: "center" }}>
            Dengan mendaftar, Anda menyetujui Ketentuan Layanan & Kebijakan Privasi (UU PDP).
          </p>
        </form>

        <p className="auth-alt">
          Sudah punya akun? <Link href={`/masuk${params.get("next") ? `?next=${encodeURIComponent(params.get("next")!)}` : ""}`}>Masuk di sini</Link>
        </p>
      </div>
    </section>
  );
}

export default function DaftarPage() {
  return (
    <Suspense fallback={<section className="section auth-wrap"><div className="container auth-container"><p className="text-muted">Memuat…</p></div></section>}>
      <DaftarContent />
    </Suspense>
  );
}
