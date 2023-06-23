import React, { useReducer } from 'react';
import { reduceFn } from './CartReducer';
import { CartContext } from './CartContext';
import {
  ADD_ITEM,
  REMOVE_ITEM,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from '../types';

const CartState = (props) => {
  const initialState = {
    cart: [],
  };

  const [state, dispatch] = useReducer(reduceFn, initialState);

  const addItem = (product) => {
    dispatch({ type: ADD_ITEM, payload: product });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  const increaseItemQuantity = (id) => {
    dispatch({ type: INCREASE_QUANTITY, payload: id });
  };

  const decreaseItemQuantity = (id) => {
    dispatch({ type: DECREASE_QUANTITY, payload: id });
  };

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        addItem,
        removeItem,
        increaseItemQuantity,
        decreaseItemQuantity,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;
