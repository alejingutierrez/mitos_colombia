"use client";

import { useEffect, useMemo, useState } from "react";
import AdminLayout from "../../../components/AdminLayout";
import { GlassCard } from "../../../components/ui/GlassCard";
import { Button, ButtonLink } from "../../../components/ui/Button";
import { Badge } from "../../../components/ui/Badge";

const STATUS_OPTIONS = [
  { value: "all", label: "Todos" },
  { value: "new", label: "Nuevos" },
  { value: "read", label: "Leídos" },
  { value: "archived", label: "Archivados" },
];

const STATUS_LABELS = {
  new: "Nuevo",
  read: "Leído",
  archived: "Archivado",
};

const STATUS_BADGE = {
  new: "border-ember-500/30 bg-ember-500/10 text-ember-600",
  read: "border-river-500/30 bg-river-500/10 text-river-600",
  archived: "border-ink-500/30 bg-ink-500/10 text-ink-600",
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

export default function AdminContactoPage() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [stats, setStats] = useState(null);
  const [statusFilter, setStatusFilter] = useState("all");

  const fetchMessages = async (username, password, status = statusFilter) => {
    try {
      setLoading(true);
      const auth = btoa(`${username}:${password}`);
      const params = new URLSearchParams();
      if (status && status !== "all") {
        params.set("status", status);
      }
      const response = await fetch(`/api/admin/contact?${params.toString()}`, {
        headers: { Authorization: `Basic ${auth}` },
      });

      if (response.status === 401) {
        setIsAuthenticated(false);
        localStorage.removeItem("admin_auth");
        return;
      }

      if (!response.ok) {
        throw new Error("No se pudieron cargar los mensajes.");
      }

      const data = await response.json();
      setMessages(data.messages || []);
      setStats(data.stats || null);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCredentials({ username: "", password: "" });
    setMessages([]);
    setStats(null);
    localStorage.removeItem("admin_auth");
  };

  useEffect(() => {
    const savedAuth = localStorage.getItem("admin_auth");
    if (!savedAuth) return;
    try {
      const decoded = atob(savedAuth);
      const [username, password] = decoded.split(":");
      setCredentials({ username, password });
      fetchMessages(username, password, statusFilter);
    } catch (error) {
      console.error("Error loading saved session:", error);
      localStorage.removeItem("admin_auth");
    }
  }, []);

  useEffect(() => {
    if (!isAuthenticated) return;
    if (!credentials.username || !credentials.password) return;
    fetchMessages(credentials.username, credentials.password, statusFilter);
  }, [statusFilter]);

  const handleStatusUpdate = async (id, nextStatus) => {
    try {
      const auth = btoa(`${credentials.username}:${credentials.password}`);
      const response = await fetch("/api/admin/contact", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${auth}`,
        },
        body: JSON.stringify({ id, status: nextStatus }),
      });

      if (response.status === 401) {
        handleLogout();
        return;
      }

      if (!response.ok) {
        const payload = await response.json();
        throw new Error(payload?.error || "No se pudo actualizar el mensaje.");
      }

      fetchMessages(credentials.username, credentials.password, statusFilter);
    } catch (error) {
      console.error("Error updating contact message:", error);
    }
  };

  const summaryCards = useMemo(() => {
    if (!stats) return [];
    return [
      { label: "Total", value: stats.total },
      { label: "Nuevos", value: stats.new },
      { label: "Leídos", value: stats.read },
      { label: "Archivados", value: stats.archived },
    ];
  }, [stats]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-32 left-12 h-72 w-72 rounded-full bg-jungle-500/30 blur-3xl motion-safe:animate-float-slow" />
          <div className="absolute right-0 top-6 h-80 w-80 rounded-full bg-river-500/25 blur-3xl motion-safe:animate-float-slow" />
        </div>

        <div className="w-full max-w-md">
          <GlassCard className="p-8 text-center space-y-4">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-jungle-600 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg mx-auto">
              MC
            </div>
            <div>
              <h1 className="font-display text-3xl text-ink-900">
                Mensajes de contacto
              </h1>
              <p className="text-sm text-ink-600">
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
            <h1 className="font-display text-4xl text-ink-900">
              Mensajes de contacto
            </h1>
            <p className="mt-2 text-ink-600">
              Revisa, responde y organiza los mensajes enviados desde el sitio.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              onClick={() =>
                fetchMessages(credentials.username, credentials.password, statusFilter)
              }
            >
              Actualizar
            </Button>
          </div>
        </div>

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
                className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.3em] transition ${
                  statusFilter === option.value
                    ? "bg-jungle-600 text-white"
                    : "border border-ink-500/20 text-ink-600 hover:border-ink-500/40"
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
              <p className="text-sm text-ink-600">Cargando mensajes...</p>
            </GlassCard>
          ) : messages.length === 0 ? (
            <GlassCard className="p-6">
              <p className="text-sm text-ink-600">
                No hay mensajes en esta categoría.
              </p>
            </GlassCard>
          ) : (
            messages.map((message) => (
              <GlassCard key={message.id} className="p-6 space-y-4">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-ink-500">
                      {formatDate(message.created_at)}
                    </p>
                    <h2 className="mt-2 font-display text-2xl text-ink-900">
                      {message.subject || "Sin asunto"}
                    </h2>
                    <p className="mt-2 text-sm text-ink-600">
                      {message.name} · {message.email}
                    </p>
                  </div>
                  <Badge className={STATUS_BADGE[message.status] || ""}>
                    {STATUS_LABELS[message.status] || message.status}
                  </Badge>
                </div>

                <p className="text-sm text-ink-600 leading-relaxed whitespace-pre-line">
                  {message.message}
                </p>

                <div className="flex flex-wrap gap-2">
                  {message.status !== "read" ? (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleStatusUpdate(message.id, "read")}
                    >
                      Marcar leído
                    </Button>
                  ) : null}
                  {message.status !== "archived" ? (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleStatusUpdate(message.id, "archived")}
                    >
                      Archivar
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleStatusUpdate(message.id, "read")}
                    >
                      Restaurar
                    </Button>
                  )}
                </div>
              </GlassCard>
            ))
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
