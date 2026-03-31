import colecaoPC from '../assets/pictures/colecao-pc.png';
import colecaoReforma from '../assets/pictures/colecao-reforma.png';
import colecaoEstampa from '../assets/pictures/inspiracao-kitestampa.png';

export interface Collection {
  id: number;
  title: string;
  discount: string;
  description: string;
  image: string;
  bgWhite?: boolean;
  href: string;
}

export const collectionsData: Collection[] = [
  {
    id: 1,
    title: "Setup de Elite 2026",
    discount: "Performance Ativa",
    description: "Hardware de ponta para quem não aceita menos que o topo.",
    image: colecaoPC,
    href: "/produtos",
  },
  {
    id: 2,
    title: "Reforma & Design",
    discount: "Upgrade Total",
    description: "Acabamentos premium que valorizam seu patrimônio.",
    image: colecaoReforma,
    href: "/produtos",
  },
  {
    id: 3,
    title: "Indústria & Arte",
    discount: "Criação Pura",
    description: "Ferramentas para transformar visão e lucro.",
    image: colecaoEstampa,
    href: "/kits",
  },
];
