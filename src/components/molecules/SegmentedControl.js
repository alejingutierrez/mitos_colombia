"use client";

import { useId, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { Icon } from "../atoms/Icon";

/**
 * Molécula · SegmentedControl
 * Selector segmentado (grilla/lista, facetas). Indicador que se desliza entre
 * opciones con layoutId. `options`: [{ value, label, icon? }].
 */
export function SegmentedControl({ options = [], defaultValue, onChange, className }) {
  const [active, setActive] = useState(defaultValue ?? options[0]?.value);
  const groupId = useId();

  function select(value) {
    setActive(value);
    onChange?.(value);
  }

  return (
    <div className={cn("inline-flex items-center gap-1 rounded border border-line-200 bg-mist-50 p-1", className)} role="tablist">
      {options.map((opt) => {
        const isActive = active === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => select(opt.value)}
            className={cn(
              "relative inline-flex h-8 items-center gap-1.5 rounded-sm px-3 text-sm font-medium transition-colors",
              isActive ? "text-ink-900" : "text-ink-500 hover:text-ink-700"
            )}
          >
            {isActive ? (
              <motion.span
                layoutId={`seg-${groupId}`}
                className="absolute inset-0 rounded-sm bg-white shadow-card"
                transition={{ type: "spring", stiffness: 320, damping: 30 }}
              />
            ) : null}
            {opt.icon ? <Icon name={opt.icon} size={16} className="relative z-10" /> : null}
            <span className="relative z-10">{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}
