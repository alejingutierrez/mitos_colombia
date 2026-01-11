"use client";

import { useState } from "react";
import { GlassCard } from "../../components/ui/GlassCard";
import { Button } from "../../components/ui/Button";

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload?.error || "No se pudo enviar el mensaje.");
      }

      setStatus("success");
      setForm(initialState);
    } catch (err) {
      setStatus("error");
      setError(err.message || "Error desconocido.");
    }
  };

  return (
    <GlassCard className="p-6 md:p-8">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-ink-500">
            Nombre
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="input-glass"
              placeholder="Tu nombre"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-ink-500">
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="input-glass"
              placeholder="correo@ejemplo.com"
              required
            />
          </label>
        </div>

        <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-ink-500">
          Asunto
          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="input-glass"
            placeholder="Colaboración, sugerencia, corrección..."
          />
        </label>

        <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-ink-500">
          Mensaje
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="input-glass min-h-[160px] resize-none rounded-3xl"
            placeholder="Cuéntanos el mito, la región o la corrección que quieras compartir."
            required
          />
        </label>

        {status === "error" ? (
          <p className="text-sm text-ember-600">{error}</p>
        ) : null}
        {status === "success" ? (
          <p className="text-sm text-jungle-600">
            Mensaje enviado. Gracias por escribirnos.
          </p>
        ) : null}

        <Button
          type="submit"
          className="w-full"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Enviando..." : "Enviar mensaje"}
        </Button>
      </form>
    </GlassCard>
  );
}
