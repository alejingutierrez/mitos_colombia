/**
 * Atom · CountUp
 * Cifra estable para estadísticas. El valor final se entrega desde el servidor
 * para que lectores, crawlers y navegadores sin JavaScript reciban la misma
 * información.
 */
export function CountUp({ to = 0, suffix = "", className, ...props }) {
  const value = Number.isFinite(Number(to)) ? Number(to) : 0;
  return (
    <span className={className} {...props}>
      {value.toLocaleString("es")}
      {suffix}
    </span>
  );
}
