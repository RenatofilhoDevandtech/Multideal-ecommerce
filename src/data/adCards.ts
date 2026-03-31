import imgFrete from '../assets/adcards/image-frete.png';
import imgVerificar from '../assets/adcards/image-verificar.png';
import imgKitPrensa from '../assets/adcards/image-kit-prensa.png';
import imgReforma from '../assets/adcards/image-reforma.png';
import imgTech from '../assets/adcards/image-tech.png';
import imgProfissional from '../assets/adcards/image-profissional.png';
import imgAchadoOuro from '../assets/adcards/image-achado-ouro.png';
import imgComoUsar from '../assets/adcards/image-como-usar.png';

export interface AdCard {
  title: string;
  description: string;
  buttonText: string;
  image: string;
  link: string;
}

export const adCards: AdCard[] = [
  {
    title: "Primeira Jornada Sem Custos",
    description: "Sua primeira entrega é por nossa conta. Descubra o padrão Multideal agora.",
    buttonText: "Validar meu frete grátis",
    image: imgFrete,
    link: "/produtos"
  },
  {
    title: "Adeus, \"Expectativa vs Realidade\"",
    description: "Filtramos apenas o 1% melhor da Shopee e Amazon. O que você vê é o que chega.",
    buttonText: "Ver itens validados",
    image: imgVerificar,
    link: "/login"
  },
  {
    title: "Monte sua Fábrica em Casa",
    description: "O kit completo para faturar com personalizados. O atalho para seu novo negócio.",
    buttonText: "Começar a lucrar",
    image: imgKitPrensa,
    link: "/ajuda"
  },
  {
    title: "Obra sem Dor de Cabeça",
    description: "Ferramentas brutas para soluções rápidas. Durabilidade testada por quem entende.",
    buttonText: "Ver ferramentas",
    image: imgReforma,
    link: "/produtos"
  },
  {
    title: "Setup de Alta Performance",
    description: "Os acessórios que os grandes players usam. Eleve seu nível tecnológico hoje.",
    buttonText: "Explorar gadgets",
    image: imgTech,
    link: "/produtos"
  },
  {
    title: "Ecossistema High-Tech",
    description: "De APIs complexas ao Primeflix. Veja a engenharia por trás do Multideal.",
    buttonText: "Ver meu Portfólio",
    image: imgProfissional,
    link: "/produtos"
  },
  {
    title: "Achados de Ouro: 24h",
    description: "Nossa API encontrou preços que não deveriam existir. Aproveite enquanto há estoque.",
    buttonText: "Pegar ofertas",
    image: imgAchadoOuro,
    link: "/ajuda"
  },
  {
    title: "Como Usar? Nós Ensinamos",
    description: "Do unboxing ao primeiro lucro. Guias exclusivos para você não errar a mão.",
    buttonText: "Acessar guias",
    image: imgComoUsar,
    link: "/impacto"
  }
];
