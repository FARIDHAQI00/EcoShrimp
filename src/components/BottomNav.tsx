"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, WasteBox, Bag, Coins, User } from "./Icons";

// Navigasi utama mobile (PRD §6.2): [Home][Limbah][Belanja][Poin][Profil]
const ITEMS = [
  { href: "/", label: "Home", Icon: Home },
  { href: "/waste-exchange", label: "Limbah", Icon: WasteBox },
  { href: "/marketplace", label: "Belanja", Icon: Bag },
  { href: "/green-point", label: "Poin", Icon: Coins },
  { href: "/profil", label: "Profil", Icon: User },
];

export default function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className="nav-bottom" aria-label="Navigasi bawah">
      {ITEMS.map(({ href, label, Icon }) => {
        const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
        return (
          <Link key={href} href={href} className={`nav-item ${active ? "active" : ""}`}>
            <span className="nav-icon"><Icon size={22} /></span>
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
