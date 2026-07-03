"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Shrimy from "@/components/Shrimy";
import { Check, X, WasteBox, Bag, Coins, Chart } from "@/components/Icons";
import { useAuth } from "@/components/AuthProvider";
import { ROLE_META, can, type Permission } from "@/lib/auth/roles";

// Ringkasan kapabilitas untuk ditampilkan (dipetakan dari RBAC §5).
const CAPS: { perm: Permission; label: string; Icon: typeof WasteBox; href: string }[] = [
  { perm: "waste:create", label: "Daftarkan & jual limbah udang", Icon: WasteBox, href: "/waste-exchange" },
  { perm: "market:buy", label: "Belanja di Marketplace", Icon: Bag, href: "/marketplace" },
  { perm: "sub:manage", label: "Kelola langganan produk", Icon: Bag, href: "/langganan" },
  { perm: "points:use", label: "Kumpul & tukar Green Point", Icon: Coins, href: "/green-point" },
  { perm: "admin:access", label: "Admin & Operations Dashboard", Icon: Chart, href: "/admin" },
];

export default function ProfilPage() {
  const router = useRouter();
  const { user, loading, logout } = useAuth();

  useEffect(() => {
    if (!loading && !user) router.replace("/masuk?next=/profil");
  }, [loading, user, router]);

  if (loading || !user) {
    return (
      <section className="section"><div className="container"><p className="text-muted">Memuat…</p></div></section>
    );
  }

  const meta = ROLE_META[user.role];

  async function onLogout() {
    await logout();
    router.push("/");
    router.refresh();
  }

  return (
    <section className="section" style={{ paddingTop: 24 }}>
      <div className="container" style={{ maxWidth: 820 }}>
        <div className="page-hero">
          <span className="eyebrow"><Shrimy size={16} /> Profil & Akun</span>
          <h1>Halo, {user.name}.</h1>
        </div>

        <div className="card panel mt-6">
          <div className="flex items-center justify-between" style={{ flexWrap: "wrap", gap: 12 }}>
            <div className="flex items-center gap-3">
              <span className="stat-icon"><Shrimy size={24} /></span>
              <div>
                <div style={{ fontWeight: 700, color: "var(--color-text-primary)" }}>{meta.label}</div>
                <div className="text-muted" style={{ fontSize: "var(--text-caption)" }}>{user.location}</div>
              </div>
            </div>
            <span className="pill pill-success">{user.points} Green Point</span>
          </div>

          <div className="grid grid-2 mt-6" style={{ gap: 14 }}>
            <div className="glass" style={{ padding: 14 }}>
              <div className="text-muted" style={{ fontSize: "var(--text-caption)" }}>Nomor HP</div>
              <div className="mono" style={{ color: "var(--color-text-primary)" }}>{user.phone}</div>
            </div>
            <div className="glass" style={{ padding: 14 }}>
              <div className="text-muted" style={{ fontSize: "var(--text-caption)" }}>Email</div>
              <div style={{ color: "var(--color-text-primary)" }}>{user.email || "—"}</div>
            </div>
          </div>
        </div>

        {/* Hak akses sesuai peran (RBAC) */}
        <div className="card panel mt-6">
          <h3 style={{ fontSize: "var(--text-h3)", fontWeight: 700 }}>Hak akses Anda</h3>
          <p className="text-secondary mt-2" style={{ fontSize: "var(--text-body-sm)" }}>
            Ditentukan oleh peran <strong>{meta.short}</strong> sesuai aturan platform (PRD §5).
          </p>
          <ul className="access-list mt-4">
            {CAPS.map(({ perm, label, Icon, href }) => {
              const allowed = can(user.role, perm);
              return (
                <li key={perm} className={`access-row ${allowed ? "on" : "off"}`}>
                  <span className="access-ic"><Icon size={18} /></span>
                  <span className="access-label">{label}</span>
                  {allowed ? (
                    <Link href={href} className="access-flag ok"><Check size={14} /> Bisa diakses</Link>
                  ) : (
                    <span className="access-flag no"><X size={14} /> Tidak untuk peran ini</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex gap-2 mt-6">
          <button className="btn btn-secondary" onClick={onLogout}>Keluar</button>
          <Link href="/" className="btn btn-ghost">Kembali ke Beranda</Link>
        </div>
      </div>
    </section>
  );
}
