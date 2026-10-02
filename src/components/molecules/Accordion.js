"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "../../lib/utils";
import { Icon } from "../atoms/Icon";

/**
 * Molécula · Accordion
 * Secciones expandibles (versiones de un mito, preguntas frecuentes).
 * `items`: [{ title, content }]. Animación de altura con Framer.
 */
export function Accordion({ items = [], defaultOpen = 0, className }) {
  const [open, setOpen] = useState(defaultOpen);
  const reduce = useReducedMotion();

  return (
    <div className={cn("divide-y divide-line-100 border-y border-line-100", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 py-4 text-left transition-colors hover:text-jungle-700"
              >
                <span className="font-display text-base font-bold text-ink-900">{item.title}</span>
                <Icon
                  name="chevron-down"
                  size={18}
                  className={cn("shrink-0 text-ink-500 transition-transform duration-300", isOpen && "rotate-180 text-jungle-600")}
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  key="content"
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduce ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-4 font-body text-sm leading-relaxed text-ink-700">
                    {item.content}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
