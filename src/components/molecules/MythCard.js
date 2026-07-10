import Link from "next/link";
import { cn } from "../../lib/utils";
import { ImageFrame } from "../atoms/ImageFrame";
import { Heading } from "../atoms/Heading";
import { Text } from "../atoms/Text";
import { Tag } from "../atoms/Tag";
import { Icon } from "../atoms/Icon";

/**
 * Molécula · MythCard
 * Tarjeta de un mito — la pieza más reutilizada (home, listados, taxonomías, rutas).
 * Toda la card es un enlace; al hover se eleva, la imagen hace zoom sutil y la
 * flecha se desliza. Sin imagen, ImageFrame muestra un motivo tenue.
 *
 * Variantes: `default` (vertical) · `horizontal` (imagen a la izquierda).
 */

const cardBase =
  "group flex overflow-hidden rounded border border-line-100 bg-white transition duration-300 ease-editorial hover:-translate-y-0.5 hover:border-line-200 hover:shadow-float focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jungle-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-paper";

export function MythCard({ myth, motif = "jaguar", variant = "default", className }) {
  const { slug, title, excerpt, region, community, imageUrl } = myth || {};
  const horizontal = variant === "horizontal";

  const image = (
    <ImageFrame
      src={imageUrl}
      alt={title || ""}
      ratio={horizontal ? "1 / 1" : "4 / 3"}
      placeholderMotif={motif}
      className={cn(
        "rounded-none border-0",
        horizontal ? "h-full w-32 shrink-0 border-r sm:w-40" : "border-b",
        "border-line-100"
      )}
      imgClassName="transition-transform duration-500 ease-editorial group-hover:scale-105"
    />
  );

  const body = (
    <div className="flex flex-1 flex-col p-5">
      {(region || community) && (
        <div className="mb-2 flex flex-wrap gap-1.5">
          {region ? <Tag variant="jungle">{region}</Tag> : null}
          {community ? <Tag variant="neutral">{community}</Tag> : null}
        </div>
      )}
      <Heading level={3} className="mb-1.5 text-base font-semibold">
        {title}
      </Heading>
      {excerpt ? (
        <Text size="sm" tone="muted" className="line-clamp-2">
          {excerpt}
        </Text>
      ) : null}
      <div className="mt-auto flex items-center justify-between pt-4">
        <span className="text-xs font-medium uppercase tracking-[0.14em] text-ink-500">
          Leer mito
        </span>
        <Icon name="arrow-up-right" size={18} className="mc-arrow text-jungle-600" />
      </div>
    </div>
  );

  return (
    <Link
      href={slug ? `/mitos/${slug}` : "#"}
      className={cn(cardBase, horizontal ? "flex-row items-stretch" : "flex-col", className)}
    >
      {image}
      {body}
    </Link>
  );
}
