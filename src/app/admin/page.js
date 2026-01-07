"use client";

import { useState, useEffect } from "react";

export default function AdminPage() {
  const [count, setCount] = useState(5);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [mythsWithoutImages, setMythsWithoutImages] = useState(null);
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
        return;
      }

      if (response.ok) {
        const data = await response.json();
        setMythsWithoutImages(data.mythsWithoutImages);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error("Error fetching count:", error);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    fetchCount(credentials.username, credentials.password);
  };

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
        body: JSON.stringify({ count }),
      });

      if (response.status === 401) {
        setIsAuthenticated(false);
        alert("Sesión expirada. Por favor, inicia sesión nuevamente.");
        return;
      }

      const data = await response.json();
      setResults(data);

      // Refresh count
      await fetchCount(credentials.username, credentials.password);
    } catch (error) {
      console.error("Error generating images:", error);
      alert("Error al generar imágenes: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
            <h1 className="text-3xl font-bold text-white mb-6 text-center">
              Admin - Mitos Colombia
            </h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Usuario
                </label>
                <input
                  type="text"
                  value={credentials.username}
                  onChange={(e) =>
                    setCredentials({ ...credentials, username: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ingresa tu usuario"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Contraseña
                </label>
                <input
                  type="password"
                  value={credentials.password}
                  onChange={(e) =>
                    setCredentials({ ...credentials, password: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ingresa tu contraseña"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                Iniciar Sesión
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-white">
              Generador de Imágenes - Mitos Colombia
            </h1>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="px-4 py-2 bg-red-500/20 text-red-300 rounded-lg hover:bg-red-500/30 transition-all"
            >
              Cerrar Sesión
            </button>
          </div>

          <div className="mb-8 p-6 bg-blue-500/10 rounded-xl border border-blue-500/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-300 text-sm font-medium mb-1">
                  Mitos sin imagen
                </p>
                <p className="text-4xl font-bold text-white">
                  {mythsWithoutImages !== null ? mythsWithoutImages : "..."}
                </p>
              </div>
              <svg
                className="w-16 h-16 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-lg font-semibold text-white mb-4">
              ¿Cuántas imágenes deseas generar?
            </label>
            <div className="flex gap-4 items-center">
              <input
                type="number"
                min="1"
                max="50"
                value={count}
                onChange={(e) => setCount(parseInt(e.target.value) || 1)}
                className="w-32 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={loading}
              />
              <button
                onClick={handleGenerate}
                disabled={loading || mythsWithoutImages === 0}
                className="flex-1 py-3 px-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed transition-all"
              >
                {loading ? "Generando..." : "Generar Imágenes"}
              </button>
            </div>
            {loading && (
              <p className="text-yellow-300 mt-4 text-sm">
                Esto puede tomar varios minutos. Por favor espera...
              </p>
            )}
          </div>

          {results && (
            <div className="mt-8">
              <div className="mb-6 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                <p className="text-green-300 font-semibold text-lg">
                  {results.message}
                </p>
              </div>

              <h2 className="text-2xl font-bold text-white mb-4">
                Resultados ({results.generated?.length || 0})
              </h2>

              <div className="space-y-4">
                {results.generated?.map((myth, index) => (
                  <div
                    key={myth.id}
                    className={`p-4 rounded-lg border ${
                      myth.success
                        ? "bg-green-500/10 border-green-500/20"
                        : "bg-red-500/10 border-red-500/20"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {index + 1}. {myth.title}
                        </h3>
                        {myth.success ? (
                          <div className="space-y-2">
                            <p className="text-green-300 text-sm">
                              Imagen generada exitosamente
                            </p>
                            <a
                              href={myth.imageUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm underline"
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
                              <div className="mt-3">
                                <img
                                  src={myth.imageUrl}
                                  alt={myth.title}
                                  className="w-full max-w-md rounded-lg shadow-lg"
                                />
                              </div>
                            )}
                          </div>
                        ) : (
                          <p className="text-red-300 text-sm">
                            Error: {myth.error}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
