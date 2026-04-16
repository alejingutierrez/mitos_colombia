"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/Badge";
import { ButtonLink } from "./ui/Button";
import { GlassCard } from "./ui/GlassCard";

function clampOffset(value) {
  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed) || parsed < 0) return 0;
  return parsed;
}

function clampLimit(value, fallback = 24) {
  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed) || parsed < 1) return fallback;
  return Math.min(parsed, 96);
}

export function FilterableMythList({
  initialItems,
  initialTotal,
  initialLimit = 24,
  baseFilter,
  basePath,
  communityOptions = [],
  tagOptions = [],
  showCommunityFilter = true,
  showTagFilter = true,
  gridColumns = "lg:grid-cols-2",
}) {
  const router = useRouter();
  const pathname = usePathname();
  const urlSearchParams = useSearchParams();

  const [items, setItems] = useState(initialItems);
  const [total, setTotal] = useState(initialTotal);
  const [limit, setLimit] = useState(
    clampLimit(urlSearchParams.get("limit") || initialLimit, initialLimit)
  );
  const [offset, setOffset] = useState(
    clampOffset(urlSearchParams.get("offset") || 0)
  );
  const [q, setQ] = useState(urlSearchParams.get("q") || "");
  const [community, setCommunity] = useState(
    urlSearchParams.get("community") || ""
  );
  const [tag, setTag] = useState(urlSearchParams.get("tag") || "");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Track whether current state matches the initial server-rendered state.
  // If yes we skip the first network call entirely and avoid a flash.
  const isInitialRender = useRef(true);

  const hasFilters = Boolean(q || community || tag || offset !== 0);

  const fetchMyths = useCallback(
    async ({ nextQ, nextCommunity, nextTag, nextOffset, nextLimit }) => {
      setIsLoading(true);
      setError(null);
      try {
        const params = new URLSearchParams();
        if (baseFilter?.region) params.set("region", baseFilter.region);
        if (baseFilter?.community) params.set("community", baseFilter.community);
        if (baseFilter?.tag) params.set("tag", baseFilter.tag);
        if (nextQ) params.set("q", nextQ);
        if (nextCommunity) params.set("community", nextCommunity);
        if (nextTag) params.set("tag", nextTag);
        params.set("limit", String(nextLimit));
        params.set("offset", String(nextOffset));

        const response = await fetch(`/api/myths?${params.toString()}`, {
          headers: { accept: "application/json" },
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        setItems(Array.isArray(data.items) ? data.items : []);
        setTotal(Number(data.total) || 0);
      } catch (err) {
        setError("No se pudieron cargar los mitos. Intenta de nuevo.");
      } finally {
        setIsLoading(false);
      }
    },
    [baseFilter]
  );

  // Sync URL on filter changes (shallow, doesn't force SSR).
  const syncUrl = useCallback(
    ({ nextQ, nextCommunity, nextTag, nextOffset, nextLimit }) => {
      const params = new URLSearchParams();
      if (nextQ) params.set("q", nextQ);
      if (nextCommunity) params.set("community", nextCommunity);
      if (nextTag) params.set("tag", nextTag);
      if (nextOffset) params.set("offset", String(nextOffset));
      if (nextLimit && nextLimit !== initialLimit)
        params.set("limit", String(nextLimit));
      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, {
        scroll: false,
      });
    },
    [initialLimit, pathname, router]
  );

  // Trigger fetch when any filter dimension changes (except first render).
  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
    fetchMyths({
      nextQ: q,
      nextCommunity: community,
      nextTag: tag,
      nextOffset: offset,
      nextLimit: limit,
    });
  }, [q, community, tag, offset, limit, fetchMyths]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextQ = String(data.get("q") || "").trim();
    const nextCommunity = String(data.get("community") || "").trim();
    const nextTag = String(data.get("tag") || "").trim();
    setQ(nextQ);
    setCommunity(nextCommunity);
    setTag(nextTag);
    setOffset(0);
    syncUrl({
      nextQ,
      nextCommunity,
      nextTag,
      nextOffset: 0,
      nextLimit: limit,
    });
  };

  const clearFilters = () => {
    setQ("");
    setCommunity("");
    setTag("");
    setOffset(0);
    syncUrl({
      nextQ: "",
      nextCommunity: "",
      nextTag: "",
      nextOffset: 0,
      nextLimit: limit,
    });
  };

  const goToOffset = (nextOffset) => {
    const safe = clampOffset(nextOffset);
    setOffset(safe);
    syncUrl({
      nextQ: q,
      nextCommunity: community,
      nextTag: tag,
      nextOffset: safe,
      nextLimit: limit,
    });
    if (typeof window !== "undefined") {
      window.scrollTo({ top: window.scrollY, behavior: "instant" });
    }
  };

  const changeLimit = (nextLimit) => {
    const safe = clampLimit(nextLimit, initialLimit);
    setLimit(safe);
    setOffset(0);
    syncUrl({
      nextQ: q,
      nextCommunity: community,
      nextTag: tag,
      nextOffset: 0,
      nextLimit: safe,
    });
  };

  const currentPage = Math.floor(offset / limit) + 1;
  const totalPages = Math.max(1, Math.ceil(total / limit));
  const showingFrom = total === 0 ? 0 : offset + 1;
  const showingTo = Math.min(offset + items.length, total);

  return (
    <>
      <section className="container-shell mt-8">
        <GlassCard className="p-6">
          <form
            className="grid gap-4 md:grid-cols-[1.5fr_1fr_1fr_auto]"
            onSubmit={handleSubmit}
          >
            <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-ink-500">
              Buscar
              <input
                className="input-glass"
                name="q"
                defaultValue={q}
                placeholder="Nombre del mito o palabra clave"
                type="text"
              />
            </label>

            {showCommunityFilter && (
              <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-ink-500">
                Comunidad
                <select
                  className="input-glass"
                  name="community"
                  defaultValue={community}
                >
                  <option value="">Todas</option>
                  {communityOptions.map((c) => (
                    <option key={c.slug} value={c.slug}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </label>
            )}

            {showTagFilter && (
              <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-ink-500">
                Categoría
                <input
                  className="input-glass"
                  name="tag"
                  list="filterable-tag-options"
                  defaultValue={tag}
                  placeholder="Ej: Etiológico"
                />
                <datalist id="filterable-tag-options">
                  {tagOptions.map((item) => (
                    <option key={item.slug} value={item.name} />
                  ))}
                </datalist>
              </label>
            )}

            <div className="flex flex-col justify-end gap-3">
              <button
                type="submit"
                className="rounded-full bg-jungle-600 px-5 py-3 text-sm text-white shadow transition hover:bg-jungle-700"
              >
                Filtrar
              </button>
              {hasFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="rounded-full border border-ink-300 px-5 py-3 text-sm text-ink-700 transition hover:border-ink-500"
                >
                  Limpiar
                </button>
              )}
            </div>
          </form>
        </GlassCard>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-sm text-ink-700">
          <p aria-live="polite">
            {isLoading ? (
              <>Cargando…</>
            ) : total === 0 ? (
              <>Sin resultados</>
            ) : (
              <>
                Mostrando {showingFrom}–{showingTo} de {total} mitos
              </>
            )}
          </p>
          <div className="flex items-center gap-2">
            {community ? (
              <Badge>
                {communityOptions.find((c) => c.slug === community)?.name ||
                  community}
              </Badge>
            ) : null}
            {tag ? <Badge>{tag}</Badge> : null}
            {q ? <Badge>{q}</Badge> : null}
          </div>
        </div>
      </section>

      <section className="container-shell mt-8">
        {error ? (
          <GlassCard className="p-6 text-sm text-ember-600">{error}</GlassCard>
        ) : null}

        <div className={`grid gap-4 ${gridColumns}`}>
          {items.map((myth) => {
            const tags = (myth.tags_raw || "")
              .split(",")
              .map((item) => item.trim())
              .filter(Boolean)
              .slice(0, 4);

            return (
              <Link key={myth.slug} href={`/mitos/${myth.slug}`} className="group">
                <GlassCard className="flex h-full flex-col overflow-hidden p-0 transition hover:-translate-y-1 hover:shadow-lift">
                  {myth.image_url && (
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={myth.image_url}
                        alt={`Ilustración de ${myth.title}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                        className="object-cover transition duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 via-transparent to-transparent" />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge className="border-jungle-500/30 bg-jungle-500/10 text-jungle-600">
                        {myth.region}
                      </Badge>
                      {myth.community ? (
                        <Badge className="border-river-500/30 bg-river-500/10 text-river-600">
                          {myth.community}
                        </Badge>
                      ) : null}
                    </div>
                    <div>
                      <h3 className="font-display text-2xl text-ink-900 transition group-hover:text-river-600">
                        {myth.title}
                      </h3>
                      <p className="mt-2 text-sm text-ink-700 line-clamp-3">
                        {myth.excerpt}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((item) => (
                        <Badge key={item}>{item}</Badge>
                      ))}
                    </div>
                    <div className="mt-auto flex items-center justify-between text-xs uppercase tracking-[0.3em] text-ink-500">
                      <span>{myth.focus_keyword}</span>
                      <span className="text-river-600 opacity-0 transition group-hover:opacity-100">
                        Leer →
                      </span>
                    </div>
                  </div>
                </GlassCard>
              </Link>
            );
          })}

          {items.length === 0 && !isLoading ? (
            <GlassCard className="p-8 text-center text-ink-600 lg:col-span-2">
              <p>No hay mitos con esos filtros.</p>
              {hasFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-4 rounded-full border border-ink-300 px-4 py-2 text-sm text-ink-700 hover:border-ink-500"
                >
                  Limpiar filtros
                </button>
              )}
            </GlassCard>
          ) : null}
        </div>

        {totalPages > 1 && (
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-ink-500">
              <span>Por página:</span>
              {[12, 24, 48].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => changeLimit(option)}
                  className={`rounded-full px-3 py-1 transition ${
                    option === limit
                      ? "bg-ink-900 text-white"
                      : "bg-white/60 text-ink-700 hover:bg-white"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => goToOffset(Math.max(0, offset - limit))}
                disabled={offset === 0 || isLoading}
                className="rounded-full border border-ink-300 px-4 py-2 text-sm text-ink-700 transition hover:border-ink-500 disabled:opacity-40"
              >
                ← Anterior
              </button>
              <span className="text-xs text-ink-600">
                Página {currentPage} de {totalPages}
              </span>
              <button
                type="button"
                onClick={() => goToOffset(offset + limit)}
                disabled={offset + limit >= total || isLoading}
                className="rounded-full border border-ink-300 px-4 py-2 text-sm text-ink-700 transition hover:border-ink-500 disabled:opacity-40"
              >
                Siguiente →
              </button>
            </div>
          </div>
        )}

        <div className="mt-10 flex justify-center">
          <ButtonLink href={basePath} variant="outline">
            Ver todas las secciones
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
