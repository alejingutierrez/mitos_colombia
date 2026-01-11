"use client";

import { useEffect, useState } from "react";
import { GlassCard } from "./ui/GlassCard";

export function Comments({ mythId, initialComments = [] }) {
  const [comments, setComments] = useState(initialComments);
  const [formData, setFormData] = useState({
    authorName: "",
    authorEmail: "",
    content: "",
  });
  const [isLoading, setIsLoading] = useState(initialComments.length === 0);
  const [loadError, setLoadError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (!mythId) return;
    let active = true;

    const loadComments = async () => {
      setIsLoading(true);
      setLoadError(null);

      try {
        const response = await fetch(`/api/comments?mythId=${mythId}`);
        if (!response.ok) {
          throw new Error("No se pudieron cargar los comentarios");
        }
        const data = await response.json();
        if (active) {
          setComments(Array.isArray(data.comments) ? data.comments : []);
        }
      } catch (error) {
        if (active) {
          setLoadError("No se pudieron cargar los comentarios en este momento.");
        }
      } finally {
        if (active) {
          setIsLoading(false);
        }
      }
    };

    loadComments();

    return () => {
      active = false;
    };
  }, [mythId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mythId,
          ...formData,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: "success", text: data.message });
        setFormData({ authorName: "", authorEmail: "", content: "" });
      } else {
        setMessage({ type: "error", text: data.error || "Error al enviar el comentario" });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Error de conexión. Intenta de nuevo." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-6">
      <h2 className="font-display text-2xl text-ink-900">
        Comentarios {comments.length > 0 && `(${comments.length})`}
      </h2>

      {/* Existing Comments */}
      {loadError && (
        <p className="text-xs text-ember-600">{loadError}</p>
      )}

      {isLoading && comments.length === 0 ? (
        <p className="text-sm text-ink-600 italic">Cargando comentarios...</p>
      ) : comments.length > 0 ? (
        <div className="space-y-4">
          {comments.map((comment) => (
            <GlassCard key={comment.id} className="p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-jungle-500/20 text-jungle-700">
                  <span className="text-sm font-bold">
                    {comment.author_name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-ink-900">{comment.author_name}</p>
                    <span className="text-xs text-ink-500">
                      {new Date(comment.created_at).toLocaleDateString("es-CO", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-ink-700">{comment.content}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      ) : (
        <p className="text-sm text-ink-600 italic">
          Sé el primero en comentar sobre este mito.
        </p>
      )}

      {/* Comment Form */}
      <GlassCard className="p-6">
        <h3 className="font-display text-lg text-ink-900 mb-4">Deja un comentario</h3>

        {message && (
          <div
            className={`mb-4 rounded-lg border p-3 text-sm ${
              message.type === "success"
                ? "border-jungle-500/30 bg-jungle-500/10 text-jungle-700"
                : "border-ember-500/30 bg-ember-500/10 text-ember-700"
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-ink-500">
              Nombre
              <input
                type="text"
                name="authorName"
                value={formData.authorName}
                onChange={handleChange}
                required
                minLength={2}
                className="input-glass"
                placeholder="Tu nombre"
              />
            </label>

            <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-ink-500">
              Email
              <input
                type="email"
                name="authorEmail"
                value={formData.authorEmail}
                onChange={handleChange}
                required
                className="input-glass"
                placeholder="tu@email.com"
              />
            </label>
          </div>

          <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-ink-500">
            Comentario
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
              minLength={10}
              rows={4}
              className="input-glass resize-none"
              placeholder="Comparte tus pensamientos sobre este mito..."
            />
          </label>

          <p className="text-xs text-ink-600">
            Tu comentario será revisado antes de ser publicado.
          </p>

          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-full bg-jungle-600 px-6 py-3 text-sm text-white shadow transition hover:bg-jungle-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Enviando..." : "Enviar comentario"}
          </button>
        </form>
      </GlassCard>
    </div>
  );
}
