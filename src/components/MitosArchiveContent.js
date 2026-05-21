import Header from "./Header";
import { MythCard } from "./MythCard";
import { Badge } from "./ui/Badge";
import { ButtonLink } from "./ui/Button";
import { GlassCard } from "./ui/GlassCard";
import { Pagination } from "./ui/Pagination";
import { SectionHeader } from "./ui/SectionHeader";
import { filterAllowedCommunities } from "../lib/communityFilters";
import { getTaxonomy, listMyths } from "../lib/myths";

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

export async function MitosArchiveContent({ page = 1, searchParams = {} }) {
  const region = paramValue(searchParams.region);
  const community = paramValue(searchParams.community);
  const tag = paramValue(searchParams.tag);
  const q = paramValue(searchParams.q);
  const limit = Number.parseInt(paramValue(searchParams.limit) || DEFAULT_LIMIT, 10);
  const offset = (page - 1) * limit;

  const result = await listMyths({ region, community, tag, q, limit, offset });
  const taxonomy = await getTaxonomy();
  const tagOptions = taxonomy.tags.slice(0, 40);
  const communityOptions = filterAllowedCommunities(taxonomy.communities);

  const paginationBase = { region, community, tag, q };

  return (
    <main className="relative min-h-screen overflow-hidden pb-24">
      <Header taxonomy={taxonomy} />

      <section className="container-shell mt-12">
        <SectionHeader
          eyebrow="Archivo completo"
          title="Todos los mitos, organizados por territorio y tema."
          description="Explora el archivo por region, comunidad, tags o palabras clave."
        />

        <GlassCard className="mt-8 p-6">
          <form
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_auto]"
            action="/mitos"
            method="get"
          >
            <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-ink-500">
              Buscar
              <input
                className="input-glass"
                name="q"
                defaultValue={q}
                placeholder="Nombre del mito, tema o palabra"
                type="text"
              />
            </label>

            <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-ink-500">
              Region
              <select className="input-glass" name="region" defaultValue={region}>
                <option value="">Todas</option>
                {taxonomy.regions.map((item) => (
                  <option key={item.slug} value={item.slug}>
                    {item.name} ({item.myth_count})
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-ink-500">
              Comunidad
              <select
                className="input-glass"
                name="community"
                defaultValue={community}
              >
                <option value="">Todas</option>
                {communityOptions.map((item) => (
                  <option key={item.slug} value={item.slug}>
                    {item.name}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-ink-500">
              Tag
              <input
                className="input-glass"
                name="tag"
                list="tag-options"
                defaultValue={tag}
                placeholder="Ej: Etiologico, Castigo"
              />
              <datalist id="tag-options">
                {tagOptions.map((item) => (
                  <option key={item.slug} value={item.name} />
                ))}
              </datalist>
            </label>

            <div className="flex flex-col justify-end gap-3">
              <button className="v3-btn v3-btn-primary">
                Filtrar
              </button>
              <ButtonLink href="/mitos" variant="outline" size="sm">
                Limpiar filtros
              </ButtonLink>
            </div>
          </form>
        </GlassCard>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-sm text-ink-700">
          <p>
            Mostrando {result.items.length} de {result.total} mitos
          </p>
          <div className="flex items-center gap-2">
            {region ? <Badge>{region}</Badge> : null}
            {community ? <Badge>{community}</Badge> : null}
            {tag ? <Badge>{tag}</Badge> : null}
            {q ? <Badge>{q}</Badge> : null}
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {result.items.map((myth) => (
            <MythCard key={myth.slug} myth={myth} />
          ))}
        </div>

        <div className="mt-10">
          <Pagination
            total={result.total}
            limit={result.limit}
            offset={offset}
            pathname="/mitos"
            searchParams={paginationBase}
            limitOptions={[]}
            pathPagination
          />
        </div>
      </section>
    </main>
  );
}
