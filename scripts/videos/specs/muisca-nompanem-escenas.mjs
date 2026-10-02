// Keyframes de Nompanem — 13 bloques × 2 escenas × 2 cuadros = 52 imágenes ≈ 130 s.
// Guion: guion-nompanem-v2.json (N=13) · Acta: acta-nompanem.json (24 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _muisca-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · Esta ficha NO es `bochica` (video YA PRODUCIDO) ni
//   `los-dioses-civilizadores`, aunque las tres cuenten del mismo viajero.
//   Aquí el mito es LA ENTREGA Y DEVOLUCIÓN DEL BASTÓN, vista desde quien
//   gobernaba el valle: NOMPANEM es el protagonista y el viajero es el
//   segundo personaje. El ancla de las escenas es el bastón y su cara.
// · El viajero NO PIDE EL MANDO ni lo toma. Es Nompanem quien lleva su bastón
//   al centro y lo deja en el suelo, con una razón declarada.
// · El gobierno del viajero NO ES PERFECTO: hubo desacuerdos y algunas
//   decisiones tuvieron que corregirse. Ese dato es irrenunciable y tiene su
//   propio par (b9b): es lo que hace creíble lo que dice al devolver.
// · Nompanem NO recupera el puesto como premio: lo recupera con la
//   advertencia de que ya sabía gobernar. El relato da la vuelta completa.
// · EL BASTÓN NO CAMBIA: parecía el mismo, pesaba de otra manera. Lo que
//   cambió está en quien lo carga, y la imagen debe leerse así — el mismo
//   objeto, sin talla, sin oro y sin adorno, en los dos extremos del video.
//
// GUION DE LUZ: valle de Iraca de mañana → voces que llegan del norte → luz
// del puesto de Otga → esteras del recibimiento → días de enseñanza → mantas
// que alcanzan → bastón en el suelo → manos que lo levantan → preguntas →
// desacuerdos → reunión cerca de Iza → bastón que vuelve → huella en la roca.

import { DIRECCION, AVOID_BASE, ref, esc, escp, armar } from "./_muisca-comun.mjs";

export const SPEC_NAME = "muisca-nompanem-escenas";
export const OUT_DIR = "muiscas/videos/nompanem/keyframes";
export { DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; coronacion, trono, corona, cetro, aclamacion, multitud vitoreando; aureola, resplandor, rayos, milagros, curaciones; baston con oro, talla, gemas o adornos; cruces cristianas grandes, altares, procesiones, misa; ascension con nubes, angeles; texto, letreros, documentos firmados";
export const PALETTE =
  "verde joven de maiz del valle de Iraca, crema de algodon crudo, pardo oscuro de madera de macana, ocre de tierra apisonada, gris de roca; sin oro y sin saturacion";

const NOMPA =
  "EL MISMO Nompanem de la referencia (hombre de unos cincuenta y cinco años, de porte sereno y sin ostentación, rostro atento, pelo negro con canas recogido bajo una cinta tejida, manta de algodón crudo de tejido fino anudada al hombro)";
const VIAJERO =
  "EL MISMO viajero de la referencia (hombre mayor, descalzo, barba blanca larga hasta el pecho, pelo gris sujeto con una cinta, manta larga de algodón crudo atada al hombro, con un bordón de macana)";
const BASTON =
  "EL MISMO bastón de mando de Iraca de la referencia (vara recta de madera de macana muy oscura y densa, del largo de un brazo, con la superficie pulida por el uso y la empuñadura marcada por el desgaste de las manos, SIN talla, SIN oro y SIN adorno de ninguna clase)";

export const ITEMS = armar([
  // b1 — Gobernaba Iraca. Llegaron voces desde Ganza.
  escp("b1a", [ref("nompanem_cacique"), ref("valle_iraca"), ref("baston_mando")], {
    comun: `Luz plana de mañana. ${NOMPA} gobernando el valle de Iraca, con ${BASTON} en la mano. Objeto ancla: el bastón.`,
    camara: {
      a: "PLANO MACRO de la empuñadura del bastón en su mano, con el desgaste de años en la madera oscura.",
      b: "la cámara ha RETROCEDIDO y ha subido: GRAN PLANO GENERAL del valle de Iraca con los sembrados en hileras, los bohíos repartidos y él pequeño en un borde, con el bastón.",
    },
    ini: "la mano sujeta la empuñadura gastada de la madera oscura.",
    fin: "desde arriba se ve lo que gobierna: el valle entero sembrado y poblado, con él en un borde, pequeño y sin nada que lo distinga salvo la vara.",
  }, "trono, corona, cetro, guardias, aureola, multitud"),
  escp("b1b", [ref("familias_muiscas"), ref("camino_carrera"), ref("telar_marco")], {
    comun: "Luz de mañana. Llegan voces desde Ganza: un hombre de manta larga enseña a hilar el algodón y a tejer mantas en los pueblos del norte. La noticia llega antes que él. Objeto ancla: lo que cuentan los que llegan.",
    camara: {
      a: "PLANO MEDIO CORTO de un viajero contando algo con las manos, dibujando en el aire el marco de un telar.",
      b: "la cámara ha girado y RETROCEDIDO hacia el norte: GRAN PLANO GENERAL del camino que baja desde Ganza, con gente viniendo por él y el valle abriéndose delante.",
    },
    ini: "alguien dibuja en el aire, con las manos, la forma de un telar.",
    fin: "por el camino del norte baja gente hacia el valle: la noticia va llegando por ahí, pueblo a pueblo.",
  }, "aureola, resplandor, cruces grandes, procesiones, milagros"),

  // b2 — Tres nombres. Pero Nompanem no salió a buscarlo.
  escp("b2a", [ref("familias_muiscas"), ref("bochica_anciano"), ref("mercado_bacata")], {
    comun: `Lo llaman con TRES nombres: Sadigua, nuestro pariente y padre; Sugumonxe, el santo que se hace invisible; Sugunsua, el que se desaparece. Los tres se conservan y NO se resuelve. Objeto ancla: los tres grupos que lo nombran distinto.`,
    camara: {
      a: "PLANO MEDIO CORTO de dos personas hablando de él, cada una diciendo un nombre distinto.",
      b: "la cámara ha RETROCEDIDO y ha subido hasta un PICADO del mercado: se ven TRES corrillos distintos hablando de lo mismo, y él no está en ninguno.",
    },
    ini: "dos hablan de él y cada uno lo llama de una manera.",
    fin: "desde arriba hay tres corrillos hablando del mismo hombre con tres nombres distintos, y en ninguno de los tres está él.",
  }, "letreros, texto, nombres escritos, aureola, votacion"),
  escp("b2b", [ref("nompanem_cacique"), ref("valle_iraca"), ref("baston_mando")], {
    comun: `${NOMPA} NO sale a buscarlo: espera a que el viajero entre en el valle. Esperar es una decisión y se ve en que no se mueve. Objeto ancla: su sitio, que no cambia.`,
    camara: {
      a: "PLANO MEDIO de él sentado en su sitio del valle, con el bastón apoyado, mirando hacia el norte.",
      b: "la cámara ha RETROCEDIDO y ha subido hasta un GRAN PLANO GENERAL del valle, donde el camino del norte se ve entero y vacío y él sigue sentado en el mismo sitio.",
    },
    ini: "está sentado con el bastón apoyado, mirando hacia el camino del norte.",
    fin: "desde arriba, el camino del norte se ve entero y todavía vacío, y él no se ha movido de su sitio: espera.",
  }, "cabalgata, sequito, procesion de recibimiento, aureola"),

  // b3 — En Otga salió a su encuentro. Lo recibió con acatamiento.
  escp("b3a", [ref("nompanem_cacique"), ref("otga_encuentro"), ref("familias_muiscas")], {
    comun: `Luz de mañana. Cuando el viajero entra en el valle, ${NOMPA} sale a su encuentro en EL MISMO puesto de Otga de la referencia, con toda su gente. Objeto ancla: la explanada del encuentro.`,
    camara: {
      a: "PLANO MACRO de las esteras extendidas y las vasijas de recibimiento puestas en el suelo de tierra apisonada.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL de la explanada con la gente del valle colocada a un lado y el camino del norte abierto al otro.",
    },
    ini: "las esteras y las vasijas de recibimiento están puestas y no hay nadie encima.",
    fin: "desde lejos, la gente del valle está colocada a un lado de la explanada, esperando, y el camino por donde llegará queda libre.",
  }, "trono, palio, banderas, guardias con armas, aureola"),
  escp("b3b", [ref("nompanem_cacique"), ref("bochica_anciano"), ref("otga_encuentro")], {
    comun: `Lo recibe con ACATAMIENTO, le ofrece alimento y un lugar donde descansar. Es hospitalidad, no sumisión. Objeto ancla: el cuenco que le ofrece.`,
    camara: {
      a: "PLANO GENERAL de los dos acercándose desde extremos opuestos de la explanada.",
      b: "la cámara ha AVANZADO hasta el centro y ha bajado a la altura de las manos: PLANO MACRO de un cuenco de comida pasando de las manos de Nompanem a las del viajero.",
    },
    ini: "los dos caminan uno hacia el otro desde extremos opuestos.",
    fin: "en el centro, un cuenco pasa de unas manos a otras; ninguno de los dos se ha arrodillado ni ha bajado la cabeza.",
  }, "arrodillarse, besar la mano, sumision, aureola, coronacion"),

  // b4 — «Dicen que traes cosas que nos faltan». No pidió el mando.
  escp("b4a", [ref("nompanem_cacique"), ref("bochica_anciano"), ref("otga_encuentro")], {
    comun: `${NOMPA} diciéndole que dicen que trae cosas que les faltan. Pregunta primero. Objeto ancla: las dos caras a la misma altura.`,
    camara: {
      a: "PLANO MEDIO de los dos sentados frente a frente en las esteras, a la misma altura.",
      b: "la cámara ha AVANZADO hasta Nompanem: PLANO MEDIO CORTO de su cara haciendo la pregunta, con el viajero desenfocado enfrente.",
    },
    ini: "están sentados frente a frente, los dos a la misma altura.",
    fin: "de cerca, la cara de Nompanem está haciendo la pregunta sin desconfianza y sin adulación: sólo pregunta.",
  }, "arrodillarse, aureola, sermon, trono, texto"),
  escp("b4b", [ref("bochica_anciano"), ref("nompanem_cacique"), ref("baston_mando")], {
    comun: `El viajero NO PIDE EL MANDO. Se dice con dónde están sus manos: lejos del bastón, siempre. Objeto ancla: el bastón y las manos del viajero.`,
    camara: {
      a: "PLANO MEDIO CORTO del viajero contestando, con las manos abiertas sobre sus propias rodillas.",
      b: "la cámara ha hecho un PANEO LATERAL hasta el bastón, apoyado a un lado: PLANO MACRO de la vara sola sobre la estera, con las manos del viajero fuera del cuadro.",
    },
    ini: "contesta con las manos abiertas sobre sus rodillas, sin señalar nada.",
    fin: "el bastón está solo, apoyado a un lado de la estera, y en todo el cuadro no hay ninguna mano acercándose a él.",
  }, "el viajero tomando el baston, exigir, amenazar, aureola, ejercito"),

  // b5 — Habló de un cielo que premia. Del trabajo que nadie termina solo.
  escp("b5a", [ref("bochica_anciano"), ref("familias_muiscas"), ref("valle_iraca")], {
    comun: `Durante días habla de un cielo que premia y de un castigo que espera a quien hace daño. Habla sentado entre la gente, sin altar y sin público arrodillado. Objeto ancla: el corro.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara hablando, tranquila.",
      b: "la cámara ha RETROCEDIDO y ha subido: PICADO del corro con él sentado en el suelo igual que los demás, sin ninguna tarima y sin nadie de rodillas.",
    },
    ini: "habla de cerca, sin levantar la voz.",
    fin: "desde arriba se ve que está sentado en el suelo como todos: no hay tarima, ni altar, ni nadie arrodillado en todo el corro.",
  }, "altar, pulpito, cruces grandes, misa, arrodillarse, aureola"),
  esc("b5b", [ref("copo_algodon"), ref("telar_marco"), ref("familias_muiscas")], {
    comun: "Del hilo que se vuelve más parejo si se devana con paciencia, y del trabajo que NINGUNA FAMILIA ALCANZA A TERMINAR SOLA. Las dos cosas se dicen con las manos. Objeto ancla: el hilo y las manos que trabajan juntas.",
    camara: {
      a: "PLANO MACRO de un hilo devanándose despacio y quedando parejo entre dos dedos.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL de un patio con tres telares a la vez y seis personas trabajando en ellos, pasando hilo de unas a otras.",
    },
    ini: "el hilo se devana despacio entre dos dedos y va quedando parejo.",
    fin: "desde arriba hay tres telares montados en el mismo patio y seis pares de manos trabajando, pasándose hilo: ninguno lo saca solo.",
  }, "maquinas, telares industriales, aureola, magia, resplandor"),

  // b6 — Las mantas alcanzaron. Llevó su bastón al centro.
  escp("b6a", [ref("nompanem_cacique"), ref("mercado_bacata"), ref("familias_muiscas")], {
    comun: `${NOMPA} observando los cambios: las mantas alcanzan para el intercambio y los caminos vuelven a usarse sin tantas disputas. Él MIRA: es lo que hace un gobernante. Objeto ancla: lo que él observa.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara mirando hacia el mercado, atento y callado.",
      b: "la cámara ha girado y AVANZADO en la dirección de su mirada: PLANO GENERAL del mercado con montones de mantas nuevas en varios puestos y gente cambiando sin discutir.",
    },
    ini: "mira hacia el mercado sin decir nada.",
    fin: "lo que miraba es un mercado con mantas nuevas en cinco puestos distintos y tratos cerrándose sin una sola discusión.",
  }, "aureola, milagro, resplandor, abundancia barroca, oro"),
  escp("b6b", [ref("nompanem_cacique"), ref("baston_mando"), ref("bochica_anciano"), ref("otga_encuentro")], {
    comun: `Una mañana lleva SU bastón al centro del encuentro y lo deja frente al visitante. Es ÉL quien lo hace, por su propio pie. Objeto ancla: el bastón en el suelo.`,
    camara: {
      a: "PLANO MEDIO de él caminando por la explanada con el bastón en las dos manos.",
      b: "la cámara ha BAJADO al suelo delante del viajero: PLANO MACRO del bastón dejado en horizontal sobre la tierra apisonada, con los pies descalzos del viajero detrás de él.",
    },
    ini: "camina por la explanada llevando el bastón con las dos manos.",
    fin: "el bastón ha quedado en el suelo, en horizontal, delante de los pies del viajero, y las manos de Nompanem ya no lo tocan.",
  }, "coronacion, corona, cetro, trono, aclamacion, aureola"),

  // b7 — «No debo conservar el puesto solo por llevarlo».
  escp("b7a", [ref("nompanem_cacique"), ref("bochica_anciano"), ref("baston_mando")], {
    comun: `${NOMPA} pidiéndole que se haga cargo: si sabe ordenar mejor que él, NO debe conservar el puesto sólo por llevarlo. La razón es declarada y no hay derrota en ella. Objeto ancla: su cara.`,
    camara: {
      a: "PLANO MACRO del bastón en el suelo entre los dos, con dos pares de pies a cada lado.",
      b: "la cámara ha SUBIDO a la altura de los ojos: PLANO MEDIO CORTO de la cara de Nompanem diciéndolo, tranquila y sin amargura.",
    },
    ini: "el bastón está en el suelo entre los dos pares de pies.",
    fin: "de cerca, Nompanem lo está diciendo con la cara tranquila: no lo está entregando derrotado, lo está entregando por una razón.",
  }, "humillacion, derrota, llanto, arrodillarse, destronamiento"),
  escp("b7b", [ref("bochica_anciano"), ref("baston_mando"), ref("familias_muiscas")], {
    comun: `El viajero responde que lo que se enseña debe guardarse VOLUNTARIAMENTE y con buen corazón, no con rigores de este mundo. Y acepta el bastón. Objeto ancla: las manos levantando el bastón.`,
    camara: {
      a: "PLANO MEDIO CORTO de la cara del viajero contestando, con el bastón fuera de cuadro.",
      b: "la cámara ha BAJADO hasta el suelo: PLANO MACRO de sus dos manos levantando la vara de la tierra por primera vez, despacio.",
    },
    ini: "contesta con el bastón todavía en el suelo, sin mirarlo.",
    fin: "sus dos manos levantan la vara del suelo despacio: es la primera vez que la toca en todo el video.",
  }, "coronacion, aclamacion, aureola, corona, trono, multitud"),

  // b8 — No transformó el valle: preguntó quién sabía qué.
  escp("b8a", [ref("bochica_anciano"), ref("familias_muiscas"), ref("valle_iraca")], {
    comun: `NO transforma el valle de un día para otro: PREGUNTA quién conoce el agua, quién teje, quién recuerda los acuerdos y quién puede hablar por cada población. Objeto ancla: las caras que contestan.`,
    camara: {
      a: "PLANO MEDIO CORTO de él preguntando a alguien, con el bastón apoyado y sin usarlo para señalar.",
      b: "la cámara ha hecho un TRAVELLING LATERAL por cuatro grupos distintos: PLANO GENERAL en el que en cada grupo hay alguien hablando y él escuchando, con el bastón siempre bajo.",
    },
    ini: "pregunta a alguien, con el bastón apoyado en el suelo.",
    fin: "recorridos los cuatro grupos, en cada uno hay alguien explicándole algo y él escuchando: el bastón no ha señalado a nadie.",
  }, "ordenes, castigos, guardias, aureola, milagros, transformacion magica"),
  escp("b8b", [ref("bochica_anciano"), ref("familias_muiscas"), ref("acequia_bosa")], {
    comun: `Devolvió tareas a muchas manos. Objeto ancla: el reparto del trabajo.`,
    camara: {
      a: "PLANO MACRO del bastón apoyado en el suelo, quieto, con las manos de él lejos de la empuñadura.",
      b: "la cámara ha RETROCEDIDO y ha subido: GRAN PLANO GENERAL del valle con cuatro cuadrillas distintas trabajando a la vez en cuatro sitios, y él pequeño en uno de ellos.",
    },
    ini: "el bastón está apoyado en el suelo y sus manos no lo sujetan.",
    fin: "desde arriba hay cuatro cuadrillas trabajando en cuatro sitios del valle a la vez, y él es una figura más en una de ellas.",
  }, "capataz, latigos, ordenes, aureola, esclavitud"),

  // b9 — Hubo desacuerdos y algunas decisiones se corrigieron.
  escp("b9a", [ref("bochica_anciano"), ref("familias_muiscas"), ref("valle_iraca")], {
    comun: `Hubo DESACUERDOS. Este par existe porque el acta lo declara irrenunciable: su gobierno no fue perfecto. Objeto ancla: las caras que no están de acuerdo.`,
    camara: {
      a: "PLANO MEDIO de un corro discutiendo, con dos personas de pie y enfrentadas.",
      b: "la cámara ha RETROCEDIDO y ha girado hacia él: PLANO MEDIO CORTO del viajero escuchando la discusión desde un lado, sin cortarla.",
    },
    ini: "dos están de pie discutiendo dentro del corro.",
    fin: "a un lado, el viajero escucha la discusión sin cortarla y sin dar la razón a ninguno: la deja pasar entera.",
  }, "castigos, expulsiones, autoridad absoluta, aureola, violencia"),
  escp("b9b", [ref("bochica_anciano"), ref("familias_muiscas"), ref("acequia_bosa")], {
    comun: `Y algunas decisiones TUVIERON QUE CORREGIRSE. Se ve en una obra que se deshace y se vuelve a hacer de otro modo. Objeto ancla: la acequia mal trazada.`,
    camara: {
      a: "PLANO MACRO de un canal de tierra abierto en mala pendiente, con el agua estancada en él sin correr.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del sembrado con ese canal ya tapado y otro nuevo abierto en otra dirección, con gente cavándolo.",
    },
    ini: "en el canal abierto el agua se ha quedado estancada y no baja.",
    fin: "desde lejos, ese canal está tapado con la tierra que sacaron y hay otro nuevo abriéndose en otra dirección: la decisión se corrigió.",
  }, "castigo al culpable, humillacion, aureola, milagro que lo arregla"),

  // b10 — Reunió a la comunidad. Le devolvió el bastón.
  escp("b10a", [ref("bochica_anciano"), ref("familias_muiscas"), ref("piedra_huella_iza"), ref("valle_iraca")], {
    comun: `Cuando decide marcharse, reúne a la comunidad cerca de Iza. ${NOMPA} cree que elegirá a otra persona. Objeto ancla: las caras de los que esperan ser elegidos.`,
    camara: {
      a: "PLANO MEDIO de tres o cuatro personas del corro incorporándose un poco, esperando ser nombradas.",
      b: "la cámara ha RETROCEDIDO y ha subido: PICADO de la reunión entera con el viajero en el centro, el bastón en su mano y todas las caras vueltas hacia él.",
    },
    ini: "tres o cuatro se incorporan un poco, esperando que digan su nombre.",
    fin: "desde arriba, la reunión entera está vuelta hacia el centro, donde él tiene el bastón todavía en la mano.",
  }, "coronacion, corona, aclamacion, votacion, texto, aureola"),
  escp("b10b", [ref("bochica_anciano"), ref("nompanem_cacique"), ref("baston_mando"), ref("familias_muiscas")], {
    comun: `Pero le devuelve el bastón A ÉL, delante de toda la gente. Objeto ancla: el bastón pasando de vuelta.`,
    camara: {
      a: "PLANO MEDIO CORTO de la cara de Nompanem, que no esperaba que fuera para él.",
      b: "la cámara ha BAJADO hasta las manos: PLANO MACRO del mismo bastón pasando de las manos del viajero a las de Nompanem, sin ningún adorno nuevo encima.",
    },
    ini: "la cara de Nompanem se queda parada: no esperaba esto.",
    fin: "el bastón está pasando de unas manos a otras y es exactamente el mismo de antes: la misma madera gastada, sin talla y sin oro.",
  }, "coronacion, corona, cetro nuevo, oro, aureola, aclamacion"),

  // b11 — «Gobernar no es tener todas las respuestas». (CITA)
  escp("b11a", [ref("bochica_anciano"), ref("nompanem_cacique"), ref("familias_muiscas")], {
    comun: `Y le dice una sola cosa, delante de todos los reunidos: gobernar no es tener todas las respuestas. Objeto ancla: la cara del viajero.`,
    camara: {
      a: "PLANO MEDIO de los dos con el bastón ya en manos de Nompanem.",
      b: "la cámara ha AVANZADO hasta el viajero: PRIMER PLANO de su cara diciendo la frase, con la reunión entera desenfocada detrás.",
    },
    ini: "los dos están frente a frente con el bastón ya cambiado de manos.",
    fin: "de cerca, el viejo dice la frase mirándolo, sin levantar la voz, con todos oyéndolo detrás.",
  }, "sermon, pulpito, aureola, tablas de la ley, texto, aplausos"),
  escp("b11b", [ref("bochica_anciano"), ref("nompanem_cacique"), ref("familias_muiscas")], {
    comun: `Que es aprender a quién preguntar y devolver a la gente una parte de cada decisión, Y QUE ESO YA LO SABÍA ÉL. La vuelta completa: es lo que hizo al ofrecer el bastón. Objeto ancla: las caras del corro.`,
    camara: {
      a: "PLANO MEDIO CORTO de la cara de Nompanem oyendo esa última parte.",
      b: "la cámara ha RETROCEDIDO y ha girado sobre sí misma: PLANO GENERAL de la reunión entera, con las caras vueltas ahora hacia Nompanem y no hacia el viajero.",
    },
    ini: "la cara de Nompanem recibe esa última parte de la frase.",
    fin: "dando la vuelta se ve que todas las caras del corro se han girado ya hacia él: el que se va ha dejado de ser el centro.",
  }, "aclamacion, aplausos, coronacion, aureola, llanto"),

  // b12 — Miró el bastón: pesaba distinto.
  escp("b12a", [ref("nompanem_cacique"), ref("baston_mando")], {
    comun: `${NOMPA} mirando el bastón: PARECÍA EL MISMO, pesaba de otra manera. El objeto NO cambia: lo que cambió está en quien lo carga. Objeto ancla: el bastón.`,
    camara: {
      a: "PLANO MACRO de la empuñadura en su mano, EXACTAMENTE el mismo encuadre que el primer cuadro del video, con la misma madera y el mismo desgaste.",
      b: "la cámara ha SUBIDO a su cara: PLANO MEDIO CORTO de Nompanem mirando la vara que lleva en la mano, con otra cara distinta de la del principio.",
    },
    ini: "la empuñadura en su mano es idéntica a la del primer cuadro: ni una talla nueva, ni un adorno.",
    fin: "su cara mirando el mismo objeto no es la misma de antes: lo que cambió está aquí, no en la madera.",
  }, "baston con oro, talla nueva, gemas, resplandor, aureola, magia"),
  escp("b12b", [ref("nompanem_cacique"), ref("familias_muiscas"), ref("valle_iraca")], {
    comun: `Lo primero que hace con el bastón devuelto es preguntar. Objeto ancla: a quién pregunta.`,
    camara: {
      a: "PLANO MEDIO de él de pie con el bastón, girándose hacia el corro.",
      b: "la cámara ha RETROCEDIDO y ha subido: PICADO del corro con él sentado en el suelo con los demás, el bastón cruzado sobre las rodillas y alguien explicándole algo.",
    },
    ini: "se gira hacia el corro con el bastón en la mano.",
    fin: "desde arriba se ha sentado en el suelo con todos, con el bastón cruzado sobre las rodillas, y es otro el que está hablando.",
  }, "trono, corona, ordenes, guardias, aureola, aclamacion"),

  // b13 — Apoyó un pie en una roca y desapareció.
  escp("b13a", [ref("bochica_anciano"), ref("piedra_huella_iza"), ref("familias_muiscas")], {
    comun: `El viajero apoyando un pie en una roca cerca de Iza y desapareciendo. NO hay ascensión: se apoya y ya no está. Objeto ancla: la roca.`,
    camara: {
      a: "PLANO MEDIO de él acercándose a una piedra grande, gris y redondeada, y levantando un pie hacia ella.",
      b: "la cámara ha BAJADO hasta la piedra y se ha puesto casi cenital: PLANO MACRO de la superficie de la roca con LA MISMA huella de un pie descalzo de la referencia hundida en ella, y nadie alrededor.",
    },
    ini: "levanta un pie hacia la piedra, todavía entero en el cuadro.",
    fin: "en la piedra ha quedado hundida la huella de un pie descalzo —el arco, el talón y los cinco dedos— y en todo el cuadro ya no hay nadie.",
  }, "ascension, nubes doradas, angeles, rayos, resplandor, desaparicion con particulas"),
  esc("b13b", [ref("piedra_huella_iza"), ref("familias_muiscas"), ref("valle_iraca")], {
    comun: "Años después. Quedó su huella, y las que esperan hijo van a rasparla. Es un uso concreto de la gente, no un culto con altar. Objeto ancla: la huella gastada por el raspado.",
    camara: {
      a: "PLANO MACRO de la huella en la roca, con el borde interior más claro y liso por el raspado de muchas manos.",
      b: "la cámara ha RETROCEDIDO y ha subido hasta un GRAN PLANO GENERAL final del valle de Iraca sembrado y poblado, con la piedra pequeña en un borde y un sendero gastado que llega hasta ella.",
    },
    ini: "el interior de la huella está más claro y liso de tanto raspado.",
    fin: "desde arriba, el valle sigue sembrado y con su gente, y hasta la piedra llega un sendero gastado por los años: se va, se raspa y se vuelve.",
  }, "altar, ofrendas, velas, iconos, procesion, aureola, texto"),
]);
