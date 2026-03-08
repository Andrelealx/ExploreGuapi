export type AttractionCategory =
  | "Trilhas"
  | "Cachoeiras"
  | "Mirantes"
  | "Aventura"
  | "Família"
  | "Histórico"
  | "Vida Selvagem";

export type Difficulty = "Fácil" | "Médio" | "Difícil";

export type MapCategory =
  | "trilhas"
  | "cachoeiras"
  | "restaurantes"
  | "pousadas"
  | "mirantes"
  | "historico";

export interface Attraction {
  id: string;
  slug: string;
  name: string;
  category: AttractionCategory;
  difficulty: Difficulty;
  duration: string;
  distanceFromCenter: string;
  shortDescription: string;
  image: string;
  featured?: boolean;
  coordinates?: [number, number];
}

export interface Itinerary {
  id: string;
  slug: string;
  title: string;
  duration: string;
  profile: string;
  budget: string;
  description: string;
  stops: string[];
}

export interface EventItem {
  id: string;
  name: string;
  month: string;
  approximateDate: string;
  location: string;
  description: string;
}

export interface Restaurant {
  id: string;
  name: string;
  cuisine: "Comida regional" | "Pizza" | "Lanche" | "Vegano" | "Café";
  priceRange: "R$" | "R$$" | "R$$$";
  address: string;
  whatsapp: string;
  openHours: string;
  image: string;
  partnerPlan?: "Básico" | "Destaque" | "Premium";
}

export interface Stay {
  id: string;
  name: string;
  rooms: number;
  rating: number;
  contact: string;
  averageNight: string;
  image: string;
  badges: string[];
  partnerPlan?: "Básico" | "Destaque" | "Premium";
}

export interface Guide {
  id: string;
  name: string;
  specialty: string;
  languages: string[];
  whatsapp: string;
  averagePrice: string;
  rating: number;
  image: string;
  iconhaSpecialist?: boolean;
}

export interface MapPoint {
  id: string;
  name: string;
  category: MapCategory;
  position: [number, number];
  image: string;
  href: string;
}

export const navigationLinks = [
  { href: "/", label: "Início" },
  { href: "/atracoes", label: "Atrações" },
  { href: "/roteiros", label: "Roteiros" },
  { href: "/eventos", label: "Eventos" },
  { href: "/onde-comer", label: "Onde Comer" },
  { href: "/onde-ficar", label: "Onde Ficar" },
  { href: "/guias", label: "Guias" },
  { href: "/mapa", label: "Mapa" },
  { href: "/anuncie", label: "Anuncie Aqui" },
];

export const homeHighlights = [
  {
    title: "130km de trilhas",
    description: "A maior malha de trilhas do Brasil em área de montanha.",
  },
  {
    title: "+30 atrações",
    description: "Cachoeiras, mirantes, roteiros culturais e experiências locais.",
  },
  {
    title: "75% preservado",
    description: "Território coberto por Mata Atlântica e unidades ambientais.",
  },
  {
    title: "Eventos o ano todo",
    description: "Cultura, gastronomia e natureza em calendário anual ativo.",
  },
];

export const attractions: Attraction[] = [
  {
    id: "poco-verde",
    slug: "poco-verde",
    name: "Poço Verde",
    category: "Cachoeiras",
    difficulty: "Fácil",
    duration: "20 min de trilha",
    distanceFromCenter: "12 km",
    shortDescription:
      "Lagoa profunda de águas esverdeadas e geladas dentro do PARNASO, ideal para banho em família.",
    image:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    coordinates: [-22.50531, -42.98435],
  },
  {
    id: "canions-iconha",
    slug: "canions-iconha",
    name: "Cânions do Iconha",
    category: "Aventura",
    difficulty: "Difícil",
    duration: "4h a 6h",
    distanceFromCenter: "19 km",
    shortDescription:
      "Trilha técnica com sete paradas para banho entre paredões de até 40 metros no rio Iconha.",
    image:
      "https://images.unsplash.com/photo-1623625434462-e5e42318ae49?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    id: "trilha-cascatas-caneca-fina",
    slug: "trilha-cascatas-caneca-fina",
    name: "Trilha das Cascatas (Caneca Fina)",
    category: "Trilhas",
    difficulty: "Médio",
    duration: "3h a 4h",
    distanceFromCenter: "16 km",
    shortDescription:
      "Imersão na Mata Atlântica passando por três cachoeiras, ótima para fauna e flora.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    id: "mirante-soberbo",
    slug: "mirante-soberbo",
    name: "Mirante do Soberbo",
    category: "Mirantes",
    difficulty: "Fácil",
    duration: "45 min",
    distanceFromCenter: "8 km",
    shortDescription:
      "Vista panorâmica do Dedo de Deus e da Baía de Guanabara, melhor no amanhecer.",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    coordinates: [-22.471688, -42.98994],
  },
  {
    id: "cachoeira-concordia",
    slug: "cachoeira-concordia",
    name: "Cachoeira da Concórdia",
    category: "Cachoeiras",
    difficulty: "Médio",
    duration: "2h30",
    distanceFromCenter: "18 km",
    shortDescription:
      "Trecho entre Garrafão e Limoeiro com poço de águas claras ao final da trilha.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "parnaso-guapi",
    slug: "parnaso-sede-guapimirim",
    name: "PARNASO - Sede Guapimirim",
    category: "Família",
    difficulty: "Fácil",
    duration: "Dia inteiro",
    distanceFromCenter: "10 km",
    shortDescription:
      "Cachoeiras, Museu Von Martius e a Capela de Nossa Senhora da Conceição (1713).",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "morro-pipoca",
    slug: "morro-da-pipoca",
    name: "Morro da Pipoca",
    category: "Trilhas",
    difficulty: "Difícil",
    duration: "2 dias",
    distanceFromCenter: "27 km",
    shortDescription:
      "Cume com 2.225 m de altitude, recomendado apenas para montanhistas experientes.",
    image:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "apa-guapi-mirim",
    slug: "apa-guapi-mirim",
    name: "APA Guapi-Mirim",
    category: "Vida Selvagem",
    difficulty: "Fácil",
    duration: "2h",
    distanceFromCenter: "15 km",
    shortDescription:
      "Mais de 13 mil hectares de manguezal com passeios de barco e observação de botos-cinza.",
    image:
      "https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "sitio-berro-dagua",
    slug: "sitio-berro-dagua",
    name: "Sítio Berro D'Água",
    category: "Aventura",
    difficulty: "Médio",
    duration: "3h",
    distanceFromCenter: "14 km",
    shortDescription:
      "Lagoa esmeralda, rapel entre cachoeiras e tobogã natural em pedra polida.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "cachoeira-garrafao",
    slug: "cachoeira-do-garrafao",
    name: "Cachoeira do Garrafão",
    category: "Cachoeiras",
    difficulty: "Médio",
    duration: "1h30",
    distanceFromCenter: "21 km",
    shortDescription:
      "Queda de 20 metros com caminhada curta, famosa para rapel técnico.",
    image:
      "https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "cachoeira-escorrega",
    slug: "cachoeira-do-escorrega",
    name: "Cachoeira do Escorrega",
    category: "Cachoeiras",
    difficulty: "Fácil",
    duration: "1h",
    distanceFromCenter: "13 km",
    shortDescription:
      "Tobogã natural gratuito em rocha polida, um dos pontos preferidos das famílias.",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "cachoeira-veu-noiva",
    slug: "cachoeira-veu-de-noiva",
    name: "Cachoeira Véu de Noiva",
    category: "Cachoeiras",
    difficulty: "Médio",
    duration: "3 km de trilha",
    distanceFromCenter: "17 km",
    shortDescription:
      "Queda de 32 metros com opções de rapel e visual clássico da serra.",
    image:
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "poco-padre",
    slug: "poco-do-padre",
    name: "Poço do Padre",
    category: "Cachoeiras",
    difficulty: "Médio",
    duration: "2h",
    distanceFromCenter: "18 km",
    shortDescription:
      "Piscinas naturais escondidas e tranquilas formadas pela correnteza da serra.",
    image:
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "vale-lua",
    slug: "vale-da-lua",
    name: "Vale da Lua",
    category: "Família",
    difficulty: "Fácil",
    duration: "2h",
    distanceFromCenter: "20 km",
    shortDescription:
      "Área privada com taxa de entrada e piscinas naturais de formação rochosa.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "trilha-paraiso",
    slug: "trilha-do-paraiso",
    name: "Trilha do Paraíso",
    category: "Trilhas",
    difficulty: "Médio",
    duration: "3h",
    distanceFromCenter: "19 km",
    shortDescription:
      "Rota da Estrada da Barreira ligando vales e formações rochosas até poços naturais.",
    image:
      "https://images.unsplash.com/photo-1520962917960-32c8a7c5f172?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "morro-marco-pipoca",
    slug: "morro-do-marco-ate-morro-da-pipoca",
    name: "Morro do Marco -> Morro da Pipoca",
    category: "Trilhas",
    difficulty: "Difícil",
    duration: "2 a 3 dias",
    distanceFromCenter: "30 km",
    shortDescription:
      "Travessia longa com ganho de elevação intenso (2.653 m), para trilheiros experientes.",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "pedra-sino",
    slug: "trilha-da-pedra-do-sino",
    name: "Trilha da Pedra do Sino",
    category: "Trilhas",
    difficulty: "Difícil",
    duration: "2 dias",
    distanceFromCenter: "28 km",
    shortDescription:
      "Acesso pelo abrigo 4 do PARNASO com vistas para Cabeça de Cão e Garrafão.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "pedra-baleia",
    slug: "rota-circular-pedra-da-baleia",
    name: "Rota Circular Pedra da Baleia",
    category: "Trilhas",
    difficulty: "Difícil",
    duration: "2 dias (acampamento)",
    distanceFromCenter: "26 km",
    shortDescription:
      "Circuito de acampamento na mata, ideal para quem deseja pernoitar na natureza.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "fazenda-colomi",
    slug: "fazenda-colomi-ecoturismo",
    name: "Fazenda Colomi Ecoturismo",
    category: "Família",
    difficulty: "Fácil",
    duration: "Meio período",
    distanceFromCenter: "11 km",
    shortDescription:
      "Propriedade privada com atividades de ecoturismo para grupos e famílias.",
    image:
      "https://images.unsplash.com/photo-1517821365201-0d5b87b3674c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "kartodromo",
    slug: "kartodromo-internacional-de-guapimirim",
    name: "Kartódromo Internacional de Guapimirim",
    category: "Aventura",
    difficulty: "Fácil",
    duration: "1h30",
    distanceFromCenter: "9 km",
    shortDescription:
      "Opção de lazer para amantes de velocidade, fora do roteiro ecológico tradicional.",
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "praca-paulo-terra",
    slug: "praca-paulo-terra",
    name: "Praça Paulo Terra",
    category: "Histórico",
    difficulty: "Fácil",
    duration: "1h",
    distanceFromCenter: "Centro",
    shortDescription:
      "Praça central com árvores centenárias, feiras artesanais e vida local.",
    image:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "museu-von-martius",
    slug: "museu-von-martius",
    name: "Museu Von Martius",
    category: "Histórico",
    difficulty: "Fácil",
    duration: "1h30",
    distanceFromCenter: "10 km",
    shortDescription:
      "Museu da antiga Fazenda da Barreira com acervo sobre a formação de Guapimirim.",
    image:
      "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "capela-santana",
    slug: "capela-de-santana",
    name: "Capela de Sant'Ana",
    category: "Histórico",
    difficulty: "Fácil",
    duration: "45 min",
    distanceFromCenter: "7 km",
    shortDescription:
      "Erguida em 1647 no bairro Bananal, marco colonial com visita recomendada no entardecer.",
    image:
      "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?auto=format&fit=crop&w=1200&q=80",
  },
];

export const seasons = [
  {
    season: "Verão (dez-mar)",
    summary: "Calor e ótima vazão nas cachoeiras.",
  },
  {
    season: "Outono (abr-jun)",
    summary: "Clima fresco e trilhas mais seguras.",
  },
  {
    season: "Inverno (jul-ago)",
    summary: "Frio serrano, céu limpo e vistas longas.",
  },
  {
    season: "Primavera (set-nov)",
    summary: "Tempo estável e excelente visibilidade.",
  },
];

export const itineraries: Itinerary[] = [
  {
    id: "bate-volta-rio",
    slug: "bate-volta-rio-1-dia",
    title: "Bate-volta do Rio (1 dia)",
    duration: "1 dia",
    profile: "Casais e grupos de amigos",
    budget: "R$500/pessoa (média)",
    description:
      "Saída cedo do Rio pela BR-116, manhã no PARNASO com Poço Verde, almoço local e pôr do sol no Mirante do Soberbo.",
    stops: [
      "PARNASO + Poço Verde",
      "Almoço em restaurante local",
      "Mirante do Soberbo",
      "Retorno para o Rio",
    ],
  },
  {
    id: "familia-2-dias",
    slug: "familia-2-dias",
    title: "Família em Guapi (2 dias)",
    duration: "2 dias",
    profile: "Famílias com crianças",
    budget: "R$500/pessoa (média)",
    description:
      "Combina banho de cachoeira, cultura local e passeio de barco com observação de botos-cinza.",
    stops: [
      "Dia 1: Poço Verde + Museu Von Martius + Cachoeira do Escorrega",
      "Dia 2: Passeio de barco na APA Guapi-Mirim",
      "Guapi Parque das Águas",
    ],
  },
  {
    id: "aventura-2-dias",
    slug: "aventura-2-dias",
    title: "Aventura sem pausa (2 dias)",
    duration: "2 dias",
    profile: "Aventureiros",
    budget: "R$500/pessoa (média)",
    description:
      "Do técnico ao intenso: Cânions do Iconha com guia no primeiro dia e cascatas com rapel no segundo.",
    stops: [
      "Dia 1: Cânions do Iconha com guia",
      "7 paradas para banho",
      "Dia 2: Trilha das Cascatas",
      "Rapel no Sítio Berro D'Água",
    ],
  },
  {
    id: "casal-romantico",
    slug: "casal-romantico",
    title: "Casal romântico",
    duration: "2 dias",
    profile: "Casais",
    budget: "R$500/pessoa (média)",
    description:
      "Tarde na lagoa esmeralda, jantar serrano e amanhecer em cachoeira antes do pôr do sol no mirante.",
    stops: [
      "Tarde no Sítio Berro D'Água",
      "Jantar em pousada da serra",
      "Manhã na Cachoeira Véu de Noiva",
      "Pôr do sol no Mirante do Soberbo",
    ],
  },
  {
    id: "historia-cultura",
    slug: "historia-e-cultura",
    title: "História e cultura",
    duration: "1 a 2 dias",
    profile: "Viajantes culturais",
    budget: "R$500/pessoa (média)",
    description:
      "Percurso pelas raízes de Guapi entre capelas históricas, museu e centro urbano.",
    stops: [
      "Capela de Sant'Ana (Bananal)",
      "Museu Von Martius",
      "Praça Paulo Terra + café local",
      "Capela de Nossa Senhora da Conceição (1713)",
    ],
  },
  {
    id: "trilheiro-3-dias",
    slug: "trilheiro-experiente-3-dias",
    title: "Trilheiro experiente (3 dias)",
    duration: "3 dias",
    profile: "Montanhistas e trekkers",
    budget: "R$500/pessoa (média)",
    description:
      "Sequência desafiadora com cascatas, poços escondidos e final no Morro da Pipoca.",
    stops: [
      "Dia 1: Trilha das Cascatas",
      "Dia 2: Cachoeira da Concórdia + Trilha do Paraíso + Poço do Padre",
      "Dia 3: Subida ao Morro da Pipoca",
    ],
  },
  {
    id: "natureza-vida-selvagem",
    slug: "natureza-e-vida-selvagem",
    title: "Natureza e vida selvagem",
    duration: "2 dias",
    profile: "Observadores de fauna e fotógrafos",
    budget: "R$500/pessoa (média)",
    description:
      "Passeio cedo pelos manguezais da APA, observação de aves no PARNASO e fim de tarde no Poço Verde.",
    stops: [
      "Passeio de barco na APA Guapi-Mirim",
      "Observação de aves no PARNASO (Passarinhar)",
      "Poço Verde no final do dia",
    ],
  },
];

export const events: EventItem[] = [
  {
    id: "flig",
    name: "FLIG - Feira Literária de Guapimirim",
    month: "Junho",
    approximateDate: "2ª quinzena de junho",
    location: "Centro de Guapimirim",
    description:
      "Literatura, cultura, gastronomia regional e shows gratuitos ao ar livre.",
  },
  {
    id: "festival-inverno",
    name: "Festival de Inverno",
    month: "Julho",
    approximateDate: "Julho (mês inteiro)",
    location: "Vários bairros",
    description:
      "Artes, artesanato e música gratuita em diferentes pontos da cidade.",
  },
  {
    id: "casa-viseu",
    name: "Casa de Viseu",
    month: "Julho",
    approximateDate: "Finais de semana de julho",
    location: "Praça Jardim da Cotia",
    description:
      "Fusão cultural de sabores brasileiros e portugueses com apresentações culturais.",
  },
  {
    id: "moto-fest",
    name: "Guapi Moto Fest",
    month: "Agosto",
    approximateDate: "Meados de agosto",
    location: "Parada Modelo",
    description:
      "Encontro de motociclistas com programação musical e cenário serrano.",
  },
  {
    id: "expo-guapi",
    name: "Expo Guapi",
    month: "Setembro",
    approximateDate: "Setembro (5 dias)",
    location: "Pátio Modelo",
    description:
      "Exposição agropecuária com shows, gastronomia, parque e feira de artesanato.",
  },
  {
    id: "passarinhar",
    name: "Passarinhar",
    month: "Setembro",
    approximateDate: "1ª quinzena de setembro",
    location: "PARNASO e entorno",
    description:
      "Observação de aves, oficinas de arte e palestras sobre fauna local.",
  },
  {
    id: "serra-beer-festival",
    name: "Serra Beer Festival",
    month: "Outubro",
    approximateDate: "Outubro (finais de semana)",
    location: "Área central",
    description:
      "Festival cervejeiro com rótulos artesanais, oficinas e Corrida de Aventura Mestre Cervejeiro.",
  },
  {
    id: "natal-guapi",
    name: "Natal de Guapi",
    month: "Novembro a Janeiro",
    approximateDate: "De novembro até início de janeiro",
    location: "Praça Jardim da Cotia",
    description:
      "Iluminação temática, decoração e programação cultural para famílias.",
  },
  {
    id: "carnaval-gente",
    name: "Carnaval da Gente",
    month: "Fevereiro / Março",
    approximateDate: "Período de Carnaval",
    location: "Centro e bairros",
    description:
      "Bandas locais e samba carioca em uma programação para moradores e visitantes.",
  },
  {
    id: "festa-conceicao",
    name: "Festa de Nossa Senhora da Conceição",
    month: "Dezembro",
    approximateDate: "Início de dezembro",
    location: "Igrejas e praça central",
    description:
      "Procissão, música ao vivo e culinária típica em celebração tradicional.",
  },
];

export const restaurants: Restaurant[] = [
  {
    id: "rancho-serrano",
    name: "Rancho Serrano",
    cuisine: "Comida regional",
    priceRange: "R$$",
    address: "Estrada da Barreira, 245",
    whatsapp: "+55 (21) 98888-1001",
    openHours: "Qui-Dom 11h às 22h",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
    partnerPlan: "Premium",
  },
  {
    id: "cantina-guapi",
    name: "Cantina Guapi",
    cuisine: "Pizza",
    priceRange: "R$",
    address: "Rua Manoel João, 87 - Centro",
    whatsapp: "+55 (21) 98888-1002",
    openHours: "Ter-Dom 18h às 23h",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "estacao-lanches",
    name: "Estação Lanches",
    cuisine: "Lanche",
    priceRange: "R$",
    address: "Av. Dedo de Deus, 342",
    whatsapp: "+55 (21) 98888-1003",
    openHours: "Seg-Sáb 12h às 23h",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "mata-viva",
    name: "Mata Viva Cozinha",
    cuisine: "Vegano",
    priceRange: "R$$",
    address: "Rua da Cotia, 52",
    whatsapp: "+55 (21) 98888-1004",
    openHours: "Qua-Dom 11h às 20h",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80",
    partnerPlan: "Destaque",
  },
  {
    id: "cafe-neblina",
    name: "Café Neblina",
    cuisine: "Café",
    priceRange: "R$",
    address: "Praça Paulo Terra, 11",
    whatsapp: "+55 (21) 98888-1005",
    openHours: "Todos os dias 8h às 19h",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
  },
];

export const stays: Stay[] = [
  {
    id: "pousada-serra-nativa",
    name: "Pousada Serra Nativa",
    rooms: 18,
    rating: 4.8,
    contact: "+55 (21) 97777-2001",
    averageNight: "R$ 320",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    badges: ["Aceita pets", "Perto do parque", "Vista para serra"],
    partnerPlan: "Premium",
  },
  {
    id: "recanto-guapi",
    name: "Recanto Guapi",
    rooms: 11,
    rating: 4.5,
    contact: "+55 (21) 97777-2002",
    averageNight: "R$ 240",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    badges: ["Aceita pets", "Econômica"],
    partnerPlan: "Destaque",
  },
  {
    id: "chalets-vale",
    name: "Chalés do Vale",
    rooms: 7,
    rating: 4.6,
    contact: "www.chalesdovale.com.br",
    averageNight: "R$ 280",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    badges: ["Vista para serra", "Romântica"],
  },
  {
    id: "pousada-cotia",
    name: "Pousada Jardim da Cotia",
    rooms: 14,
    rating: 4.3,
    contact: "+55 (21) 97777-2003",
    averageNight: "R$ 210",
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
    badges: ["Econômica", "Centro"],
  },
];

export const guides: Guide[] = [
  {
    id: "rafael-costa",
    name: "Rafael Costa",
    specialty: "Trilhas e travessias de montanha",
    languages: ["Português", "Inglês"],
    whatsapp: "+55 (21) 96666-3001",
    averagePrice: "R$ 220/passeio",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
    iconhaSpecialist: true,
  },
  {
    id: "carla-mendes",
    name: "Carla Mendes",
    specialty: "Família, cachoeiras e educação ambiental",
    languages: ["Português", "Espanhol"],
    whatsapp: "+55 (21) 96666-3002",
    averagePrice: "R$ 180/passeio",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "joao-matheus",
    name: "João Matheus",
    specialty: "Rapel e turismo de aventura",
    languages: ["Português"],
    whatsapp: "+55 (21) 96666-3003",
    averagePrice: "R$ 260/passeio",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    iconhaSpecialist: true,
  },
  {
    id: "luiza-almeida",
    name: "Luiza Almeida",
    specialty: "Observação de aves e fotografia",
    languages: ["Português", "Inglês", "Francês"],
    whatsapp: "+55 (21) 96666-3004",
    averagePrice: "R$ 240/passeio",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80",
  },
];

export const mapPoints: MapPoint[] = [
  {
    id: "map-mirante-soberbo",
    name: "Mirante do Soberbo",
    category: "mirantes",
    position: [-22.471688, -42.98994],
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=600&q=80",
    href: "/atracoes",
  },
  {
    id: "map-poco-verde",
    name: "Poço Verde",
    category: "cachoeiras",
    position: [-22.50531, -42.98435],
    image:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=600&q=80",
    href: "/atracoes",
  },
  {
    id: "map-iconha",
    name: "Cânions do Iconha",
    category: "trilhas",
    position: [-22.4982, -42.9477],
    image:
      "https://images.unsplash.com/photo-1623625434462-e5e42318ae49?auto=format&fit=crop&w=600&q=80",
    href: "/atracoes",
  },
  {
    id: "map-rancho-serrano",
    name: "Rancho Serrano",
    category: "restaurantes",
    position: [-22.5386, -42.9889],
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80",
    href: "/onde-comer",
  },
  {
    id: "map-serra-nativa",
    name: "Pousada Serra Nativa",
    category: "pousadas",
    position: [-22.5374, -42.9843],
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
    href: "/onde-ficar",
  },
  {
    id: "map-capela-santana",
    name: "Capela de Sant'Ana",
    category: "historico",
    position: [-22.5336, -42.9897],
    image:
      "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?auto=format&fit=crop&w=600&q=80",
    href: "/atracoes",
  },
];

export const mapCategoryLabels: Record<MapCategory, string> = {
  trilhas: "Trilhas",
  cachoeiras: "Cachoeiras",
  restaurantes: "Restaurantes",
  pousadas: "Pousadas",
  mirantes: "Mirantes",
  historico: "Histórico",
};

export const mapCategoryColors: Record<MapCategory, string> = {
  trilhas: "#2E7D4F",
  cachoeiras: "#4098ff",
  restaurantes: "#f59e0b",
  pousadas: "#9333ea",
  mirantes: "#facc15",
  historico: "#ef4444",
};

export const partnerPlans = [
  {
    name: "Básico",
    price: "R$49/mês",
    description: "Listagem simples com nome, endereço e WhatsApp.",
    cta: "Quero o Básico",
  },
  {
    name: "Destaque",
    price: "R$99/mês",
    description: "Card com foto, badge de destaque e prioridade nas buscas.",
    cta: "Quero Destaque",
  },
  {
    name: "Premium",
    price: "R$199/mês",
    description:
      "Página própria, galeria de fotos, link externo e destaque na home.",
    cta: "Quero Premium",
  },
];

export const socialProfile =
  "https://www.instagram.com/exploreguapi";
