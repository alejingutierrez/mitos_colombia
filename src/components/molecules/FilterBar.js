"use client";

import { useState } from "react";
import { cn } from "../../lib/utils";
import { Select } from "../atoms/Select";
import { Icon } from "../atoms/Icon";
import { FilterChip } from "./FilterChip";

/**
 * Molécula · FilterBar
 * Barra de filtros para el archivo de mitos: un Select por faceta + chips de
 * filtros activos + limpiar. Auto-gestiona su estado (no controlado); notifica
 * cambios vía onChange({ [key]: value }).
 *
 * `filters`: [{ key, label, options: [{ value, label }] }]
 */
export function FilterBar({ filters = [], defaultValue = {}, onChange, className }) {
  const [values, setValues] = useState(defaultValue);

  function setKey(key, value) {
    const next = { ...values };
    if (value) next[key] = value;
    else delete next[key];
    setValues(next);
    onChange?.(next);
  }

  const active = filters
    .map((f) => ({ ...f, value: values[f.key] }))
    .filter((f) => f.value);

  function labelFor(f, val) {
    return f.options.find((o) => o.value === val)?.label ?? val;
  }

  return (
    <div className={cn("space-y-3", className)}>
      <div className="flex flex-wrap items-center gap-3">
        {filters.map((f) => (
          <div key={f.key} className="min-w-[180px] flex-1 sm:max-w-[220px]">
            <Select
              value={values[f.key] || ""}
              onChange={(e) => setKey(f.key, e.target.value)}
              aria-label={f.label}
            >
              <option value="">{f.label}</option>
              {f.options.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </Select>
          </div>
        ))}
      </div>

      {active.length > 0 ? (
        <div className="flex flex-wrap items-center gap-2">
          {active.map((f) => (
            <FilterChip
              key={f.key}
              label={f.label}
              value={labelFor(f, f.value)}
              onRemove={() => setKey(f.key, "")}
            />
          ))}
          <button
            type="button"
            onClick={() => {
              setValues({});
              onChange?.({});
            }}
            className="inline-flex items-center gap-1 rounded-sm px-2 py-1 text-xs font-medium text-ink-500 transition-colors hover:bg-mist-50 hover:text-ink-900"
          >
            <Icon name="x" size={13} /> Limpiar todo
          </button>
        </div>
      ) : null}
    </div>
  );
}
