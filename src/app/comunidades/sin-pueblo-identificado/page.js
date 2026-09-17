import { notFound } from "next/navigation";
import { collectUnattributed, UNATTRIBUTED_PATH } from "../../../lib/communityFilters";
import { getTaxonomy, listMythLinksByTaxon, listMythPlatesByTaxon } from "../../../lib/myths";
import { withMythImageVariants } from "../../../lib/myth-images";
import { buildSeoMetadata, getSeoEntry } from "../../../lib/seo";
import { BreadcrumbJsonLd, CollectionPageJsonLd } from "../../../components/StructuredData";
import { UnattributedTemplate } from "../../../components/comunidades/UnattributedTemplate";

/**
 * `/comunidades/sin-pueblo-identificado`
 *
 * La superficie que le faltaba al 42,5 % del archivo. Diez bolsas del
 * importador —cinco «Mestizo» y cinco «Mixto», una por territorio— guardan 253
 * relatos que el índice de comunidades descartaba con una lista de tokens, sin
 * decirlo en ninguna parte.
 *
 * Este segmento estático gana al dinámico `[slug]`, así que la ruta es suya
 * aunque nunca exista una comunidad con este slug.
 *
 * Cómo se arma el reparto por territorio: la consulta de relatos por comunidad
 * empareja por slug **o** por nombre, de modo que pedir «mestizo» devuelve la
 * unión de las cinco filas homónimas —los 184 relatos— pero sin decir de qué
 * territorio es cada uno. El territorio se cruza aparte, con la lista ligera
 * (slug + título) de cada región. Son seis consultas de renglones y dos de
 * obra para una página que se regenera cada hora.
 */

export const runtime = "nodejs";
export const revalidate = 3600;

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "")
)
  .trim()
  .replace(/\/+$/, "");

const TITULO = "Relatos sin pueblo identificado";
const DESCRIPCION =
  "Los relatos del archivo que llegaron sin constancia de qué pueblo los contaba, ordenados por el territorio donde se recogieron.";

export async function generateMetadata() {
  const seo = await getSeoEntry("page", "sin-pueblo-identificado");
  return buildSeoMetadata({
    fallback: {
      title: `${TITULO} | Mitos de Colombia`,
      description: DESCRIPCION,
      keywords: [
        "mitos colombianos",
        "leyendas mestizas",
        "tradición oral",
        "relatos sin comunidad",
        "archivo de mitos",
      ],
    },
    seo,
    canonicalPath: UNATTRIBUTED_PATH,
  });
}

export default async function SinPuebloIdentificadoPage() {
  const taxonomy = await getTaxonomy();
  const sinPueblo = collectUnattributed(taxonomy.communities);

  if (!sinPueblo) {
    notFound();
  }

  // Todos los relatos de las bolsas, con su obra. Una consulta por slug
  // distinto (`mestizo`, `mixto`); la unión de ambas son los 253.
  const porBolsa = await Promise.all(
    sinPueblo.bucketSlugs.map((slug) => listMythPlatesByTaxon("community", slug))
  );

  const relatos = new Map();
  porBolsa.flat().forEach((relato) => {
    if (relato?.slug && !relatos.has(relato.slug)) {
      relatos.set(relato.slug, relato);
    }
  });

  // De qué territorio es cada relato. La lista ligera basta: sólo hace falta
  // el slug para cruzar.
  const territorios = sinPueblo.territories;
  const porTerritorio = await Promise.all(
    territorios.map((territorio) => listMythLinksByTaxon("region", territorio.slug))
  );

  const secciones = territorios.map((territorio, i) => {
    const suyos = (porTerritorio[i] || [])
      .map((enlace) => relatos.get(enlace.slug))
      .filter(Boolean)
      .map((relato) =>
        withMythImageVariants({
          slug: relato.slug,
          title: relato.title,
          image_url: relato.image_url,
          vertical_image_url: relato.vertical_image_url,
        })
      );
    return { ...territorio, myths: suyos };
  });

  const total = secciones.reduce((suma, seccion) => suma + seccion.myths.length, 0);

  const collectionItems = secciones
    .flatMap((seccion) => seccion.myths)
    .slice(0, 30)
    .map((relato) => ({
      url: `${SITE_URL}/mitos/${relato.slug}`,
      name: relato.title,
    }));

  const lead = `${total} relatos del archivo llegaron sin que la fuente dejara constancia de qué pueblo los contaba. No son una comunidad: son lo que queda cuando la atribución se pierde por el camino.`;

  const sections = [
    {
      title: "Por qué existe este registro",
      body: `Al cargar el archivo, los relatos cuya procedencia no constaba se agruparon bajo etiquetas genéricas —${sinPueblo.buckets
        .map((b) => `«${b.toLowerCase()}»`)
        .join(" y ")}—, una por territorio. Esas etiquetas no nombran a ningún pueblo, así que el índice de comunidades las descartaba para no presentarlas como si lo fueran.\nEl efecto fue que ${total} relatos, el 42,5 % del archivo, dejaron de tener puerta de entrada. Este registro es esa puerta: mantiene la distinción —aquí no se afirma quién contó nada— sin que eso siga costando la mitad del corpus.`,
    },
    {
      title: "Qué hay dentro",
      body: "Conviven dos cosas distintas. Una parte son relatos de tradición mestiza y campesina que circulan por pueblos y veredas de todo el país, sin dueño único, y para los que «pueblo de origen» no es la pregunta adecuada. La otra parte son relatos claramente indígenas —de la Amazonía sobre todo— cuya comunidad la fuente sí conocía pero no anotó.\nEl archivo no puede distinguirlas sin volver a las fuentes, y no va a adivinar. Por eso el rótulo dice lo que sabe: no se identificó el pueblo.",
    },
    {
      title: "Por qué se ordenan por territorio",
      body: "El territorio es el único dato de procedencia que estos relatos conservan y que se puede verificar dentro del archivo. Ordenar por él no atribuye nada a nadie: sólo dice dónde se recogió cada historia.\nDesde cada territorio se pasa a su página, donde estos relatos vuelven a mezclarse con los que sí tienen pueblo, que es como se leen en el mundo.",
    },
  ];

  return (
    <>
      {SITE_URL && (
        <>
          <BreadcrumbJsonLd
            items={[
              { name: "Inicio", url: `${SITE_URL}/` },
              { name: "Comunidades", url: `${SITE_URL}/comunidades` },
              { name: TITULO, url: `${SITE_URL}${UNATTRIBUTED_PATH}` },
            ]}
          />
          <CollectionPageJsonLd
            name={TITULO}
            description={DESCRIPCION}
            url={`${SITE_URL}${UNATTRIBUTED_PATH}`}
            items={collectionItems}
          />
        </>
      )}
      <UnattributedTemplate
        label={sinPueblo.label}
        lead={lead}
        sections={sections}
        territories={secciones}
        total={total}
        bucketNames={sinPueblo.buckets}
      />
    </>
  );
}
