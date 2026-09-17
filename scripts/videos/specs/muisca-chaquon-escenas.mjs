// Keyframes de escena de Chaquén — 9 bloques × 2 = 18 cuadros = 18 clips de 5 s ≈ 90 s.
// Guion: docs/videos/muiscas/mvp-guiones/guion-chaquon-v2.json  (N=9)
// Acta:  docs/videos/muiscas/actas/acta-chaquon.json            (17 nudos)
//
// DESLINDE DURO: Chaquén NO ES UN PERSONAJE. La fuente lo define por negación
// —no vivía en templo ni en cerro, era la línea misma— así que NINGUNA escena
// le da cuerpo. Lo que se ve son los postes, las piedras y la raya. Por eso NO
// se usa la ficha `chaquen_lindero`: esa figura con vara es de
// `el-castigo-de-chaquen`, que es otro mito.
//
// CANDADO DE MATERIAL: la primera vuelta (36 cuadros, 2026-09-17) se fue a
// miniatura tilt-shift y terreno 3D en los planos abiertos y de mucha gente
// —b12b perdió del todo la referencia y sacó túnicas blancas y sandalias—.
// Cada escena termina ahora con MATERIAL, y el avoid nombra esos fallos.

export const SPEC_NAME = "muisca-chaquon-escenas";
export const OUT_DIR = "muiscas/videos/chaquon/keyframes";

const MATERIAL =
  " MATERIAL: todo el cuadro está hecho de papel artesanal recortado, plegado y encolado en capas, fotografiado de frente con luz pareja; se ven el canto del papel, la fibra y el pliegue en cada pieza, incluidos cielo, montañas, tierra y vegetación.";

export const SHARED_AVOID =
  "texto, letras, logos, marcas de agua, marcos o bordes; CGI, render 3D o ilustracion digital pulida; miniatura tilt-shift; maqueta de plastilina, arcilla, resina o ceramica; terreno o vegetacion modelados en 3D; musgo o cesped realista; desenfoque fotografico de poca profundidad de campo; cielo fotografico o en degradado liso; cabezas modeladas y redondeadas con piel lisa; sandalias, calzado, tunicas blancas largas o ropa que no sea la manta muisca de las referencias; coronas, tronos o templos europeos; piramides, penachos o iconografia mesoamericana; simbolos espirituales inventados; joyeria inventada u oro en el cuerpo; desnudez, sexualizacion o dramatismo excesivo; cambiar los rostros, mantas o materiales de los personajes de referencia; cualquier figura, rostro, silueta o presencia que represente a Chaquen como ser o divinidad";

export const PALETTE =
  "verdes de sementera en franjas distintas, pardo mojado de tierra ablandada, gris mineral de piedra y poste, crema de algodon crudo, ocres de paja; rojo y blanco solo en las plumas; sin saturacion ni neones";

const B = "muiscas/biblia";
const kf = (id, refs, scene, avoid) => ({ id, kind: "keyframe", preset: "vertical", refs, scene: scene + MATERIAL, avoid });

export const ITEMS = [
  // b1 — El año comenzaba en los linderos. Se levantaban postes.
  kf("b1a", [`${B}/sabana_linderos`, `${B}/poste_lindero`],
    "La sabana de la referencia después de la lluvia, con la raya de postes cruzando las parcelas hasta el fondo. Sin personas.",
    "personas, animales, arcoiris, nubes fotográficas"),
  kf("b1b", [`${B}/poste_lindero`, `${B}/piraca_labrador`],
    "Dos hombres muiscas como el de la referencia clavan un poste igual al de la referencia en la tierra ablandada: uno lo sostiene, el otro apisona la base con una piedra.",
    "herramientas metálicas, esfuerzo teatral"),

  // b2 — La raya tenía dueño y no se veía.
  kf("b2a", [`${B}/poste_lindero`, `${B}/sabana_linderos`],
    "La raya de postes al atardecer con la luz rasante alargando cada sombra sobre los surcos. Campo vacío, aire quieto. La ausencia de gente es deliberada.",
    "personas, siluetas, sombras con forma humana, animales"),
  kf("b2b", [`${B}/poste_lindero`, `${B}/altiplano_noche`],
    "Contrapicado de un solo poste recortado contra el cielo; muy al fondo y pequeños, la loma de un cerro y un techo de paja. El poste es lo único nítido.",
    "personas, templos de piedra, altares, ídolos, ofrendas"),

  // b3 — Quien respetaba el límite sembraba en paz. Se ordenaba correr la tierra.
  kf("b3a", [`${B}/piraca_labrador`, `${B}/poste_lindero`, `${B}/sabana_cultivos`],
    "El labrador de la referencia, pequeño y de espaldas, sembrando tranquilo en su surco a dos pasos de la raya de postes, sin mirarla.",
    "primeros planos de rostro, dramatismo, herramientas metálicas"),
  kf("b3b", [`${B}/zaque_tunja`, `${B}/plaza_fiesta_noche`],
    "El cacique de la referencia, de pie en el borde de la plaza de la referencia, con el brazo extendido hacia el campo dando la orden; gente escuchando en semicírculo a media distancia.",
    "tronos, coronas, gestos imperiales, multitudes arrodilladas"),

  // b4 — Salían con plumas. Conocerla con el cuerpo y cruzarla entera.
  kf("b4a", [`${B}/corredor_plumas`, `${B}/camino_carrera`, `${B}/poste_lindero`],
    "Vista muy abierta del territorio: los corredores de la referencia, pequeños y escalonados, avanzando junto a la raya de postes, que cruza el campo entero sin interrumpirse hasta el horizonte.",
    "público animando, banderas, líneas de meta, números"),
  kf("b4b", [`${B}/corredor_plumas`, `${B}/sendero_territorio`],
    "Plano detalle a ras de suelo: dos pies descalzos de papel, como los del corredor de la referencia, entrando en el agua somera de una quebrada de piedras redondas.",
    "rostros, cuerpos completos, sangre, calzado"),

  // b5 — Sin boca que lo dijera, se oía. (CITA)
  kf("b5a", [`${B}/poste_lindero`, `${B}/sabana_linderos`],
    "El límite absolutamente solo: dos postes en primer término y la raya siguiendo al fondo, sin una figura. El encuadre está construido para que la falta de presencia se note.",
    "personas, siluetas, rostros en la madera, formas humanas en las nubes, animales"),
  kf("b5b", [`${B}/lineas_tierra`],
    "Plano cenital cerrado sobre la franja de tierra desnuda que parte el terreno en dos mitades, cada una con su labor distinta; la línea recorre el cuadro de arriba abajo.",
    "personas, manos, texto, símbolos, flechas"),

  // b6 — Entregaba mantas y repartía chicha. Flautas y fotutos.
  kf("b6a", [`${B}/zaque_tunja`, `${B}/corredor_plumas`, `${B}/manta_reparto`],
    "El cacique de la referencia entrega con las dos manos una manta doblada como la de la referencia a uno de los corredores de la referencia, que la recibe también con las dos manos, ambos a la misma altura.",
    "arrodillarse, besar manos, público aclamando"),
  kf("b6b", [`${B}/familias_muiscas`, `${B}/plaza_fiesta_noche`],
    "Músicos muiscas como los de la referencia: dos soplan flautas largas de caña y un tercero un fotuto de caracol; al fondo, tambores de cuero y madera.",
    "instrumentos europeos, guitarras, trompetas de metal, partituras"),

  // b7 — Corro con las vasijas en medio. La plumería junto al límite.
  kf("b7a", [`${B}/familias_muiscas`, `${B}/vasija_gacha`, `${B}/plaza_fiesta_noche`],
    "Corro de hombres y mujeres de papel como los de la referencia, tomados de las manos alrededor de tres vasijas de barro como la de la referencia puestas en el centro, vistos en picado suave.",
    "danza frenética, saltos, máscaras, fuego en las manos"),
  kf("b7b", [`${B}/poste_lindero`, `${B}/corredor_plumas`],
    "Dos personas de papel como la de la referencia, de espaldas y agachadas, depositando en el suelo al pie de un poste sus diademas con plumas y unos adornos. Nadie mira hacia arriba, nadie reza; el poste queda vacío.",
    "figura divina, rostro en el poste, luz sobrenatural, humo ritual, gestos de adoración"),

  // b8 — Se cerraba el pacto. Las danzas recorrían los términos.
  kf("b8a", [`${B}/poste_lindero`, `${B}/plaza_fiesta_noche`],
    "En primer término, grande, un poste de lindero y la raya perdiéndose; al fondo y pequeña, la plaza de la referencia ya encendida de fogones. El orden delante, la fiesta detrás.",
    "incendios, chispas grandes, multitud desbordada"),
  kf("b8b", [`${B}/familias_muiscas`, `${B}/poste_lindero`, `${B}/altiplano_noche`],
    "De noche, una fila de danzantes de papel como los de la referencia avanzando en hilera junto a la raya de postes, siguiendo el mismo trazado de los corredores. Cielo de papel perforado.",
    "antorchas grandes, danza descontrolada, máscaras"),

  // b9 — Vasijas vacías, plumería dormida, la raya intacta.
  kf("b9a", [`${B}/vasija_gacha`, `${B}/manta_vasijas`],
    "Plano detalle del amanecer: dos vasijas de barro como la de la referencia volcadas y vacías sobre la manta de la referencia, con plumas rojas y blancas caídas al lado, mojadas de rocío.",
    "personas, restos de comida, suciedad excesiva"),
  kf("b9b", [`${B}/sabana_linderos`, `${B}/poste_lindero`],
    "Cierre sin nadie: la raya completa de postes y piedras atravesando la sementera en la primera luz, igual que en el primer cuadro, intacta, con niebla baja entre los surcos.",
    "personas, huellas humanas, basura, plumas, vasijas, cualquier rastro de celebración"),
];
