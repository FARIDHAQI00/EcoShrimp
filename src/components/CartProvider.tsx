"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { PRODUCTS, type Product } from "@/lib/data";

export interface CartItem {
  id: string;
  qty: number;
  selected: boolean; // dicentang untuk di-checkout (§ keranjang)
}
export interface CartLine extends CartItem {
  product: Product;
}

interface CartState {
  items: CartItem[];
  lines: CartLine[];
  count: number; // total kuantitas seluruh item
  subtotal: number; // subtotal seluruh item
  selectedLines: CartLine[];
  selectedCount: number; // total kuantitas item tercentang
  selectedSubtotal: number;
  allSelected: boolean;
  add: (id: string, qty?: number) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  removeItems: (ids: string[]) => void;
  clear: () => void;
  toggleSelected: (id: string) => void;
  setAllSelected: (value: boolean) => void;
  qtyOf: (id: string) => number;
  hydrated: boolean;
}

const CartContext = createContext<CartState | null>(null);
const STORAGE_KEY = "sl_cart";
const byId = new Map(PRODUCTS.map((p) => [p.id, p]));

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Muat keranjang dari localStorage (§5.5 — keranjang bertahan).
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<CartItem>[];
        if (Array.isArray(parsed)) {
          setItems(
            parsed
              .filter((i) => i.id && byId.has(i.id) && (i.qty ?? 0) > 0)
              .map((i) => ({
                id: i.id!,
                qty: Math.floor(i.qty!),
                selected: i.selected !== false, // default tercentang (kompatibel data lama)
              })),
          );
        }
      }
    } catch {
      /* abaikan */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const add = useCallback((id: string, qty = 1) => {
    if (!byId.has(id)) return;
    setItems((prev) => {
      const found = prev.find((i) => i.id === id);
      if (found) return prev.map((i) => (i.id === id ? { ...i, qty: i.qty + qty } : i));
      return [...prev, { id, qty, selected: true }];
    });
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    setItems((prev) =>
      qty <= 0 ? prev.filter((i) => i.id !== id) : prev.map((i) => (i.id === id ? { ...i, qty: Math.floor(qty) } : i)),
    );
  }, []);

  const remove = useCallback((id: string) => setItems((prev) => prev.filter((i) => i.id !== id)), []);
  const removeItems = useCallback(
    (ids: string[]) => setItems((prev) => prev.filter((i) => !ids.includes(i.id))),
    [],
  );
  const clear = useCallback(() => setItems([]), []);
  const toggleSelected = useCallback(
    (id: string) => setItems((prev) => prev.map((i) => (i.id === id ? { ...i, selected: !i.selected } : i))),
    [],
  );
  const setAllSelected = useCallback(
    (value: boolean) => setItems((prev) => prev.map((i) => ({ ...i, selected: value }))),
    [],
  );

  const value = useMemo<CartState>(() => {
    const lines: CartLine[] = items
      .map((i) => ({ ...i, product: byId.get(i.id)! }))
      .filter((l) => l.product);
    const selectedLines = lines.filter((l) => l.selected);
    return {
      items,
      lines,
      count: lines.reduce((s, l) => s + l.qty, 0),
      subtotal: lines.reduce((s, l) => s + l.product.price * l.qty, 0),
      selectedLines,
      selectedCount: selectedLines.reduce((s, l) => s + l.qty, 0),
      selectedSubtotal: selectedLines.reduce((s, l) => s + l.product.price * l.qty, 0),
      allSelected: lines.length > 0 && selectedLines.length === lines.length,
      add,
      setQty,
      remove,
      removeItems,
      clear,
      toggleSelected,
      setAllSelected,
      qtyOf: (id: string) => items.find((i) => i.id === id)?.qty ?? 0,
      hydrated,
    };
  }, [items, add, setQty, remove, removeItems, clear, toggleSelected, setAllSelected, hydrated]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartState {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart harus dipakai di dalam <CartProvider>");
  return ctx;
}
