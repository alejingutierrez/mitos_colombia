import Image from "next/image";
import Link from "next/link";
import { Container, Icon, Motif } from "../../components/atoms";
import { Header } from "../../components/organisms";
import { getRoutePreviews } from "../../lib/routes";
import { buildSeoMetadata, getSeoEntry } from "../../lib/seo";

export async function generateMetadata() {
  const seo = await getSeoEntry("page", "rutas");
  return buildSeoMetadata({
    fallback: {
      title: "Rutas | Mitos de Colombia",
      description:
        "Rutas editoriales para explorar mitos colombianos por símbolos, territorios y resonancias culturales.",
      keywords: ["rutas", "mitos colombianos", "curaduría", "territorio"],
    },
    seo,
    canonicalPath: "/rutas",
  });
}

export const revalidate = 86400;

function getDailySeed() {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  return Math.floor((now - startOfYear) / (1000 * 60 * 60 * 24));
}

function RouteBand({ route, index }) {
  const dark = index % 3 === 1;
  const titles = route.curated?.heroTitles || [];
  return (
    <Link
      href={`/rutas/${route.slug}`}
      className={`group relative block min-h-[24rem] overflow-hidden border border-line-100 ${
        dark ? "bg-[rgb(var(--atlas-night))] text-white" : "bg-mist-50 text-ink-900"
      }`}
    >
      {route.preview?.image_url ? (
        <Image
          src={route.preview.image_url}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 1100px"
          className={`atlas-image-zoom object-cover ${dark ? "opacity-45" : "opacity-32"}`}
        />
      ) : (
        <span className="absolute inset-0 flex items-center justify-start opacity-20">
          <Motif name={route.accent === "river" ? "agua" : "hoja"} size={280} />
        </span>
      )}
      <span
        className={`absolute inset-0 ${
          dark
            ? "bg-gradient-to-r from-black/88 via-black/48 to-transparent"
            : "bg-gradient-to-r from-white via-white/82 to-white/15"
        }`}
      />
      <span className="absolute left-[8%] right-[8%] top-[53%] h-px bg-ember-500/90">
        {[15, 50, 85].map((left) => (
          <span
            key={left}
            className="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-ember-500 bg-white"
            style={{ left: `${left}%` }}
          />
        ))}
      </span>
      <span className="relative flex min-h-[24rem] flex-col justify-between p-7 md:p-10">
        <span>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] opacity-60">
            Ruta {String(index + 1).padStart(2, "0")}
          </span>
          <span className="mt-3 block max-w-2xl font-editorial text-5xl font-semibold leading-none md:text-6xl">
            {route.title}
          </span>
          <span className="mt-4 block max-w-xl text-sm leading-relaxed opacity-75">
            {route.detail || route.description}
          </span>
        </span>
        <span className="grid grid-cols-3 gap-4 pt-16">
          {titles.slice(0, 3).map((title) => (
            <span
              key={title}
              className="font-editorial text-lg font-semibold leading-none md:text-xl"
            >
              {title}
            </span>
          ))}
        </span>
        <span className="mt-6 inline-flex w-fit items-center gap-2 border-b border-ember-500 pb-1 text-sm font-semibold">
          Seguir la ruta <Icon name="arrow-right" size={17} className="mc-arrow" />
        </span>
      </span>
    </Link>
  );
}

const GUIDE = [
  [
    "Lee el territorio como archivo",
    "Cada ruta agrupa relatos que comparten paisajes, guardianes o tensiones.",
  ],
  [
    "Cruza símbolos y resonancias",
    "Agua, monte, pactos y apariciones revelan conexiones entre voces distintas.",
  ],
  [
    "Vuelve al mito original",
    "Abre cada relato para conocer su comunidad, procedencia y contexto.",
  ],
];

export default async function RutasPage() {
  const routePreviews = await getRoutePreviews(getDailySeed());
  const hero = routePreviews[0];

  return (
    <>
      <Header active="/rutas" />
      <main className="min-h-[100dvh] overflow-x-clip bg-paper">
        <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden bg-[rgb(var(--atlas-night))] text-white">
          {hero?.preview?.image_url ? (
            <Image
              src={hero.preview.image_url}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          ) : null}
          <span className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
          <span className="absolute bottom-[16%] left-[52%] right-[8%] h-px bg-ember-500">
            {[0, 50, 100].map((left) => (
              <span
                key={left}
                className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-ember-500 bg-white"
                style={{ left: `${left}%` }}
              />
            ))}
          </span>
          <Container
            size="atlas"
            className="relative flex min-h-[calc(100svh-4rem)] items-center py-12"
          >
            <div className="max-w-3xl">
              <h1 className="font-editorial text-[4.2rem] font-semibold leading-[0.88] tracking-[-0.04em] md:text-[6.4rem]">
                Cartografías para leer el mito como territorio
              </h1>
              <p className="mt-7 max-w-lg text-lg leading-relaxed text-white/78">
                Recorridos curados entre paisajes, guardianes y símbolos.
              </p>
              <Link
                href="#rutas"
                className="mt-8 inline-flex items-center gap-2 border-b border-ember-500 pb-1 font-semibold text-ember-400"
              >
                Elegir una ruta <Icon name="chevron-down" size={18} />
              </Link>
            </div>
          </Container>
        </section>

        <Container id="rutas" size="atlas" className="scroll-mt-20 py-14 md:py-20">
          <h2 className="font-editorial text-4xl font-semibold md:text-5xl">
            Rutas para entrar al archivo
          </h2>
          <span className="atlas-rule" />
          <div className="mt-9 space-y-3">
            {routePreviews.map((route, index) => (
              <RouteBand key={route.slug} route={route} index={index} />
            ))}
          </div>
        </Container>

        <section className="border-t border-line-100 bg-mist-50">
          <Container size="atlas" className="py-14 md:py-20">
            <h2 className="font-editorial text-4xl font-semibold">
              Cómo seguir una ruta
            </h2>
            <span className="atlas-rule" />
            <div className="mt-10 grid gap-10 md:grid-cols-3">
              {GUIDE.map(([title, description], index) => (
                <div key={title}>
                  <span className="font-editorial text-4xl text-jungle-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-editorial text-2xl font-semibold">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-700">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
