import { Suspense } from "react";
import Link from "next/link";
import { unstable_cache } from "next/cache";
import { Button, Container, Icon, Input, Select, Skeleton } from "./atoms";
import { Pagination } from "./molecules";
import {
  ARCHIVE_ROW_ROWS,
  ArchiveRow,
  GRID_WIDE,
} from "./molecules/ArchiveRow";
import { Header } from "./organisms";
import { cn } from "../lib/utils";
import { filterAllowedCommunities } from "../lib/communityFilters";
import { getTaxonomy, listMyths } from "../lib/myths";
import { resolveSearchParams } from "../lib/next-route-props";
import { withMythImageVariants } from "../lib/myth-images";
import {
  ARCHIVE_DEFAULT_LIMIT,
  archiveFolio,
  archivePageHref,
  archiveQueryWith,
  archiveQueryWithout,
  archiveRange,
  buildArchiveQuery,
  readArchiveParams,
  totalArchivePages,
} from "../lib/archive-params";

export { ARCHIVE_DEFAULT_LIMIT as DEFAULT_LIMIT } from "../lib/archive-params";

/**
 * El archivo de mitos: 596 relatos, 24 por página, 25 páginas.
 *
 * La página se lee en dos tiempos. El **cabezal** (título, cifras del archivo,
 * tira de regiones y el formulario de filtros) sólo necesita la taxonomía, que
 * está cacheada una hora, así que se envía de inmediato. El **índice** de
 * relatos, que sí consulta la base, va dentro de un `<Suspense>` y llega
 * después: quien abre `/mitos` ve la portada del archivo sin esperar a la
 * consulta.
 *
 * ⚠️ Esto NO vuelve estática la ruta. Sin `ppr` ni `cacheComponents` en
 * `next.config.js`, cualquier `await searchParams` aborta la generación
 * estática de la ruta ENTERA —el camino "Legacy Prerender" de
 * `next/dist/server/request/search-params.js` lanza
 * `throwToInterruptStaticGeneration`—, esté o no dentro de un `<Suspense>`. Y
 * `/mitos` no puede dejar de leer la query: es la URL de resultados de
 * búsqueda del sitio (`?q=`), la que declara el buscador de datos
 * estructurados. Lo que sí se puede evitar es el trabajo: las 25 páginas sin
 * filtros —las canónicas, las que rastrean los buscadores— se sirven del caché
 * de datos y no tocan Postgres.
 */

/**
 * Navegación del archivo sin filtros: como mucho 25 entradas de caché, una por
 * página. Deliberadamente NO se cachean las búsquedas ni los filtros libres:
 * `?q=` y `?tag=` son texto abierto y cachearlos deja que cualquiera llene el
 * caché de datos con claves irrepetibles.
 */
const listArchiveBrowsePage = unstable_cache(
  async (limit, offset) => listMyths({ limit, offset }),
  ["mitos-archivo-navegacion"],
  { revalidate: 300, tags: ["myth"] }
);

function loadArchive(params) {
  const cacheable =
    !params.hasAnyFilter && params.limit === ARCHIVE_DEFAULT_LIMIT;
  if (cacheable) return listArchiveBrowsePage(params.limit, params.offset);
  return listMyths({
    region: params.region,
    community: params.community,
    tag: params.tag,
    q: params.q,
    limit: params.limit,
    offset: params.offset,
  });
}

/** Total real del archivo, tomado de la taxonomía (ya cacheada). */
export function archiveTotalFromTaxonomy(taxonomy) {
  return (taxonomy?.regions || []).reduce(
    (sum, region) => sum + (Number(region?.myth_count) || 0),
    0
  );
}

function labelForTaxon(list, value) {
  const match = (list || []).find(
    (item) => item?.slug === value || item?.name === value
  );
  return match?.name || value;
}

function activeChips(params, taxonomy) {
  const chips = [];
  if (params.q) chips.push({ key: "q", label: "Búsqueda", value: params.q });
  if (params.region) {
    chips.push({
      key: "region",
      label: "Región",
      value: labelForTaxon(taxonomy.regions, params.region),
    });
  }
  if (params.community) {
    chips.push({
      key: "community",
      label: "Comunidad",
      value: labelForTaxon(taxonomy.communities, params.community),
    });
  }
  if (params.tag) {
    chips.push({
      key: "tag",
      label: "Categoría",
      value: labelForTaxon(taxonomy.tags, params.tag),
    });
  }
  return chips;
}

/* ─────────────────────────── Cabezal ─────────────────────────── */

function ArchiveMasthead({ params, taxonomy, archiveTotal }) {
  const communityOptions = filterAllowedCommunities(taxonomy.communities);
  const tagOptions = (taxonomy.tags || []).slice(0, 60);
  const chips = activeChips(params, taxonomy);
  /* Sin el conteo de categorías a propósito: son 994 etiquetas para 596
     relatos, y como cifra de portada confunde más de lo que sitúa. */
  const figures = [
    { value: archiveTotal, label: archiveTotal === 1 ? "relato" : "relatos" },
    { value: (taxonomy.regions || []).length, label: "regiones" },
    { value: (taxonomy.communities || []).length, label: "comunidades" },
  ].filter((figure) => figure.value > 0);

  return (
    <section className="border-b border-line-100">
      <Container size="atlas" className="pb-9 pt-10 md:pb-11 md:pt-14">
        <p className="atlas-kicker">Archivo</p>
        <h1 className="atlas-h1 mt-3 max-w-4xl">Todos los mitos de Colombia</h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-700">
          El fondo completo, en orden alfabético. Busca un nombre, acota por
          territorio o baja por el índice hasta que algo te detenga.
        </p>

        {figures.length ? (
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
            {figures.map((figure) => (
              <div key={figure.label}>
                <dt className="atlas-kicker text-ink-500">{figure.label}</dt>
                <dd className="atlas-figure mt-1 font-display text-[length:var(--step-3)] leading-none text-jungle-700">
                  {figure.value}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}

        {(taxonomy.regions || []).length ? (
          <nav aria-label="Explorar por región" className="mt-8">
            <ul className="flex list-none flex-wrap gap-2">
              <li>
                <RegionPill
                  href={`/mitos${archiveQueryWithout(params, "region")}`}
                  active={!params.region}
                  label="Todas"
                />
              </li>
              {taxonomy.regions.map((region) => (
                <li key={region.slug}>
                  <RegionPill
                    href={`/mitos${archiveQueryWith(params, "region", region.slug)}`}
                    active={
                      params.region === region.slug ||
                      params.region === region.name
                    }
                    label={region.name}
                    count={region.myth_count}
                  />
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </Container>

      {/*
        Un solo formulario para las cuatro claves. Antes eran dos —uno con `q`
        y otro con región/comunidad/categoría— y como cada uno enviaba sólo sus
        campos, buscar borraba los filtros y filtrar borraba la búsqueda.
      */}
      <form
        action="/mitos"
        method="get"
        role="search"
        className="border-t border-line-100 bg-white"
      >
        {params.limit !== ARCHIVE_DEFAULT_LIMIT ? (
          <input type="hidden" name="limit" value={params.limit} />
        ) : null}
        <Container
          size="atlas"
          className="grid gap-4 py-5 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_auto] lg:items-end"
        >
          <div>
            <label
              htmlFor="archivo-q"
              className="atlas-kicker mb-2 block text-ink-500"
            >
              Buscar
            </label>
            <Input
              id="archivo-q"
              type="search"
              name="q"
              defaultValue={params.q}
              placeholder="Nombre, criatura, tema…"
            />
          </div>
          <div>
            <label
              htmlFor="archivo-region"
              className="atlas-kicker mb-2 block text-ink-500"
            >
              Región
            </label>
            <Select
              id="archivo-region"
              name="region"
              defaultValue={params.region}
            >
              <option value="">Todas</option>
              {(taxonomy.regions || []).map((item) => (
                <option key={item.slug} value={item.slug}>
                  {item.name}
                </option>
              ))}
            </Select>
          </div>
          <div>
            <label
              htmlFor="archivo-community"
              className="atlas-kicker mb-2 block text-ink-500"
            >
              Comunidad
            </label>
            <Select
              id="archivo-community"
              name="community"
              defaultValue={params.community}
            >
              <option value="">Todas</option>
              {communityOptions.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {item.name}
                </option>
              ))}
            </Select>
          </div>
          <div>
            <label
              htmlFor="archivo-tag"
              className="atlas-kicker mb-2 block text-ink-500"
            >
              Categoría
            </label>
            <Input
              id="archivo-tag"
              name="tag"
              list="archivo-tag-options"
              defaultValue={params.tag}
              placeholder="Todas"
            />
            <datalist id="archivo-tag-options">
              {tagOptions.map((item) => (
                <option key={item.slug} value={item.name} />
              ))}
            </datalist>
          </div>
          <Button type="submit" variant="primary" className="sm:col-span-2 lg:col-span-1">
            Aplicar
          </Button>
        </Container>

        {chips.length ? (
          <Container size="atlas" className="flex flex-wrap items-center gap-2 pb-5">
            {chips.map((chip) => (
              <Link
                key={chip.key}
                href={`/mitos${archiveQueryWithout(params, chip.key)}`}
                className="inline-flex items-center gap-2 rounded-sm border border-line-200 bg-mist-50 px-2.5 py-1.5 text-xs text-ink-700 transition-colors hover:border-line-300 hover:bg-mist-100 hover:text-ink-900"
              >
                <span className="font-semibold uppercase tracking-[0.12em] text-ink-500">
                  {chip.label}
                </span>
                <span className="max-w-[14rem] truncate">{chip.value}</span>
                <Icon name="x" size={13} aria-hidden="true" />
                <span className="sr-only">Quitar este filtro</span>
              </Link>
            ))}
            <Link
              href="/mitos"
              className="inline-flex items-center gap-1 rounded-sm px-2 py-1.5 text-xs font-semibold text-ink-500 transition-colors hover:bg-mist-50 hover:text-ink-900"
            >
              Limpiar todo
            </Link>
          </Container>
        ) : null}
      </form>
    </section>
  );
}

function RegionPill({ href, active, label, count }) {
  return (
    <Link
      href={href}
      aria-current={active ? "true" : undefined}
      className={cn(
        "group inline-flex items-center gap-2 rounded-sm border px-3 py-2 text-sm transition-colors duration-200 motion-reduce:transition-none",
        active
          ? "border-jungle-500 bg-jungle-500 text-white"
          : "border-line-200 bg-white text-ink-700 hover:border-line-300 hover:bg-mist-50 hover:text-ink-900"
      )}
    >
      {label}
      {count ? (
        <span
          className={cn(
            "atlas-figure",
            active ? "text-white/70" : "text-ink-500 group-hover:text-ink-700"
          )}
        >
          {count}
        </span>
      ) : null}
    </Link>
  );
}

/* ─────────────────────────── Índice ─────────────────────────── */

function ArchiveNotice({ title, description, action }) {
  return (
    <div className="border-y border-line-100 px-6 py-16 text-center">
      <p className="atlas-title-lg text-ink-900">{title}</p>
      {description ? (
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink-700">
          {description}
        </p>
      ) : null}
      {action}
    </div>
  );
}

async function ArchiveResults({ params }) {
  const result = await loadArchive(params);
  const total = Number(result?.total) || 0;
  const items = result?.items || [];
  const myths = items.map((myth) =>
    withMythImageVariants({
      slug: myth.slug,
      title: myth.title,
      excerpt: myth.excerpt,
      region: myth.region,
      community: myth.community,
      image_url: myth.image_url,
      vertical_image_url: myth.vertical_image_url,
    })
  );

  const query = buildArchiveQuery(params);
  const totalPages = totalArchivePages(total, params.limit);
  const range = archiveRange({
    offset: params.offset,
    count: myths.length,
    total,
  });
  const makeHref = (page) => archivePageHref(page, query);

  if (result?.error === "db_quota_exceeded") {
    return (
      <Container size="atlas" className="py-12 md:py-16">
        <ArchiveNotice
          title="El archivo no está disponible ahora mismo"
          description="La base de datos alcanzó su cuota de consulta. Vuelve a intentarlo en unos minutos; los relatos siguen ahí."
        />
      </Container>
    );
  }

  if (!myths.length) {
    const outOfRange = total > 0 && params.page > totalPages;
    return (
      <Container size="atlas" className="py-12 md:py-16">
        <ArchiveNotice
          title={
            outOfRange
              ? "Esa página se salió del archivo"
              : "No encontramos relatos con esos filtros"
          }
          description={
            outOfRange
              ? `Con esta selección el archivo llega hasta la página ${totalPages}.`
              : "Prueba con menos filtros o con otra palabra: el archivo indexa nombres, criaturas y temas."
          }
          action={
            <Link
              href={outOfRange ? archivePageHref(totalPages, query) : "/mitos"}
              className="atlas-link mx-auto mt-7"
            >
              {outOfRange
                ? `Ir a la página ${totalPages}`
                : "Volver al archivo completo"}
              <Icon name="arrow-right" size={17} />
            </Link>
          }
        />
      </Container>
    );
  }

  const first = myths[0]?.title;
  const last = myths[myths.length - 1]?.title;
  const showAlphaRange = !params.q && myths.length > 1 && first && last;

  return (
    <Container size="atlas" className="py-12 md:py-16">
      <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4 border-b border-line-100 pb-6">
        <div className="min-w-0">
          <h2 className="atlas-section-heading">
            {params.q ? `Resultados para «${params.q}»` : "Índice del archivo"}
          </h2>
          <p className="atlas-kicker mt-3 text-ink-500">
            <span className="atlas-figure">
              {range.from}–{range.to}
            </span>{" "}
            de <span className="atlas-figure">{total}</span> · página{" "}
            <span className="atlas-figure">{params.page}</span> de{" "}
            <span className="atlas-figure">{totalPages}</span>
          </p>
          {showAlphaRange ? (
            <p className="mt-2 truncate text-sm text-ink-500">
              De «{first}» a «{last}»
            </p>
          ) : null}
        </div>
        {params.hasAnyFilter ? (
          <Link href="/mitos" className="atlas-link">
            Ver el archivo completo
            <Icon name="arrow-right" size={17} />
          </Link>
        ) : null}
      </div>

      {/*
        Un solo tratamiento para los 24 relatos. Antes la página abría con una
        obra a sangre, seguía con un mosaico de tres tarjetas y terminaba en
        una lista numerada a dos columnas: tres jerarquías distintas para un
        orden alfabético, es decir, jerarquías sin criterio. Con 596 relatos lo
        que se necesita es un índice parejo que se pueda barrer.
      */}
      <ol className="mt-8 list-none border-t border-line-100">
        {myths.map((myth, index) => (
          <li key={myth.slug}>
            <ArchiveRow
              myth={myth}
              folio={archiveFolio(params.offset, index)}
              showExcerpt
            />
          </li>
        ))}
      </ol>

      <Pagination
        page={params.page}
        totalPages={totalPages}
        makeHref={makeHref}
        className="mt-12 justify-center"
      />
    </Container>
  );
}

function ArchiveResultsFallback({ limit = ARCHIVE_DEFAULT_LIMIT }) {
  const rows = Math.max(4, Math.min(Number(limit) || 8, 8));
  return (
    <Container size="atlas" className="py-12 md:py-16">
      <p className="sr-only" role="status">
        Cargando relatos del archivo…
      </p>
      <div className="border-b border-line-100 pb-6">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="mt-4 h-4 w-40" />
      </div>
      <div className="mt-8 border-t border-line-100">
        {Array.from({ length: rows }).map((_, index) => (
          <div
            key={index}
            className={cn(
              "grid items-stretch gap-x-4 border-b border-line-100 sm:gap-x-5 lg:gap-x-6",
              ARCHIVE_ROW_ROWS,
              GRID_WIDE
            )}
          >
            <span aria-hidden="true" />
            <Skeleton className="h-full w-full rounded-none" />
            <div className="self-center py-3">
              <Skeleton className="h-5 w-2/3 max-w-sm" />
              <Skeleton className="mt-3 h-3 w-32" />
            </div>
            {/* Las dos celdas de la derecha del renglón real —resumen y
                flecha— se dejan vacías: reservan su ancho para que el índice
                no se corra al reemplazar el esqueleto. */}
            <span aria-hidden="true" className="hidden xl:block" />
            <span aria-hidden="true" className="w-[18px]" />
          </div>
        ))}
      </div>
    </Container>
  );
}

/* ─────────────────────────── Página ─────────────────────────── */

export async function MitosArchiveContent({ page = 1, searchParams = {} }) {
  const resolvedSearchParams = await resolveSearchParams(searchParams);
  const params = readArchiveParams(resolvedSearchParams, page);
  const taxonomy = await getTaxonomy();
  const archiveTotal = archiveTotalFromTaxonomy(taxonomy);

  return (
    <>
      <Header active="/mitos" />
      <main id="contenido" className="min-h-[100dvh] overflow-x-clip bg-paper">
        <ArchiveMasthead
          params={params}
          taxonomy={taxonomy}
          archiveTotal={archiveTotal}
        />
        {/* La clave reinicia el estado de carga al cambiar de página o de
            filtro: sin ella, React conserva el índice anterior mientras llega
            el nuevo y la navegación parece no haber hecho nada. */}
        <Suspense
          key={`${params.page}|${buildArchiveQuery(params)}`}
          fallback={<ArchiveResultsFallback limit={params.limit} />}
        >
          <ArchiveResults params={params} />
        </Suspense>
      </main>
    </>
  );
}
