// Keyframes de escena de Huitaca — 9 bloques × 2 = 18 cuadros ≈ 90 s.
// Guion: docs/videos/muiscas/mvp-guiones/guion-huitaca-v3.json (N=9)
// Acta:  docs/videos/muiscas/actas/acta-huitaca.json          (18 nudos)
//
// DOCTRINA (de `muisca-bochica-escenas`): cada escena declara ESCALA + LUZ +
// OBJETO ANCLA + CAPA DE PRIMER PLANO, y ancla identidad con EL MISMO / LA
// MISMA ... de la referencia.
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · Huitaca NO ES REFUTADA. La fuente le da un argumento y no lo contesta.
//   Bochica no responde: levanta la mano. El castigo llega donde faltó el
//   argumento, y la imagen del bloque 6 tiene que dejar eso visible.
// · Ella NO predica el desorden. Habla de una vida más ancha y el maíz YA ESTÁ
//   en la troja: su propuesta llega DESPUÉS del trabajo, no en lugar de él.
//   Por eso la troja llena aparece en cuadro.
// · La gente la sigue MÁS que al maestro, y no por engaño ni por hechizo.
//   Nada de ojos brillantes, humo, ni gestos de encantamiento.
// · La lechuza NO es mal agüero. Unos apagan los cantos, otros los encienden,
//   y ella no dice cuál es su mensaje. La ambigüedad se sostiene hasta el
//   final: el cuadro 8 muestra las dos reacciones a la vez.
// · El cierre NO la deja vencida: sigue vigilando el límite entre el trabajo
//   y la fiesta. Es la guardiana de la frontera que ella misma cruzó.
//
// DESLINDE DE TRATO: es una mujer que propone fiesta y termina castigada por
// un dios. NO se la sexualiza, no se la pinta ebria ni degradada, y la
// transformación no se narra como escarmiento gozoso. Se narra como pérdida.
//
// GUION DE LUZ: luna sobre el camino → fuego de plaza creciendo → umbral con
// telar a media luz → plaza llena de noche → dos luces encontradas → blanco
// duro del gesto → azul frío del después → noche partida en dos → luna alta.

export const SPEC_NAME = "muisca-huitaca-escenas";
export const OUT_DIR = "muiscas/videos/huitaca/keyframes";

export const SHARED_AVOID =
  "texto, letras, logos, marcas de agua, marcos o bordes; CGI, render 3D o ilustracion digital pulida; miniatura tilt-shift; maqueta de plastilina, arcilla o resina; terreno o vegetacion modelados en 3D; desenfoque fotografico de poca profundidad de campo; cielo fotografico o en degradado liso; rasgos europeos en cualquier persona; sandalias, calzado, tunicas blancas largas o ropa que no sea la manta muisca de las referencias; coronas, tronos, templos europeos o cruces; piramides, penachos o iconografia mesoamericana; grecas, meandros o cenefas decorativas repetidas; joyeria inventada u oro en el cuerpo; desnudez, escotes, ropa ajustada, poses sexualizadas o insinuantes; brujas, hechiceras, calderos, humo magico, ojos brillantes o resplandores en las manos; bailes frenéticos, vomito, cuerpos tirados o degradacion por embriaguez; cambiar los rostros, mantas o materiales de los personajes de referencia; demonizar a la mujer o pintarla como tentadora";

export const PALETTE =
  "azul profundo de noche de altiplano, plata de luna, naranja de fogon, crema de algodon crudo, pardos de barro y paja; el ocre del maiz en la troja; sin saturacion ni neones";

const VESTUARIO =
  " Vestuario: manta de algodón crudo lisa anudada a un hombro y por encima de la rodilla como en las referencias, todos los pies descalzos, sin cenefas ni joyas.";

const B = "muiscas/biblia";
const kf = (id, refs, scene, avoid) => ({ id, kind: "keyframe", preset: "vertical", refs, scene, avoid });
const kfp = (id, refs, scene, avoid) => ({ id, kind: "keyframe", preset: "vertical", refs, scene: scene + VESTUARIO, avoid });

export const ITEMS = [
  // b1 — Una mujer que caminaba de noche con la luna encima.
  kfp("b1a", [`${B}/huitaca_mujer`, `${B}/altiplano_noche`],
    "PLANO GENERAL LARGO, luz de luna llena alta y plateada. LA MISMA Huitaca de la referencia caminando sola por un camino de tierra del MISMO altiplano nocturno de la referencia, pequeña y de cuerpo entero, con la luna de papel grande y exactamente encima de ella en el eje del cuadro. Va tranquila, sin prisa ni sigilo. Capa de primer plano: pasto alto de borde en sombra. Objeto ancla: la luna sobre su cabeza.",
    "resplandor en el cuerpo, estela magica, levitacion, capa larga, desnudez"),
  kfp("b1b", [`${B}/huitaca_mujer`, `${B}/casa_barro_paja`],
    "PLANO MEDIO, luz de luna lateral azulada. LA MISMA Huitaca de la referencia parada en la entrada de UN MISMO bohío de la referencia, de perfil, con una mano apoyada en el marco de madera; no toca la puerta, no llama, no pide permiso: sólo está ahí y mira hacia adentro. Capa de primer plano: el canto del marco de la puerta. Objeto ancla: la mano apoyada en el marco.",
    "gestos de seduccion, sonrisa insinuante, ojos brillantes, humo, desnudez"),

  // b2 — Habló de una vida más ancha. Soltaron tambores y azadas.
  kfp("b2a", [`${B}/huitaca_mujer`, `${B}/plaza_fiesta_noche`, `${B}/familias_muiscas`],
    "PLANO MEDIO LARGO, luz naranja de fogón que crece desde abajo. LA MISMA Huitaca de la referencia hablando de pie en LA MISMA plaza de la referencia, con los brazos abiertos a la altura del pecho, y a su alrededor gente de LAS MISMAS familias de la referencia escuchando sentada y de pie. Habla, no baila; la escuchan, no la adoran. Capa de primer plano: hombros de los que escuchan en sombra. Objeto ancla: las manos abiertas de ella.",
    "adoracion, gente arrodillada, baile frenetico, embriaguez, ebrios en el suelo"),
  kfp("b2b", [`${B}/familias_muiscas`, `${B}/mazorca_abierta`],
    "PLANO DETALLE, luz cálida de fogón. Un tambor de cuero dejado de lado en el suelo y una azada de palo apoyada contra una pared de barro, las dos abandonadas a medio uso; al fondo y desenfocada por la sombra, LA MISMA troja de la referencia LLENA de mazorcas. El trabajo ya está hecho: esa es la razón, y tiene que verse. Capa de primer plano: el parche del tambor. Objeto ancla: la troja llena al fondo.",
    "campos abandonados, cultivos secos, hambre, ruina, desorden sucio"),

  // b3 — Las tejedoras se levantaron. Se llenaron plazas y caminos.
  kfp("b3a", [`${B}/tejedora_alma`, `${B}/telar_marco`],
    "PLANO MEDIO, luz de umbral: azul de noche entrando por la puerta y naranja tenue por dentro. UNA MISMA tejedora de la referencia levantándose del MISMO telar de la referencia, a medio gesto, con el hilo todavía en la mano y la mirada hacia la puerta. El telar queda con la trama a medias. Capa de primer plano: los hilos tensos del telar. Objeto ancla: el hilo suelto en su mano.",
    "telar roto, destrozos, prisa, panico, rostros extaticos"),
  kfp("b3b", [`${B}/plaza_fiesta_noche`, `${B}/familias_muiscas`],
    "GRAN PLANO GENERAL en picado suave, noche con fogones repartidos. LA MISMA plaza de la referencia llena de gente de LAS MISMAS familias de la referencia, y los caminos que llegan a ella también con hileras de gente viniendo desde el campo oscuro. La plaza es un charco de luz naranja dentro de la noche azul. Capa de primer plano: un techo de paja en sombra recortando el borde. Objeto ancla: los caminos que desembocan llenos.",
    "multitud desbordada, estampida, violencia, fuego descontrolado"),

  // b4 — La siguieron más que al maestro. Bochica la buscó entre los cantos.
  kfp("b4a", [`${B}/bochica_anciano`, `${B}/plaza_fiesta_noche`],
    "PLANO MEDIO, luz naranja de fiesta al fondo y azul de noche delante. EL MISMO Bochica anciano de la referencia caminando DE ESPALDAS hacia la plaza encendida, pequeño contra la luz, con la barba y la manta movidas; entre él y la plaza, siluetas de gente que no se vuelve a mirarlo. Nadie lo recibe. Capa de primer plano: su hombro y su barba en sombra. Objeto ancla: su espalda contra la luz de la fiesta.",
    "vara dorada, aureola, rayos, gente adorandolo, gestos de autoridad"),
  kfp("b4b", [`${B}/huitaca_mujer`, `${B}/familias_muiscas`, `${B}/plaza_fiesta_noche`],
    "PLANO MEDIO CORTO, luz naranja pareja. LA MISMA Huitaca de la referencia en el centro de un grupo de LAS MISMAS familias de la referencia que cantan con ella, todos a la misma altura y con las caras iluminadas por el fuego; ella no está elevada ni destacada por la luz, sólo está en el medio. Capa de primer plano: dos cabezas de espaldas. Objeto ancla: las bocas abiertas cantando.",
    "ella elevada, halo, trono, culto, desnudez, poses insinuantes"),

  // b5 — «Nadie les enseñó a darles fiesta». (CITA)
  kfp("b5a", [`${B}/bochica_anciano`, `${B}/huitaca_mujer`],
    "PLANO MEDIO de los dos, cámara a la altura de los ojos, DOS LUCES ENCONTRADAS: azul de luna desde la izquierda sobre EL MISMO Bochica de la referencia, naranja de fogón desde la derecha sobre LA MISMA Huitaca de la referencia. Están de pie frente a frente, a la misma altura, separados por el eje del cuadro. Ninguno de los dos gesticula. Capa de primer plano: el borde oscuro entre las dos luces. Objeto ancla: el espacio vacío entre ellos.",
    "pelea, gritos, dedos acusadores, ella inferior o mas baja, ella arrodillada"),
  kfp("b5b", [`${B}/huitaca_mujer`],
    "PRIMER PLANO MEDIO, luz naranja de fogón desde abajo. LA MISMA Huitaca de la referencia de tres cuartos respondiendo: la boca a medio hablar, la mirada firme y sostenida hacia el otro lado del cuadro, sin desafío teatral y sin burla. Es el argumento que nadie contesta, y la imagen la trata con seriedad. Capa de primer plano: chispas del fogón fuera de foco. Objeto ancla: su mirada firme.",
    "sonrisa burlona, seduccion, ebriedad, lagrimas, ojos brillantes"),

  // b6 — Bochica levantó la mano. Plumas en los brazos, garras en los pies.
  kfp("b6a", [`${B}/bochica_anciano`],
    "PLANO MEDIO CONTRAPICADO, luz blanca dura y repentina que borra el naranja. EL MISMO Bochica de la referencia con el brazo levantado y la palma abierta, visto desde abajo; el rostro queda en sombra dura y no se le lee la expresión. NO habla: la boca está cerrada. Fondo oscurecido de golpe. Capa de primer plano: el borde iluminado de su manta. Objeto ancla: la palma abierta.",
    "rayos, magia, vara dorada, rostro furioso legible, palabras, aureola"),
  kf("b6b", [`${B}/huitaca_mujer`, `${B}/lechuza_huitaca`],
    "PLANO DETALLE, luz blanca dura virando a azul. Un antebrazo de papel a medio camino: la piel de la parte de arriba todavía es piel y hacia la muñeca ya se ha vuelto plumón pardo de LA MISMA lechuza de la referencia, con las plumas naciendo entre las capas. Abajo en el cuadro, un pie cuyos dedos se están cerrando en garra. Sin rostro en cuadro. Capa de primer plano: la mano aún humana. Objeto ancla: la frontera entre piel y pluma.",
    "rostro de mujer en transformacion, grito, dolor extremo, sangre, cuerpo entero, desnudez"),

  // b7 — Donde había estado la mujer quedó una lechuza.
  kf("b7a", [`${B}/lechuza_huitaca`, `${B}/plaza_fiesta_noche`],
    "PLANO MEDIO, luz azul fría: los fogones ya se apagaron. LA MISMA lechuza de la referencia posada en el suelo de LA MISMA plaza de la referencia, exactamente donde estaba la mujer, quieta y de frente, rodeada de un círculo de suelo vacío. Alrededor y en sombra, instrumentos dejados en el piso. Capa de primer plano: un tambor caído en sombra. Objeto ancla: la lechuza sola en el centro.",
    "personas en cuadro, sangre, ropa tirada, dramatismo, ojos rojos"),
  kf("b7b", [`${B}/lechuza_huitaca`, `${B}/altiplano_noche`],
    "PLANO GENERAL, luz de luna azul. LA MISMA lechuza de la referencia saliendo hacia la noche del MISMO altiplano de la referencia, vista desde atrás y pequeña, con las alas abiertas y la plaza apagada quedando abajo y detrás. El cuadro es casi todo cielo nocturno. Capa de primer plano: el filo de un techo de paja. Objeto ancla: las alas abiertas contra la luna.",
    "rostro humano en el ave, ojos brillantes, estela, magia, personas"),

  // b8 — Ronda las casas donde se baila. Unos apagan, otros encienden.
  kf("b8a", [`${B}/lechuza_huitaca`, `${B}/casa_barro_paja`],
    "PLANO MEDIO, noche azul con una sola ventana naranja. LA MISMA lechuza de la referencia posada en el caballete del MISMO bohío de la referencia, de perfil, con la cabeza vuelta hacia abajo mirando la casa. El techo de paja ocupa la diagonal del cuadro. Capa de primer plano: la paja del alero en sombra. Objeto ancla: la lechuza sobre el caballete.",
    "personas, ataque, sangre, mal agüero explicito, calaveras, simbolos"),
  kf("b8b", [`${B}/casa_barro_paja`, `${B}/plaza_fiesta_noche`],
    "PLANO GENERAL nocturno con DOS CASAS a la vez, misma distancia, misma noche: la de la izquierda con la puerta ya cerrada y el fogón apagado, azul y muda; la de la derecha con la puerta abierta, el fuego vivo y sombras bailando en el vano. Las dos reacciones en el mismo cuadro, sin que ninguna se vea mejor que la otra. Capa de primer plano: el camino oscuro entre las dos. Objeto ancla: las dos puertas, una cerrada y una abierta.",
    "una casa claramente buena y otra mala, castigo, ruina, lechuza en cuadro"),

  // b9 — No dice cuál es su mensaje: sólo llama. Vigila el límite.
  kf("b9a", [`${B}/lechuza_huitaca`],
    "PRIMER PLANO del ave, luz de luna plateada y frontal. LA MISMA lechuza de la referencia de frente: es un AVE COMPLETA Y ENTERA, del tamaño de una lechuza real, posada sobre una rama con las alas plegadas contra el cuerpo y las garras agarradas a la madera. NO tiene torso humano, ni hombros, ni brazos, ni manta: es un pájaro y nada más. Quieta, pico cerrado, ojos abiertos y neutros, sin amenaza ni bondad legibles. Capa de primer plano: la rama. Objeto ancla: los dos ojos.",
    "torso humano, hombros humanos, brazos, manos, cuerpo de persona, mujer con cabeza de ave, hibrido, manta o ropa sobre el ave, figura de pie, ojos rojos o brillantes, sangre"),
  kf("b9b", [`${B}/altiplano_noche`, `${B}/lechuza_huitaca`, `${B}/sabana_cultivos`],
    "GRAN PLANO GENERAL final, luna alta sobre el altiplano. EL MISMO altiplano nocturno de la referencia partido en dos por la luz: a un lado LOS MISMOS cultivos de la referencia en sombra azul y dormidos, al otro el resplandor naranja de una plaza que todavía canta; justo en el filo entre los dos, muy pequeña, LA MISMA lechuza de la referencia posada en un poste. Capa de primer plano: el poste en sombra. Objeto ancla: el ave exactamente en el límite.",
    "personas, texto, simbolos, balanza, alegorias explicitas"),
];
