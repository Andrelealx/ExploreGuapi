"use client";

import { useState } from "react";
import type { FormEvent } from "react";

const plans = ["Básico", "Destaque", "Premium"] as const;
const segments = [
  "Pousada",
  "Restaurante",
  "Guia turístico",
  "Agência de passeios",
  "Outro",
] as const;

type Status = "idle" | "loading" | "success" | "error";

export function PartnerForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setStatus("loading");
    setMessage("");

    const payload = {
      name: String(formData.get("name") ?? ""),
      businessName: String(formData.get("businessName") ?? ""),
      segment: String(formData.get("segment") ?? ""),
      plan: String(formData.get("plan") ?? "Básico"),
      email: String(formData.get("email") ?? ""),
      whatsapp: String(formData.get("whatsapp") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/partners", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const json = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(json.message ?? "Nao foi possivel enviar seu cadastro.");
      }

      setStatus("success");
      setMessage(json.message ?? "Cadastro enviado com sucesso.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "Erro inesperado ao enviar cadastro.",
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="section-shell space-y-4 p-6">
      <h3 className="font-heading text-3xl text-guapi-earth">Cadastro de parceiros</h3>
      <p className="text-sm text-guapi-mist/80">
        Envie seus dados e nossa equipe retorna por e-mail e WhatsApp.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm">
          Seu nome
          <input
            required
            name="name"
            className="focus-ring rounded-xl border border-white/20 bg-guapi-night/60 px-3 py-2 text-guapi-mist"
            placeholder="Ex.: Ana Souza"
          />
        </label>
        <label className="grid gap-2 text-sm">
          Nome do negócio
          <input
            required
            name="businessName"
            className="focus-ring rounded-xl border border-white/20 bg-guapi-night/60 px-3 py-2 text-guapi-mist"
            placeholder="Ex.: Pousada Serra Bela"
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <label className="grid gap-2 text-sm">
          Segmento
          <select
            required
            name="segment"
            className="focus-ring rounded-xl border border-white/20 bg-guapi-night/60 px-3 py-2 text-guapi-mist"
            defaultValue={segments[0]}
          >
            {segments.map((segment) => (
              <option key={segment} value={segment}>
                {segment}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm">
          Plano
          <select
            required
            name="plan"
            className="focus-ring rounded-xl border border-white/20 bg-guapi-night/60 px-3 py-2 text-guapi-mist"
            defaultValue={plans[0]}
          >
            {plans.map((plan) => (
              <option key={plan} value={plan}>
                {plan}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm">
          WhatsApp
          <input
            required
            name="whatsapp"
            className="focus-ring rounded-xl border border-white/20 bg-guapi-night/60 px-3 py-2 text-guapi-mist"
            placeholder="+55 (21) 99999-0000"
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm md:col-span-2">
          E-mail
          <input
            required
            type="email"
            name="email"
            className="focus-ring rounded-xl border border-white/20 bg-guapi-night/60 px-3 py-2 text-guapi-mist"
            placeholder="contato@seudominio.com"
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm">
        Conte sobre seu negocio
        <textarea
          required
          name="message"
          className="focus-ring min-h-[120px] rounded-xl border border-white/20 bg-guapi-night/60 px-3 py-2 text-guapi-mist"
          placeholder="Descreva seu publico, diferencial e objetivos no ExploreGuapi."
        />
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="focus-ring rounded-full bg-guapi-leaf px-5 py-3 text-sm font-semibold text-guapi-mist transition hover:bg-guapi-forest disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Enviando..." : "Enviar cadastro"}
      </button>

      {message ? (
        <p
          className={`text-sm ${
            status === "success" ? "text-guapi-spring" : "text-red-300"
          }`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
