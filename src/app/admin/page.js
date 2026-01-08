"use client";

import { useState, useEffect } from "react";
import AdminLayout from "../../components/AdminLayout";
import { GlassCard } from "../../components/ui/GlassCard";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";

export default function AdminPage() {
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [mythsWithoutImages, setMythsWithoutImages] = useState(null);
  const [totalPending, setTotalPending] = useState(null);
  const [breakdown, setBreakdown] = useState(null);
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const fetchCount = async (username, password) => {
    try {
      const auth = btoa(`${username}:${password}`);
      const response = await fetch("/api/admin/generate-images", {
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
        setMythsWithoutImages(data.mythsWithoutImages);
        setTotalPending(data.total);
        setBreakdown(data.breakdown);
        setIsAuthenticated(true);
        localStorage.setItem("admin_auth", btoa(`${username}:${password}`));
      }
    } catch (error) {
      console.error("Error fetching count:", error);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    fetchCount(credentials.username, credentials.password);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCredentials({ username: "", password: "" });
    setResults(null);
    setMythsWithoutImages(null);
    setTotalPending(null);
    setBreakdown(null);
    localStorage.removeItem("admin_auth");
  };

  useEffect(() => {
    const savedAuth = localStorage.getItem("admin_auth");
    if (savedAuth) {
      try {
        const decoded = atob(savedAuth);
        const [username, password] = decoded.split(":");
        setCredentials({ username, password });
        fetchCount(username, password);
      } catch (error) {
        console.error("Error loading saved session:", error);
        localStorage.removeItem("admin_auth");
      }
    }
  }, []);

  const handleGenerate = async () => {
    setLoading(true);
    setResults(null);

    try {
      const auth = btoa(`${credentials.username}:${credentials.password}`);
      const response = await fetch("/api/admin/generate-images", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${auth}`,
        },
        body: JSON.stringify({ count: 1 }), // Always generate 1 image at a time
      });

      if (response.status === 401) {
        handleLogout();
        alert("Sesión expirada. Por favor, inicia sesión nuevamente.");
        return;
      }

      if (response.status === 504) {
        alert("Timeout: La generación excedió el límite de 5 minutos de Vercel. Por favor, intenta de nuevo generando 1 imagen a la vez.");
        return;
      }

      if (!response.ok) {
        const errorText = await response.text();
        console.error("API Error:", errorText);
        alert(`Error del servidor (${response.status}): ${errorText.substring(0, 100)}`);
        return;
      }

      const data = await response.json();
      setResults(data);

      await fetchCount(credentials.username, credentials.password);
    } catch (error) {
      console.error("Error generating images:", error);
      if (error.message.includes("JSON") || error.message.includes("timeout")) {
        alert("Error: La solicitud excedió el tiempo límite. Verifica tu conexión e intenta nuevamente.");
      } else {
        alert("Error al generar imágenes: " + error.message);
      }
    } finally {
      setLoading(false);
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
                Panel de Administración
              </h1>
              <p className="text-sm text-ink-600">Mitos de Colombia</p>
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
          <h1 className="font-display text-4xl text-ink-900">Generador de Imágenes</h1>
          <p className="mt-2 text-ink-600">Genera imágenes para mitos, comunidades, categorías y regiones sin imágenes</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <GlassCard className="p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-river-600 mb-2">
              Total Pendiente
            </p>
            <p className="font-display text-4xl text-ink-900">
              {totalPending !== null ? totalPending : "..."}
            </p>
          </GlassCard>

          <GlassCard className="p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-jungle-600 mb-2">
              Mitos
            </p>
            <p className="font-display text-4xl text-ink-900">
              {breakdown?.myths !== undefined ? breakdown.myths : "..."}
            </p>
          </GlassCard>

          <GlassCard className="p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-ember-500 mb-2">
              Comunidades
            </p>
            <p className="font-display text-4xl text-ink-900">
              {breakdown?.communities !== undefined ? breakdown.communities : "..."}
            </p>
          </GlassCard>

          <GlassCard className="p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-river-500 mb-2">
              Categorías
            </p>
            <p className="font-display text-4xl text-ink-900">
              {breakdown?.categories !== undefined ? breakdown.categories : "..."}
            </p>
          </GlassCard>

          <GlassCard className="p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-jungle-500 mb-2">
              Regiones
            </p>
            <p className="font-display text-4xl text-ink-900">
              {breakdown?.regions !== undefined ? breakdown.regions : "..."}
            </p>
          </GlassCard>
        </div>

        {/* Generator Form */}
        <GlassCard className="p-8">
          <h2 className="font-display text-2xl text-ink-900 mb-6">
            Generar Imágenes
          </h2>

          <div className="space-y-4">
            {/* Warning about limit */}
            <div className="p-4 bg-river-500/10 border border-river-500/20 rounded-xl">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-river-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-river-700 text-sm font-medium">
                    Límite de 1 imagen por generación
                  </p>
                  <p className="text-river-600 text-xs mt-1">
                    Debido al límite de tiempo de Vercel (5 minutos), solo puedes generar 1 imagen a la vez.
                    Cada imagen toma aproximadamente 1-2 minutos en generarse.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-ink-700 mb-2">
                Cantidad de imágenes
              </label>
              <div className="flex gap-4 items-center">
                <input
                  type="number"
                  min="1"
                  max="1"
                  value={1}
                  className="input-glass w-32"
                  disabled={true}
                />
                <Button
                  onClick={handleGenerate}
                  disabled={loading || totalPending === 0}
                  className="flex-1"
                >
                  {loading ? "Generando..." : "Generar 1 Imagen"}
                </Button>
              </div>
            </div>

            {loading && (
              <div className="p-4 bg-ember-500/10 border border-ember-500/20 rounded-xl">
                <p className="text-ember-600 text-sm">
                  Generando imagen... Esto tomará 1-2 minutos. Por favor espera.
                </p>
              </div>
            )}
          </div>
        </GlassCard>

        {/* Results */}
        {results && (
          <div className="space-y-6">
            <div className="p-6 bg-jungle-500/10 border border-jungle-500/20 rounded-2xl">
              <p className="text-jungle-700 font-semibold">
                {results.message}
              </p>
            </div>

            <GlassCard className="p-8">
              <h2 className="font-display text-2xl text-ink-900 mb-6">
                Resultados ({results.generated?.length || 0})
              </h2>

              <div className="space-y-4">
                {results.generated?.map((myth, index) => (
                  <div
                    key={`${myth.type}-${myth.id}`}
                    className={`p-6 rounded-xl border ${
                      myth.success
                        ? "bg-jungle-500/5 border-jungle-500/20"
                        : "bg-ember-500/5 border-ember-500/20"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge
                            className={
                              myth.type === "myth"
                                ? "border-jungle-500/30 bg-jungle-500/10 text-jungle-700"
                                : myth.type === "community"
                                ? "border-river-500/30 bg-river-500/10 text-river-700"
                                : myth.type === "category"
                                ? "border-ember-400/30 bg-ember-400/10 text-ember-600"
                                : myth.type === "region"
                                ? "border-ink-500/30 bg-ink-500/10 text-ink-700"
                                : "border-ink-500/30 bg-ink-500/10 text-ink-700"
                            }
                          >
                            {myth.typeLabel || myth.type}
                          </Badge>
                        </div>
                        <h3 className="text-lg font-semibold text-ink-900 mb-2">
                          {index + 1}. {myth.title}
                        </h3>
                        {myth.success ? (
                          <div className="space-y-3">
                            <p className="text-jungle-600 text-sm">
                              Imagen generada exitosamente
                            </p>
                            <a
                              href={myth.imageUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-river-600 hover:text-river-500 text-sm font-medium"
                            >
                              Ver imagen
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </svg>
                            </a>
                            {myth.imageUrl && (
                              <div className="mt-4">
                                <img
                                  src={myth.imageUrl}
                                  alt={myth.title}
                                  className="w-full max-w-md rounded-xl shadow-lg border border-white/60"
                                />
                              </div>
                            )}
                          </div>
                        ) : (
                          <p className="text-ember-600 text-sm">
                            Error: {myth.error}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
