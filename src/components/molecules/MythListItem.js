import Link from "next/link";
import { cn } from "../../lib/utils";
import { Motif } from "../atoms/Motif";
import { Icon } from "../atoms/Icon";

/**
 * Molécula · MythListItem
 * Fila compacta de mito para la vista de índice editorial: numeral + motivo +
 * título + región/comunidad + flecha. Pensada para apilar con divisores.
 */
export function MythListItem({ myth, index, motif = "jaguar", className }) {
  const { slug, title, region, community } = myth || {};
  const meta = [region, community].filter(Boolean).join(" · ");
  return (
    <Link
      href={slug ? `/mitos/${slug}` : "#"}
      className={cn(
        "group flex items-center gap-4 py-3.5 transition-colors hover:bg-mist-50/60 focus-visible:outline-none focus-visible:bg-mist-50",
        className
      )}
    >
      {index != null ? (
        <span className="mc-index w-8 shrink-0 text-center font-display text-sm font-semibold tabular-nums text-ink-500">
          {String(index).padStart(2, "0")}
        </span>
      ) : null}
      <Motif name={motif} size={30} className="shrink-0" />
      <div className="min-w-0 flex-1">
        <p className="truncate font-display text-[15px] font-bold text-ink-900">{title}</p>
        {meta ? <p className="truncate text-xs text-ink-500">{meta}</p> : null}
      </div>
      <Icon name="chevron-right" size={18} className="mc-arrow shrink-0 text-ink-500 group-hover:text-jungle-600" />
    </Link>
  );
}
