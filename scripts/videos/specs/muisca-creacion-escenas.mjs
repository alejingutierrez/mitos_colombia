// Keyframes de La creación muisca — 9 bloques × 2 escenas × 2 cuadros = 36 imágenes ≈ 90 s.
// Guion: guion-creacion-muiscas-v2.json (N=9) · Acta: acta-creacion-muiscas.json
// DOCTRINA v3: cada escena es un par A→B (ver _muisca-comun.mjs).
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

import { DIRECCION, AVOID_BASE, ref, esc, escp, armar } from "./_muisca-comun.mjs";

export const SPEC_NAME = "muisca-creacion-escenas";
export const OUT_DIR = "muiscas/videos/creacion-muiscas/keyframes";
export { DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; cualquier figura, rostro o silueta que represente a Chiminigagua; dios antropomorfo; aves de mal agüero o cuervos siniestros; serpientes monstruosas, colmillos, lenguas bifidas amenazantes; ahogamiento, arrastre o violencia en el agua; llanto, duelo o funeral; ninos recien nacidos o bebes de pecho";
export const PALETTE =
  "negro de noche sin sombra, gris de ceniza, blanco calido de aliento, azul mineral de laguna de paramo, verde de frailejon, crema de algodon crudo, ocre de paja y fogon; sin saturacion";

export const ITEMS = armar([
  // b1 — Noche sin sombra. Chiminigagua mostró su claridad; salieron aves negras.
  esc("b1a", [ref("altiplano_noche")], {
    comun: "GRAN PLANO GENERAL, negro casi total. EL MISMO altiplano de la referencia en una noche tan completa que NADA proyecta sombra: las lomas de papel negro se distinguen apenas unas de otras y no hay una sola sombra dibujada en ninguna parte, porque no hay de dónde. Capa de primer plano: el filo de una loma. Objeto ancla: la ausencia de sombra.",
    ini: "los planos del paisaje están pegados unos a otros y no se distingue cuál está delante.",
    fin: "una claridad muy débil entró por un borde y los planos se separaron lo justo para leerse uno detrás de otro, sin que ninguno proyecte todavía sombra.",
  }, "luna, estrellas, fuego, sombras dibujadas, personas, figura divina, sol"),
  esc("b1b", [ref("ave_primigenia"), ref("altiplano_noche")], {
    comun: "PLANO MEDIO, gris ceniza naciente. DOS de LAS MISMAS aves primigenias de la referencia, grandes y negras, saliendo de la oscuridad hacia el frente; están hechas del mismo papel negro que la noche y apenas se separan de ella. No son aves de agüero: son la noche que tomó cuerpo. Capa de primer plano: una piedra oscura. Objeto ancla: el ala que se separa del fondo.",
    ini: "tienen las alas a media apertura y el cuerpo todavía confundido con el fondo.",
    fin: "terminaron de abrir las alas y se impulsaron hacia el frente: sus siluetas quedaron recortadas y despegadas de la noche, que se movió detrás.",
  }, "cuervos siniestros, ojos rojos, calaveras, mal agüero, bandada de terror"),

  // b2 — Recibieron la tarea. Por los picos soltaron un aliento resplandeciente.
  esc("b2a", [ref("ave_primigenia")], {
    comun: "PRIMER PLANO de la cabeza de UNA MISMA ave de la referencia contra el negro, de perfil. El resto del ave sigue siendo noche. Capa de primer plano: el borde del pico. Objeto ancla: el hilo de aliento.",
    ini: "el pico empieza a abrirse y asoma el primer hilo de aliento blanco y luminoso, todavía corto.",
    fin: "el pico quedó abierto del todo y el aliento salió entero y alargado hacia adelante, cruzando el cuadro como una hebra de luz.",
  }, "fuego en la boca, llamas, humo, ojos brillantes, monstruo"),
  esc("b2b", [ref("ave_primigenia"), ref("altiplano_noche")], {
    comun: "GRAN PLANO GENERAL en contrapicado, negro con los primeros trazos claros. LAS MISMAS aves de la referencia en vuelo, repartiéndose hacia los cuatro lados del cuadro y dejando cada una su estela de aliento. Capa de primer plano: una cresta en negro. Objeto ancla: las estelas.",
    ini: "las aves van todavía juntas hacia el centro y las estelas son cortas, apenas dibujadas.",
    fin: "las aves se alejaron hacia las esquinas y las estelas se alargaron hasta cruzar el cuadro entero, dejando el cielo negro rayado de claro.",
  }, "fuegos artificiales, cometas, rayos, personas, sol"),

  // b3 — Aparecieron los filos de los montes y el brillo de las lagunas.
  esc("b3a", [ref("piedras_funza"), ref("ave_primigenia")], {
    comun: "GRAN PLANO GENERAL, luz naciente rasante, sobre una cordillera de papel que estaba en masa negra. La materia ya estaba; lo que llega es poder verla. Capa de primer plano: una cresta aún oscura. Objeto ancla: la frontera entre lo indistinto y lo que ya tiene filo.",
    ini: "sólo las crestas de un lado del cuadro han cobrado canto y sombra; el otro lado sigue indistinto.",
    fin: "el filo avanzó por la cordillera y ya casi todas las crestas están separadas del fondo, quedando apenas un rincón indistinto.",
  }, "creacion por magia, manos moldeando, personas, sol, rayos"),
  esc("b3b", [ref("laguna_iguaque_A"), ref("ave_primigenia")], {
    comun: "PLANO GENERAL BAJO a ras del agua, gris que se abre. LA MISMA laguna de la referencia devolviendo el PRIMER reflejo del aliento que pasa alto. Cuando vuelva el silencio habrá forma. Capa de primer plano: frailejones oscuros. Objeto ancla: la franja de agua que brilla.",
    ini: "la superficie negra tiene brillo sólo en una franja estrecha y el resto sigue apagado.",
    fin: "el brillo se extendió por casi toda el agua, que quedó rizada y devolviendo luz, mientras el ave sale por el borde del cuadro.",
  }, "personas, barcas, peces, salpicaduras, sol"),

  // b4 — Nadie caminaba. En Iguaque, una laguna escondida entre neblinas.
  esc("b4a", [ref("sabana_cultivos"), ref("piedras_funza")], {
    comun: "GRAN PLANO GENERAL, luz de día ya hecho pero sin nadie. EL MISMO valle de la referencia entero y visible —pasto, piedra, agua— y completamente VACÍO de gente: ni casas, ni humos, ni caminos, ni huellas. El encuadre está construido para que la falta se note. Capa de primer plano: pasto alto. Objeto ancla: el valle sin una sola huella.",
    ini: "el pasto está quieto y el valle entero recibe luz pareja.",
    fin: "el viento recorrió el pasto en una oleada y la sombra de una nube cruzó medio valle, que sigue sin una sola huella.",
  }, "personas, casas, humo, caminos, animales domesticos, cultivos"),
  esc("b4b", [ref("laguna_iguaque_pano"), ref("laguna_iguaque_B")], {
    comun: "PLANO GENERAL, sierra fría con neblina espesa de papel. LA MISMA laguna de Iguaque de la referencia entre los frailejones. Está escondida y todavía no ha pasado nada. Capa de primer plano: frailejones en sombra. Objeto ancla: el trozo de agua que asoma.",
    ini: "la neblina la tapa casi entera y sólo deja ver un trozo pequeño de agua quieta.",
    fin: "la neblina se abrió y descubrió más de media laguna, lisa y quieta, antes de empezar a cerrarse otra vez por un lado.",
  }, "personas, figuras en el agua, monstruos, sol, dramatismo"),

  // b5 — Se abrió y salió Bachué con un niño de la mano. (NO repetir bachue)
  escp("b5a", [ref("kf_b2_emerge"), ref("laguna_iguaque_B")], {
    comun: "PLANO GENERAL LARGO desde detrás, luz fría de mañana, las figuras pequeñas y DE ESPALDAS a la cámara. LA MISMA mujer de la referencia YA EN LA ORILLA de LA MISMA laguna de la referencia, de pie sobre la hierba y con su manta puesta, llevando de la mano a un niño pequeño que también está en tierra y vestido con su manta; detrás de ellos el agua queda lisa. Capa de primer plano: frailejones en sombra. Objeto ancla: las dos manos unidas.",
    ini: "están quietos mirando hacia el valle que se abre delante.",
    fin: "dieron los primeros pasos hacia el valle y se ven algo más lejos, todavía de la mano, con las mantas ondeando y la niebla abriéndose delante de ellos.",
  }, "primeros planos, rostros, figuras dentro del agua, cuerpos mojados, desnudez, bebe en brazos, multitud esperando"),
  escp("b5b", [ref("casa_barro_paja"), ref("bachue_adulta"), ref("companero_adulto")], {
    comun: "PLANO GENERAL, luz abierta de día. LA MISMA Bachué adulta de la referencia y EL MISMO compañero adulto de la referencia levantando entre los dos el armazón de UNA MISMA casa de barro y paja de la referencia, que está a medio hacer. Capa de primer plano: un haz de paja en el suelo. Objeto ancla: el palo.",
    ini: "sostienen el palo en vertical, inclinado, y todavía no lo han encajado.",
    fin: "encajaron el palo en su sitio y lo han soltado: el armazón quedó de pie, con el polvo levantado y la paja del techo movida.",
  }, "casa ya terminada, ceremonia, adoracion, multitud, herramientas metalicas"),

  // b6 — Tuvieron hijos, y los hijos otros hijos, que aprendieron a labrar.
  escp("b6a", [ref("familias_muiscas"), ref("casa_barro_paja")], {
    comun: "PLANO MEDIO LARGO, luz cálida de media tarde. Un grupo de LAS MISMAS familias de la referencia delante de LA MISMA casa de la referencia, en plena actividad y a distintas edades; nadie posa. Capa de primer plano: el haz en el suelo. Objeto ancla: la manta que se tiende.",
    ini: "una mujer está tendiendo una manta a medio extender, un hombre sostiene un haz en alto y dos jóvenes hablan.",
    fin: "la manta quedó extendida del todo y ondea, el haz cayó en su sitio junto a la pared y los dos jóvenes se han movido un paso.",
  }, "retrato de familia posando, ceremonia, bebes, llanto, violencia"),
  escp("b6b", [ref("piraca_labrador"), ref("sabana_cultivos")], {
    comun: "PLANO MEDIO, luz de mañana. EL MISMO labrador de la referencia, de espaldas y agachado, abriendo un surco nuevo en LOS MISMOS cultivos de la referencia con una coa de madera. Capa de primer plano: la tierra removida. Objeto ancla: la punta de la coa.",
    ini: "la punta está entrando en la tierra y el terrón todavía no se ha volteado.",
    fin: "el terrón se volteó y la tierra cayó al lado del surco, con él medio paso más adelante y la coa ya fuera.",
  }, "herramientas metalicas, arados, bueyes, rostro de frente, esfuerzo teatral"),

  // b7 — Se oyeron herramientas. Subió el humo de los fogones.
  escp("b7a", [ref("familias_muiscas"), ref("telar_marco"), ref("patio_cuca")], {
    comun: "PLANO MEDIO, luz de patio a media mañana. Dos personas de LAS MISMAS familias de la referencia trabajando a la vez ante EL MISMO telar de la referencia: una pasa la trama y otra, detrás, golpea una piedra contra otra. Donde sólo se oía el viento ahora se oye trabajo. Capa de primer plano: los hilos tensos del telar. Objeto ancla: el hilo de la trama.",
    ini: "el hilo va a medio cruzar la urdimbre y la piedra está levantada sin haber golpeado.",
    fin: "el hilo terminó de cruzar y quedó asentado contra la trama anterior, y la piedra golpeó abajo levantando una nube corta de polvo.",
  }, "maquinas, ruedas, herramientas metalicas, fabrica, multitud"),
  esc("b7b", [ref("poblado_nuevo"), ref("altiplano_noche")], {
    comun: "GRAN PLANO GENERAL, luz de atardecer. EL MISMO poblado nuevo de la referencia con los primeros humos subiendo de los techos de paja. Es la primera vez que el valle tiene humo. Capa de primer plano: el filo de un techo. Objeto ancla: el humo.",
    ini: "dos hilos finos de humo ya están arriba y un tercero apenas empieza a salir de su techo.",
    fin: "el tercer hilo subió hasta la altura de los otros dos y los tres se inclinan juntos con el aire, con la luz de la tarde un punto más baja.",
  }, "incendio, humo negro, ruinas, personas en primer plano, guerra"),

  // b8 — Ya viejos volvieron a Iguaque. (CITA: no olviden el agua)
  escp("b8a", [ref("bachue_anciana"), ref("companero_anciano"), ref("familias_muiscas"), ref("sendero_territorio")], {
    comun: "PLANO GENERAL, luz de tarde larga. LA MISMA Bachué anciana de la referencia y EL MISMO compañero anciano de la referencia caminando delante por EL MISMO sendero de la referencia, y detrás, en fila y a distancia respetuosa, gente de LAS MISMAS familias de la referencia que los acompaña. Nadie llora ni los empuja. Capa de primer plano: pasto del borde. Objeto ancla: el camino que les queda.",
    ini: "van a media subida y les queda un buen trecho hasta la laguna.",
    fin: "la comitiva subió hasta cerca del filo y se ve más pequeña contra la sierra, con las mantas ondeando y la niebla bajando a su encuentro.",
  }, "llanto, duelo, funeral, ataudes, violencia, arrastre, multitud descontrolada"),
  escp("b8b", [ref("bachue_anciana"), ref("laguna_iguaque_B")], {
    comun: "PLANO MEDIO, luz fría de la sierra. LA MISMA Bachué anciana de la referencia de pie en la orilla de LA MISMA laguna de la referencia, con el agua detrás y el pie aún sin entrar. Capa de primer plano: juncos de la orilla. Objeto ancla: su cara.",
    ini: "está girándose a medias hacia los que la siguieron, con la boca abriéndose para decirles lo último.",
    fin: "terminó de girarse hacia ellos y habla, con el pelo blanco movido y una lengua de niebla pasando entre ella y el agua.",
  }, "llanto, adoracion, arrodillarse, milagro, resplandor, agua violenta"),

  // b9 — Sus cuerpos se volvieron serpientes. El agua quedó entera.
  esc("b9a", [ref("serpientes_laguna"), ref("laguna_iguaque_B")], {
    comun: "PLANO MEDIO BAJO a ras del agua, luz fría. LAS MISMAS serpientes de la referencia entrando en el agua de LA MISMA laguna de la referencia, dos cuerpos largos y tranquilos. No hay violencia ni amenaza: se van a casa. Capa de primer plano: juncos en sombra. Objeto ancla: las dos estelas.",
    ini: "están a medio sumergir y dejan dos estelas paralelas abiertas en la superficie.",
    fin: "terminaron de sumergirse y ya no se ven: sólo quedan las dos estelas cerrándose sobre el sitio por donde entraron.",
  }, "monstruos, colmillos, lenguas bifidas, ataque, sangre, personas gritando"),
  esc("b9b", [ref("laguna_iguaque_pano"), ref("ave_primigenia"), ref("sendero_territorio")], {
    comun: "GRAN PLANO GENERAL final con TRES CAPAS a la vez, primera luz limpia: abajo, LA MISMA laguna de la referencia entera y lisa, como si nada hubiera salido nunca de ella; arriba y pequeñas, DOS de LAS MISMAS aves negras de la referencia cruzando el cielo; y delante, bajando de la sierra, EL MISMO sendero de la referencia abierto hacia el valle habitado. No es un final triste. Capa de primer plano: frailejones. Objeto ancla: el agua entera.",
    ini: "el agua tiene todavía un rizo largo y la niebla cubre el arranque del sendero.",
    fin: "el agua se alisó del todo y quedó como un espejo, las aves se corrieron al otro lado del cielo y la niebla se abrió dejando ver el sendero entero bajando al valle.",
  }, "personas, tumbas, luto, texto, simbolos, agua agitada"),
]);
