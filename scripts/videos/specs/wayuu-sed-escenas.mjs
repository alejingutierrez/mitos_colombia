// Keyframes de Las dos piedras de Utta — 10 bloques × 2 escenas × 2 cuadros
// = 40 imágenes ≈ 100 s.
// Guion: guion-la-sed-da-los-civilizados-v2.json (N=10) · Acta: acta-la-sed-da-los-civilizados.json (20 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _wayuu-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · LOS MUERTOS SON LOS FORASTEROS, y el relato los mira DESDE AFUERA. NO HAY
//   CULPA SUYA NI CRUELDAD DE NADIE: hay una tierra que ellos no saben caminar.
//   Ningún plano puede acusarlos ni compadecerlos.
// · LA PANELA ES LA IRONÍA DEL MITO: cargan dulce y no tienen agua. ESE
//   CONTRASTE ES LO QUE HAY QUE SOSTENER EN IMAGEN, no el sufrimiento.
// · EL MITO NO ES DE VENGANZA NI DE CASTIGO POR OFENSA. La sentencia de Mareiwa
//   llega al final y EXPLICA UNA DIFERENCIA DE CUERPOS: tres días contra uno.
// · LA MUERTE NO SE REPRESENTA: se narra por lo que se seca y EL PLANO CORTA A
//   LAS DOS PIEDRAS.
// · UTTA QUEDA CERCA DE KATETAMANA, el cerro de «el-incesto». Son dos piedras
//   de origen distinto y LAS FICHAS NO SE CRUZAN.
// · ARIJUNA ES LA PALABRA DEL CANON para forastero y se conserva; no se traduce
//   a «blanco» ni a «colono», y la imagen no los uniforma de colonos.
// · EL PAISAJE ES PERSONAJE: cardones, trupillos, arena que devuelve el calor,
//   nordeste que no refresca. Está en el canon línea por línea.
//
// CONTRATO DE LUZ LITERAL del inventario: «CIELO BLANCO» es una instrucción
// cromática del canon — AL MEDIODÍA EL AZUL SE LAVA. De b3 en adelante el cielo
// va perdiendo color hasta quedar blanco del todo.
//
// GUION DE LUZ: primera hora en Utta → mañana del olor a caña → nordeste que
// levanta polvo → mediodía sin sombra ni jagüey → cielo ya blanco → tarde en
// que se acuestan → última luz sobre la carga → piedras al amanecer siguiente →
// luz plana de quien pasa y reconoce → sol alto de la sentencia.

import { CONTEXTO, DIRECCION, AVOID_BASE, PALETTE_BASE, ref, esc, escp, armar } from "./_wayuu-comun.mjs";

export const SPEC_NAME = "wayuu-sed-escenas";
export const OUT_DIR = "wayuu/videos/la-sed-da-los-civilizados/keyframes";
export { CONTEXTO, DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; cadaver, cuerpo muerto, agonia en plano, lengua fuera, ojos vidriosos, piel quemada, momia, esqueleto; sangre, llagas, ampollas, deshidratacion clinica; conquistadores, armaduras, cascos, uniformes coloniales, banderas, carabelas; espejismos dibujados, oasis, camellos, dunas de arabia, buitres circulando sobre un cuerpo; castigo divino, rayos, fuego, aureola, dedo acusador, juicio; burla, caricatura de forasteros, crueldad, regodeo; estatuas, esculturas, figuras humanas talladas, monumento, placa";
export const PALETTE =
  PALETTE_BASE + "; EL CIELO PIERDE COLOR BLOQUE A BLOQUE hasta quedar blanco del todo al mediodia, que es instruccion literal del canon; el unico calido que queda entonces es el pardo de la panela";

const AR =
  "LOS MISMOS dos arijuna de la referencia (dos forasteros adultos, camisa de tela cruda con las mangas subidas, pantalón de lienzo, sombrero de ala ancha de fibra, calzado de suela gastada), gente de comercio a pie y NUNCA soldados ni colonos uniformados";

export const ITEMS = armar([
  // b1 — Cerca de Katetamana hay un lugar llamado Utta. Llegaron dos arijuna.
  esc("b1a", [ref("utta"), ref("llanura_cardonal"), ref("serrania_baja")], {
    comun: `Primera hora, cielo todavía con algo de color. CERCA DE KATETAMANA HAY UN LUGAR QUE SE LLAMA UTTA: un trecho de llanura con cardones, sin nada que lo distinga. Sin figuras. Objeto ancla: el suelo de Utta.`,
    camara: {
      a: "PLANO MACRO de la arena de Utta con las piedrecillas y el rastrojo seco, a primera hora.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado del paraje con la serranía al fondo y el trecho de llanura abierto y vacío.",
    },
    ini: "la arena de Utta con sus piedrecillas y el rastrojo seco, a primera hora.",
    fin: "desde muy arriba se ve el paraje entero con la serranía al fondo y el trecho de llanura abierto y vacío.",
  }, "monumento, placa, nombre escrito, ruinas, cementerio, cruces"),
  escp("b1b", [ref("alijuna"), ref("llanura_cardonal"), ref("del_camino")], {
    comun: `Primera hora. HASTA ALLÍ LLEGARON DOS ARIJUNA A VENDER PANELA. ${AR}. Son comerciantes a pie, y la cámara los mira DESDE AFUERA, sin juzgarlos. Objeto ancla: los dos caminando con la carga.`,
    camara: {
      a: "PLANO DETALLE de dos pares de pies con calzado gastado avanzando por la trocha, a paso largo.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la llanura con los dos a media distancia, cada uno con su bulto al hombro, todavía frescos.",
    },
    ini: "dos pares de pies con calzado gastado avanzan por la trocha a paso largo.",
    fin: "desde arriba se les ve a media distancia, cada uno con su bulto al hombro, todavía frescos.",
  }, "armaduras, uniformes, soldados, banderas, caballos, caricatura"),

  // b2 — Traían los bloques en hojas secas y olía a caña quemada.
  esc("b2a", [ref("del_camino"), ref("del_camino")], {
    comun: `Mañana. TRAÍAN LOS BLOQUES EN HOJAS SECAS Y EL DULCE OLÍA A CAÑA QUEMADA: la panela es la IRONÍA del mito y hay que verla bien. Objeto ancla: el bloque de panela envuelto.`,
    camara: {
      a: "PLANO MACRO de un bloque de panela oscura envuelto en hoja seca atada con fibra, con el brillo pegajoso del borde.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO del bulto entero cargado al hombro, con doce o quince bloques apretados dentro de la red.",
    },
    ini: "un bloque de panela oscura envuelto en hoja seca y atado con fibra, con el borde pegajoso brillando.",
    fin: "el bulto entero va cargado al hombro, con doce o quince bloques apretados dentro de la red.",
  }, "mercancia moderna, cajas, etiquetas, sacos de yute industrial, dinero"),
  escp("b2b", [ref("alijuna"), ref("llanura_cardonal"), ref("cardon")], {
    comun: `Mañana. VENÍAN CAMINANDO DESDE TEMPRANO: llevan horas y todavía van bien. El cielo empieza a perder color. Objeto ancla: el sombrero contra el cielo que se lava.`,
    camara: {
      a: "PLANO MEDIO CORTO de uno de ellos de perfil bajo el ala del sombrero, mirando al frente.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL en picado con los dos diminutos en la trocha y el cielo ya más pálido que al empezar.",
    },
    ini: "de perfil bajo el ala del sombrero, mira al frente.",
    fin: "desde muy arriba, los dos son diminutos en la trocha y el cielo ya está más pálido que al empezar.",
  }, "caricatura, sufrimiento teatral, espejismo, oasis, buitres"),

  // b3 — El nordeste no refrescaba: levantaba polvo. Ya no hablaban.
  esc("b3a", [ref("llanura_cardonal"), ref("cardon"), ref("trupillo")], {
    comun: `Media mañana. EL NORDESTE NO REFRESCABA: LEVANTABA POLVO Y SE LO METÍA EN LA BOCA. El viento viene siempre del nordeste, en todos los cuadros. Sin figuras. Objeto ancla: el polvo en el aire.`,
    camara: {
      a: "PLANO MACRO de la arena levantándose en hilos y cruzando en diagonal, con los cardones detrás desenfocados.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la llanura con una cortina de polvo cruzándola entera desde el nordeste y el cielo perdiendo azul.",
    },
    ini: "la arena se levanta en hilos y cruza en diagonal, con los cardones detrás desenfocados.",
    fin: "desde arriba, una cortina de polvo cruza la llanura entera desde el nordeste y el cielo va perdiendo azul.",
  }, "tormenta de arena epica, tornado, dunas, desierto de arabia, espejismo"),
  escp("b3b", [ref("alijuna"), ref("del_camino")], {
    comun: `Media mañana. A MEDIA MAÑANA YA NO HABLABAN: el silencio es el primer dato, y se cuenta con dos bocas cerradas y el paso más corto. Objeto ancla: las dos bocas cerradas.`,
    camara: {
      a: "PLANO MACRO de unos labios cerrados y agrietados por el polvo, sin abrirse.",
      b: "la cámara ha RETROCEDIDO y ha girado al costado: PLANO MEDIO lateral de los dos andando en fila, uno detrás del otro, sin mirarse ni decirse nada.",
    },
    ini: "unos labios cerrados y agrietados por el polvo, sin abrirse.",
    fin: "de costado, los dos andan en fila, uno detrás del otro, sin mirarse ni decirse nada.",
  }, "agonia, lengua fuera, ampollas, sangre, llanto, caricatura"),

  // b4 — Buscaron sombra y jagüey y no hubo. Tanta panela y ni un sorbo.
  esc("b4a", [ref("trupillo"), ref("jaguey"), ref("llanura_cardonal")], {
    comun: `Mediodía. BUSCARON SOMBRA Y ERA POCA; BUSCARON JAGÜEY Y NO LO HUBO: dos búsquedas, dos negativas. Sin figuras. Objeto ancla: la sombra mínima y el hoyo seco.`,
    camara: {
      a: "PLANO CENITAL MACRO de la sombra estrecha de un trupillo sobre la arena, del ancho de un brazo.",
      b: "la cámara ha RETROCEDIDO en travelling y se ha elevado: PLANO GENERAL con el hoyo del jagüey completamente seco y agrietado un poco más allá, sin una gota.",
    },
    ini: "la sombra estrecha de un trupillo sobre la arena, del ancho de un brazo.",
    fin: "un poco más allá, el hoyo del jagüey está completamente seco y agrietado, sin una gota.",
  }, "oasis, espejismo, agua, verde, palmeras, dunas"),
  escp("b4b", [ref("alijuna"), ref("del_camino"), ref("llanura_cardonal")], {
    comun: `Mediodía, cielo ya casi blanco. TANTA PANELA Y NI UN SORBO DE AGUA: LA IRONÍA EN UN SOLO PLANO. Objeto ancla: la carga de dulce al lado de la boca seca.`,
    camara: {
      a: "PLANO MACRO de la panela abierta dentro del envoltorio, oscura y brillante de dulce, en la arena.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO de los dos sentados junto al bulto abierto, mirándolo sin tocarlo, con las cantimploras de fibra vacías al lado.",
    },
    ini: "la panela abierta dentro del envoltorio, oscura y brillante de dulce, en la arena.",
    fin: "los dos están sentados junto al bulto abierto, mirándolo sin tocarlo, con las cantimploras de fibra vacías al lado.",
  }, "agonia, desesperacion, gritos, caricatura, avaricia, dinero"),

  // b5 — Les cogió la sed de verdad. Adelante la misma llanura, sin una nube.
  escp("b5a", [ref("alijuna")], {
    comun: `Mediodía, CIELO BLANCO. LES COGIÓ LA SED DE VERDAD, LA QUE APRIETA LA GARGANTA: se cuenta con la mano en el cuello, nunca con la boca ni con la lengua. Objeto ancla: la mano en la garganta.`,
    camara: {
      a: "PLANO MACRO de una mano abierta apretándose el cuello por fuera, con los dedos hundidos en la piel.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO de los dos parados, cada uno con la mano en su cuello, sin mirarse.",
    },
    ini: "una mano abierta se aprieta el cuello por fuera, con los dedos hundidos en la piel.",
    fin: "los dos están parados, cada uno con la mano en su cuello, sin mirarse.",
  }, "lengua fuera, boca abierta, agonia, ojos vidriosos, ampollas, sangre"),
  esc("b5b", [ref("llanura_cardonal"), ref("cardon"), ref("utta")], {
    comun: `Mediodía, CIELO COMPLETAMENTE BLANCO: al mediodía el azul se lava, y es instrucción literal del canon. ADELANTE ESTABA LA MISMA LLANURA, SIN UNA NUBE. Sin figuras. Objeto ancla: el cielo sin color.`,
    camara: {
      a: "PLANO MEDIO de la línea del horizonte con los cardones recortados contra un cielo sin una sola nube.",
      b: "la cámara ha BASCULADO hacia arriba y ha retrocedido: PLANO ENTERAMENTE DE CIELO, blanco de punta a punta, sin azul y sin nada.",
    },
    ini: "la línea del horizonte con los cardones recortados contra un cielo sin una sola nube.",
    fin: "el cuadro es sólo cielo, blanco de punta a punta, sin azul y sin nada.",
  }, "sol dibujado con rayos, espejismo, buitres, nubes de tormenta, resplandor"),

  // b6 — Se acostaron en Utta con la carga al lado. Iban a seguir y no pudieron.
  escp("b6a", [ref("alijuna"), ref("del_camino"), ref("utta")], {
    comun: `Tarde. SE ACOSTARON EN UTTA, LA CARGA AL LADO, LA ESPALDA CONTRA LA ARENA: es un descanso, no una agonía. Objeto ancla: la espalda contra la arena.`,
    camara: {
      a: "PLANO MACRO de una espalda con la camisa de tela cruda apoyándose contra la arena caliente.",
      b: "la cámara se ha ELEVADO en vertical: PLANO CENITAL de los dos tendidos en paralelo con el bulto de panela entre ellos, vistos desde arriba.",
    },
    ini: "una espalda con la camisa de tela cruda se apoya contra la arena caliente.",
    fin: "desde arriba, los dos están tendidos en paralelo con el bulto de panela entre ellos.",
  }, "cadaver, agonia, convulsiones, ojos vidriosos, buitres, sangre"),
  esc("b6b", [ref("utta"), ref("del_camino"), ref("llanura_cardonal")], {
    comun: `Última luz. IBAN A SEGUIR Y NO PUDIERON: el cuadro es la carga y las cosas del camino quietas donde quedaron. Sin figuras. Objeto ancla: el bulto abandonado al sol.`,
    camara: {
      a: "PLANO MACRO del envoltorio de hoja seca ya reventado por el calor, con la panela ablandándose.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL en picado de Utta al atardecer con el bulto pequeño abajo y la llanura entera alrededor.",
    },
    ini: "el envoltorio de hoja seca ya está reventado por el calor y la panela se ablanda.",
    fin: "desde muy arriba, el bulto es pequeño en Utta y la llanura entera se abre alrededor.",
  }, "cadaveres, huesos, buitres, moscas, carrona, gore"),

  // b7 — Se les secó la lengua. Ninguno volvió a levantarse.
  esc("b7a", [ref("llanura_cardonal"), ref("utta")], {
    comun: `Última luz. SE LES SECÓ LA LENGUA Y LOS OJOS SE QUEDARON FIJOS EN EL CIELO: NADA DE ESO SE MUESTRA. El plano es lo que ellos verían —el cielo— y nada más. Sin figuras. Objeto ancla: el cielo visto desde el suelo.`,
    camara: {
      a: "PLANO CENITAL desde el suelo: cielo blanco y, entrando por un borde, la punta de un cardón.",
      b: "la cámara se ha ELEVADO despacio dejando el suelo atrás: PLANO ENTERAMENTE DE CIELO, sin nada más en cuadro, perdiendo el último resto de color.",
    },
    ini: "desde el suelo, cielo blanco y la punta de un cardón entrando por un borde.",
    fin: "la cámara sube y queda sólo cielo, sin nada más, perdiendo el último resto de color.",
  }, "cara, ojos, lengua, agonia, cadaver, alma subiendo, resplandor, angeles"),
  esc("b7b", [ref("utta"), ref("llanura_cardonal"), ref("constelaciones")], {
    comun: `Noche. NINGUNO VOLVIÓ A LEVANTARSE: la noche pasa sobre el sitio y no ocurre nada. Sin figuras. Objeto ancla: Utta de noche, quieto.`,
    camara: {
      a: "PLANO MEDIO del suelo de Utta de noche, con el bulto de la carga apenas insinuado en la oscuridad.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL nocturno del paraje bajo las estrellas, con el sitio abajo y ni una luz en toda la llanura.",
    },
    ini: "el suelo de Utta de noche, con el bulto de la carga apenas insinuado en la oscuridad.",
    fin: "desde muy arriba, el paraje está bajo las estrellas y no hay una sola luz en toda la llanura.",
  }, "fantasmas, almas, espectros, resplandor, luna dramatica, buitres"),

  // b8 — Allí mismo se volvieron piedra. Todavía están.
  esc("b8a", [ref("piedras_tendidas"), ref("utta")], {
    comun: `Amanecer siguiente. EL PLANO CORTA AL RESULTADO: ALLÍ MISMO SE VOLVIERON PIEDRA. Son DOS PIEDRAS TENDIDAS, largas y erosionadas, con la forma apenas sugerida. NUNCA esculturas. Objeto ancla: las dos piedras en el suelo.`,
    camara: {
      a: "PLANO MACRO de la superficie de una piedra alargada tendida en la arena, con el desgaste y el liquen.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de Utta al amanecer con las dos piedras tendidas en paralelo y la carga ya no en cuadro.",
    },
    ini: "la superficie de una piedra alargada tendida en la arena, con el desgaste y el liquen.",
    fin: "desde arriba, las dos piedras están tendidas en paralelo en Utta y la carga ya no está en cuadro.",
  }, "estatuas, esculturas, caras talladas, momias, cuerpos petrificados, pompeya"),
  esc("b8b", [ref("piedras_tendidas"), ref("llanura_cardonal")], {
    comun: `Luz de mañana. TODAVÍA ESTÁN: DOS PIEDRAS TENDIDAS EN EL SUELO CON LA FIGURA DE UN ARIJUNA. La figura se SUGIERE con el contorno visto de lejos, nunca con detalle. Objeto ancla: el perfil de las dos piedras.`,
    camara: {
      a: "PLANO MEDIO de las dos piedras vistas a ras de suelo, con el contorno recortado contra la arena.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado con las dos formas alargadas pequeñas en mitad de la llanura, reconocibles sólo por la silueta.",
    },
    ini: "las dos piedras vistas a ras de suelo, con el contorno recortado contra la arena.",
    fin: "desde muy arriba, las dos formas alargadas son pequeñas en mitad de la llanura y sólo se reconocen por la silueta.",
  }, "estatuas, esculturas, rostros, manos talladas, monumento, placa, flores"),

  // b9 — Quien pasa las reconoce. El wayuu aguanta tres días; el arijuna, uno.
  escp("b9a", [ref("primeros_wayuu"), ref("piedras_tendidas"), ref("del_camino")], {
    comun: `Luz plana. QUIEN PASA LAS RECONOCE: LA CABEZA, LOS HOMBROS, LAS PIERNAS ESTIRADAS. Se cuenta con el dedo de quien señala, no con el detalle de la piedra. Objeto ancla: la mano que señala las tres partes.`,
    camara: {
      a: "PLANO MEDIO CORTO de una persona wayúu parada en el camino, señalando hacia abajo con la mano, explicando.",
      b: "la cámara ha GIRADO siguiendo el brazo y ha bajado: PLANO GENERAL a ras de suelo de las dos piedras enteras, largas, con la silueta legible por primera vez.",
    },
    ini: "una persona wayúu parada en el camino señala hacia abajo con la mano, explicando.",
    fin: "siguiendo el brazo, a ras de suelo, las dos piedras enteras se ven largas y la silueta se lee por primera vez.",
  }, "burla, regodeo, turistas, fotos, placas, monumento, caricatura"),
  escp("b9b", [ref("primeros_wayuu"), ref("llanura_cardonal"), ref("del_camino")], {
    comun: `Luz plana. EL WAYUU AGUANTA TRES DÍAS; EL ARIJUNA, UNO: es UNA DIFERENCIA DE CUERPOS, no una superioridad. Se cuenta con alguien wayúu cruzando ese mismo trecho sin dificultad. Objeto ancla: el paso tranquilo por el mismo sitio.`,
    camara: {
      a: "PLANO DETALLE de unos pies descalzos wayúu pasando junto a una de las piedras, sin detenerse.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado con esa persona cruzando Utta a paso largo y las dos piedras quedando atrás, pequeñas.",
    },
    ini: "unos pies descalzos pasan junto a una de las piedras sin detenerse.",
    fin: "desde muy arriba, esa persona cruza Utta a paso largo y las dos piedras quedan atrás, pequeñas.",
  }, "superioridad dibujada, burla, comparacion caricaturesca, texto, cartel"),

  // b10 — «Ustedes siempre vivirán muertos de sed». (CITA)
  escp("b10a", [ref("mareiwa"), ref("utta"), ref("piedras_tendidas")], {
    comun: `Sol alto. MAREIWA LES HABLÓ, Y SU PALABRA QUEDÓ SOBRE ELLOS COMO EL SOL. ${AR} ya no está: sólo las piedras. La sentencia EXPLICA, no castiga. Objeto ancla: su figura de pie junto a las piedras.`,
    camara: {
      a: "PLANO DETALLE del borde de su manto quieto contra la piedra tendida, sin viento.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de Utta con él de pie junto a las dos piedras, pequeño, y el cielo blanco ocupando media altura del cuadro.",
    },
    ini: "el borde de su manto, quieto contra la piedra tendida, sin viento.",
    fin: "desde arriba está de pie junto a las dos piedras, pequeño, y el cielo blanco ocupa media altura del cuadro.",
  }, "aureola, rayos, dedo acusador, juicio, trono, fuego divino, resplandor"),
  esc("b10b", [ref("piedras_tendidas"), ref("utta"), ref("llanura_cardonal")], {
    comun: `Sol alto. LA CITA: ustedes siempre vivirán muertos de sed. La palabra queda SOBRE ELLOS COMO EL SOL, así que el último plano es el sol sobre las piedras y nada más. Objeto ancla: la luz cayendo a plomo.`,
    camara: {
      a: "PLANO MACRO de la piedra al sol de mediodía, con el calor temblando justo encima de ella.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL final en picado de Utta con las dos piedras diminutas, el cielo blanco y la llanura entera sin una sombra.",
    },
    ini: "la piedra al sol de mediodía, con el calor temblando justo encima de ella.",
    fin: "desde muy arriba, las dos piedras son diminutas en Utta, el cielo está blanco y la llanura entera no tiene una sombra.",
  }, "texto en pantalla, placa, inscripcion, monumento, flores, ofrendas, angeles"),
]);
