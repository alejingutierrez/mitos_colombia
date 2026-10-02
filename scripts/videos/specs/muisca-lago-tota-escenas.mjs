// Keyframes de El origen del lago de Tota — 10 bloques × 2 escenas × 2 cuadros
// = 40 imágenes ≈ 100 s.
// Guion: guion-el-origen-del-lago-tota-v2.json (N=10)
// Acta:  acta-el-origen-del-lago-tota.json (20 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _muisca-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · Esto NO es una hazaña de matar al monstruo. Monetá lo dice al final:
//   nadie puede llamar vencida al agua ni conquistada a la montaña. El tono
//   triunfal está PROHIBIDO por la fuente: nada de poses de victoria, brazos
//   en alto ni aclamaciones.
// · La esmeralda NO es un conjuro: no pidió que la montaña obedeciera, la
//   DEJÓ CAER. El agua sale porque el fondo ya se había abierto.
// · Siramena NO es valiente por naturaleza: también quiso retroceder. Lo que
//   la sostiene es el borde frío del oro en la palma y una instrucción
//   concreta —mirar dónde el cuerpo se dobla, no los ojos—. Es técnica, no
//   coraje, y la imagen tiene que enseñar exactamente eso.
// · Busiraco NO queda muerto del todo: el lago guarda abajo su forma oscura.
//   Es una CULEBRA de papel, sin alas, sin patas y sin cuernos.
// · El disco NO se recupera. El precio queda pagado y no hay recompensa.
//
// GUION DE LUZ: polvo pálido de tarde en la hondonada → brasa entre las
// escamas → noche de la roca alta → primera luz sobre el oro → humo y polvo
// del amanecer → destello breve → sonido profundo del fondo → hilos de agua →
// nubes bajando sobre el agua nueva → línea dorada sobre Tota.

import { DIRECCION, AVOID_BASE, ref, esc, escp, armar } from "./_muisca-comun.mjs";

export const SPEC_NAME = "muisca-lago-tota-escenas";
export const OUT_DIR = "muiscas/videos/el-origen-del-lago-tota/keyframes";
export { DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; dragon con alas, patas, garras o cuernos; hidra, monstruo de fantasia occidental, criatura de videojuego; caballero, lanza, escudo, san jorge; pose de victoria, brazos en alto, aclamacion, triunfo; conjuro, runas, circulos magicos, particulas brillantes; volcan en erupcion, lava corriendo, explosion; sangre, vísceras, cabeza cortada, trofeo";
export const PALETTE =
  "pardo pálido de barro reseco y polvo, negro de escama, rojo apagado de brasa entre las grietas, gris de piedra, crema de algodon crudo, azul mineral de agua nueva; el oro solo mate; sin saturacion ni neones";

const MONETA =
  "LA MISMA Monetá de la referencia (mujer de unos cincuenta años, rostro sereno y muy leído, pelo negro con canas recogido en la nuca, manta de algodón crudo anudada al hombro con cenefa tejida sobria en verde oscuro, descalza)";
const SIRAMENA =
  "LA MISMA Siramena de la referencia (muchacha de unos dieciocho años, rostro tenso y decidido, pelo negro liso recogido con una cinta angosta, manta corta de algodón crudo ceñida a la cintura, descalza)";
const BUSIRACO =
  "EL MISMO Busiraco de la referencia (culebra enorme de papel negro, de cuerpo muy grueso, con las escamas recortadas una a una y, ENTRE ellas, líneas finas de rojo apagado de brasa que se asoman como grietas de rescoldo; cabeza roma y ojos pequeños y encendidos; SIN alas, SIN patas y SIN cuernos)";

export const ITEMS = armar([
  // b1 — Una hondonada seca. Entre las grietas respiraba Busiraco.
  esc("b1a", [ref("hondonada_seca")], {
    comun: "Luz pálida de tarde y viento. LA MISMA hondonada de la referencia: cuenca honda y completamente seca entre montañas, con el fondo agrietado en placas de barro reseco y ni una brizna verde. Nadie cruza por aquí al caer la tarde. Objeto ancla: las grietas del fondo.",
    camara: {
      a: "PLANO MACRO sobre una placa de barro reseco, tan cerca que se ven los bordes levantados y el polvo encima.",
      b: "la cámara se ha ELEVADO en vertical muchísimo hasta un GRAN PLANO GENERAL en picado de la cuenca entera, con las montañas alrededor en cuatro capas.",
    },
    ini: "el barro está partido y el polvo quieto encima.",
    fin: "desde arriba se ve la hondonada completa, seca de borde a borde, con remolinos de polvo cruzándola y ni un solo verde en ninguna parte.",
  }, "agua, verde, personas, animales, lava, fuego visible"),
  esc("b1b", [ref("busiraco_serpiente"), ref("hondonada_seca")], {
    comun: `Penumbra dentro de una grieta ancha del fondo. ${BUSIRACO} respirando ahí abajo. Objeto ancla: las líneas de brasa entre las escamas.`,
    camara: {
      a: "PLANO MACRO en el borde de la grieta: sólo oscuridad y, muy al fondo, dos líneas finas de rojo apagado.",
      b: "la cámara ha DESCENDIDO por la grieta hasta dentro y ha girado: PLANO MEDIO del lomo enroscado, con las escamas negras llenando el cuadro y las grietas de rescoldo entre ellas.",
    },
    ini: "desde arriba sólo se ven dos rayas rojas perdidas en la negrura.",
    fin: "dentro de la grieta se ve el lomo enorme y negro enroscado, con las líneas de brasa recorriéndolo entre escama y escama al ritmo de la respiración.",
  }, "dragon, alas, patas, cuernos, garras, lava, fuego abierto, ojos gigantes de monstruo"),

  // b2 — Guardaba el fuego bajo sus escamas. Monetá conocía ese miedo.
  esc("b2a", [ref("busiraco_serpiente"), ref("hondonada_seca")], {
    comun: `Luz de tarde con el suelo caliente. Cuando ${BUSIRACO} se mueve, la tierra se calienta. Se muestra por sus efectos, no por un plano de monstruo. Objeto ancla: el suelo agrietado.`,
    camara: {
      a: "PLANO MACRO del suelo de la hondonada, con el aire temblando de calor sobre las placas de barro.",
      b: "la cámara ha RETROCEDIDO y ha subido hasta un PLANO GENERAL de la ladera: se ve una franja entera del fondo levantándose y las piedras rodando por la pendiente.",
    },
    ini: "el aire tiembla sobre el barro y una grieta se ensancha un dedo.",
    fin: "desde lejos se ve que una franja larga del fondo se ha levantado y ha vuelto a caer, con una lluvia de piedras bajando por la ladera y polvo subiendo.",
  }, "erupcion, lava, fuego, explosion, personas"),
  escp("b2b", [ref("moneta_guia"), ref("familias_muiscas"), ref("hondonada_seca")], {
    comun: `Luz de tarde en el borde alto de la cuenca. ${MONETA} y gente de LAS MISMAS familias de la referencia cargando cántaros vacíos, cada vez más lejos a buscar agua. Ella conoce ese miedo porque lo ha visto trabajar. Objeto ancla: los cántaros vacíos.`,
    camara: {
      a: "PLANO DETALLE de un cántaro de barro vacío colgando de una espalda, con el polvo del camino detrás.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL de la fila entera rodeando el borde de la hondonada, dándole toda la vuelta en vez de cruzarla.",
    },
    ini: "un cántaro vacío se balancea al ritmo del paso.",
    fin: "desde lejos se ve la fila dando un rodeo largo por el borde de la cuenca, sin bajar a ella: van rodeando el miedo.",
  }, "panico, llanto, cadaveres, dramatismo, aureolas"),

  // b3 — Subió a una roca con un disco y una esmeralda.
  escp("b3a", [ref("moneta_guia"), ref("altiplano_noche"), ref("hondonada_seca")], {
    comun: `Noche sin luna sobre la cuenca. ${MONETA} en lo alto de una roca desde la que se abarca la hondonada entera. Objeto ancla: la roca alta.`,
    camara: {
      a: "PLANO MEDIO por detrás de ella mientras sube el último tramo de la roca.",
      b: "la cámara ha SUBIDO por delante y ha retrocedido hacia el vacío: GRAN PLANO GENERAL nocturno con ella pequeña en lo alto de la roca y la cuenca negra abriéndose debajo.",
    },
    ini: "sube de espaldas por la roca y no se ve qué hay al otro lado.",
    fin: "desde el aire se ve la cuenca entera bajo la noche y a ella arriba, sola en la roca, con toda la hondonada delante.",
  }, "aureola, resplandor, rayos, ceremonia, fuego, multitud"),
  esc("b3b", [ref("disco_oro"), ref("esmeralda_algodones")], {
    comun: "Luz muy baja de noche. LO QUE LLEVA: EL MISMO disco de oro martillado MATE de la referencia y LA MISMA esmeralda verde de la referencia, pequeña como una semilla. Ni brillan ni flotan: son dos objetos pesados y sobrios. Objeto ancla: los dos objetos.",
    camara: {
      a: "PLANO MACRO del canto del disco de oro mate sobre la piedra, con las marcas de martilleo visibles.",
      b: "la cámara ha RETROCEDIDO y ha basculado a CENITAL: PLANO DETALLE con el disco y la esmeralda juntos sobre la roca y unas manos abriéndose a los lados.",
    },
    ini: "el disco está apoyado de canto y no se ve nada más.",
    fin: "desde arriba se ven los dos objetos juntos sobre la piedra —el disco grande y mate y la esmeralda del tamaño de una semilla— con las manos alrededor sin tocarlos.",
  }, "joyeria pulida, brillos, resplandor magico, runas, simbolos grabados"),

  // b4 — Siramena recibió el disco. Mirar donde el cuerpo se dobla.
  escp("b4a", [ref("siramena_joven"), ref("moneta_guia"), ref("disco_oro")], {
    comun: `Primera luz gris. ${MONETA} entregando el disco a ${SIRAMENA}. Pesa más de lo que parece, y eso se ve en el cuerpo. Objeto ancla: el disco entre las dos.`,
    camara: {
      a: "PLANO MEDIO de las dos de perfil, con el disco pasando de unas manos a otras en el centro del cuadro.",
      b: "la cámara ha BAJADO y se ha acercado a las manos de la muchacha: PLANO MACRO del disco apoyado contra su antebrazo, con los dedos apretados en el borde y el brazo cediendo un poco.",
    },
    ini: "las cuatro manos sostienen el disco a la vez.",
    fin: "las manos de Monetá ya no están y el peso entero ha caído sobre las de ella: los dedos se le han blanqueado en el borde y el hombro se le ha bajado de ese lado.",
  }, "ceremonia, investidura, aureola, arrodillarse, multitud"),
  escp("b4b", [ref("moneta_guia"), ref("siramena_joven"), ref("hondonada_seca")], {
    comun: `Primera luz. La instrucción concreta: no mirar los ojos de la serpiente sino el punto exacto donde el cuerpo se dobla sobre la tierra. Esto es técnica, no valor. Objeto ancla: el punto del fondo que Monetá señala.`,
    camara: {
      a: "PLANO MEDIO CORTO de las dos caras juntas, Monetá hablándole al oído.",
      b: "la cámara ha girado y AVANZADO en la dirección que señala el brazo de Monetá: PLANO GENERAL del fondo de la cuenca, con el dedo de ella entrando por el borde del cuadro y señalando un punto concreto del barro.",
    },
    ini: "Monetá le habla de cerca y empieza a levantar el brazo.",
    fin: "el cuadro se ha ido a lo que señala: un punto concreto del fondo agrietado, señalado por su dedo, y no la cabeza ni los ojos de nada.",
  }, "aureola, magia, resplandor, conjuro, circulos, simbolos"),

  // b5 — Busiraco emergió. Siramena sintió el borde frío del oro.
  esc("b5a", [ref("busiraco_serpiente"), ref("hondonada_seca")], {
    comun: `Amanecer con humo y polvo. ${BUSIRACO} emergiendo: su lomo ocupa la hondonada entera y la cola golpea una ladera soltando una lluvia de piedras. El prodigio se ve grande, pero es una culebra. Objeto ancla: el lomo.`,
    camara: {
      a: "PLANO MEDIO a ras del fondo, con el polvo levantándose y una porción del lomo negro saliendo del suelo muy cerca del objetivo.",
      b: "la cámara ha RETROCEDIDO y ha subido muchísimo hasta un GRAN PLANO GENERAL en picado: desde arriba se ve el cuerpo entero ocupando el fondo de la cuenca de lado a lado.",
    },
    ini: "sólo asoma un tramo de lomo negro entre el polvo, muy cerca.",
    fin: "desde arriba se ve la culebra entera fuera de la tierra, tendida a lo largo de toda la hondonada, con la cola golpeando una ladera y las piedras bajando en lluvia.",
  }, "dragon, alas, patas, cuernos, garras, fuego por la boca, lava"),
  escp("b5b", [ref("siramena_joven"), ref("disco_oro"), ref("familias_muiscas")], {
    comun: `Polvo del amanecer. La gente retrocediendo, y ${SIRAMENA} que también quiso hacerlo. Lo que la deja quieta no es el coraje: es el borde frío del oro en la palma. Objeto ancla: su mano sobre el canto del disco.`,
    camara: {
      a: "PLANO GENERAL del grupo echándose atrás entre el polvo, con ella dentro del grupo.",
      b: "la cámara ha AVANZADO contra el movimiento de todos hasta su mano: PLANO MACRO de la palma apretada contra el canto del disco, con el resto desenfocado.",
    },
    ini: "todos retroceden a la vez y ella empieza a retroceder con ellos.",
    fin: "de cerca, la palma está apretada contra el borde frío del metal y no se ha movido: el grupo ya se fue hacia atrás y ella se quedó donde estaba.",
  }, "heroismo, pose valiente, musica epica dibujada, aureola, grito de guerra"),

  // b6 — Alzó la cabeza y Siramena lanzó el disco.
  escp("b6a", [ref("siramena_joven"), ref("busiraco_serpiente"), ref("disco_oro")], {
    comun: `Luz cruda entre el polvo. La serpiente alzando la cabeza y ${SIRAMENA} tirando el disco. Ella mira el punto donde el cuerpo se dobla, NO los ojos. Objeto ancla: el disco.`,
    camara: {
      a: "PLANO MEDIO lateral de ella con el brazo atrás, a punto de lanzar, y el cuerpo de la culebra desenfocado al fondo.",
      b: "la cámara ha ACOMPAÑADO al disco en el aire: PLANO MACRO del disco girando en pleno vuelo, con un destello breve en el canto y el lomo negro llenando el fondo.",
    },
    ini: "el brazo va atrás y el disco todavía está en su mano.",
    fin: "el disco cruza el aire girando y está a un palmo del lomo, con un destello breve en el borde martillado.",
  }, "pose heroica, camara lenta epica, rayos, explosion, aureola, sangre"),
  esc("b6b", [ref("busiraco_serpiente"), ref("hondonada_seca")], {
    comun: `${BUSIRACO} retorciéndose tras el golpe. NO se muestra herida abierta ni sangre: se muestra el movimiento del cuerpo. Objeto ancla: el tramo de lomo golpeado.`,
    camara: {
      a: "PLANO MACRO del punto del lomo donde acaba de pegar el disco, con las escamas desordenadas.",
      b: "la cámara ha RETROCEDIDO y ha subido hasta un PLANO GENERAL de la cuenca: el cuerpo entero se retuerce sobre el fondo levantando polvo por todas partes.",
    },
    ini: "las escamas del punto del golpe se han desordenado y las líneas de brasa se ven más anchas ahí.",
    fin: "desde lejos, el cuerpo entero se ha arqueado y retorcido a lo largo de toda la hondonada, con el polvo subiendo en una nube por donde pasa.",
  }, "sangre, herida abierta, vísceras, agonia, fuego, lava, explosion"),

  // b7 — El fondo se abrió. Monetá dejó caer la esmeralda.
  esc("b7a", [ref("hondonada_seca"), ref("piedras_funza")], {
    comun: "Polvo y sonido profundo. El fondo de la cuenca abriéndose, como si una puerta de piedra acabara de ceder. Objeto ancla: la grieta que se abre.",
    camara: {
      a: "PLANO MACRO de una grieta del barro que empieza a separarse, con el polvo cayendo dentro.",
      b: "la cámara se ha ELEVADO en vertical hasta un PICADO ALTO: desde arriba se ve la grieta recorriendo el fondo entero de la cuenca de lado a lado.",
    },
    ini: "la grieta se ensancha un palmo y el barro cae dentro.",
    fin: "desde arriba, una sola grieta oscura y ancha atraviesa el fondo de la hondonada de una ladera a la otra.",
  }, "lava, fuego, explosion, terremoto catastrofico, personas cayendo"),
  escp("b7b", [ref("moneta_guia"), ref("esmeralda_algodones"), ref("hondonada_seca")], {
    comun: `Luz de mañana con polvo. ${MONETA} dejando caer la esmeralda en la grieta. NO es un conjuro y NO pide obediencia: abre la mano y la suelta. Objeto ancla: la esmeralda.`,
    camara: {
      a: "PLANO MEDIO de ella de perfil con el brazo extendido sobre la grieta y la mano cerrada.",
      b: "la cámara ha CAÍDO con la piedra dentro de la grieta: PLANO MACRO en la oscuridad, con la esmeralda pasando a un palmo del objetivo y las paredes de roca a los lados.",
    },
    ini: "tiene la mano cerrada sobre la grieta y todavía no ha soltado nada.",
    fin: "la piedra cae por la grieta y pasa junto al objetivo entre las paredes de roca, sin brillar más de lo que brilla una piedra.",
  }, "conjuro, gestos magicos, runas, resplandor, rayos, particulas, aureola"),

  // b8 — Un hilo de agua, después otro. El agua apagó las escamas.
  esc("b8a", [ref("hondonada_seca"), ref("recodo_funza")], {
    comun: "Luz que aclara. Los primeros hilos de agua saliendo de las paredes de la cuenca y encontrándose en el centro. Objeto ancla: el punto donde las corrientes se juntan.",
    camara: {
      a: "PLANO MACRO de un hilo de agua saliendo de una grieta de la pared y bajando por el barro seco.",
      b: "la cámara ha SEGUIDO ese hilo hasta el fondo y ha subido: PLANO GENERAL en picado del centro de la cuenca, con cinco o seis corrientes llegando de distintos lados y juntándose en un charco.",
    },
    ini: "un solo hilo de agua baja por la pared y se pierde en el polvo.",
    fin: "desde arriba se ve que han salido corrientes por toda la cuenca y que se han encontrado en el centro, formando ya un charco ancho.",
  }, "cascada gloriosa, espuma, arcoiris, personas, celebracion"),
  esc("b8b", [ref("busiraco_serpiente")], {
    comun: `El agua subiendo alrededor del cuerpo de ${BUSIRACO}. El fuego siseando bajo ella: se apaga una escama, luego otra, luego todas. Objeto ancla: las líneas de brasa.`,
    camara: {
      a: "PLANO MACRO de una sola escama con su línea de rescoldo, con el agua llegándole al borde.",
      b: "la cámara ha RETROCEDIDO a lo largo del cuerpo y ha subido: PLANO GENERAL del lomo entero dentro del agua, con vapor levantándose de toda su longitud.",
    },
    ini: "una línea de brasa está encendida y el agua acaba de tocarla, siseando.",
    fin: "a lo largo del cuerpo entero ya no queda ninguna línea encendida: el lomo negro está bajo el agua y sobre él se levanta una franja de vapor de punta a punta.",
  }, "agonia, sangre, vísceras, explosion, fuego abierto, personas celebrando"),

  // b9 — La hondonada se llenó. Abajo quedó la forma oscura.
  esc("b9a", [ref("orilla_tota_niebla"), ref("hondonada_seca")], {
    comun: "Todo un día de luz cambiando. La hondonada llenándose y las nubes descendiendo hasta tocar la superficie recién nacida. Objeto ancla: la línea del agua subiendo por la ladera.",
    camara: {
      a: "PLANO MEDIO en la ladera, con la línea del agua a media altura y el barro seco por encima.",
      b: "la cámara ha SUBIDO con el agua hasta el filo de la cuenca y ha basculado: GRAN PLANO GENERAL del lago ya formado, con las nubes bajas apoyadas en la superficie y las montañas alrededor.",
    },
    ini: "el agua está a media ladera y por encima queda barro seco.",
    fin: "desde el filo se ve la hondonada llena de borde a borde: un lago entero con las nubes bajando a tocarlo, donde por la mañana había polvo.",
  }, "personas, barcas, celebracion, banderas, arcoiris"),
  esc("b9b", [ref("busiraco_serpiente"), ref("orilla_tota_niebla")], {
    comun: `Anochecer sobre el agua nueva. Abajo, muy hondo, la forma oscura de ${BUSIRACO}: no queda muerto del todo, queda guardado. Objeto ancla: la sombra del fondo.`,
    camara: {
      a: "PLANO CENITAL sobre la superficie lisa del lago, que sostiene el color del cielo.",
      b: "la cámara ha ATRAVESADO la superficie y ha descendido dentro del agua: PLANO GENERAL subacuático en penumbra verde, con la forma enroscada y oscura ocupando el fondo.",
    },
    ini: "la superficie está lisa y sólo devuelve el color del cielo.",
    fin: "debajo del agua, en la penumbra, se ve la forma enroscada y negra tendida en el fondo, entera y quieta, sin ninguna línea de brasa encendida.",
  }, "esqueleto, calavera, sangre, monstruo atacando, buzos, personas"),

  // b10 — «También puede retirarse». El disco nunca volvió a aparecer. (CITA)
  escp("b10a", [ref("moneta_guia"), ref("familias_muiscas"), ref("orilla_tota_niebla")], {
    comun: `Luz última en la orilla nueva. ${MONETA} pidiendo que nadie llame vencida al agua ni conquistada a la montaña. NO hay celebración: la gente está callada. Objeto ancla: su cara.`,
    camara: {
      a: "PLANO GENERAL del grupo en la orilla, todos de espaldas mirando el agua nueva, con ella entre ellos.",
      b: "la cámara ha RODEADO el grupo hasta ponerse delante y ha avanzado: PRIMER PLANO de la cara de Monetá hablando, con las siluetas de los demás desenfocadas detrás.",
    },
    ini: "todos miran el agua de espaldas y ella empieza a hablar desde el grupo.",
    fin: "de cerca se la ve terminando la advertencia, con la cara seria y sin ningún gesto de victoria; detrás, nadie levanta los brazos ni celebra.",
  }, "aclamacion, brazos en alto, fiesta, aureola, adoracion, arrodillarse"),
  esc("b10b", [ref("orilla_tota_niebla"), ref("busiraco_serpiente"), ref("disco_oro")], {
    comun: "Luz rasante sobre Tota. A veces una línea dorada cruza el agua, y quien la mira no sabe si brilla el metal perdido o si la serpiente acaba de abrir un ojo. La imagen NO resuelve cuál de las dos cosas es. Objeto ancla: la línea dorada sobre el agua.",
    camara: {
      a: "PLANO DETALLE de la superficie del lago con una línea de luz dorada cruzándola.",
      b: "la cámara ha RETROCEDIDO y ha subido hasta un GRAN PLANO GENERAL final del lago entero con las montañas y la niebla, donde esa línea dorada sigue ahí, pequeña, sin que se sepa de dónde sale.",
    },
    ini: "la línea dorada cruza el agua muy cerca del objetivo y podría ser cualquier cosa.",
    fin: "desde lejos el lago entero está en calma y la línea dorada sigue en su sitio, demasiado pequeña para saber si es metal en el fondo o un ojo que se abrió.",
  }, "ojo de monstruo evidente, disco visible en el fondo, personas, barcas, texto"),
]);
