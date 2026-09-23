// Keyframes de El Dorado — 9 bloques × 2 escenas × 2 cuadros = 36 imágenes ≈ 90 s.
// Guion: guion-el-dorado-v2.json (N=9) · Acta: acta-el-dorado.json (14 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _muisca-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · NO EXISTE LA CIUDAD DE ORO. La fuente lo dice dos veces —al empezar y al
//   cerrar— y el guion también: lo que hubo fue UNA CEREMONIA, y la ciudad la
//   inventaron los que llegaron después. Ninguna imagen puede insinuarla, ni
//   siquiera al fondo y desenfocada: detrás de los mayores hay páramo y nada
//   más, y eso se muestra expresamente (b3b).
// · EL ORO NO ES RIQUEZA DEL HEREDERO. Salió de manos de orfebres, mineros y
//   viajeros, dura lo que dura el trayecto y se lo lleva el agua. Es préstamo,
//   no propiedad: por eso b5 sale del cerro y no de él.
// · LAS FIGURAS Y ESMERALDAS SON OFRENDAS, NO MONEDAS: nadie esperaba
//   recuperarlas. Tratarlas como tesoro repite el error de los buscadores, así
//   que nunca se amontonan ni brillan como botín.
// · EL GESTO INAUGURAL DEL MANDO ES ENTREGAR. El relato cierra con «un
//   gobernante que comenzó su mando entregando», y la imagen NO debe volverlo
//   coronación: no hay corona, ni cetro, ni aclamación, ni nadie arrodillado.
// · LA CITA ES LITERAL del canon y va en b8. No se le añade solemnidad: la
//   dice en voz baja, para el agua y para los suyos.
//
// CANDADO ANTI-MODERACIÓN (aquí es el riesgo principal, y es el único mito del
// corpus donde el oro sobre la piel es canon y por tanto la excepción explícita
// al guardarraíl del sitio). El filtro reacciona a la IMAGEN, así que:
//   · el heredero SIEMPRE con el guayuco blanco descrito con todas las letras;
//   · SIEMPRE de espaldas, de perfil o a media distancia; NUNCA un primer
//     plano del torso;
//   · las escenas del agua se resuelven con manos, remos, objetos o superficie
//     de laguna, y varias no llevan figura humana en cuadro.
//
// GUION DE LUZ: páramo azul antes del alba → luz plana del aprendizaje →
// primera claridad gris en la orilla → resina y polvo con el cielo apenas
// clareando → cerro de los orfebres al rayar el día → agua quieta y remos →
// el sol saliendo sobre el borde del cerro → luz baja y dorada de la entrega →
// sol pleno sobre la laguna vacía.

import { DIRECCION, AVOID_BASE, ref, esc, escp, armar } from "./_muisca-comun.mjs";

export const SPEC_NAME = "muisca-eldorado-escenas";
export const OUT_DIR = "muiscas/videos/el-dorado/keyframes";
export { DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; ciudad de oro, edificios dorados, cupulas o torres al fondo; montanas de tesoro, cofres, lingotes, monedas, botin amontonado; corona, cetro, trono, investidura, aclamacion, arrodillarse; carabelas, conquistadores, armaduras, cascos de metal; oro brillante o saturado, destellos, chispas, particulas doradas; torso en primer plano, desnudez, sexualizacion; multitudes en extasis, danza ritual frenetica, trance; sacrificios, sangre, fuego ceremonial grande; mapas, rotulos, texto o inscripciones";
export const PALETTE =
  "azul frio de paramo antes del alba, gris verdoso de laguna honda, pardo de junco seco y de balsa, crema de algodon crudo, blanco de niebla baja; el oro SOLO como polvo mate y opaco sobre la piel y como figuras pequenas de metal apagado, nunca brillante ni saturado";

// Descripción byte-idéntica del heredero en cada escena donde aparece. Es la
// regla de continuidad de la biblia y a la vez el candado de pudor.
const HER =
  "EL MISMO heredero de la referencia (hombre joven muisca de unos veinte años, pelo negro liso cortado a la altura de la mandíbula, cara seria y contenida, GUAYUCO BLANCO DE ALGODÓN CRUDO bien visible en la cintura, sin joyas, sin pectoral y sin nada de metal encima), SIEMPRE de espaldas, de perfil o a media distancia y nunca en primer plano del torso";

export const ITEMS = armar([
  // b1 — Llegó a la laguna antes del amanecer. Frío, y nadie hablaba.
  esc("b1a", [ref("laguna_guatavita"), ref("altiplano_noche")], {
    comun: `Azul frío de páramo antes del alba, sin sol todavía. LA MISMA laguna de la referencia, quieta, con niebla baja pegada al agua. Todavía no hay nadie en cuadro. Capa de primer plano: frailejones oscuros. Objeto ancla: la superficie del agua sin una onda.`,
    camara: {
      a: "PLANO MACRO de la superficie del agua inmóvil, con la niebla rozándola y el cielo azul oscuro reflejado.",
      b: "la cámara se ha ELEVADO en vertical saliendo del agua: GRAN PLANO GENERAL en picado de la laguna entera encajada en el páramo, con el borde del cerro recortado y ninguna luz de sol aún.",
    },
    ini: "el agua está completamente inmóvil y la niebla la roza sin moverla.",
    fin: "desde muy arriba se ve la laguna entera metida en el páramo, redonda y quieta, con el cielo todavía azul oscuro.",
  }, "ciudad, edificios, antorchas, fuego, multitudes, barcas"),
  esc("b1b", [ref("heredero_dorado"), ref("laguna_guatavita"), ref("sendero_territorio")], {
    comun: `Azul frío antes del alba. ${HER} llegando por el sendero del páramo. El páramo todavía respira frío y nadie habla: el vaho se le ve salir. Objeto ancla: el vaho en el aire.`,
    camara: {
      a: "PLANO DETALLE de sus pies descalzos pisando la hierba escarchada del sendero, a ras de suelo.",
      b: "la cámara ha RETROCEDIDO y se ha elevado en diagonal: PLANO GENERAL del sendero con él de espaldas, pequeño, y la laguna apareciendo abajo delante de él.",
    },
    ini: "a ras de suelo, sus pies descalzos pisan la hierba escarchada del sendero.",
    fin: "desde arriba y de espaldas se le ve pequeño en el sendero, con la laguna abriéndose abajo delante de él y nadie más alrededor.",
  }, "comitiva, antorchas, musica, multitud, ciudad al fondo, oro brillante"),

  // b2 — Años aprendiendo a escuchar, repartir trabajo y contener la respuesta.
  escp("b2a", [ref("salon_jeques"), ref("heredero_dorado"), ref("abuelo_narrador")], {
    comun: `Luz plana de un día cualquiera anterior: el aprendizaje, no la ceremonia. Aquí el heredero SÍ lleva manta de algodón crudo anudada al hombro. Está ESCUCHANDO a dos mayores que hablan, callado y sin contestar. Objeto ancla: su boca cerrada mientras otros hablan.`,
    camara: {
      a: "PLANO GENERAL del interior con los mayores hablando en un lado y él sentado aparte, en el borde del cuadro.",
      b: "la cámara ha AVANZADO en diagonal hasta él y ha girado al perfil: PLANO MEDIO CORTO de su cara de lado, oyendo, con la boca cerrada y los mayores desenfocados detrás.",
    },
    ini: "los mayores hablan en un lado del recinto y él está sentado aparte, casi fuera de cuadro.",
    fin: "de cerca y de perfil se le ve la cara escuchando, con la boca cerrada: no ha dicho nada en todo el rato.",
  }, "trono, coronacion, corte, sirvientes, oro, cetro"),
  escp("b2b", [ref("heredero_dorado"), ref("familias_muiscas"), ref("sabana_cultivos")], {
    comun: `Luz plana. Repartir trabajo: señala tramos de un sembrado y cada grupo va al suyo. También aprendió a tragarse la primera respuesta cuando hervía, y eso se ve en que respira antes de hablar. Objeto ancla: la mano que reparte los tramos.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara tomando aire y aguantándolo un momento antes de contestar a alguien fuera de cuadro.",
      b: "la cámara ha RETROCEDIDO y se ha elevado mucho: PLANO GENERAL en picado del sembrado dividido en cuatro tramos, con un grupo distinto trabajando en cada uno.",
    },
    ini: "de cerca, toma aire y lo aguanta un momento antes de contestar.",
    fin: "desde arriba se ve el resultado: el sembrado repartido en cuatro tramos y un grupo trabajando en cada uno sin que nadie vigile.",
  }, "castigo, latigo, esclavitud, capataces, armas, trono"),

  // b3 — Cuatro mayores con una balsa. Detrás no había ninguna ciudad de oro.
  escp("b3a", [ref("balsa_juncos"), ref("familias_muiscas"), ref("laguna_guatavita")], {
    comun: `Primera claridad gris en la orilla, sin sol aún. Cuatro mayores esperando junto a LA MISMA balsa de juncos de la referencia, varada a medias en la orilla. Están callados, con las mantas secas. Objeto ancla: la proa de juncos de la balsa.`,
    camara: {
      a: "PLANO MACRO de los juncos atados de la proa de la balsa, con el agua lamiendo el borde de abajo.",
      b: "la cámara ha RETROCEDIDO y ha girado hacia la orilla: PLANO GENERAL con los cuatro mayores de pie junto a la balsa, separados entre sí, esperando sin hablar.",
    },
    ini: "los juncos atados de la proa se ven muy de cerca y el agua lame el borde de abajo.",
    fin: "al retroceder aparecen los cuatro mayores de pie junto a la balsa, cada uno en su sitio, esperando en silencio.",
  }, "ciudad al fondo, edificios, oro brillante, multitud, musica, antorchas"),
  esc("b3b", [ref("laguna_guatavita"), ref("altiplano_noche")], {
    comun: `Primera claridad gris. ESTE PAR EXISTE PARA MOSTRAR UNA AUSENCIA: detrás de los mayores NO hay ninguna ciudad de oro. Lo que hay es páramo pelado, frailejones y el borde del cerro. Sin figuras humanas en cuadro. Objeto ancla: la ladera vacía.`,
    camara: {
      a: "PLANO MEDIO de la ladera justo detrás de la orilla: frailejones, piedra y hierba, nada más.",
      b: "la cámara ha hecho un PANORÁMICO lento de 180 grados y se ha elevado: GRAN PLANO GENERAL del páramo entero alrededor de la laguna, vacío de punta a punta, sin una sola construcción.",
    },
    ini: "detrás de la orilla sólo hay frailejones, piedra y hierba.",
    fin: "al barrer el páramo entero desde arriba se confirma que no hay nada construido en ninguna dirección: ni ciudad, ni templo, ni muro.",
  }, "ciudad, edificios, cupulas, torres, ruinas, murallas, oro, humo de hogueras"),

  // b4 — Le quitaron la manta, le untaron resina y le soplaron polvo de oro.
  esc("b4a", [ref("heredero_dorado"), ref("balsa_juncos"), ref("laguna_guatavita")], {
    comun: `Cielo apenas clareando en la orilla. ${HER}, ya sin la manta y con el guayuco blanco puesto, DE ESPALDAS a la cámara mientras unas manos le extienden resina pegajosa y fragante sobre los hombros. Objeto ancla: la resina brillante en la piel.`,
    camara: {
      a: "PLANO MACRO en escorzo de una mano extendiendo resina espesa sobre la piel de un hombro, sin que se vea la cara ni el torso.",
      b: "la cámara ha RETROCEDIDO y se ha elevado por detrás: PLANO GENERAL de la orilla con él de espaldas en el centro y los cuatro mayores trabajando alrededor.",
    },
    ini: "una mano extiende la resina espesa sobre la piel del hombro, muy de cerca.",
    fin: "desde atrás y desde arriba se ve la escena entera: él de espaldas en el centro de la orilla y los cuatro mayores alrededor, cada uno en una tarea.",
  }, "torso en primer plano, desnudez, cara en primer plano, oro brillante, multitud"),
  esc("b4b", [ref("heredero_dorado"), ref("disco_oro"), ref("laguna_guatavita")], {
    comun: `Cielo clareando. Encima de la resina le SOPLAN polvo de oro con cañutos: el oro llega como POLVO MATE, no como brillo. ${HER}, de espaldas. Objeto ancla: la nube de polvo de oro en el aire.`,
    camara: {
      a: "PLANO DETALLE del extremo de un cañuto y la nube fina de polvo dorado saliendo de él contra el cielo gris.",
      b: "la cámara ha RETROCEDIDO en travelling y ha bajado a la altura del agua: PLANO GENERAL a ras de laguna con él de espaldas en la orilla, ya cubierto de polvo mate, y la nube dorada todavía flotando alrededor.",
    },
    ini: "del extremo del cañuto sale una nube fina de polvo dorado contra el cielo gris.",
    fin: "desde el agua y a media distancia se le ve de espaldas, cubierto de polvo mate de la nuca a los talones, con el polvo aún flotando en el aire.",
  }, "oro brillante, destellos, particulas magicas, torso en primer plano, desnudez"),

  // b5 — Ese brillo no era suyo: salía de orfebres y mineros que miraban.
  escp("b5a", [ref("familias_muiscas"), ref("disco_oro"), ref("vasija_gacha")], {
    comun: `Primera luz sobre el cerro. EL ORO NO ES SUYO: viene de manos ajenas. Se muestra el trabajo que lo produjo —manos de orfebre martillando una lámina, manos de minero con tierra— y no al heredero. Objeto ancla: las manos que hicieron el oro.`,
    camara: {
      a: "PLANO MACRO de unas manos de orfebre aplanando una lámina delgada de oro mate sobre una piedra lisa.",
      b: "la cámara ha RETROCEDIDO y ha subido por la ladera: PLANO GENERAL del cerro con ocho o diez personas repartidas por él, unas trabajando metal y otras con cestos de tierra.",
    },
    ini: "unas manos aplanan una lámina delgada de oro mate sobre una piedra, muy de cerca.",
    fin: "desde arriba se ve el cerro entero con ocho o diez personas repartidas trabajando: de ahí salió cada grano de ese polvo.",
  }, "tesoro amontonado, lingotes, cofres, monedas, esclavitud, latigos"),
  esc("b5b", [ref("familias_muiscas"), ref("laguna_guatavita"), ref("guatavita_llamas")], {
    comun: `Primera luz. Los que hicieron el oro lo MIRAN desde el cerro, de lejos y sin bajar. Son quienes prestaron el brillo, no público de una fiesta. El heredero aparece sólo como una figura diminuta abajo. Objeto ancla: la distancia entre el cerro y la orilla.`,
    camara: {
      a: "PLANO MEDIO de tres personas de pie en el cerro, de espaldas a la cámara, mirando hacia abajo.",
      b: "la cámara ha PASADO por encima de sus hombros y ha volado hacia la laguna: GRAN PLANO GENERAL en picado con la orilla muy abajo y la figura dorada diminuta junto a la balsa.",
    },
    ini: "tres personas de espaldas miran hacia abajo desde el cerro.",
    fin: "la cámara ha bajado hasta ver lo que miran: la orilla muy lejos, con una figura diminuta cubierta de polvo dorado junto a la balsa.",
  }, "extasis, adoracion, arrodillarse, aclamacion, ciudad, oro brillante"),

  // b6 — Subió a la balsa. Los remos entraban sin golpear; cada palada un círculo.
  esc("b6a", [ref("balsa_juncos"), ref("heredero_dorado"), ref("laguna_guatavita")], {
    comun: `Luz gris que empieza a calentar. ${HER} ya de pie sobre la balsa, de espaldas, y los cuatro mayores remando. A sus pies hay figuras de metal apagado y esmeraldas pequeñas: son OFRENDAS, no monedas, repartidas sin amontonar. Objeto ancla: la balsa despegándose de la orilla.`,
    camara: {
      a: "PLANO GENERAL desde la orilla con la balsa despegándose y él de espaldas encima, pequeño.",
      b: "la cámara ha VOLADO por encima del agua hasta la balsa y ha basculado en cenital: PLANO EN PICADO de la cubierta de juncos con las figuras y las esmeraldas repartidas y sus pies descalzos entre ellas.",
    },
    ini: "desde la orilla se ve la balsa despegándose con él de espaldas encima.",
    fin: "desde arriba de la balsa se ve la cubierta de juncos con las ofrendas repartidas por ella y sus pies descalzos en medio.",
  }, "tesoro amontonado, cofres, monedas, oro brillante, torso en primer plano"),
  esc("b6b", [ref("balsa_juncos"), ref("laguna_guatavita")], {
    comun: `Luz gris. Los remos entran SIN GOLPEAR el agua: cada palada abre un círculo y lo cierra detrás. Es un plano sin personas en cuadro: sólo la pala, el agua y la estela. Objeto ancla: el círculo que se abre y se cierra.`,
    camara: {
      a: "PLANO MACRO de la pala de madera entrando en el agua sin salpicar y abriendo un círculo limpio.",
      b: "la cámara ha RETROCEDIDO a lo largo de la estela y se ha elevado: PLANO GENERAL en picado de la laguna con la balsa pequeña y una fila de círculos cerrándose detrás de ella.",
    },
    ini: "la pala entra en el agua sin salpicar y abre un círculo limpio.",
    fin: "desde arriba se ve la balsa ya lejos y, detrás de ella, la fila de círculos que se van cerrando uno tras otro.",
  }, "olas, tormenta, remolinos, monstruos, criaturas, oro brillante"),

  // b7 — En el centro salió el sol. El agua le devolvió su reflejo.
  esc("b7a", [ref("laguna_guatavita"), ref("guatavita_llamas")], {
    comun: `EL SOL SALE por el borde del cerro y la luz baja llega rasante al agua. Es el momento en que la luz toca el oro. Sin figuras en cuadro. Objeto ancla: el primer filo de sol sobre el borde del cerro.`,
    camara: {
      a: "PLANO GENERAL del borde del cerro con el primer filo de sol asomando y la laguna todavía en sombra abajo.",
      b: "la cámara ha DESCENDIDO en picado hasta rozar el agua y ha girado: PLANO MACRO de la superficie con la luz rasante corriendo sobre ella y encendiéndola de un extremo a otro.",
    },
    ini: "el primer filo de sol asoma por el borde del cerro y la laguna sigue en sombra.",
    fin: "al ras del agua, la luz rasante recorre la superficie y la enciende entera de un lado al otro.",
  }, "rayos divinos, resplandor sobrenatural, aureola, ciudad iluminada, oro brillante"),
  esc("b7b", [ref("heredero_dorado"), ref("balsa_juncos"), ref("laguna_guatavita")], {
    comun: `Sol bajo y rasante. El agua le devuelve su propio reflejo y por un instante está duplicado: uno de pie sobre los juncos y otro hecho de reflejo. ${HER}. El reflejo se ve mejor que él. Objeto ancla: el reflejo en el agua.`,
    camara: {
      a: "PLANO MACRO de la superficie del agua con el reflejo dorado deformándose despacio sobre ella, sin que se vea el cuerpo real.",
      b: "la cámara ha SUBIDO desde el agua y ha retrocedido: PLANO GENERAL lateral con él de perfil de pie en la balsa y su reflejo entero debajo, los dos del mismo tamaño.",
    },
    ini: "sólo se ve el reflejo dorado deformándose despacio sobre el agua.",
    fin: "al subir la cámara aparecen los dos a la vez: él de perfil sobre los juncos y su reflejo completo debajo, iguales.",
  }, "aureola, resplandor, doble fantasmal, espiritu, torso en primer plano, oro brillante"),

  // b8 — Soltó la primera figura. «No confundiré lo que brilla...». (CITA)
  esc("b8a", [ref("heredero_dorado"), ref("esmeralda_algodones"), ref("balsa_juncos")], {
    comun: `Luz baja y dorada. Piensa en la gente que no cabía en una balsa y que lo mira desde la orilla, y SUELTA LA PRIMERA FIGURA. No pide nada a cambio. El gesto es abrir la mano, no lanzar. Objeto ancla: la figura de metal cayendo.`,
    camara: {
      a: "PLANO MACRO de una figurita de metal apagado en la palma abierta sobre el borde de la balsa.",
      b: "la cámara ha SEGUIDO la figura al caer y se ha hundido con ella junto a la superficie: PLANO DETALLE del agua recibiéndola, con la mano ya vacía arriba, pequeña y fuera de foco.",
    },
    ini: "la figurita de metal apagado descansa en la palma abierta sobre el borde de la balsa.",
    fin: "al caer, el agua la recibe sin ruido y arriba queda la mano abierta y vacía, ya lejos y desenfocada.",
  }, "tesoro, monedas, lanzar con fuerza, dramatismo, oro brillante, destellos"),
  esc("b8b", [ref("heredero_dorado"), ref("balsa_juncos"), ref("familias_muiscas")], {
    comun: `Luz baja y dorada. CITA, dicha EN VOZ BAJA y para el agua: que no confundirá lo que brilla con lo que debe proteger. Lo que hay que proteger está en la orilla, así que la cámara acaba mirando allí. Objeto ancla: la orilla llena de gente.`,
    camara: {
      a: "PLANO MEDIO de él de perfil sobre la balsa, con la cara baja hacia el agua, hablando sin levantar la voz.",
      b: "la cámara ha GIRADO sobre sí misma dejándolo fuera de cuadro y ha avanzado hacia la orilla: PLANO GENERAL de la gente de pie en la ribera, decenas de personas calladas mirando hacia el centro.",
    },
    ini: "de perfil sobre la balsa, con la cara baja hacia el agua, dice algo en voz baja.",
    fin: "la cámara se ha vuelto hacia la orilla: allí están de pie decenas de personas calladas, y es a eso a lo que se refería.",
  }, "coronacion, aclamacion, arrodillarse, aplausos, cetro, corona, texto"),

  // b9 — Entró, y el oro se le fue grano por grano. Después buscaron la ciudad.
  esc("b9a", [ref("heredero_dorado"), ref("laguna_guatavita")], {
    comun: `Sol ya alto y luz limpia. Entró al agua y el oro se le fue GRANO POR GRANO, dejándolo otra vez humano y frío. Se cuenta con el polvo que se desprende, no con el cuerpo: ${HER}, a media distancia y de espaldas, ya en el agua hasta la cintura. Objeto ancla: el polvo de oro soltándose en el agua.`,
    camara: {
      a: "PLANO MACRO de la superficie del agua con el polvo de oro desprendiéndose y esparciéndose en hilos finos.",
      b: "la cámara ha RETROCEDIDO y se ha elevado mucho: GRAN PLANO GENERAL en picado de la laguna con una mancha dorada dispersándose en el centro y él ya casi sin brillo, pequeño y de espaldas.",
    },
    ini: "el polvo de oro se desprende y se abre en hilos finos sobre el agua.",
    fin: "desde muy arriba, la mancha dorada se ha repartido por la laguna y él, ya sin brillo, es una figura pequeña de espaldas en el centro.",
  }, "ahogamiento, dramatismo, torso en primer plano, desnudez, criaturas, tesoro en el fondo"),
  esc("b9b", [ref("laguna_guatavita"), ref("altiplano_noche"), ref("campo_pelado")], {
    comun: `Luz cruda de mediodía, mucho después. Otros creyeron que existía un lugar hecho de oro y buscaron LA CIUDAD QUE NUNCA HUBO: lo que dejaron son cortes y zanjas abiertos en la ladera, y páramo vacío. Sin figuras en cuadro y sin ninguna construcción. Objeto ancla: el corte abierto en la ladera.`,
    camara: {
      a: "PLANO MACRO de un corte de tierra abierto a azada en la ladera, con la hierba arrancada y la piedra suelta a los lados.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL en picado de la laguna y el páramo entero, con las zanjas marcadas en la ladera y ni una sola construcción en ninguna dirección.",
    },
    ini: "un corte abierto a azada en la ladera, con la hierba arrancada y la piedra suelta alrededor.",
    fin: "desde muy arriba se ve todo a la vez: la laguna, las zanjas que le abrieron al cerro y el páramo vacío hasta el horizonte, sin ninguna ciudad.",
  }, "ciudad de oro, ruinas doradas, conquistadores, armaduras, carabelas, tesoro, mapas"),
]);
