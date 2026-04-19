import Image from "next/image";
import Link from "next/link";

export function MythCard({ myth, featured = false }) {
  if (!myth) return null;

  const hasImage = myth.image_url != null;

  return (
    <Link
      href={`/mitos/${myth.slug}`}
      className="group block h-full"
      data-analytics-event="select_content"
      data-analytics-category="myth"
      data-analytics-label={myth.title}
    >
      <article className="relative flex h-full flex-col overflow-hidden rounded-[20px] border border-white/70 bg-white/75 shadow-[0_12px_40px_rgba(18,22,24,0.06)] backdrop-blur-md transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_30px_70px_rgba(18,22,24,0.16)]">
        {hasImage ? (
          <div className={`relative overflow-hidden ${featured ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
            <Image
              src={myth.image_url}
              alt={myth.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition duration-700 group-hover:scale-[1.04]"
            />
            {myth.region ? (
              <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#0c4637] shadow-sm backdrop-blur-sm">
                {myth.region}
              </span>
            ) : null}
          </div>
        ) : null}
        <div className="flex flex-1 flex-col gap-3 p-6">
          {!hasImage && myth.region ? (
            <span className="text-[11px] uppercase tracking-[0.28em] text-ink-500">
              {myth.region}
              {myth.community ? ` · ${myth.community}` : ""}
            </span>
          ) : null}
          <h3 className={`font-display ${featured ? "text-[26px] md:text-[28px]" : "text-[22px]"} font-semibold leading-[1.15] tracking-[-0.02em] text-ink-900 line-clamp-2 transition-colors group-hover:text-[#0c4637]`}>
            {myth.title}
          </h3>
          {hasImage && myth.community ? (
            <span className="text-[11px] uppercase tracking-[0.24em] text-ink-500">
              Pueblo · {myth.community}
            </span>
          ) : null}
          {myth.excerpt ? (
            <p className="mt-1 text-sm leading-[1.6] text-ink-700 line-clamp-3">
              {myth.excerpt}
            </p>
          ) : null}
          <div className="mt-auto flex items-center gap-2 pt-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-ink-700 transition-colors group-hover:text-ink-900">
            <span>Leer relato</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
