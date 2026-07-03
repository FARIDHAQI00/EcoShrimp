# SHRIMY 2.0 — Spesifikasi Detail Maskot Realistis-3D
## Shrimp Loop · Mascot Specification

**Versi 1.0 — Juli 2026**
Dokumen induk: `SHRIMY_MASCOT_PLAN.md` · Design System §1.4

---

## 1. Identitas Karakter

| Atribut | Ketetapan |
|---------|-----------|
| Nama | SHRIMY |
| Spesies referensi | Udang vaname (*Litopenaeus vannamei*) — komoditas utama tambak Aceh |
| Warna tubuh | Warna udang matang (jingga-merah brand), bukan abu-abu udang mentah — konsisten dengan filosofi warna "transformasi melalui panas" |
| Kepribadian | Ramah, sabar, ingin tahu, sedikit jenaka; pemandu, bukan badut |
| Ciri khas | Tubuh melengkung membentuk loop + daun hijau kecil di punggung (simbol sirkular) |
| Gaya | Stylized-realistic 3D: anatomi nyata, proporsi menggemaskan |

---

## 2. Proporsi & Anatomi

### 2.1 Proporsi Global

```
Tinggi total karakter = 100%
├── Kepala + karapas ...... 40%   (dominan — sumber keramahan)
├── Abdomen (6 segmen) .... 45%   (melengkung membentuk loop)
└── Ekor kipas ............ 15%

Mata = 22% lebar kepala per mata (besar, ekspresif)
Lengkung tubuh: abdomen menutup ±300° dari lingkaran penuh
```

### 2.2 Anatomi Wajib (agar dikenali sebagai vaname)

| Bagian | Spesifikasi | Kompromi stilasi |
|--------|-------------|------------------|
| **Rostrum** | Tonjolan moncong di antara mata, bergerigi halus | Diperpendek 50%, ujung membulat — tidak runcing tajam |
| **Karapas** | Cangkang kepala-dada mulus satu bagian, sedikit tekstur granular | Tekstur subtle saja (bump 10%) |
| **Mata** | Sepasang mata pada tangkai (eyestalk) | Tangkai pendek (15% tinggi kepala); bola mata besar putih + iris gelap gaya karakter — bukan mata majemuk hitam penuh |
| **Antena panjang** | 2 antena utama sangat panjang, melengkung anggun | Panjang 1,2× tinggi tubuh, meruncing halus |
| **Antenula** | 2 antena pendek di dekat rostrum | Disederhanakan jadi 2 kurva kecil |
| **Segmen abdomen** | 6 segmen (somit) yang saling menumpuk seperti genteng | Tepat 6, dengan celah gelap (ambient occlusion) antar segmen |
| **Pleopod** | Kaki renang kecil di bawah abdomen | 4 pasang, digambar sebagai sirip lembut membulat |
| **Pereiopod** | Kaki jalan di bawah karapas | 3 pasang tampak, kurus dengan sendi halus |
| **Telson + Uropod** | Ekor kipas 5 lobus (1 telson tengah + 4 uropod) | Tepat 5 lobus, membuka seperti kipas |
| **Daun aksen** | Daun Eco Green di punggung karapas | Elemen brand, bukan anatomi — tetap wajib |

---

## 3. Material & Shading (Blender / PBR)

### 3.1 Shader Cangkang — "Cooked Shell"

| Parameter | Nilai | Efek |
|-----------|-------|------|
| Base color | Gradient sepanjang tubuh: #E8631A (kepala) → #F4874A (tengah) → #C93B1B (ekor) | Warna brand |
| Subsurface scattering | Weight 0.18 · Radius warm (R 1.0, G 0.35, B 0.15) · Warna #FFB27D | Kesan cangkang "hidup" yang meneruskan cahaya di tepian |
| Roughness | 0.35 pada punggung → 0.55 pada perut | Punggung glossy, perut lebih matte |
| Specular / IOR | IOR 1.45 | Kilap basah khas hasil rebus |
| Clearcoat | 0.25, roughness 0.15 | Lapisan licin tipis di atas cangkang |
| Bump/normal | Noise granular halus, strength 0.10; garis pertumbuhan melintang di tiap segmen, strength 0.15 | Realisme tanpa kasar |
| Tepi segmen | Warna tepi menuju #A83016; AO antar segmen kekuatan 0.6 | Kedalaman antar somit |

### 3.2 Shader Perut — "Underbelly"

Base #F9C9A6 → #FDEEE7, roughness 0.6, SSS 0.25 — perut lebih pucat dan lembut, seperti udang sungguhan.

### 3.3 Mata

- Sklera: putih dengan gradasi halus ke #FDEEE7 di tepi, glossy (roughness 0.08)
- Iris/pupil: #2D1409 dengan ring dalam #7A3E28 tipis
- Catchlight: 1 besar kiri-atas + 1 kecil kanan-bawah (dibake pada tekstur agar konsisten di semua render)
- Tangkai mata: material cangkang, gradasi ke #F4874A

### 3.4 Antena, Kaki, Ekor

- Antena: material cangkang lebih translusen (SSS 0.3), meruncing; ujung menyala halus saat rim light
- Kaki renang: semi-translusen #F4874A alpha 90%, tepi glow SSS
- Ekor kipas: paling translusen (SSS 0.4) — cahaya tembus dari belakang membuat lobus "menyala" hangat, ini *money shot* karakter

### 3.5 Daun Aksen

Base #1E7B4A, urat #7BE3A3 emboss halus, roughness 0.45, SSS hijau tipis 0.12.

---

## 4. Lighting Studio Standar

Semua render — statis maupun animasi — wajib memakai setup ini agar setiap aset terlihat identik.

| Lampu | Posisi | Warna | Intensitas relatif |
|-------|--------|-------|--------------------|
| Key light (area) | 35° kiri-atas depan | 5200K sedikit hangat | 100% |
| Fill light (area besar) | Kanan depan, rendah | 6500K netral-sejuk | 25% |
| Rim light | Belakang kanan-atas | #F4874A oranye | 60% — garis cahaya di punggung & ekor |
| Bounce | Bawah | #FDEEE7 | 12% — mengangkat bayangan perut |

- Latar render: transparan (PNG/WebP alpha); bayangan kontak lembut oval `rgba(122,62,40,0.25)` blur tinggi, dibake terpisah agar bisa diatur di web
- Kamera default: 35mm, sudut ¾ kiri, sedikit dari bawah (memuliakan karakter)

---

## 5. Turunan Pseudo-3D SVG (untuk ikon kecil)

Meniru hasil render dengan teknik vektor — dipakai di ≤ 80px di mana file render terlalu boros.

| Teknik | Implementasi SVG |
|--------|------------------|
| Volume tubuh | `radialGradient` per segmen: pusat #F4874A → tepi #C93B1B, fokus gradient digeser ke arah key light (kiri-atas) |
| Highlight specular | Elips putih opacity 35% + blur 1px di punggung tiap segmen, posisi konsisten kiri-atas |
| AO antar segmen | Path sabit #A83016 opacity 40% di pertemuan segmen |
| SSS tepi | Stroke luar 2px #FFB27D opacity 30% pada ekor dan antena |
| Bayangan kontak | Elips `rgba(122,62,40,.22)` dengan `feGaussianBlur` |
| Mata | Dua lingkaran highlight (besar + kecil) meniru catchlight render |

Aturan: arah cahaya SVG **harus** sama dengan lighting studio (kiri-atas) — jangan sampai ikon dan render tampak disinari dari arah berbeda.

---

## 6. Perpustakaan Ekspresi & Pose

### 6.1 Ekspresi (6 wajib)

| Kode | Ekspresi | Mata | Mulut | Antena | Dipakai di |
|------|----------|------|-------|--------|------------|
| EXP-01 | Default ramah | Terbuka penuh | Senyum lembut | Tegak santai | Hampir semua |
| EXP-02 | Senang | Menyipit bahagia (kurva ∪) | Senyum lebar terbuka | Naik | Sukses transaksi, poin bertambah |
| EXP-03 | Berpikir | Melirik atas | Miring kecil | Satu menekuk | Chat "typing", loading |
| EXP-04 | Menjelaskan | Terbuka, alis naik | Terbuka bicara | Satu menunjuk | Edukasi, tooltip |
| EXP-05 | Menyesal | Turun sayu | Kurva datar | Terkulai | Error, halaman kosong |
| EXP-06 | Tidur | Tertutup + zZ | Mungil | Terkulai penuh | Maintenance, offline |

### 6.2 Pose (5 wajib)

| Kode | Pose | Dipakai di |
|------|------|------------|
| POS-01 | Idle melengkung loop (kanonik) | Hero, logo, avatar |
| POS-02 | Melambai satu kaki depan | Onboarding, sapaan chat |
| POS-03 | Memegang daun ke depan | Green Point, konten lingkungan |
| POS-04 | Menunjuk ke samping | Mengarahkan ke CTA/fitur |
| POS-05 | Membawa kotak kecil "limbah" | Waste Exchange |

Kombinasi ekspresi × pose harus dirender dari rig yang sama — dilarang menggambar manual per kasus.

---

## 7. Spesifikasi Animasi

Timing mewarisi v1 agar kepribadian gerak tidak berubah; kini diterapkan pada rig 3D.

| Kode | Siklus | Gerak | Durasi | Catatan rig |
|------|--------|-------|--------|-------------|
| ANM-01 | Idle-breathe | Tubuh mengembang 2%, naik-turun 16px ekuivalen, goyang ±1.5° | 4.5s loop | Pengganti `floaty`; tambah gerak sekunder antena mengikuti (delay 0.2s) |
| ANM-02 | Blink | Kelopak menutup dari atas | Kedip di detik 4.3–4.5 dari siklus 4.6s | Kadang kedip dobel (variasi 20%) |
| ANM-03 | Antenna-sway | Kurva antena bergelombang dari pangkal ke ujung | 3.4s / 3.8s (kiri/kanan beda fase) | Simulasi fisika lembut, damping tinggi |
| ANM-04 | Tail-flick | Kipas ekor membuka 8° lalu rileks | 3s loop | Lobus membuka berurutan 60ms antar lobus |
| ANM-05 | Wave | POS-02: kaki depan melambai 2× | 1.6s sekali jalan | Trigger saat chat dibuka |
| ANM-06 | Swim-burst (opsional) | Abdomen menekuk cepat, karakter maju melengkung | 0.9s | Easter egg klik maskot |

Semua animasi berhenti pada frame idle statis bila `prefers-reduced-motion` aktif.

---

## 8. Format Aset & Budget Performa

| Aset | Format | Ukuran render | Budget file |
|------|--------|---------------|-------------|
| Master | `.blend` (+ koleksi tekstur) | — | — (repo aset, bukan web) |
| Hero idle beranimasi | WebP animasi 24fps (fallback PNG statis) | 760×760 @2x | ≤ 220 KB |
| Render statis per ekspresi/pose | WebP + PNG @1x @2x @3x | 380–1140px | ≤ 60 KB per @2x |
| Ikon kecil | SVG pseudo-3D (§5) | vektor | ≤ 15 KB |
| Real-time (Phase 3) | GLB draco-compressed | — | ≤ 1,5 MB |
| Turntable acuan QA | PNG 8 sudut (45°) | 1024px | internal |

**Aturan performa**
- Total aset maskot yang termuat di satu halaman ≤ 350 KB
- Hero maskot tidak boleh menjadi elemen LCP-blocking: `fetchpriority` diatur, dimensi dideklarasikan, `loading="eager"` hanya di hero
- Maskot di bawah lipatan selalu lazy-load

---

## 9. Aturan Penggunaan & Larangan

**Wajib**
- Semua aset diturunkan dari `shrimy-master.blend`; turntable QA sebagai acuan kemiripan
- Arah cahaya kiri-atas konsisten di seluruh format, termasuk SVG
- Ukuran tampil minimum render: 48px; di bawahnya gunakan SVG pseudo-3D; di bawah 32px gunakan wordmark
- Clear space: setinggi mata SHRIMY di semua sisi

**Dilarang**
- Menggambar ulang manual, tracing, atau membuat varian di luar rig
- Mengubah warna keluar palet brand, menambah outline, atau memutar > ±10° dari pose render
- Memakai ekspresi/pose yang tidak ada dalam perpustakaan §6 tanpa pembaruan spesifikasi
- Menempatkan render di atas latar yang membunuh rim light (oranye pekat penuh) tanpa penyesuaian bayangan

---

## 10. Checklist Serah Terima Aset

- [ ] `shrimy-master.blend` + tekstur (repo aset)
- [ ] Turntable 8 sudut (acuan QA)
- [ ] 6 ekspresi × pose kanonik (WebP/PNG @1–3x)
- [ ] 5 pose × ekspresi default (WebP/PNG @1–3x)
- [ ] ANM-01 s.d. ANM-05 (WebP animasi + frame statis fallback)
- [ ] `shrimy-core-v2.svg` (pseudo-3D) — pengganti langsung `#shrimy-core`
- [ ] Bayangan kontak terpisah (PNG alpha)
- [ ] Halaman dokumentasi penggunaan di Design System §1.4 diperbarui

---

*Spesifikasi ini adalah lampiran teknis dari `SHRIMY_MASCOT_PLAN.md` dan menjadi rujukan §1.4 Design System Shrimp Loop.*
