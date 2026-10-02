"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Icon } from "../../components/atoms/Icon";
import { Tag } from "../../components/atoms/Tag";
import { Motif } from "../../components/atoms/Motif";

/**
 * Demos de "inteligencia del sistema" para la página de diseño (client).
 * Aisladas y con limpieza de intervalos; respetan prefers-reduced-motion.
 */

const ITEMS = [
  { id: "madre-agua", title: "La Madre de Agua", region: "Pacífico", motif: "agua" },
  { id: "mohan", title: "El Mohán", region: "Andina", motif: "anaconda" },
  { id: "silbon", title: "El Silbón", region: "Orinoquía", motif: "luna" },
  { id: "patasola", title: "La Patasola", region: "Andina", motif: "jaguar" },
];

/** Lista que se auto-reprioriza: el sistema reordena sus elementos en vivo. */
export function IntelligentList() {
  const reduce = useReducedMotion();
  const [order, setOrder] = useState([0, 1, 2, 3]);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => {
      setOrder((prev) => {
        const next = [...prev];
        next.unshift(next.pop());
        return next;
      });
    }, 2400);
    return () => clearInterval(t);
  }, [reduce]);

  return (
    <ul className="space-y-2">
      {order.map((idx, pos) => {
        const item = ITEMS[idx];
        return (
          <motion.li
            key={item.id}
            layout
            transition={{ type: "spring", stiffness: 130, damping: 20 }}
            className="flex items-center gap-3 rounded border border-line-100 bg-white p-3"
          >
            <span className="mc-index w-6 shrink-0 font-display text-sm font-semibold tabular-nums text-line-300">
              {String(pos + 1).padStart(2, "0")}
            </span>
            <Motif name={item.motif} size={28} />
            <div className="min-w-0 flex-1">
              <p className="truncate font-display text-sm font-bold text-ink-900">{item.title}</p>
              <p className="text-xs text-ink-500">{item.region}</p>
            </div>
            {pos === 0 ? <Tag variant="jungle">Destacado</Tag> : null}
          </motion.li>
        );
      })}
    </ul>
  );
}

const PROMPTS = [
  "La Madre de Agua",
  "mitos del Pacífico",
  "criaturas del río",
  "cosmogonía muisca",
];

/** Buscador con typewriter que cicla prompts (sensación de sistema vivo). */
export function TypewriterSearch() {
  const reduce = useReducedMotion();
  const [text, setText] = useState(reduce ? PROMPTS[0] : "");
  const [pi, setPi] = useState(0);
  const [ci, setCi] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const full = PROMPTS[pi];
    let delay = deleting ? 45 : 85;
    if (!deleting && ci === full.length) delay = 1400;
    if (deleting && ci === 0) delay = 350;

    const t = setTimeout(() => {
      if (!deleting && ci < full.length) {
        setCi(ci + 1);
        setText(full.slice(0, ci + 1));
      } else if (!deleting && ci === full.length) {
        setDeleting(true);
      } else if (deleting && ci > 0) {
        setCi(ci - 1);
        setText(full.slice(0, ci - 1));
      } else {
        setDeleting(false);
        setPi((pi + 1) % PROMPTS.length);
      }
    }, delay);
    return () => clearTimeout(t);
  }, [ci, deleting, pi, reduce]);

  return (
    <div className="flex h-9 w-full items-center gap-2 rounded border border-line-200 bg-white px-3">
      <Icon name="search" size={16} className="shrink-0 text-ink-500" />
      <span className="font-body text-sm text-ink-900">
        {text}
        {!reduce ? (
          <span className="ml-0.5 inline-block h-4 w-px animate-pulse bg-jungle-500 align-middle" />
        ) : null}
      </span>
    </div>
  );
}
