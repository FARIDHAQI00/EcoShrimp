"use client";

import { useEffect, useRef, useState } from "react";
import Shrimy from "./Shrimy";
import { Send, X } from "./Icons";
import { SHRIMY_EVENT } from "@/lib/chatBus";
import { GREETING, SUGGESTIONS, groundedFallback, type ChatMessage } from "@/lib/chatKnowledge";

const PROMPT_TEXT = "Tanya SHRIMY";

// Gelembung prompt di atas FAB — animasi ketik masuk lalu keluar huruf demi huruf, berulang.
function FabPrompt() {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<"in" | "hold" | "out" | "wait">("in");

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    if (phase === "in") {
      if (count < PROMPT_TEXT.length) t = setTimeout(() => setCount((c) => c + 1), 70);
      else t = setTimeout(() => setPhase("hold"), 1800);
    } else if (phase === "hold") {
      t = setTimeout(() => setPhase("out"), 1400);
    } else if (phase === "out") {
      if (count > 0) t = setTimeout(() => setCount((c) => c - 1), 40);
      else t = setTimeout(() => setPhase("wait"), 300);
    } else {
      t = setTimeout(() => setPhase("in"), 3600);
    }
    return () => clearTimeout(t);
  }, [phase, count]);

  return (
    <div className={`fab-prompt ${count > 0 ? "show" : ""}`} aria-hidden="true">
      <span className="fab-prompt-text">
        {PROMPT_TEXT.slice(0, count).split("").map((ch, i) => (
          <span key={i} className="fab-ch">{ch === " " ? " " : ch}</span>
        ))}
        <span className="fab-caret" />
      </span>
    </div>
  );
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: GREETING },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesRef = useRef(messages);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, loading, open]);

  const send = async (raw: string) => {
    const text = raw.trim();
    if (!text || loading) return;

    const next: ChatMessage[] = [...messagesRef.current, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      const reply = typeof data?.reply === "string" && data.reply ? data.reply : groundedFallback(text);
      setMessages((m) => [...m, { role: "assistant", content: reply }]);
    } catch {
      setMessages((m) => [...m, { role: "assistant", content: groundedFallback(text) }]);
    } finally {
      setLoading(false);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  };

  useEffect(() => {
    const onOpen = (e: Event) => {
      setOpen(true);
      const q = (e as CustomEvent).detail?.question as string | undefined;
      if (q) setTimeout(() => send(q), 120);
    };
    window.addEventListener(SHRIMY_EVENT, onOpen);
    return () => window.removeEventListener(SHRIMY_EVENT, onOpen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    send(input);
  };

  const showSuggestions = messages.length <= 1;

  return (
    <>
      {open && (
        <div className="chat-panel" role="dialog" aria-label="Konsultasi AI SHRIMY">
          <div className="chat-header">
            <span className="chat-avatar"><Shrimy size={34} /></span>
            <div>
              <div className="chat-title">SHRIMY</div>
              <div className="chat-status"><span className="dot" />Asisten AI EcoShrimp</div>
            </div>
            <button className="chat-close" onClick={() => setOpen(false)} aria-label="Tutup chat">
              <X size={18} />
            </button>
          </div>

          <div className="chat-body" ref={bodyRef}>
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.role === "user" ? "user" : "bot"}`}>{m.content}</div>
            ))}
            {loading && (
              <div className="msg bot typing" aria-label="SHRIMY sedang mengetik">
                <span /><span /><span />
              </div>
            )}
          </div>

          {showSuggestions && (
            <div className="chat-suggests">
              {SUGGESTIONS.map((s) => (
                <button key={s} className="suggest-chip" onClick={() => send(s)}>{s}</button>
              ))}
            </div>
          )}

          <form className="chat-input-row" onSubmit={onSubmit}>
            <input
              ref={inputRef}
              className="chat-input"
              placeholder="Tanya SHRIMY apa saja…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              aria-label="Pesan untuk SHRIMY"
            />
            <button className="chat-send" type="submit" disabled={loading || !input.trim()} aria-label="Kirim">
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      {!open && <FabPrompt />}

      <button
        className="chat-fab"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Tutup Konsultasi AI SHRIMY" : "Buka Konsultasi AI SHRIMY"}
        aria-expanded={open}
      >
        {open ? <X size={24} style={{ color: "#fff" }} /> : <Shrimy size={40} />}
        {!open && <span className="fab-badge">AI</span>}
      </button>
    </>
  );
}
