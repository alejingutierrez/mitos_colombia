import {
  Button,
  ButtonLink,
  IconButton,
  Tag,
  Count,
  Avatar,
  Heading,
  Text,
  Eyebrow,
  IndexNumber,
  Prose,
  Blockquote,
  Reveal,
  Stagger,
  StaggerItem,
  CountUp,
  Marquee,
  Spotlight,
  MagneticButton,
  StatusDot,
  Motif,
  Divider,
  Icon,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Switch,
  Label,
  TextLink,
  ImageFrame,
  Surface,
  Callout,
  Container,
  Skeleton,
  Spinner,
  ProgressBar,
} from "../../components/atoms";
import { AtlasSectionHeader } from "../../components/editorial/AtlasEditorial";
import { IntelligentList, TypewriterSearch } from "./_MotionDemos";

export const metadata = {
  title: "Sistema de diseño",
  robots: { index: false, follow: false },
};

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

const NEUTRALS = [
  ["paper", "#ffffff"],
  ["mist-50", "#f6f6f4"],
  ["line-100", "#ececea"],
  ["line-300", "#c9c7bf"],
  ["ink-500", "#75746d"],
  ["ink-700", "#3c3b35"],
  ["ink-900", "#161611"],
];

const ACCENTS = [
  ["jungle-500", "#1c5c3f", "#ffffff"],
  ["jungle-600", "#164a33", "#ffffff"],
  ["jungle-tint", "#dcece2", "#103524"],
  ["river-500", "#1f5f8b", "#ffffff"],
  ["river-600", "#184d70", "#ffffff"],
  ["river-tint", "#dce7ef", "#113852"],
];

const MOTIFS = [
  "jaguar",
  "condor",
  "anaconda",
  "tucan",
  "delfin",
  "rana",
  "agua",
  "hoja",
  "montana",
  "sol",
  "luna",
];

const UI_ICONS = [
  "search",
  "arrow-right",
  "arrow-up-right",
  "chevron-down",
  "chevron-right",
  "x",
  "menu",
  "map-pin",
  "share",
  "link",
  "check",
  "filter",
];

export default function DesignSystemPage() {
  return (
    <main className="min-h-[100dvh] bg-paper">
      <Container size="wide" className="py-16 md:py-24">
        {/* Hero editorial asimétrico */}
        <Reveal
          as="header"
          className="grid items-end gap-10 pb-6 md:grid-cols-[1.5fr_1fr]"
        >
          <div>
            <Eyebrow tone="jungle" withRule className="mb-5">
              Rediseño 2026 · Sistema de diseño
            </Eyebrow>
            <Heading level={0} accent="jungle">
              Mitos de Colombia
            </Heading>
            <Text size="lg" className="mt-6 max-w-xl">
              La fundación atómica del sistema minimal editorial — tokens, tipografía,
              motivos y átomos. Cada pieza tira del mismo contrato de diseño.
            </Text>
          </div>
          <div className="flex flex-wrap gap-5 md:justify-end">
            {["jaguar", "condor", "agua", "sol"].map((m) => (
              <Motif key={m} name={m} size={52} />
            ))}
          </div>
        </Reveal>

        {/* Franja de estadísticas animadas */}
        <Reveal
          as="div"
          delay={0.1}
          className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded border border-line-100 bg-line-100 sm:grid-cols-4"
        >
          {[
            { n: 505, s: "mitos" },
            { n: 7, s: "regiones" },
            { n: 52, s: "comunidades" },
            { n: 11, s: "motivos" },
          ].map((stat) => (
            <div key={stat.s} className="bg-paper p-5">
              <p className="font-display text-3xl font-extrabold tracking-tight text-ink-900">
                <CountUp to={stat.n} />
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-ink-500">
                {stat.s}
              </p>
            </div>
          ))}
        </Reveal>

        {/* Banda kinética de taxonomía */}
        <div className="mt-6 border-y border-line-100 py-3">
          <Marquee speed={38} itemClassName="text-ink-500">
            {[
              "Amazonas",
              "Andina",
              "Caribe",
              "Orinoquía",
              "Pacífico",
              "Cosmogonía",
              "Criaturas",
              "Agua",
              "Memoria",
              "Fundacional",
            ].map((w) => (
              <span key={w} className="mx-6 inline-flex items-center gap-3 font-display text-sm font-semibold">
                {w}
                <span className="h-1 w-1 rounded-full bg-jungle-500" />
              </span>
            ))}
          </Marquee>
        </div>

        <Section index={1} title="Color · neutrales">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-7">
            {NEUTRALS.map(([name, hex]) => (
              <div key={name}>
                <div
                  className="h-16 w-full rounded border border-line-100"
                  style={{ background: hex }}
                />
                <Text size="xs" tone="strong" className="mt-2 font-medium">
                  {name}
                </Text>
                <Text size="xs" tone="muted">
                  {hex}
                </Text>
              </div>
            ))}
          </div>
        </Section>

        <Section index={2} title="Color · acentos">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
            {ACCENTS.map(([name, hex, fg]) => (
              <div key={name}>
                <div
                  className="flex h-16 w-full items-end rounded p-2"
                  style={{ background: hex, color: fg }}
                >
                  <span className="text-[11px] font-medium">Aa</span>
                </div>
                <Text size="xs" tone="strong" className="mt-2 font-medium">
                  {name}
                </Text>
                <Text size="xs" tone="muted">
                  {hex}
                </Text>
              </div>
            ))}
          </div>
        </Section>

        <Section index={3} title="Tipografía">
          <div className="space-y-3">
            <p className="font-editorial text-6xl font-semibold leading-none tracking-[-0.035em] text-ink-900">
              Atlas vivo · voz narrativa
            </p>
            <Text size="sm" tone="muted" className="pb-4">
              Cormorant Garamond se reserva para portadas, títulos de relatos y
              momentos de lectura. Manrope e Inter conservan la interfaz,
              navegación y cuerpo.
            </Text>
            <Heading level={1}>Display · El Mohán</Heading>
            <Heading level={2}>Título · Guardianes del agua</Heading>
            <Heading level={3}>Subtítulo · Región Andina</Heading>
            <Heading level={4}>Encabezado menor · Versiones del relato</Heading>
            <Divider className="my-4" />
            <Text size="lg">
              Cuerpo grande — el relato recorre los ríos del territorio, donde la
              memoria de las comunidades sigue viva en cada versión.
            </Text>
            <Text size="base">
              Cuerpo base — documentado con su procedencia y sus fuentes, para
              distinguir la tradición oral de la interpretación editorial.
            </Text>
            <Text size="sm" tone="muted">
              Cuerpo pequeño / muted — nota al pie, metadatos y referencias.
            </Text>
            <Text size="base" className="pt-2">
              Enlace de texto:{" "}
              <TextLink href="/design-system">ver metodología</TextLink> ·{" "}
              <TextLink href="https://example.com" external>
                fuente externa
              </TextLink>
            </Text>
          </div>
        </Section>

        <Section index={4} title="Botones">
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary" className="group">
              Explorar mitos
              <Icon name="arrow-right" size={16} className="mc-arrow" />
            </Button>
            <Button variant="secondary">Ver regiones</Button>
            <Button variant="ghost">Metodología</Button>
            <Button variant="river">Abrir el mapa</Button>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Button size="sm">Pequeño</Button>
            <Button size="md">Mediano</Button>
            <Button size="lg">Grande</Button>
            <ButtonLink href="/design-system" variant="secondary">
              ButtonLink
            </ButtonLink>
          </div>
        </Section>

        <Section index={5} title="Botones de ícono">
          <div className="flex flex-wrap items-center gap-3">
            <IconButton icon="search" label="Buscar" />
            <IconButton icon="share" label="Compartir" variant="secondary" />
            <IconButton icon="map-pin" label="Ver en el mapa" variant="primary" />
            <IconButton icon="x" label="Cerrar" size="sm" />
            <IconButton icon="menu" label="Menú" size="lg" variant="secondary" />
          </div>
        </Section>

        <Section index={6} title="Etiquetas · conteos · avatares">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Tag variant="neutral">Etiológico</Tag>
              <Tag variant="jungle">Pacífico</Tag>
              <Tag variant="river">Río Magdalena</Tag>
              <Tag variant="outline">Comunidad Emberá</Tag>
            </div>
            <div className="flex items-center gap-2">
              <Count>505</Count>
              <Count variant="jungle">42</Count>
              <Count variant="river">7</Count>
            </div>
            <div className="flex items-center gap-3">
              <Avatar name="Aurelia Quiceno" />
              <Avatar name="Teodoro Villamil" size={44} />
            </div>
          </div>
        </Section>

        <Section index={7} title="Íconos de UI (funcionales)">
          <div className="flex flex-wrap gap-5 text-ink-700">
            {UI_ICONS.map((name) => (
              <div key={name} className="flex w-16 flex-col items-center gap-1.5">
                <Icon name={name} size={22} />
                <Text size="xs" tone="muted" className="text-center">
                  {name}
                </Text>
              </div>
            ))}
          </div>
        </Section>

        <Section index={8} title="Motivos (íconos decorativos)">
          <Stagger className="flex flex-wrap gap-x-8 gap-y-7" gap={0.05}>
            {MOTIFS.map((name) => (
              <StaggerItem key={name} className="flex flex-col items-center gap-2">
                <Motif name={name} size={64} />
                <Text size="xs" tone="muted">
                  {name}
                </Text>
              </StaggerItem>
            ))}
          </Stagger>
        </Section>

        <Section index={9} title="Formularios">
          <div className="grid max-w-xl gap-4">
            <div>
              <Label htmlFor="ds-q">Buscar un mito</Label>
              <Input id="ds-q" placeholder="La Madre de Agua…" />
            </div>
            <div>
              <Label htmlFor="ds-region">Región</Label>
              <Select id="ds-region" defaultValue="">
                <option value="" disabled>
                  Elige una región…
                </option>
                <option>Amazonas</option>
                <option>Andina</option>
                <option>Caribe</option>
                <option>Orinoquía</option>
                <option>Pacífico</option>
              </Select>
            </div>
            <div>
              <Label htmlFor="ds-msg" required>
                Mensaje
              </Label>
              <Textarea id="ds-msg" placeholder="Escribe tu comentario…" />
            </div>
            <div className="flex flex-wrap items-center gap-6 pt-1">
              <Checkbox id="ds-c1" label="Con imagen" defaultChecked />
              <Radio name="ds-r" id="ds-r1" label="Más recientes" defaultChecked />
              <Radio name="ds-r" id="ds-r2" label="Alfabético" />
              <Switch checked label="Solo con mapa" />
            </div>
          </div>
        </Section>

        <Section index={10} title="Superficie interactiva y avisos">
          <div className="grid gap-4 md:grid-cols-2">
            <Surface interactive className="p-6">
              <div className="mb-3 flex items-center justify-between">
                <Motif name="jaguar" size={40} />
                <Icon
                  name="arrow-up-right"
                  size={18}
                  className="mc-arrow text-ink-500"
                />
              </div>
              <Heading level={4} className="mb-1">
                Card interactiva
              </Heading>
              <Text size="sm" tone="muted">
                Al hover: elevación, sombra de difusión y la flecha se desliza.
              </Text>
            </Surface>
            <div className="grid gap-3">
              <Callout variant="source" icon="map-pin" title="Procedencia">
                Recopilado en el Pacífico colombiano; múltiples versiones orales.
              </Callout>
              <Callout variant="info" icon="link" title="Metodología">
                Cómo distinguimos la tradición oral de la interpretación editorial.
              </Callout>
            </div>
          </div>
        </Section>

        <Section index={11} title="Contenido largo (Prose · Blockquote)">
          <Prose className="max-w-2xl">
            <p>
              La Madre de Agua vigila ríos y lagunas. Quien ensucia sus aguas o
              maltrata a los peces recibe su castigo, según cuentan las comunidades
              del territorio.
            </p>
            <Blockquote cite="Tradición oral, Pacífico">
              El agua tiene dueña, y la dueña no perdona al que la ofende.
            </Blockquote>
            <p>
              Existen versiones en distintas regiones, con nombres y matices propios.
            </p>
          </Prose>
        </Section>

        <Section index={12} title="Progreso y estados de carga">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-3">
              <ProgressBar value={35} />
              <ProgressBar value={72} />
              <div className="flex items-center gap-2 pt-1 text-ink-700">
                <Spinner size={20} />
                <Text size="sm" tone="muted">
                  Cargando…
                </Text>
              </div>
            </div>
            <div className="space-y-2">
              <Skeleton className="h-28 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </div>
        </Section>

        <Section index={13} title="Motion e inteligencia">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Sistema que se auto-reprioriza */}
            <div>
              <div className="mb-3 flex items-center gap-2">
                <StatusDot tone="jungle" />
                <Text size="sm" tone="muted">
                  El sistema reordena en vivo
                </Text>
              </div>
              <IntelligentList />
            </div>

            <div className="grid content-start gap-6">
              {/* Buscador con typewriter */}
              <div>
                <Label>Buscador inteligente</Label>
                <TypewriterSearch />
              </div>

              {/* Card con spotlight + CTA magnético */}
              <Spotlight className="rounded border border-line-100 bg-white p-6">
                <div className="relative z-10">
                  <Heading level={4} className="mb-1">
                    Foco que sigue el cursor
                  </Heading>
                  <Text size="sm" tone="muted" className="mb-4">
                    Pasa el cursor por aquí. Y prueba el botón magnético.
                  </Text>
                  <MagneticButton className="group">
                    Explorar
                    <Icon name="arrow-right" size={16} className="mc-arrow" />
                  </MagneticButton>
                </div>
              </Spotlight>
            </div>
          </div>
        </Section>

        <Section index={14} title="Capa Atlas vivo">
          <div className="space-y-10">
            <AtlasSectionHeader
              title="Una extensión, no un sistema paralelo"
              description="Atlas vivo amplía el contrato editorial existente para que las imágenes reales del archivo conduzcan la lectura, sin cambiar el modelo de datos ni sustituir los átomos base."
            />

            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Ancho editorial",
                  body: "Container atlas llega hasta 1460 px. Container wide conserva su contrato histórico de 1152 px para evitar regresiones en superficies no migradas.",
                },
                {
                  title: "Jerarquía tipográfica",
                  body: "font-editorial se usa en títulos narrativos; font-display y font-body siguen resolviendo navegación, interfaz, filtros y texto funcional.",
                },
                {
                  title: "Contrato de contenido",
                  body: "Las tarjetas reciben title, excerpt, region, community e imageUrl desde la base de datos. Los componentes no inventan imágenes, cifras ni versiones del relato.",
                },
                {
                  title: "Composición responsive",
                  body: "Desktop mezcla mosaicos, bandas y listas; mobile convierte esas mismas historias en imágenes dominantes, carriles horizontales y lectura lineal.",
                },
              ].map((rule) => (
                <Surface key={rule.title} className="p-6">
                  <p className="atlas-kicker">{rule.title}</p>
                  <Text size="sm" className="mt-3">
                    {rule.body}
                  </Text>
                </Surface>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-6 border-y border-line-100 py-6">
              <span className="atlas-kicker">Metadato editorial</span>
              <span className="atlas-rule !mt-0" />
              <span className="atlas-link">
                Acción de lectura <Icon name="arrow-right" size={17} />
              </span>
            </div>
          </div>
        </Section>
      </Container>
    </main>
  );
}
