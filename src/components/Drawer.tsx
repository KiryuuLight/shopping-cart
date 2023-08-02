import { Link } from 'react-router-dom';
import classNames from 'classnames';
import CartItem from './CartItem';
import closeIcon from '../assets/close.svg';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { turnOnOff } from '../app/features/PopSlice';

function Drawer() {
  const dispatch = useAppDispatch();
  const visibility = useAppSelector((state) => state.drawerVisibility.visible);
  const cartItems = useAppSelector((state) => state.cart.items);
  const subTotal = useAppSelector((state) => state.cart.subTotal);

  return (
    <div
      className={classNames(
        'fixed right-0 top-0 z-40 hidden h-screen w-80 bg-white p-4 transition-transform',
        { 'lg:block': visibility }
      )}
      tabIndex={-1}
    >
      <button
        type="button"
        className="absolute right-2.5 top-2.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
        onClick={() => dispatch(turnOnOff(false))}
      >
        <img src={closeIcon} alt="" className="w-6" />
      </button>

      <div>
        <p className="text-center text-lg capitalize">My Cart</p>
        <p className="text-center text-lg capitalize">Subtotal</p>
        <p className="text-center text-lg capitalize text-red-500">
          ${subTotal.toFixed(2)}
        </p>
      </div>

      <div className="flex h-4/5 flex-col gap-5 overflow-auto">
        {cartItems.map((item) => (
          <CartItem drawer product={item} key={item.id} />
        ))}
      </div>

      <Link
        to="cart"
        className="my-5 flex w-full items-center justify-center gap-2 rounded-md border border-black bg-[#F69FE2] px-5 py-2.5 shadow-neo hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neoHover "
      >
        <p className="lg:text-xl">Checkout</p>
      </Link>
    </div>
  );
}

export default Drawer;
