"use client";

/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useMemo, useState } from "react";
import AdminLayout from "../../../components/AdminLayout";
import { GlassCard } from "../../../components/ui/GlassCard";
import { Button, ButtonLink } from "../../../components/ui/Button";
import { Badge } from "../../../components/ui/Badge";

/**
 * Moderación de comentarios.
 *
 * Sigue el patrón de `/admin/contacto`: Basic auth guardada en `admin_auth`,
 * tarjetas de resumen, filtro por estado y acciones por fila. La única
 * diferencia de fondo es que aquí borrar es definitivo, así que pide
 * confirmación.
 */

const STATUS_OPTIONS = [
  { value: "pending", label: "Pendientes" },
  { value: "approved", label: "Aprobados" },
  { value: "rejected", label: "Rechazados" },
  { value: "all", label: "Todos" },
];

const STATUS_LABELS = {
  pending: "Pendiente",
  approved: "Aprobado",
  rejected: "Rechazado",
};

const STATUS_BADGE = {
  pending: "border-ember-500/30 bg-ember-500/10 text-ember-500",
  approved: "border-jungle-500/30 bg-jungle-500/10 text-jungle-700",
  rejected: "border-ink-500/30 bg-ink-500/10 text-ink-500",
};

function formatDate(value) {
  try {
    return new Date(value).toLocaleString("es-CO", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  } catch (error) {
    return value;
  }
}

export default function AdminComentariosPage() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const [stats, setStats] = useState(null);
  const [statusFilter, setStatusFilter] = useState("pending");
  const [error, setError] = useState(null);
  const [busyId, setBusyId] = useState(null);

  const fetchComments = async (username, password, status = statusFilter) => {
    try {
      setLoading(true);
      setError(null);
      const auth = btoa(`${username}:${password}`);
      const params = new URLSearchParams();
      if (status && status !== "all") {
        params.set("status", status);
      }
      const response = await fetch(`/api/admin/comments?${params.toString()}`, {
        headers: { Authorization: `Basic ${auth}` },
      });

      if (response.status === 401) {
        setIsAuthenticated(false);
        localStorage.removeItem("admin_auth");
        return;
      }

      if (!response.ok) {
        throw new Error("No se pudieron cargar los comentarios.");
      }

      const data = await response.json();
      setComments(data.comments || []);
      setStats(data.stats || null);
      setIsAuthenticated(true);
    } catch (loadError) {
      console.error("Error fetching comments:", loadError);
      setError(loadError.message || "No se pudieron cargar los comentarios.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCredentials({ username: "", password: "" });
    setComments([]);
    setStats(null);
    localStorage.removeItem("admin_auth");
  };

  useEffect(() => {
    const savedAuth = localStorage.getItem("admin_auth");
    if (!savedAuth) return;
    try {
      const decoded = atob(savedAuth);
      const separator = decoded.indexOf(":");
      const username = decoded.slice(0, separator);
      const password = decoded.slice(separator + 1);
      setCredentials({ username, password });
      fetchComments(username, password, statusFilter);
    } catch (sessionError) {
      console.error("Error loading saved session:", sessionError);
      localStorage.removeItem("admin_auth");
    }
  }, []);

  useEffect(() => {
    if (!isAuthenticated) return;
    if (!credentials.username || !credentials.password) return;
    fetchComments(credentials.username, credentials.password, statusFilter);
  }, [statusFilter]);

  const mutate = async ({ id, method, body, confirmMessage }) => {
    if (confirmMessage && !window.confirm(confirmMessage)) return;

    try {
      setBusyId(id);
      setError(null);
      const auth = btoa(`${credentials.username}:${credentials.password}`);
      const response = await fetch("/api/admin/comments", {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${auth}`,
        },
        body: JSON.stringify(body),
      });

      if (response.status === 401) {
        handleLogout();
        return;
      }

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        throw new Error(payload?.error || "No se pudo aplicar el cambio.");
      }

      await fetchComments(credentials.username, credentials.password, statusFilter);
    } catch (mutationError) {
      console.error("Error moderating comment:", mutationError);
      setError(mutationError.message || "No se pudo aplicar el cambio.");
    } finally {
      setBusyId(null);
    }
  };

  const setStatus = (id, status) =>
    mutate({ id, method: "PATCH", body: { id, status } });

  const remove = (id) =>
    mutate({
      id,
      method: "DELETE",
      body: { id },
      confirmMessage:
        "Borrar el comentario es definitivo y no se puede deshacer. ¿Seguir?",
    });

  const summaryCards = useMemo(() => {
    if (!stats) return [];
    return [
      { label: "Total", value: stats.total },
      { label: "Pendientes", value: stats.pending },
      { label: "Aprobados", value: stats.approved },
      { label: "Rechazados", value: stats.rejected },
    ];
  }, [stats]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <GlassCard className="p-8 text-center space-y-4">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-jungle-600 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg mx-auto">
              MC
            </div>
            <div>
              <h1 className="font-display text-3xl text-ink-900">Comentarios</h1>
              <p className="text-sm text-ink-700">
                Inicia sesión desde el panel principal.
              </p>
            </div>
            <ButtonLink href="/admin" className="w-full">
              Ir a iniciar sesión
            </ButtonLink>
          </GlassCard>
        </div>
      </div>
    );
  }

  return (
    <AdminLayout onLogout={handleLogout}>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="font-display text-4xl text-ink-900">Comentarios</h1>
            <p className="mt-2 text-ink-700">
              Todo comentario entra como pendiente. Hasta que se apruebe aquí, no
              aparece en la página del mito.
            </p>
          </div>
          <Button
            variant="outline"
            onClick={() =>
              fetchComments(credentials.username, credentials.password, statusFilter)
            }
          >
            Actualizar
          </Button>
        </div>

        {error ? (
          <GlassCard className="border border-ember-500/30 bg-ember-500/10 p-4">
            <p className="text-sm text-ember-500">{error}</p>
          </GlassCard>
        ) : null}

        <div className="grid gap-4 md:grid-cols-4">
          {summaryCards.map((card) => (
            <GlassCard key={card.label} className="p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-ink-500">
                {card.label}
              </p>
              <p className="mt-3 font-display text-3xl text-ink-900">
                {card.value ?? "..."}
              </p>
            </GlassCard>
          ))}
        </div>

        <GlassCard className="p-6">
          <div className="flex flex-wrap items-center gap-2">
            {STATUS_OPTIONS.map((option) => (
              <button
                key={option.value}
                type="button"
                className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.3em] transition ${
                  statusFilter === option.value
                    ? "bg-jungle-600 text-white"
                    : "border border-ink-500/20 text-ink-700 hover:border-ink-500/40"
                }`}
                onClick={() => setStatusFilter(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </GlassCard>

        <div className="space-y-4">
          {loading ? (
            <GlassCard className="p-6">
              <p className="text-sm text-ink-700">Cargando comentarios...</p>
            </GlassCard>
          ) : comments.length === 0 ? (
            <GlassCard className="p-6">
              <p className="text-sm text-ink-700">
                No hay comentarios en esta categoría.
              </p>
            </GlassCard>
          ) : (
            comments.map((comment) => {
              const isBusy = busyId === comment.id;
              return (
                <GlassCard key={comment.id} className="p-6 space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-[0.3em] text-ink-500">
                        {formatDate(comment.created_at)}
                      </p>
                      <h2 className="mt-2 font-display text-2xl text-ink-900">
                        {comment.author_name}
                      </h2>
                      <p className="mt-2 text-sm text-ink-700">
                        {comment.author_email || "Sin correo"}
                        {comment.myth_title ? ` · ${comment.myth_title}` : null}
                      </p>
                      {comment.myth_slug ? (
                        <a
                          href={`/mitos/${comment.myth_slug}`}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-1 inline-block text-xs uppercase tracking-[0.25em] text-jungle-700 underline underline-offset-4"
                        >
                          Ver el mito
                        </a>
                      ) : null}
                    </div>
                    <Badge className={STATUS_BADGE[comment.status] || ""}>
                      {STATUS_LABELS[comment.status] || comment.status}
                    </Badge>
                  </div>

                  <p className="text-sm leading-relaxed text-ink-700 whitespace-pre-line">
                    {comment.content}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {comment.status !== "approved" ? (
                      <Button
                        size="sm"
                        disabled={isBusy}
                        onClick={() => setStatus(comment.id, "approved")}
                      >
                        Aprobar
                      </Button>
                    ) : null}
                    {comment.status !== "rejected" ? (
                      <Button
                        variant="outline"
                        size="sm"
                        disabled={isBusy}
                        onClick={() => setStatus(comment.id, "rejected")}
                      >
                        Rechazar
                      </Button>
                    ) : null}
                    {comment.status !== "pending" ? (
                      <Button
                        variant="outline"
                        size="sm"
                        disabled={isBusy}
                        onClick={() => setStatus(comment.id, "pending")}
                      >
                        Devolver a pendiente
                      </Button>
                    ) : null}
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={isBusy}
                      onClick={() => remove(comment.id)}
                    >
                      Borrar
                    </Button>
                  </div>
                </GlassCard>
              );
            })
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
