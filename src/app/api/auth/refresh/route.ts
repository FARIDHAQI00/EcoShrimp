import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth/jwt";
import { findById, toSafeUser } from "@/lib/auth/store";
import { REFRESH_COOKIE, issueSession } from "@/lib/auth/session";
import { cookies } from "next/headers";

export const runtime = "nodejs";

// POST /api/auth/refresh — tukar refresh token (7 hari) menjadi access token baru
// dan rotasi refresh (PRD §8.5).
export async function POST() {
  const jar = await cookies();
  const payload = await verifyToken(jar.get(REFRESH_COOKIE)?.value);
  if (!payload || payload.typ !== "refresh")
    return NextResponse.json({ user: null, error: "Sesi berakhir." }, { status: 401 });

  const user = findById(payload.sub);
  if (!user) return NextResponse.json({ user: null, error: "Sesi berakhir." }, { status: 401 });

  const res = NextResponse.json({ user: toSafeUser(user) });
  await issueSession(res, user); // rotasi access + refresh
  return res;
}
