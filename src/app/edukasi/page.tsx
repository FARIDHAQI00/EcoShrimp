import type { Metadata } from "next";
import Shrimy from "@/components/Shrimy";
import Reveal from "@/components/Reveal";
import ProcessDiagram from "@/components/ProcessDiagram";
import AskChip from "@/components/AskChip";
import { Book, Recycle, Leaf, Fish, Sparkles, Star } from "@/components/Icons";
import { KITOSAN_STEPS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Edukasi & Konsultasi AI SHRIMY — Shrimp Loop",
  description: "Pusat edukasi pengolahan limbah udang: video tutorial, panduan, diagram proses interaktif, dan Konsultasi AI SHRIMY 24 jam.",
};

const HUB = [
  {
    icon: Recycle,
    title: "Pengolahan Limbah Udang",
    items: [
      "Membersihkan & Menyiapkan Cangkang Udang",
      "Proses Demineralisasi Tahap demi Tahap",
      "Deproteinisasi: Memisahkan Protein dari Kitin",
      "Deasetilasi: Mengubah Kitin Menjadi Kitosan",
      "Produksi Pakan Ikan dari Limbah Udang",
    ],
  },
  {
    icon: Leaf,
    title: "Penggunaan Produk",
    items: [
      "Aplikasi Kitosan untuk Tanaman Cabai",
      "Dosis & Aplikasi Pupuk Organik Cair",
      "Formulasi Pakan Ikan yang Tepat",
      "Tips Penyimpanan Produk",
    ],
  },
  {
    icon: Fish,
    title: "Budidaya Berkelanjutan",
    items: [
      "Manajemen Kualitas Air Tambak",
      "Pencegahan Penyakit Udang",
      "Ekonomi Sirkular untuk Pemula",
    ],
  },
];

const FAQ = [
  { q: "Berapa lama proses pembuatan kitosan?", a: "Empat tahap: persiapan, demineralisasi (±2 jam), deproteinisasi (±2 jam), dan deasetilasi (±5 jam), masing-masing diikuti pencucian dan pengeringan 80°C selama 24 jam. Dari 10 kg cangkang kering dihasilkan ±1,5–2,5 kg kitosan." },
  { q: "Apakah pupuk organik cair aman untuk semua tanaman?", a: "Ya. Gunakan dosis 10 ml per liter air, disiram seminggu sekali. Untuk cabai dan hortikultura, kombinasikan dengan kitosan 0,1–0,2% semprot daun untuk hasil terbaik." },
  { q: "Bagaimana jika saya baru pertama kali mengolah limbah?", a: "Tenang! Tonton video tutorial 3–10 menit, ikuti infografis langkah demi langkah, atau langsung tanya SHRIMY kapan saja. Anda juga mendapat Green Point setiap menyelesaikan konten edukasi." },
];

export default function EdukasiPage() {
  return (
    <section className="section" style={{ paddingTop: 24 }}>
      <div className="container">
        <div className="page-hero">
          <span className="eyebrow"><Book size={14} /> Educational Hub</span>
          <h1>Belajar mengolah limbah, dari nol.</h1>
          <p>Video tutorial, panduan terstruktur, dan Konsultasi AI gratis 24 jam bersama SHRIMY. Cukup bertanya dalam bahasa sehari-hari.</p>
        </div>

        {/* Struktur konten */}
        <div className="cat-tree mt-8">
          {HUB.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="card cat-card">
                  <h4><span className="app-icon" style={{ width: 36, height: 36 }}><Icon size={20} /></span> {c.title}</h4>
                  <ul>
                    {c.items.map((it) => <li key={it}>{it}</li>)}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Diagram proses interaktif */}
        <div className="mt-8">
          <Reveal>
            <div className="section-head"><span className="overline">Diagram Interaktif</span><h2 className="section-title mt-2">Proses produksi kitosan.</h2></div>
          </Reveal>
          <div className="mt-6"><ProcessDiagram steps={KITOSAN_STEPS} /></div>
        </div>

        {/* Konsultasi AI SHRIMY */}
        <div className="mt-8">
          <Reveal>
            <div className="card-feature">
              <div className="consult-grid">
                <div>
                  <span className="tag" style={{ background: "rgba(244,135,74,.16)", color: "var(--color-accent)" }}>
                    <Sparkles size={13} /> SHRIMY · AI Chatbot
                  </span>
                  <h2 className="section-title" style={{ color: "#fff", marginTop: 14 }}>Bingung? Tanya SHRIMY 24 jam.</h2>
                  <p style={{ color: "#C49484", marginTop: 10 }}>
                    Panduan pengolahan, rekomendasi produk, troubleshooting, hingga navigasi platform — dijawab ramah dalam bahasa Indonesia.
                  </p>
                  <div className="consult-q">
                    <AskChip question="Udang saya mati mendadak, kenapa ya?" />
                    <AskChip question="Bagaimana cara membuat pakan udang dari cangkang udang?" />
                    <AskChip question="Saya mau bicara dengan tim Shrimp Loop" />
                  </div>
                  <div className="mt-6"><AskChip variant="cta" label="Mulai Konsultasi" /></div>
                </div>
                <div className="consult-visual"><Shrimy size={220} float halo /></div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Video library note */}
        <div className="mt-8">
          <Reveal>
            <div className="glass" style={{ padding: 24 }}>
              <div className="flex items-center gap-3">
                <span className="stars"><Star size={16} /><Star size={16} /><Star size={16} /><Star size={16} /><Star size={16} /></span>
                <strong style={{ color: "var(--color-text-primary)" }}>20+ video tutorial tersedia saat peluncuran</strong>
              </div>
              <p className="text-secondary mt-2" style={{ fontSize: "var(--text-body-sm)" }}>
                Durasi 3–10 menit · Infografis untuk literasi rendah · Panduan PDF yang dapat diunduh · Kuis interaktif · Mode unduh untuk akses offline · Green Point setelah menyelesaikan konten.
              </p>
            </div>
          </Reveal>
        </div>

        {/* FAQ */}
        <div className="mt-8">
          <Reveal>
            <div className="section-head"><span className="overline">FAQ</span><h2 className="section-title mt-2">Pertanyaan yang sering ditanya.</h2></div>
          </Reveal>
          <div className="grid mt-6" style={{ gap: 12, gridTemplateColumns: "1fr" }}>
            {FAQ.map((f) => (
              <details className="card faq-item" key={f.q}>
                <summary>{f.q} <span aria-hidden>+</span></summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
