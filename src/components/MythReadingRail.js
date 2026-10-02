"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Container } from "./atoms";

export function MythReadingRail({ items = [] }) {
  const [active, setActive] = useState(items[0]?.href || "relato");
  const [progress, setProgress] = useState(0);
  const itemIds = items.map((item) => item.href).join("|");

  useEffect(() => {
    const ids = itemIds.split("|").filter(Boolean);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const updateReadingState = () => {
      const start = document.getElementById("relato");
      const end = document.getElementById("reading-end");
      if (!start || !end) return;

      const readingCursor =
        window.scrollY +
        Math.min(240, Math.max(180, window.innerHeight * 0.34));
      let currentSection = sections[0].id;
      sections.forEach((section) => {
        const sectionY = section.getBoundingClientRect().top + window.scrollY;
        if (sectionY <= readingCursor) currentSection = section.id;
      });
      setActive(currentSection);

      const startY = start.getBoundingClientRect().top + window.scrollY;
      const endY = end.getBoundingClientRect().top + window.scrollY;
      const distance = Math.max(1, endY - startY - window.innerHeight * 0.35);
      const current = window.scrollY + window.innerHeight * 0.3 - startY;
      const nextProgress = Math.min(100, Math.max(0, (current / distance) * 100));
      setProgress(Math.round(nextProgress * 10) / 10);
    };

    updateReadingState();
    let frameId = 0;
    const scheduleUpdate = () => {
      if (frameId) return;
      frameId = requestAnimationFrame(() => {
        frameId = 0;
        updateReadingState();
      });
    };
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [itemIds]);

  return (
    <div
      className="sticky top-16 z-30 border-y border-line-100 bg-paper/95 backdrop-blur-md"
      data-testid="myth-reading-nav"
    >
      <span
        className="absolute inset-x-0 top-0 h-0.5 origin-left bg-jungle-600 transition-[width] duration-150 motion-reduce:transition-none"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />
      <Container size="atlas">
        <nav
          aria-label="Secciones del mito"
          className="atlas-rail flex min-h-14 items-stretch gap-7 overflow-x-auto overscroll-x-contain md:justify-center md:gap-12"
        >
          {items.map((item) => {
            const isActive = active === item.href;
            return (
              <Link
                key={item.href}
                href={`#${item.href}`}
                aria-current={isActive ? "location" : undefined}
                onClick={() => setActive(item.href)}
                className={cn(
                  "relative inline-flex min-h-14 shrink-0 items-center whitespace-nowrap border-b-2 px-0.5 pt-0.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-jungle-500/40",
                  isActive
                    ? "border-jungle-600 text-jungle-700"
                    : "border-transparent text-ink-500 hover:text-ink-900"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </Container>
    </div>
  );
}
