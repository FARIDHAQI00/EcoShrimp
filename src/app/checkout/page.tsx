"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Shrimy from "@/components/Shrimy";
import { Bag, Check, Coins, Truck } from "@/components/Icons";
import { useCart } from "@/components/CartProvider";
import { useAuth } from "@/components/AuthProvider";
import { can } from "@/lib/auth/roles";
import { computeOrder } from "@/lib/pricing";
import { formatRupiah } from "@/lib/data";

const COD_SHIPPING = "COD (Banda Aceh)";
const COD_PAYMENT = "COD — Bayar di Tempat";
const SHIPPING = ["JNE Reguler", "J&T Express", "Kurir Lokal Aceh", COD_SHIPPING];
const PAYMENT = ["Transfer Bank (BCA/BNI/BRI/Mandiri)", "QRIS", "GoPay", "OVO", "DANA", "ShopeePay", COD_PAYMENT];

interface OrderResult {
  orderId: string;
  items: { id: string; name: string; qty: number; price: number }[];
  breakdown: ReturnType<typeof computeOrder>;
  pointsBalance: number;
}

export default function CheckoutPage() {
  const router = useRouter();
  const params = useSearchParams();
  const { lines, selectedLines, removeItems, hydrated } = useCart();
  const { user, loading, refresh } = useAuth();

  // Sumber item checkout: ?only=<id> (beli 1 produk dari kartu) atau item tercentang di keranjang.
  const only = params.get("only");
  const activeLines = useMemo(
    () => (only ? lines.filter((l) => l.id === only) : selectedLines),
    [only, lines, selectedLines],
  );

  const [recipient, setRecipient] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [shipping, setShipping] = useState(SHIPPING[0]);
  const [payment, setPayment] = useState(PAYMENT[0]);
  const [redeem, setRedeem] = useState(0);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<OrderResult | null>(null);

  // Wajib login untuk checkout (RBAC market:buy).
  useEffect(() => {
    if (!loading && !user) router.replace("/masuk?next=/checkout");
  }, [loading, user, router]);

  // Prefill dari profil.
  useEffect(() => {
    if (user) {
      setRecipient((v) => v || user.name);
      setPhone((v) => v || user.phone);
      setCity((v) => v || user.location);
    }
  }, [user]);

  const order = useMemo(
    () => computeOrder(activeLines.map((l) => ({ price: l.product.price, qty: l.qty })), user?.points ?? 0, redeem),
    [activeLines, user?.points, redeem],
  );

  if (loading || !user) {
    return <section className="section"><div className="container"><p className="text-muted">Memuat…</p></div></section>;
  }

  // Sukses
  if (result) {
    const b = result.breakdown;
    return (
      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container" style={{ maxWidth: 620 }}>
          <div className="card panel" style={{ textAlign: "center", padding: 36 }}>
            <div className="how-num" style={{ margin: "0 auto" }}><Check size={24} /></div>
            <h1 style={{ fontSize: "var(--text-h2, 1.6rem)", fontWeight: 700, marginTop: 14 }}>Pesanan berhasil! 🦐</h1>
            <p className="text-secondary mt-2">
              Nomor pesanan <strong className="mono">{result.orderId}</strong>. Konfirmasi dikirim via
              email & WhatsApp. Lacak status di Riwayat Pesanan.
            </p>
            <div className="glass mt-6" style={{ padding: 18, textAlign: "left" }}>
              <div className="sum-row"><span>Total dibayar</span><span className="price">{formatRupiah(b.total)}</span></div>
              <div className="sum-row"><span>Green Point didapat</span><span className="badge-point"><Coins size={13} /> +{b.pointsEarned}</span></div>
              {b.redeemPoints > 0 && <div className="sum-row text-muted"><span>Poin ditukar</span><span>−{b.redeemPoints} pts</span></div>}
              <div className="sum-row"><span>Saldo Green Point</span><span className="price">{result.pointsBalance} pts</span></div>
            </div>
            <div className="flex gap-2 mt-6" style={{ justifyContent: "center" }}>
              <Link href="/marketplace" className="btn btn-gradient"><Bag size={16} /> Belanja lagi</Link>
              <Link href="/green-point" className="btn btn-secondary"><Coins size={16} /> Lihat Green Point</Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Admin/operator tidak berbelanja (RBAC).
  if (!can(user.role, "market:buy")) {
    return (
      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container" style={{ maxWidth: 560 }}>
          <div className="card panel" style={{ textAlign: "center", padding: 36 }}>
            <h1 style={{ fontSize: "1.5rem", fontWeight: 700 }}>Akun operator tidak untuk belanja</h1>
            <p className="text-secondary mt-2">Peran Admin/Operator digunakan untuk mengelola platform, bukan transaksi konsumen.</p>
            <Link href="/admin" className="btn btn-secondary mt-4">Ke Admin Dashboard</Link>
          </div>
        </div>
      </section>
    );
  }

  if (hydrated && activeLines.length === 0) {
    const cartHasItems = lines.length > 0;
    return (
      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container" style={{ maxWidth: 560 }}>
          <div className="card panel" style={{ textAlign: "center", padding: 36 }}>
            <Shrimy size={56} />
            <h1 style={{ fontSize: "1.4rem", fontWeight: 700, marginTop: 12 }}>
              {cartHasItems ? "Belum ada produk terpilih" : "Keranjang kosong"}
            </h1>
            {cartHasItems && <p className="text-secondary mt-2">Centang produk yang ingin di-checkout di keranjang.</p>}
            <div className="flex gap-2 mt-4" style={{ justifyContent: "center" }}>
              {cartHasItems && <Link href="/keranjang" className="btn btn-secondary"><Bag size={16} /> Ke Keranjang</Link>}
              <Link href="/marketplace" className="btn btn-gradient"><Bag size={16} /> Mulai Belanja</Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Pilih pengiriman; COD (Banda Aceh) otomatis mengatur pembayaran ke COD (PRD §5.5).
  function chooseShipping(value: string) {
    setShipping(value);
    if (value === COD_SHIPPING) setPayment(COD_PAYMENT);
    else if (payment === COD_PAYMENT) setPayment(PAYMENT[0]);
  }

  async function submit() {
    setError(null);
    if (!recipient.trim() || !address.trim() || !city.trim()) {
      setError("Lengkapi nama penerima dan alamat pengiriman.");
      return;
    }
    setBusy(true);
    const purchasedIds = activeLines.map((l) => l.id);
    try {
      const res = await fetch("/api/marketplace/checkout", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ items: activeLines.map((l) => ({ id: l.id, qty: l.qty })), redeemPoints: redeem }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Checkout gagal. Coba lagi.");
        return;
      }
      setResult(data);
      removeItems(purchasedIds); // hapus hanya item yang dibeli, sisakan lainnya di keranjang
      refresh(); // perbarui saldo poin di navbar/profil
    } catch {
      setError("Tidak dapat terhubung. Periksa koneksi Anda.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="section" style={{ paddingTop: 24 }}>
      <div className="container" style={{ maxWidth: 980 }}>
        <div className="page-hero">
          <span className="eyebrow"><Bag size={14} /> Checkout</span>
          <h1>Selesaikan pesanan Anda.</h1>
        </div>

        <div className="cart-layout mt-6">
          <div style={{ display: "grid", gap: 18 }}>
            {/* 1. Alamat */}
            <div className="card panel">
              <h3 className="co-step"><span>1</span> Alamat Pengiriman</h3>
              <div className="grid grid-2 mt-4" style={{ gap: 14 }}>
                <div><label className="label required">Nama penerima</label><input className="input" value={recipient} onChange={(e) => setRecipient(e.target.value)} /></div>
                <div><label className="label required">Nomor HP</label><input className="input" value={phone} onChange={(e) => setPhone(e.target.value)} inputMode="tel" /></div>
              </div>
              <div className="mt-4"><label className="label required">Alamat lengkap</label><textarea className="textarea" rows={2} value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Jalan, dusun, patokan…" /></div>
              <div className="mt-4"><label className="label required">Kota/Kabupaten</label><input className="input" value={city} onChange={(e) => setCity(e.target.value)} /></div>
            </div>

            {/* 2. Pengiriman */}
            <div className="card panel">
              <h3 className="co-step"><span>2</span> Metode Pengiriman</h3>
              <div className="opt-list mt-4">
                {SHIPPING.map((s) => (
                  <label key={s} className={`opt-radio ${shipping === s ? "active" : ""}`}>
                    <input type="radio" name="ship" checked={shipping === s} onChange={() => chooseShipping(s)} />
                    <Truck size={16} /> {s}
                  </label>
                ))}
              </div>
              {order.level.freeShipping && <span className="pill pill-success mt-3">Gratis ongkir — level {order.level.name}</span>}
            </div>

            {/* 3. Green Point */}
            <div className="card panel">
              <h3 className="co-step"><span>3</span> Gunakan Green Point</h3>
              <p className="text-secondary mt-2" style={{ fontSize: "var(--text-body-sm)" }}>
                Saldo Anda <strong>{user.points} pts</strong>. 1 poin = {formatRupiah(100)} potongan.
                {order.maxRedeemable === 0 && " (belum bisa dipakai untuk pesanan ini)"}
              </p>
              <input type="range" min={0} max={order.maxRedeemable} step={1} value={redeem}
                onChange={(e) => setRedeem(Number(e.target.value))} disabled={order.maxRedeemable === 0}
                style={{ width: "100%", accentColor: "var(--color-primary)", marginTop: 10 }} aria-label="Tukar Green Point" />
              <div className="flex items-center justify-between mt-2" style={{ fontSize: "var(--text-body-sm)" }}>
                <span className="text-muted">Tukar {order.redeemPoints} pts</span>
                <span className="price">−{formatRupiah(order.pointsDiscount)}</span>
              </div>
            </div>

            {/* 4. Pembayaran */}
            <div className="card panel">
              <h3 className="co-step"><span>4</span> Metode Pembayaran</h3>
              <div className="opt-list mt-4">
                {PAYMENT.map((p) => (
                  <label key={p} className={`opt-radio ${payment === p ? "active" : ""}`}>
                    <input type="radio" name="pay" checked={payment === p} onChange={() => setPayment(p)} /> {p}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Ringkasan / tinjauan akhir */}
          <aside className="card panel cart-summary">
            <h3 style={{ fontSize: "var(--text-h3)", fontWeight: 700 }}>Ringkasan Pesanan</h3>
            <div className="co-items mt-3">
              {activeLines.map((l) => (
                <div className="sum-row" key={l.id}>
                  <span className="co-item-name">{l.qty}× {l.product.name}</span>
                  <span>{formatRupiah(l.product.price * l.qty)}</span>
                </div>
              ))}
            </div>
            <div className="co-divider" />
            <div className="sum-row"><span>Subtotal</span><span>{formatRupiah(order.subtotal)}</span></div>
            {order.levelDiscount > 0 && <div className="sum-row"><span>Diskon {order.level.name} ({Math.round(order.level.discountRate * 100)}%)</span><span>−{formatRupiah(order.levelDiscount)}</span></div>}
            {order.pointsDiscount > 0 && <div className="sum-row"><span>Green Point ({order.redeemPoints} pts)</span><span>−{formatRupiah(order.pointsDiscount)}</span></div>}
            <div className="sum-row"><span>Ongkir</span><span>{order.shipping === 0 ? "Gratis" : formatRupiah(order.shipping)}</span></div>
            <div className="co-divider" />
            <div className="sum-row" style={{ fontSize: "1.05rem" }}><strong>Total</strong><strong className="price">{formatRupiah(order.total)}</strong></div>
            <div className="sum-row"><span className="text-muted">Green Point didapat</span><span className="badge-point"><Coins size={13} /> +{order.pointsEarned}</span></div>

            {error && <div className="auth-alert mt-4" role="alert">{error}</div>}
            <button className="btn btn-gradient btn-block mt-4" onClick={submit} disabled={busy}>
              {busy ? "Memproses…" : `Bayar ${formatRupiah(order.total)}`}
            </button>
            <p className="text-muted mt-2" style={{ fontSize: "var(--text-caption)", textAlign: "center" }}>
              Pembayaran diproses aman via Midtrans (simulasi prototipe).
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
