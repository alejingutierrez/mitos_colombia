// Keyframes de José Juan, el hijo del cóndor — 18 bloques × 2 escenas × 2
// cuadros = 72 imágenes ≈ 180 s.
// Guion: guion-el-hijo-del-condor-v2.json (N=18) · Acta: acta-el-hijo-del-condor.json (36 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _wayuu-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · NO ES UN MITO DE ORIGEN: no explica el cóndor ni funda nada. Es una NOVELA
//   DE AVENTURAS WAYÚU, con roza, peones, machete y lavandera. La dirección de
//   arte va a ESE registro, no al cosmogónico: nada de solemnidad, nada de
//   aureolas, nada de amanecer fundacional.
// · EL RAPTO NO SE NARRA COMO ROMANCE. Juramía la agarra POR EL PELO, la
//   encierra y le cierra la puerta. Que le traiga danta y la vea elegante es LA
//   MIRADA DEL CAPTOR, no la de ella, y la cámara lo marca quedándose con ella
//   cuando él se va.
// · «HIJO DE ANIMAL» es el insulto que lo persigue y el nombre que el relato le
//   da. No se suaviza. Pero el inventario avisa: se resuelve POR LA REACCIÓN DE
//   LOS OTROS, nunca deformándole el rostro.
// · JUJÍA NO ES UNA BRUJA DERROTADA. Empieza vieja y peleona, termina
//   ELIGIENDO: se casa cuando comprueba que él es más fuerte que ella. La oreja
//   cortada es su prenda, no su castigo.
// · LA RANCHERÍA DE CIVILIZADOS ES ESCENARIO, NO TEMA. Aquí no hay conquista ni
//   colonos: hay un trabajo, una roza y dos peones envidiosos.
// · EL SUBTERRÁNEO DE JUJÍA es un mundo con muchachas, culebras y un caballo
//   bravo, y NO ES JEPIRA ni el mundo de los muertos. No se cruza con
//   «el-viaje-del-mas-alla»: nada de ultratumba ni de almas.
// · LA RESURRECCIÓN CON LA MEDICINA NO ES MILAGRO NI REDENCIÓN: los resucita
//   porque LOS NECESITA PARA LA ROZA. El canon lo dice sin adorno.
//
// El inventario fija además que Juramía es CÓNDOR ANDINO —cabeza y cuello
// desnudos, collar blanco, parches alares—, nunca águila calva ni ave genérica.
//
// GUION DE LUZ: mediodía de calor que abre la puerta → sombra de la montaña →
// casa de piedra en penumbra → luz de las cinco de la mañana → interior gastado
// → amanecer de la fuga → mañana del río y la ropa robada → tarde de la
// ranchería ajena → roza al sol → fuego de la cocina → pelea a mediodía →
// tarde del machete → boca de cueva → subterráneo sin sol → soga contra el
// cielo → meses de luz sin rumbo → tarde del arrepentimiento → última luz de la
// bajada.

import { CONTEXTO, DIRECCION, AVOID_BASE, PALETTE_BASE, ref, esc, escp, armar } from "./_wayuu-comun.mjs";

export const SPEC_NAME = "wayuu-condor-escenas";
export const OUT_DIR = "wayuu/videos/el-hijo-del-condor/keyframes";
export { CONTEXTO, DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; aguila calva, ave rapaz generica, ave gigante fantastica, grifo, arpia; rostro deformado, rasgos animales en una persona, hibrido humano-animal, plumas en la piel; romance, abrazo, beso, escena de intimidad, insinuacion erotica; ultratumba, almas, fantasmas, esqueletos, mundo de los muertos, barca de las almas; aureola, resplandor, milagro, iconografia religiosa, angeles; conquistadores, colonos, armaduras, carabelas, banderas coloniales; sangre abundante, mutilacion a la vista, heridas abiertas, cuerpos destrozados; castillo, torre, mazmorra, arquitectura europea";
export const PALETTE =
  PALETTE_BASE + "; la piedra gris y el musgo pardo de la montana alta entran solo en la casa del condor; el subterraneo va en pardos calientes de tierra iluminada de lado, nunca en azules ni verdes de ultratumba";

const JJ =
  "EL MISMO José Juan de la referencia (hombre joven wayúu de complexión fuerte, pelo negro espeso, cara ancha de rasgos marcados pero enteramente humana, manta de algodón crudo terciada o torso descubierto con wayuco según la escena, descalzo)";
const JU =
  "EL MISMO Juramía de la referencia (cóndor andino: cabeza y cuello desnudos de piel rugosa, collar de plumón blanco, parches blancos en las alas, plumaje negro mate)";
const JA =
  "LA MISMA Jujía de la referencia (mujer muy mayor, pequeña y enjuta, pelo blanco recogido, manta oscura, cara peleona y despierta)";

export const ITEMS = armar([
  // b1 — La niña sintió calor, abrió la puerta y se asomó. Afuera rondaba Juramía.
  esc("b1a", [ref("casa_del_encierro"), ref("piichi")], {
    comun: `Mediodía de calor duro fuera, penumbra sofocante dentro de la casa del encierro. SINTIÓ CALOR y abrió: el gesto que desencadena todo es una puerta que se entreabre. No se muestra a la muchacha. Objeto ancla: la hoja de la puerta abriéndose.`,
    camara: {
      a: "PLANO MACRO del canto de la puerta de madera separándose del marco, con una cuña de luz blanca entrando por la rendija.",
      b: "la cámara ha RETROCEDIDO fuera de la casa y se ha elevado: PLANO GENERAL del exterior con la puerta ya entreabierta, el calor temblando sobre la arena y la llanura vacía.",
    },
    ini: "el canto de la puerta se separa del marco y entra una cuña de luz blanca.",
    fin: "desde fuera, la puerta está entreabierta y alrededor no hay más que arena y el aire temblando de calor.",
  }, "figura visible, rostro, cuerpo, celda, barrotes, cadenas"),
  esc("b1b", [ref("juramia"), ref("serrania_baja"), ref("llanura_cardonal")], {
    comun: `Mediodía. AFUERA RONDABA JURAMÍA, avisado por la tierra. ${JU}, dando vueltas en alto sobre la ranchería. Objeto ancla: la sombra del ave en la arena.`,
    camara: {
      a: "PLANO CENITAL MACRO de la sombra de un ave grande cruzando la arena caliente.",
      b: "la cámara ha BASCULADO hacia arriba siguiendo la sombra y se ha elevado: PLANO GENERAL de cielo con el cóndor girando en alto, el collar blanco y los parches de las alas bien visibles.",
    },
    ini: "la sombra de un ave grande cruza la arena caliente, vista desde arriba.",
    fin: "al mirar al cielo está el cóndor girando en alto, con el collar de plumón blanco y los parches blancos de las alas a la vista.",
  }, "aguila calva, ave fantastica, grifo, arpia, ave con cara humana"),

  // b2 — Voló de la montaña y la agarró por el pelo. La hizo su mujer.
  esc("b2a", [ref("juramia"), ref("serrania_baja")], {
    comun: `Mediodía. VOLÓ DE LA MONTAÑA: el picado del ave desde la altura hacia la llanura. Es un ataque, no un cortejo. Objeto ancla: las alas plegándose en el picado.`,
    camara: {
      a: "PLANO GENERAL de la montaña con el ave pequeña despegándose de un risco alto.",
      b: "la cámara ha CAÍDO con él en picado y se ha puesto a su altura: PLANO MEDIO del cóndor bajando con las alas medio plegadas y la llanura corriendo desenfocada debajo.",
    },
    ini: "desde lejos, el ave se despega del risco alto de la montaña.",
    fin: "a su altura y cayendo con él, el cóndor baja con las alas medio plegadas y el suelo corre borroso debajo.",
  }, "aguila calva, ave fantastica, jinete, monstruo alado"),
  escp("b2b", [ref("casa_de_piedra"), ref("nina_del_encierro"), ref("manta_wayuu")], {
    comun: `Penumbra de la casa de piedra en la montaña. EL RAPTO NO ES ROMANCE: la agarró por el pelo y la trajo aquí. LA MISMA muchacha de la referencia, joven, de pie y sola en el cuarto de piedra, con la manta puesta. El cóndor no está en cuadro: la cámara SE QUEDA CON ELLA. Objeto ancla: su pelo revuelto.`,
    camara: {
      a: "PLANO DETALLE de su pelo negro revuelto y enredado sobre el hombro, sin que se vea la cara.",
      b: "la cámara ha RETROCEDIDO y se ha elevado en el cuarto: PLANO GENERAL de ella pequeña y de pie en mitad de la casa de piedra, con el vano cerrado al fondo.",
    },
    ini: "el pelo negro revuelto y enredado sobre el hombro llena el cuadro.",
    fin: "desde arriba se la ve pequeña y de pie en mitad del cuarto de piedra, con el vano cerrado detrás.",
  }, "romance, abrazo, beso, insinuacion, forcejeo explicito, sangre, desnudez"),

  // b3 — Salía a cazar a las cinco y cerraba bien. Le traía danta y venado.
  esc("b3a", [ref("casa_de_piedra"), ref("serrania_baja")], {
    comun: `Primera luz de las cinco de la mañana, azulada y fría en la montaña. SALÍA A CAZAR Y CERRABA BIEN: lo que cuenta la escena es el cierre, no la salida. Objeto ancla: la piedra que traba el vano.`,
    camara: {
      a: "PLANO MACRO de una piedra grande encajándose contra el vano de la casa, tapándolo.",
      b: "la cámara ha RETROCEDIDO y se ha elevado por encima del risco: GRAN PLANO GENERAL de la montaña al amanecer con la casa de piedra minúscula y cerrada en la ladera.",
    },
    ini: "una piedra grande se encaja contra el vano y lo tapa.",
    fin: "desde muy arriba, la casa es un punto cerrado en la ladera de la montaña al amanecer.",
  }, "candado, cerradura, llave, rejas, calabozo, cadenas"),
  esc("b3b", [ref("venado"), ref("casa_de_piedra"), ref("juramia")], {
    comun: `Luz de la mañana en la montaña. LE TRAÍA DANTA Y VENADO, Y LA VEÍA ELEGANTE: eso es LA MIRADA DEL CAPTOR. Se cuenta con la caza dejada en el suelo, entera y sin sangre a la vista. Objeto ancla: la pieza dejada en la entrada.`,
    camara: {
      a: "PLANO MACRO de una pata de venado y el pelaje pardo sobre la piedra del umbral.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del umbral con la pieza entera dejada ahí y el cóndor ya posado aparte, en un canto alto, mirando hacia la casa.",
    },
    ini: "la pata y el pelaje pardo del venado descansan sobre la piedra del umbral.",
    fin: "desde arriba se ve la pieza entera dejada en la entrada y al cóndor posado aparte en un canto, mirando la casa.",
  }, "sangre, visceras, destripado, carronia, banquete, romance"),

  // b4 — Se le rompió la manta y el guayuco. Los remendaba con espinas.
  esc("b4a", [ref("manta_wayuu"), ref("casa_de_piedra")], {
    comun: `Luz lateral gastada dentro de la casa. SE LE ROMPIÓ LA MANTA: la tela que llegó entera está deshilachada y abierta por los bordes. Sin cuerpo en cuadro. Objeto ancla: el roto en la tela.`,
    camara: {
      a: "PLANO MACRO del roto de la tela con las hebras sueltas y la trama abierta.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la manta entera tendida sobre la piedra, vista de arriba, con tres o cuatro rotos en sitios distintos.",
    },
    ini: "el roto de la tela deja las hebras sueltas y la trama abierta.",
    fin: "desde arriba, la manta entera tendida sobre la piedra tiene tres o cuatro rotos en sitios distintos.",
  }, "desnudez, cuerpo, anatomia, harapos europeos, mendicidad"),
  escp("b4b", [ref("nina_del_encierro"), ref("cardon"), ref("casa_de_piedra")], {
    comun: `Luz lateral. LOS REMENDABA CON ESPINAS para no quedar desnuda: coge espinas largas y las usa de aguja. Es solución práctica y digna, no miseria. Objeto ancla: la espina atravesando la tela.`,
    camara: {
      a: "PLANO MACRO de una espina larga atravesando dos bordes de tela y juntándolos.",
      b: "la cámara ha RETROCEDIDO y ha subido a la altura de los ojos: PLANO MEDIO de ella sentada contra la pared de piedra, cosiendo con la espina, concentrada.",
    },
    ini: "la espina larga atraviesa los dos bordes de tela y los junta.",
    fin: "a la altura de los ojos se la ve sentada contra la piedra, cosiendo con la espina y concentrada en el trabajo.",
  }, "desnudez, cuerpo, anatomia, llanto teatral, sangre, herida"),

  // b5 — Tuvo un hijo que creció más rápido. Ya hombre, propuso huir.
  escp("b5a", [ref("casa_de_piedra"), ref("nina_del_encierro"), ref("jose_juan")], {
    comun: `Luz de la casa de piedra. CRECIÓ MÁS RÁPIDO QUE LOS OTROS: el salto de tamaño se cuenta con las marcas de estatura en la pared de piedra, muy separadas entre sí. Objeto ancla: las rayas en la piedra.`,
    camara: {
      a: "PLANO MACRO de tres rayas rascadas en la pared de piedra, la de arriba muy por encima de las otras dos.",
      b: "la cámara ha RETROCEDIDO y ha girado: PLANO MEDIO de la madre de pie junto a la pared con su hijo ya hombre a su lado, sacándole una cabeza.",
    },
    ini: "tres rayas rascadas en la piedra, y la de arriba está mucho más alta que las otras dos.",
    fin: "al girar la cámara se ve por qué: el hijo ya es un hombre y le saca una cabeza a la madre.",
  }, "niño monstruoso, rasgos animales, plumas, deformidad, crecimiento magico, resplandor"),
  escp("b5b", [ref("jose_juan"), ref("nina_del_encierro"), ref("casa_de_piedra")], {
    comun: `Penumbra. YA HOMBRE, PROPUSO HUIR a la tierra de ella. ${JJ}, hablándole bajo a la madre, los dos sentados en el suelo de piedra. Objeto ancla: las dos caras cerca, hablando bajo.`,
    camara: {
      a: "PLANO MEDIO CORTO de los dos de perfil, muy juntos, él hablándole al oído.",
      b: "la cámara ha RETROCEDIDO hasta el fondo del cuarto: PLANO GENERAL con los dos pequeños en un rincón y la piedra que tapa el vano ocupando medio cuadro.",
    },
    ini: "los dos están de perfil y muy juntos, y él le habla al oído.",
    fin: "desde el fondo del cuarto se ve a los dos pequeños en su rincón y, ocupando medio cuadro, la piedra que tapa la salida.",
  }, "romance, abrazo, llanto teatral, rostro deformado, plumas"),

  // b6 — Estudió la puerta hasta dar con su secreto. Huyeron al amanecer.
  esc("b6a", [ref("casa_de_piedra")], {
    comun: `Penumbra con una línea de luz. ESTUDIÓ LA PUERTA hasta dar con su secreto: manos recorriendo el canto de la piedra, buscando dónde cede. Es paciencia, no magia. Objeto ancla: los dedos en la juntura.`,
    camara: {
      a: "PLANO MACRO de unos dedos recorriendo la juntura entre la piedra y el marco, milímetro a milímetro.",
      b: "la cámara ha RETROCEDIDO y ha girado al otro lado: PLANO MEDIO de la piedra ya desplazada un palmo, con una franja de luz entrando por el hueco nuevo.",
    },
    ini: "unos dedos recorren la juntura entre la piedra y el marco, milímetro a milímetro.",
    fin: "la piedra se ha corrido un palmo y por el hueco nuevo entra una franja de luz.",
  }, "explosion, magia, resplandor, llave, cerradura, herramienta moderna"),
  escp("b6b", [ref("jose_juan"), ref("nina_del_encierro"), ref("trupillo"), ref("serrania_baja")], {
    comun: `Amanecer frío en la montaña. LE DIO CORTEZA DE TRUPILLO para cubrirse y huyeron: bajan por la ladera, ella envuelta en corteza fibrosa sobre la manta rota. Objeto ancla: la corteza sobre los hombros.`,
    camara: {
      a: "PLANO DETALLE de la corteza fibrosa de trupillo puesta sobre un hombro, con las fibras largas colgando.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL de la ladera al amanecer con los dos diminutos bajando por el filo y la casa de piedra ya arriba y lejos.",
    },
    ini: "la corteza fibrosa de trupillo está puesta sobre el hombro y le cuelgan las fibras largas.",
    fin: "desde muy arriba se les ve diminutos bajando por el filo de la ladera, con la casa de piedra ya lejos allá arriba.",
  }, "persecucion, ave atacando, sangre, desnudez, dramatismo"),

  // b7 — Robaron vestidos a una lavandera. Lo llamaron hijo de animal.
  escp("b7a", [ref("lavandera"), ref("arroyo_seco"), ref("manta_wayuu")], {
    comun: `Mañana. LE ROBARON LOS VESTIDOS A UNA LAVANDERA: la ropa está tendida sobre las piedras y ellos se la llevan sin que ella los vea. Es picaresca de novela de aventuras, no crueldad. Objeto ancla: la ropa tendida en la piedra.`,
    camara: {
      a: "PLANO MACRO de una tela húmeda extendida sobre una piedra plana, con el sol dándole encima.",
      b: "la cámara ha RETROCEDIDO y ha girado: PLANO GENERAL del arroyo con la lavandera agachada de espaldas en un extremo y dos figuras alejándose por el otro con la ropa en el brazo.",
    },
    ini: "una tela húmeda está extendida sobre la piedra plana con el sol encima.",
    fin: "desde lejos, la lavandera sigue agachada de espaldas en un extremo y dos figuras se van por el otro con la ropa en el brazo.",
  }, "violencia, amenaza, arma, forcejeo, llanto"),
  escp("b7b", [ref("jose_juan"), ref("alijuna"), ref("rancheria")], {
    comun: `Tarde. EN LA RANCHERÍA DE CIVILIZADOS LO LLAMARON HIJO DE ANIMAL. El insulto NO se suaviza, pero se resuelve POR LA REACCIÓN DE LOS OTROS: caras que se apartan, alguien que grita. ${JJ}, con la cara ENTERAMENTE HUMANA. Objeto ancla: las caras que lo señalan.`,
    camara: {
      a: "PLANO MEDIO CORTO de una cara gritando algo con la boca abierta, de perfil.",
      b: "la cámara ha GIRADO 180 grados y ha retrocedido: PLANO GENERAL con él parado en mitad del camino, quieto, y ocho personas alrededor apartándose o mirándolo de lado.",
    },
    ini: "una cara grita algo con la boca abierta, de perfil.",
    fin: "al girar se ve a quién le gritan: él está parado en mitad del camino y ocho personas se apartan o lo miran de lado.",
  }, "rostro deformado, plumas en la piel, rasgos animales, hibrido, monstruo, colonos, armaduras"),

  // b8 — Encontró trabajo; el cóndor enloqueció buscándolos. Abrió roza.
  escp("b8a", [ref("juramia"), ref("rancheria"), ref("llanura_cardonal")], {
    comun: `Noche. EL CÓNDOR ENLOQUECIÓ BUSCÁNDOLOS DE NOCHE: pasa bajo sobre las casas una y otra vez. Es desesperación, no amenaza sobrenatural. Objeto ancla: el ave pasando bajo.`,
    camara: {
      a: "PLANO GENERAL nocturno de las rancherías dispersas bajo la luna, todo quieto.",
      b: "la cámara ha SUBIDO de golpe y se ha puesto a la altura del vuelo: PLANO MEDIO del cóndor pasando muy bajo sobre los techos de palma, con las alas abiertas del todo.",
    },
    ini: "las rancherías están quietas bajo la luna, vistas de lejos.",
    fin: "a la altura del vuelo, el cóndor pasa muy bajo sobre los techos de palma con las alas abiertas del todo.",
  }, "monstruo, ave demoniaca, ojos brillantes, garras gigantes, ataque, sangre"),
  escp("b8b", [ref("roza"), ref("jose_juan"), ref("llanura_cardonal")], {
    comun: `Sol alto. CANSADO DE SERVIR, ABRIÓ ROZA con mamón y güinul: desmonta un pedazo de tierra para sembrar lo suyo. Trabajo de machete y azada, registro de novela de aventuras. Objeto ancla: el machete abriendo monte.`,
    camara: {
      a: "PLANO MACRO de la hoja del machete entrando en un tallo verde y las virutas saltando.",
      b: "la cámara ha RETROCEDIDO y se ha elevado mucho: GRAN PLANO GENERAL en picado del claro ya abierto en el monte, con él pequeño trabajando en el borde y los tocones repartidos.",
    },
    ini: "la hoja del machete entra en el tallo verde y saltan las virutas.",
    fin: "desde muy arriba se ve el claro ya abierto en el monte, con los tocones repartidos y él pequeño trabajando en un borde.",
  }, "incendio, tala industrial, maquinaria, esclavitud, latigos, capataces"),

  // b9 — Contrató dos peones. Jeyú cocinaba cuando Jujía pidió más comida.
  escp("b9a", [ref("jose_juan"), ref("jeyu"), ref("segundo_peon"), ref("roza")], {
    comun: `Mañana en la roza. CONTRATÓ DOS PEONES Y DIJO LLAMARSE JOSÉ JUAN: el nombre se lo pone él, y ése es el gesto. Los tres de pie en el claro, tratando. Objeto ancla: las tres figuras en el claro.`,
    camara: {
      a: "PLANO MEDIO CORTO de él de frente diciendo su nombre, con los dos peones desenfocados detrás.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del claro con los tres repartidos y cada uno ya cogiendo una herramienta distinta.",
    },
    ini: "de frente y cerca, dice su nombre, con los dos peones borrosos detrás.",
    fin: "desde arriba, los tres están repartidos por el claro y cada uno ha cogido ya una herramienta distinta.",
  }, "contrato escrito, papeles, dinero, esclavitud, latigos, uniformes"),
  escp("b9b", [ref("jeyu"), ref("jujia"), ref("fuego_y_cocina")], {
    comun: `Mediodía junto al fuego de la cocina. JEYÚ COCINABA CUANDO JUJÍA, UNA VIEJA, PIDIÓ MÁS COMIDA. ${JA}, plantada delante de la olla con la totuma en la mano. Objeto ancla: la totuma extendida.`,
    camara: {
      a: "PLANO MACRO de la olla al fuego con el caldo hirviendo y el cucharón dentro.",
      b: "la cámara ha RETROCEDIDO y ha girado: PLANO MEDIO con Jeyú agachado junto al fuego y la vieja de pie a su lado, la totuma extendida y la cara terca.",
    },
    ini: "la olla hierve al fuego con el cucharón dentro.",
    fin: "al retroceder aparecen los dos: Jeyú agachado junto al fuego y la vieja de pie a su lado con la totuma extendida y la cara terca.",
  }, "bruja, sombrero puntiagudo, caldero magico, verrugas, monstruo, humo verde"),

  // b10 — Pelearon: le hinchó un ojo y comió todo. Culparon una chispa y una avispa.
  escp("b10a", [ref("jeyu"), ref("jujia"), ref("fuego_y_cocina")], {
    comun: `Mediodía. PELEARON y ella ganó: a Jeyú se le ve después con un ojo hinchado y la olla vacía volteada. La pelea NO se muestra; se ve el resultado. Objeto ancla: la olla volteada y vacía.`,
    camara: {
      a: "PLANO MACRO de la olla volteada en la arena con el fondo raspado y limpio.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO de Jeyú sentado aparte con un ojo hinchado, mirando el fuego apagado, y ni rastro de la vieja.",
    },
    ini: "la olla está volteada en la arena, raspada y limpia por dentro.",
    fin: "Jeyú está sentado aparte con un ojo hinchado, mirando el fuego apagado, y la vieja ya no está.",
  }, "golpes en cuadro, sangre, forcejeo explicito, magia, rayos, humo verde"),
  escp("b10b", [ref("jose_juan"), ref("jeyu"), ref("segundo_peon"), ref("roza")], {
    comun: `Tarde. JEYÚ CULPÓ UNA CHISPA; EL OTRO PEÓN, UNA AVISPA. Las dos excusas son ridículas y los dos las sostienen con cara seria. Objeto ancla: las dos caras mintiendo.`,
    camara: {
      a: "PLANO MEDIO CORTO de Jeyú señalándose el ojo hinchado con cara seria.",
      b: "la cámara ha hecho un PANORÁMICO al otro peón y ha retrocedido: PLANO GENERAL con los dos peones en fila explicándose y José Juan de pie enfrente, con los brazos cruzados, sin creerles.",
    },
    ini: "Jeyú se señala el ojo hinchado poniendo cara seria.",
    fin: "desde lejos se ve la escena entera: los dos peones en fila dando explicaciones y José Juan enfrente con los brazos cruzados.",
  }, "burla exagerada, caricatura, golpes, sangre, magia"),

  // b11 — Exigieron que cocinara José Juan. Él tenía la comida lista.
  escp("b11a", [ref("jose_juan"), ref("jeyu"), ref("segundo_peon"), ref("fuego_y_cocina")], {
    comun: `Mañana. LOS DOS EXIGIERON QUE COCINARA ÉL: le ponen el cucharón en la mano, y él acepta sin discutir. Objeto ancla: el cucharón cambiando de mano.`,
    camara: {
      a: "PLANO DETALLE del cucharón de palo pasando de una mano a otra.",
      b: "la cámara ha RETROCEDIDO y ha girado al fuego: PLANO MEDIO de él ya agachado junto a la olla, echando dentro lo que ha traído, y los dos peones alejándose al fondo.",
    },
    ini: "el cucharón de palo pasa de una mano a otra.",
    fin: "él ya está agachado junto a la olla echando dentro lo que trajo, y los dos peones se alejan al fondo.",
  }, "burla, humillacion, golpes, desprecio teatral"),
  escp("b11b", [ref("jose_juan"), ref("jujia"), ref("fuego_y_cocina")], {
    comun: `Mediodía. ÉL TENÍA YA LA COMIDA LISTA CUANDO LLEGÓ LA VIEJA: está preparado, y ella llega igual. Los dos se miden antes de decir nada. Objeto ancla: las dos miradas cruzadas.`,
    camara: {
      a: "PLANO MACRO de la olla tapada y quieta junto al fuego bajo, todo listo.",
      b: "la cámara ha RETROCEDIDO y se ha elevado en diagonal: PLANO GENERAL con él de pie a un lado de la olla y la vieja de pie al otro, separados por el fuego y mirándose.",
    },
    ini: "la olla está tapada y quieta junto al fuego bajo: todo listo.",
    fin: "desde arriba se ven los dos de pie, uno a cada lado del fuego, midiéndose antes de decir nada.",
  }, "bruja, caldero magico, humo verde, hechizos, monstruo"),

  // b12 — «No eres animal, pero sí eres hijo de animal». Esta vez él ganó.
  escp("b12a", [ref("jujia"), ref("jose_juan"), ref("fuego_y_cocina")], {
    comun: `Mediodía. LA FRASE QUE LO NOMBRA: no eres animal, pero sí eres hijo de animal. Se la dice a la cara, sin miedo. Objeto ancla: la boca de la vieja diciéndolo.`,
    camara: {
      a: "PLANO GENERAL de los dos separados por el fuego, ella hablando.",
      b: "la cámara ha AVANZADO hasta ella: PRIMER PLANO de la cara de la vieja terminando la frase, con los ojos fijos en él.",
    },
    ini: "los dos están separados por el fuego y ella empieza a hablar.",
    fin: "de muy cerca se le ve a la vieja acabar la frase con los ojos clavados en él.",
  }, "rostro deformado, plumas, rasgos animales, hibrido, monstruo, bruja"),
  escp("b12b", [ref("jose_juan"), ref("jujia"), ref("roza")], {
    comun: `Mediodía. PELEARON Y ESTA VEZ ÉL GANÓ. La pelea NO se muestra: se ve el después, con la olla en pie y ella retrocediendo. Jujía no es una bruja derrotada, es alguien que acaba de medir una fuerza. Objeto ancla: la olla intacta.`,
    camara: {
      a: "PLANO MACRO de la olla todavía en pie junto al fuego, tapada y sin tocar.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del claro con él de pie junto a la olla y ella alejándose de espaldas hacia el monte, sin correr.",
    },
    ini: "la olla sigue en pie junto al fuego, tapada y sin tocar.",
    fin: "desde arriba, él está de pie junto a la olla y ella se aleja de espaldas hacia el monte, sin correr.",
  }, "golpes en cuadro, sangre, humillacion, bruja derrotada, magia, rayos"),

  // b13 — La persiguió con machete: cuatro planazos. Al meterse, le cortó la oreja.
  escp("b13a", [ref("jose_juan"), ref("jujia"), ref("llanura_cardonal"), ref("armas")], {
    comun: `Tarde. LA PERSIGUIÓ CON MACHETE Y LE DIO CUATRO PLANAZOS: de plano, no de filo, y eso importa. La persecución se cuenta con la distancia entre los dos. Objeto ancla: el machete de plano.`,
    camara: {
      a: "PLANO DETALLE de la hoja del machete girando en la mano hasta quedar de plano.",
      b: "la cámara ha RETROCEDIDO y se ha elevado mucho: GRAN PLANO GENERAL en picado de la carrera entre los cardones, ella delante y él detrás, separados por unos pasos.",
    },
    ini: "la hoja del machete gira en la mano hasta quedar de plano.",
    fin: "desde muy arriba se ve la carrera entre los cardones: ella delante, él detrás, unos pasos entre los dos.",
  }, "sangre, cortes, heridas, filo entrando, mutilacion a la vista, cadaver"),
  esc("b13b", [ref("cueva"), ref("llanura_cardonal")], {
    comun: `Tarde. AL METERSE EN LA CUEVA LE CORTÓ LA OREJA: el corte NO se muestra. Lo que queda en cuadro es la boca de la cueva tragándosela y algo pequeño caído en la arena de la entrada. Objeto ancla: la boca de la cueva.`,
    camara: {
      a: "PLANO MEDIO de la boca de la cueva desde fuera, oscura, con el polvo todavía en el aire.",
      b: "la cámara ha AVANZADO hasta el umbral y ha basculado al suelo: PLANO MACRO de la arena de la entrada con una cosa pequeña caída ahí, sin sangre alrededor.",
    },
    ini: "la boca de la cueva se ve desde fuera, oscura, con el polvo todavía flotando.",
    fin: "en la arena del umbral hay una cosa pequeña caída, y no hay sangre alrededor.",
  }, "sangre, oreja a la vista, herida, mutilacion, gore, cadaver"),

  // b14 — Volvió hermosa por su oreja. Ofreció a su hija y subió con dos.
  escp("b14a", [ref("jujia"), ref("majayulu"), ref("cueva")], {
    comun: `Tarde. VOLVIÓ HERMOSA POR SU OREJA: Jujía reaparece joven —el inventario le da el estado de majayura— y viene a negociar, no a suplicar. Es ELECCIÓN suya. Objeto ancla: el lado de la cabeza donde falta la oreja.`,
    camara: {
      a: "PLANO DETALLE del lado de una cabeza joven, con el pelo recogido y el hueco donde debería ir la oreja.",
      b: "la cámara ha RETROCEDIDO y ha girado al frente: PLANO MEDIO de ella entera, ya joven, de pie en la boca de la cueva, mirando de frente y sin bajar la cara.",
    },
    ini: "el lado de la cabeza, con el pelo recogido y el hueco donde debería ir la oreja.",
    fin: "de frente y entera se la ve ya joven, de pie en la boca de la cueva, mirando sin bajar la cara.",
  }, "bruja, transformacion magica, resplandor, humo, particulas, sangre, herida abierta"),
  escp("b14b", [ref("cueva"), ref("jose_juan"), ref("majayulu")], {
    comun: `Tarde. OFRECIÓ A SU HIJA Y ÉL SUBIÓ CON DOS MUCHACHAS: el trato es un trato, y las muchachas suben por su pie. Nada de captura ni de mercancía. Objeto ancla: las manos que se dan.`,
    camara: {
      a: "PLANO DETALLE de dos manos cerrando un trato, agarradas por la muñeca.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la boca de la cueva con él saliendo por delante y dos muchachas subiendo detrás por su propio pie.",
    },
    ini: "dos manos cierran el trato agarradas por la muñeca.",
    fin: "desde arriba se ve la boca de la cueva con él saliendo delante y dos muchachas subiendo detrás por su pie.",
  }, "captura, cuerdas, mercancia, subasta, violencia, desnudez, insinuacion"),

  // b15 — Ofreció otras dos, guardadas por dos culebras. Las cortó en el aire.
  esc("b15a", [ref("culebras_guardianas"), ref("dominio_subterraneo")], {
    comun: `Luz cálida de lado en el subterráneo. NO ES JEPIRA NI EL MUNDO DE LOS MUERTOS: es un mundo con muchachas, culebras y un caballo bravo, iluminado en pardos calientes. DOS CULEBRAS BRAVAS guardan a las otras dos. Objeto ancla: las dos culebras enroscadas.`,
    camara: {
      a: "PLANO MACRO de la escama de una culebra grande enroscada, con el brillo de la piel.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la sala subterránea con las dos culebras enroscadas en el suelo y, detrás de ellas, un espacio cerrado.",
    },
    ini: "las escamas de la culebra enroscada llenan el cuadro con el brillo de la piel.",
    fin: "desde arriba se ve la sala entera: las dos culebras enroscadas en el suelo y detrás de ellas un espacio cerrado.",
  }, "ultratumba, almas, esqueletos, fantasmas, azules y verdes de otro mundo, demonios"),
  escp("b15b", [ref("jose_juan"), ref("culebras_guardianas"), ref("dominio_subterraneo"), ref("armas")], {
    comun: `Luz cálida de lado. LAS CORTÓ EN EL AIRE y subió con ellas: el corte NO se muestra. Se ve el machete alzado y luego las culebras quietas en el suelo, sin sangre. Objeto ancla: el machete alzado.`,
    camara: {
      a: "PLANO DETALLE del machete alzado contra la luz lateral, quieto en lo alto del gesto.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la sala con las dos culebras ya quietas en el suelo y él pasando por encima hacia el fondo, con dos muchachas detrás.",
    },
    ini: "el machete está alzado contra la luz, quieto en lo alto del gesto.",
    fin: "desde arriba, las dos culebras están quietas en el suelo y él pasa por encima hacia el fondo con dos muchachas detrás.",
  }, "sangre, cortes, visceras, animales despedazados, gore"),

  // b16 — Los peones le cortaron la soga. Anduvo meses hasta que Jujía lo sacó.
  esc("b16a", [ref("cordeleria"), ref("cueva"), ref("dominio_subterraneo")], {
    comun: `Contraluz duro en la boca del pozo. LOS PEONES, ENVIDIOSOS, LE CORTARON LA SOGA ABAJO: el cabo cae. Sin figuras identificables arriba, sólo el hueco de luz. Objeto ancla: el cabo de la soga cayendo.`,
    camara: {
      a: "PLANO MACRO del cabo de la soga deshilachándose y soltándose, con las fibras abriéndose.",
      b: "la cámara ha CAÍDO con el cabo hasta el fondo y ha basculado hacia arriba: PLANO GENERAL en contrapicado del pozo con el círculo de luz allá arriba, muy pequeño, y la soga amontonada abajo.",
    },
    ini: "el cabo se deshilacha y se suelta, con las fibras abriéndose.",
    fin: "desde el fondo y mirando arriba, el círculo de luz es un punto pequeñísimo y la soga está amontonada en el suelo.",
  }, "cuerpo cayendo, sangre, ultratumba, esqueletos, fantasmas"),
  escp("b16b", [ref("jose_juan"), ref("jujia"), ref("dominio_subterraneo")], {
    comun: `Luz cálida de lado, muchos meses después. ANDUVO PERDIDO HASTA QUE JUJÍA LE MOSTRÓ LA SALIDA: ella decide ayudarlo, y por eso lo hace. Objeto ancla: la mano que señala el camino.`,
    camara: {
      a: "PLANO MEDIO de él sentado en el suelo del subterráneo, la barba crecida, sin saber por dónde ir.",
      b: "la cámara ha GIRADO y ha retrocedido hasta un corredor: PLANO GENERAL con ella de pie al fondo señalando una boca de luz y él ya levantándose.",
    },
    ini: "está sentado en el suelo con la barba crecida, sin saber por dónde ir.",
    fin: "al fondo del corredor ella señala una boca de luz y él ya se está levantando.",
  }, "romance, abrazo, magia, resplandor, portal, fantasmas"),

  // b17 — Halló a los peones con sus mujeres y los mató. Lloró y los resucitó.
  escp("b17a", [ref("jose_juan"), ref("jeyu"), ref("segundo_peon"), ref("roza")], {
    comun: `Tarde. HALLÓ A LOS PEONES CON SUS MUJERES: la traición está a la vista y él lo ve desde el borde del claro. El desenlace NO se muestra. Objeto ancla: su cara viéndolo.`,
    camara: {
      a: "PLANO GENERAL del claro de la roza con los dos peones instalados como dueños, vistos desde lejos entre el monte.",
      b: "la cámara ha GIRADO 180 grados hasta su cara: PRIMER PLANO de él mirando, quieto, con el machete colgando de la mano y sin levantarlo.",
    },
    ini: "desde el monte se ve el claro con los dos peones instalados como si fueran los dueños.",
    fin: "al girar la cámara queda su cara mirándolo todo, quieta, con el machete colgando de la mano.",
  }, "sangre, cuerpos, cadaveres, golpes, gore, escena de intimidad, desnudez"),
  escp("b17b", [ref("jose_juan"), ref("oficio_de_curar"), ref("roza")], {
    comun: `Tarde. LLORÓ DE REMORDIMIENTO Y LOS RESUCITÓ CON LA MEDICINA, y el canon lo dice sin adorno: LOS NECESITA PARA LA ROZA. No es milagro ni redención. Se cuenta con el frasco de remedio y con los dos ya de pie trabajando. Objeto ancla: el recipiente de la medicina.`,
    camara: {
      a: "PLANO MACRO de un recipiente pequeño de calabazo con el tapón sacado, en su mano.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del claro con los dos peones otra vez de pie y con la azada, y él aparte mirándolos trabajar.",
    },
    ini: "el recipiente pequeño de calabazo está destapado en su mano.",
    fin: "desde arriba, los dos peones están otra vez de pie con la azada y él, aparte, los mira trabajar.",
  }, "aureola, resplandor, milagro, angeles, cruces, cadaveres, sangre, tumbas"),

  // b18 — Les dejó las mujeres, le pegó la oreja a Jujía y bajaron juntos.
  escp("b18a", [ref("jujia"), ref("jose_juan"), ref("roza")], {
    comun: `Última luz. LES DEJÓ LAS MUJERES Y LE PEGÓ LA OREJA A JUJÍA: el gesto de cierre es devolverle su prenda. La oreja es SU PRENDA, no su castigo. Objeto ancla: la mano en el lado de la cabeza.`,
    camara: {
      a: "PLANO DETALLE de una mano puesta en el lado de la cabeza de ella, tapándole el hueco.",
      b: "la cámara ha RETROCEDIDO y ha girado al frente: PLANO MEDIO de los dos de pie uno frente al otro, ella con la cabeza ya entera y los dos mirándose de igual a igual.",
    },
    ini: "una mano está puesta en el lado de su cabeza, tapando el hueco.",
    fin: "de frente se ve a los dos de pie, ella con la cabeza ya entera, mirándose de igual a igual.",
  }, "magia, resplandor, particulas, sangre, herida, romance, beso"),
  escp("b18b", [ref("jose_juan"), ref("jujia"), ref("caballo"), ref("cueva")], {
    comun: `Última luz. AMANSÓ SU CABALLO Y BAJARON JUNTOS AL SUBTERRÁNEO: el caballo bravo, ya quieto, y los dos entrando por la boca de la cueva. Final de novela de aventuras, no apoteosis. Objeto ancla: la mano en el cuello del caballo.`,
    camara: {
      a: "PLANO MACRO de una mano abierta sobre el cuello de un caballo, con el pelo del animal erizado calmándose.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL final con los dos y el caballo entrando por la boca de la cueva y la llanura entera al atardecer detrás.",
    },
    ini: "una mano abierta descansa en el cuello del caballo y el pelo erizado del animal se va calmando.",
    fin: "desde muy arriba se les ve entrar los dos con el caballo por la boca de la cueva, con la llanura entera al atardecer detrás.",
  }, "aureola, apoteosis, monumento, portal magico, ultratumba, fantasmas, texto"),
]);
