import Link from "next/link";
import {
  Container,
  Heading,
  Text,
  Eyebrow,
  Motif,
  Icon,
  ButtonLink,
  Spotlight,
  Stagger,
  StaggerItem,
  Callout,
  CountUp,
} from "../atoms";
import { TarotCard } from "../molecules";
import { Header } from "../organisms";

/**
 * Template · TarotTemplate — "Umbral: de la página al rito"
 * Empieza en blanco editorial con una carta del día, cruza un umbral deliberado
 * al registro oscuro y dorado del sitio (#0a0f0c / crema), donde los 78 arcanos
 * viven como objetos 2:3 con numerales romanos y palos anunciados por su elemento.
 */

const GOLD = "#bd8642";
const CREAM = "#f6e9cf";
const NIGHT = "#0a0f0c";

const SUITS = [
  { name: "Bastos", element: "Fuego", motif: "sol", gloss: "Voluntad, impulso y territorios en movimiento." },
  { name: "Copas", element: "Agua", motif: "agua", gloss: "Vínculos, pactos de agua y memorias afectivas." },
  { name: "Espadas", element: "Aire", motif: "condor", gloss: "Decisiones, tensiones y claridad en el conflicto." },
  { name: "Oros", element: "Tierra", motif: "montana", gloss: "Materia, cultivo y legado de origen." },
];

const MAJOR_ROMAN = [
  "0", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X",
  "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX", "XXI",
];

const DEMO_CARDS = [
  { card_name: "El Loco", arcana: "major", order_index: 0, myth_slug: "los-meneses", myth_title: "Los Meneses", reading_summary: "El salto a lo desconocido; empezar el viaje sin mapa." },
  { card_name: "La Sacerdotisa", arcana: "major", order_index: 2, myth_slug: "la-madre-de-agua", myth_title: "La Madre de Agua", reading_summary: "El misterio del agua y lo que guarda en su fondo." },
  { card_name: "As de Copas", arcana: "minor", suit: "Copas", rank_label: "As", myth_slug: "el-mohan", myth_title: "El Mohán" },
  { card_name: "Rey de Oros", arcana: "minor", suit: "Oros", rank_label: "Rey", myth_slug: "el-dorado", myth_title: "El Dorado" },
  { card_name: "Sota de Bastos", arcana: "minor", suit: "Bastos", rank_label: "Sota", myth_slug: "la-patasola", myth_title: "La Patasola" },
  { card_name: "As de Espadas", arcana: "minor", suit: "Espadas", rank_label: "As", myth_slug: "el-silbon", myth_title: "El Silbón" },
];

function romanOf(card) {
  return card.roman || (card.arcana === "major" && typeof card.order_index === "number" ? MAJOR_ROMAN[card.order_index] : "");
}

function grouping(cards) {
  const majors = cards.filter((c) => c.arcana === "major");
  const bySuit = SUITS.map((s) => ({
    ...s,
    cards: cards.filter((c) => c.arcana === "minor" && c.suit === s.name),
  })).filter((g) => g.cards.length > 0);
  return { majors, bySuit };
}

const TILTS = [-2, 0, 2, 0];
function CardGrid({ cards }) {
  return (
    <Stagger className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5" gap={0.04}>
      {cards.map((c, i) => (
        <StaggerItem key={c.slug || c.myth_slug || c.card_name || i}>
          <TarotCard card={c} tilt={TILTS[i % 4]} className="h-full" />
        </StaggerItem>
      ))}
    </Stagger>
  );
}

/* Cabecera de sección en el registro oscuro */
function DarkHead({ num, eyebrow, title, gloss, motif }) {
  return (
    <div className="mb-10 flex items-start gap-5">
      {motif ? (
        <span className="mt-0.5 shrink-0 opacity-80" aria-hidden="true">
          <Motif name={motif} size={44} />
        </span>
      ) : (
        <span className="mt-1 font-display text-3xl font-semibold tabular-nums" style={{ color: "rgba(246,233,207,0.22)" }} aria-hidden="true">
          {String(num).padStart(2, "0")}
        </span>
      )}
      <div>
        <div className="mb-2 flex items-center gap-2.5">
          <span className="h-px w-6" style={{ background: GOLD }} aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: GOLD }}>
            {eyebrow}
          </span>
        </div>
        <h2 className="font-display text-[1.7rem] font-extrabold leading-tight tracking-[-0.02em] md:text-[2.2rem]" style={{ color: CREAM }}>
          {title}
        </h2>
        {gloss ? (
          <p className="mt-2 max-w-xl font-body text-[0.95rem]" style={{ color: "rgba(246,233,207,0.7)" }}>
            {gloss}
          </p>
        ) : null}
      </div>
    </div>
  );
}

/* Carta del día — carta dorada grande + su lectura */
function CartaDelDia({ card }) {
  if (!card) return null;
  const mark = romanOf(card) || card.rank_label || "·";
  const motif = { Bastos: "sol", Copas: "agua", Espadas: "condor", Oros: "montana" }[card.suit] || "luna";
  return (
    <div>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-jungle-600">
        La carta del día
      </p>
      <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-[auto_1fr]">
        <Spotlight color="rgba(28,92,63,0.14)" className="rounded p-3">
          <Link
            href={card.myth_slug ? `/mitos/${card.myth_slug}` : "#"}
            className="group block w-[150px] max-w-full sm:w-[180px]"
          >
            <div
              className="relative flex aspect-[2/3] flex-col overflow-hidden rounded p-4 transition-transform duration-500 ease-editorial group-hover:-translate-y-1"
              style={{ background: "#12100b", border: `1px solid ${GOLD}`, boxShadow: "0 22px 50px -24px rgba(0,0,0,0.6)" }}
            >
              <span className="pointer-events-none absolute inset-2 rounded-sm" style={{ border: "1px solid rgba(189,134,66,0.4)" }} aria-hidden="true" />
              <span className="relative font-display text-base font-semibold tabular-nums" style={{ color: GOLD }}>{mark}</span>
              <div className="relative flex flex-1 items-center justify-center">
                {card.image_url ? (
                  <img src={card.image_url} alt={card.card_name} className="h-full w-full rounded-sm object-cover" />
                ) : (
                  <span className="flex h-20 w-20 items-center justify-center rounded-full" style={{ background: CREAM, boxShadow: `0 0 0 1px ${GOLD}, 0 0 0 7px rgba(189,134,66,0.12)` }}>
                    <Motif name={motif} size={52} />
                  </span>
                )}
              </div>
              <span className="relative text-center font-display text-sm font-bold" style={{ color: CREAM }}>{card.card_name}</span>
            </div>
          </Link>
        </Spotlight>

        <div className="pt-2">
          <Eyebrow tone="jungle" className="mb-1">
            {card.arcana === "major" ? `Arcano mayor · ${mark}` : `Arcano menor · ${card.suit || ""}`}
          </Eyebrow>
          <Heading level={3}>{card.card_name}</Heading>
          {card.reading_summary || card.meaning ? (
            <Text size="sm" tone="muted" className="mt-2">
              {card.reading_summary || card.meaning}
            </Text>
          ) : null}
          {card.selection_reason ? (
            <Callout variant="source" icon="link" title="Por qué este mito" className="mt-4">
              {card.selection_reason}
            </Callout>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function TarotTemplate({
  cards = DEMO_CARDS,
  daily,
  title = "Tarot de la mitología colombiana",
  description,
}) {
  const { majors, bySuit } = grouping(cards);
  const lede =
    description ||
    "Una baraja editorial que traduce relatos ancestrales en arcanos visuales. No es adivinación: es leer los arquetipos del territorio a través de sus mitos.";
  const featured = daily || cards[0];
  const total = cards.length;
  const majorCount = majors.length;
  const minorCount = total - majorCount;
  const suitCount = bySuit.length || 4;

  return (
    <>
      <Header active="/tarot" />
      <main className="min-h-[100dvh] bg-paper">
        {/* ---------- HERO (blanco editorial) ---------- */}
        <Container size="wide" className="py-14 md:py-20">
          <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div>
              <Eyebrow tone="jungle" withRule className="mb-5">
                Baraja de la memoria
              </Eyebrow>
              <Heading level={0} accent="jungle">
                {title}
              </Heading>
              <Text size="lg" className="mt-6 max-w-xl">
                {lede}
              </Text>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink href="#umbral" size="lg" variant="primary">
                  Cruzar el umbral
                  <Icon name="arrow-right" size={18} className="mc-arrow" />
                </ButtonLink>
                <ButtonLink href="/mitos" variant="secondary">
                  Explorar el archivo
                </ButtonLink>
              </div>
            </div>
            <CartaDelDia card={featured} />
          </div>

          {/* Franja de escala de la baraja */}
          <div className="mt-14 grid grid-cols-2 gap-6 border-y border-line-100 py-8 sm:grid-cols-4">
            {[
              { value: total || 78, label: "Arcanos" },
              { value: majorCount || 22, label: "Mayores" },
              { value: minorCount || 56, label: "Menores" },
              { value: suitCount || 4, label: "Palos" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl font-extrabold tracking-tight text-ink-900">
                  <CountUp to={s.value} />
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-ink-500">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>

        {/* ---------- EL UMBRAL ---------- */}
        <div id="umbral" className="scroll-mt-24 border-t border-line-100">
          <Container size="wide" className="py-12 text-center">
            <div className="mx-auto flex max-w-md flex-col items-center">
              <span className="mb-4 h-8 w-px bg-line-200" aria-hidden="true" />
              <Eyebrow tone="jungle" className="justify-center">
                El umbral
              </Eyebrow>
              <Text size="sm" tone="muted" className="mt-3">
                Cruzas de la página al rito. Lo que sigue vive en el registro
                ceremonial de la baraja.
              </Text>
            </div>
          </Container>
        </div>

        {/* ---------- REGISTRO OSCURO Y DORADO ---------- */}
        <section style={{ background: NIGHT }}>
          {/* Arcanos mayores */}
          <Container size="wide" className="py-16 md:py-20">
            <DarkHead num={1} eyebrow="22 cartas" title="Arcanos mayores" gloss="El viaje del héroe contado con los grandes mitos del país: origen, destino, muerte y renacimiento." />
            <CardGrid cards={majors.length ? majors : cards} />
          </Container>

          {/* Arcanos menores por palo (elemento) */}
          {bySuit.map((g) => (
            <Container key={g.name} size="wide" className="border-t py-16 md:py-20" style={{ borderColor: "rgba(246,233,207,0.1)" }}>
              <DarkHead eyebrow={`Arcano menor · ${g.element}`} title={g.name} gloss={g.gloss} motif={g.motif} />
              <CardGrid cards={g.cards} />
            </Container>
          ))}

          {/* Rito de cierre */}
          <Container size="wide" className="border-t py-20 text-center md:py-24" style={{ borderColor: "rgba(246,233,207,0.1)" }}>
            <div className="mx-auto max-w-2xl">
              <span className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full" style={{ background: CREAM, boxShadow: `0 0 0 1px ${GOLD}` }}>
                <Motif name="luna" size={34} />
              </span>
              <h2 className="text-balance font-display text-[1.7rem] font-extrabold leading-tight md:text-[2.2rem]" style={{ color: CREAM }}>
                Son 78 caminos al territorio
              </h2>
              <p className="mx-auto mt-3 max-w-md font-body text-[0.98rem]" style={{ color: "rgba(246,233,207,0.7)" }}>
                Cada carta es una puerta a un mito. Sigue la lectura hacia el
                archivo, o conoce cómo elegimos cada arcano.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <ButtonLink href="/mitos" size="lg" variant="primary">
                  Explorar los mitos
                  <Icon name="arrow-right" size={18} className="mc-arrow" />
                </ButtonLink>
                <Link
                  href="/metodologia"
                  className="inline-flex items-center gap-2 rounded px-4 py-2 text-sm font-medium transition-colors"
                  style={{ color: CREAM, border: `1px solid rgba(246,233,207,0.25)` }}
                >
                  Cómo elegimos cada carta
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
