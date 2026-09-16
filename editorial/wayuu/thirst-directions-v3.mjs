/**
 * Direcciones especificas del lote 16 · La sed de los forasteros.
 *
 * La reauditoria vuelve a la transcripcion primaria de Chaves: dos comerciantes
 * alijuna que iban a vender panela se detienen en Utta, cerca de Katetamana,
 * por sed y cansancio y quedan como formas petreas. El relato no nombra
 * viajeros Wayuu, familias, jagüey, recipientes de agua, transporte ni
 * vestuario. Esos elementos no se visualizan ni se usan para rellenar la escena.
 */

const SOURCES = ["chaves_la_sed_1946", "banrep_guajira_memoria_visual_2002"];

const COMMON_AVOID = [
  "persona Wayuu añadida, familia, comunidad, rancheria, anfitrion, vendedor local o multitud",
  "jagüey, pozo, alberca, tinaja, cantimplora, botella, recipiente de agua, oasis o agua visible",
  "mule, donkey, horse, cart, truck, bicycle or any transport not named by the source",
  "Wayuu Wusi, Aichee, S'ira, Kemiisa, Kotin, manta, Womu, waireñas, kana, clan mark or face paint transferred onto an alijuna trader",
  "pan-indigenous costume, Mexican desert costume, gaucho, cowboy, safari explorer, colonial conquistador or hacendado caricature",
  "agave, aloe, maguey, yucca rosette, pineapple-like desert plant, arm-branched saguaro or imported generic western-desert flora",
  "violence, corpse, exposed anatomy, painful petrification, cracked skin, blood, humiliation or racial hierarchy",
  "text, label, title, arrows, numbers, watermark, signature or graphic panel",
  "flat collage, 2D illustration, smooth CGI, plastic doll, visible cardboard border, base, pedestal, table, studio or exterior of the diorama",
];

function dimension(decision, evidence, rationale, specification) {
  return { decision, evidence, rationale, ...(specification ? { specification } : {}) };
}

function merchantCulture({
  name,
  chosen,
  alternative,
  layers,
  components,
  attire,
  footwear,
  accessories,
  continuity,
}) {
  return {
    cultural_scope: "non_wayuu_alijuna",
    person_scope: name,
    temporal_register: "historic_postcontact_indeterminate",
    time_basis: "el relato fue publicado en 1946 y contiene comercio de panela, pero no fija la fecha del suceso, procedencia, etnia, fisonomia ni vestuario de los alijuna; las prendas rurales de contacto son una traduccion editorial reversible apoyada solo por el archivo visual regional de las decadas de 1920 a 1940",
    narrative_moment: "identidad individual durante el viaje de comercio, antes del cansancio y separada de la petrificacion",
    activity_context: "caminar bajo sol y viento por terreno semiarido para vender panela, sin atribuir modo de transporte o reserva de agua",
    occasion_context: "travel",
    considered_ensembles: [
      {
        id: "historical_rural_complete",
        label: chosen,
        fit: "elegido como conjunto de viaje rural sobrio y completamente cubierto",
        rationale: "reconoce el marco historico de contacto sin asignar al comerciante una identidad etnica, uniforme profesional o vestuario Wayuu que la fuente no documenta",
        source_refs: SOURCES,
      },
      {
        id: "historical_rural_alternative",
        label: alternative,
        fit: "posible pero no elegido para conservar dos siluetas individuales distintas",
        rationale: "pertenece al mismo registro historico reversible, aunque repetiria demasiado la silueta del otro comerciante",
        source_refs: SOURCES,
      },
      {
        id: "ethnic_or_fantasy_costume",
        label: "prendas Wayuu trasladadas al alijuna, traje de hacendado, explorador o vaquero de fantasia",
        fit: "rechazado",
        rationale: "alijuna indica exterioridad respecto de la sociedad Wayuu y no una raza o uniforme; usar marcadores Wayuu o una caricatura colonial falsearia la relacion narrada",
        source_refs: ["chaves_la_sed_1946"],
      },
    ],
    chosen_ensemble: {
      id: "historical_rural_complete",
      rationale: "situa al individuo como comerciante rural de contacto sin convertir la ropa en dato etnografico ni reducirlo a un tipo racial",
      specification: chosen,
      layers,
    },
    attire: dimension("include_contextual", "editorial_reversible", "Chaves no describe la ropa; camisa y pantalon completos funcionan como decision historica prudente y evitan desnudez o disfraz etnico", attire),
    footwear: dimension("include_contextual", "editorial_reversible", "el viaje a pie exige un calzado legible, pero la fuente no permite fijar material o fabricante exactos", footwear),
    accessories: dimension("include_contextual", "editorial_reversible", "un sombrero liso responde al sol y diferencia la silueta; no se agregan arma, joya, mochila, cantimplora o insignia", accessories),
    face_paint: dimension("omit_contextually", "source_specific", "los personajes son alijuna y el relato no registra pintura, ceremonia o proteccion facial; no se les transfieren practicas Wayuu"),
    wardrobe_profile: "male",
    wardrobe_components: components,
    source_refs: SOURCES,
    continuity_markers: continuity,
  };
}

const MERCHANT_ONE_CULTURE = merchantCulture({
  name: "primer comerciante alijuna, adulto individual cuya procedencia y etnia no estan documentadas",
  chosen: "camisa de trabajo ocre polvo de manga larga y cuello sencillo, pantalon completo carbon, cinturon liso oscuro, zapatos bajos cerrados color tierra y sombrero tejido de ala media sin banda decorada",
  alternative: "camisa cruda cerrada, pantalon arena, zapatos bajos y gorra blanda de tela",
  layers: [
    "camisa ocre polvo de manga larga completamente abotonada",
    "pantalon carbon completo y holgado",
    "cinturon liso oscuro en la cintura",
    "zapatos bajos cerrados color tierra",
    "sombrero tejido de ala media completamente liso",
  ],
  components: ["camisa de manga larga", "pantalon completo", "cinturon liso", "calzado cerrado", "sombrero de ala media"],
  attire: "camisa ocre polvo de manga larga, cuello sencillo y ruedo dentro de un pantalon carbon completo; tela mate usada pero integra, sin bordado, emblema o uniforme",
  footwear: "dos zapatos bajos cerrados color tierra, polvorientos y sin espuelas",
  accessories: "un sombrero tejido de ala media sin cinta decorada; manos vacias y ningun accesorio adicional",
  continuity: [
    "camisa ocre polvo y pantalon carbon",
    "sombrero de ala media liso",
    "rostro adulto anguloso de papel canela medio, nariz recta y bigote corto discreto",
    "cabello oscuro corto visible bajo el sombrero",
    "sin marcadores Wayuu, pintura facial, joyas o emblemas",
  ],
});

const MERCHANT_TWO_CULTURE = merchantCulture({
  name: "segundo comerciante alijuna, adulto individual cuya procedencia y etnia no estan documentadas",
  chosen: "camisa de trabajo azul humo de manga larga sin chaqueta, pantalon completo arena rojiza, tirantes carbon lisos, botines bajos oscuros y gorra blanda de tela cruda",
  alternative: "camisa ocre, pantalon oscuro, cinturon y sombrero tejido de ala media",
  layers: [
    "camisa azul humo de manga larga con cuello pequeño",
    "pantalon arena rojiza completo y holgado",
    "dos tirantes carbon lisos sobre los hombros",
    "botines bajos oscuros",
    "gorra blanda de tela cruda sin insignia",
  ],
  components: ["camisa de manga larga", "pantalon completo", "tirantes lisos", "botines bajos", "gorra blanda"],
  attire: "camisa azul humo de manga larga y cuello pequeño bajo dos tirantes carbon lisos, con pantalon arena rojiza completo; tela mate usada pero integra, sin chaqueta, bordado o uniforme",
  footwear: "dos botines bajos oscuros de suela simple, polvorientos y sin espuelas",
  accessories: "una gorra blanda de tela cruda sin insignia; manos vacias y ningun accesorio adicional",
  continuity: [
    "camisa azul humo, tirantes carbon y pantalon arena rojiza",
    "gorra blanda cruda",
    "rostro adulto redondo de papel siena oscuro, nariz ancha y menton corto sin barba",
    "cabello negro ondulado corto visible en los lados",
    "sin marcadores Wayuu, pintura facial, joyas o emblemas",
  ],
});

function identityDirection({ title, focus, scene, culture, must, avoid = [] }) {
  return {
    title,
    focus,
    scene,
    must_show: must,
    avoid: [...COMMON_AVOID, ...avoid],
    material_culture: culture,
  };
}

function stateDirection({ title, focus, scene, culture, must, avoid = [] }) {
  return {
    title,
    focus,
    scene,
    must_show: must,
    avoid: [...COMMON_AVOID, ...avoid],
    material_culture: culture,
  };
}

export const WAYUU_THIRST_DIRECTIONS_V3 = {
  "comerciante_alijuna_1__identity_sheet": identityDirection({
    title: "Primer comerciante alijuna · identidad individual",
    focus: "Exactamente UN comerciante alijuna adulto de cuerpo completo y escala humana normal. Rostro anguloso de papel canela medio, nariz recta, bigote corto discreto y cabello oscuro corto. Viste camisa ocre polvo de manga larga, pantalon carbon completo, cinturon liso, zapatos bajos cerrados y sombrero tejido de ala media sin decoracion. Postura de caminante atento, no derrotado. No sostiene panela, agua, arma o herramienta: la mercancia tiene ficha separada y la fuente no describe como la transportaba.",
    scene: "Sendero semiarido de papel con piedras cercanas, dos arbustos muy bajos de hojas menudas, figura sola en plano medio y lomas lejanas bajo sol blanco; no cactus, rosetas ni arbol seco protagonista; seis o mas capas fisicas llenan el cuadro sin mostrar base exterior.",
    culture: MERCHANT_ONE_CULTURE,
    must: [
      "exactamente un hombre adulto completo de cabeza a zapatos y ninguna otra persona",
      "camisa ocre, pantalon carbon, cinturon, zapatos cerrados y sombrero liso claramente separados",
      "rostro, bigote corto, proporciones y colores repetibles en la hoja de estados",
      "manos completamente vacias y postura de viaje serena",
      "primer plano, figura, sendero, lomas y cielo en distancias fisicas distintas con sombras reales entre capas",
    ],
    avoid: ["panela, paquete, bolsa, mochila, cantimplora, botella, baston, animal de carga or second trader"],
  }),
  "comerciante_alijuna_1__state_sheet": stateDirection({
    title: "Primer comerciante alijuna · viaje, cansancio y forma petrea",
    focus: "Exactamente TRES manifestaciones continuas del mismo comerciante, sin paneles: primero camina erguido con camisa ocre, pantalon carbon y sombrero; despues se sienta de manera estable y no agonizante, con el mismo rostro y conjunto completo; al fondo queda UNA sola roca de altura aproximada a la mitad de un adulto, no un monton de piedras. Esa roca es una pieza mineral continua, vertical y estrecha, con hombros apenas sugeridos, una pequeña cresta horizontal que recuerda el ala del sombrero y estratos ocre-carbon que recuerdan el conjunto. No tiene rostro, piel, manos, piernas, ropa literal o cuerpo atrapado.",
    scene: "Un sendero continuo asciende desde primer plano hacia Utta: caminante cercano, figura sentada a media distancia y roca individual profunda pero claramente legible; solo piedras bajas y arbustos menudos, sin cactus ni Katetamana dentro de esta ficha. La transicion ocurre por distancia y material, no por viñetas.",
    culture: MERCHANT_ONE_CULTURE,
    must: [
      "exactamente dos representaciones humanas del mismo hombre y una sola forma petrea final",
      "mismo rostro, bigote, sombrero, camisa ocre, pantalon carbon y calzado en los dos estados humanos",
      "cansancio legible por postura sentada y hombros bajos, sin dolor o muerte explicitos",
      "una sola roca continua, no apilada, menor que un adulto, con hombros apenas sugeridos, cresta de sombrero y estratos ocre-carbon",
      "tres estados separados por profundidad real dentro de un unico mundo full bleed",
    ],
    avoid: ["second trader, helping person, Mareiwa as a person, skeleton, cracked human skin, half-stone body, collapse or burial", "cairn, stacked stones, balanced rocks, stone tower, pyramid, monument, statue or giant rock"],
  }),
  "comerciante_alijuna_2__identity_sheet": identityDirection({
    title: "Segundo comerciante alijuna · identidad individual",
    focus: "Exactamente UN comerciante alijuna adulto de cuerpo completo, individual y distinto del primero. Rostro redondo de papel siena oscuro, nariz ancha, menton corto sin barba y cabello negro ondulado corto. Viste camisa azul humo de manga larga, pantalon arena rojiza completo, dos tirantes carbon lisos, botines bajos y gorra blanda cruda sin insignia. Postura estable de caminante cuidadoso. No sostiene panela, agua, arma o herramienta.",
    scene: "Sendero semiarido de papel visto desde angulo ligeramente mas bajo, con ramas secas cercanas, figura sola en plano medio y horizonte amplio; seis o mas planos fisicos y ninguna base visible.",
    culture: MERCHANT_TWO_CULTURE,
    must: [
      "exactamente un hombre adulto completo de cabeza a botines y ninguna otra persona",
      "camisa azul humo, tirantes carbon, pantalon arena rojiza, botines y gorra cruda claramente separados",
      "rostro redondo sin barba, proporciones y colores repetibles en la hoja de estados",
      "manos completamente vacias y postura de viaje serena",
      "primer plano, figura, sendero, horizonte y cielo en distancias fisicas distintas con sombras reales",
    ],
    avoid: ["first trader, ochre shirt, wide-brim hat, panela, package, backpack, canteen, bottle, staff or pack animal"],
  }),
  "comerciante_alijuna_2__state_sheet": stateDirection({
    title: "Segundo comerciante alijuna · viaje, cansancio y forma petrea",
    focus: "Exactamente TRES manifestaciones continuas del mismo segundo comerciante, sin paneles: primero camina con camisa azul humo, tirantes, pantalon arena rojiza y gorra; despues se arrodilla apoyando una mano en su propia rodilla, estable y no agonizante, con el mismo rostro y conjunto; al fondo queda UNA sola roca de altura aproximada a la rodilla de un adulto, no una piramide ni monumento. Esa roca es una pieza mineral continua, ancha e inclinada como el torso arrodillado, con una cresta corta que recuerda la gorra y pocos estratos azul humo-arena rojiza. No tiene rostro, piel, manos, piernas, ropa literal o cuerpo atrapado.",
    scene: "Otro tramo del mismo sendero conduce hacia Utta: caminante cercano, figura arrodillada a media distancia y roca individual pequeña y profunda; solo piedras bajas y arbustos menudos, sin cactus ni Katetamana en esta ficha; transicion por distancia, aire y material.",
    culture: MERCHANT_TWO_CULTURE,
    must: [
      "exactamente dos representaciones humanas del mismo hombre y una sola forma petrea final",
      "mismo rostro, gorra, camisa azul, tirantes, pantalon arena y botines en ambos estados humanos",
      "cansancio legible por la rodilla baja y hombros contenidos, sin dolor o muerte explicitos",
      "una sola roca continua y pequeña, no piramidal, con inclinacion del torso arrodillado, cresta de gorra y pocos estratos azul-arena",
      "tres estados separados por profundidad real dentro de un unico mundo full bleed",
    ],
    avoid: ["first trader, helping gesture toward another person, Mareiwa as a person, skeleton, cracked human skin, half-stone body or grave", "pyramid, striped monument, giant boulder, cairn, stacked stones, statue, architectural form or mountain-sized rock"],
  }),
  "carga_panela__object_sheet": {
    title: "Panela para la venta · mercancia sobria",
    focus: "Una ficha cuadrada de mercancia, no una escena: exactamente OCHO bloques compactos de panela color ocre miel oscuro, traducidos a papel mate fibroso. CUATRO forman un paquete bajo envuelto solo en papel crudo abierto en los extremos y atado con dos cuerdas lisas; DOS bloques quedan apilados; DOS quedan separados para mostrar su volumen simple. La forma de bloque y el embalaje se declaran utileria editorial reversible porque Chaves solo nombra panela para vender.",
    scene: "Suelo continuo de muchas capas arena y carbon que llena los cuatro bordes; paquete en primer plano, pila en plano medio y dos bloques separados al fondo cercano, sin divisores o exterior de estudio.",
    must_show: [
      "exactamente ocho bloques de panela contables: cuatro en paquete, dos apilados y dos separados",
      "un solo envoltorio crudo parcial y exactamente dos cuerdas lisas sin patron",
      "volumen compacto ocre miel con cantos imperfectos de papel, nunca alimento fotografico",
      "ningun modo de transporte, recipiente de agua, marca comercial, precio o texto",
      "tres profundidades fisicas y composicion full bleed sin soporte exterior visible",
    ],
    avoid: [...COMMON_AVOID,
      "person, hand, merchant, animal, cart, saddle, market stall, shop, scale or money",
      "sugar cane, molasses jar, candy, chocolate, gold bars, bricks, bread or packaged supermarket product",
      "sack, basket, decorated mochila, printed wrapper, logo, label, barcode or invented historical brand",
    ],
  },
  "utta__spatial_model": {
    title: "Utta cerca de Katetamana · lugar de las dos formas petreas",
    focus: "Modelo espacial de Utta como lugar narrativo no georreferenciado. Un sendero estrecho entra desde primer plano y se divide alrededor de exactamente DOS formas petreas antropomorfas abstractas: una vertical y estrecha con estratos ocre-carbon; otra mas ancha e inclinada con estratos azul humo-arena rojiza. Son piedras completas integradas al suelo, sin cara, extremidades, ropa literal o cuerpos visibles. Katetamana aparece como un solo cerro lejano reconocible por su silueta ya establecida, nunca como mujer o cuerpo. La extrañeza nace de que las dos piedras conservan postura y color de los comerciantes dentro de un territorio inmenso, no de efectos luminosos.",
    scene: "Vista oblicua baja 16:9: laminas de suelo y pequeñas piedras en primer plano, sendero y dos formas petreas en planos medios separados, planicie amplia y Katetamana en el horizonte bajo sol blanco; siete o mas profundidades fisicas con aire y oclusiones.",
    must_show: [
      "exactamente dos formas petreas distintas, una estrecha vertical ocre-carbon y otra ancha inclinada azul-arena",
      "ninguna persona, rostro, extremidad, prenda literal, cadáver o metamorfosis en curso",
      "un unico sendero que se divide alrededor de las piedras y vuelve a unirse en profundidad",
      "un solo cerro Katetamana muy lejano y ninguna coordenada, mapa, letrero o poblado",
      "territorio semiarido en papel con siete o mas planos y sombras fisicas entre capas",
      "mundo full bleed hasta los cuatro bordes sin base, carton, pedestal, mesa o estudio",
    ],
    avoid: [...COMMON_AVOID,
      "panela, package, abandoned cargo, grave goods, memorial, altar, cross, shrine, tourist landmark or road sign",
      "human statue, carved face, moai, monolith, tombstone, two standing people, fossilized bodies or visible clothing",
      "glowing cracks, aura, portal, magic smoke, lightning, runes, divine beam, dramatic storm or fantasy crystals",
      "Mexican saguaro, Monument Valley, Sahara dunes, Grand Canyon, oasis or generic western desert",
    ],
  },
};

export default WAYUU_THIRST_DIRECTIONS_V3;
