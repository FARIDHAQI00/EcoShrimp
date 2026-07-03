// ============================================================
// User store Shrimp Loop — persisten berbasis file JSON (.data/users.json)
// dengan cache in-memory. Cukup untuk prototipe MVP; di produksi
// diganti PostgreSQL (PRD §8.2). Hanya dipakai di runtime Node.
// ============================================================
import { randomUUID } from "crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";
import type { Role } from "./roles";
import { hashPassword } from "./passwords";

export interface User {
  id: string;
  name: string;
  phone: string; // identifier utama (PRD §7.1 "Nomor HP"), sudah dinormalisasi
  email?: string; // opsional (§5.5 konfirmasi via email)
  location: string; // kecamatan / kota
  role: Role;
  passwordHash: string;
  points: number; // Green Point (§5.2)
  createdAt: string;
}

/** User tanpa data sensitif — aman dikirim ke klien. */
export type SafeUser = Omit<User, "passwordHash">;

export function toSafeUser(u: User): SafeUser {
  const { passwordHash, ...safe } = u;
  void passwordHash;
  return safe;
}

/** Normalisasi nomor HP Indonesia ke bentuk 62xxxxxxxxxx untuk pencocokan konsisten. */
export function normalizePhone(raw: string): string {
  let d = (raw || "").replace(/[^\d]/g, "");
  if (d.startsWith("0")) d = "62" + d.slice(1);
  else if (d.startsWith("8")) d = "62" + d;
  return d;
}

const DATA_DIR = join(process.cwd(), ".data");
const DATA_FILE = join(DATA_DIR, "users.json");

type DB = { users: User[] };

// Cache modul-level agar konsisten dalam satu proses dev server.
let cache: DB | null = null;

function seed(): User[] {
  // Akun demo tiap peran (kata sandi: "demo1234"), + admin ("admin1234").
  const now = new Date().toISOString();
  const mk = (name: string, phone: string, role: Role, location: string, pw: string, points = 0): User => ({
    id: randomUUID(),
    name,
    phone: normalizePhone(phone),
    email: undefined,
    location,
    role,
    passwordHash: hashPassword(pw),
    points,
    createdAt: now,
  });
  return [
    mk("Operator Shrimp Loop", "0811000000", "admin", "Banda Aceh", "admin1234"),
    mk("Bu Sarah", "0812000001", "pengolah", "Banda Aceh", "demo1234", 240),
    mk("Pak Hasan", "0812000002", "petambak", "Aceh Besar", "demo1234", 1250),
    mk("Pak Ridwan", "0812000003", "petani", "Aceh Tengah", "demo1234", 60),
  ];
}

function load(): DB {
  if (cache) return cache;
  try {
    if (existsSync(DATA_FILE)) {
      cache = JSON.parse(readFileSync(DATA_FILE, "utf8")) as DB;
      if (!Array.isArray(cache.users)) cache = { users: [] };
      return cache;
    }
  } catch {
    // korup / tak terbaca → mulai dari seed
  }
  cache = { users: seed() };
  persist();
  return cache;
}

function persist(): void {
  if (!cache) return;
  try {
    if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true });
    writeFileSync(DATA_FILE, JSON.stringify(cache, null, 2), "utf8");
  } catch {
    // filesystem read-only (mis. serverless) → tetap jalan dari cache in-memory
  }
}

export function findByIdentifier(identifier: string): User | undefined {
  const db = load();
  const id = (identifier || "").trim();
  if (!id) return undefined;
  const email = id.toLowerCase();
  const phone = normalizePhone(id);
  return db.users.find(
    (u) => (u.email && u.email.toLowerCase() === email) || (phone && u.phone === phone),
  );
}

export function findById(id: string): User | undefined {
  return load().users.find((u) => u.id === id);
}

export function phoneExists(phone: string): boolean {
  const p = normalizePhone(phone);
  return load().users.some((u) => u.phone === p);
}
export function emailExists(email: string): boolean {
  const e = email.trim().toLowerCase();
  if (!e) return false;
  return load().users.some((u) => u.email && u.email.toLowerCase() === e);
}

/** Set saldo Green Point pengguna (dipakai setelah checkout). */
export function setPoints(id: string, points: number): User | undefined {
  const db = load();
  const user = db.users.find((u) => u.id === id);
  if (!user) return undefined;
  user.points = Math.max(0, Math.round(points));
  persist();
  return user;
}

export function createUser(input: {
  name: string;
  phone: string;
  email?: string;
  location: string;
  role: Role;
  password: string;
}): User {
  const db = load();
  const user: User = {
    id: randomUUID(),
    name: input.name.trim(),
    phone: normalizePhone(input.phone),
    email: input.email?.trim() || undefined,
    location: input.location.trim(),
    role: input.role,
    passwordHash: hashPassword(input.password),
    points: 0,
    createdAt: new Date().toISOString(),
  };
  db.users.push(user);
  persist();
  return user;
}
