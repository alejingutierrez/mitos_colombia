// Keyframes de escena del video de Chaquén (2 por bloque, 18 bloques = 36 cuadros).
// Guion:  docs/videos/muiscas/mvp-guiones/guion-chaquon-v1.json  (N=18)
// Acta:   docs/videos/muiscas/actas/acta-chaquon.json
//
// DESLINDE DURO, del acta: Chaquén NO ES UN PERSONAJE. La fuente lo define por
// negación —no vivía en templo ni en cerro, era la línea misma— así que NINGUNA
// escena le da cuerpo. Lo que se ve son los postes, las piedras y la raya.
// Por eso NO se usa la ficha de biblia `chaquen_lindero`: esa figura con vara
// pertenece a `el-castigo-de-chaquen`, que es otro mito.
//
// Los refs con "/" apuntan a la biblia: content/videos/muiscas/biblia/<id>.jpg

export const SPEC_NAME = "muisca-chaquon-escenas";
export const OUT_DIR = "muiscas/videos/chaquon/keyframes";

export const SHARED_AVOID =
  "texto, letras, logos, marcas de agua, marcos o bordes; CGI, render 3D o ilustracion digital pulida; coronas, tronos o templos europeos; piramides, penachos o iconografia mesoamericana; simbolos espirituales inventados; joyeria inventada u oro en el cuerpo; desnudez, sexualizacion o dramatismo excesivo; cambiar los rostros, mantas o materiales de los personajes de referencia; cualquier figura, rostro, silueta o presencia que represente a Chaquen como ser o divinidad";

export const PALETTE =
  "verdes de sementera en franjas distintas, pardo mojado de tierra ablandada, gris mineral de piedra y poste, crema de algodon crudo, ocres de paja; rojo y blanco solo en las plumas; sin saturacion ni neones";

const B = "muiscas/biblia";

export const ITEMS = [
  // b1 — El año comenzaba en los linderos.
  {
    id: "b1a", kind: "keyframe", preset: "vertical",
    refs: [`${B}/sabana_linderos`, `${B}/poste_lindero`],
    scene:
      "Plano general vertical de LA MISMA sabana de la referencia al comenzar el año, vista desde el suelo hacia el fondo: parcelas de verdes distintos separadas por una raya de postes de madera vieja que se aleja hasta perderse; el cielo cargado después de la lluvia ocupa el tercio superior. Sin personas. Luz gris de mañana mojada.",
    avoid: "personas, animales, arcoiris",
  },
  {
    id: "b1b", kind: "keyframe", preset: "vertical",
    refs: [`${B}/poste_lindero`],
    scene:
      "PLANO DETALLE cenital de la tierra ablandada por la lluvia al pie de un poste de madera como el de la referencia: el barro oscuro cede y se abre alrededor de la base, con pozas de agua diminutas y briznas aplastadas. Sin personas, sin manos. Luz gris difusa.",
    avoid: "personas, manos, herramientas, insectos",
  },

  // b2 — Se levantaban postes donde un sembrado terminaba.
  {
    id: "b2a", kind: "keyframe", preset: "vertical",
    refs: [`${B}/poste_lindero`, `${B}/piraca_labrador`, `${B}/sabana_linderos`],
    scene:
      "Plano medio vertical: DOS hombres muiscas como el de la referencia, de perfil tres cuartos, clavando un poste de madera igual al de la referencia en la tierra ablandada; uno lo sostiene vertical con las dos manos, el otro apisona la base con una piedra plana. Detrás, la sabana de la referencia abriéndose en parcelas. Acción en el eje central, aire arriba y abajo.",
    avoid: "herramientas metálicas, esfuerzo teatral, gritos",
  },
  {
    id: "b2b", kind: "keyframe", preset: "vertical",
    refs: [`${B}/sabana_linderos`, `${B}/poste_lindero`],
    scene:
      "Plano general vertical, SIN personas: dos sembrados vecinos de verdes claramente distintos —uno de surcos rectos y otro de mata más alta— tocándose exactamente a lo largo de una raya de postes y piedras que cruza el encuadre de abajo hacia el fondo. La línea es el sujeto. Luz lateral de media mañana.",
    avoid: "personas, animales, cercas de alambre, muros",
  },

  // b3 — La raya tenía un dueño que no se veía.
  {
    id: "b3a", kind: "keyframe", preset: "vertical",
    refs: [`${B}/poste_lindero`, `${B}/sabana_linderos`],
    scene:
      "Plano general vertical al atardecer, SIN NINGUNA figura: la raya de postes de la referencia recorre la sementera con la luz rasante alargando la sombra de cada poste sobre los surcos. El aire quieto, el campo vacío. La ausencia de personas es deliberada y debe leerse como calma, no como abandono.",
    avoid: "personas, siluetas, sombras con forma humana, figuras en el horizonte, animales",
  },
  {
    id: "b3b", kind: "keyframe", preset: "vertical",
    refs: [`${B}/poste_lindero`, `${B}/altiplano_noche`],
    scene:
      "CONTRAPICADO cerrado de un solo poste de madera como el de la referencia recortado contra el cielo del atardecer; muy al fondo y pequeños, desenfocados y sin importancia, la loma de un cerro y el techo de paja de un recinto. El poste ocupa el eje central y es lo único nítido. Sin personas.",
    avoid: "personas, templos de piedra, escalinatas, altares, ídolos, ofrendas",
  },

  // b4 — Era la línea misma, el borde entre dos sementeras.
  {
    id: "b4a", kind: "keyframe", preset: "vertical",
    refs: [`${B}/lineas_tierra`, `${B}/sabana_cultivos`],
    scene:
      "PLANO CENITAL vertical sobre el borde entre dos sementeras como las de la referencia: a la izquierda surcos paralelos apretados, a la derecha surcos en otra dirección y otro verde, y entre ambos una franja de tierra pelada con postes y piedras alineados. Geometría clara, sin personas. Luz de mediodía nublado.",
    avoid: "personas, animales, caminos empedrados, muros",
  },
  {
    id: "b4b", kind: "keyframe", preset: "vertical",
    refs: [`${B}/poste_lindero`, `${B}/tejo_piedras`],
    scene:
      "PLANO DETALLE del pie de un poste de madera con dos piedras planas asentadas a su base, como las de la referencia: el último surco llega exactamente hasta ellas y se detiene; al otro lado la tierra está sin labrar. Sin personas. Luz lateral baja que marca el canto de cada piedra.",
    avoid: "personas, manos, raíces expuestas, insectos",
  },

  // b5 — Quien respetaba el límite sembraba en paz.
  {
    id: "b5a", kind: "keyframe", preset: "vertical",
    refs: [`${B}/piraca_labrador`, `${B}/poste_lindero`, `${B}/sabana_cultivos`],
    scene:
      "Plano general vertical: EL MISMO labrador de la referencia, pequeño en el encuadre y de espaldas, sembrando tranquilo en su surco a dos pasos de la raya de postes, sin mirarla. El campo alrededor ordenado y abierto. Gesto sobrio de trabajo cotidiano. Luz cálida de media tarde.",
    avoid: "primeros planos de rostro, dramatismo, herramientas metálicas",
  },
  {
    id: "b5b", kind: "keyframe", preset: "vertical",
    refs: [`${B}/poste_lindero`, `${B}/piraca_labrador`, `${B}/altiplano_noche`],
    scene:
      "Plano medio nocturno de tensión contenida: DOS hombres muiscas como el de la referencia, enfrentados a ambos lados de un poste que está visiblemente torcido y removido de su base, señalando cada uno su lado de la tierra. Los cuerpos en el eje central, rostros serios, sin violencia ni armas. Luz fría de noche clara.",
    avoid: "armas, golpes, sangre, rostros deformados por la ira, público",
  },

  // b6 — Cuando llegaba la fiesta, el cacique ordenaba correr la tierra.
  {
    id: "b6a", kind: "keyframe", preset: "vertical",
    refs: [`${B}/zaque_tunja`, `${B}/plaza_fiesta_noche`, `${B}/familias_muiscas`],
    scene:
      "Plano medio vertical: EL MISMO cacique de la referencia, de pie en el borde de la plaza de la referencia y con el brazo extendido hacia el campo, dando la orden; a su alrededor, gente de la comunidad como la de la referencia escuchando en semicírculo, a media distancia. Mañana de fiesta, luz limpia.",
    avoid: "tronos, coronas, gestos imperiales, multitudes arrodilladas",
  },
  {
    id: "b6b", kind: "keyframe", preset: "vertical",
    refs: [`${B}/corredor_plumas`, `${B}/campo_pelado`],
    scene:
      "Plano medio vertical de CUATRO corredores idénticos al de la referencia —mismo rostro de papel, misma diadema de fibra con plumas roja, blanca y roja, mismo taparrabo crudo— formados hombro con hombro en el borde del campo pelado de la referencia, quietos, mirando al frente antes de salir. Cuerpos completos, sin cortar cabezas ni pies.",
    avoid: "pintura corporal inventada, penachos grandes, armas, expresión feroz",
  },

  // b7 — Recorrían el campo siguiendo los puestos.
  {
    id: "b7a", kind: "keyframe", preset: "vertical",
    refs: [`${B}/corredor_plumas`, `${B}/camino_carrera`, `${B}/poste_lindero`],
    scene:
      "Plano general vertical: una fila de corredores como el de la referencia avanzando en carrera por EL MISMO camino de la referencia, pegados a la raya de postes que marca el borde de las sementeras; los cuerpos pequeños y escalonados hacia el fondo, la línea de postes guiando la mirada. Polvo bajo levantado por los pies.",
    avoid: "público animando, banderas, líneas de meta, números",
  },
  {
    id: "b7b", kind: "keyframe", preset: "vertical",
    refs: [`${B}/corredor_plumas`, `${B}/sendero_territorio`],
    scene:
      "Plano general muy abierto en CONTRAPICADO suave: los corredores de la referencia, ya muy pequeños, coronando el alto del cerro por EL MISMO sendero de la referencia y empezando a dar la vuelta; el cielo ocupa más de la mitad del encuadre. Figuras diminutas integradas al paisaje.",
    avoid: "primeros planos, rostros reconocibles, cumbres nevadas, aves grandes",
  },

  // b8 — Correr la tierra era conocerla con el cuerpo.
  {
    id: "b8a", kind: "keyframe", preset: "vertical",
    refs: [`${B}/corredor_plumas`, `${B}/sendero_territorio`],
    scene:
      "PLANO DETALLE a ras de suelo de dos pies descalzos de papel, como los del corredor de la referencia, entrando en el agua somera de una quebrada de piedras redondas; el agua se abre en dos ondas y salpica bajo. Sólo piernas de la rodilla hacia abajo. Luz de mañana.",
    avoid: "rostros, cuerpos completos, sangre, heridas, calzado",
  },
  {
    id: "b8b", kind: "keyframe", preset: "vertical",
    refs: [`${B}/corredor_plumas`, `${B}/poste_lindero`],
    scene:
      "PLANO DETALLE de la mano de un corredor de papel rozando al pasar la madera gastada de un poste de lindero como el de la referencia, sin detenerse: los dedos apenas tocan la arista, el brazo en movimiento. Fondo de sementera desenfocado. El gesto es de reconocimiento, no de apoyo.",
    avoid: "rostros, agarrar el poste, derribarlo, sangre",
  },

  // b9 — El punto donde un surco entregaba la cosecha a otro.
  {
    id: "b9a", kind: "keyframe", preset: "vertical",
    refs: [`${B}/lineas_tierra`, `${B}/sabana_cultivos`],
    scene:
      "PLANO DETALLE del punto exacto donde un surco sembrado termina y empieza el del vecino: dos texturas de cultivo distintas tocándose en una línea limpia de tierra desnuda, con una piedra pequeña hincada como mojón. Sin personas, sin postes en este encuadre. Luz rasante que separa las dos texturas.",
    avoid: "personas, manos, herramientas, animales",
  },
  {
    id: "b9b", kind: "keyframe", preset: "vertical",
    refs: [`${B}/sabana_linderos`, `${B}/sendero_territorio`],
    scene:
      "Plano general vertical MUY abierto del territorio entero desde lo alto: la sabana de la referencia con todas sus parcelas, y la raya de postes cruzándola completa desde el primer plano hasta el horizonte sin interrumpirse en ningún punto. Sin personas. La continuidad de la línea es el sujeto. Luz de tarde amplia.",
    avoid: "personas, caminos que corten la línea, ríos que la interrumpan, nubes dramáticas",
  },

  // b10 — Sin boca que lo dijera, en el límite se oía. (CITA)
  {
    id: "b10a", kind: "keyframe", preset: "vertical",
    refs: [`${B}/poste_lindero`, `${B}/sabana_linderos`],
    scene:
      "Plano medio vertical del límite absolutamente solo: dos postes en primer término y la raya siguiendo al fondo, el aire quieto, ni una hoja movida, ninguna presencia. El encuadre está construido para que la falta de figura se note. Luz plana de mediodía nublado.",
    avoid: "personas, siluetas, rostros en la madera, formas humanas en las nubes, animales, viento visible",
  },
  {
    id: "b10b", kind: "keyframe", preset: "vertical",
    refs: [`${B}/lineas_tierra`],
    scene:
      "PLANO CENITAL muy cerrado sobre la línea de tierra desnuda que parte el terreno en dos mitades exactas, cada una con su labor distinta; la franja vacía recorre el encuadre entero de arriba abajo por el centro. Abstracción casi gráfica, hecha de tierra y papel. Sin personas.",
    avoid: "personas, manos, texto, símbolos, flechas",
  },

  // b11 — A la llegada, el cacique alababa las danzas y entregaba mantas.
  {
    id: "b11a", kind: "keyframe", preset: "vertical",
    refs: [`${B}/zaque_tunja`, `${B}/corredor_plumas`, `${B}/manta_reparto`],
    scene:
      "Plano medio vertical: EL MISMO cacique de la referencia entregando con las dos manos una manta doblada igual a la de la referencia a UNO de los corredores de la referencia, que la recibe también con las dos manos; ambos de perfil tres cuartos, a la misma altura, sin reverencia ni sumisión. Fondo de plaza a media tarde.",
    avoid: "arrodillarse, besar manos, coronas, tronos, público aclamando",
  },
  {
    id: "b11b", kind: "keyframe", preset: "vertical",
    refs: [`${B}/vasija_gacha`, `${B}/manta_vasijas`, `${B}/familias_muiscas`],
    scene:
      "Plano medio vertical del reparto de chicha: manos de varias personas de papel como las de la referencia acercando totumas y cuencos a una vasija de barro grande como la de la referencia, apoyada en el suelo sobre la manta de la referencia. Se ven torsos y brazos, no rostros completos. Ambiente de mediodía de fiesta.",
    avoid: "embriaguez, caídas, desorden, vasos o jarras europeas, derrames",
  },

  // b12 — Las flautas y los fotutos contestaban a los tambores.
  {
    id: "b12a", kind: "keyframe", preset: "vertical",
    refs: [`${B}/familias_muiscas`, `${B}/plaza_fiesta_noche`],
    scene:
      "Plano medio vertical de músicos muiscas como los de la referencia en la plaza de la referencia: dos soplan flautas largas de caña y un tercero un fotuto de caracol, mientras al fondo se adivinan los tambores de cuero y madera. Los instrumentos en el eje central, las manos bien visibles. Últimas horas de luz.",
    avoid: "instrumentos europeos, guitarras, trompetas de metal, partituras",
  },
  {
    id: "b12b", kind: "keyframe", preset: "vertical",
    refs: [`${B}/familias_muiscas`, `${B}/plaza_fiesta_noche`],
    scene:
      "Plano general vertical de un corro: hombres y mujeres de papel como los de la referencia tomados de las manos formando un círculo abierto en la plaza de la referencia, vistos desde fuera y ligeramente en picado; el círculo no se cierra del todo en el borde inferior del encuadre. Gesto sereno, pasos cortos. Luz de atardecer.",
    avoid: "danza frenética, saltos, fuego en las manos, máscaras",
  },

  // b13 — Cantaban las grandezas de los mayores, con las vasijas en medio.
  {
    id: "b13a", kind: "keyframe", preset: "vertical",
    refs: [`${B}/familias_muiscas`, `${B}/vasija_gacha`, `${B}/plaza_fiesta_noche`],
    scene:
      "Plano general vertical en picado suave: el corro de gente de la referencia cantando alrededor de tres vasijas de barro como la de la referencia puestas en el centro exacto del círculo, sobre el suelo barrido. Las bocas abiertas apenas, sin gesticulación. Anochecer, primeros fogones.",
    avoid: "gritos, puños alzados, hogueras grandes, humo denso",
  },
  {
    id: "b13b", kind: "keyframe", preset: "vertical",
    refs: [`${B}/vasija_gacha`],
    scene:
      "PLANO DETALLE de una totuma de chicha pasando de unas manos a otras: cuatro manos de papel en el centro del encuadre, dos entregando y dos recibiendo, el borde del cuenco mojado. Sólo manos y antebrazos, sin rostros. Luz cálida y baja de fogón.",
    avoid: "rostros, bocas, derrames, brindis a la europea",
  },

  // b14 — Todo se ofrecía a Chaquén junto al límite.
  {
    id: "b14a", kind: "keyframe", preset: "vertical",
    refs: [`${B}/corredor_plumas`, `${B}/poste_lindero`],
    scene:
      "Plano medio vertical: dos personas de papel como la de la referencia, de espaldas y agachadas, DEPOSITANDO en el suelo al pie de un poste de lindero sus diademas de fibra con plumas y unos adornos pequeños; el poste queda vertical en el eje central y vacío. Nadie mira hacia arriba, nadie reza. Atardecer.",
    avoid: "figura divina, rostro en el poste, luz sobrenatural, humo ritual, ídolos, gestos de adoración",
  },
  {
    id: "b14b", kind: "keyframe", preset: "vertical",
    refs: [`${B}/poste_lindero`],
    scene:
      "PLANO DETALLE, SIN PERSONAS, de las plumas rojas y blancas y los adornos de fibra dejados sobre la tierra al pie del poste de la referencia; el viento apenas mueve una barba de pluma. La madera del poste sube fuera de cuadro. Última luz del día.",
    avoid: "personas, manos, fuego, resplandores, ojos, rostros",
  },

  // b15 — Así se cerraba el pacto.
  {
    id: "b15a", kind: "keyframe", preset: "vertical",
    refs: [`${B}/poste_lindero`, `${B}/plaza_fiesta_noche`],
    scene:
      "Plano general vertical con PESO CONTRARIO: en el primer término, grande y nítido, un poste de lindero de la referencia y la raya perdiéndose; al fondo y pequeña, la plaza de la referencia ya encendida de fogones y gente. El orden delante, la fiesta detrás, las dos en el mismo encuadre. Noche temprana.",
    avoid: "incendios, chispas grandes, multitud desbordada",
  },
  {
    id: "b15b", kind: "keyframe", preset: "vertical",
    refs: [`${B}/plaza_fiesta_noche`, `${B}/poste_lindero`],
    scene:
      "Plano general vertical tomado DESDE la raya de postes, que cruza oscura y desenfocada el tercio inferior: más allá, los fogones de la fiesta de la referencia laten cálidos entre la gente. La línea en sombra enmarca la celebración sin participar de ella. Noche.",
    avoid: "personas en primer plano, rostros iluminados por el fuego, humo denso",
  },

  // b16 — Las danzas recorrían los mismos términos que las carreras.
  {
    id: "b16a", kind: "keyframe", preset: "vertical",
    refs: [`${B}/familias_muiscas`, `${B}/poste_lindero`, `${B}/altiplano_noche`],
    scene:
      "Plano general vertical nocturno: una fila de danzantes de papel como los de la referencia avanzando en hilera junto a la raya de postes, siguiendo exactamente el mismo trazado que siguieron los corredores; las figuras pequeñas y escalonadas, los postes marcando el camino. Cielo estrellado de papel perforado.",
    avoid: "antorchas grandes, danza descontrolada, máscaras, animales",
  },
  {
    id: "b16b", kind: "keyframe", preset: "vertical",
    refs: [`${B}/casa_barro_paja`, `${B}/altiplano_noche`],
    scene:
      "Plano general vertical de noche cerrada: tres o cuatro bohíos como el de la referencia con la luz tibia del fogón saliendo por la entrada; unas pocas figuras pequeñas terminan de entrar. El campo alrededor ya oscuro y quieto. La jornada acabándose en las casas.",
    avoid: "cuerpos tirados, escenas de embriaguez, desorden, fuego fuera de control",
  },

  // b17 — Al amanecer, con las vasijas vacías, la raya seguía allí.
  {
    id: "b17a", kind: "keyframe", preset: "vertical",
    refs: [`${B}/sabana_linderos`, `${B}/poste_lindero`],
    scene:
      "Plano general vertical con la ÚLTIMA luz del día abandonando los campos: el sol ya fuera de cuadro deja sólo la coronilla de los postes encendida mientras los surcos se hunden en sombra azul. Sin personas. Silencio.",
    avoid: "personas, sol visible con rostro, cielos incendiados, aves",
  },
  {
    id: "b17b", kind: "keyframe", preset: "vertical",
    refs: [`${B}/vasija_gacha`, `${B}/manta_vasijas`],
    scene:
      "PLANO DETALLE del amanecer siguiente: dos vasijas de barro como la de la referencia volcadas y vacías sobre la manta de la referencia, con el rocío posado en el barro y una totuma caída de lado. Sin personas. Luz fría y limpia de primera hora.",
    avoid: "personas, restos de comida, moscas, suciedad excesiva, vómito",
  },

  // b18 — Una línea de postes y piedras que ninguna fiesta borró.
  {
    id: "b18a", kind: "keyframe", preset: "vertical",
    refs: [`${B}/poste_lindero`, `${B}/lineas_tierra`],
    scene:
      "PLANO DETALLE al amanecer de la plumería caída entre los surcos: las plumas rojas y blancas de las diademas quietas sobre la tierra húmeda, sin brillo, mojadas de rocío, junto a la base de un poste. Nadie las ha recogido todavía. Sin personas. Luz fría.",
    avoid: "personas, manos, plumas volando, viento fuerte, aves",
  },
  {
    id: "b18b", kind: "keyframe", preset: "vertical",
    refs: [`${B}/sabana_linderos`, `${B}/poste_lindero`],
    scene:
      "Plano general vertical de cierre, SIN NADIE: la raya completa de postes y piedras atravesando la sementera en la primera luz, exactamente igual que en el primer bloque, intacta, con la niebla baja deshaciéndose entre los surcos. Nada indica que hubo fiesta salvo la quietud. Luz fría de amanecer.",
    avoid: "personas, huellas humanas, basura, plumas, vasijas, cualquier rastro de celebración",
  },
];
