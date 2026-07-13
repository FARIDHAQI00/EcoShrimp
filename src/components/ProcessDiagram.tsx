"use client";

import { useState } from "react";
import type { ProcessStep } from "@/lib/data";

// Diagram Proses Interaktif (Design System §9.8) — daftar tahap klik-able (kiri)
// + panel detail sticky dengan progress bar (kanan).
export default function ProcessDiagram({ steps }: { steps: ProcessStep[] }) {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <div className="proc-grid">
      <div className="proc-list" role="tablist" aria-label="Tahap produksi kitosan">
        {steps.map((s, i) => (
          <button
            key={s.id}
            role="tab"
            aria-selected={i === active}
            className={`proc-step ${i === active ? "active" : ""}`}
            onClick={() => setActive(i)}
          >
            <span className="proc-rail">
              <span className="proc-dot">{i + 1}</span>
              <span className="proc-connector" />
            </span>
            <span>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </span>
          </button>
        ))}
      </div>

      <div className="proc-panel" role="tabpanel" aria-live="polite">
        <span className="tag tag-brand">{step.tag}</span>
        <h3>{step.title}</h3>
        <p className="text-secondary mt-2">{step.desc}</p>
        <div className="proc-detail">{step.detail}</div>
        <div className="flex items-center justify-between mt-4" style={{ fontSize: "var(--text-caption)" }}>
          <span className="text-muted">Kemajuan proses</span>
          <span className="price">{step.progress}%</span>
        </div>
        <div className="progress-track mt-2">
          <div className="progress-fill" style={{ width: `${step.progress}%` }} />
        </div>
      </div>
    </div>
  );
}
