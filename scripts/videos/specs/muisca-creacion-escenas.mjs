// Keyframes de La creación muisca — 9 bloques × 2 = 18 cuadros ≈ 90 s.
// Guion: guion-creacion-muiscas-v2.json (N=9) · Acta: acta-creacion-muiscas.json
//
// DESLINDES DEL ACTA:
// · Esta ficha NO es `chiminigagua` ni `bachue` (video YA PRODUCIDO): es la
//   COSTURA entre los dos orígenes. Por eso el video cruza las dos materias en
//   vez de repetir ninguna, y no reproduce los encuadres de bachue.
// · Chiminigagua NO TIENE FORMA: ninguna escena le da cuerpo.
// · Las aves NO crean la tierra: la REVELAN. La materia ya estaba.
// · Bachué NO sale sola: sale llevando de la mano a un NIÑO PEQUEÑO, que
//   después será su compañero. El relato no lo esconde y el guion tampoco.
// · La despedida NO es castigo ni huida: son viejos, la tierra ya está
//   habitada, y mucha gente los acompaña hasta la laguna.
// · El cierre NO es triste: el agua queda entera, arriba siguen las aves y
//   delante se abren los caminos. Las tres capas van en el último cuadro.
//
// GUION DE LUZ: noche sin sombra → aliento naciente → filos apareciendo →
// neblina de Iguaque → mañana del agua abierta → días de casa → humo de
// fogones → tarde de vuelta → agua entera al amanecer.

import { DIRECCION, VESTUARIO, AVOID_BASE, ref, mkKf, mkKfp } from "./_muisca-comun.mjs";

export const SPEC_NAME = "muisca-creacion-escenas";
export const OUT_DIR = "muiscas/videos/creacion-muiscas/keyframes";
export { DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; cualquier figura, rostro o silueta que represente a Chiminigagua; dios antropomorfo; aves de mal agüero o cuervos siniestros; serpientes monstruosas, colmillos, lenguas bifidas amenazantes; ahogamiento, arrastre o violencia en el agua; llanto, duelo o funeral; ninos recien nacidos o bebes de pecho";
export const PALETTE =
  "negro de noche sin sombra, gris de ceniza, blanco calido de aliento, azul mineral de laguna de paramo, verde de frailejon, crema de algodon crudo, ocre de paja y fogon; sin saturacion";

const kf = mkKf(), kfp = mkKfp();

export const ITEMS = [
  // b1 — Noche sin sombra. Chiminigagua mostró su claridad; salieron aves negras.
  kf("b1a", [ref("altiplano_noche")],
    "GRAN PLANO GENERAL, negro casi total. EL MISMO altiplano de la referencia en una noche tan completa que NADA proyecta sombra: las lomas de papel negro se distinguen apenas unas de otras y no hay una sola sombra dibujada en ninguna parte, porque no hay de dónde. SE MOVERÁ: una claridad muy débil empieza a insinuarse por un borde y los planos se separan un poco. Capa de primer plano: el filo de una loma. Objeto ancla: la ausencia de sombra.",
    "luna, estrellas, fuego, sombras dibujadas, personas, figura divina, sol"),
  kf("b1b", [ref("ave_primigenia"), ref("altiplano_noche")],
    "PLANO MEDIO, gris ceniza naciente. DOS de LAS MISMAS aves primigenias de la referencia, grandes y negras, SALIENDO de la oscuridad hacia el frente: están hechas del mismo papel negro que la noche y apenas se separan de ella, con las alas a media apertura. No son aves de agüero: son la noche que tomó cuerpo. SE MOVERÁ: terminan de abrir las alas y se impulsan hacia el frente, la noche se mueve detrás. Capa de primer plano: una piedra oscura. Objeto ancla: el ala que se separa del fondo.",
    "cuervos siniestros, ojos rojos, calaveras, mal agüero, bandada de terror"),

  // b2 — Recibieron la tarea. Por los picos soltaron un aliento resplandeciente.
  kf("b2a", [ref("ave_primigenia")],
    "PRIMER PLANO de la cabeza de UNA MISMA ave de la referencia contra el negro, de perfil. El pico EMPIEZA A ABRIRSE y asoma el primer hilo de aliento blanco y luminoso, todavía corto. El resto del ave sigue siendo noche. SE MOVERÁ: el pico se abre del todo y el aliento sale y se alarga hacia adelante. Capa de primer plano: el borde del pico. Objeto ancla: el hilo de aliento naciendo.",
    "fuego en la boca, llamas, humo, ojos brillantes, monstruo"),
  kf("b2b", [ref("ave_primigenia"), ref("altiplano_noche")],
    "GRAN PLANO GENERAL en contrapicado, negro con los primeros trazos claros. LAS MISMAS aves de la referencia ya en vuelo, repartiéndose hacia los cuatro lados del cuadro y dejando cada una una estela corta de aliento que apenas empieza a dibujarse. Queda cielo negro por delante de todas. SE MOVERÁ: las aves se alejan y las estelas se alargan hasta cruzar el cuadro. Capa de primer plano: una cresta en negro. Objeto ancla: las estelas empezando.",
    "fuegos artificiales, cometas, rayos, personas, sol"),

  // b3 — Aparecieron los filos de los montes y el brillo de las lagunas.
  kf("b3a", [ref("piedras_funza"), ref("ave_primigenia")],
    "GRAN PLANO GENERAL, luz naciente rasante. Una cordillera de papel que estaba en masa negra y donde el aliento ya pasó EMPIEZA A TENER FILO: las crestas cobran canto y sombra por un lado del cuadro mientras el otro sigue indistinto. La materia ya estaba; lo que llega es poder verla. SE MOVERÁ: el filo avanza por la cordillera y más crestas se separan del fondo. Capa de primer plano: una cresta aún oscura. Objeto ancla: la frontera entre lo indistinto y lo que ya tiene filo.",
    "creacion por magia, manos moldeando, personas, sol, rayos"),
  kf("b3b", [ref("laguna_iguaque_A"), ref("ave_primigenia")],
    "PLANO GENERAL BAJO a ras del agua, gris que se abre. LA MISMA laguna de la referencia devolviendo el PRIMER reflejo del aliento que pasa alto: la superficie negra empieza a tener brillo por una franja y el resto sigue apagado. Cuando vuelva el silencio habrá forma. SE MOVERÁ: el brillo se extiende por el agua y el agua se riza, el ave sale de cuadro. Capa de primer plano: frailejones oscuros. Objeto ancla: la franja de agua que brilla.",
    "personas, barcas, peces, salpicaduras, sol"),

  // b4 — Nadie caminaba. En Iguaque, una laguna escondida entre neblinas.
  kf("b4a", [ref("sabana_cultivos"), ref("piedras_funza")],
    "GRAN PLANO GENERAL, luz de día ya hecho pero sin nadie. EL MISMO valle de la referencia entero y visible —pasto, piedra, agua— y completamente VACÍO de gente: ni casas, ni humos, ni caminos, ni huellas. El encuadre está construido para que la falta se note. SE MOVERÁ: el viento recorre el pasto en oleada y las nubes cruzan su sombra por el valle. Capa de primer plano: pasto alto. Objeto ancla: el valle sin una sola huella.",
    "personas, casas, humo, caminos, animales domesticos, cultivos"),
  kf("b4b", [ref("laguna_iguaque_pano"), ref("laguna_iguaque_B")],
    "PLANO GENERAL, sierra fría con neblina espesa. LA MISMA laguna de Iguaque de la referencia casi tapada por la neblina de papel, que se mueve y deja ver apenas un trozo de agua quieta entre los frailejones. Está escondida y todavía no ha pasado nada. SE MOVERÁ: la neblina se abre un poco más y descubre más agua, luego vuelve a cerrarse. Capa de primer plano: frailejones en sombra. Objeto ancla: el trozo de agua que asoma.",
    "personas, figuras en el agua, monstruos, sol, dramatismo"),

  // b5 — Se abrió y salió Bachué con un niño de la mano. (NO repetir bachue)
  kfp("b5a", [ref("kf_b2_emerge"), ref("laguna_iguaque_B")],
    "PLANO GENERAL LARGO desde detrás, luz fría de mañana, las figuras pequeñas y DE ESPALDAS a la cámara. LA MISMA mujer de la referencia YA EN LA ORILLA de LA MISMA laguna de la referencia, de pie sobre la hierba y con su manta puesta, LLEVANDO DE LA MANO a un niño pequeño que también está en tierra y vestido con su manta; los dos miran hacia el valle que se abre delante. Detrás de ellos el agua queda lisa. SE MOVERÁ: los dos empiezan a caminar hacia el valle, las mantas ondean, la niebla se abre delante. Capa de primer plano: frailejones en sombra. Objeto ancla: las dos manos unidas.",
    "primeros planos, rostros, figuras dentro del agua, cuerpos mojados, desnudez, bebe en brazos, multitud esperando"),
  kfp("b5b", [ref("casa_barro_paja"), ref("bachue_adulta"), ref("companero_adulto")],
    "PLANO GENERAL, luz abierta de día. LA MISMA Bachué adulta de la referencia y EL MISMO compañero adulto de la referencia LEVANTANDO entre los dos el armazón de UNA MISMA casa de barro y paja de la referencia: sostienen un palo en vertical y todavía no lo han fijado. La casa está a medio hacer. SE MOVERÁ: terminan de alzar el palo y lo encajan, el polvo se levanta, la paja del techo se mueve. Capa de primer plano: un haz de paja en el suelo. Objeto ancla: el palo a medio alzar.",
    "casa ya terminada, ceremonia, adoracion, multitud, herramientas metalicas"),

  // b6 — Tuvieron hijos, y los hijos otros hijos, que aprendieron a labrar.
  kfp("b6a", [ref("familias_muiscas"), ref("casa_barro_paja")],
    "PLANO MEDIO LARGO, luz cálida de media tarde. Un grupo de LAS MISMAS familias de la referencia delante de LA MISMA casa de la referencia, en plena actividad y a distintas edades: una mujer TENDIENDO una manta que aún está a medio extender, un hombre acomodando un haz, dos jóvenes hablando. Nadie posa. SE MOVERÁ: la manta termina de extenderse y ondea, el haz cae en su sitio, el grupo se mueve. Capa de primer plano: el haz en el suelo. Objeto ancla: la manta subiendo.",
    "retrato de familia posando, ceremonia, bebes, llanto, violencia"),
  kfp("b6b", [ref("piraca_labrador"), ref("sabana_cultivos")],
    "PLANO MEDIO, luz de mañana. EL MISMO labrador de la referencia, de espaldas y agachado, ABRIENDO un surco nuevo en LOS MISMOS cultivos de la referencia con una coa de madera: la punta está entrando en la tierra y el terrón todavía no se ha volteado. SE MOVERÁ: el terrón se voltea, la tierra cae, él avanza medio paso. Capa de primer plano: la tierra removida. Objeto ancla: la punta de la coa entrando.",
    "herramientas metalicas, arados, bueyes, rostro de frente, esfuerzo teatral"),

  // b7 — Se oyeron herramientas. Subió el humo de los fogones.
  kfp("b7a", [ref("familias_muiscas"), ref("telar_marco"), ref("patio_cuca")],
    "PLANO MEDIO, luz de patio a media mañana. Dos personas de LAS MISMAS familias de la referencia trabajando a la vez: una PASANDO la trama por EL MISMO telar de la referencia con el hilo a medio cruzar, otra detrás golpeando una piedra contra otra. Donde sólo se oía el viento ahora se oye trabajo. SE MOVERÁ: el hilo termina de cruzar la urdimbre, la piedra golpea, el polvo salta. Capa de primer plano: los hilos tensos del telar. Objeto ancla: el hilo a medio cruzar.",
    "maquinas, ruedas, herramientas metalicas, fabrica, multitud"),
  kf("b7b", [ref("poblado_nuevo"), ref("altiplano_noche")],
    "GRAN PLANO GENERAL, luz de atardecer. EL MISMO poblado nuevo de la referencia con los primeros humos SUBIENDO de los techos de paja: dos hilos finos ya están arriba y un tercero apenas empieza a salir. Es la primera vez que el valle tiene humo. SE MOVERÁ: el tercer hilo de humo sube y se inclina con el aire, la luz baja un punto. Capa de primer plano: el filo de un techo. Objeto ancla: el humo que empieza a salir.",
    "incendio, humo negro, ruinas, personas en primer plano, guerra"),

  // b8 — Ya viejos volvieron a Iguaque. (CITA: no olviden el agua)
  kfp("b8a", [ref("bachue_anciana"), ref("companero_anciano"), ref("familias_muiscas"), ref("sendero_territorio")],
    "PLANO GENERAL, luz de tarde larga. LA MISMA Bachué anciana de la referencia y EL MISMO compañero anciano de la referencia caminando delante por EL MISMO sendero de la referencia, y detrás, en fila y a distancia respetuosa, gente de LAS MISMAS familias de la referencia que los acompaña; van a media subida y les queda camino hasta la laguna. Nadie llora ni los empuja. SE MOVERÁ: la comitiva sigue subiendo por el sendero, las mantas ondean, la niebla baja a su encuentro. Capa de primer plano: pasto del borde. Objeto ancla: el camino que les queda.",
    "llanto, duelo, funeral, ataudes, violencia, arrastre, multitud descontrolada"),
  kfp("b8b", [ref("bachue_anciana"), ref("laguna_iguaque_B")],
    "PLANO MEDIO, luz fría de la sierra. LA MISMA Bachué anciana de la referencia de pie en la orilla de LA MISMA laguna de la referencia, GIRÁNDOSE a medias hacia los que la siguieron, con la boca abriéndose para decirles lo último; el agua le queda detrás y el pie aún no ha entrado. SE MOVERÁ: termina de girarse y habla, el pelo blanco se mueve, la niebla pasa entre ella y el agua. Capa de primer plano: juncos de la orilla. Objeto ancla: su cara girándose.",
    "llanto, adoracion, arrodillarse, milagro, resplandor, agua violenta"),

  // b9 — Sus cuerpos se volvieron serpientes. El agua quedó entera.
  kf("b9a", [ref("serpientes_laguna"), ref("laguna_iguaque_B")],
    "PLANO MEDIO BAJO a ras del agua, luz fría. LAS MISMAS serpientes de la referencia ENTRANDO en el agua de LA MISMA laguna de la referencia: dos cuerpos largos y tranquilos a medio sumergir, dejando dos estelas paralelas en la superficie. No hay violencia ni amenaza: se van a casa. SE MOVERÁ: terminan de sumergirse y las dos estelas se cierran sobre ellas. Capa de primer plano: juncos en sombra. Objeto ancla: las dos estelas.",
    "monstruos, colmillos, lenguas bifidas, ataque, sangre, personas gritando"),
  kf("b9b", [ref("laguna_iguaque_pano"), ref("ave_primigenia"), ref("sendero_territorio")],
    "GRAN PLANO GENERAL final con TRES CAPAS a la vez, primera luz limpia: abajo, LA MISMA laguna de la referencia entera y lisa, como si nada hubiera salido nunca de ella; arriba y pequeñas, DOS de LAS MISMAS aves negras de la referencia cruzando el cielo; y delante, bajando de la sierra, EL MISMO sendero de la referencia abierto hacia el valle habitado. No es un final triste. SE MOVERÁ: el agua se riza y vuelve a alisarse, las aves cruzan, la niebla se abre sobre el sendero. Capa de primer plano: frailejones. Objeto ancla: el agua entera.",
    "personas, tumbas, luto, texto, simbolos, agua agitada"),
];
