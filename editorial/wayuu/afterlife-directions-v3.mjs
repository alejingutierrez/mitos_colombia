/**
 * Direcciones especificas del lote 18 · El viaje del mas alla.
 *
 * La version de Perrin se mantiene separada de Ulepala. La magia no se
 * traduce como fantasma europeo, portal luminoso o cuerpo transparente:
 * aparece en continuidad material, diferencias de sombra, escala, gravedad,
 * percepcion y profundidad fisica. Los pasajes sexuales y violentos quedan
 * documentados pero fuera de imagen.
 */

const MYTH_SOURCES = [
  "finol_viaje_mas_alla_perrin_2007",
  "perrin_ganado_pensamiento_guajiro_1987",
];

const WAYUU_CLOTHING_SOURCES = [
  ...MYTH_SOURCES,
  "paz_ipuana_aleya_tomo_ii_2016",
  "mincultura_caracterizacion_wayuu",
  "artesanias_tejeduria_wayuu_2016",
  "cinep_lo_que_somos_wayuu_2015",
];

const YONNA_SOURCES = [
  "finol_viaje_mas_alla_perrin_2007",
  "mincultura_caracterizacion_wayuu",
  "cinep_lo_que_somos_wayuu_2015",
  "maguare_cucunuba_cartilla_wayuu",
  "paz_ipuana_aleya_tomo_ii_2016",
];

const COMMON_AVOID = [
  "European ghost, translucent white spirit, sheet ghost, halo, angel, demon, skeleton, zombie, horror makeup or Christian afterlife iconography",
  "glowing portal, neon aura, magic ring, runes, fantasy particles, digital smoke, laser light or supernatural VFX",
  "nudity, sexual pose, voyeurism, penetration, exposed genitals, erotic emphasis, humiliation or intimate contact",
  "blood, wound, corpse detail, gore, dismemberment, weapon impact, hunt in progress, killing or body being eaten",
  "invented kana, clan mark, tattoo, ceremonial symbol, amulet, altar, cross, church, grave marker or sacred map",
  "generic pan-indigenous costume, feather war bonnet, Amazonian body paint, Andean poncho, Mexican costume or cowboy stereotype",
  "text, label, title, caption, numbers, arrows, diagram, comic panel, watermark or signature",
  "flat collage, 2D illustration, smooth CGI, plastic figurine, visible cardboard edge, base, pedestal, table, studio or exterior of the diorama",
];

function dimension(decision, evidence, rationale, specification) {
  return { decision, evidence, rationale, ...(specification ? { specification } : {}) };
}

function visualContract(dominant, front, side, antiCollapse) {
  return {
    dominant_silhouette: dominant,
    front_read: front,
    side_or_back_read: side,
    anti_collapse_rule: antiCollapse,
  };
}

function wayuuPersonCulture({
  personScope,
  narrativeMoment,
  activityContext,
  occasionContext,
  profile,
  chosenLabel,
  alternativeLabel,
  specification,
  layers,
  wardrobeRefs,
  attire,
  footwear,
  accessories,
  facePaint = null,
  continuity,
  contract,
  sources = WAYUU_CLOTHING_SOURCES,
}) {
  return {
    cultural_scope: "wayuu",
    person_scope: personScope,
    temporal_register: "mythic_indeterminate",
    time_basis: "la version fue registrada en el siglo XX pero no fecha los sucesos; las prendas no explicitas son una traduccion editorial reversible tomada de repertorios Wayuu documentados y no una reconstruccion prehispanica",
    narrative_moment: narrativeMoment,
    activity_context: activityContext,
    occasion_context: occasionContext,
    considered_ensembles: [
      {
        id: "complete_contextual_ensemble",
        label: chosenLabel,
        fit: "elegido porque produce una silueta completa, funcional y culturalmente situada",
        rationale: "responde a actividad y momento sin reducir la identidad a una prenda inferior ni acumular ornamentos",
        source_refs: sources,
      },
      {
        id: "complete_alternative_ensemble",
        label: alternativeLabel,
        fit: "plausible pero no elegido para conservar continuidad individual o evitar confundir ocasiones",
        rationale: "el repertorio lo documenta, aunque su silueta o funcion encaja peor con este momento narrativo",
        source_refs: sources,
      },
    ],
    chosen_ensemble: {
      id: "complete_contextual_ensemble",
      rationale: "hace visible una persona Wayuu completa y diferenciada sin inventar rango, clan o ceremonia",
      specification,
      layers,
    },
    attire: dimension("include_contextual", "editorial_reversible", "la fuente fija identidad y accion pero no siempre el corte completo; se escoge un conjunto Wayuu documentado que cubre y articula el cuerpo", attire),
    footwear: dimension("include_contextual", "institutional_general", "la movilidad del episodio y el suelo exigen calzado legible sin atribuir fabricante o fecha exactos", footwear),
    accessories: dimension("include_contextual", "source_specific", "solo se mantienen accesorios nombrados o funcionales y se omiten joyas, mochilas y emblemas no sustentados", accessories),
    face_paint: facePaint || dimension("omit_contextually", "source_specific", "el momento no registra yonna, visita, proteccion solar o ritual con motivo exacto; no se agrega pintura por decoracion"),
    wardrobe_profile: profile,
    wardrobe_refs: wardrobeRefs,
    wardrobe_visual_contract: contract,
    source_refs: sources,
    continuity_markers: continuity,
  };
}

function unresolvedPersonCulture({
  culturalScope,
  personScope,
  profile = "unspecified",
  narrativeMoment,
  activityContext,
  occasionContext = "mixed_narrative",
  chosenLabel,
  alternativeLabel,
  specification,
  layers,
  components,
  attire,
  footwear,
  accessories,
  continuity,
  contract,
  sources = MYTH_SOURCES,
}) {
  return {
    cultural_scope: culturalScope,
    person_scope: personScope,
    temporal_register: "mythic_indeterminate",
    time_basis: "la fuente nombra una relacion cultural o apariencia pero no autoriza fijar etnia, epoca, corte completo, fisonomia o motivos; el conjunto es editorial, reversible, completo y deliberadamente no Wayuu",
    narrative_moment: narrativeMoment,
    activity_context: activityContext,
    occasion_context: occasionContext,
    considered_ensembles: [
      {
        id: "complete_reversible_non_wayuu",
        label: chosenLabel,
        fit: "elegido para dar cobertura y funcion sin transferir el repertorio Wayuu",
        rationale: "conserva los elementos explicitos y trata el resto como decision editorial reversible",
        source_refs: sources,
      },
      {
        id: "complete_reversible_alternative",
        label: alternativeLabel,
        fit: "posible pero no elegido por menor continuidad o peor lectura de la transformacion",
        rationale: "tambien evita desnudez y estereotipo, aunque produce una silueta menos diferenciable",
        source_refs: sources,
      },
    ],
    chosen_ensemble: {
      id: "complete_reversible_non_wayuu",
      rationale: "protege la ambiguedad cultural sin convertirla en desnudez, pobreza o disfraz panindigena",
      specification,
      layers,
    },
    attire: dimension("include_contextual", "editorial_reversible", "la fuente no describe un conjunto completo y el proceso prohibe resolver la duda mediante desnudez", attire),
    footwear: dimension("include_contextual", "editorial_reversible", "el suelo y la accion requieren calzado visible sin reclamar una tipologia etnografica", footwear),
    accessories: dimension("include_contextual", "source_specific", "se conservan solo los accesorios que la fuente nombra o una ausencia explicita", accessories),
    face_paint: dimension("omit_contextually", "source_specific", "no se documentan pintura, funcion, ocasion o motivo exactos para esta identidad"),
    wardrobe_profile: profile,
    wardrobe_components: components,
    wardrobe_visual_contract: contract,
    source_refs: sources,
    continuity_markers: continuity,
  };
}

const VIUDO_CULTURE = wayuuPersonCulture({
  personScope: "viudo Wayuu adulto de la version Perrin, vivo durante el viaje y envejecido al regreso",
  narrativeMoment: "duelo, viaje a Jepira, aprendizaje en Juyá y retorno silencioso como una sola continuidad individual",
  activityContext: "caminar durante una luna, cruzar costa y mar, observar, aprender y volver sin equipaje añadido",
  occasionContext: "travel",
  profile: "male",
  chosenLabel: "Kotin amplio arcilla sobre base masculina, S'ira lisa, waireñas y Wom bajo",
  alternativeLabel: "Kemiisa cruda con Asheinpalajanaa amplia, S'ira y waireñas",
  specification: "Kotin arcilla profunda como manta masculina amplia hasta bajo las rodillas, base carbón secundaria, S'ira terracota lisa, waireñas oscuras y Wom bajo sin patrón",
  layers: ["base masculina carbón secundaria", "S'ira terracota lisa", "Kotin arcilla amplio y dominante", "waireñas oscuras", "Wom bajo de fibra lisa"],
  wardrobeRefs: ["kotin_male_manta", "wusi_aichee", "sira_kumusu_aamuushi", "wairenas", "wom_woma_hat"],
  attire: "Kotin arcilla amplio, liviano y dominante, con cobertura desde hombros hasta bajo las rodillas; base carbón y faja terracota solo como estructura secundaria",
  footwear: "waireñas oscuras completas y sin borlas",
  accessories: "Wom bajo liso durante el exterior; manos vacias, sin arma, bolsa, collar o amuleto en la ficha de identidad",
  continuity: ["Kotin arcilla de borde inferior asimetrico", "S'ira terracota lisa", "Wom bajo", "rostro alargado, nariz ancha y cabello negro ondulado", "waireñas oscuras"],
  contract: visualContract("Kotin arcilla amplio desde hombros a rodillas", "el frente muestra dos planos largos del Kotin separados de faja y base", "perfil y espalda conservan volumen continuo de manta, no falda corta", "si el Kotin desaparece o queda como tira de cintura, la imagen se rechaza"),
});

const ESPOSA_CULTURE = wayuuPersonCulture({
  personScope: "esposa Wayuu adulta convertida en yolujaa, con forma humana, viajera y danzante con agencia propia",
  narrativeMoment: "aparicion en sueño, recorrido sobre el mar, vida en Jepira y cambio a vestido rojo para la yonna",
  activityContext: "caminar, cargar al viudo, descansar y bailar sin erotizacion ni aspecto de fantasma",
  occasionContext: "mixed_narrative",
  profile: "female",
  chosenLabel: "Wayuushein larga azul noche para viaje y otra roja para yonna, sobre pechera y waireñas",
  alternativeLabel: "Wayuushein arcilla unica para todos los estados, sobre pechera y waireñas",
  specification: "manta Wayuushein azul noche, larga, amplia y con mangas sobre pechera cruda; en el estado de yonna cambia a manta roja amplia con ko'usu rojo y pintura de mashuka limitada a un circulo sobrio en cada mejilla",
  layers: ["pechera cruda interior", "Wayuushein azul noche larga para sueño y viaje", "Wayuushein roja larga y ko'usu rojo solo para yonna", "waireñas arcilla"],
  wardrobeRefs: ["wayuushein_manta", "pechera_female_underlayer", "wairenas"],
  attire: "manta femenina larga hasta tobillos, holgada y con mangas; azul noche en sueño y viaje, roja en la yonna, siempre cerrada sobre pechera",
  footwear: "waireñas arcilla sin borlas sobredimensionadas",
  accessories: "ko'usu rojo amplio solo durante la yonna; sin joyas, corona, mochila, amuleto o velo funerario",
  facePaint: {
    ...dimension("include_documented", "source_specific", "la fuente sitúa una yonna y la investigacion documenta pintura femenina circular con mashuka; solo aparece en el estado danzante y no se convierte en marca clanil", "un unico circulo rojo terroso, ancho y sencillo sobre cada mejilla en la manifestacion de yonna; rostro completamente limpio en sueño y viaje"),
    motif_policy: "source_specific_only",
  },
  continuity: ["rostro ovalado de papel siena, pómulos altos y trenza negra doble", "pechera cruda", "manta larga de mangas amplias", "waireñas arcilla", "ninguna transparencia, halo o palidez espectral"],
  contract: visualContract("manta femenina larga y amplia de hombros a tobillos", "el frente conserva cuello, mangas y volumen completo sobre pechera", "perfil y espalda muestran caída larga continua y trenzas separadas", "si la manta se vuelve vestido ceñido, falda, túnica sin mangas o deja cuerpo expuesto, la imagen se rechaza"),
});

const MOTHER_CULTURE = wayuuPersonCulture({
  personScope: "madre Wayuu adulta mayor del viudo, personaje distinto de la esposa y la hermana",
  narrativeMoment: "recepcion del hijo envejecido cerca de la casa, antes de cualquier relato",
  activityContext: "reconocer, contener el llanto y permanecer de pie en un encuentro familiar",
  occasionContext: "mixed_narrative",
  profile: "female",
  chosenLabel: "Wayuushein ocre larga sobre pechera carbón, waireñas y Wom bajo",
  alternativeLabel: "Wayuushein verde trupillo sobre pechera cruda y waireñas, sin sombrero",
  specification: "Wayuushein ocre polvo larga y lisa con mangas sobre pechera carbón, waireñas arcilla y Wom bajo de fibra natural",
  layers: ["pechera carbón", "Wayuushein ocre larga", "waireñas arcilla", "Wom bajo"],
  wardrobeRefs: ["wayuushein_manta", "pechera_female_underlayer", "wairenas", "wom_woma_hat"],
  attire: "manta ocre polvo amplia, lisa, larga y con mangas sobre pechera carbón opaca",
  footwear: "waireñas arcilla sin motivos",
  accessories: "Wom bajo liso y ninguna joya, mochila, amuleto o objeto de duelo",
  continuity: ["manta ocre polvo", "pechera carbón", "Wom bajo", "cabello gris en una trenza gruesa", "rostro ancho con líneas de edad de papel"],
  contract: visualContract("manta ocre larga y Wom bajo", "frente cubierto por manta amplia sobre pechera", "espalda conserva caída completa y una trenza gris", "si la manta colapsa en falda o se sustituye por ropa neutra, la imagen se rechaza"),
});

const SISTER_CULTURE = wayuuPersonCulture({
  personScope: "hermana Wayuu adulta del viudo, personaje distinto de la madre y la esposa",
  narrativeMoment: "encuentro del regreso, emocion contenida y advertencia de no llorar",
  activityContext: "reconocer al hermano y permanecer junto a la madre sin escena funeraria",
  occasionContext: "mixed_narrative",
  profile: "female",
  chosenLabel: "Wayuushein verde trupillo larga sobre pechera arena y waireñas",
  alternativeLabel: "Wayuushein azul humo larga sobre pechera cruda, waireñas y Wom",
  specification: "Wayuushein verde trupillo larga, lisa y con mangas sobre pechera arena, waireñas oscuras y cabello en dos trenzas sin sombrero",
  layers: ["pechera arena", "Wayuushein verde trupillo larga", "waireñas oscuras", "dos trenzas negras"],
  wardrobeRefs: ["wayuushein_manta", "pechera_female_underlayer", "wairenas"],
  attire: "manta verde trupillo amplia y larga sobre pechera arena, sin bordado, abertura sensual o patrón",
  footwear: "waireñas oscuras sin borlas",
  accessories: "sin sombrero, collar, mochila, pañuelo, símbolo o objeto de duelo",
  continuity: ["manta verde trupillo", "pechera arena", "dos trenzas negras", "rostro redondo y cejas marcadas", "waireñas oscuras"],
  contract: visualContract("manta verde larga y dos trenzas", "frente cubierto por volumen amplio y mangas legibles", "perfil y espalda conservan largo hasta tobillos y dos trenzas", "si la manta se vuelve falda, vestido ceñido o desaparece, la imagen se rechaza"),
});

const SPIDER_CULTURE = wayuuPersonCulture({
  personScope: "Alekeru en su manifestacion de anciana de cabellos blancos, habitante del dominio de Juya y guia del regreso",
  narrativeMoment: "advierte al viajero y luego produce hilo para descenderlo, antes de cualquier fusion editorial con Waleker",
  activityContext: "conversar, hilar y cargar al viajero en una transformacion no violenta",
  occasionContext: "mixed_narrative",
  profile: "female",
  chosenLabel: "Wayuushein carbón violáceo larga sobre pechera arcilla y waireñas",
  alternativeLabel: "Wayuushein arena larga sobre pechera carbón y Wom bajo",
  specification: "Wayuushein carbón violáceo larga y lisa, pechera arcilla, waireñas oscuras y abundante cabello blanco recogido en dos trenzas; ninguna estética de bruja",
  layers: ["pechera arcilla", "Wayuushein carbón violáceo larga", "waireñas oscuras", "dos trenzas blancas gruesas"],
  wardrobeRefs: ["wayuushein_manta", "pechera_female_underlayer", "wairenas"],
  attire: "manta carbón violáceo amplia, larga y con mangas sobre pechera arcilla",
  footwear: "waireñas oscuras",
  accessories: "ningún bastón, huso, sombrero de bruja, collar, amuleto o joya; el hilo tiene ficha propia",
  continuity: ["manta carbón violáceo", "pechera arcilla", "dos trenzas blancas", "rostro pequeño de papel ocre con nariz curva", "seis puntos de pliegue blanco que luego corresponden a patas de papel"],
  contract: visualContract("manta larga carbón violáceo y dos trenzas blancas", "frente cubierto por manta amplia sobre pechera", "perfil y espalda muestran largo total y cabello blanco", "si aparece harapienta, desnuda, con vestido europeo o como bruja, la imagen se rechaza"),
});

const KUSINA_CORZO_CULTURE = unresolvedPersonCulture({
  culturalScope: "kusina_identity_unresolved",
  personScope: "figura llamada Kusina que porta una flecha y corona de corteza de cuji con plumas de gallo; no es el joven del relato Kosina",
  profile: "male",
  narrativeMoment: "apariencia humana previa a que el visitante aprenda que corresponde a un corzo",
  activityContext: "estar de pie y conversar; la caza ocurre fuera de imagen",
  chosenLabel: "camisa cruda completa, pantalón ocre holgado, faja lisa, sandalias y la corona explicitamente descrita",
  alternativeLabel: "túnica arcilla de manga larga, pantalón carbón y sandalias con la misma corona",
  specification: "camisa cruda de manga larga, pantalón ocre completo, faja carbón lisa, sandalias cerradas y corona baja de corteza de cuji con pocas plumas superpuestas de gallo; sostiene una sola flecha sin arco",
  layers: ["camisa cruda de manga larga", "pantalón ocre completo", "faja carbón lisa", "sandalias simples", "corona de cuji y plumas de gallo"],
  components: ["camisa completa", "pantalón completo", "faja lisa", "sandalias", "corona de corteza"],
  attire: "camisa cruda y pantalón ocre completos, ambos lisos y holgados, ceñidos por faja carbón sin patrón",
  footwear: "sandalias simples de papel oscuro",
  accessories: "corona baja de corteza de cuji con plumas cortas de gallo superpuestas y una sola flecha; ningún arco, carcaj o insignia",
  continuity: ["camisa cruda", "pantalón ocre", "faja carbón", "corona baja de cuji con plumas cortas", "una flecha", "rostro adulto anguloso"],
  contract: visualContract("camisa completa, pantalón y corona baja", "frente muestra torso cubierto, faja secundaria y piernas cubiertas", "perfil conserva mangas, pantalón y corona, no silueta desnuda", "si queda solo una prenda inferior, un tocado panindigena o marcadores Wayuu, la imagen se rechaza"),
});

const RICH_DEER_CULTURE = unresolvedPersonCulture({
  culturalScope: "regional_indigenous_unresolved",
  personScope: "figura indigena rica del dominio de Juya; la fuente fija cinturon rojo, traje y sombrero pero no pueblo, clan ni corte",
  profile: "male",
  narrativeMoment: "apariencia humana previa a que el visitante aprenda que corresponde a un venado",
  activityContext: "estar de pie y conversar en el camino; ninguna violencia visible",
  chosenLabel: "sobretúnica ocre con mangas sobre pantalón carbón, cinturón rojo y sombrero tejido liso",
  alternativeLabel: "chaqueta larga azul humo, camisa cruda, pantalón ocre, cinturón rojo y sombrero liso",
  specification: "sobretúnica ocre de manga larga hasta medio muslo, camisa cruda interior, pantalón carbón completo, cinturón rojo ancho y liso, zapatos bajos y sombrero tejido de ala media",
  layers: ["camisa cruda interior", "sobretúnica ocre de manga larga", "pantalón carbón completo", "cinturón rojo", "zapatos bajos", "sombrero de ala media"],
  components: ["sobretúnica de manga larga", "camisa interior", "pantalón completo", "cinturón rojo", "calzado", "sombrero"],
  attire: "traje completo interpretado como sobretúnica ocre con mangas, camisa interior y pantalón carbón, sin convertirlo en traje de negocios europeo",
  footwear: "zapatos bajos oscuros",
  accessories: "cinturón rojo explícito y sombrero tejido liso; sin joyas, bastón, bolsa, arma o emblema",
  continuity: ["sobretúnica ocre", "pantalón carbón", "cinturón rojo", "sombrero de ala media", "rostro adulto ancho y barba corta"],
  contract: visualContract("sobretúnica ocre, cinturón rojo y sombrero", "frente cubierto por tres capas de torso y pantalón completo", "perfil conserva largo de la sobretúnica y ala del sombrero", "si el traje se vuelve esmoquin, uniforme colonial, ropa Wayuu o cuerpo semidesnudo, la imagen se rechaza"),
});

function wayuuCollectiveCulture({ yonna = false } = {}) {
  const sources = yonna ? YONNA_SOURCES : WAYUU_CLOTHING_SOURCES;
  const occasion = yonna ? "yonna_festive" : "visit_or_exchange";
  const femaleRefs = ["wayuushein_manta", "pechera_female_underlayer", "wairenas"];
  const maleRefs = yonna
    ? ["asheinpalajanaa_male_wrap", "sira_kumusu_aamuushi", "karatse_yonna_headpiece"]
    : ["she_etebe_sheewe", "sira_kumusu_aamuushi", "wairenas"];
  return {
    cultural_scope: "wayuu",
    person_scope: yonna ? "grupo mixto de yolujaa que participa en una yonna vestido de rojo" : "grupo de parientes Wayuu muertos que recibe al viajero con relaciones familiares distintas",
    temporal_register: "mythic_indeterminate",
    time_basis: "la fuente fija identidad Wayuu y, para la yonna, color rojo y ocasion; las variaciones de conjunto provienen de repertorios documentados y permanecen reversibles",
    narrative_moment: yonna ? "baile colectivo en Jepira antes de los pasajes sexuales excluidos" : "saludo diurno al unico visitante vivo en Jepira",
    activity_context: yonna ? "bailar y observar alrededor del kasha sin contacto sexual" : "saludar, conversar y permanecer en grupo familiar",
    occasion_context: occasion,
    considered_ensembles: [
      { id: "varied_complete_collective", label: yonna ? "mujeres con manta roja y hombres con manta festiva roja de cintura, todos con calzado y tocados situados" : "mujeres con mantas largas y hombres con mantas masculinas completas, fajas y calzado variados", fit: "elegido por variedad interna y cobertura completa", rationale: "evita uniforme repetido y conserva genero, edad y rol sin inventar clan", source_refs: sources },
      { id: "single_uniform", label: "todas las personas con una misma prenda, color, tocado y silueta", fit: "rechazado", rationale: "convertiria parentesco o yonna en disfraz colectivo y repetiria el error de una sola prenda", source_refs: sources },
    ],
    chosen_ensemble: {
      id: "varied_complete_collective",
      rationale: "hace legible un colectivo Wayuu heterogeneo y evita que el rojo o la muerte borren edad, genero y prendas completas",
      specification: yonna ? "dos mujeres con Wayuushein rojas diferentes y un hombre con Asheinpalajanaa roja amplia, S'ira y karatse; una cuarta persona observa con manta roja oscura" : "dos mujeres con Wayuushein largas distintas y dos hombres con She'etebe o Kotin completos, fajas y waireñas",
      layers: ["capas interiores discretas", "prendas dominantes completas y variadas", "fajas o pecheras segun persona", "calzado situado", "tocados solo cuando la ocasion lo permite"],
    },
    attire: dimension("include_documented", "source_specific", yonna ? "Perrin especifica que todos visten de rojo y las fuentes de yonna documentan mantas completas, manta masculina festiva y karatse" : "el parentesco Wayuu se traduce mediante varios conjuntos completos documentados, sin suponer ropa funeraria uniforme", yonna ? "rojos diferenciados en mantas largas femeninas y envolventes masculinas amplias, nunca una sola pieza inferior repetida" : "manta femenina larga, She'etebe o Kotin masculino completo y capas interiores diferenciadas"),
    footwear: dimension("include_contextual", "institutional_general", "cada figura conserva pies y calzado legibles salvo que la propia postura los oculte", "waireñas o sandalias documentadas, distintas por persona y sin patrones"),
    accessories: dimension("include_contextual", "source_specific", yonna ? "solo el varon danzante usa karatse y el kasha permanece en ficha separada" : "se omiten accesorios ceremoniales porque la escena es saludo y no rito", yonna ? "un karatse con aro, borlas y plumas cortas; ninguna joya o mochila" : "sin corona, joya, mochila, arma o amuleto"),
    face_paint: yonna
      ? {
        ...dimension("include_documented", "source_specific", "la yonna documenta pintura facial y la cartilla diferencia figuras circulares femeninas y rectas masculinas; se usa una sola marca sobria sin asignar clan", "mujeres con un circulo rojo terroso en cada mejilla; hombre con dos lineas rectas rojas cortas en cada mejilla"),
        motif_policy: "source_specific_only",
      }
      : dimension("omit_contextually", "source_specific", "ser muerto o pariente no basta para inferir pintura facial"),
    wardrobe_profile: "mixed_collective",
    wardrobe_refs: [...new Set([...femaleRefs, ...maleRefs])],
    wardrobe_visual_contract: visualContract("siluetas completas variadas, nunca una hilera de prendas inferiores", "cada frente conserva torso, capa dominante, cintura y calzado propios", "perfiles y espaldas distinguen mantas largas, envolventes y tocados", "si dos personas colapsan al mismo atuendo o un hombre queda reducido a una banda de cintura, la imagen se rechaza"),
    collective_wardrobe: {
      variation_axis: yonna ? "genero, rol de baile, edad y tono de rojo" : "genero, edad, cercania familiar y tipo de manta",
      anti_uniformity_rule: "ningun par comparte simultaneamente corte, tono, tocado y postura; todas las siluetas permanecen completas",
      member_groups: [
        { id: "women", scope: yonna ? "dos mujeres yolujaa adultas que bailan o esperan" : "dos parientes mujeres de edades distintas", ensemble: yonna ? "Wayuushein rojas amplias sobre pechera y waireñas; una con ko'usu" : "Wayuushein largas en dos tonos sobre pechera y waireñas", rationale: "la manta femenina domina la silueta sin erotizacion", source_refs: sources, wardrobe_profile: "female", wardrobe_refs: femaleRefs },
        { id: "men", scope: yonna ? "un danzante y un observador yolujaa adultos" : "dos parientes hombres de edades distintas", ensemble: yonna ? "Asheinpalajanaa roja amplia, S'ira, waireñas y karatse solo para el danzante" : "She'etebe o Kotin completos, S'ira y waireñas", rationale: "la capa o envolvente sustancial evita reducir al hombre a una prenda inferior", source_refs: sources, wardrobe_profile: "male", wardrobe_refs: maleRefs },
      ],
    },
    source_refs: sources,
    continuity_markers: ["piel de papel en tonos siena variados", "prendas completas", yonna ? "rojos diferenciados y pintura facial limitada" : "colores tierra y azul humo variados", "ninguna transparencia, halo o estética de terror"],
  };
}

function unresolvedCollectiveCulture() {
  const sources = MYTH_SOURCES;
  return {
    cultural_scope: "regional_indigenous_unresolved",
    person_scope: "personas no identificadas que juegan oulakawaa y corresponden a conejos en el dominio de Juya",
    temporal_register: "mythic_indeterminate",
    time_basis: "la fuente no fija pueblo, genero, edad exacta o ropa; se usan conjuntos completos lisos y reversibles sin transferir indumentaria Wayuu",
    narrative_moment: "apariencia humana del grupo antes de revelarse como conejos",
    activity_context: "jugar con lianas sin caza, impacto o transformacion violenta visible",
    occasion_context: "mixed_narrative",
    considered_ensembles: [
      { id: "varied_complete_plain", label: "camisas o tunicas de manga, pantalones o envolventes largos, fajas lisas y sandalias variadas", fit: "elegido", rationale: "da cobertura y variedad sin inventar etnia", source_refs: sources },
      { id: "single_minimal_uniform", label: "una misma prenda inferior repetida con torso descubierto", fit: "rechazado", rationale: "convierte ambiguedad en desnudez y estereotipo", source_refs: sources },
    ],
    chosen_ensemble: { id: "varied_complete_plain", rationale: "protege la ambiguedad cultural y diferencia a los jugadores", specification: "cuatro personas con capas completas lisas en ocre, crudo, carbón y azul humo, fajas simples y sandalias", layers: ["capa superior completa", "cobertura inferior completa", "faja lisa", "calzado simple"] },
    attire: dimension("include_contextual", "editorial_reversible", "la fuente solo fija que son personas; la ropa completa evita desnudez y disfraz", "camisas o tunicas de manga larga y pantalones o envolventes largos, todos lisos y diferentes"),
    footwear: dimension("include_contextual", "editorial_reversible", "la actividad al aire libre requiere pies protegidos", "sandalias simples distintas por persona"),
    accessories: dimension("include_documented", "myth_explicit", "solo las lianas del juego acompañan al grupo y tienen ficha propia", "ningun accesorio personal; lianas visibles como utileria compartida"),
    face_paint: dimension("omit_contextually", "source_specific", "no se registra pintura o ceremonia"),
    wardrobe_profile: "mixed_collective",
    wardrobe_components: ["capas superiores completas", "coberturas inferiores completas", "fajas lisas", "sandalias"],
    wardrobe_visual_contract: visualContract("cuatro siluetas completas y diferentes", "cada torso y pierna permanece cubierto", "perfiles conservan mangas y largos distintos", "si el grupo se uniforma, queda semidesnudo o recibe prendas Wayuu, la imagen se rechaza"),
    collective_wardrobe: {
      variation_axis: "altura, color, corte reversible y postura de juego",
      anti_uniformity_rule: "ninguna pareja comparte las mismas cuatro capas o el mismo tono dominante",
      member_groups: [
        { id: "near_pair", scope: "dos jugadores adultos cercanos", ensemble: "camisa cruda con pantalón carbón; túnica ocre con pantalón azul humo", rationale: "dos siluetas completas diferentes", source_refs: sources, wardrobe_profile: "unspecified", wardrobe_components: ["capa superior", "cobertura inferior", "faja", "sandalias"] },
        { id: "far_pair", scope: "dos jugadores adultos más lejanos", ensemble: "camisa azul humo con envolvente larga; túnica carbón con pantalón ocre", rationale: "profundidad y variedad sin uniformar", source_refs: sources, wardrobe_profile: "unspecified", wardrobe_components: ["capa superior", "cobertura inferior", "faja", "sandalias"] },
      ],
    },
    source_refs: sources,
    continuity_markers: ["cuatro personas", "cuatro conjuntos completos distintos", "lianas verdes opacas", "ninguna marca Wayuu o facial"],
  };
}

function simpleDirection({ title, focus, scene, must, avoid = [], materialCulture, humanPresenting = false }) {
  return {
    title,
    focus,
    scene,
    must_show: must,
    avoid: [...COMMON_AVOID, ...avoid],
    ...(materialCulture ? { material_culture: materialCulture } : {}),
    ...(humanPresenting ? { human_presenting: true } : {}),
  };
}

export const WAYUU_AFTERLIFE_DIRECTIONS_V3 = {
  "viudo_viaje_mas_alla__identity_sheet": simpleDirection({
    title: "Viudo del viaje al mas alla · identidad viva",
    focus: "Exactamente UN hombre Wayuu adulto de cuerpo completo, vivo y sereno aunque en duelo. Rostro alargado de papel siena, nariz ancha, cabello negro ondulado hasta la nuca y barba corta. Viste un Kotin arcilla amplio desde hombros hasta bajo las rodillas sobre base carbon secundaria, S'ira terracota lisa, waireñas oscuras y Wom bajo sin patron. Manos vacias; mirada baja pero postura estable. No es Ulepala y no porta arco, flechas, bolsa ni objeto funerario.",
    scene: "Exterior semiarido silencioso de papel, con una sombra de enramada fuera de cuadro, sendero en plano medio y costa muy lejana; seis profundidades fisicas y mundo full bleed.",
    must: ["exactamente un hombre completo de Wom a waireñas", "Kotin arcilla dominante y amplio, no prenda inferior", "rostro, cabello y barba corta repetibles", "manos vacias y ninguna persona muerta", "capas fisicas con sombras reales y sin soporte visible"],
    materialCulture: VIUDO_CULTURE,
  }),
  "viudo_viaje_mas_alla__state_sheet": simpleDirection({
    title: "Viudo · duelo, aprendizaje y regreso envejecido",
    focus: "Tres manifestaciones del MISMO hombre dentro de un unico sendero profundo y sin paneles: cerca, doliente con Kotin arcilla, cabello a la nuca y barba corta; en plano medio, viajero vivo y atento con el mismo conjunto mientras el Kotin se mueve por el viento; al fondo cercano, retornado con el mismo rostro, cabello negro-gris muy abundante hasta media espalda y barba larga hasta el pecho, Kotin gastado pero completo y postura silenciosa. No mostrar muerte final.",
    scene: "Sendero continuo que pasa de suelo semiarido a un plano de bruma marina mate y vuelve a tierra seca, con tres distancias físicas y sombras coherentes; ninguna puerta luminosa o paisaje literal del mas alla.",
    must: ["exactamente tres estados del mismo hombre", "mismo Kotin, S'ira, Wom y waireñas en todos", "envejecimiento solo por cabello, barba, pliegues y postura", "estado central claramente vivo y no transparente", "ninguna muerte, cadáver o relato verbal visible"],
    materialCulture: VIUDO_CULTURE,
  }),
  "esposa_muerta_viaje__identity_sheet": simpleDirection({
    title: "Esposa yolujaa · apariencia humana y agencia",
    focus: "Exactamente UNA mujer Wayuu adulta de cuerpo completo, con apariencia humana y no espectral. Rostro ovalado siena, pomulos altos, dos trenzas negras y mirada directa. Viste Wayuushein azul noche larga hasta tobillos, amplia y con mangas, sobre pechera cruda y waireñas arcilla. La diferencia con una persona viva se expresa solo mediante una sombra lateral que cae en direccion contraria y un borde de papel azul ligeramente desfasado; piel opaca normal, sin transparencia o palidez.",
    scene: "Umbral entre noche y alba hecho de capas azul carbon y arena, con ella sola en plano medio y un sendero que cruza detrás; full bleed, sin cama, tumba, esposo o luna teatral.",
    must: ["exactamente una mujer completa", "manta azul noche larga, mangas, pechera y waireñas", "dos trenzas y rostro repetibles", "una sola anomalía sobria de sombra invertida", "ningun aspecto de fantasma europeo"],
    materialCulture: ESPOSA_CULTURE,
  }),
  "esposa_muerta_viaje__state_sheet": simpleDirection({
    title: "Esposa yolujaa · sueño, mar, Jepira y yonna roja",
    focus: "Cuatro manifestaciones continuas de la MISMA mujer sin paneles: aparición nocturna con manta azul y sombra desfasada; viajera inclinada hacia delante con la misma manta, piernas estables y brazos preparados para cargar sin mostrar al viudo; habitante de Jepira erguida con manta azul y material más mate; danzante final con Wayuushein roja amplia, ko'usu rojo, waireñas y un unico circulo de mashuka rojo terroso en cada mejilla. El cambio de vestido es explícito; no hay contacto sexual.",
    scene: "Camino en curva desde noche azul, franja de mar de papel, montaña mate y círculo de arena roja; cada estado ocupa una distancia física distinta dentro del mismo mundo.",
    must: ["exactamente cuatro estados de la misma mujer", "manta azul en tres estados y manta roja distinta solo en yonna", "rostro, dos trenzas y proporciones constantes", "pintura circular solo en la danzante", "agencia por postura y dirección, no por erotización"],
    avoid: ["man on her back, embrace, kiss, bed, spread legs, sexual partner or voyeur"],
    materialCulture: ESPOSA_CULTURE,
  }),
  "madre_viudo_viaje__identity_sheet": simpleDirection({
    title: "Madre del viudo · recepcion y reconocimiento",
    focus: "Exactamente UNA mujer Wayuu adulta mayor de cuerpo completo, distinta de esposa y hermana. Rostro ancho con líneas de edad de papel, una trenza gris gruesa y manos abiertas a la altura del pecho en gesto de reconocimiento contenido. Viste Wayuushein ocre polvo larga, amplia y con mangas sobre pechera carbon, waireñas arcilla y Wom bajo liso. Sin lágrimas exageradas, duelo ritual o objeto.",
    scene: "Suelo exterior junto a una pared de bahareque fuera de foco, sombra de techo y sendero vacío; cinco profundidades de papel full bleed.",
    must: ["exactamente una mujer mayor completa", "manta ocre larga, pechera, waireñas y Wom", "trenza gris y rostro individual", "gesto de sorpresa sereno", "ningún segundo personaje"],
    materialCulture: MOTHER_CULTURE,
  }),
  "hermana_viudo_viaje__identity_sheet": simpleDirection({
    title: "Hermana del viudo · emocion contenida",
    focus: "Exactamente UNA mujer Wayuu adulta de cuerpo completo, distinta de madre y esposa. Rostro redondo siena, cejas marcadas y dos trenzas negras. Viste Wayuushein verde trupillo larga y amplia sobre pechera arena y waireñas oscuras. Una mano toca su propia clavícula y la otra queda baja; ojos húmedos de papel pero sin lágrima literal ni llanto teatral.",
    scene: "Otro ángulo del mismo exterior doméstico, con poste cercano, sendero vacío y horizonte cálido; cinco planos físicos y ningún interior expuesto.",
    must: ["exactamente una mujer adulta completa", "manta verde larga, pechera arena y waireñas", "dos trenzas y rostro individual", "emoción contenida sin funeral", "ningún hombre o madre dentro de la ficha"],
    materialCulture: SISTER_CULTURE,
  }),
  "parientes_muertos_jepira__group_grammar": simpleDirection({
    title: "Parientes yolujaa · parentesco sin fantasma",
    focus: "Exactamente CUATRO parientes Wayuu-yolujaa de cuerpo completo: mujer mayor con manta arena, mujer adulta con manta azul humo, hombre mayor con She'etebe carbón completa y hombre adulto con Kotin ocre amplio. Cada persona saluda de modo distinto con mano, inclinación o mirada. Son opacos y humanos; comparten una sombra muy corta orientada al oeste aunque la luz llega de otro ángulo. Ninguno es copia de la esposa o del viudo.",
    scene: "Terraza natural de Jepira en papel arena, montaña mate al fondo y casas apenas sugeridas en profundidad; figuras en arco irregular, sin mesa, danza o ganado.",
    must: ["exactamente cuatro parientes completos", "cuatro conjuntos distintos con mantas dominantes", "edades, rostros y gestos diferentes", "anomalía colectiva solo en la dirección de sombra", "ningún efecto de terror o transparencia"],
    materialCulture: wayuuCollectiveCulture(),
  }),
  "danzantes_yolujaa_jepira__group_grammar": simpleDirection({
    title: "Yonna de los yolujaa · grupo rojo completo",
    focus: "Exactamente CUATRO personas Wayuu-yolujaa de cuerpo completo alrededor de un círculo de arena: dos mujeres con Wayuushein rojas diferentes y pecheras, un hombre danzante con Asheinpalajanaa roja amplia, S'ira, waireñas y karatse, y un hombre observador con envolvente rojo oscuro completa. Las mujeres llevan un círculo sencillo de mashuka rojo en cada mejilla; el danzante masculino dos líneas rectas rojas cortas por mejilla. Todos visten de rojo como fija Perrin, pero ningún uniforme se repite. El kasha no aparece: tiene ficha propia.",
    scene: "Pioui circular abstracto de arena roja dentro de Jepira, con casas bajas y chinchorros lejanos; cuatro figuras separadas por profundidad y sombras físicas, sin contacto íntimo.",
    must: ["exactamente cuatro personas completas", "dos mantas femeninas rojas largas y dos conjuntos masculinos envolventes completos", "karatse solo en el danzante", "pintura circular femenina y recta masculina limitada al baile", "ningún beso, abrazo sexual o desnudez"],
    materialCulture: wayuuCollectiveCulture({ yonna: true }),
  }),
  "yolujaa__presence_model": simpleDirection({
    title: "Yolujaa · presencia de un muerto reciente",
    focus: "Modelo de presencia SIN cuerpo canónico: tres huellas humanas de papel hundido avanzan y se vuelven más superficiales; junto a ellas, una sombra humana vertical de bordes de fibra se separa del suelo aunque no existe figura que la proyecte; al fondo, una manta azul noche vacía conserva volumen por un instante y luego cae en capas. Estas tres manifestaciones expresan presencia, sueño y memoria sin fantasma, rostro o anatomía.",
    scene: "Terreno nocturno de papel azul, carbón y arena con sendero curvo; huellas cerca, sombra en plano medio y manta vacía al fondo, todo full bleed y físicamente estratificado.",
    must: ["ningún cuerpo, rostro, ojos, manos o esqueleto", "huellas que pierden profundidad", "una sombra sin figura y una manta vacía opaca", "tres distancias físicas", "lenguaje de memoria, no horror"],
    avoid: ["white robe, transparent person, ectoplasm, smoke face or floating skull"],
  }),
  "alcaravan_guardian__identity_sheet": simpleDirection({
    title: "Alcaravan · guardian del agua",
    focus: "Exactamente UN alcaraván de cuerpo completo y anatomía natural: patas largas amarillo gris, cuerpo pardo arena con pecho claro, cabeza redondeada, ojo grande oscuro, pico corto negro y dos líneas blancas finas en el rostro. Postura alerta junto a una entrada, sin antropomorfismo, corona, pintura o magia visible.",
    scene: "Suelo de papel húmedo y cercado bajo desenfocado, con ave en primer plano y agua solo como una franja lejana; cinco capas físicas y ningún recipiente.",
    must: ["un solo alcaraván completo", "patas largas, cuerpo pardo, pecho claro y pico corto", "postura guardiana natural", "ninguna persona u otra ave", "papel estratificado full bleed"],
  }),
  "agua_yolujaa__object_sheet": simpleDirection({
    title: "Agua de los yolujaa · superficie custodiada",
    focus: "Una ficha de agua sin recipiente: exactamente TRES pequeñas superficies elípticas del mismo manantial o charca en papel azul petróleo mate, mostradas a diferente profundidad y ángulo para explicar borde, ondulación y reflejo oscuro. La superficie no brilla ni emite luz; una sola pluma parda de alcaraván queda lejos del borde como escala, sin ave.",
    scene: "Terreno oscuro húmedo lleno hasta los bordes, con láminas de suelo que rodean las tres vistas conectadas de agua; composición única sin paneles ni base.",
    must: ["exactamente tres vistas conectadas de agua sin vasija", "papel azul petróleo mate y ondulaciones físicas", "una sola pluma parda secundaria", "ninguna persona, ave, copa o cántaro", "full bleed sin soporte"],
  }),
  "recinto_agua_yolujaa__spatial_model": simpleDirection({
    title: "Recinto del agua · acceso custodiado",
    focus: "Modelo espacial de un terreno cercado sencillo: empalizada baja e irregular de postes de papel oscuro describe un óvalo incompleto; una única entrada estrecha queda en plano medio y conduce a una superficie de agua azul petróleo. Un pequeño alcaraván ocupa la entrada como escala, sin persona ni arquitectura monumental. El cercado se apoya en suelo húmedo y no tiene símbolos, puerta tallada o altar.",
    scene: "Vista oblicua elevada 16:9 desde piedras húmedas cercanas, cercado en plano medio, agua interior y loma oscura al fondo; siete planos físicos.",
    must: ["un cercado bajo oval e incompleto", "una sola entrada estrecha", "agua interior y un alcaraván pequeño", "ninguna vasija o persona", "siete profundidades y mundo full bleed"],
  }),
  "puerta_autonoma_jepira__spatial_model": simpleDirection({
    title: "Puerta de Jepira · apertura sin portal",
    focus: "Una única puerta sencilla de listones y fibras de papel dentro de un paso de tierra, mostrada en DOS momentos unidos por profundidad y no por paneles: cerca permanece cerrada; más al fondo la misma puerta está abierta hacia un sendero oscuro. Bisagras de fibra, marco bajo y suelo continuo hacen legible el movimiento. No hay mano, figura, luz, arco monumental ni interior religioso.",
    scene: "Paso estrecho de papel entre taludes bajos, puerta cerrada en primer plano lateral y repetición abierta en profundidad como eco temporal; luz de alba normal y sombras físicas.",
    must: ["la misma puerta cerrada y abierta en dos profundidades", "marco y listones sencillos", "sendero continuo sin figura", "apertura explicada por posición, no por brillo", "full bleed sin base"],
  }),
  "montana_cienaga_jepira__spatial_model": simpleDirection({
    title: "Montana y cienaga de Jepira · morada sin cartografia",
    focus: "Paisaje mítico no cartografiable: terreno movedizo de muchas islas y láminas húmedas en primer plano, un sendero estrecho de papel firme cruza en zigzag y asciende hacia una montaña baja, ancha y oscura donde apenas se distinguen dos volúmenes habitados sin detalle. La materia de la montaña es papel comprimido mate; nada flota o brilla.",
    scene: "Vista 16:9 baja, humedal cercano, sendero central, laderas en planos medios y montaña al fondo bajo alba gris; ocho profundidades físicas.",
    must: ["cienaga estratificada y sendero firme", "una montaña baja y ancha", "dos volúmenes mínimos casi ocultos", "ninguna persona, cadáver o luz sobrenatural", "ocho planos y full bleed"],
  }),
  "caballos_muertos_jepira__group_grammar": simpleDirection({
    title: "Caballos de Jepira · estado muerto sin cadáver",
    focus: "Exactamente TRES caballos íntegros de cuerpo completo, uno gris, uno alazán y uno oscuro, dispuestos en marcha lenta. Su condición de muertos se expresa sin cadáver: color mate desaturado, ojos cerrados de papel, sombras ausentes bajo los cascos y crines que caen inmóviles pese al viento del fondo. No hay heridas, huesos, descomposición, jinete ni silla.",
    scene: "Ladera de Jepira con tres niveles de suelo y viento visible solo en hierbas de papel; caballos en diagonal y montaña lejana.",
    must: ["exactamente tres caballos completos", "tres colores y tamaños diferenciados", "ojos cerrados y ausencia de sombra como única anomalía", "ningún jinete o aparejo", "ninguna herida, cadáver gráfico o terror"],
  }),
  "alimentos_aparecidos_jepira__object_sheet": simpleDirection({
    title: "Alimentos de Jepira · aparición cotidiana",
    focus: "Una ficha de utilería con exactamente UNA marmita redonda de papel carbón, UNA mesa baja rectangular de fibras y SEIS porciones abstractas de alimento cocido en recipientes lisos, además de un melón y una patilla enteros. Una secuencia de tres sombras de la marmita, sin manos ni cocinero, sugiere que aparece cada mañana. Nada es altar, ofrenda o banquete fotográfico.",
    scene: "Suelo interior de papel arena, marmita cercana, mesa en plano medio y frutas al fondo; pared baja difusa y composición full bleed.",
    must: ["una marmita, una mesa baja, seis porciones, un melón y una patilla", "ninguna persona, mano, cuchillo o cocina visible", "tres sombras temporales discretas", "comida abstracta de papel", "sin soporte exterior"],
  }),
  "kasha_yonna_jepira__object_sheet": simpleDirection({
    title: "Kasha de Jepira · tambor de yonna",
    focus: "Exactamente UN kasha cilíndrico de cuerpo completo, construido en papel madera oscuro con dos membranas crudas tensadas, amarres cruzados de fibra lisa y una sola baqueta corta. Tres vistas integradas sin panel: frente, perfil y tres cuartos, todas del mismo instrumento. Ninguna inscripción, kana, colorido turístico o mano.",
    scene: "Arena roja del pioui cubre todo el cuadro; kasha cercano, vista lateral media y vista posterior lejana con sombras físicas.",
    must: ["un mismo kasha en tres vistas", "cuerpo cilíndrico, membranas y amarres legibles", "una sola baqueta", "ninguna persona o danza", "papel y fibra full bleed"],
  }),
  "casas_descanso_jepira__spatial_model": simpleDirection({
    title: "Casas junto a la yonna · espera y descanso",
    focus: "Dos casas bajas distintas alrededor de un espacio de yonna, sin copiar una ranchería humana completa. La primera es una enramada abierta con exactamente dos chinchorros rojos oscuros; la segunda, más profunda, tiene muros parciales arena y una puerta oscura. Entre ambas pasa un sendero hacia el pioui vacío. Ninguna persona, acto íntimo, comida o tambor.",
    scene: "Vista oblicua 16:9: postes y chinchorros cercanos, sendero y pioui medio, segunda casa y montaña al fondo; siete planos físicos.",
    must: ["exactamente dos casas distintas", "exactamente dos chinchorros", "pioui vacío y sendero", "ninguna persona o escena sexual", "siete profundidades full bleed"],
  }),
  "sendero_bifurcado_juya__spatial_model": simpleDirection({
    title: "Bifurcacion hacia Juya · error de camino",
    focus: "Un sendero de papel sale de una ladera oscura y se divide claramente en dos. La rama izquierda regresa hacia bruma marina; la derecha avanza durante una serie de siete lomas de papel cada vez más pequeñas hacia un cielo de lluvia distante. Exactamente una hilera de huellas humanas toma la rama derecha. No hay viajero, letrero, flecha gráfica o señal sobrenatural.",
    scene: "Vista alta oblicua 16:9 con bifurcación en primer plano, huellas en plano medio, siete lomas y nube de lluvia profunda; full bleed.",
    must: ["una bifurcación inequívoca", "huellas solo por la rama derecha", "exactamente siete lomas de profundidad", "mar a izquierda y lluvia lejana a derecha", "ninguna persona o señal escrita"],
  }),
  "semeruco__botanical_sheet": simpleDirection({
    title: "Semeruco · planta y fruto del camino",
    focus: "Ficha botánica de semeruco construida enteramente en papel: una rama principal de hojas pequeñas opuestas, un racimo de flores rosadas discretas, exactamente NUEVE frutos rojos pequeños en tres estados de madurez y una sección de fruto abierta con semilla. Anatomía botánica legible sin texto ni fruta fotográfica.",
    scene: "Suelo continuo verde polvo y arena, rama cercana, frutos en plano medio y corte al fondo; tres profundidades integradas.",
    must: ["rama con hojas opuestas", "flores rosadas", "exactamente nueve frutos", "un fruto abierto", "papel mate full bleed"],
  }),
  "vacas_lecheras_juya__group_grammar": simpleDirection({
    title: "Vacas lecheras de Juya · rebaño cotidiano",
    focus: "Exactamente CINCO vacas lecheras de cuerpo completo y anatomía natural caminando en una hilera curva: dos blancas con manchas carbón distintas, una canela, una gris y una vaca vieja crema que queda un cuerpo atrás. Ninguna ubre se exagera; ninguna lleva marca, campana, cuerda o montura. La vaca vieja se reconoce por lomo bajo, hocico gris y paso lento.",
    scene: "Pastos de papel verde gris entre terreno semiarido y nube de lluvia; hilera en profundidad con sendero húmedo y ninguna persona.",
    must: ["exactamente cinco vacas completas", "cinco pelajes distintos", "vaca vieja retrasada", "ninguna marca o aparejo", "capas físicas y full bleed"],
  }),
  "vaca_guia_juya__identity_sheet": simpleDirection({
    title: "Vaca vieja guia · identidad individual",
    focus: "Exactamente UNA vaca lechera muy vieja de cuerpo completo en UNA sola vista de tres cuartos, crema con manchas gris humo pequeñas, hocico gris, cuernos cortos asimétricos, orejas bajas y lomo ligeramente hundido. Una cola larga con mechón carbón queda claramente visible y separada del torso porque el viajero la toma en la narración, pero no aparece mano ni persona. Anatomía digna, sin caricatura, exceso de leche, vistas auxiliares o repetición del animal.",
    scene: "Sendero verde gris de papel con nube de lluvia lejana; vaca sola en tres cuartos y cinco planos físicos.",
    must: ["exactamente una vaca vieja completa y una sola vista", "pelaje crema y manchas grises", "cola larga claramente visible", "ninguna persona, mano, cuerda o marca", "sin miniaturas, recuadros, siluetas auxiliares o vacas repetidas"],
    avoid: ["identity turnaround, multiple views, inset cow, contact sheet or repeated animal"],
  }),
  "pulowi__presence_model": simpleDirection({
    title: "Pulowi · presencia como limite no corporal",
    focus: "Presencia SIN cuerpo: una gran enramada vacía proyecta una sombra femenina imposible que se detiene exactamente en el borde occidental de una cerca; detrás, el aire de papel se comprime en cinco capas oscuras y un grupo de hojas queda inmóvil mientras el resto del paisaje se mueve. No hay mujer visible, piernas, ventana ocupada, sangre o monstruo.",
    scene: "Exterior de la casa de Pulowi visto de lado, cerca cercana, sombra detenida, enramada media y ladera oscura al fondo; siete planos físicos.",
    must: ["ningún cuerpo o rostro", "sombra que termina en el límite", "cinco capas de aire comprimido", "casa y enramada parcialmente visibles", "ninguna sexualidad o terror"],
  }),
  "pulowi__state_sheet": simpleDirection({
    title: "Pulowi · presencia y limite territorial",
    focus: "Dos estados no corporales de la misma fuerza sin paneles: cerca, una sombra amplia permanece dentro de la casa y no cruza la cerca; al fondo, el territorio exterior forma una depresión oval oscura rodeada por vegetación que se inclina hacia afuera. Una línea continua de papel carbón conecta ambos estados como límite. No hay anatomía, sangre, animal, boca o rostro.",
    scene: "Casa lateral, cerca y depresión territorial en un solo paisaje de papel con ocho profundidades y luz natural gris.",
    must: ["dos estados conectados por un límite físico", "sombra interior y depresión territorial", "ninguna figura humana o criatura", "sin portal, aura o símbolos", "full bleed estratificado"],
  }),
  "casa_enramada_pulowi__spatial_model": simpleDirection({
    title: "Casa de Pulowi · arquitectura del limite",
    focus: "Casa baja de papel con un volumen rectangular cerrado y exactamente UNA ventana oscura vacía. Delante se extiende una gran enramada de postes y cubierta de yotojoro, tres veces más ancha que la casa. Una cerca baja cruza el primer plano y deja un único acceso que permanece sin huellas. No hay habitante, interior expuesto, altar o sangre.",
    scene: "Vista oblicua 16:9 desde la cerca, enramada en plano medio, casa detrás y ladera de lluvia lejana; ocho profundidades físicas.",
    must: ["una casa rectangular baja", "una ventana vacía", "enramada tres veces más ancha", "cerca con acceso sin huellas", "ninguna persona o símbolo"],
  }),
  "botellas_juya__object_sheet": simpleDirection({
    title: "Botellas de Juya · contenido fuera de imagen",
    focus: "Exactamente TRES botellas pequeñas y opacas de papel: una terracota alta, una carbón redonda y una azul lluvia baja, todas con tapones de fibra y correas lisas de transporte. Se muestran cerradas, sin líquido visible, etiqueta, vaso o derrame. Tres vistas integradas aclaran volumen y sistema de carga sin mano humana.",
    scene: "Suelo húmedo verde gris y sombra de nube ocupan el cuadro; botellas en tres distancias con composición full bleed.",
    must: ["exactamente tres botellas opacas", "tres formas y colores distintos", "tapones y correas lisas", "ningún contenido, sangre o persona", "papel full bleed"],
  }),
  "boa_banco__identity_sheet": simpleDirection({
    title: "Boa-banco · una sola materia, doble lectura",
    focus: "Exactamente UN objeto-criatura continuo que puede leerse simultáneamente como una boa gruesa enrollada y un banco bajo: el mismo cuerpo ininterrumpido de papel carbón verdoso forma una espiral oval y tres pliegues inferiores integrados funcionan como patas cortas. La cabeza de boa se sugiere únicamente en el extremo unido al banco, sin ojos brillantes o colmillos; superficie superior plana y estable. No existe cola, varilla, rama, lápiz ni fragmento separado en el suelo.",
    scene: "Suelo interior de Juyá en papel verde oscuro, forma central en tres cuartos y pared de lluvia difusa; cinco planos físicos.",
    must: ["exactamente una forma híbrida continua", "espiral de boa y superficie de banco legibles", "tres apoyos inferiores integrados", "ningún fragmento u objeto suelto", "papel mate full bleed"],
    avoid: ["detached tail, loose rod, pencil, stick, branch or second object"],
  }),
  "boa_banco__state_sheet": simpleDirection({
    title: "Boa-banco · percepcion y asiento enrollado",
    focus: "Tres lecturas del MISMO objeto en un espacio continuo: cerca, espiral de boa con cabeza discreta; en medio, forma ambigua mitad espiral mitad banco; al fondo, banco bajo plano que conserva el patrón de escamas como capas y se enrolla levemente en un extremo. No mostrar al viudo sentado ni transformación digital.",
    scene: "Interior de papel con suelo curvo y tres distancias, iluminado por luz de lluvia lateral; sin paneles.",
    must: ["exactamente tres lecturas del mismo objeto", "misma paleta carbón verdoso", "transición por pliegue y distancia", "ninguna persona o violencia", "sin brillo mágico"],
  }),
  "corzo_hombre_arco__identity_sheet": simpleDirection({
    title: "Kusina-corzo · apariencia humana completa",
    focus: "Exactamente UNA figura adulta de cuerpo completo llamada Kusina por la fuente, distinta del joven Kosina. Rostro anguloso, camisa cruda de manga larga, pantalón ocre completo, faja carbón, sandalias y corona BAJA de corteza de cuji con pocas plumas cortas de gallo superpuestas. Sostiene una sola flecha vertical con punta hacia el suelo y NO lleva arco. No mostrar corzo en esta ficha.",
    scene: "Sendero verde gris del dominio de Juyá, figura sola y arbustos de papel; cinco planos físicos.",
    must: ["una persona completa", "camisa y pantalón completos", "corona baja de cuji y plumas cortas", "una sola flecha sin arco", "ningún marcador Wayuu o tocado panindigena"],
    materialCulture: KUSINA_CORZO_CULTURE,
    humanPresenting: true,
  }),
  "corzo_hombre_arco__state_sheet": simpleDirection({
    title: "Kusina-corzo · correspondencia de formas",
    focus: "Tres manifestaciones continuas sin violencia: figura Kusina completa y erguida; silueta intermedia de papel donde la corona baja se alinea con orejas de corzo y la flecha se alinea con una pata delantera; corzo adulto completo color ocre con pecho crudo y orejas carbón. La ropa no se rompe, el cuerpo no es atravesado y no hay disparo.",
    scene: "Sendero curvo con persona cercana, forma intermedia media y corzo profundo bajo lluvia suave; tres distancias físicas.",
    must: ["una persona, una forma intermedia y un corzo", "continuidad de ocre, crudo y carbón", "ropa humana completa", "ninguna flecha clavada, caída o muerte", "transformación por alineación material"],
    materialCulture: KUSINA_CORZO_CULTURE,
    humanPresenting: true,
  }),
  "venado_hombre_rico__identity_sheet": simpleDirection({
    title: "Indigena rico-venado · traje completo descrito",
    focus: "Exactamente UNA figura adulta de cuerpo completo, de identidad indígena no resuelta. Lleva sobretúnica ocre de manga larga hasta medio muslo sobre camisa cruda, pantalón carbón completo, cinturón ROJO ancho y liso, zapatos bajos y sombrero tejido de ala media. Rostro ancho, barba corta y postura segura. No es traje de negocios, hacendado, cowboy ni vestuario Wayuu. No mostrar venado.",
    scene: "Otro sendero del dominio de Juyá con pasto verde gris, figura sola y nube lejana; cinco profundidades.",
    must: ["una persona completa", "sobretúnica, camisa y pantalón completos", "cinturón rojo y sombrero explícitos", "ningún marcador étnico inventado", "ningún venado o arma"],
    materialCulture: RICH_DEER_CULTURE,
    humanPresenting: true,
  }),
  "venado_hombre_rico__state_sheet": simpleDirection({
    title: "Indigena rico-venado · correspondencia de formas",
    focus: "Tres manifestaciones continuas: persona completamente vestida; forma intermedia donde ala del sombrero se alinea con cornamenta, cinturón rojo con franja del lomo y sobretúnica con pecho del animal; venado adulto completo color ocre oscuro con pecho crudo y una franja roja de papel muy discreta en el lomo como eco material, no marca natural real. Sin disparo, caída o herida.",
    scene: "Pradera de Juyá en curva con tres profundidades bajo nube de lluvia; transición por alineación y materia.",
    must: ["una persona, una forma intermedia y un venado", "traje humano completo", "continuidad de sombrero-cornamenta y cinturón-franja", "ninguna violencia", "sin efectos luminosos"],
    materialCulture: RICH_DEER_CULTURE,
    humanPresenting: true,
  }),
  "conejos_jugadores__group_grammar": simpleDirection({
    title: "Jugadores-conejos · oulakawaa y revelacion",
    focus: "Exactamente CUATRO personas adultas completamente vestidas juegan alrededor de dos lianas verdes de waleeru dispuestas en el suelo; detrás de cada una aparece, en otra profundidad, un conejo de papel que repite su postura y color dominante. Ocho figuras totales: cuatro humanas y cuatro conejos. Conjuntos lisos diferentes en crudo, ocre, carbón y azul humo; ningún uniforme o ropa Wayuu. No hay caza ni flechas.",
    scene: "Claro verde gris del dominio de Juyá, lianas cercanas, jugadores medios y conejos profundos; composición circular sin paneles.",
    must: ["exactamente cuatro personas y cuatro conejos", "cuatro conjuntos humanos completos y distintos", "dos lianas de juego", "posturas emparejadas persona-conejo", "ninguna arma o violencia"],
    materialCulture: unresolvedCollectiveCulture(),
  }),
  "juego_oulakawaa_waleeru__object_sheet": simpleDirection({
    title: "Oulakawaa con waleeru · utileria sin reglas inventadas",
    focus: "Ficha de exactamente DOS lianas largas de waleeru, flexibles y verdes, cada una formando una curva amplia diferente sobre el suelo. Al lado hay cuatro pequeñas estacas lisas de papel y dos lazos simples, separados como piezas posibles pero sin diagrama de armado o explicación de reglas. Ninguna persona, conejo, texto o símbolo.",
    scene: "Suelo verde gris full bleed con lianas cercanas, estacas en plano medio y lazos al fondo; sombras de contacto reales.",
    must: ["exactamente dos lianas", "exactamente cuatro estacas", "exactamente dos lazos", "ningún montaje o reglas inventadas", "papel y fibra full bleed"],
  }),
  "patilla__state_sheet": simpleDirection({
    title: "Patilla · fruto y familia humana percibida",
    focus: "Tres lecturas del mismo ser sin violencia: exactamente UNA patilla redonda verde oscura de papel; UNA forma intermedia abstracta donde sus franjas se separan en cuatro capas planas sin rostro, cabeza, manos ni cuerpo humano; y exactamente CUATRO personas humanas TOTALES en toda la imagen, dos adultas y dos niñas o niños de piel de papel marrón muy oscuro, todas completamente vestidas con túnicas o camisas largas, pantalones o envolventes completas y sandalias en verdes, crudos y carbón. Las cuatro personas solo aparecen una vez, en el estado final; la transición no contiene personas adicionales. Ninguna caricatura, desnudez o comida de personas.",
    scene: "Cultivo de Juyá en tres profundidades, fruto cercano, forma intermedia media y familia profunda; suelo húmedo y hojas de patilla.",
    must: ["exactamente una patilla, una transición abstracta y cuatro personas humanas totales", "dos adultos y dos niños completamente vestidos que aparecen una sola vez", "transición sin rostros, cabezas, manos ni personas adicionales", "continuidad de franjas verdes en capas de ropa", "ninguna violencia o humor corporal"],
    avoid: ["people inside the transition fruit, duplicate family, eight humans or repeated human state"],
    materialCulture: unresolvedPersonCulture({ culturalScope: "regional_indigenous_unresolved", personScope: "grupo familiar percibido en una patilla; la fuente fija piel oscura e hijos pero no etnia, ropa o genero individual", profile: "unspecified", narrativeMoment: "apariencia humana de la patilla antes de que el visitante reconozca el fruto", activityContext: "conversar en familia, sin caza o consumo visible", chosenLabel: "túnicas o camisas largas, pantalones o envolventes completas y sandalias en cuatro combinaciones", alternativeLabel: "capas completas de corte más corto con pantalones y zapatos bajos", specification: "dos adultos y dos niños con capas completas lisas, distintas entre sí, en verde oscuro, crudo y carbón", layers: ["capa superior completa", "cobertura inferior completa", "faja lisa", "sandalias"], components: ["capas superiores", "coberturas inferiores", "fajas", "sandalias"], attire: "túnicas o camisas largas y coberturas inferiores completas, todas lisas y distintas", footwear: "sandalias simples para las cuatro figuras", accessories: "ningun accesorio, joya, sombrero, arma o mochila", continuity: ["cuatro figuras", "piel marrón muy oscura en tonos individualizados", "capas verdes, crudas y carbón", "sin marcadores Wayuu"], contract: visualContract("cuatro figuras completas derivadas de las franjas del fruto", "torsos y piernas cubiertos en cada persona", "perfiles conservan mangas y largos distintos", "si aparece desnudez, caricatura racial, uniforme o ropa Wayuu, la imagen se rechaza") }),
    humanPresenting: true,
  }),
  "ahuyama__state_sheet": simpleDirection({
    title: "Ahuyama · volumen vegetal y personas percibidas",
    focus: "Tres lecturas sin burla corporal: una ahuyama naranja de papel con costillas profundas; forma intermedia donde las costillas se abren como pliegues textiles; exactamente TRES personas adultas de cuerpos grandes y vientres voluminosos, plenamente vestidas en túnicas amplias con mangas, pantalones completos y sandalias. Sus volúmenes nacen de capas de ropa y papel, no de abdomen desnudo o deformidad. Rostros serenos e individuales.",
    scene: "Huerta húmeda de Juyá, fruto cercano, forma intermedia y tres personas profundas; hojas grandes de papel y nube lejana.",
    must: ["una ahuyama, una forma intermedia y tres personas", "tres conjuntos completos distintos", "volumen traducido por ropa y pliegues", "ninguna desnudez, enfermedad o caricatura", "continuidad naranja y verde"],
    materialCulture: unresolvedPersonCulture({ culturalScope: "regional_indigenous_unresolved", personScope: "personas de vientres dobles o grandes percibidas en las ahuyamas; identidad y ropa no documentadas", profile: "unspecified", narrativeMoment: "apariencia humana del cultivo antes de reconocer la ahuyama", activityContext: "estar de pie y conversar sin violencia o consumo visible", chosenLabel: "túnicas amplias de manga, pantalones completos, fajas lisas y sandalias", alternativeLabel: "camisas holgadas, envolventes inferiores completas y zapatos bajos", specification: "tres conjuntos completos de volumen amplio en naranja oscuro, verde gris y crudo", layers: ["túnica o camisa amplia", "pantalón o envolvente completa", "faja lisa", "sandalias"], components: ["capas superiores amplias", "coberturas inferiores completas", "fajas", "sandalias"], attire: "túnicas amplias con mangas y pantalones completos, sin ajuste al vientre", footwear: "sandalias simples", accessories: "ningún accesorio o símbolo", continuity: ["tres figuras", "pliegues costillados como eco de ahuyama", "naranja, verde y crudo", "rostros individuales"], contract: visualContract("tres figuras completas con volumen de ropa", "frente cubierto sin exposición abdominal", "perfil conserva pliegues amplios y piernas cubiertas", "si el volumen se vuelve burla, desnudez, embarazo forzado o ropa Wayuu, la imagen se rechaza") }),
    humanPresenting: true,
  }),
  "maiz_juya__botanical_sheet": simpleDirection({
    title: "Maiz de Juya · cultivo sin apariencia desnuda",
    focus: "Ficha botánica de una planta de maíz de papel con tallo completo, hojas largas, exactamente TRES mazorcas en estados verde, maduro y abierto, y una panoja superior. Los pelos de la mazorca quedan claramente vegetales y confinados a la bráctea; no se insinúa pubis, cuerpo o figura humana. Esta omisión es deliberada por el límite sexual del proyecto.",
    scene: "Suelo húmedo verde gris full bleed, planta central, tres mazorcas en distintas profundidades y nube de lluvia al fondo.",
    must: ["una planta completa", "exactamente tres mazorcas", "panoja y hojas botánicas", "ninguna figura o anatomía humana", "papel full bleed"],
  }),
  "melon_juya__botanical_sheet": simpleDirection({
    title: "Melon · cultivo y alimento",
    focus: "Ficha botánica de melón en papel: una guía rastrera con hojas lobuladas, una flor amarilla, exactamente CINCO frutos redondos en distintas maduraciones y un fruto abierto con pulpa clara y semillas. Nada tiene rostro, extremidades o ropa en esta ficha.",
    scene: "Suelo húmedo arena-verde full bleed, guía cercana, frutos medios y corte al fondo.",
    must: ["guía rastrera y hojas lobuladas", "una flor amarilla", "exactamente cinco frutos", "un fruto abierto", "ninguna persona"],
  }),
  "melon_juya__state_sheet": simpleDirection({
    title: "Melon · personas alijuna pequenas percibidas",
    focus: "Tres lecturas inequívocas: exactamente UN melón claro de papel completo cerca; UNA transición abstracta oval hecha solo de media cáscara y tres costuras de papel, sin convertirse en segundo fruto completo ni contener rostro o cuerpo; y exactamente TRES personas alijuna ADULTAS TOTALES de pequeña escala al fondo, no niños ni caricaturas, completamente vestidas con camisas de manga larga, pantalones completos, calzado cerrado y sombreros lisos en tres combinaciones distintas. No hay otros melones ni humanos. No se fija raza, nación o época; el tamaño expresa la comparación mítica.",
    scene: "Cultivo de Juyá en perspectiva forzada: fruto cercano, transición media y tres figuras pequeñas profundas junto a hojas enormes de melón.",
    must: ["exactamente un melón completo, una media cáscara transicional y tres adultos humanos totales", "transición abstracta sin rostro, cuerpo o fruto adicional", "tres conjuntos completos y distintos", "escala pequeña con proporciones adultas", "continuidad de red superficial en costuras"],
    avoid: ["multiple whole melons, missing transition, children, dwarf caricature or repeated humans"],
    materialCulture: unresolvedPersonCulture({ culturalScope: "non_wayuu_alijuna", personScope: "tres apariencias alijuna adultas y pequeñas asociadas con melones; la fuente no fija procedencia, raza o ropa", profile: "unspecified", narrativeMoment: "apariencia humana del melón antes de reconocer el fruto", activityContext: "estar de pie entre cultivos, sin caza o consumo visible", chosenLabel: "camisas de manga larga, pantalones completos, calzado cerrado y sombreros lisos en tres variantes", alternativeLabel: "túnicas completas con pantalón y sandalias, sin sombrero", specification: "tres adultos pequeños con conjuntos completos crudo-carbón, azul-arena y ocre-gris", layers: ["camisa de manga larga", "pantalón completo", "cinturón liso", "calzado cerrado", "sombrero simple"], components: ["camisa", "pantalón", "cinturón", "calzado", "sombrero"], attire: "camisas y pantalones completos, lisos y distintos", footwear: "zapatos bajos cerrados", accessories: "sombreros lisos sin insignia; ningún otro accesorio", continuity: ["tres adultos de escala pequeña", "tres paletas distintas", "costuras que repiten la red del melón", "sin rasgos infantiles o Wayuu"], contract: visualContract("tres adultos pequeños totalmente vestidos", "torso y piernas cubiertos en cada figura", "perfil conserva mangas, pantalón y sombrero", "si parecen niños, duendes, caricaturas raciales, conquistadores o Wayuu, la imagen se rechaza") }),
    humanPresenting: true,
  }),
  "arana_anciana_viaje__identity_sheet": simpleDirection({
    title: "Alekeru · anciana de cabellos blancos",
    focus: "Exactamente UNA anciana de cuerpo completo, rostro pequeño ocre, nariz curva, dos trenzas blancas gruesas y seis pequeños pliegues blancos en la espalda que anticipan patas sin ser extremidades. Viste Wayuushein carbón violáceo larga y amplia, pechera arcilla y waireñas oscuras. Postura protectora y manos vacías; no huso, ovillo, telar, bastón o estética de bruja. No se llama Waleker.",
    scene: "Interior lateral del dominio de Juyá, con pared de papel oscuro y sendero de salida en profundidad; cinco planos físicos.",
    must: ["una anciana completa", "manta larga, pechera y waireñas", "dos trenzas blancas", "seis pliegues blancos discretos", "ningun objeto o rasgo de bruja"],
    materialCulture: SPIDER_CULTURE,
    humanPresenting: true,
  }),
  "arana_anciana_viaje__state_sheet": simpleDirection({
    title: "Alekeru · anciana, arana e hilo de regreso",
    focus: "Tres manifestaciones continuas: anciana completamente vestida; forma intermedia donde la manta carbón se abre en ocho pliegues y las trenzas blancas se vuelven dos hebras; gran araña de papel carbón violáceo con ocho patas, dos marcas blancas lineales en el dorso y una hebra que desciende. Ningún cuerpo humano montado, transformación dolorosa o telaraña decorativa.",
    scene: "Pendiente nocturna de papel con anciana arriba, transición media y araña profunda descendiendo por una hebra; tres distancias y sombras reales.",
    must: ["una anciana, una transición y una araña", "ropa humana completa", "ocho patas en estado araña", "continuidad de carbón violáceo y blanco", "ninguna persona transportada dentro de la ficha"],
    materialCulture: SPIDER_CULTURE,
    humanPresenting: true,
  }),
  "hilo_arana_regreso__object_sheet": simpleDirection({
    title: "Hilo de Alekeru · ovillo y descenso",
    focus: "Exactamente UN ovillo irregular de hilo blanco mate, una hebra continua que sale de él y desciende en espiral, y tres pequeños puntos de anclaje de papel carbón. La hebra cambia de grosor como fibra segregada, no cuerda industrial. Tres vistas integradas muestran ovillo, espiral y punto de apoyo sin araña o persona.",
    scene: "Fondo nocturno azul carbón full bleed con ovillo cerca, hebra media y anclajes profundos; sombras finas entre capas.",
    must: ["un ovillo", "una sola hebra continua", "exactamente tres puntos de anclaje", "ninguna araña, persona o portal", "papel y fibra full bleed"],
  }),
  "jepira__spatial_model": simpleDirection({
    title: "Jepira · tres umbrales sin mapa total",
    focus: "Modelo espacial parcial y no cartográfico de Jepira: costa de papel entra desde primer plano y cruza una franja de mar hacia otra orilla; más allá aparecen el recinto de agua como óvalo cercado, una puerta baja y una montaña oscura con terreno cenagoso. Casas y un pioui rojo se insinúan en la ladera sin personas. La continuidad se lee en nueve profundidades, no como mapa, infografía o parque temático.",
    scene: "Panorámica 16:9 oblicua desde costa cercana hasta montaña profunda, con mar, cercado, puerta, humedal y ladera en secuencia física; luz de alba natural.",
    must: ["costa, otra orilla, recinto, puerta, cienaga y montaña", "pioui y casas solo como huellas lejanas", "ninguna persona, fantasma o ritual", "nueve planos físicos", "sin mapa total o coordenadas"],
  }),
  "dominio_juya__spatial_model": simpleDirection({
    title: "Dominio de Juya · mundo de doble percepcion",
    focus: "Paisaje de aprendizaje donde una misma materia permite dos lecturas sin colocar personajes: sendero húmedo pasa junto a banco espiralado, pradera con cuatro huellas humanas que se vuelven huellas de conejo y cultivo cuyas sombras parecen familias. Al fondo, nubes de lluvia alimentan pastos y una casa baja queda fuera del límite de Pulowi. No hay zoológico fantástico, cuerpos híbridos o efectos digitales.",
    scene: "Vista 16:9 oblicua con banco cercano, huellas medias, cultivos en profundidad, pastos y lluvia al fondo; ocho capas físicas.",
    must: ["banco espiralado", "huellas humanas que pasan a conejo", "sombras familiares en cultivos", "pastos verdes bajo lluvia lejana", "ocho profundidades sin personas visibles"],
  }),
};

export default WAYUU_AFTERLIFE_DIRECTIONS_V3;
