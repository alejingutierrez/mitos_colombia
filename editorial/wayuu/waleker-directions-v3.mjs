/**
 * Direcciones del lote 26 · Waleker, el origen del tejido.
 *
 * La versión extensa de Paz Ipuana sustituye aquí la síntesis que confundía
 * a las tres hermanas de Irunúu con unas tías y añadía un padre sin respaldo.
 * El vestuario se resuelve como sistemas completos y situados: nunca como
 * wayuco aislado, torso desnudo, uniforme panindígena o patrón inventado.
 */

const STORY = "paz_ipuana_waleker_1973";
const TEXTILE = "icanh_hilos_desierto_2017";
const DRESS = "banrep_wale_keru_1995";
const WARDROBE = "paz_ipuana_aleya_tomo_ii_2016";
const FEMALE = "artesanias_tejeduria_wayuu_2016";

const COMMON_AVOID = [
  "nudity, bare torso, missing upper layers, exposed chest, erotic pose, transparent dress, sexualization or vulnerable body",
  "generic pan-indigenous costume, feather crown, poncho, cowboy outfit, fantasy shaman, desert fantasy or colonial pageant",
  "saguaro with arms, agave, aloe, yucca, sansevieria, pineapple, bromeliad, maguey or any spiky leaf rosette; use only low rounded shrubs, branching trupillo and columnar cardones growing as multiple upright stems from the base",
  "invented kana, copied textile motif, clan mark, tattoo, rune, glyph, emblem, logo, sacred geometry or decorative face paint",
  "violence, corpse, blood, exposed wound, abuse spectacle, intoxication, drinking scene, threat or coercive touch",
  "neon aura, magic particles, glowing eyes, lightning VFX, digital morph, hologram, smoke effect or luminous outline",
  "text, caption, title, label, number, arrow, diagram, panel border, watermark or signature",
  "flat collage, 2D illustration, smooth CGI, plastic toy, photographed real fabric, visible cardboard edge, base, pedestal, table, studio or outside of the diorama",
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

function wayuuCulture({
  person,
  moment,
  activity,
  occasion = "mixed_narrative",
  profile,
  refs,
  chosenId,
  chosenLabel,
  specification,
  layers,
  accessories = "accesorios funcionales mínimos y lisos, sólo cuando la acción los exige",
  continuity,
}) {
  return {
    cultural_scope: "wayuu",
    person_scope: person,
    temporal_register: "mythic_indeterminate",
    time_basis: "el relato pertenece a un tiempo mítico sin fecha única; las prendas explícitamente nombradas se conservan y los vacíos se completan con repertorios Wayuu documentados como traducción editorial reversible, nunca como reconstrucción prehispánica",
    narrative_moment: moment,
    activity_context: activity,
    occasion_context: occasion,
    considered_ensembles: [
      {
        id: chosenId,
        label: chosenLabel,
        fit: "seleccionado",
        rationale: "mantiene una silueta Wayuu completa, funcional y estratificada para esta edad, acción y momento narrativo",
        source_refs: [STORY, DRESS, WARDROBE, FEMALE],
      },
      {
        id: "collapsed_or_generic_costume",
        label: "conjunto mínimo que borra las capas superiores o disfraz indígena genérico",
        fit: "rechazado",
        rationale: "reduce una cultura material diversa a desnudez y contradice el repertorio de prendas, capas, calzado y cargas documentado",
        source_refs: [DRESS, WARDROBE, FEMALE],
      },
    ],
    chosen_ensemble: {
      id: chosenId,
      rationale: "el conjunto elegido responde a edad, actividad y ocasión y debe dominar la silueta en todas las vistas",
      specification,
      layers,
    },
    attire: dimension("include_documented", "source_specific", "la ropa forma parte de la identidad y del propio relato; no es decoración étnica añadida", specification),
    footwear: dimension("include_contextual", "institutional_general", "el calzado completa la figura y evita que pies descalzos funcionen como falso marcador de antigüedad", "waireñas o abarcas sencillas, completas, sin logo ni patrón"),
    accessories: dimension("include_contextual", "source_specific", "sólo se incluyen herramientas o cargas necesarias para esta acción", accessories),
    face_paint: dimension("omit_contextually", "source_specific", "el episodio no documenta conjuntamente ocasión, material, función y motivo facial; no se inventa pintura para aumentar exotismo"),
    wardrobe_profile: profile,
    wardrobe_refs: refs,
    wardrobe_visual_contract: contract(
      `la capa completa indicada en ${chosenLabel} domina desde hombros hasta piernas`,
      "cuello, pechera o camisa, faja, capa exterior y calzado se leen como componentes separados",
      "la caída posterior, el volumen lateral y los cierres de cada capa permanecen visibles y coherentes",
      "rechazar si el generador borra la capa superior, reduce el conjunto a una prenda inferior mínima, descubre el torso o convierte el conjunto en poncho",
    ),
    source_refs: [STORY, DRESS, WARDROBE, FEMALE, TEXTILE],
    continuity_markers: continuity,
  };
}

const WOKOLOONAT_CHILD_CULTURE = wayuuCulture({
  person: "Wokoloonat como niña pequeña acogida por Irunúu",
  moment: "vida diurna en Isashii y en la casa, antes de la transformación nocturna",
  activity: "caminar, jugar entre hormigas y permanecer protegida dentro del hogar",
  profile: "child_female",
  refs: ["punaa_wusii_girl_dress", "pechera_female_underlayer", "wairenas"],
  chosenId: "punaa_complete_child_set",
  chosenLabel: "Püna'a süma wüsii sobre pechera infantil y waireñas",
  specification: "vestido infantil largo y holgado color arena rojiza sobre pechera azul gris, con waireñas pequeñas; limpio, completo, sin jirones, bordados o patrones",
  layers: ["pechera infantil azul gris", "Püna'a süma wüsii arena rojiza de cuerpo completo", "waireñas pequeñas"],
  continuity: ["rostro infantil redondo y sereno", "cabello negro en dos trenzas cortas", "vestido arena rojiza, pechera azul gris y waireñas", "rostro sin pintura"],
});

const WALEKER_YOUNG_CULTURE = wayuuCulture({
  person: "Waleker como joven adulta tejedora nocturna",
  moment: "aparición nocturna plenamente vestida mientras construye tejidos",
  activity: "hilar con la boca, tensar hilos y tejer con precisión sin exhibición corporal",
  profile: "female",
  refs: ["wayuushein_manta", "pechera_female_underlayer", "wairenas"],
  chosenId: "night_weaver_wayuushein",
  chosenLabel: "Wayuushein larga índigo sobre pechera terracota y waireñas",
  specification: "manta Wayuushein larga, opaca y holgada color índigo profundo sobre pechera terracota; waireñas oscuras y cabello recogido, sin abertura sensualizada, bordado o kana",
  layers: ["pechera terracota opaca", "Wayuushein índigo larga de mangas completas", "waireñas oscuras"],
  accessories: "un hilo blanco muy fino que nace de la boca sólo en el estado de tejido; sin joyas, mochila decorativa o tocado",
  continuity: ["rostro adulto derivado de Wokoloonat", "cabello negro recogido en una sola trenza", "Wayuushein índigo y pechera terracota", "rostro sin pintura, collar, kana o marca"],
});

const IRUNUU_HUNTER_CULTURE = wayuuCulture({
  person: "Irunúu como cazador adulto y cuidador de Wokoloonat",
  moment: "salida hacia Isashii y regreso con la niña, antes de recibir prendas de Waleker",
  activity: "caminar, cargar tapara, proteger el antebrazo y usar arco de caza",
  occasion: "travel",
  profile: "male",
  refs: ["kemiisa_piiraneeru", "kotin_male_manta", "sira_kumusu_aamuushi", "asapatshee_koisuuttu_kuttiira", "woolii_waist_bag", "wom_woma_hat"],
  chosenId: "hunter_kemiisa_kotin",
  chosenLabel: "Kemiisa de manga larga con Kotin, Sii'ira, abarcas y Womu",
  specification: "Kemiisa arena de mangas completas bajo Kotin azul gris amplio, Sii'ira ocre, abarcas de cuero y sombrero Womu bajo; Japükiitü'u en la muñeca, Woolu pequeña y tapara funcional",
  layers: ["Kemiisa arena de mangas completas", "Kotin azul gris amplio", "Sii'ira ocre", "abarcas de cuero y Womu bajo"],
  accessories: "Japükiitü'u visible en la muñeca de arco, una tapara lisa, Woolu pequeña, arco y flechas de caza",
  continuity: ["hombre adulto alto de rostro largo", "cabello negro a los hombros sujeto atrás", "Kemiisa arena y Kotin azul gris", "Japükiitü'u en muñeca izquierda", "rostro sin pintura"],
});

const IRUNUU_CEREMONIAL_CULTURE = wayuuCulture({
  person: "Irunúu con el sistema de prendas tejido por Waleker",
  moment: "viaje al falso velorio usando sus mejores prendas, después de prometer secreto",
  activity: "caminar y visitar con vestuario formal completo, sin convertir prestigio en corona o jerarquía inventada",
  occasion: "leadership_or_formal",
  profile: "male",
  refs: ["aanalaa_male_mantle", "she_etebe_sheewe", "sira_kumusu_aamuushi", "asapatshee_koisuuttu_kuttiira", "tolooma_prestige_race_headpiece"],
  chosenId: "irunuu_named_ceremonial_system",
  chosenLabel: "Aanaláa exterior con She'e, Sii'ira, abarcas y Tolooma sobrio",
  specification: "Aanaláa azul noche como manto exterior amplio sobre She'e arena de cuerpo completo, Sii'ira terracota, abarcas oscuras, pañolón liso y Tolooma pequeño; Woolu y Aichee quedan secundarios y sin patrón",
  layers: ["She'e arena de cuerpo completo", "Aanaláa azul noche exterior", "Sii'ira terracota y Aichee secundarios", "abarcas, pañolón y Tolooma pequeño"],
  accessories: "Woolu pequeña, pañolón liso, Molono y Tolooma tratados como piezas nombradas sobrias; sin emblemas o plumas añadidas",
  continuity: ["mismo rostro, cabello y proporciones del cazador", "Aanaláa azul noche dominante", "She'e arena y Sii'ira terracota", "Tolooma pequeño", "rostro sin pintura"],
});

function womanCulture(person, moment, color, continuity) {
  return wayuuCulture({
    person,
    moment,
    activity: "trabajo doméstico, enseñanza, hilado o conversación según la ficha, con libertad de movimiento y cuerpo completamente cubierto",
    profile: "female",
    refs: ["wayuushein_manta", "pechera_female_underlayer", "wairenas"],
    chosenId: `woman_wayuushein_${color.replaceAll(" ", "_")}`,
    chosenLabel: `Wayuushein larga ${color} sobre pechera y waireñas`,
    specification: `Wayuushein larga, opaca y holgada ${color} sobre pechera lisa de contraste y waireñas; sin bordado, kana, abertura sensualizada o uniforme repetido`,
    layers: ["pechera lisa opaca", `Wayuushein larga ${color}`, "waireñas"],
    continuity,
  });
}

const UYAALIWA_CULTURE = wayuuCulture({
  person: "Uyaaliwa u Outshi como especialista mayor",
  moment: "vida cotidiana entre hojas, flores y miel olorosas antes de compartir flores con las hermanas",
  activity: "caminar, recoger y ofrecer flores sin reconstruir ceremonia de curación",
  occasion: "travel",
  profile: "male",
  refs: ["kemiisa_piiraneeru", "kotin_male_manta", "sira_kumusu_aamuushi", "wairenas", "woolii_waist_bag"],
  chosenId: "elder_kemiisa_kotin",
  chosenLabel: "Kemiisa larga con Kotin, Sii'ira, waireñas y Woolu",
  specification: "Kemiisa blanca de manga larga bajo Kotin verde gris amplio, Sii'ira arena, waireñas y Woolu pequeña; sin tocado, máscara, bastón de poder o pintura",
  layers: ["Kemiisa blanca de mangas completas", "Kotin verde gris amplio", "Sii'ira arena", "waireñas"],
  accessories: "Woolu lisa y un pequeño manojo de flores claras; ninguna parafernalia de chamán genérico",
  continuity: ["hombre mayor delgado", "cabello y barba cortos gris oscuro", "Kemiisa blanca y Kotin verde gris", "Woolu pequeña", "rostro sin pintura"],
});

const TOOL_CULTURE = womanCulture(
  "Tool como anciana trabajadora nocturna del algodón",
  "identidad y transformación desde anciana hilando con huso hasta búho",
  "carbón azulado",
  ["mujer anciana de rostro ancho y nariz curva", "cabello gris en moño bajo", "Wayuushein carbón azulado y pechera arena", "huso y algodón crudo", "rostro sin pintura"],
);

const KULAMIA_CULTURE = womanCulture(
  "Kulami'a como tejedora adulta y maestra",
  "recepción, estudio, imitación técnica y enseñanza de las piezas entregadas por Irunúu",
  "terracota apagada",
  ["mujer adulta de rostro ovalado", "cabello negro recogido", "Wayuushein terracota y pechera índigo", "manos separadas de los diseños", "rostro sin pintura"],
);

function collectiveWomenCulture(person, moment, colors, firstScope, secondScope) {
  const base = wayuuCulture({
    person,
    moment,
    activity: "convivir, observar, cuidar, hilar o enseñar en posiciones autónomas y diferenciadas",
    profile: "mixed_collective",
    refs: ["wayuushein_manta", "pechera_female_underlayer", "wairenas"],
    chosenId: "varied_complete_womens_sets",
    chosenLabel: "Wayuushein largas de colores sólidos sobre pecheras y waireñas distintas",
    specification: `conjuntos completos y no uniformes en ${colors}; cada mujer conserva manta larga, pechera y waireñas propias, sin patrones`,
    layers: ["pecheras lisas distintas", "Wayuushein largas de colores sólidos", "waireñas individuales"],
    continuity: ["rostros y edades aparentes diferentes", `paleta estable ${colors}`, "ninguna pintura facial, kana, marca o uniforme"],
  });
  return {
    ...base,
    collective_wardrobe: {
      variation_axis: "edad aparente, color sólido, caída de la manta, peinado, postura y función doméstica o pedagógica",
      anti_uniformity_rule: "ninguna mujer repite rostro, peinado, combinación completa, postura o rol; ninguna se reduce a extra decorativa",
      member_groups: [
        {
          id: "women_group_a",
          scope: firstScope,
          ensemble: "Wayuushein larga con pechera y waireñas, combinación A",
          rationale: "distingue edad y acción sin jerarquía o emblema",
          source_refs: [STORY, DRESS, FEMALE],
          wardrobe_profile: "female",
          wardrobe_refs: ["wayuushein_manta", "pechera_female_underlayer", "wairenas"],
        },
        {
          id: "women_group_b",
          scope: secondScope,
          ensemble: "Wayuushein larga con pechera y waireñas, combinaciones B y C",
          rationale: "mantiene pluralidad visible y ropa completa sin uniforme",
          source_refs: [STORY, DRESS, FEMALE],
          wardrobe_profile: "female",
          wardrobe_refs: ["wayuushein_manta", "pechera_female_underlayer", "wairenas"],
        },
      ],
    },
  };
}

const SISTERS_CULTURE = collectiveWomenCulture(
  "exactamente tres hermanas adultas de Irunúu",
  "vida doméstica con Wokoloonat y transformación posterior en tres murciélagos",
  "ocre, índigo gris y terracota",
  "la hermana mayor de manto ocre",
  "las otras dos hermanas de mantas índigo gris y terracota",
);

const HEIRS_CULTURE = collectiveWomenCulture(
  "tres generaciones de tejedoras Wayuu como muestra editorial de transmisión",
  "aprendizaje familiar del telar y del huso, sin copiar diseños particulares",
  "arena, azul gris y rojo barro",
  "mujer mayor que demuestra la técnica",
  "mujer adulta y joven que observan, practican y corrigen",
);

const SERVANTS_CULTURE = {
  cultural_scope: "mixed",
  person_scope: "exactamente cuatro servidores de Wanurü con apariencia humana, sin afirmar identidad Wayuu",
  temporal_register: "mythic_indeterminate",
  time_basis: "el relato sólo fija apariencia humana y función en el falso velorio; la ropa completa es una decisión editorial mínima para evitar desnudez o demonología",
  narrative_moment: "preparación de Suumain Yolujaa como velorio aparente",
  activity_context: "recibir, esperar y presionar mediante disposición espacial, nunca mediante monstruosidad o violencia",
  occasion_context: "mixed_narrative",
  considered_ensembles: [
    { id: "four_plain_layered_figures", label: "cuatro conjuntos humanos completos, lisos y diferenciados", fit: "seleccionado", rationale: "mantiene la incertidumbre identitaria sin desnudez", source_refs: [STORY] },
    { id: "demonic_or_wayuu_uniform", label: "demonios o uniforme Wayuu", fit: "rechazado", rationale: "ninguna de las dos identidades está autorizada por el relato", source_refs: [STORY] },
  ],
  chosen_ensemble: {
    id: "four_plain_layered_figures",
    rationale: "la ropa completa neutraliza la espectacularización y deja que postura y espacio produzcan extrañeza",
    specification: "cuatro figuras con túnicas o camisas largas lisas, envolventes hasta la pantorrilla y sandalias sencillas en cuatro tonos apagados; sin nombres Wayuu, emblemas o uniformidad",
    layers: ["capa superior lisa", "envolvente larga opaca", "sandalias simples"],
  },
  attire: dimension("include_contextual", "editorial_reversible", "la apariencia humana exige cobertura completa sin asignar identidad étnica", "túnicas o camisas largas y envolventes opacas en tonos carbón, hueso, barro y azul gris"),
  footwear: dimension("include_contextual", "editorial_reversible", "calzado mínimo completa las figuras", "cuatro pares de sandalias lisas"),
  accessories: dimension("omit_contextually", "source_specific", "no se describen objetos personales y el espacio ya sostiene la acción"),
  face_paint: dimension("omit_contextually", "source_specific", "no hay motivo, función o material documentados"),
  wardrobe_profile: "mixed_collective",
  wardrobe_components: ["capa superior lisa", "envolvente opaca hasta pantorrilla", "sandalias sencillas"],
  wardrobe_visual_contract: contract("cuatro siluetas humanas totalmente cubiertas y no uniformes", "cada torso y cada pierna conservan capas separadas", "la caída posterior de las envolventes y mangas permanece legible", "rechazar desnudez, túnica idéntica, hábito religioso, traje Wayuu o cuerpo demoníaco"),
  source_refs: [STORY],
  continuity_markers: ["exactamente cuatro figuras", "cuatro rostros sobrios distintos", "cuatro tonos mate", "sin ojos brillantes, cuernos, colmillos, máscaras o pintura"],
  collective_wardrobe: {
    variation_axis: "tono, longitud de manga, caída de la envolvente, edad aparente y posición",
    anti_uniformity_rule: "ningún conjunto se repite y ninguno adquiere marca religiosa o étnica",
    member_groups: [
      { id: "near_servants", scope: "dos figuras cercanas", ensemble: "camisas largas carbón y hueso con envolventes distintas", rationale: "primer plano sin monstruosidad", source_refs: [STORY], wardrobe_profile: "unspecified", wardrobe_components: ["camisa larga", "envolvente opaca", "sandalias"] },
      { id: "far_servants", scope: "dos figuras lejanas", ensemble: "capas largas barro y azul gris con cortes diferentes", rationale: "profundidad y variación", source_refs: [STORY], wardrobe_profile: "unspecified", wardrobe_components: ["capa larga", "prenda base opaca", "sandalias"] },
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

function identity(title, focus, culture, must = []) {
  return simple({
    title,
    focus: `Ficha cuadrada con exactamente TRES vistas de la misma y única persona: tres cuartos frontal, perfil completo y tres cuartos posterior. ${focus} Las tres vistas conservan rostro, proporciones, peinado, conjunto completo, colores, calzado y accesorios.`,
    scene: "Un único mundo continuo de paper craft ocupa los cuatro bordes: suelo de fibras en ocho profundidades, vegetación mínima y sombras físicas entre vistas; sin paneles ni estudio.",
    must: ["exactamente tres vistas de una sola identidad y ningún personaje extra", "cuerpo completo de cabeza a pies en las tres vistas", "conjunto de varias capas claramente legible por delante, perfil y espalda", "rostro sin pintura, kana, marca clanil o tatuaje", "ocho o más planos físicos full bleed", ...must],
    culture,
    human: true,
  });
}

export const WAYUU_WALEKER_DIRECTIONS_V3 = {
  "waleker__identity_sheet": identity(
    "Waleker · identidad de la joven tejedora nocturna",
    "La misma joven adulta viste Wayuushein índigo opaca sobre pechera terracota; sostiene hilo blanco fino sin telar, magia digital o patrón visible. Su porte es atento, sereno y técnicamente concentrado.",
    WALEKER_YOUNG_CULTURE,
    ["hilo blanco mate sólo como herramienta narrativa", "ninguna niña o araña en esta ficha de identidad", "waireñas inequívocamente abiertas: dedos y talón visibles, cero zapatos cerrados", "cero plantas en roseta, agaves, aloes, yuccas o saguaros"],
  ),

  "waleker__state_sheet": simple({
    title: "Wokoloonat / Waleker · niña, joven tejedora y araña",
    focus: "Hoja horizontal en un único espacio continuo con exactamente TRES estados de la misma identidad, de izquierda a derecha: Wokoloonat como niña completamente vestida con Püna'a arena rojiza y pechera azul gris; Waleker como joven adulta completamente vestida con Wayuushein índigo y pechera terracota, hilando; y una araña pequeña de abdomen oval oscuro con patas finas de papel. El rostro adulto deriva del infantil; un único hilo blanco físico conecta sin fusionar los estados. No hay cuerpo intermedio, desnudez, transparencia o mujer-araña híbrida.",
    scene: "Noche de papel en diez profundidades dentro de la casa y su enramada: niña en plano cercano, joven en plano medio con telar secundario y araña sobre una fibra al fondo; el mundo llega a todos los bordes.",
    must: ["exactamente tres estados: una niña, una joven adulta y una araña", "niña y joven con ropa completa y opaca", "un único hilo físico conecta los tres estados", "misma genealogía facial entre niña y joven", "araña zoológicamente legible y pequeña", "diez profundidades full bleed"],
    avoid: ["hybrid spider woman, extra legs on woman, giant spider, horror cocoon, transparent clothing, adult body in child state or fourth state"],
    culture: { ...WOKOLOONAT_CHILD_CULTURE, wardrobe_profile: "unspecified", wardrobe_refs: ["punaa_wusii_girl_dress", "pechera_female_underlayer", "wayuushein_manta", "wairenas"], chosen_ensemble: { id: "punaa_complete_child_set", rationale: "la hoja conserva dos conjuntos completos correspondientes a edades distintas", specification: "niña con Püna'a y pechera; joven con Wayuushein y pechera; ambas con waireñas y sin patrones", layers: ["pecheras opacas", "Püna'a infantil y Wayuushein adulta", "waireñas"] }, continuity_markers: ["rostro infantil que madura sin cambiar identidad", "cabello negro trenzado", "arena rojiza en niñez e índigo en adultez", "rostro sin pintura"] },
    human: true,
  }),

  "irunuu__identity_sheet": identity(
    "Irunúu · cazador y cuidador completamente vestido",
    "Hombre adulto con Kemiisa arena bajo Kotin azul gris, Sii'ira ocre, abarcas y Womu. El arco, tres flechas, tapara, Woolu y Japükiitü'u tienen escala funcional; la postura protege y transporta, no amenaza.",
    IRUNUU_HUNTER_CULTURE,
    ["Japükiitü'u completamente liso y visible en la misma muñeca en tres vistas", "exactamente un arco, tres flechas, una tapara y una Woolu por vista, nunca armas modernas", "sombrero, faja, protector y bolsa de colores sólidos: cero grecas, zigzags, líneas onduladas, rombos o patrones", "cero cabras, animales, plantas en roseta, agaves, aloes, yuccas o saguaros"],
  ),

  "irunuu__state_sheet": simple({
    title: "Irunúu · cazador, vestido por Waleker y promesa quebrada",
    focus: "Hoja horizontal con exactamente TRES estados de Irunúu, siempre completamente vestido. Izquierda: cazador con Kemiisa, Kotin, Womu, arco, tapara y Japükiitü'u. Centro: conjunto ceremonial tejido por Waleker con Aanaláa exterior azul noche, She'e arena, Sii'ira, abarcas, pañolón y Tolooma sobrio. Derecha: el mismo conjunto después de revelar el secreto, con hombros bajos y un único hilo cortado en la mano; nada rasgado, desnudo, ebrio o violento.",
    scene: "Sendero continuo entre Isashii, casa y noche de Suumain Yolujaa en doce planos; tres estados separados por distancia, no paneles.",
    must: ["exactamente tres estados del mismo hombre y cero personas o animales adicionales", "dos sistemas de vestuario completos y claramente distintos", "Aanaláa y She'e dominan los estados central y derecho", "un solo hilo cortado en el último estado", "ninguna bebida, amenaza, mujer, servidor o violencia", "cero plantas en roseta, agaves, aloes, yuccas o saguaros", "doce profundidades full bleed"],
    culture: IRUNUU_CEREMONIAL_CULTURE,
    human: true,
  }),

  "uyaaliwa_outshi_waleker__identity_sheet": identity(
    "Uyaaliwa / Outshi · especialista mayor sin disfraz",
    "Hombre mayor delgado con Kemiisa blanca, Kotin verde gris, Sii'ira, waireñas y Woolu. En una mano sostiene exactamente cinco flores claras y en la otra tres hojas aromáticas; no hay curación, altar o parafernalia inventada.",
    UYAALIWA_CULTURE,
    ["exactamente cinco flores y tres hojas en cada vista como utilería del mismo modelo", "ningún bastón, máscara, maraca, tocado o pintura facial"],
  ),

  "tool_waleker__identity_sheet": identity(
    "Tool · anciana trabajadora del algodón",
    "Mujer anciana con Wayuushein carbón azulado, pechera arena y waireñas. Sostiene un huso sencillo y una masa pequeña de algodón crudo; manos y postura muestran habilidad laboral, no hechicería.",
    TOOL_CULTURE,
    ["un huso y una pequeña masa de algodón", "ningún búho adicional en identidad"],
  ),

  "tool_waleker__state_sheet": simple({
    title: "Tool · anciana hilando y búho nocturno",
    focus: "Hoja horizontal con exactamente DOS estados de Tool y una transición material central: a la izquierda, anciana totalmente vestida con Wayuushein carbón azulado, pechera y waireñas, sentada mientras hila algodón; a la derecha, un único búho de papel de tamaño natural, plumaje carbón azulado y ojos mate. En el centro, la hebra del huso se abre en capas que ordenan plumas, sin cuerpo híbrido, alas humanas o VFX.",
    scene: "Interior nocturno continuo en diez profundidades, con algodón cercano, sombra de pared y rama exterior; sin paneles ni borde de maqueta.",
    must: ["exactamente una anciana y un búho como dos estados", "anciana completamente vestida", "waireñas abiertas con dedos visibles; cero zapatos cerrados", "un huso, una hebra y una masa de algodón", "transición por capas físicas de hilo a pluma", "búho natural sin tamaño monstruoso", "diez profundidades full bleed"],
    avoid: ["witch, broom, cauldron, demon owl, glowing eyes, half-woman half-bird, extra owl or exposed body"],
    culture: TOOL_CULTURE,
    human: true,
  }),

  "kulamia_waleker__identity_sheet": identity(
    "Kulami'a · tejedora y maestra",
    "Mujer adulta con Wayuushein terracota, pechera índigo y waireñas, sin collar, aretes, pulseras, metal, cuentas ni joyería de ninguna clase. Examina una banda lisa, ajusta un telar pequeño y demuestra tensión de hilo; ninguna vista copia un kana o patrón reconocible.",
    KULAMIA_CULTURE,
    ["banda lisa, telar pequeño e hilo sin patrón", "manos activas y mirada técnica, no pose de moda", "waireñas abiertas con dedos visibles en las tres vistas; cero zapatos cerrados", "cero joyería: sin collar, aretes, pulseras, metal o cuentas", "cero pájaros, muñecas, niños, extras o animales", "CERO vegetación en toda la imagen: ningún cardón, cactus, arbusto, roseta, agave, aloe, yucca, palma o planta decorativa; fondo solo de tierra estratificada y arquitectura"],
  ),

  "servidores_wanuru_waleker__group_grammar": simple({
    title: "Servidores de Wanurü · cuatro apariencias humanas",
    focus: "Gramática horizontal con exactamente CUATRO figuras humanas adultas, totalmente vestidas y distintas, distribuidas alrededor de un espacio vacío. Dos reciben en primer plano y dos esperan en penumbra; la extrañeza nace de que sus sombras convergen hacia una única puerta aunque sus cuerpos miran direcciones distintas. Ninguno tiene cuernos, ojos luminosos, piel cadavérica, máscara, uniforme Wayuu o gesto violento.",
    scene: "Suumain Yolujaa en catorce profundidades: umbral, cuatro figuras, sala vacía, puerta oscura y patio nocturno; full bleed.",
    must: ["exactamente cuatro personas adultas completamente vestidas", "cuatro conjuntos lisos y no uniformes", "una única puerta y sombras convergentes", "apariencia humana sobria sin monstruosidad", "ninguna víctima, bebida, cadáver o ceremonia", "catorce profundidades full bleed"],
    culture: SERVANTS_CULTURE,
    human: true,
  }),

  "tejedoras_herederas__group_grammar": simple({
    title: "Tejedoras herederas · transmisión entre generaciones",
    focus: "Gramática horizontal con exactamente TRES mujeres de generaciones distintas, cada una completamente vestida con Wayuushein, pechera y waireñas propias. La mayor demuestra el telar; la adulta corrige tensión del hilo sin tocar el cuerpo de la joven; la joven practica con huso. Tres tramos de un mismo hilo crudo conectan herramientas, nunca forman símbolo o kana.",
    scene: "Enramada de trabajo en doce planos, con telar vertical, huso, fibras y luz lateral; territorio visible al fondo, sin taller comercial.",
    must: ["exactamente tres mujeres de tres generaciones", "tres conjuntos completos no uniformes", "tres pares de waireñas abiertas con dedos visibles; cero zapatos cerrados", "un telar, un huso y tres tramos conectados de hilo", "aprendizaje recíproco sin jerarquía teatral", "ningún patrón copiado o diseño comercial", "cero plantas en roseta, agaves, aloes, yuccas o saguaros", "doce profundidades full bleed"],
    culture: HEIRS_CULTURE,
    human: true,
  }),

  "atia__presence_model": simple({
    title: "Atía / Attia · color y herramienta",
    focus: "Presencia horizontal sin cuerpo humano. Un arco iris mate y desaturado aparece después de lluvia ligera; exactamente SIETE bandas de color descienden materialmente hacia una única herramienta plana de telar o batidor de papel oscuro. Las siete fibras cambian de color por contacto con la herramienta y llegan a un paño completamente liso, sin dibujo. Atía permanece como relación entre cielo, color y herramienta, no diosa antropomorfa.",
    scene: "Cielo, lluvia residual, enramada vacía, herramienta y paño en catorce profundidades full bleed.",
    must: ["cero personas o rostros", "exactamente siete bandas mates de arco iris", "una sola herramienta de telar", "un paño liso sin patrón", "cambio de color por contacto físico", "catorce profundidades full bleed"],
    avoid: ["rainbow goddess, human silhouette, seven women, loom spirit, neon rainbow, pride flag composition or patterned textile"],
  }),

  "kanaspi__presence_model": simple({
    title: "Kanaspi · precedente floral del tejido",
    focus: "Presencia sin cuerpo humano con exactamente TRES estados de una misma planta editorial abierta: brote, planta adulta y rama con exactamente CINCO flores rojo mate cuya disposición recuerda hebras cruzadas sin convertirse en kana. Una sola fibra roja sale de una flor y se posa sobre un tejido liso. La identidad botánica queda abierta y no se inventa especie, medicina o persona.",
    scene: "Suelo semiarido en diez profundidades con los tres estados escalonados y telar lejano desenfocado; full bleed.",
    must: ["cero personas", "exactamente tres estados de una planta", "exactamente cinco flores rojas mate", "una sola fibra roja", "tejido completamente liso", "diez profundidades full bleed"],
    avoid: ["human flower spirit, poinsettia certainty, botanical label, medicinal claim, sacred symbol, embroidered motif or floral crown"],
  }),

  "maawui_waleker__presence_model": simple({
    title: "Maawüi · precedente del algodón",
    focus: "Presencia sin cuerpo humano. Exactamente CUATRO cápsulas de algodón de papel, las cuatro completamente abiertas, se ordenan sobre una misma rama. Debajo de cada cápsula hay UNA masa blanca separada y completamente visible: cuatro cápsulas abiertas arriba y exactamente cuatro bolas de algodón separadas abajo, 4 + 4. Las cuatro masas se convierten en fibras y llegan a una única madeja cruda. El movimiento es mecánico por tensión y distancia, sin manos invisibles, rostro, resplandor o especie humana. El suelo queda limpio: no aparece ninguna otra planta en primer plano.",
    scene: "La única rama, las cuatro cápsulas, las cuatro masas, las fibras y la madeja ocupan once planos de un paisaje seco full bleed. CERO vegetación adicional en primer plano; el relieve lejano se construye solo con capas de tierra y mar.",
    must: ["cero personas", "exactamente cuatro cápsulas abiertas en fila superior", "exactamente cuatro masas blancas separadas en fila inferior, una bajo cada cápsula", "una sola rama y una madeja", "cero plantas adicionales en primer plano", "transición física de cápsula a fibra", "once profundidades full bleed"],
    avoid: ["cotton goddess, face in plant, human hands, cloud, snow, glowing fiber, plantation scene, agave, aloe, yucca, rosette, generic cactus or decorative plant"],
  }),

  "sese_waleker__presence_model": simple({
    title: "Sese · precedente del hilo",
    focus: "Presencia sin cuerpo humano. Un único huso vertical de papel oscuro recibe tres fibras crudas y produce una sola hebra continua que cruza siete distancias del cuadro. La torsión se hace visible mediante relieve y sombra reales; el hilo nunca dibuja letra, animal, símbolo o kana.",
    scene: "Interior vacío de trabajo en once profundidades, con huso cercano, fibra media y hebra perdiéndose hacia un telar desenfocado; full bleed.",
    must: ["cero personas", "un único huso", "exactamente tres fibras de entrada y una hebra de salida", "torsión material legible", "ningún patrón", "once profundidades full bleed"],
    avoid: ["spinning woman, ghost hand, magic wand, glowing string, letter, glyph, spider or woven symbol"],
  }),

  "hermanas_irunuu_waleker__group_grammar": simple({
    title: "Tres hermanas de Irunúu · grupo doméstico diferenciado",
    focus: "Gramática horizontal con exactamente TRES mujeres adultas, hermanas pero no clones. La mayor viste Wayuushein ocre, la segunda índigo gris y la tercera terracota; todas sobre pecheras distintas y con waireñas. Una prepara algodón, otra dispone un chinchorro y otra observa un telar incompleto. Wokoloonat no aparece: la ficha fija la identidad del grupo, no el maltrato.",
    scene: "Casa y enramada en doce profundidades con tres estaciones domésticas conectadas por senderos; mundo continuo full bleed.",
    must: ["exactamente tres mujeres adultas", "tres rostros, peinados, mantas y acciones diferentes", "tres conjuntos completos", "algodón, chinchorro y telar como tres utilerías", "ninguna niña, Irunúu o violencia", "doce profundidades full bleed"],
    culture: SISTERS_CULTURE,
    human: true,
  }),

  "hermanas_irunuu_waleker__state_sheet": simple({
    title: "Hermanas de Irunúu · tres mujeres y tres murciélagos",
    focus: "Hoja horizontal con DOS conjuntos de estados. A la izquierda están exactamente TRES hermanas completamente vestidas, diferenciadas en ocre, índigo gris y terracota. A la derecha vuelan exactamente TRES murciélagos de tamaño natural; cada uno conserva sólo un pequeño acento mate del color de una hermana en el reverso de un ala. Entre ambos grupos, tres sombras físicas cambian gradualmente de silueta. No hay híbridos, cuerpos caídos o terror.",
    scene: "Patio nocturno y cielo bajo en doce profundidades; mujeres cercanas, transición media y murciélagos lejanos, full bleed.",
    must: ["exactamente tres mujeres y exactamente tres murciélagos", "tres mujeres completamente vestidas", "correspondencia ocre, índigo gris y terracota", "tres transiciones por sombra material", "murciélagos naturales y pequeños", "doce profundidades full bleed"],
    avoid: ["vampire, giant bats, bat wings on women, witch transformation, corpse, attack or fourth bat"],
    culture: SISTERS_CULTURE,
    human: true,
  }),

  "hormigas_waleker__group_grammar": simple({
    title: "Hormigas de Wokoloonat · escala y comportamiento",
    focus: "Gramática cuadrada con exactamente DOCE hormigas negras de papel, doce total: CUATRO en el arco superior, CUATRO repartidas en los laterales y CUATRO en el arco inferior. 4 + 4 + 4 = 12; cero decimotercera hormiga y cero hormigas parcialmente ocultas. Son anatómicamente reconocibles y de tamaño natural, organizadas en una ruta abierta alrededor de exactamente tres semillas. La ruta deja un espacio circular vacío donde jugaba Wokoloonat, pero no forma rostro, letra o símbolo y no aparece ninguna persona.",
    scene: "Suelo de Isashii visto oblicuamente en nueve profundidades macro de paper craft, sin fotografía real ni mesa.",
    must: ["exactamente doce hormigas en grupos contables 4 + 4 + 4", "exactamente tres semillas", "seis patas y tres segmentos por hormiga", "espacio central vacío sin figura", "cero rosetas espinosas o flora genérica", "nueve planos full bleed"],
    avoid: ["giant ants, ant queen, child, human silhouette, face, glyph, spiral symbol or scientific specimen board"],
  }),

  "tejidos_waleker__object_sheet": simple({
    title: "Tejidos de Waleker · conjunto nombrado sin copiar kanas",
    focus: "Ficha cuadrada con exactamente OCHO piezas separadas y lisas organizadas como una cuadrícula estricta de DOS FILAS DE CUATRO, 4 + 4 = 8. Posiciones 1–4, de izquierda a derecha: UN chinchorro azul plegado; UNA faja Sii'ira roja, estrecha y plana; UNA banda Supüna ocre, estrecha y plana; UNA sola Susü verde funcional, el único bolso de toda la imagen. Posiciones 5–8: UN paño Ekialajaa negro rectangular; UNA She'i crema rectangular sin atribuir uso funerario; UNA manta de silla marrón rectangular; UNA pieza Jamaa terracota rectangular. Cero novena pieza y CERO cuerda enrollada, borla independiente, segundo bolso, mano, persona, recipiente, telar, prenda duplicada o fragmento adicional. Cada pieza tiene construcción, escala y borde diferentes mediante fibra, tensión y grosor, pero ninguna lleva kana, greca, emblema, texto o motivo copiado.",
    scene: "Ocho piezas distribuidas en un único suelo y enramada de nueve niveles, con pliegues y sombras de contacto; full bleed.",
    must: ["exactamente ocho piezas distintas en cuadrícula 4 + 4", "exactamente un bolso Susü y cero segundo bolso", "cero cuerda enrollada, borla suelta, novena pieza, mano, persona, recipiente, telar o duplicado", "formas y usos legibles sin etiquetas", "tejidos de colores sólidos y mates", "ningún patrón, kana o marca", "escala relativa coherente", "nueve profundidades full bleed"],
    avoid: ["market display, souvenir shop, commercial mochila pattern, copied Wayuu design, labels, mannequins, rope coil, loose tassel, second bag or pile of indistinguishable textiles"],
  }),

  "telar_wayuu__object_sheet": simple({
    title: "Telar del ciclo de Waleker · estructura técnica",
    focus: "Ficha cuadrada de un único telar vertical sencillo en exactamente TRES vistas: frontal completo, perfil estructural y detalle de tensión. Dos postes, travesaños, urdimbre cruda y una herramienta plana son visibles; el tejido de prueba sólo contiene franjas de color sólido sin patrón. No se declara telar único universal ni se añade persona.",
    scene: "Enramada vacía en nueve profundidades con el telar ocupando el mundo hasta los bordes, sin estudio.",
    must: ["exactamente tres vistas del mismo telar", "dos postes y travesaños coherentes", "urdimbre y tensión visibles", "tejido liso sin kana", "ninguna persona", "nueve profundidades full bleed"],
    avoid: ["industrial loom, European floor loom, table loom, weaving woman, patterned rug, diagram, labels or museum pedestal"],
  }),

  "jiron_telarana_waleker__object_sheet": simple({
    title: "Jirón de telaraña · resto material de la despedida",
    focus: "Ficha cuadrada con exactamente TRES vistas del mismo fragmento pequeño de telaraña de papel: extendido entre dos fibras, plegado sobre una palma abstracta sin persona y suspendido con un borde roto. Conserva siete radios y un borde incompleto; es frágil, mate y físico, no joya, amuleto o tela bordada.",
    scene: "Noche de papel y suelo interior en ocho profundidades, con las tres vistas escalonadas sin paneles; full bleed.",
    must: ["exactamente tres vistas del mismo fragmento", "siete radios y borde roto", "escala pequeña", "una palma abstracta sin cuerpo", "ocho profundidades full bleed"],
    avoid: ["giant web, trapped person, spider, cocoon, dreamcatcher, lace pattern, magical artifact or glowing web"],
  }),

  "isashii_waleker__spatial_model": simple({
    title: "Isashii · lugar de caza y encuentro",
    focus: "Modelo espacial aproximado de Isashii sin coordenada exacta. Un sendero de caza entra desde primer plano, pasa por un claro con tres semillas y una pequeña ruta de hormigas y termina entre dos trupillos bajos. Un arco apoyado y una tapara lisa indican la pausa de Irunúu, pero no aparecen personas, presas, sangre o monumentos.",
    scene: "Panorama 16:9 en catorce profundidades desde piedras cercanas hasta lomas secas, con vegetación semiarida localizada y mundo full bleed.",
    must: ["un sendero, un claro, dos trupillos, un arco y una tapara", "ruta pequeña de hormigas sin contar como ficha animal", "ninguna persona o presa", "geografía aproximada sin señal", "catorce profundidades full bleed"],
    avoid: ["map pin, village, hunting kill, animal corpse, lush jungle, saguaro, agave, shrine or tourist sign"],
  }),

  "suumain_yolujaa_waleker__spatial_model": simple({
    title: "Suumain Yolujaa · casa del falso velorio",
    focus: "Modelo espacial de una casa nocturna preparada como velorio aparente, sin afirmar arquitectura funeraria Wayuu universal. Una sala cubierta conduce a una única puerta muy oscura; exactamente CUATRO esteras vacías se orientan hacia un chinchorro también vacío. Cuencos con flores y hojas olorosas sustituyen cualquier cadáver o bebida. Las sombras de los cuatro soportes convergen hacia la puerta aunque la luz viene de un costado.",
    scene: "Vista oblicua 16:9 en quince profundidades: patio, enramada, cuatro esteras, chinchorro, puerta y noche; full bleed.",
    must: ["exactamente cuatro esteras, exactamente un chinchorro vacío y una puerta; cero segundo chinchorro", "cuencos con flores y hojas, sin botellas", "ninguna persona, cuerpo, tumba o rito", "sombras físicas convergentes", "quince profundidades full bleed"],
    avoid: ["corpse, coffin, grave, Christian wake, candles, crosses, alcohol, demon house, haunted mansion or universal funerary reconstruction"],
  }),

  "transformacion_nocturna_waleker__phenomenon_rule": simple({
    title: "Transformación nocturna de Wokoloonat · edad y ropa completas",
    focus: "Regla horizontal con exactamente DOS figuras de la misma identidad en un solo dormitorio continuo. A la izquierda, Wokoloonat niña totalmente vestida con Püna'a arena y pechera. A la derecha, Waleker joven adulta totalmente vestida con Wayuushein índigo y pechera terracota. Entre ambas, siete capas de sombra y fibras cambian escala, trenza y ropa sin mostrar cuerpo intermedio. La noche activa la transformación mediante profundidad y oclusión, no por brillo.",
    scene: "Interior en doce profundidades con entrada de luna mate, chinchorro y telar lejanos; full bleed.",
    must: ["exactamente una niña y una joven adulta", "ambas completamente vestidas y opacas", "siete capas físicas de transición", "continuidad facial y de cabello", "ninguna araña en esta regla", "doce profundidades full bleed"],
    avoid: ["undressing, transparent garment, naked transformation, sexualized adult, child-adult hybrid, magic glow or third figure"],
    culture: { ...WOKOLOONAT_CHILD_CULTURE, wardrobe_profile: "unspecified", wardrobe_refs: ["punaa_wusii_girl_dress", "pechera_female_underlayer", "wayuushein_manta", "wairenas"], chosen_ensemble: { id: "punaa_complete_child_set", rationale: "cada edad conserva un sistema completo propio", specification: "niña con Püna'a y pechera; joven con Wayuushein y pechera; ambas con waireñas", layers: ["pecheras opacas", "vestido infantil y manta adulta", "waireñas"] } },
    human: true,
  }),

  "tejido_nocturno_waleker__phenomenon_rule": simple({
    title: "Tejido nocturno de Waleker · hilo de la boca a la tela",
    focus: "Regla horizontal con una sola Waleker adulta completamente vestida. De su boca sale una única hebra blanca mate que atraviesa exactamente CINCO etapas físicas: fibra suelta, torsión, urdimbre, cruce y paño liso terminado. Ella manipula la tensión con ambas manos sin abrir la manta o exhibir el cuerpo. La hebra no brilla ni forma símbolos.",
    scene: "Enramada nocturna en catorce profundidades con Waleker en plano medio, cinco etapas del hilo y telar ocupando el fondo; full bleed.",
    must: ["exactamente una mujer adulta completamente vestida", "una hebra y cinco etapas materiales", "Wayuushein índigo dominante", "waireñas abiertas con dedos visibles", "paño final liso", "cero cerámica decorada, patrones, plantas en roseta o saguaros", "sombras de tensión reales", "catorce profundidades full bleed"],
    avoid: ["vomiting, tongue thread, body horror, transparent dress, magical beam, patterned cloth, extra weaver or spider"],
    culture: WALEKER_YOUNG_CULTURE,
    human: true,
  }),

  "sueno_chinchorro_waleker__phenomenon_rule": simple({
    title: "Sueño del chinchorro · peso, silencio y pliegue",
    focus: "Regla horizontal sin rostro ni cuerpo expuesto. Un chinchorro liso aparece en exactamente TRES estados: vacío y tenso; ocupado por una forma humana totalmente cubierta por el propio tejido, sin anatomía legible; y nuevamente vacío con una depresión profunda que tarda en levantarse. Siete pequeñas fibras colgantes quedan inmóviles y el polvo del suelo no se mueve. El sueño se entiende por peso y silencio, no aura.",
    scene: "Interior nocturno en doce profundidades con postes, chinchorro y suelo; full bleed.",
    must: ["exactamente tres estados del mismo chinchorro", "figura central completamente cubierta y sin identidad", "siete fibras inmóviles", "depresión material persistente", "ningún rostro o desnudez", "doce profundidades full bleed"],
    avoid: ["sleeping beauty, exposed sleeper, dead body, cocoon, spell particles, stars, dream cloud, glowing hammock or hospital bed"],
  }),

  "revelacion_secreto_waleker__phenomenon_rule": simple({
    title: "Revelación del secreto · promesa rota sin violencia",
    focus: "Regla horizontal sin personas. Un hilo continuo entra por la izquierda junto a un pequeño nudo cerrado que representa la promesa; atraviesa cuatro esteras vacías del falso velorio y sale por la derecha dividido en exactamente CUATRO cabos frente a una puerta oscura. Un pañolón azul noche doblado y una Woolu lisa identifican la ausencia de Irunúu sin mostrar su cuerpo. No hay bebida, amenaza, boca, texto o símbolo.",
    scene: "Sala de Suumain Yolujaa en trece profundidades, con objetos, esteras y puerta integrados al mundo full bleed.",
    must: ["un hilo de entrada, un nudo y exactamente cuatro cabos de salida", "cuatro esteras vacías", "pañolón y Woolu como continuidad", "ninguna persona o bebida", "ruptura material sin VFX", "trece profundidades full bleed"],
    avoid: ["alcohol bottles, drunk man, interrogation, torture, speech bubbles, broken heart symbol, scissors, blood or demon"],
  }),

  "legado_textil_waleker__phenomenon_rule": simple({
    title: "Legado textil · de los precedentes a la enseñanza",
    focus: "Regla panorámica sin cuerpos humanos. Esta imagen modela la convergencia del legado, no repite los inventarios completos que ya tienen fichas propias. De izquierda a derecha aparecen exactamente CUATRO representantes materiales separados: UNA banda lisa roja de Atía; UNA flor roja de Kanaspi sin planta completa; UNA cápsula abierta de algodón de Maawüi sin rama; y UN huso de Sese. Los cuatro representantes convergen en una sola hebra que atraviesa un telar y un chinchorro liso. Después aparecen exactamente SEIS manos abstractas, no cuatro ni siete: tres pares claramente separados por edad, 2 manos pequeñas + 2 manos adultas + 2 manos ancianas, sin brazos ni cuerpos. Las seis manos conducen la hebra a una madeja abierta. Ningún tejido lleva kana o diseño copiado.",
    scene: "Panorama de dieciséis profundidades desde paisaje y cuatro representantes hasta enramada y herramientas; mundo full bleed. El primer plano es tierra estratificada limpia con CERO vegetación decorativa.",
    must: ["exactamente cuatro representantes: una banda, una flor, una cápsula y un huso", "un telar y un chinchorro", "exactamente seis manos formando tres pares: infantil, adulto y anciano", "una hebra continua y una madeja final", "cero plantas, tallos, ramas o vegetación", "ningún cuerpo o rostro", "tejidos lisos sin patrón", "dieciséis profundidades full bleed"],
    avoid: ["second band, second flower, second cotton capsule, second spindle, four hands, five hands, seven hands, extra hand, arms, four goddesses, human teachers, genealogy tree, family names, copied motifs, commercial products, logo, timeline text, mystical icons, agave, aloe, yucca, rosette, generic cactus or decorative plant"],
  }),

  "estrella_corazon_irunuu__phenomenon_rule": simple({
    title: "Destino estelar de Irunúu · epílogo material",
    focus: "Regla horizontal sin cuerpo, corazón anatómico o muerte. Un pequeño nudo terracota desprendido de una prenda azul noche asciende por exactamente NUEVE posiciones cada vez menores hasta convertirse en una estrella fugaz blanca, única y breve. Abajo quedan el pañolón doblado, la Woolu y una huella de abarcas; arriba no hay constelación, rostro o divinidad.",
    scene: "Territorio nocturno en catorce profundidades desde objetos cercanos hasta cielo profundo; full bleed.",
    must: ["un nudo terracota y nueve posiciones de ascenso", "una sola estrella fugaz", "pañolón, Woolu y exactamente una huella hundida de abarca en el suelo; cero sandalia u objeto de calzado", "ningún cuerpo, corazón anatómico o muerte", "cero plantas en roseta, agaves, aloes, yuccas o saguaros", "catorce profundidades full bleed"],
    avoid: ["anatomical heart, corpse, soul silhouette, angel, heaven, constellation person, comet impact, astrology symbol or glowing portal"],
  }),
};

export const WAYUU_WALEKER_MODEL_IDS_V3 = Object.freeze(Object.keys(WAYUU_WALEKER_DIRECTIONS_V3));

export default WAYUU_WALEKER_DIRECTIONS_V3;
