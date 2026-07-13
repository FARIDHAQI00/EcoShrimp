import { NextResponse } from "next/server";
import { findByIdentifier, toSafeUser } from "@/lib/auth/store";
import { verifyPassword } from "@/lib/auth/passwords";
import { issueSession } from "@/lib/auth/session";

export const runtime = "nodejs";

// POST /api/auth/login — Masuk dengan Nomor HP / email + kata sandi.
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Format permintaan tidak valid." }, { status: 400 });
  }

  const identifier = String(body.identifier ?? "").trim();
  const password = String(body.password ?? "");

  if (!identifier || !password)
    return NextResponse.json({ error: "Nomor HP/email dan kata sandi wajib diisi." }, { status: 400 });

  const user = findByIdentifier(identifier);
  // Pesan galat generik agar tidak membocorkan akun mana yang ada (OWASP).
  if (!user || !verifyPassword(password, user.passwordHash))
    return NextResponse.json({ error: "Nomor HP/email atau kata sandi salah." }, { status: 401 });

  const res = NextResponse.json({ user: toSafeUser(user) });
  await issueSession(res, user);
  return res;
}
