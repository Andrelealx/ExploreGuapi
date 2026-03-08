import type { Metadata } from "next";

export const siteConfig = {
  name: "ExploreGuapi",
  slogan: "Guapimirim tem muito mais do que você imagina",
  description:
    "Guia digital turístico de Guapimirim, RJ: trilhas, cachoeiras, roteiros, eventos, gastronomia, hospedagem e guias locais.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5521999999999",
  keywords: [
    "o que fazer em Guapimirim",
    "trilhas Guapimirim",
    "cachoeiras Guapimirim",
    "turismo Guapimirim",
    "guia digital Guapimirim",
    "PARNASO Guapimirim",
  ],
};

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalizedPath}`;
}

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Guia Digital Turístico de Guapimirim`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.slogan,
    description: siteConfig.description,
    images: [
      {
        url: absoluteUrl("/og-exploreguapi.svg"),
        width: 1200,
        height: 630,
        alt: "ExploreGuapi - Guia Digital Turístico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.slogan,
    description: siteConfig.description,
    images: [absoluteUrl("/og-exploreguapi.svg")],
  },
  alternates: {
    canonical: "/",
  },
};

export function whatsappLink(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsapp}?text=${text}`;
}
