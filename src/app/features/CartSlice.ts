import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../domain/typings';
import findTotal from '../helpers';

interface CartState {
  items: Product[];
  subTotal: number;
}

const initialState: CartState = {
  items: [],
  subTotal: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Product>) {
      const productExist = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (productExist !== -1) {
        state.items[productExist] = action.payload;
      } else {
        state.items.push(action.payload);
      }

      state.subTotal = findTotal(state.items);
    },
    removeItem(state, action: PayloadAction<number>) {
      const removeItemArray = state.items.filter(
        (item) => item.id !== action.payload
      );

      state.items = removeItemArray;
      state.subTotal = findTotal(state.items);
    },

    increaseQuantity(state, action: PayloadAction<number>) {
      const productExist = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (productExist !== -1) {
        state.items[productExist].quantity += 1;
      }

      state.subTotal = findTotal(state.items);
    },

    decreaseQuantity(state, action: PayloadAction<number>) {
      const productExist = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (productExist !== -1 && state.items[productExist].quantity > 1) {
        state.items[productExist].quantity -= 1;
      }

      state.subTotal = findTotal(state.items);
    },
  },
});
export const { addItem, removeItem, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
