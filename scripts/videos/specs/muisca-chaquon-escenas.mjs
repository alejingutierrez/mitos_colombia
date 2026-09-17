// Keyframes de Chaquén — 9 bloques × 2 escenas × 2 imágenes = 36 cuadros.
// 18 clips de 5 s ≈ 90 s.
// Guion: guion-chaquon-v2.json (N=9) · Acta: acta-chaquon.json (17 nudos)
//
// DOCTRINA v3 (ver _muisca-comun.mjs): cada escena es un PAR A→B. El fotograma
// final se genera sobre el inicial y fija el estado al que el modelo de video
// tiene que llegar, en vez de confiarlo al texto del prompt de movimiento.
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

import { DIRECCION, AVOID_BASE, PALETTE_BASE, ref, esc, escp, armar } from "./_muisca-comun.mjs";

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
    comun: "GRAN PLANO GENERAL, luz gris de lluvia que acaba de escampar. LA MISMA sabana de la referencia con la tierra oscura de mojada y LA MISMA raya de postes de la referencia cruzando las parcelas en diagonal hasta el fondo. Sin personas. Capa de primer plano: un surco encharcado en sombra. Objeto ancla: el primer poste, grande a la izquierda.",
    ini: "el cielo todavía cargado y gris cerrado, los charcos quietos y mates, la niebla baja pegada a los surcos.",
    fin: "una banda de claridad ha abierto el cielo por el fondo, los charcos ahora devuelven esa luz y la niebla se ha levantado de los surcos; los postes y las parcelas siguen exactamente donde estaban.",
  }, "personas, animales, arcoiris, sol visible"),
  escp("b1b", [ref("poste_lindero"), ref("piraca_labrador")], {
    comun: "PLANO MEDIO BAJO, luz gris difusa de después del agua. DOS hombres como EL MISMO labrador de la referencia colocan UN MISMO poste de la referencia en la tierra ablandada; barro fresco salpicado en las pantorrillas. Capa de primer plano: la tierra removida en sombra. Objeto ancla: la piedra de apisonar.",
    ini: "el de la izquierda sostiene el poste todavía inclinado y el de la derecha, en cuclillas, levanta la piedra de apisonar con las dos manos.",
    fin: "el poste ha quedado vertical y firme y el de la derecha acaba de bajar la piedra contra la base, con el barro saltando alrededor del pie del poste.",
  }, "herramientas metálicas, esfuerzo teatral, rostros de frente"),

  // b2 — La raya tenía dueño y no se veía.
  esc("b2a", [ref("poste_lindero"), ref("sabana_linderos")], {
    comun: "PLANO GENERAL LARGO a la altura del surco, luz rasante de última tarde. LA MISMA raya de postes de la referencia con el sol muy bajo por detrás, cada poste tirando su sombra sobre LOS MISMOS surcos de la referencia. Campo vacío, aire quieto; la ausencia de gente es deliberada. Capa de primer plano: dos sombras cruzando el cuadro. Objeto ancla: la sombra más larga.",
    ini: "las sombras son todavía cortas y el sol está un poco más alto sobre el horizonte.",
    fin: "el sol ha bajado casi al filo y las sombras de los postes se han alargado hasta cruzar el cuadro entero de lado a lado.",
  }, "personas, siluetas, sombras con forma humana, animales"),
  esc("b2b", [ref("poste_lindero"), ref("altiplano_noche")], {
    comun: "CONTRAPICADO CERRADO, luz de cielo lavado al anochecer. UN SOLO poste como EL MISMO de la referencia recortado contra el cielo, ocupando el eje del cuadro de abajo arriba; muy al fondo y diminutos, la loma del MISMO altiplano de la referencia y un techo de paja. Capa de primer plano: el canto astillado de la madera. Objeto ancla: el remate superior del poste.",
    ini: "el cielo detrás todavía tiene claridad de tarde y el poste se lee con su veta.",
    fin: "el cielo se ha apagado a azul de noche y el poste ha quedado en silueta negra, con las primeras estrellas de papel detrás; el encuadre no se ha movido.",
  }, "personas, templos, altares, ídolos, rostros en la madera"),

  // b3 — Quien respetaba el límite sembraba en paz. Correr la tierra.
  escp("b3a", [ref("piraca_labrador"), ref("poste_lindero"), ref("sabana_cultivos")], {
    comun: "PLANO GENERAL MEDIO, luz abierta de mediodía sin sombras duras. EL MISMO labrador de la referencia, pequeño y DE ESPALDAS, sembrando en su surco de LOS MISMOS cultivos de la referencia a dos pasos de LA MISMA raya de postes; no la mira. Capa de primer plano: hojas de maíz jóvenes en sombra. Objeto ancla: la mano que deja la semilla.",
    ini: "está agachado con la mano cerrada sobre las semillas, todavía sin abrirla sobre el surco.",
    fin: "ha abierto la mano y las semillas han caído en el surco; él se está enderezando medio palmo para dar el paso siguiente.",
  }, "primeros planos de rostro, dramatismo, herramientas metálicas"),
  escp("b3b", [ref("zaque_tunja"), ref("plaza_fiesta_noche")], {
    comun: "PLANO MEDIO LARGO, luz clara de mediodía. EL MISMO cacique de la referencia de perfil en el borde de LA MISMA plaza de la referencia; a media distancia y más bajos que él, un semicírculo de hombres y mujeres DE ESPALDAS al espectador. Nadie se arrodilla. Capa de primer plano: hombros y cabezas del semicírculo en sombra. Objeto ancla: la mano del cacique.",
    ini: "él tiene el brazo a media altura, empezando a extenderlo hacia el campo, y las cabezas del semicírculo miran todavía hacia otro lado.",
    fin: "el brazo ha quedado extendido del todo señalando el campo y todas las cabezas del semicírculo se han girado a seguir esa dirección.",
  }, "tronos, coronas, gestos imperiales, multitudes arrodilladas"),

  // b4 — Salían con plumas. Cruzarla entera, sin romperse.
  escp("b4a", [ref("corredor_plumas"), ref("camino_carrera"), ref("poste_lindero")], {
    comun: "GRAN PLANO GENERAL del territorio, luz alta y limpia de media mañana. LOS MISMOS corredores de la referencia, pequeños y escalonados, por EL MISMO camino de la referencia junto a LA MISMA raya de postes, que cruza el campo sin interrumpirse hasta el horizonte. Las plumas rojas y blancas son el único color vivo. Capa de primer plano: pasto alto en sombra. Objeto ancla: las plumas del primero.",
    ini: "el grupo va agrupado y todavía cerca del borde inferior del cuadro, con mucho camino por delante.",
    fin: "el grupo se ha estirado en fila a lo largo del camino y el primero ya está a media distancia hacia el horizonte; el polvo queda levantado detrás de ellos.",
  }, "público animando, banderas, líneas de meta, números"),
  escp("b4b", [ref("corredor_plumas"), ref("sendero_territorio")], {
    comun: "PLANO DETALLE a ras del agua, cámara a un palmo del suelo, luz alta que atraviesa la corriente. Los pies descalzos de UNO de LOS MISMOS corredores de la referencia, de tamaño normal y cortados a media pantorrilla por el borde superior, en una quebrada de cantos rodados del tamaño de un puño que dan la escala. NO se ve horizonte, ni montañas, ni cielo. Capa de primer plano: un canto rodado grande. Objeto ancla: el pie que rompe el agua.",
    ini: "un pie está suspendido justo encima del agua, a punto de entrar, y el otro apoyado en una piedra seca.",
    fin: "el pie ha entrado en el agua somera y ha levantado una corona de salpicaduras y ondas alrededor del tobillo.",
  }, "rostros, cuerpos completos, sangre, calzado, gigantes, montañas, cielo"),

  // b5 — Sin boca que lo dijera, se oía. (CITA)
  esc("b5a", [ref("poste_lindero"), ref("sabana_linderos")], {
    comun: "PLANO MEDIO del límite, luz detenida y plana de cielo cubierto, sin sombras. DOS de LOS MISMOS postes de la referencia en primer término, uno a cada lado del eje, y LA MISMA raya siguiendo al fondo; el centro del cuadro está deliberadamente vacío. Capa de primer plano: el pie de piedra de un poste. Objeto ancla: el hueco entre los dos postes.",
    ini: "el aire está completamente quieto y las hierbas del lindero, inmóviles.",
    fin: "una racha ha cruzado el hueco entre los dos postes y ha doblado todas las hierbas hacia el mismo lado; sigue sin haber nadie en el cuadro.",
  }, "personas, siluetas, rostros en la madera, formas humanas en las nubes"),
  esc("b5b", [ref("lineas_tierra")], {
    comun: "PLANO CENITAL CERRADO, luz vertical de mediodía. La franja de tierra desnuda parte el terreno en dos mitades y recorre el cuadro de arriba abajo: a la izquierda, surcos recién abiertos y oscuros; a la derecha, mata ya crecida y clara. Capa de primer plano: el canto de la franja. Objeto ancla: la línea misma.",
    ini: "una nube tapa la mitad del cuadro y las dos labores se distinguen mal.",
    fin: "la nube ha pasado, la luz cae entera sobre el terreno y la diferencia entre las dos mitades se lee nítida a lado y lado de la misma línea.",
  }, "personas, manos, texto, símbolos, flechas, postes"),

  // b6 — Entregaba mantas y repartía chicha. Flautas y fotutos.
  escp("b6a", [ref("zaque_tunja"), ref("corredor_plumas"), ref("manta_reparto")], {
    comun: "PLANO MEDIO frontal, luz dorada y baja de tarde. EL MISMO cacique de la referencia a la izquierda y UNO de LOS MISMOS corredores de la referencia a la derecha, los dos de pie a la misma altura y mirándose, con LA MISMA manta doblada de la referencia en el centro exacto del cuadro. Capa de primer plano: el borde de la manta en sombra. Objeto ancla: las manos sobre la manta.",
    ini: "el cacique sostiene la manta con las dos manos y el corredor está levantando las suyas para recibirla, sin tocarla aún.",
    fin: "las cuatro manos están sobre la manta a la vez, en el momento exacto del traspaso; ninguno de los dos se ha movido de su sitio.",
  }, "arrodillarse, besar manos, público aclamando"),
  escp("b6b", [ref("familias_muiscas"), ref("plaza_fiesta_noche")], {
    comun: "PLANO MEDIO, luz naranja de fogón que llega desde abajo al anochecer. TRES músicos de LAS MISMAS familias de la referencia en LA MISMA plaza de la referencia: dos con flautas largas de caña y el tercero con un fotuto de caracol; detrás y en sombra, tambores de cuero y madera. Capa de primer plano: el hombro de un tambor en sombra. Objeto ancla: el caracol del fotuto.",
    ini: "los tres tienen los instrumentos a media altura, todavía sin llevárselos a la boca, y el fogón está bajo.",
    fin: "los tres se han llevado los instrumentos a la boca y están soplando, con los carrillos hinchados; el fogón ha crecido y les ilumina más la cara.",
  }, "instrumentos europeos, guitarras, trompetas de metal, partituras"),

  // b7 — Corro con las vasijas en medio. La plumería junto al límite.
  escp("b7a", [ref("familias_muiscas"), ref("vasija_gacha"), ref("plaza_fiesta_noche")], {
    comun: "PICADO SUAVE desde media altura, luz cálida de atardecer con sombras largas. Un corro de hombres y mujeres de LAS MISMAS familias de la referencia alrededor de TRES de LAS MISMAS vasijas de barro de la referencia puestas juntas en el centro del suelo. El corro llena el ancho del cuadro. Capa de primer plano: dos brazos cruzando el borde inferior. Objeto ancla: las tres vasijas.",
    ini: "el corro está abierto por un lado y varias manos todavía no se han alcanzado.",
    fin: "el corro se ha cerrado del todo, todas las manos están enlazadas y el círculo ha empezado a girar; las vasijas siguen quietas en el centro.",
  }, "danza frenética, saltos, máscaras, fuego en las manos"),
  escp("b7b", [ref("poste_lindero"), ref("corredor_plumas")], {
    comun: "PLANO MEDIO BAJO, luz última de tarde, casi sin color. DOS personas como LOS MISMOS corredores de la referencia, DE ESPALDAS y agachadas al pie de UN MISMO poste de la referencia. Nadie mira hacia arriba, nadie reza, nadie toca el poste. Capa de primer plano: el suelo al pie del poste. Objeto ancla: la diadema de plumas.",
    ini: "los dos sostienen todavía sus diademas de plumas rojas y blancas en las manos, a media bajada.",
    fin: "las dos diademas han quedado dejadas en el suelo al pie del poste y las manos se retiran; la madera del poste sigue vacía y sin ninguna señal.",
  }, "figura divina, rostro en el poste, luz sobrenatural, humo ritual, manos alzadas"),

  // b8 — Se cerraba el pacto. Las danzas recorrían los términos.
  esc("b8a", [ref("poste_lindero"), ref("plaza_fiesta_noche")], {
    comun: "PLANO GENERAL con fuerte profundidad, noche de luna. En primer término y MUY GRANDE, UN MISMO poste de lindero de la referencia en el tercio izquierdo, con LA MISMA raya perdiéndose al fondo; allá lejos y pequeña, LA MISMA plaza de la referencia. El orden delante y grande, la fiesta detrás y chica. Capa de primer plano: el canto del poste. Objeto ancla: el contraste entre el poste oscuro y la plaza.",
    ini: "en la plaza del fondo sólo hay dos brasas bajas y la noche está casi cerrada.",
    fin: "los fogones de la plaza se han encendido del todo y tiñen de naranja el fondo del cuadro; el poste del primer término sigue negro y en el mismo sitio.",
  }, "incendios, chispas grandes, multitud desbordada, personas en primer término"),
  escp("b8b", [ref("familias_muiscas"), ref("poste_lindero"), ref("altiplano_noche")], {
    comun: "PLANO GENERAL nocturno, luz azul de luna con reflejo naranja lejano. Una fila de danzantes de LAS MISMAS familias de la referencia junto a LA MISMA raya de postes de la referencia, siguiendo el mismo trazado que los corredores del día. EL MISMO cielo nocturno de la referencia arriba. Capa de primer plano: un poste cortado por el borde derecho. Objeto ancla: la hilera que repite la línea.",
    ini: "la fila está entrando por el borde izquierdo y sólo se ven los primeros tres danzantes.",
    fin: "la fila entera ha entrado en el cuadro y recorre la raya de postes de lado a lado, escalonada y avanzando.",
  }, "antorchas grandes, danza descontrolada, máscaras, fuego en las manos"),

  // b9 — Vasijas vacías, plumería dormida, la raya intacta.
  esc("b9a", [ref("vasija_gacha"), ref("manta_vasijas")], {
    comun: "PLANO DETALLE cenital suave, primera luz fría del amanecer. DOS de LAS MISMAS vasijas de barro de la referencia volcadas y vacías sobre LA MISMA manta de la referencia extendida en el suelo, con plumas rojas y blancas caídas al lado. Nadie alrededor. Capa de primer plano: el fleco de la manta en sombra. Objeto ancla: la boca vacía de la vasija volcada.",
    ini: "la luz es todavía azulada y las gotas de rocío están sin brillo sobre las plumas.",
    fin: "la primera luz cálida ha entrado de lado, ha encendido las gotas de rocío sobre las plumas y ha alargado la sombra de las vasijas sobre la manta.",
  }, "personas, manos, restos de comida, suciedad excesiva"),
  esc("b9b", [ref("sabana_linderos"), ref("poste_lindero")], {
    comun: "GRAN PLANO GENERAL, MISMO encuadre y MISMA distancia que el primer cuadro del video, primera luz con niebla baja. LA MISMA sabana de la referencia y LA MISMA raya completa de postes y piedras atravesando la sementera, intacta. Ni una figura, ni una huella, ni un rastro de la fiesta. Capa de primer plano: el mismo surco del primer cuadro, ahora seco. Objeto ancla: la raya entera.",
    ini: "la niebla es espesa y cubre la raya a media altura, dejando ver sólo los dos postes más cercanos.",
    fin: "la niebla se ha deshecho y la raya de postes se ve entera hasta el fondo, igual que en el primer cuadro del video; el campo sigue sin nadie.",
  }, "personas, huellas humanas, basura, plumas, vasijas, fogones"),
]);
