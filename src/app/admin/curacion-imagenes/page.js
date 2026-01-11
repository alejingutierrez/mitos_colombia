"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminLayout from "../../../components/AdminLayout";
import { GlassCard } from "../../../components/ui/GlassCard";
import { Button } from "../../../components/ui/Button";
import { Badge } from "../../../components/ui/Badge";
import { Toast, useToast } from "../../../components/ui/Toast";

export default function CuracionImagenesPage() {
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [entityTypeFilter, setEntityTypeFilter] = useState("");
  const [breakdown, setBreakdown] = useState({});
  const [auth, setAuth] = useState(null);

  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [savingId, setSavingId] = useState(null);
  const [generatingId, setGeneratingId] = useState(null);

  const { toast, showToast, hideToast } = useToast();

  useEffect(() => {
    const savedAuth = localStorage.getItem("admin_auth");
    if (!savedAuth) {
      router.push("/admin");
      return;
    }
    setAuth(savedAuth);
    fetchItems(savedAuth, 1, entityTypeFilter);
  }, []);

  const fetchItems = async (authToken, currentPage = 1, filter = "") => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        page: currentPage.toString(),
        limit: "20",
      });

      if (filter) {
        params.append("entityType", filter);
      }

      const response = await fetch(`/api/admin/curacion-imagenes/list?${params}`, {
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
        setItems(data.items || []);
        setTotal(data.total || 0);
        setTotalPages(data.totalPages || 1);
        setBreakdown(data.breakdown || {});
        setPage(currentPage);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_auth");
    router.push("/admin");
  };

  const handlePageChange = (newPage) => {
    if (!auth) return;
    fetchItems(auth, newPage, entityTypeFilter);
  };

  const handleFilterChange = (filter) => {
    if (!auth) return;
    setEntityTypeFilter(filter);
    fetchItems(auth, 1, filter);
  };

  const startEdit = (item) => {
    setEditingId(`${item.entity_type}-${item.id}`);
    setEditValue(item.image_prompt || "");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditValue("");
  };

  const saveEdit = async (item) => {
    if (!auth) return;

    const itemKey = `${item.entity_type}-${item.id}`;
    setSavingId(itemKey);

    try {
      const response = await fetch("/api/admin/curacion-imagenes/update-prompt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${auth}`,
        },
        body: JSON.stringify({
          entityType: item.entity_type,
          entityId: item.id,
          prompt: editValue,
        }),
      });

      if (response.ok) {
        showToast("Prompt actualizado", "success");
        fetchItems(auth, page, entityTypeFilter);
        cancelEdit();
      } else {
        const error = await response.json();
        showToast(error.error || "No se pudo actualizar el prompt", "error");
      }
    } catch (error) {
      console.error("Error updating prompt:", error);
      showToast("Error al guardar el prompt", "error");
    } finally {
      setSavingId(null);
    }
  };

  const regenerateImage = async (item) => {
    if (!auth) return;

    if (!confirm(`¿Regenerar la imagen de "${item.name}"? La actual se reemplazará.`)) {
      return;
    }

    const itemKey = `${item.entity_type}-${item.id}`;
    setGeneratingId(itemKey);

    try {
      const response = await fetch("/api/admin/curacion-imagenes/regenerate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${auth}`,
        },
        body: JSON.stringify({
          entityType: item.entity_type,
          entityId: item.id,
        }),
      });

      if (response.ok) {
        showToast("Imagen regenerada y optimizada", "success");
        fetchItems(auth, page, entityTypeFilter);
      } else {
        const error = await response.json();
        showToast(error.error || "No se pudo regenerar la imagen", "error");
      }
    } catch (error) {
      console.error("Error regenerating image:", error);
      showToast("Error al regenerar la imagen", "error");
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
          <div>
            <h1 className="font-display text-4xl text-ink-900">
              Curación de imágenes 16:9
            </h1>
            <p className="mt-2 text-ink-600">
              Ajusta prompts y regenera imágenes horizontales almacenadas en
              <span className="font-semibold"> mitos/</span> con compresión ligera.
            </p>
          </div>

          <GlassCard className="p-6">
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => handleFilterChange("")}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
                  entityTypeFilter === ""
                    ? "bg-jungle-600 text-white"
                    : "bg-ink-100 text-ink-700 hover:bg-ink-200"
                }`}
              >
                Todos ({total})
              </button>
              <button
                onClick={() => handleFilterChange("myth")}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
                  entityTypeFilter === "myth"
                    ? "bg-jungle-600 text-white"
                    : "bg-ink-100 text-ink-700 hover:bg-ink-200"
                }`}
              >
                Mitos ({breakdown.myth || 0})
              </button>
              <button
                onClick={() => handleFilterChange("community")}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
                  entityTypeFilter === "community"
                    ? "bg-jungle-600 text-white"
                    : "bg-ink-100 text-ink-700 hover:bg-ink-200"
                }`}
              >
                Comunidades ({breakdown.community || 0})
              </button>
              <button
                onClick={() => handleFilterChange("category")}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
                  entityTypeFilter === "category"
                    ? "bg-jungle-600 text-white"
                    : "bg-ink-100 text-ink-700 hover:bg-ink-200"
                }`}
              >
                Categorías ({breakdown.category || 0})
              </button>
              <button
                onClick={() => handleFilterChange("region")}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
                  entityTypeFilter === "region"
                    ? "bg-jungle-600 text-white"
                    : "bg-ink-100 text-ink-700 hover:bg-ink-200"
                }`}
              >
                Regiones ({breakdown.region || 0})
              </button>
            </div>
          </GlassCard>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-jungle-600"></div>
              <p className="mt-4 text-ink-600">Cargando imágenes...</p>
            </div>
          ) : items.length === 0 ? (
            <GlassCard className="p-12 text-center">
              <p className="text-ink-600">No hay imágenes para mostrar.</p>
              <p className="text-ink-500 text-sm mt-2">
                Verifica que las imágenes estén en la carpeta mitos/.
              </p>
            </GlassCard>
          ) : (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {items.map((item) => {
                  const itemKey = `${item.entity_type}-${item.id}`;
                  const isEditing = editingId === itemKey;
                  const isSaving = savingId === itemKey;
                  const isGenerating = generatingId === itemKey;

                  return (
                    <GlassCard key={itemKey} className="p-6">
                      <div className="flex flex-col h-full">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge
                                className={
                                  item.entity_type === "myth"
                                    ? "border-jungle-500/30 bg-jungle-500/10 text-jungle-700"
                                    : item.entity_type === "community"
                                    ? "border-river-500/30 bg-river-500/10 text-river-700"
                                    : item.entity_type === "category"
                                    ? "border-ember-400/30 bg-ember-400/10 text-ember-600"
                                    : "border-ink-500/30 bg-ink-500/10 text-ink-700"
                                }
                              >
                                {item.entity_type}
                              </Badge>
                              <Badge className="border-jungle-500/30 bg-jungle-500/10 text-jungle-700">
                                16:9
                              </Badge>
                            </div>
                            <h3 className="text-lg font-semibold text-ink-900">
                              {item.name}
                            </h3>
                            <p className="text-sm text-ink-600 mt-1">{item.slug}</p>
                          </div>
                        </div>

                        {item.image_url && (
                          <div className="mb-4 aspect-[16/9] relative bg-ink-100 rounded-xl overflow-hidden">
                            <img
                              src={item.image_url}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}

                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <label className="text-xs font-medium text-ink-700 uppercase tracking-wider">
                              Prompt
                            </label>
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
                            <div className="space-y-2">
                              <textarea
                                value={editValue}
                                onChange={(e) => setEditValue(e.target.value)}
                                className="input-glass w-full h-32 text-sm"
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
                            <p className="text-sm text-ink-600 line-clamp-4">
                              {item.image_prompt || "Sin prompt registrado."}
                            </p>
                          )}
                        </div>

                        <div className="mt-auto">
                          <Button
                            onClick={() => regenerateImage(item)}
                            disabled={isGenerating}
                            className="w-full"
                          >
                            {isGenerating ? "Regenerando..." : "Regenerar imagen"}
                          </Button>
                          <p className="mt-2 text-xs text-ink-500">
                            Se optimiza a 16:9 y se comprime antes de guardar.
                          </p>
                        </div>
                      </div>
                    </GlassCard>
                  );
                })}
              </div>

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
            </>
          )}
        </div>
      </AdminLayout>
    </>
  );
}
