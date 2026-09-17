// Keyframes de escena de Huitaca — 9 bloques × 2 = 18 cuadros ≈ 90 s.
// Guion: docs/videos/muiscas/mvp-guiones/guion-huitaca-v3.json (N=9)
// Acta:  docs/videos/muiscas/actas/acta-huitaca.json          (18 nudos)
//
// DOCTRINA v2 — tres reglas que se suman a las de bochica
// (ESCALA + LUZ + OBJETO ANCLA + CAPA DE PRIMER PLANO + anclaje de identidad).
//
// 1. PLANO INICIAL. Este cuadro NO es una ilustración: es el `start_image` que
//    un modelo de video animará durante 5 s (ver movimiento-v4.json de bochica:
//    prompt por tramos 0-2 / 2-4 / 4-5 s más un travelling). Por eso cada
//    escena describe el instante en que la acción EMPIEZA, nunca su resultado,
//    y deja aire en la dirección hacia la que algo va a moverse. Cada escena
//    declara además SE MOVERÁ: qué elemento tiene que poder animarse. Quedan
//    prohibidos los macros sin nada vivo dentro y los estados terminales.
//
// 2. LO MÍTICO SE MUESTRA. La primera vuelta confundió «no inventar
//    iconografía» con «no mostrar el mito» y apagó el prodigio: la
//    transformación quedó en un pedazo de antebrazo y el momento central del
//    relato se volvió invisible. El deslinde real es otro: no se inventan
//    símbolos ajenos a la fuente, pero LO QUE LA FUENTE SÍ DICE —los brazos
//    cubriéndose de plumas, los pies vueltos garras— se ve entero y grande.
//
// 3. CONTINUIDAD DE PERSONAJE. En cada cuadro donde aparece se repiten sus
//    rasgos fijos, no sólo la referencia.
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

export const SPEC_NAME = "muisca-huitaca-escenas";
export const OUT_DIR = "muiscas/videos/huitaca/keyframes";

export const SHARED_AVOID =
  "texto, letras, logos, marcas de agua, marcos o bordes; CGI, render 3D o ilustracion digital pulida; miniatura tilt-shift; maqueta de plastilina, arcilla o resina; terreno o vegetacion modelados en 3D; desenfoque fotografico de poca profundidad de campo; cielo fotografico o en degradado liso; rasgos europeos en cualquier persona; sandalias, calzado, tunicas blancas largas o ropa que no sea la manta muisca de las referencias; coronas, tronos, templos europeos o cruces; piramides, penachos o iconografia mesoamericana; grecas, meandros o cenefas decorativas repetidas; joyeria inventada u oro en el cuerpo; desnudez, escotes, ropa ajustada, poses sexualizadas o insinuantes; brujas, hechiceras, calderos, pentagramas o simbolos magicos inventados; bailes frenéticos, vomito, cuerpos tirados o degradacion por embriaguez; monstruo, demonio, criatura de terror, sangre, carne desgarrada; cambiar los rostros, mantas o materiales de los personajes de referencia; demonizar a la mujer o pintarla como tentadora";

export const DIRECCION =
  "cada cuadro es el PRIMER FOTOGRAMA de un clip de 5 s que animará un modelo de video: la acción está empezando y no terminada, y la composición deja aire en la dirección del movimiento. Cada escena declara SE MOVERÁ: eso es lo que tiene que poder animarse.";

export const PALETTE =
  "azul profundo de noche de altiplano, plata de luna, naranja de fogon, crema de algodon crudo, pardos de barro y paja; el ocre del maiz en la troja; sin saturacion ni neones";

// CONTINUIDAD: rasgos fijos que se repiten en cada cuadro donde salen.
const HUITACA =
  "LA MISMA Huitaca de la referencia (joven, rostro ancho y sereno, pelo negro suelto hasta la cintura, manta cruda al hombro izquierdo sobre la rodilla, descalza)";
const BOCHICA =
  "EL MISMO Bochica de la referencia (anciano, barba blanca al pecho, pelo gris con cinta, manta cruda al hombro, descalzo)";

const VESTUARIO =
  " Vestuario de los demás: manta de algodón crudo lisa anudada a un hombro y por encima de la rodilla, todos los pies descalzos, sin cenefas ni joyas.";

const B = "muiscas/biblia";
const kf = (id, refs, scene, avoid) => ({ id, kind: "keyframe", preset: "vertical", refs, scene, avoid });
const kfp = (id, refs, scene, avoid) => ({ id, kind: "keyframe", preset: "vertical", refs, scene: scene + VESTUARIO, avoid });

export const ITEMS = [
  // b1 — Una mujer que caminaba de noche con la luna encima.
  kfp("b1a", [`${B}/huitaca_mujer`, `${B}/altiplano_noche`],
    `PLANO GENERAL LARGO, luz de luna llena alta y plateada. ${HUITACA}. Viene caminando hacia la cámara por un camino de tierra del MISMO altiplano nocturno de la referencia, de cuerpo entero y todavía lejos, con la luna de papel grande y exactamente encima de ella. Queda camino por delante y por detrás. SE MOVERÁ: ella avanza hacia cámara, su pelo y su manta ondean, el pasto del borde se mece. Capa de primer plano: pasto alto en sombra. Objeto ancla: la luna sobre su cabeza.`,
    "resplandor en el cuerpo, estela magica, levitacion, capa larga, desnudez, ella detenida"),
  kfp("b1b", [`${B}/huitaca_mujer`, `${B}/casa_barro_paja`],
    `PLANO MEDIO, luz de luna lateral azulada y una brasa naranja dentro del bohío. ${HUITACA}. Está llegando a la entrada del MISMO bohío de la referencia: el cuerpo aún de perfil en movimiento y la mano derecha subiendo hacia el marco de madera SIN tocarlo todavía. No llama ni pide permiso. SE MOVERÁ: la mano termina de apoyarse, la cabeza gira hacia el interior, el humo de la brasa sube. Capa de primer plano: el canto del marco. Objeto ancla: la mano a medio camino del marco.`,
    "gestos de seduccion, sonrisa insinuante, ojos brillantes, humo magico, desnudez"),

  // b2 — Habló de una vida más ancha. Soltaron tambores y azadas.
  kfp("b2a", [`${B}/huitaca_mujer`, `${B}/plaza_fiesta_noche`, `${B}/familias_muiscas`],
    `PLANO MEDIO LARGO, luz naranja de fogón que crece desde abajo. ${HUITACA}. Está de pie en LA MISMA plaza de la referencia empezando a hablar: los brazos subiendo desde el costado hacia la altura del pecho, la boca abriéndose. Alrededor, gente de LAS MISMAS familias de la referencia que todavía se está sentando y volviéndose hacia ella. Habla, no baila. SE MOVERÁ: sus brazos terminan de abrirse, las cabezas del corro giran hacia ella, las llamas del fogón crecen. Capa de primer plano: hombros en sombra. Objeto ancla: sus manos subiendo.`,
    "adoracion, gente arrodillada, baile frenetico, embriaguez, ebrios en el suelo, brazos ya abiertos del todo"),
  kfp("b2b", [`${B}/familias_muiscas`, `${B}/mazorca_abierta`],
    `PLANO MEDIO BAJO, luz cálida de fogón parpadeante. Un tambor de cuero acaba de ser soltado y rueda medio inclinado en la tierra, y una azada de palo resbala apoyada contra una pared de barro a punto de caer; detrás, bien visible y LLENA hasta arriba, LA MISMA troja de mazorcas de la referencia. El trabajo ya está hecho: por eso se sueltan. SE MOVERÁ: el tambor acaba de rodar, la azada resbala y cae, la luz del fogón late. Capa de primer plano: el parche del tambor. Objeto ancla: la troja llena al fondo.`,
    "campos abandonados, cultivos secos, hambre, ruina, objetos ya quietos en el suelo"),

  // b3 — Las tejedoras se levantaron. Se llenaron plazas y caminos.
  kfp("b3a", [`${B}/tejedora_alma`, `${B}/telar_marco`],
    `PLANO MEDIO, luz de umbral: azul de noche entrando por la puerta, naranja tenue por dentro. UNA MISMA tejedora de la referencia empezando a levantarse del MISMO telar de la referencia: todavía medio sentada, el peso pasando a los pies, el hilo tenso aún en la mano y la cara girando hacia la puerta. El telar queda con la trama a medias. SE MOVERÁ: ella termina de incorporarse, el hilo se destensa, los hilos del telar vibran. Capa de primer plano: los hilos tensos. Objeto ancla: el hilo en su mano.`,
    "telar roto, destrozos, panico, rostros extaticos, mujer ya de pie"),
  kfp("b3b", [`${B}/plaza_fiesta_noche`, `${B}/familias_muiscas`],
    `GRAN PLANO GENERAL en picado suave, noche con fogones repartidos. LA MISMA plaza de la referencia llenándose: ya hay gente de LAS MISMAS familias de la referencia dentro y por los tres caminos que desembocan siguen entrando hileras desde el campo oscuro, todas en marcha. La plaza es un charco de luz naranja dentro de la noche azul y aún le queda sitio. SE MOVERÁ: las hileras avanzan por los caminos y la plaza se llena, los fogones laten. Capa de primer plano: un techo de paja en sombra. Objeto ancla: las hileras entrando.`,
    "multitud desbordada, estampida, violencia, plaza ya llena y quieta"),

  // b4 — La siguieron más que al maestro. Bochica la buscó entre los cantos.
  kfp("b4a", [`${B}/bochica_anciano`, `${B}/plaza_fiesta_noche`],
    `PLANO MEDIO, luz naranja de fiesta al fondo y azul de noche delante. ${BOCHICA}. Camina DE ESPALDAS hacia la plaza encendida, todavía lejos de ella, pequeño contra la luz; entre él y la plaza, siluetas de gente de espaldas que no se vuelve. SE MOVERÁ: él sigue alejándose hacia la luz, la barba y la manta ondean, las siluetas se mueven al ritmo del canto. Capa de primer plano: su hombro y su barba en sombra. Objeto ancla: su espalda contra la luz.`,
    "vara dorada, aureola, rayos, gente adorandolo, el ya llegado a la plaza"),
  kfp("b4b", [`${B}/huitaca_mujer`, `${B}/familias_muiscas`, `${B}/plaza_fiesta_noche`],
    `PLANO MEDIO CORTO, luz naranja pareja de fogón. ${HUITACA}. Está en el centro de un grupo de LAS MISMAS familias de la referencia que empiezan a cantar con ella: bocas abriéndose, cabezas inclinándose hacia el centro, todos a la misma altura y con las caras iluminadas por el fuego. Ella no está elevada ni destacada por la luz. SE MOVERÁ: el canto arranca, las cabezas se balancean, el fuego late. Capa de primer plano: dos cabezas de espaldas. Objeto ancla: las bocas empezando a cantar.`,
    "ella elevada, halo, trono, culto, desnudez, poses insinuantes"),

  // b5 — «Nadie les enseñó a darles fiesta». (CITA)
  kfp("b5a", [`${B}/bochica_anciano`, `${B}/huitaca_mujer`],
    `PLANO MEDIO de los dos, cámara a la altura de los ojos, DOS LUCES ENCONTRADAS: azul de luna desde la izquierda sobre él, naranja de fogón desde la derecha sobre ella. ${BOCHICA}. ${HUITACA}. Están de pie frente a frente, a la misma altura, separados por el eje del cuadro; él acaba de terminar de hablar y ella toma aire para responder. SE MOVERÁ: ella empieza a hablar, las dos mantas ondean, el fogón late y desplaza la línea entre las dos luces. Capa de primer plano: el borde oscuro entre las luces. Objeto ancla: el espacio vacío entre ellos.`,
    "pelea, gritos, dedos acusadores, ella mas baja, ella arrodillada"),
  kfp("b5b", [`${B}/huitaca_mujer`],
    `PRIMER PLANO, luz naranja de fogón desde abajo. ${HUITACA}. De tres cuartos, empezando a responder: la boca abriéndose en la primera palabra, la mirada firme y sostenida hacia el otro lado del cuadro, sin desafío teatral ni burla. Es el argumento que nadie contesta y la imagen la trata con seriedad. SE MOVERÁ: ella habla, el pelo se mueve, las chispas suben por detrás. Capa de primer plano: chispas fuera de foco. Objeto ancla: su mirada firme.`,
    "sonrisa burlona, seduccion, ebriedad, lagrimas, ojos brillantes, boca cerrada"),

  // b6 — Bochica levantó la mano. Plumas en los brazos, garras en los pies.
  kfp("b6a", [`${B}/bochica_anciano`],
    `PLANO MEDIO CONTRAPICADO, el naranja del fogón empezando a ser barrido por una luz blanca que entra desde arriba. ${BOCHICA}. Su brazo derecho va SUBIENDO, ya a la altura del hombro y con la palma abriéndose, camino de lo alto; el rostro queda en sombra dura y no se le lee la expresión, la boca cerrada. SE MOVERÁ: el brazo termina de subir, la luz blanca crece y borra el naranja, la manta se levanta con el aire. Capa de primer plano: el borde iluminado de su manta. Objeto ancla: la palma abriéndose.`,
    "rayos dibujados, vara dorada, rostro furioso legible, palabras, aureola, brazo ya arriba del todo"),
  kfp("b6b", [`${B}/huitaca_mujer`, `${B}/lechuza_huitaca`],
    `PLANO ENTERO de ella, frontal, luz blanca dura virando a azul: ESTE ES EL PLANO CENTRAL DEL VIDEO y la transformación se ve ENTERA. ${HUITACA}. Está de pie con los brazos abiertos en cruz y el cambio ya empezado y perfectamente legible en todo el cuerpo: desde los hombros hasta las muñecas los brazos se están cubriendo de plumón pardo y ocre de LA MISMA lechuza de la referencia, con plumas largas naciendo del borde inferior de los dos brazos como alas todavía a medio formar; el rostro sigue siendo el suyo y mira al frente; los pies, descalzos, tienen ya los dedos alargándose y curvándose en garras. Sigue siendo una mujer que se convierte, no un monstruo. SE MOVERÁ: las plumas siguen brotando y cubriéndole los brazos, los dedos acaban de cerrarse en garra, la manta cae. Capa de primer plano: el suelo de la plaza en sombra. Objeto ancla: los dos brazos emplumándose.`,
    "monstruo, criatura de terror, sangre, carne desgarrada, hueso, rostro deformado, grito de agonia, desnudez, cuerpo ya convertido del todo, solo una mano o un antebrazo en cuadro"),

  // b7 — Donde había estado la mujer quedó una lechuza.
  kf("b7a", [`${B}/lechuza_huitaca`, `${B}/plaza_fiesta_noche`],
    `PLANO MEDIO, luz azul fría: los fogones acaban de apagarse y aún humean. LA MISMA lechuza de la referencia, ave entera con las alas todavía a medio plegar, posada en el suelo de LA MISMA plaza de la referencia exactamente donde estaba la mujer, rodeada de un círculo de suelo vacío. Alrededor y en sombra, instrumentos recién soltados. SE MOVERÁ: ella termina de plegar las alas y gira la cabeza, el humo de los fogones sube. Capa de primer plano: un tambor caído en sombra. Objeto ancla: la lechuza sola en el centro.`,
    "personas en cuadro, sangre, ropa tirada, ojos rojos, ave ya quieta"),
  kf("b7b", [`${B}/lechuza_huitaca`, `${B}/altiplano_noche`],
    `PLANO GENERAL, luz de luna azul. LA MISMA lechuza de la referencia levantando el vuelo hacia la noche del MISMO altiplano de la referencia, vista de atrás y todavía baja, con las alas abiertas en el primer batido y la plaza apagada quedando abajo; por delante de ella queda todo el cielo nocturno libre. SE MOVERÁ: ella sube y se aleja batiendo, las nubes de papel corren. Capa de primer plano: el filo de un techo de paja. Objeto ancla: las alas abiertas contra la luna.`,
    "rostro humano en el ave, ojos brillantes, estela magica, personas, ave ya lejos"),

  // b8 — Ronda las casas donde se baila. Unos apagan, otros encienden.
  kf("b8a", [`${B}/lechuza_huitaca`, `${B}/casa_barro_paja`],
    `PLANO MEDIO, noche azul con una sola ventana naranja abajo. LA MISMA lechuza de la referencia acabando de posarse en el caballete del MISMO bohío de la referencia: las alas aún abiertas cerrándose y la cabeza girando hacia abajo, hacia la casa. El techo de paja ocupa la diagonal. SE MOVERÁ: las alas terminan de plegarse, la cabeza gira del todo, la luz de la ventana late. Capa de primer plano: la paja del alero. Objeto ancla: la lechuza sobre el caballete.`,
    "personas, ataque, sangre, calaveras, simbolos de mal agüero, ave ya posada y quieta"),
  kf("b8b", [`${B}/casa_barro_paja`, `${B}/plaza_fiesta_noche`],
    `PLANO GENERAL nocturno con DOS CASAS a la vez, misma distancia y misma noche: la de la izquierda con alguien cerrando la puerta en ese instante y el fogón bajando; la de la derecha con la puerta abierta, el fuego vivo y sombras bailando en el vano. Las dos reacciones en el mismo cuadro, sin que ninguna se vea mejor. SE MOVERÁ: la puerta izquierda acaba de cerrarse y su luz se apaga, las sombras de la derecha siguen bailando. Capa de primer plano: el camino oscuro entre las dos. Objeto ancla: las dos puertas.`,
    "una casa buena y otra mala, castigo, ruina, lechuza en cuadro, ambas puertas ya quietas"),

  // b9 — No dice cuál es su mensaje: sólo llama. Vigila el límite.
  kf("b9a", [`${B}/lechuza_huitaca`],
    `PRIMER PLANO del ave, luz de luna plateada y frontal. LA MISMA lechuza de la referencia de frente, AVE COMPLETA posada en una rama con las alas plegadas y las garras agarradas a la madera: no tiene torso humano, ni hombros, ni brazos, ni manta. Está abriendo el pico para llamar y los ojos, abiertos y neutros, no dejan leer amenaza ni bondad. SE MOVERÁ: el pico se abre del todo en el llamado, el pecho se hincha, las plumas tiemblan. Capa de primer plano: la rama. Objeto ancla: los dos ojos.`,
    "torso humano, hombros, brazos, manos, mujer con cabeza de ave, hibrido, ropa sobre el ave, ojos rojos, sangre, pico cerrado"),
  kf("b9b", [`${B}/altiplano_noche`, `${B}/lechuza_huitaca`, `${B}/sabana_cultivos`],
    `GRAN PLANO GENERAL final, luna alta sobre el altiplano. EL MISMO altiplano nocturno de la referencia partido en dos por la luz: a un lado LOS MISMOS cultivos de la referencia en sombra azul y dormidos, al otro el resplandor naranja de una plaza que todavía canta; justo en el filo entre los dos, pequeña pero nítida, LA MISMA lechuza de la referencia posada en un poste, girando la cabeza de un lado al otro. SE MOVERÁ: la cabeza del ave gira del lado dormido al lado encendido, el resplandor de la plaza late, la niebla corre. Capa de primer plano: el poste en sombra. Objeto ancla: el ave en el límite.`,
    "personas, texto, simbolos, balanza, alegorias explicitas, ave de espaldas"),
];
