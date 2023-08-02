import { useLoaderData, useSearchParams, Await, defer } from 'react-router-dom';
import { Suspense } from 'react';
import ProductCard from '../components/product/ProductCard';
import Button from '../components/Button';
import { getProducts } from '../services/api';
import { ProductsArray } from '../domain/typings';
import Loading from '../components/Loading';

interface LoaderReturn {
  products: Promise<ProductsArray>;
}

export async function loader() {
  const productsPromise = getProducts();

  return defer({
    products: productsPromise,
  });
}

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get('category');

  const data = useLoaderData() as LoaderReturn;

  const handleFilterChange = (key: string, value: string | null): void => {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  };

  return (
    <div className="container mx-auto px-4">
      <p className="py-4 text-center text-xl">Products</p>

      <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
        <p>Filter by:</p>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex gap-6">
            <Button content="men's-clothing" bgColor="#45CDD6" />
            <Button content="women's-clothing" bgColor="#F296F3" />
            <Button content="jewelery" bgColor="#7EE57C" />
            <Button content="electronics" bgColor="#ED9C24" />
          </div>
          {typeFilter && (
            <button
              onClick={() => handleFilterChange('category', null)}
              type="button"
              className="font-semibold capitalize text-[#C91818] "
            >
              clear filters
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 py-4 lg:flex-row lg:flex-wrap">
        <Suspense fallback={<Loading />}>
          <Await resolve={data.products}>
            {(products: ProductsArray) => {
              const productsData = typeFilter
                ? products.filter(
                    (item) => item.category.split(' ').join('-') === typeFilter
                  )
                : products;

              return productsData.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                />
              ));
            }}
          </Await>
        </Suspense>
      </div>
    </div>
  );
}

export default Products;
