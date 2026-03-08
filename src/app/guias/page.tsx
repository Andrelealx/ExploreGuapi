import type { Metadata } from "next";
import Link from "next/link";

import { GuidesList } from "@/components/pages/guides-list";
import { SectionHeading } from "@/components/shared/section-heading";

export const metadata: Metadata = {
  title: "Guias Turísticos de Guapimirim",
  description:
    "Conheça guias locais credenciados para trilhas, rapel, observação de aves e passeios de barco em Guapimirim.",
};

export default function GuidesPage() {
  return (
    <section className="container-guapi space-y-8 py-14">
      <SectionHeading
        eyebrow="Guias Turísticos"
        title="Conheca Guapi com quem nasceu aqui"
        description="Guias credenciados com especialidades em trilhas, rapel, familia, fotografia, observacao de aves e passeio de barco."
      />

      <p className="rounded-2xl border border-guapi-spring/40 bg-guapi-spring/10 px-4 py-3 text-sm text-guapi-spring">
        Destaque: os Cânions do Iconha sao tecnicos e devem ser feitos com guia especializado.
      </p>

      <GuidesList />

      <div className="section-shell flex flex-wrap items-center justify-between gap-3 p-5">
        <p className="text-sm text-guapi-mist/85">
          Voce e guia local? Torne-se parceiro e receba novos contatos de turistas.
        </p>
        <Link
          href="/anuncie"
          className="focus-ring rounded-full bg-guapi-leaf px-5 py-3 text-sm font-semibold text-guapi-mist transition hover:bg-guapi-forest"
        >
          Quero ser parceiro
        </Link>
      </div>
    </section>
  );
}
