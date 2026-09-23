// Keyframes de Nemequene — 15 bloques × 2 escenas × 2 cuadros = 60 imágenes ≈ 150 s.
// Guion: docs/videos/muiscas/mvp-guiones/guion-nemequene-v2.json (N=15)
// Acta:  docs/videos/muiscas/actas/acta-nemequene.json           (29 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _muisca-comun.mjs).
//
// LO QUE EL RELATO TIENE SE MUESTRA. Nemequene no tiene prodigio —es el mito
// más terrenal del corpus— pero sí tiene tres imágenes fuertes que no se
// pueden apagar: la marca del mapa contra el pueblo real, el cielo tapado de
// proyectiles y las tres memorias que no coinciden.
//
// CONTINUIDAD DE PERSONAJE. Nemequene sale en once escenas: en todas se
// repiten sus rasgos fijos para que no derive entre plano y plano.
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

import { DIRECCION, AVOID_BASE, ref, esc, escp, armar } from "./_muisca-comun.mjs";

export const SPEC_NAME = "muisca-nemequene-escenas";
export const OUT_DIR = "muiscas/videos/nemequene/keyframes";
export { DIRECCION };

export const SHARED_AVOID =
  AVOID_BASE + "; heridas explicitas, vendas ensangrentadas; niños; epica triunfal, poses heroicas, ultima carga o gesto glorioso; formaciones romanas; caballos y carruajes";

export const PALETTE =
  "gris de amanecer de altiplano, pardo de tierra pisada, verde apagado de sabana, crema de algodon crudo, ocre de totuma y madera; el polvo como velo comun; sin saturacion ni neones";

// CONTINUIDAD: rasgos fijos, repetidos en las once escenas donde sale.
const NEME =
  "EL MISMO Nemequene de la referencia (rostro anguloso y grave, pelo negro a la mandíbula, cinta lisa en la frente, manta cruda al hombro derecho, descalzo)";

export const ITEMS = armar([
  // b1 — Antes de las noticias de guerra, escuchaba disputas.
  escp("b1a", [ref("nemequene_zipa"), ref("cercado_bacata")], {
    comun: `Luz gris de amanecer entrando baja por la puerta. ${NEME} está sentado en una estera en EL MISMO cercado de la referencia; delante y de espaldas, dos hombres que hablan a la vez. Objeto ancla: sus manos.`,
    camara: {
      a: "PLANO MEDIO LARGO frontal desde detrás de los dos litigantes, con sus espaldas cortando el primer término.",
      b: "la cámara ha RODEADO el corro y se ha puesto al lado de él: PLANO MEDIO lateral en el que se le ven las manos y, al fondo, las caras de los dos que hablan.",
    },
    ini: "se está inclinando hacia adelante para escuchar, con el torso a medio camino y las manos abriéndose sobre las rodillas.",
    fin: "quedó inclinado del todo hacia ellos, con las manos abiertas sobre las rodillas, mientras los dos de espaldas gesticulan y el polvo flota en el haz de luz.",
  }, "trono, corona, cetro, gente arrodillada, guardias"),
  esc("b1b", [ref("poste_lindero"), ref("manta_horqueta")], {
    comun: "Luz gris pareja de amanecer. Las pruebas de una disputa en la tierra: UN MISMO poste de lindero de la referencia tumbado junto al hueco fresco de donde lo sacaron, y al lado LA MISMA manta de la referencia doblada. Objeto ancla: la mano.",
    camara: {
      a: "PLANO MACRO sobre el hueco fresco en la tierra, con el poste tumbado al lado.",
      b: "la cámara ha RETROCEDIDO y ha subido hasta un PLANO GENERAL del cercado: se ven el poste, la manta y las dos figuras que discuten alrededor.",
    },
    ini: "una mano entra por el borde del cuadro bajando hacia el poste para señalarlo, todavía sin tocarlo.",
    fin: "la mano llegó al poste y lo señala con el índice apoyado en la madera, con el polvo del hueco levantado y la punta de la manta movida por el aire.",
  }, "rostros, violencia, armas, dramatismo"),

  // b2 — Hacía preguntas, oía testigos, dictaba respuesta.
  escp("b2a", [ref("nemequene_zipa"), ref("funcionario_totuma")], {
    comun: `Luz plana de mañana. ${NEME} de perfil; frente a él, EL MISMO funcionario de la referencia con LA MISMA totuma de la referencia en las manos. Los dos a la misma altura. Objeto ancla: la totuma entre los dos.`,
    camara: {
      a: "PLANO MEDIO de los dos de perfil, la totuma entre ellos en el centro del cuadro.",
      b: "la cámara ha AVANZADO hasta la totuma y ha basculado a cenital: PLANO DETALLE del cuenco en las manos del funcionario, con las dos caras fuera de campo.",
    },
    ini: "él abre la boca en la primera palabra de su respuesta y el funcionario empieza a inclinar la cabeza para retener lo dicho.",
    fin: "él sigue dictando y el funcionario terminó de inclinar la cabeza, con la totuma girada entre sus manos.",
  }, "escritura, papeles, tablillas, plumas de escribir, trono"),
  escp("b2b", [ref("camino_carrera"), ref("familias_muiscas")], {
    comun: "Luz abierta de media mañana. Un correo de LAS MISMAS familias de la referencia yendo solo por EL MISMO camino de la referencia, de espaldas, con camino por delante hasta el horizonte. Lo que lleva es una decisión y por eso va solo y rápido. Objeto ancla: la figura.",
    camara: {
      a: "PLANO MEDIO por detrás del correo, pegado a su espalda, con el camino abriéndose delante.",
      b: "la cámara se ha QUEDADO ATRÁS y ha subido: GRAN PLANO GENERAL en picado de la sabana con él convertido en un punto sobre el camino.",
    },
    ini: "va a media distancia y todavía se le distingue la manta.",
    fin: "se alejó hacia el fondo y ya es una silueta pequeña sobre el camino, con el polvo levantado tras sus pies y la hierba del borde ondeando.",
  }, "caballos, carruajes, multitudes, banderas"),

  // b3 — Una norma solo es fuerte mientras la esperen. Amplió con amenazas.
  escp("b3a", [ref("mercado_bacata"), ref("familias_muiscas")], {
    comun: "Luz de mediodía sin sombras. En EL MISMO mercado de la referencia, dos comerciantes de LAS MISMAS familias de la referencia sobre una manta doblada y unos panes de sal; alrededor, otros siguen en lo suyo sin mirar: nadie vigila y el trato se cumple igual. Objeto ancla: las dos manos.",
    camara: {
      a: "PLANO MEDIO de los dos comerciantes con un cesto en sombra en primer término.",
      b: "la cámara se ha ELEVADO y ha retrocedido: PLANO GENERAL del mercado entero, con el trato pequeño en el centro y todo el mundo alrededor a lo suyo.",
    },
    ini: "las manos se están juntando sobre la manta sin haberse tocado aún.",
    fin: "las manos se juntaron y el trato quedó cerrado, con la gente del fondo cruzando sin mirarlos.",
  }, "guardias, soldados, vigilancia, miedo, violencia"),
  escp("b3b", [ref("nemequene_zipa"), ref("gameza_cacique")], {
    comun: `Luz dura de mediodía. ${NEME} de lado a UN MISMO cacique de la referencia, que mira al frente, tenso y sin responder. La amenaza está en la distancia que se acorta, no en un arma. Objeto ancla: el espacio entre las dos caras.`,
    camara: {
      a: "PLANO MEDIO CORTO de los dos de perfil, con el hombro del cacique en primer término.",
      b: "la cámara se ha metido ENTRE las dos caras y ha girado hacia el cacique: PRIMER PLANO de él escuchando, con la boca de Nemequene entrando por el borde.",
    },
    ini: "él se está acercando para hablarle casi al oído y queda todavía un palmo entre los dos.",
    fin: "cerró el palmo y le habla al oído, con el cacique tragando y apretando la mandíbula sin girarse.",
  }, "armas, golpes, cuerdas, prisioneros, gritos, abrazo"),

  // b4 — En los mapas cada territorio es una marca. En el camino, casas.
  esc("b4a", [ref("lineas_tierra"), ref("baston_mando")], {
    comun: "Luz rasante de tarde que da relieve. EL MISMO trazado de líneas en la tierra de la referencia, dibujado a punta de palo sobre el suelo del cercado: rayas, marcas pequeñas y piedritas que representan territorios. Objeto ancla: una marca del tamaño de una uña.",
    camara: {
      a: "PLANO CENITAL CERRADO sobre el trazado de líneas, con el canto del bastón entrando por un borde.",
      b: "la cámara se ha ELEVADO en vertical muchísimo: PLANO CENITAL ALTO en el que las líneas del suelo del cercado se leen como un mapa entero de parcelas.",
    },
    ini: "LA MISMA punta del bastón de la referencia entra en cuadro y se desliza sobre el polvo hacia esa marca, dejando un surco fino detrás.",
    fin: "la punta llegó a la marca y se detuvo encima de ella, con el surco entero dibujado detrás y el polvo levantado dispersándose.",
  }, "mapas de papel, pergaminos, cartografia moderna, texto, rostros"),
  escp("b4b", [ref("casa_barro_paja"), ref("familias_muiscas")], {
    comun: "Luz de tarde cálida. EL MISMO poblado de bohíos de la referencia visto desde el camino real, con humos finos subiendo de los techos y gente de LAS MISMAS familias de la referencia en sus patios. Es exactamente la marca de la escena anterior, vista de cerca. Objeto ancla: la manta que se tiende.",
    camara: {
      a: "PLANO GENERAL a la altura del camino, el poblado entero delante y el borde del camino en sombra.",
      b: "la cámara ha ENTRADO por el camino hasta el primer patio: PLANO MEDIO entre las casas, con la mujer tendiendo la manta muy cerca del objetivo.",
    },
    ini: "una mujer está levantando una manta para tenderla, a medio extender.",
    fin: "la manta quedó extendida del todo y ondea en la cuerda, con los humos inclinados y la gente en lo suyo.",
  }, "ruinas, guerra, incendio, gente huyendo, soldados"),

  // b5 — Los capitanes celebraron. «Después de Hunsa nadie discutirá».
  escp("b5a", [ref("nemequene_zipa"), ref("salon_jeques")], {
    comun: `Luz baja de tarde por una abertura lateral. Cuatro capitanes de pie en EL MISMO salón de la referencia, animados; ${NEME} está sentado a un lado, callado y en sombra parcial, sin acompañar el gesto. Objeto ancla: el brazo del capitán que habla.`,
    camara: {
      a: "PLANO MEDIO LARGO de los cuatro capitanes de pie, con un hombro en sombra en primer término.",
      b: "la cámara ha RODEADO el grupo hasta el rincón de Nemequene y ha bajado a su altura: PLANO MEDIO de él sentado y callado, con los capitanes al fondo y desenfocados.",
    },
    ini: "uno de ellos está estirando el brazo hacia adelante, a media altura, como quien ya ve el resultado.",
    fin: "el brazo quedó estirado del todo señalando al frente y los otros tres se volvieron hacia él, mientras Nemequene sigue quieto y callado en su sitio.",
  }, "brindis con copas, armas en alto, gritos, mesas, sillas"),
  escp("b5b", [ref("zaque_hunza"), ref("campo_pelado")], {
    comun: "Luz fría de tarde con viento. EL MISMO cercado del zaque de la referencia al otro lado del MISMO campo pelado de la referencia, entero y en pie, con sus humos y sus cercas. Todavía no ha pasado nada: la distancia es el tema. Objeto ancla: el cercado intacto al fondo.",
    camara: {
      a: "PLANO GENERAL desde el borde del campo, con la hierba seca grande en primer término y el cercado del zaque al fondo.",
      b: "la cámara ha AVANZADO sobre el campo hasta media distancia: PLANO MEDIO del cercado entero, con sus humos y sus cercas ya legibles.",
    },
    ini: "la hierba seca está quieta y el cercado recibe la luz de la tarde de lleno.",
    fin: "una oleada de viento recorrió la hierba hasta el cercado y la sombra de una nube le pasó por encima, dejándolo a media luz.",
  }, "batalla, ejercitos, humo de incendio, ruinas, banderas"),

  // b6 — «Siempre habrá alguien que las discuta». No fue sumisión.
  esc("b6a", [ref("lineas_tierra")], {
    comun: "Luz lateral de tarde. LAS MISMAS líneas de la referencia en el suelo del cercado, y un pie descalzo sobre una de ellas. La marca que ordenaba todo es tierra suelta. Objeto ancla: la raya partida bajo el talón.",
    camara: {
      a: "PLANO CENITAL MUY CERRADO del pie descalzo sobre la raya rota, con el polvo alzándose.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del suelo del cercado entero, con las líneas cruzándolo y la huella sola en medio.",
    },
    ini: "el pie acaba de pisar la raya y está empezando a levantarse: debajo del talón la línea ya está rota y el polvo se alza.",
    fin: "el pie salió de cuadro y quedó sólo la huella con la raya partida en dos, con el polvo asentándose sobre el corte.",
  }, "rostros, personas completas, texto, simbolos"),
  escp("b6b", [ref("nemequene_zipa"), ref("cercado_bacata")], {
    comun: `La luz de la tarde entrando por detrás. ${NEME} de pie, con el rostro parcialmente en sombra y sin gesto legible de triunfo ni de duda. No mira a los capitanes. Objeto ancla: su mirada.`,
    camara: {
      a: "PLANO MEDIO en contraluz de él de pie, con el marco oscuro de la abertura en primer término.",
      b: "la cámara ha RODEADO hasta el lado de la luz: PLANO MEDIO CORTO con su cara ahora iluminada de lleno y el cercado oscuro detrás.",
    },
    ini: "está bajando la mirada hacia el suelo donde están las líneas, con la cabeza a medio girar.",
    fin: "terminó de bajar la cabeza y mira de lleno las líneas del suelo, con la manta ondeando en el contraluz y el polvo cruzando el haz.",
  }, "expresion heroica, puño cerrado, mandibula teatral, aureola"),

  // b7 — Los dos ejércitos en el altiplano. Recorrió sus filas.
  escp("b7a", [ref("campo_pelado"), ref("familias_muiscas"), ref("altiplano_noche")], {
    comun: "Alba fría y azul de altiplano con niebla a ras de suelo. DOS masas oscuras de gente enfrentadas a lo ancho del MISMO campo pelado de la referencia, separadas por una franja vacía de tierra; ninguna carga, las dos quietas y esperando. Objeto ancla: la franja vacía entre las dos masas.",
    camara: {
      a: "GRAN PLANO GENERAL frontal de las dos masas enfrentadas, con hierba escarchada en primer término.",
      b: "la cámara se ha ELEVADO y ha avanzado sobre la franja vacía: PICADO ALTO desde el medio del campo, con una masa a cada lado del cuadro.",
    },
    ini: "la niebla les corta los pies a las dos masas y la franja vacía está despejada.",
    fin: "la niebla rodó por la franja vacía y tapó del todo una de las dos masas, que ya sólo se adivina, mientras la otra sigue entera y quieta.",
  }, "armaduras, cascos, banderas, caballos, formaciones romanas, epica"),
  escp("b7b", [ref("nemequene_zipa"), ref("familias_muiscas")], {
    comun: `Luz de alba rasante. ${NEME} camina delante de una fila de hombres jóvenes de LAS MISMAS familias de la referencia que sostienen lanzas de madera en vertical; caras jóvenes, manos apretadas en las astas. Objeto ancla: la cara joven más cercana.`,
    camara: {
      a: "PLANO MEDIO LATERAL acompañándolo a lo largo de la fila, con dos astas cruzando el cuadro.",
      b: "la cámara se ha DETENIDO junto a un hombre joven y él ha seguido: PRIMER PLANO de esa cara joven, con Nemequene pasando desenfocado por detrás.",
    },
    ini: "va a media fila, girando la cara hacia el siguiente hombre al pasar, con fila por delante.",
    fin: "avanzó dos puestos más por la fila y ahora mira de frente a esa cara joven, que se giró hacia él; las astas oscilan y la niebla pasa.",
  }, "arengas, gritos, brazos en alto, armas de metal, epica triunfal"),

  // b8 — Allí podía ordenar una reparación. Pudo retirarse; no lo hizo.
  escp("b8a", [ref("nemequene_zipa"), ref("campo_pelado")], {
    comun: `Luz de alba plana. ${NEME} de tres cuartos, quieto; la expresión es la de quien calcula, no la de quien se envalentona. Fondo tapado por la niebla, sin nadie reconocible. Objeto ancla: sus ojos.`,
    camara: {
      a: "PRIMER PLANO MEDIO de tres cuartos, con el borde de su manta en primer término.",
      b: "la cámara ha RETROCEDIDO y se ha girado hacia donde él mira: PLANO GENERAL del campo con la niebla, sin él en cuadro.",
    },
    ini: "los ojos se le están moviendo hacia el campo que está fuera de cuadro.",
    fin: "terminó de recorrer el campo con la mirada y la dejó fija en un punto, respirando una vez, con la niebla pasando por detrás y el pelo movido.",
  }, "lagrimas, miedo teatral, determinacion epica, aureola"),
  esc("b8b", [ref("cercado_bacata"), ref("manta_horqueta")], {
    comun: "Luz gris tenue que entra por la puerta del cercado. LA MISMA estera vacía de la referencia donde cada mañana se sentaba a oír disputas, con LA MISMA manta de la referencia doblada a un lado. La escena cita el primer cuadro del video, ahora sin él. Objeto ancla: el sitio vacío.",
    camara: {
      a: "PLANO MEDIO de la estera vacía con la manta doblada al lado.",
      b: "la cámara ha RETROCEDIDO hasta la puerta del cercado y mira hacia dentro: PLANO GENERAL del cuarto entero con la estera pequeña y vacía en el centro.",
    },
    ini: "entra una corriente de aire por la puerta abierta y el pico de la manta empieza a levantarse.",
    fin: "el pico de la manta cayó otra vez y quedó quieto, y la luz subió por el suelo hasta tocar el borde de la estera vacía.",
  }, "personas, rostros, fantasmas, sobreimpresiones"),

  // b9 — Proyectiles que ocultaron la luz. Ningún plan conservó su forma.
  esc("b9a", [ref("campo_pelado")], {
    comun: "Luz sucia tapada. El cielo del MISMO campo de la referencia cruzado por oleadas de dardos y piedras de papel en vuelo. NO se ve el suelo ni a nadie. Objeto ancla: el borde de cielo limpio.",
    camara: {
      a: "CONTRAPICADO al cielo con dos astas pasando muy cerca del objetivo.",
      b: "la cámara ha SUBIDO por encima de la oleada y ha basculado: PLANO GENERAL desde arriba del cielo entero cruzado de astas, sin suelo en cuadro.",
    },
    ini: "la primera oleada entra por el borde derecho y por la izquierda todavía se ve cielo gris limpio.",
    fin: "la oleada cruzó y tapó también ese borde: el cielo entero quedó cubierto de astas y piedras, con la luz ensuciada y una segunda oleada entrando detrás.",
  }, "personas, sangre, impactos en cuerpos, explosiones, fuego"),
  esc("b9b", [ref("lineas_tierra"), ref("campo_pelado")], {
    comun: "Luz de polvareda gris. El suelo del MISMO campo de la referencia ocupando TODO EL CUADRO, cubierto de huellas hondas y cruzadas en todas direcciones, con una docena de dardos de caña clavados en la tierra en ángulos distintos. Es el mapa de la escena b4a, después. Objeto ancla: las pisadas sin dirección.",
    camara: {
      a: "PLANO MACRO del dardo clavado que vibra, con la tierra pisada alrededor.",
      b: "la cámara se ha ELEVADO en vertical hasta un CENITAL ALTO: el campo entero se ve cubierto de huellas cruzadas y de dardos clavados en todas direcciones.",
    },
    ini: "uno de los dardos todavía vibra y hay jirones de polvo flotando en capas a ras de suelo.",
    fin: "el dardo dejó de vibrar y el polvo se asentó, descubriendo muchas más pisadas cruzadas de las que se veían antes.",
  }, "cadaveres, sangre abundante, vísceras, rostros, suelo liso o vacio"),

  // b10 — Un dardo alcanzó a Nemequene. Unos siguieron, otros retrocedieron.
  escp("b10a", [ref("nemequene_zipa"), ref("familias_muiscas")], {
    comun: `Luz gris de polvo. ${NEME} siendo levantado del suelo por dos de sus hombres que lo toman de los brazos; no se ve la herida y los que lo cargan van agachados. Objeto ancla: su cabeza.`,
    camara: {
      a: "PLANO MEDIO BAJO desde el suelo, con polvo y piernas cruzando el primer término.",
      b: "la cámara ha RETROCEDIDO abriendo paso mientras lo sacan: PLANO GENERAL de la retirada, con el grupo que lo carga alejándose entre el polvo.",
    },
    ini: "está a medio alzar, con la cabeza cayendo hacia adelante y los pies aún en la tierra.",
    fin: "terminaron de alzarlo y ya lo llevan, con los pies fuera del suelo y la cabeza colgando, saliendo hacia el borde del cuadro entre el polvo.",
  }, "sangre abundante, herida explicita, grito, pose de martir"),
  escp("b10b", [ref("familias_muiscas"), ref("campo_pelado")], {
    comun: "Luz gris pareja. En la mitad izquierda, hombres de LAS MISMAS familias de la referencia avanzando hacia el fondo; en la mitad derecha, otros retrocediendo hacia el frente. Las dos direcciones a la vez, sin que ninguna se vea mejor. Objeto ancla: la línea donde se cruzan.",
    camara: {
      a: "PLANO GENERAL frontal del campo partido en dos flujos que todavía no se encuentran.",
      b: "la cámara ha BAJADO al medio y se ha quedado quieta mientras los dos flujos la rodean: PLANO MEDIO desde dentro del cruce, con hombres pasando a los dos lados del objetivo.",
    },
    ini: "los dos flujos todavía no se han encontrado y entre ellos queda un hueco de tierra.",
    fin: "los dos flujos se cruzaron y se atraviesan en el centro del cuadro, con el polvo subiendo entre ellos.",
  }, "cobardia caricaturizada, heroismo, banderas, sangre"),

  // b11 — Pidió agua y llamó a sus sucesores.
  escp("b11a", [ref("nemequene_zipa"), ref("vasija_gacha")], {
    comun: `Penumbra de interior con una lámpara baja. Una mano acerca LA MISMA vasija de la referencia con agua hacia los labios del MISMO Nemequene tendido —de él se ven sólo la boca y la barbilla, el resto en sombra—. Objeto ancla: el agua.`,
    camara: {
      a: "PLANO DETALLE de la vasija acercándose a la boca, con el agua temblando en el borde.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO del camastro entero en la penumbra, con la lámpara baja y el cuerpo tendido.",
    },
    ini: "la vasija está todavía a un palmo de la cara y el agua tiembla en el borde.",
    fin: "la vasija llegó a los labios y se inclinó: el agua toca la boca y la llama de la lámpara late.",
  }, "rostro completo, agonia teatral, sangre, vendas ensangrentadas"),
  escp("b11b", [ref("heredero_dorado"), ref("esposa_principal"), ref("nemequene_zipa")], {
    comun: `Penumbra con una sola lámpara de sebo. EL MISMO heredero de la referencia y LA MISMA esposa principal de la referencia junto al camastro donde yace ${NEME}; la luz sólo alcanza las caras de ellos dos. Objeto ancla: las dos caras.`,
    camara: {
      a: "PLANO MEDIO de los dos inclinándose sobre el camastro, con el borde del camastro abajo.",
      b: "la cámara ha BAJADO hasta la altura del que yace y mira hacia arriba: CONTRAPICADO con las dos caras asomando sobre el objetivo y la llama detrás.",
    },
    ini: "los dos están inclinándose hacia él para oírlo, a medio gesto.",
    fin: "los dos quedaron inclinados hasta casi tocarle la cara, escuchando, mientras la llama late y mueve las sombras en la pared.",
  }, "llanto teatral, gritos, gente arrodillada, cruces, sacerdotes"),

  // b12 — «Tendrán que saber a quién dañan». (CITA)
  escp("b12a", [ref("nemequene_zipa")], {
    comun: `Última luz cálida y muy baja. ${NEME} de perfil sobre el camastro. La imagen es de alguien preguntando, no de alguien dictando. Objeto ancla: la boca.`,
    camara: {
      a: "PRIMER PLANO de perfil sobre el camastro, con la sombra del camastro en primer término.",
      b: "la cámara ha RETROCEDIDO y ha girado hacia los pies del camastro: PLANO GENERAL del cuarto en penumbra, con él pequeño al fondo y los demás escuchando en sombra.",
    },
    ini: "la boca se le está abriendo en la primera palabra y los ojos giran hacia quien no está en cuadro.",
    fin: "terminó la frase y cerró la boca, con el pecho subiendo una vez y la luz un punto más baja sobre su cara.",
  }, "gesto de mando, dedo levantado, ojos cerrados, aureola, lagrimas"),
  escp("b12b", [ref("heredero_dorado"), ref("salon_jeques")], {
    comun: "Luz de lámpara con el fondo oscuro. EL MISMO heredero de la referencia de pie, VESTIDO con una manta de algodón crudo lisa anudada al hombro que le cubre el torso; no responde. Detrás, en sombra, los otros esperan que diga algo. Objeto ancla: su mirada.",
    camara: {
      a: "PLANO MEDIO del heredero de pie con las manos vacías en primer término.",
      b: "la cámara ha RODEADO hasta su espalda: PLANO GENERAL desde detrás de él, con las caras de los que esperan una respuesta ocupando el fondo.",
    },
    ini: "la mirada le empieza a bajar y las manos vacías se abren a los lados.",
    fin: "terminó de bajar la mirada al suelo y las manos quedaron abiertas del todo, vacías, con las sombras del fondo moviéndose con la llama.",
  }, "torso desnudo, pecho descubierto, taparrabos, juramentos, manos alzadas, coronacion"),

  // b13 — Murió antes de volver. Objetos de su posición y recuerdos.
  esc("b13a", [ref("baston_mando"), ref("manta_vasijas")], {
    comun: "Luz nocturna de lámpara. LOS MISMOS objetos de posición de la referencia dispuestos en fila sobre una manta extendida: EL MISMO bastón de mando de la referencia, una vasija, una manta doblada. Objeto ancla: el bastón.",
    camara: {
      a: "PLANO DETALLE cenital de la fila de objetos, con el remate del bastón en primer término.",
      b: "la cámara ha RETROCEDIDO y ha bajado a la altura de la manta: PLANO MEDIO lateral con los tres objetos alineados y la llama moviendo sus sombras.",
    },
    ini: "dos manos están bajando el bastón hacia su sitio en la fila y aún no lo han soltado.",
    fin: "el bastón quedó dejado en la fila y las manos salieron de cuadro, con la llama latiendo y moviendo las sombras de los tres objetos.",
  }, "personas de cuerpo entero, oro, coronas, armas, cruces, tumbas europeas"),
  escp("b13b", [ref("familias_muiscas"), ref("altiplano_noche")], {
    comun: "Luz de fogones bajos repartidos. Grupos separados de gente de LAS MISMAS familias de la referencia en la noche del MISMO altiplano de la referencia, cada grupo alrededor de su propio fuego pequeño y sin juntarse con los otros. El duelo está repartido y no es uno solo. Objeto ancla: los fuegos separados.",
    camara: {
      a: "PLANO MEDIO junto a uno de los fuegos, con las siluetas alrededor muy cerca.",
      b: "la cámara se ha ELEVADO muy alto: GRAN PLANO GENERAL nocturno en el que se ven los siete fuegos repartidos por el altiplano, separados unos de otros.",
    },
    ini: "los fuegos están todos bajos y parejos.",
    fin: "los fuegos crecieron a destiempo unos de otros —uno alto, dos medianos, otro casi apagado— y las siluetas se movieron alrededor de cada uno.",
  }, "cortejo unico, procesion, llanto colectivo, ceremonia unificada"),

  // b14 — Legislador, estratega, ausencia. Tres memorias al mismo nivel.
  escp("b14a", [ref("familias_muiscas"), ref("cercado_bacata")], {
    comun: "Cada una con su propia luz y a la misma distancia de cámara: a la izquierda, gris de amanecer, un hombre sentado ante una disputa; en el centro, luz de polvo, dos hombres vueltos hacia un campo vacío; a la derecha, luz de fogón, una mujer sola ante una estera vacía. Ninguna franja es más grande ni está mejor iluminada. Objeto ancla: las tres escenas del mismo tamaño.",
    camara: {
      a: "PLANO GENERAL frontal de las tres franjas verticales a la misma distancia.",
      b: "la cámara ha hecho un TRAVELLING LATERAL de la primera franja a la tercera y ha entrado un poco en cada una: PLANO MEDIO en el que las tres siguen ocupando el mismo ancho pero se ven las caras.",
    },
    ini: "en las tres franjas el gesto está empezando: el hombre se inclina, los dos se giran, la mujer alza la cara.",
    fin: "en las tres franjas el gesto se completó a su propio ritmo —el hombre ya inclinado, los dos ya de frente al campo, la mujer ya mirando la estera— y las tres luces quedaron distintas entre sí.",
  }, "una memoria dominante, jerarquia, retrato central, texto, simbolos"),
  esc("b14b", [ref("cercado_bacata"), ref("lineas_tierra")], {
    comun: "Luz gris de amanecer igual a la del primer bloque. EL MISMO cercado de la referencia con la estera vacía y, en el suelo de al lado, LAS MISMAS líneas de la referencia a medio borrar. No hay nadie para oír a nadie. Objeto ancla: el borde de luz.",
    camara: {
      a: "PLANO MEDIO del umbral en sombra con la cuña de luz entrando por el suelo.",
      b: "la cámara ha AVANZADO siguiendo esa cuña hasta las líneas: PLANO CENITAL de las rayas a medio borrar con la luz encima.",
    },
    ini: "la primera luz entra por la puerta y avanza por el suelo hacia las líneas sin haberlas alcanzado.",
    fin: "la cuña de luz alcanzó las líneas y las ilumina de lado, con el polvo flotando dentro del haz.",
  }, "personas, fantasmas, sobreimpresiones, texto"),

  // b15 — Quién limita a quien puede castigar. Su propio límite.
  esc("b15a", [ref("sabana_linderos"), ref("poste_lindero")], {
    comun: "Amanecer limpio sin él. LA MISMA sabana de linderos de la referencia con LA MISMA raya de postes de la referencia siguiendo hasta el horizonte y las parcelas sembradas y ordenadas. El territorio sigue igual y funciona. Sin personas. Objeto ancla: la raya que continúa.",
    camara: {
      a: "GRAN PLANO GENERAL de la sabana con un poste cortado por el borde en primer término.",
      b: "la cámara ha SUBIDO y ha avanzado a lo largo de la raya: PICADO ALTO en el que la línea de postes se ve seguir hasta el horizonte entre las parcelas.",
    },
    ini: "las sementeras están quietas y las sombras de los postes son largas.",
    fin: "una racha de viento recorrió las sementeras en oleada de un lado al otro y las sombras de los postes se acortaron con la luz que subió.",
  }, "personas, tumbas, monumentos, estatuas, texto"),
  esc("b15b", [ref("campo_pelado"), ref("altiplano_noche")], {
    comun: "Luz que se va cerrando. EL MISMO campo pelado de la referencia vacío, con una sola línea de pisadas que cruza el cuadro y se interrumpe a la mitad, sin llegar al otro borde; nada la continúa. Objeto ancla: la línea que se corta.",
    camara: {
      a: "PLANO MACRO de la última pisada de la línea, con el polvo asentándose encima.",
      b: "la cámara ha RETROCEDIDO y ha subido hasta un PLANO GENERAL final del campo vacío, con la línea de pisadas cruzándolo y cortándose a la mitad.",
    },
    ini: "el polvo todavía se está asentando sobre las últimas huellas, que se leen hondas.",
    fin: "el viento borró las huellas del final de la línea, que ahora se deshace antes de donde se deshacía, y la luz bajó un punto.",
  }, "personas, cuerpos, armas, texto, simbolos, flechas dibujadas"),
]);
