"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Route, Timer } from "lucide-react";

import { attractions } from "@/lib/data";
import { ImageWithFallback } from "@/components/shared/image-with-fallback";

const featuredItems = attractions.filter((item) => item.featured);

export function FeaturedAttractionsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featuredItems.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const slides = useMemo(() => {
    const total = featuredItems.length;
    return [0, 1, 2].map((offset) => featuredItems[(activeIndex + offset) % total]);
  }, [activeIndex]);

  return (
    <div className="grid gap-5 md:grid-cols-3">
      <AnimatePresence mode="popLayout">
        {slides.map((item) => (
          <motion.article
            layout
            key={`${item.id}-${activeIndex}`}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="card-base overflow-hidden p-0"
          >
            <div className="relative h-48">
              <ImageWithFallback
                src={item.image}
                alt={`Foto de ${item.name}`}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
              <div className="overlay-green absolute inset-0" />
              <span className="chip absolute left-3 top-3 border-none bg-guapi-night/70">
                {item.difficulty}
              </span>
            </div>
            <div className="space-y-3 p-5">
              <h3 className="font-heading text-2xl text-guapi-earth">{item.name}</h3>
              <p className="text-sm text-guapi-mist/85">{item.shortDescription}</p>
              <p className="flex items-center gap-2 text-xs text-guapi-mist/75">
                <Timer size={14} className="text-guapi-spring" />
                {item.duration}
              </p>
              <p className="flex items-center gap-2 text-xs text-guapi-mist/75">
                <Route size={14} className="text-guapi-spring" />
                {item.distanceFromCenter} do centro
              </p>
            </div>
          </motion.article>
        ))}
      </AnimatePresence>
    </div>
  );
}
