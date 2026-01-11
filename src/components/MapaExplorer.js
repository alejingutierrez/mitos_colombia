"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Tooltip,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import { GlassCard } from "./ui/GlassCard";
import { Badge } from "./ui/Badge";
import { ButtonLink } from "./ui/Button";
import { SectionHeader } from "./ui/SectionHeader";

const COLOMBIA_CENTER = [4.570868, -74.297333];
const COLOMBIA_BOUNDS = [
  [-4.8, -79.4],
  [13.8, -66.4],
];

const MAP_TILES =
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

const MAP_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';

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
    iconSize: [40, 52],
    iconAnchor: [20, 50],
    popupAnchor: [0, -42],
  });

  iconCache.set(key, icon);
  return icon;
}

function formatExcerpt(value) {
  if (!value) return "";
  if (value.length <= 140) return value;
  return `${value.slice(0, 140).trim()}...`;
}

function MapEvents({ onMapClick }) {
  useMapEvents({
    click: () => {
      onMapClick();
    },
  });
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

  myths.forEach((myth) => {
    const lat = Number(myth.latitude);
    const lng = Number(myth.longitude);
    if (!Number.isFinite(lat) || !Number.isFinite(lng)) return;
    const key = `${lat.toFixed(5)}|${lng.toFixed(5)}`;
    if (!grouped.has(key)) {
      grouped.set(key, { key, lat, lng, items: [] });
    }
    grouped.get(key).items.push({ ...myth, latitude: lat, longitude: lng });
  });

  return Array.from(grouped.values());
}

function spreadGroupItems(group) {
  const count = group.items.length;
  const baseRadius = Math.min(0.004, 0.0014 + count * 0.00015);

  return group.items.map((item, index) => {
    let offsetLat = 0;
    let offsetLng = 0;
    if (count > 1) {
      const angle = (2 * Math.PI * index) / count;
      offsetLat = Math.cos(angle) * baseRadius;
      offsetLng = Math.sin(angle) * baseRadius;
    }

    return {
      ...item,
      displayLat: group.lat + offsetLat,
      displayLng: group.lng + offsetLng,
      groupKey: group.key,
    };
  });
}

function MythMarker({ myth, activeId, onActivate, icon }) {
  const markerRef = useRef(null);

  useEffect(() => {
    if (!markerRef.current) return;
    if (activeId === myth.id) {
      markerRef.current.openPopup();
    } else {
      markerRef.current.closePopup();
    }
  }, [activeId, myth.id]);

  return (
    <Marker
      ref={markerRef}
      position={[myth.displayLat, myth.displayLng]}
      icon={icon}
      riseOnHover={true}
      eventHandlers={{
        click: () => onActivate(myth),
      }}
    >
      <Tooltip direction="top" offset={[0, -10]} opacity={0.85}>
        {myth.title}
      </Tooltip>
      <Popup maxWidth={260} closeButton={false} autoPan={true}>
        <div className="overflow-hidden rounded-2xl">
          {myth.image_url ? (
            <img
              src={myth.image_url}
              alt={myth.title}
              className="h-32 w-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="h-32 w-full bg-gradient-to-br from-jungle-600 via-river-600 to-ember-500" />
          )}
          <div className="p-4 space-y-3">
            <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.3em] text-ink-500">
              <span>{myth.region}</span>
              {myth.community ? <span>· {myth.community}</span> : null}
            </div>
            <h3 className="font-display text-lg text-ink-900">{myth.title}</h3>
            <p className="text-xs text-ink-600 leading-relaxed">
              {formatExcerpt(myth.excerpt)}
            </p>
            {myth.groupCount > 1 ? (
              <Badge className="border-ember-500/30 bg-ember-500/10 text-ember-600">
                Ubicacion compartida ({myth.groupCount})
              </Badge>
            ) : null}
            <ButtonLink href={`/mitos/${myth.slug}`} size="sm" className="w-full">
              Leer mito
            </ButtonLink>
          </div>
        </div>
      </Popup>
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
        click: () => onToggle(group.key),
      }}
    >
      <Tooltip direction="top" offset={[0, -10]} opacity={0.85}>
        {group.items.length} mitos en este lugar
      </Tooltip>
    </Marker>
  );
}

export default function MapaExplorer() {
  const router = useRouter();
  const { data, loading, error } = useMapData();
  const [activeId, setActiveId] = useState(null);
  const [expandedGroupKey, setExpandedGroupKey] = useState(null);

  const groups = useMemo(() => buildGroups(data), [data]);

  const { groupMarkers, mythMarkers, uniqueLocations } = useMemo(() => {
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
          groupCount: 1,
        });
        return;
      }

      if (expandedGroupKey === group.key) {
        mythMarkers.push(
          ...spreadGroupItems(group).map((item) => ({
            ...item,
            groupCount: group.items.length,
          }))
        );
      } else {
        groupMarkers.push(group);
      }
    });

    return { groupMarkers, mythMarkers, uniqueLocations: groups.length };
  }, [groups, expandedGroupKey]);

  const stats = useMemo(() => {
    const withImages = data.filter((item) => item.image_url).length;
    const regions = new Set(data.map((item) => item.region_slug || item.region));
    return {
      total: data.length,
      withImages,
      regions: regions.size,
    };
  }, [data]);

  useEffect(() => {
    if (!expandedGroupKey) return;
    const stillExists = groups.some((group) => group.key === expandedGroupKey);
    if (!stillExists) {
      setExpandedGroupKey(null);
    }
  }, [expandedGroupKey, groups]);

  const handleMythClick = (myth) => {
    if (activeId === myth.id) {
      router.push(`/mitos/${myth.slug}`);
      return;
    }
    setActiveId(myth.id);
  };

  const handleToggleGroup = (groupKey) => {
    setActiveId(null);
    setExpandedGroupKey((prev) => (prev === groupKey ? null : groupKey));
  };

  return (
    <section className="container-shell mt-12">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.6fr]">
        <div className="space-y-6">
          <SectionHeader
            eyebrow="Mapa vivo"
            title="Explora mitos ubicados en el territorio colombiano."
            description="Encuentra relatos por geografia. Al pasar el cursor veras un avance, y al hacer clic nuevamente iras al mito completo."
          />

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            <GlassCard className="p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-jungle-600">
                Mitos ubicados
              </p>
              <p className="mt-3 font-display text-3xl text-ink-900">
                {loading ? "..." : stats.total}
              </p>
            </GlassCard>
            <GlassCard className="p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-river-600">
                Ubicaciones unicas
              </p>
              <p className="mt-3 font-display text-3xl text-ink-900">
                {loading ? "..." : uniqueLocations}
              </p>
            </GlassCard>
            <GlassCard className="p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-ember-500">
                Regiones
              </p>
              <p className="mt-3 font-display text-3xl text-ink-900">
                {loading ? "..." : stats.regions}
              </p>
            </GlassCard>
          </div>

          <GlassCard className="p-6 space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-ink-500">
              Como leer el mapa
            </p>
            <p className="text-sm text-ink-600 leading-relaxed">
              Los puntos con contador se expanden al hacer clic para que puedas
              elegir el mito exacto. Pasa el cursor para ver el titulo y vuelve
              a hacer clic para abrir el relato completo.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge className="border-river-500/30 bg-river-500/10 text-river-600">
                Click = expandir
              </Badge>
              <Badge className="border-ember-500/30 bg-ember-500/10 text-ember-600">
                Click otra vez = abrir
              </Badge>
            </div>
          </GlassCard>
        </div>

        <GlassCard className="relative overflow-hidden p-0 min-h-[420px] md:min-h-[520px] lg:min-h-[620px] lg:h-full">
          {loading ? (
            <div className="flex h-full items-center justify-center bg-white/60">
              <div className="text-sm text-ink-600">Cargando mapa...</div>
            </div>
          ) : error ? (
            <div className="flex h-full items-center justify-center bg-white/60">
              <div className="text-sm text-ember-600">{error}</div>
            </div>
          ) : (
            <div className="absolute inset-0">
              <MapContainer
                center={COLOMBIA_CENTER}
                zoom={5}
                minZoom={4}
                scrollWheelZoom={true}
                maxBounds={COLOMBIA_BOUNDS}
                className="h-full w-full"
              >
                <MapEvents
                  onMapClick={() => {
                    setActiveId(null);
                    setExpandedGroupKey(null);
                  }}
                />
                <TileLayer attribution={MAP_ATTRIBUTION} url={MAP_TILES} />
                {groupMarkers.map((group) => (
                  <GroupMarker
                    key={group.key}
                    group={group}
                    isExpanded={expandedGroupKey === group.key}
                    onToggle={handleToggleGroup}
                  />
                ))}
                {mythMarkers.map((myth) => (
                  <MythMarker
                    key={`${myth.id}-${myth.displayLat}-${myth.displayLng}`}
                    myth={myth}
                    activeId={activeId}
                    onActivate={handleMythClick}
                    icon={getPinIcon({ count: 0, isActive: activeId === myth.id })}
                  />
                ))}
              </MapContainer>
            </div>
          )}
        </GlassCard>
      </div>
    </section>
  );
}
