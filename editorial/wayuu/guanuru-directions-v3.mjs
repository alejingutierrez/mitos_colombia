/**
 * Direcciones del lote 20 · Guanuru.
 *
 * La ficha editorial vigente compone motivos etnograficos dispersos; no se
 * presenta como transcripcion de un cuento autonomo. Guanuru, Wanuru, Yoruja y
 * el pariente muerto permanecen separados. La mariposa blanca pertenece al
 * motivo de visita de wanuru/pariente, nunca a una anatomia fija de Guanuru.
 */

const SOURCES = [
  "icanh_aspectos_magia_guajira",
  "mincultura_caracterizacion_wayuu",
  "artesanias_tejeduria_wayuu_2016",
  "paz_ipuana_aleya_tomo_ii_2016",
  "icanh_organizacion_social_guajira_1950",
];

const COMMON_AVOID = [
  "European ghost, translucent spirit, white sheet, angel, demon, devil, skeleton, zombie, horror makeup or Christian afterlife iconography",
  "fixed spirit hierarchy, bestiary label, monster anatomy, glowing eyes, horns, fangs, claws, smoke body or black hood",
  "neon aura, magic ring, portal, rune, fantasy particles, digital smoke, supernatural VFX or lens flare",
  "blood, corpse detail, wound, disease spectacle, violence, sexual content, nudity, humiliation or erotic pose",
  "invented kana, clan mark, tattoo, face motif, ceremonial symbol, amulet, altar, cross, church or grave emblem",
  "generic pan-indigenous costume, feather war bonnet, Andean poncho, fantasy shaman or cowboy stereotype",
  "text, label, caption, title, number, arrow, diagram, comic panel, watermark or signature",
  "flat collage, 2D illustration, smooth CGI, plastic figurine, visible cardboard edge, base, pedestal, table, studio or exterior of the diorama",
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

function wayuuPerson({
  person, profile, moment, activity, chosen, alternative, specification, layers,
  wardrobeRefs, footwear, accessories, continuity, visualContract,
}) {
  return {
    cultural_scope: "wayuu",
    person_scope: person,
    temporal_register: "historic_postcontact_indeterminate",
    time_basis: "Pineda registra estos motivos en el siglo XX y el craneo de caballo confirma una practica postcontacto; la ropa individual no esta descrita y se resuelve como traduccion editorial reversible de repertorios Wayuu documentados, nunca como reconstruccion prehispanica",
    narrative_moment: moment,
    activity_context: activity,
    occasion_context: "mixed_narrative",
    considered_ensembles: [
      { id: "complete_selected", label: chosen, fit: "elegido por cobertura, funcion y continuidad", rationale: "la capa dominante conserva una silueta completa sin reducir identidad a una prenda inferior", source_refs: SOURCES },
      { id: "complete_alternative", label: alternative, fit: "plausible pero no elegido", rationale: "tambien esta documentado, pero distingue peor a esta persona dentro del elenco", source_refs: SOURCES },
    ],
    chosen_ensemble: { id: "complete_selected", rationale: "conjunto Wayuu completo, sobrio y reversible para una persona individual", specification, layers },
    attire: dimension("include_contextual", "editorial_reversible", "la fuente fija persona y accion, no el corte; se usa una capa Wayuu dominante y legible", specification),
    footwear: dimension("include_contextual", "institutional_general", "el conjunto se completa sin convertir pies descalzos en marcador de antiguedad", footwear),
    accessories: accessories
      ? dimension("include_contextual", "source_specific", "solo se conserva un elemento funcional y no ceremonial", accessories)
      : dimension("omit_contextually", "source_specific", "el motivo no describe carga, joya, tocado, instrumento o insignia para esta persona"),
    face_paint: dimension("omit_contextually", "source_specific", "no se documentan ocasion, material, funcion y motivo exactos para este rostro; no se inventa pintura para aumentar tradicionalidad"),
    wardrobe_profile: profile,
    wardrobe_refs: wardrobeRefs,
    wardrobe_visual_contract: visualContract,
    source_refs: SOURCES,
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

const DEAD_RELATIVE_CULTURE = wayuuPerson({
  person: "pariente Wayuu adulto muerto, hombre por decision editorial reversible y no por dato de Pineda",
  profile: "male",
  moment: "recuerdo vivido y aparicion en sueño como el mismo individuo reconocible",
  activity: "permanecer de pie y mirar a la familia sin amenaza, gesto liturgico ni cuerpo espectral",
  chosen: "Kotin ocre amplio sobre Kemiisa cruda, waireñas y faja lisa secundaria",
  alternative: "Kemiisa indigo con envolvente masculina arcilla y abarcas",
  specification: "Kotin ocre amplio y dominante desde hombros hasta bajo las rodillas sobre Kemiisa cruda de mangas; faja carbon secundaria y waireñas oscuras",
  layers: ["Kemiisa cruda de mangas", "faja carbon secundaria", "Kotin ocre amplio y dominante", "waireñas oscuras"],
  wardrobeRefs: ["kotin_male_manta", "kemiisa_piiraneeru", "asapatshee_koisuuttu_kuttiira"],
  footwear: "abarcas oscuras simples, completas y sin adorno",
  accessories: null,
  continuity: ["rostro adulto alargado", "cabello negro corto ondulado", "Kotin ocre amplio", "Kemiisa cruda", "waireñas oscuras", "ninguna transparencia o palidez espectral"],
  visualContract: contract("Kotin ocre de hombros a bajo rodilla", "frente con Kemiisa y dos planos largos del Kotin", "perfil y espalda conservan el volumen continuo de la manta", "rechazar si el Kotin desaparece, se vuelve poncho, falda o tira de cintura"),
});

const OUTSU_CULTURE = wayuuPerson({
  person: "outsü Wayuu adulta de la reconstruccion editorial, especialista que canta y escucha sin uniforme ritual inventado",
  profile: "female",
  moment: "consulta domestica contenida para distinguir nombres y relaciones, no demostracion instructiva de ritual",
  activity: "escuchar sentada o de pie, cantar con manos visibles y vacias y observar a la familia",
  chosen: "Wayuushein indigo larga sobre pechera arcilla y waireñas oscuras",
  alternative: "Wayuushein ocre larga sobre pechera cruda y waireñas arcilla",
  specification: "Wayuushein indigo mate, larga, amplia y con mangas sobre pechera arcilla; waireñas oscuras; cabello negro con hebras grises en dos trenzas bajas",
  layers: ["pechera arcilla", "Wayuushein indigo larga y amplia", "waireñas oscuras", "dos trenzas bajas"],
  wardrobeRefs: ["wayuushein_manta", "pechera_female_underlayer", "wairenas"],
  footwear: "waireñas oscuras planas y completas",
  accessories: null,
  continuity: ["Wayuushein indigo larga", "pechera arcilla", "dos trenzas con hebras grises", "rostro de pomulos altos", "manos vacias", "rostro sin pintura"],
  visualContract: contract("Wayuushein indigo amplia de hombros a tobillos", "frente cubierto sobre pechera con mangas legibles", "perfil y espalda muestran caida larga continua y dos trenzas", "rechazar si la manta se vuelve vestido ceñido, tunica sin mangas o deja torso expuesto"),
});

const PATIENT_CULTURE = wayuuPerson({
  person: "habitante Wayuu adulto de la casa, hombre por decision editorial reversible y distinto del pariente muerto",
  profile: "male",
  moment: "antes de la fiebre, durante el cuidado y en recuperacion como la misma persona",
  activity: "vida domestica, reposo no grafico y retorno gradual a postura erguida",
  chosen: "Kemiisa azul humo bajo Kotin arcilla ligero, abarcas y faja secundaria",
  alternative: "Kemiisa ocre con envolvente masculina carbon y waireñas",
  specification: "Kemiisa azul humo de mangas bajo Kotin arcilla liviano y amplio; faja ocre secundaria, abarcas arena y cabello negro corto liso",
  layers: ["Kemiisa azul humo", "faja ocre secundaria", "Kotin arcilla amplio", "abarcas arena"],
  wardrobeRefs: ["kotin_male_manta", "kemiisa_piiraneeru", "asapatshee_koisuuttu_kuttiira"],
  footwear: "abarcas arena planas y completas",
  accessories: null,
  continuity: ["Kemiisa azul humo", "Kotin arcilla", "faja ocre", "rostro redondo", "cabello corto liso", "sin pintura"],
  visualContract: contract("Kotin arcilla amplio sobre Kemiisa azul humo", "frente separa camisa, faja y planos de manta", "perfil y espalda conservan cobertura superior incluso en reposo", "rechazar torso descubierto, ropa de hospital, manta de cama como traje o prenda inferior aislada"),
});

const FAMILY_CULTURE = {
  cultural_scope: "wayuu",
  person_scope: "exactamente cuatro familiares Wayuu adultos que regresan, protegen, consultan, limpian y cuidan sin convertirse en multitud generica",
  temporal_register: "historic_postcontact_indeterminate",
  time_basis: "la composicion de cuatro adultos es una decision editorial reversible; Pineda documenta practicas y relaciones familiares pero no entrega un elenco ni vestuario de esta escena compuesta",
  narrative_moment: "regreso y cuidado posterior, sin dramatizar miedo, enfermedad o ceremonia",
  activity_context: "observar la casa, cuidar una mariposa sin tocarla, ordenar fibras y llevar alimentos de forma sobria",
  occasion_context: "mixed_narrative",
  considered_ensembles: [
    { id: "four_varied_complete", label: "dos mujeres y dos hombres adultos con cuatro conjuntos completos distintos", fit: "elegido por diversidad y cobertura", rationale: "hace visible parentesco y reparto de acciones sin uniforme", source_refs: SOURCES },
    { id: "single_minimal_uniform", label: "cuatro cuerpos con una sola prenda inferior repetida", fit: "rechazado", rationale: "reduce repertorio, edad y rol a un estereotipo", source_refs: SOURCES },
  ],
  chosen_ensemble: {
    id: "four_varied_complete",
    rationale: "cada persona mantiene silueta completa y funcion distinta sin marcas claniles ni acumulacion ceremonial",
    specification: "mujer mayor con Wayuushein carbon y pechera ocre; mujer adulta con Wayuushein verde trupillo y pechera cruda; hombre mayor con Kotin crudo sobre Kemiisa arcilla; hombre adulto con Kemiisa indigo bajo Kotin ocre ligero; todos con calzado simple",
    layers: ["dos pecheras y dos Wayuushein largas distintas", "dos Kemiisa masculinas", "dos Kotin masculinos distintos", "cuatro pares de waireñas o abarcas"],
  },
  attire: dimension("include_contextual", "editorial_reversible", "la fuente no describe ropa; se escogen cuatro conjuntos Wayuu documentados, completos y no identicos", "dos mantas femeninas largas y dos combinaciones masculinas de Kemiisa con Kotin, cada una en color y volumen distintos"),
  footwear: dimension("include_contextual", "institutional_general", "el calzado completa cada conjunto sin convertir pies descalzos en autenticidad", "waireñas en las mujeres y abarcas en los hombres, discretas y completas"),
  accessories: dimension("omit_contextually", "source_specific", "ninguna persona recibe sombrero, mochila, joya, instrumento o insignia no descritos"),
  face_paint: dimension("omit_contextually", "source_specific", "no existe ocasion, material, funcion y motivo exactos para pintura en este grupo"),
  wardrobe_profile: "mixed_collective",
  wardrobe_refs: ["wayuushein_manta", "pechera_female_underlayer", "wairenas", "kotin_male_manta", "kemiisa_piiraneeru", "asapatshee_koisuuttu_kuttiira"],
  wardrobe_visual_contract: contract("cuatro siluetas completas: dos mantas largas y dos Kotin sobre camisas", "frente permite separar capa interior, capa dominante y calzado de cada persona", "perfil y espalda conservan volumen diferente en las cuatro figuras", "rechazar clones, uniforme, torso descubierto o colapso de los Kotin a tiras de cintura"),
  collective_wardrobe: {
    variation_axis: "genero, edad, color, capa dominante, postura, profundidad y tarea de cuidado",
    anti_uniformity_rule: "ninguna de las cuatro personas repite el conjunto completo de otra y ningun hombre queda con prenda inferior aislada",
    member_groups: [
      { id: "women", scope: "dos mujeres adultas de edades distintas", ensemble: "Wayuushein carbon y verde trupillo, ambas largas sobre pecheras distintas y waireñas", rationale: "dos siluetas femeninas completas sin uniformidad", source_refs: SOURCES, wardrobe_profile: "female", wardrobe_refs: ["wayuushein_manta", "pechera_female_underlayer", "wairenas"] },
      { id: "men", scope: "dos hombres adultos de edades distintas", ensemble: "Kotin crudo y ocre, ambos amplios sobre Kemiisa distintas y abarcas", rationale: "dos siluetas masculinas completas con cobertura superior dominante", source_refs: SOURCES, wardrobe_profile: "male", wardrobe_refs: ["kotin_male_manta", "kemiisa_piiraneeru", "asapatshee_koisuuttu_kuttiira"] },
    ],
  },
  source_refs: SOURCES,
  continuity_markers: ["exactamente cuatro adultos", "dos Wayuushein largas", "dos Kotin sobre Kemiisa", "cuatro rostros distintos", "ninguna pintura o marca clanil"],
};

export const WAYUU_GUANURU_DIRECTIONS_V3 = {
  "guanuru__presence_model": simple({
    title: "Guanuru · presencia menor sin cuerpo fijo",
    focus: "Una presencia localizada e intermedia se vuelve legible solo porque tres capas fisicas de un interior domestico se comprimen hacia un mismo punto: fibras del muro se curvan, una sombra estrecha queda ocluida entre planos y el aire visible entre papeles disminuye. No hay cuerpo, cara, animal, humo ni autor sobrenatural afirmado.",
    scene: "Interior full bleed de casa desocupada: fibras cercanas en primer plano, punto de compresion vacío en plano medio y una puerta cerrada al fondo.",
    must: ["un unico punto de presion material sin figura", "tres o mas profundidades fisicas", "distincion frente a huellas, mariposa y pariente", "papel mate con cantos y sombras reales"],
    avoid: ["butterfly, footprint, dead relative, sick person, piache, skull, grave", "monster, face, human silhouette, animal silhouette or black cloaked figure"],
  }),
  "yoruja__presence_model": simple({
    title: "Yoruja · continuidad territorial de los muertos",
    focus: "Una presencia de los muertos se expresa como continuidad material entre EXACTAMENTE TRES anclas espaciales inequívocas: a la izquierda del primer plano, un monticulo bajo de sepultura hecho de laminas de papel y sin marcador; al centro del plano medio, una grieta costera profunda; al extremo derecho del fondo, un único matorral aislado. Una misma franja de sombra natural conecta las tres anclas sin formar camino luminoso, cuerpo o jerarquia. No se fija apariencia humana ni ojos de fuego.",
    scene: "Crepusculo claro gris violeta, no noche: camara baja orientada desde el monticulo izquierdo hacia la grieta central y el matorral derecho, todos visibles y separados por aire y oclusiones.",
    must: ["un monticulo bajo de sepultura claramente visible a la izquierda del primer plano", "una grieta costera profunda claramente visible al centro del plano medio", "un unico matorral aislado claramente visible a la derecha del fondo", "una continuidad de sombra natural y no magica", "escala territorial full bleed", "ninguna figura antropomorfa", "iluminacion suficiente para leer capas de papel, aire y distancia"],
    avoid: ["cemetery cross, tombstone, king, crown, foreigner, fire eyes, ghost army, hell or underworld palace", "black horror night, starry graveyard, funeral mood, crushed shadows, underexposure or a single grave dominating the image"],
  }),
  "pariente_muerto_guanuru__identity_sheet": simple({
    title: "Pariente muerto · identidad recordada",
    focus: "Un unico hombre Wayuu adulto, recordado vivo y de cuerpo completo, con rostro individual repetible y conjunto completo. La muerte no cambia su piel, ojos, ropa ni materialidad; esta ficha fija la memoria familiar antes de la aparicion en sueño.",
    scene: "Borde tranquilo de una enramada, con fibras cercanas, figura sola en plano medio y territorio semiarido al fondo.",
    must: ["una sola figura adulta completa", "Kotin ocre dominante sobre Kemiisa cruda", "rostro y manos legibles", "dos abarcas abiertas oscuras con tiras visibles, identicas a la ficha de estados", "materialidad 3D full bleed"],
    avoid: ["closed shoes, boots, loafers, sneakers or black slip-ons"],
    culture: DEAD_RELATIVE_CULTURE,
    human: true,
  }),
  "pariente_muerto_guanuru__state_sheet": simple({
    title: "Pariente muerto · recuerdo y sueño",
    focus: "El mismo hombre aparece exactamente dos veces en un espacio continuo: como recuerdo diurno cerca de la casa y como presencia onirica nocturna al otro extremo. Rostro, cuerpo, Kotin, Kemiisa, faja y calzado son identicos; el sueño cambia luz, distancia y orientacion, nunca transparencia o anatomia.",
    scene: "Continuo doméstico COMPLETAMENTE VACIO salvo por las dos representaciones del mismo hombre: una en luz calida cercana y otra en sombra nocturna distante; sin paneles, portal ni borde divisorio.",
    must: ["exactamente dos figuras humanas en toda la imagen, ambas representaciones del mismo adulto", "continuidad facial y de indumentaria inequívoca", "dos pares visualmente identicos de abarcas abiertas oscuras con tiras", "diferencia por luz y distancia", "ninguna estetica de fantasma", "ninguna familia, espectador o persona secundaria"],
    avoid: ["horse, donkey, mule, goat, livestock, animal head, closed shoes or black slip-ons", "third person, extra person, family, woman, child, seated figure, observer, mourner, crowd or human silhouette in background"],
    culture: DEAD_RELATIVE_CULTURE,
    human: true,
  }),
  "mariposa_blanca_guanuru__identity_sheet": simple({
    title: "Mariposa nocturna blanca · identidad",
    focus: "Una unica mariposa nocturna blanca de tamaño mediano, con alas marfil mate, venacion fina sugerida por capas y cuerpo natural oscuro. No se afirma especie. Una fibra de chinchorro cercana da escala sin convertir el insecto en adorno, hada, emblema o forma de Guanuru.",
    scene: "Interior nocturno VACIO próximo al chinchorro: fibra en primer plano, mariposa posada en plano medio y pared de yotojoro desenfocada en capas al fondo; no hay ninguna persona ni forma humana.",
    must: ["exactamente una mariposa natural completa", "alas marfil con venacion discreta", "escala mediana frente a una fibra", "interior absolutamente vacio excepto por insecto, chinchorro y pared", "diferencia visual respecto de la mariposa de Ulepala"],
    avoid: ["giant moth, butterfly swarm, face on wings, eyespots, symbol, jewelry, spirit body, Guanuru anatomy or luminous insect", "person, woman, man, child, face, hand, body, human silhouette, hooded figure, shadow person, doll or blurred person in background"],
  }),
  "piache_guanuru__identity_sheet": simple({
    title: "Outsü de Guanuru · identidad",
    focus: "Una unica mujer outsü adulta, individual y de cuerpo completo, presentada como especialista que escucha y canta con sobriedad. Manos visibles y vacias; no lleva maraca porque la escena editorial no documenta instrumento. Su autoridad se reconoce por postura y atencion, no por disfraz, pintura o efectos.",
    scene: "Interior de enramada con una esterilla de papel, figura sola en plano medio y casa distante al fondo; ninguna consulta dramatizada.",
    must: ["una sola mujer adulta completa", "Wayuushein indigo larga sobre pechera", "dos trenzas con hebras grises", "manos vacias y rostro sin pintura"],
    avoid: ["maraca, rattle, patient, family, trance, exorcism, shaman costume, red ritual uniform or magic props"],
    culture: OUTSU_CULTURE,
    human: true,
  }),
  "habitante_enfermo_guanuru__identity_sheet": simple({
    title: "Habitante de la casa · identidad",
    focus: "Un unico hombre Wayuu adulto antes de enfermar, de cuerpo completo y distinto del pariente muerto. Rostro redondo, cabello negro corto liso y conjunto completo azul humo y arcilla fijan su continuidad; no hay sintomas, cama ni estetica medica.",
    scene: "Patio doméstico sobrio con fibras cercanas, figura sola de pie en plano medio y una puerta al fondo.",
    must: ["una sola figura adulta completa", "Kotin arcilla sobre Kemiisa azul humo", "rostro redondo individual", "cuerpo sano sin indicio medico"],
    culture: PATIENT_CULTURE,
    human: true,
  }),
  "habitante_enfermo_guanuru__state_sheet": simple({
    title: "Habitante de la casa · fiebre y recuperacion",
    focus: "La misma persona aparece exactamente tres veces en un continuo doméstico: erguida antes de la fiebre, reclinada y cuidada sin dolor espectacular, y nuevamente sentada en recuperacion. Mantener rostro y conjunto completos; la fiebre se sugiere por postura, paño de agua y luz, no por cambio grotesco del cuerpo.",
    scene: "Interior de casa en tres profundidades conectadas, con chinchorro y esterilla integrados sin viñetas ni division de catálogo.",
    must: ["exactamente tres representaciones del mismo adulto", "continuidad facial y de ropa", "reposo digno no grafico", "recuperacion legible por postura"],
    avoid: ["hospital, doctor, thermometer, rash, sweat spectacle, emaciation, corpse, possession, demon leaving body or family crowd", "horse, donkey, mule, goat, livestock, animal head, skull or animal outside the door"],
    culture: PATIENT_CULTURE,
    human: true,
  }),
  "familia_casa_guanuru__group_grammar": simple({
    title: "Familia de la casa · gramatica de cuidado",
    focus: "Exactamente cuatro adultos Wayuu distintos se distribuyen en profundidad y realizan acciones sobrias de regreso y cuidado: una mujer revisa la puerta cerrada, otra ordena fibras, un hombre despeja el paso y otro lleva un recipiente sencillo de alimento. Nadie grita, huye, posa o repite uniforme.",
    scene: "Continuo entre patio, puerta y penumbra interior, con cada adulto en plano distinto y la casa envolviendo la imagen full bleed.",
    must: ["exactamente cuatro adultos completos", "dos Wayuushein y dos Kotin sobre Kemiisa, todos diferentes", "cuatro acciones y posturas separadas", "parentesco sugerido sin emblemas"],
    avoid: ["children, crowd, clones, identical minimal lower garments, exposed torsos, ritual procession, panic, funeral ceremony or posed family portrait", "butterfly, moth, insect, skull, grave, animal or supernatural figure"],
    culture: FAMILY_CULTURE,
    human: true,
  }),
  "casa_desocupada_guanuru__spatial_model": simple({
    title: "Casa desocupada · modelo espacial",
    focus: "Una estructura doméstica Wayuu rectangular y sobria, desocupada pero cuidada y construida INEQUIVOCAMENTE en paper craft: postes como tubos de papel enrollado, yotojoro como varillas estrechas de papel, bahareque como estratos rasgados, paja como flecos recortados, puerta como laminas superpuestas y chinchorro como tiras entretejidas. Ningun material real. No es ruina, casa embrujada ni vivienda redonda universal.",
    scene: "Cámara situada dentro del patio y casi en el umbral, con fibras cercanas, puerta y chinchorro en plano medio y fondo interior; sin ver exterior de maqueta.",
    must: ["estructura rectangular con cada material traducido a papel visible", "patio, umbral e interior conectados", "puerta cerrada y chinchorro quieto", "cuatro o mas profundidades fisicas", "cantos, pliegues, fibras y sombras de papel legibles en toda la imagen"],
    avoid: ["people, butterfly, skull, grave, footprints, round hut, conical roof, haunted mansion, ruin, cobweb cliché or horror lighting", "real wood, real branches, real mud, real clay, real straw, real rope, photographic architecture or smooth 3D render"],
  }),
  "pasos_sin_huellas_guanuru__phenomenon_rule": simple({
    title: "Pasos sin huellas · regla de fenomeno",
    focus: "Un recorrido invisible se lee por una secuencia fisica de respuestas materiales: una fibra de piso apenas comprimida, una tira de cortina desplazada y una vasija de papel vibrando en tres profundidades. El suelo permanece intacto: no hay huellas, pies, cuerpo, sombra humana ni identidad sobrenatural asignada.",
    scene: "Interior full bleed desde suelo cercano hasta una puerta cerrada al fondo; la secuencia curva entre objetos sin línea dibujada.",
    must: ["tres respuestas materiales consecutivas", "suelo sin una sola huella", "recorrido legible por profundidad y oclusion", "ningun cuerpo o autor fijado"],
    avoid: ["footprint, shoe print, bare foot print, ghost feet, silhouette, motion line, glowing trail, dust VFX, Guanuru body or Yoruja body"],
  }),
  "craneo_caballo_proteccion__object_sheet": simple({
    title: "Craneo de caballo · objeto postcontacto",
    focus: "Un unico craneo de caballo limpio, seco y envejecido, construido en capas de papel marfil y arena con anatomia reconocible y sin tejido, sangre ni brillo. Se presenta como objeto postcontacto historicamente situado junto a una entrada, nunca como reliquia prehispanica, altar, monstruo o instruccion ritual.",
    scene: "Entrada doméstica en plano cercano, craneo sujeto de forma sobria a un poste de papel, umbral vacío en plano medio y pared de yotojoro al fondo.",
    must: ["exactamente un craneo equino completo y limpio", "escala real frente a poste y entrada", "papel marfil mate estratificado", "contexto doméstico postcontacto sobrio", "encuadre completamente vacio de personas"],
    avoid: ["living horse, dead horse body, blood, flesh, gore, human skull, horns, candle, offering, altar, pentagram, occult symbol or archaeological display", "person, hand, arm, finger, body, face, shadow person or human entering the frame"],
  }),
  "sepultura_guanuru__spatial_model": simple({
    title: "Sepultura familiar · modelo espacial",
    focus: "Una sepultura familiar sencilla y cuidada construida INEQUIVOCAMENTE por completo en paper craft: monticulo bajo hecho de laminas rasgadas color tierra, piedras como volumenes de papel arrugado, camino como estratos superpuestos y vegetacion recortada hoja por hoja. Ninguna tierra, roca o planta real. Un pequeño recipiente de papel queda subordinado al espacio sin mostrar ceremonia.",
    scene: "Territorio semiarido full bleed: fibras y piedras de papel cercanas, monticulo bajo en plano medio y matorral y serrania distante.",
    must: ["un unico monticulo bajo y cuidado", "sendero discreto y borde limpio", "escala espacial sin cuerpo humano", "tres profundidades territoriales", "cantos, capas, pliegues y fibras de papel visibles desde primer plano hasta montañas"],
    avoid: ["corpse, bones, skull, funeral, mourner, cross, tombstone, concrete grave, mausoleum, cemetery fence, clan mark, altar or ceremonial instruction", "real dirt, real sand, real stones, real succulent, photographic landscape or smooth CGI"],
  }),
};

export const WAYUU_GUANURU_MODEL_IDS_V3 = Object.keys(WAYUU_GUANURU_DIRECTIONS_V3);

export default WAYUU_GUANURU_DIRECTIONS_V3;
