"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Shrimy from "@/components/Shrimy";
import { useAuth } from "@/components/AuthProvider";
import { permissionsOf, roleHomePath } from "@/lib/auth/roles";

export default function MasukPage() {
  const router = useRouter();
  const params = useSearchParams();
  const { setSession } = useAuth();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const next = params.get("next");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setBusy(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ identifier, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Gagal masuk. Coba lagi.");
        return;
      }
      setSession(data.user, permissionsOf(data.user.role));
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
      <div className="container auth-container auth-container--narrow">
        <div className="auth-head">
          <Shrimy size={52} />
          <span className="eyebrow mt-4">Selamat datang kembali</span>
          <h1>Masuk</h1>
          <p>Lanjutkan mengelola limbah, pesanan, dan Green Point Anda.</p>
        </div>

        {next && (
          <div className="auth-note" role="status">Masuk untuk melanjutkan ke halaman yang Anda tuju.</div>
        )}

        <form className="card auth-card" onSubmit={onSubmit}>
          <div>
            <label className="label required" htmlFor="id">Nomor HP atau Email</label>
            <input id="id" className="input" value={identifier} onChange={(e) => setIdentifier(e.target.value)}
              placeholder="0812xxxxxxxx atau nama@email.com" autoComplete="username" required />
          </div>

          <div className="mt-4">
            <label className="label required" htmlFor="pw">Kata sandi</label>
            <input id="pw" className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)}
              placeholder="Kata sandi" autoComplete="current-password" required />
          </div>

          {error && <div className="auth-alert mt-4" role="alert">{error}</div>}

          <button className="btn btn-gradient btn-block mt-6" type="submit" disabled={busy}>
            {busy ? "Memproses…" : "Masuk"}
          </button>
        </form>

        <details className="auth-demo">
          <summary>Akun demo untuk pengujian</summary>
          <ul>
            <li><strong>Admin/Operator:</strong> 0811000000 · admin1234</li>
            <li><strong>Pengolah Seafood:</strong> 0812000001 · demo1234</li>
            <li><strong>Petambak:</strong> 0812000002 · demo1234</li>
            <li><strong>Petani:</strong> 0812000003 · demo1234</li>
          </ul>
        </details>

        <p className="auth-alt">
          Belum punya akun? <Link href={`/daftar${next ? `?next=${encodeURIComponent(next)}` : ""}`}>Daftar sekarang</Link>
        </p>
      </div>
    </section>
  );
}
