"use client";

import "leaflet/dist/leaflet.css";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  MapContainer,
  Marker,
  Polyline,
  TileLayer,
  Tooltip,
  useMap,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import { Icon } from "./atoms";
import { trackEvent } from "../lib/analytics";

const COLOMBIA_BOUNDS = [
  [-4.8, -79.4],
  [13.8, -66.4],
];

const MAP_TILES =
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

const MAP_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';

const PIN_WIDTH = 28;
const PIN_HEIGHT = 38;

const PIN_SVG = `
  <svg viewBox="0 0 40 52" aria-hidden="true" focusable="false">
    <path class="map-pin-shape" d="M20 1.5c-8.28 0-15 6.72-15 15 0 11.65 13.44 30.16 14.01 30.94a1 1 0 0 0 1.98 0C21.56 46.66 35 28.15 35 16.5c0-8.28-6.72-15-15-15z" />
    <circle class="map-pin-dot" cx="20" cy="17" r="6" />
  </svg>
`;

const iconCache = new Map();

function getPinIcon({ count = 0, isActive }) {
  const badgeCount = count > 1 ? count : 0;
  const key = `${badgeCount}-${isActive ? "active" : "base"}`;
  if (iconCache.has(key)) {
    return iconCache.get(key);
  }

  const html = `
    <div class="map-pin ${isActive ? "is-active" : ""}">
      ${PIN_SVG}
      ${badgeCount ? `<span class="map-pin-count">${badgeCount}</span>` : ""}
    </div>
  `;

  const icon = L.divIcon({
    className: "map-pin-shell",
    html,
    iconSize: [PIN_WIDTH, PIN_HEIGHT],
    iconAnchor: [Math.round(PIN_WIDTH / 2), PIN_HEIGHT - 2],
    popupAnchor: [0, -42],
  });

  iconCache.set(key, icon);
  return icon;
}

function MapEvents({ onMapClick }) {
  useMapEvents({
    click: () => {
      onMapClick();
    },
  });
  return null;
}

function MapZoomBoost({ levels = 1 }) {
  const map = useMap();
  const appliedRef = useRef(false);

  useEffect(() => {
    if (!map || appliedRef.current) return;

    const applyZoom = () => {
      if (appliedRef.current) return;
      const current = map.getZoom();
      const maxZoom = map.getMaxZoom() ?? 18;
      const target = Math.min(current + levels, maxZoom);
      if (target !== current) {
        map.setZoom(target, { animate: false });
      }
      appliedRef.current = true;
    };

    map.whenReady(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(applyZoom);
      });
    });
  }, [map, levels]);

  return null;
}

function useMapData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    const load = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/mapa");
        if (!response.ok) {
          throw new Error("No se pudo cargar el mapa");
        }
        const payload = await response.json();
        if (active) {
          setData(payload.myths || []);
        }
      } catch (err) {
        if (active) {
          setError(err.message || "Error desconocido");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    load();

    return () => {
      active = false;
    };
  }, []);

  return { data, loading, error };
}

function buildGroups(myths) {
  const grouped = new Map();
  const [minLat, minLng] = COLOMBIA_BOUNDS[0];
  const [maxLat, maxLng] = COLOMBIA_BOUNDS[1];

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
  const parseCoord = (value) => {
    if (value === null || value === undefined) return null;
    const normalized = String(value).trim().replace(/,/g, ".");
    const parsed = Number.parseFloat(normalized);
    return Number.isFinite(parsed) ? parsed : null;
  };

  myths.forEach((myth) => {
    const rawLat = parseCoord(myth.latitude);
    const rawLng = parseCoord(myth.longitude);
    if (rawLat === null || rawLng === null) return;

    const lat = clamp(rawLat, minLat, maxLat);
    const lng = clamp(rawLng, minLng, maxLng);
    const key = `${lat.toFixed(5)}|${lng.toFixed(5)}`;
    if (!grouped.has(key)) {
      grouped.set(key, { key, lat, lng, items: [] });
    }
    grouped.get(key).items.push({ ...myth, latitude: lat, longitude: lng });
  });

  return Array.from(grouped.values());
}

function buildRingPlan(total) {
  const rings = [];
  let remaining = total;
  let ring = 0;

  while (remaining > 0) {
    const capacity = Math.min(remaining, 6 + ring * 4);
    rings.push(capacity);
    remaining -= capacity;
    ring += 1;
  }

  return rings;
}

function computeExpandedPositions(map, group, zoom) {
  const center = L.latLng(group.lat, group.lng);
  const centerPoint = map.project(center, zoom);
  const ringPlan = buildRingPlan(group.items.length);
  const positions = [];

  ringPlan.forEach((ringCount, ringIndex) => {
    const radius = 48 + ringIndex * 34;
    const angleStep = (2 * Math.PI) / ringCount;

    for (let i = 0; i < ringCount; i += 1) {
      const angle = angleStep * i - Math.PI / 2;
      const point = L.point(
        centerPoint.x + Math.cos(angle) * radius,
        centerPoint.y + Math.sin(angle) * radius
      );
      positions.push(map.unproject(point, zoom));
    }
  });

  return positions;
}

function MythMarker({ myth, onSelect, icon }) {
  return (
    <Marker
      position={[myth.displayLat, myth.displayLng]}
      icon={icon}
      riseOnHover={true}
      eventHandlers={{
        add: (event) => {
          const element = event.target.getElement?.();
          if (element) element.setAttribute("aria-label", `Abrir mito ${myth.title}`);
        },
        click: () => onSelect(myth),
      }}
    >
      <Tooltip direction="top" offset={[0, -10]} opacity={0.85}>
        {myth.title}
      </Tooltip>
    </Marker>
  );
}

function GroupMarker({ group, isExpanded, onToggle }) {
  return (
    <Marker
      position={[group.lat, group.lng]}
      icon={getPinIcon({ count: group.items.length, isActive: isExpanded })}
      riseOnHover={true}
      eventHandlers={{
        add: (event) => {
          const element = event.target.getElement?.();
          if (element) {
            element.setAttribute(
              "aria-label",
              `Mostrar ${group.items.length} mitos en este lugar`
            );
          }
        },
        click: () => onToggle(group.key),
      }}
    >
      <Tooltip direction="top" offset={[0, -10]} opacity={0.85}>
        {group.items.length} mitos en este lugar
      </Tooltip>
    </Marker>
  );
}

function ExpandedGroupMarkers({ group, onSelect }) {
  const map = useMap();
  const [zoom, setZoom] = useState(map.getZoom());

  useMapEvents({
    zoomend: () => setZoom(map.getZoom()),
  });

  const positions = useMemo(
    () => computeExpandedPositions(map, group, zoom),
    [group, map, zoom]
  );
  const center = [group.lat, group.lng];

  return (
    <>
      {positions.map((position, index) => {
        const myth = group.items[index];
        if (!myth) return null;
        return (
          <Polyline
            key={`${group.key}-${myth.id}-line`}
            positions={[center, [position.lat, position.lng]]}
            pathOptions={{
              color: "rgba(35, 98, 158, 0.45)",
              weight: 1.2,
              dashArray: "5 7",
            }}
          />
        );
      })}
      {positions.map((position, index) => {
        const myth = group.items[index];
        if (!myth) return null;
        return (
          <Marker
            key={`${group.key}-${myth.id}`}
            position={position}
            icon={getPinIcon({ count: 0, isActive: true })}
            riseOnHover={true}
            eventHandlers={{
              add: (event) => {
                const element = event.target.getElement?.();
                if (element) element.setAttribute("aria-label", `Abrir mito ${myth.title}`);
              },
              click: () => onSelect(myth),
            }}
          >
            <Tooltip direction="top" offset={[0, -10]} opacity={0.85}>
              {myth.title}
            </Tooltip>
          </Marker>
        );
      })}
    </>
  );
}

function MythPreviewCard({ myth, onOpen }) {
  if (!myth) return null;

  return (
    <div className="pointer-events-none absolute bottom-5 left-5 right-5 z-[600] md:right-auto md:max-w-sm">
      <div
        className="pointer-events-auto cursor-pointer overflow-hidden border border-line-200 bg-white shadow-float transition hover:-translate-y-1"
        onClick={() => onOpen(myth)}
        role="button"
        tabIndex={0}
        aria-label={`Abrir mito ${myth.title}`}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onOpen(myth);
          }
        }}
      >
        {myth.image_url ? (
          <div className="relative h-36 w-full">
            <Image
              src={myth.image_url}
              alt={myth.title}
              fill
              sizes="(max-width: 640px) 100vw, 360px"
              className="object-cover"
            />
          </div>
        ) : (
          <div className="h-36 w-full bg-gradient-to-br from-jungle-600 via-river-600 to-ember-500" />
        )}
        <div className="space-y-3 p-4">
          <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.3em] text-ink-500">
            <span>{myth.region}</span>
            {myth.community ? <span>· {myth.community}</span> : null}
          </div>
          <h3 className="font-editorial text-3xl font-semibold leading-none text-ink-900">
            {myth.title}
          </h3>
          <p className="text-xs text-ink-600 leading-relaxed line-clamp-3">
            {myth.excerpt}
          </p>
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-jungle-700">
            Leer este mito <Icon name="arrow-right" size={16} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default function MapaExplorer() {
  const router = useRouter();
  const { data, loading, error } = useMapData();
  const [expandedGroupKey, setExpandedGroupKey] = useState(null);
  const [selectedMyth, setSelectedMyth] = useState(null);
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");
  const [community, setCommunity] = useState("");

  const options = useMemo(() => {
    const regions = new Map();
    const communities = new Map();
    data.forEach((myth) => {
      if (myth.region) regions.set(myth.region_slug || myth.region, myth.region);
      if (myth.community) {
        communities.set(
          myth.community_slug || myth.community,
          myth.community
        );
      }
    });
    return {
      regions: Array.from(regions, ([value, label]) => ({ value, label })).sort(
        (a, b) => a.label.localeCompare(b.label)
      ),
      communities: Array.from(
        communities,
        ([value, label]) => ({ value, label })
      ).sort((a, b) => a.label.localeCompare(b.label)),
    };
  }, [data]);

  const filteredData = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("es");
    return data.filter((myth) => {
      if (region && (myth.region_slug || myth.region) !== region) return false;
      if (
        community &&
        (myth.community_slug || myth.community) !== community
      ) {
        return false;
      }
      if (!normalizedQuery) return true;
      return [myth.title, myth.excerpt, myth.region, myth.community]
        .filter(Boolean)
        .some((value) =>
          String(value).toLocaleLowerCase("es").includes(normalizedQuery)
        );
    });
  }, [community, data, query, region]);

  const groups = useMemo(() => buildGroups(filteredData), [filteredData]);
  const expandedGroup = useMemo(
    () => groups.find((group) => group.key === expandedGroupKey) || null,
    [expandedGroupKey, groups]
  );

  const { groupMarkers, mythMarkers } = useMemo(() => {
    const groupMarkers = [];
    const mythMarkers = [];

    groups.forEach((group) => {
      if (group.items.length === 1) {
        const item = group.items[0];
        mythMarkers.push({
          ...item,
          displayLat: group.lat,
          displayLng: group.lng,
          groupKey: group.key,
        });
        return;
      }

      if (expandedGroupKey !== group.key) {
        groupMarkers.push(group);
      }
    });

    return { groupMarkers, mythMarkers };
  }, [groups, expandedGroupKey]);

  const nearbyMyths = useMemo(() => {
    if (selectedMyth?.region_slug || selectedMyth?.region) {
      const selectedRegion = selectedMyth.region_slug || selectedMyth.region;
      return filteredData
        .filter(
          (myth) =>
            (myth.region_slug || myth.region) === selectedRegion &&
            myth.slug !== selectedMyth.slug
        )
        .slice(0, 3);
    }
    return filteredData.slice(0, 3);
  }, [filteredData, selectedMyth]);

  useEffect(() => {
    if (!expandedGroupKey) return;
    const stillExists = groups.some((group) => group.key === expandedGroupKey);
    if (!stillExists) {
      setExpandedGroupKey(null);
    }
  }, [expandedGroupKey, groups]);

  useEffect(() => {
    if (!selectedMyth) return;
    if (!filteredData.some((myth) => myth.slug === selectedMyth.slug)) {
      setSelectedMyth(null);
    }
  }, [filteredData, selectedMyth]);

  const handleMythClick = (myth) => {
    setSelectedMyth(myth);
    trackEvent({
      action: "select_content",
      category: "map_pin",
      label: myth.title,
      content_type: "myth",
    });
  };

  const handleToggleGroup = (groupKey) => {
    setSelectedMyth(null);
    setExpandedGroupKey((prev) => (prev === groupKey ? null : groupKey));
    trackEvent({
      action: "select_content",
      category: "map_cluster",
      label: groupKey,
      content_type: "cluster",
    });
  };

  const handleOpenMyth = (myth) => {
    trackEvent({
      action: "select_content",
      category: "map_card",
      label: myth.title,
      content_type: "myth",
    });
    router.push(`/mitos/${myth.slug}`);
  };

  return (
    <section className="grid min-h-[calc(100svh-4rem)] border-b border-line-100 bg-white lg:grid-cols-[27rem_1fr]">
      <aside className="relative z-10 border-b border-line-100 p-6 lg:border-b-0 lg:border-r lg:p-9">
        <h1 className="font-editorial text-[3.4rem] font-semibold leading-[0.9] tracking-[-0.035em] text-ink-900">
          El mapa de los mitos de Colombia
        </h1>
        <p className="mt-5 text-sm leading-relaxed text-ink-700">
          Cada relato anclado a su geografía.
        </p>

        <div className="atlas-map-controls mt-7 space-y-4">
          <label className="relative block">
            <span className="sr-only">Buscar mito o lugar</span>
            <Icon
              name="search"
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-500"
            />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar mito o lugar…"
              className="min-h-12 w-full border border-line-200 bg-white pl-11 pr-4 text-sm text-ink-900 placeholder:text-ink-500 focus:border-jungle-600 focus:ring-0"
            />
          </label>
          <div className="grid grid-cols-2 gap-3">
            <label>
              <span className="atlas-kicker block">Región</span>
              <select
                value={region}
                onChange={(event) => setRegion(event.target.value)}
                className="mt-2 min-h-12 w-full border border-line-200 bg-white px-3 text-sm focus:border-jungle-600 focus:ring-0"
              >
                <option value="">Todas</option>
                {options.regions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <span className="atlas-kicker block">Comunidad</span>
              <select
                value={community}
                onChange={(event) => setCommunity(event.target.value)}
                className="mt-2 min-h-12 w-full border border-line-200 bg-white px-3 text-sm focus:border-jungle-600 focus:ring-0"
              >
                <option value="">Todas</option>
                {options.communities.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>

        <div className="mt-8 border-t border-line-100 pt-7">
          <div className="flex items-baseline justify-between">
            <h2 className="font-editorial text-3xl font-semibold">
              Cerca de este lugar
            </h2>
            <span className="text-xs text-ink-500">
              {filteredData.length} {filteredData.length === 1 ? "mito" : "mitos"}
            </span>
          </div>
          <div className="mt-4 divide-y divide-line-100">
            {nearbyMyths.map((myth) => (
              <button
                key={myth.slug}
                type="button"
                onClick={() => handleMythClick(myth)}
                className="group grid w-full grid-cols-[5.8rem_1fr_auto] items-center gap-4 py-4 text-left"
              >
                <span className="relative aspect-[4/3] overflow-hidden bg-mist-50">
                  {myth.image_url ? (
                    <Image
                      src={myth.image_url}
                      alt=""
                      fill
                      sizes="94px"
                      className="atlas-image-zoom object-cover"
                    />
                  ) : null}
                </span>
                <span className="font-editorial text-xl font-semibold leading-none">
                  {myth.title}
                </span>
                <Icon name="chevron-right" size={17} className="mc-arrow" />
              </button>
            ))}
          </div>
          <Link href="/mitos" className="atlas-link mt-6">
            Ver el archivo completo <Icon name="arrow-right" size={16} />
          </Link>
        </div>
      </aside>

      <div className="relative min-h-[70svh] w-full overflow-hidden lg:min-h-[calc(100svh-4rem)]">
          {loading ? (
            <div className="flex h-full min-h-[70svh] items-center justify-center bg-mist-50">
              <div className="text-sm text-ink-600">Cargando mapa...</div>
            </div>
          ) : error ? (
            <div className="flex h-full min-h-[70svh] items-center justify-center bg-mist-50">
              <div className="text-sm text-ember-600">{error}</div>
            </div>
          ) : (
            <div className="absolute inset-0">
              <MapContainer
                bounds={COLOMBIA_BOUNDS}
                boundsOptions={{ padding: [18, 18] }}
                minZoom={5}
                scrollWheelZoom={true}
                maxBounds={COLOMBIA_BOUNDS}
                maxBoundsViscosity={0.8}
                className="h-full w-full"
              >
                <MapEvents
                  onMapClick={() => {
                    setExpandedGroupKey(null);
                    setSelectedMyth(null);
                  }}
                />
                <MapZoomBoost levels={1} />
                <TileLayer attribution={MAP_ATTRIBUTION} url={MAP_TILES} />
                {groupMarkers.map((group) => (
                  <GroupMarker
                    key={group.key}
                    group={group}
                    isExpanded={expandedGroupKey === group.key}
                    onToggle={handleToggleGroup}
                  />
                ))}
                {expandedGroup ? (
                  <ExpandedGroupMarkers
                    group={expandedGroup}
                    onSelect={handleMythClick}
                  />
                ) : null}
                {mythMarkers.map((myth) => (
                  <MythMarker
                    key={`${myth.id}-${myth.displayLat}-${myth.displayLng}`}
                    myth={myth}
                    onSelect={handleMythClick}
                    icon={getPinIcon({ count: 0, isActive: false })}
                  />
                ))}
              </MapContainer>
              <MythPreviewCard myth={selectedMyth} onOpen={handleOpenMyth} />
            </div>
          )}
      </div>
    </section>
  );
}
