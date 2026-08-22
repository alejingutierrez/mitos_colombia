function cleanImageUrl(value) {
  if (!value) return null;
  const normalized = String(value).trim();
  return normalized || null;
}

function firstImage(...values) {
  return values.map(cleanImageUrl).find(Boolean) || null;
}

function imageTimestamp(value) {
  if (!value) return null;
  const timestamp = new Date(value).getTime();
  return Number.isFinite(timestamp) ? timestamp : null;
}

/**
 * Una variante solo es vigente si no es anterior a la imagen canónica del mito.
 * Las fechas ausentes se aceptan para conservar compatibilidad con SQLite y
 * registros históricos que todavía no incluyen timestamps.
 */
export function isMythImageVariantCurrent({
  variantUpdatedAt,
  sourceUpdatedAt,
} = {}) {
  const variantTimestamp = imageTimestamp(variantUpdatedAt);
  const sourceTimestamp = imageTimestamp(sourceUpdatedAt);

  if (variantTimestamp === null || sourceTimestamp === null) return true;
  return variantTimestamp >= sourceTimestamp;
}

/**
 * Normaliza las superficies de imagen disponibles para un mito.
 *
 * El sistema visual de cada mito es un tríptico de tres escenas distintas —no
 * tres recortes de la misma—, una por formato:
 *
 *   landscape 16:9 · la entrada  · el personaje llega a su mundo
 *   portrait  9:16 · el acto     · el momento por el que se cuenta el mito
 *   square    1:1  · la huella   · lo que queda cuando el personaje ya no está
 *
 * `imageUrl` se mantiene como compatibilidad con los componentes anteriores,
 * pero no se considera vertical salvo que venga acompañado de una propiedad
 * explícita de orientación. `editorial` es la cuarta superficie histórica y se
 * conserva como respaldo de los mitos que aún no tienen tríptico.
 */
export function getMythImageVariants(myth = {}) {
  const landscape = firstImage(
    myth.landscapeImageUrl,
    myth.landscape_image_url,
    myth.image_url,
    myth.imageUrl
  );
  const portrait = firstImage(
    myth.portraitImageUrl,
    myth.verticalImageUrl,
    myth.vertical_image_url
  );
  const square = firstImage(myth.squareImageUrl, myth.square_image_url);
  const editorial = firstImage(
    myth.editorialImageUrl,
    myth.editorial_image_url
  );
  const all = [
    ...new Set([landscape, portrait, square, editorial].filter(Boolean)),
  ];

  return { landscape, portrait, square, editorial, all };
}

/**
 * Un mito tiene tríptico completo cuando existen las tres escenas propias, sin
 * respaldos: la interna puede mostrar entrada, acto y huella por separado.
 */
export function hasMythTriptych(myth = {}) {
  const { landscape, portrait, square } = getMythImageVariants(myth);
  return Boolean(landscape && portrait && square);
}

/**
 * Elige la imagen según la proporción real del espacio.
 *
 * - landscape: héroes, bandas y tarjetas 4:3 o más anchas.
 * - portrait: tarjetas 3:4, 4:5 y páginas editoriales.
 * - square: miniaturas centradas y emblemas; la huella del tríptico está hecha
 *   para leerse en pequeño, y si el mito no la tiene la vertical conserva mejor
 *   al personaje que un recorte de la apaisada.
 * - editorial: pausa narrativa secundaria, cuando existe una tercera escena.
 */
export function getMythImage(
  myth,
  role = "landscape",
  { fallback = true } = {}
) {
  const { landscape, portrait, square, editorial } = getMythImageVariants(myth);

  if (role === "square") {
    if (!fallback) return square;
    return square || portrait || editorial || landscape;
  }
  if (role === "portrait") {
    if (!fallback) return portrait;
    return portrait || editorial || landscape;
  }
  if (role === "editorial") {
    if (!fallback) return editorial;
    return editorial || landscape || portrait;
  }
  if (!fallback) return landscape;
  return landscape || editorial || portrait;
}

export function hasMythImageRoles(myth, roles = []) {
  return roles.every((role) =>
    Boolean(getMythImage(myth, role, { fallback: false }))
  );
}

export function withMythImageVariants(myth = {}) {
  const variants = getMythImageVariants(myth);
  return {
    ...myth,
    imageUrl: variants.landscape || variants.editorial || variants.portrait,
    landscapeImageUrl: variants.landscape,
    portraitImageUrl: variants.portrait,
    squareImageUrl: variants.square,
    editorialImageUrl: variants.editorial,
    imageUrls: variants.all,
  };
}
