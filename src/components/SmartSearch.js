"use client";

import { useEffect, useId, useRef, useState, useLayoutEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { trackEvent } from "../lib/analytics";

const TYPE_LABELS = {
  myth: "Mito",
  region: "Región",
  community: "Comunidad",
  tag: "Tema",
};

const TYPE_DOT = {
  myth: "#1e785e",
  region: "#23629e",
  community: "#bd8642",
  tag: "#3a403e",
};

const SUGGESTED_QUERIES = [
  "Mohán",
  "Bachué",
  "Sierra Nevada",
  "Guardianes del agua",
  "Selva amazónica",
];

function buildSearchHref(query, fallback = "/mitos") {
  const trimmed = query.trim();
  if (!trimmed) return fallback;
  const params = new URLSearchParams({ q: trimmed });
  return `${fallback}?${params.toString()}`;
}

function SearchIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

function ClearIcon({ size = 14 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function Spinner({ size = 16 }) {
  return (
    <span
      className="v3s-spinner"
      style={{ width: size, height: size }}
      aria-hidden="true"
    />
  );
}

export default function SmartSearch({
  placeholder = "Busca por mito, región, pueblo o criatura…",
  ctaLabel = "Buscar",
  className,
}) {
  const router = useRouter();
  const listboxId = useId();
  const wrapRef = useRef(null);
  const inputRef = useRef(null);
  const requestIdRef = useRef(0);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const [anchorRect, setAnchorRect] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Track mobile breakpoint
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Recompute anchor rect for fixed dropdown
  const updateAnchorRect = () => {
    if (!wrapRef.current) return;
    const r = wrapRef.current.getBoundingClientRect();
    setAnchorRect({
      top: r.bottom,
      left: r.left,
      width: r.width,
    });
  };

  useLayoutEffect(() => {
    if (!open) return;
    updateAnchorRect();
    const onScroll = () => updateAnchorRect();
    window.addEventListener("scroll", onScroll, true);
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", onScroll);
    };
  }, [open]);

  // Outside click + Escape close
  useEffect(() => {
    const onClick = (e) => {
      if (!wrapRef.current?.contains(e.target)) {
        const portal = document.getElementById("v3s-portal");
        if (portal && portal.contains(e.target)) return;
        setOpen(false);
      }
    };
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        inputRef.current?.blur();
      }
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  // Fetch suggestions debounced
  useEffect(() => {
    const trimmed = query.trim();
    if (trimmed.length < 2) {
      setSuggestions([]);
      setLoading(false);
      setActiveIdx(-1);
      return;
    }

    const requestId = requestIdRef.current + 1;
    requestIdRef.current = requestId;
    const controller = new AbortController();
    setLoading(true);
    const timeout = setTimeout(async () => {
      try {
        const response = await fetch(
          `/api/search?q=${encodeURIComponent(trimmed)}&limit=6`,
          { signal: controller.signal }
        );
        if (!response.ok) throw new Error("Search failed");
        const data = await response.json();
        if (requestIdRef.current === requestId) {
          setSuggestions(
            Array.isArray(data.suggestions) ? data.suggestions : []
          );
          setActiveIdx(-1);
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
    }, 220);

    return () => {
      controller.abort();
      clearTimeout(timeout);
    };
  }, [query]);

  const navigate = (href, label) => {
    setSubmitting(true);
    if (label) {
      trackEvent({
        action: "search",
        category: "site",
        label,
        search_term: label,
      });
    }
    setOpen(false);
    inputRef.current?.blur();
    router.push(href);
  };

  // Reset submitting flag on URL change (route change happened)
  useEffect(() => {
    if (!submitting) return;
    const t = setTimeout(() => setSubmitting(false), 1500);
    return () => clearTimeout(t);
  }, [submitting]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (activeIdx >= 0 && suggestions[activeIdx]) {
      const item = suggestions[activeIdx];
      navigate(item.href, item.title);
      return;
    }
    navigate(buildSearchHref(trimmed), trimmed || "empty");
  };

  const handleKeyDown = (e) => {
    if (!open) return;
    const max = suggestions.length;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((i) => (i + 1) % Math.max(max, 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => (i - 1 + max) % Math.max(max, 1));
    }
  };

  const showDropdown = open;
  const trimmedQuery = query.trim();
  const hasQuery = trimmedQuery.length > 0;

  // Dropdown content (shared between desktop fixed and mobile sheet)
  const dropdownContent = (
    <div className="v3s-dropdown-inner" role="listbox" id={listboxId}>
      {!hasQuery ? (
        <div className="v3s-empty">
          <div className="v3s-eyebrow">Sugerencias</div>
          <div className="v3s-suggestions">
            {SUGGESTED_QUERIES.map((s) => (
              <button
                key={s}
                type="button"
                className="v3s-chip"
                onMouseDown={(e) => {
                  e.preventDefault();
                  setQuery(s);
                  inputRef.current?.focus();
                }}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="v3s-hint">
            Escribe al menos 2 letras o presiona{" "}
            <kbd className="v3s-kbd">Enter</kbd> para abrir el archivo completo.
          </div>
        </div>
      ) : loading && suggestions.length === 0 ? (
        <div className="v3s-loading">
          <Spinner size={18} />
          <span>Buscando “{trimmedQuery}”…</span>
        </div>
      ) : suggestions.length === 0 ? (
        <div className="v3s-noresults">
          <div className="v3s-eyebrow">Sin coincidencias claras</div>
          <p>
            Intenta con otra palabra o presiona <kbd className="v3s-kbd">Enter</kbd>{" "}
            para buscar en todo el archivo.
          </p>
        </div>
      ) : (
        <>
          <div className="v3s-eyebrow v3s-results-eyebrow">
            {suggestions.length} resultado{suggestions.length === 1 ? "" : "s"}
            {loading ? " · actualizando…" : ""}
          </div>
          <ul className="v3s-list">
            {suggestions.map((item, i) => (
              <li key={item.id || `${item.type}-${i}`}>
                <Link
                  href={item.href}
                  role="option"
                  aria-selected={i === activeIdx}
                  className={`v3s-item ${i === activeIdx ? "is-active" : ""}`}
                  onMouseEnter={() => setActiveIdx(i)}
                  onClick={() => {
                    trackEvent({
                      action: "select_content",
                      category: "search_suggestion",
                      label: item.title,
                      content_type: item.type,
                    });
                    setSubmitting(true);
                    setOpen(false);
                  }}
                >
                  <span
                    className="v3s-item-dot"
                    style={{
                      background: TYPE_DOT[item.type] || TYPE_DOT.tag,
                    }}
                  />
                  <div className="v3s-item-body">
                    <div className="v3s-item-title">{item.title}</div>
                    {item.subtitle ? (
                      <div className="v3s-item-sub">{item.subtitle}</div>
                    ) : null}
                  </div>
                  <span className="v3s-item-type">
                    {TYPE_LABELS[item.type] || "Resultado"}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}

      <Link
        href={buildSearchHref(query)}
        className="v3s-allcta"
        onMouseDown={(e) => {
          e.preventDefault();
          navigate(buildSearchHref(query), trimmedQuery || "empty");
        }}
      >
        <span>
          {hasQuery
            ? `Buscar "${trimmedQuery}" en todo el archivo`
            : "Explorar todos los mitos"}
        </span>
        <span className="v3s-arrow">→</span>
      </Link>
    </div>
  );

  return (
    <div ref={wrapRef} className={`v3s ${className || ""}`}>
      <form className="v3s-form" onSubmit={handleSubmit} role="search">
        <span className="v3s-icon" aria-hidden="true">
          <SearchIcon size={18} />
        </span>
        <input
          ref={inputRef}
          className="v3s-input"
          type="text"
          name="q"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          aria-autocomplete="list"
          aria-controls={listboxId}
          aria-expanded={showDropdown}
        />
        {query ? (
          <button
            type="button"
            className="v3s-clear"
            aria-label="Limpiar búsqueda"
            onClick={() => {
              setQuery("");
              setSuggestions([]);
              inputRef.current?.focus();
            }}
          >
            <ClearIcon />
          </button>
        ) : null}
        <button
          type="submit"
          className="v3s-submit"
          disabled={submitting}
          aria-label={ctaLabel}
        >
          {submitting ? (
            <>
              <Spinner size={14} />
              <span>Cargando</span>
            </>
          ) : (
            <span>{ctaLabel}</span>
          )}
        </button>
      </form>

      {showDropdown && !isMobile && anchorRect ? (
        <div
          id="v3s-portal"
          className="v3s-dropdown v3s-dropdown--desktop"
          style={{
            top: anchorRect.top + 10,
            left: anchorRect.left,
            width: anchorRect.width,
          }}
          onMouseDown={(e) => e.stopPropagation()}
        >
          {dropdownContent}
        </div>
      ) : null}

      {showDropdown && isMobile ? (
        <div
          id="v3s-portal"
          className="v3s-dropdown v3s-dropdown--mobile"
          onMouseDown={(e) => e.stopPropagation()}
        >
          {dropdownContent}
        </div>
      ) : null}
    </div>
  );
}
