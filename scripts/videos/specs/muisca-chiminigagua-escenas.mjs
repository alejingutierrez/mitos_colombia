// Keyframes de Chiminigagua — 9 bloques × 2 escenas × 2 cuadros = 36 imágenes ≈ 90 s.
// Guion: guion-chiminigagua-v2.json (N=9) · Acta: acta-chiminigagua.json
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _muisca-comun.mjs).
//
// DESLINDE DURO: Chiminigagua NO TIENE FORMA. La fuente lo dice con todas sus
// letras. NINGUNA escena le da cuerpo, cara ni silueta. Lo que se ve es la luz
// abriéndose y lo que la luz revela.
//
// · La luz NO se enciende: se ABRE DESDE ADENTRO. Ni fuego ni manantial.
// · Las aves son negras POR MATERIAL —están hechas de la noche—, no por
//   presagio. Nada de mal agüero.
// · Ellas NO crean: REVELAN. La materia ya estaba; faltaba poder verla.
// · El sol y la luna van al FINAL: la luz es más antigua que los dos.

import { DIRECCION, AVOID_BASE, ref, esc, armar } from "./_muisca-comun.mjs";

export const SPEC_NAME = "muisca-chiminigagua-escenas";
export const OUT_DIR = "muiscas/videos/chiminigagua/keyframes";
export { DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; cualquier figura, rostro, silueta, mano, ojo o presencia que represente a Chiminigagua; dios antropomorfo; rayos de sol dibujados; hogueras, antorchas, fuego; manantiales o chorros de agua como metafora de la luz; aves de mal agüero, calaveras, cuervos siniestros";
export const PALETTE =
  "negro de noche sin fondo, gris de ceniza, blanco calido de aliento luminoso, azul mineral de laguna, verde muy apagado; el oro solo como resplandor, nunca como objeto; sin saturacion";

export const ITEMS = armar([
  // b1 — Sólo había noche y dentro estaba encerrada la luz.
  esc("b1a", [ref("altiplano_noche")], {
    comun: "Negro casi total. EL MISMO altiplano de la referencia en una noche tan cerrada que apenas se adivinan los filos de las lomas como capas de papel negro sobre papel negro; ni luna, ni estrellas, ni fuego. Objeto ancla: un punto de claridad.",
    camara: {
      a: "GRAN PLANO GENERAL lejanísimo: el valle entero en negro y el punto de claridad diminuto en el centro.",
      b: "la cámara ha AVANZADO en línea recta hacia ese punto hasta quedar muy cerca: PLANO CERRADO en el que la claridad ocupa media pantalla y alrededor sólo hay negro.",
    },
    ini: "el punto de claridad es tan débil que podría no estar.",
    fin: "de cerca se ve que no es un punto sino una mancha que late y crece, todavía sin forma ni fuente, con la niebla negra corriéndole por delante.",
  }, "personas, animales, fuego, antorchas, luna, estrellas, rayos, figura divina"),
  esc("b1b", [ref("mundo_primera_luz")], {
    comun: "EL MISMO mundo en primera luz de la referencia, pero MUCHO más oscuro: la materia ya está ahí —piedra, agua, tierra— y apenas se intuye por contraste. La luz está encerrada dentro, no encima. Objeto ancla: el resplandor que late por dentro.",
    camara: {
      a: "PLANO MACRO pegado a una piedra negra: sólo se ve su canto y el resplandor que late detrás de él.",
      b: "la cámara ha RETROCEDIDO y se ha elevado hasta un PLANO GENERAL del paisaje primero: se ven la piedra pequeña, el agua y la tierra, todavía casi negros.",
    },
    ini: "el rescoldo interior está bajo y del canto de la piedra sólo se adivina la silueta.",
    fin: "el rescoldo ha latido más fuerte y desde esta distancia las formas de la piedra, el agua y la tierra asoman enteras por un momento, sin llegar a iluminarse por encima.",
  }, "personas, sol, hoguera, manantial, rostro, ojos en la oscuridad"),

  // b2 — Chiminigagua comenzó a amanecer, abriéndose desde adentro.
  esc("b2a", [ref("mundo_primera_luz")], {
    comun: "EL MISMO paisaje primero de la referencia, donde las capas de papel se separan por su propio canto y por la rendija sale claridad, como si el mundo se descosiera hacia afuera. No hay fuente, no hay foco, no hay llama: la luz viene de adentro. Objeto ancla: las rendijas.",
    camara: {
      a: "PLANO MACRO sobre una sola rendija fina, con el canto de papel iluminado por detrás llenando el cuadro.",
      b: "la cámara ha RETROCEDIDO y ha hecho un PANEO LATERAL: PLANO MEDIO en el que se ven cinco o seis rendijas repartidas por el paisaje, todas abriéndose a la vez.",
    },
    ini: "hay una sola rendija y la claridad que sale por ella es todavía poca.",
    fin: "las rendijas se han multiplicado y ensanchado por todos los cantos del paisaje y la claridad se derrama ya por sus bordes.",
  }, "hoguera, antorcha, sol, manantial, chorro de agua, figura, rostro, rayos dibujados"),
  esc("b2b", [ref("altiplano_noche"), ref("mundo_primera_luz")], {
    comun: "EL MISMO altiplano de la referencia, donde la noche deja de ser una sola cosa. Todavía no hay nada iluminado: sólo hay diferencia. Objeto ancla: la línea del horizonte.",
    camara: {
      a: "PLANO MEDIO BAJO pegado a un borde de loma, con el terreno negro llenando la mitad inferior.",
      b: "la cámara ha SUBIDO en vertical y ha basculado hacia el horizonte: GRAN PLANO GENERAL en el que la línea que separa cielo y tierra cruza el cuadro entero.",
    },
    ini: "unas zonas siguen negras y otras empiezan a ser gris ceniza, y entre ellas se adivina algo.",
    fin: "desde arriba los grises se han separado del negro lo bastante para que el horizonte quede afirmado como una línea limpia de lado a lado del mundo.",
  }, "sol, luna, estrellas, fuego, personas, figura divina, amanecer de colores"),

  // b3 — Lo primero fueron unas aves grandes y negras.
  esc("b3a", [ref("ave_primigenia"), ref("altiplano_noche")], {
    comun: "Contraluz de gris ceniza. UNA MISMA ave primigenia de la referencia, grande y completamente negra, sobre una piedra; está hecha del mismo papel negro que la noche y casi se confunde con ella. No es un ave de agüero: es la noche que tomó cuerpo. Objeto ancla: el ala.",
    camara: {
      a: "PLANO MEDIO lateral a la altura de la piedra, el ave posada y las alas a media apertura.",
      b: "la cámara se ha DEJADO CAER hasta el suelo y ha basculado a CONTRAPICADO: el ave despega justo por encima del objetivo y el ala barre el cuadro de lado a lado.",
    },
    ini: "sigue posada, abriendo las alas por primera vez.",
    fin: "ha despegado y pasa por encima de la cámara con las alas abiertas del todo, tan cerca que se le ve el grano del papel; la piedra ha quedado vacía abajo.",
  }, "cuervo siniestro, calaveras, ojos rojos, mal agüero, sangre, bandada amenazante"),
  esc("b3b", [ref("ave_primigenia"), ref("mundo_primera_luz")], {
    comun: "Gris muy bajo. VARIAS de LAS MISMAS aves de la referencia, tres o cuatro, apenas separadas del fondo negro. Objeto ancla: el aire vacío sobre ellas.",
    camara: {
      a: "PLANO GENERAL a ras de suelo con las aves todavía en tierra y dos tercios de cuadro vacío arriba.",
      b: "la cámara ha SUBIDO con ellas y ha basculado a PICADO: ahora se las ve desde arriba volando sobre el paisaje, con el suelo abajo y ninguna en tierra.",
    },
    ini: "están empezando a levantarse de distintos puntos del suelo a la vez.",
    fin: "vistas desde arriba, las cuatro vuelan ya repartidas sobre el paisaje y el suelo del que salieron ha quedado vacío.",
  }, "bandada de terror, tormenta, relampagos, personas, dramatismo"),

  // b4 — «Por todas partes, echando por el pico el aliento que llevaban dentro». (CITA)
  esc("b4a", [ref("ave_primigenia")], {
    comun: "La cabeza de UNA MISMA ave de la referencia contra el negro. El resto del ave sigue siendo noche. Objeto ancla: el hilo de aliento.",
    camara: {
      a: "PRIMER PLANO de perfil, el pico ocupando el centro del cuadro.",
      b: "la cámara ha RETROCEDIDO siguiendo el aliento que sale del pico: PLANO MEDIO en el que se ve el ave entera de perfil y la hebra luminosa cruzando delante de ella.",
    },
    ini: "el pico empieza a abrirse y por la rendija asoma el primer hilo de aliento blanco y luminoso, todavía corto.",
    fin: "el pico está abierto del todo y el aliento ha salido entero: una hebra de luz que cruza el cuadro por delante del ave y sale por el borde.",
  }, "fuego en la boca, llamas, humo, ojos brillantes, monstruo"),
  esc("b4b", [ref("ave_primigenia"), ref("altiplano_noche")], {
    comun: "Negro con trazos claros. LAS MISMAS aves de la referencia en vuelo, cada una dejando tras el pico una estela de aliento resplandeciente. Objeto ancla: las estelas.",
    camara: {
      a: "CONTRAPICADO desde el suelo, con una cresta de loma en negro abajo y las aves juntas hacia el centro del cielo.",
      b: "la cámara ha SUBIDO hasta ponerse a la altura de las aves y ha girado sobre sí misma: PLANO GENERAL en el aire, con el altiplano muy abajo y las estelas cruzándose delante del objetivo.",
    },
    ini: "las aves van todavía juntas y las estelas apenas empiezan a dibujarse.",
    fin: "las aves se han repartido hacia las cuatro esquinas y las estelas se han alargado hasta rayar de claro toda la noche que hay entre ellas.",
  }, "fuegos artificiales, cometas, rayos, personas, sol"),

  // b5 — Sus plumas eran del color de todo lo existente.
  esc("b5a", [ref("ave_primigenia")], {
    comun: "El ala de UNA MISMA ave de la referencia con el aliento pasando por detrás: en las plumas de papel se encienden los colores de todo lo que existe —pardo de tierra, verde de monte, azul de agua, gris de piedra—. Objeto ancla: la frontera entre lo negro y lo encendido.",
    camara: {
      a: "PLANO MACRO sobre la base del ala, junto al cuerpo, donde ya hay color.",
      b: "la cámara ha hecho un TRAVELLING a lo largo del ala hasta la punta y se ha separado: PLANO MEDIO del ave entera de perfil en vuelo, con las dos alas visibles.",
    },
    ini: "sólo están encendidas las plumas pegadas al cuerpo; de ahí a la punta todo sigue negro.",
    fin: "vista entera, el ave lleva ya sus dos alas encendidas de colores hasta las puntas, con apenas dos plumas del borde todavía negras.",
  }, "arcoiris, neones, saturacion, plumas de pavo real, ave fenix, fuego"),
  esc("b5b", [ref("ave_primigenia"), ref("mundo_primera_luz")], {
    comun: "Gris que se abre. Un ave de LAS MISMAS de la referencia pasa por delante de EL MISMO paisaje primero de la referencia soltando el aliento: donde el aliento ya pasó la piedra y el pasto tienen color, y donde no, siguen en gris. Objeto ancla: la línea entre lo gris y lo revelado.",
    camara: {
      a: "PLANO GENERAL lateral con el ave entrando por un borde y el pasto gris en primer término.",
      b: "la cámara ha ACOMPAÑADO al ave en un travelling largo y se ha elevado a PICADO: el paisaje se ve ahora desde arriba, partido en dos mitades, y el ave pequeña al frente de la frontera.",
    },
    ini: "la frontera de color apenas ha mordido una esquina del paisaje.",
    fin: "desde arriba se ve que la frontera ha barrido más de medio territorio en diagonal, dejando atrás piedra y pasto ya revelados y delante todo todavía gris.",
  }, "explosion de color, arcoiris, personas, sol, magia"),

  // b6 — Una cruzó los montes; otra bajó sobre las aguas.
  esc("b6a", [ref("ave_primigenia"), ref("piedras_funza")], {
    comun: "Luz naciente rasante. UNA MISMA ave de la referencia cruzando ALTO sobre una cordillera de papel, con el aliento cayendo sobre las crestas de LAS MISMAS piedras de la referencia. Objeto ancla: las crestas.",
    camara: {
      a: "PLANO MEDIO pegado a una cresta todavía oscura, con el ave pequeña pasando arriba.",
      b: "la cámara se ha ELEVADO por encima de la cordillera y la sigue desde detrás: PLANO GENERAL en picado de toda la sierra con el ave delante y abajo.",
    },
    ini: "sólo la cresta que tenemos delante tiene filo y sombra; las demás son una masa negra.",
    fin: "desde arriba se ve que detrás del ave las crestas han ido cobrando filo una tras otra hasta el fondo del valle.",
  }, "personas, casas, sol en el cielo, rayos, nubes fotográficas"),
  esc("b6b", [ref("ave_primigenia"), ref("laguna_iguaque_A")], {
    comun: "UNA MISMA ave de la referencia bajando hacia LA MISMA laguna de la referencia; debajo, el agua negra está aprendiendo a devolver la claridad. Objeto ancla: el reflejo en el agua.",
    camara: {
      a: "PLANO GENERAL BAJO desde la orilla, entre juncos oscuros, con el ave a media altura sobre la laguna.",
      b: "la cámara ha VOLADO sobre el agua hasta ponerse debajo del ave y ha basculado a CENITAL: PLANO CENITAL de la superficie, con el reflejo del ave y su aliento extendiéndose en el centro.",
    },
    ini: "en el agua hay apenas una mancha de reflejo del aliento.",
    fin: "vista desde arriba, el ave casi roza la superficie y su reflejo se ha extendido rizado y luminoso por todo el centro del agua.",
  }, "personas, barcas, peces saltando, salpicaduras grandes, sol"),

  // b7 — Cosían la luz sobre lo oscuro, que se volvía piedra y laguna.
  esc("b7a", [ref("ave_primigenia"), ref("mundo_primera_luz")], {
    comun: "Mitad claro y mitad oscuro. DOS de LAS MISMAS aves de la referencia cruzando en direcciones distintas, con sus dos estelas cruzándose como dos puntadas sobre la tela negra del mundo. Objeto ancla: el punto donde se cruzan las dos estelas.",
    camara: {
      a: "PLANO MEDIO a la altura del cruce, con las dos estelas entrando por esquinas opuestas y la zona cosida pequeña en el centro.",
      b: "la cámara se ha ALEJADO muchísimo hacia arriba: GRAN PLANO GENERAL en picado del mundo entero, donde el cruce es un nudo pequeño y se ve cuánto queda por coser.",
    },
    ini: "en el cruce el paisaje ya es piedra y laguna reconocibles, pero es una zona pequeña.",
    fin: "desde muy arriba se ve que la zona cosida se ha ensanchado hasta ocupar medio mundo de piedra y laguna visibles, con la noche arrinconada en los bordes.",
  }, "hilos o agujas literales, costura visible, tela, telar, personas"),
  esc("b7b", [ref("laguna_iguaque_B"), ref("piedras_funza")], {
    comun: "Luz pareja recién llegada. LA MISMA laguna de la referencia y LAS MISMAS piedras de la referencia ya completamente visibles y con color. El mundo quedó claro y no hay nadie todavía. Objeto ancla: la franja de noche.",
    camara: {
      a: "PLANO DETALLE de una piedra con musgo de papel en la orilla, con el agua desenfocada detrás.",
      b: "la cámara ha RETROCEDIDO y ha subido hasta un GRAN PLANO GENERAL de la laguna y la sierra enteras, con el cielo arriba.",
    },
    ini: "sobre la piedra cae todavía la sombra de la última franja de noche.",
    fin: "desde lejos se ve que la franja de noche se ha retirado del todo por el borde superior y el cielo ha quedado limpio de lado a lado, con el agua rizada y la niebla subiendo.",
  }, "personas, animales, casas, humo, sol dibujado"),

  // b8 — Después creó las aguas, las semillas y las gentes. Sol y luna.
  esc("b8a", [ref("semillas_bolsita"), ref("sabana_cultivos")], {
    comun: "Luz limpia de día nuevo. LA MISMA bolsita de semillas de la referencia volcada sobre la tierra húmeda de LOS MISMOS cultivos de la referencia. Objeto ancla: las semillas.",
    camara: {
      a: "PLANO MACRO en la boca de la bolsita, con las semillas rodando muy cerca del objetivo.",
      b: "la cámara se ha ELEVADO en vertical hasta un CENITAL ALTO: se ve el campo entero surcado y la bolsita pequeña en una esquina.",
    },
    ini: "las semillas están rodando todavía, apretadas unas contra otras.",
    fin: "desde arriba las semillas se ven repartidas por los surcos hasta lejos, cada una en su hueco, con el agua de la acequia corriendo por un borde del campo.",
  }, "manos, personas, brotes ya crecidos, flores, sol"),
  esc("b8b", [ref("altiplano_noche"), ref("madre_chia")], {
    comun: "Cielo de tarde tardía sobre EL MISMO altiplano de la referencia: el sol por un borde y la luna por el otro, los dos pequeños y sin dominar la escena. Llegan los últimos, no los primeros. Objeto ancla: los dos discos.",
    camara: {
      a: "PLANO MEDIO sobre el borde donde está el sol, con una loma en sombra abajo; la luna fuera de cuadro.",
      b: "la cámara ha hecho un PANEO LATERAL de ciento ochenta grados y ha retrocedido: GRAN PLANO GENERAL en el que se ven los dos discos a la vez, uno en cada borde del cuadro.",
    },
    ini: "el sol está bajando, todavía un palmo por encima del horizonte.",
    fin: "en el mismo cuadro se ven ya el sol rozando el horizonte por un lado y la luna claramente más alta por el otro, con el cielo cambiado de tono entre los dos.",
  }, "sol enorme, rayos dibujados, cara en el sol o en la luna, personas, eclipse"),

  // b9 — La luz es más antigua. Las aves no se fueron.
  esc("b9a", [ref("mundo_primera_luz")], {
    comun: "Luz plena y serena del mundo ya hecho. EL MISMO paisaje de la referencia entero y visible —montes, agua, pasto—. Objeto ancla: la última hebra de aliento.",
    camara: {
      a: "GRAN PLANO GENERAL del valle con la hebra suspendida encima, pequeña.",
      b: "la cámara ha AVANZADO hasta la hebra y se ha quedado dentro de ella: PLANO MACRO de los jirones de luz deshaciéndose, con el paisaje desenfocado detrás.",
    },
    ini: "sobre el valle queda todavía suspendida una última hebra de aliento resplandeciente, entera.",
    fin: "de cerca se ve cómo la hebra se ha roto en jirones que casi se disuelven en el aire: del prodigio más antiguo ya no queda casi nada.",
  }, "personas, sol, aves, casas, humo, texto"),
  esc("b9b", [ref("ave_primigenia"), ref("altiplano_noche")], {
    comun: "Cielo de atardecer con la noche volviendo por un lado. DOS de LAS MISMAS aves negras de la referencia cruzando alto y tranquilas, recortadas contra el cielo que se apaga; no huyen ni amenazan, simplemente siguen en el mundo. Objeto ancla: las dos aves.",
    camara: {
      a: "PLANO MEDIO en contrapicado con la copa de un árbol en sombra abajo y las dos aves pasando cerca.",
      b: "la cámara ha RETROCEDIDO y ha bajado hasta un GRAN PLANO GENERAL del altiplano al anochecer: las aves han quedado diminutas cerca del borde del cuadro y abajo se ve el mundo entero ya habitado de luz.",
    },
    ini: "las dos aves pasan grandes por encima del árbol.",
    fin: "desde lejos las aves son ya dos puntos junto al borde del cuadro, a punto de salir de él, con la noche avanzada por detrás y el valle entero abajo.",
  }, "bandada de terror, cuervos siniestros, tormenta, personas, mal agüero"),
]);
