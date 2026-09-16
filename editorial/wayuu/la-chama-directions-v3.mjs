/**
 * Direcciones del lote 23 · La Chama.
 *
 * La fuente narrativa principal es Pineda Giraldo 1947. La compilacion de
 * Villa Posse se usa solo para corroborar la morfologia de la anciana y las
 * cinco formas. Toda ropa no descrita por el relato se declara traduccion
 * editorial reversible del repertorio Wayuu documentado. La magia vuelve a
 * ser material y sorprendente, pero nunca luz digital, hibrido anatomico,
 * consejo medico o violencia explicita.
 */

const STORY_SOURCE = "pineda_chama_1947";
const MORPHOLOGY_SOURCE = "villa_posse_chama_1993";
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
  "blood, corpse, killing, cannibalism, attack, weapon in use, injured child, exposed wound or violence spectacle",
  "medical advice, bronchitis cure, hair remedy, clinical instruction, treatment claim, dosage or anatomy diagram",
  "nudity, exposed breast, erotic framing, seduction pose, sexualized majayura, child vulnerability or voyeurism",
  "witch, hag monster, demon, ghost, fairy, mermaid, European sorceress, animal-human hybrid or shapeshifter cliche",
  "generic pan-indigenous costume, feather war bonnet, Andean poncho, cowboy costume, fantasy shaman or loincloth-only outfit",
  "invented kana, clan mark, face motif, tattoo, rune, glyph, emblem, sacred geometry, crown, amulet or altar",
  "neon aura, portal, magic particles, glowing eyes, laser, smoke VFX, motion streak, digital morph or luminous outline",
  "saguaro with arms, agave, aloe, yucca, pineapple, bromeliad or generic spiky rosette flora",
  "text, caption, title, label, number, arrow, diagram, panel border, watermark or signature",
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

function personCulture({
  person,
  profile,
  moment,
  activity,
  occasion = "mixed_narrative",
  chosenId,
  chosenLabel,
  alternativeLabel,
  rationale,
  specification,
  layers,
  wardrobeRefs,
  footwear,
  accessories,
  silhouette,
  front,
  back,
  reject,
  continuity,
  temporal = "historic_postcontact_indeterminate",
  timeBasis,
  collectiveWardrobe,
}) {
  return {
    cultural_scope: "wayuu",
    person_scope: person,
    temporal_register: temporal,
    time_basis: timeBasis || "Pineda publica el relato en 1947 pero no fecha la accion ni describe el corte de la ropa; las prendas se tratan como traduccion editorial Wayuu reversible, no como reconstruccion prehispanica",
    narrative_moment: moment,
    activity_context: activity,
    occasion_context: occasion,
    considered_ensembles: [
      {
        id: chosenId,
        label: chosenLabel,
        fit: "mejor traduccion editorial reversible para esta persona y momento",
        rationale,
        source_refs: [STORY_SOURCE, ...WARDROBE_SOURCES],
      },
      {
        id: "reduced_or_generic_costume",
        label: alternativeLabel,
        fit: "rechazado",
        rationale: "reduce el repertorio Wayuu a una prenda emblematica, borra cobertura y funcion o convierte el relato en disfraz generico",
        source_refs: [STORY_SOURCE, "paz_ipuana_aleya_tomo_ii_2016", "icanh_organizacion_social_guajira_1950"],
      },
    ],
    chosen_ensemble: {
      id: chosenId,
      rationale,
      specification,
      layers,
    },
    attire: dimension("include_contextual", "editorial_reversible", rationale, specification),
    footwear: dimension("include_contextual", "institutional_general", "el calzado completa el conjunto y evita usar pies descalzos como marcador automatico de autenticidad o antiguedad", footwear),
    accessories: accessories
      ? dimension("include_contextual", "myth_explicit", "solo se incluyen piezas funcionales exigidas por la accion o el conjunto documentado", accessories)
      : dimension("omit_contextually", "source_specific", "la fuente no exige joya, rango, instrumento o accesorio adicional y no se acumulan signos de autoridad"),
    face_paint: dimension("omit_contextually", "source_specific", "el relato no documenta ocasion, material, funcion ni motivo facial exacto para esta persona; no se inventa pintura"),
    wardrobe_profile: profile,
    wardrobe_refs: wardrobeRefs,
    wardrobe_visual_contract: contract(silhouette, front, back, reject),
    source_refs: [STORY_SOURCE, MORPHOLOGY_SOURCE, ...WARDROBE_SOURCES],
    continuity_markers: continuity,
    ...(collectiveWardrobe ? { collective_wardrobe: collectiveWardrobe } : {}),
  };
}

const CHAMA_CULTURE = personCulture({
  person: "La Chama en sus dos apariencias humanas: anciana vigorosa y majayura adulta; nunca Kalamantuunay ni una especie de bruja",
  profile: "female",
  moment: "identidad anciana y continuidad de las dos apariencias humanas dentro de una metamorfosis de cinco formas",
  activity: "estar de pie, caminar y proteger con postura firme; el cabello se muestra como rasgo corporal, nunca como remedio",
  chosenId: "two_plain_complete_wayuushein_states",
  chosenLabel: "dos Wayuushein largas, lisas y completas sobre pechera, diferenciadas por estado y conservadas sin erotizacion",
  alternativeLabel: "anciana harapienta semidesnuda y joven seductora con vestido ceñido",
  rationale: "las formas humanas requieren cobertura completa y contraste de edad; la ropa visible reconoce el repertorio Wayuu sin fingir que Pineda describio corte, color, patron o ocasion",
  specification: "anciana con Wayuushein carbon desgastada pero integra y pechera ocre; majayura con Wayuushein rojo arcilla profunda, limpia y lisa sobre pechera arena; ambas con mangas completas y waireñas abiertas, sin sombrero para conservar la lectura del cabello",
  layers: [
    "pechera opaca y sobria en cada forma humana",
    "Wayuushein larga, amplia, lisa y con mangas en cada forma humana",
    "dos waireñas abiertas por forma humana",
    "cabellera de la anciana hasta los tobillos y trenza baja de la majayura como siluetas distintas",
  ],
  wardrobeRefs: ["wayuushein_manta", "pechera_female_underlayer", "wairenas"],
  footwear: "waireñas abiertas carbón para la anciana y arena para la majayura; dedos, talon y tiras quedan legibles",
  accessories: null,
  silhouette: "anciana cubierta por gran volumen carbon y cortina de cabello hasta los tobillos; majayura cubierta por gran volumen rojo arcilla y trenza baja",
  front: "pechera pequeña dentro de la abertura alta, mangas completas y cuerpo no marcado en ambas apariencias",
  back: "la Wayuushein conserva caida completa; el cabello de la anciana llega a los tobillos sin revelar la espalda y la trenza de la majayura queda separada",
  reject: "rechazar si la anciana queda desnuda, con pecho anatomico visible o como monstruo; rechazar si la majayura lleva escote, falda, vestido ceñido, joyas o pose seductora",
  continuity: [
    "mismo ovalo facial largo, nariz recta ancha y pomulos altos en ambas apariencias humanas",
    "anciana con ojos cerrados u opacos no luminosos y cabello grueso hasta los tobillos",
    "majayura con ojos abiertos naturales y trenza negra baja",
    "Wayuushein carbon para anciana y rojo arcilla para majayura, ambas lisas y completas",
    "ninguna pintura facial, joya, kana, marca clanil, desnudez o brillo sobrenatural",
  ],
});

const MAN_CULTURE = personCulture({
  person: "hombre Wayuu adulto acomodado, cuidador de caballos, compañero de La Chama y perseguidor posterior",
  profile: "male",
  moment: "continuidad desde el cuidado cotidiano de los caballos hasta la marcha a pie y el reposo protegido en la cueva",
  activity: "cepillar caballos, montar, caminar largas distancias y reposar con el cuerpo completamente cubierto",
  occasion: "travel",
  chosenId: "kemiisa_kotin_complete_horse_caretaker",
  chosenLabel: "Kemiisa de mangas bajo Kotin masculino completo, base secundaria, si'ira, waireñas y Wom/Woma funcional",
  alternativeLabel: "jinete de torso desnudo, taparrabo aislado, vaquero western o guerrero con rifle dominante",
  rationale: "caballos, rifle, aperos y bienes fijan un registro postcontacto; la buena condicion del conjunto expresa cuidado y recursos sin inventar joyeria, patron o rango",
  specification: "Kemiisa indigo de mangas completas; Kotin arena claro, amplio, largo y liso como capa dominante; Wusi/Aichee carbon secundario con si'ira arcilla; waireñas oscuras; Wom/Woma ocre bajo solo en exterior",
  layers: [
    "Kemiisa indigo de mangas completas",
    "Kotin arena amplio y liso desde hombros hasta bajo las rodillas",
    "Wusi/Aichee carbon seguro y opaco como base secundaria con si'ira arcilla",
    "dos waireñas oscuras abiertas",
    "Wom/Woma ocre bajo en estados de exterior y viaje",
  ],
  wardrobeRefs: ["kemiisa_piiraneeru", "kotin_male_manta", "wusi_aichee", "sira_kumusu_aamuushi", "wairenas", "wom_woma_hat"],
  footwear: "dos waireñas carbón abiertas y completas",
  accessories: "un Wom/Woma ocre bajo; rifle, aperos y carga solo aparecen abandonados en el estado exacto y nunca como emblema",
  silhouette: "Kotin arena largo y solapado sobre Kemiisa indigo, sombrero bajo y calzado abierto",
  front: "pecho y hombros cubiertos; la base y la faja quedan secundarias dentro del volumen largo",
  back: "espalda conserva todo el paño del Kotin y ambas mangas; el Wom/Woma no se vuelve sombrero vueltiao",
  reject: "rechazar torso descubierto, taparrabo dominante, pantalones y botas de vaquero, poncho andino, uniforme militar o rifle heroico",
  continuity: [
    "rostro adulto rectangular, nariz ancha corta, ceja izquierda arqueada y cabello negro ondulado",
    "Kemiisa indigo, Kotin arena, si'ira arcilla, waireñas carbon y Wom/Woma ocre",
    "desgaste progresivo en ropa y postura durante la persecucion, sin cambiar identidad",
    "riqueza expresada por cuidado material y caballos, nunca joyas o corona",
    "ninguna pintura facial, patron, marca clanil o desnudez",
  ],
});

const SON_CULTURE = personCulture({
  person: "hijo niño de La Chama y del hombre, con agencia verbal y proteccion materna",
  profile: "child_male",
  moment: "viaje sobre el burro y pausa en que pide esperar a su padre, antes del desenlace excluido",
  activity: "sentarse seguro sobre la montura, mirar hacia atras y sostenerse sin vulnerabilidad o dramatizacion",
  occasion: "travel",
  chosenId: "child_kemiisa_complete_travel",
  chosenLabel: "Kemiisa infantil de mangas, base Wusi/Aichee secundaria, si'ira y waireñas",
  alternativeLabel: "niño semidesnudo, taparrabo aislado, miniadulto ceremonial o cuerpo en peligro",
  rationale: "el niño requiere un conjunto propio, completo y funcional para viajar; no hereda automaticamente el vestuario adulto ni se usa la desnudez para señalar antiguedad",
  specification: "Kemiisa verde trupillo de mangas completas y largo a media cadera; Wusi/Aichee arena seguro y secundario; si'ira rojo arcilla lisa; dos waireñas ocre abiertas",
  layers: [
    "Kemiisa verde trupillo de mangas completas",
    "Wusi/Aichee arena seguro y opaco como base secundaria",
    "si'ira rojo arcilla lisa",
    "dos waireñas ocre abiertas y completas",
  ],
  wardrobeRefs: ["kemiisa_piiraneeru", "wusi_aichee", "sira_kumusu_aamuushi", "wairenas"],
  footwear: "dos waireñas ocre abiertas, ajustadas a escala infantil",
  accessories: null,
  silhouette: "camisa verde de mangas y largo medio que domina sobre la base secundaria, con piernas y calzado completos",
  front: "torso cubierto, manos libres y faja secundaria sin ornamentacion",
  back: "camisa conserva mangas y borde inferior separado de la base; ninguna parte del cuerpo se fusiona con el burro",
  reject: "rechazar torso desnudo, prenda inferior aislada, adulto pequeño, joyas, arma, pintura, terror o cuerpo herido",
  continuity: [
    "rostro infantil redondo, nariz corta y cabello negro rizado",
    "Kemiisa verde trupillo, base arena, si'ira rojo arcilla y waireñas ocre",
    "misma escala infantil y mismo cuerpo en identidad y escenas de viaje",
    "ninguna pintura facial, adorno, hibridacion animal o signo de violencia",
  ],
});

const COMPANION_CULTURE = personCulture({
  person: "compañera adulta de La Chama, figura femenina sin nombre ni rasgos descritos que acude a un llamado",
  profile: "female",
  moment: "presencia breve antes del trayecto entre peñascos, sin asumir parentesco, rango o poder propio",
  activity: "acercarse caminando, detenerse a distancia y orientar el cuerpo hacia el sendero",
  occasion: "travel",
  chosenId: "plain_wayuushein_travel_presence",
  chosenLabel: "Wayuushein azul gris larga y lisa sobre pechera ocre con waireñas",
  alternativeLabel: "doble identica de La Chama, sirvienta, hechicera o figura semidesnuda",
  rationale: "una silueta completa permite reconocer presencia y accion sin inventar biografia, uniformarla con La Chama o reducirla a sombra",
  specification: "Wayuushein azul gris, larga, amplia, lisa y con mangas sobre pechera ocre; waireñas carbón; cabello negro en dos trenzas bajas",
  layers: ["pechera ocre opaca", "Wayuushein azul gris de cuerpo entero", "dos waireñas carbon abiertas", "dos trenzas negras bajas"],
  wardrobeRefs: ["wayuushein_manta", "pechera_female_underlayer", "wairenas"],
  footwear: "dos waireñas carbón abiertas y completas",
  accessories: null,
  silhouette: "volumen azul gris de cuerpo entero con mangas y dos trenzas bajas",
  front: "pechera ocre pequeña, manos visibles y cuerpo completamente cubierto",
  back: "manta larga y dos trenzas conservan volumen independiente",
  reject: "rechazar sombra sin rostro, copia exacta de La Chama, uniforme de criada, vestido ceñido, torso expuesto o accesorio ritual",
  continuity: [
    "rostro adulto triangular, nariz corta y dos trenzas negras bajas",
    "Wayuushein azul gris, pechera ocre y waireñas carbon",
    "postura de presencia y orientacion, nunca amenaza o servicio",
    "ninguna pintura, patron, joya, emblema o brillo",
  ],
});

const NEW_PARTNER_CULTURE = personCulture({
  person: "nueva pareja adulta del hombre, mujer Wayuu que ve a La Chama y al niño junto a una casimba y comunica lo ocurrido",
  profile: "female",
  moment: "encuentro diurno en el agua y aviso posterior, sin convertirla en rival malvada o figura celosa",
  activity: "recoger agua, observar a distancia, regresar y hablar con una mano abierta",
  occasion: "domestic_daily",
  chosenId: "daily_wayuushein_water_context",
  chosenLabel: "Wayuushein ocre tostado larga sobre pechera indigo, waireñas y recipiente liso de agua",
  alternativeLabel: "rival sensualizada, villana con vestido occidental o mujer generica sin conjunto Wayuu",
  rationale: "la accion cotidiana en una casimba requiere cobertura, movilidad y carga funcional; el color la diferencia de las dos formas humanas de La Chama sin inventar jerarquia",
  specification: "Wayuushein ocre tostado, larga, amplia, lisa y con mangas sobre pechera indigo; waireñas arena; cabello negro recogido en una trenza lateral; un recipiente de agua liso sin patron",
  layers: ["pechera indigo opaca", "Wayuushein ocre de cuerpo entero", "dos waireñas arena abiertas", "un recipiente de agua liso solo en la vista situada"],
  wardrobeRefs: ["wayuushein_manta", "pechera_female_underlayer", "wairenas"],
  footwear: "dos waireñas arena abiertas y completas",
  accessories: "un recipiente de agua mate y liso en la vista situada; ninguna mochila decorada, joya o arma",
  silhouette: "gran volumen ocre de cuerpo entero con trenza lateral y recipiente bajo separado del cuerpo",
  front: "pechera indigo pequeña, manos visibles y gesto de comunicar sin acusacion teatral",
  back: "Wayuushein conserva caida completa y la trenza lateral no se confunde con adorno",
  reject: "rechazar vestido ceñido, escote, gesto celoso, arma, joyeria, pintura, recipiente ritual o caricatura de antagonista",
  continuity: [
    "rostro adulto ovalado, nariz ancha recta y trenza negra lateral",
    "Wayuushein ocre tostado, pechera indigo y waireñas arena",
    "recipiente liso solo en la vista de casimba",
    "ninguna pintura, kana, marca clanil, joya o gesto amenazante",
  ],
});

const FAMILY_CULTURE = personCulture({
  person: "muestra editorial reversible de exactamente cuatro parientes adultos de La Chama dentro de la cueva-casa; la fuente no fija numero total, genero ni edad",
  profile: "mixed_collective",
  moment: "presencia familiar en sala y cuarto, con hostilidad contenida expresada por distancia y cierre espacial, nunca por ataque",
  activity: "traer leña y agua, observar, cerrar el paso con postura y mantener separacion entre miembros",
  chosenId: "four_varied_complete_family_ensembles",
  chosenLabel: "dos mujeres y dos hombres adultos con cuatro conjuntos Wayuu completos, distintos y sobrios",
  alternativeLabel: "familia monstruosa, cuatro clones con taparrabo o uniforme ritual oscuro",
  rationale: "la familia comparte espacio y especie con La Chama, pero no puede reducirse a monstruos ni a una sola prenda; cuatro figuras permiten demostrar variacion sin afirmar el tamaño total del grupo",
  specification: "mujer mayor con Wayuushein ciruela y pechera arena; mujer adulta con Wayuushein azul gris y pechera ocre; hombre mayor con She'etebe carbon y faja arcilla; hombre adulto con Kemiisa arena bajo Kotin verde oscuro; todos con calzado abierto",
  layers: [
    "dos pecheras y dos Wayuushein largas de color y edad distintos",
    "una She'etebe masculina de cuerpo entero",
    "una Kemiisa completa bajo un Kotin masculino largo",
    "cuatro pares de waireñas o abarcas completas",
  ],
  wardrobeRefs: ["wayuushein_manta", "pechera_female_underlayer", "she_etebe_sheewe", "kotin_male_manta", "kemiisa_piiraneeru", "wairenas", "asapatshee_koisuuttu_kuttiira"],
  footwear: "waireñas en las dos mujeres; abarcas oscuras en los dos hombres; cuatro pares completos",
  accessories: "un pequeño haz de leña para una figura y un recipiente de agua liso para otra; las otras dos mantienen manos vacias",
  silhouette: "cuatro siluetas no uniformes: dos mantas femeninas largas, una She'etebe masculina de cuerpo entero y un Kotin largo sobre camisa",
  front: "cada torso queda cubierto y cada capa dominante se separa de faja, base y calzado",
  back: "las cuatro capas conservan volumen propio; leña y agua quedan asignadas a personas distintas",
  reject: "rechazar clones, monstruos, colmillos, garras, ojos luminosos, uniformes, torsos desnudos, taparrabos dominantes o armas",
  continuity: [
    "exactamente cuatro adultos como muestra, no como censo de toda la familia",
    "dos Wayuushein largas, una She'etebe y un Kotin sobre Kemiisa",
    "cuatro rostros, colores, edades aparentes y posturas distintos",
    "hostilidad solo por distancia, mirada sobria y cierre espacial",
    "ninguna pintura, patron, marca clanil, anatomia monstruosa o arma",
  ],
  collectiveWardrobe: {
    variation_axis: "genero, edad aparente, capa dominante, color, tarea domestica y distancia dentro de la cueva",
    anti_uniformity_rule: "ninguna de las cuatro figuras repite el conjunto completo de otra y ningun hombre queda definido por una prenda inferior aislada",
    member_groups: [
      {
        id: "women_family_chama",
        scope: "dos mujeres adultas de edades aparentes distintas",
        ensemble: "Wayuushein ciruela y azul gris, ambas largas sobre pecheras distintas y waireñas",
        rationale: "dos siluetas femeninas completas y no uniformes para tareas domesticas diferentes",
        source_refs: [STORY_SOURCE, "artesanias_tejeduria_wayuu_2016", "mincultura_caracterizacion_wayuu"],
        wardrobe_profile: "female",
        wardrobe_refs: ["wayuushein_manta", "pechera_female_underlayer", "wairenas"],
      },
      {
        id: "men_family_chama",
        scope: "dos hombres adultos de edades aparentes distintas",
        ensemble: "She'etebe carbon de cuerpo entero y Kotin verde oscuro sobre Kemiisa arena, ambos con faja y abarcas",
        rationale: "dos capas masculinas dominantes y completas evitan uniforme, torso desnudo y taparrabo como atajo",
        source_refs: [STORY_SOURCE, "paz_ipuana_aleya_tomo_ii_2016", "icanh_organizacion_social_guajira_1950"],
        wardrobe_profile: "male",
        wardrobe_refs: ["she_etebe_sheewe", "kotin_male_manta", "kemiisa_piiraneeru", "sira_kumusu_aamuushi", "asapatshee_koisuuttu_kuttiira"],
      },
    ],
  },
});

const METAMORPHOSIS_CULTURE = {
  ...CHAMA_CULTURE,
  person_scope: "La Chama durante una regla de metamorfosis de cinco formas; solo anciana y majayura son humanas y conservan los dos conjuntos completos ya definidos",
  narrative_moment: "continuidad reversible entre anciana, majayura, gran felino, huevo y flor no especificada sin anatomias intermedias",
  activity_context: "cambiar de forma por sustitucion y plegado material; las dos apariencias humanas permanecen de pie, cubiertas y no erotizadas",
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

export const WAYUU_LA_CHAMA_DIRECTIONS_V3 = {
  "la_chama__identity_sheet": simple({
    title: "La Chama anciana · identidad humana completa",
    focus: "Ficha cuadrada con exactamente TRES vistas de la misma y unica La Chama anciana: frente en tres cuartos, perfil completo y espalda en tres cuartos. Es una mujer mayor vigorosa, de cuerpo humano no monstruoso, rostro alargado, nariz recta ancha, pomulos altos y ojos cerrados u opacos sin brillo. Su cabello gris carbon, grueso y ligeramente ondulado llega hasta los tobillos en las tres vistas. Viste Wayuushein carbon larga, amplia, lisa, integra y de mangas completas sobre pechera ocre; waireñas abiertas carbon. La prenda cubre por completo pecho, espalda y piernas; el cabello nunca deja anatomia expuesta. No muestra medicina, bronquios, mechones cortados o uso terapeutico.",
    scene: "Un solo afloramiento rocoso full bleed en siete profundidades: fibras cercanas, tres vistas a distintas distancias, dos estratos de roca media, loma lejana y cielo mate. CERO vegetacion de cualquier clase: ningun cactus, cardon, arbusto, roseta, hoja o flor. Sin paneles ni soporte exterior.",
    must: [
      "exactamente tres vistas del mismo modelo corporal anciano y ninguna otra persona",
      "mismo rostro, ojos no luminosos, cabello grueso gris carbon hasta los tobillos y cuerpo humano vigoroso",
      "Wayuushein carbon de cuerpo entero con mangas, pechera ocre y waireñas abiertas en las tres vistas",
      "frente, perfil y espalda legibles; pecho y cuerpo completamente cubiertos sin anatomia sexualizada",
      "cero vegetacion de cualquier clase: ningun cactus, cardon, arbusto, roseta, hoja o flor",
      "paper craft 3D fotografiado con siete planos, aire, oclusiones, cantos internos y sombras proyectadas",
    ],
    avoid: [
      "majayura, man, child, family, companion, donkey, horse, egg, flower, jaguar or second identity",
      "visible breast anatomy, topless elder, torn chest opening, body horror, blindfold, white cane or disability spectacle",
      "cut hair, medicinal bundle, inhaler, clinic, bronchial icon, remedy preparation or health claim",
      "witch hat, broom, crooked hag, monstrous claws, fangs, glowing blind eyes or horror cave",
      "any cactus, cardon, saguaro, agave, aloe, yucca, rosette, shrub, leaf or flower",
    ],
    culture: CHAMA_CULTURE,
    human: true,
  }),

  "la_chama__state_sheet": simple({
    title: "La Chama · cinco formas completas y separadas",
    focus: "Panorama 16:9 continuo con exactamente CINCO formas completas de la misma identidad distribuidas de izquierda a derecha sin paneles: 1) anciana humana con Wayuushein carbon, pechera ocre, waireñas y cabello gris hasta los tobillos; 2) majayura adulta con Wayuushein rojo arcilla lisa, pechera arena, waireñas y trenza negra baja; 3) un gran felino americano completo de morfologia editorial de jaguar, tratado como traduccion reversible del 'tigre' historico, con pelaje de papel ocre y manchas carbon naturales; 4) un unico huevo mate marfil apoyado en suelo; 5) una unica flor silvestre no especificada de cinco petalos rojo arcilla, sin afirmar especie. Las cinco formas comparten una pequeña veta interior cobre-carbon visible solo en cantos de papel, como marcador editorial, nunca energia o anatomia.",
    scene: "Una misma repisa rocosa se curva en nueve profundidades entre cueva y planicie. Cada forma ocupa una distancia distinta pero conserva escala plausible. Una banda de sombra continua une las posiciones; no hay transicion anatomica ni efecto digital.",
    must: [
      "exactamente cinco formas: anciana, majayura, gran felino, un huevo y una flor; ninguna forma extra",
      "dos formas humanas adultas completamente vestidas con conjuntos distintos y rostros relacionados",
      "felino completo y naturalista de papel, nunca hibrido humano; huevo unico y flor unica no antropomorfos",
      "veta editorial cobre-carbon pequeña y material repetida en cantos internos de las cinco formas, sin resplandor",
      "un solo mundo full bleed, nueve planos y ninguna division de comic o triptico",
      "continuidad por material, paleta, curva del suelo y sombra fisica, no por humo o particulas",
    ],
    avoid: [
      "four forms, six forms, two animals, duplicate egg, bouquet, named flower species, tiger stripes or fantasy beast",
      "human-animal hybrid, woman with paws, egg with face, flower woman, partial morph, melting anatomy or body horror",
      "seductive young woman, exposed chest, torn manta, swimsuit, evening gown, jewelry, crown or face paint",
      "medical hair use, family scene, pursuit, violence, cave attack or narrative keyframe",
    ],
    culture: CHAMA_CULTURE,
    human: true,
  }),

  "hombre_caballos_chama__identity_sheet": simple({
    title: "Hombre cuidador de caballos · identidad completa",
    focus: "Ficha cuadrada con exactamente TRES vistas del mismo hombre Wayuu adulto acomodado: frente en tres cuartos, perfil y espalda en tres cuartos. Rostro rectangular, nariz ancha corta, ceja izquierda arqueada y cabello negro ondulado hasta las orejas. Viste Kemiisa indigo de mangas completas bajo Kotin arena claro, largo, amplio y liso; Wusi/Aichee carbon y si'ira arcilla quedan como base secundaria segura; waireñas carbon y Wom/Woma ocre bajo. La calidad se lee en paños cuidados, costuras firmes y calzado intacto, no en joyas. En una sola vista sostiene un cepillo sencillo de caballo; no hay rifle.",
    scene: "Borde de un corral no monumental construido en siete capas: fibras cercanas, tres vistas separadas, poste simple, sombra de enramada, dos caballos muy lejanos y planicie. Full bleed sin paneles ni base visible.",
    must: [
      "exactamente tres vistas del mismo adulto y solo dos caballos lejanos de escala secundaria",
      "Kemiisa indigo, Kotin arena largo, base carbon secundaria, si'ira arcilla, waireñas y Wom/Woma identicos",
      "pecho cubierto y manta masculina dominante desde hombros hasta bajo las rodillas",
      "un unico cepillo simple en una vista; manos vacias en las otras dos",
      "riqueza por estado cuidado del conjunto y los animales, sin joyas, corona o tesoro",
      "siete profundidades full bleed con volumen 3D, aire y sombras entre capas",
    ],
    avoid: [
      "La Chama, child, partner, family, close horse, rider, rifle, saddle, whip, lasso or cowboy pose",
      "bare torso, loincloth-only outfit, jeans, trousers, boots, poncho, western hat or military uniform",
      "gold necklace, rings, crown, luxury fabric pattern, clan emblem, face paint or servant",
    ],
    culture: MAN_CULTURE,
    human: true,
  }),

  "hombre_caballos_chama__state_sheet": simple({
    title: "Hombre de los caballos · cuidado, persecución y regreso",
    focus: "Panorama 16:9 continuo con exactamente CINCO apariciones del mismo hombre y UNA sola montura repetida como continuidad, nunca cinco hombres distintos: 1) cuida un caballo en corral; 2) camina junto a La Chama majayura a distancia hacia rocas, sin contacto; 3) monta el mismo caballo durante la persecucion, con rifle enfundado y aperos subordinados; 4) deja caballo, rifle, silla y un pequeño bulto de valores en el suelo y continua a pie con ropa polvorienta; 5) reposa sentado dentro de la cueva con pies cubiertos por una tela limpia, recipiente de agua cercano y La Chama anciana a distancia cuidadosa, sin herida visible ni procedimiento. El rostro y conjunto completo permanecen iguales con desgaste progresivo.",
    scene: "Ruta continua de once capas desde corral a peñascos y cueva, construida solo con suelo, roca, postes, arquitectura y cielo. CERO vegetacion de cualquier clase. La distancia inagotable se expresa porque tres perfiles de loma casi iguales reaparecen a escalas decrecientes; luz cambia de mañana a noche y de nuevo a interior cálido sin paneles.",
    must: [
      "exactamente cinco apariciones del mismo hombre y una unica identidad femenina repetida solo en momentos 2 y 5",
      "mismo Kemiisa, Kotin, si'ira, waireñas y Wom/Woma con desgaste acumulativo, nunca cambio de traje",
      "un solo caballo total de continuidad: cuidado, montado y luego detenido junto a bienes abandonados",
      "rifle siempre enfundado y finalmente en el suelo; nunca apuntado, sostenido o disparado",
      "pies del estado final completamente cubiertos por tela limpia, sin sangre, lamido, boca o herida abierta",
      "La Chama final es inequívocamente anciana, con cabello gris hasta los tobillos y Wayuushein carbon completa; nunca mujer joven de blanco",
      "tres perfiles de loma repetidos fisicamente para la distancia y once profundidades full bleed",
      "cero plantas, cactus, cardones, rosetas, arbustos, hojas o flores en toda la imagen",
    ],
    avoid: [
      "five different men, multiple riders, horse collapse, animal abuse, chase action spectacle, gunfire or weapon threat",
      "new partner, child, family, attack, death, cave feast, cannibalism or horror",
      "licking feet, exposed soles as fetish, blood, bandage procedure, doctor, medicine, miracle cure or glowing hands",
      "modern cowboy tack, denim, boots, lasso, sombrero vueltiao, bare torso or clothing drift",
      "agave, aloe, yucca, saguaro, cardon, cactus, rosette, shrub, leaf, flower or any vegetation",
    ],
    culture: MAN_CULTURE,
    human: true,
  }),

  "hijo_chama__identity_sheet": simple({
    title: "Hijo de La Chama · identidad infantil protegida",
    focus: "Ficha cuadrada con exactamente TRES vistas del mismo niño: frente en tres cuartos, perfil y espalda en tres cuartos. Rostro redondo, nariz corta, cabello negro rizado y expresion atenta. Viste Kemiisa verde trupillo de mangas completas y largo a media cadera, Wusi/Aichee arena seguro y secundario, si'ira rojo arcilla lisa y dos waireñas ocre abiertas. Sus manos estan libres; no porta arma, juguete ritual o adorno. Cuerpo completo, proporcion infantil y postura autonoma.",
    scene: "Sendero seguro de paper craft en siete profundidades con piedras suaves, tres vistas separadas, sombra de un burro muy lejano sin jinete y loma. CERO vegetacion de cualquier clase: solo suelo, piedras, sendero, burro distante, loma, nubes y cielo. Full bleed sin paneles.",
    must: [
      "exactamente tres vistas del mismo niño y ninguna otra persona",
      "rostro, cabello, escala, Kemiisa verde, base arena, si'ira roja y waireñas ocre identicos",
      "camisa de mangas como capa dominante; torso, cintura y pelvis seguros y opacos",
      "manos vacias, postura atenta y proporcion infantil natural",
      "un unico burro muy lejano como escala, sin montura dramatica",
      "cero plantas, cactus, cardones, rosetas, arbustos, hojas o flores",
      "siete planos de paper craft 3D full bleed con soporte oculto",
    ],
    avoid: [
      "adult body, loincloth-only child, bare chest, naked legs emphasized, jewelry, face paint, weapon or ritual prop",
      "La Chama, father, family, partner, close donkey, attack, fear, crying, injury, death or danger",
      "hybrid child, animal ears, paws, glowing eyes or inherited monster traits",
      "agave, aloe, yucca, saguaro, cardon, cactus, rosette, shrub, leaf, flower or any vegetation",
    ],
    culture: SON_CULTURE,
    human: true,
  }),

  "companera_chama__presence_model": simple({
    title: "Compañera de La Chama · presencia situada sin biografía inventada",
    focus: "Modelo horizontal de presencia con UNA unica mujer adulta visible de cuerpo completo y La Chama majayura reducida a una silueta vestida muy distante que la llama desde otro plano. La compañera camina desde la izquierda y se detiene orientada hacia un paso entre rocas; viste Wayuushein azul gris larga, pechera ocre, waireñas carbon y dos trenzas bajas. No se afirma parentesco, poder o identidad duplicada. La llamada se expresa por giro de cabeza, distancia y una banda estrecha del sendero que une ambas posiciones, sin ondas, texto o gesto teatral.",
    scene: "Panorama 16:9 de ocho capas entre planicie y peñascos: mujer cercana, sendero plegado, dos masas rocosas medias, La Chama diminuta al fondo y cielo mate. CERO vegetacion de cualquier clase: ningun cactus, cardon, roseta, arbusto, hoja o flor. No hay hombre, burro, cueva abierta o familia.",
    must: [
      "exactamente dos mujeres visibles: compañera cercana y La Chama majayura muy distante",
      "compañera con Wayuushein azul gris completa, pechera ocre, waireñas y dos trenzas",
      "La Chama distante con Wayuushein rojo arcilla completa, sin confundir identidades",
      "llamada legible por orientacion, mirada y sendero continuo, no por aura o voz dibujada",
      "paso entre dos masas rocosas como direccion, no portal o templo",
      "cero vegetacion de cualquier clase; el paisaje se construye solo con suelo, roca, sendero y cielo",
      "ocho profundidades full bleed con aire y sombras fisicas",
    ],
    avoid: [
      "identical twins, sisters claimed as fact, servant, follower crowd, man, child, donkey, horse or family",
      "telepathy beam, sound wave, speech bubble, glowing path, portal, magic smoke or hand spell",
      "uniform dresses, exposed body, face paint, jewelry, ritual staff or seduction",
      "agave, aloe, yucca, saguaro, cardon, cactus, rosette, shrub, leaf, flower or any vegetation",
    ],
    culture: COMPANION_CULTURE,
    human: true,
  }),

  "familia_chama__group_grammar": simple({
    title: "Familia de La Chama · variación humana y tensión espacial",
    focus: "Gramática 16:9 con exactamente CUATRO parientes adultos como muestra editorial reversible, no censo total: dos mujeres y dos hombres de apariencia humana, todos con rostros y conjuntos Wayuu completos distintos. Mujer mayor: Wayuushein ciruela; mujer adulta: Wayuushein azul gris; hombre mayor: She'etebe carbon de cuerpo entero; hombre adulto: Kemiisa arena bajo Kotin verde oscuro. Una mujer trae un recipiente de agua, un hombre lleva un pequeño haz de leña y dos mantienen manos vacias. La hostilidad potencial se lee porque ocupan cuatro profundidades y forman un arco que estrecha el paso hacia una sala vacia; nadie ataca, toca, grita o porta armas.",
    scene: "Interior rocoso-domestico full bleed de diez capas: roca cercana, cuatro figuras escalonadas, sala, cuarto oscuro no ominoso, chinchorro vacio y abertura exterior. El espacio parece casa por relaciones y uso, no por decoracion fantastica.",
    must: [
      "exactamente cuatro adultos de apariencia humana como muestra editorial y ninguna quinta figura",
      "dos mujeres con Wayuushein completas distintas, un hombre con She'etebe y otro con Kotin sobre Kemiisa",
      "cuatro rostros, edades aparentes, colores, posturas y distancias diferentes; ningun uniforme",
      "un recipiente de agua y un haz de leña asignados a personas distintas; exactamente dos manos vacias",
      "tension por arco espacial y cierre de paso, nunca violencia, monstruosidad o armas",
      "diez planos full bleed con sala, cuarto, chinchorro vacio, aire, oclusiones y soporte oculto",
    ],
    avoid: [
      "La Chama, man, child, partner, fifth person, crowd, identical clones, monster family, fangs, claws or glowing eyes",
      "attack, knife, rifle, club, blood, body, feast, cannibalism, tied person or threat gesture",
      "four loincloths, four bare torsos, matching robes, black cult uniform, face paint, masks or clan marks",
      "palace, temple, dungeon, altar, ritual chamber or horror cave",
    ],
    culture: FAMILY_CULTURE,
    human: true,
  }),

  "burro_chama__identity_sheet": simple({
    title: "Burro de La Chama · identidad deteriorada sin maltrato",
    focus: "Ficha cuadrada con exactamente TRES vistas del mismo burro domestico en su estado inicial deteriorado: frente en tres cuartos, perfil completo y espalda en tres cuartos. Cuerpo delgado pero estable, pelaje de papel gris arena irregular, oreja izquierda con una pequeña muesca, hocico claro y cola corta oscura. No hay herida, hueso expuesto, carga excesiva, cuerda tensa o sufrimiento teatral. Una manta de carga vieja y lisa queda plegada aparte en una sola vista para escala; no cubre el cuerpo.",
    scene: "Sendero semiarido full bleed de siete planos con piedras cercanas, tres vistas separadas y loma lejana. CERO vegetacion de cualquier clase: ningun cactus, cardon, roseta, arbusto, hoja o flor. Sin persona, corral o estudio.",
    must: [
      "exactamente tres vistas del mismo burro y ningun otro animal",
      "misma oreja izquierda con muesca, hocico claro, cola oscura y proporciones en las tres vistas",
      "estado delgado y de pelaje irregular sin herida, sangre, costillas extremas o colapso",
      "una unica manta de carga vieja y lisa plegada aparte en una vista",
      "cero vegetacion de cualquier clase; solo suelo, piedras, loma, nubes y cielo",
      "anatomia completa de papel recortado con articulaciones, fibras y sombras reales",
      "siete profundidades full bleed sin base, borde, mesa o estudio",
    ],
    avoid: [
      "fat glossy state, horse, mule, second donkey, rider, child, woman, man, saddle, heavy load or rope restraint",
      "animal abuse, starving spectacle, exposed ribs, wound, broken leg, crying animal or corpse",
      "fantasy mount, glowing eyes, wings, horn, zebra stripes or magical markings",
      "agave, aloe, yucca, saguaro, cardon, cactus, rosette, shrub, leaf, flower or any vegetation",
    ],
  }),

  "burro_chama__state_sheet": simple({
    title: "Burro de La Chama · continuidad entre dos estados",
    focus: "Panorama 16:9 con exactamente DOS apariciones completas del mismo burro separadas por distancia, no dos animales simultaneos: izquierda, estado deteriorado y delgado con pelaje gris arena irregular; derecha, estado gordo y lustroso con el mismo color natural, oreja izquierda con muesca, hocico claro y cola oscura. La mejora se lee en volumen corporal, capas de pelaje ordenadas y postura estable; no cambia especie, tamaño oseo, marcas o personalidad. Entre ambos, cuatro pliegues del sendero pasan de rugosos a prensados y enlazan fisicamente los estados.",
    scene: "Ruta continua full bleed en ocho capas desde suelo aspero cercano hasta planicie limpia distante. CERO vegetacion de cualquier clase: ningun cactus, cardon, roseta, arbusto, hoja o flor; la escala se sostiene solo con sendero, piedras, lomas, nubes y cielo. No hay personas ni carga.",
    must: [
      "exactamente dos apariciones del mismo burro, una por estado, con continuidad inequívoca",
      "misma muesca de oreja, hocico, cola, color y anatomia base en ambos estados",
      "cambio solo en volumen, orden del pelaje y postura; ningun brillo sobrenatural",
      "exactamente cuatro pliegues del mismo sendero que pasan de rugosos a prensados",
      "cero vegetacion de cualquier clase y un solo paisaje continuo sin paneles",
      "ocho profundidades 3D full bleed con aire y sombras proyectadas",
    ],
    avoid: [
      "two different donkey breeds, horse transformation, mule, unicorn, duplicate landscape, before-after labels or split screen",
      "glossy plastic animal, magic sparkles, beam, smoke, portal, glow, motion blur or digital morph",
      "emaciation horror, injury, collapse, overfeeding caricature, rider, child or luggage",
      "agave, aloe, yucca, saguaro, cardon, cactus, rosette, shrub, leaf, flower or any vegetation",
    ],
  }),

  "caballos_hombre_chama__group_grammar": simple({
    title: "Caballos del hombre · cuidado y variación del rebaño",
    focus: "Gramática horizontal de exactamente CINCO caballos domesticos completos y distintos dentro de un corral abierto: alazán adulto en primer plano, yegua gris clara, caballo oscuro con una estrella blanca pequeña, joven castaño y caballo bayo. Se diferencian por color natural, edad aparente, postura y profundidad; ninguno es semental heroico o montura fantastica. Un cepillo, una manta de silla lisa y un recipiente de agua aparecen separados como huellas de cuidado, sin persona. El caballo oscuro con estrella pequeña queda marcado como individuo que puede continuar en la hoja del hombre, pero no se dramatiza agotamiento.",
    scene: "Corral bajo y abierto de nueve planos con postes simples, sombra de enramada, bebedero, cinco animales escalonados, planicie y loma. Full bleed; ninguna cerca encierra visualmente el mundo.",
    must: [
      "exactamente cinco caballos completos con cinco colores y posturas naturales distintos",
      "un unico caballo oscuro con estrella blanca pequeña como marcador de continuidad",
      "un cepillo, una manta de silla lisa y un recipiente de agua, cada uno visible una sola vez",
      "corral abierto, postes simples y sombra de enramada sin hacienda colonial o establo europeo",
      "animales tranquilos, bien cuidados y sin uniformidad o coreografia",
      "nueve profundidades full bleed con anatomia de papel, fibras y sombras fisicas",
    ],
    avoid: [
      "donkey, mule, rider, caretaker, crowd, more than five horses, identical herd or racing formation",
      "western ranch, barn, cowboy tack, trophy horse, armor, fantasy saddle, horn, wings or glowing mane",
      "collapsed horse, exhaustion, whip, lasso, wound, blood, branded clan mark or animal abuse",
    ],
  }),

  "ollas_mochilas_chama__object_sheet": simple({
    title: "Ollas y mochilas de La Chama · transformación sin patrones inventados",
    focus: "Ficha cuadrada en un solo suelo continuo con exactamente DOS grupos equivalentes de carga, no una coleccion decorativa. Izquierda: exactamente TRES ollas domesticas de papel ennegrecido y mate, una con borde quebrado, una con asa reparada y una pequeña intacta pero gastada. Derecha: exactamente TRES mochilas nuevas de igual volumen relativo, construidas con papel y fibra lisa en carbón, rojo arcilla y arena, sin kana, geometria, logo, borla o patron. Tres bandas de carga neutras conectan cada volumen viejo con el nuevo mediante pliegues fisicos; no hay texto ni luz.",
    scene: "Suelo rocoso full bleed en siete profundidades con ollas cercanas, bandas plegadas en plano medio, mochilas al fondo cercano y pared de roca mate. Ninguna persona, animal, casa o mesa.",
    must: [
      "exactamente tres ollas a la izquierda y exactamente tres mochilas a la derecha",
      "correspondencia uno a uno por escala: grande, mediana y pequeña",
      "ollas ennegrecidas, gastadas y una quebrada sin restos, fuego o comida",
      "mochilas nuevas lisas en carbon, rojo arcilla y arena sin patron, kana o simbolo",
      "exactamente tres bandas neutrales de carga plegadas que conectan volumen con volumen",
      "siete planos full bleed con fibras, cantos, costuras y sombras reales",
    ],
    avoid: [
      "decorative geometric bag, kana, clan mark, branded mochila, souvenir product shot, text, label or price",
      "gold, jewels, treasure, food, fire, smoke, broken shards, hands, woman, child or donkey",
      "magic glow, particles, beam, portal, before-after split, arrows or infographic",
    ],
  }),

  "esterilla_chama__object_sheet": simple({
    title: "Esterilla de La Chama · vieja y nueva",
    focus: "Ficha cuadrada con exactamente DOS apariciones del mismo modelo de esterilla rectangular de fibra de papel. En primer plano, vieja, deformada, con bordes deshilachados y tres pliegues irregulares; al fondo cercano, nueva, plana, firme y con los mismos diecisiete listones longitudinales lisos. No hay patron geometrico, letras, figura humana o valor ritual. Una sola fibra continua sale del borde viejo, atraviesa dos profundidades y entra en el borde nuevo como marcador material de identidad.",
    scene: "Suelo de cueva full bleed en seis capas, con esterilla vieja cercana, fibra puente, esterilla nueva al fondo y roca mate. Luz lateral revela relieve y sombra sin convertirlo en estudio de producto.",
    must: [
      "exactamente dos apariciones de la misma esterilla y ninguna tercera",
      "diecisiete listones longitudinales lisos en ambas; misma proporcion rectangular",
      "estado viejo con tres pliegues y bordes deshilachados; estado nuevo plano y firme",
      "una unica fibra continua que conecta ambos bordes sin brillar",
      "ningun patron, kana, simbolo, texto, persona, animal u objeto adicional",
      "seis profundidades full bleed con volumen, aire y sombras fisicas",
    ],
    avoid: [
      "carpet, Persian rug, prayer mat, textile pattern, geometric motif, clan mark, magic carpet or flying object",
      "bed, hammock, blanket, body, child, woman, hands, domestic catalog or product studio",
      "glow, particles, smoke, beam, split screen, label or digital texture",
    ],
  }),

  "manta_roja_chama__object_sheet": simple({
    title: "Manta roja de La Chama · prenda transformada, no emblema de riqueza",
    focus: "Ficha cuadrada con exactamente DOS vistas completas de la misma Wayuushein femenina extendida sobre un suelo continuo, sin cuerpo. Cada prenda tiene una silueta MUY LARGA desde hombros hasta tobillos y DOS MANGAS LARGAS hasta las muñecas: el ancho de cada manga extendida equivale al menos a la mitad del largo del cuerpo. Izquierda: Wayuushein gris carbon sucia, rota en un borde y arrugada pero opaca. Derecha: la misma Wayuushein rojo profundo nueva, amplia, lisa y con la misma costura vertical ligeramente desplazada. Cuello alto con abertura pequeña, nunca escote. La version roja se asocia en la fuente con mujeres ricas, pero riqueza se expresa solo por integridad, saturacion y buena confeccion: no oro, joyas, bordado, kana o patron. Una costura de papel continua enlaza las dos posiciones.",
    scene: "Repisa rocosa full bleed de seis profundidades con prenda vieja cercana, costura puente, prenda roja al fondo cercano y pared de cueva. Sin maniqui, persona, espejo, perchero o mesa.",
    must: [
      "exactamente dos vistas de la misma manta femenina y ninguna persona",
      "dos mangas largas hasta muñeca y cuerpo muy largo hasta tobillos en ambos estados; silueta de Wayuushein, no tunica corta",
      "ancho extendido de cada manga al menos igual a la mitad del largo del cuerpo y abertura de cuello pequeña y alta",
      "estado viejo opaco y roto solo en un borde; estado nuevo rojo profundo, liso e integro",
      "misma costura vertical desplazada y una costura fisica continua entre estados",
      "riqueza por calidad material, nunca joyeria, oro, emblema o ornamentacion",
      "seis capas full bleed con pliegues, fibras, cantos y sombras reales",
    ],
    avoid: [
      "woman, mannequin, dress form, body shape, lingerie, cape, poncho, skirt, robe or fashion runway",
      "short sleeve, elbow sleeve, T-shirt, short tunic, knee-length dress, wide neckline, V neckline or exposed chest opening",
      "kana, embroidery, painted motif, clan mark, gold trim, jewels, crown, sequins, luxury logo or commercial product",
      "transparent fabric, exposed tear, blood stain, magical glow, particles or split-screen graphic",
    ],
  }),

  "cueva_casa_chama__spatial_model": simple({
    title: "Cueva-casa de La Chama · sala, cuarto y circulación entre peñascos",
    focus: "Modelo espacial 16:9 vacio y APROXIMADO de la cueva-casa descrita por Pineda. Dos grandes masas de roca estratificada forman un acceso angosto que gira antes de abrirse a una sala habitable. La sala contiene un unico chinchorro liso suspendido entre dos apoyos naturales; detrás, una abertura baja conduce a un cuarto profundo. Un sendero lateral permite entrar con leña y otro pasa junto a un recipiente de agua. La habitabilidad se lee por relaciones, sombra y circulacion, no por fachada, templo o decoracion. No se afirma sistema constructivo Wayuu universal ni se copian patrones.",
    scene: "Vista oblicua elevada en once profundidades: roca cercana, giro del acceso, sala, chinchorro, abertura del cuarto, sendero de leña, recipiente de agua, estratos posteriores y cielo visible por una grieta alta. Full bleed sin corte de casa de muñecas.",
    must: [
      "un acceso angosto con giro y una sala mas amplia claramente diferenciados",
      "un unico chinchorro liso, una abertura baja a cuarto y dos rutas laterales de circulacion",
      "un pequeño haz de leña y un recipiente de agua como utileria espacial, sin personas",
      "roca de papel estratificada, suelo continuo, sombra habitable y grieta alta de cielo",
      "once profundidades recorribles con primer plano, sala, cuarto y fondo ocluido",
      "mundo full bleed sin fachada cortada, borde, base, carton, mesa o estudio",
    ],
    avoid: [
      "La Chama, man, child, family, partner, silhouette, body, eyes, animal or human shadow",
      "palace, temple, dungeon, altar, shrine, cave painting, glyph, clan mark, treasure, fire or ritual object",
      "modern house, concrete room, colonial hacienda, generic tipi, Amazonian maloca or fantasy cavern",
      "attack scene, feast, bones, blood, corpse, prison, horror lighting or giant monster scale",
    ],
  }),

  "nueva_pareja_hombre_chama__identity_sheet": simple({
    title: "Nueva pareja del hombre · identidad cotidiana y voz propia",
    focus: "Ficha cuadrada con exactamente TRES vistas de la misma mujer adulta: frente en tres cuartos, perfil de cuerpo completo y espalda en tres cuartos. Rostro ovalado, nariz ancha recta y trenza negra lateral. Viste Wayuushein ocre tostado larga, amplia, lisa y de mangas completas sobre pechera indigo; waireñas arena. En una vista sostiene un unico recipiente liso de agua a la altura baja; en otra abre una mano como gesto de comunicar. No mira con celos, no amenaza y no se presenta como rival moral.",
    scene: "Borde de una casimba aproximada en siete planos: suelo humedo cercano, tres vistas separadas, depresion de agua pequeña, matorral redondeado y loma. Full bleed sin paneles ni rancheria universal.",
    must: [
      "exactamente tres vistas de la misma mujer y ninguna otra persona",
      "mismo rostro, trenza lateral, Wayuushein ocre, pechera indigo y waireñas arena",
      "un unico recipiente liso en una vista y un gesto de comunicar en otra",
      "cuerpo entero cubierto, mangas completas y volumen amplio no ceñido",
      "casimba pequeña como contexto situado y no monumento o pozo moderno",
      "siete profundidades full bleed con fibras, aire y sombras fisicas",
    ],
    avoid: [
      "La Chama, child, man, companion, family, second woman, jealousy scene, confrontation or accusation",
      "tight dress, neckline, jewelry, face paint, weapon, finger pointing, angry pose or villain styling",
      "decorated water pot, kana, clan mark, ritual vessel, concrete well, faucet or modern plastic container",
    ],
    culture: NEW_PARTNER_CULTURE,
    human: true,
  }),

  "metamorfosis_chama__phenomenon_rule": simple({
    title: "Metamorfosis de La Chama · regla material reversible",
    focus: "Regla 16:9 sin texto que demuestra COMO una misma continuidad editorial puede pasar entre cinco formas completas sin inventar anatomia intermedia. Exactamente CINCO posiciones siguen una curva: anciana cubierta, majayura cubierta, gran felino americano de morfologia de jaguar, huevo mate y flor no especificada. Entre cada par hay una unica lamina de papel parcialmente girada: el color exterior de una forma se pliega hacia dentro y deja ver la pequeña veta cobre-carbon que reaparece en el canto de la siguiente. Ninguna forma se derrite, fusiona o queda a mitad de cambio. La secuencia puede leerse en ambos sentidos por la simetria de pliegues.",
    scene: "Anfiteatro natural de roca en diez profundidades. Las cinco formas ocupan niveles escalonados y cuatro laminas-puente quedan suspendidas por tension fisica entre estratos, con sombras reales y sin soporte exterior visible.",
    must: [
      "exactamente cinco formas completas y exactamente cuatro laminas-puente materiales",
      "anciana y majayura completamente vestidas con sus conjuntos ya definidos",
      "gran felino natural completo, un huevo unico y una flor unica, sin caras o rasgos humanos",
      "veta cobre-carbon solo en cantos internos y cuatro pliegues, nunca como resplandor o simbolo",
      "lectura reversible por giro, oclusion y continuidad de materia, sin anatomia intermedia",
      "diez planos full bleed con aire, sombras de contacto y profundidad fotografica",
    ],
    avoid: [
      "partial morph, hybrid anatomy, woman with fur, paws or tail, egg face, flower woman, body horror or melting figure",
      "magic smoke, sparkles, aura, beam, portal, vortex, glowing seam, digital particles or motion lines",
      "sixth form, duplicate form, tiger stripes, named flower species, skeleton, demon or witch",
      "sexualized majayura, exposed elder, face paint, jewelry, invented symbol or medical hair use",
    ],
    culture: METAMORPHOSIS_CULTURE,
    human: true,
  }),

  "transformacion_carga_chama__phenomenon_rule": simple({
    title: "Transformación de la carga · cuatro cambios sincronizados",
    focus: "Panorama 16:9 de regla material con exactamente CUATRO cadenas de transformacion paralelas dentro de un solo sendero: arriba, burro deteriorado a burro gordo y lustroso; debajo, tres ollas ennegrecidas a tres mochilas de hombro ovoides, lisas y sin patrones, cada una con una sola correa larga; luego, esterilla vieja a esterilla nueva; abajo, Wayuushein gris sucia y rota a Wayuushein roja nueva. LAS DOS WAYUUSHEIN ESTAN COMPLETAMENTE DESPLEGADAS, con cuerpo muy largo hasta tobillos, cuello alto pequeño y dos mangas largas hasta muñecas; nunca cobijas plegadas o rectangulos. Cada cadena tiene un unico pliegue central de papel que oculta parcialmente el estado inicial y revela el final. Una misma sombra diagonal cruza los cuatro pliegues para mostrar simultaneidad. No hay persona, luz magica, texto, flecha o marco.",
    scene: "Sendero rocoso full bleed de once profundidades visto oblicuamente. Las cuatro cadenas ocupan alturas fisicas diferentes como terrazas conectadas, no filas graficas. Roca cercana, estados iniciales, cuatro pliegues, estados finales, loma y cielo.",
    must: [
      "exactamente cuatro cadenas: burro, ollas a mochilas, esterilla y manta",
      "un unico burro repetido dos veces con mismos marcadores; tres ollas y tres mochilas equivalentes",
      "dos esterillas del mismo modelo y dos Wayuushein desplegadas del mismo corte largo, cada una con dos mangas largas y cuello alto pequeño",
      "exactamente cuatro pliegues centrales y una sombra diagonal fisica que los sincroniza",
      "mochilas y manta nuevas completamente lisas, sin kana, simbolo, bordado o lujo ornamental",
      "once profundidades full bleed con terrazas, aire, oclusiones y soporte exterior oculto",
    ],
    avoid: [
      "La Chama, child, man, partner, family, hands, rider, extra animal or human silhouette",
      "infographic rows, arrows, labels, four panels, split screen, conveyor belt, workshop or product catalog",
      "gold, jewels, treasure, glowing objects, sparkles, smoke, beam, portal, digital morph or levitation",
      "patterned mochila, kana, clan mark, luxury embroidery, magic carpet, horse or mule",
      "folded blanket, rectangular cloth, short sleeve, T-shirt, short tunic, knee-length dress or garment without two long sleeves",
    ],
  }),
};

export const WAYUU_LA_CHAMA_MODEL_IDS_V3 = [
  "la_chama__identity_sheet",
  "la_chama__state_sheet",
  "hombre_caballos_chama__identity_sheet",
  "hombre_caballos_chama__state_sheet",
  "hijo_chama__identity_sheet",
  "companera_chama__presence_model",
  "familia_chama__group_grammar",
  "burro_chama__identity_sheet",
  "burro_chama__state_sheet",
  "caballos_hombre_chama__group_grammar",
  "ollas_mochilas_chama__object_sheet",
  "esterilla_chama__object_sheet",
  "manta_roja_chama__object_sheet",
  "cueva_casa_chama__spatial_model",
  "nueva_pareja_hombre_chama__identity_sheet",
  "metamorfosis_chama__phenomenon_rule",
  "transformacion_carga_chama__phenomenon_rule",
];

export default WAYUU_LA_CHAMA_DIRECTIONS_V3;
