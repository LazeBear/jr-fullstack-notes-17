import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    setIsLoggedIn: (state, { payload: isLoggedIn }) => {
      state.isLoggedIn = isLoggedIn;
      return state;
    },
  },
});

export const { setIsLoggedIn } = authSlice.actions;
