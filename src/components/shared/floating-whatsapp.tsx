import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { whatsappLink } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <Link
      href={whatsappLink(
        "Oi! Vim pelo ExploreGuapi e gostaria de ajuda para montar meu roteiro em Guapimirim.",
      )}
      target="_blank"
      rel="noopener noreferrer"
      className="focus-ring fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border border-guapi-spring/40 bg-guapi-leaf px-4 py-3 text-sm font-semibold text-guapi-mist shadow-soft transition hover:bg-guapi-forest"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={18} />
      WhatsApp
    </Link>
  );
}
