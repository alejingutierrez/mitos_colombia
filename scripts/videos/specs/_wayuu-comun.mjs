// Base común de los specs de escena wayúu. Hermano de `_muisca-comun.mjs`:
// misma doctrina v4 —el par de cuadros es UN PLANO CON MOVIMIENTO—, distinto
// mundo material.
//
// ── DOCTRINA v4 (idéntica a la muisca) ────────────────────────────────────
// 1 bloque de guion = 2 escenas = 2 clips de 5 s. Cada escena son DOS imágenes:
//     <id>-A   fotograma inicial del clip
//     <id>-B   fotograma final del mismo clip
// Entre A y B se conserva el MUNDO —personajes, vestuario, decorado, hora del
// día— y cambia TODO lo demás: la cámara se desplaza (`camara:{a,b}` es
// obligatorio, `esc()` revienta si falta) y la acción avanza un tramo largo.
// `-B` lleva `-A` como referencia para heredar el mundo, y el prompt le prohíbe
// expresamente heredar el encuadre.
//
// ── LO QUE CAMBIA RESPECTO A LA MUISCA ────────────────────────────────────
// Reglas tomadas de `wayuu-biblia-visual-v4.md` y del inventario V4.
//
// · EL FRÍO ESTABA EN LA REGLA. La paleta V3 trataba el color como un permiso
//   que había que ganarse y caía en neutro por defecto. El canon dice otra
//   cosa: fuego/brasa/lumbre aparece 52 veces en 14 mitos; sed/seco/verano 27;
//   polvo/arena/tolvanera 25; calor/sol/mediodía 23. La palabra «azul» no
//   aparece NI UNA VEZ en los 27 mitos. Esta paleta es cálida por defecto.
//
// · LA VIDA NO PASA DENTRO DE LA CASA. La piichi es una caja casi ciega —una
//   puerta, una ventana, dos cuartos, piso de arena—. El escenario es la
//   ENRAMADA: ahí se descansa, se recibe, se teje y duermen los visitantes.
//
// · NUNCA UN POBLADO. Cinco o seis casas dispersas de una misma familia
//   materna, cada ranchería a minutos de la siguiente. Residencia matrilocal.
//   Matrilineal NO es matriarcal: manda el linaje, y muchas veces no hay jefe
//   visible en cuadro.
//
// · LA CASA NO COMPARTE ENCUADRE CON EL AGUA. Las rancherías se sitúan altas y
//   retiradas del jagüey porque de noche los espíritus de Pulowi rondan el agua.
//
// · LA SEQUÍA NO ES UN POZO VACÍO: es gente cavando casimbas en el lecho seco
//   para sacar agua turbia y salobre.
//
// · EL DIFUNTO VA SIN CALZADO. Mortaja de cuatro capas, pañuelo sobre el
//   rostro, todas las joyas puestas: es etnografía exacta, no adorno.
//
// · WANURÜ NO TIENE CUERPO. El inventario lo marca `restringida`: «no se le da
//   cuerpo, se marca su paso». Se cuenta por sus efectos —la casa al atardecer,
//   el chinchorro a la mañana—, nunca como monstruo.
//
// ── LA TRAMPA DEL PROMPT LARGO ────────────────────────────────────────────
// La tanda 01 de la biblia salió FOTORREALISTA pese a pedir papel recortado:
// el prompt tenía 6.341 caracteres y el bloque de técnica competía con diez
// reglas de color y veinte prohibiciones. El modelo se quedó con la escena y
// tiró la técnica. Por eso aquí las reglas de calor son CUATRO y las
// prohibiciones se agrupan: el generador ya pone la técnica al principio, y no
// se la debe ahogar por debajo.

export const CONTEXTO = "pueblo wayúu, península de La Guajira";

export const DIRECCION =
  "los cuadros van en pares y cada par es UN PLANO DE CINCO SEGUNDOS: el que dice FOTOGRAMA INICIAL lo abre y el que dice FOTOGRAMA FINAL lo cierra. Entre los dos LA CÁMARA SE HA MOVIDO —se acerca, se aleja, rodea, sube o baja, cambia de escala y de ángulo— y LA ACCIÓN HA AVANZADO UN TRAMO LARGO. Se conservan los personajes, el vestuario, el decorado y la hora del día; no se conserva el encuadre. Un modelo de video generará el recorrido intermedio, así que los dos cuadros no pueden parecer la misma foto.";

export const VESTUARIO =
  " Vestuario como en las fichas de la biblia: las mujeres con manta wayúu suelta de una pieza hasta el tobillo, de algodón crudo o teñida de rojo tierra, con cenefa tejida en el ruedo; los hombres mayores con manta de algodón crudo terciada y faja tejida de kanas a la cintura, y los jóvenes con wayuco y el torso descubierto; pies descalzos o con waireñas de suela plana; el sombrero de ala aparece sólo donde la referencia lo trae.";

export const AVOID_BASE =
  "texto, letras, logos, marcas de agua, marcos o bordes; CGI, render 3D o ilustracion digital pulida; miniatura tilt-shift; maqueta de plastilina, arcilla o resina; desenfoque fotografico de poca profundidad de campo; cielo fotografico o en degradado liso; rasgos europeos en cualquier persona; ponchos andinos, sombreros mexicanos, tipis, tocados de plumas de llanura norteamericana o iconografia indigena generica ajena a La Guajira; togas, capuchas, velos, camisas de vestir, pantalones vaqueros, botas o sandalias de correas; coronas, tronos, cetros, templos, iglesias o cruces; saguaros de western en vez de cardon columnar ramificado; poblado grande, calle, plaza o casas alineadas; desnudez integral, sexualizacion o poses insinuantes; sangre abundante, viceras, cadaveres a la vista, lesiones en la piel o cuerpos demacrados; monstruos, demonios, calaveras o figuras encapuchadas de la muerte; cambiar los rostros, mantas o materiales de los personajes de referencia";

export const PALETTE_BASE =
  "ocres y rojos de arena recalentada, pardo de barro seco y de cuero, crema de algodon crudo, verde grisaceo apagado de cardon y trupillo, negro de carbon y naranja de brasa; el rojo tierra de las mantas es el unico acento saturado; sin azules";

const B = "wayuu/biblia";
export const ref = (n) => `${B}/${n}`;

// Candado v4: se hereda el MUNDO, no el encuadre. La segunda frase existe
// porque el generador le pasa `-A` como referencia visual y sin ella el modelo
// copia la composición en vez de continuar el plano.
const LOCK =
  " Es el final del MISMO clip continuo que la imagen de referencia: los mismos personajes con la misma cara y el mismo vestuario, el mismo decorado y la misma hora del día. Pero NO repitas su encuadre: durante estos cinco segundos la cámara se ha desplazado y la escala, el ángulo y el punto de vista son OTROS, y la acción ha avanzado hasta el estado que se describe.";

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
export const escp = (id, refs, partes, avoid) => esc(id, refs, partes, avoid, true);
export const armar = (pares) => pares.flat();
