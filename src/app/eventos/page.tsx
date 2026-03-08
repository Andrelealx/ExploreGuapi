import type { Metadata } from "next";
import Link from "next/link";

import { SectionHeading } from "@/components/shared/section-heading";
import { events, socialProfile } from "@/lib/data";

export const metadata: Metadata = {
  title: "Eventos em Guapimirim",
  description:
    "Calendario anual de eventos culturais, gastronômicos e de natureza em Guapimirim, RJ.",
};

export default function EventsPage() {
  return (
    <section className="container-guapi space-y-8 py-14">
      <SectionHeading
        eyebrow="Eventos"
        title="A cidade que celebra a natureza o ano inteiro"
        description="Do Festival de Inverno ao Natal de Guapi, o calendario local combina cultura, gastronomia e ecoturismo."
      />

      <p className="rounded-2xl border border-amber-300/30 bg-amber-300/10 px-4 py-3 text-sm text-amber-100">
        Aviso: as datas podem variar a cada ano. Acompanhe atualizacoes no perfil oficial do
        ExploreGuapi nas redes sociais.
      </p>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {events.map((event) => (
          <article key={event.id} className="card-base">
            <p className="chip">{event.month}</p>
            <h3 className="mt-3 font-heading text-2xl text-guapi-earth">{event.name}</h3>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-guapi-spring/90">
              {event.approximateDate}
            </p>
            <p className="mt-1 text-sm text-guapi-earth/90">{event.location}</p>
            <p className="mt-3 text-sm text-guapi-mist/85">{event.description}</p>
          </article>
        ))}
      </div>

      <Link
        href={socialProfile}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-ring inline-flex rounded-full border border-guapi-spring/50 px-5 py-3 text-sm font-semibold text-guapi-spring transition hover:bg-guapi-spring/15"
      >
        Ver atualizacoes nas redes sociais
      </Link>
    </section>
  );
}
