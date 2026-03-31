import heroAchadinhos from '../assets/herocard/hero-achadinhos-1600X420.png';
import heroMackbook from '../assets/herocard/hero-mackbook-1600X420.png';
import heroPapelaria from '../assets/herocard/hero-papelaria.png';
import heroPcs from '../assets/herocard/hero-pcs.png';
import heroPremiun from '../assets/herocard/hero-premiun.png';
import heroProdutoReal from '../assets/herocard/hero-produto-real.png';
import heroReforma from '../assets/herocard/hero-reforma.png';
import heroSmartphone from '../assets/herocard/hero-smartphone.png';
import heroSmartwatch from '../assets/herocard/hero-smartwatch.png';

export interface HeroBanner {
  id: number;
  title?: string;
  subtitle?: string;
  label?: string;
  image: string;
  color: string;
  textColor: string;
  href: string;
}

export const heroBanners: HeroBanner[] = [
  {
    id: 1,
    title: "",
    subtitle: "",
    image: heroAchadinhos,
    color: "#FFFF00",
    textColor: "#000000",
    href: "/categorias"
  },
  {
    id: 2,
    title: "",
    subtitle: "",
    image: heroMackbook,
    color: "#00A650",
    textColor: "#FFFFFF",
    href: "/produtos"
  },
  {
    id: 3,
    title: "",
    subtitle: "",
    image: heroPapelaria,
    color: "#3483FA",
    textColor: "#FFFFFF",
    href: "/categorias"
  },
  {
    id: 4,
    title: "",
    subtitle: "",
    image: heroPcs,
    color: "#FF5733",
    textColor: "#FFFFFF",
    href: "/produtos"
  },
  {
    id: 5,
    title: "",
    subtitle: "",
    image: heroPremiun,
    color: "#000000",
    textColor: "#FFFFFF",
    href: "/premium"
  },
  {
    id: 6,
    title: "",
    subtitle: "",
    image: heroProdutoReal,
    color: "#F5F5F5",
    textColor: "#333333",
    href: "/vendas-reais"
  },
  {
    id: 7,
    title: "",
    subtitle: "",
    image: heroReforma,
    color: "#8B4513",
    textColor: "#FFFFFF",
    href: "/casa-reforma"
  },
  {
    id: 8,
    title: "",
    subtitle: "",
    image: heroSmartphone,
    color: "#1C1C1C",
    textColor: "#FFFFFF",
    href: "/smartphones"
  },
  {
    id: 9,
    title: "",
    subtitle: "",
    image: heroSmartwatch,
    color: "#3483FA",
    textColor: "#FFFFFF",
    href: "/smartwatch"
  }
];

