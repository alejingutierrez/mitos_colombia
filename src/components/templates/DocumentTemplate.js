import { cn } from "../../lib/utils";
import {
  Container,
  Heading,
  Text,
  Eyebrow,
  IndexNumber,
  Prose,
  Divider,
} from "../atoms";
import { Breadcrumb } from "../molecules";
import { Header, MythGrid } from "../organisms";

/**
 * Template · DocumentTemplate
 * Páginas de texto/editorial (metodología, sobre el proyecto, legal, contacto).
 * Hero + `feature` opcional + secciones numeradas de prosa + aside opcional
 * (TOC, info) + grilla de mitos relacionados opcional.
 *
 * Props: { eyebrow, title, description, breadcrumb?, updated?,
 *          sections: [{ title, body }], feature?, aside?, related?, accent? }
 * `body` puede ser string (se parte en párrafos) o JSX.
 *
 * `feature` es una ranura a ANCHO DE COLUMNA que va entre el hero y la prosa,
 * para lo que la persona vino a hacer (en /contacto, el formulario). Nació
 * porque el formulario vivía en el `aside` de 320px: con `p-8` quedaban 256px
 * útiles y su `md:grid-cols-2` —que mide la VENTANA, no la tarjeta— los partía
 * en dos campos de 119px. Ningún ajuste de CSS arregla eso; había que sacarlo
 * del aside. Es aditiva: sin `feature` la plantilla se comporta igual que antes.
 */

function SectionBody({ body }) {
  if (typeof body === "string") {
    return (
      <Prose className="mt-3">
        {body
          .split(/\n{1,}/)
          .map((p) => p.trim())
          .filter(Boolean)
          .map((p, i) => (
            <p key={i}>{p}</p>
          ))}
      </Prose>
    );
  }
  return <Prose className="mt-3">{body}</Prose>;
}

export function DocumentTemplate({
  eyebrow = "Documento",
  title,
  description,
  breadcrumb,
  updated,
  sections = [],
  feature,
  aside,
  related,
  accent = "jungle",
}) {
  const crumbs = breadcrumb || [{ label: "Inicio", href: "/" }, { label: title }];

  return (
    <>
      <Header />
      <main id="contenido" className="min-h-[100dvh] bg-paper">
        {/* Hero del documento */}
        <Container size="wide" className="pt-10 md:pt-14">
          <Breadcrumb items={crumbs} className="mb-8" />
          <div className="max-w-3xl">
            <Eyebrow tone={accent} withRule className="mb-4">
              {eyebrow}
            </Eyebrow>
            <Heading
              level={1}
              accent={accent}
              className="font-editorial text-[3.25rem] font-semibold leading-[0.94] tracking-[-0.035em] md:text-[4.6rem]"
            >
              {title}
            </Heading>
            {description ? (
              <Text size="lg" className="mt-5">
                {description}
              </Text>
            ) : null}
            {updated ? (
              <Text size="sm" tone="muted" className="mt-4">
                Actualizado {updated}
              </Text>
            ) : null}
          </div>
          <Divider className="mt-10" />
        </Container>

        {/* Ranura destacada: lo accionable, antes de la prosa larga */}
        {feature ? (
          <Container size="wide" className="pt-10 md:pt-12">
            <div className={cn(aside ? "" : "mx-auto", "max-w-3xl")}>
              {feature}
              <Divider className="mt-12" />
            </div>
          </Container>
        ) : null}

        {/* Cuerpo: secciones + aside */}
        <Container size="wide" className="py-12">
          <div className={aside ? "grid gap-10 lg:grid-cols-[1fr_320px]" : ""}>
            <div className={cn(aside ? "" : "mx-auto", "max-w-3xl space-y-12")}>
              {sections.map((s, i) => (
                <section key={s.title || i} className="scroll-mt-24">
                  <div className="flex items-baseline gap-3">
                    <IndexNumber value={i + 1} size="sm" />
                    <Heading level={2}>{s.title}</Heading>
                  </div>
                  <SectionBody body={s.body} />
                </section>
              ))}
            </div>

            {aside ? (
              <aside className="lg:sticky lg:top-24 lg:self-start">{aside}</aside>
            ) : null}
          </div>
        </Container>

        {/* Mitos relacionados */}
        {related && related.length > 0 ? (
          <Container size="wide" className="border-t border-line-100 py-14">
            <MythGrid eyebrow="Del archivo" title="Mitos para leer" myths={related} />
          </Container>
        ) : null}
      </main>
    </>
  );
}
