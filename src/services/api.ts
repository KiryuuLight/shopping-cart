import { ProductDetails, ProductsArray } from '../domain/typings';

export const getProducts = async (): Promise<ProductsArray> => {
  const response = await fetch('https://fakestoreapi.com/products');

  if (!response.ok) throw new Error('Something went wrong!');

  const data = await response.json();

  return data;
};

export const getProduct = async (id: string): Promise<ProductDetails> => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!response.ok) throw new Error('Something went wrong!');

  const data = await response.json();

  return data;
};
