"use client";

import { useState, useEffect } from "react";
import AdminLayout from "../../../components/AdminLayout";
import { GlassCard } from "../../../components/ui/GlassCard";
import { Button } from "../../../components/ui/Button";
import { Badge } from "../../../components/ui/Badge";
import { useRouter } from "next/navigation";

export default function VerticalImagesPage() {
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [entityTypeFilter, setEntityTypeFilter] = useState("");
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Edit states
  const [editingId, setEditingId] = useState(null);
  const [editingField, setEditingField] = useState(null); // 'base' or 'custom'
  const [editValue, setEditValue] = useState("");

  // Regenerating state
  const [regeneratingId, setRegeneratingId] = useState(null);

  // Generation stats
  const [pendingStats, setPendingStats] = useState(null);

  const fetchItems = async (username, password, currentPage = 1, filter = "") => {
    try {
      const auth = btoa(`${username}:${password}`);
      const params = new URLSearchParams({
        page: currentPage.toString(),
        limit: "20",
      });

      if (filter) {
        params.append("entityType", filter);
      }

      const response = await fetch(`/api/admin/vertical-images/list?${params}`, {
        headers: {
          Authorization: `Basic ${auth}`,
        },
      });

      if (response.status === 401) {
        setIsAuthenticated(false);
        localStorage.removeItem("admin_auth");
        return;
      }

      if (response.ok) {
        const data = await response.json();
        setItems(data.items || []);
        setTotal(data.total || 0);
        setTotalPages(data.totalPages || 1);
        setPage(currentPage);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error("Error fetching items:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchPendingStats = async (username, password) => {
    try {
      const auth = btoa(`${username}:${password}`);
      const response = await fetch("/api/admin/vertical-images/generate", {
        headers: {
          Authorization: `Basic ${auth}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setPendingStats(data);
      }
    } catch (error) {
      console.error("Error fetching pending stats:", error);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    fetchItems(credentials.username, credentials.password, 1, entityTypeFilter);
    fetchPendingStats(credentials.username, credentials.password);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCredentials({ username: "", password: "" });
    setItems([]);
    localStorage.removeItem("admin_auth");
    router.push("/admin");
  };

  useEffect(() => {
    const savedAuth = localStorage.getItem("admin_auth");
    if (savedAuth) {
      try {
        const decoded = atob(savedAuth);
        const [username, password] = decoded.split(":");
        setCredentials({ username, password });
        fetchItems(username, password, page, entityTypeFilter);
        fetchPendingStats(username, password);
      } catch (error) {
        console.error("Error loading saved session:", error);
        localStorage.removeItem("admin_auth");
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, []);

  const handlePageChange = (newPage) => {
    setLoading(true);
    fetchItems(credentials.username, credentials.password, newPage, entityTypeFilter);
  };

  const handleFilterChange = (filter) => {
    setEntityTypeFilter(filter);
    setLoading(true);
    fetchItems(credentials.username, credentials.password, 1, filter);
  };

  const startEdit = (item, field) => {
    setEditingId(item.id);
    setEditingField(field);
    setEditValue(field === 'base' ? item.base_prompt : (item.custom_prompt || ""));
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditingField(null);
    setEditValue("");
  };

  const saveEdit = async (item) => {
    try {
      const auth = btoa(`${credentials.username}:${credentials.password}`);

      const updateData = editingField === 'base'
        ? { id: item.id, basePrompt: editValue }
        : { id: item.id, customPrompt: editValue };

      const response = await fetch("/api/admin/vertical-images/update-prompt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${auth}`,
        },
        body: JSON.stringify(updateData),
      });

      if (response.ok) {
        const result = await response.json();
        // Update local state
        setItems(items.map(i => i.id === item.id ? result.data : i));
        cancelEdit();
      } else {
        const error = await response.json();
        alert(`Error: ${error.error || 'No se pudo actualizar el prompt'}`);
      }
    } catch (error) {
      console.error("Error saving prompt:", error);
      alert("Error al guardar el prompt");
    }
  };

  const regenerateImage = async (item) => {
    if (!confirm(`¿Estás seguro de que quieres regenerar la imagen para "${item.entity_name}"? La imagen actual será eliminada.`)) {
      return;
    }

    setRegeneratingId(item.id);

    try {
      const auth = btoa(`${credentials.username}:${credentials.password}`);

      const response = await fetch("/api/admin/vertical-images/regenerate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${auth}`,
        },
        body: JSON.stringify({ id: item.id }),
      });

      if (response.ok) {
        const result = await response.json();
        // Update local state
        setItems(items.map(i => i.id === item.id ? result.data : i));
        alert("Imagen regenerada exitosamente");
      } else {
        const error = await response.json();
        alert(`Error: ${error.error || 'No se pudo regenerar la imagen'}`);
      }
    } catch (error) {
      console.error("Error regenerating image:", error);
      alert("Error al regenerar la imagen");
    } finally {
      setRegeneratingId(null);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-32 left-12 h-72 w-72 rounded-full bg-jungle-500/30 blur-3xl motion-safe:animate-float-slow" />
          <div className="absolute right-0 top-6 h-80 w-80 rounded-full bg-river-500/25 blur-3xl motion-safe:animate-float-slow" />
        </div>

        <div className="w-full max-w-md">
          <GlassCard className="p-8">
            <div className="text-center mb-8">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-jungle-600 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg mb-4">
                MC
              </div>
              <h1 className="font-display text-3xl text-ink-900 mb-2">
                Imágenes Verticales
              </h1>
              <p className="text-sm text-ink-600">Curaduría Editorial</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-ink-700 mb-2">
                  Usuario
                </label>
                <input
                  type="text"
                  value={credentials.username}
                  onChange={(e) =>
                    setCredentials({ ...credentials, username: e.target.value })
                  }
                  className="input-glass"
                  placeholder="Ingresa tu usuario"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-700 mb-2">
                  Contraseña
                </label>
                <input
                  type="password"
                  value={credentials.password}
                  onChange={(e) =>
                    setCredentials({ ...credentials, password: e.target.value })
                  }
                  className="input-glass"
                  placeholder="Ingresa tu contraseña"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Iniciar Sesión
              </Button>
            </form>
          </GlassCard>
        </div>
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
        {pendingStats && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <GlassCard className="p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-river-600 mb-2">
                Total Pendiente
              </p>
              <p className="font-display text-4xl text-ink-900">
                {pendingStats.total || 0}
              </p>
            </GlassCard>

            <GlassCard className="p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-jungle-600 mb-2">
                Mitos
              </p>
              <p className="font-display text-4xl text-ink-900">
                {pendingStats.breakdown?.myths || 0}
              </p>
            </GlassCard>

            <GlassCard className="p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-ember-500 mb-2">
                Comunidades
              </p>
              <p className="font-display text-4xl text-ink-900">
                {pendingStats.breakdown?.communities || 0}
              </p>
            </GlassCard>

            <GlassCard className="p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-river-500 mb-2">
                Categorías
              </p>
              <p className="font-display text-4xl text-ink-900">
                {pendingStats.breakdown?.categories || 0}
              </p>
            </GlassCard>

            <GlassCard className="p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-jungle-500 mb-2">
                Regiones
              </p>
              <p className="font-display text-4xl text-ink-900">
                {pendingStats.breakdown?.regions || 0}
              </p>
            </GlassCard>
          </div>
        )}

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
            <p className="mt-4 text-ink-600">Cargando imágenes...</p>
          </div>
        ) : items.length === 0 ? (
          <GlassCard className="p-12 text-center">
            <p className="text-ink-600">No hay imágenes verticales creadas aún.</p>
          </GlassCard>
        ) : (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {items.map((item) => (
                <GlassCard key={item.id} className="p-6">
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
                        </div>
                        <h3 className="text-lg font-semibold text-ink-900">
                          {item.entity_name}
                        </h3>
                        <p className="text-sm text-ink-600 mt-1">{item.entity_slug}</p>
                      </div>
                    </div>

                    {/* Image */}
                    {item.image_url && (
                      <div className="mb-4 aspect-[9/16] relative bg-ink-100 rounded-xl overflow-hidden">
                        <img
                          src={item.image_url}
                          alt={item.entity_name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}

                    {/* Base Prompt */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-xs font-medium text-ink-700 uppercase tracking-wider">
                          Prompt Base
                        </label>
                        {editingId === item.id && editingField === 'base' ? (
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
                      {editingId === item.id && editingField === 'base' ? (
                        <textarea
                          value={editValue}
                          onChange={(e) => setEditValue(e.target.value)}
                          className="input-glass min-h-[100px] text-sm"
                          rows={4}
                        />
                      ) : (
                        <p className="text-sm text-ink-600 bg-ink-50 rounded-lg p-3 line-clamp-3">
                          {item.base_prompt}
                        </p>
                      )}
                    </div>

                    {/* Custom Prompt */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-xs font-medium text-ink-700 uppercase tracking-wider">
                          Prompt Individual
                        </label>
                        {editingId === item.id && editingField === 'custom' ? (
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
                      {editingId === item.id && editingField === 'custom' ? (
                        <textarea
                          value={editValue}
                          onChange={(e) => setEditValue(e.target.value)}
                          className="input-glass min-h-[100px] text-sm"
                          rows={4}
                          placeholder="Detalles específicos para esta entidad..."
                        />
                      ) : (
                        <p className="text-sm text-ink-600 bg-ink-50 rounded-lg p-3 line-clamp-3">
                          {item.custom_prompt || "(Sin prompt personalizado)"}
                        </p>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="mt-auto pt-4 border-t border-ink-200">
                      <Button
                        onClick={() => regenerateImage(item)}
                        disabled={regeneratingId === item.id}
                        className="w-full bg-ember-500 hover:bg-ember-600"
                      >
                        {regeneratingId === item.id ? (
                          <>
                            <div className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Regenerando...
                          </>
                        ) : (
                          <>
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            Regenerar Imagen
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-8">
                <Button
                  onClick={() => handlePageChange(page - 1)}
                  disabled={page === 1}
                  className="bg-ink-700"
                >
                  Anterior
                </Button>
                <span className="text-ink-700 font-medium">
                  Página {page} de {totalPages}
                </span>
                <Button
                  onClick={() => handlePageChange(page + 1)}
                  disabled={page === totalPages}
                  className="bg-ink-700"
                >
                  Siguiente
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </AdminLayout>
  );
}
