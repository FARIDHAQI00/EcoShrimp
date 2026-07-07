import Link from "next/link";
import Shrimy from "@/components/Shrimy";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import ProcessDiagram from "@/components/ProcessDiagram";
import AskChip from "@/components/AskChip";
import { ArrowRight, Recycle, Leaf, Fish, Drop, Water, Star, Sparkles } from "@/components/Icons";
import {
  IMPACT,
  FACTS,
  HOW_IT_WORKS,
  KITOSAN_STEPS,
  APPLICATIONS,
  TESTIMONIALS,
} from "@/lib/data";

const APP_ICONS = { leaf: Leaf, fish: Fish, drop: Drop, water: Water } as const;

export default function HomePage() {
  return (
    <>
      {/* 1 — HERO + MASKOT */}
      <section className="hero section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="hero-grid">
            <div>
              <span className="eyebrow hero-cta">
                <Recycle size={14} /> Inovasi · Agro-Marina Aceh
              </span>
              <h1 className="hero-title hero-headline" style={{ marginTop: 16 }}>
                Dari Limbah <br />
                Menjadi <span className="text-gradient">Nilai.</span>
              </h1>
              <p className="hero-lead hero-subtext">
                Setiap hari <strong>±12 ton</strong> kulit, kepala, dan cangkang udang di
                Aceh terbuang tanpa diolah. EcoShrimp menutup lingkaran itu — menjadi
                kitosan, pakan, dan pupuk yang kembali menghidupi tambak dan kebun.
              </p>
              <div className="hero-cta-row hero-cta">
                <Link href="/waste-exchange" className="btn btn-gradient btn-lg">
                  Daftarkan Limbah <ArrowRight size={18} />
                </Link>
                <Link href="#cara-kerja" className="btn btn-glass btn-lg">
                  Pelajari Cara Kerja
                </Link>
              </div>
              <span className="hero-proof hero-cta">
                <span className="live" /> 48 mitra aktif · 312 pengguna terdaftar
              </span>
            </div>

            <div className="hero-visual">
              <Shrimy size={320} float halo />
              <div className="speech-bubble green hero-bubble-a">+10 pts / kg limbah</div>
              <div className="speech-bubble hero-bubble-b">Halo! Aku SHRIMY 🦐 tanya aku soal olah limbah.</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 — IMPACT COUNTER (kartu kaca menimpa hero) */}
      <div className="container">
        <Reveal>
          <div className="glass-strong impact-counter">
            {IMPACT.map((it) => (
              <div className="impact-cell" key={it.key}>
                <div className="impact-num">
                  <CountUp value={it.value} decimals={it.decimals} suffix={it.suffix} />
                </div>
                <div className="impact-label">{it.label}</div>
                <div className="impact-sub">{it.sub}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* 3 — FACT STRIP "Tahukah Anda?" */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="fact-section">
              <span className="overline" style={{ color: "var(--color-accent)" }}>Tahukah Anda?</span>
              <h2 className="section-title" style={{ color: "#fff", marginTop: 8 }}>
                Limbah yang terbuang, sebenarnya bernilai.
              </h2>
              <div className="fact-grid">
                {FACTS.map((f, i) => (
                  <Reveal key={f.stat} delay={((i % 3) + 1) as 1 | 2 | 3}>
                    <div className="fact-card">
                      <div className="fact-stat">{f.stat}</div>
                      <h4>{f.title}</h4>
                      <p>{f.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4 — CARA KERJA */}
      <section className="section" id="cara-kerja">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="overline">Cara Kerja</span>
              <h2 className="section-title mt-2">Tiga langkah menutup lingkaran.</h2>
              <p className="section-lead mt-2">
                Dari dapur restoran hingga kembali ke tambak dan kebun — setiap langkah memberi Green Point.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-3 mt-8">
            {HOW_IT_WORKS.map((s, i) => (
              <Reveal key={s.n} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="card how-card">
                  <div className="how-num">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                  <span className="badge-point mt-4"><Leaf size={13} /> {s.reward}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — EDUKASI INTERAKTIF (proses kitosan) */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="overline">Edukasi Interaktif</span>
              <h2 className="section-title mt-2">Bagaimana kitosan dibuat?</h2>
              <p className="section-lead mt-2">
                Klik tiap tahap untuk melihat parameter teknisnya. Empat tahap mengubah cangkang menjadi biopolimer bernilai tinggi.
              </p>
            </div>
          </Reveal>
          <div className="mt-8">
            <ProcessDiagram steps={KITOSAN_STEPS} />
          </div>
        </div>
      </section>

      {/* 6 — APLIKASI PRODUK */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="overline">Aplikasi Produk</span>
              <h2 className="section-title mt-2">Satu limbah, empat manfaat nyata.</h2>
              <p className="section-lead mt-2">Lengkap dengan dosis praktis — bukan sekadar nama produk.</p>
            </div>
          </Reveal>
          <div className="grid grid-4 mt-8">
            {APPLICATIONS.map((a, i) => {
              const Icon = APP_ICONS[a.icon as keyof typeof APP_ICONS];
              return (
                <Reveal key={a.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                  <div className="card app-card">
                    <div className="app-icon"><Icon size={28} /></div>
                    <h3>{a.title}</h3>
                    <p>{a.body}</p>
                    <div className="app-dose badge-point">{a.dose}</div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7 — KONSULTASI AI */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="card-feature">
              <div className="consult-grid">
                <div>
                  <span className="tag" style={{ background: "rgba(244,135,74,.16)", color: "var(--color-accent)" }}>
                    <Sparkles size={13} /> Konsultasi AI · Gratis 24 Jam
                  </span>
                  <h2 className="section-title" style={{ color: "#fff", marginTop: 14 }}>
                    Punya pertanyaan? Tanya SHRIMY.
                  </h2>
                  <p style={{ color: "#C49484", marginTop: 10 }}>
                    Asisten AI kami siap membantu dalam bahasa sehari-hari — soal olah limbah, produk, sampai budidaya. Coba salah satu:
                  </p>
                  <div className="consult-q">
                    <AskChip question="Bagaimana cara membuat pakan udang dari cangkang udang?" />
                    <AskChip question="Produk apa yang cocok untuk tanaman cabai saya?" />
                    <AskChip question="Bagaimana cara daftar jual limbah?" />
                  </div>
                  <div className="mt-6">
                    <AskChip variant="cta" label="Mulai Konsultasi Sekarang" />
                  </div>
                </div>
                <div className="consult-visual">
                  <Shrimy size={240} float halo />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8 — TESTIMONI */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head center">
              <span className="overline">Testimoni</span>
              <h2 className="section-title mt-2">Dipercaya pelaku di lapangan.</h2>
            </div>
          </Reveal>
          <div className="grid grid-3 mt-8">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="card testi-card">
                  <span className="stars">
                    {Array.from({ length: 5 }).map((_, k) => <Star key={k} size={16} />)}
                  </span>
                  <p className="testi-quote mt-3">“{t.quote}”</p>
                  <div className="testi-who">
                    <span className="testi-avatar">{t.initial}</span>
                    <span>
                      <span className="testi-name" style={{ display: "block" }}>{t.name}</span>
                      <span className="testi-role">{t.role}</span>
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
