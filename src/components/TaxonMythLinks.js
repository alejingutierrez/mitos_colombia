import Link from "next/link";

/**
 * Compact, server-rendered list of a few representative myth links for a
 * taxonomy hub card on an INDEX page (/regiones, /comunidades, /categorias).
 *
 * The index pages previously linked only to taxon detail pages (zero direct
 * /mitos/ links), so myths sat two hops away from these well-crawled hubs.
 * Emitting a handful of real <a href> myth links here raises one-hop coverage
 * and gives each myth a topically-relevant inbound link from the index.
 */
export function TaxonMythLinks({ myths, max = 5 }) {
  if (!Array.isArray(myths) || myths.length === 0) {
    return null;
  }

  const shown = myths.slice(0, max);

  return (
    <div className="mt-1">
      <p className="mb-1 text-[10px] uppercase tracking-[0.3em] text-ink-400">
        Mitos
      </p>
      <ul className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs leading-relaxed">
        {shown.map((myth, index) => (
          <li key={myth.slug} className="flex items-center gap-2">
            <Link
              href={`/mitos/${myth.slug}`}
              className="text-ink-600 transition hover:text-river-600 hover:underline"
            >
              {myth.title}
            </Link>
            {index < shown.length - 1 ? (
              <span aria-hidden className="text-ink-300">
                ·
              </span>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
