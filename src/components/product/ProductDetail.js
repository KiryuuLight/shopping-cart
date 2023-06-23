import { getProduct } from '../../api';
import React, { useState, useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { CartContext } from '../../context/Cart/CartContext';

import minusSvg from '../../img/icon/minus.svg';
import plusSvg from '../../img/icon/plus.svg';

export const loader = ({ params }) => {
  return getProduct(params.id);
};

const ProductDetail = () => {
  const [productAdded, setProductAdded] = useState(false);
  const props = useLoaderData();
  const [quantity, setQuantity] = useState(0);
  const { addItem } = useContext(CartContext);

  const handleProductAdded = () => {
    setProductAdded(true);
    addItem(product);
    setTimeout(() => {
      setProductAdded(false);
    }, 1500);
  };

  const product = {
    id: props.id,
    title: props.title,
    img: props.image,
    price: props.price,
    quantity: quantity,
  };

  const increaseQuantity = () =>
    setQuantity((previousValue) => previousValue + 1);

  const decreaseQuantity = () =>
    setQuantity((previousValue) => previousValue - 1);

  return (
    <>
      <div className="title-component">Products</div>

      <div className="d-flex-center">
        <div className="product-item mg-50">
          <div className="product-item-img">
            <img src={props.image} alt="" />
          </div>

          <div className="product-item-container">
            <p className="product-item-title blue">{props.title}</p>

            <p className="product-item-category">{props.category}</p>

            <h2 className="product-item-price purple-variant">{`$${props.price}`}</h2>

            <p className="product-item-description">{props.description}</p>

            <div className="product-item-quantity">
              <p>QUANTITY</p>

              <div className="product-item-quantity-input">
                {quantity < 1 ? (
                  <button className="btn" onClick={decreaseQuantity} disabled>
                    <img src={minusSvg} alt="" className="icon-variant" />
                  </button>
                ) : (
                  <button className="btn" onClick={decreaseQuantity}>
                    <img src={minusSvg} alt="" className="icon-variant" />
                  </button>
                )}

                <input
                  type="text"
                  onChange={(e) => setQuantity(e.target.value)}
                  value={quantity}
                />

                <button className="btn" onClick={increaseQuantity}>
                  <img src={plusSvg} alt="" className="icon-variant" />
                </button>
              </div>
            </div>

            <div className="product-item-buttons">
              {quantity >= 1 ? (
                <button
                  onClick={handleProductAdded}
                  className="btn btn-variant purple "
                >
                  {productAdded ? '✓ Added' : 'Add to cart'}
                </button>
              ) : (
                <button className="btn btn-variant purple op-50" disabled>
                  {productAdded ? '✓ Added' : 'Add to cart'}
                </button>
              )}

              <Link to="/cart" className="btn btn-variant sea">
                Proceed to checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
