import Image from "next/image";
import Link from "next/link";
import { Container, Icon, ImageFrame, Motif } from "../atoms";

function mythHref(myth) {
  return myth?.slug ? `/mitos/${myth.slug}` : "/mitos";
}

export function AtlasSectionHeader({
  title,
  description,
  actionHref,
  actionLabel,
  align = "start",
  className = "",
}) {
  return (
    <div
      className={`mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between ${className}`}
    >
      <div className={align === "center" ? "mx-auto text-center" : ""}>
        <h2 className="atlas-section-heading">{title}</h2>
        <span className={`atlas-rule ${align === "center" ? "mx-auto" : ""}`} />
        {description ? (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-700 md:text-base">
            {description}
          </p>
        ) : null}
      </div>
      {actionHref && actionLabel ? (
        <Link href={actionHref} className="atlas-link group shrink-0">
          {actionLabel}
          <Icon name="arrow-right" size={17} className="mc-arrow" />
        </Link>
      ) : null}
    </div>
  );
}

export function OverlayMythCard({
  myth,
  ratio = "4 / 3",
  priority = false,
  quality = 75,
  sizes,
  className = "",
  showExcerpt = true,
  titleClassName = "",
  contentClassName = "",
}) {
  if (!myth) return null;
  return (
    <Link
      href={mythHref(myth)}
      className={`group relative block overflow-hidden bg-[rgb(var(--atlas-night))] ${className}`}
    >
      <ImageFrame
        src={myth.imageUrl}
        alt={myth.title}
        ratio={ratio}
        priority={priority}
        quality={quality}
        sizes={sizes}
        placeholderMotif={myth.motif || "jaguar"}
        placeholderSize={160}
        className="rounded-none border-0"
        imgClassName="atlas-image-zoom object-cover"
      />
      <span
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent"
        aria-hidden="true"
      />
      <span
        className={`absolute inset-x-0 bottom-0 block p-5 text-white md:p-6 ${contentClassName}`}
      >
        <span className="block text-[0.67rem] font-medium uppercase tracking-[0.16em] text-white/78">
          {[myth.region, myth.community].filter(Boolean).join(" · ")}
        </span>
        <span
          className={`mt-2 block font-editorial text-[2rem] font-semibold leading-[0.92] tracking-[-0.025em] md:text-[2.35rem] ${titleClassName}`}
        >
          {myth.title}
        </span>
        {showExcerpt && myth.excerpt ? (
          <span className="mt-3 hidden max-w-xl text-sm leading-relaxed text-white/88 sm:block">
            {myth.excerpt}
          </span>
        ) : null}
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">
          Leer este mito <Icon name="arrow-right" size={17} className="mc-arrow" />
        </span>
      </span>
    </Link>
  );
}

export function CompactMythLink({ myth, imageSide = "left", className = "" }) {
  if (!myth) return null;
  return (
    <Link
      href={mythHref(myth)}
      className={`group grid min-h-28 grid-cols-[7rem_1fr] border border-line-100 bg-white transition-colors hover:border-line-300 ${imageSide === "right" ? "grid-cols-[1fr_7rem]" : ""} ${className}`}
    >
      <div className={imageSide === "right" ? "order-2" : ""}>
        <ImageFrame
          src={myth.imageUrl}
          alt={myth.title}
          ratio="1 / 1"
          sizes="112px"
          placeholderMotif={myth.motif || "jaguar"}
          className="h-full rounded-none border-0"
          imgClassName="atlas-image-zoom object-cover"
        />
      </div>
      <div className="flex min-w-0 flex-col justify-center p-4">
        <span className="atlas-kicker">
          {[myth.region, myth.community].filter(Boolean).join(" · ")}
        </span>
        <span className="mt-2 font-editorial text-[1.35rem] font-semibold leading-[1] text-ink-900">
          {myth.title}
        </span>
        <Icon
          name="arrow-right"
          size={17}
          className="mc-arrow mt-3 text-jungle-700"
        />
      </div>
    </Link>
  );
}

export function SelectionMosaic({ myths = [] }) {
  const [lead, second, third, ...rail] = myths;
  if (!lead) return null;
  return (
    <div className="grid gap-3 lg:grid-cols-12 lg:grid-rows-2">
      <OverlayMythCard
        myth={lead}
        ratio="4 / 5"
        priority
        sizes="(max-width: 1024px) 100vw, 42vw"
        className="lg:col-span-5 lg:row-span-2"
      />
      <OverlayMythCard
        myth={second}
        ratio="16 / 9"
        sizes="(max-width: 1024px) 100vw, 34vw"
        className="lg:col-span-4"
        titleClassName="!text-[1.85rem]"
      />
      <div className="grid gap-3 sm:grid-cols-2 lg:col-span-3 lg:row-span-2 lg:grid-cols-1">
        {rail.slice(0, 4).map((myth) => (
          <CompactMythLink key={myth.slug} myth={myth} />
        ))}
      </div>
      <OverlayMythCard
        myth={third}
        ratio="16 / 9"
        sizes="(max-width: 1024px) 100vw, 34vw"
        className="lg:col-span-4"
        titleClassName="!text-[1.85rem]"
      />
    </div>
  );
}

export function EditorialMythRow({ myths = [], reverse = false }) {
  const [lead, ...rest] = myths;
  if (!lead) return null;
  return (
    <div
      className={`grid items-stretch gap-6 lg:grid-cols-[1.2fr_0.8fr] ${
        reverse ? "lg:grid-cols-[0.8fr_1.2fr]" : ""
      }`}
    >
      <OverlayMythCard
        myth={lead}
        ratio="16 / 10"
        sizes="(max-width: 1024px) 100vw, 58vw"
        className={reverse ? "lg:order-2" : ""}
      />
      <div
        className={`divide-y divide-line-100 border-y border-line-100 ${
          reverse ? "lg:order-1" : ""
        }`}
      >
        {rest.slice(0, 4).map((myth, index) => (
          <Link
            key={myth.slug}
            href={mythHref(myth)}
            className="group grid grid-cols-[4.5rem_1fr_auto] items-center gap-4 py-4"
          >
            <span className="relative aspect-square overflow-hidden">
              {myth.imageUrl ? (
                <Image
                  src={myth.imageUrl}
                  alt=""
                  fill
                  sizes="72px"
                  className="atlas-image-zoom object-cover"
                />
              ) : (
                <span className="absolute inset-0 flex items-center justify-center bg-mist-50">
                  <Motif name={myth.motif || "hoja"} size={32} />
                </span>
              )}
            </span>
            <span className="min-w-0">
              <span className="atlas-kicker block">
                {[myth.region, myth.community].filter(Boolean).join(" · ")}
              </span>
              <span className="mt-1 block font-editorial text-xl font-semibold leading-none text-ink-900">
                {myth.title}
              </span>
            </span>
            <span className="font-editorial text-lg text-ink-500">
              {String(index + 1).padStart(2, "0")}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function PortraitRail({ myths = [], className = "" }) {
  return (
    <div
      className={`grid snap-x snap-mandatory grid-flow-col auto-cols-[78%] gap-4 overflow-x-auto pb-3 sm:auto-cols-[45%] lg:grid-flow-row lg:grid-cols-4 lg:overflow-visible ${className}`}
    >
      {myths.slice(0, 8).map((myth) => (
        <Link
          key={myth.slug}
          href={mythHref(myth)}
          className="group snap-start"
        >
          <ImageFrame
            src={myth.imageUrl}
            alt={myth.title}
            ratio="3 / 4"
            sizes="(max-width: 640px) 78vw, (max-width: 1024px) 45vw, 25vw"
            placeholderMotif={myth.motif || "condor"}
            placeholderSize={120}
            className="rounded-none border-0"
            imgClassName="atlas-image-zoom object-cover"
          />
          <span className="atlas-kicker mt-4 block">
            {[myth.region, myth.community].filter(Boolean).join(" · ")}
          </span>
          <span className="mt-1 block font-editorial text-[1.55rem] font-semibold leading-none text-ink-900">
            {myth.title}
          </span>
        </Link>
      ))}
    </div>
  );
}

export function TerritoryStrip({ regions = [] }) {
  return (
    <div className="grid gap-px overflow-hidden bg-line-100 md:grid-cols-3">
      {regions.slice(0, 6).map((region) => (
        <Link
          key={region.href}
          href={region.href}
          className="group relative min-h-[22rem] overflow-hidden bg-[rgb(var(--atlas-night))]"
        >
          {region.imageUrl ? (
            <Image
              src={region.imageUrl}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 34vw"
              className="atlas-image-zoom object-cover opacity-85"
            />
          ) : (
            <span className="absolute inset-0 flex items-center justify-center opacity-30">
              <Motif name={region.motif || "montana"} size={180} />
            </span>
          )}
          <span className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent" />
          <span className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-white">
            <span>
              <span className="atlas-kicker !text-white/70">Territorio</span>
              <span className="mt-1 block font-editorial text-4xl font-semibold leading-none">
                {region.title}
              </span>
            </span>
            <span className="text-right">
              <span className="block font-editorial text-3xl">{region.count}</span>
              <span className="atlas-kicker !text-white/60">mitos</span>
            </span>
          </span>
        </Link>
      ))}
    </div>
  );
}

export function AtlasPageIntro({ title, description, count, children }) {
  return (
    <Container size="atlas" className="py-12 md:py-20">
      <div className="grid gap-8 md:grid-cols-[1fr_0.9fr] md:items-end">
        <div>
          <h1 className="atlas-title text-[3.5rem] md:text-[5.6rem]">{title}</h1>
          {description ? (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-700 md:text-lg">
              {description}
            </p>
          ) : null}
        </div>
        <div className="md:justify-self-end">
          {count != null ? (
            <p className="font-editorial text-6xl font-semibold leading-none text-jungle-700 md:text-8xl">
              {count}
            </p>
          ) : null}
          {children}
        </div>
      </div>
    </Container>
  );
}
