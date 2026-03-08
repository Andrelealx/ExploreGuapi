import type { Metadata } from "next";
import Link from "next/link";

import { StaysGrid } from "@/components/pages/stays-grid";
import { SectionHeading } from "@/components/shared/section-heading";

export const metadata: Metadata = {
  title: "Onde Ficar em Guapimirim",
  description:
    "Pousadas acolhedoras, opções econômicas e hospedagens com vista para a serra em Guapimirim e entorno.",
};

export default function StayPage() {
  return (
    <section className="container-guapi space-y-8 py-14">
      <SectionHeading
        eyebrow="Onde Ficar"
        title="Durma com o som da cachoeira do lado de fora"
        description="As pousadas em Guapimirim sao, em sua maioria, economicas e acolhedoras. Teresopolis tambem e uma alternativa de hospedagem para explorar a regiao."
      />

      <StaysGrid />

      <div className="section-shell flex flex-wrap items-center justify-between gap-3 p-5">
        <p className="text-sm text-guapi-mist/85">
          Proprietario de pousada? Cadastre-se e apareca para turistas que ja estao planejando a viagem.
        </p>
        <Link
          href="/anuncie"
          className="focus-ring rounded-full bg-guapi-leaf px-5 py-3 text-sm font-semibold text-guapi-mist transition hover:bg-guapi-forest"
        >
          Cadastrar pousada
        </Link>
      </div>
    </section>
  );
}
