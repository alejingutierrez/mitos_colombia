import { notFound } from "next/navigation";
import { filterAllowedCommunities, MIN_COMMUNITY_MYTHS } from "../../../lib/communityFilters";
import { getTaxonomy, listMyths, listMythLinksByTaxon } from "../../../lib/myths";
import { buildSeoMetadata, getSeoEntry } from "../../../lib/seo";
import { resolveRouteParams } from "../../../lib/next-route-props";
import { BreadcrumbJsonLd, CollectionPageJsonLd } from "../../../components/StructuredData";
import { TaxonomyDetailTemplate } from "../../../components/templates";
import { FilterableArchive } from "../../../components/organisms";
import { nasaCommunityPage } from "../../../../editorial/nasa/community.mjs";
import { emberaCommunityPage } from "../../../../editorial/embera/community.mjs";
import { chamiCommunityPage } from "../../../../editorial/chami/community.mjs";
import { katioCommunityPage } from "../../../../editorial/katio/community.mjs";
import { wounaanCommunityPage } from "../../../../editorial/wounaan/community.mjs";
import { eperaraCommunityPage } from "../../../../editorial/eperara/community.mjs";
import { awaCommunityPage } from "../../../../editorial/awa/community.mjs";
import { pananCommunityPage } from "../../../../editorial/panan/community.mjs";
import { misakCommunityPage } from "../../../../editorial/misak/community.mjs";
import { bariCommunityPage } from "../../../../editorial/bari/community.mjs";
import { uwaCommunityPage } from "../../../../editorial/uwa/community.mjs";
import { ansermasCommunityPage } from "../../../../editorial/ansermas/community.mjs";
import { cuycuyesCommunityPage } from "../../../../editorial/cuycuyes/community.mjs";
import { pirsaCommunityPage } from "../../../../editorial/pirsa/community.mjs";
import { quimbayaCommunityPage } from "../../../../editorial/quimbaya/community.mjs";
import { umbraCommunityPage } from "../../../../editorial/umbra/community.mjs";
import { chimilaCommunityPage } from "../../../../editorial/chimila/community.mjs";
import { koguiCommunityPage } from "../../../../editorial/kogui/community.mjs";

export const runtime = "nodejs";
export const revalidate = 300;

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "")
)
  .trim()
  .replace(/\/+$/, "");

export async function generateStaticParams() {
  const taxonomy = await getTaxonomy();
  return filterAllowedCommunities(taxonomy.communities, MIN_COMMUNITY_MYTHS)
    .map((community) => ({ slug: community.slug }));
}

// Información específica sobre cada comunidad indígena
const COMMUNITY_INFO = {
  "muiscas": {
    title: "Muiscas",
    description: "Pueblo indígena del altiplano cundiboyacense, conocido por su avanzada civilización, ceremonias en lagunas sagradas y la leyenda de El Dorado.",
    longDescription: "Los Muiscas o Chibchas fueron una de las civilizaciones más avanzadas de Colombia precolombina, habitantes del altiplano andino en lo que hoy es Cundinamarca y Boyacá en la región Andina. Su mitología es extraordinariamente rica e incluye relatos cosmogónicos sobre Chiminigagua, el ser supremo creador de la luz, y Bachué, la madre primordial que emergió de la laguna de Iguaque con un niño que luego se convirtió en su esposo, poblando la tierra de humanos. Bochica, el anciano sabio y héroe civilizador, enseñó a los chibchas a cultivar, tejer y organizarse socialmente, salvando su tierra de inundaciones y transformando oro en maíz para alimentar al pueblo. Los mitos muiscas narran el origen divino de Goranchacha, hijo del sol que se manifestó a través de una doncella, y el nacimiento del sol y la luna a través de los caciques que trajeron luz al mundo. La laguna de Guatavita fue escenario de ceremonias de ofrendas de oro que dieron origen a la leyenda de El Dorado, rituales que reflejaban la profunda conexión espiritual entre los Muiscas y sus lugares sagrados. Su tradición oral estableció códigos morales y sociales que rigieron una de las sociedades más complejas de los Andes colombianos.",
    imagePrompt: "Muisca golden ceremony at Guatavita lagoon, Bochica civilizer, Andean mountains, sacred offerings, El Dorado ritual"
  },
  "yukuna": {
    title: "Yukuna",
    description: "Pueblo amazónico del grupo lingüístico arawak, con una rica tradición de mitos cosmogónicos y relatos sobre la creación.",
    longDescription: "Los Yukuna habitan la región amazónica colombiana en el departamento del Amazonas. Pertenecen al grupo lingüístico arawak y han preservado una extensa tradición oral que incluye mitos sobre el origen del mundo, la creación de los seres humanos, y las transformaciones de héroes culturales. Su mitología está profundamente conectada con la selva, los ríos y los espíritus que habitan estos espacios. Los relatos yukuna transmiten conocimientos sobre la naturaleza, normas sociales y la relación entre humanos y el mundo sobrenatural.",
    imagePrompt: "Yukuna village in Amazon rainforest, sacred river, tropical mythology, ancestral spirits"
  },
  "wayuu": {
    title: "Wayúu",
    description: "Pueblo indígena de La Guajira, con cultura matrilineal y rica tradición oral sobre el viaje entre mundos, espíritus ancestrales y el equilibrio cósmico.",
    longDescription: "Los Wayúu son el pueblo indígena más numeroso de Colombia y Venezuela, habitantes ancestrales de la península de La Guajira en la región Caribe. Su sociedad matrilineal se refleja profundamente en su mitología, donde figuras femeninas como Pulowi (espíritu de la sequía y el viento) ocupan roles centrales. Los mitos wayúu narran el origen del fuego a través de un joven audaz que lo robó de los dioses, desatando un ciclo de castigos y transformaciones que definió la relación de la humanidad con este elemento sagrado. Maleiwa (Mareigua), el dios creador, estableció el orden del cosmos y las normas que rigen la vida wayúu. El relato de Ulépala explora temas de amor, lealtad y el tránsito entre el mundo de los vivos y los muertos, mientras que los dominios de Juyá (la lluvia) representan una rica tradición sobre el viaje de autodescubrimiento y supervivencia. Los mitos wayúu sobre el viaje al más allá revelan complejas narrativas sobre la interacción con seres sobrenaturales y la continuidad de la existencia después de la muerte. Su tradición oral enseña sobre la importancia del clan familiar, el respeto a los mayores, el sistema de justicia basado en compensación, y la armonía necesaria con el territorio desértico que habitan.",
    imagePrompt: "Wayuu matrilineal society in La Guajira desert, Pulowi and Juyá spirits, traditional patterns, journey between worlds"
  },
  "catios": {
    title: "Catíos",
    description: "Grupo indígena del grupo emberá en la región andina, con tradiciones que mezclan elementos de selva y montaña.",
    longDescription: "Los Catíos son parte de la familia lingüística emberá y habitan regiones del occidente colombiano, principalmente en Antioquia y Chocó. Sus mitos reflejan su conexión con entornos de montaña y selva tropical, incluyendo relatos sobre espíritus de la naturaleza, la creación de ríos y montañas, y enseñanzas sobre el equilibrio entre humanos y naturaleza. La tradición oral catía preserva conocimientos sobre plantas medicinales, caza y la relación con el territorio ancestral.",
    imagePrompt: "Catío village in tropical mountains, sacred forest, river spirits, traditional dwellings"
  },
  "katios": {
    ...katioCommunityPage,
  },
  "chami": {
    ...chamiCommunityPage,
  },
  "embera": {
    ...emberaCommunityPage,
  },
  "wounaan": {
    ...wounaanCommunityPage,
  },
  "eperara-siapidara": {
    ...eperaraCommunityPage,
  },
  "awa": {
    ...awaCommunityPage,
  },
  "chimila": {
    ...chimilaCommunityPage,
  },
  "pananes": {
    ...pananCommunityPage,
  },
  "misak-guambianos": {
    ...misakCommunityPage,
  },
  "motilon-bari": {
    ...bariCommunityPage,
  },
  "u-wa": {
    ...uwaCommunityPage,
  },
  "ansermas": {
    ...ansermasCommunityPage,
  },
  "cuycuyes": {
    ...cuycuyesCommunityPage,
  },
  "pirsa": {
    ...pirsaCommunityPage,
  },
  "quimbaya": {
    ...quimbayaCommunityPage,
  },
  "umbra": {
    ...umbraCommunityPage,
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
  "huitotos": {
    title: "Huitotos",
    description: "Pueblo amazónico guardián de una rica tradición sobre la creación, la palabra sagrada y los ciclos de renovación.",
    longDescription: "Los Huitotos son un pueblo indígena de la región amazónica que ha preservado una de las mitologías más complejas y filosóficas de Colombia. Sus relatos cosmogónicos narran cómo Nofïdeño (la Madre) y Uuikï (el Padre) ordenaron el caos primordial y crearon el mundo a través de la palabra sagrada. Los mitos huitotos exploran temas de creación y restauración, transformación espiritual, y el profundo conocimiento sobre plantas sagradas como el tabaco y la yuca. Historias como la de Jirayauma revelan astucia y supervivencia, mientras que los relatos de Jitoma y Fïboi exploran la traición y las consecuencias de romper el equilibrio natural. La tradición oral huitoto enfatiza la importancia de las ceremonias en maloca, el mambeadero como espacio de transmisión de conocimiento, y la relación sagrada entre pensamiento, palabra y creación del cosmos.",
    imagePrompt: "Huitoto ceremonial maloca, sacred tobacco and yuca, Amazon creation mythology, spiritual renewal"
  },
  "kogui": {
    ...koguiCommunityPage,
  },
  "koguis": {
    ...koguiCommunityPage,
  },
  "nasa": {
    title: "Nasa",
    description: "Pueblo indígena del Cauca y Huila, con una tradición de resistencia y rica mitología andino-amazónica.",
    longDescription: "Los Nasa, también conocidos como Páez, habitan principalmente el departamento del Cauca y el sur del Huila. Su mitología combina elementos andinos y amazónicos, reflejando su ubicación geográfica de transición. Los mitos nasa incluyen relatos sobre héroes culturales, el origen de sus territorios ancestrales, y luchas contra fuerzas opresoras. Su tradición oral ha sido central en la preservación de su identidad cultural a pesar de siglos de colonización, y sus mitos transmiten valores de resistencia, comunidad y armonía con la naturaleza.",
    imagePrompt: "Nasa people in Cauca mountains, resistance symbols, cultural heroes, sacred territories"
  },
  "nasa-paeces": {
    ...nasaCommunityPage,
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

export async function generateMetadata({ params }) {
  const { slug } = await resolveRouteParams(params);
  const taxonomy = await getTaxonomy();
  const community = taxonomy.communities.find(c => c.slug === slug);

  if (!community) {
    return {
      title: "Comunidad no encontrada | Mitos de Colombia",
      description: "La comunidad solicitada no está disponible.",
    };
  }

  const communityInfo = COMMUNITY_INFO[slug] || {};
  const title = communityInfo.title || community.name;
  const description = communityInfo.description || `Explora los mitos del pueblo ${community.name}`;
  const seo = await getSeoEntry("community", slug);

  return buildSeoMetadata({
    fallback: {
      title: `Mitos ${title} | Mitos de Colombia`,
      description,
      keywords: [community.name, "pueblo indígena", "Colombia", "mitología", "tradición oral"],
    },
    seo,
    canonicalPath: `/comunidades/${slug}`,
    imageUrl: community.image_url || undefined,
  });
}

export default async function CommunityDetailPage({ params }) {
  const { slug } = await resolveRouteParams(params);
  const taxonomy = await getTaxonomy();
  const allowedCommunities = filterAllowedCommunities(
    taxonomy.communities,
    MIN_COMMUNITY_MYTHS
  );
  const community = allowedCommunities.find((c) => c.slug === slug);

  if (!community) {
    notFound();
  }

  const communityInfo = COMMUNITY_INFO[slug] || {
    title: community.name,
    description: `Pueblo indígena de la región ${community.region}.`,
    longDescription: `El pueblo ${community.name} es parte del patrimonio cultural de Colombia, preservando tradiciones ancestrales en la región ${community.region}. Sus mitos transmiten conocimientos, valores y cosmovisiones que han sido heredados de generación en generación.`,
    imagePrompt: "Colombian indigenous community, traditional culture, ancestral wisdom"
  };
  const shortDescription =
    (communityInfo.description || "").length < 140
      ? `${communityInfo.description} Sus relatos conservan memoria territorial y saberes que siguen vivos en ${community.region}.`
      : communityInfo.description;
  const needsExpansion =
    !community.image_url || (communityInfo.longDescription || "").length < 520;
  const longDescriptionBlocks = [
    communityInfo.longDescription,
    ...(needsExpansion
      ? [
          `En el territorio ${community.region}, los mitos ayudan a recordar rutas, pactos de convivencia y el vínculo con ríos, montañas o sabanas. Estas narrativas no solo explican el origen del mundo, también orientan la vida diaria: cómo cuidar el agua, cuándo sembrar, cómo leer los ciclos del clima y qué rituales protegen a la comunidad.`,
          `Esta colección reúne ${community.myth_count} ${
            community.myth_count === 1 ? "mito" : "mitos"
          } que dialogan con temas de creación, transformación y memoria. Leerlos es acercarse a la manera en que ${community.name} entiende el tiempo, la naturaleza y la responsabilidad colectiva.`,
        ]
      : []),
  ];
  const intro = longDescriptionBlocks.filter(Boolean).join("\n\n");

  // Muestra para exploración interactiva (filtrable en cliente, SSR = rastreable).
  const result = await listMyths({ community: community.slug, limit: 48, offset: 0 });
  const exploreMyths = (result?.items || []).map((m) => ({
    slug: m.slug,
    title: m.title,
    excerpt: m.excerpt,
    region: m.region,
    community: m.community,
    imageUrl: m.image_url,
  }));

  // Una comunidad comparte comunidad y (normalmente) región, así que no hay facetas útiles.
  const filters = [];

  // Índice completo, crawleable, de todos los mitos de la comunidad.
  const allMythLinks = await listMythLinksByTaxon("community", community.slug);
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
              { name: "Comunidades", url: `${SITE_URL}/comunidades` },
              {
                name: communityInfo.title || community.name,
                url: `${SITE_URL}/comunidades/${community.slug}`,
              },
            ]}
          />
          <CollectionPageJsonLd
            name={`Mitos de la comunidad ${communityInfo.title || community.name}`}
            description={communityInfo?.description}
            url={`${SITE_URL}/comunidades/${community.slug}`}
            items={collectionItems}
          />
        </>
      )}
      <TaxonomyDetailTemplate
        taxonomy={{
          name: communityInfo.title || community.name,
          description: shortDescription,
          imageUrl: community.image_url,
          motif: "condor",
          count: community.myth_count,
          kind: `Comunidad · ${community.region}`,
        }}
        accent="river"
        breadcrumb={[
          { label: "Comunidades", href: "/comunidades" },
          { label: communityInfo.title || community.name },
        ]}
        intro={intro}
        filterable={<FilterableArchive myths={exploreMyths} filters={filters} />}
        mythIndex={allMythLinks}
        indexTitle={`Todos los mitos de la comunidad ${
          communityInfo.title || community.name
        }`}
      />
    </>
  );
}
