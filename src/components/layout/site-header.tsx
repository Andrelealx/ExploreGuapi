"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { navigationLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-guapi-night/80 backdrop-blur-xl">
      <div className="container-guapi flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="focus-ring font-heading text-xl tracking-wide text-guapi-earth"
        >
          Explore<span className="text-guapi-spring">Guapi</span>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {navigationLinks.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "focus-ring rounded-full px-3 py-2 text-sm transition",
                  isActive
                    ? "bg-guapi-spring/20 text-guapi-spring"
                    : "text-guapi-mist/85 hover:bg-white/10 hover:text-guapi-mist",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="focus-ring rounded-full border border-white/15 p-2 text-guapi-earth lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {isOpen ? (
        <nav className="container-guapi grid gap-2 pb-4 lg:hidden">
          {navigationLinks.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "focus-ring rounded-xl border px-3 py-2 text-sm",
                  isActive
                    ? "border-guapi-spring/60 bg-guapi-spring/20 text-guapi-spring"
                    : "border-white/10 text-guapi-mist/85",
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      ) : null}
    </header>
  );
}
