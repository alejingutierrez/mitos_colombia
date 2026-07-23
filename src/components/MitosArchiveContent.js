import Link from "next/link";
import { Container, Icon, ImageFrame, Input, Select, Button } from "./atoms";
import { Pagination } from "./molecules";
import { Header } from "./organisms";
import { filterAllowedCommunities } from "../lib/communityFilters";
import { getTaxonomy, listMyths } from "../lib/myths";
import { resolveSearchParams } from "../lib/next-route-props";
import { OverlayMythCard } from "./editorial/AtlasEditorial";

export const DEFAULT_LIMIT = 24;

export function parsePageParam(value) {
  const parsed = Number.parseInt(value, 10);
  if (!Number.isFinite(parsed) || parsed < 1) return 1;
  return parsed;
}

export function paramValue(value) {
  if (Array.isArray(value)) return value[0] ?? "";
  return value ?? "";
}

function buildQueryString(base) {
  const params = new URLSearchParams();
  for (const [key, val] of Object.entries(base)) {
    if (val) params.set(key, val);
  }
  const string = params.toString();
  return string ? `?${string}` : "";
}

function ArchiveListItem({ myth, index }) {
  return (
    <Link
      href={`/mitos/${myth.slug}`}
      className="group grid grid-cols-[2.5rem_6.5rem_1fr_auto] items-center gap-4 border-b border-line-100 py-4"
    >
      <span className="font-editorial text-2xl text-ink-500">
        {String(index + 1).padStart(2, "0")}
      </span>
      <ImageFrame
        src={myth.imageUrl}
        alt=""
        ratio="4 / 3"
        sizes="104px"
        className="rounded-none border-0"
        imgClassName="atlas-image-zoom object-cover"
      />
      <span className="min-w-0">
        <span className="block font-editorial text-[1.4rem] font-semibold leading-none text-ink-900">
          {myth.title}
        </span>
        <span className="atlas-kicker mt-2 block">
          {[myth.region, myth.community].filter(Boolean).join(" · ")}
        </span>
      </span>
      <Icon name="arrow-right" size={17} className="mc-arrow text-jungle-700" />
    </Link>
  );
}

function ArchiveFeed({ myths = [] }) {
  const [lead, second, third, ...rest] = myths;
  if (!lead) {
    return (
      <div className="border-y border-line-100 py-16 text-center">
        <p className="font-editorial text-3xl text-ink-900">
          No encontramos relatos con esos filtros.
        </p>
        <Link href="/mitos" className="atlas-link mt-6">
          Volver al archivo completo <Icon name="arrow-right" size={17} />
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-3 lg:grid-cols-[1.15fr_0.8fr_1fr]">
        <OverlayMythCard
          myth={lead}
          ratio="4 / 3"
          priority
          sizes="(max-width: 1024px) 100vw, 40vw"
          titleClassName="!text-[2.8rem]"
        />
        <div className="grid gap-3">
          <OverlayMythCard
            myth={second}
            ratio="16 / 9"
            sizes="(max-width: 1024px) 100vw, 28vw"
            showExcerpt={false}
            titleClassName="!text-[1.7rem]"
          />
          <OverlayMythCard
            myth={third}
            ratio="16 / 9"
            sizes="(max-width: 1024px) 100vw, 28vw"
            showExcerpt={false}
            titleClassName="!text-[1.7rem]"
          />
        </div>
        <div className="border-y border-line-100">
          {rest.slice(0, 4).map((myth, index) => (
            <ArchiveListItem key={myth.slug} myth={myth} index={index} />
          ))}
        </div>
      </div>
      {rest.length > 4 ? (
        <div className="mt-12 grid gap-x-10 sm:grid-cols-2">
          {rest.slice(4).map((myth, index) => (
            <ArchiveListItem key={myth.slug} myth={myth} index={index + 4} />
          ))}
        </div>
      ) : null}
    </>
  );
}

export async function MitosArchiveContent({ page = 1, searchParams = {} }) {
  const resolvedSearchParams = await resolveSearchParams(searchParams);
  const region = paramValue(resolvedSearchParams.region);
  const community = paramValue(resolvedSearchParams.community);
  const tag = paramValue(resolvedSearchParams.tag);
  const q = paramValue(resolvedSearchParams.q);
  const limit = Number.parseInt(
    paramValue(resolvedSearchParams.limit) || DEFAULT_LIMIT,
    10
  );
  const offset = (page - 1) * limit;

  const [result, taxonomy] = await Promise.all([
    listMyths({ region, community, tag, q, limit, offset }),
    getTaxonomy(),
  ]);
  const tagOptions = taxonomy.tags.slice(0, 40);
  const communityOptions = filterAllowedCommunities(taxonomy.communities);
  const activeFilters = { region, community, tag, q };
  const queryString = buildQueryString(activeFilters);
  const totalPages = Math.max(1, Math.ceil((result.total || 0) / limit));
  const makeHref = (nextPage) =>
    nextPage <= 1
      ? `/mitos${queryString}`
      : `/mitos/pagina/${nextPage}${queryString}`;

  const myths = (result.items || []).map((myth) => ({
    slug: myth.slug,
    title: myth.title,
    excerpt: myth.excerpt,
    region: myth.region,
    community: myth.community,
    imageUrl: myth.image_url,
  }));
  const heroMyth = myths[0];

  return (
    <>
      <Header active="/mitos" />
      <main className="min-h-[100dvh] overflow-x-clip bg-paper">
        <section className="grid min-h-[31rem] border-b border-line-100 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="flex items-center p-7 md:p-12 lg:p-14">
            <div className="w-full max-w-xl">
              <h1 className="atlas-title text-[3.7rem] md:text-[5.25rem]">
                Todos los mitos de Colombia
              </h1>
              <p className="mt-6 text-base leading-relaxed text-ink-700">
                Busca una historia o déjate llevar por el archivo.
              </p>
              <form action="/mitos" method="get" className="mt-7">
                <label className="sr-only" htmlFor="archive-hero-search">
                  Buscar en el archivo
                </label>
                <Input
                  id="archive-hero-search"
                  name="q"
                  defaultValue={q}
                  placeholder="Nombre, tema o palabra…"
                  className="min-h-14"
                />
              </form>
            </div>
          </div>
          <OverlayMythCard
            myth={heroMyth}
            ratio="16 / 8.4"
            priority
            sizes="(max-width: 1024px) 100vw, 66vw"
            className="min-h-[27rem] lg:min-h-0"
            titleClassName="!text-[3.2rem]"
          />
        </section>

        <form
          action="/mitos"
          method="get"
          className="border-b border-line-100 bg-white"
        >
          <Container
            size="atlas"
            className="grid gap-4 py-5 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto]"
          >
            <label className="flex items-center gap-3 border-b border-line-200 pb-2">
              <span className="text-sm font-semibold">Región</span>
              <Select name="region" defaultValue={region} className="border-0 bg-transparent">
                <option value="">Todas</option>
                {taxonomy.regions.map((item) => (
                  <option key={item.slug} value={item.slug}>
                    {item.name}
                  </option>
                ))}
              </Select>
            </label>
            <label className="flex items-center gap-3 border-b border-line-200 pb-2">
              <span className="text-sm font-semibold">Comunidad</span>
              <Select
                name="community"
                defaultValue={community}
                className="border-0 bg-transparent"
              >
                <option value="">Todas</option>
                {communityOptions.map((item) => (
                  <option key={item.slug} value={item.slug}>
                    {item.name}
                  </option>
                ))}
              </Select>
            </label>
            <label className="flex items-center gap-3 border-b border-line-200 pb-2">
              <span className="text-sm font-semibold">Categoría</span>
              <Input
                name="tag"
                list="archive-tag-options"
                defaultValue={tag}
                placeholder="Todas"
                className="border-0 bg-transparent"
              />
              <datalist id="archive-tag-options">
                {tagOptions.map((item) => (
                  <option key={item.slug} value={item.name} />
                ))}
              </datalist>
            </label>
            <Button type="submit" variant="primary">
              Aplicar filtros
            </Button>
          </Container>
        </form>

        <Container size="atlas" className="py-12">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="font-editorial text-4xl font-semibold text-ink-900">
                {result.total} relatos
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-ink-500">
                Mostrando {myths.length} en esta página
              </p>
            </div>
            {region || community || tag || q ? (
              <Link href="/mitos" className="atlas-link">
                Limpiar filtros
              </Link>
            ) : null}
          </div>
          <ArchiveFeed myths={myths.slice(heroMyth ? 1 : 0)} />
          <Pagination
            page={page}
            totalPages={totalPages}
            makeHref={makeHref}
            className="mt-12 justify-center border-t border-line-100 pt-8"
          />
        </Container>
      </main>
    </>
  );
}
