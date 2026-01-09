import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import { Badge } from "../../../components/ui/Badge";
import { ButtonLink } from "../../../components/ui/Button";
import { GlassCard } from "../../../components/ui/GlassCard";
import { ImageSlot } from "../../../components/ui/ImageSlot";
import { Pagination } from "../../../components/ui/Pagination";
import { SectionHeader } from "../../../components/ui/SectionHeader";
import { getTaxonomy, listMyths } from "../../../lib/myths";
import Link from "next/link";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

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
    title: "Katíos",
    description: "Pueblo emberá de la región andina, guardianes de relatos sobre la creación del mundo y la resistencia cultural.",
    longDescription: "Los Katíos son parte de la familia lingüística emberá y habitan regiones del occidente colombiano, principalmente en Antioquia y Chocó, en la zona de transición entre los Andes y el Pacífico. Su mitología es rica en relatos cosmogónicos centrados en Caragabí, el creador que organizó el mundo y estableció el orden natural y social. Los mitos katíos narran la creación del universo, la aparición de figuras míticas como los Aribamias (seres transformados después de la muerte), y episodios de resistencia indígena como la liderada por Ambeu contra los conquistadores españoles. La tradición oral katía también incluye relatos sobre el origen de alimentos como el ñame, la intervención de la serpiente desafiando la autoridad divina, y enseñanzas sobre el respeto a los espíritus de la selva y los ríos. Sus mitos preservan profundos conocimientos sobre plantas medicinales, técnicas de caza sostenible, y la importancia de mantener el equilibrio entre lo humano y lo natural.",
    imagePrompt: "Katío village in Andean-Pacific transition, Caragabí creation myth, resistance warriors, sacred forest spirits"
  },
  "embera": {
    title: "Emberá",
    description: "Pueblo indígena del Pacífico colombiano, con rica tradición oral sobre la naturaleza, espíritus del bosque y ceremonias ancestrales.",
    longDescription: "Los Emberá son uno de los pueblos indígenas más importantes de la región Pacífica colombiana, habitando los departamentos de Chocó, Valle del Cauca y Risaralda. Su mitología está profundamente conectada con la selva húmeda tropical, los ríos caudalosos y la extraordinaria biodiversidad de su territorio. Los mitos emberá incluyen relatos sobre la creación del mundo, espíritus guardianes de la selva, transformaciones entre humanos y animales, y la importancia de mantener el equilibrio con la naturaleza. Su tradición oral transmite conocimientos sobre el uso sostenible de recursos naturales, plantas medicinales, técnicas de pesca y navegación fluvial. Los Emberá han preservado su identidad cultural a pesar de presiones externas, manteniendo vivas ceremonias tradicionales, el uso de la lengua emberá, y prácticas artesanales como la cestería y la elaboración de tallas en tagua. Sus mitos enfatizan valores comunitarios, respeto a los mayores, y la responsabilidad de cuidar la selva para las futuras generaciones.",
    imagePrompt: "Emberá village on Pacific river, traditional palafitos, rainforest spirits, ceremonial gathering, artisan crafts"
  },
  "chimila": {
    title: "Chimila",
    description: "Pueblo indígena del Caribe colombiano, herederos de relatos sobre la creación, los primeros pobladores y las guerras ancestrales.",
    longDescription: "Los Chimila, originalmente conocidos como Paretare, son un pueblo indígena de la región Caribe colombiana, habitantes ancestrales del departamento del Cesar y áreas cercanas a la Sierra Nevada de Santa Marta. Su mitología preserva relatos fundamentales sobre la creación del mundo por Papá Grande, quien formó la tierra y los primeros pueblos, guiando a los Chimila con flechas de caña maná que marcaron lugares sagrados como San Ángel y Cartagena. Los mitos chimila narran el origen del sol y la luna en una danza cósmica que refleja la interacción entre lo divino y lo natural, personificando al sol con fragilidad y fuerza simultáneas. La tradición oral chimila también incluye relatos sobre encuentros con caníbales que exploran el miedo y los conflictos comunitarios, así como las primeras guerras entre Aruacos, Chimilas y Karíbi, mostrando una historia de tensiones y reconciliaciones en un contexto de cambio sociocultural. Estos mitos transmiten enseñanzas sobre la importancia del territorio, la defensa de la identidad cultural y el mantenimiento de la memoria ancestral.",
    imagePrompt: "Chimila people in Caribbean lowlands, Papá Grande creation myth, sacred arrows marking territory, ancestral gatherings"
  },
  "pananes": {
    title: "Pananes",
    description: "Comuneros de Panán, guardianes de tradiciones mestizas sobre lugares sagrados, espíritus de agua y sincretismo cultural.",
    longDescription: "Los Pananes o comuneros de Panán son habitantes de la región andina que han preservado una rica tradición oral que fusiona elementos indígenas prehispánicos con influencias católicas coloniales, creando un sincretismo cultural único. Su mitología está profundamente conectada con la geografía sagrada de su territorio, incluyendo lugares como el Ojo de Agua, la Laguna de María Panana, y la Chorrera del Duende. Los mitos pananes narran el origen de su estirpe en La Tuta, donde la dualidad entre luz y sombra forjó una comunidad inmortal. El Cucho de Cuaichala representa el sincretismo cultural donde música y danza expresan la evolución espiritual del pueblo. Los relatos sobre el Cualchio y la Olla del Granizo explican fenómenos naturales como la precipitación, mientras que la Laguna de María Panana es venerada como lugar sagrado de encantos y purificación. La tradición oral de Panán preserva historias sobre el duende de la Cangagua, entrelazando misterio y realidad en narrativas que mantienen viva la conexión entre los comuneros y su territorio ancestral.",
    imagePrompt: "Pananes highland community, sacred lagoons and water springs, Catholic-indigenous syncretism, mystical fog-covered landscapes"
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
    title: "Kogui",
    description: "Pueblo de la Sierra Nevada de Santa Marta, guardianes de conocimiento ancestral y equilibrio ecológico.",
    longDescription: "Los Kogui habitan la Sierra Nevada de Santa Marta, considerada por ellos el 'Corazón del Mundo'. Su mitología está profundamente arraigada en la concepción de que la Sierra es el centro del universo y que ellos son sus guardianes. Los mitos kogui hablan sobre la creación del mundo por la Madre Universal, la importancia del equilibrio entre fuerzas opuestas, y el rol de los Mamos (líderes espirituales) como intermediarios entre el mundo material y espiritual. Sus relatos enfatizan la responsabilidad humana en mantener el equilibrio ecológico.",
    imagePrompt: "Kogui people in Sierra Nevada, sacred mountains, Mother Universal, spiritual guardianship"
  },
  "koguis": {
    title: "Koguis",
    description: "Guardianes ancestrales de la Sierra Nevada de Santa Marta, el corazón del mundo y centro del equilibrio cósmico.",
    longDescription: "Los Koguis son uno de los cuatro pueblos indígenas que habitan la Sierra Nevada de Santa Marta en la región Caribe, considerada por ellos como el 'Corazón del Mundo' y centro del universo. Su mitología cosmogónica narra la creación del mundo a través de nueve mundos previos, cada uno habitado por seres espirituales que evolucionaron hasta formar la humanidad actual. Los mitos koguis hablan de la Madre Wastora (Haba-Naowa) quien creó la diversidad étnica de la humanidad a partir de transformaciones corporales y espirituales. El relato de Kimaku y otros héroes culturales explica el origen del sol y la luna, los rituales necesarios para mantener su luz, y la importancia del primer hombre y la primera mujer en establecer el orden social. Los Mamos (líderes espirituales) son depositarios de este conocimiento sagrado y actúan como intermediarios entre lo material y lo espiritual, guiando a su pueblo en el cuidado del equilibrio ecológico del planeta.",
    imagePrompt: "Kogui mamos in Sierra Nevada, sacred mountain peaks, Mother Universal creation, cosmic balance guardianship"
  },
  "nasa": {
    title: "Nasa",
    description: "Pueblo indígena del Cauca y Huila, con una tradición de resistencia y rica mitología andino-amazónica.",
    longDescription: "Los Nasa, también conocidos como Páez, habitan principalmente el departamento del Cauca y el sur del Huila. Su mitología combina elementos andinos y amazónicos, reflejando su ubicación geográfica de transición. Los mitos nasa incluyen relatos sobre héroes culturales, el origen de sus territorios ancestrales, y luchas contra fuerzas opresoras. Su tradición oral ha sido central en la preservación de su identidad cultural a pesar de siglos de colonización, y sus mitos transmiten valores de resistencia, comunidad y armonía con la naturaleza.",
    imagePrompt: "Nasa people in Cauca mountains, resistance symbols, cultural heroes, sacred territories"
  },
  "nasa-paeces": {
    title: "Nasa - Páez",
    description: "Pueblo indígena del Cauca y Huila, conocido por su resistencia cultural y profunda conexión con la tierra ancestral.",
    longDescription: "Los Nasa o Páez son uno de los pueblos indígenas más emblemáticos de Colombia, habitantes ancestrales del departamento del Cauca y sur del Huila en la región Pacífica. Su mitología es rica en relatos de resistencia, transformación y conexión con la naturaleza. Los mitos nasa narran historias de héroes culturales que enfrentan adversidades, la importancia de mantener el equilibrio con la Pachamama (madre tierra), y enseñanzas sobre la defensa del territorio. Su tradición oral ha sido fundamental para preservar su identidad cultural a través de siglos de colonización y conflictos. Los relatos nasa transmiten valores de unidad comunitaria, lucha por la autonomía, respeto a los mayores y armonía con los ciclos naturales.",
    imagePrompt: "Nasa people in Cauca mountains, traditional clothing, resistance symbols, sacred territory protection"
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

export async function generateMetadata({ params }) {
  const taxonomy = await getTaxonomy();
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

export default async function CommunityDetailPage({ params, searchParams }) {
  const taxonomy = await getTaxonomy();
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
  const result = await listMyths({
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

  const paginationBase = {
    q,
    tag,
  };

  return (
    <main className="relative min-h-screen overflow-hidden pb-24">
      <Header />

      {/* Hero Section */}
      <section className="container-shell mt-12">
        <GlassCard className="relative overflow-hidden p-0">
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
          <div className="group relative overflow-hidden">
            <ImageSlot size="wide" className="rounded-none transition-transform duration-700 group-hover:scale-105" />
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
                      <img
                        src={myth.image_url}
                        alt={`Ilustracion de ${myth.title}`}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
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
            pathname={`/comunidades/${params.slug}`}
            searchParams={paginationBase}
            limitOptions={[12, 24, 48]}
          />
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
