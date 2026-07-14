"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Bag } from "./Icons";
import { useAuth } from "./AuthProvider";
import { useCart } from "./CartProvider";
import { ROLE_META } from "@/lib/auth/roles";

// Link publik selalu tampil; "Admin" hanya untuk peran admin (RBAC §5.6).
const LINKS = [
  { href: "/", label: "Beranda" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/waste-exchange", label: "Waste Exchange" },
  { href: "/green-point", label: "Green Point" },
  { href: "/langganan", label: "Langganan" },
  { href: "/edukasi", label: "Edukasi" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const { user, loading, logout } = useAuth();
  const { count, hydrated } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  async function onLogout() {
    await logout();
    router.push("/");
    router.refresh();
  }

  return (
    <header className={`nav-desktop ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <Link href="/" className="nav-brand" aria-label="EcoShrimp: Beranda">
          <Image
            src="/logo.png"
            alt="EcoShrimp"
            width={40}
            height={40}
            style={{ objectFit: "contain" }}
            priority
          />
          <span className="nav-wordmark">EcoShrimp</span>
        </Link>

        <nav className="nav-links" aria-label="Navigasi utama">
          {LINKS.map((l) => {
            const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link key={l.href} href={l.href} className={`nav-link ${active ? "active" : ""}`}>
                {l.label}
              </Link>
            );
          })}
          {user?.role === "admin" && (
            <Link href="/admin" className={`nav-link ${pathname.startsWith("/admin") ? "active" : ""}`}>
              Admin
            </Link>
          )}
        </nav>

        <div className="nav-actions">
          <Link href="/keranjang" className="nav-cart" aria-label={`Keranjang belanja${hydrated && count ? `, ${count} item` : ""}`}>
            <Bag size={19} />
            {hydrated && count > 0 && <span className="nav-cart-badge">{count > 99 ? "99+" : count}</span>}
          </Link>

          {loading ? null : user ? (
            <>
              <Link href="/profil" className="nav-user" aria-label="Profil & Akun">
                <span className="nav-user-avatar" aria-hidden>{user.name.charAt(0).toUpperCase()}</span>
                <span className="nav-user-meta only-lg">
                  <span className="nav-user-name">{user.name}</span>
                  <span className="nav-user-role">{ROLE_META[user.role].short}</span>
                </span>
              </Link>
              <button className="btn btn-secondary btn-sm" onClick={onLogout}>Keluar</button>
            </>
          ) : (
            <>
              <Link href="/masuk" className="btn btn-glass btn-sm only-lg">Masuk</Link>
              <Link href="/daftar" className="btn btn-primary btn-sm">Daftar</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
