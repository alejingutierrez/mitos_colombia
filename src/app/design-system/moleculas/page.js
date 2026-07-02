import {
  Button,
  ButtonLink,
  Heading,
  Text,
  Eyebrow,
  IndexNumber,
  Reveal,
  Stagger,
  StaggerItem,
  Container,
  Divider,
} from "../../../components/atoms";
import {
  MythCard,
  MythListItem,
  SectionHeader,
  SearchBox,
  Breadcrumb,
  TaxonomyCard,
  RouteCard,
  StatCard,
  FilterBar,
  SegmentedControl,
  Accordion,
  ShareBar,
  EmptyState,
  CommentItem,
  Pagination,
} from "../../../components/molecules";

export const metadata = {
  title: "Sistema de diseño · Moléculas",
  robots: { index: false, follow: false },
};

const MYTHS = [
  { slug: "la-madre-de-agua", title: "La Madre de Agua", region: "Pacífico", community: "Emberá", excerpt: "Guardiana de ríos y lagunas que castiga a quien ensucia sus aguas o maltrata a los peces.", motif: "agua" },
  { slug: "el-mohan", title: "El Mohán", region: "Andina", community: "Río Magdalena", excerpt: "Ser peludo y travieso que habita los remansos y seduce a las lavanderas con su música.", motif: "anaconda" },
  { slug: "el-silbon", title: "El Silbón", region: "Orinoquía", community: "Los Llanos", excerpt: "Ánima errante que carga los huesos de su padre y anuncia la muerte con un silbido.", motif: "luna" },
  { slug: "la-patasola", title: "La Patasola", region: "Andina", community: "Montaña", excerpt: "Mujer de una sola pierna que acecha a cazadores y leñadores en lo profundo del monte.", motif: "jaguar" },
  { slug: "el-hombre-caiman", title: "El Hombre Caimán", region: "Caribe", community: "Plato, Magdalena", excerpt: "Un hombre convertido en caimán por espiar a las mujeres que se bañaban en el río.", motif: "delfin" },
  { slug: "la-bola-de-fuego", title: "La Bola de Fuego", region: "Orinoquía", community: "Los Llanos", excerpt: "Esfera ardiente que rueda por la sabana en las noches, castigo de un alma en pena.", motif: "sol" },
];

const TAXONOMIES = [
  { title: "Amazonas", href: "#", count: 128, motif: "hoja", imageUrl: "/samples/amazonas.jpg", description: "Selva, ríos y cosmogonías de los pueblos amazónicos." },
  { title: "Andina", href: "#", count: 142, motif: "montana", imageUrl: "/samples/andina.jpg", description: "Páramos, lagunas sagradas y seres de la cordillera." },
  { title: "Caribe", href: "#", count: 88, motif: "agua", imageUrl: "/samples/caribe.jpg", description: "Mar, manglar y relatos de la costa norte." },
  { title: "Pacífico", href: "#", count: 76, motif: "delfin", imageUrl: "/samples/pacifico.jpg", description: "Selva húmeda, ríos y tradición afrodescendiente." },
];

const COMMUNITIES = [
  { title: "Emberá", href: "#", count: 34, motif: "jaguar", description: "Pacífico y noroccidente." },
  { title: "Muisca", href: "#", count: 41, motif: "sol", description: "Altiplano cundiboyacense." },
  { title: "Wayúu", href: "#", count: 28, motif: "luna", description: "Península de La Guajira." },
  { title: "Nasa", href: "#", count: 19, motif: "condor", description: "Macizo andino, Cauca." },
];

const ROUTES = [
  { title: "Guardianes del agua", motif: "agua", tone: "river", count: 18, description: "Seres que vigilan ríos, lagunas y quebradas a lo largo del país." },
  { title: "Cartografía de la selva", motif: "hoja", tone: "jungle", count: 24, description: "Relatos del monte, la caza y los espíritus del bosque húmedo." },
];

const FILTERS = [
  { key: "region", label: "Región", options: [
    { value: "amazonas", label: "Amazonas" },
    { value: "andina", label: "Andina" },
    { value: "caribe", label: "Caribe" },
    { value: "pacifico", label: "Pacífico" },
  ]},
  { key: "tema", label: "Tema", options: [
    { value: "agua", label: "Agua" },
    { value: "criaturas", label: "Criaturas" },
    { value: "cosmogonia", label: "Cosmogonía" },
  ]},
  { key: "orden", label: "Orden", options: [
    { value: "recientes", label: "Más recientes" },
    { value: "alfabetico", label: "Alfabético" },
  ]},
];

const VERSIONES = [
  { title: "El relato", content: "La Madre de Agua vigila ríos y lagunas; castiga a quien ensucia sus aguas o maltrata a los peces." },
  { title: "Versiones regionales", content: "En el Pacífico devuelve a los niños perdidos; en el Magdalena arrastra a los pescadores descuidados." },
  { title: "Procedencia", content: "Recopilada de la tradición oral afrodescendiente del Pacífico, con múltiples variantes documentadas." },
];

function Section({ index, title, children }) {
  return (
    <Reveal as="section" className="border-t border-line-100 py-14">
      <div className="mb-7 flex items-center gap-4">
        <IndexNumber value={index} />
        <Eyebrow>{title}</Eyebrow>
      </div>
      {children}
    </Reveal>
  );
}

export default function MoleculasPage() {
  return (
    <main className="min-h-[100dvh] bg-paper">
      <Container size="wide" className="py-16 md:py-24">
        <Reveal as="header" className="pb-6">
          <Breadcrumb
            className="mb-6"
            items={[
              { label: "Sistema de diseño", href: "/design-system" },
              { label: "Moléculas" },
            ]}
          />
          <Eyebrow tone="jungle" withRule className="mb-5">
            Rediseño 2026 · Moléculas
          </Eyebrow>
          <Heading level={0} accent="jungle">
            Composición
          </Heading>
          <Text size="lg" className="mt-6 max-w-xl">
            Combinaciones de átomos en piezas reutilizables — las moléculas que
            construyen cada página del catálogo.
          </Text>
        </Reveal>

        <Section index={1} title="Buscador">
          <SearchBox className="max-w-2xl" />
        </Section>

        <Section index={2} title="Barra de filtros">
          <FilterBar filters={FILTERS} defaultValue={{ region: "pacifico" }} />
        </Section>

        <Section index={3} title="Encabezado de sección">
          <SectionHeader
            eyebrow="Catálogo vivo"
            title="Mitos representativos"
            description="Una selección curada por región, comunidad y tema, con su procedencia documentada."
            action={<ButtonLink href="#" variant="secondary">Ver todos</ButtonLink>}
          />
        </Section>

        <Section index={4} title="Estadísticas">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            <StatCard value={505} label="mitos" motif="jaguar" />
            <StatCard value={7} label="regiones" motif="montana" />
            <StatCard value={52} label="comunidades" motif="hoja" />
            <StatCard value={11} label="motivos" motif="sol" />
          </div>
        </Section>

        <Section index={5} title="MythCard · grilla">
          <Stagger
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
            gap={0.06}
          >
            {MYTHS.map((m) => (
              <StaggerItem key={m.slug}>
                <MythCard myth={m} motif={m.motif} className="h-full" />
              </StaggerItem>
            ))}
          </Stagger>
        </Section>

        <Section index={6} title="MythCard · horizontal">
          <div className="grid gap-4 md:grid-cols-2">
            {MYTHS.slice(0, 2).map((m) => (
              <MythCard key={m.slug} myth={m} motif={m.motif} variant="horizontal" />
            ))}
          </div>
        </Section>

        <Section index={7} title="Índice de mitos (MythListItem)">
          <div className="max-w-2xl divide-y divide-line-100 border-y border-line-100">
            {MYTHS.map((m, i) => (
              <MythListItem key={m.slug} myth={m} index={i + 1} motif={m.motif} />
            ))}
          </div>
        </Section>

        <Section index={8} title="TaxonomyCard (con imagen + ícono)">
          <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2" gap={0.06}>
            {TAXONOMIES.map((t) => (
              <StaggerItem key={t.title}>
                <TaxonomyCard {...t} className="h-full" />
              </StaggerItem>
            ))}
          </Stagger>
          <Text size="sm" tone="muted" className="mb-4 mt-8">
            Sin imagen — el ícono llena el cuadro:
          </Text>
          <Stagger className="grid grid-cols-2 gap-4 lg:grid-cols-4" gap={0.05}>
            {COMMUNITIES.map((c) => (
              <StaggerItem key={c.title}>
                <TaxonomyCard {...c} className="h-full" />
              </StaggerItem>
            ))}
          </Stagger>
        </Section>

        <Section index={9} title="Rutas editoriales (RouteCard)">
          <div className="grid gap-4 md:grid-cols-2">
            {ROUTES.map((r) => (
              <RouteCard key={r.title} {...r} />
            ))}
          </div>
        </Section>

        <Section index={10} title="Cambiar vista (SegmentedControl)">
          <SegmentedControl
            defaultValue="grid"
            options={[
              { value: "grid", label: "Grilla", icon: "menu" },
              { value: "list", label: "Lista", icon: "filter" },
              { value: "map", label: "Mapa", icon: "map-pin" },
            ]}
          />
        </Section>

        <Section index={11} title="Secciones expandibles (Accordion)">
          <div className="max-w-2xl">
            <Accordion items={VERSIONES} />
          </div>
        </Section>

        <Section index={12} title="Compartir (ShareBar)">
          <ShareBar url="https://www.mitosdecolombia.com/mitos/la-madre-de-agua" title="La Madre de Agua" />
        </Section>

        <Section index={13} title="Comentarios">
          <div className="max-w-2xl space-y-6">
            <CommentItem author="Aurelia Quiceno" date="hace 3 días">
              Mi abuela contaba esta versión en Quibdó, pero el final era distinto:
              la Madre de Agua devolvía al niño sano y salvo.
            </CommentItem>
            <Divider />
            <CommentItem author="Ismael Restrepo Valderrama" date="hace 1 semana">
              Excelente trabajo de documentación. ¿Tienen la variante que se cuenta
              en el bajo Cauca?
            </CommentItem>
          </div>
        </Section>

        <Section index={14} title="Paginación">
          <Pagination page={3} totalPages={12} makeHref={(p) => `?page=${p}`} />
        </Section>

        <Section index={15} title="Estado vacío">
          <EmptyState
            motif="condor"
            title="Sin resultados"
            description="No encontramos mitos para esa búsqueda. Prueba con otra región o tema."
            action={<Button variant="secondary">Limpiar filtros</Button>}
          />
        </Section>
      </Container>
    </main>
  );
}
