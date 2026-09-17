// Keyframes de escena de El salto del Tequendama — 11 bloques × 2 = 22 cuadros ≈ 110 s.
// Guion: docs/videos/muiscas/mvp-guiones/guion-el-tequendama-v7.json (N=11)
// Acta:  docs/videos/muiscas/actas/acta-el-tequendama.json           (21 nudos)
//
// DOCTRINA (de `muisca-bochica-escenas`): cada escena declara ESCALA + LUZ +
// OBJETO ANCLA + CAPA DE PRIMER PLANO, y ancla identidad con EL MISMO / LA
// MISMA ... de la referencia.
//
// DESLINDE CONTRA BOCHICA (video YA PRODUCIDO): `muisca-bochica-escenas` ya
// tiene el instante de la vara volando y el salto naciendo (b7b, b8a). Este
// video NO repite esos planos. Aquí la apertura se ve DESDE ABAJO y DESDE EL
// AGUA, y el peso del relato no está en el milagro sino en lo que queda mal
// hecho: la abertura angosta y el agua que vuelve cada invierno.
//
// DESLINDES DEL ACTA:
// · El remedio NO es completo. La vara era delgada, la abertura quedó angosta
//   y cada invierno las aguas regresan. Nada de salvación limpia.
// · Chibchacum NO es perdonado: en la misma escena en que la sabana se seca,
//   le cargan la tierra encima para siempre. Las dos cosas van juntas.
// · Cuchavira es EL ARCO sobre el que Bochica se para, no un personaje.
// · El cierre NO decide: puente o puerta, la imagen no lo resuelve.
//
// GUION DE LUZ: gris cerrado de vasija → plomizo de invierno → frío del
// desprecio → verde gris de inundación → lluvia en las lomas → el arco como
// única luz de color → contraluz desde la cumbre → blanco de espuma →
// luz baja que delata lo angosto → penumbra del peso → tarde sin fin.

export const SPEC_NAME = "muisca-tequendama-escenas";
export const OUT_DIR = "muiscas/videos/el-tequendama/keyframes";

export const SHARED_AVOID =
  "texto, letras, logos, marcas de agua, marcos o bordes; CGI, render 3D o ilustracion digital pulida; miniatura tilt-shift; maqueta de plastilina, arcilla o resina; terreno o vegetacion modelados en 3D; desenfoque fotografico de poca profundidad de campo; cielo fotografico o en degradado liso; rasgos europeos en cualquier persona; sandalias, calzado, tunicas blancas largas o ropa que no sea la manta muisca de las referencias; coronas, tronos, templos europeos o cruces; piramides, penachos o iconografia mesoamericana; grecas, meandros o cenefas decorativas repetidas; joyeria inventada u oro en el cuerpo; desnudez, sexualizacion o dramatismo de catastrofe moderna; cambiar los rostros, mantas o materiales de los personajes de referencia; gigantes o cuerpos humanos fuera de escala salvo donde la escena lo pida; arcoiris saturado de siete franjas vivas";

export const PALETTE =
  "gris plomo de invierno, verde frio de sabana anegada, pardo de agua turbia, crema de algodon crudo, blanco de espuma y niebla; el oro batido SOLO en la vara y el arco; sin saturacion ni neones";

const VESTUARIO =
  " Vestuario: manta de algodón crudo lisa anudada a un hombro y por encima de la rodilla como en las referencias, todos los pies descalzos, sin cenefas ni joyas.";

const B = "muiscas/biblia";
const kf = (id, refs, scene, avoid) => ({ id, kind: "keyframe", preset: "vertical", refs, scene, avoid });
const kfp = (id, refs, scene, avoid) => ({ id, kind: "keyframe", preset: "vertical", refs, scene: scene + VESTUARIO, avoid });

export const ITEMS = [
  // b1 — La sabana era una vasija cerrada. Dos peñas que no se apartaban.
  kf("b1a", [`${B}/sabana_cultivos`, `${B}/rocas_tequendama`],
    "GRAN PLANO GENERAL cenital suave, luz gris cerrada sin sol. LA MISMA sabana de la referencia vista como un cuenco: los cultivos de papel ocupan el fondo del valle y las montañas lo cierran por los cuatro lados, sin salida visible. Al fondo del cuadro, pequeñas, LAS MISMAS dos peñas juntas de la referencia. EL VALLE ESTÁ COMPLETAMENTE DESHABITADO: no hay una sola figura humana en el encuadre. El río de papel serpentea por el fondo del valle y SE QUEDA ahí, estancado: la cordillera no tiene ninguna muesca, ningún corte y ninguna caída de agua por donde el río pueda salir. Capa de primer plano: el filo oscuro de una loma. Objeto ancla: las dos peñas cerradas.",
    "personas, figuras humanas, siluetas, bastones, varas, cascada, salto de agua, caida de agua, torrente bajando, muesca o corte en la cordillera, desfiladero abierto, abertura en la roca, sol"),
  kf("b1b", [`${B}/rocas_tequendama`],
    "PLANO MEDIO frontal, luz plana y fría. LAS MISMAS dos peñas de la referencia vistas de cerca y de frente, juntas y sin separación, con el río de papel llegando a su pie y quedándose ahí, ancho y quieto, sin salida. La junta entre las dos rocas es una línea cerrada de arriba abajo. Capa de primer plano: el agua detenida en sombra. Objeto ancla: la junta cerrada de las peñas.",
    "personas, cascada, espuma, grieta, luz saliendo de la roca"),

  // b2 — Las aguas se devolvían. Chibchacum, dios de labradores y mercaderes.
  kf("b2a", [`${B}/sabana_anegada`, `${B}/casa_tierras_llanas`],
    "PLANO GENERAL bajo, luz plomiza de aguacero de invierno. LA MISMA sabana anegada de la referencia con el agua devolviéndose sobre los surcos, entrando entre las matas y rodeando LOS MISMOS bohíos de la referencia; lluvia de hilos finos de papel. Todo gris y verde apagado. Sin personas. Capa de primer plano: una mata de maíz medio hundida. Objeto ancla: la línea de agua subiendo por una pared de barro.",
    "personas, botes, rayos, dramatismo de catastrofe moderna"),
  kf("b2b", [`${B}/chibchacum_dios`, `${B}/mercado_bacata`],
    "PLANO MEDIO, luz interior cálida y baja de bohío. EL MISMO Chibchacum de la referencia, de pie y sereno, entre los bultos y las cargas del MISMO mercado de la referencia: mantas dobladas, sal en panes, mazorcas en cestos. Es el dios de los que siembran y de los que cargan, y se ve en lo que lo rodea. Capa de primer plano: un cesto de mazorcas en sombra. Objeto ancla: las manos de Chibchacum sobre una carga.",
    "trono, altar, adoracion, gente arrodillada, oro"),

  // b3 — Murmuraron y regatearon las ofrendas. Él sintió el desprecio.
  kfp("b3a", [`${B}/familias_muiscas`, `${B}/figurilla_chibchacum`],
    "PLANO MEDIO CORTO, luz de mediodía dura y sin gracia. TRES adultos de LAS MISMAS familias de la referencia, de perfil y muy juntos, regateando: uno retira con la mano LA MISMA figurilla de ofrenda de la referencia de un cuenco y la guarda; los otros dos hablan entre ellos mirando hacia otro lado. Nadie está en actitud de rezo. Capa de primer plano: el borde del cuenco de ofrendas. Objeto ancla: la figurilla a medio retirar.",
    "rostros grotescos, caricatura de avaricia, monedas, dinero"),
  kf("b3b", [`${B}/chibchacum_dios`],
    "PRIMER PLANO MEDIO, luz azul fría que entra de lado. EL MISMO Chibchacum de la referencia de tres cuartos, quieto, la mirada baja y fija, la mandíbula apretada; el frío del desprecio se ve en la luz, no en el gesto: su lado iluminado es azul y el otro está en sombra dura. Fondo oscuro y neutro. Capa de primer plano: un hombro en sombra. Objeto ancla: el ojo iluminado.",
    "ira teatral, gritos, fuego, ojos brillantes, sobrenatural"),

  // b4 — Sacó de tierras lejanas dos ríos. El agua se tragó todo.
  kf("b4a", [`${B}/sabana_anegada`, `${B}/recodo_funza`],
    "GRAN PLANO GENERAL en picado, luz verde gris de tormenta. DOS ríos de papel entrando en el cuadro desde dos esquinas distintas del fondo y juntándose sobre LA MISMA sabana de la referencia, que ya es una lámina de agua turbia; LOS MISMOS recodos de la referencia desbordados. Sin personas. Capa de primer plano: la copa de un árbol asomando del agua. Objeto ancla: el punto donde los dos ríos se juntan.",
    "personas, olas de mar, tsunami, espuma blanca, dramatismo moderno"),
  kf("b4b", [`${B}/casa_tierras_llanas`, `${B}/sabana_anegada`],
    "PLANO DETALLE, luz gris difusa. EL MISMO bohío de la referencia con el agua ya dentro: la paja del alero goteando, una vasija volcada flotando de lado, un camino de piedras de papel desapareciendo bajo el agua turbia. Nadie alrededor, todo abandonado hace poco. Capa de primer plano: la vasija que flota. Objeto ancla: el camino que se hunde.",
    "personas, cadaveres, animales muertos, dramatismo excesivo"),

  // b5 — Subieron a las lomas. Llenaron de ofrendas el templo de Bochica.
  kfp("b5a", [`${B}/familias_muiscas`, `${B}/loma_pelada_noche`],
    "PLANO GENERAL en contrapicado suave, luz de lluvia fina que empieza a escampar. Una fila de gente de LAS MISMAS familias de la referencia subiendo DE ESPALDAS por LA MISMA loma pelada de la referencia, cargando en las manos lo poco que cabía: un cesto, una manta enrollada, una vasija. Abajo, al fondo, el agua gris. Capa de primer plano: el barro de la cuesta en sombra. Objeto ancla: la vasija que carga el último.",
    "rostros de frente, llanto, panico, multitud desbordada, niños llorando"),
  kfp("b5b", [`${B}/templo_ofrendas`, `${B}/figurilla_chibchacum`],
    "PLANO MEDIO interior, luz de lámparas de sebo, cálida y escasa. EL MISMO templo de ofrendas de la referencia con el suelo cubierto de ofrendas hasta no caber: figurillas de BARRO COCIDO PARDO idénticas a LA MISMA de la referencia, mantas de algodón crudo dobladas, cuencos de barro y mazorcas. TODO es barro, algodón, madera y maíz: en este cuadro NO hay una sola pieza de oro ni de metal, ni brillos dorados. Dos manos dejando una figurilla más en el borde del montón. Capa de primer plano: el montón en sombra. Objeto ancla: la última figurilla de barro.",
    "oro, tunjos dorados, metal, brillos dorados, joyas, El Dorado, cruces, altares europeos, sacerdotes con vestiduras"),

  // b6 — Un arco de luz sobre la llanura. En su cumbre, Bochica.
  kf("b6a", [`${B}/valle_anegado_arco`, `${B}/sabana_anegada`],
    "GRAN PLANO GENERAL, luz que se abre después de la lluvia. EL MISMO arco de la referencia tendido de lado a lado sobre LA MISMA llanura inundada de la referencia: una sola banda ancha de luz pálida y lechosa, apenas teñida de ocre y gris; NO tiene franjas de colores separadas ni se parece a un arcoíris de siete colores: es luz, no color. El agua gris debajo lo devuelve partido. Sin personas. Capa de primer plano: juncos a contraluz. Objeto ancla: el arranque del arco tocando el agua.",
    "arcoiris saturado, siete franjas vivas, personas, angeles, nubes fotográficas"),
  kf("b6b", [`${B}/bochica_anciano`, `${B}/valle_anegado_arco`, `${B}/vara_dorada`],
    "CONTRAPICADO LARGO desde el agua, contraluz dorado. EL MISMO Bochica anciano de la referencia, pequeño y recortado, de pie en la cumbre del MISMO arco de la referencia, con LA MISMA vara dorada de la referencia en la mano derecha en vertical. La figura se lee por silueta contra la luz; la barba y la manta movidas por el viento. Capa de primer plano: la superficie del agua inundada. Objeto ancla: la vara vertical contra el cielo.",
    "rostro en primer plano, aureola, rayos divinos, alas, gente adorando"),

  // b7 — Llamó a los caciques. (CITA: no les quitaré esos dos ríos)
  kfp("b7a", [`${B}/gameza_cacique`, `${B}/sabana_anegada`],
    "PLANO MEDIO LARGO a la altura de los ojos, luz dorada baja. CUATRO caciques como EL MISMO de la referencia de pie en la orilla del agua, en semicírculo abierto hacia el fondo del cuadro, todos mirando hacia arriba y hacia afuera de cuadro. No hay nadie frente a ellos en el encuadre: a quien escuchan está fuera. Capa de primer plano: el agua lamiendo la orilla. Objeto ancla: las cuatro cabezas alzadas.",
    "arrodillarse, adoracion, manos juntas, llanto, figura divina en cuadro"),
  kf("b7b", [`${B}/rocas_tequendama`, `${B}/vara_dorada`],
    "PLANO GENERAL desde el nivel del agua, luz dorada de tarde. LAS MISMAS dos peñas cerradas de la referencia al fondo, y muy arriba y pequeña, apenas insinuada, LA MISMA vara dorada de la referencia señalándolas desde el arco. El cuadro está construido para que la sierra ocupe el peso y la promesa sea un punto de luz. Capa de primer plano: el agua quieta en sombra. Objeto ancla: la punta de la vara apuntando a la junta.",
    "grieta ya abierta, cascada, espuma, personas"),

  // b8 — La vara mordió la peña y el agua huyó. (NO repetir el plano de bochica)
  kf("b8a", [`${B}/rocas_tequendama`],
    "PLANO DETALLE CERRADÍSIMO, luz rasante que entra por la fisura. El punto exacto donde LA MISMA junta de las peñas de la referencia se rompe: capas de papel-roca separándose una de otra, un hilo de luz atravesando la fisura de arriba abajo y el primer chorro de agua colándose a presión por lo más angosto. NO se ve el conjunto de la cascada ni la vara. Capa de primer plano: el canto astillado de la roca. Objeto ancla: el hilo de luz en la fisura.",
    "plano general de cascada, vara en cuadro, personas, salto completo, arcoiris"),
  kf("b8b", [`${B}/sabana_anegada`, `${B}/sabana_cultivos`],
    "GRAN PLANO GENERAL cenital, luz que va aclarando de gris a limpio. LA MISMA sabana de la referencia vaciándose: el agua retrocede y deja ver los surcos de LOS MISMOS cultivos de la referencia, con la marca de barro claro señalando hasta dónde llegó. Se lee el paso del tiempo en las franjas del légamo. Sin personas. Capa de primer plano: légamo agrietado. Objeto ancla: la línea de barro más alta.",
    "personas, celebracion, banderas, sol pleno"),

  // b9 — La vara era delgada y la abertura quedó angosta.
  kf("b9a", [`${B}/salto_tequendama`],
    "PLANO GENERAL FRONTAL, luz baja que entra de costado y delata el tamaño. EL MISMO salto del Tequendama de la referencia visto de frente, pero el encuadre subraya lo ESTRECHO: dos paredes enormes de roca de papel casi tocándose y, entre ellas, una columna de agua flaca para todo lo que tiene que pasar. Las paredes ocupan dos tercios del cuadro y el agua un tercio. Capa de primer plano: el borde de la peña en sombra. Objeto ancla: el estrechamiento entre las dos paredes.",
    "cascada ancha y triunfal, arcoiris, personas, espuma gloriosa"),
  kf("b9b", [`${B}/sabana_anegada`, `${B}/sabana_cultivos`],
    "PLANO GENERAL bajo, luz gris de otro invierno igual al primero. LOS MISMOS campos bajos de la referencia otra vez con agua entre los surcos, no tanta como antes pero la misma agua y el mismo gris; LAS MISMAS matas de la referencia con el pie hundido. La escena rima a propósito con el invierno del comienzo. Capa de primer plano: un surco encharcado. Objeto ancla: el agua otra vez entre las matas.",
    "personas, inundacion total, dramatismo, sol"),

  // b10 — Bochica cargó la tierra sobre los hombros de Chibchacum.
  kf("b10a", [`${B}/chibchacum_dios`],
    "CONTRAPICADO CERRADO, penumbra de luz baja y lateral. EL MISMO Chibchacum de la referencia de espaldas y de rodillas, visto desde abajo, con los hombros y la nuca cargando un peso que sale de cuadro por arriba; la espalda tensa, las manos abiertas contra el suelo. NO se ve qué carga: el peso está fuera del encuadre. Capa de primer plano: una mano abierta contra la tierra. Objeto ancla: la nuca tensa.",
    "globo terraqueo, planeta, esfera, Atlas griego, cadenas, sangre"),
  kf("b10b", [`${B}/casa_barro_paja`, `${B}/vasija_gacha`],
    "PLANO DETALLE, luz quieta de interior. Dentro del MISMO bohío de la referencia, LA MISMA vasija de barro de la referencia sobre el suelo con el agua de adentro temblando en círculos concéntricos, y un poco de polvo cayendo de la viga de arriba. La casa está entera; sólo el suelo se movió. Capa de primer plano: el canto de la vasija. Objeto ancla: los círculos en el agua.",
    "grietas grandes, derrumbe, casas cayendo, personas corriendo, catastrofe"),

  // b11 — Quedó el salto y su rumor. ¿Puente o puerta?
  kf("b11a", [`${B}/salto_tequendama`],
    "GRAN PLANO GENERAL en contrapicado, luz de tarde constante y sin hora. EL MISMO salto de la referencia cayendo entero, con la niebla de espuma de algodón subiendo del vacío y las paredes húmedas brillando. La imagen está construida para que se oiga: todo el cuadro es agua cayendo y vapor. Sin personas. Capa de primer plano: helechos de papel a contraluz. Objeto ancla: la columna de agua.",
    "personas, arcoiris saturado, turistas, barandas, puentes modernos"),
  kf("b11b", [`${B}/valle_anegado_arco`, `${B}/salto_tequendama`],
    "PLANO GENERAL final, luz indecisa entre tarde y niebla. EL MISMO arco de la referencia otra vez sobre el valle, ahora sin nadie encima, con un extremo apoyado cerca del MISMO salto de la referencia y el otro perdiéndose en la niebla sin que se vea dónde termina. La imagen no resuelve si es puente o puerta y el encuadre lo deja abierto a propósito. Capa de primer plano: la niebla cruzando. Objeto ancla: el extremo del arco que se pierde.",
    "personas, figura divina, puerta dibujada, puente construido, señales, simbolos"),
];
