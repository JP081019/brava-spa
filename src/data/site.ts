import type { Experience, Testimonial } from "@/types/content";

export const navigation = [
  { label: "O Brava", href: "#sobre" },
  { label: "Experiências", href: "#experiencias" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contato", href: "#contato" },
];

export const experiences: Experience[] = [
  {
    number: "01",
    title: "Day Spa",
    description: "Uma experiência completa de pausa, cuidado e reconexão com duas jornadas para escolher.",
    icon: "bi-water",
    options: [
      {
        name: "Immersion",
        description: "Uma imersão profunda para aquecer o corpo, dissolver tensões e desacelerar por inteiro.",
        includes: ["Aromaterapia", "Preparação e aquecimento do corpo", "Massagem relaxante ou terapêutica", "Massagem craniofacial", "Imersão em ofurô", "Snacks e frutas", "Espumante, vinho ou kombucha"],
      },
      {
        name: "Oceânica",
        description: "Um fluxo leve e restaurador que combina toque, cuidado capilar e a tranquilidade do ofurô.",
        includes: ["Aromaterapia", "Massagem relaxante", "Massagem capilar", "Imersão em ofurô", "Snacks e frutas", "Espumante, vinho ou kombucha"],
      },
    ],
  },
  {
    number: "02",
    title: "Quiropraxia",
    description: "Ajustes precisos que ajudam a recuperar mobilidade, equilíbrio e conforto no dia a dia.",
    icon: "bi-person-arms-up",
    highlights: ["Avaliação individual", "Ajustes articulares", "Mais mobilidade", "Alívio de desconfortos"],
  },
  {
    number: "03",
    title: "Drenagem Manual",
    description: "Movimentos suaves e ritmados que estimulam a circulação e reduzem a sensação de inchaço.",
    icon: "bi-droplet",
    highlights: ["Toque suave", "Estímulo linfático", "Redução de inchaço", "Sensação de leveza"],
  },
  {
    number: "04",
    title: "Massagens",
    description: "Técnicas personalizadas para aliviar o corpo e criar espaço para uma mente mais tranquila.",
    icon: "bi-flower1",
    highlights: ["Relaxante", "Terapêutica", "Pedras quentes", "Atendimento personalizado"],
  },
  {
    number: "05",
    title: "Head Spa",
    description: "Um cuidado sensorial para couro cabeludo, face e mente, com água, aroma e massagem.",
    icon: "bi-stars",
    highlights: ["Diagnóstico capilar", "Higienização profunda", "Massagem craniana", "Relaxamento facial"],
  },
];

export const testimonials: Testimonial[] = [
  { quote: "O Brava tem um jeito raro de fazer o tempo parar. Saí leve, cuidada e com vontade de voltar antes mesmo de ir embora.", name: "Marina F.", detail: "Ritual Brava" },
  { quote: "Da chegada ao último chá, tudo foi pensado com delicadeza. É um refúgio de verdade no meio da rotina.", name: "Camila R.", detail: "Day Spa" },
  { quote: "Ambiente impecável e uma equipe que entende o que o corpo precisa. Minha melhor experiência de massagem.", name: "Ana Paula M.", detail: "Massagem relaxante" },
];
