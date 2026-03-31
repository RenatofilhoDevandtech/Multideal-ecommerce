import { Order, OrderStatus, OrderProduct } from '@/types';
import imgTenisEmAlta from '../assets/pictures/img-tenis-emalta.svg';
import artCamisaSupreme from '../assets/pictures/art-camisaSupreme.svg';
import artHeadphone from '../assets/pictures/art-headphone.svg';
import artTenis from '../assets/pictures/art-tenis.svg';

export const ordersData: Order[] = [
  {
    id: "#ORD-54321",
    date: "30 Abr 2023",
    items: 3,
    total: "R$ 450,00",
    status: "Entregue",
    products: [
      {
        id: 1,
        name: "K-Swiss V8 - Masculino",
        price: "R$ 200,00",
        quantity: 1,
        image: imgTenisEmAlta,
      },
      {
        id: 2,
        name: "Camiseta Supreme White",
        price: "R$ 120,00",
        quantity: 1,
        image: artCamisaSupreme,
      },
      {
        id: 3,
        name: "Headphone Beats Bass",
        price: "R$ 130,00",
        quantity: 1,
        image: artHeadphone,
      },
    ],
  },
  {
    id: "#ORD-98765",
    date: "15 Abr 2023",
    items: 2,
    total: "R$ 270,00",
    status: "Em trânsito",
    products: [
      {
        id: 4,
        name: "Tênis Nike Air - Unissex",
        price: "R$ 190,00",
        quantity: 1,
        image: artTenis,
      },
      {
        id: 5,
        name: "Boné Adidas Classic",
        price: "R$ 80,00",
        quantity: 1,
        image: artCamisaSupreme,
      },
    ],
  },
  {
    id: "#ORD-34567",
    date: "28 Mar 2023",
    items: 1,
    total: "R$ 280,00",
    status: "Processando",
    products: [
      {
        id: 6,
        name: "Headphone Beats Bass",
        price: "R$ 280,00",
        quantity: 1,
        image: artHeadphone,
      },
    ],
  },
  {
    id: "#ORD-12345",
    date: "10 Mar 2023",
    items: 2,
    total: "R$ 300,00",
    status: "Cancelado",
    products: [
      {
        id: 7,
        name: "Tênis Adidas Runner",
        price: "R$ 230,00",
        quantity: 1,
        image: artTenis,
      },
      {
        id: 8,
        name: "Camiseta Vintage - Masculina",
        price: "R$ 70,00",
        quantity: 1,
        image: artCamisaSupreme,
      },
    ],
  },
];
