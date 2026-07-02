/**
 * Fragmentos de clase compartidos entre atoms — fuente única de verdad para
 * altura de controles, anillos de foco y base de campos. Mantiene la
 * consistencia visual del sistema (rediseño 2026).
 */

/** Alturas de control alineadas: un Button, Input, Select e IconButton "md" comparten baseline. */
export const CONTROL_HEIGHTS = { sm: "h-8", md: "h-9", lg: "h-11" };

/** Anillo de foco para elementos accionables (botones, enlaces-botón). */
export const RING_BUTTON =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jungle-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-paper";

/** Foco para campos de formulario: borde verde + halo suave. */
export const RING_FIELD =
  "focus:outline-none focus:border-jungle-500 focus:ring-[3px] focus:ring-jungle-500/15";

/** Micro-interacción táctil compartida por los controles accionables. */
export const PRESS = "transition-colors duration-150 active:translate-y-px";

/** Base común de campos de texto (Input, Select, Textarea). */
export const FIELD_BASE =
  "w-full rounded border border-line-200 bg-white font-body text-sm text-ink-900 placeholder:text-ink-500 transition-colors duration-150 hover:border-line-300 disabled:cursor-not-allowed disabled:border-line-200 disabled:bg-mist-50 disabled:text-ink-500";

/** Clases de estado inválido para campos. */
export const FIELD_INVALID =
  "border-red-400 focus:border-red-500 focus:ring-red-500/15";
