/**
 * Direcciones especificas del lote 17 · El pequeño indio Kosina.
 *
 * La transcripcion de Chaves no permite usar Kosina/Kusina como nombre propio
 * inequívoco ni como sinonimo de Wayuu. Parques Nacionales, MinCultura y
 * Perrin documentan sentidos historicos y relacionales diferentes. Por eso
 * las prendas humanas de este lote son conjuntos completos, lisos y
 * editoriales, pero nunca se presentan como reconstruccion etnica.
 */

const KOSINA_SOURCES = [
  "chaves_kosina_1946",
  "pnn_macuira_cosina_kosina",
  "perrin_kusina_1989",
  "mincultura_caracterizacion_wayuu",
];

const REGIONAL_SOURCES = [
  "chaves_kosina_1946",
  "perrin_kusina_1989",
  "mincultura_caracterizacion_wayuu",
];

const COMMON_AVOID = [
  "text, title, labels, arrows, numbers, watermark, signature, infographic, panels or split screen",
  "flat collage, flat vector illustration, watercolor, smooth CGI, glossy plastic, toy aesthetic or digital glow",
  "visible cardboard edge, exposed corrugated board, cutaway base, plinth, pedestal, table, studio wall, frame or exterior of the diorama",
  "generic fantasy regalia, feather crown, pan-indigenous costume, archaeological reconstruction claim or tourist costume",
  "invented kana, clan mark, facial motif, ceremonial symbol, rune, embroidery, beadwork or geometric ethnic pattern",
  "blood, explicit violence, animal cruelty, weapon impact, carcass, humiliation, sexualization or alcohol consumption",
];

function dimension(decision, evidence, rationale, specification) {
  return { decision, evidence, rationale, ...(specification ? { specification } : {}) };
}

function unresolvedPersonCulture({
  scope,
  personScope,
  moment,
  activity,
  chosenId,
  chosenLabel,
  alternativeLabel,
  layers,
  components,
  attire,
  footwear,
  accessories,
  continuity,
  silhouette,
  sources = KOSINA_SOURCES,
  occasion = "mixed_narrative",
}) {
  return {
    cultural_scope: scope,
    person_scope: personScope,
    temporal_register: "historic_postcontact_indeterminate",
    time_basis: "el cuento fue publicado en 1946 y nombra caballos, arroz y panela, pero no fecha el suceso ni describe la ropa; el conjunto completo es una traduccion editorial reversible y no una reconstruccion de una etnia o epoca exactas",
    narrative_moment: moment,
    activity_context: activity,
    occasion_context: occasion,
    considered_ensembles: [
      {
        id: chosenId,
        label: chosenLabel,
        fit: "elegido porque cubre el cuerpo, permite la actividad y produce una silueta individual sin atribuir un traje etnico",
        rationale: "la fuente no permite identificar prendas tradicionales concretas; se priorizan capas lisas, funcionales y completas que permanecen declaradamente editoriales",
        source_refs: sources,
      },
      {
        id: `${chosenId}_alternative`,
        label: alternativeLabel,
        fit: "plausible como solucion regional de contacto, pero no elegida para mantener identidades visuales separadas",
        rationale: "la alternativa sigue siendo reversible y completa, aunque repite demasiado otra silueta del lote o responde peor a la actividad",
        source_refs: sources,
      },
      {
        id: `${chosenId}_ethnic_transfer_rejected`,
        label: "ropa Wayuu nombrada, pintura facial o marcadores de clan añadidos para fabricar autenticidad",
        fit: "rechazado",
        rationale: "Kosina/Kusina y los demas indigenas del cuento no pueden equipararse visualmente con Wayuu sin evidencia especifica",
        source_refs: sources,
      },
    ],
    chosen_ensemble: {
      id: chosenId,
      rationale: "mantiene cobertura, dignidad, movilidad y continuidad sin convertir la ambiguedad cultural en desnudez, pobreza o disfraz",
      specification: chosenLabel,
      layers,
    },
    attire: dimension("include_contextual", "editorial_reversible", "Chaves no describe el corte; las capas completas son una decision de produccion visible y reversible", attire),
    footwear: dimension("include_contextual", "editorial_reversible", "la caza, la agricultura, el viaje o la equitacion requieren pies legibles y protegidos sin reclamar un tipo etnografico", footwear),
    accessories: dimension("include_contextual", "myth_explicit", "solo se conservan objetos expresamente narrados o un elemento funcional liso; no se añaden joyas, insignias ni ornamentos de identidad", accessories),
    face_paint: dimension("omit_contextually", "source_specific", "el relato no nombra pintura, ocasion ritual ni motivo exacto; la ausencia evita transferir una practica Wayuu a una identidad no resuelta"),
    wardrobe_profile: "male",
    wardrobe_components: components,
    wardrobe_visual_contract: silhouette,
    source_refs: sources,
    continuity_markers: continuity,
  };
}

const KOSINA_YOUNG_CULTURE = unresolvedPersonCulture({
  scope: "kusina_identity_unresolved",
  personScope: "joven de baja estatura llamado Kosina por la transcripcion, cazador, agricultor, musico y jinete; no se representa como niño ni como Wayuu confirmado",
  moment: "identidad cotidiana anterior a la riqueza, con la misma ropa durante caza, cuidado de la roza, musica y carrera",
  activity: "caminar, usar arco, trabajar una parcela, retirar una faja, tocar un tambor y montar sin silla con movilidad completa",
  chosenId: "plain_hunter_farmer_layers",
  chosenLabel: "camisa holgada índigo apagado de manga larga, envolvente inferior amplia color corteza hasta media pantorrilla, faja lisa terracota, polainas de tela arena y sandalias cerradas por tiras",
  alternativeLabel: "camisa cruda corta, pantalon holgado carbon, cinturon liso y sandalias de viaje",
  layers: [
    "camisa índigo apagado de manga larga que domina el torso y cubre hombros y espalda",
    "envolvente inferior amplia color corteza hasta media pantorrilla con pliegues laterales",
    "faja terracota lisa y desmontable alrededor de la cintura",
    "polainas arena separadas sobre las pantorrillas",
    "sandalias de tiras oscuras y suela plana",
  ],
  components: ["camisa holgada de manga larga", "envolvente inferior amplia", "faja lisa desmontable", "polainas de tela", "sandalias de tiras"],
  attire: "camisa índigo apagado con cuello redondo, mangas completas y ruedo visible sobre una envolvente color corteza hasta media pantorrilla; tela mate sin roturas, bordado o patrón",
  footwear: "polainas arena independientes y dos sandalias oscuras de tiras simples, sin borlas o espuelas",
  accessories: "faja terracota lisa expresamente desmontable para la captura; el arco y la caja pertenecen a momentos o fichas separados y no se acumulan como adorno",
  continuity: [
    "estatura baja de adulto joven, cabeza proporcionada y postura erguida",
    "camisa índigo de manga larga y envolvente corteza de media pantorrilla",
    "faja terracota lisa, polainas arena y sandalias oscuras",
    "rostro ovalado ancho, nariz corta recta, cabello negro ondulado hasta la mandibula y cejas gruesas",
    "rostro sin pintura, joyeria, marcas, patrones o atributos Wayuu",
  ],
  silhouette: {
    dominant_silhouette: "camisa índigo amplia sobre envolvente inferior de volumen completo; la figura se lee como adulto joven vestido por capas y no como torso con una sola pieza minima",
    front_read: "cuello, mangas, ruedo de camisa, pliegues de envolvente, faja, polainas y sandalias permanecen separados",
    side_or_back_read: "la camisa cubre espalda y hombros, la envolvente conserva volumen posterior y la faja puede soltarse sin desarmar el resto del traje",
    anti_collapse_rule: "rechazar si desaparece la camisa, el torso queda descubierto, la envolvente se vuelve una tira estrecha o la baja estatura se convierte en anatomia infantil",
  },
});

const KOSINA_MOTHER_CULTURE = {
  ...unresolvedPersonCulture({
    scope: "kusina_identity_unresolved",
    personScope: "madre adulta del joven kusina; su pertenencia cultural, edad exacta y vestuario no son descritos",
    moment: "identidad domestica mientras prepara alimento y escucha el relato de la roza, sin escena de pobreza ni servidumbre",
    activity: "cocinar vainas de trupillo, organizar una vivienda y recibir al hijo con un potro",
    chosenId: "plain_mother_two_piece",
    chosenLabel: "blusa amplia arcilla clara de mangas al codo, falda envolvente índigo oscuro hasta los tobillos, delantal corto arena liso, pañuelo de cabeza crudo y sandalias planas",
    alternativeLabel: "vestido continuo verde apagado de manga corta, chal liso y sandalias",
    layers: [
      "blusa arcilla clara amplia con mangas al codo y cuello cerrado",
      "falda envolvente índigo oscuro de volumen completo hasta los tobillos",
      "delantal corto arena completamente liso sobre la parte frontal",
      "pañuelo crudo liso que recoge parcialmente el cabello",
      "sandalias planas color corteza",
    ],
    components: ["blusa amplia", "falda envolvente larga", "delantal liso", "pañuelo de cabeza", "sandalias planas"],
    attire: "blusa arcilla clara cerrada y falda índigo de largo completo, con delantal arena funcional; ninguna pieza reproduce manta, patrón o bordado Wayuu",
    footwear: "dos sandalias planas corteza, completas y sin decoracion",
    accessories: "pañuelo crudo liso para recoger el cabello durante el trabajo; manos vacias en la ficha de identidad",
    continuity: [
      "blusa arcilla, falda índigo y delantal arena",
      "pañuelo crudo sobre cabello negro con hebras grises",
      "sandalias corteza",
      "rostro adulto redondo, frente amplia, nariz corta y surcos suaves junto a la boca",
      "sin pintura facial, joyeria, kanas, marcas claniles o accesorios rituales",
    ],
    silhouette: {
      dominant_silhouette: "blusa de mangas al codo y falda larga envolvente forman dos volúmenes amplios, unidos por un delantal frontal corto",
      front_read: "cuello, mangas, borde de blusa, delantal, pliegues de falda y sandalias se distinguen como componentes propios",
      side_or_back_read: "la falda mantiene volumen hasta los tobillos, la blusa cubre espalda y el pañuelo recoge el cabello sin convertirse en tocado ceremonial",
      anti_collapse_rule: "rechazar si el conjunto se vuelve una manta Wayuu, una sola bata estampada, ropa rota o una figura descalza usada como indice de pobreza",
    },
  }),
  wardrobe_profile: "female",
};

const RICH_ALLY_CULTURE = unresolvedPersonCulture({
  scope: "regional_indigenous_unresolved",
  personScope: "joven indigena acomodado, elegante y bien vestido que ofrece parentesco y protege al protagonista; pueblo y clan no documentados",
  moment: "identidad de anfitrion y jinete durante una fiesta regional de carreras",
  activity: "montar, recibir a un visitante, presentar parentesco y entregar o recibir un caballo",
  chosenId: "regional_host_complete",
  chosenLabel: "camisa marfil de manga larga con puños, chaleco corto ciruela liso, pantalon amplio azul noche hasta los tobillos, cinturon fino ocre, zapatos bajos cerrados y sombrero de fibra de ala corta sin adorno",
  alternativeLabel: "sobrecamisa verde oscuro, pantalon arena, faja lisa y sandalias cerradas",
  layers: [
    "camisa marfil de manga larga con cuello y puños legibles",
    "chaleco corto ciruela completamente liso",
    "pantalon azul noche amplio de largo completo",
    "cinturon fino ocre sin hebilla ornamental",
    "zapatos bajos cerrados y sombrero liso de ala corta",
  ],
  components: ["camisa de manga larga", "chaleco corto liso", "pantalon amplio completo", "cinturon fino", "zapatos cerrados", "sombrero liso"],
  attire: "camisa marfil cuidada, chaleco ciruela liso y pantalon azul noche completo; la elegancia se expresa por corte, integridad y capas, no por metales, bordados o símbolos",
  footwear: "dos zapatos bajos cerrados color café oscuro, sin espuelas",
  accessories: "sombrero de fibra de ala corta y cinturon fino liso; sin arma, joya, insignia o marca de rango",
  continuity: [
    "camisa marfil, chaleco ciruela y pantalon azul noche",
    "sombrero liso de ala corta y zapatos cerrados",
    "rostro joven alargado, nariz recta, cabello negro corto y mechon lateral",
    "porte abierto de anfitrion y manos sin arma",
    "sin atribucion Wayuu, pintura facial, kana, marca clanil o adorno ceremonial",
  ],
  silhouette: {
    dominant_silhouette: "camisa con chaleco y pantalon amplio crean una figura ecuestre pulida de cinco piezas claramente distintas",
    front_read: "cuello marfil, chaleco ciruela, mangas, cinturon, piernas completas y zapatos se leen sin fusionarse",
    side_or_back_read: "chaleco y camisa conservan espalda separada, el sombrero tiene volumen propio y el pantalon permite postura de jinete",
    anti_collapse_rule: "rechazar si la elegancia se sustituye por traje occidental moderno, uniforme militar, atuendo de hacendado o prendas Wayuu nombradas",
  },
  sources: REGIONAL_SOURCES,
  occasion: "visit_or_exchange",
});

const CHIEF_CULTURE = unresolvedPersonCulture({
  scope: "regional_indigenous_unresolved",
  personScope: "persona adulta que dirige la fiesta de carreras; la fuente no documenta pueblo, clan, genero gramatical inequívoco, fisonomia o ropa",
  moment: "identidad publica de anfitrion antes de ordenar que se sirva alimento al visitante",
  activity: "coordinar hospitalidad, observar musica y organizar una fiesta de caballos sin arma o gesto autoritario",
  chosenId: "regional_feast_host_complete",
  chosenLabel: "sobrecamisa larga verde humo de mangas completas, camisa interior cruda visible en cuello, pantalon holgado terracota completo, faja lisa azul noche, sandalias cerradas y sombrero bajo de fibra",
  alternativeLabel: "camisa arena, chal corto carbon, pantalon índigo, cinturon liso y zapatos bajos",
  layers: [
    "camisa interior cruda visible solo en cuello y puños",
    "sobrecamisa verde humo larga y de mangas completas",
    "pantalon terracota holgado de largo completo",
    "faja azul noche lisa",
    "sandalias cerradas y sombrero bajo de fibra",
  ],
  components: ["camisa interior", "sobrecamisa larga", "pantalon completo", "faja lisa", "sandalias cerradas", "sombrero bajo"],
  attire: "sobrecamisa verde humo sobre camisa cruda y pantalon terracota completo; capas sobrias, limpias y sin emblema de autoridad",
  footwear: "dos sandalias cerradas color carbon, sin espuelas o adorno",
  accessories: "faja azul noche y sombrero bajo de fibra sin banda decorada; manos abiertas y vacias",
  continuity: [
    "sobrecamisa verde humo y pantalon terracota",
    "faja azul noche y sombrero bajo",
    "rostro adulto ancho, nariz curva suave y cabello negro con sienes grises",
    "gesto de hospitalidad contenido, sin baston, arma o insignia",
    "sin identidad Wayuu afirmada, pintura, patrón o marca clanil",
  ],
  silhouette: {
    dominant_silhouette: "sobrecamisa larga verde sobre pantalon completo, con mangas, faja y sombrero claramente separados",
    front_read: "cuello interior, apertura de sobrecamisa, mangas, faja, piernas y sandalias se leen como capas completas",
    side_or_back_read: "la sobrecamisa cubre hombros y espalda hasta medio muslo y no se transforma en capa, túnica ritual o vestido ceremonial",
    anti_collapse_rule: "rechazar si la autoridad se expresa con corona, baston, plumas, uniforme, desnudez, atuendo Wayuu o caricatura de cacique",
  },
  sources: REGIONAL_SOURCES,
  occasion: "leadership_or_formal",
});

function unresolvedCollectiveCulture({ personScope, chosen, alternative, components, groups, continuity, silhouette }) {
  return {
    cultural_scope: "regional_indigenous_unresolved",
    person_scope: personScope,
    temporal_register: "historic_postcontact_indeterminate",
    time_basis: "la transcripcion publicada en 1946 describe posicion economica, viaje o fiesta, pero no fija pueblo, clan, prendas o fecha del suceso; la diversidad de ropa es una traduccion editorial reversible",
    narrative_moment: "gramatica colectiva sin reproducir burla, amenaza, sacrificio, bebida o jerarquia racial",
    activity_context: "viajar, recibir, observar o competir alrededor de caballos con identidades individuales y ropa completa",
    occasion_context: "mixed_narrative",
    considered_ensembles: [
      {
        id: "varied_regional_complete",
        label: chosen,
        fit: "elegido porque diferencia personas y posiciones sin fabricar un uniforme etnico",
        rationale: "la variacion de capas, color y silueta comunica un colectivo historico de contacto sin asignar una cultura visual cerrada",
        source_refs: REGIONAL_SOURCES,
      },
      {
        id: "varied_regional_alternative",
        label: alternative,
        fit: "posible, pero menos util para separar a los miembros en profundidad",
        rationale: "mantiene ropa completa aunque reduce contraste de siluetas y oficios",
        source_refs: REGIONAL_SOURCES,
      },
      {
        id: "uniform_ethnic_costume_rejected",
        label: "un mismo traje tradicional, plumas, patrones, pintura o marcadores Wayuu repetidos en todos",
        fit: "rechazado",
        rationale: "la fuente no autoriza convertir indio rico, dueño de caballo o participante en una etnia uniforme",
        source_refs: REGIONAL_SOURCES,
      },
    ],
    chosen_ensemble: {
      id: "varied_regional_complete",
      rationale: "conserva pluralidad, cobertura y lectura social sin exotismo o uniformidad",
      specification: chosen,
      layers: ["capas superiores completas y diferentes", "prendas inferiores completas y distintas", "fajas o cinturones lisos", "calzado legible", "sombreros lisos solo en algunos miembros"],
    },
    attire: dimension("include_contextual", "editorial_reversible", "la fuente solo nombra posicion y contexto; cada integrante recibe ropa completa lisa y diferente", chosen),
    footwear: dimension("include_contextual", "editorial_reversible", "viaje y caballos requieren calzado legible, pero no un tipo etnico uniforme", "sandalias cerradas o zapatos bajos lisos, diferentes por integrante y sin espuelas"),
    accessories: dimension("include_contextual", "myth_explicit", "sombreros, fajas y riendas lisas se usan solo donde la actividad lo exige; no se añaden joyas, armas o insignias", "sombrero liso en algunos miembros y manos vacias o sujetando riendas simples"),
    face_paint: dimension("omit_contextually", "source_specific", "no se documentan pintura, ceremonia o motivos exactos para ninguno de los grupos"),
    wardrobe_profile: "mixed_collective",
    wardrobe_components: components,
    wardrobe_visual_contract: silhouette,
    source_refs: REGIONAL_SOURCES,
    continuity_markers: continuity,
    collective_wardrobe: {
      variation_axis: "corte de capa superior, tipo de prenda inferior, presencia de sombrero y paleta individual, nunca identidad etnica inventada",
      anti_uniformity_rule: "ningun conjunto completo puede repetirse en mas de un miembro y nadie queda reducido a una sola prenda inferior",
      member_groups: groups,
    },
  };
}

const RICH_TRAVELERS_CULTURE = unresolvedCollectiveCulture({
  personScope: "varios viajeros indigenas acomodados encontrados en el camino; no se afirma que sean los mismos asistentes de la fiesta",
  chosen: "exactamente tres adultos con conjuntos completos distintos: sobrecamisa ocre y pantalon carbon; camisa cruda con chal verde y pantalon índigo; camisa azul humo con envolvente amplia terracota, todos con calzado y sin patrones",
  alternative: "tres camisas lisas y pantalones completos de una misma paleta con variacion solo de sombrero",
  components: ["capas superiores completas", "prendas inferiores amplias", "fajas o cinturones lisos", "calzado individual", "sombrero opcional"],
  groups: [
    {
      id: "traveler_one_two",
      scope: "dos viajeros adultos que comparten alimento",
      ensemble: "uno con sobrecamisa ocre y pantalon carbon; otro con camisa cruda, chal verde y pantalon índigo",
      rationale: "dos siluetas completas y separadas comunican diversidad sin atribuir pueblo o rango",
      source_refs: REGIONAL_SOURCES,
      wardrobe_profile: "unspecified",
      wardrobe_components: ["sobrecamisa o camisa", "pantalon completo", "cinturon liso", "calzado"],
    },
    {
      id: "traveler_three",
      scope: "tercer viajero adulto junto a los burros, sin alimento visible en las manos",
      ensemble: "camisa azul humo, envolvente inferior amplia terracota, faja lisa y sandalias cerradas",
      rationale: "diferencia el tercer cuerpo sin usar una tipologia Wayuu nombrada",
      source_refs: REGIONAL_SOURCES,
      wardrobe_profile: "unspecified",
      wardrobe_components: ["camisa completa", "envolvente inferior amplia", "faja lisa", "sandalias"],
    },
  ],
  continuity: ["exactamente tres adultos", "tres combinaciones de color y corte no repetidas", "ropa integra y completa", "ninguna pintura, patrón, emblema o marcador Wayuu"],
  silhouette: {
    dominant_silhouette: "tres adultos con capas superiores y prendas inferiores completas, cada uno reconocible por un volumen diferente",
    front_read: "cuellos, mangas, cinturones o fajas, bajos de prendas y calzado se leen individualmente",
    side_or_back_read: "espaldas y hombros permanecen cubiertos; los sombreros solo aparecen en dos de tres y no unifican al grupo",
    anti_collapse_rule: "rechazar si visten uniforme, si alguno queda con torso descubierto, si parecen Wayuu por marcadores transferidos o si la riqueza se vuelve joyeria ostentosa",
  },
});

const HORSE_OWNERS_CULTURE = unresolvedCollectiveCulture({
  personScope: "jinetes y dueños de caballos en la fiesta, colectivo indigena regional sin pueblo o clan documentados",
  chosen: "exactamente cuatro adultos con ropa ecuestre regional completa y variada: camisas largas, sobrecamisas, pantalones o envolventes amplias, fajas lisas, calzado y dos sombreros diferentes",
  alternative: "cuatro jinetes con camisa y pantalon completos diferenciados solo por color",
  components: ["camisas o sobrecamisas de mangas completas", "pantalones o envolventes amplias", "fajas lisas", "calzado ecuestre sin espuelas", "sombreros opcionales"],
  groups: [
    {
      id: "mounted_pair",
      scope: "dos jinetes montados en calma, sin carrera o amenaza",
      ensemble: "uno con sobrecamisa arena y pantalon carbón; otro con camisa azul noche, chal corto ocre y pantalon terracota",
      rationale: "la postura montada necesita piernas cubiertas y dos siluetas superiores distintas",
      source_refs: REGIONAL_SOURCES,
      wardrobe_profile: "male",
      wardrobe_components: ["sobrecamisa o camisa", "pantalon completo", "faja o cinturon", "calzado"],
    },
    {
      id: "standing_pair",
      scope: "dos dueños de pie observando caballos fuera de la pista",
      ensemble: "uno con camisa verde humo y envolvente amplia; otro con camisa cruda, chaleco ciruela y pantalon índigo",
      rationale: "las dos figuras de pie amplian la gramatica de grupo sin duplicar a los jinetes",
      source_refs: REGIONAL_SOURCES,
      wardrobe_profile: "male",
      wardrobe_components: ["camisa completa", "prenda inferior completa", "faja lisa", "sandalias o zapatos"],
    },
  ],
  continuity: ["exactamente cuatro adultos", "dos montados y dos de pie", "cuatro conjuntos completos no repetidos", "ningun gesto de amenaza, arma, pintura, patrón o marcador Wayuu"],
  silhouette: {
    dominant_silhouette: "cuatro cuerpos vestidos por capas, dos elevados por caballos y dos anclados al suelo, sin uniforme",
    front_read: "mangas, prendas inferiores, fajas y calzado se distinguen incluso alrededor de las monturas",
    side_or_back_read: "hombros y espaldas quedan cubiertos y cada jinete mantiene volumen separado de su caballo",
    anti_collapse_rule: "rechazar si aparece una multitud, uniformes de vaquero, espuelas, armas, torsos descubiertos o un unico traje etnico repetido",
  },
});

function direction({ title, focus, scene, must, avoid = [], culture }) {
  return {
    title,
    focus,
    scene,
    must_show: must,
    avoid: [...COMMON_AVOID, ...avoid],
    ...(culture ? { material_culture: culture } : {}),
  };
}

export const WAYUU_KOSINA_DIRECTIONS_V3 = {
  "kosina_joven__identity_sheet": direction({
    title: "Joven kusina · identidad culturalmente no resuelta",
    focus: "Exactamente UN adulto joven de baja estatura y cuerpo completo, nunca un niño. Rostro ovalado ancho, nariz corta recta, cejas gruesas y cabello negro ondulado hasta la mandibula. Viste camisa índigo apagado de manga larga, envolvente amplia color corteza hasta media pantorrilla, faja lisa terracota, polainas arena y sandalias oscuras. Postura erguida de cazador-agricultor, manos vacias y mirada atenta. La baja estatura no implica deformidad, debilidad o comicidad.",
    scene: "Mundo de paper craft fotografiado a escala humana: laminas de suelo y tres vainas de trupillo desenfocadas en primer plano, figura sola en plano medio, roza apenas sugerida y lomas distantes; seis profundidades fisicas, sombras de contacto y full bleed.",
    culture: KOSINA_YOUNG_CULTURE,
    must: [
      "exactamente un adulto joven completo de cabeza a sandalias, bajo pero proporcionado",
      "camisa de manga larga, envolvente de media pantorrilla, faja, polainas y sandalias claramente separadas",
      "rostro, cabello, proporciones y paleta repetibles en la hoja de estados",
      "manos vacias y ninguna persona, caballo, instrumento o presa secundaria",
      "papel mate fibroso, seis o mas planos fisicos y sombras reales entre capas",
    ],
    avoid: ["child, boy, oversized head, caricature, comic dwarf, frailty, rags, bare torso, bare feet or poverty spectacle", "Wayuu person, manta, Womu, waireñas, named Wayuu garment, face paint, clan mark or ethnic pattern"],
  }),
  "kosina_joven__state_sheet": direction({
    title: "Joven kusina · caza, musica y cuidado",
    focus: "Exactamente TRES manifestaciones de cuerpo completo del MISMO adulto joven dentro de un unico paisaje continuo y sin paneles. A la izquierda avanza como cazador sosteniendo un ARCO inequívoco: una vara de madera curva en forma de media luna con cuerda tensa visible entre los dos extremos, sin flecha colocada y nunca un baston recto. Al centro se sienta ante un tambor cilindrico bajo de un solo parche redondo y toca con manos abiertas; prohibida una caja cubica. A la derecha permanece de pie como cuidador con la faja terracota nuevamente anudada y una cuerda lisa recogida, sin caballo. Las tres figuras conservan rostro, baja estatura adulta, camisa índigo, envolvente corteza, polainas y sandalias. Ninguna figura representa riqueza mediante joyas o cambio de ropa.",
    scene: "Un sendero curvo une caza, musica y cuidado a tres profundidades: ramas y vainas cercanas, roza media y corral vacío muy lejano; el espacio continuo reemplaza viñetas y la luz cálida lateral revela capas físicas.",
    culture: KOSINA_YOUNG_CULTURE,
    must: [
      "exactamente tres representaciones del mismo adulto joven, no tres personas diferentes",
      "una pose con arco curvo y cuerda tensa claramente visibles, una pose tocando tambor cilindrico redondo y una pose con cuerda recogida sin caballo",
      "mismo rostro, cabello, proporciones, camisa, envolvente, faja, polainas y sandalias en las tres",
      "transiciones por distancia fisica dentro de un solo mundo y no por paneles",
      "traje completo legible de frente, tres cuartos y espalda parcial",
    ],
    avoid: ["childhood-to-adulthood sequence, wealth makeover, crown, jewels, costume change, horse race, crowd or complete narrative keyframe", "straight staff, walking stick, spear, square box drum, cube instrument, arrow striking animal, dead lizard, violence, saddle, weapon pose or heroic battle"],
  }),
  "madre_kosina__identity_sheet": direction({
    title: "Madre del joven kusina · identidad domestica",
    focus: "Exactamente UNA mujer adulta de cuerpo completo, individual y serena. Rostro redondo, frente amplia, nariz corta, cabello negro con hebras grises recogido bajo pañuelo crudo liso. Viste blusa arcilla clara de mangas al codo, falda envolvente índigo hasta los tobillos, delantal corto arena y sandalias corteza. Manos vacias; postura de quien sostiene una casa y una cocina sin convertirla en sirvienta, anciana fragil o emblema de pobreza.",
    scene: "Interior abierto de papel con sombra doméstica, piso de capas ocre y una abertura hacia la roza; figura sola en plano medio, pared abstracta profunda y cielo lateral; ningún utensilio protagonista ni soporte exterior visible.",
    culture: KOSINA_MOTHER_CULTURE,
    must: [
      "exactamente una mujer adulta completa de cabeza a sandalias",
      "blusa, falda larga, delantal, pañuelo y calzado visibles como cinco componentes",
      "rostro y paleta individual repetibles, sin parecer la madre de otro mito",
      "manos vacias y ausencia de hijo, caballo, alimento o multitud",
      "interior full bleed hecho de papel con profundidad y sombras fisicas",
    ],
    avoid: ["Wayuu manta, patterned dress, ceremonial headdress, face paint, jewelry, bare feet, rags, maid stereotype or old-woman caricature"],
  }),
  "caballo_kosina__state_sheet": direction({
    title: "Caballo hablante · escala, fragilidad aparente y corredor",
    focus: "Exactamente TRES manifestaciones del MISMO caballo crema de paper craft con gran mancha terracota irregular sobre hombro y pecho izquierdos, crin y cola castañas y cascos carbon. A la izquierda es un caballo enorme y erguido, sin jinete; al centro es un potro muy pequeño con patas visiblemente torcidas pero estable, ojos cerrados y cabeza baja; a la derecha es un corredor adulto proporcionado, bello y vigoroso, unos centímetros mas alto que la forma central pero no gigante. La mancha, cabeza, crin y cola preservan identidad. El cambio ocurre por escala, postura y capas, sin brillo o morph digital.",
    scene: "Sendero continuo que desciende desde una silueta grande profunda hasta el potro cercano y asciende hacia el corredor lateral; huellas de tres tamaños talladas en capas de suelo, roza desenfocada y horizonte amplio, sin personas o carrera.",
    must: [
      "exactamente tres estados del mismo caballo, todos completos y reconocibles por la mancha terracota izquierda",
      "forma grande erguida, potro pequeño de patas torcidas pero no herido y corredor adulto vigoroso",
      "crin y cola castañas, pelaje crema de papel y cuatro cascos carbon en cada estado",
      "huellas cambian de tamaño sin texto, flechas, paneles o efectos digitales",
      "cinco o mas profundidades fisicas y mundo full bleed sin base visible",
    ],
    avoid: ["three different horse breeds, missing rust shoulder patch, unicorn, wings, glowing eyes, speaking mouth, human face, saddle, bridle or rider", "broken legs, suffering, injury, whipping, race crowd, attack, magical particles or transformation beam"],
  }),
  "hermano_caballo_kosina__identity_sheet": direction({
    title: "Hermano menor del caballo · identidad equina",
    focus: "Exactamente UN caballo joven de cuerpo completo y anatomia natural, hermano visual pero no duplicado del caballo principal. Pelaje papel arena cálida, crin y cola castaño oscuro, pequeña mancha crema en forma organica sobre la frente y cuatro calcetines crema desiguales por encima de cascos carbon. Paso largo y postura dócil pero alerta. Sin mancha terracota de hombro, silla, brida, cuerda o jinete.",
    scene: "Sendero semiarido de papel junto a una abertura rocosa muy distante; piedras laminadas cercanas, caballo solo en plano medio y lomas profundas, seis capas y luz lateral suave.",
    must: [
      "exactamente un caballo joven completo, proporcionado y separado del caballo principal",
      "pelaje arena, estrella crema frontal, cuatro calcetines crema desiguales, crin castaña y cascos carbon",
      "paso largo legible y expresion alerta sin humanizacion",
      "ninguna persona, caballo adicional, montura, amarre o adorno",
      "volumen de capas de papel y full bleed sin soporte exterior",
    ],
    avoid: ["white horse with rust shoulder patch, foal newborn, pony caricature, zebra markings, fantasy markings, horse jewelry, saddle or stable photograph"],
  }),
  "familia_caballos_kosina__group_grammar": direction({
    title: "Madre y hermanos del caballo · familia equina",
    focus: "Gramatica de grupo con exactamente TRES caballos completos, el minimo visual para madre y hermanos adicionales sin afirmar cantidad total. Una yegua adulta grande color arena gris con crin oscura ocupa el centro; a un lado, un hermano adulto castaño rojizo con una pata delantera crema; al otro, un hermano joven crema tostado con crin corta. Ninguno replica la mancha terracota del caballo principal ni la estrella frontal del hermano menor ya modelado. Diferencias familiares sutiles: orejas largas, ojos oscuros y hocicos carbón, sin símbolos.",
    scene: "Los tres emergen en planos escalonados desde una depresión rocosa hacia sabana de papel; yegua cercana, adulto a media distancia y joven profundo, con aire entre cuerpos y sin corral o persona.",
    must: [
      "exactamente tres caballos contables: una yegua adulta y dos hermanos de edades distintas",
      "tres pelajes y siluetas diferenciados pero parentesco legible por cabeza, orejas y hocico",
      "todos de cuerpo completo, sin monturas, riendas, adornos o marcas fantasticas",
      "ningun caballo duplica al principal crema con mancha terracota ni al hermano arena con estrella frontal",
      "grupo en profundidad real, no fila plana, collage o tabla zoologica",
    ],
    avoid: ["herd of many horses, foal nursing, breeding scene, racing, riders, corrals, branded marks, glowing cave or mythical unicorn family"],
  }),
  "aliado_rico_kosina__identity_sheet": direction({
    title: "Joven aliado · elegancia sin etnia inventada",
    focus: "Exactamente UN adulto joven de cuerpo completo, anfitrion y jinete de porte abierto. Rostro alargado, nariz recta, cabello negro corto con mechon lateral. Viste camisa marfil de manga larga con puños, chaleco ciruela liso, pantalon azul noche amplio hasta tobillos, cinturon ocre fino, zapatos bajos cerrados y sombrero de fibra de ala corta. La elegancia se lee en corte, integridad y capas, no en joyas, bordados o jerarquia racial. Manos vacias y ningun caballo.",
    scene: "Borde vacío de una fiesta de papel: capas de suelo cercanas, figura sola en plano medio y tres postes lisos muy lejanos que sugieren recorrido de carrera sin graderias; cielo amplio y seis profundidades.",
    culture: RICH_ALLY_CULTURE,
    must: [
      "exactamente un joven adulto completo y ninguna otra persona",
      "camisa, chaleco, pantalon, cinturon, zapatos y sombrero visibles y lisos",
      "rostro, mechon, paleta y porte repetibles",
      "manos vacias, sin caballo, dinero, arma, trofeo o instrumento",
      "papel mate por capas y full bleed sin base exterior",
    ],
    avoid: ["hacienda owner, cowboy, conquistador, military officer, prince, crown, gold jewelry, embroidered costume, Wayuu wardrobe or face paint"],
  }),
  "indigenas_ricos_camino_kosina__group_grammar": direction({
    title: "Viajeros acomodados del camino · grupo no uniforme",
    focus: "Exactamente TRES adultos indigenas del relato, de cuerpo completo y sin identidad etnica cerrada. Persona uno: sobrecamisa ocre y pantalon carbon. Persona dos: camisa cruda, chal verde y pantalon índigo. Persona tres: camisa azul humo, envolvente inferior amplia terracota y faja lisa. Todos llevan calzado completo; dos sombreros lisos diferentes y una cabeza descubierta. Se relacionan con gesto de compartir, pero no sostienen comida, panela o recipiente: esos elementos no necesitan aparecer para modelar el grupo.",
    scene: "Sendero abierto de paper craft con los tres en triángulo y profundidades distintas; dos burros apenas como siluetas muy lejanas desenfocadas para escala, nunca protagonistas, y sin joven kusina.",
    culture: RICH_TRAVELERS_CULTURE,
    must: [
      "exactamente tres adultos completos con tres conjuntos distintos y legibles",
      "dos sombreros lisos no iguales y una cabeza descubierta",
      "gesto amable de intercambio con manos vacias y sin jerarquia corporal",
      "ningun patron, pintura, joya, marca, uniforme o traje Wayuu transferido",
      "triangulo espacial profundo y no fila, panel o retrato grupal plano",
    ],
    avoid: ["food banquet, meat, rice, panela, sack, plate, money, servant, kneeling recipient, mockery, ostentatious wealth or social hierarchy"],
  }),
  "duenos_caballos_kosina__group_grammar": direction({
    title: "Jinetes y dueños de carrera · gramatica de grupo",
    focus: "Exactamente CUATRO adultos indigenas del relato, todos individualizados y vestidos por capas completas. Dos montan caballos tranquilos detenidos: uno con sobrecamisa arena y pantalon carbon; otro con camisa azul noche, chal ocre y pantalon terracota. Dos permanecen de pie: uno con camisa verde humo y envolvente amplia; otro con camisa cruda, chaleco ciruela y pantalon índigo. Solo dos sombreros lisos, calzado visible, riendas simples y ninguna silla ornamentada. No hay competencia, burla, compra o amenaza: esta es una gramatica de elenco.",
    scene: "Borde de pista en papel con dos jinetes a media distancia y dos dueños de pie en planos laterales; postes bajos marcan dirección, caballos quietos y gran aire entre figuras.",
    culture: HORSE_OWNERS_CULTURE,
    must: [
      "exactamente cuatro adultos: dos montados y dos de pie",
      "cuatro conjuntos completos no repetidos y dos sombreros en total",
      "exactamente dos caballos visibles, tranquilos y sin adornos",
      "gestos neutrales, manos sin armas y ausencia de multitud o violencia",
      "ocho o mas profundidades entre suelo, personas, caballos, postes y horizonte",
    ],
    avoid: ["cowboy posse, rodeo, western saloon, hacienda, military cavalry, racing action, whips, weapons, angry mob, killing or horse abuse"],
  }),
  "jefe_fiesta_kosina__identity_sheet": direction({
    title: "Jefe de la fiesta · anfitrion sin iconografia de poder",
    focus: "Exactamente UNA persona adulta de cuerpo completo, de presencia serena y manos abiertas. Rostro ancho, nariz curva suave, cabello negro con sienes grises. Viste camisa interior cruda, sobrecamisa larga verde humo de mangas completas, pantalon terracota holgado, faja azul noche lisa, sandalias cerradas y sombrero bajo de fibra. No baston, corona, arma, collar, asiento elevado o gesto de mando teatral.",
    scene: "Espacio vacío de fiesta en paper craft: sombra de una enramada abstracta en primer plano, figura sola en plano medio y pista sugerida al fondo; ninguna comida, animal o multitud.",
    culture: CHIEF_CULTURE,
    must: [
      "exactamente una persona adulta completa y sola",
      "camisa interior, sobrecamisa, pantalon, faja, sandalias y sombrero distinguibles",
      "autoridad expresada solo por postura estable y gesto de hospitalidad",
      "rostro y paleta repetibles sin emblema etnico o rango inventado",
      "seis capas fisicas y full bleed sin soporte exterior",
    ],
    avoid: ["cacique stereotype, crown, feather headdress, throne, staff, scepter, weapon, gold, servants, Wayuu markers or ceremonial face paint"],
  }),
  "lagartijas_kosina__group_grammar": direction({
    title: "Machorros · grupo zoologico de caza menor",
    focus: "Exactamente CINCO lagartijas pequeñas de anatomia reconocible hechas en laminas finas de papel, todas vivas y en poses distintas. Cuerpos alargados arena-verde apagado, cuatro patas completas, dedos finos, cola larga y ojos oscuros sin brillo. Dos toman sol sobre una piedra laminada, dos cruzan suelo de hojas secas y una se oculta parcialmente bajo una rama. No se fija especie ni se añade herida, flecha o captura.",
    scene: "Microhabitat semiarido de paper craft a ras del suelo, con piedra cercana, hojas en plano medio, rama profunda y cardon muy desenfocado; cinco profundidades y full bleed.",
    must: [
      "exactamente cinco lagartijas contables, todas vivas y completas salvo una cola parcialmente ocluida por rama",
      "anatomia de lagartija con cuatro patas, cola larga y cabeza pequeña, sin rasgos de cocodrilo o iguana gigante",
      "variacion de pose y escala por distancia, no por especies fantasticas",
      "ninguna persona, arco, flecha, mano, bolsa o alimento",
      "paper craft fotografiado con capas finas y sombras reales",
    ],
    avoid: ["dead lizard, pierced animal, hunting scene, blood, trophy, cooked reptile, giant iguana, chameleon, dragon, dinosaur or repeated cloned pose"],
  }),
  "burros_camino_kosina__group_grammar": direction({
    title: "Burros del camino · animales de carga sin aparejo inventado",
    focus: "Exactamente TRES burros de cuerpo completo y anatomia natural, uno gris ceniza, uno pardo y uno gris claro con hocico crema. Orejas largas, crines cortas y cascos oscuros; edades y alturas ligeramente distintas. Permanecen juntos pero no comen, cargan o llevan silla porque la fuente no describe aparejos. Ninguna cuerda, marca, campana, saco o patrón.",
    scene: "Descanso en sendero semiarido de papel: burro pardo cercano, gris ceniza a media distancia y gris claro profundo junto a un arbusto; capas de suelo, aire y lomas ocupan todo el marco.",
    must: [
      "exactamente tres burros completos y diferenciados por pelaje y altura",
      "orejas largas, hocicos claros, colas cortas y cuatro cascos por animal",
      "ningun aparejo, carga, cuerda, marca, persona o alimento",
      "posturas tranquilas y no caricaturescas",
      "grupo escalonado en profundidad real y full bleed",
    ],
    avoid: ["horse, mule, zebra, donkey cart, saddle, panniers, sacks, panela, boiled pods, feeding scene, human rider or comic expression"],
  }),
  "patilla__botanical_sheet": direction({
    title: "Patilla · morfologia de cultivo",
    focus: "Ficha botanica inmersiva de UNA misma planta de patilla en cuatro momentos integrados sin paneles: guia rastrera joven con hojas lobuladas, flor amarilla pequeña, fruto verde rayado en desarrollo y fruto maduro entero junto a una seccion abierta roja con semillas oscuras. Los tallos conectan los momentos a traves de distintas profundidades. Ninguna apariencia humana, rostro o cuerpo en esta ficha morfologica.",
    scene: "Suelo de roza hecho de capas terracota ocupa todo el marco; hojas cercanas, flor media, fruto profundo y sección abierta en primer plano lateral, con luz suave y sombras de contacto.",
    must: ["tallo rastrero continuo", "hojas lobuladas reconocibles", "una flor amarilla", "un fruto verde rayado entero y una sola seccion roja", "cuatro profundidades sin paneles o etiquetas"],
    avoid: ["human figure, human-shaped fruit, face, family, pumpkin, melon tree, floating specimens, market display, basket, text or botanical diagram"],
  }),
  "ahuyama__botanical_sheet": direction({
    title: "Ahuyama · morfologia de cultivo",
    focus: "Ficha botanica inmersiva de UNA misma planta de ahuyama: guia vigorosa, hojas anchas algo lobuladas, zarcillos, una flor amarilla en trompeta, un fruto verde joven y un fruto maduro ocre anaranjado de costillas suaves junto a una seccion abierta con pulpa y semillas. Todo conectado por tallos en un unico suelo. Ninguna apariencia humana o vientre antropomorfo.",
    scene: "Roza de papel en vista baja, con hojas cercanas, flor a media distancia, fruto maduro central y zarcillos profundos; cinco planos y borde lleno de vegetacion recortada.",
    must: ["una sola planta conectada", "hojas anchas, zarcillos y flor de trompeta", "un fruto joven y un fruto maduro acanalado", "una sola sección abierta", "papel mate y profundidad fisica"],
    avoid: ["human belly, human face, person-shaped pumpkin, Halloween pumpkin, carved eyes, squash pile, market basket, floating chart or text"],
  }),
  "frijol_roza_kosina__botanical_sheet": direction({
    title: "Fríjol de la roza · morfologia leguminosa",
    focus: "Ficha botanica de UNA planta de frijol rastrero o trepador bajo, sin afirmar variedad: tallos delgados, hojas trifoliadas, flores pequeñas blanco-lila, vainas verdes, vainas secas color paja y semillas moteadas visibles en una sola vaina abierta. La planta se apoya en tres varillas lisas, sin tejido o estructura monumental.",
    scene: "Suelo de roza en paper craft con tallos cercanos, hojas y flores medias, vainas profundas y horizonte bajo; cinco capas, full bleed y ninguna base externa.",
    must: ["hojas trifoliadas", "flores pequeñas", "vainas verdes y secas", "una vaina abierta con semillas", "exactamente tres varillas de apoyo lisas"],
    avoid: ["beanstalk giant, tree, maize, pea pod cartoon, market pile, human figure, trampled crop, horse hoof, labels, grid or floating specimens"],
  }),
  "trupillo_sancochado_kosina__object_sheet": direction({
    title: "Trupillo sancochado · alimento de viaje",
    focus: "Ficha cuadrada de alimento sin persona: exactamente UN cuenco bajo de papel crudo contiene vainas de trupillo cocidas color miel apagada y un poco de caldo oscuro; las vainas permanecen alargadas, curvadas y reconocibles, no fideos. A la izquierda hay un pequeño grupo de vainas secas enteras y a la derecha un monton discreto de bagazo fibroso ya masticado traducido de forma abstracta, sin gesto corporal. Una cuchara de madera simple descansa fuera del cuenco. La composicion no afirma receta ceremonial ni presentacion moderna.",
    scene: "Suelo continuo de fibras y capas arena llena los cuatro bordes; vainas secas cercanas, cuenco central y bagazo profundo con sombras de contacto, sin mesa o exterior de maqueta.",
    must: [
      "un solo cuenco con vainas cocidas y caldo discreto",
      "un pequeño grupo de vainas secas enteras fuera del cuenco",
      "un pequeño monton de bagazo fibroso abstracto y una cuchara lisa",
      "forma de vaina leguminosa legible, sin parecer pasta, frijol suelto o carne",
      "paper craft full bleed sin persona, animal o soporte exterior",
    ],
    avoid: ["person, hand, mother, hunter, donkey, feeding, restaurant plating, soup photography, noodles, meat, rice, panela, alcohol, ritual bowl or abundance feast"],
  }),
  "faja_captura_kosina__object_sheet": direction({
    title: "Faja lisa del joven · prenda y herramienta narrativa",
    focus: "Ficha cuadrada de UNA unica faja personal lisa terracota, sin identificarla como prenda Wayuu. El mismo objeto aparece en exactamente TRES disposiciones dentro de un suelo continuo: enrollado compacto, extendido por completo y formando un lazo amplio sin nudo corredizo alrededor de una silueta vacia. Es una banda tejida mate de ancho regular, extremos simples y ninguna borla, kana, patrón, símbolo o hebilla. La faja debe coincidir con la cintura del joven y poder retirarse sin exponer su cuerpo porque el resto del conjunto permanece completo.",
    scene: "Superficie de capas carbon y arena full bleed; rollo cercano, banda extendida a media distancia y lazo profundo, todos separados por sombras y sin paneles.",
    must: ["un unico objeto representado en tres disposiciones", "color terracota liso y ancho constante", "dos extremos simples sin flecos o borlas", "ningun caballo, cuello, persona, mano o escena de captura", "tres profundidades fisicas sin base exterior"],
    avoid: ["S'ira label, Wayuu pattern, kana, clan mark, geometric weaving, belt buckle, rope noose, restraint scene, animal, violence, text or measurement chart"],
  }),
  "manea_caballo_kosina__object_sheet": direction({
    title: "Manea del caballo · amarre no especificado",
    focus: "Ficha de UNA manea editorial reversible porque Chaves solo dice que el caballo fue maneado y amarrado. Dos lazos bajos de fibra lisa color corteza se conectan por una banda corta y flexible, con nudos sencillos no instructivos. El mismo objeto aparece cerrado, abierto y colocado alrededor de dos cilindros de papel que funcionan solo como escala abstracta, nunca patas de animal. Sin metal, campanas, decoración, cuero fotografico o patrón.",
    scene: "Suelo continuo oscuro de papel, manea cerrada cercana, abierta en plano medio y alrededor de cilindros profundos; iluminación lateral y tres alturas de capa.",
    must: ["un mismo amarre en tres disposiciones", "dos lazos bajos conectados por banda corta", "fibra lisa corteza sin patrón", "cilindros abstractos de escala sin anatomia", "full bleed y sombras de contacto"],
    avoid: ["horse legs, tied animal, person, hand, instructional knot diagram, cruelty, chain, metal shackles, decorative braid, text, arrows or numbered steps"],
  }),
  "tambor_carreras_kosina__object_sheet": direction({
    title: "Caja o tambor de la fiesta · instrumento regional no cerrado",
    focus: "Ficha cuadrada de UN unico tambor sencillo, reversible y sin atribuir tipologia etnica exacta. Cuerpo cilindrico bajo de papel madera oscuro, un solo parche superior crudo tensado por un aro liso y seis cordones verticales simples; base cerrada y sin pintura. El mismo instrumento aparece exactamente TRES veces: frontal, oblicuo superior y lateral, manteniendo proporciones. Dos manos recortadas abstractas aparecen solo como pequeñas siluetas de escala separadas, sin brazos o persona. No baquetas, texto, notas musicales o símbolos.",
    scene: "Suelo continuo índigo y arena, tres vistas a tres profundidades con sombras fisicas; full bleed sin mesa, pedestal o estudio.",
    must: ["exactamente tres vistas del mismo tambor", "cuerpo cilindrico bajo, un parche superior, un aro y seis cordones lisos", "papel madera oscuro y parche crudo sin diseño", "dos siluetas de manos abstractas separadas para escala", "ninguna persona, fiesta o caballo"],
    avoid: ["modern drum kit, snare drum, conga, bongo pair, caja vallenata logo, painted ethnic motifs, kana, face, magical instrument, floating music notes or performance scene"],
  }),
  "huellas_caballo_kosina__phenomenon_rule": direction({
    title: "Huellas menguantes · regla de escala",
    focus: "Regla visual de un mismo rastro equino que cambia de tamaño sin efectos luminosos. Un sendero continuo entra desde primer plano con huellas enormes, continúa con huellas medianas, luego pequeñas y termina con huellas diminutas antes de una curva que oculta al animal. Cada una de las cuatro escalas debe repetirse varias veces y mantener la misma forma y direccion. La magia surge de la progresion espacial regular y el silencio del paisaje; la fuente no fija cantidad total.",
    scene: "Vista oblicua muy baja siguiendo las cuatro escalas repetidas de huellas desde suelo cercano hacia una curva profunda; roza lateral desenfocada, lomas lejanas y cielo estrecho, siete planos fisicos.",
    must: ["cuatro grupos progresivos de huellas enormes, medianas, pequeñas y diminutas", "misma forma equina y dirección", "cambio gradual por escala y profundidad", "ninguna persona o caballo visible", "papel hundido, sombras reales y full bleed"],
    avoid: ["glowing footprints, sparkles, transformation beam, arrows, numbers, diagram, human footprints, paw prints, blood, broken crops, horse silhouette or portal"],
  }),
  "roza_kosina__spatial_model": direction({
    title: "Roza del joven kusina · policultivo y rastro",
    focus: "Modelo espacial de una parcela pequeña con tres cultivos diferenciados: guias de patilla rastreras en primer plano, dos ahuyamas con hojas anchas en el centro y franjas de frijol sobre varillas bajas al fondo. Un sendero estrecho entra por un lado; solo una zona limitada de hojas dobladas y huellas de casco indica el paso de un caballo, sin devastacion espectacular. Cercado bajo de ramas lisas parcial y una vivienda apenas lejana, no rancheria Wayuu.",
    scene: "Vista oblicua elevada 16:9 con siete profundidades desde patillas cercanas hasta vivienda remota; suelo de papel, plantas de laminas, sombras de capa y horizonte semiarido.",
    must: ["tres cultivos espacialmente separables: patilla, ahuyama y frijol", "sendero lateral y una zona pequeña de huellas", "cercado parcial bajo sin alambre", "una sola vivienda lejana no tipificada", "mundo full bleed con siete planos y sin base visible"],
    avoid: ["person, horse, dead crop, total destruction, tractor, irrigation system, industrial farm, rancheria Wayuu, painted house, ethnic patterns, saguaro or lush tropical plantation"],
  }),
  "vivienda_kosina__spatial_model": direction({
    title: "Casa del joven y su madre · arquitectura no atribuida",
    focus: "Modelo espacial APROXIMADO de una vivienda rural indígena regional sin atribuirla a un pueblo concreto. Un volumen rectangular bajo de postes de papel madera y paredes parciales de entramado recubierto con barro de papel ocupa el centro; techo inclinado de fibras mate, no conico. Una sombra lateral abierta funciona como área de cocinar y otra pequeña abertura mira hacia la roza. Exactamente dos espacios interiores sugeridos, vacios. No se copia la rancheria Wayuu ya modelada, no corral y no decoración.",
    scene: "Vista oblicua 16:9 desde ramas y suelo cercanos hacia volumen central, sombra lateral y roza lejana; seis profundidades, full bleed y materiales traducidos enteramente a papel y fibra.",
    must: ["un volumen rectangular bajo con techo inclinado no conico", "paredes parciales de entramado y barro de papel", "una sombra lateral abierta y exactamente dos espacios interiores sugeridos", "ninguna persona, caballo, alimento, corral o objeto narrativo", "arquitectura full bleed sin corte de casa de muñecas o soporte exterior"],
    avoid: ["Wayuu rancheria label, piichipala reconstruction, maloca, tipi, igloo, colonial hacienda, modern house, conical hut, ethnic painting, kana, hammock display or museum diorama base"],
  }),
  "pista_carreras_kosina__spatial_model": direction({
    title: "Fiesta de carreras · modelo espacial sobrio",
    focus: "Modelo espacial de una fiesta regional de caballos sin congelar una carrera ni representar violencia. Una pista larga de tierra de papel cruza el cuadro con ocho postes bajos lisos, cuatro por lado. A la izquierda hay una sombra abierta de fibras para musica y encuentro; a la derecha, tres recintos bajos temporales para caballos, vacios. Un pequeño grupo de siluetas humanas vestidas y abstractas aparece en profundidad solo para escala, no como identidades. No tribuna, bandera, apuesta, botella, sacrificio o texto.",
    scene: "Vista panoramica oblicua 16:9: suelo y postes cercanos, pista media, sombra y recintos laterales, siluetas profundas y lomas lejanas; ocho capas físicas y luz de tarde.",
    must: ["pista larga con exactamente ocho postes lisos", "una sombra abierta para musica y tres recintos bajos vacios", "un pequeño grupo de siluetas humanas vestidas al fondo", "ningun caballo corriendo, compra, amenaza, comida o bebida", "panorama full bleed con ocho profundidades y sin base visible"],
    avoid: ["modern racetrack, stadium, grandstand, jockey uniforms, numbered gates, flags, betting signs, rodeo, western fair, slaughter, alcohol bottles, angry crowd or Wayuu festival claim"],
  }),
  "corral_caballos_kosina__spatial_model": direction({
    title: "Corral del rebaño · arquitectura pedida por el caballo",
    focus: "Modelo espacial de un corral amplio y funcional construido despues de la indicacion del caballo, sin afirmar material exacto. Cerca ovalada de postes y ramas de papel entrelazadas, con una sola puerta simple abierta hacia la sabana. Exactamente CUATRO zonas de sombra internas creadas por pequeños techos planos de fibra; bebedero bajo vacio y suelo marcado por huellas suaves. El corral permanece completamente vacío para no duplicar la ficha de familia equina. Una casa distante y la roza aparecen separadas.",
    scene: "Vista oblicua elevada 16:9 con puerta cercana, ovalo completo en plano medio, cuatro sombras interiores y sabana nocturna profunda; siete capas y full bleed.",
    must: ["cerca ovalada completa de postes y ramas", "una sola puerta abierta", "exactamente cuatro zonas pequeñas de sombra", "bebedero bajo vacío y huellas suaves sin animales", "casa y roza lejanas, separadas del corral"],
    avoid: ["horse, goat, cattle, person, modern metal fence, barbed wire, stable barn, ranch gate logo, brand, hacienda, rancheria claim, magical glow or underground portal"],
  }),
  "abertura_subterranea_caballo__spatial_model": direction({
    title: "Cueva subterranea de los caballos · entrada no portal",
    focus: "Modelo espacial HECHO INEQUIVOCAMENTE A MANO EN PAPEL de una cueva baja que desciende bajo capas de tierra. Todo debe mostrar bordes recortados, fibras de papel, laminas superpuestas y pequeñas separaciones con sombras: prohibido suelo fotografico, barro real, piedra real o raíces reales. La entrada irregular es suficientemente ancha para un caballo pero no tiene puerta; queda oculta por dos grandes estratos construidos con muchas laminas de papel rasgado y una cortina de raíces formada por tiras finas de papel retorcido. Un sendero de huellas equinas hundidas en papel entra y desaparece en oscuridad mate. El interior sugiere tres cámaras mediante arcos de capas sucesivas, nunca corte lateral o casa subterránea. Ningun caballo, tesoro, luz sobrenatural o símbolo.",
    scene: "Vista muy baja 16:9 de un mundo de paper craft construido a escala: huellas cercanas troqueladas, abertura media, tiras de papel como raíces y tres arcos de papel oscuros en profundidad; lomas recortadas y cielo mate ocupan una franja superior, siete capas fisicas y full bleed.",
    must: ["una unica abertura irregular de escala equina", "dos estratos de roca y una cortina de raíces secas", "rastro equino que entra y desaparece", "tres profundidades interiores sugeridas sin corte arquitectonico", "oscuridad mate y ninguna luz magica"],
    avoid: ["real soil, real mud, real rock, real gravel, real roots, photoreal cave, nature photograph, documentary landscape", "horse, person, underground palace, stable, gold, treasure, crystals, glowing portal, constructed doorway, stairs, tunnel lights, skulls, cave painting, kana, symbols or visible diorama base"],
  }),
};

export default WAYUU_KOSINA_DIRECTIONS_V3;
