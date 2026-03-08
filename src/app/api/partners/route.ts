import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

import { prisma } from "@/lib/prisma";
import { partnerLeadSchema } from "@/lib/schemas";

function canSendEmail() {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_PORT &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      process.env.PARTNERS_RECEIVER_EMAIL,
  );
}

async function sendLeadEmail(payload: {
  name: string;
  businessName: string;
  segment: string;
  plan: string;
  email: string;
  whatsapp: string;
  message: string;
}) {
  if (!canSendEmail()) {
    return false;
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.SMTP_FROM ?? process.env.SMTP_USER,
    to: process.env.PARTNERS_RECEIVER_EMAIL,
    subject: `[ExploreGuapi] Novo cadastro parceiro - ${payload.businessName}`,
    text: `
Nome: ${payload.name}
Negocio: ${payload.businessName}
Segmento: ${payload.segment}
Plano: ${payload.plan}
E-mail: ${payload.email}
WhatsApp: ${payload.whatsapp}
Mensagem:
${payload.message}
    `.trim(),
  });

  return true;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = partnerLeadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { message: parsed.error.issues[0]?.message ?? "Dados invalidos." },
        { status: 400 },
      );
    }

    const payload = parsed.data;

    if (process.env.DATABASE_URL) {
      await prisma.partnerLead.create({
        data: payload,
      });
    }

    const sentEmail = await sendLeadEmail(payload);

    return NextResponse.json({
      message: sentEmail
        ? "Cadastro recebido! Enviaremos os detalhes em breve."
        : "Cadastro recebido! Configure SMTP para disparo automatico por e-mail.",
    });
  } catch (error) {
    console.error("Partner form error:", error);

    return NextResponse.json(
      { message: "Nao foi possivel processar o cadastro agora." },
      { status: 500 },
    );
  }
}
