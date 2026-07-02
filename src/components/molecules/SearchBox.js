"use client";

import { useState } from "react";
import { cn } from "../../lib/utils";
import { Icon } from "../atoms/Icon";
import { FIELD_BASE, RING_FIELD, CONTROL_HEIGHTS } from "../atoms/_shared";

/**
 * Molécula · SearchBox
 * Buscador prominente con ícono y botón de limpiar. Por defecto es un formulario
 * GET nativo que navega a `/mitos?q=…` (funciona sin JS y es rastreable). Si se
 * pasa `onSearch`, en su lugar se llama ese callback (para búsqueda controlada).
 */
export function SearchBox({
  placeholder = "Buscar un mito, región o tema…",
  defaultValue = "",
  size = "lg",
  action = "/mitos",
  name = "q",
  onSearch,
  onChange,
  className,
}) {
  const [value, setValue] = useState(defaultValue);

  function update(v) {
    setValue(v);
    onChange?.(v);
  }
  function submit(e) {
    // Con onSearch: búsqueda controlada (sin navegar). Sin él: submit GET nativo.
    if (onSearch) {
      e.preventDefault();
      onSearch(value);
    }
  }

  return (
    <form
      action={onSearch ? undefined : action}
      method="get"
      onSubmit={submit}
      role="search"
      className={cn("relative", className)}
    >
      <Icon
        name="search"
        size={18}
        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-500"
      />
      <input
        type="search"
        name={name}
        value={value}
        onChange={(e) => update(e.target.value)}
        placeholder={placeholder}
        aria-label="Buscar"
        className={cn(
          FIELD_BASE,
          CONTROL_HEIGHTS[size] || CONTROL_HEIGHTS.lg,
          "pl-11 pr-11 text-[15px] [&::-webkit-search-cancel-button]:hidden",
          RING_FIELD
        )}
      />
      {value ? (
        <button
          type="button"
          onClick={() => update("")}
          aria-label="Limpiar búsqueda"
          className="absolute right-2 top-1/2 inline-flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded text-ink-500 transition-colors hover:bg-mist-50 hover:text-ink-900"
        >
          <Icon name="x" size={16} />
        </button>
      ) : null}
    </form>
  );
}
