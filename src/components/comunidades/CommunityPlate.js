import Link from "next/link";
import { cn } from "../../lib/utils";
import { ImageFrame, MotifMask } from "../atoms";

/**
 * La pieza de una comunidad en la mesa del índice.
 *
 * Hay dos estados, y el segundo es el que importa: **veinte de las treinta y
 * ocho comunidades del archivo no tienen obra de portada**. Con el marco de
 * imagen por defecto esas veinte salían como un rectángulo gris claro con un
 * motivo al 15 % —un hueco entre fotografías, que se lee como una imagen que
 * no cargó, no como una ficha—.
 *
 * Aquí, cuando no hay obra, la pieza se dibuja: fondo de tinta en el color de
 * su territorio, el motivo del territorio grabado en grande y bajito, y el
 * nombre en blanco, en el mismo sitio y con el mismo cuerpo que en las piezas
 * con fotografía. La mesa se lee entera como una superficie de tinta y las
 * comunidades sin obra dejan de parecer un error: parecen una lámina que
 * todavía no se ha ilustrado, que es exactamente lo que son.
 *
 * El filete de acento superior va en los dos estados: es lo que amarra ambas
 * versiones a la misma familia.
 */

/** Tinta de fondo por territorio: del verde selva o del azul río a la noche. */
const GROUNDS = {
  jungle: "linear-gradient(158deg, rgb(var(--jungle-700)) 0%, rgb(var(--atlas-night)) 82%)",
  river: "linear-gradient(158deg, rgb(var(--river-700)) 0%, rgb(var(--atlas-night)) 82%)",
};

export function CommunityPlate({
  href,
  name,
  count,
  regionName,
  imageUrl,
  motif = "condor",
  accent,
  accentKey = "jungle",
  titleClass = "atlas-title-md",
  motifSize = 120,
  className,
  style,
}) {
  const relatos = Number(count) || 0;

  return (
    <Link
      href={href}
      style={style}
      className={cn(
        "group relative block min-w-0 overflow-hidden text-white no-underline",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ember-400",
        className
      )}
    >
      {imageUrl ? (
        <>
          <ImageFrame
            // Decorativa: el nombre de la comunidad va como texto real dentro
            // de la misma pieza, así que repetirlo en el `alt` sólo hace que un
            // lector de pantalla lo anuncie dos veces.
            src={imageUrl}
            alt=""
            ratio={null}
            sizes="(max-width: 1024px) 50vw, 33vw"
            placeholderMotif={motif}
            placeholderSize={54}
            className="absolute inset-0 h-full w-full rounded-none border-0"
            imgClassName="atlas-image-zoom object-cover"
          />
          <span className="atlas-scrim pointer-events-none absolute inset-0" />
        </>
      ) : (
        <span
          aria-hidden
          className="absolute inset-0 block"
          style={{ backgroundImage: GROUNDS[accentKey] || GROUNDS.jungle }}
        >
          {/* El motivo, grabado: desbordado por la esquina inferior derecha
              para que no compita con el nombre y para que dos piezas vecinas
              del mismo territorio no salgan calcadas. */}
          <MotifMask
            src={`/motifs/${motif}-256.png`}
            width={motifSize}
            className="absolute -bottom-4 -right-3 text-white/[0.14] transition-transform duration-700 ease-editorial group-hover:scale-105"
          />
        </span>
      )}

      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-[3px]"
        style={{ backgroundColor: accent }}
      />

      <span className="atlas-on-image absolute inset-x-0 bottom-0 px-4 pb-4 pt-3">
        {regionName ? (
          <span className="atlas-kicker block !text-[0.6875rem] !text-white/75">
            {regionName}
          </span>
        ) : null}
        <span className={cn(titleClass, "mt-1.5 block !text-white")}>{name}</span>
        <span className="atlas-figure mt-1 block text-[0.8125rem] text-white/78">
          {relatos} {relatos === 1 ? "relato" : "relatos"}
        </span>
      </span>
    </Link>
  );
}

export default CommunityPlate;
