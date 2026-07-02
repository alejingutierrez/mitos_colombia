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
 * Hero + secciones numeradas de prosa + aside opcional (TOC, formulario, info) +
 * grilla de mitos relacionados opcional.
 *
 * Props: { eyebrow, title, description, breadcrumb?, updated?,
 *          sections: [{ title, body }], aside?, related?, accent? }
 * `body` puede ser string (se parte en párrafos) o JSX.
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
  aside,
  related,
  accent = "jungle",
}) {
  const crumbs = breadcrumb || [{ label: "Inicio", href: "/" }, { label: title }];

  return (
    <>
      <Header />
      <main className="min-h-[100dvh] bg-paper">
        {/* Hero del documento */}
        <Container size="wide" className="pt-10 md:pt-14">
          <Breadcrumb items={crumbs} className="mb-8" />
          <div className="max-w-3xl">
            <Eyebrow tone={accent} withRule className="mb-4">
              {eyebrow}
            </Eyebrow>
            <Heading level={1} accent={accent}>
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
