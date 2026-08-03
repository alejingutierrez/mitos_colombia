import Image from "next/image";
import Link from "next/link";
import { Container, Icon, ImageFrame, Motif } from "../atoms";
import { Header, RouteGrid } from "../organisms";
import { AtlasSectionHeader } from "../editorial/AtlasEditorial";

function ItemImage({
  item,
  sizes,
  ratio = "4 / 3",
  className = "",
  priority = false,
}) {
  return (
    <ImageFrame
      src={item?.imageUrl}
      alt={item?.title || ""}
      ratio={ratio}
      priority={priority}
      sizes={sizes}
      placeholderMotif={item?.motif || "hoja"}
      placeholderSize={150}
      className={`rounded-none border-0 ${className}`}
      imgClassName="atlas-image-zoom object-cover"
    />
  );
}

function ItemOverlay({
  item,
  ratio = "4 / 3",
  fillImage = false,
  compact = false,
  className = "",
  priority = false,
}) {
  if (!item) return null;
  return (
    <Link
      href={item.href}
      className={`group relative block overflow-hidden bg-[rgb(var(--atlas-night))] ${className}`}
    >
      <ImageFrame
        src={item.imageUrl}
        alt={item.title}
        ratio={fillImage ? null : ratio}
        priority={priority}
        sizes="(max-width: 768px) 100vw, 50vw"
        placeholderMotif={item.motif || "hoja"}
        placeholderSize={160}
        className={`rounded-none border-0 ${
          fillImage ? "absolute inset-0 h-full w-full" : ""
        }`}
        imgClassName="atlas-image-zoom object-cover"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
      <span
        className={`absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 text-white ${
          compact ? "p-4 md:p-5" : "p-5 md:p-6"
        }`}
      >
        <span className="min-w-0">
          <span
            className={`block text-balance font-editorial font-semibold leading-none ${
              compact ? "text-2xl md:text-[2rem]" : "text-3xl md:text-4xl"
            }`}
          >
            {item.title}
          </span>
          {item.description && !compact ? (
            <span className="mt-2 hidden max-w-md text-sm text-white/75 sm:block">
              {item.description}
            </span>
          ) : null}
        </span>
        {item.count != null ? (
          <span className="shrink-0 text-right">
            <span className="block font-editorial text-3xl">{item.count}</span>
            <span className="text-[0.62rem] uppercase tracking-[0.16em] text-white/60">
              relatos
            </span>
          </span>
        ) : null}
      </span>
    </Link>
  );
}

function IndexHero({ mode, title, description, items, heroMotif }) {
  const lead = items[0];
  const support = items.slice(1, 3);

  if (mode === "communities") {
    return (
      <section className="relative min-h-[31rem] overflow-hidden bg-mist-50 md:min-h-[36rem]">
        {lead?.imageUrl ? (
          <Image
            src={lead.imageUrl}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center opacity-20">
            <Motif name={heroMotif} size={300} />
          </span>
        )}
        <span className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent md:hidden" />
        <Container size="atlas" className="relative flex min-h-[31rem] items-end py-10 md:min-h-[36rem] md:items-center">
          <div className="max-w-xl bg-white p-7 shadow-float md:p-10">
            <h1 className="atlas-title text-[3.25rem] md:text-[4.7rem]">{title}</h1>
            <p className="mt-5 max-w-md leading-relaxed text-ink-700">{description}</p>
          </div>
        </Container>
      </section>
    );
  }

  if (mode === "categories") {
    return (
      <section className="grid min-h-[34rem] overflow-hidden lg:grid-cols-[0.72fr_1.28fr]">
        <div className="flex items-center bg-white p-7 md:p-12 lg:p-14">
          <div>
            <h1 className="atlas-title text-[3.4rem] md:text-[5.1rem]">{title}</h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-700">
              {description}
            </p>
          </div>
        </div>
        <div className="grid min-h-[28rem] grid-cols-3 gap-px bg-white">
          {[lead, ...support].filter(Boolean).map((item) => (
            <div key={item.href} className="group">
              <ItemImage
                item={item}
                sizes="34vw"
                ratio={null}
                className="h-full w-full"
                priority
              />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="overflow-hidden border-b border-line-100">
      <Container
        size="atlas"
        className="grid min-h-[31rem] min-w-0 gap-8 py-10 md:grid-cols-[0.65fr_1.35fr] md:items-center md:py-0"
      >
        <div className="min-w-0">
          <h1 className="atlas-title text-[3.6rem] md:text-[5.3rem]">{title}</h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-700">
            {description}
          </p>
        </div>
        <div className="group atlas-mobile-edge min-w-0 md:mr-[calc((100vw-72rem)/-2)] md:h-full">
          <ItemImage
            item={lead}
            sizes="(max-width: 768px) 100vw, 64vw"
            ratio={null}
            priority
            className="h-full min-h-[25rem] w-full"
          />
        </div>
      </Container>
    </section>
  );
}

function CommunityComposition({ items }) {
  const [lead, ...rest] = items;
  const featured = rest.slice(0, 3);
  const archive = rest.slice(3);

  return (
    <>
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2">
        <ItemOverlay
          item={lead}
          fillImage
          priority
          className="min-h-[28rem] sm:col-span-2 lg:col-span-6 lg:row-span-2 lg:min-h-[34rem]"
        />
        {featured.map((item, index) => (
          <ItemOverlay
            key={item.href}
            item={item}
            fillImage
            compact={index > 0}
            className={
              index === 0
                ? "min-h-[24rem] lg:col-span-3 lg:row-span-2 lg:min-h-[34rem]"
                : index === 2
                  ? "min-h-[20rem] sm:col-span-2 lg:col-span-3 lg:min-h-0"
                : "min-h-[20rem] lg:col-span-3 lg:min-h-0"
            }
          />
        ))}
      </div>
      <div className="mt-12 grid snap-x snap-mandatory grid-flow-col auto-cols-[82%] gap-x-5 gap-y-10 overflow-x-auto pb-3 sm:grid-flow-row sm:auto-cols-auto sm:grid-cols-2 sm:overflow-visible lg:grid-cols-4">
        {archive.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group min-w-0 snap-start"
          >
            <ItemImage
              item={item}
              sizes="(max-width: 640px) 82vw, (max-width: 1024px) 50vw, 25vw"
              ratio="4 / 3"
              className="w-full"
            />
            <span className="mt-4 flex min-w-0 items-start justify-between gap-4 border-t border-line-100 pt-4">
              <span className="min-w-0">
                <span className="block text-balance font-editorial text-2xl font-semibold leading-none text-ink-900">
                  {item.title}
                </span>
                {item.description ? (
                  <span className="mt-2 block text-xs uppercase tracking-[0.12em] text-ink-500">
                    {item.description}
                  </span>
                ) : null}
              </span>
              <span className="shrink-0 text-right">
                <span className="block font-editorial text-2xl leading-none text-ink-900">
                  {item.count}
                </span>
                <span className="mt-1 block text-[0.62rem] uppercase tracking-[0.14em] text-ink-500">
                  relatos
                </span>
              </span>
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}

function TaxonomyComposition({ items }) {
  const [lead, second, third, ...rest] = items;
  return (
    <div className="grid gap-2 lg:grid-cols-12">
      <ItemOverlay item={lead} ratio="4 / 3" priority className="lg:col-span-6 lg:row-span-2" />
      <ItemOverlay item={second} ratio="16 / 7" className="lg:col-span-4" />
      <div className="grid gap-2 lg:col-span-2 lg:row-span-2">
        {rest.slice(0, 3).map((item) => (
          <ItemOverlay key={item.href} item={item} ratio="4 / 3" />
        ))}
      </div>
      <ItemOverlay item={third} ratio="16 / 7" className="lg:col-span-4" />
      {rest.length > 3 ? (
        <div className="mt-8 grid gap-x-8 gap-y-0 border-y border-line-100 sm:grid-cols-2 lg:col-span-12 lg:grid-cols-3">
          {rest.slice(3).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center justify-between gap-4 border-b border-line-100 py-4 last:border-0"
            >
              <span>
                <span className="block font-editorial text-2xl font-semibold leading-none">
                  {item.title}
                </span>
                <span className="mt-1 block text-xs text-ink-500">{item.count} relatos</span>
              </span>
              <Icon name="arrow-right" size={18} className="mc-arrow text-jungle-700" />
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function TaxonomyIndexTemplate({
  eyebrow,
  title,
  description,
  items = [],
  kind = "taxonomy",
  active,
  heroMotif = "jaguar",
  mythIndex,
  footer,
  children,
}) {
  const mode =
    active === "/comunidades"
      ? "communities"
      : active === "/categorias"
        ? "categories"
        : "regions";
  const hasMythIndex = Array.isArray(mythIndex) && mythIndex.length > 0;

  return (
    <>
      <Header active={active} />
      <main id="contenido" className="min-h-[100dvh] overflow-x-clip bg-paper">
        <IndexHero
          mode={mode}
          title={title}
          description={description}
          items={items}
          heroMotif={heroMotif}
        />

        <Container size="atlas" className="py-14 md:py-20">
          <AtlasSectionHeader
            title={
              mode === "communities"
                ? "Voces que sostienen el archivo"
                : mode === "categories"
                  ? "Elige un hilo para empezar"
                  : "Recorrer el territorio"
            }
            description={eyebrow}
          />
          {kind === "routes" ? (
            <RouteGrid routes={items} eyebrow={null} />
          ) : mode === "communities" ? (
            <CommunityComposition items={items} />
          ) : (
            <TaxonomyComposition items={items} />
          )}
          {footer ? <div className="mt-12 flex justify-center">{footer}</div> : null}
        </Container>

        {hasMythIndex ? (
          <section className="border-y border-line-100 bg-mist-50">
            <Container size="atlas" className="py-14">
              <AtlasSectionHeader title="Mitos para empezar" />
              <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
                {mythIndex.map((group, index) => (
                  <div key={group.href} className="grid grid-cols-[2.2rem_1fr] gap-3">
                    <span className="font-editorial text-2xl text-jungle-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <Link href={group.href} className="font-editorial text-2xl font-semibold">
                        {group.title}
                      </Link>
                      <ul className="mt-3 space-y-1.5">
                        {(group.myths || []).slice(0, 4).map((myth) => (
                          <li key={myth.slug}>
                            <Link
                              href={`/mitos/${myth.slug}`}
                              className="text-sm text-ink-700 hover:text-jungle-700"
                            >
                              {myth.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        ) : null}

        {children}
      </main>
    </>
  );
}
