"use client";

import { useEffect, useMemo, useState } from "react";
import { Clock3, MapPin, MessageCircle } from "lucide-react";

import { CardSkeleton } from "@/components/shared/card-skeleton";
import { ImageWithFallback } from "@/components/shared/image-with-fallback";
import { restaurants } from "@/lib/data";

const cuisineFilters = [
  "Todos",
  "Comida regional",
  "Pizza",
  "Lanche",
  "Vegano",
  "Café",
] as const;

type CuisineFilter = (typeof cuisineFilters)[number];

export function RestaurantsExplorer() {
  const [activeFilter, setActiveFilter] = useState<CuisineFilter>("Todos");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  const visibleRestaurants = useMemo(() => {
    if (activeFilter === "Todos") {
      return restaurants;
    }
    return restaurants.filter((item) => item.cuisine === activeFilter);
  }, [activeFilter]);

  if (loading) {
    return <CardSkeleton count={6} />;
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-2">
        {cuisineFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`focus-ring rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
              activeFilter === filter
                ? "border-guapi-spring bg-guapi-spring/20 text-guapi-spring"
                : "border-white/20 text-guapi-mist hover:bg-white/10"
            }`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {visibleRestaurants.map((item) => {
          const isPartner = item.partnerPlan === "Destaque" || item.partnerPlan === "Premium";
          const isPremium = item.partnerPlan === "Premium";

          return (
            <article
              key={item.id}
              className={`card-base overflow-hidden p-0 ${isPartner ? "ring-1 ring-guapi-spring/60" : ""} ${
                isPremium ? "sm:col-span-2 xl:col-span-2" : ""
              }`}
            >
              <div className={`relative ${isPremium ? "h-60" : "h-48"}`}>
                <ImageWithFallback
                  src={item.image}
                  alt={`Foto do restaurante ${item.name}`}
                  fill
                  sizes="(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 100vw"
                  className="object-cover"
                />
                <div className="overlay-green absolute inset-0" />
                <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                  <span className="chip border-none bg-guapi-night/70 text-guapi-earth">
                    {item.cuisine}
                  </span>
                  <span className="chip border-none bg-guapi-night/70 text-guapi-spring">
                    {item.priceRange}
                  </span>
                  {isPartner ? (
                    <span className="chip border-none bg-guapi-spring/20 text-guapi-spring">
                      Parceiro ExploreGuapi
                    </span>
                  ) : null}
                </div>
              </div>
              <div className="space-y-3 p-5">
                <h3 className="font-heading text-2xl text-guapi-earth">{item.name}</h3>
                <p className="flex items-start gap-2 text-sm text-guapi-mist/85">
                  <MapPin size={16} className="mt-0.5 text-guapi-spring" />
                  {item.address}
                </p>
                <p className="flex items-center gap-2 text-sm text-guapi-mist/85">
                  <Clock3 size={16} className="text-guapi-spring" />
                  {item.openHours}
                </p>
                <p className="flex items-center gap-2 text-sm text-guapi-mist/85">
                  <MessageCircle size={16} className="text-guapi-spring" />
                  {item.whatsapp}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
