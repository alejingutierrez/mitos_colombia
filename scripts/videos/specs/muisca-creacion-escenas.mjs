// Keyframes de La creación muisca — 9 bloques × 2 escenas × 2 cuadros = 36 imágenes ≈ 90 s.
// Guion: guion-creacion-muiscas-v2.json (N=9) · Acta: acta-creacion-muiscas.json
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _muisca-comun.mjs).
//
// DESLINDES DEL ACTA:
// · Esta ficha NO es `chiminigagua` ni `bachue` (video YA PRODUCIDO): es la
//   COSTURA entre los dos orígenes, y no reproduce los encuadres de bachue.
// · Chiminigagua NO TIENE FORMA: ninguna escena le da cuerpo.
// · Las aves NO crean la tierra: la REVELAN.
// · Bachué sale llevando de la mano a un NIÑO PEQUEÑO, que después será su
//   compañero. El relato no lo esconde y el guion tampoco.
// · La despedida NO es castigo ni huida: son viejos y los acompañan.
// · El cierre NO es triste: agua entera, aves arriba, caminos delante.

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
    comun: "Negro casi total. EL MISMO altiplano de la referencia en una noche tan completa que NADA proyecta sombra: las lomas de papel negro se distinguen apenas unas de otras y no hay una sola sombra dibujada, porque no hay de dónde. Objeto ancla: la ausencia de sombra.",
    camara: {
      a: "PLANO MEDIO pegado al filo de una loma, tan cerca que se ve el canto del papel negro.",
      b: "la cámara ha RETROCEDIDO y se ha elevado hasta un GRAN PLANO GENERAL del valle entero, todavía sin una sola sombra en ninguna parte.",
    },
    ini: "el canto de la loma se confunde con lo que hay detrás y no se sabe cuál está delante.",
    fin: "desde lejos una claridad muy débil ha entrado por un borde y los planos del valle se han separado lo justo para leerse uno detrás de otro, sin proyectar sombra ninguno.",
  }, "luna, estrellas, fuego, sombras dibujadas, personas, figura divina, sol"),
  esc("b1b", [ref("ave_primigenia"), ref("altiplano_noche")], {
    comun: "Gris ceniza naciente. DOS de LAS MISMAS aves primigenias de la referencia, grandes y negras, saliendo de la oscuridad; están hechas del mismo papel negro que la noche. No son aves de agüero: son la noche que tomó cuerpo. Objeto ancla: las alas.",
    camara: {
      a: "PLANO MEDIO frontal con las dos aves de frente sobre una piedra oscura y las alas a media apertura.",
      b: "la cámara ha RETROCEDIDO deprisa mientras ellas avanzan y ha bajado a ras de suelo: PLANO GENERAL en contrapicado con las dos aves pasando por encima del objetivo.",
    },
    ini: "tienen las alas a media apertura y el cuerpo confundido con el fondo.",
    fin: "han abierto las alas del todo y vuelan ya por encima de la cámara, recortadas y despegadas de la noche, con la piedra vacía abajo.",
  }, "cuervos siniestros, ojos rojos, calaveras, mal agüero, bandada de terror"),

  // b2 — Recibieron la tarea. Por los picos soltaron un aliento resplandeciente.
  esc("b2a", [ref("ave_primigenia")], {
    comun: "La cabeza de UNA MISMA ave de la referencia contra el negro. El resto del ave sigue siendo noche. Objeto ancla: el hilo de aliento.",
    camara: {
      a: "PRIMER PLANO de perfil, el borde del pico llenando el centro del cuadro.",
      b: "la cámara ha RETROCEDIDO siguiendo la hebra de luz: PLANO MEDIO con el ave entera de perfil y el aliento cruzando delante de ella hasta salir del cuadro.",
    },
    ini: "el pico empieza a abrirse y asoma el primer hilo de aliento blanco, todavía corto.",
    fin: "el pico está abierto del todo y el aliento ha salido entero, alargado hacia adelante como una hebra de luz que cruza el cuadro.",
  }, "fuego en la boca, llamas, humo, ojos brillantes, monstruo"),
  esc("b2b", [ref("ave_primigenia"), ref("altiplano_noche")], {
    comun: "Negro con los primeros trazos claros. LAS MISMAS aves de la referencia en vuelo, cada una dejando su estela de aliento. Objeto ancla: las estelas.",
    camara: {
      a: "CONTRAPICADO desde el suelo con una cresta en negro abajo y las aves juntas en el centro del cielo.",
      b: "la cámara ha SUBIDO hasta ponerse entre ellas: PLANO GENERAL en el aire, sin tierra en cuadro, con las estelas cruzando delante del objetivo hacia las cuatro esquinas.",
    },
    ini: "las aves van juntas hacia el centro y las estelas son cortas.",
    fin: "las aves se han repartido hacia las esquinas y las estelas se han alargado hasta rayar de claro todo el cielo negro.",
  }, "fuegos artificiales, cometas, rayos, personas, sol"),

  // b3 — Aparecieron los filos de los montes y el brillo de las lagunas.
  esc("b3a", [ref("piedras_funza"), ref("ave_primigenia")], {
    comun: "Luz naciente rasante sobre una cordillera de papel que estaba en masa negra. La materia ya estaba; lo que llega es poder verla. Objeto ancla: la frontera entre lo indistinto y lo que ya tiene filo.",
    camara: {
      a: "PLANO MEDIO pegado a una cresta todavía oscura, con el filo entrando por el borde.",
      b: "la cámara ha hecho un TRAVELLING LATERAL largo a lo largo de la sierra y se ha separado: GRAN PLANO GENERAL de toda la cordillera.",
    },
    ini: "sólo la cresta de delante ha cobrado canto y sombra.",
    fin: "vista entera, la sierra tiene ya casi todas sus crestas separadas del fondo, quedando apenas un rincón indistinto en un extremo.",
  }, "creacion por magia, manos moldeando, personas, sol, rayos"),
  esc("b3b", [ref("laguna_iguaque_A"), ref("ave_primigenia")], {
    comun: "Gris que se abre. LA MISMA laguna de la referencia devolviendo el PRIMER reflejo del aliento que pasa alto. Cuando vuelva el silencio habrá forma. Objeto ancla: el brillo del agua.",
    camara: {
      a: "PLANO GENERAL BAJO a ras del agua desde entre los frailejones oscuros.",
      b: "la cámara ha SUBIDO en vertical hasta un PICADO ALTO sobre la laguna: el agua entera se ve ahora como una lámina y el ave sale por un borde.",
    },
    ini: "la superficie negra tiene brillo sólo en una franja estrecha.",
    fin: "desde arriba se ve que el brillo se ha extendido por casi toda el agua, que ha quedado rizada y devolviendo luz.",
  }, "personas, barcas, peces, salpicaduras, sol"),

  // b4 — Nadie caminaba. En Iguaque, una laguna escondida entre neblinas.
  esc("b4a", [ref("sabana_cultivos"), ref("piedras_funza")], {
    comun: "Luz de día ya hecho pero sin nadie. EL MISMO valle de la referencia entero y visible —pasto, piedra, agua— y completamente VACÍO de gente: ni casas, ni humos, ni caminos, ni huellas. El encuadre está construido para que la falta se note. Objeto ancla: el valle sin una sola huella.",
    camara: {
      a: "PLANO DETALLE del pasto alto, tan cerca que sólo se ven las hojas y la tierra entre ellas.",
      b: "la cámara se ha ELEVADO y ha retrocedido hasta un GRAN PLANO GENERAL en picado del valle entero, sin nada hecho por nadie en ninguna parte.",
    },
    ini: "el pasto está quieto y entre sus tallos no hay una sola pisada.",
    fin: "desde arriba el viento recorre el pasto en una oleada y la sombra de una nube cruza medio valle, que sigue sin caminos, sin humos y sin huellas.",
  }, "personas, casas, humo, caminos, animales domesticos, cultivos"),
  esc("b4b", [ref("laguna_iguaque_pano"), ref("laguna_iguaque_B")], {
    comun: "Sierra fría con neblina espesa de papel. LA MISMA laguna de Iguaque de la referencia entre los frailejones. Está escondida y todavía no ha pasado nada. Objeto ancla: el agua que asoma.",
    camara: {
      a: "PLANO MEDIO entre los frailejones en sombra, con la neblina tapando casi todo.",
      b: "la cámara ha ATRAVESADO la neblina y ha salido sobre el agua: PLANO GENERAL de la laguna desde el aire, lisa y quieta, con la sierra alrededor.",
    },
    ini: "la neblina la tapa casi entera y sólo deja ver un trozo pequeño de agua.",
    fin: "al otro lado de la neblina la laguna se ve entera y lisa desde encima, con los frailejones rodeándola y la bruma cerrándose otra vez por un lado.",
  }, "personas, figuras en el agua, monstruos, sol, dramatismo"),

  // b5 — Se abrió y salió Bachué con un niño de la mano. (NO repetir bachue)
  escp("b5a", [ref("kf_b2_emerge"), ref("laguna_iguaque_B")], {
    comun: "Luz fría de mañana. LA MISMA mujer de la referencia YA EN LA ORILLA de LA MISMA laguna de la referencia, de pie sobre la hierba y con su manta puesta, llevando de la mano a un niño pequeño que también está en tierra y vestido con su manta; detrás de ellos el agua queda lisa. Objeto ancla: las dos manos unidas.",
    camara: {
      a: "PLANO GENERAL LARGO desde detrás, las figuras pequeñas y de espaldas, con frailejones en sombra en primer término.",
      b: "la cámara se ha ELEVADO y ha retrocedido: GRAN PLANO GENERAL en picado desde muy lejos, con las dos figuras diminutas y de espaldas bajando por la ladera y la sierra entera alrededor.",
    },
    ini: "están quietos mirando hacia el valle que se abre delante.",
    fin: "han echado a andar y desde la distancia se ven ya lejos de la orilla, de espaldas y todavía de la mano, bajando hacia el valle con las mantas ondeando.",
  }, "primeros planos de rostro, figuras dentro del agua, cuerpos mojados, desnudez, bebe en brazos, multitud esperando"),
  escp("b5b", [ref("casa_barro_paja"), ref("bachue_adulta"), ref("companero_adulto")], {
    comun: "Luz abierta de día. LA MISMA Bachué adulta de la referencia y EL MISMO compañero adulto de la referencia levantando entre los dos el armazón de UNA MISMA casa de barro y paja de la referencia, que está a medio hacer. Objeto ancla: el palo.",
    camara: {
      a: "PLANO MEDIO BAJO desde el suelo, con el haz de paja en primer término y los dos sosteniendo el palo inclinado.",
      b: "la cámara ha RETROCEDIDO y ha subido hasta un PLANO GENERAL del claro entero: se ve la casa a medio hacer completa y el valle detrás.",
    },
    ini: "sostienen el palo en vertical, inclinado, sin haberlo encajado.",
    fin: "el palo ha quedado encajado y lo han soltado: desde lejos se ve el armazón de pie, con los dos apartándose y el polvo levantado alrededor.",
  }, "casa ya terminada, ceremonia, adoracion, multitud, herramientas metalicas"),

  // b6 — Tuvieron hijos, y los hijos otros hijos, que aprendieron a labrar.
  escp("b6a", [ref("familias_muiscas"), ref("casa_barro_paja")], {
    comun: "Luz cálida de media tarde. Un grupo de LAS MISMAS familias de la referencia delante de LA MISMA casa de la referencia, en plena actividad y a distintas edades; nadie posa. Objeto ancla: la manta que se tiende.",
    camara: {
      a: "PLANO DETALLE de las manos que sostienen la manta a medio extender, con el haz de paja borroso detrás.",
      b: "la cámara ha RETROCEDIDO en un movimiento largo hasta un PLANO GENERAL del patio: se ve a las seis personas a lo suyo, la casa y la manta ya tendida.",
    },
    ini: "unas manos tienden una manta a medio extender y detrás se oye a los demás.",
    fin: "desde lejos la manta ondea tendida del todo, un hombre ha dejado su haz junto a la pared y dos jóvenes se han movido al otro lado del patio.",
  }, "retrato de familia posando, ceremonia, bebes, llanto, violencia"),
  escp("b6b", [ref("piraca_labrador"), ref("sabana_cultivos")], {
    comun: "Luz de mañana. EL MISMO labrador de la referencia abriendo un surco nuevo en LOS MISMOS cultivos de la referencia con una coa de madera. Objeto ancla: la punta de la coa.",
    camara: {
      a: "PLANO MACRO de la punta de la coa entrando en la tierra, con el terrón sin voltear.",
      b: "la cámara ha SUBIDO hasta un PICADO desde encima de él: se le ve entero de espaldas y se ve el surco entero que lleva abierto detrás.",
    },
    ini: "la punta está entrando en la tierra y el terrón todavía no se ha volteado.",
    fin: "desde arriba se ve que ha avanzado varios pasos y que detrás de él queda el surco abierto y los terrones volteados a lo largo de todo el tramo.",
  }, "herramientas metalicas, arados, bueyes, rostro de frente, esfuerzo teatral"),

  // b7 — Se oyeron herramientas. Subió el humo de los fogones.
  escp("b7a", [ref("familias_muiscas"), ref("telar_marco"), ref("patio_cuca")], {
    comun: "Luz de patio a media mañana. Dos personas de LAS MISMAS familias de la referencia trabajando a la vez ante EL MISMO telar de la referencia: una pasa la trama y otra, detrás, golpea una piedra contra otra. Donde sólo se oía el viento ahora se oye trabajo. Objeto ancla: el hilo de la trama.",
    camara: {
      a: "PLANO MACRO entre los hilos tensos del telar, con el hilo de la trama a medio cruzar ocupando el cuadro.",
      b: "la cámara ha SALIDO del telar y ha rodeado hasta el otro lado del patio: PLANO MEDIO LARGO en el que se ven las dos personas trabajando y el telar entre ellas.",
    },
    ini: "el hilo va a medio cruzar la urdimbre y la piedra está levantada sin haber golpeado.",
    fin: "el hilo ha quedado asentado contra la trama anterior y la piedra ha golpeado abajo: desde este lado se ve a las dos a la vez, cada una en lo suyo, con una nube corta de polvo.",
  }, "maquinas, ruedas, herramientas metalicas, fabrica, multitud"),
  esc("b7b", [ref("poblado_nuevo"), ref("altiplano_noche")], {
    comun: "Luz de atardecer. EL MISMO poblado nuevo de la referencia con los primeros humos subiendo de los techos de paja. Es la primera vez que el valle tiene humo. Objeto ancla: el humo.",
    camara: {
      a: "PLANO MEDIO pegado al filo de un techo, con un hilo de humo saliendo muy cerca del objetivo.",
      b: "la cámara se ha ELEVADO por encima del poblado: GRAN PLANO GENERAL en picado del valle al atardecer, con los tres humos subiendo del caserío.",
    },
    ini: "de ese techo sale un hilo fino que apenas empieza a levantarse.",
    fin: "desde arriba se ven los tres humos del poblado subiendo juntos e inclinándose con el aire sobre el valle, que hasta hoy nunca había tenido ninguno.",
  }, "incendio, humo negro, ruinas, personas en primer plano, guerra"),

  // b8 — Ya viejos volvieron a Iguaque. (CITA: no olviden el agua)
  escp("b8a", [ref("bachue_anciana"), ref("companero_anciano"), ref("familias_muiscas"), ref("sendero_territorio")], {
    comun: "Luz de tarde larga. LA MISMA Bachué anciana de la referencia y EL MISMO compañero anciano de la referencia caminando delante por EL MISMO sendero de la referencia, y detrás, en fila y a distancia respetuosa, gente de LAS MISMAS familias de la referencia. Nadie llora ni los empuja. Objeto ancla: los dos viejos delante.",
    camara: {
      a: "PLANO MEDIO por delante de ellos, retrocediendo por el sendero, con las caras de los dos en el centro.",
      b: "la cámara se ha ELEVADO y ha quedado atrás: GRAN PLANO GENERAL en picado de la ladera entera, con los dos viejos arriba y la fila serpenteando detrás.",
    },
    ini: "van a media subida, hablando entre ellos, con la comitiva detrás.",
    fin: "desde arriba se ve que la comitiva ha subido hasta cerca del filo y que los dos viejos siguen delante de todos, pequeños contra la sierra, con la niebla bajando a su encuentro.",
  }, "llanto, duelo, funeral, ataudes, violencia, arrastre, multitud descontrolada"),
  escp("b8b", [ref("bachue_anciana"), ref("laguna_iguaque_B")], {
    comun: "Luz fría de la sierra. LA MISMA Bachué anciana de la referencia de pie en la orilla de LA MISMA laguna de la referencia, con el agua detrás y el pie aún sin entrar. Objeto ancla: su cara.",
    camara: {
      a: "PLANO GENERAL desde la orilla opuesta: ella pequeña, de espaldas, entre los juncos y frente al agua.",
      b: "la cámara ha CRUZADO el agua y ha subido hasta su cara: PRIMER PLANO de tres cuartos, con la laguna desenfocada detrás.",
    },
    ini: "está girándose a medias hacia los que la siguieron.",
    fin: "de cerca se la ve hablando, con la boca abierta en mitad de la frase, el pelo blanco movido y una lengua de niebla pasándole por detrás.",
  }, "llanto, adoracion, arrodillarse, milagro, resplandor, agua violenta"),

  // b9 — Sus cuerpos se volvieron serpientes. El agua quedó entera.
  esc("b9a", [ref("serpientes_laguna"), ref("laguna_iguaque_B")], {
    comun: "Luz fría. LAS MISMAS serpientes de la referencia entrando en el agua de LA MISMA laguna de la referencia, dos cuerpos largos y tranquilos. No hay violencia ni amenaza: se van a casa. Objeto ancla: las dos estelas.",
    camara: {
      a: "PLANO MEDIO BAJO a ras del agua desde los juncos, con las dos serpientes a medio sumergir muy cerca.",
      b: "la cámara se ha ELEVADO en vertical hasta un CENITAL sobre el mismo punto: se ven las dos estelas dibujadas en la superficie y ya nada debajo.",
    },
    ini: "están a medio sumergir y dejan dos estelas paralelas abiertas.",
    fin: "desde arriba ya no se ven: sólo quedan las dos estelas cerrándose sobre el sitio por donde entraron.",
  }, "monstruos, colmillos, lenguas bifidas, ataque, sangre, personas gritando"),
  esc("b9b", [ref("laguna_iguaque_pano"), ref("ave_primigenia"), ref("sendero_territorio")], {
    comun: "Primera luz limpia. TRES CAPAS a la vez: LA MISMA laguna de la referencia entera y lisa, como si nada hubiera salido nunca de ella; DOS de LAS MISMAS aves negras de la referencia cruzando el cielo; y EL MISMO sendero de la referencia bajando de la sierra hacia el valle habitado. No es un final triste. Objeto ancla: el agua entera.",
    camara: {
      a: "PLANO MEDIO entre los frailejones de la orilla, con el agua ocupando el fondo y la niebla cubriendo el arranque del sendero.",
      b: "la cámara ha RETROCEDIDO y ha subido muy alto hasta un GRAN PLANO GENERAL en picado en el que caben a la vez la laguna, el cielo con las dos aves y el sendero bajando al valle.",
    },
    ini: "el agua tiene todavía un rizo largo y no se ve el sendero.",
    fin: "desde arriba el agua se ha alisado como un espejo, las aves cruzan pequeñas por el cielo y la niebla se ha abierto dejando ver el sendero entero bajando hacia el valle con sus humos.",
  }, "personas, tumbas, luto, texto, simbolos, agua agitada"),
]);
