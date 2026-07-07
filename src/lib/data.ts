// ============================================================
// Data operasional EcoShrimp (angka dari PRD & Design System).
// Semua angka dampak = data operasional nyata yang dapat dipertanggungjawabkan.
// ============================================================

export const IMPACT = [
  { key: "limbah", value: 5.2, suffix: " ton", label: "Limbah Terkumpul", sub: "sejak peluncuran", decimals: 1 },
  { key: "kitosan", value: 420, suffix: " kg", label: "Kitosan Diproduksi", sub: "kualitas lab", decimals: 0 },
  { key: "pengguna", value: 312, suffix: "", label: "Pengguna Aktif", sub: "petambak, petani, restoran", decimals: 0 },
  { key: "co2", value: 2.1, suffix: " ton", label: "CO₂e Terhindarkan", sub: "estimasi per batch", decimals: 1 },
] as const;

export const FACTS = [
  {
    stat: "35–50%",
    title: "Bobot udang berakhir jadi limbah",
    body: "Kulit, kepala, dan cangkang yang selama ini dibuang — padahal itu bahan baku kitosan bernilai tinggi.",
  },
  {
    stat: ">USD 6 M",
    title: "Nilai pasar global kitosan",
    body: "Biopolimer dari cangkang krustasea; dipakai di pertanian, akuakultur, farmasi, hingga pengolahan air.",
  },
  {
    stat: "60–70%",
    title: "Porsi pakan dari biaya tambak",
    body: "Pakan komersial menyerap sebagian besar biaya produksi. Pakan dari limbah menekannya hingga 30%.",
  },
] as const;

export const HOW_IT_WORKS = [
  {
    n: 1,
    title: "Daftarkan Limbah",
    body: "Restoran & pengolah seafood mendaftarkan kulit dan kepala udang. Kami jemput terjadwal.",
    reward: "+10 Green Point / kg",
  },
  {
    n: 2,
    title: "Kami Olah",
    body: "Limbah diproses menjadi kitosan, pakan akuakultur, dan pupuk organik cair dengan SOP & QC ketat.",
    reward: "SOP 4 tahap + uji lab",
  },
  {
    n: 3,
    title: "Kembali ke Anda",
    body: "Produk terjangkau didistribusikan kembali ke petambak dan petani. Lingkaran tertutup.",
    reward: "Hemat s.d. 30% biaya pakan",
  },
] as const;

export type ProcessStep = {
  id: string;
  tag: string;
  title: string;
  desc: string;
  detail: string;
  progress: number;
};

// Lampiran A — proses produksi kitosan 4 tahap + parameter teknis
export const KITOSAN_STEPS: ProcessStep[] = [
  {
    id: "persiapan",
    tag: "Tahap 1",
    title: "Persiapan",
    desc: "Cangkang dibersihkan, dikeringkan, lalu dihaluskan menjadi serbuk.",
    detail:
      "Cuci → keringkan → haluskan menjadi serbuk.\nHasil: serbuk cangkang siap proses.\nRendemen acuan: 10 kg cangkang kering → ±1,5–2,5 kg kitosan.",
    progress: 25,
  },
  {
    id: "demineralisasi",
    tag: "Tahap 2",
    title: "Demineralisasi",
    desc: "Menghilangkan mineral (CaCO₃) dengan larutan asam.",
    detail:
      "Serbuk + HCl 2N → 50°C, 2 jam, 150 rpm\n→ cuci hingga pH 7 → keringkan (80°C, 24 jam).\nHasil: serbuk bebas mineral (kaya kitin).",
    progress: 50,
  },
  {
    id: "deproteinisasi",
    tag: "Tahap 3",
    title: "Deproteinisasi",
    desc: "Memisahkan protein dari kitin dengan basa.",
    detail:
      "+ NaOH 2N → 50°C, 2 jam, 150 rpm\n→ cuci hingga pH 7 → keringkan (80°C, 24 jam).\nHasil: kitin murni.",
    progress: 75,
  },
  {
    id: "deasetilasi",
    tag: "Tahap 4",
    title: "Deasetilasi",
    desc: "Mengubah kitin menjadi kitosan dengan basa pekat.",
    detail:
      "Kitin + NaOH 12,5N → 100°C, 5 jam, 150 rpm\n→ filtrasi → cuci → keringkan (80°C, 24 jam).\nHasil: KITOSAN (serbuk).",
    progress: 100,
  },
];

export const APPLICATIONS = [
  {
    icon: "leaf",
    title: "Biostimulan Tanaman",
    body: "Kitosan memacu pertumbuhan & ketahanan penyakit pada cabai dan hortikultura.",
    dose: "0,1–0,2% semprot daun, tiap 7–10 hari",
  },
  {
    icon: "fish",
    title: "Pakan Akuakultur",
    body: "Tepung limbah udang berprotein tinggi untuk udang, bandeng, dan lele.",
    dose: "Substitusi 30% tepung ikan dalam formula",
  },
  {
    icon: "drop",
    title: "Pupuk Organik Cair",
    body: "Nutrisi lengkap untuk tanah, menekan ketergantungan urea & NPK.",
    dose: "10 ml / L air, siram tiap minggu",
  },
  {
    icon: "water",
    title: "Penjernih Air",
    body: "Kitosan sebagai koagulan alami mengikat partikel & logam pada air tambak.",
    dose: "Dosis rendah sesuai kekeruhan air",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Bu Sarah",
    role: "Pemilik Restoran Seafood · Banda Aceh",
    quote:
      "Dulu kulit udang saya buang gratis ke pemulung. Sekarang dijemput terjadwal dan menghasilkan. Dapat badge Green Restaurant untuk konten juga.",
    initial: "S",
  },
  {
    name: "Pak Hasan",
    role: "Petambak Udang Vaname · Aceh Besar",
    quote:
      "Pakan dari limbah udang bikin biaya produksi turun. Pesan gampang, tinggal WhatsApp. Panen 2 ton per siklus jadi lebih untung.",
    initial: "H",
  },
  {
    name: "Pak Ridwan",
    role: "Petani Cabai · Aceh Tengah",
    quote:
      "Awalnya ragu pupuk organik. Setelah pakai pupuk cair EcoShrimp di kebun cabai, hasilnya nyata dan harganya jauh lebih hemat.",
    initial: "R",
  },
] as const;

// ---------- Marketplace ----------
export type Product = {
  id: string;
  name: string;
  brand: string;
  category: "Pakan Akuakultur" | "Produk Pertanian";
  price: number;
  points: number;
  rating: number;
  reviews: number;
  desc: string;
  spec: string;
  /** Siapa yang menjual produk ini */
  seller: string;
  /** Catatan model penjualan / verifikasi kualitas */
  sellerNote: string;
  /** "own" = diproduksi EcoShrimp, "verified" = produk mitra terverifikasi */
  sellerType: "own" | "verified";
  tag?: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Chito Grow",
    brand: "Kitosan Cair · 1 L",
    category: "Produk Pertanian",
    price: 210000,
    points: 210,
    rating: 4.9,
    reviews: 76,
    desc: "Pupuk hayati berbasis kitosan dari cangkang udang — sekaligus biostimulan & fungisida alami. Diproduksi langsung oleh pusat pengolahan EcoShrimp dengan kontrol derajat deasetilasi.",
    spec: "DD ≥ 85% · larut asam lemah",
    seller: "Diproduksi & dijual EcoShrimp",
    sellerNote: "Diolah di pusat pengolahan EcoShrimp",
    sellerType: "own",
    tag: "Produksi Sendiri",
  },
  {
    id: "p2",
    name: "Aqua Feed",
    brand: "Pakan Akuakultur · 10 kg",
    category: "Pakan Akuakultur",
    price: 185000,
    points: 185,
    rating: 4.8,
    reviews: 132,
    desc: "Pakan budidaya tinggi protein untuk udang & ikan yang diproduksi masyarakat/UMKM. Setiap batch melewati Quality Control EcoShrimp; hanya yang lolos standar mendapat label EcoShrimp Certified.",
    spec: "Protein 42% · Lemak 6% · Serat 4%",
    seller: "Produsen masyarakat · lolos QC",
    sellerNote: "Lolos Quality Control · EcoShrimp Certified",
    sellerType: "verified",
    tag: "EcoShrimp Certified",
  },
];

// ---------- Green Point ----------
export const POINT_EARN = [
  { act: "Setoran limbah", pts: "10 pts/kg" },
  { act: "Pembelian produk di marketplace", pts: "1 pt / Rp 1.000" },
  { act: "Menyelesaikan kursus edukasi", pts: "50–100 pts" },
  { act: "Mengundang teman baru (referral)", pts: "200 pts" },
  { act: "Ulasan produk disertai foto", pts: "25 pts" },
  { act: "Check-in harian", pts: "5 pts" },
] as const;

export const LEVELS = [
  { lvl: 1, name: "Newcomer", threshold: "0–499 pts", benefit: "—", min: 0 },
  { lvl: 2, name: "Green Member", threshold: "500–1.999 pts", benefit: "Diskon 5%", min: 500 },
  { lvl: 3, name: "Ocean Keeper", threshold: "2.000–4.999 pts", benefit: "Diskon 10% + gratis ongkir", min: 2000 },
  { lvl: 4, name: "Coral Champion", threshold: "5.000+ pts", benefit: "Diskon 15% + prioritas penjemputan", min: 5000 },
] as const;

export const REWARDS = [
  { reward: "Diskon 10% untuk 1 transaksi", cost: 500 },
  { reward: "Gratis ongkir 1 pengiriman", cost: 300 },
  { reward: "1 kg kitosan", cost: 2000 },
  { reward: "5 kg pakan ikan", cost: 1500 },
  { reward: "Merchandise EcoShrimp (totebag)", cost: 1000 },
  { reward: 'Sertifikat digital "Green Partner"', cost: 800 },
] as const;

// ---------- Langganan ----------
export const PACKAGES = [
  { name: "Tambak Starter", contents: "50 kg pakan ikan / bulan", normal: 425000, sub: 350000, save: "18%" },
  { name: "Kebun Hijau", contents: "20 L pupuk cair / bulan", normal: 220000, sub: 180000, save: "18%" },
  { name: "Kitosan Basic", contents: "5 kg kitosan / bulan", normal: 300000, sub: 250000, save: "17%" },
  { name: "Ocean Pro", contents: "50 kg pakan + 10 kg kitosan / bulan", normal: 710000, sub: 580000, save: "18%", featured: true },
  { name: "Full Circle", contents: "Seluruh lini produk / bulan", normal: 1100000, sub: 880000, save: "20%" },
] as const;

// ---------- Waste Exchange ----------
export const WASTE_PRICES = [
  { type: "Kulit & Kepala Udang", price: "Rp 3.500 / kg", updated: "Hari ini" },
  { type: "Cangkang Udang", price: "Rp 4.000 / kg", updated: "Hari ini" },
  { type: "Kepala Udang Segar", price: "Rp 3.000 / kg", updated: "Kemarin" },
  { type: "Campuran (grade A)", price: "Rp 5.000 / kg", updated: "Hari ini" },
] as const;

export const WASTE_HISTORY = [
  { date: "20 Jun", kg: 12, total: "Rp 42.000", status: "Selesai" },
  { date: "15 Jun", kg: 18, total: "Rp 63.000", status: "Selesai" },
  { date: "08 Jun", kg: 9, total: "Rp 31.500", status: "Selesai" },
] as const;

export const WASTE_STEPS = [
  { n: 1, title: "Jenis limbah", body: "Pilih kulit, kepala, cangkang, atau campuran." },
  { n: 2, title: "Estimasi berat", body: "Geser slider atau ketik jumlah (kg). Minimum 2 kg." },
  { n: 3, title: "Foto (opsional)", body: "Bantu kami menilai kualitas — boleh dilewati." },
  { n: 4, title: "Waktu tersedia", body: "Pilih jadwal penjemputan yang tidak mengganggu operasional." },
] as const;

// ---------- Admin dashboard ----------
export const ADMIN_STATS = [
  { label: "GMV Bulan Ini", value: "Rp 52,4 jt", trend: "+18%", tone: "success" },
  { label: "Monthly Active Users", value: "312", trend: "+9%", tone: "success" },
  { label: "Limbah Terkumpul", value: "5,2 ton", trend: "+0,8 ton", tone: "success" },
  { label: "CO₂e Terhindarkan", value: "2,1 ton", trend: "estimasi", tone: "info" },
] as const;

export const ADMIN_PICKUPS = [
  { id: "WX-1042", partner: "Resto Ulee Lheue", kg: "≈15 kg", when: "Selasa 08.00", status: "Terjadwal", tone: "info" },
  { id: "WX-1041", partner: "Seafood Lampulo", kg: "≈22 kg", when: "Selasa 10.00", status: "Driver ditugaskan", tone: "warning" },
  { id: "WX-1040", partner: "Warung Peunayong", kg: "9 kg", when: "Senin 15.00", status: "Selesai", tone: "success" },
  { id: "WX-1039", partner: "Resto Pantai Cermin", kg: "18 kg", when: "Senin 09.00", status: "Selesai", tone: "success" },
] as const;

export const ADMIN_PRODUCTION = [
  { batch: "KTS-014", input: "120 kg cangkang", output: "24 kg kitosan", rate: "20%", qc: "Lulus" },
  { batch: "PKN-031", input: "300 kg limbah", output: "260 kg pakan", rate: "87%", qc: "Lulus" },
  { batch: "PPK-022", input: "180 kg limbah", output: "150 L pupuk", rate: "83%", qc: "Proses" },
] as const;

export const ADMIN_INVENTORY = [
  { item: "Kitosan Murni", stock: 84, unit: "kg", threshold: 50, tone: "success" },
  { item: "Pakan Ikan Pelet", stock: 32, unit: "kg", threshold: 100, tone: "warning" },
  { item: "Pupuk Organik Cair", stock: 210, unit: "L", threshold: 80, tone: "success" },
  { item: "Biostimulan", stock: 12, unit: "L", threshold: 30, tone: "error" },
] as const;

export function formatRupiah(n: number): string {
  return "Rp " + n.toLocaleString("id-ID");
}
