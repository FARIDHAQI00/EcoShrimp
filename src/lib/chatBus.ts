// Bus sederhana untuk membuka panel Konsultasi AI SHRIMY dari mana saja
// (tombol nav, section beranda, contoh pertanyaan klik-able).
export const SHRIMY_EVENT = "shrimy:open";

export function openShrimy(question?: string) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(SHRIMY_EVENT, { detail: { question } }));
}
