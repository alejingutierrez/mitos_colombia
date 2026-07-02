import { TaxonomyIndexTemplate } from "../../../components/templates";

export const metadata = {
  title: "Sistema de diseño · Taxonomía (índice)",
  robots: { index: false, follow: false },
};

const REGIONS = [
  { title: "Amazonas", href: "/regiones/amazonas", count: 128, motif: "hoja", imageUrl: "/samples/amazonas.jpg", description: "Selva, ríos y cosmogonías amazónicas." },
  { title: "Andina", href: "/regiones/andina", count: 142, motif: "montana", imageUrl: "/samples/andina.jpg", description: "Páramos, lagunas y seres de la cordillera." },
  { title: "Caribe", href: "/regiones/caribe", count: 88, motif: "agua", imageUrl: "/samples/caribe.jpg", description: "Mar, manglar y relatos de la costa." },
  { title: "Pacífico", href: "/regiones/pacifico", count: 76, motif: "delfin", imageUrl: "/samples/pacifico.jpg", description: "Selva húmeda y tradición afrodescendiente." },
  { title: "Orinoquía", href: "/regiones/orinoquia", count: 54, motif: "luna", description: "Llanos, sabana y sus ánimas errantes." },
  { title: "Insular", href: "/regiones/insular", count: 12, motif: "sol", description: "Islas del Caribe y su memoria isleña." },
];

export default function TaxonomiaIndicePage() {
  return (
    <TaxonomyIndexTemplate
      eyebrow="Explora por territorio"
      title="Regiones de Colombia"
      description="Recorre los mitos según la geografía de donde provienen, de la selva amazónica al mar Caribe."
      items={REGIONS}
      active="/regiones"
      columns={3}
    />
  );
}
