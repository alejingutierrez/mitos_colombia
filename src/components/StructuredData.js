"use client";

import Script from "next/script";

export default function StructuredData({ id, data }) {
  if (!data) return null;
  const payload = Array.isArray(data) ? data : [data];

  // Escape sequences that can break HTML parsing inside script tags
  const json = JSON.stringify(payload)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e");

  return (
    <Script
      id={id}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
