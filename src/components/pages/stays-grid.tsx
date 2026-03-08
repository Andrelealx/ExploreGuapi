"use client";

import { useEffect, useState } from "react";
import { BedDouble, MessageCircle, Star } from "lucide-react";

import { CardSkeleton } from "@/components/shared/card-skeleton";
import { ImageWithFallback } from "@/components/shared/image-with-fallback";
import { stays } from "@/lib/data";

export function StaysGrid() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <CardSkeleton count={4} className="xl:grid-cols-2" />;
  }

  return (
    <div className="grid gap-5 xl:grid-cols-2">
      {stays.map((item) => {
        const isPremium = item.partnerPlan === "Premium";

        return (
          <article
            key={item.id}
            className={`card-base overflow-hidden p-0 ${isPremium ? "xl:col-span-2" : ""}`}
          >
            <div className={`grid ${isPremium ? "md:grid-cols-2" : ""}`}>
              <div className={`relative ${isPremium ? "h-72" : "h-56"}`}>
                <ImageWithFallback
                  src={item.image}
                  alt={`Foto da pousada ${item.name}`}
                  fill
                  sizes="(min-width: 1280px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="overlay-green absolute inset-0" />
                <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                  {item.partnerPlan ? (
                    <span className="chip border-none bg-guapi-spring/20 text-guapi-spring">
                      Parceiro ExploreGuapi
                    </span>
                  ) : null}
                  {item.badges.map((badge) => (
                    <span
                      key={`${item.id}-${badge}`}
                      className="chip border-none bg-guapi-night/70 text-guapi-earth"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-4 p-5">
                <h3 className="font-heading text-2xl text-guapi-earth">{item.name}</h3>
                <div className="grid gap-2 text-sm text-guapi-mist/85">
                  <p className="flex items-center gap-2">
                    <BedDouble size={16} className="text-guapi-spring" />
                    {item.rooms} quartos
                  </p>
                  <p className="flex items-center gap-2">
                    <Star size={16} className="text-guapi-spring" />
                    {item.rating.toFixed(1)} de avaliacao
                  </p>
                  <p className="flex items-center gap-2">
                    <MessageCircle size={16} className="text-guapi-spring" />
                    {item.contact}
                  </p>
                </div>
                <p className="inline-flex rounded-full border border-guapi-spring/40 px-3 py-1 text-xs font-semibold text-guapi-spring">
                  Media: {item.averageNight} por noite
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
