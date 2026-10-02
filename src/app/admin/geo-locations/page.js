"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import AdminLayout from "../../../components/AdminLayout";
import { GlassCard } from "../../../components/ui/GlassCard";
import { Button, ButtonLink } from "../../../components/ui/Button";
import { Badge } from "../../../components/ui/Badge";
import { ProgressBar } from "../../../components/ui/ProgressBar";

export default function GeoLocationsAdminPage() {
  const [count, setCount] = useState(5);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState({ current: 0, total: 0 });
  const [results, setResults] = useState([]);
  const [pendingTotal, setPendingTotal] = useState(null);
  const [breakdown, setBreakdown] = useState([]);
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const fetchCount = async (username, password) => {
    try {
      const auth = btoa(`${username}:${password}`);
      const response = await fetch("/api/admin/geo-locations", {
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
        setPendingTotal(data.total);
        setBreakdown(data.breakdown || []);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error("Error fetching geo counts:", error);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCredentials({ username: "", password: "" });
    setResults([]);
    setPendingTotal(null);
    setBreakdown([]);
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
    setResults([]);
    setProgress({ current: 0, total: count });

    const auth = btoa(`${credentials.username}:${credentials.password}`);
    const allResults = [];

    try {
      for (let i = 0; i < count; i += 1) {
        setProgress({ current: i + 1, total: count });

        try {
          const response = await fetch("/api/admin/geo-locations", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Basic ${auth}`,
            },
            body: JSON.stringify({ count: 1 }),
          });

          if (response.status === 401) {
            handleLogout();
            alert("Sesión expirada. Por favor, inicia sesión nuevamente.");
            break;
          }

          if (!response.ok) {
            const errorText = await response.text();
            console.error("API Error:", errorText);
            allResults.push({
              title: `Mito ${i + 1}`,
              error: `Error del servidor (${response.status})`,
              success: false,
            });
            setResults([...allResults]);
            continue;
          }

          const data = await response.json();
          if (data.updated && data.updated.length > 0) {
            allResults.push(...data.updated);
          }
          setResults([...allResults]);
        } catch (error) {
          console.error(`Error generating location ${i + 1}:`, error);
          allResults.push({
            title: `Mito ${i + 1}`,
            error: error.message || "Error desconocido",
            success: false,
          });
          setResults([...allResults]);
        }
      }

      await fetchCount(credentials.username, credentials.password);
    } catch (error) {
      console.error("Error in geo generation process:", error);
      alert("Error en el proceso de geolocalizacion: " + error.message);
    } finally {
      setLoading(false);
      setProgress({ current: 0, total: 0 });
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
                Geolocalización
              </h1>
              <p className="text-sm text-ink-600">
                Inicia sesión desde el panel principal.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-ink-600">
                Este módulo usa la misma sesión del admin de imágenes.
              </p>
              <ButtonLink href="/admin" className="w-full">
                Ir a iniciar sesión
              </ButtonLink>
              <div className="text-xs text-ink-500">
                Luego vuelve a{" "}
                <Link href="/admin/geo-locations" className="underline">
                  geolocalización
                </Link>
                .
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    );
  }

  return (
    <AdminLayout onLogout={handleLogout}>
      <div className="space-y-6">
        <div>
          <h1 className="font-display text-4xl text-ink-900">
            Geolocalización de mitos
          </h1>
          <p className="mt-2 text-ink-600">
            Genera latitud y longitud con IA usando investigación web. Procesa mito
            a mito para evitar timeouts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <GlassCard className="p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-river-600 mb-2">
              Total Pendiente
            </p>
            <p className="font-display text-4xl text-ink-900">
              {pendingTotal !== null ? pendingTotal : "..."}
            </p>
          </GlassCard>

          <GlassCard className="p-6 md:col-span-2">
            <p className="text-xs uppercase tracking-[0.3em] text-ink-500 mb-3">
              Pendientes por región
            </p>
            <div className="flex flex-wrap gap-2">
              {breakdown.length > 0 ? (
                breakdown.map((item) => (
                  <Badge key={item.slug || item.name}>
                    {item.name} ({item.total})
                  </Badge>
                ))
              ) : (
                <span className="text-sm text-ink-500">Sin datos</span>
              )}
            </div>
          </GlassCard>
        </div>

        <GlassCard className="p-6 space-y-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-2xl text-ink-900">
                Generar ubicaciones
              </h2>
              <p className="text-sm text-ink-600">
                Procesa 5, 10 o la cantidad que necesites en cada lote.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <label className="text-xs uppercase tracking-[0.3em] text-ink-500">
                Cantidad
                <input
                  type="number"
                  min="1"
                  max="50"
                  value={count}
                  onChange={(e) => setCount(Number(e.target.value))}
                  className="input-glass mt-2 w-24"
                />
              </label>
              <Button
                onClick={handleGenerate}
                disabled={loading}
                className="whitespace-nowrap"
              >
                {loading ? "Generando..." : "Generar"}
              </Button>
            </div>
          </div>

          {progress.total > 0 && (
            <div className="mt-2">
              <ProgressBar
                current={progress.current}
                total={progress.total}
                label="Progreso"
              />
            </div>
          )}
        </GlassCard>

        <div className="space-y-4">
          {results.map((result, index) => (
            <GlassCard key={`${result.slug || result.title}-${index}`} className="p-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-lg text-ink-900">
                      {result.title}
                    </h3>
                    {result.success ? (
                      <Badge className="border-jungle-500/30 bg-jungle-500/10 text-jungle-600">
                        Actualizado
                      </Badge>
                    ) : (
                      <Badge className="border-ember-500/30 bg-ember-500/10 text-ember-600">
                        Error
                      </Badge>
                    )}
                    {result.used_fallback ? (
                      <Badge className="border-ember-500/30 bg-ember-500/10 text-ember-600">
                        Fallback
                      </Badge>
                    ) : null}
                  </div>

                  <p className="text-xs uppercase tracking-[0.3em] text-ink-500">
                    {result.region} {result.community ? `· ${result.community}` : ""}
                  </p>

                  {result.success && (
                    <div className="text-sm text-ink-700">
                      <p>
                        {result.location_name} · {result.latitude}, {result.longitude}
                      </p>
                      <p className="text-xs text-ink-500 mt-1">
                        Confianza: {Math.round((result.confidence || 0) * 100)}%
                      </p>
                    </div>
                  )}

                  {result.rationale ? (
                    <p className="text-xs text-ink-500">{result.rationale}</p>
                  ) : null}

                  {result.fallback_reason ? (
                    <p className="text-xs text-ember-600">{result.fallback_reason}</p>
                  ) : null}

                  {result.warning ? (
                    <p className="text-xs text-ember-600">{result.warning}</p>
                  ) : null}

                  {result.error ? (
                    <p className="text-xs text-ember-600">{result.error}</p>
                  ) : null}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
