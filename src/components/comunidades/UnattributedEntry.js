import Link from "next/link";
import { Container, Icon, ImageFrame } from "../atoms";

/**
 * La puerta a los relatos sin pueblo atribuido, dentro de /comunidades.
 *
 * Va **debajo** de la mesa y **fuera** de ella, y eso es todo el argumento: en
 * la base hay diez bolsas del importador etiquetadas «mestizo» y «mixto» que
 * guardan 253 relatos —el 42,5 % del archivo—. Colarlas entre las piezas de la
 * mesa daría a entender que «mestizo» es un pueblo más, con su territorio y su
 * cifra, y no lo es. Borrarlas, que es lo que hacía el índice, deja fuera casi
 * la mitad del corpus sin decirlo en ninguna parte.
 *
 * Aquí tienen su propio registro, con su nombre y con lo único que el archivo
 * sí sabe de esos relatos: en qué territorio se recogieron.
 *
 * Es la misma decisión que tomó la portada con `UnattributedBand`; esta pieza
 * es su equivalente en el índice, y por eso comparte rótulo y encabezado.
 */
export function UnattributedEntry({ data }) {
  if (!data?.total) return null;

  const { label, href, total, territories = [], buckets = [] } = data;
  const etiquetas = buckets.length
    ? buckets.map((b) => `«${b.toLowerCase()}»`).join(" y ")
    : "genéricas";

  return (
    <section className="border-y border-line-100 bg-mist-50">
      <Container size="atlas" className="py-14 md:py-16">
        <div className="grid gap-9 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-14">
          <div>
            <p className="atlas-kicker">Otras voces de Colombia</p>
            <h2 className="atlas-section-heading mt-2">{label}</h2>
            <span className="atlas-rule" />
            <p className="mt-5 max-w-prose leading-relaxed text-ink-700">
              {total} relatos mestizos y mixtos, entre ciudades, campos y caminos. Explóralos por territorio. Las etiquetas {etiquetas} no identifican un pueblo específico en las fuentes del archivo.
            </p>
            <Link href={href} className="atlas-link group mt-6 inline-flex">
              Entrar a los {total} relatos
              <Icon name="arrow-right" size={17} className="mc-arrow" />
            </Link>
          </div>

          <ul className="grid grid-cols-2 gap-[2px] sm:grid-cols-3">
            {territories.map((territory) => <li key={territory.slug}><Link href={`${href}#territorio-${territory.slug}`} className="group block"><ImageFrame src={territory.imageUrl} alt="" ratio="3 / 2" sizes="(max-width: 767px) 45vw, 20vw" quality={90} className="border-0 rounded-none" /><span className="block px-2 py-3"><span className="atlas-title-sm">{territory.name}</span><span className="mt-1 block text-xs text-ink-700">{territory.count} relatos</span></span></Link></li>)}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default UnattributedEntry;
