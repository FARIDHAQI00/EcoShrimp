import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";
import { can } from "@/lib/auth/roles";
import { setPoints } from "@/lib/auth/store";
import { PRODUCTS } from "@/lib/data";
import { computeOrder, type OrderLine } from "@/lib/pricing";

export const runtime = "nodejs";

const catalog = new Map(PRODUCTS.map((p) => [p.id, p]));

// POST /api/marketplace/checkout — proses pembelian (PRD §5.5 / §7.3).
// Wajib login + kapabilitas market:buy (RBAC). Harga dihitung ulang di server
// dari katalog (anti-tamper), Green Point dikreditkan sesuai §5.2.
export async function POST(req: Request) {
  const user = await getSession();
  if (!user)
    return NextResponse.json({ error: "Silakan masuk untuk menyelesaikan pembelian." }, { status: 401 });
  if (!can(user.role, "market:buy"))
    return NextResponse.json(
      { error: "Akun operator/admin tidak digunakan untuk berbelanja." },
      { status: 403 },
    );

  let body: { items?: { id: string; qty: number }[]; redeemPoints?: number };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Format permintaan tidak valid." }, { status: 400 });
  }

  const rawItems = Array.isArray(body.items) ? body.items : [];
  const lines: OrderLine[] = [];
  const resolved: { id: string; name: string; qty: number; price: number }[] = [];
  for (const it of rawItems) {
    const p = catalog.get(it?.id);
    const qty = Math.floor(Number(it?.qty));
    if (!p || !Number.isFinite(qty) || qty <= 0) continue;
    lines.push({ price: p.price, qty });
    resolved.push({ id: p.id, name: p.name, qty, price: p.price });
  }
  if (lines.length === 0)
    return NextResponse.json({ error: "Keranjang kosong atau produk tidak valid." }, { status: 400 });

  const order = computeOrder(lines, user.points, Number(body.redeemPoints) || 0);

  // Kreditkan saldo poin baru (tukar - didapat sudah dihitung di computeOrder).
  const updated = setPoints(user.id, order.newBalance);

  const orderId = "SL-" + Date.now().toString(36).toUpperCase().slice(-6);

  return NextResponse.json({
    orderId,
    items: resolved,
    breakdown: order,
    pointsBalance: updated?.points ?? order.newBalance,
  });
}
