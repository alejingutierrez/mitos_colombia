// Keyframes de Jaichuasay, indio en la sierra y venado en la sabana — 12 bloques
// × 2 escenas × 2 cuadros = 48 imágenes ≈ 120 s.
// Guion: guion-el-indio-jaichuasay-v2.json (N=12) · Acta: acta-el-indio-jaichuasay.json (24 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _wayuu-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · EL CONTAGIO ES POR PERSECUCIÓN: quien persigue al venado hasta la serranía
//   se vuelve venado. NO es maldición ni castigo por cazar, así que ninguna
//   imagen puede cargar culpa sobre el cazador.
// · LA CONDICIÓN ES GEOGRÁFICA Y NO TIENE HORARIO: indio en la SERRANÍA, venado
//   en la SABANA. Ese eje —arriba y abajo— ORGANIZA TODA LA DIRECCIÓN DE ARTE:
//   cada par que cambia de cuerpo tiene que cambiar también de altitud, y la
//   cámara sube o baja con él.
// · JAICHUASAY NO ES MONSTRUO NI ENEMIGO. Visita los ranchos, lleva maguey de
//   regalo, le dan de comer. Lo único raro en él es que NO TIENE TRANQUILIDAD.
// · EL GESTO QUE LO DELATA ES CORPORAL: menea la cabeza como quien oye algo que
//   los demás no oyen. ESO SE MUESTRA, NO SE EXPLICA.
// · LA FLECHA LO DEVUELVE A INDIO, NO LO MATA. El canon no dice que muera y el
//   guion no lo mata.
// · LO QUE CIERRA LA FICHA ES EL MIEDO DE LOS CAZADORES, no la suerte de
//   Jaichuasay: dejaron de cazar en esa serranía.
// · NO SE CRUZA con el venado que es gente de «ulepala» ni con la enseñanza de
//   Juyá en «el-viaje-del-mas-alla»: allí hay enseñanza, aquí hay CONTAGIO.
//
// El inventario avisa de la trampa: «la ficha más difícil del corpus: una sola
// persona en dos cuerpos, con una regla geográfica exacta. NO SE RESUELVE CON
// HÍBRIDO». Ni cuernos en una persona, ni cara humana en un venado, ni
// transformación a medias: son dos cuerpos enteros y el corte está en el
// montaje, no en la anatomía.
//
// GUION DE LUZ: mediodía blanco de la sabana → polvo de la persecución →
// cuesta arriba con el aire cambiando → niebla de la serranía → tarde húmeda
// del rancho → luz plana del dicho → visita con maguey → penumbra del bosque →
// mañana de la cacería → mediodía del galope → luz del flechazo → última luz
// del miedo.

import { CONTEXTO, DIRECCION, AVOID_BASE, PALETTE_BASE, ref, esc, escp, armar } from "./_wayuu-comun.mjs";

export const SPEC_NAME = "wayuu-jaichuasay-escenas";
export const OUT_DIR = "wayuu/videos/el-indio-jaichuasay/keyframes";
export { CONTEXTO, DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; hibrido humano-animal, hombre con cuernos, venado con cara humana, transformacion a medias, licantropo; cuernos, orejas o pezuñas en una persona; resplandor, humo, particulas o estela de transformacion; monstruo, demonio, criatura amenazante, ojos brillantes; maldicion, simbolos magicos, circulos rituales, hechicero; sangre abundante, animal agonizando, visceras, caceria cruel; cuernos enormes de ciervo europeo, alce, reno";
export const PALETTE =
  PALETTE_BASE + "; la serrania trae el UNICO aire humedo del mito: gris verdoso de niebla baja y verde oscuro de monte alto, y ese contraste con el blanco de la sabana es el eje entero del relato";

const JC =
  "EL MISMO Jaichuasay de la referencia (hombre wayúu adulto y enjuto, pelo negro liso a la altura de la mandíbula, cara atenta, manta de algodón crudo terciada, faja tejida de kanas, descalzo), ENTERAMENTE HUMANO, sin un solo rasgo animal";
const VE =
  "UN VENADO de la referencia, ENTERAMENTE ANIMAL, sin un solo rasgo humano: pelaje pardo rojizo, patas finas, astas cortas y ramificadas propias del venado de la Guajira";

export const ITEMS = armar([
  // b1 — Vio un venado en la sabana y le disparó. La flecha pegó y el venado saltó.
  escp("b1a", [ref("jaichuasay"), ref("arco_flechas"), ref("llanura_cardonal")], {
    comun: `Mediodía blanco en la SABANA, abajo. ${JC} ve un venado y monta el arco. Es un cazador haciendo su trabajo: ninguna culpa, ningún presagio. Objeto ancla: la flecha en la cuerda.`,
    camara: {
      a: "PLANO MACRO de la flecha encajada en la cuerda tensa del arco, con los dedos sujetándola.",
      b: "la cámara ha RETROCEDIDO en travelling y se ha elevado: PLANO GENERAL de la sabana blanca con él pequeño y agachado en primer término y el venado a cincuenta pasos entre los cardones.",
    },
    ini: "la flecha está encajada en la cuerda tensa y los dedos la sujetan.",
    fin: "desde arriba se ve la escena entera: él agachado en primer término y el venado a cincuenta pasos entre los cardones.",
  }, "presagio, sombras, simbolos, resplandor, culpa dibujada"),
  esc("b1b", [ref("venado"), ref("llanura_cardonal")], {
    comun: `Mediodía blanco. LA FLECHA PEGÓ, PERO EL VENADO SALTÓ Y CORRIÓ. ${VE}, con la flecha clavada y ninguna herida a la vista ni sangre. Objeto ancla: el astil vibrando en el lomo.`,
    camara: {
      a: "PLANO MACRO del astil de la flecha vibrando en el lomo del animal, sin sangre alrededor.",
      b: "la cámara ha RETROCEDIDO y se ha elevado siguiéndolo: PLANO GENERAL de la sabana con el venado ya lejos, en carrera abierta, levantando polvo.",
    },
    ini: "el astil vibra clavado en el lomo y no hay sangre alrededor.",
    fin: "desde arriba, el venado va ya lejos en carrera abierta y levanta polvo detrás.",
  }, "sangre, herida abierta, animal agonizando, cara humana en el venado, ojos brillantes"),

  // b2 — Lo siguió entre cardones, cuesta arriba. Cada vez aparecía más lejos.
  escp("b2a", [ref("jaichuasay"), ref("cardon"), ref("trupillo")], {
    comun: `Mediodía. LO SIGUIÓ POR LA ARENA, entre cardones y trupillos: la persecución empieza en terreno conocido y llano. Objeto ancla: sus pies siguiendo el rastro.`,
    camara: {
      a: "PLANO CENITAL MACRO de una pisada de venado en la arena y, encima, un pie descalzo posándose junto a ella.",
      b: "la cámara se ha ELEVADO y ha basculado al frente: PLANO GENERAL de la llanura con él avanzando entre las matas y el terreno empezando a subir al fondo.",
    },
    ini: "un pie descalzo se posa junto a la pisada de venado en la arena.",
    fin: "al subir la cámara se ve la llanura con él avanzando entre las matas y el terreno empezando a levantarse al fondo.",
  }, "jaurias, caballos, armas de fuego, persecucion epica"),
  esc("b2b", [ref("venado"), ref("serrania_baja"), ref("llanura_cardonal")], {
    comun: `Tarde, el aire empieza a cambiar. CADA VEZ EL VENADO APARECÍA MÁS LEJOS: el animal no huye, mantiene la distancia. Objeto ancla: la figura que siempre está más allá.`,
    camara: {
      a: "PLANO MEDIO del venado parado de perfil en una loma, mirando hacia atrás, a media distancia.",
      b: "la cámara ha RETROCEDIDO y se ha elevado mucho: GRAN PLANO GENERAL en picado con el venado ya en la loma siguiente, mucho más lejos, y la subida de la serranía detrás.",
    },
    ini: "el venado está parado de perfil en la loma, mirando hacia atrás.",
    fin: "desde muy arriba ya está en la loma siguiente, mucho más lejos, con la subida de la serranía detrás de él.",
  }, "teletransporte dibujado, estela, resplandor, duplicados, fantasma"),

  // b3 — Dejó atrás los caminos conocidos. Lo llevó a una lejana serranía.
  escp("b3a", [ref("jaichuasay"), ref("llanura_cardonal"), ref("serrania_baja")], {
    comun: `Tarde. SIN DARSE CUENTA DEJÓ ATRÁS LOS CAMINOS CONOCIDOS: se cuenta con la última trocha que se pierde detrás de él. Objeto ancla: la trocha que se acaba.`,
    camara: {
      a: "PLANO CENITAL MACRO de la trocha de arena difuminándose hasta desaparecer en el suelo pedregoso.",
      b: "la cámara se ha ELEVADO muchísimo y ha girado: GRAN PLANO GENERAL en picado con él diminuto ya en la falda de la serranía y toda la llanura conocida quedando abajo y atrás.",
    },
    ini: "la trocha de arena se difumina hasta perderse en el suelo pedregoso.",
    fin: "desde muy arriba se le ve diminuto en la falda de la serranía, con toda la llanura conocida quedando abajo y atrás.",
  }, "mapas, señales, caminos empedrados, portales, niebla magica"),
  esc("b3b", [ref("serrania_baja"), ref("montana_refugio")], {
    comun: `Última luz. EL VENADO LO DESORIENTÓ Y LO LLEVÓ A UNA LEJANA SERRANÍA: el cambio de mundo es de AIRE, no de magia. Entra la niebla, el único aire húmedo del mito. Sin figuras. Objeto ancla: la niebla bajando entre el monte.`,
    camara: {
      a: "PLANO MACRO de la niebla enredándose entre las hojas de un monte verde oscuro, con las gotas en el envés.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: GRAN PLANO GENERAL de la serranía entera con la niebla llenando las quebradas y, muy abajo y lejos, la sabana blanca.",
    },
    ini: "la niebla se enreda entre las hojas del monte verde oscuro y hay gotas en el envés.",
    fin: "desde arriba, la niebla llena las quebradas de la serranía y muy abajo, lejos, se ve la sabana blanca.",
  }, "portal, resplandor, simbolos, niebla siniestra, criaturas, sombras amenazantes"),

  // b4 — Aquel venado era un indio. Jaichuasay se quedó en la sierra.
  escp("b4a", [ref("jaichuasay"), ref("caza_que_es_gente"), ref("serrania_baja")], {
    comun: `Niebla de la tarde en la serranía. AQUEL VENADO ERA UN INDIO: arriba, en la sierra, quien lo esperaba tiene cuerpo HUMANO ENTERO. El corte entre los dos cuerpos está en el montaje, nunca en la anatomía. Objeto ancla: la figura humana donde se esperaba un animal.`,
    camara: {
      a: "PLANO MEDIO de un venado quieto entre la niebla, de espaldas, enteramente animal.",
      b: "la cámara ha AVANZADO y ha rodeado hasta el otro lado: PLANO MEDIO de una persona de pie en el mismo sitio, enteramente humana, mirando de frente.",
    },
    ini: "un venado está quieto entre la niebla, de espaldas, y es del todo un animal.",
    fin: "al rodearlo, en ese mismo sitio hay una persona de pie, del todo humana, mirando de frente.",
  }, "hibrido, cuernos en la persona, cara humana en el venado, transformacion a medias, resplandor, humo"),
  escp("b4b", [ref("jaichuasay"), ref("rancho_de_la_sierra"), ref("serrania_baja")], {
    comun: `Niebla. ALLÍ VOLVÍA VENADO A QUIEN LO PERSIGUIERA, y JAICHUASAY SE QUEDÓ EN LA SIERRA. No hay castigo ni maldición: se queda, y ya. Objeto ancla: el rancho entre la niebla.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara mirando alrededor, tranquila, con la humedad en la piel.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del rancho grande de la sierra entre la niebla, con él ya pequeño acercándose a la entrada.",
    },
    ini: "su cara mira alrededor, tranquila, con la humedad de la niebla en la piel.",
    fin: "desde arriba se ve el rancho grande entre la niebla y a él, ya pequeño, acercándose a la entrada.",
  }, "prision, cadenas, desesperacion, maldicion dibujada, simbolos, hechicero"),

  // b5 — Tenía un gran rancho y miraba la niebla. En la sabana volvía venado.
  esc("b5a", [ref("rancho_de_la_sierra"), ref("chinchorro")], {
    comun: `Tarde húmeda en la sierra. TENÍA UN GRAN RANCHO, DORMÍA EN SU CHINCHORRO Y MIRABA LA NIEBLA: es una vida corriente y buena, no un cautiverio. Sin figuras. Objeto ancla: el chinchorro colgado frente a la niebla.`,
    camara: {
      a: "PLANO MACRO de los flecos del chinchorro con gotas de humedad colgando de cada hebra.",
      b: "la cámara ha RETROCEDIDO y ha girado hacia fuera: PLANO GENERAL del rancho abierto con el chinchorro en primer término y la niebla llenando el valle al fondo.",
    },
    ini: "de cada hebra de los flecos del chinchorro cuelga una gota de humedad.",
    fin: "al girar hacia fuera se ve el rancho abierto con el chinchorro delante y la niebla llenando el valle al fondo.",
  }, "prision, celda, cadenas, abandono, ruina, telaraña"),
  esc("b5b", [ref("venado"), ref("llanura_cardonal"), ref("serrania_baja")], {
    comun: `Mediodía blanco abajo. EN LA SABANA VOLVÍA A SER VENADO: la regla es GEOGRÁFICA y sin horario, y el par lo cuenta bajando de altitud. Cuerpo animal entero. Objeto ancla: el límite entre el monte y la arena.`,
    camara: {
      a: "PLANO GENERAL en picado desde la serranía con la falda verde abajo y la sabana blanca abriéndose más allá.",
      b: "la cámara ha DESCENDIDO hasta la sabana y se ha puesto a ras de arena: PLANO MEDIO de un venado enteramente animal parado en el blanco, mirando hacia el monte.",
    },
    ini: "desde la serranía se ve la falda verde abajo y la sabana blanca abriéndose más allá.",
    fin: "ya abajo y a ras de arena, un venado del todo animal está parado en el blanco mirando hacia el monte.",
  }, "hibrido, transformacion a medias, cara humana, resplandor, estela, humo"),

  // b6 — «En la serranía era indio; en la sabana, venado». Visitaba los ranchos.
  escp("b6a", [ref("jaichuasay"), ref("venado"), ref("serrania_baja")], {
    comun: `Luz plana. EL DICHO, que es la única cita del mito: en la serranía era indio; en la sabana, venado. El par lo dice con el eje ARRIBA/ABAJO y sin una sola figura mixta. Objeto ancla: la misma silueta en dos alturas.`,
    camara: {
      a: "PLANO MEDIO de él de pie y humano en un filo alto de la serranía, recortado contra la niebla.",
      b: "la cámara ha CAÍDO en vertical hasta la sabana y ha girado: PLANO MEDIO de un venado parado en el mismo eje, abajo, recortado contra el blanco.",
    },
    ini: "de pie y humano en el filo alto, recortado contra la niebla.",
    fin: "al caer la cámara hasta abajo, en el mismo eje hay un venado parado y recortado contra el blanco de la sabana.",
  }, "hibrido, transformacion, superposicion de las dos figuras, texto, simbolos"),
  escp("b6b", [ref("jaichuasay"), ref("piichi"), ref("rancheria")], {
    comun: `Luz plana de tarde. VISITABA LOS RANCHOS CON FIGURA DE INDIO: llega como visita, y lo reciben como visita. No es monstruo ni enemigo. Objeto ancla: la llegada tranquila.`,
    camara: {
      a: "PLANO GENERAL de una ranchería con una figura acercándose por el camino, todavía lejos.",
      b: "la cámara ha AVANZADO hasta la enramada y ha girado: PLANO MEDIO de él ya sentado entre la gente, hablando con normalidad.",
    },
    ini: "una figura se acerca a la ranchería por el camino, todavía lejos.",
    fin: "ya en la enramada está sentado entre la gente, hablando con normalidad.",
  }, "miedo, huida, gritos, armas, monstruo, sombras amenazantes"),

  // b7 — Llegaba con manojos de maguey. No tenía tranquilidad.
  escp("b7a", [ref("jaichuasay"), ref("haz_de_varas"), ref("enramada")], {
    comun: `Tarde. LLEGABA CON MANOJOS DE MAGUEY Y LE DABAN DE COMER: trae regalo y le corresponden. Es cortesía, y por eso no sospechan. Objeto ancla: el manojo pasando de mano a mano.`,
    camara: {
      a: "PLANO MACRO de un manojo de hojas fibrosas atado con cordel, pasando de unas manos a otras.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la enramada con él sentado, la totuma delante y el manojo ya dejado a un lado.",
    },
    ini: "el manojo de hojas fibrosas atado con cordel pasa de unas manos a otras.",
    fin: "desde arriba está sentado bajo la enramada con la totuma delante y el manojo ya dejado a un lado.",
  }, "ofrenda ritual, altar, magia, sospecha, armas escondidas"),
  escp("b7b", [ref("jaichuasay"), ref("enramada"), ref("presagios")], {
    comun: `Tarde. NO TENÍA TRANQUILIDAD: MENEABA LA CABEZA ESCUCHANDO ALGO que los demás no oyen. ESTE GESTO SE MUESTRA, NO SE EXPLICA, y es lo único raro en él. Objeto ancla: la cabeza que se vuelve.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara volviéndose de golpe hacia un lado, con los ojos buscando.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la enramada con todos los demás quietos y hablando, y sólo él con la cabeza vuelta hacia fuera.",
    },
    ini: "la cara se vuelve de golpe hacia un lado y los ojos buscan algo.",
    fin: "desde arriba, todos los demás siguen quietos y hablando, y sólo él tiene la cabeza vuelta hacia fuera.",
  }, "orejas animales, ojos brillantes, resplandor, sombra amenazante, monstruo, texto"),

  // b8 — En el bosque volvía a ser venado. Muchos se juntaron para cazar.
  esc("b8a", [ref("venado"), ref("serrania_baja"), ref("trupillo")], {
    comun: `Penumbra del bosque. EN EL BOSQUE VOLVÍA A SER VENADO hasta alcanzar su rancho: el cambio se cuenta con el cuerpo que entra y el que sale, y el monte en medio. Objeto ancla: el monte que oculta el paso.`,
    camara: {
      a: "PLANO MEDIO de una figura humana entrando en la espesura, de espaldas, cortada por las ramas.",
      b: "la cámara ha ATRAVESADO la espesura y ha salido al otro lado: PLANO GENERAL del claro siguiente con un venado alejándose entre los troncos, enteramente animal.",
    },
    ini: "una figura humana entra en la espesura de espaldas, cortada por las ramas.",
    fin: "al otro lado de la espesura, un venado se aleja entre los troncos y es del todo un animal.",
  }, "transformacion a la vista, hibrido, resplandor, humo, estela, ropa cayendo"),
  escp("b8b", [ref("primeros_wayuu"), ref("caballo"), ref("arco_flechas"), ref("rancheria")], {
    comun: `Mañana. MUCHOS INDIOS SE JUNTARON PARA IR DE CACERÍA: preparativos de partida, caballos y arcos, buen ánimo. Objeto ancla: el grupo reuniéndose.`,
    camara: {
      a: "PLANO MACRO de una mano probando la tensión de la cuerda de un arco.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la ranchería con doce personas reuniéndose, unas a caballo y otras a pie con los arcos.",
    },
    ini: "una mano prueba la tensión de la cuerda del arco.",
    fin: "desde arriba se ve a doce personas reuniéndose en la ranchería, unas a caballo y otras a pie con los arcos.",
  }, "uniformes, jaurias europeas, cuernos de caza, escopetas, crueldad"),

  // b9 — Al atravesar la sabana salió un venado, y era el mismo Jaichuasay.
  esc("b9a", [ref("venado"), ref("llanura_cardonal")], {
    comun: `Mediodía blanco. CUANDO ATRAVESABAN LA SABANA SALIÓ CORRIENDO UN VENADO, Y ERA EL MISMO JAICHUASAY: para el espectador la identidad se sostiene por la posición en el relato, no por ningún rasgo en el cuerpo. Objeto ancla: el arranque del animal.`,
    camara: {
      a: "PLANO MACRO de la arena estallando bajo las pezuñas en el primer impulso.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la sabana con el venado ya lanzado y la partida de cazadores girando la cabeza a la vez.",
    },
    ini: "la arena estalla bajo las pezuñas en el primer impulso.",
    fin: "desde arriba, el venado va ya lanzado y toda la partida de cazadores gira la cabeza a la vez.",
  }, "cara humana, ojos humanos, hibrido, resplandor, marca identificadora"),
  escp("b9b", [ref("primeros_wayuu"), ref("caballo"), ref("llanura_cardonal")], {
    comun: `Mediodía. VARIOS CABALLOS SALIERON A SEGUIRLO: la persecución arranca en tromba. Objeto ancla: los caballos lanzándose a la vez.`,
    camara: {
      a: "PLANO DETALLE de cuatro pares de cascos arrancando a la vez sobre la arena.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado de la sabana con los jinetes abiertos en abanico y el venado muy por delante.",
    },
    ini: "cuatro pares de cascos arrancan a la vez sobre la arena.",
    fin: "desde muy arriba, los jinetes van abiertos en abanico y el venado va muy por delante de todos.",
  }, "uniformes, banderas, caza cruel, animal sangrando, jaurias"),

  // b10 — Ni el mejor caballo lo alcanzó. Otros iban a pie, emboscados.
  esc("b10a", [ref("venado"), ref("caballo"), ref("llanura_cardonal")], {
    comun: `Mediodía. NI EL MEJOR CABALLO LO ALCANZÓ: abría distancia COMO EMPUJADO POR EL VIENTO, y eso se cuenta con la distancia creciendo, no con efectos. Objeto ancla: el hueco entre los dos.`,
    camara: {
      a: "PLANO MEDIO lateral del mejor caballo a galope tendido, con el venado a cuatro cuerpos por delante.",
      b: "la cámara se ha QUEDADO ATRÁS y se ha elevado: GRAN PLANO GENERAL en picado con el caballo ya muy rezagado y el venado convertido en un punto al fondo.",
    },
    ini: "el mejor caballo va a galope tendido y el venado le lleva cuatro cuerpos.",
    fin: "desde muy arriba, el caballo se ha quedado muy atrás y el venado es ya un punto al fondo.",
  }, "estela magica, resplandor, viento dibujado, vuelo, animal fantastico"),
  escp("b10b", [ref("primeros_wayuu"), ref("arco_flechas"), ref("trupillo")], {
    comun: `Mediodía. OTROS IBAN A PIE, EMBOSCADOS: mientras los jinetes corren, unos cuantos esperan quietos entre las matas. Objeto ancla: los que están quietos.`,
    camara: {
      a: "PLANO MACRO de una mano quieta sosteniendo el arco bajo, medio tapada por la hoja de un trupillo.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL con tres hombres agazapados en distintos puntos de la trocha y el polvo de la carrera acercándose al fondo.",
    },
    ini: "una mano quieta sostiene el arco bajo, medio tapada por la hoja del trupillo.",
    fin: "desde arriba hay tres hombres agazapados en puntos distintos de la trocha y el polvo de la carrera se acerca al fondo.",
  }, "trampas con puas, redes, crueldad, uniformes, armas de fuego"),

  // b11 — Uno tensó el arco y la flecha le abrió una herida. Se volvió indio.
  esc("b11a", [ref("arco_flechas"), ref("venado"), ref("llanura_cardonal")], {
    comun: `Mediodía. UNO TENSÓ EL ARCO Y LA FLECHA LE ABRIÓ UNA HERIDA: la flecha NO lo mata. El impacto se cuenta con el arco y el vuelo, no con el cuerpo. Objeto ancla: la cuerda soltándose.`,
    camara: {
      a: "PLANO MACRO de los dedos soltando la cuerda y la cuerda saliendo hacia delante.",
      b: "la cámara ha VOLADO con la flecha por encima de la arena: PLANO GENERAL a ras de suelo con el venado a media distancia y la flecha entrando en cuadro por detrás.",
    },
    ini: "los dedos sueltan la cuerda y la cuerda sale hacia delante.",
    fin: "a ras de suelo, el venado está a media distancia y la flecha entra en cuadro por detrás.",
  }, "sangre, herida abierta, animal agonizando, visceras, muerte"),
  escp("b11b", [ref("jaichuasay"), ref("llanura_cardonal")], {
    comun: `Mediodía. EN ESE MOMENTO EL VENADO SE VOLVIÓ INDIO. ${JC}, sentado en la arena, ENTERO Y VIVO, con la flecha a un lado. La flecha lo devuelve a indio, NO lo mata. Objeto ancla: la persona sentada donde estaba el animal.`,
    camara: {
      a: "PLANO CENITAL MACRO de la arena revuelta con una flecha caída al lado y una mano humana apoyándose en el suelo.",
      b: "la cámara ha SUBIDO y ha retrocedido: PLANO MEDIO de él sentado en la arena, entero y vivo, mirando hacia los cazadores.",
    },
    ini: "en la arena revuelta hay una flecha caída y una mano humana que se apoya en el suelo.",
    fin: "al subir la cámara se le ve sentado en la arena, entero y vivo, mirando hacia los cazadores.",
  }, "hibrido, transformacion a medias, cuernos, pezuñas, sangre, agonia, muerte, resplandor"),

  // b12 — Lo reconocieron y contaron. Tuvieron miedo y no volvieron.
  escp("b12a", [ref("primeros_wayuu"), ref("jaichuasay"), ref("llanura_cardonal")], {
    comun: `Luz cruda. LOS CAZADORES LO RECONOCIERON: caras que pasan del esfuerzo de la caza al reconocimiento, y bajan los arcos. Objeto ancla: los arcos que bajan.`,
    camara: {
      a: "PLANO MEDIO CORTO de una cara de cazador reconociéndolo, con la boca entreabierta.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL con él sentado en la arena en el centro y los cazadores alrededor, todos con los arcos ya bajados.",
    },
    ini: "la cara de un cazador lo reconoce, con la boca entreabierta.",
    fin: "desde arriba está él sentado en el centro y los cazadores alrededor, todos con los arcos bajados.",
  }, "linchamiento, armas alzadas, violencia, monstruo, huida en panico"),
  escp("b12b", [ref("primeros_wayuu"), ref("serrania_baja"), ref("rancheria")], {
    comun: `Última luz. LO QUE CIERRA EL MITO ES EL MIEDO DE LOS CAZADORES, no la suerte de Jaichuasay: TUVIERON MIEDO Y NO VOLVIERON A ESA SERRANÍA. Objeto ancla: la serranía que se queda mirando.`,
    camara: {
      a: "PLANO MEDIO de dos hombres contándolo bajo la enramada, con las caras serias.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL final con la ranchería abajo y, al fondo, la serranía verde con su niebla, y ni un camino que suba hacia ella.",
    },
    ini: "dos hombres lo cuentan bajo la enramada, con las caras serias.",
    fin: "desde muy arriba queda la ranchería abajo y, al fondo, la serranía verde con su niebla y ningún camino que suba hacia ella.",
  }, "monstruo, criatura acechando, sombras, texto, moraleja dibujada, monumento"),
]);
