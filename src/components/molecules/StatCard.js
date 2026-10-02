import { cn } from "../../lib/utils";
import { CountUp } from "../atoms/CountUp";
import { Motif } from "../atoms/Motif";

/**
 * Molécula · StatCard
 * Métrica destacada: cifra animada (CountUp) + etiqueta, con motivo opcional.
 * Sin caja por defecto (estilo editorial); pásale una superficie si la quieres.
 */
export function StatCard({ value, label, suffix = "", motif, className }) {
  return (
    <div className={cn("flex items-start gap-3", className)}>
      {motif ? <Motif name={motif} size={36} className="mt-1 shrink-0" /> : null}
      <div>
        <p className="font-display text-3xl font-extrabold tracking-tight text-ink-900">
          <CountUp to={value} suffix={suffix} />
        </p>
        <p className="mt-1 text-xs uppercase tracking-[0.14em] text-ink-500">{label}</p>
      </div>
    </div>
  );
}
