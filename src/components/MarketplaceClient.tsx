"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Shrimy from "./Shrimy";
import { Star, Leaf, Bag, Check } from "./Icons";
import { PRODUCTS, formatRupiah, type Product } from "@/lib/data";
import { useCart } from "./CartProvider";

const CATEGORIES = ["Semua", "Pakan Akuakultur", "Produk Pertanian", "Bundle & Starter Kit"] as const;
const SORTS = ["Terpopuler", "Harga Terendah", "Rating Tertinggi"] as const;

export default function MarketplaceClient() {
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("Semua");
  const [sort, setSort] = useState<(typeof SORTS)[number]>("Terpopuler");
  const [maxPrice, setMaxPrice] = useState(2000000);
  const { add, setQty, qtyOf, count, subtotal, hydrated } = useCart();

  const list = useMemo(() => {
    let items: Product[] = PRODUCTS.filter((p) => (cat === "Semua" ? true : p.category === cat));
    items = items.filter((p) => p.price <= maxPrice);
    if (sort === "Harga Terendah") items = [...items].sort((a, b) => a.price - b.price);
    else if (sort === "Rating Tertinggi") items = [...items].sort((a, b) => b.rating - a.rating);
    else items = [...items].sort((a, b) => b.reviews - a.reviews);
    return items;
  }, [cat, sort, maxPrice]);

  return (
    <div className="mk-layout">
      <aside className="card mk-sidebar">
        <div className="filter-group">
          <h4>Kategori</h4>
          {CATEGORIES.map((c) => (
            <button key={c} className={`filter-opt ${cat === c ? "active" : ""}`} onClick={() => setCat(c)}>
              <span className="filter-dot" /> {c}
            </button>
          ))}
        </div>
        <div className="filter-group">
          <h4>Harga maksimum</h4>
          <input
            type="range"
            min={80000}
            max={2000000}
            step={5000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            style={{ width: "100%", accentColor: "var(--color-primary)" }}
            aria-label="Harga maksimum"
          />
          <div className="text-muted" style={{ fontSize: "var(--text-caption)", marginTop: 6 }}>
            ≤ {formatRupiah(maxPrice)}
          </div>
        </div>
        <div className="filter-group" style={{ marginBottom: 0 }}>
          <h4>Rating</h4>
          <div className="rating-row"><Star size={14} /><Star size={14} /><Star size={14} /><Star size={14} /> ke atas</div>
        </div>
      </aside>

      <div>
        <div className="mk-toolbar">
          <span className="text-secondary" style={{ fontSize: "var(--text-body-sm)" }}>
            Menampilkan <strong>{list.length}</strong> dari {PRODUCTS.length} produk
          </span>
          <label className="flex items-center gap-2" style={{ fontSize: "var(--text-body-sm)" }}>
            <span className="text-muted">Urutkan</span>
            <select className="select" style={{ width: "auto", padding: "8px 12px" }} value={sort} onChange={(e) => setSort(e.target.value as (typeof SORTS)[number])}>
              {SORTS.map((s) => <option key={s}>{s}</option>)}
            </select>
          </label>
        </div>

        {hydrated && count > 0 && (
          <Link href="/keranjang" className="cart-banner" aria-label="Lihat keranjang">
            <span className="cart-banner-ic"><Bag size={18} /></span>
            <span className="cart-banner-text">
              <strong>{count} item</strong> di keranjang · {formatRupiah(subtotal)}
            </span>
            <span className="cart-banner-cta">Lihat Keranjang <Check size={15} /></span>
          </Link>
        )}

        <div className="prod-grid">
          {list.map((p) => (
            <article className="card prod-card" key={p.id}>
              <div className="prod-media">
                {p.tag && <span className="tag tag-brand badge-abs">{p.tag}</span>}
                <Shrimy size={78} />
              </div>
              <div className="prod-body">
                <span className="overline">{p.category}</span>
                <h3 className="prod-name">{p.name}</h3>
                <span className="prod-brand">{p.brand} · {p.spec}</span>
                <p className="prod-desc">{p.desc}</p>
                <span className="badge-point" style={{ alignSelf: "flex-start" }}><Leaf size={13} /> +{p.points} pts</span>
                <div className="prod-foot">
                  <div>
                    <span className="rating-row"><Star size={14} /> {p.rating} <span className="text-muted">({p.reviews})</span></span>
                    <div className="price" style={{ fontSize: "1.1rem", marginTop: 2 }}>{formatRupiah(p.price)}</div>
                  </div>
                  {hydrated && qtyOf(p.id) > 0 ? (
                    <div className="qty-stepper" role="group" aria-label={`Jumlah ${p.name}`}>
                      <button type="button" onClick={() => setQty(p.id, qtyOf(p.id) - 1)} aria-label="Kurangi">−</button>
                      <span className="qty-val">{qtyOf(p.id)}</span>
                      <button type="button" onClick={() => add(p.id)} aria-label="Tambah">+</button>
                    </div>
                  ) : (
                    <button className="btn btn-primary btn-sm" onClick={() => add(p.id)}>
                      <Bag size={15} /> Beli
                    </button>
                  )}
                </div>
                {hydrated && qtyOf(p.id) > 0 && (
                  <Link href={`/checkout?only=${p.id}`} className="btn btn-gradient btn-block btn-sm mt-3">
                    <Bag size={15} /> Checkout produk ini
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
