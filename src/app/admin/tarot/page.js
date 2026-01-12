"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import AdminLayout from "../../../components/AdminLayout";
import { GlassCard } from "../../../components/ui/GlassCard";
import { Button } from "../../../components/ui/Button";
import { Badge } from "../../../components/ui/Badge";
import { Toast, useToast } from "../../../components/ui/Toast";
import { ProgressBar } from "../../../components/ui/ProgressBar";

const FILTERS = [
  { key: "all", label: "Todas", arcana: "", suit: "", status: "" },
  { key: "major", label: "Arcanos mayores", arcana: "major", suit: "", status: "" },
  { key: "bastos", label: "Bastos", arcana: "minor", suit: "Bastos", status: "" },
  { key: "copas", label: "Copas", arcana: "minor", suit: "Copas", status: "" },
  { key: "espadas", label: "Espadas", arcana: "minor", suit: "Espadas", status: "" },
  { key: "oros", label: "Oros", arcana: "minor", suit: "Oros", status: "" },
  { key: "missing", label: "Pendientes", arcana: "", suit: "", status: "missing" },
];

export default function TarotAdminPage() {
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [stats, setStats] = useState({ total: 0, missing: 0, ready: 0 });
  const [filterKey, setFilterKey] = useState("all");
  const [auth, setAuth] = useState(null);

  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [savingId, setSavingId] = useState(null);
  const [generatingId, setGeneratingId] = useState(null);
  const [batchCount, setBatchCount] = useState(5);
  const [batchGenerating, setBatchGenerating] = useState(false);
  const [progress, setProgress] = useState({ current: 0, total: 0 });

  const { toast, showToast, hideToast } = useToast();

  useEffect(() => {
    const savedAuth = localStorage.getItem("admin_auth");
    if (!savedAuth) {
      router.push("/admin");
      return;
    }
    setAuth(savedAuth);
    fetchItems(savedAuth, 1, filterKey);
  }, []);

  const fetchItems = async (authToken, currentPage = 1, filter = "all") => {
    try {
      setLoading(true);
      const selected = FILTERS.find((item) => item.key === filter) || FILTERS[0];
      const params = new URLSearchParams({
        page: currentPage.toString(),
        limit: "20",
      });

      if (selected.arcana) {
        params.append("arcana", selected.arcana);
      }
      if (selected.suit) {
        params.append("suit", selected.suit);
      }
      if (selected.status) {
        params.append("status", selected.status);
      }

      const response = await fetch(`/api/admin/tarot/list?${params}`, {
        headers: { Authorization: `Basic ${authToken}` },
      });

      if (response.status === 401) {
        localStorage.removeItem("admin_auth");
        router.push("/admin");
        return;
      }

      if (response.ok) {
        const data = await response.json();
        setItems(data.items || []);
        setTotalPages(data.totalPages || 1);
        setPage(currentPage);
        setStats(data.stats || { total: 0, missing: 0, ready: 0 });
      }
    } catch (error) {
      console.error("Error fetching tarot cards:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_auth");
    router.push("/admin");
  };

  const handleFilterChange = (key) => {
    if (!auth) return;
    setFilterKey(key);
    fetchItems(auth, 1, key);
  };

  const handlePageChange = (newPage) => {
    if (!auth) return;
    fetchItems(auth, newPage, filterKey);
  };

  const startEdit = (item) => {
    setEditingId(item.id);
    setEditValue(item.custom_prompt || "");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditValue("");
  };

  const saveEdit = async (item) => {
    if (!auth) return;

    setSavingId(item.id);

    try {
      const response = await fetch("/api/admin/tarot/update-prompt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${auth}`,
        },
        body: JSON.stringify({
          cardId: item.id,
          customPrompt: editValue,
        }),
      });

      if (response.ok) {
        showToast("Prompt personalizado guardado", "success");
        fetchItems(auth, page, filterKey);
        cancelEdit();
      } else {
        const error = await response.json();
        showToast(error.error || "No se pudo guardar", "error");
      }
    } catch (error) {
      console.error("Error updating tarot prompt:", error);
      showToast("Error al guardar el prompt", "error");
    } finally {
      setSavingId(null);
    }
  };

  const generateBatch = async () => {
    if (!auth) return;

    setBatchGenerating(true);
    setProgress({ current: 0, total: batchCount });
    let successCount = 0;
    let errorCount = 0;

    try {
      for (let i = 0; i < batchCount; i += 1) {
        setProgress({ current: i + 1, total: batchCount });
        const response = await fetch("/api/admin/tarot/generate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${auth}`,
          },
          body: JSON.stringify({ count: 1 }),
        });

        const data = await response.json();

        if (!response.ok) {
          errorCount += 1;
          continue;
        }

        const generated = data.generated || [];
        const successInBatch = generated.length;

        if (successInBatch === 0) {
          setProgress({ current: i, total: i });
          break;
        }

        successCount += successInBatch;
      }

      if (successCount > 0) {
        showToast(`Generadas ${successCount} cartas`, "success");
      }
      if (errorCount > 0) {
        showToast(`Fallaron ${errorCount} cartas`, "error");
      }
      fetchItems(auth, page, filterKey);
    } catch (error) {
      console.error("Error generating tarot batch:", error);
      showToast("Error al generar cartas", "error");
    } finally {
      setBatchGenerating(false);
      setProgress({ current: 0, total: 0 });
    }
  };

  const regenerateCard = async (item) => {
    if (!auth) return;

    if (!confirm(`¿Regenerar la carta "${item.card_name}"?`)) {
      return;
    }

    setGeneratingId(item.id);

    try {
      const response = await fetch("/api/admin/tarot/regenerate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${auth}`,
        },
        body: JSON.stringify({ cardId: item.id }),
      });

      const data = await response.json();

      if (response.ok) {
        showToast("Carta regenerada", "success");
        fetchItems(auth, page, filterKey);
      } else {
        showToast(data.error || "No se pudo regenerar", "error");
      }
    } catch (error) {
      console.error("Error regenerating tarot card:", error);
      showToast("Error al regenerar carta", "error");
    } finally {
      setGeneratingId(null);
    }
  };

  if (!auth) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-jungle-600"></div>
      </div>
    );
  }

  return (
    <>
      <Toast toast={toast} onClose={hideToast} />
      <AdminLayout onLogout={handleLogout}>
        <div className="space-y-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="font-display text-4xl text-ink-900">
                Tarot de la mitología colombiana
              </h1>
              <p className="mt-2 text-ink-600 max-w-2xl">
                Genera y ajusta las cartas 9:16 con estética paper quilling y
                estilo Rider-Waite. Cada carta se enlaza a su mito y usa el
                prompt del relato como inspiración.
              </p>
            </div>
            <GlassCard className="p-4 flex flex-col gap-2">
              <p className="text-xs uppercase tracking-[0.3em] text-ink-500">
                Estado general
              </p>
              <div className="flex items-center gap-4 text-sm text-ink-700">
                <span>Total: {stats.total}</span>
                <span>Generadas: {stats.ready}</span>
                <span>Pendientes: {stats.missing}</span>
              </div>
            </GlassCard>
          </div>

          <GlassCard className="p-6">
            <div className="flex flex-wrap items-center gap-3">
              {FILTERS.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => handleFilterChange(filter.key)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
                    filterKey === filter.key
                      ? "bg-jungle-600 text-white"
                      : "bg-ink-100 text-ink-700 hover:bg-ink-200"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm text-ink-700">
                Generar cartas pendientes en lote (máximo 10 por tanda).
              </p>
              <p className="text-xs text-ink-500 mt-1">
                Ideal para avanzar en grupos de 5 o 10 sin sobrecargar la API.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <select
                value={batchCount}
                onChange={(event) => setBatchCount(Number(event.target.value))}
                className="input-glass text-sm"
              >
                <option value={5}>5 cartas</option>
                <option value={10}>10 cartas</option>
              </select>
              <Button onClick={generateBatch} disabled={batchGenerating}>
                {batchGenerating ? "Generando..." : "Generar lote"}
              </Button>
            </div>
            {(progress.total > 0 || generatingId) && (
              <div className="mt-4 w-full lg:mt-0 lg:max-w-sm">
                <ProgressBar
                  current={progress.current}
                  total={progress.total}
                  label="Progreso"
                  indeterminate={progress.total === 0 && Boolean(generatingId)}
                  showPercent={progress.total > 0}
                />
              </div>
            )}
          </GlassCard>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-jungle-600"></div>
              <p className="mt-4 text-ink-600">Cargando cartas...</p>
            </div>
          ) : items.length === 0 ? (
            <GlassCard className="p-12 text-center">
              <p className="text-ink-600">No hay cartas para mostrar.</p>
            </GlassCard>
          ) : (
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {items.map((item) => {
                const isEditing = editingId === item.id;
                const isSaving = savingId === item.id;
                const isGenerating = generatingId === item.id;
                const mythTitle = item.myth_title?.trim() || "";
                const mythHref = item.myth_slug
                  ? `/mitos/${item.myth_slug}`
                  : `/mitos?q=${encodeURIComponent(mythTitle)}`;

                return (
                  <GlassCard key={item.id} className="p-6">
                    <div className="flex flex-col h-full">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex flex-wrap gap-2">
                            <Badge className="border-ink-500/20 bg-ink-50/70 text-ink-700">
                              {item.arcana === "major"
                                ? "Arcano mayor"
                                : `Arcano menor · ${item.suit}`}
                            </Badge>
                            {item.image_url ? (
                              <Badge className="border-jungle-500/30 bg-jungle-500/10 text-jungle-700">
                                Con imagen
                              </Badge>
                            ) : (
                              <Badge className="border-ember-400/30 bg-ember-400/10 text-ember-600">
                                Pendiente
                              </Badge>
                            )}
                          </div>
                          <h3 className="mt-3 font-display text-2xl text-ink-900">
                            {item.card_name}
                          </h3>
                          <Link
                            href={mythHref}
                            className="mt-2 inline-flex text-sm text-river-600 hover:text-river-700"
                          >
                            {mythTitle}
                          </Link>
                        </div>
                      </div>

                      <div className="mt-4 grid gap-4 md:grid-cols-[0.8fr_1.2fr]">
                        <div>
                          <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-ink-100">
                            {item.image_url ? (
                              <Image
                                src={item.image_url}
                                alt={item.card_name}
                                fill
                                sizes="(max-width: 1024px) 100vw, 40vw"
                                className="object-contain"
                              />
                            ) : (
                              <div className="absolute inset-0 bg-gradient-to-br from-ink-200 via-ink-100 to-ink-50" />
                            )}
                          </div>
                          <Button
                            className="mt-4 w-full"
                            onClick={() => regenerateCard(item)}
                            disabled={isGenerating}
                          >
                            {isGenerating
                              ? "Regenerando..."
                              : item.image_url
                              ? "Regenerar carta"
                              : "Generar carta"}
                          </Button>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <p className="text-xs uppercase tracking-[0.3em] text-ink-500">
                              Significado
                            </p>
                            <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                              {item.meaning}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs uppercase tracking-[0.3em] text-ink-500">
                              Por qué se eligió
                            </p>
                            <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                              {item.selection_reason}
                            </p>
                          </div>
                          <div>
                            <div className="flex items-center justify-between">
                              <p className="text-xs uppercase tracking-[0.3em] text-ink-500">
                                Prompt personalizado
                              </p>
                              {!isEditing && (
                                <button
                                  onClick={() => startEdit(item)}
                                  className="text-xs text-river-600 hover:text-river-700 font-medium"
                                >
                                  Editar
                                </button>
                              )}
                            </div>
                            {isEditing ? (
                              <div className="mt-2 space-y-2">
                                <textarea
                                  value={editValue}
                                  onChange={(event) => setEditValue(event.target.value)}
                                  className="input-glass w-full h-28 text-sm"
                                />
                                <div className="flex gap-2">
                                  <Button
                                    size="sm"
                                    onClick={() => saveEdit(item)}
                                    disabled={isSaving}
                                  >
                                    {isSaving ? "Guardando..." : "Guardar"}
                                  </Button>
                                  <Button size="sm" variant="outline" onClick={cancelEdit}>
                                    Cancelar
                                  </Button>
                                </div>
                              </div>
                            ) : (
                              <p className="mt-2 text-sm text-ink-600 line-clamp-3">
                                {item.custom_prompt || "Sin ajustes personalizados."}
                              </p>
                            )}
                          </div>
                          <details className="text-xs text-ink-500">
                            <summary className="cursor-pointer">
                              Ver prompt base
                            </summary>
                            <p className="mt-2 whitespace-pre-line text-ink-600">
                              {item.base_prompt}
                            </p>
                          </details>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                );
              })}
            </div>
          )}

          {items.length > 0 && (
            <div className="flex items-center justify-between mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(Math.max(1, page - 1))}
                disabled={page <= 1}
              >
                Anterior
              </Button>
              <p className="text-sm text-ink-600">
                Página {page} de {totalPages}
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(Math.min(totalPages, page + 1))}
                disabled={page >= totalPages}
              >
                Siguiente
              </Button>
            </div>
          )}
        </div>
      </AdminLayout>
    </>
  );
}
