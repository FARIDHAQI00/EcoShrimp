// ============================================================
// Sesi & cookie — helper server (runtime Node).
// Access token pendek + refresh token 7 hari (PRD §8.5).
// Token disimpan di cookie httpOnly (mitigasi XSS, OWASP §8.5).
// ============================================================
import { cookies } from "next/headers";
import type { NextResponse } from "next/server";
import { signToken, verifyToken } from "./jwt";
import { findById, toSafeUser, type SafeUser } from "./store";
import type { Role } from "./roles";

export const ACCESS_COOKIE = "sl_access";
export const REFRESH_COOKIE = "sl_refresh";

export const ACCESS_TTL = 60 * 60; // 1 jam
export const REFRESH_TTL = 60 * 60 * 24 * 7; // 7 hari (PRD §8.5)

const isProd = process.env.NODE_ENV === "production";

function cookieBase(maxAge: number) {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: isProd,
    path: "/",
    maxAge,
  };
}

/** Terbitkan pasangan token untuk user & set sebagai cookie httpOnly pada respons. */
export async function issueSession(
  res: NextResponse,
  user: { id: string; role: Role },
): Promise<void> {
  const [access, refresh] = await Promise.all([
    signToken({ sub: user.id, role: user.role, typ: "access" }, ACCESS_TTL),
    signToken({ sub: user.id, role: user.role, typ: "refresh" }, REFRESH_TTL),
  ]);
  res.cookies.set(ACCESS_COOKIE, access, cookieBase(ACCESS_TTL));
  res.cookies.set(REFRESH_COOKIE, refresh, cookieBase(REFRESH_TTL));
}

/** Hapus cookie sesi (logout). */
export function clearSession(res: NextResponse): void {
  res.cookies.set(ACCESS_COOKIE, "", cookieBase(0));
  res.cookies.set(REFRESH_COOKIE, "", cookieBase(0));
}

/**
 * Ambil user sesi saat ini dari cookie (server component / route handler).
 * Memverifikasi access token; bila kedaluwarsa, coba refresh token agar
 * sesi tetap valid (klien akan memperbarui access via /api/auth/refresh).
 */
export async function getSession(): Promise<SafeUser | null> {
  const jar = await cookies();
  const access = jar.get(ACCESS_COOKIE)?.value;
  let payload = await verifyToken(access);
  if (!payload) {
    const refresh = jar.get(REFRESH_COOKIE)?.value;
    payload = await verifyToken(refresh);
  }
  if (!payload) return null;
  const user = findById(payload.sub);
  return user ? toSafeUser(user) : null;
}
