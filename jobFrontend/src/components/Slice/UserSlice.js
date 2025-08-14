// src/redux/slices/userSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { getItem, setItem, removeItem } from '../../utils/localStorage';

const initialState = {
  user: getItem("user") || null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      setItem("user", action.payload);
    },
    removeUser: (state) => {
      state.user = null;
      removeItem("user");
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
