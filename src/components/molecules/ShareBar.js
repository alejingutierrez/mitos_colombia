"use client";

import { useState } from "react";
import { cn } from "../../lib/utils";
import { Icon } from "../atoms/Icon";
import { IconButton } from "../atoms/IconButton";

/**
 * Molécula · ShareBar
 * Acciones de compartir: copiar enlace (con feedback "Copiado") y compartir
 * nativo. Client — usa navigator.clipboard / navigator.share.
 */
export function ShareBar({ url, title = "", label = "Compartir", className }) {
  const [copied, setCopied] = useState(false);

  async function copyLink() {
    try {
      const link = url || (typeof window !== "undefined" ? window.location.href : "");
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* noop */
    }
  }

  async function nativeShare() {
    const link = url || (typeof window !== "undefined" ? window.location.href : "");
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, url: link });
      } catch {
        /* cancelado */
      }
    } else {
      copyLink();
    }
  }

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className="mr-1 text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
        {label}
      </span>
      <button
        type="button"
        onClick={copyLink}
        className={cn(
          "inline-flex h-9 items-center gap-1.5 rounded border border-line-200 bg-white px-3 text-sm text-ink-900 transition-colors hover:bg-mist-50",
          copied && "border-jungle-500/30 bg-jungle-tint text-jungle-700"
        )}
      >
        <Icon name={copied ? "check" : "link"} size={16} />
        {copied ? "Copiado" : "Copiar enlace"}
      </button>
      <IconButton icon="share" label="Compartir" variant="secondary" onClick={nativeShare} />
    </div>
  );
}
