"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminLayout from "../../../components/AdminLayout";
import { GlassCard } from "../../../components/ui/GlassCard";
import { Button } from "../../../components/ui/Button";
import { Badge } from "../../../components/ui/Badge";

export default function VerticalImagesPage() {
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [entityTypeFilter, setEntityTypeFilter] = useState("");
  const [auth, setAuth] = useState(null);

  // Edit states
  const [editingId, setEditingId] = useState(null);
  const [editingField, setEditingField] = useState(null);
  const [editValue, setEditValue] = useState("");

  // Generation states
  const [generatingId, setGeneratingId] = useState(null);
  const [batchGenerating, setBatchGenerating] = useState(false);
  const [batchCount, setBatchCount] = useState(5);

  // Stats
  const [stats, setStats] = useState(null);

  // Check authentication
  useEffect(() => {
    const savedAuth = localStorage.getItem("admin_auth");
    if (!savedAuth) {
      router.push("/admin");
      return;
    }
    setAuth(savedAuth);
    fetchItems(savedAuth, 1, entityTypeFilter);
    fetchStats(savedAuth);
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

      const response = await fetch(`/api/admin/vertical-images/all-entities?${params}`, {
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
        console.log('[PAGINATION DEBUG]', {
          total: data.total,
          totalPages: data.totalPages,
          page: currentPage,
          itemsCount: data.items?.length
        });
        setItems(data.items || []);
        setTotal(data.total || 0);
        setTotalPages(data.totalPages || 1);
        setPage(currentPage);
      }
    } catch (error) {
      console.error("Error fetching items:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async (authToken) => {
    try {
      const response = await fetch("/api/admin/vertical-images/generate", {
        headers: {
          Authorization: `Basic ${authToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setStats(data);
      }
    } catch (error) {
      console.error("Error fetching stats:", error);
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

  const startEdit = (item, field) => {
    setEditingId(`${item.entity_type}-${item.id}`);
    setEditingField(field);
    setEditValue(field === 'base' ? item.base_prompt : (item.custom_prompt || item.image_prompt || ""));
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditingField(null);
    setEditValue("");
  };

  const saveEdit = async (item) => {
    if (!auth || !item.vertical_image_id) return;

    try {
      const updateData = editingField === 'base'
        ? { id: item.vertical_image_id, basePrompt: editValue }
        : { id: item.vertical_image_id, customPrompt: editValue };

      const response = await fetch("/api/admin/vertical-images/update-prompt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${auth}`,
        },
        body: JSON.stringify(updateData),
      });

      if (response.ok) {
        alert("Prompt actualizado exitosamente");
        fetchItems(auth, page, entityTypeFilter);
        cancelEdit();
      } else {
        const error = await response.json();
        alert(`Error: ${error.error || 'No se pudo actualizar'}`);
      }
    } catch (error) {
      console.error("Error saving prompt:", error);
      alert("Error al guardar el prompt");
    }
  };

  const generateSingle = async (item) => {
    if (!auth) return;

    const itemKey = `${item.entity_type}-${item.id}`;
    setGeneratingId(itemKey);

    try {
      const response = await fetch("/api/admin/vertical-images/generate-single", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${auth}`,
        },
        body: JSON.stringify({
          entityType: item.entity_type,
          entityId: item.id,
          entityName: item.name,
          entitySlug: item.slug,
          customPrompt: item.image_prompt || ""
        }),
      });

      if (response.ok) {
        alert("Imagen generada exitosamente");
        fetchItems(auth, page, entityTypeFilter);
        fetchStats(auth);
      } else {
        const error = await response.json();
        alert(`Error: ${error.error || 'No se pudo generar'}`);
      }
    } catch (error) {
      console.error("Error generating image:", error);
      alert("Error al generar la imagen");
    } finally {
      setGeneratingId(null);
    }
  };

  const regenerateImage = async (item) => {
    if (!auth || !item.vertical_image_id) return;

    if (!confirm(`¿Regenerar imagen para "${item.name}"? La actual será eliminada.`)) {
      return;
    }

    const itemKey = `${item.entity_type}-${item.id}`;
    setGeneratingId(itemKey);

    try {
      const response = await fetch("/api/admin/vertical-images/regenerate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${auth}`,
        },
        body: JSON.stringify({ id: item.vertical_image_id }),
      });

      if (response.ok) {
        alert("Imagen regenerada exitosamente");
        fetchItems(auth, page, entityTypeFilter);
      } else {
        const error = await response.json();
        alert(`Error: ${error.error}`);
      }
    } catch (error) {
      console.error("Error regenerating:", error);
      alert("Error al regenerar");
    } finally {
      setGeneratingId(null);
    }
  };

  const generateBatch = async () => {
    if (!auth) return;

    if (!confirm(`¿Generar ${batchCount} imágenes verticales? Esto puede tomar varios minutos.`)) {
      return;
    }

    setBatchGenerating(true);

    try {
      const response = await fetch("/api/admin/vertical-images/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${auth}`,
        },
        body: JSON.stringify({ count: batchCount }),
      });

      if (response.ok) {
        const data = await response.json();
        alert(`✓ Generadas ${data.generated?.filter(g => g.success).length || 0} de ${batchCount} imágenes`);
        fetchItems(auth, page, entityTypeFilter);
        fetchStats(auth);
      } else {
        const error = await response.json();
        alert(`Error: ${error.error}`);
      }
    } catch (error) {
      console.error("Error batch generation:", error);
      alert("Error en generación masiva");
    } finally {
      setBatchGenerating(false);
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
    <AdminLayout onLogout={handleLogout}>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="font-display text-4xl text-ink-900">Imágenes Verticales</h1>
          <p className="mt-2 text-ink-600">Curaduría editorial de imágenes 9:16 para redes sociales</p>
        </div>

        {/* Stats */}
        {stats && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <GlassCard className="p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-river-600 mb-2">
                Pendientes
              </p>
              <p className="font-display text-4xl text-ink-900">
                {stats.total || 0}
              </p>
            </GlassCard>

            <GlassCard className="p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-jungle-600 mb-2">
                Mitos
              </p>
              <p className="font-display text-4xl text-ink-900">
                {stats.breakdown?.myths || 0}
              </p>
            </GlassCard>

            <GlassCard className="p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-ember-500 mb-2">
                Comunidades
              </p>
              <p className="font-display text-4xl text-ink-900">
                {stats.breakdown?.communities || 0}
              </p>
            </GlassCard>

            <GlassCard className="p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-river-500 mb-2">
                Categorías
              </p>
              <p className="font-display text-4xl text-ink-900">
                {stats.breakdown?.categories || 0}
              </p>
            </GlassCard>

            <GlassCard className="p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-jungle-500 mb-2">
                Regiones
              </p>
              <p className="font-display text-4xl text-ink-900">
                {stats.breakdown?.regions || 0}
              </p>
            </GlassCard>
          </div>
        )}

        {/* Batch Generation */}
        <GlassCard className="p-6">
          <h2 className="font-display text-xl text-ink-900 mb-4">Generación Masiva</h2>
          <div className="flex items-center gap-4">
            <select
              value={batchCount}
              onChange={(e) => setBatchCount(parseInt(e.target.value))}
              className="input-glass w-32"
              disabled={batchGenerating}
            >
              <option value={5}>5 imágenes</option>
              <option value={10}>10 imágenes</option>
              <option value={20}>20 imágenes</option>
              <option value={50}>50 imágenes</option>
            </select>
            <Button
              onClick={generateBatch}
              disabled={batchGenerating || (stats?.total || 0) === 0}
              className="flex-1"
            >
              {batchGenerating ? (
                <>
                  <div className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Generando...
                </>
              ) : (
                `Generar ${batchCount} Imágenes`
              )}
            </Button>
          </div>
        </GlassCard>

        {/* Filters */}
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
              Mitos
            </button>
            <button
              onClick={() => handleFilterChange("community")}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
                entityTypeFilter === "community"
                  ? "bg-jungle-600 text-white"
                  : "bg-ink-100 text-ink-700 hover:bg-ink-200"
              }`}
            >
              Comunidades
            </button>
            <button
              onClick={() => handleFilterChange("category")}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
                entityTypeFilter === "category"
                  ? "bg-jungle-600 text-white"
                  : "bg-ink-100 text-ink-700 hover:bg-ink-200"
              }`}
            >
              Categorías
            </button>
            <button
              onClick={() => handleFilterChange("region")}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
                entityTypeFilter === "region"
                  ? "bg-jungle-600 text-white"
                  : "bg-ink-100 text-ink-700 hover:bg-ink-200"
              }`}
            >
              Regiones
            </button>
          </div>
        </GlassCard>

        {/* Items Grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-jungle-600"></div>
            <p className="mt-4 text-ink-600">Cargando entidades...</p>
          </div>
        ) : items.length === 0 ? (
          <GlassCard className="p-12 text-center">
            <p className="text-ink-600">No hay entidades para mostrar.</p>
            <p className="text-ink-500 text-sm mt-2">Asegúrate de que las entidades tengan prompts configurados.</p>
          </GlassCard>
        ) : (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {items.map((item) => {
                const itemKey = `${item.entity_type}-${item.id}`;
                const isGenerating = generatingId === itemKey;
                const hasVerticalImage = !!item.vertical_image_url;

                return (
                  <GlassCard key={itemKey} className="p-6">
                    <div className="flex flex-col h-full">
                      {/* Header */}
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
                            {hasVerticalImage && (
                              <Badge className="border-jungle-500/30 bg-jungle-500/10 text-jungle-700">
                                ✓ Con imagen
                              </Badge>
                            )}
                            {!hasVerticalImage && (
                              <Badge className="border-ember-400/30 bg-ember-400/10 text-ember-600">
                                Sin imagen
                              </Badge>
                            )}
                          </div>
                          <h3 className="text-lg font-semibold text-ink-900">
                            {item.name}
                          </h3>
                          <p className="text-sm text-ink-600 mt-1">{item.slug}</p>
                        </div>
                      </div>

                      {/* Image Preview */}
                      {hasVerticalImage && (
                        <div className="mb-4 aspect-[9/16] relative bg-ink-100 rounded-xl overflow-hidden max-h-80">
                          <img
                            src={item.vertical_image_url}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}

                      {/* Prompts - Solo si ya tiene imagen vertical */}
                      {hasVerticalImage && (
                        <>
                          {/* Base Prompt */}
                          {item.base_prompt && (
                            <div className="mb-3">
                              <div className="flex items-center justify-between mb-1">
                                <label className="text-xs font-medium text-ink-700 uppercase tracking-wider">
                                  Prompt Base
                                </label>
                                {editingId === itemKey && editingField === 'base' ? (
                                  <div className="flex gap-2">
                                    <button
                                      onClick={() => saveEdit(item)}
                                      className="text-xs text-jungle-600 hover:text-jungle-700 font-medium"
                                    >
                                      Guardar
                                    </button>
                                    <button
                                      onClick={cancelEdit}
                                      className="text-xs text-ember-600 hover:text-ember-700 font-medium"
                                    >
                                      Cancelar
                                    </button>
                                  </div>
                                ) : (
                                  <button
                                    onClick={() => startEdit(item, 'base')}
                                    className="text-xs text-river-600 hover:text-river-700 font-medium"
                                  >
                                    Editar
                                  </button>
                                )}
                              </div>
                              {editingId === itemKey && editingField === 'base' ? (
                                <textarea
                                  value={editValue}
                                  onChange={(e) => setEditValue(e.target.value)}
                                  className="input-glass min-h-[80px] text-sm"
                                  rows={3}
                                />
                              ) : (
                                <p className="text-sm text-ink-600 bg-ink-50 rounded-lg p-2 line-clamp-2">
                                  {item.base_prompt}
                                </p>
                              )}
                            </div>
                          )}

                          {/* Custom Prompt */}
                          <div className="mb-4">
                            <div className="flex items-center justify-between mb-1">
                              <label className="text-xs font-medium text-ink-700 uppercase tracking-wider">
                                Prompt Individual
                              </label>
                              {editingId === itemKey && editingField === 'custom' ? (
                                <div className="flex gap-2">
                                  <button
                                    onClick={() => saveEdit(item)}
                                    className="text-xs text-jungle-600 hover:text-jungle-700 font-medium"
                                  >
                                    Guardar
                                  </button>
                                  <button
                                    onClick={cancelEdit}
                                    className="text-xs text-ember-600 hover:text-ember-700 font-medium"
                                  >
                                    Cancelar
                                  </button>
                                </div>
                              ) : (
                                <button
                                  onClick={() => startEdit(item, 'custom')}
                                  className="text-xs text-river-600 hover:text-river-700 font-medium"
                                >
                                  Editar
                                </button>
                              )}
                            </div>
                            {editingId === itemKey && editingField === 'custom' ? (
                              <textarea
                                value={editValue}
                                onChange={(e) => setEditValue(e.target.value)}
                                className="input-glass min-h-[80px] text-sm"
                                rows={3}
                                placeholder="Detalles específicos..."
                              />
                            ) : (
                              <p className="text-sm text-ink-600 bg-ink-50 rounded-lg p-2 line-clamp-2">
                                {item.custom_prompt || item.image_prompt || "(Sin prompt personalizado)"}
                              </p>
                            )}
                          </div>
                        </>
                      )}

                      {/* Actions */}
                      <div className="mt-auto pt-4 border-t border-ink-200">
                        {hasVerticalImage ? (
                          <Button
                            onClick={() => regenerateImage(item)}
                            disabled={isGenerating}
                            className="w-full bg-ember-500 hover:bg-ember-600"
                          >
                            {isGenerating ? "Regenerando..." : "Regenerar Imagen"}
                          </Button>
                        ) : (
                          <Button
                            onClick={() => generateSingle(item)}
                            disabled={isGenerating}
                            className="w-full bg-jungle-600 hover:bg-jungle-700"
                          >
                            {isGenerating ? (
                              <>
                                <div className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                Generando...
                              </>
                            ) : (
                              "Generar Imagen"
                            )}
                          </Button>
                        )}
                      </div>
                    </div>
                  </GlassCard>
                );
              })}
            </div>

            {/* Pagination */}
            <div className="mt-8">
              <div className="flex justify-center items-center gap-4 mb-3">
                <Button
                  onClick={() => handlePageChange(page - 1)}
                  disabled={page === 1}
                  className="bg-ink-700"
                >
                  Anterior
                </Button>
                <span className="text-ink-700 font-medium">
                  Página {page} {totalPages > 1 && `de ${totalPages}`}
                </span>
                <Button
                  onClick={() => handlePageChange(page + 1)}
                  disabled={items.length < 20}
                  className="bg-ink-700"
                >
                  Siguiente
                </Button>
              </div>
              <p className="text-center text-ink-600 text-sm">
                Mostrando {items.length} entidades {total > 0 && `de ${total} totales`}
              </p>
            </div>
          </>
        )}
      </div>
    </AdminLayout>
  );
}
