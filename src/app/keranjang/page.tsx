"use client";

import Link from "next/link";
import Shrimy from "@/components/Shrimy";
import { Bag, X, Leaf } from "@/components/Icons";
import { useCart } from "@/components/CartProvider";
import { formatRupiah } from "@/lib/data";

export default function KeranjangPage() {
  const {
    lines,
    selectedCount,
    selectedSubtotal,
    selectedLines,
    allSelected,
    setAllSelected,
    toggleSelected,
    setQty,
    remove,
    hydrated,
  } = useCart();

  return (
    <section className="section" style={{ paddingTop: 24 }}>
      <div className="container" style={{ maxWidth: 900 }}>
        <div className="page-hero">
          <span className="eyebrow"><Bag size={14} /> Keranjang Belanja</span>
          <h1>Keranjang Anda.</h1>
        </div>

        {!hydrated ? (
          <p className="text-muted mt-6">Memuat…</p>
        ) : lines.length === 0 ? (
          <div className="card panel mt-6" style={{ textAlign: "center", padding: 40 }}>
            <Shrimy size={64} />
            <h3 style={{ fontSize: "var(--text-h3)", fontWeight: 700, marginTop: 12 }}>Keranjang masih kosong</h3>
            <p className="text-secondary mt-2">Jelajahi produk olahan limbah udang, pakan, kitosan, dan pupuk.</p>
            <Link href="/marketplace" className="btn btn-gradient mt-4"><Bag size={16} /> Mulai Belanja</Link>
          </div>
        ) : (
          <div className="cart-layout mt-6">
            <div className="cart-items">
              {/* Centang semua */}
              <label className="cart-selectall">
                <input type="checkbox" checked={allSelected} onChange={(e) => setAllSelected(e.target.checked)} />
                <span>Pilih semua · <strong>{selectedCount}</strong> item dicentang</span>
              </label>

              {lines.map((l) => (
                <div className={`card cart-row ${l.selected ? "" : "cart-row--off"}`} key={l.id}>
                  <label className="cart-check" aria-label={`Pilih ${l.product.name}`}>
                    <input type="checkbox" checked={l.selected} onChange={() => toggleSelected(l.id)} />
                  </label>
                  <div className="cart-row-media"><Shrimy size={46} /></div>
                  <div className="cart-row-info">
                    <span className="overline">{l.product.category}</span>
                    <h3 className="cart-row-name">{l.product.name}</h3>
                    <span className="prod-brand">{l.product.brand}</span>
                    <span className="badge-point mt-2" style={{ alignSelf: "flex-start" }}>
                      <Leaf size={13} /> +{l.product.points * l.qty} pts
                    </span>
                  </div>
                  <div className="cart-row-right">
                    <button className="cart-remove" onClick={() => remove(l.id)} aria-label={`Hapus ${l.product.name}`}>
                      <X size={16} />
                    </button>
                    <div className="price">{formatRupiah(l.product.price * l.qty)}</div>
                    <div className="qty-stepper">
                      <button type="button" onClick={() => setQty(l.id, l.qty - 1)} aria-label="Kurangi">−</button>
                      <span className="qty-val">{l.qty}</span>
                      <button type="button" onClick={() => setQty(l.id, l.qty + 1)} aria-label="Tambah">+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <aside className="card panel cart-summary">
              <h3 style={{ fontSize: "var(--text-h3)", fontWeight: 700 }}>Ringkasan</h3>
              <div className="sum-row mt-4"><span>Subtotal ({selectedCount} item dicentang)</span><span className="price">{formatRupiah(selectedSubtotal)}</span></div>
              <div className="sum-row text-muted"><span>Ongkir & Green Point</span><span>dihitung saat checkout</span></div>
              {selectedLines.length === 0 && (
                <p className="text-muted mt-2" style={{ fontSize: "var(--text-caption)" }}>
                  Centang minimal satu produk untuk melanjutkan.
                </p>
              )}
              {selectedLines.length === 0 ? (
                <button className="btn btn-gradient btn-block mt-4" disabled>Lanjut ke Checkout</button>
              ) : (
                <Link href="/checkout" className="btn btn-gradient btn-block mt-4">Lanjut ke Checkout</Link>
              )}
              <Link href="/marketplace" className="btn btn-ghost btn-block mt-2">Tambah produk lain</Link>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}
