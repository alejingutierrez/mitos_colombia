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

// Descripciones específicas para cada categoría
const CATEGORY_INFO = {
  "etiologico": {
    title: "Mitos Etiológicos",
    description: "Los mitos etiológicos explican el origen de fenómenos naturales, costumbres sociales, nombres de lugares o características del mundo. Son relatos fundacionales que responden al \"por qué\" de las cosas.",
    longDescription: "En la tradición oral colombiana, los mitos etiológicos ocupan un lugar central como explicaciones ancestrales del mundo que nos rodea. Estos relatos narran cómo surgieron montañas, ríos, animales, plantas y costumbres sociales. Desde la formación de las lagunas sagradas hasta el origen del maíz o el canto de las aves, cada mito etiológico preserva la sabiduría de pueblos que observaron la naturaleza y crearon narrativas para transmitir conocimiento de generación en generación.",
    imagePrompt: "Ancient Colombian landscape with mystical origins, sacred mountains emerging from primordial waters, indigenous symbols, warm earth tones"
  },
  "indigena": {
    title: "Mitos Indígenas",
    description: "Relatos de la tradición oral de los pueblos originarios de Colombia, que preservan cosmovisiones ancestrales y conocimientos transmitidos por generaciones.",
    longDescription: "Los pueblos indígenas de Colombia han preservado durante milenios sus tradiciones orales, creando un vasto universo mitológico que refleja profundas conexiones con la naturaleza, el cosmos y los espíritus ancestrales. Desde los Muiscas en los Andes hasta los Yukuna en la Amazonía, cada pueblo ha tejido relatos que explican su lugar en el mundo y transmiten enseñanzas vitales.",
    imagePrompt: "Indigenous Colombian spiritual ceremony, ancestral symbols, sacred natural landscape, traditional patterns, mystical atmosphere"
  },
  "mestizo": {
    title: "Mitos Mestizos",
    description: "Narrativas que fusionan tradiciones indígenas, europeas y africanas, creando un sincretismo único de la cultura colombiana.",
    longDescription: "El mestizaje cultural en Colombia ha dado origen a una rica tradición mitológica que entrelaza elementos indígenas, españoles y africanos. Estos relatos reflejan la complejidad de la identidad colombiana, donde santos católicos conviven con espíritus de la naturaleza, y leyendas europeas se transforman en el contexto tropical americano.",
    imagePrompt: "Cultural fusion in Colombian colonial setting, blending of indigenous and European elements, mystical crossroads, warm colonial colors"
  },
  "engano": {
    title: "Mitos del Engaño",
    description: "Relatos sobre trampas, artimañas y engaños, que a menudo contienen lecciones morales sobre la astucia y sus consecuencias.",
    longDescription: "Las narrativas del engaño ocupan un lugar destacado en el folklore colombiano, presentando personajes astutos que utilizan la inteligencia, el disfraz o la manipulación para alcanzar sus objetivos. Estos mitos funcionan como advertencias sobre la confianza excesiva y enseñanzas sobre cómo discernir la verdad de la mentira.",
    imagePrompt: "Trickster figure in Colombian folklore, masks and illusions, shadowy forest paths, mysterious atmosphere"
  },
  "castigo": {
    title: "Mitos del Castigo",
    description: "Historias sobre transgresiones y sus consecuencias, que refuerzan normas sociales y enseñanzas morales a través del relato.",
    longDescription: "Los mitos de castigo en Colombia cumplen una función social crucial: establecer límites, transmitir valores y advertir sobre las consecuencias de transgredir normas comunitarias. Desde castigos divinos hasta transformaciones como consecuencia de actos indebidos, estos relatos enseñan respeto por la naturaleza, los ancianos y las tradiciones.",
    imagePrompt: "Divine punishment in mystical Colombian landscape, dramatic transformation, moral lesson visualization, powerful natural forces"
  },
  "castigos": {
    title: "Mitos de Castigos",
    description: "Narrativas sobre transgresiones del orden natural y social, y las consecuencias que restauran el equilibrio cósmico y moral.",
    longDescription: "Los mitos de castigos en la tradición oral colombiana funcionan como guardianes del orden social y natural, estableciendo claramente las consecuencias de violar normas fundamentales. Yepá castiga a los animales por su comportamiento irracional en la selva del Vaupés, cambiando permanentemente su destino y relación con los humanos, enseñando sobre las consecuencias de actuar sin razonamiento. La historia de Damián Vásquez Montiel, el perulero que hizo un pacto con el Diablo, advierte sobre los peligros de la avaricia y los acuerdos sobrenaturales, culminando en su misteriosa desaparición en la Villa de Arma. El mito de la Dama Verde explora advertencias morales a través de encuentros misteriosos que pueden traer fortuna o desgracia dependiendo del comportamiento del protagonista. Estos relatos no solo castigan transgresiones individuales, sino que refuerzan valores comunitarios esenciales: el respeto a lo sagrado, la honestidad en los tratos, la moderación en los deseos, y la importancia de mantener el equilibrio entre lo humano y lo sobrenatural.",
    imagePrompt: "Divine punishment in Colombian mythology, Yepá judging animals, moral consequences, supernatural justice, balance restoration"
  },
  "familia": {
    title: "Mitos de Familia",
    description: "Relatos sobre relaciones familiares, genealogías míticas y la importancia de los lazos de sangre en la estructura social.",
    longDescription: "La familia como núcleo de la sociedad se refleja profundamente en la mitología colombiana. Estos relatos exploran relaciones entre padres e hijos, hermanos, y ancestros, mostrando cómo los lazos familiares estructuran el mundo social y espiritual. Conflictos, lealtades y transmisión de legados son temas centrales.",
    imagePrompt: "Ancestral Colombian family gathering, generational connections, sacred family tree, warm communal atmosphere"
  },
  "creacion": {
    title: "Mitos de Creación",
    description: "Relatos cosmogónicos sobre el origen del universo, la tierra, la humanidad y los seres que habitan el mundo.",
    longDescription: "Los mitos de creación son los relatos más fundamentales de cualquier cultura, y Colombia posee una extraordinaria diversidad de narrativas cosmogónicas. Cada pueblo indígena tiene su propia versión de cómo surgió el mundo, desde el vacío primordial hasta la aparición de los primeros humanos, pasando por la creación del sol, la luna y las estrellas.",
    imagePrompt: "Cosmic creation scene, primordial chaos becoming order, celestial bodies emerging, indigenous Colombian cosmology"
  },
  "moral": {
    title: "Mitos Morales",
    description: "Historias con enseñanzas éticas explícitas sobre el bien y el mal, lo correcto e incorrecto en la vida social.",
    longDescription: "La tradición oral colombiana está repleta de relatos que transmiten valores morales fundamentales. Estos mitos enseñan sobre la honestidad, el respeto, la generosidad, la valentía y otras virtudes, utilizando narrativas memorables donde los personajes enfrentan dilemas éticos y sus decisiones tienen consecuencias claras.",
    imagePrompt: "Moral choice at a crossroads, light and shadow symbolism, Colombian cultural values, ethical dilemma visualization"
  },
  "poder": {
    title: "Mitos del Poder",
    description: "Relatos sobre autoridad, liderazgo, y las luchas por el dominio entre seres humanos, dioses y espíritus.",
    longDescription: "El poder en sus múltiples manifestaciones —político, espiritual, mágico— es un tema recurrente en la mitología colombiana. Estos relatos exploran cómo se obtiene, se mantiene y se pierde el poder, mostrando tanto líderes sabios como tiranos, y las consecuencias de su ejercicio.",
    imagePrompt: "Ancient Colombian ruler with spiritual power, symbols of authority, mystical energy, commanding presence"
  },
  "muerte": {
    title: "Mitos de la Muerte",
    description: "Narrativas sobre el más allá, el viaje de las almas, y la frontera entre la vida y la muerte.",
    longDescription: "La muerte no es vista como un final absoluto en la cosmovisión de muchos pueblos colombianos, sino como una transformación y el inicio de otro viaje. Estos mitos exploran qué sucede después de morir, cómo se prepara el alma para su tránsito, y la relación entre vivos y muertos.",
    imagePrompt: "Journey to the afterlife in Colombian mythology, spirits crossing boundaries, ancestral realm, mystical transition"
  },
  "viaje": {
    title: "Mitos del Viaje",
    description: "Relatos sobre expediciones, travesías heroicas y desplazamientos que transforman a los protagonistas.",
    longDescription: "Los mitos de viaje narran expediciones físicas y espirituales que transforman profundamente a quienes las emprenden. Desde viajes al inframundo hasta migraciones ancestrales, estas historias reflejan la importancia del movimiento y la exploración en la construcción de identidad.",
    imagePrompt: "Epic journey through Colombian mystical landscapes, pathways between worlds, transformation through travel"
  },
  "amor": {
    title: "Mitos del Amor",
    description: "Historias sobre pasión, romance, y las complejas relaciones entre seres de diferentes naturalezas.",
    longDescription: "El amor en la mitología colombiana trasciende fronteras entre mundos: humanos que se enamoran de espíritus del agua, dioses que desean mortales, y pasiones prohibidas que desafían el orden establecido. Estos relatos exploran el deseo, la fidelidad, los celos y el sacrificio.",
    imagePrompt: "Romantic encounter in Colombian mystical setting, lovers from different worlds, passionate folklore, enchanted atmosphere"
  },
  "heroico": {
    title: "Mitos Heroicos",
    description: "Relatos sobre personajes valientes que enfrentan grandes desafíos para proteger a su pueblo o cumplir misiones extraordinarias.",
    longDescription: "Los héroes de la mitología colombiana son guerreros, cazadores, líderes y seres dotados de poderes especiales que enfrentan monstruos, solucionan crisis y establecen el orden. Sus hazañas inspiran y establecen modelos de comportamiento para la comunidad.",
    imagePrompt: "Colombian mythological hero facing epic challenge, warrior spirit, protective stance, legendary feat"
  },
  "heroicos": {
    title: "Mitos Héroicos",
    description: "Historias de personajes extraordinarios que usan la astucia, fuerza y sabiduría para superar obstáculos imposibles y proteger a sus comunidades.",
    longDescription: "Los mitos héroicos de Colombia presentan personajes que encarnan virtudes admirables y enfrentan desafíos que ponen a prueba su valor, inteligencia y determinación. Petapeta demuestra cómo la codicia y el engaño pueden despojar a alguien de su poder mágico, mientras que Jirayauma enfrenta a su suegra en una batalla de astucia y supervivencia. Konago, la tortuga sabia, vence a los poderosos jaguares usando la inteligencia sobre la fuerza bruta, estableciendo que la paciencia y la estrategia son más efectivas que la violencia. Estos héroes no solo protegen a sus comunidades de amenazas externas, sino que también enseñan lecciones morales importantes: el uso responsable del poder, la importancia del ingenio sobre la fuerza física, y las consecuencias de la avaricia. Sus hazañas se transmiten de generación en generación como modelos de comportamiento, inspirando a las comunidades a valorar la astucia, la paciencia y la ética en lugar de depender únicamente de la fuerza.",
    imagePrompt: "Colombian mythological heroes, Konago the wise turtle, Jirayauma's cunning, strategic victories, protective guardians"
  },
  "transformacion": {
    title: "Mitos de Transformación",
    description: "Historias sobre metamorfosis de seres humanos en animales, plantas, espíritus o elementos naturales, revelando la interconexión de todas las formas de existencia.",
    longDescription: "La transformación es uno de los motivos más recurrentes y profundos de la mitología colombiana, reflejando la cosmovisión indígena de que todas las formas de existencia están interconectadas y las fronteras entre categorías son permeables. Los fantasmas multiplicadores en relatos andoques exploran el enigma de seres que se transforman con elementos mágicos, desafiando la comprensión ordinaria de la realidad. La venganza de los brujos narra cómo dos hermanos chamanes se transforman en jaguares y anacondas, atacando comunidades que los ofendieron, demostrando el poder peligroso de quienes dominan las artes de la metamorfosis. La brujería de la danta revela cómo Trueno-de-piedra y brujos huitotos se transforman en tapires y otros animales, utilizando estas formas para viajar entre mundos, cazar o ejercer poder sobre otros. Estas transformaciones no son meros trucos mágicos, sino cambios fundamentales que revelan la verdadera naturaleza fluida de la existencia: un humano puede convertirse en jaguar porque comparte esencia con él; una persona puede transformarse en montaña porque su espíritu se fusiona con la tierra. Los mitos de transformación enseñan que la identidad no es fija, que lo humano y lo natural están en constante diálogo, y que respetar esta fluidez es esencial para vivir en armonía con el cosmos.",
    imagePrompt: "Colombian mythological transformations, shamans becoming jaguars, spirit metamorphosis, fluid boundaries between human and animal"
  },
  "cosmogenico": {
    title: "Mitos Cosmogónicos",
    description: "Relatos sobre la formación del cosmos, el ordenamiento del universo y la estructura del mundo celestial.",
    longDescription: "Los mitos cosmogónicos explican cómo se organizó el universo desde el caos primordial. Estos relatos establecen la posición del sol, la luna, las estrellas, y definen las relaciones entre el mundo superior, el mundo terrenal y el inframundo.",
    imagePrompt: "Formation of the cosmos in Colombian indigenous cosmology, celestial order, primordial creation, sacred geometry"
  },
  "sacrificio": {
    title: "Mitos del Sacrificio",
    description: "Narrativas sobre ofrendas, renuncias y actos de abnegación que benefician a la comunidad o mantienen el equilibrio cósmico.",
    longDescription: "El sacrificio, ya sea de seres humanos, animales u objetos preciosos, aparece como acto necesario para mantener el orden del mundo. Estos mitos exploran temas de reciprocidad con lo divino, el precio del progreso y el altruismo extremo.",
    imagePrompt: "Sacred sacrifice ceremony in ancient Colombia, ritual offering, cosmic balance, solemn spiritual act"
  },
  "moralidad": {
    title: "Mitos de Moralidad",
    description: "Relatos que establecen códigos de conducta y exploran las consecuencias de las elecciones éticas.",
    longDescription: "Estos mitos funcionan como guías morales explícitas, mostrando claramente qué comportamientos son valorados y cuáles castigados en la sociedad. A través de ejemplos narrativos, se transmiten las normas que mantienen la cohesión social.",
    imagePrompt: "Moral teaching through Colombian folklore, ethical principles, justice and virtue, cultural values"
  },
  "guerra": {
    title: "Mitos de Guerra",
    description: "Relatos sobre conflictos bélicos, estrategias militares y la valentía en el combate.",
    longDescription: "Los mitos de guerra narran batallas épicas entre pueblos, conflictos con seres sobrenaturales y la defensa de territorios sagrados. Estos relatos honran el valor guerrero y establecen códigos de conducta en el combate.",
    imagePrompt: "Epic battle in Colombian mythology, warriors in conflict, strategic warfare, heroic combat"
  },
  "caos": {
    title: "Mitos del Caos",
    description: "Historias sobre el desorden primordial, fuerzas destructivas y la amenaza constante del retorno al caos.",
    longDescription: "El caos representa tanto el estado anterior a la creación como la amenaza constante de desintegración del orden establecido. Estos mitos exploran fuerzas destructivas, catástrofes y la fragilidad de la civilización.",
    imagePrompt: "Primordial chaos in Colombian cosmology, destructive forces, disorder and entropy, threatening darkness"
  },
  "resurreccion": {
    title: "Mitos de Resurrección",
    description: "Relatos sobre el retorno de la muerte, ciclos de renovación y renacimiento.",
    longDescription: "La resurrección y el renacimiento simbolizan los ciclos naturales y la esperanza de continuidad. Estos mitos narran cómo seres que murieron vuelven a la vida, transformados o con nuevos propósitos.",
    imagePrompt: "Resurrection and rebirth in Colombian mythology, cycle of renewal, return from death, transformative rebirth"
  },
  "sabiduria": {
    title: "Mitos de Sabiduría",
    description: "Historias sobre conocimiento ancestral, enseñanzas de los ancianos y la búsqueda del entendimiento.",
    longDescription: "La sabiduría como bien preciado se transmite a través de estos relatos que honran a los ancianos, chamanes y maestros. Narran cómo se adquiere conocimiento profundo sobre el mundo natural y espiritual.",
    imagePrompt: "Ancient wisdom keeper in Colombian tradition, elder teaching, sacred knowledge, spiritual enlightenment"
  },
  "diluvio": {
    title: "Mitos del Diluvio",
    description: "Relatos sobre inundaciones catastróficas que destruyen el mundo conocido y permiten un nuevo comienzo.",
    longDescription: "Los mitos de diluvio son comunes en muchas culturas colombianas, narrando cómo las aguas primordiales inundaron la tierra, destruyendo una era para dar paso a otra. Estos relatos hablan de supervivientes que preservan la vida y el conocimiento.",
    imagePrompt: "Great flood in Colombian mythology, catastrophic waters, survival and renewal, primordial deluge"
  },
  "enfermedad": {
    title: "Mitos de Enfermedad",
    description: "Historias sobre el origen de las dolencias, espíritus que causan enfermedades y métodos de curación.",
    longDescription: "La enfermedad en la cosmovisión tradicional tiene causas espirituales además de físicas. Estos mitos explican cómo surgieron las enfermedades y qué seres o transgresiones las causan, ofreciendo marcos para la curación.",
    imagePrompt: "Spiritual origin of illness in Colombian shamanic tradition, healing ceremony, disease spirits, traditional medicine"
  },
  "antropogenico": {
    title: "Mitos Antropogónicos",
    description: "Relatos sobre la creación de los seres humanos y el origen de diferentes pueblos.",
    longDescription: "Los mitos antropogónicos narran cómo surgieron los primeros humanos, de qué materiales fueron hechos, y cómo se diferenciaron los diversos pueblos. Estos relatos establecen la identidad ancestral de las comunidades.",
    imagePrompt: "Creation of humanity in Colombian indigenous mythology, first humans emerging, ancestral origins, sacred birth"
  },
  "culturales": {
    title: "Mitos Culturales",
    description: "Relatos sobre el origen de prácticas sociales, técnicas agrícolas, ceremonias y elementos que definen la identidad de los pueblos.",
    longDescription: "Los mitos culturales explican cómo surgieron las prácticas y conocimientos que definen la identidad de las comunidades colombianas. Los gigantes nombran elementos naturales en actos que resaltan su significado cultural y espiritual, estableciendo la relación sagrada entre el lenguaje y el mundo. Plumón-amarillo lidera la reconstrucción de un pueblo disperso, uniendo a su gente y restaurando la identidad colectiva en tierras sagradas, demostrando la importancia de la cohesión comunitaria. El origen de los vegetales cultivados revela ciclos de apropiación y redistribución de recursos mágicos entre los indígenas, explicando cómo la humanidad obtuvo los alimentos que sustentan la vida. Estos relatos no solo narran eventos del pasado, sino que transmiten conocimientos prácticos sobre agricultura, organización social, ceremonias y técnicas de subsistencia. Los mitos culturales funcionan como manuales de identidad que enseñan a las nuevas generaciones quiénes son, de dónde vienen, y cómo deben vivir para mantener viva la herencia de sus ancestros.",
    imagePrompt: "Colombian cultural origins, naming ceremony of natural elements, community rebuilding, sacred agricultural knowledge"
  },
  "selva": {
    title: "Mitos de la Selva",
    description: "Narrativas sobre los espíritus, peligros y maravillas de las selvas tropicales, hogar de pueblos amazónicos y del Pacífico.",
    longDescription: "La selva en la mitología colombiana es un espacio de misterio, poder y conocimiento profundo, habitada por espíritus, guardianes y seres transformados. El sol que nace en Araracuara narra el origen cósmico de la luz en la selva amazónica, con versiones que varían en detalle y enfoque narrativo según cada pueblo. La venganza de los brujos relata cómo dos hermanos se transforman en animales peligrosos, atacando comunidades y enfrentando a aldeanos que intentan detenerlos, explorando los límites entre lo humano y lo animal. La brujería de la danta revela narrativas de transformación, poder y magia en la interacción entre diferentes pueblos amazónicos. Estos mitos enseñan sobre los peligros de adentrarse sin respeto en la selva, el poder de los chamanes y brujos que pueden transformarse, y la importancia de mantener el equilibrio con los espíritus que habitan cada árbol, río y montaña. La selva no es solo un paisaje físico, sino un universo espiritual donde las leyes ordinarias se suspenden y lo imposible se vuelve cotidiano.",
    imagePrompt: "Amazon rainforest mythology, Araracuara sun origin, shape-shifting shamans, jungle spirits, transformational magic"
  },
  "naturaleza": {
    title: "Mitos de la Naturaleza",
    description: "Relatos sobre la creación y transformación de elementos naturales, y la relación sagrada entre humanos y el mundo natural.",
    longDescription: "Los mitos de la naturaleza en Colombia expresan la profunda interconexión entre todos los seres vivos y los elementos del cosmos. La curiosidad de Imárika Kayafikí impulsa cambios fundamentales que revelan diversidad y transformación en el mundo, mostrando cómo las acciones individuales pueden alterar el equilibrio natural. El diluvio y las hazañas de Buinaima narran cómo la curiosidad de Fïzido Jïzuma desata un diluvio devastador, revelando la interacción entre humanos y entidades naturales, y las consecuencias de interferir con fuerzas primordiales. Chuya-Chaqui, el guardián del bosque con pies disparejos, protege la selva amazónica de aquellos que buscan explotarla sin respeto, castigando a los invasores y premiando a quienes tratan la naturaleza con reverencia. Estos mitos enseñan que la naturaleza no es un recurso pasivo para uso humano, sino un ser vivo con voluntad propia, espíritus guardianes y leyes que deben respetarse. La relación con el mundo natural debe basarse en reciprocidad, agradecimiento y cuidado, no en extracción sin límites.",
    imagePrompt: "Colombian nature mythology, Chullachaqui forest guardian, primordial flood, natural transformations, sacred ecology"
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
  const category = taxonomy.tags.find(t => t.slug === params.slug);

  if (!category) {
    return {
      title: "Categoría no encontrada | Mitos de Colombia",
      description: "La categoría solicitada no está disponible.",
    };
  }

  const categoryInfo = CATEGORY_INFO[params.slug] || {};
  const title = categoryInfo.title || category.name;
  const description = categoryInfo.description || `Explora los mitos de la categoría ${category.name}`;

  return {
    title: `${title} | Mitos de Colombia`,
    description,
    keywords: [category.name, "mitos", "Colombia", "folklore", "tradición oral"],
  };
}

export default async function CategoryDetailPage({ params, searchParams }) {
  const taxonomy = await getTaxonomy();
  const category = taxonomy.tags.find(t => t.slug === params.slug);

  if (!category) {
    notFound();
  }

  const categoryInfo = CATEGORY_INFO[params.slug] || {
    title: category.name,
    description: `Explora la colección completa de mitos relacionados con ${category.name.toLowerCase()}.`,
    longDescription: `Los mitos de la categoría ${category.name} forman parte del rico patrimonio cultural de Colombia, transmitidos de generación en generación por comunidades que preservan sus tradiciones orales.`,
    imagePrompt: "Colombian folklore scene, traditional mythology, cultural heritage"
  };

  const q = getParamValue(searchParams.q);
  const relatedTag = getParamValue(searchParams.relatedTag);
  const limit = Number.parseInt(getParamValue(searchParams.limit) || "24", 10);
  const offset = Number.parseInt(getParamValue(searchParams.offset) || "0", 10);

  // Filtrar mitos de esta categoría
  const result = await listMyths({
    tag: relatedTag || category.name,
    q,
    limit,
    offset
  });

  // Tags relacionados (excluir regiones y "ninguno")
  const regionNames = taxonomy.regions.map(r => r.name.toLowerCase());
  const relatedTags = taxonomy.tags
    .filter(t =>
      t.slug !== params.slug &&
      !regionNames.includes(t.name.toLowerCase()) &&
      t.name.toLowerCase() !== 'ninguno'
    )
    .slice(0, 30);

  const paginationBase = {
    q,
    relatedTag,
  };

  return (
    <main className="relative min-h-screen overflow-hidden pb-24">
      <Header />

      {/* Hero Section con imagen */}
      <section className="container-shell mt-12">
        <GlassCard className="relative overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-br from-jungle-500/20 via-ember-400/20 to-river-500/20"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(var(--jungle-500), 0.1) 0%, rgba(var(--ember-400), 0.1) 50%, rgba(var(--river-500), 0.1) 100%)`
            }}
          />
          <div className="relative p-8 md:p-12">
            <Badge className="border-jungle-500/30 bg-jungle-500/10 text-jungle-600">
              Categoría temática
            </Badge>
            <h1 className="mt-4 font-display text-4xl text-ink-900 md:text-5xl lg:text-6xl">
              {categoryInfo.title}
            </h1>
            <p className="mt-4 max-w-3xl text-base text-ink-700 md:text-lg">
              {categoryInfo.description}
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-ink-500">
              <span className="flex items-center gap-2">
                <Badge className="border-jungle-500/30 bg-jungle-500/10 text-jungle-600">
                  {category.myth_count}
                </Badge>
                {category.myth_count === 1 ? 'mito' : 'mitos'}
              </span>
            </div>
            <ImageSlot size="wide" className="mt-6" />
          </div>
        </GlassCard>
      </section>

      {/* Descripción extendida */}
      <section className="container-shell mt-8">
        <GlassCard className="p-6 md:p-8">
          <p className="text-sm leading-relaxed text-ink-700 md:text-base">
            {categoryInfo.longDescription}
          </p>
        </GlassCard>
      </section>

      {/* Filtros simplificados */}
      <section className="container-shell mt-8">
        <GlassCard className="p-6">
          <form
            className="grid gap-4 md:grid-cols-[2fr_1.5fr_auto]"
            action={`/categorias/${params.slug}`}
            method="get"
          >
            <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-ink-500">
              Buscar en esta categoría
              <input
                className="input-glass"
                name="q"
                defaultValue={q}
                placeholder="Nombre del mito o palabra clave"
                type="text"
              />
            </label>

            <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-ink-500">
              Categoría relacionada
              <select
                className="input-glass"
                name="relatedTag"
                defaultValue={relatedTag}
              >
                <option value="">Ninguna</option>
                {relatedTags.map((tag) => (
                  <option key={tag.slug} value={tag.name}>
                    {tag.name} ({tag.myth_count})
                  </option>
                ))}
              </select>
            </label>

            <div className="flex flex-col justify-end gap-3">
              <button className="rounded-full bg-jungle-600 px-5 py-3 text-sm text-white shadow hover:bg-jungle-700 transition">
                Filtrar
              </button>
              <ButtonLink href={`/categorias/${params.slug}`} variant="outline" size="sm">
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
            {relatedTag ? <Badge>{relatedTag}</Badge> : null}
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
            buildUrl={({ offset: newOffset, limit: newLimit }) =>
              `/categorias/${params.slug}?${buildQuery(paginationBase, { offset: newOffset, limit: newLimit })}`
            }
            limitOptions={[12, 24, 48]}
          />
        </div>

        {/* Botón volver */}
        <div className="mt-10 flex justify-center">
          <ButtonLink href="/categorias" variant="outline">
            Ver todas las categorías
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
