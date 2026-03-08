"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Leaf, MapPinned, Mountain } from "lucide-react";

import { FeaturedAttractionsCarousel } from "@/components/pages/featured-attractions-carousel";
import { ImageWithFallback } from "@/components/shared/image-with-fallback";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { homeHighlights, seasons, stays } from "@/lib/data";

const heroItems = [
  "Guapimirim tem muito mais do que voce imagina",
  "Trilhas, cachoeiras, aventura, cultura e natureza a 50km do Rio de Janeiro",
];

export default function HomePage() {
  return (
    <div className="pb-16">
      <section className="relative min-h-[72vh] overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1800&q=80"
            alt="Mata Atlantica com cachoeira em Guapimirim"
            fill
            priority
            sizes="100vw"
            className="h-full w-full object-cover"
          />
          <div className="overlay-green absolute inset-0 bg-guapi-night/65" />
        </div>

        <div className="container-guapi relative flex min-h-[72vh] items-center py-16">
          <div className="max-w-3xl space-y-6">
            <motion.p
              className="chip border-none bg-guapi-spring/25 text-guapi-spring"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              Guia Digital Turistico de Guapimirim, RJ
            </motion.p>

            <div className="space-y-4">
              {heroItems.map((item, index) => (
                <motion.p
                  key={item}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={
                    index === 0
                      ? "font-heading text-4xl leading-tight text-guapi-earth md:text-6xl"
                      : "max-w-2xl text-base text-guapi-mist/90 md:text-xl"
                  }
                >
                  {item}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="/atracoes"
                className="focus-ring inline-flex items-center gap-2 rounded-full bg-guapi-leaf px-5 py-3 text-sm font-semibold text-guapi-mist transition hover:bg-guapi-forest"
              >
                Comecar a Explorar
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/mapa"
                className="focus-ring inline-flex items-center gap-2 rounded-full border border-guapi-earth/60 bg-guapi-night/40 px-5 py-3 text-sm font-semibold text-guapi-earth transition hover:bg-guapi-night/80"
              >
                Ver no Mapa
                <MapPinned size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="container-guapi space-y-6 py-14">
        <Reveal>
          <SectionHeading
            eyebrow="Diferenciais"
            title="130km de aventura no coracao da Mata Atlantica"
            description="Com 75% do territorio preservado e crescimento de 15% no turismo em 2024, Guapimirim se consolida como um dos destinos de ecoturismo mais promissores do estado do Rio."
          />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {homeHighlights.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="card-base h-full">
                <p className="font-heading text-2xl text-guapi-earth">{item.title}</p>
                <p className="mt-2 text-sm text-guapi-mist/85">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-guapi space-y-6 pb-14">
        <Reveal>
          <SectionHeading
            eyebrow="Atrações em destaque"
            title="Mergulhe onde poucas pessoas chegam"
            description="Selecao rotativa das experiencias que melhor representam a energia de Guapi."
          />
        </Reveal>
        <FeaturedAttractionsCarousel />
      </section>

      <section className="container-guapi space-y-6 pb-14">
        <Reveal>
          <SectionHeading
            eyebrow="Clima e temporada"
            title="Escolha o melhor periodo para visitar"
            description="Guapi tem experiencias para todo o ano: do banho de cachoeira no verao ao visual de serra com ceu limpo no inverno."
          />
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {seasons.map((item, index) => (
            <Reveal key={item.season} delay={index * 0.07}>
              <article className="card-base h-full">
                <p className="font-heading text-2xl text-guapi-earth">{item.season}</p>
                <p className="mt-2 text-sm text-guapi-mist/80">{item.summary}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-guapi pb-14">
        <div className="section-shell grid gap-6 p-6 md:grid-cols-3">
          <article className="space-y-3">
            <MapPinned className="text-guapi-spring" />
            <h3 className="font-heading text-2xl text-guapi-earth">Como chegar</h3>
            <p className="text-sm text-guapi-mist/85">
              De carro pela BR-116, de onibus intermunicipal ou de trem via SuperVia.
            </p>
          </article>
          <article className="space-y-3">
            <Mountain className="text-guapi-spring" />
            <h3 className="font-heading text-2xl text-guapi-earth">Cidade do Dedo de Deus</h3>
            <p className="text-sm text-guapi-mist/85">
              Panorama unico da Serra dos Orgaos e trilhas entre os cenarios mais emblematicos do RJ.
            </p>
          </article>
          <article className="space-y-3">
            <Leaf className="text-guapi-spring" />
            <h3 className="font-heading text-2xl text-guapi-earth">Mata Atlantica viva</h3>
            <p className="text-sm text-guapi-mist/85">
              Experiencias de ecoturismo, observacao de aves e contato real com a natureza.
            </p>
          </article>
        </div>
      </section>

      <section className="container-guapi pb-14">
        <Reveal>
          <div className="section-shell grid gap-6 p-6 md:grid-cols-[1.2fr,1fr]">
            <div className="space-y-4">
              <p className="chip border-none bg-guapi-spring/20 text-guapi-spring">
                Parceiros em destaque
              </p>
              <h2 className="font-heading text-4xl text-guapi-earth">
                Alcance turistas que buscam exatamente o que voce oferece
              </h2>
              <p className="text-sm text-guapi-mist/85">
                O ExploreGuapi funciona como vitrine comercial para pousadas,
                restaurantes e guias locais. Ganhe visibilidade com publico que
                chega pronto para viver Guapimirim.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/anuncie"
                  className="focus-ring rounded-full bg-guapi-leaf px-5 py-3 text-sm font-semibold text-guapi-mist transition hover:bg-guapi-forest"
                >
                  Quero anunciar
                </Link>
                <Link
                  href="/onde-ficar"
                  className="focus-ring rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-guapi-mist transition hover:bg-white/10"
                >
                  Ver parceiros atuais
                </Link>
              </div>
            </div>
            <div className="grid gap-3">
              {stays.slice(0, 3).map((stay) => (
                <article key={stay.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="font-heading text-2xl text-guapi-earth">{stay.name}</p>
                  <p className="text-xs text-guapi-mist/80">{stay.averageNight} por noite</p>
                </article>
              ))}
              <div className="rounded-2xl border border-guapi-spring/40 bg-guapi-spring/10 p-4">
                <p className="flex items-center gap-2 text-sm font-semibold text-guapi-spring">
                  <CalendarDays size={16} />
                  Eventos e turismo o ano inteiro
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
