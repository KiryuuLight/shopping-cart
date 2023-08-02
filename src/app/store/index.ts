import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../features/CartSlice';
import popSlice from '../features/PopSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    drawerVisibility: popSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
