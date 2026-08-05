"use client";

import { useId, useState } from "react";
import { cn } from "../lib/utils";
import { Icon } from "./atoms";

export function VersionsDisclosure({ paragraphs = [] }) {
  const [open, setOpen] = useState(false);
  const contentId = useId();
  const countLabel = `${paragraphs.length} ${
    paragraphs.length === 1 ? "nota" : "notas"
  } sobre esta transmisión`;

  function toggleVersions() {
    const nextOpen = !open;
    setOpen(nextOpen);
    if (nextOpen) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.getElementById("versiones")?.scrollIntoView({ block: "start" });
        });
      });
    }
  }

  return (
    <div className="border-y border-line-200">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={toggleVersions}
        className="flex min-h-16 w-full items-center justify-between gap-6 py-4 text-left text-ink-900 transition-colors hover:text-jungle-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-jungle-500/40"
      >
        <span className="font-body text-base font-semibold">{countLabel}</span>
        <Icon
          name="chevron-down"
          size={20}
          className={cn(
            "shrink-0 text-ink-500 transition-transform duration-300 motion-reduce:transition-none",
            open && "rotate-180 text-jungle-700"
          )}
        />
      </button>
      <div id={contentId} hidden={!open}>
        <ol className="divide-y divide-line-100 border-t border-line-100 pb-2">
          {paragraphs.map((paragraph, index) => (
            <li key={`${index}-${paragraph.slice(0, 24)}`} className="grid gap-3 py-5 sm:grid-cols-[2.5rem_1fr]">
              <span className="font-editorial text-xl tabular-nums text-ink-500">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="max-w-3xl font-body text-base leading-[1.75] text-ink-700">
                {paragraph}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
