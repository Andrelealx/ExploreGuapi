"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L, { DivIcon } from "leaflet";

import {
  mapCategoryColors,
  mapCategoryLabels,
  mapPoints,
  type MapCategory,
} from "@/lib/data";
import { ImageWithFallback } from "@/components/shared/image-with-fallback";

const categories = Object.keys(mapCategoryLabels) as MapCategory[];

function createPin(color: string): DivIcon {
  return L.divIcon({
    className: "",
    html: `<div class="custom-pin" style="background:${color}"></div>`,
    iconSize: [18, 18],
    iconAnchor: [9, 9],
    popupAnchor: [0, -10],
  });
}

export function InteractiveMap() {
  const [activeCategory, setActiveCategory] = useState<MapCategory | "all">("all");

  const pins = useMemo(() => {
    if (activeCategory === "all") {
      return mapPoints;
    }

    return mapPoints.filter((point) => point.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="grid gap-4">
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          className={`focus-ring rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
            activeCategory === "all"
              ? "border-guapi-spring bg-guapi-spring/20 text-guapi-spring"
              : "border-white/15 text-guapi-mist hover:bg-white/10"
          }`}
          onClick={() => setActiveCategory("all")}
        >
          Todos
        </button>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`focus-ring rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
              activeCategory === category
                ? "border-guapi-spring bg-guapi-spring/20 text-guapi-spring"
                : "border-white/15 text-guapi-mist hover:bg-white/10"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {mapCategoryLabels[category]}
          </button>
        ))}
      </div>

      <div className="h-[520px] overflow-hidden rounded-organic border border-white/15">
        <MapContainer
          center={[-22.52, -42.98]}
          zoom={12}
          scrollWheelZoom
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {pins.map((point) => (
            <Marker
              key={point.id}
              position={point.position}
              icon={createPin(mapCategoryColors[point.category])}
            >
              <Popup>
                <div className="w-52 space-y-2">
                  <div className="relative h-24 w-full overflow-hidden rounded-md">
                    <ImageWithFallback
                      src={point.image}
                      alt={`Foto de ${point.name}`}
                      fill
                      sizes="208px"
                      className="object-cover"
                    />
                  </div>
                  <p className="font-semibold text-[#1b1b1b]">{point.name}</p>
                  <p className="text-xs text-zinc-600">{mapCategoryLabels[point.category]}</p>
                  <Link
                    href={point.href}
                    className="inline-flex text-xs font-semibold text-green-700 underline"
                  >
                    Ver detalhes
                  </Link>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div className="section-shell p-4">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-guapi-spring/90">
          Legenda dos pins
        </p>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center gap-2 text-xs text-guapi-mist/90">
              <span
                aria-hidden="true"
                className="h-3 w-3 rounded-full border border-white/60"
                style={{ backgroundColor: mapCategoryColors[category] }}
              />
              {mapCategoryLabels[category]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
