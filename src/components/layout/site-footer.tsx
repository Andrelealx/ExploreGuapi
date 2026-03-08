import Link from "next/link";

import { navigationLinks } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-guapi-night/70 py-10">
      <div className="container-guapi grid gap-8 md:grid-cols-3">
        <div className="space-y-3">
          <p className="font-heading text-2xl text-guapi-earth">
            Explore<span className="text-guapi-spring">Guapi</span>
          </p>
          <p className="text-sm text-guapi-mist/80">
            Guapimirim tem muito mais do que voce imagina.
          </p>
          <p className="font-mono text-xs text-guapi-spring/90">
            Cidade do Dedo de Deus | RJ
          </p>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-guapi-spring/90">
            Navegacao
          </p>
          <ul className="grid gap-2 text-sm text-guapi-mist/80">
            {navigationLinks.map((item) => (
              <li key={item.href}>
                <Link className="focus-ring hover:text-guapi-spring" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-guapi-spring/90">
            Contato
          </p>
          <p className="text-sm text-guapi-mist/80">
            Turismo de natureza, cultura local e oportunidades para parceiros.
          </p>
          <p className="text-sm text-guapi-earth">
            ExploreGuapi • 2026 • Guia Digital Turistico
          </p>
        </div>
      </div>
    </footer>
  );
}
