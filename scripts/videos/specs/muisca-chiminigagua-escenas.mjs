// Keyframes de Chiminigagua — 9 bloques × 2 = 18 cuadros ≈ 90 s.
// Guion: guion-chiminigagua-v2.json (N=9) · Acta: acta-chiminigagua.json
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

import { DIRECCION, VESTUARIO, AVOID_BASE, ref, mkKf, mkKfp } from "./_muisca-comun.mjs";

export const SPEC_NAME = "muisca-chiminigagua-escenas";
export const OUT_DIR = "muiscas/videos/chiminigagua/keyframes";
export { DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; cualquier figura, rostro, silueta, mano, ojo o presencia que represente a Chiminigagua; dios antropomorfo; rayos de sol dibujados; hogueras, antorchas, fuego; manantiales o chorros de agua como metafora de la luz; aves de mal agüero, calaveras, cuervos siniestros";
export const PALETTE =
  "negro de noche sin fondo, gris de ceniza, blanco calido de aliento luminoso, azul mineral de laguna, verde muy apagado; el oro solo como resplandor, nunca como objeto; sin saturacion";

const kf = mkKf(), kfp = mkKfp();

export const ITEMS = [
  // b1 — Sólo había noche y dentro estaba encerrada la luz.
  kf("b1a", [ref("altiplano_noche")],
    "GRAN PLANO GENERAL, negro casi total. EL MISMO altiplano de la referencia en una noche tan cerrada que apenas se adivinan los filos de las lomas como capas de papel negro sobre papel negro; ni luna, ni estrellas, ni fuego. En el centro del cuadro, un punto de claridad tan débil que podría no estar. SE MOVERÁ: ese punto crece un poco y vuelve a menguar, la niebla negra se desliza sobre las lomas. Capa de primer plano: el filo de una loma. Objeto ancla: el punto de claridad.",
    "personas, animales, fuego, antorchas, luna, estrellas, rayos, figura divina"),
  kf("b1b", [ref("mundo_primera_luz")],
    "PLANO MEDIO del MISMO mundo en primera luz de la referencia, pero MUCHO más oscuro: la materia ya está ahí —piedra, agua, tierra— y no se ve casi nada de ella, sólo se intuye por contraste. La luz está encerrada dentro, no encima. SE MOVERÁ: un rescoldo interior late bajo la superficie y las formas asoman y se retiran. Capa de primer plano: una piedra negra. Objeto ancla: el resplandor que late por dentro.",
    "personas, sol, hoguera, manantial, rostro, ojos en la oscuridad"),

  // b2 — Chiminigagua comenzó a amanecer, abriéndose desde adentro.
  kf("b2a", [ref("mundo_primera_luz")],
    "PLANO MEDIO CERRADO, la luz ABRIÉNDOSE desde dentro de la materia: en EL MISMO paisaje primero de la referencia, las capas de papel empiezan a separarse por su propio canto y por la rendija sale claridad, como si el mundo se descosiera hacia afuera. No hay fuente, no hay foco, no hay llama: la luz viene de adentro y aún es poca. SE MOVERÁ: las rendijas se ensanchan y la claridad se derrama por los cantos. Capa de primer plano: un canto de papel iluminado por detrás. Objeto ancla: la primera rendija.",
    "hoguera, antorcha, sol, manantial, chorro de agua, figura, rostro, rayos dibujados"),
  kf("b2b", [ref("altiplano_noche"), ref("mundo_primera_luz")],
    "GRAN PLANO GENERAL, el negro empezando a tener grados. EL MISMO altiplano de la referencia donde la noche deja de ser una sola cosa: unas zonas siguen negras y otras son ya gris ceniza, y entre ellas se distingue por primera vez un horizonte. Todavía no hay nada iluminado, sólo hay diferencia. SE MOVERÁ: los grises se separan más del negro y el horizonte se afirma. Capa de primer plano: un borde de loma. Objeto ancla: la línea del horizonte apareciendo.",
    "sol, luna, estrellas, fuego, personas, figura divina, amanecer de colores"),

  // b3 — Lo primero fueron unas aves grandes y negras.
  kf("b3a", [ref("ave_primigenia"), ref("altiplano_noche")],
    "PLANO MEDIO, contraluz de gris ceniza. UNA MISMA ave primigenia de la referencia, grande y completamente negra, POSADA todavía sobre una piedra y ABRIENDO las alas por primera vez; está hecha del mismo papel negro que la noche de detrás y casi se confunde con ella. No es un ave de agüero: es la noche que tomó cuerpo. SE MOVERÁ: termina de abrir las alas y se impulsa, la noche de detrás se mueve con ella. Capa de primer plano: la piedra donde se posa. Objeto ancla: el ala que se abre.",
    "cuervo siniestro, calaveras, ojos rojos, mal agüero, sangre, bandada amenazante"),
  kf("b3b", [ref("ave_primigenia"), ref("mundo_primera_luz")],
    "PLANO GENERAL, gris muy bajo. VARIAS de LAS MISMAS aves de la referencia, tres o cuatro, apenas separadas del fondo negro, EMPEZANDO a levantarse de distintos puntos del suelo a la vez y con las alas a media apertura. Quedan arriba dos tercios de cuadro vacío hacia donde van a subir. SE MOVERÁ: las aves suben y se reparten hacia arriba del encuadre. Capa de primer plano: una piedra oscura. Objeto ancla: el aire vacío sobre ellas.",
    "bandada de terror, tormenta, relampagos, personas, dramatismo"),

  // b4 — «Por todas partes, echando por el pico el aliento que llevaban dentro». (CITA)
  kf("b4a", [ref("ave_primigenia")],
    "PRIMER PLANO de la cabeza de UNA MISMA ave de la referencia, de perfil contra el negro. El pico está EMPEZANDO A ABRIRSE y por la rendija asoma el primer hilo de un aliento blanco y luminoso, todavía corto, que aún no ha salido del todo. El resto del ave sigue siendo noche. SE MOVERÁ: el pico se abre del todo y el aliento sale y se alarga hacia adelante. Capa de primer plano: el borde del pico. Objeto ancla: el hilo de aliento naciendo.",
    "fuego en la boca, llamas, humo, ojos brillantes, monstruo"),
  kf("b4b", [ref("ave_primigenia"), ref("altiplano_noche")],
    "GRAN PLANO GENERAL en contrapicado, negro con los primeros trazos claros. LAS MISMAS aves de la referencia ya en vuelo y separándose hacia los cuatro lados del cuadro, cada una dejando tras el pico una estela corta de aliento resplandeciente que apenas empieza a dibujarse sobre la noche. SE MOVERÁ: las aves se alejan y las estelas se alargan y cruzan el cuadro. Capa de primer plano: una cresta de loma en negro. Objeto ancla: las estelas empezando.",
    "fuegos artificiales, cometas, rayos, personas, sol"),

  // b5 — Sus plumas eran del color de todo lo existente.
  kf("b5a", [ref("ave_primigenia")],
    "PLANO DETALLE del ala de UNA MISMA ave de la referencia cruzando el cuadro, con el aliento pasando por detrás: en las plumas de papel se están encendiendo, pluma por pluma, los colores de todo lo que existe —pardo de tierra, verde de monte, azul de agua, gris de piedra—, todavía sólo en una parte del ala; el resto sigue negro. SE MOVERÁ: el encendido recorre el ala de la base a la punta. Capa de primer plano: dos plumas en sombra. Objeto ancla: la frontera entre lo negro y lo encendido.",
    "arcoiris, neones, saturacion, plumas de pavo real, ave fenix, fuego"),
  kf("b5b", [ref("ave_primigenia"), ref("mundo_primera_luz")],
    "PLANO GENERAL, gris que se abre. Un ave de LAS MISMAS de la referencia pasa cerca y por delante de EL MISMO paisaje primero de la referencia, soltando el aliento resplandeciente: donde el aliento ya pasó, la piedra y el pasto tienen color; donde todavía no, siguen en gris. La frontera entre las dos mitades cruza el cuadro en diagonal. SE MOVERÁ: el ave avanza y la frontera de color barre el paisaje. Capa de primer plano: pasto gris aún sin luz. Objeto ancla: la línea entre lo gris y lo revelado.",
    "explosion de color, arcoiris, personas, sol, magia"),

  // b6 — Una cruzó los montes; otra bajó sobre las aguas.
  kf("b6a", [ref("ave_primigenia"), ref("piedras_funza")],
    "GRAN PLANO GENERAL, luz naciente rasante. UNA MISMA ave de la referencia cruzando ALTO sobre una cordillera de papel que todavía está en penumbra, con el aliento cayendo sobre las crestas: LAS MISMAS piedras de la referencia empiezan a tener filo y sombra donde antes eran una masa negra. SE MOVERÁ: el ave sigue cruzando y más crestas van cobrando filo detrás de ella. Capa de primer plano: una cresta aún oscura. Objeto ancla: la cresta que acaba de recibir la luz.",
    "personas, casas, sol en el cielo, rayos, nubes fotográficas"),
  kf("b6b", [ref("ave_primigenia"), ref("laguna_iguaque_A")],
    "PLANO GENERAL BAJO, a ras del agua. UNA MISMA ave de la referencia BAJANDO en picado suave hacia LA MISMA laguna de la referencia, todavía a media altura; debajo, el agua negra empieza a devolver el primer reflejo del aliento. El agua está aprendiendo a devolver la claridad. SE MOVERÁ: el ave baja, el reflejo se extiende por la superficie y el agua se riza. Capa de primer plano: juncos oscuros. Objeto ancla: el primer reflejo en el agua.",
    "personas, barcas, peces saltando, salpicaduras grandes, sol"),

  // b7 — Cosían la luz sobre lo oscuro, que se volvía piedra y laguna.
  kf("b7a", [ref("ave_primigenia"), ref("mundo_primera_luz")],
    "GRAN PLANO GENERAL en picado, mitad claro y mitad oscuro. DOS de LAS MISMAS aves de la referencia cruzando el cuadro en direcciones distintas, con sus dos estelas de aliento cruzándose como dos puntadas sobre la tela negra del mundo; en el cruce, el paisaje ya es piedra y laguna reconocibles, y alrededor sigue siendo noche. SE MOVERÁ: las dos estelas se alargan y la zona cosida se ensancha. Capa de primer plano: un borde negro sin coser. Objeto ancla: el punto donde se cruzan las dos estelas.",
    "hilos o agujas literales, costura visible, tela, telar, personas"),
  kf("b7b", [ref("laguna_iguaque_B"), ref("piedras_funza")],
    "PLANO GENERAL, luz pareja recién llegada. LA MISMA laguna de la referencia y LAS MISMAS piedras de la referencia ya completamente visibles y con color, quietas, con la última franja de noche retirándose por el borde superior del cuadro. El mundo quedó claro y no hay nadie todavía. SE MOVERÁ: la última franja de noche se retira del todo, el agua se riza, la niebla sube. Capa de primer plano: una piedra con musgo de papel. Objeto ancla: la franja de noche que se va.",
    "personas, animales, casas, humo, sol dibujado"),

  // b8 — Después creó las aguas, las semillas y las gentes. Sol y luna.
  kf("b8a", [ref("semillas_bolsita"), ref("sabana_cultivos")],
    "PLANO DETALLE, luz limpia de día nuevo. LA MISMA bolsita de semillas de la referencia volcada sobre la tierra húmeda de LOS MISMOS cultivos de la referencia, con las semillas RODANDO todavía y separándose unas de otras; detrás y desenfocado por la sombra, el agua de una acequia. SE MOVERÁ: las semillas terminan de rodar y se detienen, el agua corre detrás. Capa de primer plano: la boca de la bolsita. Objeto ancla: las semillas rodando.",
    "manos, personas, brotes ya crecidos, flores, sol"),
  kf("b8b", [ref("altiplano_noche"), ref("madre_chia")],
    "GRAN PLANO GENERAL, cielo de tarde tardía. Sobre EL MISMO altiplano de la referencia, el sol bajando por un borde del cuadro y la luna SUBIENDO por el otro, los dos pequeños y a la misma altura aparente, sin dominar la escena. Llegan los últimos, no los primeros. SE MOVERÁ: el sol baja un poco más y la luna sube, el cielo cambia de tono entre los dos. Capa de primer plano: una loma en sombra. Objeto ancla: los dos discos a la misma altura.",
    "sol enorme, rayos dibujados, cara en el sol o en la luna, personas, eclipse"),

  // b9 — La luz es más antigua. Las aves no se fueron.
  kf("b9a", [ref("mundo_primera_luz")],
    "GRAN PLANO GENERAL, luz plena y serena del mundo ya hecho. EL MISMO paisaje de la referencia entero y visible —montes, agua, pasto—, con una última hebra de aliento resplandeciente todavía suspendida en el aire sobre el valle, deshaciéndose despacio. Es lo que queda de lo más antiguo. SE MOVERÁ: la hebra se deshace y se disuelve en el aire, el paisaje respira. Capa de primer plano: pasto a contraluz. Objeto ancla: la hebra de aliento.",
    "personas, sol, aves, casas, humo, texto"),
  kf("b9b", [ref("ave_primigenia"), ref("altiplano_noche")],
    "PLANO GENERAL en contrapicado, cielo de atardecer con la noche volviendo por un lado. DOS de LAS MISMAS aves negras de la referencia cruzando alto y tranquilas, todavía aquí, recortadas contra el cielo que se apaga; no huyen ni amenazan, simplemente siguen en el mundo. SE MOVERÁ: las aves siguen cruzando y salen por el borde del cuadro, la noche avanza detrás. Capa de primer plano: la copa de un árbol en sombra. Objeto ancla: las dos aves cruzando.",
    "bandada de terror, cuervos siniestros, tormenta, personas, mal agüero"),
];
