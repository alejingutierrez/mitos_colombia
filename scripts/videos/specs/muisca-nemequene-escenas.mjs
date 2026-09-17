// Keyframes de escena de Nemequene — 15 bloques × 2 = 30 cuadros ≈ 150 s.
// Guion: docs/videos/muiscas/mvp-guiones/guion-nemequene-v2.json (N=15)
// Acta:  docs/videos/muiscas/actas/acta-nemequene.json           (29 nudos)
//
// DOCTRINA v2 — tres reglas que se suman a las de bochica
// (ESCALA + LUZ + OBJETO ANCLA + CAPA DE PRIMER PLANO + anclaje de identidad).
//
// 1. PLANO INICIAL. Es el `start_image` que un modelo de video animará 5 s
//    (ver movimiento-v4.json de bochica: tramos 0-2 / 2-4 / 4-5 s + travelling).
//    Cada escena describe el instante en que la acción EMPIEZA, nunca su
//    resultado, deja aire hacia donde algo va a moverse y declara SE MOVERÁ.
//    Prohibidos los estados terminales y los bodegones inmóviles: la primera
//    vuelta dejó cuatro cuadros de objetos quietos sobre el suelo, que un
//    modelo de video no puede animar. Aquí hasta los planos de objetos llevan
//    una mano a medio gesto, polvo cayendo o una llama viva.
//
// 2. LO QUE EL RELATO TIENE SE MUESTRA. Nemequene no tiene prodigio —es el
//    mito más terrenal del corpus— pero sí tiene tres imágenes fuertes que no
//    se pueden apagar: la marca del mapa contra el pueblo real, el cielo tapado
//    de proyectiles y las tres memorias que no coinciden.
//
// 3. CONTINUIDAD DE PERSONAJE. Nemequene sale en once cuadros: en todos se
//    repiten sus rasgos fijos para que no derive entre plano y plano.
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · NO es un tirano ni un sabio: escucha disputas cada mañana Y amplió su
//   autoridad con amenazas. El video sostiene la contradicción, no la resuelve.
// · La batalla NO se pierde por traición: es la distancia entre la marca del
//   mapa y las casas que tiene encima.
// · Su muerte NO es heroica: un dardo, la retirada, una respiración corta.
// · Sus últimas palabras son una PREGUNTA sobre a quién dañan sus normas.
// · El duelo NO es unánime: tres memorias al mismo nivel, sin jerarquizar.
// · El cierre NO es derrota ante el zaque: el último territorio fue su límite.
//
// GUION DE LUZ: amanecer gris de audiencia → mañana plana → mediodía sin
// sombra → luz rasante sobre el mapa → tarde de capitanes → contraluz de la
// respuesta → alba fría de altiplano → polvo → gris de polvareda → luz caída →
// penumbra de camilla → última luz → noche de fuegos separados → tres luces
// distintas → amanecer sin él.

export const SPEC_NAME = "muisca-nemequene-escenas";
export const OUT_DIR = "muiscas/videos/nemequene/keyframes";

export const SHARED_AVOID =
  "texto, letras, logos, marcas de agua, marcos o bordes; CGI, render 3D o ilustracion digital pulida; miniatura tilt-shift; maqueta de plastilina, arcilla o resina; terreno o vegetacion modelados en 3D; desenfoque fotografico de poca profundidad de campo; cielo fotografico o en degradado liso; rasgos europeos en cualquier persona; sandalias, calzado, tunicas blancas largas o ropa que no sea la manta muisca de las referencias; coronas, tronos, cetros, templos europeos o cruces; piramides, penachos o iconografia mesoamericana; grecas, meandros o cenefas decorativas repetidas; armaduras, cascos, escudos metalicos, espadas o armas de metal; banderas, estandartes o insignias; joyeria inventada u oro en el cuerpo; sangre abundante, vísceras, heridas explicitas, cadaveres amontonados; desnudez o sexualizacion; niños; cambiar los rostros, mantas o materiales de los personajes de referencia; epica triunfal, poses heroicas, ultima carga o gesto glorioso";

export const DIRECCION =
  "cada cuadro es el PRIMER FOTOGRAMA de un clip de 5 s que animará un modelo de video: la acción está empezando y no terminada, y la composición deja aire en la dirección del movimiento. Cada escena declara SE MOVERÁ: eso es lo que tiene que poder animarse.";

export const PALETTE =
  "gris de amanecer de altiplano, pardo de tierra pisada, verde apagado de sabana, crema de algodon crudo, ocre de totuma y madera; el polvo como velo comun; sin saturacion ni neones";

// CONTINUIDAD: rasgos fijos, repetidos en los once cuadros donde sale.
const NEME =
  "EL MISMO Nemequene de la referencia (rostro anguloso y grave, pelo negro a la mandíbula, cinta lisa en la frente, manta cruda al hombro derecho, descalzo)";

const VESTUARIO =
  " Vestuario de los demás: manta de algodón crudo lisa anudada a un hombro y por encima de la rodilla, todos los pies descalzos, sin cenefas ni joyas.";

const B = "muiscas/biblia";
const kf = (id, refs, scene, avoid) => ({ id, kind: "keyframe", preset: "vertical", refs, scene, avoid });
const kfp = (id, refs, scene, avoid) => ({ id, kind: "keyframe", preset: "vertical", refs, scene: scene + VESTUARIO, avoid });

export const ITEMS = [
  // b1 — Antes de las noticias de guerra, escuchaba disputas.
  kfp("b1a", [`${B}/nemequene_zipa`, `${B}/cercado_bacata`],
    `PLANO MEDIO LARGO, luz gris de amanecer entrando baja por la puerta. ${NEME}. Está sentado en una estera en EL MISMO cercado de la referencia, INCLINÁNDOSE hacia adelante para escuchar: el torso a medio camino, las manos abriéndose sobre las rodillas. Delante y de espaldas, dos hombres que empiezan a hablar a la vez. SE MOVERÁ: él termina de inclinarse, los dos de espaldas gesticulan, el polvo flota en el haz de luz. Capa de primer plano: las espaldas de los dos. Objeto ancla: sus manos abriéndose.`,
    "trono, corona, cetro, gente arrodillada, guardias, figura ya inclinada y quieta"),
  kfp("b1b", [`${B}/poste_lindero`, `${B}/manta_horqueta`],
    "PLANO MEDIO BAJO, luz gris pareja de amanecer. Las pruebas de una disputa en la tierra: UN MISMO poste de lindero de la referencia tumbado junto al hueco fresco de donde lo sacaron, y al lado LA MISMA manta de la referencia doblada. Una mano entra por el borde del cuadro y está BAJANDO hacia el poste para señalarlo, todavía sin tocarlo. SE MOVERÁ: la mano llega al poste y lo señala, el polvo del hueco se levanta, la punta de la manta se mueve con el aire. Capa de primer plano: el hueco en la tierra. Objeto ancla: la mano bajando hacia el poste.",
    "rostros, violencia, armas, dramatismo, bodegon inmovil sin manos"),

  // b2 — Hacía preguntas, oía testigos, dictaba respuesta.
  kfp("b2a", [`${B}/nemequene_zipa`, `${B}/funcionario_totuma`],
    `PLANO MEDIO, luz plana de mañana. ${NEME}. De perfil, con la boca abriéndose en la primera palabra de su respuesta; frente a él, EL MISMO funcionario de la referencia con LA MISMA totuma de la referencia en las manos, empezando a inclinar la cabeza para retener lo dicho. Los dos a la misma altura. SE MOVERÁ: él dicta y el funcionario termina de inclinar la cabeza, la totuma se mueve en sus manos. Capa de primer plano: el borde de la totuma. Objeto ancla: la totuma entre los dos.`,
    "escritura, papeles, tablillas, plumas de escribir, trono, bocas cerradas"),
  kfp("b2b", [`${B}/camino_carrera`, `${B}/familias_muiscas`],
    "GRAN PLANO GENERAL, luz abierta de media mañana. Un correo de LAS MISMAS familias de la referencia yendo solo por EL MISMO camino de la referencia, a media distancia y de espaldas, con camino por delante hasta el horizonte. Lo que lleva es una decisión y por eso va solo y rápido. SE MOVERÁ: él se aleja por el camino hacia el fondo, el polvo se levanta tras sus pies, la hierba del borde ondea. Capa de primer plano: pasto de borde en sombra. Objeto ancla: la figura alejándose.",
    "caballos, carruajes, multitudes, banderas, figura ya en el horizonte"),

  // b3 — Una norma solo es fuerte mientras la esperen. Amplió con amenazas.
  kfp("b3a", [`${B}/mercado_bacata`, `${B}/familias_muiscas`],
    "PLANO MEDIO, luz de mediodía sin sombras. En EL MISMO mercado de la referencia, dos comerciantes de LAS MISMAS familias de la referencia CERRANDO un trato: las manos se están juntando sobre una manta doblada y unos panes de sal, sin haberse tocado aún. Alrededor, otros siguen en lo suyo sin mirar: nadie vigila y el trato se cumple igual. SE MOVERÁ: las manos se juntan y el trato se cierra, la gente del fondo cruza. Capa de primer plano: un cesto en sombra. Objeto ancla: las dos manos acercándose.",
    "guardias, soldados, vigilancia, miedo, violencia, manos ya estrechadas"),
  kfp("b3b", [`${B}/nemequene_zipa`, `${B}/gameza_cacique`],
    `PLANO MEDIO CORTO de dos, luz dura de mediodía. ${NEME}. Está ACERCÁNDOSE de lado a UN MISMO cacique de la referencia para hablarle casi al oído, todavía a un palmo y sin tocarlo; el otro mira al frente, tenso, sin responder. La amenaza está en la distancia que se acorta, no en un arma. SE MOVERÁ: él termina de acercarse y habla, el cacique traga y aprieta la mandíbula. Capa de primer plano: el hombro del cacique. Objeto ancla: el palmo que se cierra entre las dos caras.`,
    "armas, golpes, cuerdas, prisioneros, gritos, abrazo, los dos ya pegados"),

  // b4 — En los mapas cada territorio es una marca. En el camino, casas.
  kf("b4a", [`${B}/lineas_tierra`, `${B}/baston_mando`],
    "PLANO CENITAL CERRADO, luz rasante de tarde que da relieve. EL MISMO trazado de líneas en la tierra de la referencia, dibujado a punta de palo sobre el suelo del cercado: rayas, marcas pequeñas y piedritas que representan territorios. LA MISMA punta del bastón de la referencia entra en cuadro y va DESLIZÁNDOSE sobre el polvo hacia una marca del tamaño de una uña, dejando un surco fino detrás. SE MOVERÁ: la punta llega a la marca y se detiene, el polvo levantado por el surco se dispersa. Capa de primer plano: el canto del bastón. Objeto ancla: la marca hacia la que va la punta.",
    "mapas de papel, pergaminos, cartografia moderna, texto, rostros, baston inmovil"),
  kfp("b4b", [`${B}/casa_barro_paja`, `${B}/familias_muiscas`],
    "PLANO GENERAL a la altura del camino, luz de tarde cálida. EL MISMO poblado de bohíos de la referencia visto desde el camino real: humos finos subiendo de los techos, gente de LAS MISMAS familias de la referencia en sus patios en plena tarea, una mujer levantando una manta para tenderla. Es exactamente la marca del cuadro anterior, vista de cerca. SE MOVERÁ: la manta termina de extenderse y ondea, los humos suben y se inclinan, la gente sigue en lo suyo. Capa de primer plano: el borde del camino en sombra. Objeto ancla: la manta subiendo.",
    "ruinas, guerra, incendio, gente huyendo, soldados, poblado vacio y quieto"),

  // b5 — Los capitanes celebraron. «Después de Hunsa nadie discutirá».
  kfp("b5a", [`${B}/nemequene_zipa`, `${B}/salon_jeques`],
    `PLANO MEDIO LARGO, luz baja de tarde por una abertura lateral. Cuatro capitanes de pie en EL MISMO salón de la referencia, animados: uno está ESTIRANDO el brazo hacia adelante, a media altura, como quien ya ve el resultado; los otros se vuelven hacia él. ${NEME}. Está sentado a un lado, callado y en sombra parcial, sin acompañar el gesto. SE MOVERÁ: el brazo termina de estirarse, los otros tres reaccionan, el polvo flota en el haz lateral. Capa de primer plano: un hombro de capitán en sombra. Objeto ancla: el brazo a media altura.`,
    "brindis con copas, armas en alto, gritos, mesas, sillas, brazo ya extendido"),
  kfp("b5b", [`${B}/zaque_hunza`, `${B}/campo_pelado`],
    "PLANO GENERAL, luz fría de tarde con viento. EL MISMO cercado del zaque de la referencia al otro lado del MISMO campo pelado de la referencia, entero y en pie, con sus humos y sus cercas. Todavía no ha pasado nada. La distancia entre el espectador y el cercado es el tema. SE MOVERÁ: la hierba seca del campo ondea en oleadas hacia el cercado, los humos se inclinan, una nube cruza y le pasa la sombra por encima. Capa de primer plano: la hierba seca. Objeto ancla: el cercado intacto al fondo.",
    "batalla, ejercitos, humo de incendio, ruinas, banderas, campo inmovil"),

  // b6 — «Siempre habrá alguien que las discuta». No fue sumisión.
  kf("b6a", [`${B}/lineas_tierra`],
    "PLANO CENITAL MUY CERRADO, luz lateral de tarde. LAS MISMAS líneas de la referencia en el suelo del cercado, y un pie descalzo que acaba de pisar una de ellas y está EMPEZANDO A LEVANTARSE: bajo el talón la raya ya está rota y el polvo se está alzando. La marca que ordenaba todo es tierra suelta. SE MOVERÁ: el pie termina de levantarse y sale de cuadro, el polvo se dispersa sobre la raya rota. Capa de primer plano: el polvo removido. Objeto ancla: la raya partida bajo el talón.",
    "rostros, personas completas, texto, simbolos, huella ya vacia y quieta"),
  kfp("b6b", [`${B}/nemequene_zipa`, `${B}/cercado_bacata`],
    `PLANO MEDIO en contraluz, la luz de la tarde entrando por detrás. ${NEME}. De pie, BAJANDO la mirada hacia el suelo donde están las líneas, con la cabeza a medio girar y el rostro parcialmente en sombra, sin gesto legible de triunfo ni de duda. No mira a los capitanes. SE MOVERÁ: la cabeza termina de bajar, la manta ondea en el contraluz, el polvo cruza el haz. Capa de primer plano: el marco oscuro de la abertura. Objeto ancla: su mirada bajando.`,
    "expresion heroica, puño cerrado, mandibula teatral, aureola, cabeza ya baja"),

  // b7 — Los dos ejércitos en el altiplano. Recorrió sus filas.
  kfp("b7a", [`${B}/campo_pelado`, `${B}/familias_muiscas`, `${B}/altiplano_noche`],
    "GRAN PLANO GENERAL, alba fría y azul de altiplano con niebla a ras de suelo. DOS masas oscuras de gente enfrentadas a lo ancho del MISMO campo pelado de la referencia, separadas por una franja vacía de tierra; ninguna carga todavía, las dos quietas y esperando. La niebla les corta los pies. SE MOVERÁ: la niebla rueda por la franja vacía y va tapando y destapando las dos masas, que ondulan levemente sin avanzar. Capa de primer plano: hierba escarchada. Objeto ancla: la franja vacía entre las dos masas.",
    "armaduras, cascos, banderas, caballos, formaciones romanas, epica, carga ya empezada"),
  kfp("b7b", [`${B}/nemequene_zipa`, `${B}/familias_muiscas`],
    `PLANO MEDIO LATERAL, luz de alba rasante. ${NEME}. Camina delante de una fila de hombres jóvenes de LAS MISMAS familias de la referencia que sostienen lanzas de madera en vertical; va a media fila y le queda fila por delante, y está girando la cara hacia el siguiente hombre al pasar. Caras jóvenes, manos apretadas en las astas. SE MOVERÁ: él sigue recorriendo la fila y cada cara se gira a su paso, las astas oscilan, la niebla pasa. Capa de primer plano: dos astas cruzando el cuadro. Objeto ancla: la cara joven que está a punto de mirarlo.`,
    "arengas, gritos, brazos en alto, armas de metal, epica triunfal, figura detenida"),

  // b8 — Allí podía ordenar una reparación. Pudo retirarse; no lo hizo.
  kfp("b8a", [`${B}/nemequene_zipa`, `${B}/campo_pelado`],
    `PRIMER PLANO MEDIO, luz de alba plana. ${NEME}. De tres cuartos, quieto, con los ojos MOVIÉNDOSE hacia el campo que está fuera de cuadro: la expresión es la de quien calcula, no la de quien se envalentona. Fondo tapado por la niebla, sin nadie reconocible. SE MOVERÁ: la mirada termina de recorrer el campo, respira una vez, la niebla pasa por detrás y el pelo se mueve. Capa de primer plano: el borde de su manta. Objeto ancla: sus ojos calculando.`,
    "lagrimas, miedo teatral, determinacion epica, aureola, rostro congelado"),
  kf("b8b", [`${B}/cercado_bacata`, `${B}/manta_horqueta`],
    "PLANO MEDIO, luz gris tenue que entra por la puerta del cercado. LA MISMA estera vacía de la referencia donde cada mañana se sentaba a oír disputas, con LA MISMA manta de la referencia doblada a un lado; entra una corriente de aire por la puerta abierta y el pico de la manta empieza a levantarse. El plano cita el primer cuadro del video, ahora sin él. SE MOVERÁ: el pico de la manta se levanta y vuelve a caer, el polvo cruza el haz de luz, la luz sube despacio sobre la estera. Capa de primer plano: el filo de la estera. Objeto ancla: el sitio vacío.",
    "personas, rostros, fantasmas, sobreimpresiones, bodegon totalmente inmovil"),

  // b9 — Proyectiles que ocultaron la luz. Ningún plan conservó su forma.
  kf("b9a", [`${B}/campo_pelado`],
    "CONTRAPICADO al cielo, luz sucia tapada. El cielo del MISMO campo de la referencia SIENDO cruzado por una primera oleada de dardos y piedras de papel en vuelo, que entra por el borde derecho del cuadro y todavía no lo ha llenado: por la izquierda aún se ve cielo gris limpio. NO se ve el suelo ni a nadie. SE MOVERÁ: la oleada cruza y tapa el cielo que quedaba, la luz se ensucia, llega una segunda oleada detrás. Capa de primer plano: dos astas pasando muy cerca. Objeto ancla: el borde de cielo aún limpio.",
    "personas, sangre, impactos en cuerpos, explosiones, fuego, cielo ya tapado del todo"),
  kf("b9b", [`${B}/lineas_tierra`, `${B}/campo_pelado`],
    "PLANO CENITAL, luz de polvareda gris. El suelo del MISMO campo de la referencia OCUPANDO TODO EL CUADRO y cubierto de huellas hondas y cruzadas en todas direcciones, con una docena de dardos de caña recién clavados en la tierra en ángulos distintos, uno de ellos todavía vibrando, y jirones de polvo flotando en capas a ras de suelo. El cuadro está lleno de marcas, no vacío. Es el mapa del cuadro b4a después. SE MOVERÁ: el dardo deja de vibrar, el polvo se asienta despacio y descubre más pisadas. Capa de primer plano: el dardo que vibra. Objeto ancla: las pisadas sin dirección.",
    "cadaveres, sangre abundante, vísceras, rostros, polvo ya asentado, suelo liso o vacio, superficie sin marcas"),

  // b10 — Un dardo alcanzó a Nemequene. Unos siguieron, otros retrocedieron.
  kfp("b10a", [`${B}/nemequene_zipa`, `${B}/familias_muiscas`],
    `PLANO MEDIO BAJO, luz gris de polvo. ${NEME}. Está siendo LEVANTADO del suelo por dos de sus hombres que lo toman de los brazos, todavía a medio alzar y con la cabeza cayendo hacia adelante; no se ve la herida. Los que lo cargan van agachados y les queda camino por delante. SE MOVERÁ: terminan de alzarlo y empiezan a sacarlo de cuadro, el polvo se levanta a su paso. Capa de primer plano: polvo y piernas cruzando. Objeto ancla: la cabeza cayendo.`,
    "sangre abundante, herida explicita, grito, pose de martir, cuerpo ya alzado y quieto"),
  kfp("b10b", [`${B}/familias_muiscas`, `${B}/campo_pelado`],
    "PLANO GENERAL partido en dos, luz gris pareja. En la mitad izquierda, hombres de LAS MISMAS familias de la referencia avanzando hacia el fondo; en la mitad derecha, otros retrocediendo hacia el frente. Las dos direcciones a la vez, cruzándose en el centro, sin que ninguna se vea mejor. SE MOVERÁ: los dos flujos se cruzan y se atraviesan en el centro del cuadro, el polvo sube entre ellos. Capa de primer plano: el polvo entre los dos grupos. Objeto ancla: la línea donde se cruzan.",
    "cobardia caricaturizada, heroismo, banderas, sangre, grupos detenidos"),

  // b11 — Pidió agua y llamó a sus sucesores.
  kfp("b11a", [`${B}/nemequene_zipa`, `${B}/vasija_gacha`],
    `PLANO DETALLE, penumbra de interior con una lámpara baja. Una mano ACERCA LA MISMA vasija de la referencia con agua hacia los labios del MISMO Nemequene tendido —de él se ven sólo la boca y la barbilla, el resto en sombra—, todavía a un palmo de la cara. El agua tiembla en el borde. SE MOVERÁ: la vasija llega a los labios, el agua se inclina, la llama de la lámpara late. Capa de primer plano: la vasija. Objeto ancla: el agua temblando.`,
    "rostro completo, agonia teatral, sangre, vendas ensangrentadas, vasija ya en los labios"),
  kfp("b11b", [`${B}/heredero_dorado`, `${B}/esposa_principal`, `${B}/nemequene_zipa`],
    `PLANO MEDIO, penumbra con una sola lámpara de sebo. EL MISMO heredero de la referencia y LA MISMA esposa principal de la referencia junto al camastro donde yace ${NEME}; los dos están INCLINÁNDOSE hacia él para oírlo, a medio gesto. La luz sólo alcanza las caras de ellos dos. SE MOVERÁ: los dos terminan de inclinarse, la llama late y mueve las sombras en la pared. Capa de primer plano: el borde del camastro. Objeto ancla: las dos caras acercándose.`,
    "llanto teatral, gritos, gente arrodillada, cruces, sacerdotes, figuras ya inclinadas"),

  // b12 — «Tendrán que saber a quién dañan». (CITA)
  kfp("b12a", [`${B}/nemequene_zipa`],
    `PRIMER PLANO, última luz cálida y muy baja. ${NEME}. De perfil sobre el camastro, con la boca ABRIÉNDOSE en la primera palabra y los ojos girando hacia quien no está en cuadro. La imagen es de alguien preguntando, no de alguien dictando. SE MOVERÁ: él termina de decir la frase, el pecho sube una vez, la luz baja un punto más. Capa de primer plano: la sombra del camastro. Objeto ancla: la boca que se abre.`,
    "gesto de mando, dedo levantado, ojos cerrados, aureola, lagrimas, boca cerrada"),
  kfp("b12b", [`${B}/heredero_dorado`, `${B}/salon_jeques`],
    "PLANO MEDIO, luz de lámpara con el fondo oscuro. EL MISMO heredero de la referencia de pie, VESTIDO con la manta de algodón crudo lisa anudada al hombro y cubriéndole el torso, con la mirada EMPEZANDO A BAJAR y las manos vacías abriéndose a los lados; no responde. Detrás, en sombra, los otros esperan que diga algo. SE MOVERÁ: la mirada termina de bajar, las manos se abren del todo, las sombras del fondo se mueven con la llama. Capa de primer plano: las manos vacías. Objeto ancla: la mirada bajando.",
    "torso desnudo, pecho descubierto, taparrabos, juramentos, manos alzadas, coronacion, ceremonias, objetos de poder entregados"),

  // b13 — Murió antes de volver. Objetos de su posición y recuerdos.
  kf("b13a", [`${B}/baston_mando`, `${B}/manta_vasijas`],
    "PLANO DETALLE cenital, luz nocturna de lámpara. LOS MISMOS objetos de posición de la referencia dispuestos en fila sobre una manta extendida: EL MISMO bastón de mando de la referencia, una vasija, una manta doblada. Dos manos están BAJANDO el bastón hacia su sitio en la fila y aún no lo han soltado. SE MOVERÁ: las manos dejan el bastón y se retiran de cuadro, la llama late y mueve las sombras de los objetos. Capa de primer plano: el remate del bastón. Objeto ancla: el bastón que aún no se suelta.",
    "personas de cuerpo entero, oro, coronas, armas, cruces, tumbas europeas, bodegon inmovil"),
  kfp("b13b", [`${B}/familias_muiscas`, `${B}/altiplano_noche`],
    "PLANO GENERAL nocturno, luz de fogones bajos repartidos. Grupos separados de gente de LAS MISMAS familias de la referencia en la noche del MISMO altiplano de la referencia, cada grupo alrededor de su propio fuego pequeño y sin juntarse con los otros. El duelo está repartido y no es uno solo. SE MOVERÁ: los fuegos laten y crecen a destiempo unos de otros, las siluetas se mueven alrededor de cada uno, el humo sube. Capa de primer plano: un fuego pequeño en sombra. Objeto ancla: los fuegos separados.",
    "cortejo unico, procesion, llanto colectivo, ceremonia unificada, fuegos congelados"),

  // b14 — Legislador, estratega, ausencia. Tres memorias al mismo nivel.
  kfp("b14a", [`${B}/familias_muiscas`, `${B}/cercado_bacata`],
    "PLANO GENERAL dividido en TRES franjas verticales iguales, cada una con su propia luz y a la misma distancia de cámara: a la izquierda, gris de amanecer, un hombre sentado empezando a oír una disputa; en el centro, luz de polvo, dos hombres girándose hacia un campo vacío; a la derecha, luz de fogón, una mujer sola volviéndose hacia una estera vacía. Ninguna franja es más grande ni está mejor iluminada. SE MOVERÁ: en cada franja el gesto se completa a su propio ritmo y las tres luces laten distinto. Capa de primer plano: los dos filos entre franjas. Objeto ancla: las tres escenas del mismo tamaño.",
    "una memoria dominante, jerarquia, retrato central, texto, simbolos, tres escenas congeladas"),
  kf("b14b", [`${B}/cercado_bacata`, `${B}/lineas_tierra`],
    "PLANO MEDIO, luz gris de amanecer igual a la del primer bloque. EL MISMO cercado de la referencia con la estera vacía y, en el suelo de al lado, LAS MISMAS líneas de la referencia a medio borrar; la primera luz está ENTRANDO por la puerta y avanza por el suelo hacia las líneas sin haberlas alcanzado. No hay nadie para oír a nadie. SE MOVERÁ: la cuña de luz avanza y alcanza las líneas, el polvo flota en ella. Capa de primer plano: el umbral en sombra. Objeto ancla: el borde de luz avanzando.",
    "personas, fantasmas, sobreimpresiones, texto, luz estatica"),

  // b15 — Quién limita a quien puede castigar. Su propio límite.
  kf("b15a", [`${B}/sabana_linderos`, `${B}/poste_lindero`],
    "GRAN PLANO GENERAL, amanecer limpio sin él. LA MISMA sabana de linderos de la referencia con LA MISMA raya de postes de la referencia siguiendo hasta el horizonte y las parcelas sembradas y ordenadas. El territorio sigue igual y funciona. Sin personas. SE MOVERÁ: una racha de viento recorre las sementeras en oleada de un lado al otro del cuadro, las sombras de los postes se acortan con la luz que sube. Capa de primer plano: un poste cortado por el borde. Objeto ancla: la raya que continúa.",
    "personas, tumbas, monumentos, estatuas, texto, campo inmovil"),
  kf("b15b", [`${B}/campo_pelado`, `${B}/altiplano_noche`],
    "PLANO GENERAL final, luz que se va cerrando. EL MISMO campo pelado de la referencia vacío, con una sola línea de pisadas que cruza el cuadro y se interrumpe a la mitad, sin llegar al otro borde; el polvo todavía se está asentando sobre las últimas huellas y nada las continúa. SE MOVERÁ: el viento borra despacio las huellas del final de la línea, la luz baja un punto. Capa de primer plano: la última pisada. Objeto ancla: la línea que se corta.",
    "personas, cuerpos, armas, texto, simbolos, flechas dibujadas, escena congelada"),
];
