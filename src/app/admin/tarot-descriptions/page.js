"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminLayout from "../../../components/AdminLayout";
import { GlassCard } from "../../../components/ui/GlassCard";
import { Button } from "../../../components/ui/Button";
import { Badge } from "../../../components/ui/Badge";
import { ProgressBar } from "../../../components/ui/ProgressBar";

export default function TarotDescriptionsAdminPage() {
  const router = useRouter();
  const [count, setCount] = useState(5);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState({ current: 0, total: 0 });
  const [results, setResults] = useState([]);
  const [pendingTotal, setPendingTotal] = useState(null);
  const [eligibleTotal, setEligibleTotal] = useState(null);
  const [pendingSample, setPendingSample] = useState([]);
  const [maxWords, setMaxWords] = useState(30);
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const fetchStatus = async (username, password) => {
    try {
      const auth = btoa(`${username}:${password}`);
      const response = await fetch("/api/admin/tarot-descriptions", {
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
        setEligibleTotal(data.eligible);
        setPendingSample(data.sample || []);
        setMaxWords(data.max_words || 30);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error("Error fetching tarot descriptions status:", error);
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
  }, [router]);

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
          const response = await fetch("/api/admin/tarot-descriptions", {
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
              card_name: `Carta ${i + 1}`,
              error: `Error del servidor (${response.status})`,
              success: false,
            });
            setResults([...allResults]);
            continue;
          }

          const data = await response.json();
          const updated = data.updated || [];
          if (updated.length === 0) {
            setProgress({ current: i, total: i });
            break;
          }
          allResults.push(...updated);
          setResults([...allResults]);
        } catch (error) {
          console.error(`Error generating tarot description ${i + 1}:`, error);
          allResults.push({
            card_name: `Carta ${i + 1}`,
            error: error.message || "Error desconocido",
            success: false,
          });
          setResults([...allResults]);
        }
      }

      await fetchStatus(credentials.username, credentials.password);
    } catch (error) {
      console.error("Error in tarot description process:", error);
      alert("Error en el proceso de tarot: " + error.message);
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
        <div>
          <h1 className="font-display text-4xl text-ink-900">
            Descripciones de tarot
          </h1>
          <p className="mt-2 text-ink-600">
            Genera lecturas breves (máximo {maxWords} palabras) con significado al
            derecho y al revés para cada carta.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <GlassCard className="p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-river-600 mb-2">
              Cartas pendientes
            </p>
            <p className="font-display text-4xl text-ink-900">
              {pendingTotal !== null ? pendingTotal : "..."}
            </p>
          </GlassCard>

          <GlassCard className="p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-jungle-600 mb-2">
              Cartas totales
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

        <GlassCard className="p-6 space-y-4">
          <div className="flex items-start gap-3 rounded-xl border border-river-500/20 bg-river-500/10 p-4">
            <div className="mt-0.5 text-river-600">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-river-700">
                Formato esperado
              </p>
              <p className="text-xs text-river-600 mt-1">
                La IA genera un texto breve con dos partes: Derecho y Reverso.
                Cada respuesta se recorta a {maxWords} palabras máximo.
              </p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-ink-700 mb-2">
              Cantidad de cartas a procesar (1-10)
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
                    className={value === count ? "border-jungle-500/60 text-jungle-700" : ""}
                    onClick={() => setCount(value)}
                    disabled={loading}
                  >
                    {value}
                  </Button>
                ))}
              </div>
              <Button onClick={handleGenerate} disabled={loading}>
                {loading ? "Procesando..." : "Generar lecturas"}
              </Button>
            </div>
            {progress.total > 0 && (
              <div className="mt-4">
                <ProgressBar
                  current={progress.current}
                  total={progress.total}
                  label="Progreso"
                />
              </div>
            )}
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <h2 className="font-display text-2xl text-ink-900">
            Pendientes por completar
          </h2>
          <p className="mt-2 text-sm text-ink-600">
            Muestra de cartas que aún no tienen lectura breve.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {pendingSample.length > 0 ? (
              pendingSample.map((card) => (
                <Badge key={card.id}>
                  {card.card_name}
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
              <GlassCard key={`${item.id}-${index}`} className="p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-ink-500">
                      {item.myth_title || "Mito asociado"}
                    </p>
                    <h3 className="mt-1 font-display text-xl text-ink-900">
                      {item.card_name || "Carta"}
                    </h3>
                  </div>
                  <Badge
                    className={
                      item.success
                        ? "bg-jungle-500/15 text-jungle-700 border-jungle-500/20"
                        : "bg-ember-500/15 text-ember-600 border-ember-500/20"
                    }
                  >
                    {item.success ? `${item.word_count || 0} palabras` : "Error"}
                  </Badge>
                </div>
                {item.success ? (
                  <p className="mt-3 text-sm text-ink-700">
                    {item.reading_summary}
                  </p>
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
