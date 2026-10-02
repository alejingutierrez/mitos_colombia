import Link from "next/link";
import { Container, Eyebrow, Heading, Text } from "../../../components/atoms";
import { Breadcrumb } from "../../../components/molecules";
import { Header } from "../../../components/organisms";
import { MythHero, MythIntroMobile } from "../../../components/templates/MythHero";

export const metadata = {
  title: "Sistema de diseño · Portada del mito en móvil",
  robots: { index: false, follow: false },
};

const BLOB = "https://c5htob7za0dl3b5x.public.blob.vercel-storage.com/vertical/myth";

const MYTHS = {
  anansi: {
    slug: "anansi",
    title: "Anansi",
    region: "Pacífico",
    community: "Africano",
    motif: "agua",
    verticalImageUrl: `${BLOB}/anansi-1784912486530.jpg`,
    excerpt:
      "Anansi, la astuta araña sacristana, desafía el orden sagrado provocando caos y temor en Istmina, evitando así el castigo por su travesura.",
  },
  madremonte: {
    slug: "la-madremonte",
    title: "La Madremonte",
    region: "Andina",
    community: "Antioquia",
    motif: "ceiba",
    verticalImageUrl: `${BLOB}/la-madremonte-1784913022399.jpg`,
    excerpt:
      "Guardiana de montes y cauces, castiga a quien tala sin permiso y extravía a los que entran a su territorio con malas intenciones.",
  },
  mohan: {
    slug: "el-mohan",
    title: "El Mohán",
    region: "Andina",
    community: "Río Magdalena",
    motif: "anaconda",
    verticalImageUrl: `${BLOB}/el-mohan-1784913048642.jpg`,
    excerpt:
      "Ser de los remansos que seduce a las lavanderas, enreda las redes de los pescadores y guarda tesoros en el fondo del río.",
  },
  // Caso de estrés: título largo, el que puede desbordar el pie o la barra.
  largo: {
    slug: "creacion-de-los-colibries",
    title: "Creación de los colibríes y el árbol de la abundancia",
    region: "Amazonía",
    community: "Pueblo Uitoto",
    motif: "colibri",
    verticalImageUrl: `${BLOB}/el-sombreron-1784812949691.jpg`,
    excerpt:
      "Del árbol que sostenía todos los alimentos nacieron las aves que hoy polinizan la selva; su caída repartió la abundancia entre los ríos.",
  },
  llorona: {
    slug: "la-llorona",
    title: "La Llorona",
    region: "Andina",
    community: "Tradición mestiza",
    motif: "luna",
    verticalImageUrl: `${BLOB}/la-llorona-1784913048776.jpg`,
    excerpt:
      "Ánima que recorre las quebradas llorando a un hijo perdido; su llanto se oye cerca cuando está lejos y lejos cuando está cerca.",
  },
};

function BelowTheFold({ myth }) {
  return (
    <>
      <MythIntroMobile myth={myth} />
      <Container size="atlas" className="pt-6">
        <Breadcrumb
          items={[
            { label: "Mitos", href: "/mitos" },
            { label: myth.region, href: "/regiones" },
            { label: myth.title },
          ]}
        />
      </Container>
      <Container size="narrow" className="py-10">
        <div id="relato" className="mt-8 border-t border-line-100 pt-8">
          <Eyebrow tone="jungle" withRule className="mb-3">
            El relato
          </Eyebrow>
          <Text className="mt-4">
            Cuentan en el Pacífico que la Madre de Agua habita los remansos más
            hondos de los ríos. Es una mujer hermosa de cabello largo y verde que
            peina sentada sobre las piedras, y su canto atrae a quien se acerca
            con malas intenciones.
          </Text>
          <Text className="mt-4">
            Los mayores advierten a los niños: no se debe ensuciar el agua, ni
            pescar más de lo necesario, ni reírse de las criaturas del río.
          </Text>
        </div>
      </Container>
    </>
  );
}

export default async function MitoMobilePage({ searchParams }) {
  const params = (await searchParams) || {};
  const mythKey = String(params.m || "").toLowerCase();
  const myth = MYTHS[mythKey];

  if (myth) {
    return (
      <div className="bg-paper">
        <Header active="/mitos" />
        <main className="min-h-[100dvh] overflow-x-clip bg-paper">
          <MythHero myth={myth} />
          <BelowTheFold myth={myth} />
        </main>
      </div>
    );
  }

  return (
    <div className="bg-paper">
      <Header active="/mitos" />
      <Container size="wide" className="py-12">
        <Eyebrow tone="jungle" withRule className="mb-3">
          Rediseño · Portada del mito
        </Eyebrow>
        <Heading level={1} accent="jungle">
          La portada, teléfono a teléfono
        </Heading>
        <Text size="lg" className="mt-4 max-w-2xl">
          Banco de pruebas de <code>MythHero</code> sin depender de la base
          local. En móvil la obra vertical va a sangre con su altura natural: ni
          bandas a los lados ni hueco debajo, y lo que sobra de pantalla lo
          ocupa la entrada del artículo. Conviene mirarlo a 360×640 (donde la
          portada toma todo el alto y recorta ~7% por los costados), a 393×852
          (encaje exacto) y a 430×932.
        </Text>

        <div className="mt-8 flex flex-wrap gap-4">
          {Object.entries(MYTHS).map(([key, item]) => (
            <Link
              key={key}
              href={`/design-system/mito-mobile?m=${key}`}
              className="border-b border-ember-500 text-sm font-semibold text-jungle-700"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
