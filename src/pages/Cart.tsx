import CartItem from '../components/CartItem';
import { useAppSelector } from '../app/hooks';

const DELIVERY_FEE = 28;

function Cart() {
  const cartItems = useAppSelector((state) => state.cart.items);
  const subTotal = useAppSelector((state) => state.cart.subTotal);

  return (
    <div className="container mx-auto px-2">
      <p className="py-4 text-center text-lg">My cart</p>

      <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-12">
        {cartItems.length === 0 ? (
          <div className=" text-center text-lg">No items :(</div>
        ) : (
          <div className="flex lg:gap-12">
            <div className="flex flex-col items-center gap-8">
              {cartItems.map((item) => (
                <CartItem product={item} drawer={false} key={item.id} />
              ))}
            </div>

            <div className="gap flex flex-col items-center gap-4 py-4">
              <div className="flex w-80 justify-between lg:w-96">
                <p>Sub total</p>
                <p>${subTotal.toFixed(2)}</p>
              </div>

              <div className="flex w-80 justify-between lg:w-96">
                <p>Delivery</p>
                <p>${DELIVERY_FEE.toFixed(2)}</p>
              </div>

              <div className="w-80 border-b border-black lg:w-96" />

              <div className="flex w-80 justify-between lg:w-96">
                <p>Total</p>
                <p>${(subTotal + DELIVERY_FEE).toFixed(2)}</p>
              </div>

              <button
                type="button"
                className="w-80 rounded-md border border-black bg-[#F69FE2] px-5 py-2.5 shadow-[2px_2px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_#000000] lg:w-96"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
