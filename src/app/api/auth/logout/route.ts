import { NextResponse } from "next/server";
import { clearSession } from "@/lib/auth/session";

export const runtime = "nodejs";

// POST /api/auth/logout — Keluar; hapus cookie sesi.
export async function POST() {
  const res = NextResponse.json({ ok: true });
  clearSession(res);
  return res;
}
