// Keyframes de Kuriruputá y sus hermanas — 18 bloques × 2 escenas × 2 cuadros
// = 72 imágenes ≈ 180 s.
// Guion: guion-el-indio-kuriruputa-v2.json (N=18) · Acta: acta-el-indio-kuriruputa.json (36 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _wayuu-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · EL NUDO DEL RELATO ES QUE NO HABÍA HOMBRES: llama a todos y sólo vienen las
//   mujeres. Por eso sale solo, y POR ESO SON ELLAS QUIENES TERMINAN LA PELEA.
// · LAS HERMANAS NO SON RESCATADORAS PASIVAS: vienen creyéndolo muerto, con un
//   pañuelo de cuatro varas para el cadáver, y ACABAN MATANDO A MÁS KOSINAS QUE
//   ÉL. El inventario lo dice sin rodeos: «las mujeres ganan la pelea; es la
//   corrección más urgente al imaginario del corpus».
// · LOS KOSINAS SE LANZAN SOBRE ELLAS POR CREERLAS PRESA FÁCIL, y ése es el
//   error que las revela. LA CÁMARA NO LAS CONVIERTE EN VÍCTIMAS: en ningún
//   plano se las encuadra acorraladas, suplicantes ni caídas.
// · KURIRUPUTÁ ES INVULNERABLE A LAS BALAS Y A LAS FLECHAS IGUARAYO, PERO NO
//   DEL TODO: la rodilla desastillada es real y lo deja casi sin fuerzas.
// · EL ROBO ESTÁ CONTADO CON DETALLE TÉCNICO —el hueco en el costado opuesto a
//   la puerta, la cerca vuelta a cerrar— y ESE OFICIO SE CONSERVA EN EL PLANO.
// · QUIEN DA LA ALARMA ES EL NOVILLO BRAVO, no una persona: el animal que no se
//   dejó robar es el que despierta al dueño.
// · LA CURA DEL SUEÑO incluye abandonar a su mujer y tomar a una criada. Está
//   en el canon, SE NARRA SIN GLOSA y sin convertirlo en moraleja.
// · EL SUEÑO QUE ORDENA Y SE CUMPLE es el mismo procedimiento que en
//   «el-indio-guerrero-ipuana», pero INVERTIDO: allá el hijo no lo obedece y
//   muere, aquí él lo obedece y vive. Son fichas distintas.
//
// El inventario subraya además que el canon describe la riqueza de Kuriruputá
// COMO BRILLO DEL ATUENDO, y lo llama «el mejor argumento del corpus contra
// vestir a los wayúu de liso»: aquí las cenefas tejidas, las tumas y los
// adornos van con todo su color.
//
// GUION DE LUZ: mañana de la riqueza que brilla → cardonal de la espera →
// noche del hueco en la cerca → carrera del novillo → arreo a empujones →
// LUNA AZUL sobre las huellas → amanecer de la llamada sin hombres → luz de los
// tres fajones → mediodía del tiroteo → tarde del vuelco → polvo del camino de
// vuelta → suelo de la rodilla → última luz del cerco → llegada de las hermanas
// con el pañuelo → sombra del cerrito → mediodía de la persecución → tarde en
// que ellas ganan → noche del sueño y años de después.

import { CONTEXTO, DIRECCION, AVOID_BASE, PALETTE_BASE, ref, esc, escp, armar } from "./_wayuu-comun.mjs";

export const SPEC_NAME = "wayuu-kuriruputa-escenas";
export const OUT_DIR = "wayuu/videos/el-indio-kuriruputa/keyframes";
export { CONTEXTO, DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; mujeres acorraladas, suplicantes, caidas, arrastradas o en posicion de victima; violencia sexual, forcejeo erotico, ropa rasgada, desnudez; sangre abundante, heridas abiertas, huesos a la vista, visceras, cadaveres amontonados; western, sombreros de vaquero, saloon, revolveres de pelicula, duelo al sol; aura, halo, escudo de energia, balas rebotando con destellos, camara lenta dibujada; uniformes, ejercito, caballeria, banderas; aureola, milagro, resplandor de curacion; vestuario liso y sin cenefas en la gente de rango";
export const PALETTE =
  PALETTE_BASE + "; el atuendo de Kuriruputa lleva TODO el color del corpus —cenefas tejidas, tumas rojas y naranjas, adornos— porque el canon dice que brillaba; el azul frio de la luna aparece SOLO en el bloque de las huellas";

const KU =
  "EL MISMO Kuriruputá de la referencia (hombre wayúu adulto, pelo negro, manta de algodón con CENEFAS TEJIDAS de kanas en rojo, naranja y negro, faja ancha labrada, collares de tumas rojas al cuello, descalzo), vestido de modo que se nota de lejos que es rico";
const HE =
  "LAS MISMAS hermanas de Kuriruputá de la referencia (tres mujeres wayúu adultas, mantas largas hasta el tobillo de una pieza, rojo tierra y crudo, con cenefa tejida en el ruedo, pelo negro recogido, descalzas), de porte firme y nunca asustadas";

export const ITEMS = armar([
  // b1 — Era rico y andaba tan bien puesto que brillaba. Su casa en Matumuy.
  escp("b1a", [ref("kuriruputa"), ref("adorno_y_valor")], {
    comun: `Mañana. ERA RICO Y ANDABA TAN BIEN PUESTO QUE BRILLABA, y el canon lo dice del ATUENDO: cenefas tejidas, tumas rojas, faja labrada. El color va entero, nada de liso. Objeto ancla: las tumas al cuello.`,
    camara: {
      a: "PLANO MACRO de un collar de tumas rojas y naranjas sobre la tela, con la luz de la mañana encima.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO de él entero de frente, con la manta de cenefas, la faja labrada y los collares, de pie.",
    },
    ini: "el collar de tumas rojas y naranjas sobre la tela, con la luz de la mañana encima.",
    fin: "de frente y a media distancia se le ve entero: la manta de cenefas, la faja labrada y los collares.",
  }, "oro, joyas europeas, monedas, ropa lisa sin cenefas, sombrero de vaquero"),
  esc("b1b", [ref("matumuy"), ref("corral"), ref("ganado_vacuno")], {
    comun: `Mañana. SU CASA ESTABA EN MATUMUY, CON LOS CORRALES: la riqueza también es el ganado y las cercas bien hechas. Sin figuras. Objeto ancla: la cerca de varas bien trabada.`,
    camara: {
      a: "PLANO MACRO de la trabazón de varas de una cerca, atada con cordel y sin un hueco.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL en picado de Matumuy con la casa, tres corrales llenos y el ganado dentro.",
    },
    ini: "la trabazón de varas de la cerca está atada con cordel y no tiene un solo hueco.",
    fin: "desde muy arriba se ve Matumuy entero: la casa, tres corrales llenos y el ganado dentro.",
  }, "hacienda colonial, establos europeos, molinos, alambre de puas"),

  // b2 — Unos kosinas salieron por animales. Esperaron en Kuitsá.
  escp("b2a", [ref("cardon"), ref("kuitsa"), ref("llanura_cardonal")], {
    comun: `Tarde. UNOS KOSINAS SALIERON POR ANIMALES y ESPERARON ENTRE LOS CARDONES DE KUITSÁ: gente wayúu agazapada entre las matas, sin nada que los distinga de nadie salvo que están escondidos. Objeto ancla: los cuerpos entre los cardones.`,
    camara: {
      a: "PLANO MACRO de una mano quieta apoyada en el tronco de un cardón, con la piel contra las espinas.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del cardonal junto a la laguna con seis figuras repartidas y quietas entre las matas.",
    },
    ini: "una mano quieta se apoya en el tronco del cardón, con la piel pegada a las espinas.",
    fin: "desde arriba, en el cardonal junto a la laguna hay seis figuras repartidas y quietas entre las matas.",
  }, "bandidos de western, pañuelos en la cara, monstruos, caricatura de villanos"),
  esc("b2b", [ref("matumuy"), ref("llanura_cardonal"), ref("constelaciones")], {
    comun: `Noche cerrada. A LAS NUEVE ESTABAN EN MATUMUY: el trayecto se cuenta con el paso del tiempo sobre el mismo terreno. Sin figuras en plano cerrado. Objeto ancla: la casa quieta en la noche.`,
    camara: {
      a: "PLANO GENERAL nocturno de Matumuy desde lejos, con la casa y los corrales quietos bajo la luna.",
      b: "la cámara ha AVANZADO en travelling bajo hasta la cerca del corral: PLANO MEDIO de las varas desde fuera, con seis sombras alargadas cayendo sobre ellas.",
    },
    ini: "desde lejos, la casa y los corrales están quietos bajo la luna.",
    fin: "ya en la cerca, las varas reciben seis sombras alargadas que caen sobre ellas desde fuera.",
  }, "antorchas, fuego, gritos, monstruos, ojos brillantes"),

  // b3 — Abrieron un hueco al lado opuesto de la puerta y volvieron a cerrar.
  esc("b3a", [ref("corral"), ref("cordeleria")], {
    comun: `Noche. EL OFICIO DEL ROBO, que el canon cuenta con detalle técnico: ABRIERON UN HUECO AL LADO OPUESTO DE LA PUERTA, para que nadie mirara hacia allí. Objeto ancla: las varas soltándose una a una.`,
    camara: {
      a: "PLANO MACRO de unos dedos deshaciendo el nudo del cordel que ata dos varas de la cerca.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL en picado del corral entero con el portillo cerrado en un costado y, justo enfrente, un hueco abierto en la cerca.",
    },
    ini: "unos dedos deshacen el nudo del cordel que ata dos varas.",
    fin: "desde arriba se ve la maniobra completa: el portillo sigue cerrado en un costado y enfrente hay un hueco abierto.",
  }, "explosivos, herramientas modernas, alambre cortado, fuego"),
  esc("b3b", [ref("ganado_vacuno"), ref("corral"), ref("constelaciones")], {
    comun: `Noche. SACARON LOS MEJORES NOVILLOS Y VOLVIERON A CERRAR: el detalle es que el hueco queda tapado otra vez, para ganar tiempo. Objeto ancla: la cerca recompuesta.`,
    camara: {
      a: "PLANO MEDIO del hueco con los novillos pasando de uno en uno, vistos desde fuera.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del corral con la cerca ya recompuesta, sin señal del hueco, y una fila de reses alejándose por la arena.",
    },
    ini: "por el hueco pasan los novillos de uno en uno, vistos desde fuera.",
    fin: "desde arriba, la cerca está otra vez entera y sin señal del hueco, y una fila de reses se aleja por la arena.",
  }, "sangre, animales heridos, fuego, gritos, western"),

  // b4 — Un novillo bravo corrió detrás y huyeron. «Mejor será dejarlos».
  esc("b4a", [ref("ganado_vacuno"), ref("llanura_cardonal")], {
    comun: `Noche. UN NOVILLO MUY BRAVO CORRIÓ DETRÁS DE ELLOS: el animal no se deja robar y se revuelve. Objeto ancla: la cabeza del novillo bajando.`,
    camara: {
      a: "PLANO MACRO de la cabeza de un novillo bajando con los cuernos por delante y el vaho saliendo.",
      b: "la cámara ha RETROCEDIDO en travelling hacia atrás: PLANO GENERAL nocturno con el novillo lanzado y tres figuras corriendo delante de él, dispersándose.",
    },
    ini: "la cabeza del novillo baja con los cuernos por delante y le sale el vaho.",
    fin: "la cámara retrocede y se ve al novillo lanzado y a tres figuras corriendo delante, que se dispersan.",
  }, "sangre, corneadas, cuerpos heridos, corrida de toros, western"),
  escp("b4b", [ref("ganado_vacuno"), ref("llanura_cardonal"), ref("constelaciones")], {
    comun: `Noche. LOS KOSINAS HUYERON Y SE DIJERON: MEJOR SERÁ DEJARLOS. Se rinden con esos animales y cambian de plan. Objeto ancla: las manos que se rinden y sueltan.`,
    camara: {
      a: "PLANO MEDIO CORTO de dos figuras paradas de perfil, recuperando el aliento, mirando atrás.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL con los novillos volviéndose solos hacia el corral por un lado y las figuras yéndose hacia el otro.",
    },
    ini: "dos figuras paradas de perfil recuperan el aliento y miran hacia atrás.",
    fin: "desde arriba, los novillos se vuelven solos hacia el corral por un lado y las figuras se van hacia el otro.",
  }, "pelea, armas, sangre, western, caricatura de cobardia"),

  // b5 — Abrieron el corral de las vacas. A empujones las arriaron a Kuitsá.
  esc("b5a", [ref("corral"), ref("ganado_vacuno")], {
    comun: `Noche. ABRIERON EL CORRAL DE LAS VACAS DE ORDEÑO: otro corral, otra cerca, la misma técnica. Objeto ancla: el portillo del segundo corral.`,
    camara: {
      a: "PLANO MACRO de la tranca del portillo levantándose de su horquilla.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL en picado del segundo corral con las vacas apiñadas dentro y el portillo ya abierto de par en par.",
    },
    ini: "la tranca del portillo se levanta de su horquilla.",
    fin: "desde arriba, las vacas están apiñadas dentro del segundo corral y el portillo ya está abierto de par en par.",
  }, "fuego, explosivos, alambre, maquinaria, sangre"),
  esc("b5b", [ref("ganado_vacuno"), ref("kuitsa"), ref("llanura_cardonal")], {
    comun: `Noche. NO QUERÍAN CAMINAR: A EMPUJONES LAS ARRIARON HASTA KUITSÁ. Es trabajo pesado y lento, no una fuga a galope. Objeto ancla: los cuartos traseros resistiéndose.`,
    camara: {
      a: "PLANO MEDIO de los cuartos traseros de una vaca plantada, con las patas rígidas, sin querer avanzar.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL nocturno en picado de la manada avanzando despacio hacia la laguna, con la fila muy desordenada.",
    },
    ini: "los cuartos traseros de una vaca plantada, con las patas rígidas, que no quiere avanzar.",
    fin: "desde muy arriba, la manada avanza despacio hacia la laguna y la fila va muy desordenada.",
  }, "estampida, galope, latigos, crueldad animal, sangre, western"),

  // b6 — El novillo bramó y el dueño despertó. Había luna, y vio las huellas.
  escp("b6a", [ref("kuriruputa"), ref("chinchorro"), ref("matumuy")], {
    comun: `Noche. QUIEN DA LA ALARMA ES EL NOVILLO BRAVO, no una persona: ${KU} se despierta en el chinchorro por el bramido. Objeto ancla: los ojos que se abren.`,
    camara: {
      a: "PLANO MACRO de unos ojos abriéndose de golpe en la penumbra.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la enramada de noche con él ya sentado en el chinchorro, escuchando, y el corral al fondo.",
    },
    ini: "unos ojos se abren de golpe en la penumbra.",
    fin: "desde arriba, él ya está sentado en el chinchorro escuchando, con el corral al fondo.",
  }, "pesadilla dibujada, monstruos, fantasmas, resplandor, gritos"),
  esc("b6b", [ref("llanura_cardonal"), ref("constelaciones")], {
    comun: `Noche de LUNA. El inventario le da contrato de luz propio: «única escena nocturna con luna del corpus; AZUL FRÍO contra la arena, SIN FUEGO». HABÍA LUNA, Y VIO LAS HUELLAS SOBRE LA ARENA. Sin figuras. Objeto ancla: las huellas azuladas.`,
    camara: {
      a: "PLANO CENITAL MACRO de huellas de pezuña en la arena, con la luz azul de la luna marcando los bordes y las sombras dentro.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado de la llanura bajo la luna con el rastro entero cruzándola de un lado a otro, azul contra la arena pálida.",
    },
    ini: "las huellas de pezuña en la arena tienen los bordes marcados por la luz azul de la luna.",
    fin: "desde muy arriba, el rastro cruza la llanura entera de un lado a otro, azul contra la arena pálida.",
  }, "antorchas, fuego, linternas, luna roja, niebla siniestra, lobos"),

  // b7 — Despertó a todos y solo vinieron las mujeres. Dijo que iría solo.
  escp("b7a", [ref("hermanas_kuriruputa_escena"), ref("matumuy"), ref("enramada")], {
    comun: `Amanecer. EL NUDO DEL RELATO: DESPERTÓ A TODA LA GENTE, PERO SÓLO VINIERON LAS MUJERES. NO HABÍA HOMBRES, y el cuadro lo dice contándolas. ${HE}, de pie y despiertas. Objeto ancla: las que sí vinieron.`,
    camara: {
      a: "PLANO MEDIO CORTO de una cara de mujer ya despierta y atenta, de perfil, saliendo de la casa.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del patio al amanecer con siete mujeres de pie repartidas y ni un hombre en cuadro más que él.",
    },
    ini: "una cara de mujer ya despierta y atenta sale de la casa, de perfil.",
    fin: "desde arriba, en el patio hay siete mujeres de pie repartidas y ningún hombre en cuadro salvo él.",
  }, "mujeres asustadas, llanto, suplicas, mujeres escondidas, victimas"),
  escp("b7b", [ref("kuriruputa"), ref("hermanas_kuriruputa_escena"), ref("matumuy")], {
    comun: `Amanecer. DIJO QUE IRÍA ÉL SOLO: la decisión sale de que no hay nadie más, no de heroísmo. Ellas lo miran irse y no lo detienen. Objeto ancla: la distancia que se abre.`,
    camara: {
      a: "PLANO MEDIO de él de frente diciéndolo, con las mujeres desenfocadas detrás.",
      b: "la cámara ha GIRADO detrás de las mujeres y ha retrocedido: PLANO GENERAL desde sus espaldas con él ya alejándose por la arena, pequeño.",
    },
    ini: "de frente, lo dice, con las mujeres borrosas detrás.",
    fin: "desde detrás de ellas se le ve ya alejarse por la arena, pequeño.",
  }, "despedida teatral, llanto, suplicas, abrazos, aureola, pose heroica"),

  // b8 — Se fajó el revólver, cargó el rifle, tres fajones de balas. Les cortó el paso.
  esc("b8a", [ref("armas"), ref("adorno_y_valor")], {
    comun: `Luz de la mañana. SE FAJÓ EL REVÓLVER, CARGÓ EL RIFLE Y SE PUSO TRES FAJONES DE BALAS: el canon cuenta el equipo con exactitud y el cuadro lo respeta. Objeto ancla: los tres fajones.`,
    camara: {
      a: "PLANO MACRO de una bala entrando en la recámara con los dedos empujándola.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO del torso con los TRES fajones cruzados y llenos, el revólver a la cintura y el rifle en la mano.",
    },
    ini: "una bala entra en la recámara empujada por los dedos.",
    fin: "a media distancia se ve el equipo completo: los tres fajones cruzados y llenos, el revólver a la cintura y el rifle en la mano.",
  }, "arsenal moderno, ametralladoras, western, cananas de pelicula, uniformes"),
  escp("b8b", [ref("kuriruputa"), ref("llanura_cardonal"), ref("kuitsa")], {
    comun: `Mediodía. LES CORTÓ EL PASO: no los sigue por detrás, se les adelanta y se planta delante. Objeto ancla: la línea que cruza.`,
    camara: {
      a: "PLANO DETALLE de sus pies plantándose en la arena, uno delante del otro, y quedándose quietos.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado con la manada y los kosinas avanzando por un lado y él solo, plantado, justo en su camino.",
    },
    ini: "sus pies se plantan en la arena, uno delante del otro, y se quedan quietos.",
    fin: "desde muy arriba se ve todo: la manada y los kosinas avanzando por un lado y él solo, plantado justo en su camino.",
  }, "duelo de western, sombrero de vaquero, saloon, pose heroica, aura"),

  // b9 — Le tiraron y las balas pasaban junto a él sin herirlo.
  escp("b9a", [ref("llanura_cardonal"), ref("armas"), ref("cardon")], {
    comun: `Mediodía. LOS KOSINAS LO DIVISARON Y DECIDIERON MATARLO: se reparten y apuntan todos a la vez. Objeto ancla: los cañones alineados.`,
    camara: {
      a: "PLANO MACRO de dos cañones de rifle apoyados en la horquilla de un cardón, apuntando.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL con seis tiradores repartidos en semicírculo, todos con el arma levantada hacia el mismo punto.",
    },
    ini: "dos cañones de rifle apoyados en la horquilla de un cardón, apuntando.",
    fin: "desde arriba, seis tiradores repartidos en semicírculo apuntan todos hacia el mismo punto.",
  }, "western, sombreros de vaquero, uniformes, artilleria, explosiones"),
  escp("b9b", [ref("kuriruputa"), ref("llanura_cardonal")], {
    comun: `Mediodía. LAS BALAS PASABAN JUNTO A ÉL SIN HERIRLO: se cuenta con el POLVO QUE SALTA ALREDEDOR y con él quieto, NO con destellos ni escudos. Objeto ancla: los impactos en la arena a su alrededor.`,
    camara: {
      a: "PLANO MACRO de tres impactos levantando arena a un palmo de sus pies descalzos.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL con él de pie y entero en mitad de la arena, sin agacharse, y una docena de cráteres pequeños repartidos a su alrededor.",
    },
    ini: "tres impactos levantan arena a un palmo de sus pies descalzos.",
    fin: "desde arriba está de pie y entero en mitad de la arena, sin agacharse, con una docena de cráteres pequeños alrededor.",
  }, "aura, escudo de energia, balas rebotando con destellos, camara lenta dibujada, resplandor"),

  // b10 — «Ahora tiraré yo». Al primer disparo mató a un kosina. (CITA)
  escp("b10a", [ref("kuriruputa"), ref("llanura_cardonal")], {
    comun: `Mediodía. LA CITA, y es donde se vuelca la pelea: cuando todos ellos hubieron disparado, él habla. «Ahora tiraré yo». Lo dice sin levantar la voz. Objeto ancla: su cara diciéndolo.`,
    camara: {
      a: "PLANO GENERAL de él solo en la arena, pequeño, con los tiradores desenfocados en primer término.",
      b: "la cámara ha AVANZADO hasta él y ha girado al frente: PLANO MEDIO CORTO de su cara acabando la frase y empezando a levantar el rifle.",
    },
    ini: "está solo en la arena, pequeño, con los tiradores borrosos en primer término.",
    fin: "de cerca se le ve acabar la frase y empezar a levantar el rifle.",
  }, "pose heroica, aura, camara lenta dibujada, western, sonrisa de villano"),
  esc("b10b", [ref("llanura_cardonal"), ref("cardon"), ref("armas")], {
    comun: `Mediodía. AL PRIMER DISPARO MATÓ A UN KOSINA: el resultado NO se muestra con el cuerpo. Se cuenta con el humo del cañón y con un arma caída entre los cardones. Objeto ancla: el rifle caído.`,
    camara: {
      a: "PLANO MACRO del humo blanco saliendo del cañón todavía levantado.",
      b: "la cámara ha VOLADO hasta la línea de los cardones: PLANO MEDIO de un rifle caído en la arena entre las matas, solo, con la correa extendida.",
    },
    ini: "el humo blanco sale del cañón todavía levantado.",
    fin: "entre las matas hay un rifle caído en la arena, solo, con la correa extendida.",
  }, "cuerpo, cadaver, sangre, agonia, gore, western"),

  // b11 — Las vacas tomaron el camino de su casa. Uno le desastilló la rodilla.
  esc("b11a", [ref("ganado_vacuno"), ref("llanura_cardonal"), ref("matumuy")], {
    comun: `Tarde. LAS VACAS SOLAS TOMARON EL CAMINO DE SU CASA Y ÉL LAS SIGUIÓ: los animales saben volver. Objeto ancla: la fila que se ordena sola.`,
    camara: {
      a: "PLANO MEDIO de dos vacas girando a la vez y enfilando el camino de vuelta.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado con la manada entera en fila hacia Matumuy y una figura pequeña detrás, siguiéndolas.",
    },
    ini: "dos vacas giran a la vez y enfilan el camino de vuelta.",
    fin: "desde muy arriba, la manada entera va en fila hacia Matumuy y una figura pequeña las sigue detrás.",
  }, "estampida, latigos, caballeria, western, polvo epico"),
  escp("b11b", [ref("kuriruputa"), ref("llanura_cardonal")], {
    comun: `Tarde. UNO LE DESASTILLÓ LA RODILLA: la invulnerabilidad NO es total, y ésta es la herida que sí entra. Se cuenta con la pierna que cede, sin sangre ni hueso a la vista. Objeto ancla: la rodilla que se dobla.`,
    camara: {
      a: "PLANO MEDIO de él andando detrás de las vacas, de perfil, entero.",
      b: "la cámara ha BAJADO al suelo y se ha acercado: PLANO DETALLE de la rodilla cediendo y la pierna hincándose en la arena, con la tela de la manta encima.",
    },
    ini: "anda detrás de las vacas, de perfil y entero.",
    fin: "a ras de suelo, la rodilla cede y la pierna se hinca en la arena, con la tela de la manta cubriéndola.",
  }, "sangre, hueso a la vista, herida abierta, gore, grito, camara lenta"),

  // b12 — Apoyado en la otra pierna disparó y mató a dos. Se acercaron.
  escp("b12a", [ref("kuriruputa"), ref("llanura_cardonal"), ref("armas")], {
    comun: `Tarde. APOYADO EN LA OTRA PIERNA DISPARÓ REVÓLVER Y RIFLE Y MATÓ A DOS: pelea hincado, con las dos armas. Objeto ancla: las dos manos armadas.`,
    camara: {
      a: "PLANO MACRO de las dos manos, una con el revólver y otra con el rifle, apoyadas sobre la rodilla sana.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL con él hincado en la arena, pequeño, y el humo de dos disparos todavía en el aire a su alrededor.",
    },
    ini: "las dos manos, una con el revólver y otra con el rifle, apoyadas sobre la rodilla sana.",
    fin: "desde arriba está hincado en la arena, pequeño, con el humo de dos disparos todavía en el aire.",
  }, "cuerpos, cadaveres, sangre, western, pose heroica, camara lenta"),
  escp("b12b", [ref("llanura_cardonal"), ref("cardon")], {
    comun: `Tarde. LO VIERON HERIDO Y SE ACERCARON: la distancia se cierra porque lo creen acabado. Objeto ancla: los que avanzan.`,
    camara: {
      a: "PLANO MEDIO de tres figuras avanzando en línea entre los cardones, sin agacharse ya.",
      b: "la cámara ha RETROCEDIDO por detrás de él y ha bajado: PLANO GENERAL desde el suelo, por encima de su hombro hincado, con las tres figuras acercándose de frente.",
    },
    ini: "tres figuras avanzan en línea entre los cardones, ya sin agacharse.",
    fin: "desde el suelo y por encima de su hombro hincado se ve a las tres acercándose de frente.",
  }, "western, sombreros de vaquero, sonrisas de villano, caricatura"),

  // b13 — Con revólver y rifle mató a dos. Las flechas iguarayo no le pegaban.
  escp("b13a", [ref("kuriruputa"), ref("llanura_cardonal"), ref("armas")], {
    comun: `Tarde. CON REVÓLVER EN UNA MANO Y RIFLE EN LA OTRA MATÓ A DOS: sigue hincado y sigue peleando. Objeto ancla: los brazos abiertos a los dos lados.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara hincada, sudada y concentrada, sin gesto heroico.",
      b: "la cámara ha RETROCEDIDO y ha girado alrededor: PLANO GENERAL con él en el centro, los brazos abiertos a los dos lados y armas caídas repartidas por la arena.",
    },
    ini: "su cara hincada, sudada y concentrada, sin nada de heroico.",
    fin: "al rodearlo se le ve en el centro con los brazos abiertos a los dos lados y armas caídas repartidas por la arena.",
  }, "cuerpos, cadaveres, sangre, western, pose heroica, aura"),
  esc("b13b", [ref("arco_flechas"), ref("llanura_cardonal")], {
    comun: `Tarde. LAS FLECHAS IGUARAYO NO LE PEGABAN: se cuenta con las flechas clavadas en la arena ALREDEDOR, ninguna en él. Objeto ancla: el corro de flechas en el suelo.`,
    camara: {
      a: "PLANO MACRO de tres flechas clavadas en la arena, muy juntas, vibrando todavía.",
      b: "la cámara se ha ELEVADO en vertical: PLANO CENITAL con una veintena de flechas clavadas formando un corro y, en el centro del corro, un trecho de arena vacío.",
    },
    ini: "tres flechas clavadas en la arena, muy juntas, vibrando todavía.",
    fin: "desde arriba, una veintena de flechas clavadas forma un corro y en el centro queda un trecho de arena vacío.",
  }, "flechas clavadas en el cuerpo, sangre, herida, aura, escudo, destellos"),

  // b14 — Llegaron sus hermanas con un pañuelo, creyéndolo muerto.
  escp("b14a", [ref("hermanas_kuriruputa_escena"), ref("llanura_cardonal")], {
    comun: `Última luz. A LO LEJOS LLEGARON SUS HERMANAS CON UN PAÑUELO, CREYÉNDOLO MUERTO: el pañuelo de cuatro varas es MORTAJA, y vienen a recoger un cadáver. ${HE}, andando firmes, sin llorar. Objeto ancla: el pañuelo doblado en el brazo.`,
    camara: {
      a: "PLANO MACRO del pañuelo blanco doblado en cuatro sobre un antebrazo, con la tela pesada.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la llanura al atardecer con las tres avanzando en línea por la arena, muy separadas entre sí.",
    },
    ini: "el pañuelo blanco doblado en cuatro descansa sobre un antebrazo, con la tela pesada.",
    fin: "desde arriba, las tres avanzan en línea por la arena del atardecer, muy separadas entre sí.",
  }, "llanto teatral, luto europeo, velos, procesion funebre, cruces, mujeres suplicantes"),
  esc("b14b", [ref("ganado_vacuno"), ref("llanura_cardonal")], {
    comun: `Última luz. HALLARON LAS VACAS Y LAS HUELLAS DE SANGRE: el rastro se cuenta con manchas oscuras en la arena, secas y pequeñas, nunca con charcos. Sin figuras. Objeto ancla: la mancha oscura en la arena.`,
    camara: {
      a: "PLANO CENITAL MACRO de una mancha oscura pequeña absorbida en la arena, ya seca por los bordes.",
      b: "la cámara se ha ELEVADO y ha avanzado siguiéndola: PLANO GENERAL en picado del rastro de manchas separadas que cruza la arena hacia un cardonal.",
    },
    ini: "una mancha oscura pequeña, ya seca por los bordes, absorbida en la arena.",
    fin: "desde arriba, el rastro de manchas separadas cruza la arena hacia un cardonal.",
  }, "charcos de sangre, cuerpos, visceras, gore, buitres"),

  // b15 — Ya casi no tenía fuerzas. Le amarraron la herida y lo llevaron.
  escp("b15a", [ref("hermanas_kuriruputa_escena"), ref("kuriruputa"), ref("cardon")], {
    comun: `Última luz. CUANDO DIERON CON ÉL YA CASI NO TENÍA FUERZAS: lo encuentran sentado contra un cardón. Ellas no gritan ni lloran: trabajan. Objeto ancla: las manos que amarran la herida.`,
    camara: {
      a: "PLANO MACRO de dos manos de mujer apretando una tira de tela alrededor de una rodilla, sin que se vea la herida.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL con las tres alrededor de él, una atando, otra sosteniéndolo y la tercera de pie mirando el horizonte, vigilando.",
    },
    ini: "dos manos de mujer aprietan una tira de tela alrededor de la rodilla, sin que se vea la herida.",
    fin: "desde arriba, una ata, otra lo sostiene y la tercera está de pie vigilando el horizonte.",
  }, "herida a la vista, sangre, hueso, llanto teatral, desmayo, mujeres histericas"),
  escp("b15b", [ref("hermanas_kuriruputa_escena"), ref("kuriruputa"), ref("montana_refugio")], {
    comun: `Anochecer. LO LLEVARON A UN CERRITO: lo ponen a resguardo y lo dejan ahí. El traslado es trabajo de las tres. Objeto ancla: el cerrito donde queda.`,
    camara: {
      a: "PLANO MEDIO de tres pares de manos sosteniéndolo por los brazos y la espalda, avanzando.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL en picado del cerrito al anochecer con él sentado arriba, pequeño, y las tres bajando ya hacia la llanura.",
    },
    ini: "tres pares de manos lo sostienen por los brazos y la espalda, avanzando.",
    fin: "desde muy arriba, él queda sentado en lo alto del cerrito, pequeño, y las tres bajan ya hacia la llanura.",
  }, "camilla moderna, ambulancia, llanto, abandono, cruces"),

  // b16 — Ellas siguieron persiguiéndolos. Al verlas mujeres, quisieron cogerlas.
  escp("b16a", [ref("hermanas_kuriruputa_escena"), ref("llanura_cardonal"), ref("armas")], {
    comun: `Noche y amanecer. LAS MUJERES SIGUIERON PERSIGUIENDO A LOS KOSINAS: van armadas y van a buscarlos, no a defenderse. Objeto ancla: las tres avanzando con las armas.`,
    camara: {
      a: "PLANO DETALLE de una mano de mujer cerrándose sobre la culata de un rifle, firme.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL con las tres avanzando abiertas por la llanura, cada una por su lado, cubriendo terreno.",
    },
    ini: "una mano de mujer se cierra firme sobre la culata de un rifle.",
    fin: "desde arriba, las tres avanzan abiertas por la llanura, cada una por su lado, cubriendo terreno.",
  }, "mujeres asustadas, huida, suplicas, victimas, ropa rasgada"),
  escp("b16b", [ref("hermanas_kuriruputa_escena"), ref("llanura_cardonal"), ref("cardon")], {
    comun: `Mediodía. ELLOS, AL VERLAS MUJERES, QUISIERON COGERLAS Y TENERLAS POR SUYAS: ése es el ERROR que las revela. El cuadro muestra el error —ellos bajando las armas y avanzando confiados—, NUNCA a ellas acorraladas. Objeto ancla: las armas que ellos bajan.`,
    camara: {
      a: "PLANO MEDIO de dos figuras bajando el rifle y avanzando relajadas, con las manos vacías por delante.",
      b: "la cámara ha GIRADO 180 grados hasta detrás de las hermanas: PLANO GENERAL desde sus espaldas con ellas plantadas y firmes, las armas todavía arriba, y los otros acercándose.",
    },
    ini: "dos figuras bajan el rifle y avanzan relajadas, con las manos vacías por delante.",
    fin: "desde detrás de las hermanas se ve que ellas siguen plantadas y con las armas arriba mientras los otros se acercan.",
  }, "acoso, forcejeo, ropa rasgada, mujeres acorraladas, suplicas, violencia sexual"),

  // b17 — Cada hermana mató a un kosina. «Son muy bravas», y huyeron.
  escp("b17a", [ref("hermanas_kuriruputa_escena"), ref("llanura_cardonal"), ref("armas")], {
    comun: `Mediodía. CADA HERMANA MATÓ A UN KOSINA, y los que intentaron cogerlas también murieron. El resultado NO se cuenta con cuerpos: se cuenta con las tres de pie y las armas caídas alrededor. Objeto ancla: las tres en pie.`,
    camara: {
      a: "PLANO MACRO de un cañón bajando despacio con el humo saliendo todavía, sostenido por una mano de mujer.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL en picado con las tres de pie repartidas por la arena y cinco armas caídas entre las matas alrededor.",
    },
    ini: "un cañón baja despacio con el humo saliendo todavía, sostenido por una mano de mujer.",
    fin: "desde arriba, las tres están de pie repartidas por la arena y hay cinco armas caídas entre las matas.",
  }, "cuerpos, cadaveres, sangre, gore, pose heroica, camara lenta"),
  escp("b17b", [ref("llanura_cardonal"), ref("cardon")], {
    comun: `Tarde. «SON MUY BRAVAS», DIJERON, Y HUYERON: los que quedan se van corriendo, y ése es el juicio del relato sobre ellas. Objeto ancla: las espaldas que se alejan.`,
    camara: {
      a: "PLANO MEDIO CORTO de una cara de perfil mirando hacia atrás mientras corre.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado con tres figuras huyendo dispersas hacia el horizonte y, al otro lado del cuadro, las tres hermanas paradas mirándolos irse.",
    },
    ini: "una cara de perfil mira hacia atrás mientras corre.",
    fin: "desde muy arriba, tres figuras huyen dispersas hacia el horizonte y al otro lado del cuadro las tres hermanas las miran irse, paradas.",
  }, "burla, caricatura, cobardia exagerada, sangre, cuerpos"),

  // b18 — Volvieron por el hermano. Soñó la cura, la hizo, sanó y vivió años.
  escp("b18a", [ref("kuriruputa"), ref("chinchorro"), ref("matumuy")], {
    comun: `Noche. ELLAS LO PERSIGUIERON SIN ALCANZARLOS Y VOLVIERON POR EL HERMANO. Después él SOÑÓ LA CURA: el sueño se cuenta desde fuera, con él dormido en el chinchorro, igual que en los demás mitos donde el sueño ordena. Objeto ancla: la cara dormida.`,
    camara: {
      a: "PLANO GENERAL de la enramada de noche con el chinchorro colgado y él dentro, visto de lejos.",
      b: "la cámara ha AVANZADO hasta el chinchorro y ha bajado: PLANO MEDIO CORTO de su cara dormida, con los ojos moviéndose bajo los párpados.",
    },
    ini: "desde lejos, el chinchorro cuelga en la enramada de noche y él está dentro.",
    fin: "de cerca se le ve la cara dormida y los ojos moviéndose bajo los párpados.",
  }, "vision dibujada, fantasmas, resplandor, humo, figuras flotando, aureola"),
  escp("b18b", [ref("kuriruputa"), ref("criada"), ref("matumuy"), ref("oficio_de_curar")], {
    comun: `Luz de la mañana, años después. LA HIZO, SANÓ Y VIVIÓ AÑOS. La cura incluía dejar a su mujer y tomar a una criada: está en el canon y SE NARRA SIN GLOSA, como un hecho más, sin juicio y sin moraleja. Objeto ancla: él andando sin cojear.`,
    camara: {
      a: "PLANO DETALLE de la rodilla ya sana dando un paso firme en la arena, sin venda.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL final de Matumuy con él andando entre los corrales llenos y otra mujer trabajando cerca, la vida en marcha.",
    },
    ini: "la rodilla, ya sana y sin venda, da un paso firme en la arena.",
    fin: "desde muy arriba se ve Matumuy entero con los corrales llenos, él andando entre ellos y otra mujer trabajando cerca: la vida sigue.",
  }, "aureola, milagro, resplandor de curacion, boda, juicio moral dibujado, texto"),
]);
