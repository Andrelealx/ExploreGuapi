"use client";

import { Download, Share2 } from "lucide-react";

type SharePdfActionsProps = {
  title: string;
  description: string;
  stops: string[];
};

export function SharePdfActions({
  title,
  description,
  stops,
}: SharePdfActionsProps) {
  const textToShare = `${title}\n\n${description}\n\nParadas:\n- ${stops.join("\n- ")}`;

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title,
        text: textToShare,
      });
      return;
    }

    await navigator.clipboard.writeText(textToShare);
    alert("Roteiro copiado para a area de transferencia.");
  };

  const handlePdf = () => {
    const popup = window.open("", "_blank", "width=900,height=700");

    if (!popup) {
      return;
    }

    popup.document.write(`
      <html>
        <head>
          <title>${title}</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 40px; color: #1b1b1b; }
            h1 { color: #1B4D2E; margin-bottom: 8px; }
            p { line-height: 1.5; }
            ul { padding-left: 18px; }
            li { margin-bottom: 8px; }
          </style>
        </head>
        <body>
          <h1>${title}</h1>
          <p>${description}</p>
          <h2>Paradas</h2>
          <ul>${stops.map((stop) => `<li>${stop}</li>`).join("")}</ul>
          <p><strong>ExploreGuapi</strong> • Guapimirim, RJ</p>
        </body>
      </html>
    `);
    popup.document.close();
    popup.focus();
    popup.print();
  };

  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        className="focus-ring inline-flex items-center gap-2 rounded-full border border-guapi-spring/40 bg-guapi-spring/20 px-4 py-2 text-xs font-semibold text-guapi-spring transition hover:bg-guapi-spring/30"
        onClick={handleShare}
      >
        <Share2 size={14} />
        Compartilhar
      </button>
      <button
        type="button"
        className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-guapi-mist transition hover:bg-white/10"
        onClick={handlePdf}
      >
        <Download size={14} />
        Salvar PDF
      </button>
    </div>
  );
}
