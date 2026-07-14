// ============================================================
// RBAC EcoShrimp — peran & aturan akses.
// Sumber kebenaran tunggal untuk "role & akses", dipetakan
// langsung dari PRD (SHRIMP_LOOP_PRD.md). Referensi §ada di komentar.
//
// Peran (PRD §7.1 "Pilih peran" + persona §4.2 + admin §5.6):
//   pengolah  — Pengolah Seafood / Restoran      (Persona 2)
//   petambak  — Petambak / Pembudidaya Ikan      (Persona 1 & 4)
//   petani    — Petani Hortikultura              (Persona 3)
//   lainnya   — Lainnya                          (§7.1 opsi "Lainnya")
//   admin     — Admin / Operator EcoShrimp     (Persona 5, internal §5.6)
// ============================================================

export const ROLES = ["pengolah", "petambak", "petani", "lainnya", "admin"] as const;
export type Role = (typeof ROLES)[number];

/** Peran yang boleh dipilih saat pendaftaran publik (§7.1). Admin bersifat internal (§5.6). */
export const PUBLIC_ROLES = ["pengolah", "petambak", "petani", "lainnya"] as const;
export type PublicRole = (typeof PUBLIC_ROLES)[number];

export function isRole(v: unknown): v is Role {
  return typeof v === "string" && (ROLES as readonly string[]).includes(v);
}
export function isPublicRole(v: unknown): v is PublicRole {
  return typeof v === "string" && (PUBLIC_ROLES as readonly string[]).includes(v);
}

// Label & deskripsi peran untuk UI onboarding (§7.1) — urutan mengikuti PRD:
// [Pengolah Seafood] [Petambak/Pembudidaya] [Petani] [Lainnya]
export const ROLE_META: Record<Role, { label: string; short: string; desc: string; icon: string }> = {
  pengolah: {
    label: "Pengolah Seafood / Restoran",
    short: "Pengolah Seafood",
    desc: "Punya limbah kulit & kepala udang untuk dijemput.",
    icon: "waste",
  },
  petambak: {
    label: "Petambak / Pembudidaya",
    short: "Petambak/Pembudidaya",
    desc: "Butuh pakan akuakultur & suplemen terjangkau.",
    icon: "fish",
  },
  petani: {
    label: "Petani Hortikultura",
    short: "Petani",
    desc: "Butuh pupuk organik, kitosan & biostimulan.",
    icon: "leaf",
  },
  lainnya: {
    label: "Lainnya",
    short: "Lainnya",
    desc: "Umum, jelajah produk, edukasi, dan Green Point.",
    icon: "user",
  },
  admin: {
    label: "Admin / Operator EcoShrimp",
    short: "Admin",
    desc: "Tim internal, kelola operasional platform.",
    icon: "chart",
  },
};

// ------------------------------------------------------------
// Kapabilitas (permission) — apa yang boleh DILAKUKAN tiap peran.
// Dipetakan dari fitur PRD §5:
//   waste:create  — Daftarkan/jual limbah udang     (§5.1, sumber limbah = pengolah seafood/restoran)
//   market:buy    — Beli produk di marketplace       (§5.5 — konsumen produk olahan)
//   sub:manage    — Kelola langganan produk          (§5.3)
//   points:use    — Kumpul & tukar Green Point        (§5.2 — semua pengguna aktif)
//   admin:access  — Buka Admin & Operations Dashboard (§5.6 — internal, khusus operator)
// ------------------------------------------------------------
export const PERMISSIONS = [
  "waste:create",
  "market:buy",
  "sub:manage",
  "points:use",
  "admin:access",
] as const;
export type Permission = (typeof PERMISSIONS)[number];

const ROLE_PERMISSIONS: Record<Role, Permission[]> = {
  // Pengolah = sumber limbah → boleh buat listing limbah, juga konsumen produk.
  pengolah: ["waste:create", "market:buy", "sub:manage", "points:use"],
  // Petambak/Pembudidaya = konsumen pakan; tidak memproduksi limbah udang → tanpa waste:create.
  petambak: ["market:buy", "sub:manage", "points:use"],
  // Petani = konsumen pupuk/kitosan.
  petani: ["market:buy", "sub:manage", "points:use"],
  // Lainnya = umum; boleh setor limbah bila punya, boleh beli.
  lainnya: ["waste:create", "market:buy", "sub:manage", "points:use"],
  // Admin/Operator = internal; kendali dashboard (§5.6). Bukan alur belanja konsumen.
  admin: ["admin:access", "waste:create"],
};

export function can(role: Role | null | undefined, perm: Permission): boolean {
  if (!role) return false;
  return ROLE_PERMISSIONS[role]?.includes(perm) ?? false;
}

export function permissionsOf(role: Role): Permission[] {
  return ROLE_PERMISSIONS[role] ?? [];
}

// ------------------------------------------------------------
// Aturan akses ROUTE (halaman). Menentukan siapa yang boleh membuka URL.
//   access: "public"  → tanpa login
//   access: "auth"    → wajib login (peran apa pun)
//   access: "role"    → hanya peran pada `roles`
// ------------------------------------------------------------
export type RouteRule =
  | { prefix: string; access: "public" }
  | { prefix: string; access: "auth" }
  | { prefix: string; access: "role"; roles: Role[] };

// Diurutkan spesifik → umum (dievaluasi berurutan, match pertama menang).
export const ROUTE_RULES: RouteRule[] = [
  // Admin & Operations Dashboard — INTERNAL, khusus operator (PRD §5.6).
  { prefix: "/admin", access: "role", roles: ["admin"] },

  // Butuh login (semua peran) — dashboard poin, langganan, profil, riwayat limbah.
  { prefix: "/green-point", access: "auth" }, // §5.2 — untuk pengguna aktif
  { prefix: "/langganan", access: "auth" }, //   §5.3 — kelola langganan
  { prefix: "/waste-exchange", access: "auth" }, // §5.1 — akses; aksi buat listing dibatasi peran (waste:create)
  { prefix: "/checkout", access: "auth" }, //       §5.5/§7.3 — selesaikan pembelian (butuh login)
  { prefix: "/profil", access: "auth" }, //         §6.1 — Profil & Akun

  // Publik (tanpa login).
  { prefix: "/marketplace", access: "public" }, // §5.5 — jelajah tanpa wajib login
  { prefix: "/edukasi", access: "public" }, //       §5.4 — edukasi & SHRIMY 24/7
  { prefix: "/daftar", access: "public" },
  { prefix: "/masuk", access: "public" },
  { prefix: "/", access: "public" }, //              §5.7 — beranda edukatif
];

export function ruleForPath(pathname: string): RouteRule {
  for (const r of ROUTE_RULES) {
    const hit = r.prefix === "/" ? pathname === "/" : pathname.startsWith(r.prefix);
    if (hit) return r;
  }
  return { prefix: pathname, access: "public" };
}

/** Cek apakah `role` (atau tamu bila null) boleh membuka `pathname`. */
export function canAccessRoute(pathname: string, role: Role | null): boolean {
  const rule = ruleForPath(pathname);
  if (rule.access === "public") return true;
  if (!role) return false; // butuh login
  if (rule.access === "auth") return true;
  return rule.roles.includes(role);
}

/** Beranda tujuan setelah login, dipersonalisasi peran (PRD §7.1 "Beranda dipersonalisasi sesuai peran"). */
export function roleHomePath(role: Role): string {
  switch (role) {
    case "admin":
      return "/admin";
    case "pengolah":
      return "/waste-exchange";
    case "petambak":
    case "petani":
      return "/marketplace";
    default:
      return "/";
  }
}
