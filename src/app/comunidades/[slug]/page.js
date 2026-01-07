import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import { Badge } from "../../../components/ui/Badge";
import { ButtonLink } from "../../../components/ui/Button";
import { GlassCard } from "../../../components/ui/GlassCard";
import { SectionHeader } from "../../../components/ui/SectionHeader";
import { getTaxonomy, listMyths } from "../../../lib/myths";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Información específica sobre cada comunidad indígena
const COMMUNITY_INFO = {
  "muiscas": {
    title: "Muiscas",
    description: "Pueblo indígena que habitó el altiplano cundiboyacense, conocido por su avanzada organización social y rica mitología.",
    longDescription: "Los Muiscas o Chibchas fueron una de las civilizaciones más importantes de Colombia precolombina. Habitaron el altiplano andino en lo que hoy es Cundinamarca y Boyacá, desarrollando una compleja estructura social y religiosa. Su mitología incluye relatos sobre la creación del mundo, dioses como Chiminigagua, Bachué, Bochica y Chía, y prácticas ceremoniales en lagunas sagradas como Guatavita. Los mitos muiscas explican el origen del sol, la luna, las lagunas y establecen códigos morales y sociales que rigieron su civilización.",
    imagePrompt: "Muisca sacred ceremony at lagoon, golden offerings, Andean mountains, mystical fog"
  },
  "yukuna": {
    title: "Yukuna",
    description: "Pueblo amazónico del grupo lingüístico arawak, con una rica tradición de mitos cosmogónicos y relatos sobre la creación.",
    longDescription: "Los Yukuna habitan la región amazónica colombiana en el departamento del Amazonas. Pertenecen al grupo lingüístico arawak y han preservado una extensa tradición oral que incluye mitos sobre el origen del mundo, la creación de los seres humanos, y las transformaciones de héroes culturales. Su mitología está profundamente conectada con la selva, los ríos y los espíritus que habitan estos espacios. Los relatos yukuna transmiten conocimientos sobre la naturaleza, normas sociales y la relación entre humanos y el mundo sobrenatural.",
    imagePrompt: "Yukuna village in Amazon rainforest, sacred river, tropical mythology, ancestral spirits"
  },
  "wayuu": {
    title: "Wayuu",
    description: "Pueblo indígena de la península de La Guajira, con una cultura matrilineal y rica tradición de relatos morales.",
    longDescription: "Los Wayuu son el pueblo indígena más numeroso de Colombia y Venezuela, habitando la península de La Guajira. Su sociedad matrilineal se refleja en sus mitos, donde figuras femeninas tienen roles centrales. La mitología wayuu incluye relatos sobre Maleiwa (el creador), Pulowi (espíritu femenino de la sequía y el viento) y Juyá (la lluvia). Sus mitos enseñan sobre la importancia de la familia, el respeto a los mayores, y la armonía con el territorio desértico que habitan.",
    imagePrompt: "Wayuu desert landscape, traditional patterns, spiritual figures, La Guajira peninsula"
  },
  "catios": {
    title: "Catíos",
    description: "Grupo indígena del grupo emberá en la región andina, con tradiciones que mezclan elementos de selva y montaña.",
    longDescription: "Los Catíos son parte de la familia lingüística emberá y habitan regiones del occidente colombiano, principalmente en Antioquia y Chocó. Sus mitos reflejan su conexión con entornos de montaña y selva tropical, incluyendo relatos sobre espíritus de la naturaleza, la creación de ríos y montañas, y enseñanzas sobre el equilibrio entre humanos y naturaleza. La tradición oral catía preserva conocimientos sobre plantas medicinales, caza y la relación con el territorio ancestral.",
    imagePrompt: "Catío village in tropical mountains, sacred forest, river spirits, traditional dwellings"
  },
  "tanimuka": {
    title: "Tanimuka",
    description: "Pueblo amazónico conocido por sus elaborados mitos de creación y transformación.",
    longDescription: "Los Tanimuka habitan la región amazónica colombiana en el departamento del Amazonas, cerca del río Apaporis. Su tradición oral es extremadamente rica en relatos cosmogónicos que explican el origen del mundo, los animales, las plantas y las prácticas culturales. Los mitos tanimuka frecuentemente presentan transformaciones entre humanos y animales, viajes entre mundos, y enseñanzas sobre el uso apropiado de los recursos naturales. Sus relatos preservan profundos conocimientos ecológicos sobre la selva amazónica.",
    imagePrompt: "Tanimuka cosmic creation, Amazon river spirits, transformation mythology, pristine rainforest"
  },
  "uitoto": {
    title: "Uitoto",
    description: "Pueblo amazónico con una compleja mitología sobre el origen de la palabra y el conocimiento.",
    longDescription: "Los Uitoto o Huitoto habitan la región amazónica de Colombia y Perú. Su mitología es particularmente compleja y filosófica, centrada en conceptos sobre la palabra, el conocimiento y la creación a través del pensamiento. Los mitos uitoto incluyen elaborados relatos sobre el origen del mundo mediante la palabra divina, la importancia de las ceremonias de mambeadero, y la transmisión de conocimiento ancestral. Su tradición oral enfatiza la relación entre lenguaje, pensamiento y creación del mundo.",
    imagePrompt: "Uitoto ceremonial gathering, sacred word and knowledge, Amazon shamanic tradition, maloca"
  },
  "kogui": {
    title: "Kogui",
    description: "Pueblo de la Sierra Nevada de Santa Marta, guardianes de conocimiento ancestral y equilibrio ecológico.",
    longDescription: "Los Kogui habitan la Sierra Nevada de Santa Marta, considerada por ellos el 'Corazón del Mundo'. Su mitología está profundamente arraigada en la concepción de que la Sierra es el centro del universo y que ellos son sus guardianes. Los mitos kogui hablan sobre la creación del mundo por la Madre Universal, la importancia del equilibrio entre fuerzas opuestas, y el rol de los Mamos (líderes espirituales) como intermediarios entre el mundo material y espiritual. Sus relatos enfatizan la responsabilidad humana en mantener el equilibrio ecológico.",
    imagePrompt: "Kogui people in Sierra Nevada, sacred mountains, Mother Universal, spiritual guardianship"
  },
  "nasa": {
    title: "Nasa",
    description: "Pueblo indígena del Cauca y Huila, con una tradición de resistencia y rica mitología andino-amazónica.",
    longDescription: "Los Nasa, también conocidos como Páez, habitan principalmente el departamento del Cauca y el sur del Huila. Su mitología combina elementos andinos y amazónicos, reflejando su ubicación geográfica de transición. Los mitos nasa incluyen relatos sobre héroes culturales, el origen de sus territorios ancestrales, y luchas contra fuerzas opresoras. Su tradición oral ha sido central en la preservación de su identidad cultural a pesar de siglos de colonización, y sus mitos transmiten valores de resistencia, comunidad y armonía con la naturaleza.",
    imagePrompt: "Nasa people in Cauca mountains, resistance symbols, cultural heroes, sacred territories"
  },
  "desano": {
    title: "Desano",
    description: "Pueblo amazónico del Vaupés con elaborados mitos sobre anacondas ancestrales y canoas de transformación.",
    longDescription: "Los Desano habitan la región del Vaupés en la Amazonía colombiana. Su mitología es particularmente rica en simbolismo asociado con anacondas ancestrales que transportaron a los primeros humanos por los ríos amazónicos. Los mitos desano incluyen relatos sobre canoas de transformación, casas ceremoniales (malocas) y la organización del cosmos en múltiples niveles. Sus narraciones preservan conocimientos sobre parentesco, territorialidad y la relación sagrada con los ríos y la selva.",
    imagePrompt: "Desano anaconda mythology, sacred canoe, Vaupés rivers, Amazon cosmic order"
  },
  "andoque": {
    title: "Andoque",
    description: "Pueblo amazónico con tradiciones sobre la creación y el manejo de recursos naturales.",
    longDescription: "Los Andoque habitan la región amazónica colombiana, principalmente en el departamento del Caquetá. Su tradición oral incluye mitos sobre la creación del mundo, el origen de los cultivos y animales, y prácticas ceremoniales relacionadas con la yuca y otros alimentos fundamentales. Los relatos andoque transmiten profundos conocimientos sobre agricultura de selva, manejo sostenible de recursos y la importancia de mantener relaciones armónicas con los espíritus de la naturaleza.",
    imagePrompt: "Andoque village in Caquetá, sacred yuca cultivation, forest spirits, Amazon traditions"
  },
  "barasana": {
    title: "Barasana",
    description: "Pueblo del Vaupés con mitos sobre instrumentos sagrados y ceremonias de yurupary.",
    longDescription: "Los Barasana habitan la región del Vaupés en la Amazonía colombiana. Su mitología está fuertemente vinculada a ceremonias de yurupary (instrumentos sagrados) y prácticas rituales masculinas. Los mitos barasana incluyen relatos sobre el origen de estos instrumentos sagrados, la organización social basada en clanes, y transformaciones míticas que establecieron el orden cultural. Su tradición oral preserva conocimientos sobre ceremonias de iniciación, uso de plantas sagradas y la estructura del cosmos.",
    imagePrompt: "Barasana sacred ceremony, yurupary instruments, maloca rituals, Vaupés mythology"
  },
  "sikuani": {
    title: "Sikuani",
    description: "Pueblo de los Llanos Orientales con mitos sobre héroes culturales y la transformación del paisaje.",
    longDescription: "Los Sikuani habitan los Llanos Orientales de Colombia y Venezuela. Su mitología incluye relatos sobre Kuwai y otros héroes culturales que transformaron el paisaje llanero, crearon ríos y establecieron prácticas culturales. Los mitos sikuani explican el origen de animales de la sabana, la importancia de las ceremonias de rezo, y las relaciones entre humanos y espíritus de la naturaleza en el ecosistema llanero. Su tradición oral transmite conocimientos sobre navegación, pesca y vida en las sabanas inundables.",
    imagePrompt: "Sikuani plains landscape, cultural heroes, savanna spirits, Orinoco region"
  },
  "macuna": {
    title: "Macuna",
    description: "Pueblo amazónico del Vaupés con tradiciones de pensamiento sagrado y creación.",
    longDescription: "Los Macuna habitan la región del Vaupés en la Amazonía colombiana. Su mitología comparte elementos con otros pueblos tukano, incluyendo relatos sobre anacondas ancestrales, la creación del mundo mediante el pensamiento, y la organización del cosmos. Los mitos macuna preservan conocimientos sobre parentesco, territorialidad y ceremonias sagradas que mantienen el equilibrio entre el mundo humano y espiritual.",
    imagePrompt: "Macuna sacred thought, Vaupés cosmology, ancestral anaconda, Amazon creation"
  },
  "guambianos": {
    title: "Guambianos",
    description: "Pueblo del Cauca con profundas tradiciones sobre el agua y la tierra.",
    longDescription: "Los Guambianos, también conocidos como Misak, habitan el departamento del Cauca en la región andina. Su mitología está profundamente conectada con el agua, considerada sagrada y fundamental para la vida. Los mitos guambianos incluyen relatos sobre el origen de lagunas, ríos y la importancia de mantener el equilibrio hídrico. Su tradición oral enfatiza la conexión espiritual con el territorio ancestral, particularmente con las altas montañas y páramos que habitan.",
    imagePrompt: "Guambianos water ceremony, Cauca páramo, sacred lagoons, Misak traditions"
  },
  "tikunas": {
    title: "Tikunas",
    description: "Pueblo amazónico de la triple frontera con elaborados mitos de creación y transformación.",
    longDescription: "Los Tikunas habitan la región amazónica en la frontera entre Colombia, Brasil y Perú. Su mitología es extremadamente rica e incluye elaborados ciclos narrativos sobre la creación del mundo, el origen de los clanes, y transformaciones míticas. Los mitos tikuna presentan complejas cosmologías con múltiples niveles del universo, relatos sobre héroes gemelos, y enseñanzas sobre organización social. Su tradición oral es una de las más extensas de la Amazonía.",
    imagePrompt: "Tikuna creation myths, Amazon triple frontier, clan origins, cosmic levels"
  },
  "nukak": {
    title: "Nukak",
    description: "Pueblo nómada amazónico con tradiciones sobre movilidad y conocimiento de la selva.",
    longDescription: "Los Nukak son un pueblo de tradición nómada que habita la región amazónica entre el Guaviare y el Vaupés. Su mitología refleja su estilo de vida móvil y profundo conocimiento de la selva. Los mitos nukak incluyen relatos sobre los caminos ancestrales, la relación con espíritus de animales y plantas, y prácticas de caza y recolección sostenibles. Su tradición oral preserva un extraordinario conocimiento ecológico sobre la selva amazónica.",
    imagePrompt: "Nukak nomadic life, Amazon forest paths, hunting spirits, traditional mobility"
  },
  "u-wa": {
    title: "U'wa",
    description: "Pueblo de la Sierra Nevada del Cocuy con profunda conexión espiritual con el petróleo y el equilibrio terrestre.",
    longDescription: "Los U'wa habitan la Sierra Nevada del Cocuy en la región andina. Su mitología enfatiza la profunda responsabilidad de mantener el equilibrio de la tierra. Los U'wa consideran el petróleo como la 'sangre de la tierra' y tienen mitos que advierten sobre las consecuencias de su extracción. Sus relatos incluyen enseñanzas sobre el origen del mundo, la importancia de las lagunas sagradas en los páramos, y el rol de los humanos como cuidadores del planeta.",
    imagePrompt: "U'wa Sierra Nevada del Cocuy, sacred petroleum, earth balance, páramo spirituality"
  },
  "kuiva": {
    title: "Kuiva",
    description: "Pueblo de los Llanos Orientales con tradiciones sobre la vida en las sabanas.",
    longDescription: "Los Kuiva habitan los Llanos Orientales de Colombia. Su mitología refleja la vida en las extensas sabanas llaneras e incluye relatos sobre el origen de animales característicos de la región, la importancia de los ríos y caños, y ceremonias relacionadas con los ciclos naturales de lluvia y sequía. Los mitos kuiva transmiten conocimientos sobre navegación por las sabanas inundables y la relación armónica con el ecosistema llanero.",
    imagePrompt: "Kuiva savanna life, llanos plains, river spirits, seasonal cycles"
  },
  "kurripaco": {
    title: "Kurripaco",
    description: "Pueblo arawak de la Orinoquía con tradiciones sobre Kuwai y transformaciones culturales.",
    longDescription: "Los Kurripaco pertenecen al grupo lingüístico arawak y habitan la región de la Orinoquía colombiana y venezolana. Su mitología incluye elaborados relatos sobre Kuwai, un héroe cultural transformador, y el origen de ceremonias sagradas. Los mitos kurripaco explican la creación de instrumentos musicales rituales, prácticas ceremoniales y la organización social. Su tradición oral preserva conocimientos sobre el manejo de recursos de ríos y selvas de galería.",
    imagePrompt: "Kurripaco Kuwai mythology, Orinoco region, sacred instruments, cultural transformation"
  },
  "yanacona": {
    title: "Yanacona",
    description: "Pueblo del Macizo Colombiano con tradiciones de resistencia y reconexión cultural.",
    longDescription: "Los Yanacona habitan el Macizo Colombiano en el departamento del Cauca. Su historia incluye procesos de pérdida y recuperación cultural, y sus mitos reflejan esta experiencia de resistencia. La tradición oral yanacona incluye relatos sobre el origen de su territorio, la importancia de las montañas y páramos, y narrativas que han permitido la reconexión con prácticas ancestrales. Sus mitos enfatizan la resiliencia y la importancia de mantener la identidad cultural.",
    imagePrompt: "Yanacona Macizo Colombiano, cultural resistance, mountain spirituality, ancestral recovery"
  },
  "tucano": {
    title: "Tucano",
    description: "Pueblo del Vaupés con complejos mitos sobre anacondas ancestrales y organización social.",
    longDescription: "Los Tucano habitan la región del Vaupés en la Amazonía colombiana y brasileña. Su mitología es extremadamente elaborada e incluye ciclos narrativos sobre anacondas ancestrales que transportaron a los primeros humanos por los ríos amazónicos hasta sus territorios actuales. Los mitos tucano explican el origen de los clanes, la organización social basada en descendencia patrilineal, ceremonias de maloca y el uso de plantas sagradas. Su tradición oral preserva profundos conocimientos sobre territorialidad, parentesco y cosmología amazónica.",
    imagePrompt: "Tucano anaconda ancestry, Vaupés rivers, maloca ceremonies, clan origins"
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

export function generateMetadata({ params }) {
  const taxonomy = getTaxonomy();
  const community = taxonomy.communities.find(c => c.slug === params.slug);

  if (!community) {
    return {
      title: "Comunidad no encontrada | Mitos de Colombia",
      description: "La comunidad solicitada no está disponible.",
    };
  }

  const communityInfo = COMMUNITY_INFO[params.slug] || {};
  const title = communityInfo.title || community.name;
  const description = communityInfo.description || `Explora los mitos del pueblo ${community.name}`;

  return {
    title: `Mitos ${title} | Mitos de Colombia`,
    description,
    keywords: [community.name, "pueblo indígena", "Colombia", "mitología", "tradición oral"],
  };
}

export default function CommunityDetailPage({ params, searchParams }) {
  const taxonomy = getTaxonomy();
  const community = taxonomy.communities.find(c => c.slug === params.slug);

  if (!community) {
    notFound();
  }

  const communityInfo = COMMUNITY_INFO[params.slug] || {
    title: community.name,
    description: `Pueblo indígena de la región ${community.region}.`,
    longDescription: `El pueblo ${community.name} es parte del patrimonio cultural de Colombia, preservando tradiciones ancestrales en la región ${community.region}. Sus mitos transmiten conocimientos, valores y cosmovisiones que han sido heredados de generación en generación.`,
    imagePrompt: "Colombian indigenous community, traditional culture, ancestral wisdom"
  };

  const q = getParamValue(searchParams.q);
  const tag = getParamValue(searchParams.tag);
  const limit = Number.parseInt(getParamValue(searchParams.limit) || "24", 10);
  const offset = Number.parseInt(getParamValue(searchParams.offset) || "0", 10);

  // Filtrar mitos de esta comunidad
  const result = listMyths({
    community: community.slug,
    tag,
    q,
    limit,
    offset
  });

  // Tags para filtrar (excluir regiones y "ninguno")
  const regionNames = taxonomy.regions.map(r => r.name.toLowerCase());
  const tagOptions = taxonomy.tags
    .filter(t =>
      !regionNames.includes(t.name.toLowerCase()) &&
      t.name.toLowerCase() !== 'ninguno'
    )
    .slice(0, 40);

  const hasPrev = offset > 0;
  const hasNext = offset + result.limit < result.total;

  const paginationBase = {
    q,
    tag,
    limit: result.limit,
  };

  return (
    <main className="relative min-h-screen overflow-hidden pb-24">
      <Header />

      {/* Hero Section */}
      <section className="container-shell mt-12">
        <GlassCard className="relative overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-br from-jungle-500/20 via-river-500/20 to-ember-400/20"
          />
          <div className="relative p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="border-river-500/30 bg-river-500/10 text-river-600">
                Pueblo indígena
              </Badge>
              <Badge className="border-jungle-500/30 bg-jungle-500/10 text-jungle-600">
                {community.region}
              </Badge>
            </div>
            <h1 className="mt-4 font-display text-4xl text-ink-900 md:text-5xl lg:text-6xl">
              {communityInfo.title}
            </h1>
            <p className="mt-4 max-w-3xl text-base text-ink-700 md:text-lg">
              {communityInfo.description}
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-ink-500">
              <span className="flex items-center gap-2">
                <Badge className="border-jungle-500/30 bg-jungle-500/10 text-jungle-600">
                  {community.myth_count}
                </Badge>
                {community.myth_count === 1 ? 'mito' : 'mitos'}
              </span>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* Descripción extendida */}
      <section className="container-shell mt-8">
        <GlassCard className="p-6 md:p-8">
          <p className="text-sm leading-relaxed text-ink-700 md:text-base">
            {communityInfo.longDescription}
          </p>
        </GlassCard>
      </section>

      {/* Filtros */}
      <section className="container-shell mt-8">
        <GlassCard className="p-6">
          <form
            className="grid gap-4 md:grid-cols-[2fr_1.5fr_auto]"
            action={`/comunidades/${params.slug}`}
            method="get"
          >
            <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-ink-500">
              Buscar en esta comunidad
              <input
                className="input-glass"
                name="q"
                defaultValue={q}
                placeholder="Nombre del mito o palabra clave"
                type="text"
              />
            </label>

            <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-ink-500">
              Categoría
              <input
                className="input-glass"
                name="tag"
                list="tag-options"
                defaultValue={tag}
                placeholder="Ej: Etiológico, Castigo"
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
              <ButtonLink href={`/comunidades/${params.slug}`} variant="outline" size="sm">
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
            {q ? <Badge>{q}</Badge> : null}
            {tag ? <Badge>{tag}</Badge> : null}
          </div>
        </div>
      </section>

      {/* Lista de mitos */}
      <section className="container-shell mt-8">
        <div className="grid gap-4 lg:grid-cols-2">
          {result.items.map((myth) => {
            const tags = myth.tags_raw
              .split(",")
              .map((item) => item.trim())
              .filter(Boolean)
              .slice(0, 4);

            return (
              <GlassCard
                key={myth.slug}
                className="flex flex-col gap-4 p-6 transition hover:-translate-y-1 hover:shadow-lift"
              >
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
                  <h3 className="font-display text-2xl text-ink-900">
                    {myth.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-700">{myth.excerpt}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tags.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-ink-500">
                  <span>{myth.focus_keyword}</span>
                  <ButtonLink href={`/mitos/${myth.slug}`} size="sm">
                    Leer mito
                  </ButtonLink>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Paginación */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {hasPrev ? (
            <ButtonLink
              href={`/comunidades/${params.slug}?${buildQuery(paginationBase, {
                offset: Math.max(offset - result.limit, 0),
              })}`}
              variant="outline"
            >
              Anterior
            </ButtonLink>
          ) : null}
          {hasNext ? (
            <ButtonLink
              href={`/comunidades/${params.slug}?${buildQuery(paginationBase, {
                offset: offset + result.limit,
              })}`}
            >
              Siguiente
            </ButtonLink>
          ) : null}
        </div>

        {/* Botón volver */}
        <div className="mt-10 flex justify-center">
          <ButtonLink href="/mitos" variant="outline">
            Ver archivo completo
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
