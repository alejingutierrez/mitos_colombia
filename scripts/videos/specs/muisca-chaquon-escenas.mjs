// Keyframes de Chaquén — 9 bloques × 2 escenas × 2 imágenes = 36 cuadros.
// 18 clips de 5 s ≈ 90 s.
// Guion: guion-chaquon-v2.json (N=9) · Acta: acta-chaquon.json (17 nudos)
//
// DOCTRINA v4 (ver _muisca-comun.mjs): cada escena es un PAR A→B y el par es
// UN PLANO CON MOVIMIENTO: entre los dos cuadros la cámara se desplaza y la
// acción avanza un tramo largo. Se hereda el mundo, no el encuadre.
//
// DESLINDE DURO: Chaquén NO ES UN PERSONAJE. La fuente lo define por negación
// —no vivía en templo ni en cerro, era la línea misma— así que NINGUNA escena
// le da cuerpo. Lo que se ve son los postes, las piedras y la raya. Por eso NO
// se usa la ficha `chaquen_lindero`: esa figura con vara es de
// `el-castigo-de-chaquen`, que es otro mito.
//
// GUION DE LUZ: lluvia gris que escampa → tarde rasante → mediodía abierto →
// sol alto de carrera → luz detenida del límite → tarde dorada de entrega →
// atardecer de corro → noche de fogones → primera luz con niebla.

import { DIRECCION, AVOID_BASE, ref, esc, escp, armar } from "./_muisca-comun.mjs";

export const SPEC_NAME = "muisca-chaquon-escenas";
export const OUT_DIR = "muiscas/videos/chaquon/keyframes";
export { DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; cualquier figura, rostro, silueta o presencia que represente a Chaquen como ser o divinidad; rostros en la madera de los postes; luz sobrenatural sobre el lindero; altares, idolos o templos junto a la raya";
export const PALETTE =
  "verdes de sementera en franjas distintas, pardo mojado de tierra ablandada, gris mineral de piedra y poste, crema de algodon crudo, ocres de paja; rojo y blanco solo en las plumas; sin saturacion ni neones";

export const ITEMS = armar([
  // b1 — El año comenzaba en los linderos. Se levantaban postes.
  esc("b1a", [ref("sabana_linderos"), ref("poste_lindero")], {
    comun: "Luz gris de lluvia que acaba de escampar. LA MISMA sabana de la referencia con la tierra oscura de mojada y LA MISMA raya de postes de la referencia cruzando las parcelas en diagonal hasta el fondo. Sin personas. Objeto ancla: el primer poste de la raya.",
    camara: {
      a: "GRAN PLANO GENERAL en picado alto y lejano; la raya de postes se lee entera y pequeña, cruzando el valle; capa de primer plano: nada, el cuadro es todo paisaje.",
      b: "la cámara ha DESCENDIDO y se ha ADELANTADO hasta quedar casi a ras de tierra junto al primer poste: ahora es un PLANO MEDIO BAJO en contrapicado, el poste ocupa la mitad izquierda del cuadro y el resto de la raya se pierde chiquita hacia el fondo; capa de primer plano: un surco encharcado en sombra.",
    },
    ini: "el cielo está cargado y cerrado, los charcos quietos y mates, la niebla baja pegada a los surcos de todo el valle.",
    fin: "una banda de claridad ha abierto el cielo de lado a lado, la niebla se ha levantado del todo y los charcos devuelven ahora esa luz; el poste que tenemos delante gotea y las gotas caen al surco.",
  }, "personas, animales, arcoiris, sol visible"),
  escp("b1b", [ref("poste_lindero"), ref("piraca_labrador")], {
    comun: "Luz gris difusa de después del agua. DOS hombres como EL MISMO labrador de la referencia colocando UN MISMO poste de la referencia en la tierra ablandada; barro fresco salpicado en las pantorrillas. Objeto ancla: el poste que se está plantando.",
    camara: {
      a: "PLANO DETALLE a la altura del suelo: el pie del poste dentro del hoyo, las manos del que sostiene y la piedra de apisonar entrando en cuadro; no se ven las caras.",
      b: "la cámara ha RETROCEDIDO Y SUBIDO en un solo movimiento hasta un PLANO GENERAL a media altura: se ven los dos hombres enteros, el poste ya plantado y, detrás de ellos, otros tres postes de la misma raya alineándose hacia el fondo.",
    },
    ini: "el poste está todavía inclinado dentro del hoyo, sujeto por unas manos, y la piedra de apisonar viene bajando.",
    fin: "el poste ha quedado vertical y firme, la tierra apisonada alrededor de la base, y los dos hombres se han enderezado y ya caminan hacia el siguiente hueco con la piedra al hombro.",
  }, "herramientas metálicas, esfuerzo teatral, rostros de frente"),

  // b2 — La raya tenía dueño y no se veía.
  esc("b2a", [ref("poste_lindero"), ref("sabana_linderos")], {
    comun: "Luz rasante de última tarde con el sol muy bajo por detrás. LA MISMA raya de postes de la referencia sobre LOS MISMOS surcos de la referencia, cada poste tirando su sombra. Campo vacío, aire quieto: la ausencia de gente es deliberada. Objeto ancla: las sombras de los postes.",
    camara: {
      a: "PLANO GENERAL LARGO a la altura del surco, casi a ras de tierra, mirando a lo largo de la raya; capa de primer plano: un terrón grande desenfocado por la cercanía.",
      b: "la cámara se ha ELEVADO en vertical hasta un PICADO ALTO: ahora el campo se ve desde arriba como un plano de parcelas y las sombras se leen como rayas dibujadas sobre él.",
    },
    ini: "las sombras son cortas y el sol está todavía un palmo por encima del horizonte.",
    fin: "el sol se ha hundido hasta el filo y las sombras se han alargado hasta cruzar el campo entero de lado a lado, tocando la parcela vecina.",
  }, "personas, siluetas, sombras con forma humana, animales"),
  esc("b2b", [ref("poste_lindero"), ref("altiplano_noche")], {
    comun: "Luz de cielo lavado al anochecer. UN SOLO poste como EL MISMO de la referencia y, al fondo, la loma del MISMO altiplano de la referencia con un techo de paja. Objeto ancla: el poste.",
    camara: {
      a: "CONTRAPICADO MUY CERRADO pegado a la madera: el poste ocupa el eje del cuadro de abajo arriba y se le ve la veta y el canto astillado.",
      b: "la cámara se ha ALEJADO mucho y ha rodeado hasta un PLANO GENERAL LATERAL: el poste queda pequeño en el tercio derecho del cuadro y lo demás es cielo y la loma oscura del altiplano.",
    },
    ini: "el cielo detrás todavía tiene claridad de tarde y la madera se lee con su grano.",
    fin: "el cielo se ha apagado a azul de noche, el poste ha quedado en silueta negra y han salido las primeras estrellas de papel sobre la loma.",
  }, "personas, templos, altares, ídolos, rostros en la madera"),

  // b3 — Quien respetaba el límite sembraba en paz. Correr la tierra.
  escp("b3a", [ref("piraca_labrador"), ref("poste_lindero"), ref("sabana_cultivos")], {
    comun: "Luz abierta de mediodía sin sombras duras. EL MISMO labrador de la referencia sembrando en su surco de LOS MISMOS cultivos de la referencia a dos pasos de LA MISMA raya de postes; no la mira. Objeto ancla: la mano que deja la semilla.",
    camara: {
      a: "PLANO GENERAL MEDIO desde atrás: él pequeño y de espaldas, agachado en el surco, con la raya de postes entrando por la derecha del cuadro.",
      b: "la cámara ha AVANZADO y lo ha RODEADO hasta ponerse de tres cuartos y a su altura: ahora es un PLANO MEDIO, se le ve la mano y el perfil, y la raya de postes queda desenfocada al fondo.",
    },
    ini: "está agachado con la mano cerrada sobre las semillas, todavía sin abrirla sobre el surco.",
    fin: "ha soltado las semillas, las ha cubierto con el pie, se ha enderezado del todo y ya ha dado tres pasos surco adelante con la mano metida otra vez en la bolsa.",
  }, "primeros planos de rostro, dramatismo, herramientas metálicas"),
  escp("b3b", [ref("zaque_tunja"), ref("plaza_fiesta_noche")], {
    comun: "Luz clara de mediodía. EL MISMO cacique de la referencia en el borde de LA MISMA plaza de la referencia; a media distancia y más bajos que él, un semicírculo de hombres y mujeres. Nadie se arrodilla. Objeto ancla: el brazo del cacique.",
    camara: {
      a: "PLANO MEDIO LARGO frontal: el cacique de perfil a la izquierda y el semicírculo de espaldas al espectador ocupando el borde inferior.",
      b: "la cámara ha pasado POR ENCIMA del semicírculo hasta colocarse DETRÁS DEL HOMBRO del cacique, mirando adonde él mira: un PLANO GENERAL del campo abierto con la raya de postes al fondo y su brazo entrando por el borde del cuadro.",
    },
    ini: "él tiene el brazo a media altura, empezando a extenderlo, y las cabezas del semicírculo miran todavía hacia otro lado.",
    fin: "el brazo ha quedado extendido señalando el campo, y lo que se ve ahora es el campo entero al que señala, con la raya cruzándolo hasta el horizonte.",
  }, "tronos, coronas, gestos imperiales, multitudes arrodilladas"),

  // b4 — Salían con plumas. Cruzarla entera, sin romperse.
  escp("b4a", [ref("corredor_plumas"), ref("camino_carrera"), ref("poste_lindero")], {
    comun: "Luz alta y limpia de media mañana. LOS MISMOS corredores de la referencia por EL MISMO camino de la referencia junto a LA MISMA raya de postes, que cruza el campo sin interrumpirse hasta el horizonte. Las plumas cortas rojas y blancas son el único color vivo. Objeto ancla: el corredor que va primero.",
    camara: {
      a: "GRAN PLANO GENERAL en picado alto: el grupo pequeño y agrupado, el territorio entero alrededor y mucho camino por delante.",
      b: "la cámara ha BAJADO hasta el camino y se ha quedado a un lado, a la altura de la cadera: ahora es un PLANO MEDIO LATERAL y los corredores pasan grandes y en fila muy cerca del objetivo, cortados por el borde superior.",
    },
    ini: "el grupo va compacto y todavía lejos, cerca del borde inferior del cuadro.",
    fin: "el grupo se ha estirado en fila, ha recorrido un buen trecho y el primero pasa ya junto a la cámara, con el polvo levantado detrás y los demás escalonados al fondo.",
  }, "público animando, banderas, líneas de meta, números"),
  escp("b4b", [ref("corredor_plumas"), ref("sendero_territorio")], {
    comun: "Luz alta que atraviesa la corriente. Una quebrada de cantos rodados del tamaño de un puño que dan la escala. Objeto ancla: los pies del corredor en el agua.",
    camara: {
      a: "PLANO DETALLE a un palmo del suelo y a ras del agua: sólo los pies descalzos de UNO de LOS MISMOS corredores de la referencia, cortados a media pantorrilla por el borde superior; no se ve horizonte, ni montañas, ni cielo.",
      b: "la cámara ha SUBIDO con él y ha retrocedido hasta un PLANO ENTERO en contrapicado suave desde la otra orilla: se le ve de cuerpo entero ya sobre la ribera de cantos, con su manta puesta, y ahora sí entra el sendero y un trozo de cielo.",
    },
    ini: "un pie está suspendido justo encima del agua, a punto de entrar, y el otro apoyado en una piedra seca.",
    fin: "ha cruzado la quebrada entera y ya está en la otra orilla, con los dos pies en los cantos secos y la corriente quedando a su espalda.",
  }, "rostros grotescos, sangre, calzado, gigantes"),

  // b5 — Sin boca que lo dijera, se oía. (CITA)
  esc("b5a", [ref("poste_lindero"), ref("sabana_linderos")], {
    comun: "Luz detenida y plana de cielo cubierto, sin sombras. DOS de LOS MISMOS postes de la referencia y LA MISMA raya siguiendo al fondo; el centro del cuadro está deliberadamente vacío. Objeto ancla: el hueco entre los dos postes.",
    camara: {
      a: "PLANO MEDIO del límite, los dos postes en primer término uno a cada lado del eje y el fondo entre ellos.",
      b: "la cámara ha ATRAVESADO el hueco entre los dos postes y ha seguido avanzando a ras de tierra a lo largo de la raya: ahora los dos primeros postes han quedado atrás y fuera de cuadro, y lo que se ve es un TRAVELLING BAJO por la línea, con los postes siguientes viniendo hacia el objetivo.",
    },
    ini: "el aire está completamente quieto y las hierbas del lindero, inmóviles.",
    fin: "una racha ha recorrido la línea entera doblando todas las hierbas hacia el mismo lado, una detrás de otra; sigue sin haber nadie en el cuadro.",
  }, "personas, siluetas, rostros en la madera, formas humanas en las nubes"),
  esc("b5b", [ref("lineas_tierra")], {
    comun: "Luz vertical de mediodía. Una franja de tierra desnuda parte el terreno en dos mitades: a un lado surcos recién abiertos y oscuros, al otro mata ya crecida y clara. Objeto ancla: la línea misma.",
    camara: {
      a: "PLANO CENITAL MUY CERRADO: la franja recorre el cuadro de arriba abajo y se ven los terrones y las hojas jóvenes a lado y lado.",
      b: "la cámara ha SUBIDO en vertical muchísimo, hasta un CENITAL ALTO: la misma línea sigue partiendo el cuadro, pero ahora se ve el campo entero a los dos lados y la línea continúa más allá de los bordes.",
    },
    ini: "una nube tapa la mitad del cuadro y las dos labores se distinguen mal.",
    fin: "la nube ha pasado, la luz cae entera y desde lo alto se lee que la diferencia entre las dos mitades sigue igual de nítida a lo largo de todo el campo.",
  }, "personas, manos, texto, símbolos, flechas, postes"),

  // b6 — Entregaba mantas y repartía chicha. Flautas y fotutos.
  escp("b6a", [ref("zaque_tunja"), ref("corredor_plumas"), ref("manta_reparto")], {
    comun: "Luz dorada y baja de tarde. EL MISMO cacique de la referencia y UNO de LOS MISMOS corredores de la referencia, los dos de pie a la misma altura, con LA MISMA manta doblada de la referencia entre ellos. Objeto ancla: la manta.",
    camara: {
      a: "PLANO MEDIO frontal de los dos, el cacique a la izquierda y el corredor a la derecha, con la manta en el centro exacto del cuadro.",
      b: "la cámara ha RODEADO hasta quedar de perfil y muy cerca: un PLANO CORTO de las manos y los antebrazos, con las dos caras cortadas por el borde superior y el fondo dorado fuera de foco.",
    },
    ini: "el cacique sostiene la manta con las dos manos y el corredor está levantando las suyas para recibirla, sin tocarla aún.",
    fin: "la manta ha pasado entera a los brazos del corredor, que ya la sostiene contra el pecho, y las manos del cacique se retiran vacías fuera de cuadro.",
  }, "arrodillarse, besar manos, público aclamando"),
  escp("b6b", [ref("familias_muiscas"), ref("plaza_fiesta_noche")], {
    comun: "Luz naranja de fogón que llega desde abajo al anochecer. TRES músicos de LAS MISMAS familias de la referencia en LA MISMA plaza de la referencia: dos con flautas largas de caña y el tercero con un fotuto de caracol; detrás y en sombra, tambores de cuero y madera. Objeto ancla: el caracol del fotuto.",
    camara: {
      a: "PLANO MEDIO CORTO de los tres músicos, los instrumentos a media altura y el fogón fuera de cuadro por abajo.",
      b: "la cámara ha RETROCEDIDO y se ha ELEVADO hasta un PLANO GENERAL de la plaza entera: los tres músicos han quedado pequeños en el tercio inferior y alrededor se ve el fogón y la gente que se ha ido acercando.",
    },
    ini: "los tres tienen los instrumentos a media altura, todavía sin llevárselos a la boca, y el fogón está bajo.",
    fin: "los tres están soplando con los carrillos hinchados, el fogón ha crecido hasta iluminar la plaza y se ha formado gente alrededor de ellos.",
  }, "instrumentos europeos, guitarras, trompetas de metal, partituras"),

  // b7 — Corro con las vasijas en medio. La plumería junto al límite.
  escp("b7a", [ref("familias_muiscas"), ref("vasija_gacha"), ref("plaza_fiesta_noche")], {
    comun: "Luz cálida de atardecer con sombras largas. Un corro de hombres y mujeres de LAS MISMAS familias de la referencia alrededor de TRES de LAS MISMAS vasijas de barro de la referencia puestas juntas en el suelo. Objeto ancla: las tres vasijas.",
    camara: {
      a: "PICADO SUAVE desde media altura: el corro abierto por un lado llena el ancho del cuadro y las vasijas quedan en el centro del suelo.",
      b: "la cámara ha BAJADO hasta el suelo y se ha metido DENTRO del círculo, junto a las vasijas: un CONTRAPICADO desde el centro, con las vasijas enormes en primer término y las figuras del corro girando alrededor, cortadas por el borde superior.",
    },
    ini: "el corro está abierto por un lado y varias manos todavía no se han alcanzado.",
    fin: "el corro se ha cerrado del todo y gira, de modo que las figuras pasan barriendo el cuadro; las vasijas siguen quietas en el centro.",
  }, "danza frenética, saltos, máscaras, fuego en las manos"),
  escp("b7b", [ref("poste_lindero"), ref("corredor_plumas")], {
    comun: "Luz última de tarde, casi sin color. DOS personas como LOS MISMOS corredores de la referencia al pie de UN MISMO poste de la referencia. Nadie mira hacia arriba, nadie reza, nadie toca el poste. Objeto ancla: las diademas de plumas.",
    camara: {
      a: "PLANO MEDIO BAJO por detrás de ellos, agachados, con el poste entrando por el borde superior del cuadro.",
      b: "la cámara se ha ELEVADO y ha basculado a CONTRAPICADO: ahora el poste sube entero contra el cielo ocupando el cuadro y las dos figuras han quedado pequeñas y de espaldas en el borde inferior, alejándose.",
    },
    ini: "los dos sostienen todavía sus diademas de plumas cortas rojas y blancas en las manos, a media bajada.",
    fin: "las dos diademas han quedado en el suelo al pie del poste y ellos ya se han levantado y se van; la madera del poste sigue vacía y sin ninguna señal.",
  }, "figura divina, rostro en el poste, luz sobrenatural, humo ritual, manos alzadas"),

  // b8 — Se cerraba el pacto. Las danzas recorrían los términos.
  esc("b8a", [ref("poste_lindero"), ref("plaza_fiesta_noche")], {
    comun: "Noche de luna. UN MISMO poste de lindero de la referencia, LA MISMA raya perdiéndose al fondo y, allá lejos, LA MISMA plaza de la referencia. El orden a un lado y la fiesta al otro. Objeto ancla: el contraste entre el poste oscuro y la plaza encendida.",
    camara: {
      a: "PLANO GENERAL con fuerte profundidad: el poste MUY GRANDE en el tercio izquierdo del primer término y la plaza diminuta al fondo.",
      b: "la cámara ha hecho un TRAVELLING LATERAL largo hacia la derecha y hacia el fondo: el poste ha salido del cuadro y ahora la plaza está a media distancia, ocupando el centro, con la raya de postes entrando en diagonal por la izquierda.",
    },
    ini: "en la plaza del fondo sólo hay dos brasas bajas y la noche está casi cerrada.",
    fin: "los fogones de la plaza se han encendido del todo y tiñen de naranja todo el centro del cuadro, con las siluetas de la gente moviéndose delante de ellos.",
  }, "incendios, chispas grandes, multitud desbordada"),
  escp("b8b", [ref("familias_muiscas"), ref("poste_lindero"), ref("altiplano_noche")], {
    comun: "Luz azul de luna con reflejo naranja lejano. Una fila de danzantes de LAS MISMAS familias de la referencia junto a LA MISMA raya de postes de la referencia, siguiendo el mismo trazado que los corredores del día. EL MISMO cielo nocturno de la referencia arriba. Objeto ancla: la hilera que repite la línea.",
    camara: {
      a: "PLANO GENERAL nocturno y lejano, la fila entrando por el borde izquierdo, pequeña contra el altiplano.",
      b: "la cámara ha bajado y se ha acercado hasta el borde del camino: PLANO MEDIO a la altura de los hombros, con los danzantes pasando muy cerca de izquierda a derecha y un poste cortando el cuadro por la derecha.",
    },
    ini: "sólo se ven los primeros tres danzantes entrando en cuadro.",
    fin: "la fila entera está pasando junto al objetivo, escalonada, y por el fondo se ve que sigue recorriendo la raya hasta perderse.",
  }, "antorchas grandes, danza descontrolada, máscaras, fuego en las manos"),

  // b9 — Vasijas vacías, plumería dormida, la raya intacta.
  esc("b9a", [ref("vasija_gacha"), ref("manta_vasijas")], {
    comun: "Primera luz fría del amanecer. DOS de LAS MISMAS vasijas de barro de la referencia volcadas y vacías sobre LA MISMA manta de la referencia extendida en el suelo, con plumas cortas rojas y blancas caídas al lado. Nadie alrededor. Objeto ancla: la boca vacía de la vasija volcada.",
    camara: {
      a: "PLANO DETALLE cenital suave, muy cerca: la boca de la vasija y las plumas llenan el cuadro.",
      b: "la cámara se ha ALEJADO y ha basculado hasta un PLANO GENERAL de la plaza vacía a media altura: la manta con las vasijas ha quedado pequeña en el tercio inferior y alrededor se ven los fogones apagados y el suelo pisado.",
    },
    ini: "la luz es todavía azulada y las gotas de rocío están sin brillo sobre las plumas.",
    fin: "la primera luz cálida ha entrado de lado y ha encendido la plaza entera, con las sombras largas de las vasijas y de los fogones apagados cruzando el suelo.",
  }, "personas, manos, restos de comida, suciedad excesiva"),
  esc("b9b", [ref("sabana_linderos"), ref("poste_lindero")], {
    comun: "Primera luz con niebla baja. LA MISMA sabana de la referencia y LA MISMA raya completa de postes y piedras atravesando la sementera, intacta. Ni una figura, ni una huella, ni un rastro de la fiesta. Objeto ancla: la raya entera.",
    camara: {
      a: "PLANO MEDIO BAJO pegado al último poste de la raya, con la niebla tapando todo lo que hay detrás de él.",
      b: "la cámara ha RETROCEDIDO Y SUBIDO hasta EL MISMO GRAN PLANO GENERAL EN PICADO con que abre el video (escena b1a): el valle entero desde arriba y la raya cruzándolo en diagonal hasta el fondo. El video cierra donde empezó.",
    },
    ini: "la niebla es espesa y sólo se ve el poste más cercano.",
    fin: "la niebla se ha deshecho y la raya de postes se ve entera hasta el fondo desde lo alto, exactamente como en el primer cuadro del video; el campo sigue sin nadie.",
  }, "personas, huellas humanas, basura, plumas, vasijas, fogones"),
]);
