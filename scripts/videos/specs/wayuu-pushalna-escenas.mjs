// Keyframes de Pushaina, el muerto que hablaba — 14 bloques × 2 escenas × 2
// cuadros = 56 imágenes ≈ 140 s.
// Guion: guion-el-indio-pushalna-v2.json (N=14) · Acta: acta-el-indio-pushalna.json (28 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _wayuu-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · PUSHAINA NO SE VE NUNCA después de morir. Se oye, come y contesta, pero el
//   canon insiste: quien le llevaba los alimentos LO OÍA Y NUNCA LO VIO. LA
//   DIRECCIÓN DE ARTE NO PUEDE DARLE CUERPO. Es la regla más dura del spec: del
//   bloque 2 al 13 no hay figura, ni silueta, ni sombra con forma de persona.
// · LO QUE SE MUESTRA ES EL RASTRO: los platos vacíos, los huesos pelados, la
//   sala donde se dejó la comida. Ésa es toda su presencia visible.
// · LA OBEDIENCIA DE LA GENTE ES POR MIEDO, NO POR DEVOCIÓN. El canon lo dice
//   con todas sus letras y no se suaviza a culto: nada de altares ni ofrendas
//   rituales, sólo gente que deja lo pedido y se retira deprisa.
// · LA HIJA ES QUIEN LO MANTIENE y quien lo echa de menos tres días. Es la
//   relación que sostiene la ficha, no un detalle.
// · EL ANILLO EMPEÑADO POR EL VALOR DE UNA OVEJA NEGRA es lo que lo convierte
//   en adivino a ojos de todos: UNA PRUEBA VERIFICABLE, no un prodigio.
// · EL FINAL ES UNA PÉRDIDA, NO UN ASCENSO: un niño entra sin saber y Pushaina
//   se vuelve gallinazo y sale. Lo que tenía se le acaba por un descuido ajeno.
// · ÉL MISMO ANUNCIÓ QUE SERÍA CULEBRA, ZORRO O MAPURITO. Que termine en
//   GALLINAZO, y por culpa de otro, es lo que el relato quiere que pese: el
//   cierre tiene que dejar ver esa diferencia entre lo pedido y lo que le tocó.
// · NO SE CRUZA con «guanuru» ni con «jirairay»: aquí el muerto no enferma a
//   nadie y no hay piache. Es un muerto que se queda y come.
//
// GUION DE LUZ: mañana del caballo → mediodía quieto del golpe → penumbra de la
// voz sin cuerpo → luz de la casa grande cerrada → tardes de la comida servida
// → sala vacía y platos limpios → corral del chivo pedido → tres días de
// silencio → noche del cementerio → mañana del anillo → tarde de la comprobación
// → luz plana de la fama → penumbra del cuarto donde entra el niño → cielo
// abierto del gallinazo.

import { CONTEXTO, DIRECCION, AVOID_BASE, PALETTE_BASE, ref, esc, escp, armar } from "./_wayuu-comun.mjs";

export const SPEC_NAME = "wayuu-pushalna-escenas";
export const OUT_DIR = "wayuu/videos/el-indio-pushalna/keyframes";
export { CONTEXTO, DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; fantasma, espectro, silueta translucida, figura encapuchada, sombra con forma humana, esqueleto, calavera; aparicion, resplandor, humo, niebla siniestra, particulas flotando; altar, ofrendas rituales, velas, incienso, culto, arrodillarse, procesion; cuerpo, cadaver, ataud, mortaja, tumba con lapida, cruces; sangre, visceras, carrona a la vista, animal despedazado; caricatura de terror, ojos brillantes en la oscuridad, manos saliendo de la tierra; medium, sesion de espiritismo, tablero, velas en circulo";
export const PALETTE =
  PALETTE_BASE + "; la casa del muerto va en penumbra caliente de tierra, nunca en frio ni en verde de ultratumba; el negro del gallinazo es el unico negro pleno del mito";

const HP =
  "LA MISMA hija de Pushaina de la referencia (mujer wayúu adulta, manta larga hasta el tobillo con cenefa tejida en el ruedo, pelo negro recogido, cara serena y firme, descalza)";

export const ITEMS = armar([
  // b1 — Andaba en un caballo capón llamado Kasap. El animal lo botó.
  escp("b1a", [ref("pushaina"), ref("caballo"), ref("llanura_cardonal")], {
    comun: `Mañana. EL ÚNICO TRAMO EN QUE PUSHAINA TIENE CUERPO: EL MISMO Pushaina de la referencia, hombre wayúu adulto, montado en su caballo capón. A partir del bloque 2 no vuelve a vérsele. Objeto ancla: el jinete sobre el caballo.`,
    camara: {
      a: "PLANO DETALLE de una mano en la crin y la rodilla contra el costado del animal.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la llanura con el jinete al trote, entero y pequeño, entre los cardones.",
    },
    ini: "una mano en la crin y la rodilla apretada contra el costado del animal.",
    fin: "desde arriba se le ve entero y pequeño, al trote entre los cardones.",
  }, "fantasma, resplandor, presagio, sombras amenazantes"),
  esc("b1b", [ref("caballo"), ref("llanura_cardonal")], {
    comun: `Mañana. CAYÓ SOBRE EL ANCA, EL ANIMAL BRINCÓ Y LO BOTÓ. La caída NO se muestra: el cuadro es el caballo brincando y, después, el caballo solo. Objeto ancla: el caballo con la silla vacía.`,
    camara: {
      a: "PLANO MEDIO del caballo encabritado de perfil, con las patas delanteras en el aire.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL con el caballo ya quieto y solo, las riendas colgando, y la arena removida delante de él.",
    },
    ini: "el caballo se encabrita de perfil con las patas delanteras en el aire.",
    fin: "desde arriba el caballo está ya quieto y solo, con las riendas colgando y la arena removida delante.",
  }, "cuerpo, cadaver, sangre, caida dibujada, dramatismo"),

  // b2 — Murió del golpe. Muerto ya, volvió a hablar desde donde no se veía.
  esc("b2a", [ref("llanura_cardonal"), ref("cardon")], {
    comun: `Mediodía quieto. PUSHAINA MURIÓ DEL GOLPE, y esto es lo último que se cuenta de su cuerpo: el sitio donde cayó, sin nadie en cuadro. Objeto ancla: la arena removida y quieta.`,
    camara: {
      a: "PLANO CENITAL MACRO de la arena removida con el polvo ya asentado encima.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado de la llanura a mediodía con el sitio marcado abajo, pequeño, y nadie alrededor.",
    },
    ini: "la arena removida tiene el polvo ya asentado encima.",
    fin: "desde muy arriba, el sitio es una marca pequeña en la llanura y no hay nadie alrededor.",
  }, "cuerpo, cadaver, sangre, fantasma saliendo, resplandor, alma"),
  escp("b2b", [ref("primeros_wayuu"), ref("enramada"), ref("rancheria")], {
    comun: `Penumbra bajo la enramada. MUERTO YA, VOLVIÓ A HABLAR: la voz llega y LA GENTE MIRA HACIA DONDE NO HAY NADIE. Toda su presencia son las caras que se vuelven. Objeto ancla: el rincón vacío que todos miran.`,
    camara: {
      a: "PLANO MEDIO CORTO de tres caras volviéndose de golpe hacia el mismo punto, con los ojos muy abiertos.",
      b: "la cámara ha GIRADO siguiendo esas miradas y ha avanzado: PLANO MEDIO del rincón de la enramada al que miran, completamente vacío, con una estera y nada más.",
    },
    ini: "tres caras se vuelven de golpe hacia el mismo punto, con los ojos muy abiertos.",
    fin: "la cámara va adonde miran y ahí no hay nada: un rincón vacío con una estera en el suelo.",
  }, "fantasma, silueta, sombra humana, resplandor, humo, figura translucida"),

  // b3 — Pidió que no lo mataran: sería culebra, zorro, mapurito.
  esc("b3a", [ref("animales_de_pushaina"), ref("llanura_cardonal")], {
    comun: `Penumbra. PIDIÓ QUE NO LO MATARAN: iba a andar por ahí como CULEBRA, ZORRO O MAPURITO, y por eso pide que respeten a esos tres. Los tres animales, vivos y corrientes. Objeto ancla: los tres animales.`,
    camara: {
      a: "PLANO MACRO de una culebra pasando entre la hojarasca, sólo el cuerpo y las escamas.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del matorral con el zorro parado a un lado y el mapurito cruzando por el otro, los tres en cuadro.",
    },
    ini: "una culebra pasa entre la hojarasca y se le ven las escamas.",
    fin: "desde arriba están los tres a la vez: la culebra abajo, el zorro parado a un lado y el mapurito cruzando por el otro.",
  }, "animales monstruosos, ojos brillantes, resplandor, rostro humano en el animal"),
  esc("b3b", [ref("recipientes"), ref("fuego_y_cocina"), ref("piichi")], {
    comun: `Penumbra de la casa. QUE LE DEJARAN COMIDA Y BOTELLAS DE RON: las peticiones son concretas y domésticas, no ofrendas de culto. Sin figuras. Objeto ancla: las botellas puestas en el suelo.`,
    camara: {
      a: "PLANO MACRO del cuello de dos botellas de vidrio oscuro puestas de pie en el suelo de arena.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del cuarto en penumbra con un plato, una totuma y las botellas alineados en el suelo, y nadie dentro.",
    },
    ini: "dos botellas de vidrio oscuro están de pie en el suelo de arena, vistas muy de cerca.",
    fin: "desde arriba, el cuarto en penumbra tiene un plato, una totuma y las botellas alineadas en el suelo, y no hay nadie.",
  }, "altar, velas, incienso, ofrendas rituales, calaveras, simbolos"),

  // b4 — Su hija lo mantuvo. Lo tenía encerrado en una casa grande.
  escp("b4a", [ref("hija_de_pushaina"), ref("piichi"), ref("rancheria")], {
    comun: `Luz de la mañana. SU HIJA LO MANTUVO: ${HP}, llevando la comida a la casa grande. Es la relación que sostiene todo el mito. Objeto ancla: sus manos con el plato.`,
    camara: {
      a: "PLANO MACRO de sus dos manos sosteniendo un plato de barro lleno, firmes.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la ranchería con ella cruzando el patio hacia una casa más grande que las demás.",
    },
    ini: "sus dos manos sostienen un plato de barro lleno, firmes.",
    fin: "desde arriba se la ve cruzar el patio hacia una casa más grande que todas las otras.",
  }, "llanto teatral, luto europeo, velos, procesion, cruces"),
  esc("b4b", [ref("piichi"), ref("chinchorro")], {
    comun: `Luz de la mañana. LO TENÍA ENCERRADO EN UNA CASA GRANDE, COMO SI DE VERDAD ESTUVIERA VIVO: el cuarto está puesto para alguien —chinchorro colgado, estera, cosas en su sitio— y está vacío. Objeto ancla: el chinchorro colgado y sin nadie.`,
    camara: {
      a: "PLANO MACRO del chinchorro colgado, con la tela hundida por el medio como si alguien lo usara.",
      b: "la cámara ha RETROCEDIDO hasta la puerta: PLANO GENERAL del cuarto entero, ordenado y habitado, completamente vacío de gente.",
    },
    ini: "el chinchorro cuelga con la tela hundida por el medio, como si alguien lo usara.",
    fin: "desde la puerta se ve el cuarto entero, ordenado y habitado, y no hay nadie dentro.",
  }, "figura en el chinchorro, silueta, fantasma, sombra, cuerpo, resplandor"),

  // b5 — Se aparecía a todos, pero nadie lo veía: solo oían su voz.
  escp("b5a", [ref("primeros_wayuu"), ref("piichi"), ref("enramada")], {
    comun: `Tarde. SE APARECÍA A TODOS, PERO NADIE LO VEÍA: SOLO OÍAN SU VOZ. El cuadro lo cuenta con la gente escuchando y el espacio vacío. Objeto ancla: las orejas y las caras vueltas.`,
    camara: {
      a: "PLANO MACRO de una oreja y el lado de una cara, muy quietos, escuchando.",
      b: "la cámara ha RETROCEDIDO y ha girado: PLANO GENERAL del patio con seis personas paradas en distintos sitios, todas con la cabeza vuelta hacia el mismo vano vacío.",
    },
    ini: "una oreja y el lado de una cara, muy quietos, escuchando.",
    fin: "desde arriba, seis personas paradas por el patio tienen la cabeza vuelta hacia el mismo vano vacío.",
  }, "fantasma, silueta, sombra humana, resplandor, humo, figura translucida"),
  esc("b5b", [ref("chivos"), ref("corral")], {
    comun: `Tarde. PEDÍA QUE MATARAN UN CHIVO: la petición se cuenta con el animal apartado del rebaño, no con el sacrificio. Sin figuras. Objeto ancla: el chivo apartado.`,
    camara: {
      a: "PLANO MEDIO CORTO de un chivo solo contra la cerca, con la cuerda al cuello.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del corral con el rebaño entero a un lado y ese único animal apartado en la esquina.",
    },
    ini: "un chivo solo contra la cerca, con la cuerda al cuello.",
    fin: "desde arriba, el rebaño está a un lado del corral y ese único animal queda apartado en la esquina.",
  }, "sacrificio, sangre, cuchillo, altar, crueldad animal, visceras"),

  // b6 — Todo el mundo le servía. Ponían lo pedido y se retiraban.
  escp("b6a", [ref("primeros_wayuu"), ref("piichi"), ref("fuego_y_cocina")], {
    comun: `Tarde. Y TODO EL MUNDO LE SERVÍA, POR MIEDO Y NO POR DEVOCIÓN: entran deprisa, dejan y salen sin mirar atrás. Nada de reverencia ni de ceremonia. Objeto ancla: el plato dejado en el suelo.`,
    camara: {
      a: "PLANO MACRO de un plato lleno posándose en el suelo de arena y una mano retirándose deprisa.",
      b: "la cámara ha RETROCEDIDO fuera de la casa: PLANO GENERAL del vano con dos personas saliendo de espaldas y apretando el paso.",
    },
    ini: "un plato lleno se posa en el suelo de arena y una mano se retira deprisa.",
    fin: "desde fuera, dos personas salen de espaldas por el vano y aprietan el paso.",
  }, "arrodillarse, adoracion, ofrendas rituales, velas, incienso, procesion"),
  esc("b6b", [ref("piichi"), ref("recipientes")], {
    comun: `Tarde. PONÍAN LO QUE PEDÍA EN UNA SALA Y DESPUÉS SE RETIRABAN: la sala servida y sola es la imagen central del mito. Objeto ancla: la comida servida sin nadie.`,
    camara: {
      a: "PLANO GENERAL del cuarto con la comida puesta en el suelo y la puerta cerrándose al fondo.",
      b: "la cámara ha AVANZADO hasta la comida y ha bajado a cenital: PLANO EN PICADO de los platos llenos, las botellas y la totuma, con el cuarto vacío alrededor.",
    },
    ini: "el cuarto tiene la comida puesta en el suelo y la puerta se cierra al fondo.",
    fin: "desde arriba y muy cerca, los platos llenos, las botellas y la totuma están servidos y alrededor no hay nadie.",
  }, "figura comiendo, manos flotando, cubiertos moviendose solos, fantasma, resplandor"),

  // b7 — Al rato solo quedaban los huesos pelados y los platos vacíos.
  esc("b7a", [ref("piichi"), ref("recipientes"), ref("piedras_y_huesos")], {
    comun: `Tarde. AL RATO SÓLO QUEDABAN LOS HUESOS PELADOS Y LOS PLATOS VACÍOS: es el MISMO encuadre de b6b y lo único que ha cambiado es el contenido. Ni sangre ni restos: huesos limpios. Objeto ancla: los platos vacíos.`,
    camara: {
      a: "PLANO CENITAL MACRO de un plato de barro raspado y limpio, con dos huesos pelados al lado.",
      b: "la cámara ha SUBIDO y ha retrocedido: PLANO GENERAL del cuarto con todo recogido en el mismo sitio, los platos vacíos y las botellas caídas, y nadie.",
    },
    ini: "un plato de barro raspado y limpio, con dos huesos pelados al lado.",
    fin: "desde arriba, todo está en el mismo sitio de antes pero vacío: platos limpios, botellas caídas y nadie.",
  }, "sangre, visceras, carrona, restos crudos, gore, fantasma"),
  escp("b7b", [ref("primeros_wayuu"), ref("piichi")], {
    comun: `Tarde. QUIEN LE LLEVABA COMIDA LO OÍA SIN VERLO: alguien parado en el vano, escuchando hacia dentro, y dentro no hay nadie. Objeto ancla: la cara escuchando en el umbral.`,
    camara: {
      a: "PLANO MEDIO CORTO de una cara en el umbral, de perfil, con la cabeza ladeada hacia dentro.",
      b: "la cámara ha ATRAVESADO el vano y ha girado: PLANO GENERAL del interior desde el fondo, con esa persona pequeña recortada en la puerta y todo el cuarto vacío entre las dos.",
    },
    ini: "una cara en el umbral, de perfil, con la cabeza ladeada hacia dentro.",
    fin: "desde el fondo del cuarto se ve a esa persona pequeña recortada en la puerta y todo el espacio vacío entre medias.",
  }, "fantasma, silueta, sombra, resplandor, ojos en la oscuridad"),

  // b8 — Si quería una res, bastaba anunciarlo. Le tenían miedo.
  escp("b8a", [ref("ganado_vacuno"), ref("primeros_wayuu"), ref("corral")], {
    comun: `Mañana. SI QUERÍA UNA RES, BASTABA ANUNCIARLO A QUIEN TUVIERA ANIMALES: el dueño obedece sin discutir. Objeto ancla: la mano que abre el portillo.`,
    camara: {
      a: "PLANO MACRO de una mano levantando la tranca del corral, dudando un momento antes.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL con el portillo abierto, una res saliendo sola y el dueño parado a un lado sin moverse.",
    },
    ini: "una mano levanta la tranca del corral y duda un momento antes de hacerlo.",
    fin: "desde arriba, el portillo está abierto, una res sale sola y el dueño está parado a un lado sin moverse.",
  }, "robo violento, armas, pelea, altar, ofrenda ritual"),
  escp("b8b", [ref("primeros_wayuu"), ref("rancheria"), ref("enramada")], {
    comun: `Mañana. LE TENÍAN MIEDO Y NO QUERÍAN DISGUSTARLO: el miedo se ve en que nadie pasa cerca de esa casa. Objeto ancla: el trecho vacío alrededor de la casa.`,
    camara: {
      a: "PLANO MEDIO de dos personas caminando y desviándose de golpe para dar un rodeo.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado de la ranchería con todos los caminos de huellas rodeando una misma casa y un círculo de arena limpia alrededor de ella.",
    },
    ini: "dos personas caminan y se desvían de golpe para dar un rodeo.",
    fin: "desde muy arriba se ve que todos los caminos de huellas rodean la misma casa y que alrededor de ella hay un círculo de arena que nadie pisa.",
  }, "panico, gritos, huida, monstruo, sombra amenazante, fantasma"),

  // b9 — Después aparecían los huesos. La hija pasó tres días sin oírlo.
  esc("b9a", [ref("piichi"), ref("piedras_y_huesos"), ref("recipientes")], {
    comun: `Tarde. DESPUÉS APARECÍAN LOS HUESOS: la rutina se repite y se cuenta como rutina, con los restos apilándose de un día para otro. Objeto ancla: el montón de huesos limpios.`,
    camara: {
      a: "PLANO MACRO de huesos limpios y secos apilados en un rincón de la arena.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del cuarto con tres montoncitos de huesos en tres sitios distintos, de tres días distintos.",
    },
    ini: "huesos limpios y secos apilados en un rincón de la arena.",
    fin: "desde arriba hay tres montoncitos de huesos en tres sitios distintos, uno por cada día.",
  }, "carne, sangre, visceras, carrona, moscas, gore"),
  escp("b9b", [ref("hija_de_pushaina"), ref("piichi")], {
    comun: `Tarde. UNA VEZ LA HIJA PASÓ TRES DÍAS ENTEROS SIN OÍRLO POR NINGUNA PARTE: es una ausencia, y a ella le pesa. ${HP}, esperando en el umbral. Objeto ancla: la comida intacta.`,
    camara: {
      a: "PLANO CENITAL MACRO de un plato lleno y sin tocar, con la comida ya reseca por encima.",
      b: "la cámara ha SUBIDO y ha retrocedido: PLANO MEDIO de ella sentada en el umbral, de perfil, mirando hacia dentro del cuarto vacío.",
    },
    ini: "un plato lleno y sin tocar, con la comida ya reseca por encima.",
    fin: "al subir, ella está sentada en el umbral, de perfil, mirando hacia dentro del cuarto vacío.",
  }, "llanto teatral, desesperacion, fantasma, resplandor, velas"),

  // b10 — «Bebiendo chicha con unos indios, en los cementerios». (CITA)
  escp("b10a", [ref("hija_de_pushaina"), ref("piichi")], {
    comun: `Noche. AL TERCER DÍA SINTIÓ QUE LLEGABA Y LE PREGUNTÓ DÓNDE ANDABA: ella habla hacia el cuarto vacío, con naturalidad, como quien riñe a un padre. Objeto ancla: su cara hablando al vacío.`,
    camara: {
      a: "PLANO GENERAL del cuarto de noche con ella pequeña en el umbral y la penumbra delante.",
      b: "la cámara ha AVANZADO hasta ella y ha girado al frente: PLANO MEDIO CORTO de su cara preguntando, tranquila, sin miedo.",
    },
    ini: "de noche, ella es una figura pequeña en el umbral con la penumbra delante.",
    fin: "de cerca se le ve la cara preguntando, tranquila y sin miedo.",
  }, "fantasma, silueta, resplandor, humo, velas, sesion de espiritismo"),
  esc("b10b", [ref("cementerio"), ref("constelaciones"), ref("llanura_cardonal")], {
    comun: `Noche con estrellas. LA CITA: andaba bebiendo chicha con unos indios, EN LOS CEMENTERIOS. Ahí es donde pasa sus días un muerto que sigue aquí. Sin figuras: el cementerio de noche y las señales de que alguien estuvo. Objeto ancla: las totumas dejadas entre las sepulturas.`,
    camara: {
      a: "PLANO MACRO de dos totumas volteadas en la arena, entre piedras, con el poso todavía dentro.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL nocturno en picado del cementerio wayúu con las sepulturas repartidas y ni una sola persona.",
    },
    ini: "dos totumas volteadas en la arena entre las piedras, con el poso todavía dentro.",
    fin: "desde muy arriba, el cementerio de noche tiene las sepulturas repartidas y no hay una sola persona.",
  }, "fantasmas, esqueletos, calaveras, lapidas cristianas, cruces, niebla siniestra, zombis"),

  // b11 — Murió un hombre y nadie hallaba un anillo. Fueron a preguntarle.
  escp("b11a", [ref("primeros_wayuu"), ref("piichi"), ref("ajuar_funerario")], {
    comun: `Mañana. MURIÓ UN HOMBRE Y NADIE HALLABA UN ANILLO DE GRAN VALOR: la búsqueda es doméstica, gente revolviendo cosas. Objeto ancla: las manos que buscan.`,
    camara: {
      a: "PLANO MACRO de unas manos revolviendo tela doblada y un cesto, buscando algo pequeño.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del cuarto con cuatro personas buscando cada una en un rincón distinto.",
    },
    ini: "unas manos revuelven tela doblada y un cesto, buscando algo pequeño.",
    fin: "desde arriba, cuatro personas buscan cada una en un rincón distinto del cuarto.",
  }, "cuerpo, cadaver, ataud, mortaja abierta, robo violento, pelea"),
  escp("b11b", [ref("primeros_wayuu"), ref("piichi")], {
    comun: `Mañana. FUERON A PREGUNTARLE A PUSHAINA: llegan a la casa grande y hablan hacia dentro. Objeto ancla: el grupo delante del vano.`,
    camara: {
      a: "PLANO MEDIO de tres personas paradas delante del vano, una de ellas hablando hacia la penumbra.",
      b: "la cámara ha ATRAVESADO el vano y se ha vuelto: PLANO GENERAL desde dentro con las tres recortadas contra la luz de fuera y el cuarto vacío en primer término.",
    },
    ini: "tres personas paradas delante del vano y una habla hacia la penumbra.",
    fin: "desde dentro, las tres se recortan contra la luz de fuera y el cuarto vacío ocupa todo el primer término.",
  }, "fantasma, silueta, medium, velas, sesion de espiritismo, resplandor"),

  // b12 — Dijo que estaba empeñado por una oveja negra. Ella lo confirmó.
  esc("b12a", [ref("adorno_y_valor"), ref("chivos")], {
    comun: `Tarde. DIJO QUE ESTABA EMPEÑADO CON FULANA, POR EL VALOR DE UNA OVEJA NEGRA: el dato es exacto y verificable, y ahí está la gracia. Objeto ancla: el anillo y el animal negro.`,
    camara: {
      a: "PLANO MACRO de un anillo de metal guardado dentro de un trapo doblado.",
      b: "la cámara ha RETROCEDIDO y ha girado: PLANO MEDIO del corral con una sola oveja negra entre las demás, claramente distinta.",
    },
    ini: "un anillo de metal guardado dentro de un trapo doblado.",
    fin: "al girar la cámara aparece el corral con una sola oveja negra entre las demás, claramente distinta.",
  }, "tesoro, oro brillante, joyas europeas, magia, resplandor"),
  escp("b12b", [ref("primeros_wayuu"), ref("mujer_mayor"), ref("enramada")], {
    comun: `Tarde. FUERON, Y ELLA LO CONFIRMÓ: la mujer saca el anillo y lo enseña. La prueba es que se puede comprobar. Objeto ancla: el anillo en la palma abierta.`,
    camara: {
      a: "PLANO MEDIO CORTO de una mujer mayor asintiendo, de perfil, sin sorpresa.",
      b: "la cámara ha BAJADO a sus manos y ha cerrado: PLANO MACRO del anillo en la palma abierta, delante de los que vinieron a preguntar.",
    },
    ini: "una mujer mayor asiente de perfil, sin sorpresa.",
    fin: "en su palma abierta está el anillo, delante de los que vinieron a preguntar.",
  }, "acusacion, pelea, robo, violencia, magia, resplandor"),

  // b13 — Lo tuvieron por gran adivino. Un niño se metió a su cuarto.
  escp("b13a", [ref("primeros_wayuu"), ref("rancheria"), ref("enramada")], {
    comun: `Luz plana. DE AHÍ EN ADELANTE LO TUVIERON POR GRAN ADIVINO: viene gente de otras rancherías a preguntarle, y la fila no es de devotos sino de gente con problemas concretos. Objeto ancla: la fila esperando fuera.`,
    camara: {
      a: "PLANO MEDIO CORTO de dos personas esperando de pie, con cara de trámite, hablando entre ellas.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL con ocho personas esperando en fila fuera de la casa grande, todas a distancia del vano.",
    },
    ini: "dos personas esperan de pie con cara de trámite, hablando entre ellas.",
    fin: "desde arriba hay ocho personas esperando en fila fuera de la casa grande, todas a distancia del vano.",
  }, "peregrinacion, altar, arrodillarse, ofrendas, incienso, culto"),
  escp("b13b", [ref("nino_que_entra"), ref("piichi")], {
    comun: `Penumbra. CON EL TIEMPO UN NIÑO SE METIÓ A SU CUARTO: entra sin saber, por curiosidad, y eso basta. El niño va a media distancia y de espaldas. Objeto ancla: la puerta abriéndose de golpe.`,
    camara: {
      a: "PLANO MACRO del canto de la puerta empujado por una mano pequeña y la luz entrando en cuña.",
      b: "la cámara ha RETROCEDIDO dentro del cuarto: PLANO GENERAL con el niño de espaldas recortado en el vano, pequeño, y el cuarto en penumbra delante de él.",
    },
    ini: "una mano pequeña empuja el canto de la puerta y la luz entra en cuña.",
    fin: "desde dentro, el niño está de espaldas y recortado en el vano, con el cuarto en penumbra delante.",
  }, "susto, terror, monstruo, fantasma, primer plano del menor, llanto"),

  // b14 — Pushaina voló como gallinazo y salió gritando. La culpa era del otro.
  esc("b14a", [ref("gallinazo"), ref("piichi")], {
    comun: `Penumbra y luz de golpe. APENAS ENTRÓ EL NIÑO, PUSHAINA VOLÓ COMO GALLINAZO Y SALIÓ GRITANDO: lo primero que se ve de él en doce bloques ya no es él, es un ave. Objeto ancla: el gallinazo saliendo por el vano.`,
    camara: {
      a: "PLANO MACRO de unas plumas negras y la piel desnuda de la cabeza de un gallinazo, dentro de la penumbra.",
      b: "la cámara ha SEGUIDO al ave por el vano y se ha elevado fuera: PLANO GENERAL del exterior con el gallinazo ya en el aire, subiendo, y la casa abierta debajo.",
    },
    ini: "plumas negras y la piel desnuda de la cabeza de un gallinazo, dentro de la penumbra.",
    fin: "fuera de la casa, el gallinazo ya está en el aire subiendo y la casa queda abierta debajo.",
  }, "monstruo alado, demonio, espectro, resplandor, transformacion dibujada, sangre"),
  esc("b14b", [ref("gallinazo"), ref("animales_de_pushaina"), ref("llanura_cardonal")], {
    comun: `Cielo abierto. ES UNA PÉRDIDA, NO UN ASCENSO, Y LA CULPA ERA DE QUIEN VINO A VERLO. El cierre deja ver la diferencia entre lo que él pidió —culebra, zorro, mapurito, animales de la tierra— y lo que le tocó: gallinazo. Objeto ancla: el ave alejándose sola.`,
    camara: {
      a: "PLANO MEDIO del zorro y el mapurito quietos en el matorral, mirando hacia arriba.",
      b: "la cámara ha BASCULADO al cielo y ha retrocedido: GRAN PLANO GENERAL final casi todo de cielo, con el gallinazo pequeño girando en alto y la llanura mínima abajo.",
    },
    ini: "el zorro y el mapurito están quietos en el matorral, mirando hacia arriba.",
    fin: "casi todo el cuadro es cielo y el gallinazo gira en alto, pequeño, con la llanura mínima allá abajo.",
  }, "apoteosis, resplandor, aureola, alma subiendo, angeles, texto, monumento"),
]);
