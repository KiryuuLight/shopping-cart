import minusSvg from '../assets/minus.svg';
import plusSvg from '../assets/plus.svg';
import closeSvg from '../assets/close.svg';
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from '../app/features/CartSlice';
import { useAppDispatch } from '../app/hooks';
import { Product } from '../domain/typings';

interface Props {
  product: Product;
  drawer: boolean;
}

function CartItem({ product, drawer }: Props) {
  const dispatch = useAppDispatch();

  return (
    <div className="relative flex h-32 w-80 gap-4 rounded-md border border-black p-2.5 shadow-[2px_2px_0px_0px_#000] lg:w-full lg:items-center">
      <img src={product.image} alt="" className="w-16" />

      <div
        className={
          drawer ? 'flex flex-col gap-2 ' : 'flex flex-col gap-2 lg:flex-row'
        }
      >
        <p className="text-xs font-bold uppercase">
          {product.title.slice(0, 20)}
        </p>
        <p className="text-xs">QTY : {product.quantity}</p>
        <p className="text-xs">${product.price.toFixed(2)}</p>

        <div className="flex w-32 items-center justify-center gap-4 rounded-md border-2 border-black bg-[#DCB097] px-1 text-sm shadow-neo">
          <button
            type="button"
            onClick={() => dispatch(decreaseQuantity(product.id))}
          >
            <img src={minusSvg} alt="" srcSet="" className="w-5" />
          </button>

          <span>{product.quantity}</span>

          <button
            type="button"
            onClick={() => dispatch(increaseQuantity(product.id))}
          >
            <img src={plusSvg} alt="" srcSet="" className="w-5" />
          </button>
        </div>
      </div>

      <button type="button" onClick={() => dispatch(removeItem(product.id))}>
        <img src={closeSvg} alt="" className="absolute right-0 top-0 w-6 p-1" />
      </button>
    </div>
  );
}

export default CartItem;
