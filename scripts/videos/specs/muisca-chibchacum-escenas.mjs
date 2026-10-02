// Keyframes de Chibchacum — 10 bloques × 2 escenas × 2 cuadros = 40 imágenes ≈ 100 s.
// Guion: guion-chibchacum-v2.json (N=10) · Acta: acta-chibchacum.json (20 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _muisca-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · Chibchacum NO es un dios lejano: es el de los mercados, la fragua y el
//   surco. La fuente lo compara con el báculo en el que uno se apoya sin
//   pensarlo. Esa cercanía es lo que hace grave el castigo, y por eso los
//   cuatro primeros bloques lo ponen SIEMPRE dentro del trabajo de la gente.
// · La inundación NO tiene causa moral grande: fue una murmuración que anduvo
//   de bohío en bohío. La desproporción es del mito y no se corrige.
// · El castigo NO es muerte ni destierro: es QUEDARSE QUIETO. A un dios que
//   caminaba se le ordena no moverse. Toda la imagen lee inmovilidad, no
//   tormento: nada de cadenas, grilletes, látigos ni agonía.
// · Los temblores NO son ira: son CANSANCIO. Pasa la carga de un hombro al
//   otro, y eso es lo que vuelve compasivo el relato.
// · Los dos ríos NO se secan: siguen corriendo porque harán falta.
// · El oro enterrado NO es tesoro: es lo que le ofrecieron, esperando que
//   pueda soltar la carga y volver a los mercados. El cierre es una espera.
//
// DESLINDE CONTRA `el-tequendama` Y `cuchavira`: la apertura de las peñas es
// aquí un PRÓLOGO, no el asunto. Se cuenta en un solo par (b5a) y desde un
// ángulo que aquellos dos no usan: desde el légamo que queda, no desde la
// grieta ni desde el arco.
//
// GUION DE LUZ: mañana de mercado → naranja de la fragua → gris de crecida →
// plomo de refugio → luz que vuelve sobre el légamo → contraluz del reproche
// → penumbra de las raíces → quietud subterránea → temblor de las vasijas →
// oro enterrado bajo tierra.

import { DIRECCION, AVOID_BASE, ref, esc, escp, armar } from "./_muisca-comun.mjs";

export const SPEC_NAME = "muisca-chibchacum-escenas";
export const OUT_DIR = "muiscas/videos/chibchacum/keyframes";
export { DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; globo terraqueo, planeta azul, esfera con continentes, mapamundi; Atlas griego, titan de marmol; cadenas, grilletes, cepos, latigos, tortura; rostro de agonia, gritos, musculatura heroica de comic; oro pulido, joyeria moderna, monedas, cofres del tesoro; catastrofe moderna, gente ahogandose, rescates";
export const PALETTE =
  "pardo de tierra apisonada y barro, crema de algodon crudo, verde apagado de surco, gris plomo de crecida, negro de raiz y profundidad; el naranja solo en la fragua de los plateros y el oro solo mate y enterrado; sin saturacion";

const CHIB =
  "EL MISMO Chibchacum de la referencia (hombre de unos cuarenta años, ancho de hombros y de espalda recta, rostro sereno y curtido, pelo negro recogido en la nuca, manta de algodón crudo anudada al hombro izquierdo con franja tejida ocre en el borde, descalzo)";
const BOCHICA =
  "EL MISMO Bochica de la referencia (anciano, barba blanca al pecho, pelo gris con cinta, manta cruda al hombro, descalzo)";

export const ITEMS = armar([
  // b1 — Conocía los caminos. Lo encontraban en los mercados y en la fragua.
  escp("b1a", [ref("chibchacum_dios"), ref("mercado_bacata")], {
    comun: `Luz abierta de media mañana. ${CHIB} en LA MISMA explanada de trueque de la referencia, entre las mantas extendidas con sal en panes, ovillos de algodón y canastos, y gente de LAS MISMAS familias de la referencia comerciando alrededor. No preside nada: está dentro. Objeto ancla: un pan de sal.`,
    camara: {
      a: "PLANO DETALLE del pan de sal sobre la manta, con unas manos regateando muy cerca del objetivo.",
      b: "la cámara se ha ELEVADO y ha retrocedido hasta un PLANO GENERAL del mercado entero: se ve la explanada llena, los cobertizos de paja y a él de pie en medio, indistinguible de los demás salvo por su manta.",
    },
    ini: "dos manos pesan el pan de sal en la manta y no se ve a nadie más.",
    fin: "desde arriba se ve el mercado entero funcionando —trueques, canastos, gente cruzando— y a él quieto en medio de todo, uno más entre veinte.",
  }, "trono, altar, aureola, gente arrodillada, adoracion, oro en el cuerpo"),
  escp("b1b", [ref("chibchacum_dios"), ref("disco_oro")], {
    comun: `Luz naranja baja de una fragua de plateros, con el resto en penumbra. Dos plateros como LOS MISMOS de la referencia trabajando el oro martillado MATE junto al fuego, y ${CHIB} muy cerca de ellos. Los plateros lo sienten cerca; no lo miran. Objeto ancla: la brasa de la fragua.`,
    camara: {
      a: "PLANO MACRO sobre la brasa y el disco de oro mate apoyado encima, todo naranja y negro.",
      b: "la cámara ha RETROCEDIDO y ha girado hacia la penumbra: PLANO MEDIO en el que se ven los dos plateros inclinados sobre el fuego y, un paso más atrás y casi en sombra, él.",
    },
    ini: "la brasa está avivada y el metal sobre ella empieza a tomar color.",
    fin: "desde atrás se ve la escena entera: los dos plateros golpeando y él detrás, quieto, con la luz naranja dándole sólo en un lado de la cara.",
  }, "oro pulido, joyeria moderna, herreria europea, yunque de hierro, chispas grandes"),

  // b2 — Jamás se ausentaba. Pero los suyos murmuraron de él.
  escp("b2a", [ref("chibchacum_dios"), ref("sendero_territorio"), ref("piraca_labrador")], {
    comun: `Luz plana de mañana. EL MISMO sendero de la referencia entre sementeras. Un labrador como EL MISMO de la referencia y, junto a él, ${CHIB}. Es el báculo en el que uno se apoya sin pensarlo: está ahí antes de que se lo pida. Objeto ancla: el sendero.`,
    camara: {
      a: "PLANO GENERAL del sendero vacío desde lejos, con el labrador solo y pequeño llamando hacia un lado.",
      b: "la cámara ha AVANZADO por el sendero hasta ellos y se ha puesto a su altura: PLANO MEDIO de los dos juntos, hombro con hombro, mirando el mismo surco.",
    },
    ini: "el labrador está solo en el camino, con la mano alzada llamando a alguien que no se ve.",
    fin: "de cerca se ve que Chibchacum ya está a su lado, sin que se le haya visto llegar, y los dos miran juntos hacia el surco.",
  }, "aparicion magica, resplandor, humo, teletransporte dibujado, adoracion"),
  escp("b2b", [ref("familias_muiscas"), ref("casa_barro_paja")], {
    comun: "Luz de tarde entre los bohíos. Gente de LAS MISMAS familias de la referencia hablando bajo de puerta en puerta: la murmuración que anduvo de bohío en bohío. No hay gestos de odio, sólo bocas cerca de oídos. Objeto ancla: las bocas junto a los oídos.",
    camara: {
      a: "PLANO MEDIO CORTO de dos mujeres de perfil, una hablándole al oído a la otra.",
      b: "la cámara ha hecho un TRAVELLING largo de puerta en puerta por el poblado: PLANO GENERAL en movimiento en el que se ven cuatro corrillos distintos haciendo lo mismo delante de cuatro casas.",
    },
    ini: "una mujer le habla al oído a otra, que escucha con la cara vuelta.",
    fin: "recorrido el poblado, se ve que lo mismo está pasando en cuatro puertas a la vez: la murmuración ya dio la vuelta entera al caserío.",
  }, "gritos, peleas, violencia, caricatura de maldad, rostros grotescos"),

  // b3 — Trajo dos ríos. El agua cubrió surcos y apagó los fuegos.
  esc("b3a", [ref("recodo_funza"), ref("sabana_anegada")], {
    comun: "Luz verde gris de tormenta. DOS ríos de papel entrando en la sabana desde dos direcciones distintas, con el agua turbia avanzando sobre los surcos. Los ríos son el Sopó y el Tivitó y seguirán corriendo después. Objeto ancla: el frente de agua.",
    camara: {
      a: "PLANO MEDIO BAJO a ras de surco, con el frente de agua turbia llegando hacia el objetivo entre las matas.",
      b: "la cámara se ha ELEVADO en vertical hasta un PICADO MUY ALTO: desde arriba se ven las dos lenguas de agua entrando por dos lados y juntándose sobre el valle.",
    },
    ini: "el agua llega entre las matas y todavía hay tierra seca por delante.",
    fin: "desde arriba las dos lenguas se han juntado y la sabana entera está siendo cubierta, con los surcos convertidos en rayas bajo el agua.",
  }, "personas, olas de mar, tsunami, rayos, dramatismo moderno"),
  esc("b3b", [ref("disco_oro"), ref("casa_barro_paja")], {
    comun: "Penumbra de un taller de plateros con el agua entrando. La fragua donde fundían el oro está siendo alcanzada por la crecida. Objeto ancla: la brasa.",
    camara: {
      a: "PLANO MACRO sobre la brasa naranja, con el agua turbia entrando por un borde del cuadro.",
      b: "la cámara ha RETROCEDIDO y ha subido hasta un PLANO GENERAL del taller: se ve el cobertizo entero con el agua dentro y la fragua apagada en el centro.",
    },
    ini: "la brasa está viva y el agua todavía no la ha tocado.",
    fin: "el agua ha cubierto la fragua y sólo sube de ella una nube de vapor; desde esta distancia se ve el taller entero inundado, con los crisoles flotando.",
  }, "personas, incendio, explosion, dramatismo, cadaveres"),

  // b4 — Se refugiaron en las alturas. Pidieron ayuda a Bochica.
  escp("b4a", [ref("familias_muiscas"), ref("loma_pelada_noche"), ref("sabana_anegada")], {
    comun: "Luz plomiza. Gente de LAS MISMAS familias de la referencia en lo alto de LA MISMA loma de la referencia, mirando hacia abajo cómo su sustento se hunde. Objeto ancla: el valle inundado allá abajo.",
    camara: {
      a: "PLANO MEDIO por detrás de tres de ellos, con sus espaldas y el valle gris allá abajo.",
      b: "la cámara ha RODEADO hasta ponerse debajo, en la ladera, y ha basculado a CONTRAPICADO: se ven las caras asomadas al filo contra el cielo plomizo, todas mirando hacia el objetivo.",
    },
    ini: "miran abajo, quietos y de espaldas, y el agua sigue subiendo.",
    fin: "desde abajo se ven sus caras asomadas al borde de la loma, doce o más, todas vueltas hacia el valle perdido, sin gritar ni gesticular.",
  }, "panico, estampida, llanto teatral, gente cayendo, cadaveres"),
  esc("b4b", [ref("vara_dorada"), ref("valle_anegado_arco"), ref("rocas_tequendama")], {
    comun: "Luz dorada que entra por un cielo abriéndose, con EL MISMO arco de color de la referencia reverberando al fondo. LA MISMA vara de oro de la referencia en vuelo hacia LAS MISMAS peñas de la referencia. Objeto ancla: la vara.",
    camara: {
      a: "PLANO GENERAL desde el nivel del agua, la vara pequeña en vuelo y las peñas enteras al fondo bajo el arco.",
      b: "la cámara ha ACOMPAÑADO a la vara en su vuelo hasta la roca: PLANO MEDIO de la junta de las peñas, con la punta entrando por un borde y la pared llenando el fondo.",
    },
    ini: "la vara vuela sobre el agua represada dejando una estela de luz.",
    fin: "la vara ha llegado a la junta y se ha clavado en ella, con una grieta fina abriéndose en la piedra y esquirlas saltando hacia el objetivo.",
  }, "figura divina en cuadro, rostro, angeles, mano que lanza, explosion, fuego"),

  // b5 — Las peñas se abrieron. Quedó el légamo fértil.
  esc("b5a", [ref("salto_tequendama"), ref("rocas_tequendama")], {
    comun: "Luz que aclara con estruendo de agua. La abertura recién hecha en LAS MISMAS peñas de la referencia, con el agua saliendo por ella. Aquí esto es un prólogo, no el asunto: se ve de paso. Objeto ancla: el paso abierto.",
    camara: {
      a: "PLANO MEDIO desde DENTRO del paso, con las dos paredes a los lados y el torrente saliendo hacia el objetivo.",
      b: "la cámara ha RETROCEDIDO saliendo del paso hacia atrás y ha subido: GRAN PLANO GENERAL en el que la abertura es una muesca pequeña en la sierra y el agua ya corre por el cañón.",
    },
    ini: "el torrente sale a presión entre las dos paredes, muy cerca del objetivo.",
    fin: "desde lejos y desde arriba se ve la muesca en la cordillera con el agua saliendo de ella en una columna blanca, pequeña dentro del paisaje.",
  }, "personas, arcoiris, vara en cuadro, turistas, barandas"),
  esc("b5b", [ref("sabana_cultivos"), ref("sabana_anegada")], {
    comun: "Luz limpia después del agua. LA MISMA sabana de la referencia ya libre, con el légamo oscuro y fértil cubriendo los campos. Objeto ancla: el légamo.",
    camara: {
      a: "PLANO MACRO del légamo agrietado, tan cerca que se ven las grietas y la tierra negra debajo.",
      b: "la cámara se ha ELEVADO muchísimo hasta un GRAN PLANO GENERAL en picado: el valle entero cubierto de légamo, con los dos ríos todavía corriendo por él.",
    },
    ini: "el légamo está húmedo y sin un solo brote.",
    fin: "desde arriba se ve el valle entero recuperado bajo el légamo y los dos ríos siguen corriendo por él, sin secarse, porque en la sequía harán falta.",
  }, "personas, celebracion, banderas, rios secos, desierto"),

  // b6 — Bochica lo llamó a cuentas. (CITA)
  escp("b6a", [ref("bochica_anciano"), ref("chibchacum_dios"), ref("familias_muiscas")], {
    comun: `Luz de tarde con la gente alrededor. ${BOCHICA} y ${CHIB} frente a frente sobre la tierra todavía embarrada, con gente de LAS MISMAS familias de la referencia mirando a distancia. Se le habla DELANTE DE TODOS: eso es parte del castigo. Objeto ancla: el espacio entre los dos.`,
    camara: {
      a: "PLANO GENERAL desde detrás de la gente, con nucas y hombros en primer término y los dos pequeños en el centro del claro.",
      b: "la cámara ha AVANZADO entre la gente hasta el claro y se ha puesto entre los dos: PLANO MEDIO CORTO de Chibchacum de frente, con Bochica cortado por el borde y las siluetas del público desenfocadas detrás.",
    },
    ini: "los dos están de pie a varios pasos y la gente los rodea en corro abierto.",
    fin: "desde el medio se ve la cara de Chibchacum escuchando la sentencia, con la mandíbula quieta y la mirada baja; no responde nada.",
  }, "juicio europeo, tribunal, cadenas, guardias, arrodillarse, violencia"),
  escp("b6b", [ref("chibchacum_dios")], {
    comun: `Luz baja y lateral sobre fondo oscuro. ${CHIB} solo. Lo que se lee es que entiende, no que se resiste. Objeto ancla: sus hombros.`,
    camara: {
      a: "PRIMER PLANO de su cara de tres cuartos.",
      b: "la cámara ha RETROCEDIDO y ha bajado detrás de él: PLANO MEDIO de su espalda y sus dos hombros anchos llenando el cuadro, con la cabeza cortada por el borde superior.",
    },
    ini: "tiene la cara quieta y los ojos bajos.",
    fin: "vista su espalda, los dos hombros ocupan el cuadro entero y se han enderezado: es lo único que hace, ponerse recto antes de recibir.",
  }, "llanto, rabia, puños, grito, aureola, resplandor"),

  // b7 — La tierra reposaba sobre guayacanes. Bochica los retiró.
  esc("b7a", [ref("piedras_funza"), ref("cueva_sierra")], {
    comun: "Penumbra subterránea con una claridad que no tiene fuente. Debajo de la tierra, CUATRO troncos de guayacán enormes y pulidos que sostienen la bóveda del mundo como columnas vivas: no se cansaban. Objeto ancla: el punto donde el tronco toca la bóveda.",
    camara: {
      a: "PLANO MACRO en el punto de contacto: la madera del guayacán contra la roca y la raíz del mundo.",
      b: "la cámara ha DESCENDIDO a lo largo del tronco hasta el suelo y ha retrocedido: PLANO GENERAL de la cámara subterránea con los cuatro guayacanes en pie sosteniendo la bóveda.",
    },
    ini: "la madera está apretada contra la roca y no cede nada.",
    fin: "vista la sala entera, los cuatro guayacanes siguen firmes bajo la bóveda y el espacio entre ellos está vacío: todavía no hay nadie ahí abajo.",
  }, "columnas griegas, capiteles, templos, personas, fuego, lava"),
  escp("b7b", [ref("chibchacum_dios"), ref("piedras_funza")], {
    comun: `Penumbra subterránea. ${CHIB} ocupando el sitio de los guayacanes bajo la bóveda del mundo, que es una masa oscura de capas de papel-tierra con raíces y piedra. El prodigio se ve: se entiende que carga la tierra. Objeto ancla: el punto donde la tierra toca su hombro.`,
    camara: {
      a: "PLANO ENTERO en contrapicado desde el suelo, con una mano abierta contra la tierra en primer término y la masa entrando por todo el borde superior.",
      b: "la cámara ha RETROCEDIDO y ha subido a la altura de sus hombros: PLANO MEDIO lateral en el que se ve exactamente dónde apoya el mundo y los guayacanes tumbados y apartados a un lado.",
    },
    ini: "la masa acaba de tocarle los hombros, los brazos empiezan a tensarse y un guayacán todavía está a medio retirar.",
    fin: "el mundo se ha asentado entero sobre él —espalda doblada, brazos tensos, manos clavadas en el suelo— y los cuatro guayacanes han quedado tumbados y apartados, ya inútiles.",
  }, "Atlas griego, cadenas, grilletes, sangre, agonia, musculatura de comic, globo terraqueo"),

  // b8 — Un dios acostumbrado a caminar tuvo que aprender a no moverse.
  escp("b8a", [ref("chibchacum_dios"), ref("mercado_bacata")], {
    comun: `Dos tiempos en un mismo cuerpo. Los pies descalzos de ${CHIB}, que antes recorrían la sabana entera. Objeto ancla: sus pies.`,
    camara: {
      a: "PLANO DETALLE de sus pies caminando sobre la tierra apisonada del mercado, levantando polvo.",
      b: "la cámara ha DESCENDIDO bajo tierra y ha girado: PLANO DETALLE de esos mismos pies clavados en la roca profunda, hundidos hasta el tobillo y sin levantar nada.",
    },
    ini: "los pies avanzan sobre el polvo del mercado, uno delante del otro.",
    fin: "los mismos pies están ahora afirmados en la piedra del fondo, medio hundidos y completamente quietos: no queda polvo ni huella nueva.",
  }, "cadenas, grilletes, heridas, sangre, cepos"),
  escp("b8b", [ref("chibchacum_dios"), ref("piedras_funza")], {
    comun: `Quietud subterránea que dura mucho tiempo. ${CHIB} bajo la carga. Durante mucho tiempo lo logró: la imagen tiene que leer paciencia, no tormento. Objeto ancla: su cara.`,
    camara: {
      a: "PLANO MEDIO frontal de él bajo la bóveda, con la cara serena y los brazos tensos.",
      b: "la cámara ha RETROCEDIDO muchísimo hacia el fondo de la caverna: PLANO GENERAL en el que él es una figura pequeña sosteniendo una bóveda inmensa, y todo el resto es oscuridad.",
    },
    ini: "está firme y la cara no acusa el peso.",
    fin: "desde el fondo de la caverna se ve lo desproporcionado del asunto: una sola figura pequeña bajo toda la masa del mundo, quieta y sin una queja.",
  }, "agonia, gritos, lagrimas, musculatura heroica, cadenas, sangre"),

  // b9 — Pasa la carga al otro hombro. Se agitan las lagunas.
  escp("b9a", [ref("chibchacum_dios")], {
    comun: `Penumbra subterránea. ${CHIB} pasando la carga de un hombro al otro. Es CANSANCIO, no ira: un gesto lento y trabajoso, la cara concentrada y sin cólera. Objeto ancla: el hombro que recibe.`,
    camara: {
      a: "PLANO MEDIO CORTO del hombro izquierdo cargado, con la masa de tierra apoyada encima.",
      b: "la cámara ha RODEADO su espalda hasta el otro costado: PLANO MEDIO CORTO del hombro derecho, ahora con la masa encima y el izquierdo libre y bajado.",
    },
    ini: "el peso está todo en el hombro izquierdo y él empieza a afirmar los pies en la profundidad.",
    fin: "el peso ha pasado entero al hombro derecho, que se ha alzado a recibirlo, mientras el izquierdo queda libre y caído; cae polvo de las raíces.",
  }, "ira, gritos, rabia, temblor de furia, cadenas, sangre"),
  esc("b9b", [ref("laguna_guatavita"), ref("vasija_gacha"), ref("casa_barro_paja")], {
    comun: "Arriba, en la superficie, la misma sacudida. Lo que abajo es un gesto, aquí es un temblor. Objeto ancla: el agua y las vasijas.",
    camara: {
      a: "PLANO MACRO sobre el agua de LA MISMA laguna de la referencia, con la superficie lisa llenando el cuadro.",
      b: "la cámara ha SALIDO de la laguna en un movimiento continuo y ha entrado por la puerta de un bohío: PLANO MEDIO del interior, con las vasijas en su repisa sonando y el polvo cayendo de la viga.",
    },
    ini: "el agua de la laguna está lisa como un espejo.",
    fin: "dentro de la casa las vasijas se han movido en su repisa y una está a punto de caerse, con el polvo bajando de la viga en hilos.",
  }, "terremoto catastrofico, casas derrumbadas, gente corriendo, grietas enormes, incendio"),

  // b10 — Si el suelo se mueve, es que él se cansa. Abajo sigue el oro.
  escp("b10a", [ref("chibchacum_dios"), ref("piedras_funza")], {
    comun: `Penumbra subterránea. ${CHIB} sosteniendo todo lo que da sustento: montañas, lagunas, caminos de mercaderes y surcos de labradores. El que causó la inundación sigue abajo. Objeto ancla: la bóveda sobre sus hombros.`,
    camara: {
      a: "PLANO MEDIO de sus hombros bajo la bóveda, con las raíces colgando muy cerca del objetivo.",
      b: "la cámara ha ATRAVESADO la bóveda hacia arriba y ha salido a la superficie: GRAN PLANO GENERAL en picado de la sabana viva —mercado, surcos, lagunas, caminos— con todo lo que él sostiene a la vista.",
    },
    ini: "abajo se le ven los hombros y la roca y no se sabe qué hay encima.",
    fin: "al otro lado de la roca está la sabana entera funcionando: el mercado con su gente, los surcos sembrados, las lagunas quietas y los caminos cruzándolo todo.",
  }, "Atlas griego, globo terraqueo, cadenas, agonia, sangre"),
  esc("b10b", [ref("disco_oro"), ref("figurilla_chibchacum"), ref("piedras_funza")], {
    comun: "Bajo la tierra que carga sigue enterrado el oro que alguna vez le ofrecieron. NO es un tesoro escondido: es una espera. Está mate, cubierto de tierra y sin brillo de joyería. Objeto ancla: el oro enterrado.",
    camara: {
      a: "PLANO MACRO en la tierra negra: EL MISMO disco de oro mate de la referencia medio enterrado junto a UNA MISMA figurilla de barro de la referencia, las dos cubiertas de polvo.",
      b: "la cámara ha RETROCEDIDO a través de la roca hasta un PLANO GENERAL final de la caverna: el oro es un punto pequeño y apagado en el suelo, y encima de él, en la penumbra, se adivinan los hombros que siguen cargando.",
    },
    ini: "el disco y la figurilla están medio enterrados y sin un solo brillo.",
    fin: "desde lejos apenas se distinguen en el suelo de la caverna, debajo de la silueta quieta que sigue sosteniendo la bóveda: siguen ahí, esperando.",
  }, "tesoro, monedas, cofres, brillo dorado, joyeria, personas, texto"),
]);
