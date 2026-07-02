import { Container, Eyebrow, Heading, Text, IndexNumber } from "../../../components/atoms";
import { Header } from "../../../components/organisms";
import { MythDetailTemplate } from "../../../components/templates";

export const metadata = {
  title: "Sistema de diseño · Plantillas",
  robots: { index: false, follow: false },
};

const MYTH = {
  slug: "la-madre-de-agua",
  title: "La Madre de Agua",
  region: "Pacífico",
  region_slug: "pacifico",
  community: "Afrocolombiana",
  category_path: "Pacífico › Chocó › Comunidades afrodescendientes",
  motif: "agua",
  imageUrl: "/samples/pacifico.jpg",
  latitude: 5.6918,
  longitude: -76.6583,
  excerpt:
    "Guardiana de ríos, quebradas y lagunas del Pacífico, castiga a quien ensucia sus aguas o maltrata a los peces, y a veces se lleva a los niños que juegan solos junto al agua.",
  tags: ["Agua", "Criaturas"],
  keywords: ["agua", "río", "Pacífico", "guardiana", "peces", "niños", "Chocó", "tradición oral"],
  // Las 5 secciones editoriales reales (campos mito/historia/versiones/leccion/similitudes)
  mito:
    "Cuentan en el Pacífico que la Madre de Agua habita los remansos más hondos de los ríos. Es una mujer hermosa de cabello largo y verde que peina sentada sobre las piedras, y su canto atrae a quien se acerca con malas intenciones.\nLos mayores advierten a los niños: no se debe ensuciar el agua, ni pescar más de lo necesario, ni reírse de las criaturas del río. Quien lo hace, escucha su llanto en la noche y puede perder el camino de regreso a casa.",
  historia:
    "La figura de la Madre de Agua llegó con el mestizaje de saberes africanos, indígenas y europeos en el litoral Pacífico. En las comunidades afrodescendientes del Chocó se entrelazó con espíritus de los ríos traídos en la memoria de los pueblos esclavizados, dando forma a una guardiana propia del territorio.",
  versiones:
    "En unos pueblos devuelve sanos y salvos a los niños que se pierden; en otros se los lleva para siempre al fondo de la laguna.\nEn el bajo Cauca se le conoce con otro nombre y aparece como una madre que amamanta a los peces.",
  leccion:
    "El agua tiene dueña, y la dueña no perdona al que la ofende: cuidar el río es cuidar la vida de todos.",
  similitudes:
    "Su figura resuena con la Yacuruna de la Amazonía y con las madres de agua de otros ríos de América Latina, todas guardianas que castigan la ambición y protegen los cauces.",
  comments: [
    { author: "Valentina Restrepo", date: "hace 2 días", body: "Mi abuela contaba una versión muy parecida en el Chocó." },
    { author: "Andrés Mosquera", date: "hace 5 días", body: "Gracias por documentar estas voces que se estaban perdiendo." },
  ],
};

const RELATED = [
  { slug: "el-mohan", title: "El Mohán", excerpt: "Ser de los remansos que seduce a las lavanderas.", region: "Andina", community: "Río Magdalena", motif: "anaconda" },
  { slug: "el-hombre-caiman", title: "El Hombre Caimán", excerpt: "Un hombre transformado en caimán por espiar a las mujeres del río.", region: "Caribe", community: "Plato", motif: "delfin" },
  { slug: "el-silbon", title: "El Silbón", excerpt: "Ánima errante que anuncia la muerte con un silbido.", region: "Orinoquía", community: "Los Llanos", motif: "luna" },
];

const VARIANTS = [
  { key: "immersive", label: "Variante A · Immersive (portada a sangre)" },
  { key: "editorial", label: "Variante B · Editorial (dos columnas)" },
  { key: "feature", label: "Variante C · Feature (tipográfica)" },
];

export default function PlantillasPage() {
  return (
    <div className="bg-paper">
      <Header active="/mitos" />

      <Container size="wide" className="pt-12">
        <Eyebrow tone="jungle" withRule className="mb-3">
          Rediseño 2026 · Plantillas
        </Eyebrow>
        <Heading level={1} accent="jungle">
          Un mito, sus secciones reales
        </Heading>
        <Text size="lg" className="mt-4 max-w-2xl">
          Cada sección editorial del mito (relato, contexto histórico, versiones,
          la enseñanza, resonancias) tiene su propio bloque diseñado, y sólo
          aparece si el mito la tiene. El hero rota entre tres variantes por slug.
        </Text>
      </Container>

      {VARIANTS.map((v) => (
        <section key={v.key}>
          <Container size="wide" className="pb-2 pt-16">
            <div className="flex items-center gap-4 border-t border-line-100 pt-8">
              <IndexNumber value={VARIANTS.indexOf(v) + 1} />
              <Eyebrow>{v.label}</Eyebrow>
            </div>
          </Container>
          <div className="border-y border-line-100 bg-white">
            <MythDetailTemplate myth={MYTH} variant={v.key} related={RELATED} chrome={false} />
          </div>
        </section>
      ))}
    </div>
  );
}
