"use client";

import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { Icon, ImageFrame } from "../atoms";
import { cn } from "../../lib/utils";

/**
 * «Sin pueblo identificado» — la otra mitad del archivo.
 *
 * Diez bolsas del importador (mestizo, mixto) guardan 253 relatos: el 42,5 % del
 * archivo. La home los descartaba enteros porque la sección de comunidades sólo
 * sabía hablar de pueblos, así que casi la mitad del corpus no tenía por dónde
 * entrar.
 *
 * Esta banda NO es una pestaña más de comunidad, y es deliberado: estos relatos
 * se recogieron sin procedencia atribuible, y colarlos entre los pueblos daría a
 * entender que «mestizo» es uno. Van aparte, con su propio nombre, y se ordenan
 * por territorio —que es lo único que el archivo sí sabe de ellos—.
 */
export function UnattributedBand({ data }) {
  const reduce = useReducedMotion();
  if (!data?.myths?.length) return null;

  const { label, description, mythCount, regions = [], myths } = data;

  return (
    <section className="border-y border-line-100 bg-mist-50">
      <div className="atlas-gutter mx-auto w-full max-w-[1460px] atlas-section-y">
        <div className="grid gap-8 lg:grid-cols-[22rem_1fr] lg:gap-12">
          <div>
            <p className="atlas-kicker">Territorio sin pueblo atribuido</p>
            <h2 className="atlas-section-heading mt-2">{label}</h2>
            <p className="mt-4 max-w-prose text-[15px] leading-relaxed text-ink-700">
              {description}
            </p>

            {mythCount ? (
              <p className="mt-5 text-sm text-ink-500">
                <span className="atlas-figure text-ink-900">{mythCount}</span>{" "}
                {mythCount === 1 ? "relato" : "relatos"}
                {regions.length
                  ? ` en ${regions.length === 1 ? "un territorio" : `${regions.length} territorios`}`
                  : null}
                .
              </p>
            ) : null}

            <Link href="/mitos" className="atlas-link group mt-5 inline-flex">
              Recorrer el archivo
              <Icon name="arrow-right" size={17} className="mc-arrow" />
            </Link>
          </div>

          <ul className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-6">
            {myths.map((myth) => (
              <li key={myth.slug}>
                <Link
                  href={`/mitos/${myth.slug}`}
                  className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jungle-500/40"
                >
                  <ImageFrame
                    src={myth.imageUrl}
                    alt=""
                    ratio="3 / 4"
                    sizes="(max-width: 767px) 45vw, (max-width: 1023px) 30vw, 17vw"
                    quality={68}
                    placeholderMotif={myth.motif || "hoja"}
                    placeholderSize={56}
                    imgClassName={cn("object-cover", !reduce && "atlas-image-zoom")}
                  />
                  {myth.region ? (
                    <p className="atlas-kicker mt-3 text-ink-500">{myth.region}</p>
                  ) : null}
                  <h3 className="atlas-title-sm mt-1 transition-colors group-hover:text-jungle-600">
                    {myth.title}
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default UnattributedBand;
