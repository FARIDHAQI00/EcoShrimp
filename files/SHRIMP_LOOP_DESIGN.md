# Shrimp Loop
## Design System — Visual Identity & Component Guidelines

**Versi 2.0 — Juli 2026**
UTU Awards · Universitas Teuku Umar

---

> Identitas visual Shrimp Loop berangkat dari satu referensi sederhana: warna udang yang baru matang — gradasi jingga hangat menuju merah bata yang dalam. Sejak v2.0, warna hangat itu dibingkai dalam bahasa permukaan **glassmorphism**: panel kaca buram yang mengambang di atas latar bercahaya, seperti memandang tambak melalui kaca yang tertimpa senja. Hasilnya mewah namun tenang — cukup bersahaja untuk dipercaya petambak dan petani, cukup memukau untuk berdiri di hadapan juri dan investor.

---

## Daftar Isi

1. [Brand Identity](#1-brand-identity)
2. [Color Palette](#2-color-palette)
3. [Typography](#3-typography)
4. [Spacing & Grid](#4-spacing--grid)
5. [Elevation & Shadow](#5-elevation--shadow)
6. [Border & Radius](#6-border--radius)
7. [Iconography](#7-iconography)
8. [Imagery & Photography](#8-imagery--photography)
9. [Component Library](#9-component-library)
10. [Motion & Animation](#10-motion--animation)
11. [Dark Mode](#11-dark-mode)
12. [Page Templates](#12-page-templates)
13. [Dos & Don'ts](#13-dos--donts)

---

## 1. Brand Identity

### 1.1 Kepribadian Brand

| Dimensi | Nilai |
|---------|-------|
| **Voice** | Hangat, jujur, dan membumi — seperti rekan petani yang cerdas |
| **Tone** | Informal namun percaya diri; tidak menggurui, tidak korporat |
| **Feel** | Premium yang lahir dari alam — kekayaan alami, bukan kemewahan artifisial |
| **Karakter** | Inovatif, berkelanjutan, inklusif, berdampak nyata |

### 1.2 Kata Kunci Brand

```
Circular  ·  Natural  ·  Premium  ·  Glass  ·  Trustworthy  ·  Bold  ·  Clean
```

### 1.3 Penggunaan Logo

**Logo utama:** wordmark "Shrimp Loop" dengan ikon loop/infinity yang dibentuk dari siluet udang.

**Varian logo**
- Full color (utama) — di atas latar terang atau putih
- Reversed (putih) — di atas latar gelap atau gradient
- Monochrome — untuk aplikasi satu warna
- Icon only — untuk favicon, app icon, dan watermark

**Clear space**
Ruang kosong minimum di setiap sisi setara dengan tinggi huruf "S" pada wordmark.

**Ukuran minimum**
- Digital: lebar 120px
- Cetak: lebar 30mm

### 1.4 Maskot Resmi — SHRIMY

> **Catatan v2:** SHRIMY sedang dikembangkan menjadi versi realistis-3D. Rencana pengerjaan: `SHRIMY_MASCOT_PLAN.md` · Spesifikasi detail: `SHRIMY_MASCOT_SPEC.md`. Spesifikasi di bawah ini adalah versi flat (v1) yang berlaku hingga v2 dirilis.

SHRIMY adalah maskot Shrimp Loop: seekor udang ramah yang tubuhnya melengkung membentuk loop — pengingat visual bahwa di ekosistem ini tidak ada yang berakhir sebagai sampah. SHRIMY berperan sebagai pemandu edukasi sekaligus wajah dari fitur Konsultasi AI.

**Prinsip identik:** maskot digambar satu kali sebagai master SVG (`<symbol id="shrimy-core">`) dan seluruh kemunculannya di antarmuka wajib memakai `<use href="#shrimy-core">`. Dengan begitu SHRIMY dijamin identik piksel demi piksel di logo, hero, chat, hingga footer — tidak ada versi gambar ulang.

**Anatomi & Spesifikasi Warna**

| Elemen | Spesifikasi |
|--------|-------------|
| Tubuh (loop) | Melengkung hampir menutup lingkaran; gradient cangkang `linear-gradient(135°, #E8631A → #F4874A → #C93B1B)` |
| Garis segmen | Stroke #A83016, 4px, rounded, opacity 50% — tiga garis mengikuti lengkung tubuh |
| Kepala | Lingkaran gradient `#F4874A → #E8631A` dengan highlight atas #F9A66C (opacity 55%) |
| Mata | Sklera putih r13, pupil #2D1409 r6.5, kilau putih kecil r2.2 |
| Pipi | Elips #FDEEE7, opacity 80% |
| Senyum | Kurva stroke #2D1409, 4.5px, rounded |
| Antena | Dua kurva stroke #C93B1B 5px dengan ujung bulat #F4874A |
| Ekor | Kipas dua lapis: gradient cangkang + #F4874A |
| Kaki renang | Tiga goresan pendek #C93B1B, 4.5px, rounded |
| Aksen daun | Daun kecil #1E7B4A dengan urat #FDF8F5 di punggung — simbol nilai sirkular |

**Titik Kemunculan Wajib**

| Konteks | Ukuran | Catatan |
|---------|--------|---------|
| Logo navigasi & footer | 38px | Berdampingan dengan wordmark |
| Hero beranda | 280–380px | Di dalam halo cahaya, dengan speech bubble |
| Section Konsultasi AI | 240–280px | Sisi kanan kartu gelap |
| Tombol chat melayang (FAB) | 40px di dalam tombol 64px | Badge "AI" hijau di pojok |
| Avatar header chat | 32px | Lingkaran putih |
| Empty state & onboarding | 120–200px | Ekspresi tetap sama |

**Aturan Penggunaan**

- Ukuran tampil minimum: 32px; di bawah itu gunakan wordmark saja
- Clear space minimum: setinggi mata SHRIMY di semua sisi
- Jangan mengubah warna di luar palet brand, menambah outline, mencerminkan, atau memutar melebihi ±10°
- Jangan menggambar ulang, mengubah proporsi, atau membuat varian ekspresi tanpa pembaruan master SVG
- Di atas latar gelap SHRIMY tetap full color — kontras gradient-nya sudah dirancang untuk kedua mode

**Animasi Karakter**

Seluruh animasi berjalan bersamaan sehingga SHRIMY terasa hidup namun tenang — tidak ada gerakan yang lebih cepat dari napas manusia.

| Animasi | Target | Properti | Durasi | Easing |
|---------|--------|----------|--------|--------|
| `floaty` | Seluruh maskot | translateY 0 → −16px, rotate −1.5° → 1.5° | 4.5s, infinite | ease-in-out |
| `blink` | Grup mata | scaleY 1 → 0.08 (kedip di 95–97% siklus) | 4.6s, infinite | linear |
| `swayL` / `swayR` | Antena kiri/kanan | rotate ±4–7°, origin pangkal antena | 3.4s / 3.8s | ease-in-out |
| `tailFlick` | Ekor | rotate 0 → 8°, origin pangkal ekor | 3s, infinite | ease-in-out |
| `legWiggle` | Kaki renang | translateX 0 → 2px | 1.8s, infinite | ease-in-out |
| `haloPulse` | Halo latar | scale 1 → 1.06 | 5s, infinite | ease-in-out |

```css
@keyframes floaty   { 0%,100% { transform: translateY(0) rotate(-1.5deg); }
                      50%     { transform: translateY(-16px) rotate(1.5deg); } }
@keyframes blink    { 0%,92%,100% { transform: scaleY(1); }
                      95%,97%     { transform: scaleY(.08); } }
@keyframes swayL    { 0%,100% { transform: rotate(-4deg); } 50% { transform: rotate(7deg); } }
@keyframes swayR    { 0%,100% { transform: rotate(5deg); }  50% { transform: rotate(-6deg); } }
@keyframes tailFlick{ 0%,100% { transform: rotate(0); }     50% { transform: rotate(8deg); } }
@keyframes legWiggle{ 0%,100% { transform: translateX(0); } 50% { transform: translateX(2px); } }
@keyframes haloPulse{ 0%,100% { transform: translate(-50%,-50%) scale(1); }
                      50%     { transform: translate(-50%,-50%) scale(1.06); } }
```

Halo di belakang maskot: `radial-gradient(circle, rgba(244,135,74,.30) 0%, rgba(244,135,74,.10) 45%, transparent 70%)`. Seluruh animasi maskot tunduk pada `prefers-reduced-motion`.

---

## 2. Color Palette

### 2.1 Filosofi Warna

Palet Shrimp Loop mengikuti perjalanan udang itu sendiri: dari cangkang mentah berwarna abu keputihan, bertransformasi melalui panas menjadi jingga kemerahan yang kaya dan matang. Sebuah metafora visual bagi transformasi limbah menjadi nilai.

### 2.2 Warna Primer

#### Shrimp Red — warna utama

```
HEX:  #C93B1B
RGB:  201, 59, 27
HSL:  13°, 76%, 45%
```

**Penggunaan:** primary CTA button, tag aktif, alert penting, link highlight.
**Hindari:** sebagai latar halaman penuh, atau untuk teks di atas latar gelap.

#### Shrimp Orange — warna sekunder

```
HEX:  #E8631A
RGB:  232, 99, 26
HSL:  22°, 80%, 51%
```

**Penggunaan:** secondary button, badge, isian ikon, hover state, awal gradient.
**Hindari:** pada teks panjang — kontrasnya kurang untuk kenyamanan membaca.

#### Coral Glow — aksen hangat

```
HEX:  #F4874A
RGB:  244, 135, 74
HSL:  26°, 89%, 62%
```

**Penggunaan:** titik tengah gradient, aksen kartu, ikon Green Point, ilustrasi.
**Hindari:** sebagai warna teks utama.

#### Pale Shrimp — tone lembut

```
HEX:  #FDEEE7
RGB:  253, 238, 231
HSL:  19°, 92%, 95%
```

**Penggunaan:** highlight latar kartu, latar tag, pemisah section yang halus.
**Hindari:** sebagai latar seluruh halaman — terasa monoton.

### 2.3 Warna Netral

#### Deep Ember — latar gelap premium

```
HEX:  #1C0D07
RGB:  28, 13, 7
HSL:  15°, 60%, 7%
```

**Penggunaan:** latar dark mode, hero section gelap, kartu premium.

#### Aged Mahogany — teks utama

```
HEX:  #2D1409
RGB:  45, 20, 9
HSL:  16°, 67%, 11%
```

**Penggunaan:** body text, heading gelap, teks high-emphasis.

#### Burnt Sienna — teks sekunder

```
HEX:  #7A3E28
RGB:  122, 62, 40
HSL:  16°, 51%, 32%
```

**Penggunaan:** teks sekunder, subtitle, label, caption.

#### Shell Sand — teks tersier / placeholder

```
HEX:  #B88573
RGB:  184, 133, 115
HSL:  15°, 31%, 59%
```

**Penggunaan:** placeholder, disabled state, pemisah dekoratif.

#### Ocean Mist — latar utama

```
HEX:  #FDF8F5
RGB:  253, 248, 245
HSL:  20°, 67%, 98%
```

**Penggunaan:** latar utama, kartu default, latar input field.

#### Pure White

```
HEX:  #FFFFFF
RGB:  255, 255, 255
```

**Penggunaan:** permukaan kartu, latar modal, elemen yang bertumpuk.

### 2.4 Warna Semantik

#### Success — Eco Green

```
HEX:  #1E7B4A
RGB:  30, 123, 74
```

**Penggunaan:** transaksi berhasil, konfirmasi, badge "tersedia", Green Point positif.

#### Warning — Harvest Gold

```
HEX:  #D4860F
RGB:  212, 134, 15
```

**Penggunaan:** peringatan, stok hampir habis, kondisi yang perlu perhatian.

#### Error — Danger Red

```
HEX:  #B91C1C
RGB:  185, 28, 28
```

**Penggunaan:** error form, transaksi gagal, validasi negatif.
*Catatan: berbeda dari Shrimp Red — warna ini merah murni, tanpa nuansa oranye.*

#### Info — Deep Sea Blue

```
HEX:  #1565A8
RGB:  21, 101, 168
```

**Penggunaan:** informasi, tooltip, panduan, status "diproses".

### 2.5 Sistem Gradient

#### Gradient primer — "Sunset Shrimp"

```css
background: linear-gradient(135deg, #C93B1B 0%, #E8631A 50%, #F4874A 100%);
```

**Penggunaan:** latar hero section, CTA button premium, aksen pemisah section.

#### Gradient sekunder — "Ocean Ember"

```css
background: linear-gradient(180deg, #1C0D07 0%, #2D1409 60%, #7A3E28 100%);
```

**Penggunaan:** dark hero, kartu premium, navigasi dark mode.

#### Gradient tersier — "Coastal Warmth"

```css
background: linear-gradient(135deg, #FDEEE7 0%, #FDF8F5 100%);
```

**Penggunaan:** latar section yang halus, highlight kartu, layar onboarding.

#### Gradient Green Point

```css
background: linear-gradient(135deg, #1E7B4A 0%, #2DA058 100%);
```

**Penggunaan:** kartu Green Point, badge poin, section dampak lingkungan.

### 2.6 Color Tokens (CSS Variables)

```css
:root {
  /* Brand Primary */
  --color-primary:         #C93B1B;
  --color-primary-hover:   #A83016;
  --color-primary-light:   #FDEEE7;
  --color-secondary:       #E8631A;
  --color-secondary-hover: #C75416;
  --color-accent:          #F4874A;

  /* Neutrals */
  --color-bg-main:         #FDF8F5;
  --color-bg-card:         #FFFFFF;
  --color-bg-dark:         #1C0D07;
  --color-text-primary:    #2D1409;
  --color-text-secondary:  #7A3E28;
  --color-text-muted:      #B88573;
  --color-border:          #EDD8CF;
  --color-divider:         #F5E5DD;

  /* Semantic */
  --color-success:         #1E7B4A;
  --color-warning:         #D4860F;
  --color-error:           #B91C1C;
  --color-info:            #1565A8;

  /* Gradients */
  --gradient-primary:      linear-gradient(135deg, #C93B1B 0%, #E8631A 50%, #F4874A 100%);
  --gradient-dark:         linear-gradient(180deg, #1C0D07 0%, #2D1409 100%);
  --gradient-warm:         linear-gradient(135deg, #FDEEE7 0%, #FDF8F5 100%);
}
```

### 2.7 Token Glassmorphism

Kaca Shrimp Loop selalu **kaca hangat**: putih susu dengan rona krem, border cahaya, dan bayangan warm-tinted — bukan kaca abu-abu dingin ala template.

```css
:root {
  /* Permukaan kaca — tiga tingkat kepekatan */
  --glass-bg-strong:   rgba(255, 255, 255, 0.72);  /* Konten utama, teks panjang */
  --glass-bg:          rgba(255, 255, 255, 0.55);  /* Kartu standar */
  --glass-bg-subtle:   rgba(255, 255, 255, 0.35);  /* Dekorasi, chip, latar sekunder */
  --glass-bg-warm:     rgba(253, 238, 231, 0.50);  /* Kaca bernuansa Pale Shrimp */
  --glass-bg-dark:     rgba(28, 13, 7, 0.55);      /* Kaca gelap (hero, dark mode) */

  /* Border & kilau */
  --glass-border:        rgba(255, 255, 255, 0.65);
  --glass-border-soft:   rgba(255, 255, 255, 0.40);
  --glass-border-dark:   rgba(244, 135, 74, 0.28);
  --glass-highlight:     linear-gradient(120deg, rgba(255,255,255,.75) 0%, rgba(255,255,255,0) 45%);

  /* Tingkat blur */
  --glass-blur-sm:   8px;   /* Chip, badge */
  --glass-blur-md:  16px;   /* Kartu */
  --glass-blur-lg:  24px;   /* Navigasi, panel */
  --glass-blur-xl:  40px;   /* Modal, hero panel */

  /* Bayangan kaca: drop hangat + garis cahaya dalam di tepi atas */
  --glass-shadow:      0 8px 32px rgba(201, 59, 27, 0.10),
                       inset 0 1px 0 rgba(255, 255, 255, 0.60);
  --glass-shadow-lg:   0 16px 48px rgba(201, 59, 27, 0.14),
                       inset 0 1px 0 rgba(255, 255, 255, 0.70);
}
```

**Resep dasar permukaan kaca:**

```css
.glass {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur-md)) saturate(160%);
  -webkit-backdrop-filter: blur(var(--glass-blur-md)) saturate(160%);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
}

/* Fallback bila backdrop-filter tidak didukung */
@supports not (backdrop-filter: blur(1px)) {
  .glass { background: rgba(255, 255, 255, 0.92); }
}
```

---

## 3. Typography

### 3.1 Alasan Pemilihan Font

**Display: Playfair Display (serif)**
Menghadirkan kesan premium sekaligus organik — mengingatkan pada tipografi produk gourmet. Serif humanistiknya berkarakter kuat tanpa terasa kaku.

**Body: Plus Jakarta Sans (sans-serif)**
Modern, bersih, dan sangat terbaca pada ukuran kecil. Dirancang oleh desainer Indonesia — pilihan yang relevan secara konteks.

**Mono: JetBrains Mono (monospace)**
Untuk angka, data, dan informasi teknis.

### 3.2 Type Scale

```
Display XL   →  Playfair Display  ·  56px / 64px  ·  Bold (700)
Display L    →  Playfair Display  ·  44px / 52px  ·  Bold (700)
Display M    →  Playfair Display  ·  36px / 44px  ·  SemiBold (600)
Display S    →  Playfair Display  ·  28px / 36px  ·  SemiBold (600)

Heading 1    →  Plus Jakarta Sans ·  24px / 32px  ·  Bold (700)
Heading 2    →  Plus Jakarta Sans ·  20px / 28px  ·  SemiBold (600)
Heading 3    →  Plus Jakarta Sans ·  18px / 26px  ·  SemiBold (600)
Heading 4    →  Plus Jakarta Sans ·  16px / 24px  ·  Medium (500)

Body Large   →  Plus Jakarta Sans ·  18px / 28px  ·  Regular (400)
Body         →  Plus Jakarta Sans ·  16px / 26px  ·  Regular (400)
Body Small   →  Plus Jakarta Sans ·  14px / 22px  ·  Regular (400)

Label        →  Plus Jakarta Sans ·  14px / 20px  ·  Medium (500)
Caption      →  Plus Jakarta Sans ·  12px / 18px  ·  Regular (400)
Overline     →  Plus Jakarta Sans ·  11px / 16px  ·  SemiBold (600) · LS: 0.1em

Data/Number  →  JetBrains Mono   ·  16px / 24px  ·  Regular (400)
```

### 3.3 CSS Typography Variables

```css
:root {
  /* Font Families */
  --font-display:  'Playfair Display', Georgia, serif;
  --font-body:     'Plus Jakarta Sans', system-ui, sans-serif;
  --font-mono:     'JetBrains Mono', 'Courier New', monospace;

  /* Font Sizes */
  --text-display-xl:  3.5rem;    /* 56px */
  --text-display-l:   2.75rem;   /* 44px */
  --text-display-m:   2.25rem;   /* 36px */
  --text-display-s:   1.75rem;   /* 28px */
  --text-h1:          1.5rem;    /* 24px */
  --text-h2:          1.25rem;   /* 20px */
  --text-h3:          1.125rem;  /* 18px */
  --text-h4:          1rem;      /* 16px */
  --text-body-lg:     1.125rem;  /* 18px */
  --text-body:        1rem;      /* 16px */
  --text-body-sm:     0.875rem;  /* 14px */
  --text-label:       0.875rem;  /* 14px */
  --text-caption:     0.75rem;   /* 12px */
  --text-overline:    0.6875rem; /* 11px */

  /* Line Heights */
  --lh-tight:    1.2;
  --lh-snug:     1.4;
  --lh-normal:   1.6;
  --lh-relaxed:  1.75;
  --lh-loose:    2;
}
```

### 3.4 Aturan Penggunaan Tipografi

| Elemen | Font | Ukuran | Weight | Warna |
|--------|------|--------|--------|-------|
| Hero headline | Playfair Display | Display XL | Bold | White / Deep Ember |
| Judul section | Playfair Display | Display S | SemiBold | Aged Mahogany |
| Judul halaman | Plus Jakarta Sans | H1 | Bold | Aged Mahogany |
| Judul kartu | Plus Jakarta Sans | H3 | SemiBold | Aged Mahogany |
| Body text | Plus Jakarta Sans | Body | Regular | Aged Mahogany |
| Deskripsi | Plus Jakarta Sans | Body Small | Regular | Burnt Sienna |
| CTA button | Plus Jakarta Sans | Label | SemiBold | White |
| Harga | JetBrains Mono | H2 | Bold | Primary |
| Caption/label | Plus Jakarta Sans | Caption | Regular | Shell Sand |
| Overline tag | Plus Jakarta Sans | Overline | SemiBold | Secondary |

---

## 4. Spacing & Grid

### 4.1 Skala Spacing (Basis 8px)

```
space-0.5  →   4px   (micro gap)
space-1    →   8px   (tight gap, inner padding kecil)
space-2    →  16px   (jarak antarelemen, padding kecil)
space-3    →  24px   (jarak antar komponen, padding sedang)
space-4    →  32px   (jarak section, padding besar)
space-5    →  40px   (pemisah section)
space-6    →  48px   (section mayor)
space-8    →  64px   (section halaman besar)
space-10   →  80px   (padding hero)
space-12   →  96px   (jeda section)
space-16   → 128px   (pengubah tinggi hero)
```

### 4.2 Sistem Grid

**Mobile (320–767px)**
- Kolom: 4 · Gutter: 16px · Margin: 16px · Lebar konten maksimum: 100%

**Tablet (768–1279px)**
- Kolom: 8 · Gutter: 24px · Margin: 32px

**Desktop (1280px+)**
- Kolom: 12 · Gutter: 32px · Margin: auto (tengah) · Lebar konten maksimum: 1280px

```css
:root {
  --container-sm:   640px;
  --container-md:   768px;
  --container-lg:  1024px;
  --container-xl:  1280px;
  --container-2xl: 1536px;

  --gutter-mobile:  16px;
  --gutter-tablet:  24px;
  --gutter-desktop: 32px;
}
```

### 4.3 Konvensi Spacing Komponen

| Konteks | Spacing |
|---------|---------|
| Padding button (horizontal) | 24px |
| Padding button (vertikal) | 12px (normal), 16px (large) |
| Padding internal kartu | 24px |
| Padding internal kartu (kecil) | 16px |
| Padding input field | 12px 16px |
| Padding section (vertikal) | 64–96px |
| Tinggi navigasi (mobile) | 56px (atas), 64px (bawah) |
| Tinggi navigasi (desktop) | 72px |
| Padding internal modal | 32px |

---

## 5. Elevation & Shadow

### 5.1 Skala Shadow

```css
:root {
  /* Warm-tinted shadows (selaras brand) */
  --shadow-xs:   0 1px 2px rgba(201, 59, 27, 0.06);
  --shadow-sm:   0 2px 8px rgba(201, 59, 27, 0.08), 0 1px 3px rgba(201, 59, 27, 0.06);
  --shadow-md:   0 4px 16px rgba(201, 59, 27, 0.10), 0 2px 6px rgba(201, 59, 27, 0.07);
  --shadow-lg:   0 8px 32px rgba(201, 59, 27, 0.12), 0 4px 12px rgba(201, 59, 27, 0.08);
  --shadow-xl:   0 16px 48px rgba(201, 59, 27, 0.14), 0 8px 24px rgba(201, 59, 27, 0.10);
  --shadow-2xl:  0 24px 64px rgba(201, 59, 27, 0.18), 0 12px 32px rgba(201, 59, 27, 0.12);

  /* Glow untuk elemen premium */
  --glow-primary:  0 0 24px rgba(232, 99, 26, 0.35);
  --glow-green:    0 0 24px rgba(30, 123, 74, 0.35);
  --glow-gold:     0 0 24px rgba(212, 134, 15, 0.35);
}
```

### 5.2 Tingkat Elevasi

| Level | Shadow | Use Case |
|-------|--------|----------|
| 0 (Flat) | none | Elemen latar, disabled |
| 1 (Resting) | shadow-xs | Kartu default, input |
| 2 (Raised) | shadow-sm | Hover kartu, chip |
| 3 (Floating) | shadow-md | Dropdown, tooltip |
| 4 (Overlay) | shadow-lg | Modal, dialog |
| 5 (Premium) | shadow-xl | Feature card, elemen hero |
| 6 (Maximum) | shadow-2xl | Sticky nav saat scroll, side panel |

### 5.3 Permukaan Kaca (Glass Surfaces)

Glassmorphism di Shrimp Loop bukan efek tempelan — ia adalah sistem permukaan dengan aturan ketat agar hasilnya mewah, terbaca, dan cepat.

**Prinsip inti**

1. **Kaca butuh cahaya di belakangnya.** Panel kaca hanya boleh diletakkan di atas latar ambient bercahaya (§5.4), foto, atau gradient — di atas latar putih polos kaca tidak terlihat dan hanya menurunkan kontras.
2. **Tiga kepekatan, tiga peran.** `glass-bg-strong` untuk konten dan teks panjang · `glass-bg` untuk kartu standar · `glass-bg-subtle` hanya untuk dekorasi dan chip. Teks paragraf dilarang di atas kaca subtle.
3. **Maksimal dua lapis.** Kaca di atas kaca diperbolehkan satu kali (mis. chip di atas kartu). Tiga lapis membuat buram, berat, dan murahan.
4. **Tepi atas selalu bercahaya.** Garis `inset 0 1px 0 rgba(255,255,255,.6)` adalah tanda tangan kaca kita — meniru kilau tepi kaca sungguhan.
5. **Bayangan tetap hangat.** Kaca memakai drop shadow warm-tinted yang sama dengan sistem lama; jangan beralih ke bayangan abu-abu.
6. **Radius besar.** Permukaan kaca minimal `radius-lg` (16px); kaca bersudut tajam terasa seperti jendela Windows lama.
7. **Kontras teks diaudit.** Teks utama di kaca wajib `--color-text-primary` dan tetap lolos rasio 4,5:1 terhadap latar terburuk di belakang kaca.

**Hierarki penggunaan**

| Tingkat | Permukaan | Blur | Contoh |
|---------|-----------|------|--------|
| Ambient | Latar bercahaya (§5.4) | — | Body halaman |
| Kaca 1 | `glass-bg` / `glass-bg-strong` | 16–24px | Kartu, navigasi, panel |
| Kaca 2 | `glass-bg-subtle` | 8px | Chip, badge, tab di dalam kartu |
| Padat | `--color-bg-card` solid | — | Tabel data padat, invoice, konten cetak |

**Aturan performa**

- Maksimal ±6 elemen ber-`backdrop-filter` terlihat bersamaan dalam satu viewport
- Elemen kaca yang dianimasikan hanya boleh menganimasikan `transform`/`opacity` — jangan menganimasikan nilai blur
- Daftar panjang (grid produk 20+ kartu) memakai kaca hanya pada kontainer, bukan pada tiap kartu

### 5.4 Latar Ambient — "Coastal Light"

Panggung yang membuat kaca hidup: latar Ocean Mist dengan blob cahaya lembut dari palet brand, statis atau bergerak sangat lambat.

```css
.bg-ambient {
  background:
    radial-gradient(720px 480px at 12% 8%,  rgba(244, 135, 74, 0.30), transparent 65%),
    radial-gradient(640px 420px at 88% 18%, rgba(201, 59, 27, 0.16),  transparent 60%),
    radial-gradient(560px 400px at 78% 86%, rgba(30, 123, 74, 0.10),  transparent 60%),
    radial-gradient(480px 360px at 8% 90%,  rgba(212, 134, 15, 0.10), transparent 60%),
    var(--color-bg-main);
}
/* Varian gelap: blob yang sama di atas Deep Ember, opacity dinaikkan ~20% */
```

- Blob boleh beranimasi drift sangat lambat (60–90s per siklus, translate ≤ 40px) — nyaris tak disadari, cukup untuk membuat kaca "hidup"
- Jangan pernah memakai lebih dari 4 blob; jangan memakai warna di luar palet

---

## 6. Border & Radius

### 6.1 Skala Border Radius

```css
:root {
  --radius-xs:   4px;    /* Tag, badge kecil */
  --radius-sm:   8px;    /* Button kecil, chip */
  --radius-md:  12px;    /* Input field, kartu kecil */
  --radius-lg:  16px;    /* Kartu standar */
  --radius-xl:  24px;    /* Feature card, modal */
  --radius-2xl: 32px;    /* Hero card, panel besar */
  --radius-full: 9999px; /* Pill button, avatar, badge */
}
```

### 6.2 Gaya Border

```css
:root {
  --border-width-thin: 1px;
  --border-width-medium: 1.5px;
  --border-width-thick: 2px;

  --border-color-default:  #EDD8CF;  /* Border hangat yang halus */
  --border-color-strong:   #D4A898;  /* Border penegasan */
  --border-color-brand:    #E8631A;  /* Border aksen brand */
  --border-color-focus:    #C93B1B;  /* Focus ring */
}
```

---

## 7. Iconography

### 7.1 Pustaka Ikon

**Utama:** Lucide Icons — open-source, bersih, konsisten.
**Pelengkap:** ikon kustom untuk konsep khas Shrimp Loop.

### 7.2 Set Ikon Kustom

| Nama | Use Case |
|------|----------|
| shrimp-loop | Logo mark, ikon brand |
| circular-flow | Konsep circular economy |
| green-point | Reward Green Point |
| processing | Pengolahan limbah |
| shrimy-bot | AI Chatbot SHRIMY |
| waste-box | Waste Exchange |
| chitosan | Produk kitosan |
| aquafeed | Pakan akuakultur |

### 7.3 Aturan Ukuran Ikon

| Konteks | Ukuran |
|---------|--------|
| Sebaris dengan teks (body) | 16px |
| Ikon button | 20px |
| Ikon navigasi | 24px |
| Ikon fitur pada kartu | 32px |
| Ikon ilustrasi section | 48–64px |
| Ikon fitur hero | 80–96px |

### 7.4 Aturan Warna Ikon

- Default: `--color-text-secondary` (Burnt Sienna)
- Aktif/terpilih: `--color-primary` (Shrimp Red)
- Di atas latar gelap: putih
- Konteks peringatan: `--color-warning` (Harvest Gold)
- Konteks sukses: `--color-success` (Eco Green)

---

## 8. Imagery & Photography

### 8.1 Panduan Gaya Fotografi

**Mood:** natural, indah apa adanya, cahaya hangat, autentik.

**Karakteristik foto Shrimp Loop**
- **Pencahayaan:** golden hour, cahaya alami yang hangat — hindari flash yang dingin
- **Color grade:** dominasi warm tone, sedikit desaturasi pada bayangan
- **Subjek:** produk autentik — cangkang udang asli, panen tambak, tanaman — bukan stock photo generik
- **Manusia:** utamakan foto petambak dan petani Aceh yang sebenarnya, bukan model
- **Sudut:** ground level atau eye level; hindari overhead kecuali untuk food styling

### 8.2 Fotografi Produk

**Kitosan**
- Latar: slate gelap atau kayu natural
- Pencahayaan: side-light untuk menonjolkan tekstur serbuk
- Properti: sendok ukur, daun hijau segar

**Pakan Ikan**
- Latar: kayu terang, air tenang
- Sudut: sedikit top-down untuk memperlihatkan bentuk pelet
- Properti: tangan petambak, wadah bambu atau anyaman

**Pupuk Organik**
- Latar: tanah cokelat yang kaya, tanaman hijau segar
- Lifestyle: tangan petani menuang ke tanaman
- Warna: kontras hijau-cokelat yang hidup

### 8.3 Perlakuan Gambar

**Overlay pada hero:**
```css
/* Overlay gelap hangat untuk teks di atas foto */
background: linear-gradient(
  to bottom,
  rgba(28, 13, 7, 0.0) 0%,
  rgba(28, 13, 7, 0.3) 40%,
  rgba(28, 13, 7, 0.8) 100%
);
```

**Gambar pada kartu**
- Rasio aspek: 16:9 (landscape) atau 4:3 (kartu default)
- Selalu gunakan `object-fit: cover`
- Vignette hangat yang halus pada tepian

### 8.4 Gaya Ilustrasi & Grafis

**Gaya:** flat illustration dengan detail organik — bukan kartun, bukan photo-realistic.

**Karakteristik**
- Bentuk organik, tidak terlalu geometris kaku
- Warna dari palet brand — dominan orange/red dengan aksen hijau
- Ketebalan garis konsisten: 1,5–2px
- Sedikit gradient pada isian

**Penggunaan ilustrasi**
- Empty state (halaman kosong)
- Layar onboarding
- Halaman error
- Diagram proses (alur produksi kitosan)
- Header konten edukasi

---

## 9. Component Library

### 9.1 Buttons

#### Primary Button — "Shrimp Red"

```css
.btn-primary {
  background: var(--color-primary);           /* #C93B1B */
  color: #FFFFFF;
  font-family: var(--font-body);
  font-size: var(--text-label);               /* 14px */
  font-weight: 600;
  padding: 12px 24px;
  border-radius: var(--radius-full);          /* Bentuk pill */
  border: none;
  box-shadow: var(--shadow-sm);
  transition: all 0.2s ease;
  cursor: pointer;
}

.btn-primary:hover {
  background: var(--color-primary-hover);    /* #A83016 */
  box-shadow: var(--shadow-md), var(--glow-primary);
  transform: translateY(-1px);
}

.btn-primary:active {
  transform: translateY(0);
  box-shadow: var(--shadow-xs);
}

.btn-primary:disabled {
  background: var(--color-text-muted);
  box-shadow: none;
  cursor: not-allowed;
  transform: none;
}
```

**Varian ukuran**

| Ukuran | Padding | Font Size | Min Width |
|--------|---------|-----------|-----------|
| Small (sm) | 8px 16px | 12px | 80px |
| Default | 12px 24px | 14px | 120px |
| Large (lg) | 16px 32px | 16px | 160px |

#### Secondary Button — Outlined

```css
.btn-secondary {
  background: transparent;
  color: var(--color-primary);
  border: 1.5px solid var(--color-primary);
  padding: 11px 23px;   /* -1px untuk kompensasi border */
  border-radius: var(--radius-full);
  font-weight: 600;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background: var(--color-primary-light);
  border-color: var(--color-primary-hover);
}
```

#### Ghost Button

```css
.btn-ghost {
  background: transparent;
  color: var(--color-text-secondary);
  border: none;
  padding: 12px 20px;
  font-weight: 500;
}

.btn-ghost:hover {
  background: var(--color-divider);
  color: var(--color-text-primary);
}
```

#### Gradient Premium Button

```css
.btn-gradient {
  background: var(--gradient-primary);
  color: #FFFFFF;
  border: none;
  border-radius: var(--radius-full);
  font-weight: 700;
  letter-spacing: 0.01em;
  box-shadow: var(--shadow-lg), var(--glow-primary);
  transition: all 0.3s ease;
}

.btn-gradient:hover {
  box-shadow: var(--shadow-xl), 0 0 32px rgba(232, 99, 26, 0.5);
  transform: translateY(-2px) scale(1.01);
}
```

#### Glass Button — untuk latar foto & gradient

Dipakai di atas hero bergambar, kartu gelap, atau latar ambient — CTA sekunder yang mewah tanpa merebut fokus dari CTA utama.

```css
.btn-glass {
  background: var(--glass-bg-subtle);
  backdrop-filter: blur(var(--glass-blur-sm)) saturate(150%);
  color: var(--color-text-primary);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-full);
  font-weight: 600;
  box-shadow: var(--glass-shadow);
  transition: all 0.2s ease;
}

.btn-glass:hover {
  background: var(--glass-bg);
  border-color: rgba(255, 255, 255, 0.85);
  transform: translateY(-1px);
}

/* Di atas latar gelap: teks putih, border oranye kaca */
.btn-glass--dark {
  background: rgba(255, 255, 255, 0.08);
  color: #FFFFFF;
  border-color: var(--glass-border-dark);
}
```

*Aturan: primary CTA tetap solid/gradient (kaca tidak pernah menjadi CTA utama — konversi butuh kontras).*

---

### 9.2 Cards

#### Standard Product Card

```
┌──────────────────────────────┐
│                              │  ← border-radius: 16px
│   [IMAGE 16:9]               │  ← aspect-ratio: 16/9
│                              │
│  ┌─ OVERLINE TAG ─┐          │  ← "Pakan Akuakultur"
│  └────────────────┘          │     font: 11px overline
│                              │
│  Pakan Ikan Pelet Premium    │  ← H3 Playfair Display
│  AquaFeed 10kg               │
│                              │
│  Tinggi protein 42%          │  ← Body Small, text-muted
│  Cocok untuk udang & bandeng │
│                              │
│  ─────────────────────────── │  ← divider
│                              │
│  +100 pts (Green Point)      │  ← Reward Green Point
│                              │
│  Rp 185.000    [Beli]        │  ← Harga + CTA
└──────────────────────────────┘
```

**Spesifikasi CSS (v2 — permukaan kaca):**
```css
.card-product {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur-md)) saturate(160%);
  border-radius: var(--radius-lg);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.card-product:hover {
  box-shadow: var(--glass-shadow-lg);
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.85);
}

/* Area teks panjang di dalam kartu memakai lapisan strong agar terbaca */
.card-product .card-body { background: var(--glass-bg-strong); }

/* Grid besar (20+ kartu): kaca hanya di kontainer, kartu memakai bg solid */
.grid-dense .card-product {
  background: var(--color-bg-card);
  backdrop-filter: none;
  border-color: var(--border-color-default);
  box-shadow: var(--shadow-sm);
}
```

#### Feature Card — Premium, Dark

```css
.card-feature {
  background: linear-gradient(rgba(28,13,7,.55), rgba(28,13,7,.55)), var(--gradient-dark);
  backdrop-filter: blur(var(--glass-blur-lg));
  border: 1px solid var(--glass-border-dark);
  border-radius: var(--radius-xl);
  padding: 32px;
  color: #FFFFFF;
  position: relative;
  overflow: hidden;
  box-shadow: var(--shadow-lg), inset 0 1px 0 rgba(244, 135, 74, 0.25);
}

/* Aksen glow dekoratif */
.card-feature::before {
  content: '';
  position: absolute;
  top: -50px;
  right: -50px;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(232, 99, 26, 0.25) 0%, transparent 70%);
  pointer-events: none;
}
```

#### Stats / Impact Card

```
┌──────────────────────────────┐
│   [ICON 48px]                │
│                              │
│   5.000 kg                   │  ← JetBrains Mono, Display M
│   Limbah Terkumpul           │  ← Body Small, muted
│                              │
│   ██████████░░  83%          │  ← Progress bar (brand orange)
│   dari target bulan ini      │
└──────────────────────────────┘
```

---

### 9.3 Forms & Inputs

#### Text Input

```css
.input {
  background: var(--glass-bg-strong);
  backdrop-filter: blur(var(--glass-blur-sm));
  border: 1.5px solid var(--glass-border-soft);
  border-radius: var(--radius-md);
  padding: 12px 16px;
  font-family: var(--font-body);
  font-size: var(--text-body);
  color: var(--color-text-primary);
  width: 100%;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.input:focus {
  outline: none;
  border-color: var(--border-color-focus);
  box-shadow: 0 0 0 3px rgba(201, 59, 27, 0.12);
}

.input::placeholder {
  color: var(--color-text-muted);
}

.input.error {
  border-color: var(--color-error);
  box-shadow: 0 0 0 3px rgba(185, 28, 28, 0.12);
}
```

#### Form Label

```css
.label {
  display: block;
  font-family: var(--font-body);
  font-size: var(--text-label);
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: 6px;
}

.label.required::after {
  content: ' *';
  color: var(--color-primary);
}
```

---

### 9.4 Badges & Tags

#### Category Tag

```css
.tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 12px;
  border-radius: var(--radius-full);
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.tag-brand {
  background: var(--color-primary-light);
  color: var(--color-primary);
}

.tag-success {
  background: rgba(30, 123, 74, 0.12);
  color: var(--color-success);
}

.tag-warning {
  background: rgba(212, 134, 15, 0.12);
  color: var(--color-warning);
}
```

#### Green Point Badge

```css
.badge-point {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  background: linear-gradient(135deg, rgba(30, 123, 74, 0.15) 0%, rgba(45, 160, 88, 0.15) 100%);
  border: 1px solid rgba(30, 123, 74, 0.25);
  border-radius: var(--radius-full);
  font-size: var(--text-caption);
  font-weight: 600;
  color: var(--color-success);
}
```

---

### 9.5 Navigation

#### Mobile Bottom Navigation

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  [Home]     [Limbah]   [Belanja]   [Poin]  [Profil] │
│                                                     │
└─────────────────────────────────────────────────────┘
```

```css
.nav-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 64px;
  background: var(--glass-bg-strong);
  backdrop-filter: blur(var(--glass-blur-lg)) saturate(160%);
  border-top: 1px solid var(--glass-border);
  box-shadow: 0 -8px 32px rgba(201, 59, 27, 0.08), inset 0 1px 0 rgba(255,255,255,.6);
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 8px;
  z-index: 100;
}

.nav-item.active {
  color: var(--color-primary);
}

.nav-item.active .nav-icon {
  background: var(--color-primary-light);
  border-radius: var(--radius-sm);
}
```

#### Desktop Top Navigation

```
┌─────────────────────────────────────────────────────────────────────────┐
│  SHRIMP LOOP      Marketplace   Limbah   Edukasi     [Notif]  [Login]   │
└─────────────────────────────────────────────────────────────────────────┘
```

```css
.nav-desktop {
  height: 72px;
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur-lg)) saturate(160%);
  border-bottom: 1px solid var(--glass-border);
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: var(--glass-shadow);
}
/* Saat scroll > 24px: naikkan kepekatan agar link tetap terbaca */
.nav-desktop.scrolled { background: var(--glass-bg-strong); }
```

---

### 9.6 Green Point Progress UI

```
┌─────────────────────────────────────────────────────┐
│  GREEN POINT                                        │
│                                                     │
│  1.240 pts         Level: Green Member              │
│                                                     │
│  ● ──────────────────●──────────────── ○            │
│  Green Member      1.240           Ocean Keeper     │
│  (500 pts)        (posisi Anda)    (2.000 pts)      │
│                                                     │
│  760 poin lagi menuju Ocean Keeper                  │
│                                                     │
│  [Lihat Reward]          [Cara Mendapat Poin]        │
└─────────────────────────────────────────────────────┘
```

---

### 9.7 SHRIMY Chat Widget (Konsultasi AI)

Widget konsultasi hadir di seluruh halaman sebagai tombol melayang (FAB) dan panel chat.

**Tombol Melayang (FAB)**

```css
.chat-fab {
  position: fixed; bottom: 24px; right: 24px; z-index: 300;
  width: 64px; height: 64px; border-radius: 50%;
  background: var(--gradient-primary);
  box-shadow: var(--shadow-xl), var(--glow-primary);
  transition: transform .25s var(--ease-spring);
}
.chat-fab:hover { transform: scale(1.08); }
/* Badge "AI": background var(--color-success), border 2px bg-main, pojok kanan atas */
```

**Panel Chat**

| Bagian | Spesifikasi |
|--------|-------------|
| Dimensi | 380 × 540px; maksimum `calc(100vw − 32px)` × `calc(100vh − 140px)` |
| Posisi | Fixed, 100px dari bawah, 24px dari kanan |
| Bingkai | radius-xl (24px), permukaan `glass-bg-strong` + blur-xl, border `glass-border`, shadow `glass-shadow-lg` |
| Header | Gradient primer; avatar SHRIMY dalam lingkaran putih 42px; nama + status "Asisten AI Shrimp Loop" dengan titik hijau |
| Buka/tutup | opacity + translateY(16px) scale(.97) → normal, .25s ease-spring |

**Gelembung Pesan**

```css
.msg      { max-width: 82%; padding: 11px 14px; border-radius: 16px;
            font-size: 13.5px; animation: msgIn .3s var(--ease-decelerate); }
.msg.bot  { background: var(--glass-bg-strong); backdrop-filter: blur(var(--glass-blur-sm));
            border: 1px solid var(--glass-border);
            border-bottom-left-radius: 4px; align-self: flex-start; }
.msg.user { background: var(--color-primary); color: #fff;
            border-bottom-right-radius: 4px; align-self: flex-end; }
@keyframes msgIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; } }
```

**Elemen pendukung**
- *Typing indicator:* tiga titik #B88573 yang memantul bergantian (delay 0 / .15s / .3s)
- *Suggestion chips:* pill kecil `--color-primary-light` + teks primary; berubah solid primary saat hover
- *Input:* pill radius-full, focus ring `0 0 0 3px rgba(201,59,27,.12)`; tombol kirim lingkaran 42px primary

---

### 9.8 Diagram Proses Interaktif (Edukasi)

Komponen untuk menjelaskan proses bertahap (mis. produksi kitosan) — daftar tahap yang dapat diklik di kiri, panel detail lengket (sticky) di kanan.

| Elemen | Spesifikasi |
|--------|-------------|
| Titik tahap | Lingkaran 34px, border 2px default, angka JetBrains Mono; saat aktif → gradient primer + glow-primary + angka putih |
| Rel penghubung | Garis vertikal 2px `--color-divider` antar titik |
| Baris tahap | Padding 16px radius-md; hover `--color-bg-main`; aktif `--color-primary-light` |
| Panel detail | Sticky `top: 96px`, radius-xl, permukaan `glass-bg-strong` + blur-lg, border `glass-border`, shadow `glass-shadow-lg`; berisi tag tahap, judul Playfair Display, deskripsi, blok detail teknis (font mono), dan progress bar |
| Progress bar | Track `--color-divider` radius-full; isi gradient primer, transisi width .8s ease-decelerate |

---

### 9.9 Impact Counter

Angka dampak yang menghitung naik saat pertama kali masuk viewport.

- Kartu kaca menimpa hero (`margin-top: −52px`): `glass-bg-strong` + blur-lg, border `glass-border`, radius-xl, `glass-shadow-lg`; grid 4 kolom dengan pemisah divider
- Angka: JetBrains Mono Bold, `--color-primary`, 24–34px; label Body Small; sublabel Caption muted
- Animasi: 0 → nilai target dalam 1500ms, easing `1 − (1 − p)³` (cubic ease-out), dipicu IntersectionObserver `threshold: 0.6`, hanya sekali

---

## 10. Motion & Animation

### 10.1 Prinsip Animasi

1. **Purposeful** — animasi hadir untuk menyampaikan informasi, bukan sekadar dekorasi
2. **Natural** — easing yang organik, bukan linear yang kaku
3. **Snappy** — durasi singkat untuk interaksi (100–300ms)
4. **Smooth** — scroll dan transisi halaman berjalan di 60fps

### 10.2 Easing Functions

```css
:root {
  --ease-bounce:    cubic-bezier(0.34, 1.56, 0.64, 1);   /* Untuk pop/appear */
  --ease-smooth:    cubic-bezier(0.4, 0, 0.2, 1);         /* Serbaguna */
  --ease-decelerate: cubic-bezier(0.0, 0, 0.2, 1);        /* Elemen masuk */
  --ease-accelerate: cubic-bezier(0.4, 0, 1, 1);          /* Elemen keluar */
  --ease-spring:    cubic-bezier(0.175, 0.885, 0.32, 1.1); /* Micro-interaction */
}
```

### 10.3 Duration Tokens

```css
:root {
  --duration-instant:  50ms;   /* Umpan balik state (checkbox, radio) */
  --duration-fast:    100ms;   /* Perubahan warna saat hover */
  --duration-normal:  200ms;   /* Hover button dan kartu */
  --duration-medium:  300ms;   /* Modal terbuka, drawer */
  --duration-slow:    500ms;   /* Transisi halaman, hero load */
  --duration-xslow:   800ms;   /* Animasi counter, stagger */
}
```

### 10.4 Animasi Kunci

#### 1. Counter Animation (Impact Stats)

```css
@keyframes countUp {
  from { transform: translateY(20px); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
}
/* JS: menganimasikan angka dari 0 ke nilai akhir dalam 1500ms */
```

#### 2. Green Point Gain

```css
@keyframes pointPop {
  0%   { transform: scale(0.5) translateY(10px); opacity: 0; }
  60%  { transform: scale(1.2) translateY(-5px); opacity: 1; }
  100% { transform: scale(1) translateY(0);       opacity: 1; }
}
```

#### 3. Card Hover Lift

```css
.card {
  transition: transform var(--duration-normal) var(--ease-smooth),
              box-shadow var(--duration-normal) var(--ease-smooth);
}
.card:hover {
  transform: translateY(-4px);
}
```

#### 4. Skeleton Loading

```css
@keyframes shimmer {
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
}

.skeleton {
  background: linear-gradient(
    90deg,
    var(--color-divider) 25%,
    var(--color-primary-light) 50%,
    var(--color-divider) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: var(--radius-sm);
}
```

#### 5. Page Transition (Hero Load)

```css
@keyframes heroReveal {
  0%   { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}

.hero-headline { animation: heroReveal 0.8s var(--ease-decelerate) 0.1s both; }
.hero-subtext  { animation: heroReveal 0.8s var(--ease-decelerate) 0.25s both; }
.hero-cta      { animation: heroReveal 0.8s var(--ease-decelerate) 0.4s both; }
```

#### 6. Animasi Maskot SHRIMY

Lihat spesifikasi lengkap pada §1.4 — `floaty`, `blink`, `swayL/swayR`, `tailFlick`, `legWiggle`, dan `haloPulse` berjalan paralel dengan durasi 1.8–5s.

#### 7. Scroll Reveal

Elemen konten muncul saat masuk viewport — sekali saja, tanpa berulang.

```css
.sr    { opacity: 0; transform: translateY(28px);
         transition: opacity .7s var(--ease-decelerate),
                     transform .7s var(--ease-decelerate); }
.sr.in { opacity: 1; transform: none; }
/* JS: IntersectionObserver threshold 0.12, unobserve setelah tampil */
```

#### 8. Counter Count-Up

Angka dampak dianimasikan 0 → target dalam 1500ms dengan cubic ease-out (lihat §9.9).

### 10.5 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 11. Dark Mode

### 11.1 Pemetaan Warna Dark Mode

| Token | Light Mode | Dark Mode |
|-------|------------|-----------|
| `--color-bg-main` | #FDF8F5 | #120805 |
| `--color-bg-card` | #FFFFFF | #1E0C06 |
| `--color-text-primary` | #2D1409 | #F5E5DD |
| `--color-text-secondary` | #7A3E28 | #C49484 |
| `--color-text-muted` | #B88573 | #7A5548 |
| `--color-border` | #EDD8CF | #3D1E12 |
| `--color-divider` | #F5E5DD | #2A1008 |

### 11.2 Strategi Dark Mode

```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg-main:          #120805;
    --color-bg-card:          #1E0C06;
    --color-bg-card-elevated: #2A1008;
    --color-text-primary:     #F5E5DD;
    --color-text-secondary:   #C49484;
    --color-text-muted:       #7A5548;
    --border-color-default:   #3D1E12;
    --color-divider:          #2A1008;
  }
}
```

**Catatan**
- Warna primer brand (Shrimp Red dan Shrimp Orange) tidak berubah
- Gradient terlihat lebih hidup karena kontras terhadap latar gelap
- Efek glow menjadi lebih dramatis dan elegan pada dark mode

### 11.3 Kaca pada Dark Mode

Kaca gelap Shrimp Loop berkilau oranye di tepinya — seperti kaca yang memantulkan bara.

```css
@media (prefers-color-scheme: dark) {
  :root {
    --glass-bg-strong:  rgba(30, 12, 6, 0.72);
    --glass-bg:         rgba(30, 12, 6, 0.55);
    --glass-bg-subtle:  rgba(255, 255, 255, 0.06);
    --glass-border:      rgba(244, 135, 74, 0.28);
    --glass-border-soft: rgba(244, 135, 74, 0.16);
    --glass-highlight:   linear-gradient(120deg, rgba(244,135,74,.35) 0%, transparent 45%);
    --glass-shadow:      0 8px 32px rgba(0, 0, 0, 0.45),
                         inset 0 1px 0 rgba(244, 135, 74, 0.22);
    --glass-shadow-lg:   0 16px 48px rgba(0, 0, 0, 0.55),
                         inset 0 1px 0 rgba(244, 135, 74, 0.30);
  }
}
```

- Latar ambient gelap memakai blob yang sama dengan opacity dinaikkan ±20% di atas #120805
- Garis cahaya tepi atas berubah dari putih menjadi Coral Glow — inilah pembeda kaca kita dari glassmorphism generik


---

## 12. Page Templates

### 12.1 Homepage (Beranda)

Beranda dirancang sebagai halaman yang edukatif, bukan sekadar etalase: pengunjung pertama harus pulang dengan pemahaman baru tentang nilai limbah udang — dan tahu langkah pertamanya.

**Struktur:**

```
┌─────────────────────────────────────────────────────────────┐
│  [NAVIGATION BAR — sticky, blur, logo SHRIMY + wordmark]    │
├─────────────────────────────────────────────────────────────┤
│  [HERO — gradient hangat + radial glow]                     │
│  ┌────────────────────────────┐  ┌──────────────────────┐   │
│  │ OVERLINE: Inovasi          │  │   MASKOT SHRIMY      │   │
│  │ "Agro-Marina Aceh"         │  │   (floaty + halo)    │   │
│  │                            │  │                      │   │
│  │ Dari Limbah                │  │  [bubble: +10 pts    │   │
│  │ Menjadi Nilai.             │  │   per kg limbah]     │   │
│  │ (kata "Nilai" gradient)    │  │  [bubble: "Halo! Aku │   │
│  │                            │  │   SHRIMY, tanya aku"]│   │
│  │ Lead: fakta ±12 ton        │  └──────────────────────┘   │
│  │ limbah/hari terbuang       │                             │
│  │                            │                             │
│  │ [Daftarkan Limbah →]       │                             │
│  │ [Pelajari Cara Kerja]      │                             │
│  │ ● 48 mitra aktif           │                             │
│  └────────────────────────────┘                             │
├─────────────────────────────────────────────────────────────┤
│  [IMPACT COUNTER — kartu putih menimpa hero, count-up]      │
│   5.2 ton limbah │ 420 kg kitosan │ 312 pengguna │ 2.1 CO₂e │
├─────────────────────────────────────────────────────────────┤
│  [FACT STRIP — latar gradient gelap, edukatif]              │
│  "Tahukah Anda?" — 3 kartu fakta:                           │
│   40–60% udang jadi limbah · pasar kitosan >$6 M ·          │
│   pakan = 60–70% biaya tambak                               │
├─────────────────────────────────────────────────────────────┤
│  [CARA KERJA — 3 langkah + badge Green Point per langkah]   │
│  1. Daftarkan limbah → 2. Kami olah → 3. Kembali ke Anda   │
├─────────────────────────────────────────────────────────────┤
│  [EDUKASI INTERAKTIF — diagram proses kitosan 4 tahap]      │
│  Daftar tahap klik-able │ Panel detail sticky + progress    │
├─────────────────────────────────────────────────────────────┤
│  [APLIKASI PRODUK — 4 kartu manfaat + dosis praktis]        │
│  Biostimulan · Pakan akuakultur · Pupuk cair · Penjernih    │
├─────────────────────────────────────────────────────────────┤
│  [KONSULTASI AI — kartu gelap premium + maskot SHRIMY]      │
│  3 contoh pertanyaan klik-able → membuka chat               │
│  [Mulai Konsultasi Sekarang →]                              │
├─────────────────────────────────────────────────────────────┤
│  [TESTIMONI — 3 kartu, diambil dari persona nyata]          │
├─────────────────────────────────────────────────────────────┤
│  [FOOTER — gelap, 4 kolom]                                  │
└─────────────────────────────────────────────────────────────┘
   [FAB SHRIMY — melayang kanan bawah di seluruh halaman]
```

**Aturan konten beranda**
- Seluruh halaman berdiri di atas latar ambient "Coastal Light" (§5.4); hero, counter, kartu fakta, panel edukasi, dan chat adalah permukaan kaca sesuai hierarki §5.3
- Setiap angka di hero dan counter harus data nyata yang dapat dipertanggungjawabkan
- Semua section konten memakai scroll reveal (§10.4); hero memakai `heroReveal` berjenjang
- Satu primary CTA di hero ("Daftarkan Limbah"); CTA lain berperan sekunder
- Fakta edukatif ditulis dari sudut pandang pengguna: apa artinya bagi dapur, tambak, dan kebun mereka

### 12.2 Marketplace

```
[NAV]
┌─ FILTER SIDEBAR ─────┐  ┌─ PRODUCT GRID ──────────────────────┐
│                       │  │                                      │
│  Kategori             │  │  Menampilkan 24 dari 87 produk       │
│  ○ Semua              │  │  [Sort: Terpopuler ▼]                │
│  ● Pakan Akuakultur   │  │                                      │
│  ○ Produk Pertanian   │  │  ┌────┐ ┌────┐ ┌────┐               │
│  ○ Bundle             │  │  │ P1 │ │ P2 │ │ P3 │               │
│                       │  │  └────┘ └────┘ └────┘               │
│  Harga                │  │  ┌────┐ ┌────┐ ┌────┐               │
│  [──●──────] < 200rb  │  │  │ P4 │ │ P5 │ │ P6 │               │
│                       │  │  └────┘ └────┘ └────┘               │
│  Rating               │  │                                      │
│  ★★★★☆ ke atas        │  │  [Muat Lebih Banyak →]               │
└───────────────────────┘  └──────────────────────────────────────┘
```

### 12.3 Waste Exchange

```
[NAV]

[HEADER: Waste Exchange | Counter limbah hari ini]

[HERO CTA — Kartu gradient orange full width]
  "Jadikan limbah dapur Anda bernilai"
  Daftarkan limbah kulit udang dan dapatkan penghasilan tambahan
  [Daftarkan Sekarang →]

[LISTING AKTIF SAYA]
  [Card] [Card] [Card]

[CARA KERJA — 4 langkah visual]

[HARGA REFERENSI — Tabel transparan]
  Jenis Limbah | Harga/kg | Pembaruan Terakhir

[RIWAYAT SETORAN — Tabel dengan filter]
```

---

## 13. Dos & Don'ts

### Lakukan

| Area | Panduan |
|------|---------|
| **Warna** | Gunakan Shrimp Orange/Red hanya untuk elemen fokal — CTA dan highlight |
| **Tipografi** | Playfair Display hanya untuk heading display, bukan body text |
| **Spacing** | Ikuti sistem grid 8px secara konsisten |
| **Kartu** | Selalu gunakan shadow warm-tinted, bukan shadow abu-abu netral |
| **Foto** | Gunakan foto autentik dari produk dan pengguna nyata |
| **Animasi** | Subtle, bertujuan, dan cepat — di bawah 300ms untuk interaksi |
| **Form** | Selalu tampilkan label, placeholder, dan error state yang jelas |
| **CTA** | Satu primary CTA per halaman, dengan teks aksi yang spesifik |
| **Maskot** | Selalu render SHRIMY dari master SVG (`#shrimy-core`) via `<use>` agar identik |
| **Kaca** | Letakkan kaca hanya di atas latar ambient/gradient/foto; teks panjang hanya di `glass-bg-strong` |
| **Kaca** | Pertahankan garis cahaya tepi atas (inset highlight) di setiap permukaan kaca |

### Hindari

| Area | Larangan |
|------|---------|
| **Warna** | Jangan gunakan biru sebagai aksen — tidak selaras dengan brand |
| **Warna** | Jangan mencampur orange brand dengan warna di luar palet |
| **Tipografi** | Hindari lebih dari 3 ukuran font dalam satu komponen |
| **Shadow** | Hindari shadow netral/abu-abu — gunakan selalu warm-tinted shadow |
| **Animasi** | Hindari animasi berlebihan — cukup satu signature motion per halaman |
| **Foto** | Hindari stock photo generik dengan model yang tidak relevan |
| **CTA** | Hindari label ambigu seperti "Klik Di Sini", "Submit", atau "OK" |
| **Teks** | Hindari baris teks melebihi 60–75 karakter demi keterbacaan |
| **Mobile** | Hindari elemen interaktif berukuran kurang dari 44×44px |
| **Kontras** | Hindari teks tipis di atas latar orange atau merah |
| **Maskot** | Jangan menggambar ulang, mengubah warna, atau memakai versi SHRIMY di luar master SVG |
| **Kaca** | Jangan menumpuk lebih dari 2 lapis kaca, meletakkan kaca di atas putih polos, atau memakai kaca abu-abu dingin |
| **Kaca** | Jangan menjadikan kaca sebagai primary CTA, dan jangan menganimasikan nilai blur |

---

## Changelog

| Versi | Tanggal | Perubahan |
|-------|---------|-----------|
| 1.0 | Juni 2026 | Rilis awal untuk submisi UTU Awards |
| 1.1 | Juli 2026 | Spesifikasi maskot SHRIMY (§1.4), chat widget Konsultasi AI (§9.7), diagram proses interaktif (§9.8), impact counter (§9.9), animasi maskot & scroll reveal (§10.4), template beranda edukatif (§12.1) |
| 1.2 | Juli 2026 | Rujukan ke rencana & spesifikasi maskot realistis-3D (SHRIMY 2.0) pada §1.4 |
| 2.0 | Juli 2026 | Adopsi bahasa visual glassmorphism premium: token kaca (§2.7), prinsip permukaan & latar ambient (§5.3–5.4), varian kaca pada button/kartu/input/navigasi/chat (§9), kaca dark mode (§11.3), pembaruan aturan beranda dan Dos & Don'ts |

---

*Design system ini adalah dokumen hidup yang akan terus diperbarui seiring berkembangnya Shrimp Loop.*
*Disusun untuk kompetisi UTU Awards 2026 — Universitas Teuku Umar, Aceh, Indonesia.*
