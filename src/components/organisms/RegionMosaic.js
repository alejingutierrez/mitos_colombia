"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { cn } from "../../lib/utils";
import { Icon, ImageFrame } from "../atoms";

/**
 * Organismo · RegionMosaic — dirección "Proporción".
 *
 * Las seis regiones repartidas por lo que pesan: el ÁREA de cada pieza es su
 * número de relatos, no una celda de retícula. En escritorio se reparte en dos
 * filas (alto proporcional al peso de la fila, ancho proporcional al peso de
 * cada región dentro de ella); en móvil son bandas apiladas cuya ALTURA dice lo
 * mismo, con un piso táctil para que todas se puedan tocar.
 *
 * Es UN SOLO árbol para los dos casos: las filas son `display:contents` por
 * debajo de lg, así que las piezas caen directas en la columna sin duplicar
 * marcado (y sin duplicar enlaces para el rastreador). Los tamaños que cambian
 * entre móvil y escritorio viajan como custom properties.
 *
 * Al posar o enfocar una pieza se abre su panel debajo. La pieza sigue siendo
 * un enlace real a su región: el puntero elige, el clic navega, y los seis
 * paneles van servidos en el HTML.
 */

const PISO_MOVIL = 44; // px — objetivo táctil mínimo de una banda
const ALTO_MOVIL = 620;
const ALTO_ESCRITORIO = 700;
// Por debajo de este porcentaje del ancho de su fila, la pieza no tiene sitio
// para el rótulo en horizontal y lo gira (sólo en escritorio).
const ESTRECHA = 0.1;

function repartirFilas(regions, total) {
  const orden = [...regions].sort((a, b) => (b.count || 0) - (a.count || 0));

  // Primera fila: las mayores hasta cubrir ~60% del archivo. Con seis regiones
  // muy desiguales eso deja las dos grandes arriba y las cuatro chicas abajo,
  // y el corte se recalcula solo si el reparto cambia.
  const primera = [];
  let acumulado = 0;
  for (const region of orden) {
    primera.push(region);
    acumulado += region.count || 0;
    if (acumulado / total >= 0.6 || primera.length === orden.length - 1) break;
  }
  const segunda = orden.slice(primera.length);
  const filas = segunda.length ? [primera, segunda] : [primera];

  return filas.map((items) => {
    const peso = items.reduce((t, r) => t + (r.count || 0), 0) || 1;
    return { items, peso, alto: Math.round((peso / total) * ALTO_ESCRITORIO) };
  });
}

function altoBandaMovil(count, total, cantidad) {
  const resto = Math.max(ALTO_MOVIL - PISO_MOVIL * cantidad, 0);
  return Math.round(PISO_MOVIL + (count / total) * resto);
}

function Pieza({ region, abierta, onActivar, girado, altoMovil, cuerpo }) {
  return (
    <Link
      href={`/regiones/${region.slug}`}
      onMouseEnter={() => onActivar(region.slug)}
      onFocus={() => onActivar(region.slug)}
      style={{
        // El peso sólo entra en juego en la fila de escritorio. En móvil las
        // piezas son ítems de una columna sin altura definida: darles
        // `flex-basis: 0` ahí las colapsaría a cero.
        "--peso": region.count || 1,
        "--pieza-alto": `${altoMovil}px`,
        "--pieza-cuerpo-lg": cuerpo,
      }}
      className={cn(
        "group relative block h-[var(--pieza-alto)] min-w-0 overflow-hidden",
        "bg-[rgb(var(--atlas-night))] transition-[filter] duration-300",
        "lg:h-full lg:flex-[var(--peso)_1_0]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ember-400",
        !abierta && "lg:saturate-[0.85] lg:brightness-[0.92]"
      )}
    >
      <ImageFrame
        src={region.imageUrl}
        alt={`Obra de la región ${region.name}`}
        ratio={null}
        sizes="(max-width: 1024px) 100vw, 50vw"
        placeholderMotif={region.motif}
        placeholderSize={120}
        className="absolute inset-0 h-full w-full rounded-none border-0"
        imgClassName="atlas-image-zoom object-cover"
      />
      <span className="atlas-scrim pointer-events-none absolute inset-0" />
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 transition-shadow duration-300",
          abierta && "lg:shadow-[inset_0_0_0_3px_#d8aa62]"
        )}
      />

      {/* Rótulo horizontal. En escritorio se retira cuando la pieza es
          demasiado estrecha y toma el relevo la versión girada. */}
      <span
        className={cn(
          "atlas-on-image absolute inset-x-0 bottom-0 flex items-end px-5 pb-4 text-white lg:px-7 lg:pb-6",
          girado && "lg:hidden"
        )}
      >
        <span className="block min-w-0">
          <span className="block font-editorial text-2xl leading-none tracking-[-0.014em] lg:text-[length:var(--pieza-cuerpo-lg)]">
            {region.name}
          </span>
          <span className="mt-2 flex items-baseline gap-2">
            <span className="atlas-figure font-editorial text-lg leading-none text-ember-400">
              {region.count}
            </span>
            <span className="atlas-kicker !text-white/75">relatos</span>
          </span>
        </span>
      </span>

      {/* Rótulo girado: sólo aparece en escritorio y sólo en piezas estrechas.
          `aria-hidden` porque el texto ya lo aporta el rótulo horizontal. */}
      {girado ? (
        <span
          aria-hidden
          className="atlas-on-image absolute inset-x-0 bottom-0 hidden justify-center pb-5 text-white lg:flex"
        >
          <span className="flex rotate-180 items-center gap-3 [writing-mode:vertical-rl]">
            <span className="font-editorial text-xl leading-none">
              {region.name}
            </span>
            <span className="atlas-figure font-editorial text-base leading-none text-ember-400">
              {region.count}
            </span>
          </span>
        </span>
      ) : null}
    </Link>
  );
}

export function RegionMosaic({ regions = [] }) {
  const orden = useMemo(
    () => [...regions].sort((a, b) => (b.count || 0) - (a.count || 0)),
    [regions]
  );
  const [activa, setActiva] = useState(() => orden[0]?.slug || null);

  const total = useMemo(
    () => regions.reduce((t, r) => t + (r.count || 0), 0) || 1,
    [regions]
  );
  const filas = useMemo(() => repartirFilas(regions, total), [regions, total]);

  if (!regions.length) return null;

  return (
    <>
      <div className="flex flex-col gap-0.5 bg-[rgb(var(--atlas-night))]">
        {filas.map((fila, i) => (
          <div
            key={i}
            className="contents lg:flex lg:gap-0.5"
            style={{ "--fila-alto": `${fila.alto}px` }}
          >
            {/* La altura de fila sólo existe en escritorio; en móvil la manda
                cada banda. */}
            <div className="contents lg:flex lg:h-[var(--fila-alto)] lg:w-full lg:gap-0.5">
              {fila.items.map((region) => {
                const proporcion = (region.count || 0) / fila.peso;
                return (
                  <Pieza
                    key={region.slug}
                    region={region}
                    abierta={region.slug === activa}
                    onActivar={setActiva}
                    girado={proporcion < ESTRECHA}
                    altoMovil={altoBandaMovil(
                      region.count || 0,
                      total,
                      orden.length
                    )}
                    cuerpo={`${Math.max(
                      1.15,
                      Math.min(3.4, proporcion * fila.alto * 0.012)
                    )}rem`}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-3 text-xs leading-relaxed tracking-[0.04em] text-ink-500">
        El área de cada pieza es proporcional a su número de relatos. No hay
        retícula: la composición la decide el archivo.
        <span className="lg:hidden">
          {" "}
          En vertical todas guardan un mínimo de {PISO_MOVIL} px para que se
          puedan tocar.
        </span>
      </p>

      {/* Los seis paneles van en el HTML. En escritorio se ve el de la región
          abierta; en móvil se leen todos, uno tras otro. */}
      <div className="mt-10 border-t border-line-100 pt-8 lg:mt-12">
        <p className="atlas-kicker hidden lg:block">Región abierta</p>
        <div className="flex flex-col gap-12 lg:mt-5 lg:gap-0">
          {orden.map((region) => (
            <div
              key={region.slug}
              className={cn(region.slug !== activa && "lg:hidden")}
            >
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
                <div>
                  <h3 className="atlas-title-lg">
                    <Link
                      href={`/regiones/${region.slug}`}
                      className="transition-colors hover:text-jungle-500"
                    >
                      {region.name}
                    </Link>
                  </h3>
                  {region.paragraph ? (
                    <p className="mt-4 max-w-prose leading-relaxed text-ink-700">
                      {region.paragraph}
                    </p>
                  ) : null}
                  <Link
                    href={`/regiones/${region.slug}`}
                    className="atlas-link group mt-4"
                  >
                    Los {region.count} relatos
                    <Icon name="arrow-right" size={17} className="mc-arrow" />
                  </Link>
                </div>
                {region.myths?.length ? (
                  <div>
                    <p className="atlas-kicker">Mitos para empezar</p>
                    <ul className="mt-3 border-t border-line-100">
                      {region.myths.map((myth, index) => (
                        <li key={myth.slug}>
                          <Link
                            href={`/mitos/${myth.slug}`}
                            className="group grid min-h-11 grid-cols-[2.2rem_minmax(0,1fr)_1.4rem] items-baseline gap-3 border-b border-line-100 py-3 text-ink-900 transition-colors hover:text-jungle-700"
                          >
                            <span className="atlas-figure font-editorial text-lg text-jungle-500">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <span className="atlas-title-sm">{myth.title}</span>
                            <Icon
                              name="arrow-right"
                              size={16}
                              className="mc-arrow text-jungle-700"
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
