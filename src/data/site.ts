import { SiteConfig } from '@/types';
import logoImg from '../assets/logo-multideal.png';
// Using logoImg as fallback since white-logo.svg is missing
const whiteLogoImg = logoImg;

export const siteConfig: SiteConfig = {
  name: "Multideal",
  slogan: "Seu Hub de Tecnologia e Empreendedorismo: O Melhor da Shopee para sua Casa e Renda Extra",
  logo: logoImg,
  whiteLogo: whiteLogoImg,
  address: "Digital-Storie Hub\nBrasil",
  phone: "(85) 98525-2317",
  email: "renatoservicesti@gmail.com",
  social: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
    whatsapp: "https://wa.me/5585985252317",
    linkedin: "https://www.linkedin.com/in/renato-filho-devandtech",
    github: "https://github.com/RenatofilhoDevandtech",
  },
};
