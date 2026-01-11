"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminLayout from "../../../components/AdminLayout";
import { GlassCard } from "../../../components/ui/GlassCard";
import { Button } from "../../../components/ui/Button";
import { Badge } from "../../../components/ui/Badge";

const defaultTypes = [
  { value: "all", label: "Todas" },
  { value: "page", label: "Páginas estáticas" },
  { value: "category", label: "Categorías" },
  { value: "community", label: "Comunidades" },
  { value: "region", label: "Regiones" },
  { value: "route", label: "Rutas" },
  { value: "myth", label: "Mitos" },
];

export default function SeoPagesAdminPage() {
  const router = useRouter();
  const [count, setCount] = useState(5);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState({ current: 0, total: 0 });
  const [results, setResults] = useState([]);
  const [pendingTotal, setPendingTotal] = useState(null);
  const [eligibleTotal, setEligibleTotal] = useState(null);
  const [pendingSample, setPendingSample] = useState([]);
  const [minWords, setMinWords] = useState(75);
  const [types, setTypes] = useState(defaultTypes);
  const [breakdown, setBreakdown] = useState({});
  const [pageType, setPageType] = useState("all");
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const fetchStatus = async (username, password, selectedType = pageType) => {
    try {
      const auth = btoa(`${username}:${password}`);
      const response = await fetch(
        `/api/admin/seo-pages?type=${encodeURIComponent(selectedType)}`,
        {
          headers: {
            Authorization: `Basic ${auth}`,
          },
        }
      );

      if (response.status === 401) {
        setIsAuthenticated(false);
        localStorage.removeItem("admin_auth");
        return;
      }

      if (response.ok) {
        const data = await response.json();
        setPendingTotal(data.total);
        setEligibleTotal(data.eligible);
        setPendingSample(data.sample || []);
        setMinWords(data.min_summary_words || 75);
        setTypes(data.types || defaultTypes);
        setBreakdown(data.breakdown || {});
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error("Error fetching SEO status:", error);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCredentials({ username: "", password: "" });
    setResults([]);
    setPendingTotal(null);
    setEligibleTotal(null);
    setPendingSample([]);
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
        fetchStatus(username, password);
      } catch (error) {
        console.error("Error loading saved session:", error);
        localStorage.removeItem("admin_auth");
        router.push("/admin");
      }
    } else {
      router.push("/admin");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  useEffect(() => {
    if (!credentials.username || !credentials.password) {
      return;
    }
    fetchStatus(credentials.username, credentials.password, pageType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageType]);

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
          const response = await fetch("/api/admin/seo-pages", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Basic ${auth}`,
            },
            body: JSON.stringify({ count: 1, type: pageType }),
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
              title: `Página ${i + 1}`,
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
          console.error(`Error generating SEO ${i + 1}:`, error);
          allResults.push({
            title: `Página ${i + 1}`,
            error: error.message || "Error desconocido",
            success: false,
          });
          setResults([...allResults]);
        }
      }

      await fetchStatus(credentials.username, credentials.password, pageType);
    } catch (error) {
      console.error("Error in SEO process:", error);
      alert("Error en el proceso de SEO: " + error.message);
    } finally {
      setLoading(false);
      setProgress({ current: 0, total: 0 });
    }
  };

  const breakdownEntries = Object.entries(breakdown || {});

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
        <div>
          <h1 className="font-display text-4xl text-ink-900">SEO por página</h1>
          <p className="mt-2 text-ink-600">
            Genera metadatos, descripciones, keywords y resúmenes editoriales con
            IA. Cada resumen debe tener al menos {minWords} palabras.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <GlassCard className="p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-river-600 mb-2">
              Páginas pendientes
            </p>
            <p className="font-display text-4xl text-ink-900">
              {pendingTotal !== null ? pendingTotal : "..."}
            </p>
          </GlassCard>

          <GlassCard className="p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-jungle-600 mb-2">
              Páginas elegibles
            </p>
            <p className="font-display text-4xl text-ink-900">
              {eligibleTotal !== null ? eligibleTotal : "..."}
            </p>
          </GlassCard>

          <GlassCard className="p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-ember-500 mb-2">
              Actualizadas hoy
            </p>
            <p className="font-display text-4xl text-ink-900">
              {results.filter((item) => item.success).length}
            </p>
          </GlassCard>
        </div>

        <GlassCard className="p-6 space-y-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="w-full md:max-w-sm">
              <label className="block text-xs uppercase tracking-[0.3em] text-ink-500 mb-2">
                Tipo de página
              </label>
              <select
                className="input-glass w-full"
                value={pageType}
                onChange={(event) => setPageType(event.target.value)}
                disabled={loading}
              >
                {types.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full md:max-w-sm">
              <label className="block text-xs uppercase tracking-[0.3em] text-ink-500 mb-2">
                Cantidad a procesar (1-10)
              </label>
              <div className="flex flex-wrap gap-3 items-center">
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={count}
                  onChange={(e) => setCount(parseInt(e.target.value, 10) || 1)}
                  className="input-glass w-24"
                  disabled={loading}
                />
                <div className="flex gap-2">
                  {[5, 10].map((value) => (
                    <Button
                      key={value}
                      variant="outline"
                      size="sm"
                      className={
                        value === count ? "border-jungle-500/60 text-jungle-700" : ""
                      }
                      onClick={() => setCount(value)}
                      disabled={loading}
                    >
                      {value}
                    </Button>
                  ))}
                </div>
                <Button onClick={handleGenerate} disabled={loading}>
                  {loading ? "Procesando..." : "Generar SEO"}
                </Button>
              </div>
              {progress.total > 0 && (
                <p className="mt-3 text-sm text-ink-600">
                  Progreso: {progress.current} / {progress.total}
                </p>
              )}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-ink-500 mb-3">
              Pendientes por tipo
            </p>
            <div className="flex flex-wrap gap-2">
              {breakdownEntries.length > 0 ? (
                breakdownEntries.map(([key, value]) => (
                  <Badge key={key}>
                    {key}: {value.pending}/{value.total}
                  </Badge>
                ))
              ) : (
                <span className="text-sm text-ink-500">Sin datos</span>
              )}
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <h2 className="font-display text-2xl text-ink-900">
            Páginas pendientes
          </h2>
          <p className="mt-2 text-sm text-ink-600">
            Muestra de páginas que aún no cumplen los mínimos de SEO.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {pendingSample.length > 0 ? (
              pendingSample.map((page) => (
                <Badge key={`${page.page_type}-${page.slug}`}>
                  {page.title} ({page.page_type})
                </Badge>
              ))
            ) : (
              <span className="text-sm text-ink-500">Sin pendientes.</span>
            )}
          </div>
        </GlassCard>

        {results.length > 0 && (
          <div className="space-y-3">
            <h2 className="font-display text-2xl text-ink-900">
              Resultados recientes
            </h2>
            {results.map((item, index) => (
              <GlassCard
                key={`${item.slug || item.title}-${index}`}
                className="p-5"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-ink-500">
                      {item.page_type || "page"}
                    </p>
                    <h3 className="mt-1 font-display text-xl text-ink-900">
                      {item.title || item.slug}
                    </h3>
                  </div>
                  <Badge
                    className={
                      item.success
                        ? "bg-jungle-500/15 text-jungle-700 border-jungle-500/20"
                        : "bg-ember-500/15 text-ember-600 border-ember-500/20"
                    }
                  >
                    {item.success ? `${item.summary_words || 0} palabras` : "Error"}
                  </Badge>
                </div>
                {item.success ? (
                  <div className="mt-3 space-y-2 text-sm text-ink-700">
                    <p>
                      <span className="text-xs uppercase tracking-[0.3em] text-ink-500 mr-2">
                        Meta title
                      </span>
                      {item.meta_title}
                    </p>
                    <p className="text-ink-600">{item.meta_description}</p>
                  </div>
                ) : (
                  <p className="mt-3 text-sm text-ember-600">
                    {item.error || "Error desconocido"}
                  </p>
                )}
              </GlassCard>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
