// Keyframes de Los hombres que se volvieron cerros — 14 bloques × 2 escenas × 2
// cuadros = 56 imágenes ≈ 140 s.
// Guion: guion-serranias-de-la-guajira-v2.json (N=14) · Acta: acta-serranias-de-la-guajira.json (28 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _wayuu-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · ES UN MITO TOPONÍMICO: cada hombre que cae DEJA UN MONTE CON SU NOMBRE. LA
//   CÁMARA NO DEBE TRATARLOS COMO PERSONAJES SINO COMO LUGARES EN FORMACIÓN.
//   Por eso cada caída se resuelve con el mismo par: el hombre a media
//   distancia quedándose atrás, y después el perfil del cerro en ese sitio.
// · EL NOMBRE VIENE DEL MODO DE MORIR, y el canon lo dice cada vez: Wososopo
//   por el bofe seco, Juyouirá por el hambre en el estómago, Akuwa por la mata
//   de ita. Ese dato va en cuadro, no en el texto.
// · LOS COMPAÑEROS NO SON CRUELES NI SOLIDARIOS: SIGUEN. El relato no los
//   juzga, y el guion tampoco. Lo único que cambia es quién queda atrás.
// · ITOJORO, EL MÁS FUERTE, es el que más anima Y TAMBIÉN CAE. Que caiga el
//   último y el mejor ES EL SENTIDO DEL RELATO, no una ironía añadida.
// · EL DISPARO DE HONDA DESDE EL TSITSI ES UNA SEGUNDA FUNDACIÓN, distinta de
//   la de los cerros: aparta el mar y deja la tierra. LOS POZOS SALADOS SON SU
//   PRUEBA. Comparte materia con `creacion-wayuu` y no se cruza: allá es el
//   principio del mundo, aquí es el remate de una lista de nombres.
// · SALEN DE LA SIERRA NEVADA DE SANTA MARTA, NO DE LA GUAJIRA. El viaje es DE
//   SUR A NORTE y ese origen se conserva: el primer bloque tiene monte alto y
//   verde, que después no vuelve a aparecer.
// · MAREIWA (no Maleiwa) es como lo nombra este canon.
// · MAICEO aparece también en «umarala» como el bosque del cementerio. Mismo
//   topónimo, dos fichas, NO SE CRUZAN.
//
// EL ACTA DEJA UNA COSA SIN RESOLVER: el canon NO dice cómo se ve la
// transformación en cerro, sólo su resultado. AQUÍ SE DECLARA LA DECISIÓN: el
// tránsito NO SE DIBUJA NUNCA. Cada par corta del hombre al perfil del monte.
//
// GUION DE LUZ: monte alto y verde de la Sierra Nevada → arenales sin fin →
// mediodía de los pies pelados → sombra corta de las sandalias → luz de Itojoro
// adelantándose → sed blanca de Wososopo → hambre de Juyouirá → cansancio de
// Tsitsi → caída del mejor en Akuwa → morros junto al mar → sueño de Guarapú →
// sentencia bajo sol alto → mar cubriéndolo todo → pedrada y pozos salados.

import { CONTEXTO, DIRECCION, AVOID_BASE, PALETTE_BASE, ref, esc, escp, armar } from "./_wayuu-comun.mjs";

export const SPEC_NAME = "wayuu-serranias-escenas";
export const OUT_DIR = "wayuu/videos/serranias-de-la-guajira/keyframes";
export { CONTEXTO, DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; transformacion a la vista, cuerpo petrificandose, piel de piedra, estatua humana, figura tallada en el cerro, cara en la montana; cadaveres, agonia en plano, esqueletos, momias, buitres sobre un cuerpo, gore; rostro de sufrimiento extremo, gritos, llanto teatral, desesperacion; crueldad entre companeros, burla, abandono dibujado como maldad; aureola, rayos, fuego divino, trono, adoracion, arrodillarse; mapas, rotulos con nombres, carteles, senales, texto; espejismos, oasis, dunas de arabia, camellos";
export const PALETTE =
  PALETTE_BASE + "; el VERDE DE MONTE ALTO existe SOLO en el primer bloque, porque salen de la Sierra Nevada, y no vuelve nunca: de ahi en adelante el corpus entero es arena, blanco de sal y piedra";

const CM =
  "LOS MISMOS caminantes de la referencia (grupo de ocho hombres wayúu adultos, mantas cortas terciadas de algodón crudo, fajas tejidas de kanas, mochilas al hombro, sandalias de suela plana), que van perdiendo miembros bloque a bloque";
const MA =
  "EL MISMO Mareiwa de la referencia (hombre de pelo negro largo y suelto, manto de algodón crudo terciado hasta los tobillos con cenefa tejida oscura, descalzo, sin corona ni adorno)";

export const ITEMS = armar([
  // b1 — Salieron de Uchi Juroteka a correr tierras. Arenales sin fin.
  escp("b1a", [ref("uchi_juroteka"), ref("caminantes"), ref("montana_refugio")], {
    comun: `Mañana en monte alto y VERDE: SALEN DE LA SIERRA NEVADA DE SANTA MARTA, no de la Guajira. Éste es el único bloque con verde de monte y no vuelve nunca. ${CM}. Objeto ancla: el verde que dejan atrás.`,
    camara: {
      a: "PLANO MACRO de hojas anchas y húmedas de monte alto, con la niebla entre ellas.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL de la sierra verde con el grupo entero saliendo por un filo, ocho figuras pequeñas en fila hacia el norte.",
    },
    ini: "hojas anchas y húmedas de monte alto, con la niebla entre ellas.",
    fin: "desde muy arriba, la sierra verde tiene al grupo entero saliendo por un filo, ocho figuras en fila hacia el norte.",
  }, "selva tropical, cascadas, tucanes, monos, paraiso, resplandor"),
  escp("b1b", [ref("caminantes"), ref("llanura_cardonal")], {
    comun: `Mediodía. CAMINARON POR ARENALES SIN FIN: el verde ya se acabó y empieza la arena. Objeto ancla: la fila de ocho cruzando el arenal.`,
    camara: {
      a: "PLANO DETALLE de una sandalia de suela plana hundiéndose en arena suelta hasta el tobillo.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado del arenal con las ocho figuras en fila, diminutas, y ni un accidente en el terreno hasta el horizonte.",
    },
    ini: "una sandalia de suela plana se hunde en arena suelta hasta el tobillo.",
    fin: "desde muy arriba, las ocho figuras van en fila por el arenal, diminutas, y no hay un accidente en el terreno hasta el horizonte.",
  }, "dunas de arabia, camellos, caravana, espejismos, oasis"),

  // b2 — En Maiceo a Wojoro se le pelaron los pies. Los otros siguieron.
  escp("b2a", [ref("wojoro"), ref("caminantes"), ref("llanura_cardonal")], {
    comun: `Mediodía. EN MAICEO A WOJORO SE LE PELARON LOS PIES Y NO PUDO SEGUIR: el modo de caer se ve, y es concreto. Se cuenta con el pie, no con la cara. Objeto ancla: la planta del pie en carne viva de tanto andar.`,
    camara: {
      a: "PLANO MACRO de la planta de un pie levantada del suelo, con la piel abierta por el roce y la arena pegada.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO de él sentado en la arena, de perfil, mirándose los pies, con el grupo ya de pie más allá.",
    },
    ini: "la planta de un pie levantada del suelo, con la piel abierta por el roce y la arena pegada.",
    fin: "está sentado en la arena, de perfil, mirándose los pies, y el grupo ya está de pie más allá.",
  }, "sangre abundante, carne, gore, agonia, grito, llanto teatral"),
  esc("b2b", [ref("serrania_baja"), ref("llanura_cardonal")], {
    comun: `Mediodía. LOS OTROS SIGUIERON SIN ÉL: EL TRÁNSITO NO SE DIBUJA. El plano corta del hombre al PERFIL DEL CERRO en ese mismo sitio. Sin figuras. Objeto ancla: el cerro donde él se quedó.`,
    camara: {
      a: "PLANO MEDIO del sitio vacío en la arena con la huella de alguien que estuvo sentado ahí.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL con un cerro bajo y redondo levantándose justo en ese punto y la fila de siete alejándose ya lejos.",
    },
    ini: "el sitio vacío en la arena, con la huella de alguien que estuvo sentado ahí.",
    fin: "desde muy arriba, en ese punto hay ahora un cerro bajo y redondo, y la fila de siete se aleja ya lejos.",
  }, "transformacion, cuerpo petrificandose, cara en el cerro, estatua, cadaver"),

  // b3 — Epits se quitó las sandalias. No pudo levantarse.
  escp("b3a", [ref("epits"), ref("waireñas"), ref("llanura_cardonal")], {
    comun: `Sombra corta de mediodía. EPITS SE QUITÓ LAS SANDALIAS PARA DESCANSAR: un gesto corriente que resulta definitivo. Objeto ancla: las sandalias quitadas en la arena.`,
    camara: {
      a: "PLANO MACRO de dos sandalias de suela plana dejadas en la arena, una boca arriba, con las correas sueltas.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO de él sentado descalzo junto a ellas, de perfil, con la espalda encorvada.",
    },
    ini: "dos sandalias de suela plana dejadas en la arena, una boca arriba, con las correas sueltas.",
    fin: "él está sentado descalzo junto a ellas, de perfil, con la espalda encorvada.",
  }, "agonia, sangre, cadaver, llanto, desesperacion, caricatura"),
  esc("b3b", [ref("serrania_baja"), ref("llanura_cardonal")], {
    comun: `Mediodía. CUANDO QUISO LEVANTARSE LE FALTARON LAS FUERZAS Y SE QUEDÓ ALLÍ: otra vez el corte al cerro, sin tránsito. Sin figuras. Objeto ancla: el segundo cerro.`,
    camara: {
      a: "PLANO MACRO de las dos sandalias medio cubiertas de arena, ya sin nadie al lado.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL con DOS cerros bajos ya en el terreno, separados por un trecho, y la fila de seis más adelante.",
    },
    ini: "las dos sandalias, medio cubiertas de arena y ya sin nadie al lado.",
    fin: "desde muy arriba hay ya DOS cerros bajos en el terreno, separados por un trecho, y la fila de seis va más adelante.",
  }, "transformacion, piel de piedra, estatua, cara tallada, cadaver, esqueleto"),

  // b4 — Itojoro iba adelante dando voces de aliento.
  escp("b4a", [ref("itojoro"), ref("caminantes"), ref("llanura_cardonal")], {
    comun: `Luz plana. ITOJORO, EL MÁS ÁGIL, IBA ADELANTE DANDO VOCES DE ALIENTO: es el mejor del grupo y por eso importa que caiga. Objeto ancla: su boca gritando hacia atrás.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara vuelta hacia atrás mientras anda, con la boca abierta gritando algo.",
      b: "la cámara ha RETROCEDIDO a lo largo de la fila: PLANO GENERAL con él muy por delante, solo, y los otros cinco repartidos a distintas distancias detrás.",
    },
    ini: "su cara vuelta hacia atrás mientras anda, con la boca abierta gritando algo.",
    fin: "desde el otro extremo, él va muy por delante y solo, y los otros cinco quedan repartidos a distintas distancias detrás.",
  }, "pose heroica, aureola, lider iluminado, resplandor, caricatura"),
  escp("b4b", [ref("itojoro"), ref("caminantes"), ref("cardon")], {
    comun: `Luz plana. DECÍA QUE PRONTO SALDRÍAN A MEJORES TIERRAS: señala el frente, y delante no hay nada distinto. Objeto ancla: el brazo que señala hacia lo mismo de siempre.`,
    camara: {
      a: "PLANO DETALLE de su brazo levantado señalando al frente, con el sudor y el polvo en la piel.",
      b: "la cámara ha GIRADO siguiendo el brazo y se ha elevado: GRAN PLANO GENERAL en picado de lo que hay delante: más arena, más cardones y ninguna señal de agua.",
    },
    ini: "su brazo levantado señala al frente, con el sudor y el polvo en la piel.",
    fin: "en la dirección que señala hay más arena, más cardones y ninguna señal de agua.",
  }, "espejismo, oasis, verde al fondo, resplandor, promesa dibujada"),

  // b5 — Los que se quedaban le deseaban que se cansara. Wososopo, el bofe seco.
  escp("b5a", [ref("caminantes"), ref("llanura_cardonal")], {
    comun: `Luz plana. LOS QUE SE QUEDABAN LE DESEABAN QUE TAMBIÉN SE CANSARA: NO SON CRUELES NI SOLIDARIOS. Es una envidia de agotados, dicha entre dientes. Objeto ancla: dos caras que lo miran alejarse.`,
    camara: {
      a: "PLANO MEDIO CORTO de dos hombres parados mirando hacia delante, con la cara dura y la boca apretada.",
      b: "la cámara ha GIRADO 180 grados y ha retrocedido: PLANO GENERAL con Itojoro pequeño y lejos, todavía andando ligero, y ellos quedándose donde estaban.",
    },
    ini: "dos hombres parados miran hacia delante con la cara dura y la boca apretada.",
    fin: "al girar, Itojoro va pequeño y lejos, todavía ligero, y ellos se quedan donde estaban.",
  }, "odio, violencia, burla, caricatura, pelea, maldicion dibujada"),
  escp("b5b", [ref("wososopo"), ref("llanura_cardonal")], {
    comun: `Blanco de sed. WOSOSOPO GRITABA QUE TENÍA EL BOFE SECO DE SED, Y DE AHÍ LE VIENE EL NOMBRE: el modo de morir es el nombre. Se cuenta con el pecho y la mano, no con la boca. Objeto ancla: la mano en el pecho.`,
    camara: {
      a: "PLANO MACRO de una mano abierta apretándose el pecho por encima de la manta, con los dedos hincados.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO de él de rodillas en la arena, con la mano todavía en el pecho, y los otros ya de espaldas.",
    },
    ini: "una mano abierta se aprieta el pecho por encima de la manta, con los dedos hincados.",
    fin: "está de rodillas en la arena con la mano todavía en el pecho, y los otros ya van de espaldas.",
  }, "lengua fuera, ojos vidriosos, agonia, sangre, cadaver, caricatura"),

  // b6 — Los otros siguieron y él murió de sed. Le tocó el turno a Juyouirá.
  esc("b6a", [ref("serrania_baja"), ref("llanura_cardonal")], {
    comun: `Blanco de sed. LOS OTROS SIGUIERON, ÉL LOS MIRÓ ALEJARSE Y MURIÓ DE SED: corte al cerro. Sin figuras. Objeto ancla: el tercer cerro.`,
    camara: {
      a: "PLANO MEDIO del sitio vacío con dos rodillas marcadas en la arena y nada más.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL con TRES cerros ya repartidos por la llanura, cada uno en su sitio, y cuatro figuras andando al fondo.",
    },
    ini: "el sitio vacío, con dos rodillas marcadas en la arena y nada más.",
    fin: "desde muy arriba hay ya TRES cerros repartidos por la llanura, cada uno en su sitio, y cuatro figuras andando al fondo.",
  }, "cadaver, esqueleto, buitres, transformacion, estatua, cara en la roca"),
  escp("b6b", [ref("juyouira"), ref("caminantes"), ref("llanura_cardonal")], {
    comun: `Luz dura. LE TOCÓ EL TURNO A JUYOUIRÁ: la lista sigue, y el relato la cuenta como lista. Objeto ancla: el que se va quedando atrás en la fila.`,
    camara: {
      a: "PLANO MEDIO lateral de la fila andando, con uno que se descuelga por detrás y va perdiendo el paso.",
      b: "la cámara se ha QUEDADO con él mientras la fila sigue: PLANO GENERAL con él parado en primer término y los otros tres ya pequeños al fondo.",
    },
    ini: "en la fila que anda, uno se descuelga por detrás y va perdiendo el paso.",
    fin: "la cámara se queda con él: está parado en primer término y los otros tres ya son pequeños al fondo.",
  }, "agonia, sangre, caricatura, crueldad, burla, gritos"),

  // b7 — La sed y el hambre no lo dejaron seguir. Tsitsi le dijo que se quedara.
  escp("b7a", [ref("juyouira"), ref("llanura_cardonal")], {
    comun: `Luz dura. LA SED Y EL HAMBRE NO LO DEJARON SEGUIR Y PEDÍA AYUDA: pide, y pedir no cambia nada. Objeto ancla: la mano extendida hacia los que se van.`,
    camara: {
      a: "PLANO MACRO de una mano abierta extendida hacia delante, temblando, con la arena debajo.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL con él en el suelo con el brazo extendido y las tres figuras siguiendo su camino sin volverse.",
    },
    ini: "una mano abierta extendida hacia delante, temblando, con la arena debajo.",
    fin: "desde arriba, él está en el suelo con el brazo extendido y las tres figuras siguen su camino sin volverse.",
  }, "agonia, grito, llanto, sangre, crueldad dibujada, burla"),
  escp("b7b", [ref("tsitsi"), ref("juyouira"), ref("llanura_cardonal")], {
    comun: `Luz dura. TSITSI LE DIJO QUE SE QUEDARA ALLÍ: se lo dice de pasada, sin crueldad y sin lástima. Es lo que hay. Objeto ancla: el que habla sin detenerse.`,
    camara: {
      a: "PLANO MEDIO CORTO de Tsitsi de perfil, hablando hacia abajo mientras sigue andando.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL con Tsitsi ya varios pasos más allá y el otro quedándose en el sitio, los dos en el mismo cuadro.",
    },
    ini: "Tsitsi de perfil habla hacia abajo mientras sigue andando.",
    fin: "desde arriba, Tsitsi ya va varios pasos más allá y el otro se queda en el sitio, los dos en el mismo cuadro.",
  }, "crueldad, empujon, burla, discusion, violencia, llanto"),

  // b8 — Le pusieron Juyouirá por el hambre. Tsitsi tampoco pudo continuar.
  esc("b8a", [ref("serrania_baja"), ref("llanura_cardonal")], {
    comun: `Luz dura. EL HAMBRE LE PICABA EL ESTÓMAGO, Y POR ESO LE PUSIERON JUYOUIRÁ: el nombre queda en el cerro. Sin figuras. Objeto ancla: el cuarto cerro.`,
    camara: {
      a: "PLANO MACRO de la arena donde estuvo la mano extendida, ya lisa.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL con CUATRO cerros repartidos, y dos figuras al fondo, muy separadas entre sí.",
    },
    ini: "la arena donde estuvo la mano extendida, ya lisa.",
    fin: "desde muy arriba hay CUATRO cerros repartidos y dos figuras al fondo, muy separadas entre sí.",
  }, "transformacion, cuerpo, cadaver, estatua, cara, texto con el nombre"),
  escp("b8b", [ref("tsitsi"), ref("serrania_baja"), ref("llanura_cardonal")], {
    comun: `Tarde. TSITSI TAMPOCO PUDO CONTINUAR EL CAMINO: el que mandaba quedarse se queda. Corte al cerro en el mismo par. Objeto ancla: el quinto cerro, que lleva su nombre.`,
    camara: {
      a: "PLANO MEDIO de él parado de espaldas, con la cabeza baja, sin dar un paso más.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL con CINCO cerros en el terreno y una sola figura todavía andando, lejos.",
    },
    ini: "está parado de espaldas, con la cabeza baja, sin dar un paso más.",
    fin: "desde muy arriba hay CINCO cerros en el terreno y una sola figura sigue andando, lejos.",
  }, "transformacion a la vista, piel de piedra, estatua, cadaver, esqueleto"),

  // b9 — Itojoro seguía animando. También se le pelaron los pies. Murió en Akuwa.
  escp("b9a", [ref("itojoro"), ref("llanura_cardonal"), ref("cardon")], {
    comun: `Tarde. ITOJORO SEGUÍA ADELANTÁNDOSE, ANIMANDO A LOS AMIGOS: ya no queda casi nadie a quien animar, y él sigue gritando hacia atrás. Objeto ancla: la boca que grita a un camino vacío.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara vuelta hacia atrás, gritando, igual que en b4a.",
      b: "la cámara ha GIRADO 180 grados y ha retrocedido: PLANO GENERAL del camino detrás de él, completamente vacío, con los cerros repartidos y nadie andando.",
    },
    ini: "su cara vuelta hacia atrás, gritando, igual que al principio.",
    fin: "al girar, el camino detrás de él está completamente vacío: sólo los cerros repartidos y nadie andando.",
  }, "pose heroica, aureola, lider, resplandor, locura dibujada"),
  escp("b9b", [ref("itojoro"), ref("montana_refugio"), ref("llanura_cardonal")], {
    comun: `Última luz. TAMBIÉN A ÉL SE LE PELARON LOS PIES Y MURIÓ EN AKUWA: QUE CAIGA EL ÚLTIMO Y EL MEJOR ES EL SENTIDO DEL RELATO. El mismo plano del pie que en b2a, cerrando la figura. Objeto ancla: su planta del pie, igual que la del primero.`,
    camara: {
      a: "PLANO MACRO de la planta de su pie levantada del suelo, abierta por el roce, IGUAL que la de Wojoro en b2a.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL con SEIS cerros en el terreno y ningún caminante ya en cuadro.",
    },
    ini: "la planta de su pie levantada del suelo, abierta por el roce, igual que la del primero que cayó.",
    fin: "desde muy arriba hay SEIS cerros en el terreno y ya no queda ningún caminante en cuadro.",
  }, "muerte heroica, aureola, resplandor, cadaver, agonia, gore"),

  // b10 — Le pusieron ese nombre por una mata de ita. Los Monkis son morros.
  esc("b10a", [ref("montana_refugio"), ref("frutos_del_monte"), ref("serrania_baja")], {
    comun: `Amanecer. LE PUSIERON ESE NOMBRE POR UNA MATA DE ITA que hay en la cima: el nombre del cerro viene de lo que crece encima. Objeto ancla: la mata en la cima.`,
    camara: {
      a: "PLANO MACRO de una mata baja y correosa creciendo entre la piedra de una cima.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL del cerro entero al amanecer, con esa única mata recortada en lo más alto.",
    },
    ini: "una mata baja y correosa creciendo entre la piedra de una cima.",
    fin: "desde muy arriba se ve el cerro entero al amanecer, con esa única mata recortada en lo más alto.",
  }, "cartel, nombre escrito, cruz, monumento, bandera, antena"),
  esc("b10b", [ref("monkis"), ref("costa_penascos")], {
    comun: `Mañana. LOS MONKIS SON HOY MORROS JUNTO AL MAR: el grupo entero convertido en una hilera de morros pequeños en la costa. Objeto ancla: la hilera de morros.`,
    camara: {
      a: "PLANO MACRO de la roca batida de un morro, con la sal y el agua reventando en la base.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL de la costa con una hilera de morros pequeños repartidos junto al mar, todos parecidos y separados.",
    },
    ini: "la roca batida de un morro, con la sal y el agua reventando en la base.",
    fin: "desde muy arriba, una hilera de morros pequeños se reparte junto al mar, todos parecidos y separados.",
  }, "figuras humanas en la roca, caras, estatuas, monumento, barcos, faro"),

  // b11 — Guarapú era dormilón: se acostó y allí quedó. Ninguno llegó.
  escp("b11a", [ref("guarapu"), ref("trupillo"), ref("llanura_cardonal")], {
    comun: `Sol alto. GUARAPÚ ERA DORMILÓN: SE ACOSTÓ, LE COGIÓ EL SUEÑO Y ALLÍ QUEDÓ. No cae de agotamiento: cae de sueño, y el relato lo dice sin burla. Objeto ancla: la cara dormida a la sombra.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara dormida a la sombra de un trupillo, con la boca entreabierta y tranquila.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL con él tumbado en la sombra, solo en toda la llanura, y la mochila caída al lado.",
    },
    ini: "su cara dormida a la sombra del trupillo, con la boca entreabierta y tranquila.",
    fin: "desde arriba está tumbado en la sombra, solo en toda la llanura, con la mochila caída al lado.",
  }, "caricatura de perezoso, burla, ronquidos dibujados, cadaver, agonia"),
  esc("b11b", [ref("serrania_baja"), ref("llanura_cardonal"), ref("costa_penascos")], {
    comun: `Sol alto. NINGUNO LLEGÓ A SU DESTINO: el cuadro cuenta la lista entera de una vez. Sin figuras. Objeto ancla: todos los cerros a la vez.`,
    camara: {
      a: "PLANO MEDIO del último cerro, pequeño y recién formado, con la sombra del trupillo al lado.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado de toda la Guajira con los cerros repartidos desde el sur hasta el mar, marcando el trayecto entero.",
    },
    ini: "el último cerro, pequeño y recién formado, con la sombra del trupillo al lado.",
    fin: "desde muy arriba, los cerros están repartidos desde el sur hasta el mar y marcan el trayecto entero.",
  }, "mapa, rotulos, nombres escritos, lineas, flechas, cruces, monumentos"),

  // b12 — «Todos ustedes se convertirán en cerros». (CITA)
  escp("b12a", [ref("mareiwa"), ref("serrania_baja"), ref("llanura_cardonal")], {
    comun: `Sol alto. MAREIWA LOS SENTENCIÓ. ${MA}, de pie en la llanura entre los cerros. LA CITA convierte la lista de fracasos en la geografía de la Guajira. Objeto ancla: su figura entre los montes.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara de perfil, hablando en voz normal, sin levantar la mano.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL con él minúsculo en la llanura y los cerros repartidos alrededor, ya todos formados.",
    },
    ini: "de perfil, habla en voz normal y sin levantar la mano.",
    fin: "desde muy arriba es minúsculo en la llanura y los cerros están repartidos alrededor, ya todos formados.",
  }, "aureola, rayos, trono, brazos alzados, fuego divino, adoracion, texto"),
  esc("b12b", [ref("serrania_baja"), ref("montana_refugio"), ref("llanura_cardonal")], {
    comun: `Luz plana. LOS MONTES LLEVAN LOS NOMBRES DE AQUELLOS HOMBRES: el nombre no se escribe en ninguna parte, SE SABE. Sin figuras y sin un solo rótulo. Objeto ancla: los perfiles distintos de cada cerro.`,
    camara: {
      a: "PLANO MEDIO del perfil de un cerro recortado contra el cielo, con su forma particular.",
      b: "la cámara ha hecho un PANORÁMICO lento y ha retrocedido: GRAN PLANO GENERAL con cinco o seis perfiles distintos alineados en el horizonte, cada uno con su forma.",
    },
    ini: "el perfil de un cerro recortado contra el cielo, con su forma particular.",
    fin: "al barrer el horizonte hay cinco o seis perfiles distintos alineados, cada uno con su forma.",
  }, "nombres escritos, carteles, placas, mapas, caras talladas, monumentos"),

  // b13 — Todo estaba cubierto por el mar. Mareiwa subió al Tsitsi y disparó.
  esc("b13a", [ref("tsitsi_cerro"), ref("costa_penascos")], {
    comun: `Luz alta. LA SEGUNDA FUNDACIÓN, distinta de la de los cerros: TODO ALREDEDOR ESTABA CUBIERTO POR EL MAR. Sin figuras. Objeto ancla: el agua que lo cubre todo.`,
    camara: {
      a: "PLANO MACRO de la superficie del mar batiendo contra la roca de una cima.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado con la cima del Tsitsi como única tierra y agua hasta el horizonte en todas direcciones.",
    },
    ini: "la superficie del mar batiendo contra la roca de una cima.",
    fin: "desde muy arriba, la cima del Tsitsi es la única tierra y hay agua hasta el horizonte en todas direcciones.",
  }, "diluvio biblico, arca, barcos, monstruos marinos, tormenta epica"),
  escp("b13b", [ref("mareiwa"), ref("honda"), ref("tsitsi_cerro")], {
    comun: `Luz alta. MAREIWA SUBIÓ A LA CIMA DEL TSITSI Y DISPARÓ SU HONDA: el mismo gesto que abre «creacion-wayuu», aquí como remate. Objeto ancla: la piedra en la badana.`,
    camara: {
      a: "PLANO MACRO de la piedra asentada en la badana de la honda, con las trenzas de fibra tensándose.",
      b: "la cámara se ha SOLTADO tras el disparo y ha volado sobre el agua: PLANO GENERAL a ras de mar con la piedra ya lejos, pequeña, bajando al final de su arco.",
    },
    ini: "la piedra asentada en la badana de la honda, con las trenzas de fibra tensándose.",
    fin: "a ras del agua, la piedra va ya lejos y baja al final de su arco.",
  }, "rayos, explosion, resplandor, aureola, gigantismo, estela magica"),

  // b14 — Cayó en Kasuto y el mar se apartó. Por eso hay pozos salados.
  esc("b14a", [ref("kasuto"), ref("costa_penascos")], {
    comun: `Luz alta. LA PIEDRA CAYÓ EN KASUTO Y EL MAR SE APARTÓ, Y QUEDÓ LA TIERRA. Objeto ancla: la piedra blanca en el sitio del impacto.`,
    camara: {
      a: "PLANO MEDIO de la piedra blanca calcárea encajada en el fondo mojado, con el agua todavía lamiéndola.",
      b: "la cámara ha RETROCEDIDO en travelling hacia atrás y se ha elevado muchísimo: GRAN PLANO GENERAL en picado con la línea del agua ya muy lejos y una extensión enorme de tierra descubierta entre ella y la piedra.",
    },
    ini: "la piedra blanca encajada en el fondo mojado, con el agua todavía lamiéndola.",
    fin: "desde muy arriba, la línea del agua quedó lejísimos y entre ella y la piedra hay una extensión enorme de tierra descubierta.",
  }, "ola gigante, tsunami, explosion, magia, resplandor, arca"),
  esc("b14b", [ref("pozos_salados"), ref("serrania_baja"), ref("llanura_cardonal")], {
    comun: `Última luz. POR ESO HAY POZOS SALADOS: LOS POZOS SON LA PRUEBA de que ahí estuvo el mar, y con eso cierra el mito, con los cerros al fondo. Objeto ancla: la costra de sal en el pozo.`,
    camara: {
      a: "PLANO MACRO de la costra blanca de sal cristalizada en el borde de un pozo, con el agua turbia debajo.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL final en picado de la Guajira con los pozos salados repartidos por la llanura y los cerros con nombre marcando el horizonte.",
    },
    ini: "la costra blanca de sal cristalizada en el borde del pozo, con el agua turbia debajo.",
    fin: "desde muy arriba, los pozos salados se reparten por la llanura y los cerros con nombre marcan el horizonte.",
  }, "mapas, rotulos, monumentos, cruces, texto, moraleja dibujada"),
]);
