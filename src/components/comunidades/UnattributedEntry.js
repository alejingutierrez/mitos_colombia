import Link from "next/link";
import { Container, Icon, MotifMask } from "../atoms";
import { REGION_MOTIFS } from "../../lib/region-info";

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
            <p className="atlas-kicker">Territorio sin pueblo atribuido</p>
            <h2 className="atlas-section-heading mt-2">{label}</h2>
            <span className="atlas-rule" />
            <p className="mt-5 max-w-prose leading-relaxed text-ink-700">
              {total} relatos entraron al archivo bajo las etiquetas {etiquetas},
              que el importador usó cuando la fuente no dejó constancia de quién
              los contaba. Son el 42,5 % del corpus. No nombran a un pueblo, así
              que no aparecen en la mesa de arriba: tienen su propio registro,
              ordenado por lo único que sí consta, el territorio donde se
              recogieron.
            </p>
            <Link href={href} className="atlas-link group mt-6 inline-flex">
              Entrar a los {total} relatos
              <Icon name="arrow-right" size={17} className="mc-arrow" />
            </Link>
          </div>

          <ul className="grid grid-cols-1 gap-px self-start border border-line-200 bg-line-200 sm:grid-cols-2">
            {territories.map((territorio) => (
              <li key={territorio.slug}>
                <Link
                  href={`${href}#territorio-${territorio.slug}`}
                  className="group flex items-center justify-between gap-4 bg-paper px-5 py-4 transition-colors hover:bg-white"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <MotifMask
                      src={`/motifs/${REGION_MOTIFS[territorio.slug] || "condor"}-96.png`}
                      width={22}
                      className="shrink-0 text-jungle-500/60 transition-colors group-hover:text-jungle-600"
                    />
                    <span className="atlas-title-sm truncate">{territorio.name}</span>
                  </span>
                  <span className="atlas-figure shrink-0 text-[0.8125rem] text-ink-500">
                    {territorio.count}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default UnattributedEntry;
