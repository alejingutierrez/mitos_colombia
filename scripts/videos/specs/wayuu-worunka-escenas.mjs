// Keyframes de Worunka y la piedra de la Macuira — 18 bloques × 2 escenas × 2
// cuadros = 72 imágenes ≈ 180 s.
// Guion: guion-la-india-worunka-v2.json (N=18) · Acta: acta-la-india-worunka.json (36 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _wayuu-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · ES UN MITO DE FUNDACIÓN MÚLTIPLE, no una anécdota: de aquí salen el
//   nacimiento por la vulva, las costillas de la mujer, el matrimonio comprado,
//   la ley del pago, las tumas y el verano largo. Cada fundación es un bloque y
//   ninguna se abrevia.
// · LOS DIENTES Y EL JERUWAI ESTÁN EN EL CANON Y NO SE EUFEMIZAN EN EL TEXTO,
//   PERO **NO SE REPRESENTAN**. LA IMAGEN VA A LA PIEDRA LANZADA, NO A LA
//   ANATOMÍA. Ningún plano de este spec muestra un cuerpo por dentro, una
//   herida, un vientre ni un parto.
// · EL RELATO INVIERTE EL ORDEN SOCIAL A LA MITAD: antes las mujeres compraban
//   a los hombres. Mareiwa lo cambia PORQUE LE PARECE FEO. Se narra como
//   decisión del dios, SIN COMENTARIO DESDE FUERA: ni se aplaude ni se condena.
// · EL CASTIGO DEL VERANO ES POR LA BORRACHERA, no por el incesto ni por la
//   desobediencia. La cadena es: se les dan las semillas, hacen chicha, se
//   emborrachan, y se seca todo.
// · LAS TUMAS ENTERRADAS Y LA LLUVIA POR LÁSTIMA son etiología viva de la
//   Guajira: explican el paisaje que la cámara está mirando.
// · LA PIEDRA CON FORMA DE VULVA es el cierre geográfico. El inventario la
//   marca `restringida` y dice cómo: SE REPRESENTA EL SITIO —el arroyo, la
//   piedra A DISTANCIA, los pájaros rojos posados— Y NO EL DETALLE.
// · MAREIWA (no Maleiwa) es como lo nombra este canon, igual que «el-incesto».
// · EL ROJO DE LOS PÁJAROS VIENE DE TOCAR LA PIEDRA. Sangre Toro, Carpintero y
//   Guacamayo son EL EPÍLOGO y no se convierten en el tema.
//
// El inventario llama al último bando de aves rojas «la imagen más cálida y más
// alegre del corpus entero», y así se trata b18.
//
// GUION DE LUZ: agua del arroyo al amanecer → penumbra de lo que no se muestra
// → sol alto de la pedrada → luz limpia de la ley nueva → mañana de las
// costillas → mediodía del orden invertido → tarde del pago → camino largo al
// atardecer → matas coloradas → regreso y siembra → tumas nacidas → chicha que
// fuertea → noche de la borrachera → luz blanca del castigo → verano largo →
// lluvia por lástima → arroyo otra vez → bando de aves rojas.

import { CONTEXTO, DIRECCION, AVOID_BASE, PALETTE_BASE, ref, esc, escp, armar } from "./_wayuu-comun.mjs";

export const SPEC_NAME = "wayuu-worunka-escenas";
export const OUT_DIR = "wayuu/videos/la-india-worunka/keyframes";
export { CONTEXTO, DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; anatomia, genitales, vientre desnudo, cuerpo por dentro, corte quirurgico, sutura, costillas a la vista, esqueleto; parto, recien nacido, sangre, herida, carne, viscera, operacion; desnudez, insinuacion erotica, escena de intimidad, pose sensual; dientes flotando, bocas en el cuerpo, monstruosidad anatomica, body horror; aureola, trono, rayos, fuego divino, resplandor sobre Mareiwa, adoracion, arrodillarse; borrachera caricaturizada, vomito, orgia, caos; joyeria europea, oro labrado, gemas facetadas, escaparate";
export const PALETTE =
  PALETTE_BASE + "; el rojo coral de las tumas y el de los pajaros es EL MISMO ROJO y ese eco es el hilo del mito; el verano largo trae el unico blanco calcareo sostenido del corpus wayuu";

const MA =
  "EL MISMO Mareiwa de la referencia (hombre de pelo negro largo y suelto, cara serena, manto de algodón crudo terciado hasta los tobillos con cenefa tejida oscura en el ruedo, descalzo, sin corona ni adorno de metal)";
const WO =
  "LA MISMA Worunka de la referencia (mujer wayúu adulta, manta larga hasta el tobillo de algodón crudo con cenefa tejida, pelo negro recogido, cara firme, descalza), SIEMPRE vestida y SIEMPRE a media distancia o de espaldas";

export const ITEMS = armar([
  // b1 — Bajó de la Macuira al arroyo a bañarse. Iba enferma y con pocas costillas.
  escp("b1a", [ref("worunka"), ref("serrania_baja"), ref("arroyo_seco")], {
    comun: `Amanecer. WORUNKA BAJÓ DE LA MACUIRA AL ARROYO DEL VALLE: el descenso desde la sierra, con la manta puesta. ${WO}. Objeto ancla: la bajada por la ladera.`,
    camara: {
      a: "PLANO DETALLE de unos pies descalzos bajando por la piedra suelta de la ladera.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL de la serranía al amanecer con ella diminuta en la bajada y el hilo del arroyo abajo.",
    },
    ini: "unos pies descalzos bajan por la piedra suelta de la ladera.",
    fin: "desde muy arriba, ella es diminuta en la bajada y abajo se ve el hilo del arroyo.",
  }, "desnudez, bano, cuerpo, anatomia, insinuacion, agua sobre el cuerpo"),
  esc("b1b", [ref("arroyo_seco"), ref("serrania_baja")], {
    comun: `Amanecer. IBA EMBARAZADA, ENFERMA Y CON POCAS COSTILLAS: NADA DE ESO SE REPRESENTA. El cuadro es el agua del arroyo y la orilla, sin figura. Objeto ancla: el agua corriendo entre las piedras.`,
    camara: {
      a: "PLANO MACRO del agua pasando entre dos piedras del cauce, con el limo verde en el fondo.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del recodo del arroyo entero al amanecer, con las mantas secas dobladas en la orilla y nadie en cuadro.",
    },
    ini: "el agua pasa entre dos piedras del cauce, con el limo verde en el fondo.",
    fin: "desde arriba se ve el recodo entero del arroyo al amanecer, con las mantas secas dobladas en la orilla y nadie en cuadro.",
  }, "cuerpo, desnudez, anatomia, vientre, sangre, bano, ropa mojada"),

  // b2 — Entonces ningún hijo salía. Se abría el vientre y se cosía.
  esc("b2a", [ref("rancheria"), ref("piichi"), ref("enramada")], {
    comun: `Penumbra. LO QUE PASABA ANTES NO SE MUESTRA: el canon lo dice y la imagen se queda fuera. El cuadro es una casa cerrada por dentro y el silencio de la ranchería. Sin figuras. Objeto ancla: la puerta cerrada desde dentro.`,
    camara: {
      a: "PLANO MACRO de la juntura de una puerta cerrada por dentro, con una raya de luz finísima.",
      b: "la cámara ha RETROCEDIDO fuera y se ha elevado: PLANO GENERAL de la ranchería al amanecer con todas las casas quietas y nadie en el patio.",
    },
    ini: "la juntura de una puerta cerrada por dentro, con una raya de luz finísima.",
    fin: "desde fuera y arriba, la ranchería está quieta y no hay nadie en el patio.",
  }, "parto, sangre, cuerpo, anatomia, corte, sutura, herida, recien nacido, gritos"),
  esc("b2b", [ref("cordeleria"), ref("telar")], {
    comun: `Penumbra. SE ABRÍA EL VIENTRE Y SE COSÍA: SE CUENTA CON EL HILO Y LA AGUJA SOBRE UNA TELA, nunca sobre un cuerpo. Es la metáfora material que el canon permite y no hay nada más en cuadro. Objeto ancla: la aguja atravesando la tela.`,
    camara: {
      a: "PLANO MACRO de una aguja de hueso atravesando dos bordes de tela cruda y tirando del hilo.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la costura entera terminada sobre la tela extendida, con la línea de puntadas cruzándola.",
    },
    ini: "una aguja de hueso atraviesa dos bordes de tela cruda y tira del hilo.",
    fin: "desde arriba, la costura está terminada sobre la tela extendida y la línea de puntadas la cruza entera.",
  }, "piel, carne, cuerpo, cicatriz en la piel, sangre, quirofano, anatomia"),

  // b3 — Mareiwa vio la herida cosida. Tomó una piedra y rompió los dientes.
  escp("b3a", [ref("mareiwa"), ref("arroyo_seco"), ref("serrania_baja")], {
    comun: `Sol alto. MAREIWA VIO Y LE PARECIÓ MAL: ${MA}, de pie en la orilla, con la cara seria. No hay ira ni juicio teatral. Objeto ancla: su cara mirando.`,
    camara: {
      a: "GRAN PLANO GENERAL del valle con él pequeño y de pie en el recodo del arroyo.",
      b: "la cámara ha AVANZADO hasta él y ha girado al perfil: PLANO MEDIO CORTO de su cara mirando hacia abajo, seria, sin gesto de condena.",
    },
    ini: "desde lejos, está pequeño y de pie en el recodo del arroyo.",
    fin: "de cerca y de perfil, mira hacia abajo con la cara seria y sin gesto de condena.",
  }, "ira divina, dedo acusador, rayos, aureola, trono, asco, horror"),
  esc("b3b", [ref("piedras_y_huesos"), ref("arroyo_seco")], {
    comun: `Sol alto. TOMÓ UNA PIEDRA, LA LANZÓ Y ROMPIÓ AQUELLOS DIENTES: LA IMAGEN VA A LA PIEDRA LANZADA, NO A LA ANATOMÍA. El cuadro es la piedra en la mano y luego la piedra en el agua. Objeto ancla: la piedra.`,
    camara: {
      a: "PLANO MACRO de una piedra lisa de río asentada en una palma abierta, con el pulgar cerrándose encima.",
      b: "la cámara ha VOLADO con la piedra y ha bajado al agua: PLANO MACRO de la superficie del arroyo reventando en un impacto, con las gotas suspendidas y los círculos abriéndose.",
    },
    ini: "una piedra lisa de río asentada en una palma abierta, con el pulgar cerrándose encima.",
    fin: "el agua del arroyo revienta en un impacto, con las gotas suspendidas y los círculos abriéndose.",
  }, "anatomia, dientes, boca, sangre, carne, cuerpo, herida, body horror"),

  // b4 — «Por aquí nacerán los hijos». Antes los hombres, por miedo, el ombligo.
  escp("b4a", [ref("mareiwa"), ref("arroyo_seco")], {
    comun: `Luz limpia. LA CITA, y es la fundación de la que cuelgan todas las demás: por aquí nacerán los hijos. La dice de pie, en voz normal, señalando el agua. Objeto ancla: su cara diciéndolo.`,
    camara: {
      a: "PLANO DETALLE de su mano señalando hacia abajo, hacia el cauce, con la palma abierta.",
      b: "la cámara ha SUBIDO hasta su cara y ha girado al frente: PLANO MEDIO CORTO de él terminando la frase, tranquilo.",
    },
    ini: "su mano señala hacia abajo, hacia el cauce, con la palma abierta.",
    fin: "al subir a la cara, termina la frase tranquilo.",
  }, "anatomia, cuerpo, gestos obscenos, aureola, rayos, texto en pantalla"),
  escp("b4b", [ref("primeros_wayuu"), ref("rancheria"), ref("enramada")], {
    comun: `Luz limpia. ANTES LOS HOMBRES, POR MIEDO, HACÍAN LOS HIJOS POR EL NOCHO, EL OMBLIGO: el dato es del canon y NO SE ILUSTRA. Se cuenta con el miedo de antes —hombres apartados, sin acercarse— y nada más. Objeto ancla: la distancia entre unos y otras.`,
    camara: {
      a: "PLANO MEDIO CORTO de dos hombres de perfil mirando hacia un lado, con la cara de quien no se atreve.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del patio con los hombres en un extremo y las mujeres en el otro, separados por un trecho ancho de arena.",
    },
    ini: "dos hombres de perfil miran hacia un lado con la cara de quien no se atreve.",
    fin: "desde arriba, los hombres están en un extremo del patio y las mujeres en el otro, separados por un trecho ancho de arena.",
  }, "anatomia, ombligo, cuerpo, desnudez, insinuacion, caricatura, sangre"),

  // b5 — Desde entonces se unen como hoy. Worunka no podía parir sin dolor.
  escp("b5a", [ref("primeros_wayuu"), ref("enramada"), ref("chinchorro")], {
    comun: `Mañana. DESDE ENTONCES HOMBRES Y MUJERES SE UNEN COMO HOY: se cuenta con la vida corriente, parejas trabajando juntas bajo la enramada. Sin nada íntimo en cuadro. Objeto ancla: el trecho de arena que ya no está.`,
    camara: {
      a: "PLANO MACRO de dos pares de manos trabajando juntas en el mismo telar, una a cada lado.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del mismo patio de b4b, ahora con la gente mezclada y sin ningún trecho vacío entre medias.",
    },
    ini: "dos pares de manos trabajan juntas en el mismo telar, una a cada lado.",
    fin: "desde arriba, el mismo patio de antes tiene ahora la gente mezclada y ningún trecho vacío entre medias.",
  }, "escena de intimidad, desnudez, beso, insinuacion, anatomia, boda europea"),
  escp("b5b", [ref("worunka"), ref("chinchorro"), ref("piichi")], {
    comun: `Mañana. PERO WORUNKA, CON POCAS COSTILLAS, NO PODÍA PARIR SIN DOLOR: NO SE MUESTRA NI EL CUERPO NI EL PARTO. Se cuenta con ella sentada en el borde del chinchorro, quieta, y con la cara. Objeto ancla: sus manos agarradas al borde del chinchorro.`,
    camara: {
      a: "PLANO MACRO de dos manos agarrando con fuerza el borde tejido de un chinchorro, con los nudillos tensos.",
      b: "la cámara ha SUBIDO y ha retrocedido: PLANO MEDIO de ella sentada en el borde, de perfil, con la cara baja y la manta puesta.",
    },
    ini: "dos manos agarran con fuerza el borde tejido del chinchorro, con los nudillos tensos.",
    fin: "al subir, ella está sentada en el borde, de perfil, con la cara baja y la manta puesta.",
  }, "parto, sangre, vientre, anatomia, desnudez, grito, agonia, recien nacido"),

  // b6 — Mareiwa le cortó dos costillas al hombre y se las puso.
  esc("b6a", [ref("piedras_y_huesos"), ref("llanura_cardonal")], {
    comun: `Mañana. MAREIWA LE CORTÓ DOS COSTILLAS AL HOMBRE: EL ACTO NO SE MUESTRA. El cuadro son DOS HUESOS LARGOS Y LIMPIOS sobre una manta, como piezas, sin cuerpo ni sangre. Objeto ancla: los dos huesos.`,
    camara: {
      a: "PLANO MACRO de dos huesos curvos, largos y limpios, puestos en paralelo sobre una tela cruda.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO de la tela extendida en el suelo con los dos huesos en el centro y nada más alrededor.",
    },
    ini: "dos huesos curvos, largos y limpios, puestos en paralelo sobre una tela cruda.",
    fin: "la tela está extendida en el suelo con los dos huesos en el centro y no hay nada más alrededor.",
  }, "cuerpo, torso, corte, sangre, carne, herida, quirofano, esqueleto, costillar"),
  escp("b6b", [ref("primeros_wayuu"), ref("enramada"), ref("rancheria")], {
    comun: `Mañana. POR ESO LAS GUAJIRAS PAREN CON MENOS DOLORES: la consecuencia se cuenta con vida, no con anatomía. Una mujer con un pequeño en el brazo, de pie y tranquila, a media distancia. Objeto ancla: la vida que sigue.`,
    camara: {
      a: "PLANO MEDIO de una mujer de perfil bajo la enramada, de pie y tranquila, con un bulto envuelto en el brazo.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la ranchería con tres mujeres en distintos sitios, todas en lo suyo, y la vida en marcha.",
    },
    ini: "una mujer de perfil bajo la enramada, de pie y tranquila, con un bulto envuelto en el brazo.",
    fin: "desde arriba, tres mujeres en distintos sitios de la ranchería siguen en lo suyo y la vida está en marcha.",
  }, "parto, sangre, anatomia, hospital, desnudez, llanto, dolor teatral"),

  // b7 — Antes las mujeres compraban maridos. A Mareiwa le pareció feo.
  escp("b7a", [ref("primeros_wayuu"), ref("chivos"), ref("enramada")], {
    comun: `Mediodía. ANTES LAS MUJERES COMPRABAN MARIDOS Y LOS BUSCABAN EN SUS CASAS: se cuenta tal cual, sin comentario. Una mujer entregando animales delante de una familia. Objeto ancla: los animales entregados.`,
    camara: {
      a: "PLANO MACRO de una mano de mujer pasando una cuerda con dos chivos a otra mano.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del patio con una mujer de pie delante de una familia sentada, los animales en medio y un hombre joven detrás de ellos.",
    },
    ini: "una mano de mujer pasa una cuerda con dos chivos a otra mano.",
    fin: "desde arriba, una mujer está de pie delante de una familia sentada, con los animales en medio y un hombre joven detrás de ellos.",
  }, "caricatura, burla, subasta de personas, cadenas, humillacion, texto"),
  escp("b7b", [ref("mareiwa"), ref("primeros_wayuu"), ref("enramada")], {
    comun: `Mediodía. A MAREIWA LE PARECIÓ MUY FEO AQUELLO: SE NARRA COMO DECISIÓN DEL DIOS, SIN COMENTARIO DESDE FUERA. Ni se aplaude ni se condena: él mira y decide. Objeto ancla: su cara mirando el trato.`,
    camara: {
      a: "PLANO GENERAL de la escena del trato con él pequeño y parado en un borde, mirando.",
      b: "la cámara ha AVANZADO hasta él y ha girado: PLANO MEDIO CORTO de su cara de perfil, con el gesto de quien acaba de decidir algo.",
    },
    ini: "en el borde de la escena del trato está él, pequeño y parado, mirando.",
    fin: "de cerca y de perfil, tiene el gesto de quien acaba de decidir algo.",
  }, "ira, asco, dedo acusador, rayos, aureola, trono, juicio dibujado"),

  // b8 — Dijo que el hombre buscara a la mujer. Él mandó en el hogar.
  escp("b8a", [ref("mareiwa"), ref("primeros_wayuu"), ref("llanura_cardonal")], {
    comun: `Tarde. DIJO QUE FUERA EL HOMBRE QUIEN BUSCARA A LA MUJER: la orden es corta y el efecto es inmediato. Objeto ancla: la dirección del camino que se invierte.`,
    camara: {
      a: "PLANO DETALLE de su mano señalando en una dirección concreta, hacia el camino.",
      b: "la cámara ha GIRADO siguiendo esa dirección y se ha elevado: PLANO GENERAL del camino con un hombre joven andando solo hacia una ranchería lejana, al revés de antes.",
    },
    ini: "su mano señala en una dirección concreta, hacia el camino.",
    fin: "en esa dirección, un hombre joven anda solo hacia una ranchería lejana: al revés de como era antes.",
  }, "aureola, rayos, trono, adoracion, texto, simbolos"),
  escp("b8b", [ref("primeros_wayuu"), ref("enramada"), ref("chinchorro")], {
    comun: `Tarde. CAMBIARON LOS PAPELES Y ÉL MANDÓ EN EL HOGAR: el canon lo dice y el guion lo narra sin glosa. Se cuenta con el sitio que ocupa cada uno bajo la enramada. Objeto ancla: quién está sentado en el centro.`,
    camara: {
      a: "PLANO MEDIO CORTO de un hombre sentado en el chinchorro del centro, de frente, quieto.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la enramada entera con él en el medio y el resto de la casa moviéndose alrededor.",
    },
    ini: "un hombre sentado en el chinchorro del centro, de frente y quieto.",
    fin: "desde arriba, él ocupa el medio de la enramada y el resto de la casa se mueve alrededor.",
  }, "violencia domestica, sumision, cadenas, caricatura, texto, moraleja"),

  // b9 — Puso la ley del pago. Llamó a dos hombres y les señaló un camino.
  escp("b9a", [ref("primeros_wayuu"), ref("chivos"), ref("ganado_vacuno")], {
    comun: `Tarde. PUSO TAMBIÉN LA LEY DEL PAGO AL PADRE: se resuelve con la escena que el canon implica —animales entregados frente a una familia— y ahora en el sentido nuevo. Objeto ancla: los animales llegando a la casa de ella.`,
    camara: {
      a: "PLANO MACRO de una cuerda con varios animales pasando de una mano de hombre a una mano de hombre mayor.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del patio con una recua de ocho o diez animales entrando y una familia sentada esperando delante de la casa.",
    },
    ini: "una cuerda con varios animales pasa de una mano de hombre a una de hombre mayor.",
    fin: "desde arriba, una recua de ocho o diez animales entra al patio y una familia sentada espera delante de la casa.",
  }, "compra de personas, cadenas, subasta, dinero, contratos, caricatura"),
  escp("b9b", [ref("mareiwa"), ref("dos_forasteros"), ref("llanura_cardonal")], {
    comun: `Atardecer. DESPUÉS LLAMÓ A DOS HOMBRES Y LES SEÑALÓ UN CAMINO LARGO: la comisión empieza aquí. Objeto ancla: el camino señalado.`,
    camara: {
      a: "PLANO MEDIO de los tres de pie, él señalando el horizonte y los otros dos mirando hacia allá.",
      b: "la cámara ha GIRADO a esa dirección y se ha elevado muchísimo: GRAN PLANO GENERAL en picado de una trocha larguísima que cruza la llanura y se pierde al fondo.",
    },
    ini: "los tres están de pie: él señala el horizonte y los otros dos miran hacia allá.",
    fin: "en esa dirección hay una trocha larguísima que cruza la llanura y se pierde al fondo.",
  }, "mapas, brujulas, aureola, rayos, portal, resplandor"),

  // b10 — Debían llegar donde hay matas de frutas coloradas. Traer las semillas.
  escp("b10a", [ref("dos_forasteros"), ref("llanura_cardonal"), ref("cardon")], {
    comun: `Atardecer y luego días. DEBÍAN LLEGAR AL FINAL DEL CAMINO: el viaje se cuenta con el desgaste del calzado y la longitud del trayecto. Objeto ancla: las waireñas gastadas.`,
    camara: {
      a: "PLANO MACRO de la suela de una waireña ya gastada hasta el hilo, levantándose del suelo.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado con las dos figuras diminutas a mitad de una trocha que no se ve terminar.",
    },
    ini: "la suela de una waireña, ya gastada hasta el hilo, se levanta del suelo.",
    fin: "desde muy arriba, las dos figuras son diminutas a mitad de una trocha que no se ve terminar.",
  }, "caravana, camellos, desierto de arabia, oasis, espejismos dibujados"),
  esc("b10b", [ref("frutos_del_monte"), ref("cardon"), ref("llanura_cardonal")], {
    comun: `Luz de tarde. DONDE HAY MATAS DE FRUTAS COLORADAS: arbustos cargados de fruta roja al final del camino. Objeto ancla: la fruta colorada en la rama.`,
    camara: {
      a: "PLANO MACRO de un racimo de frutas rojas pequeñas colgando de una rama, con la piel tensa.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del matorral entero cargado de rojo, con las dos figuras pequeñas recogiendo en un borde.",
    },
    ini: "un racimo de frutas rojas pequeñas colgando de una rama, con la piel tensa.",
    fin: "desde arriba, el matorral entero está cargado de rojo y las dos figuras recogen en un borde.",
  }, "frutas tropicales, selva, jardin, oasis, resplandor, magia"),

  // b11 — Caminaron hasta donde el camino se acababa. Sembraron en la sierra.
  escp("b11a", [ref("dos_forasteros"), ref("semillas_y_siembra"), ref("llanura_cardonal")], {
    comun: `Tarde. RECOGIERON LAS SEMILLAS donde el camino se acababa: llenan las mochilas y vuelven. Objeto ancla: las semillas en la mochila.`,
    camara: {
      a: "PLANO MACRO de semillas oscuras cayendo dentro de una mochila tejida, llenándola.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del final del camino con los dos ya de espaldas, empezando el regreso, y el matorral rojo quedándose atrás.",
    },
    ini: "semillas oscuras caen dentro de una mochila tejida y la van llenando.",
    fin: "desde arriba, los dos van ya de espaldas empezando el regreso y el matorral rojo se queda atrás.",
  }, "tesoro, oro, gemas, cofres, magia, resplandor"),
  escp("b11b", [ref("dos_forasteros"), ref("serrania_baja"), ref("roza")], {
    comun: `Mañana. VOLVIERON Y LAS SEMBRARON EN LA SIERRA: la siembra es trabajo de manos, en la tierra de la Macuira. Objeto ancla: la semilla entrando en el hoyo.`,
    camara: {
      a: "PLANO MACRO de dos dedos metiendo una semilla en un hoyo pequeño y tapándolo con tierra.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la ladera de la sierra con una parcela recién sembrada, los hoyos en hilera y los dos hombres trabajando en ella.",
    },
    ini: "dos dedos meten una semilla en un hoyo pequeño y lo tapan con tierra.",
    fin: "desde arriba, la ladera tiene una parcela recién sembrada con los hoyos en hilera y los dos hombres trabajando.",
  }, "arado, maquinaria, invernadero, magia, resplandor, brotes instantaneos"),

  // b12 — Las frutas que nacieron eran tumas. Tendrían mucho valor.
  esc("b12a", [ref("adorno_y_valor"), ref("serrania_baja")], {
    comun: `Luz de mañana. LAS FRUTAS QUE NACIERON ERAN TUMAS: piedras rojas de collar, no gemas facetadas ni joyería. EL ROJO ES EL MISMO QUE EL DE LAS FRUTAS Y EL QUE TENDRÁN LOS PÁJAROS. Objeto ancla: las tumas en la mata.`,
    camara: {
      a: "PLANO MACRO de tres tumas rojas colgando de una rama como si fueran fruta, con el brillo mate de la piedra.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la parcela de la sierra con las matas cargadas de piedras rojas y los dos hombres parados mirándolas.",
    },
    ini: "tres tumas rojas cuelgan de una rama como si fueran fruta, con el brillo mate de la piedra.",
    fin: "desde arriba, las matas de la parcela están cargadas de piedras rojas y los dos hombres las miran, parados.",
  }, "gemas facetadas, joyeria europea, oro labrado, escaparate, tesoro, resplandor"),
  escp("b12b", [ref("mareiwa"), ref("adorno_y_valor"), ref("primeros_wayuu")], {
    comun: `Mañana. MAREIWA DIJO QUE ESAS PIEDRAS TENDRÍAN MUCHO VALOR EN TODA LA GUAJIRA: el valor se cuenta con las manos que las cogen y con los collares que se arman. Objeto ancla: el collar de tumas armándose.`,
    camara: {
      a: "PLANO MACRO de un hilo pasando por el agujero de una tuma roja, junto a otras ya ensartadas.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del patio con cinco personas ensartando tumas y varios collares ya terminados sobre la manta.",
    },
    ini: "un hilo pasa por el agujero de una tuma roja, junto a otras ya ensartadas.",
    fin: "desde arriba, cinco personas ensartan tumas y hay varios collares terminados sobre la manta.",
  }, "joyeria europea, oro, monedas, mercado moderno, escaparate, avaricia dibujada"),

  // b13 — Las demás semillas se las dieron a Worunka. Hicieron chicha.
  escp("b13a", [ref("worunka"), ref("semillas_y_siembra"), ref("roza")], {
    comun: `Mañana. LAS DEMÁS SEMILLAS SE LAS DIERON A WORUNKA PARA MANTENER LA GENTE: ella queda encargada del sustento. ${WO}, sembrando. Objeto ancla: las semillas en su mano.`,
    camara: {
      a: "PLANO MACRO de una mano de mujer abierta con semillas dentro, esparciéndolas sobre el surco.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la roza con ella a media distancia sembrando y la parcela ya abierta entera.",
    },
    ini: "una mano de mujer abierta con semillas dentro las esparce sobre el surco.",
    fin: "desde arriba, ella siembra a media distancia y la parcela ya está abierta entera.",
  }, "aureola, diosa, adoracion, resplandor, abundancia magica"),
  esc("b13b", [ref("recipientes"), ref("fuego_y_cocina"), ref("enramada")], {
    comun: `Tarde. HICIERON CHICHA Y LA DEJARON FUERTEAR: tinajas tapadas y guardadas a la sombra, esperando. Sin figuras. Objeto ancla: la tinaja tapada.`,
    camara: {
      a: "PLANO MACRO del borde de una tinaja con la tapa de barro puesta y la espuma asomando por el canto.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la enramada con seis tinajas grandes alineadas a la sombra, todas tapadas.",
    },
    ini: "el borde de una tinaja con la tapa de barro puesta y la espuma asomando por el canto.",
    fin: "desde arriba, seis tinajas grandes están alineadas a la sombra de la enramada, todas tapadas.",
  }, "barriles, botellas modernas, destileria, alcohol de marca, caricatura"),

  // b14 — Se la tomaron y se emborracharon. Mareiwa se puso muy bravo.
  escp("b14a", [ref("primeros_wayuu"), ref("recipientes"), ref("pago_y_fiesta")], {
    comun: `Noche. CUANDO ESTUVO FUERTE SE LA TOMARON Y SE EMBORRACHARON: es una fiesta que se va de las manos, contada con el desorden y no con caricatura. Objeto ancla: las totumas volcadas.`,
    camara: {
      a: "PLANO MACRO de una totuma volcada en la arena con el resto del líquido saliéndose.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL nocturno del patio con la gente repartida sin orden, algunos sentados y otros tumbados, y tinajas destapadas por todas partes.",
    },
    ini: "una totuma volcada en la arena, con el resto del líquido saliéndose.",
    fin: "desde arriba, la gente está repartida sin orden por el patio, unos sentados y otros tumbados, con tinajas destapadas por todas partes.",
  }, "vomito, orgia, caricatura de borrachos, violencia, desnudez, caos"),
  escp("b14b", [ref("mareiwa"), ref("llanura_cardonal"), ref("serrania_baja")], {
    comun: `Noche. MAREIWA SE PUSO MUY BRAVO CON TODA ESA GENTE: EL CASTIGO ES POR LA BORRACHERA, y la cadena queda clara. Pero el enfado no es rayos ni fuego: es una figura que se da la vuelta y se va. Objeto ancla: su espalda alejándose.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara de perfil mirando el patio, con la mandíbula apretada.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL nocturno con él alejándose hacia la sierra, diminuto, y la fiesta iluminada quedándose atrás.",
    },
    ini: "de perfil, mira el patio con la mandíbula apretada.",
    fin: "desde muy arriba, se aleja hacia la sierra, diminuto, y la fiesta iluminada se queda atrás.",
  }, "rayos, fuego divino, tormenta epica, aureola, gigantismo, ira dibujada"),

  // b15 — Mandó secar las tumas y quitó la abundancia. Verano largo.
  esc("b15a", [ref("adorno_y_valor"), ref("serrania_baja"), ref("roza")], {
    comun: `Luz blanca. MANDÓ SECAR LAS TUMAS Y QUITÓ LA ABUNDANCIA: las matas que estaban cargadas quedan secas y las piedras caen al suelo. Objeto ancla: las tumas en la tierra.`,
    camara: {
      a: "PLANO MACRO de tumas rojas caídas en la tierra seca, medio cubiertas de polvo.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la parcela de la sierra con las matas secas y peladas y las piedras rojas esparcidas por el suelo.",
    },
    ini: "tumas rojas caídas en la tierra seca, medio cubiertas de polvo.",
    fin: "desde arriba, las matas de la parcela están secas y peladas y las piedras rojas quedan esparcidas por el suelo.",
  }, "fuego, incendio, rayos, maldicion dibujada, calaveras, resplandor"),
  esc("b15b", [ref("jaguey"), ref("llanura_cardonal"), ref("casimba")], {
    comun: `Luz blanca. QUE EL VERANO FUERA LARGO, CON HAMBRE Y SED: el castigo es el paisaje mismo. Sin figuras. Objeto ancla: el barro agrietado del jagüey.`,
    camara: {
      a: "PLANO MACRO de las placas de barro agrietado levantándose del fondo del jagüey.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado de la Guajira entera blanca de sol, con los cauces secos marcados y ni una mancha verde.",
    },
    ini: "las placas de barro agrietado se levantan del fondo del jagüey.",
    fin: "desde muy arriba, la Guajira entera está blanca de sol, con los cauces secos marcados y ni una mancha verde.",
  }, "cadaveres, esqueletos, animales muertos, fuego, desierto de arabia, dunas"),

  // b16 — Por eso las tumas están enterradas. Sólo por lástima trae la lluvia.
  esc("b16a", [ref("adorno_y_valor"), ref("llanura_cardonal"), ref("arroyo_seco")], {
    comun: `Luz blanca. POR ESO LAS TUMAS ESTÁN ENTERRADAS: etiología viva de la Guajira. Se encuentran en la tierra, no en la mata. Objeto ancla: la tuma que asoma en la arena.`,
    camara: {
      a: "PLANO MACRO de una tuma roja medio enterrada en la arena, con sólo una parte a la vista.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del cauce seco con dos personas agachadas rebuscando en la arena, muy separadas entre sí.",
    },
    ini: "una tuma roja medio enterrada en la arena, con sólo una parte a la vista.",
    fin: "desde arriba, dos personas agachadas rebuscan en la arena del cauce seco, muy separadas entre sí.",
  }, "excavaciones, mineria, maquinaria, tesoro, cofres, resplandor"),
  esc("b16b", [ref("chubasco"), ref("llanura_cardonal"), ref("verdor")], {
    comun: `Luz que cambia. SÓLO POR LÁSTIMA MAREIWA TRAE LA LLUVIA: es un alivio corto y medido, no una redención. Sin figuras. Objeto ancla: la primera gota en la tierra seca.`,
    camara: {
      a: "PLANO MACRO de una gota gruesa reventando en el polvo y abriendo un cráter diminuto.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado con una sola cortina de lluvia sobre un trecho de la llanura y todo lo demás todavía blanco y seco.",
    },
    ini: "una gota gruesa revienta en el polvo y abre un cráter diminuto.",
    fin: "desde muy arriba, una sola cortina de lluvia cubre un trecho de la llanura y todo lo demás sigue blanco y seco.",
  }, "diluvio, inundacion, rayos, arcoiris, resplandor, angeles, aureola"),

  // b17 — Worunka volvió al arroyo. Mareiwa la volvió piedra.
  escp("b17a", [ref("worunka"), ref("arroyo_seco"), ref("serrania_baja")], {
    comun: `Amanecer, como en b1a. WORUNKA VOLVIÓ AL ARROYO A BAÑARSE: el mito cierra donde empezó. ${WO}, bajando otra vez. Objeto ancla: la misma bajada.`,
    camara: {
      a: "PLANO DETALLE de los mismos pies descalzos bajando por la misma piedra suelta de la ladera.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: GRAN PLANO GENERAL del valle al amanecer, el mismo de b1a, con ella diminuta llegando al recodo.",
    },
    ini: "los mismos pies descalzos bajan por la misma piedra suelta de la ladera.",
    fin: "desde muy arriba, el mismo valle del principio, con ella diminuta llegando al recodo.",
  }, "desnudez, bano, cuerpo, anatomia, ropa mojada, insinuacion"),
  esc("b17b", [ref("piedra_de_worunka"), ref("arroyo_seco")], {
    comun: `Amanecer. ALLÍ MAREIWA LA VOLVIÓ PIEDRA: SE REPRESENTA EL SITIO —el arroyo, la piedra A DISTANCIA— Y NO EL DETALLE. Es una roca del cauce, erosionada, vista siempre de lejos. Objeto ancla: la piedra en el recodo.`,
    camara: {
      a: "PLANO MEDIO del recodo del arroyo con una roca grande en el cauce, vista de lado y a contraluz.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL en picado del valle con el arroyo cruzándolo y la roca reducida a un punto en el cauce.",
    },
    ini: "en el recodo del arroyo hay una roca grande en el cauce, vista de lado y a contraluz.",
    fin: "desde muy arriba, el arroyo cruza el valle y la roca queda reducida a un punto en el cauce.",
  }, "anatomia, forma de cuerpo, estatua, figura humana, detalle, cara tallada"),

  // b18 — Metió al Sangre Toro en la piedra y quedó rojo. Carpintero, Guacamayo.
  esc("b18a", [ref("sangre_toro"), ref("piedra_de_worunka"), ref("arroyo_seco")], {
    comun: `Mañana. METIÓ AL SANGRE TORO EN LA PIEDRA Y QUEDÓ ROJO: EL ROJO DE LOS PÁJAROS VIENE DE TOCAR LA PIEDRA, y es EL MISMO ROJO de las tumas y de las frutas. Objeto ancla: el pájaro rojo sobre la roca.`,
    camara: {
      a: "PLANO MACRO del pecho rojo encendido de un pajarito posado, con las plumas erizadas.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del recodo con el pajarito posado en lo alto de la roca y el agua corriendo debajo.",
    },
    ini: "el pecho rojo encendido del pajarito posado, con las plumas erizadas.",
    fin: "desde arriba, el pajarito está posado en lo alto de la roca y el agua corre debajo.",
  }, "sangre, herida, pintura, tinte, magia, resplandor, particulas"),
  esc("b18b", [ref("carpintero"), ref("guacamayo"), ref("piedra_de_worunka")], {
    comun: `Mañana. EL CARPINTERO Y EL GUACAMAYO TAMBIÉN LA TOCARON: el epílogo es un BANDO DE AVES ROJAS sobre la piedra, y es la imagen más cálida y más alegre de todo el corpus. Objeto ancla: las aves rojas juntas.`,
    camara: {
      a: "PLANO MACRO del copete rojo de un carpintero agarrado a la roca, con el pico contra la piedra.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL final del valle al sol con una docena de aves rojas repartidas por la roca y el aire alrededor, y el arroyo corriendo.",
    },
    ini: "el copete rojo del carpintero agarrado a la roca, con el pico contra la piedra.",
    fin: "desde muy arriba, una docena de aves rojas están repartidas por la roca y el aire, y el arroyo corre debajo.",
  }, "sangre, aves muertas, plumas arrancadas, magia, resplandor, texto, moraleja"),
]);
