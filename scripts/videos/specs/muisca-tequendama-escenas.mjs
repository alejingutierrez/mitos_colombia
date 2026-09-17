// Keyframes de escena de El salto del Tequendama — 11 bloques × 2 = 22 cuadros ≈ 110 s.
// Guion: docs/videos/muiscas/mvp-guiones/guion-el-tequendama-v7.json (N=11)
// Acta:  docs/videos/muiscas/actas/acta-el-tequendama.json           (21 nudos)
//
// DOCTRINA v2 — tres reglas que se suman a las de bochica
// (ESCALA + LUZ + OBJETO ANCLA + CAPA DE PRIMER PLANO + anclaje de identidad).
//
// 1. PLANO INICIAL. Es el `start_image` que un modelo de video animará 5 s
//    (ver movimiento-v4.json de bochica: tramos 0-2 / 2-4 / 4-5 s + travelling).
//    Cada escena describe el instante en que la acción EMPIEZA, nunca su
//    resultado, deja aire hacia donde algo va a moverse y declara SE MOVERÁ.
//    Prohibidos los macros sin nada vivo dentro y los estados terminales: la
//    primera vuelta puso la apertura de la peña como un detalle de fisura
//    inmóvil, que es justo lo que un modelo de video no puede animar.
//
// 2. LO MÍTICO SE MUESTRA. La primera vuelta confundió «no inventar
//    iconografía» con «no mostrar el mito» y dejó a CUCHAVIRA —que ES el
//    arcoíris— en una banda lechosa y descolorida. El deslinde real: no se
//    inventan símbolos ajenos a la fuente, pero el arco de Cuchavira es un
//    prodigio del relato y se ve entero, luminoso y con sus colores.
//
// 3. CONTINUIDAD DE PERSONAJE. En cada cuadro se repiten los rasgos fijos.
//
// DESLINDE CONTRA BOCHICA (video YA PRODUCIDO): `muisca-bochica-escenas` ya
// tiene la vara volando (b7b) y el salto naciendo en gran plano (b8a). Este
// video NO repite esos encuadres: aquí la peña se abre vista DESDE EL AGUA y a
// la altura del río, y el peso está en lo que queda mal hecho.
//
// DESLINDES DEL ACTA:
// · El remedio NO es completo: la abertura quedó angosta y el agua vuelve.
// · Chibchacum NO es perdonado: le cargan la tierra en la misma escena.
// · Cuchavira es EL ARCO sobre el que Bochica se para, no un personaje aparte.
// · El cierre NO decide: puente o puerta, la imagen no lo resuelve.
//
// GUION DE LUZ: gris cerrado de vasija → plomizo de invierno → frío del
// desprecio → verde gris de inundación → lluvia en las lomas → EL ARCO como
// estallido de color → contraluz desde la cumbre → blanco de espuma → luz baja
// que delata lo angosto → penumbra del peso → tarde sin fin.

export const SPEC_NAME = "muisca-tequendama-escenas";
export const OUT_DIR = "muiscas/videos/el-tequendama/keyframes";

export const SHARED_AVOID =
  "texto, letras, logos, marcas de agua, marcos o bordes; CGI, render 3D o ilustracion digital pulida; miniatura tilt-shift; maqueta de plastilina, arcilla o resina; terreno o vegetacion modelados en 3D; desenfoque fotografico de poca profundidad de campo; cielo fotografico o en degradado liso; rasgos europeos en cualquier persona; sandalias, calzado, tunicas blancas largas o ropa que no sea la manta muisca de las referencias; coronas, tronos, templos europeos o cruces; piramides, penachos o iconografia mesoamericana; grecas, meandros o cenefas decorativas repetidas; joyeria inventada u oro en el cuerpo; oro, tunjos dorados o metal en las ofrendas; desnudez, sexualizacion o dramatismo de catastrofe moderna; cadaveres, sangre, animales muertos; cambiar los rostros, mantas o materiales de los personajes de referencia; gigantes o cuerpos humanos fuera de escala salvo donde la escena lo pida";

export const DIRECCION =
  "cada cuadro es el PRIMER FOTOGRAMA de un clip de 5 s que animará un modelo de video: la acción está empezando y no terminada, y la composición deja aire en la dirección del movimiento. Cada escena declara SE MOVERÁ: eso es lo que tiene que poder animarse.";

export const PALETTE =
  "gris plomo de invierno, verde frio de sabana anegada, pardo de agua turbia, crema de algodon crudo, blanco de espuma y niebla; el oro batido en la vara; EL ARCO DE CUCHAVIRA es la unica explosion de color del video y si lleva sus franjas; sin neones";

// CONTINUIDAD: rasgos fijos que se repiten en cada cuadro donde salen.
const BOCHICA =
  "EL MISMO Bochica de la referencia (anciano, barba blanca al pecho, pelo gris con cinta, manta cruda al hombro, descalzo)";
const CHIBCHACUM =
  "EL MISMO Chibchacum de la referencia (adulto, rostro ancho y grave, pelo negro a los hombros, manta cruda al hombro, descalzo)";

const VESTUARIO =
  " Vestuario de los demás: manta de algodón crudo lisa anudada a un hombro y por encima de la rodilla, todos los pies descalzos, sin cenefas ni joyas.";

const B = "muiscas/biblia";
const kf = (id, refs, scene, avoid) => ({ id, kind: "keyframe", preset: "vertical", refs, scene, avoid });
const kfp = (id, refs, scene, avoid) => ({ id, kind: "keyframe", preset: "vertical", refs, scene: scene + VESTUARIO, avoid });

export const ITEMS = [
  // b1 — La sabana era una vasija cerrada. Dos peñas que no se apartaban.
  kf("b1a", [`${B}/sabana_cultivos`, `${B}/rocas_tequendama`],
    "GRAN PLANO GENERAL en picado suave, luz gris cerrada sin sol, nubes bajas corriendo. LA MISMA sabana de la referencia vista como un cuenco: los cultivos de papel ocupan el fondo del valle y las montañas lo cierran por los cuatro lados. El río serpentea hasta LAS MISMAS dos peñas juntas de la referencia, al fondo, y allí se queda estancado: la cordillera no tiene muesca, ni corte, ni caída de agua. El valle está deshabitado. SE MOVERÁ: las nubes bajas cruzan, el río brilla y corre despacio, las sombras recorren las parcelas. Capa de primer plano: el filo oscuro de una loma. Objeto ancla: las dos peñas cerradas.",
    "personas, figuras humanas, siluetas, cascada, caida de agua, muesca o corte en la cordillera, desfiladero abierto, sol"),
  kf("b1b", [`${B}/rocas_tequendama`],
    "PLANO GENERAL FRONTAL desde el agua, luz plana y fría. LAS MISMAS dos peñas de la referencia de cerca y de frente, juntas y sin separación, con el río llegando a su pie, ancho y girando en remolinos lentos porque no tiene salida. La junta entre las dos rocas es una línea cerrada de arriba abajo. SE MOVERÁ: el agua gira en remolinos contra la roca y sube un poco, la niebla se desliza por la pared. Capa de primer plano: el agua arremolinada en sombra. Objeto ancla: la junta cerrada.",
    "personas, cascada, espuma, grieta, luz saliendo de la roca, agua completamente inmovil"),

  // b2 — Las aguas se devolvían. Chibchacum, dios de labradores y mercaderes.
  kf("b2a", [`${B}/sabana_anegada`, `${B}/casa_tierras_llanas`],
    "PLANO GENERAL bajo, luz plomiza de aguacero. LA MISMA sabana anegada de la referencia con el agua DEVOLVIÉNDOSE sobre los surcos en ese momento: el borde de la lámina de agua avanza entre las matas y ya toca la base de LOS MISMOS bohíos de la referencia; lluvia de hilos finos de papel cayendo. Queda terreno seco por delante que el agua aún no ha tomado. SE MOVERÁ: la lámina de agua avanza y cubre el terreno seco, la lluvia cae, las matas se doblan. Capa de primer plano: una mata de maíz a punto de hundirse. Objeto ancla: el borde del agua avanzando.",
    "personas, botes, rayos, catastrofe moderna, agua ya estancada y quieta"),
  kf("b2b", [`${B}/chibchacum_dios`, `${B}/mercado_bacata`],
    `PLANO MEDIO, luz interior cálida y baja. ${CHIBCHACUM}. Está de pie y sereno entre los bultos del MISMO mercado de la referencia —mantas dobladas, sal en panes, mazorcas en cestos—, levantando una carga con las dos manos. Es el dios de los que siembran y de los que cargan, y se ve en lo que lo rodea. SE MOVERÁ: él termina de alzar la carga, el polvo flota en la luz, la llama de la lámpara late. Capa de primer plano: un cesto de mazorcas en sombra. Objeto ancla: sus manos bajo la carga.`,
    "trono, altar, adoracion, gente arrodillada, oro, figura estatica sin accion"),

  // b3 — Murmuraron y regatearon las ofrendas. Él sintió el desprecio.
  kfp("b3a", [`${B}/familias_muiscas`, `${B}/figurilla_chibchacum`],
    "PLANO MEDIO CORTO, luz de mediodía dura. TRES adultos de LAS MISMAS familias de la referencia, de perfil y muy juntos, regateando: el de la izquierda está SACANDO del cuenco LA MISMA figurilla de BARRO COCIDO PARDO de la referencia, con la mano ya cerrada sobre ella y el brazo empezando a retirarse; los otros dos hablan entre ellos mirando a otro lado. Nadie está en actitud de rezo. SE MOVERÁ: la mano acaba de sacar la figurilla y la guarda, las bocas hablan. Capa de primer plano: el borde del cuenco. Objeto ancla: la figurilla a medio salir.",
    "rostros grotescos, caricatura de avaricia, monedas, dinero, oro, figurilla ya guardada"),
  kf("b3b", [`${B}/chibchacum_dios`],
    `PRIMER PLANO MEDIO, luz azul fría que entra de lado. ${CHIBCHACUM}. De tres cuartos, girando LENTAMENTE la cabeza hacia el lado iluminado mientras baja la mirada; la mandíbula se está apretando. El frío del desprecio está en la luz, no en el gesto: un lado azul, el otro en sombra dura. Fondo oscuro y neutro. SE MOVERÁ: la cabeza termina de girar, la mandíbula se aprieta, el pelo se mueve. Capa de primer plano: un hombro en sombra. Objeto ancla: el ojo iluminado.`,
    "ira teatral, gritos, fuego, ojos brillantes, sobrenatural, cabeza inmovil"),

  // b4 — Sacó de tierras lejanas dos ríos. El agua se tragó todo.
  kf("b4a", [`${B}/sabana_anegada`, `${B}/recodo_funza`],
    "GRAN PLANO GENERAL en picado, luz verde gris de tormenta. DOS ríos de papel ENTRANDO en el cuadro desde dos esquinas del fondo, con sus dos cabezas de agua turbia avanzando sobre LA MISMA sabana de la referencia y todavía sin juntarse: entre las dos lenguas queda una franja de campo seco. LOS MISMOS recodos de la referencia ya desbordados detrás. SE MOVERÁ: las dos lenguas avanzan y se juntan sobre la franja seca, la tormenta corre. Capa de primer plano: la copa de un árbol. Objeto ancla: el hueco seco entre los dos ríos.",
    "personas, olas de mar, tsunami, dramatismo moderno, los dos rios ya unidos"),
  kf("b4b", [`${B}/casa_tierras_llanas`, `${B}/sabana_anegada`],
    "PLANO MEDIO, luz gris difusa. EL MISMO bohío de la referencia con el agua entrando por la puerta en ese momento: la lámina turbia cruza el umbral y empieza a rodear una vasija que aún está de pie en el suelo de tierra; la paja del alero gotea. Nadie alrededor, abandonado hace poco. SE MOVERÁ: el agua sigue entrando, la vasija se vuelca y empieza a flotar, las gotas caen del alero. Capa de primer plano: el umbral mojado. Objeto ancla: la vasija todavía en pie.",
    "personas, cadaveres, animales muertos, dramatismo excesivo, vasija ya flotando"),

  // b5 — Subieron a las lomas. Llenaron de ofrendas el templo de Bochica.
  kfp("b5a", [`${B}/familias_muiscas`, `${B}/loma_pelada_noche`],
    "PLANO GENERAL en contrapicado suave, lluvia fina que empieza a escampar. Una fila de gente de LAS MISMAS familias de la referencia subiendo DE ESPALDAS por LA MISMA loma pelada de la referencia, cargando lo poco que cabía —un cesto, una manta enrollada, una vasija—; van a media cuesta y por delante les queda loma. Abajo y al fondo, el agua gris. SE MOVERÁ: la fila sigue subiendo, la lluvia amaina, las mantas ondean. Capa de primer plano: el barro de la cuesta. Objeto ancla: la vasija que carga el último.",
    "rostros de frente, llanto, panico, multitud desbordada, fila ya en la cima"),
  kfp("b5b", [`${B}/templo_ofrendas`, `${B}/figurilla_chibchacum`],
    "PLANO MEDIO interior, luz de lámparas de sebo, cálida y escasa. EL MISMO templo de la referencia con el suelo cubierto de ofrendas hasta casi no caber: figurillas de BARRO COCIDO PARDO idénticas a LA MISMA de la referencia, mantas de algodón crudo dobladas, cuencos de barro y mazorcas. TODO es barro, algodón, madera y maíz: ni una pieza de oro ni de metal. Dos manos bajan una figurilla más hacia el borde del montón sin haberla soltado aún. SE MOVERÁ: las manos dejan la figurilla y se retiran, las llamas de sebo laten. Capa de primer plano: el montón en sombra. Objeto ancla: la figurilla que aún no se suelta.",
    "oro, tunjos dorados, metal, brillos dorados, cruces, altares europeos, sacerdotes, ofrenda ya depositada"),

  // b6 — Un arco de luz sobre la llanura. En su cumbre, Bochica. (CUCHAVIRA)
  kf("b6a", [`${B}/valle_anegado_arco`, `${B}/sabana_anegada`],
    "GRAN PLANO GENERAL, el cielo abriéndose después del aguacero. EL MISMO arco de Cuchavira de la referencia TENDIÉNDOSE de lado a lado sobre LA MISMA llanura inundada: un arco ENORME y LUMINOSO de bandas de papel de color —rojo, ocre, verde, azul— que ya apoyó un extremo en el agua y está creciendo hacia el otro lado del cuadro, donde todavía le falta cerrar. Es el prodigio del relato y se ve entero. El agua gris de abajo empieza a devolverlo en su reflejo. SE MOVERÁ: el arco termina de cerrarse hasta el otro extremo, su reflejo se arma en el agua, las nubes se retiran. Capa de primer plano: juncos a contraluz. Objeto ancla: el extremo del arco que avanza.",
    "personas, angeles, nubes fotográficas, arco ya cerrado y quieto, arco palido o descolorido, cielo sin arco"),
  kf("b6b", [`${B}/bochica_anciano`, `${B}/valle_anegado_arco`, `${B}/vara_dorada`],
    `PLANO GENERAL en contrapicado desde el agua, contraluz dorado. ${BOCHICA}. Está apareciendo en la cumbre del MISMO arco de Cuchavira de la referencia —que cruza el cuadro entero con sus bandas de color—, de pie y todavía recortado a media silueta contra la luz, con LA MISMA vara dorada de la referencia empezando a alzarse en la mano derecha. Por delante y por debajo queda toda la llanura inundada. SE MOVERÁ: la vara termina de alzarse, la barba y la manta ondean, la luz de detrás crece. Capa de primer plano: la superficie del agua. Objeto ancla: la vara subiendo.`,
    "rostro en primer plano, aureola, rayos dibujados, alas, gente adorando, vara ya en alto, arco descolorido"),

  // b7 — Llamó a los caciques. (CITA)
  kfp("b7a", [`${B}/gameza_cacique`, `${B}/sabana_anegada`, `${B}/valle_anegado_arco`],
    "PLANO MEDIO LARGO a la altura de los ojos, luz dorada baja con el arco de color visible al fondo. CUATRO caciques como EL MISMO de la referencia de pie en la orilla del agua, en semicírculo abierto hacia el fondo, ALZANDO la cara hacia lo alto: las cabezas van a media subida y no todas al mismo tiempo. A quien escuchan está fuera de cuadro, arriba. SE MOVERÁ: las cuatro cabezas terminan de alzarse, las mantas ondean, el agua lame la orilla. Capa de primer plano: el agua en la orilla. Objeto ancla: las cabezas alzándose.",
    "arrodillarse, adoracion, manos juntas, llanto, figura divina en cuadro, cabezas ya alzadas y quietas"),
  kf("b7b", [`${B}/rocas_tequendama`, `${B}/vara_dorada`],
    "PLANO GENERAL desde el nivel del agua, luz dorada de tarde. LAS MISMAS dos peñas de la referencia llenando el fondo, TODAVÍA CERRADAS Y PEGADAS la una a la otra, sin ninguna abertura, garganta ni caída de agua entre ellas, y arriba a la izquierda, pequeña pero nítida, LA MISMA vara dorada de la referencia empezando a apuntar hacia la junta: la punta va a mitad de recorrido. El cuadro está construido para que la sierra pese y la promesa sea un punto de luz que aún se mueve. SE MOVERÁ: la vara termina de apuntar a la junta, un destello recorre su filo, el agua se riza. Capa de primer plano: el agua en sombra. Objeto ancla: la punta de la vara.",
    "grieta ya abierta, desfiladero, garganta abierta, canon, cascada, salto de agua, espuma, lago al pie, personas, vara inmovil"),

  // b8 — La vara mordió la peña y el agua huyó. (NO repetir el plano de bochica)
  kf("b8a", [`${B}/rocas_tequendama`],
    "PLANO GENERAL FRONTAL a la altura del río, muy cerca del pie de las peñas, luz rasante que entra por la grieta. LAS MISMAS peñas de la referencia EMPEZANDO A ABRIRSE: una grieta vertical de luz recorre la junta de arriba abajo, las capas de papel-roca se separan a los dos lados y por lo más angosto sale ya el primer chorro a presión, con las primeras láminas de roca desprendiéndose hacia el agua. Toda la altura de las peñas está en cuadro. SE MOVERÁ: la grieta se ensancha, el chorro crece hasta volverse torrente, las láminas caen. Capa de primer plano: el agua represada al pie. Objeto ancla: la grieta de luz abriéndose.",
    "vara en cuadro, personas, cascada ya formada del todo, detalle macro de roca sin agua, arcoiris"),
  kf("b8b", [`${B}/sabana_anegada`, `${B}/sabana_cultivos`],
    "GRAN PLANO GENERAL en picado, la luz aclarando de gris a limpio. LA MISMA sabana de la referencia VACIÁNDOSE: el agua retrocede y va dejando ver los surcos de LOS MISMOS cultivos de la referencia, con el légamo marcando franjas hasta dónde llegó; todavía queda medio valle bajo el agua. SE MOVERÁ: el agua sigue retirándose y descubre más surcos, la luz aclara, la niebla se levanta. Capa de primer plano: légamo agrietado. Objeto ancla: el borde del agua retirándose.",
    "personas, celebracion, banderas, sol pleno, valle ya seco del todo"),

  // b9 — La vara era delgada y la abertura quedó angosta.
  kf("b9a", [`${B}/salto_tequendama`],
    "PLANO GENERAL FRONTAL, luz baja de costado que delata el tamaño. EL MISMO salto del Tequendama de la referencia, pero el encuadre subraya lo ESTRECHO: dos paredes enormes de roca casi tocándose ocupan dos tercios del cuadro y entre ellas pasa una columna de agua flaca para todo lo que tiene que salir, con el agua represada arriba todavía empujando. SE MOVERÁ: la columna cae y la espuma sube desde el fondo, el agua de arriba sigue llegando y se atasca en el paso. Capa de primer plano: el borde de la peña en sombra. Objeto ancla: el estrechamiento entre las paredes.",
    "cascada ancha y triunfal, arcoiris, personas, espuma gloriosa"),
  kf("b9b", [`${B}/sabana_anegada`, `${B}/sabana_cultivos`],
    "PLANO GENERAL bajo, luz gris de otro invierno igual al primero. LOS MISMOS campos bajos de la referencia con el agua VOLVIENDO entre los surcos: no tanta como antes, pero el mismo gris y el mismo avance lento, y LAS MISMAS matas de la referencia empezando a hundir el pie. La escena rima a propósito con el invierno del comienzo. SE MOVERÁ: el agua sigue subiendo entre los surcos, la llovizna cae, las matas se doblan. Capa de primer plano: un surco encharcándose. Objeto ancla: el agua otra vez entre las matas.",
    "personas, inundacion total, dramatismo, sol, agua ya estancada"),

  // b10 — Bochica cargó la tierra sobre los hombros de Chibchacum.
  kf("b10a", [`${B}/chibchacum_dios`],
    `PLANO ENTERO en contrapicado, penumbra de luz baja y lateral. ${CHIBCHACUM}. Está de rodillas, visto desde abajo, RECIBIENDO sobre los hombros y la nuca el peso de la tierra: encima de él se apoya la base curva y oscura del mundo, una masa enorme de capas de papel-tierra con raíces y piedra que entra por todo el borde superior del cuadro y ya toca sus hombros. Los brazos empiezan a tensarse y las manos a abrirse contra el suelo. El prodigio se ve: se entiende que carga la tierra. SE MOVERÁ: la masa baja y se asienta sobre él, los brazos terminan de tensarse, cae polvo. Capa de primer plano: una mano abriéndose contra la tierra. Objeto ancla: el punto donde la tierra toca su hombro.`,
    "globo terraqueo, planeta azul, esfera con continentes, Atlas griego, cadenas, sangre, peso fuera de cuadro"),
  kf("b10b", [`${B}/casa_barro_paja`, `${B}/vasija_gacha`],
    "PLANO MEDIO BAJO, luz quieta de interior. Dentro del MISMO bohío de la referencia, LA MISMA vasija de barro de la referencia en el suelo con el agua empezando a temblar en círculos, y los primeros hilos de polvo cayendo de la viga. La casa está entera: sólo el suelo se movió. SE MOVERÁ: los círculos del agua se ensanchan, la vasija se desplaza un poco, el polvo sigue cayendo. Capa de primer plano: el canto de la vasija. Objeto ancla: los círculos en el agua.",
    "grietas grandes, derrumbe, casas cayendo, personas corriendo, catastrofe, agua quieta"),

  // b11 — Quedó el salto y su rumor. ¿Puente o puerta?
  kf("b11a", [`${B}/salto_tequendama`],
    "GRAN PLANO GENERAL en contrapicado, luz de tarde constante. EL MISMO salto de la referencia cayendo entero, con la niebla de espuma de algodón SUBIENDO desde el vacío y las paredes húmedas brillando; el cuadro deja aire arriba para que la niebla siga subiendo. Todo el plano es agua cayendo y vapor subiendo a la vez. SE MOVERÁ: la columna de agua cae sin parar, la niebla sube y llena el aire de arriba, los helechos tiemblan. Capa de primer plano: helechos a contraluz. Objeto ancla: la columna de agua.",
    "personas, turistas, barandas, puentes modernos, agua congelada"),
  kf("b11b", [`${B}/valle_anegado_arco`, `${B}/salto_tequendama`],
    "PLANO GENERAL final, luz indecisa entre tarde y niebla. EL MISMO arco de Cuchavira de la referencia otra vez sobre el valle, ahora sin nadie encima y con sus bandas de color aún vivas: un extremo apoyado cerca del MISMO salto de la referencia y el otro entrando en un banco de niebla que se mueve, de modo que no se ve dónde termina. La imagen no resuelve si es puente o puerta. SE MOVERÁ: la niebla corre y tapa y destapa el extremo lejano del arco, el salto humea. Capa de primer plano: la niebla cruzando. Objeto ancla: el extremo del arco que se pierde.",
    "personas, figura divina, puerta dibujada, puente construido, señales, simbolos, arco descolorido"),
];
