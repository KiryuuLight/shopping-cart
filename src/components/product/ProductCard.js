import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/Cart/CartContext';
import { Link } from 'react-router-dom';

const ProductCard = ({ props }) => {
  const [productAdded, setProductAdded] = useState(false);
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
    quantity: 1,
  };

  return (
    <div className="product-card">
      <div className="product-card-img">
        <img src={props.image} alt="productCard" />
      </div>
      <p className="product-card-text blue">{props.title}</p>
      <p className="product-card-price purple-variant">{`$${props.price}`}</p>

      <div className="product-card-btns">
        <Link to={`${props.id}`} className="btn btn-variant aqua p-y5x8">
          View
        </Link>
        <button
          className="btn btn-variant purple p-y5x8"
          onClick={handleProductAdded}
        >
          {productAdded ? '✓ Added' : 'Add to cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
