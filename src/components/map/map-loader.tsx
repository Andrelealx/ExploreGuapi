"use client";

import dynamic from "next/dynamic";

const DynamicMap = dynamic(
  () => import("./interactive-map").then((mod) => mod.InteractiveMap),
  {
    ssr: false,
    loading: () => (
      <div className="h-[520px] animate-pulse rounded-organic border border-white/15 bg-white/10" />
    ),
  },
);

export function MapLoader() {
  return <DynamicMap />;
}
