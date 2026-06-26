import Link from "next/link";

/**
 * Server-rendered, crawlable index of every myth in a taxon.
 *
 * The interactive <FilterableMythList> only SSRs its first page of cards and
 * loads the rest via client-side fetch, which Googlebot does not follow. This
 * component emits the full set of myths as plain <a href> links so every myth
 * receives a topical internal link from its region/community/category hub —
 * not just from the deep /mitos/pagina/N pagination.
 */
export function MythIndexList({ title, myths }) {
  if (!Array.isArray(myths) || myths.length === 0) {
    return null;
  }

  return (
    <section className="container-shell mt-10">
      <div className="glass-panel p-6 md:p-8">
        <h2 className="font-display text-2xl text-ink-900">{title}</h2>
        <p className="mt-2 text-xs uppercase tracking-[0.25em] text-ink-500">
          Índice completo · {myths.length}{" "}
          {myths.length === 1 ? "mito" : "mitos"}
        </p>
        <ul className="mt-5 grid gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
          {myths.map((myth) => (
            <li key={myth.slug}>
              <Link
                href={`/mitos/${myth.slug}`}
                className="text-sm leading-relaxed text-ink-700 transition hover:text-river-600 hover:underline"
              >
                {myth.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
