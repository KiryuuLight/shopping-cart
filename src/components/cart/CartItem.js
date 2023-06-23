import minusSvg from '../../img/icon/minus.svg';
import plusSvg from '../../img/icon/plus.svg';
import closeSvg from '../../img/icon/close.svg';
import { useContext } from 'react';
import { CartContext } from '../../context/Cart/CartContext';

const CartItem = ({ props }) => {
  const { removeItem, increaseItemQuantity, decreaseItemQuantity } =
    useContext(CartContext);

  const handleChange = () => {};

  return (
    <div className="cart-item">
      <div className="cart-item-img">
        <img src={props.img} alt="" />
      </div>

      <div className="cart-item-details">
        <div className="cart-item-principal">
          <p className="cart-item-text blue">{props.title}</p>

          <button
            className="btn cart-item-remove"
            onClick={() => removeItem(props.id)}
          >
            <img className="icon-variant" src={closeSvg} alt="" />
          </button>
        </div>

        <div className="cart-item-menu">
          <div className="cart-item-price">
            <p className="cart-item-id">
              <span>ID:</span> {props.id}
            </p>

            <p className="cart-item-price-single">
              {`$${props.price}`}
              <span> Each</span>
            </p>
            <p className="cart-item-price-subtotal">
              {`$${props.price * props.quantity}`}
              <span> Subtotal</span>
            </p>
          </div>

          <div className="product-item-quantity-input cart-btn-variant">
            {props.quantity <= 1 ? (
              <button
                disabled
                className="btn"
                onClick={() => decreaseItemQuantity(props.id)}
              >
                <img src={minusSvg} alt="" className="icon-variant" />
              </button>
            ) : (
              <button
                className="btn"
                onClick={() => decreaseItemQuantity(props.id)}
              >
                <img src={minusSvg} alt="" className="icon-variant" />
              </button>
            )}

            <input
              type="text"
              name=""
              id=""
              onChange={handleChange}
              value={props.quantity}
            />

            <button
              className="btn"
              onClick={() => increaseItemQuantity(props.id)}
            >
              <img src={plusSvg} alt="" className="icon-variant" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
