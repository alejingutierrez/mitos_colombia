import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import { Badge } from "../../../components/ui/Badge";
import { ButtonLink } from "../../../components/ui/Button";
import { GlassCard } from "../../../components/ui/GlassCard";
import { Pagination } from "../../../components/ui/Pagination";
import { filterAllowedCommunities } from "../../../lib/communityFilters";
import { getTaxonomy, listMyths } from "../../../lib/myths";
import { buildSeoMetadata, getSeoEntry } from "../../../lib/seo";
import Link from "next/link";

export const runtime = "nodejs";
export const revalidate = 300;

// Información específica sobre cada región
const REGION_INFO = {
  "amazonas": {
    title: "Región Amazónica",
    description: "La selva tropical más grande del mundo, hogar de pueblos indígenas con ricas tradiciones orales sobre la creación, transformación y equilibrio natural.",
    longDescription: "La región amazónica colombiana es un vasto territorio de selva tropical que alberga una extraordinaria diversidad de pueblos indígenas, cada uno con complejas tradiciones mitológicas. Los Yukuna, Tanimuka, Uitoto, Desano, Barasana, Andoque y muchos otros pueblos han preservado durante milenios relatos sobre el origen del mundo, la creación de los seres humanos mediante anacondas ancestrales, y las transformaciones míticas que establecieron el orden cultural. La mitología amazónica está profundamente conectada con la selva, los ríos, y los espíritus que habitan estos espacios. Temas recurrentes incluyen viajes entre mundos, ceremonias de maloca, el uso sagrado de plantas como la coca y el tabaco, y enseñanzas sobre el manejo sostenible de recursos. Los mitos amazónicos transmiten profundos conocimientos ecológicos sobre uno de los ecosistemas más complejos del planeta.",
    imagePrompt: "Colombian Amazon rainforest, sacred rivers, indigenous maloca, anaconda mythology, pristine jungle",
    characteristics: [
      "Mitos cosmogónicos elaborados",
      "Anacondas ancestrales como símbolos de creación",
      "Ceremonias de maloca y yurupary",
      "Transformaciones entre humanos y animales",
      "Conocimiento profundo de plantas sagradas"
    ]
  },
  "andina": {
    title: "Región Andina",
    description: "Corazón cultural de Colombia, donde la civilización Muisca y otras culturas desarrollaron complejas mitologías sobre lagunas sagradas, dioses solares y héroes culturales.",
    longDescription: "La región andina colombiana, dominada por las cordilleras de los Andes, ha sido el hogar de importantes civilizaciones como los Muiscas, Catíos, U'wa, Guambianos y Nasa. Esta región presenta una rica fusión de mitologías indígenas prehispánicas y elementos introducidos durante la colonia, creando un sincretismo único. Los Muiscas desarrollaron una compleja religión centrada en Chiminigagua (creador), Bachué (madre de la humanidad), Bochica (héroe civilizador) y Chía (diosa lunar). Las lagunas de alta montaña, como Guatavita e Iguaque, son consideradas sagradas y escenario de importantes mitos cosmogónicos. La mitología andina incluye relatos sobre el origen del sol, la luna, el maíz y otras plantas cultivadas, así como enseñanzas sobre organización social, agricultura en terrazas y el manejo del agua en ecosistemas de montaña. El mestizaje cultural ha dado origen a nuevas narrativas que combinan elementos católicos con tradiciones indígenas.",
    imagePrompt: "Colombian Andes mountains, sacred lagoons, Muisca gold offerings, misty páramo, highland mythology",
    characteristics: [
      "Mitología muisca sobre lagunas sagradas",
      "Sincretismo entre tradiciones indígenas y católicas",
      "Héroes culturales civilizadores",
      "Agricultura y conocimiento de montaña",
      "Leyendas urbanas y rurales mestizas"
    ]
  },
  "caribe": {
    title: "Región Caribe",
    description: "Costa tropical donde confluyen tradiciones indígenas, africanas y europeas, creando un rico universo mitológico de espíritus del agua, resistencia y transformación.",
    longDescription: "La región Caribe colombiana, que se extiende por la costa del mar Caribe y las estribaciones de la Sierra Nevada de Santa Marta, es un territorio de extraordinaria diversidad cultural. Los pueblos Wayuu, Kogui, Arhuaco, Wiwa y Kankuamo han preservado tradiciones ancestrales, mientras que comunidades afrodescendientes y mestizas han desarrollado sus propias narrativas. Los Kogui de la Sierra Nevada consideran este territorio el 'Corazón del Mundo' y tienen elaborados mitos sobre la Madre Universal y el equilibrio ecológico. Los Wayuu, en la península de La Guajira, tienen una rica tradición oral con relatos sobre Maleiwa, Pulowi y Juyá. La región también es rica en leyendas mestizas sobre espíritus del agua (la Llorona, el Hombre Caimán), apariciones y transformaciones. El sincretismo cultural ha producido festividades y narrativas únicas que combinan elementos indígenas, africanos y católicos.",
    imagePrompt: "Colombian Caribbean coast, Sierra Nevada sacred mountains, Wayuu culture, coastal spirits, tropical mythology",
    characteristics: [
      "Sierra Nevada como centro sagrado",
      "Cultura matrilineal Wayuu",
      "Sincretismo afroindígena",
      "Espíritus del agua y transformaciones",
      "Resistencia y preservación cultural"
    ]
  },
  "orinoquia": {
    title: "Región Orinoquía",
    description: "Los vastos llanos orientales, donde pueblos como los Sikuani preservan tradiciones sobre héroes culturales, espíritus de la sabana y el manejo de ecosistemas inundables.",
    longDescription: "La Orinoquía colombiana, conocida como los Llanos Orientales, es una extensa región de sabanas tropicales surcadas por ríos que se inundan estacionalmente. Pueblos indígenas como los Sikuani, Kuiva, Kurripaco y otros han desarrollado mitologías adaptadas a este ecosistema único. Los mitos llaneros incluyen relatos sobre Kuwai y otros héroes culturales que transformaron el paisaje, crearon los ríos y establecieron prácticas culturales. Las narrativas explican el origen de animales característicos de la sabana como el chigüiro, el venado y diversas aves. La mitología de la Orinoquía también incluye conocimientos sobre navegación de ríos y caños, manejo de ganado cimarrón, y la importancia de las ceremonias de rezo. Los pueblos llaneros han desarrollado profundos conocimientos sobre los ciclos de inundación y sequía que caracterizan este ecosistema.",
    imagePrompt: "Colombian Llanos plains, Orinoco rivers, savanna wildlife, seasonal floods, cultural heroes",
    characteristics: [
      "Héroes culturales transformadores",
      "Adaptación a sabanas inundables",
      "Conocimiento de ciclos naturales",
      "Espíritus de animales de la sabana",
      "Ceremonias de rezo y curación"
    ]
  },
  "pacifico": {
    title: "Región Pacífico",
    description: "Selva tropical húmeda y costa pacífica, territorio de pueblos indígenas como los Nasa y comunidades afrodescendientes con ricas tradiciones sobre agua, selva y resistencia.",
    longDescription: "La región Pacífico colombiana, caracterizada por su alta pluviosidad y densa selva tropical, es hogar de pueblos indígenas como los Nasa (Páez), Emberá y Awá, así como de numerosas comunidades afrodescendientes que llegaron durante el período colonial. Los Nasa tienen una rica tradición mitológica que combina elementos andinos y de selva tropical, con relatos sobre héroes culturales, la resistencia contra la opresión, y la importancia de mantener el equilibrio con la naturaleza. Las comunidades afrodescendientes del Pacífico han desarrollado narrativas propias que combinan elementos africanos, indígenas y católicos, incluyendo creencias sobre espíritus del monte, la tunda, el riviel y otras entidades sobrenaturales. La región tiene una fuerte tradición oral transmitida a través de cantos, décimas y arrullos. Los mitos del Pacífico frecuentemente enfatizan temas de libertad, resistencia cultural y la profunda conexión espiritual con la selva y el mar.",
    imagePrompt: "Colombian Pacific rainforest, humid jungle, coastal communities, resistance mythology, Afro-indigenous fusion",
    characteristics: [
      "Sincretismo afroindígena único",
      "Mitos de resistencia y libertad",
      "Espíritus de la selva húmeda",
      "Tradición oral en décimas y cantos",
      "Conexión con mar y ríos"
    ]
  },
  "varios": {
    title: "Tradiciones Transregionales",
    description: "Mitos que trascienden fronteras regionales o representan tradiciones compartidas por múltiples pueblos y territorios de Colombia.",
    longDescription: "La categoría 'Varios' agrupa mitos que no se limitan a una región específica, sino que son compartidos por múltiples pueblos, han viajado entre regiones, o representan temas universales de la mitología colombiana. Estos relatos pueden incluir narrativas que se encuentran en diferentes versiones a lo largo del país, mitos sobre fenómenos naturales que ocurren en todo el territorio, o enseñanzas morales que trascienden fronteras culturales. También incluye mitos mestizos que han circulado ampliamente, adaptándose a diferentes contextos regionales. Esta categoría refleja la interconexión entre las diversas tradiciones mitológicas colombianas y muestra cómo ciertos temas y motivos narrativos aparecen recurrentemente en diferentes pueblos y regiones, sugiriendo tanto intercambios culturales históricos como preocupaciones humanas universales sobre el origen del mundo, la moral y la relación con la naturaleza.",
    imagePrompt: "Colombian diverse landscapes merging, cultural crossroads, shared mythology, universal themes",
    characteristics: [
      "Temas mitológicos universales",
      "Narrativas compartidas entre regiones",
      "Sincretismo cultural amplio",
      "Mitos sobre fenómenos naturales generales",
      "Enseñanzas morales transculturales"
    ]
  }
};

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

export async function generateMetadata({ params }) {
  const taxonomy = await getTaxonomy();
  const region = taxonomy.regions.find((r) => r.slug === params.slug);

  if (!region) {
    return {
      title: "Región no encontrada | Mitos de Colombia",
      description: "La región solicitada no está disponible.",
    };
  }

  const regionInfo = REGION_INFO[params.slug] || {};
  const title = regionInfo.title || region.name;
  const description = regionInfo.description || `Explora los mitos de la región ${region.name}`;
  const seo = await getSeoEntry("region", params.slug);

  return buildSeoMetadata({
    fallback: {
      title: `${title} | Mitos de Colombia`,
      description,
      keywords: [region.name, "región cultural", "Colombia", "mitología", "tradición oral"],
    },
    seo,
    canonicalPath: `/regiones/${params.slug}`,
  });
}

export default async function RegionDetailPage({ params, searchParams }) {
  const taxonomy = await getTaxonomy();
  const region = taxonomy.regions.find((r) => r.slug === params.slug);

  if (!region) {
    notFound();
  }

  const regionInfo = REGION_INFO[params.slug] || {
    title: region.name,
    description: `Región cultural de Colombia con rica tradición mitológica.`,
    longDescription: `La región ${region.name} es una de las áreas culturales de Colombia, hogar de diversos pueblos y tradiciones que han preservado mitos ancestrales sobre el origen del mundo, la naturaleza y la sociedad.`,
    imagePrompt: "Colombian cultural region, traditional mythology, diverse landscapes",
    characteristics: []
  };

  const q = getParamValue(searchParams.q);
  const tag = getParamValue(searchParams.tag);
  const community = getParamValue(searchParams.community);
  const limit = Number.parseInt(getParamValue(searchParams.limit) || "24", 10);
  const offset = Number.parseInt(getParamValue(searchParams.offset) || "0", 10);

  // Filtrar mitos de esta región
  const result = await listMyths({
    region: region.slug,
    community,
    tag,
    q,
    limit,
    offset
  });

  // Comunidades de esta región
  const regionCommunities = filterAllowedCommunities(taxonomy.communities).filter(
    (c) => c.region_slug === region.slug
  );

  // Tags para filtrar (excluir regiones y "ninguno")
  const regionNames = taxonomy.regions.map((r) => r.name.toLowerCase());
  const tagOptions = taxonomy.tags
    .filter(
      (t) =>
        !regionNames.includes(t.name.toLowerCase()) &&
        t.name.toLowerCase() !== "ninguno"
    )
    .slice(0, 40);

  const paginationBase = {
    q,
    tag,
    community,
  };

  return (
    <main className="relative min-h-screen overflow-hidden pb-24">
      <Header taxonomy={taxonomy} />

      {/* Hero Section */}
      <section className="container-shell mt-12">
        <GlassCard className="relative min-h-[360px] overflow-hidden p-0 md:min-h-[420px]">
          {region.image_url ? (
            <Image
              src={region.image_url}
              alt={`Ilustracion de la region ${region.name}`}
              fill
              sizes="100vw"
              className="object-cover"
            />
          ) : (
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 15% 20%, rgba(30, 120, 94, 0.5), transparent 55%), radial-gradient(circle at 80% 15%, rgba(35, 98, 158, 0.45), transparent 50%), linear-gradient(135deg, rgba(12, 18, 27, 0.95), rgba(12, 18, 27, 0.6))",
              }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-br from-ink-900/80 via-ink-900/45 to-ink-900/10" />
          <div className="relative z-10 p-8 text-white md:p-12">
            <Badge className="border-white/30 bg-white/20 text-white">
              Región cultural
            </Badge>
            <h1 className="mt-4 font-display text-4xl text-white md:text-5xl lg:text-6xl">
              {regionInfo.title}
            </h1>
            <p className="mt-4 max-w-3xl text-base text-white/90 md:text-lg">
              {regionInfo.description}
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Badge className="border-white/30 bg-white/20 text-white">
                  {region.myth_count}
                </Badge>
                {region.myth_count === 1 ? "mito" : "mitos"}
              </span>
              <span className="flex items-center gap-2">
                <Badge className="border-white/30 bg-white/20 text-white">
                  {regionCommunities.length}
                </Badge>
                {regionCommunities.length === 1 ? "comunidad" : "comunidades"}
              </span>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* Descripción extendida y características */}
      <section className="container-shell mt-8 grid gap-6 lg:grid-cols-[2fr_1fr]">
        <GlassCard className="p-6 md:p-8">
          <h2 className="font-display text-2xl text-ink-900">Sobre esta región</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-700 md:text-base">
            {regionInfo.longDescription}
          </p>
        </GlassCard>

        {regionInfo.characteristics && regionInfo.characteristics.length > 0 && (
          <GlassCard className="p-6 md:p-8">
            <h3 className="font-display text-xl text-ink-900">Características</h3>
            <ul className="mt-4 space-y-3">
              {regionInfo.characteristics.map((char, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-ink-700">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-jungle-500" />
                  <span>{char}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        )}
      </section>

      {/* Filtros */}
      <section className="container-shell mt-8">
        <GlassCard className="p-6">
          <form
            className="grid gap-4 md:grid-cols-[1.5fr_1fr_1fr_auto]"
            action={`/regiones/${params.slug}`}
            method="get"
          >
            <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-ink-500">
              Buscar en esta región
              <input
                className="input-glass"
                name="q"
                defaultValue={q}
                placeholder="Nombre del mito o palabra clave"
                type="text"
              />
            </label>

            <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-ink-500">
              Comunidad
              <select
                className="input-glass"
                name="community"
                defaultValue={community}
              >
                <option value="">Todas</option>
                {regionCommunities.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-ink-500">
              Categoría
              <input
                className="input-glass"
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

            <div className="flex flex-col justify-end gap-3">
              <button className="rounded-full bg-jungle-600 px-5 py-3 text-sm text-white shadow hover:bg-jungle-700 transition">
                Filtrar
              </button>
              <ButtonLink href={`/regiones/${params.slug}`} variant="outline" size="sm">
                Limpiar
              </ButtonLink>
            </div>
          </form>
        </GlassCard>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-sm text-ink-700">
          <p>
            Mostrando {result.items.length} de {result.total} mitos
          </p>
          <div className="flex items-center gap-2">
            {community ? <Badge>{community}</Badge> : null}
            {tag ? <Badge>{tag}</Badge> : null}
            {q ? <Badge>{q}</Badge> : null}
          </div>
        </div>
      </section>

      {/* Lista de mitos */}
      <section className="container-shell mt-8">
        <div className="grid gap-4 lg:grid-cols-2">
          {result.items.map((myth) => {
            const tags = (myth.tags_raw || "")
              .split(",")
              .map((item) => item.trim())
              .filter(Boolean)
              .slice(0, 4);

            return (
              <Link key={myth.slug} href={`/mitos/${myth.slug}`} className="group">
                <GlassCard className="flex h-full flex-col overflow-hidden p-0 transition hover:-translate-y-1 hover:shadow-lift">
                  {myth.image_url && (
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={myth.image_url}
                        alt={`Ilustracion de ${myth.title}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                        className="object-cover transition duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 via-transparent to-transparent" />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge className="border-jungle-500/30 bg-jungle-500/10 text-jungle-600">
                        {myth.region}
                      </Badge>
                      {myth.community ? (
                        <Badge className="border-river-500/30 bg-river-500/10 text-river-600">
                          {myth.community}
                        </Badge>
                      ) : null}
                    </div>
                    <div>
                      <h3 className="font-display text-2xl text-ink-900 transition group-hover:text-river-600">
                        {myth.title}
                      </h3>
                      <p className="mt-2 text-sm text-ink-700 line-clamp-3">{myth.excerpt}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((item) => (
                        <Badge key={item}>{item}</Badge>
                      ))}
                    </div>
                    <div className="mt-auto flex items-center justify-between text-xs uppercase tracking-[0.3em] text-ink-500">
                      <span>{myth.focus_keyword}</span>
                      <span className="text-river-600 opacity-0 transition group-hover:opacity-100">
                        Leer →
                      </span>
                    </div>
                  </div>
                </GlassCard>
              </Link>
            );
          })}
        </div>

        {/* Paginación */}
        <div className="mt-10">
          <Pagination
            total={result.total}
            limit={result.limit}
            offset={offset}
            pathname={`/regiones/${params.slug}`}
            searchParams={paginationBase}
            limitOptions={[12, 24, 48]}
          />
        </div>

        {/* Botón volver */}
        <div className="mt-10 flex justify-center">
          <ButtonLink href="/regiones" variant="outline">
            Ver todas las regiones
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
