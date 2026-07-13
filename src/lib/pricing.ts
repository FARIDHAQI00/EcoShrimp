// ============================================================
// Aturan harga marketplace — dipakai BERSAMA oleh UI (pratinjau)
// dan API checkout (otoritatif). Semua nilai dari PRD §5.2 & §5.5.
// ============================================================
import { LEVELS } from "./data";

export const SHIPPING_FLAT = 20000; // ongkir datar (prototipe) — §5.5 "perhitungan ongkir otomatis"
export const POINT_VALUE_RP = 100; // 1 Green Point = Rp100 saat ditukar (§7.3 slider Green Point)
export const EARN_PER_RP = 1000; // 1 pt per Rp1.000 belanja (§5.2)

// Diskon & benefit per level (PRD §5.2).
const LEVEL_BENEFIT: Record<number, { discountRate: number; freeShipping: boolean }> = {
  1: { discountRate: 0, freeShipping: false }, // Newcomer
  2: { discountRate: 0.05, freeShipping: false }, // Green Member — diskon 5%
  3: { discountRate: 0.1, freeShipping: true }, // Ocean Keeper — diskon 10% + gratis ongkir
  4: { discountRate: 0.15, freeShipping: true }, // Coral Champion — diskon 15% + gratis ongkir
};

export interface LevelInfo {
  lvl: number;
  name: string;
  discountRate: number;
  freeShipping: boolean;
}

export function levelForPoints(points: number): LevelInfo {
  // LEVELS terurut naik; ambil level tertinggi yang thresholdnya terpenuhi.
  let match: (typeof LEVELS)[number] = LEVELS[0];
  for (const l of LEVELS) if (points >= l.min) match = l;
  const benefit = LEVEL_BENEFIT[match.lvl] ?? LEVEL_BENEFIT[1];
  return { lvl: match.lvl, name: match.name, ...benefit };
}

export interface OrderLine {
  price: number;
  qty: number;
}

export interface OrderBreakdown {
  subtotal: number;
  level: LevelInfo;
  levelDiscount: number;
  shipping: number;
  redeemPoints: number; // poin yang benar-benar ditukar (sudah di-clamp)
  pointsDiscount: number; // nilai rupiah dari penukaran poin
  total: number; // yang harus dibayar
  pointsEarned: number; // poin didapat dari transaksi ini
  newBalance: number; // saldo poin setelah transaksi
  maxRedeemable: number; // batas poin yang bisa ditukar untuk order ini
}

/**
 * Hitung rincian pesanan secara deterministik.
 * @param lines   item {price, qty}
 * @param userPoints  saldo Green Point pengguna saat ini
 * @param redeemReq   jumlah poin yang ingin ditukar (akan di-clamp)
 */
export function computeOrder(lines: OrderLine[], userPoints: number, redeemReq: number): OrderBreakdown {
  const subtotal = lines.reduce((s, l) => s + l.price * Math.max(0, l.qty), 0);
  const level = levelForPoints(userPoints);
  const levelDiscount = Math.round(subtotal * level.discountRate);
  const afterDiscount = subtotal - levelDiscount;
  const shipping = subtotal > 0 && !level.freeShipping ? SHIPPING_FLAT : 0;

  // Poin hanya dapat menutup nilai barang (setelah diskon), tidak melebihi tagihan.
  const maxRedeemable = Math.min(Math.max(0, userPoints), Math.floor(afterDiscount / POINT_VALUE_RP));
  const redeemPoints = Math.max(0, Math.min(Math.floor(redeemReq || 0), maxRedeemable));
  const pointsDiscount = redeemPoints * POINT_VALUE_RP;

  const paidForGoods = afterDiscount - pointsDiscount;
  const total = paidForGoods + shipping;
  const pointsEarned = Math.floor(paidForGoods / EARN_PER_RP); // §5.2 — dihitung dari nilai barang dibayar
  const newBalance = userPoints - redeemPoints + pointsEarned;

  return {
    subtotal,
    level,
    levelDiscount,
    shipping,
    redeemPoints,
    pointsDiscount,
    total,
    pointsEarned,
    newBalance,
    maxRedeemable,
  };
}
