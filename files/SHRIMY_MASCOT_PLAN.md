# SHRIMY 2.0 — Rencana Pengembangan Maskot Realistis-3D
## Shrimp Loop · Mascot Upgrade Plan

**Versi 1.0 — Juli 2026**
Dokumen pendamping: `SHRIMY_MASCOT_SPEC.md` (spesifikasi detail visual, material, dan animasi)

---

## 1. Latar Belakang & Sasaran

Maskot SHRIMY versi saat ini (v1) berupa ilustrasi flat SVG. Untuk memperkuat kesan premium dan memorable — terutama di hero beranda, materi presentasi juri, dan konten media sosial — SHRIMY akan dinaikkan kelasnya menjadi karakter **stylized-realistic 3D**: anatomi yang jelas-jelas udang sungguhan, dirender dengan material dan pencahayaan tiga dimensi, namun proporsi dan ekspresinya tetap ramah.

**Sasaran**
1. SHRIMY terlihat seperti karakter film animasi berkualitas — bukan clipart
2. Anatomi dikenali sebagai udang vaname (komoditas utama tambak Aceh) oleh orang yang paham udang
3. Tetap **identik di semua titik kemunculan** — prinsip satu master aset dipertahankan
4. Performa web tetap terjaga: beranda tidak boleh melambat karena maskot

**Bukan sasaran (non-goals)**
- Realisme fotografis penuh — udang fotorealistis dengan mata bertangkai dan kaki banyak justru berisiko terasa mengganggu (uncanny). Kita berhenti di "realistis yang menggemaskan".
- Mengganti seluruh identitas brand — palet, kepribadian, dan simbol loop tetap sama.

---

## 2. Arah Gaya: "Stylized-Realistic"

| Aspek | Dari (v1 flat) | Menjadi (v2 realistis-3D) |
|-------|----------------|---------------------------|
| Bentuk | Siluet sederhana, kepala lingkaran | Anatomi vaname: karapas, 6 segmen abdomen, rostrum, ekor kipas 5 lobus |
| Warna | Flat gradient 2–3 stop | Material shell dengan subsurface scattering, glossy highlight, ambient occlusion antar segmen |
| Cahaya | Tidak ada | Key light hangat kiri-atas + rim light oranye + fill lembut |
| Mata | Bulat kartun di wajah | Mata besar ekspresif pada tangkai pendek (kompromi anatomi vs keramahan) |
| Kesan | Ikon lucu | Karakter hidup yang bisa "membintangi" hero dan video |

Referensi nada visual: karakter laut di film animasi 3D keluarga — detail tinggi pada tekstur cangkang, tetapi mata dan senyum mendominasi.

---

## 3. Strategi Teknis — Tiga Tingkat, Satu Karakter

Satu desain karakter, tiga format keluaran sesuai konteks pemakaian. Semua diturunkan dari master yang sama agar identik.

| Tingkat | Teknologi | Dipakai untuk | Bobot |
|---------|-----------|---------------|-------|
| **A. Pseudo-3D SVG** | SVG dengan radial gradient berlapis, inner shadow, highlight specular | Logo nav, FAB chat, avatar, ikon kecil (≤ 80px) | < 15 KB |
| **B. Render 3D statis & animasi** | Blender (model + rig) → ekspor PNG/WebP @2x dan WebP animasi / Lottie | Hero beranda, section konsultasi, materi pitch deck, media sosial | 80–300 KB |
| **C. 3D real-time (opsional)** | GLB + three.js | Easter egg interaktif / halaman edukasi (Phase 3) | ≤ 1,5 MB |

**Prinsip identik yang diperbarui:** master kebenaran (source of truth) berpindah dari file SVG ke **file Blender** (`shrimy-master.blend`). SVG pseudo-3D dan seluruh render diturunkan darinya. Turntable render 8 sudut menjadi acuan wajib bagi setiap aset turunan.

---

## 4. Tahapan Pengerjaan

### Fase 0 — Riset & Moodboard (2–3 hari)
- Kumpulkan foto referensi udang vaname: sudut karapas, jumlah segmen, bentuk ekor, warna saat mentah vs matang
- Kumpulkan 6–10 referensi karakter 3D stylized (proporsi kepala-badan, perlakuan mata)
- Tetapkan rasio proporsi final (usulan: kepala 40% tinggi karakter — detail di SPEC §2)
- **Keluaran:** moodboard 1 halaman + keputusan proporsi

### Fase 1 — Desain 2D & Pseudo-3D SVG (3–5 hari)
- Sketsa turnaround 2D: depan, ¾, samping — kunci anatomi dan ekspresi default
- Bangun SVG pseudo-3D mengikuti SPEC §5 (gradient berlapis, highlight, shadow)
- Gantikan `#shrimy-core` v1 di seluruh antarmuka — animasi CSS v1 (floaty, blink, sway) tetap kompatibel
- **Keluaran:** `shrimy-core-v2.svg` + pembaruan Design System §1.4

### Fase 2 — Modeling & Material 3D (1–2 minggu)
- Modeling di Blender sesuai turnaround; topologi rapi untuk rigging
- Material: shader cangkang (SSS + glossy), mata, daun aksen — parameter di SPEC §3–4
- Lighting studio standar (SPEC §4) agar semua render konsisten
- Render turntable 8 sudut + 6 ekspresi (SPEC §6)
- **Keluaran:** `shrimy-master.blend`, paket PNG/WebP @1x @2x @3x

### Fase 3 — Rigging & Animasi (1 minggu)
- Rig sederhana: spine kurva tubuh, tangkai mata, antena (fisika lembut), ekor, kaki renang
- Animasikan 5 siklus dasar (idle-breathe, blink, antenna-sway, tail-flick, wave) — timing mengikuti animasi CSS v1 agar karakter terasa sama (SPEC §7)
- Ekspor WebP animasi (hero) dan Lottie bila memungkinkan
- **Keluaran:** `shrimy-idle.webp`, `shrimy-wave.webp`, dst.

### Fase 4 — Integrasi & QA (3–4 hari)
- Beranda: ganti maskot hero dengan render animasi; SVG pseudo-3D untuk nav/FAB/avatar
- Fallback: `<picture>` WebP → PNG; `prefers-reduced-motion` → frame statis
- Audit performa: LCP hero tidak memburuk > 200ms; total aset maskot per halaman ≤ 350 KB
- Uji konsistensi: bandingkan semua kemunculan dengan turntable acuan
- **Keluaran:** beranda v2 live + checklist QA terisi

---

## 5. Pembagian Peran & Alat

| Peran | Alat | Catatan |
|-------|------|---------|
| Desain 2D & SVG | Figma / Illustrator + tangan | Bisa dikerjakan tim sendiri |
| Modeling & render | Blender (gratis) | Kurva belajar ada; alternatif: rekrut 1 rekan mahasiswa DKV/animasi |
| Animasi web | Blender + squoosh/cwebp, LottieFiles | Ekspor ringan |
| Integrasi | Next.js (Claude Code) | Komponen `<ShrimyMascot variant="hero|icon" />` |

---

## 6. Risiko & Mitigasi

| Risiko | Dampak | Mitigasi |
|--------|--------|----------|
| Hasil 3D terasa menyeramkan (uncanny) | Brand jadi kurang ramah | Uji 6 ekspresi ke 5–10 calon pengguna sebelum final; pertahankan mata besar & senyum dominan |
| File animasi terlalu berat | Beranda lambat di 3G | Budget ketat SPEC §8; WebP terkompresi; lazy-load di bawah lipatan |
| Aset turunan tidak konsisten | Prinsip "identik" runtuh | Semua turunan wajib dirender dari `shrimy-master.blend`; turntable sebagai acuan QA |
| Keterbatasan skill 3D tim | Jadwal molor | Fase 1 (pseudo-3D SVG) sudah memberi 70% kesan upgrade — bisa dirilis lebih dulu |
| Versi lama masih beredar | Inkonsistensi brand | Tandai v1 deprecated di Design System; ganti serentak dalam satu rilis |

---

## 7. Kriteria Selesai (Definition of Done)

- [ ] `shrimy-master.blend` final dengan material, lighting, dan rig
- [ ] SVG pseudo-3D v2 menggantikan v1 di seluruh titik kemunculan
- [ ] Minimal render idle beranimasi terpasang di hero beranda
- [ ] 6 ekspresi dan 5 pose terekspor sesuai SPEC §6
- [ ] Semua aset lolos budget performa SPEC §8
- [ ] Design System §1.4 diperbarui dan merujuk ke `SHRIMY_MASCOT_SPEC.md`
- [ ] Uji reaksi pengguna: mayoritas mendeskripsikan SHRIMY sebagai "lucu/ramah", bukan "aneh"

---

*Rencana ini melengkapi PRD dan Design System Shrimp Loop. Spesifikasi teknis penuh: `SHRIMY_MASCOT_SPEC.md`.*
