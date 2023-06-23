import {
  ADD_ITEM,
  REMOVE_ITEM,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from '../types';

export const reduceFn = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case ADD_ITEM:
      const elementExist = state.cart.findIndex(
        (value) => value.id === payload.id
      );

      if (elementExist >= 0) {
        const updateItems = state.cart.map((prevItem) =>
          prevItem.id === payload.id
            ? {
                ...prevItem,
                quantity: prevItem.quantity + payload.quantity,
              }
            : prevItem
        );

        return {
          ...state,
          cart: updateItems,
        };
      }

      return {
        ...state,
        cart: [...state.cart, payload],
      };

    case REMOVE_ITEM:
      const newItems = state.cart.filter((value) => value.id !== payload);

      return {
        ...state,
        cart: newItems,
      };
    case INCREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };

    case DECREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === payload ? { ...item, quantity: item.quantity - 1 } : item
        ),
      };

    default:
      throw new Error('Action not valid');
  }
};
