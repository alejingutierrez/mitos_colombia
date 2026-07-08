import { notFound } from "next/navigation";
import { filterAllowedCommunities } from "../../../lib/communityFilters";
import { getTaxonomy, listMyths, listMythLinksByTaxon } from "../../../lib/myths";
import { buildSeoMetadata, getSeoEntry } from "../../../lib/seo";
import { resolveRouteParams } from "../../../lib/next-route-props";
import { BreadcrumbJsonLd, CollectionPageJsonLd } from "../../../components/StructuredData";
import { TaxonomyDetailTemplate } from "../../../components/templates";
import { FilterableArchive } from "../../../components/organisms";

export const runtime = "nodejs";
export const revalidate = 300;

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "")
)
  .trim()
  .replace(/\/+$/, "");

const RIVER_REGIONS = ["caribe", "pacifico"];
const REGION_MOTIFS = {
  amazonas: "hoja",
  andina: "montana",
  caribe: "agua",
  pacifico: "delfin",
  orinoquia: "luna",
  varios: "condor",
  insular: "sol",
};

export async function generateStaticParams() {
  const taxonomy = await getTaxonomy();
  return (taxonomy.regions || [])
    .filter((r) => r.slug)
    .map((region) => ({ slug: region.slug }));
}

// Información específica sobre cada región (contenido editorial / SEO)
const REGION_INFO = {
  amazonas: {
    title: "Región Amazónica",
    description:
      "La selva tropical más grande del mundo, hogar de pueblos indígenas con ricas tradiciones orales sobre la creación, transformación y equilibrio natural.",
    longDescription:
      "La región amazónica colombiana es un vasto territorio de selva tropical que alberga una extraordinaria diversidad de pueblos indígenas, cada uno con complejas tradiciones mitológicas. Los Yukuna, Tanimuka, Uitoto, Desano, Barasana, Andoque y muchos otros pueblos han preservado durante milenios relatos sobre el origen del mundo, la creación de los seres humanos mediante anacondas ancestrales, y las transformaciones míticas que establecieron el orden cultural. La mitología amazónica está profundamente conectada con la selva, los ríos, y los espíritus que habitan estos espacios. Temas recurrentes incluyen viajes entre mundos, ceremonias de maloca, el uso sagrado de plantas como la coca y el tabaco, y enseñanzas sobre el manejo sostenible de recursos. Los mitos amazónicos transmiten profundos conocimientos ecológicos sobre uno de los ecosistemas más complejos del planeta.",
    characteristics: [
      "Mitos cosmogónicos elaborados",
      "Anacondas ancestrales como símbolos de creación",
      "Ceremonias de maloca y yurupary",
      "Transformaciones entre humanos y animales",
      "Conocimiento profundo de plantas sagradas",
    ],
  },
  andina: {
    title: "Región Andina",
    description:
      "Corazón cultural de Colombia, donde la civilización Muisca y otras culturas desarrollaron complejas mitologías sobre lagunas sagradas, dioses solares y héroes culturales.",
    longDescription:
      "La región andina colombiana, dominada por las cordilleras de los Andes, ha sido el hogar de importantes civilizaciones como los Muiscas, Catíos, U'wa, Guambianos y Nasa. Esta región presenta una rica fusión de mitologías indígenas prehispánicas y elementos introducidos durante la colonia, creando un sincretismo único. Los Muiscas desarrollaron una compleja religión centrada en Chiminigagua (creador), Bachué (madre de la humanidad), Bochica (héroe civilizador) y Chía (diosa lunar). Las lagunas de alta montaña, como Guatavita e Iguaque, son consideradas sagradas y escenario de importantes mitos cosmogónicos. La mitología andina incluye relatos sobre el origen del sol, la luna, el maíz y otras plantas cultivadas, así como enseñanzas sobre organización social, agricultura en terrazas y el manejo del agua en ecosistemas de montaña. El mestizaje cultural ha dado origen a nuevas narrativas que combinan elementos católicos con tradiciones indígenas.",
    characteristics: [
      "Mitología muisca sobre lagunas sagradas",
      "Sincretismo entre tradiciones indígenas y católicas",
      "Héroes culturales civilizadores",
      "Agricultura y conocimiento de montaña",
      "Leyendas urbanas y rurales mestizas",
    ],
  },
  caribe: {
    title: "Región Caribe",
    description:
      "Costa tropical donde confluyen tradiciones indígenas, africanas y europeas, creando un rico universo mitológico de espíritus del agua, resistencia y transformación.",
    longDescription:
      "La región Caribe colombiana, que se extiende por la costa del mar Caribe y las estribaciones de la Sierra Nevada de Santa Marta, es un territorio de extraordinaria diversidad cultural. Los pueblos Wayuu, Kogui, Arhuaco, Wiwa y Kankuamo han preservado tradiciones ancestrales, mientras que comunidades afrodescendientes y mestizas han desarrollado sus propias narrativas. Los Kogui de la Sierra Nevada consideran este territorio el 'Corazón del Mundo' y tienen elaborados mitos sobre la Madre Universal y el equilibrio ecológico. Los Wayuu, en la península de La Guajira, tienen una rica tradición oral con relatos sobre Maleiwa, Pulowi y Juyá. La región también es rica en leyendas mestizas sobre espíritus del agua (la Llorona, el Hombre Caimán), apariciones y transformaciones. El sincretismo cultural ha producido festividades y narrativas únicas que combinan elementos indígenas, africanos y católicos.",
    characteristics: [
      "Sierra Nevada como centro sagrado",
      "Cultura matrilineal Wayuu",
      "Sincretismo afroindígena",
      "Espíritus del agua y transformaciones",
      "Resistencia y preservación cultural",
    ],
  },
  orinoquia: {
    title: "Región Orinoquía",
    description:
      "Los vastos llanos orientales, donde pueblos como los Sikuani preservan tradiciones sobre héroes culturales, espíritus de la sabana y el manejo de ecosistemas inundables.",
    longDescription:
      "La Orinoquía colombiana, conocida como los Llanos Orientales, es una extensa región de sabanas tropicales surcadas por ríos que se inundan estacionalmente. Pueblos indígenas como los Sikuani, Kuiva, Kurripaco y otros han desarrollado mitologías adaptadas a este ecosistema único. Los mitos llaneros incluyen relatos sobre Kuwai y otros héroes culturales que transformaron el paisaje, crearon los ríos y establecieron prácticas culturales. Las narrativas explican el origen de animales característicos de la sabana como el chigüiro, el venado y diversas aves. La mitología de la Orinoquía también incluye conocimientos sobre navegación de ríos y caños, manejo de ganado cimarrón, y la importancia de las ceremonias de rezo. Los pueblos llaneros han desarrollado profundos conocimientos sobre los ciclos de inundación y sequía que caracterizan este ecosistema.",
    characteristics: [
      "Héroes culturales transformadores",
      "Adaptación a sabanas inundables",
      "Conocimiento de ciclos naturales",
      "Espíritus de animales de la sabana",
      "Ceremonias de rezo y curación",
    ],
  },
  pacifico: {
    title: "Región Pacífico",
    description:
      "Selva tropical húmeda y costa pacífica, territorio de pueblos indígenas como los Nasa y comunidades afrodescendientes con ricas tradiciones sobre agua, selva y resistencia.",
    longDescription:
      "La región Pacífico colombiana, caracterizada por su alta pluviosidad y densa selva tropical, es hogar de pueblos indígenas como los Nasa (Páez), Emberá y Awá, así como de numerosas comunidades afrodescendientes que llegaron durante el período colonial. Los Nasa tienen una rica tradición mitológica que combina elementos andinos y de selva tropical, con relatos sobre héroes culturales, la resistencia contra la opresión, y la importancia de mantener el equilibrio con la naturaleza. Las comunidades afrodescendientes del Pacífico han desarrollado narrativas propias que combinan elementos africanos, indígenas y católicos, incluyendo creencias sobre espíritus del monte, la tunda, el riviel y otras entidades sobrenaturales. La región tiene una fuerte tradición oral transmitida a través de cantos, décimas y arrullos. Los mitos del Pacífico frecuentemente enfatizan temas de libertad, resistencia cultural y la profunda conexión espiritual con la selva y el mar.",
    characteristics: [
      "Sincretismo afroindígena único",
      "Mitos de resistencia y libertad",
      "Espíritus de la selva húmeda",
      "Tradición oral en décimas y cantos",
      "Conexión con mar y ríos",
    ],
  },
  varios: {
    title: "Tradiciones Transregionales",
    description:
      "Mitos que trascienden fronteras regionales o representan tradiciones compartidas por múltiples pueblos y territorios de Colombia.",
    longDescription:
      "La categoría 'Varios' agrupa mitos que no se limitan a una región específica, sino que son compartidos por múltiples pueblos, han viajado entre regiones, o representan temas universales de la mitología colombiana. Estos relatos pueden incluir narrativas que se encuentran en diferentes versiones a lo largo del país, mitos sobre fenómenos naturales que ocurren en todo el territorio, o enseñanzas morales que trascienden fronteras culturales. También incluye mitos mestizos que han circulado ampliamente, adaptándose a diferentes contextos regionales. Esta categoría refleja la interconexión entre las diversas tradiciones mitológicas colombianas y muestra cómo ciertos temas y motivos narrativos aparecen recurrentemente en diferentes pueblos y regiones, sugiriendo tanto intercambios culturales históricos como preocupaciones humanas universales sobre el origen del mundo, la moral y la relación con la naturaleza.",
    characteristics: [
      "Temas mitológicos universales",
      "Narrativas compartidas entre regiones",
      "Sincretismo cultural amplio",
      "Mitos sobre fenómenos naturales generales",
      "Enseñanzas morales transculturales",
    ],
  },
};

export async function generateMetadata({ params }) {
  const { slug } = await resolveRouteParams(params);
  const taxonomy = await getTaxonomy();
  const region = taxonomy.regions.find((r) => r.slug === slug);

  if (!region) {
    return {
      title: "Región no encontrada | Mitos de Colombia",
      description: "La región solicitada no está disponible.",
    };
  }

  const regionInfo = REGION_INFO[slug] || {};
  const title = regionInfo.title || region.name;
  const description =
    regionInfo.description || `Explora los mitos de la región ${region.name}`;
  const seo = await getSeoEntry("region", slug);

  return buildSeoMetadata({
    fallback: {
      title: `${title} | Mitos de Colombia`,
      description,
      keywords: [region.name, "región cultural", "Colombia", "mitología", "tradición oral"],
    },
    seo,
    canonicalPath: `/regiones/${slug}`,
  });
}

export default async function RegionDetailPage({ params }) {
  const { slug } = await resolveRouteParams(params);
  const taxonomy = await getTaxonomy();
  const region = taxonomy.regions.find((r) => r.slug === slug);

  if (!region) {
    notFound();
  }

  const regionInfo = REGION_INFO[slug] || {
    title: region.name,
    description: "Región cultural de Colombia con rica tradición mitológica.",
    longDescription: `La región ${region.name} es una de las áreas culturales de Colombia, hogar de diversos pueblos y tradiciones que han preservado mitos ancestrales sobre el origen del mundo, la naturaleza y la sociedad.`,
    characteristics: [],
  };

  const accent = RIVER_REGIONS.includes(slug) ? "river" : "jungle";
  const motif = REGION_MOTIFS[slug] || "hoja";

  // Muestra para exploración interactiva (filtrable en cliente, SSR = rastreable).
  const result = await listMyths({ region: region.slug, limit: 48, offset: 0 });
  const exploreMyths = (result?.items || []).map((m) => ({
    slug: m.slug,
    title: m.title,
    excerpt: m.excerpt,
    region: m.region,
    community: m.community,
    imageUrl: m.image_url,
  }));

  // Comunidades de esta región → facetas de filtro.
  const regionCommunities = filterAllowedCommunities(taxonomy.communities).filter(
    (c) => c.region_slug === region.slug
  );
  const communityOptions = regionCommunities
    .map((c) => ({ value: c.name, label: c.name }))
    .filter((o) => exploreMyths.some((m) => m.community === o.value));
  const filters = communityOptions.length
    ? [{ key: "community", label: "Comunidad", options: communityOptions }]
    : [];

  // Índice completo, rastreable, de TODOS los mitos de la región (SEO).
  const allMythLinks = await listMythLinksByTaxon("region", region.slug);
  const collectionItems = allMythLinks.slice(0, 30).map((m) => ({
    url: `${SITE_URL}/mitos/${m.slug}`,
    name: m.title,
  }));

  return (
    <>
      {SITE_URL && (
        <>
          <BreadcrumbJsonLd
            items={[
              { name: "Inicio", url: `${SITE_URL}/` },
              { name: "Regiones", url: `${SITE_URL}/regiones` },
              { name: region.name, url: `${SITE_URL}/regiones/${region.slug}` },
            ]}
          />
          <CollectionPageJsonLd
            name={`Mitos de la región ${region.name}`}
            description={regionInfo.description}
            url={`${SITE_URL}/regiones/${region.slug}`}
            items={collectionItems}
          />
        </>
      )}
      <TaxonomyDetailTemplate
        taxonomy={{
          name: regionInfo.title || region.name,
          description: regionInfo.description,
          imageUrl: region.image_url,
          motif,
          count: region.myth_count,
          kind: "Región cultural",
        }}
        accent={accent}
        breadcrumb={[
          { label: "Regiones", href: "/regiones" },
          { label: region.name },
        ]}
        intro={regionInfo.longDescription}
        characteristics={regionInfo.characteristics}
        filterable={<FilterableArchive myths={exploreMyths} filters={filters} />}
        mythIndex={allMythLinks}
        indexTitle={`Todos los mitos de la región ${region.name}`}
      />
    </>
  );
}
