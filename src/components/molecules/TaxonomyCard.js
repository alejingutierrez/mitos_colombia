import Link from "next/link";
import { cn } from "../../lib/utils";
import { ImageFrame } from "../atoms/ImageFrame";
import { Motif } from "../atoms/Motif";
import { Heading } from "../atoms/Heading";
import { Text } from "../atoms/Text";
import { Count } from "../atoms/Count";
import { Icon } from "../atoms/Icon";

/**
 * Molécula · TaxonomyCard
 * Tarjeta para región / comunidad / categoría.
 * - Con imagen (de la base de datos): portada arriba + motivo SIN fondo en el pie.
 * - Sin imagen: el motivo pasa a llenar el cuadro superior en grande.
 */
export function TaxonomyCard({ title, href = "#", count, motif = "hoja", imageUrl, description, className }) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col overflow-hidden rounded border border-line-100 bg-white transition duration-300 ease-editorial hover:-translate-y-0.5 hover:border-line-200 hover:shadow-float focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jungle-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-paper",
        className
      )}
    >
      {imageUrl ? (
        <ImageFrame
          src={imageUrl}
          alt={title || ""}
          ratio="16 / 10"
          className="rounded-none border-0 border-b border-line-100"
          imgClassName="transition-transform duration-500 ease-editorial group-hover:scale-105"
        />
      ) : (
        <div className="flex aspect-[16/10] items-center justify-center border-b border-line-100 bg-mist-50 transition-transform duration-500 ease-editorial group-hover:scale-[1.03]">
          <Motif name={motif} size={96} className="opacity-40" />
        </div>
      )}

      <div className="flex items-center gap-3 p-4">
        {imageUrl ? <Motif name={motif} size={40} className="shrink-0" /> : null}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <Heading level={4} className="truncate">
              {title}
            </Heading>
            {count != null ? <Count>{count}</Count> : null}
          </div>
          {description ? (
            <Text size="sm" tone="muted" className="mt-0.5 line-clamp-1">
              {description}
            </Text>
          ) : null}
        </div>
        <Icon name="arrow-up-right" size={18} className="mc-arrow shrink-0 text-jungle-600" />
      </div>
    </Link>
  );
}
