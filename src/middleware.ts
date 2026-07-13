import { NextResponse, type NextRequest } from "next/server";
import { verifyToken } from "@/lib/auth/jwt";
import { canAccessRoute, roleHomePath, ruleForPath, isRole, type Role } from "@/lib/auth/roles";

// Middleware penjaga akses — menegakkan RBAC di tepi (Edge) sebelum halaman dirender.
// Peran diambil dari access token; bila kedaluwarsa, dicoba dari refresh token
// (klien memperbarui access via /api/auth/refresh setelah halaman termuat).
export async function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  const access = req.cookies.get("sl_access")?.value;
  const refresh = req.cookies.get("sl_refresh")?.value;
  let payload = await verifyToken(access);
  if (!payload) payload = await verifyToken(refresh);
  const role: Role | null = payload && isRole(payload.role) ? payload.role : null;

  if (canAccessRoute(pathname, role)) return NextResponse.next();

  // Belum login → arahkan ke halaman masuk, simpan tujuan.
  if (!role) {
    const url = req.nextUrl.clone();
    url.pathname = "/masuk";
    url.search = `?next=${encodeURIComponent(pathname + search)}`;
    return NextResponse.redirect(url);
  }

  // Sudah login tapi peran tidak berhak (mis. non-admin membuka /admin) →
  // alihkan ke beranda peran + tandai penolakan.
  const rule = ruleForPath(pathname);
  const url = req.nextUrl.clone();
  url.pathname = roleHomePath(role);
  url.search = "?denied=" + encodeURIComponent(rule.prefix);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/green-point/:path*",
    "/langganan/:path*",
    "/waste-exchange/:path*",
    "/checkout/:path*",
    "/profil/:path*",
  ],
};
