// Keyframes de Huitaca — 9 bloques × 2 escenas × 2 cuadros = 36 imágenes ≈ 90 s.
// Guion: guion-huitaca-v3.json (N=9) · Acta: acta-huitaca.json (18 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _muisca-comun.mjs).
//
// LO MÍTICO SE MUESTRA. La primera vuelta confundió «no inventar iconografía»
// con «no mostrar el mito» y dejó la transformación en un pedazo de antebrazo.
// El deslinde real: no se inventan símbolos ajenos a la fuente, pero lo que la
// fuente SÍ dice —los brazos cubriéndose de plumas, los pies vueltos garras—
// se ve entero y grande. En el par b6b eso se reparte: A es el cambio
// empezado y B es el cambio consumado.
//
// DESLINDES DEL ACTA:
// · Huitaca NO ES REFUTADA. Bochica no responde: levanta la mano.
// · Ella NO predica el desorden: el maíz YA ESTÁ en la troja.
// · La siguen MÁS que al maestro, y no por hechizo.
// · La lechuza NO es mal agüero: unos apagan los cantos y otros los encienden.
// · El cierre NO la deja vencida: vigila el límite que ella misma cruzó.
// · La transformación es PÉRDIDA, no escarmiento gozoso: se la ve cambiar sin
//   sexualizarla y sin monstruificarla.

import { DIRECCION, AVOID_BASE, ref, esc, escp, armar } from "./_muisca-comun.mjs";

export const SPEC_NAME = "muisca-huitaca-escenas";
export const OUT_DIR = "muiscas/videos/huitaca/keyframes";
export { DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; brujas, hechiceras, calderos, pentagramas o simbolos magicos inventados; bailes frenéticos, vomito, cuerpos tirados o degradacion por embriaguez; monstruo, demonio, criatura de terror, carne desgarrada; demonizar a la mujer o pintarla como tentadora; aureolas, halos y rayos dibujados";
export const PALETTE =
  "azul profundo de noche de altiplano, plata de luna, naranja de fogon, crema de algodon crudo, pardos de barro y paja; el ocre del maiz en la troja; sin saturacion ni neones";

const HUITACA =
  "LA MISMA Huitaca de la referencia (joven, rostro ancho y sereno, pelo negro suelto hasta la cintura, manta cruda al hombro izquierdo sobre la rodilla, descalza)";
const BOCHICA =
  "EL MISMO Bochica de la referencia (anciano, barba blanca al pecho, pelo gris con cinta, manta cruda al hombro, descalzo)";

export const ITEMS = armar([
  // b1 — Una mujer que caminaba de noche con la luna encima.
  escp("b1a", [ref("huitaca_mujer"), ref("altiplano_noche")], {
    comun: `Luz de luna llena alta y plateada. ${HUITACA} caminando por un camino de tierra del MISMO altiplano nocturno de la referencia, con la luna de papel grande y exactamente encima de ella. Objeto ancla: la luna sobre su cabeza.`,
    camara: {
      a: "PLANO GENERAL LARGO frontal, ella pequeña y lejos en el camino, con pasto alto en sombra en primer término.",
      b: "la cámara la ha DEJADO PASAR y la sigue desde detrás, a la altura del hombro: PLANO MEDIO de su espalda con el camino abriéndose delante y la luna al fondo.",
    },
    ini: "viene de frente y todavía está lejos, con camino por delante y por detrás.",
    fin: "ha pasado junto a la cámara y ahora se aleja de espaldas, con el pelo y la manta ondeando y la luna delante de ella al fondo del camino.",
  }, "resplandor en el cuerpo, estela magica, levitacion, capa larga, desnudez"),
  escp("b1b", [ref("huitaca_mujer"), ref("casa_barro_paja")], {
    comun: `Luz de luna lateral azulada y una brasa naranja dentro del bohío. ${HUITACA} en la entrada del MISMO bohío de la referencia. No llama ni pide permiso. Objeto ancla: el marco de madera.`,
    camara: {
      a: "PLANO MEDIO desde fuera, de perfil, con el canto del marco cruzando el primer término.",
      b: "la cámara ha ENTRADO en el bohío y mira hacia la puerta desde la penumbra: PLANO GENERAL del interior con ella recortada a contraluz en el vano y la brasa en primer término.",
    },
    ini: "tiene el cuerpo de perfil en movimiento y la mano derecha subiendo hacia el marco sin tocarlo.",
    fin: "ha cruzado el umbral y está dentro, vista desde el fondo del cuarto contra la luz azul de la puerta, con el humo de la brasa subiendo delante de ella.",
  }, "gestos de seduccion, sonrisa insinuante, ojos brillantes, humo magico, desnudez"),

  // b2 — Habló de una vida más ancha. Soltaron tambores y azadas.
  escp("b2a", [ref("huitaca_mujer"), ref("plaza_fiesta_noche"), ref("familias_muiscas")], {
    comun: `Luz naranja de fogón que crece desde abajo. ${HUITACA} de pie en LA MISMA plaza de la referencia, hablando; alrededor, gente de LAS MISMAS familias de la referencia. Habla, no baila. Objeto ancla: sus manos.`,
    camara: {
      a: "PLANO MEDIO LARGO frontal, ella en el centro y las cabezas del corro cortando el borde inferior.",
      b: "la cámara ha RODEADO el corro por detrás de la gente y se ha elevado: PICADO SUAVE desde fuera del círculo, con ella pequeña en el centro y todas las espaldas y nucas alrededor.",
    },
    ini: "los brazos le suben desde el costado hacia la altura del pecho y el corro todavía se está sentando.",
    fin: "desde arriba se ve que el corro se ha cerrado entero a su alrededor y que todas las cabezas están vueltas hacia ella, con las llamas del fogón crecidas.",
  }, "adoracion, gente arrodillada, baile frenetico, embriaguez, ebrios en el suelo"),
  escp("b2b", [ref("familias_muiscas"), ref("mazorca_abierta")], {
    comun: "Luz cálida de fogón parpadeante. Un tambor de cuero en la tierra y una azada de palo apoyada contra una pared de barro; detrás, bien visible y LLENA hasta arriba, LA MISMA troja de mazorcas de la referencia. El trabajo ya está hecho: por eso se sueltan. Objeto ancla: la troja llena.",
    camara: {
      a: "PLANO MACRO sobre el parche del tambor rodando, tan cerca que se ve el cuero y la costura.",
      b: "la cámara ha RETROCEDIDO y ha subido hasta un PLANO GENERAL del rincón: se ven el tambor caído, la azada en el suelo y, detrás, la troja entera llena de mazorcas hasta el techo.",
    },
    ini: "el tambor acaba de ser soltado y rueda medio inclinado.",
    fin: "el tambor ha quedado tumbado y quieto y la azada se ha caído atravesada; desde esta distancia se ve que la troja está llena hasta arriba y que nada se ha abandonado.",
  }, "campos abandonados, cultivos secos, hambre, ruina"),

  // b3 — Las tejedoras se levantaron. Se llenaron plazas y caminos.
  escp("b3a", [ref("tejedora_alma"), ref("telar_marco")], {
    comun: "Luz de umbral: azul de noche entrando por la puerta, naranja tenue por dentro. UNA MISMA tejedora de la referencia ante EL MISMO telar de la referencia, que queda con la trama a medias. Objeto ancla: el hilo en su mano.",
    camara: {
      a: "PLANO MACRO entre los hilos tensos del telar, con su mano sujetando el hilo en primer término.",
      b: "la cámara ha RETROCEDIDO atravesando el telar y ha girado: PLANO MEDIO desde el otro lado, con ella ya de pie y el telar abandonado en el borde del cuadro.",
    },
    ini: "está medio sentada, con el hilo tenso en la mano y la cara girando hacia la puerta.",
    fin: "se ha incorporado del todo y camina hacia la puerta: el hilo ha quedado colgando del telar y la trama a medias detrás de ella.",
  }, "telar roto, destrozos, panico, rostros extaticos"),
  escp("b3b", [ref("plaza_fiesta_noche"), ref("familias_muiscas")], {
    comun: "Noche con fogones repartidos. LA MISMA plaza de la referencia con gente de LAS MISMAS familias de la referencia y tres caminos que desembocan en ella desde el campo oscuro. La plaza es un charco de luz naranja dentro de la noche azul. Objeto ancla: las hileras que entran.",
    camara: {
      a: "PLANO MEDIO a la entrada de uno de los caminos, con la gente pasando muy cerca del objetivo hacia la plaza.",
      b: "la cámara ha SUBIDO muy alto hasta un PICADO sobre la plaza entera: se ven los tres caminos a la vez y la plaza llena de gente.",
    },
    ini: "por el camino entran los primeros y la plaza se adivina al fondo.",
    fin: "desde arriba la plaza ha quedado llena hasta los bordes y los tres caminos están ya casi vacíos detrás, con los fogones latiendo en el centro.",
  }, "multitud desbordada, estampida, violencia"),

  // b4 — La siguieron más que al maestro. Bochica la buscó entre los cantos.
  escp("b4a", [ref("bochica_anciano"), ref("plaza_fiesta_noche")], {
    comun: `Luz naranja de fiesta al fondo y azul de noche delante. ${BOCHICA} caminando DE ESPALDAS hacia la plaza encendida; entre él y la plaza, siluetas de gente de espaldas que no se vuelve. Objeto ancla: su espalda contra la luz.`,
    camara: {
      a: "PLANO MEDIO por detrás de él, muy cerca, con su hombro y su barba en sombra ocupando un lado del cuadro.",
      b: "la cámara se ha QUEDADO PARADA mientras él sigue andando y se ha elevado: PLANO GENERAL en el que él es una figura pequeña, ya casi en el borde de luz de la plaza, con mucha noche vacía entre la cámara y él.",
    },
    ini: "camina cerca del objetivo, todavía lejos de la plaza.",
    fin: "se ha alejado hasta el borde iluminado y se lo ve chiquito de espaldas contra el resplandor, con las siluetas moviéndose al ritmo del canto y la noche vacía detrás.",
  }, "vara dorada, aureola, rayos, gente adorandolo"),
  escp("b4b", [ref("huitaca_mujer"), ref("familias_muiscas"), ref("plaza_fiesta_noche")], {
    comun: `Luz naranja pareja de fogón. ${HUITACA} en el centro de un grupo de LAS MISMAS familias de la referencia, todos a la misma altura y con las caras iluminadas por el fuego. Ella no está elevada ni destacada por la luz. Objeto ancla: las bocas que cantan.`,
    camara: {
      a: "PLANO MEDIO CORTO con dos cabezas de espaldas en primer término y su cara entre ellas.",
      b: "la cámara ha hecho un GIRO ALREDEDOR del grupo hasta el lado opuesto: PLANO MEDIO desde el otro costado, con ella ahora de perfil y otras caras distintas iluminadas de frente.",
    },
    ini: "las bocas se están abriendo y las cabezas empiezan a inclinarse hacia el centro.",
    fin: "vistos desde el otro lado, todos cantan ya con la boca abierta y las cabezas se balancean juntas, ella entre ellos sin destacarse en nada.",
  }, "ella elevada, halo, trono, culto, desnudez, poses insinuantes"),

  // b5 — «Nadie les enseñó a darles fiesta». (CITA)
  escp("b5a", [ref("bochica_anciano"), ref("huitaca_mujer")], {
    comun: `DOS LUCES ENCONTRADAS: azul de luna desde la izquierda sobre él, naranja de fogón desde la derecha sobre ella. ${BOCHICA}. ${HUITACA}. De pie frente a frente, a la misma altura, separados por el eje del cuadro. Objeto ancla: el espacio vacío entre ellos.`,
    camara: {
      a: "PLANO MEDIO de los dos a la altura de los ojos, perfil contra perfil.",
      b: "la cámara ha AVANZADO hasta meterse en el hueco entre ellos y ha girado hacia ella: PLANO MEDIO CORTO desde el eje mismo, con él cortado por un borde y ella de frente en el otro.",
    },
    ini: "él acaba de terminar de hablar, con la boca cerrada, y ella toma aire.",
    fin: "desde el medio se ve a ella ya hablando de frente al objetivo y a él escuchando sin moverse, con la línea entre el azul y el naranja partiendo el cuadro.",
  }, "pelea, gritos, dedos acusadores, ella mas baja, ella arrodillada"),
  escp("b5b", [ref("huitaca_mujer")], {
    comun: `Luz naranja de fogón desde abajo. ${HUITACA} con la mirada firme y sostenida, sin desafío teatral ni burla. Es el argumento que nadie contesta y la imagen la trata con seriedad. Objeto ancla: su mirada.`,
    camara: {
      a: "PRIMER PLANO de tres cuartos, la cara llenando el cuadro y chispas fuera de foco delante.",
      b: "la cámara ha RETROCEDIDO y ha bajado hasta el suelo: PLANO ENTERO en contrapicado con ella de pie, pequeña contra la noche, y el fogón echando chispas a su lado.",
    },
    ini: "la boca se le está abriendo en la primera palabra.",
    fin: "ha terminado la frase sin bajar la mirada; desde lejos se la ve entera y sola de pie, con una llamarada de chispas subiendo detrás.",
  }, "sonrisa burlona, seduccion, ebriedad, lagrimas, ojos brillantes"),

  // b6 — Bochica levantó la mano. Plumas en los brazos, garras en los pies.
  escp("b6a", [ref("bochica_anciano")], {
    comun: `El naranja del fogón siendo barrido por una luz blanca que entra desde arriba. ${BOCHICA} con el rostro en sombra dura, sin expresión legible y la boca cerrada. Objeto ancla: la palma de su mano derecha.`,
    camara: {
      a: "PLANO MEDIO CONTRAPICADO desde abajo, con el brazo subiendo por el borde del cuadro.",
      b: "la cámara ha SUBIDO siguiendo la mano hasta por encima de él: PICADO desde arriba, mirando la palma abierta de frente y a él pequeño debajo.",
    },
    ini: "el brazo derecho le va subiendo, ya a la altura del hombro, con la palma abriéndose.",
    fin: "el brazo ha quedado alzado del todo y la palma abierta llena el centro del cuadro vista desde arriba, con la luz blanca habiendo borrado ya todo el naranja de abajo.",
  }, "rayos dibujados, vara dorada, rostro furioso legible, palabras, aureola"),
  escp("b6b", [ref("huitaca_mujer"), ref("lechuza_huitaca")], {
    comun: `Luz blanca dura virando a azul. ÉSTE ES EL PLANO CENTRAL DEL VIDEO y la transformación se ve ENTERA y grande. ${HUITACA} de pie con los brazos abiertos en cruz; el rostro sigue siendo el suyo y mira al frente. Sigue siendo una mujer que se convierte, no un monstruo, y el tono es de pérdida. Objeto ancla: los dos brazos.`,
    camara: {
      a: "PLANO ENTERO frontal a la altura del pecho, ella en el centro con el suelo de la plaza en sombra abajo.",
      b: "la cámara ha hecho un GIRO LENTO alrededor de ella y ha retrocedido a la altura del suelo: PLANO ENTERO en CONTRAPICADO desde un costado, con los brazos abiertos cruzando el cuadro entero y los pies grandes en primer término.",
    },
    ini: "desde los hombros hasta los codos los brazos se le están cubriendo de plumón pardo y ocre de LA MISMA lechuza de la referencia, con las primeras plumas largas naciendo del borde inferior; los dedos de los pies descalzos empiezan a alargarse.",
    fin: "vista desde abajo y de lado, las plumas le han cubierto los dos brazos hasta las muñecas y del borde inferior le cuelgan alas largas a medio formar que cruzan todo el cuadro; los dedos de los pies, enormes en primer término, se han cerrado en garras curvas sobre el suelo y la manta le ha resbalado del hombro. La cara sigue siendo la suya.",
  }, "monstruo, criatura de terror, sangre, carne desgarrada, hueso, rostro deformado, grito de agonia, desnudez, solo una mano o un antebrazo en cuadro"),

  // b7 — Donde había estado la mujer quedó una lechuza.
  esc("b7a", [ref("lechuza_huitaca"), ref("plaza_fiesta_noche")], {
    comun: "Luz azul fría: los fogones acaban de apagarse y aún humean. LA MISMA lechuza de la referencia posada en el suelo de LA MISMA plaza de la referencia exactamente donde estaba la mujer, rodeada de un círculo de suelo vacío; alrededor y en sombra, instrumentos recién soltados. Objeto ancla: la lechuza sola en el centro.",
    camara: {
      a: "PLANO MEDIO a ras de suelo, con un tambor caído enorme en primer término y el ave detrás de él.",
      b: "la cámara se ha ELEVADO en vertical hasta un CENITAL sobre la plaza: el ave es un punto pardo en medio de un círculo de suelo vacío, con los instrumentos tirados alrededor.",
    },
    ini: "tiene las alas todavía a medio plegar y la cabeza de frente.",
    fin: "desde arriba se ve que ha plegado las alas del todo y que el círculo vacío a su alrededor es perfecto: nadie se ha acercado, y el humo de los fogones sube por los bordes.",
  }, "personas en cuadro, sangre, ropa tirada, ojos rojos"),
  esc("b7b", [ref("lechuza_huitaca"), ref("altiplano_noche")], {
    comun: "Luz de luna azul. LA MISMA lechuza de la referencia levantando el vuelo hacia la noche del MISMO altiplano de la referencia, con la plaza apagada quedando abajo. Objeto ancla: las alas contra la luna.",
    camara: {
      a: "PLANO GENERAL desde el filo de un techo de paja, con el ave todavía baja y el techo en primer término.",
      b: "la cámara ha SUBIDO con ella hasta ponerse a su altura en el aire: PLANO MEDIO en vuelo, con el altiplano muy abajo y la luna al fondo.",
    },
    ini: "va todavía baja, con las alas abiertas en el primer batido sobre los tejados.",
    fin: "vuela ya alto y la cámara la acompaña a su lado: debajo se ve el poblado pequeño y apagado y delante el altiplano entero bajo la luna.",
  }, "rostro humano en el ave, ojos brillantes, estela magica, personas"),

  // b8 — Ronda las casas donde se baila. Unos apagan, otros encienden.
  esc("b8a", [ref("lechuza_huitaca"), ref("casa_barro_paja")], {
    comun: "Noche azul con una sola ventana naranja abajo. LA MISMA lechuza de la referencia sobre el caballete del MISMO bohío de la referencia. Objeto ancla: la lechuza sobre el caballete.",
    camara: {
      a: "PLANO MEDIO lateral a la altura del caballete, con la paja del alero cruzando el primer término.",
      b: "la cámara ha BAJADO por la pared hasta la ventana encendida y ha girado hacia arriba: CONTRAPICADO desde el suelo junto a la casa, con la ventana naranja grande en un lado y el ave pequeñísima en lo alto del caballete.",
    },
    ini: "acaba de posarse y tiene las alas aún abiertas cerrándose.",
    fin: "desde abajo se ve que ha plegado las alas y mira de lleno hacia la casa, mientras la ventana naranja late enorme en el primer término.",
  }, "personas, ataque, sangre, calaveras, simbolos de mal agüero"),
  esc("b8b", [ref("casa_barro_paja"), ref("plaza_fiesta_noche")], {
    comun: "DOS CASAS a la vez en la misma noche. Las dos reacciones en el mismo cuadro, sin que ninguna se vea mejor que la otra. Objeto ancla: las dos puertas.",
    camara: {
      a: "PLANO GENERAL frontal de las dos casas a la misma distancia, con el camino oscuro entre ellas.",
      b: "la cámara ha hecho un TRAVELLING por ese camino hasta pasar entre las dos: PLANO MEDIO desde el medio, con la puerta cerrada y oscura en un borde y el vano encendido en el otro.",
    },
    ini: "en la de la izquierda alguien está cerrando la puerta y el fogón baja; en la de la derecha la puerta está abierta y hay sombras bailando en el vano.",
    fin: "desde el medio del camino, la de la izquierda ha quedado cerrada y a oscuras y en la de la derecha las sombras siguen bailando en el vano encendido, una a cada lado del objetivo.",
  }, "una casa buena y otra mala, castigo, ruina, lechuza en cuadro"),

  // b9 — No dice cuál es su mensaje: sólo llama. Vigila el límite.
  esc("b9a", [ref("lechuza_huitaca")], {
    comun: "Luz de luna plateada y frontal. LA MISMA lechuza de la referencia, AVE COMPLETA posada en una rama con las garras agarradas a la madera: no tiene torso humano, ni hombros, ni brazos, ni manta. Los ojos, abiertos y neutros, no dejan leer amenaza ni bondad. Objeto ancla: los dos ojos.",
    camara: {
      a: "PLANO MEDIO del ave entera de frente sobre la rama, con la noche detrás.",
      b: "la cámara ha AVANZADO hasta quedar a un palmo de su cara: PRIMER PLANÍSIMO de la cabeza, con los dos ojos ocupando el centro del cuadro y el cuerpo fuera de campo.",
    },
    ini: "está abriendo el pico para llamar.",
    fin: "de muy cerca, tiene el pico abierto del todo en el llamado, las plumas del cuello erizadas y los ojos fijos en el objetivo sin expresión que se pueda leer.",
  }, "torso humano, hombros, brazos, manos, mujer con cabeza de ave, hibrido, ropa sobre el ave, ojos rojos, sangre"),
  esc("b9b", [ref("altiplano_noche"), ref("lechuza_huitaca"), ref("sabana_cultivos")], {
    comun: "Luna alta sobre EL MISMO altiplano nocturno de la referencia, partido en dos por la luz: a un lado LOS MISMOS cultivos de la referencia en sombra azul y dormidos, al otro el resplandor naranja de una plaza que todavía canta; justo en el filo entre los dos, LA MISMA lechuza de la referencia posada en un poste. Objeto ancla: el ave en el límite.",
    camara: {
      a: "PLANO MEDIO junto al poste, con el ave grande y los dos lados del valle desenfocados detrás.",
      b: "la cámara se ha ALEJADO y ha subido hasta un GRAN PLANO GENERAL final: el altiplano entero partido en dos por la luz y el ave diminuta pero nítida justo en el filo.",
    },
    ini: "tiene la cabeza vuelta hacia el lado dormido.",
    fin: "ha girado la cabeza hacia el lado encendido; desde lejos se ve el valle entero, la mitad dormida y la mitad en fiesta, y ella exactamente en la línea que las separa.",
  }, "personas, texto, simbolos, balanza, alegorias explicitas"),
]);
