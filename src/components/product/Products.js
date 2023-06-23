import { getProducts } from '../../api';
import ProductCard from './ProductCard';
import { useLoaderData, useSearchParams } from 'react-router-dom';

export const loader = () => {
  return getProducts();
};

const Products = () => {
  const data = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get('category');

  const handleFilterChange = (key, value) => {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  };

  const productsData = typeFilter
    ? data.filter((item) => item.category.split(' ').join('-') === typeFilter)
    : data;

  return (
    <>
      <div className="title-component">Products</div>

      <p className="text-center bold uppercase my-2">Categories</p>

      <div className="products-categories">
        <button
          className="btn text-center men"
          onClick={() => handleFilterChange('category', "men's-clothing")}
        >
          Men's clothing
        </button>
        <button
          to="women-clothing"
          className="btn text-center women"
          onClick={() => handleFilterChange('category', "women's-clothing")}
        >
          Women's clothing
        </button>
        <button
          className="btn text-center jewelry"
          onClick={() => handleFilterChange('category', 'jewelery')}
        >
          Jewelery
        </button>
        <button
          className="btn text-center electronic"
          onClick={() => handleFilterChange('category', 'electronics')}
        >
          Electronics
        </button>
      </div>

      {typeFilter ? (
        <button
          className="btn btn-variant aqua my-2"
          onClick={() => handleFilterChange('category', null)}
        >
          Clear Filters
        </button>
      ) : (
        ''
      )}

      <div className="products-container">
        {productsData.map((product) => (
          <ProductCard props={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default Products;
