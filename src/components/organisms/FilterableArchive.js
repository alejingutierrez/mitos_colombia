"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { cn } from "../../lib/utils";
import { Container, Icon, ImageFrame, Text } from "../atoms";
import { EmptyState, FilterBar } from "../molecules";
import { OverlayMythCard } from "../editorial/AtlasEditorial";

function ResultRow({ myth, index }) {
  return (
    <Link
      href={`/mitos/${myth.slug}`}
      className="group grid grid-cols-[2.3rem_5.5rem_1fr_auto] items-center gap-4 border-b border-line-100 py-4"
    >
      <span className="font-editorial text-2xl text-jungle-700">
        {String(index + 1).padStart(2, "0")}
      </span>
      <ImageFrame
        src={myth.imageUrl}
        alt=""
        ratio="4 / 3"
        sizes="88px"
        className="rounded-none border-0"
        imgClassName="atlas-image-zoom object-cover"
      />
      <span className="min-w-0">
        <span className="block font-editorial text-xl font-semibold leading-none text-ink-900">
          {myth.title}
        </span>
        <span className="atlas-kicker mt-2 block">
          {[myth.region, myth.community].filter(Boolean).join(" · ")}
        </span>
      </span>
      <Icon name="arrow-right" size={16} className="mc-arrow text-jungle-700" />
    </Link>
  );
}

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
          titleClassName="!text-[2.6rem]"
        />
        <OverlayMythCard
          myth={second}
          ratio="4 / 3"
          sizes="(max-width: 1024px) 100vw, 27vw"
          showExcerpt={false}
          titleClassName="!text-[1.65rem]"
        />
        <OverlayMythCard
          myth={third}
          ratio="4 / 3"
          sizes="(max-width: 1024px) 100vw, 27vw"
          showExcerpt={false}
          titleClassName="!text-[1.65rem]"
        />
        <div className="border-y border-line-100 lg:col-span-2">
          {rest.slice(0, 4).map((myth, index) => (
            <ResultRow key={myth.slug} myth={myth} index={index + 3} />
          ))}
        </div>
      </div>
      {rest.length > 4 ? (
        <div className="mt-10 grid gap-x-10 sm:grid-cols-2">
          {rest.slice(4).map((myth, index) => (
            <ResultRow key={myth.slug} myth={myth} index={index + 7} />
          ))}
        </div>
      ) : null}
    </>
  );
}

export function FilterableArchive({ myths = [], filters = [], className }) {
  const [filterValues, setFilterValues] = useState({});

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
          <h2 className="font-editorial text-4xl font-semibold text-ink-900 md:text-5xl">
            Relatos para explorar
          </h2>
          <span className="atlas-rule" />
        </div>
        <div className="lg:max-w-3xl lg:flex-1">
          <FilterBar filters={filters} onChange={setFilterValues} />
        </div>
        <Text size="sm" tone="muted" as="span" className="shrink-0">
          {results.length} {results.length === 1 ? "mito" : "mitos"}
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
