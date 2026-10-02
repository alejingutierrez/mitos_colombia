/**
 * Direcciones del lote 24 · La India Worunka.
 *
 * La secuencia producida corresponde a la version narrada por Juancito
 * Iguaran, interpretada por Roberto Iguaran y publicada por Milciades Chaves
 * en 1946. Las variantes de Isaacs, Fuchs, Perrin, Paz Ipuana y Pimienta se
 * documentan como contraste, pero no se mezclan con esta cadena. La violencia
 * corporal y la sexualidad quedan detectadas y fuera de imagen. La magia se
 * construye con pliegues, transferencia de color, sustitucion mineral,
 * crecimiento y clima en capas fisicas.
 */

const STORY_SOURCE = "chaves_worunka_1946";
const VARIANT_SOURCE = "guerra_ontologia_wayuu_2019";
const BIRD_SOURCE = "corpoguajira_sangre_toro_2022";
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
  "nudity, exposed breast, exposed genital, erotic pose, sexual act, childbirth, fetus, surgery, open wound, blood, body horror or anatomical diagram",
  "impact against a body, broken teeth on a body, cut ribs, knife, weapon in use, threat, injured woman, suffering child or violence spectacle",
  "sale of a woman, ownership gesture, chained person, submissive pose or presenting a historical gender judgment as current Wayuu law",
  "intoxication spectacle, drunken caricature, vomiting, bar, branded bottle, recipe, fermentation instructions or alcohol advertising",
  "generic pan-indigenous costume, feather war bonnet, Andean poncho, cowboy costume, fantasy shaman or garment reduced to a lower-body strip",
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

function culture({
  person,
  profile,
  moment,
  activity,
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
  collectiveWardrobe,
  occasion = "mixed_narrative",
}) {
  return {
    cultural_scope: "wayuu",
    person_scope: person,
    temporal_register: "mythic_indeterminate",
    time_basis: "Chaves publica la version en 1946, pero la accion pertenece a un tiempo primordial y no describe ropa; todo conjunto es traduccion editorial Wayuu reversible y no reconstruccion prehispanica",
    narrative_moment: moment,
    activity_context: activity,
    occasion_context: occasion,
    considered_ensembles: [
      {
        id: chosenId,
        label: chosenLabel,
        fit: "mejor traduccion editorial reversible para esta persona, funcion y continuidad",
        rationale,
        source_refs: [STORY_SOURCE, ...WARDROBE_SOURCES],
      },
      {
        id: "reduced_or_generic_costume",
        label: alternativeLabel,
        fit: "rechazado",
        rationale: "reduce el repertorio Wayuu a una pieza emblematica, borra la capa dominante o fabrica un disfraz primordial sin evidencia",
        source_refs: [STORY_SOURCE, "paz_ipuana_aleya_tomo_ii_2016", "icanh_organizacion_social_guajira_1950"],
      },
    ],
    chosen_ensemble: { id: chosenId, rationale, specification, layers },
    attire: dimension("include_contextual", "editorial_reversible", rationale, specification),
    footwear: dimension("include_contextual", "institutional_general", "el calzado completa la silueta y evita usar pies descalzos como marcador automatico de autenticidad o antiguedad", footwear),
    accessories: accessories
      ? dimension("include_contextual", "institutional_general", "solo se incluyen piezas funcionales del conjunto elegido; no se acumulan signos de rango", accessories)
      : dimension("omit_contextually", "source_specific", "la fuente no exige joya, rango, instrumento o carga personal adicional"),
    face_paint: dimension("omit_contextually", "source_specific", "la version no documenta simultaneamente persona, ocasion, material, funcion y motivo facial; no se inventa pintura"),
    wardrobe_profile: profile,
    wardrobe_refs: wardrobeRefs,
    wardrobe_visual_contract: contract(silhouette, front, back, reject),
    source_refs: [STORY_SOURCE, VARIANT_SOURCE, ...WARDROBE_SOURCES],
    continuity_markers: continuity,
    ...(collectiveWardrobe ? { collective_wardrobe: collectiveWardrobe } : {}),
  };
}

const WORUNKA_CULTURE = culture({
  person: "Worunka, mujer Wayuu adulta primigenia de la version de Chaves; no se fija parentesco, edad exacta o desnudez de otras variantes",
  profile: "female",
  moment: "identidad corporal y continuidad entre embarazo debil, fortalecimiento y forma petrea",
  activity: "caminar desde la Macuira, permanecer junto al arroyo, sembrar y sostener postura autonoma; nunca mostrarse durante un procedimiento corporal",
  chosenId: "plain_full_length_wayuushein_for_worunka",
  chosenLabel: "Wayuushein larga lisa sobre pechera, waireñas y trenza baja como conjunto completo y reversible",
  alternativeLabel: "desnudez de baño, vestido ceñido o manta sin mangas usada como disfraz primordial",
  rationale: "la version no describe el corte, pero Worunka necesita una silueta femenina Wayuu completa que conserve cobertura, agencia y continuidad en todos los estados humanos",
  specification: "Wayuushein azul noche larga hasta los tobillos, amplia, lisa y con dos mangas completas sobre pechera terracota opaca; waireñas arena abiertas; trenza negra gruesa y baja; sin joya, sombrero, patron o pintura",
  layers: [
    "pechera terracota opaca como capa interior",
    "Wayuushein azul noche larga, amplia, lisa y con mangas completas",
    "dos waireñas arena abiertas",
    "trenza negra gruesa y baja separada de la espalda",
  ],
  wardrobeRefs: ["wayuushein_manta", "pechera_female_underlayer", "wairenas"],
  footwear: "dos waireñas arena abiertas, planas y sin borlas, con talon y tiras legibles",
  accessories: null,
  silhouette: "gran volumen azul noche de hombros a tobillos, mangas completas, pechera interior y trenza baja; el embarazo modifica solo el frente sin ceñir la prenda",
  front: "abertura alta y pequena con pechera opaca; mangas completas, cuerpo amplio y dos waireñas visibles",
  back: "caida continua de la Wayuushein hasta tobillos y trenza negra separada; ninguna abertura o espalda expuesta",
  reject: "rechazar si se vuelve falda, tunica corta, vestido ceñido, cuerpo desnudo, vientre expuesto, manta sin mangas, cola de gala o prenda con patron",
  continuity: [
    "rostro ovalado, nariz ancha recta, pomulos altos y ceja derecha ligeramente elevada",
    "trenza negra gruesa y baja",
    "Wayuushein azul noche completa sobre pechera terracota",
    "waireñas arena abiertas",
    "ninguna pintura facial, joya, kana, marca clanil o anatomia expuesta",
  ],
});

const BODY_CULTURE = culture({
  person: "Worunka y un hombre Wayuu adulto anonimo reducido a rol relacional; ambos completamente vestidos y sin intervencion corporal visible",
  profile: "mixed_collective",
  moment: "regla material de debilidad, dos costillas ya separadas y fortalecimiento de Worunka",
  activity: "permanecer de pie en planos distintos mientras pliegues y piezas de papel representan el cambio sin tocar cuerpos",
  chosenId: "worunka_complete_manta_and_anonymous_man_full_kotin",
  chosenLabel: "Worunka con Wayuushein completa y hombre anonimo con Kotin sobre Kemiisa, ambos con calzado",
  alternativeLabel: "cuerpos desnudos o atuendos minimos para hacer visible la anatomia",
  rationale: "el cambio se explica con objetos y postura, no desvistiendo los cuerpos ni fabricando una operacion; las siluetas completas preservan humanidad y distancia",
  specification: "Worunka conserva Wayuushein azul noche y pechera terracota; el hombre lleva Kemiisa ocre de mangas bajo Kotin carbon largo y liso, si'ira secundaria, waireñas y Wom bajo",
  layers: [
    "Wayuushein y pechera completas de Worunka",
    "Kemiisa ocre de mangas y Kotin carbon dominante del hombre",
    "faja secundaria, dos pares de waireñas y Wom bajo",
    "dos costillas curvas de papel ya separadas y suspendidas entre planos sin contacto corporal",
  ],
  wardrobeRefs: ["wayuushein_manta", "pechera_female_underlayer", "wairenas", "kotin_male_manta", "kemiisa_piiraneeru", "sira_kumusu_aamuushi", "wom_woma_hat"],
  footwear: "Worunka con waireñas arena y hombre con waireñas carbon, ambos pares abiertos y completos",
  accessories: "un Wom bajo de fibra natural para el hombre; ningun instrumento, arma o joya",
  silhouette: "volumen largo azul de Worunka y volumen largo carbon del Kotin masculino permanecen separados por un corredor de piezas abstractas",
  front: "pecheras y Kemiisa cubren ambos torsos; las dos costillas de papel no se alinean con una herida ni atraviesan prendas",
  back: "la Wayuushein y el Kotin conservan caida completa; ninguna prenda desaparece para mostrar anatomia",
  reject: "rechazar si hay torso desnudo, prenda inferior aislada, costillas dentro de un cuerpo, corte, cicatriz, sangre, contacto invasivo o uniforme igual para ambos",
  continuity: [
    "Worunka conserva rostro, trenza y conjunto azul noche",
    "hombre anonimo con Kemiisa ocre, Kotin carbon, Wom bajo y rostro no canonizado",
    "dos costillas curvas de papel crudo siempre externas y completas",
    "distancia fisica entre figuras y cero contacto corporal",
  ],
  occasion: "visit_or_exchange",
});

const TRAVELERS_CULTURE = culture({
  person: "dos hombres Wayuu adultos anonimos enviados por Mareiwa, diferenciados por edad aparente, capa dominante y carga",
  profile: "mixed_collective",
  moment: "viaje por un camino largo, hallazgo de frutos colorados y regreso con semillas",
  activity: "caminar, observar, cortar un solo fruto maduro y transportar semillas en bolsas funcionales",
  chosenId: "two_complete_distinct_travel_ensembles",
  chosenLabel: "un She'etebe completo y un Kotin sobre Kemiisa, con fajas, waireñas, cabeza y cargas distintas",
  alternativeLabel: "dos torsos desnudos con piezas inferiores iguales y bolsas decorativas",
  rationale: "la fuente solo fija que son dos hombres y viajeros; variar capas completas y cargas hace legible el colectivo sin convertirlos en clones o guerreros",
  specification: "viajero mayor con She'etebe arena gris de cuerpo entero, si'ira, waireñas y Wom; viajero adulto con Kemiisa índigo bajo Kotin ocre largo, si'ira, waireñas y Kapateera lisa",
  layers: [
    "She'etebe arena gris de cuerpo entero para el mayor",
    "Kemiisa indigo y Kotin ocre largo para el segundo",
    "dos si'ira secundarias y dos pares de waireñas",
    "Wom bajo para uno y Kapateera lisa de viaje para el otro",
  ],
  wardrobeRefs: ["she_etebe_sheewe", "kotin_male_manta", "kemiisa_piiraneeru", "sira_kumusu_aamuushi", "asapatshee_koisuuttu_kuttiira", "wom_woma_hat", "kapateera_travel_bag"],
  footwear: "dos pares de waireñas abiertas en tonos distintos, nunca botas o pies descalzos",
  accessories: "Wom bajo liso y Kapateera tubular lisa con correa sin patron; ninguna arma o signo de rango",
  silhouette: "un cuerpo entero arena gris y otro volumen ocre abierto sobre mangas indigo; las dos siluetas no comparten contorno",
  front: "el She'etebe y la Kemiisa bajo Kotin se leen completos, con cargas asignadas a una sola persona",
  back: "She'etebe, Kotin y Kapateera mantienen volumen posterior; ninguna capa colapsa en una falda",
  reject: "rechazar clones, uniforme, torso descubierto, prenda inferior dominante, pantalon moderno, botas, poncho, mochila estampada o carga intercambiada",
  continuity: [
    "exactamente dos identidades anonimas y distintas",
    "viajero mayor con She'etebe arena gris y Wom",
    "viajero adulto con Kemiisa indigo, Kotin ocre y Kapateera lisa",
    "rostros, alturas y cargas diferentes; ninguna pintura facial",
  ],
  collectiveWardrobe: {
    variation_axis: "edad aparente, prenda dominante, color, cabeza, carga y posicion en la ruta",
    anti_uniformity_rule: "los dos hombres nunca repiten conjunto completo ni quedan reducidos a una misma pieza inferior",
    member_groups: [
      {
        id: "traveler_she_etebe",
        scope: "primer viajero, adulto mayor",
        ensemble: "She'etebe arena gris, si'ira secundaria, waireñas y Wom bajo",
        rationale: "silueta de cuerpo entero y proteccion funcional para el camino",
        source_refs: [STORY_SOURCE, "paz_ipuana_aleya_tomo_ii_2016"],
        wardrobe_profile: "male",
        wardrobe_refs: ["she_etebe_sheewe", "sira_kumusu_aamuushi", "asapatshee_koisuuttu_kuttiira", "wom_woma_hat"],
      },
      {
        id: "traveler_kotin_kemiisa",
        scope: "segundo viajero, adulto",
        ensemble: "Kemiisa indigo, Kotin ocre, si'ira, waireñas y Kapateera lisa",
        rationale: "capas separadas y carga de viaje distinta sin inventar rango",
        source_refs: [STORY_SOURCE, "paz_ipuana_aleya_tomo_ii_2016", "artesanias_comunidad_wayuu"],
        wardrobe_profile: "male",
        wardrobe_refs: ["kemiisa_piiraneeru", "kotin_male_manta", "sira_kumusu_aamuushi", "asapatshee_koisuuttu_kuttiira", "kapateera_travel_bag"],
      },
    ],
  },
  occasion: "travel",
});

const COMMUNITY_CULTURE = culture({
  person: "comunidad Wayuu de seis personas adultas como muestra editorial reversible de la cosecha, no censo total ni multitud intoxicada",
  profile: "mixed_collective",
  moment: "abundancia, siembra, cosecha y preparacion colectiva previa al cambio climatico",
  activity: "clasificar semillas, atender plantas, transportar cosecha, mover una tinaja cerrada y organizar recipientes; nadie bebe",
  chosenId: "six_distinct_complete_work_ensembles",
  chosenLabel: "tres Wayuushein completas y tres conjuntos masculinos con She'etebe, Kotin o Kemiisa, todos variados por tarea",
  alternativeLabel: "fila de mantas iguales y hombres con torso descubierto o ropa minima",
  rationale: "la fuente nombra una comunidad contenta, no un uniforme; seis conjuntos completos hacen visible cooperacion, edad y tarea sin convertir la bebida en identidad cultural",
  specification: "tres mujeres con Wayuushein largas verde oscuro, ciruela y azul gris sobre pecheras distintas; tres hombres con She'etebe carbon, Kotin arena sobre Kemiisa indigo y Kemiisa ocre con Asheinpalajanaa gris; seis pares de waireñas y cargas funcionales lisas",
  layers: [
    "tres pecheras y tres Wayuushein largas de colores distintos",
    "She'etebe, Kotin sobre Kemiisa y Kemiisa con Asheinpalajanaa como tres siluetas masculinas",
    "seis pares de waireñas y fajas secundarias donde corresponden",
    "un Wom, una Wo'olii lisa y recipientes de trabajo asignados, no decorativos",
  ],
  wardrobeRefs: ["wayuushein_manta", "pechera_female_underlayer", "wairenas", "she_etebe_sheewe", "kotin_male_manta", "kemiisa_piiraneeru", "asheinpalajanaa_male_wrap", "sira_kumusu_aamuushi", "wom_woma_hat", "woolii_waist_bag"],
  footwear: "seis pares de waireñas abiertas en tonos tierra, todos completos y ajustados a su persona",
  accessories: "un Wom, una Wo'olii lisa y recipientes de trabajo sin patrones; ninguna joya, corona o instrumento ritual",
  silhouette: "seis volúmenes completos con largos, mangas, envolventes y cargas diferentes; ningun cuerpo queda definido por cintura o color solamente",
  front: "las pecheras femeninas y capas superiores masculinas son visibles; manos y recipientes no ocultan la ropa",
  back: "mangas, caidas, Kotin, She'etebe y Asheinpalajanaa conservan volumen posterior en figuras giradas",
  reject: "rechazar uniformes, clones, hombres sin capa superior, tunicas cortas, falda masculina, patrones inventados, bebida en mano o fiesta caricaturesca",
  continuity: [
    "exactamente seis adultos: tres mujeres y tres hombres",
    "seis rostros, edades aparentes, tareas y conjuntos distintos",
    "tres Wayuushein largas y tres gramaticas masculinas completas",
    "ninguna pintura facial, uniforme, patron, arma o persona bebiendo",
  ],
  collectiveWardrobe: {
    variation_axis: "genero, edad aparente, tarea agricola, capa dominante, color, carga y distancia",
    anti_uniformity_rule: "ninguna de las seis personas repite el conjunto completo de otra y ningun hombre queda reducido a una prenda inferior",
    member_groups: [
      {
        id: "women_harvest_worunka",
        scope: "tres mujeres adultas de edades aparentes y tareas distintas",
        ensemble: "Wayuushein verde oscuro, ciruela y azul gris, largas sobre pecheras diferentes y waireñas",
        rationale: "variacion real dentro de una misma tipologia femenina completa",
        source_refs: [STORY_SOURCE, "artesanias_tejeduria_wayuu_2016", "mincultura_caracterizacion_wayuu"],
        wardrobe_profile: "female",
        wardrobe_refs: ["wayuushein_manta", "pechera_female_underlayer", "wairenas"],
      },
      {
        id: "men_harvest_worunka",
        scope: "tres hombres adultos de edades aparentes y tareas distintas",
        ensemble: "She'etebe carbon; Kotin arena sobre Kemiisa indigo; Kemiisa ocre con Asheinpalajanaa gris",
        rationale: "tres capas dominantes distintas para trabajo y traslado sin torso descubierto",
        source_refs: [STORY_SOURCE, "paz_ipuana_aleya_tomo_ii_2016", "minenergia_abc_relacionamiento_wayuu_2016"],
        wardrobe_profile: "male",
        wardrobe_refs: ["she_etebe_sheewe", "kotin_male_manta", "kemiisa_piiraneeru", "asheinpalajanaa_male_wrap", "sira_kumusu_aamuushi", "asapatshee_koisuuttu_kuttiira"],
      },
    ],
  },
  occasion: "visit_or_exchange",
});

const ALLIANCE_CULTURE = {
  ...COMMUNITY_CULTURE,
  person_scope: "dos pares de adultos Wayuu y dos mayores de familia como gramatica relacional historica, todos completamente vestidos y sin compraventa corporal",
  narrative_moment: "contraste entre dos direcciones de visita y compensacion narradas por Chaves",
  activity_context: "aproximarse a una casa, conversar a distancia y ubicar animales y bienes entre familias; sin contacto sexual, boda reconstruida o gesto de posesion",
  chosen_ensemble: {
    ...COMMUNITY_CULTURE.chosen_ensemble,
    id: "six_distinct_complete_work_ensembles",
    rationale: "seis conjuntos completos y variados mantienen a todas las personas como sujetos y dejan que la direccion del sendero y los bienes, no el cuerpo, expliquen el cambio",
    specification: "tres mujeres con Wayuushein largas sobre pechera y tres hombres con She'etebe, Kotin sobre Kemiisa y Asheinpalajanaa; waireñas y cargas lisas; ningun uniforme o jerarquia visual",
  },
  continuity_markers: [
    "exactamente seis adultos completamente vestidos, tres mujeres y tres hombres",
    "un mismo sendero trenzado cambia de direccion entre dos momentos sin flechas graficas",
    "animales y bienes quedan en un espacio intermedio, no adheridos a una persona",
    "ninguna pintura facial, ceremonia inventada, compra corporal o gesto de posesion",
  ],
};

function simple({ title, focus, scene, must, avoid = [], cultureDecision, human = false }) {
  return {
    title,
    focus,
    scene,
    must_show: must,
    avoid: [...COMMON_AVOID, ...avoid],
    ...(cultureDecision ? { material_culture: cultureDecision } : {}),
    ...(human ? { human_presenting: true } : {}),
  };
}

export const WAYUU_WORUNKA_DIRECTIONS_V3 = {
  "worunka__identity_sheet": simple({
    title: "Worunka · identidad humana completa y autónoma",
    focus: "Ficha cuadrada con exactamente TRES vistas de la misma Worunka adulta: frente en tres cuartos, perfil completo y espalda en tres cuartos. Rostro ovalado, nariz ancha recta, pomulos altos, ceja derecha ligeramente elevada y trenza negra gruesa baja. Viste Wayuushein azul noche larga hasta los tobillos, amplia, lisa y con dos mangas completas sobre pechera terracota; waireñas arena abiertas. Su cuerpo es adulto, no sensualizado y no muestra embarazo en la ficha de identidad. Manos vacias y postura firme.",
    scene: "Un mismo borde de arroyo construido en ocho profundidades, con agua de papel estrecha en primer plano, tres vistas separadas en planos medios, piedra abstracta distante y laderas de Macuira al fondo. Full bleed, sin paneles ni borde de maqueta.",
    must: [
      "exactamente tres vistas de la misma unica mujer adulta y ninguna otra persona",
      "mismo rostro, trenza, proporcion y postura autonoma en las tres vistas",
      "Wayuushein azul noche de cuerpo entero, pechera terracota, mangas completas y waireñas arena abiertas",
      "frente, perfil y espalda cubiertos; cuerpo no embarazado, no erotizado y sin anatomia expuesta",
      "arroyo estrecho, piedra secundaria y Macuira en ocho planos fisicos distintos",
      "paper craft 3D fotografiado, full bleed y soporte completamente oculto",
    ],
    avoid: [
      "Mareiwa, child, man, twins, birds, travelers, community, second woman or stone woman",
      "pregnant belly, blood, scar, wound, teeth, ribs, bathing, wet dress, exposed legs or transparent cloth",
      "face paint, jewelry, crown, ceremonial headdress, patterned manta or seductive pose",
    ],
    cultureDecision: WORUNKA_CULTURE,
    human: true,
  }),

  "worunka__state_sheet": simple({
    title: "Worunka · debilidad, fortalecimiento y forma pétrea",
    focus: "Panorama 16:9 continuo con exactamente TRES estados separados de la misma Worunka, de izquierda a derecha: 1) embarazada y debil, de pie con postura inclinada pero segura, vientre cubierto por Wayuushein azul noche amplia; 2) fortalecida, postura vertical y estable con el mismo rostro, trenza, pechera, Wayuushein, mangas y waireñas; 3) forma petrea abstracta de cuerpo completo sentado, construida con estratos azul carbon y una veta roja mate, sin cara detallada, genitales o estatua realista. La ropa no se rompe ni desaparece entre los dos estados humanos.",
    scene: "Un solo arroyo curva el panorama en diez capas desde ladera seca hasta agua localizada. Dos pliegues curvos color hueso aparecen bajo el suelo entre estados 1 y 2 como marcador de fortalecimiento, nunca dentro del cuerpo. La piedra ocupa otra distancia y proyecta sombra propia.",
    must: [
      "exactamente tres estados: embarazada debil, fortalecida y forma petrea abstracta",
      "dos estados humanos completamente vestidos con el mismo conjunto y sin herida o anatomia expuesta",
      "dos pliegues curvos color hueso bajo el suelo entre los estados humanos, sin contacto corporal",
      "forma petrea sentada de estratos azul carbon con veta roja mate, sin rostro realista o forma genital",
      "un arroyo continuo, diez profundidades y sombras fisicas que unen los tres estados",
      "full bleed sin paneles, base, mesa o borde exterior",
    ],
    avoid: [
      "wounded state, blood, surgery, cesarean, exposed belly, baby, fetus, genital teeth, ribs inside body or impact",
      "nude bathing woman, wet transparent clothing, erotic pregnancy, crying victim or heroic goddess statue",
      "Mareiwa body, twins, man, birds, crowd, labels, arrows or transformation smoke",
    ],
    cultureDecision: WORUNKA_CULTURE,
    human: true,
  }),

  "sangre_toro__identity_sheet": simple({
    title: "Sangre Toro · Ramphocelus reversible, rojo y negro",
    focus: "Ficha cuadrada con exactamente TRES vistas del mismo pajaro pequeño de morfologia editorial Ramphocelus sp., no especie cerrada: frente en tres cuartos, perfil y espalda. Cuerpo compacto de tangara, pico corto triangular gris, patas delgadas oscuras, plumaje rojo carmesi mate en cabeza, pecho y dorso, alas y cola carbon, una pequena zona de union rojo-carbon identica en las tres vistas. No es cardenal con cresta ni ave totalmente roja.",
    scene: "Ramas delgadas de papel oscuro cruzan siete profundidades sobre un fondo de arroyo y Macuira muy desenfocados; las tres vistas se apoyan en ramas distintas sin paneles ni plantas en roseta.",
    must: [
      "exactamente tres vistas del mismo pajaro pequeño y ningun otro animal",
      "morfologia Ramphocelus sp. reversible: cuerpo compacto, pico corto, patas delgadas y sin cresta",
      "rojo carmesi mate en cabeza, pecho y dorso; alas y cola carbon en las tres vistas",
      "misma zona de union rojo-carbon como marcador de continuidad",
      "papel cortado y fibras finas con articulaciones, cantos internos y sombras reales",
      "ficha full bleed en siete profundidades sin base exterior",
    ],
    avoid: [
      "exact species label, cardinal crest, woodpecker beak, macaw body, orange bird, blue bird or all-black bird",
      "stone, blood pool, wound, hand, cage, person, magic glow or painted real feathers",
    ],
  }),

  "carpintero_rojo__identity_sheet": simple({
    title: "Carpintero de Worunka · rojo limitado al copete",
    focus: "Ficha cuadrada con exactamente TRES vistas del mismo pajaro carpintero no identificado a especie: frente en tres cuartos, perfil y espalda. Pico recto de longitud media, pies zigodactilos aferrados a corteza de papel, cola rigida y cuerpo carbon con zonas crema discretas. Solo el copete corto es rojo carmesi mate; el rojo no cubre cara, pecho, alas o cola. No se fija patron taxonomico adicional.",
    scene: "Un tronco de papel fibroso ocupa primer y medio plano en siete profundidades; cada vista se apoya en una cara distinta del mismo sistema de corteza sin paneles, huecos luminosos o bosque fotografico.",
    must: [
      "exactamente tres vistas del mismo carpintero y ningun otro pajaro",
      "pico recto, pies de agarre y cola rigida legibles",
      "rojo carmesi solo en el copete corto; cuerpo carbon y crema sin patron de especie inventado",
      "misma proporcion, copete y pico en las tres vistas",
      "tronco, ave y fondo construidos con papel y fibras a siete distancias",
      "full bleed sin borde, carton soporte, pedestal o estudio",
    ],
    avoid: [
      "red whole body, macaw colors, toucan bill, cardinal, cartoon hammering, hole portal or named species pattern",
      "stone, blood, person, hand, cage, magic glow, real bark or photographed feathers",
    ],
  }),

  "guacamayo_rojo__identity_sheet": simple({
    title: "Guacamayo de Worunka · Ara sp. reversible",
    focus: "Ficha cuadrada con exactamente TRES vistas del mismo guacamayo de morfologia editorial Ara sp., no especie cerrada: frente en tres cuartos, perfil y espalda. Gran pico curvo gris oscuro, cola larga, alas amplias y patas de loro. Rojo carmesi mate domina cabeza, pecho y parte superior de alas; pequenas capas ocre y azul noche aparecen solo en plumas secundarias sin copiar un patron de especie. Rostro de papel claro sin lineas decorativas.",
    scene: "Tres ramas robustas de papel se escalonan en ocho profundidades frente a ladera verde localizada de Macuira, arroyo secundario y cielo mate; las tres vistas no forman paneles.",
    must: [
      "exactamente tres vistas del mismo guacamayo y ningun otro animal",
      "pico curvo grande, cola larga, alas amplias y patas de loro consistentes",
      "rojo carmesi dominante con acentos ocre y azul noche limitados y reversibles",
      "rostro claro liso, sin patrones de lineas, texto o identificacion de especie",
      "ocho planos de paper craft 3D con aire y sombras proyectadas",
      "ficha full bleed sin jaula, pedestal, base o estudio",
    ],
    avoid: [
      "exact scarlet macaw pattern, green macaw, parrot with short tail, toucan, phoenix, feather crown or fantasy bird",
      "stone, blood, hand, cage, pet pose, glowing feathers, real plumage or flat illustration",
    ],
  }),

  "color_aves_worunka__phenomenon_rule": simple({
    title: "Piedra de Worunka · reparto material del rojo entre aves",
    focus: "Regla panoramica 16:9 con UNA piedra estratificada junto al arroyo y exactamente CUATRO destinos aviares, todos completos y separados: 1) Sangre Toro pequeño recibe rojo en cabeza, pecho y dorso mientras alas y cola quedan carbon; 2) carpintero recibe rojo solo en el copete; 3) guacamayo recibe rojo dominante con acentos secundarios; 4) una bandada lejana de exactamente cinco siluetas de morfologias distintas lleva pequenas zonas rojas sin especies nombradas. Cuatro cintas muy finas de papel rojo mate emergen de una veta interior de la piedra, pasan por pliegues y terminan insertadas en capas de plumaje, sin liquido, sangre, humo o luz.",
    scene: "Arroyo curvo y piedra en primer plano, tres aves individuales en distancias medias y bandada al fondo dentro de diez capas de Macuira. Cada cinta cruza una profundidad distinta y proyecta sombra, haciendo visible la magia fisica.",
    must: [
      "una unica piedra, tres aves individuales exactas y una bandada de exactamente cinco siluetas",
      "rojo distribuido de forma distinta: cuerpo parcial de Sangre Toro, solo copete del carpintero y plumaje dominante del guacamayo",
      "cuatro cintas finas de papel rojo mate nacen en una veta y terminan dentro de capas de pluma",
      "ningun liquido, sangre, herida, baño forzado, mano, cuerpo humano o efecto digital",
      "diez profundidades full bleed con agua localizada, piedra, aves y laderas separadas",
      "materialidad de papel inequívoca y magia por pliegue, insercion y transferencia fisica",
    ],
    avoid: [
      "all birds identical, red paint bucket, brush, hand painting birds, blood splash, wounded bird or dead bird",
      "rainbow, glowing red laser, aura, particles, phoenix, flock of macaws, text, labels or arrows",
    ],
  }),

  "piedra_worunka__object_sheet": simple({
    title: "Piedra de Worunka · continuidad mineral sin anatomía explícita",
    focus: "Ficha cuadrada con exactamente TRES vistas del mismo gran objeto petreo abstracto de paper craft: frente bajo, perfil y vista posterior alta. Tiene estratos azul carbon, arena y una unica veta rojo mate que entra por una concavidad irregular y reaparece en el borde opuesto. La silueta general recuerda un asiento natural bajo y una figura humana sentada solo por masa y postura, nunca por genitales, rostro o estatua realista. La misma piedra funciona como locus de rojo y como memoria petrea de Worunka sin afirmar geologia exacta.",
    scene: "Un solo tramo de arroyo full bleed en siete profundidades. Las tres vistas aparecen sobre bancos de piedra conectados por el mismo hilo de agua, sin paneles, museo, pedestal o señal turística.",
    must: [
      "exactamente tres vistas del mismo objeto petreo abstracto",
      "estratos azul carbon y arena con una unica veta roja mate continua",
      "concavidad irregular y silueta de asiento natural sin anatomia genital o rostro",
      "misma escala y estructura en las tres vistas, con arroyo como contexto",
      "piedra construida enteramente con hojas, bordes y pliegues de papel visibles",
      "ficha full bleed sin base, pedestal, vitrina o cartel",
    ],
    avoid: [
      "vulva shape, teeth, blood, nude woman, realistic human statue, pregnant stone figure, wound or body imprint",
      "tourist monument, shrine, altar, offerings, coordinates, inscription, face, idol or sacred symbol",
      "real rock texture, geological photo, museum object, CGI smooth stone or flat illustration",
    ],
  }),

  "transformaciones_cuerpo_worunka__phenomenon_rule": simple({
    title: "Worunka · transformación corporal sin anatomía ni violencia",
    focus: "Regla 16:9 de CUATRO operaciones abstractas en un solo mundo continuo: A) Worunka embarazada y completamente vestida permanece inclinada junto a un ovoidal cerrado de papel crudo que representa el antiguo bloqueo fuera de su cuerpo; B) una piedra pequeña recorre un arco de pliegues y abre el ovoidal en dos hojas, sin impacto; C) una silueta masculina adulta completamente vestida con Kotin y Kemiisa queda a distancia mientras exactamente DOS costillas curvas de papel ya separadas cruzan por debajo del suelo; D) Worunka fortalecida permanece vertical con la misma ropa y las dos curvas reaparecen como refuerzos dentro de la arquitectura de pliegues de su sombra, nunca bajo piel. Dos ovalos pequeños de fibra al fondo registran la posibilidad de mellizos sin fetos o bebés.",
    scene: "Arroyo, suelo y cuatro estaciones de pliegue ocupan doce profundidades; un solo hilo terracota conecta ovoidal, arco, dos costillas y sombra final. No hay paneles, flechas graficas o cuerpos abiertos.",
    must: [
      "dos apariciones de Worunka con identidad y Wayuushein completas, una debil y una fortalecida",
      "una unica silueta masculina adulta con Kemiisa y Kotin completos, sin identidad canonica",
      "un ovoidal abstracto externo que pasa de cerrado a abierto mediante una piedra y pliegues, sin anatomia",
      "exactamente dos costillas curvas de papel externas que viajan bajo el suelo y terminan como refuerzo de sombra",
      "exactamente dos ovalos pequeños de fibra lejanos, nunca fetos, bebes o cuerpos",
      "doce planos full bleed y magia por apertura, traslado, soporte y postura, sin VFX",
    ],
    avoid: [
      "genitals, vagina, penis, navel intercourse, birth, baby, fetus, cesarean, blood, stitches, scar, surgery or medical diagram",
      "stone hitting woman, ribs removed from body, skeleton, x-ray, exposed torso, knife, pain gesture or violent Mareiwa",
      "nude man, garment reduced to lower body, identical clothing, glowing energy, text or arrows",
    ],
    cultureDecision: BODY_CULTURE,
    human: true,
  }),

  "cambio_alianzas_worunka__phenomenon_rule": simple({
    title: "Alianzas de Worunka · cambio de dirección y bienes sin compraventa corporal",
    focus: "Regla 16:9 con exactamente SEIS adultos completamente vestidos distribuidos en dos momentos sobre un unico sendero trenzado que cambia de direccion fisica. A la izquierda, una mujer adulta se aproxima a un hombre y a una mayor de su familia con un pequeno grupo de animales permaneciendo en el espacio intermedio; a la derecha, un hombre adulto se aproxima a una mujer y a un mayor de su familia con otro grupo pequeno de animales y dos bultos lisos entre familias. Las personas conservan distancia, postura autonoma y manos visibles sin tocarse. El sendero se desprende del suelo, gira como cinta tejida lisa y vuelve a apoyarse en sentido contrario. No representa boda exacta, compra de una mujer, jerarquia actual o doctrina.",
    scene: "Dos casas rectangulares bajas muy secundarias en extremos opuestos, seis personas en ocho planos medios, animales y bienes en el centro, sendero trenzado en primer plano y Macuira lejana. Todo forma un solo espacio full bleed sin división.",
    must: [
      "exactamente seis adultos: tres mujeres y tres hombres, todos con conjuntos completos distintos",
      "dos aproximaciones en sentidos opuestos y un unico sendero fisico que gira entre ellas",
      "dos pequenos grupos mixtos de cabras y vacunos y exactamente dos bultos lisos en espacio intermedio",
      "manos visibles, distancia y autonomia; ninguna persona es entregada, tocada, marcada o arrodillada",
      "arquitectura secundaria, ocho profundidades y materialidad de papel completa",
      "regla full bleed sin texto, flecha, diagrama o ceremonia inventada",
    ],
    avoid: [
      "bride sale, price tag, chained woman, kneeling woman, ownership gesture, dowry chest, wedding, veil or priest",
      "current-law claim, family hierarchy, father receiving a woman, sexual scene, embrace, kiss or bedroom",
      "uniform clothing, bare torso, lower-body-only outfit, weapons, clan marks, face paint or livestock branding",
    ],
    cultureDecision: ALLIANCE_CULTURE,
    human: true,
  }),

  "viajeros_semillas_worunka__group_grammar": simple({
    title: "Dos viajeros de las semillas · identidades completas y ruta larga",
    focus: "Gramática 16:9 con exactamente DOS hombres Wayuu adultos distintos, cada uno repetido en DOS vistas de continuidad, para un total exacto de cuatro figuras: el viajero mayor aparece frontal al inicio y de perfil al final con She'etebe arena gris, Wom y waireñas; el viajero adulto aparece de perfil al inicio y de espalda al final con Kemiisa indigo, Kotin ocre, Kapateera lisa y waireñas. En la primera mitad llevan manos vacias; al final, cada uno porta una sola pequena bolsa lisa con frutos colorados y semillas, sin patron. No hay tercer viajero o Mareiwa.",
    scene: "Un camino largo se pliega en nueve profundidades desde planicie seca a un parche verde localizado de Macuira con una mata de frutos rojos al fondo. Las cuatro vistas se distribuyen por distancia, no por paneles.",
    must: [
      "exactamente dos identidades masculinas, cada una repetida dos veces, para cuatro figuras totales",
      "viajero mayor con She'etebe arena gris y Wom; segundo con Kemiisa indigo, Kotin ocre y Kapateera",
      "rostros, alturas, prendas dominantes y cargas consistentes entre las dos vistas de cada identidad",
      "exactamente dos bolsas lisas pequeñas solo en las vistas finales",
      "camino de nueve capas hasta una unica mata lejana de frutos colorados",
      "full bleed y 3D por distancias, sin paneles o soporte exterior",
    ],
    avoid: [
      "third traveler, woman, Mareiwa body, warrior party, caravan, horse, weapon, treasure chest or jewel sacks",
      "bare torso, lower-body-only outfit, matching robes, trousers, boots, ponchos or patterned backpacks",
      "saguaro, agave, aloe, yucca, rosette crop or generic jungle",
    ],
    cultureDecision: TRAVELERS_CULTURE,
    human: true,
  }),

  "matas_fruto_rojo_worunka__botanical_sheet": simple({
    title: "Matas de frutos colorados · botánica deliberadamente no identificada",
    focus: "Ficha cuadrada con exactamente TRES estados de una misma planta editorial no identificada: planta joven, planta adulta con exactamente SIETE frutos redondos rojo oscuro y detalle de una rama con un fruto abierto que contiene exactamente CUATRO semillas mate. Es un arbusto bajo de tallos multiples desde la base, hojas pequenas ovaladas y ramas flexibles; esta morfologia es una traduccion reversible para hacer legible mata, fruto y semilla, no una especie afirmada. No es maiz, cactus, vid, granado, cafe o tomate.",
    scene: "Un parche de suelo de Macuira ocupa siete profundidades con tres estados escalonados y ladera desenfocada. Todo es papel cortado, alambre oculto y fibras; no hay maceta, herbario o mesa.",
    must: [
      "exactamente tres estados de la misma planta editorial: joven, fructificada y detalle de rama",
      "arbusto bajo multirramificado con hojas pequenas ovaladas, sin asignar especie",
      "exactamente siete frutos en la planta adulta y exactamente cuatro semillas en un solo fruto abierto",
      "frutos rojo oscuro mate, nunca gemas o luces",
      "siete planos de paper craft 3D con soporte vegetal oculto",
      "full bleed sin maceta, etiqueta, texto, base o estudio",
    ],
    avoid: [
      "corn, maize, cactus, agave, aloe, yucca, grapevine, pomegranate, coffee, tomato, berry species or sacred plant claim",
      "red gemstones growing on branches, glowing fruit, jewelry tree, hand, traveler, basket or tool",
    ],
  }),

  "origen_tumas_worunka__phenomenon_rule": simple({
    title: "Origen de las tumas · fruto, semilla, suelo y piedra roja",
    focus: "Regla 16:9 con exactamente CUATRO estados materiales sobre un mismo pliegue de suelo: 1) un fruto colorado cerrado en rama; 2) el mismo fruto abierto con exactamente cuatro semillas mate; 3) exactamente cuatro semillas bajo una capa de suelo levantada; 4) exactamente cuatro pequeñas piedras tuma rojo coral bajo tierra, con el mismo tamaño y posicion de las semillas. Una fibra rojo oscuro atraviesa fruto, semillas y piedras por dentro de los cantos, sin resplandor. La tuma es piedra valiosa, no fruto literal ni gema facetada.",
    scene: "Corte oblicuo no diagramatico de un suelo full bleed en nueve capas: rama al frente, semillas en plano medio y cavidad mineral profunda, sin paneles, texto o flechas.",
    must: [
      "exactamente un fruto en dos estados y exactamente cuatro semillas que corresponden a cuatro piedras tuma",
      "continuidad uno a uno por posicion, tamaño y una fibra roja interior",
      "tumas como piedras coral mate irregulares, nunca diamantes o cuentas talladas",
      "suelo que se levanta como pliegue fisico y vuelve a cerrar sobre las piedras",
      "nueve profundidades con aire, oclusion y sombras entre capas",
      "full bleed sin personas, manos, herramientas, joyeria o soporte exterior",
    ],
    avoid: [
      "gem tree, crystal growth, diamonds, ruby facets, necklace, magical glow, treasure chest or mining",
      "text, labels, arrows, scientific cross-section, pot, hand planting, maize, cactus or named crop",
    ],
  }),

  "semillas_alimento_worunka__object_sheet": simple({
    title: "Semillas de sustento · conjunto plural sin especies inventadas",
    focus: "Ficha cuadrada de exactamente CUATRO familias de semillas no identificadas, cada una repetida en tres escalas dentro de un solo suelo continuo: semillas ovaladas arena con punto carbon, semillas lenticulares ocre, semillas alargadas verde apagado y semillas redondas crema. Cada familia ocupa un pequeño cuenco bajo de fibra lisa y deja una breve hilera sobre el suelo. No hay maiz, frijol, yuca, ahuyama u otra especie afirmada; los cuencos no tienen patron, kana o marca.",
    scene: "Cuatro cuencos se escalonan en siete profundidades sobre suelo de papel oscuro, con sombra de una planta no identificada al fondo y ningun cuerpo, mesa o almacen.",
    must: [
      "exactamente cuatro familias visualmente distintas de semillas no identificadas",
      "cuatro cuencos bajos de fibra lisa y cuatro hileras cortas correspondientes",
      "escala legible, superficies mate y ninguna semilla luminosa o mineral",
      "ausencia total de especies nombradas, etiquetas, numeros o simbolos",
      "siete profundidades de papel y fibra con sombras de contacto",
      "full bleed sin mesa, base, mano o estudio",
    ],
    avoid: [
      "corn kernels, beans, rice, wheat, pumpkin seeds, cassava cutting, commercial seed packet or exact crop claim",
      "tuma stones, gemstones, jewelry, medicine, offering, altar, hand, person, basket pattern or text",
    ],
  }),

  "siembra_cosecha_worunka__phenomenon_rule": simple({
    title: "Semillas de Worunka · crecimiento y abundancia antes de la sequía",
    focus: "Regla panoramica 16:9 con exactamente CUATRO franjas de crecimiento fisico sin divisores: 1) cuatro familias de semillas sobre suelo humedo; 2) brotes de cuatro siluetas distintas; 3) plantas adultas no identificadas con hojas, vainas y frutos abstractos; 4) cosecha reunida en exactamente cuatro montones bajos de fibras, vainas y frutos mate. Una misma linea de raiz de papel crudo pasa bajo las cuatro etapas y se ramifica, haciendo visible crecimiento material. Ninguna planta se identifica como maiz u otro cultivo concreto.",
    scene: "Una huerta no georreferenciada se curva en diez capas desde suelo humedo de Macuira hasta cosecha cercana; agua localizada y sombra de ladera, sin personas, casas o herramientas.",
    must: [
      "exactamente cuatro etapas continuas: semilla, brote, planta adulta y cosecha",
      "cuatro morfologias vegetales deliberadamente no identificadas y consistentes entre etapas",
      "una red de raiz de papel crudo conecta fisicamente todas las etapas",
      "exactamente cuatro montones bajos de cosecha sin etiquetas o especie afirmada",
      "diez profundidades, agua localizada, aire y sombras fisicas",
      "full bleed y magia por crecimiento de capas, nunca resplandor o particulas",
    ],
    avoid: [
      "cornfield, maize cob, wheat, rice paddy, cassava, pumpkin, industrial plantation or botanical certainty",
      "person, hand, tool, tractor, irrigation pipe, glowing growth, time-lapse streaks, text or panels",
    ],
  }),

  "comunidad_cosecha_worunka__group_grammar": simple({
    title: "Comunidad de la cosecha · seis personas y seis conjuntos completos",
    focus: "Gramática 16:9 con exactamente SEIS personas Wayuu adultas como muestra editorial: tres mujeres y tres hombres, todos con rostro, edad aparente, conjunto y tarea distintos. Mujeres: una clasifica semillas con Wayuushein verde oscuro; una atiende plantas con Wayuushein ciruela; una mueve una tinaja cerrada con Wayuushein azul gris. Hombres: uno transporta un haz de cosecha con She'etebe carbon; uno ordena cuencos con Kemiisa indigo y Kotin arena; uno levanta una esterilla de trabajo con Kemiisa ocre y Asheinpalajanaa gris. Todos llevan waireñas. Nadie bebe, baila o aparece intoxicado.",
    scene: "Huerta y area de preparacion abiertas en diez profundidades: semillas al frente, seis figuras escalonadas, plantas y una sola tinaja, sombra de enramada muy secundaria y Macuira lejana. Full bleed sin tarima o estudio.",
    must: [
      "exactamente seis adultos: tres mujeres y tres hombres, sin niños o séptima figura",
      "seis rostros, edades aparentes, colores, capas dominantes y tareas diferentes",
      "tres Wayuushein largas; She'etebe; Kotin sobre Kemiisa; Kemiisa con Asheinpalajanaa",
      "exactamente una tinaja cerrada, semillas, cuencos, cosecha y esterilla asignados a tareas distintas",
      "ninguna persona bebe, sostiene copa, baila, cae o representa embriaguez",
      "diez profundidades full bleed con paper craft 3D, aire y soporte oculto",
    ],
    avoid: [
      "uniform group, identical faces, bare torso, lower-body-only outfit, short tunic, male skirt, jeans, boots or pan-indigenous costume",
      "party, toast, drunk person, bottle, cup in mouth, ritual dance, musicians, children or crowd",
      "patterned mantas, clan marks, face paint, jewelry overload, weapons or ceremonial headdresses",
    ],
    cultureDecision: COMMUNITY_CULTURE,
    human: true,
  }),

  "bebida_cosecha_worunka__object_sheet": simple({
    title: "Chicha fuerteada en tinaja · objeto y estados sin receta",
    focus: "Ficha cuadrada con exactamente TRES vistas de la misma tinaja grande de papel arcilla mate: 1) cerrada con tapa de fibra; 2) abierta en vista alta con liquido maiz oscuro quieto y una banda de espuma minima, sin ingredientes; 3) tinaja cerrada junto a exactamente CUATRO cuencos bajos vacios. La tinaja tiene cuello corto, cuerpo globular, base estable y una sola reparacion de hilo crudo como continuidad. No hay marcas, pinturas, patrones, manos o personas.",
    scene: "Suelo interior-exterior continuo en siete planos con sombra de enramada, tres vistas separadas y huerta desenfocada; la ficha llena los cuatro bordes sin mesa de estudio.",
    must: [
      "exactamente tres vistas de la misma tinaja y exactamente cuatro cuencos vacios solo en la tercera",
      "cuello corto, cuerpo globular, arcilla mate de papel y una reparacion de hilo crudo consistente",
      "tapa cerrada en vistas 1 y 3; contenido oscuro quieto y espuma minima solo en vista 2",
      "ningun ingrediente, receta, etiqueta, marca, botella o persona bebiendo",
      "siete planos fisicos con fibra, cantos, sombras y escala coherente",
      "full bleed sin mesa, pedestal, base o estudio",
    ],
    avoid: [
      "brew recipe, ingredient list, corn, brewery, bottle, alcohol brand, glass, toast, drunk person or offering",
      "ceremonial pot, painted symbols, face, animal effigy, kana, clan mark, glowing liquid or magic smoke",
    ],
  }),

  "arroyo_worunka__spatial_model": simple({
    title: "Arroyo de Worunka · valle aproximado y piedra sin destino turístico",
    focus: "Modelo espacial 16:9 APROXIMADO de un arroyo localizado entre dos laderas que representan Itojoro y Kousopa sin rotulos ni coordenada. Una corriente estrecha de papel azul verdoso cruza en diagonal; en una orilla hay una unica piedra estratificada azul carbon con veta rojo mate y concavidad abstracta. El paisaje cambia de matorral seco bajo en primer plano a vegetacion verde localizada cerca del agua y ladera mas humeda de Macuira al fondo. No hay personas, huellas, sendero turístico, altar o construcción.",
    scene: "Vista oblicua baja con doce profundidades: fibras secas cercanas, arroyo, piedra, dos laderas medias, parches verdes localizados, serrania y cielo. Mundo full bleed, sin base exterior.",
    must: [
      "un arroyo estrecho diagonal, una unica piedra de Worunka y dos laderas diferenciadas",
      "veta roja mate en la piedra sin sangre, forma genital o estatua humana",
      "transicion ambiental desde matorral seco bajo a vegetacion verde localizada por el agua",
      "ninguna persona, ave, animal, casa, señal, coordenada o ruta de acceso",
      "doce profundidades de paper craft con aire, oclusiones y sombras fisicas",
      "paisaje full bleed sin borde, carton, base, mesa o estudio",
    ],
    avoid: [
      "tourist trail, sign, stairs, handrail, viewpoint, shrine, offerings, altar, house, bridge or map pin",
      "nude bather, Worunka body, blood river, genital-shaped rock, giant statue or human face in stone",
      "saguaro, agave, aloe, yucca, pineapple, bromeliad, lush rainforest or generic desert dunes",
    ],
  }),

  "sequia_worunka__phenomenon_rule": simple({
    title: "Worunka · abundancia, sequía, tumas enterradas y lluvia estacional",
    focus: "Regla panoramica 16:9 con exactamente CUATRO estados climaticos sobre el mismo terreno y sin paneles: 1) plantas no identificadas abundantes y arroyo localizado; 2) suelo que se pliega hacia abajo y deja EXACTAMENTE DOS GRUPOS DE TRES tumas cada uno, 3 + 3 = SEIS TOTAL, con un espacio vacio ancho y visible entre ambos grupos. Las seis tumas son coral-terracota saturado y mate, solidas, irregulares y sin agujeros; son los unicos objetos coral del subsuelo y deben leerse claramente rojas, nunca blancas, beige o grises; 3) verano largo con las mismas plantas secas, arroyo reducido y una tinaja vacia volcada de lado sin romperse; 4) retorno de lluvia localizada desde tres capas de nubes de papel, con primeros brotes en el mismo sistema de raices. La presencia de Mareiwa se expresa solo por una sombra territorial curva que reaparece en estados 2 y 4; no hay cuerpo, cara o mano divina.",
    scene: "Doce profundidades continuas recorren huerta, subsuelo, planicie seca y ladera humeda de Macuira. El suelo, el arroyo y el mismo sistema de raices atraviesan lateralmente los cuatro estados sin una sola costura vertical, corte rectangular, cambio de tablero o division de fondo; los estados se distinguen por transiciones organicas y solapadas dentro del mismo relieve. La luz pasa de ocre suave a blanco duro y vuelve a gris-azul sin efectos digitales.",
    must: [
      "exactamente cuatro estados: abundancia, entierro de tumas, verano largo y regreso localizado de lluvia",
      "exactamente dos grupos de tres tumas coral-terracota bajo suelo plegado, 3 + 3 = seis total, separados por un espacio vacio ancho; ninguna septima piedra",
      "mismas plantas reconocibles entre abundancia, sequedad y primeros brotes",
      "una tinaja vacia intacta en la sequia; ninguna persona o cuerpo sufriente",
      "sombra territorial abstracta como unica presencia de Mareiwa, sin antropomorfismo",
      "doce profundidades full bleed y cambio por suelo, raiz, agua, nube y sombra fisica",
      "un unico relieve continuo de izquierda a derecha, con suelo, raices y arroyo ininterrumpidos y sin costuras o paneles verticales",
    ],
    avoid: [
      "Mareiwa as man, giant god, face in clouds, hand from sky, lightning weapon, punishment spectacle or religious icon",
      "starving child, dehydrated person, dead animal, corpse, cracked skull, famine crowd or suffering close-up",
      "ruby mine, treasure, glowing stones, industrial drought, climate infographic, text, arrows or panels",
      "vertical seam, four rectangular scenes, quadriptych, storyboard strip, split screen, hard boundary or separate background panels",
      "seventh stone, more or fewer than six tumas, round bead, clay pot, miniature jar, seed pod, sphere with hole or repeated vessel",
      "white tuma, ivory tuma, beige tuma, gray tuma, pale uncolored stone or six stones that do not read clearly as matte coral-terracotta",
      "columnar cactus, saguaro, prickly pear, agave, aloe, yucca, pineapple, bromeliad or spiky rosette silhouette",
    ],
  }),
};

export const WAYUU_WORUNKA_MODEL_IDS_V3 = Object.freeze(Object.keys(WAYUU_WORUNKA_DIRECTIONS_V3));

export default WAYUU_WORUNKA_DIRECTIONS_V3;
