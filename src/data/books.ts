
export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  image: string;
  category: "Business" | "Marketing" | "Tech" | "Psychology";
  affiliateUrl: string;
  price: number;
  highlight?: string;
}

export const booksData: Book[] = [
  {
    id: 1,
    title: "A Única Coisa",
    author: "Gary Keller",
    description: "Foque no que realmente importa e elimine as distrações que impedem seu ROI.",
    image: "https://images-na.ssl-images-amazon.com/images/I/616lfGzzNlL._AC_UL232_SR232,232_.jpg",
    category: "Business",
    affiliateUrl: "https://amzn.to/47cvPhF",
    price: 39.99,
    highlight: "Indispensável para foco estratégico"
  },
  {
    id: 2,
    title: "Trabalhe 4 Horas por Semana",
    author: "Timothy Ferriss",
    description: "O guia clássico para automação de negócios e estilo de vida nômade.",
    image: "https://m.media-amazon.com/images/I/71LtnrB9XOL._SY466_.jpg",
    category: "Business",
    affiliateUrl: "https://amzn.to/40JSoGJ",
    price: 63.08,
    highlight: "A bíblia da automação"
  },
  {
    id: 3,
    title: "Gatilhos Mentais",
    author: "Gustavo Ferreira",
    description: "Domine a arte da persuasão e aumente sua conversão de vendas.",
    image: "https://images-na.ssl-images-amazon.com/images/I/713GIPU1lpL._AC_UL232_SR232,232_.jpg",
    category: "Marketing",
    affiliateUrl: "https://amzn.to/4tiEKXx",
    price: 30.99,
    highlight: "Fundamental para Copywriting"
  },
  {
    id: 4,
    title: "Pai Rico, Pai Pobre",
    author: "Robert Kiyosaki",
    description: "A base da educação financeira para quem quer construir ativos.",
    image: "https://images-na.ssl-images-amazon.com/images/I/71V4lNR2gKL._AC_UL232_SR232,232_.jpg",
    category: "Business",
    affiliateUrl: "https://amzn.to/4sv3cF4",
    price: 36.42,
    highlight: "Mindset financeiro de elite"
  },
  {
    id: 5,
    title: "Código Limpo",
    author: "Robert C. Martin",
    description: "Habilidades Práticas do Agile Software. Essencial para criar código sustentável e profissional.",
    image: "https://m.media-amazon.com/images/I/71dH97FwGbL._AC_UL320_.jpg",
    category: "Tech",
    affiliateUrl: "https://amzn.to/47EfTop",
    price: 74.06,
    highlight: "Bíblia da qualidade de código"
  },
  {
    id: 6,
    title: "Entendendo Algoritmos",
    author: "Aditya Y. Bhargava",
    description: "Um guia ilustrado para programadores e curiosos. Essencial para lógica de programação.",
    image: "https://m.media-amazon.com/images/I/71Vkg7GfPFL._AC_UL320_.jpg",
    category: "Tech",
    affiliateUrl: "https://amzn.to/4cU4g07",
    price: 52.40,
    highlight: "Lógica visual e eficiente"
  },
  {
    id: 7,
    title: "Arquitetura Limpa",
    author: "Robert C. Martin",
    description: "O guia do artesão para estrutura e design de software. Aprenda a escala real.",
    image: "https://m.media-amazon.com/images/I/815d9tE7jSL._AC_UL320_.jpg",
    category: "Tech",
    affiliateUrl: "https://amzn.to/4rB6iFW",
    price: 78.99,
    highlight: "Design de software escalável"
  },
  {
    id: 8,
    title: "Refatoração",
    author: "Martin Fowler",
    description: "Aperfeiçoando o Design de Código Existente. Transforme legado em ouro.",
    image: "https://m.media-amazon.com/images/I/81qTq0PQp3L._AC_UL320_.jpg",
    category: "Tech",
    affiliateUrl: "https://amzn.to/4uAxebG",
    price: 133.76,
    highlight: "Evolução contínua de software"
  },
  {
    id: 9,
    title: "O Programador Pragmático",
    author: "Hunt & Thomas",
    description: "Sua jornada até a maestria. O livro que redefine o que é ser um dev.",
    image: "https://m.media-amazon.com/images/I/91sTrQDm3PL._AC_UL320_.jpg",
    category: "Tech",
    affiliateUrl: "https://amzn.to/473v6iF",
    price: 134.00,
    highlight: "O mindset da maestria tech"
  },
  {
    id: 10,
    title: "Cracking the Coding Interview",
    author: "Gayle Laakmann McDowell",
    description: "189 questões e soluções para passar nas maiores Big Techs do mundo.",
    image: "https://m.media-amazon.com/images/I/61mIq2iJUXL._AC_UL320_.jpg",
    category: "Tech",
    affiliateUrl: "https://amzn.to/4rBrY4O",
    price: 398.83,
    highlight: "Passaporte para Big Techs"
  },
  {
    id: 11,
    title: "CSS Refactoring",
    author: "Wathan & Schoger",
    description: "Crie folhas de estilo escaláveis e sistemas de design que não quebram.",
    image: "https://m.media-amazon.com/images/I/91Mp3dRndRL._AC_UL320_.jpg",
    category: "Tech",
    affiliateUrl: "https://amzn.to/4doXqjl",
    price: 157.34,
    highlight: "Arquitetura de UI Profissional"
  }
];
