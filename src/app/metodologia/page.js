import { DocumentTemplate } from "../../components/templates";
import { TextLink } from "../../components/atoms";
import {
  getDiverseMyths,
  getFeaturedMythsWithImages,
  getSourceCoverageStats,
} from "../../lib/myths";
import { buildSeoMetadata, getSeoEntry } from "../../lib/seo";

export async function generateMetadata() {
  const seo = await getSeoEntry("page", "metodologia");
  return buildSeoMetadata({
    fallback: {
      title: "Metodología editorial",
      description:
        "Casi ningún relato llega completo. Así decidimos qué puede afirmarse, qué se atribuye a una versión concreta y qué tiene que quedar en duda.",
      keywords: [
        "metodología editorial",
        "fuentes",
        "crónicas coloniales",
        "versiones",
        "correcciones",
        "archivo",
        "mitos de Colombia",
      ],
    },
    seo,
    canonicalPath: "/metodologia",
  });
}

export const revalidate = 86400;

function getDailySeed() {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const diff = now - startOfYear;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

/**
 * Las cifras de cobertura NO se escriben a mano: salen de
 * `getSourceCoverageStats()`. Una página que promete no afirmar lo que no puede
 * respaldar no puede llevar un número congelado que envejece solo.
 */
function buildSections(sourceCoverage) {
  const totalFichas = sourceCoverage?.totalMyths || 0;
  const conFuentes = sourceCoverage?.mythsWithSources || 0;
  const sinFuentes = Math.max(totalFichas - conFuentes, 0);

  return [
    {
      title: "Una historia llega en pedazos",
      body: (
        <>
          <p>
            Casi ningún relato llega completo. Llega como un párrafo dentro de
            una crónica del siglo XVII, como una versión que un investigador
            anotó hace cuarenta años, como un nombre que cambió tres veces de
            grafía, como una laguna que dos fuentes ponen en orillas distintas
            del mismo río.
          </p>
          <p>
            El trabajo empieza ahí: decidir qué puede afirmarse, qué hay que
            atribuir a una versión concreta y qué tiene que quedar en duda. Esta
            página cuenta cómo se toma esa decisión, que es lo único que separa
            un archivo de un rumor bien escrito.
          </p>
        </>
      ),
    },
    {
      title: "De dónde tiene que venir un relato",
      body: (
        <>
          <p>
            No buscamos cinco enlaces: buscamos cinco cosas distintas. La
            memoria viva de la comunidad. La versión escrita más temprana que se
            conserve. Investigación reciente. Una fuente del territorio, de
            quien conoce esa laguna, ese páramo, ese río. Y, para cada
            comparación con otra mitología, una referencia directa a esa
            tradición.
          </p>
          <p>
            Cinco páginas que copian la misma crónica no son cinco evidencias:
            son una sola, repetida, y una fuente posterior que repite a otra no
            cuenta dos veces. De cada una guardamos autor, fecha, dónde
            consultarla y hasta dónde no alcanza.
          </p>
          <p>
            Cuando no aparece un respaldo creíble, la ficha no se rellena con lo
            que haya a la mano: dice que su bibliografía está pendiente. Un
            vacío admitido vale más que un vacío disimulado.
          </p>
        </>
      ),
    },
    {
      title: "Cómo leemos las crónicas coloniales",
      body: (
        <>
          <p>
            Buena parte de lo que hoy puede leerse llegó a la escritura por
            cronistas, religiosos y funcionarios coloniales. Son fuentes
            indispensables y no son transparentes: se escribieron después de la
            invasión, en otra lengua y desde una religión que daba por falsa la
            que describía.
          </p>
          <p>
            Por eso anotamos quién escribió, cuándo y con qué propósito, qué
            palabra tradujo y qué escena interpretó desde su propia fe. Y la
            fecha del libro no es la edad del relato: confundirlas convierte a
            un pueblo con siglos de historia en algo que empezó el día en que un
            español lo anotó.
          </p>
        </>
      ),
    },
    {
      title: "Cuando las versiones no coinciden",
      body: (
        <>
          <p>
            No las conciliamos. En{" "}
            <TextLink href="/mitos/creacion-nukak-maku">
              «Machoroko y el nacimiento Nɨkak»
            </TextLink>
            , Embe narró una secuencia y Kerayi narró otra en la que cambian los
            nombres de quienes guiaron la migración. La ficha sigue a Embe,
            registra la variante y no decide cuál nombre es más auténtico.
          </p>
          <p>
            Es la regla: dos versiones que no encajan van por separado, cada una
            atribuida a quien la contó.
          </p>
          <p>
            La duda también se escribe. Si no sabemos el nombre de un personaje
            o el sentido de un objeto, lo decimos o lo omitimos, pero no lo
            completamos. Que un relato fluya mejor nunca justifica convertir una
            posibilidad en tradición confirmada.
          </p>
        </>
      ),
    },
    {
      title: "El relato va aparte de su explicación",
      body: (
        <>
          <p>
            Los textos son adaptaciones editoriales para lectura digital, no
            transcripciones. En Relato solo ocurre la historia: no entran
            cronistas, fechas, citas ni discusiones entre versiones. Todo eso
            vive al lado, en Historia, Versiones, Lección y Similitudes, para
            que puedas distinguir el relato de lo que sabemos sobre él.
          </p>
          <p>
            La voz es seria y clara. Un niño puede seguir la acción y un adulto
            encontrar el fondo, sin que el texto le hable a ninguno de los dos
            como si fuera ingenuo. No escribimos «misterio ancestral» ni «desde
            tiempos inmemoriales»: son fórmulas que le sirven a cualquier
            historia y por eso no dicen nada de esta. La lección va en
            una sola frase filosófica de 8 a 22 palabras, un límite incómodo a
            propósito: en veintidós palabras no cabe un sermón.
          </p>
          <p>
            Podemos ordenar escenas, comprimir el tiempo y describir un paisaje
            que existe. No podemos inventar un nombre tradicional, un
            parentesco, una ceremonia ni una certeza histórica. Un detalle
            inventado porque suena bien se copia, se cita, y a la tercera vuelta
            ya es «tradición» de un pueblo que nunca dijo eso.
          </p>
        </>
      ),
    },
    {
      title: "Lo que no hacemos",
      body: (
        <>
          <p>
            No creamos taxonomías nuevas para acomodar un caso suelto: si
            ninguna existente es exacta, se usa la más cercana sin deformar el
            mito y se anota la limitación. Una coincidencia de nombres tampoco
            basta para atribuirle un relato a un pueblo: hacen falta territorio,
            transmisión y fuentes.
          </p>
          <p>
            Con otras mitologías el oficio es comparar sin borrar las
            diferencias: que dos relatos compartan un diluvio no prueba copia ni
            contacto, y el paralelo solo sirve si devuelve la atención a lo que
            este relato, en este lugar, sí dice.
          </p>
          <p>
            Y el punto del mapa señala la laguna, el cerro o el río de la
            historia, no la cabecera municipal más cercana; cuando solo puede
            ser aproximado, la ficha lo dice. Seis decimales no vuelven cierto
            lo que las fuentes dejan en duda.
          </p>
        </>
      ),
    },
    {
      title: "Integridad del registro y posibilidad de corregir",
      body: (
        <>
          {totalFichas > 0 ? (
            <p>
              Hoy {conFuentes} de las {totalFichas} fichas tienen fuentes
              editoriales enlazadas. Las otras {sinFuentes} no, y lo dicen en su
              propia página: es el estado real del trabajo, no una manera de
              hablar.
            </p>
          ) : null}
          <p>
            Ninguna ficha está cerrada. La de los Nɨkak llegó heredada con
            rasgos de origen que una investigación posterior demostró que
            pertenecen a los Kakua: se corrigió entera y se conservó su
            dirección para no romper los enlaces que apuntaban a ella. Una ficha
            se reabre cuando aparece una fuente primaria no considerada, una
            atribución equivocada o una variante presentada como certeza.
          </p>
        </>
      ),
    },
    {
      title: "Correcciones, comunidad y derecho de respuesta",
      body: (
        <>
          <p>
            Cualquier persona o comunidad vinculada a un relato puede señalar
            una atribución equivocada, aportar una versión local o advertir que
            un nombre, una imagen o una explicación no corresponde, desde{" "}
            <TextLink href="/contacto">Contacto</TextLink>.
          </p>
          <p>
            La corrección se registra, se contrasta y se responde. No le
            exigimos a una memoria viva que coincida con una crónica colonial
            para reconocerle valor, ni mezclamos las dos épocas como si fueran
            un mismo testimonio. Si el cambio toca el centro de la ficha, vuelve
            a revisión completa.
          </p>
          <p>
            Una corrección documentada tiene prioridad sobre la consistencia del
            archivo.
          </p>
        </>
      ),
    },
  ];
}

export default async function MetodologiaPage() {
  const seed = getDailySeed();
  const [featuredMyths, diverseMyths, sourceCoverage] = await Promise.all([
    getFeaturedMythsWithImages(6, seed),
    getDiverseMyths(6, seed),
    getSourceCoverageStats(),
  ]);

  const relatedPool =
    (featuredMyths || []).length >= 6 ? featuredMyths : diverseMyths;
  const related = (relatedPool || []).slice(0, 6).map((myth) => ({
    slug: myth.slug,
    title: myth.title,
    excerpt: myth.excerpt,
    region: myth.region,
    community: myth.community,
    imageUrl: myth.image_url,
  }));

  return (
    <DocumentTemplate
      eyebrow="Metodología editorial"
      title="Cómo una historia entra al archivo"
      description="Casi ningún relato llega completo. Esta página cuenta cómo se decide qué puede afirmarse, qué se atribuye a una versión concreta y qué tiene que quedar en duda."
      breadcrumb={[{ label: "Inicio", href: "/" }, { label: "Metodología" }]}
      updated="3 de septiembre de 2026"
      sections={buildSections(sourceCoverage)}
      related={related}
      accent="river"
    />
  );
}
