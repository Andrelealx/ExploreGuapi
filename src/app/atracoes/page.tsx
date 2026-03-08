import type { Metadata } from "next";

import { AttractionsExplorer } from "@/components/pages/attractions-explorer";
import { SectionHeading } from "@/components/shared/section-heading";

export const metadata: Metadata = {
  title: "Atrações em Guapimirim",
  description:
    "Descubra trilhas, cachoeiras, mirantes, pontos históricos e aventuras em Guapimirim, RJ.",
};

export default function AttractionsPage() {
  return (
    <section className="container-guapi space-y-8 py-14">
      <SectionHeading
        eyebrow="Atrações"
        title="Trilhas, cachoeiras e historias que so Guapi tem"
        description="Filtre por categoria e monte sua experiencia ideal com informacoes de nivel, duracao e distancia do centro."
      />
      <p className="text-sm text-guapi-mist/85">
        Tagline da trilha: <strong>130km de aventura no coracao da Mata Atlantica</strong>.
      </p>
      <p className="text-sm text-guapi-mist/85">
        Tagline da historia: <strong>Uma cidade nova com raizes do seculo XVII</strong>.
      </p>
      <AttractionsExplorer />
    </section>
  );
}
