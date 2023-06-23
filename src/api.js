export const getProducts = async () => {
  const data = await fetch('https://fakestoreapi.com/products');
  return data;
};

export const getProduct = async (id) => {
  const data = await fetch(`https://fakestoreapi.com/products/${id}`);
  return data;
};
