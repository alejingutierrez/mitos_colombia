"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "../lib/utils";
import { GlassCard } from "./ui/GlassCard";

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-ink-700 transition hover:bg-white";

function clampText(text, maxLength) {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 3).trim()}...`;
}

export default function ShareBar({
  title,
  excerpt,
  slug,
  variant = "card",
}) {
  const fallbackBase = process.env.NEXT_PUBLIC_SITE_URL || "";
  const fallbackUrl = fallbackBase
    ? `${fallbackBase.replace(/\\/$/, "")}/mitos/${slug}`
    : `/mitos/${slug}`;
  const [shareUrl, setShareUrl] = useState(fallbackUrl);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const currentUrl = window.location.href;
    if (currentUrl) {
      setShareUrl(currentUrl);
    }
  }, [slug]);

  const shareText = useMemo(() => {
    const base = excerpt ? `${title}. ${excerpt}` : title;
    return clampText(base, 180);
  }, [title, excerpt]);

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedText = encodeURIComponent(shareText);

  const shareLinks = [
    {
      id: "whatsapp",
      label: "WhatsApp",
      href: `https://api.whatsapp.com/send?text=${encodedText}%0A${encodedUrl}`,
    },
    {
      id: "facebook",
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      id: "x",
      label: "X",
      href: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Error copying share URL:", error);
    }
  };

  const content = (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="eyebrow">Compartir mito</p>
        <p className="mt-2 text-sm text-ink-600">
          Lleva este relato a otras voces y territorios.
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {shareLinks.map((item) => (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className={buttonBase}
          >
            {item.label}
          </a>
        ))}
        <button
          type="button"
          onClick={handleCopy}
          className={cn(buttonBase, "border-ember-400/40 text-ember-500")}
        >
          {copied ? "Copiado" : "Copiar enlace"}
        </button>
      </div>
    </div>
  );

  if (variant === "inline") {
    return <div className="mt-6 border-t border-white/60 pt-4">{content}</div>;
  }

  return <GlassCard className="p-6">{content}</GlassCard>;
}
