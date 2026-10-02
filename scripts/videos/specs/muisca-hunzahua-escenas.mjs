// Keyframes de Hunzahúa — 11 bloques × 2 escenas × 2 cuadros = 44 imágenes ≈ 110 s.
// Guion: guion-hunzahua-v2.json (N=11) · Acta: acta-hunzahua.json (21 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _muisca-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · Esta ficha NO es `el-pozo-de-hunzahua`. Aquí el mito es LA HUIDA: el
//   viaje inventado, la maldición del valle, el hijo dejado en la cueva y las
//   dos piedras en el río. El pozo es UN episodio del camino, no el asunto, y
//   por eso se despacha en un solo par sin repetir los encuadres de aquél.
// · La hermana NO es arrastrada: cuando él la llama con la tata, ella deja la
//   casa de la madre y lo sigue. La fuente le da esa decisión.
// · La maldición del valle NO es ira contra la madre: llega después de
//   encontrar el cercado en silencio, sin fiesta y sin miradas de zaque. Lo
//   que maldice es haber dejado de ser reconocido.
// · El hijo NO muere: lo dejan convertido en piedra dentro de una cueva, sin
//   atreverse a cargar con él. Es abandono, no infanticidio.
// · Las dos piedras NO son castigo: ellos DECIDEN convertirse. Nadie los
//   transforma, y por eso no hay ningún gesto de magia en cuadro.
// · El cierre NO cierra: el pozo sigue abierto, el viento no descansa y las
//   piedras esperan sin apuro. Tres cosas que siguen ocurriendo.
//
// GUION DE LUZ: mañana de cercado → camino de los Chipataes → penumbra del
// descubrimiento → chicha a plena luz → agua nueva del pozo → azul de antes
// del alba en los cojines → viento del alto → tarde de la tata → cueva fría →
// río bajo el salto → última luz sobre las dos piedras.

import { DIRECCION, AVOID_BASE, ref, esc, escp, armar } from "./_muisca-comun.mjs";

export const SPEC_NAME = "muisca-hunzahua-escenas";
export const OUT_DIR = "muiscas/videos/hunzahua/keyframes";
export { DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; escena de alcoba, pareja en la cama, insinuacion sexual, desnudez; golpe que alcanza a una persona, sangre, herida; bebe muerto, cadaver de niño, infanticidio, entierro; magia visible, resplandor, particulas, rayos al transformarse; maldicion con efectos dibujados, calaveras, simbolos; tesoro, oro bajo el agua";
export const PALETTE =
  "ocre rojizo de barro cocido, crema de algodon crudo, pardo seco de valle batido por el viento, gris de arenisca y de piedra de rio, verde oscuro de agua, azul frio de madrugada; sin saturacion ni neones";

const HUNZA =
  "EL MISMO Hunzahúa de la referencia (hombre joven de unos treinta años, rostro firme y algo endurecido, pelo negro recogido bajo una cinta tejida, manta de algodón crudo de tejido fino anudada al hombro derecho con dos cenefas geométricas en ocre, descalzo)";
const HERMANA =
  "LA MISMA hermana de Hunzahúa de la referencia (mujer joven de unos veinte años, rostro sereno y reservado, pelo negro liso en trenza, manta de algodón crudo del pecho a la pantorrilla anudada al hombro con cenefa tejida sobria en verde oscuro, descalza)";

export const ITEMS = armar([
  // b1 — Primer zaque de Hunza. Una puerta que no podía abrir.
  escp("b1a", [ref("hunzahua_zaque"), ref("cercado_bacata"), ref("familias_muiscas")], {
    comun: `Luz de primera mañana. ${HUNZA} en su cercado, mandando sobre el valle. Todo lo demás se le obedece. Objeto ancla: su sitio en el patio.`,
    camara: {
      a: "PLANO MEDIO frontal de él de pie en el patio, con gente esperando al fondo.",
      b: "la cámara ha RETROCEDIDO y ha subido hasta un PICADO ALTO del cercado entero, con el valle de Hunza abriéndose detrás de la empalizada.",
    },
    ini: "está de pie en el centro del patio y varios esperan a que hable.",
    fin: "desde arriba se ve el cercado entero, la gente colocada alrededor de él y, más allá de la empalizada, el valle completo que le obedece.",
  }, "trono, corona, cetro, guardias con armas, aureola"),
  escp("b1b", [ref("hunzahua_zaque"), ref("casa_barro_paja"), ref("familias_muiscas")], {
    comun: `Penumbra de la casa. La puerta del aposento de la hermana, que la madre vigila de cerca. Es la única que su palabra no abre. Objeto ancla: el vano cerrado.`,
    camara: {
      a: "PLANO MEDIO de él parado en el pasillo mirando hacia una puerta cerrada de esterilla.",
      b: "la cámara ha AVANZADO hasta la puerta y ha girado hacia el otro lado del pasillo: PLANO MEDIO de la madre sentada al lado del vano, quieta, con la puerta entre los dos.",
    },
    ini: "él mira la puerta cerrada desde tres pasos.",
    fin: "al lado del vano está sentada la madre, con las manos en el regazo y la cara vuelta hacia él: la puerta sigue cerrada y ella no se ha movido.",
  }, "escena de alcoba, cama, desnudez, insinuacion sexual, violencia"),

  // b2 — Inventó un viaje a comprar algodón.
  escp("b2a", [ref("hunzahua_zaque"), ref("familias_muiscas"), ref("copo_algodon")], {
    comun: `Luz de mañana en el patio. ${HUNZA} pidiendo permiso a la madre para llevarse a la hermana a la provincia de los Chipataes, tierra abundante en algodón. El viaje es un pretexto y la imagen no lo dice: lo dice el algodón que nadie mira. Objeto ancla: el copo de algodón.`,
    camara: {
      a: "PLANO MACRO de un copo de algodón crudo en una mano abierta, con el patio desenfocado detrás.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO LARGO de los tres —él, la madre y la hermana— con el copo pequeño en su mano y nadie mirándolo.",
    },
    ini: "el copo de algodón llena el cuadro, sostenido en alto.",
    fin: "desde lejos se ve la escena: él sostiene el copo mientras habla, la madre asiente y ninguno de los tres está mirando el algodón.",
  }, "mentira dibujada, gestos teatrales, aureola, violencia"),
  escp("b2b", [ref("hunzahua_zaque"), ref("hermana_hunzahua"), ref("camino_carrera")], {
    comun: `Luz plana de camino. Los dos yendo a los Chipataes por EL MISMO camino de la referencia, solos. No hay escena de alcoba: la falta se cuenta por el camino compartido. Objeto ancla: los dos en el camino.`,
    camara: {
      a: "PLANO GENERAL LARGO desde delante, los dos pequeños caminando hacia la cámara con distancia entre ellos.",
      b: "la cámara se ha QUEDADO QUIETA dejándolos pasar y ha girado a seguirlos: PLANO MEDIO de sus dos espaldas alejándose juntas por el camino.",
    },
    ini: "vienen de frente, separados por dos pasos.",
    fin: "ya pasaron y se alejan de espaldas, ahora caminando pegados el uno al otro y con la misma zancada.",
  }, "escena de alcoba, beso, abrazo, desnudez, insinuacion sexual"),

  // b3 — La madre vio el vientre. Tomó la sana.
  escp("b3a", [ref("hermana_hunzahua"), ref("familias_muiscas"), ref("casa_barro_paja")], {
    comun: "Luz gris de interior. La madre viendo el vientre y los pechos de la hija y entendiendo lo que nadie había dicho en voz alta. Objeto ancla: la cara de la madre.",
    camara: {
      a: "PLANO DETALLE del perfil del vientre bajo la manta, a contraluz de la puerta.",
      b: "la cámara ha girado y RETROCEDIDO hasta la penumbra del otro lado: PRIMER PLANO de la cara de la madre, quieta, con la boca cerrada.",
    },
    ini: "el vientre se marca bajo la manta contra la luz.",
    fin: "en la sombra, la cara de la madre lo ha entendido todo sin decir nada: los ojos fijos y la mandíbula apretada.",
  }, "gritos, bofetada, llanto teatral, desnudez, escandalo"),
  escp("b3b", [ref("familias_muiscas"), ref("vasija_gacha"), ref("hermana_hunzahua")], {
    comun: `Penumbra con el fogón. Estaban haciendo chicha. La madre toma la sana, el palo con que se remueve la bebida, y va contra la muchacha; ${HERMANA} gira en torno a LA MISMA vasija de la referencia. Objeto ancla: la vasija entre las dos.`,
    camara: {
      a: "PLANO MEDIO de la madre cogiendo el palo de la pared, con la vasija en primer término y desenfocada.",
      b: "la cámara ha RODEADO la vasija siguiendo el giro de la muchacha: PLANO GENERAL desde el otro lado del cuarto, con la hija ya detrás del barro y la madre con el palo levantado al otro lado.",
    },
    ini: "la madre coge el palo y la hija todavía está a este lado de la vasija.",
    fin: "la muchacha ha dado la vuelta entera a la vasija y está parapetada detrás de ella, con la madre enfrente y el barro entre las dos.",
  }, "golpe que alcanza a la hija, sangre, herida, violencia explicita"),

  // b4 — El golpe quebró el barro. La tierra se abrió.
  esc("b4a", [ref("vasija_gacha")], {
    comun: "Penumbra con el fogón. El golpe cayendo sobre el barro. Nadie sale herido: lo que se rompe es la vasija. Objeto ancla: la panza de la vasija.",
    camara: {
      a: "PLANO MACRO de la panza de barro con la punta de la sana entrando por un borde.",
      b: "la cámara ha RETROCEDIDO deprisa y ha bajado al suelo: PLANO MEDIO BAJO con la vasija partida y la chicha saliendo hacia el objetivo.",
    },
    ini: "la punta toca el barro y aparece la primera línea de fractura.",
    fin: "la vasija se ha partido en dos y la chicha sale a borbotones corriendo por el suelo de tierra; el palo ha quedado caído a un lado.",
  }, "personas heridas, sangre, grito, violencia sobre un cuerpo"),
  esc("b4b", [ref("casa_barro_paja"), ref("pozo_donato")], {
    comun: "Luz de día entrando por la puerta. La chicha corriendo y la tierra abriéndose para recibirla entera. Objeto ancla: el punto por donde se hunde.",
    camara: {
      a: "PLANO MACRO a ras de suelo siguiendo la chicha que avanza por la tierra apisonada hacia la puerta.",
      b: "la cámara ha SALIDO de la casa con el líquido y se ha elevado: PICADO ALTO del patio con un hueco redondo abriéndose en el suelo y la chicha entrando en él.",
    },
    ini: "el hilo de chicha avanza por el suelo hacia la puerta.",
    fin: "desde arriba, en mitad del patio, se ha abierto un hueco redondo que se está tragando el derrame entero.",
  }, "abismo infernal, fuego, humo, personas cayendo, rayos"),

  // b5 — Quedó un pozo. «Que la tierra guarde lo que la casa no contiene». (CITA)
  esc("b5a", [ref("pozo_donato")], {
    comun: "Luz de día. EL MISMO pozo redondo de la referencia con aquella misma agua, convertida. Aquí es un episodio del camino, no el asunto: se cuenta en un plano. Objeto ancla: el agua nueva.",
    camara: {
      a: "PLANO CENITAL cerrado sobre la superficie recién formada, todavía turbia de chicha.",
      b: "la cámara se ha ELEVADO hasta un PLANO GENERAL en picado: el pozo redondo en la hondonada de tierra ocre y, al fondo, el valle de Hunza.",
    },
    ini: "el agua está turbia y todavía se le ve el color de la bebida.",
    fin: "desde arriba el pozo ha quedado redondo y quieto, con el agua ya oscura y verdosa, en mitad de la hondonada.",
  }, "oro, tesoro, brillos, personas, fantasmas"),
  escp("b5b", [ref("familias_muiscas"), ref("pozo_donato")], {
    comun: "Luz de día. La madre diciendo que la tierra guarde lo que la casa ya no puede contener. Lo dice en el borde, sola, sin público. Objeto ancla: su cara.",
    camara: {
      a: "PLANO GENERAL del borde del pozo con ella pequeña y sola de espaldas.",
      b: "la cámara ha AVANZADO y ha rodeado hasta ponerse delante: PRIMER PLANO de su cara hablando al agua, con el pozo desenfocado detrás.",
    },
    ini: "está de espaldas en el borde, mirando hacia abajo.",
    fin: "de cerca se la ve terminando la frase, con la cara seca y sin lágrimas, mirando el agua.",
  }, "llanto teatral, maldicion con efectos, rayos, aureola, gritos"),

  // b6 — Subía a los cojines de piedra. Encontró el cercado en silencio.
  escp("b6a", [ref("hunzahua_zaque"), ref("cojines_roca"), ref("altiplano_noche")], {
    comun: `Azul de antes del amanecer. ${HUNZA} subiendo a LOS MISMOS cojines de piedra de la referencia —dos discos circulares lisos tallados sobre una misma roca— donde la ciudad adoraba al sol. Objeto ancla: los dos discos de piedra.`,
    camara: {
      a: "PLANO MEDIO por detrás de él subiendo la roca en la oscuridad.",
      b: "la cámara se ha ADELANTADO y ha basculado a CENITAL sobre la roca: PLANO CENITAL de los dos discos tallados con él de pie sobre uno de ellos, pequeño.",
    },
    ini: "sube de espaldas por la roca todavía a oscuras.",
    fin: "desde arriba se ven los dos discos lisos de arenisca y él en pie sobre uno, de cara al este, con la primera claridad llegando.",
  }, "ceremonia, sacerdotes, fuego, altares, aureola, sacrificios"),
  escp("b6b", [ref("hunzahua_zaque"), ref("cercado_bacata"), ref("familias_muiscas")], {
    comun: `Luz de primera mañana. ${HUNZA} bajando y encontrando el cercado en silencio: la gente reunida, sin fiesta, sin miradas de zaque. Lo que pierde es el reconocimiento. Objeto ancla: las caras que no lo miran.`,
    camara: {
      a: "PLANO MEDIO por detrás de él entrando en el patio, con la gente de frente al fondo.",
      b: "la cámara ha girado y AVANZADO entre la gente: PLANO MEDIO de tres o cuatro caras de cerca, todas con la vista en el suelo o vueltas a un lado.",
    },
    ini: "entra en el patio y la gente está reunida y quieta.",
    fin: "de cerca, ninguna de las caras está vuelta hacia él: miran al suelo o a otro lado, y nadie le habla.",
  }, "insultos, gritos, violencia, expulsion, piedras, burla"),

  // b7 — Maldijo la tierra desde el alto. El valle quedó estéril.
  escp("b7a", [ref("hunzahua_zaque"), ref("altiplano_noche"), ref("sabana_linderos")], {
    comun: `Viento fuerte en el alto que domina el valle por el oeste. ${HUNZA} maldiciendo la tierra. NO es ira contra la madre: es lo que sale cuando deja de ser reconocido. Objeto ancla: el valle debajo.`,
    camara: {
      a: "PLANO MEDIO de él en el filo con el viento moviéndole la manta, de espaldas al valle.",
      b: "la cámara ha girado ciento ochenta grados por detrás de él y ha retrocedido: GRAN PLANO GENERAL del valle entero visto desde el alto, con él pequeño en un borde.",
    },
    ini: "está de pie en el filo con la boca abierta y el viento en contra.",
    fin: "desde el filo se ve el valle completo abajo, con el viento barriéndolo de punta a punta y las nubes corriendo por encima.",
  }, "rayos, fuego, efectos magicos, calaveras, simbolos, demonios"),
  esc("b7b", [ref("sabana_linderos"), ref("sabana_cultivos")], {
    comun: "Luz dura con viento. El valle estéril, batido por vientos fuertes, sin fuerza para dar cosechas. Objeto ancla: la sementera vacía.",
    camara: {
      a: "PLANO MACRO de un surco con las matas secas y la tierra levantándose en polvo.",
      b: "la cámara se ha ELEVADO hasta un GRAN PLANO GENERAL en picado del valle entero, seco y barrido, con el polvo corriendo por todas las parcelas.",
    },
    ini: "las matas del surco están secas y el polvo empieza a levantarse.",
    fin: "desde arriba se ve el valle completo sin un solo verde, con el viento arrastrando polvo por todas las parcelas de lado a lado.",
  }, "fuego, incendio, calaveras, cadaveres, personas, dramatismo"),

  // b8 — La llamó con la tata. Una tiradera los guio hasta Susa.
  escp("b8a", [ref("hunzahua_zaque"), ref("hermana_hunzahua"), ref("casa_barro_paja")], {
    comun: `Luz de tarde. Él la llama con la tata, la trompeta de palo, y ella DEJA la casa de la madre y lo sigue: es decisión de ella, no arrastre. Objeto ancla: el umbral de la casa.`,
    camara: {
      a: "PLANO MEDIO de él soplando la trompeta de palo en el camino, lejos de la casa.",
      b: "la cámara ha RETROCEDIDO hasta el umbral de la casa y mira desde dentro: PLANO GENERAL enmarcado por el vano, con ella cruzándolo por su propio pie y él esperando al fondo del camino.",
    },
    ini: "él sopla la tata a media distancia y la casa está cerrada.",
    fin: "desde dentro de la casa se la ve cruzar el umbral y salir al camino sola, sin que nadie la lleve, con él esperando al fondo.",
  }, "arrastrar, forcejeo, rapto, violencia, llanto, persecucion"),
  escp("b8b", [ref("hunzahua_zaque"), ref("hermana_hunzahua"), ref("sendero_territorio")], {
    comun: `Luz de tarde larga. No sabían por dónde partir: él lanza al aire una tiradera que suena con un cascabel y el rumor del viaje los va guiando. Objeto ancla: la tiradera en el aire.`,
    camara: {
      a: "PLANO MEDIO de él lanzando la tiradera hacia arriba, con ella detrás mirando.",
      b: "la cámara ha SEGUIDO a la tiradera en el aire y ha subido con ella: GRAN PLANO GENERAL en picado del territorio con los dos diminutos abajo y el camino hacia Susa abriéndose al fondo.",
    },
    ini: "la tiradera sale de su mano y todavía está a la altura de la cabeza.",
    fin: "desde arriba se ve por dónde ha caído y hacia dónde apunta: un camino largo hacia el norte, con los dos empezando a andarlo, muy pequeños.",
  }, "magia visible, resplandor, estelas brillantes, rayos, particulas"),

  // b9 — El niño nació y lo dejaron hecho piedra en una cueva.
  escp("b9a", [ref("hermana_hunzahua"), ref("cueva_sierra")], {
    comun: `Penumbra fría en la boca de LA MISMA cueva de la referencia, en Susa. A ella le dan los dolores del parto. NO hay sangre ni desnudez: se cuenta por las manos y por la espera. Objeto ancla: sus manos agarradas a la roca.`,
    camara: {
      a: "PLANO MACRO de sus dos manos apretando el canto de piedra de la entrada.",
      b: "la cámara ha RETROCEDIDO fuera de la cueva y ha subido: PLANO GENERAL de la ladera con la boca oscura de la cueva pequeña en la falda del monte y el valle abajo en penumbra.",
    },
    ini: "las manos aprietan la piedra hasta blanquear los nudillos.",
    fin: "desde fuera y desde arriba la cueva es un punto oscuro en la ladera y la sierra entera está quieta alrededor: lo que pasa dentro no se ve.",
  }, "parto explicito, sangre, desnudez, dolor teatral, bebe visible"),
  esc("b9b", [ref("cueva_sierra"), ref("piedra_huella_iza")], {
    comun: "Penumbra fría dentro de la cueva. Lo dejan convertido en piedra, sin atreverse a cargar con él. Es ABANDONO, no muerte: lo que hay en el suelo es una piedra pequeña y redondeada, no un cuerpo. Objeto ancla: la piedra en el suelo de la cueva.",
    camara: {
      a: "PLANO MACRO de una piedra pequeña, gris y redondeada, apoyada en el suelo de roca sobre un lienzo de algodón crudo.",
      b: "la cámara ha RETROCEDIDO hasta la boca de la cueva y ha girado hacia fuera: PLANO GENERAL a contraluz con las dos siluetas de ellos alejándose por la ladera y la piedra quedando atrás, en sombra.",
    },
    ini: "la piedra pequeña está sobre el lienzo en el suelo de la cueva y no hay nadie en cuadro.",
    fin: "desde dentro y a contraluz se ve la boca de la cueva y, más allá, las dos figuras bajando la ladera sin volverse; dentro sólo queda la piedra sobre el lienzo.",
  }, "bebe, cadaver, sangre, entierro, tumba, llanto, infanticidio"),

  // b10 — Siguieron hasta las tierras de Bogotá, bajo el Salto.
  escp("b10a", [ref("hunzahua_zaque"), ref("hermana_hunzahua"), ref("sendero_territorio"), ref("salto_tequendama")], {
    comun: `Luz de camino largo. Los dos siguiendo con la misma guía hasta las tierras de Bogotá, cerca de Ciénega, por bajo del Salto del Tequendama. Objeto ancla: el camino que llevan hecho.`,
    camara: {
      a: "PLANO MEDIO lateral de los dos caminando, cansados, con el paisaje pasando detrás.",
      b: "la cámara se ha ELEVADO muchísimo y ha retrocedido: GRAN PLANO GENERAL en picado con los dos diminutos en el camino y, al fondo, la niebla que levanta el salto.",
    },
    ini: "caminan de perfil, muy cerca del objetivo, con los pies polvorientos.",
    fin: "desde arriba se ve el trecho enorme que llevan andado y, al final del camino, la columna de niebla del salto esperándolos.",
  }, "huida con persecucion, soldados, violencia, dramatismo"),
  escp("b10b", [ref("hunzahua_zaque"), ref("hermana_hunzahua"), ref("rio_prueba")], {
    comun: `Luz de tarde sobre la corriente. Al cruzar el río sienten el peso de todo el camino y de la tierra ajena, se miran y DECIDEN convertirse en dos piedras. Nadie los transforma y no hay ningún gesto de magia. Objeto ancla: las dos caras mirándose.`,
    camara: {
      a: "PLANO GENERAL de los dos a media corriente, con el agua por las rodillas y el río ancho alrededor.",
      b: "la cámara ha AVANZADO por el agua hasta ellos: PLANO MEDIO CORTO de las dos caras enfrentadas en mitad del río, con la corriente pasando entre sus piernas.",
    },
    ini: "están parados a media corriente, mirando cada uno hacia una orilla distinta.",
    fin: "se han girado el uno hacia el otro y se sostienen la mirada, quietos en mitad del agua: la decisión está tomada y no hay nada más.",
  }, "magia visible, resplandor, particulas, rayos, petrificacion con efectos, agonia"),

  // b11 — Hoy están en la mitad de la corriente. El pozo sigue abierto.
  esc("b11a", [ref("rio_prueba"), ref("piedras_funza")], {
    comun: "Luz de tarde larga. DOS piedras grandes, grises y redondeadas, en la mitad de la corriente, con el agua pasando entre ellas. Son dos piedras: no tienen caras, ni rasgos, ni forma humana. Objeto ancla: el agua que pasa entre las dos.",
    camara: {
      a: "PLANO MACRO del agua rompiendo contra el canto de una de las piedras.",
      b: "la cámara ha RETROCEDIDO y ha subido hasta un PLANO GENERAL del tramo de río, con las dos piedras juntas en el centro de la corriente y las riberas a los lados.",
    },
    ini: "el agua rompe contra la piedra muy cerca del objetivo.",
    fin: "desde lejos se ven las dos piedras en mitad del río, a un paso la una de la otra, con la corriente pasando entre ellas sin moverlas.",
  }, "rostros en la piedra, figuras humanas, ojos, brazos, personas, texto"),
  esc("b11b", [ref("pozo_donato"), ref("sabana_linderos"), ref("rio_prueba")], {
    comun: "Última luz. Tres cosas que siguen ocurriendo a la vez: el pozo sigue abierto en Tunja, el viento del valle no descansa y el río pasa entre las dos piedras que esperan sin apuro. El cierre NO cierra. Objeto ancla: las tres cosas.",
    camara: {
      a: "PLANO MEDIO del pozo de Tunja con el viento rizando su superficie.",
      b: "la cámara ha SUBIDO y ha hecho un travelling larguísimo por encima del valle hasta el río: GRAN PLANO GENERAL final en el que caben el valle batido por el viento y, abajo y al fondo, el tramo de río con las dos piedras.",
    },
    ini: "el agua del pozo se riza con el viento y no se ve nada más.",
    fin: "desde muy arriba se ve el valle entero barrido por el viento, el pozo pequeño en un extremo y, al fondo, el río bajando con las dos piedras en mitad de la corriente.",
  }, "personas, tumbas, monumentos, texto, simbolos, final feliz dibujado"),
]);
