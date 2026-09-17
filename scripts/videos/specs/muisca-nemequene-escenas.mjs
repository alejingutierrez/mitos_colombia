// Keyframes de escena de Nemequene — 15 bloques × 2 = 30 cuadros ≈ 150 s.
// Guion: docs/videos/muiscas/mvp-guiones/guion-nemequene-v2.json (N=15)
// Acta:  docs/videos/muiscas/actas/acta-nemequene.json           (29 nudos)
//
// DOCTRINA (de `muisca-bochica-escenas`): cada escena declara ESCALA + LUZ +
// OBJETO ANCLA + CAPA DE PRIMER PLANO, y ancla identidad con EL MISMO / LA
// MISMA ... de la referencia.
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · Nemequene NO es un tirano ni un sabio: escucha disputas cada mañana Y
//   amplió su autoridad con amenazas. El video no resuelve esa contradicción,
//   la sostiene: las dos mitades tienen el mismo peso de plano.
// · La batalla NO se pierde por traición ni por mala suerte. Es la distancia
//   entre la marca pequeña del mapa y las casas que tiene encima.
// · Su muerte NO es heroica: un dardo, la retirada, una autoridad entera
//   colgando de una respiración corta. NO hay última carga ni gesto épico.
// · Sus últimas palabras NO son legado de normas sino una pregunta sobre a
//   quién dañan. Pide consecuencia, no obediencia.
// · El duelo NO es unánime: legislador, estratega y ausencia, tres memorias al
//   mismo nivel. No jerarquizarlas — el bloque 14 las pone en un solo cuadro.
// · El cierre NO es derrota ante el zaque: el último territorio fue su límite.
//
// GUION DE LUZ: amanecer gris de audiencia → mañana plana de cercado →
// mediodía sin sombra → luz de mapa en el suelo → tarde de capitanes →
// contraluz de la respuesta → alba fría de altiplano → luz sucia de polvo →
// gris de polvareda → luz caída al suelo → penumbra de camilla → última luz →
// noche de duelo → tres luces distintas → amanecer sin él.

export const SPEC_NAME = "muisca-nemequene-escenas";
export const OUT_DIR = "muiscas/videos/nemequene/keyframes";

export const SHARED_AVOID =
  "texto, letras, logos, marcas de agua, marcos o bordes; CGI, render 3D o ilustracion digital pulida; miniatura tilt-shift; maqueta de plastilina, arcilla o resina; terreno o vegetacion modelados en 3D; desenfoque fotografico de poca profundidad de campo; cielo fotografico o en degradado liso; rasgos europeos en cualquier persona; sandalias, calzado, tunicas blancas largas o ropa que no sea la manta muisca de las referencias; coronas, tronos, cetros, templos europeos o cruces; piramides, penachos o iconografia mesoamericana; grecas, meandros o cenefas decorativas repetidas; armaduras, cascos, escudos metalicos, espadas o armas de metal; banderas, estandartes o insignias; joyeria inventada u oro en el cuerpo; sangre abundante, vísceras, heridas explicitas, cadaveres amontonados; desnudez o sexualizacion; niños; cambiar los rostros, mantas o materiales de los personajes de referencia; epica triunfal, poses heroicas, ultima carga o gesto glorioso";

export const PALETTE =
  "gris de amanecer de altiplano, pardo de tierra pisada, verde apagado de sabana, crema de algodon crudo, ocre de totuma y madera; el polvo como velo comun; sin saturacion ni neones";

const VESTUARIO =
  " Vestuario: manta de algodón crudo lisa anudada a un hombro y por encima de la rodilla como en las referencias, todos los pies descalzos, sin cenefas ni joyas.";

const B = "muiscas/biblia";
const kf = (id, refs, scene, avoid) => ({ id, kind: "keyframe", preset: "vertical", refs, scene, avoid });
const kfp = (id, refs, scene, avoid) => ({ id, kind: "keyframe", preset: "vertical", refs, scene: scene + VESTUARIO, avoid });

export const ITEMS = [
  // b1 — Antes de las noticias de guerra, escuchaba disputas.
  kfp("b1a", [`${B}/nemequene_zipa`, `${B}/cercado_bacata`],
    "PLANO MEDIO LARGO, luz gris de amanecer que entra baja por la puerta. EL MISMO Nemequene de la referencia sentado en una estera en EL MISMO cercado de la referencia, inclinado hacia adelante escuchando, las manos quietas sobre las rodillas. Delante de él, de espaldas y más bajos, dos hombres esperando turno. Capa de primer plano: las espaldas de los dos que esperan. Objeto ancla: las manos quietas del zipa.",
    "trono, corona, cetro, gente arrodillada, guardias con lanzas"),
  kfp("b1b", [`${B}/poste_lindero`, `${B}/manta_horqueta`],
    "PLANO DETALLE, luz gris pareja. Las dos pruebas de una disputa puestas sobre la tierra: UN MISMO poste de lindero de la referencia tumbado y con el hueco fresco al lado, de donde lo sacaron, y junto a él LA MISMA manta de la referencia doblada. Dos manos las señalan. Sin rostros. Capa de primer plano: el hueco en la tierra. Objeto ancla: el poste fuera de su sitio.",
    "rostros, violencia, armas, dramatismo"),

  // b2 — Hacía preguntas, oía testigos, dictaba respuesta.
  kfp("b2a", [`${B}/nemequene_zipa`, `${B}/funcionario_totuma`],
    "PLANO MEDIO, luz plana de mañana. EL MISMO Nemequene de la referencia de perfil hablando y, frente a él, EL MISMO funcionario de la referencia con LA MISMA totuma de la referencia en las manos, escuchando con la cabeza inclinada para retener lo dicho. Los dos a la misma altura de encuadre. Capa de primer plano: el borde de la totuma. Objeto ancla: la totuma entre los dos.",
    "escritura, papeles, tablillas, plumas de escribir, trono"),
  kfp("b2b", [`${B}/camino_carrera`, `${B}/familias_muiscas`],
    "GRAN PLANO GENERAL, luz abierta de media mañana. Un correo de LAS MISMAS familias de la referencia yendo solo por EL MISMO camino de la referencia, pequeño y ya lejos, con la sabana abriéndose a los dos lados; el camino cruza el cuadro entero. Lo que lleva es una decisión, y por eso va solo y rápido. Capa de primer plano: pasto de borde en sombra. Objeto ancla: la figura pequeña en el camino.",
    "caballos, carruajes, multitudes, banderas"),

  // b3 — Una norma solo es fuerte mientras la esperen. Amplió con amenazas.
  kfp("b3a", [`${B}/mercado_bacata`, `${B}/familias_muiscas`],
    "PLANO MEDIO, luz de mediodía sin sombras. En EL MISMO mercado de la referencia, dos comerciantes de LAS MISMAS familias de la referencia cerrando un trato con las manos: uno entrega una manta doblada, el otro panes de sal. Alrededor, otros siguen en lo suyo sin mirar. Nadie vigila y el trato se cumple igual. Capa de primer plano: un cesto en sombra. Objeto ancla: las manos cerrando el trato.",
    "guardias, soldados, vigilancia, miedo, violencia"),
  kfp("b3b", [`${B}/nemequene_zipa`, `${B}/gameza_cacique`],
    "PLANO MEDIO CORTO de dos, luz dura de mediodía. EL MISMO Nemequene de la referencia de pie muy cerca de UN MISMO cacique de la referencia, hablándole de lado casi al oído, sin tocarlo; el otro mira al frente, tenso, sin responder. La amenaza está en la distancia entre los cuerpos, no en un arma. Capa de primer plano: el hombro del cacique. Objeto ancla: el espacio corto entre las dos caras.",
    "armas, golpes, cuerdas, prisioneros, gritos, gestos violentos"),

  // b4 — En los mapas cada territorio es una marca. En el camino, casas.
  kf("b4a", [`${B}/lineas_tierra`, `${B}/baston_mando`],
    "PLANO CENITAL CERRADO, luz rasante de tarde que da relieve. EL MISMO trazado de líneas en la tierra de la referencia, dibujado a punta de palo sobre el suelo del cercado: marcas pequeñas, rayas y piedritas que representan territorios. LA MISMA punta del bastón de la referencia entrando en cuadro y señalando una marca del tamaño de una uña. Capa de primer plano: el canto del bastón. Objeto ancla: la marca señalada.",
    "mapas de papel, pergaminos, cartografia moderna, texto, rostros"),
  kfp("b4b", [`${B}/casa_barro_paja`, `${B}/familias_muiscas`],
    "PLANO GENERAL a la altura del camino, luz de tarde cálida. EL MISMO poblado de bohíos de la referencia visto desde el camino real: humos finos saliendo de los techos, gente de LAS MISMAS familias de la referencia en sus patios haciendo cosas comunes, una mujer tendiendo una manta. Es exactamente la marca del cuadro anterior, vista de cerca. Capa de primer plano: el borde del camino en sombra. Objeto ancla: el humo de un techo.",
    "ruinas, guerra, incendio, gente huyendo, soldados"),

  // b5 — Los capitanes celebraron. «Después de Hunsa nadie discutirá».
  kfp("b5a", [`${B}/nemequene_zipa`, `${B}/salon_jeques`],
    "PLANO MEDIO LARGO, luz baja de tarde por una abertura lateral. Cuatro capitanes de pie en EL MISMO salón de la referencia, animados, uno de ellos con el brazo extendido hacia adelante como quien ya ve el resultado; EL MISMO Nemequene de la referencia sentado a un lado, callado y en sombra parcial, sin acompañar el gesto. Capa de primer plano: un hombro de capitán en sombra. Objeto ancla: el brazo extendido del que habla.",
    "brindis con copas, armas en alto, gritos, mesas, sillas"),
  kfp("b5b", [`${B}/zaque_hunza`, `${B}/campo_pelado`],
    "PLANO GENERAL, luz fría de tarde. EL MISMO cercado del zaque de la referencia visto de lejos al otro lado del MISMO campo pelado de la referencia, entero y en pie, con sus humos y sus cercas. Todavía no ha pasado nada. La distancia entre el espectador y el cercado es el tema del plano. Capa de primer plano: la hierba seca del campo. Objeto ancla: el cercado intacto al fondo.",
    "batalla, ejercitos, humo de incendio, ruinas, banderas"),

  // b6 — «Siempre habrá alguien que las discuta». No fue sumisión.
  kf("b6a", [`${B}/lineas_tierra`],
    "PLANO CENITAL MUY CERRADO, luz lateral de tarde. LAS MISMAS líneas de la referencia en el suelo del cercado, ahora pisadas: una huella de pie descalzo ha borrado media raya y el polvo se corrió. La marca que ordenaba todo es tierra suelta. Capa de primer plano: el polvo removido. Objeto ancla: la raya rota por la huella.",
    "rostros, personas completas, texto, simbolos"),
  kfp("b6b", [`${B}/nemequene_zipa`, `${B}/cercado_bacata`],
    "PLANO MEDIO en contraluz, la luz de la tarde entrando por detrás. EL MISMO Nemequene de la referencia de pie mirando hacia abajo, al suelo donde están las líneas, con el rostro parcialmente en sombra y sin gesto legible de triunfo ni de duda. No mira a los capitanes. Capa de primer plano: el marco oscuro de la abertura. Objeto ancla: su mirada hacia el suelo.",
    "expresion heroica, puño cerrado, mandibula apretada teatral, aureola"),

  // b7 — Los dos ejércitos en el altiplano. Recorrió sus filas.
  kfp("b7a", [`${B}/campo_pelado`, `${B}/familias_muiscas`, `${B}/altiplano_noche`],
    "GRAN PLANO GENERAL, alba fría y azul de altiplano con niebla a ras de suelo. DOS masas oscuras de gente enfrentadas a lo ancho del MISMO campo pelado de la referencia, separadas por una franja vacía de tierra; ninguna carga todavía, las dos quietas. La niebla les corta los pies. Capa de primer plano: hierba escarchada en sombra. Objeto ancla: la franja vacía entre las dos masas.",
    "armaduras, cascos, banderas, caballos, formaciones romanas, epica"),
  kfp("b7b", [`${B}/nemequene_zipa`, `${B}/familias_muiscas`],
    "PLANO MEDIO LATERAL siguiendo su paso, luz de alba rasante. EL MISMO Nemequene de la referencia caminando delante de una fila de hombres jóvenes de LAS MISMAS familias de la referencia, que sostienen lanzas de madera en vertical; él los mira a la cara al pasar y ellos lo miran a él. Caras jóvenes, manos apretadas en las astas. Capa de primer plano: dos astas de lanza cruzando el cuadro. Objeto ancla: una mano joven cerrada sobre el asta.",
    "arengas, gritos, brazos en alto, armas de metal, epica triunfal"),

  // b8 — Allí podía ordenar una reparación. Pudo retirarse; no lo hizo.
  kfp("b8a", [`${B}/nemequene_zipa`, `${B}/campo_pelado`],
    "PRIMER PLANO MEDIO, luz de alba plana. EL MISMO Nemequene de la referencia de tres cuartos, quieto, mirando hacia el campo fuera de cuadro; la expresión es la de quien está calculando, no la de quien se envalentona. Fondo desenfocado por la niebla, sin nadie reconocible. Capa de primer plano: el borde de su manta. Objeto ancla: sus ojos calculando.",
    "lagrimas, miedo teatral, determinacion epica, musica visual, aureola"),
  kf("b8b", [`${B}/cercado_bacata`, `${B}/manta_horqueta`],
    "PLANO DETALLE, luz gris tenue, casi un recuerdo. LA MISMA estera vacía del cercado de la referencia donde cada mañana se sentaba a oír disputas, con LA MISMA manta de la referencia doblada a un lado y nadie alrededor. El plano cita el primer cuadro del video, ahora sin él. Capa de primer plano: el filo de la estera. Objeto ancla: el sitio vacío.",
    "personas, rostros, fantasmas, sobreimpresiones"),

  // b9 — Proyectiles que ocultaron la luz. Ningún plan conservó su forma.
  kf("b9a", [`${B}/campo_pelado`],
    "CONTRAPICADO al cielo, luz sucia tapada. El cielo del MISMO campo de la referencia cruzado por decenas de dardos y piedras de papel en vuelo, tan juntos que la luz de la mañana queda moteada y gris. NO se ve el suelo ni a nadie. Capa de primer plano: dos astas pasando muy cerca, desenfocadas por el movimiento. Objeto ancla: la nube de proyectiles.",
    "personas, sangre, impactos en cuerpos, explosiones, fuego"),
  kf("b9b", [`${B}/lineas_tierra`, `${B}/campo_pelado`],
    "PLANO CENITAL, luz de polvareda gris. El suelo del MISMO campo de la referencia lleno de pisadas cruzadas en todas direcciones, dardos clavados en la tierra y el polvo levantado, sin ninguna línea ni orden reconocible. Es el mapa del cuadro b4a después. Capa de primer plano: un dardo clavado. Objeto ancla: las pisadas sin dirección.",
    "cadaveres, sangre abundante, vísceras, rostros"),

  // b10 — Un dardo alcanzó a Nemequene. Unos siguieron, otros retrocedieron.
  kfp("b10a", [`${B}/nemequene_zipa`, `${B}/familias_muiscas`],
    "PLANO MEDIO BAJO, luz gris de polvo. EL MISMO Nemequene de la referencia siendo retirado del campo por dos de sus hombres, sostenido por los brazos y con la cabeza caída hacia adelante; no se ve la herida. Los que lo cargan van agachados. Capa de primer plano: polvo y piernas cruzando. Objeto ancla: la cabeza caída.",
    "sangre abundante, herida explicita, grito de dolor, pose de martir, camara lenta epica"),
  kfp("b10b", [`${B}/familias_muiscas`, `${B}/campo_pelado`],
    "PLANO GENERAL partido en dos, luz gris pareja. En la mitad izquierda del cuadro, hombres de LAS MISMAS familias de la referencia siguen avanzando hacia el fondo; en la mitad derecha, otros retroceden hacia el frente. Las dos direcciones a la vez, en el mismo plano, sin que ninguna se vea mejor que la otra. Capa de primer plano: el polvo entre los dos grupos. Objeto ancla: la línea invisible donde se cruzan.",
    "cobardia caricaturizada, heroismo, banderas, sangre"),

  // b11 — Pidió agua y llamó a sus sucesores.
  kfp("b11a", [`${B}/nemequene_zipa`, `${B}/vasija_gacha`],
    "PLANO DETALLE, penumbra de interior con una luz baja. Una mano sostiene LA MISMA vasija de la referencia con agua junto a los labios del MISMO Nemequene de la referencia, tendido; se le ve sólo la boca y la barbilla, el resto en sombra. El agua tiembla un poco en el borde. Capa de primer plano: la vasija. Objeto ancla: el agua temblando.",
    "rostro completo, agonia teatral, sangre, vendas ensangrentadas"),
  kfp("b11b", [`${B}/heredero_dorado`, `${B}/esposa_principal`, `${B}/nemequene_zipa`],
    "PLANO MEDIO, penumbra con una sola lámpara de sebo. EL MISMO heredero de la referencia y LA MISMA esposa principal de la referencia de pie junto al camastro donde yace EL MISMO Nemequene de la referencia, los dos inclinados hacia él, escuchando. La luz sólo alcanza las caras de ellos dos. Capa de primer plano: el borde del camastro en sombra. Objeto ancla: las dos caras iluminadas escuchando.",
    "llanto teatral, gritos, gente arrodillada, cruces, sacerdotes"),

  // b12 — «Tendrán que saber a quién dañan». (CITA)
  kfp("b12a", [`${B}/nemequene_zipa`],
    "PRIMER PLANO, última luz cálida y muy baja. EL MISMO Nemequene de la referencia de perfil sobre el camastro, con la boca a medio hablar y los ojos abiertos mirando a quien no está en cuadro. La imagen es de alguien preguntando, no de alguien dictando. Capa de primer plano: la sombra del borde del camastro. Objeto ancla: la boca a medio decir.",
    "gesto de mando, dedo levantado, ojos cerrados, aureola, lagrimas"),
  kfp("b12b", [`${B}/heredero_dorado`, `${B}/salon_jeques`],
    "PLANO MEDIO, luz de lámpara que deja el fondo oscuro. EL MISMO heredero de la referencia de pie y quieto, sin responder, con la mirada baja y las manos vacías a los lados; detrás, en sombra, los otros esperan que diga algo y no dice nada. Capa de primer plano: las manos vacías. Objeto ancla: la mirada baja.",
    "juramentos, manos alzadas, coronacion, ceremonias, objetos de poder entregados"),

  // b13 — Murió antes de volver. Objetos de su posición y recuerdos.
  kf("b13a", [`${B}/baston_mando`, `${B}/manta_vasijas`],
    "PLANO DETALLE cenital, luz nocturna de lámpara. LOS MISMOS objetos de posición de la referencia dispuestos en fila sobre una manta extendida: EL MISMO bastón de mando de la referencia, una vasija, una manta doblada. Puestos con cuidado y ya sin dueño. Capa de primer plano: el remate del bastón. Objeto ancla: el bastón acostado.",
    "personas, oro, coronas, armas, cruces, tumbas europeas"),
  kfp("b13b", [`${B}/familias_muiscas`, `${B}/altiplano_noche`],
    "PLANO GENERAL nocturno, luz de fogones bajos repartidos. Grupos separados de gente de LAS MISMAS familias de la referencia en la noche del MISMO altiplano de la referencia, cada grupo alrededor de su propio fuego pequeño y sin juntarse con los otros. El duelo está repartido y no es uno solo. Capa de primer plano: un fuego pequeño en sombra. Objeto ancla: los fuegos separados.",
    "cortejo unico, procesion, llanto colectivo, ceremonia unificada"),

  // b14 — Legislador, estratega, ausencia. Tres memorias al mismo nivel.
  kfp("b14a", [`${B}/familias_muiscas`, `${B}/cercado_bacata`],
    "PLANO GENERAL dividido en TRES franjas verticales iguales, cada una con su propia luz y a la misma distancia de cámara: a la izquierda, gris de amanecer, un hombre sentado oyendo una disputa; en el centro, luz de polvo, dos hombres mirando un campo vacío; a la derecha, luz de fogón, una mujer sola frente a una estera vacía. Ninguna franja es más grande ni está mejor iluminada. Capa de primer plano: los dos filos entre franjas. Objeto ancla: las tres escenas del mismo tamaño.",
    "una memoria dominante, jerarquia, retrato central, texto, simbolos"),
  kf("b14b", [`${B}/cercado_bacata`, `${B}/lineas_tierra`],
    "PLANO MEDIO, luz gris de amanecer igual a la del primer bloque. EL MISMO cercado de la referencia con la estera vacía y, en el suelo de al lado, LAS MISMAS líneas de la referencia a medio borrar; entra por la puerta la primera luz y no hay nadie para oír a nadie. Capa de primer plano: el umbral en sombra. Objeto ancla: la estera vacía con las líneas al lado.",
    "personas, fantasmas, sobreimpresiones, texto"),

  // b15 — Quién limita a quien puede castigar. Su propio límite.
  kf("b15a", [`${B}/sabana_linderos`, `${B}/poste_lindero`],
    "GRAN PLANO GENERAL, amanecer limpio sin él. LA MISMA sabana de linderos de la referencia con LA MISMA raya de postes de la referencia siguiendo hasta el horizonte, las parcelas sembradas y ordenadas. El territorio sigue exactamente igual y funciona. Sin personas. Capa de primer plano: un poste cortado por el borde. Objeto ancla: la raya que continúa.",
    "personas, tumbas, monumentos, estatuas, texto"),
  kf("b15b", [`${B}/campo_pelado`, `${B}/altiplano_noche`],
    "PLANO GENERAL final, luz que se va cerrando. EL MISMO campo pelado de la referencia vacío, con el polvo ya asentado, y una sola línea de pisadas que cruza el cuadro y se interrumpe a la mitad, sin llegar al otro borde. Nada la continúa. Capa de primer plano: la última pisada. Objeto ancla: la línea que se corta.",
    "personas, cuerpos, armas, texto, simbolos, flechas dibujadas"),
];
