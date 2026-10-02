/**
 * Direcciones del lote 21 · La majayura de Puró.
 *
 * La transcripción de Chaves es breve. Papach es una piedra, no una persona;
 * los hombres no tienen nombre ni forman una expedición; los secretos no son
 * bienes materiales. La ropa se resuelve como traducción editorial reversible
 * de repertorios Wayuu documentados y nunca como una prenda inferior aislada.
 */

const STORY_SOURCE = "chaves_majayura_puro_1946";
const WARDROBE_SOURCES = [
  "paz_ipuana_aleya_tomo_ii_2016",
  "mincultura_caracterizacion_wayuu",
  "artesanias_tejeduria_wayuu_2016",
  "artesanias_comunidad_wayuu",
  "artesanias_womu_wayuu",
  "banrep_moser_hombres_wayuu_1961",
  "icanh_organizacion_social_guajira_1950",
];

const COMMON_AVOID = [
  "nudity, erotic pose, femme fatale, seduction scene, sexual availability or voyeuristic framing",
  "blood, corpse, drowning body, struggle in water, death scene, wound, violence or horror spectacle",
  "European siren, mermaid tail, witch, fairy, angel, demon, ghost, skeleton or translucent spirit",
  "generic pan-indigenous costume, feather war bonnet, Andean poncho, cowboy stereotype or fantasy shaman",
  "invented kana, clan mark, face motif, tattoo, rune, glyph, ceremonial symbol, amulet, altar or crown",
  "treasure, gold, jewels, coins, book, scroll, map, written secret, magic key or fantasy relic",
  "neon aura, portal, magic particles, digital smoke, lens flare, glowing eyes or supernatural VFX",
  "text, caption, title, label, number, arrow, diagram, panel border, watermark or signature",
  "flat collage, 2D illustration, smooth CGI, plastic figure, photographic real fabric, visible cardboard edge, base, pedestal, table, studio or exterior of the diorama",
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

const MAJAYURA_CULTURE = {
  cultural_scope: "wayuu",
  person_scope: "majayura de Puro, joven adulta de apariencia humana descrita por Chaves como elegante, bonita y bien vestida",
  temporal_register: "historic_postcontact_indeterminate",
  time_basis: "la narracion fue publicada en 1946 pero no fecha sus sucesos ni describe el corte de la ropa; 'bien vestida' exige un conjunto completo, mientras manta, pechera, calzado y sombrero se usan como traduccion editorial Wayuu reversible y no como reconstruccion prehispanica",
  narrative_moment: "aparicion diurna o nocturna en el territorio antes de conducir hacia la cueva sagrada, sin mostrar muerte, ahogamiento o transformacion humana",
  activity_context: "estar de pie, caminar con autonomia y marcar una direccion mediante distancia y mirada, nunca posar para seducir",
  occasion_context: "travel",
  considered_ensembles: [
    {
      id: "manta_larga_pechera_wairenas",
      label: "Wayuushein larga y lisa sobre pechera interior, con waireñas",
      fit: "documentado y completo, pero pierde la lectura de elegancia singular nombrada por la fuente",
      rationale: "la manta femenina larga y las waireñas sostienen cobertura y pertenencia sin asignar ornamento",
      source_refs: [STORY_SOURCE, "mincultura_caracterizacion_wayuu", "artesanias_tejeduria_wayuu_2016"],
    },
    {
      id: "manta_larga_pechera_womu_wairenas",
      label: "Wayuushein larga y lisa sobre pechera, Wom/Woma sobrio y waireñas",
      fit: "mejor traduccion reversible de una presencia bien vestida que aparece en exterior de dia o de noche",
      rationale: "añade una pieza de cabeza funcional y documentada sin convertir el conjunto en fiesta, ritual o acumulacion de accesorios",
      source_refs: [STORY_SOURCE, "artesanias_tejeduria_wayuu_2016", "artesanias_womu_wayuu", "paz_ipuana_aleya_tomo_ii_2016"],
    },
  ],
  chosen_ensemble: {
    id: "manta_larga_pechera_womu_wairenas",
    rationale: "responde literalmente a la cobertura completa y al porte elegante sin inventar patrones, joyeria, rango, pintura o erotizacion",
    specification: "Wayuushein índigo profundo, larga hasta los tobillos, amplia, lisa y con mangas; pechera interior rojo arcilla visible solo en cuello y puños; Wom/Woma bajo de fibra ocre sin dibujo; dos waireñas carbón simples",
    layers: [
      "pechera interior rojo arcilla opaca en cuello y puños",
      "Wayuushein índigo de cuerpo entero, amplia, lisa y con mangas",
      "Wom/Woma bajo de fibra ocre sin banda decorada",
      "dos waireñas carbón simples y completas",
    ],
  },
  attire: dimension("include_contextual", "editorial_reversible", "Chaves confirma que esta figura esta bien vestida pero no fija el corte; se elige una manta femenina documentada de cobertura completa", "Wayuushein índigo de cuerpo entero con mangas y volumen amplio sobre pechera rojo arcilla, sin bordado, abertura, kana o transparencia"),
  footwear: dimension("include_contextual", "institutional_general", "el conjunto exterior queda completo sin usar pies descalzos como marcador de antiguedad", "dos waireñas carbón de suela plana, sin borlas ni adorno"),
  accessories: dimension("include_contextual", "institutional_general", "el Wom/Woma responde al exterior y diferencia la silueta sin atribuir ceremonia o rango", "un Wom/Woma bajo de fibra ocre lisa, sin emblema, plumas, cuentas o patrón"),
  face_paint: dimension("omit_contextually", "source_specific", "el relato no documenta ocasion, material, funcion ni motivo facial; elegancia no autoriza inventar pintura"),
  wardrobe_profile: "female",
  wardrobe_refs: ["wayuushein_manta", "pechera_female_underlayer", "wairenas", "wom_woma_hat"],
  wardrobe_visual_contract: contract(
    "gran volumen índigo continuo desde hombros hasta tobillos, coronado por Wom/Woma ocre bajo",
    "frente lee pechera arcilla pequeña dentro de la abertura de la Wayuushein y dos mangas amplias",
    "perfil y espalda conservan todo el paño largo, la caída amplia y el sombrero bajo",
    "rechazar si la Wayuushein se vuelve vestido ceñido, túnica sin mangas, falda, poncho, velo, traje de sirena o desaparece detrás del cuerpo",
  ),
  source_refs: [STORY_SOURCE, ...WARDROBE_SOURCES],
  continuity_markers: [
    "rostro joven adulto de ovalo alargado, nariz recta y pomulos altos",
    "cabello negro en una trenza baja completa",
    "Wayuushein índigo larga y lisa con pechera rojo arcilla",
    "Wom/Woma ocre bajo y waireñas carbón",
    "ninguna pintura facial, joya, patrón, marca o brillo sobrenatural",
  ],
};

const MEN_CULTURE = {
  cultural_scope: "wayuu",
  person_scope: "cuatro hombres Wayuu adultos anonimos que representan casos posibles del relato, no compañeros simultaneos ni personajes con nombre",
  temporal_register: "historic_postcontact_indeterminate",
  time_basis: "Chaves no describe edad, ocupacion o ropa individual; etnografias, fotografia historica y un autor Wayuu documentan camisas, mantas masculinas completas, envolventes, fajas, bolsas, sombreros y calzado que conviven en conjuntos situados",
  narrative_moment: "gramatica colectiva previa a los resultados sensibles, con cuatro identidades editoriales reversibles separadas por edad aparente, distancia y conjunto",
  activity_context: "caminar o detenerse en el territorio costero; ninguno aparece herido, ahogado, muerto, transformado o subordinado a la majayura",
  occasion_context: "travel",
  considered_ensembles: [
    {
      id: "one_repeated_minimal_set",
      label: "un solo conjunto minimo repetido en los cuatro hombres",
      fit: "inadecuado",
      rationale: "borraria la variedad historica de prendas masculinas documentadas y convertiria una base parcial en uniforme etnico",
      source_refs: ["icanh_organizacion_social_guajira_1950", "banrep_moser_hombres_wayuu_1961", "paz_ipuana_aleya_tomo_ii_2016"],
    },
    {
      id: "four_complete_contextual_sets",
      label: "cuatro conjuntos completos y distintos con capa dominante, faja, calzado y accesorios funcionales selectivos",
      fit: "mejor ajuste para un colectivo anonimo y no simultaneo",
      rationale: "hace visible que la identidad masculina Wayuu no depende de una sola prenda y evita fingir que todos visten igual",
      source_refs: WARDROBE_SOURCES,
    },
  ],
  chosen_ensemble: {
    id: "four_complete_contextual_sets",
    rationale: "la variacion de edad aparente, capa dominante, color y carga conserva pertenencia compartida sin uniforme ni jerarquia inventada",
    specification: "cuatro hombres completos: Kotin sobre Kemiisa; She'etebe de cuerpo entero; Kemiisa con Asheinpalajanaa de viaje; y Piiraneeru de mangas con Wusi/Aichee secundario; todos con faja y calzado, solo dos con sombrero y uno con bolsa de viaje",
    layers: [
      "cuatro capas superiores o de cuerpo entero inequívocamente distintas",
      "cuatro fajas sobrias que sostienen bases secundarias sin dominar la silueta",
      "cuatro pares de waireñas o abarcas completas",
      "dos sombreros funcionales y una bolsa de viaje distribuidos, nunca repetidos como uniforme",
    ],
  },
  attire: dimension("include_contextual", "editorial_reversible", "la fuente exige hombres locales pero no fija conjuntos; se seleccionan cuatro sistemas completos del repertorio documentado", "A: Kotin ocre sobre Kemiisa cruda; B: She'etebe arcilla de hombros a rodillas; C: Kemiisa azul gris con Asheinpalajanaa arena envolvente; D: Piiraneeru verde trupillo de mangas sobre base Wusi/Aichee carbón y si'ira ocre"),
  footwear: dimension("include_contextual", "institutional_general", "calzado documentado completa cada silueta y responde a recorridos sobre suelo semiarido", "tres pares de waireñas simples y un par de Asapatshee oscuros, todos completos y sin adorno inventado"),
  accessories: dimension("include_contextual", "institutional_general", "solo se distribuyen piezas funcionales documentadas para viaje y sol", "Wom/Woma bajo en A, Ekiialiiijaa liso en D y una Kapateera tubular lisa en C; B no lleva accesorio"),
  face_paint: dimension("omit_contextually", "source_specific", "el relato no fija yonna, visita ritual, proteccion solar pintada ni motivo exacto para ninguno de los hombres"),
  wardrobe_profile: "mixed_collective",
  wardrobe_refs: [
    "kotin_male_manta",
    "she_etebe_sheewe",
    "asheinpalajanaa_male_wrap",
    "kemiisa_piiraneeru",
    "wusi_aichee",
    "sira_kumusu_aamuushi",
    "wairenas",
    "asapatshee_koisuuttu_kuttiira",
    "wom_woma_hat",
    "kapateera_travel_bag",
  ],
  wardrobe_visual_contract: contract(
    "cuatro siluetas no uniformes: paño Kotin amplio, She'etebe de cuerpo entero, envolvente Asheinpalajanaa y camisa Piiraneeru de mangas",
    "cada frente muestra torso cubierto y separa capa dominante, faja, base secundaria y calzado",
    "perfiles y espaldas conservan el volumen de mantas o camisa; la envolvente y la bolsa mantienen profundidad propia",
    "rechazar si alguna figura queda definida solo por la cintura, si las cuatro repiten una prenda o si la capa superior se convierte en poncho, falda o torso descubierto",
  ),
  source_refs: [STORY_SOURCE, ...WARDROBE_SOURCES],
  continuity_markers: [
    "exactamente cuatro adultos con rostro, edad aparente, color y conjunto distintos",
    "A con Kotin ocre, Kemiisa cruda y Wom/Woma bajo",
    "B con She'etebe arcilla y abarcas oscuras",
    "C con Kemiisa azul gris, Asheinpalajanaa arena y Kapateera lisa",
    "D con Piiraneeru verde trupillo, si'ira ocre y Ekiialiiijaa carbón",
    "ninguna pintura, patrón, marca clanil, arma, herida o estado petreo",
  ],
  collective_wardrobe: {
    variation_axis: "edad aparente, capa dominante, movilidad y carga funcional",
    anti_uniformity_rule: "las cuatro siluetas deben diferenciarse a primera vista; ninguna prenda o color dominante puede repetirse como uniforme",
    member_groups: [
      {
        id: "adulto_a_kotin",
        scope: "un adulto mayor",
        ensemble: "Kotin ocre amplio sobre Kemiisa cruda, si'ira carbón, waireñas oscuras y Wom/Woma bajo",
        rationale: "manta masculina completa y ligera para exterior",
        source_refs: ["paz_ipuana_aleya_tomo_ii_2016", "artesanias_womu_wayuu"],
        wardrobe_profile: "male",
        wardrobe_refs: ["kotin_male_manta", "kemiisa_piiraneeru", "sira_kumusu_aamuushi", "wairenas", "wom_woma_hat"],
      },
      {
        id: "adulto_b_sheewe",
        scope: "un adulto de mediana edad",
        ensemble: "She'etebe arcilla de cuerpo entero, si'ira índigo y Asapatshee oscuros",
        rationale: "manta masculina holgada y dominante sin accesorios de rango",
        source_refs: ["paz_ipuana_aleya_tomo_ii_2016"],
        wardrobe_profile: "male",
        wardrobe_refs: ["she_etebe_sheewe", "sira_kumusu_aamuushi", "asapatshee_koisuuttu_kuttiira"],
      },
      {
        id: "adulto_c_viaje",
        scope: "un adulto viajero",
        ensemble: "Kemiisa azul gris, Asheinpalajanaa arena envolvente, si'ira rojo apagado, waireñas y Kapateera lisa",
        rationale: "conjunto de viaje completo con carga funcional singular",
        source_refs: ["paz_ipuana_aleya_tomo_ii_2016", "artesanias_tejeduria_wayuu_2016"],
        wardrobe_profile: "male",
        wardrobe_refs: ["kemiisa_piiraneeru", "asheinpalajanaa_male_wrap", "sira_kumusu_aamuushi", "wairenas", "kapateera_travel_bag"],
      },
      {
        id: "adulto_d_camisa",
        scope: "un adulto joven",
        ensemble: "Piiraneeru verde trupillo de mangas, Wusi/Aichee carbón secundario, si'ira ocre, waireñas y Ekiialiiijaa liso",
        rationale: "reconoce la convivencia historica entre camisa y piezas Wayuu sin desnudar el torso",
        source_refs: ["icanh_organizacion_social_guajira_1950", "banrep_moser_hombres_wayuu_1961", "paz_ipuana_aleya_tomo_ii_2016"],
        wardrobe_profile: "male",
        wardrobe_refs: ["kemiisa_piiraneeru", "wusi_aichee", "sira_kumusu_aamuushi", "wairenas", "ekiialiiijaa_head_or_waist_cloth"],
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

export const WAYUU_MAJAYURA_PURO_DIRECTIONS_V3 = {
  "majayura_puro__identity_sheet": simple({
    title: "Majayura de Puró · identidad humana bien vestida",
    focus: "Ficha cuadrada de una unica joven adulta de apariencia humana representada exactamente TRES veces como vistas de estudio del mismo modelo corporal: frente en tres cuartos, perfil completo y espalda en tres cuartos. Mantiene el mismo rostro, trenza, Wayuushein índigo amplia, pechera arcilla, Wom/Woma ocre y WAIREÑAS ABIERTAS carbón: cada pie muestra dedos, talón y dos tiras anchas separados, nunca zapato cerrado. Su porte es autónomo, sobrio y atento; no posa, ofrece, invita ni seduce. Las tres vistas ocupan un solo territorio de paper craft continuo con profundidad, nunca paneles.",
    scene: "Territorio semiarido al amanecer construido en siete planos: piedras oscuras cercanas, tres vistas a distintas distancias, exactamente tres cardones pequeños de muchos tallos rectos que nacen desde la base y carecen de brazos laterales, loma baja y cielo mate. No hay agaves, aloes, yuccas ni plantas en roseta. El mundo llena los cuatro bordes y oculta por completo el soporte.",
    must: [
      "exactamente tres vistas de la misma y unica joven adulta: tres cuartos frontal, perfil y tres cuartos posterior",
      "mismo rostro ovalado, trenza negra baja, estatura y proporciones en las tres vistas",
      "Wayuushein índigo larga hasta tobillos, amplia y con mangas, pechera rojo arcilla, Wom/Woma ocre y waireñas abiertas carbón con dedos y talón visibles",
      "exactamente tres cardones pequeños: cada cardón tiene varios tallos rectos desde la base, sin brazos laterales ni roseta de hojas",
      "frente, perfil y espalda conservan el volumen de cuerpo entero y la caída amplia de la manta",
      "postura erguida y autónoma sin gesto de invitación, contacto o disponibilidad",
      "paper craft fotografiado con cantos internos, pliegues, sombras de contacto, aire y siete profundidades full bleed",
    ],
    avoid: [
      "man, companion, victim, cave interior, white stone, Papach, treasure, secret object or second character",
      "tight dress, slit, neckline, transparent fabric, exposed legs, bare shoulders, heels, jewelry, cosmetics or fashion editorial pose",
      "closed shoe, loafer, boot, sneaker, ballet flat, covered toes, covered heel, sock or foot hidden by the manta",
      "saguaro with arms, branching cactus, agave, aloe, maguey, yucca, pineapple, bromeliad or any spiky leaf rosette",
      "three different women, extra limbs, cropped feet, panel layout, turnaround labels or neutral studio sheet",
    ],
    culture: MAJAYURA_CULTURE,
    human: true,
  }),
  "majayura_puro__state_sheet": simple({
    title: "Majayura de Puró · aparición de día, de noche y guía",
    focus: "Hoja horizontal de estados en un unico paisaje continuo, con la misma joven adulta exactamente TRES veces y sin hombres: a la izquierda aparece de dia entre luz lateral; al centro aparece de noche bajo cielo oscuro sin brillo propio; a la derecha camina de espaldas en tres cuartos hacia un umbral rocoso lejano. Conserva exactamente rostro, trenza, Wayuushein índigo, pechera arcilla, Wom/Woma ocre y WAIREÑAS ABIERTAS carbón: dedos, talón y dos tiras anchas deben leerse incluso bajo el ruedo. La variación nace de luz, distancia, orientación y oclusión, no de metamorfosis física.",
    scene: "Panorama 16:9 que pasa materialmente de mañana a noche y vuelve a luz fría de umbral mediante capas de cielo superpuestas, sin divisores. Primer plano de piedra, exactamente cuatro cardones de tallos rectos nacidos desde la base y sin brazos, tres posiciones humanas en planos medios separados y una cueva muy lejana al fondo derecho. Ninguna planta forma roseta de hojas.",
    must: [
      "exactamente tres apariciones de la misma mujer y ningun otro cuerpo: diurna, nocturna y guía hacia Puro",
      "idéntica Wayuushein índigo larga con mangas, pechera arcilla, Wom/Woma ocre, trenza baja y waireñas abiertas carbón con dedos y talón visibles en los tres estados",
      "exactamente cuatro cardones: todos con varios tallos rectos desde la base, sin brazos laterales o hojas en roseta",
      "estado nocturno visible por contraste material y sombras, sin transparencia, aura, ojos luminosos o piel fantasmal",
      "estado guía caminando de espaldas en tres cuartos, sin tocar, arrastrar o mirar seductoramente a nadie",
      "cueva pequeña y distante solo como destino espacial, no puerta, portal o casa",
      "panorama full bleed con siete capas físicas, oclusiones, cantos internos y sombras reales entre distancias",
    ],
    avoid: [
      "man, follower, couple, embrace, invitation, erotic pursuit, victim, corpse, drowning, transformation or stone body",
      "different outfit by state, missing sleeves, shortened manta, bare feet, loose hair, lost hat or changed face",
      "closed shoe, loafer, boot, sneaker, ballet flat, covered toes, covered heel, sock or hidden footwear",
      "saguaro with arms, branching cactus, agave, aloe, maguey, yucca, pineapple, bromeliad or any spiky leaf rosette",
      "three panels, triptych frame, comic sequence, day-night icons, labels or VFX transition",
    ],
    culture: MAJAYURA_CULTURE,
    human: true,
  }),
  "hombres_alcanzados_puro__group_grammar": simple({
    title: "Hombres de Puró · cuatro conjuntos Wayuu completos",
    focus: "Gramática horizontal de exactamente CUATRO hombres Wayuu adultos anónimos diseñados como casos posibles, no compañeros. A la izquierda un mayor viste Kotin ocre amplio sobre Kemiisa cruda; detrás un adulto usa She'etebe arcilla de cuerpo entero; en el centro derecho un viajero lleva Kemiisa azul gris, Asheinpalajanaa arena y Kapateera lisa; a la derecha un adulto joven viste Piiraneeru verde trupillo de mangas con base secundaria, si'ira ocre y paño liso. Cada uno tiene calzado completo. Se diferencian por edad aparente, rostro, postura, capa dominante, color y distancia.",
    scene: "Un solo territorio 16:9 continuo, no una escena simultanea: cuatro pequeñas plataformas naturales de suelo conectadas por el mismo sendero, distribuidas de primer plano a fondo como muestrario espacial sin paneles. Exactamente cinco cardones bajos, cada uno con varios tallos rectos nacidos desde la base y sin brazos, y un unico trupillo bajo de copa extendida dan escala; no hay agaves, aloes, yuccas, rosetas, majayura o cueva.",
    must: [
      "exactamente cuatro hombres adultos de cuerpo completo, cada uno con rostro, manos y dos pies legibles",
      "A: Kotin ocre de hombros a bajo rodillas sobre Kemiisa cruda, faja, waireñas y Wom/Woma bajo",
      "B: She'etebe arcilla holgada de cuerpo entero, faja índigo y abarcas oscuras, sin sombrero",
      "C: Kemiisa azul gris, Asheinpalajanaa arena envolvente con volumen posterior, faja roja apagada, waireñas y una Kapateera tubular lisa",
      "D: Piiraneeru verde trupillo de mangas, base Wusi/Aichee carbón secundaria, si'ira ocre, waireñas y Ekiialiiijaa carbón liso",
      "cuatro siluetas, colores y edades aparentes claramente distintos; ningun uniforme repetido",
      "exactamente cinco cardones de tallos rectos desde la base y un trupillo bajo; ninguna planta en roseta o cactus con brazos",
      "paper craft full bleed con personas en cuatro profundidades, sombras de contacto, oclusiones y soporte exterior totalmente oculto",
    ],
    avoid: [
      "majayura, woman, companion expedition, leader, weapon, treasure seeker, relative search, corpse, drowning or stone transformation",
      "four identical outfits, repeated bare torso, repeated waist-only silhouette, missing upper layer, matching tourist costume or modern jeans uniform",
      "festival headdress, feather crown, face paint, necklace, rifle, staff, ritual object or clan marker",
      "saguaro with arms, branching cactus, agave, aloe, maguey, yucca, pineapple, bromeliad or any spiky leaf rosette",
    ],
    culture: MEN_CULTURE,
  }),
  "cueva_puro__spatial_model": simple({
    title: "Cueva sagrada de Puró · umbral no disponible",
    focus: "Modelo espacial aproximado y vacío de una cueva sagrada cuya interioridad no queda disponible. Dos masas de roca estratificada forman un umbral estrecho y profundo; cinco velos irregulares de piedra de papel se solapan detrás hasta cerrar la visión en oscuridad mate. Un sendero natural llega solo hasta una fractura del primer plano y se desvía antes de la abertura. No hay puerta, casa, tesoro, agua, voz visible, decoración, ofrenda o coordenada.",
    scene: "Vista oblicua baja 16:9 desde piedras del sendero: fractura cercana, desvío lateral, pared rocosa, umbral estrecho, cinco oclusiones interiores y loma posterior. Luz exterior cálida y oscuridad física azul carbón dentro de las capas.",
    must: [
      "una unica cueva rocosa con umbral estrecho y al menos cinco capas interiores que impiden ver un fondo disponible",
      "sendero que se desvía antes de entrar, sin señal, cerca, barrera o intervención humana",
      "ninguna persona, animal, figura, sombra corporal u objeto narrativo",
      "roca de papel en estratos arena, ocre, gris y carbón con pliegues, cantos internos y sombras profundas",
      "escala territorial incierta y no turística, sin mapa, nombre escrito o coordenada",
      "mundo full bleed en siete o más profundidades sin base, borde, cartón, mesa o estudio",
    ],
    avoid: [
      "door, gate, lock, closing entrance, house interior, temple, shrine, altar, torch, treasure, bottles, water pool, voices or glowing markings",
      "majayura, man, Papach, white stone, footprint, body, bones, skull or face in rock",
      "tourist cave, giant cavern spectacle, fantasy crystal, lava, stalactite cathedral, tunnel light or portal",
    ],
  }),
  "desorientacion_puro__phenomenon_rule": simple({
    title: "Desorientación de Puró · camino que pierde su orientación",
    focus: "Regla material sin cuerpos: un unico sendero de papel entra desde el primer plano y parece avanzar hacia una loma, pero tres cambios físicos de orientación hacen que su propia banda reaparezca detrás de estratos que deberían quedar al lado contrario. Exactamente TRES piedras oscuras de referencia conservan forma y tamaño, aunque sus sombras apuntan a direcciones incompatibles. El horizonte permanece estable; la desorientación ocurre en las relaciones entre capas, no mediante laberinto, texto o efecto digital.",
    scene: "Panorama 16:9 a altura baja: sendero cercano, tres piedras en plano medio, dos lomas superpuestas y cueva apenas sugerida muy lejos. Luz lateral única revela sombras contradictorias producidas por pliegues físicos y oclusiones reales.",
    must: [
      "un solo sendero continuo que reaparece fisicamente en posiciones incompatibles sin dividirse en caminos múltiples",
      "exactamente tres piedras oscuras de referencia con la misma forma y tamaño, separadas en profundidad",
      "sombras de las tres piedras orientadas de forma incompatible mientras el horizonte y la fuente de luz permanecen estables",
      "ninguna huella, persona, silueta, ojo, mano, criatura o escritura",
      "fenomeno legible por pliegues, oclusiones, cambios de distancia y materia de papel, no por aura o VFX",
      "paisaje full bleed con siete planos, aire y soporte exterior completamente oculto",
    ],
    avoid: [
      "maze, labyrinth walls, compass, map, signpost, arrows, footprints, rope, portal, mirror, optical illusion graphic or impossible CGI architecture",
      "majayura, man, Papach, white stone, sea, drowning, corpse or narrative scene",
    ],
  }),
  "secreto_y_silencio_puro__phenomenon_rule": simple({
    title: "Secretos de Puró · conocimiento que solo abre desde un ángulo",
    focus: "Regla material abstracta y territorial: siete estratos de roca y suelo de papel se pliegan como un relieve continuo. Desde el primer plano, tres bordes interiores rojo arcilla quedan visibles entre capas, como conocimiento parcial del territorio; al avanzar hacia el fondo, las mismas capas se solapan hasta ocultarlos por completo. No son libro, texto, tesoro, mapa, símbolos, objetos guardados ni boca sellada. La regla de silencio se expresa solo como visibilidad que se cierra al cambiar la posición.",
    scene: "Vista oblicua 16:9 dentro de un relieve continuo de cueva y territorio: tres aberturas laterales cercanas dejan ver color interior, dos pliegues medios lo reducen y una masa carbón al fondo lo oculta. Luz rasante cálida sin figuras.",
    must: [
      "exactamente tres bordes interiores rojo arcilla visibles en primer plano y ninguno visible al fondo",
      "siete o mas capas del mismo territorio que abren y ocultan por cambio de angulo, distancia y solapamiento",
      "ningun objeto que pueda apropiarse, leer, abrir, vender o transportar",
      "ninguna persona, rostro, boca, mano, oído, silueta o cuerpo",
      "regla maravillosa hecha con pliegues físicos, cantos internos, sombras de contacto y profundidad real",
      "composicion full bleed sin panel, marco, base o exterior de maqueta",
    ],
    avoid: [
      "book, scroll, writing, map, alphabet, glyph, rune, kana, clan mark, lock, key, treasure, gold, jewel, chest, bottle or water",
      "sealed lips, stitched mouth, whispering face, ear, voice wave, speech bubble, censorship symbol or warning sign",
      "glowing knowledge, divine light beam, magic particles, sacred geometry or digital abstraction",
    ],
  }),
  "piedra_blanca_movil_puro__phenomenon_rule": simple({
    title: "Piedra blanca móvil · distancia que retrocede hacia el mar",
    focus: "Fenómeno costero con UNA sola piedra blanca irregular visible en el plano más lejano, justo donde la orilla toca el mar. En el sendero quedan exactamente DOS hendiduras vacías de la misma silueta —una cercana y otra media— que marcan posiciones anteriores sin duplicar la piedra. Las tres posiciones se alejan progresivamente y forman una diagonal material hacia el agua. No hay mujer, hombre, movimiento visible, ahogamiento, huellas o transformación.",
    scene: "Panorama costero 16:9 visto muy bajo: hendidura vacía grande en primer plano, segunda hendidura menor en plano medio, única piedra blanca en orilla lejana, banda de mar azul mate y horizonte amplio. Luz lateral proyecta sombras coherentes y revela la ausencia.",
    must: [
      "exactamente una piedra blanca irregular visible y exactamente dos hendiduras vacías con su misma silueta",
      "diagonal clara de tres distancias progresivas desde tierra cercana hasta el borde del mar",
      "piedra final parcialmente tocada por una sola capa fina de agua, sin estar flotando o hundida",
      "ninguna persona, criatura, cuerpo, huella, mano, rostro, ropa o objeto adicional",
      "movimiento sugerido solo por ausencia, escala, oclusión y sombras físicas de paper craft",
      "costa full bleed con siete planos y sin soporte, borde, base, mesa o estudio",
    ],
    avoid: [
      "three stones, repeated physical copies, rolling rock, speed lines, splash, levitation, glowing trail, portal, beam or magic particles",
      "majayura body, mermaid, man following, drowning, waves over a person, corpse, Papach or human-shaped rock",
      "pearl, crystal, egg, moon, skull, monument, cairn, carved face or geological claim",
    ],
  }),
  "papach_piedra__object_sheet": simple({
    title: "Papach · piedra nombrada, no personaje",
    focus: "Ficha cuadrada del mismo modelo de una piedra llamada Papach mostrado exactamente TRES veces como vistas de estudio: frente bajo, perfil y parte posterior. Es una piedra irregular, compacta y no antropomorfa CONSTRUIDA DE FORMA INEQUIVOCA con exactamente NUEVE laminas gruesas de papel rasgado y comprimido: cinco carbón, tres arena y una veta blanca mate interrumpida. Los nueve bordes escalonados, las fibras, pliegues y uniones manuales deben dominar la superficie; nunca textura mineral real. Las tres vistas conservan exactamente contorno, grieta lateral y veta. No muestra transformación, cuerpo atrapado, rostro, extremidades, inscripción o pedestal; el nombre pertenece al registro, no aparece escrito en la imagen.",
    scene: "Suelo costero de papel oscuro continuo que llena el cuadro; tres vistas del mismo modelo se distribuyen en primer plano, medio y fondo cercano sin paneles. Una banda lejana de mar y cielo mate da escala sin convertirla en lugar turístico.",
    must: [
      "exactamente tres vistas de estudio del mismo y unico modelo Papach: frente bajo, perfil y posterior",
      "misma silueta compacta, grieta lateral y veta blanca mate interrumpida en las tres vistas",
      "forma inequívocamente pétrea y no humana, animal, estatua, ídolo o arquitectura",
      "exactamente nueve laminas gruesas de papel rasgado y comprimido por vista: cinco carbón, tres arena y una veta blanca mate interrumpida",
      "cantos escalonados, fibras largas, pliegues y uniones manuales visiblemente dominantes; ninguna textura mineral fotografica",
      "mar lejano secundario para escala, sin ola dramática, persona, cueva u objeto",
      "ficha full bleed 1:1 sin pedestal, base, borde, cartón, mesa o estudio",
    ],
    avoid: [
      "wise man, elder, shaman, piache, human face, eyes, mouth, limbs, torso, fossil, body inside stone or visible transformation",
      "three different rocks, cairn, statue, idol, tombstone, monument, altar, rune, inscription, name, symbol or clan mark",
      "white moving stone, pearl, crystal, treasure, gold, supernatural glow, smoke or magic particles",
      "real rock, photographic stone, mineral grain, granite, basalt, sandstone, polished geological specimen or seamless stone texture",
    ],
  }),
};

export const WAYUU_MAJAYURA_PURO_MODEL_IDS_V3 = Object.keys(WAYUU_MAJAYURA_PURO_DIRECTIONS_V3);

export default WAYUU_MAJAYURA_PURO_DIRECTIONS_V3;
