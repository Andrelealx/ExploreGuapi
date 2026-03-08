"use client";

import { useEffect, useMemo, useState } from "react";
import { Mountain, Route, Timer } from "lucide-react";

import { ImageWithFallback } from "@/components/shared/image-with-fallback";
import { CardSkeleton } from "@/components/shared/card-skeleton";
import { attractions, type AttractionCategory } from "@/lib/data";

const categories: AttractionCategory[] = [
  "Trilhas",
  "Cachoeiras",
  "Mirantes",
  "Aventura",
  "Família",
  "Histórico",
  "Vida Selvagem",
];

export function AttractionsExplorer() {
  const [activeCategory, setActiveCategory] = useState<AttractionCategory | "Todas">(
    "Todas",
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 650);
    return () => clearTimeout(timer);
  }, []);

  const visibleAttractions = useMemo(() => {
    if (activeCategory === "Todas") {
      return attractions;
    }

    return attractions.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  if (loading) {
    return <CardSkeleton count={9} />;
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          className={`focus-ring rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
            activeCategory === "Todas"
              ? "border-guapi-spring bg-guapi-spring/20 text-guapi-spring"
              : "border-white/20 text-guapi-mist hover:bg-white/10"
          }`}
          onClick={() => setActiveCategory("Todas")}
        >
          Todas
        </button>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`focus-ring rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
              activeCategory === category
                ? "border-guapi-spring bg-guapi-spring/20 text-guapi-spring"
                : "border-white/20 text-guapi-mist hover:bg-white/10"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {visibleAttractions.map((item) => (
          <article key={item.id} className="card-base overflow-hidden p-0">
            <div className="relative h-52">
              <ImageWithFallback
                src={item.image}
                alt={`Foto da atracao ${item.name}`}
                fill
                sizes="(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 100vw"
                className="object-cover"
              />
              <div className="overlay-green absolute inset-0" />
              <div className="absolute bottom-3 left-3 flex gap-2">
                <span className="chip border-none bg-guapi-night/70 text-guapi-spring">
                  {item.category}
                </span>
                <span className="chip border-none bg-guapi-night/70 text-guapi-earth">
                  {item.difficulty}
                </span>
              </div>
            </div>
            <div className="space-y-3 p-5">
              <h3 className="font-heading text-2xl text-guapi-earth">{item.name}</h3>
              <p className="text-sm text-guapi-mist/85">{item.shortDescription}</p>
              <div className="grid gap-2 text-xs text-guapi-mist/80">
                <p className="flex items-center gap-2 font-mono">
                  <Timer size={14} className="text-guapi-spring" />
                  Duracao: {item.duration}
                </p>
                <p className="flex items-center gap-2 font-mono">
                  <Route size={14} className="text-guapi-spring" />
                  Distancia do centro: {item.distanceFromCenter}
                </p>
                <p className="flex items-center gap-2 font-mono">
                  <Mountain size={14} className="text-guapi-spring" />
                  Nivel: {item.difficulty}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
