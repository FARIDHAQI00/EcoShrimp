import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";
import { permissionsOf } from "@/lib/auth/roles";

export const runtime = "nodejs";

// GET /api/auth/me — user sesi saat ini + kapabilitas (RBAC).
export async function GET() {
  const user = await getSession();
  if (!user) return NextResponse.json({ user: null }, { status: 200 });
  return NextResponse.json({ user, permissions: permissionsOf(user.role) });
}
