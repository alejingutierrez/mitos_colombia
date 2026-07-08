import {
  Container,
  Eyebrow,
  Heading,
  Text,
  Input,
  Select,
  Button,
  ButtonLink,
  Tag,
  Motif,
  StatusDot,
  CountUp,
  Divider,
} from "./atoms";
import { Header, MythGrid } from "./organisms";
import { filterAllowedCommunities } from "../lib/communityFilters";
import { getTaxonomy, listMyths } from "../lib/myths";
import { resolveSearchParams } from "../lib/next-route-props";

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
  const s = params.toString();
  return s ? `?${s}` : "";
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

  const result = await listMyths({ region, community, tag, q, limit, offset });
  const taxonomy = await getTaxonomy();
  const tagOptions = taxonomy.tags.slice(0, 40);
  const communityOptions = filterAllowedCommunities(taxonomy.communities);

  const activeFilters = { region, community, tag, q };
  const qs = buildQueryString(activeFilters);
  const totalPages = Math.max(1, Math.ceil((result.total || 0) / limit));
  const makeHref = (p) => (p <= 1 ? `/mitos${qs}` : `/mitos/pagina/${p}${qs}`);

  const myths = (result.items || []).map((m) => ({
    slug: m.slug,
    title: m.title,
    excerpt: m.excerpt,
    region: m.region,
    community: m.community,
    imageUrl: m.image_url,
  }));

  const hasActive = Boolean(region || community || tag || q);

  return (
    <>
      <Header active="/mitos" />
      <main className="min-h-[100dvh] overflow-x-clip bg-paper">
      <section className="relative overflow-hidden">
        <Motif
          name="jaguar"
          size={480}
          className="pointer-events-none absolute -right-24 -top-16 z-0 hidden opacity-[0.05] lg:block"
          aria-hidden="true"
        />
        <Container size="wide" className="relative z-10 pt-12 md:pt-16">
          <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr] md:items-end">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <StatusDot tone="jungle" />
                <Eyebrow tone="jungle">Archivo completo</Eyebrow>
              </div>
              <Heading level={0} accent="jungle">
                Todos los mitos de Colombia
              </Heading>
              <Text size="lg" className="mt-5 max-w-xl">
                Explora el archivo por región, comunidad, tags o palabras clave.
              </Text>
            </div>
            {/* La escala del archivo como protagonista */}
            <div className="md:text-right">
              <p className="font-display text-[3.5rem] font-extrabold leading-none tracking-tight text-ink-900 md:text-7xl">
                <CountUp to={Number(result.total) || 0} />
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-ink-500">
                {hasActive ? "mitos en tu selección" : "mitos catalogados"}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Container size="wide" className="pb-12 pt-8 md:pb-16">
        {/* Filtros (formulario GET, funciona sin JS y es rastreable) */}
        <form
          action="/mitos"
          method="get"
          className="mt-8 grid gap-3 rounded border border-line-100 bg-white p-4 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr_auto]"
        >
          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-ink-500">
              Buscar
            </span>
            <Input
              name="q"
              defaultValue={q}
              placeholder="Nombre, tema o palabra"
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-ink-500">
              Región
            </span>
            <Select name="region" defaultValue={region}>
              <option value="">Todas</option>
              {taxonomy.regions.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {item.name} ({item.myth_count})
                </option>
              ))}
            </Select>
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-ink-500">
              Comunidad
            </span>
            <Select name="community" defaultValue={community}>
              <option value="">Todas</option>
              {communityOptions.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {item.name}
                </option>
              ))}
            </Select>
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-ink-500">
              Tag
            </span>
            <Input
              name="tag"
              list="tag-options"
              defaultValue={tag}
              placeholder="Ej: Etiológico"
            />
            <datalist id="tag-options">
              {tagOptions.map((item) => (
                <option key={item.slug} value={item.name} />
              ))}
            </datalist>
          </label>

          <div className="flex items-end gap-2">
            <Button type="submit" variant="primary" className="w-full">
              Filtrar
            </Button>
          </div>
        </form>

        {/* Resumen + chips activos */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <Text size="sm" tone="muted">
            Mostrando {myths.length} de {result.total} mitos
          </Text>
          {hasActive ? (
            <div className="flex flex-wrap items-center gap-1.5">
              {region ? <Tag variant="jungle">{region}</Tag> : null}
              {community ? <Tag variant="neutral">{community}</Tag> : null}
              {tag ? <Tag variant="outline">{tag}</Tag> : null}
              {q ? <Tag variant="outline">“{q}”</Tag> : null}
              <ButtonLink href="/mitos" variant="ghost" size="sm">
                Limpiar
              </ButtonLink>
            </div>
          ) : null}
        </div>
      </Container>

      <Divider className="mx-auto max-w-[calc(100%-3rem)]" />

      <Container size="wide" className="py-12">
        <MythGrid
          myths={myths}
          pagination={{ page, totalPages, makeHref }}
        />
      </Container>
      </main>
    </>
  );
}
