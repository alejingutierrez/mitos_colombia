"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import AdminLayout from "../../../components/AdminLayout";
import { GlassCard } from "../../../components/ui/GlassCard";
import { Button } from "../../../components/ui/Button";
import { Badge } from "../../../components/ui/Badge";
import { ProgressBar } from "../../../components/ui/ProgressBar";
import { Toast, useToast } from "../../../components/ui/Toast";

async function parseJsonResponse(response) {
  const text = await response.text();
  if (!text) {
    return { data: null, raw: "" };
  }
  try {
    return { data: JSON.parse(text), raw: text };
  } catch (error) {
    return { data: null, raw: text };
  }
}

export default function EditorialMythsAdminPage() {
  const router = useRouter();
  const { toast, showToast, hideToast } = useToast();
  const [auth, setAuth] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pending, setPending] = useState([]);
  const [pendingTotal, setPendingTotal] = useState(0);
  const [processedTotal, setProcessedTotal] = useState(0);
  const [count, setCount] = useState(5);
  const [progress, setProgress] = useState({ current: 0, total: 0 });
  const [results, setResults] = useState([]);

  const [selectedMythId, setSelectedMythId] = useState("");
  const [selectedMyth, setSelectedMyth] = useState(null);
  const [loadingMyth, setLoadingMyth] = useState(false);

  const [newQuery, setNewQuery] = useState("");
  const [checking, setChecking] = useState(false);
  const [checkResult, setCheckResult] = useState(null);
  const [creating, setCreating] = useState(false);

  const pendingOptions = useMemo(() => pending, [pending]);

  const fetchStatus = async (token) => {
    setLoading(true);
    try {
      const response = await fetch("/api/admin/editorial-myths?limit=200", {
        headers: {
          Authorization: `Basic ${token}`,
        },
      });

      if (response.status === 401) {
        localStorage.removeItem("admin_auth");
        router.push("/admin");
        return;
      }

      if (!response.ok) {
        throw new Error("No se pudo cargar el estado");
      }

      const data = await response.json();
      setPending(data.pending || []);
      setPendingTotal(data.pending_total || 0);
      setProcessedTotal(data.processed_total || 0);
    } catch (error) {
      console.error("Error loading editorial myths status:", error);
      showToast("Error cargando datos del admin", "error");
    } finally {
      setLoading(false);
    }
  };

  const fetchMythDetail = async (token, id) => {
    if (!id) {
      setSelectedMyth(null);
      return;
    }

    setLoadingMyth(true);
    try {
      const response = await fetch(`/api/admin/editorial-myths?id=${id}`, {
        headers: {
          Authorization: `Basic ${token}`,
        },
      });

      if (response.status === 401) {
        localStorage.removeItem("admin_auth");
        router.push("/admin");
        return;
      }

      if (!response.ok) {
        throw new Error("No se pudo cargar el mito");
      }

      const data = await response.json();
      setSelectedMyth(data.myth || null);
    } catch (error) {
      console.error("Error loading myth detail:", error);
      showToast("No se pudo cargar el mito", "error");
    } finally {
      setLoadingMyth(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_auth");
    router.push("/admin");
  };

  useEffect(() => {
    const savedAuth = localStorage.getItem("admin_auth");
    if (!savedAuth) {
      router.push("/admin");
      return;
    }
    setAuth(savedAuth);
    fetchStatus(savedAuth);
  }, [router]);

  useEffect(() => {
    if (!auth) return;
    if (!selectedMythId) {
      setSelectedMyth(null);
      return;
    }
    fetchMythDetail(auth, selectedMythId);
  }, [auth, selectedMythId]);

  const runEnrichPhase = async (phase, mythId) => {
    const response = await fetch("/api/admin/editorial-myths", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${auth}`,
      },
      body: JSON.stringify({ mode: "enrich", mythId, phase }),
    });

    if (response.status === 401) {
      handleLogout();
      return { aborted: true };
    }

    const { data, raw } = await parseJsonResponse(response);
    if (!response.ok) {
      return {
        ok: false,
        error: data?.error || raw || "Error en el servidor",
      };
    }

    return { ok: true, data };
  };

  const runResearchUntilReady = async (mythId, onStep) => {
    const maxAttempts = 6;
    let lastStatus = null;

    for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
      const research = await runEnrichPhase("research", mythId);
      if (onStep) onStep();

      if (research.aborted) return research;
      if (!research.ok) return research;

      const updated = research.data?.updated?.[0];
      const status = updated?.status || research.data?.status;
      lastStatus = status || lastStatus;

      if (status === "research_ready") {
        return research;
      }
      if (status !== "research_partial") {
        return research;
      }
    }

    return {
      ok: false,
      error:
        lastStatus === "research_partial"
          ? "Investigacion incompleta: se requieren mas ciclos de scraping."
          : "No se pudo completar la investigacion.",
    };
  };

  const handleBatchEnrich = async () => {
    if (!auth) return;

    const targets = pendingOptions.slice(0, count);
    if (!targets.length) {
      showToast("No hay mitos pendientes para procesar", "info");
      return;
    }

    if (!confirm(`¿Procesar ${targets.length} mitos pendientes? Esto puede tomar varios minutos.`)) {
      return;
    }

    setResults([]);
    const totalSteps = targets.length * 3;
    let completedSteps = 0;
    setProgress({ current: 0, total: totalSteps });

    const batchResults = [];

    try {
      const advanceProgress = () => {
        completedSteps += 1;
        setProgress((prev) => ({
          current: completedSteps,
          total: Math.max(prev.total, completedSteps),
        }));
      };

      for (const myth of targets) {
        const research = await runResearchUntilReady(myth.id, advanceProgress);

        if (research.aborted) {
          return;
        }

        if (!research.ok) {
          batchResults.push({
            id: myth.id,
            title: myth.title,
            slug: myth.slug,
            success: false,
            error: research.error || "Error en investigación",
          });
          setResults([...batchResults]);
          continue;
        }

        const compose = await runEnrichPhase("compose", myth.id);
        advanceProgress();

        if (compose.aborted) {
          return;
        }

        if (!compose.ok) {
          batchResults.push({
            id: myth.id,
            title: myth.title,
            slug: myth.slug,
            success: false,
            error: compose.error || "Error en composición",
          });
          setResults([...batchResults]);
          continue;
        }

        const updated = compose.data?.updated || [];
        batchResults.push(...updated);
        setResults([...batchResults]);
      }

      await fetchStatus(auth);
    } catch (error) {
      console.error("Error in batch enrichment:", error);
      showToast("Error al procesar mitos", "error");
    } finally {
      setProgress({ current: 0, total: 0 });
    }
  };

  const handleEnrichSelected = async () => {
    if (!auth || !selectedMythId) {
      showToast("Selecciona un mito primero", "info");
      return;
    }

    if (!confirm("¿Procesar el mito seleccionado con investigación editorial?")) {
      return;
    }

    setProgress({ current: 0, total: 3 });
    setResults([]);

    try {
      const advanceProgress = () => {
        setProgress((prev) => ({
          current: Math.min(prev.current + 1, prev.total + 1),
          total: Math.max(prev.total, prev.current + 1),
        }));
      };

      const research = await runResearchUntilReady(
        Number(selectedMythId),
        advanceProgress
      );
      if (research.aborted) return;
      if (!research.ok) {
        throw new Error(research.error || "Error en investigación");
      }

      const compose = await runEnrichPhase("compose", Number(selectedMythId));
      advanceProgress();
      if (compose.aborted) return;
      if (!compose.ok) {
        throw new Error(compose.error || "Error en composición");
      }

      setResults(compose.data?.updated || []);
      await fetchStatus(auth);
    } catch (error) {
      console.error("Error enriching selected myth:", error);
      showToast("No se pudo procesar el mito", "error");
    } finally {
      setProgress({ current: 0, total: 0 });
    }
  };

  const handleCheckNew = async () => {
    if (!auth || !newQuery.trim()) {
      showToast("Ingresa un mito para investigar", "info");
      return;
    }

    setChecking(true);
    setCheckResult(null);

    try {
      const response = await fetch("/api/admin/editorial-myths", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${auth}`,
        },
        body: JSON.stringify({ mode: "check", query: newQuery.trim() }),
      });

      if (response.status === 401) {
        handleLogout();
        return;
      }

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Error en el servidor");
      }

      setCheckResult(data);

      if (data.should_create) {
        await handleCreateNew(data.query, true);
      }
    } catch (error) {
      console.error("Error checking new myth:", error);
      showToast("No se pudo verificar el mito", "error");
    } finally {
      setChecking(false);
    }
  };

  const handleCreateNew = async (queryValue, fromCheck = false) => {
    const query = queryValue || newQuery.trim();
    if (!auth || !query) {
      return;
    }

    setCreating(true);
    if (!fromCheck) {
      setCheckResult(null);
    }

    try {
      const response = await fetch("/api/admin/editorial-myths", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${auth}`,
        },
        body: JSON.stringify({ mode: "create", query }),
      });

      if (response.status === 401) {
        handleLogout();
        return;
      }

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Error en el servidor");
      }

      showToast("Mito nuevo creado", "success");
      setResults([{ ...data.created, success: true }]);
      setNewQuery("");
      await fetchStatus(auth);
    } catch (error) {
      console.error("Error creating new myth:", error);
      showToast("No se pudo crear el mito", "error");
    } finally {
      setCreating(false);
    }
  };

  if (loading && !auth) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <GlassCard className="p-8">
          <p className="text-ink-600">Cargando...</p>
        </GlassCard>
      </div>
    );
  }

  return (
    <>
      <Toast toast={toast} onClose={hideToast} />
      <AdminLayout onLogout={handleLogout}>
        <div className="space-y-6">
          <div>
            <h1 className="font-display text-4xl text-ink-900">Mitos editoriales</h1>
            <p className="mt-2 text-ink-600">
              Investigación avanzada con OpenAI + fuentes web para preparar relatos
              listos para edición editorial.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <GlassCard className="p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-river-600 mb-2">
                Pendientes
              </p>
              <p className="font-display text-4xl text-ink-900">
                {pendingTotal}
              </p>
            </GlassCard>
            <GlassCard className="p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-jungle-600 mb-2">
                Editoriales
              </p>
              <p className="font-display text-4xl text-ink-900">
                {processedTotal}
              </p>
            </GlassCard>
            <GlassCard className="p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-ember-500 mb-2">
                Procesados ahora
              </p>
              <p className="font-display text-4xl text-ink-900">
                {results.filter((item) => item.success).length}
              </p>
            </GlassCard>
          </div>

          <GlassCard className="p-6 space-y-5">
            <div>
              <h2 className="font-display text-2xl text-ink-900">Mitos existentes</h2>
              <p className="text-sm text-ink-600 mt-1">
                Selecciona un mito pendiente o procesa en lote para llevarlo a la tabla editorial.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2 space-y-4">
                <div>
                  <label className="text-sm font-medium text-ink-700">Mito pendiente</label>
                  <select
                    value={selectedMythId}
                    onChange={(event) => setSelectedMythId(event.target.value)}
                    className="input-glass mt-2"
                  >
                    <option value="">Selecciona un mito</option>
                    {pendingOptions.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.title} — {item.region}{item.community ? ` / ${item.community}` : ""}
                      </option>
                    ))}
                  </select>
                </div>

                {loadingMyth ? (
                  <div className="text-sm text-ink-600">Cargando mito...</div>
                ) : (
                  selectedMyth && (
                    <div className="rounded-2xl border border-ink-200/60 bg-white/50 p-4 space-y-3">
                      <div className="flex flex-wrap gap-2">
                        <Badge className="border-jungle-500/30 bg-jungle-500/10 text-jungle-700">
                          {selectedMyth.region}
                        </Badge>
                        {selectedMyth.community && (
                          <Badge className="border-river-500/30 bg-river-500/10 text-river-700">
                            {selectedMyth.community}
                          </Badge>
                        )}
                        <Badge className="border-ink-500/30 bg-ink-100 text-ink-700">
                          {selectedMyth.slug}
                        </Badge>
                      </div>
                      <p className="text-sm text-ink-600">
                        {selectedMyth.excerpt}
                      </p>
                      {selectedMyth.tags_raw && (
                        <p className="text-xs text-ink-500">
                          Tags: {selectedMyth.tags_raw}
                        </p>
                      )}
                      {selectedMyth.focus_keywords_raw && (
                        <p className="text-xs text-ink-500">
                          Keywords: {selectedMyth.focus_keywords_raw}
                        </p>
                      )}
                      {selectedMyth.content && (
                        <div className="max-h-56 overflow-auto rounded-xl border border-ink-200/60 bg-white/70 p-3 text-xs text-ink-600 whitespace-pre-line">
                          {selectedMyth.content}
                        </div>
                      )}
                      <p className="text-xs text-ink-500">
                        {selectedMyth.category_path}
                      </p>
                    </div>
                  )
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-ink-700 mb-2">
                    Cantidad a procesar
                  </label>
                  <select
                    value={count}
                    onChange={(event) => setCount(Number(event.target.value))}
                    className="input-glass"
                    disabled={progress.total > 0}
                  >
                    <option value={5}>5 mitos</option>
                    <option value={10}>10 mitos</option>
                    <option value={25}>25 mitos</option>
                    <option value={50}>50 mitos</option>
                    <option value={100}>100 mitos</option>
                  </select>
                </div>
                <Button
                  onClick={handleBatchEnrich}
                  disabled={progress.total > 0 || pendingTotal === 0}
                  className="w-full"
                >
                  Procesar lote
                </Button>
                <Button
                  onClick={handleEnrichSelected}
                  disabled={progress.total > 0 || !selectedMythId}
                  className="w-full bg-ember-500 hover:bg-ember-600"
                >
                  Procesar mito seleccionado
                </Button>
              </div>
            </div>

            {progress.total > 0 && (
              <ProgressBar
                current={progress.current}
                total={progress.total}
                label="Progreso"
                showPercent
              />
            )}
          </GlassCard>

          <GlassCard className="p-6 space-y-4">
            <div>
              <h2 className="font-display text-2xl text-ink-900">Nuevo mito</h2>
              <p className="text-sm text-ink-600 mt-1">
                Busca un mito que no exista. Si se detecta similitud &gt; 65%,
                podrás decidir si crear uno nuevo.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-3">
              <input
                value={newQuery}
                onChange={(event) => setNewQuery(event.target.value)}
                placeholder="Escribe el mito o tema a investigar"
                className="input-glass flex-1"
              />
              <Button
                onClick={handleCheckNew}
                disabled={checking || creating}
                className="lg:w-56"
              >
                {checking ? "Analizando..." : "Analizar mito"}
              </Button>
            </div>

            {checkResult && checkResult.matches?.length > 0 && !checkResult.should_create && (
              <div className="rounded-2xl border border-ember-500/20 bg-ember-50/60 p-4 space-y-3">
                <p className="text-sm font-medium text-ember-700">
                  Coincidencias encontradas (confianza {Math.round(checkResult.confidence)}%)
                </p>
                <ul className="space-y-2 text-sm text-ember-700">
                  {checkResult.matches.map((match) => (
                    <li key={match.slug}>
                      <span className="font-semibold">{match.title}</span> — {match.reason}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => handleCreateNew(checkResult.query)}
                  className="bg-ember-500 hover:bg-ember-600"
                  disabled={creating}
                >
                  Crear de todas formas
                </Button>
              </div>
            )}

            {creating && (
              <ProgressBar current={1} total={1} label="Creando mito" showPercent />
            )}
          </GlassCard>

          {results.length > 0 && (
            <GlassCard className="p-6 space-y-4">
              <h3 className="font-display text-xl text-ink-900">Resultados</h3>
              <div className="space-y-3">
                {results.map((item, index) => (
                  <div
                    key={`${item.slug || item.title || index}`}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 rounded-2xl border border-ink-200/60 bg-white/60 p-4"
                  >
                    <div>
                      <p className="text-sm font-semibold text-ink-900">
                        {item.title || `Mito ${index + 1}`}
                      </p>
                      {item.slug && (
                        <p className="text-xs text-ink-500">{item.slug}</p>
                      )}
                      {item.error && (
                        <p className="text-xs text-ember-600 mt-1">{item.error}</p>
                      )}
                    </div>
                    <Badge
                      className={
                        item.success
                          ? "border-jungle-500/30 bg-jungle-500/10 text-jungle-700"
                          : "border-ember-500/30 bg-ember-500/10 text-ember-700"
                      }
                    >
                      {item.success ? "OK" : "Error"}
                    </Badge>
                  </div>
                ))}
              </div>
            </GlassCard>
          )}
        </div>
      </AdminLayout>
    </>
  );
}
