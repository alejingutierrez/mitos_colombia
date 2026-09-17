// Keyframes de Los Cojines del Zaque — 12 bloques × 2 escenas × 2 cuadros
// = 48 imágenes ≈ 120 s.
// Guion: guion-los-cojines-del-zaque-v2.json (N=12)
// Acta:  acta-los-cojines-del-zaque.json (23 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _muisca-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · Las piedras NO TIENEN PODER. El relato lo dice tres veces: la piedra sólo
//   sabe cuándo esperarlo; no produjo la luz, LA RECIBIÓ; y años después ella
//   no promete que hablen ni que guarden poderes secretos. Cualquier imagen
//   que insinúe magia —resplandor, grabados que se encienden, rayos— rompe el
//   mito.
// · Los cojines NO son un trono: no servían para que el gobernante se sentara
//   por encima de todos, sino para mirar algo que también estaba por encima
//   de él. NADIE se sienta en ellos en ninguna escena.
// · El zaque NO recibe trato especial del sol: vuelve a su cercado y la luz
//   cae por igual sobre techos, caminos y campos. Esa igualdad es deliberada
//   y la escena NO puede iluminarse como consagración.
// · La niña NO recibe una revelación: observa la sombra y comprende sola. El
//   disco ya estaba tibio cuando lo tocó, que es el mismo hecho físico visto
//   por dentro.
// · El cierre NO es una lección dicha: ella guarda silencio ante el asombro
//   del niño, porque la ceremonia no había terminado.
//
// GUION DE LUZ: azul cerrado antes del alba → subida a oscuras sin antorchas
// → gris de la piedra fría → abertura entre los discos → silencio → primer
// borde del sol → luz recibida → sombras acortándose → mañana repartida →
// piedra tibia → otra madrugada años después → luz naciendo otra vez.

import { DIRECCION, AVOID_BASE, ref, esc, escp, armar } from "./_muisca-comun.mjs";

export const SPEC_NAME = "muisca-cojines-zaque-escenas";
export const OUT_DIR = "muiscas/videos/los-cojines-del-zaque/keyframes";
export { DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; piedras que brillan, grabados encendidos, rayos saliendo de la roca, magia visible, particulas; trono, alguien sentado sobre los discos, coronacion, consagracion; sol con cara, rayos dibujados, aureola sobre el zaque; sacrificios, sangre, altares con fuego; observatorio monumental, columnas, escalinatas, iconografia mesoamericana; antorchas encendidas en la subida";
export const PALETTE =
  "azul cerrado de antes del alba, gris de arenisca con liquen claro, crema de algodon crudo, ocre y verde de las cenefas, pardo de ladera; el naranja del primer borde del sol es el unico acento calido; sin saturacion";

const ZAQUE =
  "EL MISMO zaque de Tunja de la referencia (hombre de unos cincuenta y cinco años, rostro sereno con una fatiga marcada alrededor de los ojos, pelo negro con canas recogido bajo una diadema tejida ancha, manta de algodón de tejido muy fino anudada al hombro con tres cenefas geométricas sobrias en ocre y verde, descalzo)";
const NINA =
  "LA MISMA niña de la referencia (unos ocho años, rostro despierto y atento, pelo negro liso hasta los hombros, manta pequeña de algodón crudo sin cenefas ceñida con un cordón de fique, descalza)";
const COJINES =
  "LOS MISMOS Cojines del Zaque de la referencia (dos discos circulares lisos tallados en relieve sobre una misma roca de arenisca gris, lado a lado y separados por una abertura estrecha, con la superficie desgastada por siglos de sol y lluvia y liquen claro en las juntas)";

export const ITEMS = armar([
  // b1 — Antes del amanecer el zaque salió de Hunza.
  escp("b1a", [ref("zaque_tunja"), ref("cercado_bacata"), ref("familias_muiscas")], {
    comun: `Azul cerrado de antes del amanecer. ${ZAQUE} saliendo de Hunza, y no va solo: lo acompañan sacerdotes, músicos y gente de las parcialidades vecinas. Objeto ancla: el vano de la empalizada.`,
    camara: {
      a: "PLANO MEDIO del vano de la empalizada a oscuras, con las primeras figuras cruzándolo.",
      b: "la cámara ha RETROCEDIDO por el camino y ha subido: PLANO GENERAL nocturno con la comitiva entera saliendo del cercado y la ciudad todavía oscura detrás.",
    },
    ini: "por el vano cruzan las primeras figuras, apenas siluetas.",
    fin: "desde arriba se ve la comitiva completa —treinta o más— saliendo del cercado y tomando la ladera, con Hunza a oscuras detrás.",
  }, "antorchas, trono portatil, palanquin, corona, guardias con armas"),
  escp("b1b", [ref("familias_muiscas"), ref("altiplano_noche"), ref("sendero_territorio")], {
    comun: "Noche que empieza a perder color. Suben por la ladera occidental mientras la ciudad sigue oscura. Objeto ancla: la ladera.",
    camara: {
      a: "PLANO MEDIO por detrás de los últimos de la fila, subiendo a oscuras.",
      b: "la cámara se ha ELEVADO y ha girado hacia la ciudad: GRAN PLANO GENERAL desde media ladera con la comitiva subiendo en primer término y Hunza abajo, sin una sola luz.",
    },
    ini: "se ven las espaldas de los últimos subiendo en la oscuridad.",
    fin: "desde media ladera se ve la fila entera subiendo y, allá abajo, la ciudad completamente a oscuras: todavía no ha amanecido para nadie.",
  }, "antorchas, fuego, procesion religiosa, estandartes, cruces"),

  // b2 — Nadie encendió antorcha. En lo alto esperaban dos discos.
  escp("b2a", [ref("familias_muiscas"), ref("sendero_territorio")], {
    comun: "Oscuridad. NADIE enciende antorcha: conocen el camino por la inclinación de la tierra y por el sonido de los pasos. NO puede haber una sola llama en el cuadro. Objeto ancla: los pies en el sendero.",
    camara: {
      a: "PLANO MACRO de unos pies descalzos pisando la tierra inclinada del sendero, casi a oscuras.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL de la fila subiendo en la penumbra azul, sin un solo punto de luz en todo el cuadro.",
    },
    ini: "los pies pisan la cuesta y se ve la inclinación de la tierra bajo ellos.",
    fin: "desde lejos la fila entera sube por la ladera a oscuras, sin antorchas ni fuego: sólo siluetas contra un cielo que empieza a perder color.",
  }, "antorchas, teas, fuego, linternas, resplandor"),
  esc("b2b", [ref("cojines_roca"), ref("altiplano_noche")], {
    comun: `En lo alto esperan ${COJINES}. Llevan siglos de sol y lluvia en el lomo. Objeto ancla: la abertura estrecha entre los dos discos.`,
    camara: {
      a: "PLANO GENERAL de la cima a oscuras, con la roca como un bulto contra el cielo.",
      b: "la cámara ha AVANZADO hasta la roca y se ha puesto casi cenital: PLANO DETALLE de los dos discos tallados lado a lado, con el liquen claro en las juntas y la abertura estrecha entre ellos.",
    },
    ini: "en la cima sólo se distingue un bulto oscuro contra el cielo.",
    fin: "de cerca son dos discos lisos tallados en la misma roca, desgastados y con liquen, separados por una abertura estrecha: no brillan ni tienen ninguna marca luminosa.",
  }, "piedras que brillan, grabados encendidos, magia, rayos, altar, sangre"),

  // b3 — Parecían cojines, pero eran duros y fríos.
  escp("b3a", [ref("zaque_tunja"), ref("cojines_roca")], {
    comun: `Penumbra azul. ${ZAQUE} deteniéndose frente a los discos. NO se sienta en ellos: se para delante. Objeto ancla: la distancia entre él y la piedra.`,
    camara: {
      a: "PLANO MACRO de la superficie de un disco, áspera y fría, con el liquen en las grietas.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO LARGO con él de pie delante de la roca, sin tocarla, y la comitiva colocándose detrás.",
    },
    ini: "la piedra llena el cuadro: dura, áspera y sin nada encima.",
    fin: "desde más lejos se le ve de pie delante de los discos, a dos pasos, sin sentarse ni apoyarse; los demás se colocan detrás de él.",
  }, "trono, sentarse en los discos, coronacion, aureola, arrodillarse"),
  esc("b3b", [ref("cojines_roca"), ref("altiplano_noche"), ref("valle_iraca")], {
    comun: "Penumbra azul. Más allá se extiende el valle; detrás, la noche empieza a perder color. Objeto ancla: la línea entre el valle y la noche.",
    camara: {
      a: "PLANO MEDIO desde detrás de la roca, mirando hacia el valle oscuro.",
      b: "la cámara ha girado ciento ochenta grados por encima de la roca: PLANO GENERAL en la dirección contraria, con la noche todavía cerrada por ese lado.",
    },
    ini: "hacia el valle, la tierra se adivina apenas bajo un cielo que aclara.",
    fin: "hacia el otro lado la noche sigue entera y sin color, con las estrellas todavía visibles: el amanecer va a venir por un solo sitio.",
  }, "personas, fuego, antorchas, sol con cara, rayos"),

  // b4 — Una niña miró el espacio estrecho entre las piedras.
  escp("b4a", [ref("nina_cojines"), ref("cojines_roca")], {
    comun: `Penumbra azul. ${NINA} mirando el espacio estrecho entre las dos piedras. Ha subido otras veces pero nunca ha entendido por qué todos llegan tan temprano. Objeto ancla: la abertura.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara de perfil, mirando hacia un lado.",
      b: "la cámara ha girado y AVANZADO en la dirección de su mirada hasta la roca: PLANO DETALLE de la abertura entre los dos discos, con el cielo azul al fondo de ella.",
    },
    ini: "mira fijamente hacia algo que está fuera de cuadro.",
    fin: "lo que miraba es la rendija entre los dos discos, y por ella se ve un trozo de cielo que empieza a aclarar.",
  }, "magia, resplandor, particulas, vision, aureola"),
  escp("b4b", [ref("nina_cojines"), ref("familias_muiscas"), ref("cojines_roca")], {
    comun: `${NINA} entre la gente que espera. Nadie le explica nada y todos están quietos. Objeto ancla: la quietud del grupo.`,
    camara: {
      a: "PLANO MEDIO de ella entre las piernas y las mantas de los adultos, mirando hacia arriba.",
      b: "la cámara se ha ELEVADO por encima del grupo hasta un PICADO: se ve a todos colocados en semicírculo frente a la roca, quietos, y a ella pequeña entre ellos.",
    },
    ini: "entre las mantas de los mayores se le ve la cara mirando hacia arriba.",
    fin: "desde arriba se ve el semicírculo entero delante de la roca, cuarenta personas quietas y en silencio, y ella en una esquina.",
  }, "arrodillarse, adoracion, cantos, trance, aureola"),

  // b5 — «La piedra solo sabe cuándo esperarlo». (CITA)
  escp("b5a", [ref("nina_cojines"), ref("zaque_tunja"), ref("cojines_roca")], {
    comun: `Penumbra que aclara. ${NINA} preguntando si la piedra hace salir el sol. Objeto ancla: las dos caras a distinta altura.`,
    camara: {
      a: "PLANO MEDIO de él de pie y ella pequeña a su lado, a distinta altura.",
      b: "la cámara ha BAJADO hasta la altura de ella y ha girado hacia arriba: CONTRAPICADO con la cara del zaque vista desde abajo, agachándose ya hacia el objetivo.",
    },
    ini: "ella le habla desde abajo y él todavía está de pie.",
    fin: "él se ha agachado hasta quedar a su altura, visto desde abajo, con la cara vuelta hacia ella para contestarle.",
  }, "trono, corona, aureola, arrodillarse, sermon"),
  escp("b5b", [ref("zaque_tunja"), ref("cojines_roca"), ref("nina_cojines")], {
    comun: `${ZAQUE} contestando que no: la piedra sólo sabe cuándo esperarlo. Mientras lo dice, la piedra no hace absolutamente nada. Objeto ancla: la piedra detrás de él.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara hablando, con la roca desenfocada detrás.",
      b: "la cámara ha hecho un PANEO LATERAL desde su cara hasta la roca y se ha acercado: PLANO DETALLE de los dos discos quietos, apagados y sin nada encima.",
    },
    ini: "él contesta de cerca, tranquilo.",
    fin: "el cuadro se ha ido a la piedra misma: dos discos de arenisca gris, fríos, con liquen y sin un solo brillo. No hace nada.",
  }, "piedra que brilla, magia, rayos, grabados encendidos, resplandor"),

  // b6 — Silencio, y luego el sol se levantó por esa abertura.
  escp("b6a", [ref("familias_muiscas"), ref("cojines_roca"), ref("altiplano_noche")], {
    comun: "Instante de silencio antes del amanecer. Los músicos guardan silencio y durante un momento no ocurre nada: el viento pasa sobre las mantas y la hierba. Objeto ancla: el viento en la hierba.",
    camara: {
      a: "PLANO MACRO de una flauta larga de caña bajada y quieta en unas manos.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL de la cima con todo el grupo inmóvil, la roca a un lado y la hierba moviéndose sola con el viento.",
    },
    ini: "la flauta está bajada y las manos quietas encima de ella.",
    fin: "desde lejos, todo está parado en la cima: nadie toca, nadie habla y lo único que se mueve es la hierba y el borde de las mantas.",
  }, "cantos, tambores sonando, trance, danza, fuego"),
  esc("b6b", [ref("cojines_roca"), ref("valle_iraca")], {
    comun: "El primer borde del sol levantándose EXACTAMENTE por la abertura entre los dos discos. Es un hecho de calendario, no un prodigio. Objeto ancla: la abertura con el sol dentro.",
    camara: {
      a: "PLANO DETALLE de la abertura entre los discos con el cielo aclarando al fondo y nada más.",
      b: "la cámara ha RETROCEDIDO despacio manteniendo la abertura en el centro: PLANO MEDIO con la roca entera en cuadro y el primer borde naranja del sol asomando justo por la rendija.",
    },
    ini: "por la rendija sólo se ve cielo cada vez más claro.",
    fin: "el primer borde del sol ha asomado exactamente por la abertura entre los dos discos, y la roca sigue siendo roca: no se enciende ni cambia.",
  }, "sol con cara, rayos dibujados, piedras brillando, magia, explosion de luz"),

  // b7 — La piedra no produjo la luz. La recibió.
  esc("b7a", [ref("cojines_roca")], {
    comun: "Luz rasante del primer sol. La piedra NO produjo la luz: la RECIBIÓ. Se ve en la dirección de la sombra y en el calor que entra, no en un brillo propio. Objeto ancla: el borde iluminado del disco.",
    camara: {
      a: "PLANO MACRO del canto de un disco con la luz entrándole de lado y el resto todavía en sombra.",
      b: "la cámara ha RODEADO la roca siguiendo el avance de la luz: PLANO MEDIO desde el otro costado con los dos discos ya alcanzados por el sol y su sombra alargada hacia atrás.",
    },
    ini: "sólo un canto del disco tiene luz; todo lo demás sigue gris.",
    fin: "dando la vuelta se ve que la luz ha alcanzado los dos discos enteros y ha tirado sus sombras largas hacia atrás sobre la roca madre.",
  }, "piedras brillando, grabados encendidos, rayos, magia, resplandor"),
  escp("b7b", [ref("zaque_tunja"), ref("familias_muiscas"), ref("cojines_roca")], {
    comun: `${ZAQUE} inclinando la cabeza, y todos haciendo lo mismo. NO se arrodillan y nadie lo mira a él. Objeto ancla: las cabezas.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cabeza inclinándose, de perfil.",
      b: "la cámara ha RETROCEDIDO y ha subido hasta un PICADO del grupo entero: cuarenta cabezas inclinadas a la vez hacia el mismo punto, y ninguna vuelta hacia él.",
    },
    ini: "él baja la cabeza, solo, de perfil.",
    fin: "desde arriba, las cuarenta cabezas del grupo están inclinadas a la vez hacia el sol que sale, y ninguna mira hacia el zaque.",
  }, "arrodillarse, adoracion al zaque, aureola sobre el, coronacion"),

  // b8 — Flauta, tambor, voces. La sombra de los discos se acortó.
  escp("b8a", [ref("familias_muiscas"), ref("cojines_roca")], {
    comun: "Luz de primera hora. Después empiezan los sonidos: una flauta larga, un tambor profundo, voces que saludan el regreso del día. Objeto ancla: los instrumentos.",
    camara: {
      a: "PLANO MACRO de la boca de la flauta larga de caña llevándose a los labios.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL de la cima con los músicos a un lado, la gente cantando y la roca recibiendo la luz al otro.",
    },
    ini: "la flauta sube hacia los labios y todavía no suena.",
    fin: "desde lejos ya suena todo: los músicos tocando, las bocas abiertas del grupo y la roca alumbrada a un lado del cuadro.",
  }, "instrumentos europeos, trompetas de metal, partituras, danza frenetica"),
  escp("b8b", [ref("nina_cojines"), ref("cojines_roca")], {
    comun: `${NINA} observando la sombra de los discos: larga al principio, acortándose mientras el sol sube. Ella observa, no recibe una revelación. Objeto ancla: la sombra de los discos.`,
    camara: {
      a: "PLANO CENITAL cerrado de la sombra de los discos sobre la roca, larga y afilada.",
      b: "la cámara se ha ELEVADO y ha retrocedido: PLANO GENERAL en picado con la roca y la sombra ya corta, y ella agachada al lado siguiéndola con la vista.",
    },
    ini: "la sombra de los dos discos es larga y llega hasta el borde de la roca.",
    fin: "desde arriba la sombra se ha acortado hasta ser un par de manchas pequeñas pegadas a los discos, y ella está agachada al lado mirándolas.",
  }, "vision, revelacion, aureola, resplandor, magia, texto"),

  // b9 — No servía para sentarse encima de todos. Bajaron.
  escp("b9a", [ref("cojines_roca"), ref("nina_cojines"), ref("zaque_tunja")], {
    comun: `Luz de mañana. Los cojines NO sirven para que el gobernante se siente por encima de todos: ayudan a mirar algo que también está por encima de él. Se dice con la mirada de todos, que va más alto que la piedra. Objeto ancla: hacia dónde miran.`,
    camara: {
      a: "PLANO MEDIO de los discos vacíos con el zaque de pie al lado, sin tocarlos.",
      b: "la cámara ha basculado hacia arriba siguiendo la mirada de todos: PLANO DE CIELO con el sol ya despegado del horizonte y la roca cortada por el borde inferior del cuadro.",
    },
    ini: "los dos discos están vacíos y él sigue de pie a su lado.",
    fin: "el cuadro se ha ido al cielo, que es adonde todos miran: el sol ya subido, con la roca reducida a una franja en el borde de abajo.",
  }, "trono, sentarse en los discos, coronacion, aureola, consagracion"),
  escp("b9b", [ref("familias_muiscas"), ref("sendero_territorio"), ref("sabana_cultivos")], {
    comun: "Luz abierta de mañana. Terminada la ceremonia, la gente desciende hacia los sembrados y el mercado. La jornada empieza. Objeto ancla: los caminos que bajan.",
    camara: {
      a: "PLANO MEDIO de los primeros bajando por la ladera, de espaldas.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado con la gente repartiéndose desde la cima por cuatro caminos distintos hacia los sembrados y el mercado.",
    },
    ini: "los primeros empiezan a bajar por la ladera.",
    fin: "desde arriba se ve cómo se reparten: cuatro ramales distintos bajando hacia los campos, el mercado y las casas, cada uno con su gente.",
  }, "procesion ceremonial, estandartes, cantos, aureola"),

  // b10 — El sol cayó igual sobre todos. La niña tocó un disco tibio.
  escp("b10a", [ref("zaque_tunja"), ref("cercado_bacata"), ref("sabana_cultivos"), ref("poblado_nuevo")], {
    comun: `${ZAQUE} vuelve a su cercado y el sol NO lo sigue de manera especial: cae por igual sobre techos, caminos y campos. La iluminación es deliberadamente pareja: NO hay un haz sobre él. Objeto ancla: la luz repartida.`,
    camara: {
      a: "PLANO MEDIO de él entrando en su cercado, con la misma luz que todo lo demás.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado del valle entero con la luz de la mañana cayendo pareja sobre los techos, los caminos y los campos, y su cercado indistinguible de los demás.",
    },
    ini: "entra en su cercado sin nada que lo destaque.",
    fin: "desde arriba la luz cae exactamente igual sobre todo el valle y su cercado es uno más entre veinte: no hay ningún haz ni ninguna zona más iluminada.",
  }, "haz de luz sobre el zaque, aureola, consagracion, rayos, trono"),
  escp("b10b", [ref("nina_cojines"), ref("cojines_roca")], {
    comun: `${NINA} quedándose junto a la roca y poniendo la mano sobre uno de los discos: ya está tibio. Es el mismo hecho físico visto por dentro, NO una revelación. Objeto ancla: la palma sobre la piedra.`,
    camara: {
      a: "PLANO GENERAL de la cima vacía con ella sola y pequeña junto a la roca.",
      b: "la cámara ha AVANZADO hasta la roca y se ha puesto cenital: PLANO MACRO de su palma pequeña apoyada sobre la arenisca gris, con el liquen alrededor.",
    },
    ini: "está sola en la cima, junto a la roca, después de que todos han bajado.",
    fin: "su palma está apoyada del todo sobre la piedra, muy de cerca: la arenisca no brilla ni cambia, sólo está tibia del sol que le dio.",
  }, "piedra que brilla, magia, resplandor, particulas, vision"),

  // b11 — Años después regresó con otros niños. Les pidió esperar.
  escp("b11a", [ref("nina_cojines"), ref("familias_muiscas"), ref("sendero_territorio"), ref("altiplano_noche")], {
    comun: "Azul cerrado de antes del alba, años después. Ella, ya mujer, subiendo con otros niños. Sin antorchas, igual que la primera vez. Objeto ancla: la fila pequeña que sube.",
    camara: {
      a: "PLANO MACRO de unos pies descalzos pisando la misma cuesta, a oscuras.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL de la ladera, a media distancia y de espaldas, con una fila pequeña subiendo en la penumbra y sin fuego.",
    },
    ini: "unos pies pisan la cuesta inclinada en la oscuridad.",
    fin: "desde lejos y de espaldas se ve la fila pequeña subiendo la misma ladera, a media distancia, sin una sola antorcha.",
  }, "antorchas, procesion grande, ceremonia, adoracion, aureola"),
  escp("b11b", [ref("nina_cojines"), ref("cojines_roca"), ref("familias_muiscas")], {
    comun: "Penumbra que aclara en la cima. NO les promete que las piedras hablarán ni que guardan poderes secretos: les pide esperar. Objeto ancla: su mano pidiendo calma.",
    camara: {
      a: "PLANO MEDIO CORTO de su cara hablando bajito a los niños.",
      b: "la cámara ha RETROCEDIDO y ha girado hacia la roca: PLANO GENERAL con el grupo pequeño colocado delante de los discos, todos callados y quietos.",
    },
    ini: "les habla de cerca, con la mano abierta pidiendo calma.",
    fin: "desde más lejos, los niños ya están colocados delante de la roca en silencio y ella detrás de ellos, sin decir nada más.",
  }, "sermon, leccion dibujada, magia, promesas, aureola, texto"),

  // b12 — Un niño respiró sorprendido. La mujer no dijo nada.
  esc("b12a", [ref("cojines_roca"), ref("valle_iraca")], {
    comun: "El primer borde del sol volviendo a levantarse entre los discos, años después, exactamente igual. Objeto ancla: la abertura con el sol dentro.",
    camara: {
      a: "PLANO DETALLE de la abertura entre los discos con el cielo aclarando al fondo, EL MISMO encuadre que en la escena b6b.",
      b: "la cámara ha RETROCEDIDO manteniendo la abertura en el centro: PLANO MEDIO con la roca entera y el primer borde del sol asomando otra vez por la misma rendija.",
    },
    ini: "por la rendija sólo se ve cielo, igual que la primera vez.",
    fin: "el sol ha vuelto a asomar exactamente por la misma abertura, y la piedra sigue siendo la misma piedra, sin brillo y sin cambio.",
  }, "sol con cara, rayos, magia, explosion de luz, piedras brillando"),
  escp("b12b", [ref("nina_cojines"), ref("familias_muiscas"), ref("cojines_roca")], {
    comun: "Luz del primer sol. Uno de los niños respira sorprendido. La mujer NO dice nada: la ceremonia no había terminado, la luz seguía naciendo entre dos piedras. Objeto ancla: la boca del niño y la boca cerrada de ella.",
    camara: {
      a: "PLANO MEDIO CORTO de la cara de un niño con la boca abierta, tomando aire de sorpresa.",
      b: "la cámara ha hecho un PANEO LATERAL hasta ella y ha retrocedido: PLANO GENERAL final con la mujer detrás de los niños, callada, la roca a un lado y el sol naciendo entre los dos discos.",
    },
    ini: "el niño toma aire con la boca abierta, sin decir nada todavía.",
    fin: "ella sigue detrás de todos con la boca cerrada y no explica nada; delante, el sol continúa naciendo entre las dos piedras y la ceremonia no ha terminado.",
  }, "leccion dicha, sermon, aureola, aplausos, texto, simbolos"),
]);
