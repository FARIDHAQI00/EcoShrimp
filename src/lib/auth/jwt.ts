// ============================================================
// JWT HS256 tanpa dependency eksternal — memakai Web Crypto
// (globalThis.crypto.subtle) agar berjalan di runtime Node
// maupun Edge (middleware). PRD §8.2/§8.5: JWT + refresh token.
// ============================================================

export type TokenType = "access" | "refresh";

export interface TokenPayload {
  sub: string; // user id
  role: string; // peran (RBAC)
  typ: TokenType; // jenis token
  iat: number; // issued-at (detik)
  exp: number; // expiry (detik)
}

const enc = new TextEncoder();

// Rahasia HMAC. Wajib di-set via AUTH_SECRET di produksi; fallback dev agar mudah dijalankan.
function secret(): string {
  return process.env.AUTH_SECRET || "shrimp-loop-dev-secret-change-me-please-32chars";
}

function b64urlEncode(bytes: Uint8Array): string {
  let bin = "";
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function b64urlEncodeStr(s: string): string {
  return b64urlEncode(enc.encode(s));
}
function b64urlDecodeStr(s: string): string {
  const pad = s.length % 4 === 0 ? "" : "=".repeat(4 - (s.length % 4));
  const bin = atob(s.replace(/-/g, "+").replace(/_/g, "/") + pad);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new TextDecoder().decode(bytes);
}

async function hmacKey(): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    "raw",
    enc.encode(secret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"],
  );
}

async function sign(data: string): Promise<string> {
  const key = await hmacKey();
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(data));
  return b64urlEncode(new Uint8Array(sig));
}

/** Buat token JWT bertanda-tangan. `ttlSec` = umur token dalam detik. */
export async function signToken(
  input: { sub: string; role: string; typ: TokenType },
  ttlSec: number,
): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "HS256", typ: "JWT" };
  const payload: TokenPayload = { ...input, iat: now, exp: now + ttlSec };
  const head = b64urlEncodeStr(JSON.stringify(header));
  const body = b64urlEncodeStr(JSON.stringify(payload));
  const sig = await sign(`${head}.${body}`);
  return `${head}.${body}.${sig}`;
}

/** Verifikasi tanda tangan + kedaluwarsa. Mengembalikan payload bila valid, else null. */
export async function verifyToken(token: string | undefined | null): Promise<TokenPayload | null> {
  if (!token) return null;
  const parts = token.split(".");
  if (parts.length !== 3) return null;
  const [head, body, sig] = parts;

  const expected = await sign(`${head}.${body}`);
  // Perbandingan panjang-tetap sederhana untuk menghindari timing leak kasar.
  if (sig.length !== expected.length) return null;
  let diff = 0;
  for (let i = 0; i < sig.length; i++) diff |= sig.charCodeAt(i) ^ expected.charCodeAt(i);
  if (diff !== 0) return null;

  try {
    const payload = JSON.parse(b64urlDecodeStr(body)) as TokenPayload;
    const now = Math.floor(Date.now() / 1000);
    if (typeof payload.exp !== "number" || payload.exp < now) return null;
    if (payload.typ !== "access" && payload.typ !== "refresh") return null;
    return payload;
  } catch {
    return null;
  }
}
