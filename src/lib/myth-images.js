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
 * Normaliza las tres superficies de imagen disponibles para un mito.
 *
 * `imageUrl` se mantiene como compatibilidad con los componentes anteriores,
 * pero no se considera vertical salvo que venga acompañado de una propiedad
 * explícita de orientación.
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
  const editorial = firstImage(
    myth.editorialImageUrl,
    myth.editorial_image_url
  );
  const all = [...new Set([landscape, portrait, editorial].filter(Boolean))];

  return { landscape, portrait, editorial, all };
}

/**
 * Elige la imagen según la proporción real del espacio.
 *
 * - landscape: héroes, bandas y tarjetas 4:3 o más anchas.
 * - portrait: tarjetas 3:4, 4:5 y páginas editoriales.
 * - square: miniaturas centradas; la vertical conserva mejor al personaje.
 * - editorial: pausa narrativa secundaria, cuando existe una tercera escena.
 */
export function getMythImage(
  myth,
  role = "landscape",
  { fallback = true } = {}
) {
  const { landscape, portrait, editorial } = getMythImageVariants(myth);

  if (role === "portrait" || role === "square") {
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
    editorialImageUrl: variants.editorial,
    imageUrls: variants.all,
  };
}
