import { NextResponse } from "next/server";
import { isPublicRole } from "@/lib/auth/roles";
import { createUser, emailExists, phoneExists, normalizePhone, toSafeUser } from "@/lib/auth/store";
import { issueSession } from "@/lib/auth/session";

export const runtime = "nodejs";

// POST /api/auth/register — Daftar (PRD §7.1).
// Data dasar: Nama · Nomor HP · Lokasi · Peran · kata sandi (+ email opsional).
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Format permintaan tidak valid." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const email = String(body.email ?? "").trim();
  const location = String(body.location ?? "").trim();
  const role = body.role;
  const password = String(body.password ?? "");

  // Validasi
  if (name.length < 2) return NextResponse.json({ error: "Nama minimal 2 karakter." }, { status: 400 });
  if (normalizePhone(phone).length < 10)
    return NextResponse.json({ error: "Nomor HP tidak valid." }, { status: 400 });
  if (!location) return NextResponse.json({ error: "Lokasi wajib diisi." }, { status: 400 });
  // Admin bersifat internal — tidak boleh didaftarkan lewat form publik (PRD §5.6).
  if (!isPublicRole(role))
    return NextResponse.json({ error: "Peran tidak valid untuk pendaftaran." }, { status: 400 });
  if (password.length < 8)
    return NextResponse.json({ error: "Kata sandi minimal 8 karakter." }, { status: 400 });
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return NextResponse.json({ error: "Format email tidak valid." }, { status: 400 });

  if (phoneExists(phone))
    return NextResponse.json({ error: "Nomor HP sudah terdaftar. Silakan masuk." }, { status: 409 });
  if (email && emailExists(email))
    return NextResponse.json({ error: "Email sudah terdaftar." }, { status: 409 });

  const user = createUser({ name, phone, email: email || undefined, location, role, password });
  const res = NextResponse.json({ user: toSafeUser(user) }, { status: 201 });
  await issueSession(res, user);
  return res;
}
