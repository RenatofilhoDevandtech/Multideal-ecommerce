// Importações para Categorias (troque o caminho aqui quando tiver imagens locais)
import inspTech from '../assets/pictures/insopiracao-tech.png';
import inspReforma from '../assets/pictures/inspiracao-reforma.png';
import inspLifestyle from '../assets/pictures/inspiracao-lifestyle.png';
import inspEstampa from '../assets/pictures/inspiracao-kitestampa.png';

export const categoryHighlights = [
  {
    name: "Design em Tech",
    image: inspTech,
    link: "/produtos?category=Tecnologia"
  },
  {
    name: "Arquitetura & Reforma",
    image: inspReforma,
    link: "/produtos?category=Casa %26 Reforma"
  },
  {
    name: "Criação de Valor",
    image: inspEstampa,
    link: "/produtos?category=Kits de Lucro"
  },
  {
    name: "Estética de Performance",
    image: inspLifestyle,
    link: "/produtos?category=Lifestyle %26 Performance"
  }
];

export const categoriesData = [
  { id: 1, name: "Tecnologia", iconName: "Laptop", count: 20 },
  { id: 2, name: "Casa & Reforma", iconName: "Home", count: 20 },
  { id: 3, name: "Kits de Lucro", iconName: "TrendingUp", count: 20 },
  { id: 4, name: "Lifestyle & Performance", iconName: "Sparkles", count: 20 }
];
