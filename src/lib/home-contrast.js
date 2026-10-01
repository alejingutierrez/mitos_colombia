/** La lectura usa el recorte visible de object-fit: cover, no el máster entero. */
export function coverSampleRect(image, line, position = [0.5, 0.15]) {
  const { left, top, width, height, naturalWidth, naturalHeight } = image;
  if (!width || !height || !naturalWidth || !naturalHeight) return null;
  const x = Math.max(left, line.left);
  const y = Math.max(top, line.top);
  const right = Math.min(left + width, line.right);
  const bottom = Math.min(top + height, line.bottom);
  if (right <= x || bottom <= y) return null;
  const scale = Math.max(width / naturalWidth, height / naturalHeight);
  return {
    x: (x - left + (naturalWidth * scale - width) * position[0]) / scale,
    y: (y - top + (naturalHeight * scale - height) * position[1]) / scale,
    width: (right - x) / scale,
    height: (bottom - y) / scale,
  };
}

export function relativeLuminance([red, green, blue]) {
  const linear = (value) => {
    const channel = value / 255;
    return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * linear(red) + 0.7152 * linear(green) + 0.0722 * linear(blue);
}

/** Los extremos evitan decidir por el promedio de una escena de alto contraste.
 * Si ninguno de los dos colores da lectura, el papel se limita al texto. */
export function titleTone(luminances, inkRgb = [16, 53, 36], minimum = 4.5) {
  if (!luminances.length) return "paper";
  const sorted = [...luminances].sort((a, b) => a - b);
  const low = sorted[Math.floor((sorted.length - 1) * 0.05)];
  const high = sorted[Math.ceil((sorted.length - 1) * 0.95)];
  const inkScore = (low + 0.05) / (relativeLuminance(inkRgb) + 0.05);
  const whiteScore = 1.05 / (high + 0.05);
  if (inkScore >= minimum && inkScore >= whiteScore) return "ink";
  if (whiteScore >= minimum) return "light";
  if (inkScore >= minimum) return "ink";
  return "paper";
}
