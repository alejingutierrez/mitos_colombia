// Keyframes de La madre de los hombres — 12 bloques × 2 escenas × 2 cuadros
// = 48 imágenes ≈ 120 s.
// Guion: guion-la-madre-de-los-hombres-v2.json (N=12)
// Acta:  acta-la-madre-de-los-hombres.json (24 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _muisca-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · Esta ficha NO es `bachue` (video YA PRODUCIDO) ni `creacion-muiscas`.
//   Aquí el mito es LA ENSEÑANZA: qué iba mostrando de poblado en poblado
//   —guardar semillas, escuchar antes de resolver, dejar abiertos los caminos
//   de todos—. La salida del agua y el regreso son el MARCO, no el asunto:
//   ocupan un bloque cada uno y NO repiten los encuadres de aquellos videos.
// · Bachué NO entrega una tierra terminada: habla como quien confía una tarea
//   que debe continuar sin ella.
// · El niño que sale del agua con ella DESPUÉS ES SU COMPAÑERO. El relato lo
//   dice en una línea, sin escándalo: ni se esconde ni se subraya.
// · Las normas que enseña son CONCRETAS y no son mandamientos: el agua no es
//   de una sola casa, un camino usado por muchos queda abierto. Reglas de
//   convivencia, no religión: nada de altares, tablas ni sermones.
// · NADIE intenta seguirlos al agua. No hay duelo ni intento de retenerla.
//
// GUION DE LUZ: niebla quieta de Iguaque → primera casa en tierras llanas →
// años de fuego → poblados nuevos → semillas en la mano → camino abierto →
// vejez mirando pueblos → subida lenta → caras reunidas en la orilla → agua
// que recibe → superficie oscura → caminos de vuelta al amanecer.

import { DIRECCION, AVOID_BASE, ref, esc, escp, armar } from "./_muisca-comun.mjs";

export const SPEC_NAME = "muisca-madre-hombres-escenas";
export const OUT_DIR = "muiscas/videos/la-madre-de-los-hombres/keyframes";
export { DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; altares, tablas de la ley, sermon, pulpito, cruces; aureola, halo, resplandor sobre ella; serpientes monstruosas, colmillos, lenguas bifidas amenazantes; ahogamiento, forcejeo, cadaveres, duelo, llanto colectivo; bebes de pecho o recien nacidos en primer plano; templos o monumentos a su memoria";
export const PALETTE =
  "azul mineral de laguna de paramo, verde de frailejon, crema de algodon crudo, pardo de barro y paja, ocre de semilla y de sendero; el naranja solo en los fogones; sin saturacion ni neones";

const BACHUE =
  "LA MISMA Bachué adulta de la referencia (mujer de rostro sereno y firme, pelo negro largo, manta de algodón crudo anudada al hombro, descalza)";
const ANCIANA =
  "LA MISMA Bachué anciana de la referencia (mujer mayor, pelo blanco, espalda algo encorvada, manta de algodón crudo anudada al hombro, descalza)";
const COMPANERO =
  "EL MISMO compañero anciano de la referencia (hombre mayor, pelo blanco, manta de algodón crudo al hombro, descalzo)";

export const ITEMS = armar([
  // b1 — Salió de Iguaque. No traían herramientas, mantas ni comida.
  esc("b1a", [ref("laguna_iguaque_pano"), ref("laguna_iguaque_A")], {
    comun: "Mañana con niebla cubriendo las cumbres. LA MISMA laguna de Iguaque de la referencia, con el agua quieta como antes de la primera palabra. Objeto ancla: la superficie quieta.",
    camara: {
      a: "PLANO MACRO de la superficie inmóvil, con la niebla deslizándose a un palmo del agua.",
      b: "la cámara se ha ELEVADO en vertical y ha retrocedido: GRAN PLANO GENERAL de la sierra fría con la laguna encajada entre los frailejones y las cumbres tapadas de niebla.",
    },
    ini: "el agua está lisa y la niebla pasa por encima sin rizarla.",
    fin: "desde arriba se ve la sierra entera con la laguna pequeña en su hueco y las cumbres cubiertas: nada se ha movido todavía.",
  }, "personas, figuras en el agua, monstruos, dramatismo, resplandor"),
  escp("b1b", [ref("kf_b2_emerge"), ref("laguna_iguaque_B"), ref("companero_nino")], {
    comun: `Luz fría de mañana. ${BACHUE} YA EN LA ORILLA, de pie sobre la hierba y con su manta puesta, llevando de la mano a un niño pequeño que también está en tierra y vestido con su manta. NO traen herramientas, ni mantas de repuesto, ni comida: sólo vienen ellos dos. Objeto ancla: las manos vacías.`,
    camara: {
      a: "PLANO MACRO de las dos manos unidas y de la otra mano de ella, abierta y vacía.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL LARGO desde detrás, a media distancia, con los dos de espaldas y pequeños mirando el valle que se abre delante.",
    },
    ini: "las dos manos unidas y la otra vacía llenan el cuadro: no llevan nada.",
    fin: "desde lejos y de espaldas se les ve en el borde del páramo, sin un bulto ni una herramienta, con el valle entero abriéndose delante de ellos.",
  }, "primeros planos de rostro, figuras dentro del agua, cuerpos mojados, desnudez, bebe en brazos"),

  // b2 — Levantaron una casa. El niño aprendió a leer el cielo.
  escp("b2a", [ref("bachue_adulta"), ref("companero_nino"), ref("casa_barro_paja")], {
    comun: `Luz abierta de día en las tierras llanas. ${BACHUE} y el niño levantando una casa. Objeto ancla: la casa a medio hacer.`,
    camara: {
      a: "PLANO MACRO de unas manos atando dos varas con fibra de fique.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del claro con la casa ya en pie y los dos delante de ella.",
    },
    ini: "las manos aprietan el nudo de fibra en la unión de las dos varas.",
    fin: "desde lejos, la casa de barro y paja está levantada y los dos están delante de ella, pequeños, con el valle vacío alrededor.",
  }, "casa monumental, ceremonia, multitud, herramientas metalicas"),
  escp("b2b", [ref("companero_nino"), ref("bachue_adulta"), ref("altiplano_noche")], {
    comun: `Noche junto al fuego, con las figuras siempre a media distancia y de espaldas. El niño aprendiendo a leer los cambios del cielo, a mantener el fuego y a caminar por los senderos que ella abre. Objeto ancla: el fuego y el cielo.`,
    camara: {
      a: "PLANO MACRO de unas manos acercando leña menuda a las brasas, un plano sin caras.",
      b: "la cámara ha basculado hacia arriba y ha retrocedido: PLANO GENERAL en contrapicado, a media distancia y de espaldas, con las dos figuras junto al fuego pequeñas y el cielo estrellado ocupando dos tercios del cuadro.",
    },
    ini: "unas manos acercan la leña a las brasas, muy de cerca y sin nadie más en cuadro.",
    fin: "desde fuera del círculo del fuego se ve a los dos sentados de espaldas y a media distancia, con el cielo estrellado ocupando casi todo el cuadro.",
  }, "aureola, magia, resplandor, constelaciones dibujadas, texto"),

  // b3 — Se convirtió en su compañero. La casa dejó de ser suficiente.
  escp("b3a", [ref("bachue_adulta"), ref("companero_adulto"), ref("casa_barro_paja")], {
    comun: `Luz de tarde. Cuando fue adulto se convirtió en su compañero. Se dice en una sola escena, sin escándalo y sin subrayarlo: dos adultos trabajando juntos delante de su casa. Objeto ancla: las cuatro manos en el mismo trabajo.`,
    camara: {
      a: "PLANO MACRO de cuatro manos tensando juntas la misma cuerda de fique.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO de los dos adultos de pie, uno junto al otro, delante de la casa.",
    },
    ini: "cuatro manos tiran de la misma cuerda.",
    fin: "se les ve a los dos de pie, hombro con hombro, adultos los dos, mirando la casa que acaban de reforzar.",
  }, "escena de alcoba, beso, desnudez, boda, ceremonia, escandalo dibujado"),
  escp("b3b", [ref("familias_muiscas"), ref("casa_barro_paja"), ref("poblado_nuevo")], {
    comun: "Luz de media tarde. Tuvieron hijos, nacieron más, y la casa dejó de ser suficiente. Objeto ancla: la casa original, ahora pequeña.",
    camara: {
      a: "PLANO MEDIO de la casa original con gente entrando y saliendo por la misma puerta, apretados.",
      b: "la cámara se ha ELEVADO hasta un PICADO ALTO: se ve la casa original en el centro y, alrededor, tres casas nuevas a medio levantar.",
    },
    ini: "por la única puerta entra y sale gente sin parar, y apenas caben.",
    fin: "desde arriba la casa original ha quedado en medio de otras tres a medio levantar, con la gente repartida entre todas.",
  }, "hacinamiento miserable, conflicto, violencia, llanto"),

  // b4 — Unas se quedaron; otras la siguieron por el territorio.
  escp("b4a", [ref("familias_muiscas"), ref("poblado_nuevo"), ref("bachue_adulta")], {
    comun: "Luz de mañana. Unas familias levantan viviendas cerca; otras siguen a Bachué por el territorio. Las dos cosas a la vez, sin que ninguna sea mejor. Objeto ancla: la bifurcación.",
    camara: {
      a: "PLANO MEDIO del punto donde el camino se parte en dos, con gente parada en la horquilla.",
      b: "la cámara se ha ELEVADO hasta un PICADO ALTO: se ven los dos ramales del camino, uno terminando en las casas nuevas y el otro perdiéndose hacia el fondo con un grupo andando por él.",
    },
    ini: "en la horquilla del camino hay gente parada que todavía no ha elegido.",
    fin: "desde arriba se ven los dos grupos ya separados: unos levantando casas al final de un ramal y otros alejándose por el otro con ella delante.",
  }, "despedida teatral, llanto, abrazos, aureola, procesion"),
  escp("b4b", [ref("bachue_adulta"), ref("familias_muiscas"), ref("sabana_cultivos")], {
    comun: `${BACHUE} caminando con ellas hasta encontrar agua, tierra para sembrar y lugares protegidos del viento. Es una búsqueda práctica: se ve lo que comprueba. Objeto ancla: sus manos comprobando la tierra.`,
    camara: {
      a: "PLANO MACRO de su mano cerrándose sobre un puñado de tierra y desmenuzándolo entre los dedos.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del sitio elegido, con el arroyo a un lado, la loma cortando el viento y el grupo repartiéndose por él.",
    },
    ini: "la tierra se le desmenuza entre los dedos, muy de cerca.",
    fin: "desde arriba se ve por qué eligió ahí: el agua baja por un lado, la loma corta el viento por el otro y el grupo ya se reparte por el llano.",
  }, "aureola, varita, magia, adivinacion, resplandor"),

  // b5 — Enseñaba lo necesario para vivir juntos.
  escp("b5a", [ref("bachue_adulta"), ref("familias_muiscas"), ref("semillas_bolsita")], {
    comun: `Luz de mañana. La primera norma concreta: guardar semillas para la siguiente siembra. Es una regla de trabajo, no un mandamiento. Objeto ancla: el montón apartado.`,
    camara: {
      a: "PLANO MACRO de sus manos separando en dos montones los granos sobre una manta: uno grande y otro pequeño.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO LARGO del corro alrededor de la manta, todos mirando los dos montones.",
    },
    ini: "sus manos apartan un puñado pequeño del montón grande.",
    fin: "desde más lejos se ve el corro entero mirando la manta, con el montón grande a un lado y el pequeño guardado en una bolsita al otro.",
  }, "altar, sermon, tablas de la ley, aureola, arrodillarse"),
  escp("b5b", [ref("bachue_adulta"), ref("familias_muiscas"), ref("cercado_bacata")], {
    comun: `La segunda norma: escuchar antes de resolver una disputa. Se ve en el orden de los cuerpos, no en un discurso. Objeto ancla: la postura de ella escuchando.`,
    camara: {
      a: "PLANO MEDIO de dos hombres hablando a la vez, gesticulando, frente a frente.",
      b: "la cámara ha RETROCEDIDO y ha rodeado: PLANO MEDIO LARGO en el que se ve que ella está sentada a un lado, callada e inclinada hacia adelante, sin haber dicho nada todavía.",
    },
    ini: "los dos hablan a la vez, cada uno lo suyo.",
    fin: "desde el otro lado se ve la escena entera: los dos siguen hablando y ella sigue sentada y callada, inclinada, escuchando a los dos antes de abrir la boca.",
  }, "juicio, tribunal, trono, aureola, sentencia, castigo"),

  // b6 — El camino de muchos queda abierto. El agua no es de una casa.
  escp("b6a", [ref("bachue_adulta"), ref("familias_muiscas"), ref("sendero_territorio")], {
    comun: `La tercera norma: un camino usado por muchos debe permanecer abierto. Objeto ancla: el camino.`,
    camara: {
      a: "PLANO MACRO de unas manos retirando piedras y ramas que cerraban un sendero.",
      b: "la cámara ha RETROCEDIDO a lo largo del sendero despejado y ha subido: PLANO GENERAL del camino abierto cruzando el territorio con gente andando por él en las dos direcciones.",
    },
    ini: "unas manos apartan las piedras y las ramas que tapaban el paso.",
    fin: "desde arriba el sendero está limpio de punta a punta y hay gente yendo y viniendo por él en las dos direcciones.",
  }, "muros, puertas, guardias, prohibiciones, texto, señales"),
  escp("b6b", [ref("acequia_bosa"), ref("familias_muiscas"), ref("bachue_adulta")], {
    comun: `La cuarta norma: el agua no pertenece a una sola casa. Objeto ancla: la acequia que se reparte.`,
    camara: {
      a: "PLANO MACRO del punto donde una acequia se parte en dos ramales con una piedra plana en el medio.",
      b: "la cámara ha RETROCEDIDO siguiendo los dos ramales y ha subido: PLANO GENERAL en picado con el agua llegando a dos parcelas distintas, cada una con su gente.",
    },
    ini: "la piedra plana parte el hilo de agua en dos por la mitad.",
    fin: "desde arriba se ve el resultado: los dos ramales llevan agua a dos parcelas distintas y en las dos hay gente regando a la vez.",
  }, "pelea por el agua, violencia, presas, muros, guardias"),

  // b7 — Envejeció viendo crecer pueblos. «Es hora de volver». (CITA)
  escp("b7a", [ref("bachue_anciana"), ref("poblado_nuevo"), ref("sabana_cultivos")], {
    comun: `Luz de tarde larga. ${ANCIANA} mirando pueblos donde antes sólo había silencio. Objeto ancla: el valle poblado.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara mirando hacia fuera de cuadro, con las arrugas y el pelo blanco.",
      b: "la cámara ha girado y RETROCEDIDO hasta ponerse detrás de ella y muy arriba: GRAN PLANO GENERAL en picado del valle con cuatro poblados repartidos y sus humos subiendo.",
    },
    ini: "mira hacia algo que no vemos, con la cara quieta.",
    fin: "desde su espalda se ve lo que miraba: cuatro poblados repartidos por el valle, con sus humos y sus caminos, donde antes no había nada.",
  }, "aureola, monumento, estatua, adoracion, llanto"),
  escp("b7b", [ref("bachue_anciana"), ref("familias_muiscas"), ref("casa_barro_paja")], {
    comun: `Luz de tarde. ${ANCIANA} llamando a sus descendientes y diciendo que es hora de volver. Objeto ancla: su cara hablando.`,
    camara: {
      a: "PLANO GENERAL del patio con la gente reunida y ella pequeña en un extremo.",
      b: "la cámara ha AVANZADO entre la gente hasta ella: PRIMER PLANO de su cara diciendo la frase, tranquila, con las siluetas desenfocadas alrededor.",
    },
    ini: "la gente se va reuniendo en el patio y ella espera en un extremo.",
    fin: "de cerca se le ve decir la frase sin dramatismo, con la boca a media palabra y los ojos secos.",
  }, "llanto colectivo, gritos, duelo, arrodillarse, aureola"),

  // b8 — Una multitud los acompañó. El ascenso fue lento.
  escp("b8a", [ref("familias_muiscas"), ref("poblado_nuevo"), ref("sendero_territorio")], {
    comun: "Luz de mañana. La noticia viajó de casa en casa y una multitud los acompañó hacia las montañas de Iguaque. Objeto ancla: la gente que se suma.",
    camara: {
      a: "PLANO MEDIO de una puerta de la que sale una familia y se une al camino.",
      b: "la cámara ha RETROCEDIDO a lo largo del camino y ha subido: GRAN PLANO GENERAL en picado con la fila creciendo a lo largo del valle, alimentada por gente que sale de cada casa.",
    },
    ini: "una familia sale de su casa y se pone en el camino.",
    fin: "desde arriba la fila cruza el valle entero y de cada casa que pasa sale gente que se le suma: es ya una multitud.",
  }, "procesion religiosa, estandartes, cruces, llanto, duelo"),
  escp("b8b", [ref("familias_muiscas"), ref("sendero_territorio"), ref("laguna_iguaque_pano")], {
    comun: "Luz fría de la sierra. El ascenso es lento: unos cargan niños, otros sostienen del brazo a quienes ya no caminan con facilidad. El cuidado es el tema. Objeto ancla: las manos que sostienen.",
    camara: {
      a: "PLANO MACRO de una mano joven sujetando un antebrazo viejo en la cuesta.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL de la ladera con la fila subiendo despacio, escalonada, con los que cargan y los que sostienen repartidos por ella.",
    },
    ini: "una mano joven sostiene un antebrazo viejo, muy de cerca.",
    fin: "desde lejos se ve la ladera entera con la fila subiendo despacio: en cada tramo hay alguien cargando a un niño o sosteniendo a un viejo.",
  }, "procesion ceremonial, antorchas, estandartes, llanto colectivo"),

  // b9 — Les pidió conservar la paz. Una tarea por continuar.
  escp("b9a", [ref("bachue_anciana"), ref("familias_muiscas"), ref("laguna_iguaque_B")], {
    comun: `Luz fría en la orilla. ${ANCIANA} mirando los rostros reunidos y pidiéndoles conservar la paz y cuidar las normas aprendidas durante los viajes. Objeto ancla: las caras reunidas.`,
    camara: {
      a: "PLANO MEDIO CORTO de ella hablando, con la laguna detrás.",
      b: "la cámara ha girado ciento ochenta grados y ha retrocedido: PLANO GENERAL de las caras reunidas frente a ella, decenas, todas mirando hacia el objetivo.",
    },
    ini: "ella habla desde el borde del agua.",
    fin: "desde su sitio se ve a quién le habla: decenas de caras reunidas en la ladera, de todas las edades, mirándola.",
  }, "aureola, pulpito, sermon, arrodillarse, tablas de la ley"),
  escp("b9b", [ref("bachue_anciana"), ref("familias_muiscas")], {
    comun: `NO habla como quien entrega una tierra terminada, sino como quien confía una tarea que debe continuar sin ella. Se dice con las manos: no entrega nada, las abre vacías. Objeto ancla: sus manos abiertas y vacías.`,
    camara: {
      a: "PLANO MACRO de sus dos manos viejas abriéndose, vacías, hacia la gente.",
      b: "la cámara ha RETROCEDIDO y ha girado a las manos de los que escuchan: PLANO MEDIO de cuatro pares de manos —jóvenes y viejas— abiertas del mismo modo, recibiendo algo que no se ve.",
    },
    ini: "sus dos manos se abren vacías hacia delante: no hay objeto en ellas.",
    fin: "enfrente, cuatro pares de manos se han abierto igual, también vacías: lo que pasa de unas a otras no es una cosa.",
  }, "objetos entregados, baston, insignia, corona, aureola, resplandor"),

  // b10 — Entraron en el agua. Sus cuerpos se volvieron serpientes.
  escp("b10a", [ref("bachue_anciana"), ref("companero_anciano"), ref("laguna_iguaque_B")], {
    comun: `Luz fría. ${ANCIANA} tomando la mano de ${COMPANERO} y entrando los dos en el agua. Se cuenta a media distancia y de espaldas. Objeto ancla: las dos manos unidas.`,
    camara: {
      a: "PLANO MACRO de las dos manos viejas cerrándose una sobre otra.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL a media distancia con los dos de espaldas entrando en el agua hasta la cintura, y la orilla llena de gente quieta detrás.",
    },
    ini: "las dos manos viejas se cierran la una sobre la otra.",
    fin: "a media distancia y de espaldas, los dos han entrado hasta la cintura y siguen andando; en la orilla, la gente los mira sin moverse.",
  }, "ahogamiento, forcejeo, llanto, gritos, cuerpos desnudos, duelo"),
  esc("b10b", [ref("serpientes_laguna"), ref("laguna_iguaque_B")], {
    comun: "Luz fría sobre el agua. A medida que avanzaban sus cuerpos cambiaron hasta volverse grandes serpientes. NO es monstruoso: son dos culebras tranquilas. Objeto ancla: los dos cuerpos en el agua.",
    camara: {
      a: "PLANO MEDIO a ras del agua con las dos siluetas humanas de espaldas, ya sólo hombros y cabezas sobre la superficie.",
      b: "la cámara se ha ELEVADO hasta un PICADO sobre el mismo punto: donde estaban las dos figuras hay ahora dos cuerpos largos y oscuros moviéndose sobre la superficie.",
    },
    ini: "sobre el agua sólo asoman dos cabezas y dos pares de hombros, de espaldas.",
    fin: "desde arriba ya no hay figuras humanas: dos cuerpos largos y tranquilos se mueven sobre la superficie oscura, uno junto al otro.",
  }, "monstruos, colmillos, lenguas bifidas, ataque, sangre, terror"),

  // b11 — Se movieron sobre la superficie y descendieron. Nadie los siguió.
  esc("b11a", [ref("serpientes_laguna"), ref("laguna_iguaque_B")], {
    comun: "Luz fría. Por un momento se movieron sobre la superficie oscura, luego descendieron y desaparecieron. Objeto ancla: las dos estelas.",
    camara: {
      a: "PLANO CENITAL cerrado de los dos cuerpos largos deslizándose juntos sobre el agua.",
      b: "la cámara ha ATRAVESADO la superficie y ha bajado: PLANO GENERAL subacuático en penumbra azul, con las dos formas descendiendo hacia el fondo y perdiéndose.",
    },
    ini: "los dos cuerpos se deslizan juntos por la superficie, visibles enteros.",
    fin: "bajo el agua, las dos formas bajan hacia el fondo y ya casi no se distinguen en la penumbra azul.",
  }, "monstruos, ataque, cadaveres, esqueletos, terror"),
  escp("b11b", [ref("familias_muiscas"), ref("laguna_iguaque_B")], {
    comun: "Luz fría en la orilla. NADIE intentó seguirlos. Ese detalle marca el tono: no hay duelo ni intento de retenerla. Objeto ancla: el filo del agua sin nadie dentro.",
    camara: {
      a: "PLANO MEDIO de los pies de la primera fila de gente, justo en el filo del agua, sin entrar.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL de la orilla entera con toda la multitud quieta en la ribera y el agua delante, lisa y vacía.",
    },
    ini: "los pies de los de delante están en el filo del agua, sin pasar de ahí.",
    fin: "desde arriba se ve la multitud entera parada en la ribera, sin un solo cuerpo dentro del agua, que ha vuelto a quedarse lisa.",
  }, "llanto colectivo, gritos, gente entrando al agua, duelo, desmayos"),

  // b12 — Regresaron con semillas, recuerdos y preguntas.
  escp("b12a", [ref("familias_muiscas"), ref("sendero_territorio"), ref("semillas_bolsita")], {
    comun: "Primera luz del día siguiente. Los descendientes emprendieron el regreso llevando semillas, recuerdos y preguntas. Objeto ancla: lo que bajan.",
    camara: {
      a: "PLANO MACRO de una bolsita de semillas colgada al hombro de alguien que baja.",
      b: "la cámara ha RETROCEDIDO y ha subido: GRAN PLANO GENERAL en picado de la ladera con la fila bajando y repartiéndose por los distintos caminos del valle.",
    },
    ini: "la bolsita de semillas se balancea al ritmo del paso.",
    fin: "desde arriba la fila ha bajado del páramo y se está repartiendo por cuatro caminos distintos, cada grupo hacia su poblado.",
  }, "procesion, cruces, llanto, duelo, monumento, aureola"),
  escp("b12b", [ref("familias_muiscas"), ref("sendero_territorio"), ref("acequia_bosa"), ref("poblado_nuevo")], {
    comun: "Luz abierta de mañana. Ella ya no camina delante de ellos, pero cada sendero abierto, cada casa compartida y cada acuerdo cumplido conserva algo de su enseñanza. Objeto ancla: las tres normas funcionando a la vez.",
    camara: {
      a: "PLANO MEDIO de dos personas apartando una rama que había caído en un sendero, dejándolo abierto.",
      b: "la cámara ha RETROCEDIDO y ha subido hasta un GRAN PLANO GENERAL final del valle en el que se ven a la vez: el camino abierto con gente pasando, la acequia repartiéndose en dos parcelas y un corro sentado escuchando a dos que discuten.",
    },
    ini: "dos personas apartan una rama del camino para que siga pasando la gente.",
    fin: "desde arriba se ven las tres cosas a la vez en el mismo valle: el camino despejado, el agua partida en dos ramales y el corro sentado escuchando antes de resolver. Ella no está en ninguna parte del cuadro.",
  }, "aureola, estatua, monumento, templo, figura fantasmal, texto"),
]);
