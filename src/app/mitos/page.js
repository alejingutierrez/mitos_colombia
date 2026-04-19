import Header from "../../components/Header";
import { MythCard } from "../../components/MythCard";
import { Badge } from "../../components/ui/Badge";
import { ButtonLink } from "../../components/ui/Button";
import { GlassCard } from "../../components/ui/GlassCard";
import { Pagination } from "../../components/ui/Pagination";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { filterAllowedCommunities } from "../../lib/communityFilters";
import { getTaxonomy, listMyths } from "../../lib/myths";
import { buildSeoMetadata, getSeoEntry } from "../../lib/seo";
import Link from "next/link";

export const runtime = "nodejs";
export const revalidate = 300;

export async function generateMetadata() {
  const seo = await getSeoEntry("page", "mitos");
  return buildSeoMetadata({
    fallback: {
      title: "Archivo de mitos",
      description:
        "Archivo completo de mitos colombianos para explorar por región, comunidad, categorías y palabras clave.",
      keywords: ["mitos", "archivo", "Colombia", "relatos", "folclor"],
    },
    seo,
    canonicalPath: "/mitos",
  });
}

function getParamValue(value) {
  if (Array.isArray(value)) {
    return value[0] ?? "";
  }
  return value ?? "";
}

function buildQuery(params, overrides = {}) {
  const search = new URLSearchParams();
  const entries = { ...params, ...overrides };

  Object.entries(entries).forEach(([key, value]) => {
    if (value === undefined || value === null || value === "") {
      return;
    }
    search.set(key, String(value));
  });

  return search.toString();
}

export default async function MitosPage({ searchParams }) {
  const region = getParamValue(searchParams.region);
  const community = getParamValue(searchParams.community);
  const tag = getParamValue(searchParams.tag);
  const q = getParamValue(searchParams.q);
  const limit = Number.parseInt(getParamValue(searchParams.limit) || "24", 10);
  const offset = Number.parseInt(getParamValue(searchParams.offset) || "0", 10);

  const result = await listMyths({ region, community, tag, q, limit, offset });
  const taxonomy = await getTaxonomy();
  const tagOptions = taxonomy.tags.slice(0, 40);
  const communityOptions = filterAllowedCommunities(taxonomy.communities);

  const paginationBase = {
    region,
    community,
    tag,
    q,
  };

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
          {result.items.map((myth) => {
            const tags = (myth.tags_raw || "")
              .split(",")
              .map((item) => item.trim())
              .filter(Boolean)
              .slice(0, 4);

            return <MythCard key={myth.slug} myth={myth} />;
          })}
        </div>

        <div className="mt-10">
          <Pagination
            total={result.total}
            limit={result.limit}
            offset={offset}
            pathname="/mitos"
            searchParams={paginationBase}
            limitOptions={[12, 24, 48]}
          />
        </div>
      </section>
    </main>
  );
}
