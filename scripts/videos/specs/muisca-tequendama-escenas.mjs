// Keyframes de El salto del Tequendama — 11 bloques × 2 escenas × 2 cuadros = 44 imágenes ≈ 110 s.
// Guion: docs/videos/muiscas/mvp-guiones/guion-el-tequendama-v7.json (N=11)
// Acta:  docs/videos/muiscas/actas/acta-el-tequendama.json           (21 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _muisca-comun.mjs).
//
// LO MÍTICO SE MUESTRA: CUCHAVIRA ES EL ARCOÍRIS y se ve entero, luminoso y
// con sus franjas de color. No se inventan símbolos ajenos a la fuente, pero
// lo que la fuente sí dice no se apaga.
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

import { DIRECCION, AVOID_BASE, ref, esc, escp, armar } from "./_muisca-comun.mjs";

export const SPEC_NAME = "muisca-tequendama-escenas";
export const OUT_DIR = "muiscas/videos/el-tequendama/keyframes";
export { DIRECCION };

export const SHARED_AVOID =
  AVOID_BASE + "; oro, tunjos dorados o metal en las ofrendas; dramatismo de catastrofe moderna; cadaveres, animales muertos; globo terraqueo, planeta azul, esfera con continentes, Atlas griego, cadenas; turistas, barandas, puentes modernos";

export const PALETTE =
  "gris plomo de invierno, verde frio de sabana anegada, pardo de agua turbia, crema de algodon crudo, blanco de espuma y niebla; el oro batido en la vara; EL ARCO DE CUCHAVIRA es la unica explosion de color del video y si lleva sus franjas; sin neones";

// CONTINUIDAD: rasgos fijos que se repiten en cada cuadro donde salen.
const BOCHICA =
  "EL MISMO Bochica de la referencia (anciano, barba blanca al pecho, pelo gris con cinta, manta cruda al hombro, descalzo)";
const CHIBCHACUM =
  "EL MISMO Chibchacum de la referencia (adulto, rostro ancho y grave, pelo negro a los hombros, manta cruda al hombro, descalzo)";

export const ITEMS = armar([
  // b1 — La sabana era una vasija cerrada. Dos peñas que no se apartaban.
  esc("b1a", [ref("sabana_cultivos"), ref("rocas_tequendama")], {
    comun: "Luz gris cerrada sin sol. LA MISMA sabana de la referencia vista como un cuenco: los cultivos de papel ocupan el fondo del valle y las montañas lo cierran por los cuatro lados; el río serpentea hasta LAS MISMAS dos peñas juntas de la referencia y allí se estanca, sin muesca, ni corte, ni caída de agua. El valle está deshabitado. Objeto ancla: las dos peñas cerradas.",
    camara: {
      a: "GRAN PLANO GENERAL en picado muy alto: el valle entero como un cuenco, el río serpenteando y las dos peñas diminutas al fondo.",
      b: "la cámara ha DESCENDIDO en diagonal siguiendo el río hasta ponerse a ras de agua: PLANO GENERAL bajo con el agua estancada en primer término y las dos peñas ahora grandes cerrando el fondo.",
    },
    ini: "las nubes bajas están al fondo y la luz cae pareja sobre las parcelas.",
    fin: "las nubes bajas cruzaron hasta el primer término y sus sombras barrieron las parcelas, con el río brillando más oscuro; las peñas siguen cerradas.",
  }, "personas, figuras humanas, siluetas, cascada, caida de agua, muesca o corte en la cordillera, desfiladero abierto, sol"),
  esc("b1b", [ref("rocas_tequendama")], {
    comun: "Luz plana y fría. LAS MISMAS dos peñas de la referencia de cerca y de frente, juntas y sin separación, con el río llegando a su pie, ancho y sin salida. La junta entre las dos rocas es una línea cerrada de arriba abajo. Objeto ancla: la junta cerrada.",
    camara: {
      a: "PLANO GENERAL FRONTAL desde el agua, a media distancia, con las dos peñas enteras en cuadro y el agua arremolinada abajo.",
      b: "la cámara ha AVANZADO hasta tocar la junta y ha basculado a CONTRAPICADO: la línea cerrada entre las dos rocas sube fuera de cuadro y el remolino pasa enorme por el borde inferior.",
    },
    ini: "el agua gira en remolinos lentos contra la roca y la niebla está alta en la pared.",
    fin: "el agua subió un palmo y los remolinos se abrieron más anchos, con la niebla deslizada hasta media pared; la junta sigue cerrada.",
  }, "personas, cascada, espuma, grieta, luz saliendo de la roca"),

  // b2 — Las aguas se devolvían. Chibchacum, dios de labradores y mercaderes.
  esc("b2a", [ref("sabana_anegada"), ref("casa_tierras_llanas")], {
    comun: "Luz plomiza de aguacero con lluvia de hilos finos de papel. LA MISMA sabana anegada de la referencia con el agua devolviéndose sobre los surcos y LOS MISMOS bohíos de la referencia al fondo. Objeto ancla: el borde del agua.",
    camara: {
      a: "PLANO GENERAL bajo desde el borde del cultivo, con una mata de maíz grande en primer término.",
      b: "la cámara se ha ELEVADO en vertical hasta un PICADO ALTO: se ven los surcos inundándose hasta el fondo y los bohíos pequeños dentro del agua.",
    },
    ini: "el borde de la lámina avanza entre las matas y toca apenas la base de los bohíos; por delante queda terreno seco.",
    fin: "la lámina tomó el terreno que quedaba seco y llegó a media pared de los bohíos, con la mata del primer término ya hundida hasta el tallo.",
  }, "personas, botes, rayos, catastrofe moderna"),
  esc("b2b", [ref("chibchacum_dios"), ref("mercado_bacata")], {
    comun: `Luz interior cálida y baja. ${CHIBCHACUM} de pie y sereno entre los bultos del MISMO mercado de la referencia —mantas dobladas, sal en panes, mazorcas en cestos—. Es el dios de los que siembran y de los que cargan, y se ve en lo que lo rodea. Objeto ancla: sus manos bajo la carga.`,
    camara: {
      a: "PLANO MEDIO frontal de él entre los bultos, a la altura del pecho, con un cesto de mazorcas en sombra en primer término.",
      b: "la cámara ha RODEADO el puesto y ha retrocedido: PLANO GENERAL del mercado entero, con él pequeño al fondo entre las mantas, la sal y los cestos.",
    },
    ini: "está levantando una carga con las dos manos, a media altura del pecho.",
    fin: "terminó de alzar la carga y la tiene apoyada en el hombro, con el polvo flotando en la luz y la llama de la lámpara latiendo.",
  }, "trono, altar, adoracion, gente arrodillada, oro"),

  // b3 — Murmuraron y regatearon las ofrendas. Él sintió el desprecio.
  escp("b3a", [ref("familias_muiscas"), ref("figurilla_chibchacum")], {
    comun: "Luz de mediodía dura. TRES adultos de LAS MISMAS familias de la referencia, de perfil y muy juntos, regateando; los dos de la derecha hablan entre ellos mirando a otro lado y nadie está en actitud de rezo. Objeto ancla: la figurilla de BARRO COCIDO PARDO.",
    camara: {
      a: "PLANO MEDIO CORTO de los tres de perfil, muy juntos, con el borde del cuenco cruzando abajo.",
      b: "la cámara ha BAJADO hasta el cuenco y se ha acercado: PLANO DETALLE de la figurilla de barro en la mano que la retira, con las tres caras cortadas por el borde superior.",
    },
    ini: "el de la izquierda está sacando del cuenco LA MISMA figurilla de barro de la referencia, con la mano cerrada sobre ella y el brazo empezando a retirarse.",
    fin: "sacó la figurilla del todo y la está guardando contra el pecho, con el cuenco ya vacío por ese lado y los otros dos todavía hablando.",
  }, "rostros grotescos, caricatura de avaricia, monedas, dinero, oro"),
  esc("b3b", [ref("chibchacum_dios")], {
    comun: `Luz azul fría que entra de lado: un lado de la cara azul y el otro en sombra dura. ${CHIBCHACUM} de tres cuartos sobre fondo oscuro y neutro. El frío del desprecio está en la luz, no en el gesto. Objeto ancla: el ojo iluminado.`,
    camara: {
      a: "PRIMER PLANO MEDIO de tres cuartos sobre fondo oscuro y neutro, con un hombro en sombra en primer término.",
      b: "la cámara ha RETROCEDIDO y ha girado a su espalda: PLANO MEDIO desde detrás, con su nuca y su hombro en sombra y la luz azul entrando de frente por delante de él.",
    },
    ini: "está girando lentamente la cabeza hacia el lado iluminado mientras baja la mirada.",
    fin: "terminó de girar la cabeza hacia la luz y tiene la mandíbula apretada y la mirada baja, con el pelo movido.",
  }, "ira teatral, gritos, fuego, ojos brillantes, sobrenatural"),

  // b4 — Sacó de tierras lejanas dos ríos. El agua se tragó todo.
  esc("b4a", [ref("sabana_anegada"), ref("recodo_funza")], {
    comun: "Luz verde gris de tormenta. DOS ríos de papel entrando en el cuadro desde dos esquinas del fondo, con sus cabezas de agua turbia avanzando sobre LA MISMA sabana de la referencia; LOS MISMOS recodos de la referencia ya desbordados detrás. Objeto ancla: el campo entre las dos lenguas de agua.",
    camara: {
      a: "GRAN PLANO GENERAL en picado del valle con las dos lenguas de agua entrando por dos esquinas del fondo.",
      b: "la cámara ha BAJADO hasta la copa de un árbol y se ha quedado allí: PLANO MEDIO con las ramas en primer término y el agua pasando justo debajo del objetivo.",
    },
    ini: "las dos lenguas todavía no se han juntado y entre ellas queda una franja ancha de campo seco.",
    fin: "las dos lenguas se juntaron sobre esa franja y el campo seco desapareció: ahora es una sola lámina turbia que rodea la copa del árbol.",
  }, "personas, olas de mar, tsunami, dramatismo moderno"),
  esc("b4b", [ref("casa_tierras_llanas"), ref("sabana_anegada")], {
    comun: "Luz gris difusa. EL MISMO bohío de la referencia con el agua entrando por la puerta, la paja del alero goteando y nadie alrededor: abandonado hace poco. Objeto ancla: una vasija en el suelo de tierra.",
    camara: {
      a: "PLANO MEDIO frontal del bohío entero con el agua entrando por la puerta y el umbral mojado abajo.",
      b: "la cámara ha ENTRADO por esa puerta a ras de agua: PLANO DETALLE dentro del cuarto, con la vasija muy cerca del objetivo y el vano de luz al fondo.",
    },
    ini: "la lámina turbia cruza el umbral y empieza a rodear la vasija, que aún está de pie.",
    fin: "el agua subió, volcó la vasija y la lleva flotando de lado hacia la puerta, con las gotas cayendo del alero.",
  }, "personas, cadaveres, animales muertos, dramatismo excesivo"),

  // b5 — Subieron a las lomas. Llenaron de ofrendas el templo de Bochica.
  escp("b5a", [ref("familias_muiscas"), ref("loma_pelada_noche")], {
    comun: "Lluvia fina que escampa. Una fila de gente de LAS MISMAS familias de la referencia subiendo DE ESPALDAS por LA MISMA loma pelada de la referencia, cargando lo poco que cabía —un cesto, una manta enrollada, una vasija—; abajo y al fondo, el agua gris. Objeto ancla: la vasija que carga el último.",
    camara: {
      a: "PLANO GENERAL en contrapicado desde el pie de la loma, con el barro de la cuesta en primer término y la fila subiendo de espaldas.",
      b: "la cámara ha SUBIDO por delante de ellos hasta lo alto y se ha dado la vuelta: PICADO desde la cima, con la fila llegando de frente y el agua gris allá abajo.",
    },
    ini: "van a media cuesta y por delante les queda loma.",
    fin: "la fila subió hasta cerca de lo alto y los primeros ya se recortan contra el cielo, con la lluvia amainada y las mantas ondeando.",
  }, "rostros de frente, llanto, panico, multitud desbordada"),
  escp("b5b", [ref("templo_ofrendas"), ref("figurilla_chibchacum")], {
    comun: "Luz de lámparas de sebo, cálida y escasa. EL MISMO templo de la referencia con el suelo cubierto de ofrendas hasta casi no caber: figurillas de BARRO COCIDO PARDO idénticas a LA MISMA de la referencia, mantas de algodón crudo dobladas, cuencos de barro y mazorcas. TODO es barro, algodón, madera y maíz: ni una pieza de oro ni de metal. Objeto ancla: una figurilla más.",
    camara: {
      a: "PLANO MEDIO interior a la altura del montón, con las ofrendas llenando el primer término.",
      b: "la cámara se ha ELEVADO y ha basculado a CENITAL: se ve el suelo entero del templo cubierto de ofrendas de barro, algodón y maíz, sin un solo metal.",
    },
    ini: "dos manos bajan esa figurilla hacia el borde del montón sin haberla soltado aún.",
    fin: "la figurilla quedó dejada en lo alto del montón y las manos se retiraron fuera de cuadro, con las llamas de sebo latiendo.",
  }, "oro, tunjos dorados, metal, brillos dorados, cruces, altares europeos, sacerdotes"),

  // b6 — Un arco de luz sobre la llanura. En su cumbre, Bochica. (CUCHAVIRA)
  esc("b6a", [ref("valle_anegado_arco"), ref("sabana_anegada")], {
    comun: "El cielo abriéndose después del aguacero. EL MISMO arco de Cuchavira de la referencia sobre LA MISMA llanura inundada: un arco ENORME y LUMINOSO de bandas de papel de color —rojo, ocre, verde, azul—. Es el prodigio del relato y se ve entero. Objeto ancla: el extremo del arco.",
    camara: {
      a: "PLANO GENERAL desde entre los juncos de la orilla, cámara baja, con el pie del arco apoyado en el agua.",
      b: "la cámara ha SUBIDO muy alto y ha retrocedido: GRAN PLANO GENERAL con la llanura inundada abajo y el arco entero cruzando el cuadro de lado a lado.",
    },
    ini: "ya apoyó un extremo en el agua y está creciendo hacia el otro lado del cuadro, donde todavía le falta cerrar.",
    fin: "el arco cerró el otro extremo y cruza el cielo entero de lado a lado, con su reflejo armado sobre el agua gris y las nubes retiradas.",
  }, "personas, angeles, nubes fotográficas, arco palido o descolorido, cielo sin arco"),
  esc("b6b", [ref("bochica_anciano"), ref("valle_anegado_arco"), ref("vara_dorada")], {
    comun: `Contraluz dorado. ${BOCHICA} de pie en la cumbre del MISMO arco de Cuchavira de la referencia, que cruza el cuadro entero con sus bandas de color; por delante y por debajo queda toda la llanura inundada. Objeto ancla: LA MISMA vara dorada de la referencia.`,
    camara: {
      a: "PLANO GENERAL en contrapicado desde el agua, con la superficie en primer término y la figura pequeña en lo alto del arco.",
      b: "la cámara ha SUBIDO por la curva del arco hasta su cumbre: PLANO MEDIO a su altura, con él de perfil contra el contraluz y la llanura inundada muy abajo y desenfocada.",
    },
    ini: "está todavía recortado a media silueta contra la luz y la vara empieza a alzarse en su mano derecha.",
    fin: "la vara quedó alzada del todo por encima de su cabeza y su silueta se recorta entera y nítida contra la luz, que creció detrás, con la barba y la manta ondeando.",
  }, "rostro en primer plano, aureola, rayos dibujados, alas, gente adorando, arco descolorido"),

  // b7 — Llamó a los caciques. (CITA)
  escp("b7a", [ref("gameza_cacique"), ref("sabana_anegada"), ref("valle_anegado_arco")], {
    comun: "Luz dorada baja con el arco de color visible al fondo. CUATRO caciques como EL MISMO de la referencia de pie en la orilla del agua, en semicírculo abierto hacia el fondo. A quien escuchan está fuera de cuadro, arriba. Objeto ancla: las cabezas.",
    camara: {
      a: "PLANO MEDIO LARGO a la altura de los ojos, los cuatro caciques en semicírculo y el agua de la orilla abajo.",
      b: "la cámara se ha ELEVADO hasta por encima de ellos y ha basculado a PICADO: se ven las cuatro caras vueltas hacia el objetivo y el semicírculo cerrado desde arriba.",
    },
    ini: "están alzando la cara hacia lo alto, las cabezas a media subida y no todas al mismo tiempo.",
    fin: "las cuatro cabezas quedaron alzadas del todo hacia el mismo punto, con las mantas ondeando y el agua lamiendo la orilla.",
  }, "arrodillarse, adoracion, manos juntas, llanto, figura divina en cuadro"),
  esc("b7b", [ref("rocas_tequendama"), ref("vara_dorada")], {
    comun: "Luz dorada de tarde. LAS MISMAS dos peñas de la referencia llenando el fondo, TODAVÍA CERRADAS Y PEGADAS la una a la otra, sin ninguna abertura, garganta ni caída de agua entre ellas; arriba a la izquierda, pequeña pero nítida, LA MISMA vara dorada de la referencia. El cuadro está construido para que la sierra pese y la promesa sea un punto de luz. Objeto ancla: la punta de la vara.",
    camara: {
      a: "PLANO GENERAL desde el nivel del agua con las dos peñas cerradas llenando el fondo y la vara pequeña arriba.",
      b: "la cámara ha VOLADO detrás de la vara hasta la junta: PLANO MEDIO de la roca cerrada, con la punta de la vara entrando por un borde y la pared ocupando todo el fondo.",
    },
    ini: "la vara va a mitad de recorrido, empezando a apuntar hacia la junta.",
    fin: "la vara quedó apuntando de lleno a la junta de las peñas, con un destello recorriéndole el filo y el agua rizada debajo; las peñas siguen cerradas.",
  }, "grieta ya abierta, desfiladero, garganta abierta, canon, cascada, salto de agua, espuma, lago al pie, personas"),

  // b8 — La vara mordió la peña y el agua huyó. (NO repetir el plano de bochica)
  esc("b8a", [ref("rocas_tequendama")], {
    comun: "Muy cerca del pie de LAS MISMAS peñas de la referencia, luz rasante que entra por la junta. Toda la altura de las peñas está en cuadro. Objeto ancla: la grieta.",
    camara: {
      a: "PLANO GENERAL FRONTAL a la altura del río, al pie de las peñas, con toda su altura en cuadro y el agua represada abajo.",
      b: "la cámara ha ENTRADO por la grieta abierta y ha girado: PLANO MEDIO desde dentro del paso, con las dos paredes a los lados y el torrente saliendo hacia el objetivo.",
    },
    ini: "una grieta vertical de luz recorre la junta de arriba abajo, las capas de papel-roca empiezan a separarse y por lo más angosto sale el primer chorro a presión.",
    fin: "la grieta se ensanchó hasta ser un paso abierto, el chorro creció hasta volverse torrente y las primeras láminas de roca se desprendieron hacia el agua.",
  }, "vara en cuadro, personas, cascada ya formada del todo, detalle macro de roca sin agua, arcoiris"),
  esc("b8b", [ref("sabana_anegada"), ref("sabana_cultivos")], {
    comun: "La luz aclarando de gris a limpio. LA MISMA sabana de la referencia vaciándose, con el légamo marcando franjas de hasta dónde llegó el agua y los surcos de LOS MISMOS cultivos de la referencia apareciendo. Objeto ancla: el borde del agua.",
    camara: {
      a: "PLANO DETALLE cenital del légamo agrietado y el filo del agua retirándose de un surco.",
      b: "la cámara se ha ELEVADO muchísimo hasta un GRAN PLANO GENERAL en picado del valle entero, donde ese mismo borde de agua se lee como una línea al fondo.",
    },
    ini: "todavía queda medio valle bajo el agua y sólo asoman los primeros surcos.",
    fin: "el agua se retiró hasta el fondo del valle y los surcos quedaron descubiertos casi hasta el horizonte, con la niebla levantándose y la luz limpia.",
  }, "personas, celebracion, banderas, sol pleno, valle ya seco del todo"),

  // b9 — La vara era delgada y la abertura quedó angosta.
  esc("b9a", [ref("salto_tequendama")], {
    comun: "Luz baja de costado que delata el tamaño. EL MISMO salto del Tequendama de la referencia, pero el encuadre subraya lo ESTRECHO: dos paredes enormes de roca casi tocándose ocupan dos tercios del cuadro y entre ellas pasa una columna de agua flaca para todo lo que tiene que salir. Objeto ancla: el estrechamiento entre las paredes.",
    camara: {
      a: "PLANO GENERAL FRONTAL con las dos paredes casi tocándose ocupando dos tercios del cuadro.",
      b: "la cámara ha SUBIDO por la pared hasta el labio del salto y ha basculado a PICADO: se ve desde arriba cómo el agua represada se atasca en un paso demasiado estrecho.",
    },
    ini: "la columna cae limpia y la espuma del fondo está baja.",
    fin: "la espuma subió desde el fondo hasta media pared y arriba el agua represada se atasca visiblemente en el paso, desbordando por los lados de la muesca.",
  }, "cascada ancha y triunfal, arcoiris, personas, espuma gloriosa"),
  esc("b9b", [ref("sabana_anegada"), ref("sabana_cultivos")], {
    comun: "Luz gris de otro invierno igual al primero. LOS MISMOS campos bajos de la referencia con LAS MISMAS matas de la referencia entre los surcos. La escena rima a propósito con el invierno del comienzo. Objeto ancla: el agua entre las matas.",
    camara: {
      a: "PLANO MEDIO BAJO a la altura de un surco encharcándose, con las matas grandes en primer término.",
      b: "la cámara ha RETROCEDIDO y ha subido hasta un PLANO GENERAL del campo bajo entero, con el agua volviendo entre todos los surcos hasta el fondo.",
    },
    ini: "el agua está volviendo entre los surcos, poca todavía, y las matas apenas hunden el pie.",
    fin: "el agua subió entre los surcos hasta unir los charcos en una lámina continua y las matas están dobladas y hundidas hasta media caña, con la llovizna cayendo.",
  }, "personas, inundacion total, dramatismo, sol"),

  // b10 — Bochica cargó la tierra sobre los hombros de Chibchacum.
  esc("b10a", [ref("chibchacum_dios")], {
    comun: `Penumbra de luz baja y lateral. ${CHIBCHACUM} de rodillas, visto desde abajo, recibiendo sobre los hombros y la nuca la base curva y oscura del mundo: una masa enorme de capas de papel-tierra con raíces y piedra que entra por todo el borde superior del cuadro. El prodigio se ve: se entiende que carga la tierra. Objeto ancla: el punto donde la tierra toca su hombro.`,
    camara: {
      a: "PLANO ENTERO en contrapicado desde el suelo, con una mano abierta contra la tierra en primer término y la masa de mundo entrando por arriba.",
      b: "la cámara ha RETROCEDIDO y ha subido a la altura de sus hombros: PLANO MEDIO lateral en el que se ve dónde apoya la tierra y cuánto le pesa encima.",
    },
    ini: "la masa acaba de tocarle los hombros, los brazos empiezan a tensarse y las manos a abrirse contra el suelo.",
    fin: "la masa bajó y se asentó entera sobre él: tiene la espalda doblada bajo el peso, los brazos tensos y las manos abiertas clavadas en la tierra, con polvo cayendo de las raíces.",
  }, "globo terraqueo, planeta azul, esfera con continentes, Atlas griego, cadenas, sangre"),
  esc("b10b", [ref("casa_barro_paja"), ref("vasija_gacha")], {
    comun: "Luz quieta de interior. Dentro del MISMO bohío de la referencia, LA MISMA vasija de barro de la referencia en el suelo. La casa está entera: sólo el suelo se movió. Objeto ancla: los círculos en el agua.",
    camara: {
      a: "PLANO MACRO sobre el agua de la vasija, con los círculos llenando el cuadro.",
      b: "la cámara ha RETROCEDIDO y ha subido hasta un PLANO GENERAL del interior del bohío: se ve la casa entera y en pie, con la vasija chiquita en el suelo.",
    },
    ini: "el agua de la vasija empieza a temblar en círculos pequeños y caen los primeros hilos de polvo de la viga.",
    fin: "los círculos se ensancharon hasta el borde y la vasija se desplazó un palmo sobre el suelo de tierra, con el polvo cayendo en hilos más gruesos.",
  }, "grietas grandes, derrumbe, casas cayendo, personas corriendo, catastrofe"),

  // b11 — Quedó el salto y su rumor. ¿Puente o puerta?
  esc("b11a", [ref("salto_tequendama")], {
    comun: "Luz de tarde constante. EL MISMO salto de la referencia cayendo entero, con las paredes húmedas brillando; el cuadro deja aire arriba. Todo el plano es agua cayendo y vapor subiendo a la vez. Objeto ancla: la columna de agua.",
    camara: {
      a: "GRAN PLANO GENERAL en contrapicado desde el fondo del cañón, con helechos a contraluz y el salto entero cayendo.",
      b: "la cámara ha SUBIDO junto a la columna de agua hasta media pared: PLANO MEDIO dentro del vapor, con el agua cayendo a un palmo del objetivo.",
    },
    ini: "la niebla de espuma de algodón empieza a subir desde el vacío y el aire de arriba está limpio.",
    fin: "la niebla subió y llenó todo el aire de arriba del cuadro, con la columna de agua cayendo detrás de ella y los helechos temblando.",
  }, "personas, turistas, barandas, puentes modernos"),
  esc("b11b", [ref("valle_anegado_arco"), ref("salto_tequendama")], {
    comun: "Luz indecisa entre tarde y niebla. EL MISMO arco de Cuchavira de la referencia otra vez sobre el valle, ahora sin nadie encima y con sus bandas de color aún vivas: un extremo apoyado cerca del MISMO salto de la referencia y el otro entrando en un banco de niebla. La imagen no resuelve si es puente o puerta. Objeto ancla: el extremo lejano del arco.",
    camara: {
      a: "PLANO MEDIO junto al pie del arco, cerca del salto, con la niebla cruzando en primer término.",
      b: "la cámara ha RETROCEDIDO y ha subido hasta un GRAN PLANO GENERAL final del valle, con el arco entero cruzándolo y su extremo lejano entrando en el banco de niebla.",
    },
    ini: "la niebla deja ver un buen trecho de ese extremo antes de tragárselo.",
    fin: "la niebla corrió y tapó ese extremo del todo: el arco ahora entra en el banco de niebla y no se ve dónde termina, mientras el salto sigue humeando.",
  }, "personas, figura divina, puerta dibujada, puente construido, señales, simbolos, arco descolorido"),
]);
