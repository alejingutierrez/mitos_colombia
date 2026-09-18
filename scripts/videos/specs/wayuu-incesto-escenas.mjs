// Keyframes de La piedra y el cerro — 12 bloques × 2 escenas × 2 cuadros
// = 48 imágenes ≈ 120 s.
// Guion: guion-el-incesto-v2.json (N=12) · Acta: acta-el-incesto.json (24 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _wayuu-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · SON DOS CASOS, NO UNO CON VARIANTE. Primero la hermana embarazada por su
//   hermano (b1–b7), después la hija embarazada por su padre (b8–b12). El video
//   guarda la simetría y NO los funde. El corte está en b8.
// · EL RELATO NO CELEBRA NI JUSTIFICA EL CASTIGO: lo narra. Mareiwa sentencia y
//   el paisaje queda marcado. LA CÁMARA ACOMPAÑA A LAS MUCHACHAS, NO AL JUICIO:
//   ellas están en plano cerrado y él nunca.
// · NINGUNA DE LAS DOS MUERTES SE REPRESENTA. Ni el salto al mar ni el
//   ahorcamiento se muestran: se narran y el plano CORTA AL RESULTADO —la
//   piedra con sal, el cerro con su figura—. Ésta es la regla más dura del
//   spec y manda sobre cualquier idea de continuidad.
// · EL SEÑALAMIENTO ES EL NUDO POLÍTICO del segundo caso: todos hablan de ella
//   y NADIE dice nada del padre. Esa asimetría no se equilibra ni se comenta
//   desde fuera: el padre sencillamente no entra en cuadro nunca.
// · EL ENCIERRO DE LA MAJAYURA es aquí el tiempo cerrado del que sale el
//   embarazo, NO un rito ilustrado. La biblia lo describe como un chinchorro
//   nuevo templado casi al techo, en penumbra, con la muchacha invisible
//   dentro; así se resuelve, sin mostrarla.
// · MAREIWA (no Maleiwa) es como lo nombra este canon. Se respeta la grafía.
// · KATETAMANA es un cerro real con nombre y significado —mujer colgada—. El
//   cierre es geográfico: el paisaje guarda la historia. El inventario lo marca
//   `sensible`: se dibuja con su perfil, a distancia y a contraluz, NUNCA la
//   escena del ahorcamiento. El árbol está EXCLUIDO del inventario con razón
//   declarada y no aparece.
//
// GUION DE LUZ: mañana de la ranchería → penumbra larga del encierro → luz
// blanca de la salida → mediodía del vientre → camino a la costa → olas contra
// los peñascos → sal y piedra → mañana del segundo caso → luz cruda del
// señalamiento → sombra del camino y del jagüey → tarde sin cara levantada →
// contraluz final del cerro.

import { CONTEXTO, DIRECCION, AVOID_BASE, PALETTE_BASE, ref, esc, escp, armar } from "./_wayuu-comun.mjs";

export const SPEC_NAME = "wayuu-incesto-escenas";
export const OUT_DIR = "wayuu/videos/el-incesto/keyframes";
export { CONTEXTO, DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; suicidio, ahorcamiento, soga al cuello, cuerpo colgando, arbol con soga; caida, salto al vacio, cuerpo en el aire, cuerpo sobre rocas; violencia sexual, escenas de intimidad, contacto sexual, insinuacion erotica; vientre desnudo, cuerpo desnudo, anatomia, parto; tribunal, juez, condena, dedo acusador, rayos, fuego divino; aureola o resplandor sobre Mareiwa; turba con antorchas, apedreamiento, golpes; rostro de dolor extremo, gritos dibujados, llanto teatral; estatua de mujer, escultura clasica, monumento funerario";
export const PALETTE =
  PALETTE_BASE + "; el gris verdoso del mar y el blanco de la sal entran solo en la costa; el interior del encierro es penumbra caliente, no frio";

const MA =
  "EL MISMO Mareiwa de la referencia (hombre joven de pelo negro largo y suelto, cara serena, manto de algodón crudo terciado hasta los tobillos con cenefa tejida oscura en el ruedo, descalzo, sin corona ni adorno de metal)";

export const ITEMS = armar([
  // ── PRIMER CASO: la hermana ────────────────────────────────────────────
  // b1 — Dos hermanos de una misma ranchería. A ella la guardaron.
  escp("b1a", [ref("rancheria"), ref("enramada"), ref("hermana_del_encierro")], {
    comun: `Mañana. Eran dos hermanos de UNA MISMA ranchería: la cotidianidad antes de todo, sin anuncio ni presagio. Objeto ancla: la enramada con la vida alrededor.`,
    camara: {
      a: "PLANO MEDIO de dos personas jóvenes trabajando cada una en lo suyo bajo la enramada, sin mirarse.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la ranchería entera con las casas dispersas, los corrales y el trajín de la mañana.",
    },
    ini: "dos jóvenes trabajan bajo la enramada, cada uno en lo suyo.",
    fin: "desde arriba se ve la ranchería completa, las casas dispersas y el trajín de la mañana alrededor.",
  }, "pareja, intimidad, insinuacion, presagio, sombras amenazantes"),
  esc("b1b", [ref("casa_del_encierro"), ref("chinchorro")], {
    comun: `Penumbra caliente dentro de la casa del encierro. A ella LA GUARDARON como a toda majayura: el chinchorro nuevo está templado casi al techo y la muchacha queda invisible dentro. NO se la muestra. Objeto ancla: el chinchorro templado alto.`,
    camara: {
      a: "PLANO MACRO del cabo del chinchorro amarrado muy arriba en el horcón, tenso, con las fibras nuevas.",
      b: "la cámara ha BAJADO al suelo de arena y ha retrocedido: PLANO GENERAL del cuarto en penumbra visto desde abajo, con el chinchorro cerrado allá arriba y una sola rendija de luz en la pared.",
    },
    ini: "el cabo nuevo del chinchorro está amarrado muy arriba en el horcón, tenso.",
    fin: "desde el suelo se ve el cuarto entero en penumbra con el chinchorro cerrado allá arriba y una sola rendija de luz entrando.",
  }, "figura visible dentro, cuerpo, rostro, celda, cadenas, barrotes"),

  // b2 — Mucho tiempo encerrada, sin más ojos que los de su madre.
  esc("b2a", [ref("casa_del_encierro"), ref("piichi")], {
    comun: `Penumbra. MUCHO TIEMPO: el paso de los días se cuenta con la rendija de luz cambiando de sitio en la pared de tierra. Sin figuras. Objeto ancla: la raya de luz en la pared.`,
    camara: {
      a: "PLANO MACRO de la raya de luz cayendo alta sobre la pared de tierra, con el polvo flotando dentro.",
      b: "la cámara ha RETROCEDIDO y ha girado siguiendo la pared: PLANO GENERAL del cuarto con la raya ya baja y larga sobre el suelo de arena, mucho más tarde.",
    },
    ini: "la raya de luz cae alta sobre la pared de tierra y el polvo flota dentro de ella.",
    fin: "al retroceder se ve el cuarto entero con la raya ya tumbada y larga sobre la arena: han pasado horas, y así muchos días.",
  }, "calendario, marcas contando dias, reloj, texto, figura visible"),
  escp("b2b", [ref("mujer_mayor"), ref("casa_del_encierro"), ref("enramada")], {
    comun: `Penumbra dentro, luz fuerte fuera. SIN MÁS OJOS QUE LOS DE SU MADRE: la madre entra con la totuma y sale, y afuera están el sol y el viento. Objeto ancla: el vano entre los dos mundos.`,
    camara: {
      a: "PLANO MEDIO CORTO de la madre de perfil en la penumbra, dejando una totuma en el suelo y sin decir nada.",
      b: "la cámara la ha SEGUIDO al salir y ha girado hacia fuera: PLANO GENERAL desde el umbral con la llanura blanca de sol y el viento moviendo lo colgado de la enramada.",
    },
    ini: "la madre deja la totuma en el suelo, de perfil en la penumbra, sin hablar.",
    fin: "desde el umbral, afuera está la llanura blanca de sol y el viento moviendo lo que cuelga de la enramada.",
  }, "figura de la hija visible, rostro de la encerrada, llanto, celda, cadenas"),

  // b3 — Cuando salió a la luz, estaba embarazada. El hijo era de su hermano.
  escp("b3a", [ref("hermana_del_encierro"), ref("casa_del_encierro")], {
    comun: `Luz blanca de mediodía en el vano. Terminó el encierro y SALE A LA LUZ: EL MISMO personaje de la referencia, joven, con la manta wayúu suelta hasta el tobillo, entornando los ojos al salir. Objeto ancla: su cara contra la claridad.`,
    camara: {
      a: "PLANO GENERAL del exterior de la casa con el vano oscuro y ella apareciendo en él, pequeña y a contraluz.",
      b: "la cámara ha AVANZADO hasta ella y ha bajado a la altura de los ojos: PLANO MEDIO CORTO de su cara con los ojos entornados por la claridad, saliendo.",
    },
    ini: "en el vano oscuro de la casa aparece una figura pequeña a contraluz.",
    fin: "de cerca se le ve la cara entornando los ojos ante la claridad de afuera.",
  }, "vientre desnudo, anatomia, desnudez, insinuacion, rostro de terror"),
  escp("b3b", [ref("hermana_del_encierro"), ref("rancheria"), ref("manta_wayuu")], {
    comun: `Mediodía. Estaba EMBARAZADA: se lee por la caída de la manta y por cómo la gente deja de moverse al verla, nunca por el cuerpo. El hijo era de su hermano, y el canon no lo explica ni lo escenifica. Objeto ancla: el pliegue de la manta.`,
    camara: {
      a: "PLANO DETALLE del pliegue de la manta cayendo desde el pecho, sin cuerpo a la vista.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la ranchería con ella parada en el centro y tres personas alrededor que se han quedado quietas mirándola.",
    },
    ini: "el pliegue de la manta cae desde el pecho, visto muy de cerca.",
    fin: "desde arriba se la ve parada en el centro de la ranchería con tres personas alrededor que se han quedado quietas.",
  }, "vientre desnudo, anatomia, desnudez, senalar con el dedo, burla, gritos"),

  // b4 — Se miró el vientre y la angustia le subió. Pensó en el mar.
  escp("b4a", [ref("hermana_del_encierro"), ref("enramada")], {
    comun: `Tarde. Se mira y LA ANGUSTIA LE SUBE: es una cara que cambia, no un gesto teatral. La cámara la acompaña a ella, no al juicio de nadie. Objeto ancla: sus manos sobre la manta.`,
    camara: {
      a: "PLANO DETALLE de sus dos manos quietas sobre la tela de la manta, a la altura de la cintura.",
      b: "la cámara ha SUBIDO despacio hasta su cara y ha girado al frente: PRIMER PLANO de ella con la mirada ya fija en un punto lejano, decidida.",
    },
    ini: "las dos manos están quietas sobre la tela, a la altura de la cintura.",
    fin: "al subir a la cara se la ve con la mirada fija en un punto lejano: ya decidió algo.",
  }, "llanto teatral, grito, desesperacion, autolesion, sangre"),
  escp("b4b", [ref("hermana_del_encierro"), ref("llanura_cardonal"), ref("costa_penascos")], {
    comun: `Tarde. NO PENSÓ EN ESCONDERSE: PENSÓ EN EL MAR. Echa a andar hacia el rumbo del agua, sola, sin llevarse nada. Objeto ancla: la dirección que toma.`,
    camara: {
      a: "PLANO MEDIO de ella de espaldas echando a andar, cortada por el borde inferior del cuadro.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado con la ranchería atrás a un lado, ella diminuta a mitad de la llanura, y al fondo la franja del mar.",
    },
    ini: "de espaldas y muy cerca, echa a andar sin llevarse nada.",
    fin: "desde muy arriba se ve todo el trayecto: la ranchería atrás, ella diminuta en mitad de la llanura y al fondo la franja del mar.",
  }, "persecucion, gente corriendo detras, gritos, dramatismo"),

  // b5 — Caminó a la orilla donde las olas revientan. Desde lo alto se lanzó.
  esc("b5a", [ref("costa_penascos"), ref("piedra_entre_las_olas")], {
    comun: `Última luz sobre la costa. La orilla donde LAS OLAS REVIENTAN CONTRA LAS PIEDRAS: peñascos altos, espuma y ruido. Sin figuras. Objeto ancla: la ola rompiendo contra la roca.`,
    camara: {
      a: "PLANO MACRO de la espuma reventando contra el canto de un peñasco, con las gotas suspendidas.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del acantilado entero con la línea de peñascos y el mar batiéndolos de punta a punta.",
    },
    ini: "la espuma revienta contra el canto del peñasco y las gotas quedan suspendidas.",
    fin: "desde arriba se ve el acantilado completo, la línea de peñascos y el mar batiéndolos de un extremo al otro.",
  }, "cuerpo, figura, caida, salto, barcos, faro"),
  esc("b5b", [ref("costa_penascos")], {
    comun: `Última luz. LA MUERTE NO SE REPRESENTA: el plano se queda en el borde vacío del peñasco y la cámara mira al agua, nunca a un cuerpo. Lo único que queda en cuadro son las huellas que llegan al canto y no vuelven. Objeto ancla: las huellas que terminan.`,
    camara: {
      a: "PLANO CENITAL MACRO de dos huellas descalzas en la arena del borde, la última justo en el canto de la piedra.",
      b: "la cámara ha BASCULADO por encima del canto hacia el agua y ha bajado: PLANO GENERAL del mar revuelto abajo, sólo agua y espuma, sin nada más en cuadro.",
    },
    ini: "dos huellas descalzas en el borde, la última justo en el canto de la piedra.",
    fin: "al asomarse por el canto sólo hay mar revuelto y espuma abajo: el plano no enseña nada más.",
  }, "cuerpo, figura cayendo, salto, silueta en el aire, sangre, rocas con cuerpo"),

  // b6 — No cayó sobre las rocas: cayó en el agua, y no la mató. Mareiwa habló.
  esc("b6a", [ref("costa_penascos"), ref("piedra_entre_las_olas")], {
    comun: `Luz baja. EL AGUA NO LA MATÓ: lo que se ve es el mar calmándose en un punto, entre las rocas, como si algo se hubiera detenido ahí. Sin cuerpo en cuadro. Objeto ancla: el círculo de agua quieta.`,
    camara: {
      a: "PLANO GENERAL en picado del agua entre los peñascos, batida y blanca de espuma.",
      b: "la cámara ha DESCENDIDO hasta casi tocar el agua: PLANO MACRO de la superficie, ahora quieta y lisa en un trecho pequeño, con la espuma abriéndose alrededor.",
    },
    ini: "desde arriba, el agua entre los peñascos está batida y blanca de espuma.",
    fin: "casi a ras del agua, un trecho pequeño ha quedado quieto y liso y la espuma se abre a su alrededor.",
  }, "cuerpo, figura en el agua, ahogamiento, sangre, criaturas marinas"),
  escp("b6b", [ref("mareiwa"), ref("costa_penascos")], {
    comun: `Luz baja. ENTONCES MAREIWA LE HABLÓ. ${MA} de pie en el peñasco. Sentencia, y el relato NO lo celebra: no hay gesto de condena, ni rayo, ni resplandor. La cámara no se le acerca a la cara. Objeto ancla: su figura entera contra el mar.`,
    camara: {
      a: "PLANO DETALLE del borde de su manto movido por el viento contra la piedra del peñasco.",
      b: "la cámara ha RETROCEDIDO y se ha elevado mucho: GRAN PLANO GENERAL con él de pie y pequeño en lo alto del peñasco y todo el mar abierto detrás.",
    },
    ini: "el borde del manto se mueve con el viento contra la piedra, visto muy de cerca.",
    fin: "desde lejos y arriba se le ve entero y pequeño en lo alto del peñasco, con el mar abierto detrás: habla y ya está.",
  }, "dedo acusador, rayos, fuego divino, aureola, trono, tribunal, primer plano de su cara"),

  // b7 — «Te volverás piedra, y el mundo seguirá tu ejemplo». (CITA)
  esc("b7a", [ref("piedra_entre_las_olas"), ref("costa_penascos")], {
    comun: `Luz baja. EL PLANO CORTA AL RESULTADO: quedó PIEDRA entre las olas. Es una roca con silueta apenas sugerida, erosionada, nunca una estatua ni una figura tallada. Objeto ancla: la piedra en el agua.`,
    camara: {
      a: "PLANO GENERAL del mar entre los peñascos con una roca nueva emergiendo donde antes no había nada.",
      b: "la cámara ha AVANZADO sobre el agua hasta rodearla: PLANO MEDIO de la roca desde el otro lado, batida por la ola, con la forma apenas insinuada en el desgaste.",
    },
    ini: "entre los peñascos hay ahora una roca donde antes no había nada.",
    fin: "desde el otro lado y de cerca, la ola la bate y el desgaste apenas insinúa una forma: es piedra, no una figura tallada.",
  }, "estatua, escultura, cara tallada, monumento, figura humana clara, cuerpo"),
  esc("b7b", [ref("piedra_entre_las_olas")], {
    comun: `Luz baja, mucho después. CON LA SAL ENCIMA: la costra blanca de sal cubriendo la piedra es lo que prueba que pasó el tiempo. Objeto ancla: la sal sobre la roca.`,
    camara: {
      a: "PLANO MACRO de la costra de sal blanca formada sobre la roca mojada, con los cristales gruesos.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL de la costa entera al atardecer con la piedra minúscula entre las olas, una más en la línea del agua.",
    },
    ini: "la costra de sal blanca sobre la roca mojada tiene los cristales gruesos.",
    fin: "desde muy arriba, la piedra es minúscula entre las olas y ya parece una más de la línea de la costa.",
  }, "estatua, monumento, placa, inscripcion, flores, ofrendas, turistas"),

  // ── SEGUNDO CASO: la hija. El corte es aquí y no se funden. ─────────────
  // b8 — Por eso hay hermanos que se juntan. Hubo otra majayura.
  escp("b8a", [ref("rancheria"), ref("enramada"), ref("primeros_wayuu")], {
    comun: `Mañana, MUCHO DESPUÉS y en otra ranchería: EMPIEZA EL SEGUNDO CASO y no se funde con el primero. El mundo siguió el ejemplo, y eso se cuenta como vida corriente que sigue su curso. Objeto ancla: otra ranchería distinta.`,
    camara: {
      a: "PLANO MACRO de un telar de cintura a medio tejer, con los hilos tensos y las manos fuera de cuadro.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de una ranchería distinta de la del principio, con otras casas, otro corral y otra gente.",
    },
    ini: "un telar a medio tejer con los hilos tensos, muy de cerca.",
    fin: "desde arriba se ve que ésta es otra ranchería: otras casas, otro corral, otra gente.",
  }, "repeticion literal de la primera rancheria, mismos personajes, flashback"),
  escp("b8b", [ref("segunda_majayura"), ref("casa_del_encierro"), ref("manta_wayuu")], {
    comun: `Mañana. LA SEGUNDA MAJAYURA, embarazada por su propio padre. El padre NO ENTRA EN CUADRO NUNCA, ni aquí ni después: ésa es la asimetría del mito y se sostiene con la ausencia. Objeto ancla: ella sola en el vano.`,
    camara: {
      a: "PLANO GENERAL de la casa con ella pequeña y sola sentada en el umbral, de perfil.",
      b: "la cámara ha AVANZADO hasta ella y ha girado al frente: PLANO MEDIO CORTO de su cara mirando al suelo, tranquila todavía, sin saber lo que viene.",
    },
    ini: "está sentada sola en el umbral, pequeña y de perfil.",
    fin: "de cerca y de frente se le ve la cara mirando al suelo, todavía tranquila.",
  }, "figura del padre, hombre adulto acompañandola, insinuacion, contacto, vientre desnudo"),

  // b9 — Cuando el vientre se le notó, todos la señalaban.
  escp("b9a", [ref("segunda_majayura"), ref("camino_prohibido"), ref("llanura_cardonal")], {
    comun: `Luz cruda de mediodía. CUANDO SE LE NOTÓ, TODOS LA SEÑALABAN: se lee por las cabezas que se vuelven a su paso por el camino, no por el cuerpo. Objeto ancla: las cabezas que giran.`,
    camara: {
      a: "PLANO MEDIO de ella caminando por el camino de arena, de perfil, sola.",
      b: "la cámara se ha QUEDADO ATRÁS mientras ella sigue y ha girado a un lado: PLANO GENERAL con ella ya lejos de espaldas y, en primer término, cuatro personas paradas con la cabeza vuelta hacia ella.",
    },
    ini: "camina sola por el camino de arena, de perfil.",
    fin: "ella sigue y se aleja, y en primer término quedan cuatro personas paradas con la cabeza vuelta hacia su espalda.",
  }, "vientre desnudo, anatomia, senalar con el dedo, burla, empujones, piedras"),
  escp("b9b", [ref("jaguey"), ref("primeros_wayuu"), ref("casimba")], {
    comun: `Mediodía. Lo decían en el camino Y JUNTO AL JAGÜEY: el chisme corre por el sitio donde se junta la gente. Ella no está en cuadro. Objeto ancla: las bocas que hablan al oído.`,
    camara: {
      a: "PLANO MEDIO CORTO de dos mujeres llenando tinajas en el jagüey, hablándose muy cerca de la cara.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del jagüey con seis o siete personas repartidas por la orilla, en corros de dos y de tres, todas hablando a la vez.",
    },
    ini: "dos mujeres llenan tinajas y se hablan muy cerca de la cara.",
    fin: "desde arriba se ve el jagüey entero con seis o siete personas en corros de dos y de tres, todas hablando a la vez.",
  }, "figura de la muchacha presente, senalar con el dedo, violencia, gritos dibujados"),

  // b10 — «Ahí va la mujer de su padre». Del padre, nadie decía nada.
  escp("b10a", [ref("primeros_wayuu"), ref("enramada"), ref("segunda_majayura")], {
    comun: `Luz cruda. Lo decían EN VOZ ALTA y a su paso: no es un secreto, se dice delante. Objeto ancla: una boca abierta hablando fuerte.`,
    camara: {
      a: "PLANO MEDIO CORTO de una mujer de perfil hablando fuerte, con la cara vuelta hacia el camino.",
      b: "la cámara ha GIRADO siguiendo su mirada y ha retrocedido: PLANO GENERAL del camino con ella pasando de espaldas y media docena de personas mirándola desde la enramada.",
    },
    ini: "una mujer habla fuerte, de perfil, con la cara vuelta hacia el camino.",
    fin: "al girar la cámara se ve a quién le hablan: ella pasa de espaldas por el camino y media docena de personas la miran desde la enramada.",
  }, "burla exagerada, gestos obscenos, empujones, piedras, escupir"),
  esc("b10b", [ref("enramada"), ref("chinchorro"), ref("rancheria")], {
    comun: `Luz cruda. DEL PADRE NO DECÍA NADIE NI UNA PALABRA, y ésa es la asimetría del mito: el cuadro es un sitio de hombres donde no pasa nada, nadie habla del asunto y la vida sigue igual. El padre no está identificado ni señalado. Objeto ancla: la normalidad intacta.`,
    camara: {
      a: "PLANO MACRO de unas manos trenzando cordel bajo la enramada, tranquilas y sin prisa.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la enramada con cuatro hombres en sus cosas —uno en el chinchorro, otro con los aperos—, ninguno hablando y ninguno mirando hacia el camino.",
    },
    ini: "unas manos trenzan cordel sin prisa, muy de cerca.",
    fin: "desde arriba, cuatro hombres siguen en lo suyo bajo la enramada, ninguno habla y ninguno mira hacia el camino: de eso no se dice nada.",
  }, "figura del padre señalada, acusacion, culpable identificado, juicio, castigo"),

  // b11 — Una vergüenza que no la dejaba levantar la cara. Se ahorcó.
  escp("b11a", [ref("segunda_majayura"), ref("rancheria"), ref("enramada")], {
    comun: `Tarde. UNA VERGÜENZA QUE NO LA DEJABA LEVANTAR LA CARA: es exactamente eso, la cara que no sube. La cámara la acompaña a ella. Objeto ancla: la cara baja.`,
    camara: {
      a: "PLANO GENERAL de ella sentada contra la pared de la casa, pequeña, con la cabeza baja.",
      b: "la cámara ha AVANZADO hasta ella y ha bajado al suelo: PLANO MEDIO CORTO en contrapicado suave de su cara todavía baja, con el pelo cayéndole delante.",
    },
    ini: "está sentada contra la pared de la casa, pequeña, con la cabeza baja.",
    fin: "de cerca y desde abajo se ve que la cara sigue sin subir y el pelo le cae por delante.",
  }, "llanto teatral, grito, autolesion, soga, cuerda, arbol, sangre"),
  esc("b11b", [ref("llanura_cardonal"), ref("trupillo")], {
    comun: `Última luz. LA MUERTE NO SE REPRESENTA: el plano corta y lo que queda en cuadro es el sitio vacío al que fue. Ni árbol con soga, ni cuerpo, ni sombra con forma humana. Sólo la llanura al anochecer y el viento. Objeto ancla: el sitio vacío.`,
    camara: {
      a: "PLANO CENITAL MACRO de unas huellas descalzas en la arena, alejándose de la ranchería.",
      b: "la cámara se ha ELEVADO siguiendo las huellas: GRAN PLANO GENERAL en picado de la llanura al anochecer con los trupillos separados y nadie en ninguna parte.",
    },
    ini: "unas huellas descalzas se alejan de la ranchería por la arena.",
    fin: "desde muy arriba, la llanura al anochecer está vacía: trupillos separados, viento, y nadie en ninguna parte.",
  }, "soga, cuerda colgando, arbol con rama marcada, cuerpo, silueta humana, sombra con forma de persona"),

  // b12 — Mareiwa la volvió cerro, con su misma figura. Katetamana.
  esc("b12a", [ref("serrania_baja"), ref("montana_refugio")], {
    comun: `Contraluz del amanecer. EL PLANO CORTA AL RESULTADO: un cerro nuevo en la serranía, con un perfil que apenas recuerda una figura. Se dibuja A DISTANCIA Y A CONTRALUZ, y nunca se resuelve del todo en forma humana. Objeto ancla: el perfil del cerro contra el cielo.`,
    camara: {
      a: "PLANO MACRO de la ladera del cerro a contraluz, con la piedra y los matorrales recortados.",
      b: "la cámara ha RETROCEDIDO muchísimo: GRAN PLANO GENERAL de la serranía baja al amanecer con el cerro entero recortado contra el cielo y su perfil apenas insinuando una figura de pie.",
    },
    ini: "la ladera a contraluz muestra la piedra y los matorrales recortados.",
    fin: "desde muy lejos, el cerro entero se recorta contra el cielo y su perfil apenas insinúa una figura de pie.",
  }, "estatua, escultura, cara tallada, cuerpo colgando, soga, monumento, figura humana clara"),
  esc("b12b", [ref("serrania_baja"), ref("llanura_cardonal"), ref("rancheria")], {
    comun: `Luz de la mañana. EL CIERRE ES GEOGRÁFICO: el paisaje guarda la historia y la vida sigue debajo. Ese cerro se llama Katetamana, la mujer colgada, y el nombre no se escribe en ninguna parte: se sabe. Objeto ancla: el cerro visto desde la vida de todos los días.`,
    camara: {
      a: "PLANO MEDIO de un corral y unas cabras en primer término, con el cerro pequeño al fondo.",
      b: "la cámara se ha ELEVADO y ha retrocedido: GRAN PLANO GENERAL final con la llanura habitada abajo, rancherías y rebaños, y el cerro dominando el horizonte por detrás.",
    },
    ini: "en primer término hay un corral con cabras y al fondo se ve el cerro, pequeño.",
    fin: "desde muy arriba se ve todo junto: la llanura habitada con sus rancherías y rebaños, y el cerro dominando el horizonte detrás de todo.",
  }, "placa, inscripcion, nombre escrito, monumento, ofrendas, cruces, turistas"),
]);
