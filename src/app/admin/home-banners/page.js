"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminLayout from "../../../components/AdminLayout";
import { GlassCard } from "../../../components/ui/GlassCard";
import { Button } from "../../../components/ui/Button";
import { Badge } from "../../../components/ui/Badge";
import { Toast, useToast } from "../../../components/ui/Toast";

export default function HomeBannersAdminPage() {
  const router = useRouter();
  const [auth, setAuth] = useState(null);
  const [banners, setBanners] = useState([]);
  const [pending, setPending] = useState(0);
  const [loading, setLoading] = useState(true);
  const [batchCount, setBatchCount] = useState(3);
  const [batchLoading, setBatchLoading] = useState(false);
  const [generatingSlug, setGeneratingSlug] = useState(null);
  const [editingSlug, setEditingSlug] = useState(null);
  const [editPrompt, setEditPrompt] = useState("");
  const { toast, showToast, hideToast } = useToast();

  const fetchBanners = useCallback(async (authToken) => {
    if (!authToken) {
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("/api/admin/home-banners", {
        headers: {
          Authorization: `Basic ${authToken}`,
        },
      });

      if (response.status === 401) {
        localStorage.removeItem("admin_auth");
        router.push("/admin");
        return;
      }

      if (response.ok) {
        const data = await response.json();
        setBanners(data.banners || []);
        setPending(data.pending || 0);
      }
    } catch (error) {
      console.error("Error fetching banners:", error);
      showToast("No se pudieron cargar los banners", "error");
    } finally {
      setLoading(false);
    }
  }, [router, showToast]);

  useEffect(() => {
    const savedAuth = localStorage.getItem("admin_auth");
    if (!savedAuth) {
      router.push("/admin");
      return;
    }
    setAuth(savedAuth);
    fetchBanners(savedAuth);
  }, [fetchBanners, router]);

  const startEdit = (banner) => {
    setEditingSlug(banner.slug);
    setEditPrompt(banner.image_prompt || "");
  };

  const cancelEdit = () => {
    setEditingSlug(null);
    setEditPrompt("");
  };

  const savePrompt = async (banner) => {
    if (!auth) return;
    try {
      const response = await fetch("/api/admin/home-banners", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${auth}`,
        },
        body: JSON.stringify({
          action: "update-prompt",
          slug: banner.slug,
          image_prompt: editPrompt,
        }),
      });

      if (response.ok) {
        showToast("Prompt actualizado", "success");
        cancelEdit();
        fetchBanners(auth);
      } else {
        const data = await response.json();
        showToast(data.error || "No se pudo actualizar el prompt", "error");
      }
    } catch (error) {
      console.error("Error updating prompt:", error);
      showToast("Error al guardar el prompt", "error");
    }
  };

  const generateSingle = async (banner) => {
    if (!auth) return;
    setGeneratingSlug(banner.slug);
    try {
      const response = await fetch("/api/admin/home-banners", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${auth}`,
        },
        body: JSON.stringify({
          slug: banner.slug,
          image_prompt: banner.image_prompt,
        }),
      });

      if (response.ok) {
        showToast("Imagen generada", "success");
        fetchBanners(auth);
      } else {
        const data = await response.json();
        showToast(data.error || "No se pudo generar la imagen", "error");
      }
    } catch (error) {
      console.error("Error generating banner image:", error);
      showToast("Error al generar la imagen", "error");
    } finally {
      setGeneratingSlug(null);
    }
  };

  const generateBatch = async () => {
    if (!auth) return;
    setBatchLoading(true);
    try {
      const response = await fetch("/api/admin/home-banners", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${auth}`,
        },
        body: JSON.stringify({
          count: batchCount,
        }),
      });

      if (response.ok) {
        showToast("Lote generado", "success");
        fetchBanners(auth);
      } else {
        const data = await response.json();
        showToast(data.error || "No se pudo generar el lote", "error");
      }
    } catch (error) {
      console.error("Error generating batch:", error);
      showToast("Error al generar el lote", "error");
    } finally {
      setBatchLoading(false);
    }
  };

  return (
    <>
      <AdminLayout>
        <div className="space-y-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="eyebrow text-jungle-600">Banners del home</p>
              <h1 className="mt-2 font-display text-3xl text-ink-900">
                Banners rotativos
              </h1>
              <p className="mt-2 text-sm text-ink-600">
                Prompts listos para generar ilustraciones horizontales en estilo paper quilling.
              </p>
            </div>
            <Button onClick={() => fetchBanners(auth)} className="shrink-0">
              Actualizar
            </Button>
          </div>

          <GlassCard className="p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-wrap items-center gap-3">
                <Badge className="border-jungle-500/30 bg-jungle-500/10 text-jungle-700">
                  {banners.length} banners
                </Badge>
                <Badge className="border-ember-400/30 bg-ember-400/10 text-ember-600">
                  {pending} pendientes
                </Badge>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex items-center gap-2">
                  <label className="text-xs uppercase tracking-[0.25em] text-ink-500">
                    Cantidad
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={batchCount}
                    onChange={(event) =>
                      setBatchCount(Math.max(1, Number(event.target.value || 1)))
                    }
                    className="input-glass w-24 text-center"
                  />
                </div>
                <Button
                  onClick={generateBatch}
                  disabled={batchLoading || pending === 0}
                  className="bg-jungle-600 hover:bg-jungle-700"
                >
                  {batchLoading ? "Generando..." : "Generar pendientes"}
                </Button>
              </div>
            </div>
          </GlassCard>

          {loading ? (
            <div className="py-12 text-center">
              <div className="inline-block h-10 w-10 animate-spin rounded-full border-b-2 border-jungle-600" />
              <p className="mt-4 text-ink-600">Cargando banners...</p>
            </div>
          ) : (
            <div className="grid gap-6 lg:grid-cols-2">
              {banners.map((banner) => {
                const isGenerating = generatingSlug === banner.slug;
                const hasImage = Boolean(banner.image_url);

                return (
                  <GlassCard key={banner.slug} className="p-6">
                    <div className="flex h-full flex-col">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <Badge className="border-river-500/30 bg-river-500/10 text-river-700">
                              {banner.subtitle || "Banner"}
                            </Badge>
                            {hasImage ? (
                              <Badge className="border-jungle-500/30 bg-jungle-500/10 text-jungle-700">
                                ✓ Con imagen
                              </Badge>
                            ) : (
                              <Badge className="border-ember-400/30 bg-ember-400/10 text-ember-600">
                                Sin imagen
                              </Badge>
                            )}
                          </div>
                          <h3 className="mt-3 text-lg font-semibold text-ink-900">
                            {banner.title}
                          </h3>
                          <p className="text-sm text-ink-500">{banner.slug}</p>
                        </div>
                      </div>

                      {hasImage && (
                        <div className="mt-4 aspect-[16/9] overflow-hidden rounded-2xl bg-ink-100">
                          <img
                            src={banner.image_url}
                            alt={banner.title}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      )}

                      <div className="mt-4">
                        <div className="flex items-center justify-between">
                          <label className="text-xs font-medium uppercase tracking-[0.3em] text-ink-500">
                            Prompt
                          </label>
                          {editingSlug === banner.slug ? (
                            <div className="flex gap-2">
                              <button
                                onClick={() => savePrompt(banner)}
                                className="text-xs font-medium text-jungle-600 hover:text-jungle-700"
                              >
                                Guardar
                              </button>
                              <button
                                onClick={cancelEdit}
                                className="text-xs font-medium text-ember-600 hover:text-ember-700"
                              >
                                Cancelar
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => startEdit(banner)}
                              className="text-xs font-medium text-river-600 hover:text-river-700"
                            >
                              Editar
                            </button>
                          )}
                        </div>
                        {editingSlug === banner.slug ? (
                          <textarea
                            value={editPrompt}
                            onChange={(event) => setEditPrompt(event.target.value)}
                            className="input-glass mt-2 min-h-[120px] text-sm"
                            rows={5}
                          />
                        ) : (
                          <p className="mt-2 rounded-xl bg-ink-50 p-3 text-sm text-ink-600 line-clamp-4">
                            {banner.image_prompt}
                          </p>
                        )}
                      </div>

                      <div className="mt-6 flex flex-col gap-3 border-t border-ink-200/60 pt-4">
                        <Button
                          onClick={() => generateSingle(banner)}
                          disabled={isGenerating}
                          className="w-full bg-jungle-600 hover:bg-jungle-700"
                        >
                          {isGenerating ? "Generando..." : "Generar imagen"}
                        </Button>
                        <div className="text-xs text-ink-500">
                          CTA: {banner.cta_label} → {banner.cta_href}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                );
              })}
            </div>
          )}
        </div>
      </AdminLayout>
      <Toast toast={toast} onClose={hideToast} />
    </>
  );
}
