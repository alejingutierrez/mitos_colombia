// Keyframes de escena de Chaquén — 9 bloques × 2 = 18 cuadros = 18 clips de 5 s ≈ 90 s.
// Guion: docs/videos/muiscas/mvp-guiones/guion-chaquon-v2.json  (N=9)
// Acta:  docs/videos/muiscas/actas/acta-chaquon.json            (17 nudos)
//
// DOCTRINA (la misma de `muisca-bochica-escenas`, que es la que dio el video
// aprobado): cada escena declara ESCALA + LUZ + OBJETO ANCLA + CAPA DE PRIMER
// PLANO, y ancla identidad con EL MISMO / LA MISMA ... de la referencia. La
// versión anterior de este spec no declaraba ninguna de las cuatro cosas y
// salieron dieciocho postales correctas y ajenas: el usuario las rechazó.
//
// GUION DE LUZ: lluvia gris que escampa → tarde rasante → mediodía abierto →
// sol alto de carrera → luz detenida del límite → tarde dorada de entrega →
// atardecer de corro → noche de fogones → primera luz con niebla.
//
// DESLINDE DURO: Chaquén NO ES UN PERSONAJE. La fuente lo define por negación
// —no vivía en templo ni en cerro, era la línea misma— así que NINGUNA escena
// le da cuerpo. Lo que se ve son los postes, las piedras y la raya. Por eso NO
// se usa la ficha `chaquen_lindero`: esa figura con vara es de
// `el-castigo-de-chaquen`, que es otro mito.
//
// CANDADO DE MATERIAL: la primera vuelta (36 cuadros) se fue a miniatura
// tilt-shift y terreno 3D. El papel se nombra ahora DENTRO de cada escena,
// como en bochica, y no como coletilla al final.
//
// CANDADO DE VESTUARIO: en la segunda vuelta el avoid no bastó. Prohibir
// «sandalias» y «túnicas largas» en negativo dejó pasar sandalias de correas y
// togas con greca dorada: los modelos obedecen mucho mejor una instrucción
// afirmativa. Toda escena con personas pasa por kfp().

export const SPEC_NAME = "muisca-chaquon-escenas";
export const OUT_DIR = "muiscas/videos/chaquon/keyframes";

export const SHARED_AVOID =
  "texto, letras, logos, marcas de agua, marcos o bordes; CGI, render 3D o ilustracion digital pulida; miniatura tilt-shift; maqueta de plastilina, arcilla, resina o ceramica; terreno o vegetacion modelados en 3D; musgo o cesped realista; desenfoque fotografico de poca profundidad de campo; cielo fotografico o en degradado liso; cabezas modeladas y redondeadas con piel lisa; rasgos europeos en cualquier persona; sandalias, calzado, tunicas blancas largas o ropa que no sea la manta muisca de las referencias; coronas, tronos o templos europeos; piramides, penachos o iconografia mesoamericana; grecas, meandros, cenefas de llave griega, bordes decorativos repetidos en la ropa o en la piedra; escalinatas y plataformas de piedra labrada; simbolos espirituales inventados; joyeria inventada u oro en el cuerpo; desnudez, sexualizacion o dramatismo excesivo; cambiar los rostros, mantas o materiales de los personajes de referencia; gigantes, figuras colosales o cualquier cuerpo humano fuera de escala respecto del paisaje; cualquier figura, rostro, silueta o presencia que represente a Chaquen como ser o divinidad";

export const PALETTE =
  "verdes de sementera en franjas distintas, pardo mojado de tierra ablandada, gris mineral de piedra y poste, crema de algodon crudo, ocres de paja; rojo y blanco solo en las plumas; sin saturacion ni neones";

const VESTUARIO =
  " Vestuario: manta de algodón crudo lisa anudada a un hombro y por encima de la rodilla como en las referencias, todos los pies descalzos, sin cenefas ni joyas.";

const B = "muiscas/biblia";
const kf = (id, refs, scene, avoid) => ({ id, kind: "keyframe", preset: "vertical", refs, scene, avoid });
// Variante para escenas con figuras humanas: añade el candado de vestuario.
const kfp = (id, refs, scene, avoid) => ({ id, kind: "keyframe", preset: "vertical", refs, scene: scene + VESTUARIO, avoid });

export const ITEMS = [
  // b1 — El año comenzaba en los linderos. Se levantaban postes.
  kf("b1a", [`${B}/sabana_linderos`, `${B}/poste_lindero`],
    "GRAN PLANO GENERAL, luz gris de lluvia que acaba de escampar. LA MISMA sabana de la referencia con la tierra oscura de mojada, y LA MISMA raya de postes de la referencia cruzando las parcelas en diagonal hasta perderse al fondo. Charcos de papel brillante entre los surcos. Sin personas. Capa de primer plano: un surco encharcado en sombra. Objeto ancla: el primer poste, grande a la izquierda.",
    "personas, animales, arcoiris, nubes fotográficas, sol"),
  kfp("b1b", [`${B}/poste_lindero`, `${B}/piraca_labrador`],
    "PLANO MEDIO bajo, luz gris difusa de después del agua. DOS hombres como EL MISMO labrador de la referencia clavan UN MISMO poste de la referencia en la tierra ablandada: el de la izquierda lo sostiene vertical con las dos manos, el de la derecha, en cuclillas, apisona la base con una piedra de río. Barro fresco salpicado en las pantorrillas. Capa de primer plano: la tierra removida en sombra. Objeto ancla: la piedra de apisonar.",
    "herramientas metálicas, esfuerzo teatral, rostros de frente"),

  // b2 — La raya tenía dueño y no se veía.
  kf("b2a", [`${B}/poste_lindero`, `${B}/sabana_linderos`],
    "PLANO GENERAL LARGO a la altura del surco, luz rasante de última tarde. LA MISMA raya de postes de la referencia con el sol bajo por detrás, de modo que cada poste tira una sombra larguísima y paralela sobre LOS MISMOS surcos de la referencia. El campo entero vacío, el aire quieto. La ausencia de gente es deliberada. Capa de primer plano: dos sombras cruzando el cuadro. Objeto ancla: la sombra más larga.",
    "personas, siluetas, sombras con forma humana, animales"),
  kf("b2b", [`${B}/poste_lindero`, `${B}/altiplano_noche`],
    "CONTRAPICADO CERRADO, luz de cielo lavado al anochecer. UN SOLO poste como EL MISMO de la referencia recortado contra el cielo de papel, ocupando el eje del cuadro de abajo arriba; muy al fondo y diminutos, la loma del MISMO altiplano de la referencia y un techo de paja. El poste es lo único nítido y lo único grande. Capa de primer plano: el canto astillado de la madera. Objeto ancla: el remate superior del poste.",
    "personas, templos de piedra, altares, ídolos, ofrendas, rostros en la madera"),

  // b3 — Quien respetaba el límite sembraba en paz. Se ordenaba correr la tierra.
  kfp("b3a", [`${B}/piraca_labrador`, `${B}/poste_lindero`, `${B}/sabana_cultivos`],
    "PLANO GENERAL MEDIO, luz abierta de mediodía sin sombras duras. EL MISMO labrador de la referencia, pequeño y DE ESPALDAS, agachado sembrando en su surco de LOS MISMOS cultivos de la referencia, a dos pasos de LA MISMA raya de postes; no la mira, trabaja tranquilo. Capa de primer plano: hojas de maíz jóvenes en sombra. Objeto ancla: la mano dejando la semilla.",
    "primeros planos de rostro, dramatismo, herramientas metálicas"),
  kfp("b3b", [`${B}/zaque_tunja`, `${B}/plaza_fiesta_noche`],
    "PLANO MEDIO LARGO, luz clara de mediodía. EL MISMO cacique de la referencia de pie en el borde de LA MISMA plaza de la referencia, de perfil, el brazo extendido señalando el campo abierto; a media distancia y más bajos que él, un semicírculo de hombres y mujeres escuchando de espaldas al espectador. Nadie se arrodilla, nadie aclama. Capa de primer plano: hombros y cabezas del semicírculo en sombra. Objeto ancla: la mano extendida del cacique.",
    "tronos, coronas, gestos imperiales, multitudes arrodilladas, escalinatas"),

  // b4 — Salían con plumas. Conocerla con el cuerpo y cruzarla entera.
  kfp("b4a", [`${B}/corredor_plumas`, `${B}/camino_carrera`, `${B}/poste_lindero`],
    "GRAN PLANO GENERAL del territorio, luz alta y limpia de media mañana. LOS MISMOS corredores de la referencia, pequeños y escalonados en fila, avanzando por EL MISMO camino de la referencia junto a LA MISMA raya de postes, que cruza el campo entero sin interrumpirse hasta el horizonte. Las plumas rojas y blancas son el único color vivo del cuadro. Capa de primer plano: pasto alto en sombra. Objeto ancla: las plumas del primer corredor.",
    "público animando, banderas, líneas de meta, números, esfuerzo teatral"),
  kfp("b4b", [`${B}/corredor_plumas`, `${B}/sendero_territorio`],
    "PLANO DETALLE a ras del agua, cámara a un palmo del suelo, luz alta que atraviesa la corriente. Los pies descalzos de UNO de LOS MISMOS corredores de la referencia, de tamaño normal y cortados a media pantorrilla por el borde superior, pisando el agua somera de una quebrada de cantos rodados del tamaño de un puño, que dan la escala. El encuadre se cierra sobre el agua y las piedras: NO se ve horizonte, ni montañas, ni cielo, ni la otra orilla. Capa de primer plano: un canto rodado grande. Objeto ancla: el pie que rompe el agua.",
    "rostros, cuerpos completos, sangre, calzado, gigantes, pies colosales, montañas, cielo, horizonte, vista de paisaje"),

  // b5 — Sin boca que lo dijera, se oía. (CITA)
  kf("b5a", [`${B}/poste_lindero`, `${B}/sabana_linderos`],
    "PLANO MEDIO del límite, luz detenida y plana de cielo cubierto, sin sombras. DOS de LOS MISMOS postes de la referencia en primer término, uno a cada lado del eje, y LA MISMA raya siguiendo al fondo entre LOS MISMOS surcos; entre los dos postes, el centro del cuadro está deliberadamente vacío. El encuadre está construido para que la falta de presencia se note. Capa de primer plano: el pie de piedra de un poste. Objeto ancla: el hueco entre los dos postes.",
    "personas, siluetas, rostros en la madera, formas humanas en las nubes, animales"),
  kf("b5b", [`${B}/lineas_tierra`],
    "PLANO CENITAL CERRADO, luz vertical de mediodía. LA MISMA franja de tierra desnuda de la referencia partiendo el terreno en dos mitades y recorriendo el cuadro de arriba abajo; a la izquierda, surcos recién abiertos y oscuros; a la derecha, mata ya crecida y clara. Las dos labores son visiblemente distintas a lado y lado de la misma línea. Capa de primer plano: el canto de la franja. Objeto ancla: la línea misma.",
    "personas, manos, texto, símbolos, flechas, postes"),

  // b6 — Entregaba mantas y repartía chicha. Flautas y fotutos.
  kfp("b6a", [`${B}/zaque_tunja`, `${B}/corredor_plumas`, `${B}/manta_reparto`],
    "PLANO MEDIO frontal, luz dorada y baja de tarde. EL MISMO cacique de la referencia, a la izquierda, entrega con las dos manos LA MISMA manta doblada de la referencia a UNO de LOS MISMOS corredores de la referencia, a la derecha, que la recibe también con las dos manos; los dos de pie a la misma altura, mirándose. La manta ocupa el centro exacto del cuadro. Capa de primer plano: el borde de la manta en sombra. Objeto ancla: las cuatro manos sobre la manta.",
    "arrodillarse, besar manos, público aclamando, oro, grecas"),
  kfp("b6b", [`${B}/familias_muiscas`, `${B}/plaza_fiesta_noche`],
    "PLANO MEDIO, luz naranja de fogón que llega desde abajo al anochecer. TRES músicos de LAS MISMAS familias de la referencia en LA MISMA plaza de la referencia: dos soplan flautas largas de caña, el tercero un fotuto de caracol que sostiene con las dos manos; detrás y en sombra, tambores de cuero y madera. Mejillas y manos iluminadas por el fuego. Capa de primer plano: el hombro de un tambor en sombra. Objeto ancla: el caracol del fotuto.",
    "instrumentos europeos, guitarras, trompetas de metal, partituras, sandalias"),

  // b7 — Corro con las vasijas en medio. La plumería junto al límite.
  kfp("b7a", [`${B}/familias_muiscas`, `${B}/vasija_gacha`, `${B}/plaza_fiesta_noche`],
    "PICADO SUAVE desde media altura, luz cálida de atardecer con sombras largas. Un corro cerrado de hombres y mujeres de LAS MISMAS familias de la referencia, tomados de las manos, girando alrededor de TRES de LAS MISMAS vasijas de barro de la referencia puestas juntas en el centro del suelo. El corro llena el ancho del cuadro; las vasijas son el centro geométrico. Capa de primer plano: dos brazos enlazados cruzando el borde inferior. Objeto ancla: las tres vasijas.",
    "danza frenética, saltos, máscaras, fuego en las manos, rostros de frente"),
  kfp("b7b", [`${B}/poste_lindero`, `${B}/corredor_plumas`],
    "PLANO MEDIO BAJO, luz última de tarde, casi sin color. DOS personas como LOS MISMOS corredores de la referencia, DE ESPALDAS y agachadas al pie de UN MISMO poste de la referencia, dejando en el suelo sus diademas de plumas rojas y blancas. Nadie mira hacia arriba, nadie reza, nadie toca el poste; la madera queda vacía y sin señal. Capa de primer plano: las plumas ya en el suelo. Objeto ancla: la diadema que aún está en la mano.",
    "figura divina, rostro en el poste, luz sobrenatural, humo ritual, gestos de adoración, manos alzadas"),

  // b8 — Se cerraba el pacto. Las danzas recorrían los términos.
  kf("b8a", [`${B}/poste_lindero`, `${B}/plaza_fiesta_noche`],
    "PLANO GENERAL con fuerte profundidad, noche de luna con fogones al fondo. En primer término y MUY GRANDE, UN MISMO poste de lindero de la referencia ocupando el tercio izquierdo, con LA MISMA raya perdiéndose hacia el fondo; allá lejos y pequeña, LA MISMA plaza de la referencia encendida de fogones naranjas. El orden delante y grande, la fiesta detrás y chica. Sin personas legibles. Capa de primer plano: el canto del poste. Objeto ancla: el contraste entre el poste oscuro y los fogones.",
    "incendios, chispas grandes, multitud desbordada, personas en primer término"),
  kfp("b8b", [`${B}/familias_muiscas`, `${B}/poste_lindero`, `${B}/altiplano_noche`],
    "PLANO GENERAL nocturno, luz azul de luna con reflejo naranja lejano. Una fila de danzantes de LAS MISMAS familias de la referencia avanzando en hilera junto a LA MISMA raya de postes de la referencia, siguiendo exactamente el mismo trazado que los corredores del día. EL MISMO cielo nocturno de la referencia arriba, de papel perforado de estrellas. Capa de primer plano: un poste cortado por el borde derecho. Objeto ancla: la hilera que repite la línea.",
    "antorchas grandes, danza descontrolada, máscaras, fuego en las manos"),

  // b9 — Vasijas vacías, plumería dormida, la raya intacta.
  kf("b9a", [`${B}/vasija_gacha`, `${B}/manta_vasijas`],
    "PLANO DETALLE cenital suave, primera luz fría del amanecer. DOS de LAS MISMAS vasijas de barro de la referencia volcadas y vacías sobre LA MISMA manta de la referencia extendida en el suelo, con plumas rojas y blancas caídas al lado y gotas de rocío encima. Todo quieto, nadie alrededor. Capa de primer plano: el fleco de la manta en sombra. Objeto ancla: la boca vacía de la vasija volcada.",
    "personas, manos, restos de comida, suciedad excesiva, insectos"),
  kf("b9b", [`${B}/sabana_linderos`, `${B}/poste_lindero`],
    "GRAN PLANO GENERAL, MISMO encuadre y MISMA distancia que el primer cuadro del video, primera luz con niebla baja. LA MISMA sabana de la referencia y LA MISMA raya completa de postes y piedras atravesando la sementera, intacta, con la niebla de papel corriendo entre los surcos a media altura. Ni una figura, ni una huella, ni un rastro de la fiesta. Capa de primer plano: el mismo surco del primer cuadro, ahora seco. Objeto ancla: la raya entera.",
    "personas, huellas humanas, basura, plumas, vasijas, fogones, cualquier rastro de celebración"),
];
