// Keyframes de El castigo de Chaquén — 10 bloques × 2 escenas × 2 cuadros = 40 imágenes ≈ 100 s.
// Guion: guion-el-castigo-de-chaquen-v2.json (N=10) · Acta: acta-el-castigo-de-chaquen.json
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _muisca-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · Aquí Chaquén SÍ TIENE CUERPO: camina con los pies polvorientos y una vara
//   al hombro. Es justo lo contrario de `chaquon`, donde la fuente lo define
//   como la línea misma. La ficha `chaquen_lindero` pertenece a ESTE mito.
// · El castigo NO es cruel por gusto ni hay ira: no levanta la voz, no
//   responde a Súnuba y sigue su camino sin volverse. La frialdad es el tono
//   y hay que sostenerla: nada de rostro furioso, rayos ni gestos teatrales.
// · Súnuba NO se disculpa: contesta que la palabra también les fue impuesta.
//   La fuente deja esa objeción SIN RESPUESTA y el guion tampoco la resuelve.
// · Las dos plantas están PREFIGURADAS en el paisaje antes de la
//   transformación: la hierba seca del lindero a un lado del sendero, la
//   quebrada al otro. Ese plano (b4a) es irrenunciable, porque el castigo
//   consiste en volverlos el paisaje que ya estaban cruzando.
// · El final NO es silencio: siguen hablándose. Lo que no pueden es
//   alcanzarse, y la distancia es exactamente la que mide una vara.
//
// GUION DE LUZ: gris de amanecer con niebla en Tota → días de distancia →
// última tarde en la junta → luz baja que reparte el sendero en dos → el
// viento que se detiene → luz plana sin sombras → verde del agua → tarde que
// se va sobre el sendero vacío → viento de páramo.

import { DIRECCION, AVOID_BASE, ref, esc, escp, armar } from "./_muisca-comun.mjs";

export const SPEC_NAME = "muisca-castigo-chaquen-escenas";
export const OUT_DIR = "muiscas/videos/el-castigo-de-chaquen/keyframes";
export { DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; rostro furioso, ira, gritos, dedo acusador, rayos o resplandor al castigar; magia visible, chispas, particulas brillantes; cuerpos deformandose con dolor, huesos, sangre, agonia; abrazos, besos, escenas romanticas explicitas, desnudez; bodas, ceremonias, sacerdotes; hierba y fijiza con rostros o rasgos humanos";
export const PALETTE =
  "gris de niebla de Tota, paja seca del lindero, verde oscuro y humedo de fijiza y juncal, pardo de sendero, crema de algodon crudo; el gris de la vara; sin saturacion ni neones";

const TINTOBA =
  "EL MISMO Tintoba de la referencia (joven de unos veintidós años, rostro serio y contenido, pelo negro liso hasta la nuca, manta corta de algodón crudo ceñida a la cintura con cordón de fique, descalzo)";
const SUNUBA =
  "LA MISMA Súnuba de la referencia (joven de unos veinte años, rostro sereno y firme, pelo negro liso muy largo y suelto, manta de algodón crudo del pecho a la pantorrilla anudada al hombro con cenefa tejida sobria en verde oscuro, descalza)";
const CHAQUEN =
  "EL MISMO Chaquén de la referencia (hombre de unos cuarenta años, seco y de andar tranquilo, rostro impasible, pelo negro recogido, manta de algodón crudo anudada al hombro, descalzo y con los pies polvorientos hasta el tobillo, con una vara larga de madera gris sin adorno al hombro)";

export const ITEMS = armar([
  // b1 — Se conocieron sin querer en la orilla de Tota. Promesas de otros.
  escp("b1a", [ref("orilla_tota_niebla"), ref("tintoba_joven"), ref("sunuba_joven")], {
    comun: `Luz gris de amanecer con niebla baja. LA MISMA orilla del lago de Tota de la referencia, con el agua quieta perdiéndose en la bruma. ${TINTOBA} y ${SUNUBA} en la playa angosta. No se buscaban. Objeto ancla: el espacio entre los dos.`,
    camara: {
      a: "PLANO GENERAL LARGO de la playa desde lejos, los dos diminutos y separados por veinte pasos de arena oscura.",
      b: "la cámara ha AVANZADO por la playa hasta quedar entre ellos: PLANO MEDIO CORTO desde el medio, con cada uno cortado por un borde del cuadro y la niebla al fondo.",
    },
    ini: "van cada uno por su lado de la playa y todavía no se han visto.",
    fin: "se han quedado parados uno frente al otro a cuatro pasos, mirándose por primera vez, con la bruma pasando entre los dos.",
  }, "abrazo, beso, romanticismo explicito, flechazo dibujado, corazones"),
  escp("b1b", [ref("familias_muiscas"), ref("casa_barro_paja"), ref("manta_reparto")], {
    comun: "Luz de interior con lámpara baja. Dos familias distintas, cada una en su bohío, cerrando por su cuenta un matrimonio acordado: mantas dobladas de por medio, gente mayor hablando y los dos jóvenes ausentes del trato. Es una palabra de tierra y linaje sembrada antes de que ellos nacieran. Objeto ancla: las mantas del acuerdo.",
    camara: {
      a: "PLANO DETALLE de dos manos viejas sobre una manta doblada, cerrando el trato.",
      b: "la cámara ha RETROCEDIDO y ha atravesado la pared hasta el otro bohío: PLANO GENERAL en el que se ven las DOS casas a la vez, cada una con su corro y su manta, haciendo lo mismo por separado.",
    },
    ini: "unas manos viejas aprietan la manta doblada y no se ve a nadie más.",
    fin: "desde fuera se ven los dos bohíos a la vez, cada uno con su corro cerrando su acuerdo, y en ninguno de los dos está ninguno de los jóvenes.",
  }, "boda, ceremonia, sacerdote, cruces, novios, fiesta, violencia"),

  // b2 — Convirtieron ese saber en distancia. Se encontraron en la junta.
  escp("b2a", [ref("tintoba_joven"), ref("sunuba_joven"), ref("sabana_cultivos")], {
    comun: `Luz plana de varios días iguales. ${TINTOBA} y ${SUNUBA} en el mismo campo pero lo más lejos posible el uno del otro; la distancia, en vez de apagar la falta, la hace más visible. Objeto ancla: la franja de tierra vacía entre ellos.`,
    camara: {
      a: "PLANO MEDIO de ella sola trabajando de espaldas, sin él en cuadro.",
      b: "la cámara ha RETROCEDIDO y ha subido hasta un PICADO ALTO del campo entero: se los ve a los dos a la vez, cada uno en una esquina opuesta, con toda la sementera vacía entre ellos.",
    },
    ini: "ella trabaja sola y parece que no hay nadie más en el campo.",
    fin: "desde arriba se ve que él está en la otra punta de la misma parcela y que los dos han levantado la cara a la vez, con todo el campo vacío de por medio.",
  }, "llanto, dramatismo, abrazo, encuentro furtivo, besos"),
  esc("b2b", [ref("junta_juncos")], {
    comun: "Luz de última tarde. LA MISMA junta de los juncos de la referencia: dos senderos de tierra que vienen de rumbos opuestos y se encuentran en un solo camino, entre un juncal alto y el borde de una quebrada. Objeto ancla: el punto donde los dos senderos se juntan.",
    camara: {
      a: "PLANO CENITAL cerrado sobre la tierra del cruce, con las dos huellas de pies llegando de direcciones distintas.",
      b: "la cámara se ha ELEVADO y ha retrocedido hasta un PLANO GENERAL del paraje: se ven los dos senderos enteros bajando desde lados opuestos y juntándose en el juncal.",
    },
    ini: "en la tierra del cruce hay dos rastros de pisadas que vienen de rumbos distintos y acaban de tocarse.",
    fin: "desde lejos se ve el paraje entero: los dos caminos bajando de lados opuestos, el juncal, la quebrada y el lago al fondo; el punto donde se juntan es sólo uno.",
  }, "personas, dramatismo, tormenta, señales, texto"),

  // b3 — Una manta pequeña y un puñado de maíz. No huían.
  escp("b3a", [ref("sunuba_joven"), ref("tintoba_joven"), ref("junta_juncos")], {
    comun: `Luz de tarde larga. ${SUNUBA} con una manta pequeña doblada bajo el brazo y ${TINTOBA} con un puñado de maíz tostado en la mano abierta, caminando por EL MISMO cruce de senderos de la referencia. Lo que llevan no es equipaje de fuga: es lo poco que cabe en una mano. Objeto ancla: lo que lleva cada uno.`,
    camara: {
      a: "PLANO DETALLE de las dos manos en marcha —la manta doblada y el maíz tostado— muy cerca del objetivo.",
      b: "la cámara ha RETROCEDIDO y ha subido a la altura de sus caras: PLANO MEDIO de los dos caminando juntos por el sendero, con el juncal pasando detrás.",
    },
    ini: "las dos manos avanzan al ritmo de los pasos y no se ve nada más.",
    fin: "se les ve ya la cara: caminan al mismo paso, cerca uno del otro y sin tocarse, mirando adelante con la boca cerrada.",
  }, "bultos grandes, fardos, huida, persecucion, miedo, abrazos, besos"),
  escp("b3b", [ref("tintoba_joven"), ref("sunuba_joven"), ref("junta_juncos")], {
    comun: `Luz baja que entra rasante por el sendero. ${TINTOBA} y ${SUNUBA} detenidos en el cruce, a punto de decir en voz alta lo que llevaban callando. Objeto ancla: sus bocas.`,
    camara: {
      a: "PLANO GENERAL de los dos pequeños y parados en mitad del paraje, con el juncal y la quebrada alrededor.",
      b: "la cámara ha AVANZADO hasta muy cerca y ha rodeado hasta el perfil: PLANO MEDIO CORTO de las dos caras enfrentadas, con el fondo desenfocado.",
    },
    ini: "están parados frente a frente, lejos y quietos, sin decir nada todavía.",
    fin: "de cerca se ve que él ha empezado a hablar y ella lo escucha con la cara alzada; siguen sin tocarse.",
  }, "beso, abrazo, llanto, romanticismo explicito, desnudez"),

  // b4 — La hierba seca y la quebrada. Oyeron pasos: era Chaquén.
  esc("b4a", [ref("junta_juncos"), ref("hierba_fijiza")], {
    comun: "Luz de última tarde. EL MISMO paraje de la referencia con el sendero partiéndolo: a un lado la HIERBA SECA del lindero, de tallos ásperos color paja en tierra dura; al otro, la quebrada bajando entre piedras oscuras con la vegetación húmeda de la orilla. Éste es el plano irrenunciable: las dos plantas ya están ahí antes de que nadie se convierta en nada. Objeto ancla: el sendero entre las dos vegetaciones.",
    camara: {
      a: "PLANO MEDIO BAJO a la altura de la hierba seca, con los tallos ásperos grandes en primer término y la quebrada al otro lado del camino.",
      b: "la cámara ha CRUZADO el sendero a ras de suelo hasta la orilla húmeda y ha girado: PLANO MEDIO desde el lado del agua, con las hojas verdes en primer término y la hierba seca ahora al otro lado.",
    },
    ini: "desde el lado seco se ve el camino y, más allá, el verde húmedo de la quebrada.",
    fin: "desde el lado húmedo se ve lo mismo al revés: el agua corriendo cerca y, al otro lado del camino, la hierba seca que no la alcanza. El paisaje ya está partido en dos.",
  }, "personas, plantas con rostro, ojos, simbolos, texto"),
  escp("b4b", [ref("chaquen_lindero"), ref("junta_juncos"), ref("tintoba_joven"), ref("sunuba_joven")], {
    comun: `Luz que se va. ${CHAQUEN} llegando por el sendero, sin prisa; ${TINTOBA} y ${SUNUBA} parados al oírlo. Objeto ancla: los pies polvorientos y la vara al hombro.`,
    camara: {
      a: "PLANO DETALLE de los pies polvorientos avanzando por el sendero, a ras de tierra.",
      b: "la cámara ha SUBIDO por delante de él hasta la altura de los ojos y ha retrocedido: PLANO MEDIO LARGO con él entrando en cuadro por un lado y los dos jóvenes al otro, todos a la misma altura.",
    },
    ini: "sólo se ven unos pies polvorientos que se acercan por el camino.",
    fin: "está ya a seis pasos de ellos, con la vara al hombro y la cara impasible; los dos jóvenes se han quedado quietos mirándolo llegar.",
  }, "rostro furioso, ira, arma levantada, rayos, aureola, resplandor, gritos"),

  // b5 — «También nos la impusieron». (CITA)
  escp("b5a", [ref("chaquen_lindero"), ref("junta_juncos")], {
    comun: `Luz baja. ${CHAQUEN} mirando la tierra del cruce, donde las dos huellas que venían de rumbos distintos se unen en una sola. No acusa: constata. Objeto ancla: las dos huellas unidas.`,
    camara: {
      a: "PLANO MEDIO de él de pie mirando al suelo, con la vara todavía al hombro.",
      b: "la cámara ha DESCENDIDO siguiendo su mirada hasta el suelo: PLANO CENITAL de las dos huellas que se juntan en una, con la punta de la vara entrando por un borde.",
    },
    ini: "él baja la vista hacia el camino y empieza a decir lo que ve.",
    fin: "en el suelo se ven los dos rastros llegando de lados opuestos y fundiéndose en un solo par de huellas, con la vara apuntando al punto exacto donde se juntan.",
  }, "rostro furioso, dedo acusador, grito, violencia, aureola"),
  escp("b5b", [ref("sunuba_joven"), ref("chaquen_lindero")], {
    comun: `Luz baja y lateral. ${SUNUBA} contestando: la palabra también les fue impuesta. NO se disculpa y NO se arrodilla. La fuente deja su objeción sin respuesta. Objeto ancla: su cara.`,
    camara: {
      a: "PLANO MEDIO de ella de frente, con la silueta de él cortada por un borde del cuadro.",
      b: "la cámara ha RODEADO hasta detrás de ella y ha girado hacia Chaquén: PLANO MEDIO CORTO de la cara impasible de él, con el hombro de ella desenfocado en primer término.",
    },
    ini: "ella habla de frente, con la barbilla alta y la voz firme.",
    fin: "la cara de él no ha cambiado en nada: sigue impasible, con la boca cerrada y los ojos quietos. No hay respuesta.",
  }, "arrodillarse, suplica, llanto, rabia, golpes, discusion gritada"),

  // b6 — Chaquén no respondió. El viento se detuvo.
  esc("b6a", [ref("junta_juncos")], {
    comun: "Luz de última tarde. El juncal y los pastos del paraje. Objeto ancla: las cañas del juncal.",
    camara: {
      a: "PLANO MEDIO dentro del juncal, las cañas inclinadas por el viento y moviéndose muy cerca del objetivo.",
      b: "la cámara ha RETROCEDIDO y ha subido hasta un PLANO GENERAL del paraje entero, con el juncal, los pastos y el agua a la vista.",
    },
    ini: "las cañas van todas dobladas hacia el mismo lado y el aire las recorre.",
    fin: "desde lejos se ve que el paraje entero se ha quedado quieto: el juncal derecho, los pastos sin mover y el agua de la quebrada lisa. El viento se detuvo como quien deja de escuchar.",
  }, "tormenta, remolino, rayos, hojas volando, personas"),
  escp("b6b", [ref("tintoba_joven")], {
    comun: `Luz plana sin sombras. ${TINTOBA} queriendo decir que volver no repara nada y que el miedo no vuelve cierta una promesa. Objeto ancla: su boca.`,
    camara: {
      a: "PRIMER PLANO de su cara, la boca abriéndose para hablar.",
      b: "la cámara ha RETROCEDIDO deprisa hasta un PLANO ENTERO: se lo ve de cuerpo entero en mitad del sendero, pequeño, con la boca todavía abierta y sin que salga nada.",
    },
    ini: "empieza a hablar con la boca abierta y los ojos fijos.",
    fin: "desde lejos se ve todo su cuerpo quieto en el camino con la boca abierta y sin sonido: las palabras se le rompieron dentro.",
  }, "grito de terror, agonia, sangre, deformacion, ojos en blanco, aureola"),

  // b7 — Fue hierba seca. Súnuba corrió hacia el agua.
  escp("b7a", [ref("tintoba_joven"), ref("hierba_fijiza"), ref("junta_juncos")], {
    comun: `Luz plana. Donde estaba ${TINTOBA}, en el lado seco del sendero. En el tiempo de una respiración, y sin dolor visible. Objeto ancla: el sitio que ocupaba.`,
    camara: {
      a: "PLANO ENTERO de él de pie en el lindero, con la hierba seca a sus pies.",
      b: "la cámara ha AVANZADO hasta el suelo y se ha puesto a ras de tierra: PLANO MACRO de una mata de hierba seca de tallos ásperos color paja, sin nadie en cuadro.",
    },
    ini: "está de pie y entero, con los brazos caídos, sobre la tierra dura del lindero.",
    fin: "en su sitio hay ahora una mata de hierba seca de lindero, tiesa y áspera, vista a ras de suelo; no queda ninguna figura humana en el cuadro.",
  }, "cuerpo deformandose, dolor, huesos, sangre, rostro en la planta, magia visible, particulas"),
  escp("b7b", [ref("sunuba_joven"), ref("junta_juncos")], {
    comun: `Luz que se va. ${SUNUBA} corriendo hacia el agua de la quebrada. No huye de nadie: va hacia lo que conoce. Objeto ancla: sus pies descalzos.`,
    camara: {
      a: "PLANO MEDIO lateral acompañándola en carrera, con el juncal pasando desenfocado detrás.",
      b: "la cámara se ha ADELANTADO hasta la orilla y la espera allí, baja: PLANO DETALLE de sus pies llegando al barro húmedo, con el agua a un palmo.",
    },
    ini: "corre por el sendero hacia el agua, con el pelo largo suelto atrás.",
    fin: "sus pies han llegado al barro de la orilla y se han hundido en él, con el agua corriendo justo delante.",
  }, "caida, grito, panico, sangre, ahogamiento, persecucion violenta"),

  // b8 — Chaquén tocó el suelo. Ella quedó convertida en fijiza.
  escp("b8a", [ref("chaquen_lindero"), ref("junta_juncos")], {
    comun: `Luz baja. ${CHAQUEN} tocando el suelo con la vara. Sin ira, sin gesto amplio, sin resplandor: un toque. Objeto ancla: la punta de la vara.`,
    camara: {
      a: "PLANO MEDIO lateral de él bajando la vara del hombro.",
      b: "la cámara ha DESCENDIDO hasta el suelo, junto a la punta: PLANO MACRO de la punta de madera gris tocando la tierra, con las botas de polvo de sus pies detrás.",
    },
    ini: "la vara baja desde su hombro hacia el suelo, todavía en el aire.",
    fin: "la punta ha tocado la tierra y se ha quedado apoyada; alrededor del punto no pasa nada visible, ni chispa ni luz.",
  }, "rayos, chispas, resplandor, magia visible, ira, grito, aureola"),
  esc("b8b", [ref("hierba_fijiza"), ref("junta_juncos"), ref("chaquen_lindero")], {
    comun: "Luz última. En la orilla, donde estaba ella, LA MISMA fijiza de la referencia: hojas largas y verdes inclinadas sobre la corriente, con las raíces asomando en el barro. Y Chaquén siguiendo su camino sin volverse. Objeto ancla: la fijiza sobre el agua.",
    camara: {
      a: "PLANO MACRO de las raíces entrando en el barro húmedo de la orilla.",
      b: "la cámara ha RETROCEDIDO y ha subido hasta un PLANO GENERAL del paraje: se ve la fijiza inclinada sobre el agua, la hierba seca al otro lado del sendero, y a Chaquén ya lejos, de espaldas, alejándose por el camino.",
    },
    ini: "las raíces acaban de agarrarse al barro de la orilla.",
    fin: "desde lejos se ve el paraje entero con las dos plantas ya en su sitio a lado y lado del camino, y Chaquén pequeño al fondo, de espaldas y sin volverse.",
  }, "rostros en las plantas, ojos, brazos, figuras humanas en la vegetacion, magia"),

  // b9 — A la distancia que una vara mide, sin tocarse.
  esc("b9a", [ref("hierba_fijiza")], {
    comun: "Luz gris de la mañana siguiente. LAS MISMAS dos plantas de la referencia: la hierba seca del lindero a un lado y la fijiza al otro, separadas por una franja de suelo vacío bien marcada. La distancia es exactamente la que mide una vara. Objeto ancla: la franja de suelo entre las dos.",
    camara: {
      a: "PLANO MACRO de la franja de suelo desnudo entre las dos plantas, tan cerca que se ven los terrones.",
      b: "la cámara ha RETROCEDIDO y se ha puesto frontal: PLANO MEDIO con las dos matas a la misma altura, una a cada lado, y el hueco vacío exacto entre ellas.",
    },
    ini: "sólo se ve tierra desnuda con una hoja seca y una hoja verde entrando por los bordes.",
    fin: "vistas las dos a la vez y a la misma altura, se mide el hueco: cabe una vara entre ellas y ni una hoja llega a cruzarlo.",
  }, "rostros, ojos, brazos, plantas antropomorfas, personas, texto"),
  esc("b9b", [ref("hierba_fijiza"), ref("junta_juncos")], {
    comun: "Luz gris. La hierba del lindero oye correr el agua sin poder acercarse, y la fijiza siente el olor del campo seco sin poder cruzarlo. Objeto ancla: el agua que corre a un palmo de las raíces.",
    camara: {
      a: "PLANO MACRO del agua corriendo entre las piedras oscuras, con las raíces de la fijiza asomando por un borde.",
      b: "la cámara ha CRUZADO a ras de suelo hasta el lado seco y ha girado: PLANO MACRO de la tierra dura y la hierba áspera, con el sonido del agua ya al otro lado del cuadro.",
    },
    ini: "el agua pasa rozando las raíces verdes.",
    fin: "al otro lado del camino la tierra está seca y agrietada y la hierba tiesa; entre esta mata y el agua está el sendero entero.",
  }, "personas, rostros, plantas con ojos, magia, texto"),

  // b10 — Cuando el viento dobla la hierba, la fijiza responde.
  esc("b10a", [ref("hierba_fijiza"), ref("junta_juncos")], {
    comun: "Viento de páramo de tarde. LAS MISMAS dos plantas de la referencia a lado y lado del sendero. No se alcanzan, pero tampoco han dejado de decirse lo que no se dijeron. Objeto ancla: la inclinación de las dos matas.",
    camara: {
      a: "PLANO MEDIO del lado seco: la hierba del lindero doblándose hacia la quebrada con la racha.",
      b: "la cámara ha hecho un PANEO LATERAL rápido cruzando el sendero hasta el otro lado: PLANO MEDIO de la fijiza inclinándose desde el agua hacia el campo seco, en el mismo movimiento.",
    },
    ini: "la hierba seca se dobla hacia el agua con el viento que llega.",
    fin: "al otro lado, la fijiza se ha inclinado desde la corriente hacia el campo seco: las dos están dobladas la una hacia la otra a la vez.",
  }, "rostros, brazos, plantas antropomorfas, personas, corazones, texto"),
  esc("b10b", [ref("junta_juncos"), ref("hierba_fijiza"), ref("sendero_territorio")], {
    comun: "Última luz de la tarde. Quien camina por el sendero ve a dos plantas hablar. El paraje sigue ahí y el camino sigue pasando entre ellas. Objeto ancla: el sendero que pasa entre las dos.",
    camara: {
      a: "PLANO MEDIO BAJO en mitad del sendero, con una planta a cada lado del cuadro muy cerca del objetivo.",
      b: "la cámara ha RETROCEDIDO por el sendero y ha subido hasta un GRAN PLANO GENERAL final: el paraje entero, el juncal, la quebrada, el lago al fondo, y en algún punto del camino las dos matas, pequeñas y separadas.",
    },
    ini: "las dos plantas ocupan los bordes del cuadro, dobladas la una hacia la otra, con el camino vacío en medio.",
    fin: "desde lejos se ve el paraje entero con el sendero cruzándolo; las dos plantas son ya dos manchas diminutas a lado y lado, y entre ellas sigue pasando el camino.",
  }, "personas, rostros, tumbas, monumentos, texto, simbolos"),
]);
