import { Container, Eyebrow, Heading, Text, Motif, Icon, ButtonLink, Reveal } from "../atoms";
import { SearchBox, StatCard } from "../molecules";

/**
 * Organismo · HeroSection
 * Héroe de la home: layout editorial asimétrico con titular potente, buscador
 * y CTA al archivo, un cluster de motivos decorativos, y una franja de
 * estadísticas. Presentacional y props-driven (server component).
 *
 * Props:
 *  - title?: string — titular principal (nivel hero).
 *  - description?: string — bajada descriptiva.
 *  - stats?: Array<{ value:number, label:string, suffix?:string, motif?:string }>
 *      — métricas de la franja inferior.
 */

const DEFAULT_STATS = [
  { value: 505, label: "Mitos" },
  { value: 7, label: "Regiones" },
  { value: 52, label: "Comunidades" },
  { value: 11, label: "Motivos" },
];

const CLUSTER_MOTIFS = ["jaguar", "condor", "agua", "sol"];

export function HeroSection({
  title = "Mitos de Colombia",
  description = "Un archivo vivo de la tradición oral: relatos, criaturas y territorios que dan forma a la memoria de los pueblos de Colombia.",
  stats = DEFAULT_STATS,
}) {
  return (
    <Reveal as="section" className="bg-paper">
      <Container size="wide" className="py-16 md:py-24">
        <div className="grid items-end gap-10 md:grid-cols-[1.5fr_1fr]">
          {/* Izquierda: kicker + titular + bajada + acciones */}
          <div>
            <Eyebrow tone="jungle" withRule>
              Archivo vivo de la tradición oral
            </Eyebrow>

            <Heading level={0} accent="jungle" className="mt-5">
              {title}
            </Heading>

            <Text size="lg" tone="default" className="mt-6 max-w-xl">
              {description}
            </Text>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <SearchBox className="w-full flex-1 sm:max-w-md" />
              <div className="group shrink-0">
                <ButtonLink href="/mitos" size="lg" variant="primary">
                  Explorar el archivo
                  <Icon name="arrow-right" size={18} className="mc-arrow" />
                </ButtonLink>
              </div>
            </div>
          </div>

          {/* Derecha: cluster de motivos decorativos */}
          <div className="hidden items-end justify-end gap-6 md:flex">
            {CLUSTER_MOTIFS.map((name) => (
              <Motif key={name} name={name} size={52} />
            ))}
          </div>
        </div>

        {/* Franja de estadísticas */}
        <div className="mt-14 grid grid-cols-2 gap-8 border-y border-line-100 py-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              motif={stat.motif}
            />
          ))}
        </div>
      </Container>
    </Reveal>
  );
}
