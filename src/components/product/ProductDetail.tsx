import { useLoaderData, LoaderFunctionArgs } from 'react-router-dom';
import { getProduct } from '../../services/api';
import { ProductDetails, Product } from '../../domain/typings';
import { useAppDispatch } from '../../app/hooks';
import { addItem } from '../../app/features/CartSlice';
import minusIcon from '../../assets/minus.svg';
import plusIcon from '../../assets/plus.svg';
import { turnOnOff } from '../../app/features/PopSlice';
import useCounter from '../../hooks/useCounter';

export const loader = ({
  params,
}: LoaderFunctionArgs): Promise<ProductDetails> => {
  const id = params.id || '';
  return getProduct(id);
};

function ProductDetail() {
  const data = useLoaderData() as ProductDetails;
  const { counter, increment, decrement } = useCounter(1);

  const dispatch = useAppDispatch();

  const handleAdd = () => {
    const newProduct: Product = {
      id: data.id,
      title: data.title,
      category: data.category,
      description: data.description,
      image: data.image,
      price: data.price,
      quantity: counter,
    };

    dispatch(addItem(newProduct));
    dispatch(turnOnOff(true));
  };

  return (
    <div className="container mx-auto px-4">
      <p className="py-4 text-center text-xl">Products</p>

      <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:gap-10 ">
        <div className="flex h-[320px] w-72 items-center rounded-md border-2 border-black shadow-neoProduct lg:h-[520px] lg:w-4/12">
          <img
            src={data.image}
            alt=""
            srcSet=""
            className=" h-full w-full p-5 md:p-10 lg:p-20"
          />
        </div>

        <div className="w-72 py-4 lg:w-5/12">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xl font-bold uppercase lg:text-3xl">
                {data.title}
              </p>
              <p className="text-sm capitalize text-[#989595] lg:text-lg">
                {data.category}
              </p>
            </div>

            <p className="text-lg font-bold text-[#3E70D0] lg:text-3xl">
              ${data.price}
            </p>
          </div>

          <p className="py-3 text-sm  text-[#989595] lg:text-lg">
            {data.description}
          </p>

          <div className="flex gap-6 pb-4">
            <div className="flex w-6/12 items-center justify-center gap-5 rounded-md border-2 border-black p-2 shadow-neo lg:w-3/12">
              <button type="button" onClick={decrement}>
                <img src={minusIcon} alt="" className="w-5" />
              </button>

              <span>{counter}</span>

              <button type="button" onClick={increment}>
                <img src={plusIcon} alt="" className="w-5" />
              </button>
            </div>

            <button
              type="button"
              className="w-6/12 rounded-md border-2 border-black bg-[#A8F096] p-2 shadow-neo hover:translate-x-1 hover:shadow-neoProduct  lg:w-4/12"
              onClick={handleAdd}
            >
              Add to Cart
            </button>
          </div>

          <button
            type="button"
            className="w-full rounded-md border-2 border-black bg-[#A884F7] p-2 shadow-neo hover:translate-x-1 hover:shadow-neoProduct  lg:w-8/12"
          >
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
