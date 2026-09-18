/**
 * Direcciones del lote 25 · Serranías de La Guajira.
 *
 * La cadena principal es la versión de Juancito Iguarán publicada por Chaves
 * en 1946. La ropa no aparece descrita en el relato: cada conjunto es una
 * traducción editorial Wayuu reversible, completa y diferenciada. Los nombres
 * botánicos no resueltos se conservan abiertos; la planta "sandre de toro" no
 * se confunde con el ave Sangre Toro del relato de Worunka.
 */

const STORY_SOURCE = "chaves_serranias_1946";
const VARIANT_SOURCE = "uniguajira_etnoecologia_serranias";
const ECOLOGY_SOURCE = "pnn_macuira_rem_2019";
const WARDROBE_SOURCES = [
  "paz_ipuana_aleya_tomo_ii_2016",
  "mincultura_caracterizacion_wayuu",
  "artesanias_tejeduria_wayuu_2016",
  "artesanias_comunidad_wayuu",
  "artesanias_womu_wayuu",
  "minenergia_abc_relacionamiento_wayuu_2016",
  "banrep_moser_hombres_wayuu_1961",
  "icanh_organizacion_social_guajira_1950",
];

const COMMON_AVOID = [
  "corpse, open wound, blood, exposed bone, starvation spectacle, dehydration torture, body horror or graphic death",
  "nudity, bare torso as ethnic default, exposed genital, erotic pose, sexual act, childbirth or ownership gesture",
  "garment reduced to a lower-body strip, generic loincloth costume, identical uniforms, poncho, cowboy costume or fantasy shaman",
  "invented kana, clan mark, branding iron design, tattoo, rune, glyph, emblem, flag, territorial border or sacred geometry",
  "face paint, because this story does not document person, occasion, material, function and exact motif together",
  "neon aura, portal, magic particles, glowing eyes, lightning VFX, digital morph, smoke effect or luminous outline",
  "saguaro with arms, agave, aloe, yucca, pineapple, bromeliad or generic spiky rosette flora",
  "text, caption, title, label, number, arrow, map, diagram, panel border, watermark or signature",
  "flat collage, 2D illustration, smooth CGI, plastic toy, photographed real fabric, visible cardboard edge, base, pedestal, table, studio or exterior of the diorama",
];

function dimension(decision, evidence, rationale, specification) {
  return { decision, evidence, rationale, ...(specification ? { specification } : {}) };
}

function contract(dominant, front, back, reject) {
  return {
    dominant_silhouette: dominant,
    front_read: front,
    side_or_back_read: back,
    anti_collapse_rule: reject,
  };
}

function travelerCulture({
  person,
  chosenId,
  chosenLabel,
  alternativeLabel,
  specification,
  layers,
  refs,
  footwear,
  accessories,
  silhouette,
  front,
  back,
  reject,
  continuity,
}) {
  const rationale = "el relato individualiza a este viajero por su posición y estado, pero no describe ropa; el conjunto completo hace legible una identidad Wayuu situada sin convertir una pieza inferior, la desnudez o un uniforme en marcador de autenticidad";
  return {
    cultural_scope: "wayuu",
    person_scope: person,
    temporal_register: "mythic_indeterminate",
    time_basis: "Chaves publica la versión en 1946, pero la marcha pertenece a un tiempo mítico y no describe vestuario; Kemiisa, Kotin, Asheinpalajanaa, saco, faja, calzado, sombrero y bolsas se usan como traducciones editoriales Wayuu reversibles, no como reconstrucción prehispánica",
    narrative_moment: "identidad durante la marcha y continuidad hacia la forma territorial, antes de cualquier representación explícita de heridas o muerte",
    activity_context: "caminar durante jornadas largas, detenerse y conservar su conjunto completo mientras postura, distancia y relieve expresan cansancio",
    occasion_context: "travel",
    considered_ensembles: [
      {
        id: chosenId,
        label: chosenLabel,
        fit: "mejor ajuste reversible para distinguir función, clima y continuidad individual",
        rationale,
        source_refs: [STORY_SOURCE, ...WARDROBE_SOURCES],
      },
      {
        id: "single_minimal_lower_garment",
        label: alternativeLabel,
        fit: "rechazado",
        rationale: "la fuente no autoriza reducir al viajero a desnudez, una sola pieza inferior ni un disfraz primordial; además borraría la diversidad del repertorio masculino Wayuu documentado",
        source_refs: [STORY_SOURCE, "paz_ipuana_aleya_tomo_ii_2016", "icanh_organizacion_social_guajira_1950"],
      },
    ],
    chosen_ensemble: { id: chosenId, rationale, specification, layers },
    attire: dimension("include_contextual", "editorial_reversible", rationale, specification),
    footwear: dimension("include_contextual", "institutional_general", "el calzado completa una silueta de viaje y evita usar pies descalzos como autenticidad automática; sólo Epits lo retira en el estado narrado", footwear),
    accessories: accessories
      ? dimension("include_contextual", "institutional_general", "las piezas elegidas tienen función de viaje o protección y no fabrican rango, ritual o exotismo", accessories)
      : dimension("omit_contextually", "source_specific", "la fuente no exige carga, joya, instrumento, arma o pieza de rango adicional"),
    face_paint: dimension("omit_contextually", "source_specific", "la versión no documenta simultáneamente ocasión, material, función y motivo facial para este viajero"),
    wardrobe_profile: "male",
    wardrobe_refs: refs,
    wardrobe_visual_contract: contract(silhouette, front, back, reject),
    source_refs: [STORY_SOURCE, VARIANT_SOURCE, ...WARDROBE_SOURCES],
    continuity_markers: [...continuity, "rostro sin pintura, kana, marca clanil, joya o herida visible"],
  };
}

const WOJORO_CULTURE = travelerCulture({
  person: "Wojoro, primer viajero nombrado que se detiene cerca de Maiceo con los pies lastimados",
  chosenId: "wojoro_kotin_clay_travel",
  chosenLabel: "Kotin arena sobre Kemiisa arcilla, faja carbón, waireñas y Wom bajo",
  alternativeLabel: "torso descubierto y pieza inferior aislada para enfatizar cansancio",
  specification: "Kemiisa arcilla de manga larga bajo Kotin arena amplio hasta bajo rodillas; si'ira carbón secundaria, waireñas ocre abiertas y Wom bajo de fibra; sin patrón",
  layers: ["Kemiisa arcilla con mangas", "Kotin arena amplio", "si'ira carbón secundaria", "waireñas ocre", "Wom bajo de fibra"],
  refs: ["kemiisa_piiraneeru", "kotin_male_manta", "sira_kumusu_aamuushi", "wairenas", "wom_woma_hat"],
  footwear: "dos waireñas ocre abiertas y completas; se conservan puestas, sin sangre o vendas",
  accessories: "un Wom bajo de fibra lisa, sin banda decorada",
  silhouette: "volumen arena largo y liviano del Kotin sobre mangas arcilla, coronado por sombrero bajo",
  front: "cuello y mangas de Kemiisa, apertura del Kotin, faja secundaria y dos waireñas se leen por separado",
  back: "el Kotin conserva una gran caída posterior continua y el Wom mantiene volumen propio",
  reject: "rechazar si el Kotin se vuelve falda o poncho, si desaparece la Kemiisa o si el torso queda expuesto",
  continuity: ["rostro ancho de adulto mayor con cejas rectas", "Kotin arena, Kemiisa arcilla, Wom bajo y waireñas ocre"],
});

const EPITS_CULTURE = travelerCulture({
  person: "Epits, viajero asociado con Cerro de la Teta que se quita las sandalias al perder fuerzas",
  chosenId: "epits_indigo_ashein_travel",
  chosenLabel: "Kemiisa índigo con Asheinpalajanaa carbón, si'ira arena y waireñas terracota",
  alternativeLabel: "cuerpo descalzo y desnudo usado como imagen total del personaje",
  specification: "Kemiisa índigo de mangas completas; Asheinpalajanaa carbón cuadrado y arrollado con volumen posterior; si'ira arena secundaria y waireñas terracota que sólo quedan al lado en el estado de detención",
  layers: ["Kemiisa índigo con mangas", "Asheinpalajanaa carbón sustancial", "si'ira arena", "waireñas terracota"],
  refs: ["kemiisa_piiraneeru", "asheinpalajanaa_male_wrap", "sira_kumusu_aamuushi", "wairenas"],
  footwear: "un par de waireñas terracota: puesto en identidad y colocado junto a ambos pies sólo en el estado detenido",
  accessories: null,
  silhouette: "torso índigo cubierto y gran envolvente carbón con cola posterior, nunca una tira de cintura",
  front: "mangas, borde inferior de Kemiisa, faja y pliegue frontal del envolvente permanecen separados",
  back: "el Asheinpalajanaa conserva un volumen posterior amplio que identifica a Epits incluso sin calzado",
  reject: "rechazar si la envolvente se reduce a taparrabo, falda estrecha o cinturón, o si el estado sin sandalias elimina la ropa superior",
  continuity: ["rostro triangular adulto con nariz recta", "Kemiisa índigo y Asheinpalajanaa carbón", "mismo par terracota presente dentro de la ficha"],
});

const WOSOSOPO_CULTURE = travelerCulture({
  person: "Wososopo, viajero que se detiene por sed cerca de Rancho Grande",
  chosenId: "wososopo_jacket_ochre_travel",
  chosenLabel: "Kemiisa ocre bajo saco azul gris, base secundaria, faja, waireñas y Wo'olii",
  alternativeLabel: "pieza inferior y bolsa decorativa sin capa superior",
  specification: "Kemiisa ocre de mangas bajo saco azul gris mate abierto; base Wusi/Aichee carbón completamente secundaria, si'ira terracota, waireñas arena y Wo'olii lisa en cintura",
  layers: ["Kemiisa ocre", "saco azul gris dominante", "base Wusi/Aichee carbón secundaria", "si'ira terracota", "waireñas arena", "Wo'olii lisa"],
  refs: ["kemiisa_piiraneeru", "saco_male_layer", "wusi_aichee", "sira_kumusu_aamuushi", "wairenas", "woolii_waist_bag"],
  footwear: "dos waireñas arena completas, sin desgaste corporal explícito",
  accessories: "una Wo'olii pequeña y lisa en la cintura; ninguna vasija o arma",
  silhouette: "saco azul gris de hombros y mangas como volumen dominante sobre Kemiisa ocre",
  front: "solapas simples, mangas, camisa interior, faja, base secundaria, bolsa y calzado quedan discernibles",
  back: "el saco conserva espalda completa y la Wo'olii aparece sólo como volumen pequeño lateral",
  reject: "rechazar si el saco se vuelve uniforme militar, chaqueta vaquera, desaparece o deja el torso desnudo",
  continuity: ["rostro rectangular de adulto con mentón ancho", "saco azul gris, Kemiisa ocre, faja terracota y Wo'olii"],
});

const JUYOUIRA_CULTURE = travelerCulture({
  person: "Juyouirá, viajero cuya altura queda asociada con truenos y lluvia frecuente",
  chosenId: "juyouira_rain_kotin_travel",
  chosenLabel: "Kotin gris lluvia sobre Kemiisa verde apagado, faja ocre y waireñas carbón",
  alternativeLabel: "cuerpo semidesnudo usado como soporte de efectos de tormenta",
  specification: "Kemiisa verde trupillo de mangas completas bajo Kotin gris lluvia amplio; si'ira ocre secundaria y waireñas carbón; sin sombrero, bolsa o joya",
  layers: ["Kemiisa verde apagado", "Kotin gris lluvia amplio", "si'ira ocre secundaria", "waireñas carbón"],
  refs: ["kemiisa_piiraneeru", "kotin_male_manta", "sira_kumusu_aamuushi", "wairenas"],
  footwear: "dos waireñas carbón abiertas y completas",
  accessories: null,
  silhouette: "gran paño gris lluvia sobre mangas verdes y piernas en marcha, sin accesorios altos",
  front: "Kemiisa verde visible en cuello y mangas dentro del Kotin gris; faja y waireñas secundarias",
  back: "Kotin gris forma una caída amplia continua que dialoga con nubes sin fundirse con ellas",
  reject: "rechazar si el Kotin se vuelve nube, falda, poncho o superficie corporal; la tormenta nunca sustituye la prenda",
  continuity: ["rostro ovalado de adulto con pómulos altos", "Kotin gris lluvia, Kemiisa verde, faja ocre y waireñas carbón"],
});

const TSITSI_CULTURE = travelerCulture({
  person: "Tsitsi, viajero que queda como cerro desde el que Mareiwa actúa sobre el mar",
  chosenId: "tsitsi_terracotta_ashein_travel",
  chosenLabel: "Kemiisa terracota con Asheinpalajanaa arena, faja carbón, waireñas y Wom oscuro",
  alternativeLabel: "figura ceremonial con torso descubierto, pintura y marcas inventadas",
  specification: "Kemiisa terracota de mangas; Asheinpalajanaa arena amplio y arrollado; si'ira carbón, waireñas ocre y Wom bajo carbón sin adorno",
  layers: ["Kemiisa terracota", "Asheinpalajanaa arena sustancial", "si'ira carbón", "waireñas ocre", "Wom bajo carbón"],
  refs: ["kemiisa_piiraneeru", "asheinpalajanaa_male_wrap", "sira_kumusu_aamuushi", "wairenas", "wom_woma_hat"],
  footwear: "dos waireñas ocre abiertas y completas",
  accessories: "un Wom bajo carbón funcional, sin relación ceremonial con la honda de Mareiwa",
  silhouette: "mangas terracota y gran volumen envolvente arena coronado por sombrero oscuro bajo",
  front: "camisa, pliegue frontal, faja y sandalias son piezas inequívocas y completas",
  back: "la envolvente deja una caída posterior amplia; el sombrero no se convierte en corona",
  reject: "rechazar si hay pintura, honda personal, tocado, falda mínima, torso descubierto o fusión del personaje con Mareiwa",
  continuity: ["rostro alargado de adulto con cejas arqueadas", "Kemiisa terracota, Asheinpalajanaa arena, Wom carbón"],
});

const ITOJORO_CULTURE = travelerCulture({
  person: "Itojoro, viajero más fuerte y rápido que anima al grupo antes de quedar junto a una mata de ita",
  chosenId: "itojoro_indigo_kotin_guide",
  chosenLabel: "Kemiisa índigo bajo Kotin arena pálido, faja terracota, waireñas y Kapateera",
  alternativeLabel: "héroe desnudo o guerrero con arma y tocado",
  specification: "Kemiisa índigo de mangas; Kotin arena pálido largo y liviano; si'ira terracota secundaria, waireñas carbón y Kapateera lisa ocre cruzada para viaje",
  layers: ["Kemiisa índigo", "Kotin arena pálido", "si'ira terracota", "waireñas carbón", "Kapateera lisa"],
  refs: ["kemiisa_piiraneeru", "kotin_male_manta", "sira_kumusu_aamuushi", "wairenas", "kapateera_travel_bag"],
  footwear: "dos waireñas carbón completas; el cansancio final se expresa sin sangre, herida o suela rota",
  accessories: "una Kapateera tubular lisa ocre con correa sin patrón; ninguna arma",
  silhouette: "Kotin arena pálido largo en diagonal por la marcha y Kapateera tubular separada del torso índigo",
  front: "mangas índigo, apertura del Kotin, faja, dos sandalias y correa de bolsa legibles",
  back: "gran caída clara del Kotin y bolsa tubular con volumen propio, sin tapar toda la espalda",
  reject: "rechazar si se vuelve guerrero, corredor moderno, torso desnudo o bolsa estampada; la prenda superior no puede desaparecer",
  continuity: ["rostro adulto estrecho con nariz ligeramente curva", "Kemiisa índigo, Kotin arena pálido, faja terracota y Kapateera"],
});

const GUARAPU_CULTURE = travelerCulture({
  person: "Guarapú, último viajero nombrado que queda dormido y permanece como forma terrestre",
  chosenId: "guarapu_warm_kotin_sleep",
  chosenLabel: "Kotin arena cálido sobre Kemiisa azul gris, faja carbón, waireñas, Wom y Wo'olii",
  alternativeLabel: "cuerpo desnudo reclinado para que parezca antiguo o natural",
  specification: "Kemiisa azul gris de mangas completas bajo Kotin arena cálido; si'ira carbón, waireñas terracota, Wom ocre bajo y Wo'olii lisa; todas las capas permanecen durante el sueño",
  layers: ["Kemiisa azul gris", "Kotin arena cálido", "si'ira carbón", "waireñas terracota", "Wom ocre", "Wo'olii lisa"],
  refs: ["kemiisa_piiraneeru", "kotin_male_manta", "sira_kumusu_aamuushi", "wairenas", "wom_woma_hat", "woolii_waist_bag"],
  footwear: "dos waireñas terracota completas y visibles incluso en postura reclinada",
  accessories: "Wom ocre bajo y Wo'olii lisa; quedan apoyados de forma natural sin volverse tesoro o ajuar",
  silhouette: "volumen largo arena cálido sobre torso azul gris, adaptable a una postura horizontal sin revelar el cuerpo",
  front: "cuello azul, abertura del Kotin, faja, calzado, sombrero y bolsa se separan con claridad",
  back: "la manta conserva paño posterior amplio cuando la figura se reclina y proyecta una sombra larga",
  reject: "rechazar desnudez, mortaja, cadáver, ropa que desaparece al dormir, figura enterrada o rostro pétreo humano",
  continuity: ["rostro redondo de adulto mayor con párpados pesados", "Kotin arena cálido, Kemiisa azul gris, Wom ocre y Wo'olii"],
});

const ANONYMOUS_CULTURE = travelerCulture({
  person: "compañero Wayuu adulto sin nombre propio que se detiene después de Tsitsi",
  chosenId: "anonymous_charcoal_ashein_travel",
  chosenLabel: "Kemiisa carbón con Asheinpalajanaa ocre, faja azul gris y waireñas arena",
  alternativeLabel: "extra genérico con misma ropa de otro viajero o torso descubierto",
  specification: "Kemiisa carbón de mangas; Asheinpalajanaa ocre amplio con volumen posterior; si'ira azul gris secundaria y waireñas arena; sin sombrero, bolsa o joya",
  layers: ["Kemiisa carbón", "Asheinpalajanaa ocre sustancial", "si'ira azul gris", "waireñas arena"],
  refs: ["kemiisa_piiraneeru", "asheinpalajanaa_male_wrap", "sira_kumusu_aamuushi", "wairenas"],
  footwear: "dos waireñas arena abiertas y completas",
  accessories: null,
  silhouette: "torso carbón cubierto y gran envolvente ocre con cola posterior, sin repetir a Epits o Tsitsi",
  front: "mangas carbón, faja azul gris y pliegue ocre son legibles como capas distintas",
  back: "el envolvente ocre cae en volumen posterior propio y mantiene separación del suelo",
  reject: "rechazar si copia rostro, color o conjunto de otro viajero, si se vuelve silueta sin identidad o queda semidesnudo",
  continuity: ["rostro adulto no canonizado para ningún otro mito, con mandíbula suave", "Kemiisa carbón, Asheinpalajanaa ocre, faja azul gris y waireñas arena"],
});

const MONKII_CULTURE = {
  ...travelerCulture({
    person: "cuatro hombres Wayuu adultos como muestra editorial de los Monkii plurales; el número cuatro no pretende ser el total del relato",
    chosenId: "four_distinct_coastal_travel_sets",
    chosenLabel: "cuatro conjuntos completos distintos de viaje con Kotin, Asheinpalajanaa, saco y Kemiisa",
    alternativeLabel: "cuatro figuras uniformadas con una única pieza inferior",
    specification: "A Kotin carbón sobre Kemiisa arena; B Kemiisa azul gris con Asheinpalajanaa terracota; C saco ocre sobre Kemiisa carbón; D Kemiisa verde apagado bajo Kotin arena claro; cada uno con faja, waireñas y sólo dos cargas funcionales lisas",
    layers: ["cuatro capas superiores distintas", "cuatro fajas secundarias", "cuatro pares de waireñas", "dos cargas funcionales distribuidas"],
    refs: ["kemiisa_piiraneeru", "kotin_male_manta", "asheinpalajanaa_male_wrap", "saco_male_layer", "sira_kumusu_aamuushi", "wairenas", "kapateera_travel_bag", "woolii_waist_bag"],
    footwear: "cuatro pares de waireñas en tonos distintos, completos y asignados a una identidad",
    accessories: "una Kapateera lisa para A y una Wo'olii lisa para C; B y D sin carga",
    silhouette: "cuatro contornos inequívocos: manta larga, gran envolvente, saco con mangas y segunda manta liviana de color diferente",
    front: "cada torso está cubierto y separa capa dominante, faja, base secundaria, calzado y carga cuando corresponde",
    back: "Kotin y Asheinpalajanaa conservan grandes volúmenes posteriores; el saco mantiene espalda y mangas completas",
    reject: "rechazar clones, uniforme, cuatro torsos desnudos, ponchos iguales o piezas inferiores dominantes",
    continuity: ["exactamente cuatro identidades editoriales distintas", "A carbón-arena, B azul-terracota, C ocre-carbón, D verde-arena"],
  }),
  wardrobe_profile: "mixed_collective",
  collective_wardrobe: {
    variation_axis: "edad aparente, capa dominante, color, carga y distancia costera",
    anti_uniformity_rule: "ninguno de los cuatro hombres repite el conjunto completo, rostro, paleta o carga de otro",
    member_groups: [
      {
        id: "monkii_mantas",
        scope: "dos adultos de edades aparentes distintas",
        ensemble: "A con Kotin carbón sobre Kemiisa arena y Kapateera; D con Kotin arena claro sobre Kemiisa verde, sin carga",
        rationale: "dos mantas masculinas completas se diferencian por color, edad, camisa interior y carga",
        source_refs: [STORY_SOURCE, "paz_ipuana_aleya_tomo_ii_2016", "artesanias_tejeduria_wayuu_2016"],
        wardrobe_profile: "male",
        wardrobe_refs: ["kotin_male_manta", "kemiisa_piiraneeru", "sira_kumusu_aamuushi", "wairenas", "kapateera_travel_bag"],
      },
      {
        id: "monkii_wrap_and_jacket",
        scope: "dos adultos distintos",
        ensemble: "B con Kemiisa azul y Asheinpalajanaa terracota; C con saco ocre, Kemiisa carbón y Wo'olii",
        rationale: "envolvente y saco producen dos siluetas completas no uniformes para el borde costero",
        source_refs: [STORY_SOURCE, "paz_ipuana_aleya_tomo_ii_2016", "banrep_moser_hombres_wayuu_1961"],
        wardrobe_profile: "male",
        wardrobe_refs: ["kemiisa_piiraneeru", "asheinpalajanaa_male_wrap", "saco_male_layer", "sira_kumusu_aamuushi", "wairenas", "woolii_waist_bag"],
      },
    ],
  },
};

const ORGANIZATION_CULTURE = {
  cultural_scope: "wayuu",
  person_scope: "seis adultos, tres mujeres y tres hombres, como muestra editorial reversible de los primeros Wayuu; no son seis clanes ni el total creado",
  temporal_register: "mythic_indeterminate",
  time_basis: "la versión describe creación y organización pero no ropa; la escena usa repertorios femeninos y masculinos Wayuu completos como traducción editorial reversible y no como uniforme de origen o reconstrucción prehispánica",
  narrative_moment: "personas ya creadas que se relacionan con pares animales, rutas y lugares después de salir de una cavidad, sin mostrar marcas claniles",
  activity_context: "caminar en pares autónomos, cuidar animales y ocupar distintas profundidades del territorio sin recibir personas como bienes",
  occasion_context: "visit_or_exchange",
  considered_ensembles: [
    {
      id: "six_varied_complete_wayuu_sets",
      label: "tres Wayuushein completas y tres sistemas masculinos completos, todos diferenciados",
      fit: "mejor traducción reversible para pluralidad, parentesco y agencia",
      rationale: "la diversidad de capas, edades y actividades evita inventar dieciocho uniformes claniles y mantiene a mujeres y hombres como sujetos",
      source_refs: [STORY_SOURCE, ...WARDROBE_SOURCES],
    },
    {
      id: "one_primordial_uniform",
      label: "una misma prenda mínima repetida como supuesto traje primordial",
      fit: "rechazado",
      rationale: "no está descrito por la fuente y produciría desnudez, uniformidad y falsa antigüedad",
      source_refs: [STORY_SOURCE, "icanh_organizacion_social_guajira_1950"],
    },
  ],
  chosen_ensemble: {
    id: "six_varied_complete_wayuu_sets",
    rationale: "seis conjuntos legiblemente distintos representan pluralidad sin afirmar número total, clan, jerarquía o marca",
    specification: "tres mujeres con Wayuushein largas lisas índigo, terracota y verde gris sobre pecheras; tres hombres con Kemiisa y Kotin, Kemiisa y Asheinpalajanaa, y Kemiisa con saco; todos con waireñas o abarcas y sólo cargas funcionales lisas",
    layers: ["tres pecheras y tres Wayuushein largas", "tres capas masculinas superiores distintas", "seis pares de calzado", "dos cargas funcionales lisas distribuidas"],
  },
  attire: dimension("include_contextual", "editorial_reversible", "la fuente no fija vestuario pero la escena exige personas completas y diversas, no cuerpos primordiales desnudos", "tres Wayuushein con pechera y tres conjuntos masculinos con Kemiisa más Kotin, Asheinpalajanaa o saco; sin patrón"),
  footwear: dimension("include_contextual", "institutional_general", "el calzado completa cada identidad y evita convertir pies descalzos en signo de origen", "seis pares distintos de waireñas o abarcas, abiertos y completos"),
  accessories: dimension("include_contextual", "institutional_general", "dos cargas lisas ayudan a diferenciar actividad sin crear rango", "un Wom bajo y una Wo'olii lisa distribuidos en personas distintas; ningún hierro o joya"),
  face_paint: dimension("omit_contextually", "source_specific", "el episodio no documenta ocasión, material, función ni motivo facial; tampoco autoriza pintura para distinguir clanes"),
  wardrobe_profile: "mixed_collective",
  wardrobe_refs: ["wayuushein_manta", "pechera_female_underlayer", "kemiisa_piiraneeru", "kotin_male_manta", "saco_male_layer", "sira_kumusu_aamuushi", "wairenas", "wom_woma_hat", "woolii_waist_bag"],
  wardrobe_visual_contract: contract(
    "seis siluetas completas y no uniformes: tres mantas femeninas largas, una manta masculina, una envolvente sustancial y un saco con mangas",
    "cada torso queda cubierto y pecheras, camisas, fajas, capas y calzado se leen como piezas separadas",
    "las mantas y envolventes conservan caída posterior; el saco conserva hombros, espalda y mangas",
    "rechazar si se repite un uniforme, si algún cuerpo queda reducido a cintura, si aparecen dieciocho emblemas o si una mujer se representa como objeto entregado",
  ),
  source_refs: [STORY_SOURCE, ...WARDROBE_SOURCES],
  continuity_markers: [
    "exactamente seis adultos como muestra editorial: tres mujeres y tres hombres",
    "seis rostros, edades aparentes, conjuntos y posiciones distintas",
    "ninguna pintura, kana, marca clanil, hierro diseñado, frontera, corona o gesto de posesión",
  ],
  collective_wardrobe: {
    variation_axis: "género, edad aparente, capa dominante, color, cuidado animal y distancia territorial",
    anti_uniformity_rule: "ninguna de las seis personas repite conjunto completo o se identifica mediante emblema clanil",
    member_groups: [
      {
        id: "first_women_sample",
        scope: "tres mujeres adultas de edades aparentes distintas",
        ensemble: "Wayuushein largas índigo, terracota y verde gris sobre pecheras diferentes, con waireñas",
        rationale: "variación dentro de una tipología femenina completa sin patrones o jerarquías",
        source_refs: [STORY_SOURCE, "artesanias_tejeduria_wayuu_2016", "mincultura_caracterizacion_wayuu"],
        wardrobe_profile: "female",
        wardrobe_refs: ["wayuushein_manta", "pechera_female_underlayer", "wairenas"],
      },
      {
        id: "first_men_sample",
        scope: "tres hombres adultos de edades aparentes distintas",
        ensemble: "Kemiisa con Kotin, Kemiisa con Asheinpalajanaa y Kemiisa con saco, cada uno con faja y calzado",
        rationale: "tres siluetas masculinas sustanciales y no uniformes, sin torso descubierto",
        source_refs: [STORY_SOURCE, "paz_ipuana_aleya_tomo_ii_2016", "icanh_organizacion_social_guajira_1950"],
        wardrobe_profile: "male",
        wardrobe_refs: ["kemiisa_piiraneeru", "kotin_male_manta", "asheinpalajanaa_male_wrap", "saco_male_layer", "sira_kumusu_aamuushi", "wairenas"],
      },
    ],
  },
};

function simple({ title, focus, scene, must, avoid = [], culture, human = false }) {
  return {
    title,
    focus,
    scene,
    must_show: must,
    avoid: [...COMMON_AVOID, ...avoid],
    ...(culture ? { material_culture: culture } : {}),
    ...(human ? { human_presenting: true } : {}),
  };
}

function identityDirection(name, visual, culture) {
  return simple({
    title: `${name} · identidad del viajero completamente vestido`,
    focus: `Ficha cuadrada con exactamente TRES vistas de la misma y única persona adulta: tres cuartos frontal, perfil completo y tres cuartos posterior. ${visual} Las tres vistas mantienen rostro, proporciones, peinado, capas, colores, faja, calzado y accesorios. La postura es de marcha atenta antes de la detención; no hay heridas, muerte, petrificación o dolor explícito.`,
    scene: "Un solo sendero de Alta Guajira construido en siete profundidades; tres vistas a distancias distintas, cardones multicaules bajos, matorral seco y loma lejana. El territorio llena los cuatro bordes y oculta soporte, cartón y estudio.",
    must: [
      "exactamente tres vistas de una única persona: tres cuartos frontal, perfil y tres cuartos posterior",
      "mismo rostro, peinado, estatura y conjunto completo en las tres vistas",
      "capa superior o de cuerpo entero dominante, faja secundaria, dos piezas de calzado y accesorio sólo cuando está contratado",
      "las dos piezas de calzado están puestas en los pies; CERO sandalias, zapatos, bolsas o sombreros sueltos en el suelo y CERO accesorios no contratados",
      "manos, pies y caída posterior legibles sin recortes ni fusión de prendas",
      "vegetación de fondo limitada a cardones de varios tallos rectos desde la base y arbustos bajos no espinosos; CERO agaves, aloes, yuccas o rosetas de hojas",
      "siete planos físicos con aire, oclusiones, cantos internos y sombras proyectadas",
      "mundo full bleed sin paneles, etiquetas, base, borde o estudio",
    ],
    avoid: ["second identity, woman, Mareiwa body, hill transformation, corpse, wounded feet, loose spare footwear, duplicate accessories, uncontracted bag or hat, agave, aloe, yucca, spiky leaf rosette or outfit change"],
    culture,
    human: true,
  });
}

function twoStateDirection(name, humanState, landformState, visual, culture, extraMust = [], extraAvoid = []) {
  return simple({
    title: `${name} · viajero y forma territorial`,
    focus: `Hoja horizontal 16:9 en un solo territorio continuo con exactamente DOS apariciones de la misma identidad. A la izquierda: ${humanState}. A la derecha: ${landformState}. ${visual} La correspondencia se construye con el mismo contorno, paleta y pliegue de sombra; no hay cuerpo dentro de roca, cadáver, estatua o transformación digital.`,
    scene: "Un sendero continuo cruza diez profundidades desde figura humana a relieve; pliegues del suelo repiten hombros y caída de la prenda como perfil geológico abstracto. No hay línea divisoria ni borde de maqueta.",
    must: [
      "exactamente dos apariciones: una humana completamente vestida y una forma territorial no antropomorfa",
      "continuidad por contorno, paleta, pliegue y sombra, nunca por anatomía atrapada en piedra",
      "la figura humana conserva todas las capas, faja, calzado y accesorios de identidad",
      "CERO sombreros, bolsas, animales, hamacas o accesorios que no estén contratados para esta identidad",
      "vegetación limitada a cardones de varios tallos desde la base y arbustos bajos no espinosos; CERO agaves, aloes, yuccas o rosetas",
      "postura cansada sin sangre, heridas abiertas, cadáver o sufrimiento gráfico",
      "diez planos full bleed con camino, aire, oclusiones y sombras físicas",
      ...extraMust,
    ],
    avoid: ["stone statue, human face in mountain, body fused with rock, corpse, skeleton, x-ray, gore, magic glow, speed lines, uncontracted hat, uncontracted bag, extra animal, hammock, agave, aloe, yucca or spiky leaf rosette", ...extraAvoid],
    culture,
    human: true,
  });
}

export const WAYUU_SERRANIAS_DIRECTIONS_V3 = {
  "wojoro__identity_sheet": identityDirection("Wojoro", "Kemiisa arcilla, Kotin arena, si'ira carbón, waireñas ocre y Wom bajo deben ser inequívocos, no una túnica genérica. Wojoro NO lleva bolsa: cero bolso, mochila, cartera o correa cruzada.", WOJORO_CULTURE),
  "wojoro__state_sheet": twoStateDirection("Wojoro", "Wojoro se detiene de pie cerca de Maiceo, inclinado y con pasos cortos, pero conserva ambos pies cubiertos", "una LOMA MUY BAJA, MACIZA y ancha repite únicamente el arco exterior del Kotin y la sombra del Wom sin rostro; su cima queda por debajo de la cabeza humana y no contiene hueco", "Kemiisa, Kotin, Wom y waireñas permanecen completos en el estado humano. La loma es una masa sólida de estratos casi horizontales: CERO cueva, túnel, arco perforado, puerta, boca o cavidad.", WOJORO_CULTURE, ["loma sólida mucho más baja que Wojoro, de cima redondeada y estratos casi horizontales"], ["cave, tunnel, hollow arch, doorway, mouth, grotto, mountain taller than Wojoro"]),

  "epits__identity_sheet": identityDirection("Epits", "Kemiisa índigo, Asheinpalajanaa carbón sustancial, si'ira arena y exactamente UN PAR de waireñas terracota forman el conjunto; las dos sandalias están puestas en sus dos pies en las tres vistas y no hay sandalias sueltas o duplicadas. La envolvente nunca se reduce a cintura.", EPITS_CULTURE),
  "epits__state_sheet": twoStateDirection(
    "Epits",
    "Epits está sentado y completamente vestido; exactamente UN PAR de waireñas terracota, dos sandalias, queda junto a sus pies y no existe otro calzado",
    "un cerro aislado de perfil triangular repite el volumen posterior del Asheinpalajanaa, sin cuerpo o sandalias sobre la roca",
    "La retirada de sandalias es un hecho puntual del relato y no desnudez general: Kemiisa, envolvente y faja permanecen intactos.",
    EPITS_CULTURE,
    ["exactamente dos sandalias terracota juntas sólo en el suelo del estado humano y ningún calzado adicional", "Epits no lleva sombrero, bolsa o accesorio: su cabeza permanece descubierta igual que en identidad"],
    ["extra sandals, shoes still worn and duplicated, hat, bag, bare torso or fetishized bare feet"],
  ),

  "wososopo__identity_sheet": identityDirection("Wososopo", "Saco azul gris sobre Kemiisa ocre, base secundaria, si'ira, WAIREÑAS ABIERTAS arena y Wo'olii producen una silueta histórica completa, sin uniforme militar. Cada pie muestra dedos, talón y tiras; cero zapato cerrado, mocasín o alpargata.", WOSOSOPO_CULTURE),
  "wososopo__state_sheet": twoStateDirection("Wososopo", "Wososopo se detiene apoyando una mano cerrada sobre su propia rodilla, sin botella, herida, gesto agónico o sombrero", "una altura seca y escalonada cerca de Rancho Grande repite hombros y faldones del saco", "El saco azul gris, Kemiisa ocre, Wo'olii y waireñas abiertas siguen visibles en la figura humana; su cabeza permanece descubierta y la forma terrestre sólo hereda color y perfil.", WOSOSOPO_CULTURE, ["cabeza descubierta, ninguna clase de sombrero", "waireñas abiertas con dedos y talones visibles"], ["hat, closed shoes, loafers, boots or outfit mismatch"]),

  "juyouira__identity_sheet": identityDirection("Juyouirá", "Kotin gris lluvia sobre Kemiisa verde apagado, si'ira ocre y waireñas carbón forman un conjunto completo sin efectos meteorológicos sobre el cuerpo.", JUYOUIRA_CULTURE),
  "juyouira__state_sheet": twoStateDirection(
    "Juyouirá",
    "Juyouirá se detiene bajo una sombra pequeña y localizada de nube, con ropa completa y sin cuerpo sufriente",
    "una altura gris verdosa recibe tres capas de nubes de papel que producen lluvia localizada y una única línea de trueno como pliegue oscuro, sin relámpago gráfico",
    "La lluvia pertenece a la altura; no convierte la manta en nube ni el rostro en deidad.",
    JUYOUIRA_CULTURE,
    ["tres capas físicas de nube y lluvia localizada sólo sobre la forma territorial"],
    ["lightning bolt icon, storm god, rain covering the whole peninsula, wet transparent clothing or dramatic agony"],
  ),

  "tsitsi__identity_sheet": identityDirection("Tsitsi", "Kemiisa terracota, Asheinpalajanaa arena, si'ira carbón, waireñas ocre y Wom bajo forman la identidad; no porta la honda de Mareiwa.", TSITSI_CULTURE),
  "tsitsi__state_sheet": twoStateDirection("Tsitsi", "Tsitsi se detiene y mira hacia la costa con todas sus prendas y ninguna herramienta divina", "un cerro de estratos arena y terracota ofrece un punto alto hacia el mar; una banda de sombra CURVA, HORIZONTAL, VACÍA y no antropomorfa indica futura presencia de Mareiwa", "Tsitsi no se fusiona con Mareiwa y no sostiene honda o piedra. La sombra no tiene cabeza, torso, brazos, piernas, manos o gesto.", TSITSI_CULTURE, ["costa lejana y una única banda de sombra curva horizontal, sin anatomía ni cuerpo divino"], ["Mareiwa as a man, human-shaped shadow, head, torso, arms, legs, hands, sling in Tsitsi hand, face on hill or coastal map"]),

  "itojoro__identity_sheet": identityDirection("Itojoro", "Kemiisa índigo, Kotin arena pálido, si'ira terracota, waireñas carbón y Kapateera lisa distinguen al guía sin arma o tocado.", ITOJORO_CULTURE),
  "itojoro__state_sheet": simple({
    title: "Itojoro · guía, último tramo y cerro con Ita",
    focus: "Hoja horizontal 16:9 con exactamente TRES apariciones de una misma identidad: A) Itojoro erguido y ágil anima la marcha con la palma abierta, Kemiisa índigo, Kotin arena pálido y Kapateera; B) el mismo Itojoro cerca de Akuwa avanza con pasos cortos, ropa intacta y pies sin herida visible; C) una altura no antropomorfa repite su diagonal, con exactamente UNA mata de Ita o totumo en la cima. La mata no crece del cuerpo y ninguna forma es estatua.",
    scene: "Un camino continuo cruza doce profundidades desde loma alta a planicie y una altura final; las dos figuras humanas se separan por distancia y la forma territorial cierra el fondo. Mundo full bleed sin paneles.",
    must: [
      "exactamente dos apariciones humanas de Itojoro y una forma territorial, tres estados totales",
      "idénticos rostro, Kemiisa índigo, Kotin arena pálido, faja, waireñas y Kapateera en ambas apariciones humanas",
      "estado de guía con palma abierta y estado final cansado sin sangre, vendas, cadáver o dolor gráfico",
      "exactamente una mata de Ita o totumo sobre la cima, construida como planta independiente",
      "vegetación restante limitada a cardones de varios tallos rectos desde la base y arbustos bajos no espinosos; CERO agaves, aloes, yuccas o rosetas",
      "continuidad por diagonal, paleta y sombra, no cuerpo atrapado o rostro en montaña",
      "doce planos full bleed con aire, oclusiones y sombras físicas",
    ],
    avoid: ["weapon, chief headdress, race costume, wounded feet, blood, dead body, human-shaped mountain, giant statue, plant growing from a person, agave, aloe, yucca or spiky leaf rosette"],
    culture: ITOJORO_CULTURE,
    human: true,
  }),

  "guarapu__identity_sheet": identityDirection("Guarapú", "Kotin arena cálido, Kemiisa azul gris, si'ira, waireñas, Wom y Wo'olii forman un conjunto de viaje completo y apto para continuidad reclinada.", GUARAPU_CULTURE),
  "guarapu__state_sheet": simple({
    title: "Guarapú · viajero, sueño y relieve tendido",
    focus: "Hoja 16:9 con exactamente TRES apariciones relacionadas: A) Guarapú camina despierto y completamente vestido; B) el mismo Guarapú duerme de lado sobre el suelo, respiración tranquila, Kotin, Kemiisa, waireñas, Wom y Wo'olii aún presentes; C) un relieve largo y bajo repite la silueta horizontal mediante estratos sin rostro, cuerpo o tumba. Dormir no se convierte en muerte.",
    scene: "Un único terreno continuo de once capas pasa de sendero a sombra de descanso y loma alargada; amanecer suave, sin paneles, pedestal o borde.",
    must: [
      "exactamente dos apariciones humanas de la misma identidad y un relieve no antropomorfo",
      "mismo conjunto completo en marcha y sueño, incluidas dos waireñas, Wom y Wo'olii",
      "CERO animales, hamaca, corral, cesta, casa o utilería adicional; sólo Guarapú y el relieve",
      "postura de sueño lateral tranquila con manos visibles, sin mortaja, herida o cadáver",
      "relieve largo por estratos y sombra, nunca estatua humana o tumba",
      "once profundidades, aire, oclusiones y sombras físicas",
      "full bleed sin soporte exterior",
    ],
    avoid: ["naked sleeper, corpse, burial, shroud, grave, giant sleeping statue, face in mountain, missing clothes, dream bubble, magic aura, animal, donkey, goat, hammock, corral, basket, house, agave, aloe, yucca or spiky leaf rosette"],
    culture: GUARAPU_CULTURE,
    human: true,
  }),

  "companero_anonimo_serranias__identity_sheet": identityDirection("Compañero anónimo", "Kemiisa carbón, Asheinpalajanaa ocre, si'ira azul gris y waireñas arena lo distinguen como persona no nombrada y no como extra clonado.", ANONYMOUS_CULTURE),
  "companero_anonimo_serranias__state_sheet": simple({
    title: "Compañero anónimo · viajero, detención y cerro sin nombre",
    focus: "Hoja 16:9 con exactamente TRES apariciones: A) el compañero anónimo camina detrás de Tsitsi; B) el mismo adulto se detiene inclinado con ambas manos sobre sus propias rodillas, completamente vestido y sin tocar el vientre; C) un cerro sin nombre ni rasgo humano repite el gran pliegue ocre del Asheinpalajanaa. La ficha reconoce su presencia sin inventar nombre, biografía o fisonomía heroica.",
    scene: "Un sendero de diez capas mantiene al resto de la expedición fuera de cuadro; la identidad aparece en primer y medio plano y el cerro al fondo dentro de un mundo continuo full bleed.",
    must: [
      "exactamente dos apariciones humanas de la misma persona y una forma territorial",
      "Kemiisa carbón, Asheinpalajanaa ocre, faja azul gris y waireñas arena completos en ambos estados humanos",
      "gesto de cansancio sobrio sin herida, hambre gráfica, cuerpo muerto o manos sobre el abdomen",
      "vegetación limitada a cardones multicaules y arbustos bajos no espinosos; CERO agaves, aloes, yuccas o rosetas",
      "cerro no antropomorfo y no nombrado, conectado sólo por pliegue, color y sombra",
      "diez profundidades físicas y soporte exterior oculto",
    ],
    avoid: ["invented proper name, duplicate of Tsitsi, anatomical stomach, emaciation, corpse, stone body, face in hill, extra travelers, agave, aloe, yucca or spiky leaf rosette"],
    culture: ANONYMOUS_CULTURE,
    human: true,
  }),

  "monkii__group_grammar": simple({
    title: "Los Monkii · pluralidad viajera y morros costeros",
    focus: "Gramática 16:9 con exactamente CUATRO hombres Wayuu adultos como muestra editorial, no total del relato. Cada identidad aparece una sola vez en marcha cerca del borde marino con conjunto completo distinto: A Kotin carbón y Kemiisa arena; B Kemiisa azul gris y Asheinpalajanaa terracota; C saco ocre y Kemiisa carbón; D Kotin arena claro y Kemiisa verde. Todas las telas, fajas y cargas son COMPLETAMENTE LISAS, de un solo color por pieza: cero rayas, grecas, rombos, bordados, impresos o franjas multicolor. Detrás hay exactamente CUATRO morros costeros de perfiles diferentes que retoman colores y pliegues sin parecer cuerpos. No se asigna uno a uno ni se afirma que cuatro sea el número tradicional.",
    scene: "Costa oblicua full bleed en doce profundidades: piedra cercana, cuatro figuras escalonadas, franja de agua, cuatro morros y horizonte. Las personas no forman fila ceremonial ni miran a cámara.",
    must: [
      "exactamente cuatro hombres como muestra editorial, todos con rostro, edad aparente y conjunto completo distintos",
      "Kotin carbón; Asheinpalajanaa terracota; saco ocre; Kotin arena claro como cuatro siluetas dominantes no uniformes",
      "dos cargas funcionales pequeñas y lisas como máximo; todas las fajas, bolsas y prendas sin un solo patrón, franja multicolor, greca o símbolo",
      "exactamente cuatro morros costeros no antropomorfos y de perfiles diferentes",
      "ninguna asociación gráfica uno a uno, número total afirmado, marca, emblema o texto",
      "doce profundidades con costa, agua, aire, oclusiones y sombras físicas",
      "full bleed sin panel, base, borde o estudio",
    ],
    avoid: ["uniform party, four loincloths, bare torsos, warriors, ceremony, clan delegation, four human-shaped rocks, labels, arrows, patterned bag, geometric motif, stripes, embroidery, multicolor sash, kana or clan mark"],
    culture: MONKII_CULTURE,
    human: true,
  }),

  "transformacion_viajeros_serranias__phenomenon_rule": simple({
    title: "Viajeros y serranías · marcha que permanece como territorio",
    focus: "Regla panorámica 16:9 que conserva el ORDEN de una marcha mediante nueve pequeñas señales textiles sin cuerpos completos: arena-arcilla para Wojoro, índigo-carbón para Epits, azul gris-ocre para Wososopo, gris-verde para Juyouirá, terracota-arena para Tsitsi, carbón-ocre para el compañero anónimo, índigo-arena pálido para Itojoro, cuatro fibras costeras trenzadas para Monkii y arena cálido-azul gris para Guarapú. Cada señal se pliega gradualmente dentro del suelo y reaparece como un perfil de altura distinto en el mismo orden. Mareiwa es sólo una sombra territorial curva por encima del trayecto. No hay cuerpos convertidos, tumbas o estatuas.",
    scene: "Ruta continua de quince profundidades desde Uchi Juroteka hasta costa: señales cercanas, pliegues intermedios, cadena de alturas y mar lejano. El terreno nunca se divide en paneles.",
    must: [
      "nueve posiciones narrativas ordenadas, con Monkii expresado como una sola posición plural de cuatro fibras",
      "cada paleta y pliegue reaparece como perfil territorial distinto sin mostrar cuerpo atrapado",
      "una única sombra territorial curva como presencia de Mareiwa, sin rostro, mano o figura humana",
      "camino continuo desde serranía de partida hasta costa, sin mapa o coordenadas",
      "quince profundidades, aire, oclusiones, sombras y cantos internos de papel",
      "full bleed sin texto, flechas, paneles o soporte exterior",
    ],
    avoid: ["people turning to stone on screen, corpses, nine statues, faces in mountains, map labels, numbered route, lightning or divine giant"],
  }),

  "retiro_mar_serranias__phenomenon_rule": simple({
    title: "Mareiwa desde Tsitsi · honda, piedra, mar retirado y pozos salados",
    focus: "Regla 16:9 de CUATRO estados materiales dentro de una costa continua: 1) una honda de fibra vacía descansa sobre la cima abstracta de Tsitsi; 2) exactamente UNA piedra oscura aparece suspendida en un arco de tres pliegues tensos, sin mano o impacto; 3) nueve bandas de agua azul mate se repliegan físicamente hacia la costa de Kasuto; 4) exactamente CINCO pozos bajos conservan papel salino blanco y azul en el terreno descubierto. Mareiwa se expresa sólo como sombra curva sobre la honda. No hay cuerpo divino, tsunami o mapa.",
    scene: "Panorama costero de catorce profundidades: cima cercana, arco de piedra, mar en retroceso, nueva planicie y cinco pozos. El mismo suelo y horizonte atraviesan los cuatro estados sin divisores.",
    must: [
      "una honda de fibra vacía, exactamente una piedra y tres pliegues de arco sin mano o cuerpo",
      "nueve bandas físicas de mar que retroceden de forma gradual, no ola destructiva",
      "exactamente cinco pozos salinos bajos como huella persistente",
      "sombra territorial abstracta como única presencia de Mareiwa",
      "catorce profundidades full bleed con continuidad de suelo y horizonte",
      "magia por tensión, desplazamiento, oclusión y huella material, nunca VFX",
    ],
    avoid: ["man throwing stone, giant hand, sling weapon attack, tsunami, drowning, split sea, biblical Moses scene, map, labels or glowing trajectory"],
  }),

  "morva_serranias__botanical_sheet": simple({
    title: "Morva · arbusto de frutos negros con identidad abierta",
    focus: "Ficha cuadrada con exactamente TRES estados de una misma planta editorial no identificada: brote bajo, arbusto adulto SIN FRUTOS y una única rama de detalle. La fuente sólo fija que es una mata o arbusto de frutos negros comestibles para aves y personas. SÓLO la rama de detalle lleva EXACTAMENTE NUEVE frutos negros mate: tres racimos claramente separados de TRES frutos cada uno, 3 + 3 + 3 = 9 TOTAL. No hay ningún otro fruto en brote, arbusto, fondo o suelo. La morfología reversible usa varios tallos delgados desde la base y hojas pequeñas ovaladas; no se afirma especie, parentesco botánico o uso medicinal.",
    scene: "Parche semiarido de siete capas con planta joven al frente, arbusto medio y detalle de rama al fondo cercano; soporte oculto y territorio full bleed.",
    must: ["exactamente tres estados de una misma planta no identificada", "exactamente nueve frutos negros mate en tres grupos separados de tres, todos únicamente en la rama de detalle", "cero frutos en el brote, el arbusto adulto, el fondo o el suelo", "arbusto multirramificado bajo y hojas pequeñas ovaladas como traducción reversible", "ninguna etiqueta, especie, receta, cesta o persona", "siete profundidades físicas y full bleed"],
    avoid: ["blackberry, blueberry, grape, coffee, nightshade, medicinal claim, poison symbol, jewelry berries, glowing fruit or potted plant"],
  }),

  "dispersion_semillas_aves_serranias__phenomenon_rule": simple({
    title: "Wampiray y Urui · frutos, vuelo y germinación",
    focus: "Regla panorámica 16:9 con exactamente DOS especies funcionales ya modeladas: cuatro pavas Wampiray de cuerpo robusto y cuatro turpiales Urui más pequeños. Las aves comen frutos negros de Morva en un parche y atraviesan seis planos; semillas mate caen como pequeñas piezas separadas, sin excremento visible, y germinan en cinco familias de plantas al otro extremo. Esas cinco formas son: UN cardón multicaul con tallos rectos desde la base; UNA maschura de tallos flexibles y hojas lanceoladas; UNA sangre de toro vegetal de tallos vino y hojas redondeadas; UN sojoo arbustivo de ramas arqueadas; UN Morva multirramificado de hojas ovaladas. CERO plantas en roseta y CERO hojas largas puntiagudas radiando desde un centro. La causalidad se lee por color y posición, no flechas o aura.",
    scene: "Territorio continuo de catorce capas desde parche verde localizado a planicie seca; aves escalonadas por profundidad, semillas en el aire medio y cinco grupos vegetales al fondo.",
    must: ["exactamente cuatro pavas y cuatro turpiales, ocho aves total", "frutos negros de Morva sólo en el parche inicial", "semillas mate visibles sin excremento, asco o cuerpo abierto", "exactamente cinco familias vegetales finales claramente separadas: un cardón multicaul y cuatro plantas no espinosas; cero rosetas", "catorce profundidades full bleed y magia por transporte, caída y germinación"],
    avoid: ["bird swarm, one generic species, blood, feces spectacle, glowing seeds, arrows, labels, crop rows, saguaro, rosette plants or tropical rainforest"],
  }),

  "maschura_serranias__botanical_sheet": simple({
    title: "Maschura · morfología editorial reversible",
    focus: "Ficha cuadrada de una planta cuyo nombre aparece en la fuente pero cuya especie no está resuelta. Se muestran exactamente TRES estados de un mismo modelo editorial: roseta NO, sino brote de dos hojas opuestas; planta adulta baja con EXACTAMENTE SEIS tallos flexibles y hojas lanceoladas blandas; y rama seca de detalle con EXACTAMENTE SEIS tallos. Cada uno de esos seis tallos termina en UNA cápsula mate: 1 + 1 + 1 + 1 + 1 + 1 = SEIS CÁPSULAS TOTAL. Organiza las cápsulas como dos grupos visuales separados de tres, 3 + 3, para que sean contables. Deben verse las seis completas; no cinco, no siete. CERO cápsulas en el brote, la planta adulta, el fondo o el suelo. Esta morfología sólo diferencia visualmente el referente y no se publica como identificación botánica.",
    scene: "Suelo semiarido de siete profundidades con los tres estados escalonados, cardón desenfocado lejano y ninguna maceta o mesa.",
    must: ["exactamente tres estados coherentes", "exactamente seis tallos secos con exactamente seis cápsulas mate, dispuestas como dos grupos separados de tres", "cero séptima cápsula y cero cápsulas fuera de la rama seca", "hojas blandas no espinosas y ausencia de roseta", "declaración visual abierta sin etiqueta o especie", "siete capas full bleed"],
    avoid: ["seventh capsule, extra pod, capsule on adult plant, capsule on seedling, agave, aloe, yucca, bromeliad, cactus, corn, wheat, exact scientific species, herbarium label, medicinal claim or flowers shaped as symbols"],
  }),

  "sangre_toro_planta_serranias__botanical_sheet": simple({
    title: "Sangre de toro vegetal · no confundir con el ave",
    focus: "Ficha cuadrada de una planta vernacular escrita 'sandre de toro' en la fuente y deliberadamente no identificada. Exactamente TRES estados del mismo modelo editorial: brote sin fruto, planta adulta sin fruto de tallos rojizos oscuros con hojas verdes redondeadas, y UNA rama de detalle con EXACTAMENTE CINCO frutos o cápsulas rojo vino mate, cinco total en toda la imagen. Las cinco cápsulas están completas, separadas y contables: no cuatro, no seis. No aparece ningún pájaro, pluma, sangre, cabeza de toro o especie científica.",
    scene: "Parche de suelo ocre en siete planos, con tres estados a distintas distancias y sombras físicas profundas. Mundo full bleed sin herbario o estudio.",
    must: ["exactamente tres estados de una misma planta abierta", "tallos rojo oscuro, hojas verdes redondeadas y exactamente cinco cápsulas vino mate", "ningún ave Sangre Toro ni iconografía bovina", "ninguna sangre, herida, medicina, etiqueta o identificación científica", "siete profundidades full bleed"],
    avoid: ["bird, feathers, bull, horns, blood splash, red magic, ruby fruit, poinsettia, exact species, text, label or pot"],
  }),

  "sojoo_serranias__botanical_sheet": simple({
    title: "Sojoo · fruto asociado con miel, especie abierta",
    focus: "Ficha cuadrada con exactamente TRES estados de un mismo modelo vegetal no identificado: planta joven, arbusto adulto de ramas arqueadas y detalle de exactamente CUATRO frutos ámbar mate abiertos sólo lo suficiente para mostrar pulpa fibrosa. Una fina fibra color miel conecta los frutos con un pequeño depósito natural sobre una hoja, sin cuenco, abeja, panal, receta o extracción humana. La fuente afirma relación con miel pero no autoriza método o especie.",
    scene: "Suelo seco con humedad localizada en siete capas; los tres estados llenan el cuadro y todo soporte permanece oculto.",
    must: ["exactamente tres estados del mismo modelo abierto", "exactamente cuatro frutos ámbar mate y una sola fibra color miel", "miel como propiedad narrativa sin receta, herramienta o persona", "ninguna especie científica o uso medicinal", "siete profundidades full bleed"],
    avoid: ["beehive, bees, honey jar, spoon, recipe, syrup advertisement, agave nectar, glowing sap, ritual offering, label or botanical certainty"],
  }),

  "ita_totumo_serranias__botanical_sheet": simple({
    title: "Ita o totumo de Itojoro · mata de la cima",
    focus: "Ficha cuadrada con exactamente TRES vistas del mismo árbol o mata editorial basado sólo en el nombre ita o totumo del relato: planta joven, individuo adulto bajo de tronco corto y copa abierta, y rama con exactamente TRES frutos globosos verde mate nacidos cerca de ramas principales. La ficha no afirma variedad, edad, lugar verificable o que el árbol sea el cuerpo de Itojoro.",
    scene: "Cima estratificada de papel en ocho profundidades, con viento visible por inclinación de hojas y loma seca al fondo; no hay maceta, persona o señal.",
    must: ["exactamente tres estados o vistas del mismo modelo", "tronco corto, copa abierta y exactamente tres frutos globosos mate", "planta independiente sobre una cima, no creciendo de un cuerpo", "escala legible por piedras y estratos, sin coordenada", "ocho planos full bleed"],
    avoid: ["pumpkin vine, coconut, calabash vessel, carved gourd, human tree, face in trunk, giant fruit, map pin, label or shrine"],
  }),

  "organizacion_vida_serranias__phenomenon_rule": simple({
    title: "Mareiwa organiza la vida · personas, pares animales y territorio sin marcas",
    focus: "Regla panorámica 16:9 con exactamente SEIS adultos como muestra editorial, tres mujeres y tres hombres, todos completamente vestidos y distintos. Emergen caminando desde una gran cavidad o pozo pétreo abierto, luego se distribuyen por tres senderos hacia costa, planicie y serranía. En el espacio intermedio hay EXACTAMENTE TRES PARES animales no identificados dentro de tres claros separados de suelo: claro A contiene DOS animales marrones; claro B contiene DOS animales arena; claro C contiene DOS animales carbón. 2 + 2 + 2 = SEIS ANIMALES TOTAL; ningún séptimo animal y ningún grupo de tres. Hay exactamente TRES pequeñas cargas lisas TOTAL, portadas por tres personas; las otras tres personas no llevan carga. La fuente no asigna esas cargas por género y la imagen tampoco convierte su reparto en canon. Todas las prendas, fajas y cargas son de color sólido, sin bordado, greca, rayas o símbolos. La vegetación usa únicamente cardones multicaules de columnas verticales y arbustos bajos redondeados no espinosos, CERO agaves, aloes, yuccas, sansevierias o rosetas. Las personas se relacionan por proximidad recíproca, no entrega; las rutas no son fronteras. Una sombra territorial curva expresa a Mareiwa. No hay dieciocho emblemas, hierros dibujados, nombres, marcas o mapa.",
    scene: "Cavidad al fondo izquierdo, seis personas en nueve planos medios, tres pares animales en el centro y tres senderos materiales que abren el territorio en quince profundidades. Todo full bleed y continuo.",
    must: [
      "exactamente seis adultos como muestra editorial: tres mujeres y tres hombres, con seis rostros, edades aparentes y conjuntos diferentes",
      "tres Wayuushein largas sobre pechera; tres sistemas masculinos completos con Kemiisa más Kotin, Asheinpalajanaa o saco",
      "exactamente tres pares animales en tres claros separados: dos marrones, dos arena y dos carbón; seis animales totales y cero grupos de tres",
      "exactamente tres cargas pequeñas lisas en tres personas diferentes, sin asignación canónica por género; las otras tres personas no llevan bolsa, recipiente ni carga",
      "prendas, fajas y cargas completamente lisas, sin rayas, bordados, grecas o franjas multicolor",
      "vegetación sólo con cardones multicaules de columnas verticales y arbustos bajos redondeados; cero agaves, aloes, yuccas, sansevierias o rosetas",
      "tres senderos hacia ambientes distintos, sin línea de frontera, propiedad, mapa o bandera",
      "una cavidad pétrea abierta y una sombra territorial como única presencia de Mareiwa",
      "ninguna mujer entregada, tocada, marcada, arrodillada o representada como bien",
      "quince profundidades full bleed con aire, oclusiones y sombras físicas",
    ],
    avoid: ["seventh animal, animal trio, fourth load, fourth bag, extra vessel, eighteen uniforms, eighteen clan symbols, branding irons, heraldry, flags, borders, property map, bride distribution, ownership gesture, kneeling women, naked primordial people, divine man, embroidered neckline, patterned bag, striped sash, poncho, agave, aloe, yucca, sansevieria, snake plant or spiky leaf rosette"],
    culture: ORGANIZATION_CULTURE,
    human: true,
  }),

  "uchi_juroteka__spatial_model": simple({
    title: "Uchi Juroteka · punto de partida serrano, ubicación prudente",
    focus: "Modelo espacial aproximado del punto de partida descrito como Sierra Nevada de Santa Marta, sin coordenada exacta ni reconstrucción de un asentamiento. Un paso alto de estratos grises y verdes abre hacia una planicie costera lejana; EXACTAMENTE NUEVE pequeñas depresiones circulares y abstractas —nueve total, en una única fila, no pies dibujados— inician un único sendero y se pierden tras la primera loma. El resto del sendero queda completamente liso: cero depresiones adicionales. No hay personas, casa, señal o mapa.",
    scene: "Vista baja de catorce profundidades: roca húmeda localizada, vegetación baja, paso serrano, sendero, planicie y horizonte marino remoto. Full bleed.",
    must: ["paso serrano de partida y planicie lejana en continuidad", "exactamente nueve depresiones abstractas de marcha en una fila y cero depresiones adicionales", "vegetación más húmeda sólo localizada en altura", "ninguna coordenada, pueblo, casa o señal", "catorce planos full bleed"],
    avoid: ["tourist viewpoint, snow peak, alpine landscape, map pin, sign, indigenous village reconstruction, footprints shaped as feet or expedition figures"],
  }),

  "akuwa__spatial_model": simple({
    title: "Akuwa · último tramo de Itojoro sin georreferenciación",
    focus: "Modelo espacial aproximado de un lugar cercano al final del recorrido de Itojoro. Un sendero muy largo cruza una planicie semiarida y se estrecha entre dos lomas bajas; exactamente UNA mata de Ita aparece sobre una altura lejana como vínculo narrativo, no señal turística. No hay cuerpo, tumba, nombre escrito o coordenada.",
    scene: "Vista oblicua 16:9 en doce profundidades: piedra cercana, cardones bajos multicaules, sendero, dos lomas, altura con mata y cielo. Mundo full bleed.",
    must: ["un sendero largo entre dos lomas bajas", "exactamente una mata de Ita en altura lejana", "matorral seco y cardones de tallos desde la base, sin saguaro o rosetas", "ninguna persona, tumba, estatua, señal o coordenada", "doce planos full bleed"],
    avoid: ["grave, memorial, body, face in hill, tourist route, map, road sign, house, lush forest, saguaro, agave, aloe or yucca"],
  }),

  "kasuto__spatial_model": simple({
    title: "Kasuto · costa alcanzada por la piedra, sin monumento",
    focus: "Modelo espacial aproximado de una costa baja donde termina la trayectoria de la piedra de Mareiwa. Una única piedra oscura, pequeña y no tallada descansa en una depresión seca; nueve antiguas líneas de agua quedan como estratos azul gris cada vez más lejanos y cinco pozos salinos puntúan el terreno. No se repite la escena de lanzamiento y no hay cuerpo divino, marcador o georreferenciación.",
    scene: "Panorama bajo de catorce profundidades desde depresión y piedra hasta mar distante, con planicie salina, matorral disperso y horizonte amplio. Full bleed.",
    must: ["exactamente una piedra oscura pequeña en depresión seca", "nueve líneas antiguas de agua y exactamente cinco pozos salinos", "mar actual lejano y terreno descubierto continuo", "ninguna persona, honda, monumento, señal o coordenada", "catorce capas full bleed"],
    avoid: ["meteor crater, sacred monument, carved stone, giant boulder, Moses scene, tsunami, map pin, shrine, offerings, tourist sign or settlement"],
  }),
};

export const WAYUU_SERRANIAS_MODEL_IDS_V3 = Object.freeze(Object.keys(WAYUU_SERRANIAS_DIRECTIONS_V3));

export default WAYUU_SERRANIAS_DIRECTIONS_V3;
