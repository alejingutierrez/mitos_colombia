/**
 * Direcciones del lote 19 · Ulépala.
 *
 * La narración de Sibotta Sapuana publicada por Ramón Paz Ipuana se mantiene
 * separada de la versión de Perrin. En especial: banco-jabalí no es boa-banco,
 * Parruluwa no es corzo, tunas-conejos no son jugadores-conejo, la anciana no
 * es Alekerü y el vestuario explícito She'ebe/Kotsü/Molono no se reduce a una
 * sola prenda inferior.
 */

const SOURCES = [
  "finol_ulepala_sibotta_paz_2007",
  "paz_ipuana_aleya_tomo_ii_2016",
  "mincultura_caracterizacion_wayuu",
  "artesanias_tejeduria_wayuu_2016",
  "cinep_lo_que_somos_wayuu_2015",
];

const COMMON_AVOID = [
  "nudity, exposed torso as default identity, sexual pose, intimate contact, genitality, fluids or erotic emphasis",
  "blood, wound, corpse, body extraction, animal attack, weapon impact, killing, hunting action, dismemberment or gore",
  "European ghost, transparent spirit, angel, demon, skeleton, zombie, horror makeup or Christian afterlife iconography",
  "generic pan-indigenous costume, feather war bonnet, Andean poncho, cowboy costume, fantasy shaman or desert stereotype",
  "invented kana, clan mark, tattoo, face motif, ritual symbol, amulet, crown, heraldry or decorative glyph",
  "glowing portal, neon aura, runes, magic particles, digital smoke, lens flare or supernatural VFX",
  "text, label, title, caption, numbers, arrows, diagram, comic panel, watermark or signature",
  "flat collage, 2D illustration, smooth CGI, plastic figurine, visible cardboard edge, base, pedestal, table, studio or exterior of the diorama",
];

function dimension(decision, evidence, rationale, specification) {
  return { decision, evidence, rationale, ...(specification ? { specification } : {}) };
}

function visualContract(dominant, front, back, reject) {
  return {
    dominant_silhouette: dominant,
    front_read: front,
    side_or_back_read: back,
    anti_collapse_rule: reject,
  };
}

function wayuuIndividual({
  person,
  profile,
  moment,
  activity,
  occasion = "mixed_narrative",
  chosen,
  alternative,
  specification,
  layers,
  wardrobeRefs,
  footwear,
  accessories,
  continuity,
  contract,
  evidence = "editorial_reversible",
}) {
  return {
    cultural_scope: "wayuu",
    person_scope: person,
    temporal_register: "mythic_indeterminate",
    time_basis: "el relato fue registrado en 1970 y publicado con mediacion literaria, pero no fecha los sucesos; cuando una prenda no es explicita se usa repertorio Wayuu documentado como traduccion editorial reversible y no como reconstruccion prehispanica",
    narrative_moment: moment,
    activity_context: activity,
    occasion_context: occasion,
    considered_ensembles: [
      { id: "complete_selected", label: chosen, fit: "elegido por funcion, cobertura y continuidad", rationale: "produce una silueta completa sin convertir una prenda inferior en traje universal", source_refs: SOURCES },
      { id: "complete_alternative", label: alternative, fit: "plausible pero no elegido", rationale: "el repertorio lo permite, aunque su ocasion o silueta encaja peor con este estado", source_refs: SOURCES },
    ],
    chosen_ensemble: { id: "complete_selected", rationale: "conjunto Wayuu completo, situado y reversible", specification, layers },
    attire: dimension("include_contextual", evidence, "la persona requiere una capa dominante completa y legible en todas las vistas", specification),
    footwear: dimension("include_contextual", "institutional_general", "el suelo y la movilidad exigen calzado visible sin fingir fecha exacta", footwear),
    accessories: dimension("include_contextual", "source_specific", "solo se incluyen elementos narrados o funcionales", accessories),
    face_paint: dimension("omit_contextually", "source_specific", "el relato no fija para esta persona una ocasion, material, funcion y motivo facial exactos"),
    wardrobe_profile: profile,
    wardrobe_refs: wardrobeRefs,
    wardrobe_visual_contract: contract,
    source_refs: SOURCES,
    continuity_markers: continuity,
  };
}

function mixedIndividual({ person, moment, activity, chosen, alternative, specification, layers, components, footwear, accessories, continuity, contract }) {
  return {
    cultural_scope: "mixed",
    person_scope: person,
    temporal_register: "mythic_indeterminate",
    time_basis: "la figura sobrenatural o relacional tiene apariencia humana descrita, pero no autoriza atribuirle etnia, clan o traje humano universal; se conserva lo explicito y el resto queda como diseño editorial reversible",
    narrative_moment: moment,
    activity_context: activity,
    occasion_context: "mixed_narrative",
    considered_ensembles: [
      { id: "source_complete", label: chosen, fit: "elegido por coincidencia con la fuente", rationale: "mantiene cobertura completa y atributos exactos", source_refs: ["finol_ulepala_sibotta_paz_2007"] },
      { id: "plain_complete", label: alternative, fit: "alternativa reversible", rationale: "cubre el cuerpo pero pierde rasgos narrativos específicos", source_refs: ["finol_ulepala_sibotta_paz_2007"] },
    ],
    chosen_ensemble: { id: "source_complete", rationale: "prioriza la descripción del relato sin convertirla en uniforme cultural", specification, layers },
    attire: dimension("include_documented", "myth_explicit", "la fuente describe cobertura o exige evitar desnudez especulativa", specification),
    footwear: dimension("include_contextual", "source_specific", "el calzado se mantiene completo y sobrio", footwear),
    accessories: dimension("include_documented", "myth_explicit", "solo aparecen atributos nombrados", accessories),
    face_paint: dimension("omit_contextually", "source_specific", "no hay pintura facial descrita para esta manifestacion"),
    wardrobe_profile: "male",
    wardrobe_components: components,
    wardrobe_visual_contract: contract,
    source_refs: ["finol_ulepala_sibotta_paz_2007"],
    continuity_markers: continuity,
  };
}

function wayuuCollective({ person, moment, activity, occasion = "mixed_narrative", chosen, specification, layers, continuity, contract, groups, wardrobeRefs }) {
  return {
    cultural_scope: "wayuu",
    person_scope: person,
    temporal_register: "mythic_indeterminate",
    time_basis: "la fuente fija pertenencia o prendas dentro de un relato mitico sin fecha; los conjuntos adicionales son traducciones editoriales reversibles basadas en repertorio Wayuu documentado",
    narrative_moment: moment,
    activity_context: activity,
    occasion_context: occasion,
    considered_ensembles: [
      { id: "varied_complete", label: chosen, fit: "elegido por diversidad interna y cobertura", rationale: "separa edad, genero, rol y distancia sin uniforme", source_refs: SOURCES },
      { id: "single_minimal_uniform", label: "una sola pieza inferior repetida con torso descubierto", fit: "rechazado", rationale: "borra el repertorio y convierte identidad en estereotipo", source_refs: SOURCES },
    ],
    chosen_ensemble: { id: "varied_complete", rationale: "cada subgrupo conserva un conjunto completo distinto", specification, layers },
    attire: dimension("include_contextual", "editorial_reversible", "la colectividad exige cobertura superior y variacion real", specification),
    footwear: dimension("include_contextual", "institutional_general", "calzado diferenciado por actividad y persona", "abarcas o waireñas simples, completas y no idénticas"),
    accessories: dimension("include_contextual", "source_specific", "solo objetos o tocados narrados y distribuidos, nunca acumulados", "accesorios limitados a cada subgrupo; sin emblemas"),
    face_paint: dimension("omit_contextually", "source_specific", "no se conoce motivo facial exacto para este conjunto"),
    wardrobe_profile: "mixed_collective",
    wardrobe_refs: wardrobeRefs,
    wardrobe_visual_contract: contract,
    collective_wardrobe: {
      variation_axis: "edad, genero, rol, capa dominante, cabeza, color y distancia",
      anti_uniformity_rule: "ningún subgrupo repite la misma silueta completa y ningún hombre queda resuelto sólo con prenda base y faja",
      member_groups: groups,
    },
    source_refs: SOURCES,
    continuity_markers: continuity,
  };
}

function group(id, scope, ensemble, rationale, wardrobeProfile, wardrobeRefs) {
  return { id, scope, ensemble, rationale, source_refs: SOURCES, wardrobe_profile: wardrobeProfile, wardrobe_refs: wardrobeRefs };
}

function mixedCollective({ person, moment, activity, specification, continuity, contract, groups }) {
  return {
    cultural_scope: "mixed",
    person_scope: person,
    temporal_register: "mythic_indeterminate",
    time_basis: "la fuente no fija identidad cultural de cada integrante; se usan conjuntos completos, lisos y reversibles sin transferir un uniforme Wayuu",
    narrative_moment: moment,
    activity_context: activity,
    occasion_context: "mixed_narrative",
    considered_ensembles: [
      { id: "varied_complete", label: specification, fit: "elegido", rationale: "mantiene cobertura y diversidad sin etnia inventada", source_refs: ["finol_ulepala_sibotta_paz_2007"] },
      { id: "single_uniform", label: "un solo uniforme mínimo repetido", fit: "rechazado", rationale: "convierte función narrativa en estereotipo", source_refs: ["finol_ulepala_sibotta_paz_2007"] },
    ],
    chosen_ensemble: { id: "varied_complete", rationale: "solucion completa y no etnizante", specification, layers: ["capas superiores completas", "coberturas inferiores completas", "fajas o cierres lisos", "calzado"] },
    attire: dimension("include_contextual", "editorial_reversible", "la fuente no describe cada traje y no se resuelve la duda con desnudez", specification),
    footwear: dimension("include_contextual", "editorial_reversible", "la actividad requiere pies protegidos", "sandalias o zapatos bajos lisos"),
    accessories: dimension("include_contextual", "source_specific", "solo utileria narrativa compartida", "ningún emblema o joya no descrita"),
    face_paint: dimension("omit_contextually", "source_specific", "no hay pintura exacta documentada"),
    wardrobe_profile: "mixed_collective",
    wardrobe_components: ["capas superiores completas", "coberturas inferiores completas", "fajas o cierres", "calzado"],
    wardrobe_visual_contract: contract,
    collective_wardrobe: {
      variation_axis: "rol, edad, corte, color y profundidad",
      anti_uniformity_rule: "ningún grupo comparte el mismo conjunto completo",
      member_groups: groups.map((item) => ({ ...item, source_refs: ["finol_ulepala_sibotta_paz_2007"], wardrobe_profile: "unspecified", wardrobe_components: ["capa superior", "cobertura inferior", "cierre", "calzado"] })),
    },
    source_refs: ["finol_ulepala_sibotta_paz_2007"],
    continuity_markers: continuity,
  };
}

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

const ULEPALA_CULTURE = wayuuIndividual({
  person: "Ulépala, hombre Wayuu joven y el mismo individuo en cinco estados",
  profile: "male",
  moment: "pretendiente, viajero, aprendiz de Juyá y retornado antes del desenlace",
  activity: "viajar a lomo de mula y caballo, caminar, trabajar, aprender oficios y volver",
  occasion: "travel",
  chosen: "Kotin índigo humo dominante sobre Kemiisa cruda, base Wusi secundaria, S'ira, abarcas y Ekiialiiijaa",
  alternative: "She'ewe amplia ocre con S'ira, abarcas y Wom para una presentación formal",
  specification: "Kotin índigo humo amplio de hombros a bajo rodilla sobre Kemiisa cruda de mangas, Wusi carbón apenas secundario, S'ira terracota lisa, abarcas oscuras y pañuelo Ekiialiiijaa arena",
  layers: ["Kemiisa cruda", "Wusi carbón secundario", "S'ira terracota", "Kotin índigo humo dominante", "abarcas oscuras", "Ekiialiiijaa arena"],
  wardrobeRefs: ["kotin_male_manta", "kemiisa_piiraneeru", "wusi_aichee", "sira_kumusu_aamuushi", "asapatshee_koisuuttu_kuttiira", "ekiialiiijaa_head_or_waist_cloth"],
  footwear: "abarcas oscuras de cuero, completas y lisas",
  accessories: "Ekiialiiijaa arena en la cabeza durante viaje; sin joyas, pintura o tocado ceremonial",
  continuity: ["Kotin índigo humo amplio", "Kemiisa cruda", "S'ira terracota", "pañuelo arena", "rostro ovalado, nariz recta y cabello negro hasta la nuca"],
  contract: visualContract("Kotin índigo humo desde hombros a rodillas", "frente con Kemiisa, faja y dos planos largos de Kotin", "espalda y perfil conservan volumen de manta separado de la base", "rechazar si queda sólo prenda inferior, torso expuesto o túnica genérica"),
});

const COMPANION_CULTURE = wayuuIndividual({
  person: "compañera de Ulépala, majayura Wayuu y luego yolujaa con apariencia humana",
  profile: "female",
  moment: "vida doméstica, regreso como dama rica, viaje nocturno y guía en la caverna",
  activity: "caminar, montar, cargar aparejos y cubrir del frío con sus mantolas",
  occasion: "mixed_narrative",
  chosen: "Wayuushein granate profunda larga sobre pechera cruda, waireñas y paño de cabeza",
  alternative: "Wayuushein índigo larga sobre pechera ocre y Wom bajo para el viaje",
  specification: "Wayuushein granate profunda larga, muy amplia y con mangas sobre pechera cruda, waireñas arcilla y paño de cabeza azul noche; el estado de dama rica suma sólo un collar liso documentado por el contexto de riqueza, sin kanas",
  layers: ["pechera cruda", "Wayuushein granate de mangas amplias", "waireñas arcilla", "paño de cabeza azul noche", "un collar liso sólo en el estado rico"],
  wardrobeRefs: ["wayuushein_manta", "pechera_female_underlayer", "wairenas"],
  footwear: "waireñas arcilla completas",
  accessories: "paño de cabeza liso y un collar sencillo sólo en la aparición de mujer rica; ningún motivo facial",
  continuity: ["Wayuushein granate amplia", "pechera cruda", "dos trenzas negras", "rostro alargado", "sombra blanca lateral sólo en el estado yolujaa"],
  contract: visualContract("Wayuushein granate de hombros a tobillos", "frente completamente cubierto sobre pechera", "perfil y espalda conservan caída amplia capaz de envolver a otra persona", "rechazar si aparece ceñida, sin mangas, transparente, blanca espectral o con torso expuesto"),
  evidence: "myth_explicit",
});

const MOTHER_CULTURE = wayuuIndividual({
  person: "madre Wayuu adulta mayor de Ulépala",
  profile: "female",
  moment: "conversación doméstica y advertencia sobre el camino",
  activity: "permanecer en casa, hablar y observar",
  chosen: "Wayuushein ocre larga sobre pechera carbón, waireñas y Wom bajo",
  alternative: "Wayuushein verde gris larga sobre pechera cruda y paño de cabeza",
  specification: "Wayuushein ocre polvo amplia y con mangas sobre pechera carbón, waireñas oscuras y Wom bajo de fibra lisa",
  layers: ["pechera carbón", "Wayuushein ocre larga", "waireñas oscuras", "Wom bajo"],
  wardrobeRefs: ["wayuushein_manta", "pechera_female_underlayer", "wairenas", "wom_woma_hat"],
  footwear: "waireñas oscuras sin borlas",
  accessories: "Wom bajo liso; manos vacías",
  continuity: ["manta ocre", "Wom bajo", "trenza gris gruesa", "rostro ancho con líneas de edad"],
  contract: visualContract("manta ocre larga y Wom bajo", "mangas y pechera se leen por separado", "espalda mantiene largo completo y trenza gris", "rechazar si la manta se vuelve falda o el torso queda descubierto"),
});

const GRANDMOTHER_CULTURE = wayuuIndividual({
  person: "abuela Wayuu-yolujaa del algodón, adulta mayor",
  profile: "female",
  moment: "trabajo y consejo junto al sembrado de algodón en Jepira",
  activity: "orientar, llevar comida y observar labores agrícolas",
  chosen: "Wayuushein azul carbón de trabajo sobre pechera arcilla y waireñas",
  alternative: "Wayuushein arena larga sobre pechera carbón y Wom bajo",
  specification: "Wayuushein azul carbón larga con mangas recogidas una vuelta, pechera arcilla y waireñas oscuras",
  layers: ["pechera arcilla", "Wayuushein azul carbón", "waireñas oscuras", "trenza blanca baja"],
  wardrobeRefs: ["wayuushein_manta", "pechera_female_underlayer", "wairenas"],
  footwear: "waireñas oscuras",
  accessories: "ninguno; la pala y la comida pertenecen a fichas separadas",
  continuity: ["manta azul carbón", "pechera arcilla", "trenza blanca baja", "rostro triangular de anciana"],
  contract: visualContract("manta azul carbón larga de trabajo", "frente cubierto y mangas funcionales", "perfil y espalda mantienen volumen y trenza", "rechazar si aparece como bruja, fantasma o figura semidesnuda"),
});

const FRIEND_CULTURE = wayuuIndividual({
  person: "amigo Wayuu adulto de Ulépala",
  profile: "male",
  moment: "conversación durante la fiesta organizada para conocer el relato",
  activity: "sentarse, escuchar y persuadir sin embriaguez visible",
  occasion: "visit_or_exchange",
  chosen: "She'ewe ocre amplia sobre Kemiisa carbón, S'ira y abarcas",
  alternative: "Kotin verde gris sobre Kemiisa cruda, faja y waireñas",
  specification: "She'ewe ocre amplia desde hombros a rodillas sobre Kemiisa carbón, S'ira terracota lisa y abarcas oscuras",
  layers: ["Kemiisa carbón", "S'ira terracota", "She'ewe ocre dominante", "abarcas oscuras"],
  wardrobeRefs: ["she_etebe_sheewe", "kemiisa_piiraneeru", "sira_kumusu_aamuushi", "asapatshee_koisuuttu_kuttiira"],
  footwear: "abarcas oscuras",
  accessories: "ninguna copa en mano, arma, sombrero ceremonial o pintura",
  continuity: ["She'ewe ocre", "Kemiisa carbón", "barba corta", "rostro cuadrado"],
  contract: visualContract("She'ewe ocre de cuerpo amplio", "frente cubierto con solapa de papel y mangas inferiores", "espalda conserva paño largo y ancho", "rechazar si queda en faja y prenda inferior"),
});

const FRIEND_WOMAN_CULTURE = wayuuIndividual({
  person: "mujer Wayuu adulta del amigo de Ulépala",
  profile: "female",
  moment: "escucha del relato junto al amigo",
  activity: "sentarse y escuchar sin participar en intimidad o violencia",
  chosen: "Wayuushein verde humo larga sobre pechera ocre y waireñas",
  alternative: "Wayuushein azul noche sobre pechera cruda y Wom bajo",
  specification: "Wayuushein verde humo larga, lisa y con mangas sobre pechera ocre y waireñas carbón",
  layers: ["pechera ocre", "Wayuushein verde humo", "waireñas carbón", "dos trenzas negras"],
  wardrobeRefs: ["wayuushein_manta", "pechera_female_underlayer", "wairenas"],
  footwear: "waireñas carbón",
  accessories: "ninguna joya, bebida, pintura o tocado",
  continuity: ["manta verde humo", "pechera ocre", "dos trenzas", "rostro redondo"],
  contract: visualContract("manta verde humo larga", "frente completamente cubierto", "perfil y espalda muestran largo hasta tobillos", "rechazar si la manta se ciñe o desaparece"),
});

const OLD_WOMAN_CULTURE = wayuuIndividual({
  person: "anciana amiga de Ulépala, no identificada como Alekerü ni araña",
  profile: "female",
  moment: "advertencia y preparación del regreso por las sombras",
  activity: "hablar, ensillar, guiar y entregar lienzo e hilo",
  chosen: "Wayuushein carbón violáceo larga sobre pechera arena y waireñas",
  alternative: "Wayuushein arcilla larga con Wom bajo y pechera carbón",
  specification: "Wayuushein carbón violáceo larga y con mangas sobre pechera arena, waireñas oscuras y una trenza blanca larga",
  layers: ["pechera arena", "Wayuushein carbón violáceo", "waireñas oscuras", "trenza blanca"],
  wardrobeRefs: ["wayuushein_manta", "pechera_female_underlayer", "wairenas"],
  footwear: "waireñas oscuras",
  accessories: "ninguno en la identidad; lienzo, ovillo y mulas tienen fichas propias",
  continuity: ["manta carbón violáceo", "trenza blanca única", "rostro pequeño de nariz curva", "ningún rasgo arácnido"],
  contract: visualContract("manta carbón violáceo larga", "pechera y mangas legibles", "espalda conserva una trenza blanca sin patas o hilo", "rechazar si parece araña, bruja, Alekerü o Waleker"),
});

const JUYA_CULTURE = mixedIndividual({
  person: "aparición antropomorfa y versionada del mismo Juyá",
  moment: "recepción de Ulépala en las talanqueras y estancia",
  activity: "caminar, recibir y sostener una vara flexible",
  chosen: "vestimenta amplia gris reluciente con solapas grana, sandalias gruesas y vara de bejuco",
  alternative: "manto gris liso completo, pantalón carbón y sandalias sin solapas",
  specification: "gran prenda gris perla de papel mate con volumen desde hombros a pantorrillas y dos solapas grana, capa interior carbón, cobertura inferior completa y sandalias gruesas",
  layers: ["capa interior carbón", "cobertura inferior completa", "prenda gris perla amplia", "solapas grana", "sandalias gruesas"],
  components: ["prenda gris amplia", "capa interior", "cobertura inferior", "sandalias gruesas", "solapas grana"],
  footwear: "sandalias gruesas y oscuras descritas por la fuente",
  accessories: "una sola vara flexible de bejuco quebrada; sin corona, joyas, rayos dibujados o botellas",
  continuity: ["cabello blanco abundante a hombros", "vientre grande", "prenda gris amplia", "solapas grana", "vara flexible"],
  contract: visualContract("gran volumen gris con solapas grana", "frente muestra solapas, capa interior y cobertura completa", "perfil mantiene vientre, caída amplia y cabello a hombros", "rechazar si aparece desnudo, con taparrabo, túnica genérica estrecha o corona"),
});

const MALEIWA_CULTURE = wayuuIndividual({
  person: "aparición antropomorfa del mismo Maleiwa como Gran Señor",
  profile: "male",
  moment: "llegada a caballo y conversación formal con Juyá",
  activity: "montar, conversar y visitar sin violencia visible",
  occasion: "leadership_or_formal",
  chosen: "She'ewe carbón azulada amplia sobre Kemiisa cruda, S'ira, abarcas y Tolooma sobrio",
  alternative: "Kotin ocre amplio sobre Kemiisa carbón, faja, abarcas y Wom",
  specification: "She'ewe carbón azulada amplia de hombros a rodillas sobre Kemiisa cruda, S'ira grana lisa, abarcas negras y Tolooma bajo en lana ocre y carbón sin cascabeles visibles",
  layers: ["Kemiisa cruda", "S'ira grana", "She'ewe carbón azulada", "abarcas negras", "Tolooma bajo"],
  wardrobeRefs: ["she_etebe_sheewe", "kemiisa_piiraneeru", "sira_kumusu_aamuushi", "asapatshee_koisuuttu_kuttiira", "tolooma_prestige_race_headpiece"],
  footwear: "abarcas negras completas",
  accessories: "Tolooma bajo por la presentación de Gran Señor; sin arma, joyas o pintura en la identidad",
  continuity: ["She'ewe carbón azulada", "S'ira grana", "Tolooma bajo", "rostro largo y barba negra corta", "postura ecuestre"],
  contract: visualContract("She'ewe carbón azulada y Tolooma bajo", "frente completamente cubierto por Kemiisa y manto", "espalda muestra gran caída de She'ewe", "rechazar si queda sólo prenda inferior o se convierte en rey europeo"),
});

const SIX_MEN_CULTURE = wayuuCollective({
  person: "exactamente seis hombres Wayuu adultos que acompañan a Ulépala",
  moment: "viaje de rancho en rancho para reunir la dote",
  activity: "montar o caminar, cuidar rebaños y transportar bienes",
  occasion: "travel",
  chosen: "seis conjuntos completos distribuidos entre Kemiisa, Kotin, Asheinpalajanaa y She'ewe",
  specification: "dos hombres con Kemiisa y Kotin, dos con Kemiisa y Asheinpalajanaa, uno con She'ewe formal y uno con saco histórico reversible; todos con faja y calzado",
  layers: ["capas superiores o mantas dominantes", "bases y fajas secundarias", "calzado", "sombreros o paños sólo en algunos"],
  wardrobeRefs: ["kemiisa_piiraneeru", "kotin_male_manta", "asheinpalajanaa_male_wrap", "she_etebe_sheewe", "sira_kumusu_aamuushi", "asapatshee_koisuuttu_kuttiira"],
  continuity: ["seis figuras", "cuatro familias de silueta", "ningún torso descubierto", "paleta ocre, índigo, crudo, carbón y grana"],
  contract: visualContract("seis volúmenes masculinos completos y distintos", "cada torso muestra camisa, manta o envolvente", "perfiles conservan largos y cargas diferentes", "rechazar si se clonan, quedan en taparrabos o llevan el mismo tocado"),
  groups: [
    group("travel_pair", "dos acompañantes cercanos", "Kemiisa + Kotin + S'ira + abarcas", "cobertura de viaje", "male", ["kemiisa_piiraneeru", "kotin_male_manta", "sira_kumusu_aamuushi", "asapatshee_koisuuttu_kuttiira"]),
    group("wrap_pair", "dos acompañantes medios", "Kemiisa + Asheinpalajanaa + S'ira + waireñas", "envolvente de viaje distinta", "male", ["kemiisa_piiraneeru", "asheinpalajanaa_male_wrap", "sira_kumusu_aamuushi", "wairenas"]),
    group("formal_pair", "dos acompañantes lejanos", "She'ewe o saco completo + faja + abarcas", "variación de presentación", "male", ["she_etebe_sheewe", "saco_male_layer", "sira_kumusu_aamuushi", "asapatshee_koisuuttu_kuttiira"]),
  ],
});

const LIVING_FAMILY_CULTURE = wayuuCollective({
  person: "familia Wayuu viva de Ulépala, de edades y géneros no enumerados",
  moment: "recibimiento y celebración nocturna del retorno",
  activity: "saludar, preparar hospitalidad y reunirse",
  chosen: "mujeres con mantas largas y hombres con mantas o camisas completas",
  specification: "exactamente cinco figuras: dos mujeres con Wayuushein distintas, hombre mayor con She'ewe, hombre adulto con Kemiisa y Kotin, y joven con camisa y envolvente completa",
  layers: ["mantas femeninas sobre pechera", "capas masculinas completas", "fajas y calzado", "cabezas diferenciadas sin tocados rituales"],
  wardrobeRefs: ["wayuushein_manta", "pechera_female_underlayer", "she_etebe_sheewe", "kemiisa_piiraneeru", "kotin_male_manta", "wairenas"],
  continuity: ["cinco personas", "dos mantas femeninas", "tres siluetas masculinas completas", "ningún uniforme"],
  contract: visualContract("cinco figuras familiares vestidas por capas", "cada torso y pierna permanece cubierto", "espaldas conservan mantas, camisas y largos distintos", "rechazar si parecen maniquíes idénticos o quedan semidesnudos"),
  groups: [
    group("women", "dos mujeres adultas", "Wayuushein + pechera + waireñas en dos paletas", "mantas familiares no uniformes", "female", ["wayuushein_manta", "pechera_female_underlayer", "wairenas"]),
    group("men", "dos hombres y un joven", "She'ewe; Kemiisa + Kotin; Kemiisa + envolvente", "tres coberturas masculinas", "male", ["kemiisa_piiraneeru", "kotin_male_manta", "she_etebe_sheewe", "sira_kumusu_aamuushi", "wairenas"]),
  ],
});

const DEAD_FAMILY_CULTURE = wayuuCollective({
  person: "hermanos, tíos y abuelas Wayuu-yolujaa de la compañera",
  moment: "hospitalidad en Jepira y consuelo en el cementerio",
  activity: "saludar, conversar y acompañar sin apariencia de terror",
  chosen: "mantas largas y capas masculinas completas en paleta mate de Jepira",
  specification: "exactamente seis parientes: dos abuelas con Wayuushein, una mujer adulta con manta, un hombre mayor con She'ewe y dos hombres con Kotin o Kemiisa; todos opacos",
  layers: ["pecheras y mantas femeninas", "camisas y mantas masculinas", "fajas y calzado", "sombras cortas desfasadas"],
  wardrobeRefs: ["wayuushein_manta", "pechera_female_underlayer", "she_etebe_sheewe", "kotin_male_manta", "kemiisa_piiraneeru", "wairenas"],
  continuity: ["seis parientes", "cuerpos opacos", "sombras cortas desfasadas", "tres generaciones"],
  contract: visualContract("seis siluetas completas de tres generaciones", "frentes cubiertos por mantas o camisas", "espaldas conservan largos y peinados distintos", "rechazar si aparecen transparentes, blancos, uniformados o en harapos"),
  groups: [
    group("grandmothers", "dos abuelas", "Wayuushein largas sobre pecheras y waireñas", "edad y parentesco visibles", "female", ["wayuushein_manta", "pechera_female_underlayer", "wairenas"]),
    group("adult_relatives", "una mujer y tres hombres adultos", "manta femenina; She'ewe; Kotin; Kemiisa y envolvente", "diversidad familiar", "mixed_collective", ["wayuushein_manta", "she_etebe_sheewe", "kotin_male_manta", "kemiisa_piiraneeru", "wairenas"]),
  ],
});

const SERVANTS_CULTURE = mixedCollective({
  person: "sirvientas y sirvientes numerosos de Juyá, identidad cultural no descrita",
  moment: "recibimiento en la estancia",
  activity: "avisar, llevar un banco y colgar un chinchorro",
  specification: "cinco personas con camisas o túnicas de mangas, pantalones o envolventes completos y sandalias, todas distintas en gris, verde, ocre y carbón",
  continuity: ["cinco figuras ágiles", "cinco conjuntos completos", "gestos serios", "ningún uniforme"],
  contract: visualContract("cinco siluetas completas en movimiento", "torsos y piernas cubiertos", "perfiles muestran mangas y largos diferentes", "rechazar si quedan en una sola pieza inferior o reciben uniforme colonial"),
  groups: [
    { id: "near_workers", scope: "dos personas cercanas", ensemble: "camisas largas, pantalones completos y sandalias", rationale: "trabajo funcional" },
    { id: "far_workers", scope: "tres personas lejanas", ensemble: "túnicas de mangas, envolventes completas y zapatos bajos", rationale: "variedad sin etnia inventada" },
  ],
});

const FOREST_YOUTH_CULTURE = wayuuCollective({
  person: "apariencias juveniles del bosque de Juyá descritas con She'ebe, Kotsü, Molono y mantolas",
  moment: "vida social previa a las transformaciones en animales y plantas",
  activity: "correr, conversar, cantar y bailar sin caza visible",
  chosen: "She'ewe completa distribuida con Kotsü o Molono entre hombres y mantas largas entre mujeres",
  specification: "seis jóvenes: tres hombres con She'ewe amplias y calzado, de los cuales uno lleva Kotsü y otro Molono; tres mujeres con Wayuushein/mantolas largas sobre pechera y waireñas",
  layers: ["She'ewe masculinas de cuerpo amplio", "Kotsü y Molono distribuidos, nunca apilados", "mantolas femeninas sobre pechera", "calzado completo"],
  wardrobeRefs: ["she_etebe_sheewe", "kotsii_festive_headpiece", "molono_ulepala_headpiece", "wayuushein_manta", "pechera_female_underlayer", "asapatshee_koisuuttu_kuttiira"],
  continuity: ["seis jóvenes", "She'ewe dominante", "un Kotsü", "un Molono", "tres mantolas largas"],
  contract: visualContract("seis siluetas completas con mantas dominantes", "frentes cubiertos; tocados sólo en dos hombres", "espaldas conservan largas caídas de She'ewe y mantolas", "rechazar si Kotsü y Molono se apilan en todos o la ropa se reduce a taparrabos"),
  groups: [
    group("young_men", "tres jóvenes masculinos", "She'ewe + abarcas; un Kotsü y un Molono distribuidos", "la fuente nombra las tres prendas sin exigir que todos apilen ambos gorros", "male", ["she_etebe_sheewe", "kotsii_festive_headpiece", "molono_ulepala_headpiece", "asapatshee_koisuuttu_kuttiira"]),
    group("young_women", "tres jóvenes femeninas", "Wayuushein/mantolas largas + pechera + waireñas", "mantolas amplias explícitas", "female", ["wayuushein_manta", "pechera_female_underlayer", "wairenas"]),
  ],
});

const PUMPKIN_WOMEN_CULTURE = wayuuCollective({
  person: "majayuras percibidas en las ahuyamas de Juyá",
  moment: "apariencia humana sentada antes de la correspondencia vegetal",
  activity: "conversar en grupo, sin lesión o consumo visible",
  chosen: "mantas largas amplias con solapas verdes sobre pecheras y waireñas",
  specification: "cuatro mujeres con Wayuushein largas en ocres y naranjas, todas con solapas verdes planas, pecheras crudas y waireñas; volúmenes corporales dados por la ropa, no anatomía expuesta",
  layers: ["pecheras crudas", "cuatro mantas largas", "solapas verdes", "waireñas"],
  wardrobeRefs: ["wayuushein_manta", "pechera_female_underlayer", "wairenas"],
  continuity: ["cuatro mujeres", "solapas verdes", "cuatro siluetas amplias distintas", "ninguna anatomía sexualizada"],
  contract: visualContract("cuatro mantas largas con solapas verdes", "frentes totalmente cubiertos", "perfiles conservan volumen textil y largo", "rechazar si aparecen senos, vientres desnudos, lesión o burla corporal"),
  groups: [
    group("young_pair", "dos majayuras jóvenes", "Wayuushein ocre y naranja sobre pechera", "volumen más estrecho sin sexualizar", "female", ["wayuushein_manta", "pechera_female_underlayer", "wairenas"]),
    group("mature_pair", "dos mujeres adultas", "Wayuushein arcilla y carbón, amplias y estratificadas", "volumen textil mayor", "female", ["wayuushein_manta", "pechera_female_underlayer", "wairenas"]),
  ],
});

const DEER_YOUTH_CULTURE = wayuuCollective({
  person: "jóvenes masculinos elegantes que corresponden a venados y matacanes",
  moment: "grupo receloso junto a los aguajes antes de la revelación animal",
  activity: "caminar con agilidad y conversar, sin disparo o caída",
  occasion: "yonna_festive",
  chosen: "She'ewe amplias, fajas y abarcas con Tolooma o casquete empenachado distribuidos",
  specification: "cuatro jóvenes con She'ewe completas en ocre, índigo, carbón y crudo; dos llevan Tolooma bajos y dos casquetes bajos con pocas plumas cortas, nunca tocados altos",
  layers: ["She'ewe completas", "capas interiores y fajas", "abarcas", "Tolooma o casquetes distribuidos"],
  wardrobeRefs: ["she_etebe_sheewe", "sira_kumusu_aamuushi", "asapatshee_koisuuttu_kuttiira", "tolooma_prestige_race_headpiece", "kotsii_festive_headpiece"],
  continuity: ["cuatro jóvenes", "cuatro She'ewe distintas", "dos Tolooma", "dos casquetes bajos", "ninguna arma visible"],
  contract: visualContract("cuatro mantas masculinas amplias con cabezas diferenciadas", "frentes cubiertos por She'ewe", "perfiles conservan volumen y calzado", "rechazar si aparecen desnudos, con tocado panindígena o flechas clavadas"),
  groups: [
    group("tolooma_pair", "dos jóvenes con Tolooma", "She'ewe + faja + abarcas + Tolooma bajo", "prestigio visual narrado", "male", ["she_etebe_sheewe", "sira_kumusu_aamuushi", "asapatshee_koisuuttu_kuttiira", "tolooma_prestige_race_headpiece"]),
    group("cap_pair", "dos jóvenes con casquete", "She'ewe + faja + abarcas + Kotsii bajo", "variación de cabeza narrada", "male", ["she_etebe_sheewe", "sira_kumusu_aamuushi", "asapatshee_koisuuttu_kuttiira", "kotsii_festive_headpiece"]),
  ],
});

const PARTY_CULTURE = wayuuCollective({
  person: "participantes de la fiesta de Maleiwa: personas de prestigio, majayuras, músicos, bailadores, cantores y cuentistas",
  moment: "reunión preparada para recibir a Juyá",
  activity: "tocar, cantar, bailar, narrar y descansar",
  occasion: "yonna_festive",
  chosen: "conjuntos festivos completos distribuidos por rol, sin uniforme",
  specification: "seis figuras: dos mujeres con Wayuushein largas, dos hombres con She'ewe y Tolooma o Kotsii, un músico con Kemiisa y Kotin y una cuentista con manta larga",
  layers: ["mantas femeninas sobre pecheras", "She'ewe masculinas", "Kemiisa y Kotin", "calzado y tocados distribuidos"],
  wardrobeRefs: ["wayuushein_manta", "pechera_female_underlayer", "she_etebe_sheewe", "kemiisa_piiraneeru", "kotin_male_manta", "tolooma_prestige_race_headpiece", "kotsii_festive_headpiece", "wairenas"],
  continuity: ["seis participantes", "seis conjuntos distintos", "dos instrumentos", "ningún uniforme o pintura inventada"],
  contract: visualContract("seis siluetas festivas completas", "cada torso y pierna cubiertos", "perfiles mantienen mantas, mangas y tocados distintos", "rechazar si la fiesta se vuelve desfile de taparrabos o carnaval genérico"),
  groups: [
    group("women_party", "tres mujeres", "Wayuushein largas y distintas sobre pechera", "majayuras y cuentista diferenciadas", "female", ["wayuushein_manta", "pechera_female_underlayer", "wairenas"]),
    group("men_party", "tres hombres", "She'ewe o Kotin sobre Kemiisa, faja, calzado y un tocado distribuido", "músicos y bailadores diferenciados", "male", ["she_etebe_sheewe", "kotin_male_manta", "kemiisa_piiraneeru", "sira_kumusu_aamuushi", "wairenas", "tolooma_prestige_race_headpiece"]),
  ],
});

const COMMUNITY_CULTURE = wayuuCollective({
  person: "comunidad Wayuu que interroga a Ulépala: niños, jóvenes, adultos, mayores, amigos, parientes y antiguos servidores",
  moment: "periodo de regreso y silencio",
  activity: "visitar, escuchar, preguntar y ofrecer hospitalidad",
  occasion: "visit_or_exchange",
  chosen: "ocho personas con conjuntos completos diferenciados por edad, género y rol",
  specification: "tres mujeres con mantas largas, tres hombres con Kemiisa, Kotin o She'ewe, una niña con vestido largo liso y un niño con camisa y cobertura inferior completa",
  layers: ["mantas femeninas", "capas masculinas", "ropa infantil completa", "fajas, calzado y cabezas diferenciadas"],
  wardrobeRefs: ["wayuushein_manta", "pechera_female_underlayer", "kemiisa_piiraneeru", "kotin_male_manta", "she_etebe_sheewe", "sira_kumusu_aamuushi", "wairenas"],
  continuity: ["ocho personas", "cuatro edades", "ningún uniforme", "Ulépala no aparece dentro de la ficha"],
  contract: visualContract("ocho siluetas completas escalonadas", "todos los torsos y piernas cubiertos", "perfiles conservan capas y alturas distintas", "rechazar si se clonan o se reduce a hombres semidesnudos"),
  groups: [
    group("women_ages", "tres mujeres de edades distintas", "Wayuushein + pechera + waireñas", "edad por silueta y postura", "female", ["wayuushein_manta", "pechera_female_underlayer", "wairenas"]),
    group("men_ages", "tres hombres de edades distintas", "Kemiisa + Kotin; She'ewe; Kemiisa + envolvente", "tres repertorios masculinos", "male", ["kemiisa_piiraneeru", "kotin_male_manta", "she_etebe_sheewe", "sira_kumusu_aamuushi", "wairenas"]),
    group("children", "una niña y un niño", "vestido largo liso; camisa y cobertura inferior completa", "ropa infantil no miniatura ceremonial", "mixed_collective", ["wayuushein_manta", "kemiisa_piiraneeru", "wairenas"]),
  ],
});

const TRANSFORM_CULTURE = FOREST_YOUTH_CULTURE;

export const WAYUU_ULEPALA_DIRECTIONS_V3 = {
  "ulepala__identity_sheet": simple({
    title: "Ulépala · identidad completa del viajero",
    focus: "Exactamente UN hombre Wayuu joven de cuerpo completo, representado UNA SOLA VEZ en una única escena continua: no turnaround, no cuadrícula y no repetición. Rostro ovalado siena, nariz recta, cabello negro hasta la nuca y postura alerta. Kotin índigo humo amplio desde hombros a bajo rodilla sobre Kemiisa cruda de mangas, Wusi carbón apenas secundario, S'ira terracota, abarcas oscuras y pañuelo arena. Manos vacías; no mula, caballo, animal, arma, cardenal o compañera.",
    scene: "Sendero semiarido full bleed con vivienda lejana, huellas y horizonte; seis planos de papel físicamente separados.",
    must: ["una figura completa", "Kotin dominante y Kemiisa visible", "faja y prenda base secundarias", "rostro repetible", "profundidad 3D sin soporte"],
    culture: ULEPALA_CULTURE,
  }),
  "ulepala__state_sheet": simple({
    title: "Ulépala · pretendiente, viajero, aprendiz y retornado",
    focus: "Cuatro manifestaciones del MISMO hombre en un sendero continuo: pretendiente con Kotin limpio; viajero con pañuelo y polvo; aprendiz de Juyá con el mismo conjunto y una cuerda de trabajo en manos; retornado con Kotin más mate y postura reservada. El quinto estado cardenal no aparece aquí y tiene ficha propia. Todas las figuras completamente vestidas.",
    scene: "Recorrido curvo desde vivienda y desierto hasta campiña verde y regreso a tierra seca; cuatro distancias reales, sin paneles.",
    must: ["cuatro estados del mismo hombre", "mismo rostro y Kotin", "cambios por desgaste, postura y objeto", "ninguna muerte o herida", "sin paneles"],
    culture: ULEPALA_CULTURE,
  }),
  "companera_muerta_ulepala__identity_sheet": simple({
    title: "Compañera de Ulépala · majayura plenamente vestida",
    focus: "Exactamente UNA mujer Wayuu joven de cuerpo completo, opaca y humana, representada una sola vez y con el entorno despejado. Rostro alargado, dos trenzas negras, Wayuushein granate profunda larga y muy amplia con mangas sobre pechera cruda, waireñas arcilla y paño azul noche. Una sombra blanca muy tenue se separa lateralmente como señal yolujaa; no transparencia, palidez o desnudez. No vasijas, cestas, mochilas, patrones o utilería junto a ella.",
    scene: "Umbral doméstico nocturno de papel, figura sola y sendero al fondo; full bleed con cinco profundidades.",
    must: ["una mujer completa", "manta larga y mangas", "pechera y waireñas", "dos trenzas", "anomalía sólo en sombra"],
    culture: COMPANION_CULTURE,
  }),
  "companera_muerta_ulepala__state_sheet": simple({
    title: "Compañera · cuatro apariencias y continuidad de mantolas",
    focus: "Cuatro estados de la MISMA mujer sin paneles: majayura doméstica; silueta blanca lejana con la misma manta; dama rica montada de perfil con un collar liso y gran manta; guía de la caverna usando la amplitud de la misma mantola para cubrir del frío, sin mostrar a Ulépala. Rostro, trenzas y granate constantes.",
    scene: "Camino curvo entre casa, bruma de atardecer, cementerio y caverna húmeda; cuatro distancias físicas.",
    must: ["cuatro estados", "manta completa en todos", "estado rico con collar discreto", "sin contacto íntimo", "ningún fantasma europeo"],
    culture: COMPANION_CULTURE,
  }),
  "madre_ulepala__identity_sheet": simple({
    title: "Madre de Ulépala · advertencia doméstica",
    focus: "Una mujer Wayuu adulta mayor completa, rostro ancho, trenza gris y gesto de advertencia con una mano abierta. Wayuushein ocre larga sobre pechera carbón, waireñas oscuras y Wom bajo. Sin joven, camino, animal o objeto mágico.",
    scene: "Exterior junto a pared de bahareque y sombra de techo; cinco capas full bleed.",
    must: ["una mujer mayor", "manta ocre completa", "Wom bajo", "gesto sobrio", "sin segunda figura"],
    culture: MOTHER_CULTURE,
  }),
  "companeros_dote_ulepala__group_grammar": simple({
    title: "Seis compañeros de la dote · repertorio masculino completo",
    focus: "Exactamente SEIS hombres Wayuu completos y diferentes: dos con Kemiisa y Kotin; dos con Kemiisa y Asheinpalajanaa; uno con She'ewe amplia; uno con saco sobrio y manta envolvente. Todos con fajas y calzado; sombrero o pañuelo sólo en tres. No Ulépala, ganado o collares en esta ficha.",
    scene: "Sendero de viaje con seis figuras en zigzag a distancias distintas; lomas bajas y ranchos lejanos, full bleed.",
    must: ["exactamente seis hombres", "seis conjuntos completos", "cuatro siluetas dominantes", "ningún torso descubierto", "ningún uniforme"],
    culture: SIX_MEN_CULTURE,
  }),
  "familia_viva_ulepala__group_grammar": simple({
    title: "Familia viva de Ulépala · recibimiento",
    focus: "Exactamente CINCO familiares Wayuu completos en arco irregular: dos mujeres con Wayuushein largas distintas de color sólido, hombre mayor con She'ewe lisa, hombre adulto con Kemiisa y Kotin lisos, joven con camisa y envolvente completa lisa. Gestos de saludo sin abrazo íntimo; ninguna copa o baile. Ningún estampado floral, bordado, banda geométrica, kana, patrón o motivo decorativo.",
    scene: "Patio nocturno cálido junto a vivienda, chinchorro lejano y fuego fuera de cuadro; seis profundidades.",
    must: ["cinco personas", "dos mantas femeninas", "tres conjuntos masculinos completos", "edades distintas", "sin uniforme"],
    culture: LIVING_FAMILY_CULTURE,
  }),
  "malinot__presence_model": simple({
    title: "Malinot · dominio del camino prohibido sin anatomía",
    focus: "Presencia sin cuerpo: un sendero estrecho de papel carbón divide la planicie, la vegetación se inclina en dirección contraria al viento y una sombra densa ocupa el recodo sin figura que la proyecte. Exactamente tres huellas dejan de ser humanas y se vuelven hendiduras de garra antes de desaparecer. No tigre visible aquí.",
    scene: "Atardecer ocre y carbón full bleed, camino cercano, recodo medio y horizonte vacío; siete capas.",
    must: ["ningún cuerpo", "sendero prohibido", "sombra sin figura", "tres huellas transicionales", "sin demonio o portal"],
  }),
  "tigre_camino_malinot__identity_sheet": simple({
    title: "Tigre del camino · animal íntegro sin ataque",
    focus: "Exactamente UN gran felino moteado de cuerpo completo, inspirado en jaguar americano pero nombrado tigre por la fuente. Papel ocre con manchas carbón recortadas, musculatura sobria, cuatro patas visibles y cabeza de perfil. Quieto, sin presa, dientes expuestos o sangre.",
    scene: "Matorral xerófilo a un lado del camino de Malinot; animal medio, cardones al fondo y roca cercana.",
    must: ["un felino completo", "cuatro patas", "manchas naturales", "postura no agresiva", "ninguna persona"],
  }),
  "mula_ulepala__identity_sheet": simple({
    title: "Mula de Ulépala · montura inicial",
    focus: "Una sola mula adulta completa, pelaje gris ceniza, orejas largas, silla sencilla y aparejos lisos sin patrón. Vista lateral tres cuartos, cuatro patas visibles, sin jinete o carga.",
    scene: "Sendero seco full bleed con sombra de vivienda lejana; cinco planos.",
    must: ["una mula", "silla simple", "cuatro patas", "sin persona", "sin ornamentación"],
  }),
  "rebano_dote_ulepala__group_grammar": simple({
    title: "Rebaño de la dote · seis especies distinguibles",
    focus: "Grupo legible con exactamente DOS carneros, DOS cabras, DOS caballos, DOS burros, DOS mulas y DOS reses, doce animales totales, distribuidos en seis profundidades. Ningún animal duplicado por reflejo, sin jinetes, marcas, heridas o corral inventado.",
    scene: "Planicie de tránsito ancha full bleed, animales agrupados por especie sin fila de catálogo.",
    must: ["doce animales totales", "seis especies", "dos por especie", "escalas coherentes", "ninguna persona"],
  }),
  "collares_dote_ulepala__object_sheet": simple({
    title: "Collares de la dote · bienes sin motivos inventados",
    focus: "Exactamente CINCO collares completos y diferentes de cuentas lisas en rojo piedra, crema, carbón, azul apagado y ocre, junto a un pequeño paño doblado sin patrón. No oro, logos, kanas, marcas claniles o cuello humano.",
    scene: "Suelo de fibra arena full bleed, collares cercanos y paño profundo con sombras de contacto.",
    must: ["cinco collares", "cuentas lisas", "un paño", "sin patrón", "sin persona"],
  }),
  "vivienda_ulepala__spatial_model": simple({
    title: "Vivienda de Ulépala · arquitectura no universal",
    focus: "Casa compacta no tipificada con dos volúmenes de bahareque liso, cubierta vegetal baja, un vano oscuro y sombra de enramada parcial. Un sendero sale hacia el camino prohibido y otro hacia la ruta de la dote. Sin personas, decoración, cartel o ranchería completa.",
    scene: "Vista oblicua 16:9 full bleed con poste cercano, casa media, caminos y planicie profunda; ocho capas.",
    must: ["dos volúmenes", "un vano", "dos senderos", "sombra habitable", "sin modelo universal"],
  }),
  "caballo_montura_ulepala__identity_sheet": simple({
    title: "Caballo del regreso · montura distinta del corcel-nube",
    focus: "Un caballo adulto completo color castaño oscuro, silla sobria y grupa despejada. Cuatro patas visibles, vista lateral y cabeza serena. Ninguna persona, nube, desvanecimiento o aparejo rico.",
    scene: "Bruma de atardecer en camino abierto, caballo medio y rebaño apenas sugerido muy lejos.",
    must: ["un caballo castaño", "silla sobria", "cuatro patas", "sin jinete", "no caballo blanco"],
  }),
  "familia_muerta_ulepala__group_grammar": simple({
    title: "Parientes de Jepira · seis cuerpos opacos y tres generaciones",
    focus: "Exactamente SEIS parientes completos: dos abuelas con Wayuushein largas lisas, una mujer adulta con manta azul humo lisa, hombre mayor con She'ewe carbón lisa y dos hombres con Kotin o Kemiisa lisos. Todos opacos, individualizados y hospitalarios; comparten sombras demasiado cortas como única anomalía. Ningún bordado, flor, banda geométrica, kana, patrón en sombrero o motivo decorativo.",
    scene: "Terraza de Jepira con colinas azules y casas lejanas; figuras en arco irregular y siete capas.",
    must: ["seis personas", "tres generaciones", "seis conjuntos completos", "cuerpos opacos", "sin terror"],
    culture: DEAD_FAMILY_CULTURE,
  }),
  "cementerio_tinajas_ulepala__spatial_model": simple({
    title: "Cementerio antiguo de tinajas · revelación material",
    focus: "Espacio funerario sobrio con exactamente NUEVE tinajas de barro semienterradas, tamaños distintos, suelo erosionado y tres senderos que convergen. Ninguna cruz, lápida, ataúd, cuerpo, hueso o persona. Las tinajas forman profundidad real, no un patrón decorativo.",
    scene: "Alba gris full bleed, tinajas cercanas y medias, loma vacía al fondo; nueve capas.",
    must: ["nueve tinajas", "tres senderos", "ningún cuerpo", "sin cruces", "profundidad física"],
  }),
  "botijuela_ulepala__object_sheet": simple({
    title: "Botijuela del cementerio · recipiente individual",
    focus: "Exactamente UNA botijuela física, pequeña, de barro cocido, con cuello corto, cuerpo redondeado, UNA asa discreta y desgaste mate. Mostrar sólo la vista canónica tres cuartos del único recipiente: no rotaciones, duplicados ni segunda vasija. Sin mano, contenido, inscripción o restos.",
    scene: "Suelo arena full bleed con objeto cercano, sombra lateral y tinajas desenfocadas al fondo.",
    must: ["una botijuela", "cuello, cuerpo y asa", "tres lecturas del mismo objeto", "sin texto", "sin restos"],
  }),
  "asno_enjaezado_ulepala__identity_sheet": simple({
    title: "Asno enjaezado · montura de la dama rica",
    focus: "Un solo asno adulto completo gris cálido con anjalma, silla, manta lisa granate y correajes múltiples pero sin patrones, metales lujosos o insignias. Cuatro patas visibles; sin jinete o provisiones.",
    scene: "Camino junto al cementerio, asno medio y bruma lejana; seis capas full bleed.",
    must: ["un asno", "enjaezado abundante pero liso", "cuatro patas", "sin persona", "sin símbolos"],
  }),
  "avios_jepira_ulepala__object_sheet": simple({
    title: "Avíos hacia Jepira · provisiones no gráficas",
    focus: "Conjunto de una vasija cerrada de Uujolü, un recipiente pequeño de leche cuajada, dos paquetes de hoja y fibra con tulüjashi cocido no visible y una bolsa lisa. Exactamente cinco piezas, todas apoyadas sin interacción; sin mano, brazo, persona, animal, carne expuesta, sangre, cuchillo o receta.",
    scene: "Suelo nocturno full bleed junto a una silla desenfocada; piezas en distintas profundidades.",
    must: ["cinco piezas", "dos recipientes", "dos paquetes", "una bolsa", "sin contenido gráfico"],
  }),
  "caballo_blanco_nube_ulepala__identity_sheet": simple({
    title: "Corcel blanco-nube · identidad íntegra",
    focus: "Un caballo blanco adulto completo, anatomía realista de papel, crin gris perla, silla oscura y aperos lisos. Cuatro patas y cabeza visibles, sin jinete, alas, cuerno, halo o polvo mágico.",
    scene: "Orilla nocturna con mar mate al fondo; caballo medio y piedras cercanas, full bleed.",
    must: ["un caballo blanco", "silla oscura", "cuatro patas", "sin persona", "sin fantasía ecuestre"],
  }),
  "caballo_blanco_nube_ulepala__state_sheet": simple({
    title: "Corcel blanco-nube · caballo, pliegues y polvo",
    focus: "Tres estados del MISMO caballo sin paneles y sin observadores: completo y ensillado; forma intermedia donde las capas blancas se separan como hojas de papel; nube baja de polvo blanco y gris con cuatro huellas que terminan. CERO personas, jinetes, espectadores o siluetas; ninguna explosión, luz o caballo duplicado.",
    scene: "Orilla curva desde roca cercana hasta mar profundo; tres distancias físicas.",
    must: ["tres estados", "un solo caballo origen", "transición por capas", "cuatro huellas", "sin efectos digitales"],
  }),
  "aparejos_caballo_nube_ulepala__object_sheet": simple({
    title: "Aparejos del corcel-nube · piezas transportables",
    focus: "Exactamente una silla oscura, una manta lisa granate, dos correas, una cabezada y una bolsa de enseres, seis piezas totales ordenadas como carga desmontada. Sin caballo, persona, patrón o metal brillante.",
    scene: "Suelo rocoso húmedo full bleed antes de la caverna; sombras reales entre piezas.",
    must: ["seis piezas", "una silla", "una manta", "dos correas", "una cabezada", "una bolsa"],
  }),
  "caverna_submarina_ulepala__spatial_model": simple({
    title: "Caverna fría bajo el mar · paso físico",
    focus: "Túnel natural estrecho de roca-papel húmeda con entrada marina atrás, goteos, suelo irregular y una salida tenue muy lejana. Nueve capas de roca se intercalan creando frío y oclusión; ninguna persona, portal, luz mágica o criatura.",
    scene: "Vista 16:9 a ras de suelo desde interior profundo, full bleed sin borde de maqueta.",
    must: ["entrada marina", "salida lejana", "goteos", "nueve estratos", "sin portal"],
  }),
  "mansiones_jepira_ulepala__spatial_model": simple({
    title: "Mansiones y colinas azules de Jepira",
    focus: "Paisaje parcial con colinas azul mate, tres viviendas bajas de papel, senderos blancos, terrazas de reunión y chinchorros como líneas de fibra dentro de sombra. Sin fantasmas, palacios, nubes celestiales o arquitectura europea.",
    scene: "Panorámica 16:9 desde costa oscura a colinas profundas; ocho capas físicas.",
    must: ["tres viviendas", "colinas azules", "senderos", "chinchorros discretos", "sin personas"],
  }),
  "abuela_algodon_ulepala__identity_sheet": simple({
    title: "Abuela del algodón · mayor y trabajadora",
    focus: "Una mujer Wayuu-yolujaa adulta mayor completa, opaca, trenza blanca baja, rostro triangular y manos vacías. Wayuushein azul carbón larga con mangas recogidas una vuelta, pechera arcilla y waireñas oscuras. Sin pala, comida, huso o estética de bruja.",
    scene: "Borde del sembrado de algodón, plantas medias y colinas azules lejanas; seis planos.",
    must: ["una anciana completa", "manta larga", "pechera y waireñas", "trenza blanca", "sin objeto"],
    culture: GRANDMOTHER_CULTURE,
  }),
  "campo_algodon_ulepala__spatial_model": simple({
    title: "Sembrado de algodón de Jepira · trabajo y humedad",
    focus: "Parcela de algodón con exactamente DOCE plantas en hileras irregulares, cápsulas blancas, hierbas en un sector, ramas podadas en otro y pequeñas depresiones de riego alrededor de tallos. Un algodonero mayor da sombra. Sin personas o herramientas.",
    scene: "Vista oblicua 16:9 full bleed, suelo húmedo cercano, plantas medias y colinas azules al fondo.",
    must: ["doce plantas", "hierbas, poda y depresiones", "un árbol mayor", "ninguna persona", "sin cuadrícula moderna"],
  }),
  "pala_algodon_ulepala__object_sheet": simple({
    title: "Pala del algodón · herramienta de trabajo",
    focus: "Exactamente UNA pala física de madera y metal mate, completa, con mango largo, una sola hoja usada y unión visible. Sólo una vista canónica diagonal; la sombra pertenece a esa misma pala. No detalle separado, segunda herramienta, mano, arma o símbolo.",
    scene: "Suelo húmedo full bleed junto a raíces de algodón; objeto en diagonal y sombras de contacto.",
    must: ["una pala", "mango y hoja", "desgaste", "sin persona", "sin uso violento"],
  }),
  "mariposa_blanca_ulepala__identity_sheet": simple({
    title: "Mariposa blanca · entidad aislada del pasaje íntimo",
    focus: "Una sola mariposa blanca completa de alas abiertas, cuerpo gris fino y venación sutil de papel. Vista cercana suspendida por una fibra casi invisible, sin líquido, cuerpo humano, flores sensuales o resplandor.",
    scene: "Aire sobre suelo desértico full bleed con capas de horizonte y sombra pequeña.",
    must: ["una mariposa", "dos alas completas", "cuerpo y antenas", "sin persona", "sin brillo"],
  }),
  "cambio_vision_ulepala__phenomenon_rule": simple({
    title: "Cambio de visión · Jepira se vuelve desierto",
    focus: "Una misma topografía en cuatro profundidades: colina azul y vivienda de papel cerca; capas intermedias giradas de canto; terreno ocre vacío que conserva exactamente las mismas curvas al fondo. La transición ocurre por orientación y color de la materia, no por portal, luz o humo.",
    scene: "Panorámica 16:9 full bleed con eje continuo y ocho estratos físicos.",
    must: ["misma topografía", "azul a ocre", "capas de canto", "desierto final", "sin figura"],
  }),
  "huellas_rebano_juya_ulepala__phenomenon_rule": simple({
    title: "Huellas del rebaño de Juyá · dirección y escala",
    focus: "Cientos de huellas de ganado en papel prensado forman seis corrientes que convergen de sur a norte. Cerca se distinguen pezuñas de vacuno, cabra y caballo; al fondo se vuelven una sola pista hacia pastos verdes. Sin animales, flechas, texto o mapa.",
    scene: "Vista rasante 16:9 desde arena caliente a campiña fresca lejana; nueve profundidades.",
    must: ["seis corrientes", "tres tipos de huella", "convergencia", "pastos lejanos", "sin animales"],
  }),
  "aparicion_juya_ulepala__identity_sheet": simple({
    title: "Juyá antropomorfo · apariencia exacta de Ulépala",
    focus: "Una sola figura masculina sobrenatural completa: alta, fuerte, gruesa, vientre grande, rostro de asimetría noble y cabello blanco abundante hasta los hombros. Gran vestimenta gris perla amplia hasta pantorrillas con dos solapas grana, capa interior carbón, cobertura inferior completa, sandalias gruesas y una vara flexible de bejuco. Sin corona, halo o rayos dibujados.",
    scene: "Talanquera monumental de la estancia, figura sola en plano medio y nubes densas al fondo; siete capas.",
    must: ["una figura completa", "cabello blanco a hombros", "prenda gris amplia", "solapas grana", "vara y sandalias"],
    culture: JUYA_CULTURE,
    human: true,
  }),
  "servidores_juya_ulepala__group_grammar": simple({
    title: "Servidores de Juyá · ágiles, serios y no uniformados",
    focus: "Exactamente CINCO personas completas de identidad no descrita, todas con capas superiores y coberturas inferiores: dos llevan un banco de madera, dos sostienen extremos de una hamaca enrollada y una señala hacia las talanqueras. Cinco trajes lisos distintos en gris, ocre, verde, carbón y crudo; sin librea colonial o ropa Wayuu nombrada.",
    scene: "Enramada enorme con postes y sombras profundas; figuras a tres distancias, full bleed.",
    must: ["cinco personas", "cinco conjuntos completos", "banco y hamaca", "gestos serios", "sin uniforme"],
    culture: SERVANTS_CULTURE,
    human: true,
  }),
  "estancia_juya_ulepala__spatial_model": simple({
    title: "Estancia de Juyá · campiña descomunal",
    focus: "Paisaje de escala enorme con pastos verdes, tres manantiales, arboledas, cuatro corrales, vallados, talanqueras altas, vivienda suntuosa y gran enramada. Nubes bajas permanentes y aire fresco; sin personas, palacio europeo o símbolos de riqueza.",
    scene: "Panorámica 16:9 oblicua desde talanquera cercana hasta vivienda profunda; diez capas físicas full bleed.",
    must: ["tres manantiales", "cuatro corrales", "talanqueras", "vivienda y enramada", "nubes bajas"],
  }),
  "banco_jabali_ulepala__identity_sheet": simple({
    title: "Banco-jabalí · banco de madera canónico",
    focus: "Un solo banco bajo de madera oscura traducida a papel, cuatro patas, asiento rectangular y veta mate. En el borde frontal una curva de capas insinúa hocico sin convertirse aún en animal. No boa, serpiente, persona o segundo banco.",
    scene: "Suelo de enramada full bleed, banco cercano y postes profundos; sombras físicas.",
    must: ["un banco", "cuatro patas", "asiento rectangular", "insinuación de hocico", "sin serpiente"],
  }),
  "banco_jabali_ulepala__state_sheet": simple({
    title: "Banco-jabalí · objeto, pliegue y animal",
    focus: "Exactamente TRES sujetos en continuidad y sin duplicación: a la izquierda, UN banco rectangular de madera con cuatro patas; al centro, UN híbrido todavía mayormente banco —asiento rectangular completo, dos patas de banco atrás y sólo un hocico y dos patas animales naciendo delante—, que NO puede parecer jabalí terminado; a la derecha, UN jabalí adulto completo con cuatro patas y colmillos discretos. No segundo jabalí, segundo banco, persona sentada, furia o ataque.",
    scene: "Enramada continua con tres distancias, luz lateral y sombras coherentes.",
    must: ["tres estados", "un banco origen", "una transición", "un jabalí completo", "sin violencia"],
  }),
  "chinchorro_gigante_juya__object_sheet": simple({
    title: "Chinchorro gigante de Juyá · escala sin patrón",
    focus: "Un solo chinchorro enorme de fibra gris verde, suspendido entre dos postes, con tejido liso y ancho suficiente para ocupar casi toda la imagen. Una figura humana de papel totalmente neutra y sin identidad aparece sólo como silueta mínima de escala junto al suelo, no acostada. Sin kanas o texto.",
    scene: "Interior de enramada full bleed con chinchorro cercano, postes medios y vivienda al fondo.",
    must: ["un chinchorro", "dos postes", "tejido liso", "una silueta mínima de escala", "sin persona dentro"],
  }),
  "vara_bejuco_juya__object_sheet": simple({
    title: "Vara de bejuco de Juyá · flexión y sonido material",
    focus: "Exactamente UNA vara física larga de bejuco flexible, curvada, con tres quiebres naturales y superficie fibrosa. Sus tres posiciones anteriores se sugieren únicamente mediante TRES SOMBRAS planas superpuestas en el suelo, nunca mediante varas adicionales. CERO manos, brazos o personas; no segunda vara, rayo dibujado, cetro o runas.",
    scene: "Suelo húmedo oscuro full bleed con vara diagonal y pequeñas marcas de impacto sin chispas.",
    must: ["una vara", "tres quiebres", "tres sombras", "marca en suelo", "sin relámpago gráfico"],
  }),
  "provision_cabrito_juya__object_sheet": simple({
    title: "Provisión de Juyá · diez días sin anatomía gráfica",
    focus: "Exactamente DIEZ paquetes cerrados y contables, organizados en DOS FILAS rectas de CINCO paquetes cada una. Detrás de las filas, y separadas de ellas, hay yuca y batata enteras. No paquete undécimo ni recipiente adicional. Todos reposan solos en el suelo: CERO manos, brazos o personas. Ningún animal, carne expuesta, sangre, órgano, cuchillo o plato contemporáneo.",
    scene: "Suelo de habitación full bleed, paquetes cercanos y raíces al fondo con sombras de contacto.",
    must: ["diez paquetes", "yuca", "batata", "gradación de tamaño", "sin anatomía"],
  }),
  "armas_caceria_juya_ulepala__object_sheet": simple({
    title: "Armas de Juyá · tipología diferenciada, no manual",
    focus: "Un arco Urraichi, cinco flechas Shipi distintas y una honda Junaaya, siete objetos totales. Las puntas se distinguen por hierro, bola de cera, bola con clavo, hueso tipo cabeza de carnero y clavo metálico, pero quedan protegidas con pequeñas fundas de papel. Sin instrucciones, presa, mano o impacto.",
    scene: "Suelo verde gris full bleed, objetos en abanico con sombras y distancia.",
    must: ["siete objetos", "un arco", "cinco flechas", "una honda", "sin escena de caza"],
  }),
  "parruluwa_puercoespines_ulepala__group_grammar": simple({
    title: "Parruluwa-puercoespines · gramática de apariencia juvenil",
    focus: "Exactamente DOCE sujetos en tres franjas inequívocas: delante, SEIS jóvenes completamente vestidos —tres hombres con She'ewe amplias, uno con Kotsü y uno con Molono; tres mujeres con mantolas largas—; al centro, exactamente TRES cactus globosos Parruluwa con espinas; detrás, exactamente TRES puercoespines bajos con púas. CERO ciervos, venados, antílopes, cabras, burros o perros; sin flechas o heridas.",
    scene: "Claro del bosque en tres franjas de profundidad: jóvenes, cactus y animales; full bleed sin paneles.",
    must: ["seis jóvenes", "tres Parruluwa", "tres puercoespines", "She'ewe y mantolas completas", "Kotsü y Molono distribuidos"],
    culture: FOREST_YOUTH_CULTURE,
    human: true,
  }),
  "parruluwa_puercoespines_ulepala__state_sheet": simple({
    title: "Parruluwa-puercoespines · tres estados no violentos",
    focus: "Exactamente SEIS sujetos, no más: DOS jóvenes completamente vestidos a la izquierda; DOS cactus globosos Parruluwa con espinas al centro; DOS puercoespines completos y bajos a la derecha. Las espinas y púas conservan los colores de las mantas. No otros humanos, cactus o animales; CERO ciervos, venados, antílopes o cabras; sin disparo, caída o cadáver.",
    scene: "Sendero curvo con estado humano cercano, vegetal medio y animal profundo; sombras físicas.",
    must: ["dos jóvenes", "dos cactus", "dos puercoespines", "continuidad cromática", "sin violencia"],
    culture: TRANSFORM_CULTURE,
    human: true,
  }),
  "tunas_conejos_ulepala__group_grammar": simple({
    title: "Tunas-conejos · orejas y palas",
    focus: "Exactamente DIEZ sujetos totales organizados como CINCO COLUMNAS visibles: en cada columna hay UNA tuna orejona delante y UN conejo de grandes orejas detrás. Cinco tunas más cinco conejos, sin columna ausente, segunda fila, duplicados o sujetos adicionales. Sin personas, juegos, lianas, flechas o animales heridos.",
    scene: "Salatshi de papel verde gris full bleed con tunas cercanas y conejos profundos.",
    must: ["cinco tunas", "cinco conejos", "cinco parejas visuales", "sin persona", "sin caza"],
  }),
  "tunas_conejos_ulepala__state_sheet": simple({
    title: "Tunas-conejos · transición por plegado",
    focus: "Tres estados de exactamente TRES unidades: tres palas de tuna; tres formas intermedias donde cada pala se dobla como dos orejas; tres conejos completos. Nueve sujetos totales, sin disparo, muerte o repetición de jugadores humanos.",
    scene: "Sendero continuo del salatshi con tres profundidades y luz natural.",
    must: ["tres tunas", "tres transiciones", "tres conejos", "nueve sujetos", "sin humanos"],
  }),
  "majayuras_ahuyamas_ulepala__group_grammar": simple({
    title: "Majayuras-ahuyamas · mantas con solapas verdes",
    focus: "Exactamente CUATRO mujeres Wayuu completas, sentadas y conversando, con Wayuushein largas y amplias en ocre, naranja, arcilla y carbón, cada una con solapas verdes sobre pechera. Detrás, cuatro ahuyamas de tamaños distintos que repiten color y volumen. Sin anatomía sexualizada o violencia.",
    scene: "Lomas y conuco en profundidad, mujeres cercanas y frutos lejanos; full bleed.",
    must: ["cuatro mujeres", "cuatro mantas largas", "solapas verdes", "cuatro ahuyamas", "sin desnudez"],
    culture: PUMPKIN_WOMEN_CULTURE,
    human: true,
  }),
  "majayuras_ahuyamas_ulepala__state_sheet": simple({
    title: "Majayuras-ahuyamas · correspondencia sin lesión",
    focus: "Exactamente SEIS sujetos, no más: DOS mujeres plenamente vestidas y erguidas a la izquierda; DOS formas intermedias al centro hechas por sus mantas cerrándose como costillas vegetales, sin cuerpos atrapados; DOS ahuyamas completas a la derecha con hojas verdes como eco de las solapas. No otras mujeres, transiciones o frutos; sin cuello torcido, grito, herida o cuerpo.",
    scene: "Conuco continuo con mujeres cerca, pliegues medios y frutos al fondo.",
    must: ["dos mujeres", "dos transiciones textiles", "dos ahuyamas", "manta completa", "sin violencia"],
    culture: PUMPKIN_WOMEN_CULTURE,
    human: true,
  }),
  "jovenes_venados_ulepala__group_grammar": simple({
    title: "Jóvenes-venados · elegancia y recelo",
    focus: "Exactamente OCHO sujetos: delante, CUATRO jóvenes masculinos completos con She'ewe amplias y abarcas —dos Tolooma bajos y dos casquetes bajos con pocas plumas cortas—; detrás, exactamente TRES venados esbeltos y UN matacán, entendido como un cérvido pequeño sin cornamenta, nunca jabalí, cerdo, tapir o roedor. Sin arma, disparo o caída.",
    scene: "Aguaje y monte bajo full bleed, jóvenes cercanos y cérvidos profundos; seis capas.",
    must: ["cuatro jóvenes", "cuatro mantas completas", "dos Tolooma y dos casquetes", "tres venados y un matacán", "sin violencia"],
    culture: DEER_YOUTH_CULTURE,
    human: true,
  }),
  "jovenes_venados_ulepala__state_sheet": simple({
    title: "Jóvenes-venados · transición por silueta",
    focus: "Exactamente SEIS sujetos: DOS jóvenes plenamente vestidos con She'ewe a la izquierda; DOS formas intermedias al centro donde tocados se alinean con orejas y mantas con el lomo; a la derecha, UN venado esbelto con cornamenta y UN matacán pequeño sin cornamenta. No otros humanos o animales; el matacán nunca parece jabalí, cerdo, tapir o roedor. Sin flecha, herida o caída.",
    scene: "Sendero de aguaje con tres profundidades físicas y luz lateral.",
    must: ["dos jóvenes", "dos transiciones", "un venado y un matacán", "ropa completa", "sin violencia"],
    culture: DEER_YOUTH_CULTURE,
    human: true,
  }),
  "bosque_salatchi_conuco_ulepala__spatial_model": simple({
    title: "Bosque, salatshi y conuco · cuatro pruebas conectadas",
    focus: "Modelo espacial continuo: bosque tupido a la izquierda, salatshi de tunas al centro, lomas y conuco de ahuyamas a la derecha, aguaje y monte detrás. Senderos conectan los cuatro sin mapa o etiquetas. Parruluwa, tunas y hojas aparecen como vegetación, no animales o personas.",
    scene: "Panorámica 16:9 oblicua full bleed con diez capas y cambios graduales de humedad.",
    must: ["bosque", "salatshi", "conuco", "aguaje", "senderos conectados"],
  }),
  "aprendizajes_juya_ulepala__phenomenon_rule": simple({
    title: "Aprendizajes de Juyá · oficios en continuidad",
    focus: "Cadena material sin persona: huella de caballo lleva a soga de cuero y fibra; soga a bozal y jáquima; jáquima a silla; silla a líneas de canto del taliray; líneas a surcos cultivados y una vasija de miel. Siete estaciones conectadas por la misma fibra, sin texto o infografía.",
    scene: "Sendero 16:9 en espiral suave, cada oficio a una profundidad física distinta, full bleed.",
    must: ["siete estaciones", "una fibra continua", "caballería, tejido, música, cultivo y miel", "sin persona", "sin diagrama"],
  }),
  "taliray_ulepala__object_sheet": simple({
    title: "Taliray de Ulépala · trompa sin decoración inventada",
    focus: "Exactamente UN solo instrumento de viento Taliray o trompa, físico y completo, con cuerpo alargado de madera/fibra oscura, una boquilla sencilla y una abertura final. Sólo vista canónica tres cuartos: no rotaciones, duplicados ni otros instrumentos. Sin músico, mano, notas, texto o símbolos.",
    scene: "Loma calva full bleed al atardecer, instrumento cercano y capas de aire detrás.",
    must: ["un instrumento", "boquilla", "cuerpo y abertura", "tres lecturas", "sin persona"],
  }),
  "amigo_ulepala__identity_sheet": simple({
    title: "Amigo de Ulépala · oyente plenamente vestido",
    focus: "Un hombre Wayuu adulto completo, rostro cuadrado y barba corta. She'ewe ocre amplia sobre Kemiisa carbón, S'ira terracota y abarcas oscuras. Manos abiertas como oyente; sin bebida, arma, Ulépala o segunda figura.",
    scene: "Exterior de reunión nocturna con banco lejano y enramada en sombra; cinco capas.",
    must: ["un hombre", "She'ewe dominante", "Kemiisa y faja", "abarcas", "sin objeto"],
    culture: FRIEND_CULTURE,
  }),
  "mujer_amigo_ulepala__identity_sheet": simple({
    title: "Mujer del amigo · segunda oyente",
    focus: "Una mujer Wayuu adulta completa, rostro redondo y dos trenzas. Wayuushein verde humo larga y con mangas sobre pechera ocre y waireñas carbón. Postura de escucha sentada en un banco bajo, pies visibles y ninguna bebida o pintura.",
    scene: "Otro ángulo de la reunión nocturna, banco cercano y sombra de enramada; cinco capas.",
    must: ["una mujer", "manta larga", "pechera", "waireñas", "dos trenzas"],
    culture: FRIEND_WOMAN_CULTURE,
  }),
  "aparicion_maleiwa_ulepala__identity_sheet": simple({
    title: "Maleiwa Gran Señor · aparición formal completa",
    focus: "Exactamente UNA sola figura masculina completa, de pie y representada una vez, rostro largo y barba negra corta. She'ewe carbón azulada amplia sobre Kemiisa cruda, S'ira grana, abarcas negras y Tolooma bajo en ocre/carbón. CERO caballo, mula, animal o montura dentro de esta ficha; sin corona, armadura, oro, arma o antropofagia visible.",
    scene: "Polvareda lejana ante enramada de Juyá, figura sola y nubes profundas; siete capas.",
    must: ["una figura completa", "She'ewe dominante", "Tolooma bajo", "faja y calzado", "sin rey europeo"],
    culture: MALEIWA_CULTURE,
    human: true,
  }),
  "caballo_maleiwa_ulepala__identity_sheet": simple({
    title: "Caballo blanco de Maleiwa · montura luminosa sin magia",
    focus: "Un caballo blanco adulto completo en carrera detenida, crin gris, bridas amarillo metal mate y silla nacarada traducida a capas crema, azul y rosa muy apagadas. Cuatro patas visibles, sin jinete, alas, cuerno o brillo sobrenatural.",
    scene: "Planicie con polvareda de papel ocre detrás y estancia al fondo; seis profundidades.",
    must: ["un caballo blanco", "bridas amarillas", "silla nacarada por capas", "cuatro patas", "sin persona"],
  }),
  "calabaza_ron_ulepala__object_sheet": simple({
    title: "Calabaza de bebida · objeto, no glorificación",
    focus: "Exactamente DOS objetos físicos: UNA sola calabaza seca ahuecada con UN tapón simple y superficie ocre mate, más UNA pequeña copa vegetal vacía a su lado. No segunda lectura, segunda calabaza, fila de recipientes o líquido visible; ninguna persona, celebración o marca.",
    scene: "Suelo de enramada full bleed con sombras de contacto y manto gris desenfocado.",
    must: ["una calabaza", "un tapón", "una copa vacía", "tres lecturas", "sin consumo"],
  }),
  "fiesta_maleiwa_ulepala__spatial_model": simple({
    title: "Fiesta de Maleiwa · hospitalidad y artes verbales",
    focus: "Gran enramada con seis chinchorros distintos, círculo de danza vacío, dos zonas para músicos, una plataforma baja para cuentistas y mesa de alimentos cubierta. Sin personas, alcohol visible, palacio o escenario moderno.",
    scene: "Panorámica 16:9 nocturna cálida full bleed con enramada cercana y dominio profundo; nueve capas.",
    must: ["seis chinchorros", "círculo de danza", "dos zonas musicales", "plataforma de palabra", "mesa cubierta"],
  }),
  "participantes_fiesta_maleiwa__group_grammar": simple({
    title: "Participantes de la fiesta · seis roles, seis conjuntos",
    focus: "Exactamente SEIS personas Wayuu completas en primer plano y CERO personas al fondo: TRES mujeres —dos adultas con Wayuushein largas lisas y una cuentista mayor con manta oscura lisa— y TRES hombres —uno con She'ewe y Tolooma que sostiene UN Taliray largo, uno con Kemiisa/Kotin y manos vacías, y un músico con capa completa lisa que sostiene UN tambor—. Exactamente DOS instrumentos totales: UN Taliray y UN tambor; CERO maracas, flautas, campanas u otros instrumentos. El círculo de danza detrás está TOTALMENTE VACÍO. Todas las telas son de colores sólidos: CERO flores, bordados, bandas geométricas, kanas o patrones; sin uniformes, contacto sexual o bebida.",
    scene: "Enramada de fiesta con figuras en semicírculo y círculo de danza detrás; siete profundidades.",
    must: ["seis personas", "seis conjuntos completos", "dos instrumentos", "roles distintos", "sin uniforme"],
    culture: PARTY_CULTURE,
  }),
  "anciana_amiga_ulepala__identity_sheet": simple({
    title: "Anciana amiga · guía humana, no araña",
    focus: "Una mujer Wayuu anciana completa, rostro pequeño, nariz curva y una sola trenza blanca larga. Wayuushein carbón violáceo larga sobre pechera arena y waireñas oscuras. Manos vacías, postura firme; ningún hilo, ovillo, patas, telaraña, huso o estética de bruja.",
    scene: "Borde de la estancia con camino hacia sombras al fondo; seis capas full bleed.",
    must: ["una anciana", "manta larga", "una trenza blanca", "sin rasgo arácnido", "sin objeto"],
    culture: OLD_WOMAN_CULTURE,
  }),
  "riquezas_oferta_maleiwa__object_sheet": simple({
    title: "Riquezas de Maleiwa · bienes bajo un manto",
    focus: "Un manto carbón parcialmente levantado revela exactamente una vasija dorada mate, tres cornalinas, dos prendedores, dos pares de zarcillos, tres collares, dos medallones, cuatro sortijas, dos brazaletes y dos cinturones lisos. Ningún kana, persona, arma o animal.",
    scene: "Suelo nocturno full bleed, manto cercano y objetos en tres profundidades con sombras reales.",
    must: ["un manto", "inventario exacto de bienes", "metales mates", "sin patrones", "sin persona"],
  }),
  "riquezas_oferta_maleiwa__state_sheet": simple({
    title: "Riquezas-estrellas · dispersión material",
    focus: "Tres estados sin paneles: bienes bajo el manto; piezas levantadas por viento y separadas por fibras; cielo nocturno donde las mismas formas pequeñas se vuelven constelaciones dispersas sin líneas que las unan. No manos, personas, explosión o galaxia digital.",
    scene: "Curva desde suelo a cielo en ocho capas físicas full bleed.",
    must: ["tres estados", "mismas formas", "viento por fibras", "estrellas sin líneas", "sin figura"],
  }),
  "mulas_mohinas_escape_ulepala__group_grammar": simple({
    title: "Dos mulas mohínas · monturas del regreso",
    focus: "Exactamente DOS mulas oscuras completas, una carbón y otra pardo ceniza, cada una ensillada de forma distinta pero sobria. Cuatro patas visibles por animal, orejas largas, sin jinetes, cargas o duplicados.",
    scene: "Entrada a ruta de sombras, mulas en diagonal y planicie detrás; seis capas.",
    must: ["dos mulas", "dos sillas distintas", "ocho patas visibles", "sin persona", "sin adornos"],
  }),
  "lienzo_ovillo_escape_ulepala__object_sheet": simple({
    title: "Lienzo y ovillo del regreso · guía no arácnida",
    focus: "Exactamente un lienzo rectangular arena doblado como venda, un ovillo blanco mate y una sola hebra continua que sale de él. Tres objetos visuales: lienzo, ovillo y hebra; sin araña, telaraña, portal, manos o símbolos.",
    scene: "Suelo oscuro full bleed, lienzo cerca, ovillo medio y hebra perdiéndose al fondo.",
    must: ["un lienzo", "un ovillo", "una hebra", "sin araña", "sin texto"],
  }),
  "ruta_sombras_regreso_ulepala__spatial_model": simple({
    title: "Ruta de regreso · sombras, mar y gargantas de tierra",
    focus: "Camino continuo en capas: sombra terrestre cercana, profundidad bajo el mar con techo de agua mate, tinieblas superiores como estratos verticales y garganta de tierra que abre a campos iluminados. Sin personas, monturas, portal o mapa.",
    scene: "Panorámica 16:9 oblicua con diez profundidades físicas y mundo full bleed.",
    must: ["cuatro zonas", "continuidad de camino", "techo de agua", "garganta terrestre", "campos finales"],
  }),
  "comunidad_interroga_ulepala__group_grammar": simple({
    title: "Comunidad que interroga · diversidad sin asedio visual",
    focus: "Exactamente OCHO personas Wayuu completas y contables, distribuidas CUATRO a la izquierda y CUATRO a la derecha: TRES mujeres adultas con mantas largas lisas; TRES hombres adultos claramente distintos con Kemiisa, Kotin o She'ewe lisos; UNA niña con vestido largo liso; UN niño con camisa y cobertura inferior completa. No omitir al tercer hombre y no añadir novena persona. Todos miran hacia un espacio vacío central donde Ulépala no aparece. CERO flores, bordados, bandas geométricas, kanas o patrones; gestos de pregunta sobrios, sin señalamiento agresivo.",
    scene: "Patio exterior y enramada, figuras escalonadas en ocho profundidades, full bleed.",
    must: ["ocho personas", "cuatro edades", "ocho conjuntos completos", "centro vacío", "sin uniforme"],
    culture: COMMUNITY_CULTURE,
  }),
  "cardenal_ulepala__identity_sheet": simple({
    title: "Iisho, cardenal rojo · ave íntegra",
    focus: "Un solo cardenal rojo adulto completo posado de perfil sobre rama de trupillo. Plumaje rojo mate estratificado, máscara facial carbón discreta, pico corto y dos patas. Sin corazón, cuerpo humano, sangre, herida o halo.",
    scene: "Rama cercana full bleed, cielo de lluvia al fondo y hojas pequeñas en tres distancias.",
    must: ["un ave", "plumaje rojo", "máscara carbón", "dos patas", "sin anatomía humana"],
  }),
  "cardenal_ulepala__state_sheet": simple({
    title: "Cardenal y lluvia · anuncio sin extracción",
    focus: "Tres estados del MISMO ave: cardenal rojo posado; cardenal con pico abierto y tres ondas hechas por pliegues de papel, no gráficos; nube de lluvia aproximándose mientras el ave permanece posada en otra profundidad. Ningún corazón, cuerpo, flecha o sangre.",
    scene: "Rama y horizonte continuos con tres distancias físicas, full bleed.",
    must: ["mismo cardenal", "tres ondas de papel", "nube de lluvia", "ave íntegra", "sin violencia"],
  }),
  "secreto_ulepala__phenomenon_rule": simple({
    title: "Secreto de dos ciclos de lluvia · tiempo material",
    focus: "Un sendero circular pasa por dos estaciones de lluvia claramente separadas por suelo seco y vegetación renovada. Una hebra blanca permanece intacta durante el primer ciclo y empieza a soltarse antes de completar el segundo. Sin reloj, calendario, texto, personas o castigo.",
    scene: "Vista 16:9 oblicua full bleed con ocho capas y dos frentes de lluvia.",
    must: ["dos ciclos de lluvia", "sendero circular", "hebra blanca", "estación seca intermedia", "sin persona"],
  }),
};

export const WAYUU_ULEPALA_MODEL_IDS_V3 = Object.freeze(
  Object.keys(WAYUU_ULEPALA_DIRECTIONS_V3),
);

export default WAYUU_ULEPALA_DIRECTIONS_V3;
