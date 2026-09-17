// Keyframes de Chiminigagua — 9 bloques × 2 escenas × 2 cuadros = 36 imágenes ≈ 90 s.
// Guion: guion-chiminigagua-v2.json (N=9) · Acta: acta-chiminigagua.json
// DOCTRINA v3: cada escena es un par A→B (ver _muisca-comun.mjs).
//
// DESLINDE DURO: Chiminigagua NO TIENE FORMA. La fuente lo dice con todas sus
// letras —no se podía representar bajo ninguna forma sensible, sólo tenía
// nombre—. NINGUNA escena le da cuerpo, cara ni silueta. Lo que se ve es la
// luz abriéndose y lo que la luz revela.
//
// · La luz NO se enciende: se ABRE DESDE ADENTRO. La fuente descarta las dos
//   comparaciones fáciles: ni fuego de hoguera ni agua de manantial.
// · Las aves son negras POR MATERIAL —están hechas de la noche que aún no
//   terminaba—, no por presagio. Nada de mal agüero ni dramatismo.
// · Ellas NO crean: REVELAN. La materia ya estaba; faltaba poder verla.
// · El sol y la luna van al FINAL: la luz es más antigua que los dos.
//
// GUION DE LUZ: negro absoluto → primer rescoldo interior → noche con aves →
// aliento naciente → plumas del color de todo → luz sobre el agua → costura de
// claridad → mundo claro → sol y luna tardíos.

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
    comun: "GRAN PLANO GENERAL, negro casi total. EL MISMO altiplano de la referencia en una noche tan cerrada que apenas se adivinan los filos de las lomas como capas de papel negro sobre papel negro; ni luna, ni estrellas, ni fuego. Capa de primer plano: el filo de una loma. Objeto ancla: un punto de claridad en el centro del cuadro.",
    ini: "ese punto de claridad es tan débil que podría no estar.",
    fin: "el punto de claridad creció hasta ser una mancha pequeña pero indudable y la niebla negra se corrió sobre las lomas.",
  }, "personas, animales, fuego, antorchas, luna, estrellas, rayos, figura divina"),
  esc("b1b", [ref("mundo_primera_luz")], {
    comun: "PLANO MEDIO del MISMO mundo en primera luz de la referencia, pero MUCHO más oscuro: la materia ya está ahí —piedra, agua, tierra— y apenas se intuye por contraste. La luz está encerrada dentro, no encima. Capa de primer plano: una piedra negra. Objeto ancla: el resplandor que late por dentro.",
    ini: "el rescoldo interior está bajo, y de la piedra y el agua sólo se adivinan los bordes.",
    fin: "el rescoldo latió más fuerte bajo la superficie y las formas de la piedra y el agua asomaron enteras por un momento, sin llegar a iluminarse por encima.",
  }, "personas, sol, hoguera, manantial, rostro, ojos en la oscuridad"),

  // b2 — Chiminigagua comenzó a amanecer, abriéndose desde adentro.
  esc("b2a", [ref("mundo_primera_luz")], {
    comun: "PLANO MEDIO CERRADO sobre EL MISMO paisaje primero de la referencia, donde las capas de papel se separan por su propio canto y por la rendija sale claridad, como si el mundo se descosiera hacia afuera. No hay fuente, no hay foco, no hay llama: la luz viene de adentro. Capa de primer plano: un canto de papel iluminado por detrás. Objeto ancla: la primera rendija.",
    ini: "hay una sola rendija fina y la claridad que sale por ella es todavía poca.",
    fin: "las rendijas se ensancharon y se multiplicaron por los cantos, y la claridad se derrama ya por todo el borde de las capas.",
  }, "hoguera, antorcha, sol, manantial, chorro de agua, figura, rostro, rayos dibujados"),
  esc("b2b", [ref("altiplano_noche"), ref("mundo_primera_luz")], {
    comun: "GRAN PLANO GENERAL sobre EL MISMO altiplano de la referencia, donde la noche deja de ser una sola cosa. Todavía no hay nada iluminado: sólo hay diferencia. Capa de primer plano: un borde de loma. Objeto ancla: la línea del horizonte.",
    ini: "unas zonas siguen negras y otras empiezan apenas a ser gris ceniza, y entre ellas se adivina por primera vez un horizonte.",
    fin: "los grises se separaron del negro lo bastante para que el horizonte quede afirmado como una línea limpia de lado a lado del cuadro.",
  }, "sol, luna, estrellas, fuego, personas, figura divina, amanecer de colores"),

  // b3 — Lo primero fueron unas aves grandes y negras.
  esc("b3a", [ref("ave_primigenia"), ref("altiplano_noche")], {
    comun: "PLANO MEDIO, contraluz de gris ceniza. UNA MISMA ave primigenia de la referencia, grande y completamente negra, sobre una piedra; está hecha del mismo papel negro que la noche de detrás y casi se confunde con ella. No es un ave de agüero: es la noche que tomó cuerpo. Capa de primer plano: la piedra donde se posa. Objeto ancla: el ala.",
    ini: "sigue posada y está abriendo las alas por primera vez, a media apertura.",
    fin: "terminó de abrir las alas del todo y se impulsó: tiene las patas ya despegadas de la piedra y la noche de detrás se movió con ella.",
  }, "cuervo siniestro, calaveras, ojos rojos, mal agüero, sangre, bandada amenazante"),
  esc("b3b", [ref("ave_primigenia"), ref("mundo_primera_luz")], {
    comun: "PLANO GENERAL, gris muy bajo. VARIAS de LAS MISMAS aves de la referencia, tres o cuatro, apenas separadas del fondo negro; quedan dos tercios de cuadro vacío arriba. Capa de primer plano: una piedra oscura. Objeto ancla: el aire vacío sobre ellas.",
    ini: "están empezando a levantarse de distintos puntos del suelo a la vez, con las alas a media apertura.",
    fin: "subieron y se repartieron por la mitad alta del encuadre, cada una a distinta altura, dejando el suelo vacío.",
  }, "bandada de terror, tormenta, relampagos, personas, dramatismo"),

  // b4 — «Por todas partes, echando por el pico el aliento que llevaban dentro». (CITA)
  esc("b4a", [ref("ave_primigenia")], {
    comun: "PRIMER PLANO de la cabeza de UNA MISMA ave de la referencia, de perfil contra el negro. El resto del ave sigue siendo noche. Capa de primer plano: el borde del pico. Objeto ancla: el hilo de aliento.",
    ini: "el pico está empezando a abrirse y por la rendija asoma el primer hilo de un aliento blanco y luminoso, todavía corto.",
    fin: "el pico quedó abierto del todo y el aliento salió entero, alargado hacia adelante como una hebra luminosa que cruza el cuadro.",
  }, "fuego en la boca, llamas, humo, ojos brillantes, monstruo"),
  esc("b4b", [ref("ave_primigenia"), ref("altiplano_noche")], {
    comun: "GRAN PLANO GENERAL en contrapicado, negro con trazos claros. LAS MISMAS aves de la referencia en vuelo, separándose hacia los cuatro lados del cuadro, cada una dejando tras el pico una estela de aliento resplandeciente. Capa de primer plano: una cresta de loma en negro. Objeto ancla: las estelas.",
    ini: "las aves están todavía juntas hacia el centro y las estelas apenas empiezan a dibujarse sobre la noche.",
    fin: "las aves se alejaron hacia las esquinas y las estelas se alargaron hasta cruzar el cuadro entero, dejando la noche rayada de claridad.",
  }, "fuegos artificiales, cometas, rayos, personas, sol"),

  // b5 — Sus plumas eran del color de todo lo existente.
  esc("b5a", [ref("ave_primigenia")], {
    comun: "PLANO DETALLE del ala de UNA MISMA ave de la referencia cruzando el cuadro, con el aliento pasando por detrás: en las plumas de papel se encienden los colores de todo lo que existe —pardo de tierra, verde de monte, azul de agua, gris de piedra—. Capa de primer plano: dos plumas en sombra. Objeto ancla: la frontera entre lo negro y lo encendido.",
    ini: "sólo está encendida la parte del ala pegada al cuerpo; de ahí a la punta todo sigue negro.",
    fin: "el encendido recorrió el ala hasta la punta y ya casi todas las plumas llevan su color, con apenas dos plumas del borde todavía negras.",
  }, "arcoiris, neones, saturacion, plumas de pavo real, ave fenix, fuego"),
  esc("b5b", [ref("ave_primigenia"), ref("mundo_primera_luz")], {
    comun: "PLANO GENERAL, gris que se abre. Un ave de LAS MISMAS de la referencia pasa cerca y por delante de EL MISMO paisaje primero de la referencia, soltando el aliento resplandeciente: donde el aliento ya pasó la piedra y el pasto tienen color, y donde todavía no, siguen en gris. Capa de primer plano: pasto gris aún sin luz. Objeto ancla: la línea entre lo gris y lo revelado.",
    ini: "el ave está entrando por un borde y la frontera de color apenas ha mordido una esquina del paisaje.",
    fin: "el ave avanzó hasta el centro y la frontera de color barrió más de medio cuadro en diagonal, dejando atrás la piedra y el pasto ya revelados.",
  }, "explosion de color, arcoiris, personas, sol, magia"),

  // b6 — Una cruzó los montes; otra bajó sobre las aguas.
  esc("b6a", [ref("ave_primigenia"), ref("piedras_funza")], {
    comun: "GRAN PLANO GENERAL, luz naciente rasante. UNA MISMA ave de la referencia cruzando ALTO sobre una cordillera de papel, con el aliento cayendo sobre las crestas de LAS MISMAS piedras de la referencia. Capa de primer plano: una cresta aún oscura. Objeto ancla: la cresta que recibe la luz.",
    ini: "sólo la primera cresta tiene filo y sombra; las demás siguen siendo una masa negra.",
    fin: "el ave cruzó a la otra mitad del cuadro y detrás de ella las crestas cobraron filo una tras otra hasta el fondo del valle.",
  }, "personas, casas, sol en el cielo, rayos, nubes fotográficas"),
  esc("b6b", [ref("ave_primigenia"), ref("laguna_iguaque_A")], {
    comun: "PLANO GENERAL BAJO, a ras del agua. UNA MISMA ave de la referencia bajando en picado suave hacia LA MISMA laguna de la referencia; debajo, el agua negra está aprendiendo a devolver la claridad. Capa de primer plano: juncos oscuros. Objeto ancla: el reflejo en el agua.",
    ini: "el ave va todavía a media altura y en el agua hay apenas una mancha de reflejo del aliento.",
    fin: "el ave bajó casi hasta rozar la superficie y el reflejo se extendió por el agua, rizado y luminoso, bajo su vientre.",
  }, "personas, barcas, peces saltando, salpicaduras grandes, sol"),

  // b7 — Cosían la luz sobre lo oscuro, que se volvía piedra y laguna.
  esc("b7a", [ref("ave_primigenia"), ref("mundo_primera_luz")], {
    comun: "GRAN PLANO GENERAL en picado, mitad claro y mitad oscuro. DOS de LAS MISMAS aves de la referencia cruzando el cuadro en direcciones distintas, con sus dos estelas de aliento cruzándose como dos puntadas sobre la tela negra del mundo. Capa de primer plano: un borde negro sin coser. Objeto ancla: el punto donde se cruzan las dos estelas.",
    ini: "en el cruce el paisaje ya es piedra y laguna reconocibles, pero es una zona pequeña y alrededor sigue siendo noche.",
    fin: "las dos estelas se alargaron y la zona cosida se ensanchó hasta ocupar medio cuadro de piedra y laguna visibles, con la noche arrinconada en los bordes.",
  }, "hilos o agujas literales, costura visible, tela, telar, personas"),
  esc("b7b", [ref("laguna_iguaque_B"), ref("piedras_funza")], {
    comun: "PLANO GENERAL, luz pareja recién llegada. LA MISMA laguna de la referencia y LAS MISMAS piedras de la referencia ya completamente visibles y con color, quietas. El mundo quedó claro y no hay nadie todavía. Capa de primer plano: una piedra con musgo de papel. Objeto ancla: la franja de noche.",
    ini: "queda una última franja de noche retirándose por el borde superior del cuadro.",
    fin: "la franja de noche se retiró del todo y el cielo quedó limpio de lado a lado, con el agua rizada y la niebla subiendo de la laguna.",
  }, "personas, animales, casas, humo, sol dibujado"),

  // b8 — Después creó las aguas, las semillas y las gentes. Sol y luna.
  esc("b8a", [ref("semillas_bolsita"), ref("sabana_cultivos")], {
    comun: "PLANO DETALLE, luz limpia de día nuevo. LA MISMA bolsita de semillas de la referencia volcada sobre la tierra húmeda de LOS MISMOS cultivos de la referencia; detrás y en sombra, el agua de una acequia. Capa de primer plano: la boca de la bolsita. Objeto ancla: las semillas.",
    ini: "las semillas están rodando todavía, apretadas unas contra otras junto a la boca de la bolsita.",
    fin: "las semillas terminaron de rodar y quedaron quietas y repartidas sobre la tierra, cada una en su hueco, con el agua corriendo detrás.",
  }, "manos, personas, brotes ya crecidos, flores, sol"),
  esc("b8b", [ref("altiplano_noche"), ref("madre_chia")], {
    comun: "GRAN PLANO GENERAL, cielo de tarde tardía sobre EL MISMO altiplano de la referencia: el sol por un borde del cuadro y la luna por el otro, los dos pequeños y sin dominar la escena. Llegan los últimos, no los primeros. Capa de primer plano: una loma en sombra. Objeto ancla: los dos discos.",
    ini: "están a la misma altura aparente, el sol bajando y la luna subiendo.",
    fin: "el sol bajó hasta rozar el horizonte y la luna quedó claramente más alta que él, con el cielo cambiado de tono entre los dos.",
  }, "sol enorme, rayos dibujados, cara en el sol o en la luna, personas, eclipse"),

  // b9 — La luz es más antigua. Las aves no se fueron.
  esc("b9a", [ref("mundo_primera_luz")], {
    comun: "GRAN PLANO GENERAL, luz plena y serena del mundo ya hecho. EL MISMO paisaje de la referencia entero y visible —montes, agua, pasto—. Capa de primer plano: pasto a contraluz. Objeto ancla: la hebra de aliento.",
    ini: "sobre el valle queda todavía suspendida una última hebra de aliento resplandeciente, entera.",
    fin: "la hebra se deshizo en jirones y casi se disolvió en el aire; del prodigio más antiguo ya no queda casi nada sobre el valle.",
  }, "personas, sol, aves, casas, humo, texto"),
  esc("b9b", [ref("ave_primigenia"), ref("altiplano_noche")], {
    comun: "PLANO GENERAL en contrapicado, cielo de atardecer con la noche volviendo por un lado. DOS de LAS MISMAS aves negras de la referencia cruzando alto y tranquilas, recortadas contra el cielo que se apaga; no huyen ni amenazan, simplemente siguen en el mundo. Capa de primer plano: la copa de un árbol en sombra. Objeto ancla: las dos aves.",
    ini: "van por el centro del cuadro, con el cielo todavía claro a su alrededor.",
    fin: "las aves se corrieron hasta el borde del cuadro y están a punto de salir de él, con la noche ya avanzada por detrás.",
  }, "bandada de terror, cuervos siniestros, tormenta, personas, mal agüero"),
]);
