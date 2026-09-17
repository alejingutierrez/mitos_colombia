"use client";

import { useMemo, useState } from "react";
import { cn } from "../../lib/utils";
import { Container } from "../atoms/Container";
import { Text } from "../atoms/Text";
import { ArchiveRow } from "../molecules/ArchiveRow";
import { EmptyState } from "../molecules/EmptyState";
import { FilterBar } from "../molecules/FilterBar";
import { OverlayMythCard } from "../editorial/AtlasEditorial";

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
  const [lead, second, third, ...rest] = myths;

  return (
    <>
      <div className="grid gap-3 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <OverlayMythCard
          myth={lead}
          ratio="16 / 10"
          sizes="(max-width: 1024px) 100vw, 45vw"
          className="lg:row-span-2"
          titleClass="atlas-title-xl"
        />
        <OverlayMythCard
          myth={second}
          ratio="4 / 3"
          sizes="(max-width: 1024px) 100vw, 27vw"
          showExcerpt={false}
          titleClass="atlas-title-md"
        />
        <OverlayMythCard
          myth={third}
          ratio="4 / 3"
          sizes="(max-width: 1024px) 100vw, 27vw"
          showExcerpt={false}
          titleClass="atlas-title-md"
        />
        {rest.length ? (
          <ol className="list-none border-t border-line-100 lg:col-span-2">
            {rest.slice(0, 4).map((myth, index) => (
              <li key={myth.slug}>
                <ArchiveRow myth={myth} folio={index + 4} />
              </li>
            ))}
          </ol>
        ) : null}
      </div>

      {rest.length > 4 ? (
        <ol className="mt-10 list-none border-t border-line-100">
          {rest.slice(4).map((myth, index) => (
            <li key={myth.slug}>
              <ArchiveRow myth={myth} folio={index + 8} />
            </li>
          ))}
        </ol>
      ) : null}
    </>
  );
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
    <Container size="atlas" as="section" className={cn("py-12", className)}>
      <div className="mb-8 flex flex-col gap-5 border-b border-line-100 pb-6 lg:flex-row lg:items-end lg:justify-between">
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
