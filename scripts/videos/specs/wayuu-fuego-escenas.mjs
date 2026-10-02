// Keyframes de El robo del fuego — 18 bloques × 2 escenas × 2 cuadros
// = 72 imágenes ≈ 180 s.
// Guion: guion-el-origen-del-fuego-v2.json (N=18) · Acta: acta-el-origen-del-fuego.json (36 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _wayuu-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · MALEIWA NO GUARDA EL FUEGO POR AVARICIA: cree a los hombres faltos de
//   juicio y teme que quemen ranchos, montes y criaturas vivas. El canon le da
//   la razón por escrito, así que ninguna imagen puede hacerlo tacaño ni
//   tirano.
// · JUNUUNAY MIENTE, y el canon lo dice: hablaba escondiendo su intención y
//   ACTUÓ EL FRÍO para dar lástima. El robo es premeditado, y el temblor de
//   b6 es una actuación, no un padecimiento.
// · MALEIWA ES COMPASIVO ANTES QUE BURLADO: lo acepta junto al fuego aunque el
//   sitio esté vedado. Por eso el engaño duele.
// · TRES SERES PAGAN EL ROBO CON SU FORMA: Kenáa vuelto cocuyo, Serumáa vuelto
//   pajarillo, Junuunay vuelto escarabajo. LAS TRES SON ETIOLOGÍAS VISIBLES
//   HOY y se muestran como animales reales, nunca como híbridos.
// · EL FUEGO NO LLEGA ENTERO A LOS HOMBRES: pasa de brasa a palo, de palo a
//   palo, y se multiplica. LO QUE ENCUENTRAN ES MADERA, NO LLAMA.
// · EL MÉTODO ES LO QUE SE HEREDA: los hombres no reciben fuego, APRENDEN A
//   SACARLO frotando dos varitas de caujaro, copiando a Jimut. El inventario
//   llama a las varitas «el objeto que reemplaza al robo».
// · SERUMÁA NO SABE HABLAR y aun así es quien lo encuentra: sólo dice «skii»,
//   que quiere decir fuego, señalando los palos.
// · LAS MANCHAS BRILLANTES EN LAS PATAS DEL ESCARABAJO SON LA HUELLA DEL ROBO
//   Y DEBEN VERSE. No es adorno.
//
// DESLINDE OBLIGATORIO CON `creacion-wayuu`: aquí Maleiwa es UN VIEJO CON
// FOGATA al que un muchacho engaña, no el que reparte castas y hierros. Mismo
// nombre, otra escala y otro trato.
//
// GUION DE LUZ: mundo sin lumbre en gris de amanecer → noches negras de las
// cuevas → resplandor encerrado de la gruta → primera fogata en la noche →
// cara a cara junto al fuego → temblor actuado → manos frotándose → el instante
// en que se vuelve la cara → fuga entre malezas → carrera de pasos cortos →
// noche que delata al cocuyo → penumbra del cigarrón → palo que guarda la
// brasa → mañana del niño que señala → mediodía del taladro → primera llama de
// los hombres → noches ya templadas → suelo del escarabajo.

import { CONTEXTO, DIRECCION, AVOID_BASE, PALETTE_BASE, ref, esc, escp, armar } from "./_wayuu-comun.mjs";

export const SPEC_NAME = "wayuu-fuego-escenas";
export const OUT_DIR = "wayuu/videos/el-origen-del-fuego/keyframes";
export { CONTEXTO, DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; hibrido humano-insecto, persona con alas de escarabajo, cara humana en un animal, transformacion a medias; resplandor, humo magico, particulas, estela de transformacion; incendio devastador, bosque en llamas, catastrofe, explosiones; dios anciano de barba blanca europeo, trono, aureola, tunica de profeta; cerillas, mecheros, antorchas de pelicula, hogueras rituales gigantes; prometeo, cadenas, aguila, iconografia griega; multitudes en extasis, adoracion, arrodillarse ante el fuego";
export const PALETTE =
  PALETTE_BASE + "; el naranja de la brasa es el acento del mito entero y se gana bloque a bloque: los cuatro primeros van sin una sola chispa, en grises y pardos frios de mundo sin lumbre";

const JN =
  "EL MISMO Junuunay de la referencia (hombre joven wayúu, delgado, pelo negro, wayuco y manta corta de algodón crudo, descalzo, cara despierta y calculadora)";
const ML =
  "EL MISMO Maleiwa de la referencia (hombre de pelo negro largo, manto de algodón crudo terciado hasta los tobillos, descalzo, sin corona ni adorno), aquí en su versión doméstica: sentado junto a su propia fogata, sin nada de solemne";

export const ITEMS = armar([
  // b1 — Los hombres no conocían el fuego. Comían crudo y secaban al sol.
  escp("b1a", [ref("humanidad_sin_fuego"), ref("llanura_cardonal")], {
    comun: `Amanecer gris, SIN UNA SOLA CHISPA EN CUADRO. En un principio los hombres no conocían el fuego: comían crudas las carnes. Objeto ancla: las manos que comen crudo.`,
    camara: {
      a: "PLANO MACRO de unas manos partiendo carne cruda en tiras, sin cuchillo de metal.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del grupo comiendo repartido por el suelo al amanecer, sin fogón en ninguna parte.",
    },
    ini: "unas manos parten carne cruda en tiras, sin cuchillo de metal.",
    fin: "desde arriba, el grupo come repartido por el suelo al amanecer y no hay un fogón en ninguna parte.",
  }, "fuego, brasas, humo, fogata, antorchas, canibalismo, sangre"),
  esc("b1b", [ref("del_camino"), ref("llanura_cardonal"), ref("cardon")], {
    comun: `Sol alto y duro. SECABAN LA CARNE AL SOL: tiras tendidas en varas, que es todo lo que tenían para conservarla. Sin figuras. Objeto ancla: las tiras colgadas al sol.`,
    camara: {
      a: "PLANO MACRO de una tira de carne seca colgada de una vara, con la fibra a contraluz.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del tendedero entero con cuarenta tiras colgadas bajo el sol y la sombra del cardón al lado.",
    },
    ini: "una tira de carne seca cuelga de la vara y se le ve la fibra a contraluz.",
    fin: "desde arriba, el tendedero tiene cuarenta tiras colgadas al sol, con la sombra del cardón al lado.",
  }, "fuego, humo, ahumado, parrilla, sangre, moscas, putrefaccion"),

  // b2 — Vivían en troncos y cuevas, sin lumbre. Solo Maleiwa tenía el fuego.
  esc("b2a", [ref("vivienda_precaria"), ref("cueva"), ref("constelaciones")], {
    comun: `Noche NEGRA, sin una luz. VIVÍAN EN TRONCOS Y CUEVAS, SIN LUMBRE QUE AHUYENTARA EL MIEDO DE LAS NOCHES: la oscuridad es el problema y llena el cuadro. Sin figuras. Objeto ancla: la boca del refugio a oscuras.`,
    camara: {
      a: "PLANO MACRO de la corteza hueca de un tronco caído, oscura por dentro, con el cielo estrellado apenas encima.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: GRAN PLANO GENERAL nocturno de la llanura con tres refugios repartidos, todos negros, y ni un punto de luz en todo el cuadro.",
    },
    ini: "la corteza hueca del tronco caído está oscura por dentro y encima apenas se ve el cielo estrellado.",
    fin: "desde muy arriba, tres refugios repartidos por la llanura, todos negros, y ni un punto de luz en ninguna parte.",
  }, "fogatas, antorchas, luces, luciernagas, resplandor, monstruos, ojos brillantes"),
  escp("b2b", [ref("mareiwa"), ref("gruta_del_fuego"), ref("cueva")], {
    comun: `Noche, y aquí SÍ hay luz: la primera del mito. SÓLO MALEIWA TENÍA EL FUEGO. ${ML}, sentado junto a su fogata, lejos de todo. Objeto ancla: el resplandor naranja en la piedra.`,
    camara: {
      a: "GRAN PLANO GENERAL nocturno de la serranía con un único punto naranja diminuto en una ladera lejana.",
      b: "la cámara ha VOLADO hasta ese punto y ha bajado: PLANO MEDIO de él sentado en cuclillas junto a la fogata, con la luz dándole de lado.",
    },
    ini: "en toda la serranía a oscuras hay un único punto naranja diminuto en una ladera lejana.",
    fin: "ya cerca, está sentado en cuclillas junto a la fogata con la luz dándole de lado.",
  }, "trono, aureola, barba blanca europea, tunica de profeta, adoracion, resplandor divino"),

  // b3 — Lo guardaba como piedras encendidas. Los creía faltos de juicio.
  esc("b3a", [ref("gruta_del_fuego"), ref("cueva")], {
    comun: `Sombra de la gruta con resplandor contenido. LO GUARDABA COMO PIEDRAS ENCENDIDAS en una gruta, lejos de los hombres. Objeto ancla: las piedras que arden.`,
    camara: {
      a: "PLANO MACRO de una piedra al rojo entre otras, con el calor temblando encima.",
      b: "la cámara ha RETROCEDIDO hasta la boca de la gruta: PLANO GENERAL del interior con el montón de piedras encendidas al fondo y la oscuridad de la noche recortada en la entrada.",
    },
    ini: "una piedra al rojo entre otras, con el calor temblando por encima.",
    fin: "desde la boca se ve la gruta entera con el montón de piedras encendidas al fondo y la noche recortada en la entrada.",
  }, "forja, herreria, lava, volcan, magia, runas, tesoro"),
  escp("b3b", [ref("mareiwa"), ref("humanidad_sin_fuego"), ref("serrania_baja")], {
    comun: `Luz plana. LOS CREÍA FALTOS DE JUICIO, y el canon le da la razón: teme que quemen ranchos, montes y criaturas vivas. Se cuenta con él mirándolos de lejos, sin desprecio: preocupación. Objeto ancla: la distancia entre la gruta y la gente.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara de perfil mirando hacia abajo, seria y preocupada.",
      b: "la cámara ha GIRADO siguiendo su mirada y se ha elevado: GRAN PLANO GENERAL en picado de la llanura con la gente pequeña repartida y la gruta muy arriba y lejos, en otro plano del terreno.",
    },
    ini: "de perfil y cerca, mira hacia abajo con la cara seria y preocupada.",
    fin: "desde muy arriba se ve lo que mira: la gente repartida abajo, pequeña, y la gruta lejísimos, en otra altura del terreno.",
  }, "desprecio, burla, tirano, trono, incendio, catastrofe"),

  // b4 — Vio venir a un joven aterido llamado Junuunay. Se indignó.
  escp("b4a", [ref("junuunay"), ref("serrania_baja"), ref("cardon")], {
    comun: `Noche. ${JN} SUBIENDO HACIA LA FOGATA, y ya viene con la intención hecha: el cuadro deja ver que calcula, no que sufre. Objeto ancla: su cara mirando el resplandor.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara en la oscuridad, iluminada de lejos por un naranja débil, con los ojos fijos y calculando.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la ladera con él subiendo agachado entre las matas, ocultándose, hacia el punto de luz.",
    },
    ini: "su cara en la oscuridad, con un naranja débil de lejos y los ojos fijos, calculando.",
    fin: "desde arriba se le ve subir agachado entre las matas, ocultándose, hacia el punto de luz.",
  }, "victima, sufrimiento, lastima, heroe, pose heroica, resplandor"),
  escp("b4b", [ref("mareiwa"), ref("junuunay")], {
    comun: `Noche junto a la fogata. MALEIWA SE INDIGNÓ al verlo llegar: el sitio está vedado y él lo sabe. Es contrariedad, no cólera. Objeto ancla: las dos caras a un lado y otro del fuego.`,
    camara: {
      a: "PLANO MACRO de las llamas bajas de la fogata, con las brasas asentadas debajo.",
      b: "la cámara ha SUBIDO y ha retrocedido: PLANO GENERAL con los dos a lado y lado del fuego, Maleiwa de pie y contrariado, el joven parado a distancia.",
    },
    ini: "las llamas bajas de la fogata, con las brasas asentadas debajo.",
    fin: "al subir la cámara están los dos a lado y lado del fuego: Maleiwa de pie y contrariado, el joven parado a distancia.",
  }, "ira divina, rayos, gritos, violencia, aureola, trono"),

  // b5 — «Solo vengo a calentarme, tenga clemencia». Escondía su intención. (CITA)
  escp("b5a", [ref("junuunay"), ref("mareiwa")], {
    comun: `Noche. LA CITA, y es UNA MENTIRA: dice que sólo viene a calentarse. La cámara la trata como lo que es, un cálculo dicho con cara de súplica. Objeto ancla: su boca pidiendo.`,
    camara: {
      a: "PLANO GENERAL de los dos junto al fuego con él todavía a distancia, empezando a hablar.",
      b: "la cámara ha AVANZADO hasta él: PRIMER PLANO de su cara terminando la frase, con la ceja pidiendo y los ojos que no piden nada.",
    },
    ini: "los dos están junto al fuego y él, todavía a distancia, empieza a hablar.",
    fin: "de muy cerca se le ve acabar la frase: la ceja pide, pero los ojos no piden nada.",
  }, "sinceridad, victima, llanto, aureola, resplandor, texto en pantalla"),
  esc("b5b", [ref("junuunay"), ref("gruta_del_fuego")], {
    comun: `Noche. ASÍ HABLABA, ESCONDIENDO SU INTENCIÓN: y la intención está a la vista para el espectador, no para Maleiwa. El morralito oculto bajo el brazo, vacío todavía. Objeto ancla: el morral escondido en el sobaco.`,
    camara: {
      a: "PLANO MACRO del borde de un morralito de fibra apretado bajo el brazo, medio tapado por la manta.",
      b: "la cámara ha RETROCEDIDO y ha girado al otro lado: PLANO MEDIO de él de espaldas al fuego, con el bulto del morral marcándose bajo la tela y Maleiwa desenfocado al fondo.",
    },
    ini: "el borde de un morralito de fibra apretado bajo el brazo, medio tapado por la manta.",
    fin: "de espaldas al fuego se le marca el bulto del morral bajo la tela, con Maleiwa borroso al fondo.",
  }, "arma escondida, cuchillo, sonrisa de villano, caricatura, resplandor"),

  // b6 — Hizo crujir los dientes y tembló. Maleiwa lo aceptó sin quitarle vista.
  escp("b6a", [ref("junuunay")], {
    comun: `Noche. HIZO CRUJIR LOS DIENTES, SE ERIZÓ, TEMBLÓ, SE FROTÓ LAS MANOS: es UNA ACTUACIÓN, y la cámara la mira de cerca para que se note el trabajo del actor. Objeto ancla: la mandíbula apretada.`,
    camara: {
      a: "PLANO MACRO de una mandíbula apretada y los dientes castañeteando, con la piel de gallina en el cuello.",
      b: "la cámara ha RETROCEDIDO y ha bajado a las manos: PLANO DETALLE de las dos manos frotándose deprisa delante del cuerpo, exageradamente.",
    },
    ini: "la mandíbula apretada, los dientes castañeteando y la piel de gallina en el cuello.",
    fin: "las dos manos se frotan deprisa delante del cuerpo, con un gesto exagerado.",
  }, "sufrimiento real, hipotermia, enfermedad, lastima, llanto"),
  escp("b6b", [ref("mareiwa"), ref("junuunay")], {
    comun: `Noche. MALEIWA, COMPADECIDO, LO ACEPTÓ SIN QUITARLE LA VISTA: cede el sitio y no deja de mirarlo. Las dos cosas a la vez, y por eso duele el engaño. Objeto ancla: los ojos que no se apartan.`,
    camara: {
      a: "PLANO DETALLE de su mano haciendo un gesto corto hacia el otro lado del fuego, invitándolo a sentarse.",
      b: "la cámara ha RETROCEDIDO y ha girado hasta su cara: PLANO MEDIO CORTO de Maleiwa con el joven ya sentado y desenfocado delante, y sus ojos fijos en él sin parpadear.",
    },
    ini: "su mano hace un gesto corto hacia el otro lado del fuego, invitándolo a sentarse.",
    fin: "el joven ya está sentado y borroso en primer término, y los ojos de Maleiwa siguen fijos en él sin parpadear.",
  }, "ingenuidad, tonteria, caricatura, aureola, resplandor, trono"),

  // b7 — Los dos se frotaron las manos. Junuunay conversaba y Maleiwa callaba.
  escp("b7a", [ref("mareiwa"), ref("junuunay")], {
    comun: `Noche. LOS DOS SE FROTARON LAS MANOS ANTE LAS LLAMAS: por un momento hacen lo mismo, y eso es lo que hace la escena. Objeto ancla: los dos pares de manos sobre el fuego.`,
    camara: {
      a: "PLANO MACRO de cuatro manos extendidas sobre las llamas, dos y dos, muy juntas.",
      b: "la cámara ha RETROCEDIDO y se ha elevado en diagonal: PLANO GENERAL de la fogata desde arriba con los dos sentados enfrentados, iguales de tamaño en el cuadro.",
    },
    ini: "cuatro manos extendidas sobre las llamas, dos y dos, muy juntas.",
    fin: "desde arriba, los dos están sentados enfrentados a la fogata, del mismo tamaño en el cuadro.",
  }, "amistad, abrazo, brindis, aureola, resplandor"),
  escp("b7b", [ref("junuunay"), ref("mareiwa")], {
    comun: `Noche. INTENTÓ CONVERSAR PARA DISTRAERLO, Y MALEIWA CALLABA: uno habla mucho y el otro no contesta. La asimetría es el chiste y la tensión. Objeto ancla: una boca que habla y otra cerrada.`,
    camara: {
      a: "PLANO MEDIO CORTO del joven hablando sin parar, de perfil, con las manos moviéndose.",
      b: "la cámara ha hecho un PANORÁMICO corto al otro lado del fuego: PLANO MEDIO CORTO de Maleiwa callado, de perfil, sin mover un músculo de la cara.",
    },
    ini: "el joven habla sin parar, de perfil, con las manos moviéndose.",
    fin: "al otro lado del fuego, Maleiwa está callado y de perfil, sin mover un músculo de la cara.",
  }, "discusion, gritos, pelea, burla, caricatura"),

  // b8 — Un rumor de viento le hizo volver la cara. Cogió dos brasas.
  esc("b8a", [ref("cardon"), ref("serrania_baja")], {
    comun: `Noche. UN RUMOR DE VIENTO LE HIZO VOLVER LA CARA: lo que lo distrae es una cosa del mundo, no una trampa. Sin figuras: el monte moviéndose en la oscuridad. Objeto ancla: las ramas movidas por el viento.`,
    camara: {
      a: "PLANO MACRO de las ramas de un trupillo moviéndose de golpe en la oscuridad.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la ladera de noche con el monte entero ondulando y el punto de la fogata pequeño abajo.",
    },
    ini: "las ramas de un trupillo se mueven de golpe en la oscuridad.",
    fin: "desde arriba, el monte entero ondula en la noche y el punto de la fogata queda pequeño abajo.",
  }, "monstruo, ojos en la oscuridad, figura acechando, magia, resplandor"),
  escp("b8b", [ref("junuunay"), ref("fuego_y_cocina")], {
    comun: `Noche. BASTÓ ESE INSTANTE: COGIÓ DOS BRASAS Y LAS ESCONDIÓ. El robo es rápido y con la mano desnuda. Objeto ancla: las dos brasas en la mano.`,
    camara: {
      a: "PLANO MACRO de dos dedos sacando dos brasas naranjas del borde del fuego, muy deprisa.",
      b: "la cámara ha SEGUIDO la mano hasta el costado del cuerpo: PLANO DETALLE del morralito abriéndose y las dos brasas cayendo dentro, con el resplandor filtrándose por la fibra.",
    },
    ini: "dos dedos sacan dos brasas naranjas del borde del fuego, muy deprisa.",
    fin: "el morralito se abre y las dos brasas caen dentro, con el resplandor filtrándose por la fibra.",
  }, "quemadura, herida, grito, magia, resplandor, particulas"),

  // b9 — Se dio a la fuga. Maleiwa juró hacerlo vivir entre muladares.
  escp("b9a", [ref("junuunay"), ref("trupillo"), ref("serrania_baja")], {
    comun: `Noche. SE DIO A LA FUGA ENTRE LAS MALEZAS: corre agachado, con el morral apretado y el resplandor asomando por las junturas. Objeto ancla: el morral que brilla por dentro.`,
    camara: {
      a: "PLANO MACRO del morral apretado contra el costado, con líneas de luz naranja escapándose por la trama.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL nocturno de la maleza con él corriendo agachado y el punto naranja moviéndose entre las matas.",
    },
    ini: "el morral apretado contra el costado deja escapar líneas de luz naranja por la trama.",
    fin: "desde arriba, corre agachado por la maleza y el punto naranja se mueve entre las matas.",
  }, "persecucion epica, rayos, explosiones, magia, resplandor gigante"),
  escp("b9b", [ref("mareiwa"), ref("serrania_baja")], {
    comun: `Noche. MALEIWA, BURLADO, CORRIÓ TRAS ÉL Y JURÓ HACERLO VIVIR ENTRE MULADARES: la condena la dice corriendo, no desde un trono. Objeto ancla: su figura lanzada monte abajo.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara corriendo, de frente, con el manto abierto por el aire.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL nocturno con las dos figuras diminutas separadas por la ladera y el punto naranja delante.",
    },
    ini: "de frente y corriendo, con el manto abierto por el aire.",
    fin: "desde muy arriba, las dos figuras son diminutas y están separadas por la ladera, con el punto naranja delante.",
  }, "rayos, ira divina, fuego cayendo del cielo, aureola, gigantismo"),

  // b10 — Sus pasos eran tan cortos que casi no avanzaba. Le dio una brasa a Kenáa.
  escp("b10a", [ref("junuunay"), ref("llanura_cardonal")], {
    comun: `Noche. HUÍA DESESPERADO, PERO SUS PASOS ERAN TAN CORTOS QUE CASI NO AVANZABA: ése es el detalle del canon, y prefigura lo que va a ser. Objeto ancla: los pies dando pasos mínimos.`,
    camara: {
      a: "PLANO MACRO de dos pies descalzos dando pasos cortísimos y rapidísimos sobre la arena.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado con él moviéndose mucho y avanzando poquísimo sobre una extensión enorme de llanura.",
    },
    ini: "dos pies descalzos dan pasos cortísimos y rapidísimos sobre la arena.",
    fin: "desde muy arriba se ve lo que pasa: se mueve mucho y avanza poquísimo sobre una llanura enorme.",
  }, "camara lenta dibujada, magia, estela, caricatura, humor"),
  escp("b10b", [ref("junuunay"), ref("kenaa"), ref("llanura_cardonal")], {
    comun: `Noche. LE DIO UNA BRASA AL CAZADOR KENÁA: el fuego empieza a repartirse, y ése es el mecanismo del mito. ${JN} y EL MISMO Kenáa de la referencia, joven cazador. Objeto ancla: la brasa pasando de mano a mano.`,
    camara: {
      a: "PLANO MACRO de una brasa naranja pasando de una mano a otra, iluminando las dos palmas por debajo.",
      b: "la cámara ha RETROCEDIDO y ha girado: PLANO GENERAL nocturno con los dos separándose en direcciones distintas y un solo punto de luz yéndose con uno de ellos.",
    },
    ini: "una brasa naranja pasa de una mano a otra e ilumina las dos palmas por debajo.",
    fin: "desde lejos, los dos se separan en direcciones distintas y el único punto de luz se va con uno de ellos.",
  }, "quemadura, herida, magia, resplandor, particulas, aureola"),

  // b11 — De día pasó sin ser visto; de noche la brasa lo delató. Quedó cocuyo.
  escp("b11a", [ref("kenaa"), ref("llanura_cardonal"), ref("cardon")], {
    comun: `Sol alto. KENÁA SE ALEJÓ SIN SER VISTO MIENTRAS HUBO SOL: a plena luz la brasa no se nota, y por eso avanza tranquilo. Objeto ancla: la mano cerrada que no delata nada.`,
    camara: {
      a: "PLANO MACRO de un puño cerrado a plena luz, sin que se vea nada dentro.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la llanura a mediodía con él caminando normal entre los cardones, uno más.",
    },
    ini: "un puño cerrado a plena luz, sin que se vea nada dentro.",
    fin: "desde arriba camina normal entre los cardones, como uno más, a pleno mediodía.",
  }, "resplandor visible de dia, magia, aureola, persecucion"),
  esc("b11b", [ref("isho"), ref("llanura_cardonal"), ref("constelaciones")], {
    comun: `Noche. PERO DE NOCHE LA BRASA LO DELATÓ, Y QUEDÓ VUELTO COCUYO. La transformación NO se muestra: el plano corta del punto de luz en la oscuridad al insecto real, un cocuyo con sus dos manchas luminosas. Objeto ancla: el cocuyo encendido.`,
    camara: {
      a: "GRAN PLANO GENERAL nocturno de la llanura con un único punto de luz moviéndose, delatado en la negrura.",
      b: "la cámara ha VOLADO hasta ese punto y ha cerrado del todo: PLANO MACRO de un cocuyo posado en una hoja, con sus dos manchas luminosas encendidas, enteramente insecto.",
    },
    ini: "en la llanura negra hay un único punto de luz moviéndose, delatado.",
    fin: "de muy cerca, ese punto es un cocuyo posado en una hoja con sus dos manchas encendidas: un insecto y nada más.",
  }, "hibrido, persona con alas, cara humana en el insecto, transformacion dibujada, resplandor, humo"),

  // b12 — Encontró a Jimut, el cigarrón, y le dio la brasa que le quedaba.
  escp("b12a", [ref("junuunay"), ref("jimut"), ref("trupillo")], {
    comun: `Penumbra del monte. JUNUUNAY ENCONTRÓ A JIMUT, EL CIGARRÓN, Y LE CONTÓ QUE LO PERSEGUÍAN. Jimut es un insecto real, grande, de alas duras. Objeto ancla: el cigarrón en la corteza.`,
    camara: {
      a: "PLANO MEDIO de él agachado hablando hacia el tronco, de perfil.",
      b: "la cámara ha AVANZADO hasta la corteza y ha cerrado: PLANO MACRO del cigarrón posado, con las alas duras plegadas y las patas agarradas a la madera.",
    },
    ini: "está agachado hablando hacia el tronco, de perfil.",
    fin: "en la corteza, muy de cerca, hay un cigarrón posado con las alas duras plegadas y las patas agarradas a la madera.",
  }, "insecto gigante, cara humana en el insecto, hibrido, resplandor, magia"),
  esc("b12b", [ref("jimut"), ref("junuunay"), ref("trupillo")], {
    comun: `Penumbra. LE DIO LA BRASA QUE LE QUEDABA: la última que llevaba encima. Objeto ancla: la brasa junto al insecto.`,
    camara: {
      a: "PLANO MACRO de la última brasa dejada en la corteza, con el insecto acercándose a ella.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del monte con la figura alejándose ya sin luz y un punto naranja quedándose atrás en el tronco.",
    },
    ini: "la última brasa queda en la corteza y el insecto se acerca a ella.",
    fin: "desde arriba, la figura se aleja ya sin luz y un punto naranja se queda atrás en el tronco.",
  }, "quemadura, insecto ardiendo, crueldad, magia, resplandor"),

  // b13 — Jimut la metió en un palo de caujaro. Y así el fuego se multiplicó.
  esc("b13a", [ref("jimut"), ref("maderas"), ref("trupillo")], {
    comun: `Penumbra. JIMUT LA METIÓ EN UN PALO DE CAUJARO: perfora la madera y la brasa queda dentro. AQUÍ EL FUEGO DEJA DE SER LLAMA Y PASA A SER MADERA, que es el nudo del mito. Objeto ancla: el agujero en el palo.`,
    camara: {
      a: "PLANO MACRO del insecto perforando la madera, con el serrín saliendo del agujero.",
      b: "la cámara ha RETROCEDIDO y ha girado: PLANO MEDIO del palo entero apoyado en el suelo, con un punto de brillo apagado dentro del agujero y ninguna llama fuera.",
    },
    ini: "el insecto perfora la madera y el serrín sale del agujero.",
    fin: "el palo entero está apoyado en el suelo con un brillo apagado dentro del agujero y ninguna llama fuera.",
  }, "llamas, incendio, humo, magia, resplandor, particulas"),
  esc("b13b", [ref("maderas"), ref("trupillo"), ref("llanura_cardonal")], {
    comun: `Luz plana. LA PASÓ A UN OLIVO, Y ASÍ EL FUEGO SE MULTIPLICÓ: de palo a palo, hasta que hay muchos. Lo que hay repartido por el monte es MADERA, no llamas. Objeto ancla: los palos repartidos.`,
    camara: {
      a: "PLANO MEDIO CORTO de dos troncos distintos, uno junto al otro, cada uno con su agujero.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL en picado del monte con una docena de árboles repartidos y ni una llama en ninguna parte.",
    },
    ini: "dos troncos distintos, uno junto al otro, cada uno con su agujero.",
    fin: "desde muy arriba, hay una docena de árboles repartidos por el monte y ni una llama en ninguna parte.",
  }, "incendio, bosque en llamas, humo, catastrofe, resplandor, magia"),

  // b14 — Los hombres lo encontraron por un niño llamado Serumáa.
  escp("b14a", [ref("serumaa"), ref("humanidad_sin_fuego"), ref("trupillo")], {
    comun: `Mañana. LOS HOMBRES LO ENCONTRARON POR UN NIÑO LLAMADO SERUMÁA: el niño va a media distancia y de espaldas, jugando entre las matas. Objeto ancla: la mano pequeña que señala.`,
    camara: {
      a: "PLANO DETALLE de un brazo pequeño y un dedo señalando un tronco, visto desde atrás.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del monte con el niño de espaldas a media distancia y dos adultos parados más atrás, mirándolo.",
    },
    ini: "un brazo pequeño y un dedo señalan un tronco, vistos desde atrás.",
    fin: "desde arriba, el niño está de espaldas a media distancia y dos adultos parados más atrás lo miran.",
  }, "primer plano del menor, niño en peligro, fuego cerca del niño, llanto"),
  escp("b14b", [ref("serumaa"), ref("maderas"), ref("llanura_cardonal")], {
    comun: `Mañana. JUGANDO POR LOS MONTES, IBA SEÑALANDO LOS PALOS DONDE ESTABA: señala uno, y otro, y otro. Objeto ancla: los troncos señalados uno tras otro.`,
    camara: {
      a: "PLANO MEDIO de un tronco con el dedo pequeño tocándolo, entrando por el borde del cuadro.",
      b: "la cámara ha RETROCEDIDO en travelling y se ha elevado: PLANO GENERAL con el niño de espaldas ya junto a otro árbol, más allá, y los dos anteriores marcados detrás.",
    },
    ini: "un dedo pequeño toca un tronco, entrando por el borde del cuadro.",
    fin: "desde arriba, el niño ya está de espaldas junto a otro árbol más allá y los dos anteriores quedan marcados detrás.",
  }, "primer plano del menor, peligro, fuego, llanto, adultos regañando"),

  // b15 — Solo decía skii, ski. Buscaron hasta ver a Jimut perforando un palo.
  escp("b15a", [ref("serumaa"), ref("humanidad_sin_fuego")], {
    comun: `Mañana. NO SABÍA HABLAR: SÓLO DECÍA SKII, SKI, QUE QUIERE DECIR FUEGO. El niño a media distancia, de tres cuartos, y los adultos escuchándolo sin entender todavía. Objeto ancla: las caras de los adultos intentando entender.`,
    camara: {
      a: "PLANO MEDIO CORTO de dos adultos agachados escuchando, con la cara de quien no acaba de entender.",
      b: "la cámara ha GIRADO y ha retrocedido: PLANO GENERAL con el niño a media distancia señalando otra vez y cinco adultos ya siguiéndolo.",
    },
    ini: "dos adultos agachados escuchan con cara de no acabar de entender.",
    fin: "desde lejos, el niño señala otra vez y cinco adultos ya lo siguen.",
  }, "primer plano del menor, burla al niño, castigo, llanto"),
  esc("b15b", [ref("jimut"), ref("maderas"), ref("humanidad_sin_fuego")], {
    comun: `Mediodía. BUSCARON HASTA VER A JIMUT PERFORANDO UN PALO: la respuesta estaba a la vista y era un insecto trabajando. Objeto ancla: el cigarrón en plena faena.`,
    camara: {
      a: "PLANO GENERAL del grupo parado alrededor de un tronco, todos mirando el mismo punto.",
      b: "la cámara ha AVANZADO hasta el tronco y ha cerrado del todo: PLANO MACRO del cigarrón perforando la madera, con el serrín cayendo.",
    },
    ini: "el grupo está parado alrededor de un tronco, todos mirando el mismo punto.",
    fin: "de muy cerca, el cigarrón perfora la madera y el serrín va cayendo.",
  }, "insecto gigante, hibrido, magia, resplandor, adoracion"),

  // b16 — Frotaron dos varitas de caujaro y brotó el fuego.
  esc("b16a", [ref("varitas_taladro"), ref("maderas")], {
    comun: `Mediodía. EL MÉTODO ES LO QUE SE HEREDA: SIGUIENDO SU EJEMPLO FROTARON DOS VARITAS DE CAUJARO. El inventario lo llama «el objeto que reemplaza al robo». Objeto ancla: las dos varitas girando.`,
    camara: {
      a: "PLANO MACRO de la punta de una varita girando en el hueco de otra, con el polvo oscuro acumulándose.",
      b: "la cámara ha RETROCEDIDO un poco y ha bajado a ras de suelo: PLANO DETALLE del hilo de humo saliendo del hueco y una primera chispa naranja prendiendo en la yesca.",
    },
    ini: "la punta de una varita gira en el hueco de otra y el polvo oscuro se va acumulando.",
    fin: "a ras de suelo sale un hilo de humo del hueco y una primera chispa naranja prende en la yesca.",
  }, "cerillas, mechero, pedernal de acero, magia, resplandor, explosion"),
  escp("b16b", [ref("humanidad_sin_fuego"), ref("fuego_y_cocina"), ref("llanura_cardonal")], {
    comun: `Mediodía y luego tarde. Y BROTÓ EL FUEGO, QUE ILUMINÓ EL CORAZÓN DE LOS MONTES: la alegría es de gente, no de culto. Objeto ancla: la primera llama de los hombres.`,
    camara: {
      a: "PLANO MEDIO CORTO de dos caras iluminadas desde abajo por una llama pequeña, con los ojos muy abiertos.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL en picado del monte al atardecer con cuatro fogatas encendidas en sitios distintos.",
    },
    ini: "dos caras iluminadas desde abajo por una llama pequeña, con los ojos muy abiertos.",
    fin: "desde muy arriba hay cuatro fogatas encendidas en sitios distintos del monte al atardecer.",
  }, "adoracion, arrodillarse, altar, incendio, catastrofe, aureola"),

  // b17 — El fuego quedó a su servicio. Serumáa fue vuelto pajarillo.
  escp("b17a", [ref("humanidad_sin_fuego"), ref("fuego_y_cocina"), ref("enramada")], {
    comun: `Noche templada. DESDE ENTONCES EL FUEGO QUEDÓ A SU SERVICIO Y NO SUFRIERON MÁS LAS NOCHES FRÍAS: es el contrario exacto de b2a, y el par lo dice con el mismo tipo de plano. Objeto ancla: el fogón encendido dentro del refugio.`,
    camara: {
      a: "PLANO MACRO de las brasas asentadas en un fogón de tres piedras, con la carne encima.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL nocturno de la llanura con tres refugios repartidos y un punto naranja en cada uno.",
    },
    ini: "las brasas asentadas en un fogón de tres piedras, con la carne encima.",
    fin: "desde muy arriba hay tres refugios repartidos por la llanura y un punto naranja encendido en cada uno.",
  }, "incendio, catastrofe, adoracion, altar, aureola"),
  esc("b17b", [ref("aaner"), ref("trupillo"), ref("llanura_cardonal")], {
    comun: `Mañana. SERUMÁA FUE VUELTO PAJARILLO: la transformación NO se muestra. El plano corta a un pájaro pequeño y real posado en una rama, cantando. Objeto ancla: el pajarillo cantando.`,
    camara: {
      a: "PLANO MACRO de un pájaro pequeño posado en una rama, con el pecho hinchado y el pico abierto cantando.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del monte con el pájaro diminuto en su rama y la llanura entera detrás.",
    },
    ini: "un pájaro pequeño posado en la rama, con el pecho hinchado y el pico abierto cantando.",
    fin: "desde arriba, el pájaro es diminuto en su rama y detrás se abre la llanura entera.",
  }, "hibrido, cara de niño en el pajaro, transformacion dibujada, resplandor, alas humanas"),

  // b18 — A Junuunay lo volvió escarabajo. Lleva las manchas del robo.
  esc("b18a", [ref("hormigas"), ref("llanura_cardonal"), ref("trupillo")], {
    comun: `Luz plana a ras de suelo. A JUNUUNAY LO VOLVIÓ ESCARABAJO, CONDENADO A VIVIR ENTRE INMUNDICIAS: el muladar es tierra removida y hojarasca podrida, sin nada repugnante en cuadro. Objeto ancla: el escarabajo en el suelo.`,
    camara: {
      a: "PLANO GENERAL a ras de suelo del monte bajo, con hojarasca oscura y tierra removida.",
      b: "la cámara ha AVANZADO hasta el suelo y ha cerrado del todo: PLANO MACRO de un escarabajo de élitros oscuros caminando entre la hojarasca, enteramente insecto.",
    },
    ini: "a ras de suelo, el monte bajo tiene hojarasca oscura y tierra removida.",
    fin: "de muy cerca, un escarabajo de élitros oscuros camina entre la hojarasca: un insecto y nada más.",
  }, "hibrido, cara humana en el escarabajo, basura moderna, excrementos, moscas, repugnancia"),
  esc("b18b", [ref("hormigas"), ref("llanura_cardonal")], {
    comun: `Luz plana. LLEVA EN LAS PATAS MANCHAS BRILLANTES DEL ROBO, y ESO DEBE VERSE: no es adorno, es la huella de las dos brasas que cogió con la mano. Objeto ancla: las manchas brillantes en las patas.`,
    camara: {
      a: "PLANO MACRO en cenital de las patas del escarabajo, con dos manchas brillantes naranjas y metálicas en los tarsos.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL final en picado de la llanura a pleno sol, con el insecto invisible de tan pequeño y las fogatas de la gente humeando a lo lejos.",
    },
    ini: "en cenital y muy cerca, las patas del escarabajo llevan dos manchas brillantes, naranjas y metálicas, en los tarsos.",
    fin: "desde muy arriba el insecto ya no se ve de tan pequeño, y a lo lejos humean las fogatas de la gente.",
  }, "hibrido, cara humana, resplandor magico, aureola, texto, moraleja dibujada"),
]);
