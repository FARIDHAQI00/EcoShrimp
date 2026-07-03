import { NextResponse } from "next/server";
import {
  SHRIMY_SYSTEM_PROMPT,
  groundedFallback,
  type ChatMessage,
} from "@/lib/chatKnowledge";

export const runtime = "nodejs";

/**
 * POST /api/chat — Konsultasi AI SHRIMY.
 * Ditenagai Claude API (Anthropic / adaCODE) bila ANTHROPIC_API_KEY tersedia.
 * Riwayat percakapan dikirim utuh tiap permintaan (PRD §5.4).
 * Bila kunci tidak ada atau API gagal → fallback grounded yang ramah + arahan WhatsApp.
 */
export async function POST(req: Request) {
  let messages: ChatMessage[] = [];
  try {
    const body = await req.json();
    messages = Array.isArray(body?.messages) ? body.messages : [];
  } catch {
    return NextResponse.json({ reply: groundedFallback(""), source: "fallback" });
  }

  const lastUser =
    [...messages].reverse().find((m) => m.role === "user")?.content ?? "";

  const apiKey = process.env.ANTHROPIC_API_KEY;
  const baseUrl = (process.env.ANTHROPIC_BASE_URL || "https://api.anthropic.com").replace(/\/$/, "");
  const model = process.env.ANTHROPIC_MODEL || "claude-sonnet-4-6";

  // Tanpa kunci → langsung fallback grounded (tetap 24/7, tetap akurat).
  if (!apiKey) {
    return NextResponse.json({ reply: groundedFallback(lastUser), source: "fallback" });
  }

  // Batasi riwayat yang dikirim & pastikan format valid untuk Messages API.
  const apiMessages = messages
    .filter((m) => (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
    .slice(-20)
    .map((m) => ({ role: m.role, content: m.content }));

  if (apiMessages.length === 0 || apiMessages[apiMessages.length - 1].role !== "user") {
    return NextResponse.json({ reply: groundedFallback(lastUser), source: "fallback" });
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12000);

    const resp = await fetch(`${baseUrl}/v1/messages`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model,
        max_tokens: 1024,
        system: SHRIMY_SYSTEM_PROMPT,
        messages: apiMessages,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!resp.ok) {
      return NextResponse.json({ reply: groundedFallback(lastUser), source: "fallback" });
    }

    const data = await resp.json();
    const reply = Array.isArray(data?.content)
      ? data.content
          .filter((b: { type?: string }) => b?.type === "text")
          .map((b: { text?: string }) => b?.text ?? "")
          .join("")
          .trim()
      : "";

    if (!reply) {
      return NextResponse.json({ reply: groundedFallback(lastUser), source: "fallback" });
    }

    return NextResponse.json({ reply, source: "claude" });
  } catch {
    // Penanganan galat ramah: fallback + arahan WhatsApp (sudah ada di groundedFallback).
    return NextResponse.json({ reply: groundedFallback(lastUser), source: "fallback" });
  }
}
