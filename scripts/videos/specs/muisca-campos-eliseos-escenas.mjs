// Keyframes de Los campos elíseos muiscas — 9 bloques × 2 escenas × 2 cuadros = 36 imágenes ≈ 90 s.
// Guion: guion-campos-eliseos-v2.json (N=9) · Acta: acta-campos-eliseos.json (18 nudos)
// DOCTRINA v3: cada escena es un par A→B (ver _muisca-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · El más allá NO es castigo ni premio: es un territorio parecido al suyo y
//   sin embargo nuevo, con caminos, viviendas y campos preparados. Nadie
//   espera inmóvil una eternidad vacía. Nada de infierno ni de paraíso.
// · La araña NO es un monstruo ni un guardián terrible: explica por qué la
//   respetan. Es un oficio, no una amenaza. Tamaño mediano, de papel, sin
//   colmillos ni ojos múltiples amenazantes.
// · Ella NO llega desvalida: llega con la memoria de sus manos, y lo que le
//   permite confiar en la balsa es reconocer en ella una paciencia de
//   tejedora. EL OFICIO ES EL QUE CRUZA.
// · El miedo NO se vence con valor sino con un saber técnico: ningún hilo
//   trabaja solo. Esa frase es el centro y se ve en el plano b7a, donde la
//   cámara está DENTRO de la trama.
// · El cierre NO mira al cielo: mira hacia atrás y ve una trama entre otras
//   vidas. La vida se lee como un tejido, no como un balance.
//
// GUION DE LUZ: luz difusa sin fuente al pie del barranco → tierras amarillas
// y negras → gris ancho del río → plata de los hilos → tensión bajo el pie →
// reflejos bajo el agua → luz que entra por la trama → sol nuevo bajo y tibio
// → tarde de surco abierto.

import { DIRECCION, AVOID_BASE, ref, esc, escp, armar } from "./_muisca-comun.mjs";

export const SPEC_NAME = "muisca-campos-eliseos-escenas";
export const OUT_DIR = "muiscas/videos/campos-eliseos/keyframes";
export { DIRECCION };

export const SHARED_AVOID =
  AVOID_BASE + "; infierno, llamas, demonios, almas en pena, calaveras, esqueletos, fantasmas translucidos; cielo cristiano, nubes doradas, angeles, puertas de luz; barca de Caronte, remero encapuchado, moneda; araña monstruosa, colmillos, ojos rojos, telaraña pegajosa de terror; balanza, juicio, libro de cuentas; tumbas, lapidas, cruces";

export const PALETTE =
  "amarillo terroso y negro de barranco, gris profundo de agua sin fondo, plata de hilo, crema de algodon crudo, verde apagado de parcela, ocre tibio del sol nuevo; sin saturacion ni neones";

const TEJEDORA =
  "LA MISMA tejedora de la referencia (mujer de unos cincuenta años, manos anchas y dedos marcados por el hilo, rostro sereno, pelo negro con canas recogido en la nuca, manta de algodón crudo lisa ceñida con un cordón, descalza y sin llevar nada consigo)";

export const ITEMS = armar([
  // b1 — Al morir abrió los ojos bajo un barranco. Sólo la memoria de sus manos.
  escp("b1a", [ref("tejedora_alma"), ref("barranco_tenebroso")], {
    comun: `PLANO MEDIO, luz difusa que no tiene fuente. ${TEJEDORA} al pie del MISMO barranco de la referencia, sentada en la tierra con la espalda contra la pared amarilla. No hay nadie más. Capa de primer plano: un canto de tierra negra. Objeto ancla: sus párpados.`,
    ini: "tiene los ojos todavía cerrados y la cabeza apoyada en la pared.",
    fin: "abrió los ojos del todo y mira hacia arriba, hacia donde el barranco se cierra, con la cabeza ya separada de la pared.",
  }, "muerte explicita, sangre, cadaver, sudario, tumba, luz divina, expresion de terror"),
  escp("b1b", [ref("tejedora_alma")], {
    comun: `PLANO DETALLE de las manos, luz difusa y baja sobre fondo oscuro. Las MISMAS manos anchas de la referencia, con los dedos marcados por el hilo. No hay hilo, ni telar, ni herramienta: sólo el gesto que se acuerda de ellos. Capa de primer plano: la sombra entre las dos manos. Objeto ancla: el hueco vacío entre los dedos.`,
    ini: "las dos manos están abiertas y quietas, con las palmas hacia arriba.",
    fin: "los dedos se cerraron sobre un hilo que no existe y quedaron tensándolo en el aire, con los tendones marcados y las palmas enfrentadas.",
  }, "hilo visible, telar, herramientas, objetos en las manos, resplandor"),

  // b2 — El sendero bajaba entre tierras amarillas y negras.
  escp("b2a", [ref("barranco_tenebroso"), ref("tejedora_alma")], {
    comun: `PLANO GENERAL en picado, luz difusa sin fuente y sin cielo visible arriba. EL MISMO barranco de la referencia con su sendero angosto pegado a la pared entre tierras amarillas y negras; ${TEJEDORA} pequeña dentro de la garganta, de espaldas. Capa de primer plano: el borde de la pared amarilla. Objeto ancla: el sendero.`,
    ini: "va por el tramo ancho del sendero, con sitio de sobra para los dos pies.",
    fin: "bajó hasta el tramo en que el sendero se estrecha y apenas le cabe un pie: va de lado, pegada a la pared, con el vacío al otro costado.",
  }, "caida, vertigo teatral, monstruos, otras almas, antorchas, cielo visible"),
  escp("b2b", [ref("tejedora_alma"), ref("barranco_tenebroso")], {
    comun: `PLANO MEDIO desde delante, cámara retrocediendo por el sendero. ${TEJEDORA} avanzando hacia la cámara, con el barranco cerrándose detrás de ella. No se oye nada y no la sigue nadie: el encuadre está hecho para que el silencio se note. Capa de primer plano: la pared negra rozándole el hombro. Objeto ancla: el camino vacío a su espalda.`,
    ini: "está girando la cara hacia atrás, por encima del hombro, para mirar de dónde viene.",
    fin: "volvió la cara al frente y sigue caminando, con el tramo a su espalda igual de vacío que antes.",
  }, "otras figuras, voces dibujadas, sombras humanas, perros, guias"),

  // b3 — Al final encontró un río, sin puente ni canoa.
  esc("b3a", [ref("rio_de_las_almas")], {
    comun: "GRAN PLANO GENERAL desde la ribera de piedra y tierra negra, luz difusa y sin fuente. EL MISMO río de la referencia, corriente ancha y oscura de superficie lisa y sin espuma, con la otra orilla apenas adivinándose al fondo. No hay puente, no hay canoa, no hay embarcadero. Capa de primer plano: una piedra de la ribera. Objeto ancla: la otra orilla.",
    ini: "la otra orilla se lee apenas como una línea más clara al fondo.",
    fin: "una banda de bruma se corrió sobre el agua y borró del todo la otra orilla: ahora el río parece no tener final.",
  }, "puente, canoa, barca, embarcadero, oleaje, espuma, personas"),
  escp("b3b", [ref("tejedora_alma"), ref("rio_de_las_almas")], {
    comun: `PLANO MEDIO LARGO de espaldas, luz difusa. ${TEJEDORA} de pie en la ribera del MISMO río de la referencia, diminuta contra el ancho del agua. Capa de primer plano: la piedra negra de la orilla. Objeto ancla: su silueta contra el agua.`,
    ini: "está a dos pasos del agua, con los brazos caídos.",
    fin: "avanzó hasta el filo mismo del agua, que le llega a los pies descalzos, y ha inclinado la cabeza para mirar la superficie.",
  }, "llanto, desesperacion, gritos, brazos al cielo, otras almas"),

  // b4 — Sobre una piedra esperaba una araña, y de su cuerpo salían miles de hilos.
  esc("b4a", [ref("rio_de_las_almas"), ref("balsa_arana")], {
    comun: "PLANO DETALLE, luz rasante que hace brillar la plata. Una piedra de la ribera y, sobre ella, LA MISMA araña de papel de la referencia, mediana y tranquila, con un hilo fino saliéndole del cuerpo. No es una amenaza: está trabajando. Capa de primer plano: el canto de la piedra. Objeto ancla: el hilo que le sale del cuerpo.",
    ini: "el hilo baja de la piedra y se pierde a un palmo, sin que se vea con qué se junta.",
    fin: "el encuadre revela que ese hilo se enlaza con otros y otros: desde la piedra sale ya un abanico de hilos plateados que se van hacia el agua.",
  }, "araña gigante, colmillos, ojos rojos, patas peludas de terror, presa envuelta, telaraña pegajosa"),
  esc("b4b", [ref("rio_de_las_almas")], {
    comun: "GRAN PLANO GENERAL en contrapicado bajo, a ras del agua. Sobre EL MISMO río de la referencia, miles de hilos finísimos y plateados tendidos de orilla a orilla formando una trama tensa y ligera. Capa de primer plano: dos hilos cruzando muy cerca. Objeto ancla: la trama sobre el agua.",
    ini: "la trama se ve sólo en el tramo cercano y más allá se pierde en la bruma.",
    fin: "una claridad recorrió la trama de un extremo al otro y encendió los hilos hasta el fondo: ahora se ve que van de orilla a orilla sin interrumpirse.",
  }, "telaraña de terror, insectos atrapados, niebla espesa que lo tape todo, personas"),

  // b5 — «Me guardan para que nadie falte en el paso». (CITA)
  esc("b5a", [ref("balsa_arana"), ref("rio_de_las_almas")], {
    comun: "PLANO MEDIO CORTO a la altura de la piedra, luz difusa con reflejos de plata. LA MISMA araña de la referencia sobre la piedra, de perfil, entera en cuadro y sin ninguna deformación monstruosa. Habla de su oficio, no amenaza. Capa de primer plano: la trama de hilos fuera de foco. Objeto ancla: la araña.",
    ini: "está quieta, con las patas delanteras apoyadas en el filo de la piedra.",
    fin: "levantó las dos patas delanteras y las tiene alzadas en mitad de la frase, con la trama de plata brillando detrás de ella.",
  }, "araña gigante, colmillos, veneno, ojos multiples brillantes, gesto de ataque, rostro humano en la araña"),
  escp("b5b", [ref("tejedora_alma"), ref("balsa_arana")], {
    comun: `PLANO DETALLE, luz rasante. El pie descalzo de LA MISMA tejedora de la referencia sobre LA MISMA balsa de tela de araña de la referencia, plataforma ovalada tejida de hilos plateados tan ligera que se ve el agua oscura a través de ella. Capa de primer plano: el agua vista entre los hilos. Objeto ancla: la trama bajo el pie.`,
    ini: "el pie está apoyándose y la trama cede bajo él, hundiéndose en un hoyo poco profundo.",
    fin: "la trama volvió a tensarse y devolvió el pie a su altura: la superficie quedó firme y plana, con la araña subida al otro extremo.",
  }, "hundimiento, rotura, caida al agua, panico, agua salpicando"),

  // b6 — Bajo la balsa, reflejos de los que cruzaron antes. Miedo.
  esc("b6a", [ref("rio_de_las_almas"), ref("balsa_arana")], {
    comun: "PLANO CENITAL desde encima de la balsa, mirando a través de la trama. Bajo LA MISMA balsa de la referencia, el agua oscura del MISMO río de la referencia lleva reflejos tenues de gente que cruzó antes: siluetas de papel apenas insinuadas, ninguna con cara, pasando por debajo. Capa de primer plano: los hilos de la trama. Objeto ancla: los reflejos bajo el agua.",
    ini: "hay dos o tres reflejos separados, pequeños y lejos unos de otros.",
    fin: "la corriente los trajo juntos bajo la balsa y ahora pasa una hilera larga de reflejos, uno detrás de otro, sin que ninguno tenga cara.",
  }, "cadaveres, ahogados, rostros en el agua, manos que agarran, terror, sangre"),
  escp("b6b", [ref("tejedora_alma"), ref("balsa_arana"), ref("rio_de_las_almas")], {
    comun: `PLANO MEDIO, luz difusa y fría. ${TEJEDORA} sentada en el centro de LA MISMA balsa de la referencia, con la corriente tirando de la tela por un costado. Es miedo, no pánico: el cuerpo se agarra antes de que la cabeza decida. Capa de primer plano: el borde levantado de la balsa. Objeto ancla: sus manos sobre la trama.`,
    ini: "las manos se le están cerrando sobre los hilos y el cuerpo empieza a inclinarse hacia el lado que tira.",
    fin: "quedó agarrada con las dos manos a la trama y el cuerpo inclinado, con la balsa ladeada por la corriente y los hilos del borde tensos.",
  }, "grito, caida al agua, llanto, panico, balsa rota, remos"),

  // b7 — Ningún hilo trabaja solo: cada uno recibe fuerza de los demás.
  esc("b7a", [ref("balsa_arana")], {
    comun: "PLANO MACRO DENTRO de la trama de LA MISMA balsa de la referencia, luz rasante que separa cada hilo: se ven los nudos, los cruces y cómo cada hilo tira de sus vecinos. ÉSTE ES EL PLANO CENTRAL DEL VIDEO y lo que se entiende mirándolo es técnico, no consolador. Capa de primer plano: dos hilos cruzados fuera de foco. Objeto ancla: un nudo del centro.",
    ini: "uno de los hilos está flojo y hace una comba en mitad del entramado.",
    fin: "los hilos vecinos recogieron esa comba y el hilo flojo quedó tenso como los demás: la trama entera se ve pareja y trabajando junta.",
  }, "hilo que se rompe, agujero, deshilachado, arañas, insectos, resplandor magico"),
  escp("b7b", [ref("tejedora_alma"), ref("telar_marco")], {
    comun: `PRIMER PLANO, luz difusa. La cara de ${TEJEDORA}, de tres cuartos, mirando hacia abajo, hacia la trama que tiene bajo las manos. Es el reconocimiento de un oficio: ella ya sabe cómo se hace esto. Capa de primer plano: hilos de plata fuera de foco. Objeto ancla: su mirada.`,
    ini: "tiene el ceño apretado y la mandíbula tensa.",
    fin: "el ceño se le soltó y la cara quedó serena, con la mirada todavía en la trama y los hombros bajados.",
  }, "sonrisa beatifica, lagrimas, exaltacion, resplandor, ojos cerrados"),

  // b8 — Al otro lado había caminos, viviendas y campos bajo un sol nuevo.
  esc("b8a", [ref("poblado_nuevo"), ref("sabana_cultivos"), ref("sendero_territorio")], {
    comun: "GRAN PLANO GENERAL, sol nuevo bajo y tibio que entra rasante. La otra orilla: un territorio parecido al de ella y sin embargo nuevo, con EL MISMO poblado de la referencia, LOS MISMOS campos preparados de la referencia y varios caminos que salen hacia provincias distintas. No es un premio ni un castigo: es un sitio donde se vive. Capa de primer plano: el filo de la ribera. Objeto ancla: los caminos que se reparten.",
    ini: "una neblina baja cubre los campos y sólo asoman los techos y el arranque de los caminos.",
    fin: "el sol nuevo levantó la neblina y quedaron a la vista los campos en hileras, las viviendas y los tres caminos saliendo hacia el fondo.",
  }, "cielo dorado, angeles, puertas de luz, templos, ciudad monumental, nubes gloriosas"),
  escp("b8b", [ref("familias_muiscas"), ref("sabana_cultivos"), ref("semillas_bolsita")], {
    comun: "PLANO MEDIO, luz tibia del sol nuevo. Gente de LAS MISMAS familias de la referencia en el borde de una parcela con sus términos señalados por piedras; nadie espera inmóvil: hay quien carga, quien habla, quien va de paso. Capa de primer plano: una piedra de lindero. Objeto ancla: LA MISMA bolsita de semillas de la referencia.",
    ini: "una mujer sostiene la bolsita y la está tendiendo hacia el borde del cuadro, sin que nadie la haya tomado.",
    fin: "otra mano tomó la bolsita y la sostiene ya, con la mujer retirando el brazo y los demás siguiendo en lo suyo.",
  }, "recibimiento ceremonial, coro, adoracion, aureolas, arrodillarse, llanto"),

  // b9 — Abrió un surco, echó la semilla y miró la trama que dejó.
  escp("b9a", [ref("tejedora_alma"), ref("sabana_cultivos"), ref("semillas_bolsita")], {
    comun: `PLANO MEDIO BAJO, luz tibia y rasante. ${TEJEDORA} agachada sobre un surco recién abierto en LOS MISMOS campos de la referencia, con la bolsita en una mano. Las mismas manos de tejedora, haciendo ahora otra cosa. Capa de primer plano: la tierra removida del surco. Objeto ancla: su mano derecha.`,
    ini: "la mano está sobre el surco dejando caer las primeras semillas, que todavía van en el aire.",
    fin: "las semillas quedaron en el fondo del surco y la mano las está cubriendo de tierra, con el surco ya medio cerrado detrás.",
  }, "cosecha ya crecida, flores, milagro, brotes instantaneos, resplandor"),
  escp("b9b", [ref("tejedora_alma"), ref("telar_marco"), ref("balsa_arana")], {
    comun: `PLANO MEDIO final, luz tibia del sol nuevo que entra de lado. ${TEJEDORA} de pie, girada hacia atrás, mirando hacia donde vino; en el aire, a media altura y hecha de los mismos hilos plateados, se lee una TRAMA de vida enlazada con otras: hilos que salen de ella y se cruzan con hilos que vienen de otros. No hay río ni barranco detrás: hay tejido. Capa de primer plano: un hilo bajando por el borde del cuadro. Objeto ancla: los cruces de la trama.`,
    ini: "la trama se ve apenas insinuada en el aire y en el hilo del primer plano no hay nada.",
    fin: "la trama quedó nítida y entera, con los cruces bien legibles, y por el hilo del primer plano baja LA MISMA araña de la referencia a quedarse cerca.",
  }, "rio, barranco, muerte, tumba, cielo, texto, simbolos, balanza"),
]);
