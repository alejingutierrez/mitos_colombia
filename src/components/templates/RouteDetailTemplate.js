import Image from "next/image";
import Link from "next/link";
import { Container, Icon, ImageFrame, Motif } from "../atoms";
import { Header } from "../organisms";

export function RouteDetailTemplate({ route, myths = [], otherRoutes = [] }) {
  const heroMyth = myths.find((myth) => myth.imageUrl) || myths[0];

  return (
    <>
      <Header active="/rutas" />
      <main className="min-h-[100dvh] overflow-x-clip bg-paper">
        <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden bg-[rgb(var(--atlas-night))] text-white">
          {heroMyth?.imageUrl ? (
            <Image
              src={heroMyth.imageUrl}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          ) : (
            <span className="absolute inset-0 flex items-center justify-center opacity-20">
              <Motif
                name={route.accent === "river" ? "agua" : "hoja"}
                size={320}
              />
            </span>
          )}
          <span className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/45 to-transparent" />
          <Container
            size="atlas"
            className="relative flex min-h-[calc(100svh-4rem)] items-end pb-12 md:items-center md:pb-0"
          >
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ember-400">
                Ruta editorial · {route.tone}
              </p>
              <h1 className="mt-5 font-editorial text-[4.3rem] font-semibold leading-[0.86] tracking-[-0.04em] md:text-[6.8rem]">
                {route.title}
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/78 md:text-lg">
                {route.intro || route.description}
              </p>
              <Link
                href="#itinerario"
                className="mt-8 inline-flex items-center gap-2 border-b border-ember-500 pb-1 font-semibold text-ember-400"
              >
                Empezar el recorrido <Icon name="chevron-down" size={18} />
              </Link>
            </div>
          </Container>
        </section>

        {route.highlights?.length ? (
          <Container
            id="itinerario"
            size="atlas"
            className="scroll-mt-20 py-14 md:py-20"
          >
            <h2 className="font-editorial text-4xl font-semibold md:text-5xl">
              El itinerario
            </h2>
            <span className="atlas-rule" />
            <div className="relative mt-12 grid gap-10 md:grid-cols-3">
              <span className="absolute left-[8%] right-[8%] top-5 hidden h-px bg-jungle-600 md:block" />
              {route.highlights.map((highlight, index) => (
                <div key={highlight.title} className="relative">
                  <span className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-jungle-600 bg-white font-editorial text-xl text-jungle-700">
                    {index + 1}
                  </span>
                  <h3 className="mt-5 font-editorial text-3xl font-semibold">
                    {highlight.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-700">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        ) : null}

        {myths.length ? (
          <section className="border-y border-line-100 bg-mist-50">
            <Container size="atlas" className="py-14 md:py-20">
              <div className="max-w-2xl">
                <h2 className="font-editorial text-4xl font-semibold md:text-5xl">
                  Relatos que trazan la ruta
                </h2>
                <span className="atlas-rule" />
                <p className="mt-5 text-base leading-relaxed text-ink-700">
                  {route.galleryIntro ||
                    "Cada historia funciona como una estación dentro del recorrido."}
                </p>
              </div>
              <div className="relative mt-12">
                <span className="absolute left-[6%] right-[6%] top-[8.25rem] hidden h-px bg-river-600 md:block" />
                <div className="grid snap-x grid-flow-col auto-cols-[78%] gap-8 overflow-x-auto pb-4 sm:auto-cols-[45%] md:grid-flow-row md:grid-cols-3 md:overflow-visible">
                  {myths.map((myth, index) => (
                    <Link
                      key={myth.slug}
                      href={`/mitos/${myth.slug}`}
                      className="group relative snap-start"
                    >
                      <ImageFrame
                        src={myth.imageUrl}
                        alt={myth.title}
                        ratio="4 / 3"
                        sizes="(max-width: 640px) 78vw, (max-width: 768px) 45vw, 34vw"
                        className="rounded-none border-0"
                        imgClassName="atlas-image-zoom object-cover"
                      />
                      <span className="absolute left-1/2 top-[calc(75%-0.4rem)] z-10 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-river-600 bg-white md:block" />
                      <span className="atlas-kicker mt-5 block">
                        Estación {String(index + 1).padStart(2, "0")} ·{" "}
                        {myth.region}
                      </span>
                      <span className="mt-2 block font-editorial text-3xl font-semibold leading-none text-ink-900">
                        {myth.title}
                      </span>
                      {myth.excerpt ? (
                        <span className="mt-3 block text-sm leading-relaxed text-ink-700">
                          {myth.excerpt}
                        </span>
                      ) : null}
                    </Link>
                  ))}
                </div>
              </div>
            </Container>
          </section>
        ) : null}

        {otherRoutes.length ? (
          <Container size="atlas" className="py-14 md:py-20">
            <h2 className="font-editorial text-4xl font-semibold">
              Continuar por otra ruta
            </h2>
            <div className="mt-8 divide-y divide-line-100 border-y border-line-100">
              {otherRoutes.map((other, index) => (
                <Link
                  key={other.href}
                  href={other.href}
                  className="group grid gap-3 py-6 md:grid-cols-[3rem_0.8fr_1.2fr_auto] md:items-center"
                >
                  <span className="font-editorial text-2xl text-jungle-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-editorial text-3xl font-semibold">
                    {other.title}
                  </span>
                  <span className="text-sm leading-relaxed text-ink-700">
                    {other.description}
                  </span>
                  <Icon name="arrow-right" size={18} className="mc-arrow" />
                </Link>
              ))}
            </div>
          </Container>
        ) : null}
      </main>
    </>
  );
}
