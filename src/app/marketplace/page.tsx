import type { Metadata } from "next";
import MarketplaceClient from "@/components/MarketplaceClient";
import { Bag } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Marketplace — EcoShrimp",
  description: "Produk hasil olahan limbah udang: pakan akuakultur, kitosan, pupuk organik, dan bundle starter kit.",
};

export default function MarketplacePage() {
  return (
    <section className="section" style={{ paddingTop: 24 }}>
      <div className="container">
        <div className="page-hero">
          <span className="eyebrow"><Bag size={14} /> Marketplace</span>
          <h1>Produk olahan limbah udang, harga terjangkau.</h1>
          <p>
            Beli satuan atau paket, gunakan Green Point sebagai potongan harga, dan lacak pengiriman.
            Setiap pembelian mendukung ekonomi sirkular pesisir Aceh.
          </p>
        </div>
        <div className="mt-8">
          <MarketplaceClient />
        </div>
      </div>
    </section>
  );
}
