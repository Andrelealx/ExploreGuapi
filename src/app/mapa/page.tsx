import type { Metadata } from "next";

import { MapLoader } from "@/components/map/map-loader";
import { SectionHeading } from "@/components/shared/section-heading";

export const metadata: Metadata = {
  title: "Mapa Interativo",
  description:
    "Mapa interativo de Guapimirim com pins de trilhas, cachoeiras, restaurantes, pousadas, mirantes e pontos históricos.",
};

export default function MapPage() {
  return (
    <section className="container-guapi space-y-8 py-14">
      <SectionHeading
        eyebrow="Mapa Interativo"
        title="Explore Guapimirim por categoria"
        description="Pins coloridos ajudam a visualizar trilhas, cachoeiras, restaurantes, pousadas, mirantes e pontos historicos. Clique em qualquer pin para abrir detalhes."
      />
      <p className="font-mono text-sm text-guapi-mist/85">
        Coordenadas reais em destaque: Mirante do Soberbo (-22.471688, -42.989940) e Poço Verde (-22.505310, -42.984350).
      </p>
      <MapLoader />
    </section>
  );
}
