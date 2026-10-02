// Keyframes de Pacanchique y Azay — 15 bloques × 2 escenas × 2 cuadros
// = 60 imágenes ≈ 150 s.
// Guion: guion-pacanchique-v2.json (N=15) · Acta: acta-pacanchique.json (29 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _muisca-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · Azay NO ES RESCATADA: DECIDE. El canon marca las dos cosas —«nadie
//   preguntó qué quería ella» cuando el zaque la toma, y «entonces decido yo»
//   cuando toma las hojas—. El guion no puede reducirla a objeto de un plan.
//   La cámara le da el centro en el bloque de la decisión.
// · El plan NO es un truco de amantes: es un riesgo mortal que ella acepta
//   sabiendo que él sólo va a INTENTARLO.
// · Pacanchique NO es un traidor de nacimiento ni un héroe vengador: el canon
//   dice qué creyó y en qué se equivocó, sin absolverlo ni condenarlo.
// · El relato NO presenta la conquista como castigo merecido al zaque: los
//   extranjeros tomaron más de lo que él quiso entregar, y en Bonza su
//   venganza ya no distinguía entre el zaque y la gente.
// · Su muerte NO se cuenta con certeza: una flecha O un proyectil, nadie lo
//   contó igual. Esa duda es del canon y se conserva COMO DUDA en imagen.
// · El cierre NO es una moraleja sobre la venganza: es una comparación exacta
//   entre dos decisiones que el canon declara desiguales.
//
// TRATO: las ejecuciones NO se muestran. La violencia se cuenta por lo que
// queda y por lo que él encuentra al llegar tarde.
//
// GUION DE LUZ: huertos de Baganique → luz dura de la convocatoria → camino
// de vuelta → noche del cercado → hojas pálidas en la mano → la decisión →
// entrega del cuerpo → despertar al amanecer → días ocultos → irrupción →
// vuelta tarde → llegada de los extranjeros → caminos mostrados → Bonza →
// caída y comparación final.

import { DIRECCION, AVOID_BASE, ref, esc, escp, armar } from "./_muisca-comun.mjs";

export const SPEC_NAME = "muisca-pacanchique-escenas";
export const OUT_DIR = "muiscas/videos/pacanchique/keyframes";
export { DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; ejecuciones explicitas, ahorcamiento, decapitacion, sangre abundante, cadaveres en primer plano; violacion, agresion sexual, desnudez, sexualizacion; escenas de alcoba, besos, romanticismo explicito; conquistadores heroicos, banderas, cruces de conquista, caballos gloriosos; moraleja dibujada, texto, balanza; suicidio, envenenamiento mostrado con agonia";
export const PALETTE =
  "verde de huerto y de maiz joven, crema de algodon crudo, verde muy palido y grisaceo de las hojas, ocre de tierra de Hunza, pardo de camino, gris de polvo de caballo; sin saturacion ni neones";

const PACAN =
  "EL MISMO Pacanchique de la referencia (hombre joven de unos veintidós años, delgado y nervioso, rostro despierto y tenso, pelo negro liso hasta la nuca, manta corta de algodón crudo ceñida a la cintura con un cordón de fique, descalzo)";
const AZAY =
  "LA MISMA Azay de la referencia (mujer de unos veinte años, rostro sereno y de mirada firme, pelo negro liso muy largo y suelto, manta de algodón crudo del pecho a la pantorrilla anudada al hombro con una cenefa tejida sobria, descalza)";
const ZAQUE =
  "EL MISMO zaque de Hunza de la referencia (hombre de unos cincuenta años, rostro grave y contenido, pelo negro recogido bajo una cinta tejida ancha, manta de algodón crudo de tejido fino anudada al hombro derecho y ceñida a la cintura)";
const HOJAS =
  "EL MISMO manojo de hojas pálidas de la referencia (tallos con hojas alargadas de un verde muy pálido, casi grisáceo, con el envés más claro y los bordes algo enrollados, atados con una fibra)";

export const ITEMS = armar([
  // b1 — Crecieron entre los huertos. Llegó la convocatoria.
  escp("b1a", [ref("pacanchique_joven"), ref("azay_joven"), ref("refugio_huertos")], {
    comun: `Luz de media mañana. ${PACAN} y ${AZAY} en los huertos de Baganique, donde crecieron. Habían hablado de formar una casa. Objeto ancla: el trabajo que hacen juntos.`,
    camara: {
      a: "PLANO MACRO de cuatro manos —dos y dos— atando la misma mata de maíz a su vara.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL de los huertos en hileras con los dos pequeños dentro, trabajando en la misma fila.",
    },
    ini: "cuatro manos atan juntas la misma mata a su vara.",
    fin: "desde arriba se ven los huertos enteros de Baganique y los dos en la misma hilera, trabajando uno al lado del otro.",
  }, "beso, abrazo, escena romantica explicita, desnudez"),
  escp("b1b", [ref("familias_muiscas"), ref("camino_carrera"), ref("manta_reparto")], {
    comun: "Luz dura. Llega la convocatoria del zaque y las familias deben presentarse en Hunza con ofrendas. Objeto ancla: los bultos de ofrenda en marcha.",
    camara: {
      a: "PLANO MACRO de un fardo de mantas atado a una espalda, con el cordón apretado.",
      b: "la cámara ha RETROCEDIDO y ha subido: GRAN PLANO GENERAL del camino con varias familias yendo hacia Hunza cargadas, todas en la misma dirección.",
    },
    ini: "un fardo de mantas apretado contra una espalda, muy de cerca.",
    fin: "desde arriba, varias familias enteras van por el camino cargando ofrendas hacia el mismo sitio.",
  }, "soldados, cadenas, violencia, llanto, arrastrar"),

  // b2 — El zaque vio a Azay. Nadie preguntó qué quería ella.
  escp("b2a", [ref("zaque_hunza"), ref("azay_joven"), ref("cercado_bacata"), ref("familias_muiscas")], {
    comun: `Luz de mediodía en el cercado de Hunza. Durante la reunión ${ZAQUE} ve a ${AZAY} y ordena que permanezca en su cercado. Objeto ancla: la mirada y la orden.`,
    camara: {
      a: "PLANO MEDIO LARGO del patio lleno de familias con las ofrendas puestas en el suelo.",
      b: "la cámara ha AVANZADO siguiendo la mirada del zaque hasta ella: PLANO MEDIO CORTO de Azay de pie entre los suyos, sin haber hecho nada para llamar la atención.",
    },
    ini: "el patio está lleno de familias con sus ofrendas en el suelo.",
    fin: "al final de esa mirada está ella, de pie entre los suyos y sin haber hecho nada: no ha hablado, ni ha bailado, ni se ha adelantado.",
  }, "sexualizacion, desnudez, poses insinuantes, violencia sexual"),
  escp("b2b", [ref("azay_joven"), ref("familias_muiscas"), ref("cercado_bacata")], {
    comun: `NADIE PREGUNTÓ QUÉ QUERÍA ELLA. Esa frase del canon se cuenta con las bocas: hablan todos menos ella. Objeto ancla: su boca cerrada.`,
    camara: {
      a: "PLANO MEDIO de tres hombres hablando entre ellos y decidiendo, con ella cortada por el borde del cuadro.",
      b: "la cámara ha hecho un PANEO LATERAL hasta ella y se ha acercado: PRIMER PLANO de su cara con la boca cerrada, oyendo cómo lo deciden.",
    },
    ini: "tres hombres hablan entre ellos y lo están decidiendo.",
    fin: "de cerca, ella tiene la boca cerrada y los ojos abiertos: lo está oyendo todo y nadie se ha vuelto a preguntarle nada.",
  }, "llanto teatral, gritos, forcejeo, violencia, desmayo"),

  // b3 — Baganique regresó solo. Pacanchique recogió la planta.
  escp("b3a", [ref("pacanchique_joven"), ref("familias_muiscas"), ref("camino_carrera")], {
    comun: `Luz de tarde. Baganique regresa SOLO con su hijo. Objeto ancla: el hueco en la fila que vuelve.`,
    camara: {
      a: "PLANO MEDIO por detrás de los dos volviendo por el camino, juntos y callados.",
      b: "la cámara se ha ELEVADO y ha retrocedido: PLANO GENERAL del camino con los dos solos en él y el hueco de una tercera persona bien visible entre ellos.",
    },
    ini: "los dos vuelven de espaldas por el camino, sin hablar.",
    fin: "desde arriba se ve el camino entero con sólo dos figuras en él, andando separadas por un hueco que no llena nadie.",
  }, "llanto teatral, gritos, violencia, soldados"),
  escp("b3b", [ref("pacanchique_joven"), ref("planta_hojas_palidas")], {
    comun: `En el camino, ${PACAN} recoge ${HOJAS}, que su padre le había enseñado a reconocer y que puede dormir un cuerpo hasta hacerlo parecer muerto. Objeto ancla: las hojas.`,
    camara: {
      a: "PLANO MEDIO de él agachándose en el borde del camino, deteniéndose de golpe.",
      b: "la cámara ha BAJADO hasta sus manos: PLANO MACRO del manojo de hojas alargadas de verde muy pálido, con el envés más claro, arrancadas y sostenidas.",
    },
    ini: "se para de golpe en el borde del camino y se agacha.",
    fin: "en sus manos hay un manojo de hojas alargadas de verde grisáceo, con los bordes enrollados: sabe exactamente qué son.",
  }, "magia, pociones burbujeantes, calderos, brujeria, resplandor"),

  // b4 — Cruzó los cercados. «Después intentaré despertarte».
  escp("b4a", [ref("pacanchique_joven"), ref("cercado_bacata"), ref("altiplano_noche")], {
    comun: `Noche. ${PACAN} cruzando los cercados. Objeto ancla: la empalizada.`,
    camara: {
      a: "PLANO MACRO de sus manos agarrando las varas de una empalizada en la oscuridad.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL nocturno del cercado con él pequeño pasando entre dos casas y el patio dormido alrededor.",
    },
    ini: "sus manos se agarran a las varas de la empalizada.",
    fin: "desde arriba se le ve ya dentro, cruzando entre dos casas, con todo el cercado dormido a su alrededor.",
  }, "soldados, persecucion, violencia, armas, alarma"),
  escp("b4b", [ref("pacanchique_joven"), ref("azay_joven"), ref("casa_barro_paja")], {
    comun: `La encuentra DESPIERTA. Él le explica el plan: dejará de respirar como quien duerme, pedirán devolverla a su familia, y después INTENTARÁ despertarla. Objeto ancla: las dos caras en la penumbra.`,
    camara: {
      a: "PLANO MEDIO de ella sentada y despierta en la penumbra, esperando, antes de que él entre.",
      b: "la cámara ha RODEADO hasta ponerse entre los dos: PLANO MEDIO CORTO con las dos caras muy cerca, él explicando y ella escuchando sin interrumpirlo.",
    },
    ini: "ella ya está sentada y despierta en la penumbra: no la despertaron.",
    fin: "de cerca están los dos frente a frente, él explicando el plan entero y ella escuchándolo sin interrumpir y sin llorar.",
  }, "beso, abrazo, escena de alcoba, desnudez, llanto teatral"),

  // b5 — «¿Intentarás?». Azay sostuvo las hojas.
  escp("b5a", [ref("azay_joven"), ref("pacanchique_joven")], {
    comun: `Ella pregunta si SÓLO lo intentará, y él contesta que no conoce otra salida. El plan es un riesgo mortal y los dos lo saben. Objeto ancla: las dos caras.`,
    camara: {
      a: "PLANO MEDIO CORTO de la cara de ella haciendo la pregunta, sin dramatismo.",
      b: "la cámara ha RODEADO hasta él: PLANO MEDIO CORTO de la cara de Pacanchique contestando, con la mandíbula tensa y sin ofrecer ninguna garantía.",
    },
    ini: "ella pregunta de cerca, tranquila, mirándolo.",
    fin: "él contesta sin prometer nada: la cara tensa y los ojos bajos, porque no tiene otra cosa que ofrecer.",
  }, "llanto, suplica, abrazo, beso, aureola"),
  escp("b5b", [ref("azay_joven"), ref("planta_hojas_palidas"), ref("pacanchique_joven")], {
    comun: `${AZAY} SOSTIENE LAS HOJAS: el riesgo también es suyo. Es ella quien las coge. Objeto ancla: las hojas pasando a su mano.`,
    camara: {
      a: "PLANO MACRO del manojo de hojas pálidas en la mano de él, tendido a media altura.",
      b: "la cámara ha girado y se ha acercado a la otra mano: PLANO MACRO de las hojas ya en la mano de Azay, con los dedos de ella cerrados alrededor del atado.",
    },
    ini: "el manojo está en la mano de él, tendido y sin que nadie lo tome.",
    fin: "las hojas están ahora en la mano de ella, con los dedos cerrados alrededor del atado de fibra: las tiene ella.",
  }, "forzar, obligar, violencia, llanto, aureola, magia"),

  // b6 — «Entonces decido yo». Bebió. (CITA)
  escp("b6a", [ref("azay_joven"), ref("pacanchique_joven")], {
    comun: `${AZAY} diciendo que entonces DECIDE ELLA. Es el único momento en que decide y la imagen le da el centro entero. Objeto ancla: su cara.`,
    camara: {
      a: "PLANO MEDIO de los dos, él en primer término y ella detrás y más pequeña.",
      b: "la cámara se ha desplazado hasta dejarlo a él fuera de cuadro: PRIMER PLANO de la cara de Azay diciendo la frase, sola en el cuadro entero.",
    },
    ini: "él ocupa el primer término y ella queda detrás, más chica.",
    fin: "él ha salido del cuadro y ella lo ocupa entero, de frente, diciendo la frase: no hay nadie más aquí.",
  }, "llanto, suplica, sumision, aureola, violencia"),
  escp("b6b", [ref("azay_joven"), ref("planta_hojas_palidas")], {
    comun: `Bebe la preparación de hojas pálidas. NO se muestra agonía: bebe y se sienta. Objeto ancla: la escudilla.`,
    camara: {
      a: "PLANO MACRO de la escudilla pequeña de barro en sus dos manos, con la preparación verde grisácea dentro.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO de ella sentándose en la estera con la escudilla ya vacía a un lado y las manos en el regazo.",
    },
    ini: "la escudilla está llena en sus dos manos y todavía no la ha levantado.",
    fin: "la escudilla está vacía a un lado y ella se ha sentado en la estera con las manos en el regazo, esperando.",
  }, "agonia, convulsiones, espuma, gritos, dolor, veneno dibujado"),

  // b7 — La creyeron muerta. Azay despertó.
  escp("b7a", [ref("azay_joven"), ref("familias_muiscas"), ref("cercado_bacata")], {
    comun: `Horas después el cercado la cree muerta y su cuerpo es entregado a Baganique. Se cuenta a media distancia y sin primeros planos. Objeto ancla: la estera que sale del cercado.`,
    camara: {
      a: "PLANO GENERAL a media distancia del patio con un grupo alrededor de una estera, todos de espaldas.",
      b: "la cámara ha RETROCEDIDO hasta el vano del cercado: PLANO GENERAL desde fuera con la estera saliendo cargada por cuatro y la familia esperando en el camino.",
    },
    ini: "en el patio hay un grupo de espaldas alrededor de una estera.",
    fin: "desde fuera, la estera sale del cercado cargada por cuatro personas y la familia la está esperando en el camino.",
  }, "cadaver en primer plano, rostro de muerta, llanto teatral, funeral"),
  escp("b7b", [ref("pacanchique_joven"), ref("azay_joven"), ref("refugio_huertos")], {
    comun: `Lejos de las miradas, ${PACAN} aplica otra mezcla sobre sus labios y espera. Termina la noche y ${AZAY} ABRE LOS OJOS. Objeto ancla: sus párpados.`,
    camara: {
      a: "PLANO MACRO de sus párpados cerrados, quietos, con la luz azul de antes del alba encima.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO del interior del cobertizo con ella incorporándose sobre la estera y él sentado al lado, sin tocarla.",
    },
    ini: "los párpados están cerrados y no se mueven.",
    fin: "se ha incorporado sobre la estera y él está sentado al lado, mirándola sin tocarla: los dos despiertos y sin decir nada.",
  }, "resurreccion milagrosa, resplandor, aureola, beso, llanto teatral"),

  // b8 — Días ocultos. Alguien descubrió el refugio.
  escp("b8a", [ref("pacanchique_joven"), ref("azay_joven"), ref("refugio_huertos")], {
    comun: `Días ocultos: comparten comida, miedo y una libertad demasiado pequeña. Lo pequeño de esa libertad se ve en el tamaño del sitio. Objeto ancla: el cobertizo.`,
    camara: {
      a: "PLANO MEDIO de los dos comiendo del mismo cuenco dentro del cobertizo, muy juntos.",
      b: "la cámara ha RETROCEDIDO atravesando la pared de varas y ha subido: GRAN PLANO GENERAL en picado de los huertos con el cobertizo diminuto entre las matas y todo el valle alrededor.",
    },
    ini: "los dos comen del mismo cuenco dentro del cobertizo, casi sin sitio.",
    fin: "desde muy arriba el cobertizo es una caseta minúscula entre las matas, con todo el valle alrededor donde no pueden salir: eso es toda su libertad.",
  }, "beso, escena de alcoba, desnudez, romanticismo explicito"),
  escp("b8b", [ref("familias_muiscas"), ref("refugio_huertos"), ref("pacanchique_joven")], {
    comun: `Alguien descubre el refugio y los hombres del zaque llegan antes de que puedan huir. Objeto ancla: las matas que se abren.`,
    camara: {
      a: "PLANO MACRO de unas matas de maíz separándose bruscamente desde fuera, con una mano apartándolas.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del huerto con hombres entrando por tres lados a la vez hacia el cobertizo.",
    },
    ini: "una mano aparta las matas de maíz desde fuera.",
    fin: "desde arriba, hombres entran por tres lados distintos del huerto hacia el cobertizo: no hay por dónde salir.",
  }, "violencia explicita, golpes, sangre, gritos, armas"),

  // b9 — Escapó entre los árboles. Los ejecutaron en Hunza.
  escp("b9a", [ref("pacanchique_joven"), ref("refugio_huertos")], {
    comun: `${PACAN} escapa entre los árboles. Se cuenta desde su carrera, y lo que deja atrás queda fuera de cuadro. Objeto ancla: las ramas que le pasan.`,
    camara: {
      a: "PLANO MEDIO corriendo a su lado entre los frutales, con las ramas cruzando el cuadro.",
      b: "la cámara se ha DETENIDO y ha girado hacia atrás: PLANO GENERAL del huerto ya lejano, con el cobertizo rodeado y él fuera de cuadro.",
    },
    ini: "corre entre los árboles y las ramas le pasan por delante.",
    fin: "la cámara se ha quedado atrás: se ve el huerto con el cobertizo rodeado de gente, y él ya no está en ninguna parte del cuadro.",
  }, "persecucion con violencia, sangre, heridas, disparos, gritos"),
  esc("b9b", [ref("cercado_bacata"), ref("manta_vasijas"), ref("familias_muiscas")], {
    comun: "Baganique y Azay son llevados de nuevo a Hunza y ejecutados. LA EJECUCIÓN NO SE MUESTRA: se muestra el patio después. Objeto ancla: las dos esteras.",
    camara: {
      a: "PLANO GENERAL del patio de Hunza vacío y barrido, con la luz de la tarde entrando de lado.",
      b: "la cámara ha AVANZADO hasta el centro y ha bajado: PLANO MACRO de dos esteras enrolladas y apoyadas contra la pared, con dos mantas dobladas encima.",
    },
    ini: "el patio está vacío, barrido, sin nadie y sin nada tirado.",
    fin: "contra la pared hay dos esteras enrolladas con dos mantas dobladas encima: eso es todo lo que queda de las dos personas.",
  }, "ahorcamiento, decapitacion, cadaveres, sangre, verdugos, multitud"),

  // b10 — Regresó tarde. Llegaron hombres de otra tierra.
  escp("b10a", [ref("pacanchique_joven"), ref("cercado_bacata"), ref("familias_muiscas")], {
    comun: `${PACAN} regresando TARDE y sin encontrar justicia ni un lugar donde poner la rabia. Objeto ancla: el patio que encuentra.`,
    camara: {
      a: "PLANO MEDIO de él entrando al patio, buscando con la mirada.",
      b: "la cámara ha RETROCEDIDO y ha subido: PICADO del patio con él solo en el centro, girando sobre sí mismo, y gente alrededor que sigue en lo suyo sin mirarlo.",
    },
    ini: "entra al patio y busca con la mirada.",
    fin: "desde arriba está solo en el centro del patio, girando sobre sí mismo, y la gente de alrededor sigue en lo suyo: no hay a quién reclamarle nada.",
  }, "venganza inmediata, armas, violencia, gritos, llanto teatral"),
  esc("b10b", [ref("campo_pelado"), ref("altiplano_noche")], {
    comun: "Tiempo después llegan al altiplano hombres de otra tierra, con animales enormes y armas desconocidas, que buscan rutas, gobernantes y oro. NO son heroicos ni redentores: son una fuerza que llega. Objeto ancla: las huellas que dejan.",
    camara: {
      a: "PLANO MACRO de una huella de casco de caballo hundida en la tierra del altiplano, mucho más grande que una pisada humana.",
      b: "la cámara ha RETROCEDIDO a lo largo del rastro y ha subido: GRAN PLANO GENERAL del altiplano con una columna avanzando a lo lejos, levantando una nube de polvo larga.",
    },
    ini: "una huella de casco, enorme, hundida en la tierra junto a una pisada descalza.",
    fin: "desde arriba, una columna avanza a lo lejos levantando una nube de polvo que cruza medio valle.",
  }, "conquistadores heroicos, banderas gloriosas, cruces, epica, rostros en primer plano"),

  // b11 — Les mostró los caminos. Creyó que podía apartarse.
  escp("b11a", [ref("pacanchique_joven"), ref("sendero_territorio"), ref("campo_pelado")], {
    comun: `${PACAN} mostrándoles los caminos. Es lo que hace y no se disimula. Objeto ancla: su brazo señalando.`,
    camara: {
      a: "PLANO MEDIO CORTO de su brazo extendido señalando una dirección, con la cara tensa.",
      b: "la cámara ha girado y AVANZADO en esa dirección: GRAN PLANO GENERAL del territorio con los caminos abriéndose hacia los cercados, las casas y los sembrados.",
    },
    ini: "su brazo señala una dirección concreta.",
    fin: "adonde señalaba se abre el territorio entero: los caminos hacia los cercados, las casas y los lugares donde vive la gente.",
  }, "traidor caricaturizado, oro, monedas, risa malvada, aureola"),
  escp("b11b", [ref("pacanchique_joven"), ref("campo_pelado"), ref("familias_muiscas")], {
    comun: `Creyó que podía castigar a UNA persona y después apartarse. Un ejército NO se queda en la habitación elegida. Objeto ancla: él intentando quedarse atrás.`,
    camara: {
      a: "PLANO MEDIO de él parándose en el camino y dejando pasar a la columna por su lado.",
      b: "la cámara se ha ELEVADO y ha seguido a la columna: GRAN PLANO GENERAL en picado con la columna repartiéndose en tres ramales por el valle y él minúsculo y quieto en el sitio donde se paró.",
    },
    ini: "se para en el camino y deja que la columna lo pase de largo.",
    fin: "desde arriba, la columna se ha repartido en tres ramales por el valle y va hacia sitios que él no eligió; él sigue parado donde se detuvo, sin poder pararla.",
  }, "risa malvada, aureola, castigo divino, moraleja dibujada, texto"),

  // b12 — Tomaron más. En Bonza comprendió que no distinguía.
  esc("b12a", [ref("cercado_bacata"), ref("santuario_moja"), ref("poblado_nuevo")], {
    comun: "Siguieron hacia cercados, casas y lugares sagrados, y tomaron MÁS de lo que él había querido entregar. Se cuenta por los sitios, no por la violencia. Objeto ancla: los tres sitios vaciados.",
    camara: {
      a: "PLANO MACRO de un suelo de esteras revuelto, con vasijas de ofrenda volcadas y vacías.",
      b: "la cámara ha RETROCEDIDO y ha subido en un travelling largo por el valle: GRAN PLANO GENERAL con tres sitios distintos a la vez —un cercado, un caserío y un santuario— todos con las puertas abiertas y sin nadie dentro.",
    },
    ini: "las vasijas de ofrenda están volcadas y vacías sobre las esteras revueltas.",
    fin: "desde arriba hay tres sitios del valle con las puertas abiertas y vacíos: el cercado, el caserío y el santuario.",
  }, "cadaveres, sangre, incendios gloriosos, conquistadores heroicos, cruces"),
  escp("b12b", [ref("pacanchique_joven"), ref("familias_muiscas"), ref("valle_iraca")], {
    comun: `En Bonza comprende que su venganza YA NO DISTINGUE entre el zaque y la gente. Objeto ancla: las caras de los que no tenían nada que ver.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara mirando algo que está fuera de cuadro.",
      b: "la cámara ha girado y ha hecho un PANEO en la dirección de su mirada: PLANO GENERAL de un grupo de gente corriente —labradores, tejedoras, viejos— parados en el camino con sus cosas en la mano.",
    },
    ini: "mira algo fuera de cuadro y la cara se le descompone.",
    fin: "lo que mira es gente corriente en el camino con sus cosas en la mano: ninguno es el zaque y a todos les ha llegado igual.",
  }, "moraleja dibujada, texto, balanza, castigo divino, aureola"),

  // b13 — Intentó regresar. Una flecha o un proyectil.
  escp("b13a", [ref("pacanchique_joven"), ref("sendero_territorio"), ref("refugio_huertos")], {
    comun: `Intenta REGRESAR: da media vuelta y va hacia los huertos. Objeto ancla: la dirección contraria.`,
    camara: {
      a: "PLANO MEDIO de él dando media vuelta en el camino, de espaldas a la columna.",
      b: "la cámara ha RETROCEDIDO delante de él y ha subido: PLANO GENERAL del camino de vuelta hacia los huertos, largo y todavía entero por delante.",
    },
    ini: "da media vuelta y empieza a andar en dirección contraria a la columna.",
    fin: "delante de él se abre el camino de vuelta hacia los huertos de Baganique, entero y sin recorrer.",
  }, "redencion, aureola, perdon, reencuentro, fantasma"),
  escp("b13b", [ref("pacanchique_joven"), ref("campo_pelado")], {
    comun: `Una flecha O un proyectil lo alcanza antes: NADIE LO CONTÓ IGUAL, y la duda se conserva. La imagen NO enseña qué fue: se queda en el suelo y en el cielo. Objeto ancla: lo que no se ve.`,
    camara: {
      a: "PLANO MEDIO de él caminando por el camino, sin nadie alrededor.",
      b: "la cámara ha BAJADO al suelo y ha basculado hacia arriba: CONTRAPICADO desde la tierra con el cielo vacío encima y el borde del camino a los lados, sin que se vea de dónde vino nada.",
    },
    ini: "camina solo por el camino de vuelta.",
    fin: "desde el suelo se ve el cielo vacío y el borde del camino: no hay arquero, ni arcabucero, ni dirección; no se sabe de dónde vino.",
  }, "flecha visible, disparo, arcabuz, sangre, agonia, camara lenta"),

  // b14 — Recordó a Azay sosteniendo la bebida.
  escp("b14a", [ref("pacanchique_joven"), ref("azay_joven"), ref("planta_hojas_palidas")], {
    comun: `Mientras cae recuerda a ${AZAY} sosteniendo la bebida. Es el mismo encuadre de la escena b5b, repetido exacto. Objeto ancla: las hojas en la mano de ella.`,
    camara: {
      a: "PLANO MACRO de las hojas pálidas en la mano de ella, EL MISMO encuadre exacto de la escena b5b.",
      b: "la cámara ha SUBIDO a su cara: PRIMER PLANO de Azay diciendo que decide ella, idéntico al de la escena b6a.",
    },
    ini: "las hojas en la mano de ella, con los dedos cerrados alrededor del atado.",
    fin: "su cara ocupa el cuadro entero diciendo la frase: es lo último que él tiene en la cabeza.",
  }, "aureola, fantasma, cielo, angeles, reencuentro, resplandor"),
  esc("b14b", [ref("campo_pelado"), ref("sabana_cultivos")], {
    comun: "Ella arriesgó su vida para RECUPERARLA; él entregó CAMINOS AJENOS. La tierra lo recibe sin absolverlo ni condenarlo. Objeto ancla: la tierra.",
    camara: {
      a: "PLANO MACRO del polvo del camino asentándose sobre la tierra, sin nada más.",
      b: "la cámara ha RETROCEDIDO y ha subido: GRAN PLANO GENERAL del altiplano con el camino cruzándolo, las columnas ya lejos por un lado y los huertos verdes por el otro.",
    },
    ini: "el polvo del camino se asienta despacio sobre la tierra.",
    fin: "desde arriba está el altiplano entero: las columnas ya lejos por un lado, los huertos verdes por el otro y el camino en medio, sin nada escrito encima.",
  }, "tumba, lapida, texto, balanza, moraleja, aureola, cielo"),

  // b15 — Su historia quedó entre dos violencias.
  esc("b15a", [ref("cercado_bacata"), ref("campo_pelado")], {
    comun: "Las dos violencias, en el mismo cuadro y sin jerarquía: la del gobernante que creyó poseer a Azay y la conquista que ninguna venganza individual podía controlar. Objeto ancla: las dos a la vez.",
    camara: {
      a: "PLANO MEDIO del patio de Hunza con las dos esteras enrolladas contra la pared, EL MISMO encuadre de la escena b9b.",
      b: "la cámara ha RETROCEDIDO atravesando el vano y ha subido: PLANO GENERAL en el que se ven a la vez el cercado del zaque y, al fondo del valle, la nube de polvo de la columna.",
    },
    ini: "las dos esteras enrolladas siguen contra la pared del patio.",
    fin: "desde arriba caben las dos cosas en el mismo cuadro: el cercado donde pasó lo primero y, al fondo, el polvo de lo segundo.",
  }, "balanza, texto, moraleja dibujada, simbolos, aureola"),
  escp("b15b", [ref("azay_joven"), ref("refugio_huertos"), ref("planta_hojas_palidas")], {
    comun: "El cierre NO es una moraleja sobre la venganza: es una comparación exacta entre dos decisiones desiguales. La última imagen es la de ella, que decidió por sí misma. Objeto ancla: los huertos donde crecieron.",
    camara: {
      a: "PLANO MACRO de una mata de hojas pálidas creciendo sola en el borde del huerto, sin que nadie la coja.",
      b: "la cámara ha RETROCEDIDO y ha subido hasta un GRAN PLANO GENERAL final de los huertos de Baganique en hileras, verdes y trabajados por gente nueva, con el cobertizo caído en un rincón.",
    },
    ini: "una mata de hojas pálidas crece sola en el borde del huerto, sin que nadie la toque.",
    fin: "desde arriba los huertos siguen en hileras y hay gente nueva trabajándolos; el cobertizo se ha caído en un rincón y nadie lo ha vuelto a levantar.",
  }, "fantasmas, aureola, tumba, texto, moraleja, reencuentro en el cielo"),
]);
