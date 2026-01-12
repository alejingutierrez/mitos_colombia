"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "../lib/utils";
import { GlassCard } from "./ui/GlassCard";
import { trackEvent } from "../lib/analytics";

const buttonBase =
  "inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/70 bg-white/80 text-ink-700 transition hover:bg-white hover:text-ink-900";
const iconClass = "h-4 w-4";

function clampText(text, maxLength) {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 3).trim()}...`;
}

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.52 3.48A11.86 11.86 0 0012.02 0C5.5 0 .2 5.3.2 11.82c0 2.08.54 4.11 1.58 5.9L0 24l6.45-1.7a11.85 11.85 0 005.57 1.42h.01c6.52 0 11.82-5.3 11.82-11.82 0-3.16-1.23-6.13-3.33-8.42zM12.02 21.6h-.01a9.8 9.8 0 01-4.99-1.38l-.36-.21-3.83 1.01 1.02-3.73-.24-.38a9.75 9.75 0 01-1.5-5.1c0-5.4 4.4-9.79 9.8-9.79 2.62 0 5.09 1.02 6.95 2.87a9.73 9.73 0 012.86 6.94c0 5.4-4.39 9.79-9.72 9.79zm5.36-7.3c-.29-.15-1.72-.85-1.99-.95-.27-.1-.47-.15-.67.15-.2.29-.77.95-.94 1.15-.17.2-.35.22-.64.07-.29-.15-1.23-.45-2.35-1.44-.87-.77-1.46-1.72-1.63-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.35.44-.52.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.57-.49-.49-.67-.5l-.57-.01c-.2 0-.52.07-.8.37-.27.29-1.05 1.02-1.05 2.5 0 1.47 1.08 2.89 1.23 3.09.15.2 2.12 3.23 5.13 4.52.72.31 1.28.5 1.71.64.72.23 1.37.2 1.89.12.58-.09 1.72-.7 1.96-1.37.24-.67.24-1.25.17-1.37-.07-.12-.27-.2-.56-.35z"
      />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
      <path
        fill="currentColor"
        d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.07 10.12 24v-8.44H7.08v-3.5h3.04V9.43c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.96h-1.51c-1.49 0-1.95.93-1.95 1.88v2.25h3.32l-.53 3.5h-2.79V24C19.61 23.07 24 18.1 24 12.07z"
      />
    </svg>
  );
}

function IconX() {
  return (
    <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
      <path
        fill="currentColor"
        d="M18.9 2H22l-6.78 7.74L23 22h-6.18l-4.84-6.21L5.7 22H2l7.28-8.32L1 2h6.34l4.37 5.61L18.9 2zm-1.1 18h1.73L7.25 4H5.42l12.38 16z"
      />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.56v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85v5.5H9.45V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.11 20.45H3.56V9h3.55v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.23 0z"
      />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.81.24 2.23.4a3.64 3.64 0 011.32.86 3.64 3.64 0 01.86 1.32c.16.42.35 1.06.4 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.81-.4 2.23a3.64 3.64 0 01-.86 1.32 3.64 3.64 0 01-1.32.86c-.42.16-1.06.35-2.23.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.81-.24-2.23-.4a3.64 3.64 0 01-1.32-.86 3.64 3.64 0 01-.86-1.32c-.16-.42-.35-1.06-.4-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.24-1.81.4-2.23a3.64 3.64 0 01.86-1.32 3.64 3.64 0 011.32-.86c.42-.16 1.06-.35 2.23-.4 1.27-.06 1.65-.07 4.85-.07zm0-2.16C8.73 0 8.33.01 7.05.07 5.78.13 4.78.36 3.97.68a5.8 5.8 0 00-2.1 1.36A5.8 5.8 0 00.51 4.14c-.32.81-.55 1.81-.61 3.08C-.16 8.5-.15 8.9-.15 12c0 3.1-.01 3.5.05 4.78.06 1.27.29 2.27.61 3.08.32.81.77 1.49 1.36 2.08a5.8 5.8 0 002.08 1.36c.81.32 1.81.55 3.08.61 1.28.06 1.68.07 4.78.07s3.5-.01 4.78-.07c1.27-.06 2.27-.29 3.08-.61a5.8 5.8 0 002.08-1.36 5.8 5.8 0 001.36-2.08c.32-.81.55-1.81.61-3.08.06-1.28.07-1.68.07-4.78s-.01-3.5-.07-4.78c-.06-1.27-.29-2.27-.61-3.08a5.8 5.8 0 00-1.36-2.08A5.8 5.8 0 0020.03.68c-.81-.32-1.81-.55-3.08-.61C15.67.01 15.27 0 12 0z"
      />
      <path
        fill="currentColor"
        d="M12 5.84A6.16 6.16 0 1018.16 12 6.17 6.17 0 0012 5.84zm0 10.16A4 4 0 1116 12a4 4 0 01-4 4z"
      />
      <circle cx="18.4" cy="5.6" r="1.44" fill="currentColor" />
    </svg>
  );
}

function IconLink() {
  return (
    <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
      <path
        fill="currentColor"
        d="M10.59 13.41a1 1 0 010-1.41l3.17-3.17a1 1 0 011.41 1.41l-3.17 3.17a1 1 0 01-1.41 0z"
      />
      <path
        fill="currentColor"
        d="M7.05 17.07a4 4 0 010-5.66l3.17-3.17a4 4 0 015.66 5.66l-.88.88a1 1 0 01-1.41-1.41l.88-.88a2 2 0 10-2.83-2.83l-3.17 3.17a2 2 0 102.83 2.83l.88-.88a1 1 0 111.41 1.41l-.88.88a4 4 0 01-5.66 0z"
      />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
      <path
        fill="currentColor"
        d="M9.5 16.2l-3.7-3.7a1 1 0 011.4-1.4l2.3 2.3 7.3-7.3a1 1 0 011.4 1.4l-8 8a1 1 0 01-1.4 0z"
      />
    </svg>
  );
}

export default function ShareBar({
  title,
  excerpt,
  slug,
  variant = "card",
}) {
  const fallbackBase = process.env.NEXT_PUBLIC_SITE_URL || "";
  const fallbackUrl = fallbackBase
    ? `${fallbackBase.replace(/\/+$/, "")}/mitos/${slug}`
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
      icon: <IconWhatsApp />,
      href: `https://api.whatsapp.com/send?text=${encodedText}%0A${encodedUrl}`,
    },
    {
      id: "facebook",
      label: "Facebook",
      icon: <IconFacebook />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      id: "x",
      label: "X",
      icon: <IconX />,
      href: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      icon: <IconLinkedIn />,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      id: "instagram",
      label: "Instagram",
      icon: <IconInstagram />,
      href: `https://www.instagram.com/?url=${encodedUrl}`,
    },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      trackEvent({
        action: "share",
        category: "myth",
        label: title,
        method: "copy_link",
      });
    } catch (error) {
      console.error("Error copying share URL:", error);
    }
  };

  const content = (
    <div className="flex flex-wrap items-center gap-3 md:justify-between">
      <div className="flex items-center gap-2">
        <span className="text-xs uppercase tracking-[0.35em] text-ink-500">
          Compartir
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {shareLinks.map((item) => (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className={buttonBase}
            aria-label={`Compartir en ${item.label}`}
            title={`Compartir en ${item.label}`}
            onClick={() =>
              trackEvent({
                action: "share",
                category: "myth",
                label: title,
                method: item.id,
              })
            }
          >
            {item.icon}
          </a>
        ))}
        <button
          type="button"
          onClick={handleCopy}
          className={cn(
            buttonBase,
            "border-ember-400/40 text-ember-500 hover:text-ember-600"
          )}
          aria-label="Copiar enlace"
          title="Copiar enlace"
        >
          {copied ? <IconCheck /> : <IconLink />}
        </button>
      </div>
    </div>
  );

  if (variant === "inline") {
    return <div className="mt-4 border-t border-white/60 pt-3">{content}</div>;
  }

  return <GlassCard className="p-4">{content}</GlassCard>;
}
