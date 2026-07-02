"use client";

import { useMemo, useState } from "react";
import { cn } from "../../lib/utils";
import { Container, Text, Stagger, StaggerItem } from "../atoms";
import {
  FilterBar,
  SegmentedControl,
  MythCard,
  MythListItem,
  EmptyState,
  Pagination,
} from "../molecules";

/**
 * Organismo · FilterableArchive
 * Archivo filtrable de mitos — el listado de /mitos. CLIENT: mantiene el estado
 * de los filtros (FilterBar) y de la vista grilla/lista (SegmentedControl).
 *
 * Presentacional y props-driven: recibe `myths` y `filters` por props; no toca
 * base de datos. El filtrado es local y simple (coincidencia exacta por faceta:
 * `region` y `theme`). Sin resultados → <EmptyState/>. La paginación es de demo.
 */

const DEMO_MYTHS = [
  {
    slug: "la-madremonte",
    title: "La Madremonte",
    excerpt:
      "Guardiana de bosques y nacimientos de agua que castiga a quien profana la naturaleza.",
    region: "Andina",
    community: "Campesina",
    theme: "Naturaleza",
    motif: "hoja",
  },
  {
    slug: "el-mohan",
    title: "El Mohán",
    excerpt:
      "Ser peludo y travieso de los ríos que seduce lavanderas y enreda las atarrayas de los pescadores.",
    region: "Andina",
    community: "Ribereña",
    theme: "Agua",
    motif: "agua",
  },
  {
    slug: "la-patasola",
    title: "La Patasola",
    excerpt:
      "Espíritu de una sola pierna que acecha en la montaña a cazadores y hombres infieles.",
    region: "Andina",
    community: "Campesina",
    theme: "Advertencia",
    motif: "montana",
  },
  {
    slug: "el-hombre-caiman",
    title: "El Hombre Caimán",
    excerpt:
      "Un hombre transformado en caimán por espiar a las mujeres del río Magdalena.",
    region: "Caribe",
    community: "Ribereña",
    theme: "Agua",
    motif: "anaconda",
  },
  {
    slug: "el-dorado",
    title: "El Dorado",
    excerpt:
      "El cacique cubierto de oro que se sumerge en la laguna de Guatavita como ofrenda.",
    region: "Andina",
    community: "Muisca",
    theme: "Origen",
    motif: "sol",
  },
  {
    slug: "la-bola-de-fuego",
    title: "La Bola de Fuego",
    excerpt:
      "Una esfera ardiente que recorre los llanos en las noches, alma en pena de los caminos.",
    region: "Orinoquía",
    community: "Llanera",
    theme: "Advertencia",
    motif: "luna",
  },
];

const DEMO_FILTERS = [
  {
    key: "region",
    label: "Región",
    options: [
      { value: "Andina", label: "Andina" },
      { value: "Caribe", label: "Caribe" },
      { value: "Orinoquía", label: "Orinoquía" },
      { value: "Pacífico", label: "Pacífico" },
      { value: "Amazonía", label: "Amazonía" },
    ],
  },
  {
    key: "theme",
    label: "Tema",
    options: [
      { value: "Agua", label: "Agua" },
      { value: "Naturaleza", label: "Naturaleza" },
      { value: "Advertencia", label: "Advertencia" },
      { value: "Origen", label: "Origen" },
    ],
  },
];

const VIEW_OPTIONS = [
  { value: "grid", label: "Grilla", icon: "menu" },
  { value: "list", label: "Lista", icon: "filter" },
];

export function FilterableArchive({
  myths = DEMO_MYTHS,
  filters = DEMO_FILTERS,
  className,
}) {
  const [view, setView] = useState("grid");
  const [filterValues, setFilterValues] = useState({});

  const results = useMemo(() => {
    const active = Object.entries(filterValues).filter(([, v]) => v);
    if (active.length === 0) return myths;
    return myths.filter((m) =>
      active.every(([key, value]) => m[key] === value)
    );
  }, [myths, filterValues]);

  const hasResults = results.length > 0;

  return (
    <Container size="wide" as="section" className={cn("py-6", className)}>
      <div className="mb-6 flex flex-col gap-4 border-b border-line-100 pb-5 lg:flex-row lg:items-start lg:justify-between">
        <FilterBar
          filters={filters}
          onChange={setFilterValues}
          className="lg:flex-1"
        />
        <div className="flex shrink-0 items-center gap-3">
          <Text size="sm" tone="muted" as="span">
            {results.length}{" "}
            {results.length === 1 ? "mito" : "mitos"}
          </Text>
          <SegmentedControl
            options={VIEW_OPTIONS}
            defaultValue="grid"
            onChange={setView}
          />
        </div>
      </div>

      {hasResults ? (
        view === "grid" ? (
          <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((myth) => (
              <StaggerItem key={myth.slug}>
                <MythCard myth={myth} motif={myth.motif} className="h-full" />
              </StaggerItem>
            ))}
          </Stagger>
        ) : (
          <div className="divide-y divide-line-100 border-y border-line-100">
            {results.map((myth, i) => (
              <MythListItem
                key={myth.slug}
                myth={myth}
                index={i + 1}
                motif={myth.motif}
              />
            ))}
          </div>
        )
      ) : (
        <EmptyState
          motif="hoja"
          title="Sin mitos para estos filtros"
          description="Ajusta o limpia los filtros para explorar más relatos del archivo."
        />
      )}

      {hasResults ? (
        <div className="mt-10 flex justify-center">
          <Pagination page={1} totalPages={4} makeHref={() => "#"} />
        </div>
      ) : null}
    </Container>
  );
}
