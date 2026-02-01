export interface Product {
  id: string;
  category: string;
  subcategory: string;
  name: string;
  desc: string;
  price: number;
  image: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}