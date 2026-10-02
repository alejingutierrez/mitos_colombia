import { Container } from "../atoms";
import { Header } from "../organisms";
import { CommunityIndexBoard } from "../comunidades/CommunityIndexBoard";
import { UnattributedEntry } from "../comunidades/UnattributedEntry";
import Link from "next/link";
import { ArchivePageHeader } from "../editorial/ArchivePageHeader";
import canvas from "../editorial/archive-canvas.module.css";

/**
 * Plantilla · CommunityIndexTemplate — dirección «Mesa de pueblos» para
 * /comunidades.
 *
 * Sigue siendo una sola superficie con búsqueda, filtro por territorio y
 * orden, pero ahora la mesa la sirve `CommunityIndexBoard` y trae las treinta
 * y ocho comunidades con relatos, no las veinte que pasaban un listón de seis.
 *
 * Debajo, y deliberadamente fuera de la mesa, va `UnattributedEntry`: la
 * puerta a los relatos que llegaron sin pueblo atribuido. Están separados
 * porque no son una comunidad, y están **a la vista** porque son el 42,5 % del
 * archivo y antes no se nombraban en ninguna parte.
 */
export function CommunityIndexTemplate({
  eyebrow,
  title,
  description,
  communities = [],
  regions = [],
  unattributed = null,
  note,
  active = "/comunidades",
  children,
}) {
  return (
    <>
      <Header active={active} />
      <main id="contenido" className={canvas.canvas}>
        <ArchivePageHeader eyebrow={eyebrow} title={title} description={description}>
          {unattributed?.total ? <Link href={unattributed.href} className="atlas-link mt-4 inline-flex min-h-11">Mestizos y mixtos · {unattributed.total} relatos →</Link> : null}
        </ArchivePageHeader>

        <Container size="atlas" className="pb-12">
          <CommunityIndexBoard communities={communities} regions={regions} />
          {note ? (
            <p className="mt-8 max-w-[46rem] border-t border-line-100 pt-5 text-[length:var(--step--1)] leading-relaxed text-ink-500">
              {note}
            </p>
          ) : null}
        </Container>

        <UnattributedEntry data={unattributed} />

        {children}
      </main>
    </>
  );
}
