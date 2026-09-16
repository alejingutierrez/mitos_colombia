/**
 * Direcciones especificas del lote 15 · El origen del fuego.
 *
 * Las tres versiones publicadas por Finol permanecen separadas. La indumentaria
 * humana usa repertorios Wayuu documentados como traduccion editorial reversible:
 * ningun personaje masculino queda resuelto con wayuco o torso descubierto como
 * conjunto completo y ninguna figura recibe pintura, kana o marca clanil inventada.
 */

const CLOTHING_SOURCES = [
  "finol_origen_fuego_2007",
  "paz_ipuana_aleya_tomo_ii_2016",
  "mincultura_caracterizacion_wayuu",
  "artesanias_tejeduria_wayuu_2016",
  "cinep_lo_que_somos_wayuu_2015",
];

const COMMON_AVOID = [
  "texto, rotulos, paneles, flechas, letras, numeros, marcas de agua o firma",
  "kana, marca clanil, pintura facial, joya ritual, corona o tocado inventado",
  "tocados panindigenas, fantasia sahariana, ropa prehispanica inventada o folclorismo",
  "bandas geometricas, bordados, kana, cenefas, dibujos o motivos textiles no documentados para esta persona y ocasion; mantener lisas las superficies solicitadas",
  "violencia explicita, quemaduras, sangre, castigo corporal, sexualizacion o humillacion",
  "fotografia realista, CGI liso, ilustracion plana, collage 2D o muñeco de plastico",
  "borde de carton, base, pedestal, mesa, estudio, marco o exterior del diorama",
];

function choice(id, label, fit, rationale, sourceRefs = CLOTHING_SOURCES) {
  return { id, label, fit, rationale, source_refs: sourceRefs };
}

function dimension(decision, evidence, rationale, specification) {
  return { decision, evidence, rationale, ...(specification ? { specification } : {}) };
}

function individualCulture({
  name,
  profile,
  moment,
  activity,
  chosen,
  alternative,
  layers,
  wardrobeRefs,
  attire,
  footwear,
  accessories,
  continuity,
}) {
  return {
    person_scope: name,
    temporal_register: "mythic_indeterminate",
    time_basis: "el relato fija identidad y accion pero no fecha ni describe un traje completo; se usa un repertorio Wayuu documentado como traduccion editorial reversible, no como reconstruccion prehispanica",
    narrative_moment: moment,
    activity_context: activity,
    occasion_context: activity.includes("viaj") || activity.includes("caza") ? "travel" : "mixed_narrative",
    considered_ensembles: [
      choice("chosen_complete", chosen, "elegido por cobertura, actividad y continuidad", "combina tipologias documentadas sin tratar el wayuco como traje completo ni acumular prendas ceremoniales"),
      choice("alternative_contextual", alternative, "plausible pero no elegido para este momento", "pertenece al repertorio documentado, aunque su cobertura, ocasion o silueta distraeria de la accion principal"),
      choice("loincloth_only", "wayuco aislado, torso descubierto y pies descalzos", "rechazado por reductivo", "confunde una prenda base con el conjunto masculino Wayuu y usa desnudez como atajo de autenticidad"),
    ],
    chosen_ensemble: {
      id: "chosen_complete",
      rationale: "hace legibles edad, accion y pertenencia sin inventar una moda mitica unica",
      specification: chosen,
      layers,
    },
    attire: dimension("include_contextual", "editorial_reversible", "las tipologias estan documentadas pero su combinacion exacta en este tiempo mitico es una decision reversible", attire),
    footwear: dimension("include_documented", "institutional_general", "el calzado Wayuu completa el conjunto y evita convertir pies descalzos en sinonimo de antiguedad", footwear),
    accessories: accessories
      ? dimension("include_contextual", "editorial_reversible", "el accesorio responde a actividad y no funciona como emblema etnico universal", accessories)
      : dimension("omit_contextually", "source_specific", "el momento no necesita joyeria, tocado, mochila ornamental ni insignia"),
    face_paint: dimension("omit_contextually", "source_specific", "ninguna de las tres versiones fija yonna, visita, proteccion solar o ritual con forma y funcion exactas de pintura para esta figura"),
    wardrobe_profile: profile,
    wardrobe_refs: wardrobeRefs,
    source_refs: CLOTHING_SOURCES,
    continuity_markers: continuity,
  };
}

const CULTURE = {
  siki: individualCulture({
    name: "Siki o Makutulain, joven Wayuu adulto en su estado humano",
    profile: "male",
    moment: "vida domestica y apertura de la gran huerta antes de refugiarse en las maderas",
    activity: "descansar en chinchorro y luego trabajar de pie con la pala bajo sol abierto",
    chosen: "Kemiisa color crudo de manga completa, con ruedo a mitad del muslo y silueta inequívoca de camisa, sobre Wusi/Aichee opaco ocre, S'ira carbon, waireñas arcilla y Wom bajo de fibra natural",
    alternative: "Kotin masculino amplio sobre wayuco y faja, mas apropiado para desplazamiento o presentacion que para cavar",
    layers: ["Wusi/Aichee opaco ocre", "S'ira carbon", "Kemiisa cruda de manga larga con ruedo a mitad del muslo", "waireñas arcilla", "Wom bajo de fibra natural"],
    wardrobeRefs: ["wusi_aichee", "sira_kumusu_aamuushi", "kemiisa_piiraneeru", "wairenas", "wom_woma_hat"],
    attire: "Kemiisa cruda completa y suelta, con ruedo a mitad del muslo y nunca hasta la pantorrilla o el tobillo, sobre Wusi ocre sujeto por S'ira carbon; torso, cadera y piernas cubiertos de manera funcional",
    footwear: "waireñas planas arcilla",
    accessories: "Wom bajo liso que protege del sol; la pala pertenece a su propia ficha y no se usa como insignia",
    continuity: ["Kemiisa cruda", "Wusi ocre", "S'ira carbon", "Wom bajo", "rostro adulto estrecho y cabello negro corto", "sin pintura facial"],
  }),
  maajua: individualCulture({
    name: "Maajua, mujer Wayuu adulta y madre",
    profile: "female",
    moment: "entrega de semillas y cuidado familiar antes de la transformacion en perdiz bola",
    activity: "caminar, cargar un pequeño atado de semillas y observar la huerta",
    chosen: "Wayuushein/ashein larga arcilla roja, lisa, amplia y con mangas sobre pechera arena, waireñas oscuras y cabello en dos trenzas bajas",
    alternative: "manta festiva bordada con pintura y adorno de yonna, impropia de una escena de trabajo y sin motivo documentado",
    layers: ["pechera arena opaca", "wayuushein larga arcilla roja con mangas", "waireñas oscuras"],
    wardrobeRefs: ["wayuushein_manta", "pechera_female_underlayer", "wairenas"],
    attire: "manta larga arcilla roja, lisa y de mangas amplias sobre pechera arena; sin aberturas sensualizadas ni bordados",
    footwear: "waireñas planas carbon",
    continuity: ["manta arcilla roja", "dos trenzas negras bajas", "rostro ovalado de pomulos altos", "sin joyas, patrones o pintura"],
  }),
  suegra: individualCulture({
    name: "madre de Maajua, mujer Wayuu mayor",
    profile: "female",
    moment: "recorrido por la huerta antes de la transformacion en Yoto",
    activity: "caminar entre cultivos y orientarse bajo el sol y al crepusculo",
    chosen: "Wayuushein larga indigo carbon lisa sobre pechera arcilla, waireñas arena y Womu bajo sin banda decorada",
    alternative: "manta contemporanea profusamente bordada, visualmente dominante y no descrita por el relato",
    layers: ["pechera arcilla", "wayuushein indigo carbon completa", "waireñas arena", "Womu bajo liso"],
    wardrobeRefs: ["wayuushein_manta", "pechera_female_underlayer", "wairenas", "wom_woma_hat"],
    attire: "manta larga indigo carbon de mangas amplias sobre pechera arcilla; volumen digno y comodo para una mujer mayor",
    footwear: "waireñas arena",
    accessories: "Womu bajo de fibra natural como proteccion funcional, no tocado ceremonial",
    continuity: ["manta indigo carbon", "Womu bajo", "cabello gris recogido", "rostro ancho con lineas de edad", "sin pintura"],
  }),
  mouwa: individualCulture({
    name: "Mouwa, joven Wayuu adulta de identidad narrativa abierta",
    profile: "female",
    moment: "encuentro previo a la retirada de Siki, sin afirmar transformacion en paloma",
    activity: "permanecer de pie a distancia respetuosa en un sendero de la huerta",
    chosen: "Wayuushein larga verde trupillo apagado, lisa, con mangas sobre pechera cruda y waireñas arcilla",
    alternative: "manta blanca alada o vestido con plumas para sugerir paloma, rechazado por convertir una hipotesis en anatomia",
    layers: ["pechera cruda", "wayuushein verde trupillo completa", "waireñas arcilla"],
    wardrobeRefs: ["wayuushein_manta", "pechera_female_underlayer", "wairenas"],
    attire: "manta larga verde trupillo, lisa, amplia y opaca sobre pechera cruda",
    footwear: "waireñas planas arcilla",
    continuity: ["manta verde trupillo", "una trenza negra sobre la espalda", "rostro joven redondo", "ningun rasgo de ave o pintura"],
  }),
  junuunay: individualCulture({
    name: "Junuunay, joven Wayuu adulto de la segunda version",
    profile: "male",
    moment: "aproximacion a la gruta y transporte oculto de exactamente dos brasas",
    activity: "viajar, protegerse del frio narrado y guardar un morral pequeño sin mostrar la transferencia completa",
    chosen: "Kemiisa azul humo de manga larga y ruedo sobre la rodilla, inequívocamente camisa, sobre Wusi/Aichee carbon y S'ira ocre; Kotin arena plegado como capa separada sobre un hombro, waireñas oscuras y Ekiialiiijaa liso en la cabeza",
    alternative: "Asheinpalajanaa amplio de fiesta o paseo, demasiado voluminoso para ocultar y mover el morral con claridad",
    layers: ["Wusi carbon", "S'ira ocre", "Kemiisa azul humo de manga larga con ruedo sobre la rodilla", "Kotin arena plegado y separado de la camisa", "waireñas oscuras", "Ekiialiiijaa liso"],
    wardrobeRefs: ["wusi_aichee", "sira_kumusu_aamuushi", "kemiisa_piiraneeru", "kotin_male_manta", "wairenas", "ekiialiiijaa_head_or_waist_cloth"],
    attire: "Kemiisa azul humo con silueta de camisa y ruedo sobre la rodilla, nunca tunica al tobillo; Wusi carbon y S'ira ocre debajo; Kotin arena plegado como abrigo contextual separado",
    footwear: "waireñas carbon de suela plana",
    accessories: "Ekiialiiijaa liso en cabeza; el morral de dos brasas se conserva como objeto narrativo separado",
    continuity: ["Kemiisa azul humo", "Kotin arena plegado", "S'ira ocre", "Ekiialiiijaa", "rostro alargado y cabello negro", "sin pintura"],
  }),
  kenaa: individualCulture({
    name: "Kenáa, joven cazador Wayuu adulto en su estado humano",
    profile: "male",
    moment: "recepcion de una brasa antes de transformarse en cocuyo",
    activity: "caza y desplazamiento diurno-nocturno con manos libres",
    chosen: "Kemiisa ocre tostado de manga larga sobre Wusi carbon, S'ira arena, Asapatshee/Kuttiira oscuras y Wom bajo",
    alternative: "She'etebe amplia de rango, sin base para atribuirle estatus y poco funcional para la caza",
    layers: ["Wusi carbon", "S'ira arena", "Kemiisa ocre tostado", "Asapatshee oscuras", "Wom bajo"],
    wardrobeRefs: ["wusi_aichee", "sira_kumusu_aamuushi", "kemiisa_piiraneeru", "asapatshee_koisuuttu_kuttiira", "wom_woma_hat"],
    attire: "Kemiisa ocre tostado suelta y completa sobre Wusi carbon con S'ira arena",
    footwear: "Asapatshee/Kuttiira oscuras sencillas",
    accessories: "Wom bajo de fibra; arco de caza simple solo cuando la vista lo requiere",
    continuity: ["Kemiisa ocre", "S'ira arena", "Wom bajo", "rostro triangular", "sin marcas brillantes en estado humano ni pintura"],
  }),
  serumaa: individualCulture({
    name: "Serumáa, niño Wayuu en su estado humano",
    profile: "child_male",
    moment: "señalamiento de las maderas antes de transformarse en Sikiyuu",
    activity: "estar de pie y señalar a distancia, sin manipular fuego ni reproducir una tecnica",
    chosen: "Kemiisa infantil corta pero holgada color crudo sobre Wusi azul carbon, S'ira ocre y waireñas pequeñas arcilla",
    alternative: "wayuco infantil aislado con torso y pies descubiertos, rechazado por exposicion y reduccion cultural",
    layers: ["Wusi azul carbon opaco", "S'ira ocre", "Kemiisa infantil cruda", "waireñas pequeñas arcilla"],
    wardrobeRefs: ["wusi_aichee", "sira_kumusu_aamuushi", "kemiisa_piiraneeru", "wairenas"],
    attire: "Kemiisa infantil cruda completa y opaca sobre Wusi azul carbon con S'ira ocre",
    footwear: "waireñas pequeñas arcilla",
    continuity: ["Kemiisa cruda", "Wusi azul carbon", "S'ira ocre", "cabello negro corto", "edad infantil clara y sin pintura"],
  }),
  kasemashi: individualCulture({
    name: "Kasemashi, niño Wayuu vivaz de la tercera version",
    profile: "child_male",
    moment: "practica con arco antes de que la flecha se convierta en Awa'alas",
    activity: "moverse y tensar un arco de tamaño infantil en territorio abierto",
    chosen: "Kemiisa infantil verde salvia de manga al codo sobre Wusi ocre, S'ira carbon, waireñas arena y Wom pequeño",
    alternative: "atuendo heroico de arquero con cuero, plumas y armadura, incompatible con el relato y la cultura material documentada",
    layers: ["Wusi ocre opaco", "S'ira carbon", "Kemiisa verde salvia", "waireñas arena", "Wom pequeño"],
    wardrobeRefs: ["wusi_aichee", "sira_kumusu_aamuushi", "kemiisa_piiraneeru", "wairenas", "wom_woma_hat"],
    attire: "Kemiisa infantil verde salvia, holgada y completa sobre Wusi ocre con S'ira carbon",
    footwear: "waireñas arena",
    accessories: "Wom pequeño completamente liso, sin banda, zigzag o motivo; arco y flecha lisos sin insignias",
    continuity: ["Kemiisa verde salvia", "Wom pequeño", "S'ira carbon", "cabello negro abundante", "rostro infantil vivaz sin pintura"],
  }),
  maleiwaOld: individualCulture({
    name: "Maleiwa en apariencia de hombre Wayuu viejo y mendicante",
    profile: "male",
    moment: "peticion del arco a Kasemashi en la tercera version",
    activity: "viaje a pie y conversacion serena, sin convertir edad o pobreza en disfraz",
    chosen: "Kotin masculino largo arena gris sobre Kemiisa cruda gastada pero integra, Wusi carbon, S'ira ocre, waireñas oscuras y Wom bajo",
    alternative: "harapos rotos, torso descubierto y pies descalzos para codificar mendicidad, rechazado por caricaturesco",
    layers: ["Wusi carbon", "S'ira ocre", "Kemiisa cruda integra", "Kotin arena gris largo", "waireñas oscuras", "Wom bajo"],
    wardrobeRefs: ["wusi_aichee", "sira_kumusu_aamuushi", "kemiisa_piiraneeru", "kotin_male_manta", "wairenas", "wom_woma_hat"],
    attire: "Kotin largo arena gris sobre Kemiisa cruda y Wusi carbon; desgaste leve en cantos sin roturas teatrales",
    footwear: "waireñas carbon usadas pero completas",
    accessories: "Wom bajo y baston sencillo de viaje; ningun amuleto o insignia divina",
    continuity: ["Kotin arena gris", "Kemiisa cruda", "Wom bajo", "cabello y barba corta gris", "rostro mayor digno, sin halo o pintura"],
  }),
};

function member(id, scope, ensemble, rationale, wardrobeProfile, wardrobeRefs) {
  return { id, scope, ensemble, rationale, wardrobe_profile: wardrobeProfile, wardrobe_refs: wardrobeRefs, source_refs: CLOTHING_SOURCES };
}

function collectiveCulture({ name, moment, activity, specification, layers, wardrobeRefs, members, continuity }) {
  return {
    person_scope: name,
    temporal_register: "mythic_indeterminate",
    time_basis: "el relato diferencia edades, genero o funciones pero no fija ropa; el grupo usa conjuntos Wayuu documentados y reversibles, nunca un uniforme ancestral imaginado",
    narrative_moment: moment,
    activity_context: activity,
    occasion_context: "mixed_narrative",
    considered_ensembles: [
      choice("differentiated_complete", specification, "elegido", "diferencia funciones y edades mediante conjuntos completos, no por desnudez o emblemas"),
      choice("uniform_loincloth", "todas las figuras masculinas con el mismo wayuco y torso descubierto", "rechazado", "reduce la diversidad Wayuu a una sola prenda y vuelve el colectivo una fila de clones"),
    ],
    chosen_ensemble: { id: "differentiated_complete", rationale: "permite leer relaciones y acciones sin imponer una unica moda mitica", specification, layers },
    attire: dimension("include_contextual", "editorial_reversible", "cada subgrupo recibe cobertura superior o de cuerpo entero documentada", specification),
    footwear: dimension("include_documented", "institutional_general", "waireñas o Asapatshee completan los conjuntos y varian por funcion", "calzado simple visible y distinto segun cada subgrupo"),
    accessories: dimension("include_contextual", "editorial_reversible", "sombreros, paños o bolsas solo aparecen donde responden al trabajo", "maximo un accesorio funcional dominante por subgrupo"),
    face_paint: dimension("omit_contextually", "source_specific", "no hay ocasion ni motivo facial exacto documentado para este colectivo"),
    wardrobe_profile: "mixed_collective",
    wardrobe_refs: wardrobeRefs,
    source_refs: CLOTHING_SOURCES,
    continuity_markers: continuity,
    collective_wardrobe: {
      variation_axis: "edad, genero, oficio, cobertura superior, calzado, color y accesorio funcional",
      anti_uniformity_rule: "ninguna figura puede quedar con wayuco aislado ni repetir exactamente el conjunto completo de otra",
      member_groups: members,
    },
  };
}

const WUNAAPU_CULTURE = collectiveCulture({
  name: "cuatro Señores de Wuna'apü adultos, hermanos de Maajua, diferenciados por trabajo",
  moment: "antes de convertirse en animales del monte",
  activity: "agricultura, caza, tejido y recoleccion en planos separados de la huerta",
  specification: "cuatro hombres: agricultor con Kemiisa arena; cazador con Kotin ocre; tejedor con Kemiisa azul humo y Ekiialiiijaa; recolector con Kemiisa carbon y Wom; todos con Wusi, S'ira y calzado, ninguno con torso descubierto; todas las prendas, fajas, bolsas y tocados son lisos y sin motivos inventados",
  layers: ["cuatro Wusi y S'ira diferenciados", "cuatro capas superiores completas: tres Kemiisa y un Kotin", "cuatro pares de waireñas o Asapatshee", "accesorios funcionales no repetidos"],
  wardrobeRefs: ["wusi_aichee", "sira_kumusu_aamuushi", "kemiisa_piiraneeru", "kotin_male_manta", "wairenas", "asapatshee_koisuuttu_kuttiira", "wom_woma_hat"],
  members: [
    member("farmer", "un agricultor", "Kemiisa arena, Wusi ocre, S'ira carbon, waireñas y Wom", "cobertura ligera y proteccion solar para trabajo", "male", ["kemiisa_piiraneeru", "wusi_aichee", "sira_kumusu_aamuushi", "wairenas", "wom_woma_hat"]),
    member("hunter", "un cazador", "Kotin ocre sobre Wusi carbon, S'ira arena y Asapatshee", "silueta de envolvente masculina distinta y calzado de recorrido", "male", ["kotin_male_manta", "wusi_aichee", "sira_kumusu_aamuushi", "asapatshee_koisuuttu_kuttiira"]),
    member("weaver", "un tejedor o artista", "Kemiisa azul humo, Wusi oscuro, S'ira ocre, waireñas y Ekiialiiijaa liso", "diferencia oficio sin inventar patrones en la prenda", "male", ["kemiisa_piiraneeru", "wusi_aichee", "sira_kumusu_aamuushi", "wairenas", "ekiialiiijaa_head_or_waist_cloth"]),
    member("gatherer", "un recolector", "Kemiisa carbon, Wusi arena, S'ira roja apagada, waireñas y Wom", "usa bolsa o carga funcional sin volverla ornamento", "male", ["kemiisa_piiraneeru", "wusi_aichee", "sira_kumusu_aamuushi", "wairenas", "wom_woma_hat"]),
  ],
  continuity: ["exactamente cuatro trabajadores", "Kemiisa arena, Kotin ocre, Kemiisa azul y Kemiisa carbon", "ningun torso descubierto", "rostros y alturas distintos", "sin pintura"],
});

const HUMANITY_CULTURE = collectiveCulture({
  name: "seis primeras personas Wayuu sin fuego, mujeres, hombres y niños",
  moment: "noche anterior a la distribucion del fuego",
  activity: "habitar tronco, cueva, abrigo y rancho, compartir alimento seco y buscar calor sin ritual",
  specification: "seis personas en tres subgrupos con mantas femeninas, Kemiisa masculinas y ropa infantil completa; prendas sobrias y lisas, sin bordado, dibujo, cenefa o correa ornamentada; capas superiores visibles y ningun uniforme",
  layers: ["dos mantas femeninas con pecheras", "dos Kemiisa masculinas sobre Wusi y S'ira", "dos conjuntos infantiles completos", "calzado simple diferenciado"],
  wardrobeRefs: ["wayuushein_manta", "pechera_female_underlayer", "kemiisa_piiraneeru", "wusi_aichee", "sira_kumusu_aamuushi", "wairenas"],
  members: [
    member("women", "dos mujeres adultas", "mantas largas lisas arcilla e indigo sobre pecheras, con waireñas", "diferencia edad y postura mediante volumen y color", "female", ["wayuushein_manta", "pechera_female_underlayer", "wairenas"]),
    member("men", "dos hombres adultos", "Kemiisa arena y azul humo sobre Wusi, S'ira y waireñas; uno con Wom", "cobertura superior completa y variacion funcional", "male", ["kemiisa_piiraneeru", "wusi_aichee", "sira_kumusu_aamuushi", "wairenas", "wom_woma_hat"]),
    member("children", "dos niños de alturas distintas", "Kemiisa infantiles opacas sobre Wusi y S'ira, con waireñas pequeñas", "evita exponer menores o adultizarlos", "child_male", ["kemiisa_piiraneeru", "wusi_aichee", "sira_kumusu_aamuushi", "wairenas"]),
  ],
  continuity: ["exactamente seis personas", "dos mantas, dos Kemiisa adultas y dos infantiles", "alimento seco sin fuego", "ningun torso descubierto", "sin pintura"],
});

const TRANSFORMERS_CULTURE = collectiveCulture({
  name: "Ma'ayüi y Ulapiuy como dos transformadores adultos distintos",
  moment: "liberacion del fuego de Kasemashi de las piedras Simala y Lapuna",
  activity: "aproximarse a las piedras y abrir espacio para la salida del fuego sin violencia",
  specification: "Ma'ayüi con Kemiisa cruda sobre Wusi carbon y S'ira ocre; Ulapiuy con Kotin azul humo sobre Wusi arena y S'ira carbon; ambos con waireñas y rostros distintos; prendas y fajas completamente lisas, sin bolsos, correas, bordados o cenefas",
  layers: ["dos Wusi y S'ira diferenciados", "Kemiisa completa para Ma'ayüi", "Kotin de cuerpo amplio para Ulapiuy", "dos pares de waireñas"],
  wardrobeRefs: ["wusi_aichee", "sira_kumusu_aamuushi", "kemiisa_piiraneeru", "kotin_male_manta", "wairenas"],
  members: [
    member("maayui", "Ma'ayüi", "Kemiisa cruda, Wusi carbon, S'ira ocre, waireñas oscuras", "conjunto completo ligero y distinto del otro transformador", "male", ["kemiisa_piiraneeru", "wusi_aichee", "sira_kumusu_aamuushi", "wairenas"]),
    member("ulapiuy", "Ulapiuy", "Kotin azul humo, Wusi arena, S'ira carbon, waireñas arcilla", "envolvente de mayor volumen que conserva identidad propia", "male", ["kotin_male_manta", "wusi_aichee", "sira_kumusu_aamuushi", "wairenas"]),
  ],
  continuity: ["exactamente dos hombres adultos", "Kemiisa cruda versus Kotin azul humo", "rostros no gemelos ni clones", "ningun wayuco aislado", "sin pintura"],
});

function direction({ title, focus, scene, must, avoid = [], materialCulture, humanPresenting = false }) {
  return {
    title,
    focus,
    scene,
    must_show: [...must, "materialidad inequívoca de paper craft 3D con capas, pliegues y sombras fisicas", "mundo full bleed hasta los cuatro bordes, con aire y varias distancias reales, sin soporte exterior"],
    avoid: [...avoid, ...COMMON_AVOID],
    ...(materialCulture ? { material_culture: materialCulture } : {}),
    ...(humanPresenting ? { human_presenting: true } : {}),
  };
}

function humanIdentity({ key, title, focus, scene, must, avoid }) {
  return direction({ title, focus, scene, must, avoid, materialCulture: CULTURE[key] });
}

function stateDirection({ title, focus, scene, must, avoid, culture }) {
  return direction({ title, focus, scene, must, avoid, materialCulture: culture });
}

export const WAYUU_FIRE_DIRECTIONS_V3 = {
  "siki__identity_sheet": humanIdentity({
    key: "siki",
    title: "Siki o Makutulain · identidad humana del fuego",
    focus: "Un unico joven Wayuu adulto de cuerpo completo, delgado pero fuerte, rostro estrecho, cabello negro corto y manos grandes de trabajador. Viste el conjunto completo aprobado: Kemiisa cruda con ruedo a mitad del muslo y silueta clara de camisa, Wusi ocre opaco con paños anterior y posterior legibles, S'ira carbon, waireñas arcilla y Wom bajo. No lleva pantalon ni shorts adicionales. Una mano descansa junto a un chinchorro y la otra sostiene una pala baja; ninguna llama sale del cuerpo.",
    scene: "Enramada abierta de papel: chinchorro lateral en primer plano, Siki erguido en plano medio y una franja de terreno recien despejado al fondo.",
    must: ["exactamente un adulto completo y reconocible", "Kemiisa cruda claramente visible como camisa con ruedo a mitad del muslo", "Wusi ocre opaco con paños anterior y posterior, Wom bajo, S'ira y waireñas como componentes distintos", "chinchorro y pala secundarios, sin escena narrativa completa", "poste y chinchorro lisos, sin patron geometrico"],
    avoid: ["pantalon, jeans, shorts o calzon moderno bajo el Wusi", "Kemiisa convertida en tunica, vestido o capa hasta pantorrilla o tobillo", "torso descubierto, taparrabo aislado, cuerpo en llamas, antorcha humana, heroe musculoso", "Maajua, suegra, niños, cuñados o segunda persona"],
  }),
  "siki__state_sheet": stateDirection({
    title: "Siki · chinchorro, huerta y Caujaro",
    focus: "Secuencia continua de exactamente TRES estados del mismo Siki: joven vestido junto al chinchorro; el mismo joven vestido trabajando con pala mientras una franja de maleza se vuelve suelo oscuro sin incendio visible; y ausencia corporal dentro de un Caujaro cuyas vetas internas contienen un unico hilo rojo mate. Misma cara y mismo conjunto en los dos estados humanos; la Kemiisa termina a mitad del muslo y se lee como camisa, nunca como tunica larga.",
    scene: "De izquierda a derecha, enramada, huerta y Caujaro ocupan profundidades conectadas sin paneles ni divisores.",
    must: ["exactamente dos figuras humanas identicas y un tercer estado vegetal sin cuerpo", "mismo conjunto completo en ambos estados humanos y Kemiisa con ruedo a mitad del muslo", "transformacion sugerida por continuidad material y no por humo digital", "Caujaro morfologicamente legible", "chinchorro, postes y prendas lisos, sin patrones"],
    avoid: ["Kemiisa hasta la pantorrilla o tobillo", "tres hombres distintos, tres paneles, texto, incendio forestal, cuerpo quemado, hombre-arbol monstruoso", "Maajua, suegra, Mouwa o Jamu visibles"],
    culture: CULTURE.siki,
  }),
  "mujer_siki__identity_sheet": humanIdentity({
    key: "maajua",
    title: "Maajua · identidad humana",
    focus: "Una unica mujer Wayuu adulta de cuerpo completo, Maajua, porte decidido, rostro ovalado de pomulos altos y dos trenzas negras bajas. Viste manta larga arcilla roja lisa sobre pechera arena y waireñas carbon. Sostiene un pequeño atado crudo de semillas a la altura de la cintura, sin ornamentacion.",
    scene: "Sendero de huerta con capas de hojas cercanas, Maajua en plano medio y cultivos diversos desenfocados al fondo.",
    must: ["exactamente una mujer adulta completa", "manta larga con mangas y pechera interior legibles", "dos trenzas bajas y atado de semillas", "postura activa, nunca figura pasiva o sexualizada"],
    avoid: ["Siki, niños, suegra, segunda mujer o ave", "escote, abertura sensual, manta bordada, joyeria, canasto folclorico"],
  }),
  "mujer_siki__state_sheet": stateDirection({
    title: "Maajua · mujer y perdiz bola",
    focus: "Dos estados del mismo personaje en un espacio continuo: Maajua completa con su manta arcilla roja y, a distancia, una perdiz bola de papel con pecho arcilla roja, dos pequeñas franjas carbon bajo el cuello y mirada oscura natural. El ave no viste ropa ni conserva rostro humano; la continuidad existe solo en tres acentos cromaticos discretos.",
    scene: "Borde de huerta al crepusculo: Maajua en primer plano medio, un sendero curvo y la perdiz bola entre vegetacion baja en plano profundo.",
    must: ["exactamente una Maajua humana y una perdiz bola", "manta completa en estado humano", "morfologia aviar natural sin hibridacion", "continuidad arcilla-carbon discreta"],
    avoid: ["mujer con alas, rostro humano en el ave, plumas como vestido, metamorfosis dolorosa", "Siki, suegra, niños o segunda ave"],
    culture: CULTURE.maajua,
  }),
  "suegra_siki__identity_sheet": humanIdentity({
    key: "suegra",
    title: "Madre de Maajua · identidad humana",
    focus: "Una unica mujer Wayuu mayor de cuerpo completo, espalda recta, rostro ancho con lineas de edad y cabello gris recogido. Viste manta larga indigo carbon lisa sobre pechera arcilla, waireñas arena y Womu bajo de fibra sin banda decorada. Una mano aparta suavemente hojas altas para orientarse.",
    scene: "Corredor estrecho entre cultivos de papel, con hojas cercanas ocluyendo parcialmente el camino y cielo de tarde profundo.",
    must: ["exactamente una mujer mayor completa", "manta indigo de mangas amplias, pechera, waireñas y Womu", "edad legible con dignidad, no caricatura", "cultivos mas altos que la cintura para explicar desorientacion"],
    avoid: ["bruja, anciana encorvada, baston magico, harapos, ave de presa", "Maajua, Siki o segunda persona"],
  }),
  "suegra_siki__state_sheet": stateDirection({
    title: "Madre de Maajua · mujer mayor y Yoto",
    focus: "Dos estados conectados: la mujer mayor completa con manta indigo y Womu; y un ave Yoto de actividad crepuscular tratada prudentemente como rapaz mediana de papel indigo carbon, arena y arcilla, sin cerrar especie zoologica. Ninguna anatomia híbrida.",
    scene: "Huerta al caer la tarde, figura humana entre cultivos en plano medio y ave posada en una rama lejana contra luz crepuscular.",
    must: ["exactamente una mujer mayor y una sola ave", "conjunto humano completo y consistente", "ave natural con pico curvo discreto y alas plegadas", "relacion por color y distancia, no fusion corporal"],
    avoid: ["mujer pajaro, arpía, águila gigante, lechuza fantastica, ataque, garras dramaticas", "Maajua, Siki o segunda ave"],
    culture: CULTURE.suegra,
  }),
  "senores_wunaapu__group_grammar": direction({
    title: "Señores de Wuna'apü · oficios y conjuntos completos",
    focus: "Exactamente CUATRO hermanos Wayuu adultos de cuerpo completo, no clones: agricultor con Kemiisa arena; cazador con Kotin ocre; tejedor con Kemiisa azul humo y Ekiialiiijaa; recolector con Kemiisa carbon y Wom. Todos llevan Wusi, S'ira y calzado debajo de capas superiores visibles. Cada uno tiene rostro, altura, postura y herramienta distinta.",
    scene: "Huerta amplia con cuatro estaciones de trabajo conectadas por senderos y profundidad, sin paneles: surco, borde de monte, telar sencillo y recoleccion.",
    must: ["exactamente cuatro hombres completos y diferenciados", "cuatro capas superiores legibles y ningun torso descubierto", "oficios entendibles sin texto", "rostros, alturas y poses no repetidos", "prendas, fajas, bolsas, herramientas y tocados completamente lisos"],
    avoid: ["fila de cuatro wayucos iguales, uniforme, hermanos gemelos, tocados ceremoniales", "Maajua, Siki, suegra, animales o transformacion"],
    materialCulture: WUNAAPU_CULTURE,
  }),
  "senores_wunaapu__state_sheet": stateDirection({
    title: "Señores de Wuna'apü · trabajadores y animales del monte",
    focus: "Secuencia continua de dos grupos: exactamente CUATRO trabajadores humanos con los conjuntos completos aprobados, todos lisos y sin ornamentos; y, en otro plano, exactamente SIETE animales individuales en total, uno de cada tipo: UNA ardilla, UN perico, UN bachaco grande que carga una hoja verde lisa, UNA hormiga comun mucho mas pequeña sin hoja, UNA langosta insecto, UNA rata y UN unico saino o pecari. No repetir especies ni añadir capibara, venado u otro mamifero. No existe correspondencia uno-a-uno inventada entre cada hombre y cada especie.",
    scene: "La huerta humana se abre hacia monte profundo; los dos grupos se separan por distancia y una franja de sombra, no por paneles.",
    must: ["cuatro humanos vestidos y exactamente siete animales individuales en total", "una ardilla y un perico en ramas separadas; un bachaco con hoja y una hormiga comun menor en dos posiciones aisladas del suelo; una langosta, una rata y un unico saino", "bachaco con hoja, hormiga comun sin hoja y saino de cuerpo porcino claramente distintos", "ningun uniforme humano y ninguna superficie textil estampada", "animales naturales sin ropa o rostros humanos", "la hoja declara pluralidad y no asigna equivalencias individuales"],
    avoid: ["segundo saino, animal duplicado, capibara, venado, ciervo, conejo o mamifero adicional", "hibridos, metamorfosis corporal, zoologico, animales gigantes, plaga de horror", "texto que empareje hombres y animales"],
    culture: WUNAAPU_CULTURE,
  }),
  "mouwa_fuego__identity_sheet": humanIdentity({
    key: "mouwa",
    title: "Mouwa · identidad abierta",
    focus: "Una unica joven Wayuu adulta de cuerpo completo, rostro redondo y una trenza negra larga. Viste manta verde trupillo lisa sobre pechera cruda y waireñas arcilla. Su postura es serena y distante; ninguna pluma, ala, pico o rasgo de paloma convierte la inferencia de Finol en hecho visual.",
    scene: "Sendero amplio entre borde de huerta y monte, Mouwa en plano medio y cielo luminoso profundo.",
    must: ["exactamente una mujer adulta completa", "manta, pechera y waireñas legibles", "identidad humana sin codigo de ave", "expresion neutra y no seductora"],
    avoid: ["paloma, alas, plumas, vestido blanco, aura, femme fatale", "Siki, Maajua o segunda persona"],
  }),
  "jamu_hambre__presence_model": direction({
    title: "Jamu, el Hambre · presencia sin monstruo",
    focus: "El Hambre como ausencia material que avanza, no criatura: una franja de cultivos pierde hojas y volumen a traves de cinco planos; recipientes antes llenos quedan vacios; el suelo se abre en pequeñas grietas de papel y una sombra irregular sin forma corporal se aproxima a UN Caujaro completo y claramente visible en el fondo. El Caujaro tiene tronco corto gris ocre, copa amplia e irregular y hojas ovaladas verdes apagadas; no es cactus ni montaña. Ningun rostro, esqueleto, mano o boca.",
    scene: "Huerta profunda sin construcciones vista desde suelo cercano hacia un unico Caujaro arboreo distante, con gradiente de abundancia a escasez construido por capas fisicas; horizonte bajo, sin meseta monumental.",
    must: ["presencia legible por sustraccion de hojas, frutos y volumen", "ningun cuerpo o monstruo", "un unico Caujaro intacto, completo y morfologicamente arboreo como destino lejano", "cambio gradual en cinco o mas profundidades", "solo huerta, recipientes, suelo, sombra amorfa y Caujaro"],
    avoid: ["meseta monumental, tepuy, montaña que sustituya al Caujaro", "rancho, casa, choza, arquitectura, saguaro o cactus con brazos", "demonio, espectro, esqueleto, boca gigante, ojos, manos, humo humanoide", "persona hambrienta, cuerpo emaciado, sufrimiento explicito, Siki visible"],
  }),
  "pala_maravillosa_siki__object_sheet": direction({
    title: "Pala maravillosa de Siki · herramienta de huerta",
    focus: "Una unica pala de trabajo de escala humana traducida a paper craft: hoja ancha mate carbon, mango largo de madera-papel ocre y union envuelta en fibra. La misma pala aparece exactamente TRES veces en un suelo continuo: perfil, tres cuartos y apoyada mientras levanta una nube baja de polvo de laminas arena. No fuego, runas ni brillo.",
    scene: "Suelo estratificado de huerta full bleed con tres vistas en distintas profundidades, sin divisores o etiquetas.",
    must: ["exactamente tres vistas de la misma pala", "hoja, mango y union de fibra consistentes", "polvo fisico semejante a humo pero sin combustión", "escala de herramienta funcional"],
    avoid: ["Siki, mano, persona, arma, hacha, lanza, pala moderna de plastico", "llamas, aura, runas, metal fotografico"],
  }),
  "huerta_siki__spatial_model": direction({
    title: "Gran huerta de Siki · abundancia y desorientacion",
    focus: "Modelo espacial de una huerta extraordinariamente extensa pero agricola: surcos curvos de maiz, frijol, millo, melon, patilla, papaya, calabaza, ahuyama y quinchoncho forman corredores altos y se pierden en el horizonte. Un claro recien abierto ocupa el primer plano; la densidad aumenta hacia el fondo. Sin personas, incendio o cornucopia fantastica.",
    scene: "Vista oblicua baja 16:9 con seis o mas profundidades: suelo oscuro cercano, surcos, corredores, arboles frutales localizados y planicie distante.",
    must: ["variedad de cultivos con morfologias distintas", "senderos capaces de desorientar sin laberinto artificial", "transicion de roza a abundancia", "escala territorial sin arquitectura monumental"],
    avoid: ["Siki, Maajua, suegra, persona o animal", "selva tropical uniforme, plantacion industrial, maiz infinito, jardin europeo, laberinto geometrico"],
  }),
  "cultivos_huerta_siki__object_sheet": direction({
    title: "Semillas y cultivos de la huerta · repertorio nombrado",
    focus: "Ficha 1:1 en un unico suelo continuo con nueve grupos pequeños y separados, sin texto: maiz, frijoles, millo, melon, patilla, papaya, calabaza, ahuyama y quinchoncho. Cada grupo incluye pocas semillas y un fruto, vaina o mazorca reconocible. Nada flota ni rebosa como tesoro.",
    scene: "Suelo de fibras arena a carbon que llena el cuadro; grupos ordenados por escala y profundidad, sin cuadrícula, etiquetas o recipientes decorados.",
    must: ["exactamente nueve grupos botanicamente diferenciables", "semilla y producto asociados por proximidad", "papel, fibra y volumen fisico", "composicion sobria de inventario, no banquete"],
    avoid: ["persona, mano, canasto bordado, cornucopia, mercado, comida cocinada", "texto, numeros, pictogramas, patrones o semillas gigantes"],
  }),
  "caujaro_koushot__botanical_sheet": direction({
    title: "Caujaro o Koushot · modelo botanico",
    focus: "Un unico arbol completo basado prudentemente en Cordia alba: tronco corto gris ocre, copa amplia e irregular, muchas ramas, hojas ovaladas verdes apagadas y pequeños racimos de flores blancas localizadas. La misma planta aparece en tres escalas conectadas: arbol completo, rama foliada y corte longitudinal de dos varitas que deja ver vetas rojizas mate, sin llama.",
    scene: "Terreno semiarido full bleed con arbol en plano medio, rama cercana y varitas en primer plano, todo dentro de un solo mundo continuo.",
    must: ["morfologia de arbol ramificado y no cactus", "hojas ovaladas y flores pequeñas localizadas", "dos varitas con vetas internas discretas", "continuidad botanica entre arbol, rama y madera"],
    avoid: ["saguaro, olivo mediterraneo, arbol tropical gigante, árbol en llamas", "persona, texto, diagrama cientifico, flechas o etiquetas"],
  }),
  "junuunay__identity_sheet": humanIdentity({
    key: "junuunay",
    title: "Junuunay · identidad humana",
    focus: "Un unico joven Wayuu adulto de cuerpo completo, rostro alargado y movimiento contenido. Viste Kemiisa azul humo con silueta inequívoca de camisa y ruedo sobre la rodilla, Wusi carbon, S'ira ocre, Kotin arena plegado como capa separada sobre un hombro, waireñas oscuras y Ekiialiiijaa liso. Un morral pequeño sin patrón queda cerrado a la cintura; no se ven brasas.",
    scene: "Entrada exterior de una gruta al anochecer, con roca de papel cercana, Junuunay en plano medio y noche profunda al fondo.",
    must: ["exactamente un joven completo", "Kemiisa con ruedo sobre la rodilla y Kotin visibles como dos capas superiores distintas", "morral pequeño cerrado y sin decoracion", "postura prudente, no heroe de accion"],
    avoid: ["Kemiisa convertida en tunica, vestido o capa hasta pantorrilla o tobillo", "torso descubierto, taparrabo aislado, Prometeo, capa griega, antorcha", "Maleiwa, Kenáa, Jimut o segunda persona"],
  }),
  "junuunay__state_sheet": stateDirection({
    title: "Junuunay · joven y escarabajo",
    focus: "Dos estados conectados sin castigo grafico: Junuunay completo con Kemiisa azul humo de ruedo sobre la rodilla y silueta de camisa, Kotin arena separado y morral; y un escarabajo estercolero natural de papel negro verdoso con dos pequeñas zonas cobrizas brillantes en las patas. Ningun rostro humano, ropa o morral en el insecto.",
    scene: "De la entrada de gruta a un suelo nocturno profundo, con figura humana en primer plano medio y escarabajo ampliado en plano bajo distante.",
    must: ["exactamente un humano y un escarabajo", "conjunto humano completo con Kemiisa sobre la rodilla y Kotin como capa separada", "morfologia de escarabajo estercolero con seis patas", "brillo limitado a marcas de las patas, no aura"],
    avoid: ["Kemiisa larga hasta pantorrilla o tobillo", "metamorfosis dolorosa, cuerpo mitad insecto, excremento visible, humillacion", "Maleiwa, Kenáa, Jimut o segundo insecto"],
    culture: CULTURE.junuunay,
  }),
  "kenaa_fuego__identity_sheet": humanIdentity({
    key: "kenaa",
    title: "Kenáa · joven cazador",
    focus: "Un unico joven cazador Wayuu adulto de cuerpo completo, rostro triangular y postura alerta. Viste Kemiisa ocre tostado, Wusi carbon, S'ira arena, Asapatshee oscuras y Wom bajo. Sostiene un arco sencillo hacia abajo; no apunta ni exhibe presa.",
    scene: "Sendero semiarido entre dia y sombra, ramas cercanas, Kenáa en plano medio y horizonte claro.",
    must: ["exactamente un joven completo", "Kemiisa ocre y calzado de recorrido claramente visibles", "arco simple en reposo", "ninguna brasa o brillo corporal"],
    avoid: ["torso descubierto, cazador amazonico, plumas, carcaj ornamentado, presa muerta", "Junuunay, Maleiwa o cocuyo"],
  }),
  "kenaa_fuego__state_sheet": stateDirection({
    title: "Kenáa · cazador, ocultamiento solar y cocuyo",
    focus: "Secuencia de tres estados: Kenáa humano completo bajo luz diurna, sin bolso ni correa cruzada; el mismo cuerpo vestido apenas legible detrás de cinco laminas de luz solar mate, sin invisibilidad digital; y un unico cocuyo nocturno de papel oscuro con dos puntos bioluminiscentes naturales muy pequeños. No hibridacion.",
    scene: "Un mismo sendero transita de dia a noche por profundidad, sin paneles ni texto.",
    must: ["dos representaciones humanas identicas y un cocuyo", "mismo conjunto completo y liso en ambos estados humanos, sin bolsa o correa cruzada", "ocultamiento por capas de luz fisica", "cocuyo natural con brillo minimo localizado"],
    avoid: ["superheroe invisible, silueta transparente, cuerpo encendido, hombre-insecto", "Noche antropomorfa, Sol con rostro, Maleiwa o Junuunay"],
    culture: CULTURE.kenaa,
  }),
  "jimut_cigarron__identity_sheet": direction({
    title: "Jimut, el Cigarrón · insecto del Caujaro",
    focus: "Un unico cigarrón grande de ficha pero escala natural, tratado como escarabajo volador robusto sin cerrar especie: cuerpo carbon mate, torax ocre oscuro, seis patas, dos antenas y alas membranosas plegadas de papel translúcido. Entre las patas delanteras sostiene una brasa diminuta, separada del cuerpo y sin quemadura.",
    scene: "Rama de Caujaro en primer plano con corteza de papel, Jimut en plano medio y hojas ovaladas profundas.",
    must: ["exactamente un insecto completo con seis patas", "alas plegadas y anatomia no humana", "una brasa diminuta separada", "Caujaro botanicamente coherente"],
    avoid: ["persona, hombre-insecto, abeja, avispa, libelula, escarabajo gigante", "llamas grandes, rostro humano, ropa, bolsa o herramienta"],
  }),
  "serumaa_sikiyuu__identity_sheet": humanIdentity({
    key: "serumaa",
    title: "Serumáa · identidad infantil",
    focus: "Un unico niño Wayuu de cuerpo completo, edad infantil clara, cabello negro corto y gesto atento. Viste Kemiisa cruda, Wusi azul carbon, S'ira ocre y waireñas pequeñas. Señala con una mano hacia una rama de Caujaro fuera de alcance; no sostiene fuego ni herramientas.",
    scene: "Borde de monte con tronco de Caujaro en un plano lateral, niño en plano medio y rancheria muy lejana.",
    must: ["exactamente un niño completo y no adultizado", "camisa, Wusi, S'ira y waireñas legibles", "gesto de señalar sin tocar el fuego", "distancia segura del arbol"],
    avoid: ["torso descubierto, niño desnudo, adulto pequeño, ave, alas, fuego en mano", "Jimut, Junuunay, Maleiwa o segunda persona"],
  }),
  "serumaa_sikiyuu__state_sheet": stateDirection({
    title: "Serumáa · niño y ave Sikiyuu",
    focus: "Dos estados conectados: Serumáa completo con su conjunto infantil crudo y azul; y una unica ave Sikiyuu de identidad zoologica abierta, pequeña, de cuerpo arena, alas gris humo y una franja ocre discreta en garganta. No se afirma especie, canto escrito o anatomia híbrida.",
    scene: "Sendero junto al Caujaro, niño en plano medio y ave posada en rama profunda bajo cielo claro.",
    must: ["exactamente un niño y una sola ave", "conjunto infantil completo", "ave pequeña natural sin ropa o cara humana", "continuidad cromatica discreta crudo-azul-ocre"],
    avoid: ["niño con alas, pajaro parlante, letras Ski, boca humana, metamorfosis dolorosa", "Jimut, Junuunay o Maleiwa"],
    culture: CULTURE.serumaa,
  }),
  "humanidad_sin_fuego__group_grammar": direction({
    title: "Primeras personas sin fuego · diversidad de refugios",
    focus: "Exactamente SEIS personas Wayuu de edades y generos distintos, todas completamente vestidas: dos mujeres con mantas; dos hombres con Kemiisa sobre Wusi y S'ira; dos niños con Kemiisa infantiles. Se distribuyen entre entrada de cueva, tronco hueco, abrigo bajo y rancho sencillo, compartiendo alimentos secos. No hay llama, sufrimiento teatral ni uniformes.",
    scene: "Noche amplia en corte espacial continuo con cuatro refugios a diferentes distancias y seis personas relacionadas por miradas y alimento.",
    must: ["exactamente seis personas con tres gramaticas de vestuario", "ningun torso descubierto", "mantas, Kemiisa, fajas, pecheras y correas completamente lisas, sin bordado ni motivo", "cuatro formas de refugio legibles sin casa universal", "alimento seco y ausencia total de fuego"],
    avoid: ["cavernicolas, pieles animales, harapos, fila de taparrabos, miseria exotizada", "Maleiwa, Junuunay, brasas o fogon"],
    materialCulture: HUMANITY_CULTURE,
  }),
  "gruta_fuego_maleiwa__spatial_model": direction({
    title: "Gruta del fuego de Maleiwa · piedras encendidas",
    focus: "Cueva profunda de papel mineral donde hay exactamente SIETE piedras calientes en total —no seis, no ocho—, todas redondeadas y con calor interno rojo oscuro en grietas finas, sin llamas abiertas. Disponerlas de forma inequivoca en tres filas contables: TRES al fondo, DOS en el centro y DOS al frente. Ninguna otra roca comparte ese brillo. Una entrada estrecha conduce a una camara amplia; un corredor lateral permite aproximacion y salida. El lugar permanece vacio y no parece templo, fragua o infierno.",
    scene: "Vista oblicua 16:9 desde roca cercana hacia camara de piedras y abertura distante, con siete o mas planos y sombras fisicas.",
    must: ["exactamente siete piedras calientes claramente contables: tres atras, dos en medio y dos adelante; ninguna octava piedra iluminada", "entrada, camara y corredor lateral espacialmente legibles", "calor sugerido por vetas internas y luz rebotada", "ninguna persona, altar o arquitectura añadida"],
    avoid: ["Maleiwa, Junuunay, guardia, estatua, trono, templo, volcan, lava, infierno", "antorchas, fogata, runas, portal o tesoro"],
  }),
  "brasas_morral_junuunay__object_sheet": direction({
    title: "Dos brasas y morral pequeño · objeto de Junuunay",
    focus: "Un unico morral pequeño de papel tejido liso, cilindrico y sin patrón, mostrado exactamente TRES veces: cerrado; abierto con exactamente DOS brasas separadas en cavidades de fibra carbonizada; y vacío junto a dos pequeñas trayectorias de ceniza. El interior protege la bolsa sin combustión visible.",
    scene: "Suelo mineral full bleed con tres vistas en profundidad continua, sin paneles o etiquetas.",
    must: ["mismo morral en tres vistas", "exactamente dos brasas en la vista abierta", "tejido liso sin kana o marca", "escala pequeña y funcional"],
    avoid: ["Junuunay, mano, persona, mochila grande, bolso moderno, dos bolsas", "llamas, bolsa quemada, humo digital, tesoro, joyas"],
  }),
  "noche_revela_kenaa__phenomenon_rule": direction({
    title: "La Noche revela a Kenáa · regla luminica",
    focus: "Fenomeno sin figura humana: un mismo sendero atraviesa tres franjas de tiempo construidas por profundidad. Bajo dia claro no se ve luz; al caer la tarde aparece un punto tenue entre hojas; en noche profunda un cocuyo natural muestra dos luces pequeñas. La Noche actua haciendo visible, no como diosa, mujer o monstruo.",
    scene: "Panorama 16:9 del sendero de Caujaro y matorral desde luz diurna en primer plano hasta noche en fondo profundo.",
    must: ["transicion diurna-crepuscular-nocturna continua", "un unico cocuyo solo en la noche", "dos puntos de luz muy pequeños", "fenomeno explicado por visibilidad y no magia grafica"],
    avoid: ["mujer Noche, rostro lunar, silueta humana, estrellas con ojos", "Kenáa humano, Maleiwa, aura, letras o diagrama"],
  }),
  "kasemashi__identity_sheet": humanIdentity({
    key: "kasemashi",
    title: "Kasemashi · niño arquero",
    focus: "Un unico niño Wayuu de cuerpo completo, vivaz y concentrado, cabello negro abundante. Viste Kemiisa verde salvia, Wusi ocre, S'ira carbon, waireñas arena y Wom pequeño. Sostiene arco infantil sencillo y una sola flecha apuntada hacia suelo seguro, sin pose guerrera.",
    scene: "Planicie semiarida con cardon lejano, Kasemashi en plano medio y cielo amplio; ninguna otra persona.",
    must: ["exactamente un niño completo", "Kemiisa, Wusi, S'ira, calzado y Wom completamente liso legibles", "arco de escala infantil y una sola flecha", "energia corporal sin heroizacion"],
    avoid: ["torso descubierto, guerrero, adulto pequeño, armadura, plumas, carcaj lleno", "Maleiwa, meteoro, fuego o segunda persona"],
  }),
  "kasemashi__state_sheet": stateDirection({
    title: "Kasemashi · niño y fuego en piedra",
    focus: "Dos estados en profundidad: Kasemashi completo con su conjunto verde salvia y arco bajo; y, lejos, ausencia corporal dentro de dos piedras blanca y negra cuyas capas internas contienen un nucleo rojo mate. No se muestra al niño atrapado, quemado o petrificado.",
    scene: "Planicie que conduce a un enclave mineral de Pülowi; niño en primer plano medio y piedras profundas bajo cielo oscurecido.",
    must: ["exactamente un niño humano y un estado mineral sin cuerpo", "conjunto humano completo con Wom totalmente liso y sin banda decorada", "piedra blanca y piedra negra diferenciadas", "fuego contenido como capas internas, no prision corporal"],
    avoid: ["niño quemado, cuerpo dentro de roca, rostro en piedra, grito, cadena o castigo explicito", "Maleiwa, Ma'ayüi, Ulapiuy o segunda persona"],
    culture: CULTURE.kasemashi,
  }),
  "maleiwa_viejo_fuego__identity_sheet": humanIdentity({
    key: "maleiwaOld",
    title: "Maleiwa · apariencia de viejo mendicante",
    focus: "Un unico hombre Wayuu mayor de cuerpo completo, digno, delgado y erguido, cabello y barba corta gris. Viste Kotin largo arena gris sobre Kemiisa cruda integra, Wusi carbon, S'ira ocre, waireñas oscuras y Wom bajo. Sostiene un baston simple; no halo, emblema divino, harapos o pies desnudos.",
    scene: "Sendero abierto bajo luz de tarde, hombre mayor en plano medio y planicie en profundidad; ninguna casa o niño.",
    must: ["exactamente un hombre mayor completo", "Kotin y Kemiisa como dos coberturas visibles", "ropa usada pero integra", "edad y mendicidad narrativas sin degradacion"],
    avoid: ["dios europeo, mago, profeta, rey, corona, halo, cayado brillante", "harapos, torso desnudo, costillas, pies descalzos, caricatura de pobreza", "Kasemashi o segunda persona"],
  }),
  "flecha_meteoro_awaalas__phenomenon_rule": direction({
    title: "Awa'alas · flecha convertida en meteoro",
    focus: "Una unica flecha sencilla, visible una sola vez en toda la imagen, atraviesa cuatro estados sugeridos por una unica trayectoria material continua: salida baja, ascenso, oscurecimiento parcial del disco solar y estela incandescente de papel rojo-ocre que viaja hacia agua pantanosa o mar distante. No aparece otra flecha en el suelo, cielo o agua. La flecha conserva silueta en la estela; no es misil, cometa con rostro o explosión.",
    scene: "Gran panorama 16:9 de planicie, cielo y borde de agua, con trayectoria curva construida por laminas fisicas separadas.",
    must: ["exactamente una flecha visible en total y una sola trayectoria", "ninguna flecha adicional en suelo, cielo o agua", "disco solar parcialmente oscurecido sin rostro", "estela hecha de capas rojas y ocres, no particulas digitales", "destino acuatico distante y no impacto violento"],
    avoid: ["Kasemashi, Maleiwa o persona", "explosion, crater, bomba, cohete, fuego artificial, apocalipsis", "texto, flechas graficas adicionales, lineas de movimiento dibujadas"],
  }),
  "piedras_puloi_fuego__spatial_model": direction({
    title: "Piedras de Pülowi · Simala y Lapuna",
    focus: "Enclave mineral de Pülowi sin arquitectura: una gran piedra blanca Simala y una gran piedra negra Lapuna se alzan separadas por una grieta profunda pero recorrible. Entre sus estratos internos aparece un nucleo rojo mate de fuego contenido; piedras menores forman planos sucesivos hacia un pantano o mar remoto. No portal, rostros, prisión o humanidad destruida.",
    scene: "Vista oblicua baja 16:9 desde laminas minerales cercanas hacia Simala, Lapuna y agua lejana bajo cielo mineral.",
    must: ["exactamente dos piedras dominantes, una blanca y una negra", "grieta espacial entre ambas", "nucleo rojo interno discreto", "seis o mas capas minerales y destino acuatico distante"],
    avoid: ["persona, niño, cadáver, humanidad petrificada, huesos, ruina", "yin-yang, bien contra mal, portal, altar, templo, cristales de fantasia, lava"],
  }),
  "maayui_ulapiuy__group_grammar": direction({
    title: "Ma'ayüi y Ulapiuy · pareja de transformadores",
    focus: "Exactamente DOS hombres Wayuu adultos completos y no gemelos: Ma'ayüi con Kemiisa cruda, Wusi carbon, S'ira ocre y waireñas oscuras; Ulapiuy con Kotin azul humo, Wusi arena, S'ira carbon y waireñas arcilla. Tienen rostros, altura y postura distintos. Ambos separan capas de piedra con manos abiertas sin tocar fuego ni ejercer violencia.",
    scene: "Enclave mineral con piedra blanca y negra en planos laterales, dos hombres en posiciones asimetricas y una salida roja tenue hacia el fondo.",
    must: ["exactamente dos adultos completos", "Kemiisa versus Kotin claramente distintos", "ningun torso descubierto", "prendas, fajas y calzado completamente lisos; sin bolsas, correas decoradas o cenefas", "accion cooperativa legible sin clonarlos ni fundirlos con otros mellizos"],
    avoid: ["Tumajü'le, Peeliyuu, gemelos identicos, niños, tercera persona", "superheroes, hechiceros, rayos de manos, armas, halo, pintura facial"],
    materialCulture: TRANSFORMERS_CULTURE,
  }),
  "varitas_friccion__object_sheet": direction({
    title: "Dos varitas de friccion · fuego en la madera",
    focus: "Ficha de exactamente DOS piezas de madera de Caujaro u otras maderas: una base plana con pequeña cavidad y una varita vertical redondeada. Se muestran en tres disposiciones dentro de un suelo continuo: separadas, encajadas sin movimiento y despues con una mota de brasa en polvo carbonizado. No manos, instrucciones, flechas o secuencia operativa detallada.",
    scene: "Suelo fibroso full bleed con las tres disposiciones en planos sucesivos, hojas ovaladas de Caujaro muy secundarias.",
    must: ["exactamente dos tipos de pieza consistentes en las tres disposiciones", "cavidad y punta redondeada legibles", "una sola mota de brasa en el estado final", "objeto cultural sobrio, no tutorial"],
    avoid: ["persona, mano, Serumáa, Jimut, taladro moderno, fosforo, encendedor", "manual paso a paso, texto, numeros, flechas, llamas grandes o humo"],
  }),
};

export default WAYUU_FIRE_DIRECTIONS_V3;
