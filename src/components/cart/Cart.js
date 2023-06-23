import CartItem from './CartItem';
import React, { useContext } from 'react';
import { CartContext } from '../../context/Cart/CartContext';

const Cart = () => {
  const { cart } = useContext(CartContext);

  const totalAmount = cart.reduce((prevItem, current) => {
    const itemTotal = current.price * current.quantity;
    return prevItem + itemTotal;
  }, 0);

  return (
    <>
      <div className="title-component">My Cart</div>

      <div className="cart-details">
        <div className="cart-section">
          {cart.length < 1 ? (
            <h1>No items in the cart :(</h1>
          ) : (
            cart.map((item) => <CartItem props={item} key={item.id} />)
          )}
        </div>
      </div>

      <div className="fixed">
        <div className="cart-total">
          TOTAL:{' '}
          <span>{`$${
            Math.round(totalAmount * 100 + Number.EPSILON) / 100
          }`}</span>
        </div>

        <div className="cart-checkout btn btn-variant">Checkout</div>
      </div>
    </>
  );
};

export default Cart;
