"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./TarotAccount.module.css";

function safeNext(value) {
  const path = String(value || "");
  return path.startsWith("/") && !path.startsWith("//") ? path : "/cuenta";
}

export function TarotAuthForm({ mode, orderToken = "", nextPath = "/cuenta" }) {
  const register = mode === "register";
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError("");
    const data = new FormData(event.currentTarget);
    try {
      const response = await fetch(`/api/tarot/auth/${register ? "register" : "login"}`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          fullName: register ? data.get("fullName") : undefined,
          email: data.get("email"),
          password: data.get("password"),
          orderToken,
        }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "No fue posible completar el acceso.");
      router.push(safeNext(nextPath));
      router.refresh();
    } catch (submitError) {
      setError(submitError.message || "No fue posible completar el acceso.");
      setSubmitting(false);
    }
  }

  const alternateQuery = new URLSearchParams();
  if (orderToken) alternateQuery.set("order", orderToken);
  if (nextPath && nextPath !== "/cuenta") alternateQuery.set("next", safeNext(nextPath));
  const alternateHref = `/cuenta/${register ? "ingresar" : "crear"}${alternateQuery.size ? `?${alternateQuery}` : ""}`;

  return (
    <form className={styles.authForm} onSubmit={handleSubmit} aria-busy={submitting ? "true" : "false"}>
      <div className={styles.authHeading}>
        <span>{register ? "Cuenta nueva" : "Acceso seguro"}</span>
        <h1>{register ? "Crea tu cuenta" : "Vuelve a tus pedidos"}</h1>
        <p>
          {register
            ? "Guarda tus compras y consulta cada etapa del despacho desde un solo lugar."
            : "Consulta el pago, la preparación y la entrega de tus pedidos."}
        </p>
      </div>
      {orderToken ? (
        <p className={styles.orderClaimNotice}>
          Este acceso guardará automáticamente el pedido que acabas de consultar.
        </p>
      ) : null}
      {register ? (
        <label>
          Nombre completo
          <input name="fullName" type="text" autoComplete="name" required minLength={3} maxLength={120} />
        </label>
      ) : null}
      <label>
        Correo electrónico
        <input name="email" type="email" autoComplete="email" placeholder="tu@correo.com" required maxLength={160} />
      </label>
      <label>
        Contraseña
        <span className={styles.passwordField}>
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete={register ? "new-password" : "current-password"}
            required
            minLength={register ? 12 : undefined}
            maxLength={128}
          />
          <button type="button" onClick={() => setShowPassword((current) => !current)}>
            {showPassword ? "Ocultar" : "Mostrar"}
          </button>
        </span>
        {register ? <small>Mínimo 12 caracteres, con al menos una letra y un número.</small> : null}
      </label>
      {error ? <p className={styles.authError} role="alert">{error}</p> : null}
      <button className={styles.authSubmit} type="submit" disabled={submitting}>
        {submitting ? "Protegiendo tu sesión…" : register ? "Crear cuenta" : "Ingresar"}
      </button>
      <p className={styles.authAlternate}>
        {register ? "¿Ya tienes cuenta?" : "¿Todavía no tienes cuenta?"}{" "}
        <Link href={alternateHref}>{register ? "Ingresar" : "Crear cuenta"}</Link>
      </p>
    </form>
  );
}

export function TarotLogoutButton() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  async function logout() {
    if (submitting) return;
    setSubmitting(true);
    await fetch("/api/tarot/auth/logout", { method: "POST" });
    router.push("/cuenta/ingresar");
    router.refresh();
  }

  return (
    <button className={styles.logoutButton} type="button" onClick={logout} disabled={submitting}>
      {submitting ? "Cerrando…" : "Cerrar sesión"}
    </button>
  );
}
