import { Suspense } from "react";
import Link from "next/link";
import { unstable_cache } from "next/cache";
import { Button, Container, Icon, Input, Select, Skeleton } from "./atoms";
import { Pagination } from "./molecules";
import { ArtworkLink } from "./molecules/ArtworkLink";
import { Header } from "./organisms";
import { filterAllowedCommunities, collectUnattributed } from "../lib/communityFilters";
import { getTaxonomy, listMyths } from "../lib/myths";
import { resolveSearchParams } from "../lib/next-route-props";
import { withMythImageVariants } from "../lib/myth-images";
import { ARCHIVE_DEFAULT_LIMIT, archivePageHref, archiveQueryWith, archiveQueryWithout, archiveRange, buildArchiveQuery, readArchiveParams, totalArchivePages } from "../lib/archive-params";
import styles from "./archive-gallery.module.css";
import canvas from "./editorial/archive-canvas.module.css";

export { ARCHIVE_DEFAULT_LIMIT as DEFAULT_LIMIT } from "../lib/archive-params";

const listArchiveBrowsePage = unstable_cache(
  async (limit, offset) => listMyths({ limit, offset }),
  ["mitos-archivo-navegacion"], { revalidate: 300, tags: ["myth"] }
);
function loadArchive(params) {
  if (!params.hasAnyFilter && params.limit === ARCHIVE_DEFAULT_LIMIT) return listArchiveBrowsePage(params.limit, params.offset);
  return listMyths({ region: params.region, community: params.community, tag: params.tag, q: params.q, limit: params.limit, offset: params.offset });
}
export function archiveTotalFromTaxonomy(taxonomy) {
  return (taxonomy?.regions || []).reduce((sum, region) => sum + (Number(region?.myth_count) || 0), 0);
}
function filterChips(params, taxonomy) {
  return [["q","Búsqueda",[]],["region","Región",taxonomy.regions],["community","Comunidad",taxonomy.communities],["tag","Categoría",taxonomy.tags]]
    .filter(([key]) => params[key]).map(([key,label,list]) => ({ key, label, value: (list || []).find((item) => item.slug === params[key] || item.name === params[key])?.name || params[key] }));
}
function ArchiveMasthead({ params, taxonomy, archiveTotal }) {
  const mixed = collectUnattributed(taxonomy.communities);
  const communityOptions = [...filterAllowedCommunities(taxonomy.communities), ...(mixed?.bucketSlugs || []).map((slug) => ({ slug, name: slug === "mestizo" ? "Mestizos" : "Mixtos" }))];
  const chips = filterChips(params, taxonomy);
  return <Container size="atlas" className={styles.masthead}>
    <div className={styles.titleRow}><h1>Archivo de mitos</h1><p><span className="atlas-figure">{archiveTotal}</span> relatos para explorar</p></div>
    <form action="/mitos" method="get" role="search" className={styles.search}>
      {params.limit !== ARCHIVE_DEFAULT_LIMIT ? <input type="hidden" name="limit" value={params.limit} /> : null}
      {params.vista === "columnas" ? <input type="hidden" name="vista" value="columnas" /> : null}
      <div className={styles.searchRow}>
        <label htmlFor="archivo-q" className="sr-only">Buscar mitos</label>
        <Input id="archivo-q" type="search" name="q" defaultValue={params.q} placeholder="Busca un mito, una criatura, un tema…" />
        <Button type="submit" variant="primary" className={styles.searchSubmit}><Icon name="search" size={18} /><span className={styles.searchLabel}>Buscar</span></Button>
      </div>
      <details className={styles.filters}>
        <summary><Icon name="filter" size={17} /><span className={styles.filterLabel}>Filtros {params.hasFilters ? "activos" : ""}</span><Icon name="chevron-down" size={16} className={styles.filterChevron} /></summary>
        <div className={styles.filterFields}>
          <div><label htmlFor="archivo-region">Región</label><Select id="archivo-region" name="region" defaultValue={params.region}><option value="">Todas</option>{(taxonomy.regions || []).map((item) => <option key={item.slug} value={item.slug}>{item.name}</option>)}</Select></div>
          <div><label htmlFor="archivo-community">Comunidad o tradición</label><Select id="archivo-community" name="community" defaultValue={params.community}><option value="">Todas</option>{communityOptions.map((item) => <option key={item.slug} value={item.slug}>{item.name}</option>)}</Select></div>
          <div><label htmlFor="archivo-tag">Categoría</label><Input id="archivo-tag" name="tag" list="archivo-tag-options" defaultValue={params.tag} placeholder="Todas" /><datalist id="archivo-tag-options">{(taxonomy.tags || []).slice(0,100).map((item) => <option key={item.slug} value={item.name} />)}</datalist></div>
          <Button type="submit" variant="primary">Aplicar filtros</Button>
        </div>
      </details>
    </form>
    {chips.length ? <div className={styles.activeFilters}>{chips.map((chip) => <Link key={chip.key} href={`/mitos${archiveQueryWithout(params, chip.key)}`}><span>{chip.label}: {chip.value}</span><Icon name="x" size={14} /><span className="sr-only">Quitar este filtro</span></Link>)}<Link href={`/mitos${buildArchiveQuery({ vista: params.vista })}`}>Limpiar todo</Link></div> : null}
  </Container>;
}
function ArchiveNotice({ title, description, href, action }) {
  return <div className="border-y border-line-100 py-12 text-center"><h2 className="atlas-title-lg">{title}</h2><p className="mx-auto mt-3 max-w-lg text-sm text-ink-700">{description}</p>{href ? <Link href={href} className="atlas-link mt-5">{action}<Icon name="arrow-right" size={17} /></Link> : null}</div>;
}
async function ArchiveResults({ params }) {
  const result = await loadArchive(params);
  const total = Number(result?.total) || 0;
  const myths = (result?.items || []).map(withMythImageVariants);
  const query = buildArchiveQuery(params);
  const totalPages = totalArchivePages(total, params.limit);
  const range = archiveRange({ offset: params.offset, count: myths.length, total });
  const makeHref = (page) => archivePageHref(page, query);
  if (result?.error === "db_quota_exceeded") return <Container size="atlas"><ArchiveNotice title="El archivo no está disponible ahora mismo" description="Vuelve a intentarlo en unos minutos." /></Container>;
  if (!myths.length) {
    const outOfRange = total > 0 && params.page > totalPages;
    return <Container size="atlas"><ArchiveNotice title={outOfRange ? "Esa página se salió del archivo" : "No encontramos relatos con esos filtros"} description={outOfRange ? `La selección llega hasta la página ${totalPages}.` : "Prueba otra palabra o menos filtros."} href={outOfRange ? makeHref(totalPages) : "/mitos"} action={outOfRange ? "Ir a la última página" : "Ver todos los mitos"} /></Container>;
  }
  return <Container size="atlas" className={styles.results}>
    <div className={styles.resultsToolbar}>
      <p role="status">{params.q ? `Resultados para «${params.q}» · ` : ""}<span className="atlas-figure">{range.from}–{range.to}</span> de <span className="atlas-figure">{total}</span> relatos</p>
      <nav aria-label="Vista del archivo" className={styles.viewControls}>
        {[['imagen','Imagen'],['columnas','Columnas']].map(([view,label]) => <Link key={view} href={archivePageHref(params.page, archiveQueryWith(params, "vista", view))} aria-current={params.vista === view ? "true" : undefined}>{label}</Link>)}
      </nav>
    </div>
    <ol className={styles.gallery} data-view={params.vista} aria-label="Mitos del archivo">
      {myths.map((myth,index) => <li key={myth.slug}><ArtworkLink myth={myth} compact={params.vista === "columnas"} priority={index === 0} loading={index < 4 ? "eager" : undefined} /></li>)}
    </ol>
    <Pagination page={params.page} totalPages={totalPages} makeHref={makeHref} className="my-10 justify-center" />
  </Container>;
}
function ArchiveResultsFallback() {
  return <Container size="atlas" className={styles.results}><p className="sr-only" role="status">Cargando relatos…</p><div className={styles.gallery}>{Array.from({ length: 6 }).map((_,i) => <Skeleton key={i} className="aspect-[3/2] w-full rounded-none" />)}</div></Container>;
}
export async function MitosArchiveContent({ page = 1, searchParams = {} }) {
  const params = readArchiveParams(await resolveSearchParams(searchParams), page);
  const taxonomy = await getTaxonomy();
  return <><Header active="/mitos" /><main id="contenido" className={`${canvas.canvas} ${styles.archive}`}><ArchiveMasthead params={params} taxonomy={taxonomy} archiveTotal={archiveTotalFromTaxonomy(taxonomy)} /><Suspense key={`${params.page}|${buildArchiveQuery(params)}`} fallback={<ArchiveResultsFallback />}><ArchiveResults params={params} /></Suspense></main></>;
}
