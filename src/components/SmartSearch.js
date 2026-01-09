"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import { GlassCard } from "./ui/GlassCard";
import { cn } from "../lib/utils";

const TYPE_STYLES = {
  myth: "border-jungle-500/30 bg-jungle-500/10 text-jungle-700",
  region: "border-river-500/30 bg-river-500/10 text-river-700",
  community: "border-ember-500/30 bg-ember-500/10 text-ember-700",
  tag: "border-ink-500/20 bg-ink-500/10 text-ink-700",
};

const TYPE_LABELS = {
  myth: "Mito",
  region: "Region",
  community: "Comunidad",
  tag: "Tema",
};

function buildSearchHref(query, fallback = "/mitos") {
  const trimmed = query.trim();
  if (!trimmed) return fallback;
  const params = new URLSearchParams({ q: trimmed });
  return `${fallback}?${params.toString()}`;
}

export default function SmartSearch({
  placeholder = "Buscar mito, region o tema",
  ctaLabel = "Explorar coleccion",
  className,
}) {
  const router = useRouter();
  const listboxId = useId();
  const containerRef = useRef(null);
  const requestIdRef = useRef(0);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleClick = (event) => {
      if (!containerRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    const trimmed = query.trim();
    if (trimmed.length < 2) {
      setSuggestions([]);
      setLoading(false);
      return;
    }

    const requestId = requestIdRef.current + 1;
    requestIdRef.current = requestId;
    const controller = new AbortController();
    const timeout = setTimeout(async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `/api/search?q=${encodeURIComponent(trimmed)}&limit=9`,
          { signal: controller.signal }
        );
        if (!response.ok) {
          throw new Error("Search failed");
        }
        const data = await response.json();
        if (requestIdRef.current === requestId) {
          setSuggestions(Array.isArray(data.suggestions) ? data.suggestions : []);
        }
      } catch (error) {
        if (error.name !== "AbortError" && requestIdRef.current === requestId) {
          setSuggestions([]);
        }
      } finally {
        if (requestIdRef.current === requestId) {
          setLoading(false);
        }
      }
    }, 240);

    return () => {
      controller.abort();
      clearTimeout(timeout);
    };
  }, [query]);

  const searchHref = buildSearchHref(query);
  const showDropdown = open && query.trim().length > 0;

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push(searchHref);
    setOpen(false);
  };

  return (
    <div ref={containerRef} className={cn("relative w-full", className)}>
      <form
        className="flex flex-col gap-3 sm:flex-row sm:items-center"
        action="/mitos"
        method="get"
        onSubmit={handleSubmit}
      >
        <label className="flex-1">
          <span className="sr-only">{placeholder}</span>
          <input
            className="input-glass"
            type="text"
            name="q"
            placeholder={placeholder}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onFocus={() => setOpen(true)}
            autoComplete="off"
            aria-autocomplete="list"
            aria-controls={listboxId}
            aria-expanded={showDropdown}
          />
        </label>
        <Button type="submit" className="whitespace-nowrap">
          {ctaLabel}
        </Button>
      </form>

      {showDropdown && (
        <div className="absolute left-0 right-0 z-20 mt-3">
          <GlassCard className="p-4 shadow-2xl">
            <div className="flex flex-col gap-2" role="listbox" id={listboxId}>
              {loading && (
                <div className="px-3 py-2 text-xs uppercase tracking-[0.3em] text-ink-500">
                  Buscando coincidencias...
                </div>
              )}

              {!loading && suggestions.length === 0 && (
                <div className="rounded-2xl border border-dashed border-ink-300/70 bg-white/70 px-4 py-3 text-sm text-ink-600">
                  Sin coincidencias claras. Prueba con otra palabra o explora el archivo.
                </div>
              )}

              {!loading && suggestions.length > 0 && (
                <div className="flex flex-col gap-2">
                  {suggestions.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      className="group rounded-2xl border border-transparent px-3 py-2 transition hover:border-white/80 hover:bg-white/70"
                      role="option"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-sm font-medium text-ink-900 transition group-hover:text-river-700">
                            {item.title}
                          </p>
                          {item.subtitle ? (
                            <p className="mt-1 text-xs text-ink-500">
                              {item.subtitle}
                            </p>
                          ) : null}
                        </div>
                        <Badge className={TYPE_STYLES[item.type] || TYPE_STYLES.tag}>
                          {TYPE_LABELS[item.type] || "Resultado"}
                        </Badge>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              <Link
                href={searchHref}
                className="mt-1 flex items-center justify-between rounded-2xl border border-ink-200/70 px-3 py-2 text-xs font-medium uppercase tracking-[0.3em] text-ink-600 transition hover:border-ink-300/80 hover:text-ink-900"
              >
                <span>Buscar en todo el archivo</span>
                <span className="text-river-600">→</span>
              </Link>
            </div>
          </GlassCard>
        </div>
      )}
    </div>
  );
}
