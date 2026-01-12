"use client";

import { useMemo } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";

const MAP_TILES = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
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

function createPinIcon() {
  return L.divIcon({
    className: "map-pin-shell",
    html: `<div class="map-pin is-active">${PIN_SVG}</div>`,
    iconSize: [PIN_WIDTH, PIN_HEIGHT],
    iconAnchor: [Math.round(PIN_WIDTH / 2), PIN_HEIGHT - 2],
    popupAnchor: [0, -42],
  });
}

export default function MythLocationMapInner({
  title,
  latitude,
  longitude,
  isApproximate,
}) {
  const icon = useMemo(() => createPinIcon(), []);
  const position = [latitude, longitude];
  const zoom = isApproximate ? 5 : 8;

  return (
    <MapContainer
      center={position}
      zoom={zoom}
      scrollWheelZoom={false}
      zoomControl={true}
      className="h-full w-full"
    >
      <TileLayer url={MAP_TILES} attribution={MAP_ATTRIBUTION} />
      <Marker position={position} icon={icon}>
        <Popup>
          <div className="p-2">
            <p className="text-sm font-semibold text-ink-900">{title}</p>
            <p className="mt-1 text-xs text-ink-600">
              {isApproximate
                ? "Ubicacion aproximada dentro del territorio colombiano."
                : "Ubicacion registrada para este mito."}
            </p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
