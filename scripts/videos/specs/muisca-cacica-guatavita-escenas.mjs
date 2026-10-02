// Keyframes de La cacica de Guatavita — 12 bloques × 2 escenas × 2 cuadros
// = 48 imágenes ≈ 120 s.
// Guion: guion-la-cacica-de-guatavita-v2.json (N=12)
// Acta:  acta-la-cacica-de-guatavita.json (24 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _muisca-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · Ella NO SE AHOGA. La fuente lo dice dos veces: no luchó contra el agua, y
//   el jeque vuelve diciendo que está VIVA abajo. El fondo es un cercado más
//   hermoso que el de arriba, no una tumba. Prohibido todo lo que lea
//   ahogamiento: forcejeo, burbujas de agonía, cuerpo flotando, cadáver.
// · Ella NO QUIERE VOLVER: es una decisión declarada, no un encierro. El
//   dragón duerme con la cabeza en su regazo —la acompaña, no la retiene—.
//   Lo que retiene a la niña es que YA ES hija del agua.
// · El castigo NO fue privado: su falta se cantó en las fiestas, delante de
//   ella y de todos. La vergüenza pública es lo que la empuja y debe verse.
// · El hombre dorado NO es el origen de El Dorado tal como lo contaron los
//   que llegaron: aquí es un rito para que ELLA lo vea. Lo que los
//   extranjeros oyeron y nombraron fue sólo el brillo.
// · El dragón es una CULEBRA grande y verde: sin alas, sin patas, sin cuernos.
//
// DESLINDE CONTRA `el-dorado` (video YA PRODUCIDO): aquel video es la
// ceremonia entera. Aquí el dorado ocupa UN bloque y se cuenta desde el agua
// —desde donde ella podría estar mirando—, no desde la orilla.
//
// GUION DE LUZ: amanecer frío sobre el agua → ofrendas a ras de orilla →
// interior de la casa del cacique → luz dura del descubrimiento → fogones de
// la fiesta donde se canta la falta → madrugada de la salida → verde del
// fondo → brasas del jeque → penumbra del informe → caminos y ofrendas →
// oro sobre el agua → fondo con la lluvia de ofrendas.

import { DIRECCION, AVOID_BASE, ref, esc, escp, armar } from "./_muisca-comun.mjs";

export const SPEC_NAME = "muisca-cacica-guatavita-escenas";
export const OUT_DIR = "muiscas/videos/la-cacica-de-guatavita/keyframes";
export { DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; ahogamiento, forcejeo en el agua, burbujas de agonia, cuerpo flotando, cadaver, rostro azulado; dragon con alas, patas, garras o cuernos; sirenas, colas de pez, ninfas; suicidio dramatizado, sangre, violencia sobre la mujer; conquistadores, armaduras, cascos, carabelas; cofres del tesoro, monedas, lingotes, oro pulido de joyeria";
export const PALETTE =
  "verde profundo de agua honda, gris de niebla de paramo, crema de algodon crudo, ocre y verde de las cenefas, naranja de fogon y de brasa; el rojo solo en la manta de las apariciones y el oro solo mate, en polvo y en figurillas planas; sin saturacion";

const CACICA =
  "LA MISMA cacica de Guatavita de la referencia (mujer de unos veinticinco años, rostro sereno y grave, pelo negro liso y suelto, manta de algodón crudo del pecho a la pantorrilla anudada al hombro con dos cenefas tejidas geométricas sobrias en ocre y verde oscuro, descalza)";
const DRAGON =
  "EL MISMO dragón de la laguna de la referencia (culebra grande de papel, de cuerpo grueso y largo, escamas recortadas una a una en verde profundo de agua honda con el vientre más claro, cabeza roma y ojos pequeños y oscuros; SIN alas, SIN patas y SIN cuernos)";
const DORADO =
  "EL MISMO heredero dorado de la referencia (hombre joven de unos veinticinco años, rostro sereno y contenido, pelo negro recogido, sin manta y con calzón corto de algodón crudo, la piel de brazos, pecho y espalda cubierta de resina con polvo de oro soplado encima)";

export const ITEMS = armar([
  // b1 — La laguna fría y honda. En el fondo vive una culebra verde.
  esc("b1a", [ref("laguna_guatavita")], {
    comun: "Amanecer frío. LA MISMA laguna de la referencia: espejo circular y muy quieto encajado en un cerro de páramo, con la orilla de juncos y piedra y una franja de niebla baja pegada al agua. No se llena con una lluvia ni se vacía con una sequía. Objeto ancla: la superficie quieta.",
    camara: {
      a: "PLANO MACRO sobre el agua, tan cerca que se ve la niebla deslizarse a ras de la superficie.",
      b: "la cámara se ha ELEVADO en vertical muchísimo: PLANO CENITAL ALTO de la laguna entera como un círculo oscuro encajado entre las cuatro capas del cerro.",
    },
    ini: "la niebla corre pegada al agua y no se ve más que un palmo de superficie.",
    fin: "desde muy arriba la laguna es un círculo perfecto de agua oscura en mitad del páramo, con la niebla ya deshecha en los bordes.",
  }, "personas, barcas, turistas, dramatismo, monstruos"),
  esc("b1b", [ref("dragon_laguna"), ref("laguna_guatavita")], {
    comun: `En el fondo, desde antes de que hubiera nombre para los cerros, ${DRAGON}. Objeto ancla: el cuerpo enroscado.`,
    camara: {
      a: "PLANO CENITAL sobre la superficie, que sólo devuelve el gris del cielo.",
      b: "la cámara ha ATRAVESADO el agua y ha descendido: PLANO GENERAL subacuático en penumbra verde, con la culebra enroscada en espiral en el fondo y la cabeza levantada al centro.",
    },
    ini: "arriba el agua no deja ver nada de lo que hay debajo.",
    fin: "en la penumbra verde del fondo está la culebra enroscada sobre sí misma, enorme y tranquila, con la cabeza levantada en el centro de la espiral.",
  }, "dragon con alas, patas, cuernos, garras, fuego, ataque, monstruo"),

  // b2 — Los jeques velaban y ofrendaban al verla salir.
  esc("b2a", [ref("choza_jeque"), ref("laguna_guatavita")], {
    comun: "Primera luz. LAS MISMAS chozas de la referencia a la orilla, bajas y abiertas hacia el agua, con esteras y vasijas pequeñas de ofrenda alineadas delante. Aquí se vela esperando a que salga. Objeto ancla: las vasijas alineadas.",
    camara: {
      a: "PLANO MACRO de la fila de vasijas pequeñas de ofrenda sobre la estera, con el agua desenfocada al fondo.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL de la orilla con las dos chozas, los frailejones alrededor y la laguna entera abriéndose delante.",
    },
    ini: "sólo se ven las vasijas alineadas y un trozo de estera.",
    fin: "desde más lejos se ven las dos chozas en el borde de piedra y junco, con la laguna entera delante y la ladera cerrando el fondo.",
  }, "templos, altares de piedra, personas, fuego grande, sacrificios"),
  esc("b2b", [ref("dragon_laguna"), ref("laguna_guatavita"), ref("esmeralda_algodones")], {
    comun: `Luz gris. Cuando la ven salir a la superficie saben que es el momento de ofrendar: le arrojan oro y esmeraldas para que el agua conserve su claridad verde. El oro es mate y en figurillas planas. Objeto ancla: lo que cae al agua.`,
    camara: {
      a: "PLANO MEDIO desde la orilla con el lomo verde asomando un palmo en el centro del agua.",
      b: "la cámara ha SEGUIDO las ofrendas dentro del agua: PLANO MEDIO subacuático con figurillas planas de oro mate y cuentas verdes bajando despacio en la penumbra.",
    },
    ini: "el lomo verde asoma apenas sobre la superficie quieta.",
    fin: "bajo el agua, las figurillas y las cuentas bajan girando despacio hacia el fondo, sin brillar más de lo que brilla el metal mate.",
  }, "cofres, monedas, lingotes, joyeria pulida, tesoro, buzos"),

  // b3 — La mujer del cacique era la más estimada. Parió una niña.
  escp("b3a", [ref("cacica_guatavita"), ref("cercado_bacata"), ref("familias_muiscas")], {
    comun: `Luz de mañana en el cercado de Guatavita. ${CACICA} era la más estimada de la casa, por su sangre y por su hermosura. Objeto ancla: las cenefas de su manta.`,
    camara: {
      a: "PLANO MACRO de las dos cenefas tejidas de su manta, que la distinguen como mujer principal.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del patio con ella en el centro y la casa alrededor trabajando a su alrededor.",
    },
    ini: "sólo se ven las cenefas geométricas tejidas, muy de cerca.",
    fin: "desde lejos se la ve en el centro del patio, con la gente de la casa alrededor, y se entiende quién es por dónde está colocada.",
  }, "trono, corona, joyas, aureola, arrodillarse, sexualizacion"),
  escp("b3b", [ref("cacica_guatavita"), ref("familias_muiscas"), ref("casa_barro_paja")], {
    comun: "Luz cálida de interior. Cuando parió una niña, el cacique no cabía de alegría. La criatura se ve siempre a media distancia y envuelta en algodones. Objeto ancla: la alegría del cacique.",
    camara: {
      a: "PLANO MEDIO LARGO a media distancia del interior, con ella sentada en la estera y el envoltorio en el regazo.",
      b: "la cámara ha RODEADO hasta el otro lado del cuarto: PLANO MEDIO CORTO de la cara del cacique, riéndose, con el grupo detrás.",
    },
    ini: "a media distancia se ve a la madre sentada con el envoltorio y gente alrededor.",
    fin: "de cerca, la cara del cacique está riéndose abiertamente, con dos o tres celebrando detrás de él.",
  }, "parto explicito, sangre, desnudez, bebe en primer plano, aureola"),

  // b4 — Se lo entregó a otro. El cacique lo supo.
  escp("b4a", [ref("cacica_guatavita"), ref("cercado_bacata"), ref("familias_muiscas")], {
    comun: `Luz de tarde. No supo medir su corazón: se lo entregó a otro hombre de la corte. Se cuenta por la distancia y las miradas, NO por una escena de alcoba. Objeto ancla: el espacio entre los dos.`,
    camara: {
      a: "PLANO GENERAL del patio con mucha gente, y dos figuras en extremos opuestos mirándose por encima de los demás.",
      b: "la cámara ha AVANZADO entre la gente hasta quedar entre los dos: PLANO MEDIO CORTO con una cara en cada mitad del cuadro, sin tocarse y sin decir nada.",
    },
    ini: "desde lejos, entre la gente del patio, dos caras están vueltas la una hacia la otra.",
    fin: "de cerca se ve que se sostienen la mirada por encima de todo el patio, quietos, sin acercarse un paso.",
  }, "escena de alcoba, cama, beso, abrazo, desnudez, insinuacion sexual"),
  escp("b4b", [ref("cacica_guatavita"), ref("familias_muiscas"), ref("cercado_bacata")], {
    comun: "Luz dura. El cacique lo supo, y con la verdad llegó la desgracia. Lo que se ve es que alguien se lo dice, no una escena de violencia. Objeto ancla: la cara del cacique.",
    camara: {
      a: "PLANO MEDIO CORTO de un hombre hablándole al oído al cacique.",
      b: "la cámara ha RETROCEDIDO deprisa y ha subido: PLANO GENERAL del patio en el que todos se han quedado quietos y hay un círculo de suelo vacío alrededor de la cacica.",
    },
    ini: "alguien le habla al oído y él escucha sin moverse.",
    fin: "desde arriba, el patio entero se ha quedado quieto y alrededor de ella se ha abierto un círculo de suelo vacío que nadie cruza.",
  }, "golpes, gritos, violencia sobre la mujer, sangre, arrastrar"),

  // b5 — Su falta se cantó en las fiestas, delante de todos.
  escp("b5a", [ref("familias_muiscas"), ref("plaza_fiesta_noche")], {
    comun: "Luz naranja de fogón. Su falta se canta en las fiestas: músicos y corro cantando lo que pasó, delante de ella y de todos. El castigo NO fue privado. Objeto ancla: las bocas que cantan.",
    camara: {
      a: "PLANO MEDIO de tres músicos con flautas y tambor, tocando.",
      b: "la cámara ha hecho un GIRO ALREDEDOR del corro entero: PLANO GENERAL en el que se ve a toda la plaza cantando lo mismo, con las caras iluminadas por el fuego.",
    },
    ini: "tres músicos tocan y cantan en un lado de la plaza.",
    fin: "dando la vuelta se ve que la plaza entera está cantando lo mismo, cuarenta bocas abiertas alrededor del fogón.",
  }, "insultos gritados, violencia, linchamiento, apedreamiento, burla grotesca"),
  escp("b5b", [ref("cacica_guatavita"), ref("plaza_fiesta_noche")], {
    comun: `${CACICA} oyéndolo, delante de todos. La vergüenza le crece por dentro, noche a noche. Objeto ancla: su cara.`,
    camara: {
      a: "PLANO GENERAL de la plaza con ella sentada en un borde, pequeña, con la fiesta alrededor.",
      b: "la cámara ha AVANZADO entre el corro hasta ella: PRIMER PLANO de su cara oyendo el canto, quieta, sin llorar y sin bajar la cabeza.",
    },
    ini: "está sentada en el borde de la plaza mientras cantan.",
    fin: "de cerca se le ve la cara aguantando el canto, con la mandíbula quieta y los ojos abiertos: no llora y no se va.",
  }, "llanto teatral, gritos, desmayo, violencia, humillacion fisica"),

  // b6 — Salió con la niña y entró en la laguna.
  escp("b6a", [ref("cacica_guatavita"), ref("cercado_bacata"), ref("altiplano_noche")], {
    comun: `Madrugada. ${CACICA} saliendo del cercado sin que la sientan, con la niña recién nacida en brazos, envuelta en algodones y vista a media distancia. Objeto ancla: el vano de la empalizada.`,
    camara: {
      a: "PLANO MEDIO del vano de la empalizada, vacío, con el patio dormido detrás.",
      b: "la cámara ha girado y RETROCEDIDO por el camino: PLANO GENERAL a media distancia con ella ya fuera, de espaldas, andando hacia el cerro.",
    },
    ini: "el vano está vacío y en el patio no se mueve nadie.",
    fin: "a media distancia y de espaldas, ella va por el camino hacia el cerro con el envoltorio contra el pecho, sin que nadie la siga.",
  }, "huida dramatica, persecucion, gritos, llanto, bebe en primer plano"),
  escp("b6b", [ref("cacica_guatavita"), ref("laguna_guatavita")], {
    comun: `Primera claridad sobre la orilla. ${CACICA} llegando al agua y entrando. NO lucha: la laguna la recibe como recibe lo suyo. Se cuenta a media distancia y de espaldas. Objeto ancla: la superficie que se cierra.`,
    camara: {
      a: "PLANO GENERAL desde la orilla opuesta, a media distancia, con ella de espaldas entrando en el agua hasta las rodillas.",
      b: "la cámara se ha ELEVADO en vertical hasta un PLANO CENITAL sobre el mismo punto: sólo agua y los círculos cerrándose.",
    },
    ini: "a media distancia y de espaldas, el agua le llega a las rodillas y sigue andando.",
    fin: "desde arriba ya no hay nadie en cuadro: sólo la superficie con unos círculos que se cierran y se alisan, sin espuma y sin lucha.",
  }, "ahogamiento, forcejeo, burbujas de agonia, cuerpo flotando, grito, cadaver"),

  // b7 — El agua la recibió. El cacique mandó al mayor de los jeques.
  esc("b7a", [ref("dragon_laguna"), ref("cacica_guatavita"), ref("laguna_guatavita")], {
    comun: `El fondo: un cercado más hermoso que el de Guatavita, con ${DRAGON} y ${CACICA} viva. NO es una tumba. Objeto ancla: el cercado del fondo.`,
    camara: {
      a: "PLANO MEDIO subacuático en penumbra verde, con la silueta de ella descendiendo despacio, entera y serena.",
      b: "la cámara ha DESCENDIDO con ella hasta el fondo y ha retrocedido: PLANO GENERAL subacuático del cercado del fondo, con sus paredes, sus esteras y la culebra enroscada a un lado.",
    },
    ini: "ella baja despacio en el agua verde, con la manta flotando y los ojos abiertos.",
    fin: "abajo hay un cercado entero —paredes, esteras, vasijas— más hermoso que el de arriba, con ella de pie en él y la culebra enroscada a un lado.",
  }, "ahogamiento, cadaver, esqueletos, ruinas hundidas, monstruo atacando"),
  escp("b7b", [ref("choza_jeque"), ref("laguna_guatavita"), ref("familias_muiscas")], {
    comun: "Noche en la orilla. El mayor de los jeques encendiendo fuego en la lengua del agua y poniendo piedras hasta volverlas brasas antes de zambullirse. Objeto ancla: las piedras al rojo.",
    camara: {
      a: "PLANO MACRO de las piedras puestas en el fuego, empezando a tomar color.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL de la orilla de noche con la hoguera, las piedras al rojo y el jeque de pie en el borde del agua.",
    },
    ini: "las piedras están en el fuego y apenas empiezan a enrojecer.",
    fin: "desde lejos se ve la escena entera: la hoguera baja en la lengua de tierra, las piedras al rojo vivo a un lado y él de pie en el filo del agua negra.",
  }, "sacrificios, sangre, trance, demonios, aureola"),

  // b8 — «La cacica está viva, abajo». (CITA)
  escp("b8a", [ref("choza_jeque"), ref("laguna_guatavita")], {
    comun: "Noche. El jeque zambulléndose y volviendo a salir. Objeto ancla: la superficie por donde entra y sale.",
    camara: {
      a: "PLANO CENITAL sobre el punto donde acaba de entrar, con los círculos abriéndose.",
      b: "la cámara ha DESCENDIDO hasta el agua y ha girado hacia la orilla: PLANO MEDIO a ras de superficie con él saliendo y agarrándose a la piedra del borde.",
    },
    ini: "desde arriba sólo hay círculos abriéndose donde entró.",
    fin: "a ras del agua se le ve salir y agarrarse al borde de piedra, respirando fuerte, con la hoguera desenfocada detrás.",
  }, "ahogamiento, panico, sangre, monstruo persiguiendolo"),
  escp("b8b", [ref("choza_jeque"), ref("familias_muiscas"), ref("cacica_guatavita")], {
    comun: "Penumbra de la orilla con la hoguera. El jeque diciendo lo que vio: la cacica está viva, abajo; vive en un cercado más hermoso, tiene al dragón dormido en las faldas y NO quiere volver. Objeto ancla: su cara hablando.",
    camara: {
      a: "PLANO MEDIO CORTO de su cara junto al fuego, ya en la orilla y con mantas secas, hablando.",
      b: "la cámara ha RETROCEDIDO y ha girado hacia los que escuchan: PLANO MEDIO del cacique y los suyos oyéndolo, con el jeque desenfocado en el borde del cuadro.",
    },
    ini: "él habla junto al fuego, ya seco y envuelto en una manta.",
    fin: "al otro lado del fuego, el cacique y los suyos escuchan sin moverse: nadie discute lo que acaba de decir.",
  }, "aureola, trance, vision dibujada, resplandor, llanto teatral"),

  // b9 — Quiso recuperar a la niña. A la hija del agua no se la saca.
  esc("b9a", [ref("dragon_laguna"), ref("cacica_guatavita")], {
    comun: `En el fondo: ${DRAGON} con la cabeza dormida en el regazo de ${CACICA}. La ACOMPAÑA, no la retiene. Objeto ancla: la cabeza en el regazo.`,
    camara: {
      a: "PLANO MACRO subacuático de la cabeza roma de la culebra apoyada y quieta sobre la manta de ella.",
      b: "la cámara ha RETROCEDIDO en el agua: PLANO GENERAL subacuático del cercado del fondo, con ella sentada, la culebra enroscada alrededor sin apretarla y la niña a media distancia.",
    },
    ini: "la cabeza de la culebra descansa en el regazo, con los ojos cerrados.",
    fin: "desde lejos se ve la escena entera del fondo: ella sentada, la culebra enroscada alrededor sin tocarla apenas, y el cercado entero alrededor de las dos.",
  }, "monstruo apresando, ataque, forcejeo, cadena, prision, sangre"),
  escp("b9b", [ref("familias_muiscas"), ref("laguna_guatavita"), ref("choza_jeque")], {
    comun: "Luz gris de día. El cacique quiso recuperar a la hija del agua, y no se pudo: a la hija del agua no se la saca a la tierra. Se cuenta a media distancia y por la orilla vacía, sin nadie dentro del agua. Objeto ancla: la orilla.",
    camara: {
      a: "PLANO MEDIO de manos hundiendo una red de fibra en el agua desde la orilla.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL a media distancia de la orilla, un plano sin personas, con las redes y las cuerdas tendidas sin nada y el agua quieta delante.",
    },
    ini: "unas manos meten la red en el agua desde la piedra del borde.",
    fin: "desde lejos, las redes y las cuerdas están tendidas por toda la orilla, vacías, y el agua sigue igual de quieta que antes.",
  }, "monstruo atacando, ahogados, sangre, violencia, gritos"),

  // b10 — Cada pueblo abrió camino y trajo oro. A veces se aparecía.
  escp("b10a", [ref("familias_muiscas"), ref("laguna_guatavita"), ref("sendero_territorio")], {
    comun: "Luz de mañana. Desde aquel día la laguna se llenó de ofrendas: cada pueblo abrió su camino hasta la orilla y trajo oro, esmeraldas y comida para que la señora del fondo apartara las plagas. Objeto ancla: los caminos que llegan.",
    camara: {
      a: "PLANO MEDIO de un grupo llegando por un sendero con cestos y vasijas.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado del cerro con cuatro senderos distintos abiertos en la ladera, todos bajando hasta la misma orilla.",
    },
    ini: "un grupo baja por un sendero con las ofrendas.",
    fin: "desde arriba se ven cuatro caminos abiertos en la ladera desde cuatro direcciones, todos terminando en el mismo borde del agua.",
  }, "templos, altares monumentales, sacrificios humanos, sangre, conquistadores"),
  esc("b10b", [ref("cacica_guatavita"), ref("laguna_guatavita"), ref("guatavita_llamas")], {
    comun: `A veces se aparecía sobre el agua con una MANTA ROJA CEÑIDA, anunciando secas y hambres antes de que llegaran. El rojo es el único color saturado del video. Objeto ancla: la figura sobre el agua.`,
    camara: {
      a: "PLANO GENERAL de la laguna de noche, vacía, con las llamas bajas azul verdosas moviéndose a ras del agua.",
      b: "la cámara ha AVANZADO sobre la superficie hasta media distancia: PLANO MEDIO LARGO con la figura de ella de pie sobre el agua, con la manta roja ceñida, sin tocar la superficie y sin pisarla.",
    },
    ini: "sobre el agua sólo hay tres lenguas de llama baja que no queman nada.",
    fin: "a media distancia está ella de pie sobre el agua con la manta roja ceñida, quieta, con las llamas bajas moviéndose a sus pies.",
  }, "fantasma translucido, sabana blanca, terror, calaveras, sirena, cola de pez"),

  // b11 — Se untó de resina y se cubrió de oro. Se lavó donde ella lo viera.
  escp("b11a", [ref("heredero_dorado"), ref("balsa_juncos"), ref("laguna_guatavita")], {
    comun: `Luz de mañana. ${DORADO} llegando al centro del agua en LA MISMA balsa de juncos de la referencia y ofreciendo oro y esmeraldas. NO es la ceremonia entera —eso es otro video—: aquí es un rito para que ELLA lo vea, y por eso se mira desde el agua. Objeto ancla: la balsa en el centro.`,
    camara: {
      a: "PLANO CENITAL desde muy arriba de la balsa pequeña avanzando sobre el círculo de agua.",
      b: "la cámara ha DESCENDIDO en picado hasta rozar la superficie junto a la balsa: PLANO MEDIO a ras de agua con las figurillas planas de oro mate cayendo desde el borde.",
    },
    ini: "desde arriba la balsa es un punto en mitad del círculo de agua.",
    fin: "a ras de superficie se ven las figurillas de oro mate y las cuentas verdes entrando en el agua una tras otra desde el borde de la balsa.",
  }, "conquistadores, armaduras, carabelas, cofres, monedas, oro pulido"),
  esc("b11b", [ref("heredero_dorado"), ref("laguna_guatavita"), ref("cacica_guatavita")], {
    comun: `El lavado: el oro en polvo desprendiéndose del cuerpo y bajando por el agua. El sol lo enciende sobre la superficie. Se muestra DESDE ABAJO, desde donde ella podría estar mirando. Objeto ancla: el polvo de oro cayendo.`,
    camara: {
      a: "PLANO MEDIO a ras de superficie con el cuerpo dorado entrando en el agua desde la balsa.",
      b: "la cámara se ha SUMERGIDO y ha descendido: PLANO GENERAL subacuático desde el fondo, mirando hacia arriba, con el polvo de oro bajando en una nube y la luz del sol atravesando la superficie.",
    },
    ini: "arriba, el cuerpo cubierto de oro entra en el agua desde la balsa.",
    fin: "visto desde el fondo, el polvo de oro baja en una nube lenta contra la luz, y desde aquí abajo es una lluvia dorada que alguien podría estar mirando.",
  }, "conquistadores, carabelas, cofres, tesoro, buzos, monedas"),

  // b12 — Nombraron la tierra por el brillo. Abajo ella cría a su hija.
  esc("b12a", [ref("laguna_guatavita"), ref("heredero_dorado")], {
    comun: "Luz alta. Hombres llegados de otros mares oyeron hablar de aquel cuerpo dorado y llamaron a la tierra entera con ese nombre. Lo que oyeron fue SÓLO EL BRILLO: la imagen se queda en el reflejo, sin mostrar a nadie de fuera. Objeto ancla: el reflejo en la superficie.",
    camara: {
      a: "PLANO MACRO del reflejo del sol sobre el agua, un solo punto encendido y deslumbrante.",
      b: "la cámara se ha ALEJADO muchísimo hacia arriba: GRAN PLANO GENERAL del cerro y el valle, donde ese punto de luz en la laguna es lo único que se ve a esa distancia.",
    },
    ini: "el reflejo llena el cuadro y no deja ver nada más.",
    fin: "desde muy lejos, en todo el paisaje sólo se distingue un punto de luz sobre la laguna: eso fue lo que se oyó contar, y nada más.",
  }, "conquistadores, armaduras, cascos, carabelas, mapas, banderas, texto"),
  esc("b12b", [ref("cacica_guatavita"), ref("dragon_laguna"), ref("laguna_guatavita")], {
    comun: `Abajo, sin ruido: ${CACICA} sigue criando a su hija, ${DRAGON} duerme con la cabeza en su regazo y las ofrendas caen sobre ellas como una lluvia que nunca se acaba. Objeto ancla: las ofrendas que bajan.`,
    camara: {
      a: "PLANO MACRO subacuático de dos figurillas de oro mate bajando despacio en la penumbra verde.",
      b: "la cámara ha DESCENDIDO siguiéndolas hasta el fondo y ha retrocedido: GRAN PLANO GENERAL subacuático final del cercado del fondo, con ella sentada, la niña a su lado a media distancia, la culebra dormida y las ofrendas cayendo sin parar desde arriba.",
    },
    ini: "dos figurillas bajan girando en el agua verde, muy cerca del objetivo.",
    fin: "desde el fondo se ve el cercado entero con las tres, y por encima de ellas siguen bajando ofrendas sin parar, como una lluvia lenta que no se acaba.",
  }, "cadaveres, esqueletos, ruinas, monstruo atacando, buzos, tesoro, texto"),
]);
