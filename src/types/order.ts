
export type OrderStatus = "Entregue" | "Em trânsito" | "Processando" | "Cancelado";

export interface OrderProduct {
  id: number;
  name: string;
  price: string;
  quantity: number;
  image: string;
}

export interface Order {
  id: string;
  date: string;
  items: number;
  total: string;
  status: OrderStatus;
  products: OrderProduct[];
}
