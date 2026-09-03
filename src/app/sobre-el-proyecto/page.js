import { DocumentTemplate } from "../../components/templates";
import { TextLink } from "../../components/atoms";
import {
  collectUnattributed,
  filterAllowedCommunities,
  UNATTRIBUTED_PATH,
} from "../../lib/communityFilters";
import {
  getDiverseMyths,
  getFeaturedMythsWithImages,
  getTaxonomy,
} from "../../lib/myths";
import { buildSeoMetadata, getSeoEntry } from "../../lib/seo";

export async function generateMetadata() {
  const seo = await getSeoEntry("page", "sobre-el-proyecto");
  return buildSeoMetadata({
    fallback: {
      title: "Sobre el proyecto | Mitos de Colombia",
      description:
        "Buena parte de lo que Colombia sabe de sí misma nunca se escribió: vivió en la voz. Este archivo la deja escrita, situada y con su procedencia a la vista.",
      keywords: [
        "mitos colombianos",
        "archivo",
        "tradición oral",
        "memoria",
        "territorio",
        "comunidades",
      ],
    },
    seo,
    canonicalPath: "/sobre-el-proyecto",
  });
}

export const revalidate = 86400;

// Las cinco macrorregiones que el archivo nombra de corrido. Lo que no cae en
// ninguna de ellas —relatos que cruzan varios territorios a la vez— se cuenta
// aparte y en vivo, para que la frase no mienta si mañana cambia el reparto.
const REGIONES_NOMBRADAS = [
  "andina",
  "caribe",
  "amazonas",
  "pacifico",
  "orinoquia",
];

function getDailySeed() {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const diff = now - startOfYear;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  return dayOfYear;
}

/**
 * El tamaño del archivo se deriva de la misma taxonomía que alimenta
 * /comunidades. Escribir 596, 38 o 253 a mano sería garantizar que la página
 * mienta la primera vez que entre una comunidad nueva.
 */
function contarArchivo(taxonomy) {
  const regiones = taxonomy?.regions || [];
  const comunidades = taxonomy?.communities || [];

  const relatos = regiones.reduce(
    (total, region) => total + (Number(region.myth_count) || 0),
    0
  );
  const enRegionesNombradas = regiones
    .filter((region) => REGIONES_NOMBRADAS.includes(region.slug))
    .reduce((total, region) => total + (Number(region.myth_count) || 0), 0);

  return {
    relatos,
    cruzanTerritorios: Math.max(relatos - enRegionesNombradas, 0),
    pueblos: filterAllowedCommunities(comunidades).length,
    sinPueblo: collectUnattributed(comunidades)?.total || 0,
  };
}

function buildSections(cifras) {
  const hayCifras = cifras.relatos > 0 && cifras.pueblos > 0;

  return [
    {
      title: "Una historia dura lo que dura quien la cuenta",
      body: (
        <>
          <p>
            Buena parte de lo que Colombia sabe de sí misma nunca se escribió.
            Vivió en la voz: en la abuela que contaba, en el tío que sabía la
            versión larga, en la advertencia que alguien recibía antes de entrar
            al monte. Esa manera de guardar la memoria funcionó durante siglos y
            tiene una sola condición: que alguien siga contándola.
          </p>
          <p>
            Cuando esa condición falla no hay estruendo. Un relato no se quema
            ni se pierde en una mudanza; simplemente deja de decirse, y nadie
            anuncia la última vez que se cuenta.
          </p>
          <p>
            Este archivo existe por eso. No para quedarse con los relatos —no
            son nuestros— sino para dejarlos escritos, situados y con su
            procedencia a la vista, antes de que dependan de una sola memoria.
          </p>
        </>
      ),
    },
    {
      title: "Lo que hay aquí",
      body: (
        <>
          {hayCifras ? (
            <p>
              {cifras.relatos} relatos de la región Andina, el Caribe, el
              Amazonas, el Pacífico y la Orinoquía
              {cifras.cruzanTerritorios > 0
                ? ` —${cifras.cruzanTerritorios} de ellos cruzan varios territorios a la vez y no se dejan asignar a uno solo—`
                : ""}
              , con {cifras.pueblos} pueblos y comunidades nombrados uno por
              uno. Otros {cifras.sinPueblo} llegaron{" "}
              <TextLink href={UNATTRIBUTED_PATH}>sin pueblo atribuido</TextLink>
              : en vez de repartirlos entre las comunidades que quedaban cerca
              para cuadrar una lista, están juntos, con lo único que sabemos de
              ellos al frente: el territorio donde se recogieron.
            </p>
          ) : (
            <p>
              Relatos de la región Andina, el Caribe, el Amazonas, el Pacífico y
              la Orinoquía, con cada pueblo y comunidad nombrado uno por uno.
              Los que llegaron{" "}
              <TextLink href={UNATTRIBUTED_PATH}>sin pueblo atribuido</TextLink>{" "}
              no se reparten entre las comunidades que quedaban cerca para
              cuadrar una lista: están juntos, con lo único que sabemos de ellos
              al frente, el territorio donde se recogieron.
            </p>
          )}
          <p>
            Cada ficha guarda dos cosas separadas: la historia contada de
            corrido, para leerla, y lo que se sabe de ella, de dónde viene y
            cómo cambia de un lugar a otro. Se entra por{" "}
            <TextLink href="/mitos">un relato</TextLink>, por{" "}
            <TextLink href="/regiones">territorio</TextLink>, por{" "}
            <TextLink href="/comunidades">pueblo</TextLink> o por{" "}
            <TextLink href="/categorias">tema</TextLink>, y también por{" "}
            <TextLink href="/rutas">rutas</TextLink> que enlazan historias
            distintas con un hilo común:{" "}
            <TextLink href="/rutas/el-agua-avisa">
              el agua avisa antes de venir
            </TextLink>
            ,{" "}
            <TextLink href="/rutas/la-piedra-guarda-la-sentencia">
              la piedra guarda la sentencia
            </TextLink>
            ,{" "}
            <TextLink href="/rutas/el-monte-se-cierra">
              el monte se cierra
            </TextLink>
            .
          </p>
        </>
      ),
    },
    {
      title: "Lo que este archivo no hace",
      body: (
        <>
          <p>
            <TextLink href="/mitos/el-dorado">El Dorado</TextLink> no era una
            ciudad. Era un heredero cubierto de polvo de oro entrando a la
            laguna de Guatavita antes del amanecer, mirado en silencio por su
            gente. La ciudad la inventaron los que vinieron detrás a buscar el
            oro. Convertir un rito en un tesoro, y a un pueblo en un decorado,
            es un error viejo y muy fácil de repetir.
          </p>
          <p>
            Por eso el archivo se cuida de tres cosas. No habla por nadie: los
            pueblos de estas páginas están vivos y tienen voz propia; aquí se
            recogen relatos y se dice de dónde salieron. No adorna: nada suena
            antiguo solo porque sí. Y no rellena huecos para que la colección se
            vea completa; cuando a una ficha le falta bibliografía, lo dice en
            su propia página.
          </p>
        </>
      ),
    },
    {
      title: "Para quién es",
      body: (
        <>
          <p>
            Para quien oyó algo de niño y quiere saber si está escrito en alguna
            parte. Para el que enseña y necesita una versión que no lo deje mal
            parado. Para alguien de una de estas comunidades que quiere revisar
            qué se está diciendo sobre su pueblo. Y para quien abre una página a
            las once de la noche sin más motivo que el gusto de que le cuenten
            algo.
          </p>
          <p>
            Ninguno necesita lo mismo, así que cada ficha se lee por capas: la
            historia sola, o la historia con todo lo que se sabe de ella. Leer
            no exige una cuenta ni un trámite. Cómo se investiga y se escribe
            cada una está contado en{" "}
            <TextLink href="/metodologia">Metodología</TextLink>.
          </p>
        </>
      ),
    },
    {
      title: "Si tú tienes una",
      body: (
        <>
          <p>
            Los textos son adaptaciones para leer en pantalla, no
            transcripciones, y tampoco son la versión definitiva de nada: un
            mito cambia entre familias, veredas y generaciones, y aquí las
            diferencias se muestran por separado en vez de fundirse en una sola.
          </p>
          <p>
            Si perteneces a una comunidad de estas páginas, si conservas una
            versión que aquí no está o si algo está mal contado, escríbenos
            desde <TextLink href="/contacto">Contacto</TextLink>. Una corrección
            documentada pesa más que la consistencia del archivo: preferimos
            reabrir una ficha terminada antes que sostener una versión cómoda.
          </p>
          <p>
            Cada versión que alguien comparte es una historia menos que depende
            de una sola memoria.
          </p>
        </>
      ),
    },
  ];
}

export default async function SobreElProyectoPage() {
  const seed = getDailySeed();
  const [featuredMyths, diverseMyths, taxonomy] = await Promise.all([
    getFeaturedMythsWithImages(6, seed),
    getDiverseMyths(6, seed),
    getTaxonomy(),
  ]);

  // En producción prioriza mitos con imagen; si no hay, cae a una muestra diversa.
  const relatedPool =
    (featuredMyths || []).length >= 6 ? featuredMyths : diverseMyths;
  const related = (relatedPool || []).slice(0, 6).map((m) => ({
    slug: m.slug,
    title: m.title,
    excerpt: m.excerpt,
    region: m.region,
    community: m.community,
    imageUrl: m.image_url,
  }));

  return (
    <DocumentTemplate
      eyebrow="Archivo editorial"
      title="Escribir para que no se pierda"
      description="Buena parte de lo que Colombia sabe de sí misma nunca se escribió: vivió en la voz. Este archivo la deja escrita, situada y con su procedencia a la vista."
      breadcrumb={[{ label: "Inicio", href: "/" }, { label: "Sobre el proyecto" }]}
      sections={buildSections(contarArchivo(taxonomy))}
      related={related}
      accent="jungle"
    />
  );
}
