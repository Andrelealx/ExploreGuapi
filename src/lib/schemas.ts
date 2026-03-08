import { z } from "zod";

export const partnerLeadSchema = z.object({
  name: z.string().min(2, "Informe seu nome"),
  businessName: z.string().min(2, "Informe o nome do estabelecimento"),
  segment: z.string().min(2, "Selecione o segmento"),
  plan: z.enum(["Básico", "Destaque", "Premium"]),
  email: z.string().email("Informe um e-mail válido"),
  whatsapp: z.string().min(8, "Informe um WhatsApp válido"),
  message: z.string().min(10, "Conte mais sobre o seu negócio"),
});

export type PartnerLeadInput = z.infer<typeof partnerLeadSchema>;
