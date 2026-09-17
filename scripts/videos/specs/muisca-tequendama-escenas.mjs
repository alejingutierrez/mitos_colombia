// Keyframes de El salto del Tequendama — 11 bloques × 2 escenas × 2 cuadros = 44 imágenes ≈ 110 s.
// Guion: docs/videos/muiscas/mvp-guiones/guion-el-tequendama-v7.json (N=11)
// Acta:  docs/videos/muiscas/actas/acta-el-tequendama.json           (21 nudos)
// DOCTRINA v3: cada escena es un par A→B (ver _muisca-comun.mjs).
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
    comun: "GRAN PLANO GENERAL en picado suave, luz gris cerrada sin sol. LA MISMA sabana de la referencia vista como un cuenco: los cultivos de papel ocupan el fondo del valle y las montañas lo cierran por los cuatro lados; el río serpentea hasta LAS MISMAS dos peñas juntas de la referencia y allí se estanca, sin muesca, ni corte, ni caída de agua. El valle está deshabitado. Capa de primer plano: el filo oscuro de una loma. Objeto ancla: las dos peñas cerradas.",
    ini: "las nubes bajas están al fondo y la luz cae pareja sobre las parcelas.",
    fin: "las nubes bajas cruzaron hasta el primer término y sus sombras barrieron las parcelas, con el río brillando más oscuro; las peñas siguen cerradas.",
  }, "personas, figuras humanas, siluetas, cascada, caida de agua, muesca o corte en la cordillera, desfiladero abierto, sol"),
  esc("b1b", [ref("rocas_tequendama")], {
    comun: "PLANO GENERAL FRONTAL desde el agua, luz plana y fría. LAS MISMAS dos peñas de la referencia de cerca y de frente, juntas y sin separación, con el río llegando a su pie, ancho y sin salida. La junta entre las dos rocas es una línea cerrada de arriba abajo. Capa de primer plano: el agua arremolinada en sombra. Objeto ancla: la junta cerrada.",
    ini: "el agua gira en remolinos lentos contra la roca y la niebla está alta en la pared.",
    fin: "el agua subió un palmo y los remolinos se abrieron más anchos, con la niebla deslizada hasta media pared; la junta sigue cerrada.",
  }, "personas, cascada, espuma, grieta, luz saliendo de la roca"),

  // b2 — Las aguas se devolvían. Chibchacum, dios de labradores y mercaderes.
  esc("b2a", [ref("sabana_anegada"), ref("casa_tierras_llanas")], {
    comun: "PLANO GENERAL bajo, luz plomiza de aguacero con lluvia de hilos finos de papel. LA MISMA sabana anegada de la referencia con el agua devolviéndose sobre los surcos y LOS MISMOS bohíos de la referencia al fondo. Capa de primer plano: una mata de maíz. Objeto ancla: el borde del agua.",
    ini: "el borde de la lámina avanza entre las matas y toca apenas la base de los bohíos; por delante queda terreno seco.",
    fin: "la lámina tomó el terreno que quedaba seco y llegó a media pared de los bohíos, con la mata del primer término ya hundida hasta el tallo.",
  }, "personas, botes, rayos, catastrofe moderna"),
  esc("b2b", [ref("chibchacum_dios"), ref("mercado_bacata")], {
    comun: `PLANO MEDIO, luz interior cálida y baja. ${CHIBCHACUM} de pie y sereno entre los bultos del MISMO mercado de la referencia —mantas dobladas, sal en panes, mazorcas en cestos—. Es el dios de los que siembran y de los que cargan, y se ve en lo que lo rodea. Capa de primer plano: un cesto de mazorcas en sombra. Objeto ancla: sus manos bajo la carga.`,
    ini: "está levantando una carga con las dos manos, a media altura del pecho.",
    fin: "terminó de alzar la carga y la tiene apoyada en el hombro, con el polvo flotando en la luz y la llama de la lámpara latiendo.",
  }, "trono, altar, adoracion, gente arrodillada, oro"),

  // b3 — Murmuraron y regatearon las ofrendas. Él sintió el desprecio.
  escp("b3a", [ref("familias_muiscas"), ref("figurilla_chibchacum")], {
    comun: "PLANO MEDIO CORTO, luz de mediodía dura. TRES adultos de LAS MISMAS familias de la referencia, de perfil y muy juntos, regateando; los dos de la derecha hablan entre ellos mirando a otro lado y nadie está en actitud de rezo. Capa de primer plano: el borde del cuenco. Objeto ancla: la figurilla de BARRO COCIDO PARDO.",
    ini: "el de la izquierda está sacando del cuenco LA MISMA figurilla de barro de la referencia, con la mano cerrada sobre ella y el brazo empezando a retirarse.",
    fin: "sacó la figurilla del todo y la está guardando contra el pecho, con el cuenco ya vacío por ese lado y los otros dos todavía hablando.",
  }, "rostros grotescos, caricatura de avaricia, monedas, dinero, oro"),
  esc("b3b", [ref("chibchacum_dios")], {
    comun: `PRIMER PLANO MEDIO, luz azul fría que entra de lado: un lado de la cara azul y el otro en sombra dura. ${CHIBCHACUM} de tres cuartos sobre fondo oscuro y neutro. El frío del desprecio está en la luz, no en el gesto. Capa de primer plano: un hombro en sombra. Objeto ancla: el ojo iluminado.`,
    ini: "está girando lentamente la cabeza hacia el lado iluminado mientras baja la mirada.",
    fin: "terminó de girar la cabeza hacia la luz y tiene la mandíbula apretada y la mirada baja, con el pelo movido.",
  }, "ira teatral, gritos, fuego, ojos brillantes, sobrenatural"),

  // b4 — Sacó de tierras lejanas dos ríos. El agua se tragó todo.
  esc("b4a", [ref("sabana_anegada"), ref("recodo_funza")], {
    comun: "GRAN PLANO GENERAL en picado, luz verde gris de tormenta. DOS ríos de papel entrando en el cuadro desde dos esquinas del fondo, con sus cabezas de agua turbia avanzando sobre LA MISMA sabana de la referencia; LOS MISMOS recodos de la referencia ya desbordados detrás. Capa de primer plano: la copa de un árbol. Objeto ancla: el campo entre las dos lenguas de agua.",
    ini: "las dos lenguas todavía no se han juntado y entre ellas queda una franja ancha de campo seco.",
    fin: "las dos lenguas se juntaron sobre esa franja y el campo seco desapareció: ahora es una sola lámina turbia que rodea la copa del árbol.",
  }, "personas, olas de mar, tsunami, dramatismo moderno"),
  esc("b4b", [ref("casa_tierras_llanas"), ref("sabana_anegada")], {
    comun: "PLANO MEDIO, luz gris difusa. EL MISMO bohío de la referencia con el agua entrando por la puerta, la paja del alero goteando y nadie alrededor: abandonado hace poco. Capa de primer plano: el umbral mojado. Objeto ancla: una vasija en el suelo de tierra.",
    ini: "la lámina turbia cruza el umbral y empieza a rodear la vasija, que aún está de pie.",
    fin: "el agua subió, volcó la vasija y la lleva flotando de lado hacia la puerta, con las gotas cayendo del alero.",
  }, "personas, cadaveres, animales muertos, dramatismo excesivo"),

  // b5 — Subieron a las lomas. Llenaron de ofrendas el templo de Bochica.
  escp("b5a", [ref("familias_muiscas"), ref("loma_pelada_noche")], {
    comun: "PLANO GENERAL en contrapicado suave, lluvia fina que escampa. Una fila de gente de LAS MISMAS familias de la referencia subiendo DE ESPALDAS por LA MISMA loma pelada de la referencia, cargando lo poco que cabía —un cesto, una manta enrollada, una vasija—; abajo y al fondo, el agua gris. Capa de primer plano: el barro de la cuesta. Objeto ancla: la vasija que carga el último.",
    ini: "van a media cuesta y por delante les queda loma.",
    fin: "la fila subió hasta cerca de lo alto y los primeros ya se recortan contra el cielo, con la lluvia amainada y las mantas ondeando.",
  }, "rostros de frente, llanto, panico, multitud desbordada"),
  escp("b5b", [ref("templo_ofrendas"), ref("figurilla_chibchacum")], {
    comun: "PLANO MEDIO interior, luz de lámparas de sebo, cálida y escasa. EL MISMO templo de la referencia con el suelo cubierto de ofrendas hasta casi no caber: figurillas de BARRO COCIDO PARDO idénticas a LA MISMA de la referencia, mantas de algodón crudo dobladas, cuencos de barro y mazorcas. TODO es barro, algodón, madera y maíz: ni una pieza de oro ni de metal. Capa de primer plano: el montón en sombra. Objeto ancla: una figurilla más.",
    ini: "dos manos bajan esa figurilla hacia el borde del montón sin haberla soltado aún.",
    fin: "la figurilla quedó dejada en lo alto del montón y las manos se retiraron fuera de cuadro, con las llamas de sebo latiendo.",
  }, "oro, tunjos dorados, metal, brillos dorados, cruces, altares europeos, sacerdotes"),

  // b6 — Un arco de luz sobre la llanura. En su cumbre, Bochica. (CUCHAVIRA)
  esc("b6a", [ref("valle_anegado_arco"), ref("sabana_anegada")], {
    comun: "GRAN PLANO GENERAL, el cielo abriéndose después del aguacero. EL MISMO arco de Cuchavira de la referencia sobre LA MISMA llanura inundada: un arco ENORME y LUMINOSO de bandas de papel de color —rojo, ocre, verde, azul—. Es el prodigio del relato y se ve entero. Capa de primer plano: juncos a contraluz. Objeto ancla: el extremo del arco.",
    ini: "ya apoyó un extremo en el agua y está creciendo hacia el otro lado del cuadro, donde todavía le falta cerrar.",
    fin: "el arco cerró el otro extremo y cruza el cielo entero de lado a lado, con su reflejo armado sobre el agua gris y las nubes retiradas.",
  }, "personas, angeles, nubes fotográficas, arco palido o descolorido, cielo sin arco"),
  esc("b6b", [ref("bochica_anciano"), ref("valle_anegado_arco"), ref("vara_dorada")], {
    comun: `PLANO GENERAL en contrapicado desde el agua, contraluz dorado. ${BOCHICA} de pie en la cumbre del MISMO arco de Cuchavira de la referencia, que cruza el cuadro entero con sus bandas de color; por delante y por debajo queda toda la llanura inundada. Capa de primer plano: la superficie del agua. Objeto ancla: LA MISMA vara dorada de la referencia.`,
    ini: "está todavía recortado a media silueta contra la luz y la vara empieza a alzarse en su mano derecha.",
    fin: "la vara quedó alzada del todo por encima de su cabeza y su silueta se recorta entera y nítida contra la luz, que creció detrás, con la barba y la manta ondeando.",
  }, "rostro en primer plano, aureola, rayos dibujados, alas, gente adorando, arco descolorido"),

  // b7 — Llamó a los caciques. (CITA)
  escp("b7a", [ref("gameza_cacique"), ref("sabana_anegada"), ref("valle_anegado_arco")], {
    comun: "PLANO MEDIO LARGO a la altura de los ojos, luz dorada baja con el arco de color visible al fondo. CUATRO caciques como EL MISMO de la referencia de pie en la orilla del agua, en semicírculo abierto hacia el fondo. A quien escuchan está fuera de cuadro, arriba. Capa de primer plano: el agua en la orilla. Objeto ancla: las cabezas.",
    ini: "están alzando la cara hacia lo alto, las cabezas a media subida y no todas al mismo tiempo.",
    fin: "las cuatro cabezas quedaron alzadas del todo hacia el mismo punto, con las mantas ondeando y el agua lamiendo la orilla.",
  }, "arrodillarse, adoracion, manos juntas, llanto, figura divina en cuadro"),
  esc("b7b", [ref("rocas_tequendama"), ref("vara_dorada")], {
    comun: "PLANO GENERAL desde el nivel del agua, luz dorada de tarde. LAS MISMAS dos peñas de la referencia llenando el fondo, TODAVÍA CERRADAS Y PEGADAS la una a la otra, sin ninguna abertura, garganta ni caída de agua entre ellas; arriba a la izquierda, pequeña pero nítida, LA MISMA vara dorada de la referencia. El cuadro está construido para que la sierra pese y la promesa sea un punto de luz. Capa de primer plano: el agua en sombra. Objeto ancla: la punta de la vara.",
    ini: "la vara va a mitad de recorrido, empezando a apuntar hacia la junta.",
    fin: "la vara quedó apuntando de lleno a la junta de las peñas, con un destello recorriéndole el filo y el agua rizada debajo; las peñas siguen cerradas.",
  }, "grieta ya abierta, desfiladero, garganta abierta, canon, cascada, salto de agua, espuma, lago al pie, personas"),

  // b8 — La vara mordió la peña y el agua huyó. (NO repetir el plano de bochica)
  esc("b8a", [ref("rocas_tequendama")], {
    comun: "PLANO GENERAL FRONTAL a la altura del río, muy cerca del pie de LAS MISMAS peñas de la referencia, luz rasante que entra por la junta. Toda la altura de las peñas está en cuadro. Capa de primer plano: el agua represada al pie. Objeto ancla: la grieta.",
    ini: "una grieta vertical de luz recorre la junta de arriba abajo, las capas de papel-roca empiezan a separarse y por lo más angosto sale el primer chorro a presión.",
    fin: "la grieta se ensanchó hasta ser un paso abierto, el chorro creció hasta volverse torrente y las primeras láminas de roca se desprendieron hacia el agua.",
  }, "vara en cuadro, personas, cascada ya formada del todo, detalle macro de roca sin agua, arcoiris"),
  esc("b8b", [ref("sabana_anegada"), ref("sabana_cultivos")], {
    comun: "GRAN PLANO GENERAL en picado, la luz aclarando de gris a limpio. LA MISMA sabana de la referencia vaciándose, con el légamo marcando franjas de hasta dónde llegó el agua y los surcos de LOS MISMOS cultivos de la referencia apareciendo. Capa de primer plano: légamo agrietado. Objeto ancla: el borde del agua.",
    ini: "todavía queda medio valle bajo el agua y sólo asoman los primeros surcos.",
    fin: "el agua se retiró hasta el fondo del valle y los surcos quedaron descubiertos casi hasta el horizonte, con la niebla levantándose y la luz limpia.",
  }, "personas, celebracion, banderas, sol pleno, valle ya seco del todo"),

  // b9 — La vara era delgada y la abertura quedó angosta.
  esc("b9a", [ref("salto_tequendama")], {
    comun: "PLANO GENERAL FRONTAL, luz baja de costado que delata el tamaño. EL MISMO salto del Tequendama de la referencia, pero el encuadre subraya lo ESTRECHO: dos paredes enormes de roca casi tocándose ocupan dos tercios del cuadro y entre ellas pasa una columna de agua flaca para todo lo que tiene que salir. Capa de primer plano: el borde de la peña en sombra. Objeto ancla: el estrechamiento entre las paredes.",
    ini: "la columna cae limpia y la espuma del fondo está baja.",
    fin: "la espuma subió desde el fondo hasta media pared y arriba el agua represada se atasca visiblemente en el paso, desbordando por los lados de la muesca.",
  }, "cascada ancha y triunfal, arcoiris, personas, espuma gloriosa"),
  esc("b9b", [ref("sabana_anegada"), ref("sabana_cultivos")], {
    comun: "PLANO GENERAL bajo, luz gris de otro invierno igual al primero. LOS MISMOS campos bajos de la referencia con LAS MISMAS matas de la referencia entre los surcos. La escena rima a propósito con el invierno del comienzo. Capa de primer plano: un surco encharcándose. Objeto ancla: el agua entre las matas.",
    ini: "el agua está volviendo entre los surcos, poca todavía, y las matas apenas hunden el pie.",
    fin: "el agua subió entre los surcos hasta unir los charcos en una lámina continua y las matas están dobladas y hundidas hasta media caña, con la llovizna cayendo.",
  }, "personas, inundacion total, dramatismo, sol"),

  // b10 — Bochica cargó la tierra sobre los hombros de Chibchacum.
  esc("b10a", [ref("chibchacum_dios")], {
    comun: `PLANO ENTERO en contrapicado, penumbra de luz baja y lateral. ${CHIBCHACUM} de rodillas, visto desde abajo, recibiendo sobre los hombros y la nuca la base curva y oscura del mundo: una masa enorme de capas de papel-tierra con raíces y piedra que entra por todo el borde superior del cuadro. El prodigio se ve: se entiende que carga la tierra. Capa de primer plano: una mano contra el suelo. Objeto ancla: el punto donde la tierra toca su hombro.`,
    ini: "la masa acaba de tocarle los hombros, los brazos empiezan a tensarse y las manos a abrirse contra el suelo.",
    fin: "la masa bajó y se asentó entera sobre él: tiene la espalda doblada bajo el peso, los brazos tensos y las manos abiertas clavadas en la tierra, con polvo cayendo de las raíces.",
  }, "globo terraqueo, planeta azul, esfera con continentes, Atlas griego, cadenas, sangre"),
  esc("b10b", [ref("casa_barro_paja"), ref("vasija_gacha")], {
    comun: "PLANO MEDIO BAJO, luz quieta de interior. Dentro del MISMO bohío de la referencia, LA MISMA vasija de barro de la referencia en el suelo. La casa está entera: sólo el suelo se movió. Capa de primer plano: el canto de la vasija. Objeto ancla: los círculos en el agua.",
    ini: "el agua de la vasija empieza a temblar en círculos pequeños y caen los primeros hilos de polvo de la viga.",
    fin: "los círculos se ensancharon hasta el borde y la vasija se desplazó un palmo sobre el suelo de tierra, con el polvo cayendo en hilos más gruesos.",
  }, "grietas grandes, derrumbe, casas cayendo, personas corriendo, catastrofe"),

  // b11 — Quedó el salto y su rumor. ¿Puente o puerta?
  esc("b11a", [ref("salto_tequendama")], {
    comun: "GRAN PLANO GENERAL en contrapicado, luz de tarde constante. EL MISMO salto de la referencia cayendo entero, con las paredes húmedas brillando; el cuadro deja aire arriba. Todo el plano es agua cayendo y vapor subiendo a la vez. Capa de primer plano: helechos a contraluz. Objeto ancla: la columna de agua.",
    ini: "la niebla de espuma de algodón empieza a subir desde el vacío y el aire de arriba está limpio.",
    fin: "la niebla subió y llenó todo el aire de arriba del cuadro, con la columna de agua cayendo detrás de ella y los helechos temblando.",
  }, "personas, turistas, barandas, puentes modernos"),
  esc("b11b", [ref("valle_anegado_arco"), ref("salto_tequendama")], {
    comun: "PLANO GENERAL final, luz indecisa entre tarde y niebla. EL MISMO arco de Cuchavira de la referencia otra vez sobre el valle, ahora sin nadie encima y con sus bandas de color aún vivas: un extremo apoyado cerca del MISMO salto de la referencia y el otro entrando en un banco de niebla. La imagen no resuelve si es puente o puerta. Capa de primer plano: la niebla cruzando. Objeto ancla: el extremo lejano del arco.",
    ini: "la niebla deja ver un buen trecho de ese extremo antes de tragárselo.",
    fin: "la niebla corrió y tapó ese extremo del todo: el arco ahora entra en el banco de niebla y no se ve dónde termina, mientras el salto sigue humeando.",
  }, "personas, figura divina, puerta dibujada, puente construido, señales, simbolos, arco descolorido"),
]);
