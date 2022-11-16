import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './authSlice';
import { cartSlice } from './cartSlice';
import { uiSlice } from './uiSlice';

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
    auth: authSlice.reducer,
  },
});
