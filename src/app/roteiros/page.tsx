import type { Metadata } from "next";
import { Wallet } from "lucide-react";

import { SharePdfActions } from "@/components/shared/share-pdf-actions";
import { SectionHeading } from "@/components/shared/section-heading";
import { itineraries } from "@/lib/data";

export const metadata: Metadata = {
  title: "Roteiros Prontos",
  description:
    "Roteiros de 1 a 3 dias para curtir Guapimirim: bate-volta, aventura, família, cultura e vida selvagem.",
};

export default function ItinerariesPage() {
  return (
    <section className="container-guapi space-y-8 py-14">
      <SectionHeading
        eyebrow="Roteiros Prontos"
        title="Planos de viagem para cada perfil de visitante"
        description="O custo medio para visitar Guapimirim e de aproximadamente R$500 por pessoa, variando conforme hospedagem e passeios guiados."
      />

      <div className="inline-flex items-center gap-2 rounded-full border border-guapi-spring/40 bg-guapi-spring/15 px-4 py-2 text-sm text-guapi-spring">
        <Wallet size={16} />
        Orcamento medio citado no site: R$500 por pessoa
      </div>

      <div className="grid gap-5">
        {itineraries.map((item) => (
          <article key={item.id} className="card-base">
            <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
              <div className="space-y-2">
                <p className="chip">{item.duration}</p>
                <h3 className="font-heading text-3xl text-guapi-earth">{item.title}</h3>
                <p className="text-sm text-guapi-mist/80">
                  Perfil: {item.profile} • {item.budget}
                </p>
              </div>
              <SharePdfActions
                title={item.title}
                description={item.description}
                stops={item.stops}
              />
            </div>

            <p className="text-sm text-guapi-mist/85">{item.description}</p>

            <ul className="mt-4 grid gap-2 text-sm text-guapi-mist/85">
              {item.stops.map((stop) => (
                <li
                  key={`${item.id}-${stop}`}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2"
                >
                  {stop}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
