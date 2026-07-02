import { DocumentTemplate } from "../../../components/templates";
import { Surface, Heading, Text, TextLink } from "../../../components/atoms";

export const metadata = {
  title: "Sistema de diseño · Documento",
  robots: { index: false, follow: false },
};

const SECTIONS = [
  {
    title: "Una estructura pensada para la lectura",
    body: "Cada mito se organiza en secciones claras —relato, contexto histórico, versiones, la enseñanza y sus resonancias— para que puedas leerlo completo o saltar a lo que buscas.\nEl objetivo es respetar la tradición oral sin volverla un texto plano: cada capa aporta algo distinto.",
  },
  {
    title: "Cómo se construye la taxonomía",
    body: "Los relatos se agrupan por región, comunidad y tema. La región ancla el mito a su geografía; la comunidad reconoce a quién pertenece la voz; el tema permite cruzar mitos de todo el país.",
  },
  {
    title: "Lenguaje, ritmo y cuidado cultural",
    body: "Editamos para la claridad, nunca para borrar. Mantenemos los nombres, los lugares y las variantes tal como se cuentan, y señalamos la procedencia de cada versión.",
  },
];

const ASIDE = (
  <Surface className="p-5">
    <Heading level={4} className="mb-2">
      En esta página
    </Heading>
    <ul className="space-y-2">
      {SECTIONS.map((s, i) => (
        <li key={i}>
          <TextLink href={`#s-${i}`} className="text-sm">
            {i + 1}. {s.title}
          </TextLink>
        </li>
      ))}
    </ul>
    <Text size="xs" tone="muted" className="mt-4 border-t border-line-100 pt-4">
      ¿Dudas sobre el método? Escríbenos desde la página de contacto.
    </Text>
  </Surface>
);

const RELATED = [
  { slug: "la-madre-de-agua", title: "La Madre de Agua", excerpt: "Guardiana de ríos del Pacífico.", region: "Pacífico", community: "Afrocolombiana", motif: "agua" },
  { slug: "el-mohan", title: "El Mohán", excerpt: "Ser de los remansos andinos.", region: "Andina", community: "Río Magdalena", motif: "anaconda" },
  { slug: "el-silbon", title: "El Silbón", excerpt: "Ánima errante de los Llanos.", region: "Orinoquía", community: "Los Llanos", motif: "luna" },
];

export default function DocumentPreviewPage() {
  return (
    <DocumentTemplate
      eyebrow="Metodología"
      title="Cómo documentamos cada mito"
      description="Los principios editoriales detrás del archivo: cómo estructuramos, curamos y cuidamos cada relato de la tradición oral colombiana."
      breadcrumb={[{ label: "Inicio", href: "/" }, { label: "Metodología" }]}
      updated="el 2 de julio de 2026"
      sections={SECTIONS}
      aside={ASIDE}
      related={RELATED}
    />
  );
}
