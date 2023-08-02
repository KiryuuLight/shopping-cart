export interface ProductDetails {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export interface Product {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
}

export type ProductsArray = ProductDetails[];
