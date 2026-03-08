import Link from "next/link";
import { Compass } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container-guapi flex min-h-[70vh] items-center justify-center py-16">
      <div className="section-shell max-w-xl space-y-5 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-guapi-spring/20 text-guapi-spring">
          <Compass size={26} />
        </div>
        <p className="chip">Erro 404</p>
        <h1 className="font-heading text-4xl text-guapi-earth">
          Essa trilha nao foi encontrada
        </h1>
        <p className="text-guapi-mist/85">
          Parece que voce saiu da rota. Volte para a pagina inicial e continue
          explorando os segredos de Guapimirim.
        </p>
        <Link
          href="/"
          className="focus-ring inline-flex rounded-full bg-guapi-leaf px-5 py-3 text-sm font-semibold text-guapi-mist transition hover:bg-guapi-forest"
        >
          Voltar para o inicio
        </Link>
      </div>
    </section>
  );
}
