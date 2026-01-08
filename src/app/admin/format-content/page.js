"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminLayout from "../../../components/AdminLayout";
import { GlassCard } from "../../../components/ui/GlassCard";
import { Button } from "../../../components/ui/Button";
import { Badge } from "../../../components/ui/Badge";

export default function FormatContentPage() {
  const router = useRouter();
  const [count, setCount] = useState(10);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState({ current: 0, total: 0 });
  const [results, setResults] = useState([]);
  const [totalPending, setTotalPending] = useState(null);
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const fetchCount = async (username, password) => {
    try {
      const auth = btoa(`${username}:${password}`);
      const response = await fetch("/api/admin/format-content", {
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
        setTotalPending(data.total);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error("Error fetching count:", error);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCredentials({ username: "", password: "" });
    setResults([]);
    setTotalPending(null);
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
        fetchCount(username, password);
      } catch (error) {
        console.error("Error loading saved session:", error);
        localStorage.removeItem("admin_auth");
        router.push("/admin");
      }
    } else {
      router.push("/admin");
    }
  }, [router]);

  // Format content one at a time with progress tracking
  const handleFormat = async () => {
    setLoading(true);
    setResults([]);
    setProgress({ current: 0, total: count });

    const auth = btoa(`${credentials.username}:${credentials.password}`);
    const allResults = [];

    try {
      // Format content one by one with separate API calls
      for (let i = 0; i < count; i++) {
        setProgress({ current: i + 1, total: count });

        try {
          const response = await fetch("/api/admin/format-content", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Basic ${auth}`,
            },
            body: JSON.stringify({ count: 1 }), // Always 1 myth per request
          });

          if (response.status === 401) {
            handleLogout();
            alert("Sesión expirada. Por favor, inicia sesión nuevamente.");
            break;
          }

          if (response.status === 504) {
            const errorResult = {
              title: `Mito ${i + 1}`,
              error: "Timeout: El formateo excedió el límite de tiempo",
              success: false,
            };
            allResults.push(errorResult);
            setResults([...allResults]);
            continue;
          }

          if (!response.ok) {
            const errorText = await response.text();
            console.error("API Error:", errorText);
            const errorResult = {
              title: `Mito ${i + 1}`,
              error: `Error del servidor (${response.status})`,
              success: false,
            };
            allResults.push(errorResult);
            setResults([...allResults]);
            continue;
          }

          const data = await response.json();

          // Add the formatted myth(s) to results
          if (data.formatted && data.formatted.length > 0) {
            allResults.push(...data.formatted);
          }

          // Update results in real-time
          setResults([...allResults]);

        } catch (error) {
          console.error(`Error formatting myth ${i + 1}:`, error);
          const errorResult = {
            title: `Mito ${i + 1}`,
            error: error.message || "Error desconocido",
            success: false,
          };
          allResults.push(errorResult);
          setResults([...allResults]);
        }
      }

      // Refresh count after all formatting
      await fetchCount(credentials.username, credentials.password);

    } catch (error) {
      console.error("Error in formatting process:", error);
      alert("Error en el proceso de formateo: " + error.message);
    } finally {
      setLoading(false);
      setProgress({ current: 0, total: 0 });
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <GlassCard className="p-8">
          <p className="text-ink-600">Cargando...</p>
        </GlassCard>
      </div>
    );
  }

  return (
    <AdminLayout onLogout={handleLogout}>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="font-display text-4xl text-ink-900">Formatear Contenido de Mitos</h1>
          <p className="mt-2 text-ink-600">Organiza el texto de los mitos en párrafos usando IA, sin reescribir el contenido</p>
        </div>

        {/* Stats Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <GlassCard className="p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-river-600 mb-2">
              Mitos sin formatear
            </p>
            <p className="font-display text-4xl text-ink-900">
              {totalPending !== null ? totalPending : "..."}
            </p>
          </GlassCard>

          <GlassCard className="p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-jungle-600 mb-2">
              Procesados hoy
            </p>
            <p className="font-display text-4xl text-ink-900">
              {results.filter(r => r.success).length}
            </p>
          </GlassCard>

          <GlassCard className="p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-ember-500 mb-2">
              Errores
            </p>
            <p className="font-display text-4xl text-ink-900">
              {results.filter(r => !r.success).length}
            </p>
          </GlassCard>
        </div>

        {/* Format Form */}
        <GlassCard className="p-8">
          <h2 className="font-display text-2xl text-ink-900 mb-6">
            Formatear Contenido
          </h2>

          <div className="space-y-4">
            {/* Info about how it works */}
            <div className="p-4 bg-river-500/10 border border-river-500/20 rounded-xl">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-river-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-river-700 text-sm font-medium">
                    Formateo inteligente con IA
                  </p>
                  <p className="text-river-600 text-xs mt-1">
                    OpenAI organiza el texto en párrafos SIN reescribir el contenido. Solo añade saltos de línea.
                    Los mitos se procesan uno por uno (~30-60 segundos cada uno).
                  </p>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-ink-700 mb-2">
                Cantidad de mitos a formatear (1-20)
              </label>
              <div className="flex gap-4 items-center">
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={count}
                  onChange={(e) => setCount(Math.min(20, Math.max(1, parseInt(e.target.value) || 1)))}
                  className="input-glass w-32"
                  disabled={loading}
                />
                <Button
                  onClick={handleFormat}
                  disabled={loading || totalPending === 0}
                  className="flex-1"
                >
                  {loading ? `Formateando ${progress.current}/${progress.total}...` : `Formatear ${count} Mito${count > 1 ? 's' : ''}`}
                </Button>
              </div>
            </div>

            {loading && (
              <div className="p-4 bg-ember-500/10 border border-ember-500/20 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-ember-700 text-sm font-medium">
                    Formateando mito {progress.current} de {progress.total}...
                  </p>
                  <p className="text-ember-600 text-xs">
                    {Math.round((progress.current / progress.total) * 100)}%
                  </p>
                </div>
                <div className="w-full bg-ember-500/20 rounded-full h-2">
                  <div
                    className="bg-ember-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(progress.current / progress.total) * 100}%` }}
                  />
                </div>
                <p className="text-ember-600 text-xs mt-2">
                  Por favor espera. No cierres esta ventana.
                </p>
              </div>
            )}
          </div>
        </GlassCard>

        {/* Results */}
        {results.length > 0 && (
          <div className="space-y-6">
            <div className="p-6 bg-jungle-500/10 border border-jungle-500/20 rounded-2xl">
              <p className="text-jungle-700 font-semibold">
                Resultados: {results.filter(r => r.success).length} exitosos de {results.length} intentos
              </p>
            </div>

            <GlassCard className="p-8">
              <h2 className="font-display text-2xl text-ink-900 mb-6">
                Mitos Formateados ({results.length})
              </h2>

              <div className="space-y-4">
                {results.map((item, index) => (
                  <div
                    key={`${item.id}-${index}`}
                    className={`p-6 rounded-xl border ${
                      item.success
                        ? "bg-jungle-500/5 border-jungle-500/20"
                        : "bg-ember-500/5 border-ember-500/20"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge className="border-jungle-500/30 bg-jungle-500/10 text-jungle-700">
                            Mito
                          </Badge>
                        </div>
                        <h3 className="text-lg font-semibold text-ink-900 mb-2">
                          {index + 1}. {item.title}
                        </h3>
                        {item.success ? (
                          <div className="space-y-2">
                            <p className="text-jungle-600 text-sm">
                              Contenido formateado exitosamente
                            </p>
                            <div className="grid grid-cols-3 gap-4 mt-3 text-xs text-ink-600">
                              <div>
                                <span className="font-medium">Original:</span> {item.originalLength} caracteres
                              </div>
                              <div>
                                <span className="font-medium">Formateado:</span> {item.formattedLength} caracteres
                              </div>
                              <div>
                                <span className="font-medium">Párrafos:</span> {item.paragraphCount}
                              </div>
                            </div>
                            <a
                              href={`/mitos/${item.slug}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-river-600 hover:text-river-500 text-sm font-medium mt-2"
                            >
                              Ver mito formateado
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
                          </div>
                        ) : (
                          <p className="text-ember-600 text-sm">
                            Error: {item.error}
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
