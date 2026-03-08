"use client";

import { useEffect, useState } from "react";
import { Globe2, MessageCircle, Star } from "lucide-react";

import { CardSkeleton } from "@/components/shared/card-skeleton";
import { ImageWithFallback } from "@/components/shared/image-with-fallback";
import { guides } from "@/lib/data";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`Avaliacao ${rating}`}>
      {Array.from({ length: 5 }).map((_, index) => {
        const active = index < Math.round(rating);
        return (
          <Star
            key={`star-${index}`}
            size={14}
            className={active ? "fill-yellow-400 text-yellow-400" : "text-zinc-500"}
          />
        );
      })}
    </div>
  );
}

export function GuidesList() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 550);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <CardSkeleton count={4} className="xl:grid-cols-2" />;
  }

  return (
    <div className="grid gap-5 xl:grid-cols-2">
      {guides.map((guide) => (
        <article key={guide.id} className="card-base">
          <div className="flex gap-4">
            <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl">
              <ImageWithFallback
                src={guide.image}
                alt={`Foto do guia ${guide.name}`}
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-heading text-2xl text-guapi-earth">{guide.name}</h3>
                {guide.iconhaSpecialist ? (
                  <span className="chip border-none bg-guapi-spring/20 text-guapi-spring">
                    Especialista em Iconha
                  </span>
                ) : null}
              </div>
              <p className="text-sm text-guapi-mist/85">{guide.specialty}</p>
              <Stars rating={guide.rating} />
            </div>
          </div>

          <div className="mt-4 grid gap-2 text-sm text-guapi-mist/85">
            <p className="flex items-center gap-2">
              <Globe2 size={15} className="text-guapi-spring" />
              Idiomas: {guide.languages.join(", ")}
            </p>
            <p className="flex items-center gap-2">
              <MessageCircle size={15} className="text-guapi-spring" />
              {guide.whatsapp}
            </p>
          </div>

          <p className="mt-4 inline-flex rounded-full border border-guapi-spring/40 px-3 py-1 text-xs font-semibold text-guapi-spring">
            Preco medio: {guide.averagePrice}
          </p>
        </article>
      ))}
    </div>
  );
}
