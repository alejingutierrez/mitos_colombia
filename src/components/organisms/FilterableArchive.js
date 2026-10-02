"use client";

import { useMemo, useState } from "react";
import { cn } from "../../lib/utils";
import { Container } from "../atoms/Container";
import { Text } from "../atoms/Text";
import { ArtworkLink } from "../molecules/ArtworkLink";
import { EmptyState } from "../molecules/EmptyState";
import { FilterBar } from "../molecules/FilterBar";

/**
 * Organismo · FilterableArchive — explorador de una categoría.
 *
 * El renglón de resultados ya no vive aquí: es `ArchiveRow`, el mismo que usa
 * `/mitos`. Antes había dos copias del mismo renglón con medidas distintas
 * (miniatura de 88px acá, 104px allá) y con la numeración calculada por
 * separado, así que cualquier arreglo tenía que hacerse dos veces —y una de
 * las dos se quedaba atrás.
 */

function MixedResults({ myths }) {
  return <ul className="grid grid-cols-1 gap-[2px] sm:grid-cols-2 lg:grid-cols-3">{myths.map((myth,index) => <li key={myth.slug}><ArtworkLink myth={myth} priority={index === 0} loading={index < 3 ? "eager" : undefined} /></li>)}</ul>;
}

export function FilterableArchive({
  myths = [],
  filters = [],
  totalCount,
  className,
}) {
  const [filterValues, setFilterValues] = useState({});
  const hasActiveFilters = Object.values(filterValues).some(Boolean);

  const results = useMemo(() => {
    const active = Object.entries(filterValues).filter(([, value]) => value);
    if (active.length === 0) return myths;
    return myths.filter((myth) =>
      active.every(([key, value]) => myth[key] === value)
    );
  }, [myths, filterValues]);

  return (
    <Container size="atlas" as="section" className={cn("py-6", className)}>
      <div className="mb-5 flex flex-col gap-3 border-b border-line-100 pb-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 className="atlas-section-heading">Relatos para explorar</h2>
          <span className="atlas-rule" />
        </div>
        <div className="lg:max-w-3xl lg:flex-1">
          <FilterBar filters={filters} onChange={setFilterValues} />
        </div>
        <Text size="sm" tone="muted" as="span" className="shrink-0">
          {!hasActiveFilters && totalCount > results.length
            ? `${results.length} seleccionados de ${totalCount}`
            : `${results.length} ${results.length === 1 ? "mito" : "mitos"}`}
        </Text>
      </div>

      {results.length ? (
        <MixedResults myths={results} />
      ) : (
        <EmptyState
          motif="hoja"
          title="Sin mitos para estos filtros"
          description="Ajusta o limpia los filtros para explorar más relatos del archivo."
        />
      )}
    </Container>
  );
}
