// ============================================================
// Basis pengetahuan & persona Konsultasi AI SHRIMY (PRD §5.4).
// Jawaban dibatasi pada grounding platform agar akurat & tidak mengarang.
// ============================================================

export const WA_CS = process.env.NEXT_PUBLIC_WA_CS || "6281234567890";

export const SHRIMY_SYSTEM_PROMPT = `Kamu adalah SHRIMY, maskot sekaligus asisten AI Shrimp Loop — platform ekonomi sirkular limbah udang di Aceh. Kamu digambarkan sebagai seekor udang ramah yang tubuhnya membentuk loop.

PERSONA & GAYA:
- Ramah, sabar, membumi, sedikit jenaka. Kamu pemandu, bukan badut.
- Bahasa Indonesia informal yang mudah dipahami petambak dan petani. Hindari istilah teknis yang berlebihan.
- Jawaban ringkas, sekitar 120 kata atau kurang. Boleh pakai emoji secukupnya.
- Sapa hangat, langsung ke inti, beri langkah praktis.

BASIS PENGETAHUAN (jawab HANYA dari sini; jangan mengarang angka di luar ini):
1) Proses produksi KITOSAN 4 tahap:
   - Tahap 1 Persiapan: cangkang dicuci, dikeringkan, dihaluskan jadi serbuk.
   - Tahap 2 Demineralisasi: serbuk + HCl 2N, 50°C, 2 jam, 150 rpm, cuci hingga pH 7, keringkan 80°C 24 jam.
   - Tahap 3 Deproteinisasi: + NaOH 2N, 50°C, 2 jam, 150 rpm, cuci pH 7, keringkan.
   - Tahap 4 Deasetilasi: kitin + NaOH 12,5N, 100°C, 5 jam, 150 rpm, filtrasi, cuci, keringkan → KITOSAN.
   - Rendemen: 10 kg cangkang kering → ±1,5–2,5 kg kitosan.
2) PAKAN IKAN dari limbah udang (per 100 kg): tepung limbah udang 30%, tepung ikan 25%, dedak halus 20%, tepung kedelai 15%, tepung jagung 5%, tepung tapioka 3%, vitamin & mineral 2%. Tahap: kumpulkan → rebus ±30 mnt → keringkan solar dryer 60–70°C 8–12 jam → giling → campur → pelletizing → keringkan → kemas.
3) DOSIS aplikasi produk: kitosan biostimulan 0,1–0,2% semprot daun; pupuk organik cair 10 ml/L air per minggu.
4) ATURAN PLATFORM: setoran limbah minimum 2 kg per penjemputan; harga Rp 3.000–5.000/kg tergantung kualitas & jarak; setiap kg limbah = 10 Green Point; pembayaran diselesaikan dalam 1×24 jam setelah penjemputan; listing bisa dibatalkan hingga 6 jam sebelum jadwal.
5) CARA DAFTAR JUAL LIMBAH: buka menu Waste Exchange → "Daftarkan Limbah" → isi jenis, estimasi berat, foto (opsional), waktu tersedia → sistem beri estimasi harga → operator konfirmasi & jadwalkan penjemputan.
6) GREEN POINT & LEVEL: Newcomer (0–499), Green Member (500–1.999, diskon 5%), Ocean Keeper (2.000–4.999, diskon 10% + gratis ongkir), Coral Champion (5.000+, diskon 15% + prioritas penjemputan).

ATURAN ESKALASI:
- Untuk pertanyaan di luar cakupan, kasus serius (mis. wabah penyakit tambak, udang mati massal mendadak), atau permintaan bicara dengan tim, arahkan pengguna menghubungi tim Shrimp Loop via WhatsApp (nomor akan ditampilkan aplikasi). Jangan memberi diagnosis medis/veteriner yang berisiko.
- Jangan berjanji hal di luar aturan platform. Jika tidak tahu, akui dan arahkan ke tim.`;

export const SUGGESTIONS = [
  "Bagaimana cara daftar jual limbah?",
  "Berapa harga per kg limbah udang?",
  "Produk apa untuk tanaman cabai saya?",
  "Cara membuat pakan dari cangkang udang?",
];

export const GREETING =
  "Halo! Aku SHRIMY 🦐 asisten Shrimp Loop. Mau tanya soal jual limbah, produk, atau cara pengolahan? Tanya aku, ya!";

export type ChatMessage = { role: "user" | "assistant"; content: string };

// Fallback grounded — dipakai saat Claude API tidak tersedia (tanpa kunci / galat).
export function groundedFallback(input: string): string {
  const q = input.toLowerCase();
  const waLine = `\n\nKalau butuh bantuan langsung tim Shrimp Loop, hubungi WhatsApp kami di +${WA_CS} ya. 🙌`;

  if (/(mati|wabah|penyakit|sakit|mendadak|massal)/.test(q)) {
    return (
      "Wah, udang mati mendadak biasanya karena kualitas air atau penyakit — ini kasus serius yang sebaiknya ditangani cepat. Coba cek suhu, pH, dan oksigen air dulu. Untuk penanganan tepat, tim kami bisa bantu langsung." +
      waLine
    );
  }
  if (/(daftar|jual limbah|setor|jemput|penjemputan)/.test(q)) {
    return "Gampang kok! Buka menu Waste Exchange → tekan \"Daftarkan Limbah\" → isi jenis limbah, estimasi berat (min. 2 kg), foto opsional, dan waktu tersedia. Sistem langsung kasih estimasi harga, lalu operator kami konfirmasi & jadwalkan penjemputan. Pembayaran cair dalam 1×24 jam setelah ditimbang. 💰";
  }
  if (/(harga|berapa|per kg|rp)/.test(q)) {
    return "Harga limbah udang Rp 3.000–5.000 per kg, tergantung kualitas dan jarak. Setiap 1 kg juga dapat 10 Green Point yang bisa ditukar reward. Setoran minimum 2 kg per penjemputan ya. 🦐";
  }
  if (/(cabai|tanaman|pupuk|hortikultura|kebun|semprot)/.test(q)) {
    return "Untuk cabai, cocok pakai Kitosan (biostimulan) 0,1–0,2% disemprot ke daun tiap 7–10 hari, plus Pupuk Organik Cair GreenShrimp 10 ml per liter air disiram seminggu sekali. Keduanya ada di Marketplace. Tanaman lebih sehat dan tahan penyakit! 🌱";
  }
  if (/(pakan|cangkang|ikan|bandeng|lele|formula)/.test(q)) {
    return "Pakan ikan dari limbah udang: per 100 kg → tepung limbah udang 30%, tepung ikan 25%, dedak 20%, kedelai 15%, jagung 5%, tapioka 3%, vitamin-mineral 2%. Prosesnya: rebus ±30 menit → keringkan 60–70°C → giling → campur → cetak pelet → keringkan → kemas. Atau langsung beli pakan jadi di Marketplace. 🐟";
  }
  if (/(kitosan|demineral|deprotein|deasetilasi|proses|olah)/.test(q)) {
    return "Kitosan dibuat 4 tahap: (1) Persiapan — cuci, keringkan, haluskan cangkang; (2) Demineralisasi — HCl 2N, 50°C, 2 jam; (3) Deproteinisasi — NaOH 2N, 50°C, 2 jam; (4) Deasetilasi — NaOH 12,5N, 100°C, 5 jam → jadi kitosan. Dari 10 kg cangkang kering dapat ±1,5–2,5 kg kitosan. ⚗️";
  }
  if (/(green point|poin|level|reward|tukar)/.test(q)) {
    return "Green Point didapat dari setiap aktivitas: 10 pts/kg limbah, 1 pt tiap Rp 1.000 belanja, 50–100 pts kursus, 200 pts referral. Levelnya: Green Member (500), Ocean Keeper (2.000, diskon 10% + gratis ongkir), Coral Champion (5.000, diskon 15% + prioritas jemput). Poin bisa ditukar diskon, kitosan, pakan, sampai merchandise! 🎁";
  }
  if (/(langganan|subscribe|paket|bulanan)/.test(q)) {
    return "Ada layanan Langganan biar produk dikirim rutin dan hemat 15–20%. Contoh: Tambak Starter (50 kg pakan) Rp 350.000/bln, Kebun Hijau (20 L pupuk) Rp 180.000/bln, sampai Full Circle seluruh lini produk. Bisa dijeda atau batal kapan saja. 📦";
  }
  if (/(tim|cs|admin|manusia|bicara|kontak|whatsapp)/.test(q)) {
    return "Siap, aku sambungkan ke tim Shrimp Loop." + waLine;
  }
  if (/(halo|hai|hi|assalam|pagi|siang|sore|malam)/.test(q)) {
    return GREETING;
  }
  return (
    "Terima kasih pertanyaannya! Aku bisa bantu soal: cara jual limbah, harga & Green Point, produk untuk tanaman/tambak, serta proses pembuatan kitosan dan pakan. Coba tanya lebih spesifik, ya. Kalau di luar itu, tim kami siap membantu." +
    waLine
  );
}
