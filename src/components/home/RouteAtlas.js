import Link from "next/link";
import { Icon, ImageFrame } from "../atoms";
import styles from "./home-journey.module.css";

/** Las rutas son un friso continuo. Todas permanecen en el HTML y se recorren
 * con desplazamiento nativo; la salida al índice sigue visible en la cabecera. */
export function RouteCards({ routes = [] }) {
  if (!routes.length) return null;
  const taken = new Set();
  return (
    <ul className={styles.routeRail} aria-label="Las otras cartografías">
      {routes.map((route) => {
        const options = [route.imageUrl, route.portraitImageUrl].filter(Boolean);
        const art = options.find((url) => !taken.has(url)) || options[0];
        if (art) taken.add(art);
        return (
          <li key={route.slug}>
            <Link href={`/rutas/${route.slug}`} className={`group ${styles.routePlate}`}>
              <ImageFrame src={art} alt="" ratio="3 / 2" sizes="(max-width: 767px) 65vw, 25vw" quality={90} className="rounded-none border-0" imgClassName="atlas-image-zoom object-cover" />
              <span className={styles.routePlateCaption}>
                <span className={styles.routeNumber}>Ruta {route.index}</span>
                <h3 className="atlas-title-sm !text-white">{route.title}</h3>
                <Icon name="arrow-right" size={17} className="mt-3" />
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
