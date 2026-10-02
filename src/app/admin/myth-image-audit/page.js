"use client";

/* eslint-disable @next/next/no-img-element */

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import AdminLayout from "../../../components/AdminLayout";
import { Badge } from "../../../components/ui/Badge";
import { Button } from "../../../components/ui/Button";
import { GlassCard } from "../../../components/ui/GlassCard";

const PAGE_SIZE = 10;
const decisionOptions = [
  { value: "keep", label: "Conservar", active: "bg-jungle-700 text-white border-jungle-700" },
  { value: "repeat", label: "Repetir", active: "bg-river-600 text-white border-river-600" },
  { value: "discard", label: "Descartar", active: "bg-ember-500 text-white border-ember-500" },
];

function SummaryCard({ label, value, detail, tone = "ink" }) {
  const tones = {
    ink: "text-ink-900",
    jungle: "text-jungle-700",
    earth: "text-river-700",
    ember: "text-ember-500",
    river: "text-river-700",
  };
  return (
    <div className="rounded-2xl border border-ink-500/10 bg-white/85 p-4 shadow-sm">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-500">
        {label}
      </p>
      <p className={`mt-2 font-display text-3xl ${tones[tone] || tones.ink}`}>{value}</p>
      {detail ? <p className="mt-1 text-xs leading-5 text-ink-500">{detail}</p> : null}
    </div>
  );
}

function CandidateCard({ candidate, mythSlug, savingKey, onDecision }) {
  const key = `${mythSlug}:${candidate.id}`;
  const saving = savingKey === key;
  const sourceLabels = {
    "database-current": "Base actual",
    "editorial-database": "Editorial",
    "blob-history": "Blob histórico",
    "local-manifest": "Manifiesto local",
    "local-file": "Archivo local",
    "missing-slot": "Espacio vacío",
  };
  return (
    <article className="overflow-hidden rounded-2xl border border-ink-500/10 bg-white shadow-sm">
      <div
        className={`relative flex items-center justify-center overflow-hidden bg-ink-900/5 ${
          candidate.orientation === "vertical" ? "aspect-[4/5]" : "aspect-[16/10]"
        }`}
      >
        {candidate.placeholder ? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 border-2 border-dashed border-river-500/30 bg-river-tint/40 p-6 text-center">
            <span className="text-4xl text-river-500">+</span>
            <div>
              <p className="font-display text-xl text-ink-900">Imagen vacía</p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-ink-500">
                Falta {candidate.orientation}
              </p>
            </div>
          </div>
        ) : (
          <a href={candidate.imageUrl} target="_blank" rel="noreferrer" className="block h-full w-full">
            <img
              src={candidate.imageUrl}
              alt={`Candidata ${candidate.orientation} para ${mythSlug}`}
              loading="lazy"
              className="h-full w-full object-contain"
            />
          </a>
        )}
        <div className="absolute left-2 top-2 flex max-w-[calc(100%-1rem)] flex-wrap gap-1.5">
          <span className="rounded-full bg-ink-900/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
            {candidate.orientation}
          </span>
          {candidate.currentRoles.map((role) => (
            <span
              key={role}
              className="rounded-full bg-river-700 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white"
            >
              {role}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-3 p-3">
        <div className="flex flex-wrap gap-1.5">
          {candidate.sources.map((source) => (
            <span
              key={source}
              className="rounded-full bg-mist-50 px-2 py-1 text-[10px] font-semibold text-ink-500"
            >
              {sourceLabels[source] || source}
            </span>
          ))}
          {candidate.model ? (
            <span className="rounded-full bg-jungle-tint px-2 py-1 text-[10px] font-semibold text-jungle-700">
              {candidate.model} · {candidate.quality || "calidad sin dato"}
            </span>
          ) : null}
          {candidate.provenanceStatus ? (
            <span
              className={`rounded-full px-2 py-1 text-[10px] font-semibold ${
                candidate.provenanceStatus === "approved"
                  ? "bg-jungle-tint text-jungle-700"
                  : "bg-[rgba(189,134,66,0.12)] text-ember-500"
              }`}
            >
              QA {candidate.provenanceStatus}
            </span>
          ) : null}
        </div>

        {candidate.sharedAcrossMythCount > 1 ? (
          <details className="rounded-lg bg-[rgba(189,134,66,0.12)] px-3 py-2 text-xs text-ember-500">
            <summary className="cursor-pointer font-semibold">
              Mismo archivo detectado en {candidate.sharedAcrossMythCount} mitos
            </summary>
            <p className="mt-2 leading-5">
              Solo un mito puede conservarlo. En los demás debe marcarse Repetir o Descartar.
            </p>
            <p className="mt-2 break-words leading-5">{candidate.sharedAcrossSlugs.join(", ")}</p>
          </details>
        ) : null}

        {candidate.ownershipConflict ? (
          <div className="rounded-lg border border-red-500/25 bg-red-50 px-3 py-2 text-xs text-red-700">
            <strong>Conflicto de propiedad:</strong> se conservó para {candidate.keepOwners.length} mitos. No cuenta como válida hasta dejar un solo propietario.
          </div>
        ) : candidate.keepOwners.length === 1 ? (
          <div
            className={`rounded-lg px-3 py-2 text-xs ${
              candidate.ownedByOtherMyth
                ? "bg-[rgba(189,134,66,0.12)] text-ember-500"
                : "bg-jungle-tint text-jungle-700"
            }`}
          >
            {candidate.ownedByOtherMyth
              ? `Propiedad asignada a ${candidate.keepOwners[0].slug}; aquí no puede conservarse.`
              : "Propiedad única asignada a este mito."}
          </div>
        ) : candidate.sharedAcrossMyths ? (
          <div className="rounded-lg bg-mist-50 px-3 py-2 text-xs text-ink-500">
            Sin propietario todavía: el primer mito que la conserve bloqueará ese archivo en los demás.
          </div>
        ) : null}

        <div className="grid grid-cols-3 gap-1.5">
          {decisionOptions.map((option) => {
            const label = candidate.placeholder && option.value === "repeat" ? "Crear" : option.label;
            const selected = candidate.decision === option.value;
            const ownershipBlocked =
              option.value === "keep" &&
              candidate.ownedByOtherMyth &&
              !selected;
            return (
              <button
                key={option.value}
                type="button"
                disabled={
                  saving ||
                  (candidate.placeholder && option.value !== "repeat") ||
                  ownershipBlocked
                }
                onClick={() => onDecision(mythSlug, candidate.id, selected ? null : option.value)}
                className={`rounded-lg border px-2 py-2 text-[11px] font-semibold transition disabled:cursor-not-allowed disabled:opacity-30 ${
                  selected
                    ? option.active
            : "border-ink-500/15 bg-white text-ink-700 hover:bg-mist-50"
                }`}
              >
                {saving ? "…" : label}
              </button>
            );
          })}
        </div>
      </div>
    </article>
  );
}

function MythCard({ myth, savingKey, onDecision }) {
  const realCandidates = myth.candidates.filter((candidate) => !candidate.placeholder);
  return (
    <GlassCard className="overflow-hidden p-0">
      <header className="border-b border-ink-500/10 bg-white/70 p-5">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <Badge>{myth.published ? "Publicado" : "Nuevo pendiente"}</Badge>
              <Badge>{realCandidates.length} candidatos mostrados</Badge>
              {myth.hasSharedCandidates ? <Badge>activos compartidos</Badge> : null}
              {myth.selection.ownershipConflicts ? <Badge>conflicto de propiedad</Badge> : null}
              {myth.selection.ready ? <Badge>mínimo único cubierto</Badge> : null}
              {myth.selection.complete ? <Badge>revisión completa</Badge> : null}
            </div>
            <h2 className="mt-3 font-display text-2xl text-ink-900">{myth.title}</h2>
            <p className="mt-1 break-words text-xs font-semibold uppercase tracking-[0.12em] text-ink-500">
              {myth.slug}
            </p>
            <p className="mt-2 text-sm text-ink-500">{myth.categoryPath || `${myth.region} · ${myth.community}`}</p>
          </div>
          <div className="grid min-w-[300px] grid-cols-5 gap-2 text-center text-xs">
            <div className="rounded-xl bg-jungle-tint p-2">
              <strong className="block text-lg text-jungle-700">{myth.selection.kept}</strong>
              conservar
            </div>
            <div className="rounded-xl bg-river-tint p-2">
              <strong className="block text-lg text-river-700">{myth.selection.repeat}</strong>
              repetir
            </div>
            <div className="rounded-xl bg-[rgba(189,134,66,0.12)] p-2">
              <strong className="block text-lg text-ember-500">{myth.selection.discarded}</strong>
              descartar
            </div>
            <div className="rounded-xl bg-jungle-tint p-2">
              <strong className="block text-lg text-jungle-700">{myth.selection.validSelected}</strong>
              válidas únicas
            </div>
            <div className="rounded-xl bg-mist-50 p-2">
              <strong className="block text-lg text-ink-900">
                {myth.selection.reviewed}/{myth.selection.total}
              </strong>
              revisadas
            </div>
          </div>
        </div>
      </header>
      <div className="grid gap-4 p-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {myth.candidates.map((candidate) => (
          <CandidateCard
            key={candidate.id}
            candidate={candidate}
            mythSlug={myth.slug}
            savingKey={savingKey}
            onDecision={onDecision}
          />
        ))}
      </div>
    </GlassCard>
  );
}

export default function MythImageAuditPage() {
  const router = useRouter();
  const [auth, setAuth] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [savingKey, setSavingKey] = useState("");
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [filter, setFilter] = useState("all");
  const [page, setPage] = useState(1);

  const loadInventory = useCallback(async (authToken, refresh = false) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `/api/admin/myth-image-audit${refresh ? "?refresh=1" : ""}`,
        { headers: { Authorization: `Basic ${authToken}` } },
      );
      if (response.status === 401) {
        localStorage.removeItem("admin_auth");
        router.push("/admin");
        return;
      }
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || "No se pudo cargar el inventario.");
      setData(payload);
    } catch (loadError) {
      setError(loadError.message);
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    const savedAuth = localStorage.getItem("admin_auth");
    if (!savedAuth) {
      router.push("/admin");
      return;
    }
    setAuth(savedAuth);
    loadInventory(savedAuth);
  }, [loadInventory, router]);

  const regions = useMemo(
    () => [...new Set((data?.myths || []).map((myth) => myth.region))].sort((a, b) => a.localeCompare(b, "es")),
    [data],
  );

  const filteredMyths = useMemo(() => {
    const query = search.trim().toLowerCase();
    return (data?.myths || []).filter((myth) => {
      if (region && myth.region !== region) return false;
      if (
        query &&
        !`${myth.title} ${myth.slug} ${myth.categoryPath} ${myth.community}`
          .toLowerCase()
          .includes(query)
      ) {
        return false;
      }
      const realCount = myth.candidates.filter((candidate) => !candidate.placeholder).length;
      if (filter === "empty" && realCount !== 0) return false;
      if (filter === "many" && realCount < 3) return false;
      if (filter === "shared" && !myth.hasSharedCandidates) return false;
      if (filter === "conflicts" && !myth.selection.ownershipConflicts) return false;
      if (filter === "unreviewed" && myth.selection.complete) return false;
      if (filter === "ready" && !myth.selection.ready) return false;
      if (filter === "needs-plan" && myth.selection.ready) return false;
      return true;
    });
  }, [data, filter, region, search]);

  const totalPages = Math.max(1, Math.ceil(filteredMyths.length / PAGE_SIZE));
  const visibleMyths = filteredMyths.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  useEffect(() => {
    setPage(1);
  }, [filter, region, search]);

  const saveDecision = async (slug, candidateId, decision) => {
    if (!auth) return;
    const key = `${slug}:${candidateId}`;
    setSavingKey(key);
    setError("");
    try {
      const response = await fetch("/api/admin/myth-image-audit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${auth}`,
        },
        body: JSON.stringify({ slug, candidateId, decision }),
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || "No se pudo guardar la decisión.");
      await loadInventory(auth);
    } catch (saveError) {
      setError(saveError.message);
    } finally {
      setSavingKey("");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_auth");
    router.push("/admin");
  };

  return (
    <AdminLayout onLogout={handleLogout}>
      <div className="space-y-6">
        <GlassCard className="overflow-hidden p-0">
          <div className="bg-gradient-to-br from-ink-900 via-jungle-700 to-river-700 p-6 text-white lg:p-8">
            <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ember-400">
                  Auditoría local · no genera imágenes
                </p>
                <h1 className="mt-3 max-w-4xl font-display text-4xl leading-tight lg:text-5xl">
                  Todas las imágenes producidas, mito por mito
                </h1>
                <p className="mt-4 max-w-3xl text-sm leading-6 text-white/75">
                  Cada archivo tiene propiedad única global: solo puede conservarse para un mito. En los demás debe repetirse o descartarse. El cierre exige como mínimo una horizontal y una vertical sin conflictos.
                </p>
                {data ? (
                  <p className="mt-4 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/90">
                    {data.summary.decisions} decisiones guardadas localmente · artifacts/myth-image-audit/decisions.json
                  </p>
                ) : null}
              </div>
              <Button
                variant="secondary"
                onClick={() => auth && loadInventory(auth, true)}
                disabled={loading}
              >
                {loading ? "Actualizando…" : "Volver a escanear todo"}
              </Button>
            </div>
          </div>
        </GlassCard>

        {error ? (
          <div className="rounded-xl border border-ember-500/20 bg-[rgba(189,134,66,0.12)] p-4 text-sm text-ember-500">
            {error}
          </div>
        ) : null}

        {data ? (
          <>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-6">
              <SummaryCard label="Universo" value={data.summary.totalMyths} detail={`${data.summary.publishedMyths} publicados + ${data.summary.plannedMyths} nuevos`} />
              <SummaryCard label="Asignaciones actuales" value={data.summary.currentImageAssignments} detail="Los reusos no cuentan como activos nuevos" tone="river" />
              <SummaryCard label="Activos únicos actuales" value={data.summary.currentDistinctImages} detail={`${data.summary.currentDuplicateAssignments} asignaciones duplicadas quedan fuera`} tone="earth" />
              <SummaryCard label="Conflictos de propiedad" value={data.summary.mythsWithOwnershipConflicts} detail={`${data.summary.conflictingAssets} archivos conservados para más de un mito`} tone="ember" />
              <SummaryCard label="Mitos con 3 o más opciones" value={data.summary.mythsWithThreeOrMore} detail={`${data.summary.producedUniqueImages} archivos únicos vinculados`} tone="jungle" />
              <SummaryCard label="Sin imagen encontrada" value={data.summary.emptyMyths} detail={`${data.summary.unassignedLocalAssets} archivos locales sin slug`} tone="ember" />
            </div>

            <GlassCard className="p-5">
              <div className="grid gap-4 lg:grid-cols-[minmax(260px,1fr)_220px_240px_auto] lg:items-end">
                <label className="block">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">Buscar mito o slug</span>
                  <input
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Ej. Bachué, wayuu, Mohán…"
                    className="w-full rounded-xl border-ink-500/15 bg-white text-sm"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">Región</span>
                  <select value={region} onChange={(event) => setRegion(event.target.value)} className="w-full rounded-xl border-ink-500/15 bg-white text-sm">
                    <option value="">Todas</option>
                    {regions.map((item) => <option key={item} value={item}>{item}</option>)}
                  </select>
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">Estado</span>
                  <select value={filter} onChange={(event) => setFilter(event.target.value)} className="w-full rounded-xl border-ink-500/15 bg-white text-sm">
                    <option value="all">Todos los mitos</option>
                    <option value="empty">Sin imágenes</option>
                    <option value="many">Tres o más opciones</option>
                    <option value="shared">Con activos compartidos</option>
                    <option value="conflicts">Conflictos de propiedad</option>
                    <option value="unreviewed">Revisión incompleta</option>
                    <option value="ready">Mínimo ya seleccionado</option>
                    <option value="needs-plan">Falta seleccionar mínimo</option>
                  </select>
                </label>
                <div className="rounded-xl bg-mist-50 px-4 py-3 text-sm text-ink-700">
                  <strong>{filteredMyths.length}</strong> mitos encontrados
                </div>
              </div>
            </GlassCard>

            <div className="space-y-6">
              {visibleMyths.map((myth) => (
                <MythCard key={myth.slug} myth={myth} savingKey={savingKey} onDecision={saveDecision} />
              ))}
            </div>

            <div className="flex flex-col items-center justify-between gap-3 rounded-2xl border border-ink-500/10 bg-white/80 p-4 sm:flex-row">
              <p className="text-sm text-ink-500">Página {page} de {totalPages}</p>
              <div className="flex gap-2">
                <Button variant="secondary" disabled={page <= 1} onClick={() => setPage((current) => Math.max(1, current - 1))}>Anterior</Button>
                <Button variant="secondary" disabled={page >= totalPages} onClick={() => setPage((current) => Math.min(totalPages, current + 1))}>Siguiente</Button>
              </div>
            </div>

            {data.unassigned.length ? (
              <GlassCard className="p-5">
                <details>
                  <summary className="cursor-pointer font-display text-2xl text-ink-900">
                    Archivos locales todavía sin asociación automática ({data.unassigned.length})
                  </summary>
                  <p className="mt-2 max-w-3xl text-sm leading-6 text-ink-500">
                    Se muestran para que ninguna producción local quede oculta. Sus nombres no contienen un slug canónico suficiente para asignarlos con seguridad.
                  </p>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {data.unassigned.map((asset) => (
                      <a key={asset.id} href={asset.imageUrl} target="_blank" rel="noreferrer" className="overflow-hidden rounded-xl border border-ink-500/10 bg-white">
                        <div className="aspect-square bg-mist-50">
                          <img src={asset.imageUrl} alt={asset.pathname} loading="lazy" className="h-full w-full object-contain" />
                        </div>
                        <p className="break-all p-3 text-xs leading-5 text-ink-500">{asset.pathname}</p>
                      </a>
                    ))}
                  </div>
                </details>
              </GlassCard>
            ) : null}

            <p className="pb-8 text-center text-xs text-ink-500">
              Escaneo: {data.summary.blobAssetsScanned} objetos de Blob · {data.summary.linkedBlobAssets} vinculados por slug · {data.summary.worktreesScanned} worktrees locales · actualizado {new Date(data.generatedAt).toLocaleString("es-CO")}
            </p>
          </>
        ) : loading ? (
          <GlassCard className="p-10 text-center">
            <p className="font-display text-2xl text-ink-900">Construyendo el inventario visual completo…</p>
            <p className="mt-2 text-sm text-ink-500">Se están cruzando Neon, Vercel Blob y los artefactos de todos los worktrees.</p>
          </GlassCard>
        ) : null}
      </div>
    </AdminLayout>
  );
}
