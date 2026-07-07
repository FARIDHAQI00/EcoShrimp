const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const input  = path.join(__dirname, 'public', 'logo.png');
const output = path.join(__dirname, 'public', 'logo-clean.png');

async function removeWhiteBackground() {
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const pixels = new Uint8Array(data);

  for (let i = 0; i < width * height; i++) {
    const idx = i * channels;
    const r = pixels[idx];
    const g = pixels[idx + 1];
    const b = pixels[idx + 2];

    // Hapus piksel yang terlihat seperti kotak-kotak (putih / abu-abu muda)
    if (r > 220 && g > 220 && b > 220) {
      pixels[idx + 3] = 0; // transparan penuh
    }
    // Soft edge: semi-transparan untuk piksel abu-abu agak gelap (anti-alias)
    else if (r > 180 && g > 180 && b > 180) {
      const factor = (r - 180) / 40;
      pixels[idx + 3] = Math.round(pixels[idx + 3] * (1 - factor));
    }
  }

  await sharp(Buffer.from(pixels), { raw: { width, height, channels } })
    .png()
    .toFile(output);

  // Ganti logo asli dengan yang sudah bersih
  fs.copyFileSync(output, input);
  fs.unlinkSync(output);

  console.log('✅ Background dihapus! Logo disimpan ke public/logo.png');
}

removeWhiteBackground().catch(console.error);
