import {createSlice} from '@reduxjs/toolkit';
import {betterSaveCartData} from './thunk-actions';

const initialUIState = {
  showCart: false,
  notification: undefined
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState: initialUIState,
  reducers: {
    toggleShowCart: state => {
      // immer
      state.showCart = !state.showCart;
      return state;
    },
    toggleNotification: (state, {payload}) => { // title, message, status
      const notification = {
        title: payload.title,
        message: payload.message,
        status: payload.status
      };

      state.notification = notification;

      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(betterSaveCartData.fulfilled, (state, action) => {
      const notification = {
        title: 'Saved...',
        status: 'success',
        message: 'Cart data is saved.'
      };

      state.notification = notification;
      return state;
    });

    builder.addCase(betterSaveCartData.pending, (state, action) => {
      const notification = {
        title: 'Saving...',
        status: 'success',
        message: 'Saving your cart data'
      };

      state.notification = notification;
      return state;
    });

    builder.addCase(betterSaveCartData.rejected, (state, action) => {
      const notification = {
        title: 'Something went wrong...',
        status: 'error',
        message: 'Cart saving was failed.'
      };

      state.notification = notification;
      return state;
    });
  }
});

export const {toggleShowCart, toggleNotification} = uiSlice.actions;