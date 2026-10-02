import { TaxonomyDetailTemplate } from "../../../components/templates";

export const metadata = {
  title: "Sistema de diseño · Taxonomía (detalle)",
  robots: { index: false, follow: false },
};

const AMAZONAS = {
  name: "Amazonas",
  kind: "Región",
  count: 128,
  motif: "hoja",
  imageUrl: "/samples/amazonas.jpg",
  description:
    "Selva húmeda, ríos anchos y cosmogonías de los pueblos amazónicos. Aquí habitan los dueños del monte, las madres del agua y los espíritus que cuidan el equilibrio de la vida.",
};

const MYTHS = [
  { slug: "la-madre-de-agua", title: "La Madre de Agua", excerpt: "Guardiana de ríos y quebradas.", region: "Amazonas", community: "Tikuna", motif: "agua" },
  { slug: "el-mohan", title: "El Mohán", excerpt: "Ser de los remansos que enreda las atarrayas.", region: "Amazonas", community: "Ribereña", motif: "anaconda" },
  { slug: "la-yacuruna", title: "La Yacuruna", excerpt: "Pueblo del fondo del río que rapta a los incautos.", region: "Amazonas", community: "Uitoto", motif: "delfin" },
  { slug: "el-curupira", title: "El Curupira", excerpt: "Dueño del monte de pies al revés.", region: "Amazonas", community: "Tikuna", motif: "jaguar" },
  { slug: "el-boraro", title: "El Boraro", excerpt: "Espíritu que castiga al cazador ambicioso.", region: "Amazonas", community: "Desana", motif: "montana" },
  { slug: "la-anaconda-ancestral", title: "La Anaconda Ancestral", excerpt: "La canoa-serpiente que trajo a los primeros pueblos.", region: "Amazonas", community: "Desana", motif: "anaconda" },
];

export default function TaxonomiaDetallePage() {
  return (
    <TaxonomyDetailTemplate
      taxonomy={AMAZONAS}
      myths={MYTHS}
      pagination={{ page: 1, totalPages: 6, makeHref: (p) => `/regiones/amazonas?page=${p}` }}
      breadcrumb={[
        { label: "Regiones", href: "/regiones" },
        { label: "Amazonas" },
      ]}
    />
  );
}
