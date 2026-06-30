import Link from "next/link";

/**
 * Per-article provenance + editorial-process signal (E-E-A-T).
 *
 * Surfaces, on every myth page, the real oral-tradition origin of the relato
 * (its region/community, both already in the DB — no invented sourcing) and a
 * contextual link to the editorial methodology. A contextual link from the
 * content itself is a stronger trust signal than the sitewide footer link, and
 * it gives /metodologia dense internal linking from all ~546 myth pages.
 *
 * NOTE: the copy intentionally mirrors /metodologia's own wording. Adjust the
 * text there and here together if the editorial framing changes.
 */
export function MythProvenance({ region, community }) {
  const origin = community
    ? `el pueblo ${community}`
    : region
      ? `la región ${region}`
      : "Colombia";

  return (
    <aside className="mt-5 rounded-2xl border border-white/60 bg-white/40 p-4 text-sm text-ink-600">
      <p className="leading-relaxed">
        <span className="font-semibold text-ink-800">Tradición oral.</span>{" "}
        Relato de {origin} de Colombia, organizado y adaptado por el equipo
        editorial de Mitos de Colombia a partir de fuentes orales, bibliográficas
        y registros culturales.{" "}
        <Link
          href="/metodologia"
          className="text-river-600 underline decoration-river-200 decoration-2 underline-offset-4 transition hover:text-river-700"
        >
          Cómo investigamos y adaptamos los mitos
        </Link>
        .
      </p>
    </aside>
  );
}
