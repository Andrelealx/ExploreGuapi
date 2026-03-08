import type { Metadata } from "next";
import Link from "next/link";

import { PartnerForm } from "@/components/pages/partner-form";
import { SectionHeading } from "@/components/shared/section-heading";
import { partnerPlans } from "@/lib/data";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Anuncie no ExploreGuapi",
  description:
    "Planos de divulgação para pousadas, restaurantes, guias e negócios turísticos em Guapimirim.",
};

export default function AdvertisePage() {
  return (
    <section className="container-guapi space-y-8 py-14">
      <SectionHeading
        eyebrow="Anuncie Aqui"
        title="Alcance turistas que buscam exatamente o que voce oferece"
        description="Escolha o plano ideal para seu negocio aparecer no principal guia digital de Guapimirim."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {partnerPlans.map((plan) => (
          <article
            key={plan.name}
            className={`card-base ${plan.name === "Premium" ? "ring-1 ring-guapi-spring/60" : ""}`}
          >
            <p className="chip">{plan.name}</p>
            <h3 className="mt-3 font-heading text-4xl text-guapi-earth">{plan.price}</h3>
            <p className="mt-3 text-sm text-guapi-mist/85">{plan.description}</p>
            <Link
              href={whatsappLink(
                `Oi! Tenho interesse no plano ${plan.name} do ExploreGuapi.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-5 inline-flex rounded-full bg-guapi-leaf px-4 py-2 text-sm font-semibold text-guapi-mist transition hover:bg-guapi-forest"
            >
              {plan.cta}
            </Link>
          </article>
        ))}
      </div>

      <PartnerForm />
    </section>
  );
}
