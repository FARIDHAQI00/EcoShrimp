"use client";

import { openShrimy } from "@/lib/chatBus";
import { Sparkles, ArrowRight } from "./Icons";

// Contoh pertanyaan klik-able / tombol pembuka Konsultasi AI (PRD §5.7 AC).
export default function AskChip({
  question,
  label,
  variant = "chip",
}: {
  question?: string;
  label?: string;
  variant?: "chip" | "cta";
}) {
  if (variant === "cta") {
    return (
      <button className="btn btn-gradient btn-lg" onClick={() => openShrimy(question)}>
        {label ?? "Mulai Konsultasi Sekarang"} <ArrowRight size={18} />
      </button>
    );
  }
  return (
    <button className="consult-chip" onClick={() => openShrimy(question)}>
      <Sparkles size={16} /> {label ?? question}
    </button>
  );
}
