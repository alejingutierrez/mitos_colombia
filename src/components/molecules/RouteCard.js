import Link from "next/link";
import { cn } from "../../lib/utils";
import { Motif } from "../atoms/Motif";
import { Heading } from "../atoms/Heading";
import { Text } from "../atoms/Text";
import { Eyebrow } from "../atoms/Eyebrow";
import { Icon } from "../atoms/Icon";

/**
 * Molécula · RouteCard
 * Tarjeta de ruta editorial curada ("Guardianes del agua"). Panel con barra de
 * acento lateral, motivo, kicker, título y descripción. Tono jungle | river.
 */

const tones = {
  jungle: { bar: "bg-jungle-500", eyebrow: "jungle" },
  river: { bar: "bg-river-500", eyebrow: "river" },
};

export function RouteCard({ title, href = "#", description, motif = "agua", count, tone = "jungle", eyebrow = "Ruta editorial", className }) {
  const t = tones[tone] || tones.jungle;
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex gap-4 overflow-hidden rounded border border-line-100 bg-white p-6 pl-7 transition duration-300 ease-editorial hover:-translate-y-0.5 hover:border-line-200 hover:shadow-float focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jungle-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-paper",
        className
      )}
    >
      <span className={cn("absolute inset-y-0 left-0 w-1", t.bar)} aria-hidden="true" />
      <Motif name={motif} size={48} className="mt-0.5 shrink-0 self-start" />
      <div className="min-w-0 flex-1">
        <Eyebrow tone={t.eyebrow} className="mb-1.5">
          {eyebrow}
          {count != null ? ` · ${count} mitos` : ""}
        </Eyebrow>
        <Heading level={3} className="mb-1">
          {title}
        </Heading>
        {description ? (
          <Text size="sm" tone="muted" className="line-clamp-2">
            {description}
          </Text>
        ) : null}
      </div>
      <Icon name="arrow-up-right" size={20} className="mc-arrow mt-1 shrink-0 text-ink-500" />
    </Link>
  );
}
