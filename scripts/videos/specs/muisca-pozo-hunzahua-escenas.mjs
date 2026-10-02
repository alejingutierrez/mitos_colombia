// Keyframes de El pozo de Hunzahúa — 10 bloques × 2 escenas × 2 cuadros
// = 40 imágenes ≈ 100 s.
// Guion: guion-el-pozo-de-hunzahua-v2.json (N=10)
// Acta:  acta-el-pozo-de-hunzahua.json (20 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _muisca-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · Esta ficha NO es `hunzahua`. Aquí el mito es EL POZO: cómo la chicha
//   derramada se volvió agua que no se acaba y cómo siglos después un
//   forastero se arruinó tratando de vaciarla. La falta es el prólogo del
//   lugar, no el asunto: se cuenta en dos bloques y sin escena de alcoba.
// · El golpe de la madre NO alcanza a la hija: iba para ella y cae sobre la
//   olla. Nadie es herido; lo que se rompe es el barro.
// · El pozo NO es castigo: es lo que quedó. La falta quedó guardada en aquel
//   hueco y POR ESO sus aguas nunca se han acabado.
// · El oro NUNCA se confirma: NO mostrar oro bajo el agua en ninguna imagen.
// · Donato NO es castigado por nadie: se arruina solo, tirando a un lado todo
//   lo que no brilla. Y lo que el muchacho encuentra —la huella de unos dedos
//   antiguos en un tiesto— es exactamente lo que él descartó.
//
// GUION DE LUZ: vapor de la chicha en penumbra → luz de casa callada → golpe
// en la penumbra → chicha corriendo a la luz del día → tarde de rumor →
// mañana de zanja → mediodía de baldes → noche que devuelve el agua → luz
// rasante sobre un tiesto → tarde de abandono.

import { DIRECCION, AVOID_BASE, ref, esc, escp, armar } from "./_muisca-comun.mjs";

export const SPEC_NAME = "muisca-pozo-hunzahua-escenas";
export const OUT_DIR = "muiscas/videos/el-pozo-de-hunzahua/keyframes";
export { DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; escena de alcoba, pareja en la cama, insinuacion sexual, desnudez; golpe que alcanza a una persona, herida, sangre, moraton, violencia domestica explicita; oro visible bajo el agua, tesoro, monedas, cofres, lingotes; maquinaria moderna, bombas, excavadoras, cascos de obra; fantasmas, apariciones, resplandor en el pozo";
export const PALETTE =
  "ocre rojizo de barro cocido, crema de algodon crudo, pardo de chicha y de lodo, verde oscuro de agua estancada, gris de madera de entibado; la unica luz calida es la del fogon; sin oro y sin saturacion";

const HERMANA =
  "LA MISMA hermana de Hunzahúa de la referencia (mujer joven de unos veinte años, rostro sereno y reservado, pelo negro liso en trenza, manta de algodón crudo del pecho a la pantorrilla anudada al hombro con cenefa tejida sobria en verde oscuro, descalza)";
const HUNZA =
  "EL MISMO Hunzahúa de la referencia (hombre joven de unos treinta años, rostro firme y algo endurecido, pelo negro recogido bajo una cinta tejida, manta de algodón crudo de tejido fino anudada al hombro derecho con dos cenefas geométricas en ocre, descalzo)";
const DONATO =
  "EL MISMO Donato de la referencia (hombre de unos cuarenta y cinco años, de rasgos europeos, barba corta y cara curtida y ansiosa, calzón de paño, camisa de lino sucia arremangada, chaleco abierto y botas de cuero embarradas hasta la caña)";
const MUCHACHO =
  "EL MISMO muchacho de la referencia (joven de unos dieciséis años, rostro despierto, pelo negro liso corto, manta corta de algodón crudo sin cenefas ceñida a la cintura, descalzo)";

export const ITEMS = armar([
  // b1 — Una falta innombrable. La chicha hervía siempre en aquella casa.
  esc("b1a", [ref("vasija_gacha"), ref("casa_barro_paja")], {
    comun: "Penumbra de interior con el resplandor bajo de un fogón. LA MISMA vasija de barro de la referencia, panzuda y de boca ancha, con la chicha cociendo dentro y el vapor subiendo. En esta casa la chicha hierve siempre. Objeto ancla: la boca de la vasija.",
    camara: {
      a: "PLANO MACRO sobre la superficie de la chicha, con las burbujas y el vapor llenando el cuadro.",
      b: "la cámara ha RETROCEDIDO atravesando el vapor y ha subido: PLANO GENERAL del interior del bohío entero, con la vasija en el centro sobre sus tres piedras y el fogón a un lado.",
    },
    ini: "la chicha hierve despacio y el vapor sube recto muy cerca del objetivo.",
    fin: "desde el fondo del cuarto se ve la casa entera en penumbra con la vasija grande en el centro y el vapor subiendo hasta la viga: no hay nadie dentro.",
  }, "personas, rostros, fuego grande, incendio, alcohol moderno, botellas"),
  escp("b1b", [ref("hunzahua_zaque"), ref("hermana_hunzahua"), ref("casa_barro_paja")], {
    comun: `Penumbra de la casa. ${HUNZA} y ${HERMANA}, criados bajo el mismo techo. La falta se dice por la distancia que YA NO hay entre ellos, no por ninguna escena: están sentados demasiado cerca en un cuarto donde deberían estar lejos. Objeto ancla: el espacio entre los dos.`,
    camara: {
      a: "PLANO GENERAL del interior desde la puerta, los dos sentados a un lado del cuarto y pequeños.",
      b: "la cámara ha AVANZADO hasta ellos y ha bajado a la altura de las esteras: PLANO MEDIO CORTO con los dos de perfil, muy cerca uno del otro y sin tocarse.",
    },
    ini: "desde la puerta se ven dos figuras sentadas en el mismo lado del cuarto.",
    fin: "de cerca se ve que están sentados hombro con hombro, callados y mirando al frente, sin tocarse y sin mirarse.",
  }, "escena de alcoba, cama, desnudez, beso, insinuacion sexual, abrazo"),

  // b2 — Se hizo esposo de su hermana. La madre lo descubrió y calló.
  escp("b2a", [ref("hunzahua_zaque"), ref("hermana_hunzahua"), ref("cercado_bacata")], {
    comun: `Luz de mañana en el cercado. ${HUNZA} es el zaque: la gente lo trata como tal. Y ${HERMANA} está a su lado en el sitio que no le corresponde. Objeto ancla: los dos sitios en la estera.`,
    camara: {
      a: "PLANO MEDIO de él sentado recibiendo a alguien, con ella fuera de cuadro.",
      b: "la cámara ha RETROCEDIDO y ha subido hasta un PICADO del patio: se ve el conjunto y se entiende que ella está sentada en la estera del zaque, no en la de las hijas.",
    },
    ini: "él está sentado atendiendo a un hombre que le habla.",
    fin: "desde arriba se ve el patio entero: él en su estera, ella en la misma estera a su lado, y la gente alrededor en silencio mirando esa colocación.",
  }, "boda, ceremonia, sacerdote, corona, trono, escena de alcoba"),
  escp("b2b", [ref("hermana_hunzahua"), ref("familias_muiscas"), ref("casa_barro_paja")], {
    comun: "Luz gris de interior. La madre —mujer mayor de LAS MISMAS familias de la referencia— viendo crecer el vientre de la hija. Lo entiende y NO DICE NADA: la imagen tiene que leer silencio, no escándalo. Objeto ancla: la cara de la madre.",
    camara: {
      a: "PLANO DETALLE del vientre de la muchacha bajo la manta, de perfil y a contraluz de la puerta.",
      b: "la cámara ha girado y RETROCEDIDO hasta la otra esquina del cuarto: PRIMER PLANO de la cara de la madre mirando desde la penumbra, sin decir palabra.",
    },
    ini: "el vientre se marca bajo la manta contra la luz de la puerta.",
    fin: "en la esquina oscura del cuarto, la cara de la madre está quieta y con la boca cerrada: entendió y no ha dicho nada.",
  }, "gritos, bofetada, llanto teatral, desnudez, escandalo, violencia"),

  // b3 — Tomó la sana. El golpe iba para la hija; quebró el barro.
  escp("b3a", [ref("familias_muiscas"), ref("vasija_gacha"), ref("hermana_hunzahua")], {
    comun: `Penumbra con el fogón encendido. La madre tomando la sana, el palo largo de mover la chicha, mientras ${HERMANA} está junto a LA MISMA vasija de la referencia. Objeto ancla: la sana.`,
    camara: {
      a: "PLANO MACRO de las manos de la madre cerrándose sobre el palo apoyado en la pared.",
      b: "la cámara ha RETROCEDIDO y ha rodeado la vasija: PLANO GENERAL del cuarto con las dos mujeres y la vasija entre ellas, la madre con el palo ya levantado.",
    },
    ini: "las manos se cierran sobre el palo, que todavía está apoyado en la pared.",
    fin: "desde el otro lado del cuarto se ve a la madre con la sana levantada, a la hija girando detrás de la vasija y el barro entre las dos.",
  }, "golpe que alcanza a la hija, sangre, herida, grito, violencia explicita"),
  esc("b3b", [ref("vasija_gacha")], {
    comun: "Penumbra con el fogón. EL MISMO barro de la referencia recibiendo el golpe que iba para la muchacha. Nadie sale herido: lo que se rompe es la vasija. Objeto ancla: la panza de la vasija.",
    camara: {
      a: "PLANO MACRO de la panza de barro, con la punta de la sana entrando por un borde del cuadro.",
      b: "la cámara ha RETROCEDIDO deprisa y ha bajado al suelo: PLANO MEDIO BAJO con la vasija partida en dos y la chicha saliendo hacia el objetivo.",
    },
    ini: "la punta del palo toca el barro y en la superficie aparece la primera línea de fractura.",
    fin: "la vasija se ha partido y la chicha sale a borbotones por la brecha, corriendo por el suelo de tierra hacia la cámara; la sana ha quedado caída al lado.",
  }, "personas heridas, sangre, grito, llanto, violencia sobre un cuerpo"),

  // b4 — La chicha corrió y la tierra se abrió.
  esc("b4a", [ref("casa_barro_paja"), ref("vasija_gacha")], {
    comun: "Luz de día entrando por la puerta. La chicha corriendo por la tierra como un río pequeño y tibio, saliendo de la casa. Objeto ancla: el hilo de chicha.",
    camara: {
      a: "PLANO MACRO a ras de suelo siguiendo el hilo de chicha que avanza por la tierra apisonada.",
      b: "la cámara ha SEGUIDO el líquido fuera de la casa y ha subido: PLANO GENERAL desde el patio, con la chicha saliendo por el umbral y extendiéndose por el suelo.",
    },
    ini: "el hilo tibio avanza por la tierra del cuarto, muy cerca del objetivo.",
    fin: "visto desde fuera, el líquido ha salido por el umbral y se ha extendido en una mancha ancha por el patio, sin que nadie lo detenga.",
  }, "sangre, rio de sangre, personas, dramatismo, fuego"),
  esc("b4b", [ref("pozo_donato"), ref("casa_barro_paja")], {
    comun: "Luz de día. La tierra abriéndose para recibir la chicha, y del derrame quedando un pozo de agua donde antes había sido bebida. NO es un castigo: es lo que quedó. Objeto ancla: el hueco que se forma.",
    camara: {
      a: "PLANO MEDIO BAJO sobre el suelo del patio, con la mancha de chicha hundiéndose en la tierra por un punto.",
      b: "la cámara se ha ELEVADO en vertical hasta un PICADO ALTO: desde arriba se ve EL MISMO pozo redondo de la referencia, hondo y de agua oscura, en mitad de la hondonada de tierra ocre.",
    },
    ini: "la chicha empieza a hundirse por un punto del suelo y la tierra cede alrededor.",
    fin: "desde arriba hay un pozo redondo y hondo lleno de agua oscura donde estaba el patio, con el borde de hierba vencida alrededor.",
  }, "abismo infernal, fuego, humo, personas cayendo, dramatismo, rayos"),

  // b5 — Se dijo que el oro fue arrojado ahí. Nadie lo vio.
  escp("b5a", [ref("familias_muiscas"), ref("pozo_donato"), ref("altiplano_noche")], {
    comun: "Luz de tarde con viento. Gente de LAS MISMAS familias de la referencia hablando del pozo cuando llegaron los hombres de afuera: se dijo que el oro del zaque había sido arrojado ahí. Es un rumor, y la imagen lo trata como rumor. Objeto ancla: el pozo al fondo.",
    camara: {
      a: "PLANO MEDIO CORTO de dos hombres hablando bajo, con el pozo desenfocado detrás de ellos.",
      b: "la cámara ha RETROCEDIDO dejándolos atrás y ha avanzado hasta el borde del agua: PLANO CENITAL sobre la superficie oscura, sin nadie en cuadro.",
    },
    ini: "dos hombres hablan de algo mirando hacia atrás, hacia el agua.",
    fin: "sobre el agua no se ve nada: la superficie está oscura y verdosa y no deja ver el fondo. NO hay ningún destello de oro.",
  }, "oro bajo el agua, destellos dorados, tesoro, monedas, cofres, buzos"),
  esc("b5b", [ref("pozo_donato")], {
    comun: "Luz de tarde nublada. EL MISMO pozo de la referencia: redondo, muy hondo, de aguas oscuras y verdosas. La profundidad se volvió promesa, y eso es todo lo que hay. Objeto ancla: la profundidad.",
    camara: {
      a: "PLANO CENITAL cerrado sobre el centro del agua, donde el reflejo del cielo se corta y empieza la negrura.",
      b: "la cámara se ha ELEVADO muchísimo hasta un GRAN PLANO GENERAL: el pozo es un círculo oscuro pequeño en mitad del altiplano abierto, con los cerros de Tunja al fondo.",
    },
    ini: "en el centro del agua el reflejo se acaba y hay sólo negro.",
    fin: "desde muy arriba el pozo es un punto oscuro y redondo en una llanura enorme: pequeño por fuera y sin fondo por dentro.",
  }, "oro, brillos, personas, barcas, dramatismo, monstruos"),

  // b6 — Donato le creyó. Abrió una zanja; al amanecer el pozo seguía igual.
  escp("b6a", [ref("donato_forastero"), ref("pozo_donato"), ref("familias_muiscas")], {
    comun: `Luz de mañana. ${DONATO} llegando con trabajadores, palas, cuerdas y conductos, y mandando abrir una zanja para que el agua escape cuesta abajo. Objeto ancla: la zanja.`,
    camara: {
      a: "PLANO MEDIO de él de pie señalando la pendiente, con el pozo detrás y los trabajadores entrando por los bordes.",
      b: "la cámara ha SEGUIDO la línea que señala, bajando por la pendiente a ras de tierra: PLANO MACRO del corte de la zanja recién abierta, con el agua empezando a correr por ella.",
    },
    ini: "él señala la pendiente y la tierra todavía está entera.",
    fin: "por la zanja abierta baja ya un chorro de agua turbia entre las paredes de barro recién cortadas.",
  }, "maquinaria, excavadora, bomba, cascos de obra, dinamita"),
  esc("b6b", [ref("pozo_donato")], {
    comun: "Del anochecer al amanecer sobre el mismo sitio. El primer día el nivel bajó un poco; a la mañana siguiente el pozo estaba igual. Objeto ancla: la marca de nivel en la pared del pozo.",
    camara: {
      a: "PLANO MEDIO de la pared interior del pozo al anochecer, con una franja húmeda por encima del agua marcando lo que bajó.",
      b: "la cámara ha SUBIDO y ha retrocedido hasta el borde: PLANO GENERAL del pozo al amanecer siguiente, visto desde arriba y de lado.",
    },
    ini: "hay una franja de pared mojada por encima del agua: el nivel bajó un palmo.",
    fin: "a la mañana siguiente el agua ha vuelto a tapar esa franja y el pozo está exactamente igual que antes, con la zanja escurriendo en vano por un lado.",
  }, "personas, fantasmas, resplandor, oro, dramatismo"),

  // b7 — Sacaron barro en baldes. Donato tiraba lo que no brillaba.
  escp("b7a", [ref("donato_forastero"), ref("pozo_donato"), ref("familias_muiscas")], {
    comun: "Luz dura de mediodía. Trabajadores sacando barro en baldes y afirmando las paredes con madera. Es trabajo pesado y sucio, no una aventura. Objeto ancla: el balde de barro.",
    camara: {
      a: "PLANO MACRO de un balde de barro siendo izado, con la cuerda tensa y el lodo chorreando.",
      b: "la cámara ha SUBIDO con el balde hasta el borde y ha retrocedido: PLANO GENERAL del pozo entibado, con las cuerdas, la madera de las paredes y cinco hombres trabajando alrededor.",
    },
    ini: "el balde sube chorreando lodo, muy cerca del objetivo.",
    fin: "desde el borde se ve la obra entera: el pozo entibado con madera, las cuerdas cruzándolo y los hombres subiendo y bajando baldes por las paredes.",
  }, "maquinaria, cascos, andamios metalicos, dinamita, accidentes"),
  escp("b7b", [ref("donato_forastero"), ref("tiesto_huella_dedos")], {
    comun: `Luz dura. ${DONATO} examinando cada objeto que sale del barro y tirándolo a un lado si no brilla: piedras oscuras, raíces y fragmentos de vasijas. Objeto ancla: el montón de desechos.`,
    camara: {
      a: "PLANO MACRO de sus manos girando un tiesto de barro contra la luz, mirándolo de cerca.",
      b: "la cámara ha SEGUIDO el tiesto cuando lo tira y ha bajado al suelo: PLANO MEDIO del montón de desechos, con los fragmentos amontonados y sus botas embarradas entrando por un borde.",
    },
    ini: "sus manos giran el tiesto contra la luz buscándole un brillo.",
    fin: "el tiesto ha ido a parar al montón de desechos junto a otros veinte, y sus botas ya se alejan del montón sin volver a mirarlo.",
  }, "oro, tesoro, monedas, brillos, cofres, alegria, hallazgo"),

  // b8 — La noche devolvía el agua. Un muchacho recogió un fragmento.
  esc("b8a", [ref("pozo_donato"), ref("altiplano_noche")], {
    comun: "Noche cerrada sobre el pozo. La noche devuelve el agua; las herramientas se gastan y los días se gastan. Objeto ancla: el nivel del agua.",
    camara: {
      a: "PLANO MEDIO del fondo del pozo casi seco al anochecer, con el barro removido y las palas clavadas.",
      b: "la cámara ha SUBIDO despacio hasta el borde, ya de madrugada: PLANO CENITAL del pozo lleno otra vez hasta arriba, con las palas asomando apenas bajo la superficie.",
    },
    ini: "al anochecer el fondo está casi descubierto y las palas clavadas en el lodo.",
    fin: "de madrugada el agua ha vuelto hasta el borde y de las palas sólo asoman los mangos: el trabajo de un día entero se deshizo solo.",
  }, "fantasmas, resplandor, monstruos, oro, personas"),
  escp("b8b", [ref("muchacho_lampara"), ref("tiesto_huella_dedos")], {
    comun: `Luz rasante de primera hora. ${MUCHACHO}, que lleva agua a los obreros, recogiendo del montón de desechos UN MISMO tiesto de la referencia: barro cocido ocre rojizo con LAS HUELLAS DE UNOS DEDOS marcadas en la cara interior. Objeto ancla: las huellas de los dedos.`,
    camara: {
      a: "PLANO MEDIO de él agachado junto al montón de desechos, con el cántaro de agua a un lado.",
      b: "la cámara ha AVANZADO hasta sus manos y se ha puesto cenital: PLANO MACRO del tiesto limpio en su palma, con las huellas de los dedos antiguos marcadas con nitidez en la superficie.",
    },
    ini: "está agachado revolviendo el montón y acaba de coger algo.",
    fin: "en su palma, muy de cerca, se ve el tiesto limpio de tierra y las huellas de unos dedos que apretaron ese barro cuando estaba blando.",
  }, "oro, brillo, tesoro, resplandor, magia, fantasmas"),

  // b9 — «Quizá usted busca la cosa equivocada». (CITA)
  escp("b9a", [ref("donato_forastero"), ref("muchacho_lampara"), ref("tiesto_huella_dedos")], {
    comun: `Luz de tarde junto al pozo. ${DONATO} y ${MUCHACHO} con el tiesto entre los dos. Él dice que eso no es un tesoro. Objeto ancla: el tiesto en la mano del muchacho.`,
    camara: {
      a: "PLANO MEDIO de los dos de perfil, con el tiesto en el centro del cuadro entre ellos.",
      b: "la cámara ha RODEADO hasta ponerse detrás del muchacho: PLANO MEDIO CORTO de la cara de Donato, que mira el tiesto por encima del hombro del chico y aparta la vista.",
    },
    ini: "el muchacho le tiende el tiesto y él lo mira de reojo.",
    fin: "desde detrás del chico se ve a Donato apartar la vista del tiesto y volverla hacia el pozo: no le interesa lo que tiene delante.",
  }, "pelea, gritos, golpes, humillacion, llanto"),
  escp("b9b", [ref("muchacho_lampara"), ref("pozo_donato")], {
    comun: `Luz de tarde. ${MUCHACHO} respondiendo que entonces quizá él busca la cosa equivocada. No lo acusa: nombra el error. Objeto ancla: su cara.`,
    camara: {
      a: "PRIMER PLANO de la cara del muchacho hablando, tranquilo.",
      b: "la cámara ha RETROCEDIDO y ha subido hasta un PLANO GENERAL de la escena: él pequeño junto al montón de desechos, Donato mirando el pozo de espaldas y la obra entera alrededor.",
    },
    ini: "habla de cerca, sin levantar la voz.",
    fin: "desde lejos se ve la escena completa: el chico con el tiesto junto al montón de lo descartado y, al otro lado, Donato de espaldas mirando el agua.",
  }, "burla, humillacion, gritos, violencia, aureola"),

  // b10 — Perdió su fortuna. El agua guarda algo más difícil.
  escp("b10a", [ref("donato_forastero"), ref("pozo_donato")], {
    comun: `Luz de tarde que se va. ${DONATO} ordenando un último desagüe, creyendo ver un resplandor bajo la superficie y metiendo las manos. Sólo saca barro. NO hay oro en ninguna parte del cuadro. Objeto ancla: sus manos en el agua.`,
    camara: {
      a: "PLANO MEDIO de él inclinado sobre el agua con los brazos metidos hasta el codo.",
      b: "la cámara ha DESCENDIDO hasta el agua y se ha puesto cenital: PLANO MACRO de sus manos saliendo de la superficie con un puñado de barro escurriendo entre los dedos, y nada más.",
    },
    ini: "tiene los brazos metidos en el agua oscura hasta el codo.",
    fin: "las manos salen del agua con un puñado de barro que se le escurre entre los dedos: no hay nada dentro, ni un destello.",
  }, "oro, brillos, tesoro, monedas, resplandor, hallazgo, alegria"),
  esc("b10b", [ref("pozo_donato"), ref("tiesto_huella_dedos"), ref("altiplano_noche")], {
    comun: "Última luz sobre el pozo abandonado. El pozo conservó su agua pero cambió de nombre, no porque el hombre encontrara una fortuna sino porque perdió la suya queriendo apoderarse de una historia. El agua NO confirma si hay oro: guarda otra cosa. Objeto ancla: el agua quieta.",
    camara: {
      a: "PLANO MACRO de las huellas de dedos en el tiesto, apoyado en el borde de hierba junto al agua.",
      b: "la cámara ha RETROCEDIDO y ha subido hasta un GRAN PLANO GENERAL final: el pozo redondo y quieto en la hondonada, la obra abandonada alrededor —maderas, cuerdas, la zanja inútil— y el altiplano enorme al fondo.",
    },
    ini: "las huellas antiguas se leen con nitidez en el barro cocido, junto al agua.",
    fin: "desde lejos el pozo está entero y lleno como siempre, con las maderas y las cuerdas podridas alrededor y la zanja seca bajando la pendiente sin llevarse nada.",
  }, "oro, tesoro, personas, fantasmas, texto, resplandor"),
]);
