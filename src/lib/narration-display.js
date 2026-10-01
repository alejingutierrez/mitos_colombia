/** Formatos compartidos con el reproductor del navegador, sin módulos de Node. */
export function formatNarrationLength(seconds) {
  if (!Number.isFinite(seconds) || seconds <= 0) return null;
  return `${Math.max(1, Math.round(seconds / 60))} min`;
}

export function formatClock(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const total = Math.floor(seconds);
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, "0")}`;
}
