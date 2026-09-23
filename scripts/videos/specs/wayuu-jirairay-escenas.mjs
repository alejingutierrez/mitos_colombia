// Keyframes de Jirairay, el canto que llama al que mata — 12 bloques × 2 escenas
// × 2 cuadros = 48 imágenes ≈ 120 s.
// Guion: guion-jirairay-v2.json (N=12) · Acta: acta-jirairay.json (24 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _wayuu-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · JIRAIRAY NO ES UN PERSONAJE: ES EL CANTO con que se llama a wanurü. El
//   título nombra UN PROCEDIMIENTO, no un ser, y LA DIRECCIÓN DE ARTE VA AL
//   CANTO Y A LA MARACA. Nada de darle figura a nadie.
// · WANURÜ ES EL QUE ENFERMA Y EL QUE MATA, Y AUN ASÍ SE LO LLAMA A PROPÓSITO.
//   La piache NEGOCIA con él; no lo expulsa ni lo vence. No hay exorcismo.
// · LA POSESIÓN SE OYE, NO SE VE. El canon insiste: «no se lo veía; se lo oía
//   en la voz de la piache». NADA DE APARICIÓN VISIBLE DEL ESPÍRITU, ni
//   siquiera como sombra o niebla.
// · LA CURA ES UN TRATO CON PRECIO. Lo que cambia hacia la madrugada es que la
//   discusión pasa DEL ALMA AL PRECIO; el enfermo sana cuando se paga. Ese giro
//   es el nudo del mito y va en cuadro (b8).
// · LA MARIPOSA NOCTURNA BLANCA puede ser un muerto de la casa DE VISITA, y por
//   eso SE SACA CON LAS DOS MANOS. NO es augurio de muerte.
// · EL NOMBRE JIRAIRAÍ también aparece en «umarala», donde es el espíritu que
//   cobra la vida de la tía. Misma familia de creencia, FICHAS DISTINTAS.
// · MAREIWA aparece aquí nombrado FUMAYULE, «como lo nombran los que curan». Se
//   conserva el doble nombre y no se armoniza con las otras fichas.
//
// El inventario da un contrato de luz literal para el cierre: LA PRIMERA LUZ
// POR LAS RENDIJAS, en franjas, y lo llama «la mejor escena de iluminación del
// corpus». b9 lo cumple.
//
// DESLINDE CON `guanuru`: allá el tema es LA CASA cerrada y el espejo de dos
// familias; aquí es EL CANTO y la negociación de una noche. Comparten piachada
// y mariposa y no se pisan.
//
// GUION DE LUZ: viento y fiebre al mediodía → tarde de la llegada → penumbra
// del tabaco → noche de los espíritus propios → noche cerrada de wanurü →
// oscuridad de la exigencia → patio a oscuras reuniendo el pago → madrugada del
// regateo → PRIMERA LUZ EN FRANJAS → noche siguiente con la mariposa → manos
// que la sacan → última luz sobre la maraca guardada.

import { CONTEXTO, DIRECCION, AVOID_BASE, PALETTE_BASE, ref, esc, escp, armar } from "./_wayuu-comun.mjs";

export const SPEC_NAME = "wayuu-jirairay-escenas";
export const OUT_DIR = "wayuu/videos/jirairay/keyframes";
export { CONTEXTO, DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; espiritu visible, aparicion, figura translucida, sombra con forma humana, monstruo, demonio, posesion de pelicula; ojos en blanco, levitacion, contorsiones, cabeza girando, vomito, convulsiones; exorcismo, cruces, agua bendita, sacerdote, pentagramas, velas negras, circulos rituales; humo de colores, resplandor, particulas, rayos, magia dibujada; lesiones, pustulas, llagas, manchas en la piel, sangre, jeringas, hospital; calaveras, esqueletos, cadaveres, ataudes; bruja de cuento, caldero, sombrero puntiagudo, verrugas";
export const PALETTE =
  PALETTE_BASE + "; la noche entera del mito va en pardos calientes de penumbra y brasa, sin un solo frio; el unico blanco es la mariposa y la primera luz del amanecer";

const OU =
  "LA MISMA outsu de la referencia (mujer wayúu mayor, piache, manta larga oscura hasta el tobillo con cenefa tejida, collares de tumas al cuello, pelo recogido, cara concentrada y seria, descalza)";
const EN =
  "EL MISMO enfermo de la referencia (hombre wayúu adulto, delgado, manta corta de algodón crudo, tendido en el chinchorro), con la cara cansada pero SIN una sola marca en la piel";

export const ITEMS = armar([
  // b1 — La fiebre llegó con el viento. Uno quedó tendido en el chinchorro.
  esc("b1a", [ref("llanura_cardonal"), ref("rancheria"), ref("chubasco")], {
    comun: `Mediodía de viento. LA FIEBRE LLEGÓ A LA RANCHERÍA CON EL VIENTO: se cuenta con el aire, no con un ser. Sin figuras. Objeto ancla: la tolvanera cruzando el terreno.`,
    camara: {
      a: "PLANO MACRO de la arena levantándose en hilos sobre el suelo, empujada por el viento.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL en picado de la ranchería con una cortina de polvo cruzándola entera de un lado al otro.",
    },
    ini: "la arena se levanta en hilos sobre el suelo, empujada por el viento.",
    fin: "desde muy arriba, una cortina de polvo cruza la ranchería entera de un lado al otro.",
  }, "monstruo en el viento, cara en el polvo, espectro, niebla siniestra, demonio"),
  escp("b1b", [ref("enfermo"), ref("chinchorro"), ref("enramada")], {
    comun: `Mediodía. UNO DEJÓ DE COMER Y QUEDÓ TENDIDO EN EL CHINCHORRO. ${EN}. La enfermedad se cuenta con la totuma sin tocar, nunca con la piel. Objeto ancla: la totuma llena al lado del chinchorro.`,
    camara: {
      a: "PLANO MACRO de una totuma llena y quieta en la arena, junto al fleco de un chinchorro.",
      b: "la cámara ha SUBIDO y ha retrocedido: PLANO MEDIO de él tendido con los ojos abiertos mirando las vigas, sin moverse.",
    },
    ini: "una totuma llena y quieta en la arena, junto al fleco del chinchorro.",
    fin: "al subir la cámara se le ve tendido con los ojos abiertos mirando las vigas, sin moverse.",
  }, "pustulas, llagas, manchas, sangre, delgadez extrema, agonia teatral"),

  // b2 — Mandaron llamar a la piache. Llegó al caer la tarde.
  escp("b2a", [ref("primeros_wayuu"), ref("caballo"), ref("llanura_cardonal")], {
    comun: `Tarde. LA FAMILIA MANDÓ LLAMAR A LA PIACHE: alguien sale y alguien la trae. Gestión práctica, sin solemnidad. Objeto ancla: el camino por el que la traen.`,
    camara: {
      a: "PLANO MEDIO CORTO de dos personas hablando deprisa en el umbral, una ya dándose la vuelta.",
      b: "la cámara ha GIRADO al camino y se ha elevado: PLANO GENERAL de la trocha con dos jinetes acercándose desde el fondo a la luz de la tarde.",
    },
    ini: "dos personas hablan deprisa en el umbral y una ya se da la vuelta.",
    fin: "desde arriba, dos jinetes se acercan por la trocha desde el fondo, con la luz de la tarde.",
  }, "procesion, cruces, sacerdote, medico, ambulancia, panico"),
  escp("b2b", [ref("outsu"), ref("oficio_de_curar"), ref("enramada")], {
    comun: `Última luz. LLEGÓ AL CAER LA TARDE, CON SU MARACA Y SU TABACO. ${OU}. Trae herramientas de trabajo. Objeto ancla: la maraca y el tabaco sobre la manta.`,
    camara: {
      a: "PLANO MACRO de una maraca de calabazo con el mango labrado y un rollo de hoja de tabaco, puestos sobre una manta.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO de ella desmontando y entrando bajo la enramada, con la familia abriéndole paso.",
    },
    ini: "una maraca de calabazo con el mango labrado y un rollo de hoja de tabaco, sobre una manta.",
    fin: "ella desmonta y entra bajo la enramada, con la familia abriéndole paso.",
  }, "bruja de cuento, caldero, sombrero puntiagudo, verrugas, humo de colores"),

  // b3 — Pidió silencio y mascó el tabaco. Lo sobó, escupió sobre él y cantó.
  escp("b3a", [ref("outsu"), ref("enfermo"), ref("piichi")], {
    comun: `Penumbra. PIDIÓ SILENCIO Y MASCÓ EL TABACO HASTA LLENARSE LA BOCA DE JUGO: es preparación de oficio, hecha despacio. Objeto ancla: la hoja de tabaco entre los dedos.`,
    camara: {
      a: "PLANO MACRO de una hoja de tabaco oscura enrollándose entre los dedos antes de llevarla a la boca.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del cuarto en penumbra con ella sentada junto al chinchorro y toda la familia quieta contra las paredes.",
    },
    ini: "una hoja de tabaco oscura se enrolla entre los dedos antes de llevarla a la boca.",
    fin: "desde arriba, ella está sentada junto al chinchorro y la familia entera está quieta contra las paredes.",
  }, "drogas, humo, alucinaciones dibujadas, trance, ojos en blanco"),
  escp("b3b", [ref("outsu"), ref("enfermo"), ref("chinchorro")], {
    comun: `Penumbra. LO SOBÓ, ESCUPIÓ SOBRE ÉL Y CANTÓ: las tres acciones del canon, en orden y sin misterio. Es masaje y saliva de tabaco, tratamiento y no rito teatral. Objeto ancla: las manos sobando el brazo.`,
    camara: {
      a: "PLANO MACRO de dos manos viejas apretando y recorriendo un antebrazo, de arriba abajo.",
      b: "la cámara ha SUBIDO hasta su cara y ha girado: PLANO MEDIO CORTO de ella empezando a cantar, con los ojos bajos y la boca abierta.",
    },
    ini: "dos manos viejas aprietan y recorren un antebrazo, de arriba abajo.",
    fin: "al subir, ella empieza a cantar con los ojos bajos y la boca abierta.",
  }, "posesion, ojos en blanco, contorsiones, vomito, levitacion, resplandor"),

  // b4 — Tenía varios espíritus. Cantó a los suyos y a Mareiwa, fumayule.
  escp("b4a", [ref("outsu"), ref("piichi")], {
    comun: `Noche. TENÍA VARIOS ESPÍRITUS Y A CADA UNO LO LLAMABA DISTINTO: cada llamada es un canto distinto, y eso se cuenta con la voz y el ritmo de la maraca, NUNCA con figuras. Los espíritus no aparecen: el inventario los marca `+"`restringida`"+`. Objeto ancla: la maraca marcando ritmos distintos.`,
    camara: {
      a: "PLANO MACRO de la maraca sacudiéndose a un ritmo, con la mano tensa en el mango labrado.",
      b: "la cámara ha RETROCEDIDO y ha girado alrededor de ella: PLANO MEDIO desde el otro lado con la maraca ya en otro ritmo, más lento, y su cara cambiada de gesto.",
    },
    ini: "la maraca se sacude a un ritmo y la mano está tensa en el mango labrado.",
    fin: "desde el otro lado, la maraca va ya en otro ritmo, más lento, y su cara ha cambiado de gesto.",
  }, "espiritus visibles, figuras flotando, humo, resplandor, siluetas, niebla"),
  escp("b4b", [ref("outsu"), ref("mareiwa"), ref("piichi")], {
    comun: `Noche. CANTÓ A LOS SUYOS Y A MAREIWA, LLAMADO FUMAYULE, «como lo nombran los que curan». Mareiwa NO aparece: lo que se ve es el nombre dicho hacia fuera, hacia el vano abierto. Objeto ancla: el vano abierto a la noche.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara de perfil, con la cabeza vuelta hacia el vano y la voz saliendo.",
      b: "la cámara ha GIRADO siguiendo esa dirección y ha atravesado el vano: PLANO GENERAL de la noche de fuera, la llanura oscura y el cielo, sin nadie en cuadro.",
    },
    ini: "de perfil y cerca, tiene la cabeza vuelta hacia el vano y la voz sale hacia fuera.",
    fin: "al otro lado del vano está la noche de fuera: la llanura oscura y el cielo, y nadie en cuadro.",
  }, "figura divina, aureola, resplandor, aparicion, rayos, angeles"),

  // b5 — Cerrada la noche cantó a wanurü. No se lo veía: se lo oía.
  escp("b5a", [ref("outsu"), ref("chinchorro"), ref("piichi")], {
    comun: `Noche cerrada. CANTÓ A WANURÜ, EL QUE ENFERMA Y MATA, y lo llama A PROPÓSITO. El cuarto se ha quedado casi a oscuras. Objeto ancla: la única brasa que queda encendida.`,
    camara: {
      a: "PLANO MACRO de una brasa sola en el fogón, casi apagada, con su punto rojo.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del cuarto casi negro con las dos siluetas —ella y el chinchorro— apenas recortadas por esa brasa.",
    },
    ini: "una brasa sola en el fogón, casi apagada, con su punto rojo.",
    fin: "desde arriba, el cuarto está casi negro y sólo esa brasa recorta a ella y al chinchorro.",
  }, "monstruo, ojos en la oscuridad, sombra que se acerca, niebla, demonio"),
  escp("b5b", [ref("outsu")], {
    comun: `Noche cerrada. NO SE LO VEÍA: SE LO OÍA. La presencia está ENTERAMENTE EN LA VOZ, y por eso el plano se va a la garganta. Ni sombra, ni niebla, ni silueta. Objeto ancla: la garganta que habla con otra voz.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara cantando, de frente, con los ojos cerrados.",
      b: "la cámara ha BAJADO y ha cerrado del todo: PLANO MACRO de su cuello y su garganta en la penumbra, con los tendones marcándose al hablar.",
    },
    ini: "de frente y cerca, canta con los ojos cerrados.",
    fin: "de muy cerca, el cuello y la garganta en penumbra, con los tendones marcándose al hablar.",
  }, "ojos en blanco, cara deformada, posesion, voz dibujada, humo saliendo de la boca, resplandor"),

  // b6 — El que tenía apresada el alma no quería soltarla. Exigía su ofrenda.
  escp("b6a", [ref("outsu"), ref("enfermo"), ref("chinchorro")], {
    comun: `Oscuridad. EL QUE TENÍA APRESADA EL ALMA NO QUERÍA SOLTARLA: la resistencia se cuenta con el cuerpo del enfermo, que no mejora, y con la piache, que insiste. Objeto ancla: la mano del enfermo quieta.`,
    camara: {
      a: "PLANO MACRO de una mano abierta y quieta sobre el borde del chinchorro, sin fuerza.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO con ella inclinada sobre él, cantando más fuerte, y la mano igual de quieta abajo.",
    },
    ini: "una mano abierta y quieta sobre el borde del chinchorro, sin fuerza.",
    fin: "ella se inclina sobre él cantando más fuerte, y la mano sigue igual de quieta abajo.",
  }, "convulsiones, contorsiones, ojos en blanco, vomito, forcejeo, monstruo"),
  escp("b6b", [ref("outsu"), ref("primeros_wayuu"), ref("piichi")], {
    comun: `Oscuridad. EXIGÍA SU OFRENDA, Y SIN PÉRDIDA DE TIEMPO: la exigencia sale por la voz de ella y la familia la oye. Objeto ancla: las caras de la familia recibiendo la exigencia.`,
    camara: {
      a: "PLANO MEDIO CORTO de ella hablando de perfil con una voz que no parece la suya, la cara tensa.",
      b: "la cámara ha GIRADO a la pared del fondo y ha retrocedido: PLANO GENERAL de la familia contra la pared, quieta, y dos de ellos ya poniéndose de pie.",
    },
    ini: "de perfil, habla con una voz que no parece la suya y tiene la cara tensa.",
    fin: "en la pared del fondo, la familia está quieta y dos de ellos ya se ponen de pie.",
  }, "espiritu visible, figura translucida, sombra, resplandor, humo, exorcismo"),

  // b7 — La discusión iba y venía por su garganta. Reunieron lo pedido.
  escp("b7a", [ref("outsu"), ref("piichi")], {
    comun: `Oscuridad. LA DISCUSIÓN IBA Y VENÍA POR LA GARGANTA DE LA MUJER: dos partes hablando por una sola boca, y NADA MÁS EN CUADRO. Objeto ancla: la boca que hace de campo de batalla.`,
    camara: {
      a: "PLANO MACRO de una boca en la penumbra, abriéndose y cerrándose en dos ritmos distintos.",
      b: "la cámara ha RETROCEDIDO y ha girado: PLANO MEDIO de ella entera sentada, sola en el cuadro, discutiendo consigo misma sin mover el cuerpo.",
    },
    ini: "una boca en la penumbra se abre y se cierra en dos ritmos distintos.",
    fin: "al retroceder, ella está entera y sola en el cuadro, discutiendo consigo misma sin mover el cuerpo.",
  }, "dos caras, cara dividida, monstruo, resplandor, humo, ojos en blanco, doble expuesto"),
  escp("b7b", [ref("primeros_wayuu"), ref("adorno_y_valor"), ref("enramada")], {
    comun: `Noche en el patio. LA FAMILIA REUNIÓ LO PEDIDO Y LO TRAJO: salen a juntar cosas de valor de la casa. Es un pago, y se ve como tal. Objeto ancla: lo que va apareciendo sobre la manta.`,
    camara: {
      a: "PLANO MACRO de unas manos dejando un collar de tumas sobre una manta extendida en la arena.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del patio de noche con cinco personas trayendo cosas de distintos sitios y la manta llenándose en el centro.",
    },
    ini: "unas manos dejan un collar de tumas sobre una manta extendida en la arena.",
    fin: "desde arriba, cinco personas traen cosas de distintos sitios y la manta se va llenando en el centro.",
  }, "altar, velas, sacrificio, sangre, dinero moderno, tesoro, oro"),

  // b8 — Hacia la madrugada wanurü discutía ya por el precio, no por el alma.
  escp("b8a", [ref("outsu"), ref("adorno_y_valor"), ref("piichi")], {
    comun: `Madrugada. EL GIRO DEL MITO: HACIA LA MADRUGADA WANURÜ DISCUTÍA YA POR EL PRECIO, NO POR EL ALMA. Se cuenta con el regalo puesto delante y la discusión que se vuelve regateo. Objeto ancla: el regalo en el suelo, entre los dos.`,
    camara: {
      a: "PLANO MEDIO de ella cantando con el regalo ya puesto en el suelo delante, a medio camino.",
      b: "la cámara ha BAJADO al suelo y ha cerrado: PLANO MACRO del montón de cosas del pago, con una mano apartando una pieza y añadiendo otra.",
    },
    ini: "ella canta con el regalo ya puesto en el suelo delante, a medio camino.",
    fin: "a ras de suelo, una mano aparta una pieza del montón del pago y añade otra.",
  }, "monstruo negociando, figura visible, resplandor, dinero, contrato, texto"),
  escp("b8b", [ref("outsu"), ref("enfermo"), ref("chinchorro")], {
    comun: `Madrugada. LA PIACHE SIGUIÓ CANTANDO: la noche ha sido larga y se le nota en el cuerpo. Objeto ancla: la maraca en la mano ya cansada.`,
    camara: {
      a: "PLANO MACRO de la mano en el mango de la maraca, con los nudillos blancos de apretar tanto rato.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del cuarto en la última oscuridad con ella encorvada de cansancio y el enfermo respirando más hondo.",
    },
    ini: "la mano en el mango de la maraca tiene los nudillos blancos de apretar tanto rato.",
    fin: "desde arriba, ella está encorvada de cansancio y el enfermo respira más hondo.",
  }, "levitacion, posesion, resplandor, milagro, aureola, angeles"),

  // b9 — Con la primera luz el enfermo durmió. «Piacha todos los días».
  esc("b9a", [ref("piichi"), ref("enramada")], {
    comun: `PRIMERA LUZ POR LAS RENDIJAS: contrato de luz literal del inventario, que lo llama «la mejor escena de iluminación del corpus». Franjas de luz de amanecer atravesando el cuarto. Sin figuras. Objeto ancla: las franjas de luz en el polvo.`,
    camara: {
      a: "PLANO MACRO de una franja de luz de amanecer entrando por una rendija, con el polvo suspendido dentro de ella.",
      b: "la cámara ha RETROCEDIDO hasta el fondo del cuarto: PLANO GENERAL del interior cruzado por seis o siete franjas paralelas de luz, de la pared al suelo.",
    },
    ini: "una franja de luz de amanecer entra por la rendija y el polvo queda suspendido dentro.",
    fin: "desde el fondo, el cuarto entero está cruzado por seis o siete franjas paralelas de luz, de la pared al suelo.",
  }, "resplandor divino, rayos de dios, aureola, angeles, humo de colores"),
  escp("b9b", [ref("outsu"), ref("enfermo"), ref("oficio_de_curar")], {
    comun: `Primera luz. EL ENFERMO DURMIÓ Y ELLA SOLTÓ LA MARACA. «PIACHA TODOS LOS DÍAS», le dijo: la instrucción es de tratamiento, como quien receta. Objeto ancla: la maraca soltada en la arena.`,
    camara: {
      a: "PLANO MACRO de la maraca cayendo de lado en la arena, quieta, con la mano abriéndose encima.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO de ella de pie hablándole a la familia, corta y práctica, con el enfermo dormido detrás.",
    },
    ini: "la maraca cae de lado en la arena, quieta, y la mano se abre encima.",
    fin: "ella está de pie hablándole a la familia, corta y práctica, con el enfermo dormido detrás.",
  }, "milagro, aureola, resplandor, aplausos, arrodillarse, agradecimiento teatral"),

  // b10 — Que el mal se aleje como las lluvias. Esa noche entró una mariposa.
  esc("b10a", [ref("chubasco"), ref("llanura_cardonal")], {
    comun: `Mañana. QUE EL MAL SE ALEJE COMO SE ALEJAN LAS LLUVIAS EN VERANO: la comparación del canon es de tiempo, y así se dibuja. Sin figuras. Objeto ancla: la cortina de lluvia que se va.`,
    camara: {
      a: "PLANO MACRO de las últimas gotas secándose sobre la arena caliente.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado con la cortina de lluvia alejándose por un extremo del horizonte y el resto de la llanura ya seca y clara.",
    },
    ini: "las últimas gotas se secan sobre la arena caliente.",
    fin: "desde muy arriba, la cortina de lluvia se aleja por un extremo del horizonte y el resto de la llanura ya está seco y claro.",
  }, "tormenta epica, rayos, monstruo en las nubes, cara en el cielo, resplandor"),
  esc("b10b", [ref("mariposa_nocturna"), ref("enramada"), ref("chinchorro")], {
    comun: `Noche siguiente. ESA NOCHE ENTRÓ UNA MARIPOSA BLANCA: no es augurio de muerte, es una visita. Objeto ancla: la mariposa blanca en el aire del cuarto.`,
    camara: {
      a: "PLANO GENERAL del cuarto de noche con los chinchorros colgados y algo blanco cruzando el aire, pequeño.",
      b: "la cámara ha SEGUIDO a la mariposa y ha cerrado del todo: PLANO MACRO de sus alas blancas abiertas, posada en una cuerda, quieta.",
    },
    ini: "en el cuarto de noche, algo blanco y pequeño cruza el aire entre los chinchorros.",
    fin: "de muy cerca, las alas blancas están abiertas y la mariposa quieta, posada en una cuerda.",
  }, "mariposa monstruosa, calavera en las alas, cara, resplandor, enjambre, augurio dibujado"),

  // b11 — Nadie la tocó: la sacaron con las dos manos. (CITA)
  escp("b11a", [ref("mujer_mayor"), ref("mariposa_nocturna"), ref("enramada")], {
    comun: `Noche. NADIE LA TOCÓ: LA SACARON DESPACIO, CON LAS DOS MANOS. El gesto es el mismo que en «guanuru» y aquí también es la regla. Objeto ancla: las dos manos ahuecadas.`,
    camara: {
      a: "PLANO MACRO de dos manos ahuecándose alrededor de la mariposa sin llegar a cerrarse del todo.",
      b: "la cámara ha RETROCEDIDO y ha girado hacia el vano: PLANO MEDIO de la persona caminando hacia fuera con las manos juntas por delante y la familia mirándola.",
    },
    ini: "dos manos se ahuecan alrededor de la mariposa sin llegar a cerrarse del todo.",
    fin: "la persona camina hacia el vano con las manos juntas por delante y la familia la mira.",
  }, "aplastar, apretar, insecto muerto, ritual, velas, simbolos, resplandor"),
  escp("b11b", [ref("yolujaa"), ref("chinchorro"), ref("constelaciones")], {
    comun: `Noche. LA CITA: por qué me mataste, si vine porque te estimo. Es lo que un muerto le reclama en sueños a QUIEN SÍ LA MATÓ, y por eso nadie la toca. El muerto se ve DE LEJOS Y DE ESPALDAS, con ropa corriente: nunca translúcido. Objeto ancla: la figura de espaldas en el umbral.`,
    camara: {
      a: "PLANO MEDIO CORTO de una cara dormida en el chinchorro, con el ceño moviéndose.",
      b: "la cámara ha RETROCEDIDO y ha girado al vano: PLANO GENERAL nocturno con una figura de espaldas parada en el umbral, quieta, y la noche detrás.",
    },
    ini: "una cara dormida en el chinchorro, con el ceño moviéndose.",
    fin: "al girar al vano hay una figura de espaldas parada en el umbral, quieta, con la noche detrás.",
  }, "espectro, translucido, calavera, ojos brillantes, resplandor, niebla, zombi, texto"),

  // b12 — El regalo se entregó completo. Jirairay quedó guardado en su voz.
  escp("b12a", [ref("primeros_wayuu"), ref("adorno_y_valor"), ref("enramada")], {
    comun: `Mañana. EL REGALO SE ENTREGÓ COMPLETO: EL ESPÍRITU AL QUE SE FALTA HUYE. Se cuenta con la manta del pago vaciándose del todo, sin que sobre nada. Objeto ancla: la manta vacía.`,
    camara: {
      a: "PLANO MACRO de las últimas piezas saliendo de la manta, dejándola lisa.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del patio con la manta doblada y vacía, y la familia ya en sus cosas.",
    },
    ini: "las últimas piezas salen de la manta y la dejan lisa.",
    fin: "desde arriba, la manta está doblada y vacía y la familia ya anda en sus cosas.",
  }, "tesoro, oro, altar, sacrificio, sangre, dinero moderno"),
  escp("b12b", [ref("outsu"), ref("oficio_de_curar"), ref("llanura_cardonal")], {
    comun: `Última luz. JIRAIRAY QUEDÓ GUARDADO EN SU VOZ: el canto no es un ser ni un objeto, es UN PROCEDIMIENTO que ella se lleva. Se cierra con la maraca guardada y ella yéndose. Objeto ancla: la maraca envuelta en la manta.`,
    camara: {
      a: "PLANO MACRO de la maraca envolviéndose en un trozo de manta y atándose con un cordel.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL final en picado de la llanura al atardecer con ella alejándose sola por la trocha y la ranchería viva detrás.",
    },
    ini: "la maraca se envuelve en un trozo de manta y se ata con un cordel.",
    fin: "desde muy arriba, ella se aleja sola por la trocha y detrás queda la ranchería con su vida.",
  }, "aureola, apoteosis, resplandor, monumento, texto, moraleja dibujada"),
]);
