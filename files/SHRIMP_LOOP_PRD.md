# Shrimp Loop
## Product Requirements Document

**Versi 1.1 — Juli 2026**
UTU Awards · Inovasi Digital Mahasiswa · Universitas Teuku Umar

---

## Daftar Isi

1. [Ringkasan Eksekutif](#1-ringkasan-eksekutif)
2. [Latar Belakang & Rumusan Masalah](#2-latar-belakang--rumusan-masalah)
3. [Visi, Misi & Tujuan](#3-visi-misi--tujuan)
4. [Target Pengguna & Persona](#4-target-pengguna--persona)
5. [Fitur Produk](#5-fitur-produk)
6. [Arsitektur Informasi](#6-arsitektur-informasi)
7. [User Flow & Wireframe](#7-user-flow--wireframe)
8. [Persyaratan Teknis](#8-persyaratan-teknis)
9. [Desain & UX](#9-desain--ux)
10. [Success Metrics & KPI](#10-success-metrics--kpi)
11. [Roadmap](#11-roadmap)
12. [Risiko & Mitigasi](#12-risiko--mitigasi)
13. [Lampiran](#13-lampiran)

---

## 1. Ringkasan Eksekutif

Shrimp Loop adalah platform digital berbasis ekonomi sirkular yang menghubungkan rantai nilai industri udang Aceh dalam satu ekosistem terintegrasi — dari petambak, pengolah seafood, dan restoran, hingga petani hortikultura dan pembudidaya ikan.

Setiap hari, ribuan kilogram kulit, kepala, dan cangkang udang di Aceh dibuang tanpa diolah. Padahal bahan yang sama dapat diubah menjadi tiga produk bernilai tinggi: kitosan, pakan akuakultur, dan pupuk organik cair. Shrimp Loop menutup lingkaran ini — mengumpulkan limbah dari sumbernya, mengolahnya, lalu mendistribusikan hasilnya kembali kepada pelaku industri yang membutuhkan dengan harga terjangkau.

**Tagline:** *Dari Limbah Menjadi Nilai. Dari Laut Kembali ke Laut.*

### Nilai Tambah Utama

| Dimensi | Kontribusi |
|---------|-----------|
| Lingkungan | Mengurangi limbah udang yang mencemari pesisir Aceh |
| Ekonomi | Membuka sumber penghasilan baru bagi pengolah seafood dari limbah yang selama ini dibuang |
| Pertanian | Menyediakan pupuk organik dan kitosan terjangkau bagi petani |
| Akuakultur | Menekan biaya pakan tambak hingga 30% |
| Digital | Menghubungkan seluruh rantai nilai melalui teknologi yang mudah diakses |

---

## 2. Latar Belakang & Rumusan Masalah

### 2.1 Kondisi Industri Udang Aceh

Aceh termasuk provinsi penghasil udang terbesar di Indonesia, dengan wilayah pesisir yang membentang dari Sabang hingga Tamiang. Di balik potensi tersebut, industri udang Aceh masih menyimpan sejumlah persoalan struktural yang belum terselesaikan.

### 2.2 Matriks Permasalahan

| # | Masalah Inti | Pihak Terdampak | Dampak Nyata |
|---|--------------|-----------------|--------------|
| 1 | Limbah kulit, kepala, dan cangkang udang dibuang tanpa pengolahan | Ekosistem pesisir, masyarakat sekitar | Pencemaran air, bau, penurunan kualitas lingkungan |
| 2 | Petambak membeli pakan dan pupuk dengan harga pasar yang tinggi | Petambak, pembudidaya | Margin keuntungan tipis, ketergantungan pada distributor |
| 3 | Belum ada sistem pengumpulan limbah yang terorganisir | Pengolah seafood, restoran | Biaya pembuangan, risiko sanksi lingkungan |
| 4 | Produk turunan udang bernilai tinggi (kitosan) belum diproduksi secara lokal | Petani, industri | Potensi ekonomi yang hilang dari daerah |
| 5 | Belum ada platform digital yang menghubungkan seluruh rantai nilai | Semua pelaku | Transaksi tidak efisien, informasi asimetris |

### 2.3 Peluang yang Belum Digarap

Kitosan adalah biopolimer alami yang diekstrak dari cangkang krustasea melalui proses kimia bertahap. Aplikasinya luas dan nilai ekonominya tinggi:

- **Pertanian** — biostimulan tanaman, fungisida alami, pelapis benih
- **Akuakultur** — suplemen pakan, antimikroba alami
- **Farmasi** — penghantar obat, penutup luka; pasar global diperkirakan melebihi USD 6 miliar
- **Industri** — pengolahan air, tekstil, kosmetik

Ironisnya, seluruh produksi kitosan di Indonesia saat ini terpusat di luar Aceh — sementara bahan bakunya justru melimpah di sini.

### 2.4 Kesenjangan Digital

Hingga kini belum ada platform yang:

- Mempertemukan penjual limbah dan pengolah secara efisien
- Mendistribusikan produk olahan limbah kepada petambak dan petani
- Menyediakan edukasi pengolahan limbah berbasis teknologi
- Mendorong partisipasi masyarakat dalam ekonomi sirkular melalui insentif yang terukur

---

## 3. Visi, Misi & Tujuan

### Visi

> Menjadi ekosistem agro-marina sirkular digital terdepan di Aceh yang mengubah setiap kilogram limbah udang menjadi nilai ekonomi, sosial, dan lingkungan yang berkelanjutan.

### Misi

1. Membangun sistem digital yang mengelola alur limbah udang dari sumber hingga produk jadi
2. Menyediakan produk bernilai tambah — kitosan, pakan, pupuk — dengan harga terjangkau
3. Mendidik dan memberdayakan komunitas pesisir dan petani melalui teknologi
4. Menciptakan model ekonomi sirkular yang dapat direplikasi di wilayah pesisir lain

### Tujuan Produk — Enam Bulan Pertama

| Tujuan | Target |
|--------|--------|
| Limbah udang terkumpul | ≥ 5.000 kg/bulan |
| Kitosan diproduksi | ≥ 500 kg/bulan |
| Pengguna terdaftar aktif | ≥ 500 pengguna |
| Mitra restoran/seafood | ≥ 50 mitra |
| Petambak dan petani terlayani | ≥ 150 orang |

---

## 4. Target Pengguna & Persona

### 4.1 Peta Ekosistem Pengguna

```
          [PENGOLAH SEAFOOD]
               │
               │ Jual limbah
               ▼
         [SHRIMP LOOP]  ←───── [PETAMBAK UDANG]
               │                     (jual udang)
               │ Produksi
               ▼
    ┌──────────────────────┐
    │  Kitosan │ Pakan Ikan │
    │  Pupuk Organik Cair  │
    └──────────────────────┘
               │
        Distribusi ke
       ┌────────┴────────┐
       ▼                 ▼
  [PETAMBAK/          [PETANI
   PEMBUDIDAYA]      HORTIKULTURA]
```

### 4.2 Persona Pengguna

#### Persona 1 — Petambak Udang

**Pak Hasan, 45 tahun — Aceh Besar**

Petambak udang vaname dengan luas tambak 2 hektar, menghasilkan sekitar 2 ton udang per siklus (3–4 bulan). Persoalan utamanya adalah biaya pakan yang terus naik dan ketergantungan pada satu-dua pemasok.

**Kebutuhan**
- Pakan berkualitas dengan harga lebih terjangkau
- Akses pasar yang lebih baik untuk menjual hasil panen
- Informasi teknis untuk meningkatkan produksi

**Pain Points**
- Pakan komersial dapat menyerap 60–70% biaya produksi
- Sering terjebak harga tengkulak yang rendah
- Akses ke informasi dan pelatihan teknis sangat terbatas

**Literasi digital:** rendah–menengah. Terbiasa menggunakan WhatsApp dan marketplace sederhana.

**Implikasi UX**
- Antarmuka sederhana dengan ikon berukuran besar
- Bahasa Indonesia informal, tidak teknis
- Nomor WhatsApp layanan pelanggan sebagai jalur cadangan

---

#### Persona 2 — Pemilik Restoran / Pengolah Seafood

**Bu Sarah, 38 tahun — Banda Aceh**

Pemilik restoran seafood di kawasan Ulee Lheue yang mengolah 30–50 kg udang per hari. Selama ini limbah kulit dan kepala udang langsung dibuang atau diberikan cuma-cuma kepada pemulung.

**Kebutuhan**
- Cara mengelola limbah yang menghasilkan, bukan sekadar membuang
- Jadwal penjemputan yang pasti dan tidak mengganggu operasional
- Bukti kontribusi lingkungan yang dapat dipakai untuk branding restoran

**Pain Points**
- Tidak mengetahui nilai ekonomi limbah yang selama ini dibuang
- Khawatir terhadap regulasi pembuangan limbah makanan
- Tidak memiliki koneksi ke pengolah limbah yang tepercaya

**Literasi digital:** menengah. Terbiasa dengan Tokopedia, Gojek, dan Instagram.

**Implikasi UX**
- Proses pendaftaran limbah cepat, di bawah 2 menit
- Kalender penjemputan yang dapat disinkronkan
- Badge atau sertifikat "Green Restaurant" untuk konten media sosial

---

#### Persona 3 — Petani Hortikultura

**Pak Ridwan, 52 tahun — Aceh Tengah**

Petani cabai dan bawang di dataran tinggi Gayo. Sangat bergantung pada pupuk kimia yang harganya terus naik, dan belum pernah mencoba pupuk organik karena tidak mengetahui cara penggunaannya.

**Kebutuhan**
- Pupuk organik atau biostimulan terjangkau yang terbukti efektif
- Panduan aplikasi yang jelas dan mudah dipahami
- Jaminan pasokan rutin menjelang musim tanam

**Pain Points**
- Harga urea dan NPK terus naik; subsidi kerap terlambat
- Akses ke pupuk organik berkualitas sangat terbatas di wilayahnya
- Skeptis terhadap produk baru tanpa bukti nyata

**Literasi digital:** sangat rendah. Terbatas pada telepon dan WhatsApp dasar.

**Implikasi UX**
- Pemesanan langsung melalui WhatsApp
- Katalog produk dengan foto dan keterangan yang sangat sederhana
- Langganan otomatis agar tidak perlu memesan ulang setiap bulan

---

#### Persona 4 — Pembudidaya Ikan

**Pak Yusuf, 35 tahun — Aceh Utara**

Pembudidaya bandeng dan lele skala menengah. Lebih akrab dengan teknologi dibanding petambak udang, terbiasa berbelanja daring, dan aktif di grup Facebook komunitas budidaya ikan.

**Kebutuhan**
- Pakan berprotein tinggi dengan harga bersaing
- Informasi perbandingan nutrisi antar jenis pakan
- Komunitas sesama pembudidaya untuk bertukar pengalaman

**Literasi digital:** menengah–tinggi.

**Implikasi UX**
- Tabel perbandingan kandungan nutrisi produk
- Forum atau komunitas di dalam platform
- Notifikasi harga dan promo melalui aplikasi

---

#### Persona 5 — Admin / Operator Shrimp Loop

**Tim Shrimp Loop, 22–28 tahun — Banda Aceh**

Tim mahasiswa dan fresh graduate yang mengelola operasional platform: koordinasi penjemputan limbah, pengolahan produk, dan layanan pelanggan.

**Kebutuhan**
- Dashboard operasional yang informatif dan real-time
- Manajemen jadwal penjemputan limbah yang efisien
- Laporan produksi dan distribusi yang mudah dibaca

**Literasi digital:** tinggi.

---

## 5. Fitur Produk

### Prioritas Fitur (MoSCoW)

| Fitur | Prioritas | Phase |
|-------|-----------|-------|
| Waste Exchange | Must Have | 1 |
| Marketplace Produk | Must Have | 1 |
| Green Point (dasar) | Must Have | 1 |
| Beranda Edukatif + Maskot SHRIMY | Must Have | 1 |
| Konsultasi AI SHRIMY (widget beranda) | Must Have | 1 |
| Educational Hub (statis) | Should Have | 1 |
| Admin Dashboard | Must Have | 1 |
| Subscription Module | Should Have | 2 |
| Konsultasi AI SHRIMY (lanjutan: riwayat akun, eskalasi CS) | Should Have | 2 |
| Video Library | Should Have | 2 |
| Mobile App | Could Have | 3 |
| Komunitas / Forum | Won't Have (MVP) | 3 |

---

### 5.1 Waste Exchange (Bursa Limbah)

**Deskripsi**
Sistem dua arah yang memungkinkan pengolah seafood dan restoran mendaftarkan ketersediaan limbah udang, sementara operator Shrimp Loop menjadwalkan penjemputan dan memberikan kompensasi berupa uang tunai atau Green Point.

**Alur Pengguna (Happy Path)**
```
Pengguna membuka aplikasi
      │
      ▼
"Daftarkan Limbah"
      │
      ▼
Isi form: jenis limbah · estimasi berat · foto · waktu tersedia
      │
      ▼
Sistem menghitung estimasi harga secara otomatis
      │
      ▼
Operator mengonfirmasi dan menjadwalkan penjemputan
      │
      ▼
Notifikasi ke pengguna (H-1 dan H-0)
      │
      ▼
Penjemputan dilakukan → penimbangan aktual
      │
      ▼
Pembayaran ditransfer / Green Point dikreditkan
      │
      ▼
Riwayat transaksi tersimpan
```

**Acceptance Criteria**
- [ ] Pengguna dapat membuat listing limbah dengan maksimal 5 input field
- [ ] Unggah foto limbah (opsional, untuk estimasi kualitas)
- [ ] Estimasi harga otomatis tampil sebelum submit
- [ ] Harga final dihitung dari berat aktual saat penjemputan
- [ ] Notifikasi push/WhatsApp H-1 sebelum penjemputan
- [ ] Riwayat setoran beserta total nilai 30 hari terakhir
- [ ] Peta titik penjemputan untuk admin, dengan filter status
- [ ] Ekspor laporan penjemputan (CSV) untuk admin

**Komponen UI**
- Form listing berbentuk wizard bertahap
- Kartu listing aktif dengan badge status
- Kalender/timeline penjemputan
- Peta distribusi titik pengumpulan (admin)

**Business Rules**
- Setoran minimum: 2 kg per penjemputan
- Harga dasar: Rp 3.000–5.000/kg, bergantung kualitas dan jarak
- Pembayaran diselesaikan dalam 1×24 jam setelah penjemputan
- Listing dapat dibatalkan hingga 6 jam sebelum jadwal penjemputan

**Wireframe Konseptual**
```
┌─────────────────────────────────┐
│  ← WASTE EXCHANGE               │
│  ─────────────────────────────  │
│                                 │
│  Total Bulan Ini: Rp 87.500     │
│  Green Point: 240 pts           │
│  ─────────────────────────────  │
│                                 │
│  [+ Daftarkan Limbah Baru]      │
│                                 │
│  LISTING AKTIF                  │
│  ┌──────────────────────────┐   │
│  │ Kulit & Kepala Udang     │   │
│  │ Est. 15 kg · Rp 3.500/kg│   │
│  │ Selasa, 08.00 WIB       │   │
│  │ ● Terjadwal             │   │
│  │ [Detail]  [Batalkan]    │   │
│  └──────────────────────────┘   │
│                                 │
│  RIWAYAT SETORAN                │
│  Jun 20 · 12 kg · Rp 42.000    │
│  Jun 15 · 18 kg · Rp 63.000    │
│  Jun 08 · 9 kg · Rp 31.500     │
└─────────────────────────────────┘
```

---

### 5.2 Green Point System

**Deskripsi**
Sistem insentif non-tunai untuk pengguna aktif. Setiap kilogram limbah yang disetor, setiap pembelian produk, dan setiap aktivitas edukasi menghasilkan Green Point yang dapat ditukar dengan beragam reward.

**Mekanisme Perolehan Poin**

| Aktivitas | Poin |
|-----------|------|
| Setoran limbah | 10 pts/kg |
| Pembelian produk di marketplace | 1 pt per Rp 1.000 |
| Menyelesaikan kursus edukasi | 50–100 pts |
| Mengundang teman baru (referral) | 200 pts |
| Ulasan produk disertai foto | 25 pts |
| Check-in harian | 5 pts |

**Level Pengguna**

| Level | Nama | Threshold | Benefit |
|-------|------|-----------|---------|
| 1 | Newcomer | 0–499 pts | — |
| 2 | Green Member | 500–1.999 pts | Diskon 5% |
| 3 | Ocean Keeper | 2.000–4.999 pts | Diskon 10% + gratis ongkir |
| 4 | Coral Champion | 5.000+ pts | Diskon 15% + prioritas penjemputan |

**Katalog Reward**

| Reward | Harga Poin |
|--------|-----------|
| Diskon 10% untuk 1 transaksi | 500 pts |
| Gratis ongkir 1 pengiriman | 300 pts |
| 1 kg kitosan | 2.000 pts |
| 5 kg pakan ikan | 1.500 pts |
| Merchandise Shrimp Loop (totebag) | 1.000 pts |
| Sertifikat digital "Green Partner" | 800 pts |

**Acceptance Criteria**
- [ ] Dashboard poin dengan animasi angka saat poin bertambah
- [ ] Progress bar menuju level berikutnya
- [ ] Leaderboard komunitas bulanan (opt-in)
- [ ] Notifikasi saat mendekati threshold level (tercapai 80%)
- [ ] Katalog reward dengan stok real-time
- [ ] QR code untuk penukaran reward di titik fisik
- [ ] Riwayat perolehan dan penukaran poin

---

### 5.3 Subscription Module (Langganan Produk)

**Deskripsi**
Layanan berlangganan produk olahan limbah udang yang dikirimkan secara rutin — mingguan atau bulanan — ke alamat pengguna, dengan harga 15–20% lebih rendah dibanding harga eceran.

**Paket Langganan**

| Paket | Isi | Harga Normal | Harga Langganan | Hemat |
|-------|-----|-------------|-----------------|-------|
| Tambak Starter | 50 kg pakan ikan/bulan | Rp 425.000 | Rp 350.000 | 18% |
| Kebun Hijau | 20 L pupuk cair/bulan | Rp 220.000 | Rp 180.000 | 18% |
| Kitosan Basic | 5 kg kitosan/bulan | Rp 300.000 | Rp 250.000 | 17% |
| Ocean Pro | 50 kg pakan + 10 kg kitosan/bulan | Rp 710.000 | Rp 580.000 | 18% |
| Full Circle | Seluruh lini produk/bulan | Rp 1.100.000 | Rp 880.000 | 20% |

**Manajemen Langganan**
- Pilihan frekuensi: mingguan, dua mingguan, atau bulanan
- Tanggal pengiriman dapat diatur sesuai kebutuhan
- Langganan dapat dijeda hingga 2 bulan per tahun
- Dapat dibatalkan kapan saja, dengan notifikasi 7 hari sebelum periode berikutnya
- Perpanjangan otomatis dengan notifikasi H-3

**Acceptance Criteria**
- [ ] Wizard pemilihan paket dengan perbandingan fitur yang jelas
- [ ] Frekuensi dan tanggal pengiriman fleksibel
- [ ] Notifikasi H-3 dan H-1 sebelum setiap pengiriman
- [ ] Invoice digital otomatis per periode
- [ ] Tombol jeda/batal mudah ditemukan, tanpa dipersulit
- [ ] Riwayat pengiriman lengkap dengan status
- [ ] Opsi ubah alamat pengiriman per pesanan

---

### 5.4 Konsultasi AI SHRIMY & Educational Hub

**Deskripsi**
Pusat edukasi terintegrasi yang menggabungkan video tutorial, panduan teks terstruktur, dan layanan Konsultasi AI gratis 24 jam yang diperankan oleh maskot SHRIMY. Fitur ini menjawab kebutuhan pengguna yang baru mengenal pengolahan limbah udang — cukup bertanya dalam bahasa sehari-hari.

#### A. Educational Content Library

**Struktur Konten**

```
EDUCATIONAL HUB
├── Pengolahan Limbah Udang
│   ├── Membersihkan & Menyiapkan Cangkang Udang
│   ├── Proses Demineralisasi Tahap demi Tahap
│   ├── Deproteinisasi: Memisahkan Protein dari Kitin
│   ├── Deasetilasi: Mengubah Kitin Menjadi Kitosan
│   └── Produksi Pakan Ikan dari Limbah Udang
│
├── Penggunaan Produk
│   ├── Aplikasi Kitosan untuk Tanaman Cabai
│   ├── Dosis & Aplikasi Pupuk Organik Cair
│   ├── Formulasi Pakan Ikan yang Tepat
│   └── Tips Penyimpanan Produk
│
└── Budidaya Berkelanjutan
    ├── Manajemen Kualitas Air Tambak
    ├── Pencegahan Penyakit Udang
    └── Ekonomi Sirkular untuk Pemula
```

**Format Konten**
- Video tutorial berdurasi 3–10 menit
- Infografis visual untuk pengguna dengan literasi rendah
- Panduan PDF yang dapat diunduh
- Kuis interaktif untuk memvalidasi pemahaman

#### B. Konsultasi AI "SHRIMY"

SHRIMY adalah maskot sekaligus asisten AI Shrimp Loop — seekor udang ramah yang tubuhnya membentuk loop (spesifikasi visual dan animasi lengkap pada Design System §1.4). Persona percakapannya: ramah, sabar, membumi, berbahasa Indonesia informal yang mudah dipahami petambak dan petani, dengan jawaban ringkas (±120 kata).

**Wujud di antarmuka**
- Tombol melayang (FAB) dengan wajah SHRIMY dan badge "AI" di pojok kanan bawah, hadir di seluruh halaman
- Panel chat 380×540px dengan header gradient, gelembung pesan, typing indicator, dan suggestion chips pertanyaan populer
- Section khusus di beranda ("Punya pertanyaan? Tanya SHRIMY.") dengan contoh pertanyaan yang dapat diklik dan langsung membuka chat

**Landasan pengetahuan (grounding)**
Jawaban SHRIMY dibatasi pada basis pengetahuan platform agar akurat dan tidak mengarang:
- Proses produksi kitosan 4 tahap beserta parameter teknisnya (Lampiran A)
- Formula dan proses produksi pakan ikan (Lampiran B)
- Dosis aplikasi produk: kitosan 0,1–0,2% semprot daun; pupuk cair 10 ml/L air per minggu
- Aturan platform: setoran min. 2 kg, harga Rp 3.000–5.000/kg, 10 Green Point/kg, pembayaran 1×24 jam
- Untuk pertanyaan di luar cakupan atau kasus serius (mis. wabah penyakit tambak), SHRIMY mengarahkan ke tim melalui WhatsApp

**Kapabilitas**

| Kemampuan | Contoh Pertanyaan |
|-----------|------------------|
| Panduan pengolahan | "Bagaimana cara membuat pakan udang dari cangkang udang?" |
| Rekomendasi produk | "Produk apa yang cocok untuk tanaman cabai saya?" |
| Troubleshooting | "Udang saya mati mendadak, kenapa ya?" |
| Navigasi platform | "Bagaimana cara daftar jual limbah?" |
| Informasi pesanan | "Langganan saya kapan dikirim?" |
| Eskalasi | "Saya mau bicara dengan tim Shrimp Loop" |

**Persyaratan Teknis Konsultasi AI**
- Ditenagai Claude API dengan system prompt persona SHRIMY berbahasa Indonesia
- Waktu respons di bawah 3 detik
- Riwayat percakapan dipertahankan selama sesi (dikirim utuh di setiap permintaan); riwayat lintas sesi menyusul di Phase 2
- Eskalasi ke layanan pelanggan manusia dalam kurang dari 2 jam bila pertanyaan tidak terjawab
- Mendukung teks dan emoji
- Penanganan galat yang ramah: pesan fallback + arahan ke WhatsApp saat API gagal
- Bahasa Indonesia informal, tidak kaku

**Acceptance Criteria**
- [ ] Minimal 20 video tutorial tersedia saat peluncuran
- [ ] Widget SHRIMY (FAB + panel) tampil di seluruh halaman dan dapat dibuka dari section konsultasi beranda
- [ ] Suggestion chips minimal 3 pertanyaan populer di awal percakapan
- [ ] Konsultasi AI aktif 24/7 dengan uptime ≥ 99%
- [ ] Filter konten berdasarkan kategori dan tingkat kesulitan
- [ ] Pelacakan progres konten yang sudah ditonton
- [ ] Green Point diberikan setelah menyelesaikan konten edukasi
- [ ] Mode unduh untuk akses offline
- [ ] Rating konten (suka/tidak suka)

---

### 5.5 Marketplace Produk

**Deskripsi**
Toko digital untuk seluruh produk hasil olahan limbah udang. Pengguna dapat membeli satuan maupun paket, menggunakan Green Point sebagai potongan harga, dan melacak pengiriman secara real-time.

**Kategori Produk**

```
MARKETPLACE SHRIMP LOOP
│
├── Pakan Akuakultur
│   ├── Pakan Ikan Pelet (kemasan 1–50 kg)
│   ├── Pakan Udang Vaname Premium
│   ├── Pakan Kepiting / Rajungan
│   └── Suplemen Probiotik Akuakultur
│
├── Produk Pertanian
│   ├── Kitosan Murni (serbuk/larutan)
│   ├── Pupuk Organik Cair "GreenShrimp"
│   ├── Biostimulan Tanaman Hortikultura
│   └── Pelapis Benih Berbasis Kitosan
│
├── Bundle & Starter Kit
│   ├── Kit Pemula Tambak Udang
│   ├── Kit Pemula Kebun Organik
│   └── Kit Edukasi + Produk
│
└── B2B (Partai Besar)
    ├── Kitosan Industri (min. 10 kg)
    └── Pakan Bulk (min. 100 kg)
```

**Fitur Marketplace**

| Fitur | Deskripsi |
|-------|-----------|
| Pencarian & Filter | Filter berdasarkan kategori, harga, berat, rating |
| Detail Produk | Kandungan nutrisi, cara penggunaan, spesifikasi |
| Perbandingan Produk | Perbandingan berdampingan hingga 3 produk |
| Ulasan & Rating | Sistem bintang disertai komentar dan foto |
| Wishlist | Simpan produk favorit |
| Keranjang Belanja | Multi-item dengan perhitungan ongkir otomatis |
| Checkout | 5 langkah, pilihan pembayaran lengkap |
| Pelacakan Pesanan | Real-time dari pengemasan hingga tiba di tujuan |
| Green Point Discount | Poin dapat dipakai sebagai potongan saat checkout |
| Rekomendasi | Saran produk berdasarkan profil dan kebutuhan pengguna |

**Metode Pembayaran**
- Transfer bank (BCA, BNI, BRI, Mandiri)
- QRIS (seluruh dompet digital)
- GoPay, OVO, DANA, ShopeePay
- COD untuk area Banda Aceh
- Green Point, sebagian maupun seluruh transaksi

**Acceptance Criteria**
- [ ] Pencarian dengan saran otomatis (autocomplete)
- [ ] Halaman produk memuat gambar, deskripsi lengkap, dan tabel nutrisi
- [ ] Tambah ke keranjang tanpa wajib login (guest checkout opsional)
- [ ] Checkout dapat diselesaikan dalam waktu kurang dari 5 menit
- [ ] Konfirmasi pesanan via email dan WhatsApp
- [ ] Pelacakan status dengan milestone yang jelas
- [ ] Invoice digital yang dapat diunduh

---

### 5.6 Admin & Operations Dashboard

**Deskripsi**
Panel kendali internal bagi tim Shrimp Loop untuk mengelola keseluruhan operasional — dari koordinasi penjemputan limbah, manajemen produksi, dan distribusi, hingga analitik bisnis.

**Modul Admin**

**A. Waste Management**
- Daftar seluruh penjemputan terjadwal (tampilan peta dan daftar)
- Penugasan driver/kurir untuk setiap penjemputan
- Input berat aktual saat penjemputan yang memicu pembayaran otomatis
- Laporan bulanan volume limbah per wilayah

**B. Production Tracking**
- Pencatatan bahan baku masuk (limbah)
- Output produksi per batch (kitosan/pakan/pupuk)
- Pelacakan conversion rate: ton limbah menjadi kg produk
- Checklist quality control per batch

**C. Inventory Management**
- Stok produk jadi secara real-time
- Peringatan stok rendah dengan threshold yang dapat dikonfigurasi
- Riwayat pergerakan stok masuk dan keluar

**D. User Management**
- Verifikasi akun mitra baru
- Pengelolaan level Green Point
- Sistem tiket layanan pelanggan

**E. Analytics Dashboard**
- GMV harian, mingguan, dan bulanan
- Monthly Active Users (MAU)
- Produk terlaris
- Distribusi geografis pengguna
- Limbah terkumpul per wilayah (visualisasi peta)
- Dampak lingkungan: estimasi ton CO2 ekuivalen yang terhindarkan

### 5.7 Beranda Informatif & Edukatif

**Deskripsi**
Beranda bukan sekadar pintu masuk — ia adalah alat edukasi pertama. Pengunjung yang belum pernah mendengar kitosan harus pulang dengan tiga hal: memahami bahwa limbah udang bernilai, mengerti garis besar prosesnya, dan tahu langkah pertama untuk ikut serta. Struktur visual lengkap terdokumentasi pada Design System §12.1.

**Susunan Section (berurutan)**

| # | Section | Isi & Tujuan |
|---|---------|--------------|
| 1 | Hero + Maskot | Headline "Dari Limbah Menjadi Nilai", fakta pembuka (±12 ton limbah/hari), maskot SHRIMY beranimasi dengan speech bubble, CTA utama "Daftarkan Limbah" |
| 2 | Impact Counter | 4 angka dampak nyata (limbah terkumpul, kitosan, pengguna, CO₂e) dengan animasi count-up — membangun kepercayaan lewat data |
| 3 | Fact Strip "Tahukah Anda?" | 3 fakta edukatif pada kartu gelap: 40–60% udang jadi limbah, pasar kitosan >USD 6 M, pakan 60–70% biaya tambak |
| 4 | Cara Kerja | 3 langkah menutup lingkaran, tiap langkah menampilkan insentif Green Point |
| 5 | Edukasi Interaktif | Diagram 4 tahap produksi kitosan yang dapat diklik — panel detail berisi deskripsi, parameter teknis, dan progress bar |
| 6 | Aplikasi Produk | 4 kartu manfaat dengan dosis praktis: biostimulan, pakan akuakultur, pupuk cair, penjernih air |
| 7 | Konsultasi AI | Kartu gelap premium dengan SHRIMY + 3 contoh pertanyaan klik-able yang membuka chat |
| 8 | Testimoni | Cerita pengguna nyata sesuai persona (Bu Sarah, Pak Hasan, Pak Ridwan) |
| 9 | Footer + FAB SHRIMY | Navigasi lengkap; tombol konsultasi melayang di seluruh halaman |

**Acceptance Criteria**
- [ ] Counter dampak menghitung naik saat pertama kali masuk viewport (sekali saja)
- [ ] Fact strip menampilkan minimal 3 fakta edukatif dengan sumber yang dapat dipertanggungjawabkan
- [ ] Diagram proses kitosan interaktif: 4 tahap dapat diklik, panel detail dan progress bar berubah sesuai tahap
- [ ] Setiap kartu aplikasi produk mencantumkan dosis/cara pakai praktis, bukan hanya nama produk
- [ ] Contoh pertanyaan di section konsultasi langsung membuka chat SHRIMY dengan pertanyaan terisi
- [ ] Maskot SHRIMY tampil identik (satu master SVG) di navigasi, hero, section konsultasi, FAB, dan footer
- [ ] Seluruh animasi menghormati `prefers-reduced-motion`
- [ ] Semua angka dampak berasal dari data operasional nyata, diperbarui berkala

---

## 6. Arsitektur Informasi

### 6.1 Site Map

```
SHRIMP LOOP (Root)
│
├── BERANDA
│   ├── Hero + Maskot SHRIMY (CTA utama)
│   ├── Counter Dampak Real-time
│   │   ├── Total Limbah Terkumpul (ton)
│   │   ├── Kitosan Diproduksi
│   │   ├── Pengguna Aktif
│   │   └── CO₂e Terhindarkan
│   ├── Fact Strip "Tahukah Anda?"
│   ├── Cara Kerja (3 langkah)
│   ├── Edukasi Interaktif (proses kitosan)
│   ├── Aplikasi Produk (4 manfaat)
│   ├── Konsultasi AI SHRIMY
│   ├── Testimoni
│   └── Footer + FAB Konsultasi
│
├── WASTE EXCHANGE
│   ├── Ikhtisar & Panduan Singkat
│   ├── Form Daftarkan Limbah
│   ├── Listing Aktif Saya
│   ├── Jadwal Penjemputan
│   └── Riwayat Setoran
│
├── MARKETPLACE
│   ├── Beranda Marketplace
│   ├── Kategori Produk
│   │   ├── Pakan Akuakultur
│   │   ├── Produk Pertanian
│   │   └── Bundle & Starter Kit
│   ├── Halaman Detail Produk
│   ├── Keranjang Belanja
│   └── Riwayat Pesanan
│
├── LANGGANAN
│   ├── Pilih Paket Langganan
│   ├── Kelola Langganan Aktif
│   └── Riwayat Pengiriman
│
├── GREEN POINT
│   ├── Dashboard Poin & Level
│   ├── Cara Mendapat Poin
│   ├── Katalog Reward
│   ├── Tukar Poin
│   └── Leaderboard Komunitas
│
├── EDUKASI
│   ├── Beranda Edukasi
│   ├── Video Tutorial (per kategori)
│   ├── Panduan Pengolahan (PDF)
│   ├── SHRIMY — AI Chatbot
│   └── FAQ
│
└── PROFIL & AKUN
    ├── Data Pribadi
    ├── Lokasi & Alamat
    ├── Metode Pembayaran
    ├── Pengaturan Notifikasi
    └── Keluar
```

### 6.2 Struktur Navigasi

**Navigasi utama (bottom bar, mobile):**
```
[Home] [Limbah] [Belanja] [Poin] [Profil]
```

**Navigasi sekunder (drawer):**
```
Edukasi · Langganan · Layanan Pelanggan · Pengaturan
```

---

## 7. User Flow & Wireframe

### 7.1 Onboarding

```
Splash Screen (3 detik)
      │
      ▼
Pilih peran:
[Pengolah Seafood] [Petambak/Pembudidaya] [Petani] [Lainnya]
      │
      ▼
Isi data dasar:
Nama · Nomor HP · Lokasi (GPS atau pilih kecamatan)
      │
      ▼
Verifikasi OTP via WhatsApp
      │
      ▼
Tur singkat fitur (3 slide)
      │
      ▼
Beranda (dipersonalisasi sesuai peran)
```

### 7.2 Waste Exchange

```
Ketuk "Daftarkan Limbah"
      │
      ▼
Langkah 1 — Jenis limbah
[Kulit Udang] [Kepala Udang] [Cangkang] [Campuran]
      │
      ▼
Langkah 2 — Estimasi berat
Slider / input angka (kg)
      │
      ▼
Langkah 3 — Foto limbah (opsional, dapat dilewati)
      │
      ▼
Langkah 4 — Waktu tersedia
Kalender + time picker
      │
      ▼
Pratinjau & estimasi harga
"Estimasi penerimaan: Rp 42.000 – Rp 56.000"
      │
      ▼
[Kirim Listing]
      │
      ▼
Konfirmasi + nomor tiket
Notifikasi WhatsApp terkirim
```

### 7.3 Checkout

```
Keranjang belanja (tinjau item)
      │
      ▼
Pilih alamat pengiriman
      │
      ▼
Pilih metode pengiriman + estimasi tiba
      │
      ▼
Gunakan Green Point? (slider)
      │
      ▼
Pilih metode pembayaran
      │
      ▼
Tinjauan akhir pesanan
      │
      ▼
Konfirmasi pembayaran
      │
      ▼
Halaman sukses + opsi bagikan ke WhatsApp
```

---

## 8. Persyaratan Teknis

### 8.1 Platform & Kompatibilitas

| Platform | Target |
|----------|--------|
| Web (browser) | Chrome, Firefox, Safari, Edge versi terbaru |
| Mobile web (responsif) | iOS Safari, Chrome Android |
| PWA | Android & iOS (add to home screen) |
| Aplikasi native | Android (Phase 2), iOS (Phase 3) |

**Dukungan Perangkat Minimum**
- Android 8.0+ (rilis 2017 ke atas)
- iOS 13+ (iPhone 6S ke atas)
- RAM minimum 2 GB
- Penyimpanan 100 MB untuk aplikasi, tanpa konten offline

### 8.2 Rekomendasi Tech Stack

| Layer | Teknologi | Pertimbangan |
|-------|-----------|--------------|
| **Frontend** | Next.js 15 + TypeScript | SSR/SSG, ramah SEO, ekosistem matang |
| **Styling** | Tailwind CSS + design tokens kustom | Konsistensi visual, pengembangan cepat |
| **Animasi** | Framer Motion | Micro-interaction yang halus |
| **State Management** | Zustand + React Query | Ringan, mendukung optimistic update |
| **Backend** | Node.js + Express.js / NestJS | Familiar bagi tim, ekosistem lengkap |
| **Database** | PostgreSQL (utama) + Redis (cache) | Data relasional + performa |
| **File Storage** | Cloudflare R2 | Ekonomis, CDN terintegrasi |
| **Maps** | Leaflet.js + OpenStreetMap | Gratis, lebih menjaga privasi |
| **Payment** | Midtrans | Mencakup seluruh metode pembayaran Indonesia |
| **Notifikasi** | Firebase Cloud Messaging + WA Business API | Push + WhatsApp |
| **AI Chatbot** | Claude API (Anthropic) | Pemahaman bahasa Indonesia yang baik |
| **Analytics** | PostHog (self-hosted) | Privacy-first, gratis untuk startup |
| **Auth** | JWT + refresh token | Stateless, mudah diskalakan |
| **Hosting** | Vercel (FE) + Railway/Render (BE) | Terjangkau untuk tahap awal, deployment mudah |

### 8.3 Non-Functional Requirements

| Parameter | Target | Alasan |
|-----------|--------|--------|
| Page load time (3G) | < 3 detik | Mayoritas pengguna berada di area rural |
| Page load time (LTE) | < 1,5 detik | Standar modern |
| Uptime SLA | 99,5% | Maksimum downtime 3,6 jam/bulan |
| Responsif mobile | 100% halaman | Audiens mobile-first |
| Aksesibilitas | WCAG 2.1 Level A | Inklusif bagi semua pengguna |
| Keamanan | HTTPS, OWASP Top 10 | Perlindungan data pengguna dan transaksi |
| Pengguna bersamaan maksimum | 500 (peluncuran) | Skala awal Aceh |
| Dukungan offline | Halaman edukasi | Koneksi tidak stabil di daerah |
| Backup data | Otomatis harian | Keamanan data |

### 8.4 Integrasi Pihak Ketiga

| Layanan | Penyedia | Fungsi |
|---------|----------|--------|
| Payment gateway | Midtrans | Seluruh metode pembayaran |
| Notifikasi WhatsApp | WA Business API (Wati.io) | OTP, notifikasi penjemputan dan pengiriman |
| Push notification | Firebase Cloud Messaging | Peringatan poin, promo, status pesanan |
| Maps & geocoding | Nominatim (OpenStreetMap) | Peta titik penjemputan, estimasi jarak |
| Logistik | JNE, J&T, dan kurir lokal | Pengiriman produk |
| AI chatbot | Claude API | Chatbot SHRIMY |
| Email | SendGrid / Resend | Konfirmasi, invoice |
| Video hosting | Cloudflare Stream | Video tutorial edukasi |

### 8.5 Persyaratan Keamanan

- [ ] HTTPS wajib di seluruh endpoint
- [ ] Autentikasi JWT dengan refresh token (kedaluwarsa 7 hari)
- [ ] Rate limiting pada seluruh endpoint API (100 request/menit/pengguna)
- [ ] Sanitasi input dan pencegahan SQL injection
- [ ] Enkripsi data sensitif (nomor rekening, data pribadi)
- [ ] Audit kepatuhan OWASP Top 10 sebelum peluncuran
- [ ] Kebijakan privasi dan ketentuan layanan sesuai UU PDP

---

## 9. Desain & UX

### 9.1 Prinsip Desain Utama

| Prinsip | Implementasi |
|---------|-------------|
| **Clarity** | Satu aksi utama per halaman, label yang jelas |
| **Efficiency** | Tugas utama selesai dalam kurang dari 3 ketukan/klik |
| **Trust** | Visual yang matang, data transparan, ulasan nyata |
| **Inclusivity** | Font minimum 16px, ikon disertai label, bahasa informal |
| **Delight** | Micro-animation dan umpan balik visual yang menyenangkan |

### 9.2 Design System

Spesifikasi lengkap tersedia dalam dokumen **SHRIMP_LOOP_DESIGN.md**, mencakup:

- Palet warna terinspirasi warna alami udang
- Maskot resmi SHRIMY: anatomi, aturan penggunaan, dan animasi karakter
- Sistem tipografi
- Pustaka komponen — termasuk chat widget Konsultasi AI dan diagram proses interaktif
- Sistem spacing dan grid
- Ikon dan panduan fotografi
- Prinsip motion dan animasi
- Spesifikasi dark mode
- Template beranda edukatif

### 9.3 Aksesibilitas

- [ ] Ukuran font minimum: 16px untuk body, 14px untuk caption
- [ ] Rasio kontras minimum: 4,5:1 untuk teks normal, 3:1 untuk teks besar
- [ ] Touch target minimum: 44×44 px
- [ ] Alt text pada seluruh gambar
- [ ] Label ARIA pada seluruh elemen interaktif
- [ ] Navigasi keyboard (web)
- [ ] Menghormati preferensi `prefers-reduced-motion`
- [ ] Kompatibel dengan screen reader

### 9.4 Responsive Breakpoints

| Breakpoint | Ukuran | Layout |
|------------|--------|--------|
| Mobile S | 320px | 1 kolom, navigasi bawah |
| Mobile L | 375–428px | 1 kolom, navigasi bawah |
| Tablet | 768–1024px | 2 kolom, navigasi samping |
| Desktop | 1280px+ | 3+ kolom, navigasi atas |

---

## 10. Success Metrics & KPI

### 10.1 Impact Metrics

| Metrik | Baseline | Target 6 Bulan | Target 12 Bulan |
|--------|----------|----------------|-----------------|
| Limbah udang terkumpul | 0 | 5 ton | 25 ton |
| Kitosan diproduksi | 0 | 500 kg | 2.500 kg |
| Pakan ikan diproduksi | 0 | 2.000 kg | 10.000 kg |
| CO2 ekuivalen terhindarkan | 0 | 2 ton | 10 ton |
| Mitra restoran/seafood aktif | 0 | 50 | 200 |
| Petambak/petani aktif | 0 | 150 | 750 |

### 10.2 Business Metrics

| Metrik | Target 3 Bulan | Target 6 Bulan | Target 12 Bulan |
|--------|----------------|----------------|-----------------|
| Pengguna terdaftar | 200 | 500 | 2.000 |
| Monthly Active Users | 100 | 300 | 1.200 |
| GMV (Gross Merchandise Value) | Rp 15 juta | Rp 50 juta | Rp 300 juta |
| Langganan aktif | 20 | 75 | 350 |
| Nilai pesanan rata-rata | Rp 150.000 | Rp 180.000 | Rp 200.000 |
| Pendapatan bersih | Rp 3 juta | Rp 10 juta | Rp 60 juta |

### 10.3 Product & Engagement Metrics

| Metrik | Target |
|--------|--------|
| Rating app store | ≥ 4,5 / 5,0 |
| NPS (Net Promoter Score) | ≥ 50 |
| Retensi D30 | ≥ 35% |
| Churn langganan | ≤ 10% per bulan |
| Tingkat penukaran Green Point | ≥ 40% |
| Penyelesaian tutorial | ≥ 60% |
| Waktu respons layanan pelanggan | ≤ 2 jam |
| Bug kritikal | 0 per bulan |

### 10.4 Metode Pengukuran

- **Analytics:** PostHog + Google Analytics 4
- **Survei pelanggan:** NPS bulanan melalui WhatsApp
- **Laporan operasional:** ekspor dari dashboard admin
- **Dampak lingkungan:** perhitungan manual per batch produksi

---

## 11. Roadmap

### Phase 1 — MVP Launch (Bulan 1–3)

**Sasaran:** validasi konsep dan onboarding mitra awal di Banda Aceh.

| Fitur | Status |
|-------|--------|
| Waste Exchange (listing + penjemputan) | Dalam pengembangan |
| Marketplace (pakan + kitosan dasar) | Dalam pengembangan |
| Green Point System (dasar) | Dalam pengembangan |
| Beranda edukatif + maskot SHRIMY | Prototipe selesai |
| Widget Konsultasi AI SHRIMY (Claude API) | Prototipe selesai |
| Landing page + edukasi statis | Dalam pengembangan |
| Admin Dashboard v1 | Dalam pengembangan |
| Alur onboarding | Dalam pengembangan |
| Integrasi Midtrans | Dalam pengembangan |
| Notifikasi WhatsApp | Dalam pengembangan |

**Milestone:** 50 mitra aktif · 2 ton limbah terkumpul · 100 pengguna

### Phase 2 — Feature Complete (Bulan 4–6)

**Sasaran:** retensi pengguna, pertumbuhan pendapatan, dan edukasi berskala luas.

| Fitur | Status |
|-------|--------|
| Subscription Module | Direncanakan |
| Konsultasi AI SHRIMY lanjutan (riwayat akun, eskalasi CS otomatis) | Direncanakan |
| Pustaka video tutorial (20+ video) | Direncanakan |
| Sistem ulasan & rating | Direncanakan |
| Leaderboard Green Point | Direncanakan |
| B2B Marketplace (partai besar) | Direncanakan |
| Push notification (FCM) | Direncanakan |
| Analytics Dashboard v2 | Direncanakan |

**Milestone:** 300 MAU · GMV Rp 50 juta · 5 ton limbah/bulan

### Phase 3 — Scale & Expand (Bulan 7–12)

**Sasaran:** ekspansi wilayah, kemitraan institusi, dan keberlanjutan.

| Inisiatif | Status |
|-----------|--------|
| Aplikasi mobile Android | Direncanakan |
| Ekspansi ke kabupaten lain (Aceh Besar, Pidie, Langsa) | Direncanakan |
| Kemitraan dengan Dinas Kelautan & Pertanian Aceh | Direncanakan |
| Program sertifikasi pengolah limbah | Direncanakan |
| API integrasi sistem tambak pintar | Direncanakan |
| Riset kolaborasi universitas (kitosan) | Direncanakan |
| Modul B2G (Business to Government) | Direncanakan |

**Milestone:** 2.000 pengguna · GMV Rp 300 juta/tahun · 3 kabupaten

---

## 12. Risiko & Mitigasi

| # | Risiko | Dampak | Probabilitas | Strategi Mitigasi |
|---|--------|--------|--------------|-------------------|
| 1 | Adopsi rendah akibat literasi digital terbatas | Tinggi | Tinggi | Onboarding offline, pendampingan langsung, jalur layanan via WhatsApp |
| 2 | Pasokan limbah udang tidak konsisten | Tinggi | Menengah | Kontrak reguler minimal 12 bulan dengan restoran dan industri besar |
| 3 | Kualitas produk tidak konsisten | Tinggi | Menengah | SOP produksi yang ketat, checklist QC per batch, uji laboratorium berkala |
| 4 | Kompetisi dari pemasok pakan/pupuk yang sudah ada | Menengah | Rendah | Keunggulan harga, narasi keberlanjutan, program loyalitas Green Point |
| 5 | Keterbatasan infrastruktur logistik di Aceh | Menengah | Menengah | Kolaborasi kurir lokal, sistem pickup point, jadwal tetap |
| 6 | Keamanan data pengguna | Tinggi | Rendah | HTTPS, enkripsi, audit keamanan berkala, kepatuhan UU PDP |
| 7 | Keterbatasan modal awal | Tinggi | Menengah | Bootstrap + hibah UTU, pitching ke investor dampak, hibah lingkungan |
| 8 | Regulasi pangan dan produk organik | Menengah | Rendah | Konsultasi BPOM dan Kementan sejak dini, sertifikasi bertahap |

---

## 13. Lampiran

### A. Proses Produksi Kitosan (Ringkasan Teknis)

```
CANGKANG UDANG
      │
      ▼
1. PERSIAPAN
   Cuci → keringkan → haluskan menjadi serbuk
      │
      ▼
2. DEMINERALISASI
   Serbuk + HCl 2N → 50°C, 2 jam, 150 rpm → cuci hingga pH 7 → keringkan (80°C, 24 jam)
   Hasil: serbuk bebas mineral (kaya kitin)
      │
      ▼
3. DEPROTEINISASI
   + NaOH 2N → 50°C, 2 jam, 150 rpm → cuci hingga pH 7 → keringkan (80°C, 24 jam)
   Hasil: kitin murni
      │
      ▼
4. DEASETILASI
   Kitin + NaOH 12,5N → 100°C, 5 jam, 150 rpm → filtrasi → cuci → keringkan (80°C, 24 jam)
   Hasil: KITOSAN (serbuk)
```

**Estimasi rendemen:** 10 kg cangkang udang kering menghasilkan ±1,5–2,5 kg kitosan.

### B. Proses Produksi Pakan Ikan dari Limbah Udang

**Formula pakan (per 100 kg):**

| Bahan | Persentase | Berat |
|-------|-----------|-------|
| Tepung limbah udang | 30% | 30 kg |
| Tepung ikan | 25% | 25 kg |
| Dedak halus | 20% | 20 kg |
| Tepung kedelai | 15% | 15 kg |
| Tepung jagung | 5% | 5 kg |
| Tepung tapioka | 3% | 3 kg |
| Vitamin & mineral | 2% | 2 kg |

**Tahapan produksi:**

1. **Pengumpulan** — kumpulkan dan bersihkan limbah dari sumber
2. **Perebusan** — ±30 menit untuk sterilisasi dan pelunakan
3. **Pengeringan** — solar dryer 60–70°C selama 8–12 jam
4. **Penggilingan** — giling menjadi tepung halus
5. **Pencampuran** — sesuai formula pada tabel di atas
6. **Pelletizing** — cetak menggunakan mesin pelet
7. **Pengeringan pelet** — jemur atau oven hingga kadar air rendah
8. **Pengemasan** — kemas dalam kantong AquaFeed berlabel Shrimp Loop

### C. Referensi

- Konsep circular economy — Ellen MacArthur Foundation
- Proses produksi kitosan — literatur kimia biopolimer
- Regulasi — UU No. 7 Tahun 2016 tentang Perlindungan Nelayan
- Data perikanan Aceh — BPS Aceh dan Dinas Kelautan Provinsi Aceh

---

*Dokumen ini merupakan bagian dari proposal kompetisi UTU Awards 2026.*
*Shrimp Loop — Marketplace Digital Berbasis Circular Economy*
*Universitas Teuku Umar · Aceh, Indonesia*

**Versi 1.1 · Juli 2026 · Status: Draft Final**

*Riwayat perubahan: v1.1 menambahkan fitur Beranda Informatif & Edukatif (§5.7), spesifikasi Konsultasi AI SHRIMY dengan maskot dan grounding pengetahuan (§5.4), serta pembaruan arsitektur informasi dan roadmap.*
