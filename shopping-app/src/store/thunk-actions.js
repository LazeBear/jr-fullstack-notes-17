import { createAsyncThunk } from '@reduxjs/toolkit';
import { setIsLoggedIn } from './authSlice';
import { loadToCart } from './cartSlice';
import { toggleNotification } from './uiSlice';

const BASE_URL = 'http://localhost:8000/v1';

export const betterSaveCartData = createAsyncThunk(
  'ui/saveCartData',
  async (cart) => {
    const response = await fetch(`${BASE_URL}/carts`, {
      method: 'PUT',
      body: JSON.stringify(cart),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });

    if (!response.ok) {
      throw new Error();
    }

    return;
  }
);

export const fetchCartData = createAsyncThunk(
  'cart/fetchCartData',
  async (arg, { dispatch }) => {
    const response = await fetch(`${BASE_URL}/carts`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });

    if (!response.ok) {
      throw new Error();
    }

    const cartData = await response.json();
    dispatch(loadToCart(cartData));
    return;
  }
);

// action creator
// does not dispatch or return the action itself
// return another function
// that function it returns will eventually return/dispatch action(s)
export const saveCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      toggleNotification({
        status: 'success',
        title: 'Saving...',
        message: 'Saving your cart data',
      })
    );

    try {
      const response = await fetch(`${BASE_URL}/carts`, {
        method: 'PUT',
        body: JSON.stringify(cart),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
      });

      if (!response.ok) {
        throw new Error();
      }

      dispatch(
        toggleNotification({
          status: 'success',
          title: 'Saved...',
          message: 'Cart data is saved.',
        })
      );
    } catch (e) {
      dispatch(
        toggleNotification({
          status: 'error',
          title: 'Something went wrong...',
          message: 'Cart saving was failed.',
        })
      );
    }
  };
};

export const userRegister = (payload) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${BASE_URL}/users`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
      });

      if (!response.ok) {
        throw new Error();
      }

      dispatch(setIsLoggedIn(true));
      dispatch(fetchCartData());

      dispatch(
        toggleNotification({
          status: 'success',
          title: 'Register',
          message: 'Register success',
        })
      );
    } catch (e) {
      dispatch(
        toggleNotification({
          status: 'error',
          title: 'Register',
          message: 'Register failed',
        })
      );
    }
  };
};

export const userLogin = (payload) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error();
      }

      const body = await response.json();
      localStorage.setItem('jwt', body.token);
      // set ajax request's authentication headers
      dispatch(setIsLoggedIn(true));
      dispatch(fetchCartData());

      dispatch(
        toggleNotification({
          status: 'success',
          title: 'Login',
          message: 'Login success',
        })
      );
    } catch (e) {
      dispatch(
        toggleNotification({
          status: 'error',
          title: 'Login',
          message: 'Login failed',
        })
      );
    }
  };
};
