// Base común de los specs de escena muiscas. Existe porque son 37 mitos y las
// reglas que valen para todos tienen que estar en un solo sitio.
//
// ── DOCTRINA v4: EL PAR ES UN PLANO CON MOVIMIENTO ────────────────────────
// Corrección del usuario (2026-09-17): en la v3 los pares no tenían
// prácticamente movimiento de cámara. El candado decía «se conserva
// EXACTAMENTE el encuadre, la distancia de cámara, la luz, el decorado», así
// que A y B salían siendo la misma foto con un detalle cambiado, y un modelo
// de video no tiene de dónde sacar un plano de cinco segundos.
//
// Lo que se conserva entre A y B es el MUNDO: los mismos personajes con la
// misma cara y el mismo vestuario, el mismo decorado, la misma hora del día.
// Lo que cambia es todo lo demás:
//   · LA CÁMARA SE MUEVE. Cada escena declara `camara: { a, b }` — desde qué
//     plano arranca y en qué plano termina. Acercarse, alejarse, rodear,
//     subir, bajar, pasar de gran plano general a plano medio, de perfil a
//     frontal. El modelo de video interpola el recorrido.
//   · LA ACCIÓN AVANZA UN TRAMO GRANDE. No «la mano se cerró un poco más»
//     sino «la mano soltó la ofrenda, se retiró y el cuerpo ya se dio la
//     vuelta». Cinco segundos de historia, no medio gesto.
//
// Estructura: 1 bloque de guion = 2 escenas = 2 clips de 5 s (se conserva el
// ritmo y el `window: 9.5` del guion). Cada escena son DOS imágenes:
//     <id>-A   fotograma inicial del clip
//     <id>-B   fotograma final del mismo clip
// Para N=9 eso da 18 escenas y 36 imágenes.
//
// `-B` LLEVA `-A` COMO REFERENCIA: el generador resuelve las dependencias por
// olas (un ref sin «/» es un hermano de la misma spec), así que el fotograma
// final hereda personajes, vestuario y decorado del inicial. Pero NO hereda el
// encuadre: el prompt de `-B` se lo prohíbe expresamente.
//
// Seedance 2.5 admite start_image + end_image —`models_explore` del 16-sep da
// `medias.roles = [start_image, end_image, ...]`— y hasta ahora el canal nunca
// lo había usado.
//
// ── Reglas heredadas ──────────────────────────────────────────────────────
// De bochica (único video aprobado): cada escena declara ESCALA + LUZ + OBJETO
// ANCLA + CAPA DE PRIMER PLANO, y ancla identidad con EL MISMO / LA MISMA ...
// de la referencia.
// LO MÍTICO SE MUESTRA: no se inventan símbolos ajenos a la fuente, pero lo que
// la fuente SÍ dice se ve entero y grande.
// CONTINUIDAD: cada personaje recurrente repite sus rasgos fijos.
//
// ── CORRECCIÓN DEL CANDADO DE VESTUARIO ───────────────────────────────────
// (2026-09-17, tras montar la hoja de contacto de las 151 fichas y MIRARLAS.)
// Las vueltas anteriores prohibían «cenefas», «grecas» y «oro en el cuerpo» y
// obligaban a que todos fueran descalzos y con el torso cubierto. Eso
// contradice la biblia:
//   · zaque_tunja, zaque_hunza, zipa_bacata, tomagata_zaque, nemequene_zipa,
//     cacica_guatavita, esposa_principal y una docena más llevan CENEFAS
//     TEJIDAS geométricas; zaque_tunja lleva además una greca de meandro.
//   · zaque_tunja y zipa_bacata llevan PECTORAL DE ORO.
//   · heredero_dorado, corredor_plumas, sesquile_corredor, muchacho_cuca,
//     tintoba_joven y toquecha_alfarero van con TORSO DESNUDO y guayuco.
//   · familias_muiscas lleva CALZADO.
// Lo que hay que impedir no es el tejido muisca sino la invención ajena.

export const DIRECCION =
  "los cuadros van en pares y cada par es UN PLANO DE CINCO SEGUNDOS: el que dice FOTOGRAMA INICIAL lo abre y el que dice FOTOGRAMA FINAL lo cierra. Entre los dos LA CÁMARA SE HA MOVIDO —se acerca, se aleja, rodea, sube o baja, cambia de escala y de ángulo— y LA ACCIÓN HA AVANZADO UN TRAMO LARGO. Se conservan los personajes, el vestuario, el decorado y la hora del día; no se conserva el encuadre. Un modelo de video generará el recorrido intermedio, así que los dos cuadros no pueden parecer la misma foto.";

export const VESTUARIO =
  " Vestuario como en las fichas de la biblia: manta de algodón crudo anudada al hombro, por la rodilla o algo más abajo, con cenefa tejida geométrica en el borde en la gente de rango y lisa en la gente común; los hombres jóvenes y los corredores van con el torso desnudo y guayuco; pies descalzos salvo donde la referencia calce.";

export const AVOID_BASE =
  "texto, letras, logos, marcas de agua, marcos o bordes; CGI, render 3D o ilustracion digital pulida; miniatura tilt-shift; maqueta de plastilina, arcilla o resina; terreno o vegetacion modelados en 3D; musgo o cesped realista; desenfoque fotografico de poca profundidad de campo; cielo fotografico o en degradado liso; cabezas modeladas y redondeadas con piel lisa; rasgos europeos en cualquier persona; togas romanas o griegas, mantos largos hasta el suelo, capuchas, velos; camisas, pantalones, botas, sandalias de correas; coronas, tronos, cetros, templos europeos o cruces; piramides, penachos de plumas altos o iconografia mesoamericana; armaduras, cascos, escudos, espadas o armas de metal; banderas, estandartes o insignias; simbolos espirituales inventados; desnudez integral, sexualizacion o poses insinuantes; sangre abundante, vísceras o cadaveres amontonados; cambiar los rostros, mantas o materiales de los personajes de referencia; gigantes o cuerpos fuera de escala salvo donde la escena lo pida";

export const PALETTE_BASE =
  "crema de algodon crudo, pardos de barro y paja, verdes apagados de sabana, gris mineral de piedra, azules frios de agua y noche; los hilos de color solo en las cenefas tejidas; sin saturacion ni neones";

const B = "muiscas/biblia";
export const ref = (n) => `${B}/${n}`;

// Candado v4: se hereda el MUNDO, no el encuadre. La segunda frase existe
// porque el generador le pasa `-A` como referencia visual y sin ella el modelo
// copia la composición en vez de continuar el plano.
const LOCK =
  " Es el final del MISMO clip continuo que la imagen de referencia: los mismos personajes con la misma cara y el mismo vestuario, el mismo decorado y la misma hora del día. Pero NO repitas su encuadre: durante estos cinco segundos la cámara se ha desplazado y la escala, el ángulo y el punto de vista son OTROS, y la acción ha avanzado hasta el estado que se describe.";

/**
 * Una escena = un clip de 5 s = dos imágenes.
 *
 * esc(id, refs, { comun, camara: {a, b}, ini, fin }, avoid) devuelve
 * `<id>-A` y `<id>-B`.
 *
 *   comun  — lo que no cambia: decorado, luz, personajes, objeto ancla.
 *   camara — `a` es el plano con que arranca el clip y `b` aquel en que
 *            termina. TIENEN QUE SER DISTINTOS: distinta escala, distinto
 *            ángulo o distinta posición. Ahí está el movimiento del plano.
 *   ini    — la acción al empezar el clip.
 *   fin    — la acción cinco segundos después, avanzada de verdad.
 *
 * `-B` recibe `<id>-A` como referencia extra para heredar personajes y
 * decorado. `conFiguras: true` añade el candado de vestuario a los dos.
 */
export function esc(id, refs, { comun, camara, ini, fin }, avoid, conFiguras = false) {
  if (!camara || !camara.a || !camara.b) {
    throw new Error(`esc(${id}): falta camara:{a,b} — la doctrina v4 exige declarar el movimiento`);
  }
  const v = conFiguras ? VESTUARIO : "";
  return [
    {
      id: `${id}-A`, kind: "keyframe", preset: "vertical", refs,
      scene: `${comun} FOTOGRAMA INICIAL del clip. CÁMARA: ${camara.a}. ACCIÓN: ${ini}${v}`,
      avoid,
    },
    {
      id: `${id}-B`, kind: "keyframe", preset: "vertical", refs: [...refs, `${id}-A`],
      scene: `${comun} FOTOGRAMA FINAL del clip, cinco segundos después. LA CÁMARA SE HA MOVIDO: ${camara.b}. ACCIÓN: ${fin}${LOCK}${v}`,
      avoid,
    },
  ];
}

// Azúcar para escenas con figuras humanas.
export const escp = (id, refs, partes, avoid) => esc(id, refs, partes, avoid, true);

/** Aplana la lista de pares en el array ITEMS que consume el generador. */
export const armar = (pares) => pares.flat();
