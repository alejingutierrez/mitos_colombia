// Keyframes de Fu, el dios de la torpeza — 12 bloques × 2 escenas × 2 cuadros
// = 48 imágenes ≈ 120 s.
// Guion: guion-fu-el-dios-de-la-torpeza-v2.json (N=12)
// Acta:  acta-fu-el-dios-de-la-torpeza.json (23 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _muisca-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · Fu NO SE REDIME. La fuente lo dice sin rodeos: nunca aprendió a no
//   distraerse. Lo que aprende es a regresar a tiempo y a responder por lo que
//   dejó a medias. NO convertirlo en fábula de superación.
// · El fallo NO se arregla: la abertura sigue abierta por un costado y el
//   boquerón se protege DESPUÉS con turnos y fogatas, no con la roca. Ningún
//   juego reemplazó esa tarea, y el bloque b11 lo enseña en cuadro.
// · La anciana NO lo perdona ni lo regaña: le señala que no cerró el paso, él
//   lo admite, y ella le pide que enseñe lo otro. Las dos cosas en la misma
//   escena.
// · El tejo NACE DE UN ERROR, no de una invención: tropieza con una piedra,
//   se distrae y de una mala puntería sale la chispa. Nadie la buscaba.
// · El cierre NO es triunfal: es una luz pequeña que nadie había pedido y que
//   todos esperaban. Dejarla de ese tamaño: una chispa, no un incendio.
//
// GUION DE LUZ: fondo de laguna sin luz → tarde de ruidos en la orilla →
// noche de altiplano con la roca al hombro → frío de la caminata → tierra del
// círculo → la chispa → primer claror detrás de las montañas → gris del paso
// mal cerrado → mañana del reproche → noche del corro → fogatas de los turnos
// → la chispa pequeña de cada noche.

import { DIRECCION, AVOID_BASE, ref, esc, escp, armar } from "./_muisca-comun.mjs";

export const SPEC_NAME = "muisca-fu-escenas";
export const OUT_DIR = "muiscas/videos/fu-el-dios-de-la-torpeza/keyframes";
export { DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; monstruo acuatico, criatura de terror, branquias, escamas de pez en la cara; gigante fuera de escala, titan, musculatura heroica; explosion, incendio, llamarada, fuegos artificiales; canchas de tejo modernas, mechas de polvora, tablero de puntuacion, cerveza; humillacion publica, burla cruel, castigo fisico; moraleja dibujada, texto, simbolos";
export const PALETTE =
  "verde grisaceo de fondo de laguna, negro azulado de noche de altiplano, gris de roca y de piedra plana, ocre de tierra del circulo, crema de algodon crudo, naranja corto de chispa y de fogata; sin saturacion";

const FU =
  "EL MISMO Fu de la referencia (figura humana de complexión ancha y algo desgarbada, de unos cuarenta años, con la piel de un verde grisáceo apagado de fondo de laguna y el pelo negro pegado, manta corta de algodón crudo verde grisáceo anudada al hombro; le escurre agua de los codos y los hombros)";

export const ITEMS = armar([
  // b1 — Vivía bajo Fúquene. Sólo salía de noche.
  esc("b1a", [ref("fuquene_noche")], {
    comun: "Sin luz, bajo el agua de LA MISMA laguna de Fúquene de la referencia: raíces, barro y peces. Aquí duerme de día porque la luz lo confunde. Objeto ancla: las raíces del fondo.",
    camara: {
      a: "PLANO MACRO subacuático entre las raíces expuestas del fondo, con partículas flotando.",
      b: "la cámara ha SUBIDO atravesando el agua y ha salido a la superficie: PLANO GENERAL nocturno de la laguna entera entre los juncales, con los cerros cerrando el fondo.",
    },
    ini: "sólo se ven raíces y barro en la penumbra verdosa del fondo.",
    fin: "al otro lado de la superficie está la laguna de noche, ancha y apenas rizada, con los juncales altos alrededor y ni una luz en la orilla.",
  }, "monstruo acuatico, criatura de terror, branquias, buzos, personas"),
  escp("b1b", [ref("fu_dios"), ref("fuquene_noche")], {
    comun: `Noche sin luna. ${FU} saliendo del agua a la orilla de barro. Es desgarbado, no monstruoso. Objeto ancla: el agua que le escurre de los codos.`,
    camara: {
      a: "PLANO MACRO del agua cayendo de un codo sobre el barro de la orilla.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO ENTERO de él ya en la orilla, de espaldas al agua y con mantas secas, con los juncales detrás.",
    },
    ini: "unas gotas caen de un codo al barro, muy cerca del objetivo.",
    fin: "desde más lejos se le ve entero y de pie, ya en la orilla, ancho de hombros y algo encorvado, con su manta corta anudada al hombro.",
  }, "monstruo, garras, colmillos, gigante fuera de escala, musculatura heroica"),

  // b2 — Los ruidos no lo dejaron dormir. Debía cerrar el boquerón.
  esc("b2a", [ref("boqueron_tausa")], {
    comun: "Luz gris de tarde. EL MISMO boquerón de Tausa de la referencia: paso estrecho entre dos paredes de roca alta y oscura, con el camino de tierra clara pasando por el medio y el altiplano abriéndose al otro lado. Por aquí puede pasar una guerra. Objeto ancla: el paso abierto.",
    camara: {
      a: "PLANO MEDIO desde dentro del paso, con las dos paredes a los lados muy cerca.",
      b: "la cámara ha RETROCEDIDO saliendo del paso y ha subido: GRAN PLANO GENERAL en picado con el boquerón pequeño en la sierra y los caminos del altiplano abriéndose detrás de él.",
    },
    ini: "las dos paredes encajonan el camino y no se ve más que roca.",
    fin: "desde arriba se entiende por qué importa: por ese paso estrecho entran todos los caminos del altiplano, que se reparten al otro lado.",
  }, "ejercitos, armas, batalla, sangre, personas"),
  escp("b2b", [ref("fu_dios"), ref("fuquene_noche"), ref("familias_muiscas")], {
    comun: `Luz de tarde en la orilla. Lo llaman desde la orilla: él, que mueve las piedras, debe cerrar el paso antes del amanecer. ${FU} siente que el encargo le queda grande. Objeto ancla: su cara.`,
    camara: {
      a: "PLANO GENERAL de la orilla con un grupo pequeño de gente llamando hacia el agua.",
      b: "la cámara ha AVANZADO sobre el agua hasta él: PRIMER PLANO de la cara de Fu escuchando desde la superficie, con la gente desenfocada al fondo.",
    },
    ini: "desde la orilla, tres o cuatro personas llaman hacia el agua.",
    fin: "de cerca se le ve la cara asomada al agua, oyendo el encargo, con los ojos bajando: le queda grande y se le nota.",
  }, "aureola, adoracion, arrodillarse, gritos, violencia"),

  // b3 — Buscó una roca que apenas le cabía en los brazos.
  escp("b3a", [ref("fu_dios"), ref("altiplano_noche")], {
    comun: `Noche de altiplano. ${FU} buscando una roca. Encuentra una que apenas le cabe en los brazos: no es un peñasco imposible, es una roca grande para un hombre. Objeto ancla: la roca.`,
    camara: {
      a: "PLANO MACRO de sus manos abrazando el canto de la roca en el suelo.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO ENTERO de él levantándola y cargándosela sobre los hombros, con el altiplano oscuro alrededor.",
    },
    ini: "las manos abrazan el canto de la piedra, todavía en el suelo.",
    fin: "la tiene ya sobre los hombros, con el cuerpo doblado bajo ella y las piernas abiertas para aguantar el peso.",
  }, "gigante, peñasco imposible, musculatura heroica, magia, resplandor"),
  escp("b3b", [ref("fu_dios"), ref("altiplano_noche"), ref("sendero_territorio")], {
    comun: `Frío de la noche del altiplano. ${FU} caminando toda la noche con la roca al hombro. Objeto ancla: el camino que lleva hecho.`,
    camara: {
      a: "PLANO MEDIO lateral acompañándolo paso a paso, con el vaho de la respiración.",
      b: "la cámara se ha QUEDADO ATRÁS y ha subido muy alto: GRAN PLANO GENERAL en picado del altiplano nocturno con él convertido en un punto sobre el camino.",
    },
    ini: "camina a su ritmo, muy cerca del objetivo, con el vaho saliéndole de la boca.",
    fin: "desde arriba se ve el altiplano entero de noche y lo poco que ha avanzado: un punto en mitad de un camino larguísimo.",
  }, "gigante, pasos que hunden la tierra, magia, resplandor, animales fantasticos"),

  // b4 — Pisó una piedra redonda que salió disparada y golpeó otra.
  escp("b4a", [ref("fu_dios"), ref("tejo_piedras"), ref("altiplano_noche")], {
    comun: `Noche. El accidente que lo empieza todo: pisa una piedra redonda que sale disparada. El tejo NACE DE UN ERROR. Objeto ancla: la piedra bajo el pie.`,
    camara: {
      a: "PLANO MACRO de su pie descalzo pisando una piedra redonda en el camino.",
      b: "la cámara ha SEGUIDO a la piedra disparada a ras de suelo: PLANO MEDIO BAJO del terreno con las dos piedras rodando y deteniéndose juntas.",
    },
    ini: "el pie pisa la piedra y esta empieza a escaparse de debajo.",
    fin: "la piedra salió disparada, golpeó a otra y las dos han rodado hasta quedarse quietas, una contra la otra, en la tierra.",
  }, "caida aparatosa, golpe, sangre, comedia exagerada, magia"),
  escp("b4b", [ref("fu_dios"), ref("altiplano_noche")], {
    comun: `Noche. ${FU} parado mirando lo que acaba de pasar. La roca sigue en su hombro. Objeto ancla: su cara mirando al suelo.`,
    camara: {
      a: "PLANO MEDIO de él de pie, con la roca todavía encima, mirando hacia abajo.",
      b: "la cámara ha DESCENDIDO siguiendo su mirada: PLANO CENITAL de las dos piedras juntas en la tierra, con la sombra de él encima.",
    },
    ini: "mira hacia el suelo con la roca al hombro, quieto.",
    fin: "en el suelo están las dos piedras quietas una contra otra, con la sombra de él cayendo encima: es lo que se ha quedado mirando.",
  }, "rostro de asombro exagerado, comedia, magia, resplandor"),

  // b5 — Bajó la roca y recogió una piedra plana. La lanzó a un círculo.
  escp("b5a", [ref("fu_dios"), ref("tejo_piedras")], {
    comun: `Noche. ${FU} bajando la roca grande al suelo y agachándose a recoger una piedra plana. Ahí empieza la distracción. Objeto ancla: la roca en el suelo.`,
    camara: {
      a: "PLANO MEDIO de él bajando la roca de los hombros, con esfuerzo.",
      b: "la cámara ha RODEADO hasta el suelo, por detrás de la roca abandonada: PLANO MEDIO BAJO con la roca enorme en primer término y él agachado detrás, cogiendo una piedra plana.",
    },
    ini: "baja la roca de los hombros y la deja en la tierra.",
    fin: "desde detrás de la roca abandonada se le ve agachado más allá, con una piedra plana ya en la mano y la roca olvidada delante del objetivo.",
  }, "magia, resplandor, gigante, comedia exagerada"),
  esc("b5b", [ref("tejo_piedras")], {
    comun: "Noche. LAS MISMAS piedras planas de la referencia y un círculo trazado con el dedo en la tierra ocre. La primera cae en el centro; la segunda rebota; la tercera se va de largo. Un acierto no garantiza el siguiente. Objeto ancla: el círculo en la tierra.",
    camara: {
      a: "PLANO CENITAL cerrado del círculo trazado en la tierra, con una piedra plana justo en el centro.",
      b: "la cámara se ha ELEVADO y ha retrocedido: PLANO GENERAL del terreno con el círculo pequeño en el centro y tres piedras más repartidas alrededor, una fuera y lejos.",
    },
    ini: "hay una sola piedra en el centro del círculo, clavada.",
    fin: "desde más lejos se ve el resultado entero: una dentro, una rebotada junto al borde y otra que se fue de largo y quedó a varios pasos.",
  }, "personas, magia, resplandor, canchas modernas, tablero de puntuacion"),

  // b6 — La cuarta chocó contra una laja y saltó una chispa.
  esc("b6a", [ref("tejo_piedras")], {
    comun: "Noche. La cuarta piedra chocando contra una laja gris. De allí salta una CHISPA DIMINUTA que se apaga en el pasto seco. Es una chispa, no un incendio. Objeto ancla: el punto del golpe.",
    camara: {
      a: "PLANO MEDIO BAJO de la piedra plana en el aire, a un palmo de la laja.",
      b: "la cámara ha AVANZADO hasta el punto del impacto: PLANO MACRO de la laja con la marca de golpe fresca y un punto quemado minúsculo en el pasto seco de al lado.",
    },
    ini: "la piedra va por el aire, a punto de tocar la laja.",
    fin: "en la laja hay una marca clara de golpe y, junto a ella, un punto quemado del tamaño de una uña en el pasto: la chispa ya se apagó.",
  }, "explosion, llamarada, incendio, fuegos artificiales, polvora, magia"),
  escp("b6b", [ref("fu_dios"), ref("tejo_piedras"), ref("altiplano_noche")], {
    comun: `Noche. ${FU} mirando el punto donde nació el fuego y volviendo a lanzar. Pronto ha olvidado el boquerón, la roca y la guerra. Objeto ancla: la roca abandonada al fondo.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara mirando el punto quemado, absorto.",
      b: "la cámara ha RETROCEDIDO mucho y ha subido: PLANO GENERAL del terreno con él lanzando piedras al círculo en un extremo y la roca grande olvidada en el otro, lejos y sola.",
    },
    ini: "mira absorto el punto quemado en el pasto.",
    fin: "desde lejos se ve todo a la vez: él lanzando piedras al círculo, contento, y la roca que tenía que llevar tirada a treinta pasos, donde la dejó.",
  }, "fuego grande, hoguera, magia, resplandor, personas"),

  // b7 — Empezó a clarear. Corrió y empujó la roca.
  esc("b7a", [ref("altiplano_noche"), ref("boqueron_tausa")], {
    comun: "Detrás de las montañas empieza a clarear. Objeto ancla: la línea de los cerros.",
    camara: {
      a: "PLANO MACRO del círculo en la tierra con una piedra dentro, todavía en penumbra.",
      b: "la cámara se ha ELEVADO deprisa y ha girado hacia el este: GRAN PLANO GENERAL del altiplano con la primera claridad saliendo por detrás de las montañas.",
    },
    ini: "el círculo y la piedra se ven en la penumbra azul de la noche.",
    fin: "por encima de los cerros hay ya una banda de claridad que crece: el amanecer está encima y el plazo se acabó.",
  }, "sol con cara, rayos dibujados, personas, dramatismo"),
  escp("b7b", [ref("fu_dios"), ref("boqueron_tausa")], {
    comun: `Primera luz gris. ${FU} corriendo, llegando al paso con el aliento corto y empujando la roca con lo que le queda de fuerza. Llega tarde y se ve que llega tarde. Objeto ancla: la roca contra el paso.`,
    camara: {
      a: "PLANO MEDIO lateral acompañándolo en carrera con la roca a cuestas, jadeando.",
      b: "la cámara se ha ADELANTADO hasta el boquerón y lo espera allí, baja: CONTRAPICADO desde el camino con él empujando la roca hacia el paso, encima del objetivo.",
    },
    ini: "corre con la roca a cuestas y el paso todavía está lejos.",
    fin: "está en el paso empujando la roca con el hombro y las dos manos, con las piernas clavadas en la tierra y la cara contra la piedra.",
  }, "gigante, musculatura heroica, magia, explosion, camara lenta epica"),

  // b8 — Quedó atravesada, pero la abertura siguió abierta.
  esc("b8a", [ref("boqueron_tausa")], {
    comun: "Luz gris de primera hora. La roca quedó atravesada en EL MISMO boquerón de la referencia, PERO la abertura sigue abierta por un costado. El fallo NO se arregla. Objeto ancla: el hueco que queda al lado de la roca.",
    camara: {
      a: "PLANO MEDIO frontal de la roca atravesada en el paso, que parece taparlo entero.",
      b: "la cámara se ha desplazado LATERALMENTE hasta el costado: PLANO MEDIO desde el otro ángulo, donde se ve el hueco que queda entre la roca y la pared, lo bastante ancho para pasar.",
    },
    ini: "desde el frente la roca parece cerrar el paso del todo.",
    fin: "desde el costado se ve la verdad: entre la roca y la pared de la izquierda queda un hueco por el que cabe una persona, y el camino de tierra sigue pasando por él.",
  }, "paso cerrado del todo, muro perfecto, personas, ejercitos"),
  escp("b8b", [ref("fu_dios"), ref("boqueron_tausa"), ref("tejo_piedras")], {
    comun: `Luz gris. ${FU} sentado a esperar el regaño, con las piedras planas todavía entre los dedos. Objeto ancla: las piedras en su mano.`,
    camara: {
      a: "PLANO GENERAL del paso con él sentado y pequeño al pie de la roca.",
      b: "la cámara ha AVANZADO hasta sus manos: PLANO MACRO de dos piedras planas y grises sostenidas entre los dedos, con el hueco del paso desenfocado al fondo.",
    },
    ini: "está sentado en el suelo junto a la roca, con los codos en las rodillas.",
    fin: "de cerca se ve que todavía tiene dos piedras planas entre los dedos, sin darse cuenta: es lo único que se trajo de la noche.",
  }, "llanto, humillacion, castigo fisico, burla cruel, aureola"),

  // b9 — «¿Qué es eso que hiciste con las piedras?». (CITA)
  escp("b9a", [ref("familias_muiscas"), ref("boqueron_tausa"), ref("fu_dios")], {
    comun: "Luz de mañana. La gente mirando el paso, luego la roca, luego las piedras planas que Fu tiene entre los dedos. Las tres miradas, en ese orden. Objeto ancla: hacia dónde miran.",
    camara: {
      a: "PLANO MEDIO del grupo mirando hacia el hueco del paso, serios.",
      b: "la cámara ha hecho un PANEO LATERAL siguiendo sus miradas hasta las manos de Fu: PLANO MEDIO CORTO del grupo ahora vuelto hacia él, mirándole las manos.",
    },
    ini: "todos miran hacia el paso mal cerrado.",
    fin: "todos han girado la cabeza y ahora miran las manos de Fu, donde están las dos piedras planas; nadie levanta la voz.",
  }, "gritos, insultos, empujones, violencia, humillacion, burla"),
  escp("b9b", [ref("familias_muiscas"), ref("fu_dios")], {
    comun: `Luz de mañana. Una anciana de LAS MISMAS familias de la referencia diciéndole que no cerró el boquerón; él lo admite, y ella le pide que enseñe lo que hacía con las piedras. NO lo perdona ni lo regaña: las dos cosas caben en la misma frase. Objeto ancla: las dos caras.`,
    camara: {
      a: "PLANO MEDIO de la anciana de pie y Fu sentado, a distinta altura.",
      b: "la cámara ha BAJADO hasta la altura de él y ha rodeado: PLANO MEDIO CORTO de los dos a la misma altura, ella ya agachada delante de él.",
    },
    ini: "ella está de pie hablándole desde arriba y él la escucha sentado, con la cabeza baja.",
    fin: "ella se ha agachado hasta quedar a su altura y le señala las piedras de la mano; él ha levantado la cara y asiente.",
  }, "perdon teatral, abrazo, llanto, regaño a gritos, castigo"),

  // b10 — Marcaron un círculo y Fu mostró cómo medir el esfuerzo.
  escp("b10a", [ref("fu_dios"), ref("familias_muiscas"), ref("tejo_piedras")], {
    comun: `Anochecer. Marcan un círculo en la tierra y ${FU} muestra cómo sostener la piedra y cómo medir el esfuerzo. Enseña una técnica, no una moraleja. Objeto ancla: su mano sobre la piedra.`,
    camara: {
      a: "PLANO MACRO de su mano colocando los dedos alrededor de una piedra plana, enseñando la sujeción.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del corro al anochecer, con el círculo trazado en el suelo y ocho personas alrededor mirándolo.",
    },
    ini: "sus dedos se colocan alrededor del canto de la piedra, muy de cerca.",
    fin: "desde lejos se ve el corro entero al anochecer: el círculo en la tierra, él en el sitio de tiro y la gente repartida alrededor.",
  }, "aureola, maestro venerado, adoracion, moraleja dibujada, texto"),
  esc("b10b", [ref("tejo_piedras"), ref("plaza_fiesta_noche")], {
    comun: "Noche. Las piedras volando, chocando contra la laja, y de cada choque una chispa pequeña. Un acierto no garantiza el siguiente. Objeto ancla: la laja con marcas.",
    camara: {
      a: "PLANO MEDIO BAJO desde detrás del círculo, con una piedra llegando por el aire.",
      b: "la cámara ha AVANZADO hasta la laja: PLANO MACRO de la piedra golpeándola, con una chispa diminuta saltando y muchas marcas de golpes anteriores alrededor.",
    },
    ini: "la piedra viene por el aire hacia el círculo.",
    fin: "en la laja, muy de cerca, ha saltado una chispa diminuta del punto del golpe, entre muchas marcas viejas de otras noches.",
  }, "explosion, llamarada, fuegos artificiales, polvora, canchas modernas, cerveza"),

  // b11 — El boquerón se protegió con turnos y fogatas.
  escp("b11a", [ref("familias_muiscas"), ref("boqueron_tausa")], {
    comun: "Noche en el paso. El boquerón se protege con gente que hace turnos y con fogatas: NINGÚN juego reemplazó esa tarea. Objeto ancla: la fogata del turno.",
    camara: {
      a: "PLANO MACRO de una fogata pequeña ardiendo junto a la pared de roca.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL nocturno del boquerón con tres fogatas repartidas a lo largo del paso y figuras sentadas junto a ellas, vigilando el hueco.",
    },
    ini: "la fogata arde sola junto a la roca y no se ve a nadie.",
    fin: "desde arriba se ven las tres fogatas del turno repartidas a lo largo del paso, con gente sentada junto a cada una y el hueco de la roca vigilado.",
  }, "ejercitos, armas, batalla, muralla, torres, banderas"),
  escp("b11b", [ref("familias_muiscas"), ref("tejo_piedras"), ref("plaza_fiesta_noche")], {
    comun: "Noche, terminado el trabajo. Cuando el turno acaba, las piedras vuelan contra el círculo, y hasta quien acaba de perder ríe. El juego viene DESPUÉS del trabajo, nunca en vez de él. Objeto ancla: el círculo y la gente alrededor.",
    camara: {
      a: "PLANO MEDIO de dos figuras dejando sus puestos junto a la fogata del turno.",
      b: "la cámara las ha SEGUIDO hasta el círculo y ha retrocedido: PLANO GENERAL del corro de juego con las piedras volando y las fogatas del paso todavía encendidas al fondo.",
    },
    ini: "dos personas se levantan de la fogata del turno, relevadas.",
    fin: "en el círculo hay ya media docena lanzando piedras y riéndose, mientras al fondo siguen encendidas las fogatas del paso con sus vigías.",
  }, "borrachera, cerveza, canchas modernas, apuestas, violencia"),

  // b12 — Nunca aprendió a no distraerse. Aprendió a volver a tiempo.
  escp("b12a", [ref("fu_dios"), ref("tejo_piedras"), ref("altiplano_noche")], {
    comun: `Noche. ${FU} distrayéndose otra vez —porque nunca aprendió a no hacerlo— y, esta vez, levantando la cabeza a tiempo. NO se redime: lo que cambia es que vuelve. Objeto ancla: su cara.`,
    camara: {
      a: "PLANO MACRO de sus dedos girando una piedra plana, absorto en ella.",
      b: "la cámara ha RETROCEDIDO y ha subido a su cara: PLANO MEDIO CORTO con él levantando la vista del juego hacia el paso, que se ve desenfocado al fondo.",
    },
    ini: "los dedos giran la piedra y no hay nada más en el cuadro: está distraído otra vez.",
    fin: "ha levantado la cabeza del juego y mira hacia el paso, con la piedra todavía en la mano: se acordó, y se acordó a tiempo.",
  }, "redencion, aureola, transformacion, moraleja dibujada, texto"),
  esc("b12b", [ref("tejo_piedras"), ref("boqueron_tausa"), ref("altiplano_noche")], {
    comun: "Noche cerrada. Una luz pequeña que nadie había pedido y que todos esperaban. Dejarla de ese tamaño: una chispa. Objeto ancla: la chispa sobre la laja.",
    camara: {
      a: "PLANO MACRO de la chispa saltando de la laja, minúscula, con el pasto oscuro alrededor.",
      b: "la cámara se ha ALEJADO muchísimo hasta un GRAN PLANO GENERAL final del altiplano de noche: el boquerón con sus fogatas de vigilancia a un lado y, al otro y mucho más pequeño, el resplandor del corro del juego.",
    },
    ini: "la chispa salta de la laja y se apaga enseguida.",
    fin: "desde muy lejos, en la noche del altiplano, se ven dos luces: las fogatas del paso que alguien tiene que seguir cuidando y, más chica, la del círculo donde vuelan las piedras.",
  }, "incendio, explosion, resplandor grande, personas en primer plano, texto"),
]);
