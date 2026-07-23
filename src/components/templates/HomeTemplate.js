import Image from "next/image";
import Link from "next/link";
import { Container, Icon, Motif } from "../atoms";
import { SearchBox } from "../molecules";
import { Header } from "../organisms";
import {
  AtlasSectionHeader,
  EditorialMythRow,
  OverlayMythCard,
  PortraitRail,
  SelectionMosaic,
  TerritoryStrip,
} from "../editorial/AtlasEditorial";

const DEFAULT_LEAD = {
  slug: "la-madre-de-agua",
  title: "La Madre de Agua",
  excerpt:
    "Guardiana de ríos y lagunas que recuerda el pacto entre las comunidades y la corriente.",
  region: "Pacífico",
  community: "Tradición oral",
  motif: "agua",
  imageUrl: "/samples/pacifico.jpg",
};

function RouteFeature({ route, myth }) {
  if (!route) return null;
  return (
    <Link
      href={route.href}
      className="group relative block min-h-[31rem] overflow-hidden bg-[rgb(var(--atlas-night))] md:min-h-[37rem]"
    >
      {route.imageUrl || myth?.imageUrl ? (
        <Image
          src={route.imageUrl || myth.imageUrl}
          alt=""
          fill
          sizes="100vw"
          className="atlas-image-zoom object-cover"
        />
      ) : (
        <span className="absolute inset-0 flex items-center justify-center opacity-30">
          <Motif name={route.motif || "agua"} size={260} />
        </span>
      )}
      <span className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/45 to-transparent" />
      <span className="absolute inset-y-0 left-0 flex max-w-2xl flex-col justify-end p-7 text-white md:p-12">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/65">
          Historias unidas por un mismo paisaje
        </span>
        <span className="mt-4 font-editorial text-5xl font-semibold leading-[0.9] tracking-[-0.035em] md:text-7xl">
          {route.title}
        </span>
        <span className="mt-5 max-w-xl text-base leading-relaxed text-white/82">
          {route.description}
        </span>
        <span className="mt-7 inline-flex w-fit items-center gap-2 border-b border-ember-500 pb-1 text-sm font-semibold">
          Recorrer esta ruta
          <Icon name="arrow-right" size={18} className="mc-arrow" />
        </span>
      </span>
    </Link>
  );
}

function OracleSection({ tarot = [] }) {
  return (
    <section className="relative overflow-hidden bg-[rgb(var(--atlas-night))] text-white">
      <Motif
        name="luna"
        size={420}
        className="pointer-events-none absolute -right-24 -top-24 opacity-[0.07]"
        aria-hidden="true"
      />
      <Container
        size="atlas"
        className="relative grid gap-12 py-20 md:grid-cols-[1fr_0.9fr] md:items-center md:py-28"
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ember-400">
            Pregunta al oráculo
          </p>
          <h2 className="mt-5 max-w-xl font-editorial text-5xl font-semibold leading-[0.92] md:text-7xl">
            ¿Qué historia necesita encontrarte hoy?
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-white/70">
            Cruza el archivo desde sus símbolos. Cada carta abre un relato y una
            forma distinta de mirar el territorio.
          </p>
          <Link
            href="/tarot"
            className="mt-8 inline-flex items-center gap-2 border-b border-ember-500 pb-1 text-sm font-semibold"
          >
            Consultar el oráculo
            <Icon name="arrow-right" size={18} />
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {tarot.slice(0, 3).map((card, index) => (
            <Link
              key={card.card_name}
              href={card.myth_slug ? `/mitos/${card.myth_slug}` : "/tarot"}
              className="group flex aspect-[2/3] flex-col items-center justify-between border border-ember-500/70 bg-black/25 p-4 text-center transition-transform duration-500 hover:-translate-y-2"
              style={{ transform: `rotate(${[-3, 0, 3][index]}deg)` }}
            >
              <span className="font-editorial text-lg text-ember-400">
                {card.roman || "·"}
              </span>
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f6e9cf] text-ink-900">
                <Motif name={card.motif || "luna"} size={42} />
              </span>
              <span className="font-editorial text-lg font-semibold leading-none">
                {card.card_name}
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function HomeTemplate({
  hero,
  lead = DEFAULT_LEAD,
  featured = [],
  regions = [],
  routes = [],
  tarot = [],
}) {
  const feed = [lead, ...featured].filter(Boolean);
  const selection = feed.slice(0, 7);
  const communityStories = feed.slice(7, 12);
  const quickReads = feed.slice(12, 17);
  const creatures = feed.slice(5, 13);
  const archive = feed.slice(13, 21);
  const route = routes[0];

  return (
    <>
      <Header active="/" />
      <main className="min-h-[100dvh] overflow-x-clip bg-paper">
        <section className="relative">
          <OverlayMythCard
            myth={lead}
            ratio="16 / 7.5"
            priority
            sizes="100vw"
            className="min-h-[72svh] md:min-h-0 [&>div]:min-h-[72svh] md:[&>div]:min-h-0"
            titleClassName="!text-[3.5rem] md:!text-[4.75rem]"
            contentClassName="md:!px-14 md:!pb-12"
          />
        </section>

        <Container size="atlas" className="py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-center">
            <div>
              <h1 className="font-display text-[2rem] font-bold leading-tight tracking-[-0.035em] text-ink-900 md:text-[2.6rem]">
                Las historias que Colombia{" "}
                <span className="text-jungle-700">se cuenta a sí misma</span>
              </h1>
              {hero?.description ? (
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-700">
                  {hero.description}
                </p>
              ) : null}
            </div>
            <SearchBox
              size="lg"
              placeholder="Buscar un mito, región o tema…"
              className="w-full"
            />
          </div>
        </Container>

        <Container size="atlas" className="atlas-feed-section pb-20">
          <AtlasSectionHeader
            title="Selección de hoy"
            actionHref="/mitos"
            actionLabel="Ver todos los mitos"
          />
          <SelectionMosaic myths={selection} />
        </Container>

        <section className="atlas-feed-section border-y border-line-100 bg-mist-50 py-20">
          <Container size="atlas">
            <AtlasSectionHeader
              title="Recorrer por territorio"
              description="Cada paisaje cambia la voz, los seres y los pactos de sus relatos."
              actionHref="/regiones"
              actionLabel="Ver todas las regiones"
            />
            <TerritoryStrip regions={regions} />
          </Container>
        </section>

        <Container size="atlas" className="atlas-feed-section py-20 md:py-24">
          <AtlasSectionHeader
            title="Una comunidad, muchas voces"
            description="Relatos que sobreviven porque una comunidad los cuenta, los transforma y los comparte."
            actionHref="/comunidades"
            actionLabel="Explorar comunidades"
          />
          <EditorialMythRow myths={communityStories} reverse />
        </Container>

        <section className="atlas-feed-section">
          <RouteFeature route={route} myth={feed[4]} />
        </section>

        <Container size="atlas" className="atlas-feed-section py-20 md:py-24">
          <AtlasSectionHeader
            title="Para leer ahora"
            description="Lecturas escogidas para entrar al archivo sin una ruta previa."
            actionHref="/mitos"
            actionLabel="Abrir el archivo"
          />
          <EditorialMythRow myths={quickReads} />
        </Container>

        <section className="atlas-feed-section border-y border-line-100 bg-mist-50 py-20">
          <Container size="atlas">
            <AtlasSectionHeader
              title="Criaturas y guardianes"
              description="Seres que custodian ríos, selvas, caminos y memorias."
              actionHref="/categorias"
              actionLabel="Explorar categorías"
            />
            <PortraitRail myths={creatures} />
          </Container>
        </section>

        <Container size="atlas" className="atlas-feed-section py-20 md:py-24">
          <AtlasSectionHeader
            title="El territorio también cuenta"
            description="Abre el mapa para encontrar las historias desde el lugar donde fueron ubicadas."
            actionHref="/mapa"
            actionLabel="Explorar el mapa"
          />
          <Link
            href="/mapa"
            className="group grid min-h-[28rem] overflow-hidden bg-[rgb(var(--atlas-night))] md:grid-cols-[1.15fr_0.85fr]"
          >
            <div className="relative min-h-[22rem]">
              {feed[2]?.imageUrl ? (
                <Image
                  src={feed[2].imageUrl}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="atlas-image-zoom object-cover"
                />
              ) : null}
              <span className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
            </div>
            <div className="flex flex-col justify-center p-8 text-white md:p-12">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ember-400">
                Mapa vivo
              </span>
              <span className="mt-5 font-editorial text-5xl font-semibold leading-[0.92]">
                Cada punto es una historia
              </span>
              <span className="mt-5 leading-relaxed text-white/70">
                Busca por región o comunidad y descubre qué relatos habitan
                cerca de un río, una montaña o una ciudad.
              </span>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold">
                Abrir el mapa <Icon name="arrow-right" size={18} />
              </span>
            </div>
          </Link>
        </Container>

        <OracleSection tarot={tarot} />

        <Container size="atlas" className="atlas-feed-section py-20 md:py-24">
          <AtlasSectionHeader
            title="El archivo sigue"
            description="La memoria no termina en una selección. Continúa con más voces, criaturas y territorios."
            actionHref="/mitos"
            actionLabel="Seguir leyendo"
          />
          <PortraitRail myths={archive} />
        </Container>
      </main>
    </>
  );
}
