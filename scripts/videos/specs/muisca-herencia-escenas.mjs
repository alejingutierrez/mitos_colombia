// Keyframes de La herencia de Tausa — 13 bloques × 2 escenas × 2 cuadros
// = 52 imágenes ≈ 130 s.
// Guion: guion-la-herencia-v2.json (N=13) · Acta: acta-la-herencia.json (25 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _muisca-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · El robo NUNCA SE RESUELVE. Ya no quedaban testigos ni una verdad que
//   pudiera imponerse sin duda. El acuerdo se construye SOBRE esa duda: en
//   ninguna escena se ve quién robó ni se muestra la pieza en manos de nadie.
// · Tausa NO regresa a vengarse ni a perdonar: él también temió el castigo del
//   hermano. Los dos vivían con el mismo miedo y el relato los pone A LA PAR.
// · La hermana NO es una mediadora amable: pone la manta, advierte que no es
//   un puente y CONDICIONA. Es quien cambia el reparto, y la imagen le da el
//   sitio central en cuanto entra.
// · El acuerdo NO acaba con las disputas: sólo da forma a la continuidad.
// · El final NO es un triunfo: vuelve sin sentirse vencedor.
//
// GUION DE LUZ: madrugada de la salida de Chía → camino largo → campamento
// del zipa → terreno leído → paso inundado → años de consejero → penumbra del
// zipa enfermo → luz de la llegada de las mujeres → manta en el suelo →
// encuentro de los hermanos → reparto sobre la manta → la advertencia →
// vuelta sin victoria.

import { DIRECCION, AVOID_BASE, ref, esc, escp, armar } from "./_muisca-comun.mjs";

export const SPEC_NAME = "muisca-herencia-escenas";
export const OUT_DIR = "muiscas/videos/la-herencia/keyframes";
export { DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; escena de robo, ladron sorprendido, pieza robada en manos de alguien, flashback que resuelve el hurto; venganza, duelo, pelea entre hermanos, sangre; abrazo de reconciliacion, perdon teatral, llanto de perdon; coronacion, trono, corona, cetro, aclamacion; tribunales europeos, jueces con toga, escribanos, documentos firmados";
export const PALETTE =
  "gris de madrugada, pardo de camino y de tierra pisada, crema de algodon crudo, ocre y verde de las cenefas, verde apagado de sementera, penumbra calida de lampara; sin saturacion ni neones";

const TAUSA =
  "EL MISMO Tausa de la referencia (hombre de unos cuarenta años, de porte contenido y mirada evaluadora, rostro serio, pelo negro recogido bajo una cinta tejida, manta de algodón crudo de tejido fino anudada al hombro)";
const HERMANA =
  "LA MISMA hermana mayor de la referencia (mujer de unos cuarenta y cinco años, de porte firme y expresión decidida, pelo negro con alguna cana recogido en un moño bajo, manta de algodón crudo del pecho a la pantorrilla)";
const MADRE =
  "LA MISMA madre de la referencia (mujer de unos cincuenta años, rostro duro y muy marcado, pelo negro con canas recogido en la nuca, manta de algodón crudo ceñida a la cintura con un cordón de fique)";

export const ITEMS = armar([
  // b1 — Salió de Chía sin despedirse. Un juicio sin defensa.
  escp("b1a", [ref("tausa_consejero"), ref("cercado_bacata"), ref("altiplano_noche")], {
    comun: `Madrugada. ${TAUSA} saliendo de Chía SIN DESPEDIRSE. Objeto ancla: el vano del cercado a su espalda.`,
    camara: {
      a: "PLANO MEDIO por detrás de él cruzando el vano de la empalizada, con el patio dormido detrás.",
      b: "la cámara se ha QUEDADO DENTRO del cercado mientras él sale: PLANO GENERAL desde el patio, con el vano vacío y su figura ya lejos en el camino.",
    },
    ini: "cruza el vano de espaldas y el patio sigue dormido detrás de él.",
    fin: "desde dentro del cercado el vano ha quedado vacío y él es una figura pequeña alejándose; nadie se ha levantado a verlo irse.",
  }, "despedida, llanto, abrazos, persecucion, guardias"),
  escp("b1b", [ref("cercado_bacata"), ref("familias_muiscas"), ref("manta_vasijas")], {
    comun: "Penumbra del cercado de Chía. La acusación: una pieza guardada que ya no está, y un juicio dirigido por quien ya desconfía. EL ROBO NUNCA SE RESUELVE: no se ve quién la tomó ni dónde está. Objeto ancla: el hueco vacío donde estaba la pieza.",
    camara: {
      a: "PLANO MACRO del sitio vacío en una repisa de barro, con la marca de polvo de algo que estuvo ahí y ya no está.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del recinto con un corro de gente discutiendo alrededor y el cacique de espaldas en un extremo.",
    },
    ini: "en la repisa hay una marca de polvo con la forma de algo que falta, y nada más.",
    fin: "desde lejos, el corro discute alrededor de esa repisa y nadie enseña nada: no hay pieza, ni ladrón, ni prueba en todo el cuadro.",
  }, "ladron sorprendido, pieza en manos de alguien, flashback del robo, juez, toga"),

  // b2 — Caminó hasta Bacatá. Pidió un lugar entre los guerreros.
  escp("b2a", [ref("tausa_consejero"), ref("camino_carrera"), ref("sabana_cultivos")], {
    comun: `Luz de varios días de camino. ${TAUSA} andando hasta las tierras de Bacatá. Objeto ancla: sus pies y el camino.`,
    camara: {
      a: "PLANO MACRO de sus pies descalzos sobre la tierra del camino, con el polvo de jornadas encima.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado del territorio con el camino cruzándolo entero y él como un punto a mitad de recorrido.",
    },
    ini: "los pies avanzan sobre la tierra, cubiertos de polvo viejo.",
    fin: "desde muy arriba se ve el trecho que lleva y el que le falta: un camino larguísimo entre dos valles y él en mitad de él.",
  }, "persecucion, soldados, caballos, dramatismo, aureola"),
  escp("b2b", [ref("tausa_consejero"), ref("zipa_bacata"), ref("familias_muiscas"), ref("cercado_bacata")], {
    comun: `Luz de mañana en el cercado del zipa, donde se prepara campaña. ${TAUSA} pidiendo un lugar entre los guerreros. Objeto ancla: la fila de los que se ofrecen.`,
    camara: {
      a: "PLANO GENERAL del patio con una fila de hombres esperando y él al final de ella.",
      b: "la cámara ha AVANZADO a lo largo de la fila hasta el frente: PLANO MEDIO de él delante del que apunta los nombres, hablando poco.",
    },
    ini: "está el último de una fila larga de hombres que esperan.",
    fin: "ha llegado al frente y habla con el que apunta, breve, sin gesticular y sin contar más de lo necesario.",
  }, "armaduras, cascos, espadas, banderas, aureola, trono"),

  // b3 — No contó su historia. Revisó senderos y repartió turnos.
  escp("b3a", [ref("tausa_consejero"), ref("familias_muiscas"), ref("campo_pelado")], {
    comun: `NO cuenta su historia completa: dice que sabe organizar grupos, leer el terreno y esperar antes de atacar. Lo que se ve es lo que hace, no lo que calla. Objeto ancla: sus manos sobre el terreno.`,
    camara: {
      a: "PLANO MACRO de su mano abierta sobre la tierra, palpando la firmeza del suelo.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del campamento con él agachado en un extremo y los demás lejos, alrededor de los fuegos.",
    },
    ini: "la palma palpa la tierra, comprobando si aguanta.",
    fin: "desde lejos se ve que está solo y agachado en el borde del campamento, mientras los demás están juntos alrededor de los fuegos: no busca el sitio visible.",
  }, "arengas, discursos, aureola, pose heroica, armas de metal"),
  escp("b3b", [ref("tausa_consejero"), ref("familias_muiscas"), ref("sendero_territorio")], {
    comun: `Repartiendo turnos y revisando senderos, sin buscar lucimiento. Objeto ancla: el reparto de los puestos.`,
    camara: {
      a: "PLANO MACRO de unas piedras pequeñas colocadas una a una sobre un trazado dibujado en la tierra.",
      b: "la cámara ha RETROCEDIDO y ha subido: PICADO ALTO del territorio real, donde esos mismos puestos son fuegos y grupos repartidos por los senderos.",
    },
    ini: "sobre el dibujo en la tierra va colocando piedritas en los puntos del camino.",
    fin: "desde arriba, en el territorio de verdad, hay un grupo en cada uno de esos puntos: el dibujo y el terreno coinciden.",
  }, "mapas de papel, pergaminos, texto, escribanos, aureola"),

  // b4 — Evitó que una columna entrara en un paso inundado.
  escp("b4a", [ref("tausa_consejero"), ref("familias_muiscas"), ref("sabana_anegada"), ref("boqueron_tausa")], {
    comun: `Luz gris. Una columna a punto de entrar en un paso inundado y ${TAUSA} deteniéndola. Objeto ancla: el agua que no se ve desde el camino.`,
    camara: {
      a: "PLANO MEDIO de la columna avanzando por el camino hacia un paso entre rocas, con él levantando el brazo por un lado.",
      b: "la cámara ha ADELANTADO a la columna y ha entrado en el paso: PLANO GENERAL al otro lado de las rocas, donde el camino está bajo medio palmo de agua turbia hasta el fondo.",
    },
    ini: "la columna avanza hacia el paso y él levanta el brazo para pararla.",
    fin: "al otro lado de las rocas, lo que hay es el camino entero anegado y sin fondo visible: ahí es donde iban a meterse.",
  }, "batalla, sangre, cadaveres, heroismo epico, aureola"),
  escp("b4b", [ref("tausa_consejero"), ref("zipa_bacata"), ref("salon_jeques")], {
    comun: `Luz de interior. La campaña terminó, su trabajo fue reconocido y con los años se volvió consejero. Se dice por dónde está sentado, no por una ceremonia. Objeto ancla: su sitio en el semicírculo.`,
    camara: {
      a: "PLANO MEDIO de él sentado en el borde exterior del semicírculo de esteras, lejos del centro.",
      b: "la cámara ha RETROCEDIDO y se ha elevado en un movimiento que también salta en el tiempo: PICADO del mismo recinto años después, con él ya sentado junto al banco del centro.",
    },
    ini: "está sentado en el borde de fuera del semicírculo, casi contra la pared.",
    fin: "en el mismo recinto, años después, está sentado al lado del banco del centro, con los demás alrededor: el sitio cambió sin que nadie lo coronara.",
  }, "coronacion, trono, corona, ceremonia, aclamacion, aureola"),

  // b5 — No dejó de pensar en Chía. Gobernar no era ganar una discusión.
  escp("b5a", [ref("tausa_consejero"), ref("altiplano_noche"), ref("cercado_bacata")], {
    comun: `Noche. NO dejó de pensar en Chía ni en la acusación. Objeto ancla: la dirección en la que mira.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara de perfil en la penumbra, despierto.",
      b: "la cámara ha girado y RETROCEDIDO en la dirección de su mirada: GRAN PLANO GENERAL nocturno del altiplano hacia el norte, con un resplandor de fogones muy lejos en el horizonte.",
    },
    ini: "está despierto de perfil, mirando algo fuera de cuadro.",
    fin: "lo que miraba está lejísimos: un resplandor pequeño de fogones en el horizonte, al otro lado del altiplano, que es Chía.",
  }, "fantasmas, flashback del robo, aureola, llanto"),
  escp("b5b", [ref("tausa_consejero"), ref("familias_muiscas"), ref("salon_jeques")], {
    comun: `Luz de interior. Aprendió que gobernar no era ganar una discusión para siempre: cada decisión regresaba en la vida de otras personas. Se dice con la misma escena repetida años después. Objeto ancla: las caras de los que vuelven.`,
    camara: {
      a: "PLANO MEDIO de él escuchando a dos personas que discuten delante de él.",
      b: "la cámara ha RETROCEDIDO y ha girado hacia la puerta: PLANO GENERAL del recinto con una fila esperando fuera, y entre ellos las MISMAS dos personas de antes, mayores, volviendo con otro asunto.",
    },
    ini: "los dos discuten delante de él y él escucha sin decidir todavía.",
    fin: "en la fila de la puerta están otra vez los mismos dos, años más viejos, esperando turno con otro asunto: lo que se decidió volvió.",
  }, "tribunal, toga, martillo de juez, sentencias, texto"),

  // b6 — El zipa enfermó y pidió que Tausa lo sucediera.
  escp("b6a", [ref("zipa_bacata"), ref("tausa_consejero"), ref("salon_jeques"), ref("familias_muiscas")], {
    comun: `Penumbra de lámpara. El zipa enfermo reuniendo a quienes sostienen su autoridad y diciendo que quiere que ${TAUSA} lo suceda. Objeto ancla: el camastro y el semicírculo.`,
    camara: {
      a: "PLANO MEDIO CORTO del zipa hablando desde el camastro, con la voz corta.",
      b: "la cámara ha RETROCEDIDO y ha subido: PICADO del recinto entero con el semicírculo de gente y Tausa en un extremo, con todas las caras girándose hacia él.",
    },
    ini: "el enfermo habla desde el camastro y no se ve a quién señala.",
    fin: "desde arriba, todas las caras del semicírculo se han girado hacia el mismo extremo, donde está Tausa, que no se ha movido.",
  }, "coronacion, corona, cetro, trono, aclamacion, aureola"),
  escp("b6b", [ref("tausa_consejero"), ref("familias_muiscas"), ref("salon_jeques")], {
    comun: `La elección sorprendió a muchos —no pertenecía al centro del poder y su conflicto familiar podía convertirse en una fractura— y aun así el nombramiento se sostuvo. Objeto ancla: las caras que dudan.`,
    camara: {
      a: "PLANO MEDIO de tres caras del semicírculo mirándose entre sí, con dudas.",
      b: "la cámara ha hecho un PANEO LATERAL por todo el semicírculo hasta volver a él: PLANO MEDIO de Tausa quieto, con las caras ya vueltas otra vez hacia el camastro.",
    },
    ini: "tres caras se miran entre sí sin decir nada, dudando.",
    fin: "recorrido el semicírculo, nadie ha levantado la voz: las caras han vuelto al camastro y el nombramiento se queda en pie.",
  }, "aplausos, aclamacion, coronacion, violencia, gritos"),

  // b7 — Recibió a su madre y su hermana. «Yo también temí el suyo».
  escp("b7a", [ref("madre_sana"), ref("hermana_mayor"), ref("cercado_bacata")], {
    comun: `Luz de mañana. ${MADRE} y ${HERMANA} llegando desde Chía. Objeto ancla: las dos en el vano.`,
    camara: {
      a: "PLANO GENERAL del camino con dos figuras llegando, todavía lejos.",
      b: "la cámara ha RETROCEDIDO hasta el patio y las ha dejado llegar: PLANO MEDIO con las dos ya dentro del cercado, paradas y mirando alrededor sin sentarse.",
    },
    ini: "las dos vienen por el camino, todavía pequeñas.",
    fin: "están ya dentro del patio, de pie, sin haberse sentado ni saludado a nadie: han venido a algo concreto.",
  }, "abrazo llorando, reconciliacion teatral, arrodillarse, aureola"),
  escp("b7b", [ref("madre_sana"), ref("tausa_consejero")], {
    comun: `${MADRE} diciéndole que su hermano teme que vuelva para castigarlo, y él contestando que también había temido el suyo. Los dos hermanos A LA PAR: el mismo miedo. Objeto ancla: las dos caras.`,
    camara: {
      a: "PLANO MEDIO CORTO de la cara de la madre hablando, dura y sin rodeos.",
      b: "la cámara ha RODEADO hasta ponerse detrás de ella: PLANO MEDIO de la cara de Tausa contestando, con la nuca de ella en primer término.",
    },
    ini: "la madre dice lo suyo, con la cara sin ablandarse.",
    fin: "por encima del hombro de ella se le ve contestar sin subir la voz: lo que dice lo pone al mismo nivel que el otro.",
  }, "llanto, abrazo, perdon teatral, arrodillarse, venganza, gritos"),

  // b8 — La hermana colocó una manta entre los tres. (CITA)
  escp("b8a", [ref("hermana_mayor"), ref("manta_reparto"), ref("tausa_consejero"), ref("madre_sana")], {
    comun: `${HERMANA} colocando una manta entre los tres. Ella pone la mesa, y desde ese momento el centro del cuadro es suyo. Objeto ancla: la manta extendida.`,
    camara: {
      a: "PLANO MEDIO de sus manos sacudiendo la manta para extenderla en el suelo, de pie.",
      b: "la cámara ha SUBIDO en vertical hasta un CENITAL a plomo: la manta extendida ocupa el centro del cuadro y los tres están sentados alrededor de ella, uno en cada lado.",
    },
    ini: "las manos sacuden la manta y la dejan caer sobre la tierra.",
    fin: "desde arriba, la manta está extendida y estirada en el centro y los tres han quedado sentados a su alrededor, cada uno en un lado, nadie por encima.",
  }, "altar, mantel, ceremonia religiosa, cruces, aureola"),
  escp("b8b", [ref("hermana_mayor"), ref("tausa_consejero"), ref("manta_reparto")], {
    comun: `${HERMANA} advirtiendo que si gobierna desde esa herida, la heredarán todos. No es una mediadora amable: es una advertencia. Objeto ancla: su cara.`,
    camara: {
      a: "PLANO CENITAL de la manta vacía con las cuatro manos de los tres apoyadas en sus bordes.",
      b: "la cámara ha DESCENDIDO y ha girado hasta la altura de los ojos: PLANO MEDIO CORTO de la cara de ella hablando, con Tausa cortado por el borde del cuadro.",
    },
    ini: "sobre la manta vacía hay manos apoyadas en los bordes y nada más.",
    fin: "de cerca, ella está diciendo la advertencia con la cara firme y los ojos fijos en él, sin suavizarla.",
  }, "llanto, suplica, mediacion dulce, aureola, arrodillarse"),

  // b9 — Se vio con su hermano. No resolvieron el robo.
  escp("b9a", [ref("tausa_consejero"), ref("gameza_cacique"), ref("salon_jeques")], {
    comun: `Penumbra de interior, muchas horas. Los dos hermanos hablando. Objeto ancla: la lámpara que se va gastando.`,
    camara: {
      a: "PLANO MEDIO de los dos sentados frente a frente con la lámpara alta entre ellos.",
      b: "la cámara ha RODEADO despacio la habitación y ha vuelto: PLANO MEDIO desde el otro costado con la lámpara ya baja, casi consumida, y los dos todavía sentados igual.",
    },
    ini: "la lámpara está alta y los dos acaban de sentarse.",
    fin: "la lámpara se ha consumido casi entera y ellos siguen en el mismo sitio y en la misma postura: han pasado horas.",
  }, "pelea, golpes, gritos, abrazo de reconciliacion, llanto, sangre"),
  esc("b9b", [ref("manta_vasijas"), ref("salon_jeques")], {
    comun: "Penumbra. NO resolvieron quién robó la pieza: ya no quedaban testigos ni una verdad que pudiera imponerse sin duda. Se dice con el hueco que sigue vacío. Objeto ancla: la repisa vacía.",
    camara: {
      a: "PLANO MACRO de la marca de polvo en la repisa, la misma del principio, todavía vacía.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del recinto en penumbra, sin nadie, con esa repisa pequeña en un rincón y nada encima.",
    },
    ini: "la marca de polvo sigue ahí, exactamente igual que al principio.",
    fin: "desde lejos, el recinto está vacío y la repisa también: la pieza no aparece, y sobre ese hueco es sobre lo que se va a acordar.",
  }, "pieza recuperada, ladron descubierto, flashback, prueba, juicio"),

  // b10 — La sucesión no dependería de un enfermo. Miraron a la hermana.
  escp("b10a", [ref("tausa_consejero"), ref("gameza_cacique"), ref("manta_reparto")], {
    comun: `Los dos acordando que la sucesión futura NO dependería de la elección desesperada de un gobernante enfermo. Objeto ancla: lo que ponen sobre la manta.`,
    camara: {
      a: "PLANO CENITAL de la manta con dos figurillas de barro que representan casas, separadas.",
      b: "la cámara ha DESCENDIDO a ras de la manta: PLANO MACRO de las dos figurillas de casa, con dos manos distintas acercando cada una la suya hasta dejarlas a la misma altura.",
    },
    ini: "sobre la manta hay dos figurillas de casa, una más adelantada que la otra.",
    fin: "las dos manos las han dejado a la misma altura y a la misma distancia del centro: ninguna casa está por encima de la otra.",
  }, "documentos, firmas, escribanos, coronas, cetros, aureola"),
  escp("b10b", [ref("hermana_mayor"), ref("tausa_consejero"), ref("gameza_cacique"), ref("manta_reparto")], {
    comun: `Los dos MIRARON a la hermana mayor: sus hijos pertenecían al mismo linaje que ambos. Objeto ancla: hacia dónde giran las dos cabezas.`,
    camara: {
      a: "PLANO MEDIO de los dos hermanos de perfil sobre la manta, hablando entre ellos.",
      b: "la cámara ha hecho un PANEO LATERAL siguiendo sus dos miradas: PLANO MEDIO de ella, sentada en su lado de la manta, con las dos cabezas de ellos entrando por el borde y vueltas hacia ella.",
    },
    ini: "los dos hablan entre sí, de perfil, sin mirarla.",
    fin: "los dos han girado la cabeza hacia ella a la vez y ahora ella ocupa el centro del cuadro, con las nucas de ellos en los bordes.",
  }, "aureola, entronizacion, corona, aclamacion, sumision"),

  // b11 — «No soy un puente por el que ustedes pasan». (CITA)
  escp("b11a", [ref("hermana_mayor"), ref("manta_reparto"), ref("familias_muiscas")], {
    comun: `${HERMANA} advirtiendo que NO es un puente por el que ellos pasan, y que si sus hijos tendrán obligaciones, ella participará en las decisiones que los afecten. CONDICIONA: no concede. Objeto ancla: su mano sobre la manta.`,
    camara: {
      a: "PLANO MACRO de su mano abierta apoyada con firmeza sobre el centro de la manta, sin soltar.",
      b: "la cámara ha RETROCEDIDO y ha subido a la altura de los ojos: PLANO MEDIO CORTO de su cara terminando la frase, con los dos hermanos desenfocados a los lados.",
    },
    ini: "su mano se apoya en el centro de la manta y se queda ahí.",
    fin: "de cerca, ella acaba de decirlo con la cara firme; su mano sigue sobre la manta y ninguno de los dos ha puesto la suya encima.",
  }, "suplica, llanto, gratitud, sumision, aureola, arrodillarse"),
  escp("b11b", [ref("hermana_mayor"), ref("familias_muiscas"), ref("cercado_bacata")], {
    comun: `De entre sus hijos saldría el heredero, escogido según responsabilidades y vínculos reconocidos por la familia. NO es una coronación: son tres o cuatro jóvenes a los que todavía no se ha elegido. Objeto ancla: los hijos.`,
    camara: {
      a: "PLANO MEDIO de tres o cuatro jóvenes en el patio, cada uno a lo suyo, sin saber que se habla de ellos.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL en picado con los jóvenes repartidos por el patio y, en un rincón y pequeños, los tres sentados alrededor de la manta.",
    },
    ini: "los jóvenes están en el patio cada uno en su tarea.",
    fin: "desde arriba se ve la escena completa: ellos a lo suyo sin enterarse y, en una esquina, los tres alrededor de la manta decidiendo de quién saldrá el siguiente.",
  }, "coronacion, señalar al elegido, corona, aureola, ceremonia"),

  // b12 — Bacatá donde estaba, Chía por su línea. Todo sobre la manta.
  escp("b12a", [ref("tausa_consejero"), ref("gameza_cacique"), ref("hermana_mayor"), ref("manta_reparto")], {
    comun: `Los hermanos aceptan: la autoridad ganada en Bacatá queda donde está y la de Chía pasa por la línea de la hermana. Objeto ancla: el reparto sobre la manta.`,
    camara: {
      a: "PLANO MEDIO de los tres sentados, con las manos moviendo objetos sobre la manta.",
      b: "la cámara ha SUBIDO a un CENITAL a plomo: LA MISMA manta de la referencia con los objetos ya dispuestos en grupos ordenados —figurillas de barro que representan casas, puñados de semilla que representan sementeras— y tres manos distintas tocando cada grupo.",
    },
    ini: "las manos todavía están moviendo cosas de un lado a otro de la manta.",
    fin: "desde arriba el reparto está hecho: los grupos de figurillas y semillas quedaron ordenados y en cada uno hay una mano distinta apoyada.",
  }, "documentos, firmas, sellos, mapas, coronas, aureola"),
  escp("b12b", [ref("tausa_consejero"), ref("gameza_cacique"), ref("hermana_mayor")], {
    comun: `El acuerdo cerrado, sin abrazos y sin victoria. Objeto ancla: los tres de pie.`,
    camara: {
      a: "PLANO CENITAL de la manta con el reparto hecho y las manos retirándose de ella.",
      b: "la cámara ha DESCENDIDO y ha retrocedido: PLANO MEDIO LARGO de los tres ya de pie, separados, con la manta en el suelo entre ellos.",
    },
    ini: "las manos se retiran de la manta y el reparto queda quieto.",
    fin: "los tres están de pie y separados, cada uno mirando hacia un lado distinto, con la manta en el suelo en medio: nadie se ha abrazado.",
  }, "abrazo, llanto, reconciliacion teatral, brindis, aclamacion"),

  // b13 — No acabó las disputas: dio forma a la continuidad.
  escp("b13a", [ref("tausa_consejero"), ref("familias_muiscas"), ref("salon_jeques")], {
    comun: "Luz de interior, después. El acuerdo NO acabó con todas las disputas: sólo dio forma a la continuidad. Objeto ancla: la fila que sigue esperando.",
    camara: {
      a: "PLANO MEDIO de dos personas discutiendo delante de él, igual que antes.",
      b: "la cámara ha RETROCEDIDO hasta la puerta y ha salido: PLANO GENERAL del patio con una fila entera esperando turno, tan larga como siempre.",
    },
    ini: "dos discuten delante de él, otra vez.",
    fin: "fuera, la fila de los que esperan turno sigue llegando hasta el vano del patio: las disputas no se acabaron.",
  }, "paz universal, celebracion, aureola, monumento, texto"),
  escp("b13b", [ref("tausa_consejero"), ref("manta_reparto"), ref("cercado_bacata")], {
    comun: "Luz de tarde. Vuelve sin sentirse vencedor, admitiendo que la herencia sería una red de obligaciones que nadie sostiene solo. El cierre NO es un triunfo. Objeto ancla: la manta doblada.",
    camara: {
      a: "PLANO MACRO de la manta del reparto doblada y guardada bajo el brazo de alguien.",
      b: "la cámara ha RETROCEDIDO y ha subido hasta un GRAN PLANO GENERAL final con los dos valles a la vez —Bacatá y Chía— unidos por el camino, y figuras pequeñas yendo y viniendo por él en las dos direcciones.",
    },
    ini: "la manta va doblada bajo un brazo, sin nada encima.",
    fin: "desde muy arriba se ven los dos valles unidos por el mismo camino, con gente yendo y viniendo en las dos direcciones: la carga quedó repartida y no hay nadie arriba de nadie.",
  }, "trono, corona, aclamacion, monumento, estatua, aureola, texto"),
]);
