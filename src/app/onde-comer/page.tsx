import type { Metadata } from "next";

import { RestaurantsExplorer } from "@/components/pages/restaurants-explorer";
import { SectionHeading } from "@/components/shared/section-heading";

export const metadata: Metadata = {
  title: "Onde Comer em Guapimirim",
  description:
    "Descubra restaurantes, cafés e cozinhas locais em Guapimirim com filtros de tipo de comida e faixa de preço.",
};

export default function FoodPage() {
  return (
    <section className="container-guapi space-y-8 py-14">
      <SectionHeading
        eyebrow="Onde Comer"
        title="Comida de serra, com gostinho de casa"
        description="A gastronomia local traz sabores brasileiros fortes, como feijoada e moqueca de peixe. Durante a FLIG, o concurso 'Guapi que da gosto!' valoriza os pratos da regiao."
      />
      <RestaurantsExplorer />
    </section>
  );
}
