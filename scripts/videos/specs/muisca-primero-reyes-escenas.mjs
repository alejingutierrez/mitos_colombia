// Keyframes de Garancheda, el primero de los reyes — 10 bloques × 2 escenas × 2
// cuadros = 40 imágenes ≈ 100 s.
// Guion: guion-el-primero-de-los-reyes-v2.json (N=10)
// Acta:  acta-el-primero-de-los-reyes.json (20 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _muisca-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · El relato NO responde la pregunta de las niñas. Nadie dice que alguna
//   vaya a gobernar ni que no. Lo que decide no es la señal: es quién la lee.
// · LOS DOS COPOS HACEN LO MISMO —se hunden y vuelven a salir— y sólo uno fue
//   leído como buena fortuna. Esa simetría es el mito y hay que sostenerla en
//   imagen: EL MISMO río, EL MISMO algodón, EL MISMO encuadre en b6 y en b9.
// · El cierre NO promete nada: algo quedó flotando esperando que alguien lo
//   levantara, y ahí se acaba. No convertirlo en anuncio ni en profecía.
// · Itaca NO queda embarazada de un hombre: el sol entró en ella mientras se
//   acostaba en la hierba antes del alba. Nada de aureolas ni de rayos.
// · Garancheda NO conquista Hunza: viaja a la corte de Ramiriquí, lo reciben
//   como hijo del sol y reclama el gobierno. NO HAY GUERRA en la fuente.
//
// MARCO: el mito entero se cuenta junto al río, con el abuelo y las dos niñas.
// Cada vez que el relato vuelve al marco, la luz es la del río de esa tarde.
//
// GUION DE LUZ: tarde de río → negro del primer amanecer → barro y tallos →
// cerro de Guachetá antes del alba → verde de la esmeralda → agua de la
// prueba → tarde larga del veredicto → corte de Ramiriquí → río otra vez →
// último brillo en un solo punto del agua.

import { DIRECCION, AVOID_BASE, ref, esc, escp, armar } from "./_muisca-comun.mjs";

export const SPEC_NAME = "muisca-primero-reyes-escenas";
export const OUT_DIR = "muiscas/videos/el-primero-de-los-reyes/keyframes";
export { DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; sol o luna con cara; carro solar, caballos, cuadriga; aureola, rayos dibujados, resplandor sobre el vientre; anunciacion cristiana, angeles, paloma; guerra, ejercitos, armas, batalla, conquista; profecia dibujada, señales en el cielo, texto o simbolos sobre el agua; escena de embarazo explicita, desnudez";
export const PALETTE =
  "verde y gris de agua de rio, blanco de copo de algodon, ocre amarillo de barro, beige palido de tallo hueco, crema de algodon crudo, verde profundo de esmeralda; sin saturacion ni neones";

const ABUELO =
  "EL MISMO abuelo de la referencia (hombre de unos setenta años, menudo y de espalda encorvada, rostro muy marcado y con humor en los ojos, pelo blanco recogido en la nuca, manta de algodón crudo gastada ceñida con un cordón de fique, descalzo)";
const NINA_CHICA =
  "LA MISMA niña pequeña de la referencia (unos nueve años, rostro vivo y preguntón, pelo negro liso hasta los hombros, manta pequeña de algodón crudo sin cenefas ceñida con un cordón, descalza)";
const NINA_MAYOR =
  "LA MISMA niña mayor de la referencia (unos once años, algo más alta, rostro atento y reflexivo, pelo negro liso recogido con un cordón, manta pequeña de algodón crudo sin cenefas, descalza)";
const ITACA =
  "LA MISMA hija del cacique de Guachetá de la referencia (mujer joven de unos veinte años, rostro decidido, pelo negro liso muy largo y suelto, manta de algodón crudo del pecho a la pantorrilla anudada al hombro con cenefa tejida sobria en ocre, descalza)";

export const ITEMS = armar([
  // b1 — Un abuelo contaba a las niñas junto al río.
  escp("b1a", [ref("abuelo_narrador"), ref("rio_prueba"), ref("chiguachi_nina"), ref("quiquitzua_nina")], {
    comun: `Luz de tarde larga en la ribera. ${ABUELO} contando a ${NINA_CHICA} y ${NINA_MAYOR} sentados en las piedras de LA MISMA orilla de la referencia. Éste es el marco y vuelve tres veces. Objeto ancla: el sitio de los tres en la ribera.`,
    camara: {
      a: "PLANO GENERAL desde el otro lado del agua, a media distancia, los tres pequeños sentados de espaldas en la orilla opuesta.",
      b: "la cámara ha CRUZADO el río y ha subido hasta la ribera, quedándose a media distancia: PLANO MEDIO LARGO de los tres sentados en las piedras, las dos niñas de espaldas al agua y vueltas hacia el abuelo.",
    },
    ini: "desde lejos son tres figuras sentadas junto al agua.",
    fin: "a media distancia se ve al abuelo hablando con la mano abierta en el aire y a las dos niñas, de espaldas al agua, escuchándolo, una con un copo de algodón en la falda.",
  }, "aureolas, fogata ceremonial, multitud, adultos enseñando con baston"),
  escp("b1b", [ref("chiguachi_nina"), ref("quiquitzua_nina"), ref("rio_prueba")], {
    comun: `Luz de tarde. Las dos niñas tienen nombres de lugares y han oído hablar de caciques, pero no entienden de dónde venía el primer señor. Objeto ancla: sus caras.`,
    camara: {
      a: "PLANO MEDIO CORTO de las dos juntas, escuchando.",
      b: "la cámara ha AVANZADO hasta la más pequeña: PRIMER PLANO de su cara con el ceño fruncido de no entender, con la otra desenfocada detrás.",
    },
    ini: "las dos escuchan quietas.",
    fin: "de muy cerca, la pequeña ha fruncido el ceño y ha abierto la boca para preguntar algo.",
  }, "llanto, miedo, aburrimiento teatral, adultos regañando"),

  // b2 — Al amanecer sólo había dos hombres. Tierra amarilla y tallos huecos.
  escp("b2a", [ref("sogamoso_cacique"), ref("ramiriqui_cacique"), ref("altiplano_noche")], {
    comun: "Tiniebla del primer amanecer del mundo. Nadie nació antes que la luz: sólo dos hombres, a oscuras, que no se conocen el rostro. Objeto ancla: las dos siluetas.",
    camara: {
      a: "PLANO GENERAL casi negro con dos siluetas muy separadas y apenas insinuadas.",
      b: "la cámara ha AVANZADO hasta ponerse entre los dos: PLANO MEDIO CORTO con una silueta en cada borde del cuadro, todavía sin caras legibles.",
    },
    ini: "las dos siluetas están en extremos opuestos del cuadro.",
    fin: "desde el medio se ve que se han acercado hasta quedar frente a frente, pero las caras siguen en sombra y no se distinguen.",
  }, "rostros iluminados, antorchas, fuego, aureolas, Adan y Eva"),
  esc("b2b", [ref("figura_barro_amarillo"), ref("figura_tallos_huecos")], {
    comun: "Oscuridad con una claridad mínima que deja ver el material. LAS MISMAS figuras de la referencia: hombres de barro ocre con huellas dactilares en la superficie, mujeres trenzadas con tallos secos beige y huecas por dentro. Objeto ancla: el material de cada una.",
    camara: {
      a: "PLANO MACRO sobre el barro amarillo con las huellas de los dedos todavía frescas.",
      b: "la cámara ha hecho un TRAVELLING LATERAL hasta la figura de tallos y ha retrocedido: PLANO MEDIO con las dos juntas, a la misma altura.",
    },
    ini: "sólo se ve barro amarillo trabajado con los dedos.",
    fin: "vistas las dos se entiende de qué está hecha cada una: barro ocre con huellas de dedos y trenzado de cañas huecas por el que pasa el aire.",
  }, "estatuas de marmol, maniquies, Adan y Eva, resplandor, magia"),

  // b3 — El sobrino se volvió sol y el tío, luna. El abuelo siguió.
  escp("b3a", [ref("ramiriqui_cacique"), ref("sogamoso_cacique"), ref("altiplano_noche"), ref("madre_chia")], {
    comun: "Del negro al primer día. El sobrino sube a alumbrar y arde; el tío va tras él y se vuelve luz blanca. Se cuenta entero en un plano, porque aquí es un episodio del relato del abuelo. Objeto ancla: los dos puntos de luz en el cielo.",
    camara: {
      a: "CONTRAPICADO desde el suelo negro con una figura despegando, todavía reconocible.",
      b: "la cámara ha SUBIDO tras ella y ha retrocedido muchísimo: GRAN PLANO GENERAL del cielo con un punto ardiendo por un lado y un disco blanco por el otro, y el mundo apareciendo abajo.",
    },
    ini: "una figura sube desde el suelo y todavía se le ve la manta.",
    fin: "arriba hay ya dos luces, una naranja que arde y otra blanca y serena, cada una en un extremo del cielo, y abajo el mundo empieza a verse.",
  }, "carro solar, caballos, cuadriga, alas, sol con cara, luna con cara"),
  escp("b3b", [ref("abuelo_narrador"), ref("rio_prueba"), ref("chiguachi_nina"), ref("quiquitzua_nina")], {
    comun: `Luz de tarde otra vez en la ribera: vuelve el marco. Las niñas miran el agua y ${ABUELO} sigue contando, más abajo, hasta Guachetá. Objeto ancla: el agua que miran.`,
    camara: {
      a: "PLANO CENITAL sobre el agua corriendo entre las piedras, un plano sin personas.",
      b: "la cámara se ha ELEVADO y ha girado hacia la orilla, quedándose a media distancia: PLANO GENERAL de los tres sentados de espaldas al agua, con el abuelo señalando río abajo.",
    },
    ini: "sólo se ve el agua pasando entre las piedras.",
    fin: "a media distancia, el abuelo tiene el brazo extendido señalando río abajo y las dos niñas, de espaldas al agua, han girado la cabeza a seguir esa dirección.",
  }, "aureolas, fogatas ceremoniales, multitud"),

  // b4 — Itaca subía al cerro antes del alba. Parió una esmeralda.
  escp("b4a", [ref("muchacha_guacheta"), ref("loma_pelada_noche")], {
    comun: `Azul de antes del alba. ${ITACA} y su hermana subiendo al cerro y acostándose sobre la hierba para que el primer rayo las alcance. La hermana sube con ella y el relato no la sigue más. Objeto ancla: el filo del cerro por donde sale el sol.`,
    camara: {
      a: "PLANO GENERAL cenital de las dos tendidas sobre la hierba en lo alto, pequeñas y vistas desde arriba.",
      b: "la cámara ha DESCENDIDO hasta el suelo junto a una de ellas: PRIMER PLANO de la cara de Itaca de perfil contra la hierba, con el sol rasante dándole de lleno.",
    },
    ini: "las dos están tendidas y quietas bajo un cielo todavía gris.",
    fin: "de cerca, el primer rayo le da de lleno en la cara y ella ha abierto los ojos y contenido el aire; no hay ningún resplandor añadido, sólo el sol de la mañana.",
  }, "aureola, rayo dibujado, resplandor en el vientre, angeles, desnudez, escena sexual"),
  escp("b4b", [ref("muchacha_guacheta"), ref("esmeralda_algodones")], {
    comun: `Penumbra de interior con una lámpara baja. A los nueve meses ${ITACA} no da a luz un niño sino LA MISMA esmeralda de la referencia: verde y grande como un huevo, de talla tosca y caras irregulares. Objeto ancla: la esmeralda.`,
    camara: {
      a: "PLANO MACRO de la esmeralda sobre el lienzo de algodón abierto como una flor, con las caras irregulares visibles.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO de ella sentada, envolviendo la piedra y guardándosela contra el pecho.",
    },
    ini: "la piedra está sobre el lienzo abierto y nadie la ha tocado.",
    fin: "la ha envuelto y se la ha llevado contra el pecho con las dos manos encima; la estera ha quedado vacía.",
  }, "parto explicito, sangre, dolor, desnudez, resplandor, milagro con luz"),

  // b5 — Días después encontró una criatura. La llamaron Garancheda.
  escp("b5a", [ref("muchacha_guacheta"), ref("esmeralda_algodones"), ref("casa_barro_paja")], {
    comun: `Luz gris de mañana. Días después, ${ITACA} abriendo el algodón. Lo que hay dentro ya no es la piedra: es un niño pequeño envuelto en algodones, visto siempre a media distancia y sin luz propia. Objeto ancla: el algodón que se abre.`,
    camara: {
      a: "PLANO DETALLE cenital del envoltorio cerrado sobre su regazo, con sus dedos separando la tela.",
      b: "la cámara se ha ELEVADO y ha retrocedido hasta un PLANO MEDIO LARGO: se la ve entera sentada en la estera, con el algodón abierto en el regazo y la cara vuelta hacia la puerta.",
    },
    ini: "sus dedos separan el algodón y todavía no se ve qué hay dentro.",
    fin: "el envoltorio ha quedado abierto y dentro, a media distancia, hay un niño pequeño envuelto en algodones y no una piedra; ella ha levantado la cara hacia la puerta.",
  }, "resplandor, aureola, angeles, pesebre, adoracion, rayos"),
  escp("b5b", [ref("familias_muiscas"), ref("cercado_bacata"), ref("muchacha_guacheta")], {
    comun: "Luz de mañana en el cercado de Guachetá. Le ponen nombre: Garancheda, hecho hombre. La luz había tomado cuerpo, y eso se dice con gente alrededor, no con efectos. Objeto ancla: el corro de gente.",
    camara: {
      a: "PLANO MEDIO de tres o cuatro caras de LAS MISMAS familias de la referencia mirando hacia abajo, hacia algo que no vemos.",
      b: "la cámara ha SUBIDO por encima de ellos hasta un PICADO: se ve el corro entero cerrado alrededor de Itaca sentada en el centro con el envoltorio.",
    },
    ini: "unas caras miran hacia abajo, muy juntas.",
    fin: "desde arriba se ve el corro completo cerrado alrededor de ella, todos mirando hacia el centro, sin que ninguno se arrodille.",
  }, "adoracion, reyes magos, estrella, aureolas, arrodillarse, coronacion"),

  // b6 — Arrojaron al río un copo. Una mano lo levantó.
  esc("b6a", [ref("copo_algodon"), ref("rio_prueba")], {
    comun: "Luz de tarde sobre EL MISMO tramo de río de la referencia: un remanso arriba, remolinos en el medio y un ensanche más abajo. UN MISMO copo de algodón de la referencia echado a la corriente para conocer la suerte. ESTE ENCUADRE SE REPITE EXACTO en la escena b9b, porque los dos copos hacen lo mismo. Objeto ancla: el copo en el agua.",
    camara: {
      a: "PLANO MACRO del copo blanco entrando en el agua y empezando a girar entre las piedras.",
      b: "la cámara ha ACOMPAÑADO al copo río abajo y ha subido: PLANO GENERAL en picado del tramo entero, con el copo pequeño pasando los remolinos.",
    },
    ini: "el copo entra en el agua y da la primera vuelta, muy cerca del objetivo.",
    fin: "desde arriba se ve el tramo completo —remanso, remolinos y ensanche— con el copo perdido en mitad de los remolinos.",
  }, "personas, magia, resplandor, texto o simbolos en el agua"),
  escp("b6b", [ref("copo_algodon"), ref("rio_prueba"), ref("familias_muiscas")], {
    comun: "Luz de tarde. Cuando parecía perdido, una mano lo levanta sin deshacerlo. Objeto ancla: el copo en la mano.",
    camara: {
      a: "PLANO GENERAL BAJO a ras del agua, con el copo apenas visible entre la espuma de los remolinos.",
      b: "la cámara ha AVANZADO y ha subido con el copo: PLANO MACRO del algodón entero en la palma de una mano abierta, ya fuera del agua.",
    },
    ini: "el copo se hunde entre la espuma y casi no se ve.",
    fin: "está en la palma de una mano abierta, entero y sin deshacerse, ya en la orilla y con mantas secas alrededor.",
  }, "resplandor, magia, aureola, multitud aclamando, oro"),

  // b7 — «El agua no lo quiso». Garancheda creció sabiendo quién era su padre.
  escp("b7a", [ref("abuelo_narrador"), ref("rio_prueba"), ref("copo_algodon")], {
    comun: `Luz de tarde larga. ${ABUELO} diciendo que eso significa buena fortuna: el agua no lo quiso. Es una LECTURA, y la imagen deja ver que es él quien la hace. Objeto ancla: su cara y el copo.`,
    camara: {
      a: "PLANO MACRO del copo en su mano abierta, ya en la orilla y con mantas secas alrededor.",
      b: "la cámara ha SUBIDO por su brazo hasta la cara: PRIMER PLANO del abuelo hablando, con el copo desenfocado abajo en el borde del cuadro.",
    },
    ini: "sólo se ve el algodón entero en la palma.",
    fin: "de cerca se le ve la cara mientras dicta el veredicto: es su boca la que decide lo que significa, no el agua.",
  }, "aureolas, magia, señales en el cielo, texto, profecia dibujada"),
  escp("b7b", [ref("goranchacha_senor"), ref("sabana_cultivos"), ref("familias_muiscas")], {
    comun: "Luz abierta de mañana. Garancheda creciendo sabiendo que el sol era su padre y que muchos lo esperaban. Lo que se ve es la espera de los demás, no una aureola sobre él. Objeto ancla: las caras que lo miran.",
    camara: {
      a: "PLANO MEDIO de él caminando por un camino, de perfil y sin nada que lo distinga.",
      b: "la cámara se ha QUEDADO ATRÁS y ha girado hacia los lados del camino: PLANO GENERAL en el que se ve a la gente parada en los bordes mirándolo pasar, y él ya pequeño al fondo.",
    },
    ini: "camina solo por el camino como cualquiera.",
    fin: "desde atrás se ve que a los dos lados del camino hay gente parada mirándolo alejarse: lo esperaban.",
  }, "aureola, rayos, resplandor, corona, trono, adoracion"),

  // b8 — Reclamó el gobierno en Ramiriquí. Levantó su corte en Hunza.
  escp("b8a", [ref("goranchacha_senor"), ref("ramiriqui_cacique"), ref("cercado_bacata")], {
    comun: "Luz de tarde en la corte de Ramiriquí. Lo reciben como hijo del sol y él reclama el gobierno. NO HAY GUERRA: es un reclamo hecho de pie y con palabras. Objeto ancla: los dos frente a frente.",
    camara: {
      a: "PLANO GENERAL del patio con los dos acercándose desde extremos opuestos, pequeños.",
      b: "la cámara ha AVANZADO hasta el centro y ha bajado a la altura del pecho: PLANO MEDIO CORTO de los dos de perfil, hablando, sin ningún arma en cuadro.",
    },
    ini: "los dos caminan uno hacia el otro por el patio.",
    fin: "se han encontrado en el centro y hablan de cerca: él con la barbilla alta reclamando y el otro escuchando, sin que nadie levante la mano.",
  }, "guerra, ejercitos, armas, batalla, sangre, conquista, cadaveres"),
  escp("b8b", [ref("goranchacha_senor"), ref("zaque_tunja"), ref("cercado_bacata")], {
    comun: "Luz de mañana en Hunza. Levantó allí su corte y desde allí mandó en la provincia. Objeto ancla: el cercado nuevo.",
    camara: {
      a: "PLANO MACRO de unas manos atando una vara de la empalizada con fibra.",
      b: "la cámara ha RETROCEDIDO y ha subido hasta un GRAN PLANO GENERAL en picado: el cercado de Hunza terminado, con su patio, sus casas y la gente entrando y saliendo.",
    },
    ini: "unas manos atan una vara y no se ve nada más.",
    fin: "desde arriba está el cercado entero levantado y funcionando, con caminos que llegan a él desde todas las direcciones del valle.",
  }, "castillos, murallas europeas, torres, banderas, tronos, coronas"),

  // b9 — El abuelo calló. Una niña dejó caer un copo.
  escp("b9a", [ref("abuelo_narrador"), ref("chiguachi_nina"), ref("quiquitzua_nina"), ref("rio_prueba")], {
    comun: `Luz de tarde larga: vuelve el marco por última vez. ${ABUELO} ha callado y ${NINA_CHICA} arranca un copo de la cesta. Objeto ancla: la cesta de algodón.`,
    camara: {
      a: "PLANO MEDIO de los tres sentados en la orilla, con el abuelo callado y las niñas quietas.",
      b: "la cámara ha DESCENDIDO hasta la cesta, que está en tierra y lejos del borde: PLANO MACRO de una mano arrancando un copo de algodón en rama de la cesta, sin nadie más en cuadro.",
    },
    ini: "los tres están sentados y nadie habla.",
    fin: "de muy cerca, la mano ha sacado un copo de la cesta y lo sostiene en el aire, con la cesta de algodón llenando el resto del cuadro.",
  }, "llanto, enfado, adultos regañando, aureolas"),
  esc("b9b", [ref("copo_algodon"), ref("rio_prueba")], {
    comun: "Luz de tarde sobre EL MISMO tramo de río de la referencia. EL SEGUNDO COPO HACE LO MISMO QUE EL PRIMERO: gira, choca contra una piedra, se hunde y vuelve a salir más abajo. ESTE PAR REPITE EXACTAMENTE el encuadre y el movimiento de cámara de la escena b6a, porque la simetría es el mito. Objeto ancla: el copo en el agua.",
    camara: {
      a: "PLANO MACRO del copo blanco entrando en el agua y empezando a girar entre las piedras, EXACTAMENTE el mismo encuadre que en la escena b6a.",
      b: "la cámara ha ACOMPAÑADO al copo río abajo y ha subido: PLANO GENERAL en picado del tramo entero, con el copo saliendo a flote en el ensanche de más abajo.",
    },
    ini: "el copo entra en el agua y da la primera vuelta, igual que el otro.",
    fin: "desde arriba se ve el tramo completo: el copo chocó contra la piedra, se hundió en los remolinos y ha vuelto a salir entero en el ensanche de abajo. Hizo exactamente lo mismo.",
  }, "personas, magia, resplandor, texto o simbolos en el agua"),

  // b10 — «Una señal necesita quien la interprete». (CITA)
  escp("b10a", [ref("chiguachi_nina"), ref("quiquitzua_nina"), ref("rio_prueba")], {
    comun: `Luz de tarde. ${NINA_CHICA} preguntando si ninguna de ellas será gobernante y ${NINA_MAYOR} respondiendo que una señal necesita quien la interprete. La respuesta DESPLAZA la pregunta: no la contesta. Objeto ancla: las dos caras.`,
    camara: {
      a: "PLANO MEDIO LARGO de las dos a media distancia, sentadas y de espaldas al agua, con la pequeña preguntando.",
      b: "la cámara ha hecho un PANEO LATERAL hasta la otra y ha retrocedido: PLANO GENERAL a media distancia de las dos de espaldas al agua, con la mayor contestando.",
    },
    ini: "la pequeña pregunta mirando de frente.",
    fin: "la mayor ha contestado y las dos, a media distancia y de espaldas, se quedan sentadas: nadie ha dicho que sí ni que no.",
  }, "aureolas, profecia, señales en el cielo, coronacion, texto"),
  esc("b10b", [ref("rio_prueba"), ref("copo_algodon"), ref("sendero_territorio")], {
    comun: "Última luz de la tarde sobre el río. Volvieron a casa y, al mirar atrás, la luz hacía brillar el agua en un solo punto, como si algo se hubiera quedado flotando sin hundirse, esperando que alguien lo levantara. NO es un anuncio ni una profecía: es un punto de luz en el agua. Objeto ancla: ese punto brillante.",
    camara: {
      a: "PLANO GENERAL desde el sendero, de espaldas a las tres figuras que se alejan, con el río abajo.",
      b: "la cámara se ha girado y ha AVANZADO río arriba hasta el punto brillante: PLANO MACRO de la superficie con un copo blanco flotando entero, sin hundirse, y nadie alrededor.",
    },
    ini: "los tres se alejan por el sendero y en el agua brilla un punto pequeño.",
    fin: "de cerca, en ese punto hay un copo de algodón flotando entero sobre la corriente, sin deshacerse y sin que ninguna mano lo recoja.",
  }, "personas, manos, aureola, resplandor, texto, simbolos, corona"),
]);
