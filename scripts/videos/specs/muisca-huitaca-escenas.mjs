// Keyframes de Huitaca — 9 bloques × 2 escenas × 2 cuadros = 36 imágenes ≈ 90 s.
// Guion: docs/videos/muiscas/mvp-guiones/guion-huitaca-v3.json (N=9)
// Acta:  docs/videos/muiscas/actas/acta-huitaca.json          (18 nudos)
// DOCTRINA v3: cada escena es un par A→B (ver _muisca-comun.mjs).
//
// LO MÍTICO SE MUESTRA. La primera vuelta confundió «no inventar iconografía»
// con «no mostrar el mito» y apagó el prodigio: la transformación quedó en un
// pedazo de antebrazo. El deslinde real es otro: no se inventan símbolos
// ajenos a la fuente, pero LO QUE LA FUENTE SÍ DICE —los brazos cubriéndose de
// plumas, los pies vueltos garras— se ve entero y grande. En el par b6b eso se
// reparte: A es el cambio empezado y B es el cambio consumado.
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · Huitaca NO ES REFUTADA. Bochica no responde: levanta la mano.
// · Ella NO predica el desorden: el maíz YA ESTÁ en la troja.
// · La siguen MÁS que al maestro, y no por hechizo.
// · La lechuza NO es mal agüero: unos apagan los cantos y otros los encienden.
// · El cierre NO la deja vencida: vigila el límite que ella misma cruzó.
//
// DESLINDE DE TRATO: la transformación se muestra como PÉRDIDA, no como
// escarmiento gozoso. Se la ve cambiar sin sexualizarla y sin monstruificarla.

import { DIRECCION, AVOID_BASE, ref, esc, escp, armar } from "./_muisca-comun.mjs";

export const SPEC_NAME = "muisca-huitaca-escenas";
export const OUT_DIR = "muiscas/videos/huitaca/keyframes";
export { DIRECCION };

export const SHARED_AVOID =
  AVOID_BASE + "; brujas, hechiceras, calderos, pentagramas o simbolos magicos inventados; bailes frenéticos, vomito, cuerpos tirados o degradacion por embriaguez; monstruo, demonio, criatura de terror, carne desgarrada; demonizar a la mujer o pintarla como tentadora; aureolas, halos y rayos dibujados";

export const PALETTE =
  "azul profundo de noche de altiplano, plata de luna, naranja de fogon, crema de algodon crudo, pardos de barro y paja; el ocre del maiz en la troja; sin saturacion ni neones";

// CONTINUIDAD: rasgos fijos que se repiten en cada cuadro donde salen.
const HUITACA =
  "LA MISMA Huitaca de la referencia (joven, rostro ancho y sereno, pelo negro suelto hasta la cintura, manta cruda al hombro izquierdo sobre la rodilla, descalza)";
const BOCHICA =
  "EL MISMO Bochica de la referencia (anciano, barba blanca al pecho, pelo gris con cinta, manta cruda al hombro, descalzo)";

export const ITEMS = armar([
  // b1 — Una mujer que caminaba de noche con la luna encima.
  escp("b1a", [ref("huitaca_mujer"), ref("altiplano_noche")], {
    comun: `PLANO GENERAL LARGO, luz de luna llena alta y plateada. ${HUITACA} viene caminando hacia la cámara por un camino de tierra del MISMO altiplano nocturno de la referencia, de cuerpo entero, con la luna de papel grande y exactamente encima de ella. Capa de primer plano: pasto alto en sombra. Objeto ancla: la luna sobre su cabeza.`,
    ini: "está todavía lejos, pequeña en el camino, y le queda trecho por delante y por detrás.",
    fin: "avanzó hasta media distancia y se la ve claramente más grande en el cuadro, con el pelo y la manta ondeando y el pasto del borde mecido.",
  }, "resplandor en el cuerpo, estela magica, levitacion, capa larga, desnudez"),
  escp("b1b", [ref("huitaca_mujer"), ref("casa_barro_paja")], {
    comun: `PLANO MEDIO, luz de luna lateral azulada y una brasa naranja dentro del bohío. ${HUITACA} está llegando a la entrada del MISMO bohío de la referencia. No llama ni pide permiso. Capa de primer plano: el canto del marco de madera. Objeto ancla: su mano derecha.`,
    ini: "tiene el cuerpo de perfil en movimiento y la mano derecha subiendo hacia el marco sin tocarlo todavía.",
    fin: "apoyó la mano en el marco y giró la cabeza hacia el interior, con el humo de la brasa subiendo detrás de ella.",
  }, "gestos de seduccion, sonrisa insinuante, ojos brillantes, humo magico, desnudez"),

  // b2 — Habló de una vida más ancha. Soltaron tambores y azadas.
  escp("b2a", [ref("huitaca_mujer"), ref("plaza_fiesta_noche"), ref("familias_muiscas")], {
    comun: `PLANO MEDIO LARGO, luz naranja de fogón que crece desde abajo. ${HUITACA} está de pie en LA MISMA plaza de la referencia, hablando; alrededor, gente de LAS MISMAS familias de la referencia. Habla, no baila. Capa de primer plano: hombros en sombra. Objeto ancla: sus manos.`,
    ini: "los brazos le están subiendo desde el costado hacia la altura del pecho, la boca abriéndose, y el corro todavía se está sentando y volviéndose hacia ella.",
    fin: "terminó de abrir los brazos a la altura del pecho, todas las cabezas del corro están ya giradas hacia ella y las llamas del fogón crecieron.",
  }, "adoracion, gente arrodillada, baile frenetico, embriaguez, ebrios en el suelo"),
  escp("b2b", [ref("familias_muiscas"), ref("mazorca_abierta")], {
    comun: "PLANO MEDIO BAJO, luz cálida de fogón parpadeante. Un tambor de cuero en la tierra y una azada de palo apoyada contra una pared de barro; detrás, bien visible y LLENA hasta arriba, LA MISMA troja de mazorcas de la referencia. El trabajo ya está hecho: por eso se sueltan. Capa de primer plano: el parche del tambor. Objeto ancla: la troja llena al fondo.",
    ini: "el tambor acaba de ser soltado y rueda medio inclinado, y la azada resbala a punto de caer.",
    fin: "el tambor quedó tumbado y quieto de lado y la azada cayó atravesada en la tierra, con la luz del fogón latiendo sobre las dos.",
  }, "campos abandonados, cultivos secos, hambre, ruina"),

  // b3 — Las tejedoras se levantaron. Se llenaron plazas y caminos.
  escp("b3a", [ref("tejedora_alma"), ref("telar_marco")], {
    comun: "PLANO MEDIO, luz de umbral: azul de noche entrando por la puerta, naranja tenue por dentro. UNA MISMA tejedora de la referencia ante EL MISMO telar de la referencia, que queda con la trama a medias. Capa de primer plano: los hilos tensos. Objeto ancla: el hilo en su mano.",
    ini: "está medio sentada, pasando el peso a los pies, con el hilo tenso aún en la mano y la cara girando hacia la puerta.",
    fin: "se incorporó del todo y quedó de pie: el hilo se destensó y le cuelga de la mano, y los hilos del telar vibran detrás.",
  }, "telar roto, destrozos, panico, rostros extaticos"),
  escp("b3b", [ref("plaza_fiesta_noche"), ref("familias_muiscas")], {
    comun: "GRAN PLANO GENERAL en picado suave, noche con fogones repartidos. LA MISMA plaza de la referencia con gente de LAS MISMAS familias de la referencia y tres caminos que desembocan en ella desde el campo oscuro. La plaza es un charco de luz naranja dentro de la noche azul. Capa de primer plano: un techo de paja en sombra. Objeto ancla: las hileras que entran.",
    ini: "la plaza está a medio llenar y por los tres caminos siguen entrando hileras en marcha.",
    fin: "las hileras entraron casi enteras y la plaza quedó llena hasta los bordes, con los caminos ya casi vacíos detrás y los fogones latiendo.",
  }, "multitud desbordada, estampida, violencia"),

  // b4 — La siguieron más que al maestro. Bochica la buscó entre los cantos.
  escp("b4a", [ref("bochica_anciano"), ref("plaza_fiesta_noche")], {
    comun: `PLANO MEDIO, luz naranja de fiesta al fondo y azul de noche delante. ${BOCHICA} camina DE ESPALDAS hacia la plaza encendida, pequeño contra la luz; entre él y la plaza, siluetas de gente de espaldas que no se vuelve. Capa de primer plano: su hombro y su barba en sombra. Objeto ancla: su espalda contra la luz.`,
    ini: "está todavía lejos de la plaza, con buena parte del camino oscuro por delante.",
    fin: "se alejó hacia la luz y ahora se lo ve más pequeño y ya cerca del borde iluminado, con la barba y la manta ondeando y las siluetas moviéndose al ritmo del canto.",
  }, "vara dorada, aureola, rayos, gente adorandolo"),
  escp("b4b", [ref("huitaca_mujer"), ref("familias_muiscas"), ref("plaza_fiesta_noche")], {
    comun: `PLANO MEDIO CORTO, luz naranja pareja de fogón. ${HUITACA} está en el centro de un grupo de LAS MISMAS familias de la referencia, todos a la misma altura y con las caras iluminadas por el fuego. Ella no está elevada ni destacada por la luz. Capa de primer plano: dos cabezas de espaldas. Objeto ancla: las bocas.`,
    ini: "las bocas se están abriendo y las cabezas empiezan a inclinarse hacia el centro: el canto arranca.",
    fin: "todos cantan ya con la boca abierta y las cabezas se balancean juntas hacia el centro, con el fuego latiendo sobre las caras.",
  }, "ella elevada, halo, trono, culto, desnudez, poses insinuantes"),

  // b5 — «Nadie les enseñó a darles fiesta». (CITA)
  escp("b5a", [ref("bochica_anciano"), ref("huitaca_mujer")], {
    comun: `PLANO MEDIO de los dos, cámara a la altura de los ojos, DOS LUCES ENCONTRADAS: azul de luna desde la izquierda sobre él, naranja de fogón desde la derecha sobre ella. ${BOCHICA}. ${HUITACA}. Están de pie frente a frente, a la misma altura, separados por el eje del cuadro. Capa de primer plano: el borde oscuro entre las luces. Objeto ancla: el espacio vacío entre ellos.`,
    ini: "él acaba de terminar de hablar, con la boca cerrada, y ella toma aire para responder.",
    fin: "ella ha empezado a hablar con la boca abierta y él la escucha sin moverse, mientras el fogón latió y desplazó la línea entre las dos luces.",
  }, "pelea, gritos, dedos acusadores, ella mas baja, ella arrodillada"),
  escp("b5b", [ref("huitaca_mujer")], {
    comun: `PRIMER PLANO, luz naranja de fogón desde abajo. ${HUITACA}, de tres cuartos, con la mirada firme y sostenida hacia el otro lado del cuadro, sin desafío teatral ni burla. Es el argumento que nadie contesta y la imagen la trata con seriedad. Capa de primer plano: chispas fuera de foco. Objeto ancla: su mirada.`,
    ini: "la boca se le está abriendo en la primera palabra.",
    fin: "terminó la frase y cerró la boca sin bajar la mirada, con el pelo movido y una llamarada de chispas subiendo por detrás.",
  }, "sonrisa burlona, seduccion, ebriedad, lagrimas, ojos brillantes"),

  // b6 — Bochica levantó la mano. Plumas en los brazos, garras en los pies.
  escp("b6a", [ref("bochica_anciano")], {
    comun: `PLANO MEDIO CONTRAPICADO, el naranja del fogón siendo barrido por una luz blanca que entra desde arriba. ${BOCHICA} con el rostro en sombra dura, sin expresión legible y la boca cerrada. Capa de primer plano: el borde iluminado de su manta. Objeto ancla: la palma de su mano derecha.`,
    ini: "el brazo derecho le va subiendo, ya a la altura del hombro, con la palma abriéndose.",
    fin: "el brazo quedó alzado del todo por encima de la cabeza con la palma abierta, la luz blanca creció y borró el naranja, y la manta se levantó con el aire.",
  }, "rayos dibujados, vara dorada, rostro furioso legible, palabras, aureola"),
  escp("b6b", [ref("huitaca_mujer"), ref("lechuza_huitaca")], {
    comun: `PLANO ENTERO de ella, frontal, luz blanca dura virando a azul: ÉSTE ES EL PLANO CENTRAL DEL VIDEO y la transformación se ve ENTERA y grande. ${HUITACA} está de pie con los brazos abiertos en cruz; el rostro sigue siendo el suyo y mira al frente. Sigue siendo una mujer que se convierte, no un monstruo, y el tono es de pérdida. Capa de primer plano: el suelo de la plaza en sombra. Objeto ancla: los dos brazos.`,
    ini: "desde los hombros hasta los codos los brazos se le están cubriendo de plumón pardo y ocre de LA MISMA lechuza de la referencia, con las primeras plumas largas naciendo del borde inferior; los dedos de los pies descalzos empiezan a alargarse y curvarse.",
    fin: "las plumas cubrieron los dos brazos hasta las muñecas y de su borde inferior cuelgan ya alas largas a medio formar, los dedos de los pies se cerraron en garras curvas sobre el suelo y la manta le resbaló del hombro; la cara sigue siendo la suya y mira al frente.",
  }, "monstruo, criatura de terror, sangre, carne desgarrada, hueso, rostro deformado, grito de agonia, desnudez, solo una mano o un antebrazo en cuadro"),

  // b7 — Donde había estado la mujer quedó una lechuza.
  esc("b7a", [ref("lechuza_huitaca"), ref("plaza_fiesta_noche")], {
    comun: "PLANO MEDIO, luz azul fría: los fogones acaban de apagarse y aún humean. LA MISMA lechuza de la referencia posada en el suelo de LA MISMA plaza de la referencia exactamente donde estaba la mujer, rodeada de un círculo de suelo vacío; alrededor y en sombra, instrumentos recién soltados. Capa de primer plano: un tambor caído en sombra. Objeto ancla: la lechuza sola en el centro.",
    ini: "tiene las alas todavía a medio plegar y la cabeza de frente.",
    fin: "plegó las alas del todo contra el cuerpo y giró la cabeza hacia un lado, con el humo de los fogones subiendo detrás.",
  }, "personas en cuadro, sangre, ropa tirada, ojos rojos"),
  esc("b7b", [ref("lechuza_huitaca"), ref("altiplano_noche")], {
    comun: "PLANO GENERAL, luz de luna azul. LA MISMA lechuza de la referencia levantando el vuelo hacia la noche del MISMO altiplano de la referencia, vista de atrás, con la plaza apagada quedando abajo y todo el cielo nocturno libre por delante. Capa de primer plano: el filo de un techo de paja. Objeto ancla: las alas contra la luna.",
    ini: "va todavía baja, con las alas abiertas en el primer batido.",
    fin: "subió hasta media altura del cuadro y se la ve más pequeña y más lejos, con las alas en un batido nuevo y las nubes de papel corriendo detrás.",
  }, "rostro humano en el ave, ojos brillantes, estela magica, personas"),

  // b8 — Ronda las casas donde se baila. Unos apagan, otros encienden.
  esc("b8a", [ref("lechuza_huitaca"), ref("casa_barro_paja")], {
    comun: "PLANO MEDIO, noche azul con una sola ventana naranja abajo. LA MISMA lechuza de la referencia sobre el caballete del MISMO bohío de la referencia, con el techo de paja ocupando la diagonal. Capa de primer plano: la paja del alero. Objeto ancla: la lechuza sobre el caballete.",
    ini: "acaba de posarse y tiene las alas aún abiertas cerrándose, con la cabeza girando hacia abajo.",
    fin: "plegó las alas del todo y quedó mirando de lleno hacia la casa, con la luz de la ventana latiendo debajo.",
  }, "personas, ataque, sangre, calaveras, simbolos de mal agüero"),
  esc("b8b", [ref("casa_barro_paja"), ref("plaza_fiesta_noche")], {
    comun: "PLANO GENERAL nocturno con DOS CASAS a la vez, misma distancia y misma noche. Las dos reacciones en el mismo cuadro, sin que ninguna se vea mejor que la otra. Capa de primer plano: el camino oscuro entre las dos. Objeto ancla: las dos puertas.",
    ini: "en la de la izquierda alguien está cerrando la puerta y el fogón baja; en la de la derecha la puerta está abierta, el fuego vivo y hay sombras bailando en el vano.",
    fin: "la puerta izquierda quedó cerrada y su luz apagada del todo, mientras en la derecha las sombras siguen bailando en el vano encendido.",
  }, "una casa buena y otra mala, castigo, ruina, lechuza en cuadro"),

  // b9 — No dice cuál es su mensaje: sólo llama. Vigila el límite.
  esc("b9a", [ref("lechuza_huitaca")], {
    comun: "PRIMER PLANO del ave, luz de luna plateada y frontal. LA MISMA lechuza de la referencia de frente, AVE COMPLETA posada en una rama con las alas plegadas y las garras agarradas a la madera: no tiene torso humano, ni hombros, ni brazos, ni manta. Los ojos, abiertos y neutros, no dejan leer amenaza ni bondad. Capa de primer plano: la rama. Objeto ancla: los dos ojos.",
    ini: "está abriendo el pico para llamar.",
    fin: "tiene el pico abierto del todo en el llamado y el pecho hinchado, con las plumas del cuello erizadas.",
  }, "torso humano, hombros, brazos, manos, mujer con cabeza de ave, hibrido, ropa sobre el ave, ojos rojos, sangre"),
  esc("b9b", [ref("altiplano_noche"), ref("lechuza_huitaca"), ref("sabana_cultivos")], {
    comun: "GRAN PLANO GENERAL final, luna alta sobre EL MISMO altiplano nocturno de la referencia, partido en dos por la luz: a un lado LOS MISMOS cultivos de la referencia en sombra azul y dormidos, al otro el resplandor naranja de una plaza que todavía canta; justo en el filo entre los dos, pequeña pero nítida, LA MISMA lechuza de la referencia posada en un poste. Capa de primer plano: el poste en sombra. Objeto ancla: el ave en el límite.",
    ini: "tiene la cabeza vuelta hacia el lado dormido.",
    fin: "giró la cabeza hacia el lado encendido, cuyo resplandor latió, mientras la niebla corre por el valle dormido.",
  }, "personas, texto, simbolos, balanza, alegorias explicitas"),
]);
