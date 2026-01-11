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
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
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

const DEFAULT_ICON = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DEFAULT_ICON;

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

function buildMarkers(myths) {
  const grouped = new Map();

  myths.forEach((myth) => {
    const lat = Number(myth.latitude);
    const lng = Number(myth.longitude);
    if (!Number.isFinite(lat) || !Number.isFinite(lng)) return;
    const key = `${lat.toFixed(5)}|${lng.toFixed(5)}`;
    if (!grouped.has(key)) {
      grouped.set(key, []);
    }
    grouped.get(key).push({ ...myth, latitude: lat, longitude: lng });
  });

  const markers = [];

  grouped.forEach((items) => {
    const count = items.length;
    const baseRadius = Math.min(0.0012, 0.0005 + count * 0.00012);

    items.forEach((item, index) => {
      let offsetLat = 0;
      let offsetLng = 0;
      if (count > 1) {
        const angle = (2 * Math.PI * index) / count;
        offsetLat = Math.cos(angle) * baseRadius;
        offsetLng = Math.sin(angle) * baseRadius;
      }

      markers.push({
        ...item,
        displayLat: item.latitude + offsetLat,
        displayLng: item.longitude + offsetLng,
        groupSize: count,
      });
    });
  });

  return { markers, uniqueLocations: grouped.size };
}

function MythMarker({ myth, activeId, onActivate }) {
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
      eventHandlers={{
        click: () => onActivate(myth, "click"),
        mouseover: () => onActivate(myth, "hover"),
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
            {myth.groupSize > 1 ? (
              <Badge className="border-ember-500/30 bg-ember-500/10 text-ember-600">
                Ubicacion compartida ({myth.groupSize})
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

export default function MapaExplorer() {
  const router = useRouter();
  const { data, loading, error } = useMapData();
  const [activeId, setActiveId] = useState(null);

  const { markers, uniqueLocations } = useMemo(
    () => buildMarkers(data),
    [data]
  );

  const stats = useMemo(() => {
    const withImages = data.filter((item) => item.image_url).length;
    const regions = new Set(data.map((item) => item.region_slug || item.region));
    return {
      total: data.length,
      withImages,
      regions: regions.size,
    };
  }, [data]);

  const handleActivate = (myth, action) => {
    if (action === "click" && activeId === myth.id) {
      router.push(`/mitos/${myth.slug}`);
      return;
    }
    setActiveId(myth.id);
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
              Los puntos apilados se separan levemente para que puedas distinguir
              relatos en el mismo lugar. Haz hover o clic para abrir el avance.
              Si haces clic de nuevo, iras al mito completo.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge className="border-river-500/30 bg-river-500/10 text-river-600">
                Hover o click
              </Badge>
              <Badge className="border-ember-500/30 bg-ember-500/10 text-ember-600">
                Click otra vez = abrir
              </Badge>
            </div>
          </GlassCard>
        </div>

        <GlassCard className="relative overflow-hidden p-0 min-h-[420px] md:min-h-[520px]">
          {loading ? (
            <div className="flex h-full items-center justify-center bg-white/60">
              <div className="text-sm text-ink-600">Cargando mapa...</div>
            </div>
          ) : error ? (
            <div className="flex h-full items-center justify-center bg-white/60">
              <div className="text-sm text-ember-600">{error}</div>
            </div>
          ) : (
            <MapContainer
              center={COLOMBIA_CENTER}
              zoom={5}
              minZoom={4}
              scrollWheelZoom={true}
              maxBounds={COLOMBIA_BOUNDS}
              className="h-[420px] md:h-[520px] w-full"
            >
              <MapEvents onMapClick={() => setActiveId(null)} />
              <TileLayer attribution={MAP_ATTRIBUTION} url={MAP_TILES} />
              {markers.map((myth) => (
                <MythMarker
                  key={`${myth.id}-${myth.displayLat}-${myth.displayLng}`}
                  myth={myth}
                  activeId={activeId}
                  onActivate={handleActivate}
                />
              ))}
            </MapContainer>
          )}
        </GlassCard>
      </div>
    </section>
  );
}
